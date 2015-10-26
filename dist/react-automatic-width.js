/*!
 * Copyright 2015 Zalando SE
 * 
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-automatic-width"] = factory();
	else
		root["react-automatic-width"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(1);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** multi main\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///multi_main?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, '__esModule', {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AutomaticWidth = (function (_React$Component) {\n    _inherits(AutomaticWidth, _React$Component);\n\n    function AutomaticWidth() {\n        _classCallCheck(this, AutomaticWidth);\n\n        _get(Object.getPrototypeOf(AutomaticWidth.prototype), 'constructor', this).call(this);\n        this.state = {\n            listener: null,\n            width: 0\n        };\n    }\n\n    _createClass(AutomaticWidth, [{\n        key: '_resizeHandler',\n        value: function _resizeHandler() {\n            var dom = this.refs.autowidthWrapper.getDOMNode();\n            var clientWidth = dom.clientWidth;\n\n            if (clientWidth !== this.state.width && clientWidth > 0) {\n                this.setState({\n                    width: clientWidth\n                });\n            }\n        }\n    }, {\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var boundListener = this._resizeHandler.bind(this);\n            window.addEventListener('resize', boundListener);\n            this.setState({\n                listener: boundListener\n            });\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.state.listener();\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            window.removeEventListener('resize', this.state.listener);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this = this;\n\n            return React.createElement(\n                'div',\n                _extends({ ref: 'autowidthWrapper' }, this.props),\n                React.Children.map(this.props.children, function (c) {\n                    return React.addons.cloneWithProps(c, {\n                        width: _this.state.width\n                    });\n                })\n            );\n        }\n    }]);\n\n    return AutomaticWidth;\n})(React.Component);\n\nAutomaticWidth.displayName = 'AutomaticWidth';\nAutomaticWidth.propTypes = {\n    children: React.PropTypes.oneOf([React.PropTypes.array, React.PropTypes.object])\n};\nexports['default'] = AutomaticWidth;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/react-automatic-width.jsx\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/react-automatic-width.jsx?");

/***/ }
/******/ ])
});
;