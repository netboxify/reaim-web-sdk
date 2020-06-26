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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

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
exports.REAIM_CLICK = exports.REAIM_IMPRESSION = exports.REAIM_STORAGE_NAME = exports.REAIM_SUBS_API = exports.REAIM_EVENTS_API = exports.REAIM_SAVE_SUBSCRIPTION = exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = exports.REAIM_SW_PATH = void 0;
var PRODUCTION = !!("development" === 'production');
var LOCAL_EVENTS_API = 'http://localhost:5555';
var LOCAL_SUBS_API = 'http://localhost:4343';
var PROD_EVENTS_API = 'https://events.reaim.me';
var PROD_SUBS_API = 'https://subs.reaim.me';
var REAIM_SW_PATH = self.window && self.window.REAIM_SW_PATH_GLOBAL || '/reaim-sw.js';
exports.REAIM_SW_PATH = REAIM_SW_PATH;
var REAIM_SDK_VISITS = 'reaim_sdk_visits';
exports.REAIM_SDK_VISITS = REAIM_SDK_VISITS;
var REAIM_DENIED_ON_VISITS = 'reaim_sdk_denied_on_visits';
exports.REAIM_DENIED_ON_VISITS = REAIM_DENIED_ON_VISITS;
var REAIM_PUSH_USER_SUBSCRIBED = 'reaim_sdk_push_user_subscribed';
exports.REAIM_PUSH_USER_SUBSCRIBED = REAIM_PUSH_USER_SUBSCRIBED;
var REAIM_UID = 'reaim_sdk_uid';
exports.REAIM_UID = REAIM_UID;
var REAIM_SAVE_SUBSCRIPTION = 'reaim_save_subscription';
exports.REAIM_SAVE_SUBSCRIPTION = REAIM_SAVE_SUBSCRIPTION;
var REAIM_EVENTS_API = !PRODUCTION ? LOCAL_EVENTS_API : PROD_EVENTS_API;
exports.REAIM_EVENTS_API = REAIM_EVENTS_API;
var REAIM_SUBS_API = !PRODUCTION ? LOCAL_SUBS_API : PROD_SUBS_API;
exports.REAIM_SUBS_API = REAIM_SUBS_API;
var REAIM_STORAGE_NAME = 'reaim_sdk_storage';
exports.REAIM_STORAGE_NAME = REAIM_STORAGE_NAME;
var REAIM_IMPRESSION = 'i';
exports.REAIM_IMPRESSION = REAIM_IMPRESSION;
var REAIM_CLICK = 'c';
exports.REAIM_CLICK = REAIM_CLICK;

/***/ }),

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(promptMeta) {
  return "\n    .reaim-web-modal {\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      position: fixed;\n      max-width: 547px;\n      padding: 45px;\n      padding-bottom: 30px;\n      font-size: 14px;\n      font-weight: 100;\n      width: 100%;\n      background: ".concat(promptMeta.backgroundColor, ";\n      color: ").concat(promptMeta.fontColor, ";\n      margin: 0 auto;\n      left: 0;\n      right: 0;\n      box-shadow: 1px 2px 20px rgba(0,0,0,0.12), -2px -1px 20px 0px rgba(0,0,0,0.24);\n      border-radius: 0px 0px 8px 8px;\n      top: 0;\n      z-index: 999999;\n      font-family: \"Arial\", sans-serif;\n    }\n\n    .reaim-web-modal .reaim-prompt-content-wrapper {\n      display: flex;\n    }\n\n    .reaim-web-modal .reaim-prompt-logo-branding small a {\n      position: relative;\n      top: 15px;\n      text-decoration: none;\n      opacity: 0.5;\n      color: #020E17;\n      font-size: 10px;\n      text-decoration: none;\n    }\n\n    .reaim-web-modal .reaim-prompt-logo {\n      width: 80px;\n      height: 80px;\n      margin-right: 30px;\n    }\n\n    .reaim-web-modal .reaim-prompt-logo img {\n      max-width: 80px;\n      width: 100%;\n    }\n\n    .reaim-web-modal .reaim-modal-content {\n      width: 360px;\n      position: relative;\n    }\n\n    .reaim-web-modal .reaim-modal-content p {\n      height: 65px;\n      font-size: 16px;\n      margin-top: 0;\n    }\n\n    .reaim-web-modal .reaim-prompt-buttons {\n      display: flex;\n      justify-content: flex-end;\n    }\n\n    .reaim-web-modal .reaim-prompt-buttons button {\n      height: 52px;\n      border-radius: 8px;\n      cursor: pointer;\n      margin-left: 10px;\n      padding: 10px 20px;\n      border: none;\n      outline: none;\n      font-size: 14px;\n    }\n\n    .reaim-web-modal .reaim-button-deny {\n      background: ").concat(promptMeta.blockButtonColor, ";\n      color: ").concat(promptMeta.blockFontColor, ";\n    }\n\n    .reaim-web-modal .reaim-button-accept {\n      background: ").concat(promptMeta.allowButtonColor, ";\n      color: ").concat(promptMeta.allowFontColor, ";\n    }\n\n    @media(max-width: 768px) {\n      .reaim-web-modal {\n        max-width: 375px;\n        font-size: 12px;\n        position: fixed;\n        bottom: 0;\n        top: auto;\n        left: 0;\n        right: 0;\n        border-radius: 8px 8px 0px 0px;\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n\n      .reaim-web-modal .reaim-modal-content p {\n        font-size: 14px;\n      }\n\n      .reaim-web-modal .reaim-prompt-logo {\n        width: 68px;\n        height: 68px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons {\n        display: flex;\n        margin-top: 10px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons button {\n        height: 40px;\n        padding: 10px 15px;\n        font-size: 12px;\n      }\n    }\n\n\n    @media(max-width: 350px) {\n      .reaim-web-modal .reaim-modal-content p {\n        height: 90px;\n      }\n    }\n\n    @media(max-width: 324px) {\n      .reaim-web-modal {\n        height: 250px;\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n\n      .reaim-web-modal .reaim-modal-content p {\n        height: 110px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons button {\n        paddding: 10px 10px;\n        font-size: 10px;\n      }\n    }\n  ");
};

