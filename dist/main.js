/******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/immer/dist/immer.module.js":
/*!*************************************************!*\
  !*** ./node_modules/immer/dist/immer.module.js ***!
  \*************************************************/
/*! exports provided: default, Immer, applyPatches, createDraft, finishDraft, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return Immer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return applyPatches$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return createDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return finishDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return DRAFTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return isDraft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return isDraftable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return NOTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return original; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return produce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return produceWithPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return setAutoFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return setUseProxies; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var _a;
/**
 * The sentinel value returned by producers to replace the draft with undefined.
 */

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : (_a = {}, _a["immer-nothing"] = true, _a);
/**
 * To let Immer treat your class instances as plain immutable objects
 * (albeit with a custom prototype), you must define either an instance property
 * or a static property on each of your custom classes.
 *
 * Otherwise, your class instance will never be drafted, which means it won't be
 * safe to mutate in a produce callback.
 */

var DRAFTABLE = typeof Symbol !== "undefined" && Symbol["for"] ? Symbol["for"]("immer-draftable") : "__$immer_draftable";
var DRAFT_STATE = typeof Symbol !== "undefined" && Symbol["for"] ? Symbol["for"]("immer-state") : "__$immer_state";
/** Returns true if the given value is an Immer draft */

function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
/** Returns true if the given value can be drafted by Immer */

function isDraftable(value) {
  if (!value) { return false; }
  return isPlainObject(value) || !!value[DRAFTABLE] || !!value.constructor[DRAFTABLE] || isMap(value) || isSet(value);
}
function isPlainObject(value) {
  if (!value || typeof value !== "object") { return false; }
  if (Array.isArray(value)) { return true; }
  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}
/** Get the underlying object that is represented by the given draft */

function original(value) {
  if (value && value[DRAFT_STATE]) {
    return value[DRAFT_STATE].base;
  } // otherwise return undefined

} // We use Maps as `drafts` for Sets, not Objects
// See proxy.js

function assignSet(target, override) {
  override.forEach(function (value) {
    // When we add new drafts we have to remove their originals if present
    var prev = original(value);
    if (prev) { target["delete"](prev); } // @ts-ignore TODO investigate

    target.add(value);
  });
  return target;
} // We use Maps as `drafts` for Maps, not Objects
// See proxy.js

function assignMap(target, override) {
  override.forEach(function (value, key) {
    return target.set(key, value);
  });
  return target;
}
var assign = Object.assign || function (target) {
  var arguments$1 = arguments;

  var overrides = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    overrides[_i - 1] = arguments$1[_i];
  }

  overrides.forEach(function (override) {
    if (typeof override === "object" && override !== null) { Object.keys(override).forEach(function (key) {
      return target[key] = override[key];
    }); }
  });
  return target;
};
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : Object.getOwnPropertyNames;
function shallowCopy(base, invokeGetters) {
  if (invokeGetters === void 0) {
    invokeGetters = false;
  }

  if (Array.isArray(base)) { return base.slice(); }
  if (isMap(base)) { return new Map(base); }
  if (isSet(base)) { return new Set(base); }
  var clone = Object.create(Object.getPrototypeOf(base));
  ownKeys(base).forEach(function (key) {
    if (key === DRAFT_STATE) {
      return; // Never copy over draft state.
    }

    var desc = Object.getOwnPropertyDescriptor(base, key);
    var value = desc.value;

    if (desc.get) {
      if (!invokeGetters) {
        throw new Error("Immer drafts cannot have computed properties");
      }

      value = desc.get.call(base);
    }

    if (desc.enumerable) {
      clone[key] = value;
    } else {
      Object.defineProperty(clone, key, {
        value: value,
        writable: true,
        configurable: true
      });
    }
  });
  return clone;
}
function each(obj, iter) {
  if (Array.isArray(obj) || isMap(obj) || isSet(obj)) {
    obj.forEach(function (entry, index) {
      return iter(index, entry, obj);
    });
  } else {
    ownKeys(obj).forEach(function (key) {
      return iter(key, obj[key], obj);
    });
  }
}
function isEnumerable(base, prop) {
  var desc = Object.getOwnPropertyDescriptor(base, prop);
  return desc && desc.enumerable ? true : false;
}
function has(thing, prop) {
  return isMap(thing) ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return isMap(thing) ? thing.get(prop) : thing[prop];
}
function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
var hasSymbol = typeof Symbol !== "undefined";
var hasMap = typeof Map !== "undefined";
function isMap(target) {
  return hasMap && target instanceof Map;
}
var hasSet = typeof Set !== "undefined";
function isSet(target) {
  return hasSet && target instanceof Set;
}
function makeIterable(next) {
  var _a;

  var self;
  return self = (_a = {}, _a[Symbol.iterator] = function () {
    return self;
  }, _a.next = next, _a);
}
/** Map.prototype.values _-or-_ Map.prototype.entries */

function iterateMapValues(state, prop, receiver) {
  var isEntries = prop !== "values";
  return function () {
    var iterator = latest(state)[Symbol.iterator]();
    return makeIterable(function () {
      var result = iterator.next();

      if (!result.done) {
        var key = result.value[0];
        var value = receiver.get(key);
        result.value = isEntries ? [key, value] : value;
      }

      return result;
    });
  };
}
function makeIterateSetValues(createProxy) {
  function iterateSetValues(state, prop) {
    var isEntries = prop === "entries";
    return function () {
      var iterator = latest(state)[Symbol.iterator]();
      return makeIterable(function () {
        var result = iterator.next();

        if (!result.done) {
          var value = wrapSetValue(state, result.value);
          result.value = isEntries ? [value, value] : value;
        }

        return result;
      });
    };
  }

  function wrapSetValue(state, value) {
    var key = original(value) || value;
    var draft = state.drafts.get(key);

    if (!draft) {
      if (state.finalized || !isDraftable(value) || state.finalizing) {
        return value;
      }

      draft = createProxy(value, state);
      state.drafts.set(key, draft);

      if (state.modified) {
        state.copy.add(draft);
      }
    }

    return draft;
  }

  return iterateSetValues;
}

function latest(state) {
  return state.copy || state.base;
}

function clone(obj) {
  if (!isDraftable(obj)) { return obj; }
  if (Array.isArray(obj)) { return obj.map(clone); }
  if (isMap(obj)) { return new Map(obj); }
  if (isSet(obj)) { return new Set(obj); }
  var cloned = Object.create(Object.getPrototypeOf(obj));

  for (var key in obj) { cloned[key] = clone(obj[key]); }

  return cloned;
}
function freeze(obj, deep) {
  if (deep === void 0) {
    deep = false;
  }

  if (!isDraftable(obj) || isDraft(obj) || Object.isFrozen(obj)) { return; }

  if (isSet(obj)) {
    obj.add = obj.clear = obj["delete"] = dontMutateFrozenCollections;
  } else if (isMap(obj)) {
    obj.set = obj.clear = obj["delete"] = dontMutateFrozenCollections;
  }

  Object.freeze(obj);
  if (deep) { each(obj, function (_, value) {
    return freeze(value, true);
  }); }
}

function dontMutateFrozenCollections() {
  throw new Error("This object has been frozen and should not be mutated");
}

/** Each scope represents a `produce` call. */

var ImmerScope =
/** @class */
function () {
  function ImmerScope(parent) {
    this.drafts = [];
    this.parent = parent; // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.

    this.canAutoFreeze = true; // To avoid prototype lookups:

    this.patches = null; // TODO:
  }

  ImmerScope.prototype.usePatches = function (patchListener) {
    if (patchListener) {
      this.patches = [];
      this.inversePatches = [];
      this.patchListener = patchListener;
    }
  };

  ImmerScope.prototype.revoke = function () {
    this.leave();
    this.drafts.forEach(revoke); // @ts-ignore

    this.drafts = null; // TODO: // Make draft-related methods throw.
  };

  ImmerScope.prototype.leave = function () {
    if (this === ImmerScope.current) {
      ImmerScope.current = this.parent;
    }
  };

  ImmerScope.enter = function () {
    var scope = new ImmerScope(ImmerScope.current);
    ImmerScope.current = scope;
    return scope;
  };

  return ImmerScope;
}();

function revoke(draft) {
  draft[DRAFT_STATE].revoke();
}

function willFinalize(scope, result, isReplaced) {
  scope.drafts.forEach(function (draft) {
    draft[DRAFT_STATE].finalizing = true;
  });

  if (!isReplaced) {
    if (scope.patches) {
      markChangesRecursively(scope.drafts[0]);
    } // This is faster when we don't care about which attributes changed.


    markChangesSweep(scope.drafts);
  } // When a child draft is returned, look for changes.
  else if (isDraft(result) && result[DRAFT_STATE].scope === scope) {
      markChangesSweep(scope.drafts);
    }
}
function createProxy(base, parent) {
  var isArray = Array.isArray(base);
  var draft = clonePotentialDraft(base);

  if (isMap(base)) {
    proxyMap(draft);
  } else if (isSet(base)) {
    proxySet(draft);
  } else {
    each(draft, function (prop) {
      proxyProperty(draft, prop, isArray || isEnumerable(base, prop));
    });
  } // See "proxy.js" for property documentation.


  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    scope: scope,
    modified: false,
    finalizing: false,
    finalized: false,
    assigned: isMap(base) ? new Map() : {},
    parent: parent,
    base: base,
    draft: draft,
    drafts: isSet(base) ? new Map() : null,
    copy: null,
    revoke: revoke$1,
    revoked: false // es5 only

  };
  createHiddenProperty(draft, DRAFT_STATE, state);
  scope.drafts.push(draft);
  return draft;
}

