/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behavior/Collapsible.js":
/*!*************************************!*\
  !*** ./src/behavior/Collapsible.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Collapsible)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Collapsible\n */\nvar Collapsible = /*#__PURE__*/function () {\n  _createClass(Collapsible, null, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var containerClass = this.containerClass,\n          triggerClass = this.triggerClass,\n          targetClass = this.targetClass;\n      var elements = Array.from(document.getElementsByClassName(containerClass));\n      return elements.map(function (element) {\n        return new _this(element, element.querySelector(\".\".concat(triggerClass)), element.querySelector(\".\".concat(targetClass)));\n      });\n    }\n  }, {\n    key: \"containerClass\",\n    get: function get() {\n      return 'collapse';\n    }\n  }, {\n    key: \"containerActiveClass\",\n    get: function get() {\n      return 'collapse--show';\n    }\n  }, {\n    key: \"targetClass\",\n    get: function get() {\n      return 'collapse__menu';\n    }\n  }, {\n    key: \"triggerClass\",\n    get: function get() {\n      return 'collapse__trigger';\n    }\n  }]);\n\n  function Collapsible(container, trigger, target) {\n    _classCallCheck(this, Collapsible);\n\n    this.container = container;\n    this.trigger = trigger;\n    this.target = target;\n    this.active = false;\n    this.open = this.open.bind(this);\n    this.close = this.close.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.trigger.addEventListener('click', this.toggle);\n  }\n\n  _createClass(Collapsible, [{\n    key: \"toggle\",\n    value: function toggle() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(!this.active);\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(true);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(false);\n    }\n  }, {\n    key: \"setActive\",\n    value: function setActive(active) {\n      this.active = active;\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var containerActiveClass = this.constructor.containerActiveClass;\n      this.container.classList.toggle(containerActiveClass, this.active);\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (event) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (event) {\n        event.stopPropagation();\n      }\n    }\n  }]);\n\n  return Collapsible;\n}();\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/behavior/Collapsible.js?");

/***/ }),

/***/ "./src/behavior/Drop.js":
/*!******************************!*\
  !*** ./src/behavior/Drop.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Drop)\n/* harmony export */ });\n/* harmony import */ var _Collapsible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapsible */ \"./src/behavior/Collapsible.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar instances = [];\n/**\n * Drop\n */\n\nvar Drop = /*#__PURE__*/function (_Collapsible) {\n  _inherits(Drop, _Collapsible);\n\n  var _super = _createSuper(Drop);\n\n  function Drop() {\n    _classCallCheck(this, Drop);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Drop, [{\n    key: \"setActive\",\n    value: function setActive(active) {\n      if (active) {\n        instances.forEach(function (instance) {\n          return instance.setActive(false);\n        });\n      }\n\n      _get(_getPrototypeOf(Drop.prototype), \"setActive\", this).call(this, active);\n\n      if (active) {\n        this.container.addEventListener('click', this.stop);\n        document.addEventListener('click', this.close);\n      } else {\n        this.container.removeEventListener('click', this.stop);\n        document.removeEventListener('click', this.close);\n      }\n    }\n  }], [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var containerClass = this.containerClass,\n          triggerClass = this.triggerClass,\n          targetClass = this.targetClass;\n      var elements = Array.from(document.getElementsByClassName(containerClass));\n      instances = elements.map(function (element) {\n        return new _this(element, element.querySelector(\".\".concat(triggerClass)), element.querySelector(\".\".concat(targetClass)));\n      });\n      return instances;\n    }\n  }, {\n    key: \"containerClass\",\n    get: function get() {\n      return 'drop';\n    }\n  }, {\n    key: \"containerActiveClass\",\n    get: function get() {\n      return 'drop--show';\n    }\n  }, {\n    key: \"targetClass\",\n    get: function get() {\n      return 'drop__menu';\n    }\n  }, {\n    key: \"triggerClass\",\n    get: function get() {\n      return 'drop__button';\n    }\n  }]);\n\n  return Drop;\n}(_Collapsible__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/behavior/Drop.js?");

/***/ }),

