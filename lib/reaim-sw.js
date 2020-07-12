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
exports.REAIM_CLICK = exports.REAIM_IMPRESSION = exports.REAIM_STORAGE_NAME = exports.REAIM_SUBS_API = exports.REAIM_EVENTS_API = exports.REAIM_SAVE_SUBSCRIPTION = exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = exports.PRODUCTION = void 0;
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
                    req = new Request("".concat(_constants.REAIM_SUBS_API, "/refresh"), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvc2VydmljZXdvcmtlci1zdG9yYWdlL2xpYi9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2V3b3JrZXItc3RvcmFnZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9zdy5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04iLCJSRUFJTV9FVkVOVFNfQVBJIiwiUkVBSU1fU1VCU19BUEkiLCJSRUFJTV9TVE9SQUdFX05BTUUiLCJSRUFJTV9JTVBSRVNTSU9OIiwiUkVBSU1fQ0xJQ0siLCJzdG9yYWdlIiwiUmVBaW1TVyIsImtpbmQiLCJ0cmFja2luZyIsInZhcmlhbnQiLCJmZXRjaCIsImF0b2IiLCJzdWJzY3JpcHRpb24iLCJpZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXEiLCJSZXF1ZXN0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsImF1dGgiLCJrZXlzIiwicDI1NmRoIiwic2VsZiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJldmVudCIsInNraXBXYWl0aW5nIiwid2FpdFVudGlsIiwiY2xpZW50cyIsImNsYWltIiwicGF5bG9hZCIsImRhdGEiLCJqc29uIiwidGl0bGUiLCJjIiwidCIsIm9wdGlvbnMiLCJkIiwiaWNvbiIsImkiLCJpbWFnZSIsIm0iLCJiYWRnZSIsImIiLCJhY3Rpb25zIiwiYSIsInVybCIsInUiLCJ2IiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwiYWN0aW9uIiwib3BlbldpbmRvdyIsInB1c2hNYW5hZ2VyIiwiZ2V0U3Vic2NyaXB0aW9uIiwibmV3U3Vic2NyaXB0aW9uIiwib2xkU3Vic2NyaXB0aW9uIiwicGFyc2UiLCJzYXZlTG9jYWxTdWJzY3JpcHRpb24iLCJ1cGRhdGVTdWJzY3JpcHRpb24iLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUluc3RhbGwiLCJoYW5kbGVBY3RpdmF0ZSIsImhhbmRsZVB1c2hFdmVudCIsImhhbmRsZUNsaWNrRXZlbnQiLCJoYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24iLCJoYW5kbGVNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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bkQ7QUFDQTlDLElBQUksQ0FBQzBDLGdCQUFMLENBQXNCLHdCQUF0QixFQUFnRDlELE9BQU8sQ0FBQ21FLHdCQUF4RDtBQUNBL0MsSUFBSSxDQUFDMEMsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUM5RCxPQUFPLENBQUNvRSxhQUF6QyxFIiwiZmlsZSI6InJlYWltLXN3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJyZWFpbS13ZWItc2RrXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWltLXdlYi1zZGtcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zdy5qc1wiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gcHJvbWlzaWZ5O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFNlcnZpY2VXb3JrZXJTdG9yYWdlXG4gKi9cblxudmFyIElEQl9UUkFOU0FDVElPTl9NT0RFID0gZXhwb3J0cy5JREJfVFJBTlNBQ1RJT05fTU9ERSA9IHtcbiAgcmVhZG9ubHk6ICdyZWFkb25seScsXG4gIHJlYWR3cml0ZTogJ3JlYWR3cml0ZScsXG4gIHZlcnNpb25jaGFuZ2U6ICd2ZXJzaW9uY2hhbmdlJ1xufTtcblxuZnVuY3Rpb24gcHJvbWlzaWZ5KGlkYlJlcXVlc3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoaWRiUmVxdWVzdC5yZXN1bHQpO1xuICAgIH07XG4gICAgaWRiUmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxudmFyIFNlcnZpY2VXb3JrZXJTdG9yYWdlID0gZXhwb3J0cy5TZXJ2aWNlV29ya2VyU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmljZVdvcmtlclN0b3JhZ2UoZGJfbmFtZSwgdmVyc2lvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmljZVdvcmtlclN0b3JhZ2UpO1xuXG4gICAgaWYgKHR5cGVvZiBkYl9uYW1lICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignZGJfbmFtZSBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdudW1iZXInKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIG11c3QgYmUgbnVtYmVyLicpO1xuICAgIHZhciBWRVJTSU9OID0gdmVyc2lvbjtcbiAgICB0aGlzLkRCX05BTUUgPSBkYl9uYW1lO1xuICAgIHRoaXMuU1RPUkVfTkFNRSA9ICdzd19zdG9yYWdlJztcblxuICAgIHZhciBkYiA9IHNlbGYuaW5kZXhlZERCLm9wZW4odGhpcy5EQl9OQU1FLCBWRVJTSU9OKTtcbiAgICBkYi5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKF9kYi5vYmplY3RTdG9yZU5hbWVzICYmIF9kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKF90aGlzLlNUT1JFX05BTUUpKSByZXR1cm47XG4gICAgICBfZGIuY3JlYXRlT2JqZWN0U3RvcmUoX3RoaXMuU1RPUkVfTkFNRSk7XG4gICAgfTtcbiAgICB0aGlzLl9fZGIgPSBwcm9taXNpZnkoZGIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlcnZpY2VXb3JrZXJTdG9yYWdlLCBbe1xuICAgIGtleTogJ19hY2Nlc3NBc3luY1N0b3JlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FjY2Vzc0FzeW5jU3RvcmUobW9kZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9fZGIudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oX3RoaXMyLlNUT1JFX05BTUUsIG1vZGUpO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoX3RoaXMyLlNUT1JFX05BTUUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnkoc3RvcmUuZ2V0QWxsS2V5cygpKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAna2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5KGlkeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGV4ZWN1dGUgXCJrZXlcIiBvbiBcIlN0b3JhZ2VcIicpKTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJykgaWR4ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWRvbmx5KS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KHN0b3JlLmdldEFsbEtleXMoKSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzW2lkeF0gfHwgbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5nZXQoa2V5KTtcbiAgICAgIH0pLnRoZW4ocHJvbWlzaWZ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgICB9KS50aGVuKHByb21pc2lmeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlSXRlbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgIH0pLnRoZW4ocHJvbWlzaWZ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19kYi50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYi5vYmplY3RTdG9yZU5hbWVzLCBJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpO1xuICAgICAgICB2YXIgcSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGIub2JqZWN0U3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBzdG9yZV9uYW1lID0gZGIub2JqZWN0U3RvcmVOYW1lc1tpXTtcbiAgICAgICAgICBxLnB1c2gocHJvbWlzaWZ5KHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlX25hbWUpLmNsZWFyKCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VydmljZVdvcmtlclN0b3JhZ2U7XG59KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aUzVxY3lKZExDSnVZVzFsY3lJNld5SndjbTl0YVhOcFpua2lMQ0pKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlNJc0luSmxZV1J2Ym14NUlpd2ljbVZoWkhkeWFYUmxJaXdpZG1WeWMybHZibU5vWVc1blpTSXNJbWxrWWxKbGNYVmxjM1FpTENKUWNtOXRhWE5sSWl3aWNtVnpiMngyWlNJc0luSmxhbVZqZENJc0ltOXVjM1ZqWTJWemN5SXNJbkpsYzNWc2RDSXNJbTl1WlhKeWIzSWlMQ0pUWlhKMmFXTmxWMjl5YTJWeVUzUnZjbUZuWlNJc0ltUmlYMjVoYldVaUxDSjJaWEp6YVc5dUlpd2lWSGx3WlVWeWNtOXlJaXdpVmtWU1UwbFBUaUlzSWtSQ1gwNUJUVVVpTENKVFZFOVNSVjlPUVUxRklpd2laR0lpTENKelpXeG1JaXdpYVc1a1pYaGxaRVJDSWl3aWIzQmxiaUlzSW05dWRYQm5jbUZrWlc1bFpXUmxaQ0lzSWw5a1lpSXNJbVYyWlc1MElpd2lkR0Z5WjJWMElpd2liMkpxWldOMFUzUnZjbVZPWVcxbGN5SXNJbU52Ym5SaGFXNXpJaXdpWTNKbFlYUmxUMkpxWldOMFUzUnZjbVVpTENKZlgyUmlJaXdpYlc5a1pTSXNJblJvWlc0aUxDSjBjbUZ1YzJGamRHbHZiaUlzSW05aWFtVmpkRk4wYjNKbElpd2lYMkZqWTJWemMwRnplVzVqVTNSdmNtVWlMQ0p6ZEc5eVpTSXNJbWRsZEVGc2JFdGxlWE1pTENKclpYbHpJaXdpYkdWdVozUm9JaXdpYVdSNElpd2lZWEpuZFcxbGJuUnpJaXdpYTJWNUlpd2laMlYwSWl3aWRtRnNkV1VpTENKd2RYUWlMQ0p4SWl3aWFTSXNJbXhsYmlJc0luTjBiM0psWDI1aGJXVWlMQ0p3ZFhOb0lpd2lZMnhsWVhJaUxDSmhiR3dpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08xRkJWV2RDUVN4VExFZEJRVUZCTEZNN096czdRVUZXYUVJN096czdRVUZKVHl4SlFVRk5ReXh6UkVGQmRVSTdRVUZEYkVORExGbEJRVlVzVlVGRWQwSTdRVUZGYkVORExHRkJRVmNzVjBGR2RVSTdRVUZIYkVORExHbENRVUZsTzBGQlNHMUNMRU5CUVRkQ096dEJRVTFCTEZOQlFWTktMRk5CUVZRc1EwRkJiVUpMTEZWQlFXNUNMRVZCUVN0Q08wRkJRM0JETEZOQlFVOHNTVUZCU1VNc1QwRkJTaXhEUVVGWkxGVkJRVk5ETEU5QlFWUXNSVUZCYTBKRExFMUJRV3hDTEVWQlFUQkNPMEZCUXpORFNDeGxRVUZYU1N4VFFVRllMRWRCUVhWQ0xGbEJRVmM3UVVGRGFFTkdMR05CUVZGR0xGZEJRVmRMTEUxQlFXNUNPMEZCUTBRc1MwRkdSRHRCUVVkQlRDeGxRVUZYVFN4UFFVRllMRWRCUVhGQ1NDeE5RVUZ5UWp0QlFVTkVMRWRCVEUwc1EwRkJVRHRCUVUxRU96dEpRVVZaU1N4dlFpeFhRVUZCUVN4dlFqdEJRVU5ZTEdkRFFVRlpReXhQUVVGYUxFVkJRWEZDUXl4UFFVRnlRaXhGUVVFNFFqdEJRVUZCT3p0QlFVRkJPenRCUVVNMVFpeFJRVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVVVGQmRrSXNSVUZCYVVNc1RVRkJUU3hKUVVGSlJTeFRRVUZLTEVOQlFXTXNlVUpCUVdRc1EwRkJUanRCUVVOcVF5eFJRVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVVVGQmRrSXNSVUZCYVVNc1RVRkJUU3hKUVVGSlF5eFRRVUZLTEVOQlFXTXNlVUpCUVdRc1EwRkJUanRCUVVOcVF5eFJRVUZOUXl4VlFVRlZSaXhQUVVGb1FqdEJRVU5CTEZOQlFVdEhMRTlCUVV3c1IwRkJaVW9zVDBGQlpqdEJRVU5CTEZOQlFVdExMRlZCUVV3c1IwRkJhMElzV1VGQmJFSTdPMEZCUlVFc1VVRkJUVU1zUzBGQlMwTXNTMEZCUzBNc1UwRkJUQ3hEUVVGbFF5eEpRVUZtTEVOQlFXOUNMRXRCUVV0TUxFOUJRWHBDTEVWQlFXdERSQ3hQUVVGc1F5eERRVUZZTzBGQlEwRkhMRTlCUVVkSkxHVkJRVWdzUjBGQmNVSXNhVUpCUVZNN1FVRkROVUlzVlVGQlRVTXNUVUZCVFVNc1RVRkJUVU1zVFVGQlRpeERRVUZoYUVJc1RVRkJla0k3UVVGRFFTeFZRVUZKWXl4SlFVRkpSeXhuUWtGQlNpeEpRVUYzUWtnc1NVRkJTVWNzWjBKQlFVb3NRMEZCY1VKRExGRkJRWEpDTEVOQlFUaENMRTFCUVV0V0xGVkJRVzVETEVOQlFUVkNMRVZCUVRSRk8wRkJRelZGVFN4VlFVRkpTeXhwUWtGQlNpeERRVUZ6UWl4TlFVRkxXQ3hWUVVFelFqdEJRVU5FTEV0QlNrUTdRVUZMUVN4VFFVRkxXU3hKUVVGTUxFZEJRVms1UWl4VlFVRlZiVUlzUlVGQlZpeERRVUZhTzBGQlEwUTdPenM3YzBOQlJXbENXU3hKTEVWQlFVMDdRVUZCUVRzN1FVRkRkRUlzWVVGQlR5eExRVUZMUkN4SlFVRk1MRU5CUVZWRkxFbEJRVllzUTBGQlpTeGpRVUZOTzBGQlF6RkNMRmxCUVUxRExHTkJRV05rTEVkQlFVZGpMRmRCUVVnc1EwRkJaU3hQUVVGTFppeFZRVUZ3UWl4RlFVRm5RMkVzU1VGQmFFTXNRMEZCY0VJN1FVRkRRU3hsUVVGUFJTeFpRVUZaUXl4WFFVRmFMRU5CUVhkQ0xFOUJRVXRvUWl4VlFVRTNRaXhEUVVGUU8wRkJRMFFzVDBGSVRTeERRVUZRTzBGQlNVUTdPenMyUWtGRlVUdEJRVU5RTEdGQlFVOHNTMEZCUzJsQ0xHbENRVUZNTEVOQlFYVkNiRU1zY1VKQlFYRkNReXhSUVVFMVF5eEZRVU5LT0VJc1NVRkVTU3hEUVVORE8wRkJRVUVzWlVGQlUyaERMRlZCUVZWdlF5eE5RVUZOUXl4VlFVRk9MRVZCUVZZc1EwRkJWRHRCUVVGQkxFOUJSRVFzUlVGRlNrd3NTVUZHU1N4RFFVVkRPMEZCUVVFc1pVRkJVVTBzUzBGQlMwTXNUVUZCWWp0QlFVRkJMRTlCUmtRc1EwRkJVRHRCUVVkRU96czdkMEpCUlVkRExFY3NSVUZCU3p0QlFVTlFMRlZCUVVrc1EwRkJRME1zVlVGQlZVWXNUVUZCWml4RlFVRjFRaXhQUVVGUGFrTXNVVUZCVVVVc1RVRkJVaXhEUVVGbExFbEJRVWxQTEZOQlFVb3NRMEZCWXl4elEwRkJaQ3hEUVVGbUxFTkJRVkE3UVVGRGRrSXNWVUZCU1N4UFFVRlBlVUlzUjBGQlVDeExRVUZsTEZGQlFXNUNMRVZCUVRaQ1FTeE5RVUZOTEVOQlFVNDdRVUZETjBJc1lVRkJUeXhMUVVGTFRDeHBRa0ZCVEN4RFFVRjFRbXhETEhGQ1FVRnhRa01zVVVGQk5VTXNSVUZEU2poQ0xFbEJSRWtzUTBGRFF6dEJRVUZCTEdWQlFWTm9ReXhWUVVGVmIwTXNUVUZCVFVNc1ZVRkJUaXhGUVVGV0xFTkJRVlE3UVVGQlFTeFBRVVJFTEVWQlJVcE1MRWxCUmtrc1EwRkZRenRCUVVGQkxHVkJRVkZOTEV0QlFVdEZMRWRCUVV3c1MwRkJZU3hKUVVGeVFqdEJRVUZCTEU5QlJrUXNRMEZCVUR0QlFVZEVPenM3TkVKQlJVOUZMRWNzUlVGQlN6dEJRVU5ZTEdGQlFVOHNTMEZCUzFBc2FVSkJRVXdzUTBGQmRVSnNReXh4UWtGQmNVSkRMRkZCUVRWRExFVkJRMG80UWl4SlFVUkpMRU5CUTBNN1FVRkJRU3hsUVVGVFNTeE5RVUZOVHl4SFFVRk9MRU5CUVZWRUxFZEJRVllzUTBGQlZEdEJRVUZCTEU5QlJFUXNSVUZGU2xZc1NVRkdTU3hEUVVWRGFFTXNVMEZHUkN4RFFVRlFPMEZCUjBRN096czBRa0ZEVHpCRExFY3NSVUZCUzBVc1N5eEZRVUZQTzBGQlEyeENMR0ZCUVU4c1MwRkJTMVFzYVVKQlFVd3NRMEZCZFVKc1F5eHhRa0ZCY1VKRkxGTkJRVFZETEVWQlEwbzJRaXhKUVVSSkxFTkJRME03UVVGQlFTeGxRVUZUU1N4TlFVRk5VeXhIUVVGT0xFTkJRVlZFTEV0QlFWWXNSVUZCYVVKR0xFZEJRV3BDTEVOQlFWUTdRVUZCUVN4UFFVUkVMRVZCUlVwV0xFbEJSa2tzUTBGRlEyaERMRk5CUmtRc1EwRkJVRHRCUVVkRU96czdLMEpCUTFVd1F5eEhMRVZCUVVzN1FVRkRaQ3hoUVVGUExFdEJRVXRRTEdsQ1FVRk1MRU5CUVhWQ2JFTXNjVUpCUVhGQ1JTeFRRVUUxUXl4RlFVTktOa0lzU1VGRVNTeERRVU5ETzBGQlFVRXNaVUZCVTBrc1RVRkJUU3hSUVVGT0xFVkJRV2RDVFN4SFFVRm9RaXhEUVVGVU8wRkJRVUVzVDBGRVJDeEZRVVZLVml4SlFVWkpMRU5CUlVOb1F5eFRRVVpFTEVOQlFWQTdRVUZIUkRzN096UkNRVU5QTzBGQlEwNHNZVUZCVHl4TFFVRkxPRUlzU1VGQlRDeERRVU5LUlN4SlFVUkpMRU5CUTBNc1kwRkJUVHRCUVVOV0xGbEJRVTFETEdOQlFXTmtMRWRCUVVkakxGZEJRVWdzUTBGQlpXUXNSMEZCUjFFc1owSkJRV3hDTEVWQlFXOURNVUlzY1VKQlFYRkNSU3hUUVVGNlJDeERRVUZ3UWp0QlFVTkJMRmxCUVUweVF5eEpRVUZKTEVWQlFWWTdRVUZEUVN4aFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQlVpeEZRVUZYUXl4TlFVRk5OMElzUjBGQlIxRXNaMEpCUVVnc1EwRkJiMEpaTEUxQlFURkRMRVZCUVd0RVVTeEpRVUZKUXl4SFFVRjBSQ3hGUVVFeVJFUXNSMEZCTTBRc1JVRkJaMFU3UVVGRE9VUXNZMEZCU1VVc1lVRkJZVGxDTEVkQlFVZFJMR2RDUVVGSUxFTkJRVzlDYjBJc1EwRkJjRUlzUTBGQmFrSTdRVUZEUVVRc1dVRkJSVWtzU1VGQlJpeERRVUZQYkVRc1ZVRkJWV2xETEZsQlFWbERMRmRCUVZvc1EwRkJkMEpsTEZWQlFYaENMRVZCUVc5RFJTeExRVUZ3UXl4RlFVRldMRU5CUVZBN1FVRkRSRHRCUVVORUxHVkJRVTgzUXl4UlFVRlJPRU1zUjBGQlVpeERRVUZaVGl4RFFVRmFMRU5CUVZBN1FVRkRSQ3hQUVZSSkxFTkJRVkE3UVVGVlJDSXNJbVpwYkdVaU9pSlRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1UyVnlkbWxqWlZkdmNtdGxjbE4wYjNKaFoyVmNiaUFxTDF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1VSQ1gxUlNRVTVUUVVOVVNVOU9YMDFQUkVVZ1BTQjdYRzRnSUhKbFlXUnZibXg1T2lBbmNtVmhaRzl1YkhrbkxGeHVJQ0J5WldGa2QzSnBkR1U2SUNkeVpXRmtkM0pwZEdVbkxGeHVJQ0IyWlhKemFXOXVZMmhoYm1kbE9pQW5kbVZ5YzJsdmJtTm9ZVzVuWlNkY2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ3Y205dGFYTnBabmtvYVdSaVVtVnhkV1Z6ZENrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z0lDQWdhV1JpVW1WeGRXVnpkQzV2Ym5OMVkyTmxjM01nUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lISmxjMjlzZG1Vb2FXUmlVbVZ4ZFdWemRDNXlaWE4xYkhRcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYVdSaVVtVnhkV1Z6ZEM1dmJtVnljbTl5SUQwZ2NtVnFaV04wTzF4dUlDQjlLVHRjYm4xY2JseHVaWGh3YjNKMElHTnNZWE56SUZObGNuWnBZMlZYYjNKclpYSlRkRzl5WVdkbElIdGNiaUFnWTI5dWMzUnlkV04wYjNJb1pHSmZibUZ0WlN3Z2RtVnljMmx2YmlrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1pHSmZibUZ0WlNBaFBUMGdKM04wY21sdVp5Y3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjJSaVgyNWhiV1VnYlhWemRDQmlaU0J6ZEhKcGJtY3VKeWs3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIyWlhKemFXOXVJQ0U5UFNBbmJuVnRZbVZ5SnlrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25kbVZ5YzJsdmJpQnRkWE4wSUdKbElHNTFiV0psY2k0bktUdGNiaUFnSUNCamIyNXpkQ0JXUlZKVFNVOU9JRDBnZG1WeWMybHZianRjYmlBZ0lDQjBhR2x6TGtSQ1gwNUJUVVVnUFNCa1lsOXVZVzFsTzF4dUlDQWdJSFJvYVhNdVUxUlBVa1ZmVGtGTlJTQTlJQ2R6ZDE5emRHOXlZV2RsSnp0Y2JseHVJQ0FnSUdOdmJuTjBJR1JpSUQwZ2MyVnNaaTVwYm1SbGVHVmtSRUl1YjNCbGJpaDBhR2x6TGtSQ1gwNUJUVVVzSUZaRlVsTkpUMDRwTzF4dUlDQWdJR1JpTG05dWRYQm5jbUZrWlc1bFpXUmxaQ0E5SUdWMlpXNTBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRjlrWWlBOUlHVjJaVzUwTG5SaGNtZGxkQzV5WlhOMWJIUTdYRzRnSUNBZ0lDQnBaaUFvWDJSaUxtOWlhbVZqZEZOMGIzSmxUbUZ0WlhNZ0ppWWdYMlJpTG05aWFtVmpkRk4wYjNKbFRtRnRaWE11WTI5dWRHRnBibk1vZEdocGN5NVRWRTlTUlY5T1FVMUZLU2tnY21WMGRYSnVPMXh1SUNBZ0lDQWdYMlJpTG1OeVpXRjBaVTlpYW1WamRGTjBiM0psS0hSb2FYTXVVMVJQVWtWZlRrRk5SU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQjBhR2x6TGw5ZlpHSWdQU0J3Y205dGFYTnBabmtvWkdJcE8xeHVJQ0I5WEc1Y2JpQWdYMkZqWTJWemMwRnplVzVqVTNSdmNtVW9iVzlrWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZaR0l1ZEdobGJpaGtZaUE5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0IwY21GdWMyRmpkR2x2YmlBOUlHUmlMblJ5WVc1ellXTjBhVzl1S0hSb2FYTXVVMVJQVWtWZlRrRk5SU3dnYlc5a1pTazdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISmhibk5oWTNScGIyNHViMkpxWldOMFUzUnZjbVVvZEdocGN5NVRWRTlTUlY5T1FVMUZLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUd4bGJtZDBhQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllXTmpaWE56UVhONWJtTlRkRzl5WlNoSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrYjI1c2VTbGNiaUFnSUNBZ0lDNTBhR1Z1S0hOMGIzSmxJRDArSUhCeWIyMXBjMmxtZVNoemRHOXlaUzVuWlhSQmJHeExaWGx6S0NrcEtWeHVJQ0FnSUNBZ0xuUm9aVzRvYTJWNWN5QTlQaUJyWlhsekxteGxibWQwYUNrN1hHNGdJSDFjYmx4dUlDQnJaWGtvYVdSNEtTQjdYRzRnSUNBZ2FXWWdLQ0ZoY21kMWJXVnVkSE11YkdWdVozUm9LU0J5WlhSMWNtNGdVSEp2YldselpTNXlaV3BsWTNRb2JtVjNJRlI1Y0dWRmNuSnZjaWduUm1GcGJHVmtJSFJ2SUdWNFpXTjFkR1VnWENKclpYbGNJaUJ2YmlCY0lsTjBiM0poWjJWY0lpY3BLVHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR2xrZUNBaFBUMGdKMjUxYldKbGNpY3BJR2xrZUNBOUlEQTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMkZqWTJWemMwRnplVzVqVTNSdmNtVW9TVVJDWDFSU1FVNVRRVU5VU1U5T1gwMVBSRVV1Y21WaFpHOXViSGtwWEc0Z0lDQWdJQ0F1ZEdobGJpaHpkRzl5WlNBOVBpQndjbTl0YVhOcFpua29jM1J2Y21VdVoyVjBRV3hzUzJWNWN5Z3BLU2xjYmlBZ0lDQWdJQzUwYUdWdUtHdGxlWE1nUFQ0Z2EyVjVjMXRwWkhoZElIeDhJRzUxYkd3cE8xeHVJQ0I5WEc1Y2JpQWdaMlYwU1hSbGJTaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllXTmpaWE56UVhONWJtTlRkRzl5WlNoSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrYjI1c2VTbGNiaUFnSUNBZ0lDNTBhR1Z1S0hOMGIzSmxJRDArSUhOMGIzSmxMbWRsZENoclpYa3BLVnh1SUNBZ0lDQWdMblJvWlc0b2NISnZiV2x6YVdaNUtUdGNiaUFnZlZ4dUlDQnpaWFJKZEdWdEtHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWVdOalpYTnpRWE41Ym1OVGRHOXlaU2hKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlM1eVpXRmtkM0pwZEdVcFhHNGdJQ0FnSUNBdWRHaGxiaWh6ZEc5eVpTQTlQaUJ6ZEc5eVpTNXdkWFFvZG1Gc2RXVXNJR3RsZVNrcFhHNGdJQ0FnSUNBdWRHaGxiaWh3Y205dGFYTnBabmtwTzF4dUlDQjlYRzRnSUhKbGJXOTJaVWwwWlcwb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJGalkyVnpjMEZ6ZVc1alUzUnZjbVVvU1VSQ1gxUlNRVTVUUVVOVVNVOU9YMDFQUkVVdWNtVmhaSGR5YVhSbEtWeHVJQ0FnSUNBZ0xuUm9aVzRvYzNSdmNtVWdQVDRnYzNSdmNtVmJKMlJsYkdWMFpTZGRLR3RsZVNrcFhHNGdJQ0FnSUNBdWRHaGxiaWh3Y205dGFYTnBabmtwTzF4dUlDQjlYRzRnSUdOc1pXRnlLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlpHSmNiaUFnSUNBZ0lDNTBhR1Z1S0dSaUlEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkSEpoYm5OaFkzUnBiMjRnUFNCa1lpNTBjbUZ1YzJGamRHbHZiaWhrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6TENCSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrZDNKcGRHVXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnhJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc1pXNGdQU0JrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6TG14bGJtZDBhRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnYkdWMElITjBiM0psWDI1aGJXVWdQU0JrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJSEV1Y0hWemFDaHdjbTl0YVhOcFpua29kSEpoYm5OaFkzUnBiMjR1YjJKcVpXTjBVM1J2Y21Vb2MzUnZjbVZmYm1GdFpTa3VZMnhsWVhJb0tTa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbUZzYkNoeEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNCOVhHNTlYRzVjYmlKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfU2VydmljZVdvcmtlclN0b3JhZ2UgPSByZXF1aXJlKCcuL1NlcnZpY2VXb3JrZXJTdG9yYWdlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gX1NlcnZpY2VXb3JrZXJTdG9yYWdlLlNlcnZpY2VXb3JrZXJTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEJRVVZCUVN4UFFVRlBReXhQUVVGUUlpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVMlZ5ZG1salpWZHZjbXRsY2xOMGIzSmhaMlVnZlNCbWNtOXRJQ2N1TDFObGNuWnBZMlZYYjNKclpYSlRkRzl5WVdkbExtcHpKenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCVFpYSjJhV05sVjI5eWEyVnlVM1J2Y21GblpUdGNiaUpkZlE9PSIsImV4cG9ydCBjb25zdCBQUk9EVUNUSU9OID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyk7XG5jb25zdCBMT0NBTF9FVkVOVFNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NSc7XG5jb25zdCBMT0NBTF9TVUJTX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjQzNDMnO1xuY29uc3QgUFJPRF9FVkVOVFNfQVBJID0gJ2h0dHBzOi8vZXZlbnRzLnJlYWltLm1lJztcbmNvbnN0IFBST0RfU1VCU19BUEkgPSAnaHR0cHM6Ly9zdWJzLnJlYWltLm1lJztcblxuZXhwb3J0IGNvbnN0IFJFQUlNX1NES19WSVNJVFMgPSAncmVhaW1fc2RrX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fREVOSUVEX09OX1ZJU0lUUyA9ICdyZWFpbV9zZGtfZGVuaWVkX29uX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQgPSAncmVhaW1fc2RrX3B1c2hfdXNlcl9zdWJzY3JpYmVkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9VSUQgPSAncmVhaW1fc2RrX3VpZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04gPSAncmVhaW1fc2F2ZV9zdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0VWRU5UU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0VWRU5UU19BUEkgOiBQUk9EX0VWRU5UU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1VCU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX1NVQlNfQVBJIDogUFJPRF9TVUJTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVE9SQUdFX05BTUUgPSAncmVhaW1fc2RrX3N0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0lNUFJFU1NJT04gPSAnaSc7XG5leHBvcnQgY29uc3QgUkVBSU1fQ0xJQ0sgPSAnYyc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJztcbi8qIGVzbGludC1lbmFibGUgKi9cbmltcG9ydCBTZXJ2aWNlV29ya2VyU3RvcmFnZSBmcm9tICdzZXJ2aWNld29ya2VyLXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04sXG4gIFJFQUlNX0VWRU5UU19BUEksXG4gIFJFQUlNX1NVQlNfQVBJLFxuICBSRUFJTV9TVE9SQUdFX05BTUUsXG4gIFJFQUlNX0lNUFJFU1NJT04sXG4gIFJFQUlNX0NMSUNLLFxuICBSRUFJTV9VSURcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzdG9yYWdlID0gbmV3IFNlcnZpY2VXb3JrZXJTdG9yYWdlKFJFQUlNX1NUT1JBR0VfTkFNRSwgMSk7XG5cbmNsYXNzIFJlQWltU1cge1xuXG4gIHN0YXRpYyBhc3luYyBsb2coa2luZCwgdHJhY2tpbmcsIHZhcmlhbnQpIHtcbiAgICBpZiAoa2luZCAmJiB0cmFja2luZyAmJiB2YXJpYW50KSB7XG4gICAgICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICAgICAgY2FzZSAnY21wJzpcbiAgICAgICAgICBmZXRjaChgJHtSRUFJTV9FVkVOVFNfQVBJfS9sb2c/az0ke2tpbmR9JiR7YXRvYih0cmFja2luZyl9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RyZyc6XG4gICAgICAgICAgZmV0Y2goYCR7UkVBSU1fRVZFTlRTX0FQSX0vdHJpZ2dlcj9rPSR7a2luZH0mJHthdG9iKHRyYWNraW5nKX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZmVlZCc6XG4gICAgICAgICAgZmV0Y2goYCR7UkVBSU1fRVZFTlRTX0FQSX0vZmVlZD9rPSR7a2luZH0mJHthdG9iKHRyYWNraW5nKX1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgdXBkYXRlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFJFQUlNX1VJRCk7XG5cbiAgICAgIGlmIChpZCkge1xuICAgICAgICBjb25zdCByZXEgPSBuZXcgUmVxdWVzdChgJHtSRUFJTV9TVUJTX0FQSX0vcmVmcmVzaGAsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGVuZHBvaW50OiBzdWJzY3JpcHRpb24uZW5kcG9pbnQsXG4gICAgICAgICAgICBhdXRoOiBzdWJzY3JpcHRpb24ua2V5cy5hdXRoLFxuICAgICAgICAgICAgcDI1NmRoOiBzdWJzY3JpcHRpb24ua2V5cy5wMjU2ZGhcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxmLmZldGNoKHJlcSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVJbnN0YWxsKGV2ZW50KSB7XG4gICAgc2VsZi5za2lwV2FpdGluZygpO1xuICB9XG5cbiAgc3RhdGljIGhhbmRsZUFjdGl2YXRlKGV2ZW50KSB7XG4gICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5jbGFpbSgpKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVQdXNoRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZXZlbnQuZGF0YS5qc29uKCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IHBheWxvYWQuYy50O1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBib2R5OiBwYXlsb2FkLmMuZCxcbiAgICAgIGljb246IHBheWxvYWQuYy5pLFxuICAgICAgaW1hZ2U6IHBheWxvYWQuYy5tLFxuICAgICAgYmFkZ2U6IHBheWxvYWQuYy5iLFxuICAgICAgYWN0aW9uczogcGF5bG9hZC5jLmEsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRyYWNraW5nOiBwYXlsb2FkLnQsXG4gICAgICAgIHVybDogcGF5bG9hZC5jLnUsXG4gICAgICAgIGFjdGlvbnM6IHBheWxvYWQuYy5hLFxuICAgICAgICB2YXJpYW50OiBwYXlsb2FkLnZcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVBaW1TVy5sb2coUkVBSU1fSU1QUkVTU0lPTiwgcGF5bG9hZC50LCBwYXlsb2FkLnYpO1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLnJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKHRpdGxlLCBvcHRpb25zKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlQ2xpY2tFdmVudChldmVudCkge1xuICAgIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuICAgIGNvbnN0IHRyYWNraW5nID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudHJhY2tpbmc7XG4gICAgY29uc3QgdmFyaWFudCA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnZhcmlhbnQgfHwgJ2NtcCc7XG5cbiAgICBpZiAoZXZlbnQuYWN0aW9uID09PSAnYWN0aW9uLTEnKSB7XG4gICAgICBjb25zdCB1cmwgPSBldmVudC5ub3RpZmljYXRpb24uZGF0YS5hY3Rpb25zWzBdLnVybDtcblxuICAgICAgUmVBaW1TVy5sb2coUkVBSU1fQ0xJQ0ssIHRyYWNraW5nLCB2YXJpYW50KTtcbiAgICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMub3BlbldpbmRvdyh1cmwpKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmFjdGlvbiA9PT0gJ2FjdGlvbi0yJykge1xuICAgICAgY29uc3QgdXJsID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGEuYWN0aW9uc1sxXS51cmw7XG5cbiAgICAgIFJlQWltU1cubG9nKFJFQUlNX0NMSUNLLCB0cmFja2luZywgdmFyaWFudCk7XG4gICAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLm9wZW5XaW5kb3codXJsKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChldmVudC5ub3RpZmljYXRpb24uZGF0YS51cmwpIHtcbiAgICAgICAgUmVBaW1TVy5sb2coUkVBSU1fQ0xJQ0ssIHRyYWNraW5nLCB2YXJpYW50KTtcbiAgICAgICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5vcGVuV2luZG93KGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnVybCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBuZXdTdWJzY3JpcHRpb24gPSBhd2FpdCBzZWxmLnJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcbiAgICBjb25zdCBvbGRTdWJzY3JpcHRpb24gPSBKU09OLnBhcnNlKGF3YWl0IHN0b3JhZ2UuZ2V0SXRlbSgnc3Vic2NyaXB0aW9uJykpO1xuXG4gICAgaWYgKCFvbGRTdWJzY3JpcHRpb24pIHtcbiAgICAgIFJlQWltU1cuc2F2ZUxvY2FsU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgICBSZUFpbVNXLnVwZGF0ZVN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb24pO1xuICAgIH1cblxuICAgIGlmIChuZXdTdWJzY3JpcHRpb24gJiYgb2xkU3Vic2NyaXB0aW9uICYmIChuZXdTdWJzY3JpcHRpb24uZW5kcG9pbnQgIT09IG9sZFN1YnNjcmlwdGlvbi5lbmRwb2ludCkpIHtcbiAgICAgIFJlQWltU1cuc2F2ZUxvY2FsU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgICBSZUFpbVNXLnVwZGF0ZVN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBzYXZlTG9jYWxTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgYXdhaXQgc3RvcmFnZS5zZXRJdGVtKCdzdWJzY3JpcHRpb24nLCBzdWJzY3JpcHRpb24pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YS5hY3Rpb24gPT09IFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OKSB7XG4gICAgICBldmVudC53YWl0VW50aWwoUmVBaW1TVy5zYXZlTG9jYWxTdWJzY3JpcHRpb24oZXZlbnQuZGF0YS5zdWJzY3JpcHRpb24pKTtcbiAgICB9XG4gIH1cbn1cblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgUmVBaW1TVy5oYW5kbGVJbnN0YWxsKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCBSZUFpbVNXLmhhbmRsZUFjdGl2YXRlKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaCcsIFJlQWltU1cuaGFuZGxlUHVzaEV2ZW50KTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbm90aWZpY2F0aW9uY2xpY2snLCBSZUFpbVNXLmhhbmRsZUNsaWNrRXZlbnQpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoc3Vic2NyaXB0aW9uY2hhbmdlJywgUmVBaW1TVy5oYW5kbGVVcGRhdGVTdWJzY3JpcHRpb24pO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgUmVBaW1TVy5oYW5kbGVNZXNzYWdlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=