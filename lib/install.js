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
exports.REAIM_CLICK = exports.REAIM_IMPRESSION = exports.REAIM_STORAGE_NAME = exports.REAIM_SUBS_API = exports.REAIM_EVENTS_API = exports.REAIM_SAVE_SUBSCRIPTION = exports.REAIM_RETRY_USER = exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = exports.PRODUCTION = void 0;
var PRODUCTION = !!("development" === 'production');
exports.PRODUCTION = PRODUCTION;
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
var REAIM_RETRY_USER = 'reaim_sdk_retry_user';
exports.REAIM_RETRY_USER = REAIM_RETRY_USER;
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
  return "\n    .reaim-web-modal {\n      all: initial;\n      box-sizing: border-box;\n      display: flex;\n      flex-direction: column;\n      position: fixed;\n      max-width: 547px;\n      max-height: 500px;\n      padding: 45px;\n      padding-bottom: 30px;\n      font-size: 14px;\n      font-weight: 100;\n      width: 100%;\n      background: ".concat(promptMeta.backgroundColor, ";\n      color: ").concat(promptMeta.fontColor, ";\n      margin: 0 auto;\n      left: 0;\n      right: 0;\n      box-shadow: 1px 2px 20px rgba(0,0,0,0.12), -2px -1px 20px 0px rgba(0,0,0,0.24);\n      border-radius: 0px 0px 8px 8px;\n      top: 0;\n      z-index: 999999;\n      font-family: \"Arial\", sans-serif;\n      transition-property: all;\n      transition-duration: .5s;\n      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n    }\n\n    .reaim-web-modal-closed {\n      max-height: 0;\n    }\n\n    .reaim-web-modal * {\n      all: unset;\n    }\n\n    .reaim-web-modal .reaim-prompt-content-wrapper {\n      display: flex;\n    }\n\n    .reaim-web-modal .reaim-prompt-buttons small a {\n      display: block;\n      color: ").concat(promptMeta.fontColor, ";\n      position: relative;\n      text-decoration: none;\n      opacity: 0.5;\n      color: #020E17;\n      font-size: 9px;\n      text-decoration: none;\n      cursor: button;\n    }\n\n    .reaim-web-modal .reaim-prompt-logo {\n      width: 80px;\n      height: 80px;\n      margin-right: 30px;\n    }\n\n    .reaim-web-modal .reaim-prompt-logo img {\n      max-width: 80px;\n      width: 100%;\n    }\n\n    .reaim-web-modal .reaim-modal-content {\n      width: 360px;\n      position: relative;\n      margin-left: 20px;\n    }\n\n    .reaim-web-modal .reaim-modal-content p {\n      height: 65px;\n      font-size: 16px;\n      margin-top: 0;\n    }\n\n    .reaim-web-modal .reaim-prompt-buttons {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-top: 25px;\n    }\n\n    .reaim-web-modal .reaim-prompt-buttons button {\n      box-sizing: border-box;\n      height: 52px;\n      border-radius: 8px;\n      cursor: pointer;\n      margin-left: 10px;\n      padding: 10px 20px;\n      border: none;\n      outline: none;\n      font-size: 14px;\n    }\n\n    .reaim-web-modal .reaim-button-deny {\n      background: ").concat(promptMeta.blockButtonColor, ";\n      color: ").concat(promptMeta.blockFontColor, ";\n    }\n\n    .reaim-web-modal .reaim-button-accept {\n      background: ").concat(promptMeta.allowButtonColor, ";\n      color: ").concat(promptMeta.allowFontColor, ";\n    }\n\n    @media(max-width: 768px) {\n      .reaim-web-modal {\n        max-width: 375px;\n        font-size: 12px;\n        position: fixed;\n        bottom: 0;\n        top: auto;\n        left: 0;\n        right: 0;\n        border-radius: 8px 8px 0px 0px;\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n\n      .reaim-web-modal .reaim-modal-content p {\n        font-size: 14px;\n      }\n\n      .reaim-web-modal .reaim-prompt-logo {\n        width: 68px;\n        height: 68px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons {\n        display: flex;\n        margin-top: 10px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons button {\n        height: 40px;\n        padding: 10px 15px;\n        font-size: 12px;\n      }\n    }\n\n\n    @media(max-width: 350px) {\n      .reaim-web-modal .reaim-modal-content p {\n        height: 90px;\n      }\n    }\n\n    @media(max-width: 324px) {\n      .reaim-web-modal {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n\n      .reaim-web-modal .reaim-modal-content p {\n        height: 110px;\n      }\n\n      .reaim-web-modal .reaim-prompt-buttons button {\n        paddding: 10px 10px;\n        font-size: 10px;\n      }\n    }\n  ");
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
  return "\n    <div class=\"reaim-prompt-content-wrapper\">\n      <div class=\"reaim-prompt-logo-branding\">\n        ".concat(promptMeta.logo ? "\n          <div class=\"reaim-prompt-logo\" style=\"".concat(promptMeta.logo ? 'visibility: visible' : 'visibility: hidden', "\">\n            <img src=\"").concat(promptMeta.logo, "\" alt=\"logo\">\n          </div>\n        ") : '', "\n      </div>\n\n      <div class=\"reaim-modal-content\">\n        <p>").concat(promptMeta.actionText, "</p>\n      </div>\n    </div>\n\n    <div class=\"reaim-prompt-buttons\">\n      <small>\n        <a href=\"https://reaim.me\" target=\"_blank\" rel=\"noopener\">\n          ").concat(promptMeta.removeBranding ? '' : 'Powered by ReAim', "\n        </a>\n      </small>\n\n      <div>\n        <button class=\"reaim-button-deny\">").concat(promptMeta.blockButton, "</button>\n        <button class=\"reaim-button-accept\">").concat(promptMeta.allowButton, "</button>\n      </div>\n    </div>\n  ");
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
    key: "removeValue",
    value: function removeValue(key) {
      localStorage.removeItem(key);
    }
  }, {
    key: "getValue",
    value: function getValue(key) {
      return localStorage.getItem(key);
    }
  }, {
    key: "getSWPath",
    value: function getSWPath() {
      var path = !_constants.PRODUCTION ? '/reaim-sw.js' : self.window && self.window.REAIM_SW_PATH_GLOBAL || '/sw.js';
      return path;
    }
  }, {
    key: "registerSW",
    value: function registerSW() {
      var path = this.getSWPath();
      return navigator.serviceWorker.register(path);
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
    key: "subscriptionExisted",
    value: function subscriptionExisted() {
      return !!this.getValue(_constants.REAIM_UID);
    }
  }, {
    key: "saveForRetry",
    value: function saveForRetry(user) {
      this.setValue(_constants.REAIM_RETRY_USER, JSON.stringify(user));
    }
  }, {
    key: "retrySave",
    value: function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee2() {
        var user, id;
        return _regeneratorRuntime.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = this.getValue(_constants.REAIM_RETRY_USER);
                id = this.getValue(_constants.REAIM_UID);

                if (!(user && !id)) {
                  _context2.next = 12;
                  break;
                }

                _context2.prev = 3;
                _context2.next = 6;
                return this.saveUser(JSON.parse(user));

              case 6:
                this.removeValue(_constants.REAIM_RETRY_USER);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                this.log('retry_save_failed');

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 9]]);
      }));

      function retrySave() {
        return _ref2.apply(this, arguments);
      }

      return retrySave;
    }()
  }, {
    key: "saveUser",
    value: function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee3(user) {
        var update, res, id;
        return _regeneratorRuntime.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (!this.subscriptionExisted()) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 4;
                return fetch("".concat(this.metaEndpoint, "/refresh"), {
                  method: 'POST',
                  body: JSON.stringify({
                    id: this.getValue(_constants.REAIM_UID),
                    endpoint: user.endpoint,
                    auth: user.auth,
                    p256dh: user.p256dh
                  })
                });

              case 4:
                update = _context3.sent;

                if (update) {
                  this.log('user_updated');
                }

                return _context3.abrupt("return");

              case 7:
                _context3.next = 9;
                return fetch("".concat(this.metaEndpoint, "/save"), {
                  method: 'POST',
                  body: JSON.stringify(user)
                });

              case 9:
                res = _context3.sent;
                _context3.next = 12;
                return res.text();

              case 12:
                id = _context3.sent;
                this.setValue(_constants.REAIM_UID, id);
                this.setAsSubscribed();

                if (this.htmlDOM) {
                  this.hideModal();
                }

                this.log('user_subscribed');
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                this.saveForRetry(user);
                this.log(_context3.t0);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      function saveUser(_x) {
        return _ref3.apply(this, arguments);
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
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee4(metadata) {
        var subscriptionOptions, subscription, stringified, parsed, userObject;
        return _regeneratorRuntime.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                subscriptionOptions = {
                  userVisibleOnly: true,
                  applicationServerKey: (0, _helpers.urlBase64ToUint8Array)(metadata.vapid_pub_key)
                };
                _context4.next = 4;
                return this.registration.pushManager.subscribe(subscriptionOptions);

              case 4:
                subscription = _context4.sent;

                if (navigator.serviceWorker.controller) {
                  navigator.serviceWorker.controller.postMessage({
                    action: _constants.REAIM_SAVE_SUBSCRIPTION,
                    subscription: JSON.parse(JSON.stringify(subscription))
                  });
                }

                stringified = JSON.stringify(subscription);
                parsed = JSON.parse(stringified);
                userObject = this.prepareRequest(parsed, metadata);
                _context4.next = 11;
                return this.saveUser(userObject);

              case 11:
                this.onAllow();

                if (metadata.wn) {
                  this.showWelcomeNotification(metadata);
                }

                _context4.next = 20;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](0);
                this.log(_context4.t0);
                this.log('user_declined');
                this.onBlock();

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 15]]);
      }));

      function tryToSubscribe(_x2) {
        return _ref4.apply(this, arguments);
      }

      return tryToSubscribe;
    }()
  }, {
    key: "showWelcomeNotification",
    value: function showWelcomeNotification(metadata) {
      try {
        var wnContent = JSON.parse(decodeURIComponent(atob(metadata.wn_content)));
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
    key: "preloadImage",
    value: function preloadImage(url) {
      var img = new Image();
      img.src = url;
    }
  }, {
    key: "showCustomModal",
    value: function showCustomModal(metadata, promptMeta) {
      var _this = this;

      var css = (0, _css.default)(promptMeta);
      var html = (0, _html.default)(promptMeta);

      if (promptMeta.logo) {
        this.preloadImage(promptMeta.logo);
      }

      var ReAimCSS = document.createElement('style');
      ReAimCSS.innerHTML = css;
      var ReAimDOM = document.createDocumentFragment();
      var htmlDOM = document.createElement('div');
      htmlDOM.classList.add('reaim-web-modal');
      htmlDOM.classList.add('reaim-web-modal-closed');
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
      htmlDOM.classList.remove('reaim-web-modal-closed');
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
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee5(sitesUID) {
        var metadata;
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

                if (!this.canSubscribe()) {
                  _context5.next = 17;
                  break;
                }

                this.log('try_to_subscribe');
                _context5.next = 13;
                return this.getMetadata();

              case 13:
                metadata = _context5.sent;
                this.showModal(metadata);
                _context5.next = 19;
                break;

              case 17:
                this.checkIfStillSubscribed();
                this.retrySave();

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function init(_x3) {
        return _ref5.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vc3JjL2h0bWwuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fUkVUUllfVVNFUiIsIlJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OIiwiUkVBSU1fRVZFTlRTX0FQSSIsIlJFQUlNX1NVQlNfQVBJIiwiUkVBSU1fU1RPUkFHRV9OQU1FIiwiUkVBSU1fSU1QUkVTU0lPTiIsIlJFQUlNX0NMSUNLIiwicHJvbXB0TWV0YSIsImJhY2tncm91bmRDb2xvciIsImZvbnRDb2xvciIsImJsb2NrQnV0dG9uQ29sb3IiLCJibG9ja0ZvbnRDb2xvciIsImFsbG93QnV0dG9uQ29sb3IiLCJhbGxvd0ZvbnRDb2xvciIsIm5vb3AiLCJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJ3aW5kb3ciLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJpc1ZhbGlkVG9rZW4iLCJzdHIiLCJidG9hIiwiZXJyIiwibG9nbyIsImFjdGlvblRleHQiLCJyZW1vdmVCcmFuZGluZyIsImJsb2NrQnV0dG9uIiwiYWxsb3dCdXR0b24iLCJSZUFpbVNESyIsIm9uQWxsb3ciLCJvbkJsb2NrIiwiRXJyb3IiLCJtZXRhRW5kcG9pbnQiLCJtc2ciLCJjb25zb2xlIiwibG9nIiwidGltZXpvbmUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJyZXNvbHZlZE9wdGlvbnMiLCJ0aW1lWm9uZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwibWV0YWRhdGEiLCJOb3RpZmljYXRpb24iLCJwZXJtaXNzaW9uIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWwiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJwYXRoIiwic2VsZiIsIlJFQUlNX1NXX1BBVEhfR0xPQkFMIiwiZ2V0U1dQYXRoIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwic3Vic2NyaXB0aW9uIiwic2l0ZV9pZCIsImNvdW50cnlfaWQiLCJwbGF0Zm9ybV9pZCIsIm9zX2lkIiwidGltZXpvbmVfaWQiLCJ0eiIsIkRhdGUiLCJnZXRUaW1lem9uZU9mZnNldCIsImJyb3dzZXJfaWQiLCJ1c2VyX2lkIiwiZW5kcG9pbnQiLCJhdXRoIiwia2V5cyIsInAyNTZkaCIsInBhZ2VfdXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNpdGVzX3VpZCIsInNpdGVzVUlEIiwiZ2V0VmFsdWUiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsImlkIiwic2F2ZVVzZXIiLCJwYXJzZSIsInJlbW92ZVZhbHVlIiwic3Vic2NyaXB0aW9uRXhpc3RlZCIsIm1ldGhvZCIsImJvZHkiLCJ1cGRhdGUiLCJyZXMiLCJ0ZXh0Iiwic2V0QXNTdWJzY3JpYmVkIiwiaHRtbERPTSIsImhpZGVNb2RhbCIsInNhdmVGb3JSZXRyeSIsInNldEFzVW5zdWJzY3JpYmVkIiwic3Vic2NyaXB0aW9uT3B0aW9ucyIsInVzZXJWaXNpYmxlT25seSIsImFwcGxpY2F0aW9uU2VydmVyS2V5IiwidmFwaWRfcHViX2tleSIsInJlZ2lzdHJhdGlvbiIsInB1c2hNYW5hZ2VyIiwic3Vic2NyaWJlIiwiY29udHJvbGxlciIsInBvc3RNZXNzYWdlIiwiYWN0aW9uIiwic3RyaW5naWZpZWQiLCJwYXJzZWQiLCJ1c2VyT2JqZWN0IiwicHJlcGFyZVJlcXVlc3QiLCJ3biIsInNob3dXZWxjb21lTm90aWZpY2F0aW9uIiwid25Db250ZW50IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid25fY29udGVudCIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0YSIsInVybCIsImltZyIsIkltYWdlIiwic3JjIiwiY3NzIiwiaHRtbCIsInByZWxvYWRJbWFnZSIsIlJlQWltQ1NTIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiUmVBaW1ET00iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiJGRlbnkiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJsb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkIiwiJGFjY2VwdCIsInRyeVRvU3Vic2NyaWJlIiwiYXBwZW5kQ2hpbGQiLCJoZWFkIiwicmVtb3ZlIiwic3R5bGUiLCJkaXNwbGF5IiwidmlzaXROdW1iZXIiLCJ2aXNpdHNXaGVuRGVuaWVkIiwiZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkIiwicGFnZXZpZXdzIiwiZ2V0VmlzaXRzIiwicHJvbXB0X3R5cGUiLCJwcm9tcHQiLCJzaG93SW1tZWRpYXRlbHkiLCJzaG93Q3VzdG9tTW9kYWwiLCJ2aXNpdHMiLCJzZXNzaW9uTnVtYmVyIiwiZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayIsImFza0FnYWluQWZ0ZXIiLCJzZXRUaW1lb3V0Iiwic2hvd0FmdGVyIiwibG9nVmlzaXQiLCJyZWdpc3RlclNXIiwiY2FuU3Vic2NyaWJlIiwiZ2V0TWV0YWRhdGEiLCJzaG93TW9kYWwiLCJjaGVja0lmU3RpbGxTdWJzY3JpYmVkIiwicmV0cnlTYXZlIiwicGF5b3V0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwidHJhY2tpbmdJRCIsImdldCIsInRhZ3MiLCJpc1N1YnNjcmliZWQiLCJzaWQiLCJBcnJheSIsImlzQXJyYXkiLCJzdWJzY3JpYmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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SUosTUFBZCxJQUF3QiwyQkFBYUksVUFBYixDQUE1QixFQUFzRDtBQUNwRHZJLGFBQUssMkRBQStCdUksVUFBL0IscUJBQW9ESixNQUFwRCxFQUFMO0FBQ0Q7QUFDRjs7OzRCQUVjTSxJLEVBQU07QUFDbkIsVUFBTUMsWUFBWSxHQUFHaEcsSUFBSSxDQUFDSSxLQUFMLENBQVdyQyxZQUFZLENBQUNHLE9BQWIsdUNBQVgsQ0FBckI7QUFDQSxVQUFNK0gsR0FBRyxHQUFHakcsSUFBSSxDQUFDSSxLQUFMLENBQVdyQyxZQUFZLENBQUNHLE9BQWIsc0JBQVgsQ0FBWjs7QUFFQSxVQUFJLENBQUM4SCxZQUFELElBQWlCLENBQUNDLEdBQXRCLEVBQTJCO0FBQ3pCO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxNQUFkLENBQUQsSUFBMEIsT0FBT0osSUFBUCxLQUFnQixRQUE5QyxFQUF3RDtBQUN0REEsWUFBSSxHQUFHLENBQUNBLElBQUQsQ0FBUDtBQUNEOztBQUVEekksV0FBSyxnREFBMkI7QUFDOUJpRCxjQUFNLEVBQUUsTUFEc0I7QUFFOUJDLFlBQUksRUFBRVIsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJtRyxvQkFBVSxFQUFFSCxHQURPO0FBRW5CRixjQUFJLEVBQUpBO0FBRm1CLFNBQWY7QUFGd0IsT0FBM0IsQ0FBTDtBQU9EOzs7Ozs7QUF1QkhySyxNQUFNLENBQUNlLFFBQVAsR0FBa0JBLFFBQWxCO2VBQ2VBLFEiLCJmaWxlIjoiaW5zdGFsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicmVhaW0td2ViLXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWltLXdlYi1zZGtcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RJT04gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKTtcbmNvbnN0IExPQ0FMX0VWRU5UU19BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1NTU1JztcbmNvbnN0IExPQ0FMX1NVQlNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDM0Myc7XG5jb25zdCBQUk9EX0VWRU5UU19BUEkgPSAnaHR0cHM6Ly9ldmVudHMucmVhaW0ubWUnO1xuY29uc3QgUFJPRF9TVUJTX0FQSSA9ICdodHRwczovL3N1YnMucmVhaW0ubWUnO1xuXG5leHBvcnQgY29uc3QgUkVBSU1fU0RLX1ZJU0lUUyA9ICdyZWFpbV9zZGtfdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9ERU5JRURfT05fVklTSVRTID0gJ3JlYWltX3Nka19kZW5pZWRfb25fdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCA9ICdyZWFpbV9zZGtfcHVzaF91c2VyX3N1YnNjcmliZWQnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1VJRCA9ICdyZWFpbV9zZGtfdWlkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9SRVRSWV9VU0VSID0gJ3JlYWltX3Nka19yZXRyeV91c2VyJztcbmV4cG9ydCBjb25zdCBSRUFJTV9TQVZFX1NVQlNDUklQVElPTiA9ICdyZWFpbV9zYXZlX3N1YnNjcmlwdGlvbic7XG5leHBvcnQgY29uc3QgUkVBSU1fRVZFTlRTX0FQSSA9ICFQUk9EVUNUSU9OID8gTE9DQUxfRVZFTlRTX0FQSSA6IFBST0RfRVZFTlRTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVUJTX0FQSSA9ICFQUk9EVUNUSU9OID8gTE9DQUxfU1VCU19BUEkgOiBQUk9EX1NVQlNfQVBJO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1NUT1JBR0VfTkFNRSA9ICdyZWFpbV9zZGtfc3RvcmFnZSc7XG5leHBvcnQgY29uc3QgUkVBSU1fSU1QUkVTU0lPTiA9ICdpJztcbmV4cG9ydCBjb25zdCBSRUFJTV9DTElDSyA9ICdjJztcbiIsImV4cG9ydCBkZWZhdWx0IChwcm9tcHRNZXRhKSA9PiB7XG4gIHJldHVybiBgXG4gICAgLnJlYWltLXdlYi1tb2RhbCB7XG4gICAgICBhbGw6IGluaXRpYWw7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBtYXgtd2lkdGg6IDU0N3B4O1xuICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICBwYWRkaW5nOiA0NXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb21wdE1ldGEuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuZm9udENvbG9yfTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IHJnYmEoMCwwLDAsMC4xMiksIC0ycHggLTFweCAyMHB4IDBweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA4cHggOHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogOTk5OTk5O1xuICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsLWNsb3NlZCB7XG4gICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgKiB7XG4gICAgICBhbGw6IHVuc2V0O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBzbWFsbCBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICR7cHJvbXB0TWV0YS5mb250Q29sb3J9O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgY29sb3I6ICMwMjBFMTc7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGN1cnNvcjogYnV0dG9uO1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1sb2dvIHtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1sb2dvIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLW1vZGFsLWNvbnRlbnQgcCB7XG4gICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cblxuICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1idXR0b24tZGVueSB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb21wdE1ldGEuYmxvY2tCdXR0b25Db2xvcn07XG4gICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmJsb2NrRm9udENvbG9yfTtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1idXR0b24tYWNjZXB0IHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvbXB0TWV0YS5hbGxvd0J1dHRvbkNvbG9yfTtcbiAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuYWxsb3dGb250Q29sb3J9O1xuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAucmVhaW0td2ViLW1vZGFsIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwcHggMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLW1vZGFsLWNvbnRlbnQgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWxvZ28ge1xuICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1idXR0b25zIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAzNTBweCkge1xuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tbW9kYWwtY29udGVudCBwIHtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDMyNHB4KSB7XG4gICAgICAucmVhaW0td2ViLW1vZGFsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHAge1xuICAgICAgICBoZWlnaHQ6IDExMHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgICBwYWRkZGluZzogMTBweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICBgO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBub29wKCkge31cblxuZXhwb3J0IGZ1bmN0aW9uIHVybEJhc2U2NFRvVWludDhBcnJheShiYXNlNjRTdHJpbmcpIHtcbiAgbGV0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpICUgNCk7XG4gIGxldCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZylcbiAgICAucmVwbGFjZSgvXFwtL2csICcrJylcbiAgICAucmVwbGFjZSgvXy9nLCAnLycpO1xuXG4gIGxldCByYXdEYXRhID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgbGV0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRUb2tlbihzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYnRvYShhdG9iKHN0cikpID09PSBzdHI7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKHByb21wdE1ldGEpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1sb2dvLWJyYW5kaW5nXCI+XG4gICAgICAgICR7cHJvbXB0TWV0YS5sb2dvID8gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtbG9nb1wiIHN0eWxlPVwiJHtwcm9tcHRNZXRhLmxvZ28gPyAndmlzaWJpbGl0eTogdmlzaWJsZScgOiAndmlzaWJpbGl0eTogaGlkZGVuJ31cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9tcHRNZXRhLmxvZ299XCIgYWx0PVwibG9nb1wiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgIDogJyd9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJlYWltLW1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPHA+JHtwcm9tcHRNZXRhLmFjdGlvblRleHR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWJ1dHRvbnNcIj5cbiAgICAgIDxzbWFsbD5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcmVhaW0ubWVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiPlxuICAgICAgICAgICR7cHJvbXB0TWV0YS5yZW1vdmVCcmFuZGluZyA/ICcnIDogJ1Bvd2VyZWQgYnkgUmVBaW0nfVxuICAgICAgICA8L2E+XG4gICAgICA8L3NtYWxsPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVhaW0tYnV0dG9uLWRlbnlcIj4ke3Byb21wdE1ldGEuYmxvY2tCdXR0b259PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWFpbS1idXR0b24tYWNjZXB0XCI+JHtwcm9tcHRNZXRhLmFsbG93QnV0dG9ufTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuIiwiaW1wb3J0IHtcbiAgbm9vcCxcbiAgdXJsQmFzZTY0VG9VaW50OEFycmF5LFxuICBpc1ZhbGlkVG9rZW5cbn0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW1wb3J0IHtcbiAgUkVBSU1fU0RLX1ZJU0lUUyxcbiAgUkVBSU1fREVOSUVEX09OX1ZJU0lUUyxcbiAgUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQsXG4gIFJFQUlNX1VJRCxcbiAgUkVBSU1fU1VCU19BUEksXG4gIFJFQUlNX0VWRU5UU19BUEksXG4gIFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OLFxuICBQUk9EVUNUSU9OLFxuICBSRUFJTV9SRVRSWV9VU0VSXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHJlbmRlclVJIGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgcmVuZGVyU3R5bGVzIGZyb20gJy4vY3NzJztcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmNsYXNzIFJlQWltU0RLIHtcbiAgY29uc3RydWN0b3Iob25BbGxvdywgb25CbG9jaykge1xuICAgIGlmIChvbkFsbG93ICYmIHR5cGVvZiBvbkFsbG93ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgb2Ygb25BbGxvdyBwYXJhbWV0ZXIgc2hvdWxkIGJlIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChvbkJsb2NrICYmIHR5cGVvZiBvbkJsb2NrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgb2Ygb25CbG9jayBwYXJhbWV0ZXIgc2hvdWxkIGJlIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHRoaXMubWV0YUVuZHBvaW50ID0gUkVBSU1fU1VCU19BUEk7XG4gICAgdGhpcy5vbkFsbG93ID0gb25BbGxvdyB8fCBub29wO1xuICAgIHRoaXMub25CbG9jayA9IG9uQmxvY2sgfHwgbm9vcDtcbiAgfVxuXG4gIGxvZyhtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnUmVBaW0gU0RLIC0nLCBtc2cpO1xuICB9XG5cbiAgYXN5bmMgZ2V0TWV0YWRhdGEoKSB7XG4gICAgY29uc3QgdGltZXpvbmUgPSBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLm1ldGFFbmRwb2ludCArICcvaW5mbz90ej0nICsgdGltZXpvbmUpO1xuICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG5cbiAgY2FuU3Vic2NyaWJlKCkge1xuICAgIHJldHVybiBOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2RlZmF1bHQnO1xuICB9XG5cbiAgc2V0QXNTdWJzY3JpYmVkKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQsIHRydWUpO1xuICB9XG5cbiAgc2V0QXNVbnN1YnNjcmliZWQoKSB7XG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCwgZmFsc2UpO1xuICB9XG5cbiAgc2V0VmFsdWUoa2V5LCB2YWwpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbCk7XG4gIH1cblxuICByZW1vdmVWYWx1ZShrZXkpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9XG5cbiAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH1cblxuICBnZXRTV1BhdGgoKSB7XG4gICAgY29uc3QgcGF0aCA9ICFQUk9EVUNUSU9OID9cbiAgICAgICcvcmVhaW0tc3cuanMnIDpcbiAgICAgIChzZWxmLndpbmRvdyAmJiBzZWxmLndpbmRvdy5SRUFJTV9TV19QQVRIX0dMT0JBTCB8fCAnL3N3LmpzJyk7XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHJlZ2lzdGVyU1coKSB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuZ2V0U1dQYXRoKCk7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIocGF0aCk7XG4gIH1cblxuICBwcmVwYXJlUmVxdWVzdChzdWJzY3JpcHRpb24sIG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpdGVfaWQ6IG1ldGFkYXRhLnNpdGVfaWQsXG4gICAgICBjb3VudHJ5X2lkOiBtZXRhZGF0YS5jb3VudHJ5X2lkLFxuICAgICAgcGxhdGZvcm1faWQ6IG1ldGFkYXRhLnBsYXRmb3JtX2lkLFxuICAgICAgb3NfaWQ6IG1ldGFkYXRhLm9zX2lkLFxuICAgICAgdGltZXpvbmVfaWQ6IG1ldGFkYXRhLnRpbWV6b25lX2lkLFxuICAgICAgdHo6IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwLFxuICAgICAgYnJvd3Nlcl9pZDogbWV0YWRhdGEuYnJvd3Nlcl9pZCxcbiAgICAgIHVzZXJfaWQ6IG1ldGFkYXRhLnVzZXJfaWQsXG4gICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAgYXV0aDogc3Vic2NyaXB0aW9uLmtleXMuYXV0aCxcbiAgICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uLmtleXMucDI1NmRoLFxuICAgICAgcGFnZV91cmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgIHNpdGVzX3VpZDogdGhpcy5zaXRlc1VJRFxuICAgIH07XG4gIH1cblxuICBzdWJzY3JpcHRpb25FeGlzdGVkKCkge1xuICAgIHJldHVybiAhISh0aGlzLmdldFZhbHVlKFJFQUlNX1VJRCkpO1xuICB9XG5cbiAgc2F2ZUZvclJldHJ5KHVzZXIpIHtcbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1JFVFJZX1VTRVIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcbiAgfVxuXG4gIGFzeW5jIHJldHJ5U2F2ZSgpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5nZXRWYWx1ZShSRUFJTV9SRVRSWV9VU0VSKTtcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2V0VmFsdWUoUkVBSU1fVUlEKTtcblxuICAgIGlmICh1c2VyICYmICFpZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlVXNlcihKU09OLnBhcnNlKHVzZXIpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShSRUFJTV9SRVRSWV9VU0VSKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLmxvZygncmV0cnlfc2F2ZV9mYWlsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBzYXZlVXNlcih1c2VyKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkV4aXN0ZWQoKSkge1xuICAgICAgICBjb25zdCB1cGRhdGUgPSBhd2FpdCBmZXRjaChgJHt0aGlzLm1ldGFFbmRwb2ludH0vcmVmcmVzaGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZDogdGhpcy5nZXRWYWx1ZShSRUFJTV9VSUQpLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IHVzZXIuZW5kcG9pbnQsXG4gICAgICAgICAgICBhdXRoOiB1c2VyLmF1dGgsXG4gICAgICAgICAgICBwMjU2ZGg6IHVzZXIucDI1NmRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMubG9nKCd1c2VyX3VwZGF0ZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5tZXRhRW5kcG9pbnR9L3NhdmVgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgcmVzLnRleHQoKTtcblxuICAgICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9VSUQsIGlkKTtcbiAgICAgIHRoaXMuc2V0QXNTdWJzY3JpYmVkKCk7XG5cbiAgICAgIGlmICh0aGlzLmh0bWxET00pIHtcbiAgICAgICAgdGhpcy5oaWRlTW9kYWwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2coJ3VzZXJfc3Vic2NyaWJlZCcpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zYXZlRm9yUmV0cnkodXNlcik7XG4gICAgICB0aGlzLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZTdGlsbFN1YnNjcmliZWQoKSB7XG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHJldHVybjtcbiAgICB0aGlzLnNldEFzVW5zdWJzY3JpYmVkKCk7XG4gIH1cblxuICBhc3luYyB0cnlUb1N1YnNjcmliZShtZXRhZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb25PcHRpb25zID0ge1xuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkobWV0YWRhdGEudmFwaWRfcHViX2tleSlcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHRoaXMucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLnN1YnNjcmliZShzdWJzY3JpcHRpb25PcHRpb25zKTtcblxuICAgICAgaWYgKG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgYWN0aW9uOiBSRUFJTV9TQVZFX1NVQlNDUklQVElPTixcbiAgICAgICAgICBzdWJzY3JpcHRpb246IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc3Vic2NyaXB0aW9uKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2Uoc3RyaW5naWZpZWQpO1xuICAgICAgY29uc3QgdXNlck9iamVjdCA9IHRoaXMucHJlcGFyZVJlcXVlc3QocGFyc2VkLCBtZXRhZGF0YSk7XG5cbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVVzZXIodXNlck9iamVjdCk7XG5cbiAgICAgIHRoaXMub25BbGxvdygpO1xuXG4gICAgICBpZiAobWV0YWRhdGEud24pIHtcbiAgICAgICAgdGhpcy5zaG93V2VsY29tZU5vdGlmaWNhdGlvbihtZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmxvZyhlcnIpO1xuICAgICAgdGhpcy5sb2coJ3VzZXJfZGVjbGluZWQnKTtcbiAgICAgIHRoaXMub25CbG9jaygpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dXZWxjb21lTm90aWZpY2F0aW9uKG1ldGFkYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHduQ29udGVudCA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGF0b2IobWV0YWRhdGEud25fY29udGVudCkpKTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih3bkNvbnRlbnQudGl0bGUsIHtcbiAgICAgICAgYm9keTogd25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRhOiB7IHVybDogd25Db250ZW50LnVybCB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZEltYWdlKHVybCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLnNyYyA9IHVybDtcbiAgfVxuXG4gIHNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSkge1xuICAgIGNvbnN0IGNzcyA9IHJlbmRlclN0eWxlcyhwcm9tcHRNZXRhKTtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyVUkocHJvbXB0TWV0YSk7XG5cbiAgICBpZiAocHJvbXB0TWV0YS5sb2dvKSB7XG4gICAgICB0aGlzLnByZWxvYWRJbWFnZShwcm9tcHRNZXRhLmxvZ28pO1xuICAgIH1cblxuICAgIGNvbnN0IFJlQWltQ1NTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIFJlQWltQ1NTLmlubmVySFRNTCA9IGNzcztcblxuICAgIGNvbnN0IFJlQWltRE9NID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGh0bWxET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGh0bWxET00uY2xhc3NMaXN0LmFkZCgncmVhaW0td2ViLW1vZGFsJyk7XG4gICAgaHRtbERPTS5jbGFzc0xpc3QuYWRkKCdyZWFpbS13ZWItbW9kYWwtY2xvc2VkJyk7XG4gICAgaHRtbERPTS5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgdGhpcy5odG1sRE9NID0gaHRtbERPTTtcblxuICAgIGNvbnN0ICRkZW55ID0gaHRtbERPTS5xdWVyeVNlbGVjdG9yKCcucmVhaW0tYnV0dG9uLWRlbnknKTtcblxuICAgICRkZW55LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLmxvZ1Zpc2l0c051bWJlcldoZW5EZW5pZWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0ICRhY2NlcHQgPSBodG1sRE9NLnF1ZXJ5U2VsZWN0b3IoJy5yZWFpbS1idXR0b24tYWNjZXB0Jyk7XG5cbiAgICAkYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLnRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKTtcbiAgICB9KTtcblxuICAgIFJlQWltRE9NLmFwcGVuZENoaWxkKGh0bWxET00pO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoUmVBaW1DU1MpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUmVBaW1ET00pO1xuXG4gICAgaHRtbERPTS5jbGFzc0xpc3QucmVtb3ZlKCdyZWFpbS13ZWItbW9kYWwtY2xvc2VkJyk7XG4gIH1cblxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5odG1sRE9NLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBlbm91Z2hWaXNpdHNBZnRlckJsb2NrKHZpc2l0TnVtYmVyKSB7XG4gICAgY29uc3QgdmlzaXRzV2hlbkRlbmllZCA9IHRoaXMuZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkKCk7XG4gICAgY29uc3QgcGFnZXZpZXdzID0gdGhpcy5nZXRWaXNpdHMoKTtcblxuICAgIGlmICh2aXNpdHNXaGVuRGVuaWVkICE9PSAwKSB7XG4gICAgICBpZiAocGFnZXZpZXdzID49ICh2aXNpdHNXaGVuRGVuaWVkICsgdmlzaXROdW1iZXIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBzaG93TW9kYWwobWV0YWRhdGEpIHtcbiAgICBpZiAobWV0YWRhdGEucHJvbXB0X3R5cGUgPT09ICdjdXN0b20nKSB7XG4gICAgICBjb25zdCBwcm9tcHRNZXRhID0gSlNPTi5wYXJzZShhdG9iKG1ldGFkYXRhLnByb21wdCkpO1xuXG4gICAgICBpZiAocHJvbXB0TWV0YS5zaG93SW1tZWRpYXRlbHkpIHtcbiAgICAgICAgdGhpcy5sb2coJ3Nob3dfaW1tZWRpYXRlbHlfY3VzdG9tX3Byb21wdCcpO1xuICAgICAgICB0aGlzLnNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2aXNpdHMgPSB0aGlzLmdldFZpc2l0cygpO1xuXG4gICAgICAgIGlmICh2aXNpdHMgPj0gcHJvbXB0TWV0YS5zZXNzaW9uTnVtYmVyICYmIHRoaXMuZW5vdWdoVmlzaXRzQWZ0ZXJCbG9jayhwcm9tcHRNZXRhLmFza0FnYWluQWZ0ZXIpKSB7XG4gICAgICAgICAgdGhpcy5sb2coJ3Nob3dfdGltZWRfY3VzdG9tX3Byb21wdCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VzdG9tTW9kYWwobWV0YWRhdGEsIHByb21wdE1ldGEpO1xuICAgICAgICAgIH0sIHByb21wdE1ldGEuc2hvd0FmdGVyICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2coJ3Nob3dfbmF0aXZlX3Byb21wdCcpO1xuICAgICAgdGhpcy50cnlUb1N1YnNjcmliZShtZXRhZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgbG9nVmlzaXQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gdGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKSB8fCAwO1xuXG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTLCArdmlzaXRzICsgMSk7XG4gIH1cblxuICBsb2dWaXNpdHNOdW1iZXJXaGVuRGVuaWVkKCkge1xuICAgIGNvbnN0IHZpc2l0cyA9IHRoaXMuZ2V0VmFsdWUoUkVBSU1fU0RLX1ZJU0lUUyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX0RFTklFRF9PTl9WSVNJVFMsIHZpc2l0cyk7XG4gIH1cblxuICBnZXROdW1iZXJPZlZpc2l0c1doZW5EZW5pZWQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gSlNPTi5wYXJzZSh0aGlzLmdldFZhbHVlKFJFQUlNX0RFTklFRF9PTl9WSVNJVFMpKTtcblxuICAgIGlmICh2aXNpdHMpIHtcbiAgICAgIHJldHVybiB2aXNpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBnZXRWaXNpdHMoKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKSkgfHwgMDtcbiAgfVxuXG4gIHN0YXRpYyB0cmFja0NvbnZlcnNpb24ocGF5b3V0KSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCB0cmFja2luZ0lEID0gcGFyYW1zLmdldCgncl9jaWQnKTtcblxuICAgIGlmICh0cmFja2luZ0lEICYmIHBheW91dCAmJiBpc1ZhbGlkVG9rZW4odHJhY2tpbmdJRCkpIHtcbiAgICAgIGZldGNoKGAke1JFQUlNX0VWRU5UU19BUEl9L2NvbnY/dD0ke3RyYWNraW5nSUR9JnBheW91dD0ke3BheW91dH1gKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkVGFncyh0YWdzKSB7XG4gICAgY29uc3QgaXNTdWJzY3JpYmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCkpO1xuICAgIGNvbnN0IHNpZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBSU1fVUlEKSk7XG5cbiAgICBpZiAoIWlzU3Vic2NyaWJlZCB8fCAhc2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KCd0YWdzJykgJiYgdHlwZW9mIHRhZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0YWdzID0gW3RhZ3NdO1xuICAgIH1cblxuICAgIGZldGNoKGAke1JFQUlNX1NVQlNfQVBJfS90YWdzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHN1YnNjcmliZXI6IHNpZCxcbiAgICAgICAgdGFnc1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGluaXQoc2l0ZXNVSUQpIHtcbiAgICB0aGlzLmxvZ1Zpc2l0KCk7XG4gICAgdGhpcy5zaXRlc1VJRCA9IHNpdGVzVUlEO1xuXG4gICAgaWYgKCEoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikpIHJldHVybjtcbiAgICBpZiAoISgnUHVzaE1hbmFnZXInIGluIHdpbmRvdykpIHJldHVybjtcblxuICAgIHRoaXMucmVnaXN0cmF0aW9uID0gYXdhaXQgdGhpcy5yZWdpc3RlclNXKCk7XG5cbiAgICBpZiAodGhpcy5jYW5TdWJzY3JpYmUoKSkge1xuICAgICAgdGhpcy5sb2coJ3RyeV90b19zdWJzY3JpYmUnKTtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgdGhpcy5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICB0aGlzLnNob3dNb2RhbChtZXRhZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tJZlN0aWxsU3Vic2NyaWJlZCgpO1xuICAgICAgdGhpcy5yZXRyeVNhdmUoKTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LlJlQWltU0RLID0gUmVBaW1TREs7XG5leHBvcnQgZGVmYXVsdCBSZUFpbVNESztcbiJdLCJzb3VyY2VSb290IjoiIn0=