/***/ "./src/behavior/Tree.js":
/*!******************************!*\
  !*** ./src/behavior/Tree.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeItem */ \"./src/behavior/TreeItem.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * Tree\n */\n\nvar Tree = /*#__PURE__*/function () {\n  _createClass(Tree, null, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var containerClass = this.containerClass,\n          itemClass = this.itemClass;\n      var elements = Array.from(document.getElementsByClassName(containerClass));\n      return elements.map(function (element) {\n        return new _this(element, Array.from(element.querySelectorAll(\":scope > .\".concat(itemClass))));\n      });\n    }\n  }, {\n    key: \"containerClass\",\n    get: function get() {\n      return 'tree';\n    }\n  }, {\n    key: \"itemClass\",\n    get: function get() {\n      return 'tree-item';\n    }\n  }]);\n\n  function Tree(container, items) {\n    var _this2 = this;\n\n    _classCallCheck(this, Tree);\n\n    this.container = container;\n    this.items = items.map(function (item) {\n      return _TreeItem__WEBPACK_IMPORTED_MODULE_0__.default.init(_this2, item);\n    }).filter(function (item) {\n      return !!item;\n    });\n  }\n\n  _createClass(Tree, [{\n    key: \"setActive\",\n    value: function setActive(item, active) {\n      if (active) {\n        this.items.forEach(function (child) {\n          if (child !== item) {\n            child.setActive(false);\n          }\n        });\n      }\n\n      item.setActive(active);\n    }\n  }]);\n\n  return Tree;\n}();\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/behavior/Tree.js?");

/***/ }),

/***/ "./src/behavior/TreeItem.js":
/*!**********************************!*\
  !*** ./src/behavior/TreeItem.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TreeItem)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Tree item\n */\nvar TreeItem = /*#__PURE__*/function () {\n  _createClass(TreeItem, null, [{\n    key: \"init\",\n    value: function init(tree, element) {\n      var triggerClass = this.triggerClass,\n          contentClass = this.contentClass;\n      var trigger = element.querySelector(\":scope > .\".concat(triggerClass));\n      var content = element.querySelector(\":scope > .\".concat(contentClass));\n\n      if (!(trigger && content)) {\n        return null;\n      }\n\n      return new this(tree, element, trigger, content);\n    }\n  }, {\n    key: \"triggerClass\",\n    get: function get() {\n      return 'tree-item__trigger';\n    }\n  }, {\n    key: \"contentClass\",\n    get: function get() {\n      return 'tree-item__content';\n    }\n  }, {\n    key: \"itemActiveClass\",\n    get: function get() {\n      return 'tree-item--active';\n    }\n  }]);\n\n  function TreeItem(tree, container, trigger, content) {\n    _classCallCheck(this, TreeItem);\n\n    this.tree = tree;\n    this.container = container;\n    this.trigger = trigger;\n    this.content = content;\n    this.active = false;\n    this.open = this.open.bind(this);\n    this.close = this.close.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.trigger.addEventListener('click', this.toggle);\n  }\n\n  _createClass(TreeItem, [{\n    key: \"toggle\",\n    value: function toggle() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.tree.setActive(this, !this.active);\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.tree.setActive(this, true);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.tree.setActive(this, false);\n    }\n  }, {\n    key: \"setActive\",\n    value: function setActive(active) {\n      this.active = active;\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var itemActiveClass = this.constructor.itemActiveClass;\n      this.container.classList.toggle(itemActiveClass, this.active);\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (event) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n    }\n  }]);\n\n  return TreeItem;\n}();\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/behavior/TreeItem.js?");

/***/ }),

/***/ "./src/demo.js":
/*!*********************!*\
  !*** ./src/demo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elao_admin_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elao/admin/src */ \"./src/index.js\");\n/* harmony import */ var _elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elao/admin/style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _elao_admin_style_demo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elao/admin/style/demo.scss */ \"./style/demo.scss\");\n/* harmony import */ var _elao_admin_style_demo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_elao_admin_style_demo_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nwindow.addEventListener('load', function onLoad() {\n  // Behaviors\n  _elao_admin_src__WEBPACK_IMPORTED_MODULE_0__.Collapsible.init();\n  _elao_admin_src__WEBPACK_IMPORTED_MODULE_0__.Drop.init();\n  _elao_admin_src__WEBPACK_IMPORTED_MODULE_0__.Tree.init(); // Mobile\n\n  _elao_admin_src__WEBPACK_IMPORTED_MODULE_0__.MobileSidebar.init();\n});\n\n//# sourceURL=webpack://@elao/admin/./src/demo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Collapsible\": () => (/* reexport safe */ _behavior_Collapsible__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"Drop\": () => (/* reexport safe */ _behavior_Drop__WEBPACK_IMPORTED_MODULE_2__.default),\n/* harmony export */   \"Tree\": () => (/* reexport safe */ _behavior_Tree__WEBPACK_IMPORTED_MODULE_3__.default),\n/* harmony export */   \"MobileSidebar\": () => (/* reexport safe */ _mobile_MobileSidebar__WEBPACK_IMPORTED_MODULE_4__.default)\n/* harmony export */ });\n/* harmony import */ var _elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elao/admin/style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_elao_admin_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _behavior_Collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./behavior/Collapsible */ \"./src/behavior/Collapsible.js\");\n/* harmony import */ var _behavior_Drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./behavior/Drop */ \"./src/behavior/Drop.js\");\n/* harmony import */ var _behavior_Tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./behavior/Tree */ \"./src/behavior/Tree.js\");\n/* harmony import */ var _mobile_MobileSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/MobileSidebar */ \"./src/mobile/MobileSidebar.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/index.js?");

