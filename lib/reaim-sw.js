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
      _regeneratorRuntime.default.mark(function _callee(kind, tracking) {
        return _regeneratorRuntime.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (kind && tracking) {
                  fetch("".concat(_constants.REAIM_EVENTS_API, "/log?k=").concat(kind, "&").concat(atob(tracking)));
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

      function updateSubscription(_x3) {
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
                  data: {
                    tracking: payload.t,
                    url: payload.c.u
                  }
                };
                ReAimSW.log(_constants.REAIM_IMPRESSION, payload.t);
                event.waitUntil(self.registration.showNotification(title, options));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handlePushEvent(_x4) {
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
        return _regeneratorRuntime.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.notification.close();

                if (event.notification.data.url) {
                  ReAimSW.log(_constants.REAIM_CLICK, event.notification.data.tracking);
                  event.waitUntil(self.clients.openWindow(event.notification.data.url));
                }

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleClickEvent(_x5) {
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

      function handleUpdateSubscription(_x6) {
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

      function saveLocalSubscription(_x7) {
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

      function handleMessage(_x8) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvc2VydmljZXdvcmtlci1zdG9yYWdlL2xpYi9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2V3b3JrZXItc3RvcmFnZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9zdy5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsIkxPQ0FMX0VWRU5UU19BUEkiLCJMT0NBTF9TVUJTX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04iLCJSRUFJTV9FVkVOVFNfQVBJIiwiUkVBSU1fU1VCU19BUEkiLCJSRUFJTV9TVE9SQUdFX05BTUUiLCJSRUFJTV9JTVBSRVNTSU9OIiwiUkVBSU1fQ0xJQ0siLCJzdG9yYWdlIiwiUmVBaW1TVyIsImtpbmQiLCJ0cmFja2luZyIsImZldGNoIiwiYXRvYiIsInN1YnNjcmlwdGlvbiIsImlkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlcSIsIlJlcXVlc3QiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50IiwiYXV0aCIsImtleXMiLCJwMjU2ZGgiLCJzZWxmIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImV2ZW50Iiwic2tpcFdhaXRpbmciLCJ3YWl0VW50aWwiLCJjbGllbnRzIiwiY2xhaW0iLCJwYXlsb2FkIiwiZGF0YSIsImpzb24iLCJ0aXRsZSIsImMiLCJ0Iiwib3B0aW9ucyIsImQiLCJpY29uIiwiaSIsImltYWdlIiwibSIsImJhZGdlIiwiYiIsInVybCIsInUiLCJyZWdpc3RyYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJvcGVuV2luZG93IiwicHVzaE1hbmFnZXIiLCJnZXRTdWJzY3JpcHRpb24iLCJuZXdTdWJzY3JpcHRpb24iLCJvbGRTdWJzY3JpcHRpb24iLCJwYXJzZSIsInNhdmVMb2NhbFN1YnNjcmlwdGlvbiIsInVwZGF0ZVN1YnNjcmlwdGlvbiIsInNldEl0ZW0iLCJhY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlSW5zdGFsbCIsImhhbmRsZUFjdGl2YXRlIiwiaGFuZGxlUHVzaEV2ZW50IiwiaGFuZGxlQ2xpY2tFdmVudCIsImhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbiIsImhhbmRsZU1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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T0FBTyxDQUFDZ0UsYUFBekMsRSIsImZpbGUiOiJyZWFpbS1zdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicmVhaW0td2ViLXNka1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWltLXdlYi1zZGtcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3cuanNcIik7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLnByb21pc2lmeSA9IHByb21pc2lmeTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBTZXJ2aWNlV29ya2VyU3RvcmFnZVxuICovXG5cbnZhciBJREJfVFJBTlNBQ1RJT05fTU9ERSA9IGV4cG9ydHMuSURCX1RSQU5TQUNUSU9OX01PREUgPSB7XG4gIHJlYWRvbmx5OiAncmVhZG9ubHknLFxuICByZWFkd3JpdGU6ICdyZWFkd3JpdGUnLFxuICB2ZXJzaW9uY2hhbmdlOiAndmVyc2lvbmNoYW5nZSdcbn07XG5cbmZ1bmN0aW9uIHByb21pc2lmeShpZGJSZXF1ZXN0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWRiUmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNvbHZlKGlkYlJlcXVlc3QucmVzdWx0KTtcbiAgICB9O1xuICAgIGlkYlJlcXVlc3Qub25lcnJvciA9IHJlamVjdDtcbiAgfSk7XG59XG5cbnZhciBTZXJ2aWNlV29ya2VyU3RvcmFnZSA9IGV4cG9ydHMuU2VydmljZVdvcmtlclN0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcnZpY2VXb3JrZXJTdG9yYWdlKGRiX25hbWUsIHZlcnNpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlcnZpY2VXb3JrZXJTdG9yYWdlKTtcblxuICAgIGlmICh0eXBlb2YgZGJfbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RiX25hbWUgbXVzdCBiZSBzdHJpbmcuJyk7XG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBtdXN0IGJlIG51bWJlci4nKTtcbiAgICB2YXIgVkVSU0lPTiA9IHZlcnNpb247XG4gICAgdGhpcy5EQl9OQU1FID0gZGJfbmFtZTtcbiAgICB0aGlzLlNUT1JFX05BTUUgPSAnc3dfc3RvcmFnZSc7XG5cbiAgICB2YXIgZGIgPSBzZWxmLmluZGV4ZWREQi5vcGVuKHRoaXMuREJfTkFNRSwgVkVSU0lPTik7XG4gICAgZGIub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX2RiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIGlmIChfZGIub2JqZWN0U3RvcmVOYW1lcyAmJiBfZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhfdGhpcy5TVE9SRV9OQU1FKSkgcmV0dXJuO1xuICAgICAgX2RiLmNyZWF0ZU9iamVjdFN0b3JlKF90aGlzLlNUT1JFX05BTUUpO1xuICAgIH07XG4gICAgdGhpcy5fX2RiID0gcHJvbWlzaWZ5KGRiKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTZXJ2aWNlV29ya2VyU3RvcmFnZSwgW3tcbiAgICBrZXk6ICdfYWNjZXNzQXN5bmNTdG9yZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9hY2Nlc3NBc3luY1N0b3JlKG1vZGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5fX2RiLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIHZhciB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKF90aGlzMi5TVE9SRV9OQU1FLCBtb2RlKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKF90aGlzMi5TVE9SRV9OQU1FKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xlbmd0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWRvbmx5KS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KHN0b3JlLmdldEFsbEtleXMoKSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2tleScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGtleShpZHgpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCB0byBleGVjdXRlIFwia2V5XCIgb24gXCJTdG9yYWdlXCInKSk7XG4gICAgICBpZiAodHlwZW9mIGlkeCAhPT0gJ251bWJlcicpIGlkeCA9IDA7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkb25seSkudGhlbihmdW5jdGlvbiAoc3RvcmUpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeShzdG9yZS5nZXRBbGxLZXlzKCkpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoa2V5cykge1xuICAgICAgICByZXR1cm4ga2V5c1tpZHhdIHx8IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWRvbmx5KS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmUuZ2V0KGtleSk7XG4gICAgICB9KS50aGVuKHByb21pc2lmeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0SXRlbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZHdyaXRlKS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xuICAgICAgfSkudGhlbihwcm9taXNpZnkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZUl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVJdGVtKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZHdyaXRlKS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gc3RvcmVbJ2RlbGV0ZSddKGtleSk7XG4gICAgICB9KS50aGVuKHByb21pc2lmeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9fZGIudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oZGIub2JqZWN0U3RvcmVOYW1lcywgSURCX1RSQU5TQUNUSU9OX01PREUucmVhZHdyaXRlKTtcbiAgICAgICAgdmFyIHEgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRiLm9iamVjdFN0b3JlTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICB2YXIgc3RvcmVfbmFtZSA9IGRiLm9iamVjdFN0b3JlTmFtZXNbaV07XG4gICAgICAgICAgcS5wdXNoKHByb21pc2lmeSh0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZV9uYW1lKS5jbGVhcigpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNlcnZpY2VXb3JrZXJTdG9yYWdlO1xufSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlUWlhKMmFXTmxWMjl5YTJWeVUzUnZjbUZuWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUp3Y205dGFYTnBabmtpTENKSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTSXNJbkpsWVdSdmJteDVJaXdpY21WaFpIZHlhWFJsSWl3aWRtVnljMmx2Ym1Ob1lXNW5aU0lzSW1sa1lsSmxjWFZsYzNRaUxDSlFjbTl0YVhObElpd2ljbVZ6YjJ4MlpTSXNJbkpsYW1WamRDSXNJbTl1YzNWalkyVnpjeUlzSW5KbGMzVnNkQ0lzSW05dVpYSnliM0lpTENKVFpYSjJhV05sVjI5eWEyVnlVM1J2Y21GblpTSXNJbVJpWDI1aGJXVWlMQ0oyWlhKemFXOXVJaXdpVkhsd1pVVnljbTl5SWl3aVZrVlNVMGxQVGlJc0lrUkNYMDVCVFVVaUxDSlRWRTlTUlY5T1FVMUZJaXdpWkdJaUxDSnpaV3htSWl3aWFXNWtaWGhsWkVSQ0lpd2liM0JsYmlJc0ltOXVkWEJuY21Ga1pXNWxaV1JsWkNJc0lsOWtZaUlzSW1WMlpXNTBJaXdpZEdGeVoyVjBJaXdpYjJKcVpXTjBVM1J2Y21WT1lXMWxjeUlzSW1OdmJuUmhhVzV6SWl3aVkzSmxZWFJsVDJKcVpXTjBVM1J2Y21VaUxDSmZYMlJpSWl3aWJXOWtaU0lzSW5Sb1pXNGlMQ0owY21GdWMyRmpkR2x2YmlJc0ltOWlhbVZqZEZOMGIzSmxJaXdpWDJGalkyVnpjMEZ6ZVc1alUzUnZjbVVpTENKemRHOXlaU0lzSW1kbGRFRnNiRXRsZVhNaUxDSnJaWGx6SWl3aWJHVnVaM1JvSWl3aWFXUjRJaXdpWVhKbmRXMWxiblJ6SWl3aWEyVjVJaXdpWjJWMElpd2lkbUZzZFdVaUxDSndkWFFpTENKeElpd2lhU0lzSW14bGJpSXNJbk4wYjNKbFgyNWhiV1VpTENKd2RYTm9JaXdpWTJ4bFlYSWlMQ0poYkd3aVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPMUZCVldkQ1FTeFRMRWRCUVVGQkxGTTdPenM3UVVGV2FFSTdPenM3UVVGSlR5eEpRVUZOUXl4elJFRkJkVUk3UVVGRGJFTkRMRmxCUVZVc1ZVRkVkMEk3UVVGRmJFTkRMR0ZCUVZjc1YwRkdkVUk3UVVGSGJFTkRMR2xDUVVGbE8wRkJTRzFDTEVOQlFUZENPenRCUVUxQkxGTkJRVk5LTEZOQlFWUXNRMEZCYlVKTExGVkJRVzVDTEVWQlFTdENPMEZCUTNCRExGTkJRVThzU1VGQlNVTXNUMEZCU2l4RFFVRlpMRlZCUVZORExFOUJRVlFzUlVGQmEwSkRMRTFCUVd4Q0xFVkJRVEJDTzBGQlF6TkRTQ3hsUVVGWFNTeFRRVUZZTEVkQlFYVkNMRmxCUVZjN1FVRkRhRU5HTEdOQlFWRkdMRmRCUVZkTExFMUJRVzVDTzBGQlEwUXNTMEZHUkR0QlFVZEJUQ3hsUVVGWFRTeFBRVUZZTEVkQlFYRkNTQ3hOUVVGeVFqdEJRVU5FTEVkQlRFMHNRMEZCVUR0QlFVMUVPenRKUVVWWlNTeHZRaXhYUVVGQlFTeHZRanRCUVVOWUxHZERRVUZaUXl4UFFVRmFMRVZCUVhGQ1F5eFBRVUZ5UWl4RlFVRTRRanRCUVVGQk96dEJRVUZCT3p0QlFVTTFRaXhSUVVGSkxFOUJRVTlFTEU5QlFWQXNTMEZCYlVJc1VVRkJka0lzUlVGQmFVTXNUVUZCVFN4SlFVRkpSU3hUUVVGS0xFTkJRV01zZVVKQlFXUXNRMEZCVGp0QlFVTnFReXhSUVVGSkxFOUJRVTlFTEU5QlFWQXNTMEZCYlVJc1VVRkJka0lzUlVGQmFVTXNUVUZCVFN4SlFVRkpReXhUUVVGS0xFTkJRV01zZVVKQlFXUXNRMEZCVGp0QlFVTnFReXhSUVVGTlF5eFZRVUZWUml4UFFVRm9RanRCUVVOQkxGTkJRVXRITEU5QlFVd3NSMEZCWlVvc1QwRkJaanRCUVVOQkxGTkJRVXRMTEZWQlFVd3NSMEZCYTBJc1dVRkJiRUk3TzBGQlJVRXNVVUZCVFVNc1MwRkJTME1zUzBGQlMwTXNVMEZCVEN4RFFVRmxReXhKUVVGbUxFTkJRVzlDTEV0QlFVdE1MRTlCUVhwQ0xFVkJRV3REUkN4UFFVRnNReXhEUVVGWU8wRkJRMEZITEU5QlFVZEpMR1ZCUVVnc1IwRkJjVUlzYVVKQlFWTTdRVUZETlVJc1ZVRkJUVU1zVFVGQlRVTXNUVUZCVFVNc1RVRkJUaXhEUVVGaGFFSXNUVUZCZWtJN1FVRkRRU3hWUVVGSll5eEpRVUZKUnl4blFrRkJTaXhKUVVGM1FrZ3NTVUZCU1Vjc1owSkJRVW9zUTBGQmNVSkRMRkZCUVhKQ0xFTkJRVGhDTEUxQlFVdFdMRlZCUVc1RExFTkJRVFZDTEVWQlFUUkZPMEZCUXpWRlRTeFZRVUZKU3l4cFFrRkJTaXhEUVVGelFpeE5RVUZMV0N4VlFVRXpRanRCUVVORUxFdEJTa1E3UVVGTFFTeFRRVUZMV1N4SlFVRk1MRWRCUVZrNVFpeFZRVUZWYlVJc1JVRkJWaXhEUVVGYU8wRkJRMFE3T3pzN2MwTkJSV2xDV1N4SkxFVkJRVTA3UVVGQlFUczdRVUZEZEVJc1lVRkJUeXhMUVVGTFJDeEpRVUZNTEVOQlFWVkZMRWxCUVZZc1EwRkJaU3hqUVVGTk8wRkJRekZDTEZsQlFVMURMR05CUVdOa0xFZEJRVWRqTEZkQlFVZ3NRMEZCWlN4UFFVRkxaaXhWUVVGd1FpeEZRVUZuUTJFc1NVRkJhRU1zUTBGQmNFSTdRVUZEUVN4bFFVRlBSU3haUVVGWlF5eFhRVUZhTEVOQlFYZENMRTlCUVV0b1FpeFZRVUUzUWl4RFFVRlFPMEZCUTBRc1QwRklUU3hEUVVGUU8wRkJTVVE3T3pzMlFrRkZVVHRCUVVOUUxHRkJRVThzUzBGQlMybENMR2xDUVVGTUxFTkJRWFZDYkVNc2NVSkJRWEZDUXl4UlFVRTFReXhGUVVOS09FSXNTVUZFU1N4RFFVTkRPMEZCUVVFc1pVRkJVMmhETEZWQlFWVnZReXhOUVVGTlF5eFZRVUZPTEVWQlFWWXNRMEZCVkR0QlFVRkJMRTlCUkVRc1JVRkZTa3dzU1VGR1NTeERRVVZETzBGQlFVRXNaVUZCVVUwc1MwRkJTME1zVFVGQllqdEJRVUZCTEU5QlJrUXNRMEZCVUR0QlFVZEVPenM3ZDBKQlJVZERMRWNzUlVGQlN6dEJRVU5RTEZWQlFVa3NRMEZCUTBNc1ZVRkJWVVlzVFVGQlppeEZRVUYxUWl4UFFVRlBha01zVVVGQlVVVXNUVUZCVWl4RFFVRmxMRWxCUVVsUExGTkJRVW9zUTBGQll5eHpRMEZCWkN4RFFVRm1MRU5CUVZBN1FVRkRka0lzVlVGQlNTeFBRVUZQZVVJc1IwRkJVQ3hMUVVGbExGRkJRVzVDTEVWQlFUWkNRU3hOUVVGTkxFTkJRVTQ3UVVGRE4wSXNZVUZCVHl4TFFVRkxUQ3hwUWtGQlRDeERRVUYxUW14RExIRkNRVUZ4UWtNc1VVRkJOVU1zUlVGRFNqaENMRWxCUkVrc1EwRkRRenRCUVVGQkxHVkJRVk5vUXl4VlFVRlZiME1zVFVGQlRVTXNWVUZCVGl4RlFVRldMRU5CUVZRN1FVRkJRU3hQUVVSRUxFVkJSVXBNTEVsQlJra3NRMEZGUXp0QlFVRkJMR1ZCUVZGTkxFdEJRVXRGTEVkQlFVd3NTMEZCWVN4SlFVRnlRanRCUVVGQkxFOUJSa1FzUTBGQlVEdEJRVWRFT3pzN05FSkJSVTlGTEVjc1JVRkJTenRCUVVOWUxHRkJRVThzUzBGQlMxQXNhVUpCUVV3c1EwRkJkVUpzUXl4eFFrRkJjVUpETEZGQlFUVkRMRVZCUTBvNFFpeEpRVVJKTEVOQlEwTTdRVUZCUVN4bFFVRlRTU3hOUVVGTlR5eEhRVUZPTEVOQlFWVkVMRWRCUVZZc1EwRkJWRHRCUVVGQkxFOUJSRVFzUlVGRlNsWXNTVUZHU1N4RFFVVkRhRU1zVTBGR1JDeERRVUZRTzBGQlIwUTdPenMwUWtGRFR6QkRMRWNzUlVGQlMwVXNTeXhGUVVGUE8wRkJRMnhDTEdGQlFVOHNTMEZCUzFRc2FVSkJRVXdzUTBGQmRVSnNReXh4UWtGQmNVSkZMRk5CUVRWRExFVkJRMG8yUWl4SlFVUkpMRU5CUTBNN1FVRkJRU3hsUVVGVFNTeE5RVUZOVXl4SFFVRk9MRU5CUVZWRUxFdEJRVllzUlVGQmFVSkdMRWRCUVdwQ0xFTkJRVlE3UVVGQlFTeFBRVVJFTEVWQlJVcFdMRWxCUmtrc1EwRkZRMmhETEZOQlJrUXNRMEZCVUR0QlFVZEVPenM3SzBKQlExVXdReXhITEVWQlFVczdRVUZEWkN4aFFVRlBMRXRCUVV0UUxHbENRVUZNTEVOQlFYVkNiRU1zY1VKQlFYRkNSU3hUUVVFMVF5eEZRVU5LTmtJc1NVRkVTU3hEUVVORE8wRkJRVUVzWlVGQlUwa3NUVUZCVFN4UlFVRk9MRVZCUVdkQ1RTeEhRVUZvUWl4RFFVRlVPMEZCUVVFc1QwRkVSQ3hGUVVWS1ZpeEpRVVpKTEVOQlJVTm9ReXhUUVVaRUxFTkJRVkE3UVVGSFJEczdPelJDUVVOUE8wRkJRMDRzWVVGQlR5eExRVUZMT0VJc1NVRkJUQ3hEUVVOS1JTeEpRVVJKTEVOQlEwTXNZMEZCVFR0QlFVTldMRmxCUVUxRExHTkJRV05rTEVkQlFVZGpMRmRCUVVnc1EwRkJaV1FzUjBGQlIxRXNaMEpCUVd4Q0xFVkJRVzlETVVJc2NVSkJRWEZDUlN4VFFVRjZSQ3hEUVVGd1FqdEJRVU5CTEZsQlFVMHlReXhKUVVGSkxFVkJRVlk3UVVGRFFTeGhRVUZMTEVsQlFVbERMRWxCUVVrc1EwRkJVaXhGUVVGWFF5eE5RVUZOTjBJc1IwRkJSMUVzWjBKQlFVZ3NRMEZCYjBKWkxFMUJRVEZETEVWQlFXdEVVU3hKUVVGSlF5eEhRVUYwUkN4RlFVRXlSRVFzUjBGQk0wUXNSVUZCWjBVN1FVRkRPVVFzWTBGQlNVVXNZVUZCWVRsQ0xFZEJRVWRSTEdkQ1FVRklMRU5CUVc5Q2IwSXNRMEZCY0VJc1EwRkJha0k3UVVGRFFVUXNXVUZCUlVrc1NVRkJSaXhEUVVGUGJFUXNWVUZCVldsRExGbEJRVmxETEZkQlFWb3NRMEZCZDBKbExGVkJRWGhDTEVWQlFXOURSU3hMUVVGd1F5eEZRVUZXTEVOQlFWQTdRVUZEUkR0QlFVTkVMR1ZCUVU4M1F5eFJRVUZST0VNc1IwRkJVaXhEUVVGWlRpeERRVUZhTEVOQlFWQTdRVUZEUkN4UFFWUkpMRU5CUVZBN1FVRlZSQ0lzSW1acGJHVWlPaUpUWlhKMmFXTmxWMjl5YTJWeVUzUnZjbUZuWlM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dVMlZ5ZG1salpWZHZjbXRsY2xOMGIzSmhaMlZjYmlBcUwxeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1NVUkNYMVJTUVU1VFFVTlVTVTlPWDAxUFJFVWdQU0I3WEc0Z0lISmxZV1J2Ym14NU9pQW5jbVZoWkc5dWJIa25MRnh1SUNCeVpXRmtkM0pwZEdVNklDZHlaV0ZrZDNKcGRHVW5MRnh1SUNCMlpYSnphVzl1WTJoaGJtZGxPaUFuZG1WeWMybHZibU5vWVc1blpTZGNibjA3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCd2NtOXRhWE5wWm5rb2FXUmlVbVZ4ZFdWemRDa2dlMXh1SUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1NCN1hHNGdJQ0FnYVdSaVVtVnhkV1Z6ZEM1dmJuTjFZMk5sYzNNZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJSEpsYzI5c2RtVW9hV1JpVW1WeGRXVnpkQzV5WlhOMWJIUXBPMXh1SUNBZ0lIMDdYRzRnSUNBZ2FXUmlVbVZ4ZFdWemRDNXZibVZ5Y205eUlEMGdjbVZxWldOME8xeHVJQ0I5S1R0Y2JuMWNibHh1Wlhod2IzSjBJR05zWVhOeklGTmxjblpwWTJWWGIzSnJaWEpUZEc5eVlXZGxJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9aR0pmYm1GdFpTd2dkbVZ5YzJsdmJpa2dlMXh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdaR0pmYm1GdFpTQWhQVDBnSjNOMGNtbHVaeWNwSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oyUmlYMjVoYldVZ2JYVnpkQ0JpWlNCemRISnBibWN1SnlrN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMlpYSnphVzl1SUNFOVBTQW5iblZ0WW1WeUp5a2dkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduZG1WeWMybHZiaUJ0ZFhOMElHSmxJRzUxYldKbGNpNG5LVHRjYmlBZ0lDQmpiMjV6ZENCV1JWSlRTVTlPSUQwZ2RtVnljMmx2Ymp0Y2JpQWdJQ0IwYUdsekxrUkNYMDVCVFVVZ1BTQmtZbDl1WVcxbE8xeHVJQ0FnSUhSb2FYTXVVMVJQVWtWZlRrRk5SU0E5SUNkemQxOXpkRzl5WVdkbEp6dGNibHh1SUNBZ0lHTnZibk4wSUdSaUlEMGdjMlZzWmk1cGJtUmxlR1ZrUkVJdWIzQmxiaWgwYUdsekxrUkNYMDVCVFVVc0lGWkZVbE5KVDA0cE8xeHVJQ0FnSUdSaUxtOXVkWEJuY21Ga1pXNWxaV1JsWkNBOUlHVjJaVzUwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUY5a1lpQTlJR1YyWlc1MExuUmhjbWRsZEM1eVpYTjFiSFE3WEc0Z0lDQWdJQ0JwWmlBb1gyUmlMbTlpYW1WamRGTjBiM0psVG1GdFpYTWdKaVlnWDJSaUxtOWlhbVZqZEZOMGIzSmxUbUZ0WlhNdVkyOXVkR0ZwYm5Nb2RHaHBjeTVUVkU5U1JWOU9RVTFGS1NrZ2NtVjBkWEp1TzF4dUlDQWdJQ0FnWDJSaUxtTnlaV0YwWlU5aWFtVmpkRk4wYjNKbEtIUm9hWE11VTFSUFVrVmZUa0ZOUlNrN1hHNGdJQ0FnZlR0Y2JpQWdJQ0IwYUdsekxsOWZaR0lnUFNCd2NtOXRhWE5wWm5rb1pHSXBPMXh1SUNCOVhHNWNiaUFnWDJGalkyVnpjMEZ6ZVc1alUzUnZjbVVvYlc5a1pTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdJdWRHaGxiaWhrWWlBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMGNtRnVjMkZqZEdsdmJpQTlJR1JpTG5SeVlXNXpZV04wYVc5dUtIUm9hWE11VTFSUFVrVmZUa0ZOUlN3Z2JXOWtaU2s3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSEpoYm5OaFkzUnBiMjR1YjJKcVpXTjBVM1J2Y21Vb2RHaHBjeTVUVkU5U1JWOU9RVTFGS1R0Y2JpQWdJQ0I5S1R0Y2JpQWdmVnh1WEc0Z0lHeGxibWQwYUNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZZV05qWlhOelFYTjVibU5UZEc5eVpTaEpSRUpmVkZKQlRsTkJRMVJKVDA1ZlRVOUVSUzV5WldGa2IyNXNlU2xjYmlBZ0lDQWdJQzUwYUdWdUtITjBiM0psSUQwK0lIQnliMjFwYzJsbWVTaHpkRzl5WlM1blpYUkJiR3hMWlhsektDa3BLVnh1SUNBZ0lDQWdMblJvWlc0b2EyVjVjeUE5UGlCclpYbHpMbXhsYm1kMGFDazdYRzRnSUgxY2JseHVJQ0JyWlhrb2FXUjRLU0I3WEc0Z0lDQWdhV1lnS0NGaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvS1NCeVpYUjFjbTRnVUhKdmJXbHpaUzV5WldwbFkzUW9ibVYzSUZSNWNHVkZjbkp2Y2lnblJtRnBiR1ZrSUhSdklHVjRaV04xZEdVZ1hDSnJaWGxjSWlCdmJpQmNJbE4wYjNKaFoyVmNJaWNwS1R0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUdsa2VDQWhQVDBnSjI1MWJXSmxjaWNwSUdsa2VDQTlJREE3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJGalkyVnpjMEZ6ZVc1alUzUnZjbVVvU1VSQ1gxUlNRVTVUUVVOVVNVOU9YMDFQUkVVdWNtVmhaRzl1YkhrcFhHNGdJQ0FnSUNBdWRHaGxiaWh6ZEc5eVpTQTlQaUJ3Y205dGFYTnBabmtvYzNSdmNtVXVaMlYwUVd4c1MyVjVjeWdwS1NsY2JpQWdJQ0FnSUM1MGFHVnVLR3RsZVhNZ1BUNGdhMlY1YzF0cFpIaGRJSHg4SUc1MWJHd3BPMXh1SUNCOVhHNWNiaUFnWjJWMFNYUmxiU2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZZV05qWlhOelFYTjVibU5UZEc5eVpTaEpSRUpmVkZKQlRsTkJRMVJKVDA1ZlRVOUVSUzV5WldGa2IyNXNlU2xjYmlBZ0lDQWdJQzUwYUdWdUtITjBiM0psSUQwK0lITjBiM0psTG1kbGRDaHJaWGtwS1Z4dUlDQWdJQ0FnTG5Sb1pXNG9jSEp2YldsemFXWjVLVHRjYmlBZ2ZWeHVJQ0J6WlhSSmRHVnRLR3RsZVN3Z2RtRnNkV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllXTmpaWE56UVhONWJtTlRkRzl5WlNoSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrZDNKcGRHVXBYRzRnSUNBZ0lDQXVkR2hsYmloemRHOXlaU0E5UGlCemRHOXlaUzV3ZFhRb2RtRnNkV1VzSUd0bGVTa3BYRzRnSUNBZ0lDQXVkR2hsYmlod2NtOXRhWE5wWm5rcE8xeHVJQ0I5WEc0Z0lISmxiVzkyWlVsMFpXMG9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyRmpZMlZ6YzBGemVXNWpVM1J2Y21Vb1NVUkNYMVJTUVU1VFFVTlVTVTlPWDAxUFJFVXVjbVZoWkhkeWFYUmxLVnh1SUNBZ0lDQWdMblJvWlc0b2MzUnZjbVVnUFQ0Z2MzUnZjbVZiSjJSbGJHVjBaU2RkS0d0bGVTa3BYRzRnSUNBZ0lDQXVkR2hsYmlod2NtOXRhWE5wWm5rcE8xeHVJQ0I5WEc0Z0lHTnNaV0Z5S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZaR0pjYmlBZ0lDQWdJQzUwYUdWdUtHUmlJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEhKaGJuTmhZM1JwYjI0Z1BTQmtZaTUwY21GdWMyRmpkR2x2Ymloa1lpNXZZbXBsWTNSVGRHOXlaVTVoYldWekxDQkpSRUpmVkZKQlRsTkJRMVJKVDA1ZlRVOUVSUzV5WldGa2QzSnBkR1VwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J4SUQwZ1cxMDdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd0xDQnNaVzRnUFNCa1lpNXZZbXBsWTNSVGRHOXlaVTVoYldWekxteGxibWQwYURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JHVjBJSE4wYjNKbFgyNWhiV1VnUFNCa1lpNXZZbXBsWTNSVGRHOXlaVTVoYldWelcybGRPMXh1SUNBZ0lDQWdJQ0FnSUhFdWNIVnphQ2h3Y205dGFYTnBabmtvZEhKaGJuTmhZM1JwYjI0dWIySnFaV04wVTNSdmNtVW9jM1J2Y21WZmJtRnRaU2t1WTJ4bFlYSW9LU2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG1Gc2JDaHhLVHRjYmlBZ0lDQWdJSDBwTzF4dUlDQjlYRzU5WEc1Y2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX1NlcnZpY2VXb3JrZXJTdG9yYWdlID0gcmVxdWlyZSgnLi9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9TZXJ2aWNlV29ya2VyU3RvcmFnZS5TZXJ2aWNlV29ya2VyU3RvcmFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtUmxlQzVxY3lKZExDSnVZVzFsY3lJNld5SnRiMlIxYkdVaUxDSmxlSEJ2Y25SeklsMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRCUVVWQlFTeFBRVUZQUXl4UFFVRlFJaXdpWm1sc1pTSTZJbWx1WkdWNExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnVTJWeWRtbGpaVmR2Y210bGNsTjBiM0poWjJVZ2ZTQm1jbTl0SUNjdUwxTmxjblpwWTJWWGIzSnJaWEpUZEc5eVlXZGxMbXB6Snp0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQlRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aVHRjYmlKZGZRPT0iLCJjb25zdCBQUk9EVUNUSU9OID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyk7XG5jb25zdCBMT0NBTF9FVkVOVFNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTU1NSc7XG5jb25zdCBMT0NBTF9TVUJTX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjQzNDMnO1xuY29uc3QgUFJPRF9FVkVOVFNfQVBJID0gJ2h0dHBzOi8vZXZlbnRzLnJlYWltLm1lJztcbmNvbnN0IFBST0RfU1VCU19BUEkgPSAnaHR0cHM6Ly9zdWJzLnJlYWltLm1lJztcblxuZXhwb3J0IGNvbnN0IFJFQUlNX1NES19WSVNJVFMgPSAncmVhaW1fc2RrX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fREVOSUVEX09OX1ZJU0lUUyA9ICdyZWFpbV9zZGtfZGVuaWVkX29uX3Zpc2l0cyc7XG5leHBvcnQgY29uc3QgUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQgPSAncmVhaW1fc2RrX3B1c2hfdXNlcl9zdWJzY3JpYmVkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9VSUQgPSAncmVhaW1fc2RrX3VpZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04gPSAncmVhaW1fc2F2ZV9zdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0VWRU5UU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0VWRU5UU19BUEkgOiBQUk9EX0VWRU5UU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1VCU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX1NVQlNfQVBJIDogUFJPRF9TVUJTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVE9SQUdFX05BTUUgPSAncmVhaW1fc2RrX3N0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0lNUFJFU1NJT04gPSAnaSc7XG5leHBvcnQgY29uc3QgUkVBSU1fQ0xJQ0sgPSAnYyc7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHJlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdyZWdlbmVyYXRvci1ydW50aW1lJztcbi8qIGVzbGludC1lbmFibGUgKi9cbmltcG9ydCBTZXJ2aWNlV29ya2VyU3RvcmFnZSBmcm9tICdzZXJ2aWNld29ya2VyLXN0b3JhZ2UnO1xuaW1wb3J0IHtcbiAgUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04sXG4gIFJFQUlNX0VWRU5UU19BUEksXG4gIFJFQUlNX1NVQlNfQVBJLFxuICBSRUFJTV9TVE9SQUdFX05BTUUsXG4gIFJFQUlNX0lNUFJFU1NJT04sXG4gIFJFQUlNX0NMSUNLLFxuICBSRUFJTV9VSURcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzdG9yYWdlID0gbmV3IFNlcnZpY2VXb3JrZXJTdG9yYWdlKFJFQUlNX1NUT1JBR0VfTkFNRSwgMSk7XG5cbmNsYXNzIFJlQWltU1cge1xuXG4gIHN0YXRpYyBhc3luYyBsb2coa2luZCwgdHJhY2tpbmcpIHtcbiAgICBpZiAoa2luZCAmJiB0cmFja2luZykge1xuICAgICAgZmV0Y2goYCR7UkVBSU1fRVZFTlRTX0FQSX0vbG9nP2s9JHtraW5kfSYke2F0b2IodHJhY2tpbmcpfWApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBSU1fVUlEKTtcblxuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KFJFQUlNX1NVQlNfQVBJICsgJy9yZWZyZXNoJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgICAgICAgIGF1dGg6IHN1YnNjcmlwdGlvbi5rZXlzLmF1dGgsXG4gICAgICAgICAgICBwMjU2ZGg6IHN1YnNjcmlwdGlvbi5rZXlzLnAyNTZkaFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYuZmV0Y2gocmVxKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhhbmRsZUluc3RhbGwoZXZlbnQpIHtcbiAgICBzZWxmLnNraXBXYWl0aW5nKCk7XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlQWN0aXZhdGUoZXZlbnQpIHtcbiAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLmNsYWltKCkpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZVB1c2hFdmVudChldmVudCkge1xuICAgIGNvbnN0IHBheWxvYWQgPSBldmVudC5kYXRhLmpzb24oKTtcblxuICAgIGNvbnN0IHRpdGxlID0gcGF5bG9hZC5jLnQ7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGJvZHk6IHBheWxvYWQuYy5kLFxuICAgICAgaWNvbjogcGF5bG9hZC5jLmksXG4gICAgICBpbWFnZTogcGF5bG9hZC5jLm0sXG4gICAgICBiYWRnZTogcGF5bG9hZC5jLmIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRyYWNraW5nOiBwYXlsb2FkLnQsXG4gICAgICAgIHVybDogcGF5bG9hZC5jLnVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVBaW1TVy5sb2coUkVBSU1fSU1QUkVTU0lPTiwgcGF5bG9hZC50KTtcbiAgICBldmVudC53YWl0VW50aWwoc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih0aXRsZSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZUNsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcblxuICAgIGlmIChldmVudC5ub3RpZmljYXRpb24uZGF0YS51cmwpIHtcbiAgICAgIFJlQWltU1cubG9nKFJFQUlNX0NMSUNLLCBldmVudC5ub3RpZmljYXRpb24uZGF0YS50cmFja2luZyk7XG4gICAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLm9wZW5XaW5kb3coZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudXJsKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbihldmVudCkge1xuICAgIGNvbnN0IG5ld1N1YnNjcmlwdGlvbiA9IGF3YWl0IHNlbGYucmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuICAgIGNvbnN0IG9sZFN1YnNjcmlwdGlvbiA9IEpTT04ucGFyc2UoYXdhaXQgc3RvcmFnZS5nZXRJdGVtKCdzdWJzY3JpcHRpb24nKSk7XG5cbiAgICBpZiAoIW9sZFN1YnNjcmlwdGlvbikge1xuICAgICAgUmVBaW1TVy5zYXZlTG9jYWxTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICAgIFJlQWltU1cudXBkYXRlU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKG5ld1N1YnNjcmlwdGlvbiAmJiBvbGRTdWJzY3JpcHRpb24gJiYgKG5ld1N1YnNjcmlwdGlvbi5lbmRwb2ludCAhPT0gb2xkU3Vic2NyaXB0aW9uLmVuZHBvaW50KSkge1xuICAgICAgUmVBaW1TVy5zYXZlTG9jYWxTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICAgIFJlQWltU1cudXBkYXRlU3Vic2NyaXB0aW9uKG5ld1N1YnNjcmlwdGlvbik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHNhdmVMb2NhbFN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICBhd2FpdCBzdG9yYWdlLnNldEl0ZW0oJ3N1YnNjcmlwdGlvbicsIHN1YnNjcmlwdGlvbik7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlTWVzc2FnZShldmVudCkge1xuICAgIGlmIChldmVudC5kYXRhLmFjdGlvbiA9PT0gUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04pIHtcbiAgICAgIGV2ZW50LndhaXRVbnRpbChSZUFpbVNXLnNhdmVMb2NhbFN1YnNjcmlwdGlvbihldmVudC5kYXRhLnN1YnNjcmlwdGlvbikpO1xuICAgIH1cbiAgfVxufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBSZUFpbVNXLmhhbmRsZUluc3RhbGwpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIFJlQWltU1cuaGFuZGxlQWN0aXZhdGUpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgUmVBaW1TVy5oYW5kbGVQdXNoRXZlbnQpO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIFJlQWltU1cuaGFuZGxlQ2xpY2tFdmVudCk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBSZUFpbVNXLmhhbmRsZVVwZGF0ZVN1YnNjcmlwdGlvbik7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBSZUFpbVNXLmhhbmRsZU1lc3NhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==