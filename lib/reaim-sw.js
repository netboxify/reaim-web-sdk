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

/***/ "./node_modules/serviceworker-storage/lib/ServiceWorkerStorage.js":
/*!************************************************************************!*\
  !*** ./node_modules/serviceworker-storage/lib/ServiceWorkerStorage.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.promisify = promisify;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ServiceWorkerStorage
 */

var IDB_TRANSACTION_MODE = exports.IDB_TRANSACTION_MODE = {
  readonly: 'readonly',
  readwrite: 'readwrite',
  versionchange: 'versionchange'
};

function promisify(idbRequest) {
  return new Promise(function (resolve, reject) {
    idbRequest.onsuccess = function () {
      resolve(idbRequest.result);
    };
    idbRequest.onerror = reject;
  });
}

var ServiceWorkerStorage = exports.ServiceWorkerStorage = function () {
  function ServiceWorkerStorage(db_name, version) {
    var _this = this;

    _classCallCheck(this, ServiceWorkerStorage);

    if (typeof db_name !== 'string') throw new TypeError('db_name must be string.');
    if (typeof version !== 'number') throw new TypeError('version must be number.');
    var VERSION = version;
    this.DB_NAME = db_name;
    this.STORE_NAME = 'sw_storage';

    var db = self.indexedDB.open(this.DB_NAME, VERSION);
    db.onupgradeneeded = function (event) {
      var _db = event.target.result;
      if (_db.objectStoreNames && _db.objectStoreNames.contains(_this.STORE_NAME)) return;
      _db.createObjectStore(_this.STORE_NAME);
    };
    this.__db = promisify(db);
  }

  _createClass(ServiceWorkerStorage, [{
    key: '_accessAsyncStore',
    value: function _accessAsyncStore(mode) {
      var _this2 = this;

      return this.__db.then(function (db) {
        var transaction = db.transaction(_this2.STORE_NAME, mode);
        return transaction.objectStore(_this2.STORE_NAME);
      });
    }
  }, {
    key: 'length',
    value: function length() {
      return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly).then(function (store) {
        return promisify(store.getAllKeys());
      }).then(function (keys) {
        return keys.length;
      });
    }
  }, {
    key: 'key',
    value: function key(idx) {
      if (!arguments.length) return Promise.reject(new TypeError('Failed to execute "key" on "Storage"'));
      if (typeof idx !== 'number') idx = 0;
      return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly).then(function (store) {
        return promisify(store.getAllKeys());
      }).then(function (keys) {
        return keys[idx] || null;
      });
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this._accessAsyncStore(IDB_TRANSACTION_MODE.readonly).then(function (store) {
        return store.get(key);
      }).then(promisify);
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      return this._accessAsyncStore(IDB_TRANSACTION_MODE.readwrite).then(function (store) {
        return store.put(value, key);
      }).then(promisify);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return this._accessAsyncStore(IDB_TRANSACTION_MODE.readwrite).then(function (store) {
        return store['delete'](key);
      }).then(promisify);
    }
  }, {
    key: 'clear',
    value: function clear() {
      return this.__db.then(function (db) {
        var transaction = db.transaction(db.objectStoreNames, IDB_TRANSACTION_MODE.readwrite);
        var q = [];
        for (var i = 0, len = db.objectStoreNames.length; i < len; i++) {
          var store_name = db.objectStoreNames[i];
          q.push(promisify(transaction.objectStore(store_name).clear()));
        }
        return Promise.all(q);
      });
    }
  }]);

  return ServiceWorkerStorage;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJwcm9taXNpZnkiLCJJREJfVFJBTlNBQ1RJT05fTU9ERSIsInJlYWRvbmx5IiwicmVhZHdyaXRlIiwidmVyc2lvbmNoYW5nZSIsImlkYlJlcXVlc3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uc3VjY2VzcyIsInJlc3VsdCIsIm9uZXJyb3IiLCJTZXJ2aWNlV29ya2VyU3RvcmFnZSIsImRiX25hbWUiLCJ2ZXJzaW9uIiwiVHlwZUVycm9yIiwiVkVSU0lPTiIsIkRCX05BTUUiLCJTVE9SRV9OQU1FIiwiZGIiLCJzZWxmIiwiaW5kZXhlZERCIiwib3BlbiIsIm9udXBncmFkZW5lZWRlZCIsIl9kYiIsImV2ZW50IiwidGFyZ2V0Iiwib2JqZWN0U3RvcmVOYW1lcyIsImNvbnRhaW5zIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJfX2RiIiwibW9kZSIsInRoZW4iLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiX2FjY2Vzc0FzeW5jU3RvcmUiLCJzdG9yZSIsImdldEFsbEtleXMiLCJrZXlzIiwibGVuZ3RoIiwiaWR4IiwiYXJndW1lbnRzIiwia2V5IiwiZ2V0IiwidmFsdWUiLCJwdXQiLCJxIiwiaSIsImxlbiIsInN0b3JlX25hbWUiLCJwdXNoIiwiY2xlYXIiLCJhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBVWdCQSxTLEdBQUFBLFM7Ozs7QUFWaEI7Ozs7QUFJTyxJQUFNQyxzREFBdUI7QUFDbENDLFlBQVUsVUFEd0I7QUFFbENDLGFBQVcsV0FGdUI7QUFHbENDLGlCQUFlO0FBSG1CLENBQTdCOztBQU1BLFNBQVNKLFNBQVQsQ0FBbUJLLFVBQW5CLEVBQStCO0FBQ3BDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQzNDSCxlQUFXSSxTQUFYLEdBQXVCLFlBQVc7QUFDaENGLGNBQVFGLFdBQVdLLE1BQW5CO0FB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O0FBQUEsZUFBU0ksTUFBTSxRQUFOLEVBQWdCTSxHQUFoQixDQUFUO0FBQUEsT0FERCxFQUVKVixJQUZJLENBRUNoQyxTQUZELENBQVA7QUFHRDs7OzRCQUNPO0FBQ04sYUFBTyxLQUFLOEIsSUFBTCxDQUNKRSxJQURJLENBQ0MsY0FBTTtBQUNWLFlBQU1DLGNBQWNkLEdBQUdjLFdBQUgsQ0FBZWQsR0FBR1EsZ0JBQWxCLEVBQW9DMUIscUJBQXFCRSxTQUF6RCxDQUFwQjtBQUNBLFlBQU0yQyxJQUFJLEVBQVY7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNN0IsR0FBR1EsZ0JBQUgsQ0FBb0JZLE1BQTFDLEVBQWtEUSxJQUFJQyxHQUF0RCxFQUEyREQsR0FBM0QsRUFBZ0U7QUFDOUQsY0FBSUUsYUFBYTlCLEdBQUdRLGdCQUFILENBQW9Cb0IsQ0FBcEIsQ0FBakI7QUFDQUQsWUFBRUksSUFBRixDQUFPbEQsVUFBVWlDLFlBQVlDLFdBQVosQ0FBd0JlLFVBQXhCLEVBQW9DRSxLQUFwQyxFQUFWLENBQVA7QUFDRDtBQUNELGVBQU83QyxRQUFROEMsR0FBUixDQUFZTixDQUFaLENBQVA7QUFDRCxPQVRJLENBQVA7QUFVRCIsImZpbGUiOiJTZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2VydmljZVdvcmtlclN0b3JhZ2VcbiAqL1xuXG5leHBvcnQgY29uc3QgSURCX1RSQU5TQUNUSU9OX01PREUgPSB7XG4gIHJlYWRvbmx5OiAncmVhZG9ubHknLFxuICByZWFkd3JpdGU6ICdyZWFkd3JpdGUnLFxuICB2ZXJzaW9uY2hhbmdlOiAndmVyc2lvbmNoYW5nZSdcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9taXNpZnkoaWRiUmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlc29sdmUoaWRiUmVxdWVzdC5yZXN1bHQpO1xuICAgIH07XG4gICAgaWRiUmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZpY2VXb3JrZXJTdG9yYWdlIHtcbiAgY29uc3RydWN0b3IoZGJfbmFtZSwgdmVyc2lvbikge1xuICAgIGlmICh0eXBlb2YgZGJfbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RiX25hbWUgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBtdXN0IGJlIG51bWJlci4nKTtcbiAgICBjb25zdCBWRVJTSU9OID0gdmVyc2lvbjtcbiAgICB0aGlzLkRCX05BTUUgPSBkYl9uYW1lO1xuICAgIHRoaXMuU1RPUkVfTkFNRSA9ICdzd19zdG9yYWdlJztcblxuICAgIGNvbnN0IGRiID0gc2VsZi5pbmRleGVkREIub3Blbih0aGlzLkRCX05BTUUsIFZFUlNJT04pO1xuICAgIGRiLm9udXBncmFkZW5lZWRlZCA9IGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IF9kYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoX2RiLm9iamVjdFN0b3JlTmFtZXMgJiYgX2RiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnModGhpcy5TVE9SRV9OQU1FKSkgcmV0dXJuO1xuICAgICAgX2RiLmNyZWF0ZU9iamVjdFN0b3JlKHRoaXMuU1RPUkVfTkFNRSk7XG4gICAgfTtcbiAgICB0aGlzLl9fZGIgPSBwcm9taXNpZnkoZGIpO1xuICB9XG5cbiAgX2FjY2Vzc0FzeW5jU3RvcmUobW9kZSkge1xuICAgIHJldHVybiB0aGlzLl9fZGIudGhlbihkYiA9PiB7XG4gICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHRoaXMuU1RPUkVfTkFNRSwgbW9kZSk7XG4gICAgICByZXR1cm4gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5TVE9SRV9OQU1FKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkb25seSlcbiAgICAgIC50aGVuKHN0b3JlID0+IHByb21pc2lmeShzdG9yZS5nZXRBbGxLZXlzKCkpKVxuICAgICAgLnRoZW4oa2V5cyA9PiBrZXlzLmxlbmd0aCk7XG4gIH1cblxuICBrZXkoaWR4KSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGV4ZWN1dGUgXCJrZXlcIiBvbiBcIlN0b3JhZ2VcIicpKTtcbiAgICBpZiAodHlwZW9mIGlkeCAhPT0gJ251bWJlcicpIGlkeCA9IDA7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpXG4gICAgICAudGhlbihzdG9yZSA9PiBwcm9taXNpZnkoc3RvcmUuZ2V0QWxsS2V5cygpKSlcbiAgICAgIC50aGVuKGtleXMgPT4ga2V5c1tpZHhdIHx8IG51bGwpO1xuICB9XG5cbiAgZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkb25seSlcbiAgICAgIC50aGVuKHN0b3JlID0+IHN0b3JlLmdldChrZXkpKVxuICAgICAgLnRoZW4ocHJvbWlzaWZ5KTtcbiAgfVxuICBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpXG4gICAgICAudGhlbihzdG9yZSA9PiBzdG9yZS5wdXQodmFsdWUsIGtleSkpXG4gICAgICAudGhlbihwcm9taXNpZnkpO1xuICB9XG4gIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZHdyaXRlKVxuICAgICAgLnRoZW4oc3RvcmUgPT4gc3RvcmVbJ2RlbGV0ZSddKGtleSkpXG4gICAgICAudGhlbihwcm9taXNpZnkpO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGJcbiAgICAgIC50aGVuKGRiID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYi5vYmplY3RTdG9yZU5hbWVzLCBJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpO1xuICAgICAgICBjb25zdCBxID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBkYi5vYmplY3RTdG9yZU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgbGV0IHN0b3JlX25hbWUgPSBkYi5vYmplY3RTdG9yZU5hbWVzW2ldO1xuICAgICAgICAgIHEucHVzaChwcm9taXNpZnkodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVfbmFtZSkuY2xlYXIoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChxKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbiJdfQ==

