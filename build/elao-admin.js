!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.elaoAdmin=e():t.elaoAdmin=e()}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"Collapsible",(function(){return o})),n.d(e,"Drop",(function(){return y})),n.d(e,"Tree",(function(){return k})),n.d(e,"MobileSidebar",(function(){return A}));n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}var o=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.trigger=n,this.target=r,this.active=!1,this.open=this.open.bind(this),this.close=this.close.bind(this),this.toggle=this.toggle.bind(this),this.trigger.addEventListener("click",this.toggle)}return i(t,null,[{key:"init",value:function(){var t=this,e=this.containerClass,n=this.triggerClass,r=this.targetClass;return Array.from(document.getElementsByClassName(e)).map((function(e){return new t(e,e.querySelector(".".concat(n)),e.querySelector(".".concat(r)))}))}},{key:"containerClass",get:function(){return"collapse"}},{key:"containerActiveClass",get:function(){return"collapse--show"}},{key:"targetClass",get:function(){return"collapse__menu"}},{key:"triggerClass",get:function(){return"collapse__trigger"}}]),i(t,[{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!this.active)}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!0)}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!1)}},{key:"setActive",value:function(t){this.active=t,this.render()}},{key:"render",value:function(){var t=this.constructor.containerActiveClass;this.container.classList.toggle(t,this.active)}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(t.preventDefault(),t.stopPropagation())}}]),t}();function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var i=v(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(o,t);var e,n,r,i=f(o);function o(){return u(this,o),i.apply(this,arguments)}return e=o,r=[{key:"init",value:function(){var t=this,e=this.containerClass,n=this.triggerClass,r=this.targetClass;return Array.from(document.getElementsByClassName(e)).map((function(e){return new t(e,e.querySelector(".".concat(n)),e.querySelector(".".concat(r)))}))}},{key:"containerClass",get:function(){return"drop"}},{key:"containerActiveClass",get:function(){return"drop--show"}},{key:"targetClass",get:function(){return"drop__menu"}},{key:"triggerClass",get:function(){return"drop__button"}}],(n=[{key:"setActive",value:function(t){l(v(o.prototype),"setActive",this).call(this,t),t?document.addEventListener("click",this.close):document.removeEventListener("click",this.close)}}])&&s(e.prototype,n),r&&s(e,r),o}(o);function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,n){return e&&g(t.prototype,e),n&&g(t,n),t}var d=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tree=e,this.container=n,this.trigger=r,this.content=i,this.active=!1,this.open=this.open.bind(this),this.close=this.close.bind(this),this.toggle=this.toggle.bind(this),this.trigger.addEventListener("click",this.toggle)}return p(t,null,[{key:"init",value:function(t,e){var n=this.triggerClass,r=this.contentClass,i=e.querySelector(":scope > .".concat(n)),o=e.querySelector(":scope > .".concat(r));return i&&o?new this(t,e,i,o):null}},{key:"triggerClass",get:function(){return"tree-item__trigger"}},{key:"contentClass",get:function(){return"tree-item__content"}},{key:"itemActiveClass",get:function(){return"tree-item--active"}}]),p(t,[{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.tree.setActive(this,!this.active)}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.tree.setActive(this,!0)}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.tree.setActive(this,!1)}},{key:"setActive",value:function(t){this.active=t,this.render()}},{key:"render",value:function(){var t=this.constructor.itemActiveClass;this.container.classList.toggle(t,this.active)}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(t.preventDefault(),t.stopPropagation())}}]),t}();function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e,n){return e&&b(t.prototype,e),n&&b(t,n),t}var k=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.items=n.map((function(t){return d.init(r,t)})).filter((function(t){return!!t}))}return m(t,null,[{key:"init",value:function(){var t=this,e=this.containerClass,n=this.itemClass;return Array.from(document.getElementsByClassName(e)).map((function(e){return new t(e,Array.from(e.querySelectorAll(":scope > .".concat(n))))}))}},{key:"containerClass",get:function(){return"tree"}},{key:"itemClass",get:function(){return"tree-item"}}]),m(t,[{key:"setActive",value:function(t,e){e&&this.items.forEach((function(e){e!==t&&e.setActive(!1)})),t.setActive(e)}}]),t}();function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e&&C(t.prototype,e),n&&C(t,n),t}var A=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=e,this.menu=n,this.active=!1,this.open=this.open.bind(this),this.close=this.close.bind(this),this.toggle=this.toggle.bind(this),this.button.addEventListener("click",this.toggle)}return w(t,null,[{key:"init",value:function(){var t=this.menuButtonSelector,e=this.navSelector,n=document.querySelector(t),r=document.querySelector(e);return n&&r?new this(n,r):null}},{key:"menuButtonSelector",get:function(){return".header .menu-button"}},{key:"navSelector",get:function(){return".mobile-nav"}},{key:"menuButtonOffClass",get:function(){return"menu-button--close"}},{key:"mobileNavActiveClass",get:function(){return"mobile-nav--show"}}]),w(t,[{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!this.active)}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!0)}},{key:"close",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.cancel(t),this.setActive(!1)}},{key:"setActive",value:function(t){this.active=t,this.render()}},{key:"render",value:function(){var t=this.constructor,e=t.menuButtonOffClass,n=t.mobileNavActiveClass;this.button.classList.toggle(e,this.active),this.menu.classList.toggle(n,this.active)}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&(t.preventDefault(),t.stopPropagation())}}]),t}()}])}));