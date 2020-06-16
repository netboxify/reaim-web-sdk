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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = void 0;
var REAIM_SDK_VISITS = 'reaim_sdk_visits';
exports.REAIM_SDK_VISITS = REAIM_SDK_VISITS;
var REAIM_DENIED_ON_VISITS = 'reaim_sdk_denied_on_visits';
exports.REAIM_DENIED_ON_VISITS = REAIM_DENIED_ON_VISITS;
var REAIM_PUSH_USER_SUBSCRIBED = 'reaim_sdk_push_user_subscribed';
exports.REAIM_PUSH_USER_SUBSCRIBED = REAIM_PUSH_USER_SUBSCRIBED;
var REAIM_UID = 'reaim_sdk_uid';
exports.REAIM_UID = REAIM_UID;

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = noop;
exports.urlBase64ToUint8Array = urlBase64ToUint8Array;

function noop() {}

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReAimSDK =
/*#__PURE__*/
function () {
  function ReAimSDK(onAllow, onBlock) {
    _classCallCheck(this, ReAimSDK);

    if (onAllow && typeof onAllow !== 'function') {
      throw new Error('Type of onAllow parameter should be function.');
    }

    if (onBlock && typeof onBlock !== 'function') {
      throw new Error('Type of onBlock parameter should be function.');
    }

    this.metaEndpoint =  true ? 'http://localhost:4343' : undefined;
    this.onAllow = onAllow || _helpers.noop;
    this.onBlock = onBlock || _helpers.noop;
  }

  _createClass(ReAimSDK, [{
    key: "log",
    value: function log(msg) {
      console.log('ReAim SDK -', msg);
    }
  }, {
    key: "getMetadata",
    value: function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var timezone, response, metadata;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                _context.next = 3;
                return fetch(this.metaEndpoint + '/info?tz=' + timezone);

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                metadata = _context.sent;
                return _context.abrupt("return", metadata);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMetadata() {
        return _ref.apply(this, arguments);
      }

      return getMetadata;
    }()
  }, {
    key: "canSubscribe",
    value: function canSubscribe() {
      return Notification.permission === 'default';
    }
  }, {
    key: "setAsSubscribed",
    value: function setAsSubscribed() {
      this.setValue(_constants.REAIM_PUSH_USER_SUBSCRIBED, true);
    }
  }, {
    key: "setAsUnsubscribed",
    value: function setAsUnsubscribed() {
      this.setValue(_constants.REAIM_PUSH_USER_SUBSCRIBED, false);
    }
  }, {
    key: "setValue",
    value: function setValue(key, val) {
      localStorage.setItem(key, val);
    }
  }, {
    key: "getValue",
    value: function getValue(key) {
      return localStorage.getItem(key);
    }
  }, {
    key: "registerSW",
    value: function registerSW() {
      return navigator.serviceWorker.register('/reaim-sdk-web.js');
    }
  }, {
    key: "prepareRequest",
    value: function prepareRequest(subscription, metadata) {
      return {
        site_id: metadata.site_id,
        country_id: metadata.country_id,
        platform_id: metadata.platform_id,
        os_id: metadata.os_id,
        timezone_id: metadata.timezone_id,
        tz: new Date().getTimezoneOffset() / 60,
        browser_id: metadata.browser_id,
        user_id: metadata.user_id,
        endpoint: subscription.endpoint,
        auth: subscription.keys.auth,
        p256dh: subscription.keys.p256dh,
        page_url: window.location.pathname,
        sites_uid: this.sitesUID
      };
    }
  }, {
    key: "saveUser",
    value: function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(user) {
        var res, id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch(this.metaEndpoint + '/save', {
                  method: 'POST',
                  body: JSON.stringify(user)
                });

              case 3:
                res = _context2.sent;
                _context2.next = 6;
                return res.text();

              case 6:
                id = _context2.sent;
                this.setValue(_constants.REAIM_UID, id);
                this.setAsSubscribed();

                if (this.htmlDOM) {
                  this.hideModal();
                }

                this.log('user_subscribed');
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13]]);
      }));

      function saveUser(_x) {
        return _ref2.apply(this, arguments);
      }

      return saveUser;
    }()
  }, {
    key: "checkIfStillSubscribed",
    value: function checkIfStillSubscribed() {
      if (Notification.permission === 'granted') return;
      this.setAsUnsubscribed();
    }
  }, {
    key: "tryToSubscribe",
    value: function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(metadata) {
        var subscriptionOptions, subscription, stringified, parsed, userObject;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                subscriptionOptions = {
                  userVisibleOnly: true,
                  applicationServerKey: (0, _helpers.urlBase64ToUint8Array)(metadata.vapid_pub_key)
                };
                _context3.next = 4;
                return this.registration.pushManager.subscribe(subscriptionOptions);

              case 4:
                subscription = _context3.sent;
                this.onAllow();
                stringified = JSON.stringify(subscription);
                parsed = JSON.parse(stringified);
                userObject = this.prepareRequest(parsed, metadata);
                this.saveUser(userObject);

                if (metadata.wn) {
                  this.showWelcomeNotification(metadata);
                }

                _context3.next = 18;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);
                this.log('user_declined');
                this.onBlock();

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 13]]);
      }));

      function tryToSubscribe(_x2) {
        return _ref3.apply(this, arguments);
      }

      return tryToSubscribe;
    }()
  }, {
    key: "showWelcomeNotification",
    value: function showWelcomeNotification(metadata) {
      try {
        var wnContent = JSON.parse(atob(metadata.wn_content));
        this.registration.showNotification(wnContent.title, {
          body: wnContent.description,
          data: {
            url: wnContent.url
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, {
    key: "showCustomModal",
    value: function showCustomModal(metadata, promptMeta) {
      var _this = this;

      var css = "\n        .reaim-web-modal {\n          box-sizing: border-box;\n          display: flex;\n          position: absolute;\n          max-width: 547px;\n          padding: 45px;\n          font-size: 14px;\n          font-weight: 100;\n          width: 100%;\n          height: 200px;\n          background: ".concat(promptMeta.backgroundColor, ";\n          color: ").concat(promptMeta.fontColor, ";\n          margin: 0 auto;\n          left: 0;\n          right: 0;\n          box-shadow: 0 20px 70px 0 #E5E8EC;\n          border-radius: 8px;\n          top: 0;\n        }\n\n        .reaim-prompt-logo-branding small a {\n          position: relative;\n          top: 15px;\n          text-decoration: none;\n          opacity: 0.5;\n          color: #020E17;\n          font-size: 10px;\n          text-decoration: none;\n        }\n\n        .reaim-prompt-logo {\n          width: 80px;\n          height: 80px;\n          margin-right: 30px;\n        }\n\n        .reaim-prompt-logo img {\n          max-width: 80px;\n          width: 100%;\n        }\n\n        .reaim-modal-content {\n          width: 350px;\n          position: relative;\n        }\n\n        .reaim-modal-content p {\n          height: 65px;\n          font-size: 16px;\n          margin-top: 0;\n        }\n\n        .reaim-prompt-buttons {\n          position: absolute;\n          right: 20px;\n        }\n\n        .reaim-prompt-buttons button {\n          height: 52px;\n          border-radius: 8px;\n          cursor: pointer;\n          margin-left: 10px;\n          padding: 10px 20px;\n          border: none;\n          outline: none;\n        }\n\n        .reaim-button-deny {\n          backgorund: ").concat(promptMeta.blockButtonColor, ";\n          color: ").concat(promptMeta.blockFontColor, ";\n        }\n\n        .reaim-button-accept {\n          background: ").concat(promptMeta.allowButtonColor, ";\n          color: ").concat(promptMeta.allowFontColor, ";\n        }\n\n      ");
      var html = "\n        <div class=\"reaim-prompt-logo-branding\">\n          <div class=\"reaim-prompt-logo\">\n            <img src=\"".concat(promptMeta.logo, "\" alt=\"logo\">\n          </div>\n\n          <small><a href=\"https://reaim.me\" target=\"_blank\" rel=\"noopener\">Powered by ReAim</a></small>\n        </div>\n\n        <div class=\"reaim-modal-content\">\n          <p>").concat(promptMeta.actionText, "</p>\n          <div class=\"reaim-prompt-buttons\">\n            <button class=\"reaim-button-deny\">").concat(promptMeta.blockButton, "</button>\n            <button class=\"reaim-button-accept\">").concat(promptMeta.allowButton, "</button>\n          </div>\n        </div>\n      ");
      var ReAimCSS = document.createElement('style');
      ReAimCSS.innerHTML = css;
      var ReAimDOM = document.createDocumentFragment();
      var htmlDOM = document.createElement('div');
      htmlDOM.classList.add('reaim-web-modal');
      htmlDOM.innerHTML = html;
      this.htmlDOM = htmlDOM;
      var $deny = htmlDOM.querySelector('.reaim-button-deny');
      $deny.addEventListener('click', function (e) {
        _this.hideModal();

        _this.logVisitsNumberWhenDenied();
      });
      var $accept = htmlDOM.querySelector('.reaim-button-accept');
      $accept.addEventListener('click', function (e) {
        _this.hideModal();

        _this.tryToSubscribe(metadata);
      });
      ReAimDOM.appendChild(htmlDOM);
      document.head.appendChild(ReAimCSS);
      document.body.appendChild(ReAimDOM);
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      this.htmlDOM.style.display = 'none';
    }
  }, {
    key: "enoughVisitsAfterBlock",
    value: function enoughVisitsAfterBlock(visitNumber) {
      var visitsWhenDenied = this.getNumberOfVisitsWhenDenied();
      var pageviews = this.getVisits();

      if (visitsWhenDenied !== 0) {
        if (pageviews >= visitsWhenDenied + visitNumber) {
          return true;
        }

        return false;
      }

      return true;
    }
  }, {
    key: "showModal",
    value: function showModal(metadata) {
      var _this2 = this;

      var promptMeta = JSON.parse(atob(metadata.prompt));

      if (metadata.prompt_type === 'custom') {
        if (promptMeta.showImmediately) {
          this.log('show_immediately_custom_prompt');
          this.showCustomModal(metadata, promptMeta);
        } else {
          var visits = this.getVisits();

          if (visits >= promptMeta.sessionNumber && this.enoughVisitsAfterBlock(promptMeta.askAgainAfter)) {
            this.log('show_timed_custom_prompt');
            setTimeout(function () {
              _this2.showCustomModal(metadata, promptMeta);
            }, promptMeta.showAfter * 1000);
          }
        }
      } else {
        this.log('show_native_prompt');
        this.tryToSubscribe(metadata);
      }
    }
  }, {
    key: "logVisit",
    value: function logVisit() {
      var visits = this.getValue(_constants.REAIM_SDK_VISITS) || 0;
      this.setValue(_constants.REAIM_SDK_VISITS, +visits + 1);
    }
  }, {
    key: "logVisitsNumberWhenDenied",
    value: function logVisitsNumberWhenDenied() {
      var visits = this.getValue(_constants.REAIM_SDK_VISITS);
      this.setValue(_constants.REAIM_DENIED_ON_VISITS, visits);
    }
  }, {
    key: "getNumberOfVisitsWhenDenied",
    value: function getNumberOfVisitsWhenDenied() {
      var visits = JSON.parse(this.getValue(_constants.REAIM_DENIED_ON_VISITS));

      if (visits) {
        return visits;
      }

      return 0;
    }
  }, {
    key: "getVisits",
    value: function getVisits() {
      return JSON.parse(this.getValue(_constants.REAIM_SDK_VISITS)) || 0;
    }
  }, {
    key: "init",
    value: function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(sitesUID) {
        var metadata;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.logVisit();
                this.sitesUID = sitesUID;

                if ('serviceWorker' in navigator) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                if ('PushManager' in window) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return");

              case 6:
                _context4.next = 8;
                return this.registerSW();

              case 8:
                this.registration = _context4.sent;

                if (!this.canSubscribe()) {
                  _context4.next = 17;
                  break;
                }

                this.log('try_to_subscribe');
                _context4.next = 13;
                return this.getMetadata();

              case 13:
                metadata = _context4.sent;
                this.showModal(metadata);
                _context4.next = 18;
                break;

              case 17:
                this.checkIfStillSubscribed();

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init(_x3) {
        return _ref4.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return ReAimSDK;
}();

var _default = ReAimSDK;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJFQUlNX1NES19WSVNJVFMiLCJSRUFJTV9ERU5JRURfT05fVklTSVRTIiwiUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQiLCJSRUFJTV9VSUQiLCJub29wIiwidXJsQmFzZTY0VG9VaW50OEFycmF5IiwiYmFzZTY0U3RyaW5nIiwicGFkZGluZyIsInJlcGVhdCIsImxlbmd0aCIsImJhc2U2NCIsInJlcGxhY2UiLCJyYXdEYXRhIiwid2luZG93IiwiYXRvYiIsIm91dHB1dEFycmF5IiwiVWludDhBcnJheSIsImkiLCJjaGFyQ29kZUF0IiwiUmVBaW1TREsiLCJvbkFsbG93Iiwib25CbG9jayIsIkVycm9yIiwibWV0YUVuZHBvaW50IiwicHJvY2VzcyIsIm1zZyIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lem9uZSIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsInJlc29sdmVkT3B0aW9ucyIsInRpbWVab25lIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJtZXRhZGF0YSIsIk5vdGlmaWNhdGlvbiIsInBlcm1pc3Npb24iLCJzZXRWYWx1ZSIsImtleSIsInZhbCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJnZXRJdGVtIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic3Vic2NyaXB0aW9uIiwic2l0ZV9pZCIsImNvdW50cnlfaWQiLCJwbGF0Zm9ybV9pZCIsIm9zX2lkIiwidGltZXpvbmVfaWQiLCJ0eiIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsImJyb3dzZXJfaWQiLCJ1c2VyX2lkIiwiZW5kcG9pbnQiLCJhdXRoIiwia2V5cyIsInAyNTZkaCIsInBhZ2VfdXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNpdGVzX3VpZCIsInNpdGVzVUlEIiwidXNlciIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzIiwidGV4dCIsImlkIiwic2V0QXNTdWJzY3JpYmVkIiwiaHRtbERPTSIsImhpZGVNb2RhbCIsInNldEFzVW5zdWJzY3JpYmVkIiwic3Vic2NyaXB0aW9uT3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwidmFwaWRfcHViX2tleSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwic3Vic2NyaWJlIiwic3RyaW5naWZpZWQiLCJwYXJzZWQiLCJwYXJzZSIsInVzZXJPYmplY3QiLCJwcmVwYXJlUmVxdWVzdCIsInNhdmVVc2VyIiwid24iLCJzaG93V2VsY29tZU5vdGlmaWNhdGlvbiIsInduQ29udGVudCIsInduX2NvbnRlbnQiLCJzaG93Tm90aWZpY2F0aW9uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGEiLCJ1cmwiLCJlcnIiLCJwcm9tcHRNZXRhIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udENvbG9yIiwiYmxvY2tCdXR0b25Db2xvciIsImJsb2NrRm9udENvbG9yIiwiYWxsb3dCdXR0b25Db2xvciIsImFsbG93Rm9udENvbG9yIiwiaHRtbCIsImxvZ28iLCJhY3Rpb25UZXh0IiwiYmxvY2tCdXR0b24iLCJhbGxvd0J1dHRvbiIsIlJlQWltQ1NTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiUmVBaW1ET00iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiJGRlbnkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkIiwiJGFjY2VwdCIsInRyeVRvU3Vic2NyaWJlIiwiYXBwZW5kQ2hpbGQiLCJoZWFkIiwic3R5bGUiLCJkaXNwbGF5IiwidmlzaXROdW1iZXIiLCJ2aXNpdHNXaGVuRGVuaWVkIiwiZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkIiwicGFnZXZpZXdzIiwiZ2V0VmlzaXRzIiwicHJvbXB0IiwicHJvbXB0X3R5cGUiLCJzaG93SW1tZWRpYXRlbHkiLCJzaG93Q3VzdG9tTW9kYWwiLCJ2aXNpdHMiLCJzZXNzaW9uTnVtYmVyIiwiZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayIsImFza0FnYWluQWZ0ZXIiLCJzZXRUaW1lb3V0Iiwic2hvd0FmdGVyIiwiZ2V0VmFsdWUiLCJsb2dWaXNpdCIsInJlZ2lzdGVyU1ciLCJjYW5TdWJzY3JpYmUiLCJnZXRNZXRhZGF0YSIsInNob3dNb2RhbCIsImNoZWNrSWZTdGlsbFN1YnNjcmliZWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZPLElBQU1BLGdCQUFnQixHQUFHLGtCQUF6Qjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyw0QkFBL0I7O0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsZ0NBQW5DOztBQUNBLElBQU1DLFNBQVMsR0FBRyxlQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQixTQUFTQyxxQkFBVCxDQUErQkMsWUFBL0IsRUFBNkM7QUFDbEQsTUFBSUMsT0FBTyxHQUFHLElBQUlDLE1BQUosQ0FBVyxDQUFDLElBQUlGLFlBQVksQ0FBQ0csTUFBYixHQUFzQixDQUEzQixJQUFnQyxDQUEzQyxDQUFkO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLENBQUNKLFlBQVksR0FBR0MsT0FBaEIsRUFDVkksT0FEVSxDQUNGLEtBREUsRUFDSyxHQURMLEVBRVZBLE9BRlUsQ0FFRixJQUZFLEVBRUksR0FGSixDQUFiO0FBSUEsTUFBSUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosTUFBWixDQUFkO0FBQ0EsTUFBSUssV0FBVyxHQUFHLElBQUlDLFVBQUosQ0FBZUosT0FBTyxDQUFDSCxNQUF2QixDQUFsQjs7QUFFQSxPQUFLLElBQUlRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdMLE9BQU8sQ0FBQ0gsTUFBNUIsRUFBb0MsRUFBRVEsQ0FBdEMsRUFBeUM7QUFDdkNGLGVBQVcsQ0FBQ0UsQ0FBRCxDQUFYLEdBQWlCTCxPQUFPLENBQUNNLFVBQVIsQ0FBbUJELENBQW5CLENBQWpCO0FBQ0Q7O0FBQ0QsU0FBT0YsV0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRDs7QUFLQTs7Ozs7Ozs7Ozs7O0lBT01JLFE7OztBQUNKLG9CQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUM1QixRQUFJRCxPQUFPLElBQUksT0FBT0EsT0FBUCxLQUFtQixVQUFsQyxFQUE4QztBQUM1QyxZQUFNLElBQUlFLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSUQsT0FBTyxJQUFJLE9BQU9BLE9BQVAsS0FBbUIsVUFBbEMsRUFBOEM7QUFDNUMsWUFBTSxJQUFJQyxLQUFKLENBQVUsK0NBQVYsQ0FBTjtBQUNEOztBQUVELFNBQUtDLFlBQUwsR0FBb0JDLEtBQUEsR0FBd0MsdUJBQXhDLEdBQWtFLFNBQXRGO0FBQ0EsU0FBS0osT0FBTCxHQUFlQSxPQUFPLGlCQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBTyxpQkFBdEI7QUFDRDs7Ozt3QkFFR0ksRyxFQUFLO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLEdBQTNCO0FBQ0Q7Ozs7Ozs7Ozs7OztBQUdPRyx3QixHQUFXQyxJQUFJLENBQUNDLGNBQUwsR0FBc0JDLGVBQXRCLEdBQXdDQyxROzt1QkFDbENDLEtBQUssQ0FBQyxLQUFLVixZQUFMLEdBQW9CLFdBQXBCLEdBQWtDSyxRQUFuQyxDOzs7QUFBdEJNLHdCOzt1QkFDaUJBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBakJDLHdCO2lEQUVDQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR007QUFDYixhQUFPQyxZQUFZLENBQUNDLFVBQWIsS0FBNEIsU0FBbkM7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLQyxRQUFMLHdDQUEwQyxJQUExQztBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFFBQUwsd0NBQTBDLEtBQTFDO0FBQ0Q7Ozs2QkFFUUMsRyxFQUFLQyxHLEVBQUs7QUFDakJDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQjtBQUNEOzs7NkJBRVFELEcsRUFBSztBQUNaLGFBQU9FLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPSyxTQUFTLENBQUNDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLG1CQUFqQyxDQUFQO0FBQ0Q7OzttQ0FFY0MsWSxFQUFjWixRLEVBQVU7QUFDckMsYUFBTztBQUNMYSxlQUFPLEVBQUViLFFBQVEsQ0FBQ2EsT0FEYjtBQUVMQyxrQkFBVSxFQUFFZCxRQUFRLENBQUNjLFVBRmhCO0FBR0xDLG1CQUFXLEVBQUVmLFFBQVEsQ0FBQ2UsV0FIakI7QUFJTEMsYUFBSyxFQUFFaEIsUUFBUSxDQUFDZ0IsS0FKWDtBQUtMQyxtQkFBVyxFQUFFakIsUUFBUSxDQUFDaUIsV0FMakI7QUFNTEMsVUFBRSxFQUFFLElBQUlDLElBQUosR0FBV0MsaUJBQVgsS0FBaUMsRUFOaEM7QUFPTEMsa0JBQVUsRUFBRXJCLFFBQVEsQ0FBQ3FCLFVBUGhCO0FBUUxDLGVBQU8sRUFBRXRCLFFBQVEsQ0FBQ3NCLE9BUmI7QUFTTEMsZ0JBQVEsRUFBRVgsWUFBWSxDQUFDVyxRQVRsQjtBQVVMQyxZQUFJLEVBQUVaLFlBQVksQ0FBQ2EsSUFBYixDQUFrQkQsSUFWbkI7QUFXTEUsY0FBTSxFQUFFZCxZQUFZLENBQUNhLElBQWIsQ0FBa0JDLE1BWHJCO0FBWUxDLGdCQUFRLEVBQUVsRCxNQUFNLENBQUNtRCxRQUFQLENBQWdCQyxRQVpyQjtBQWFMQyxpQkFBUyxFQUFFLEtBQUtDO0FBYlgsT0FBUDtBQWVEOzs7Ozs7Z0RBRWNDLEk7Ozs7Ozs7O3VCQUVPbkMsS0FBSyxDQUFDLEtBQUtWLFlBQUwsR0FBb0IsT0FBckIsRUFBOEI7QUFDbkQ4Qyx3QkFBTSxFQUFFLE1BRDJDO0FBRW5EQyxzQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosSUFBZjtBQUY2QyxpQkFBOUIsQzs7O0FBQWpCSyxtQjs7dUJBS1dBLEdBQUcsQ0FBQ0MsSUFBSixFOzs7QUFBWEMsa0I7QUFFTixxQkFBS3BDLFFBQUwsdUJBQXlCb0MsRUFBekI7QUFDQSxxQkFBS0MsZUFBTDs7QUFDQSxvQkFBSSxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCLHVCQUFLQyxTQUFMO0FBQ0Q7O0FBQ0QscUJBQUtuRCxHQUFMLENBQVMsaUJBQVQ7Ozs7Ozs7QUFFQUQsdUJBQU8sQ0FBQ0MsR0FBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQUlxQjtBQUN2QixVQUFJVSxZQUFZLENBQUNDLFVBQWIsS0FBNEIsU0FBaEMsRUFBMkM7QUFDM0MsV0FBS3lDLGlCQUFMO0FBQ0Q7Ozs7OztnREFFb0IzQyxROzs7Ozs7O0FBRVg0QyxtQyxHQUFzQjtBQUMxQkMsaUNBQWUsRUFBRSxJQURTO0FBRTFCQyxzQ0FBb0IsRUFBRSxvQ0FBc0I5QyxRQUFRLENBQUMrQyxhQUEvQjtBQUZJLGlCOzt1QkFLRCxLQUFLQyxZQUFMLENBQWtCQyxXQUFsQixDQUE4QkMsU0FBOUIsQ0FBd0NOLG1CQUF4QyxDOzs7QUFBckJoQyw0QjtBQUVOLHFCQUFLNUIsT0FBTDtBQUNNbUUsMkIsR0FBY2hCLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsWUFBZixDO0FBQ2R3QyxzQixHQUFTakIsSUFBSSxDQUFDa0IsS0FBTCxDQUFXRixXQUFYLEM7QUFDVEcsMEIsR0FBYSxLQUFLQyxjQUFMLENBQW9CSCxNQUFwQixFQUE0QnBELFFBQTVCLEM7QUFFbkIscUJBQUt3RCxRQUFMLENBQWNGLFVBQWQ7O0FBRUEsb0JBQUl0RCxRQUFRLENBQUN5RCxFQUFiLEVBQWlCO0FBQ2YsdUJBQUtDLHVCQUFMLENBQTZCMUQsUUFBN0I7QUFDRDs7Ozs7Ozs7QUFFRFYsdUJBQU8sQ0FBQ0MsR0FBUjtBQUNBLHFCQUFLQSxHQUFMLENBQVMsZUFBVDtBQUNBLHFCQUFLTixPQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBSW9CZSxRLEVBQVU7QUFDaEMsVUFBSTtBQUNGLFlBQU0yRCxTQUFTLEdBQUd4QixJQUFJLENBQUNrQixLQUFMLENBQVczRSxJQUFJLENBQUNzQixRQUFRLENBQUM0RCxVQUFWLENBQWYsQ0FBbEI7QUFFQSxhQUFLWixZQUFMLENBQWtCYSxnQkFBbEIsQ0FBbUNGLFNBQVMsQ0FBQ0csS0FBN0MsRUFBb0Q7QUFDbEQ1QixjQUFJLEVBQUV5QixTQUFTLENBQUNJLFdBRGtDO0FBRWxEQyxjQUFJLEVBQUU7QUFBRUMsZUFBRyxFQUFFTixTQUFTLENBQUNNO0FBQWpCO0FBRjRDLFNBQXBEO0FBSUQsT0FQRCxDQU9FLE9BQU9DLEdBQVAsRUFBWTtBQUNaNUUsZUFBTyxDQUFDQyxHQUFSLENBQVkyRSxHQUFaO0FBQ0Q7QUFDRjs7O29DQUVlbEUsUSxFQUFVbUUsVSxFQUFZO0FBQUE7O0FBRXBDLFVBQU1DLEdBQUcsK1RBV1dELFVBQVUsQ0FBQ0UsZUFYdEIsaUNBWU1GLFVBQVUsQ0FBQ0csU0FaakIseXhDQXFFV0gsVUFBVSxDQUFDSSxnQkFyRXRCLGlDQXNFTUosVUFBVSxDQUFDSyxjQXRFakIsbUZBMEVXTCxVQUFVLENBQUNNLGdCQTFFdEIsaUNBMkVNTixVQUFVLENBQUNPLGNBM0VqQiwyQkFBVDtBQWdGQSxVQUFNQyxJQUFJLHVJQUdVUixVQUFVLENBQUNTLElBSHJCLDhPQVVDVCxVQUFVLENBQUNVLFVBVlosbUhBWWtDVixVQUFVLENBQUNXLFdBWjdDLDBFQWFvQ1gsVUFBVSxDQUFDWSxXQWIvQyx3REFBVjtBQWtCQSxVQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUVBRixjQUFRLENBQUNHLFNBQVQsR0FBcUJmLEdBQXJCO0FBRUEsVUFBTWdCLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxzQkFBVCxFQUFqQjtBQUNBLFVBQU01QyxPQUFPLEdBQUd3QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFFQXpDLGFBQU8sQ0FBQzZDLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUF0QjtBQUNBOUMsYUFBTyxDQUFDMEMsU0FBUixHQUFvQlIsSUFBcEI7QUFFQSxXQUFLbEMsT0FBTCxHQUFlQSxPQUFmO0FBRUEsVUFBTStDLEtBQUssR0FBRy9DLE9BQU8sQ0FBQ2dELGFBQVIsQ0FBc0Isb0JBQXRCLENBQWQ7QUFFQUQsV0FBSyxDQUFDRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDckMsYUFBSSxDQUFDakQsU0FBTDs7QUFDQSxhQUFJLENBQUNrRCx5QkFBTDtBQUNELE9BSEQ7QUFLQSxVQUFNQyxPQUFPLEdBQUdwRCxPQUFPLENBQUNnRCxhQUFSLENBQXNCLHNCQUF0QixDQUFoQjtBQUVBSSxhQUFPLENBQUNILGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN2QyxhQUFJLENBQUNqRCxTQUFMOztBQUNBLGFBQUksQ0FBQ29ELGNBQUwsQ0FBb0I5RixRQUFwQjtBQUNELE9BSEQ7QUFLQW9GLGNBQVEsQ0FBQ1csV0FBVCxDQUFxQnRELE9BQXJCO0FBQ0F3QyxjQUFRLENBQUNlLElBQVQsQ0FBY0QsV0FBZCxDQUEwQmYsUUFBMUI7QUFDQUMsY0FBUSxDQUFDL0MsSUFBVCxDQUFjNkQsV0FBZCxDQUEwQlgsUUFBMUI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBSzNDLE9BQUwsQ0FBYXdELEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0Q7OzsyQ0FFc0JDLFcsRUFBYTtBQUNsQyxVQUFNQyxnQkFBZ0IsR0FBRyxLQUFLQywyQkFBTCxFQUF6QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLQyxTQUFMLEVBQWxCOztBQUVBLFVBQUlILGdCQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzFCLFlBQUlFLFNBQVMsSUFBS0YsZ0JBQWdCLEdBQUdELFdBQXJDLEVBQW1EO0FBQ2pELGlCQUFPLElBQVA7QUFDRDs7QUFDRCxlQUFPLEtBQVA7QUFFRDs7QUFDRCxhQUFPLElBQVA7QUFFRDs7OzhCQUVTbkcsUSxFQUFVO0FBQUE7O0FBQ2xCLFVBQU1tRSxVQUFVLEdBQUdoQyxJQUFJLENBQUNrQixLQUFMLENBQVczRSxJQUFJLENBQUNzQixRQUFRLENBQUN3RyxNQUFWLENBQWYsQ0FBbkI7O0FBRUEsVUFBSXhHLFFBQVEsQ0FBQ3lHLFdBQVQsS0FBeUIsUUFBN0IsRUFBdUM7QUFDckMsWUFBSXRDLFVBQVUsQ0FBQ3VDLGVBQWYsRUFBZ0M7QUFDOUIsZUFBS25ILEdBQUwsQ0FBUyxnQ0FBVDtBQUNBLGVBQUtvSCxlQUFMLENBQXFCM0csUUFBckIsRUFBK0JtRSxVQUEvQjtBQUNELFNBSEQsTUFHTztBQUNMLGNBQU15QyxNQUFNLEdBQUcsS0FBS0wsU0FBTCxFQUFmOztBQUVBLGNBQUlLLE1BQU0sSUFBSXpDLFVBQVUsQ0FBQzBDLGFBQXJCLElBQXNDLEtBQUtDLHNCQUFMLENBQTRCM0MsVUFBVSxDQUFDNEMsYUFBdkMsQ0FBMUMsRUFBaUc7QUFDL0YsaUJBQUt4SCxHQUFMLENBQVMsMEJBQVQ7QUFDQXlILHNCQUFVLENBQUMsWUFBTTtBQUNmLG9CQUFJLENBQUNMLGVBQUwsQ0FBcUIzRyxRQUFyQixFQUErQm1FLFVBQS9CO0FBQ0QsYUFGUyxFQUVQQSxVQUFVLENBQUM4QyxTQUFYLEdBQXVCLElBRmhCLENBQVY7QUFHRDtBQUNGO0FBQ0YsT0FkRCxNQWNPO0FBQ0wsYUFBSzFILEdBQUwsQ0FBUyxvQkFBVDtBQUNBLGFBQUt1RyxjQUFMLENBQW9COUYsUUFBcEI7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFNNEcsTUFBTSxHQUFHLEtBQUtNLFFBQUwsaUNBQW1DLENBQWxEO0FBRUEsV0FBSy9HLFFBQUwsOEJBQWdDLENBQUN5RyxNQUFELEdBQVUsQ0FBMUM7QUFDRDs7O2dEQUUyQjtBQUMxQixVQUFNQSxNQUFNLEdBQUcsS0FBS00sUUFBTCw2QkFBZjtBQUVBLFdBQUsvRyxRQUFMLG9DQUFzQ3lHLE1BQXRDO0FBQ0Q7OztrREFFNkI7QUFDNUIsVUFBTUEsTUFBTSxHQUFHekUsSUFBSSxDQUFDa0IsS0FBTCxDQUFXLEtBQUs2RCxRQUFMLG1DQUFYLENBQWY7O0FBRUEsVUFBSU4sTUFBSixFQUFZO0FBQ1YsZUFBT0EsTUFBUDtBQUNEOztBQUVELGFBQU8sQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPekUsSUFBSSxDQUFDa0IsS0FBTCxDQUFXLEtBQUs2RCxRQUFMLDZCQUFYLEtBQStDLENBQXREO0FBQ0Q7Ozs7OztnREFFVW5GLFE7Ozs7OztBQUNULHFCQUFLb0YsUUFBTDtBQUNBLHFCQUFLcEYsUUFBTCxHQUFnQkEsUUFBaEI7O29CQUVNLG1CQUFtQnRCLFM7Ozs7Ozs7O29CQUNuQixpQkFBaUJoQyxNOzs7Ozs7Ozs7dUJBRUcsS0FBSzJJLFVBQUwsRTs7O0FBQTFCLHFCQUFLcEUsWTs7cUJBRUQsS0FBS3FFLFlBQUwsRTs7Ozs7QUFDRixxQkFBSzlILEdBQUwsQ0FBUyxrQkFBVDs7dUJBQ3VCLEtBQUsrSCxXQUFMLEU7OztBQUFqQnRILHdCO0FBRU4scUJBQUt1SCxTQUFMLENBQWV2SCxRQUFmOzs7OztBQUVBLHFCQUFLd0gsc0JBQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUtTekksUSIsImZpbGUiOiJpbnN0YWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyZWFpbS13ZWItc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWltLXdlYi1zZGtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBjb25zdCBSRUFJTV9TREtfVklTSVRTID0gJ3JlYWltX3Nka192aXNpdHMnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0RFTklFRF9PTl9WSVNJVFMgPSAncmVhaW1fc2RrX2RlbmllZF9vbl92aXNpdHMnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEID0gJ3JlYWltX3Nka19wdXNoX3VzZXJfc3Vic2NyaWJlZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fVUlEID0gJ3JlYWltX3Nka191aWQnO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcbiAgbGV0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxuICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgbGV0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICBsZXQgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dEFycmF5O1xufVxuIiwiaW1wb3J0IHtcbiAgbm9vcCxcbiAgdXJsQmFzZTY0VG9VaW50OEFycmF5XG59IGZyb20gJy4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIFJFQUlNX1NES19WSVNJVFMsXG4gIFJFQUlNX0RFTklFRF9PTl9WSVNJVFMsXG4gIFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELFxuICBSRUFJTV9VSURcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jbGFzcyBSZUFpbVNESyB7XG4gIGNvbnN0cnVjdG9yKG9uQWxsb3csIG9uQmxvY2spIHtcbiAgICBpZiAob25BbGxvdyAmJiB0eXBlb2Ygb25BbGxvdyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUeXBlIG9mIG9uQWxsb3cgcGFyYW1ldGVyIHNob3VsZCBiZSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAob25CbG9jayAmJiB0eXBlb2Ygb25CbG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUeXBlIG9mIG9uQmxvY2sgcGFyYW1ldGVyIHNob3VsZCBiZSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLm1ldGFFbmRwb2ludCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnaHR0cDovL2xvY2FsaG9zdDo0MzQzJyA6ICdodHRwczovL3N1YnMucmVhaW0ubWUnO1xuICAgIHRoaXMub25BbGxvdyA9IG9uQWxsb3cgfHwgbm9vcDtcbiAgICB0aGlzLm9uQmxvY2sgPSBvbkJsb2NrIHx8IG5vb3A7XG4gIH1cblxuICBsb2cobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1JlQWltIFNESyAtJywgbXNnKTtcbiAgfVxuXG4gIGFzeW5jIGdldE1ldGFkYXRhKCkge1xuICAgIGNvbnN0IHRpbWV6b25lID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5tZXRhRW5kcG9pbnQgKyAnL2luZm8/dHo9JyArIHRpbWV6b25lKTtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfVxuXG4gIGNhblN1YnNjcmliZSgpIHtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIHNldEFzU3Vic2NyaWJlZCgpIHtcbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELCB0cnVlKTtcbiAgfVxuXG4gIHNldEFzVW5zdWJzY3JpYmVkKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQsIGZhbHNlKTtcbiAgfVxuXG4gIHNldFZhbHVlKGtleSwgdmFsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWwpO1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuICByZWdpc3RlclNXKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3JlYWltLXNkay13ZWIuanMnKTtcbiAgfVxuXG4gIHByZXBhcmVSZXF1ZXN0KHN1YnNjcmlwdGlvbiwgbWV0YWRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2l0ZV9pZDogbWV0YWRhdGEuc2l0ZV9pZCxcbiAgICAgIGNvdW50cnlfaWQ6IG1ldGFkYXRhLmNvdW50cnlfaWQsXG4gICAgICBwbGF0Zm9ybV9pZDogbWV0YWRhdGEucGxhdGZvcm1faWQsXG4gICAgICBvc19pZDogbWV0YWRhdGEub3NfaWQsXG4gICAgICB0aW1lem9uZV9pZDogbWV0YWRhdGEudGltZXpvbmVfaWQsXG4gICAgICB0ejogbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjAsXG4gICAgICBicm93c2VyX2lkOiBtZXRhZGF0YS5icm93c2VyX2lkLFxuICAgICAgdXNlcl9pZDogbWV0YWRhdGEudXNlcl9pZCxcbiAgICAgIGVuZHBvaW50OiBzdWJzY3JpcHRpb24uZW5kcG9pbnQsXG4gICAgICBhdXRoOiBzdWJzY3JpcHRpb24ua2V5cy5hdXRoLFxuICAgICAgcDI1NmRoOiBzdWJzY3JpcHRpb24ua2V5cy5wMjU2ZGgsXG4gICAgICBwYWdlX3VybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgc2l0ZXNfdWlkOiB0aGlzLnNpdGVzVUlEXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVVc2VyKHVzZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godGhpcy5tZXRhRW5kcG9pbnQgKyAnL3NhdmUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9VSUQsIGlkKTtcbiAgICAgIHRoaXMuc2V0QXNTdWJzY3JpYmVkKCk7XG4gICAgICBpZiAodGhpcy5odG1sRE9NKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvZygndXNlcl9zdWJzY3JpYmVkJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZTdGlsbFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHJldHVybjtcbiAgICB0aGlzLnNldEFzVW5zdWJzY3JpYmVkKCk7XG4gIH1cblxuICBhc3luYyB0cnlUb1N1YnNjcmliZShtZXRhZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25PcHRpb25zID0ge1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkobWV0YWRhdGEudmFwaWRfcHViX2tleSlcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShzdWJzY3JpcHRpb25PcHRpb25zKTtcblxuICAgICAgdGhpcy5vbkFsbG93KCk7XG4gICAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHN1YnNjcmlwdGlvbik7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkKTtcbiAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSB0aGlzLnByZXBhcmVSZXF1ZXN0KHBhcnNlZCwgbWV0YWRhdGEpO1xuXG4gICAgICB0aGlzLnNhdmVVc2VyKHVzZXJPYmplY3QpO1xuXG4gICAgICBpZiAobWV0YWRhdGEud24pIHtcbiAgICAgICAgdGhpcy5zaG93V2VsY29tZU5vdGlmaWNhdGlvbihtZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgdGhpcy5sb2coJ3VzZXJfZGVjbGluZWQnKTtcbiAgICAgIHRoaXMub25CbG9jaygpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dXZWxjb21lTm90aWZpY2F0aW9uKG1ldGFkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHduQ29udGVudCA9IEpTT04ucGFyc2UoYXRvYihtZXRhZGF0YS53bl9jb250ZW50KSk7XG5cbiAgICAgIHRoaXMucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24od25Db250ZW50LnRpdGxlLCB7XG4gICAgICAgIGJvZHk6IHduQ29udGVudC5kZXNjcmlwdGlvbixcbiAgICAgICAgZGF0YTogeyB1cmw6IHduQ29udGVudC51cmwgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSkge1xuXG4gICAgY29uc3QgY3NzID0gYFxuICAgICAgICAucmVhaW0td2ViLW1vZGFsIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIG1heC13aWR0aDogNTQ3cHg7XG4gICAgICAgICAgcGFkZGluZzogNDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvbXB0TWV0YS5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuZm9udENvbG9yfTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA3MHB4IDAgI0U1RThFQztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWltLXByb21wdC1sb2dvLWJyYW5kaW5nIHNtYWxsIGEge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICBjb2xvcjogIzAyMEUxNztcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWltLXByb21wdC1sb2dvIHtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWltLXByb21wdC1sb2dvIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWltLW1vZGFsLWNvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAucmVhaW0tbW9kYWwtY29udGVudCBwIHtcbiAgICAgICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucmVhaW0tcHJvbXB0LWJ1dHRvbnMge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWFpbS1idXR0b24tZGVueSB7XG4gICAgICAgICAgYmFja2dvcnVuZDogJHtwcm9tcHRNZXRhLmJsb2NrQnV0dG9uQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuYmxvY2tGb250Q29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlYWltLWJ1dHRvbi1hY2NlcHQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7cHJvbXB0TWV0YS5hbGxvd0J1dHRvbkNvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmFsbG93Rm9udENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICBgO1xuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1sb2dvLWJyYW5kaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1sb2dvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvbXB0TWV0YS5sb2dvfVwiIGFsdD1cImxvZ29cIj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxzbWFsbD48YSBocmVmPVwiaHR0cHM6Ly9yZWFpbS5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+UG93ZXJlZCBieSBSZUFpbTwvYT48L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVhaW0tbW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxwPiR7cHJvbXB0TWV0YS5hY3Rpb25UZXh0fTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWFpbS1idXR0b24tZGVueVwiPiR7cHJvbXB0TWV0YS5ibG9ja0J1dHRvbn08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWFpbS1idXR0b24tYWNjZXB0XCI+JHtwcm9tcHRNZXRhLmFsbG93QnV0dG9ufTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgICBjb25zdCBSZUFpbUNTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICBSZUFpbUNTUy5pbm5lckhUTUwgPSBjc3M7XG5cbiAgICBjb25zdCBSZUFpbURPTSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBodG1sRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBodG1sRE9NLmNsYXNzTGlzdC5hZGQoJ3JlYWltLXdlYi1tb2RhbCcpO1xuICAgIGh0bWxET00uaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIHRoaXMuaHRtbERPTSA9IGh0bWxET007XG5cbiAgICBjb25zdCAkZGVueSA9IGh0bWxET00ucXVlcnlTZWxlY3RvcignLnJlYWltLWJ1dHRvbi1kZW55Jyk7XG5cbiAgICAkZGVueS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy5sb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCAkYWNjZXB0ID0gaHRtbERPTS5xdWVyeVNlbGVjdG9yKCcucmVhaW0tYnV0dG9uLWFjY2VwdCcpO1xuXG4gICAgJGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy50cnlUb1N1YnNjcmliZShtZXRhZGF0YSk7XG4gICAgfSk7XG5cbiAgICBSZUFpbURPTS5hcHBlbmRDaGlsZChodG1sRE9NKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFJlQWltQ1NTKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFJlQWltRE9NKTtcbiAgfVxuXG4gIGhpZGVNb2RhbCgpIHtcbiAgICB0aGlzLmh0bWxET00uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGVub3VnaFZpc2l0c0FmdGVyQmxvY2sodmlzaXROdW1iZXIpIHtcbiAgICBjb25zdCB2aXNpdHNXaGVuRGVuaWVkID0gdGhpcy5nZXROdW1iZXJPZlZpc2l0c1doZW5EZW5pZWQoKTtcbiAgICBjb25zdCBwYWdldmlld3MgPSB0aGlzLmdldFZpc2l0cygpO1xuXG4gICAgaWYgKHZpc2l0c1doZW5EZW5pZWQgIT09IDApIHtcbiAgICAgIGlmIChwYWdldmlld3MgPj0gKHZpc2l0c1doZW5EZW5pZWQgKyB2aXNpdE51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIHNob3dNb2RhbChtZXRhZGF0YSkge1xuICAgIGNvbnN0IHByb21wdE1ldGEgPSBKU09OLnBhcnNlKGF0b2IobWV0YWRhdGEucHJvbXB0KSk7XG5cbiAgICBpZiAobWV0YWRhdGEucHJvbXB0X3R5cGUgPT09ICdjdXN0b20nKSB7XG4gICAgICBpZiAocHJvbXB0TWV0YS5zaG93SW1tZWRpYXRlbHkpIHtcbiAgICAgICAgdGhpcy5sb2coJ3Nob3dfaW1tZWRpYXRlbHlfY3VzdG9tX3Byb21wdCcpO1xuICAgICAgICB0aGlzLnNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2aXNpdHMgPSB0aGlzLmdldFZpc2l0cygpO1xuXG4gICAgICAgIGlmICh2aXNpdHMgPj0gcHJvbXB0TWV0YS5zZXNzaW9uTnVtYmVyICYmIHRoaXMuZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayhwcm9tcHRNZXRhLmFza0FnYWluQWZ0ZXIpKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ3Nob3dfdGltZWRfY3VzdG9tX3Byb21wdCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VzdG9tTW9kYWwobWV0YWRhdGEsIHByb21wdE1ldGEpO1xuICAgICAgICAgIH0sIHByb21wdE1ldGEuc2hvd0FmdGVyICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2coJ3Nob3dfbmF0aXZlX3Byb21wdCcpO1xuICAgICAgdGhpcy50cnlUb1N1YnNjcmliZShtZXRhZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbG9nVmlzaXQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gdGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKSB8fCAwO1xuXG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTLCArdmlzaXRzICsgMSk7XG4gIH1cblxuICBsb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkKCkge1xuICAgIGNvbnN0IHZpc2l0cyA9IHRoaXMuZ2V0VmFsdWUoUkVBSU1fU0RLX1ZJU0lUUyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX0RFTklFRF9PTl9WSVNJVFMsIHZpc2l0cyk7XG4gIH1cblxuICBnZXROdW1iZXJPZlZpc2l0c1doZW5EZW5pZWQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gSlNPTi5wYXJzZSh0aGlzLmdldFZhbHVlKFJFQUlNX0RFTklFRF9PTl9WSVNJVFMpKTtcblxuICAgIGlmICh2aXNpdHMpIHtcbiAgICAgIHJldHVybiB2aXNpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXRWaXNpdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKSkgfHwgMDtcbiAgfVxuXG4gIGFzeW5jIGluaXQoc2l0ZXNVSUQpIHtcbiAgICB0aGlzLmxvZ1Zpc2l0KCk7XG4gICAgdGhpcy5zaXRlc1VJRCA9IHNpdGVzVUlEO1xuXG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHJldHVybjtcbiAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHJldHVybjtcblxuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gYXdhaXQgdGhpcy5yZWdpc3RlclNXKCk7XG5cbiAgICBpZiAodGhpcy5jYW5TdWJzY3JpYmUoKSkge1xuICAgICAgdGhpcy5sb2coJ3RyeV90b19zdWJzY3JpYmUnKTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgdGhpcy5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICB0aGlzLnNob3dNb2RhbChtZXRhZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tJZlN0aWxsU3Vic2NyaWJlZCgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZUFpbVNESztcbiJdLCJzb3VyY2VSb290IjoiIn0=