/***/ }),

/***/ "./src/mobile/MobileSidebar.js":
/*!*************************************!*\
  !*** ./src/mobile/MobileSidebar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileSidebar)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MobileSidebar = /*#__PURE__*/function () {\n  _createClass(MobileSidebar, null, [{\n    key: \"init\",\n    value: function init() {\n      var menuButtonSelector = this.menuButtonSelector,\n          navSelector = this.navSelector;\n      var button = document.querySelector(menuButtonSelector);\n      var menu = document.querySelector(navSelector);\n\n      if (!(button && menu)) {\n        return null;\n      }\n\n      return new this(button, menu);\n    }\n  }, {\n    key: \"menuButtonSelector\",\n    get: function get() {\n      return '.header .menu-button';\n    }\n  }, {\n    key: \"navSelector\",\n    get: function get() {\n      return '.mobile-nav';\n    }\n  }, {\n    key: \"menuButtonOffClass\",\n    get: function get() {\n      return 'menu-button--close';\n    }\n  }, {\n    key: \"mobileNavActiveClass\",\n    get: function get() {\n      return 'mobile-nav--show';\n    }\n  }]);\n\n  function MobileSidebar(button, menu) {\n    _classCallCheck(this, MobileSidebar);\n\n    this.button = button;\n    this.menu = menu;\n    this.active = false;\n    this.open = this.open.bind(this);\n    this.close = this.close.bind(this);\n    this.toggle = this.toggle.bind(this);\n    this.button.addEventListener('click', this.toggle);\n  }\n\n  _createClass(MobileSidebar, [{\n    key: \"toggle\",\n    value: function toggle() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(!this.active);\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(true);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      this.cancel(event);\n      this.setActive(false);\n    }\n  }, {\n    key: \"setActive\",\n    value: function setActive(active) {\n      this.active = active;\n      this.render();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$constructor = this.constructor,\n          menuButtonOffClass = _this$constructor.menuButtonOffClass,\n          mobileNavActiveClass = _this$constructor.mobileNavActiveClass;\n      this.button.classList.toggle(menuButtonOffClass, this.active);\n      this.menu.classList.toggle(mobileNavActiveClass, this.active);\n    }\n  }, {\n    key: \"cancel\",\n    value: function cancel() {\n      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n      if (event) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n    }\n  }]);\n\n  return MobileSidebar;\n}();\n\n\n\n//# sourceURL=webpack://@elao/admin/./src/mobile/MobileSidebar.js?");

/***/ }),

/***/ "./style/demo.scss":
/*!*************************!*\
  !*** ./style/demo.scss ***!
  \*************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://@elao/admin/./style/demo.scss?");

/***/ }),

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ (() => {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://@elao/admin/./style/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/demo.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;