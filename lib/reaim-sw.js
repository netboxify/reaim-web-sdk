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
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
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
      define(genFun, toStringTagSymbol, "GeneratorFunction");
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
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
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
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
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
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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

  exports.keys = function(val) {
    var object = Object(val);
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
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
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
exports.REAIM_CLICK = exports.REAIM_IMPRESSION = exports.REAIM_STORAGE_NAME = exports.REAIM_SUBS_API = exports.REAIM_EVENTS_API = exports.REAIM_API = exports.REAIM_SAVE_SUBSCRIPTION = exports.REAIM_RETRY_USER = exports.REAIM_UID = exports.REAIM_PUSH_USER_SUBSCRIBED = exports.REAIM_DENIED_ON_VISITS = exports.REAIM_SDK_VISITS = exports.PRODUCTION = void 0;
var PRODUCTION = !!("development" === 'production');
exports.PRODUCTION = PRODUCTION;
var LOCAL_API = 'http://localhost:5000';
var LOCAL_EVENTS_API = 'http://localhost:5555';
var LOCAL_SUBS_API = 'http://localhost:4343';
var PROD_API = 'https://api.reaim.me';
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
var REAIM_API = !PRODUCTION ? LOCAL_API : PROD_API;
exports.REAIM_API = REAIM_API;
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable */ /* eslint-enable */
var storage = new _serviceworkerStorage.default(_constants.REAIM_STORAGE_NAME, 1);
var ReAimSW = /*#__PURE__*/function () {
  function ReAimSW() {
    _classCallCheck(this, ReAimSW);
  }
  _createClass(ReAimSW, null, [{
    key: "log",
    value: function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee(kind, tracking, variant) {
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
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee2(subscription) {
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
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee3(event) {
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
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee4(event) {
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
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee5(event) {
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
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee6(subscription) {
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
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee7(event) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvc2VydmljZXdvcmtlci1zdG9yYWdlL2xpYi9TZXJ2aWNlV29ya2VyU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vbm9kZV9tb2R1bGVzL3NlcnZpY2V3b3JrZXItc3RvcmFnZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9zdy5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsImV4cG9ydHMiLCJMT0NBTF9BUEkiLCJMT0NBTF9FVkVOVFNfQVBJIiwiTE9DQUxfU1VCU19BUEkiLCJQUk9EX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fUkVUUllfVVNFUiIsIlJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OIiwiUkVBSU1fQVBJIiwiUkVBSU1fRVZFTlRTX0FQSSIsIlJFQUlNX1NVQlNfQVBJIiwiUkVBSU1fU1RPUkFHRV9OQU1FIiwiUkVBSU1fSU1QUkVTU0lPTiIsIlJFQUlNX0NMSUNLIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3NlcnZpY2V3b3JrZXJTdG9yYWdlIiwiX2NvbnN0YW50cyIsImUiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIm4iLCJ0IiwiciIsImEiLCJjIiwiaSIsInUiLCJ2YWx1ZSIsImRvbmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfY2xhc3NDYWxsQ2hlY2siLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJzdG9yYWdlIiwiUmVBaW1TVyIsIl9yZWYiLCJtYXJrIiwiX2NhbGxlZSIsImtpbmQiLCJ0cmFja2luZyIsInZhcmlhbnQiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwidDAiLCJmZXRjaCIsImNvbmNhdCIsImF0b2IiLCJhYnJ1cHQiLCJzdG9wIiwibG9nIiwiX3giLCJfeDIiLCJfeDMiLCJfcmVmMiIsIl9jYWxsZWUyIiwic3Vic2NyaXB0aW9uIiwiaWQiLCJyZXEiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJhdXRoIiwia2V5cyIsInAyNTZkaCIsInNlbGYiLCJlcnIiLCJjb25zb2xlIiwidXBkYXRlU3Vic2NyaXB0aW9uIiwiX3g0IiwiaGFuZGxlSW5zdGFsbCIsImV2ZW50Iiwic2tpcFdhaXRpbmciLCJoYW5kbGVBY3RpdmF0ZSIsIndhaXRVbnRpbCIsImNsaWVudHMiLCJjbGFpbSIsIl9yZWYzIiwiX2NhbGxlZTMiLCJwYXlsb2FkIiwidGl0bGUiLCJvcHRpb25zIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiZGF0YSIsImpzb24iLCJkIiwiaWNvbiIsImltYWdlIiwibSIsImJhZGdlIiwiYiIsImFjdGlvbnMiLCJ1cmwiLCJ2IiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsImhhbmRsZVB1c2hFdmVudCIsIl94NSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfdXJsIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwibm90aWZpY2F0aW9uIiwiY2xvc2UiLCJhY3Rpb24iLCJvcGVuV2luZG93IiwiaGFuZGxlQ2xpY2tFdmVudCIsIl94NiIsIl9yZWY1IiwiX2NhbGxlZTUiLCJuZXdTdWJzY3JpcHRpb24iLCJvbGRTdWJzY3JpcHRpb24iLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJwdXNoTWFuYWdlciIsImdldFN1YnNjcmlwdGlvbiIsInNlbnQiLCJ0MSIsInBhcnNlIiwic2F2ZUxvY2FsU3Vic2NyaXB0aW9uIiwiaGFuZGxlVXBkYXRlU3Vic2NyaXB0aW9uIiwiX3g3IiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInNldEl0ZW0iLCJfeDgiLCJfcmVmNyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiaGFuZGxlTWVzc2FnZSIsIl94OSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUFBO2NBQUE7Z0JBQzlCLElBQUltQyxLQUFLLENBQUNhLElBQUksQ0FBQ3NCLE1BQU0sS0FBQS9ILFVBQUEsQ0FBQVgsdUJBQTRCLEVBQUU7a0JBQ2pEdUcsS0FBSyxDQUFDRyxTQUFTLENBQUNqRCxPQUFPLENBQUNnRyxxQkFBcUIsQ0FBQ2xELEtBQUssQ0FBQ2EsSUFBSSxDQUFDbkMsWUFBWSxDQUFDLENBQUM7Z0JBQ3pFO2NBQUM7Y0FBQTtnQkFBQSxPQUFBb0YsU0FBQSxDQUFBM0YsSUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFBeUYsUUFBQTtNQUFBO01BQUEsU0FBQUcsY0FBQUMsR0FBQTtRQUFBLE9BQUFMLEtBQUEsQ0FBQTlILEtBQUEsT0FBQUQsU0FBQTtNQUFBO01BQUEsT0FBQW1JLGFBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQTdHLE9BQUE7QUFBQTtBQUlMd0MsSUFBSSxDQUFDdUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFL0csT0FBTyxDQUFDNkMsYUFBYSxDQUFDO0FBQ3ZETCxJQUFJLENBQUN1RSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUvRyxPQUFPLENBQUNnRCxjQUFjLENBQUM7QUFDekRSLElBQUksQ0FBQ3VFLGdCQUFnQixDQUFDLE1BQU0sRUFBRS9HLE9BQU8sQ0FBQ3dFLGVBQWUsQ0FBQztBQUN0RGhDLElBQUksQ0FBQ3VFLGdCQUFnQixDQUFDLG1CQUFtQixFQUFFL0csT0FBTyxDQUFDbUYsZ0JBQWdCLENBQUM7QUFDcEUzQyxJQUFJLENBQUN1RSxnQkFBZ0IsQ0FBQyx3QkFBd0IsRUFBRS9HLE9BQU8sQ0FBQ2lHLHdCQUF3QixDQUFDO0FBQ2pGekQsSUFBSSxDQUFDdUUsZ0JBQWdCLENBQUMsU0FBUyxFQUFFL0csT0FBTyxDQUFDNkcsYUFBYSxDQUFDLEMiLCJmaWxlIjoicmVhaW0tc3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlYWltLXdlYi1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3N3LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHsgb2JqW2tleV0gPSBkZXNjLnZhbHVlOyB9O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIH0pO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gIGRlZmluZVByb3BlcnR5KFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIFwiY29uc3RydWN0b3JcIixcbiAgICB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwgY29uZmlndXJhYmxlOiB0cnVlIH1cbiAgKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBlbnF1ZXVlIH0pO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZDtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCwgb3IgYSBtaXNzaW5nIC5uZXh0IG1laHRvZCwgYWx3YXlzIHRlcm1pbmF0ZSB0aGVcbiAgICAgIC8vIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmV4cG9ydHMucHJvbWlzaWZ5ID0gcHJvbWlzaWZ5O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIFNlcnZpY2VXb3JrZXJTdG9yYWdlXG4gKi9cblxudmFyIElEQl9UUkFOU0FDVElPTl9NT0RFID0gZXhwb3J0cy5JREJfVFJBTlNBQ1RJT05fTU9ERSA9IHtcbiAgcmVhZG9ubHk6ICdyZWFkb25seScsXG4gIHJlYWR3cml0ZTogJ3JlYWR3cml0ZScsXG4gIHZlcnNpb25jaGFuZ2U6ICd2ZXJzaW9uY2hhbmdlJ1xufTtcblxuZnVuY3Rpb24gcHJvbWlzaWZ5KGlkYlJlcXVlc3QpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZGJSZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUoaWRiUmVxdWVzdC5yZXN1bHQpO1xuICAgIH07XG4gICAgaWRiUmVxdWVzdC5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxudmFyIFNlcnZpY2VXb3JrZXJTdG9yYWdlID0gZXhwb3J0cy5TZXJ2aWNlV29ya2VyU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU2VydmljZVdvcmtlclN0b3JhZ2UoZGJfbmFtZSwgdmVyc2lvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VydmljZVdvcmtlclN0b3JhZ2UpO1xuXG4gICAgaWYgKHR5cGVvZiBkYl9uYW1lICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignZGJfbmFtZSBtdXN0IGJlIHN0cmluZy4nKTtcbiAgICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdudW1iZXInKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2ZXJzaW9uIG11c3QgYmUgbnVtYmVyLicpO1xuICAgIHZhciBWRVJTSU9OID0gdmVyc2lvbjtcbiAgICB0aGlzLkRCX05BTUUgPSBkYl9uYW1lO1xuICAgIHRoaXMuU1RPUkVfTkFNRSA9ICdzd19zdG9yYWdlJztcblxuICAgIHZhciBkYiA9IHNlbGYuaW5kZXhlZERCLm9wZW4odGhpcy5EQl9OQU1FLCBWRVJTSU9OKTtcbiAgICBkYi5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgaWYgKF9kYi5vYmplY3RTdG9yZU5hbWVzICYmIF9kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKF90aGlzLlNUT1JFX05BTUUpKSByZXR1cm47XG4gICAgICBfZGIuY3JlYXRlT2JqZWN0U3RvcmUoX3RoaXMuU1RPUkVfTkFNRSk7XG4gICAgfTtcbiAgICB0aGlzLl9fZGIgPSBwcm9taXNpZnkoZGIpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNlcnZpY2VXb3JrZXJTdG9yYWdlLCBbe1xuICAgIGtleTogJ19hY2Nlc3NBc3luY1N0b3JlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2FjY2Vzc0FzeW5jU3RvcmUobW9kZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLl9fZGIudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgdmFyIHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oX3RoaXMyLlNUT1JFX05BTUUsIG1vZGUpO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoX3RoaXMyLlNUT1JFX05BTUUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGVuZ3RoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnkoc3RvcmUuZ2V0QWxsS2V5cygpKTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleXMpIHtcbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAna2V5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24ga2V5KGlkeCkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignRmFpbGVkIHRvIGV4ZWN1dGUgXCJrZXlcIiBvbiBcIlN0b3JhZ2VcIicpKTtcbiAgICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJykgaWR4ID0gMDtcbiAgICAgIHJldHVybiB0aGlzLl9hY2Nlc3NBc3luY1N0b3JlKElEQl9UUkFOU0FDVElPTl9NT0RFLnJlYWRvbmx5KS50aGVuKGZ1bmN0aW9uIChzdG9yZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KHN0b3JlLmdldEFsbEtleXMoKSk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzW2lkeF0gfHwgbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEl0ZW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJdGVtKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FjY2Vzc0FzeW5jU3RvcmUoSURCX1RSQU5TQUNUSU9OX01PREUucmVhZG9ubHkpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5nZXQoa2V5KTtcbiAgICAgIH0pLnRoZW4ocHJvbWlzaWZ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRJdGVtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZS5wdXQodmFsdWUsIGtleSk7XG4gICAgICB9KS50aGVuKHByb21pc2lmeSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlSXRlbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUl0ZW0oa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWNjZXNzQXN5bmNTdG9yZShJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpLnRoZW4oZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgICAgIHJldHVybiBzdG9yZVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgIH0pLnRoZW4ocHJvbWlzaWZ5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19kYi50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICB2YXIgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihkYi5vYmplY3RTdG9yZU5hbWVzLCBJREJfVFJBTlNBQ1RJT05fTU9ERS5yZWFkd3JpdGUpO1xuICAgICAgICB2YXIgcSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGIub2JqZWN0U3RvcmVOYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIHZhciBzdG9yZV9uYW1lID0gZGIub2JqZWN0U3RvcmVOYW1lc1tpXTtcbiAgICAgICAgICBxLnB1c2gocHJvbWlzaWZ5KHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlX25hbWUpLmNsZWFyKCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2VydmljZVdvcmtlclN0b3JhZ2U7XG59KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OVRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aUzVxY3lKZExDSnVZVzFsY3lJNld5SndjbTl0YVhOcFpua2lMQ0pKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlNJc0luSmxZV1J2Ym14NUlpd2ljbVZoWkhkeWFYUmxJaXdpZG1WeWMybHZibU5vWVc1blpTSXNJbWxrWWxKbGNYVmxjM1FpTENKUWNtOXRhWE5sSWl3aWNtVnpiMngyWlNJc0luSmxhbVZqZENJc0ltOXVjM1ZqWTJWemN5SXNJbkpsYzNWc2RDSXNJbTl1WlhKeWIzSWlMQ0pUWlhKMmFXTmxWMjl5YTJWeVUzUnZjbUZuWlNJc0ltUmlYMjVoYldVaUxDSjJaWEp6YVc5dUlpd2lWSGx3WlVWeWNtOXlJaXdpVmtWU1UwbFBUaUlzSWtSQ1gwNUJUVVVpTENKVFZFOVNSVjlPUVUxRklpd2laR0lpTENKelpXeG1JaXdpYVc1a1pYaGxaRVJDSWl3aWIzQmxiaUlzSW05dWRYQm5jbUZrWlc1bFpXUmxaQ0lzSWw5a1lpSXNJbVYyWlc1MElpd2lkR0Z5WjJWMElpd2liMkpxWldOMFUzUnZjbVZPWVcxbGN5SXNJbU52Ym5SaGFXNXpJaXdpWTNKbFlYUmxUMkpxWldOMFUzUnZjbVVpTENKZlgyUmlJaXdpYlc5a1pTSXNJblJvWlc0aUxDSjBjbUZ1YzJGamRHbHZiaUlzSW05aWFtVmpkRk4wYjNKbElpd2lYMkZqWTJWemMwRnplVzVqVTNSdmNtVWlMQ0p6ZEc5eVpTSXNJbWRsZEVGc2JFdGxlWE1pTENKclpYbHpJaXdpYkdWdVozUm9JaXdpYVdSNElpd2lZWEpuZFcxbGJuUnpJaXdpYTJWNUlpd2laMlYwSWl3aWRtRnNkV1VpTENKd2RYUWlMQ0p4SWl3aWFTSXNJbXhsYmlJc0luTjBiM0psWDI1aGJXVWlMQ0p3ZFhOb0lpd2lZMnhsWVhJaUxDSmhiR3dpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN08xRkJWV2RDUVN4VExFZEJRVUZCTEZNN096czdRVUZXYUVJN096czdRVUZKVHl4SlFVRk5ReXh6UkVGQmRVSTdRVUZEYkVORExGbEJRVlVzVlVGRWQwSTdRVUZGYkVORExHRkJRVmNzVjBGR2RVSTdRVUZIYkVORExHbENRVUZsTzBGQlNHMUNMRU5CUVRkQ096dEJRVTFCTEZOQlFWTktMRk5CUVZRc1EwRkJiVUpMTEZWQlFXNUNMRVZCUVN0Q08wRkJRM0JETEZOQlFVOHNTVUZCU1VNc1QwRkJTaXhEUVVGWkxGVkJRVk5ETEU5QlFWUXNSVUZCYTBKRExFMUJRV3hDTEVWQlFUQkNPMEZCUXpORFNDeGxRVUZYU1N4VFFVRllMRWRCUVhWQ0xGbEJRVmM3UVVGRGFFTkdMR05CUVZGR0xGZEJRVmRMTEUxQlFXNUNPMEZCUTBRc1MwRkdSRHRCUVVkQlRDeGxRVUZYVFN4UFFVRllMRWRCUVhGQ1NDeE5RVUZ5UWp0QlFVTkVMRWRCVEUwc1EwRkJVRHRCUVUxRU96dEpRVVZaU1N4dlFpeFhRVUZCUVN4dlFqdEJRVU5ZTEdkRFFVRlpReXhQUVVGYUxFVkJRWEZDUXl4UFFVRnlRaXhGUVVFNFFqdEJRVUZCT3p0QlFVRkJPenRCUVVNMVFpeFJRVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVVVGQmRrSXNSVUZCYVVNc1RVRkJUU3hKUVVGSlJTeFRRVUZLTEVOQlFXTXNlVUpCUVdRc1EwRkJUanRCUVVOcVF5eFJRVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVVVGQmRrSXNSVUZCYVVNc1RVRkJUU3hKUVVGSlF5eFRRVUZLTEVOQlFXTXNlVUpCUVdRc1EwRkJUanRCUVVOcVF5eFJRVUZOUXl4VlFVRlZSaXhQUVVGb1FqdEJRVU5CTEZOQlFVdEhMRTlCUVV3c1IwRkJaVW9zVDBGQlpqdEJRVU5CTEZOQlFVdExMRlZCUVV3c1IwRkJhMElzV1VGQmJFSTdPMEZCUlVFc1VVRkJUVU1zUzBGQlMwTXNTMEZCUzBNc1UwRkJUQ3hEUVVGbFF5eEpRVUZtTEVOQlFXOUNMRXRCUVV0TUxFOUJRWHBDTEVWQlFXdERSQ3hQUVVGc1F5eERRVUZZTzBGQlEwRkhMRTlCUVVkSkxHVkJRVWdzUjBGQmNVSXNhVUpCUVZNN1FVRkROVUlzVlVGQlRVTXNUVUZCVFVNc1RVRkJUVU1zVFVGQlRpeERRVUZoYUVJc1RVRkJla0k3UVVGRFFTeFZRVUZKWXl4SlFVRkpSeXhuUWtGQlNpeEpRVUYzUWtnc1NVRkJTVWNzWjBKQlFVb3NRMEZCY1VKRExGRkJRWEpDTEVOQlFUaENMRTFCUVV0V0xGVkJRVzVETEVOQlFUVkNMRVZCUVRSRk8wRkJRelZGVFN4VlFVRkpTeXhwUWtGQlNpeERRVUZ6UWl4TlFVRkxXQ3hWUVVFelFqdEJRVU5FTEV0QlNrUTdRVUZMUVN4VFFVRkxXU3hKUVVGTUxFZEJRVms1UWl4VlFVRlZiVUlzUlVGQlZpeERRVUZhTzBGQlEwUTdPenM3YzBOQlJXbENXU3hKTEVWQlFVMDdRVUZCUVRzN1FVRkRkRUlzWVVGQlR5eExRVUZMUkN4SlFVRk1MRU5CUVZWRkxFbEJRVllzUTBGQlpTeGpRVUZOTzBGQlF6RkNMRmxCUVUxRExHTkJRV05rTEVkQlFVZGpMRmRCUVVnc1EwRkJaU3hQUVVGTFppeFZRVUZ3UWl4RlFVRm5RMkVzU1VGQmFFTXNRMEZCY0VJN1FVRkRRU3hsUVVGUFJTeFpRVUZaUXl4WFFVRmFMRU5CUVhkQ0xFOUJRVXRvUWl4VlFVRTNRaXhEUVVGUU8wRkJRMFFzVDBGSVRTeERRVUZRTzBGQlNVUTdPenMyUWtGRlVUdEJRVU5RTEdGQlFVOHNTMEZCUzJsQ0xHbENRVUZNTEVOQlFYVkNiRU1zY1VKQlFYRkNReXhSUVVFMVF5eEZRVU5LT0VJc1NVRkVTU3hEUVVORE8wRkJRVUVzWlVGQlUyaERMRlZCUVZWdlF5eE5RVUZOUXl4VlFVRk9MRVZCUVZZc1EwRkJWRHRCUVVGQkxFOUJSRVFzUlVGRlNrd3NTVUZHU1N4RFFVVkRPMEZCUVVFc1pVRkJVVTBzUzBGQlMwTXNUVUZCWWp0QlFVRkJMRTlCUmtRc1EwRkJVRHRCUVVkRU96czdkMEpCUlVkRExFY3NSVUZCU3p0QlFVTlFMRlZCUVVrc1EwRkJRME1zVlVGQlZVWXNUVUZCWml4RlFVRjFRaXhQUVVGUGFrTXNVVUZCVVVVc1RVRkJVaXhEUVVGbExFbEJRVWxQTEZOQlFVb3NRMEZCWXl4elEwRkJaQ3hEUVVGbUxFTkJRVkE3UVVGRGRrSXNWVUZCU1N4UFFVRlBlVUlzUjBGQlVDeExRVUZsTEZGQlFXNUNMRVZCUVRaQ1FTeE5RVUZOTEVOQlFVNDdRVUZETjBJc1lVRkJUeXhMUVVGTFRDeHBRa0ZCVEN4RFFVRjFRbXhETEhGQ1FVRnhRa01zVVVGQk5VTXNSVUZEU2poQ0xFbEJSRWtzUTBGRFF6dEJRVUZCTEdWQlFWTm9ReXhWUVVGVmIwTXNUVUZCVFVNc1ZVRkJUaXhGUVVGV0xFTkJRVlE3UVVGQlFTeFBRVVJFTEVWQlJVcE1MRWxCUmtrc1EwRkZRenRCUVVGQkxHVkJRVkZOTEV0QlFVdEZMRWRCUVV3c1MwRkJZU3hKUVVGeVFqdEJRVUZCTEU5QlJrUXNRMEZCVUR0QlFVZEVPenM3TkVKQlJVOUZMRWNzUlVGQlN6dEJRVU5ZTEdGQlFVOHNTMEZCUzFBc2FVSkJRVXdzUTBGQmRVSnNReXh4UWtGQmNVSkRMRkZCUVRWRExFVkJRMG80UWl4SlFVUkpMRU5CUTBNN1FVRkJRU3hsUVVGVFNTeE5RVUZOVHl4SFFVRk9MRU5CUVZWRUxFZEJRVllzUTBGQlZEdEJRVUZCTEU5QlJFUXNSVUZGU2xZc1NVRkdTU3hEUVVWRGFFTXNVMEZHUkN4RFFVRlFPMEZCUjBRN096czBRa0ZEVHpCRExFY3NSVUZCUzBVc1N5eEZRVUZQTzBGQlEyeENMR0ZCUVU4c1MwRkJTMVFzYVVKQlFVd3NRMEZCZFVKc1F5eHhRa0ZCY1VKRkxGTkJRVFZETEVWQlEwbzJRaXhKUVVSSkxFTkJRME03UVVGQlFTeGxRVUZUU1N4TlFVRk5VeXhIUVVGT0xFTkJRVlZFTEV0QlFWWXNSVUZCYVVKR0xFZEJRV3BDTEVOQlFWUTdRVUZCUVN4UFFVUkVMRVZCUlVwV0xFbEJSa2tzUTBGRlEyaERMRk5CUmtRc1EwRkJVRHRCUVVkRU96czdLMEpCUTFVd1F5eEhMRVZCUVVzN1FVRkRaQ3hoUVVGUExFdEJRVXRRTEdsQ1FVRk1MRU5CUVhWQ2JFTXNjVUpCUVhGQ1JTeFRRVUUxUXl4RlFVTktOa0lzU1VGRVNTeERRVU5ETzBGQlFVRXNaVUZCVTBrc1RVRkJUU3hSUVVGT0xFVkJRV2RDVFN4SFFVRm9RaXhEUVVGVU8wRkJRVUVzVDBGRVJDeEZRVVZLVml4SlFVWkpMRU5CUlVOb1F5eFRRVVpFTEVOQlFWQTdRVUZIUkRzN096UkNRVU5QTzBGQlEwNHNZVUZCVHl4TFFVRkxPRUlzU1VGQlRDeERRVU5LUlN4SlFVUkpMRU5CUTBNc1kwRkJUVHRCUVVOV0xGbEJRVTFETEdOQlFXTmtMRWRCUVVkakxGZEJRVWdzUTBGQlpXUXNSMEZCUjFFc1owSkJRV3hDTEVWQlFXOURNVUlzY1VKQlFYRkNSU3hUUVVGNlJDeERRVUZ3UWp0QlFVTkJMRmxCUVUweVF5eEpRVUZKTEVWQlFWWTdRVUZEUVN4aFFVRkxMRWxCUVVsRExFbEJRVWtzUTBGQlVpeEZRVUZYUXl4TlFVRk5OMElzUjBGQlIxRXNaMEpCUVVnc1EwRkJiMEpaTEUxQlFURkRMRVZCUVd0RVVTeEpRVUZKUXl4SFFVRjBSQ3hGUVVFeVJFUXNSMEZCTTBRc1JVRkJaMFU3UVVGRE9VUXNZMEZCU1VVc1lVRkJZVGxDTEVkQlFVZFJMR2RDUVVGSUxFTkJRVzlDYjBJc1EwRkJjRUlzUTBGQmFrSTdRVUZEUVVRc1dVRkJSVWtzU1VGQlJpeERRVUZQYkVRc1ZVRkJWV2xETEZsQlFWbERMRmRCUVZvc1EwRkJkMEpsTEZWQlFYaENMRVZCUVc5RFJTeExRVUZ3UXl4RlFVRldMRU5CUVZBN1FVRkRSRHRCUVVORUxHVkJRVTgzUXl4UlFVRlJPRU1zUjBGQlVpeERRVUZaVGl4RFFVRmFMRU5CUVZBN1FVRkRSQ3hQUVZSSkxFTkJRVkE3UVVGVlJDSXNJbVpwYkdVaU9pSlRaWEoyYVdObFYyOXlhMlZ5VTNSdmNtRm5aUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFLbHh1SUNvZ1UyVnlkbWxqWlZkdmNtdGxjbE4wYjNKaFoyVmNiaUFxTDF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnU1VSQ1gxUlNRVTVUUVVOVVNVOU9YMDFQUkVVZ1BTQjdYRzRnSUhKbFlXUnZibXg1T2lBbmNtVmhaRzl1YkhrbkxGeHVJQ0J5WldGa2QzSnBkR1U2SUNkeVpXRmtkM0pwZEdVbkxGeHVJQ0IyWlhKemFXOXVZMmhoYm1kbE9pQW5kbVZ5YzJsdmJtTm9ZVzVuWlNkY2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ3Y205dGFYTnBabmtvYVdSaVVtVnhkV1Z6ZENrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z0lDQWdhV1JpVW1WeGRXVnpkQzV2Ym5OMVkyTmxjM01nUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lISmxjMjlzZG1Vb2FXUmlVbVZ4ZFdWemRDNXlaWE4xYkhRcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnYVdSaVVtVnhkV1Z6ZEM1dmJtVnljbTl5SUQwZ2NtVnFaV04wTzF4dUlDQjlLVHRjYm4xY2JseHVaWGh3YjNKMElHTnNZWE56SUZObGNuWnBZMlZYYjNKclpYSlRkRzl5WVdkbElIdGNiaUFnWTI5dWMzUnlkV04wYjNJb1pHSmZibUZ0WlN3Z2RtVnljMmx2YmlrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ1pHSmZibUZ0WlNBaFBUMGdKM04wY21sdVp5Y3BJSFJvY205M0lHNWxkeUJVZVhCbFJYSnliM0lvSjJSaVgyNWhiV1VnYlhWemRDQmlaU0J6ZEhKcGJtY3VKeWs3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIyWlhKemFXOXVJQ0U5UFNBbmJuVnRZbVZ5SnlrZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25kbVZ5YzJsdmJpQnRkWE4wSUdKbElHNTFiV0psY2k0bktUdGNiaUFnSUNCamIyNXpkQ0JXUlZKVFNVOU9JRDBnZG1WeWMybHZianRjYmlBZ0lDQjBhR2x6TGtSQ1gwNUJUVVVnUFNCa1lsOXVZVzFsTzF4dUlDQWdJSFJvYVhNdVUxUlBVa1ZmVGtGTlJTQTlJQ2R6ZDE5emRHOXlZV2RsSnp0Y2JseHVJQ0FnSUdOdmJuTjBJR1JpSUQwZ2MyVnNaaTVwYm1SbGVHVmtSRUl1YjNCbGJpaDBhR2x6TGtSQ1gwNUJUVVVzSUZaRlVsTkpUMDRwTzF4dUlDQWdJR1JpTG05dWRYQm5jbUZrWlc1bFpXUmxaQ0E5SUdWMlpXNTBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRjlrWWlBOUlHVjJaVzUwTG5SaGNtZGxkQzV5WlhOMWJIUTdYRzRnSUNBZ0lDQnBaaUFvWDJSaUxtOWlhbVZqZEZOMGIzSmxUbUZ0WlhNZ0ppWWdYMlJpTG05aWFtVmpkRk4wYjNKbFRtRnRaWE11WTI5dWRHRnBibk1vZEdocGN5NVRWRTlTUlY5T1FVMUZLU2tnY21WMGRYSnVPMXh1SUNBZ0lDQWdYMlJpTG1OeVpXRjBaVTlpYW1WamRGTjBiM0psS0hSb2FYTXVVMVJQVWtWZlRrRk5SU2s3WEc0Z0lDQWdmVHRjYmlBZ0lDQjBhR2x6TGw5ZlpHSWdQU0J3Y205dGFYTnBabmtvWkdJcE8xeHVJQ0I5WEc1Y2JpQWdYMkZqWTJWemMwRnplVzVqVTNSdmNtVW9iVzlrWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWZaR0l1ZEdobGJpaGtZaUE5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0IwY21GdWMyRmpkR2x2YmlBOUlHUmlMblJ5WVc1ellXTjBhVzl1S0hSb2FYTXVVMVJQVWtWZlRrRk5SU3dnYlc5a1pTazdYRzRnSUNBZ0lDQnlaWFIxY200Z2RISmhibk5oWTNScGIyNHViMkpxWldOMFUzUnZjbVVvZEdocGN5NVRWRTlTUlY5T1FVMUZLVHRjYmlBZ0lDQjlLVHRjYmlBZ2ZWeHVYRzRnSUd4bGJtZDBhQ2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllXTmpaWE56UVhONWJtTlRkRzl5WlNoSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrYjI1c2VTbGNiaUFnSUNBZ0lDNTBhR1Z1S0hOMGIzSmxJRDArSUhCeWIyMXBjMmxtZVNoemRHOXlaUzVuWlhSQmJHeExaWGx6S0NrcEtWeHVJQ0FnSUNBZ0xuUm9aVzRvYTJWNWN5QTlQaUJyWlhsekxteGxibWQwYUNrN1hHNGdJSDFjYmx4dUlDQnJaWGtvYVdSNEtTQjdYRzRnSUNBZ2FXWWdLQ0ZoY21kMWJXVnVkSE11YkdWdVozUm9LU0J5WlhSMWNtNGdVSEp2YldselpTNXlaV3BsWTNRb2JtVjNJRlI1Y0dWRmNuSnZjaWduUm1GcGJHVmtJSFJ2SUdWNFpXTjFkR1VnWENKclpYbGNJaUJ2YmlCY0lsTjBiM0poWjJWY0lpY3BLVHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JR2xrZUNBaFBUMGdKMjUxYldKbGNpY3BJR2xrZUNBOUlEQTdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMkZqWTJWemMwRnplVzVqVTNSdmNtVW9TVVJDWDFSU1FVNVRRVU5VU1U5T1gwMVBSRVV1Y21WaFpHOXViSGtwWEc0Z0lDQWdJQ0F1ZEdobGJpaHpkRzl5WlNBOVBpQndjbTl0YVhOcFpua29jM1J2Y21VdVoyVjBRV3hzUzJWNWN5Z3BLU2xjYmlBZ0lDQWdJQzUwYUdWdUtHdGxlWE1nUFQ0Z2EyVjVjMXRwWkhoZElIeDhJRzUxYkd3cE8xeHVJQ0I5WEc1Y2JpQWdaMlYwU1hSbGJTaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZllXTmpaWE56UVhONWJtTlRkRzl5WlNoSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrYjI1c2VTbGNiaUFnSUNBZ0lDNTBhR1Z1S0hOMGIzSmxJRDArSUhOMGIzSmxMbWRsZENoclpYa3BLVnh1SUNBZ0lDQWdMblJvWlc0b2NISnZiV2x6YVdaNUtUdGNiaUFnZlZ4dUlDQnpaWFJKZEdWdEtHdGxlU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWVdOalpYTnpRWE41Ym1OVGRHOXlaU2hKUkVKZlZGSkJUbE5CUTFSSlQwNWZUVTlFUlM1eVpXRmtkM0pwZEdVcFhHNGdJQ0FnSUNBdWRHaGxiaWh6ZEc5eVpTQTlQaUJ6ZEc5eVpTNXdkWFFvZG1Gc2RXVXNJR3RsZVNrcFhHNGdJQ0FnSUNBdWRHaGxiaWh3Y205dGFYTnBabmtwTzF4dUlDQjlYRzRnSUhKbGJXOTJaVWwwWlcwb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJGalkyVnpjMEZ6ZVc1alUzUnZjbVVvU1VSQ1gxUlNRVTVUUVVOVVNVOU9YMDFQUkVVdWNtVmhaSGR5YVhSbEtWeHVJQ0FnSUNBZ0xuUm9aVzRvYzNSdmNtVWdQVDRnYzNSdmNtVmJKMlJsYkdWMFpTZGRLR3RsZVNrcFhHNGdJQ0FnSUNBdWRHaGxiaWh3Y205dGFYTnBabmtwTzF4dUlDQjlYRzRnSUdOc1pXRnlLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5ZlpHSmNiaUFnSUNBZ0lDNTBhR1Z1S0dSaUlEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdkSEpoYm5OaFkzUnBiMjRnUFNCa1lpNTBjbUZ1YzJGamRHbHZiaWhrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6TENCSlJFSmZWRkpCVGxOQlExUkpUMDVmVFU5RVJTNXlaV0ZrZDNKcGRHVXBPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnhJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3TENCc1pXNGdQU0JrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6TG14bGJtZDBhRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnYkdWMElITjBiM0psWDI1aGJXVWdQU0JrWWk1dlltcGxZM1JUZEc5eVpVNWhiV1Z6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJSEV1Y0hWemFDaHdjbTl0YVhOcFpua29kSEpoYm5OaFkzUnBiMjR1YjJKcVpXTjBVM1J2Y21Vb2MzUnZjbVZmYm1GdFpTa3VZMnhsWVhJb0tTa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbUZzYkNoeEtUdGNiaUFnSUNBZ0lIMHBPMXh1SUNCOVhHNTlYRzVjYmlKZGZRPT0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfU2VydmljZVdvcmtlclN0b3JhZ2UgPSByZXF1aXJlKCcuL1NlcnZpY2VXb3JrZXJTdG9yYWdlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gX1NlcnZpY2VXb3JrZXJTdG9yYWdlLlNlcnZpY2VXb3JrZXJTdG9yYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2V3lKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEJRVVZCUVN4UFFVRlBReXhQUVVGUUlpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dVMlZ5ZG1salpWZHZjbXRsY2xOMGIzSmhaMlVnZlNCbWNtOXRJQ2N1TDFObGNuWnBZMlZYYjNKclpYSlRkRzl5WVdkbExtcHpKenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCVFpYSjJhV05sVjI5eWEyVnlVM1J2Y21GblpUdGNiaUpkZlE9PSIsImV4cG9ydCBjb25zdCBQUk9EVUNUSU9OID0gISEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyk7XG5jb25zdCBMT0NBTF9BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJztcbmNvbnN0IExPQ0FMX0VWRU5UU19BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1NTU1JztcbmNvbnN0IExPQ0FMX1NVQlNfQVBJID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NDM0Myc7XG5jb25zdCBQUk9EX0FQSSA9ICdodHRwczovL2FwaS5yZWFpbS5tZSc7XG5jb25zdCBQUk9EX0VWRU5UU19BUEkgPSAnaHR0cHM6Ly9ldmVudHMucmVhaW0ubWUnO1xuY29uc3QgUFJPRF9TVUJTX0FQSSA9ICdodHRwczovL3N1YnMucmVhaW0ubWUnO1xuXG5leHBvcnQgY29uc3QgUkVBSU1fU0RLX1ZJU0lUUyA9ICdyZWFpbV9zZGtfdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9ERU5JRURfT05fVklTSVRTID0gJ3JlYWltX3Nka19kZW5pZWRfb25fdmlzaXRzJztcbmV4cG9ydCBjb25zdCBSRUFJTV9QVVNIX1VTRVJfU1VCU0NSSUJFRCA9ICdyZWFpbV9zZGtfcHVzaF91c2VyX3N1YnNjcmliZWQnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1VJRCA9ICdyZWFpbV9zZGtfdWlkJztcbmV4cG9ydCBjb25zdCBSRUFJTV9SRVRSWV9VU0VSID0gJ3JlYWltX3Nka19yZXRyeV91c2VyJztcbmV4cG9ydCBjb25zdCBSRUFJTV9TQVZFX1NVQlNDUklQVElPTiA9ICdyZWFpbV9zYXZlX3N1YnNjcmlwdGlvbic7XG5leHBvcnQgY29uc3QgUkVBSU1fQVBJID0gIVBST0RVQ1RJT04gPyBMT0NBTF9BUEkgOiBQUk9EX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9FVkVOVFNfQVBJID0gIVBST0RVQ1RJT04gPyBMT0NBTF9FVkVOVFNfQVBJIDogUFJPRF9FVkVOVFNfQVBJO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1NVQlNfQVBJID0gIVBST0RVQ1RJT04gPyBMT0NBTF9TVUJTX0FQSSA6IFBST0RfU1VCU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1RPUkFHRV9OQU1FID0gJ3JlYWltX3Nka19zdG9yYWdlJztcbmV4cG9ydCBjb25zdCBSRUFJTV9JTVBSRVNTSU9OID0gJ2knO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0NMSUNLID0gJ2MnO1xuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5pbXBvcnQgU2VydmljZVdvcmtlclN0b3JhZ2UgZnJvbSAnc2VydmljZXdvcmtlci1zdG9yYWdlJztcbmltcG9ydCB7XG4gIFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OLFxuICBSRUFJTV9FVkVOVFNfQVBJLFxuICBSRUFJTV9TVUJTX0FQSSxcbiAgUkVBSU1fU1RPUkFHRV9OQU1FLFxuICBSRUFJTV9JTVBSRVNTSU9OLFxuICBSRUFJTV9DTElDSyxcbiAgUkVBSU1fVUlEXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTZXJ2aWNlV29ya2VyU3RvcmFnZShSRUFJTV9TVE9SQUdFX05BTUUsIDEpO1xuXG5jbGFzcyBSZUFpbVNXIHtcblxuICBzdGF0aWMgYXN5bmMgbG9nKGtpbmQsIHRyYWNraW5nLCB2YXJpYW50KSB7XG4gICAgaWYgKGtpbmQgJiYgdHJhY2tpbmcgJiYgdmFyaWFudCkge1xuICAgICAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgICAgIGNhc2UgJ2NtcCc6XG4gICAgICAgICAgZmV0Y2goYCR7UkVBSU1fRVZFTlRTX0FQSX0vbG9nP2s9JHtraW5kfSYke2F0b2IodHJhY2tpbmcpfWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0cmcnOlxuICAgICAgICAgIGZldGNoKGAke1JFQUlNX0VWRU5UU19BUEl9L3RyaWdnZXI/az0ke2tpbmR9JiR7YXRvYih0cmFja2luZyl9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZlZWQnOlxuICAgICAgICAgIGZldGNoKGAke1JFQUlNX0VWRU5UU19BUEl9L2ZlZWQ/az0ke2tpbmR9JiR7YXRvYih0cmFja2luZyl9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb24pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShSRUFJTV9VSUQpO1xuXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29uc3QgcmVxID0gbmV3IFJlcXVlc3QoYCR7UkVBSU1fU1VCU19BUEl9L3JlZnJlc2hgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBlbmRwb2ludDogc3Vic2NyaXB0aW9uLmVuZHBvaW50LFxuICAgICAgICAgICAgYXV0aDogc3Vic2NyaXB0aW9uLmtleXMuYXV0aCxcbiAgICAgICAgICAgIHAyNTZkaDogc3Vic2NyaXB0aW9uLmtleXMucDI1NmRoXG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5mZXRjaChyZXEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGFuZGxlSW5zdGFsbChldmVudCkge1xuICAgIHNlbGYuc2tpcFdhaXRpbmcoKTtcbiAgfVxuXG4gIHN0YXRpYyBoYW5kbGVBY3RpdmF0ZShldmVudCkge1xuICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlUHVzaEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGV2ZW50LmRhdGEuanNvbigpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBwYXlsb2FkLmMudDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgYm9keTogcGF5bG9hZC5jLmQsXG4gICAgICBpY29uOiBwYXlsb2FkLmMuaSxcbiAgICAgIGltYWdlOiBwYXlsb2FkLmMubSxcbiAgICAgIGJhZGdlOiBwYXlsb2FkLmMuYixcbiAgICAgIGFjdGlvbnM6IHBheWxvYWQuYy5hLFxuICAgICAgZGF0YToge1xuICAgICAgICB0cmFja2luZzogcGF5bG9hZC50LFxuICAgICAgICB1cmw6IHBheWxvYWQuYy51LFxuICAgICAgICBhY3Rpb25zOiBwYXlsb2FkLmMuYSxcbiAgICAgICAgdmFyaWFudDogcGF5bG9hZC52XG4gICAgICB9XG4gICAgfTtcblxuICAgIFJlQWltU1cubG9nKFJFQUlNX0lNUFJFU1NJT04sIHBheWxvYWQudCwgcGF5bG9hZC52KTtcbiAgICBldmVudC53YWl0VW50aWwoc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih0aXRsZSwgb3B0aW9ucykpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGhhbmRsZUNsaWNrRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgICBjb25zdCB0cmFja2luZyA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLnRyYWNraW5nO1xuICAgIGNvbnN0IHZhcmlhbnQgPSBldmVudC5ub3RpZmljYXRpb24uZGF0YS52YXJpYW50IHx8ICdjbXAnO1xuXG4gICAgaWYgKGV2ZW50LmFjdGlvbiA9PT0gJ2FjdGlvbi0xJykge1xuICAgICAgY29uc3QgdXJsID0gZXZlbnQubm90aWZpY2F0aW9uLmRhdGEuYWN0aW9uc1swXS51cmw7XG5cbiAgICAgIFJlQWltU1cubG9nKFJFQUlNX0NMSUNLLCB0cmFja2luZywgdmFyaWFudCk7XG4gICAgICBldmVudC53YWl0VW50aWwoc2VsZi5jbGllbnRzLm9wZW5XaW5kb3codXJsKSk7XG4gICAgfSBlbHNlIGlmIChldmVudC5hY3Rpb24gPT09ICdhY3Rpb24tMicpIHtcbiAgICAgIGNvbnN0IHVybCA9IGV2ZW50Lm5vdGlmaWNhdGlvbi5kYXRhLmFjdGlvbnNbMV0udXJsO1xuXG4gICAgICBSZUFpbVNXLmxvZyhSRUFJTV9DTElDSywgdHJhY2tpbmcsIHZhcmlhbnQpO1xuICAgICAgZXZlbnQud2FpdFVudGlsKHNlbGYuY2xpZW50cy5vcGVuV2luZG93KHVybCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZXZlbnQubm90aWZpY2F0aW9uLmRhdGEudXJsKSB7XG4gICAgICAgIFJlQWltU1cubG9nKFJFQUlNX0NMSUNLLCB0cmFja2luZywgdmFyaWFudCk7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChzZWxmLmNsaWVudHMub3BlbldpbmRvdyhldmVudC5ub3RpZmljYXRpb24uZGF0YS51cmwpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgaGFuZGxlVXBkYXRlU3Vic2NyaXB0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbmV3U3Vic2NyaXB0aW9uID0gYXdhaXQgc2VsZi5yZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG4gICAgY29uc3Qgb2xkU3Vic2NyaXB0aW9uID0gSlNPTi5wYXJzZShhd2FpdCBzdG9yYWdlLmdldEl0ZW0oJ3N1YnNjcmlwdGlvbicpKTtcblxuICAgIGlmICghb2xkU3Vic2NyaXB0aW9uKSB7XG4gICAgICBSZUFpbVNXLnNhdmVMb2NhbFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb24pO1xuICAgICAgUmVBaW1TVy51cGRhdGVTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAobmV3U3Vic2NyaXB0aW9uICYmIG9sZFN1YnNjcmlwdGlvbiAmJiAobmV3U3Vic2NyaXB0aW9uLmVuZHBvaW50ICE9PSBvbGRTdWJzY3JpcHRpb24uZW5kcG9pbnQpKSB7XG4gICAgICBSZUFpbVNXLnNhdmVMb2NhbFN1YnNjcmlwdGlvbihuZXdTdWJzY3JpcHRpb24pO1xuICAgICAgUmVBaW1TVy51cGRhdGVTdWJzY3JpcHRpb24obmV3U3Vic2NyaXB0aW9uKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgc2F2ZUxvY2FsU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbikge1xuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0SXRlbSgnc3Vic2NyaXB0aW9uJywgc3Vic2NyaXB0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRhdGEuYWN0aW9uID09PSBSRUFJTV9TQVZFX1NVQlNDUklQVElPTikge1xuICAgICAgZXZlbnQud2FpdFVudGlsKFJlQWltU1cuc2F2ZUxvY2FsU3Vic2NyaXB0aW9uKGV2ZW50LmRhdGEuc3Vic2NyaXB0aW9uKSk7XG4gICAgfVxuICB9XG59XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIFJlQWltU1cuaGFuZGxlSW5zdGFsbCk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgUmVBaW1TVy5oYW5kbGVBY3RpdmF0ZSk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2gnLCBSZUFpbVNXLmhhbmRsZVB1c2hFdmVudCk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ25vdGlmaWNhdGlvbmNsaWNrJywgUmVBaW1TVy5oYW5kbGVDbGlja0V2ZW50KTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcigncHVzaHN1YnNjcmlwdGlvbmNoYW5nZScsIFJlQWltU1cuaGFuZGxlVXBkYXRlU3Vic2NyaXB0aW9uKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIFJlQWltU1cuaGFuZGxlTWVzc2FnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9