function revoke$1() {
  this.revoked = true;
}

function latest$1(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek(draft, prop) {
  var state = draft[DRAFT_STATE];

  if (state && !state.finalizing) {
    state.finalizing = true;
    var value = draft[prop];
    state.finalizing = false;
    return value;
  }

  return draft[prop];
}

function get$1(state, prop) {
  assertUnrevoked(state);
  var value = peek(latest$1(state), prop);
  if (state.finalizing) { return value; } // Create a draft if the value is unmodified.

  if (value === peek(state.base, prop) && isDraftable(value)) {
    prepareCopy(state);
    return state.copy[prop] = createProxy(value, state);
  }

  return value;
}

function set(state, prop, value) {
  assertUnrevoked(state);
  state.assigned[prop] = true;

  if (!state.modified) {
    if (is(value, peek(latest$1(state), prop))) { return; }
    markChanged(state);
    prepareCopy(state);
  }

  state.copy[prop] = value;
}

function markChanged(state) {
  if (!state.modified) {
    state.modified = true;
    if (state.parent) { markChanged(state.parent); }
  }
}

function prepareCopy(state) {
  if (!state.copy) { state.copy = clonePotentialDraft(state.base); }
}

function clonePotentialDraft(base) {
  var state = base && base[DRAFT_STATE];

  if (state) {
    state.finalizing = true;
    var draft = shallowCopy(state.draft, true);
    state.finalizing = false;
    return draft;
  }

  return shallowCopy(base);
} // property descriptors are recycled to make sure we don't create a get and set closure per property,
// but share them all instead


var descriptors = {};

function proxyProperty(draft, prop, enumerable) {
  var desc = descriptors[prop];

  if (desc) {
    desc.enumerable = enumerable;
  } else {
    descriptors[prop] = desc = {
      configurable: true,
      enumerable: enumerable,
      get: function () {
        return get$1(this[DRAFT_STATE], prop);
      },
      set: function (value) {
        set(this[DRAFT_STATE], prop, value);
      }
    };
  }

  Object.defineProperty(draft, prop, desc);
}

function proxyMap(target) {
  Object.defineProperties(target, mapTraps);

  if (hasSymbol) {
    Object.defineProperty(target, Symbol.iterator, // @ts-ignore
    proxyMethod(iterateMapValues) //TODO: , Symbol.iterator)
    );
  }
}

var mapTraps = finalizeTraps({
  size: function (state) {
    return latest$1(state).size;
  },
  has: function (state) {
    return function (key) {
      return latest$1(state).has(key);
    };
  },
  set: function (state) {
    return function (key, value) {
      if (latest$1(state).get(key) !== value) {
        prepareCopy(state);
        markChanged(state);
        state.assigned.set(key, true);
        state.copy.set(key, value);
      }

      return state.draft;
    };
  },
  "delete": function (state) {
    return function (key) {
      prepareCopy(state);
      markChanged(state);
      state.assigned.set(key, false);
      state.copy["delete"](key);
      return false;
    };
  },
  clear: function (state) {
    return function () {
      if (!state.copy) {
        prepareCopy(state);
      }

      markChanged(state);
      state.assigned = new Map();

      for (var _i = 0, _a = latest$1(state).keys(); _i < _a.length; _i++) {
        var key = _a[_i];
        state.assigned.set(key, false);
      }

      return state.copy.clear();
    };
  },
  forEach: function (state, key, reciever) {
    return function (cb) {
      latest$1(state).forEach(function (value, key, map) {
        cb(reciever.get(key), key, map);
      });
    };
  },
  get: function (state) {
    return function (key) {
      var value = latest$1(state).get(key);

      if (state.finalizing || state.finalized || !isDraftable(value)) {
        return value;
      }

      if (value !== state.base.get(key)) {
        return value;
      }

      var draft = createProxy(value, state);
      prepareCopy(state);
      state.copy.set(key, draft);
      return draft;
    };
  },
  keys: function (state) {
    return function () {
      return latest$1(state).keys();
    };
  },
  values: iterateMapValues,
  entries: iterateMapValues
});

function proxySet(target) {
  Object.defineProperties(target, setTraps);

  if (hasSymbol) {
    Object.defineProperty(target, Symbol.iterator, // @ts-ignore
    proxyMethod(iterateSetValues) //TODO: , Symbol.iterator)
    );
  }
}

var iterateSetValues = makeIterateSetValues(createProxy);
var setTraps = finalizeTraps({
  size: function (state) {
    return latest$1(state).size;
  },
  add: function (state) {
    return function (value) {
      if (!latest$1(state).has(value)) {
        markChanged(state);

        if (!state.copy) {
          prepareCopy(state);
        }

        state.copy.add(value);
      }

      return state.draft;
    };
  },
  "delete": function (state) {
    return function (value) {
      markChanged(state);

      if (!state.copy) {
        prepareCopy(state);
      }

      return state.copy["delete"](value);
    };
  },
  has: function (state) {
    return function (key) {
      return latest$1(state).has(key);
    };
  },
  clear: function (state) {
    return function () {
      markChanged(state);

      if (!state.copy) {
        prepareCopy(state);
      }

      return state.copy.clear();
    };
  },
  keys: iterateSetValues,
  entries: iterateSetValues,
  values: iterateSetValues,
  forEach: function (state) {
    return function (cb, thisArg) {
      var iterator = iterateSetValues(state)();
      var result = iterator.next();

      while (!result.done) {
        cb.call(thisArg, result.value, result.value, state.draft);
        result = iterator.next();
      }
    };
  }
});

function finalizeTraps(traps) {
  return Object.keys(traps).reduce(function (acc, key) {
    var builder = key === "size" ? proxyAttr : proxyMethod;
    acc[key] = builder(traps[key], key);
    return acc;
  }, {});
}

function proxyAttr(fn) {
  return {
    get: function () {
      var state = this[DRAFT_STATE];
      assertUnrevoked(state);
      return fn(state);
    }
  };
}

function proxyMethod(trap, key) {
  return {
    get: function () {
      return function () {
        var arguments$1 = arguments;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments$1[_i];
        }

        var state = this[DRAFT_STATE];
        assertUnrevoked(state);
        return trap(state, key, state.draft).apply(void 0, args);
      };
    }
  };
}

function assertUnrevoked(state) {
  if (state.revoked === true) { throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(latest$1(state))); }
} // This looks expensive, but only proxies are visited, and only objects without known changes are scanned.


function markChangesSweep(drafts) {
  // The natural order of drafts in the `scope` array is based on when they
  // were accessed. By processing drafts in reverse natural order, we have a
  // better chance of processing leaf nodes first. When a leaf node is known to
  // have changed, we can avoid any traversal of its ancestor nodes.
  for (var i = drafts.length - 1; i >= 0; i--) {
    var state = drafts[i][DRAFT_STATE];

    if (!state.modified) {
      if (Array.isArray(state.base)) {
        if (hasArrayChanges(state)) { markChanged(state); }
      } else if (isMap(state.base)) {
        if (hasMapChanges(state)) { markChanged(state); }
      } else if (isSet(state.base)) {
        if (hasSetChanges(state)) { markChanged(state); }
      } else if (hasObjectChanges(state)) {
        markChanged(state);
      }
    }
  }
}

function markChangesRecursively(object) {
  if (!object || typeof object !== "object") { return; }
  var state = object[DRAFT_STATE];
  if (!state) { return; }
  var base = state.base,
      draft = state.draft,
      assigned = state.assigned;

  if (!Array.isArray(object)) {
    // Look for added keys.
    Object.keys(draft).forEach(function (key) {
      // The `undefined` check is a fast path for pre-existing keys.
      if (base[key] === undefined && !has(base, key)) {
        assigned[key] = true;
        markChanged(state);
      } else if (!assigned[key]) {
        // Only untouched properties trigger recursion.
        markChangesRecursively(draft[key]);
      }
    }); // Look for removed keys.

    Object.keys(base).forEach(function (key) {
      // The `undefined` check is a fast path for pre-existing keys.
      if (draft[key] === undefined && !has(draft, key)) {
        assigned[key] = false;
        markChanged(state);
      }
    });
  } else if (hasArrayChanges(state)) {
    markChanged(state);
    assigned.length = true;

    if (draft.length < base.length) {
      for (var i = draft.length; i < base.length; i++) { assigned[i] = false; }
    } else {
      for (var i = base.length; i < draft.length; i++) { assigned[i] = true; }
    }

    for (var i = 0; i < draft.length; i++) {
      // Only untouched indices trigger recursion.
      if (assigned[i] === undefined) { markChangesRecursively(draft[i]); }
    }
  }
}

