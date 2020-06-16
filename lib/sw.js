(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("reaim-web-sdk", [], factory);
	else if(typeof exports === 'object')
		exports["reaim-web-sdk"] = factory();
	else
		root["reaim-web-sdk"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API =  true ? 'http://localhost:5555' : undefined;

var ReAimSDK =
/*#__PURE__*/
function () {
  function ReAimSDK() {
    _classCallCheck(this, ReAimSDK);
  }

  _createClass(ReAimSDK, null, [{
    key: "log",
    value: function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(kind, tracking) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (kind && tracking) {
                  fetch("".concat(API, "/log?k=").concat(kind, "&").concat(atob(tracking)));
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function log(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return log;
    }()
  }, {
    key: "handleInstall",
    value: function handleInstall(event) {
      self.skipWaiting();
    }
  }, {
    key: "handlePushEvent",
    value: function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        var payload, title, options;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = event.data.json();
                title = payload.c.t;
                options = {
                  body: payload.c.d,
                  icon: payload.c.i,
                  image: payload.c.m,
                  badge: payload.c.b,
                  data: {
                    tracking: payload.t,
                    url: payload.c.u
                  }
                };
                ReAimSDK.log('i', payload.t);
                event.waitUntil(self.registration.showNotification(title, options));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handlePushEvent(_x3) {
        return _ref2.apply(this, arguments);
      }

      return handlePushEvent;
    }()
  }, {
    key: "handleClickEvent",
    value: function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(event) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.notification.close();

                if (event.notification.data.url) {
                  ReAimSDK.log('c', event.notification.data.tracking);
                  event.waitUntil(self.clients.openWindow(event.notification.data.url));
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleClickEvent(_x4) {
        return _ref3.apply(this, arguments);
      }

      return handleClickEvent;
    }()
  }, {
    key: "handleUpdateSubscription",
    value: function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(event) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleUpdateSubscription(_x5) {
        return _ref4.apply(this, arguments);
      }

      return handleUpdateSubscription;
    }()
  }]);

  return ReAimSDK;
}();

self.addEventListener('install', ReAimSDK.handleInstall);
self.addEventListener('push', ReAimSDK.handlePushEvent);
self.addEventListener('notificationclick', ReAimSDK.handleClickEvent);
self.addEventListener('pushsubscriptionchange', ReAimSDK.handleUpdateSubscription);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvc3cuanMiXSwibmFtZXMiOlsiQVBJIiwicHJvY2VzcyIsIlJlQWltU0RLIiwia2luZCIsInRyYWNraW5nIiwiZmV0Y2giLCJhdG9iIiwiZXZlbnQiLCJzZWxmIiwic2tpcFdhaXRpbmciLCJwYXlsb2FkIiwiZGF0YSIsImpzb24iLCJ0aXRsZSIsImMiLCJ0Iiwib3B0aW9ucyIsImJvZHkiLCJkIiwiaWNvbiIsImkiLCJpbWFnZSIsIm0iLCJiYWRnZSIsImIiLCJ1cmwiLCJ1IiwibG9nIiwid2FpdFVudGlsIiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwiY2xpZW50cyIsIm9wZW5XaW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlSW5zdGFsbCIsImhhbmRsZVB1c2hFdmVudCIsImhhbmRsZUNsaWNrRXZlbnQiLCJoYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLEdBQUcsR0FBR0MsS0FBQSxHQUF3Qyx1QkFBeEMsR0FBa0UsU0FBOUU7O0lBRU1DLFE7Ozs7Ozs7Ozs7OzsrQ0FFYUMsSSxFQUFNQyxROzs7OztBQUNyQixvQkFBSUQsSUFBSSxJQUFJQyxRQUFaLEVBQXNCO0FBQ3BCQyx1QkFBSyxXQUFJTCxHQUFKLG9CQUFpQkcsSUFBakIsY0FBeUJHLElBQUksQ0FBQ0YsUUFBRCxDQUE3QixFQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHa0JHLEssRUFBTztBQUMxQkMsVUFBSSxDQUFDQyxXQUFMO0FBQ0Q7Ozs7OztnREFFNEJGLEs7Ozs7OztBQUNyQkcsdUIsR0FBVUgsS0FBSyxDQUFDSSxJQUFOLENBQVdDLElBQVgsRTtBQUVWQyxxQixHQUFRSCxPQUFPLENBQUNJLENBQVIsQ0FBVUMsQztBQUNsQkMsdUIsR0FBVTtBQUNkQyxzQkFBSSxFQUFFUCxPQUFPLENBQUNJLENBQVIsQ0FBVUksQ0FERjtBQUVkQyxzQkFBSSxFQUFFVCxPQUFPLENBQUNJLENBQVIsQ0FBVU0sQ0FGRjtBQUdkQyx1QkFBSyxFQUFFWCxPQUFPLENBQUNJLENBQVIsQ0FBVVEsQ0FISDtBQUlkQyx1QkFBSyxFQUFFYixPQUFPLENBQUNJLENBQVIsQ0FBVVUsQ0FKSDtBQUtkYixzQkFBSSxFQUFFO0FBQ0pQLDRCQUFRLEVBQUVNLE9BQU8sQ0FBQ0ssQ0FEZDtBQUVKVSx1QkFBRyxFQUFFZixPQUFPLENBQUNJLENBQVIsQ0FBVVk7QUFGWDtBQUxRLGlCO0FBV2hCeEIsd0JBQVEsQ0FBQ3lCLEdBQVQsQ0FBYSxHQUFiLEVBQWtCakIsT0FBTyxDQUFDSyxDQUExQjtBQUNBUixxQkFBSyxDQUFDcUIsU0FBTixDQUFnQnBCLElBQUksQ0FBQ3FCLFlBQUwsQ0FBa0JDLGdCQUFsQixDQUFtQ2pCLEtBQW5DLEVBQTBDRyxPQUExQyxDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQUc0QlQsSzs7Ozs7QUFDNUJBLHFCQUFLLENBQUN3QixZQUFOLENBQW1CQyxLQUFuQjs7QUFFQSxvQkFBSXpCLEtBQUssQ0FBQ3dCLFlBQU4sQ0FBbUJwQixJQUFuQixDQUF3QmMsR0FBNUIsRUFBaUM7QUFDL0J2QiwwQkFBUSxDQUFDeUIsR0FBVCxDQUFhLEdBQWIsRUFBa0JwQixLQUFLLENBQUN3QixZQUFOLENBQW1CcEIsSUFBbkIsQ0FBd0JQLFFBQTFDO0FBQ0FHLHVCQUFLLENBQUNxQixTQUFOLENBQWdCcEIsSUFBSSxDQUFDeUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCM0IsS0FBSyxDQUFDd0IsWUFBTixDQUFtQnBCLElBQW5CLENBQXdCYyxHQUFoRCxDQUFoQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBR21DbEIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeENDLElBQUksQ0FBQzJCLGdCQUFMLENBQXNCLFNBQXRCLEVBQWlDakMsUUFBUSxDQUFDa0MsYUFBMUM7QUFDQTVCLElBQUksQ0FBQzJCLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCakMsUUFBUSxDQUFDbUMsZUFBdkM7QUFDQTdCLElBQUksQ0FBQzJCLGdCQUFMLENBQXNCLG1CQUF0QixFQUEyQ2pDLFFBQVEsQ0FBQ29DLGdCQUFwRDtBQUNBOUIsSUFBSSxDQUFDMkIsZ0JBQUwsQ0FBc0Isd0JBQXRCLEVBQWdEakMsUUFBUSxDQUFDcUMsd0JBQXpELEUiLCJmaWxlIjoic3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlYWltLXdlYi1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3N3LmpzXCIpO1xuIiwiY29uc3QgQVBJID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICdodHRwOi8vbG9jYWxob3N0OjU1NTUnIDogJ2h0dHBzOi8vZXZlbnRzLnJlYWltLm1lJztcblxuY2xhc3MgUmVBaW1TREsge1xuXG4gIHN0YXRpYyBhc3luYyBsb2coa2luZCwgdHJhY2tpbmcpIHtcbiAgICBpZiAoa2luZCAmJiB0cmFja2luZykge1xuICAgICAgZmV0Y2goYCR7QVBJfS9sb2c/az0ke2tpbmR9JiR7YXRvYih0cmFja2luZyl9YCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZUluc3RhbGwoZXZlbnQpIHtcbiAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlUHVzaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEuanNvbigpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBwYXlsb2FkLmMudDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYm9keTogcGF5bG9hZC5jLmQsXG4gICAgICBpY29uOiBwYXlsb2FkLmMuaSxcbiAgICAgIGltYWdlOiBwYXlsb2FkLmMubSxcbiAgICAgIGJhZGdlOiBwYXlsb2FkLmMuYixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHJhY2tpbmc6IHBheWxvYWQudCxcbiAgICAgICAgdXJsOiBwYXlsb2FkLmMudVxuICAgICAgfVxuICAgIH07XG5cbiAgICBSZUFpbVNESy5sb2coJ2knLCBwYXlsb2FkLnQpO1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCBvcHRpb25zKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlQ2xpY2tFdmVudChldmVudCkge1xuICAgIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuXG4gICAgaWYgKGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnVybCkge1xuICAgICAgUmVBaW1TREsubG9nKCdjJywgZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudHJhY2tpbmcpO1xuICAgICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5vcGVuV2luZG93KGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnVybCkpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24oZXZlbnQpIHtcblxuICB9XG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIFJlQWltU0RLLmhhbmRsZUluc3RhbGwpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgUmVBaW1TREsuaGFuZGxlUHVzaEV2ZW50KTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xpY2snLCBSZUFpbVNESy5oYW5kbGVDbGlja0V2ZW50KTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN1YnNjcmlwdGlvbmNoYW5nZScsIFJlQWltU0RLLmhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbik7XG4iXSwic291cmNlUm9vdCI6IiJ9