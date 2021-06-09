(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/blocks/collapse-list/style.scss":
/*!*********************************************!*\
  !*** ./src/blocks/collapse-list/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/hero/style.scss":
/*!************************************!*\
  !*** ./src/blocks/hero/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json":
/*!***********************************************************************************!*\
  !*** ./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json ***!
  \***********************************************************************************/
/*! exports provided: color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"color\":{\"fog\":{\"value\":\"#9fc9eb\",\"type\":\"color\"},\"fog-light\":{\"value\":\"#e8f3fc\",\"type\":\"color\"},\"fog-medium-light\":{\"value\":\"#d0e6f7\",\"type\":\"color\"},\"fog-dark\":{\"value\":\"#72a5cf\",\"type\":\"color\"}}}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./src/blocks/collapse-header/collapse-header.js":
/*!*******************************************************!*\
  !*** ./src/blocks/collapse-header/collapse-header.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);


var RichText = wp.blockEditor.RichText;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("playbook/collapse-header", {
  title: "collapse-header",
  icon: "heading",
  category: "playbook",
  parent: ["playbook/collapse"],
  attributes: {
    content: {
      source: "html",
      selector: "h3"
    },
    textColor: {
      type: "string",
      default: "#000000"
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        textColor = _props$attributes.textColor,
        setAttributes = props.setAttributes,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h5",
      value: content,
      placeholder: "Write your collapse heading here",
      role: "heading",
      "aria-level": "2",
      style: {
        color: textColor
      },
      onChange: function onChange(newContent) {
        setAttributes({
          content: newContent
        });
      }
    });
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        content = _props$attributes2.content,
        textColor = _props$attributes2.textColor,
        setAttributes = props.setAttributes,
        className = props.className;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      type: "button",
      "aria-expanded": "false",
      className: "collapse-header alignwide"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h3",
      className: "alignwide",
      value: content,
      "aria-label": "title for collapse content",
      role: "heading",
      style: {
        color: textColor
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/collapse-header/index.js":
/*!*********************************************!*\
  !*** ./src/blocks/collapse-header/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-header */ "./src/blocks/collapse-header/collapse-header.js");


/***/ }),

/***/ "./src/blocks/collapse-list/collapse-list.js":
/*!***************************************************!*\
  !*** ./src/blocks/collapse-list/collapse-list.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json */ "./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json");
var _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json */ "./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json", 1);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/collapse-list/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/collapse-list/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_6__);








var el = wp.element.createElement;
var iconEl = el('svg', {
  width: 20,
  height: 20
}, el('path', {
  d: "M0,800h20V0c-4.9,0-5,2.6-9.9,2.6S5,0,0,0V800z",
  fill: _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_4__["color"].fog.value
})); // const collapseListTemplate = [
//   [ 'core/heading', { level: 2, className: 'collapse-list-header alignwide', placeholder: 'List title' } ],
//   [ 'playbook/collapse', {}, [
//     [ 'core/button', {}, [
//       [ 'core/heading', { level: 5, className: 'collapse-header alignwide', placeholder: 'Collapse List Title' } ],
//     ] ],
//     [ 'core/paragraph', { placeholder: 'Content' } ],
//   ] ],
// ];

var collapseListTemplate = [['core/heading', {
  level: 2,
  className: 'collapse-list-header alignwide',
  placeholder: 'List title'
}], ['playbook/collapse', {}]];
var blockStyle = {
  backgroundColor: '#900',
  color: '#f0f',
  padding: '20px'
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("playbook/collapse-list", {
  title: "Collapse-list",
  icon: "list-view",
  category: "playbook",
  attributes: {
    backgroundColor: {
      type: "string",
      default: '#ff00ff'
    }
  },
  edit: function edit(props) {
    var className = props.className; // const blockProps = useBlockProps();
    // const blockProps = useBlockProps( { style: blockStyle } );

    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
    var ALLOWED_BLOCKS = ['playbook/collapse', 'core/separator'];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: 'alignWide'
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "collapse-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: collapseListTemplate,
      allowedBlocks: ALLOWED_BLOCKS
    }))));
  },
  save: function save(props) {
    // const {
    //   InnerBlocks
    // } = props;
    // const blockProps = useBlockProps.save( { style: blockStyle } );
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "collapse-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/collapse-list/editor.scss":
/*!**********************************************!*\
  !*** ./src/blocks/collapse-list/editor.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/collapse-list/index.js":
/*!*******************************************!*\
  !*** ./src/blocks/collapse-list/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse-list */ "./src/blocks/collapse-list/collapse-list.js");