function hasObjectChanges(state) {
  var base = state.base,
      draft = state.draft; // Search for added keys and changed keys. Start at the back, because
  // non-numeric keys are ordered by time of definition on the object.

  var keys = Object.keys(draft);

  for (var i = keys.length - 1; i >= 0; i--) {
    var key = keys[i];
    var baseValue = base[key]; // The `undefined` check is a fast path for pre-existing keys.

    if (baseValue === undefined && !has(base, key)) {
      return true;
    } // Once a base key is deleted, future changes go undetected, because its
    // descriptor is erased. This branch detects any missed changes.
    else {
        var value = draft[key];
        var state_1 = value && value[DRAFT_STATE];

        if (state_1 ? state_1.base !== baseValue : !is(value, baseValue)) {
          return true;
        }
      }
  } // At this point, no keys were added or changed.
  // Compare key count to determine if keys were deleted.


  return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
  var draft = state.draft;
  if (draft.length !== state.base.length) { return true; } // See #116
  // If we first shorten the length, our array interceptors will be removed.
  // If after that new items are added, result in the same original length,
  // those last items will have no intercepting property.
  // So if there is no own descriptor on the last position, we know that items were removed and added
  // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
  // the last one

  var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1); // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)

  if (descriptor && !descriptor.get) { return true; } // For all other cases, we don't have to compare, as they would have been picked up by the index setters

  return false;
}

function hasMapChanges(state) {
  var base = state.base,
      draft = state.draft;
  if (base.size !== draft.size) { return true; } // IE11 supports only forEach iteration

  var hasChanges = false;
  draft.forEach(function (value, key) {
    if (!hasChanges) {
      hasChanges = isDraftable(value) ? value.modified : value !== base.get(key);
    }
  });
  return hasChanges;
}

function hasSetChanges(state) {
  var base = state.base,
      draft = state.draft;
  if (base.size !== draft.size) { return true; } // IE11 supports only forEach iteration

  var hasChanges = false;
  draft.forEach(function (value, key) {
    if (!hasChanges) {
      hasChanges = isDraftable(value) ? value.modified : !base.has(key);
    }
  });
  return hasChanges;
}

function createHiddenProperty(target, prop, value) {
  Object.defineProperty(target, prop, {
    value: value,
    enumerable: false,
    writable: true
  });
}

var legacyProxy = /*#__PURE__*/Object.freeze({
    __proto__: null,
    willFinalize: willFinalize,
    createProxy: createProxy
});

var _a$1, _b;

function willFinalize$1() {}
/**
 * Returns a new draft of the `base` object.
 *
 * The second argument is the parent draft-state (used internally).
 */

function createProxy$1(base, parent) {
  var scope = parent ? parent.scope : ImmerScope.current;
  var state = {
    // Track which produce call this is associated with.
    scope: scope,
    // True for both shallow and deep changes.
    modified: false,
    // Used during finalization.
    finalized: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned: {},
    // The parent draft state.
    parent: parent,
    // The base state.
    base: base,
    // The base proxy.
    draft: null,
    // Any property proxies.
    drafts: {},
    // The base copy with any updated values.
    copy: null,
    // Called by the `produce` function.
    revoke: null
  }; // the traps must target something, a bit like the 'real' base.
  // but also, we need to be able to determine from the target what the relevant state is
  // (to avoid creating traps per instance to capture the state in closure,
  // and to avoid creating weird hidden properties as well)
  // So the trick is to use 'state' as the actual 'target'! (and make sure we intercept everything)
  // Note that in the case of an array, we put the state in an array to have better Reflect defaults ootb

  var target = state;
  var traps = objectTraps;

  if (Array.isArray(base)) {
    target = [state];
    traps = arrayTraps;
  } // Map drafts must support object keys, so we use Map objects to track changes.
  else if (isMap(base)) {
      traps = mapTraps$1;
      state.drafts = new Map();
      state.assigned = new Map();
    } // Set drafts use a Map object to track which of its values are drafted.
    // And we don't need the "assigned" property, because Set objects have no keys.
    else if (isSet(base)) {
        traps = setTraps$1;
        state.drafts = new Map();
      }

  var _a = Proxy.revocable(target, traps),
      revoke = _a.revoke,
      proxy = _a.proxy;

  state.draft = proxy;
  state.revoke = revoke;
  scope.drafts.push(proxy);
  return proxy;
}
/**
 * Object drafts
 */