exports.default = _default;
module.exports = exports["default"];

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
exports.isValidToken = isValidToken;

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

function isValidToken(str) {
  try {
    return btoa(atob(str)) === str;
  } catch (err) {
    return false;
  }
}

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(promptMeta) {
  return "\n    <div class=\"reaim-prompt-content-wrapper\">\n      <div class=\"reaim-prompt-logo-branding\">\n        <div class=\"reaim-prompt-logo\">\n          <img src=\"".concat(promptMeta.logo, "\" alt=\"logo\">\n        </div>\n\n        ").concat(promptMeta.removeBranding ? '' : "<small>\n          <a href=\"https://reaim.me\" target=\"_blank\" rel=\"noopener\">Powered by ReAim</a>\n        </small>", "\n      </div>\n\n      <div class=\"reaim-modal-content\">\n        <p>").concat(promptMeta.actionText, "</p>\n      </div>\n    </div>\n\n    <div class=\"reaim-prompt-buttons\">\n      <button class=\"reaim-button-deny\">").concat(promptMeta.blockButton, "</button>\n      <button class=\"reaim-button-accept\">").concat(promptMeta.allowButton, "</button>\n    </div>\n  ");
};

exports.default = _default;
module.exports = exports["default"];

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

var _html = _interopRequireDefault(__webpack_require__(/*! ./html */ "./src/html.js"));

var _css = _interopRequireDefault(__webpack_require__(/*! ./css */ "./src/css.js"));