/***/ }),

/***/ "./src/blocks/collapse/collapse.js":
/*!*****************************************!*\
  !*** ./src/blocks/collapse/collapse.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var collapseTemplate = [['core/group', {}, [['playbook/collapse-header'], ['core/group', {
  className: 'collapse-content alignwide'
}, [['core/paragraph', {
  className: 'alignwide',
  placeholder: 'Content'
}]]]]]];
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])("playbook/collapse", {
  title: "collapse",
  icon: "media-document",
  category: "playbook",
  parent: ["playbook/collapse-list"],
  attributes: {
    backgroundColor: {
      type: "string",
      default: '#ff0000'
    }
  },
  edit: function edit(props) {
    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "collapse"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
      template: collapseTemplate
    })));
  },
  save: function save(props) {
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "collapse",
      role: "region"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/collapse/index.js":
/*!**************************************!*\
  !*** ./src/blocks/collapse/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse */ "./src/blocks/collapse/collapse.js");


/***/ }),

/***/ "./src/blocks/hero/hero.js":
/*!*********************************!*\
  !*** ./src/blocks/hero/hero.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json */ "./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json");
var _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json */ "./helsinki-design-system/packages/design-tokens/tokens/color/brand/fog.json", 1);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/hero/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_9__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __ = wp.i18n.__;







var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl,
    ColorPicker = _wp$components.ColorPicker,
    Spinner = _wp$components.Spinner,
    ResponsiveWrapper = _wp$components.ResponsiveWrapper;


var el = wp.element.createElement;
var iconEl = el('svg', {
  width: 24,
  height: 24
}, el('path', {
  d: "M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h6.2v8.9l2.5-3.1 2.5 3.1V4.5h2.2c.4 0 .8.4.8.8v13.4z",
  fill: _helsinki_design_system_packages_design_tokens_tokens_color_brand_fog_json__WEBPACK_IMPORTED_MODULE_8__["color"].fog.value
}));
var heroTemplate = [['core/group', {
  id: "hero",
  className: 'alignfull',
  dataAlign: 'full'
}, [['core/columns', {}, [['core/column', {}, [['core/heading', {
  level: 1,
  className: 'hero-header alignwide',
  placeholder: 'Hero title h1'
}], ['core/paragraph', {
  placeholder: "Content"
}]]], ['core/column', {}, [['core/image', {}]]]]]]]];

