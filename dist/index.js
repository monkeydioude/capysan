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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/displayData.ts":
/*!****************************!*\
  !*** ./src/displayData.ts ***!
  \****************************/
/*! exports provided: DisplayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplayData\", function() { return DisplayData; });\nvar data = {\n    mail: \"moc.liamg@neiluj.sirud\",\n    phone: \"49 76 20 07 7)33+(\"\n};\nfunction reverseString(str) {\n    var splitString = str.split(\"\");\n    var reverseArray = splitString.reverse();\n    var joinArray = reverseArray.join(\"\");\n    return joinArray;\n}\nfunction DisplayData(id) {\n    var node = document.getElementById(id);\n    if (node == undefined || !node || data[id] == undefined) {\n        return;\n    }\n    var ctx = node.getContext('2d');\n    ctx.font = \"15px Determination Mono\";\n    ctx.fillText(reverseString(data[id]), 0, 10);\n}\n\n\n//# sourceURL=webpack:///./src/displayData.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mgauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mgauge */ \"./src/mgauge.ts\");\n/* harmony import */ var _displayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayData */ \"./src/displayData.ts\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    Object(_mgauge__WEBPACK_IMPORTED_MODULE_0__[\"Mcursors\"])('.m-cursor');\n    Object(_displayData__WEBPACK_IMPORTED_MODULE_1__[\"DisplayData\"])(\"mail\");\n    Object(_displayData__WEBPACK_IMPORTED_MODULE_1__[\"DisplayData\"])(\"phone\");\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/mgauge.ts":
/*!***********************!*\
  !*** ./src/mgauge.ts ***!
  \***********************/
/*! exports provided: Mcursors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Mcursors\", function() { return Mcursors; });\nfunction mmark(parentNode) {\n    var marks = [\"MAX\", \"80\", \"60\", \"40\", \"20\"];\n    for (var i = 0; i < marks.length; i++) {\n        var el = document.createElement(\"span\");\n        el.textContent = marks[i];\n        parentNode.insertBefore(el, parentNode.querySelector(\"span\"));\n    }\n}\nfunction Mcursors(selector) {\n    var nodes = document.querySelectorAll(selector);\n    for (var i = 0; i < nodes.length; i++) {\n        mmark(nodes[i]);\n        var pos = nodes[i].getAttribute('data-m-gauge-pos');\n        if (pos === undefined) {\n            continue;\n        }\n        nodes[i].style.width = pos + '%';\n        if (pos == \"100\") {\n            nodes[i].classList.add(\"m100\");\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/mgauge.ts?");

/***/ })

/******/ });