var objectTraps = {
  get: function (state, prop) {
    if (prop === DRAFT_STATE) { return state; }
    var drafts = state.drafts; // Check for existing draft in unmodified state.

    if (!state.modified && has(drafts, prop)) {
      return drafts[prop];
    }

    var value = latest$2(state)[prop];

    if (state.finalized || !isDraftable(value)) {
      return value;
    } // Check for existing draft in modified state.


    if (state.modified) {
      // Assigned values are never drafted. This catches any drafts we created, too.
      if (value !== peek$1(state.base, prop)) { return value; } // Store drafts on the copy (when one exists).

      drafts = state.copy;
    }

    return drafts[prop] = createProxy$1(value, state);
  },
  has: function (state, prop) {
    return prop in latest$2(state);
  },
  ownKeys: function (state) {
    return Reflect.ownKeys(latest$2(state));
  },
  set: function (state, prop, value) {
    if (!state.modified) {
      var baseValue = peek$1(state.base, prop); // Optimize based on value's truthiness. Truthy values are guaranteed to
      // never be undefined, so we can avoid the `in` operator. Lastly, truthy
      // values may be drafts, but falsy values are never drafts.

      var isUnchanged = value ? is(baseValue, value) || value === state.drafts[prop] : is(baseValue, value) && prop in state.base;
      if (isUnchanged) { return true; }
      markChanged$1(state);
    }

    state.assigned[prop] = true;
    state.copy[prop] = value;
    return true;
  },
  deleteProperty: function (state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (peek$1(state.base, prop) !== undefined || prop in state.base) {
      state.assigned[prop] = false;
      markChanged$1(state);
    } else if (state.assigned[prop]) {
      // if an originally not assigned property was deleted
      delete state.assigned[prop];
    }

    if (state.copy) { delete state.copy[prop]; }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor: function (state, prop) {
    var owner = latest$2(state);
    var desc = Reflect.getOwnPropertyDescriptor(owner, prop);

    if (desc) {
      desc.writable = true;
      desc.configurable = !Array.isArray(owner) || prop !== "length";
    }

    return desc;
  },
  defineProperty: function () {
    throw new Error("Object.defineProperty() cannot be used on an Immer draft"); // prettier-ignore
  },
  getPrototypeOf: function (state) {
    return Object.getPrototypeOf(state.base);
  },
  setPrototypeOf: function () {
    throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
  }
};
/**
 * Array drafts
 */

var arrayTraps = {};
each(objectTraps, function (key, fn) {
  arrayTraps[key] = function () {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});

arrayTraps.deleteProperty = function (state, prop) {
  if (isNaN(parseInt(prop))) {
    throw new Error("Immer only supports deleting array indices"); // prettier-ignore
  }

  return objectTraps.deleteProperty.call(this, state[0], prop);
};

arrayTraps.set = function (state, prop, value) {
  if (prop !== "length" && isNaN(parseInt(prop))) {
    throw new Error("Immer only supports setting array indices and the 'length' property"); // prettier-ignore
  }

  return objectTraps.set.call(this, state[0], prop, value, state[0]);
}; // Used by Map and Set drafts


var reflectTraps = makeReflectTraps(["ownKeys", "has", "set", "deleteProperty", "defineProperty", "getOwnPropertyDescriptor", "preventExtensions", "isExtensible", "getPrototypeOf"]);
/**
 * Map drafts
 */

var mapTraps$1 = makeTrapsForGetters((_a$1 = {}, _a$1[DRAFT_STATE] = function (state) {
  return state;
}, _a$1.size = function (state) {
  return latest$2(state).size;
}, _a$1.has = function (state) {
  return function (key) {
    return latest$2(state).has(key);
  };
}, _a$1.set = function (state) {
  return function (key, value) {
    var values = latest$2(state);

    if (!values.has(key) || values.get(key) !== value) {
      markChanged$1(state); // @ts-ignore

      state.assigned.set(key, true);
      state.copy.set(key, value);
    }

    return state.draft;
  };
}, _a$1["delete"] = function (state) {
  return function (key) {
    if (latest$2(state).has(key)) {
      markChanged$1(state); // @ts-ignore

      state.assigned.set(key, false);
      return state.copy["delete"](key);
    }

    return false;
  };
}, _a$1.clear = function (state) {
  return function () {
    markChanged$1(state);
    state.assigned = new Map();
    each(latest$2(state).keys(), function (_, key) {
      // @ts-ignore
      state.assigned.set(key, false);
    });
    return state.copy.clear();
  };
}, // @ts-ignore
_a$1.forEach = function (state, _, receiver) {
  return function (cb, thisArg) {
    return latest$2(state).forEach(function (_, key, map) {
      var value = receiver.get(key);
      cb.call(thisArg, value, key, map);
    });
  };
}, _a$1.get = function (state) {
  return function (key) {
    var drafts = state.modified ? state.copy : state.drafts; // @ts-ignore TODO: ...or fix by using different ES6Draft types (but better just unify to maps)

    if (drafts.has(key)) {
      // @ts-ignore
      var value_1 = drafts.get(key);
      if (isDraft(value_1) || !isDraftable(value_1)) { return value_1; }
      var draft_1 = createProxy$1(value_1, state); // @ts-ignore

      drafts.set(key, draft_1);
      return draft_1;
    }

    var value = latest$2(state).get(key);

    if (state.finalized || !isDraftable(value)) {
      return value;
    }

    var draft = createProxy$1(value, state); //@ts-ignore

    drafts.set(key, draft);
    return draft;
  };
}, _a$1.keys = function (state) {
  return function () {
    return latest$2(state).keys();
  };
}, //@ts-ignore
_a$1.values = iterateMapValues, //@ts-ignore
_a$1.entries = iterateMapValues, _a$1[hasSymbol ? Symbol.iterator : "@@iterator"] = iterateMapValues, _a$1));
var iterateSetValues$1 = makeIterateSetValues(createProxy$1);
/**
 * Set drafts
 */

var setTraps$1 = makeTrapsForGetters((_b = {}, //@ts-ignore
_b[DRAFT_STATE] = function (state) {
  return state;
}, _b.size = function (state) {
  return latest$2(state).size;
}, _b.has = function (state) {
  return function (key) {
    return latest$2(state).has(key);
  };
}, _b.add = function (state) {
  return function (value) {
    if (!latest$2(state).has(value)) {
      markChanged$1(state); //@ts-ignore

      state.copy.add(value);
    }

    return state.draft;
  };
}, _b["delete"] = function (state) {
  return function (value) {
    markChanged$1(state); //@ts-ignore

    return state.copy["delete"](value);
  };
}, _b.clear = function (state) {
  return function () {
    markChanged$1(state); //@ts-ignore

    return state.copy.clear();
  };
}, _b.forEach = function (state) {
  return function (cb, thisArg) {
    var iterator = iterateSetValues$1(state)();
    var result = iterator.next();

    while (!result.done) {
      cb.call(thisArg, result.value, result.value, state.draft);
      result = iterator.next();
    }
  };
}, _b.keys = iterateSetValues$1, _b.values = iterateSetValues$1, _b.entries = iterateSetValues$1, _b[hasSymbol ? Symbol.iterator : "@@iterator"] = iterateSetValues$1, _b));
/**
 * Helpers
 */
// Retrieve the latest values of the draft.

function latest$2(state) {
  return state.copy || state.base;
} // Access a property without creating an Immer draft.


function peek$1(draft, prop) {
  var state = draft[DRAFT_STATE];
  var desc = Reflect.getOwnPropertyDescriptor(state ? latest$2(state) : draft, prop);
  return desc && desc.value;
}

function markChanged$1(state) {
  if (!state.modified) {
    state.modified = true;
    var base = state.base,
        drafts = state.drafts,
        parent = state.parent;
    var copy = shallowCopy(base);

    if (isSet(base)) {
      // Note: The `drafts` property is preserved for Set objects, since
      // we need to keep track of which values are drafted.
      assignSet(copy, drafts);
    } else {
      // Merge nested drafts into the copy.
      if (isMap(base)) { assignMap(copy, drafts); }else { assign(copy, drafts); }
      state.drafts = null;
    }

    state.copy = copy;

    if (parent) {
      markChanged$1(parent);
    }
  }
}
/** Create traps that all use the `Reflect` API on the `latest(state)` */


function makeReflectTraps(names) {
  return names.reduce(function (traps, name) {
    // @ts-ignore
    traps[name] = function (state) {
      var arguments$1 = arguments;

      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments$1[_i];
      }

      return Reflect[name].apply(Reflect, __spreadArrays([latest$2(state)], args));
    };

    return traps;
  }, {});
}

function makeTrapsForGetters(getters) {
  return assign({}, reflectTraps, {
    get: function (state, prop, receiver) {
      return getters.hasOwnProperty(prop) ? getters[prop](state, prop, receiver) : Reflect.get(state, prop, receiver);
    },
    setPrototypeOf: function (state) {
      throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft"); // prettier-ignore
    }
  });
}

var modernProxy = /*#__PURE__*/Object.freeze({
    __proto__: null,
    willFinalize: willFinalize$1,
    createProxy: createProxy$1
});

function generatePatches(state, basePath, patches, inversePatches) {
  var generatePatchesFn = Array.isArray(state.base) ? generateArrayPatches : isSet(state.base) ? generateSetPatches : generatePatchesFromAssigned;
  generatePatchesFn(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
  var _a, _b;

  var base = state.base,
      copy = state.copy,
      assigned = state.assigned; // Reduce complexity by ensuring `base` is never longer.

  if (copy.length < base.length) {
    _a = [copy, base], base = _a[0], copy = _a[1];
    _b = [inversePatches, patches], patches = _b[0], inversePatches = _b[1];
  }

  var delta = copy.length - base.length; // Find the first replaced index.

  var start = 0;

  while (base[start] === copy[start] && start < base.length) {
    ++start;
  } // Find the last replaced index. Search from the end to optimize splice patches.


  var end = base.length;

  while (end > start && base[end - 1] === copy[end + delta - 1]) {
    --end;
  } // Process replaced indices.


  for (var i = start; i < end; ++i) {
    if (assigned[i] && copy[i] !== base[i]) {
      var path = basePath.concat([i]);
      patches.push({
        op: "replace",
        path: path,
        value: copy[i]
      });
      inversePatches.push({
        op: "replace",
        path: path,
        value: base[i]
      });
    }
  }

  var replaceCount = patches.length; // Process added indices.

  for (var i = end + delta - 1; i >= end; --i) {
    var path = basePath.concat([i]);
    patches[replaceCount + i - end] = {
      op: "add",
      path: path,
      value: copy[i]
    };
    inversePatches.push({
      op: "remove",
      path: path
    });
  }
} // This is used for both Map objects and normal objects.


function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
  var base = state.base,
      copy = state.copy;
  each(state.assigned, function (key, assignedValue) {
    var origValue = get(base, key);
    var value = get(copy, key);
    var op = !assignedValue ? "remove" : has(base, key) ? "replace" : "add";
    if (origValue === value && op === "replace") { return; }
    var path = basePath.concat(key);
    patches.push(op === "remove" ? {
      op: op,
      path: path
    } : {
      op: op,
      path: path,
      value: value
    });
    inversePatches.push(op === "add" ? {
      op: "remove",
      path: path
    } : op === "remove" ? {
      op: "add",
      path: path,
      value: origValue
    } : {
      op: "replace",
      path: path,
      value: origValue
    });
  });
}

function generateSetPatches(state, basePath, patches, inversePatches) {
  var base = state.base,
      copy = state.copy;
  var i = 0;
  base.forEach(function (value) {
    if (!copy.has(value)) {
      var path = basePath.concat([i]);
      patches.push({
        op: "remove",
        path: path,
        value: value
      });
      inversePatches.unshift({
        op: "add",
        path: path,
        value: value
      });
    }

    i++;
  });
  i = 0;
  copy.forEach(function (value) {
    if (!base.has(value)) {
      var path = basePath.concat([i]);
      patches.push({
        op: "add",
        path: path,
        value: value
      });
      inversePatches.unshift({
        op: "remove",
        path: path,
        value: value
      });
    }

    i++;
  });
}

function applyPatches(draft, patches) {
  patches.forEach(function (patch) {
    var path = patch.path,
        op = patch.op;
    if (!path.length) { throw new Error("Illegal state"); }
    var base = draft;

    for (var i = 0; i < path.length - 1; i++) {
      base = get(base, path[i]);
      if (!base || typeof base !== "object") { throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); } // prettier-ignore
    }

    var value = clone(patch.value); // used to clone patch to ensure original patch is not modified, see #411

    var key = path[path.length - 1];

    switch (op) {
      case "replace":
        if (isMap(base)) {
          base.set(key, value);
        } else if (isSet(base)) {
          throw new Error('Sets cannot have "replace" patches.');
        } else {
          // if value is an object, then it's assigned by reference
          // in the following add or remove ops, the value field inside the patch will also be modifyed
          // so we use value from the cloned patch
          base[key] = value;
        }

        break;

      case "add":
        if (isSet(base)) {
          base["delete"](patch.value);
        }

        Array.isArray(base) ? base.splice(key, 0, value) : isMap(base) ? base.set(key, value) : isSet(base) ? base.add(value) : base[key] = value;
        break;

      case "remove":
        Array.isArray(base) ? base.splice(key, 1) : isMap(base) ? base["delete"](key) : isSet(base) ? base["delete"](patch.value) : delete base[key];
        break;

      default:
        throw new Error("Unsupported patch operation: " + op);
    }
  });
  return draft;
}

