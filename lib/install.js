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

/***/ "./node_modules/unfetch/dist/unfetch.module.js":
/*!*****************************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.module.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})});
//# sourceMappingURL=unfetch.module.js.map


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
exports.base64ToBytes = base64ToBytes;
exports.bytesToBase64 = bytesToBase64;
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
function base64ToBytes(base64) {
  var binString = atob(base64);
  return Uint8Array.from(binString, function (m) {
    return m.codePointAt(0);
  });
}
function bytesToBase64(bytes) {
  var binString = Array.from(bytes, function (byte) {
    return String.fromCodePoint(byte);
  }).join('');
  return btoa(binString);
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
var _unfetch = _interopRequireDefault(__webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.module.js"));
var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");
var _html = _interopRequireDefault(__webpack_require__(/*! ./html */ "./src/html.js"));
var _css = _interopRequireDefault(__webpack_require__(/*! ./css */ "./src/css.js"));
var _regeneratorRuntime = _interopRequireDefault(__webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /* eslint-disable */
/* eslint-enable */
var ReAimSDK = /*#__PURE__*/function () {
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
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee() {
        var timezone, response, metadata;
        return _regeneratorRuntime.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                _context.next = 4;
                return (0, _unfetch.default)(this.metaEndpoint + '/info?tz=' + timezone);
              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();
              case 7:
                metadata = _context.sent;
                return _context.abrupt("return", metadata);
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", null);
              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
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
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee2() {
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
      var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee3(user) {
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
                return (0, _unfetch.default)("".concat(this.metaEndpoint, "/refresh"), {
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
                return (0, _unfetch.default)("".concat(this.metaEndpoint, "/save"), {
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
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee4(metadata) {
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
        var wnContent = JSON.parse(decodeURIComponent(new TextDecoder().decode((0, _helpers.base64ToBytes)(metadata.wn_content))));
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
        var promptMeta = JSON.parse(new TextDecoder().decode((0, _helpers.base64ToBytes)(metadata.prompt)));
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
      var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime.default.mark(function _callee5(sitesUID) {
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
                if (metadata) {
                  this.showModal(metadata);
                }
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
        (0, _unfetch.default)("".concat(_constants.REAIM_EVENTS_API, "/conv?t=").concat(trackingID, "&payout=").concat(payout));
      }
    }
  }, {
    key: "addToTrigger",
    value: function addToTrigger(triggerID, attributes) {
      var isSubscribed = Notification.permission === 'granted';
      var sid = localStorage.getItem(_constants.REAIM_UID);
      if (!isSubscribed || !sid) {
        return;
      }
      (0, _unfetch.default)("".concat(_constants.REAIM_API, "/api/v1/trigger/add/subscriber"), {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          trigger_id: triggerID,
          subscriber_id: sid,
          props: attributes
        })
      });
    }
  }, {
    key: "removeFromTrigger",
    value: function removeFromTrigger(triggerID) {
      var sid = localStorage.getItem(_constants.REAIM_UID);
      (0, _unfetch.default)("".concat(_constants.REAIM_API, "/api/v1/trigger/remove/subscriber"), {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify({
          trigger_id: triggerID,
          subscriber_id: sid
        })
      });
    }
  }, {
    key: "addTags",
    value: function addTags(tags) {
      var isSubscribed = Notification.permission === 'granted';
      var sid = JSON.parse(localStorage.getItem(_constants.REAIM_UID));
      if (!isSubscribed || !sid) {
        return;
      }
      if (!Array.isArray('tags') && typeof tags === 'string') {
        tags = [tags];
      }
      (0, _unfetch.default)("".concat(_constants.REAIM_SUBS_API, "/tags"), {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9ub2RlX21vZHVsZXMvdW5mZXRjaC9kaXN0L3VuZmV0Y2gubW9kdWxlLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL3JlYWltLXdlYi1zZGsvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZWFpbS13ZWItc2RrLy4vc3JjL2h0bWwuanMiLCJ3ZWJwYWNrOi8vcmVhaW0td2ViLXNkay8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQUk9EVUNUSU9OIiwicHJvY2VzcyIsImV4cG9ydHMiLCJMT0NBTF9BUEkiLCJMT0NBTF9FVkVOVFNfQVBJIiwiTE9DQUxfU1VCU19BUEkiLCJQUk9EX0FQSSIsIlBST0RfRVZFTlRTX0FQSSIsIlBST0RfU1VCU19BUEkiLCJSRUFJTV9TREtfVklTSVRTIiwiUkVBSU1fREVOSUVEX09OX1ZJU0lUUyIsIlJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEIiwiUkVBSU1fVUlEIiwiUkVBSU1fUkVUUllfVVNFUiIsIlJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OIiwiUkVBSU1fQVBJIiwiUkVBSU1fRVZFTlRTX0FQSSIsIlJFQUlNX1NVQlNfQVBJIiwiUkVBSU1fU1RPUkFHRV9OQU1FIiwiUkVBSU1fSU1QUkVTU0lPTiIsIlJFQUlNX0NMSUNLIiwiX2RlZmF1bHQiLCJwcm9tcHRNZXRhIiwiY29uY2F0IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udENvbG9yIiwiYmxvY2tCdXR0b25Db2xvciIsImJsb2NrRm9udENvbG9yIiwiYWxsb3dCdXR0b25Db2xvciIsImFsbG93Rm9udENvbG9yIiwiZGVmYXVsdCIsIm1vZHVsZSIsIm5vb3AiLCJ1cmxCYXNlNjRUb1VpbnQ4QXJyYXkiLCJiYXNlNjRTdHJpbmciLCJwYWRkaW5nIiwicmVwZWF0IiwibGVuZ3RoIiwiYmFzZTY0IiwicmVwbGFjZSIsInJhd0RhdGEiLCJ3aW5kb3ciLCJhdG9iIiwib3V0cHV0QXJyYXkiLCJVaW50OEFycmF5IiwiaSIsImNoYXJDb2RlQXQiLCJpc1ZhbGlkVG9rZW4iLCJzdHIiLCJidG9hIiwiZXJyIiwiYmFzZTY0VG9CeXRlcyIsImJpblN0cmluZyIsImZyb20iLCJtIiwiY29kZVBvaW50QXQiLCJieXRlc1RvQmFzZTY0IiwiYnl0ZXMiLCJBcnJheSIsImJ5dGUiLCJTdHJpbmciLCJmcm9tQ29kZVBvaW50Iiwiam9pbiIsImxvZ28iLCJhY3Rpb25UZXh0IiwicmVtb3ZlQnJhbmRpbmciLCJibG9ja0J1dHRvbiIsImFsbG93QnV0dG9uIiwiX3VuZmV0Y2giLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWxwZXJzIiwiX2NvbnN0YW50cyIsIl9odG1sIiwiX2NzcyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIm4iLCJ0IiwiciIsImEiLCJjIiwidSIsInZhbHVlIiwiZG9uZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIk51bWJlciIsIlJlQWltU0RLIiwib25BbGxvdyIsIm9uQmxvY2siLCJFcnJvciIsIm1ldGFFbmRwb2ludCIsImxvZyIsIm1zZyIsImNvbnNvbGUiLCJfcmVmIiwibWFyayIsIl9jYWxsZWUiLCJ0aW1lem9uZSIsInJlc3BvbnNlIiwibWV0YWRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwidGltZVpvbmUiLCJzZW50IiwianNvbiIsImFicnVwdCIsInQwIiwic3RvcCIsImdldE1ldGFkYXRhIiwiY2FuU3Vic2NyaWJlIiwiTm90aWZpY2F0aW9uIiwicGVybWlzc2lvbiIsInNldEFzU3Vic2NyaWJlZCIsInNldFZhbHVlIiwic2V0QXNVbnN1YnNjcmliZWQiLCJ2YWwiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlVmFsdWUiLCJyZW1vdmVJdGVtIiwiZ2V0VmFsdWUiLCJnZXRJdGVtIiwiZ2V0U1dQYXRoIiwicGF0aCIsInNlbGYiLCJSRUFJTV9TV19QQVRIX0dMT0JBTCIsInJlZ2lzdGVyU1ciLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJwcmVwYXJlUmVxdWVzdCIsInN1YnNjcmlwdGlvbiIsInNpdGVfaWQiLCJjb3VudHJ5X2lkIiwicGxhdGZvcm1faWQiLCJvc19pZCIsInRpbWV6b25lX2lkIiwidHoiLCJEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJicm93c2VyX2lkIiwidXNlcl9pZCIsImVuZHBvaW50IiwiYXV0aCIsImtleXMiLCJwMjU2ZGgiLCJwYWdlX3VybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzaXRlc191aWQiLCJzaXRlc1VJRCIsInN1YnNjcmlwdGlvbkV4aXN0ZWQiLCJzYXZlRm9yUmV0cnkiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJpZCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInNhdmVVc2VyIiwicGFyc2UiLCJyZXRyeVNhdmUiLCJfcmVmMyIsIl9jYWxsZWUzIiwidXBkYXRlIiwicmVzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibWV0aG9kIiwiYm9keSIsInRleHQiLCJodG1sRE9NIiwiaGlkZU1vZGFsIiwiX3giLCJjaGVja0lmU3RpbGxTdWJzY3JpYmVkIiwiX3JlZjQiLCJfY2FsbGVlNCIsInN1YnNjcmlwdGlvbk9wdGlvbnMiLCJzdHJpbmdpZmllZCIsInBhcnNlZCIsInVzZXJPYmplY3QiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJ1c2VyVmlzaWJsZU9ubHkiLCJhcHBsaWNhdGlvblNlcnZlcktleSIsInZhcGlkX3B1Yl9rZXkiLCJyZWdpc3RyYXRpb24iLCJwdXNoTWFuYWdlciIsInN1YnNjcmliZSIsImNvbnRyb2xsZXIiLCJwb3N0TWVzc2FnZSIsImFjdGlvbiIsInduIiwic2hvd1dlbGNvbWVOb3RpZmljYXRpb24iLCJ0cnlUb1N1YnNjcmliZSIsIl94MiIsInduQ29udGVudCIsImRlY29kZVVSSUNvbXBvbmVudCIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwid25fY29udGVudCIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0YSIsInVybCIsInByZWxvYWRJbWFnZSIsImltZyIsIkltYWdlIiwic3JjIiwic2hvd0N1c3RvbU1vZGFsIiwiX3RoaXMiLCJjc3MiLCJodG1sIiwiUmVBaW1DU1MiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJSZUFpbURPTSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCIkZGVueSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibG9nVmlzaXRzTnVtYmVyV2hlbkRlbmllZCIsIiRhY2NlcHQiLCJhcHBlbmRDaGlsZCIsImhlYWQiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJlbm91Z2hWaXNpdHNBZnRlckJsb2NrIiwidmlzaXROdW1iZXIiLCJ2aXNpdHNXaGVuRGVuaWVkIiwiZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkIiwicGFnZXZpZXdzIiwiZ2V0VmlzaXRzIiwic2hvd01vZGFsIiwiX3RoaXMyIiwicHJvbXB0X3R5cGUiLCJwcm9tcHQiLCJzaG93SW1tZWRpYXRlbHkiLCJ2aXNpdHMiLCJzZXNzaW9uTnVtYmVyIiwiYXNrQWdhaW5BZnRlciIsInNldFRpbWVvdXQiLCJzaG93QWZ0ZXIiLCJsb2dWaXNpdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJpbml0IiwiX3gzIiwidHJhY2tDb252ZXJzaW9uIiwicGF5b3V0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwidHJhY2tpbmdJRCIsImdldCIsImFkZFRvVHJpZ2dlciIsInRyaWdnZXJJRCIsImF0dHJpYnV0ZXMiLCJpc1N1YnNjcmliZWQiLCJzaWQiLCJoZWFkZXJzIiwidHJpZ2dlcl9pZCIsInN1YnNjcmliZXJfaWQiLCJwcm9wcyIsInJlbW92ZUZyb21UcmlnZ2VyIiwiYWRkVGFncyIsInRhZ3MiLCJpc0FycmF5Iiwic3Vic2NyaWJlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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UztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7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U0FBUyxDQUFDO1VBQ25CMEgsVUFBVSxFQUFFVCxHQUFHO1VBQ2ZPLElBQUksRUFBSkE7UUFDRixDQUFDO01BQ0gsQ0FBQyxDQUFDO0lBQ0o7RUFBQztFQUFBLE9BQUFuTSxRQUFBO0FBQUE7QUF5QkgzRSxNQUFNLENBQUMyRSxRQUFRLEdBQUdBLFFBQVE7QUFBQyxJQUFBL0YsUUFBQSxHQUNaK0YsUUFBUTtBQUFBbEgsT0FBQSxDQUFBNEIsT0FBQSxHQUFBVCxRQUFBO0FBQUFVLE1BQUEsQ0FBQTdCLE9BQUEsR0FBQUEsT0FBQSxZIiwiZmlsZSI6Imluc3RhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInJlYWltLXdlYi1zZGtcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhaW0td2ViLXNka1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFpbS13ZWItc2RrXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHsgb2JqW2tleV0gPSBkZXNjLnZhbHVlOyB9O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIH0pO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gIGRlZmluZVByb3BlcnR5KFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIFwiY29uc3RydWN0b3JcIixcbiAgICB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbiwgY29uZmlndXJhYmxlOiB0cnVlIH1cbiAgKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7IHZhbHVlOiBlbnF1ZXVlIH0pO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZDtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCwgb3IgYSBtaXNzaW5nIC5uZXh0IG1laHRvZCwgYWx3YXlzIHRlcm1pbmF0ZSB0aGVcbiAgICAgIC8vIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICBpZiAobWV0aG9kTmFtZSA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZXRob2ROYW1lICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCk7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIGluIG1vZGVybiBlbmdpbmVzXG4gIC8vIHdlIGNhbiBleHBsaWNpdGx5IGFjY2VzcyBnbG9iYWxUaGlzLiBJbiBvbGRlciBlbmdpbmVzIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzLnJlc3BvbnNlVGV4dCkudGhlbihKU09OLnBhcnNlKX0sYmxvYjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3MucmVzcG9uc2VdKSl9LGNsb25lOmEsaGVhZGVyczp7a2V5czpmdW5jdGlvbigpe3JldHVybiBvfSxlbnRyaWVzOmZ1bmN0aW9uKCl7cmV0dXJuIHV9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gaVtlLnRvTG93ZXJDYXNlKCldfSxoYXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKWluIGl9fX19O2Zvcih2YXIgbCBpbiBzLm9wZW4obi5tZXRob2R8fFwiZ2V0XCIsZSwhMCkscy5vbmxvYWQ9ZnVuY3Rpb24oKXtzLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL14oLio/KTpbXlxcU1xcbl0qKFtcXHNcXFNdKj8pJC9nbSxmdW5jdGlvbihlLG4sdCl7by5wdXNoKG49bi50b0xvd2VyQ2FzZSgpKSx1LnB1c2goW24sdF0pLGlbbl09aVtuXT9pW25dK1wiLFwiK3Q6dH0pLHQoYSgpKX0scy5vbmVycm9yPXIscy53aXRoQ3JlZGVudGlhbHM9XCJpbmNsdWRlXCI9PW4uY3JlZGVudGlhbHMsbi5oZWFkZXJzKXMuc2V0UmVxdWVzdEhlYWRlcihsLG4uaGVhZGVyc1tsXSk7cy5zZW5kKG4uYm9keXx8bnVsbCl9KX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuZmV0Y2gubW9kdWxlLmpzLm1hcFxuIiwiZXhwb3J0IGNvbnN0IFBST0RVQ1RJT04gPSAhIShwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKTtcbmNvbnN0IExPQ0FMX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnO1xuY29uc3QgTE9DQUxfRVZFTlRTX0FQSSA9ICdodHRwOi8vbG9jYWxob3N0OjU1NTUnO1xuY29uc3QgTE9DQUxfU1VCU19BUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo0MzQzJztcbmNvbnN0IFBST0RfQVBJID0gJ2h0dHBzOi8vYXBpLnJlYWltLm1lJztcbmNvbnN0IFBST0RfRVZFTlRTX0FQSSA9ICdodHRwczovL2V2ZW50cy5yZWFpbS5tZSc7XG5jb25zdCBQUk9EX1NVQlNfQVBJID0gJ2h0dHBzOi8vc3Vicy5yZWFpbS5tZSc7XG5cbmV4cG9ydCBjb25zdCBSRUFJTV9TREtfVklTSVRTID0gJ3JlYWltX3Nka192aXNpdHMnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0RFTklFRF9PTl9WSVNJVFMgPSAncmVhaW1fc2RrX2RlbmllZF9vbl92aXNpdHMnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVEID0gJ3JlYWltX3Nka19wdXNoX3VzZXJfc3Vic2NyaWJlZCc7XG5leHBvcnQgY29uc3QgUkVBSU1fVUlEID0gJ3JlYWltX3Nka191aWQnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1JFVFJZX1VTRVIgPSAncmVhaW1fc2RrX3JldHJ5X3VzZXInO1xuZXhwb3J0IGNvbnN0IFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OID0gJ3JlYWltX3NhdmVfc3Vic2NyaXB0aW9uJztcbmV4cG9ydCBjb25zdCBSRUFJTV9BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0FQSSA6IFBST0RfQVBJO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0VWRU5UU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX0VWRU5UU19BUEkgOiBQUk9EX0VWRU5UU19BUEk7XG5leHBvcnQgY29uc3QgUkVBSU1fU1VCU19BUEkgPSAhUFJPRFVDVElPTiA/IExPQ0FMX1NVQlNfQVBJIDogUFJPRF9TVUJTX0FQSTtcbmV4cG9ydCBjb25zdCBSRUFJTV9TVE9SQUdFX05BTUUgPSAncmVhaW1fc2RrX3N0b3JhZ2UnO1xuZXhwb3J0IGNvbnN0IFJFQUlNX0lNUFJFU1NJT04gPSAnaSc7XG5leHBvcnQgY29uc3QgUkVBSU1fQ0xJQ0sgPSAnYyc7XG4iLCJleHBvcnQgZGVmYXVsdCAocHJvbXB0TWV0YSkgPT4ge1xuICByZXR1cm4gYFxuICAgIC5yZWFpbS13ZWItbW9kYWwge1xuICAgICAgYWxsOiBpbml0aWFsO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgbWF4LXdpZHRoOiA1NDdweDtcbiAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgcGFkZGluZzogNDVweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9tcHRNZXRhLmJhY2tncm91bmRDb2xvcn07XG4gICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmZvbnRDb2xvcn07XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMjBweCByZ2JhKDAsMCwwLDAuMTIpLCAtMnB4IC0xcHggMjBweCAwcHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggOHB4IDhweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbC1jbG9zZWQge1xuICAgICAgbWF4LWhlaWdodDogMDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsICoge1xuICAgICAgYWxsOiB1bnNldDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtY29udGVudC13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWJ1dHRvbnMgc21hbGwgYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiAke3Byb21wdE1ldGEuZm9udENvbG9yfTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIGNvbG9yOiAjMDIwRTE3O1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6IGJ1dHRvbjtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtbG9nbyB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtbG9nbyBpbWcge1xuICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tbW9kYWwtY29udGVudCB7XG4gICAgICB3aWR0aDogMzYwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHAge1xuICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tYnV0dG9uLWRlbnkge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9tcHRNZXRhLmJsb2NrQnV0dG9uQ29sb3J9O1xuICAgICAgY29sb3I6ICR7cHJvbXB0TWV0YS5ibG9ja0ZvbnRDb2xvcn07XG4gICAgfVxuXG4gICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tYnV0dG9uLWFjY2VwdCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb21wdE1ldGEuYWxsb3dCdXR0b25Db2xvcn07XG4gICAgICBjb2xvcjogJHtwcm9tcHRNZXRhLmFsbG93Rm9udENvbG9yfTtcbiAgICB9XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnJlYWltLXdlYi1tb2RhbCB7XG4gICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMHB4IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1tb2RhbC1jb250ZW50IHAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLXByb21wdC1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDY4cHg7XG4gICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAucmVhaW0td2ViLW1vZGFsIC5yZWFpbS1wcm9tcHQtYnV0dG9ucyBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgQG1lZGlhKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICAgIC5yZWFpbS13ZWItbW9kYWwgLnJlYWltLW1vZGFsLWNvbnRlbnQgcCB7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEobWF4LXdpZHRoOiAzMjRweCkge1xuICAgICAgLnJlYWltLXdlYi1tb2RhbCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tbW9kYWwtY29udGVudCBwIHtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgIH1cblxuICAgICAgLnJlYWltLXdlYi1tb2RhbCAucmVhaW0tcHJvbXB0LWJ1dHRvbnMgYnV0dG9uIHtcbiAgICAgICAgcGFkZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIGxldCBwYWRkaW5nID0gJz0nLnJlcGVhdCgoNCAtIGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSAlIDQpO1xuICBsZXQgYmFzZTY0ID0gKGJhc2U2NFN0cmluZyArIHBhZGRpbmcpXG4gICAgLnJlcGxhY2UoL1xcLS9nLCAnKycpXG4gICAgLnJlcGxhY2UoL18vZywgJy8nKTtcblxuICBsZXQgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gIGxldCBvdXRwdXRBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0RhdGEubGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcbiAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gb3V0cHV0QXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkVG9rZW4oc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGJ0b2EoYXRvYihzdHIpKSA9PT0gc3RyO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMoYmFzZTY0KSB7XG4gIGNvbnN0IGJpblN0cmluZyA9IGF0b2IoYmFzZTY0KTtcblxuICByZXR1cm4gVWludDhBcnJheS5mcm9tKGJpblN0cmluZywgKG0pID0+IG0uY29kZVBvaW50QXQoMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChieXRlcykge1xuICBjb25zdCBiaW5TdHJpbmcgPSBBcnJheS5mcm9tKGJ5dGVzLCAoYnl0ZSkgPT5cbiAgICBTdHJpbmcuZnJvbUNvZGVQb2ludChieXRlKSxcbiAgKS5qb2luKCcnKTtcblxuICByZXR1cm4gYnRvYShiaW5TdHJpbmcpO1xufVxuXG4iLCJleHBvcnQgZGVmYXVsdCAocHJvbXB0TWV0YSkgPT4ge1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtY29udGVudC13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVhaW0tcHJvbXB0LWxvZ28tYnJhbmRpbmdcIj5cbiAgICAgICAgJHtwcm9tcHRNZXRhLmxvZ28gPyBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJlYWltLXByb21wdC1sb2dvXCIgc3R5bGU9XCIke3Byb21wdE1ldGEubG9nbyA/ICd2aXNpYmlsaXR5OiB2aXNpYmxlJyA6ICd2aXNpYmlsaXR5OiBoaWRkZW4nfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb21wdE1ldGEubG9nb31cIiBhbHQ9XCJsb2dvXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAgOiAnJ31cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicmVhaW0tbW9kYWwtY29udGVudFwiPlxuICAgICAgICA8cD4ke3Byb21wdE1ldGEuYWN0aW9uVGV4dH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyZWFpbS1wcm9tcHQtYnV0dG9uc1wiPlxuICAgICAgPHNtYWxsPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFpbS5tZVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgJHtwcm9tcHRNZXRhLnJlbW92ZUJyYW5kaW5nID8gJycgOiAnUG93ZXJlZCBieSBSZUFpbSd9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvc21hbGw+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJyZWFpbS1idXR0b24tZGVueVwiPiR7cHJvbXB0TWV0YS5ibG9ja0J1dHRvbn08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlYWltLWJ1dHRvbi1hY2NlcHRcIj4ke3Byb21wdE1ldGEuYWxsb3dCdXR0b259PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCc7XG5cbmltcG9ydCB7XG4gIG5vb3AsXG4gIHVybEJhc2U2NFRvVWludDhBcnJheSxcbiAgaXNWYWxpZFRva2VuLFxuICBiYXNlNjRUb0J5dGVzXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmltcG9ydCB7XG4gIFJFQUlNX1NES19WSVNJVFMsXG4gIFJFQUlNX0RFTklFRF9PTl9WSVNJVFMsXG4gIFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELFxuICBSRUFJTV9VSUQsXG4gIFJFQUlNX0FQSSxcbiAgUkVBSU1fU1VCU19BUEksXG4gIFJFQUlNX0VWRU5UU19BUEksXG4gIFJFQUlNX1NBVkVfU1VCU0NSSVBUSU9OLFxuICBQUk9EVUNUSU9OLFxuICBSRUFJTV9SRVRSWV9VU0VSXG59IGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHJlbmRlclVJIGZyb20gJy4vaHRtbCc7XG5pbXBvcnQgcmVuZGVyU3R5bGVzIGZyb20gJy4vY3NzJztcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCByZWdlbmVyYXRvclJ1bnRpbWUgZnJvbSAncmVnZW5lcmF0b3ItcnVudGltZSc7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmNsYXNzIFJlQWltU0RLIHtcbiAgY29uc3RydWN0b3Iob25BbGxvdywgb25CbG9jaykge1xuICAgIGlmIChvbkFsbG93ICYmIHR5cGVvZiBvbkFsbG93ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgb2Ygb25BbGxvdyBwYXJhbWV0ZXIgc2hvdWxkIGJlIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChvbkJsb2NrICYmIHR5cGVvZiBvbkJsb2NrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGUgb2Ygb25CbG9jayBwYXJhbWV0ZXIgc2hvdWxkIGJlIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHRoaXMubWV0YUVuZHBvaW50ID0gUkVBSU1fU1VCU19BUEk7XG4gICAgdGhpcy5vbkFsbG93ID0gb25BbGxvdyB8fCBub29wO1xuICAgIHRoaXMub25CbG9jayA9IG9uQmxvY2sgfHwgbm9vcDtcbiAgfVxuXG4gIGxvZyhtc2cpIHtcbiAgICBjb25zb2xlLmxvZygnUmVBaW0gU0RLIC0nLCBtc2cpO1xuICB9XG5cbiAgYXN5bmMgZ2V0TWV0YWRhdGEoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRpbWV6b25lID0gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLm1ldGFFbmRwb2ludCArICcvaW5mbz90ej0nICsgdGltZXpvbmUpO1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBtZXRhZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNhblN1YnNjcmliZSgpIHtcbiAgICByZXR1cm4gTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdkZWZhdWx0JztcbiAgfVxuXG4gIHNldEFzU3Vic2NyaWJlZCgpIHtcbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1BVU0hfVVNFUl9TVUJTQ1JJQkVELCB0cnVlKTtcbiAgfVxuXG4gIHNldEFzVW5zdWJzY3JpYmVkKCkge1xuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fUFVTSF9VU0VSX1NVQlNDUklCRUQsIGZhbHNlKTtcbiAgfVxuXG4gIHNldFZhbHVlKGtleSwgdmFsKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWwpO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWUoa2V5KSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxuXG4gIGdldFZhbHVlKGtleSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICB9XG5cbiAgZ2V0U1dQYXRoKCkge1xuICAgIGNvbnN0IHBhdGggPSAhUFJPRFVDVElPTiA/XG4gICAgICAnL3JlYWltLXN3LmpzJyA6XG4gICAgICAoc2VsZi53aW5kb3cgJiYgc2VsZi53aW5kb3cuUkVBSU1fU1dfUEFUSF9HTE9CQUwgfHwgJy9zdy5qcycpO1xuXG4gICAgcmV0dXJuIHBhdGg7XG4gIH1cblxuICByZWdpc3RlclNXKCkge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFNXUGF0aCgpO1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKHBhdGgpO1xuICB9XG5cbiAgcHJlcGFyZVJlcXVlc3Qoc3Vic2NyaXB0aW9uLCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBzaXRlX2lkOiBtZXRhZGF0YS5zaXRlX2lkLFxuICAgICAgY291bnRyeV9pZDogbWV0YWRhdGEuY291bnRyeV9pZCxcbiAgICAgIHBsYXRmb3JtX2lkOiBtZXRhZGF0YS5wbGF0Zm9ybV9pZCxcbiAgICAgIG9zX2lkOiBtZXRhZGF0YS5vc19pZCxcbiAgICAgIHRpbWV6b25lX2lkOiBtZXRhZGF0YS50aW1lem9uZV9pZCxcbiAgICAgIHR6OiBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCxcbiAgICAgIGJyb3dzZXJfaWQ6IG1ldGFkYXRhLmJyb3dzZXJfaWQsXG4gICAgICB1c2VyX2lkOiBtZXRhZGF0YS51c2VyX2lkLFxuICAgICAgZW5kcG9pbnQ6IHN1YnNjcmlwdGlvbi5lbmRwb2ludCxcbiAgICAgIGF1dGg6IHN1YnNjcmlwdGlvbi5rZXlzLmF1dGgsXG4gICAgICBwMjU2ZGg6IHN1YnNjcmlwdGlvbi5rZXlzLnAyNTZkaCxcbiAgICAgIHBhZ2VfdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzaXRlc191aWQ6IHRoaXMuc2l0ZXNVSURcbiAgICB9O1xuICB9XG5cbiAgc3Vic2NyaXB0aW9uRXhpc3RlZCgpIHtcbiAgICByZXR1cm4gISEodGhpcy5nZXRWYWx1ZShSRUFJTV9VSUQpKTtcbiAgfVxuXG4gIHNhdmVGb3JSZXRyeSh1c2VyKSB7XG4gICAgdGhpcy5zZXRWYWx1ZShSRUFJTV9SRVRSWV9VU0VSLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gIH1cblxuICBhc3luYyByZXRyeVNhdmUoKSB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMuZ2V0VmFsdWUoUkVBSU1fUkVUUllfVVNFUik7XG4gICAgY29uc3QgaWQgPSB0aGlzLmdldFZhbHVlKFJFQUlNX1VJRCk7XG5cbiAgICBpZiAodXNlciAmJiAhaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVVzZXIoSlNPTi5wYXJzZSh1c2VyKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlVmFsdWUoUkVBSU1fUkVUUllfVVNFUik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2coJ3JldHJ5X3NhdmVfZmFpbGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2F2ZVVzZXIodXNlcikge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25FeGlzdGVkKCkpIHtcbiAgICAgICAgY29uc3QgdXBkYXRlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5tZXRhRW5kcG9pbnR9L3JlZnJlc2hgLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0VmFsdWUoUkVBSU1fVUlEKSxcbiAgICAgICAgICAgIGVuZHBvaW50OiB1c2VyLmVuZHBvaW50LFxuICAgICAgICAgICAgYXV0aDogdXNlci5hdXRoLFxuICAgICAgICAgICAgcDI1NmRoOiB1c2VyLnAyNTZkaFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLmxvZygndXNlcl91cGRhdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMubWV0YUVuZHBvaW50fS9zYXZlYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpZCA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fVUlELCBpZCk7XG4gICAgICB0aGlzLnNldEFzU3Vic2NyaWJlZCgpO1xuXG4gICAgICBpZiAodGhpcy5odG1sRE9NKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9nKCd1c2VyX3N1YnNjcmliZWQnKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2F2ZUZvclJldHJ5KHVzZXIpO1xuICAgICAgdGhpcy5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0lmU3RpbGxTdWJzY3JpYmVkKCkge1xuICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gJ2dyYW50ZWQnKSByZXR1cm47XG4gICAgdGhpcy5zZXRBc1Vuc3Vic2NyaWJlZCgpO1xuICB9XG5cbiAgYXN5bmMgdHJ5VG9TdWJzY3JpYmUobWV0YWRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uT3B0aW9ucyA9IHtcbiAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogdXJsQmFzZTY0VG9VaW50OEFycmF5KG1ldGFkYXRhLnZhcGlkX3B1Yl9rZXkpXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCB0aGlzLnJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoc3Vic2NyaXB0aW9uT3B0aW9ucyk7XG5cbiAgICAgIGlmIChuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5jb250cm9sbGVyKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLmNvbnRyb2xsZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGFjdGlvbjogUkVBSU1fU0FWRV9TVUJTQ1JJUFRJT04sXG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1YnNjcmlwdGlvbikpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KHN1YnNjcmlwdGlvbik7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHN0cmluZ2lmaWVkKTtcbiAgICAgIGNvbnN0IHVzZXJPYmplY3QgPSB0aGlzLnByZXBhcmVSZXF1ZXN0KHBhcnNlZCwgbWV0YWRhdGEpO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVVc2VyKHVzZXJPYmplY3QpO1xuXG4gICAgICB0aGlzLm9uQWxsb3coKTtcblxuICAgICAgaWYgKG1ldGFkYXRhLnduKSB7XG4gICAgICAgIHRoaXMuc2hvd1dlbGNvbWVOb3RpZmljYXRpb24obWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5sb2coZXJyKTtcbiAgICAgIHRoaXMubG9nKCd1c2VyX2RlY2xpbmVkJyk7XG4gICAgICB0aGlzLm9uQmxvY2soKTtcbiAgICB9XG4gIH1cblxuICBzaG93V2VsY29tZU5vdGlmaWNhdGlvbihtZXRhZGF0YSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3bkNvbnRlbnQgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYmFzZTY0VG9CeXRlcyhtZXRhZGF0YS53bl9jb250ZW50KSkpKTtcblxuICAgICAgdGhpcy5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbih3bkNvbnRlbnQudGl0bGUsIHtcbiAgICAgICAgYm9keTogd25Db250ZW50LmRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRhOiB7IHVybDogd25Db250ZW50LnVybCB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJlbG9hZEltYWdlKHVybCkge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgaW1nLnNyYyA9IHVybDtcbiAgfVxuXG4gIHNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSkge1xuICAgIGNvbnN0IGNzcyA9IHJlbmRlclN0eWxlcyhwcm9tcHRNZXRhKTtcbiAgICBjb25zdCBodG1sID0gcmVuZGVyVUkocHJvbXB0TWV0YSk7XG5cbiAgICBpZiAocHJvbXB0TWV0YS5sb2dvKSB7XG4gICAgICB0aGlzLnByZWxvYWRJbWFnZShwcm9tcHRNZXRhLmxvZ28pO1xuICAgIH1cblxuICAgIGNvbnN0IFJlQWltQ1NTID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIFJlQWltQ1NTLmlubmVySFRNTCA9IGNzcztcblxuICAgIGNvbnN0IFJlQWltRE9NID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGh0bWxET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGh0bWxET00uY2xhc3NMaXN0LmFkZCgncmVhaW0td2ViLW1vZGFsJyk7XG4gICAgaHRtbERPTS5jbGFzc0xpc3QuYWRkKCdyZWFpbS13ZWItbW9kYWwtY2xvc2VkJyk7XG4gICAgaHRtbERPTS5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgdGhpcy5odG1sRE9NID0gaHRtbERPTTtcblxuICAgIGNvbnN0ICRkZW55ID0gaHRtbERPTS5xdWVyeVNlbGVjdG9yKCcucmVhaW0tYnV0dG9uLWRlbnknKTtcblxuICAgICRkZW55LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLmxvZ1Zpc2l0c051bWJlcldoZW5EZW5pZWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0ICRhY2NlcHQgPSBodG1sRE9NLnF1ZXJ5U2VsZWN0b3IoJy5yZWFpbS1idXR0b24tYWNjZXB0Jyk7XG5cbiAgICAkYWNjZXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XG4gICAgICB0aGlzLnRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKTtcbiAgICB9KTtcblxuICAgIFJlQWltRE9NLmFwcGVuZENoaWxkKGh0bWxET00pO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoUmVBaW1DU1MpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUmVBaW1ET00pO1xuXG4gICAgaHRtbERPTS5jbGFzc0xpc3QucmVtb3ZlKCdyZWFpbS13ZWItbW9kYWwtY2xvc2VkJyk7XG4gIH1cblxuICBoaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5odG1sRE9NLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBlbm91Z2hWaXNpdHNBZnRlckJsb2NrKHZpc2l0TnVtYmVyKSB7XG4gICAgY29uc3QgdmlzaXRzV2hlbkRlbmllZCA9IHRoaXMuZ2V0TnVtYmVyT2ZWaXNpdHNXaGVuRGVuaWVkKCk7XG4gICAgY29uc3QgcGFnZXZpZXdzID0gdGhpcy5nZXRWaXNpdHMoKTtcblxuICAgIGlmICh2aXNpdHNXaGVuRGVuaWVkICE9PSAwKSB7XG4gICAgICBpZiAocGFnZXZpZXdzID49ICh2aXNpdHNXaGVuRGVuaWVkICsgdmlzaXROdW1iZXIpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICBzaG93TW9kYWwobWV0YWRhdGEpIHtcbiAgICBpZiAobWV0YWRhdGEucHJvbXB0X3R5cGUgPT09ICdjdXN0b20nKSB7XG4gICAgICBjb25zdCBwcm9tcHRNZXRhID0gSlNPTi5wYXJzZShuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUoYmFzZTY0VG9CeXRlcyhtZXRhZGF0YS5wcm9tcHQpKSk7XG5cbiAgICAgIGlmIChwcm9tcHRNZXRhLnNob3dJbW1lZGlhdGVseSkge1xuICAgICAgICB0aGlzLmxvZygnc2hvd19pbW1lZGlhdGVseV9jdXN0b21fcHJvbXB0Jyk7XG4gICAgICAgIHRoaXMuc2hvd0N1c3RvbU1vZGFsKG1ldGFkYXRhLCBwcm9tcHRNZXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpc2l0cyA9IHRoaXMuZ2V0VmlzaXRzKCk7XG5cbiAgICAgICAgaWYgKHZpc2l0cyA+PSBwcm9tcHRNZXRhLnNlc3Npb25OdW1iZXIgJiYgdGhpcy5lbm91Z2hWaXNpdHNBZnRlckJsb2NrKHByb21wdE1ldGEuYXNrQWdhaW5BZnRlcikpIHtcbiAgICAgICAgICB0aGlzLmxvZygnc2hvd190aW1lZF9jdXN0b21fcHJvbXB0Jyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dDdXN0b21Nb2RhbChtZXRhZGF0YSwgcHJvbXB0TWV0YSk7XG4gICAgICAgICAgfSwgcHJvbXB0TWV0YS5zaG93QWZ0ZXIgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvZygnc2hvd19uYXRpdmVfcHJvbXB0Jyk7XG4gICAgICB0aGlzLnRyeVRvU3Vic2NyaWJlKG1ldGFkYXRhKTtcbiAgICB9XG4gIH1cblxuICBsb2dWaXNpdCgpIHtcbiAgICBjb25zdCB2aXNpdHMgPSB0aGlzLmdldFZhbHVlKFJFQUlNX1NES19WSVNJVFMpIHx8IDA7XG5cbiAgICB0aGlzLnNldFZhbHVlKFJFQUlNX1NES19WSVNJVFMsICt2aXNpdHMgKyAxKTtcbiAgfVxuXG4gIGxvZ1Zpc2l0c051bWJlcldoZW5EZW5pZWQoKSB7XG4gICAgY29uc3QgdmlzaXRzID0gdGhpcy5nZXRWYWx1ZShSRUFJTV9TREtfVklTSVRTKTtcblxuICAgIHRoaXMuc2V0VmFsdWUoUkVBSU1fREVOSUVEX09OX1ZJU0lUUywgdmlzaXRzKTtcbiAgfVxuXG4gIGdldE51bWJlck9mVmlzaXRzV2hlbkRlbmllZCgpIHtcbiAgICBjb25zdCB2aXNpdHMgPSBKU09OLnBhcnNlKHRoaXMuZ2V0VmFsdWUoUkVBSU1fREVOSUVEX09OX1ZJU0lUUykpO1xuXG4gICAgaWYgKHZpc2l0cykge1xuICAgICAgcmV0dXJuIHZpc2l0cztcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGdldFZpc2l0cygpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmdldFZhbHVlKFJFQUlNX1NES19WSVNJVFMpKSB8fCAwO1xuICB9XG5cbiAgc3RhdGljIHRyYWNrQ29udmVyc2lvbihwYXlvdXQpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IHRyYWNraW5nSUQgPSBwYXJhbXMuZ2V0KCdyX2NpZCcpO1xuXG4gICAgaWYgKHRyYWNraW5nSUQgJiYgcGF5b3V0ICYmIGlzVmFsaWRUb2tlbih0cmFja2luZ0lEKSkge1xuICAgICAgZmV0Y2goYCR7UkVBSU1fRVZFTlRTX0FQSX0vY29udj90PSR7dHJhY2tpbmdJRH0mcGF5b3V0PSR7cGF5b3V0fWApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBhZGRUb1RyaWdnZXIodHJpZ2dlcklELCBhdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgaXNTdWJzY3JpYmVkID0gTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJztcbiAgICBjb25zdCBzaWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShSRUFJTV9VSUQpO1xuXG4gICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgIXNpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoKGAke1JFQUlNX0FQSX0vYXBpL3YxL3RyaWdnZXIvYWRkL3N1YnNjcmliZXJgLCB7XG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0cmlnZ2VyX2lkOiB0cmlnZ2VySUQsXG4gICAgICAgIHN1YnNjcmliZXJfaWQ6IHNpZCxcbiAgICAgICAgcHJvcHM6IGF0dHJpYnV0ZXNcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlRnJvbVRyaWdnZXIodHJpZ2dlcklEKSB7XG4gICAgY29uc3Qgc2lkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oUkVBSU1fVUlEKTtcblxuICAgIGZldGNoKGAke1JFQUlNX0FQSX0vYXBpL3YxL3RyaWdnZXIvcmVtb3ZlL3N1YnNjcmliZXJgLCB7XG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRyaWdnZXJfaWQ6IHRyaWdnZXJJRCxcbiAgICAgICAgc3Vic2NyaWJlcl9pZDogc2lkXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhZ3ModGFncykge1xuICAgIGNvbnN0IGlzU3Vic2NyaWJlZCA9IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCc7XG4gICAgY29uc3Qgc2lkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShSRUFJTV9VSUQpKTtcblxuICAgIGlmICghaXNTdWJzY3JpYmVkIHx8ICFzaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoJ3RhZ3MnKSAmJiB0eXBlb2YgdGFncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRhZ3MgPSBbdGFnc107XG4gICAgfVxuXG4gICAgZmV0Y2goYCR7UkVBSU1fU1VCU19BUEl9L3RhZ3NgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc3Vic2NyaWJlcjogc2lkLFxuICAgICAgICB0YWdzXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgaW5pdChzaXRlc1VJRCkge1xuICAgIHRoaXMubG9nVmlzaXQoKTtcbiAgICB0aGlzLnNpdGVzVUlEID0gc2l0ZXNVSUQ7XG5cbiAgICBpZiAoISgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSkgcmV0dXJuO1xuICAgIGlmICghKCdQdXNoTWFuYWdlcicgaW4gd2luZG93KSkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZWdpc3RyYXRpb24gPSBhd2FpdCB0aGlzLnJlZ2lzdGVyU1coKTtcblxuICAgIGlmICh0aGlzLmNhblN1YnNjcmliZSgpKSB7XG4gICAgICB0aGlzLmxvZygndHJ5X3RvX3N1YnNjcmliZScpO1xuICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCB0aGlzLmdldE1ldGFkYXRhKCk7XG5cbiAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnNob3dNb2RhbChtZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tJZlN0aWxsU3Vic2NyaWJlZCgpO1xuICAgICAgdGhpcy5yZXRyeVNhdmUoKTtcbiAgICB9XG4gIH1cbn1cblxud2luZG93LlJlQWltU0RLID0gUmVBaW1TREs7XG5leHBvcnQgZGVmYXVsdCBSZUFpbVNESztcbiJdLCJzb3VyY2VSb290IjoiIn0=