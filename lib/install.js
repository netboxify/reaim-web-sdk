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
exports.REAIM_CLICK = exports.REAIM_IMPRESSION = exports.REAIM_STORAGE_NAME = exports.REAIM_SUBS_API = exports.REAIM_EVENTS_API = exports.REAIM_SAVE_SUBSCRIPTION = exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = void 0;
var PRODUCTION = !!("development" === 'production');
var LOCAL_EVENTS_API = 'http://localhost:5555';
var LOCAL_SUBS_API = 'http://localhost:4343';
var PROD_EVENTS_API = 'https://events.reaim.me';
var PROD_SUBS_API = 'https://subs.reaim.me';
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
  return "\n    .reaim-web-modal {\n      box-sizing: border-box;\n      display: flex;\n      position: absolute;\n      max-width: 547px;\n      padding: 45px;\n      font-size: 14px;\n      font-weight: 100;\n      width: 100%;\n      height: 200px;\n      background: ".concat(promptMeta.backgroundColor, ";\n      color: ").concat(promptMeta.fontColor, ";\n      margin: 0 auto;\n      left: 0;\n      right: 0;\n      box-shadow: 0 20px 70px 0 #E5E8EC;\n      border-radius: 8px;\n      top: 0;\n    }\n\n    .reaim-prompt-logo-branding small a {\n      position: relative;\n      top: 15px;\n      text-decoration: none;\n      opacity: 0.5;\n      color: #020E17;\n      font-size: 10px;\n      text-decoration: none;\n    }\n\n    .reaim-prompt-logo {\n      width: 80px;\n      height: 80px;\n      margin-right: 30px;\n    }\n\n    .reaim-prompt-logo img {\n      max-width: 80px;\n      width: 100%;\n    }\n\n    .reaim-modal-content {\n      width: 350px;\n      position: relative;\n    }\n\n    .reaim-modal-content p {\n      height: 65px;\n      font-size: 16px;\n      margin-top: 0;\n    }\n\n    .reaim-prompt-buttons {\n      position: absolute;\n      right: 20px;\n    }\n\n    .reaim-prompt-buttons button {\n      height: 52px;\n      border-radius: 8px;\n      cursor: pointer;\n      margin-left: 10px;\n      padding: 10px 20px;\n      border: none;\n      outline: none;\n    }\n\n    .reaim-button-deny {\n      backgorund: ").concat(promptMeta.blockButtonColor, ";\n      color: ").concat(promptMeta.blockFontColor, ";\n    }\n\n    .reaim-button-accept {\n      background: ").concat(promptMeta.allowButtonColor, ";\n      color: ").concat(promptMeta.allowFontColor, ";\n    }\n  ");
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
  return "\n    <div class=\"reaim-prompt-logo-branding\">\n      <div class=\"reaim-prompt-logo\">\n        <img src=\"".concat(promptMeta.logo, "\" alt=\"logo\">\n      </div>\n\n      ").concat(promptMeta.removeBranding ? '' : "<small>\n        <a href=\"https://reaim.me\" target=\"_blank\" rel=\"noopener\">Powered by ReAim</a>\n      </small>", "\n    </div>\n\n    <div class=\"reaim-modal-content\">\n      <p>").concat(promptMeta.actionText, "</p>\n      <div class=\"reaim-prompt-buttons\">\n        <button class=\"reaim-button-deny\">").concat(promptMeta.blockButton, "</button>\n        <button class=\"reaim-button-accept\">").concat(promptMeta.allowButton, "</button>\n      </div>\n    </div>\n  ");
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
      return navigator.serviceWorker.register('/reaim-sw.js');
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
                console.log(_context3.t0);
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
        console.log(err);
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
      _regeneratorRuntime.default.mark(function _callee5(sitesUID) {
        var _this3 = this;

        return _regeneratorRuntime.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.logVisit();
                this.sitesUID = sitesUID;

                if ('serviceWorker' in navigator) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                if ('PushManager' in window) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                _context5.next = 8;
                return this.registerSW();

              case 8:
                this.registration = _context5.sent;
                navigator.serviceWorker.ready.then(_asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime.default.mark(function _callee4() {
                  var metadata;
                  return _regeneratorRuntime.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!_this3.canSubscribe()) {
                            _context4.next = 8;
                            break;
                          }

                          _this3.log('try_to_subscribe');

                          _context4.next = 4;
                          return _this3.getMetadata();

                        case 4:
                          metadata = _context4.sent;

                          _this3.showModal(metadata);

                          _context4.next = 9;
                          break;

                        case 8:
                          _this3.checkIfStillSubscribed();

                        case 9:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, this);
                })));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function init(_x3) {
        return _ref4.apply(this, arguments);
      }

      return init;
    }()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vc3JjL2h0bWwuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04iLCJSRUFJTV9FVkVOVFNfQVBJIiwiUkVBSU1fU1VCU19BUEkiLCJSRUFJTV9TVE9SQUdFX05BTUUiLCJSRUFJTV9JTVBSRVNTSU9OIiwiUkVBSU1fQ0xJQ0siLCJwcm9tcHRNZXRhIiwiYmFja2dyb3VuZENvbG9yIiwiZm9udENvbG9yIiwiYmxvY2tCdXR0b25Db2xvciIsImJsb2NrRm9udENvbG9yIiwiYWxsb3dCdXR0b25Db2xvciIsImFsbG93Rm9udENvbG9yIiwibm9vcCIsInVybEJhc2U2NFRvVWludDhBcnJheSIsImJhc2U2NFN0cmluZyIsInBhZGRpbmciLCJyZXBlYXQiLCJsZW5ndGgiLCJiYXNlNjQiLCJyZXBsYWNlIiwicmF3RGF0YSIsIndpbmRvdyIsImF0b2IiLCJvdXRwdXRBcnJheSIsIlVpbnQ4QXJyYXkiLCJpIiwiY2hhckNvZGVBdCIsImxvZ28iLCJyZW1vdmVCcmFuZGluZyIsImFjdGlvblRleHQiLCJibG9ja0J1dHRvbiIsImFsbG93QnV0dG9uIiwiUmVBaW1TREsiLCJvbkFsbG93Iiwib25CbG9jayIsIkVycm9yIiwibWV0YUVuZHBvaW50IiwibXNnIiwiY29uc29sZSIsImxvZyIsInRpbWV6b25lIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwidGltZVpvbmUiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsIm1ldGFkYXRhIiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsInNldFZhbHVlIiwia2V5IiwidmFsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJzdWJzY3JpcHRpb24iLCJzaXRlX2lkIiwiY291bnRyeV9pZCIsInBsYXRmb3JtX2lkIiwib3NfaWQiLCJ0aW1lem9uZV9pZCIsInR6IiwiRGF0ZSIsImdldFRpbWV6b25lT2Zmc2V0IiwiYnJvd3Nlcl9pZCIsInVzZXJfaWQiLCJlbmRwb2ludCIsImF1dGgiLCJrZXlzIiwicDI1NmRoIiwicGFnZV91cmwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2l0ZXNfdWlkIiwic2l0ZXNVSUQiLCJ1c2VyIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJ0ZXh0IiwiaWQiLCJzZXRBc1N1YnNjcmliZWQiLCJodG1sRE9NIiwiaGlkZU1vZGFsIiwic2V0QXNVbnN1YnNjcmliZWQiLCJzdWJzY3JpcHRpb25PcHRpb25zIiwidXNlclZpc2libGVPbmx5IiwiYXBwbGljYXRpb25TZXJ2ZXJLZXkiLCJ2YXBpZF9wdWJfa2V5IiwicmVnaXN0cmF0aW9uIiwicHVzaE1hbmFnZXIiLCJzdWJzY3JpYmUiLCJjb250cm9sbGVyIiwicG9zdE1lc3NhZ2UiLCJhY3Rpb24iLCJwYXJzZSIsInN0cmluZ2lmaWVkIiwicGFyc2VkIiwidXNlck9iamVjdCIsInByZXBhcmVSZXF1ZXN0Iiwic2F2ZVVzZXIiLCJ3biIsInNob3dXZWxjb21lTm90aWZpY2F0aW9uIiwid25Db250ZW50Iiwid25fY29udGVudCIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0YSIsInVybCIsImVyciIsImNzcyIsImh0bWwiLCJSZUFpbUNTUyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIlJlQWltRE9NIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIiRkZW55IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibG9nVmlzaXRzTnVtYmVyV2hlbkRlbmllZCIsIiRhY2NlcHQiLCJ0cnlUb1N1YnNjcmliZSIsImFwcGVuZENoaWxkIiwiaGVhZCIsInN0eWxlIiwiZGlzcGxheSIsInZpc2l0TnVtYmVyIiwidmlzaXRzV2hlbkRlbmllZCIsImdldE51bWJlck9mVmlzaXRzV2hlbkRlbmllZCIsInBhZ2V2aWV3cyIsImdldFZpc2l0cyIsInByb21wdF90eXBlIiwicHJvbXB0Iiwic2hvd0ltbWVkaWF0ZWx5Iiwic2hvd0N1c3RvbU1vZGFsIiwidmlzaXRzIiwic2Vzc2lvbk51bWJlciIsImVub3VnaFZpc2l0c0FmdGVyQmxvY2siLCJhc2tBZ2FpbkFmdGVyIiwic2V0VGltZW91dCIsInNob3dBZnRlciIsImdldFZhbHVlIiwibG9nVmlzaXQiLCJyZWdpc3RlclNXIiwicmVhZHkiLCJ0aGVuIiwiY2FuU3Vic2NyaWJlIiwiZ2V0TWV0YWRhdGEiLCJzaG93TW9kYWwiLCJjaGVja0lmU3RpbGxTdWJzY3JpYmVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixTQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3h0QkEsSUFBTUEsVUFBVSxHQUFHLENBQUMsRUFBRUMsYUFBQSxLQUF5QixZQUEzQixDQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLHVCQUF6QjtBQUNBLElBQU1DLGNBQWMsR0FBRyx1QkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcseUJBQXhCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLHVCQUF0QjtBQUVPLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6Qjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyw0QkFBL0I7O0FBQ0EsSUFBTUMsMEJBQTBCLEdBQUcsZ0NBQW5DOztBQUNBLElBQU1DLFNBQVMsR0FBRyxlQUFsQjs7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7O0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsQ0FBQ1gsVUFBRCxHQUFjRSxnQkFBZCxHQUFpQ0UsZUFBMUQ7O0FBQ0EsSUFBTVEsY0FBYyxHQUFHLENBQUNaLFVBQUQsR0FBY0csY0FBZCxHQUErQkUsYUFBdEQ7O0FBQ0EsSUFBTVEsa0JBQWtCLEdBQUcsbUJBQTNCOztBQUNBLElBQU1DLGdCQUFnQixHQUFHLEdBQXpCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxHQUFwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNmUSxrQkFBQ0MsVUFBRCxFQUFnQjtBQUM3Qix5UkFXa0JBLFVBQVUsQ0FBQ0MsZUFYN0IsNkJBWWFELFVBQVUsQ0FBQ0UsU0FaeEIscWxDQXFFa0JGLFVBQVUsQ0FBQ0csZ0JBckU3Qiw2QkFzRWFILFVBQVUsQ0FBQ0ksY0F0RXhCLHVFQTBFa0JKLFVBQVUsQ0FBQ0ssZ0JBMUU3Qiw2QkEyRWFMLFVBQVUsQ0FBQ00sY0EzRXhCO0FBOEVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VNLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsU0FBU0MscUJBQVQsQ0FBK0JDLFlBQS9CLEVBQTZDO0FBQ2xELE1BQUlDLE9BQU8sR0FBRyxJQUFJQyxNQUFKLENBQVcsQ0FBQyxJQUFJRixZQUFZLENBQUNHLE1BQWIsR0FBc0IsQ0FBM0IsSUFBZ0MsQ0FBM0MsQ0FBZDtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFDSixZQUFZLEdBQUdDLE9BQWhCLEVBQ1ZJLE9BRFUsQ0FDRixLQURFLEVBQ0ssR0FETCxFQUVWQSxPQUZVLENBRUYsSUFGRSxFQUVJLEdBRkosQ0FBYjtBQUlBLE1BQUlDLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQVosQ0FBZDtBQUNBLE1BQUlLLFdBQVcsR0FBRyxJQUFJQyxVQUFKLENBQWVKLE9BQU8sQ0FBQ0gsTUFBdkIsQ0FBbEI7O0FBRUEsT0FBSyxJQUFJUSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxPQUFPLENBQUNILE1BQTVCLEVBQW9DLEVBQUVRLENBQXRDLEVBQXlDO0FBQ3ZDRixlQUFXLENBQUNFLENBQUQsQ0FBWCxHQUFpQkwsT0FBTyxDQUFDTSxVQUFSLENBQW1CRCxDQUFuQixDQUFqQjtBQUNEOztBQUNELFNBQU9GLFdBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDZmMsa0JBQUNsQixVQUFELEVBQWdCO0FBQzdCLGlJQUdrQkEsVUFBVSxDQUFDc0IsSUFIN0IscURBTU10QixVQUFVLENBQUN1QixjQUFYLEdBQTRCLEVBQTVCLDBIQU5OLCtFQVlTdkIsVUFBVSxDQUFDd0IsVUFacEIsMkdBYzBDeEIsVUFBVSxDQUFDeUIsV0FkckQsc0VBZTRDekIsVUFBVSxDQUFDMEIsV0FmdkQ7QUFtQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRDs7QUFLQTs7QUFTQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtJQUVNQyxROzs7QUFDSixvQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEI7QUFBQTs7QUFDNUIsUUFBSUQsT0FBTyxJQUFJLE9BQU9BLE9BQVAsS0FBbUIsVUFBbEMsRUFBOEM7QUFDNUMsWUFBTSxJQUFJRSxLQUFKLENBQVUsK0NBQVYsQ0FBTjtBQUNEOztBQUVELFFBQUlELE9BQU8sSUFBSSxPQUFPQSxPQUFQLEtBQW1CLFVBQWxDLEVBQThDO0FBQzVDLFlBQU0sSUFBSUMsS0FBSixDQUFVLCtDQUFWLENBQU47QUFDRDs7QUFFRCxTQUFLQyxZQUFMO0FBQ0EsU0FBS0gsT0FBTCxHQUFlQSxPQUFPLGlCQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBTyxpQkFBdEI7QUFDRDs7Ozt3QkFFR0csRyxFQUFLO0FBQ1BDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLEdBQTNCO0FBQ0Q7Ozs7Ozs7Ozs7OztBQUdPRyx3QixHQUFXQyxJQUFJLENBQUNDLGNBQUwsR0FBc0JDLGVBQXRCLEdBQXdDQyxROzt1QkFDbENDLEtBQUssQ0FBQyxLQUFLVCxZQUFMLEdBQW9CLFdBQXBCLEdBQWtDSSxRQUFuQyxDOzs7QUFBdEJNLHdCOzt1QkFDaUJBLFFBQVEsQ0FBQ0MsSUFBVCxFOzs7QUFBakJDLHdCO2lEQUVDQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR007QUFDYixhQUFPQyxZQUFZLENBQUNDLFVBQWIsS0FBNEIsU0FBbkM7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLQyxRQUFMLHdDQUEwQyxJQUExQztBQUNEOzs7d0NBRW1CO0FBQ2xCLFdBQUtBLFFBQUwsd0NBQTBDLEtBQTFDO0FBQ0Q7Ozs2QkFFUUMsRyxFQUFLQyxHLEVBQUs7QUFDakJDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQjtBQUNEOzs7NkJBRVFELEcsRUFBSztBQUNaLGFBQU9FLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPSyxTQUFTLENBQUNDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLGNBQWpDLENBQVA7QUFDRDs7O21DQUVjQyxZLEVBQWNaLFEsRUFBVTtBQUNyQyxhQUFPO0FBQ0xhLGVBQU8sRUFBRWIsUUFBUSxDQUFDYSxPQURiO0FBRUxDLGtCQUFVLEVBQUVkLFFBQVEsQ0FBQ2MsVUFGaEI7QUFHTEMsbUJBQVcsRUFBRWYsUUFBUSxDQUFDZSxXQUhqQjtBQUlMQyxhQUFLLEVBQUVoQixRQUFRLENBQUNnQixLQUpYO0FBS0xDLG1CQUFXLEVBQUVqQixRQUFRLENBQUNpQixXQUxqQjtBQU1MQyxVQUFFLEVBQUUsSUFBSUMsSUFBSixHQUFXQyxpQkFBWCxLQUFpQyxFQU5oQztBQU9MQyxrQkFBVSxFQUFFckIsUUFBUSxDQUFDcUIsVUFQaEI7QUFRTEMsZUFBTyxFQUFFdEIsUUFBUSxDQUFDc0IsT0FSYjtBQVNMQyxnQkFBUSxFQUFFWCxZQUFZLENBQUNXLFFBVGxCO0FBVUxDLFlBQUksRUFBRVosWUFBWSxDQUFDYSxJQUFiLENBQWtCRCxJQVZuQjtBQVdMRSxjQUFNLEVBQUVkLFlBQVksQ0FBQ2EsSUFBYixDQUFrQkMsTUFYckI7QUFZTEMsZ0JBQVEsRUFBRXRELE1BQU0sQ0FBQ3VELFFBQVAsQ0FBZ0JDLFFBWnJCO0FBYUxDLGlCQUFTLEVBQUUsS0FBS0M7QUFiWCxPQUFQO0FBZUQ7Ozs7Ozt5REFFY0MsSTs7Ozs7Ozs7dUJBRU9uQyxLQUFLLENBQUMsS0FBS1QsWUFBTCxHQUFvQixPQUFyQixFQUE4QjtBQUNuRDZDLHdCQUFNLEVBQUUsTUFEMkM7QUFFbkRDLHNCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmO0FBRjZDLGlCQUE5QixDOzs7QUFBakJLLG1COzt1QkFLV0EsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFYQyxrQjtBQUVOLHFCQUFLcEMsUUFBTCx1QkFBeUJvQyxFQUF6QjtBQUNBLHFCQUFLQyxlQUFMOztBQUVBLG9CQUFJLEtBQUtDLE9BQVQsRUFBa0I7QUFDaEIsdUJBQUtDLFNBQUw7QUFDRDs7QUFFRCxxQkFBS25ELEdBQUwsQ0FBUyxpQkFBVDs7Ozs7OztBQUVBRCx1QkFBTyxDQUFDQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBSXFCO0FBQ3ZCLFVBQUlVLFlBQVksQ0FBQ0MsVUFBYixLQUE0QixTQUFoQyxFQUEyQztBQUMzQyxXQUFLeUMsaUJBQUw7QUFDRDs7Ozs7O3lEQUVvQjNDLFE7Ozs7Ozs7QUFFWDRDLG1DLEdBQXNCO0FBQzFCQyxpQ0FBZSxFQUFFLElBRFM7QUFFMUJDLHNDQUFvQixFQUFFLG9DQUFzQjlDLFFBQVEsQ0FBQytDLGFBQS9CO0FBRkksaUI7O3VCQUtELEtBQUtDLFlBQUwsQ0FBa0JDLFdBQWxCLENBQThCQyxTQUE5QixDQUF3Q04sbUJBQXhDLEM7OztBQUFyQmhDLDRCOztBQUVOLG9CQUFJSCxTQUFTLENBQUNDLGFBQVYsQ0FBd0J5QyxVQUE1QixFQUF3QztBQUN0QzFDLDJCQUFTLENBQUNDLGFBQVYsQ0FBd0J5QyxVQUF4QixDQUFtQ0MsV0FBbkMsQ0FBK0M7QUFDN0NDLDBCQUFNLG9DQUR1QztBQUU3Q3pDLGdDQUFZLEVBQUV1QixJQUFJLENBQUNtQixLQUFMLENBQVduQixJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLFlBQWYsQ0FBWDtBQUYrQixtQkFBL0M7QUFJRDs7QUFFRCxxQkFBSzNCLE9BQUw7QUFFTXNFLDJCLEdBQWNwQixJQUFJLENBQUNDLFNBQUwsQ0FBZXhCLFlBQWYsQztBQUNkNEMsc0IsR0FBU3JCLElBQUksQ0FBQ21CLEtBQUwsQ0FBV0MsV0FBWCxDO0FBQ1RFLDBCLEdBQWEsS0FBS0MsY0FBTCxDQUFvQkYsTUFBcEIsRUFBNEJ4RCxRQUE1QixDO0FBRW5CLHFCQUFLMkQsUUFBTCxDQUFjRixVQUFkOztBQUVBLG9CQUFJekQsUUFBUSxDQUFDNEQsRUFBYixFQUFpQjtBQUNmLHVCQUFLQyx1QkFBTCxDQUE2QjdELFFBQTdCO0FBQ0Q7Ozs7Ozs7O0FBRURWLHVCQUFPLENBQUNDLEdBQVI7QUFDQSxxQkFBS0EsR0FBTCxDQUFTLGVBQVQ7QUFDQSxxQkFBS0wsT0FBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQUlvQmMsUSxFQUFVO0FBQ2hDLFVBQUk7QUFDRixZQUFNOEQsU0FBUyxHQUFHM0IsSUFBSSxDQUFDbUIsS0FBTCxDQUFXaEYsSUFBSSxDQUFDMEIsUUFBUSxDQUFDK0QsVUFBVixDQUFmLENBQWxCO0FBRUEsYUFBS2YsWUFBTCxDQUFrQmdCLGdCQUFsQixDQUFtQ0YsU0FBUyxDQUFDRyxLQUE3QyxFQUFvRDtBQUNsRC9CLGNBQUksRUFBRTRCLFNBQVMsQ0FBQ0ksV0FEa0M7QUFFbERDLGNBQUksRUFBRTtBQUFFQyxlQUFHLEVBQUVOLFNBQVMsQ0FBQ007QUFBakI7QUFGNEMsU0FBcEQ7QUFJRCxPQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1ovRSxlQUFPLENBQUNDLEdBQVIsQ0FBWThFLEdBQVo7QUFDRDtBQUNGOzs7b0NBRWVyRSxRLEVBQVUzQyxVLEVBQVk7QUFBQTs7QUFDcEMsVUFBTWlILEdBQUcsR0FBRyxrQkFBYWpILFVBQWIsQ0FBWjtBQUNBLFVBQU1rSCxJQUFJLEdBQUcsbUJBQVNsSCxVQUFULENBQWI7QUFDQSxVQUFNbUgsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFFQUYsY0FBUSxDQUFDRyxTQUFULEdBQXFCTCxHQUFyQjtBQUVBLFVBQU1NLFFBQVEsR0FBR0gsUUFBUSxDQUFDSSxzQkFBVCxFQUFqQjtBQUNBLFVBQU1wQyxPQUFPLEdBQUdnQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFFQWpDLGFBQU8sQ0FBQ3FDLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGlCQUF0QjtBQUNBdEMsYUFBTyxDQUFDa0MsU0FBUixHQUFvQkosSUFBcEI7QUFFQSxXQUFLOUIsT0FBTCxHQUFlQSxPQUFmO0FBRUEsVUFBTXVDLEtBQUssR0FBR3ZDLE9BQU8sQ0FBQ3dDLGFBQVIsQ0FBc0Isb0JBQXRCLENBQWQ7QUFFQUQsV0FBSyxDQUFDRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFDQyxDQUFELEVBQU87QUFDckMsYUFBSSxDQUFDekMsU0FBTDs7QUFDQSxhQUFJLENBQUMwQyx5QkFBTDtBQUNELE9BSEQ7QUFLQSxVQUFNQyxPQUFPLEdBQUc1QyxPQUFPLENBQUN3QyxhQUFSLENBQXNCLHNCQUF0QixDQUFoQjtBQUVBSSxhQUFPLENBQUNILGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN2QyxhQUFJLENBQUN6QyxTQUFMOztBQUNBLGFBQUksQ0FBQzRDLGNBQUwsQ0FBb0J0RixRQUFwQjtBQUNELE9BSEQ7QUFLQTRFLGNBQVEsQ0FBQ1csV0FBVCxDQUFxQjlDLE9BQXJCO0FBQ0FnQyxjQUFRLENBQUNlLElBQVQsQ0FBY0QsV0FBZCxDQUEwQmYsUUFBMUI7QUFDQUMsY0FBUSxDQUFDdkMsSUFBVCxDQUFjcUQsV0FBZCxDQUEwQlgsUUFBMUI7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS25DLE9BQUwsQ0FBYWdELEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0Q7OzsyQ0FFc0JDLFcsRUFBYTtBQUNsQyxVQUFNQyxnQkFBZ0IsR0FBRyxLQUFLQywyQkFBTCxFQUF6QjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLQyxTQUFMLEVBQWxCOztBQUVBLFVBQUlILGdCQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzFCLFlBQUlFLFNBQVMsSUFBS0YsZ0JBQWdCLEdBQUdELFdBQXJDLEVBQW1EO0FBQ2pELGlCQUFPLElBQVA7QUFDRDs7QUFDRCxlQUFPLEtBQVA7QUFFRDs7QUFDRCxhQUFPLElBQVA7QUFFRDs7OzhCQUVTM0YsUSxFQUFVO0FBQUE7O0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ2dHLFdBQVQsS0FBeUIsUUFBN0IsRUFBdUM7QUFDckMsWUFBTTNJLFVBQVUsR0FBRzhFLElBQUksQ0FBQ21CLEtBQUwsQ0FBV2hGLElBQUksQ0FBQzBCLFFBQVEsQ0FBQ2lHLE1BQVYsQ0FBZixDQUFuQjs7QUFFQSxZQUFJNUksVUFBVSxDQUFDNkksZUFBZixFQUFnQztBQUM5QixlQUFLM0csR0FBTCxDQUFTLGdDQUFUO0FBQ0EsZUFBSzRHLGVBQUwsQ0FBcUJuRyxRQUFyQixFQUErQjNDLFVBQS9CO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBTStJLE1BQU0sR0FBRyxLQUFLTCxTQUFMLEVBQWY7O0FBRUEsY0FBSUssTUFBTSxJQUFJL0ksVUFBVSxDQUFDZ0osYUFBckIsSUFBc0MsS0FBS0Msc0JBQUwsQ0FBNEJqSixVQUFVLENBQUNrSixhQUF2QyxDQUExQyxFQUFpRztBQUMvRixpQkFBS2hILEdBQUwsQ0FBUywwQkFBVDtBQUNBaUgsc0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksQ0FBQ0wsZUFBTCxDQUFxQm5HLFFBQXJCLEVBQStCM0MsVUFBL0I7QUFDRCxhQUZTLEVBRVBBLFVBQVUsQ0FBQ29KLFNBQVgsR0FBdUIsSUFGaEIsQ0FBVjtBQUdEO0FBQ0Y7QUFDRixPQWhCRCxNQWdCTztBQUNMLGFBQUtsSCxHQUFMLENBQVMsb0JBQVQ7QUFDQSxhQUFLK0YsY0FBTCxDQUFvQnRGLFFBQXBCO0FBQ0Q7QUFDRjs7OytCQUVVO0FBQ1QsVUFBTW9HLE1BQU0sR0FBRyxLQUFLTSxRQUFMLGlDQUFtQyxDQUFsRDtBQUVBLFdBQUt2RyxRQUFMLDhCQUFnQyxDQUFDaUcsTUFBRCxHQUFVLENBQTFDO0FBQ0Q7OztnREFFMkI7QUFDMUIsVUFBTUEsTUFBTSxHQUFHLEtBQUtNLFFBQUwsNkJBQWY7QUFFQSxXQUFLdkcsUUFBTCxvQ0FBc0NpRyxNQUF0QztBQUNEOzs7a0RBRTZCO0FBQzVCLFVBQU1BLE1BQU0sR0FBR2pFLElBQUksQ0FBQ21CLEtBQUwsQ0FBVyxLQUFLb0QsUUFBTCxtQ0FBWCxDQUFmOztBQUVBLFVBQUlOLE1BQUosRUFBWTtBQUNWLGVBQU9BLE1BQVA7QUFDRDs7QUFFRCxhQUFPLENBQVA7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBT2pFLElBQUksQ0FBQ21CLEtBQUwsQ0FBVyxLQUFLb0QsUUFBTCw2QkFBWCxLQUErQyxDQUF0RDtBQUNEOzs7Ozs7eURBRVUzRSxROzs7Ozs7O0FBQ1QscUJBQUs0RSxRQUFMO0FBQ0EscUJBQUs1RSxRQUFMLEdBQWdCQSxRQUFoQjs7b0JBRU0sbUJBQW1CdEIsUzs7Ozs7Ozs7b0JBQ25CLGlCQUFpQnBDLE07Ozs7Ozs7Ozt1QkFFRyxLQUFLdUksVUFBTCxFOzs7QUFBMUIscUJBQUs1RCxZO0FBRUx2Qyx5QkFBUyxDQUFDQyxhQUFWLENBQXdCbUcsS0FBeEIsQ0FBOEJDLElBQTlCO0FBQUE7QUFBQSxpREFBbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQzdCLE1BQUksQ0FBQ0MsWUFBTCxFQUQ2QjtBQUFBO0FBQUE7QUFBQTs7QUFFL0IsZ0NBQUksQ0FBQ3hILEdBQUwsQ0FBUyxrQkFBVDs7QUFGK0I7QUFBQSxpQ0FHUixNQUFJLENBQUN5SCxXQUFMLEVBSFE7O0FBQUE7QUFHekJoSCxrQ0FIeUI7O0FBSy9CLGdDQUFJLENBQUNpSCxTQUFMLENBQWVqSCxRQUFmOztBQUwrQjtBQUFBOztBQUFBO0FBTy9CLGdDQUFJLENBQUNrSCxzQkFBTDs7QUFQK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhSjdJLE1BQU0sQ0FBQ1csUUFBUCxHQUFrQkEsUUFBbEI7ZUFDZUEsUSIsImZpbGUiOiJpbnN0YWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyZWFpbS13ZWItc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWltLXdlYi1zZGtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJjb25zdCBQUk9EVUNUSU9OID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyk7XG5jb25zdCBMT0NBTF9FVkVOVFNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NSc7XG5jb25zdCBMT0NBTF9TVUJTX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjQzNDMnO1xuY29uc3QgUFJPRF9FVkVOVFNfQVBJID0gJ2h0dHBzOi8vZXZlbnRzLnJlYWltLm1lJztcbmNvbnN0IFBST0RfU1VCU19BUEkgPSAnaHR0cHM6Ly9zdWJzLnJlYWltLm1lJztcblxuZXhwb3J0IGNvbnN0IFJFQUlNX1NES19WSVNJVFMgPSAncmVhaW1fc2RrX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fREVOSUVEX09OX1ZJU0lUUyA9ICdyZWFpbV9zZGtfZGVuaWVkX29uX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQgPSAncmVhaW1fc2RrX3B1c2hfdXNlcl9zdWJzY3JpYmVkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9VSUQgPSAncmVhaW1fc2RrX3VpZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04gPSAncmVhaW1fc2F2ZV9zdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0VWRU5UU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0VWRU5UU19BUEkgOiBQUk9EX0VWRU5UU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1VCU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX1NVQlNfQVBJIDogUFJPRF9TVUJTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVE9SQUdFX05BTUUgPSAncmVhaW1fc2RrX3N0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0lNUFJFU1NJT04gPSAnaSc7XG5leHBvcnQgY29uc3QgUkVBSU1fQ0xJQ0sgPSAnYyc7XG4iLCJleHBvcnQgZGVmYXVsdCAocHJvbXB0TWV0YSkgPT4ge1xuICByZXR1cm4gYFxuICAgIC5yZWFpbS13ZWItbW9kYWwge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBtYXgtd2lkdGg6IDU0N3B4O1xuICAgICAgcGFkZGluZzogNDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb21wdE1ldGEuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuZm9udENvbG9yfTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDcwcHggMCAjRTVFOEVDO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIC5yZWFpbS1wcm9tcHQtbG9nby1icmFuZGluZyBzbWFsbCBhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMTVweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGNvbG9yOiAjMDIwRTE3O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5yZWFpbS1wcm9tcHQtbG9nbyB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAucmVhaW0tcHJvbXB0LWxvZ28gaW1nIHtcbiAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5yZWFpbS1tb2RhbC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAucmVhaW0tbW9kYWwtY29udGVudCBwIHtcbiAgICAgIGhlaWdodDogNjVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgfVxuXG4gICAgLnJlYWltLXByb21wdC1idXR0b25zIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC5yZWFpbS1idXR0b24tZGVueSB7XG4gICAgICBiYWNrZ29ydW5kOiAke3Byb21wdE1ldGEuYmxvY2tCdXR0b25Db2xvcn07XG4gICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmJsb2NrRm9udENvbG9yfTtcbiAgICB9XG5cbiAgICAucmVhaW0tYnV0dG9uLWFjY2VwdCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb21wdE1ldGEuYWxsb3dCdXR0b25Db2xvcn07XG4gICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmFsbG93Rm9udENvbG9yfTtcbiAgICB9XG4gIGA7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsQmFzZTY0VG9VaW50OEFycmF5KGJhc2U2NFN0cmluZykge1xuICBsZXQgcGFkZGluZyA9ICc9Jy5yZXBlYXQoKDQgLSBiYXNlNjRTdHJpbmcubGVuZ3RoICUgNCkgJSA0KTtcbiAgbGV0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxuICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxuICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XG5cbiAgbGV0IHJhd0RhdGEgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICBsZXQgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdEYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgb3V0cHV0QXJyYXlbaV0gPSByYXdEYXRhLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dEFycmF5O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgKHByb21wdE1ldGEpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWxvZ28tYnJhbmRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtbG9nb1wiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7cHJvbXB0TWV0YS5sb2dvfVwiIGFsdD1cImxvZ29cIj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICAke3Byb21wdE1ldGEucmVtb3ZlQnJhbmRpbmcgPyAnJyA6IGA8c21hbGw+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JlYWltLm1lXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIj5Qb3dlcmVkIGJ5IFJlQWltPC9hPlxuICAgICAgPC9zbWFsbD5gfVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJlYWltLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIDxwPiR7cHJvbXB0TWV0YS5hY3Rpb25UZXh0fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtYnV0dG9uc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVhaW0tYnV0dG9uLWRlbnlcIj4ke3Byb21wdE1ldGEuYmxvY2tCdXR0b259PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWFpbS1idXR0b24tYWNjZXB0XCI+JHtwcm9tcHRNZXRhLmFsbG93QnV0dG9ufTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuIiwiaW1wb3J0IHtcbiAgbm9vcCxcbiAgdXJsQmFzZTY0VG9VaW50OEFycmF5XG59IGZyb20gJy4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIFJFQUlNX1NES19WSVNJVFMsXG4gIFJFQUlNX0RFTklFRF9PTl9WSVNJVFMsXG4gIFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELFxuICBSRUFJTV9VSUQsXG4gIFJFQUlNX1NVQlNfQVBJLFxuICBSRUFJTV9TQVZFX1NVQlNDUklQVElPTlxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmltcG9ydCByZW5kZXJVSSBmcm9tICcuL2h0bWwnO1xuaW1wb3J0IHJlbmRlclN0eWxlcyBmcm9tICcuL2Nzcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5jbGFzcyBSZUFpbVNESyB7XG4gIGNvbnN0cnVjdG9yKG9uQWxsb3csIG9uQmxvY2spIHtcbiAgICBpZiAob25BbGxvdyAmJiB0eXBlb2Ygb25BbGxvdyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUeXBlIG9mIG9uQWxsb3cgcGFyYW1ldGVyIHNob3VsZCBiZSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAob25CbG9jayAmJiB0eXBlb2Ygb25CbG9jayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUeXBlIG9mIG9uQmxvY2sgcGFyYW1ldGVyIHNob3VsZCBiZSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLm1ldGFFbmRwb2ludCA9IFJFQUlNX1NVQlNfQVBJO1xuICAgIHRoaXMub25BbGxvdyA9IG9uQWxsb3cgfHwgbm9vcDtcbiAgICB0aGlzLm9uQmxvY2sgPSBvbkJsb2NrIHx8IG5vb3A7XG4gIH1cblxuICBsb2cobXNnKSB7XG4gICAgY29uc29sZS5sb2coJ1JlQWltIFNESyAtJywgbXNnKTtcbiAgfVxuXG4gIGFzeW5jIGdldE1ldGFkYXRhKCkge1xuICAgIGNvbnN0IHRpbWV6b25lID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy5tZXRhRW5kcG9pbnQgKyAnL2luZm8/dHo9JyArIHRpbWV6b25lKTtcbiAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfVxuXG4gIGNhblN1YnNjcmliZSgpIHtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIHNldEFzU3Vic2NyaWJlZCgpIHtcbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELCB0cnVlKTtcbiAgfVxuXG4gIHNldEFzVW5zdWJzY3JpYmVkKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQsIGZhbHNlKTtcbiAgfVxuXG4gIHNldFZhbHVlKGtleSwgdmFsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWwpO1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuICByZWdpc3RlclNXKCkge1xuICAgIHJldHVybiBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3JlYWltLXN3LmpzJyk7XG4gIH1cblxuICBwcmVwYXJlUmVxdWVzdChzdWJzY3JpcHRpb24sIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpdGVfaWQ6IG1ldGFkYXRhLnNpdGVfaWQsXG4gICAgICBjb3VudHJ5X2lkOiBtZXRhZGF0YS5jb3VudHJ5X2lkLFxuICAgICAgcGxhdGZvcm1faWQ6IG1ldGFkYXRhLnBsYXRmb3JtX2lkLFxuICAgICAgb3NfaWQ6IG1ldGFkYXRhLm9zX2lkLFxuICAgICAgdGltZXpvbmVfaWQ6IG1ldGFkYXRhLnRpbWV6b25lX2lkLFxuICAgICAgdHo6IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwLFxuICAgICAgYnJvd3Nlcl9pZDogbWV0YWRhdGEuYnJvd3Nlcl9pZCxcbiAgICAgIHVzZXJfaWQ6IG1ldGFkYXRhLnVzZXJfaWQsXG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAgYXV0aDogc3Vic2NyaXB0aW9uLmtleXMuYXV0aCxcbiAgICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uLmtleXMucDI1NmRoLFxuICAgICAgcGFnZV91cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNpdGVzX3VpZDogdGhpcy5zaXRlc1VJRFxuICAgIH07XG4gIH1cblxuICBhc3luYyBzYXZlVXNlcih1c2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHRoaXMubWV0YUVuZHBvaW50ICsgJy9zYXZlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fVUlELCBpZCk7XG4gICAgICB0aGlzLnNldEFzU3Vic2NyaWJlZCgpO1xuXG4gICAgICBpZiAodGhpcy5odG1sRE9NKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nKCd1c2VyX3N1YnNjcmliZWQnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZlN0aWxsU3Vic2NyaWJlZCgpIHtcbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJykgcmV0dXJuO1xuICAgIHRoaXMuc2V0QXNVbnN1YnNjcmliZWQoKTtcbiAgfVxuXG4gIGFzeW5jIHRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbk9wdGlvbnMgPSB7XG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXk6IHVybEJhc2U2NFRvVWludDhBcnJheShtZXRhZGF0YS52YXBpZF9wdWJfa2V5KVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gYXdhaXQgdGhpcy5yZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHN1YnNjcmlwdGlvbk9wdGlvbnMpO1xuXG4gICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBhY3Rpb246IFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OLFxuICAgICAgICAgIHN1YnNjcmlwdGlvbjogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdWJzY3JpcHRpb24pKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vbkFsbG93KCk7XG5cbiAgICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWQpO1xuICAgICAgY29uc3QgdXNlck9iamVjdCA9IHRoaXMucHJlcGFyZVJlcXVlc3QocGFyc2VkLCBtZXRhZGF0YSk7XG5cbiAgICAgIHRoaXMuc2F2ZVVzZXIodXNlck9iamVjdCk7XG5cbiAgICAgIGlmIChtZXRhZGF0YS53bikge1xuICAgICAgICB0aGlzLnNob3dXZWxjb21lTm90aWZpY2F0aW9uKG1ldGFkYXRhKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB0aGlzLmxvZygndXNlcl9kZWNsaW5lZCcpO1xuICAgICAgdGhpcy5vbkJsb2NrKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd1dlbGNvbWVOb3RpZmljYXRpb24obWV0YWRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgd25Db250ZW50ID0gSlNPTi5wYXJzZShhdG9iKG1ldGFkYXRhLnduX2NvbnRlbnQpKTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih3bkNvbnRlbnQudGl0bGUsIHtcbiAgICAgICAgYm9keTogd25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRhOiB7IHVybDogd25Db250ZW50LnVybCB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgc2hvd0N1c3RvbU1vZGFsKG1ldGFkYXRhLCBwcm9tcHRNZXRhKSB7XG4gICAgY29uc3QgY3NzID0gcmVuZGVyU3R5bGVzKHByb21wdE1ldGEpO1xuICAgIGNvbnN0IGh0bWwgPSByZW5kZXJVSShwcm9tcHRNZXRhKTtcbiAgICBjb25zdCBSZUFpbUNTUyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICBSZUFpbUNTUy5pbm5lckhUTUwgPSBjc3M7XG5cbiAgICBjb25zdCBSZUFpbURPTSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBodG1sRE9NID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBodG1sRE9NLmNsYXNzTGlzdC5hZGQoJ3JlYWltLXdlYi1tb2RhbCcpO1xuICAgIGh0bWxET00uaW5uZXJIVE1MID0gaHRtbDtcblxuICAgIHRoaXMuaHRtbERPTSA9IGh0bWxET007XG5cbiAgICBjb25zdCAkZGVueSA9IGh0bWxET00ucXVlcnlTZWxlY3RvcignLnJlYWltLWJ1dHRvbi1kZW55Jyk7XG5cbiAgICAkZGVueS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy5sb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCAkYWNjZXB0ID0gaHRtbERPTS5xdWVyeVNlbGVjdG9yKCcucmVhaW0tYnV0dG9uLWFjY2VwdCcpO1xuXG4gICAgJGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpO1xuICAgICAgdGhpcy50cnlUb1N1YnNjcmliZShtZXRhZGF0YSk7XG4gICAgfSk7XG5cbiAgICBSZUFpbURPTS5hcHBlbmRDaGlsZChodG1sRE9NKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKFJlQWltQ1NTKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKFJlQWltRE9NKTtcbiAgfVxuXG4gIGhpZGVNb2RhbCgpIHtcbiAgICB0aGlzLmh0bWxET00uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGVub3VnaFZpc2l0c0FmdGVyQmxvY2sodmlzaXROdW1iZXIpIHtcbiAgICBjb25zdCB2aXNpdHNXaGVuRGVuaWVkID0gdGhpcy5nZXROdW1iZXJPZlZpc2l0c1doZW5EZW5pZWQoKTtcbiAgICBjb25zdCBwYWdldmlld3MgPSB0aGlzLmdldFZpc2l0cygpO1xuXG4gICAgaWYgKHZpc2l0c1doZW5EZW5pZWQgIT09IDApIHtcbiAgICAgIGlmIChwYWdldmlld3MgPj0gKHZpc2l0c1doZW5EZW5pZWQgKyB2aXNpdE51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIHNob3dNb2RhbChtZXRhZGF0YSkge1xuICAgIGlmIChtZXRhZGF0YS5wcm9tcHRfdHlwZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgIGNvbnN0IHByb21wdE1ldGEgPSBKU09OLnBhcnNlKGF0b2IobWV0YWRhdGEucHJvbXB0KSk7XG5cbiAgICAgIGlmIChwcm9tcHRNZXRhLnNob3dJbW1lZGlhdGVseSkge1xuICAgICAgICB0aGlzLmxvZygnc2hvd19pbW1lZGlhdGVseV9jdXN0b21fcHJvbXB0Jyk7XG4gICAgICAgIHRoaXMuc2hvd0N1c3RvbU1vZGFsKG1ldGFkYXRhLCBwcm9tcHRNZXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpc2l0cyA9IHRoaXMuZ2V0VmlzaXRzKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0cyA+PSBwcm9tcHRNZXRhLnNlc3Npb25OdW1iZXIgJiYgdGhpcy5lbm91Z2hWaXNpdHNBZnRlckJsb2NrKHByb21wdE1ldGEuYXNrQWdhaW5BZnRlcikpIHtcbiAgICAgICAgICB0aGlzLmxvZygnc2hvd190aW1lZF9jdXN0b21fcHJvbXB0Jyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSk7XG4gICAgICAgICAgfSwgcHJvbXB0TWV0YS5zaG93QWZ0ZXIgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZygnc2hvd19uYXRpdmVfcHJvbXB0Jyk7XG4gICAgICB0aGlzLnRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKTtcbiAgICB9XG4gIH1cblxuICBsb2dWaXNpdCgpIHtcbiAgICBjb25zdCB2aXNpdHMgPSB0aGlzLmdldFZhbHVlKFJFQUlNX1NES19WSVNJVFMpIHx8IDA7XG5cbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1NES19WSVNJVFMsICt2aXNpdHMgKyAxKTtcbiAgfVxuXG4gIGxvZ1Zpc2l0c051bWJlcldoZW5EZW5pZWQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gdGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKTtcblxuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fREVOSUVEX09OX1ZJU0lUUywgdmlzaXRzKTtcbiAgfVxuXG4gIGdldE51bWJlck9mVmlzaXRzV2hlbkRlbmllZCgpIHtcbiAgICBjb25zdCB2aXNpdHMgPSBKU09OLnBhcnNlKHRoaXMuZ2V0VmFsdWUoUkVBSU1fREVOSUVEX09OX1ZJU0lUUykpO1xuXG4gICAgaWYgKHZpc2l0cykge1xuICAgICAgcmV0dXJuIHZpc2l0cztcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldFZpc2l0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldFZhbHVlKFJFQUlNX1NES19WSVNJVFMpKSB8fCAwO1xuICB9XG5cbiAgYXN5bmMgaW5pdChzaXRlc1VJRCkge1xuICAgIHRoaXMubG9nVmlzaXQoKTtcbiAgICB0aGlzLnNpdGVzVUlEID0gc2l0ZXNVSUQ7XG5cbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkgcmV0dXJuO1xuICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBhd2FpdCB0aGlzLnJlZ2lzdGVyU1coKTtcblxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlYWR5LnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2FuU3Vic2NyaWJlKCkpIHtcbiAgICAgICAgdGhpcy5sb2coJ3RyeV90b19zdWJzY3JpYmUnKTtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCB0aGlzLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgICAgdGhpcy5zaG93TW9kYWwobWV0YWRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGVja0lmU3RpbGxTdWJzY3JpYmVkKCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG53aW5kb3cuUmVBaW1TREsgPSBSZUFpbVNESztcbmV4cG9ydCBkZWZhdWx0IFJlQWltU0RLO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==