function verifyMinified() {}

var configDefaults = {
  useProxies: typeof Proxy !== "undefined" && typeof Proxy.revocable !== "undefined" && typeof Reflect !== "undefined",
  autoFreeze: typeof process !== "undefined" ? "development" !== "production" : verifyMinified.name === "verifyMinified",
  onAssign: null,
  onDelete: null,
  onCopy: null
};

var Immer =
/** @class */
function () {
  function Immer(config) {
    this.useProxies = false;
    this.autoFreeze = false;
    assign(this, configDefaults, config);
    this.setUseProxies(this.useProxies);
    this.produce = this.produce.bind(this);
    this.produceWithPatches = this.produceWithPatches.bind(this);
  }
  /**
   * The `produce` function takes a value and a "recipe function" (whose
   * return value often depends on the base state). The recipe function is
   * free to mutate its first argument however it wants. All mutations are
   * only ever applied to a __copy__ of the base state.
   *
   * Pass only a function to create a "curried producer" which relieves you
   * from passing the recipe function every time.
   *
   * Only plain objects and arrays are made mutable. All other objects are
   * considered uncopyable.
   *
   * Note: This function is __bound__ to its `Immer` instance.
   *
   * @param {any} base - the initial state
   * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
   * @param {Function} patchListener - optional function that will be called with all the patches produced here
   * @returns {any} a new state, or the initial state if nothing was modified
   */


  Immer.prototype.produce = function (base, recipe, patchListener) {
    var _this = this; // curried invocation


    if (typeof base === "function" && typeof recipe !== "function") {
      var defaultBase_1 = recipe;
      recipe = base;
      var self_1 = this;
      return function curriedProduce(base) {
        var arguments$1 = arguments;

        var _this = this;

        if (base === void 0) {
          base = defaultBase_1;
        }

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments$1[_i];
        }

        return self_1.produce(base, function (draft) {
          return recipe.call.apply(recipe, __spreadArrays([_this, draft], args));
        }); // prettier-ignore
      };
    } // prettier-ignore


    {
      if (typeof recipe !== "function") {
        throw new Error("The first or second argument to `produce` must be a function");
      }

      if (patchListener !== undefined && typeof patchListener !== "function") {
        throw new Error("The third argument to `produce` must be a function or undefined");
      }
    }
    var result; // Only plain objects, arrays, and "immerable classes" are drafted.

    if (isDraftable(base)) {
      var scope_1 = ImmerScope.enter();
      var proxy = this.createProxy(base);
      var hasError = true;

      try {
        result = recipe(proxy);
        hasError = false;
      } finally {
        // finally instead of catch + rethrow better preserves original stack
        if (hasError) { scope_1.revoke(); }else { scope_1.leave(); }
      }

      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then(function (result) {
          scope_1.usePatches(patchListener);
          return _this.processResult(result, scope_1);
        }, function (error) {
          scope_1.revoke();
          throw error;
        });
      }

      scope_1.usePatches(patchListener);
      return this.processResult(result, scope_1);
    } else {
      result = recipe(base);
      if (result === NOTHING) { return undefined; }
      if (result === undefined) { result = base; }
      this.maybeFreeze(result, true);
      return result;
    }
  };

  Immer.prototype.produceWithPatches = function (arg1, arg2, arg3) {
    var _this = this;

    if (typeof arg1 === "function") {
      return function (state) {
        var arguments$1 = arguments;

        var args = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments$1[_i];
        }

        return _this.produceWithPatches(state, function (draft) {
          return arg1.apply(void 0, __spreadArrays([draft], args));
        });
      };
    } // non-curried form


    if (arg3) { throw new Error("A patch listener cannot be passed to produceWithPatches"); }
    var patches, inversePatches;
    var nextState = this.produce(arg1, arg2, function (p, ip) {
      patches = p;
      inversePatches = ip;
    });
    return [nextState, patches, inversePatches];
  };

  Immer.prototype.createDraft = function (base) {
    if (!isDraftable(base)) {
      throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object"); // prettier-ignore
    }

    var scope = ImmerScope.enter();
    var proxy = this.createProxy(base);
    proxy[DRAFT_STATE].isManual = true;
    scope.leave();
    return proxy;
  };

  Immer.prototype.finishDraft = function (draft, patchListener) {
    var state = draft && draft[DRAFT_STATE];

    if (!state || !state.isManual) {
      throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`"); // prettier-ignore
    }

    if (state.finalized) {
      throw new Error("The given draft is already finalized"); // prettier-ignore
    }

    var scope = state.scope;
    scope.usePatches(patchListener);
    return this.processResult(undefined, scope);
  };
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is disabled in production.
   */


  Immer.prototype.setAutoFreeze = function (value) {
    this.autoFreeze = value;
  };
  /**
   * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
   * always faster than using ES5 proxies.
   *
   * By default, feature detection is used, so calling this is rarely necessary.
   */


  Immer.prototype.setUseProxies = function (value) {
    this.useProxies = value;
    assign(this, value ? modernProxy : legacyProxy);
  };

  Immer.prototype.applyPatches = function (base, patches) {
    // If a patch replaces the entire state, take that replacement as base
    // before applying patches
    var i;

    for (i = patches.length - 1; i >= 0; i--) {
      var patch = patches[i];

      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }

    if (isDraft(base)) {
      // N.B: never hits if some patch a replacement, patches are never drafts
      return applyPatches(base, patches);
    } // Otherwise, produce a copy of the base state.


    return this.produce(base, function (draft) {
      return applyPatches(draft, patches.slice(i + 1));
    });
  };
  /** @internal */


  Immer.prototype.processResult = function (result, scope) {
    var baseDraft = scope.drafts[0];
    var isReplaced = result !== undefined && result !== baseDraft;
    this.willFinalize(scope, result, isReplaced);

    if (isReplaced) {
      if (baseDraft[DRAFT_STATE].modified) {
        scope.revoke();
        throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore
      }

      if (isDraftable(result)) {
        // Finalize the result in case it contains (or is) a subset of the draft.
        result = this.finalize(result, null, scope);
        this.maybeFreeze(result);
      }

      if (scope.patches) {
        scope.patches.push({
          op: "replace",
          path: [],
          value: result
        });
        scope.inversePatches.push({
          op: "replace",
          path: [],
          value: baseDraft[DRAFT_STATE].base
        });
      }
    } else {
      // Finalize the base draft.
      result = this.finalize(baseDraft, [], scope);
    }

    scope.revoke();

    if (scope.patches) {
      scope.patchListener(scope.patches, scope.inversePatches);
    }

    return result !== NOTHING ? result : undefined;
  };
  /**
   * @internal
   * Finalize a draft, returning either the unmodified base state or a modified
   * copy of the base state.
   */


  Immer.prototype.finalize = function (draft, path, scope) {
    var _this = this;

    var state = draft[DRAFT_STATE];

    if (!state) {
      if (Object.isFrozen(draft)) { return draft; }
      return this.finalizeTree(draft, null, scope);
    } // Never finalize drafts owned by another scope.


    if (state.scope !== scope) {
      return draft;
    }

    if (!state.modified) {
      this.maybeFreeze(state.base, true);
      return state.base;
    }

    if (!state.finalized) {
      state.finalized = true;
      this.finalizeTree(state.draft, path, scope); // We cannot really delete anything inside of a Set. We can only replace the whole Set.

      if (this.onDelete && !isSet(state.base)) {
        // The `assigned` object is unreliable with ES5 drafts.
        if (this.useProxies) {
          var assigned = state.assigned;
          each(assigned, function (prop, exists) {
            var _a, _b;

            if (!exists) { (_b = (_a = _this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, state, prop); }
          });
        } else {
          // TODO: Figure it out for Maps and Sets if we need to support ES5
          var base = state.base,
              copy_1 = state.copy;
          each(base, function (prop) {
            var _a, _b;

            if (!has(copy_1, prop)) { (_b = (_a = _this).onDelete) === null || _b === void 0 ? void 0 : _b.call(_a, state, prop); }
          });
        }
      }

      if (this.onCopy) {
        this.onCopy(state);
      } // At this point, all descendants of `state.copy` have been finalized,
      // so we can be sure that `scope.canAutoFreeze` is accurate.


      if (this.autoFreeze && scope.canAutoFreeze) {
        freeze(state.copy, false);
      }

      if (path && scope.patches) {
        generatePatches(state, path, scope.patches, scope.inversePatches);
      }
    }

    return state.copy;
  };
  /**
   * @internal
   * Finalize all drafts in the given state tree.
   */


  Immer.prototype.finalizeTree = function (root, rootPath, scope) {
    var _this = this;

    var state = root[DRAFT_STATE];

    if (state) {
      if (!this.useProxies) {
        // Create the final copy, with added keys and without deleted keys.
        state.copy = shallowCopy(state.draft, true);
      }

      root = state.copy;
    }

    var needPatches = !!rootPath && !!scope.patches;

    var finalizeProperty = function (prop, value, parent) {
      if (value === parent) {
        throw Error("Immer forbids circular references");
      } // In the `finalizeTree` method, only the `root` object may be a draft.


      var isDraftProp = !!state && parent === root;
      var isSetMember = isSet(parent);

      if (isDraft(value)) {
        var path = isDraftProp && needPatches && !isSetMember && // Set objects are atomic since they have no keys.
        !has(state.assigned, prop) // Skip deep patches for assigned keys.
        ? rootPath.concat(prop) : null; // Drafts owned by `scope` are finalized here.

        value = _this.finalize(value, path, scope);
        replace(parent, prop, value); // Drafts from another scope must prevent auto-freezing.

        if (isDraft(value)) {
          scope.canAutoFreeze = false;
        } // Unchanged drafts are never passed to the `onAssign` hook.


        if (isDraftProp && value === get(state.base, prop)) { return; }
      } // Unchanged draft properties are ignored.
      else if (isDraftProp && is(value, get(state.base, prop))) {
          return;
        } // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
        else if (isDraftable(value) && !Object.isFrozen(value)) {
            each(value, finalizeProperty);

            _this.maybeFreeze(value);
          }

      if (isDraftProp && _this.onAssign && !isSetMember) {
        _this.onAssign(state, prop, value);
      }
    };

    each(root, finalizeProperty);
    return root;
  };

  Immer.prototype.maybeFreeze = function (value, deep) {
    if (deep === void 0) {
      deep = false;
    }

    if (this.autoFreeze && !isDraft(value)) {
      freeze(value, deep);
    }
  };

  return Immer;
}();

function replace(parent, prop, value) {
  if (isMap(parent)) {
    parent.set(prop, value);
  } else if (isSet(parent)) {
    // In this case, the `prop` is actually a draft.
    parent["delete"](prop);
    parent.add(value);
  } else if (Array.isArray(parent) || isEnumerable(parent, prop)) {
    // Preserve non-enumerable properties.
    parent[prop] = value;
  } else {
    Object.defineProperty(parent, prop, {
      value: value,
      writable: true,
      configurable: true
    });
  }
}

var immer = new Immer();
/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */

var produce = immer.produce;
/**
 * Like `produce`, but `produceWithPatches` always returns a tuple
 * [nextState, patches, inversePatches] (instead of just the next state)
 */

var produceWithPatches = immer.produceWithPatches.bind(immer);
/**
 * Pass true to automatically freeze all copies created by Immer.
 *
 * By default, auto-freezing is disabled in production.
 */

var setAutoFreeze = immer.setAutoFreeze.bind(immer);
/**
 * Pass true to use the ES2015 `Proxy` class when creating drafts, which is
 * always faster than using ES5 proxies.
 *
 * By default, feature detection is used, so calling this is rarely necessary.
 */

var setUseProxies = immer.setUseProxies.bind(immer);
/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */

var applyPatches$1 = immer.applyPatches.bind(immer);
/**
 * Create an Immer draft from the given base state, which may be a draft itself.
 * The draft can be modified until you finalize it with the `finishDraft` function.
 */

var createDraft = immer.createDraft.bind(immer);
/**
 * Finalize an Immer draft from a `createDraft` call, returning the base state
 * (if no changes were made) or a modified copy. The draft must *not* be
 * mutated afterwards.
 *
 * Pass a function as the 2nd argument to generate Immer patches based on the
 * changes that were made.
 */

var finishDraft = immer.finishDraft.bind(immer);

/* harmony default export */ __webpack_exports__["default"] = (produce);

//# sourceMappingURL=immer.module.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: changePlayerHP, giveThisManACookie, levelUp, rewardExp, changeEnemyHP, sendAdventurerToAdventure, returnAdventurerFromAdventure, collectFromAdventure, resetAdventure, startGame, chooseAdventurerForAdventure, writeToLog, equipItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePlayerHP", function() { return changePlayerHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveThisManACookie", function() { return giveThisManACookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelUp", function() { return levelUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewardExp", function() { return rewardExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeEnemyHP", function() { return changeEnemyHP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAdventurerToAdventure", function() { return sendAdventurerToAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnAdventurerFromAdventure", function() { return returnAdventurerFromAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFromAdventure", function() { return collectFromAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetAdventure", function() { return resetAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startGame", function() { return startGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseAdventurerForAdventure", function() { return chooseAdventurerForAdventure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeToLog", function() { return writeToLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equipItem", function() { return equipItem; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _characterUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterUtils */ "./src/characterUtils.js");




Object(immer__WEBPACK_IMPORTED_MODULE_1__["setAutoFreeze"])(false)

function changePlayerHP(state, hpDelta) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState);
        player.hp = Math.min(player.maxHP, Math.max(0, player.hp + hpDelta));
    })
}

function giveThisManACookie(state, gold) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).gold += gold;
    })
}

function levelUp(state) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).level += 1;
        Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).expToNextLevel += (Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).level * Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).level * 300)
    })
}

function rewardExp(state, exp) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        while (Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).expToNextLevel <= exp + Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).exp) {
            draftState = Object(immer__WEBPACK_IMPORTED_MODULE_1__["createDraft"])(Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("level-up", draftState));
        }
        Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).exp += exp;
        return draftState;
    })
}

function changeEnemyHP(state, adventureIndex, hpDelta) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        draftState.adventures[adventureIndex].enemy.hp += hpDelta;
    })

}

function sendAdventurerToAdventure(state, adventureIndex, adventurerName) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        draftState.party.adventurers.forEach(adventurer => {
            if(adventurer.name == adventurerName) {
                adventurer.currentQuest = adventureIndex;
            }
        })
    })
}

function returnAdventurerFromAdventure(state, adventurerName) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        draftState.party.adventurers.forEach(adventurer => {
            if(adventurer.name == adventurerName) {
                adventurer.currentQuest = null;
            }
        })
    })
}

function collectFromAdventure(state, adventureIndex) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        draftState.adventures[adventureIndex].collectibles -= 1;
    })
}

function resetAdventure(currentState, initialState, adventureIndex) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(currentState, draftState => {
        draftState.adventures[adventureIndex] = initialState.adventures[adventureIndex];
    })
}

function startGame(state, initialState) {
    let newState = JSON.parse(JSON.stringify(initialState))
    if (newState.initialState === undefined) {
        newState.initialState = JSON.parse(JSON.stringify(initialState));
    }
    return newState;
}

function chooseAdventurerForAdventure(currentState, isAdventurerGoing, adventurerName, adventureIndex) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(currentState, draftState => {
        if (isAdventurerGoing) {
            draftState.adventures[adventureIndex].selectedPartyMembers.push(adventurerName);
        } else {
            draftState.adventures[adventureIndex].selectedPartyMembers = draftState.adventures[adventureIndex].selectedPartyMembers.filter(partyMember => partyMember !== adventurerName)
        }
    })
}

function writeToLog(currentState,logMessage){
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(currentState, draftState => {
        draftState.log.push(logMessage);
    })
}

function equipItem(state, itemName) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_1__["produce"])(state, draftState => {
        Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(draftState).equipment[itemName].equipped = true;
    })
}

/***/ }),

/***/ "./src/characterUtils.js":
/*!*******************************!*\
  !*** ./src/characterUtils.js ***!
  \*******************************/
/*! exports provided: calculateItemStrength, calculateItemDefense, getPlayerFromState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateItemStrength", function() { return calculateItemStrength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateItemDefense", function() { return calculateItemDefense; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerFromState", function() { return getPlayerFromState; });
function calculateItemStrength(state) {
    return Object.values(getPlayerFromState(state).equipment)
                                        .filter(item => item)
                                        .map(x => x.modifiers.strength || 0)
                                        .reduce((a, b) => a + b, 0)
}

function calculateItemDefense(state) {
    return Object.values(getPlayerFromState(state).equipment)
                                        .filter(item => item)
                                        .map(x => x.modifiers.defense || 0)
                                        .reduce((a, b) => a + b, 0)
}

function getPlayerFromState(state) {
    return state.party.adventurers[0];
}



/***/ }),

/***/ "./src/fe.js":
/*!*******************!*\
  !*** ./src/fe.js ***!
  \*******************/
/*! exports provided: renderWhenNeeded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWhenNeeded", function() { return renderWhenNeeded; });
const renderersDependencies = {};

function deepProxy(onAccess, target) {
    return new Proxy(target, {
        get(target, property) {
            onAccess(property);
            const item = target[property]
            if (item && typeof item === 'object') {
                return deepProxy(onAccess.bind(null, property), item);
            }
            return item
        }
    });
}

function removeSubstrings(strings) {
    return strings.filter(str => {
        return !strings.some(biggerString => {
            return biggerString.startsWith(str + ".")
        });
    });
}

function getProp(obj, propPath) {
    return propPath.split(".").reduce((o, prop) => o[prop], obj);
}

function isStateChanged(prevState, newState, props) {
    return props.some(prop => {
        return getProp(prevState, prop) !== getProp(newState, prop)
    });
}

function renderWhenNeeded(name, func, prevState, newState) {
    const fDeps = renderersDependencies[name] || [];

    const proxiedNewState = deepProxy(function() {
        const currentDeps = renderersDependencies[name] || [];
        const path = Array.from(arguments).join(".");
        currentDeps.push(path);
        const newDeps = Array.from(new Set(removeSubstrings(currentDeps)));
        renderersDependencies[name] = newDeps;
    }, newState);

    if(fDeps.length === 0 || isStateChanged(prevState, newState, fDeps)) {
        func(proxiedNewState);
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialState */ "./src/initialState.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");
/* harmony import */ var _quests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quests */ "./src/quests.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store.js");





function healPlayer() {
    Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["doAction"])("change-player-hp", { hpDelta: _store__WEBPACK_IMPORTED_MODULE_3__["getState"]().party.adventurers[0].hpRegain });
}

setInterval(healPlayer, 1000);
if (localStorage.getItem('game')) {
    Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["doAction"])("start-game", { initialState: JSON.parse(localStorage.getItem('game')) });
    const currentAdventures = new Set(_store__WEBPACK_IMPORTED_MODULE_3__["getState"]().party.adventurers.map(adventurer => adventurer.currentQuest ));
    currentAdventures.forEach(adventureIndex => {
        if (adventureIndex != null) {
            Object(_quests__WEBPACK_IMPORTED_MODULE_2__["fight"])(_store__WEBPACK_IMPORTED_MODULE_3__, adventureIndex)
        }
    });
}
else {
    Object(_reducers__WEBPACK_IMPORTED_MODULE_1__["doAction"])("start-game", { initialState: _initialState__WEBPACK_IMPORTED_MODULE_0__["initialState"] });
}


/***/ }),

/***/ "./src/initialState.js":
/*!*****************************!*\
  !*** ./src/initialState.js ***!
  \*****************************/
/*! exports provided: initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
const initialState = {
    party: {
        adventurers: [
            {
                currentQuest: null,
                name: "player1",
                maxHP: 100,
                hp: 100,
                gold: 100,
                exp: 0,
                expToNextLevel: 100,
                level: 1,
                hpRegain: 0.5,
                equipment: {
                    "left-hand": {
                        name: "shield +10",
                        id: "shield_10",
                        modifiers: {
                            defense: 10
                        },
                        slots: ["left-hand"]
                    },
                    "right-hand": {
                        name: "sword +5",
                        id: "sword_5",
                        modifiers: {
                            strength: 5
                        },
                        slots: ["left-hand", "right-hand"]
                    }
                },
                stats: {
                    strength: 10,
                    agility: 5,
                    defense: 0
                },
            },
            {
                currentQuest: null,
                name: "pooper",
                stats: {
                    strength: 5
                },
                price: 200
            },
            {
                currentQuest: null,
                name: "butthole",
                stats: {
                    strength: 5
                },
                price: 200
            },
        ]
    },
    inventory: [{
            name: "shield +10",
            id: "shield_10",
            modifiers: {
                defense: 10
            },
            slots: ["left-hand"]
        },
        {
            name: "sword +5",
            id: "sword_5",
            modifiers: {
                strength: 5
            },
            slots: ["left-hand", "right-hand"]
        }
    ],
    adventures: [
        {
            name: "the basics",
            description: "fetch",
            collectibles: 3,
            requiredLevel: 1,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 100
            },
            enemy: {
                name: "orc",
                hp: 30,
                damage: 10
            },
            selectedPartyMembers: [],
            isIdling: false
        },
        {
            name: "hardcore orc beatings",
            description: "more fetch",
            collectibles: 3,
            requiredLevel: 2,
            rewards: {
                gold: 5,
                item: "glove",
                exp: 5000
            },
            enemy: {
                name: "orc",
                hp: 50,
                damage: 20
            },
            selectedPartyMembers: [],
            isIdling: false
        }
    ],
    log:[]
};


/***/ }),

/***/ "./src/quests.js":
/*!***********************!*\
  !*** ./src/quests.js ***!
  \***********************/
/*! exports provided: startIdling, startQuest, performRound, fight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startIdling", function() { return startIdling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startQuest", function() { return startQuest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performRound", function() { return performRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fight", function() { return fight; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");
/* harmony import */ var _characterUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characterUtils */ "./src/characterUtils.js");
    


function startIdling(store, adventureIndex) {
    Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("start-adventure-idling", { adventureIndex: adventureIndex });

    startQuest(store, adventureIndex);
}

function startQuest(store, adventureIndex) {

//    if (store.getState().adventures[adventureIndex].selectedPartyMembers.length === 0) {
//        doAction('choose-adventurer-for-adventure', { adventureIndex: adventureIndex, adventurerName: "player1", isAdventurerGoing: true });
//    }

    store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("send-adventurer-to-adventure", { adventureIndex: adventureIndex, adventurerName: adventurerName }, "adventurers sent to " + store.getState().adventures[adventureIndex].name);
    });

    fight(store, adventureIndex);
}

function performRound(store, adventureIndex) {
    const strengthSum = getPartyStrength(store.getState(), adventureIndex) + Object(_characterUtils__WEBPACK_IMPORTED_MODULE_1__["calculateItemStrength"])(store.getState());
    Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("change-enemy-hp", { adventureIndex: adventureIndex, hpDelta: -strengthSum}, "damage done: " + strengthSum + " in the adventure " + store.getState().adventures[adventureIndex].name);

    if (isDead(store.getState().adventures[adventureIndex].enemy)) {
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold }, "rewarded " + store.getState().adventures[adventureIndex].rewards.gold + " gold");
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp }, "recieved " + store.getState().adventures[adventureIndex].rewards.exp + "exp");
        console.log("enemy dead");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        return "ENEMY_DEAD";
    }

    Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("change-player-hp", { hpDelta: Math.min(0, Object(_characterUtils__WEBPACK_IMPORTED_MODULE_1__["calculateItemDefense"])(store.getState()) - store.getState().adventures[adventureIndex].enemy.damage) });
    if (isDead(store.getState().party.adventurers[0])) {
        console.log("you dead");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        return "PLAYER_DEAD";
    }

    Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("collect-from-adventure", { adventureIndex: adventureIndex });
    if (isCollected(store.getState().adventures[adventureIndex])) {
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("give-this-man-a-cookie", { gold: store.getState().adventures[adventureIndex].rewards.gold });
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reward-exp", { exp: store.getState().adventures[adventureIndex].rewards.exp });
        console.log("you got away");
        store.getState().adventures[adventureIndex].selectedPartyMembers.forEach(adventurerName => {
            Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("return-adventurer-from-adventure", { adventurerName: adventurerName }, "adventurers returned from " + store.getState().adventures[adventureIndex].name);
        });
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("reset-adventure", { adventureIndex: adventureIndex });
        return "PLAYER_ESCAPED";
    }

    return "CONTINUE"
}

function getPartyStrength(state, adventureindex) {
    return state.party.adventurers.filter(member => {
        return state.adventures[adventureindex].selectedPartyMembers.indexOf(member.name) > -1;
    }).reduce((strengthSum, currentMember) => strengthSum + currentMember.stats.strength, 0)
}
function isCollected(adventure) {
    return adventure.collectibles <= 0;
}

function isDead(character) {
    return character.hp <= 0;
}

function fight(store, adventureIndex) {
    const intervalId = setInterval(() => {
        const roundResult = performRound(store, adventureIndex);
        if (roundResult !== "CONTINUE") {
            clearInterval(intervalId);
        }
    }, 2000);
}


/***/ }),

/***/ "./src/reducers.js":
/*!*************************!*\
  !*** ./src/reducers.js ***!
  \*************************/
/*! exports provided: doAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doAction", function() { return doAction; });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/actions.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store.js");




function doAction(action, actionParams, logMessage) {
    let state = _store__WEBPACK_IMPORTED_MODULE_2__["getState"]();

    console.log(Array.from(arguments));
    if (logMessage) {
        state = _actions__WEBPACK_IMPORTED_MODULE_1__["writeToLog"](state, logMessage);
    }
    switch (action) {
        case "start-game":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["startGame"](state, actionParams.initialState);
            break;
        case "change-enemy-hp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["changeEnemyHP"](state, actionParams.adventureIndex, actionParams.hpDelta);
            break;
        case "change-player-hp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["changePlayerHP"](state, actionParams.hpDelta);
            break;
        case "give-this-man-a-cookie":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["giveThisManACookie"](state, actionParams.gold);
            break;
        case "collect-from-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["collectFromAdventure"](state, actionParams.adventureIndex)
            break;
        case "reset-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["resetAdventure"](state, state.initialState, actionParams.adventureIndex);
            break;
        case "reward-exp":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["rewardExp"](state, actionParams.exp);
            break;
        case "level-up":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["levelUp"](state);
            break;
        case "send-adventurer-to-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["sendAdventurerToAdventure"](state, actionParams.adventureIndex, actionParams.adventurerName);
            break;
        case "return-adventurer-from-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["returnAdventurerFromAdventure"](state, actionParams.adventurerName);
            break;
        case "choose-adventurer-for-adventure":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["chooseAdventurerForAdventure"](state, actionParams.isAdventurerGoing, actionParams.adventurerName, actionParams.adventureIndex);
            break;
        case "start-adventure-idling":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["startAdventureIdling"](state, actionParams.adventureIndex);
            break;
        case "stop-adventure-idling":
            state = _actions__WEBPACK_IMPORTED_MODULE_1__["stopAdventureIdling"](state, actionParams.adventureIndex);
            break;
    }
    localStorage.setItem('game', JSON.stringify(state));
    console.log(localStorage);
    _store__WEBPACK_IMPORTED_MODULE_2__["setState"](state);

    console.log(state);

    _ui__WEBPACK_IMPORTED_MODULE_0__["renderGame"](_store__WEBPACK_IMPORTED_MODULE_2__);

    return state;
}


/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: getPrevState, getState, setState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevState", function() { return getPrevState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setState", function() { return setState; });
let prevState = null;
let state = {};

function getPrevState() {
    return prevState;
}

function getState() {
    return state;
}

function setState(newState) {
    prevState = state;
    state = newState;
}

window.getState = () => state;

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: renderGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderGame", function() { return renderGame; });
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers.js");
/* harmony import */ var _quests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quests */ "./src/quests.js");
/* harmony import */ var _characterUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterUtils */ "./src/characterUtils.js");
/* harmony import */ var _fe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fe */ "./src/fe.js");





function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B","T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    newValue = Math.round((newValue + Number.EPSILON) * 100) / 100;

    newValue += suffixes[suffixNum];
    return newValue;
  }

function renderPlayerHP(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-hp-progress").style.width = Math.floor((player.hp * 100) / player.maxHP) + "%";
    document.getElementById("player-hp").title = player.hpRegain + "/s";
    document.getElementById("player-hp-value").innerText = abbreviateNumber(player.hp);
}

function renderPlayerXP(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-exp-progress").style.width = Math.floor((player.exp * 100) / player.expToNextLevel) + "%";
    document.getElementById("player-exp-value").innerText = abbreviateNumber(player.exp) + "/" + abbreviateNumber(player.expToNextLevel);
    document.getElementById("player-level").innerText = abbreviateNumber(player.level);
}

function renderPlayerGold(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-gold").innerText = abbreviateNumber(player.gold);
}

function renderPlayerStrength(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-strength").innerText = abbreviateNumber(player.stats.strength) + " (+" + abbreviateNumber(Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["calculateItemStrength"])(state)) + ")";
}

function renderPlayerAgility(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-agility").innerText = abbreviateNumber(player.stats.agility);
}
function renderPlayerDefense(state) {
    const player = Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state);
    document.getElementById("player-defense").innerText = abbreviateNumber(player.stats.defense) + " (+" + abbreviateNumber(Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["calculateItemDefense"])(state)) + ")";;
}

function renderInventory(state) {
    document.getElementById("inventory").innerHTML = "";
    document.getElementById("inventory").appendChild(getItemsContainer(state.inventory));
}

function renderGame(store) {
    const renderers = {
        renderPlayerHP,
        renderPlayerXP,
        renderPlayerGold,
        renderPlayerStrength,
        renderPlayerAgility,
        renderPlayerDefense,
        renderInventory
    }

    Object.keys(renderers).forEach(renderer => {
        Object(_fe__WEBPACK_IMPORTED_MODULE_3__["renderWhenNeeded"])(renderer, renderers[renderer], store.getPrevState(), store.getState());
    });

    const newAdventuresElement = getAdventuresElement(store);
    if (newAdventuresElement.outerHTML != document.getElementById("advantures-data").innerHTML) {
        document.getElementById("advantures-data").innerHTML = "";
        document.getElementById("advantures-data").appendChild(newAdventuresElement);
    }

    const newAdventurersElement = getAdventurers(store);
    if (newAdventurersElement.outerHTML != document.getElementById("party-data").innerHTML) {
        document.getElementById("party-data").innerHTML = "";
        document.getElementById("party-data").appendChild(newAdventurersElement);
    }

    const newLogElement = getLog(store);
    if (newLogElement.outerHTML != document.getElementById("quest-log").innerHTML) {
        document.getElementById("quest-log").innerHTML = "";
        document.getElementById("quest-log").appendChild(newLogElement);
    }

}

function getItemsContainer(items) {
    const itemsContainer = document.createElement("div");
    items.forEach(item => {
        itemsContainer.appendChild(getItemElement(item));
    });
    return itemsContainer;
}

function getItemElement(item) {
    const itemElement = document.createElement("div");
    itemElement.className = item.id + " inventory-item";
    return itemElement;
}

function getAdventureElement(state, adventureIndex, onSendPlayer, onStartIdling) {
    const adventure = state.adventures[adventureIndex];
    const button = document.createElement("button");
    button.innerText = "Send selected";
    button.classList = button.classList + " go-to-adventure"
    button.onclick = onSendPlayer;
    if (Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state).currentQuest !== null) {
        button.disabled = true;
    }
    if (adventure.selectedPartyMembers.length === 0) {
      button.disabled = true;
    }
    const idleButton = document.createElement("button");
    idleButton.innerText = "Start idling";
    idleButton.onclick = onStartIdling;
    if (adventure.selectedPartyMembers.length === 0) {
      idleButton.disabled = true;
    }
    const adventureContainer = document.createElement("div");
    adventureContainer.className = "adventure-container";
    adventureContainer.innerHTML = `
        Monster: ${adventure.enemy.name} (${adventure.enemy.hp} hp)<br />
        Reward: ${adventure.rewards.gold} gold | ${adventure.rewards.exp} exp <br />
        Party Member:
    `;
    adventureContainer.appendChild(getPartyMembersSelector(state, adventureIndex, state.party.adventurers, (isAdventurerGoing, adventurerName) => {
        Object(_reducers__WEBPACK_IMPORTED_MODULE_0__["doAction"])("choose-adventurer-for-adventure", { isAdventurerGoing, adventurerName, adventureIndex })
    }))
    adventureContainer.appendChild(button);
    adventureContainer.appendChild(idleButton);
    return adventureContainer;
}

function getPartyMembersSelector(state, adventureIndex, adventurers, onChange) {
    const adventureElements = adventurers.map((adventurer) => {
        const inputContainer = document.createElement("div");
        const inputElement = document.createElement("input");
        inputElement.type = "checkbox";
        const isSelectedOnThisAdventure = state.adventures[adventureIndex].selectedPartyMembers.indexOf(adventurer.name) > -1;
        const isWentOnAnotherAdventure = adventurer.currentQuest !== null && adventurer.currentQuest !== adventureIndex;
        const isSelectedForAnotherAdventure = state.adventures.filter(adventure => adventure.selectedPartyMembers.indexOf(adventurer.name) > -1).length > 0;

        if (isSelectedOnThisAdventure && !isWentOnAnotherAdventure) {
            inputElement.checked = true;
        } else {
            if (isSelectedForAnotherAdventure) {
                inputElement.disabled = true;
            }
        }
        inputElement.value = adventurer.name;
        inputElement.onchange = event => {
            onChange(event.target.checked, adventurer.name);
        }
        const textElement = document.createElement("span");
        textElement.innerText = adventurer.name;
        inputContainer.appendChild(inputElement);
        inputContainer.appendChild(textElement);
        return inputContainer;
    });

    const selector = document.createElement("div");
    adventureElements.forEach(adventureElement => selector.appendChild(adventureElement));
    return selector
}

function getAdventuresElement(store) {
    const state = store.getState();
    const availableAdventures = getAvailableAdventures(state);
    const buttons = availableAdventures.map(adventure => {
        const adventureIndex = state.adventures.indexOf(adventure);
        return getAdventureElement(state,
                                   adventureIndex,
                                   () => Object(_quests__WEBPACK_IMPORTED_MODULE_1__["startQuest"])(store, adventureIndex),
                                   () => startIdling(store, adventureIndex));
    });
    const buttonsContainer = document.createElement("div");
    buttons.forEach(button => buttonsContainer.appendChild(button));
    return buttonsContainer;
};

function getAdventurers(store) {
    const state = store.getState();
    const partyContainer = document.createElement("div");
    partyContainer.className = "party-container";
    state.party.adventurers.forEach(adventurer => {
        partyContainer.innerHTML += `
        Member: ${adventurer.name} <br />
    `});
    return partyContainer;
}

function getLog(store) {
    const state = store.getState();
    const logContainer = document.createElement("div");
    logContainer.className = "log-container";
    state.log.forEach(line => {
        logContainer.innerHTML += `
        ${line} <br />
    `});
    return logContainer;
}

function getAvailableAdventures(state) {
    return state.adventures.filter(adventure => Object(_characterUtils__WEBPACK_IMPORTED_MODULE_2__["getPlayerFromState"])(state).level >= adventure.requiredLevel)
}


/***/ })

/******/ });
//# sourceMappingURL=main.js.map