var modifyDefaultAlignment = function modifyDefaultAlignment(settings, name) {
  if (name !== 'core/group') {
    return settings;
  }

  var newSettings = _objectSpread(_objectSpread({}, settings), {}, {
    attributes: _objectSpread(_objectSpread({}, settings.attributes), {}, {
      align: {
        type: 'string',
        default: 'full'
      }
    })
  });

  return newSettings;
};

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_7__["addFilter"])('blocks.registerBlockType', 'playbook-blocks/hero', modifyDefaultAlignment);
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["registerBlockType"])("playbook/hero", {
  title: "hero",
  icon: iconEl,
  category: "playbook",
  supports: {
    align: true
  },
  attributes: {
    myRichHeading: {
      type: 'string'
    },
    myRichText: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    toggle: {
      type: 'boolean',
      default: true
    },
    favoriteAnimal: {
      type: 'string',
      default: 'dogs'
    },
    favoriteColor: {
      type: 'string',
      default: '#DDDDDD'
    },
    activateLasers: {
      type: 'boolean',
      default: false
    },
    bgImageId: {
      type: 'number',
      default: 1020
    },
    bgImageUrl: {
      type: 'string',
      default: 'https://eqsign.fi/test/wp-content/themes/playbook/assets/images/hero-bg-2.svg'
    }
  },
  getEditWrapperProps: function getEditWrapperProps() {
    return {
      'data-align': 'full'
    };
  },
  edit: function edit(props) {
    var className = props.className,
        supports = props.supports,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    props.setAttributes({
      align: 'full'
    });
    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"])();
    var ALLOWED_BLOCKS = ['playbook/hero-content', 'core/separator'];
    var ALLOWED_MEDIA_TYPES = ['image'];
    var bgImageId = attributes.bgImageId,
        bgImageUrl = attributes.bgImageUrl;

    var onUpdateImage = function onUpdateImage(image) {
      setAttributes({
        bgImageId: image.id,
        bgImageUrl: image.url
      });
    };

    var onRemoveImage = function onRemoveImage() {
      setAttributes({
        bgImageId: undefined,
        bgImageUrl: undefined
      });
    };

    var instructions = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", null, __('To edit the background image, you need permission to upload media.', 'playbook'));
    console.log("bgImageUrl: ", bgImageUrl);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelBody, {
      title: "Playbook hero settings",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "wp-block-hero-bg-image-selector"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUploadCheck"], {
      fallback: instructions
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      title: __('Background image', 'playbook'),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          className: !bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
          onClick: open
        }, !bgImageId && __('Set background image', 'playbook'), !!bgImageId && !bgImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(Spinner, null), bgImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
          src: bgImageUrl,
          alt: "Hero background"
        }));
      }
    })), !!bgImageId && bgImageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      title: __('Background image', 'playbook'),
      onSelect: onUpdateImage,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: bgImageId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          onClick: open,
          isDefault: true,
          isLarge: true
        }, __('Replace background image', 'playbook'));
      }
    })), !!bgImageId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUploadCheck"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      onClick: onRemoveImage,
      isLink: true,
      isDestructive: true
    }, __('Remove background image', 'playbook'))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ToggleControl, {
      label: "Toggle me",
      checked: attributes.toggle,
      onChange: function onChange(newval) {
        return setAttributes({
          toggle: newval
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(SelectControl, {
      label: "What's your favorite animal?",
      value: attributes.favoriteAnimal,
      options: [{
        label: "Dogs",
        value: 'dogs'
      }, {
        label: "Cats",
        value: 'cats'
      }, {
        label: "Something else",
        value: 'weird_one'
      }],
      onChange: function onChange(newval) {
        return setAttributes({
          favoriteAnimal: newval
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ColorPicker, {
      color: attributes.favoriteColor,
      onChangeComplete: function onChangeComplete(newval) {
        return setAttributes({
          favoriteColor: newval.hex
        });
      },
      disableAlpha: true
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CheckboxControl, {
      label: "Activate lasers?",
      checked: attributes.activateLasers,
      onChange: function onChange(newval) {
        return setAttributes({
          activateLasers: newval
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      className: 'alignWide wp-block-playbook-hero',
      style: {
        backgroundImage: "url(".concat(bgImageUrl, ")")
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      template: heroTemplate,
      allowedBlocks: ALLOWED_BLOCKS
    }))));
  },
  save: function save(props) {
    var className = props.className,
        supports = props.supports,
        attributes = props.attributes,
        setAttributes = props.setAttributes;
    var bgImageUrl = attributes.bgImageUrl;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["useBlockProps"].save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      style: {
        backgroundImage: "url(".concat(bgImageUrl, ")")
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "hero",
      id: "hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"].Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/hero/index.js":
/*!**********************************!*\
  !*** ./src/blocks/hero/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/blocks/hero/hero.js");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_collapse_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/collapse-list */ "./src/blocks/collapse-list/index.js");
/* harmony import */ var _blocks_collapse_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/collapse-header */ "./src/blocks/collapse-header/index.js");
/* harmony import */ var _blocks_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/collapse */ "./src/blocks/collapse/index.js");
/* harmony import */ var _blocks_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/hero */ "./src/blocks/hero/index.js");





/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map