/***/ }),

/***/ "./node_modules/serviceworker-storage/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/serviceworker-storage/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ServiceWorkerStorage = __webpack_require__(/*! ./ServiceWorkerStorage.js */ "./node_modules/serviceworker-storage/lib/ServiceWorkerStorage.js");

module.exports = _ServiceWorkerStorage.ServiceWorkerStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxPQUFPQyxPQUFQIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmljZVdvcmtlclN0b3JhZ2UgfSBmcm9tICcuL1NlcnZpY2VXb3JrZXJTdG9yYWdlLmpzJztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2aWNlV29ya2VyU3RvcmFnZTtcbiJdfQ==

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
var REAIM_SW_PATH = !PRODUCTION ? '/reaim-sw.js' : self.window && self.window.REAIM_SW_PATH_GLOBAL || '/sw.js';
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

/***/ "./src/sw.js":
/*!*******************!*\
  !*** ./src/sw.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = _interopRequireDefault(__webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"));

var _serviceworkerStorage = _interopRequireDefault(__webpack_require__(/*! serviceworker-storage */ "./node_modules/serviceworker-storage/lib/index.js"));

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var storage = new _serviceworkerStorage.default(_constants.REAIM_STORAGE_NAME, 1);

var ReAimSW =
/*#__PURE__*/
function () {
  function ReAimSW() {
    _classCallCheck(this, ReAimSW);
  }

  _createClass(ReAimSW, null, [{
    key: "log",
    value: function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee(kind, tracking, variant) {
        return _regeneratorRuntime.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(kind && tracking && variant)) {
                  _context.next = 10;
                  break;
                }

                _context.t0 = variant;
                _context.next = _context.t0 === 'cmp' ? 4 : _context.t0 === 'trg' ? 6 : _context.t0 === 'feed' ? 8 : 10;
                break;

              case 4:
                fetch("".concat(_constants.REAIM_EVENTS_API, "/log?k=").concat(kind, "&").concat(atob(tracking)));
                return _context.abrupt("break", 10);

              case 6:
                fetch("".concat(_constants.REAIM_EVENTS_API, "/trigger?k=").concat(kind, "&").concat(atob(tracking)));
                return _context.abrupt("break", 10);

              case 8:
                fetch("".concat(_constants.REAIM_EVENTS_API, "/feed?k=").concat(kind, "&").concat(atob(tracking)));
                return _context.abrupt("break", 10);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function log(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return log;
    }()
  }, {
    key: "updateSubscription",
    value: function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee2(subscription) {
        var id, req;
        return _regeneratorRuntime.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                try {
                  id = localStorage.getItem(_constants.REAIM_UID);

                  if (id) {
                    req = new Request(_constants.REAIM_SUBS_API + '/refresh', {
                      method: 'POST',
                      body: JSON.stringify({
                        id: id,
                        endpoint: subscription.endpoint,
                        auth: subscription.keys.auth,
                        p256dh: subscription.keys.p256dh
                      })
                    });
                    self.fetch(req);
                  }
                } catch (err) {
                  console.log(err);
                }

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateSubscription(_x4) {
        return _ref2.apply(this, arguments);
      }

      return updateSubscription;
    }()
  }, {
    key: "handleInstall",
    value: function handleInstall(event) {
      self.skipWaiting();
    }
  }, {
    key: "handleActivate",
    value: function handleActivate(event) {
      event.waitUntil(self.clients.claim());
    }
  }, {
    key: "handlePushEvent",
    value: function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee3(event) {
        var payload, title, options;
        return _regeneratorRuntime.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                payload = event.data.json();
                title = payload.c.t;
                options = {
                  body: payload.c.d,
                  icon: payload.c.i,
                  image: payload.c.m,
                  badge: payload.c.b,
                  actions: payload.c.a,
                  data: {
                    tracking: payload.t,
                    url: payload.c.u,
                    actions: payload.c.a,
                    variant: payload.v
                  }
                };
                ReAimSW.log(_constants.REAIM_IMPRESSION, payload.t, payload.v);
                event.waitUntil(self.registration.showNotification(title, options));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handlePushEvent(_x5) {
        return _ref3.apply(this, arguments);
      }

      return handlePushEvent;
    }()
  }, {
    key: "handleClickEvent",
    value: function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee4(event) {
        var tracking, variant, url, _url;

        return _regeneratorRuntime.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.notification.close();
                tracking = event.notification.data.tracking;
                variant = event.notification.data.variant || 'cmp';

                if (event.action === 'action-1') {
                  url = event.notification.data.actions[0].url;
                  ReAimSW.log(_constants.REAIM_CLICK, tracking, variant);
                  event.waitUntil(self.clients.openWindow(url));
                } else if (event.action === 'action-2') {
                  _url = event.notification.data.actions[1].url;
                  ReAimSW.log(_constants.REAIM_CLICK, tracking, variant);
                  event.waitUntil(self.clients.openWindow(_url));
                } else {
                  if (event.notification.data.url) {
                    ReAimSW.log(_constants.REAIM_CLICK, tracking, variant);
                    event.waitUntil(self.clients.openWindow(event.notification.data.url));
                  }
                }

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleClickEvent(_x6) {
        return _ref4.apply(this, arguments);
      }

      return handleClickEvent;
    }()
  }, {
    key: "handleUpdateSubscription",
    value: function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee5(event) {
        var newSubscription, oldSubscription;
        return _regeneratorRuntime.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return self.registration.pushManager.getSubscription();

              case 2:
                newSubscription = _context5.sent;
                _context5.t0 = JSON;
                _context5.next = 6;
                return storage.getItem('subscription');

              case 6:
                _context5.t1 = _context5.sent;
                oldSubscription = _context5.t0.parse.call(_context5.t0, _context5.t1);

                if (!oldSubscription) {
                  ReAimSW.saveLocalSubscription(newSubscription);
                  ReAimSW.updateSubscription(newSubscription);
                }

                if (newSubscription && oldSubscription && newSubscription.endpoint !== oldSubscription.endpoint) {
                  ReAimSW.saveLocalSubscription(newSubscription);
                  ReAimSW.updateSubscription(newSubscription);
                }

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleUpdateSubscription(_x7) {
        return _ref5.apply(this, arguments);
      }

      return handleUpdateSubscription;
    }()
  }, {
    key: "saveLocalSubscription",
    value: function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee6(subscription) {
        return _regeneratorRuntime.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return storage.setItem('subscription', subscription);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function saveLocalSubscription(_x8) {
        return _ref6.apply(this, arguments);
      }

      return saveLocalSubscription;
    }()
  }, {
    key: "handleMessage",
    value: function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.default.mark(function _callee7(event) {
        return _regeneratorRuntime.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (event.data.action === _constants.REAIM_SAVE_SUBSCRIPTION) {
                  event.waitUntil(ReAimSW.saveLocalSubscription(event.data.subscription));
                }

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function handleMessage(_x9) {
        return _ref7.apply(this, arguments);
      }

      return handleMessage;
    }()
  }]);

  return ReAimSW;
}();

self.addEventListener('install', ReAimSW.handleInstall);
self.addEventListener('activate', ReAimSW.handleActivate);
self.addEventListener('push', ReAimSW.handlePushEvent);
self.addEventListener('notificationclick', ReAimSW.handleClickEvent);
self.addEventListener('pushsubscriptionchange', ReAimSW.handleUpdateSubscription);
self.addEventListener('message', ReAimSW.handleMessage);

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvc2VydmljZXdvcmtlci1zdG9yYWdlL2xpYi9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2V3b3JrZXItc3RvcmFnZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9zdy5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TV19QQVRIIiwic2VsZiIsIndpbmRvdyIsIlJFQUlNX1NXX1BBVEhfR0xPQkFMIiwiUkVBSU1fU0RLX1ZJU0lUUyIsIlJFQUlNX0RFTklFRF9PTl9WSVNJVFMiLCJSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCIsIlJFQUlNX1VJRCIsIlJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OIiwiUkVBSU1fRVZFTlRTX0FQSSIsIlJFQUlNX1NVQlNfQVBJIiwiUkVBSU1fU1RPUkFHRV9OQU1FIiwiUkVBSU1fSU1QUkVTU0lPTiIsIlJFQUlNX0NMSUNLIiwic3RvcmFnZSIsIlJlQWltU1ciLCJraW5kIiwidHJhY2tpbmciLCJ2YXJpYW50IiwiZmV0Y2giLCJhdG9iIiwic3Vic2NyaXB0aW9uIiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVxIiwiUmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJhdXRoIiwia2V5cyIsInAyNTZkaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInNraXBXYWl0aW5nIiwid2FpdFVudGlsIiwiY2xpZW50cyIsImNsYWltIiwicGF5bG9hZCIsImRhdGEiLCJqc29uIiwidGl0bGUiLCJjIiwidCIsIm9wdGlvbnMiLCJkIiwiaWNvbiIsImkiLCJpbWFnZSIsIm0iLCJiYWRnZSIsImIiLCJhY3Rpb25zIiwiYSIsInVybCIsInUiLCJ2IiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwiYWN0aW9uIiwib3BlbldpbmRvdyIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwibmV3U3Vic2NyaXB0aW9uIiwib2xkU3Vic2NyaXB0aW9uIiwicGFyc2UiLCJzYXZlTG9jYWxTdWJzY3JpcHRpb24iLCJ1cGRhdGVTdWJzY3JpcHRpb24iLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUluc3RhbGwiLCJoYW5kbGVBY3RpdmF0ZSIsImhhbmRsZVB1c2hFdmVudCIsImhhbmRsZUNsaWNrRXZlbnQiLCJoYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24iLCJoYW5kbGVNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNB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ekM7QUFDQTVFLElBQUksQ0FBQzJFLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDN0QsT0FBTyxDQUFDK0QsY0FBMUM7QUFDQTdFLElBQUksQ0FBQzJFLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCN0QsT0FBTyxDQUFDZ0UsZUFBdEM7QUFDQTlFLElBQUksQ0FBQzJFLGdCQUFMLENBQXNCLG1CQUF0QixFQUEyQzdELE9BQU8sQ0FBQ2lFLGdCQUFuRDtBQUNBL0UsSUFBSSxDQUFDMkUsZ0JBQUwsQ0FBc0Isd0JBQXRCLEVBQWdEN0QsT0FBTyxDQUFDa0Usd0JBQXhEO0FBQ0FoRixJQUFJLENBQUMyRSxnQkFBTCxDQUFzQixTQUF0QixFQUFpQzdELE9BQU8sQ0FBQ21FLGFBQXpDLEUiLCJmaWxlIjoicmVhaW0tc3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlYWltLXdlYi1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3N3LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZXhwb3J0cy5wcm9taXNpZnkgPSBwcm9taXNpZnk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogU2VydmljZVdvcmtlclN0b3JhZ2VcbiAqL1xuXG52YXIgSURCX1RSQU5TQUNUSU9OX01PREUgPSBleHBvcnRzLklEQl9UUkFOU0FDVElPTl9NT0RFID0ge1xuICByZWFkb25seTogJ3JlYWRvbmx5JyxcbiAgcmVhZHdyaXRlOiAncmVhZHdyaXRlJyxcbiAgdmVyc2lvbmNoYW5nZTogJ3ZlcnNpb25jaGFuZ2UnXG59O1xuXG5mdW5jdGlvbiBwcm9taXNpZnkoaWRiUmVxdWVzdCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlkYlJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzb2x2ZShpZGJSZXF1ZXN0LnJlc3VsdCk7XG4gICAgfTtcbiAgICBpZGJSZXF1ZXN0Lm9uZXJyb3IgPSByZWplY3Q7XG4gIH0pO1xufVxuXG52YXIgU2VydmljZVdvcmtlclN0b3JhZ2UgPSBleHBvcnRzLlNlcnZpY2VXb3JrZXJTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJ2aWNlV29ya2VyU3RvcmFnZShkYl9uYW1lLCB2ZXJzaW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZXJ2aWNlV29ya2VyU3RvcmFnZSk7XG5cbiAgICBpZiAodHlwZW9mIGRiX25hbWUgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdkYl9uYW1lIG11c3QgYmUgc3RyaW5nLicpO1xuICAgIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ251bWJlcicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZlcnNpb24gbXVzdCBiZSBudW1iZXIuJyk7XG4gICAgdmFyIFZFUlNJT04gPSB2ZXJzaW9uO1xuICAgIHRoaXMuREJfTkFNRSA9IGRiX25hbWU7XG4gICAgdGhpcy5TVE9SRV9OQU1FID0gJ3N3X3N0b3JhZ2UnO1xuXG4gICAgdmFyIGRiID0gc2VsZi5pbmRleGVkREIub3Blbih0aGlzLkRCX05BTUUsIFZFUlNJT04pO1xuICAgIGRiLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF9kYiA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICBpZiAoX2RiLm9iamVjdFN0b3JlTmFtZXMgJiYgX2RiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoX3RoaXMuU1RPUkVfTkFNRSkpIHJldHVybjtcbiAgICAgIF9kYi5jcmVhdGVPYmplY3RTdG9yZShfdGhpcy5TVE9SRV9OQU1FKTtcbiAgICB9O1xuICAgIHRoaXMuX19kYiA9IHByb21pc2lmeShkYik7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU2VydmljZVdvcmtlclN0b3JhZ2UsIFt7XG4gICAga2V5OiAnX2FjY2Vzc0FzeW5jU3RvcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYWNjZXNzQXN5bmNTdG9yZShtb2RlKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuX19kYi50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihfdGhpczIuU1RPUkVfTkFNRSwgbW9kZSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShfdGhpczIuU1RPUkVfTkFNRSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkb25seSkudGhlbihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeShzdG9yZS5nZXRBbGxLZXlzKCkpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGg7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdrZXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBrZXkoaWR4KSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcImtleVwiIG9uIFwiU3RvcmFnZVwiJykpO1xuICAgICAgaWYgKHR5cGVvZiBpZHggIT09ICdudW1iZXInKSBpZHggPSAwO1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnkoc3RvcmUuZ2V0QWxsS2V5cygpKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXNbaWR4XSB8fCBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SXRlbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkb25seSkudGhlbihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLmdldChrZXkpO1xuICAgICAgfSkudGhlbihwcm9taXNpZnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWR3cml0ZSkudGhlbihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICAgIH0pLnRoZW4ocHJvbWlzaWZ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWR3cml0ZSkudGhlbihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JlWydkZWxldGUnXShrZXkpO1xuICAgICAgfSkudGhlbihwcm9taXNpZnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX2RiLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKGRiLm9iamVjdFN0b3JlTmFtZXMsIElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWR3cml0ZSk7XG4gICAgICAgIHZhciBxID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYi5vYmplY3RTdG9yZU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgdmFyIHN0b3JlX25hbWUgPSBkYi5vYmplY3RTdG9yZU5hbWVzW2ldO1xuICAgICAgICAgIHEucHVzaChwcm9taXNpZnkodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVfbmFtZSkuY2xlYXIoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTZXJ2aWNlV29ya2VyU3RvcmFnZTtcbn0oKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5VFpYSjJhV05sVjI5eWEyVnlVM1J2Y21GblpTNXFjeUpkTENKdVlXMWxjeUk2V3lKd2NtOXRhWE5wWm5raUxDSkpSRUpmVkZKQlRsTkJRMVJKVDA1ZlRVOUVSU0lzSW5KbFlXUnZibXg1SWl3aWNtVmhaSGR5YVhSbElpd2lkbVZ5YzJsdmJtTm9ZVzVuWlNJc0ltbGtZbEpsY1hWbGMzUWlMQ0pRY205dGFYTmxJaXdpY21WemIyeDJaU0lzSW5KbGFtVmpkQ0lzSW05dWMzVmpZMlZ6Y3lJc0luSmxjM1ZzZENJc0ltOXVaWEp5YjNJaUxDSlRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aU0lzSW1SaVgyNWhiV1VpTENKMlpYSnphVzl1SWl3aVZIbHdaVVZ5Y205eUlpd2lWa1ZTVTBsUFRpSXNJa1JDWDA1QlRVVWlMQ0pUVkU5U1JWOU9RVTFGSWl3aVpHSWlMQ0p6Wld4bUlpd2lhVzVrWlhobFpFUkNJaXdpYjNCbGJpSXNJbTl1ZFhCbmNtRmtaVzVsWldSbFpDSXNJbDlrWWlJc0ltVjJaVzUwSWl3aWRHRnlaMlYwSWl3aWIySnFaV04wVTNSdmNtVk9ZVzFsY3lJc0ltTnZiblJoYVc1eklpd2lZM0psWVhSbFQySnFaV04wVTNSdmNtVWlMQ0pmWDJSaUlpd2liVzlrWlNJc0luUm9aVzRpTENKMGNtRnVjMkZqZEdsdmJpSXNJbTlpYW1WamRGTjBiM0psSWl3aVgyRmpZMlZ6YzBGemVXNWpVM1J2Y21VaUxDSnpkRzl5WlNJc0ltZGxkRUZzYkV0bGVYTWlMQ0pyWlhseklpd2liR1Z1WjNSb0lpd2lhV1I0SWl3aVlYSm5kVzFsYm5Seklpd2lhMlY1SWl3aVoyVjBJaXdpZG1Gc2RXVWlMQ0p3ZFhRaUxDSnhJaXdpYVNJc0lteGxiaUlzSW5OMGIzSmxYMjVoYldVaUxDSndkWE5vSWl3aVkyeGxZWElpTENKaGJHd2lYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3TzFGQlZXZENRU3hUTEVkQlFVRkJMRk03T3pzN1FVRldhRUk3T3pzN1FVRkpUeXhKUVVGTlF5eHpSRUZCZFVJN1FVRkRiRU5ETEZsQlFWVXNWVUZFZDBJN1FVRkZiRU5ETEdGQlFWY3NWMEZHZFVJN1FVRkhiRU5ETEdsQ1FVRmxPMEZCU0cxQ0xFTkJRVGRDT3p0QlFVMUJMRk5CUVZOS0xGTkJRVlFzUTBGQmJVSkxMRlZCUVc1Q0xFVkJRU3RDTzBGQlEzQkRMRk5CUVU4c1NVRkJTVU1zVDBGQlNpeERRVUZaTEZWQlFWTkRMRTlCUVZRc1JVRkJhMEpETEUxQlFXeENMRVZCUVRCQ08wRkJRek5EU0N4bFFVRlhTU3hUUVVGWUxFZEJRWFZDTEZsQlFWYzdRVUZEYUVOR0xHTkJRVkZHTEZkQlFWZExMRTFCUVc1Q08wRkJRMFFzUzBGR1JEdEJRVWRCVEN4bFFVRlhUU3hQUVVGWUxFZEJRWEZDU0N4TlFVRnlRanRCUVVORUxFZEJURTBzUTBGQlVEdEJRVTFFT3p0SlFVVlpTU3h2UWl4WFFVRkJRU3h2UWp0QlFVTllMR2REUVVGWlF5eFBRVUZhTEVWQlFYRkNReXhQUVVGeVFpeEZRVUU0UWp0QlFVRkJPenRCUVVGQk96dEJRVU0xUWl4UlFVRkpMRTlCUVU5RUxFOUJRVkFzUzBGQmJVSXNVVUZCZGtJc1JVRkJhVU1zVFVGQlRTeEpRVUZKUlN4VFFVRktMRU5CUVdNc2VVSkJRV1FzUTBGQlRqdEJRVU5xUXl4UlFVRkpMRTlCUVU5RUxFOUJRVkFzUzBGQmJVSXNVVUZCZGtJc1JVRkJhVU1zVFVGQlRTeEpRVUZKUXl4VFFVRktMRU5CUVdNc2VVSkJRV1FzUTBGQlRqdEJRVU5xUXl4UlFVRk5ReXhWUVVGVlJpeFBRVUZvUWp0QlFVTkJMRk5CUVV0SExFOUJRVXdzUjBGQlpVb3NUMEZCWmp0QlFVTkJMRk5CUVV0TExGVkJRVXdzUjBGQmEwSXNXVUZCYkVJN08wRkJSVUVzVVVGQlRVTXNTMEZCUzBNc1MwRkJTME1zVTBGQlRDeERRVUZsUXl4SlFVRm1MRU5CUVc5Q0xFdEJRVXRNTEU5QlFYcENMRVZCUVd0RFJDeFBRVUZzUXl4RFFVRllPMEZCUTBGSExFOUJRVWRKTEdWQlFVZ3NSMEZCY1VJc2FVSkJRVk03UVVGRE5VSXNWVUZCVFVNc1RVRkJUVU1zVFVGQlRVTXNUVUZCVGl4RFFVRmhhRUlzVFVGQmVrSTdRVUZEUVN4VlFVRkpZeXhKUVVGSlJ5eG5Ra0ZCU2l4SlFVRjNRa2dzU1VGQlNVY3NaMEpCUVVvc1EwRkJjVUpETEZGQlFYSkNMRU5CUVRoQ0xFMUJRVXRXTEZWQlFXNURMRU5CUVRWQ0xFVkJRVFJGTzBGQlF6VkZUU3hWUVVGSlN5eHBRa0ZCU2l4RFFVRnpRaXhOUVVGTFdDeFZRVUV6UWp0QlFVTkVMRXRCU2tRN1FVRkxRU3hUUVVGTFdTeEpRVUZNTEVkQlFWazVRaXhWUVVGVmJVSXNSVUZCVml4RFFVRmFPMEZCUTBRN096czdjME5CUldsQ1dTeEpMRVZCUVUwN1FVRkJRVHM3UVVGRGRFSXNZVUZCVHl4TFFVRkxSQ3hKUVVGTUxFTkJRVlZGTEVsQlFWWXNRMEZCWlN4alFVRk5PMEZCUXpGQ0xGbEJRVTFETEdOQlFXTmtMRWRCUVVkakxGZEJRVWdzUTBGQlpTeFBRVUZMWml4VlFVRndRaXhGUVVGblEyRXNTVUZCYUVNc1EwRkJjRUk3UVVGRFFTeGxRVUZQUlN4WlFVRlpReXhYUVVGYUxFTkJRWGRDTEU5QlFVdG9RaXhWUVVFM1FpeERRVUZRTzBGQlEwUXNUMEZJVFN4RFFVRlFPMEZCU1VRN096czJRa0ZGVVR0QlFVTlFMR0ZCUVU4c1MwRkJTMmxDTEdsQ1FVRk1MRU5CUVhWQ2JFTXNjVUpCUVhGQ1F5eFJRVUUxUXl4RlFVTktPRUlzU1VGRVNTeERRVU5ETzBGQlFVRXNaVUZCVTJoRExGVkJRVlZ2UXl4TlFVRk5ReXhWUVVGT0xFVkJRVllzUTBGQlZEdEJRVUZCTEU5QlJFUXNSVUZGU2t3c1NVRkdTU3hEUVVWRE8wRkJRVUVzWlVGQlVVMHNTMEZCUzBNc1RVRkJZanRCUVVGQkxFOUJSa1FzUTBGQlVEdEJRVWRFT3pzN2QwSkJSVWRETEVjc1JVRkJTenRCUVVOUUxGVkJRVWtzUTBGQlEwTXNWVUZCVlVZc1RVRkJaaXhGUVVGMVFpeFBRVUZQYWtNc1VVRkJVVVVzVFVGQlVpeERRVUZsTEVsQlFVbFBMRk5CUVVvc1EwRkJZeXh6UTBGQlpDeERRVUZtTEVOQlFWQTdRVUZEZGtJc1ZVRkJTU3hQUVVGUGVVSXNSMEZCVUN4TFFVRmxMRkZCUVc1Q0xFVkJRVFpDUVN4TlFVRk5MRU5CUVU0N1FVRkROMElzWVVGQlR5eExRVUZMVEN4cFFrRkJUQ3hEUVVGMVFteERMSEZDUVVGeFFrTXNVVUZCTlVNc1JVRkRTamhDTEVsQlJFa3NRMEZEUXp0QlFVRkJMR1ZCUVZOb1F5eFZRVUZWYjBNc1RVRkJUVU1zVlVGQlRpeEZRVUZXTEVOQlFWUTdRVUZCUVN4UFFVUkVMRVZCUlVwTUxFbEJSa2tzUTBGRlF6dEJRVUZCTEdWQlFWRk5MRXRCUVV0RkxFZEJRVXdzUzBGQllTeEpRVUZ5UWp0QlFVRkJMRTlCUmtRc1EwRkJVRHRCUVVkRU96czdORUpCUlU5RkxFY3NSVUZCU3p0QlFVTllMR0ZCUVU4c1MwRkJTMUFzYVVKQlFVd3NRMEZCZFVKc1F5eHhRa0ZCY1VKRExGRkJRVFZETEVWQlEwbzRRaXhKUVVSSkxFTkJRME03UVVGQlFTeGxRVUZUU1N4TlFVRk5UeXhIUVVGT0xFTkJRVlZFTEVkQlFWWXNRMEZCVkR0QlFVRkJMRTlCUkVRc1JVRkZTbFlzU1VGR1NTeERRVVZEYUVNc1UwRkdSQ3hEUVVGUU8wRkJSMFE3T3pzMFFrRkRUekJETEVjc1JVRkJTMFVzU3l4RlFVRlBPMEZCUTJ4Q0xHRkJRVThzUzBGQlMxUXNhVUpCUVV3c1EwRkJkVUpzUXl4eFFrRkJjVUpGTEZOQlFUVkRMRVZCUTBvMlFpeEpRVVJKTEVOQlEwTTdRVUZCUVN4bFFVRlRTU3hOUVVGTlV5eEhRVUZPTEVOQlFWVkVMRXRCUVZZc1JVRkJhVUpHTEVkQlFXcENMRU5CUVZRN1FVRkJRU3hQUVVSRUxFVkJSVXBXTEVsQlJra3NRMEZGUTJoRExGTkJSa1FzUTBGQlVEdEJRVWRFT3pzN0swSkJRMVV3UXl4SExFVkJRVXM3UVVGRFpDeGhRVUZQTEV0QlFVdFFMR2xDUVVGTUxFTkJRWFZDYkVNc2NVSkJRWEZDUlN4VFFVRTFReXhGUVVOS05rSXNTVUZFU1N4RFFVTkRPMEZCUVVFc1pVRkJVMGtzVFVGQlRTeFJRVUZPTEVWQlFXZENUU3hIUVVGb1FpeERRVUZVTzBGQlFVRXNUMEZFUkN4RlFVVktWaXhKUVVaSkxFTkJSVU5vUXl4VFFVWkVMRU5CUVZBN1FVRkhSRHM3T3pSQ1FVTlBPMEZCUTA0c1lVRkJUeXhMUVVGTE9FSXNTVUZCVEN4RFFVTktSU3hKUVVSSkxFTkJRME1zWTBGQlRUdEJRVU5XTEZsQlFVMURMR05CUVdOa0xFZEJRVWRqTEZkQlFVZ3NRMEZCWldRc1IwRkJSMUVzWjBKQlFXeENMRVZCUVc5RE1VSXNjVUpCUVhGQ1JTeFRRVUY2UkN4RFFVRndRanRCUVVOQkxGbEJRVTB5UXl4SlFVRkpMRVZCUVZZN1FVRkRRU3hoUVVGTExFbEJRVWxETEVsQlFVa3NRMEZCVWl4RlFVRlhReXhOUVVGTk4wSXNSMEZCUjFFc1owSkJRVWdzUTBGQmIwSlpMRTFCUVRGRExFVkJRV3RFVVN4SlFVRkpReXhIUVVGMFJDeEZRVUV5UkVRc1IwRkJNMFFzUlVGQlowVTdRVUZET1VRc1kwRkJTVVVzWVVGQllUbENMRWRCUVVkUkxHZENRVUZJTEVOQlFXOUNiMElzUTBGQmNFSXNRMEZCYWtJN1FVRkRRVVFzV1VGQlJVa3NTVUZCUml4RFFVRlBiRVFzVlVGQlZXbERMRmxCUVZsRExGZEJRVm9zUTBGQmQwSmxMRlZCUVhoQ0xFVkJRVzlEUlN4TFFVRndReXhGUVVGV0xFTkJRVkE3UVVGRFJEdEJRVU5FTEdWQlFVODNReXhSUVVGUk9FTXNSMEZCVWl4RFFVRlpUaXhEUVVGYUxFTkJRVkE3UVVGRFJDeFBRVlJKTEVOQlFWQTdRVUZWUkNJc0ltWnBiR1VpT2lKVFpYSjJhV05sVjI5eWEyVnlVM1J2Y21GblpTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nVTJWeWRtbGpaVmR2Y210bGNsTjBiM0poWjJWY2JpQXFMMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdTVVJDWDFSU1FVNVRRVU5VU1U5T1gwMVBSRVVnUFNCN1hHNGdJSEpsWVdSdmJteDVPaUFuY21WaFpHOXViSGtuTEZ4dUlDQnlaV0ZrZDNKcGRHVTZJQ2R5WldGa2QzSnBkR1VuTEZ4dUlDQjJaWEp6YVc5dVkyaGhibWRsT2lBbmRtVnljMmx2Ym1Ob1lXNW5aU2RjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQndjbTl0YVhOcFpua29hV1JpVW1WeGRXVnpkQ2tnZTF4dUlDQnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9ablZ1WTNScGIyNG9jbVZ6YjJ4MlpTd2djbVZxWldOMEtTQjdYRzRnSUNBZ2FXUmlVbVZ4ZFdWemRDNXZibk4xWTJObGMzTWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUhKbGMyOXNkbVVvYVdSaVVtVnhkV1Z6ZEM1eVpYTjFiSFFwTzF4dUlDQWdJSDA3WEc0Z0lDQWdhV1JpVW1WeGRXVnpkQzV2Ym1WeWNtOXlJRDBnY21WcVpXTjBPMXh1SUNCOUtUdGNibjFjYmx4dVpYaHdiM0owSUdOc1lYTnpJRk5sY25acFkyVlhiM0pyWlhKVGRHOXlZV2RsSUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvWkdKZmJtRnRaU3dnZG1WeWMybHZiaWtnZTF4dUlDQWdJR2xtSUNoMGVYQmxiMllnWkdKZmJtRnRaU0FoUFQwZ0ozTjBjbWx1WnljcElIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMlJpWDI1aGJXVWdiWFZ6ZENCaVpTQnpkSEpwYm1jdUp5azdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjJaWEp6YVc5dUlDRTlQU0FuYm5WdFltVnlKeWtnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnbmRtVnljMmx2YmlCdGRYTjBJR0psSUc1MWJXSmxjaTRuS1R0Y2JpQWdJQ0JqYjI1emRDQldSVkpUU1U5T0lEMGdkbVZ5YzJsdmJqdGNiaUFnSUNCMGFHbHpMa1JDWDA1QlRVVWdQU0JrWWw5dVlXMWxPMXh1SUNBZ0lIUm9hWE11VTFSUFVrVmZUa0ZOUlNBOUlDZHpkMTl6ZEc5eVlXZGxKenRjYmx4dUlDQWdJR052Ym5OMElHUmlJRDBnYzJWc1ppNXBibVJsZUdWa1JFSXViM0JsYmloMGFHbHpMa1JDWDA1QlRVVXNJRlpGVWxOSlQwNHBPMXh1SUNBZ0lHUmlMbTl1ZFhCbmNtRmtaVzVsWldSbFpDQTlJR1YyWlc1MElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElGOWtZaUE5SUdWMlpXNTBMblJoY21kbGRDNXlaWE4xYkhRN1hHNGdJQ0FnSUNCcFppQW9YMlJpTG05aWFtVmpkRk4wYjNKbFRtRnRaWE1nSmlZZ1gyUmlMbTlpYW1WamRGTjBiM0psVG1GdFpYTXVZMjl1ZEdGcGJuTW9kR2hwY3k1VFZFOVNSVjlPUVUxRktTa2djbVYwZFhKdU8xeHVJQ0FnSUNBZ1gyUmlMbU55WldGMFpVOWlhbVZqZEZOMGIzSmxLSFJvYVhNdVUxUlBVa1ZmVGtGTlJTazdYRzRnSUNBZ2ZUdGNiaUFnSUNCMGFHbHpMbDlmWkdJZ1BTQndjbTl0YVhOcFpua29aR0lwTzF4dUlDQjlYRzVjYmlBZ1gyRmpZMlZ6YzBGemVXNWpVM1J2Y21Vb2JXOWtaU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlpHSXVkR2hsYmloa1lpQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQjBjbUZ1YzJGamRHbHZiaUE5SUdSaUxuUnlZVzV6WVdOMGFXOXVLSFJvYVhNdVUxUlBVa1ZmVGtGTlJTd2diVzlrWlNrN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEhKaGJuTmhZM1JwYjI0dWIySnFaV04wVTNSdmNtVW9kR2hwY3k1VFZFOVNSVjlPUVUxRktUdGNiaUFnSUNCOUtUdGNiaUFnZlZ4dVhHNGdJR3hsYm1kMGFDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWVdOalpYTnpRWE41Ym1OVGRHOXlaU2hKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlM1eVpXRmtiMjVzZVNsY2JpQWdJQ0FnSUM1MGFHVnVLSE4wYjNKbElEMCtJSEJ5YjIxcGMybG1lU2h6ZEc5eVpTNW5aWFJCYkd4TFpYbHpLQ2twS1Z4dUlDQWdJQ0FnTG5Sb1pXNG9hMlY1Y3lBOVBpQnJaWGx6TG14bGJtZDBhQ2s3WEc0Z0lIMWNibHh1SUNCclpYa29hV1I0S1NCN1hHNGdJQ0FnYVdZZ0tDRmhjbWQxYldWdWRITXViR1Z1WjNSb0tTQnlaWFIxY200Z1VISnZiV2x6WlM1eVpXcGxZM1FvYm1WM0lGUjVjR1ZGY25KdmNpZ25SbUZwYkdWa0lIUnZJR1Y0WldOMWRHVWdYQ0pyWlhsY0lpQnZiaUJjSWxOMGIzSmhaMlZjSWljcEtUdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHbGtlQ0FoUFQwZ0oyNTFiV0psY2ljcElHbGtlQ0E5SURBN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyRmpZMlZ6YzBGemVXNWpVM1J2Y21Vb1NVUkNYMVJTUVU1VFFVTlVTVTlPWDAxUFJFVXVjbVZoWkc5dWJIa3BYRzRnSUNBZ0lDQXVkR2hsYmloemRHOXlaU0E5UGlCd2NtOXRhWE5wWm5rb2MzUnZjbVV1WjJWMFFXeHNTMlY1Y3lncEtTbGNiaUFnSUNBZ0lDNTBhR1Z1S0d0bGVYTWdQVDRnYTJWNWMxdHBaSGhkSUh4OElHNTFiR3dwTzF4dUlDQjlYRzVjYmlBZ1oyVjBTWFJsYlNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWVdOalpYTnpRWE41Ym1OVGRHOXlaU2hKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlM1eVpXRmtiMjVzZVNsY2JpQWdJQ0FnSUM1MGFHVnVLSE4wYjNKbElEMCtJSE4wYjNKbExtZGxkQ2hyWlhrcEtWeHVJQ0FnSUNBZ0xuUm9aVzRvY0hKdmJXbHphV1o1S1R0Y2JpQWdmVnh1SUNCelpYUkpkR1Z0S0d0bGVTd2dkbUZzZFdVcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZZV05qWlhOelFYTjVibU5UZEc5eVpTaEpSRUpmVkZKQlRsTkJRMVJKVDA1ZlRVOUVSUzV5WldGa2QzSnBkR1VwWEc0Z0lDQWdJQ0F1ZEdobGJpaHpkRzl5WlNBOVBpQnpkRzl5WlM1d2RYUW9kbUZzZFdVc0lHdGxlU2twWEc0Z0lDQWdJQ0F1ZEdobGJpaHdjbTl0YVhOcFpua3BPMXh1SUNCOVhHNGdJSEpsYlc5MlpVbDBaVzBvYTJWNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMkZqWTJWemMwRnplVzVqVTNSdmNtVW9TVVJDWDFSU1FVNVRRVU5VU1U5T1gwMVBSRVV1Y21WaFpIZHlhWFJsS1Z4dUlDQWdJQ0FnTG5Sb1pXNG9jM1J2Y21VZ1BUNGdjM1J2Y21WYkoyUmxiR1YwWlNkZEtHdGxlU2twWEc0Z0lDQWdJQ0F1ZEdobGJpaHdjbTl0YVhOcFpua3BPMXh1SUNCOVhHNGdJR05zWldGeUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdKY2JpQWdJQ0FnSUM1MGFHVnVLR1JpSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RISmhibk5oWTNScGIyNGdQU0JrWWk1MGNtRnVjMkZqZEdsdmJpaGtZaTV2WW1wbFkzUlRkRzl5WlU1aGJXVnpMQ0JKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlM1eVpXRmtkM0pwZEdVcE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCeElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdMQ0JzWlc0Z1BTQmtZaTV2WW1wbFkzUlRkRzl5WlU1aGJXVnpMbXhsYm1kMGFEc2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdiR1YwSUhOMGIzSmxYMjVoYldVZ1BTQmtZaTV2WW1wbFkzUlRkRzl5WlU1aGJXVnpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lIRXVjSFZ6YUNod2NtOXRhWE5wWm5rb2RISmhibk5oWTNScGIyNHViMkpxWldOMFUzUnZjbVVvYzNSdmNtVmZibUZ0WlNrdVkyeGxZWElvS1NrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQlFjbTl0YVhObExtRnNiQ2h4S1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0I5WEc1OVhHNWNiaUpkZlE9PSIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9TZXJ2aWNlV29ya2VyU3RvcmFnZSA9IHJlcXVpcmUoJy4vU2VydmljZVdvcmtlclN0b3JhZ2UuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBfU2VydmljZVdvcmtlclN0b3JhZ2UuU2VydmljZVdvcmtlclN0b3JhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXeUp0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3p0QlFVVkJRU3hQUVVGUFF5eFBRVUZRSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1UyVnlkbWxqWlZkdmNtdGxjbE4wYjNKaFoyVWdmU0JtY205dElDY3VMMU5sY25acFkyVlhiM0pyWlhKVGRHOXlZV2RsTG1wekp6dGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JUWlhKMmFXTmxWMjl5YTJWeVUzUnZjbUZuWlR0Y2JpSmRmUT09IiwiY29uc3QgUFJPRFVDVElPTiA9ICEhKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpO1xuY29uc3QgTE9DQUxfRVZFTlRTX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjU1NTUnO1xuY29uc3QgTE9DQUxfU1VCU19BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo0MzQzJztcbmNvbnN0IFBST0RfRVZFTlRTX0FQSSA9ICdodHRwczovL2V2ZW50cy5yZWFpbS5tZSc7XG5jb25zdCBQUk9EX1NVQlNfQVBJID0gJ2h0dHBzOi8vc3Vicy5yZWFpbS5tZSc7XG5cbmV4cG9ydCBjb25zdCBSRUFJTV9TV19QQVRIID0gIVBST0RVQ1RJT04gPyAnL3JlYWltLXN3LmpzJyA6IChzZWxmLndpbmRvdyAmJiBzZWxmLndpbmRvdy5SRUFJTV9TV19QQVRIX0dMT0JBTCB8fCAnL3N3LmpzJyk7XG5leHBvcnQgY29uc3QgUkVBSU1fU0RLX1ZJU0lUUyA9ICdyZWFpbV9zZGtfdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9ERU5JRURfT05fVklTSVRTID0gJ3JlYWltX3Nka19kZW5pZWRfb25fdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCA9ICdyZWFpbV9zZGtfcHVzaF91c2VyX3N1YnNjcmliZWQnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1VJRCA9ICdyZWFpbV9zZGtfdWlkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9TQVZFX1NVQlNDUklQVElPTiA9ICdyZWFpbV9zYXZlX3N1YnNjcmlwdGlvbic7XG5leHBvcnQgY29uc3QgUkVBSU1fRVZFTlRTX0FQSSA9ICFQUk9EVUNUSU9OID8gTE9DQUxfRVZFTlRTX0FQSSA6IFBST0RfRVZFTlRTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVUJTX0FQSSA9ICFQUk9EVUNUSU9OID8gTE9DQUxfU1VCU19BUEkgOiBQUk9EX1NVQlNfQVBJO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1NUT1JBR0VfTkFNRSA9ICdyZWFpbV9zZGtfc3RvcmFnZSc7XG5leHBvcnQgY29uc3QgUkVBSU1fSU1QUkVTU0lPTiA9ICdpJztcbmV4cG9ydCBjb25zdCBSRUFJTV9DTElDSyA9ICdjJztcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5pbXBvcnQgcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuaW1wb3J0IFNlcnZpY2VXb3JrZXJTdG9yYWdlIGZyb20gJ3NlcnZpY2V3b3JrZXItc3RvcmFnZSc7XG5pbXBvcnQge1xuICBSRUFJTV9TQVZFX1NVQlNDUklQVElPTixcbiAgUkVBSU1fRVZFTlRTX0FQSSxcbiAgUkVBSU1fU1VCU19BUEksXG4gIFJFQUlNX1NUT1JBR0VfTkFNRSxcbiAgUkVBSU1fSU1QUkVTU0lPTixcbiAgUkVBSU1fQ0xJQ0ssXG4gIFJFQUlNX1VJRFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU2VydmljZVdvcmtlclN0b3JhZ2UoUkVBSU1fU1RPUkFHRV9OQU1FLCAxKTtcblxuY2xhc3MgUmVBaW1TVyB7XG5cbiAgc3RhdGljIGFzeW5jIGxvZyhraW5kLCB0cmFja2luZywgdmFyaWFudCkge1xuICAgIGlmIChraW5kICYmIHRyYWNraW5nICYmIHZhcmlhbnQpIHtcbiAgICAgIHN3aXRjaCAodmFyaWFudCkge1xuICAgICAgICBjYXNlICdjbXAnOlxuICAgICAgICAgIGZldGNoKGAke1JFQUlNX0VWRU5UU19BUEl9L2xvZz9rPSR7a2luZH0mJHthdG9iKHRyYWNraW5nKX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndHJnJzpcbiAgICAgICAgICBmZXRjaChgJHtSRUFJTV9FVkVOVFNfQVBJfS90cmlnZ2VyP2s9JHtraW5kfSYke2F0b2IodHJhY2tpbmcpfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmZWVkJzpcbiAgICAgICAgICBmZXRjaChgJHtSRUFJTV9FVkVOVFNfQVBJfS9mZWVkP2s9JHtraW5kfSYke2F0b2IodHJhY2tpbmcpfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBSU1fVUlEKTtcblxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KFJFQUlNX1NVQlNfQVBJICsgJy9yZWZyZXNoJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgICAgICAgIGF1dGg6IHN1YnNjcmlwdGlvbi5rZXlzLmF1dGgsXG4gICAgICAgICAgICBwMjU2ZGg6IHN1YnNjcmlwdGlvbi5rZXlzLnAyNTZkaFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYuZmV0Y2gocmVxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZUluc3RhbGwoZXZlbnQpIHtcbiAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlQWN0aXZhdGUoZXZlbnQpIHtcbiAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLmNsYWltKCkpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZVB1c2hFdmVudChldmVudCkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLmpzb24oKTtcblxuICAgIGNvbnN0IHRpdGxlID0gcGF5bG9hZC5jLnQ7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGJvZHk6IHBheWxvYWQuYy5kLFxuICAgICAgaWNvbjogcGF5bG9hZC5jLmksXG4gICAgICBpbWFnZTogcGF5bG9hZC5jLm0sXG4gICAgICBiYWRnZTogcGF5bG9hZC5jLmIsXG4gICAgICBhY3Rpb25zOiBwYXlsb2FkLmMuYSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHJhY2tpbmc6IHBheWxvYWQudCxcbiAgICAgICAgdXJsOiBwYXlsb2FkLmMudSxcbiAgICAgICAgYWN0aW9uczogcGF5bG9hZC5jLmEsXG4gICAgICAgIHZhcmlhbnQ6IHBheWxvYWQudlxuICAgICAgfVxuICAgIH07XG5cbiAgICBSZUFpbVNXLmxvZyhSRUFJTV9JTVBSRVNTSU9OLCBwYXlsb2FkLnQsIHBheWxvYWQudik7XG4gICAgZXZlbnQud2FpdFVudGlsKHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24odGl0bGUsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVDbGlja0V2ZW50KGV2ZW50KSB7XG4gICAgZXZlbnQubm90aWZpY2F0aW9uLmNsb3NlKCk7XG4gICAgY29uc3QgdHJhY2tpbmcgPSBldmVudC5ub3RpZmljYXRpb24uZGF0YS50cmFja2luZztcbiAgICBjb25zdCB2YXJpYW50ID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudmFyaWFudCB8fCAnY21wJztcblxuICAgIGlmIChldmVudC5hY3Rpb24gPT09ICdhY3Rpb24tMScpIHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLmFjdGlvbnNbMF0udXJsO1xuXG4gICAgICBSZUFpbVNXLmxvZyhSRUFJTV9DTElDSywgdHJhY2tpbmcsIHZhcmlhbnQpO1xuICAgICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5vcGVuV2luZG93KHVybCkpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuYWN0aW9uID09PSAnYWN0aW9uLTInKSB7XG4gICAgICBjb25zdCB1cmwgPSBldmVudC5ub3RpZmljYXRpb24uZGF0YS5hY3Rpb25zWzFdLnVybDtcblxuICAgICAgUmVBaW1TVy5sb2coUkVBSU1fQ0xJQ0ssIHRyYWNraW5nLCB2YXJpYW50KTtcbiAgICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMub3BlbldpbmRvdyh1cmwpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnVybCkge1xuICAgICAgICBSZUFpbVNXLmxvZyhSRUFJTV9DTElDSywgdHJhY2tpbmcsIHZhcmlhbnQpO1xuICAgICAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLm9wZW5XaW5kb3coZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudXJsKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbihldmVudCkge1xuICAgIGNvbnN0IG5ld1N1YnNjcmlwdGlvbiA9IGF3YWl0IHNlbGYucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IG9sZFN1YnNjcmlwdGlvbiA9IEpTT04ucGFyc2UoYXdhaXQgc3RvcmFnZS5nZXRJdGVtKCdzdWJzY3JpcHRpb24nKSk7XG5cbiAgICBpZiAoIW9sZFN1YnNjcmlwdGlvbikge1xuICAgICAgUmVBaW1TVy5zYXZlTG9jYWxTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICAgIFJlQWltU1cudXBkYXRlU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKG5ld1N1YnNjcmlwdGlvbiAmJiBvbGRTdWJzY3JpcHRpb24gJiYgKG5ld1N1YnNjcmlwdGlvbi5lbmRwb2ludCAhPT0gb2xkU3Vic2NyaXB0aW9uLmVuZHBvaW50KSkge1xuICAgICAgUmVBaW1TVy5zYXZlTG9jYWxTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICAgIFJlQWltU1cudXBkYXRlU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNhdmVMb2NhbFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBhd2FpdCBzdG9yYWdlLnNldEl0ZW0oJ3N1YnNjcmlwdGlvbicsIHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04pIHtcbiAgICAgIGV2ZW50LndhaXRVbnRpbChSZUFpbVNXLnNhdmVMb2NhbFN1YnNjcmlwdGlvbihldmVudC5kYXRhLnN1YnNjcmlwdGlvbikpO1xuICAgIH1cbiAgfVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBSZUFpbVNXLmhhbmRsZUluc3RhbGwpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIFJlQWltU1cuaGFuZGxlQWN0aXZhdGUpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgUmVBaW1TVy5oYW5kbGVQdXNoRXZlbnQpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIFJlQWltU1cuaGFuZGxlQ2xpY2tFdmVudCk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBSZUFpbVNXLmhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbik7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBSZUFpbVNXLmhhbmRsZU1lc3NhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==