var _regeneratorRuntime = _interopRequireDefault(__webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-enable */
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

    this.metaEndpoint = _constants.REAIM_SUBS_API;
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
      _regeneratorRuntime.default.mark(function _callee() {
        var timezone, response, metadata;
        return _regeneratorRuntime.default.wrap(function _callee$(_context) {
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
      return navigator.serviceWorker.register(_constants.REAIM_SW_PATH);
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
      _regeneratorRuntime.default.mark(function _callee2(user) {
        var res, id;
        return _regeneratorRuntime.default.wrap(function _callee2$(_context2) {
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
                this.log(_context2.t0);

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
      _regeneratorRuntime.default.mark(function _callee3(metadata) {
        var subscriptionOptions, subscription, stringified, parsed, userObject;
        return _regeneratorRuntime.default.wrap(function _callee3$(_context3) {
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

                if (navigator.serviceWorker.controller) {
                  navigator.serviceWorker.controller.postMessage({
                    action: _constants.REAIM_SAVE_SUBSCRIPTION,
                    subscription: JSON.parse(JSON.stringify(subscription))
                  });
                }

                this.onAllow();
                stringified = JSON.stringify(subscription);
                parsed = JSON.parse(stringified);
                userObject = this.prepareRequest(parsed, metadata);
                this.saveUser(userObject);

                if (metadata.wn) {
                  this.showWelcomeNotification(metadata);
                }

                _context3.next = 19;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                this.log(_context3.t0);
                this.log('user_declined');
                this.onBlock();

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14]]);
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
        this.log(err);
      }
    }
  }, {
    key: "showCustomModal",
    value: function showCustomModal(metadata, promptMeta) {
      var _this = this;

      var css = (0, _css.default)(promptMeta);
      var html = (0, _html.default)(promptMeta);
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

      if (metadata.prompt_type === 'custom') {
        var promptMeta = JSON.parse(atob(metadata.prompt));

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
      _regeneratorRuntime.default.mark(function _callee4(sitesUID) {
        var metadata;
        return _regeneratorRuntime.default.wrap(function _callee4$(_context4) {
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
  }], [{
    key: "trackConversion",
    value: function trackConversion(payout) {
      var params = new URLSearchParams(window.location.search);
      var trackingID = params.get('r_cid');

      if (trackingID && payout && (0, _helpers.isValidToken)(trackingID)) {
        fetch("".concat(_constants.REAIM_EVENTS_API, "/conv?t=").concat(trackingID, "&payout=").concat(payout));
      }
    }
  }, {
    key: "addTags",
    value: function addTags(tags) {
      var isSubscribed = JSON.parse(localStorage.getItem(_constants.REAIM_PUSH_USER_SUBSCRIBED));
      var sid = JSON.parse(localStorage.getItem(_constants.REAIM_UID));

      if (!isSubscribed || !sid) {
        return;
      }

      if (!Array.isArray('tags') && typeof tags === 'string') {
        tags = [tags];
      }

      fetch("".concat(_constants.REAIM_SUBS_API, "/tags"), {
        method: 'POST',
        body: JSON.stringify({
          subscriber: sid,
          tags: tags
        })
      });
    }
  }]);

  return ReAimSDK;
}();

window.ReAimSDK = ReAimSDK;
var _default = ReAimSDK;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vc3JjL2h0bWwuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TV19QQVRIIiwic2VsZiIsIndpbmRvdyIsIlJFQUlNX1NXX1BBVEhfR0xPQkFMIiwiUkVBSU1fU0RLX1ZJU0lUUyIsIlJFQUlNX0RFTklFRF9PTl9WSVNJVFMiLCJSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCIsIlJFQUlNX1VJRCIsIlJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OIiwiUkVBSU1fRVZFTlRTX0FQSSIsIlJFQUlNX1NVQlNfQVBJIiwiUkVBSU1fU1RPUkFHRV9OQU1FIiwiUkVBSU1fSU1QUkVTU0lPTiIsIlJFQUlNX0NMSUNLIiwicHJvbXB0TWV0YSIsImJhY2tncm91bmRDb2xvciIsImZvbnRDb2xvciIsImJsb2NrQnV0dG9uQ29sb3IiLCJibG9ja0ZvbnRDb2xvciIsImFsbG93QnV0dG9uQ29sb3IiLCJhbGxvd0ZvbnRDb2xvciIsIm5vb3AiLCJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJpc1ZhbGlkVG9rZW4iLCJzdHIiLCJidG9hIiwiZXJyIiwibG9nbyIsInJlbW92ZUJyYW5kaW5nIiwiYWN0aW9uVGV4dCIsImJsb2NrQnV0dG9uIiwiYWxsb3dCdXR0b24iLCJSZUFpbVNESyIsIm9uQWxsb3ciLCJvbkJsb2NrIiwiRXJyb3IiLCJtZXRhRW5kcG9pbnQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwidGltZXpvbmUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJyZXNvbHZlZE9wdGlvbnMiLCJ0aW1lWm9uZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwibWV0YWRhdGEiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWwiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInN1YnNjcmlwdGlvbiIsInNpdGVfaWQiLCJjb3VudHJ5X2lkIiwicGxhdGZvcm1faWQiLCJvc19pZCIsInRpbWV6b25lX2lkIiwidHoiLCJEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJicm93c2VyX2lkIiwidXNlcl9pZCIsImVuZHBvaW50IiwiYXV0aCIsImtleXMiLCJwMjU2ZGgiLCJwYWdlX3VybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaXRlc191aWQiLCJzaXRlc1VJRCIsInVzZXIiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsInRleHQiLCJpZCIsInNldEFzU3Vic2NyaWJlZCIsImh0bWxET00iLCJoaWRlTW9kYWwiLCJzZXRBc1Vuc3Vic2NyaWJlZCIsInN1YnNjcmlwdGlvbk9wdGlvbnMiLCJ1c2VyVmlzaWJsZU9ubHkiLCJhcHBsaWNhdGlvblNlcnZlcktleSIsInZhcGlkX3B1Yl9rZXkiLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsInN1YnNjcmliZSIsImNvbnRyb2xsZXIiLCJwb3N0TWVzc2FnZSIsImFjdGlvbiIsInBhcnNlIiwic3RyaW5naWZpZWQiLCJwYXJzZWQiLCJ1c2VyT2JqZWN0IiwicHJlcGFyZVJlcXVlc3QiLCJzYXZlVXNlciIsInduIiwic2hvd1dlbGNvbWVOb3RpZmljYXRpb24iLCJ3bkNvbnRlbnQiLCJ3bl9jb250ZW50Iiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRhIiwidXJsIiwiY3NzIiwiaHRtbCIsIlJlQWltQ1NTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiUmVBaW1ET00iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiJGRlbnkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkIiwiJGFjY2VwdCIsInRyeVRvU3Vic2NyaWJlIiwiYXBwZW5kQ2hpbGQiLCJoZWFkIiwic3R5bGUiLCJkaXNwbGF5IiwidmlzaXROdW1iZXIiLCJ2aXNpdHNXaGVuRGVuaWVkIiwiZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkIiwicGFnZXZpZXdzIiwiZ2V0VmlzaXRzIiwicHJvbXB0X3R5cGUiLCJwcm9tcHQiLCJzaG93SW1tZWRpYXRlbHkiLCJzaG93Q3VzdG9tTW9kYWwiLCJ2aXNpdHMiLCJzZXNzaW9uTnVtYmVyIiwiZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayIsImFza0FnYWluQWZ0ZXIiLCJzZXRUaW1lb3V0Iiwic2hvd0FmdGVyIiwiZ2V0VmFsdWUiLCJsb2dWaXNpdCIsInJlZ2lzdGVyU1ciLCJjYW5TdWJzY3JpYmUiLCJnZXRNZXRhZGF0YSIsInNob3dNb2RhbCIsImNoZWNrSWZTdGlsbFN1YnNjcmliZWQiLCJwYXlvdXQiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJ0cmFja2luZ0lEIiwiZ2V0IiwidGFncyIsImlzU3Vic2NyaWJlZCIsInNpZCIsIkFycmF5IiwiaXNBcnJheSIsInN1YnNjcmliZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFsQjtlQUNlQSxRIiwiZmlsZSI6Imluc3RhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlYWltLXdlYi1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImNvbnN0IFBST0RVQ1RJT04gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKTtcbmNvbnN0IExPQ0FMX0VWRU5UU19BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1NTU1JztcbmNvbnN0IExPQ0FMX1NVQlNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDM0Myc7XG5jb25zdCBQUk9EX0VWRU5UU19BUEkgPSAnaHR0cHM6Ly9ldmVudHMucmVhaW0ubWUnO1xuY29uc3QgUFJPRF9TVUJTX0FQSSA9ICdodHRwczovL3N1YnMucmVhaW0ubWUnO1xuXG5leHBvcnQgY29uc3QgUkVBSU1fU1dfUEFUSCA9IHNlbGYud2luZG93ICYmIHNlbGYud2luZG93LlJFQUlNX1NXX1BBVEhfR0xPQkFMIHx8ICcvcmVhaW0tc3cuanMnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1NES19WSVNJVFMgPSAncmVhaW1fc2RrX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fREVOSUVEX09OX1ZJU0lUUyA9ICdyZWFpbV9zZGtfZGVuaWVkX29uX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQgPSAncmVhaW1fc2RrX3B1c2hfdXNlcl9zdWJzY3JpYmVkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9VSUQgPSAncmVhaW1fc2RrX3VpZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04gPSAncmVhaW1fc2F2ZV9zdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0VWRU5UU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0VWRU5UU19BUEkgOiBQUk9EX0VWRU5UU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1VCU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX1NVQlNfQVBJIDogUFJPRF9TVUJTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVE9SQUdFX05BTUUgPSAncmVhaW1fc2RrX3N0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0lNUFJFU1NJT04gPSAnaSc7XG5leHBvcnQgY29uc3QgUkVBSU1fQ0xJQ0sgPSAnYyc7XG4iLCJleHBvcnQgZGVmYXVsdCAocHJvbXB0TWV0YSkgPT4ge1xuICByZXR1cm4gYFxuICAgIC5yZWFpbS13ZWItbW9kYWwge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbWF4LXdpZHRoOiA1NDdweDtcbiAgICAgIHBhZGRpbmc6IDQ1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvbXB0TWV0YS5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgY29sb3I6ICR7cHJvbXB0TWV0YS5mb250Q29sb3J9O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDIwcHggcmdiYSgwLDAsMCwwLjEyKSwgLTJweCAtMXB4IDIwcHggMHB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDhweCA4cHg7XG4gICAgICB0b3A6IDA7XG4gICAgICB6LWluZGV4OiA5OTk5OTk7XG4gICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtbG9nby1icmFuZGluZyBzbWFsbCBhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMTVweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGNvbG9yOiAjMDIwRTE3O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1sb2dvIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1sb2dvIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHAge1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLWJ1dHRvbi1kZW55IHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvbXB0TWV0YS5ibG9ja0J1dHRvbkNvbG9yfTtcbiAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuYmxvY2tGb250Q29sb3J9O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLWJ1dHRvbi1hY2NlcHQge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9tcHRNZXRhLmFsbG93QnV0dG9uQ29sb3J9O1xuICAgICAgY29sb3I6ICR7cHJvbXB0TWV0YS5hbGxvd0ZvbnRDb2xvcn07XG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIC5yZWFpbS13ZWItbW9kYWwge1xuICAgICAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDBweCAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tbW9kYWwtY29udGVudCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtbG9nbyB7XG4gICAgICAgIHdpZHRoOiA2OHB4O1xuICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1idXR0b25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDM1MHB4KSB7XG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHAge1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogMzI0cHgpIHtcbiAgICAgIC5yZWFpbS13ZWItbW9kYWwge1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLW1vZGFsLWNvbnRlbnQgcCB7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1idXR0b25zIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIGA7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcbiAgbGV0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxuICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgbGV0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICBsZXQgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRva2VuKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBidG9hKGF0b2Ioc3RyKSkgPT09IHN0cjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAocHJvbXB0TWV0YSkgPT4ge1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtY29udGVudC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWxvZ28tYnJhbmRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1sb2dvXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIke3Byb21wdE1ldGEubG9nb31cIiBhbHQ9XCJsb2dvXCI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgICR7cHJvbXB0TWV0YS5yZW1vdmVCcmFuZGluZyA/ICcnIDogYDxzbWFsbD5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFpbS5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+UG93ZXJlZCBieSBSZUFpbTwvYT5cbiAgICAgICAgPC9zbWFsbD5gfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxwPiR7cHJvbXB0TWV0YS5hY3Rpb25UZXh0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1idXR0b25zXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVhaW0tYnV0dG9uLWRlbnlcIj4ke3Byb21wdE1ldGEuYmxvY2tCdXR0b259PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVhaW0tYnV0dG9uLWFjY2VwdFwiPiR7cHJvbXB0TWV0YS5hbGxvd0J1dHRvbn08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG4iLCJpbXBvcnQge1xuICBub29wLFxuICB1cmxCYXNlNjRUb1VpbnQ4QXJyYXksXG4gIGlzVmFsaWRUb2tlblxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5pbXBvcnQge1xuICBSRUFJTV9TREtfVklTSVRTLFxuICBSRUFJTV9ERU5JRURfT05fVklTSVRTLFxuICBSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCxcbiAgUkVBSU1fVUlELFxuICBSRUFJTV9TVUJTX0FQSSxcbiAgUkVBSU1fRVZFTlRTX0FQSSxcbiAgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04sXG4gIFJFQUlNX1NXX1BBVEhcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgcmVuZGVyVUkgZnJvbSAnLi9odG1sJztcbmltcG9ydCByZW5kZXJTdHlsZXMgZnJvbSAnLi9jc3MnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJztcbi8qIGVzbGludC1lbmFibGUgKi9cblxuY2xhc3MgUmVBaW1TREsge1xuICBjb25zdHJ1Y3RvcihvbkFsbG93LCBvbkJsb2NrKSB7XG4gICAgaWYgKG9uQWxsb3cgJiYgdHlwZW9mIG9uQWxsb3cgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZSBvZiBvbkFsbG93IHBhcmFtZXRlciBzaG91bGQgYmUgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKG9uQmxvY2sgJiYgdHlwZW9mIG9uQmxvY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZSBvZiBvbkJsb2NrIHBhcmFtZXRlciBzaG91bGQgYmUgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5tZXRhRW5kcG9pbnQgPSBSRUFJTV9TVUJTX0FQSTtcbiAgICB0aGlzLm9uQWxsb3cgPSBvbkFsbG93IHx8IG5vb3A7XG4gICAgdGhpcy5vbkJsb2NrID0gb25CbG9jayB8fCBub29wO1xuICB9XG5cbiAgbG9nKG1zZykge1xuICAgIGNvbnNvbGUubG9nKCdSZUFpbSBTREsgLScsIG1zZyk7XG4gIH1cblxuICBhc3luYyBnZXRNZXRhZGF0YSgpIHtcbiAgICBjb25zdCB0aW1lem9uZSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRoaXMubWV0YUVuZHBvaW50ICsgJy9pbmZvP3R6PScgKyB0aW1lem9uZSk7XG4gICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH1cblxuICBjYW5TdWJzY3JpYmUoKSB7XG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBzZXRBc1N1YnNjcmliZWQoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCwgdHJ1ZSk7XG4gIH1cblxuICBzZXRBc1Vuc3Vic2NyaWJlZCgpIHtcbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELCBmYWxzZSk7XG4gIH1cblxuICBzZXRWYWx1ZShrZXksIHZhbCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsKTtcbiAgfVxuXG4gIGdldFZhbHVlKGtleSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgcmVnaXN0ZXJTVygpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoUkVBSU1fU1dfUEFUSCk7XG4gIH1cblxuICBwcmVwYXJlUmVxdWVzdChzdWJzY3JpcHRpb24sIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpdGVfaWQ6IG1ldGFkYXRhLnNpdGVfaWQsXG4gICAgICBjb3VudHJ5X2lkOiBtZXRhZGF0YS5jb3VudHJ5X2lkLFxuICAgICAgcGxhdGZvcm1faWQ6IG1ldGFkYXRhLnBsYXRmb3JtX2lkLFxuICAgICAgb3NfaWQ6IG1ldGFkYXRhLm9zX2lkLFxuICAgICAgdGltZXpvbmVfaWQ6IG1ldGFkYXRhLnRpbWV6b25lX2lkLFxuICAgICAgdHo6IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwLFxuICAgICAgYnJvd3Nlcl9pZDogbWV0YWRhdGEuYnJvd3Nlcl9pZCxcbiAgICAgIHVzZXJfaWQ6IG1ldGFkYXRhLnVzZXJfaWQsXG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAgYXV0aDogc3Vic2NyaXB0aW9uLmtleXMuYXV0aCxcbiAgICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uLmtleXMucDI1NmRoLFxuICAgICAgcGFnZV91cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNpdGVzX3VpZDogdGhpcy5zaXRlc1VJRFxuICAgIH07XG4gIH1cblxuICBhc3luYyBzYXZlVXNlcih1c2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMubWV0YUVuZHBvaW50ICsgJy9zYXZlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fVUlELCBpZCk7XG4gICAgICB0aGlzLnNldEFzU3Vic2NyaWJlZCgpO1xuXG4gICAgICBpZiAodGhpcy5odG1sRE9NKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nKCd1c2VyX3N1YnNjcmliZWQnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZlN0aWxsU3Vic2NyaWJlZCgpIHtcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykgcmV0dXJuO1xuICAgIHRoaXMuc2V0QXNVbnN1YnNjcmliZWQoKTtcbiAgfVxuXG4gIGFzeW5jIHRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheShtZXRhZGF0YS52YXBpZF9wdWJfa2V5KVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgdGhpcy5yZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbk9wdGlvbnMpO1xuXG4gICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBhY3Rpb246IFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgIHN1YnNjcmlwdGlvbjogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJzY3JpcHRpb24pKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkFsbG93KCk7XG5cbiAgICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWQpO1xuICAgICAgY29uc3QgdXNlck9iamVjdCA9IHRoaXMucHJlcGFyZVJlcXVlc3QocGFyc2VkLCBtZXRhZGF0YSk7XG5cbiAgICAgIHRoaXMuc2F2ZVVzZXIodXNlck9iamVjdCk7XG5cbiAgICAgIGlmIChtZXRhZGF0YS53bikge1xuICAgICAgICB0aGlzLnNob3dXZWxjb21lTm90aWZpY2F0aW9uKG1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgICB0aGlzLmxvZygndXNlcl9kZWNsaW5lZCcpO1xuICAgICAgdGhpcy5vbkJsb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1dlbGNvbWVOb3RpZmljYXRpb24obWV0YWRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd25Db250ZW50ID0gSlNPTi5wYXJzZShhdG9iKG1ldGFkYXRhLnduX2NvbnRlbnQpKTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih3bkNvbnRlbnQudGl0bGUsIHtcbiAgICAgICAgYm9keTogd25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRhOiB7IHVybDogd25Db250ZW50LnVybCB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nKGVycilcbiAgICB9XG4gIH1cblxuICBzaG93Q3VzdG9tTW9kYWwobWV0YWRhdGEsIHByb21wdE1ldGEpIHtcbiAgICBjb25zdCBjc3MgPSByZW5kZXJTdHlsZXMocHJvbXB0TWV0YSk7XG4gICAgY29uc3QgaHRtbCA9IHJlbmRlclVJKHByb21wdE1ldGEpO1xuICAgIGNvbnN0IFJlQWltQ1NTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIFJlQWltQ1NTLmlubmVySFRNTCA9IGNzcztcblxuICAgIGNvbnN0IFJlQWltRE9NID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGh0bWxET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGh0bWxET00uY2xhc3NMaXN0LmFkZCgncmVhaW0td2ViLW1vZGFsJyk7XG4gICAgaHRtbERPTS5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgdGhpcy5odG1sRE9NID0gaHRtbERPTTtcblxuICAgIGNvbnN0ICRkZW55ID0gaHRtbERPTS5xdWVyeVNlbGVjdG9yKCcucmVhaW0tYnV0dG9uLWRlbnknKTtcblxuICAgICRkZW55LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLmxvZ1Zpc2l0c051bWJlcldoZW5EZW5pZWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0ICRhY2NlcHQgPSBodG1sRE9NLnF1ZXJ5U2VsZWN0b3IoJy5yZWFpbS1idXR0b24tYWNjZXB0Jyk7XG5cbiAgICAkYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLnRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKTtcbiAgICB9KTtcblxuICAgIFJlQWltRE9NLmFwcGVuZENoaWxkKGh0bWxET00pO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoUmVBaW1DU1MpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUmVBaW1ET00pO1xuICB9XG5cbiAgaGlkZU1vZGFsKCkge1xuICAgIHRoaXMuaHRtbERPTS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayh2aXNpdE51bWJlcikge1xuICAgIGNvbnN0IHZpc2l0c1doZW5EZW5pZWQgPSB0aGlzLmdldE51bWJlck9mVmlzaXRzV2hlbkRlbmllZCgpO1xuICAgIGNvbnN0IHBhZ2V2aWV3cyA9IHRoaXMuZ2V0VmlzaXRzKCk7XG5cbiAgICBpZiAodmlzaXRzV2hlbkRlbmllZCAhPT0gMCkge1xuICAgICAgaWYgKHBhZ2V2aWV3cyA+PSAodmlzaXRzV2hlbkRlbmllZCArIHZpc2l0TnVtYmVyKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9XG5cbiAgc2hvd01vZGFsKG1ldGFkYXRhKSB7XG4gICAgaWYgKG1ldGFkYXRhLnByb21wdF90eXBlID09PSAnY3VzdG9tJykge1xuICAgICAgY29uc3QgcHJvbXB0TWV0YSA9IEpTT04ucGFyc2UoYXRvYihtZXRhZGF0YS5wcm9tcHQpKTtcblxuICAgICAgaWYgKHByb21wdE1ldGEuc2hvd0ltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHRoaXMubG9nKCdzaG93X2ltbWVkaWF0ZWx5X2N1c3RvbV9wcm9tcHQnKTtcbiAgICAgICAgdGhpcy5zaG93Q3VzdG9tTW9kYWwobWV0YWRhdGEsIHByb21wdE1ldGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmlzaXRzID0gdGhpcy5nZXRWaXNpdHMoKTtcblxuICAgICAgICBpZiAodmlzaXRzID49IHByb21wdE1ldGEuc2Vzc2lvbk51bWJlciAmJiB0aGlzLmVub3VnaFZpc2l0c0FmdGVyQmxvY2socHJvbXB0TWV0YS5hc2tBZ2FpbkFmdGVyKSkge1xuICAgICAgICAgIHRoaXMubG9nKCdzaG93X3RpbWVkX2N1c3RvbV9wcm9tcHQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1c3RvbU1vZGFsKG1ldGFkYXRhLCBwcm9tcHRNZXRhKTtcbiAgICAgICAgICB9LCBwcm9tcHRNZXRhLnNob3dBZnRlciAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nKCdzaG93X25hdGl2ZV9wcm9tcHQnKTtcbiAgICAgIHRoaXMudHJ5VG9TdWJzY3JpYmUobWV0YWRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ1Zpc2l0KCkge1xuICAgIGNvbnN0IHZpc2l0cyA9IHRoaXMuZ2V0VmFsdWUoUkVBSU1fU0RLX1ZJU0lUUykgfHwgMDtcblxuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fU0RLX1ZJU0lUUywgK3Zpc2l0cyArIDEpO1xuICB9XG5cbiAgbG9nVmlzaXRzTnVtYmVyV2hlbkRlbmllZCgpIHtcbiAgICBjb25zdCB2aXNpdHMgPSB0aGlzLmdldFZhbHVlKFJFQUlNX1NES19WSVNJVFMpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9ERU5JRURfT05fVklTSVRTLCB2aXNpdHMpO1xuICB9XG5cbiAgZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkKCkge1xuICAgIGNvbnN0IHZpc2l0cyA9IEpTT04ucGFyc2UodGhpcy5nZXRWYWx1ZShSRUFJTV9ERU5JRURfT05fVklTSVRTKSk7XG5cbiAgICBpZiAodmlzaXRzKSB7XG4gICAgICByZXR1cm4gdmlzaXRzO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZ2V0VmlzaXRzKCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuZ2V0VmFsdWUoUkVBSU1fU0RLX1ZJU0lUUykpIHx8IDA7XG4gIH1cblxuICBzdGF0aWMgdHJhY2tDb252ZXJzaW9uKHBheW91dCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgdHJhY2tpbmdJRCA9IHBhcmFtcy5nZXQoJ3JfY2lkJyk7XG5cbiAgICBpZiAodHJhY2tpbmdJRCAmJiBwYXlvdXQgJiYgaXNWYWxpZFRva2VuKHRyYWNraW5nSUQpKSB7XG4gICAgICBmZXRjaChgJHtSRUFJTV9FVkVOVFNfQVBJfS9jb252P3Q9JHt0cmFja2luZ0lEfSZwYXlvdXQ9JHtwYXlvdXR9YCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFRhZ3ModGFncykge1xuICAgIGNvbnN0IGlzU3Vic2NyaWJlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQpKTtcbiAgICBjb25zdCBzaWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFJFQUlNX1VJRCkpO1xuXG4gICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgIXNpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSgndGFncycpICYmIHR5cGVvZiB0YWdzID09PSAnc3RyaW5nJykge1xuICAgICAgdGFncyA9IFt0YWdzXTtcbiAgICB9XG5cbiAgICBmZXRjaChgJHtSRUFJTV9TVUJTX0FQSX0vdGFnc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzdWJzY3JpYmVyOiBzaWQsXG4gICAgICAgIHRhZ3NcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBpbml0KHNpdGVzVUlEKSB7XG4gICAgdGhpcy5sb2dWaXNpdCgpO1xuICAgIHRoaXMuc2l0ZXNVSUQgPSBzaXRlc1VJRDtcblxuICAgIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSByZXR1cm47XG4gICAgaWYgKCEoJ1B1c2hNYW5hZ2VyJyBpbiB3aW5kb3cpKSByZXR1cm47XG5cbiAgICB0aGlzLnJlZ2lzdHJhdGlvbiA9IGF3YWl0IHRoaXMucmVnaXN0ZXJTVygpO1xuXG4gICAgaWYgKHRoaXMuY2FuU3Vic2NyaWJlKCkpIHtcbiAgICAgIHRoaXMubG9nKCd0cnlfdG9fc3Vic2NyaWJlJyk7XG4gICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHRoaXMuZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgdGhpcy5zaG93TW9kYWwobWV0YWRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoZWNrSWZTdGlsbFN1YnNjcmliZWQoKTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LlJlQWltU0RLID0gUmVBaW1TREs7XG5leHBvcnQgZGVmYXVsdCBSZUFpbVNESztcbiJdLCJzb3VyY2VSb290IjoiIn0=