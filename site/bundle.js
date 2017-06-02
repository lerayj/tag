/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

var firebase=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=void 0;if(void 0!==e)r=e;else if("undefined"!=typeof self)r=self;else try{r=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var i=r.Promise||n(8);t.local={Promise:i,GoogPromise:i}}).call(t,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=(0,r.createFirebaseNamespace)();t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){return i(void 0,e)}function i(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=i(e[n],t[n]));return e}function o(e,t,n){e[t]=n}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCopy=r,t.deepExtend=i,t.patchProperty=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){var t=a;return a=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.patchCapture=i;var a=Error.captureStackTrace,c=function e(t,n){if(r(this,e),this.code=t,this.message=n,a)a(this,s.prototype.create);else{var i=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return i.stack}})}};c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="FirebaseError";var s=t.ErrorFactory=function(){function e(t,n,i){r(this,e),this.service=t,this.serviceName=n,this.errors=i,this.pattern=/\{\$([^}]+)}/g}return o(e,[{key:"create",value:function(e,t){void 0===t&&(t={});var n=this.errors[e],r=this.service+"/"+e,i=void 0;i=void 0===n?"Error":n.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?r.toString():"<"+n+"?>"}),i=this.serviceName+": "+i+" ("+r+").";var o=new c(r,i);for(var a in t)t.hasOwnProperty(a)&&"_"!==a.slice(-1)&&(o[a]=t[a]);return o}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){function e(e){e=e||d;var t=r[e];return void 0===t&&o("no-app",{name:e}),t}function t(e,t){Object.keys(a).forEach(function(r){var i=n(e,r);null!==i&&h[i]&&h[i](t,e)})}function n(e,t){if("serverAuth"===t)return null;var n=t,r=e.options;return"auth"===t&&(r.serviceAccount||r.credential)&&(n="serverAuth","serverAuth"in a||o("sa-not-supported")),n}var r={},a={},h={},v={__esModule:!0,initializeApp:function(e,n){void 0===n?n=d:"string"==typeof n&&""!==n||o("bad-app-name",{name:n+""}),void 0!==r[n]&&o("duplicate-app",{name:n});var i=new p(e,n,v);return r[n]=i,t(i,"create"),void 0!=i.INTERNAL&&void 0!=i.INTERNAL.getToken||(0,c.deepExtend)(i,{INTERNAL:{getUid:function(){return null},getToken:function(){return l.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}}),i},app:e,apps:null,Promise:l,SDK_VERSION:"3.9.0",INTERNAL:{registerService:function(t,n,r,i,s){a[t]&&o("duplicate-service",{name:t}),a[t]=s?n:function(e,t){return n(e,t,d)},i&&(h[t]=i);var u=void 0;return u=function(n){return void 0===n&&(n=e()),"function"!=typeof n[t]&&o("invalid-app-argument",{name:t}),n[t]()},void 0!==r&&(0,c.deepExtend)(u,r),v[t]=u,u},createFirebaseNamespace:i,extendNamespace:function(e){(0,c.deepExtend)(v,e)},createSubscribe:s.createSubscribe,ErrorFactory:u.ErrorFactory,removeApp:function(e){t(r[e],"delete"),delete r[e]},factories:a,useAsService:n,Promise:f.local.GoogPromise,deepExtend:c.deepExtend}};return(0,c.patchProperty)(v,"default",v),Object.defineProperty(v,"apps",{get:function(){return Object.keys(r).map(function(e){return r[e]})}}),(0,c.patchProperty)(e,"App",p),v}function o(e,t){throw v.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createFirebaseNamespace=i;var c=n(3),s=n(6),u=n(4),f=n(0),l=f.local.Promise,d="[DEFAULT]",p=function(){function e(t,n,i){var o=this;r(this,e),this.firebase_=i,this.isDeleted_=!1,this.services_={},this.name_=n,this.options_=(0,c.deepCopy)(t);var a="credential"in this.options_,s="serviceAccount"in this.options_;if(a||s){var u=s?"serviceAccount":"credential";"undefined"!=typeof console&&console.log("The '"+u+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.")}Object.keys(i.INTERNAL.factories).forEach(function(e){var t=i.INTERNAL.useAsService(o,e);if(null!==t){var n=o.getService.bind(o,t);(0,c.patchProperty)(o,e,n)}})}return a(e,[{key:"delete",value:function(){var e=this;return new l(function(t){e.checkDestroyed_(),t()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);var t=[];return Object.keys(e.services_).forEach(function(n){Object.keys(e.services_[n]).forEach(function(r){t.push(e.services_[n][r])})}),l.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})}},{key:"getService",value:function(e,t){this.checkDestroyed_(),void 0===this.services_[e]&&(this.services_[e]={});var n=t||d;if(void 0===this.services_[e][n]){var r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),t);return this.services_[e][n]=r,r}return this.services_[e][n]}},{key:"extendApp",value:function(e){(0,c.deepExtend)(this,e)}},{key:"checkDestroyed_",value:function(){this.isDeleted_&&o("app-deleted",{name:this.name_})}},{key:"name",get:function(){return this.checkDestroyed_(),this.name_}},{key:"options",get:function(){return this.checkDestroyed_(),this.options_}}]),e}();p.prototype.name&&p.prototype.options||p.prototype.delete||console.log("dc");var h={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},v=new u.ErrorFactory("app","Firebase",h)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=new d(e,t);return n.subscribe.bind(n)}function o(e,t){return function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];l.resolve(!0).then(function(){e.apply(void 0,r)}).catch(function(e){t&&t(e)})}}function a(e,t){if("object"!==(void 0===e?"undefined":s(e))||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var c=o.value;if(c in e&&"function"==typeof e[c])return!0}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}return!1}function c(){}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createSubscribe=i,t.async=o;var f=n(0),l=f.local.Promise,d=function(){function e(t,n){var i=this;r(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=l.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(i)}).catch(function(e){i.error(e)})}return u(e,[{key:"next",value:function(e){this.forEachObserver(function(t){t.next(e)})}},{key:"error",value:function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)}},{key:"complete",value:function(){this.forEachObserver(function(e){e.complete()}),this.close()}},{key:"subscribe",value:function(e,t,n){var r=this,i=void 0;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=a(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=c),void 0===i.error&&(i.error=c),void 0===i.complete&&(i.complete=c);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{r.finalError?i.error(r.finalError):i.complete()}catch(e){}}),this.observers.push(i),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))}}]),e}()},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function o(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):m=-1,h.length&&c())}function c(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++m<t;)p&&p[m].run();m=-1,t=h.length}p=null,v=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var f,l,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var p,h=[],v=!1,m=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||i(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){(function(t){!function(n){function r(){}function i(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?c:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)})}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(i(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var d=setTimeout;o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new f(e,t,n)),n},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(e){r(o,e)},n)}t[o]=a,0==--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,i=e.length;r<i;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=o:n.Promise||(n.Promise=o)}(this)}).call(t,n(10).setImmediate)},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[s]=r,c(s),s++}function i(e){delete u[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(f)setTimeout(a,0,e);else{var t=u[e];if(t){f=!0;try{o(t)}finally{i(e),f=!1}}}}if(!e.setImmediate){var c,s=1,u={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),c=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;c=function(t){var n=l.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){c=function(e){setTimeout(a,0,e)}}(),d.setImmediate=r,d.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(1),n(7))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(9),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){e.exports=n(2)}]);module.exports=firebase;
//# sourceMappingURL=app.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).setImmediate, __webpack_require__(2).clearImmediate))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exporter = {};

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
function validate(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}
exporter.validate = validate;

function validate_async(email, callback)
{
    var isValidEmail = false;
    try {
        isValidEmail = exporter.validate(email);
        callback(null, isValidEmail);
    }
    catch(err) {
        callback(err, isValidEmail)
    }
}
exporter.validate_async = validate_async;

module.exports = exporter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var firebase = __webpack_require__(1);
__webpack_require__(10);
var Storage, XMLHttpRequest;

__webpack_require__(11);
__webpack_require__(13);
var AsyncStorage;

__webpack_require__(12);
exports.default = firebase;
module.exports = exports['default'];
//# sourceMappingURL=firebase.js.map


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*eslint no-var:0, prefer-arrow-callback: 0, object-shorthand: 0 */



var Punycode = __webpack_require__(16);


var internals = {};


//
// Read rules from file.
//
internals.rules = __webpack_require__(15).map(function (rule) {

  return {
    rule: rule,
    suffix: rule.replace(/^(\*\.|\!)/, ''),
    wildcard: rule.charAt(0) === '*',
    exception: rule.charAt(0) === '!'
  };
});


//
// Check is given string ends with `suffix`.
//
internals.endsWith = function (str, suffix) {

  return str.indexOf(suffix, str.length - suffix.length) !== -1;
};


//
// Find rule for a given domain.
//
internals.findRule = function (domain) {

  var punyDomain = Punycode.toASCII(domain);
  return internals.rules.reduce(function (memo, rule) {

    var punySuffix = Punycode.toASCII(rule.suffix);
    if (!internals.endsWith(punyDomain, '.' + punySuffix) && punyDomain !== punySuffix) {
      return memo;
    }
    // This has been commented out as it never seems to run. This is because
    // sub tlds always appear after their parents and we never find a shorter
    // match.
    //if (memo) {
    //  var memoSuffix = Punycode.toASCII(memo.suffix);
    //  if (memoSuffix.length >= punySuffix.length) {
    //    return memo;
    //  }
    //}
    return rule;
  }, null);
};


//
// Error codes and messages.
//
exports.errorCodes = {
  DOMAIN_TOO_SHORT: 'Domain name too short.',
  DOMAIN_TOO_LONG: 'Domain name too long. It should be no more than 255 chars.',
  LABEL_STARTS_WITH_DASH: 'Domain name label can not start with a dash.',
  LABEL_ENDS_WITH_DASH: 'Domain name label can not end with a dash.',
  LABEL_TOO_LONG: 'Domain name label should be at most 63 chars long.',
  LABEL_TOO_SHORT: 'Domain name label should be at least 1 character long.',
  LABEL_INVALID_CHARS: 'Domain name label can only contain alphanumeric characters or dashes.'
};


//
// Validate domain name and throw if not valid.
//
// From wikipedia:
//
// Hostnames are composed of series of labels concatenated with dots, as are all
// domain names. Each label must be between 1 and 63 characters long, and the
// entire hostname (including the delimiting dots) has a maximum of 255 chars.
//
// Allowed chars:
//
// * `a-z`
// * `0-9`
// * `-` but not as a starting or ending character
// * `.` as a separator for the textual portions of a domain name
//
// * http://en.wikipedia.org/wiki/Domain_name
// * http://en.wikipedia.org/wiki/Hostname
//
internals.validate = function (input) {

  // Before we can validate we need to take care of IDNs with unicode chars.
  var ascii = Punycode.toASCII(input);

  if (ascii.length < 1) {
    return 'DOMAIN_TOO_SHORT';
  }
  if (ascii.length > 255) {
    return 'DOMAIN_TOO_LONG';
  }

  // Check each part's length and allowed chars.
  var labels = ascii.split('.');
  var label;

  for (var i = 0; i < labels.length; ++i) {
    label = labels[i];
    if (!label.length) {
      return 'LABEL_TOO_SHORT';
    }
    if (label.length > 63) {
      return 'LABEL_TOO_LONG';
    }
    if (label.charAt(0) === '-') {
      return 'LABEL_STARTS_WITH_DASH';
    }
    if (label.charAt(label.length - 1) === '-') {
      return 'LABEL_ENDS_WITH_DASH';
    }
    if (!/^[a-z0-9\-]+$/.test(label)) {
      return 'LABEL_INVALID_CHARS';
    }
  }
};


//
// Public API
//


//
// Parse domain.
//
exports.parse = function (input) {

  if (typeof input !== 'string') {
    throw new TypeError('Domain name must be a string.');
  }

  // Force domain to lowercase.
  var domain = input.slice(0).toLowerCase();

  // Handle FQDN.
  // TODO: Simply remove trailing dot?
  if (domain.charAt(domain.length - 1) === '.') {
    domain = domain.slice(0, domain.length - 1);
  }

  // Validate and sanitise input.
  var error = internals.validate(domain);
  if (error) {
    return {
      input: input,
      error: {
        message: exports.errorCodes[error],
        code: error
      }
    };
  }

  var parsed = {
    input: input,
    tld: null,
    sld: null,
    domain: null,
    subdomain: null,
    listed: false
  };

  var domainParts = domain.split('.');

  // Non-Internet TLD
  if (domainParts[domainParts.length - 1] === 'local') {
    return parsed;
  }

  var handlePunycode = function () {

    if (!/xn--/.test(domain)) {
      return parsed;
    }
    if (parsed.domain) {
      parsed.domain = Punycode.toASCII(parsed.domain);
    }
    if (parsed.subdomain) {
      parsed.subdomain = Punycode.toASCII(parsed.subdomain);
    }
    return parsed;
  };

  var rule = internals.findRule(domain);

  // Unlisted tld.
  if (!rule) {
    if (domainParts.length < 2) {
      return parsed;
    }
    parsed.tld = domainParts.pop();
    parsed.sld = domainParts.pop();
    parsed.domain = [parsed.sld, parsed.tld].join('.');
    if (domainParts.length) {
      parsed.subdomain = domainParts.pop();
    }
    return handlePunycode();
  }

  // At this point we know the public suffix is listed.
  parsed.listed = true;

  var tldParts = rule.suffix.split('.');
  var privateParts = domainParts.slice(0, domainParts.length - tldParts.length);

  if (rule.exception) {
    privateParts.push(tldParts.shift());
  }

  if (!privateParts.length) {
    return handlePunycode();
  }

  if (rule.wildcard) {
    tldParts.unshift(privateParts.pop());
  }

  if (!privateParts.length) {
    return handlePunycode();
  }

  parsed.tld = tldParts.join('.');
  parsed.sld = privateParts.pop();
  parsed.domain = [parsed.sld,  parsed.tld].join('.');

  if (privateParts.length) {
    parsed.subdomain = privateParts.join('.');
  }

  return handlePunycode();
};


//
// Get domain.
//
exports.get = function (domain) {

  if (!domain) {
    return null;
  }
  return exports.parse(domain).domain || null;
};


//
// Check whether domain belongs to a known public suffix.
//
exports.isValid = function (domain) {

  var parsed = exports.parse(domain);
  return Boolean(parsed.domain && parsed.listed);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

// EXPOSE
var _sizzle = window.Sizzle;

Sizzle.noConflict = function() {
	if ( window.Sizzle === Sizzle ) {
		window.Sizzle = _sizzle;
	}

	return Sizzle;
};

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Sizzle; }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// Sizzle requires that there be a global window in Common-JS like environments
} else if ( typeof module !== "undefined" && module.exports ) {
	module.exports = Sizzle;
} else {
	window.Sizzle = Sizzle;
}
// EXPOSE

})( window );


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(19);
var bytesToUuid = __webpack_require__(18);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sizzle__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sizzle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sizzle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_V1__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid_V1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid_V1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_email_validator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_psl__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_psl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_psl__);







// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbYDeR_xY5rGkJBkWv9w1Wof1D5i-SWpo",
    authDomain: "tagmanager-52752.firebaseapp.com",
    databaseURL: "https://tagmanager-52752.firebaseio.com",
    projectId: "tagmanager-52752",
    storageBucket: "tagmanager-52752.appspot.com",
    messagingSenderId: "998790286873"
};
__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(config);

var database = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database();

//var websiteKey = window.location.hostname.replace(/\./g, "_");
//console.log("host: ", window.location.host, " psl: ", psl.parse(window.location.host).domain, "real psl: ", psl);
var websiteKey = __WEBPACK_IMPORTED_MODULE_5_psl___default.a.parse(window.location.host).domain.replace(/\./g, "_");
console.log("websiteKey: ", websiteKey);

//TEST
// var websiteKey = "villagesclubsdusoleil_com";
//var websiteKey = "toto_com";

var sessionId = getCookieSession();
console.log("Session: ", sessionId);
getConfig(websiteKey).then(function (config) {
    console.log("CONFIG: ", config);
    //saveMail(config, websiteKey, sessionId);
    chooseEmailCapture(config, websiteKey, sessionId);
    confirmSoldBasket(config, websiteKey, sessionId);
    //    window.onload = saveBasket(config, websiteKey, sessionId);
    saveBasket(config, websiteKey, sessionId);
});

//Get the config for given website.
//Return Promise
function getConfig(websiteId) {
    return new Promise(function (resolve, reject) {
        console.log("websiteId: ", websiteId);
        var conf = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('websites/' + websiteId + '/config');
        conf.on('value', function (snapshot) {
            return resolve(snapshot.val());
        });
    });
}

//TODO: Faire des règles plus générique sur les urls
function confirmSoldBasket(config, websiteId, sessionId) {
    var currentUrl = window.location.pathname.substr(1);
    var findUrl = config.confirm_url.find(function (url) {
        return currentUrl == url;
    });
    console.log("Save to: ", 'websites/' + websiteId + '/sessions/' + sessionId);
    if (findUrl) {
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('websites/' + websiteId + '/sessions/' + sessionId).update({ converted: true });
        __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.remove('user_tag_id');
    } else console.log("Not Converted");
}

function getCookieSession() {
    var cookie = __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('user_tag_id');
    if (cookie) {
        console.log("Cookie already set: ", cookie);
    } else {
        __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.set('user_tag_id', __WEBPACK_IMPORTED_MODULE_3_uuid_V1___default()());
        cookie = __WEBPACK_IMPORTED_MODULE_1_js_cookie___default.a.get('user_tag_id');
        console.log("Setting cookie to: ", cookie);
    }
    return cookie;
}

function saveMail(selector, type, websiteId, sessionId) {
    console.log("Capture mail");
    var mail = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(selector);
    console.log("Mail: ", mail);
    if (mail.length != 0) {
        var refreshIntervalId = window.setInterval(function () {
            mail = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(selector)[0].value;
            console.log("mail: ", mail, " valid: ", __WEBPACK_IMPORTED_MODULE_4_email_validator___default.a.validate(mail));
            if (__WEBPACK_IMPORTED_MODULE_4_email_validator___default.a.validate(mail)) {
                console.log("Save: ", mail, " for session: ", sessionId);
                var update = {};
                update[type] = mail;
                __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref('websites/' + websiteId + '/sessions/' + sessionId + '/emails').update(update);
                setTimeout(function () {
                    clearInterval(refreshIntervalId);
                }, 2000);
            }
        }, 500);
    }
}

function chooseEmailCapture(config, websiteId, sessionId) {
    var currentUrl = window.location.pathname.substr(1);
    if (currentUrl == config.emails.checkout.url) {
        //TODO: capture checkout
        console.log("--CHECKOUT MAIL--");
        saveMail(config.emails.checkout.existing, "email_checkout_existing", websiteId, sessionId);
        saveMail(config.emails.checkout.guest, "email_checkout_guest", websiteId, sessionId);
        saveMail(config.emails.checkout.new, "email_checkout_new", websiteId, sessionId);
    } else if (currentUrl == config.emails.login.url) {
        //TODO: capture login
        console.log("--LOGIN MAIL--");
        saveMail(config.emails.login.selector, "email_login", websiteId, sessionId);
    } else if (currentUrl == config.emails.register.url) {
        //TODO: capture register
        console.log("--REGISTER MAIL--");
        saveMail(config.emails.register.selector, "email_register", websiteId, sessionId);
    }
    //TODO: capture everywhere
    saveMail(config.emails.everywhere, "email_top_login", websiteId, sessionId);
}

//TODO: Faire des règles plus générique sur les urls
//TODO: Faire la config approprié au test
function saveBasket(config, websiteId, sessionId) {
    console.log("config url: ", config.basket.url, " current url: ", window.location.pathname.substr(1));
    if (config.basket.url == window.location.pathname.substr(1) || config.basket.url + '/' == window.location.pathname.substr(1)) {
        var total = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(config.basket.total)[0].textContent,
            product_line = config.basket.product_line ? config.basket.product_line : "",
            linesProducts = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(config.basket.container + " " + product_line),
            updates = {},
            basket = 'websites/' + websiteId + '/sessions/' + sessionId + '/basket';
        console.log("linesProducts: ", linesProducts, " selector: ", config.basket.container + " " + product_line);

        var saveBasketsHandler = { hotel: saveHotelBasket, retail: saveRetailBasket };
        console.log("CHOICE: ", config.type);
        updates = saveBasketsHandler[config.type](config, basket, linesProducts, updates);
        console.log("Updates: ", updates);
        updates[basket + '/total'] = total.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/^\s+|\s+$/g, "");
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.database().ref().update(updates);
    }
}

var saveHotelBasket = function saveHotelBasket(config, basket, linesProducts, updates) {
    //Test select n elem
    //config.basket.container
    console.log("=====HOTEL=====");
    var value = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(config.basket.destination, linesProducts[0]);
    console.log("Destination: ", value, " config.basket.destination: ", config.basket.destination);
    var departure_date = attributeValue(config, 'departure_date', linesProducts[0]),
        destination = attributeValue(config, 'destination', linesProducts[0]),
        location_description = attributeValue(config, 'location_description', linesProducts[0]),
        nb_traveler = attributeValue(config, 'nb_traveler', linesProducts[0]),
        stay_time = attributeValue(config, 'stay_time', linesProducts[0]);

    updates[basket + '/departure_date'] = attributeValue(config, 'departure_date', linesProducts[0]);
    updates[basket + '/destination'] = attributeValue(config, 'destination', linesProducts[0]);
    updates[basket + '/location_description'] = attributeValue(config, 'location_description', linesProducts[0]);
    updates[basket + '/nb_traveler'] = attributeValue(config, 'nb_traveler', linesProducts[0]);
    updates[basket + '/stay_time'] = attributeValue(config, 'stay_time', linesProducts[0]);

    return updates;
};

var saveRetailBasket = function saveRetailBasket(config, basket, linesProducts, updates) {
    linesProducts.forEach(function (line, idx) {
        var product_id = attributeValue(config, 'product_id', line);
        console.log("Product_id: ", product_id);

        var product_name = attributeValue(config, 'product_name', line);
        console.log("Product name: ", product_name);
        updates[basket + '/products/' + product_id + '/product_name'] = product_name;

        var product_image = attributeValue(config, 'product_image', line);
        console.log("Product image: ", product_image);
        updates[basket + '/products/' + product_id + '/product_image'] = product_image;

        var product_price = attributeValue(config, 'product_price', line);
        console.log("Product price: ", product_price);
        updates[basket + '/products/' + product_id + '/product_price'] = product_price;

        var product_quantity = attributeValue(config, 'product_quantity', line);
        console.log("Product quantity: ", product_quantity);
        updates[basket + '/products/' + product_id + '/product_quantity'] = product_quantity;
    });
    return updates;
};

//Si l'id_product est un attribut: @selector:attribut (eg RdC: @.cartProduct:id)
function attributeValue(config, configKeyName, line) {
    var configRule = config.basket[configKeyName],
        result = null;
    if (configRule[0] == '@') {
        var options = configRule.substr(1).split(':');
        var selection = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(options[0], line);
        if (selection.length == 0 && __WEBPACK_IMPORTED_MODULE_0_sizzle___default.a.matchesSelector(line, options[0])) {
            result = line[options[1]];
        } else {
            var value = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(options[0], line)[0];

            console.log(" line: ", line, " selecteur: ", options[0], "value: ", value, "result: ", value[options[1]]);
            result = value[options[1]];
        }
    } else {
        result = __WEBPACK_IMPORTED_MODULE_0_sizzle___default()(configRule, line)[0].textContent;
    }
    return result.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/^\s+|\s+$/g, "");
}

//TODO: For SAP navigation without HashChange
// window.onpopstate = function(event) {
//   console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
// };

//TODO: For SAP  navigation with HashChange
//location.hash

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(1);
(function(){
(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==ca(a)},fa=function(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==ca(a)},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,
b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,
1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.xd=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Tf=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);t.call(this,ma.apply(null,b));b.shift()};r(wa,t);wa.prototype.name="AssertionError";
var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},v=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){ga(a)||xa("Expected number but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){m(a)||xa("Expected string but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,
2))},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){v(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){v(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=m(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){v(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){v(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c},Ja=function(a,b){v(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply([],arguments)},
Na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Oa=function(a){return Ea(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var Pa;a:{var Qa=l.navigator;if(Qa){var Ra=Qa.userAgent;if(Ra){Pa=Ra;break a}}Pa=""}var x=function(a){return u(Pa,a)};var Sa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ta=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ua=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Va=function(a){for(var b in a)return!1;return!0},Wa=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var $a=function(a){$a[" "](a);return a};$a[" "]=ba;var bb=function(a,b){var c=ab;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var cb=x("Opera"),y=x("Trident")||x("MSIE"),eb=x("Edge"),fb=eb||y,gb=x("Gecko")&&!(u(Pa.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),hb=u(Pa.toLowerCase(),"webkit")&&!x("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0},jb;
a:{var kb="",lb=function(){var a=Pa;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(cb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(y){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}
var nb=jb,ab={},z=function(a){return bb(a,function(){for(var b=0,c=na(String(nb)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},ob;var pb=l.document;
ob=pb&&y?ib()||("CSS1Compat"==pb.compatMode?parseInt(nb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a)});return b},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var vb=function(){this.Da=-1};var yb=function(a,b){this.Da=64;this.ec=l.Uint8Array?new Uint8Array(this.Da):Array(this.Da);this.Fc=this.hb=0;this.h=[];this.lf=a;this.Wd=b;this.Mf=l.Int32Array?new Int32Array(64):Array(64);void 0!==wb||(wb=l.Int32Array?new Int32Array(xb):xb);this.reset()},wb;r(yb,vb);for(var zb=[],Ab=0;63>Ab;Ab++)zb[Ab]=0;var Bb=Ma(128,zb);yb.prototype.reset=function(){this.Fc=this.hb=0;this.h=l.Int32Array?new Int32Array(this.Wd):Na(this.Wd)};
var Cb=function(a){var b=a.ec;v(b.length==a.Da);for(var c=a.Mf,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){var e=c[b-15]|0,d=c[b-2]|0,f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}for(var d=a.h[0]|0,e=a.h[1]|0,k=a.h[2]|0,n=a.h[3]|0,C=a.h[4]|0,db=a.h[5]|0,Pb=a.h[6]|0,f=a.h[7]|0,b=0;64>b;b++)var Ah=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&k^e&k)|0,g=C&db^~C&Pb,f=f+((C>>>6|
C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))|0,g=g+(wb[b]|0)|0,g=f+(g+(c[b]|0)|0)|0,f=Pb,Pb=db,db=C,C=n+g|0,n=k,k=e,e=d,d=g+Ah|0;a.h[0]=a.h[0]+d|0;a.h[1]=a.h[1]+e|0;a.h[2]=a.h[2]+k|0;a.h[3]=a.h[3]+n|0;a.h[4]=a.h[4]+C|0;a.h[5]=a.h[5]+db|0;a.h[6]=a.h[6]+Pb|0;a.h[7]=a.h[7]+f|0};
yb.prototype.update=function(a,b){void 0===b&&(b=a.length);var c=0,d=this.hb;if(m(a))for(;c<b;)this.ec[d++]=a.charCodeAt(c++),d==this.Da&&(Cb(this),d=0);else if(fa(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.ec[d++]=e;d==this.Da&&(Cb(this),d=0)}else throw Error("message must be string or array");this.hb=d;this.Fc+=b};
yb.prototype.digest=function(){var a=[],b=8*this.Fc;56>this.hb?this.update(Bb,56-this.hb):this.update(Bb,this.Da-(this.hb-56));for(var c=63;56<=c;c--)this.ec[c]=b&255,b/=256;Cb(this);for(c=b=0;c<this.lf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.h[c]>>d&255;return a};
var xb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Eb=function(){yb.call(this,8,Db)};r(Eb,yb);var Db=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Fb=function(){this.Ga=this.Ga;this.tc=this.tc};Fb.prototype.Ga=!1;Fb.prototype.isDisposed=function(){return this.Ga};Fb.prototype.cb=function(){if(this.tc)for(;this.tc.length;)this.tc.shift()()};var Gb=!y||9<=Number(ob),Hb=y&&!z("9");!hb||z("528");gb&&z("1.9b")||y&&z("8")||cb&&z("9.5")||hb&&z("528");gb&&!z("8")||y&&z("9");var Ib=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.nb=!1;this.ee=!0};Ib.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ee=!1};var Jb=function(a,b){Ib.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.eb=this.state=null;a&&this.init(a,b)};r(Jb,Ib);
Jb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(gb){var e;a:{try{$a(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.eb=
a;a.defaultPrevented&&this.preventDefault()};Jb.prototype.preventDefault=function(){Jb.xd.preventDefault.call(this);var a=this.eb;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Jb.prototype.Pe=function(){return this.eb};var Kb="closure_listenable_"+(1E6*Math.random()|0),Lb=0;var Mb=function(a,b,c,d,e){this.listener=a;this.xc=null;this.src=b;this.type=c;this.capture=!!d;this.kc=e;this.key=++Lb;this.rb=this.dc=!1},Nb=function(a){a.rb=!0;a.listener=null;a.xc=null;a.src=null;a.kc=null};var Ob=function(a){this.src=a;this.G={};this.$b=0};Ob.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.G[f];a||(a=this.G[f]=[],this.$b++);var g=Qb(a,b,d,e);-1<g?(b=a[g],c||(b.dc=!1)):(b=new Mb(b,this.src,f,!!d,e),b.dc=c,a.push(b));return b};Ob.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.G))return!1;var e=this.G[a];b=Qb(e,b,c,d);return-1<b?(Nb(e[b]),Ja(e,b),0==e.length&&(delete this.G[a],this.$b--),!0):!1};
var Rb=function(a,b){var c=b.type;c in a.G&&Ka(a.G[c],b)&&(Nb(b),0==a.G[c].length&&(delete a.G[c],a.$b--))};Ob.prototype.Uc=function(a,b,c,d){a=this.G[a.toString()];var e=-1;a&&(e=Qb(a,b,c,d));return-1<e?a[e]:null};var Qb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rb&&f.listener==b&&f.capture==!!c&&f.kc==d)return e}return-1};var Sb="closure_lm_"+(1E6*Math.random()|0),Tb={},Ub=0,Vb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Vb(a,b[f],c,d,e);else c=Wb(c),a&&a[Kb]?a.listen(b,c,d,e):Xb(a,b,c,!1,d,e)},Xb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Yb(a);k||(a[Sb]=k=new Ob(a));c=k.add(b,c,d,e,f);if(!c.xc){d=Zb();c.xc=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent($b(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
Ub++}},Zb=function(){var a=ac,b=Gb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},bc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)bc(a,b[f],c,d,e);else c=Wb(c),a&&a[Kb]?cc(a,b,c,d,e):Xb(a,b,c,!0,d,e)},dc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)dc(a,b[f],c,d,e);else c=Wb(c),a&&a[Kb]?a.fa.remove(String(b),c,d,e):a&&(a=Yb(a))&&(b=a.Uc(b,c,!!d,e))&&ec(b)},ec=function(a){if(!ga(a)&&a&&!a.rb){var b=a.src;if(b&&
b[Kb])Rb(b.fa,a);else{var c=a.type,d=a.xc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent($b(c),d);Ub--;(c=Yb(b))?(Rb(c,a),0==c.$b&&(c.src=null,b[Sb]=null)):Nb(a)}}},$b=function(a){return a in Tb?Tb[a]:Tb[a]="on"+a},gc=function(a,b,c,d){var e=!0;if(a=Yb(a))if(b=a.G[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.rb&&(f=fc(f,d),e=e&&!1!==f)}return e},fc=function(a,b){var c=a.listener,d=a.kc||a.src;a.dc&&ec(a);return c.call(d,
b)},ac=function(a,b){if(a.rb)return!0;if(!Gb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Jb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.nb&&0<=e;e--){b.currentTarget=d[e];var f=gc(d[e],a,!0,b),c=c&&f}for(e=0;!b.nb&&e<d.length;e++)b.currentTarget=
d[e],f=gc(d[e],a,!1,b),c=c&&f}return c}return fc(a,new Jb(b,this))},Yb=function(a){a=a[Sb];return a instanceof Ob?a:null},hc="__closure_events_fn_"+(1E9*Math.random()>>>0),Wb=function(a){v(a,"Listener can not be null.");if(p(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");a[hc]||(a[hc]=function(b){return a.handleEvent(b)});return a[hc]};var ic=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var kc=function(){this.Cc="";this.we=jc};kc.prototype.Eb=!0;kc.prototype.Bb=function(){return this.Cc};kc.prototype.toString=function(){return"Const{"+this.Cc+"}"};var lc=function(a){if(a instanceof kc&&a.constructor===kc&&a.we===jc)return a.Cc;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},jc={},mc=function(a){var b=new kc;b.Cc=a;return b};mc("");var oc=function(){this.wc="";this.xe=nc};oc.prototype.Eb=!0;oc.prototype.Bb=function(){return this.wc};oc.prototype.toString=function(){return"TrustedResourceUrl{"+this.wc+"}"};var nc={};var qc=function(){this.pa="";this.ve=pc};qc.prototype.Eb=!0;qc.prototype.Bb=function(){return this.pa};qc.prototype.toString=function(){return"SafeUrl{"+this.pa+"}"};
var rc=function(a){if(a instanceof qc&&a.constructor===qc&&a.ve===pc)return a.pa;ya("expected object of type SafeUrl, got '"+a+"' of type "+ca(a));return"type_error:SafeUrl"},sc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,uc=function(a){if(a instanceof qc)return a;a=a.Eb?a.Bb():String(a);sc.test(a)||(a="about:invalid#zClosurez");return tc(a)},pc={},tc=function(a){var b=new qc;b.pa=a;return b};tc("about:blank");var xc=function(a){var b=[];vc(new wc,a,b);return b.join("")},wc=function(){this.yc=void 0},vc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],vc(a,a.yc?a.yc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
yc(d,c),c.push(":"),vc(a,a.yc?a.yc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":yc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},zc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ac=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
yc=function(a,b){b.push('"',a.replace(Ac,function(a){var b=zc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zc[a]=b);return b}),'"')};var Bc=function(){};Bc.prototype.Dd=null;var Cc=function(a){return a.Dd||(a.Dd=a.$c())};var Dc,Ec=function(){};r(Ec,Bc);Ec.prototype.fc=function(){var a=Fc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Ec.prototype.$c=function(){var a={};Fc(this)&&(a[0]=!0,a[1]=!0);return a};
var Fc=function(a){if(!a.Vd&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Vd=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Vd};Dc=new Ec;var Gc=function(){};r(Gc,Bc);Gc.prototype.fc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Hc;throw Error("Unsupported browser");};Gc.prototype.$c=function(){return{}};
var Hc=function(){this.ua=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.ua.onload=q(this.Re,this);this.ua.onerror=q(this.Sd,this);this.ua.onprogress=q(this.Se,this);this.ua.ontimeout=q(this.Te,this)};h=Hc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.ua.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.ua.send(a);else throw Error("Only string data is supported");else this.ua.send()};h.abort=function(){this.ua.abort()};h.setRequestHeader=function(){};h.Re=function(){this.status=200;this.responseText=this.ua.responseText;Ic(this,4)};h.Sd=function(){this.status=500;this.responseText="";Ic(this,4)};h.Te=function(){this.Sd()};h.Se=function(){this.status=200;Ic(this,1)};var Ic=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var Jc=function(a,b,c){this.ef=c;this.Fe=a;this.wf=b;this.sc=0;this.lc=null};Jc.prototype.get=function(){var a;0<this.sc?(this.sc--,a=this.lc,this.lc=a.next,a.next=null):a=this.Fe();return a};Jc.prototype.put=function(a){this.wf(a);this.sc<this.ef&&(this.sc++,a.next=this.lc,this.lc=a)};var Kc=function(a){l.setTimeout(function(){throw a;},0)},Lc,Mc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Gd;c.Gd=null;a()}};return function(a){d.next={Gd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Nc=function(){this.Jc=this.Za=null},Pc=new Jc(function(){return new Oc},function(a){a.reset()},100);Nc.prototype.add=function(a,b){var c=Pc.get();c.set(a,b);this.Jc?this.Jc.next=c:(v(!this.Za),this.Za=c);this.Jc=c};Nc.prototype.remove=function(){var a=null;this.Za&&(a=this.Za,this.Za=this.Za.next,this.Za||(this.Jc=null),a.next=null);return a};var Oc=function(){this.next=this.scope=this.Tc=null};Oc.prototype.set=function(a,b){this.Tc=a;this.scope=b;this.next=null};
Oc.prototype.reset=function(){this.next=this.scope=this.Tc=null};var Uc=function(a,b){Qc||Rc();Sc||(Qc(),Sc=!0);Tc.add(a,b)},Qc,Rc=function(){if(-1!=String(l.Promise).indexOf("[native code]")){var a=l.Promise.resolve(void 0);Qc=function(){a.then(Vc)}}else Qc=function(){var a=Vc;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!x("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Lc||(Lc=Mc()),Lc(a)):l.setImmediate(a)}},Sc=!1,Tc=new Nc,Vc=function(){for(var a;a=Tc.remove();){try{a.Tc.call(a.scope)}catch(b){Kc(b)}Pc.put(a)}Sc=!1};!gb&&!y||y&&9<=Number(ob)||gb&&z("1.9.1");y&&z("9");var Xc=function(){this.pa="";this.ue=Wc};Xc.prototype.Eb=!0;Xc.prototype.Bb=function(){return this.pa};Xc.prototype.toString=function(){return"SafeHtml{"+this.pa+"}"};var Yc=function(a){if(a instanceof Xc&&a.constructor===Xc&&a.ue===Wc)return a.pa;ya("expected object of type SafeHtml, got '"+a+"' of type "+ca(a));return"type_error:SafeHtml"},Wc={};Xc.prototype.$e=function(a){this.pa=a;return this};var $c=function(a,b){Sa(b,function(b,d){b&&b.Eb&&(b=b.Bb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Zc.hasOwnProperty(d)?a.setAttribute(Zc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Zc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var ad=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},bd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var A=function(a,b){this.N=0;this.ra=void 0;this.bb=this.na=this.s=null;this.jc=this.Sc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){cd(c,2,a)},function(a){if(!(a instanceof dd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}cd(c,3,a)})}catch(d){cd(this,3,d)}},ed=function(){this.next=this.context=this.jb=this.Oa=this.child=null;this.xb=!1};ed.prototype.reset=function(){this.context=this.jb=this.Oa=this.child=null;this.xb=!1};
var fd=new Jc(function(){return new ed},function(a){a.reset()},100),gd=function(a,b,c){var d=fd.get();d.Oa=a;d.jb=b;d.context=c;return d},B=function(a){if(a instanceof A)return a;var b=new A(ba);cd(b,2,a);return b},D=function(a){return new A(function(b,c){c(a)})},id=function(a,b,c){hd(a,b,c,null)||Uc(ka(b,a))},jd=function(a){return new A(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Ne:!0,value:f}:{Ne:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],id(g,ka(e,f,!0),
ka(e,f,!1));else b(d)})};A.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return kd(this,p(a)?a:null,p(b)?b:null,c)};ad(A);var md=function(a,b){b=gd(b,b,void 0);b.xb=!0;ld(a,b);return a};A.prototype.f=function(a,b){return kd(this,null,a,b)};A.prototype.cancel=function(a){0==this.N&&Uc(function(){var b=new dd(a);nd(this,b)},this)};
var nd=function(a,b){if(0==a.N)if(a.s){var c=a.s;if(c.na){for(var d=0,e=null,f=null,g=c.na;g&&(g.xb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.N&&1==d?nd(c,b):(f?(d=f,v(c.na),v(null!=d),d.next==c.bb&&(c.bb=d),d.next=d.next.next):od(c),pd(c,e,3,b)))}a.s=null}else cd(a,3,b)},ld=function(a,b){a.na||2!=a.N&&3!=a.N||qd(a);v(null!=b.Oa);a.bb?a.bb.next=b:a.na=b;a.bb=b},kd=function(a,b,c,d){var e=gd(null,null,null);e.child=new A(function(a,g){e.Oa=b?function(c){try{var e=b.call(d,c);a(e)}catch(C){g(C)}}:
a;e.jb=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof dd?g(b):a(e)}catch(C){g(C)}}:g});e.child.s=a;ld(a,e);return e.child};A.prototype.Jf=function(a){v(1==this.N);this.N=0;cd(this,2,a)};A.prototype.Kf=function(a){v(1==this.N);this.N=0;cd(this,3,a)};
var cd=function(a,b,c){0==a.N&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.N=1,hd(c,a.Jf,a.Kf,a)||(a.ra=c,a.N=b,a.s=null,qd(a),3!=b||c instanceof dd||rd(a,c)))},hd=function(a,b,c,d){if(a instanceof A)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ld(a,gd(b||ba,c||null,d)),!0;if(bd(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return sd(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},sd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(n){k(n)}},qd=function(a){a.Sc||(a.Sc=!0,Uc(a.Je,a))},od=function(a){var b=null;a.na&&(b=a.na,a.na=b.next,b.next=null);a.na||(a.bb=null);null!=b&&v(null!=b.Oa);return b};A.prototype.Je=function(){for(var a;a=od(this);)pd(this,a,this.N,this.ra);this.Sc=!1};
var pd=function(a,b,c,d){if(3==c&&b.jb&&!b.xb)for(;a&&a.jc;a=a.s)a.jc=!1;if(b.child)b.child.s=null,td(b,c,d);else try{b.xb?b.Oa.call(b.context):td(b,c,d)}catch(e){ud.call(null,e)}fd.put(b)},td=function(a,b,c){2==b?a.Oa.call(a.context,c):a.jb&&a.jb.call(a.context,c)},rd=function(a,b){a.jc=!0;Uc(function(){a.jc&&ud.call(null,b)})},ud=Kc,dd=function(a){t.call(this,a)};r(dd,t);dd.prototype.name="cancel";
var vd=function(a,b){this.zc=[];this.$d=a;this.Jd=b||null;this.Cb=this.fb=!1;this.ra=void 0;this.ud=this.Cd=this.Nc=!1;this.Gc=0;this.s=null;this.Oc=0};vd.prototype.cancel=function(a){if(this.fb)this.ra instanceof vd&&this.ra.cancel();else{if(this.s){var b=this.s;delete this.s;a?b.cancel(a):(b.Oc--,0>=b.Oc&&b.cancel())}this.$d?this.$d.call(this.Jd,this):this.ud=!0;this.fb||wd(this,new xd)}};vd.prototype.Hd=function(a,b){this.Nc=!1;yd(this,a,b)};
var yd=function(a,b,c){a.fb=!0;a.ra=c;a.Cb=!b;zd(a)},Bd=function(a){if(a.fb){if(!a.ud)throw new Ad;a.ud=!1}};vd.prototype.callback=function(a){Bd(this);Cd(a);yd(this,!0,a)};
var wd=function(a,b){Bd(a);Cd(b);yd(a,!1,b)},Cd=function(a){v(!(a instanceof vd),"An execution sequence may not be initiated with a blocking Deferred.")},Gd=function(a){var b=Dd("https://apis.google.com/js/client.js?onload="+Ed);Fd(b,null,a,void 0)},Fd=function(a,b,c,d){v(!a.Cd,"Blocking Deferreds can not be re-used");a.zc.push([b,c,d]);a.fb&&zd(a)};vd.prototype.then=function(a,b,c){var d,e,f=new A(function(a,b){d=a;e=b});Fd(this,d,function(a){a instanceof xd?f.cancel():e(a)});return f.then(a,b,c)};
ad(vd);
var Hd=function(a){return Fa(a.zc,function(a){return p(a[1])})},zd=function(a){if(a.Gc&&a.fb&&Hd(a)){var b=a.Gc,c=Id[b];c&&(l.clearTimeout(c.Db),delete Id[b]);a.Gc=0}a.s&&(a.s.Oc--,delete a.s);for(var b=a.ra,d=c=!1;a.zc.length&&!a.Nc;){var e=a.zc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.Cb?g:f)try{var k=f.call(e||a.Jd,b);void 0!==k&&(a.Cb=a.Cb&&(k==b||k instanceof Error),a.ra=b=k);if(bd(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.Nc=!0}catch(n){b=n,a.Cb=!0,Hd(a)||(c=!0)}}a.ra=b;d&&
(k=q(a.Hd,a,!0),d=q(a.Hd,a,!1),b instanceof vd?(Fd(b,k,d),b.Cd=!0):b.then(k,d));c&&(b=new Jd(b),Id[b.Db]=b,a.Gc=b.Db)},Ad=function(){t.call(this)};r(Ad,t);Ad.prototype.message="Deferred has already fired";Ad.prototype.name="AlreadyCalledError";var xd=function(){t.call(this)};r(xd,t);xd.prototype.message="Deferred was canceled";xd.prototype.name="CanceledError";var Jd=function(a){this.Db=l.setTimeout(q(this.If,this),0);this.P=a};
Jd.prototype.If=function(){v(Id[this.Db],"Cannot throw an error that is not scheduled.");delete Id[this.Db];throw this.P;};var Id={};var Dd=function(a){var b=new oc;b.wc=a;return Kd(b)},Kd=function(a){var b={},c=b.document||document,d;a instanceof oc&&a.constructor===oc&&a.xe===nc?d=a.wc:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ca(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={fe:e,Zb:void 0};var f=new vd(Ld,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Md(e,!0);wd(f,new Nd(1,"Timeout reached for loading script "+d))},k),a.Zb=g);e.onload=
e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Md(e,b.Uf||!1,g),f.callback(null))};e.onerror=function(){Md(e,!0,g);wd(f,new Nd(0,"Error while loading script "+d))};a=b.attributes||{};Za(a,{type:"text/javascript",charset:"UTF-8",src:d});$c(e,a);Od(c).appendChild(e);return f},Od=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Ld=function(){if(this&&this.fe){var a=this.fe;a&&"SCRIPT"==a.tagName&&
Md(a,!0,this.Zb)}},Md=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Nd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Nd,t);var Pd="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Qd=function(){};Qd.prototype.next=function(){throw Pd;};Qd.prototype.ye=function(){return this};var Rd=function(a,b){this.ga={};this.w=[];this.wb=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Rd.prototype.Z=function(){Sd(this);for(var a=[],b=0;b<this.w.length;b++)a.push(this.ga[this.w[b]]);return a};Rd.prototype.oa=function(){Sd(this);return this.w.concat()};Rd.prototype.yb=function(a){return Td(this.ga,a)};
Rd.prototype.remove=function(a){return Td(this.ga,a)?(delete this.ga[a],this.o--,this.wb++,this.w.length>2*this.o&&Sd(this),!0):!1};var Sd=function(a){if(a.o!=a.w.length){for(var b=0,c=0;b<a.w.length;){var d=a.w[b];Td(a.ga,d)&&(a.w[c++]=d);b++}a.w.length=c}if(a.o!=a.w.length){for(var e={},c=b=0;b<a.w.length;)d=a.w[b],Td(e,d)||(a.w[c++]=d,e[d]=1),b++;a.w.length=c}};h=Rd.prototype;h.get=function(a,b){return Td(this.ga,a)?this.ga[a]:b};
h.set=function(a,b){Td(this.ga,a)||(this.o++,this.w.push(a),this.wb++);this.ga[a]=b};h.addAll=function(a){var b;a instanceof Rd?(b=a.oa(),a=a.Z()):(b=Ua(a),a=Ta(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.oa(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Rd(this)};
h.ye=function(a){Sd(this);var b=0,c=this.wb,d=this,e=new Qd;e.next=function(){if(c!=d.wb)throw Error("The map has changed since the iterator was created");if(b>=d.w.length)throw Pd;var e=d.w[b++];return a?e:d.ga[e]};return e};var Td=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Ud=function(a){if(a.Z&&"function"==typeof a.Z)return a.Z();if(m(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ta(a)},Vd=function(a){if(a.oa&&"function"==typeof a.oa)return a.oa();if(!a.Z||"function"!=typeof a.Z){if(fa(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ua(a)}},Wd=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||m(a))w(a,b,void 0);else for(var c=Vd(a),d=Ud(a),e=
d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var Xd=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Xd.prototype.Md=null;var Yd=0;Xd.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Yd++;d||la();this.Ib=a;this.hf=b;delete this.Md};Xd.prototype.ie=function(a){this.Ib=a};var Zd=function(a){this.jf=a;this.Td=this.Pc=this.Ib=this.s=null},$d=function(a,b){this.name=a;this.value=b};$d.prototype.toString=function(){return this.name};var ae=new $d("SEVERE",1E3),be=new $d("CONFIG",700),ce=new $d("FINE",500);Zd.prototype.getParent=function(){return this.s};Zd.prototype.ie=function(a){this.Ib=a};var de=function(a){if(a.Ib)return a.Ib;if(a.s)return de(a.s);ya("Root logger has no level set.");return null};
Zd.prototype.log=function(a,b,c){if(a.value>=de(this).value)for(p(b)&&(b=b()),a=new Xd(a,String(b),this.jf),c&&(a.Md=c),c="log:"+a.hf,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.Td)for(var f=0;b=d.Td[f];f++)b(e);c=c.getParent()}};
var ee={},fe=null,ge=function(a){fe||(fe=new Zd(""),ee[""]=fe,fe.ie(be));var b;if(!(b=ee[a])){b=new Zd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ge(a.substr(0,c));c.Pc||(c.Pc={});c.Pc[d]=b;b.s=c;ee[a]=b}return b};var he=function(){Fb.call(this);this.fa=new Ob(this);this.ze=this;this.hd=null};r(he,Fb);he.prototype[Kb]=!0;h=he.prototype;h.addEventListener=function(a,b,c,d){Vb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){dc(this,a,b,c,d)};
h.dispatchEvent=function(a){ie(this);var b,c=this.hd;if(c){b=[];for(var d=1;c;c=c.hd)b.push(c),v(1E3>++d,"infinite loop")}c=this.ze;d=a.type||a;if(m(a))a=new Ib(a,c);else if(a instanceof Ib)a.target=a.target||c;else{var e=a;a=new Ib(d,c);Za(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.nb&&0<=g;g--)f=a.currentTarget=b[g],e=je(f,d,!0,a)&&e;a.nb||(f=a.currentTarget=c,e=je(f,d,!0,a)&&e,a.nb||(e=je(f,d,!1,a)&&e));if(b)for(g=0;!a.nb&&g<b.length;g++)f=a.currentTarget=b[g],e=je(f,d,!1,a)&&e;return e};
h.cb=function(){he.xd.cb.call(this);if(this.fa){var a=this.fa,b=0,c;for(c in a.G){for(var d=a.G[c],e=0;e<d.length;e++)++b,Nb(d[e]);delete a.G[c];a.$b--}}this.hd=null};h.listen=function(a,b,c,d){ie(this);return this.fa.add(String(a),b,!1,c,d)};
var cc=function(a,b,c,d,e){a.fa.add(String(b),c,!0,d,e)},je=function(a,b,c,d){b=a.fa.G[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.rb&&g.capture==c){var k=g.listener,n=g.kc||g.src;g.dc&&Rb(a.fa,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.ee};he.prototype.Uc=function(a,b,c,d){return this.fa.Uc(String(a),b,c,d)};var ie=function(a){v(a.fa,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var E=function(a,b){a&&a.log(ce,b,void 0)};var ke=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},le=function(a){var b=null;return(new A(function(c,d){b=ke(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){l.clearTimeout(b);throw a;})};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ne=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var F=function(a){he.call(this);this.headers=new Rd;this.Lc=a||null;this.va=!1;this.Kc=this.b=null;this.Hb=this.Zd=this.qc="";this.Ka=this.Yc=this.oc=this.Rc=!1;this.sb=0;this.Ec=null;this.de="";this.Hc=this.sf=this.te=!1};r(F,he);var oe=F.prototype,pe=ge("goog.net.XhrIo");oe.U=pe;var qe=/^https?$/i,re=["POST","PUT"];
F.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.qc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.qc=a;this.Hb="";this.Zd=b;this.Rc=!1;this.va=!0;this.b=this.Lc?this.Lc.fc():Dc.fc();this.Kc=this.Lc?Cc(this.Lc):Cc(Dc);this.b.onreadystatechange=q(this.be,this);this.sf&&"onprogress"in this.b&&(this.b.onprogress=q(function(a){this.ae(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=q(this.ae,this)));try{E(this.U,se(this,"Opening Xhr")),
this.Yc=!0,this.b.open(b,String(a),!0),this.Yc=!1}catch(f){E(this.U,se(this,"Error opening Xhr: "+f.message));this.P(5,f);return}a=c||"";var e=this.headers.clone();d&&Wd(d,function(a,b){e.set(b,a)});d=Ha(e.oa());c=l.FormData&&a instanceof l.FormData;!Ia(re,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.de&&(this.b.responseType=this.de);"withCredentials"in this.b&&this.b.withCredentials!==this.te&&(this.b.withCredentials=
this.te);try{te(this),0<this.sb&&(this.Hc=ue(this.b),E(this.U,se(this,"Will abort after "+this.sb+"ms if incomplete, xhr2 "+this.Hc)),this.Hc?(this.b.timeout=this.sb,this.b.ontimeout=q(this.Zb,this)):this.Ec=ke(this.Zb,this.sb,this)),E(this.U,se(this,"Sending request")),this.oc=!0,this.b.send(a),this.oc=!1}catch(f){E(this.U,se(this,"Send error: "+f.message)),this.P(5,f)}};var ue=function(a){return y&&z(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
F.prototype.Zb=function(){"undefined"!=typeof aa&&this.b&&(this.Hb="Timed out after "+this.sb+"ms, aborting",E(this.U,se(this,this.Hb)),this.dispatchEvent("timeout"),this.abort(8))};F.prototype.P=function(a,b){this.va=!1;this.b&&(this.Ka=!0,this.b.abort(),this.Ka=!1);this.Hb=b;ve(this);we(this)};var ve=function(a){a.Rc||(a.Rc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
F.prototype.abort=function(){this.b&&this.va&&(E(this.U,se(this,"Aborting")),this.va=!1,this.Ka=!0,this.b.abort(),this.Ka=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),we(this))};F.prototype.cb=function(){this.b&&(this.va&&(this.va=!1,this.Ka=!0,this.b.abort(),this.Ka=!1),we(this,!0));F.xd.cb.call(this)};F.prototype.be=function(){this.isDisposed()||(this.Yc||this.oc||this.Ka?xe(this):this.nf())};F.prototype.nf=function(){xe(this)};
var xe=function(a){if(a.va&&"undefined"!=typeof aa)if(a.Kc[1]&&4==ye(a)&&2==ze(a))E(a.U,se(a,"Local request error detected and ignored"));else if(a.oc&&4==ye(a))ke(a.be,0,a);else if(a.dispatchEvent("readystatechange"),4==ye(a)){E(a.U,se(a,"Request complete"));a.va=!1;try{var b=ze(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.qc).match(me)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
f=g.substr(0,g.length-1);e=!qe.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<ye(a)?a.b.statusText:""}catch(n){E(a.U,"Can not get status: "+n.message),k=""}a.Hb=k+" ["+ze(a)+"]";ve(a)}}finally{we(a)}}};F.prototype.ae=function(a,b){v("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ae(a,"progress"));this.dispatchEvent(Ae(a,b?"downloadprogress":"uploadprogress"))};
var Ae=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},we=function(a,b){if(a.b){te(a);var c=a.b,d=a.Kc[0]?ba:null;a.b=null;a.Kc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.U)&&a.log(ae,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},te=function(a){a.b&&a.Hc&&(a.b.ontimeout=null);ga(a.Ec)&&(l.clearTimeout(a.Ec),a.Ec=null)},ye=function(a){return a.b?a.b.readyState:0},ze=function(a){try{return 2<ye(a)?
a.b.status:-1}catch(b){return-1}},Be=function(a){try{return a.b?a.b.responseText:""}catch(b){return E(a.U,"Can not get responseText: "+b.message),""}},se=function(a,b){return b+" ["+a.Zd+" "+a.qc+" "+ze(a)+"]"};var G=function(a,b){this.ea=this.Xa=this.ha="";this.lb=null;this.Ja=this.xa="";this.S=this.df=!1;var c;a instanceof G?(this.S=void 0!==b?b:a.S,Ce(this,a.ha),c=a.Xa,H(this),this.Xa=c,De(this,a.ea),Ee(this,a.lb),Fe(this,a.xa),Ge(this,a.W.clone()),a=a.Ja,H(this),this.Ja=a):a&&(c=String(a).match(me))?(this.S=!!b,Ce(this,c[1]||"",!0),a=c[2]||"",H(this),this.Xa=He(a),De(this,c[3]||"",!0),Ee(this,c[4]),Fe(this,c[5]||"",!0),Ge(this,c[6]||"",!0),a=c[7]||"",H(this),this.Ja=He(a)):(this.S=!!b,this.W=new I(null,
0,this.S))};G.prototype.toString=function(){var a=[],b=this.ha;b&&a.push(Ie(b,Je,!0),":");var c=this.ea;if(c||"file"==b)a.push("//"),(b=this.Xa)&&a.push(Ie(b,Je,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.lb,null!=c&&a.push(":",String(c));if(c=this.xa)this.ea&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ie(c,"/"==c.charAt(0)?Ke:Le,!0));(c=this.W.toString())&&a.push("?",c);(c=this.Ja)&&a.push("#",Ie(c,Me));return a.join("")};
G.prototype.resolve=function(a){var b=this.clone(),c=!!a.ha;c?Ce(b,a.ha):c=!!a.Xa;if(c){var d=a.Xa;H(b);b.Xa=d}else c=!!a.ea;c?De(b,a.ea):c=null!=a.lb;d=a.xa;if(c)Ee(b,a.lb);else if(c=!!a.xa){if("/"!=d.charAt(0))if(this.ea&&!this.xa)d="/"+d;else{var e=b.xa.lastIndexOf("/");-1!=e&&(d=b.xa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Fe(b,d):c=""!==a.W.toString();c?Ge(b,a.W.clone()):c=!!a.Ja;c&&(a=a.Ja,H(b),b.Ja=a);return b};G.prototype.clone=function(){return new G(this)};
var Ce=function(a,b,c){H(a);a.ha=c?He(b,!0):b;a.ha&&(a.ha=a.ha.replace(/:$/,""))},De=function(a,b,c){H(a);a.ea=c?He(b,!0):b},Ee=function(a,b){H(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.lb=b}else a.lb=null},Fe=function(a,b,c){H(a);a.xa=c?He(b,!0):b},Ge=function(a,b,c){H(a);b instanceof I?(a.W=b,a.W.td(a.S)):(c||(b=Ie(b,Ne)),a.W=new I(b,0,a.S))},J=function(a,b,c){H(a);a.W.set(b,c)},Oe=function(a,b){return a.W.get(b)};
G.prototype.removeParameter=function(a){H(this);this.W.remove(a);return this};var H=function(a){if(a.df)throw Error("Tried to modify a read-only Uri");};G.prototype.td=function(a){this.S=a;this.W&&this.W.td(a);return this};
var Pe=function(a){return a instanceof G?a.clone():new G(a,void 0)},Qe=function(a,b){var c=new G(null,void 0);Ce(c,"https");a&&De(c,a);b&&Fe(c,b);return c},He=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ie=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Re),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Re=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Je=/[#\/\?@]/g,Le=/[\#\?:]/g,Ke=/[\#\?]/g,Ne=/[\#\?@]/g,
Me=/#/g,I=function(a,b,c){this.o=this.l=null;this.O=a||null;this.S=!!c},Se=function(a){a.l||(a.l=new Rd,a.o=0,a.O&&ne(a.O,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},Ue=function(a){var b=Vd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new I(null,0,void 0);a=Ud(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?Te(c,e,f):c.add(e,f)}return c};h=I.prototype;
h.add=function(a,b){Se(this);this.O=null;a=this.R(a);var c=this.l.get(a);c||this.l.set(a,c=[]);c.push(b);this.o=za(this.o)+1;return this};h.remove=function(a){Se(this);a=this.R(a);return this.l.yb(a)?(this.O=null,this.o=za(this.o)-this.l.get(a).length,this.l.remove(a)):!1};h.yb=function(a){Se(this);a=this.R(a);return this.l.yb(a)};h.oa=function(){Se(this);for(var a=this.l.Z(),b=this.l.oa(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.Z=function(a){Se(this);var b=[];if(m(a))this.yb(a)&&(b=Ma(b,this.l.get(this.R(a))));else{a=this.l.Z();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){Se(this);this.O=null;a=this.R(a);this.yb(a)&&(this.o=za(this.o)-this.l.get(a).length);this.l.set(a,[b]);this.o=za(this.o)+1;return this};h.get=function(a,b){a=a?this.Z(a):[];return 0<a.length?String(a[0]):b};var Te=function(a,b,c){a.remove(b);0<c.length&&(a.O=null,a.l.set(a.R(b),Na(c)),a.o=za(a.o)+c.length)};
I.prototype.toString=function(){if(this.O)return this.O;if(!this.l)return"";for(var a=[],b=this.l.oa(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Z(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.O=a.join("&")};I.prototype.clone=function(){var a=new I;a.O=this.O;this.l&&(a.l=this.l.clone(),a.o=this.o);return a};I.prototype.R=function(a){a=String(a);this.S&&(a=a.toLowerCase());return a};
I.prototype.td=function(a){a&&!this.S&&(Se(this),this.O=null,this.l.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),Te(this,b,a))},this));this.S=a};var Ve=function(){var a=K();return y&&!!ob&&11==ob||/Edge\/\d+/.test(a)},We=function(){return l.window&&l.window.location.href||""},Xe=function(a,b){b=b||l.window;var c="about:blank";a&&(c=rc(uc(a)));b.location.href=c},Ye=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Wa(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Ye(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},$e=function(){var a;
a=K();a="Chrome"!=Ze(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!y||!ob||9<ob},af=function(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},bf=function(a){a=a||l.window;try{a.close()}catch(b){}},cf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,u(c,"crios/")&&(b.target="_blank"));"Firefox"==Ze(K())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof qc?c:uc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;
default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":
typeof g,v(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",f)),b=b instanceof qc?b:uc(b),g.href=rc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=rc(b),g&&(fb&&u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=mc("b/12014412, meta tag with sanitized URL"),ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,
"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(lc(a),"must provide justification"),v(!/^[\s\xa0]*$/.test(lc(a)),"must provide non-empty justification"),g.document.write(Yc((new Xc).$e(d))),g.document.close())):g=a.open(rc(b),c,g);if(g)try{g.focus()}catch(k){}return g},
df=function(a){return new A(function(b){var c=function(){le(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},ef=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ff=function(){var a=null;return(new A(function(b){"complete"==l.document.readyState?b():(a=function(){b()},bc(window,"load",a))})).f(function(b){dc(window,"load",a);throw b;})},hf=function(){return gf(void 0)?ff().then(function(){return new A(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},
1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):D(Error("Cordova must run in an Android or iOS file scheme."))},gf=function(a){a=a||K();return!("file:"!==jf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},kf=function(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}},L=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},lf=function(){var a=L();return"ReactNative"===
a||"Node"===a},Ze=function(a){var b=a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"iemobile"))return"IEMobile";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"blackberry"))return"Blackberry";if(u(b,"webos"))return"Webos";if(!u(b,"safari/")||u(b,"chrome/")||u(b,"crios/")||u(b,"android"))if(!u(b,"chrome/")&&!u(b,"crios/")||u(b,"edge/")){if(u(b,"android"))return"Android";
if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},mf=function(a){var b=L();return("Browser"===b?Ze(K()):b)+"/JsCore/"+a},K=function(){return l.navigator&&l.navigator.userAgent||""},M=function(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},pf=function(){var a;if(a=(nf()||"chrome-extension:"===jf()||gf())&&!lf())a:{try{var b=l.localStorage,c=
of();if(b){b.setItem(c,"1");b.removeItem(c);a=Ve()?!!l.indexedDB:!0;break a}}catch(d){}a=!1}return a},nf=function(){return"http:"===jf()||"https:"===jf()},jf=function(){return l.location&&l.location.protocol||null},qf=function(a){a=a||K();return af(a)||"Firefox"==Ze(a)?!1:!0},rf=function(a){return"undefined"===typeof a?null:xc(a)},sf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},tf=function(a){if(null!==a)return JSON.parse(a)},of=function(a){return a?
a:""+Math.floor(1E9*Math.random()).toString()},uf=function(a){a=a||K();return"Safari"==Ze(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},vf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},wf=function(){return l.navigator&&"boolean"===typeof l.navigator.onLine?l.navigator.onLine:!0},xf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");
this.Ff=a;this.gf=b;a=c||K();d=d||L();this.cf=af(a)||"ReactNative"===d};xf.prototype.get=function(){return this.cf?this.gf:this.Ff};
var yf=function(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},zf=function(){var a=l.document,b=null;return yf()||!a?B():(new A(function(c){b=function(){yf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Af={},Bf=function(a){Af[a]||(Af[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Cf;try{var Df={};Object.defineProperty(Df,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Df,"abcd",{configurable:!0,enumerable:!0,value:2});Cf=2==Df.abcd}catch(a){Cf=!1}
var N=function(a,b,c){Cf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Ef=function(a,b){Cf?Object.defineProperty(a,"provider",{configurable:!0,enumerable:!0,get:function(){Bf("firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead.");return b}}):a.provider=b},Ff=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&N(a,c,b[c])},Gf=function(a){var b={};Ff(b,a);return b},Hf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=
a[c]);return b},If=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},Jf=function(a){var b=a;if("object"==typeof a&&null!=a){var b="length"in a?[]:{},c;for(c in a)N(b,c,Jf(a[c]))}return b};var Kf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Lf=["client_id","response_type","scope","redirect_uri","state"],Mf={Pf:{Mb:500,Lb:600,providerId:"facebook.com",qd:Lf},Qf:{Mb:500,Lb:620,providerId:"github.com",qd:Lf},Rf:{Mb:515,Lb:680,providerId:"google.com",qd:Lf},Sf:{Mb:485,Lb:705,providerId:"twitter.com",qd:Kf}},Nf=function(a){for(var b in Mf)if(Mf[b].providerId==a)return Mf[b];return null};var O=function(a,b){this.code="auth/"+a;this.message=b||Of[a]||""};r(O,Error);O.prototype.C=function(){return{code:this.code,message:this.message}};O.prototype.toJSON=function(){return this.C()};
var Pf=function(a){var b=a&&a.code;return b?new O(b.substring(5),a.message):null},Of={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"",
"code-expired":"","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
"email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.",
"invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.",
"invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
"invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-identifier-number":"","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-verification-id":"","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"","missing-verification-code":"","missing-identifier-number":"","missing-verification-id":"","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.",
"user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.",
"user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var P=function(a,b,c,d,e){this.da=a;this.J=b||null;this.tb=c||null;this.sd=d||null;this.P=e||null;if(this.tb||this.P){if(this.tb&&this.P)throw new O("invalid-auth-event");if(this.tb&&!this.sd)throw new O("invalid-auth-event");}else throw new O("invalid-auth-event");};P.prototype.ic=function(){return this.sd};P.prototype.getError=function(){return this.P};P.prototype.C=function(){return{type:this.da,eventId:this.J,urlResponse:this.tb,sessionId:this.sd,error:this.P&&this.P.C()}};
var Qf=function(a){a=a||{};return a.type?new P(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Pf(a.error)):null};var Rf=function(a){var b="unauthorized-domain",c=void 0,d=Pe(a);a=d.ea;d=d.ha;"chrome-extension"==d?c=ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";O.call(this,b,c)};r(Rf,O);var Sf=function(a){this.ff=a.sub;la();this.gc=a.email||null};var Tf=function(a,b){return a.then(function(a){if(a.idToken){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=JSON.parse(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new Sf(k);break a}}catch(n){}}c=null}if(!c||b!=c.ff)throw new O("user-mismatch");return a}throw new O("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new O("user-mismatch"):a;})},Uf=function(a,b){if(b.idToken||b.accessToken)b.idToken&&N(this,
"idToken",b.idToken),b.accessToken&&N(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)N(this,"accessToken",b.oauthToken),N(this,"secret",b.oauthTokenSecret);else throw new O("internal-error","failed to construct a credential");Ef(this,a);N(this,"providerId",a)};Uf.prototype.Ab=function(a){return Vf(a,Wf(this))};Uf.prototype.cd=function(a,b){var c=Wf(this);c.idToken=b;return Xf(a,c)};Uf.prototype.ed=function(a,b){var c=Wf(this);return Tf(Yf(a,c),b)};
var Wf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:Ue(b).toString(),requestUri:"http://localhost"}};Uf.prototype.C=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var Zf=function(a,b){this.vf=b||[];Ff(this,{providerId:a,isOAuthProvider:!0});this.Id={}};Zf.prototype.setCustomParameters=function(a){this.Id=Xa(a);return this};var Q=function(a){Zf.call(this,a,Lf);this.rd=[]};r(Q,Zf);Q.prototype.addScope=function(a){Ia(this.rd,a)||this.rd.push(a);return this};Q.prototype.Rd=function(){return Na(this.rd)};
Q.prototype.credential=function(a,b){if(!a&&!b)throw new O("argument-error","credential failed: must provide the ID token and/or the access token.");return new Uf(this.providerId,{idToken:a||null,accessToken:b||null})};var $f=function(){Q.call(this,"facebook.com")};r($f,Q);N($f,"PROVIDER_ID","facebook.com");
var ag=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;ha(a)&&(b=a.accessToken);return(new $f).credential(null,b)},bg=function(){Q.call(this,"github.com")};r(bg,Q);N(bg,"PROVIDER_ID","github.com");
var cg=function(a){if(!a)throw new O("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;ha(a)&&(b=a.accessToken);return(new bg).credential(null,b)},dg=function(){Q.call(this,"google.com");this.addScope("profile")};r(dg,Q);N(dg,"PROVIDER_ID","google.com");var eg=function(a,b){var c=a;ha(a)&&(c=a.idToken,b=a.accessToken);return(new dg).credential(c,b)},fg=function(){Zf.call(this,"twitter.com",Kf)};r(fg,Zf);N(fg,"PROVIDER_ID","twitter.com");
var gg=function(a,b){var c=a;ha(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new O("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Uf("twitter.com",c)},hg=function(a,b){this.gc=a;this.jd=b;Ef(this,"password");N(this,"providerId","password")};hg.prototype.Ab=function(a){return R(a,ig,{email:this.gc,password:this.jd})};hg.prototype.cd=function(a,b){return R(a,jg,{idToken:b,email:this.gc,password:this.jd})};
hg.prototype.ed=function(a,b){return Tf(this.Ab(a),b)};hg.prototype.C=function(){return{email:this.gc,password:this.jd}};var kg=function(){Ff(this,{providerId:"password",isOAuthProvider:!1})};Ff(kg,{PROVIDER_ID:"password"});var lg=function(a){if(!(a.Bd&&a.Ad||a.Yb&&a.ya))throw new O("internal-error");this.I=a;N(this,"providerId","identifier")};lg.prototype.Ab=function(a){return a.se(mg(this))};lg.prototype.cd=function(a,b){var c=mg(this);c.idToken=b;return R(a,ng,c)};
lg.prototype.ed=function(a,b){var c=mg(this);c.operation="REAUTH";a=R(a,og,c);return Tf(a,b)};lg.prototype.C=function(){var a={providerId:"identifier"};this.I.Bd&&(a.verificationId=this.I.Bd);this.I.Ad&&(a.verificationCode=this.I.Ad);this.I.Yb&&(a.temporaryProof=this.I.Yb);this.I.ya&&(a.identifierNumber=this.I.ya);return a};
var mg=function(a){return a.I.Yb&&a.I.ya?{temporaryProof:a.I.Yb,identifierNumber:a.I.ya}:{sessionInfo:a.I.Bd,code:a.I.Ad}},pg=function(a){try{this.Ce=a||firebase.auth()}catch(b){throw new O("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.identifierAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}Ff(this,{providerId:"identifier",isOAuthProvider:!1})};
pg.prototype.se=function(a,b){var c=this.Ce.g;return B(b.verify()).then(function(d){if(!m(d))throw new O("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return R(c,qg,{identifierNumber:a,recaptchaToken:d});default:throw new O("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};Ff(pg,{PROVIDER_ID:"identifier"});
var rg=function(a){if(a.temporaryProof&&a.identifierNumber)return new lg({Yb:a.temporaryProof,ya:a.identifierNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return eg(a,c);case "facebook.com":return ag(c);case "github.com":return cg(c);case "twitter.com":return gg(c,d);default:return(new Q(b)).credential(a,c)}}catch(e){return null}},sg=function(a){if(!a.isOAuthProvider)throw new O("invalid-oauth-provider");
};var tg=function(a,b,c){O.call(this,a,c);a=b||{};a.email&&N(this,"email",a.email);a.ya&&N(this,"identifierNumber",a.ya);a.credential&&N(this,"credential",a.credential)};r(tg,O);tg.prototype.C=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.identifierNumber&&(a.identifierNumber=this.identifierNumber);var b=this.credential&&this.credential.C();b&&Za(a,b);return a};tg.prototype.toJSON=function(){return this.C()};
var ug=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:rg(a)};if(a.email)c.email=a.email;else if(a.identifierNumber)c.ya=a.identifierNumber;else return new O(b,a.message||void 0);return new tg(b,c,a.message)}return null};var vg=function(a){this.Of=a};r(vg,Bc);vg.prototype.fc=function(){return new this.Of};vg.prototype.$c=function(){return{}};
var S=function(a,b,c){var d;d="Node"==L();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new O("internal-error","The XMLHttpRequest compatibility library was not found.");this.j=a;a=b||{};this.Bf=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Cf=a.secureTokenTimeout||wg;this.ge=Xa(a.secureTokenHeaders||xg);this.Le=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Me=a.firebaseTimeout||
yg;this.Pd=Xa(a.firebaseHeaders||zg);c&&(this.Pd["X-Client-Version"]=c,this.ge["X-Client-Version"]=c);this.Ee=new Gc;this.Nf=new vg(d)},Ag,wg=new xf(3E4,6E4),xg={"Content-Type":"application/x-www-form-urlencoded"},yg=new xf(3E4,6E4),zg={"Content-Type":"application/json"},Cg=function(a,b,c,d,e,f,g){wf()?($e()?a=q(a.Ef,a):(Ag||(Ag=new A(function(a,b){Bg(a,b)})),a=q(a.Df,a)),a(b,c,d,e,f,g)):c&&c(null)};
S.prototype.Ef=function(a,b,c,d,e,f){var g="Node"==L(),k=lf()?g?new F(this.Nf):new F:new F(this.Ee),n;f&&(k.sb=Math.max(0,f),n=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Be(this))||null}catch(db){a=null}b&&b(a)});cc(k,"ready",function(){n&&clearTimeout(n);this.Ga||(this.Ga=!0,this.cb())});cc(k,"timeout",function(){n&&clearTimeout(n);this.Ga||(this.Ga=!0,this.cb());b&&b(null)});k.send(a,c,d,e)};
var Ed="__fcb"+Math.floor(1E6*Math.random()).toString(),Bg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Ed]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Gd(function(){b(Error("CORS_UNSUPPORTED"))}))};
S.prototype.Df=function(a,b,c,d,e){var f=this;Ag.then(function(){window.gapi.client.setApiKey(f.j);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var Eg=function(a,b){return new A(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Cg(a,a.Bf+"?key="+encodeURIComponent(a.j),function(a){a?a.error?d(Dg(a)):a.access_token&&a.refresh_token?c(a):d(new O("internal-error")):d(new O("network-request-failed"))},"POST",Ue(b).toString(),a.ge,a.Cf.get()):d(new O("internal-error"))})},Fg=function(a,b,c,d,e,f){var g=Pe(a.Le+b);J(g,"key",a.j);f&&J(g,"cb",la().toString());var k="GET"==c;if(k)for(var n in d)d.hasOwnProperty(n)&&
J(g,n,d[n]);return new A(function(b,f){Cg(a,g.toString(),function(a){a?a.error?f(Dg(a,e||{})):b(a):f(new O("network-request-failed"))},c,k?void 0:xc(sf(d)),a.Pd,a.Me.get())})},Gg=function(a){if(!ic.test(a.email))throw new O("invalid-email");},Hg=function(a){"email"in a&&Gg(a)},Jg=function(a,b){return R(a,Ig,{identifier:b,continueUri:nf()?We():"http://localhost"}).then(function(a){return a.allProviders||[]})},Lg=function(a){return R(a,Kg,{}).then(function(a){return a.authorizedDomains||[]})},Mg=function(a){if(!a.idToken)throw new O("internal-error");
},Ng=function(a){if(a.identifierNumber||a.temporaryProof){if(!a.identifierNumber||!a.temporaryProof)throw new O("internal-error");}else{if(!a.sessionInfo)throw new O("missing-verification-id");if(!a.code)throw new O("missing-verification-code");}};S.prototype.signInAnonymously=function(){return R(this,Og,{})};S.prototype.updateEmail=function(a,b){return R(this,Pg,{idToken:a,email:b})};S.prototype.updatePassword=function(a,b){return R(this,jg,{idToken:a,password:b})};var Qg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
S.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Sa(Qg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return R(this,Pg,c)};S.prototype.sendPasswordResetEmail=function(a){return R(this,Rg,{requestType:"PASSWORD_RESET",email:a})};S.prototype.sendEmailVerification=function(a){return R(this,Sg,{requestType:"VERIFY_EMAIL",idToken:a})};S.prototype.se=function(a){return R(this,Tg,a)};
var Vg=function(a,b,c){return R(a,Ug,{idToken:b,deleteProvider:c})},Wg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new O("internal-error");},Xg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=ug(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=ug(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=ug(a));if(b)throw b;if(!a.idToken)throw new O("internal-error");},Vf=function(a,
b){b.returnIdpCredential=!0;return R(a,Yg,b)},Xf=function(a,b){b.returnIdpCredential=!0;return R(a,Zg,b)},Yf=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return R(a,$g,b)},ah=function(a){if(!a.oobCode)throw new O("invalid-action-code");};S.prototype.confirmPasswordReset=function(a,b){return R(this,bh,{oobCode:a,newPassword:b})};S.prototype.checkActionCode=function(a){return R(this,ch,{oobCode:a})};S.prototype.applyActionCode=function(a){return R(this,dh,{oobCode:a})};
var dh={endpoint:"setAccountInfo",A:ah,Wa:"email"},ch={endpoint:"resetPassword",A:ah,Y:function(a){if(!a.email||!a.requestType)throw new O("internal-error");}},eh={endpoint:"signupNewUser",A:function(a){Gg(a);if(!a.password)throw new O("weak-password");},Y:Mg,sa:!0},Ig={endpoint:"createAuthUri"},fh={endpoint:"deleteAccount",Ua:["idToken"]},Ug={endpoint:"setAccountInfo",Ua:["idToken","deleteProvider"],A:function(a){if(!ea(a.deleteProvider))throw new O("internal-error");}},gh={endpoint:"getAccountInfo"},
Sg={endpoint:"getOobConfirmationCode",Ua:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new O("internal-error");},Wa:"email"},Rg={endpoint:"getOobConfirmationCode",Ua:["requestType"],A:function(a){if("PASSWORD_RESET"!=a.requestType)throw new O("internal-error");Gg(a)},Wa:"email"},Kg={De:!0,endpoint:"getProjectConfig",We:"GET"},bh={endpoint:"resetPassword",A:ah,Wa:"email"},qg={endpoint:"sendVerificationCode",Ua:["identifierNumber","recaptchaToken"],Wa:"sessionInfo"},Pg={endpoint:"setAccountInfo",
Ua:["idToken"],A:Hg,sa:!0},jg={endpoint:"setAccountInfo",Ua:["idToken"],A:function(a){Hg(a);if(!a.password)throw new O("weak-password");},Y:Mg,sa:!0},Og={endpoint:"signupNewUser",Y:Mg,sa:!0},Yg={endpoint:"verifyAssertion",A:Wg,Y:Xg,sa:!0},$g={endpoint:"verifyAssertion",A:Wg,Y:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new O("user-not-found");if(!a.idToken)throw new O("internal-error");},sa:!0},Zg={endpoint:"verifyAssertion",A:function(a){Wg(a);if(!a.idToken)throw new O("internal-error");
},Y:Xg,sa:!0},hh={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new O("invalid-custom-token");},Y:Mg,sa:!0},ig={endpoint:"verifyPassword",A:function(a){Gg(a);if(!a.password)throw new O("wrong-password");},Y:Mg,sa:!0},Tg={endpoint:"verifyidentifierNumber",A:Ng,Y:Mg},ng={endpoint:"verifyidentifierNumber",A:function(a){if(!a.idToken)throw new O("internal-error");Ng(a)},Y:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",ug(a);Mg(a)}},og={Ge:{USER_NOT_FOUND:"user-not-found"},
endpoint:"verifyidentifierNumber",A:Ng,Y:Mg},R=function(a,b,c){if(!If(c,b.Ua))return D(new O("internal-error"));var d=b.We||"POST",e;return B(c).then(b.A).then(function(){b.sa&&(c.returnSecureToken=!0);return Fg(a,b.endpoint,d,c,b.Ge,b.De||!1)}).then(function(a){return e=a}).then(b.Y).then(function(){if(!b.Wa)return e;if(!(b.Wa in e))throw new O("internal-error");return e[b.Wa]})},Dg=function(a,b){var c;c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};
if(c=d[c]?new O(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",
FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",
CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_identifier_NUMBER:"invalid-identifier-number",INVALID_SESSION_INFO:"invalid-verification-id",
INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_identifier_NUMBER:"missing-identifier-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired"};Za(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new O(d[e],b);!b&&a&&(b=rf(a));return new O("internal-error",b)};var ih=function(a){this.V=a};ih.prototype.value=function(){return this.V};ih.prototype.je=function(a){this.V.style=a;return this};var jh=function(a){this.V=a||{}};jh.prototype.value=function(){return this.V};jh.prototype.je=function(a){this.V.style=a;return this};var lh=function(a){this.Lf=a;this.nc=null;this.gd=kh(this)},mh=function(a){var b=new jh;b.V.where=document.body;b.V.url=a.Lf;b.V.messageHandlersFilter=M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.V.attributes=b.V.attributes||{};(new ih(b.V.attributes)).je({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.V.dontclear=!0;return b},kh=function(a){return nh().then(function(){return new A(function(b,c){M("gapi.iframes.getContext")().open(mh(a).value(),function(d){a.nc=d;a.nc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},oh.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};lh.prototype.sendMessage=function(a){var b=this;return this.gd.then(function(){return new A(function(c){b.nc.send(a.type,a,c,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var ph=function(a,b){a.gd.then(function(){a.nc.register("authEvent",b,M("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},qh=new xf(3E4,6E4),oh=new xf(5E3,15E3),nh=function(){return new A(function(a,b){if(wf()){var c=function(){vf();M("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){vf();b(Error("Network Error"))},timeout:qh.get()})};if(M("gapi.iframes.Iframe"))a();else if(M("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){M("gapi.load")?
c():b(Error("Network Error"))};B(Dd("https://apis.google.com/js/api.js?onload="+d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})};var rh=function(a,b,c){this.v=a;this.j=b;this.D=c;this.Ya=null;this.ac=Qe(this.v,"/__/auth/iframe");J(this.ac,"apiKey",this.j);J(this.ac,"appName",this.D)};rh.prototype.setVersion=function(a){this.Ya=a;return this};rh.prototype.toString=function(){this.Ya?J(this.ac,"v",this.Ya):this.ac.removeParameter("v");return this.ac.toString()};var sh=function(a,b,c,d,e){this.v=a;this.j=b;this.D=c;this.Be=d;this.Ya=this.J=this.pd=null;this.Pb=e};sh.prototype.setVersion=function(a){this.Ya=a;return this};
sh.prototype.toString=function(){var a=Qe(this.v,"/__/auth/handler");J(a,"apiKey",this.j);J(a,"appName",this.D);J(a,"authType",this.Be);if(this.Pb.isOAuthProvider){J(a,"providerId",this.Pb.providerId);var b=this.Pb,c=sf(b.Id),d;for(d in c)c[d]=c[d].toString();b=b.vf;c=Xa(c);for(d=0;d<b.length;d++){var e=b[d];e in c&&delete c[e]}Va(c)||J(a,"customParameters",rf(c))}"function"===typeof this.Pb.Rd&&(b=this.Pb.Rd(),b.length&&J(a,"scopes",b.join(",")));this.pd?J(a,"redirectUrl",this.pd):a.removeParameter("redirectUrl");
this.J?J(a,"eventId",this.J):a.removeParameter("eventId");this.Ya?J(a,"v",this.Ya):a.removeParameter("v");if(this.bc)for(var f in this.bc)this.bc.hasOwnProperty(f)&&!Oe(a,f)&&J(a,f,this.bc[f]);return a.toString()};
var th=function(a,b,c,d){this.v=a;this.j=b;this.D=c;this.Oe=(this.Ea=d||null)?mf(this.Ea):null;d=this.Ea;this.Xe=(new rh(a,b,c)).setVersion(d).toString();this.ma=[];this.g=new S(b,null,this.Oe);this.pc=this.wa=null},uh=function(a){var b=We();return Lg(a).then(function(a){a:{for(var c=Pe(b),e=c.ha,c=c.ea,f=0;f<a.length;f++){var g;var k=a[f];g=c;var n=e;0==k.indexOf("chrome-extension://")?g=Pe(k).ea==g&&"chrome-extension"==n:"http"!=n&&"https"!=n?g=!1:ef.test(k)?g=g==k:(k=k.split(".").join("\\."),g=
(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(g));if(g){a=!0;break a}}a=!1}if(!a)throw new Rf(We());})};h=th.prototype;h.Gb=function(){if(this.pc)return this.pc;var a=this;return this.pc=ff().then(function(){a.mc=new lh(a.Xe);vh(a)})};h.Vb=function(a,b,c){var d=new O("popup-closed-by-user"),e=new O("web-storage-unsupported"),f=this,g=!1;return this.La().then(function(){wh(f).then(function(c){c||(a&&bf(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return df(a)}).then(function(){if(!g)return le(c).then(function(){b(d)})})};
h.ke=function(){var a=K();return!qf(a)&&!uf(a)};h.Ud=function(){return!1};h.Nb=function(a,b,c,d,e,f,g){if(!a)return D(new O("popup-blocked"));if(g&&!qf())return this.La().f(function(b){bf(a);e(b)}),d(),B();this.wa||(this.wa=uh(this.g));var k=this;return this.wa.then(function(){var b=k.La().f(function(b){bf(a);e(b);throw b;});d();return b}).then(function(){sg(c);if(!g){var d=xh(k.v,k.j,k.D,b,c,null,f,k.Ea);Xe(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(k.wa=null);throw a;})};
h.Ob=function(a,b,c){this.wa||(this.wa=uh(this.g));var d=this;return this.wa.then(function(){sg(b);var e=xh(d.v,d.j,d.D,a,b,We(),c,d.Ea);Xe(e)})};h.La=function(){var a=this;return this.Gb().then(function(){return a.mc.gd}).f(function(){a.wa=null;throw new O("network-request-failed");})};h.ne=function(){return!0};
var xh=function(a,b,c,d,e,f,g,k,n){a=new sh(a,b,c,d,e);a.pd=f;a.J=g;f=a.setVersion(k);f.bc=Xa(n||null);return f.toString()},vh=function(a){if(!a.mc)throw Error("IfcHandler must be initialized!");ph(a.mc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Qf(b.authEvent);for(c=0;c<a.ma.length;c++)d=a.ma[c](b)||d;c={};c.status=d?"ACK":"ERROR";return B(c)}c.status="ERROR";return B(c)})},wh=function(a){var b={type:"webStorageSupport"};return a.Gb().then(function(){return a.mc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};th.prototype.$a=function(a){this.ma.push(a)};th.prototype.Tb=function(a){La(this.ma,function(b){return b==a})};var yh=function(a){this.B=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.B)throw new O("internal-error","The React Native compatibility library was not found.");};h=yh.prototype;h.get=function(a){return B(this.B.getItem(a)).then(function(a){return a&&tf(a)})};h.set=function(a,b){return B(this.B.setItem(a,rf(b)))};h.remove=function(a){return B(this.B.removeItem(a))};h.ab=function(){};h.Ta=function(){};var zh=function(){this.B={}};h=zh.prototype;h.get=function(a){return B(this.B[a])};h.set=function(a,b){this.B[a]=b;return B()};h.remove=function(a){delete this.B[a];return B()};h.ab=function(){};h.Ta=function(){};var Ch=function(){if(!Bh()){if("Node"==L())throw new O("internal-error","The LocalStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.B=l.localStorage||firebase.INTERNAL.node.localStorage},Bh=function(){var a="Node"==L(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Ch.prototype;
h.get=function(a){var b=this;return B().then(function(){var c=b.B.getItem(a);return tf(c)})};h.set=function(a,b){var c=this;return B().then(function(){var d=rf(b);null===d?c.remove(a):c.B.setItem(a,d)})};h.remove=function(a){var b=this;return B().then(function(){b.B.removeItem(a)})};h.ab=function(a){l.window&&Vb(l.window,"storage",a)};h.Ta=function(a){l.window&&dc(l.window,"storage",a)};var Dh=function(){this.B={}};h=Dh.prototype;h.get=function(){return B(null)};h.set=function(){return B()};h.remove=function(){return B()};h.ab=function(){};h.Ta=function(){};var Fh=function(){if(!Eh()){if("Node"==L())throw new O("internal-error","The SessionStorage compatibility library was not found.");throw new O("web-storage-unsupported");}this.B=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},Eh=function(){var a="Node"==L(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=Fh.prototype;
h.get=function(a){var b=this;return B().then(function(){var c=b.B.getItem(a);return tf(c)})};h.set=function(a,b){var c=this;return B().then(function(){var d=rf(b);null===d?c.remove(a):c.B.setItem(a,d)})};h.remove=function(a){var b=this;return B().then(function(){b.B.removeItem(a)})};h.ab=function(){};h.Ta=function(){};var Gh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new O("web-storage-unsupported");this.He=a;this.fd=b;this.Qc=c;this.re=d;this.wb=e;this.$={};this.Wb=[];this.Jb=0;this.Ye=f||l.indexedDB},Hh,Ih=function(a){return new A(function(b,c){var d=a.Ye.open(a.He,a.wb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.fd,{keyPath:a.Qc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},Jh=function(a){a.Xd||(a.Xd=
Ih(a));return a.Xd},Kh=function(a,b){return b.objectStore(a.fd)},Lh=function(a,b,c){return b.transaction([a.fd],c?"readwrite":"readonly")},Mh=function(a){return new A(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=Gh.prototype;
h.set=function(a,b){var c=!1,d,e=this;return md(Jh(this).then(function(b){d=b;b=Kh(e,Lh(e,d,!0));return Mh(b.get(a))}).then(function(f){var g=Kh(e,Lh(e,d,!0));if(f)return f.value=b,Mh(g.put(f));e.Jb++;c=!0;f={};f[e.Qc]=a;f[e.re]=b;return Mh(g.add(f))}).then(function(){e.$[a]=b}),function(){c&&e.Jb--})};h.get=function(a){var b=this;return Jh(this).then(function(c){return Mh(Kh(b,Lh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return md(Jh(this).then(function(d){b=!0;c.Jb++;return Mh(Kh(c,Lh(c,d,!0))["delete"](a))}).then(function(){delete c.$[a]}),function(){b&&c.Jb--})};
h.Hf=function(){var a=this;return Jh(this).then(function(b){var c=Kh(a,Lh(a,b,!1));return c.getAll?Mh(c.getAll()):new A(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Jb){for(d=0;d<b.length;d++)c[b[d][a.Qc]]=b[d][a.re];d=Ye(a.$,c);a.$=c}return d})};h.ab=function(a){0==this.Wb.length&&this.vd();this.Wb.push(a)};
h.Ta=function(a){La(this.Wb,function(b){return b==a});0==this.Wb.length&&this.Bc()};h.vd=function(){var a=this;this.Bc();var b=function(){a.kd=le(800).then(q(a.Hf,a)).then(function(b){0<b.length&&w(a.Wb,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.kd};b()};h.Bc=function(){this.kd&&this.kd.cancel("STOP_EVENT")};var Qh=function(){this.Ld={Browser:Nh,Node:Oh,ReactNative:Ph}[L()]},Rh,Nh={M:Ch,yd:Fh},Oh={M:Ch,yd:Fh},Ph={M:yh,yd:Dh};var Sh=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;N(this,"operation",a);N(this,"data",Jf(b))};var Th=function(a,b,c,d,e,f){this.pf=a;this.xf=b;this.Qe=c;this.rc=d;this.zd=e;this.yf=!!f;this.kb=null;this.Ma=this.rc;if(this.zd<this.rc)throw Error("Proactive refresh lower bound greater than upper bound!");};Th.prototype.start=function(){this.Ma=this.rc;Uh(this,!0)};
var Vh=function(a,b){if(b)return a.Ma=a.rc,a.Qe();b=a.Ma;a.Ma*=2;a.Ma>a.zd&&(a.Ma=a.zd);return b},Uh=function(a,b){a.stop();a.kb=le(Vh(a,b)).then(function(){return a.yf?B():zf()}).then(function(){return a.pf()}).then(function(){Uh(a,!0)}).f(function(b){a.xf(b)&&Uh(a,!1)})};Th.prototype.stop=function(){this.kb&&(this.kb.cancel(),this.kb=null)};var ai=function(a){var b={};b["facebook.com"]=Wh;b["google.com"]=Xh;b["github.com"]=Yh;b["twitter.com"]=Zh;var c=a&&a.providerId;return c?b[c]?new b[c](a):new $h(a):null},$h=function(a){var b=tf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");N(this,"profile",Jf(b||{}));N(this,"providerId",a)},Wh=function(a){$h.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};r(Wh,$h);
var Yh=function(a){$h.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",this.profile&&this.profile.login||null)};r(Yh,$h);var Xh=function(a){$h.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};r(Xh,$h);var Zh=function(a){$h.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");N(this,"username",a.screenName||null)};r(Zh,$h);var bi=function(a,b,c,d){this.kf=a;this.he=b;this.zf=c;this.Ub=d;this.T={};Rh||(Rh=new Qh);a=Rh;try{var e;Ve()?(Hh||(Hh=new Gh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=Hh):e=new a.Ld.M;this.Qa=e}catch(f){this.Qa=new zh,this.Ub=!0}try{this.Dc=new a.Ld.yd}catch(f){this.Dc=new zh}this.wd=q(this.le,this);this.$={}},ci,di=function(){ci||(ci=new bi("firebase",":",!uf(K())&&kf()?!0:!1,qf()));return ci};h=bi.prototype;
h.R=function(a,b){return this.kf+this.he+a.name+(b?this.he+b:"")};h.get=function(a,b){return(a.M?this.Qa:this.Dc).get(this.R(a,b))};h.remove=function(a,b){b=this.R(a,b);a.M&&!this.Ub&&(this.$[b]=null);return(a.M?this.Qa:this.Dc).remove(b)};h.set=function(a,b,c){var d=this.R(a,c),e=this,f=a.M?this.Qa:this.Dc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.M&&!this.Ub&&(e.$[d]=b)})};
h.addListener=function(a,b,c){a=this.R(a,b);this.Ub||(this.$[a]=l.localStorage.getItem(a));Va(this.T)&&this.vd();this.T[a]||(this.T[a]=[]);this.T[a].push(c)};h.removeListener=function(a,b,c){a=this.R(a,b);this.T[a]&&(La(this.T[a],function(a){return a==c}),0==this.T[a].length&&delete this.T[a]);Va(this.T)&&this.Bc()};h.vd=function(){this.Qa.ab(this.wd);this.Ub||Ve()||ei(this)};
var ei=function(a){fi(a);a.dd=setInterval(function(){for(var b in a.T){var c=l.localStorage.getItem(b),d=a.$[b];c!=d&&(a.$[b]=c,c=new Jb({type:"storage",key:b,target:window,oldValue:d,newValue:c,rf:!0}),a.le(c))}},1E3)},fi=function(a){a.dd&&(clearInterval(a.dd),a.dd=null)};bi.prototype.Bc=function(){this.Qa.Ta(this.wd);fi(this)};
bi.prototype.le=function(a){if(a&&a.Pe){var b=a.eb.key;"undefined"!==typeof a.eb.rf?this.Qa.Ta(this.wd):fi(this);if(this.zf){var c=l.localStorage.getItem(b);a=a.eb.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.$[b]=l.localStorage.getItem(b);this.Ed(b)}else w(a,q(this.Ed,this))};bi.prototype.Ed=function(a){this.T[a]&&w(this.T[a],function(a){a()})};var gi=function(a,b){this.u=a;this.i=b||di()},hi={name:"authEvent",M:!0},ii=function(a){return a.i.get(hi,a.u).then(function(a){return Qf(a)})};gi.prototype.$a=function(a){this.i.addListener(hi,this.u,a)};gi.prototype.Tb=function(a){this.i.removeListener(hi,this.u,a)};var ji=function(a){this.i=a||di()},ki={name:"sessionId",M:!1};ji.prototype.ic=function(a){return this.i.get(ki,a)};var li=function(a,b,c,d,e,f){this.v=a;this.j=b;this.D=c;this.Ea=d||null;this.me=b+":"+c;this.Af=new ji;this.Qd=new gi(this.me);this.Zc=null;this.ma=[];this.bf=e||500;this.tf=f||2E3;this.Fb=this.uc=null},mi=function(a){return new O("invalid-cordova-configuration",a)};
li.prototype.La=function(){return this.ad?this.ad:this.ad=hf().then(function(){if("function"!==typeof M("universalLinks.subscribe",l))throw mi("cordova-universal-links-plugin is not installed");if("undefined"===typeof M("BuildInfo.packageName",l))throw mi("cordova-plugin-buildinfo is not installed");if("function"!==typeof M("cordova.plugins.browsertab.openUrl",l))throw mi("cordova-plugin-browsertab is not installed");if("function"!==typeof M("cordova.InAppBrowser.open",l))throw mi("cordova-plugin-inappbrowser is not installed");
},function(){throw new O("cordova-not-ready");})};var ni=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},oi=function(a){var b=new Eb;b.update(a);return Oa(b.digest())};h=li.prototype;h.Vb=function(a,b){b(new O("operation-not-supported-in-this-environment"));return B()};h.Nb=function(){return D(new O("operation-not-supported-in-this-environment"))};h.ne=function(){return!1};h.ke=function(){return!0};
h.Ud=function(){return!0};
h.Ob=function(a,b,c){if(this.uc)return D(new O("redirect-operation-pending"));var d=this,e=l.document,f=null,g=null,k=null,n=null;return this.uc=md(B().then(function(){sg(b);return pi(d)}).then(function(){return qi(d,a,b,c)}).then(function(){return(new A(function(a,b){g=function(){var b=M("cordova.plugins.browsertab.close",l);a();"function"===typeof b&&b();d.Fb&&"function"===typeof d.Fb.close&&(d.Fb.close(),d.Fb=null);return!1};d.$a(g);k=function(){f||(f=le(d.tf).then(function(){b(new O("redirect-cancelled-by-user"))}))};n=
function(){yf()&&k()};e.addEventListener("resume",k,!1);K().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return ri(d).then(function(){throw a;})})}),function(){k&&e.removeEventListener("resume",k,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Tb(g);d.uc=null})};
var qi=function(a,b,c,d){var e=ni(),f=new P(b,d,null,e,new O("no-auth-event")),g=M("BuildInfo.packageName",l);if("string"!==typeof g)throw new O("invalid-cordova-configuration");var k=M("BuildInfo.displayName",l),n={};if(K().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(K().toLowerCase().match(/android/))n.apn=g;else return D(new O("operation-not-supported-in-this-environment"));k&&(n.appDisplayName=k);e=oi(e);n.sessionId=e;var C=xh(a.v,a.j,a.D,b,c,null,d,a.Ea,n);return a.La().then(function(){var b=
a.me;return a.Af.i.set(hi,f.C(),b)}).then(function(){var b=M("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof b)throw new O("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=M("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof c)throw new O("invalid-cordova-configuration");c(C)}else{c=M("cordova.InAppBrowser.open",l);if("function"!==typeof c)throw new O("invalid-cordova-configuration");b=c;var d;d=K();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Fb=b(C,d?"_blank":"_system","location=yes")}})})},si=function(a,b){for(var c=0;c<a.ma.length;c++)try{a.ma[c](b)}catch(d){}},pi=function(a){a.Zc||(a.Zc=a.La().then(function(){return new A(function(b){var c=function(d){b(d);a.Tb(c);return!1};a.$a(c);ti(a)})}));return a.Zc},ri=function(a){var b=null;return ii(a.Qd).then(function(c){b=c;c=a.Qd;return c.i.remove(hi,c.u)}).then(function(){return b})},ti=function(a){var b=M("universalLinks.subscribe",l);if("function"!==typeof b)throw new O("invalid-cordova-configuration");
var c=new P("unknown",null,null,null,new O("no-auth-event")),d=!1,e=le(a.bf).then(function(){return ri(a).then(function(){d||si(a,c)})}),f=function(b){d=!0;e&&e.cancel();ri(a).then(function(d){var e=c;if(d&&b&&b.url){var e=null,f;f=b.url;var g=Pe(f),k=Oe(g,"link"),n=Oe(Pe(k),"link"),g=Oe(g,"deep_link_id");f=Oe(Pe(g),"link")||g||n||k||f;-1!=f.indexOf("/__/auth/callback")&&(e=Pe(f),e=tf(Oe(e,"firebaseError")||null),e=(e="object"===typeof e?Pf(e):null)?new P(d.da,d.J,null,null,e):new P(d.da,d.J,f,d.ic()));
e=e||c}si(a,e)})},g=l.handleOpenURL;l.handleOpenURL=function(a){0==a.indexOf(M("BuildInfo.packageName",l)+"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};li.prototype.$a=function(a){this.ma.push(a);pi(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new P("unknown",null,null,null,new O("no-auth-event")),a(b))})};li.prototype.Tb=function(a){La(this.ma,function(b){return b==a})};var ui=function(a){this.u=a;this.i=di()},vi={name:"pendingRedirect",M:!1},wi=function(a){return a.i.set(vi,"pending",a.u)},xi=function(a){return a.i.remove(vi,a.u)},yi=function(a){return a.i.get(vi,a.u).then(function(a){return"pending"==a})};var T=function(a,b,c){this.v=a;this.j=b;this.D=c;this.Xb=[];this.ib=!1;this.Mc=q(this.Wc,this);this.Ra=new zi(this);this.ld=new Ai(this);this.Kb=new ui(this.j+":"+this.D);this.Aa={};this.Aa.unknown=this.Ra;this.Aa.signInViaRedirect=this.Ra;this.Aa.linkViaRedirect=this.Ra;this.Aa.reauthViaRedirect=this.Ra;this.Aa.signInViaPopup=this.ld;this.Aa.linkViaPopup=this.ld;this.Aa.reauthViaPopup=this.ld;this.K=Bi(this.v,this.j,this.D)},Bi=function(a,b,c){var d=firebase.SDK_VERSION||null;return gf()?new li(a,
b,c,d):new th(a,b,c,d)};T.prototype.reset=function(){this.ib=!1;this.K.Tb(this.Mc);this.K=Bi(this.v,this.j,this.D)};T.prototype.Gb=function(){var a=this;this.ib||(this.ib=!0,this.K.$a(this.Mc));var b=this.K;return this.K.La().f(function(c){a.K==b&&a.reset();throw c;})};var Ei=function(a){a.K.ke()&&a.Gb().f(function(b){var c=new P("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));Ci(b)&&a.Wc(c)});a.K.Ud()||Di(a.Ra)};
T.prototype.subscribe=function(a){Ia(this.Xb,a)||this.Xb.push(a);if(!this.ib){var b=this;yi(this.Kb).then(function(a){a?xi(b.Kb).then(function(){b.Gb().f(function(a){var c=new P("unknown",null,null,null,new O("operation-not-supported-in-this-environment"));Ci(a)&&b.Wc(c)})}):Ei(b)}).f(function(){Ei(b)})}};T.prototype.unsubscribe=function(a){La(this.Xb,function(b){return b==a})};
T.prototype.Wc=function(a){if(!a)throw new O("invalid-auth-event");for(var b=!1,c=0;c<this.Xb.length;c++){var d=this.Xb[c];if(d.Fd(a.da,a.J)){(b=this.Aa[a.da])&&b.ce(a,d);b=!0;break}}Di(this.Ra);return b};var Fi=new xf(2E3,1E4),Gi=new xf(3E4,6E4);T.prototype.getRedirectResult=function(){return this.Ra.getRedirectResult()};T.prototype.Nb=function(a,b,c,d,e){var f=this;return this.K.Nb(a,b,c,function(){f.ib||(f.ib=!0,f.K.$a(f.Mc))},function(){f.reset()},d,e)};
var Ci=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};T.prototype.Ob=function(a,b,c){var d=this,e;return wi(this.Kb).then(function(){return d.K.Ob(a,b,c).f(function(a){if(Ci(a))throw new O("operation-not-supported-in-this-environment");e=a;return xi(d.Kb).then(function(){throw e;})}).then(function(){return d.K.ne()?new A(function(){}):xi(d.Kb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
T.prototype.Vb=function(a,b,c,d){return this.K.Vb(c,function(c){a.Va(b,null,c,d)},Fi.get())};var Hi={},Ii=function(a,b,c){var d=b+":"+c;Hi[d]||(Hi[d]=new T(a,b,c));return Hi[d]},zi=function(a){this.i=a;this.qb=null;this.Rb=[];this.Qb=[];this.ob=null;this.od=!1};zi.prototype.reset=function(){this.qb=null;this.ob&&(this.ob.cancel(),this.ob=null)};
zi.prototype.ce=function(a,b){if(!a)return D(new O("invalid-auth-event"));this.reset();this.od=!0;var c=a.da,d=a.J,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.P?this.md(a,b):b.zb(c,d)?this.nd(a,b):D(new O("invalid-auth-event")):(Ji(this,!1,null,null),a=B());return a};var Di=function(a){a.od||(a.od=!0,Ji(a,!1,null,null))};
zi.prototype.md=function(a){Ji(this,!0,null,a.getError());return B()};zi.prototype.nd=function(a,b){var c=this;b=b.zb(a.da,a.J);var d=a.tb,e=a.ic(),f=!!a.da.match(/Redirect$/);return b(d,e).then(function(a){Ji(c,f,a,null)}).f(function(a){Ji(c,f,null,a)})};
var Ki=function(a,b){a.qb=function(){return D(b)};if(a.Qb.length)for(var c=0;c<a.Qb.length;c++)a.Qb[c](b)},Li=function(a,b){a.qb=function(){return B(b)};if(a.Rb.length)for(var c=0;c<a.Rb.length;c++)a.Rb[c](b)},Ji=function(a,b,c,d){b?d?Ki(a,d):Li(a,c):Li(a,{user:null});a.Rb=[];a.Qb=[]};zi.prototype.getRedirectResult=function(){var a=this;return new A(function(b,c){a.qb?a.qb().then(b,c):(a.Rb.push(b),a.Qb.push(c),Mi(a))})};
var Mi=function(a){var b=new O("timeout");a.ob&&a.ob.cancel();a.ob=le(Gi.get()).then(function(){a.qb||Ji(a,!0,null,b)})},Ai=function(a){this.i=a};Ai.prototype.ce=function(a,b){if(!a)return D(new O("invalid-auth-event"));var c=a.da,d=a.J;return a.P?this.md(a,b):b.zb(c,d)?this.nd(a,b):D(new O("invalid-auth-event"))};Ai.prototype.md=function(a,b){b.Va(a.da,null,a.getError(),a.J);return B()};
Ai.prototype.nd=function(a,b){var c=a.J,d=a.da,e=b.zb(d,c),f=a.tb;a=a.ic();return e(f,a).then(function(a){b.Va(d,a,null,c)}).f(function(a){b.Va(d,null,a,c)})};var Ni=function(a){this.g=a;this.Ba=this.X=null;this.Ha=0};Ni.prototype.C=function(){return{apiKey:this.g.j,refreshToken:this.X,accessToken:this.Ba,expirationTime:this.Ha}};
var Pi=function(a,b){var c=b.idToken,d=b.refreshToken;b=Oi(b.expiresIn);a.Ba=c;a.Ha=b;a.X=d},Oi=function(a){return la()+1E3*parseInt(a,10)},Qi=function(a,b){return Eg(a.g,b).then(function(b){a.Ba=b.access_token;a.Ha=Oi(b.expires_in);a.X=b.refresh_token;return{accessToken:a.Ba,expirationTime:a.Ha,refreshToken:a.X}}).f(function(b){"auth/user-token-expired"==b.code&&(a.X=null);throw b;})};
Ni.prototype.getToken=function(a){a=!!a;return this.Ba&&!this.X?D(new O("user-token-expired")):a||!this.Ba||la()>this.Ha-3E4?this.X?Qi(this,{grant_type:"refresh_token",refresh_token:this.X}):B(null):B({accessToken:this.Ba,expirationTime:this.Ha,refreshToken:this.X})};var Ri=function(a,b,c,d,e){Ff(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Si=function(a,b){Ib.call(this,a);for(var c in b)this[c]=b[c]};r(Si,Ib);
var U=function(a,b,c){this.ba=[];this.j=a.apiKey;this.D=a.appName;this.v=a.authDomain||null;a=firebase.SDK_VERSION?mf(firebase.SDK_VERSION):null;this.g=new S(this.j,null,a);this.ia=new Ni(this.g);Ti(this,b.idToken);Pi(this.ia,b);N(this,"refreshToken",this.ia.X);Ui(this,c||{});he.call(this);this.vc=!1;this.v&&pf()&&(this.m=Ii(this.v,this.j,this.D));this.Ac=[];this.ka=null;this.mb=Vi(this);this.vb=q(this.Xc,this)};r(U,he);U.prototype.Xc=function(){this.mb.kb&&(this.mb.stop(),this.mb.start())};
var Vi=function(a){return new Th(function(){return a.getToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.ia.Ha-la()-3E5;return 0<b?b:0},3E4,96E4,!1)},Wi=function(a){a.Kd||a.mb.kb||(a.mb.start(),dc(a,"tokenChanged",a.vb),Vb(a,"tokenChanged",a.vb))},Xi=function(a){dc(a,"tokenChanged",a.vb);a.mb.stop()},Ti=function(a,b){a.Yd=b;N(a,"_lat",b)},Yi=function(a,b){La(a.Ac,function(a){return a==b})},Zi=function(a){for(var b=[],c=0;c<a.Ac.length;c++)b.push(a.Ac[c](a));
return jd(b).then(function(){return a})},$i=function(a){a.m&&!a.vc&&(a.vc=!0,a.m.subscribe(a))},Ui=function(a,b){Ff(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,identifierNumber:b.identifierNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};N(U.prototype,"providerId","firebase");
var aj=function(){},bj=function(a){return B().then(function(){if(a.Kd)throw new O("app-deleted");})},cj=function(a){return Ea(a.providerData,function(a){return a.providerId})},ej=function(a,b){b&&(dj(a,b.providerId),a.providerData.push(b))},dj=function(a,b){La(a.providerData,function(a){return a.providerId==b})},fj=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&N(a,b,c)};
U.prototype.copy=function(a){var b=this;b!=a&&(Ff(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,identifierNumber:a.identifierNumber,isAnonymous:a.isAnonymous,providerData:[]}),w(a.providerData,function(a){ej(b,a)}),this.ia=a.ia,N(this,"refreshToken",this.ia.X))};U.prototype.reload=function(){var a=this;return this.c(bj(this).then(function(){return gj(a).then(function(){return Zi(a)}).then(aj)}))};
var gj=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return hj(a,b).then(function(){c||fj(a,"isAnonymous",!1);return b})})};U.prototype.getToken=function(a){var b=this;return this.c(bj(this).then(function(){return b.ia.getToken(a)}).then(function(a){if(!a)throw new O("internal-error");a.accessToken!=b.Yd&&(Ti(b,a.accessToken),b.Na());fj(b,"refreshToken",a.refreshToken);return a.accessToken}))};
var ij=function(a,b){b.idToken&&a.Yd!=b.idToken&&(Pi(a.ia,b),a.Na(),Ti(a,b.idToken),fj(a,"refreshToken",a.ia.X))};U.prototype.Na=function(){this.dispatchEvent(new Si("tokenChanged"))};var hj=function(a,b){return R(a.g,gh,{idToken:b}).then(q(a.qf,a))};
U.prototype.qf=function(a){a=a.users;if(!a||!a.length)throw new O("internal-error");a=a[0];Ui(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,identifierNumber:a.identifierNumber});for(var b=jj(a),c=0;c<b.length;c++)ej(this,b[c]);fj(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var jj=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Ri(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]},lj=function(a,b){var c=null;return a.c(b.ed(a.g,a.uid).then(function(b){ij(a,b);c=kj(a,b,"reauthenticate");a.ka=null;return a.reload()}).then(function(){return c}),!0)};U.prototype.reauthenticate=function(a){Bf("firebase.User.prototype.reauthenticate is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.reauthenticateWithCredential(a)};
U.prototype.reauthenticateWithCredential=function(a){return lj(this,a).then(function(){})};var mj=function(a,b){return gj(a).then(function(){if(Ia(cj(a),b))return Zi(a).then(function(){throw new O("provider-already-linked");})})},oj=function(a,b){var c=null;return a.c(mj(a,b.providerId).then(function(){return a.getToken()}).then(function(c){return b.cd(a.g,c)}).then(function(b){c=kj(a,b,"link");return nj(a,b)}).then(function(){return c}))};
U.prototype.link=function(a){Bf("firebase.User.prototype.link is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.linkWithCredential(a)};U.prototype.linkWithCredential=function(a){return oj(this,a).then(function(a){return a.user})};var kj=function(a,b,c){var d=rg(b);b=ai(b);return Gf({user:a,credential:d,additionalUserInfo:b,operationType:c})},nj=function(a,b){ij(a,b);return a.reload().then(function(){return a})};h=U.prototype;
h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){ij(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){ij(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return bj(this);var b=this;return this.c(this.getToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){ij(b,a);fj(b,"displayName",a.displayName||null);fj(b,"photoURL",a.photoUrl||null);return Zi(b)}).then(aj))};
h.unlink=function(a){var b=this;return this.c(gj(this).then(function(c){return Ia(cj(b),a)?Vg(b.g,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(cj(b),function(a){c[a]||dj(b,a)});return Zi(b)}):Zi(b).then(function(){throw new O("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getToken().then(function(b){return R(a.g,fh,{idToken:b})}).then(function(){a.dispatchEvent(new Si("userDeleted"))})).then(function(){for(var b=0;b<a.ba.length;b++)a.ba[b].cancel("app-deleted");a.ba=[];a.Kd=!0;Xi(a);N(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)})};
h.Fd=function(a,b){return"linkViaPopup"==a&&(this.ca||null)==b&&this.aa||"reauthViaPopup"==a&&(this.ca||null)==b&&this.aa||"linkViaRedirect"==a&&(this.za||null)==b||"reauthViaRedirect"==a&&(this.za||null)==b?!0:!1};h.Va=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.ca||null)||(c&&this.Pa?this.Pa(c):b&&!c&&this.aa&&this.aa(b),this.F&&(this.F.cancel(),this.F=null),delete this.aa,delete this.Pa)};
h.zb=function(a,b){return"linkViaPopup"==a&&b==(this.ca||null)?q(this.Nd,this):"reauthViaPopup"==a&&b==(this.ca||null)?q(this.Od,this):"linkViaRedirect"==a&&(this.za||null)==b?q(this.Nd,this):"reauthViaRedirect"==a&&(this.za||null)==b?q(this.Od,this):null};h.hc=function(){return of(this.uid+":::")};var qj=function(a,b){return pj(a,"linkViaPopup",b,function(){return mj(a,b.providerId).then(function(){return Zi(a)})},!1)};
U.prototype.linkWithPopup=function(a){return qj(this,a).then(function(a){return a?Gf({user:a.user,credential:a.credential,operationType:a.operationType}):a})};var rj=function(a,b){return pj(a,"reauthViaPopup",b,function(){return B()},!0)};U.prototype.reauthenticateWithPopup=function(a){return rj(this,a).then(function(a){return a?Gf({user:a.user,credential:a.credential,operationType:a.operationType}):a})};
var pj=function(a,b,c,d,e){if(!pf())return D(new O("operation-not-supported-in-this-environment"));if(a.ka&&!e)return D(a.ka);var f=Nf(c.providerId),g=a.hc(),k=null;(!qf()||kf())&&a.v&&c.isOAuthProvider&&(k=xh(a.v,a.j,a.D,b,c,null,g,firebase.SDK_VERSION||null));var n=cf(k,f&&f.Mb,f&&f.Lb);d=d().then(function(){sj(a);if(!e)return a.getToken().then(function(){})}).then(function(){return a.m.Nb(n,b,c,g,!!k)}).then(function(){return new A(function(c,d){a.Va(b,null,new O("cancelled-popup-request"),a.ca||
null);a.aa=c;a.Pa=d;a.ca=g;a.F=a.m.Vb(a,b,n,g)})}).then(function(a){n&&bf(n);return a}).f(function(a){n&&bf(n);throw a;});return a.c(d,e)};U.prototype.linkWithRedirect=function(a){var b=this;return tj(this,"linkViaRedirect",a,function(){return mj(b,a.providerId)},!1)};U.prototype.reauthenticateWithRedirect=function(a){return tj(this,"reauthViaRedirect",a,function(){return B()},!0)};
var tj=function(a,b,c,d,e){if(!pf())return D(new O("operation-not-supported-in-this-environment"));if(a.ka&&!e)return D(a.ka);var f=null,g=a.hc();d=d().then(function(){sj(a);if(!e)return a.getToken().then(function(){})}).then(function(){a.za=g;return Zi(a)}).then(function(b){a.Sa&&(b=a.Sa,b=b.i.set(uj,a.C(),b.u));return b}).then(function(){return a.m.Ob(b,c,g)}).f(function(b){f=b;if(a.Sa)return vj(a.Sa);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},sj=function(a){if(!a.m||!a.vc){if(a.m&&
!a.vc)throw new O("internal-error");throw new O("auth-domain-config-required");}};U.prototype.Nd=function(a,b){var c=this;this.F&&(this.F.cancel(),this.F=null);var d=null,e=this.getToken().then(function(d){return Xf(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=kj(c,a,"link");return nj(c,a)}).then(function(){return d});return this.c(e)};
U.prototype.Od=function(a,b){var c=this;this.F&&(this.F.cancel(),this.F=null);var d=null,e=B().then(function(){return Tf(Yf(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=kj(c,a,"reauthenticate");ij(c,a);c.ka=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};U.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.g.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};
U.prototype.c=function(a,b){var c=this,d=wj(this,a,b);this.ba.push(d);md(d,function(){Ka(c.ba,d)});return d};var wj=function(a,b,c){return a.ka&&!c?(b.cancel(),D(a.ka)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.ka||a.dispatchEvent(new Si("userInvalidated")),a.ka=b);throw b;})};U.prototype.toJSON=function(){return this.C()};
U.prototype.C=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,identifierNumber:this.identifierNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.j,appName:this.D,authDomain:this.v,stsTokenManager:this.ia.C(),redirectEventId:this.za||null};w(this.providerData,function(b){a.providerData.push(Hf(b))});return a};
var xj=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new U(b,c,a);a.providerData&&w(a.providerData,function(a){a&&ej(d,Gf(a))});a.redirectEventId&&(d.za=a.redirectEventId);return d},
yj=function(a,b,c){var d=new U(a,b);c&&(d.Sa=c);return d.reload().then(function(){return d})};var zj=function(a){this.u=a;this.i=di()},uj={name:"redirectUser",M:!1},vj=function(a){return a.i.remove(uj,a.u)},Aj=function(a,b){return a.i.get(uj,a.u).then(function(a){a&&b&&(a.authDomain=b);return xj(a||{})})};var Bj=function(a){this.u=a;this.i=di()},Cj={name:"authUser",M:!0},Dj=function(a,b){return a.i.set(Cj,b.C(),a.u)},Ej=function(a){return a.i.remove(Cj,a.u)},Fj=function(a,b){return a.i.get(Cj,a.u).then(function(a){a&&b&&(a.authDomain=b);return xj(a||{})})};var W=function(a){this.Fa=!1;N(this,"app",a);if(V(this).options&&V(this).options.apiKey)a=firebase.SDK_VERSION?mf(firebase.SDK_VERSION):null,this.g=new S(V(this).options&&V(this).options.apiKey,null,a);else throw new O("invalid-api-key");this.ba=[];this.Ca=[];this.ub=[];this.mf=firebase.INTERNAL.createSubscribe(q(this.Ze,this));this.Ic=void 0;firebase.INTERNAL.createSubscribe(q(this.af,this));Gj(this,null);this.ta=new Bj(V(this).options.apiKey+":"+V(this).name);this.pb=new zj(V(this).options.apiKey+
":"+V(this).name);this.cc=this.c(Hj(this));this.qa=this.c(Ij(this));this.bd=!1;this.Vc=q(this.Gf,this);this.qe=q(this.gb,this);this.vb=q(this.Xc,this);this.oe=q(this.Ue,this);this.pe=q(this.Ve,this);Jj(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this);this.Ia=0};W.prototype.toJSON=function(){return{apiKey:V(this).options.apiKey,authDomain:V(this).options.authDomain,appName:V(this).name,currentUser:X(this)&&X(this).C()}};
var Kj=function(a){return a.Ie||D(new O("auth-domain-config-required"))},Jj=function(a){var b=V(a).options.authDomain,c=V(a).options.apiKey;b&&pf()&&(a.Ie=a.cc.then(function(){if(!a.Fa)return a.m=Ii(b,c,V(a).name),a.m.subscribe(a),X(a)&&$i(X(a)),a.Sb&&($i(a.Sb),a.Sb=null),a.m}))};h=W.prototype;h.Fd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ca==b&&!!this.aa;default:return!1}};
h.Va=function(a,b,c,d){"signInViaPopup"==a&&this.ca==d&&(c&&this.Pa?this.Pa(c):b&&!c&&this.aa&&this.aa(b),this.F&&(this.F.cancel(),this.F=null),delete this.aa,delete this.Pa)};h.zb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ca==b&&this.aa?q(this.Ke,this):null};
h.Ke=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.F&&(this.F.cancel(),this.F=null);var d=null,e=null,f=Vf(c.g,a).then(function(a){d=rg(a);e=ai(a);return a});a=c.cc.then(function(){return f}).then(function(a){return Lj(c,a)}).then(function(){return Gf({user:X(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.hc=function(){return of()};
var Mj=function(a,b){if(!pf())return D(new O("operation-not-supported-in-this-environment"));var c=Nf(b.providerId),d=a.hc(),e=null;(!qf()||kf())&&V(a).options.authDomain&&b.isOAuthProvider&&(e=xh(V(a).options.authDomain,V(a).options.apiKey,V(a).name,"signInViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=cf(e,c&&c.Mb,c&&c.Lb),c=Kj(a).then(function(a){return a.Nb(f,"signInViaPopup",b,d,!!e)}).then(function(){return new A(function(b,c){a.Va("signInViaPopup",null,new O("cancelled-popup-request"),
a.ca);a.aa=b;a.Pa=c;a.ca=d;a.F=a.m.Vb(a,"signInViaPopup",f,d)})}).then(function(a){f&&bf(f);return a}).f(function(a){f&&bf(f);throw a;});return a.c(c)};W.prototype.signInWithPopup=function(a){return Mj(this,a).then(function(a){return a?Gf({user:a.user,credential:a.credential,operationType:a.operationType}):a})};W.prototype.getRedirectResult=function(){return Nj(this).then(function(a){return a?Gf({user:a.user,credential:a.credential,operationType:a.operationType}):a})};
W.prototype.signInWithRedirect=function(a){if(!pf())return D(new O("operation-not-supported-in-this-environment"));var b=this,c=Kj(this).then(function(){return b.m.Ob("signInViaRedirect",a)});return this.c(c)};
var Nj=function(a){if(!pf())return D(new O("operation-not-supported-in-this-environment"));var b=Kj(a).then(function(){return a.m.getRedirectResult()});return a.c(b)},Lj=function(a,b){var c={};c.apiKey=V(a).options.apiKey;c.authDomain=V(a).options.authDomain;c.appName=V(a).name;return a.cc.then(function(){return yj(c,b,a.pb)}).then(function(b){if(X(a)&&b.uid==X(a).uid)return X(a).copy(b),a.gb(b);Gj(a,b);$i(b);return a.gb(b)}).then(function(){a.Na()})},Gj=function(a,b){X(a)&&(Yi(X(a),a.qe),dc(X(a),
"tokenChanged",a.vb),dc(X(a),"userDeleted",a.oe),dc(X(a),"userInvalidated",a.pe),Xi(X(a)));b&&(b.Ac.push(a.qe),Vb(b,"tokenChanged",a.vb),Vb(b,"userDeleted",a.oe),Vb(b,"userInvalidated",a.pe),0<a.Ia&&Wi(b));N(a,"currentUser",b)};W.prototype.signOut=function(){var a=this,b=this.qa.then(function(){if(!X(a))return B();Gj(a,null);return Ej(a.ta).then(function(){a.Na()})});return this.c(b)};
var Oj=function(a){var b=Aj(a.pb,V(a).options.authDomain).then(function(b){if(a.Sb=b)b.Sa=a.pb;return vj(a.pb)});return a.c(b)},Hj=function(a){var b=V(a).options.authDomain,c=Oj(a).then(function(){return Fj(a.ta,b)}).then(function(b){return b?(b.Sa=a.pb,a.Sb&&(a.Sb.za||null)==(b.za||null)?b:b.reload().then(function(){return Dj(a.ta,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:Ej(a.ta)})):null}).then(function(b){Gj(a,b||null)});return a.c(c)},Ij=function(a){return a.cc.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Fa)return a.Vc()}).f(function(){}).then(function(){if(!a.Fa){a.bd=
!0;var b=a.ta;b.i.addListener(Cj,b.u,a.Vc)}})};h=W.prototype;h.Gf=function(){var a=this;return Fj(this.ta,V(this).options.authDomain).then(function(b){if(!a.Fa){var c;if(c=X(a)&&b){c=X(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return X(a).copy(b),X(a).getToken();if(X(a)||b)Gj(a,b),b&&($i(b),b.Sa=a.pb),a.m&&a.m.subscribe(a),a.Na()}})};h.gb=function(a){return Dj(this.ta,a)};h.Xc=function(){this.Na();this.gb(X(this))};h.Ue=function(){this.signOut()};
h.Ve=function(){this.signOut()};var Pj=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=rg(b);d=ai(b);return Lj(a,b)}).then(function(){return Gf({user:X(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=W.prototype;h.Ze=function(a){var b=this;this.addAuthTokenListener(function(){a.next(X(b))})};h.af=function(a){var b=this;Qj(this,function(){a.next(X(b))})};
h.onAuthStateChanged=function(a,b,c){var d=this;this.bd&&firebase.Promise.resolve().then(function(){p(a)?a(X(d)):p(a.next)&&a.next(X(d))});return this.mf(a,b,c)};h.getToken=function(a){var b=this,c=this.qa.then(function(){return X(b)?X(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.qa.then(function(){return Pj(b,R(b.g,hh,{token:a}))}).then(function(a){a=a.user;fj(a,"isAnonymous",!1);return b.gb(a)}).then(function(){return X(b)})};
h.signInWithEmailAndPassword=function(a,b){var c=this;return this.qa.then(function(){return Pj(c,R(c.g,ig,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.qa.then(function(){return Pj(c,R(c.g,eh,{email:a,password:b}))}).then(function(a){return a.user})};h.signInWithCredential=function(a){return Rj(this,a).then(function(a){return a.user})};var Rj=function(a,b){return a.qa.then(function(){return Pj(a,b.Ab(a.g))})};
W.prototype.signInAnonymously=function(){var a=X(this),b=this;return a&&a.isAnonymous?B(a):this.qa.then(function(){return Pj(b,b.g.signInAnonymously())}).then(function(a){a=a.user;fj(a,"isAnonymous",!0);return b.gb(a)}).then(function(){return X(b)})};var V=function(a){return a.app},X=function(a){return a.currentUser};W.prototype.getUid=function(){return X(this)&&X(this).uid||null};var Sj=function(a){return X(a)&&X(a)._lat||null};h=W.prototype;
h.Na=function(){if(this.bd){for(var a=0;a<this.Ca.length;a++)if(this.Ca[a])this.Ca[a](Sj(this));if(this.Ic!==this.getUid()&&this.ub.length)for(this.Ic=this.getUid(),a=0;a<this.ub.length;a++)if(this.ub[a])this.ub[a](Sj(this))}};h.Ae=function(a){this.addAuthTokenListener(a);this.Ia++;0<this.Ia&&X(this)&&Wi(X(this))};h.uf=function(a){var b=this;w(this.Ca,function(c){c==a&&b.Ia--});0>this.Ia&&(this.Ia=0);0==this.Ia&&X(this)&&Xi(X(this));this.removeAuthTokenListener(a)};
h.addAuthTokenListener=function(a){var b=this;this.Ca.push(a);this.c(this.qa.then(function(){b.Fa||Ia(b.Ca,a)&&a(Sj(b))}))};h.removeAuthTokenListener=function(a){La(this.Ca,function(b){return b==a})};var Qj=function(a,b){a.ub.push(b);a.c(a.qa.then(function(){!a.Fa&&Ia(a.ub,b)&&a.Ic!==a.getUid()&&(a.Ic=a.getUid(),b(Sj(a)))}))};h=W.prototype;
h["delete"]=function(){this.Fa=!0;for(var a=0;a<this.ba.length;a++)this.ba[a].cancel("app-deleted");this.ba=[];this.ta&&(a=this.ta,a.i.removeListener(Cj,a.u,this.Vc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.ba.push(a);md(a,function(){Ka(b.ba,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(Jg(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new Sh(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.g.sendPasswordResetEmail(a).then(function(){}))};var Tj="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),Y=function(a,b){return{name:a||"",ja:"a valid string",optional:!!b,la:m}},Z=function(a){return{name:a||"",ja:"a valid object",optional:!1,la:ha}},Uj=function(a,b){return{name:a||"",ja:"a function",optional:!!b,la:p}},Vj=function(){return{name:"",ja:"null",optional:!1,la:da}},Wj=function(){return{name:"credential",ja:"a valid credential",optional:!1,la:function(a){return a?!!a.Ab:!1}}},Xj=function(){return{name:"authProvider",
ja:"a valid Auth provider",optional:!1,la:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Yj=function(a,b,c,d){return{name:c||"",ja:a.ja+" or "+b.ja,optional:!!d,la:function(c){return a.la(c)||b.la(c)}}};var ak=function(a,b){for(var c in b){var d=b[c].name;a[d]=Zj(d,a[c],b[c].a)}},bk=function(a,b,c,d){a[b]=Zj(b,c,d)},Zj=function(a,b,c){if(!c)return b;var d=ck(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var n=!1,C=0;C<c.length;C++)if(c[C].optional)n=!0;else{if(n)throw new O("internal-error","Argument validator encountered a required argument after an optional argument.");k++}n=c.length;if(e.length<k||n<e.length)e="Expected "+(k==n?
1==k?"1 argument":k+" arguments":k+"-"+n+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(n=c[k].optional&&void 0===e[k],!c[k].la(e[k])&&!n){e=c[k];if(0>k||k>=Tj.length)throw new O("internal-error","Argument validator received an unsupported number of arguments.");e=Tj[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ja+".";break a}e=null}}if(e)throw new O("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},ck=function(a){a=a.split(".");return a[a.length-1]};ak(W.prototype,{applyActionCode:{name:"applyActionCode",a:[Y("code")]},checkActionCode:{name:"checkActionCode",a:[Y("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[Y("code"),Y("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[Y("email"),Y("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[Y("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[Yj(Z(),Uj(),"nextOrObserver"),
Uj("opt_error",!0),Uj("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[Y("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[Wj()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[Y("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[Y("email"),Y("password")]},signInWithPopup:{name:"signInWithPopup",a:[Xj()]},signInWithRedirect:{name:"signInWithRedirect",a:[Xj()]},signOut:{name:"signOut",
a:[]},toJSON:{name:"toJSON",a:[Y(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[Y("code")]}});
ak(U.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",ja:"a boolean",optional:!0,la:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[Wj()]},linkWithCredential:{name:"linkWithCredential",a:[Wj()]},linkWithPopup:{name:"linkWithPopup",a:[Xj()]},linkWithRedirect:{name:"linkWithRedirect",a:[Xj()]},reauthenticate:{name:"reauthenticate",a:[Wj()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[Wj()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",
a:[Xj()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[Xj()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[Y(null,!0)]},unlink:{name:"unlink",a:[Y("provider")]},updateEmail:{name:"updateEmail",a:[Y("email")]},updatePassword:{name:"updatePassword",a:[Y("password")]},updateProfile:{name:"updateProfile",a:[Z("profile")]}});ak(A.prototype,{f:{name:"catch"},then:{name:"then"}});
bk(kg,"credential",function(a,b){return new hg(a,b)},[Y("email"),Y("password")]);ak($f.prototype,{addScope:{name:"addScope",a:[Y("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Z("customOAuthParameters")]}});bk($f,"credential",ag,[Yj(Y(),Z(),"token")]);ak(bg.prototype,{addScope:{name:"addScope",a:[Y("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Z("customOAuthParameters")]}});bk(bg,"credential",cg,[Yj(Y(),Z(),"token")]);
ak(dg.prototype,{addScope:{name:"addScope",a:[Y("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Z("customOAuthParameters")]}});bk(dg,"credential",eg,[Yj(Y(),Yj(Z(),Vj()),"idToken"),Yj(Y(),Vj(),"accessToken",!0)]);ak(fg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[Z("customOAuthParameters")]}});bk(fg,"credential",gg,[Yj(Y(),Z(),"token"),Y("secret",!0)]);ak(O.prototype,{toJSON:{name:"toJSON",a:[Y(null,!0)]}});ak(tg.prototype,{toJSON:{name:"toJSON",a:[Y(null,!0)]}});
ak(Rf.prototype,{toJSON:{name:"toJSON",a:[Y(null,!0)]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:W,Error:O};bk(a,"EmailAuthProvider",kg,[]);bk(a,"FacebookAuthProvider",$f,[]);bk(a,"GithubAuthProvider",bg,[]);bk(a,"GoogleAuthProvider",dg,[]);bk(a,"TwitterAuthProvider",fg,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new W(a);c({INTERNAL:{getUid:q(a.getUid,a),getToken:q(a.getToken,a),addAuthTokenListener:q(a.Ae,a),removeAuthTokenListener:q(a.uf,a)}});return a},a,function(a,
c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:U})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.auth;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var firebase = __webpack_require__(1);
(function(){
(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function na(){this.Fd=void 0}
function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),pa(f,c),
c.push(":"),oa(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(){this.Wa=-1};function ta(){this.Wa=-1;this.Wa=64;this.M=[];this.Wd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(ta,sa);ta.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function ua(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],m=a.M[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+m&4294967295}
ta.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Wd,f=this.$b;d<b;){if(0==f)for(;d<=c;)ua(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){ua(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){ua(this,e);f=0;break}}this.$b=f;this.Pd+=b}};var r;a:{var va=aa.navigator;if(va){var wa=va.userAgent;if(wa){r=wa;break a}}r=""};var t=Array.prototype,xa=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Aa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ba=t.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ca=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Da(a,b){var c=Ea(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ea(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Fa(a,b){var c=xa(a,b);0<=c&&t.splice.call(a,c,1)}function Ga(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Ha(a,b){a.sort(b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ka(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function La(a){var b=0,c;for(c in a)b++;return b}function Ma(a){for(var b in a)return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Oa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Pa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Qa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ra(a,b){var c=Qa(a,b,void 0);return c&&a[c]}function Sa(a){for(var b in a)return!1;return!0}function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b};var Ua=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),Va=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Wa=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),Xa=-1!=r.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){if(!a)throw db(b);}function db(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function gb(a){var b=[];fb(a,function(a,d){ea(d)?ya(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var hb=firebase.Promise;function ib(){var a=this;this.reject=this.resolve=null;this.ra=new hb(function(b,c){a.resolve=b;a.reject=c})}function jb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(kb(a.ra),1===b.length?b(c):b(c,d))}}function kb(a){a.then(void 0,ba)};function lb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ma(a)}function x(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,cb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function B(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(A(a,b,d)+"must be a valid function.");}function ob(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(A(a,b,!0)+"must be a valid context object.");};function pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function C(a,b){this.name=a;this.R=b}function qb(a,b){return new C(a,b)};function rb(a,b){return sb(a.name,b.name)}function tb(a,b){return sb(a,b)};function ub(a){this.uc=a;this.Cd="firebase:"}g=ub.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,x(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:lb(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return eb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new ub(b)}}catch(c){}return new vb}var xb=wb("localStorage"),yb=wb("sessionStorage");function zb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.qg=d;this.gf=e||"";this.$a=xb.get("host:"+a)||this.host}function Ab(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&xb.set("host:"+a.host,a.$a))}
function Bb(a,b,c){D("string"===typeof b,"typeof type must == string");D("object"===typeof c,"typeof params must == object");if(b===Cb)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if(b===Db)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.pe);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Eb(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Fb(a,b){var c=new Gb;Hb(a,new E(""),function(a,e){Ib(c,a,Jb(e,b))});return c}function Jb(a,b){var c=a.C().H(),c=Eb(c,b),d;if(a.J()){var e=Eb(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new Kb(e,G(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new Kb(c)));a.O(H,function(a,c){var e=Jb(c,b);e!==c&&(d=d.T(a,e))});return d};var Lb=function(){var a=1;return function(){return a++}}(),D=cb,Mb=db;
function Nb(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ga(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
l)}return null}function Ob(a){var b=mb(a);a=new ta;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Wd[d]=c&255,c/=256;ua(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function Pb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Pb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+x(arguments[c]):b+arguments[c],b+=" ";return b}var Qb=null,Rb=!0;
function Sb(a,b){cb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Qb=q(console.log,console):"object"===typeof console.log&&(Qb=function(a){console.log(a)})),b&&yb.set("logging_enabled",!0)):ha(a)?Qb=a:(Qb=null,yb.remove("logging_enabled"))}function I(a){!0===Rb&&(Rb=!1,null===Qb&&!0===yb.get("logging_enabled")&&Sb(!0));if(Qb){var b=Pb.apply(null,arguments);Qb(b)}}
function Tb(a){return function(){I(a,arguments)}}function Ub(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Pb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Vb(a){var b=Pb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function J(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Pb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Wb(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Vb(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Vb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new zb(b,d,c,"ws"===e||"wss"===e),path:new E(f)}}function Xb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Yb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Zb(a),d=Zb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+x(b));}
function ac(a){if("object"!==typeof a||null===a)return x(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=x(b[d]),c+=":",c+=ac(a[b[d]]);return c+"}"}function bc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function cc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
function dc(a){D(!Xb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fc(a){try{a()}catch(b){setTimeout(function(){J("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function gc(a,b,c){Object.defineProperty(a,b,{get:c})}function hc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function ic(a){var b={},c={},d={},e="";try{var f=a.split("."),b=lb(Nb(f[0])||""),c=lb(Nb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Je:c,data:d,mg:e}}function jc(a){a=ic(a);var b=a.Je;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function kc(a){a=ic(a).Je;return"object"===typeof a&&!0===w(a,"admin")};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.nd=function(a,b){return 0!==this.compare(new C("[MIN_NAME]",a),new C("[MIN_NAME]",b))};lc.prototype.Hc=function(){return oc};function pc(a){D(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(pc,lc);g=pc.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?sb(a.name,b.name):c};
g.Ec=function(a,b){var c=G(a),c=L.F(this.bc,c);return new C(b,c)};g.Fc=function(){var a=L.F(this.bc,qc);return new C("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function rc(){}la(rc,lc);g=rc.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?sb(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",new Kb("[PRIORITY-POST]",qc))};
g.Ec=function(a,b){var c=G(a);return new C(b,new Kb("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var H=new rc;function sc(){}la(sc,lc);g=sc.prototype;g.compare=function(a,b){return sb(a.name,b.name)};g.xc=function(){throw Mb("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",L)};g.Ec=function(a){D(p(a),"KeyIndex indexValue must always be a string.");return new C(a,L)};g.toString=function(){return".key"};
var tc=new sc;function uc(){}la(uc,lc);g=uc.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?sb(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return oc};g.Fc=function(){return vc};g.Ec=function(a,b){var c=G(a);return new C(b,c)};g.toString=function(){return".value"};var wc=new uc;function xc(a,b){this.od=a;this.cc=b}xc.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function yc(a,b,c){var d=Ja(a.od,function(d,f){var h=w(a.cc,f);D(h,"Missing index implementation for "+f);if(d===mc){if(h.xc(b.R)){for(var k=[],m=c.Wb(qb),l=M(m);l;)l.name!=b.name&&k.push(l),l=M(m);k.push(b);return zc(k,nc(h))}return mc}h=c.get(b.name);k=d;h&&(k=k.remove(new C(b.name,h)));return k.Oa(b,b.R)});return new xc(d,a.cc)}
function Ac(a,b,c){var d=Ja(a.od,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new C(b.name,d)):a});return new xc(d,a.cc)}var Bc=new xc({".priority":mc},{".priority":H});function Kb(a,b){this.B=a;D(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||L;Cc(this.aa);this.Db=null}var Dc=["object","boolean","number","string"];g=Kb.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new Kb(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:L};g.P=function(a){return a.e()?this:".priority"===K(a)?this.aa:L};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:L.T(a,b).fa(this.aa)};g.F=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;D(".priority"!==c||1===Ec(a),".priority must be the last token in a path");return this.T(c,L.F(N(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Fc(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+dc(this.B):a+this.B;this.Db=Ob(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===L)return 1;if(a instanceof O)return-1;D(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=xa(Dc,b),e=xa(Dc,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return x(this.H(!0))};function Gc(){this.set={}}g=Gc.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return eb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return Sa(this.set)};g.count=function(){return La(this.set)};function Hc(a,b){v(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Ic(a){D(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}Ic.prototype.Ge=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ie.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Ic.prototype.gc=function(a,b,c){Jc(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({Ie:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
Ic.prototype.Ic=function(a,b,c){Jc(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ie===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Jc(a,b){D(Da(a.Bf,function(a){return a===b}),"Unknown event: "+b)};var Kc=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lc(){Ic.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!pb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ge("online",!1))},!1)}}la(Lc,Ic);Lc.prototype.Ue=function(a){D("online"===a,"Unknown event type: "+a);return[this.hc]};ca(Lc);function Mc(){Ic.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ge("visible",b))},!1)}}la(Mc,Ic);Mc.prototype.Ue=function(a){D("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(Mc);function E(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function P(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return P(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Nc(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=sb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ec(a){return a.o.length-a.Y}function N(a){var b=a.Y;b<a.o.length&&b++;return new E(a.o,b)}function Oc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=E.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new E(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof E)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new E(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ec(this)!==Ec(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ec(this)>Ec(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var Q=new E("");function Pc(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Qe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qc(this)}Pc.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qc(this)};Pc.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qc(a){if(768<a.Ha)throw Error(a.Qe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Qe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rc(a));}function Rc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof E?b:new E(b),d=a,e;null!==(e=K(c));)d=new Tc(e,d,w(d.A.children,e)||new Sc),c=N(c);return d}g=Tc.prototype;g.Ca=function(){return this.A.value};function Vc(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;v(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.O(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new E(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Wc(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=eb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.La=a;this.ba=b?b:$c}g=Zc.prototype;g.Oa=function(a,b){return new Zc(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new Zc(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function ad(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new bd(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new bd(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new bd(this.ba,a,this.La,!0,b)};g.We=function(a){return new bd(this.ba,null,this.La,!0,a)};function bd(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.le?a.right:a.left}
function M(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function cd(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}g=dd.prototype;
g.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function ed(a){return a.left.e()?a:ed(a.left)}g.Gc=function(){return ed(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gd(e)};function hd(a){if(a.left.e())return $c;a.left.ea()||a.left.left.ea()||(a=id(a));a=a.X(null,null,null,hd(a.left),null);return gd(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=id(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=jd(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=kd(c),c.left.left.ea()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,hd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gd(c)};g.ea=function(){return this.color};
function gd(a){a.right.ea()&&!a.left.ea()&&(a=ld(a));a.left.ea()&&a.left.left.ea()&&(a=jd(a));a.left.ea()&&a.right.ea()&&(a=kd(a));return a}function id(a){a=kd(a);a.right.left.ea()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}g=md.prototype;g.X=function(){return this};g.Oa=function(a,b){return new dd(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var $c=new md;function O(a,b,c){this.k=a;(this.aa=b)&&Cc(this.aa);a.e()&&D(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=O.prototype;g.J=function(){return!1};g.C=function(){return this.aa||L};g.fa=function(a){return this.k.e()?this:new O(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?L:a};g.P=function(a){var b=K(a);return null===b?this:this.Q(b).P(N(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new C(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ac(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=yc(this.yb,c,this.k));e=d.e()?L:this.aa;return new O(d,e,c)};g.F=function(a,b){var c=K(a);if(null===c)return b;D(".priority"!==K(a)||1===Ec(a),".priority must be the last token in a path");var d=this.Q(c).F(N(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var nd=/^(0|[1-9]\d*)$/;g=O.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(H,function(f,h){b[f]=h.H(a);c++;e&&nd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Fc(this.C().H())+":");this.O(H,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":Ob(a)}return this.Db};
g.Ve=function(a,b,c){return(c=od(this,c))?(a=ad(c,new C(a,b)))?a.name:null:ad(this.k,a)};function pd(a,b){var c;c=(c=od(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new C(c,a.k.get(c)):null}function qd(a,b){var c;c=(c=od(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new C(c,a.k.get(c)):null}g.O=function(a,b){var c=od(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=od(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,qb),d=cd(c);null!=d&&0>b.compare(d,a);)M(c),d=cd(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=od(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,qb),d=cd(c);null!=d&&0<b.compare(d,a);)M(c),d=cd(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===qc?-1:0};
g.nb=function(a){if(a===tc||Pa(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;D(a!==tc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(qb),f=M(c);f;)e=e||a.xc(f.R),d.push(f),f=M(c);d=e?zc(d,nc(a)):mc;e=a.toString();c=Ta(b.cc);c[e]=a;a=Ta(b.od);a[e]=d;return new O(this.k,this.aa,new xc(a,c))};g.yc=function(a){return a===tc||Pa(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(H);a=a.Wb(H);for(var c=M(b),d=M(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=M(b);d=M(a)}return null===c&&null===d}return!1};function od(a,b){return b===tc?null:a.yb.get(b.toString())}g.toString=function(){return x(this.H(!0))};function G(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Kb(a,G(c));if(a instanceof Array){var d=L,e=a;v(e,function(a,b){if(eb(e,b)&&"."!==b.substring(0,1)){var c=G(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(G(c))}var f=[],h=!1,k=a;fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=G(k[a]);b.e()||(h=h||!b.C().e(),f.push(new C(a,b)))}});if(0==f.length)return L;var m=zc(f,rb,function(a){return a.name},tb);if(h){var l=zc(f,nc(H));return new O(m,G(c),new xc({".priority":l},{".priority":H}))}return new O(m,G(c),Bc)}var rd=Math.log(2);
function sd(a){this.count=parseInt(Math.log(a+1)/rd,10);this.Oe=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function td(a){var b=!(a.Cf&1<<a.Oe);a.Oe--;return b}
function zc(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new dd(u,l.R,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new dd(u,l.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new dd(F,k.R,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var F=td(b),fd=Math.pow(2,b.count-(z+1));F?d(fd,!1):(d(fd,!1),d(fd,!0))}return l}(new sd(a.length));
return null!==f?new Zc(d||b,f):new Zc(d||b)}function Fc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a}function Cc(a){if(a.J()){var b=a.H();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&eb(b,".sv"),"Priority must be a string or number.")}else D(a===qc||a.e(),"priority of unexpected type.");D(a===qc||a.C().e(),"Priority nodes can't have a priority of their own.")}var L=new O(new Zc(tb),null,Bc);function ud(){O.call(this,new Zc(tb),L,Bc)}la(ud,O);g=ud.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return L};g.e=function(){return!1};var qc=new ud,oc=new C("[MIN_NAME]",L),vc=new C("[MAX_NAME]",qc);function vd(a,b){this.value=a;this.children=b||wd}var wd=new Zc(function(a,b){return a===b?0:a<b?-1:1});function xd(a){var b=R;v(a,function(a,d){b=b.set(new E(d),a)});return b}g=vd.prototype;g.e=function(){return null===this.value&&this.children.e()};function yd(a,b,c){if(null!=a.value&&c(a.value))return{path:Q,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=yd(a,N(b),c),null!=b?{path:(new E(d)).n(b.path),value:b.value}:null):null}
function zd(a,b){return yd(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):R};g.set=function(a,b){if(a.e())return new vd(b,this.children);var c=K(a),d=(this.children.get(c)||R).set(N(a),b),c=this.children.Oa(c,d);return new vd(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?R:new vd(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?R:new vd(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
function Ad(a,b,c){if(b.e())return c;var d=K(b);b=Ad(a.children.get(d)||R,N(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new vd(a.value,d)}function Bd(a,b){return Cd(a,Q,b)}function Cd(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Cd(f,b.n(a),c)});return c(b,a.value,d)}function Dd(a,b,c){return Ed(a,b,Q,c)}function Ed(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?Ed(a,N(b),c.n(e),d):null}
function Fd(a,b,c){Gd(a,b,Q,c)}function Gd(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Gd(a,N(b),c.n(e),d):R}function Hd(a,b){Id(a,Q,b)}function Id(a,b,c){a.children.ha(function(a,e){Id(e,b.n(a),c)});a.value&&c(b,a.value)}function Jd(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var R=new vd(null);vd.prototype.toString=function(){var a={};Hd(this,function(b,c){a[b.toString()]=c.toString()});return x(a)};var Kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ld=/[\[\].#$\u0000-\u001F\u007F]/;function Md(a){return p(a)&&0!==a.length&&!Kd.test(a)}function Nd(a){return null===a||p(a)||ga(a)&&!Xb(a)||ia(a)&&eb(a,".sv")}function Od(a,b,c,d){d&&!n(b)||Pd(A(a,1,d),b,c)}
function Pd(a,b,c){c instanceof E&&(c=new Pc(c,a));if(!n(b))throw Error(a+"contains undefined "+Rc(c));if(ha(b))throw Error(a+"contains a function "+Rc(c)+" with contents: "+b.toString());if(Xb(b))throw Error(a+"contains "+b.toString()+" "+Rc(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;fb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Md(b)))throw Error(a+" contains an invalid key ("+b+") "+Rc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Pd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rc(c)+" in addition to actual children.");}}
function Qd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Md(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Nc);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Rd(a,b,c){var d=A(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];fb(b,function(a,b){var k=new E(a);Pd(d,b,c.n(k));if(".priority"===Oc(k)&&!Nd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Qd(d,e)}
function Sd(a,b,c){if(Xb(c))throw Error(A(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nd(c))throw Error(A(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Td(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ud(a,b){if(n(b)&&!Md(b))throw Error(A(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Vd(a,b){if(!p(b)||0===b.length||Ld.test(b))throw Error(A(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Wd(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xd(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!Md(b.jc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!Ld.test(c)));if(d)throw Error(A(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function Gb(){this.k=this.B=null}Gb.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=K(a);a=N(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Ib(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Gc);var d=K(b);a.k.contains(d)||a.k.add(d,new Gb);a=a.k.get(d);b=N(b);Ib(a,b,c)}}
function Yd(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(H,function(b,c){Ib(a,new E(b),c)});return Yd(a,b)}return null!==a.k?(c=K(b),b=N(b),a.k.contains(c)&&Yd(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Hb(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new E(b.toString()+"/"+a);Hb(e,f,c)})}Gb.prototype.O=function(a){null!==this.k&&Hc(this.k,function(b,c){a(b,c)})};function Zd(a,b){this.type=$d;this.source=a;this.path=b}Zd.prototype.Mc=function(){return this.path.e()?new Zd(this.source,Q):new Zd(this.source,N(this.path))};Zd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ae(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}ae.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new E(a)),a.e()?null:a.value?new ce(this.source,Q,a.value):new ae(this.source,Q,a);D(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ae(this.source,N(this.path),this.children)};ae.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function de(a,b,c){this.type=ee;this.source=fe;this.path=a;this.Ob=b;this.Id=c}de.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return D(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new E(a));return new de(Q,a,this.Id)}D(K(this.path)===a,"operationForChild called for unrelated child.");return new de(N(this.path),this.Ob,this.Id)};
de.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};function ce(a,b,c){this.type=ge;this.source=a;this.path=b;this.Ga=c}ce.prototype.Mc=function(a){return this.path.e()?new ce(this.source,Q,this.Ga.Q(a)):new ce(this.source,N(this.path),this.Ga)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};var ge=0,be=1,ee=2,$d=3;function he(a,b,c,d){this.ee=a;this.Se=b;this.Hb=c;this.Ee=d;D(!d||b,"Tagged queries must be from server.")}var fe=new he(!0,!1,null,!1),ie=new he(!1,!0,null,!1);he.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Hb+")":"server"};function je(a,b,c){this.A=a;this.da=b;this.Sb=c}function ke(a){return a.da}function le(a){return a.Sb}function me(a,b){return b.e()?a.da&&!a.Sb:ne(a,K(b))}function ne(a,b){return a.da&&!a.Sb||a.A.Da(b)}je.prototype.j=function(){return this.A};function oe(a,b){this.N=a;this.Ld=b}function pe(a,b,c,d){return new oe(new je(b,c,d),a.Ld)}function qe(a){return a.N.da?a.N.j():null}oe.prototype.w=function(){return this.Ld};function re(a){return a.Ld.da?a.Ld.j():null};function se(){}se.prototype.Te=function(){return null};se.prototype.fe=function(){return null};var te=new se;function ue(a,b,c){this.xf=a;this.Ka=b;this.yd=c}ue.prototype.Te=function(a){var b=this.Ka.N;if(ne(b,a))return b.j().Q(a);b=null!=this.yd?new je(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};ue.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:re(this.Ka);a=this.xf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function ve(a,b){this.Sd=a;this.Df=b}function we(a){this.U=a}
we.prototype.eb=function(a,b,c,d){var e=new xe,f;if(b.type===ge)b.source.ee?c=ye(this,a,b.path,b.Ga,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w())&&!b.path.e(),c=ze(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===be)b.source.ee?c=Ae(this,a,b.path,b.children,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w()),c=Be(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new ue(c,a,d);d=a.N.j();if(b.e()||".priority"===K(b))ke(a.w())?
b=c.Aa(re(a)):(b=a.w().j(),D(b instanceof O,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=K(b),k=c.qc(h,a.w());null==k&&ne(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,N(b),f,e):a.N.j().Da(h)?this.U.F(d,h,L,N(b),f,e):d;b.e()&&ke(a.w())&&(d=c.Aa(re(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=ke(a.w())||null!=c.lc(Q);c=pe(a,b,d,this.U.Na())}else c=Ce(this,a,b.path,b.Ob,c,d,e);else if(b.type===$d)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=De(this,new oe(a.N,new je(f,
h,b.Sb)),d,c,te,e);else throw Mb("Unknown operation type: "+b.type);e=Na(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=qe(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(Ee(qe(d))));return new ve(c,e)};
function De(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())D(ke(b.w()),"If change path is empty, we must have complete server data"),le(b.w())?(e=re(b),d=d.rc(e instanceof O?e:L)):d=d.Aa(re(b)),f=a.U.ya(b.N.j(),d,f);else{var m=K(c);if(".priority"==m)D(1==Ec(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var l=N(c);ne(h,m)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(m).F(l,d):h.j().Q(m)):d=d.qc(m,
b.w());f=null!=d?a.U.F(h.j(),m,d,l,e,f):h.j()}}return pe(b,f,h.da||c.e(),a.U.Na())}function ze(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(m.j(),d,null);else if(h.Na()&&!m.Sb)d=m.j().F(c,d),d=h.ya(m.j(),d,null);else{var l=K(c);if(!me(m,c)&&1<Ec(c))return b;var u=N(c);d=m.j().Q(l).F(u,d);d=".priority"==l?h.fa(m.j(),d):h.F(m.j(),l,d,u,te,null)}m=m.da||c.e();b=new oe(b.N,new je(d,m,h.Na()));return De(a,b,c,e,new ue(e,b,f),k)}
function ye(a,b,c,d,e,f,h){var k=b.N;e=new ue(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=pe(b,h,!0,a.U.Na());else if(f=K(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=pe(b,h,k.da,k.Sb);else{c=N(c);var m=k.j().Q(f);if(!c.e()){var l=e.Te(f);d=null!=l?".priority"===Oc(c)&&l.P(c.parent()).e()?l:l.F(c,d):L}m.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=pe(b,h,k.da,a.U.Na()))}return a}
function Ae(a,b,c,d,e,f,h){var k=b;Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))&&(k=ye(a,k,u,l,e,f,h))});Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))||(k=ye(a,k,u,l,e,f,h))});return k}function Fe(a,b){Hd(b,function(b,d){a=a.F(b,d)});return a}
function Be(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!ke(b.w()))return b;var m=b;c=c.e()?d:Ad(R,c,d);var l=b.w().j();c.children.ha(function(c,d){if(l.Da(c)){var F=b.w().j().Q(c),F=Fe(F,d);m=ze(a,m,new E(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!ne(b.w(),c)&&null==d.value;l.Da(c)||F||(F=b.w().j().Q(c),F=Fe(F,d),m=ze(a,m,new E(c),F,e,f,h,k))});return m}
function Ce(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=le(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.da||me(m,c))return ze(a,b,c,m.j().P(c),e,f,k,h);if(c.e()){var l=R;m.j().O(tc,function(a,b){l=l.set(new E(a),b)});return Be(a,b,c,l,e,f,k,h)}return b}l=R;Hd(d,function(a){var b=c.n(a);me(m,b)&&(l=l.set(a,m.j().P(b)))});return Be(a,b,c,l,e,f,k,h)};function Ge(a){this.V=a;this.g=a.m.g}function He(a,b,c,d){var e=[],f=[];ya(b,function(b){b.type===Ie&&a.g.nd(b.qe,b.Ja)&&f.push(new S(Je,b.Ja,b.Xa))});Ke(a,e,Le,b,d,c);Ke(a,e,Me,b,d,c);Ke(a,e,Je,f,d,c);Ke(a,e,Ie,b,d,c);Ke(a,e,Ne,b,d,c);return e}function Ke(a,b,c,d,e,f){d=za(d,function(a){return a.type===c});Ha(d,q(a.Ff,a));ya(d,function(c){var d=Oe(a,c,f);ya(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function Oe(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}Ge.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw Mb("Should only compare child_ events.");return this.g.compare(new C(a.Xa,a.Ja),new C(b.Xa,b.Ja))};function Pe(a,b){this.V=a;var c=a.m,d=new Qe(c.g),c=T(c)?new Qe(c.g):c.xa?new Re(c):new Se(c);this.hf=new we(c);var e=b.w(),f=b.N,h=d.ya(L,e.j(),null),k=c.ya(L,f.j(),null);this.Ka=new oe(new je(k,f.da,c.Na()),new je(h,e.da,d.Na()));this.Za=[];this.Jf=new Ge(a)}function Te(a){return a.V}g=Pe.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=re(this.Ka);return b&&(T(this.V.m)||!a.e()&&!b.Q(K(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;ya(this.Za,function(a){(a=a.Me(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===be&&null!==a.source.Hb&&(D(re(this.Ka),"We should always have a full cache before handling merges"),D(qe(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;D(c.N.j().yc(b.U.g),"Event snap not indexed");D(c.w().j().yc(b.U.g),"Server snap not indexed");D(ke(a.Sd.w())||!ke(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Ue(this,a.Df,a.Sd.N.j(),null)};
function Ve(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(H,function(a,b){d.push(new S(Me,b,a))});c.da&&d.push(Ee(c.j()));return Ue(a,d,c.j(),b)}function Ue(a,b,c,d){return He(a.Jf,b,c,d?[d]:a.Za)};function We(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.hd=a}We.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};We.prototype.ge=function(){return this.hd};We.prototype.Tb=function(){return this.ae.Tb(this)};We.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+x(this.Md.be())};function Xe(a,b,c){this.ae=a;this.error=b;this.path=c}Xe.prototype.Yb=function(){return this.path};Xe.prototype.ge=function(){return"cancel"};
Xe.prototype.Tb=function(){return this.ae.Tb(this)};Xe.prototype.toString=function(){return this.path.toString()+":cancel"};function Ye(){this.vb=[]}function Ze(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new $e(f));c.add(e)}c&&a.vb.push(c)}function af(a,b,c){Ze(a,c);bf(a,function(a){return a.Z(b)})}function cf(a,b,c){Ze(a,c);bf(a,function(a){return a.contains(b)||b.contains(a)})}
function bf(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Qb&&I("event: "+h.toString());fc(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function $e(a){this.qa=a;this.jd=[]}$e.prototype.add=function(a){this.jd.push(a)};$e.prototype.Yb=function(){return this.qa};function Qe(a){this.g=a}g=Qe.prototype;g.F=function(a,b,c,d,e,f){D(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?df(f,new S(Le,e,b)):D(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?df(f,new S(Me,c,b)):df(f,new S(Ie,c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(H,function(a,e){b.Da(a)||df(c,new S(Le,e,a))}),b.J()||b.O(H,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||df(c,new S(Ie,e,b,f))}else df(c,new S(Me,e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?L:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Se(a){this.he=new Qe(a.g);this.g=a.g;var b;a.ka?(b=ef(a),b=a.g.Ec(ff(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=gf(a),a=a.g.Ec(hf(a),b)):a=a.g.Fc();this.vc=a}g=Se.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new C(b,c))||(c=L);return this.he.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=L);var d=b.nb(this.g),d=d.fa(L),e=this;b.O(H,function(a,b){e.matches(new C(a,b))||(d=d.T(a,L))});return this.he.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.he};function Re(a){this.sa=new Se(a);this.g=a.g;D(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!jf(a)}g=Re.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new C(b,c))||(c=L);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):kf(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=L.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=L.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=M(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(L);var k,m,l;if(this.Ib){b=d.We(this.g);k=this.sa.vc;m=this.sa.Uc;var u=nc(this.g);l=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
m=this.sa.vc,l=nc(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=M(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.T(f.name,L)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function kf(a,b,c,d,e,f){var h;if(a.Ib){var k=nc(a.g);h=function(a,b){return k(b,a)}}else h=nc(a.g);D(b.Eb()==a.oa,"");var m=new C(c,d),l=a.Ib?pd(b,a.g):qd(b,a.g),u=a.sa.matches(m);if(b.Da(c)){for(var z=b.Q(c),l=e.fe(a.g,l,a.Ib);null!=l&&(l.name==c||b.Da(l.name));)l=e.fe(a.g,l,a.Ib);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&df(f,new S(Ie,d,c,z)),b.T(c,d);null!=f&&df(f,new S(Le,z,c));b=b.T(c,L);return null!=l&&a.sa.matches(l)?(null!=f&&df(f,new S(Me,l.R,l.name)),b.T(l.name,l.R)):b}return d.e()?
b:u&&0<=h(l,m)?(null!=f&&(df(f,new S(Le,l.R,l.name)),df(f,new S(Me,d,c))),b.T(c,d).T(l.name,L)):b};function S(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.qe=d;this.Dd=void 0}function Ee(a){return new S(Ne,a)}var Me="child_added",Le="child_removed",Ie="child_changed",Je="child_moved",Ne="value";function xe(){this.fb={}}
function df(a,b){var c=b.type,d=b.Xa;D(c==Me||c==Ie||c==Le,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if(c==Me&&f==Le)a.fb[d]=new S(Ie,b.Ja,d,e.Ja);else if(c==Le&&f==Me)delete a.fb[d];else if(c==Le&&f==Ie)a.fb[d]=new S(Le,e.qe,d);else if(c==Ie&&f==Me)a.fb[d]=new S(Me,b.Ja,d);else if(c==Ie&&f==Ie)a.fb[d]=new S(Ie,b.Ja,d,e.qe);else throw Mb("Illegal combination of changes: "+b+" occurred after "+
e);}else a.fb[d]=b};function lf(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=H}var mf=new lf;function jf(a){return""===a.mb?a.ka:"l"===a.mb}function ff(a){D(a.ka,"Only valid if start has been set");return a.dc}function ef(a){D(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function hf(a){D(a.na,"Only valid if end has been set");return a.ac}
function gf(a){D(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function nf(a){var b=new lf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=lf.prototype;g.ne=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.oe=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=nf(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=nf(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function of(a,b){var c=nf(a);c.g=b;return c}function pf(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=jf(a)?"l":"r");b.vf=c}a.g!==H&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function qf(a){return T(a)&&a.g==H}
function rf(a){var b={};if(qf(a))return b;var c;a.g===H?c="$priority":a.g===wc?c="$value":a.g===tc?c="$key":(D(a.g instanceof pc,"Unrecognized index type!"),c=a.g.toString());b.orderBy=x(c);a.ka&&(b.startAt=x(a.dc),a.Kb&&(b.startAt+=","+x(a.zb)));a.na&&(b.endAt=x(a.ac),a.Rb&&(b.endAt+=","+x(a.xb)));a.xa&&(jf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return x(pf(this))};function sf(a){this.W=a}var tf=new sf(new vd(null));function uf(a,b,c){if(b.e())return new sf(new vd(c));var d=zd(a.W,b);if(null!=d){var e=d.path,d=d.value;b=P(e,b);d=d.F(b,c);return new sf(a.W.set(e,d))}a=Ad(a.W,b,new vd(c));return new sf(a)}function vf(a,b,c){var d=a;fb(c,function(a,c){d=uf(d,b.n(a),c)});return d}sf.prototype.Ed=function(a){if(a.e())return tf;a=Ad(this.W,a,R);return new sf(a)};function wf(a,b){var c=zd(a.W,b);return null!=c?a.W.get(c.path).P(P(c.path,b)):null}
function xf(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(H,function(a,c){b.push(new C(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new C(a,c.value))});return b}function yf(a,b){if(b.e())return a;var c=wf(a,b);return null!=c?new sf(new vd(c)):new sf(a.W.subtree(b))}sf.prototype.e=function(){return this.W.e()};sf.prototype.apply=function(a){return zf(Q,this.W,a)};
function zf(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=zf(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Af(){this.Jd=L}Af.prototype.j=function(a){return this.Jd.P(a)};Af.prototype.toString=function(){return this.Jd.toString()};function Bf(a){this.oc=a}Bf.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Cf(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Df(){this.S=tf;this.la=[];this.Bc=-1}function Ef(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Df.prototype;
g.Ed=function(a){var b=Ea(this.la,function(b){return b.Zc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Ff(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Gf(this.la,Hf,Q),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;v(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=yf(this.S,a);return!d&&e.e()?b:d||null!=b||null!=wf(e,Q)?(e=Gf(this.la,function(b){return(b.visible||d)&&(!c||!(0<=xa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=wf(this.S,a);if(null!=e)return e;e=yf(this.S,a);return e.e()?b:null!=b||null!=wf(e,Q)?(b=b||L,e.apply(b)):null};
g.rc=function(a,b){var c=L,d=wf(this.S,a);if(d)d.J()||d.O(H,function(a,b){c=c.T(a,b)});else if(b){var e=yf(this.S,a);b.O(H,function(a,b){var d=yf(e,new E(a)).apply(b);c=c.T(a,d)});ya(xf(e),function(a){c=c.T(a.name,a.R)})}else e=yf(this.S,a),ya(xf(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=wf(this.S,a))return null;a=yf(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=wf(this.S,a);return null!=d?d:ne(c,b)?yf(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return wf(this.S,a)};g.Xd=function(a,b,c,d,e,f){var h;a=yf(this.S,a);h=wf(a,Q);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=nc(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=M(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=M(e);return b};
function Ff(a,b){return a.Ga?a.path.contains(b):!!Qa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Hf(a){return a.visible}
function Gf(a,b,c){for(var d=tf,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=P(c,h),d=uf(d,h,f.Ga)):h.contains(c)&&(h=P(h,c),d=uf(d,Q,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=P(c,h),d=vf(d,h,f.children);else{if(h.contains(c))if(h=P(h,c),h.e())d=vf(d,Q,f.children);else if(f=w(f.children,K(h)))f=f.P(N(h)),d=uf(d,Q,f)}else throw Mb("WriteRecord should have .snap or .children");}}return d}function If(a,b){this.Lb=a;this.W=b}g=If.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Xd=function(a,b,c,d,e){return this.W.Xd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new If(this.Lb.n(a),this.W)};function Jf(a,b){this.rf={};this.Vc=new Kf(a);this.va=b;var c=1E4+2E4*Math.random();hc(q(this.lf,this),Math.floor(c))}Jf.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&eb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);hc(q(this.lf,this),Math.floor(6E5*Math.random()))};function Lf(){this.tc={}}function Mf(a,b,c){n(c)||(c=1);eb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Lf.prototype.get=function(){return Ta(this.tc)};function Kf(a){this.Ef=a;this.rd=null}Kf.prototype.get=function(){var a=this.Ef.get(),b=Ta(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var Nf={},Of={};function Pf(a){a=a.toString();Nf[a]||(Nf[a]=new Lf);return Nf[a]}function Qf(a,b){var c=a.toString();Of[c]||(Of[c]=b());return Of[c]};function Rf(a,b,c){this.f=Tb("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Sf(a,b){if(n(b))return"tag$"+b;D(qf(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Rf.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Sf(a,c),h={};this.$[f]=h;a=rf(a.m);var k=this;Tf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Sf(a,b);delete this.$[c]};g.kf=function(){};g.re=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.ye=function(){};
function Tf(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+gb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=lb(h.responseText)}catch(c){J("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&J("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Uf(a){this.te=a;this.Bd=[];this.Qb=0;this.Yd=-1;this.Fb=null}function Vf(a,b,c){a.Yd=b;a.Fb=c;a.Yd<a.Qb&&(a.Fb(),a.Fb=null)}function Wf(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;fc(function(){f.te(d[e])})}if(a.Qb===a.Yd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};var Cb="websocket",Db="long_polling";var Xf=null;"undefined"!==typeof MozWebSocket?Xf=MozWebSocket:"undefined"!==typeof WebSocket&&(Xf=WebSocket);function Yf(a,b,c,d){this.Zd=a;this.f=Tb(this.Zd);this.frames=this.zc=null;this.pb=this.qb=this.Fe=0;this.Va=Pf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ke=Bb(b,Cb,a)}var Zf;
Yf.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Ke);this.wc=!1;xb.set("previous_websocket_failure",!0);try{this.Ia=new Xf(this.Ke)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Mf(e.Va,"bytes_received",a.length),$f(e),null!==e.frames)ag(e,a);else{a:{D(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&ag(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};Yf.prototype.start=function(){};
Yf.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Xf&&!Zf};Yf.responsesRequiredToBeHealthy=2;Yf.healthyTimeout=3E4;g=Yf.prototype;g.sd=function(){xb.remove("previous_websocket_failure")};function ag(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=lb(c);a.Xf(c)}}
g.send=function(a){$f(this);a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=bc(a,16384);1<a.length&&bg(this,String(a.length));for(var b=0;b<a.length;b++)bg(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function $f(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&bg(a,"0");$f(a)},Math.floor(45E3))}function bg(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function cg(a,b,c,d){this.Zd=a;this.f=Tb(a);this.jc=b;this.pb=this.qb=0;this.Va=Pf(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Bb(b,Db,a)}}var dg,eg;
cg.prototype.open=function(a,b){this.Ne=0;this.ia=b;this.bf=new Uf(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Yb(function(){if(!c.Ab){c.Ta=new fg(function(a,b,d,k,m){gg(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,Vf(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){gg(c,arguments);
Wf(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);hg(c.Ta,a,function(){})}})};
cg.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;ig(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
cg.isAvailable=function(){return dg||!eg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=cg.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=bc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Ne,pg:a.length,Pe:a[b]});c.Ud&&ig(c);this.Ne++}};function gg(a,b){var c=x(b).length;a.pb+=c;Mf(a.Va,"bytes_received",c)}
function fg(a,b,c,d){this.Yc=d;this.ib=c;this.ve=new Gc;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Lb();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
fg.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function ig(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Pe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Pe;d++}else break;jg(a,b+c,a.$d);return!0}return!1}function jg(a,b,c){function d(){a.ve.remove(c);ig(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));hg(a,b,function(){clearTimeout(e);d()})}
function hg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function kg(a){lg(this,a)}var mg=[cg,Yf];function lg(a,b){var c=Yf&&Yf.isAvailable(),d=c&&!(xb.Ze||!0===xb.get("previous_websocket_failure"));b.qg&&(c||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Yf];else{var e=a.Wc=[];cc(mg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ng(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function og(a,b,c,d,e,f,h){this.id=a;this.f=Tb("c:"+this.id+":");this.te=c;this.Lc=d;this.ia=e;this.se=f;this.L=b;this.Ad=[];this.Le=0;this.sf=new kg(b);this.Ua=0;this.Cb=h;this.f("Connection created");pg(this)}
function pg(a){var b=ng(a.sf);a.I=new b("c:"+a.id+":"+a.Le++,a.L,void 0,a.Cb);a.xe=b.responsesRequiredToBeHealthy||0;var c=qg(a,a.I),d=rg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=hc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function rg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(xb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function qg(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=$b("t",c);c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ab(a.L,f);0==a.Ua&&(a.I.start(),sg(a,a.I,d),"5"!==e&&J("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&tg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];ug(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.se&&(a.se(c),a.se=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ab(a.L,c),1===a.Ua?a.close():(vg(a),pg(a))):"e"===d?Ub("Server Error: "+c):"o"===d?(a.f("got pong on primary."),wg(a),xg(a)):Ub("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=$b("t",c),c=$b("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?yg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,yg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}og.prototype.ua=function(a){zg(this,{t:"d",d:a})};function ug(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function yg(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,ug(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}og.prototype.wd=function(a){wg(this);this.te(a)};function wg(a){a.Bb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function tg(a,b){a.D=new b("c:"+a.id+":"+a.Le++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(qg(a,a.D),rg(a,a.D));hc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function sg(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Bb=!0):hc(function(){xg(a)},Math.floor(5E3))}
function xg(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),zg(a,{t:"c",d:{t:"p",d:{}}}))}function zg(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}og.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,vg(this),this.ia&&(this.ia(),this.ia=null))};function vg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Ag(a,b,c,d,e,f){this.id=Bg++;this.f=Tb("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.ue=d;this.L=a;this.ob=this.Fa=this.Cb=this.ze=null;this.$c=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Vd=f;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.me=null;Cg(this,0);Mc.Vb().gc("visible",this.Zf,this);-1===a.host.indexOf("fblocal")&&
Lc.Vb().gc("online",this.Yf,this)}var Bg=0,Dg=0;g=Ag.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(x(a));D(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};D(qf(a.m)||!T(a.m),"listen() called for non-default but complete query");D(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Eg(this,a)};
function Eg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=pf(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&eb(k,"w")){var l=w(k,"w");ea(l)&&0<=xa(l,"no_index")&&J("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Fg(a,d,e),b.G&&b.G(m,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Gg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||kc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Gg(a){if(a.ma&&a.ob){var b=a.ob,c=jc(b)?"auth":"gauth",d={cred:b};null===a.Vd?d.noauth=!0:"object"===typeof a.Vd&&(d.authvar=a.Vd);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ke=0:Hg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);D(qf(a.m)||!T(a.m),"unlisten() called for non-default but complete query");if(Fg(this,c,d)&&this.ma){var e=pf(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Ig(this,"o",a,b,c):this.Kc.push({we:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Ig(this,"om",a,b,c):this.Kc.push({we:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Ig(this,"oc",a,null,b):this.Kc.push({we:a,action:"oc",data:null,G:b})};function Ig(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Jg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Jg(this,"m",a,b,c,d)};function Jg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Kg(a,b):a.f("Buffering put: "+c)}
function Kg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+x(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?Lg(this,a.p,a.q):"ac"===b?Hg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Ub("Unrecognized action received from server: "+
x(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Mg(this);this.Re=!1;this.Jc(!0)};
function Cg(a,b){D(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;Ng(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Cg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Cg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};Og(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Cg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function Ng(a){if(Og(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Dg++,f=a.Cb,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Fa={close:m,ua:function(a){D(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.$c.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new og(e,a.L,b,c,d,function(b){J(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.ab=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];Sa(this.qd)&&(this.Sa=1E3,this.Fa||Cg(this,0))};
function Lg(a,b,c){c=c?Aa(c,function(a){return ac(a)}).join("$"):"default";(a=Fg(a,b,c))&&a.G&&a.G("permission_denied")}function Fg(a,b,c){b=(new E(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===La(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Hg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.ob=null;a.de=!0;a.Fa.close();if("invalid_token"===b||"permission_denied"===b)a.ke++,3<=a.ke&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in
a.oc.options?b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(b))}
function Mg(a){Gg(a);v(a.$,function(b){v(b,function(b){Eg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Kg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Ig(a,b.action,b.we,b.data,b.G)}function Og(a){var b;b=Lc.Vb().hc;return Sa(a.qd)&&b};function Pg(a){a instanceof Qg||Vb("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,Q);this.INTERNAL=new Rg(this)}var Sg={TIMESTAMP:{".sv":"timestamp"}};g=Pg.prototype;g.app=null;g.jf=function(a){Tg(this,"ref");y("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){Tg(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=Wb(a);Xd("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Vb("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function Tg(a,b){null===a.ta&&Vb("Cannot call "+b+" on a deleted database.")}g.Pf=function(){y("database.goOffline",0,0,arguments.length);Tg(this,"goOffline");this.ta.ab()};
g.Qf=function(){y("database.goOnline",0,0,arguments.length);Tg(this,"goOnline");this.ta.kc()};Object.defineProperty(Pg.prototype,"app",{get:function(){return this.ta.app}});function Rg(a){this.Ya=a}Rg.prototype.delete=function(){Tg(this.Ya,"delete");var a=Ug.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Vb("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Pg.prototype.ref=Pg.prototype.jf;Pg.prototype.refFromURL=Pg.prototype.gg;Pg.prototype.goOnline=Pg.prototype.Qf;Pg.prototype.goOffline=Pg.prototype.Pf;Rg.prototype["delete"]=Rg.prototype.delete;function V(a,b,c){this.A=a;this.V=b;this.g=c}V.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.be=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.be;V.prototype.toJSON=function(){y("Firebase.DataSnapshot.toJSON",0,1,arguments.length);return this.be()};V.prototype.toJSON=V.prototype.toJSON;
V.prototype.Lf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Lf;V.prototype.n=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Vd("Firebase.DataSnapshot.child",a);var b=new E(a),c=this.V.n(b);return new V(this.A.P(b),c,H)};V.prototype.child=V.prototype.n;
V.prototype.Da=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Vd("Firebase.DataSnapshot.hasChild",a);var b=new E(a);return!this.A.P(b).e()};V.prototype.hasChild=V.prototype.Da;V.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;
V.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new V(d,b.V.n(c),H))})};V.prototype.forEach=V.prototype.forEach;V.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;
V.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};gc(V.prototype,"key",V.prototype.getKey);V.prototype.Eb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};V.prototype.numChildren=V.prototype.Eb;V.prototype.wb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};gc(V.prototype,"ref",V.prototype.wb);function Vg(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Vg.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new We("value",this,new V(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.matches=function(a){return a instanceof Vg?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Wg(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Wg.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.createEvent=function(a,b){D(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new We(a.type,this,new V(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Wg){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=La(a.ga);if(b===La(this.ga)){if(1===b){var b=Ma(a.ga),c=Ma(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return Ka(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function Xg(){this.za={}}g=Xg.prototype;g.e=function(){return Sa(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof O?c.rc(d):L,k=!1);h=new Pe(a,new oe(new je(h,k,!1),new je(d,e,!1)));this.za[f]=h}h.Nb(b);return Ve(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=Yg(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],T(a.V.m)||e.push(a.V))})}else{var m=w(this.za,d);m&&(f=f.concat(m.kb(b,c)),m.e()&&(delete this.za[d],T(m.V.m)||e.push(m.V)))}h&&null==Yg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Zg(a){return za(Na(a.za),function(a){return!T(a.V.m)})}g.hb=function(a){var b=null;v(this.za,function(c){b=b||c.hb(a)});return b};
function $g(a,b){if(T(b.m))return Yg(a);var c=b.ja();return w(a.za,c)}function Yg(a){return Ra(a.za,function(a){return T(a.V.m)})||null};function ah(a){this.wa=R;this.jb=new Df;this.De={};this.ic={};this.Cc=a}function bh(a,b,c,d,e){var f=a.jb,h=e;D(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=uf(f.S,b,c));f.Bc=d;return e?ch(a,new ce(fe,b,c)):[]}function dh(a,b,c,d){var e=a.jb;D(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=vf(e.S,b,c);e.Bc=d;c=xd(c);return ch(a,new ae(fe,b,c))}
function eh(a,b,c){c=c||!1;var d=Ef(a.jb,b);if(a.jb.Ed(b)){var e=R;null!=d.Ga?e=e.set(Q,!0):fb(d.children,function(a,b){e=e.set(new E(a),b)});return ch(a,new de(d.path,e,c))}return[]}function fh(a,b,c){c=xd(c);return ch(a,new ae(ie,b,c))}function gh(a,b,c,d){d=hh(a,d);if(null!=d){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=new ce(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
function kh(a,b,c,d){if(d=hh(a,d)){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=xd(c);c=new ae(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
ah.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;Fd(this.wa,c,function(a,b){var f=P(a,c);d=d||b.hb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.hb(Q)):(f=new Xg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=L,Jd(this.wa.subtree(c),function(a,b){var c=b.hb(Q);c&&(d=d.T(a,c))}));var k=null!=$g(f,a);if(!k&&!T(a.m)){var m=lh(a);D(!(m in this.ic),"View does not exist, but we have a tag");var l=mh++;this.ic[m]=l;this.De["_"+l]=m}h=f.Nb(a,b,new If(c,this.jb),d,h);k||
e||(f=$g(f,a),h=h.concat(nh(this,a,f)));return h};
ah.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=$g(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Ea(e,function(a){return T(a.m)});var h=Dd(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=oh(d),k=0;k<d.length;++k){var m=d[k],l=m.V,m=ph(this,m);this.Cc.Ae(qh(l),rh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(qh(a),null);else{var u=this;ya(e,function(a){a.ja();
var b=u.ic[lh(a)];u.Cc.Od(qh(a),b)})}sh(this,e)}return f};ah.prototype.Aa=function(a,b){var c=this.jb,d=Dd(this.wa,a,function(b,c){var d=P(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function oh(a){return Bd(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));v(d,function(a){e=e.concat(a)});return e})}function sh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.m)){var d=lh(d),e=a.ic[d];delete a.ic[d];delete a.De["_"+e]}}}
function qh(a){return T(a.m)&&!qf(a.m)?a.wb():a}function nh(a,b,c){var d=b.path,e=rh(a,b);c=ph(a,c);b=a.Cc.Ae(qh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)D(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bd(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[Te(Yg(b))];var d=[];b&&(d=d.concat(Aa(Zg(b),function(a){return a.V})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(qh(c),rh(a,c));return b}
function ph(a,b){var c=b.V,d=rh(a,c);return{ld:function(){return(b.w()||L).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=hh(a,d)){var h=ih(b);b=h.path;h=h.Hb;f=P(b,f);f=new Zd(new he(!1,!0,h,!0),f);b=jh(a,b,f)}else b=[]}else b=ch(a,new Zd(ie,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function lh(a){return a.path.toString()+"$"+a.ja()}function ih(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new E(a.substr(0,b))}}function hh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function rh(a,b){var c=lh(b);return w(a.ic,c)}var mh=1;
function jh(a,b,c){var d=a.wa.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new If(b,a.jb),null)}function ch(a,b){return th(a,b,a.wa,null,new If(Q,a.jb))}function th(a,b,c,d,e){if(b.path.e())return uh(a,b,c,d,e);var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[],k=K(b.path),m=b.Mc(k);if((c=c.children.get(k))&&m)var l=d?d.Q(k):null,k=e.n(k),h=h.concat(th(a,m,c,l,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function uh(a,b,c,d,e){var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[];c.children.ha(function(c,f){var l=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(uh(a,z,f,l,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Qg(a,b,c){this.app=c;var d=new Bf(c);this.L=a;this.Va=Pf(a);this.Vc=null;this.ca=new Ye;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Rf(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride;if("undefined"!==da(b)&&null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{x(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Ag(this.L,q(this.Gb,this),q(this.Jc,this),q(this.ue,this),d,b)}var f=this;Cf(d,function(a){f.va.kf(a)});this.og=Qf(a,q(function(){return new Jf(this.Va,this.va)},this));this.mc=new Tc;this.ie=new Af;this.pd=new ah({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=ch(f.pd,new ce(ie,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});vh(this,"connected",!1);this.ia=new Gb;this.Ya=new Pg(this);this.fd=
0;this.je=null;this.K=new ah({Ae:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);cf(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Qg.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.pe};function wh(a){a=a.ie.j(new E(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function xh(a){a=a={timestamp:wh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new E(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=Ja(b,function(a){return G(a)}),a=kh(this.K,e,b,d)):(b=G(b),a=gh(this.K,e,b,d)):c?(d=Ja(b,function(a){return G(a)}),a=fh(this.K,e,d)):(d=G(b),a=ch(this.K,new ce(ie,e,d)));d=e;0<a.length&&(d=yh(this,e));cf(this.ca,d,a)};g.Jc=function(a){vh(this,"connected",a);!1===a&&zh(this)};g.ue=function(a){var b=this;cc(a,function(a,d){vh(b,d,a)})};
function vh(a,b,c){b=new E("/.info/"+b);c=G(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=ch(a.pd,new ce(ie,b,c));cf(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=xh(this);b=G(b,c);var e=Jb(b,e),f=this.vd++,e=bh(this.K,a,e,f,!0);Ze(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||J("set at "+a+" failed: "+b);e=eh(h.K,f,!e);cf(h.ca,a,e);Ah(d,b,c)});e=Bh(this,a);yh(this,e);cf(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=xh(this),f={};v(b,function(a,b){d=!1;var c=G(a);f[b]=Jb(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Ah(c,"ok");else{var h=this.vd++,k=dh(this.K,a,f,h);Ze(this.ca,k);var m=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||J("update at "+a+" failed: "+b);var e=eh(m.K,h,!e),f=a;0<e.length&&(f=yh(m,a));cf(m.ca,f,e);Ah(c,b,d)});v(b,function(b,c){var d=Bh(m,a.n(c));yh(m,d)});cf(this.ca,
a,[])}};function zh(a){a.f("onDisconnectEvents");var b=xh(a),c=[];Hb(Fb(a.ia,b),Q,function(b,e){c=c.concat(ch(a.K,new ce(ie,b,e)));var f=Bh(a,b);yh(a,f)});a.ia=new Gb;cf(a.ca,Q,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Yd(c.ia,a);Ah(b,d,e)})};function Ch(a,b,c,d){var e=G(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Ib(a.ia,b,e);Ah(d,c,h)})}
function Dh(a,b,c,d,e){var f=G(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Ib(a.ia,b,f);Ah(e,c,d)})}function Eh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Ah(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=G(c[m]);Ib(a.ia,b.n(m),l)}Ah(d,e,f)})}function Fh(a,b,c){c=".info"===K(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);af(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Kf(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ba(Oa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Mf(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");I(b,arguments)};
function Ah(a,b,c){a&&fc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Gh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:Lb(),He:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||L;c.cd=d;d=c.update(d.H());if(n(d)){Pd("transaction failed: Data returned ",d,c.path);c.status=1;e=Uc(a.mc,b);var k=e.Ca()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&eb(d,".priority")?(k=w(d,".priority"),D(Nd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||L).C().H();e=xh(a);d=G(d,k);e=Jb(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=bh(a.K,b,e,c.Ba,c.He);cf(a.ca,b,c);Hh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new V(c.cd,new U(a,c.path),H),c.G(null,!1,a))}function Hh(a,b){var c=b||a.mc;b||Ih(a,c);if(null!==c.Ca()){var d=Jh(a,c);D(0<d.length,"Sending zero length transaction queue");Ca(d,function(a){return 1===a.status})&&Kh(a,c.path(),d)}else c.kd()&&c.O(function(b){Hh(a,b)})}
function Kh(a,b,c){for(var d=Aa(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];D(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=P(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(eh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new V(h,k,H)))}c[f].Rd()}Ih(a,Uc(a.mc,b));Hh(a);cf(a.ca,b,e);for(f=0;f<d.length;f++)fc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(J("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;yh(a,b)}},e)}function yh(a,b){var c=Lh(a,b),d=c.path(),c=Jh(a,c);Mh(a,c,d);return d}
function Mh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=za(b,function(a){return 1===a.status}),f=Aa(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],m=P(c,k.path),l=!1,u;D(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(eh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)l=!0,u="maxretry",e=e.concat(eh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||L;k.cd=z;var F=b[h].update(z.H());n(F)?(Pd("transaction failed: Data returned ",F,
k.path),m=G(F),"object"===typeof F&&null!=F&&eb(F,".priority")||(m=m.fa(z.C())),z=k.Ba,F=xh(a),F=Jb(m,F),k.dd=m,k.ed=F,k.Ba=a.vd++,Fa(f,z),e=e.concat(bh(a.K,k.path,F,k.Ba,k.He)),e=e.concat(eh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(eh(a.K,k.Ba,!0)))}cf(a.ca,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new V(b[h].cd,k,H)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Ih(a,a.mc);for(h=0;h<d.length;h++)fc(d[h]);Hh(a)}}
function Lh(a,b){for(var c,d=a.mc;null!==(c=K(b))&&null===d.Ca();)d=Uc(d,c),b=N(b);return d}function Jh(a,b){var c=[];Nh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Nh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Nh(a,b,c)})}function Ih(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.O(function(b){Ih(a,b)})}
function Bh(a,b){var c=Lh(a,b).path(),d=Uc(a.mc,b);Yc(d,function(b){Oh(a,b)});Oh(a,d);Xc(d,function(b){Oh(a,b)});return c}
function Oh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(D(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(D(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(eh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;cf(a.ca,b.path(),e);for(h=0;h<d.length;h++)fc(d[h])}};function Ug(){this.lb={};this.wf=!1}Ug.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ug.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ug.prototype.ce=function(a){this.wf=a};ca(Ug);Ug.prototype.interrupt=Ug.prototype.ab;Ug.prototype.resume=Ug.prototype.kc;var W={};W.nc=Ag;W.DataConnection=W.nc;Ag.prototype.ng=function(a,b){this.ua("q",{p:a},b)};W.nc.prototype.simpleListen=W.nc.prototype.ng;Ag.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};W.nc.prototype.echo=W.nc.prototype.Hf;Ag.prototype.interrupt=Ag.prototype.ab;W.zf=og;W.RealTimeConnection=W.zf;og.prototype.sendRequest=og.prototype.ua;og.prototype.close=og.prototype.close;
W.Rf=function(a){var b=Ag.prototype.put;Ag.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ag.prototype.put=b}};W.hijackHash=W.Rf;W.yf=zb;W.ConnectionTarget=W.yf;W.ja=function(a){return a.ja()};W.queryIdentifier=W.ja;W.Uf=function(a){return a.u.Ra.$};W.listens=W.Uf;W.ce=function(a){Ug.Vb().ce(a)};W.forceRestClient=W.ce;W.Context=Ug;function Ph(a,b){this.committed=a;this.snapshot=b};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Qh(a){var b=null,c=null;a.ka&&(b=ff(a));a.na&&(c=hf(a));if(a.g===tc){if(a.ka){if("[MIN_NAME]"!=ef(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=gf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===H){if(null!=b&&!Nd(b)||null!=c&&!Nd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.g instanceof pc||a.g===wc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Rh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Sh(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Td("Query.on",a,!1);B("Query.on",2,b,!1);var e=Th("Query.on",c,d);if("value"===a)Fh(this.u,this,new Vg(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Fh(this.u,this,new Wg(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){y("Query.off",0,3,arguments.length);Td("Query.off",a,!0);B("Query.off",2,b,!0);ob("Query.off",3,c);var d=null,e=null;"value"===a?d=new Vg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Wg(e,null,c||null));e=this.u;d=".info"===K(this.path)?e.pd.kb(this,d):e.K.kb(this,d);af(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Td("Query.once",a,!1);B("Query.once",2,b,!0);var d=Th("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new ib;kb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ne(a),this.Nc)};
g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.oe(a),this.Nc)};
g.ag=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Vd("Query.orderByChild",a);Sh(this,"Query.orderByChild");var b=new E(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new pc(b);b=of(this.m,b);Qh(b);return new X(this.u,this.path,b,!0)};g.bg=function(){y("Query.orderByKey",0,0,arguments.length);Sh(this,"Query.orderByKey");var a=of(this.m,tc);Qh(a);return new X(this.u,this.path,a,!0)};g.cg=function(){y("Query.orderByPriority",0,0,arguments.length);Sh(this,"Query.orderByPriority");var a=of(this.m,H);Qh(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){y("Query.orderByValue",0,0,arguments.length);Sh(this,"Query.orderByValue");var a=of(this.m,wc);Qh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Od("Query.startAt",a,this.path,!0);Ud("Query.startAt",b);var c=this.m.Nd(a,b);Rh(c);Qh(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){y("Query.endAt",0,2,arguments.length);Od("Query.endAt",a,this.path,!0);Ud("Query.endAt",b);var c=this.m.gd(a,b);Rh(c);Qh(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){y("Query.equalTo",1,2,arguments.length);Od("Query.equalTo",a,this.path,!1);Ud("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.toJSON=function(){y("Query.toJSON",0,1,arguments.length);return this.toString()};g.ja=function(){var a=ac(pf(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Th(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,B(a,3,d.cancel,!0),d.Ma=c,ob(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(A(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;gc(X.prototype,"ref",X.prototype.wb);function Y(a,b){this.ta=a;this.qa=b}Y.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,!0);var b=new ib;this.ta.xd(this.qa,jb(b,a));return b.ra};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Wd("Firebase.onDisconnect().remove",this.qa);B("Firebase.onDisconnect().remove",1,a,!0);var b=new ib;Ch(this.ta,this.qa,null,jb(b,a));return b.ra};
Y.prototype.remove=Y.prototype.remove;Y.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Wd("Firebase.onDisconnect().set",this.qa);Od("Firebase.onDisconnect().set",a,this.qa,!1);B("Firebase.onDisconnect().set",2,b,!0);var c=new ib;Ch(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.set=Y.prototype.set;
Y.prototype.Jb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Wd("Firebase.onDisconnect().setWithPriority",this.qa);Od("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Sd("Firebase.onDisconnect().setWithPriority",2,b);B("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new ib;Dh(this.ta,this.qa,a,b,jb(d,c));return d.ra};Y.prototype.setWithPriority=Y.prototype.Jb;
Y.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Wd("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.onDisconnect().update",a,this.qa);B("Firebase.onDisconnect().update",2,b,!0);
c=new ib;Eh(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.update=Y.prototype.update;var Z={Mf:function(){dg=Zf=!0}};Z.forceLongPolling=Z.Mf;Z.Nf=function(){eg=!0};Z.forceWebSockets=Z.Nf;Z.Tf=function(){return Yf.isAvailable()};Z.isWebSocketsAvailable=Z.Tf;Z.lg=function(a,b){a.u.Ra.ze=b};Z.setSecurityDebugCallback=Z.lg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.fd=function(a){return a.u.fd};Z.dataUpdateCount=Z.fd;Z.Sf=function(a,b){a.u.je=b};Z.interceptServerData=Z.Sf;function U(a,b){if(!(a instanceof Qg))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,mf,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Oc(this.path)};
g.n=function(a){y("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof E))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Vd("Firebase.child",b)}else Vd("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Wd("Firebase.set",this.path);Od("Firebase.set",a,this.path,!1);B("Firebase.set",2,b,!0);var c=new ib;this.u.Jb(this.path,a,null,jb(c,b));return c.ra};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Wd("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.update",a,this.path);B("Firebase.update",2,b,!0);c=new ib;this.u.update(this.path,a,jb(c,b));return c.ra};
g.Jb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Wd("Firebase.setWithPriority",this.path);Od("Firebase.setWithPriority",a,this.path,!1);Sd("Firebase.setWithPriority",2,b);B("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new ib;this.u.Jb(this.path,a,b,jb(d,c));return d.ra};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Wd("Firebase.remove",this.path);B("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Wd("Firebase.transaction",this.path);B("Firebase.transaction",1,a,!1);B("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(A("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new ib;ha(b)&&kb(d.ra);Gh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new Ph(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Wd("Firebase.setPriority",this.path);Sd("Firebase.setPriority",1,a);B("Firebase.setPriority",2,b,!0);var c=new ib;this.u.Jb(this.path.n(".priority"),a,null,jb(c,b));return c.ra};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Wd("Firebase.push",this.path);Od("Firebase.push",a,this.path,!0);B("Firebase.push",2,b,!0);var c=wh(this.u),d=Kc(c),c=this.n(d),e=this.n(d),d=null!=a?c.set(a,b).then(function(){return e}):hb.resolve(e);c.then=q(d.then,d);c["catch"]=q(d.then,d,void 0);ha(b)&&kb(d);return c};g.ib=function(){Wd("Firebase.onDisconnect",this.path);return new Y(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;
U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;gc(U.prototype,"database",U.prototype.Gf);gc(U.prototype,"key",U.prototype.getKey);gc(U.prototype,"parent",U.prototype.getParent);gc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ug.Vb(),c=a.options.databaseURL;n(c)||Vb("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Wb(c),c=d.jc;Xd("Invalid Firebase Database URL",d);d.path.e()||Vb("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Vb("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Qg(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Pg,enableLogging:Sb,INTERNAL:Z,TEST_ACCESS:W,ServerValue:Sg})}catch(Uh){Vb("Failed to register the Firebase Database Service ("+Uh+")")};})();

}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.database;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(1);
(function(){
(function(){var f=function(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&
"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a,b){function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.v=function(a,c,n){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-
2]=arguments[e];return b.prototype[c].apply(a,d)}};var m=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};k(m,Error);var p=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var q=function(a,b){b.unshift(a);m.call(this,p.apply(null,b));b.shift()};k(q,m);var r=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new q(""+d,e||[]);}};var t=null;var v=function(a){a=new Uint8Array(a);var b=h(a);r("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!t)for(t={},b=0;65>b;b++)t[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=t,c=[],d=0;d<a.length;d+=3){var e=a[d],n=d+1<a.length,l=n?a[d+1]:0,z=d+2<a.length,u=z?a[d+2]:0,M=e>>2,e=(e&3)<<4|l>>4,l=(l&15)<<2|u>>6,u=u&63;z||(u=64,n||(l=64));c.push(b[M],b[e],b[l],b[u])}return c.join("").replace(/\+/g,"-").replace(/\//g,
"_").replace(/=+$/,"")};var w={},x=(w["only-available-in-window"]="This method is available in a Window context.",w["only-available-in-sw"]="This method is available in a service worker context.",w["should-be-overriden"]="This method should be overriden by extended classes.",w["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",w["permission-default"]="The required permissions were not granted and dismissed instead.",w["permission-blocked"]="The required permissions were not granted and blocked instead.",
w["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",w["notifications-blocked"]="Notifications have been blocked.",w["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",w["sw-registration-expected"]="A service worker registration was the expected input.",w["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",w["invalid-saved-token"]="Unable to access details of the saved token.",
w["sw-reg-redundant"]="The service worker being used for push was made redundant.",w["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",w["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",w["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",w["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",w["invalid-delete-token"]=
"You must pass a valid token into deleteToken(), i.e. the token from getToken().",w["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",w["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",w["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",w["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",
w["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",w["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",w["failed-to-delete-token"]="Unable to delete the currently saved token.",w["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",
w["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",w["bad-scope"]="The service worker scope must be a string with at least one character.",w["bad-vapid-key"]="The public VAPID key must be a string with at least one character.",w["bad-subscription"]="The subscription must be a valid PushSubscription.",w["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",w["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",
w["failed-delete-vapid-key"]="The VAPID key could not be deleted.",w);var y={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var A=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x),B=function(){this.a=null},C=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=g.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
return a.a},D=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},E=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},F=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=[],l=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
l.onerror=function(a){e(a.target.error)};l.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},G=function(a,b,c){var d=v(b.getKey("p256dh")),e=v(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw A.create("token-subscribe-failed",{message:a.error.message});if(!a.token)throw A.create("token-subscribe-no-token");if(!a.pushSet)throw A.create("token-subscribe-no-push-set");return{token:a.token,pushSet:a.pushSet}})},H=function(a,b,c,d,e,n){var l={swScope:c.scope,endpoint:d.endpoint,auth:v(d.getKey("auth")),p256dh:v(d.getKey("p256dh")),fcmToken:e,fcmPushSet:n,fcmSenderId:b};return C(a).then(function(a){return new Promise(function(b,
c){var d=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(l);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
B.prototype.i=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):F(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw A.create("get-subscription-failed");}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&v(b.getKey("auth"))===a.auth&&
v(b.getKey("p256dh"))===a.p256dh;if(c)return a.fcmToken})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.getSavedToken=B.prototype.i;
B.prototype.h=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(y)}).then(function(d){return G(a,d).then(function(e){return H(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.createToken=B.prototype.h;
B.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("invalid-delete-token")):E(this,a).then(function(a){if(!a)throw A.create("delete-token-not-found");return C(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(A.create("failed-to-delete-token")):
c(a)}})})})};var I=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create("bad-sender-id");this.l=a.options.messagingSenderId;this.c=new B;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
I.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create("notifications-blocked")):Promise.resolve(null):this.f().then(function(b){return a.c.i(a.l,b).then(function(c){return c?c:a.c.h(a.l,b)})})};I.prototype.getToken=I.prototype.getToken;I.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
I.prototype.deleteToken=I.prototype.deleteToken;I.prototype.f=function(){throw this.a.create("should-be-overriden");};I.prototype.requestPermission=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=I.prototype.useServiceWorker;I.prototype.onMessage=function(){throw this.a.create("only-available-in-window");};I.prototype.onMessage=I.prototype.onMessage;
I.prototype.onTokenRefresh=function(){throw this.a.create("only-available-in-window");};I.prototype.onTokenRefresh=I.prototype.onTokenRefresh;I.prototype.setBackgroundMessageHandler=function(){throw this.a.create("only-available-in-sw");};I.prototype.setBackgroundMessageHandler=I.prototype.setBackgroundMessageHandler;I.prototype.delete=function(){D(this.c)};var J=function(a,b){var c={};return c["firebase-messaging-msg-type"]=a,c["firebase-messaging-msg-data"]=b,c};var K=self,P=function(a){I.call(this,a);var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);K.addEventListener("push",function(a){return L(b,a)},!1);K.addEventListener("pushsubscriptionchange",function(a){return N(b,a)},!1);K.addEventListener("notificationclick",function(a){return O(b,a)},!1);this.b=null};f(P,I);
var L=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=Q().then(function(b){if(b){if(c.notification||a.b)return R(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return K.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},N=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create("no-fcm-token-for-resubscribe");var c=a.c;return E(c,b).then(function(b){if(!b)throw a.a.create("invalid-saved-token");
return K.registration.pushManager.subscribe(y).then(function(a){return G(b.A,a,b.w)}).catch(function(d){return c.deleteToken(b.B).then(function(){throw a.a.create("unable-to-resubscribe",{message:d});})})})});b.waitUntil(c)},O=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=S(d).then(function(a){return a?a:K.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
T(a,b,J("notification-clicked",c))});b.waitUntil(e)}}};P.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create("bg-handler-function-expected");this.b=a};P.prototype.setBackgroundMessageHandler=P.prototype.setBackgroundMessageHandler;
var S=function(a){var b=(new URL(a)).href;return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},T=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create("no-window-client-to-msg"));b.postMessage(c);d()})},Q=function(){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===
a.visibilityState})})},R=function(a,b){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=J("push-msg-received",b);return Promise.all(c.map(function(b){return T(a,b,d)}))})};P.prototype.f=function(){return Promise.resolve(K.registration)};var V=function(a){I.call(this,a);var b=this;this.j=null;this.m=firebase.INTERNAL.createSubscribe(function(a){b.j=a});this.s=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.s=a});U(this)};f(V,I);
V.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?W(this).then(function(){return I.prototype.getToken.call(a)}):Promise.reject(this.a.create("unsupported-browser"))};V.prototype.getToken=V.prototype.getToken;
var W=function(a){if(a.g)return a.g;var b=document.querySelector('link[rel="manifest"]');b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create("incorrect-gcm-sender-id");}):a.g=Promise.resolve();return a.g};
V.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create("permission-blocked")):c(a.a.create("permission-default"))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};V.prototype.requestPermission=V.prototype.requestPermission;
V.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create("sw-registration-expected");if("undefined"!==typeof this.b)throw this.a.create("use-sw-before-get-token");this.b=a};V.prototype.useServiceWorker=V.prototype.useServiceWorker;V.prototype.onMessage=function(a,b,c){return this.m(a,b,c)};V.prototype.onMessage=V.prototype.onMessage;V.prototype.onTokenRefresh=function(a,b,c){return this.o(a,b,c)};V.prototype.onTokenRefresh=V.prototype.onTokenRefresh;
var X=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else{var n=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else return;c.removeEventListener("statechange",n)};c.addEventListener("statechange",n)}else e(a.a.create("no-sw-in-reg"))})};
V.prototype.f=function(){var a=this;if(this.b)return X(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(b){throw a.a.create("failed-serviceworker-registration",{browserErrorMessage:b.message});}).then(function(b){return X(a,b).then(function(){a.b=b;b.update();return b})})};
var U=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data["firebase-messaging-msg-type"])switch(b=b.data,b["firebase-messaging-msg-type"]){case "push-msg-received":case "notification-clicked":a.j.next(b["firebase-messaging-msg-data"])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new P(a):new V(a)},{Messaging:V});new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.messaging;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! @license Firebase v3.9.0
Build: rev-cc77c9e
Terms: https://firebase.google.com/terms/ */

var firebase = __webpack_require__(1);
(function(){
(function(){for(var h,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,n=["Number","MIN_SAFE_INTEGER"],ba=0;ba<n.length-1;ba++){var ca=n[ba];ca in l||(l[ca]={});l=l[ca]}var da=n[n.length-1];-9007199254740991!=l[da]&&aa(l,da,{configurable:!0,writable:!0,value:-9007199254740991});
var p=this,q=function(a){return void 0!==a},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var r=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};(function(){var a=Error;function b(){}b.prototype=a.prototype;r.b=a.prototype;r.prototype=new b;r.a=function(b,d,e){for(var c=Array(arguments.length-2),f=2;f<arguments.length;f++)c[f-2]=arguments[f];return a.prototype[d].apply(b,c)}})();
var fa=function(){return new r("unknown","An unknown error occurred, please check the error payload for server response.")},ga=function(){return new r("canceled","User canceled the upload/download.")},ha=function(){return new r("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},ia=function(a,b,c){return new r("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},ja=function(){return new r("app-deleted","The Firebase app was deleted.")},t=function(a,b){return new r("invalid-format",
"String does not match format '"+a+"': "+b)},u=function(a){throw new r("internal-error","Internal error: "+a);};var v="https://firebasestorage.googleapis.com";var ka=function(a){if("undefined"!==typeof firebase)return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");};var la=function(a,b){return-1!==a.indexOf(b)};var ma=function(a,b,c){function d(){C||(C=!0,b.apply(null,arguments))}function e(b){m=setTimeout(function(){m=null;a(g,2===y)},b)}function g(a,b){if(!C)if(a)d.apply(null,arguments);else if(2===y||z)d.apply(null,arguments);else{64>k&&(k*=2);var c;1===y?(y=2,c=0):c=1E3*(k+Math.random());e(c)}}function f(a){Pa||(Pa=!0,C||(null!==m?(a||(y=2),clearTimeout(m),e(0)):a||(y=1)))}var k=1,m=null,z=!1,y=0,C=!1,Pa=!1;e(0);setTimeout(function(){z=!0;f(!0)},c);return f};var na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},oa=function(a){var b={};na(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.l=a;this.b={};this.method=b;this.headers={};this.body=null;this.m=c;this.c=this.a=null;this.f=[200];this.i=[];this.timeout=d;this.g=!0};var pa=function(a){var b=encodeURIComponent,c="?";na(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var ra=function(a,b,c,d,e,g,f,k,m,z,y){this.F=a;this.D=b;this.A=c;this.u=d;this.B=e.slice();this.s=g.slice();this.m=this.o=this.c=this.b=null;this.g=this.i=!1;this.v=f;this.l=k;this.f=z;this.G=y;this.C=m;var C=this;this.w=ka(function(a,b){C.o=a;C.m=b;qa(C)})},sa=function(a,b,c){this.b=a;this.c=b;this.a=!!c},qa=function(a){function b(a,b){function c(a){d.f(a.loaded,a.lengthComputable?a.total:-1)}b?a(!1,new sa(!1,null,!0)):(b=new ta,b.h.withCredentials=d.G,d.b=b,null!==d.f&&q(b.h.upload)&&b.h.upload.addEventListener("progress",
c),ua(b,d.F,d.D,d.u,d.A).then(function(b){null!==d.f&&q(b.h.upload)&&b.h.upload.removeEventListener("progress",c);d.b=null;var e=0===va(b),f=x(b);if(!(e=!e))var e=la([408,429],f),g=la(d.s,f),e=500<=f&&600>f||e||g;e?(b=2===va(b),a(!1,new sa(!1,null,b))):a(!0,new sa(la(d.B,f),b))}))}function c(a,b){var c=d.o;a=d.m;var e=b.c;if(b.b)try{var g=d.v(e,wa(e));q(g)?c(g):c()}catch(z){a(z)}else null!==e?(b=fa(),g=wa(e),b.serverResponse=g,d.l?a(d.l(e,b)):a(b)):(b=b.a?d.g?ja():ga():new r("retry-limit-exceeded",
"Max retry time for operation exceeded, please try again."),a(b))}var d=a;a.i?c(0,new sa(!1,null,!0)):a.c=ma(b,c,a.C)};ra.prototype.a=function(){return this.w};ra.prototype.cancel=function(a){this.i=!0;this.g=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};
var xa=function(a,b,c){var d=pa(a.b),d=a.l+d,e=a.headers?oa(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new ra(d,a.method,e,a.body,a.f,a.i,a.m,a.a,a.timeout,a.c,c)};var ya=function(a){this.b=firebase.Promise.reject(a)};ya.prototype.a=function(){return this.b};ya.prototype.cancel=function(){};var A=function(a,b){this.bucket=a;this.path=b},za=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Ba=function(a){var b;try{b=Aa(a)}catch(c){return new A(a,"")}if(""===b.path)return b;throw new r("invalid-default-bucket","Invalid default bucket '"+a+"'.");},Aa=function(a){for(var b=null,c=[{M:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,H:{bucket:1,path:3},L:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{M:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
H:{bucket:1,path:3},L:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=c[d],g=e.M.exec(a);if(g){b=g[e.H.bucket];(g=g[e.H.path])||(g="");b=new A(b,g);e.L(b);break}}if(null==b)throw new r("invalid-url","Invalid URL '"+a+"'.");return b};var Ca=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Da=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},Ea=function(a){na(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var B=function(a){return q(a)&&null!==a},Fa=function(a){return"string"===typeof a||a instanceof String},Ga=function(){return"undefined"!==typeof Blob};var Ha=function(a,b,c,d,e){this.a=a;this.g=null;null!==this.a&&(a=this.a.options,B(a)&&(a=a.storageBucket||null,this.g=null==a?null:Ba(a).bucket));this.s=b;this.o=c;this.l=e;this.m=d;this.c=12E4;this.b=6E4;this.i=new Ca;this.f=!1},Ia=function(a){return null!==a.a&&B(a.a.INTERNAL)&&B(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return B(a)?a.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};Ha.prototype.bucket=function(){if(this.f)throw ja();return this.g};
var D=function(a,b,c){if(a.f)return new ya(ja());b=a.o(b,c,null===a.a,a.l);Da(a.i,b);return b};var Ja=function(a,b){b=b.split("/").filter(function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Ka=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var La=function(a,b){return b},E=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||La},Ma=null,Na=function(){if(Ma)return Ma;var a=[];a.push(new E("bucket"));a.push(new E("generation"));a.push(new E("metageneration"));a.push(new E("name","fullPath",!0));var b=new E("name");b.a=function(a,b){return!Fa(b)||2>b.length?b:Ka(b)};a.push(b);b=new E("size");b.a=function(a,b){return B(b)?+b:b};a.push(b);a.push(new E("timeCreated"));a.push(new E("updated"));a.push(new E("md5Hash",null,!0));
a.push(new E("cacheControl",null,!0));a.push(new E("contentDisposition",null,!0));a.push(new E("contentEncoding",null,!0));a.push(new E("contentLanguage",null,!0));a.push(new E("contentType",null,!0));a.push(new E("metadata","customMetadata",!0));a.push(new E("downloadTokens","downloadURLs",!1,function(a,b){if(!(Fa(b)&&0<b.length))return[];var c=encodeURIComponent;return b.split(",").map(function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=pa({alt:"media",
token:b});return d+b})}));return Ma=a},Oa=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.s(b,new A(a.bucket,a.fullPath))}})},Qa=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var g=b[e];g.writable&&(c[g.c]=a[g.b])}return JSON.stringify(c)},Ra=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b){if("object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}else if(null!=c&&"object"===typeof c)throw"Mapping for '"+
b+"' cannot be an object.";}};var F=function(a,b,c){for(var d=b.length,e=b.length,g=0;g<b.length;g++)if(b[g].b){d=g;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new r("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(g=0;g<c.length;g++)try{b[g].a(c[g])}catch(f){if(f instanceof Error)throw ia(g,a,f.message);throw ia(g,a,f);}},G=function(a,b){var c=this;this.a=function(b){c.b&&!q(b)||a(b)};
this.b=!!b},Sa=function(a,b){return function(c){a(c);b(c)}},H=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=Sa(c,a):d=c;return new G(d,b)},Ta=function(){return new G(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||Ga()&&a instanceof Blob))throw"Expected Blob or File.";})},Ua=function(){return new G(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},Va=function(a,
b){return new G(function(b){if(!(null===b||B(b)&&b instanceof Object))throw"Expected an Object.";B(a)&&a(b)},b)},I=function(){return new G(function(a){if(null!==a&&"function"!=ea(a))throw"Expected a Function.";},!0)};var J=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);firebase.Promise.resolve(!0).then(function(){a.apply(null,b)})}};var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Xa=function(a,b){return a<b?-1:a>b?1:0};var K;a:{var Ya=p.navigator;if(Ya){var Za=Ya.userAgent;if(Za){K=Za;break a}}K=""};var ab=function(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var bb=-1!=K.indexOf("Opera"),cb=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),db=-1!=K.indexOf("Edge"),eb=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),fb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"),gb;
a:{var hb="",ib=function(){var a=K;if(eb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(cb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ib&&(hb=ib?ib[1]:"");if(cb){var jb,kb=p.document;jb=kb?kb.documentMode:void 0;if(null!=jb&&jb>parseFloat(hb)){gb=String(jb);break a}}gb=hb}
var lb=gb,$a={},mb=function(a){return ab(a,function(){for(var b=0,c=Wa(String(lb)).split("."),d=Wa(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",k=d[g]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==f[0].length&&0==k[0].length)break;b=Xa(0==f[1].length?0:parseInt(f[1],10),0==k[1].length?0:parseInt(k[1],10))||Xa(0==f[2].length,0==k[2].length)||Xa(f[2],k[2]);f=f[3];k=k[3]}while(0==b)}return 0<=b})};var nb=function(a){var b=p.BlobBuilder||p.WebKitBlobBuilder;if(q(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=Array.prototype.slice.call(arguments);c=p.BlobBuilder||p.WebKitBlobBuilder;if(q(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(q(p.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},ob=function(a,b,c){q(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,
c):a.mozSlice?a.mozSlice(b,c):a.slice?eb&&!mb("13.0")||fb&&!mb("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},pb=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},qb=function(a,b){this.data=a;this.a=b||null},ub=function(a,b){switch(a){case "raw":return new qb(rb(b));case "base64":case "base64url":return new qb(sb(a,b));case "data_url":a=new tb(b);var c;if(a.a)c=sb("base64",a.c);else{try{c=decodeURIComponent(a.c)}catch(d){throw t("data_url",
"Malformed data URL.");}c=rb(c)}return new qb(c,(new tb(b)).b)}throw fa();},rb=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},
sb=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d)throw t(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw t(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(g){throw t(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);
return a},tb=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===b)throw t("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var M=function(a,b){Ga()&&a instanceof Blob?(this.j=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.j=new Uint8Array(a):(this.j=new Uint8Array(a.byteLength),this.j.set(new Uint8Array(a))),b=this.j.length):(b?this.j=a:(this.j=new Uint8Array(a.length),this.j.set(a)),b=a.length),a="");this.a=b;this.b=a};M.prototype.type=function(){return this.b};
M.prototype.slice=function(a,b){if(Ga()&&this.j instanceof Blob)return a=ob(this.j,a,b),null===a?null:new M(a);a=new Uint8Array(this.j.buffer,a,b-a);return new M(a,!0)};
var vb=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(Ga())return b=b.map(function(a){return a instanceof M?a.j:a}),new M(nb.apply(null,b));var b=b.map(function(a){return Fa(a)?ub("raw",a).data:a.j}),c=0;b.forEach(function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;b.forEach(function(a){for(var b=0;b<a.length;b++)d[e++]=a[b]});return new M(d,!0)};var wb=function(a,b,c){"function"==ea(a)||B(b)||B(c)?(this.b=a,this.error=b||null,this.a=c||null):(this.b=a.next||null,this.error=a.error||null,this.a=a.complete||null)};var N=function(a){if(!a)throw fa();},xb=function(a,b){return function(c,d){var e;a:{try{e=JSON.parse(d)}catch(k){e=null;break a}c=typeof e;e="object"==c&&null!=e||"function"==c?e:null}if(null===e)e=null;else{c={type:"file"};d=b.length;for(var g=0;g<d;g++){var f=b[g];c[f.b]=f.a(c,e[f.c])}Oa(c,a);e=c}N(null!==e);return e}},O=function(a){return function(b,c){b=401===x(b)?new r("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===x(b)?
new r("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===x(b)?new r("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},yb=function(a){var b=O(a);return function(c,d){var e=b(c,d);404===x(c)&&(e=new r("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},zb=function(a,b,c){var d=za(b);a=new w(v+"/v0"+d,"GET",
xb(a,c),a.c);a.a=yb(b);return a},Ab=function(a,b){var c=za(b);a=new w(v+"/v0"+c,"DELETE",function(){},a.c);a.f=[200,204];a.a=yb(b);return a},Bb=function(a,b,c){c=c?oa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},Cb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f={"X-Goog-Upload-Protocol":"multipart"},k;k="";for(var m=0;2>m;m++)k+=Math.random().toString().slice(2);f["Content-Type"]="multipart/related; boundary="+
k;e=Bb(b,d,e);m=Qa(e,c);d=vb("--"+k+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+m+"\r\n--"+k+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+k+"--");if(null===d)throw ha();a=new w(v+"/v0"+g,"POST",xb(a,c),a.b);a.b={name:e.fullPath};a.headers=f;a.body=d.j;a.a=O(b);return a},Db=function(a,b,c,d){this.current=a;this.total=b;this.I=!!c;this.metadata=d||null},Eb=function(a,b){var c;try{c=a.h.getResponseHeader("X-Goog-Upload-Status")}catch(d){N(!1)}N(la(b||["active"],c));return c},
Fb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f=Bb(b,d,e);e={name:f.fullPath};g=v+"/v0"+g;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":f.contentType,"Content-Type":"application/json; charset=utf-8"};c=Qa(f,c);a=new w(g,"POST",function(a){Eb(a);var b;try{b=a.h.getResponseHeader("X-Goog-Upload-URL")}catch(z){N(!1)}N(Fa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=O(b);
return a},Gb=function(a,b,c,d){a=new w(c,"POST",function(a){var b=Eb(a,["active","final"]),c;try{c=a.h.getResponseHeader("X-Goog-Upload-Size-Received")}catch(k){N(!1)}a=c;isFinite(a)&&(a=String(a));a="string"==typeof a?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;N(!isNaN(a));return new Db(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=O(b);a.g=!1;return a},Hb=function(a,b,c,d,e,g,f,k){var m=new Db(0,0);f?(m.current=f.current,m.total=f.total):(m.current=0,m.total=
d.a);if(d.a!==m.total)throw new r("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var z=f=m.total-m.current;0<e&&(z=Math.min(z,e));var y=m.current;e={"X-Goog-Upload-Command":z===f?"upload, finalize":"upload","X-Goog-Upload-Offset":m.current};f=d.slice(y,y+z);if(null===f)throw ha();c=new w(c,"POST",function(a,c){var e=Eb(a,["active","final"]),f=m.current+z,k=d.a,y;"final"===e?y=xb(b,g)(a,c):y=null;return new Db(f,k,"final"===e,y)},b.b);c.headers=e;c.body=
f.j;c.c=k||null;c.a=O(a);c.g=!1;return c};var Ib={STATE_CHANGED:"state_changed"},P={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},Jb=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var ta=function(){var a=this;this.h=new XMLHttpRequest;this.b=0;this.c=ka(function(b){a.h.addEventListener("abort",function(){a.b=2;b(a)});a.h.addEventListener("error",function(){a.b=1;b(a)});a.h.addEventListener("load",function(){b(a)})});this.a=!1},ua=function(a,b,c,d,e){if(a.a)throw u("cannot .send() more than once");a.a=!0;a.h.open(c,b,!0);B(e)&&na(e,function(b,c){a.h.setRequestHeader(b,c.toString())});B(d)?a.h.send(d):a.h.send();return a.c},va=function(a){if(!a.a)throw u("cannot .getErrorCode() before sending");
return a.b},x=function(a){if(!a.a)throw u("cannot .getStatus() before sending");try{return a.h.status}catch(b){return-1}},wa=function(a){if(!a.a)throw u("cannot .getResponseText() before sending");return a.h.responseText};ta.prototype.abort=function(){this.h.abort()};var Kb=function(){};var Q=function(a,b,c,d,e,g){this.b=a;this.i=b;this.f=c;this.a=d;this.g=e;this.c=g};h=Q.prototype;h.X=function(){return this.b};h.sa=function(){return this.i};h.pa=function(){return this.f};h.ka=function(){return this.a};h.Y=function(){if(B(this.a)){var a=this.a.downloadURLs;return B(a)&&B(a[0])?a[0]:null}return null};h.ra=function(){return this.g};h.na=function(){return this.c};var T=function(a,b,c,d,e,g){var f=this;this.O=a;this.c=b;this.o=c;this.f=e;this.i=void 0===g?null:g;this.u=d;this.l=0;this.G=this.w=!1;this.B=[];this.U=262144<this.f.a;this.b="running";this.a=this.A=this.g=null;this.m=1;this.s=function(a){f.a=null;f.m=1;"storage/canceled"===a.code?(f.w=!0,R(f)):(f.g=a,S(f,"error"))};this.N=function(a){f.a=null;"storage/canceled"===a.code?R(f):(f.g=a,S(f,"error"))};this.D=this.v=null;this.F=ka(function(a,b){f.v=a;f.D=b;Lb(f)});this.F.then(null,function(){})},Nb=function(a){var b=
a.l;return function(c){Mb(a,b+c)}},Lb=function(a){"running"===a.b&&null===a.a&&(a.U?null===a.A?Ob(a):a.w?Pb(a):a.G?Qb(a):Rb(a):Sb(a))},U=function(a,b){Ia(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":S(a,"canceled");break;case "pausing":S(a,"paused")}})},Ob=function(a){U(a,function(b){var c=Fb(a.c,a.o,a.u,a.f,a.i);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.A=b;a.w=!1;R(a)},a.s)})},Pb=function(a){var b=a.A;U(a,function(c){var d=Gb(a.c,a.o,b,a.f);a.a=D(a.c,d,c);
a.a.a().then(function(b){a.a=null;Mb(a,b.current);a.w=!1;b.I&&(a.G=!0);R(a)},a.s)})},Rb=function(a){var b=262144*a.m,c=new Db(a.l,a.f.a),d=a.A;U(a,function(e){var g;try{g=Hb(a.o,a.c,d,a.f,b,a.u,c,Nb(a))}catch(f){a.g=f;S(a,"error");return}a.a=D(a.c,g,e);a.a.a().then(function(b){33554432>262144*a.m&&(a.m*=2);a.a=null;Mb(a,b.current);b.I?(a.i=b.metadata,S(a,"success")):R(a)},a.s)})},Qb=function(a){U(a,function(b){var c=zb(a.c,a.o,a.u);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.i=b;S(a,"success")},
a.N)})},Sb=function(a){U(a,function(b){var c=Cb(a.c,a.o,a.u,a.f,a.i);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.i=b;Mb(a,a.f.a);S(a,"success")},a.s)})},Mb=function(a,b){var c=a.l;a.l=b;a.l!==c&&V(a)},S=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(V(a),Lb(a));break;case "paused":a.b=b;V(a);break;case "canceled":a.g=ga();a.b=b;V(a);break;case "error":a.b=
b;V(a);break;case "success":a.b=b,V(a)}},R=function(a){switch(a.b){case "pausing":S(a,"paused");break;case "canceling":S(a,"canceled");break;case "running":Lb(a)}};T.prototype.C=function(){return new Q(this.l,this.f.a,Jb(this.b),this.i,this,this.O)};
T.prototype.P=function(a,b,c,d){function e(a){try{f(a);return}catch(C){}try{if(k(a),!(q(a.next)||q(a.error)||q(a.complete)))throw"";}catch(C){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function g(a){return function(b,c,d){null!==a&&F("on",a,arguments);var e=new wb(b,c,d);m.B.push(e);Tb(m,e);return function(){var a=m.B,b=a.indexOf(e);-1!==b&&a.splice(b,1)}}}var f=I().a,k=Va(null,!0).a;F("on",[H(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";
}),Va(e,!0),I(),I()],arguments);var m=this,z=[Va(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),I(),I()];return q(b)||q(c)||q(d)?g(null)(b,c,d):g(z)};T.prototype.then=function(a,b){return this.F.then(void 0===a?null:a,void 0===b?null:b)};T.prototype["catch"]=function(a){return this.then(null,a)};
var V=function(a){Ub(a);Array.prototype.slice.call(a.B).forEach(function(b){Tb(a,b)})},Ub=function(a){if(null!==a.v){var b=!0;switch(Jb(a.b)){case "success":J(a.v.bind(null,a.C()))();break;case "canceled":case "error":J(a.D.bind(null,a.g))();break;default:b=!1}b&&(a.v=null,a.D=null)}},Tb=function(a,b){switch(Jb(a.b)){case "running":case "paused":null!==b.b&&J(b.b.bind(b,a.C()))();break;case "success":null!==b.a&&J(b.a.bind(b))();break;case "canceled":case "error":null!==b.error&&J(b.error.bind(b,
a.g))();break;default:null!==b.error&&J(b.error.bind(b,a.g))()}};T.prototype.T=function(){F("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&S(this,"running");return a};T.prototype.R=function(){F("pause",[],arguments);var a="running"===this.b;a&&S(this,"pausing");return a};T.prototype.cancel=function(){F("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&S(this,"canceling");return a};var W=function(a,b){this.a=a;this.location=b instanceof A?b:Aa(b)};W.prototype.toString=function(){F("toString",[],arguments);return"gs://"+this.location.bucket+"/"+this.location.path};var Vb=function(a,b){return new W(a,b)};h=W.prototype;h.J=function(a){F("child",[H()],arguments);var b=Ja(this.location.path,a);return Vb(this.a,new A(this.location.bucket,b))};
h.ma=function(){var a;a=this.location.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Vb(this.a,new A(this.location.bucket,a))};h.oa=function(){return Vb(this.a,new A(this.location.bucket,""))};h.W=function(){return this.location.bucket};h.ha=function(){return this.location.path};h.la=function(){return Ka(this.location.path)};h.qa=function(){return this.a.m};
h.aa=function(a,b){F("put",[Ta(),new G(Ra,!0)],arguments);X(this,"put");return new T(this,this.a,this.location,Na(),new M(a),b)};h.ba=function(a,b,c){F("putString",[H(),H(pb,!0),new G(Ra,!0)],arguments);X(this,"putString");var d=ub(B(b)?b:"raw",a),e=c?oa(c):{};!B(e.contentType)&&B(d.a)&&(e.contentType=d.a);return new T(this,this.a,this.location,Na(),new M(d.data,!0),e)};
h.Z=function(){F("delete",[],arguments);X(this,"delete");var a=this;return Ia(this.a).then(function(b){var c=Ab(a.a,a.location);return D(a.a,c,b).a()})};h.K=function(){F("getMetadata",[],arguments);X(this,"getMetadata");var a=this;return Ia(this.a).then(function(b){var c=zb(a.a,a.location,Na());return D(a.a,c,b).a()})};
h.ca=function(a){F("updateMetadata",[new G(Ra,void 0)],arguments);X(this,"updateMetadata");var b=this;return Ia(this.a).then(function(c){var d=b.a,e=b.location,g=a,f=Na(),k=za(e),k=v+"/v0"+k,g=Qa(g,f),d=new w(k,"PATCH",xb(d,f),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=g;d.a=yb(e);return D(b.a,d,c).a()})};
h.$=function(){F("getDownloadURL",[],arguments);X(this,"getDownloadURL");return this.K().then(function(a){a=a.downloadURLs[0];if(B(a))return a;throw new r("no-download-url","The given file does not have any download URLs.");})};var X=function(a,b){if(""===a.location.path)throw new r("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a,b,c){this.a=new Ha(a,function(a,b){return new W(a,b)},xa,this,b);this.c=a;q(c)?this.b=Ba(c):null!=this.a.bucket()&&(this.b=new A(this.a.bucket(),""));this.f=new Wb(this)};h=Y.prototype;h.da=function(a){F("ref",[H(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);if(null===this.b)throw Error("No Storage Bucket defined in Firebase Options.");var b=new W(this.a,this.b);return q(a)?b.J(a):b};
h.ea=function(a){F("refFromURL",[H(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Aa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new W(this.a,a)};h.ja=function(){return this.a.b};h.ga=function(a){F("setMaxUploadRetryTime",[Ua()],arguments);this.a.b=a};h.ia=function(){return this.a.c};h.fa=function(a){F("setMaxOperationRetryTime",[Ua()],arguments);this.a.c=a};h.V=function(){return this.c};
h.S=function(){return this.f};var Wb=function(a){this.a=a};Wb.prototype.b=function(){var a=this.a.a;a.f=!0;a.a=null;Ea(a.i)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};W.prototype.toString=W.prototype.toString;W.prototype.child=W.prototype.J;W.prototype.put=W.prototype.aa;W.prototype.putString=W.prototype.ba;W.prototype["delete"]=W.prototype.Z;W.prototype.getMetadata=W.prototype.K;W.prototype.updateMetadata=W.prototype.ca;W.prototype.getDownloadURL=W.prototype.$;Z(W.prototype,"parent",W.prototype.ma);Z(W.prototype,"root",W.prototype.oa);Z(W.prototype,"bucket",W.prototype.W);Z(W.prototype,"fullPath",W.prototype.ha);
Z(W.prototype,"name",W.prototype.la);Z(W.prototype,"storage",W.prototype.qa);Y.prototype.ref=Y.prototype.da;Y.prototype.refFromURL=Y.prototype.ea;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.ia);Y.prototype.setMaxOperationRetryTime=Y.prototype.fa;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.ja);Y.prototype.setMaxUploadRetryTime=Y.prototype.ga;Z(Y.prototype,"app",Y.prototype.V);Z(Y.prototype,"INTERNAL",Y.prototype.S);Wb.prototype["delete"]=Wb.prototype.b;Y.prototype.capi_=function(a){v=a};
T.prototype.on=T.prototype.P;T.prototype.resume=T.prototype.T;T.prototype.pause=T.prototype.R;T.prototype.cancel=T.prototype.cancel;T.prototype.then=T.prototype.then;T.prototype["catch"]=T.prototype["catch"];Z(T.prototype,"snapshot",T.prototype.C);Z(Q.prototype,"bytesTransferred",Q.prototype.X);Z(Q.prototype,"totalBytes",Q.prototype.sa);Z(Q.prototype,"state",Q.prototype.pa);Z(Q.prototype,"metadata",Q.prototype.ka);Z(Q.prototype,"downloadURL",Q.prototype.Y);Z(Q.prototype,"task",Q.prototype.ra);
Z(Q.prototype,"ref",Q.prototype.na);Ib.STATE_CHANGED="state_changed";P.RUNNING="running";P.PAUSED="paused";P.SUCCESS="success";P.CANCELED="canceled";P.ERROR="error";L.RAW="raw";L.BASE64="base64";L.BASE64URL="base64url";L.DATA_URL="data_url";
(function(){function a(a,b,e){return new Y(a,new Kb,e)}var b={TaskState:P,TaskEvent:Ib,StringFormat:L,Storage:Y,Reference:W};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b,void 0,!0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();}).call(this);
}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
module.exports = firebase.storage;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [
	"ac",
	"com.ac",
	"edu.ac",
	"gov.ac",
	"net.ac",
	"mil.ac",
	"org.ac",
	"ad",
	"nom.ad",
	"ae",
	"co.ae",
	"net.ae",
	"org.ae",
	"sch.ae",
	"ac.ae",
	"gov.ae",
	"mil.ae",
	"aero",
	"accident-investigation.aero",
	"accident-prevention.aero",
	"aerobatic.aero",
	"aeroclub.aero",
	"aerodrome.aero",
	"agents.aero",
	"aircraft.aero",
	"airline.aero",
	"airport.aero",
	"air-surveillance.aero",
	"airtraffic.aero",
	"air-traffic-control.aero",
	"ambulance.aero",
	"amusement.aero",
	"association.aero",
	"author.aero",
	"ballooning.aero",
	"broker.aero",
	"caa.aero",
	"cargo.aero",
	"catering.aero",
	"certification.aero",
	"championship.aero",
	"charter.aero",
	"civilaviation.aero",
	"club.aero",
	"conference.aero",
	"consultant.aero",
	"consulting.aero",
	"control.aero",
	"council.aero",
	"crew.aero",
	"design.aero",
	"dgca.aero",
	"educator.aero",
	"emergency.aero",
	"engine.aero",
	"engineer.aero",
	"entertainment.aero",
	"equipment.aero",
	"exchange.aero",
	"express.aero",
	"federation.aero",
	"flight.aero",
	"freight.aero",
	"fuel.aero",
	"gliding.aero",
	"government.aero",
	"groundhandling.aero",
	"group.aero",
	"hanggliding.aero",
	"homebuilt.aero",
	"insurance.aero",
	"journal.aero",
	"journalist.aero",
	"leasing.aero",
	"logistics.aero",
	"magazine.aero",
	"maintenance.aero",
	"media.aero",
	"microlight.aero",
	"modelling.aero",
	"navigation.aero",
	"parachuting.aero",
	"paragliding.aero",
	"passenger-association.aero",
	"pilot.aero",
	"press.aero",
	"production.aero",
	"recreation.aero",
	"repbody.aero",
	"res.aero",
	"research.aero",
	"rotorcraft.aero",
	"safety.aero",
	"scientist.aero",
	"services.aero",
	"show.aero",
	"skydiving.aero",
	"software.aero",
	"student.aero",
	"trader.aero",
	"trading.aero",
	"trainer.aero",
	"union.aero",
	"workinggroup.aero",
	"works.aero",
	"af",
	"gov.af",
	"com.af",
	"org.af",
	"net.af",
	"edu.af",
	"ag",
	"com.ag",
	"org.ag",
	"net.ag",
	"co.ag",
	"nom.ag",
	"ai",
	"off.ai",
	"com.ai",
	"net.ai",
	"org.ai",
	"al",
	"com.al",
	"edu.al",
	"gov.al",
	"mil.al",
	"net.al",
	"org.al",
	"am",
	"ao",
	"ed.ao",
	"gv.ao",
	"og.ao",
	"co.ao",
	"pb.ao",
	"it.ao",
	"aq",
	"ar",
	"com.ar",
	"edu.ar",
	"gob.ar",
	"gov.ar",
	"int.ar",
	"mil.ar",
	"net.ar",
	"org.ar",
	"tur.ar",
	"arpa",
	"e164.arpa",
	"in-addr.arpa",
	"ip6.arpa",
	"iris.arpa",
	"uri.arpa",
	"urn.arpa",
	"as",
	"gov.as",
	"asia",
	"at",
	"ac.at",
	"co.at",
	"gv.at",
	"or.at",
	"au",
	"com.au",
	"net.au",
	"org.au",
	"edu.au",
	"gov.au",
	"asn.au",
	"id.au",
	"info.au",
	"conf.au",
	"oz.au",
	"act.au",
	"nsw.au",
	"nt.au",
	"qld.au",
	"sa.au",
	"tas.au",
	"vic.au",
	"wa.au",
	"act.edu.au",
	"nsw.edu.au",
	"nt.edu.au",
	"qld.edu.au",
	"sa.edu.au",
	"tas.edu.au",
	"vic.edu.au",
	"wa.edu.au",
	"qld.gov.au",
	"sa.gov.au",
	"tas.gov.au",
	"vic.gov.au",
	"wa.gov.au",
	"aw",
	"com.aw",
	"ax",
	"az",
	"com.az",
	"net.az",
	"int.az",
	"gov.az",
	"org.az",
	"edu.az",
	"info.az",
	"pp.az",
	"mil.az",
	"name.az",
	"pro.az",
	"biz.az",
	"ba",
	"com.ba",
	"edu.ba",
	"gov.ba",
	"mil.ba",
	"net.ba",
	"org.ba",
	"bb",
	"biz.bb",
	"co.bb",
	"com.bb",
	"edu.bb",
	"gov.bb",
	"info.bb",
	"net.bb",
	"org.bb",
	"store.bb",
	"tv.bb",
	"*.bd",
	"be",
	"ac.be",
	"bf",
	"gov.bf",
	"bg",
	"a.bg",
	"b.bg",
	"c.bg",
	"d.bg",
	"e.bg",
	"f.bg",
	"g.bg",
	"h.bg",
	"i.bg",
	"j.bg",
	"k.bg",
	"l.bg",
	"m.bg",
	"n.bg",
	"o.bg",
	"p.bg",
	"q.bg",
	"r.bg",
	"s.bg",
	"t.bg",
	"u.bg",
	"v.bg",
	"w.bg",
	"x.bg",
	"y.bg",
	"z.bg",
	"0.bg",
	"1.bg",
	"2.bg",
	"3.bg",
	"4.bg",
	"5.bg",
	"6.bg",
	"7.bg",
	"8.bg",
	"9.bg",
	"bh",
	"com.bh",
	"edu.bh",
	"net.bh",
	"org.bh",
	"gov.bh",
	"bi",
	"co.bi",
	"com.bi",
	"edu.bi",
	"or.bi",
	"org.bi",
	"biz",
	"bj",
	"asso.bj",
	"barreau.bj",
	"gouv.bj",
	"bm",
	"com.bm",
	"edu.bm",
	"gov.bm",
	"net.bm",
	"org.bm",
	"*.bn",
	"bo",
	"com.bo",
	"edu.bo",
	"gov.bo",
	"gob.bo",
	"int.bo",
	"org.bo",
	"net.bo",
	"mil.bo",
	"tv.bo",
	"br",
	"adm.br",
	"adv.br",
	"agr.br",
	"am.br",
	"arq.br",
	"art.br",
	"ato.br",
	"b.br",
	"bio.br",
	"blog.br",
	"bmd.br",
	"cim.br",
	"cng.br",
	"cnt.br",
	"com.br",
	"coop.br",
	"ecn.br",
	"eco.br",
	"edu.br",
	"emp.br",
	"eng.br",
	"esp.br",
	"etc.br",
	"eti.br",
	"far.br",
	"flog.br",
	"fm.br",
	"fnd.br",
	"fot.br",
	"fst.br",
	"g12.br",
	"ggf.br",
	"gov.br",
	"imb.br",
	"ind.br",
	"inf.br",
	"jor.br",
	"jus.br",
	"leg.br",
	"lel.br",
	"mat.br",
	"med.br",
	"mil.br",
	"mp.br",
	"mus.br",
	"net.br",
	"*.nom.br",
	"not.br",
	"ntr.br",
	"odo.br",
	"org.br",
	"ppg.br",
	"pro.br",
	"psc.br",
	"psi.br",
	"qsl.br",
	"radio.br",
	"rec.br",
	"slg.br",
	"srv.br",
	"taxi.br",
	"teo.br",
	"tmp.br",
	"trd.br",
	"tur.br",
	"tv.br",
	"vet.br",
	"vlog.br",
	"wiki.br",
	"zlg.br",
	"bs",
	"com.bs",
	"net.bs",
	"org.bs",
	"edu.bs",
	"gov.bs",
	"bt",
	"com.bt",
	"edu.bt",
	"gov.bt",
	"net.bt",
	"org.bt",
	"bv",
	"bw",
	"co.bw",
	"org.bw",
	"by",
	"gov.by",
	"mil.by",
	"com.by",
	"of.by",
	"bz",
	"com.bz",
	"net.bz",
	"org.bz",
	"edu.bz",
	"gov.bz",
	"ca",
	"ab.ca",
	"bc.ca",
	"mb.ca",
	"nb.ca",
	"nf.ca",
	"nl.ca",
	"ns.ca",
	"nt.ca",
	"nu.ca",
	"on.ca",
	"pe.ca",
	"qc.ca",
	"sk.ca",
	"yk.ca",
	"gc.ca",
	"cat",
	"cc",
	"cd",
	"gov.cd",
	"cf",
	"cg",
	"ch",
	"ci",
	"org.ci",
	"or.ci",
	"com.ci",
	"co.ci",
	"edu.ci",
	"ed.ci",
	"ac.ci",
	"net.ci",
	"go.ci",
	"asso.ci",
	"aéroport.ci",
	"int.ci",
	"presse.ci",
	"md.ci",
	"gouv.ci",
	"*.ck",
	"!www.ck",
	"cl",
	"gov.cl",
	"gob.cl",
	"co.cl",
	"mil.cl",
	"cm",
	"co.cm",
	"com.cm",
	"gov.cm",
	"net.cm",
	"cn",
	"ac.cn",
	"com.cn",
	"edu.cn",
	"gov.cn",
	"net.cn",
	"org.cn",
	"mil.cn",
	"公司.cn",
	"网络.cn",
	"網絡.cn",
	"ah.cn",
	"bj.cn",
	"cq.cn",
	"fj.cn",
	"gd.cn",
	"gs.cn",
	"gz.cn",
	"gx.cn",
	"ha.cn",
	"hb.cn",
	"he.cn",
	"hi.cn",
	"hl.cn",
	"hn.cn",
	"jl.cn",
	"js.cn",
	"jx.cn",
	"ln.cn",
	"nm.cn",
	"nx.cn",
	"qh.cn",
	"sc.cn",
	"sd.cn",
	"sh.cn",
	"sn.cn",
	"sx.cn",
	"tj.cn",
	"xj.cn",
	"xz.cn",
	"yn.cn",
	"zj.cn",
	"hk.cn",
	"mo.cn",
	"tw.cn",
	"co",
	"arts.co",
	"com.co",
	"edu.co",
	"firm.co",
	"gov.co",
	"info.co",
	"int.co",
	"mil.co",
	"net.co",
	"nom.co",
	"org.co",
	"rec.co",
	"web.co",
	"com",
	"coop",
	"cr",
	"ac.cr",
	"co.cr",
	"ed.cr",
	"fi.cr",
	"go.cr",
	"or.cr",
	"sa.cr",
	"cu",
	"com.cu",
	"edu.cu",
	"org.cu",
	"net.cu",
	"gov.cu",
	"inf.cu",
	"cv",
	"cw",
	"com.cw",
	"edu.cw",
	"net.cw",
	"org.cw",
	"cx",
	"gov.cx",
	"cy",
	"ac.cy",
	"biz.cy",
	"com.cy",
	"ekloges.cy",
	"gov.cy",
	"ltd.cy",
	"name.cy",
	"net.cy",
	"org.cy",
	"parliament.cy",
	"press.cy",
	"pro.cy",
	"tm.cy",
	"cz",
	"de",
	"dj",
	"dk",
	"dm",
	"com.dm",
	"net.dm",
	"org.dm",
	"edu.dm",
	"gov.dm",
	"do",
	"art.do",
	"com.do",
	"edu.do",
	"gob.do",
	"gov.do",
	"mil.do",
	"net.do",
	"org.do",
	"sld.do",
	"web.do",
	"dz",
	"com.dz",
	"org.dz",
	"net.dz",
	"gov.dz",
	"edu.dz",
	"asso.dz",
	"pol.dz",
	"art.dz",
	"ec",
	"com.ec",
	"info.ec",
	"net.ec",
	"fin.ec",
	"k12.ec",
	"med.ec",
	"pro.ec",
	"org.ec",
	"edu.ec",
	"gov.ec",
	"gob.ec",
	"mil.ec",
	"edu",
	"ee",
	"edu.ee",
	"gov.ee",
	"riik.ee",
	"lib.ee",
	"med.ee",
	"com.ee",
	"pri.ee",
	"aip.ee",
	"org.ee",
	"fie.ee",
	"eg",
	"com.eg",
	"edu.eg",
	"eun.eg",
	"gov.eg",
	"mil.eg",
	"name.eg",
	"net.eg",
	"org.eg",
	"sci.eg",
	"*.er",
	"es",
	"com.es",
	"nom.es",
	"org.es",
	"gob.es",
	"edu.es",
	"et",
	"com.et",
	"gov.et",
	"org.et",
	"edu.et",
	"biz.et",
	"name.et",
	"info.et",
	"net.et",
	"eu",
	"fi",
	"aland.fi",
	"*.fj",
	"*.fk",
	"fm",
	"fo",
	"fr",
	"com.fr",
	"asso.fr",
	"nom.fr",
	"prd.fr",
	"presse.fr",
	"tm.fr",
	"aeroport.fr",
	"assedic.fr",
	"avocat.fr",
	"avoues.fr",
	"cci.fr",
	"chambagri.fr",
	"chirurgiens-dentistes.fr",
	"experts-comptables.fr",
	"geometre-expert.fr",
	"gouv.fr",
	"greta.fr",
	"huissier-justice.fr",
	"medecin.fr",
	"notaires.fr",
	"pharmacien.fr",
	"port.fr",
	"veterinaire.fr",
	"ga",
	"gb",
	"gd",
	"ge",
	"com.ge",
	"edu.ge",
	"gov.ge",
	"org.ge",
	"mil.ge",
	"net.ge",
	"pvt.ge",
	"gf",
	"gg",
	"co.gg",
	"net.gg",
	"org.gg",
	"gh",
	"com.gh",
	"edu.gh",
	"gov.gh",
	"org.gh",
	"mil.gh",
	"gi",
	"com.gi",
	"ltd.gi",
	"gov.gi",
	"mod.gi",
	"edu.gi",
	"org.gi",
	"gl",
	"co.gl",
	"com.gl",
	"edu.gl",
	"net.gl",
	"org.gl",
	"gm",
	"gn",
	"ac.gn",
	"com.gn",
	"edu.gn",
	"gov.gn",
	"org.gn",
	"net.gn",
	"gov",
	"gp",
	"com.gp",
	"net.gp",
	"mobi.gp",
	"edu.gp",
	"org.gp",
	"asso.gp",
	"gq",
	"gr",
	"com.gr",
	"edu.gr",
	"net.gr",
	"org.gr",
	"gov.gr",
	"gs",
	"gt",
	"com.gt",
	"edu.gt",
	"gob.gt",
	"ind.gt",
	"mil.gt",
	"net.gt",
	"org.gt",
	"*.gu",
	"gw",
	"gy",
	"co.gy",
	"com.gy",
	"edu.gy",
	"gov.gy",
	"net.gy",
	"org.gy",
	"hk",
	"com.hk",
	"edu.hk",
	"gov.hk",
	"idv.hk",
	"net.hk",
	"org.hk",
	"公司.hk",
	"教育.hk",
	"敎育.hk",
	"政府.hk",
	"個人.hk",
	"个人.hk",
	"箇人.hk",
	"網络.hk",
	"网络.hk",
	"组織.hk",
	"網絡.hk",
	"网絡.hk",
	"组织.hk",
	"組織.hk",
	"組织.hk",
	"hm",
	"hn",
	"com.hn",
	"edu.hn",
	"org.hn",
	"net.hn",
	"mil.hn",
	"gob.hn",
	"hr",
	"iz.hr",
	"from.hr",
	"name.hr",
	"com.hr",
	"ht",
	"com.ht",
	"shop.ht",
	"firm.ht",
	"info.ht",
	"adult.ht",
	"net.ht",
	"pro.ht",
	"org.ht",
	"med.ht",
	"art.ht",
	"coop.ht",
	"pol.ht",
	"asso.ht",
	"edu.ht",
	"rel.ht",
	"gouv.ht",
	"perso.ht",
	"hu",
	"co.hu",
	"info.hu",
	"org.hu",
	"priv.hu",
	"sport.hu",
	"tm.hu",
	"2000.hu",
	"agrar.hu",
	"bolt.hu",
	"casino.hu",
	"city.hu",
	"erotica.hu",
	"erotika.hu",
	"film.hu",
	"forum.hu",
	"games.hu",
	"hotel.hu",
	"ingatlan.hu",
	"jogasz.hu",
	"konyvelo.hu",
	"lakas.hu",
	"media.hu",
	"news.hu",
	"reklam.hu",
	"sex.hu",
	"shop.hu",
	"suli.hu",
	"szex.hu",
	"tozsde.hu",
	"utazas.hu",
	"video.hu",
	"id",
	"ac.id",
	"biz.id",
	"co.id",
	"desa.id",
	"go.id",
	"mil.id",
	"my.id",
	"net.id",
	"or.id",
	"sch.id",
	"web.id",
	"ie",
	"gov.ie",
	"il",
	"ac.il",
	"co.il",
	"gov.il",
	"idf.il",
	"k12.il",
	"muni.il",
	"net.il",
	"org.il",
	"im",
	"ac.im",
	"co.im",
	"com.im",
	"ltd.co.im",
	"net.im",
	"org.im",
	"plc.co.im",
	"tt.im",
	"tv.im",
	"in",
	"co.in",
	"firm.in",
	"net.in",
	"org.in",
	"gen.in",
	"ind.in",
	"nic.in",
	"ac.in",
	"edu.in",
	"res.in",
	"gov.in",
	"mil.in",
	"info",
	"int",
	"eu.int",
	"io",
	"com.io",
	"iq",
	"gov.iq",
	"edu.iq",
	"mil.iq",
	"com.iq",
	"org.iq",
	"net.iq",
	"ir",
	"ac.ir",
	"co.ir",
	"gov.ir",
	"id.ir",
	"net.ir",
	"org.ir",
	"sch.ir",
	"ایران.ir",
	"ايران.ir",
	"is",
	"net.is",
	"com.is",
	"edu.is",
	"gov.is",
	"org.is",
	"int.is",
	"it",
	"gov.it",
	"edu.it",
	"abr.it",
	"abruzzo.it",
	"aosta-valley.it",
	"aostavalley.it",
	"bas.it",
	"basilicata.it",
	"cal.it",
	"calabria.it",
	"cam.it",
	"campania.it",
	"emilia-romagna.it",
	"emiliaromagna.it",
	"emr.it",
	"friuli-v-giulia.it",
	"friuli-ve-giulia.it",
	"friuli-vegiulia.it",
	"friuli-venezia-giulia.it",
	"friuli-veneziagiulia.it",
	"friuli-vgiulia.it",
	"friuliv-giulia.it",
	"friulive-giulia.it",
	"friulivegiulia.it",
	"friulivenezia-giulia.it",
	"friuliveneziagiulia.it",
	"friulivgiulia.it",
	"fvg.it",
	"laz.it",
	"lazio.it",
	"lig.it",
	"liguria.it",
	"lom.it",
	"lombardia.it",
	"lombardy.it",
	"lucania.it",
	"mar.it",
	"marche.it",
	"mol.it",
	"molise.it",
	"piedmont.it",
	"piemonte.it",
	"pmn.it",
	"pug.it",
	"puglia.it",
	"sar.it",
	"sardegna.it",
	"sardinia.it",
	"sic.it",
	"sicilia.it",
	"sicily.it",
	"taa.it",
	"tos.it",
	"toscana.it",
	"trentino-a-adige.it",
	"trentino-aadige.it",
	"trentino-alto-adige.it",
	"trentino-altoadige.it",
	"trentino-s-tirol.it",
	"trentino-stirol.it",
	"trentino-sud-tirol.it",
	"trentino-sudtirol.it",
	"trentino-sued-tirol.it",
	"trentino-suedtirol.it",
	"trentinoa-adige.it",
	"trentinoaadige.it",
	"trentinoalto-adige.it",
	"trentinoaltoadige.it",
	"trentinos-tirol.it",
	"trentinostirol.it",
	"trentinosud-tirol.it",
	"trentinosudtirol.it",
	"trentinosued-tirol.it",
	"trentinosuedtirol.it",
	"tuscany.it",
	"umb.it",
	"umbria.it",
	"val-d-aosta.it",
	"val-daosta.it",
	"vald-aosta.it",
	"valdaosta.it",
	"valle-aosta.it",
	"valle-d-aosta.it",
	"valle-daosta.it",
	"valleaosta.it",
	"valled-aosta.it",
	"valledaosta.it",
	"vallee-aoste.it",
	"valleeaoste.it",
	"vao.it",
	"vda.it",
	"ven.it",
	"veneto.it",
	"ag.it",
	"agrigento.it",
	"al.it",
	"alessandria.it",
	"alto-adige.it",
	"altoadige.it",
	"an.it",
	"ancona.it",
	"andria-barletta-trani.it",
	"andria-trani-barletta.it",
	"andriabarlettatrani.it",
	"andriatranibarletta.it",
	"ao.it",
	"aosta.it",
	"aoste.it",
	"ap.it",
	"aq.it",
	"aquila.it",
	"ar.it",
	"arezzo.it",
	"ascoli-piceno.it",
	"ascolipiceno.it",
	"asti.it",
	"at.it",
	"av.it",
	"avellino.it",
	"ba.it",
	"balsan.it",
	"bari.it",
	"barletta-trani-andria.it",
	"barlettatraniandria.it",
	"belluno.it",
	"benevento.it",
	"bergamo.it",
	"bg.it",
	"bi.it",
	"biella.it",
	"bl.it",
	"bn.it",
	"bo.it",
	"bologna.it",
	"bolzano.it",
	"bozen.it",
	"br.it",
	"brescia.it",
	"brindisi.it",
	"bs.it",
	"bt.it",
	"bz.it",
	"ca.it",
	"cagliari.it",
	"caltanissetta.it",
	"campidano-medio.it",
	"campidanomedio.it",
	"campobasso.it",
	"carbonia-iglesias.it",
	"carboniaiglesias.it",
	"carrara-massa.it",
	"carraramassa.it",
	"caserta.it",
	"catania.it",
	"catanzaro.it",
	"cb.it",
	"ce.it",
	"cesena-forli.it",
	"cesenaforli.it",
	"ch.it",
	"chieti.it",
	"ci.it",
	"cl.it",
	"cn.it",
	"co.it",
	"como.it",
	"cosenza.it",
	"cr.it",
	"cremona.it",
	"crotone.it",
	"cs.it",
	"ct.it",
	"cuneo.it",
	"cz.it",
	"dell-ogliastra.it",
	"dellogliastra.it",
	"en.it",
	"enna.it",
	"fc.it",
	"fe.it",
	"fermo.it",
	"ferrara.it",
	"fg.it",
	"fi.it",
	"firenze.it",
	"florence.it",
	"fm.it",
	"foggia.it",
	"forli-cesena.it",
	"forlicesena.it",
	"fr.it",
	"frosinone.it",
	"ge.it",
	"genoa.it",
	"genova.it",
	"go.it",
	"gorizia.it",
	"gr.it",
	"grosseto.it",
	"iglesias-carbonia.it",
	"iglesiascarbonia.it",
	"im.it",
	"imperia.it",
	"is.it",
	"isernia.it",
	"kr.it",
	"la-spezia.it",
	"laquila.it",
	"laspezia.it",
	"latina.it",
	"lc.it",
	"le.it",
	"lecce.it",
	"lecco.it",
	"li.it",
	"livorno.it",
	"lo.it",
	"lodi.it",
	"lt.it",
	"lu.it",
	"lucca.it",
	"macerata.it",
	"mantova.it",
	"massa-carrara.it",
	"massacarrara.it",
	"matera.it",
	"mb.it",
	"mc.it",
	"me.it",
	"medio-campidano.it",
	"mediocampidano.it",
	"messina.it",
	"mi.it",
	"milan.it",
	"milano.it",
	"mn.it",
	"mo.it",
	"modena.it",
	"monza-brianza.it",
	"monza-e-della-brianza.it",
	"monza.it",
	"monzabrianza.it",
	"monzaebrianza.it",
	"monzaedellabrianza.it",
	"ms.it",
	"mt.it",
	"na.it",
	"naples.it",
	"napoli.it",
	"no.it",
	"novara.it",
	"nu.it",
	"nuoro.it",
	"og.it",
	"ogliastra.it",
	"olbia-tempio.it",
	"olbiatempio.it",
	"or.it",
	"oristano.it",
	"ot.it",
	"pa.it",
	"padova.it",
	"padua.it",
	"palermo.it",
	"parma.it",
	"pavia.it",
	"pc.it",
	"pd.it",
	"pe.it",
	"perugia.it",
	"pesaro-urbino.it",
	"pesarourbino.it",
	"pescara.it",
	"pg.it",
	"pi.it",
	"piacenza.it",
	"pisa.it",
	"pistoia.it",
	"pn.it",
	"po.it",
	"pordenone.it",
	"potenza.it",
	"pr.it",
	"prato.it",
	"pt.it",
	"pu.it",
	"pv.it",
	"pz.it",
	"ra.it",
	"ragusa.it",
	"ravenna.it",
	"rc.it",
	"re.it",
	"reggio-calabria.it",
	"reggio-emilia.it",
	"reggiocalabria.it",
	"reggioemilia.it",
	"rg.it",
	"ri.it",
	"rieti.it",
	"rimini.it",
	"rm.it",
	"rn.it",
	"ro.it",
	"roma.it",
	"rome.it",
	"rovigo.it",
	"sa.it",
	"salerno.it",
	"sassari.it",
	"savona.it",
	"si.it",
	"siena.it",
	"siracusa.it",
	"so.it",
	"sondrio.it",
	"sp.it",
	"sr.it",
	"ss.it",
	"suedtirol.it",
	"sv.it",
	"ta.it",
	"taranto.it",
	"te.it",
	"tempio-olbia.it",
	"tempioolbia.it",
	"teramo.it",
	"terni.it",
	"tn.it",
	"to.it",
	"torino.it",
	"tp.it",
	"tr.it",
	"trani-andria-barletta.it",
	"trani-barletta-andria.it",
	"traniandriabarletta.it",
	"tranibarlettaandria.it",
	"trapani.it",
	"trentino.it",
	"trento.it",
	"treviso.it",
	"trieste.it",
	"ts.it",
	"turin.it",
	"tv.it",
	"ud.it",
	"udine.it",
	"urbino-pesaro.it",
	"urbinopesaro.it",
	"va.it",
	"varese.it",
	"vb.it",
	"vc.it",
	"ve.it",
	"venezia.it",
	"venice.it",
	"verbania.it",
	"vercelli.it",
	"verona.it",
	"vi.it",
	"vibo-valentia.it",
	"vibovalentia.it",
	"vicenza.it",
	"viterbo.it",
	"vr.it",
	"vs.it",
	"vt.it",
	"vv.it",
	"je",
	"co.je",
	"net.je",
	"org.je",
	"*.jm",
	"jo",
	"com.jo",
	"org.jo",
	"net.jo",
	"edu.jo",
	"sch.jo",
	"gov.jo",
	"mil.jo",
	"name.jo",
	"jobs",
	"jp",
	"ac.jp",
	"ad.jp",
	"co.jp",
	"ed.jp",
	"go.jp",
	"gr.jp",
	"lg.jp",
	"ne.jp",
	"or.jp",
	"aichi.jp",
	"akita.jp",
	"aomori.jp",
	"chiba.jp",
	"ehime.jp",
	"fukui.jp",
	"fukuoka.jp",
	"fukushima.jp",
	"gifu.jp",
	"gunma.jp",
	"hiroshima.jp",
	"hokkaido.jp",
	"hyogo.jp",
	"ibaraki.jp",
	"ishikawa.jp",
	"iwate.jp",
	"kagawa.jp",
	"kagoshima.jp",
	"kanagawa.jp",
	"kochi.jp",
	"kumamoto.jp",
	"kyoto.jp",
	"mie.jp",
	"miyagi.jp",
	"miyazaki.jp",
	"nagano.jp",
	"nagasaki.jp",
	"nara.jp",
	"niigata.jp",
	"oita.jp",
	"okayama.jp",
	"okinawa.jp",
	"osaka.jp",
	"saga.jp",
	"saitama.jp",
	"shiga.jp",
	"shimane.jp",
	"shizuoka.jp",
	"tochigi.jp",
	"tokushima.jp",
	"tokyo.jp",
	"tottori.jp",
	"toyama.jp",
	"wakayama.jp",
	"yamagata.jp",
	"yamaguchi.jp",
	"yamanashi.jp",
	"栃木.jp",
	"愛知.jp",
	"愛媛.jp",
	"兵庫.jp",
	"熊本.jp",
	"茨城.jp",
	"北海道.jp",
	"千葉.jp",
	"和歌山.jp",
	"長崎.jp",
	"長野.jp",
	"新潟.jp",
	"青森.jp",
	"静岡.jp",
	"東京.jp",
	"石川.jp",
	"埼玉.jp",
	"三重.jp",
	"京都.jp",
	"佐賀.jp",
	"大分.jp",
	"大阪.jp",
	"奈良.jp",
	"宮城.jp",
	"宮崎.jp",
	"富山.jp",
	"山口.jp",
	"山形.jp",
	"山梨.jp",
	"岩手.jp",
	"岐阜.jp",
	"岡山.jp",
	"島根.jp",
	"広島.jp",
	"徳島.jp",
	"沖縄.jp",
	"滋賀.jp",
	"神奈川.jp",
	"福井.jp",
	"福岡.jp",
	"福島.jp",
	"秋田.jp",
	"群馬.jp",
	"香川.jp",
	"高知.jp",
	"鳥取.jp",
	"鹿児島.jp",
	"*.kawasaki.jp",
	"*.kitakyushu.jp",
	"*.kobe.jp",
	"*.nagoya.jp",
	"*.sapporo.jp",
	"*.sendai.jp",
	"*.yokohama.jp",
	"!city.kawasaki.jp",
	"!city.kitakyushu.jp",
	"!city.kobe.jp",
	"!city.nagoya.jp",
	"!city.sapporo.jp",
	"!city.sendai.jp",
	"!city.yokohama.jp",
	"aisai.aichi.jp",
	"ama.aichi.jp",
	"anjo.aichi.jp",
	"asuke.aichi.jp",
	"chiryu.aichi.jp",
	"chita.aichi.jp",
	"fuso.aichi.jp",
	"gamagori.aichi.jp",
	"handa.aichi.jp",
	"hazu.aichi.jp",
	"hekinan.aichi.jp",
	"higashiura.aichi.jp",
	"ichinomiya.aichi.jp",
	"inazawa.aichi.jp",
	"inuyama.aichi.jp",
	"isshiki.aichi.jp",
	"iwakura.aichi.jp",
	"kanie.aichi.jp",
	"kariya.aichi.jp",
	"kasugai.aichi.jp",
	"kira.aichi.jp",
	"kiyosu.aichi.jp",
	"komaki.aichi.jp",
	"konan.aichi.jp",
	"kota.aichi.jp",
	"mihama.aichi.jp",
	"miyoshi.aichi.jp",
	"nishio.aichi.jp",
	"nisshin.aichi.jp",
	"obu.aichi.jp",
	"oguchi.aichi.jp",
	"oharu.aichi.jp",
	"okazaki.aichi.jp",
	"owariasahi.aichi.jp",
	"seto.aichi.jp",
	"shikatsu.aichi.jp",
	"shinshiro.aichi.jp",
	"shitara.aichi.jp",
	"tahara.aichi.jp",
	"takahama.aichi.jp",
	"tobishima.aichi.jp",
	"toei.aichi.jp",
	"togo.aichi.jp",
	"tokai.aichi.jp",
	"tokoname.aichi.jp",
	"toyoake.aichi.jp",
	"toyohashi.aichi.jp",
	"toyokawa.aichi.jp",
	"toyone.aichi.jp",
	"toyota.aichi.jp",
	"tsushima.aichi.jp",
	"yatomi.aichi.jp",
	"akita.akita.jp",
	"daisen.akita.jp",
	"fujisato.akita.jp",
	"gojome.akita.jp",
	"hachirogata.akita.jp",
	"happou.akita.jp",
	"higashinaruse.akita.jp",
	"honjo.akita.jp",
	"honjyo.akita.jp",
	"ikawa.akita.jp",
	"kamikoani.akita.jp",
	"kamioka.akita.jp",
	"katagami.akita.jp",
	"kazuno.akita.jp",
	"kitaakita.akita.jp",
	"kosaka.akita.jp",
	"kyowa.akita.jp",
	"misato.akita.jp",
	"mitane.akita.jp",
	"moriyoshi.akita.jp",
	"nikaho.akita.jp",
	"noshiro.akita.jp",
	"odate.akita.jp",
	"oga.akita.jp",
	"ogata.akita.jp",
	"semboku.akita.jp",
	"yokote.akita.jp",
	"yurihonjo.akita.jp",
	"aomori.aomori.jp",
	"gonohe.aomori.jp",
	"hachinohe.aomori.jp",
	"hashikami.aomori.jp",
	"hiranai.aomori.jp",
	"hirosaki.aomori.jp",
	"itayanagi.aomori.jp",
	"kuroishi.aomori.jp",
	"misawa.aomori.jp",
	"mutsu.aomori.jp",
	"nakadomari.aomori.jp",
	"noheji.aomori.jp",
	"oirase.aomori.jp",
	"owani.aomori.jp",
	"rokunohe.aomori.jp",
	"sannohe.aomori.jp",
	"shichinohe.aomori.jp",
	"shingo.aomori.jp",
	"takko.aomori.jp",
	"towada.aomori.jp",
	"tsugaru.aomori.jp",
	"tsuruta.aomori.jp",
	"abiko.chiba.jp",
	"asahi.chiba.jp",
	"chonan.chiba.jp",
	"chosei.chiba.jp",
	"choshi.chiba.jp",
	"chuo.chiba.jp",
	"funabashi.chiba.jp",
	"futtsu.chiba.jp",
	"hanamigawa.chiba.jp",
	"ichihara.chiba.jp",
	"ichikawa.chiba.jp",
	"ichinomiya.chiba.jp",
	"inzai.chiba.jp",
	"isumi.chiba.jp",
	"kamagaya.chiba.jp",
	"kamogawa.chiba.jp",
	"kashiwa.chiba.jp",
	"katori.chiba.jp",
	"katsuura.chiba.jp",
	"kimitsu.chiba.jp",
	"kisarazu.chiba.jp",
	"kozaki.chiba.jp",
	"kujukuri.chiba.jp",
	"kyonan.chiba.jp",
	"matsudo.chiba.jp",
	"midori.chiba.jp",
	"mihama.chiba.jp",
	"minamiboso.chiba.jp",
	"mobara.chiba.jp",
	"mutsuzawa.chiba.jp",
	"nagara.chiba.jp",
	"nagareyama.chiba.jp",
	"narashino.chiba.jp",
	"narita.chiba.jp",
	"noda.chiba.jp",
	"oamishirasato.chiba.jp",
	"omigawa.chiba.jp",
	"onjuku.chiba.jp",
	"otaki.chiba.jp",
	"sakae.chiba.jp",
	"sakura.chiba.jp",
	"shimofusa.chiba.jp",
	"shirako.chiba.jp",
	"shiroi.chiba.jp",
	"shisui.chiba.jp",
	"sodegaura.chiba.jp",
	"sosa.chiba.jp",
	"tako.chiba.jp",
	"tateyama.chiba.jp",
	"togane.chiba.jp",
	"tohnosho.chiba.jp",
	"tomisato.chiba.jp",
	"urayasu.chiba.jp",
	"yachimata.chiba.jp",
	"yachiyo.chiba.jp",
	"yokaichiba.chiba.jp",
	"yokoshibahikari.chiba.jp",
	"yotsukaido.chiba.jp",
	"ainan.ehime.jp",
	"honai.ehime.jp",
	"ikata.ehime.jp",
	"imabari.ehime.jp",
	"iyo.ehime.jp",
	"kamijima.ehime.jp",
	"kihoku.ehime.jp",
	"kumakogen.ehime.jp",
	"masaki.ehime.jp",
	"matsuno.ehime.jp",
	"matsuyama.ehime.jp",
	"namikata.ehime.jp",
	"niihama.ehime.jp",
	"ozu.ehime.jp",
	"saijo.ehime.jp",
	"seiyo.ehime.jp",
	"shikokuchuo.ehime.jp",
	"tobe.ehime.jp",
	"toon.ehime.jp",
	"uchiko.ehime.jp",
	"uwajima.ehime.jp",
	"yawatahama.ehime.jp",
	"echizen.fukui.jp",
	"eiheiji.fukui.jp",
	"fukui.fukui.jp",
	"ikeda.fukui.jp",
	"katsuyama.fukui.jp",
	"mihama.fukui.jp",
	"minamiechizen.fukui.jp",
	"obama.fukui.jp",
	"ohi.fukui.jp",
	"ono.fukui.jp",
	"sabae.fukui.jp",
	"sakai.fukui.jp",
	"takahama.fukui.jp",
	"tsuruga.fukui.jp",
	"wakasa.fukui.jp",
	"ashiya.fukuoka.jp",
	"buzen.fukuoka.jp",
	"chikugo.fukuoka.jp",
	"chikuho.fukuoka.jp",
	"chikujo.fukuoka.jp",
	"chikushino.fukuoka.jp",
	"chikuzen.fukuoka.jp",
	"chuo.fukuoka.jp",
	"dazaifu.fukuoka.jp",
	"fukuchi.fukuoka.jp",
	"hakata.fukuoka.jp",
	"higashi.fukuoka.jp",
	"hirokawa.fukuoka.jp",
	"hisayama.fukuoka.jp",
	"iizuka.fukuoka.jp",
	"inatsuki.fukuoka.jp",
	"kaho.fukuoka.jp",
	"kasuga.fukuoka.jp",
	"kasuya.fukuoka.jp",
	"kawara.fukuoka.jp",
	"keisen.fukuoka.jp",
	"koga.fukuoka.jp",
	"kurate.fukuoka.jp",
	"kurogi.fukuoka.jp",
	"kurume.fukuoka.jp",
	"minami.fukuoka.jp",
	"miyako.fukuoka.jp",
	"miyama.fukuoka.jp",
	"miyawaka.fukuoka.jp",
	"mizumaki.fukuoka.jp",
	"munakata.fukuoka.jp",
	"nakagawa.fukuoka.jp",
	"nakama.fukuoka.jp",
	"nishi.fukuoka.jp",
	"nogata.fukuoka.jp",
	"ogori.fukuoka.jp",
	"okagaki.fukuoka.jp",
	"okawa.fukuoka.jp",
	"oki.fukuoka.jp",
	"omuta.fukuoka.jp",
	"onga.fukuoka.jp",
	"onojo.fukuoka.jp",
	"oto.fukuoka.jp",
	"saigawa.fukuoka.jp",
	"sasaguri.fukuoka.jp",
	"shingu.fukuoka.jp",
	"shinyoshitomi.fukuoka.jp",
	"shonai.fukuoka.jp",
	"soeda.fukuoka.jp",
	"sue.fukuoka.jp",
	"tachiarai.fukuoka.jp",
	"tagawa.fukuoka.jp",
	"takata.fukuoka.jp",
	"toho.fukuoka.jp",
	"toyotsu.fukuoka.jp",
	"tsuiki.fukuoka.jp",
	"ukiha.fukuoka.jp",
	"umi.fukuoka.jp",
	"usui.fukuoka.jp",
	"yamada.fukuoka.jp",
	"yame.fukuoka.jp",
	"yanagawa.fukuoka.jp",
	"yukuhashi.fukuoka.jp",
	"aizubange.fukushima.jp",
	"aizumisato.fukushima.jp",
	"aizuwakamatsu.fukushima.jp",
	"asakawa.fukushima.jp",
	"bandai.fukushima.jp",
	"date.fukushima.jp",
	"fukushima.fukushima.jp",
	"furudono.fukushima.jp",
	"futaba.fukushima.jp",
	"hanawa.fukushima.jp",
	"higashi.fukushima.jp",
	"hirata.fukushima.jp",
	"hirono.fukushima.jp",
	"iitate.fukushima.jp",
	"inawashiro.fukushima.jp",
	"ishikawa.fukushima.jp",
	"iwaki.fukushima.jp",
	"izumizaki.fukushima.jp",
	"kagamiishi.fukushima.jp",
	"kaneyama.fukushima.jp",
	"kawamata.fukushima.jp",
	"kitakata.fukushima.jp",
	"kitashiobara.fukushima.jp",
	"koori.fukushima.jp",
	"koriyama.fukushima.jp",
	"kunimi.fukushima.jp",
	"miharu.fukushima.jp",
	"mishima.fukushima.jp",
	"namie.fukushima.jp",
	"nango.fukushima.jp",
	"nishiaizu.fukushima.jp",
	"nishigo.fukushima.jp",
	"okuma.fukushima.jp",
	"omotego.fukushima.jp",
	"ono.fukushima.jp",
	"otama.fukushima.jp",
	"samegawa.fukushima.jp",
	"shimogo.fukushima.jp",
	"shirakawa.fukushima.jp",
	"showa.fukushima.jp",
	"soma.fukushima.jp",
	"sukagawa.fukushima.jp",
	"taishin.fukushima.jp",
	"tamakawa.fukushima.jp",
	"tanagura.fukushima.jp",
	"tenei.fukushima.jp",
	"yabuki.fukushima.jp",
	"yamato.fukushima.jp",
	"yamatsuri.fukushima.jp",
	"yanaizu.fukushima.jp",
	"yugawa.fukushima.jp",
	"anpachi.gifu.jp",
	"ena.gifu.jp",
	"gifu.gifu.jp",
	"ginan.gifu.jp",
	"godo.gifu.jp",
	"gujo.gifu.jp",
	"hashima.gifu.jp",
	"hichiso.gifu.jp",
	"hida.gifu.jp",
	"higashishirakawa.gifu.jp",
	"ibigawa.gifu.jp",
	"ikeda.gifu.jp",
	"kakamigahara.gifu.jp",
	"kani.gifu.jp",
	"kasahara.gifu.jp",
	"kasamatsu.gifu.jp",
	"kawaue.gifu.jp",
	"kitagata.gifu.jp",
	"mino.gifu.jp",
	"minokamo.gifu.jp",
	"mitake.gifu.jp",
	"mizunami.gifu.jp",
	"motosu.gifu.jp",
	"nakatsugawa.gifu.jp",
	"ogaki.gifu.jp",
	"sakahogi.gifu.jp",
	"seki.gifu.jp",
	"sekigahara.gifu.jp",
	"shirakawa.gifu.jp",
	"tajimi.gifu.jp",
	"takayama.gifu.jp",
	"tarui.gifu.jp",
	"toki.gifu.jp",
	"tomika.gifu.jp",
	"wanouchi.gifu.jp",
	"yamagata.gifu.jp",
	"yaotsu.gifu.jp",
	"yoro.gifu.jp",
	"annaka.gunma.jp",
	"chiyoda.gunma.jp",
	"fujioka.gunma.jp",
	"higashiagatsuma.gunma.jp",
	"isesaki.gunma.jp",
	"itakura.gunma.jp",
	"kanna.gunma.jp",
	"kanra.gunma.jp",
	"katashina.gunma.jp",
	"kawaba.gunma.jp",
	"kiryu.gunma.jp",
	"kusatsu.gunma.jp",
	"maebashi.gunma.jp",
	"meiwa.gunma.jp",
	"midori.gunma.jp",
	"minakami.gunma.jp",
	"naganohara.gunma.jp",
	"nakanojo.gunma.jp",
	"nanmoku.gunma.jp",
	"numata.gunma.jp",
	"oizumi.gunma.jp",
	"ora.gunma.jp",
	"ota.gunma.jp",
	"shibukawa.gunma.jp",
	"shimonita.gunma.jp",
	"shinto.gunma.jp",
	"showa.gunma.jp",
	"takasaki.gunma.jp",
	"takayama.gunma.jp",
	"tamamura.gunma.jp",
	"tatebayashi.gunma.jp",
	"tomioka.gunma.jp",
	"tsukiyono.gunma.jp",
	"tsumagoi.gunma.jp",
	"ueno.gunma.jp",
	"yoshioka.gunma.jp",
	"asaminami.hiroshima.jp",
	"daiwa.hiroshima.jp",
	"etajima.hiroshima.jp",
	"fuchu.hiroshima.jp",
	"fukuyama.hiroshima.jp",
	"hatsukaichi.hiroshima.jp",
	"higashihiroshima.hiroshima.jp",
	"hongo.hiroshima.jp",
	"jinsekikogen.hiroshima.jp",
	"kaita.hiroshima.jp",
	"kui.hiroshima.jp",
	"kumano.hiroshima.jp",
	"kure.hiroshima.jp",
	"mihara.hiroshima.jp",
	"miyoshi.hiroshima.jp",
	"naka.hiroshima.jp",
	"onomichi.hiroshima.jp",
	"osakikamijima.hiroshima.jp",
	"otake.hiroshima.jp",
	"saka.hiroshima.jp",
	"sera.hiroshima.jp",
	"seranishi.hiroshima.jp",
	"shinichi.hiroshima.jp",
	"shobara.hiroshima.jp",
	"takehara.hiroshima.jp",
	"abashiri.hokkaido.jp",
	"abira.hokkaido.jp",
	"aibetsu.hokkaido.jp",
	"akabira.hokkaido.jp",
	"akkeshi.hokkaido.jp",
	"asahikawa.hokkaido.jp",
	"ashibetsu.hokkaido.jp",
	"ashoro.hokkaido.jp",
	"assabu.hokkaido.jp",
	"atsuma.hokkaido.jp",
	"bibai.hokkaido.jp",
	"biei.hokkaido.jp",
	"bifuka.hokkaido.jp",
	"bihoro.hokkaido.jp",
	"biratori.hokkaido.jp",
	"chippubetsu.hokkaido.jp",
	"chitose.hokkaido.jp",
	"date.hokkaido.jp",
	"ebetsu.hokkaido.jp",
	"embetsu.hokkaido.jp",
	"eniwa.hokkaido.jp",
	"erimo.hokkaido.jp",
	"esan.hokkaido.jp",
	"esashi.hokkaido.jp",
	"fukagawa.hokkaido.jp",
	"fukushima.hokkaido.jp",
	"furano.hokkaido.jp",
	"furubira.hokkaido.jp",
	"haboro.hokkaido.jp",
	"hakodate.hokkaido.jp",
	"hamatonbetsu.hokkaido.jp",
	"hidaka.hokkaido.jp",
	"higashikagura.hokkaido.jp",
	"higashikawa.hokkaido.jp",
	"hiroo.hokkaido.jp",
	"hokuryu.hokkaido.jp",
	"hokuto.hokkaido.jp",
	"honbetsu.hokkaido.jp",
	"horokanai.hokkaido.jp",
	"horonobe.hokkaido.jp",
	"ikeda.hokkaido.jp",
	"imakane.hokkaido.jp",
	"ishikari.hokkaido.jp",
	"iwamizawa.hokkaido.jp",
	"iwanai.hokkaido.jp",
	"kamifurano.hokkaido.jp",
	"kamikawa.hokkaido.jp",
	"kamishihoro.hokkaido.jp",
	"kamisunagawa.hokkaido.jp",
	"kamoenai.hokkaido.jp",
	"kayabe.hokkaido.jp",
	"kembuchi.hokkaido.jp",
	"kikonai.hokkaido.jp",
	"kimobetsu.hokkaido.jp",
	"kitahiroshima.hokkaido.jp",
	"kitami.hokkaido.jp",
	"kiyosato.hokkaido.jp",
	"koshimizu.hokkaido.jp",
	"kunneppu.hokkaido.jp",
	"kuriyama.hokkaido.jp",
	"kuromatsunai.hokkaido.jp",
	"kushiro.hokkaido.jp",
	"kutchan.hokkaido.jp",
	"kyowa.hokkaido.jp",
	"mashike.hokkaido.jp",
	"matsumae.hokkaido.jp",
	"mikasa.hokkaido.jp",
	"minamifurano.hokkaido.jp",
	"mombetsu.hokkaido.jp",
	"moseushi.hokkaido.jp",
	"mukawa.hokkaido.jp",
	"muroran.hokkaido.jp",
	"naie.hokkaido.jp",
	"nakagawa.hokkaido.jp",
	"nakasatsunai.hokkaido.jp",
	"nakatombetsu.hokkaido.jp",
	"nanae.hokkaido.jp",
	"nanporo.hokkaido.jp",
	"nayoro.hokkaido.jp",
	"nemuro.hokkaido.jp",
	"niikappu.hokkaido.jp",
	"niki.hokkaido.jp",
	"nishiokoppe.hokkaido.jp",
	"noboribetsu.hokkaido.jp",
	"numata.hokkaido.jp",
	"obihiro.hokkaido.jp",
	"obira.hokkaido.jp",
	"oketo.hokkaido.jp",
	"okoppe.hokkaido.jp",
	"otaru.hokkaido.jp",
	"otobe.hokkaido.jp",
	"otofuke.hokkaido.jp",
	"otoineppu.hokkaido.jp",
	"oumu.hokkaido.jp",
	"ozora.hokkaido.jp",
	"pippu.hokkaido.jp",
	"rankoshi.hokkaido.jp",
	"rebun.hokkaido.jp",
	"rikubetsu.hokkaido.jp",
	"rishiri.hokkaido.jp",
	"rishirifuji.hokkaido.jp",
	"saroma.hokkaido.jp",
	"sarufutsu.hokkaido.jp",
	"shakotan.hokkaido.jp",
	"shari.hokkaido.jp",
	"shibecha.hokkaido.jp",
	"shibetsu.hokkaido.jp",
	"shikabe.hokkaido.jp",
	"shikaoi.hokkaido.jp",
	"shimamaki.hokkaido.jp",
	"shimizu.hokkaido.jp",
	"shimokawa.hokkaido.jp",
	"shinshinotsu.hokkaido.jp",
	"shintoku.hokkaido.jp",
	"shiranuka.hokkaido.jp",
	"shiraoi.hokkaido.jp",
	"shiriuchi.hokkaido.jp",
	"sobetsu.hokkaido.jp",
	"sunagawa.hokkaido.jp",
	"taiki.hokkaido.jp",
	"takasu.hokkaido.jp",
	"takikawa.hokkaido.jp",
	"takinoue.hokkaido.jp",
	"teshikaga.hokkaido.jp",
	"tobetsu.hokkaido.jp",
	"tohma.hokkaido.jp",
	"tomakomai.hokkaido.jp",
	"tomari.hokkaido.jp",
	"toya.hokkaido.jp",
	"toyako.hokkaido.jp",
	"toyotomi.hokkaido.jp",
	"toyoura.hokkaido.jp",
	"tsubetsu.hokkaido.jp",
	"tsukigata.hokkaido.jp",
	"urakawa.hokkaido.jp",
	"urausu.hokkaido.jp",
	"uryu.hokkaido.jp",
	"utashinai.hokkaido.jp",
	"wakkanai.hokkaido.jp",
	"wassamu.hokkaido.jp",
	"yakumo.hokkaido.jp",
	"yoichi.hokkaido.jp",
	"aioi.hyogo.jp",
	"akashi.hyogo.jp",
	"ako.hyogo.jp",
	"amagasaki.hyogo.jp",
	"aogaki.hyogo.jp",
	"asago.hyogo.jp",
	"ashiya.hyogo.jp",
	"awaji.hyogo.jp",
	"fukusaki.hyogo.jp",
	"goshiki.hyogo.jp",
	"harima.hyogo.jp",
	"himeji.hyogo.jp",
	"ichikawa.hyogo.jp",
	"inagawa.hyogo.jp",
	"itami.hyogo.jp",
	"kakogawa.hyogo.jp",
	"kamigori.hyogo.jp",
	"kamikawa.hyogo.jp",
	"kasai.hyogo.jp",
	"kasuga.hyogo.jp",
	"kawanishi.hyogo.jp",
	"miki.hyogo.jp",
	"minamiawaji.hyogo.jp",
	"nishinomiya.hyogo.jp",
	"nishiwaki.hyogo.jp",
	"ono.hyogo.jp",
	"sanda.hyogo.jp",
	"sannan.hyogo.jp",
	"sasayama.hyogo.jp",
	"sayo.hyogo.jp",
	"shingu.hyogo.jp",
	"shinonsen.hyogo.jp",
	"shiso.hyogo.jp",
	"sumoto.hyogo.jp",
	"taishi.hyogo.jp",
	"taka.hyogo.jp",
	"takarazuka.hyogo.jp",
	"takasago.hyogo.jp",
	"takino.hyogo.jp",
	"tamba.hyogo.jp",
	"tatsuno.hyogo.jp",
	"toyooka.hyogo.jp",
	"yabu.hyogo.jp",
	"yashiro.hyogo.jp",
	"yoka.hyogo.jp",
	"yokawa.hyogo.jp",
	"ami.ibaraki.jp",
	"asahi.ibaraki.jp",
	"bando.ibaraki.jp",
	"chikusei.ibaraki.jp",
	"daigo.ibaraki.jp",
	"fujishiro.ibaraki.jp",
	"hitachi.ibaraki.jp",
	"hitachinaka.ibaraki.jp",
	"hitachiomiya.ibaraki.jp",
	"hitachiota.ibaraki.jp",
	"ibaraki.ibaraki.jp",
	"ina.ibaraki.jp",
	"inashiki.ibaraki.jp",
	"itako.ibaraki.jp",
	"iwama.ibaraki.jp",
	"joso.ibaraki.jp",
	"kamisu.ibaraki.jp",
	"kasama.ibaraki.jp",
	"kashima.ibaraki.jp",
	"kasumigaura.ibaraki.jp",
	"koga.ibaraki.jp",
	"miho.ibaraki.jp",
	"mito.ibaraki.jp",
	"moriya.ibaraki.jp",
	"naka.ibaraki.jp",
	"namegata.ibaraki.jp",
	"oarai.ibaraki.jp",
	"ogawa.ibaraki.jp",
	"omitama.ibaraki.jp",
	"ryugasaki.ibaraki.jp",
	"sakai.ibaraki.jp",
	"sakuragawa.ibaraki.jp",
	"shimodate.ibaraki.jp",
	"shimotsuma.ibaraki.jp",
	"shirosato.ibaraki.jp",
	"sowa.ibaraki.jp",
	"suifu.ibaraki.jp",
	"takahagi.ibaraki.jp",
	"tamatsukuri.ibaraki.jp",
	"tokai.ibaraki.jp",
	"tomobe.ibaraki.jp",
	"tone.ibaraki.jp",
	"toride.ibaraki.jp",
	"tsuchiura.ibaraki.jp",
	"tsukuba.ibaraki.jp",
	"uchihara.ibaraki.jp",
	"ushiku.ibaraki.jp",
	"yachiyo.ibaraki.jp",
	"yamagata.ibaraki.jp",
	"yawara.ibaraki.jp",
	"yuki.ibaraki.jp",
	"anamizu.ishikawa.jp",
	"hakui.ishikawa.jp",
	"hakusan.ishikawa.jp",
	"kaga.ishikawa.jp",
	"kahoku.ishikawa.jp",
	"kanazawa.ishikawa.jp",
	"kawakita.ishikawa.jp",
	"komatsu.ishikawa.jp",
	"nakanoto.ishikawa.jp",
	"nanao.ishikawa.jp",
	"nomi.ishikawa.jp",
	"nonoichi.ishikawa.jp",
	"noto.ishikawa.jp",
	"shika.ishikawa.jp",
	"suzu.ishikawa.jp",
	"tsubata.ishikawa.jp",
	"tsurugi.ishikawa.jp",
	"uchinada.ishikawa.jp",
	"wajima.ishikawa.jp",
	"fudai.iwate.jp",
	"fujisawa.iwate.jp",
	"hanamaki.iwate.jp",
	"hiraizumi.iwate.jp",
	"hirono.iwate.jp",
	"ichinohe.iwate.jp",
	"ichinoseki.iwate.jp",
	"iwaizumi.iwate.jp",
	"iwate.iwate.jp",
	"joboji.iwate.jp",
	"kamaishi.iwate.jp",
	"kanegasaki.iwate.jp",
	"karumai.iwate.jp",
	"kawai.iwate.jp",
	"kitakami.iwate.jp",
	"kuji.iwate.jp",
	"kunohe.iwate.jp",
	"kuzumaki.iwate.jp",
	"miyako.iwate.jp",
	"mizusawa.iwate.jp",
	"morioka.iwate.jp",
	"ninohe.iwate.jp",
	"noda.iwate.jp",
	"ofunato.iwate.jp",
	"oshu.iwate.jp",
	"otsuchi.iwate.jp",
	"rikuzentakata.iwate.jp",
	"shiwa.iwate.jp",
	"shizukuishi.iwate.jp",
	"sumita.iwate.jp",
	"tanohata.iwate.jp",
	"tono.iwate.jp",
	"yahaba.iwate.jp",
	"yamada.iwate.jp",
	"ayagawa.kagawa.jp",
	"higashikagawa.kagawa.jp",
	"kanonji.kagawa.jp",
	"kotohira.kagawa.jp",
	"manno.kagawa.jp",
	"marugame.kagawa.jp",
	"mitoyo.kagawa.jp",
	"naoshima.kagawa.jp",
	"sanuki.kagawa.jp",
	"tadotsu.kagawa.jp",
	"takamatsu.kagawa.jp",
	"tonosho.kagawa.jp",
	"uchinomi.kagawa.jp",
	"utazu.kagawa.jp",
	"zentsuji.kagawa.jp",
	"akune.kagoshima.jp",
	"amami.kagoshima.jp",
	"hioki.kagoshima.jp",
	"isa.kagoshima.jp",
	"isen.kagoshima.jp",
	"izumi.kagoshima.jp",
	"kagoshima.kagoshima.jp",
	"kanoya.kagoshima.jp",
	"kawanabe.kagoshima.jp",
	"kinko.kagoshima.jp",
	"kouyama.kagoshima.jp",
	"makurazaki.kagoshima.jp",
	"matsumoto.kagoshima.jp",
	"minamitane.kagoshima.jp",
	"nakatane.kagoshima.jp",
	"nishinoomote.kagoshima.jp",
	"satsumasendai.kagoshima.jp",
	"soo.kagoshima.jp",
	"tarumizu.kagoshima.jp",
	"yusui.kagoshima.jp",
	"aikawa.kanagawa.jp",
	"atsugi.kanagawa.jp",
	"ayase.kanagawa.jp",
	"chigasaki.kanagawa.jp",
	"ebina.kanagawa.jp",
	"fujisawa.kanagawa.jp",
	"hadano.kanagawa.jp",
	"hakone.kanagawa.jp",
	"hiratsuka.kanagawa.jp",
	"isehara.kanagawa.jp",
	"kaisei.kanagawa.jp",
	"kamakura.kanagawa.jp",
	"kiyokawa.kanagawa.jp",
	"matsuda.kanagawa.jp",
	"minamiashigara.kanagawa.jp",
	"miura.kanagawa.jp",
	"nakai.kanagawa.jp",
	"ninomiya.kanagawa.jp",
	"odawara.kanagawa.jp",
	"oi.kanagawa.jp",
	"oiso.kanagawa.jp",
	"sagamihara.kanagawa.jp",
	"samukawa.kanagawa.jp",
	"tsukui.kanagawa.jp",
	"yamakita.kanagawa.jp",
	"yamato.kanagawa.jp",
	"yokosuka.kanagawa.jp",
	"yugawara.kanagawa.jp",
	"zama.kanagawa.jp",
	"zushi.kanagawa.jp",
	"aki.kochi.jp",
	"geisei.kochi.jp",
	"hidaka.kochi.jp",
	"higashitsuno.kochi.jp",
	"ino.kochi.jp",
	"kagami.kochi.jp",
	"kami.kochi.jp",
	"kitagawa.kochi.jp",
	"kochi.kochi.jp",
	"mihara.kochi.jp",
	"motoyama.kochi.jp",
	"muroto.kochi.jp",
	"nahari.kochi.jp",
	"nakamura.kochi.jp",
	"nankoku.kochi.jp",
	"nishitosa.kochi.jp",
	"niyodogawa.kochi.jp",
	"ochi.kochi.jp",
	"okawa.kochi.jp",
	"otoyo.kochi.jp",
	"otsuki.kochi.jp",
	"sakawa.kochi.jp",
	"sukumo.kochi.jp",
	"susaki.kochi.jp",
	"tosa.kochi.jp",
	"tosashimizu.kochi.jp",
	"toyo.kochi.jp",
	"tsuno.kochi.jp",
	"umaji.kochi.jp",
	"yasuda.kochi.jp",
	"yusuhara.kochi.jp",
	"amakusa.kumamoto.jp",
	"arao.kumamoto.jp",
	"aso.kumamoto.jp",
	"choyo.kumamoto.jp",
	"gyokuto.kumamoto.jp",
	"kamiamakusa.kumamoto.jp",
	"kikuchi.kumamoto.jp",
	"kumamoto.kumamoto.jp",
	"mashiki.kumamoto.jp",
	"mifune.kumamoto.jp",
	"minamata.kumamoto.jp",
	"minamioguni.kumamoto.jp",
	"nagasu.kumamoto.jp",
	"nishihara.kumamoto.jp",
	"oguni.kumamoto.jp",
	"ozu.kumamoto.jp",
	"sumoto.kumamoto.jp",
	"takamori.kumamoto.jp",
	"uki.kumamoto.jp",
	"uto.kumamoto.jp",
	"yamaga.kumamoto.jp",
	"yamato.kumamoto.jp",
	"yatsushiro.kumamoto.jp",
	"ayabe.kyoto.jp",
	"fukuchiyama.kyoto.jp",
	"higashiyama.kyoto.jp",
	"ide.kyoto.jp",
	"ine.kyoto.jp",
	"joyo.kyoto.jp",
	"kameoka.kyoto.jp",
	"kamo.kyoto.jp",
	"kita.kyoto.jp",
	"kizu.kyoto.jp",
	"kumiyama.kyoto.jp",
	"kyotamba.kyoto.jp",
	"kyotanabe.kyoto.jp",
	"kyotango.kyoto.jp",
	"maizuru.kyoto.jp",
	"minami.kyoto.jp",
	"minamiyamashiro.kyoto.jp",
	"miyazu.kyoto.jp",
	"muko.kyoto.jp",
	"nagaokakyo.kyoto.jp",
	"nakagyo.kyoto.jp",
	"nantan.kyoto.jp",
	"oyamazaki.kyoto.jp",
	"sakyo.kyoto.jp",
	"seika.kyoto.jp",
	"tanabe.kyoto.jp",
	"uji.kyoto.jp",
	"ujitawara.kyoto.jp",
	"wazuka.kyoto.jp",
	"yamashina.kyoto.jp",
	"yawata.kyoto.jp",
	"asahi.mie.jp",
	"inabe.mie.jp",
	"ise.mie.jp",
	"kameyama.mie.jp",
	"kawagoe.mie.jp",
	"kiho.mie.jp",
	"kisosaki.mie.jp",
	"kiwa.mie.jp",
	"komono.mie.jp",
	"kumano.mie.jp",
	"kuwana.mie.jp",
	"matsusaka.mie.jp",
	"meiwa.mie.jp",
	"mihama.mie.jp",
	"minamiise.mie.jp",
	"misugi.mie.jp",
	"miyama.mie.jp",
	"nabari.mie.jp",
	"shima.mie.jp",
	"suzuka.mie.jp",
	"tado.mie.jp",
	"taiki.mie.jp",
	"taki.mie.jp",
	"tamaki.mie.jp",
	"toba.mie.jp",
	"tsu.mie.jp",
	"udono.mie.jp",
	"ureshino.mie.jp",
	"watarai.mie.jp",
	"yokkaichi.mie.jp",
	"furukawa.miyagi.jp",
	"higashimatsushima.miyagi.jp",
	"ishinomaki.miyagi.jp",
	"iwanuma.miyagi.jp",
	"kakuda.miyagi.jp",
	"kami.miyagi.jp",
	"kawasaki.miyagi.jp",
	"marumori.miyagi.jp",
	"matsushima.miyagi.jp",
	"minamisanriku.miyagi.jp",
	"misato.miyagi.jp",
	"murata.miyagi.jp",
	"natori.miyagi.jp",
	"ogawara.miyagi.jp",
	"ohira.miyagi.jp",
	"onagawa.miyagi.jp",
	"osaki.miyagi.jp",
	"rifu.miyagi.jp",
	"semine.miyagi.jp",
	"shibata.miyagi.jp",
	"shichikashuku.miyagi.jp",
	"shikama.miyagi.jp",
	"shiogama.miyagi.jp",
	"shiroishi.miyagi.jp",
	"tagajo.miyagi.jp",
	"taiwa.miyagi.jp",
	"tome.miyagi.jp",
	"tomiya.miyagi.jp",
	"wakuya.miyagi.jp",
	"watari.miyagi.jp",
	"yamamoto.miyagi.jp",
	"zao.miyagi.jp",
	"aya.miyazaki.jp",
	"ebino.miyazaki.jp",
	"gokase.miyazaki.jp",
	"hyuga.miyazaki.jp",
	"kadogawa.miyazaki.jp",
	"kawaminami.miyazaki.jp",
	"kijo.miyazaki.jp",
	"kitagawa.miyazaki.jp",
	"kitakata.miyazaki.jp",
	"kitaura.miyazaki.jp",
	"kobayashi.miyazaki.jp",
	"kunitomi.miyazaki.jp",
	"kushima.miyazaki.jp",
	"mimata.miyazaki.jp",
	"miyakonojo.miyazaki.jp",
	"miyazaki.miyazaki.jp",
	"morotsuka.miyazaki.jp",
	"nichinan.miyazaki.jp",
	"nishimera.miyazaki.jp",
	"nobeoka.miyazaki.jp",
	"saito.miyazaki.jp",
	"shiiba.miyazaki.jp",
	"shintomi.miyazaki.jp",
	"takaharu.miyazaki.jp",
	"takanabe.miyazaki.jp",
	"takazaki.miyazaki.jp",
	"tsuno.miyazaki.jp",
	"achi.nagano.jp",
	"agematsu.nagano.jp",
	"anan.nagano.jp",
	"aoki.nagano.jp",
	"asahi.nagano.jp",
	"azumino.nagano.jp",
	"chikuhoku.nagano.jp",
	"chikuma.nagano.jp",
	"chino.nagano.jp",
	"fujimi.nagano.jp",
	"hakuba.nagano.jp",
	"hara.nagano.jp",
	"hiraya.nagano.jp",
	"iida.nagano.jp",
	"iijima.nagano.jp",
	"iiyama.nagano.jp",
	"iizuna.nagano.jp",
	"ikeda.nagano.jp",
	"ikusaka.nagano.jp",
	"ina.nagano.jp",
	"karuizawa.nagano.jp",
	"kawakami.nagano.jp",
	"kiso.nagano.jp",
	"kisofukushima.nagano.jp",
	"kitaaiki.nagano.jp",
	"komagane.nagano.jp",
	"komoro.nagano.jp",
	"matsukawa.nagano.jp",
	"matsumoto.nagano.jp",
	"miasa.nagano.jp",
	"minamiaiki.nagano.jp",
	"minamimaki.nagano.jp",
	"minamiminowa.nagano.jp",
	"minowa.nagano.jp",
	"miyada.nagano.jp",
	"miyota.nagano.jp",
	"mochizuki.nagano.jp",
	"nagano.nagano.jp",
	"nagawa.nagano.jp",
	"nagiso.nagano.jp",
	"nakagawa.nagano.jp",
	"nakano.nagano.jp",
	"nozawaonsen.nagano.jp",
	"obuse.nagano.jp",
	"ogawa.nagano.jp",
	"okaya.nagano.jp",
	"omachi.nagano.jp",
	"omi.nagano.jp",
	"ookuwa.nagano.jp",
	"ooshika.nagano.jp",
	"otaki.nagano.jp",
	"otari.nagano.jp",
	"sakae.nagano.jp",
	"sakaki.nagano.jp",
	"saku.nagano.jp",
	"sakuho.nagano.jp",
	"shimosuwa.nagano.jp",
	"shinanomachi.nagano.jp",
	"shiojiri.nagano.jp",
	"suwa.nagano.jp",
	"suzaka.nagano.jp",
	"takagi.nagano.jp",
	"takamori.nagano.jp",
	"takayama.nagano.jp",
	"tateshina.nagano.jp",
	"tatsuno.nagano.jp",
	"togakushi.nagano.jp",
	"togura.nagano.jp",
	"tomi.nagano.jp",
	"ueda.nagano.jp",
	"wada.nagano.jp",
	"yamagata.nagano.jp",
	"yamanouchi.nagano.jp",
	"yasaka.nagano.jp",
	"yasuoka.nagano.jp",
	"chijiwa.nagasaki.jp",
	"futsu.nagasaki.jp",
	"goto.nagasaki.jp",
	"hasami.nagasaki.jp",
	"hirado.nagasaki.jp",
	"iki.nagasaki.jp",
	"isahaya.nagasaki.jp",
	"kawatana.nagasaki.jp",
	"kuchinotsu.nagasaki.jp",
	"matsuura.nagasaki.jp",
	"nagasaki.nagasaki.jp",
	"obama.nagasaki.jp",
	"omura.nagasaki.jp",
	"oseto.nagasaki.jp",
	"saikai.nagasaki.jp",
	"sasebo.nagasaki.jp",
	"seihi.nagasaki.jp",
	"shimabara.nagasaki.jp",
	"shinkamigoto.nagasaki.jp",
	"togitsu.nagasaki.jp",
	"tsushima.nagasaki.jp",
	"unzen.nagasaki.jp",
	"ando.nara.jp",
	"gose.nara.jp",
	"heguri.nara.jp",
	"higashiyoshino.nara.jp",
	"ikaruga.nara.jp",
	"ikoma.nara.jp",
	"kamikitayama.nara.jp",
	"kanmaki.nara.jp",
	"kashiba.nara.jp",
	"kashihara.nara.jp",
	"katsuragi.nara.jp",
	"kawai.nara.jp",
	"kawakami.nara.jp",
	"kawanishi.nara.jp",
	"koryo.nara.jp",
	"kurotaki.nara.jp",
	"mitsue.nara.jp",
	"miyake.nara.jp",
	"nara.nara.jp",
	"nosegawa.nara.jp",
	"oji.nara.jp",
	"ouda.nara.jp",
	"oyodo.nara.jp",
	"sakurai.nara.jp",
	"sango.nara.jp",
	"shimoichi.nara.jp",
	"shimokitayama.nara.jp",
	"shinjo.nara.jp",
	"soni.nara.jp",
	"takatori.nara.jp",
	"tawaramoto.nara.jp",
	"tenkawa.nara.jp",
	"tenri.nara.jp",
	"uda.nara.jp",
	"yamatokoriyama.nara.jp",
	"yamatotakada.nara.jp",
	"yamazoe.nara.jp",
	"yoshino.nara.jp",
	"aga.niigata.jp",
	"agano.niigata.jp",
	"gosen.niigata.jp",
	"itoigawa.niigata.jp",
	"izumozaki.niigata.jp",
	"joetsu.niigata.jp",
	"kamo.niigata.jp",
	"kariwa.niigata.jp",
	"kashiwazaki.niigata.jp",
	"minamiuonuma.niigata.jp",
	"mitsuke.niigata.jp",
	"muika.niigata.jp",
	"murakami.niigata.jp",
	"myoko.niigata.jp",
	"nagaoka.niigata.jp",
	"niigata.niigata.jp",
	"ojiya.niigata.jp",
	"omi.niigata.jp",
	"sado.niigata.jp",
	"sanjo.niigata.jp",
	"seiro.niigata.jp",
	"seirou.niigata.jp",
	"sekikawa.niigata.jp",
	"shibata.niigata.jp",
	"tagami.niigata.jp",
	"tainai.niigata.jp",
	"tochio.niigata.jp",
	"tokamachi.niigata.jp",
	"tsubame.niigata.jp",
	"tsunan.niigata.jp",
	"uonuma.niigata.jp",
	"yahiko.niigata.jp",
	"yoita.niigata.jp",
	"yuzawa.niigata.jp",
	"beppu.oita.jp",
	"bungoono.oita.jp",
	"bungotakada.oita.jp",
	"hasama.oita.jp",
	"hiji.oita.jp",
	"himeshima.oita.jp",
	"hita.oita.jp",
	"kamitsue.oita.jp",
	"kokonoe.oita.jp",
	"kuju.oita.jp",
	"kunisaki.oita.jp",
	"kusu.oita.jp",
	"oita.oita.jp",
	"saiki.oita.jp",
	"taketa.oita.jp",
	"tsukumi.oita.jp",
	"usa.oita.jp",
	"usuki.oita.jp",
	"yufu.oita.jp",
	"akaiwa.okayama.jp",
	"asakuchi.okayama.jp",
	"bizen.okayama.jp",
	"hayashima.okayama.jp",
	"ibara.okayama.jp",
	"kagamino.okayama.jp",
	"kasaoka.okayama.jp",
	"kibichuo.okayama.jp",
	"kumenan.okayama.jp",
	"kurashiki.okayama.jp",
	"maniwa.okayama.jp",
	"misaki.okayama.jp",
	"nagi.okayama.jp",
	"niimi.okayama.jp",
	"nishiawakura.okayama.jp",
	"okayama.okayama.jp",
	"satosho.okayama.jp",
	"setouchi.okayama.jp",
	"shinjo.okayama.jp",
	"shoo.okayama.jp",
	"soja.okayama.jp",
	"takahashi.okayama.jp",
	"tamano.okayama.jp",
	"tsuyama.okayama.jp",
	"wake.okayama.jp",
	"yakage.okayama.jp",
	"aguni.okinawa.jp",
	"ginowan.okinawa.jp",
	"ginoza.okinawa.jp",
	"gushikami.okinawa.jp",
	"haebaru.okinawa.jp",
	"higashi.okinawa.jp",
	"hirara.okinawa.jp",
	"iheya.okinawa.jp",
	"ishigaki.okinawa.jp",
	"ishikawa.okinawa.jp",
	"itoman.okinawa.jp",
	"izena.okinawa.jp",
	"kadena.okinawa.jp",
	"kin.okinawa.jp",
	"kitadaito.okinawa.jp",
	"kitanakagusuku.okinawa.jp",
	"kumejima.okinawa.jp",
	"kunigami.okinawa.jp",
	"minamidaito.okinawa.jp",
	"motobu.okinawa.jp",
	"nago.okinawa.jp",
	"naha.okinawa.jp",
	"nakagusuku.okinawa.jp",
	"nakijin.okinawa.jp",
	"nanjo.okinawa.jp",
	"nishihara.okinawa.jp",
	"ogimi.okinawa.jp",
	"okinawa.okinawa.jp",
	"onna.okinawa.jp",
	"shimoji.okinawa.jp",
	"taketomi.okinawa.jp",
	"tarama.okinawa.jp",
	"tokashiki.okinawa.jp",
	"tomigusuku.okinawa.jp",
	"tonaki.okinawa.jp",
	"urasoe.okinawa.jp",
	"uruma.okinawa.jp",
	"yaese.okinawa.jp",
	"yomitan.okinawa.jp",
	"yonabaru.okinawa.jp",
	"yonaguni.okinawa.jp",
	"zamami.okinawa.jp",
	"abeno.osaka.jp",
	"chihayaakasaka.osaka.jp",
	"chuo.osaka.jp",
	"daito.osaka.jp",
	"fujiidera.osaka.jp",
	"habikino.osaka.jp",
	"hannan.osaka.jp",
	"higashiosaka.osaka.jp",
	"higashisumiyoshi.osaka.jp",
	"higashiyodogawa.osaka.jp",
	"hirakata.osaka.jp",
	"ibaraki.osaka.jp",
	"ikeda.osaka.jp",
	"izumi.osaka.jp",
	"izumiotsu.osaka.jp",
	"izumisano.osaka.jp",
	"kadoma.osaka.jp",
	"kaizuka.osaka.jp",
	"kanan.osaka.jp",
	"kashiwara.osaka.jp",
	"katano.osaka.jp",
	"kawachinagano.osaka.jp",
	"kishiwada.osaka.jp",
	"kita.osaka.jp",
	"kumatori.osaka.jp",
	"matsubara.osaka.jp",
	"minato.osaka.jp",
	"minoh.osaka.jp",
	"misaki.osaka.jp",
	"moriguchi.osaka.jp",
	"neyagawa.osaka.jp",
	"nishi.osaka.jp",
	"nose.osaka.jp",
	"osakasayama.osaka.jp",
	"sakai.osaka.jp",
	"sayama.osaka.jp",
	"sennan.osaka.jp",
	"settsu.osaka.jp",
	"shijonawate.osaka.jp",
	"shimamoto.osaka.jp",
	"suita.osaka.jp",
	"tadaoka.osaka.jp",
	"taishi.osaka.jp",
	"tajiri.osaka.jp",
	"takaishi.osaka.jp",
	"takatsuki.osaka.jp",
	"tondabayashi.osaka.jp",
	"toyonaka.osaka.jp",
	"toyono.osaka.jp",
	"yao.osaka.jp",
	"ariake.saga.jp",
	"arita.saga.jp",
	"fukudomi.saga.jp",
	"genkai.saga.jp",
	"hamatama.saga.jp",
	"hizen.saga.jp",
	"imari.saga.jp",
	"kamimine.saga.jp",
	"kanzaki.saga.jp",
	"karatsu.saga.jp",
	"kashima.saga.jp",
	"kitagata.saga.jp",
	"kitahata.saga.jp",
	"kiyama.saga.jp",
	"kouhoku.saga.jp",
	"kyuragi.saga.jp",
	"nishiarita.saga.jp",
	"ogi.saga.jp",
	"omachi.saga.jp",
	"ouchi.saga.jp",
	"saga.saga.jp",
	"shiroishi.saga.jp",
	"taku.saga.jp",
	"tara.saga.jp",
	"tosu.saga.jp",
	"yoshinogari.saga.jp",
	"arakawa.saitama.jp",
	"asaka.saitama.jp",
	"chichibu.saitama.jp",
	"fujimi.saitama.jp",
	"fujimino.saitama.jp",
	"fukaya.saitama.jp",
	"hanno.saitama.jp",
	"hanyu.saitama.jp",
	"hasuda.saitama.jp",
	"hatogaya.saitama.jp",
	"hatoyama.saitama.jp",
	"hidaka.saitama.jp",
	"higashichichibu.saitama.jp",
	"higashimatsuyama.saitama.jp",
	"honjo.saitama.jp",
	"ina.saitama.jp",
	"iruma.saitama.jp",
	"iwatsuki.saitama.jp",
	"kamiizumi.saitama.jp",
	"kamikawa.saitama.jp",
	"kamisato.saitama.jp",
	"kasukabe.saitama.jp",
	"kawagoe.saitama.jp",
	"kawaguchi.saitama.jp",
	"kawajima.saitama.jp",
	"kazo.saitama.jp",
	"kitamoto.saitama.jp",
	"koshigaya.saitama.jp",
	"kounosu.saitama.jp",
	"kuki.saitama.jp",
	"kumagaya.saitama.jp",
	"matsubushi.saitama.jp",
	"minano.saitama.jp",
	"misato.saitama.jp",
	"miyashiro.saitama.jp",
	"miyoshi.saitama.jp",
	"moroyama.saitama.jp",
	"nagatoro.saitama.jp",
	"namegawa.saitama.jp",
	"niiza.saitama.jp",
	"ogano.saitama.jp",
	"ogawa.saitama.jp",
	"ogose.saitama.jp",
	"okegawa.saitama.jp",
	"omiya.saitama.jp",
	"otaki.saitama.jp",
	"ranzan.saitama.jp",
	"ryokami.saitama.jp",
	"saitama.saitama.jp",
	"sakado.saitama.jp",
	"satte.saitama.jp",
	"sayama.saitama.jp",
	"shiki.saitama.jp",
	"shiraoka.saitama.jp",
	"soka.saitama.jp",
	"sugito.saitama.jp",
	"toda.saitama.jp",
	"tokigawa.saitama.jp",
	"tokorozawa.saitama.jp",
	"tsurugashima.saitama.jp",
	"urawa.saitama.jp",
	"warabi.saitama.jp",
	"yashio.saitama.jp",
	"yokoze.saitama.jp",
	"yono.saitama.jp",
	"yorii.saitama.jp",
	"yoshida.saitama.jp",
	"yoshikawa.saitama.jp",
	"yoshimi.saitama.jp",
	"aisho.shiga.jp",
	"gamo.shiga.jp",
	"higashiomi.shiga.jp",
	"hikone.shiga.jp",
	"koka.shiga.jp",
	"konan.shiga.jp",
	"kosei.shiga.jp",
	"koto.shiga.jp",
	"kusatsu.shiga.jp",
	"maibara.shiga.jp",
	"moriyama.shiga.jp",
	"nagahama.shiga.jp",
	"nishiazai.shiga.jp",
	"notogawa.shiga.jp",
	"omihachiman.shiga.jp",
	"otsu.shiga.jp",
	"ritto.shiga.jp",
	"ryuoh.shiga.jp",
	"takashima.shiga.jp",
	"takatsuki.shiga.jp",
	"torahime.shiga.jp",
	"toyosato.shiga.jp",
	"yasu.shiga.jp",
	"akagi.shimane.jp",
	"ama.shimane.jp",
	"gotsu.shimane.jp",
	"hamada.shimane.jp",
	"higashiizumo.shimane.jp",
	"hikawa.shimane.jp",
	"hikimi.shimane.jp",
	"izumo.shimane.jp",
	"kakinoki.shimane.jp",
	"masuda.shimane.jp",
	"matsue.shimane.jp",
	"misato.shimane.jp",
	"nishinoshima.shimane.jp",
	"ohda.shimane.jp",
	"okinoshima.shimane.jp",
	"okuizumo.shimane.jp",
	"shimane.shimane.jp",
	"tamayu.shimane.jp",
	"tsuwano.shimane.jp",
	"unnan.shimane.jp",
	"yakumo.shimane.jp",
	"yasugi.shimane.jp",
	"yatsuka.shimane.jp",
	"arai.shizuoka.jp",
	"atami.shizuoka.jp",
	"fuji.shizuoka.jp",
	"fujieda.shizuoka.jp",
	"fujikawa.shizuoka.jp",
	"fujinomiya.shizuoka.jp",
	"fukuroi.shizuoka.jp",
	"gotemba.shizuoka.jp",
	"haibara.shizuoka.jp",
	"hamamatsu.shizuoka.jp",
	"higashiizu.shizuoka.jp",
	"ito.shizuoka.jp",
	"iwata.shizuoka.jp",
	"izu.shizuoka.jp",
	"izunokuni.shizuoka.jp",
	"kakegawa.shizuoka.jp",
	"kannami.shizuoka.jp",
	"kawanehon.shizuoka.jp",
	"kawazu.shizuoka.jp",
	"kikugawa.shizuoka.jp",
	"kosai.shizuoka.jp",
	"makinohara.shizuoka.jp",
	"matsuzaki.shizuoka.jp",
	"minamiizu.shizuoka.jp",
	"mishima.shizuoka.jp",
	"morimachi.shizuoka.jp",
	"nishiizu.shizuoka.jp",
	"numazu.shizuoka.jp",
	"omaezaki.shizuoka.jp",
	"shimada.shizuoka.jp",
	"shimizu.shizuoka.jp",
	"shimoda.shizuoka.jp",
	"shizuoka.shizuoka.jp",
	"susono.shizuoka.jp",
	"yaizu.shizuoka.jp",
	"yoshida.shizuoka.jp",
	"ashikaga.tochigi.jp",
	"bato.tochigi.jp",
	"haga.tochigi.jp",
	"ichikai.tochigi.jp",
	"iwafune.tochigi.jp",
	"kaminokawa.tochigi.jp",
	"kanuma.tochigi.jp",
	"karasuyama.tochigi.jp",
	"kuroiso.tochigi.jp",
	"mashiko.tochigi.jp",
	"mibu.tochigi.jp",
	"moka.tochigi.jp",
	"motegi.tochigi.jp",
	"nasu.tochigi.jp",
	"nasushiobara.tochigi.jp",
	"nikko.tochigi.jp",
	"nishikata.tochigi.jp",
	"nogi.tochigi.jp",
	"ohira.tochigi.jp",
	"ohtawara.tochigi.jp",
	"oyama.tochigi.jp",
	"sakura.tochigi.jp",
	"sano.tochigi.jp",
	"shimotsuke.tochigi.jp",
	"shioya.tochigi.jp",
	"takanezawa.tochigi.jp",
	"tochigi.tochigi.jp",
	"tsuga.tochigi.jp",
	"ujiie.tochigi.jp",
	"utsunomiya.tochigi.jp",
	"yaita.tochigi.jp",
	"aizumi.tokushima.jp",
	"anan.tokushima.jp",
	"ichiba.tokushima.jp",
	"itano.tokushima.jp",
	"kainan.tokushima.jp",
	"komatsushima.tokushima.jp",
	"matsushige.tokushima.jp",
	"mima.tokushima.jp",
	"minami.tokushima.jp",
	"miyoshi.tokushima.jp",
	"mugi.tokushima.jp",
	"nakagawa.tokushima.jp",
	"naruto.tokushima.jp",
	"sanagochi.tokushima.jp",
	"shishikui.tokushima.jp",
	"tokushima.tokushima.jp",
	"wajiki.tokushima.jp",
	"adachi.tokyo.jp",
	"akiruno.tokyo.jp",
	"akishima.tokyo.jp",
	"aogashima.tokyo.jp",
	"arakawa.tokyo.jp",
	"bunkyo.tokyo.jp",
	"chiyoda.tokyo.jp",
	"chofu.tokyo.jp",
	"chuo.tokyo.jp",
	"edogawa.tokyo.jp",
	"fuchu.tokyo.jp",
	"fussa.tokyo.jp",
	"hachijo.tokyo.jp",
	"hachioji.tokyo.jp",
	"hamura.tokyo.jp",
	"higashikurume.tokyo.jp",
	"higashimurayama.tokyo.jp",
	"higashiyamato.tokyo.jp",
	"hino.tokyo.jp",
	"hinode.tokyo.jp",
	"hinohara.tokyo.jp",
	"inagi.tokyo.jp",
	"itabashi.tokyo.jp",
	"katsushika.tokyo.jp",
	"kita.tokyo.jp",
	"kiyose.tokyo.jp",
	"kodaira.tokyo.jp",
	"koganei.tokyo.jp",
	"kokubunji.tokyo.jp",
	"komae.tokyo.jp",
	"koto.tokyo.jp",
	"kouzushima.tokyo.jp",
	"kunitachi.tokyo.jp",
	"machida.tokyo.jp",
	"meguro.tokyo.jp",
	"minato.tokyo.jp",
	"mitaka.tokyo.jp",
	"mizuho.tokyo.jp",
	"musashimurayama.tokyo.jp",
	"musashino.tokyo.jp",
	"nakano.tokyo.jp",
	"nerima.tokyo.jp",
	"ogasawara.tokyo.jp",
	"okutama.tokyo.jp",
	"ome.tokyo.jp",
	"oshima.tokyo.jp",
	"ota.tokyo.jp",
	"setagaya.tokyo.jp",
	"shibuya.tokyo.jp",
	"shinagawa.tokyo.jp",
	"shinjuku.tokyo.jp",
	"suginami.tokyo.jp",
	"sumida.tokyo.jp",
	"tachikawa.tokyo.jp",
	"taito.tokyo.jp",
	"tama.tokyo.jp",
	"toshima.tokyo.jp",
	"chizu.tottori.jp",
	"hino.tottori.jp",
	"kawahara.tottori.jp",
	"koge.tottori.jp",
	"kotoura.tottori.jp",
	"misasa.tottori.jp",
	"nanbu.tottori.jp",
	"nichinan.tottori.jp",
	"sakaiminato.tottori.jp",
	"tottori.tottori.jp",
	"wakasa.tottori.jp",
	"yazu.tottori.jp",
	"yonago.tottori.jp",
	"asahi.toyama.jp",
	"fuchu.toyama.jp",
	"fukumitsu.toyama.jp",
	"funahashi.toyama.jp",
	"himi.toyama.jp",
	"imizu.toyama.jp",
	"inami.toyama.jp",
	"johana.toyama.jp",
	"kamiichi.toyama.jp",
	"kurobe.toyama.jp",
	"nakaniikawa.toyama.jp",
	"namerikawa.toyama.jp",
	"nanto.toyama.jp",
	"nyuzen.toyama.jp",
	"oyabe.toyama.jp",
	"taira.toyama.jp",
	"takaoka.toyama.jp",
	"tateyama.toyama.jp",
	"toga.toyama.jp",
	"tonami.toyama.jp",
	"toyama.toyama.jp",
	"unazuki.toyama.jp",
	"uozu.toyama.jp",
	"yamada.toyama.jp",
	"arida.wakayama.jp",
	"aridagawa.wakayama.jp",
	"gobo.wakayama.jp",
	"hashimoto.wakayama.jp",
	"hidaka.wakayama.jp",
	"hirogawa.wakayama.jp",
	"inami.wakayama.jp",
	"iwade.wakayama.jp",
	"kainan.wakayama.jp",
	"kamitonda.wakayama.jp",
	"katsuragi.wakayama.jp",
	"kimino.wakayama.jp",
	"kinokawa.wakayama.jp",
	"kitayama.wakayama.jp",
	"koya.wakayama.jp",
	"koza.wakayama.jp",
	"kozagawa.wakayama.jp",
	"kudoyama.wakayama.jp",
	"kushimoto.wakayama.jp",
	"mihama.wakayama.jp",
	"misato.wakayama.jp",
	"nachikatsuura.wakayama.jp",
	"shingu.wakayama.jp",
	"shirahama.wakayama.jp",
	"taiji.wakayama.jp",
	"tanabe.wakayama.jp",
	"wakayama.wakayama.jp",
	"yuasa.wakayama.jp",
	"yura.wakayama.jp",
	"asahi.yamagata.jp",
	"funagata.yamagata.jp",
	"higashine.yamagata.jp",
	"iide.yamagata.jp",
	"kahoku.yamagata.jp",
	"kaminoyama.yamagata.jp",
	"kaneyama.yamagata.jp",
	"kawanishi.yamagata.jp",
	"mamurogawa.yamagata.jp",
	"mikawa.yamagata.jp",
	"murayama.yamagata.jp",
	"nagai.yamagata.jp",
	"nakayama.yamagata.jp",
	"nanyo.yamagata.jp",
	"nishikawa.yamagata.jp",
	"obanazawa.yamagata.jp",
	"oe.yamagata.jp",
	"oguni.yamagata.jp",
	"ohkura.yamagata.jp",
	"oishida.yamagata.jp",
	"sagae.yamagata.jp",
	"sakata.yamagata.jp",
	"sakegawa.yamagata.jp",
	"shinjo.yamagata.jp",
	"shirataka.yamagata.jp",
	"shonai.yamagata.jp",
	"takahata.yamagata.jp",
	"tendo.yamagata.jp",
	"tozawa.yamagata.jp",
	"tsuruoka.yamagata.jp",
	"yamagata.yamagata.jp",
	"yamanobe.yamagata.jp",
	"yonezawa.yamagata.jp",
	"yuza.yamagata.jp",
	"abu.yamaguchi.jp",
	"hagi.yamaguchi.jp",
	"hikari.yamaguchi.jp",
	"hofu.yamaguchi.jp",
	"iwakuni.yamaguchi.jp",
	"kudamatsu.yamaguchi.jp",
	"mitou.yamaguchi.jp",
	"nagato.yamaguchi.jp",
	"oshima.yamaguchi.jp",
	"shimonoseki.yamaguchi.jp",
	"shunan.yamaguchi.jp",
	"tabuse.yamaguchi.jp",
	"tokuyama.yamaguchi.jp",
	"toyota.yamaguchi.jp",
	"ube.yamaguchi.jp",
	"yuu.yamaguchi.jp",
	"chuo.yamanashi.jp",
	"doshi.yamanashi.jp",
	"fuefuki.yamanashi.jp",
	"fujikawa.yamanashi.jp",
	"fujikawaguchiko.yamanashi.jp",
	"fujiyoshida.yamanashi.jp",
	"hayakawa.yamanashi.jp",
	"hokuto.yamanashi.jp",
	"ichikawamisato.yamanashi.jp",
	"kai.yamanashi.jp",
	"kofu.yamanashi.jp",
	"koshu.yamanashi.jp",
	"kosuge.yamanashi.jp",
	"minami-alps.yamanashi.jp",
	"minobu.yamanashi.jp",
	"nakamichi.yamanashi.jp",
	"nanbu.yamanashi.jp",
	"narusawa.yamanashi.jp",
	"nirasaki.yamanashi.jp",
	"nishikatsura.yamanashi.jp",
	"oshino.yamanashi.jp",
	"otsuki.yamanashi.jp",
	"showa.yamanashi.jp",
	"tabayama.yamanashi.jp",
	"tsuru.yamanashi.jp",
	"uenohara.yamanashi.jp",
	"yamanakako.yamanashi.jp",
	"yamanashi.yamanashi.jp",
	"*.ke",
	"kg",
	"org.kg",
	"net.kg",
	"com.kg",
	"edu.kg",
	"gov.kg",
	"mil.kg",
	"*.kh",
	"ki",
	"edu.ki",
	"biz.ki",
	"net.ki",
	"org.ki",
	"gov.ki",
	"info.ki",
	"com.ki",
	"km",
	"org.km",
	"nom.km",
	"gov.km",
	"prd.km",
	"tm.km",
	"edu.km",
	"mil.km",
	"ass.km",
	"com.km",
	"coop.km",
	"asso.km",
	"presse.km",
	"medecin.km",
	"notaires.km",
	"pharmaciens.km",
	"veterinaire.km",
	"gouv.km",
	"kn",
	"net.kn",
	"org.kn",
	"edu.kn",
	"gov.kn",
	"kp",
	"com.kp",
	"edu.kp",
	"gov.kp",
	"org.kp",
	"rep.kp",
	"tra.kp",
	"kr",
	"ac.kr",
	"co.kr",
	"es.kr",
	"go.kr",
	"hs.kr",
	"kg.kr",
	"mil.kr",
	"ms.kr",
	"ne.kr",
	"or.kr",
	"pe.kr",
	"re.kr",
	"sc.kr",
	"busan.kr",
	"chungbuk.kr",
	"chungnam.kr",
	"daegu.kr",
	"daejeon.kr",
	"gangwon.kr",
	"gwangju.kr",
	"gyeongbuk.kr",
	"gyeonggi.kr",
	"gyeongnam.kr",
	"incheon.kr",
	"jeju.kr",
	"jeonbuk.kr",
	"jeonnam.kr",
	"seoul.kr",
	"ulsan.kr",
	"*.kw",
	"ky",
	"edu.ky",
	"gov.ky",
	"com.ky",
	"org.ky",
	"net.ky",
	"kz",
	"org.kz",
	"edu.kz",
	"net.kz",
	"gov.kz",
	"mil.kz",
	"com.kz",
	"la",
	"int.la",
	"net.la",
	"info.la",
	"edu.la",
	"gov.la",
	"per.la",
	"com.la",
	"org.la",
	"lb",
	"com.lb",
	"edu.lb",
	"gov.lb",
	"net.lb",
	"org.lb",
	"lc",
	"com.lc",
	"net.lc",
	"co.lc",
	"org.lc",
	"edu.lc",
	"gov.lc",
	"li",
	"lk",
	"gov.lk",
	"sch.lk",
	"net.lk",
	"int.lk",
	"com.lk",
	"org.lk",
	"edu.lk",
	"ngo.lk",
	"soc.lk",
	"web.lk",
	"ltd.lk",
	"assn.lk",
	"grp.lk",
	"hotel.lk",
	"ac.lk",
	"lr",
	"com.lr",
	"edu.lr",
	"gov.lr",
	"org.lr",
	"net.lr",
	"ls",
	"co.ls",
	"org.ls",
	"lt",
	"gov.lt",
	"lu",
	"lv",
	"com.lv",
	"edu.lv",
	"gov.lv",
	"org.lv",
	"mil.lv",
	"id.lv",
	"net.lv",
	"asn.lv",
	"conf.lv",
	"ly",
	"com.ly",
	"net.ly",
	"gov.ly",
	"plc.ly",
	"edu.ly",
	"sch.ly",
	"med.ly",
	"org.ly",
	"id.ly",
	"ma",
	"co.ma",
	"net.ma",
	"gov.ma",
	"org.ma",
	"ac.ma",
	"press.ma",
	"mc",
	"tm.mc",
	"asso.mc",
	"md",
	"me",
	"co.me",
	"net.me",
	"org.me",
	"edu.me",
	"ac.me",
	"gov.me",
	"its.me",
	"priv.me",
	"mg",
	"org.mg",
	"nom.mg",
	"gov.mg",
	"prd.mg",
	"tm.mg",
	"edu.mg",
	"mil.mg",
	"com.mg",
	"co.mg",
	"mh",
	"mil",
	"mk",
	"com.mk",
	"org.mk",
	"net.mk",
	"edu.mk",
	"gov.mk",
	"inf.mk",
	"name.mk",
	"ml",
	"com.ml",
	"edu.ml",
	"gouv.ml",
	"gov.ml",
	"net.ml",
	"org.ml",
	"presse.ml",
	"*.mm",
	"mn",
	"gov.mn",
	"edu.mn",
	"org.mn",
	"mo",
	"com.mo",
	"net.mo",
	"org.mo",
	"edu.mo",
	"gov.mo",
	"mobi",
	"mp",
	"mq",
	"mr",
	"gov.mr",
	"ms",
	"com.ms",
	"edu.ms",
	"gov.ms",
	"net.ms",
	"org.ms",
	"mt",
	"com.mt",
	"edu.mt",
	"net.mt",
	"org.mt",
	"mu",
	"com.mu",
	"net.mu",
	"org.mu",
	"gov.mu",
	"ac.mu",
	"co.mu",
	"or.mu",
	"museum",
	"academy.museum",
	"agriculture.museum",
	"air.museum",
	"airguard.museum",
	"alabama.museum",
	"alaska.museum",
	"amber.museum",
	"ambulance.museum",
	"american.museum",
	"americana.museum",
	"americanantiques.museum",
	"americanart.museum",
	"amsterdam.museum",
	"and.museum",
	"annefrank.museum",
	"anthro.museum",
	"anthropology.museum",
	"antiques.museum",
	"aquarium.museum",
	"arboretum.museum",
	"archaeological.museum",
	"archaeology.museum",
	"architecture.museum",
	"art.museum",
	"artanddesign.museum",
	"artcenter.museum",
	"artdeco.museum",
	"arteducation.museum",
	"artgallery.museum",
	"arts.museum",
	"artsandcrafts.museum",
	"asmatart.museum",
	"assassination.museum",
	"assisi.museum",
	"association.museum",
	"astronomy.museum",
	"atlanta.museum",
	"austin.museum",
	"australia.museum",
	"automotive.museum",
	"aviation.museum",
	"axis.museum",
	"badajoz.museum",
	"baghdad.museum",
	"bahn.museum",
	"bale.museum",
	"baltimore.museum",
	"barcelona.museum",
	"baseball.museum",
	"basel.museum",
	"baths.museum",
	"bauern.museum",
	"beauxarts.museum",
	"beeldengeluid.museum",
	"bellevue.museum",
	"bergbau.museum",
	"berkeley.museum",
	"berlin.museum",
	"bern.museum",
	"bible.museum",
	"bilbao.museum",
	"bill.museum",
	"birdart.museum",
	"birthplace.museum",
	"bonn.museum",
	"boston.museum",
	"botanical.museum",
	"botanicalgarden.museum",
	"botanicgarden.museum",
	"botany.museum",
	"brandywinevalley.museum",
	"brasil.museum",
	"bristol.museum",
	"british.museum",
	"britishcolumbia.museum",
	"broadcast.museum",
	"brunel.museum",
	"brussel.museum",
	"brussels.museum",
	"bruxelles.museum",
	"building.museum",
	"burghof.museum",
	"bus.museum",
	"bushey.museum",
	"cadaques.museum",
	"california.museum",
	"cambridge.museum",
	"can.museum",
	"canada.museum",
	"capebreton.museum",
	"carrier.museum",
	"cartoonart.museum",
	"casadelamoneda.museum",
	"castle.museum",
	"castres.museum",
	"celtic.museum",
	"center.museum",
	"chattanooga.museum",
	"cheltenham.museum",
	"chesapeakebay.museum",
	"chicago.museum",
	"children.museum",
	"childrens.museum",
	"childrensgarden.museum",
	"chiropractic.museum",
	"chocolate.museum",
	"christiansburg.museum",
	"cincinnati.museum",
	"cinema.museum",
	"circus.museum",
	"civilisation.museum",
	"civilization.museum",
	"civilwar.museum",
	"clinton.museum",
	"clock.museum",
	"coal.museum",
	"coastaldefence.museum",
	"cody.museum",
	"coldwar.museum",
	"collection.museum",
	"colonialwilliamsburg.museum",
	"coloradoplateau.museum",
	"columbia.museum",
	"columbus.museum",
	"communication.museum",
	"communications.museum",
	"community.museum",
	"computer.museum",
	"computerhistory.museum",
	"comunicações.museum",
	"contemporary.museum",
	"contemporaryart.museum",
	"convent.museum",
	"copenhagen.museum",
	"corporation.museum",
	"correios-e-telecomunicações.museum",
	"corvette.museum",
	"costume.museum",
	"countryestate.museum",
	"county.museum",
	"crafts.museum",
	"cranbrook.museum",
	"creation.museum",
	"cultural.museum",
	"culturalcenter.museum",
	"culture.museum",
	"cyber.museum",
	"cymru.museum",
	"dali.museum",
	"dallas.museum",
	"database.museum",
	"ddr.museum",
	"decorativearts.museum",
	"delaware.museum",
	"delmenhorst.museum",
	"denmark.museum",
	"depot.museum",
	"design.museum",
	"detroit.museum",
	"dinosaur.museum",
	"discovery.museum",
	"dolls.museum",
	"donostia.museum",
	"durham.museum",
	"eastafrica.museum",
	"eastcoast.museum",
	"education.museum",
	"educational.museum",
	"egyptian.museum",
	"eisenbahn.museum",
	"elburg.museum",
	"elvendrell.museum",
	"embroidery.museum",
	"encyclopedic.museum",
	"england.museum",
	"entomology.museum",
	"environment.museum",
	"environmentalconservation.museum",
	"epilepsy.museum",
	"essex.museum",
	"estate.museum",
	"ethnology.museum",
	"exeter.museum",
	"exhibition.museum",
	"family.museum",
	"farm.museum",
	"farmequipment.museum",
	"farmers.museum",
	"farmstead.museum",
	"field.museum",
	"figueres.museum",
	"filatelia.museum",
	"film.museum",
	"fineart.museum",
	"finearts.museum",
	"finland.museum",
	"flanders.museum",
	"florida.museum",
	"force.museum",
	"fortmissoula.museum",
	"fortworth.museum",
	"foundation.museum",
	"francaise.museum",
	"frankfurt.museum",
	"franziskaner.museum",
	"freemasonry.museum",
	"freiburg.museum",
	"fribourg.museum",
	"frog.museum",
	"fundacio.museum",
	"furniture.museum",
	"gallery.museum",
	"garden.museum",
	"gateway.museum",
	"geelvinck.museum",
	"gemological.museum",
	"geology.museum",
	"georgia.museum",
	"giessen.museum",
	"glas.museum",
	"glass.museum",
	"gorge.museum",
	"grandrapids.museum",
	"graz.museum",
	"guernsey.museum",
	"halloffame.museum",
	"hamburg.museum",
	"handson.museum",
	"harvestcelebration.museum",
	"hawaii.museum",
	"health.museum",
	"heimatunduhren.museum",
	"hellas.museum",
	"helsinki.museum",
	"hembygdsforbund.museum",
	"heritage.museum",
	"histoire.museum",
	"historical.museum",
	"historicalsociety.museum",
	"historichouses.museum",
	"historisch.museum",
	"historisches.museum",
	"history.museum",
	"historyofscience.museum",
	"horology.museum",
	"house.museum",
	"humanities.museum",
	"illustration.museum",
	"imageandsound.museum",
	"indian.museum",
	"indiana.museum",
	"indianapolis.museum",
	"indianmarket.museum",
	"intelligence.museum",
	"interactive.museum",
	"iraq.museum",
	"iron.museum",
	"isleofman.museum",
	"jamison.museum",
	"jefferson.museum",
	"jerusalem.museum",
	"jewelry.museum",
	"jewish.museum",
	"jewishart.museum",
	"jfk.museum",
	"journalism.museum",
	"judaica.museum",
	"judygarland.museum",
	"juedisches.museum",
	"juif.museum",
	"karate.museum",
	"karikatur.museum",
	"kids.museum",
	"koebenhavn.museum",
	"koeln.museum",
	"kunst.museum",
	"kunstsammlung.museum",
	"kunstunddesign.museum",
	"labor.museum",
	"labour.museum",
	"lajolla.museum",
	"lancashire.museum",
	"landes.museum",
	"lans.museum",
	"läns.museum",
	"larsson.museum",
	"lewismiller.museum",
	"lincoln.museum",
	"linz.museum",
	"living.museum",
	"livinghistory.museum",
	"localhistory.museum",
	"london.museum",
	"losangeles.museum",
	"louvre.museum",
	"loyalist.museum",
	"lucerne.museum",
	"luxembourg.museum",
	"luzern.museum",
	"mad.museum",
	"madrid.museum",
	"mallorca.museum",
	"manchester.museum",
	"mansion.museum",
	"mansions.museum",
	"manx.museum",
	"marburg.museum",
	"maritime.museum",
	"maritimo.museum",
	"maryland.museum",
	"marylhurst.museum",
	"media.museum",
	"medical.museum",
	"medizinhistorisches.museum",
	"meeres.museum",
	"memorial.museum",
	"mesaverde.museum",
	"michigan.museum",
	"midatlantic.museum",
	"military.museum",
	"mill.museum",
	"miners.museum",
	"mining.museum",
	"minnesota.museum",
	"missile.museum",
	"missoula.museum",
	"modern.museum",
	"moma.museum",
	"money.museum",
	"monmouth.museum",
	"monticello.museum",
	"montreal.museum",
	"moscow.museum",
	"motorcycle.museum",
	"muenchen.museum",
	"muenster.museum",
	"mulhouse.museum",
	"muncie.museum",
	"museet.museum",
	"museumcenter.museum",
	"museumvereniging.museum",
	"music.museum",
	"national.museum",
	"nationalfirearms.museum",
	"nationalheritage.museum",
	"nativeamerican.museum",
	"naturalhistory.museum",
	"naturalhistorymuseum.museum",
	"naturalsciences.museum",
	"nature.museum",
	"naturhistorisches.museum",
	"natuurwetenschappen.museum",
	"naumburg.museum",
	"naval.museum",
	"nebraska.museum",
	"neues.museum",
	"newhampshire.museum",
	"newjersey.museum",
	"newmexico.museum",
	"newport.museum",
	"newspaper.museum",
	"newyork.museum",
	"niepce.museum",
	"norfolk.museum",
	"north.museum",
	"nrw.museum",
	"nuernberg.museum",
	"nuremberg.museum",
	"nyc.museum",
	"nyny.museum",
	"oceanographic.museum",
	"oceanographique.museum",
	"omaha.museum",
	"online.museum",
	"ontario.museum",
	"openair.museum",
	"oregon.museum",
	"oregontrail.museum",
	"otago.museum",
	"oxford.museum",
	"pacific.museum",
	"paderborn.museum",
	"palace.museum",
	"paleo.museum",
	"palmsprings.museum",
	"panama.museum",
	"paris.museum",
	"pasadena.museum",
	"pharmacy.museum",
	"philadelphia.museum",
	"philadelphiaarea.museum",
	"philately.museum",
	"phoenix.museum",
	"photography.museum",
	"pilots.museum",
	"pittsburgh.museum",
	"planetarium.museum",
	"plantation.museum",
	"plants.museum",
	"plaza.museum",
	"portal.museum",
	"portland.museum",
	"portlligat.museum",
	"posts-and-telecommunications.museum",
	"preservation.museum",
	"presidio.museum",
	"press.museum",
	"project.museum",
	"public.museum",
	"pubol.museum",
	"quebec.museum",
	"railroad.museum",
	"railway.museum",
	"research.museum",
	"resistance.museum",
	"riodejaneiro.museum",
	"rochester.museum",
	"rockart.museum",
	"roma.museum",
	"russia.museum",
	"saintlouis.museum",
	"salem.museum",
	"salvadordali.museum",
	"salzburg.museum",
	"sandiego.museum",
	"sanfrancisco.museum",
	"santabarbara.museum",
	"santacruz.museum",
	"santafe.museum",
	"saskatchewan.museum",
	"satx.museum",
	"savannahga.museum",
	"schlesisches.museum",
	"schoenbrunn.museum",
	"schokoladen.museum",
	"school.museum",
	"schweiz.museum",
	"science.museum",
	"scienceandhistory.museum",
	"scienceandindustry.museum",
	"sciencecenter.museum",
	"sciencecenters.museum",
	"science-fiction.museum",
	"sciencehistory.museum",
	"sciences.museum",
	"sciencesnaturelles.museum",
	"scotland.museum",
	"seaport.museum",
	"settlement.museum",
	"settlers.museum",
	"shell.museum",
	"sherbrooke.museum",
	"sibenik.museum",
	"silk.museum",
	"ski.museum",
	"skole.museum",
	"society.museum",
	"sologne.museum",
	"soundandvision.museum",
	"southcarolina.museum",
	"southwest.museum",
	"space.museum",
	"spy.museum",
	"square.museum",
	"stadt.museum",
	"stalbans.museum",
	"starnberg.museum",
	"state.museum",
	"stateofdelaware.museum",
	"station.museum",
	"steam.museum",
	"steiermark.museum",
	"stjohn.museum",
	"stockholm.museum",
	"stpetersburg.museum",
	"stuttgart.museum",
	"suisse.museum",
	"surgeonshall.museum",
	"surrey.museum",
	"svizzera.museum",
	"sweden.museum",
	"sydney.museum",
	"tank.museum",
	"tcm.museum",
	"technology.museum",
	"telekommunikation.museum",
	"television.museum",
	"texas.museum",
	"textile.museum",
	"theater.museum",
	"time.museum",
	"timekeeping.museum",
	"topology.museum",
	"torino.museum",
	"touch.museum",
	"town.museum",
	"transport.museum",
	"tree.museum",
	"trolley.museum",
	"trust.museum",
	"trustee.museum",
	"uhren.museum",
	"ulm.museum",
	"undersea.museum",
	"university.museum",
	"usa.museum",
	"usantiques.museum",
	"usarts.museum",
	"uscountryestate.museum",
	"usculture.museum",
	"usdecorativearts.museum",
	"usgarden.museum",
	"ushistory.museum",
	"ushuaia.museum",
	"uslivinghistory.museum",
	"utah.museum",
	"uvic.museum",
	"valley.museum",
	"vantaa.museum",
	"versailles.museum",
	"viking.museum",
	"village.museum",
	"virginia.museum",
	"virtual.museum",
	"virtuel.museum",
	"vlaanderen.museum",
	"volkenkunde.museum",
	"wales.museum",
	"wallonie.museum",
	"war.museum",
	"washingtondc.museum",
	"watchandclock.museum",
	"watch-and-clock.museum",
	"western.museum",
	"westfalen.museum",
	"whaling.museum",
	"wildlife.museum",
	"williamsburg.museum",
	"windmill.museum",
	"workshop.museum",
	"york.museum",
	"yorkshire.museum",
	"yosemite.museum",
	"youth.museum",
	"zoological.museum",
	"zoology.museum",
	"ירושלים.museum",
	"иком.museum",
	"mv",
	"aero.mv",
	"biz.mv",
	"com.mv",
	"coop.mv",
	"edu.mv",
	"gov.mv",
	"info.mv",
	"int.mv",
	"mil.mv",
	"museum.mv",
	"name.mv",
	"net.mv",
	"org.mv",
	"pro.mv",
	"mw",
	"ac.mw",
	"biz.mw",
	"co.mw",
	"com.mw",
	"coop.mw",
	"edu.mw",
	"gov.mw",
	"int.mw",
	"museum.mw",
	"net.mw",
	"org.mw",
	"mx",
	"com.mx",
	"org.mx",
	"gob.mx",
	"edu.mx",
	"net.mx",
	"my",
	"com.my",
	"net.my",
	"org.my",
	"gov.my",
	"edu.my",
	"mil.my",
	"name.my",
	"mz",
	"ac.mz",
	"adv.mz",
	"co.mz",
	"edu.mz",
	"gov.mz",
	"mil.mz",
	"net.mz",
	"org.mz",
	"na",
	"info.na",
	"pro.na",
	"name.na",
	"school.na",
	"or.na",
	"dr.na",
	"us.na",
	"mx.na",
	"ca.na",
	"in.na",
	"cc.na",
	"tv.na",
	"ws.na",
	"mobi.na",
	"co.na",
	"com.na",
	"org.na",
	"name",
	"nc",
	"asso.nc",
	"ne",
	"net",
	"nf",
	"com.nf",
	"net.nf",
	"per.nf",
	"rec.nf",
	"web.nf",
	"arts.nf",
	"firm.nf",
	"info.nf",
	"other.nf",
	"store.nf",
	"ng",
	"com.ng",
	"edu.ng",
	"gov.ng",
	"i.ng",
	"mil.ng",
	"mobi.ng",
	"name.ng",
	"net.ng",
	"org.ng",
	"sch.ng",
	"ni",
	"ac.ni",
	"biz.ni",
	"co.ni",
	"com.ni",
	"edu.ni",
	"gob.ni",
	"in.ni",
	"info.ni",
	"int.ni",
	"mil.ni",
	"net.ni",
	"nom.ni",
	"org.ni",
	"web.ni",
	"nl",
	"bv.nl",
	"no",
	"fhs.no",
	"vgs.no",
	"fylkesbibl.no",
	"folkebibl.no",
	"museum.no",
	"idrett.no",
	"priv.no",
	"mil.no",
	"stat.no",
	"dep.no",
	"kommune.no",
	"herad.no",
	"aa.no",
	"ah.no",
	"bu.no",
	"fm.no",
	"hl.no",
	"hm.no",
	"jan-mayen.no",
	"mr.no",
	"nl.no",
	"nt.no",
	"of.no",
	"ol.no",
	"oslo.no",
	"rl.no",
	"sf.no",
	"st.no",
	"svalbard.no",
	"tm.no",
	"tr.no",
	"va.no",
	"vf.no",
	"gs.aa.no",
	"gs.ah.no",
	"gs.bu.no",
	"gs.fm.no",
	"gs.hl.no",
	"gs.hm.no",
	"gs.jan-mayen.no",
	"gs.mr.no",
	"gs.nl.no",
	"gs.nt.no",
	"gs.of.no",
	"gs.ol.no",
	"gs.oslo.no",
	"gs.rl.no",
	"gs.sf.no",
	"gs.st.no",
	"gs.svalbard.no",
	"gs.tm.no",
	"gs.tr.no",
	"gs.va.no",
	"gs.vf.no",
	"akrehamn.no",
	"åkrehamn.no",
	"algard.no",
	"ålgård.no",
	"arna.no",
	"brumunddal.no",
	"bryne.no",
	"bronnoysund.no",
	"brønnøysund.no",
	"drobak.no",
	"drøbak.no",
	"egersund.no",
	"fetsund.no",
	"floro.no",
	"florø.no",
	"fredrikstad.no",
	"hokksund.no",
	"honefoss.no",
	"hønefoss.no",
	"jessheim.no",
	"jorpeland.no",
	"jørpeland.no",
	"kirkenes.no",
	"kopervik.no",
	"krokstadelva.no",
	"langevag.no",
	"langevåg.no",
	"leirvik.no",
	"mjondalen.no",
	"mjøndalen.no",
	"mo-i-rana.no",
	"mosjoen.no",
	"mosjøen.no",
	"nesoddtangen.no",
	"orkanger.no",
	"osoyro.no",
	"osøyro.no",
	"raholt.no",
	"råholt.no",
	"sandnessjoen.no",
	"sandnessjøen.no",
	"skedsmokorset.no",
	"slattum.no",
	"spjelkavik.no",
	"stathelle.no",
	"stavern.no",
	"stjordalshalsen.no",
	"stjørdalshalsen.no",
	"tananger.no",
	"tranby.no",
	"vossevangen.no",
	"afjord.no",
	"åfjord.no",
	"agdenes.no",
	"al.no",
	"ål.no",
	"alesund.no",
	"ålesund.no",
	"alstahaug.no",
	"alta.no",
	"áltá.no",
	"alaheadju.no",
	"álaheadju.no",
	"alvdal.no",
	"amli.no",
	"åmli.no",
	"amot.no",
	"åmot.no",
	"andebu.no",
	"andoy.no",
	"andøy.no",
	"andasuolo.no",
	"ardal.no",
	"årdal.no",
	"aremark.no",
	"arendal.no",
	"ås.no",
	"aseral.no",
	"åseral.no",
	"asker.no",
	"askim.no",
	"askvoll.no",
	"askoy.no",
	"askøy.no",
	"asnes.no",
	"åsnes.no",
	"audnedaln.no",
	"aukra.no",
	"aure.no",
	"aurland.no",
	"aurskog-holand.no",
	"aurskog-høland.no",
	"austevoll.no",
	"austrheim.no",
	"averoy.no",
	"averøy.no",
	"balestrand.no",
	"ballangen.no",
	"balat.no",
	"bálát.no",
	"balsfjord.no",
	"bahccavuotna.no",
	"báhccavuotna.no",
	"bamble.no",
	"bardu.no",
	"beardu.no",
	"beiarn.no",
	"bajddar.no",
	"bájddar.no",
	"baidar.no",
	"báidár.no",
	"berg.no",
	"bergen.no",
	"berlevag.no",
	"berlevåg.no",
	"bearalvahki.no",
	"bearalváhki.no",
	"bindal.no",
	"birkenes.no",
	"bjarkoy.no",
	"bjarkøy.no",
	"bjerkreim.no",
	"bjugn.no",
	"bodo.no",
	"bodø.no",
	"badaddja.no",
	"bådåddjå.no",
	"budejju.no",
	"bokn.no",
	"bremanger.no",
	"bronnoy.no",
	"brønnøy.no",
	"bygland.no",
	"bykle.no",
	"barum.no",
	"bærum.no",
	"bo.telemark.no",
	"bø.telemark.no",
	"bo.nordland.no",
	"bø.nordland.no",
	"bievat.no",
	"bievát.no",
	"bomlo.no",
	"bømlo.no",
	"batsfjord.no",
	"båtsfjord.no",
	"bahcavuotna.no",
	"báhcavuotna.no",
	"dovre.no",
	"drammen.no",
	"drangedal.no",
	"dyroy.no",
	"dyrøy.no",
	"donna.no",
	"dønna.no",
	"eid.no",
	"eidfjord.no",
	"eidsberg.no",
	"eidskog.no",
	"eidsvoll.no",
	"eigersund.no",
	"elverum.no",
	"enebakk.no",
	"engerdal.no",
	"etne.no",
	"etnedal.no",
	"evenes.no",
	"evenassi.no",
	"evenášši.no",
	"evje-og-hornnes.no",
	"farsund.no",
	"fauske.no",
	"fuossko.no",
	"fuoisku.no",
	"fedje.no",
	"fet.no",
	"finnoy.no",
	"finnøy.no",
	"fitjar.no",
	"fjaler.no",
	"fjell.no",
	"flakstad.no",
	"flatanger.no",
	"flekkefjord.no",
	"flesberg.no",
	"flora.no",
	"fla.no",
	"flå.no",
	"folldal.no",
	"forsand.no",
	"fosnes.no",
	"frei.no",
	"frogn.no",
	"froland.no",
	"frosta.no",
	"frana.no",
	"fræna.no",
	"froya.no",
	"frøya.no",
	"fusa.no",
	"fyresdal.no",
	"forde.no",
	"førde.no",
	"gamvik.no",
	"gangaviika.no",
	"gáŋgaviika.no",
	"gaular.no",
	"gausdal.no",
	"gildeskal.no",
	"gildeskål.no",
	"giske.no",
	"gjemnes.no",
	"gjerdrum.no",
	"gjerstad.no",
	"gjesdal.no",
	"gjovik.no",
	"gjøvik.no",
	"gloppen.no",
	"gol.no",
	"gran.no",
	"grane.no",
	"granvin.no",
	"gratangen.no",
	"grimstad.no",
	"grong.no",
	"kraanghke.no",
	"kråanghke.no",
	"grue.no",
	"gulen.no",
	"hadsel.no",
	"halden.no",
	"halsa.no",
	"hamar.no",
	"hamaroy.no",
	"habmer.no",
	"hábmer.no",
	"hapmir.no",
	"hápmir.no",
	"hammerfest.no",
	"hammarfeasta.no",
	"hámmárfeasta.no",
	"haram.no",
	"hareid.no",
	"harstad.no",
	"hasvik.no",
	"aknoluokta.no",
	"ákŋoluokta.no",
	"hattfjelldal.no",
	"aarborte.no",
	"haugesund.no",
	"hemne.no",
	"hemnes.no",
	"hemsedal.no",
	"heroy.more-og-romsdal.no",
	"herøy.møre-og-romsdal.no",
	"heroy.nordland.no",
	"herøy.nordland.no",
	"hitra.no",
	"hjartdal.no",
	"hjelmeland.no",
	"hobol.no",
	"hobøl.no",
	"hof.no",
	"hol.no",
	"hole.no",
	"holmestrand.no",
	"holtalen.no",
	"holtålen.no",
	"hornindal.no",
	"horten.no",
	"hurdal.no",
	"hurum.no",
	"hvaler.no",
	"hyllestad.no",
	"hagebostad.no",
	"hægebostad.no",
	"hoyanger.no",
	"høyanger.no",
	"hoylandet.no",
	"høylandet.no",
	"ha.no",
	"hå.no",
	"ibestad.no",
	"inderoy.no",
	"inderøy.no",
	"iveland.no",
	"jevnaker.no",
	"jondal.no",
	"jolster.no",
	"jølster.no",
	"karasjok.no",
	"karasjohka.no",
	"kárášjohka.no",
	"karlsoy.no",
	"galsa.no",
	"gálsá.no",
	"karmoy.no",
	"karmøy.no",
	"kautokeino.no",
	"guovdageaidnu.no",
	"klepp.no",
	"klabu.no",
	"klæbu.no",
	"kongsberg.no",
	"kongsvinger.no",
	"kragero.no",
	"kragerø.no",
	"kristiansand.no",
	"kristiansund.no",
	"krodsherad.no",
	"krødsherad.no",
	"kvalsund.no",
	"rahkkeravju.no",
	"ráhkkerávju.no",
	"kvam.no",
	"kvinesdal.no",
	"kvinnherad.no",
	"kviteseid.no",
	"kvitsoy.no",
	"kvitsøy.no",
	"kvafjord.no",
	"kvæfjord.no",
	"giehtavuoatna.no",
	"kvanangen.no",
	"kvænangen.no",
	"navuotna.no",
	"návuotna.no",
	"kafjord.no",
	"kåfjord.no",
	"gaivuotna.no",
	"gáivuotna.no",
	"larvik.no",
	"lavangen.no",
	"lavagis.no",
	"loabat.no",
	"loabát.no",
	"lebesby.no",
	"davvesiida.no",
	"leikanger.no",
	"leirfjord.no",
	"leka.no",
	"leksvik.no",
	"lenvik.no",
	"leangaviika.no",
	"leaŋgaviika.no",
	"lesja.no",
	"levanger.no",
	"lier.no",
	"lierne.no",
	"lillehammer.no",
	"lillesand.no",
	"lindesnes.no",
	"lindas.no",
	"lindås.no",
	"lom.no",
	"loppa.no",
	"lahppi.no",
	"láhppi.no",
	"lund.no",
	"lunner.no",
	"luroy.no",
	"lurøy.no",
	"luster.no",
	"lyngdal.no",
	"lyngen.no",
	"ivgu.no",
	"lardal.no",
	"lerdal.no",
	"lærdal.no",
	"lodingen.no",
	"lødingen.no",
	"lorenskog.no",
	"lørenskog.no",
	"loten.no",
	"løten.no",
	"malvik.no",
	"masoy.no",
	"måsøy.no",
	"muosat.no",
	"muosát.no",
	"mandal.no",
	"marker.no",
	"marnardal.no",
	"masfjorden.no",
	"meland.no",
	"meldal.no",
	"melhus.no",
	"meloy.no",
	"meløy.no",
	"meraker.no",
	"meråker.no",
	"moareke.no",
	"moåreke.no",
	"midsund.no",
	"midtre-gauldal.no",
	"modalen.no",
	"modum.no",
	"molde.no",
	"moskenes.no",
	"moss.no",
	"mosvik.no",
	"malselv.no",
	"målselv.no",
	"malatvuopmi.no",
	"málatvuopmi.no",
	"namdalseid.no",
	"aejrie.no",
	"namsos.no",
	"namsskogan.no",
	"naamesjevuemie.no",
	"nååmesjevuemie.no",
	"laakesvuemie.no",
	"nannestad.no",
	"narvik.no",
	"narviika.no",
	"naustdal.no",
	"nedre-eiker.no",
	"nes.akershus.no",
	"nes.buskerud.no",
	"nesna.no",
	"nesodden.no",
	"nesseby.no",
	"unjarga.no",
	"unjárga.no",
	"nesset.no",
	"nissedal.no",
	"nittedal.no",
	"nord-aurdal.no",
	"nord-fron.no",
	"nord-odal.no",
	"norddal.no",
	"nordkapp.no",
	"davvenjarga.no",
	"davvenjárga.no",
	"nordre-land.no",
	"nordreisa.no",
	"raisa.no",
	"ráisa.no",
	"nore-og-uvdal.no",
	"notodden.no",
	"naroy.no",
	"nærøy.no",
	"notteroy.no",
	"nøtterøy.no",
	"odda.no",
	"oksnes.no",
	"øksnes.no",
	"oppdal.no",
	"oppegard.no",
	"oppegård.no",
	"orkdal.no",
	"orland.no",
	"ørland.no",
	"orskog.no",
	"ørskog.no",
	"orsta.no",
	"ørsta.no",
	"os.hedmark.no",
	"os.hordaland.no",
	"osen.no",
	"osteroy.no",
	"osterøy.no",
	"ostre-toten.no",
	"østre-toten.no",
	"overhalla.no",
	"ovre-eiker.no",
	"øvre-eiker.no",
	"oyer.no",
	"øyer.no",
	"oygarden.no",
	"øygarden.no",
	"oystre-slidre.no",
	"øystre-slidre.no",
	"porsanger.no",
	"porsangu.no",
	"porsáŋgu.no",
	"porsgrunn.no",
	"radoy.no",
	"radøy.no",
	"rakkestad.no",
	"rana.no",
	"ruovat.no",
	"randaberg.no",
	"rauma.no",
	"rendalen.no",
	"rennebu.no",
	"rennesoy.no",
	"rennesøy.no",
	"rindal.no",
	"ringebu.no",
	"ringerike.no",
	"ringsaker.no",
	"rissa.no",
	"risor.no",
	"risør.no",
	"roan.no",
	"rollag.no",
	"rygge.no",
	"ralingen.no",
	"rælingen.no",
	"rodoy.no",
	"rødøy.no",
	"romskog.no",
	"rømskog.no",
	"roros.no",
	"røros.no",
	"rost.no",
	"røst.no",
	"royken.no",
	"røyken.no",
	"royrvik.no",
	"røyrvik.no",
	"rade.no",
	"råde.no",
	"salangen.no",
	"siellak.no",
	"saltdal.no",
	"salat.no",
	"sálát.no",
	"sálat.no",
	"samnanger.no",
	"sande.more-og-romsdal.no",
	"sande.møre-og-romsdal.no",
	"sande.vestfold.no",
	"sandefjord.no",
	"sandnes.no",
	"sandoy.no",
	"sandøy.no",
	"sarpsborg.no",
	"sauda.no",
	"sauherad.no",
	"sel.no",
	"selbu.no",
	"selje.no",
	"seljord.no",
	"sigdal.no",
	"siljan.no",
	"sirdal.no",
	"skaun.no",
	"skedsmo.no",
	"ski.no",
	"skien.no",
	"skiptvet.no",
	"skjervoy.no",
	"skjervøy.no",
	"skierva.no",
	"skiervá.no",
	"skjak.no",
	"skjåk.no",
	"skodje.no",
	"skanland.no",
	"skånland.no",
	"skanit.no",
	"skánit.no",
	"smola.no",
	"smøla.no",
	"snillfjord.no",
	"snasa.no",
	"snåsa.no",
	"snoasa.no",
	"snaase.no",
	"snåase.no",
	"sogndal.no",
	"sokndal.no",
	"sola.no",
	"solund.no",
	"songdalen.no",
	"sortland.no",
	"spydeberg.no",
	"stange.no",
	"stavanger.no",
	"steigen.no",
	"steinkjer.no",
	"stjordal.no",
	"stjørdal.no",
	"stokke.no",
	"stor-elvdal.no",
	"stord.no",
	"stordal.no",
	"storfjord.no",
	"omasvuotna.no",
	"strand.no",
	"stranda.no",
	"stryn.no",
	"sula.no",
	"suldal.no",
	"sund.no",
	"sunndal.no",
	"surnadal.no",
	"sveio.no",
	"svelvik.no",
	"sykkylven.no",
	"sogne.no",
	"søgne.no",
	"somna.no",
	"sømna.no",
	"sondre-land.no",
	"søndre-land.no",
	"sor-aurdal.no",
	"sør-aurdal.no",
	"sor-fron.no",
	"sør-fron.no",
	"sor-odal.no",
	"sør-odal.no",
	"sor-varanger.no",
	"sør-varanger.no",
	"matta-varjjat.no",
	"mátta-várjjat.no",
	"sorfold.no",
	"sørfold.no",
	"sorreisa.no",
	"sørreisa.no",
	"sorum.no",
	"sørum.no",
	"tana.no",
	"deatnu.no",
	"time.no",
	"tingvoll.no",
	"tinn.no",
	"tjeldsund.no",
	"dielddanuorri.no",
	"tjome.no",
	"tjøme.no",
	"tokke.no",
	"tolga.no",
	"torsken.no",
	"tranoy.no",
	"tranøy.no",
	"tromso.no",
	"tromsø.no",
	"tromsa.no",
	"romsa.no",
	"trondheim.no",
	"troandin.no",
	"trysil.no",
	"trana.no",
	"træna.no",
	"trogstad.no",
	"trøgstad.no",
	"tvedestrand.no",
	"tydal.no",
	"tynset.no",
	"tysfjord.no",
	"divtasvuodna.no",
	"divttasvuotna.no",
	"tysnes.no",
	"tysvar.no",
	"tysvær.no",
	"tonsberg.no",
	"tønsberg.no",
	"ullensaker.no",
	"ullensvang.no",
	"ulvik.no",
	"utsira.no",
	"vadso.no",
	"vadsø.no",
	"cahcesuolo.no",
	"čáhcesuolo.no",
	"vaksdal.no",
	"valle.no",
	"vang.no",
	"vanylven.no",
	"vardo.no",
	"vardø.no",
	"varggat.no",
	"várggát.no",
	"vefsn.no",
	"vaapste.no",
	"vega.no",
	"vegarshei.no",
	"vegårshei.no",
	"vennesla.no",
	"verdal.no",
	"verran.no",
	"vestby.no",
	"vestnes.no",
	"vestre-slidre.no",
	"vestre-toten.no",
	"vestvagoy.no",
	"vestvågøy.no",
	"vevelstad.no",
	"vik.no",
	"vikna.no",
	"vindafjord.no",
	"volda.no",
	"voss.no",
	"varoy.no",
	"værøy.no",
	"vagan.no",
	"vågan.no",
	"voagat.no",
	"vagsoy.no",
	"vågsøy.no",
	"vaga.no",
	"vågå.no",
	"valer.ostfold.no",
	"våler.østfold.no",
	"valer.hedmark.no",
	"våler.hedmark.no",
	"*.np",
	"nr",
	"biz.nr",
	"info.nr",
	"gov.nr",
	"edu.nr",
	"org.nr",
	"net.nr",
	"com.nr",
	"nu",
	"nz",
	"ac.nz",
	"co.nz",
	"cri.nz",
	"geek.nz",
	"gen.nz",
	"govt.nz",
	"health.nz",
	"iwi.nz",
	"kiwi.nz",
	"maori.nz",
	"mil.nz",
	"māori.nz",
	"net.nz",
	"org.nz",
	"parliament.nz",
	"school.nz",
	"om",
	"co.om",
	"com.om",
	"edu.om",
	"gov.om",
	"med.om",
	"museum.om",
	"net.om",
	"org.om",
	"pro.om",
	"onion",
	"org",
	"pa",
	"ac.pa",
	"gob.pa",
	"com.pa",
	"org.pa",
	"sld.pa",
	"edu.pa",
	"net.pa",
	"ing.pa",
	"abo.pa",
	"med.pa",
	"nom.pa",
	"pe",
	"edu.pe",
	"gob.pe",
	"nom.pe",
	"mil.pe",
	"org.pe",
	"com.pe",
	"net.pe",
	"pf",
	"com.pf",
	"org.pf",
	"edu.pf",
	"*.pg",
	"ph",
	"com.ph",
	"net.ph",
	"org.ph",
	"gov.ph",
	"edu.ph",
	"ngo.ph",
	"mil.ph",
	"i.ph",
	"pk",
	"com.pk",
	"net.pk",
	"edu.pk",
	"org.pk",
	"fam.pk",
	"biz.pk",
	"web.pk",
	"gov.pk",
	"gob.pk",
	"gok.pk",
	"gon.pk",
	"gop.pk",
	"gos.pk",
	"info.pk",
	"pl",
	"com.pl",
	"net.pl",
	"org.pl",
	"aid.pl",
	"agro.pl",
	"atm.pl",
	"auto.pl",
	"biz.pl",
	"edu.pl",
	"gmina.pl",
	"gsm.pl",
	"info.pl",
	"mail.pl",
	"miasta.pl",
	"media.pl",
	"mil.pl",
	"nieruchomosci.pl",
	"nom.pl",
	"pc.pl",
	"powiat.pl",
	"priv.pl",
	"realestate.pl",
	"rel.pl",
	"sex.pl",
	"shop.pl",
	"sklep.pl",
	"sos.pl",
	"szkola.pl",
	"targi.pl",
	"tm.pl",
	"tourism.pl",
	"travel.pl",
	"turystyka.pl",
	"gov.pl",
	"ap.gov.pl",
	"ic.gov.pl",
	"is.gov.pl",
	"us.gov.pl",
	"kmpsp.gov.pl",
	"kppsp.gov.pl",
	"kwpsp.gov.pl",
	"psp.gov.pl",
	"wskr.gov.pl",
	"kwp.gov.pl",
	"mw.gov.pl",
	"ug.gov.pl",
	"um.gov.pl",
	"umig.gov.pl",
	"ugim.gov.pl",
	"upow.gov.pl",
	"uw.gov.pl",
	"starostwo.gov.pl",
	"pa.gov.pl",
	"po.gov.pl",
	"psse.gov.pl",
	"pup.gov.pl",
	"rzgw.gov.pl",
	"sa.gov.pl",
	"so.gov.pl",
	"sr.gov.pl",
	"wsa.gov.pl",
	"sko.gov.pl",
	"uzs.gov.pl",
	"wiih.gov.pl",
	"winb.gov.pl",
	"pinb.gov.pl",
	"wios.gov.pl",
	"witd.gov.pl",
	"wzmiuw.gov.pl",
	"piw.gov.pl",
	"wiw.gov.pl",
	"griw.gov.pl",
	"wif.gov.pl",
	"oum.gov.pl",
	"sdn.gov.pl",
	"zp.gov.pl",
	"uppo.gov.pl",
	"mup.gov.pl",
	"wuoz.gov.pl",
	"konsulat.gov.pl",
	"oirm.gov.pl",
	"augustow.pl",
	"babia-gora.pl",
	"bedzin.pl",
	"beskidy.pl",
	"bialowieza.pl",
	"bialystok.pl",
	"bielawa.pl",
	"bieszczady.pl",
	"boleslawiec.pl",
	"bydgoszcz.pl",
	"bytom.pl",
	"cieszyn.pl",
	"czeladz.pl",
	"czest.pl",
	"dlugoleka.pl",
	"elblag.pl",
	"elk.pl",
	"glogow.pl",
	"gniezno.pl",
	"gorlice.pl",
	"grajewo.pl",
	"ilawa.pl",
	"jaworzno.pl",
	"jelenia-gora.pl",
	"jgora.pl",
	"kalisz.pl",
	"kazimierz-dolny.pl",
	"karpacz.pl",
	"kartuzy.pl",
	"kaszuby.pl",
	"katowice.pl",
	"kepno.pl",
	"ketrzyn.pl",
	"klodzko.pl",
	"kobierzyce.pl",
	"kolobrzeg.pl",
	"konin.pl",
	"konskowola.pl",
	"kutno.pl",
	"lapy.pl",
	"lebork.pl",
	"legnica.pl",
	"lezajsk.pl",
	"limanowa.pl",
	"lomza.pl",
	"lowicz.pl",
	"lubin.pl",
	"lukow.pl",
	"malbork.pl",
	"malopolska.pl",
	"mazowsze.pl",
	"mazury.pl",
	"mielec.pl",
	"mielno.pl",
	"mragowo.pl",
	"naklo.pl",
	"nowaruda.pl",
	"nysa.pl",
	"olawa.pl",
	"olecko.pl",
	"olkusz.pl",
	"olsztyn.pl",
	"opoczno.pl",
	"opole.pl",
	"ostroda.pl",
	"ostroleka.pl",
	"ostrowiec.pl",
	"ostrowwlkp.pl",
	"pila.pl",
	"pisz.pl",
	"podhale.pl",
	"podlasie.pl",
	"polkowice.pl",
	"pomorze.pl",
	"pomorskie.pl",
	"prochowice.pl",
	"pruszkow.pl",
	"przeworsk.pl",
	"pulawy.pl",
	"radom.pl",
	"rawa-maz.pl",
	"rybnik.pl",
	"rzeszow.pl",
	"sanok.pl",
	"sejny.pl",
	"slask.pl",
	"slupsk.pl",
	"sosnowiec.pl",
	"stalowa-wola.pl",
	"skoczow.pl",
	"starachowice.pl",
	"stargard.pl",
	"suwalki.pl",
	"swidnica.pl",
	"swiebodzin.pl",
	"swinoujscie.pl",
	"szczecin.pl",
	"szczytno.pl",
	"tarnobrzeg.pl",
	"tgory.pl",
	"turek.pl",
	"tychy.pl",
	"ustka.pl",
	"walbrzych.pl",
	"warmia.pl",
	"warszawa.pl",
	"waw.pl",
	"wegrow.pl",
	"wielun.pl",
	"wlocl.pl",
	"wloclawek.pl",
	"wodzislaw.pl",
	"wolomin.pl",
	"wroclaw.pl",
	"zachpomor.pl",
	"zagan.pl",
	"zarow.pl",
	"zgora.pl",
	"zgorzelec.pl",
	"pm",
	"pn",
	"gov.pn",
	"co.pn",
	"org.pn",
	"edu.pn",
	"net.pn",
	"post",
	"pr",
	"com.pr",
	"net.pr",
	"org.pr",
	"gov.pr",
	"edu.pr",
	"isla.pr",
	"pro.pr",
	"biz.pr",
	"info.pr",
	"name.pr",
	"est.pr",
	"prof.pr",
	"ac.pr",
	"pro",
	"aaa.pro",
	"aca.pro",
	"acct.pro",
	"avocat.pro",
	"bar.pro",
	"cpa.pro",
	"eng.pro",
	"jur.pro",
	"law.pro",
	"med.pro",
	"recht.pro",
	"ps",
	"edu.ps",
	"gov.ps",
	"sec.ps",
	"plo.ps",
	"com.ps",
	"org.ps",
	"net.ps",
	"pt",
	"net.pt",
	"gov.pt",
	"org.pt",
	"edu.pt",
	"int.pt",
	"publ.pt",
	"com.pt",
	"nome.pt",
	"pw",
	"co.pw",
	"ne.pw",
	"or.pw",
	"ed.pw",
	"go.pw",
	"belau.pw",
	"py",
	"com.py",
	"coop.py",
	"edu.py",
	"gov.py",
	"mil.py",
	"net.py",
	"org.py",
	"qa",
	"com.qa",
	"edu.qa",
	"gov.qa",
	"mil.qa",
	"name.qa",
	"net.qa",
	"org.qa",
	"sch.qa",
	"re",
	"asso.re",
	"com.re",
	"nom.re",
	"ro",
	"arts.ro",
	"com.ro",
	"firm.ro",
	"info.ro",
	"nom.ro",
	"nt.ro",
	"org.ro",
	"rec.ro",
	"store.ro",
	"tm.ro",
	"www.ro",
	"rs",
	"ac.rs",
	"co.rs",
	"edu.rs",
	"gov.rs",
	"in.rs",
	"org.rs",
	"ru",
	"ac.ru",
	"edu.ru",
	"gov.ru",
	"int.ru",
	"mil.ru",
	"test.ru",
	"rw",
	"gov.rw",
	"net.rw",
	"edu.rw",
	"ac.rw",
	"com.rw",
	"co.rw",
	"int.rw",
	"mil.rw",
	"gouv.rw",
	"sa",
	"com.sa",
	"net.sa",
	"org.sa",
	"gov.sa",
	"med.sa",
	"pub.sa",
	"edu.sa",
	"sch.sa",
	"sb",
	"com.sb",
	"edu.sb",
	"gov.sb",
	"net.sb",
	"org.sb",
	"sc",
	"com.sc",
	"gov.sc",
	"net.sc",
	"org.sc",
	"edu.sc",
	"sd",
	"com.sd",
	"net.sd",
	"org.sd",
	"edu.sd",
	"med.sd",
	"tv.sd",
	"gov.sd",
	"info.sd",
	"se",
	"a.se",
	"ac.se",
	"b.se",
	"bd.se",
	"brand.se",
	"c.se",
	"d.se",
	"e.se",
	"f.se",
	"fh.se",
	"fhsk.se",
	"fhv.se",
	"g.se",
	"h.se",
	"i.se",
	"k.se",
	"komforb.se",
	"kommunalforbund.se",
	"komvux.se",
	"l.se",
	"lanbib.se",
	"m.se",
	"n.se",
	"naturbruksgymn.se",
	"o.se",
	"org.se",
	"p.se",
	"parti.se",
	"pp.se",
	"press.se",
	"r.se",
	"s.se",
	"t.se",
	"tm.se",
	"u.se",
	"w.se",
	"x.se",
	"y.se",
	"z.se",
	"sg",
	"com.sg",
	"net.sg",
	"org.sg",
	"gov.sg",
	"edu.sg",
	"per.sg",
	"sh",
	"com.sh",
	"net.sh",
	"gov.sh",
	"org.sh",
	"mil.sh",
	"si",
	"sj",
	"sk",
	"sl",
	"com.sl",
	"net.sl",
	"edu.sl",
	"gov.sl",
	"org.sl",
	"sm",
	"sn",
	"art.sn",
	"com.sn",
	"edu.sn",
	"gouv.sn",
	"org.sn",
	"perso.sn",
	"univ.sn",
	"so",
	"com.so",
	"net.so",
	"org.so",
	"sr",
	"st",
	"co.st",
	"com.st",
	"consulado.st",
	"edu.st",
	"embaixada.st",
	"gov.st",
	"mil.st",
	"net.st",
	"org.st",
	"principe.st",
	"saotome.st",
	"store.st",
	"su",
	"sv",
	"com.sv",
	"edu.sv",
	"gob.sv",
	"org.sv",
	"red.sv",
	"sx",
	"gov.sx",
	"sy",
	"edu.sy",
	"gov.sy",
	"net.sy",
	"mil.sy",
	"com.sy",
	"org.sy",
	"sz",
	"co.sz",
	"ac.sz",
	"org.sz",
	"tc",
	"td",
	"tel",
	"tf",
	"tg",
	"th",
	"ac.th",
	"co.th",
	"go.th",
	"in.th",
	"mi.th",
	"net.th",
	"or.th",
	"tj",
	"ac.tj",
	"biz.tj",
	"co.tj",
	"com.tj",
	"edu.tj",
	"go.tj",
	"gov.tj",
	"int.tj",
	"mil.tj",
	"name.tj",
	"net.tj",
	"nic.tj",
	"org.tj",
	"test.tj",
	"web.tj",
	"tk",
	"tl",
	"gov.tl",
	"tm",
	"com.tm",
	"co.tm",
	"org.tm",
	"net.tm",
	"nom.tm",
	"gov.tm",
	"mil.tm",
	"edu.tm",
	"tn",
	"com.tn",
	"ens.tn",
	"fin.tn",
	"gov.tn",
	"ind.tn",
	"intl.tn",
	"nat.tn",
	"net.tn",
	"org.tn",
	"info.tn",
	"perso.tn",
	"tourism.tn",
	"edunet.tn",
	"rnrt.tn",
	"rns.tn",
	"rnu.tn",
	"mincom.tn",
	"agrinet.tn",
	"defense.tn",
	"turen.tn",
	"to",
	"com.to",
	"gov.to",
	"net.to",
	"org.to",
	"edu.to",
	"mil.to",
	"tr",
	"com.tr",
	"info.tr",
	"biz.tr",
	"net.tr",
	"org.tr",
	"web.tr",
	"gen.tr",
	"tv.tr",
	"av.tr",
	"dr.tr",
	"bbs.tr",
	"name.tr",
	"tel.tr",
	"gov.tr",
	"bel.tr",
	"pol.tr",
	"mil.tr",
	"k12.tr",
	"edu.tr",
	"kep.tr",
	"nc.tr",
	"gov.nc.tr",
	"travel",
	"tt",
	"co.tt",
	"com.tt",
	"org.tt",
	"net.tt",
	"biz.tt",
	"info.tt",
	"pro.tt",
	"int.tt",
	"coop.tt",
	"jobs.tt",
	"mobi.tt",
	"travel.tt",
	"museum.tt",
	"aero.tt",
	"name.tt",
	"gov.tt",
	"edu.tt",
	"tv",
	"tw",
	"edu.tw",
	"gov.tw",
	"mil.tw",
	"com.tw",
	"net.tw",
	"org.tw",
	"idv.tw",
	"game.tw",
	"ebiz.tw",
	"club.tw",
	"網路.tw",
	"組織.tw",
	"商業.tw",
	"tz",
	"ac.tz",
	"co.tz",
	"go.tz",
	"hotel.tz",
	"info.tz",
	"me.tz",
	"mil.tz",
	"mobi.tz",
	"ne.tz",
	"or.tz",
	"sc.tz",
	"tv.tz",
	"ua",
	"com.ua",
	"edu.ua",
	"gov.ua",
	"in.ua",
	"net.ua",
	"org.ua",
	"cherkassy.ua",
	"cherkasy.ua",
	"chernigov.ua",
	"chernihiv.ua",
	"chernivtsi.ua",
	"chernovtsy.ua",
	"ck.ua",
	"cn.ua",
	"cr.ua",
	"crimea.ua",
	"cv.ua",
	"dn.ua",
	"dnepropetrovsk.ua",
	"dnipropetrovsk.ua",
	"dominic.ua",
	"donetsk.ua",
	"dp.ua",
	"if.ua",
	"ivano-frankivsk.ua",
	"kh.ua",
	"kharkiv.ua",
	"kharkov.ua",
	"kherson.ua",
	"khmelnitskiy.ua",
	"khmelnytskyi.ua",
	"kiev.ua",
	"kirovograd.ua",
	"km.ua",
	"kr.ua",
	"krym.ua",
	"ks.ua",
	"kv.ua",
	"kyiv.ua",
	"lg.ua",
	"lt.ua",
	"lugansk.ua",
	"lutsk.ua",
	"lv.ua",
	"lviv.ua",
	"mk.ua",
	"mykolaiv.ua",
	"nikolaev.ua",
	"od.ua",
	"odesa.ua",
	"odessa.ua",
	"pl.ua",
	"poltava.ua",
	"rivne.ua",
	"rovno.ua",
	"rv.ua",
	"sb.ua",
	"sebastopol.ua",
	"sevastopol.ua",
	"sm.ua",
	"sumy.ua",
	"te.ua",
	"ternopil.ua",
	"uz.ua",
	"uzhgorod.ua",
	"vinnica.ua",
	"vinnytsia.ua",
	"vn.ua",
	"volyn.ua",
	"yalta.ua",
	"zaporizhzhe.ua",
	"zaporizhzhia.ua",
	"zhitomir.ua",
	"zhytomyr.ua",
	"zp.ua",
	"zt.ua",
	"ug",
	"co.ug",
	"or.ug",
	"ac.ug",
	"sc.ug",
	"go.ug",
	"ne.ug",
	"com.ug",
	"org.ug",
	"uk",
	"ac.uk",
	"co.uk",
	"gov.uk",
	"ltd.uk",
	"me.uk",
	"net.uk",
	"nhs.uk",
	"org.uk",
	"plc.uk",
	"police.uk",
	"*.sch.uk",
	"us",
	"dni.us",
	"fed.us",
	"isa.us",
	"kids.us",
	"nsn.us",
	"ak.us",
	"al.us",
	"ar.us",
	"as.us",
	"az.us",
	"ca.us",
	"co.us",
	"ct.us",
	"dc.us",
	"de.us",
	"fl.us",
	"ga.us",
	"gu.us",
	"hi.us",
	"ia.us",
	"id.us",
	"il.us",
	"in.us",
	"ks.us",
	"ky.us",
	"la.us",
	"ma.us",
	"md.us",
	"me.us",
	"mi.us",
	"mn.us",
	"mo.us",
	"ms.us",
	"mt.us",
	"nc.us",
	"nd.us",
	"ne.us",
	"nh.us",
	"nj.us",
	"nm.us",
	"nv.us",
	"ny.us",
	"oh.us",
	"ok.us",
	"or.us",
	"pa.us",
	"pr.us",
	"ri.us",
	"sc.us",
	"sd.us",
	"tn.us",
	"tx.us",
	"ut.us",
	"vi.us",
	"vt.us",
	"va.us",
	"wa.us",
	"wi.us",
	"wv.us",
	"wy.us",
	"k12.ak.us",
	"k12.al.us",
	"k12.ar.us",
	"k12.as.us",
	"k12.az.us",
	"k12.ca.us",
	"k12.co.us",
	"k12.ct.us",
	"k12.dc.us",
	"k12.de.us",
	"k12.fl.us",
	"k12.ga.us",
	"k12.gu.us",
	"k12.ia.us",
	"k12.id.us",
	"k12.il.us",
	"k12.in.us",
	"k12.ks.us",
	"k12.ky.us",
	"k12.la.us",
	"k12.ma.us",
	"k12.md.us",
	"k12.me.us",
	"k12.mi.us",
	"k12.mn.us",
	"k12.mo.us",
	"k12.ms.us",
	"k12.mt.us",
	"k12.nc.us",
	"k12.ne.us",
	"k12.nh.us",
	"k12.nj.us",
	"k12.nm.us",
	"k12.nv.us",
	"k12.ny.us",
	"k12.oh.us",
	"k12.ok.us",
	"k12.or.us",
	"k12.pa.us",
	"k12.pr.us",
	"k12.ri.us",
	"k12.sc.us",
	"k12.tn.us",
	"k12.tx.us",
	"k12.ut.us",
	"k12.vi.us",
	"k12.vt.us",
	"k12.va.us",
	"k12.wa.us",
	"k12.wi.us",
	"k12.wy.us",
	"cc.ak.us",
	"cc.al.us",
	"cc.ar.us",
	"cc.as.us",
	"cc.az.us",
	"cc.ca.us",
	"cc.co.us",
	"cc.ct.us",
	"cc.dc.us",
	"cc.de.us",
	"cc.fl.us",
	"cc.ga.us",
	"cc.gu.us",
	"cc.hi.us",
	"cc.ia.us",
	"cc.id.us",
	"cc.il.us",
	"cc.in.us",
	"cc.ks.us",
	"cc.ky.us",
	"cc.la.us",
	"cc.ma.us",
	"cc.md.us",
	"cc.me.us",
	"cc.mi.us",
	"cc.mn.us",
	"cc.mo.us",
	"cc.ms.us",
	"cc.mt.us",
	"cc.nc.us",
	"cc.nd.us",
	"cc.ne.us",
	"cc.nh.us",
	"cc.nj.us",
	"cc.nm.us",
	"cc.nv.us",
	"cc.ny.us",
	"cc.oh.us",
	"cc.ok.us",
	"cc.or.us",
	"cc.pa.us",
	"cc.pr.us",
	"cc.ri.us",
	"cc.sc.us",
	"cc.sd.us",
	"cc.tn.us",
	"cc.tx.us",
	"cc.ut.us",
	"cc.vi.us",
	"cc.vt.us",
	"cc.va.us",
	"cc.wa.us",
	"cc.wi.us",
	"cc.wv.us",
	"cc.wy.us",
	"lib.ak.us",
	"lib.al.us",
	"lib.ar.us",
	"lib.as.us",
	"lib.az.us",
	"lib.ca.us",
	"lib.co.us",
	"lib.ct.us",
	"lib.dc.us",
	"lib.fl.us",
	"lib.ga.us",
	"lib.gu.us",
	"lib.hi.us",
	"lib.ia.us",
	"lib.id.us",
	"lib.il.us",
	"lib.in.us",
	"lib.ks.us",
	"lib.ky.us",
	"lib.la.us",
	"lib.ma.us",
	"lib.md.us",
	"lib.me.us",
	"lib.mi.us",
	"lib.mn.us",
	"lib.mo.us",
	"lib.ms.us",
	"lib.mt.us",
	"lib.nc.us",
	"lib.nd.us",
	"lib.ne.us",
	"lib.nh.us",
	"lib.nj.us",
	"lib.nm.us",
	"lib.nv.us",
	"lib.ny.us",
	"lib.oh.us",
	"lib.ok.us",
	"lib.or.us",
	"lib.pa.us",
	"lib.pr.us",
	"lib.ri.us",
	"lib.sc.us",
	"lib.sd.us",
	"lib.tn.us",
	"lib.tx.us",
	"lib.ut.us",
	"lib.vi.us",
	"lib.vt.us",
	"lib.va.us",
	"lib.wa.us",
	"lib.wi.us",
	"lib.wy.us",
	"pvt.k12.ma.us",
	"chtr.k12.ma.us",
	"paroch.k12.ma.us",
	"uy",
	"com.uy",
	"edu.uy",
	"gub.uy",
	"mil.uy",
	"net.uy",
	"org.uy",
	"uz",
	"co.uz",
	"com.uz",
	"net.uz",
	"org.uz",
	"va",
	"vc",
	"com.vc",
	"net.vc",
	"org.vc",
	"gov.vc",
	"mil.vc",
	"edu.vc",
	"ve",
	"arts.ve",
	"co.ve",
	"com.ve",
	"e12.ve",
	"edu.ve",
	"firm.ve",
	"gob.ve",
	"gov.ve",
	"info.ve",
	"int.ve",
	"mil.ve",
	"net.ve",
	"org.ve",
	"rec.ve",
	"store.ve",
	"tec.ve",
	"web.ve",
	"vg",
	"vi",
	"co.vi",
	"com.vi",
	"k12.vi",
	"net.vi",
	"org.vi",
	"vn",
	"com.vn",
	"net.vn",
	"org.vn",
	"edu.vn",
	"gov.vn",
	"int.vn",
	"ac.vn",
	"biz.vn",
	"info.vn",
	"name.vn",
	"pro.vn",
	"health.vn",
	"vu",
	"com.vu",
	"edu.vu",
	"net.vu",
	"org.vu",
	"wf",
	"ws",
	"com.ws",
	"net.ws",
	"org.ws",
	"gov.ws",
	"edu.ws",
	"yt",
	"امارات",
	"հայ",
	"বাংলা",
	"бел",
	"中国",
	"中國",
	"الجزائر",
	"مصر",
	"ею",
	"გე",
	"ελ",
	"香港",
	"भारत",
	"بھارت",
	"భారత్",
	"ભારત",
	"ਭਾਰਤ",
	"ভারত",
	"இந்தியா",
	"ایران",
	"ايران",
	"عراق",
	"الاردن",
	"한국",
	"қаз",
	"ලංකා",
	"இலங்கை",
	"المغرب",
	"мкд",
	"мон",
	"澳門",
	"澳门",
	"مليسيا",
	"عمان",
	"پاکستان",
	"پاكستان",
	"فلسطين",
	"срб",
	"пр.срб",
	"орг.срб",
	"обр.срб",
	"од.срб",
	"упр.срб",
	"ак.срб",
	"рф",
	"قطر",
	"السعودية",
	"السعودیة",
	"السعودیۃ",
	"السعوديه",
	"سودان",
	"新加坡",
	"சிங்கப்பூர்",
	"سورية",
	"سوريا",
	"ไทย",
	"تونس",
	"台灣",
	"台湾",
	"臺灣",
	"укр",
	"اليمن",
	"xxx",
	"*.ye",
	"ac.za",
	"agric.za",
	"alt.za",
	"co.za",
	"edu.za",
	"gov.za",
	"grondar.za",
	"law.za",
	"mil.za",
	"net.za",
	"ngo.za",
	"nis.za",
	"nom.za",
	"org.za",
	"school.za",
	"tm.za",
	"web.za",
	"zm",
	"ac.zm",
	"biz.zm",
	"co.zm",
	"com.zm",
	"edu.zm",
	"gov.zm",
	"info.zm",
	"mil.zm",
	"net.zm",
	"org.zm",
	"sch.zm",
	"*.zw",
	"aaa",
	"aarp",
	"abarth",
	"abb",
	"abbott",
	"abbvie",
	"abc",
	"able",
	"abogado",
	"abudhabi",
	"academy",
	"accenture",
	"accountant",
	"accountants",
	"aco",
	"active",
	"actor",
	"adac",
	"ads",
	"adult",
	"aeg",
	"aetna",
	"afamilycompany",
	"afl",
	"africa",
	"agakhan",
	"agency",
	"aig",
	"aigo",
	"airbus",
	"airforce",
	"airtel",
	"akdn",
	"alfaromeo",
	"alibaba",
	"alipay",
	"allfinanz",
	"allstate",
	"ally",
	"alsace",
	"alstom",
	"americanexpress",
	"americanfamily",
	"amex",
	"amfam",
	"amica",
	"amsterdam",
	"analytics",
	"android",
	"anquan",
	"anz",
	"aol",
	"apartments",
	"app",
	"apple",
	"aquarelle",
	"arab",
	"aramco",
	"archi",
	"army",
	"art",
	"arte",
	"asda",
	"associates",
	"athleta",
	"attorney",
	"auction",
	"audi",
	"audible",
	"audio",
	"auspost",
	"author",
	"auto",
	"autos",
	"avianca",
	"aws",
	"axa",
	"azure",
	"baby",
	"baidu",
	"banamex",
	"bananarepublic",
	"band",
	"bank",
	"bar",
	"barcelona",
	"barclaycard",
	"barclays",
	"barefoot",
	"bargains",
	"baseball",
	"basketball",
	"bauhaus",
	"bayern",
	"bbc",
	"bbt",
	"bbva",
	"bcg",
	"bcn",
	"beats",
	"beauty",
	"beer",
	"bentley",
	"berlin",
	"best",
	"bestbuy",
	"bet",
	"bharti",
	"bible",
	"bid",
	"bike",
	"bing",
	"bingo",
	"bio",
	"black",
	"blackfriday",
	"blanco",
	"blockbuster",
	"blog",
	"bloomberg",
	"blue",
	"bms",
	"bmw",
	"bnl",
	"bnpparibas",
	"boats",
	"boehringer",
	"bofa",
	"bom",
	"bond",
	"boo",
	"book",
	"booking",
	"boots",
	"bosch",
	"bostik",
	"boston",
	"bot",
	"boutique",
	"box",
	"bradesco",
	"bridgestone",
	"broadway",
	"broker",
	"brother",
	"brussels",
	"budapest",
	"bugatti",
	"build",
	"builders",
	"business",
	"buy",
	"buzz",
	"bzh",
	"cab",
	"cafe",
	"cal",
	"call",
	"calvinklein",
	"cam",
	"camera",
	"camp",
	"cancerresearch",
	"canon",
	"capetown",
	"capital",
	"capitalone",
	"car",
	"caravan",
	"cards",
	"care",
	"career",
	"careers",
	"cars",
	"cartier",
	"casa",
	"case",
	"caseih",
	"cash",
	"casino",
	"catering",
	"catholic",
	"cba",
	"cbn",
	"cbre",
	"cbs",
	"ceb",
	"center",
	"ceo",
	"cern",
	"cfa",
	"cfd",
	"chanel",
	"channel",
	"chase",
	"chat",
	"cheap",
	"chintai",
	"chloe",
	"christmas",
	"chrome",
	"chrysler",
	"church",
	"cipriani",
	"circle",
	"cisco",
	"citadel",
	"citi",
	"citic",
	"city",
	"cityeats",
	"claims",
	"cleaning",
	"click",
	"clinic",
	"clinique",
	"clothing",
	"cloud",
	"club",
	"clubmed",
	"coach",
	"codes",
	"coffee",
	"college",
	"cologne",
	"comcast",
	"commbank",
	"community",
	"company",
	"compare",
	"computer",
	"comsec",
	"condos",
	"construction",
	"consulting",
	"contact",
	"contractors",
	"cooking",
	"cookingchannel",
	"cool",
	"corsica",
	"country",
	"coupon",
	"coupons",
	"courses",
	"credit",
	"creditcard",
	"creditunion",
	"cricket",
	"crown",
	"crs",
	"cruise",
	"cruises",
	"csc",
	"cuisinella",
	"cymru",
	"cyou",
	"dabur",
	"dad",
	"dance",
	"data",
	"date",
	"dating",
	"datsun",
	"day",
	"dclk",
	"dds",
	"deal",
	"dealer",
	"deals",
	"degree",
	"delivery",
	"dell",
	"deloitte",
	"delta",
	"democrat",
	"dental",
	"dentist",
	"desi",
	"design",
	"dev",
	"dhl",
	"diamonds",
	"diet",
	"digital",
	"direct",
	"directory",
	"discount",
	"discover",
	"dish",
	"diy",
	"dnp",
	"docs",
	"doctor",
	"dodge",
	"dog",
	"doha",
	"domains",
	"dot",
	"download",
	"drive",
	"dtv",
	"dubai",
	"duck",
	"dunlop",
	"duns",
	"dupont",
	"durban",
	"dvag",
	"dvr",
	"earth",
	"eat",
	"eco",
	"edeka",
	"education",
	"email",
	"emerck",
	"energy",
	"engineer",
	"engineering",
	"enterprises",
	"epost",
	"epson",
	"equipment",
	"ericsson",
	"erni",
	"esq",
	"estate",
	"esurance",
	"etisalat",
	"eurovision",
	"eus",
	"events",
	"everbank",
	"exchange",
	"expert",
	"exposed",
	"express",
	"extraspace",
	"fage",
	"fail",
	"fairwinds",
	"faith",
	"family",
	"fan",
	"fans",
	"farm",
	"farmers",
	"fashion",
	"fast",
	"fedex",
	"feedback",
	"ferrari",
	"ferrero",
	"fiat",
	"fidelity",
	"fido",
	"film",
	"final",
	"finance",
	"financial",
	"fire",
	"firestone",
	"firmdale",
	"fish",
	"fishing",
	"fit",
	"fitness",
	"flickr",
	"flights",
	"flir",
	"florist",
	"flowers",
	"fly",
	"foo",
	"food",
	"foodnetwork",
	"football",
	"ford",
	"forex",
	"forsale",
	"forum",
	"foundation",
	"fox",
	"free",
	"fresenius",
	"frl",
	"frogans",
	"frontdoor",
	"frontier",
	"ftr",
	"fujitsu",
	"fujixerox",
	"fun",
	"fund",
	"furniture",
	"futbol",
	"fyi",
	"gal",
	"gallery",
	"gallo",
	"gallup",
	"game",
	"games",
	"gap",
	"garden",
	"gbiz",
	"gdn",
	"gea",
	"gent",
	"genting",
	"george",
	"ggee",
	"gift",
	"gifts",
	"gives",
	"giving",
	"glade",
	"glass",
	"gle",
	"global",
	"globo",
	"gmail",
	"gmbh",
	"gmo",
	"gmx",
	"godaddy",
	"gold",
	"goldpoint",
	"golf",
	"goo",
	"goodhands",
	"goodyear",
	"goog",
	"google",
	"gop",
	"got",
	"grainger",
	"graphics",
	"gratis",
	"green",
	"gripe",
	"grocery",
	"group",
	"guardian",
	"gucci",
	"guge",
	"guide",
	"guitars",
	"guru",
	"hair",
	"hamburg",
	"hangout",
	"haus",
	"hbo",
	"hdfc",
	"hdfcbank",
	"health",
	"healthcare",
	"help",
	"helsinki",
	"here",
	"hermes",
	"hgtv",
	"hiphop",
	"hisamitsu",
	"hitachi",
	"hiv",
	"hkt",
	"hockey",
	"holdings",
	"holiday",
	"homedepot",
	"homegoods",
	"homes",
	"homesense",
	"honda",
	"honeywell",
	"horse",
	"hospital",
	"host",
	"hosting",
	"hot",
	"hoteles",
	"hotels",
	"hotmail",
	"house",
	"how",
	"hsbc",
	"htc",
	"hughes",
	"hyatt",
	"hyundai",
	"ibm",
	"icbc",
	"ice",
	"icu",
	"ieee",
	"ifm",
	"ikano",
	"imamat",
	"imdb",
	"immo",
	"immobilien",
	"industries",
	"infiniti",
	"ing",
	"ink",
	"institute",
	"insurance",
	"insure",
	"intel",
	"international",
	"intuit",
	"investments",
	"ipiranga",
	"irish",
	"iselect",
	"ismaili",
	"ist",
	"istanbul",
	"itau",
	"itv",
	"iveco",
	"iwc",
	"jaguar",
	"java",
	"jcb",
	"jcp",
	"jeep",
	"jetzt",
	"jewelry",
	"jio",
	"jlc",
	"jll",
	"jmp",
	"jnj",
	"joburg",
	"jot",
	"joy",
	"jpmorgan",
	"jprs",
	"juegos",
	"juniper",
	"kaufen",
	"kddi",
	"kerryhotels",
	"kerrylogistics",
	"kerryproperties",
	"kfh",
	"kia",
	"kim",
	"kinder",
	"kindle",
	"kitchen",
	"kiwi",
	"koeln",
	"komatsu",
	"kosher",
	"kpmg",
	"kpn",
	"krd",
	"kred",
	"kuokgroup",
	"kyoto",
	"lacaixa",
	"ladbrokes",
	"lamborghini",
	"lamer",
	"lancaster",
	"lancia",
	"lancome",
	"land",
	"landrover",
	"lanxess",
	"lasalle",
	"lat",
	"latino",
	"latrobe",
	"law",
	"lawyer",
	"lds",
	"lease",
	"leclerc",
	"lefrak",
	"legal",
	"lego",
	"lexus",
	"lgbt",
	"liaison",
	"lidl",
	"life",
	"lifeinsurance",
	"lifestyle",
	"lighting",
	"like",
	"lilly",
	"limited",
	"limo",
	"lincoln",
	"linde",
	"link",
	"lipsy",
	"live",
	"living",
	"lixil",
	"loan",
	"loans",
	"locker",
	"locus",
	"loft",
	"lol",
	"london",
	"lotte",
	"lotto",
	"love",
	"lpl",
	"lplfinancial",
	"ltd",
	"ltda",
	"lundbeck",
	"lupin",
	"luxe",
	"luxury",
	"macys",
	"madrid",
	"maif",
	"maison",
	"makeup",
	"man",
	"management",
	"mango",
	"map",
	"market",
	"marketing",
	"markets",
	"marriott",
	"marshalls",
	"maserati",
	"mattel",
	"mba",
	"mcd",
	"mcdonalds",
	"mckinsey",
	"med",
	"media",
	"meet",
	"melbourne",
	"meme",
	"memorial",
	"men",
	"menu",
	"meo",
	"merckmsd",
	"metlife",
	"miami",
	"microsoft",
	"mini",
	"mint",
	"mit",
	"mitsubishi",
	"mlb",
	"mls",
	"mma",
	"mobile",
	"mobily",
	"moda",
	"moe",
	"moi",
	"mom",
	"monash",
	"money",
	"monster",
	"montblanc",
	"mopar",
	"mormon",
	"mortgage",
	"moscow",
	"moto",
	"motorcycles",
	"mov",
	"movie",
	"movistar",
	"msd",
	"mtn",
	"mtpc",
	"mtr",
	"mutual",
	"nab",
	"nadex",
	"nagoya",
	"nationwide",
	"natura",
	"navy",
	"nba",
	"nec",
	"netbank",
	"netflix",
	"network",
	"neustar",
	"new",
	"newholland",
	"news",
	"next",
	"nextdirect",
	"nexus",
	"nfl",
	"ngo",
	"nhk",
	"nico",
	"nike",
	"nikon",
	"ninja",
	"nissan",
	"nissay",
	"nokia",
	"northwesternmutual",
	"norton",
	"now",
	"nowruz",
	"nowtv",
	"nra",
	"nrw",
	"ntt",
	"nyc",
	"obi",
	"observer",
	"off",
	"office",
	"okinawa",
	"olayan",
	"olayangroup",
	"oldnavy",
	"ollo",
	"omega",
	"one",
	"ong",
	"onl",
	"online",
	"onyourside",
	"ooo",
	"open",
	"oracle",
	"orange",
	"organic",
	"orientexpress",
	"origins",
	"osaka",
	"otsuka",
	"ott",
	"ovh",
	"page",
	"pamperedchef",
	"panasonic",
	"panerai",
	"paris",
	"pars",
	"partners",
	"parts",
	"party",
	"passagens",
	"pay",
	"pccw",
	"pet",
	"pfizer",
	"pharmacy",
	"phd",
	"philips",
	"phone",
	"photo",
	"photography",
	"photos",
	"physio",
	"piaget",
	"pics",
	"pictet",
	"pictures",
	"pid",
	"pin",
	"ping",
	"pink",
	"pioneer",
	"pizza",
	"place",
	"play",
	"playstation",
	"plumbing",
	"plus",
	"pnc",
	"pohl",
	"poker",
	"politie",
	"porn",
	"pramerica",
	"praxi",
	"press",
	"prime",
	"prod",
	"productions",
	"prof",
	"progressive",
	"promo",
	"properties",
	"property",
	"protection",
	"pru",
	"prudential",
	"pub",
	"pwc",
	"qpon",
	"quebec",
	"quest",
	"qvc",
	"racing",
	"radio",
	"raid",
	"read",
	"realestate",
	"realtor",
	"realty",
	"recipes",
	"red",
	"redstone",
	"redumbrella",
	"rehab",
	"reise",
	"reisen",
	"reit",
	"reliance",
	"ren",
	"rent",
	"rentals",
	"repair",
	"report",
	"republican",
	"rest",
	"restaurant",
	"review",
	"reviews",
	"rexroth",
	"rich",
	"richardli",
	"ricoh",
	"rightathome",
	"ril",
	"rio",
	"rip",
	"rmit",
	"rocher",
	"rocks",
	"rodeo",
	"rogers",
	"room",
	"rsvp",
	"rugby",
	"ruhr",
	"run",
	"rwe",
	"ryukyu",
	"saarland",
	"safe",
	"safety",
	"sakura",
	"sale",
	"salon",
	"samsclub",
	"samsung",
	"sandvik",
	"sandvikcoromant",
	"sanofi",
	"sap",
	"sapo",
	"sarl",
	"sas",
	"save",
	"saxo",
	"sbi",
	"sbs",
	"sca",
	"scb",
	"schaeffler",
	"schmidt",
	"scholarships",
	"school",
	"schule",
	"schwarz",
	"science",
	"scjohnson",
	"scor",
	"scot",
	"search",
	"seat",
	"secure",
	"security",
	"seek",
	"select",
	"sener",
	"services",
	"ses",
	"seven",
	"sew",
	"sex",
	"sexy",
	"sfr",
	"shangrila",
	"sharp",
	"shaw",
	"shell",
	"shia",
	"shiksha",
	"shoes",
	"shop",
	"shopping",
	"shouji",
	"show",
	"showtime",
	"shriram",
	"silk",
	"sina",
	"singles",
	"site",
	"ski",
	"skin",
	"sky",
	"skype",
	"sling",
	"smart",
	"smile",
	"sncf",
	"soccer",
	"social",
	"softbank",
	"software",
	"sohu",
	"solar",
	"solutions",
	"song",
	"sony",
	"soy",
	"space",
	"spiegel",
	"spot",
	"spreadbetting",
	"srl",
	"srt",
	"stada",
	"staples",
	"star",
	"starhub",
	"statebank",
	"statefarm",
	"statoil",
	"stc",
	"stcgroup",
	"stockholm",
	"storage",
	"store",
	"stream",
	"studio",
	"study",
	"style",
	"sucks",
	"supplies",
	"supply",
	"support",
	"surf",
	"surgery",
	"suzuki",
	"swatch",
	"swiftcover",
	"swiss",
	"sydney",
	"symantec",
	"systems",
	"tab",
	"taipei",
	"talk",
	"taobao",
	"target",
	"tatamotors",
	"tatar",
	"tattoo",
	"tax",
	"taxi",
	"tci",
	"tdk",
	"team",
	"tech",
	"technology",
	"telecity",
	"telefonica",
	"temasek",
	"tennis",
	"teva",
	"thd",
	"theater",
	"theatre",
	"tiaa",
	"tickets",
	"tienda",
	"tiffany",
	"tips",
	"tires",
	"tirol",
	"tjmaxx",
	"tjx",
	"tkmaxx",
	"tmall",
	"today",
	"tokyo",
	"tools",
	"top",
	"toray",
	"toshiba",
	"total",
	"tours",
	"town",
	"toyota",
	"toys",
	"trade",
	"trading",
	"training",
	"travelchannel",
	"travelers",
	"travelersinsurance",
	"trust",
	"trv",
	"tube",
	"tui",
	"tunes",
	"tushu",
	"tvs",
	"ubank",
	"ubs",
	"uconnect",
	"unicom",
	"university",
	"uno",
	"uol",
	"ups",
	"vacations",
	"vana",
	"vanguard",
	"vegas",
	"ventures",
	"verisign",
	"versicherung",
	"vet",
	"viajes",
	"video",
	"vig",
	"viking",
	"villas",
	"vin",
	"vip",
	"virgin",
	"visa",
	"vision",
	"vista",
	"vistaprint",
	"viva",
	"vivo",
	"vlaanderen",
	"vodka",
	"volkswagen",
	"volvo",
	"vote",
	"voting",
	"voto",
	"voyage",
	"vuelos",
	"wales",
	"walmart",
	"walter",
	"wang",
	"wanggou",
	"warman",
	"watch",
	"watches",
	"weather",
	"weatherchannel",
	"webcam",
	"weber",
	"website",
	"wed",
	"wedding",
	"weibo",
	"weir",
	"whoswho",
	"wien",
	"wiki",
	"williamhill",
	"win",
	"windows",
	"wine",
	"winners",
	"wme",
	"wolterskluwer",
	"woodside",
	"work",
	"works",
	"world",
	"wow",
	"wtc",
	"wtf",
	"xbox",
	"xerox",
	"xfinity",
	"xihuan",
	"xin",
	"कॉम",
	"セール",
	"佛山",
	"慈善",
	"集团",
	"在线",
	"大众汽车",
	"点看",
	"คอม",
	"八卦",
	"موقع",
	"公益",
	"公司",
	"香格里拉",
	"网站",
	"移动",
	"我爱你",
	"москва",
	"католик",
	"онлайн",
	"сайт",
	"联通",
	"קום",
	"时尚",
	"微博",
	"淡马锡",
	"ファッション",
	"орг",
	"नेट",
	"ストア",
	"삼성",
	"商标",
	"商店",
	"商城",
	"дети",
	"ポイント",
	"新闻",
	"工行",
	"家電",
	"كوم",
	"中文网",
	"中信",
	"娱乐",
	"谷歌",
	"電訊盈科",
	"购物",
	"クラウド",
	"通販",
	"网店",
	"संगठन",
	"餐厅",
	"网络",
	"ком",
	"诺基亚",
	"食品",
	"飞利浦",
	"手表",
	"手机",
	"ارامكو",
	"العليان",
	"اتصالات",
	"بازار",
	"موبايلي",
	"ابوظبي",
	"كاثوليك",
	"همراه",
	"닷컴",
	"政府",
	"شبكة",
	"بيتك",
	"عرب",
	"机构",
	"组织机构",
	"健康",
	"рус",
	"珠宝",
	"大拿",
	"みんな",
	"グーグル",
	"世界",
	"書籍",
	"网址",
	"닷넷",
	"コム",
	"天主教",
	"游戏",
	"vermögensberater",
	"vermögensberatung",
	"企业",
	"信息",
	"嘉里大酒店",
	"嘉里",
	"广东",
	"政务",
	"xperia",
	"xyz",
	"yachts",
	"yahoo",
	"yamaxun",
	"yandex",
	"yodobashi",
	"yoga",
	"yokohama",
	"you",
	"youtube",
	"yun",
	"zappos",
	"zara",
	"zero",
	"zip",
	"zippo",
	"zone",
	"zuerich",
	"beep.pl",
	"*.compute.estate",
	"*.alces.network",
	"*.alwaysdata.net",
	"cloudfront.net",
	"*.compute.amazonaws.com",
	"*.compute-1.amazonaws.com",
	"*.compute.amazonaws.com.cn",
	"us-east-1.amazonaws.com",
	"elasticbeanstalk.cn-north-1.amazonaws.com.cn",
	"*.elasticbeanstalk.com",
	"*.elb.amazonaws.com",
	"*.elb.amazonaws.com.cn",
	"s3.amazonaws.com",
	"s3-ap-northeast-1.amazonaws.com",
	"s3-ap-northeast-2.amazonaws.com",
	"s3-ap-south-1.amazonaws.com",
	"s3-ap-southeast-1.amazonaws.com",
	"s3-ap-southeast-2.amazonaws.com",
	"s3-ca-central-1.amazonaws.com",
	"s3-eu-central-1.amazonaws.com",
	"s3-eu-west-1.amazonaws.com",
	"s3-eu-west-2.amazonaws.com",
	"s3-external-1.amazonaws.com",
	"s3-fips-us-gov-west-1.amazonaws.com",
	"s3-sa-east-1.amazonaws.com",
	"s3-us-gov-west-1.amazonaws.com",
	"s3-us-east-2.amazonaws.com",
	"s3-us-west-1.amazonaws.com",
	"s3-us-west-2.amazonaws.com",
	"s3.ap-northeast-2.amazonaws.com",
	"s3.ap-south-1.amazonaws.com",
	"s3.cn-north-1.amazonaws.com.cn",
	"s3.ca-central-1.amazonaws.com",
	"s3.eu-central-1.amazonaws.com",
	"s3.eu-west-2.amazonaws.com",
	"s3.us-east-2.amazonaws.com",
	"s3.dualstack.ap-northeast-1.amazonaws.com",
	"s3.dualstack.ap-northeast-2.amazonaws.com",
	"s3.dualstack.ap-south-1.amazonaws.com",
	"s3.dualstack.ap-southeast-1.amazonaws.com",
	"s3.dualstack.ap-southeast-2.amazonaws.com",
	"s3.dualstack.ca-central-1.amazonaws.com",
	"s3.dualstack.eu-central-1.amazonaws.com",
	"s3.dualstack.eu-west-1.amazonaws.com",
	"s3.dualstack.eu-west-2.amazonaws.com",
	"s3.dualstack.sa-east-1.amazonaws.com",
	"s3.dualstack.us-east-1.amazonaws.com",
	"s3.dualstack.us-east-2.amazonaws.com",
	"s3-website-us-east-1.amazonaws.com",
	"s3-website-us-west-1.amazonaws.com",
	"s3-website-us-west-2.amazonaws.com",
	"s3-website-ap-northeast-1.amazonaws.com",
	"s3-website-ap-southeast-1.amazonaws.com",
	"s3-website-ap-southeast-2.amazonaws.com",
	"s3-website-eu-west-1.amazonaws.com",
	"s3-website-sa-east-1.amazonaws.com",
	"s3-website.ap-northeast-2.amazonaws.com",
	"s3-website.ap-south-1.amazonaws.com",
	"s3-website.ca-central-1.amazonaws.com",
	"s3-website.eu-central-1.amazonaws.com",
	"s3-website.eu-west-2.amazonaws.com",
	"s3-website.us-east-2.amazonaws.com",
	"t3l3p0rt.net",
	"tele.amune.org",
	"on-aptible.com",
	"user.party.eus",
	"pimienta.org",
	"poivron.org",
	"potager.org",
	"sweetpepper.org",
	"myasustor.com",
	"myfritz.net",
	"backplaneapp.io",
	"betainabox.com",
	"bnr.la",
	"boxfuse.io",
	"browsersafetymark.io",
	"mycd.eu",
	"ae.org",
	"ar.com",
	"br.com",
	"cn.com",
	"com.de",
	"com.se",
	"de.com",
	"eu.com",
	"gb.com",
	"gb.net",
	"hu.com",
	"hu.net",
	"jp.net",
	"jpn.com",
	"kr.com",
	"mex.com",
	"no.com",
	"qc.com",
	"ru.com",
	"sa.com",
	"se.com",
	"se.net",
	"uk.com",
	"uk.net",
	"us.com",
	"uy.com",
	"za.bz",
	"za.com",
	"africa.com",
	"gr.com",
	"in.net",
	"us.org",
	"co.com",
	"c.la",
	"certmgr.org",
	"xenapponazure.com",
	"virtueeldomein.nl",
	"cloudcontrolled.com",
	"cloudcontrolapp.com",
	"co.ca",
	"co.cz",
	"c.cdn77.org",
	"cdn77-ssl.net",
	"r.cdn77.net",
	"rsc.cdn77.org",
	"ssl.origin.cdn77-secure.org",
	"cloudns.asia",
	"cloudns.biz",
	"cloudns.club",
	"cloudns.cc",
	"cloudns.eu",
	"cloudns.in",
	"cloudns.info",
	"cloudns.org",
	"cloudns.pro",
	"cloudns.pw",
	"cloudns.us",
	"co.nl",
	"co.no",
	"*.platform.sh",
	"dyn.cosidns.de",
	"dynamisches-dns.de",
	"dnsupdater.de",
	"internet-dns.de",
	"l-o-g-i-n.de",
	"dynamic-dns.info",
	"feste-ip.net",
	"knx-server.net",
	"static-access.net",
	"realm.cz",
	"*.cryptonomic.net",
	"cupcake.is",
	"cyon.link",
	"cyon.site",
	"daplie.me",
	"biz.dk",
	"co.dk",
	"firm.dk",
	"reg.dk",
	"store.dk",
	"dedyn.io",
	"dnshome.de",
	"dreamhosters.com",
	"mydrobo.com",
	"drud.io",
	"drud.us",
	"duckdns.org",
	"dy.fi",
	"tunk.org",
	"dyndns-at-home.com",
	"dyndns-at-work.com",
	"dyndns-blog.com",
	"dyndns-free.com",
	"dyndns-home.com",
	"dyndns-ip.com",
	"dyndns-mail.com",
	"dyndns-office.com",
	"dyndns-pics.com",
	"dyndns-remote.com",
	"dyndns-server.com",
	"dyndns-web.com",
	"dyndns-wiki.com",
	"dyndns-work.com",
	"dyndns.biz",
	"dyndns.info",
	"dyndns.org",
	"dyndns.tv",
	"at-band-camp.net",
	"ath.cx",
	"barrel-of-knowledge.info",
	"barrell-of-knowledge.info",
	"better-than.tv",
	"blogdns.com",
	"blogdns.net",
	"blogdns.org",
	"blogsite.org",
	"boldlygoingnowhere.org",
	"broke-it.net",
	"buyshouses.net",
	"cechire.com",
	"dnsalias.com",
	"dnsalias.net",
	"dnsalias.org",
	"dnsdojo.com",
	"dnsdojo.net",
	"dnsdojo.org",
	"does-it.net",
	"doesntexist.com",
	"doesntexist.org",
	"dontexist.com",
	"dontexist.net",
	"dontexist.org",
	"doomdns.com",
	"doomdns.org",
	"dvrdns.org",
	"dyn-o-saur.com",
	"dynalias.com",
	"dynalias.net",
	"dynalias.org",
	"dynathome.net",
	"dyndns.ws",
	"endofinternet.net",
	"endofinternet.org",
	"endoftheinternet.org",
	"est-a-la-maison.com",
	"est-a-la-masion.com",
	"est-le-patron.com",
	"est-mon-blogueur.com",
	"for-better.biz",
	"for-more.biz",
	"for-our.info",
	"for-some.biz",
	"for-the.biz",
	"forgot.her.name",
	"forgot.his.name",
	"from-ak.com",
	"from-al.com",
	"from-ar.com",
	"from-az.net",
	"from-ca.com",
	"from-co.net",
	"from-ct.com",
	"from-dc.com",
	"from-de.com",
	"from-fl.com",
	"from-ga.com",
	"from-hi.com",
	"from-ia.com",
	"from-id.com",
	"from-il.com",
	"from-in.com",
	"from-ks.com",
	"from-ky.com",
	"from-la.net",
	"from-ma.com",
	"from-md.com",
	"from-me.org",
	"from-mi.com",
	"from-mn.com",
	"from-mo.com",
	"from-ms.com",
	"from-mt.com",
	"from-nc.com",
	"from-nd.com",
	"from-ne.com",
	"from-nh.com",
	"from-nj.com",
	"from-nm.com",
	"from-nv.com",
	"from-ny.net",
	"from-oh.com",
	"from-ok.com",
	"from-or.com",
	"from-pa.com",
	"from-pr.com",
	"from-ri.com",
	"from-sc.com",
	"from-sd.com",
	"from-tn.com",
	"from-tx.com",
	"from-ut.com",
	"from-va.com",
	"from-vt.com",
	"from-wa.com",
	"from-wi.com",
	"from-wv.com",
	"from-wy.com",
	"ftpaccess.cc",
	"fuettertdasnetz.de",
	"game-host.org",
	"game-server.cc",
	"getmyip.com",
	"gets-it.net",
	"go.dyndns.org",
	"gotdns.com",
	"gotdns.org",
	"groks-the.info",
	"groks-this.info",
	"ham-radio-op.net",
	"here-for-more.info",
	"hobby-site.com",
	"hobby-site.org",
	"home.dyndns.org",
	"homedns.org",
	"homeftp.net",
	"homeftp.org",
	"homeip.net",
	"homelinux.com",
	"homelinux.net",
	"homelinux.org",
	"homeunix.com",
	"homeunix.net",
	"homeunix.org",
	"iamallama.com",
	"in-the-band.net",
	"is-a-anarchist.com",
	"is-a-blogger.com",
	"is-a-bookkeeper.com",
	"is-a-bruinsfan.org",
	"is-a-bulls-fan.com",
	"is-a-candidate.org",
	"is-a-caterer.com",
	"is-a-celticsfan.org",
	"is-a-chef.com",
	"is-a-chef.net",
	"is-a-chef.org",
	"is-a-conservative.com",
	"is-a-cpa.com",
	"is-a-cubicle-slave.com",
	"is-a-democrat.com",
	"is-a-designer.com",
	"is-a-doctor.com",
	"is-a-financialadvisor.com",
	"is-a-geek.com",
	"is-a-geek.net",
	"is-a-geek.org",
	"is-a-green.com",
	"is-a-guru.com",
	"is-a-hard-worker.com",
	"is-a-hunter.com",
	"is-a-knight.org",
	"is-a-landscaper.com",
	"is-a-lawyer.com",
	"is-a-liberal.com",
	"is-a-libertarian.com",
	"is-a-linux-user.org",
	"is-a-llama.com",
	"is-a-musician.com",
	"is-a-nascarfan.com",
	"is-a-nurse.com",
	"is-a-painter.com",
	"is-a-patsfan.org",
	"is-a-personaltrainer.com",
	"is-a-photographer.com",
	"is-a-player.com",
	"is-a-republican.com",
	"is-a-rockstar.com",
	"is-a-socialist.com",
	"is-a-soxfan.org",
	"is-a-student.com",
	"is-a-teacher.com",
	"is-a-techie.com",
	"is-a-therapist.com",
	"is-an-accountant.com",
	"is-an-actor.com",
	"is-an-actress.com",
	"is-an-anarchist.com",
	"is-an-artist.com",
	"is-an-engineer.com",
	"is-an-entertainer.com",
	"is-by.us",
	"is-certified.com",
	"is-found.org",
	"is-gone.com",
	"is-into-anime.com",
	"is-into-cars.com",
	"is-into-cartoons.com",
	"is-into-games.com",
	"is-leet.com",
	"is-lost.org",
	"is-not-certified.com",
	"is-saved.org",
	"is-slick.com",
	"is-uberleet.com",
	"is-very-bad.org",
	"is-very-evil.org",
	"is-very-good.org",
	"is-very-nice.org",
	"is-very-sweet.org",
	"is-with-theband.com",
	"isa-geek.com",
	"isa-geek.net",
	"isa-geek.org",
	"isa-hockeynut.com",
	"issmarterthanyou.com",
	"isteingeek.de",
	"istmein.de",
	"kicks-ass.net",
	"kicks-ass.org",
	"knowsitall.info",
	"land-4-sale.us",
	"lebtimnetz.de",
	"leitungsen.de",
	"likes-pie.com",
	"likescandy.com",
	"merseine.nu",
	"mine.nu",
	"misconfused.org",
	"mypets.ws",
	"myphotos.cc",
	"neat-url.com",
	"office-on-the.net",
	"on-the-web.tv",
	"podzone.net",
	"podzone.org",
	"readmyblog.org",
	"saves-the-whales.com",
	"scrapper-site.net",
	"scrapping.cc",
	"selfip.biz",
	"selfip.com",
	"selfip.info",
	"selfip.net",
	"selfip.org",
	"sells-for-less.com",
	"sells-for-u.com",
	"sells-it.net",
	"sellsyourhome.org",
	"servebbs.com",
	"servebbs.net",
	"servebbs.org",
	"serveftp.net",
	"serveftp.org",
	"servegame.org",
	"shacknet.nu",
	"simple-url.com",
	"space-to-rent.com",
	"stuff-4-sale.org",
	"stuff-4-sale.us",
	"teaches-yoga.com",
	"thruhere.net",
	"traeumtgerade.de",
	"webhop.biz",
	"webhop.info",
	"webhop.net",
	"webhop.org",
	"worse-than.tv",
	"writesthisblog.com",
	"ddnss.de",
	"dyn.ddnss.de",
	"dyndns.ddnss.de",
	"dyndns1.de",
	"dyn-ip24.de",
	"home-webserver.de",
	"dyn.home-webserver.de",
	"myhome-server.de",
	"ddnss.org",
	"dynv6.net",
	"e4.cz",
	"enonic.io",
	"customer.enonic.io",
	"eu.org",
	"al.eu.org",
	"asso.eu.org",
	"at.eu.org",
	"au.eu.org",
	"be.eu.org",
	"bg.eu.org",
	"ca.eu.org",
	"cd.eu.org",
	"ch.eu.org",
	"cn.eu.org",
	"cy.eu.org",
	"cz.eu.org",
	"de.eu.org",
	"dk.eu.org",
	"edu.eu.org",
	"ee.eu.org",
	"es.eu.org",
	"fi.eu.org",
	"fr.eu.org",
	"gr.eu.org",
	"hr.eu.org",
	"hu.eu.org",
	"ie.eu.org",
	"il.eu.org",
	"in.eu.org",
	"int.eu.org",
	"is.eu.org",
	"it.eu.org",
	"jp.eu.org",
	"kr.eu.org",
	"lt.eu.org",
	"lu.eu.org",
	"lv.eu.org",
	"mc.eu.org",
	"me.eu.org",
	"mk.eu.org",
	"mt.eu.org",
	"my.eu.org",
	"net.eu.org",
	"ng.eu.org",
	"nl.eu.org",
	"no.eu.org",
	"nz.eu.org",
	"paris.eu.org",
	"pl.eu.org",
	"pt.eu.org",
	"q-a.eu.org",
	"ro.eu.org",
	"ru.eu.org",
	"se.eu.org",
	"si.eu.org",
	"sk.eu.org",
	"tr.eu.org",
	"uk.eu.org",
	"us.eu.org",
	"eu-1.evennode.com",
	"eu-2.evennode.com",
	"us-1.evennode.com",
	"us-2.evennode.com",
	"apps.fbsbx.com",
	"ru.net",
	"adygeya.ru",
	"bashkiria.ru",
	"bir.ru",
	"cbg.ru",
	"com.ru",
	"dagestan.ru",
	"grozny.ru",
	"kalmykia.ru",
	"kustanai.ru",
	"marine.ru",
	"mordovia.ru",
	"msk.ru",
	"mytis.ru",
	"nalchik.ru",
	"nov.ru",
	"pyatigorsk.ru",
	"spb.ru",
	"vladikavkaz.ru",
	"vladimir.ru",
	"abkhazia.su",
	"adygeya.su",
	"aktyubinsk.su",
	"arkhangelsk.su",
	"armenia.su",
	"ashgabad.su",
	"azerbaijan.su",
	"balashov.su",
	"bashkiria.su",
	"bryansk.su",
	"bukhara.su",
	"chimkent.su",
	"dagestan.su",
	"east-kazakhstan.su",
	"exnet.su",
	"georgia.su",
	"grozny.su",
	"ivanovo.su",
	"jambyl.su",
	"kalmykia.su",
	"kaluga.su",
	"karacol.su",
	"karaganda.su",
	"karelia.su",
	"khakassia.su",
	"krasnodar.su",
	"kurgan.su",
	"kustanai.su",
	"lenug.su",
	"mangyshlak.su",
	"mordovia.su",
	"msk.su",
	"murmansk.su",
	"nalchik.su",
	"navoi.su",
	"north-kazakhstan.su",
	"nov.su",
	"obninsk.su",
	"penza.su",
	"pokrovsk.su",
	"sochi.su",
	"spb.su",
	"tashkent.su",
	"termez.su",
	"togliatti.su",
	"troitsk.su",
	"tselinograd.su",
	"tula.su",
	"tuva.su",
	"vladikavkaz.su",
	"vladimir.su",
	"vologda.su",
	"fastlylb.net",
	"map.fastlylb.net",
	"freetls.fastly.net",
	"map.fastly.net",
	"a.prod.fastly.net",
	"global.prod.fastly.net",
	"a.ssl.fastly.net",
	"b.ssl.fastly.net",
	"global.ssl.fastly.net",
	"fhapp.xyz",
	"firebaseapp.com",
	"flynnhub.com",
	"freebox-os.com",
	"freeboxos.com",
	"fbx-os.fr",
	"fbxos.fr",
	"freebox-os.fr",
	"freeboxos.fr",
	"myfusion.cloud",
	"futurehosting.at",
	"futuremailing.at",
	"*.ex.ortsinfo.at",
	"*.kunden.ortsinfo.at",
	"*.statics.cloud",
	"service.gov.uk",
	"github.io",
	"githubusercontent.com",
	"githubcloud.com",
	"*.api.githubcloud.com",
	"*.ext.githubcloud.com",
	"gist.githubcloud.com",
	"*.githubcloudusercontent.com",
	"gitlab.io",
	"homeoffice.gov.uk",
	"ro.im",
	"shop.ro",
	"goip.de",
	"*.0emm.com",
	"appspot.com",
	"blogspot.ae",
	"blogspot.al",
	"blogspot.am",
	"blogspot.ba",
	"blogspot.be",
	"blogspot.bg",
	"blogspot.bj",
	"blogspot.ca",
	"blogspot.cf",
	"blogspot.ch",
	"blogspot.cl",
	"blogspot.co.at",
	"blogspot.co.id",
	"blogspot.co.il",
	"blogspot.co.ke",
	"blogspot.co.nz",
	"blogspot.co.uk",
	"blogspot.co.za",
	"blogspot.com",
	"blogspot.com.ar",
	"blogspot.com.au",
	"blogspot.com.br",
	"blogspot.com.by",
	"blogspot.com.co",
	"blogspot.com.cy",
	"blogspot.com.ee",
	"blogspot.com.eg",
	"blogspot.com.es",
	"blogspot.com.mt",
	"blogspot.com.ng",
	"blogspot.com.tr",
	"blogspot.com.uy",
	"blogspot.cv",
	"blogspot.cz",
	"blogspot.de",
	"blogspot.dk",
	"blogspot.fi",
	"blogspot.fr",
	"blogspot.gr",
	"blogspot.hk",
	"blogspot.hr",
	"blogspot.hu",
	"blogspot.ie",
	"blogspot.in",
	"blogspot.is",
	"blogspot.it",
	"blogspot.jp",
	"blogspot.kr",
	"blogspot.li",
	"blogspot.lt",
	"blogspot.lu",
	"blogspot.md",
	"blogspot.mk",
	"blogspot.mr",
	"blogspot.mx",
	"blogspot.my",
	"blogspot.nl",
	"blogspot.no",
	"blogspot.pe",
	"blogspot.pt",
	"blogspot.qa",
	"blogspot.re",
	"blogspot.ro",
	"blogspot.rs",
	"blogspot.ru",
	"blogspot.se",
	"blogspot.sg",
	"blogspot.si",
	"blogspot.sk",
	"blogspot.sn",
	"blogspot.td",
	"blogspot.tw",
	"blogspot.ug",
	"blogspot.vn",
	"cloudfunctions.net",
	"codespot.com",
	"googleapis.com",
	"googlecode.com",
	"pagespeedmobilizer.com",
	"publishproxy.com",
	"withgoogle.com",
	"withyoutube.com",
	"hashbang.sh",
	"hasura-app.io",
	"hepforge.org",
	"herokuapp.com",
	"herokussl.com",
	"iki.fi",
	"biz.at",
	"info.at",
	"ac.leg.br",
	"al.leg.br",
	"am.leg.br",
	"ap.leg.br",
	"ba.leg.br",
	"ce.leg.br",
	"df.leg.br",
	"es.leg.br",
	"go.leg.br",
	"ma.leg.br",
	"mg.leg.br",
	"ms.leg.br",
	"mt.leg.br",
	"pa.leg.br",
	"pb.leg.br",
	"pe.leg.br",
	"pi.leg.br",
	"pr.leg.br",
	"rj.leg.br",
	"rn.leg.br",
	"ro.leg.br",
	"rr.leg.br",
	"rs.leg.br",
	"sc.leg.br",
	"se.leg.br",
	"sp.leg.br",
	"to.leg.br",
	"*.triton.zone",
	"*.cns.joyent.com",
	"js.org",
	"keymachine.de",
	"knightpoint.systems",
	"co.krd",
	"edu.krd",
	"*.magentosite.cloud",
	"meteorapp.com",
	"eu.meteorapp.com",
	"co.pl",
	"azurewebsites.net",
	"azure-mobile.net",
	"cloudapp.net",
	"bmoattachments.org",
	"4u.com",
	"ngrok.io",
	"nfshost.com",
	"nsupdate.info",
	"nerdpol.ovh",
	"blogsyte.com",
	"brasilia.me",
	"cable-modem.org",
	"ciscofreak.com",
	"collegefan.org",
	"couchpotatofries.org",
	"damnserver.com",
	"ddns.me",
	"ditchyourip.com",
	"dnsfor.me",
	"dnsiskinky.com",
	"dvrcam.info",
	"dynns.com",
	"eating-organic.net",
	"fantasyleague.cc",
	"geekgalaxy.com",
	"golffan.us",
	"health-carereform.com",
	"homesecuritymac.com",
	"homesecuritypc.com",
	"hopto.me",
	"ilovecollege.info",
	"loginto.me",
	"mlbfan.org",
	"mmafan.biz",
	"myactivedirectory.com",
	"mydissent.net",
	"myeffect.net",
	"mymediapc.net",
	"mypsx.net",
	"mysecuritycamera.com",
	"mysecuritycamera.net",
	"mysecuritycamera.org",
	"net-freaks.com",
	"nflfan.org",
	"nhlfan.net",
	"no-ip.ca",
	"no-ip.co.uk",
	"no-ip.net",
	"noip.us",
	"onthewifi.com",
	"pgafan.net",
	"point2this.com",
	"pointto.us",
	"privatizehealthinsurance.net",
	"quicksytes.com",
	"read-books.org",
	"securitytactics.com",
	"serveexchange.com",
	"servehumour.com",
	"servep2p.com",
	"servesarcasm.com",
	"stufftoread.com",
	"ufcfan.org",
	"unusualperson.com",
	"workisboring.com",
	"3utilities.com",
	"bounceme.net",
	"ddns.net",
	"ddnsking.com",
	"gotdns.ch",
	"hopto.org",
	"myftp.biz",
	"myftp.org",
	"myvnc.com",
	"no-ip.biz",
	"no-ip.info",
	"no-ip.org",
	"noip.me",
	"redirectme.net",
	"servebeer.com",
	"serveblog.net",
	"servecounterstrike.com",
	"serveftp.com",
	"servegame.com",
	"servehalflife.com",
	"servehttp.com",
	"serveirc.com",
	"serveminecraft.net",
	"servemp3.com",
	"servepics.com",
	"servequake.com",
	"sytes.net",
	"webhop.me",
	"zapto.org",
	"nyc.mn",
	"nid.io",
	"opencraft.hosting",
	"operaunite.com",
	"outsystemscloud.com",
	"ownprovider.com",
	"oy.lc",
	"pgfog.com",
	"pagefrontapp.com",
	"art.pl",
	"gliwice.pl",
	"krakow.pl",
	"poznan.pl",
	"wroc.pl",
	"zakopane.pl",
	"pantheonsite.io",
	"gotpantheon.com",
	"mypep.link",
	"on-web.fr",
	"xen.prgmr.com",
	"priv.at",
	"protonet.io",
	"chirurgiens-dentistes-en-france.fr",
	"qa2.com",
	"dev-myqnapcloud.com",
	"alpha-myqnapcloud.com",
	"myqnapcloud.com",
	"rackmaze.com",
	"rackmaze.net",
	"rhcloud.com",
	"hzc.io",
	"wellbeingzone.eu",
	"ptplus.fit",
	"wellbeingzone.co.uk",
	"sandcats.io",
	"logoip.de",
	"logoip.com",
	"firewall-gateway.com",
	"firewall-gateway.de",
	"my-gateway.de",
	"my-router.de",
	"spdns.de",
	"spdns.eu",
	"firewall-gateway.net",
	"my-firewall.org",
	"myfirewall.org",
	"spdns.org",
	"biz.ua",
	"co.ua",
	"pp.ua",
	"shiftedit.io",
	"myshopblocks.com",
	"1kapp.com",
	"appchizi.com",
	"applinzi.com",
	"sinaapp.com",
	"vipsinaapp.com",
	"bounty-full.com",
	"alpha.bounty-full.com",
	"beta.bounty-full.com",
	"static.land",
	"dev.static.land",
	"sites.static.land",
	"apps.lair.io",
	"*.stolos.io",
	"spacekit.io",
	"stackspace.space",
	"storj.farm",
	"diskstation.me",
	"dscloud.biz",
	"dscloud.me",
	"dscloud.mobi",
	"dsmynas.com",
	"dsmynas.net",
	"dsmynas.org",
	"familyds.com",
	"familyds.net",
	"familyds.org",
	"i234.me",
	"myds.me",
	"synology.me",
	"taifun-dns.de",
	"gda.pl",
	"gdansk.pl",
	"gdynia.pl",
	"med.pl",
	"sopot.pl",
	"bloxcms.com",
	"townnews-staging.com",
	"*.transurl.be",
	"*.transurl.eu",
	"*.transurl.nl",
	"tuxfamily.org",
	"dd-dns.de",
	"diskstation.eu",
	"diskstation.org",
	"dray-dns.de",
	"draydns.de",
	"dyn-vpn.de",
	"dynvpn.de",
	"mein-vigor.de",
	"my-vigor.de",
	"my-wan.de",
	"syno-ds.de",
	"synology-diskstation.de",
	"synology-ds.de",
	"hk.com",
	"hk.org",
	"ltd.hk",
	"inc.hk",
	"lib.de.us",
	"router.management",
	"remotewd.com",
	"wmflabs.org",
	"yolasite.com",
	"ybo.faith",
	"yombo.me",
	"homelink.one",
	"ybo.party",
	"ybo.review",
	"ybo.science",
	"ybo.trade",
	"za.net",
	"za.org",
	"now.sh",
	"cc.ua",
	"inf.ua",
	"ltd.ua"
];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)(module), __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(14)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);