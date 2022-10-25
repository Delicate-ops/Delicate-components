import * as A from "react";
import Pe, { createElement as ss, useState as Mt, useMemo as _a, useRef as Se, useContext as us, useEffect as je, useLayoutEffect as fs, forwardRef as Ea, useImperativeHandle as Pa } from "react";
import Nt from "react-dom";
var Ft = function() {
  return Ft = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, Ft.apply(this, arguments);
};
function ls(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hr = { exports: {} }, Et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function cs() {
  if (Jn)
    return Et;
  Jn = 1;
  var e = Pe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(u, s, f) {
    var l, d = {}, v = null, y = null;
    f !== void 0 && (v = "" + f), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (y = s.ref);
    for (l in s)
      n.call(s, l) && !o.hasOwnProperty(l) && (d[l] = s[l]);
    if (u && u.defaultProps)
      for (l in s = u.defaultProps, s)
        d[l] === void 0 && (d[l] = s[l]);
    return { $$typeof: t, type: u, key: v, ref: y, props: d, _owner: i.current };
  }
  return Et.Fragment = r, Et.jsx = a, Et.jsxs = a, Et;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function ds() {
  return Qn || (Qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
    function b(c) {
      if (c === null || typeof c != "object")
        return null;
      var M = g && c[g] || c[_];
      return typeof M == "function" ? M : null;
    }
    var m = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(c) {
      {
        for (var M = arguments.length, V = new Array(M > 1 ? M - 1 : 0), W = 1; W < M; W++)
          V[W - 1] = arguments[W];
        C("error", c, V);
      }
    }
    function C(c, M, V) {
      {
        var W = m.ReactDebugCurrentFrame, ae = W.getStackAddendum();
        ae !== "" && (M += "%s", V = V.concat([ae]));
        var le = V.map(function(Z) {
          return String(Z);
        });
        le.unshift("Warning: " + M), Function.prototype.apply.call(console[c], console, le);
      }
    }
    var R = !1, E = !1, F = !1, w = !1, P = !1, T;
    T = Symbol.for("react.module.reference");
    function h(c) {
      return !!(typeof c == "string" || typeof c == "function" || c === n || c === o || P || c === i || c === f || c === l || w || c === y || R || E || F || typeof c == "object" && c !== null && (c.$$typeof === v || c.$$typeof === d || c.$$typeof === a || c.$$typeof === u || c.$$typeof === s || c.$$typeof === T || c.getModuleId !== void 0));
    }
    function p(c, M, V) {
      var W = c.displayName;
      if (W)
        return W;
      var ae = M.displayName || M.name || "";
      return ae !== "" ? V + "(" + ae + ")" : V;
    }
    function S(c) {
      return c.displayName || "Context";
    }
    function x(c) {
      if (c == null)
        return null;
      if (typeof c.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof c == "function")
        return c.displayName || c.name || null;
      if (typeof c == "string")
        return c;
      switch (c) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case u:
            var M = c;
            return S(M) + ".Consumer";
          case a:
            var V = c;
            return S(V._context) + ".Provider";
          case s:
            return p(c, c.render, "ForwardRef");
          case d:
            var W = c.displayName || null;
            return W !== null ? W : x(c.type) || "Memo";
          case v: {
            var ae = c, le = ae._payload, Z = ae._init;
            try {
              return x(Z(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, N = 0, k, z, I, H, Y, te, X;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function ce() {
      {
        if (N === 0) {
          k = console.log, z = console.info, I = console.warn, H = console.error, Y = console.group, te = console.groupCollapsed, X = console.groupEnd;
          var c = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: c,
            log: c,
            warn: c,
            error: c,
            group: c,
            groupCollapsed: c,
            groupEnd: c
          });
        }
        N++;
      }
    }
    function B() {
      {
        if (N--, N === 0) {
          var c = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, c, {
              value: k
            }),
            info: $({}, c, {
              value: z
            }),
            warn: $({}, c, {
              value: I
            }),
            error: $({}, c, {
              value: H
            }),
            group: $({}, c, {
              value: Y
            }),
            groupCollapsed: $({}, c, {
              value: te
            }),
            groupEnd: $({}, c, {
              value: X
            })
          });
        }
        N < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = m.ReactCurrentDispatcher, oe;
    function ve(c, M, V) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (ae) {
            var W = ae.stack.trim().match(/\n( *(at )?)/);
            oe = W && W[1] || "";
          }
        return `
` + oe + c;
      }
    }
    var he = !1, Ce;
    {
      var Fe = typeof WeakMap == "function" ? WeakMap : Map;
      Ce = new Fe();
    }
    function D(c, M) {
      if (!c || he)
        return "";
      {
        var V = Ce.get(c);
        if (V !== void 0)
          return V;
      }
      var W;
      he = !0;
      var ae = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = re.current, re.current = null, ce();
      try {
        if (M) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (ze) {
              W = ze;
            }
            Reflect.construct(c, [], Z);
          } else {
            try {
              Z.call();
            } catch (ze) {
              W = ze;
            }
            c.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ze) {
            W = ze;
          }
          c();
        }
      } catch (ze) {
        if (ze && W && typeof ze.stack == "string") {
          for (var J = ze.stack.split(`
`), xe = W.stack.split(`
`), ye = J.length - 1, Ee = xe.length - 1; ye >= 1 && Ee >= 0 && J[ye] !== xe[Ee]; )
            Ee--;
          for (; ye >= 1 && Ee >= 0; ye--, Ee--)
            if (J[ye] !== xe[Ee]) {
              if (ye !== 1 || Ee !== 1)
                do
                  if (ye--, Ee--, Ee < 0 || J[ye] !== xe[Ee]) {
                    var Ne = `
` + J[ye].replace(" at new ", " at ");
                    return c.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", c.displayName)), typeof c == "function" && Ce.set(c, Ne), Ne;
                  }
                while (ye >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        he = !1, re.current = le, B(), Error.prepareStackTrace = ae;
      }
      var nt = c ? c.displayName || c.name : "", Kn = nt ? ve(nt) : "";
      return typeof c == "function" && Ce.set(c, Kn), Kn;
    }
    function G(c, M, V) {
      return D(c, !1);
    }
    function Oe(c) {
      var M = c.prototype;
      return !!(M && M.isReactComponent);
    }
    function we(c, M, V) {
      if (c == null)
        return "";
      if (typeof c == "function")
        return D(c, Oe(c));
      if (typeof c == "string")
        return ve(c);
      switch (c) {
        case f:
          return ve("Suspense");
        case l:
          return ve("SuspenseList");
      }
      if (typeof c == "object")
        switch (c.$$typeof) {
          case s:
            return G(c.render);
          case d:
            return we(c.type, M, V);
          case v: {
            var W = c, ae = W._payload, le = W._init;
            try {
              return we(le(ae), M, V);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, K = {}, ie = m.ReactDebugCurrentFrame;
    function ge(c) {
      if (c) {
        var M = c._owner, V = we(c.type, c._source, M ? M.type : null);
        ie.setExtraStackFrame(V);
      } else
        ie.setExtraStackFrame(null);
    }
    function He(c, M, V, W, ae) {
      {
        var le = Function.call.bind(_e);
        for (var Z in c)
          if (le(c, Z)) {
            var J = void 0;
            try {
              if (typeof c[Z] != "function") {
                var xe = Error((W || "React class") + ": " + V + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof c[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              J = c[Z](M, Z, W, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              J = ye;
            }
            J && !(J instanceof Error) && (ge(ae), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", W || "React class", V, Z, typeof J), ge(null)), J instanceof Error && !(J.message in K) && (K[J.message] = !0, ge(ae), O("Failed %s type: %s", V, J.message), ge(null));
          }
      }
    }
    var Wo = Array.isArray;
    function xr(c) {
      return Wo(c);
    }
    function zo(c) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, V = M && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return V;
      }
    }
    function qo(c) {
      try {
        return In(c), !1;
      } catch {
        return !0;
      }
    }
    function In(c) {
      return "" + c;
    }
    function Hn(c) {
      if (qo(c))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zo(c)), In(c);
    }
    var _t = m.ReactCurrentOwner, Uo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Wn, zn, Fr;
    Fr = {};
    function Bo(c) {
      if (_e.call(c, "ref")) {
        var M = Object.getOwnPropertyDescriptor(c, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return c.ref !== void 0;
    }
    function Yo(c) {
      if (_e.call(c, "key")) {
        var M = Object.getOwnPropertyDescriptor(c, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return c.key !== void 0;
    }
    function Go(c, M) {
      if (typeof c.ref == "string" && _t.current && M && _t.current.stateNode !== M) {
        var V = x(_t.current.type);
        Fr[V] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x(_t.current.type), c.ref), Fr[V] = !0);
      }
    }
    function Xo(c, M) {
      {
        var V = function() {
          Wn || (Wn = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(c, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function Ko(c, M) {
      {
        var V = function() {
          zn || (zn = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        V.isReactWarning = !0, Object.defineProperty(c, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var Jo = function(c, M, V, W, ae, le, Z) {
      var J = {
        $$typeof: t,
        type: c,
        key: M,
        ref: V,
        props: Z,
        _owner: le
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ae
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Qo(c, M, V, W, ae) {
      {
        var le, Z = {}, J = null, xe = null;
        V !== void 0 && (Hn(V), J = "" + V), Yo(M) && (Hn(M.key), J = "" + M.key), Bo(M) && (xe = M.ref, Go(M, ae));
        for (le in M)
          _e.call(M, le) && !Uo.hasOwnProperty(le) && (Z[le] = M[le]);
        if (c && c.defaultProps) {
          var ye = c.defaultProps;
          for (le in ye)
            Z[le] === void 0 && (Z[le] = ye[le]);
        }
        if (J || xe) {
          var Ee = typeof c == "function" ? c.displayName || c.name || "Unknown" : c;
          J && Xo(Z, Ee), xe && Ko(Z, Ee);
        }
        return Jo(c, J, xe, ae, W, _t.current, Z);
      }
    }
    var Ar = m.ReactCurrentOwner, qn = m.ReactDebugCurrentFrame;
    function rt(c) {
      if (c) {
        var M = c._owner, V = we(c.type, c._source, M ? M.type : null);
        qn.setExtraStackFrame(V);
      } else
        qn.setExtraStackFrame(null);
    }
    var $r;
    $r = !1;
    function Mr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }
    function Un() {
      {
        if (Ar.current) {
          var c = x(Ar.current.type);
          if (c)
            return `

Check the render method of \`` + c + "`.";
        }
        return "";
      }
    }
    function Zo(c) {
      {
        if (c !== void 0) {
          var M = c.fileName.replace(/^.*[\\\/]/, ""), V = c.lineNumber;
          return `

Check your code at ` + M + ":" + V + ".";
        }
        return "";
      }
    }
    var Bn = {};
    function es(c) {
      {
        var M = Un();
        if (!M) {
          var V = typeof c == "string" ? c : c.displayName || c.name;
          V && (M = `

Check the top-level render call using <` + V + ">.");
        }
        return M;
      }
    }
    function Yn(c, M) {
      {
        if (!c._store || c._store.validated || c.key != null)
          return;
        c._store.validated = !0;
        var V = es(M);
        if (Bn[V])
          return;
        Bn[V] = !0;
        var W = "";
        c && c._owner && c._owner !== Ar.current && (W = " It was passed a child from " + x(c._owner.type) + "."), rt(c), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, W), rt(null);
      }
    }
    function Gn(c, M) {
      {
        if (typeof c != "object")
          return;
        if (xr(c))
          for (var V = 0; V < c.length; V++) {
            var W = c[V];
            Mr(W) && Yn(W, M);
          }
        else if (Mr(c))
          c._store && (c._store.validated = !0);
        else if (c) {
          var ae = b(c);
          if (typeof ae == "function" && ae !== c.entries)
            for (var le = ae.call(c), Z; !(Z = le.next()).done; )
              Mr(Z.value) && Yn(Z.value, M);
        }
      }
    }
    function ts(c) {
      {
        var M = c.type;
        if (M == null || typeof M == "string")
          return;
        var V;
        if (typeof M == "function")
          V = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === s || M.$$typeof === d))
          V = M.propTypes;
        else
          return;
        if (V) {
          var W = x(M);
          He(V, c.props, "prop", W, c);
        } else if (M.PropTypes !== void 0 && !$r) {
          $r = !0;
          var ae = x(M);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rs(c) {
      {
        for (var M = Object.keys(c.props), V = 0; V < M.length; V++) {
          var W = M[V];
          if (W !== "children" && W !== "key") {
            rt(c), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", W), rt(null);
            break;
          }
        }
        c.ref !== null && (rt(c), O("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
      }
    }
    function Xn(c, M, V, W, ae, le) {
      {
        var Z = h(c);
        if (!Z) {
          var J = "";
          (c === void 0 || typeof c == "object" && c !== null && Object.keys(c).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = Zo(ae);
          xe ? J += xe : J += Un();
          var ye;
          c === null ? ye = "null" : xr(c) ? ye = "array" : c !== void 0 && c.$$typeof === t ? (ye = "<" + (x(c.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof c, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, J);
        }
        var Ee = Qo(c, M, V, ae, le);
        if (Ee == null)
          return Ee;
        if (Z) {
          var Ne = M.children;
          if (Ne !== void 0)
            if (W)
              if (xr(Ne)) {
                for (var nt = 0; nt < Ne.length; nt++)
                  Gn(Ne[nt], c);
                Object.freeze && Object.freeze(Ne);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gn(Ne, c);
        }
        return c === n ? rs(Ee) : ts(Ee), Ee;
      }
    }
    function ns(c, M, V) {
      return Xn(c, M, V, !0);
    }
    function is(c, M, V) {
      return Xn(c, M, V, !1);
    }
    var as = is, os = ns;
    Pt.Fragment = n, Pt.jsx = as, Pt.jsxs = os;
  }()), Pt;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = cs() : e.exports = ds();
})(hr);
const Ca = hr.exports.Fragment, L = hr.exports.jsx, gr = hr.exports.jsxs;
function me() {
  return me = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, me.apply(this, arguments);
}
function de(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function vt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function pt(e, t, r) {
  return t && Zn(e.prototype, t), r && Zn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Br(e, t) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Br(e, t);
}
function mr(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Br(e, t);
}
function ur(e) {
  return ur = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ur(e);
}
function vs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Re(e) {
  return Re = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Re(e);
}
function _n(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ps(e, t) {
  if (t && (Re(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _n(e);
}
function yr(e) {
  var t = vs();
  return function() {
    var n = ur(e), i;
    if (t) {
      var o = ur(this).constructor;
      i = Reflect.construct(n, arguments, o);
    } else
      i = n.apply(this, arguments);
    return ps(this, i);
  };
}
var Oa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (!!o) {
          var a = typeof o;
          if (a === "string" || a === "number")
            n.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var u = r.apply(null, o);
              u && n.push(u);
            }
          } else if (a === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              n.push(o.toString());
              continue;
            }
            for (var s in o)
              t.call(o, s) && o[s] && n.push(s);
          }
        }
      }
      return n.join(" ");
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Oa);
const Le = Oa.exports;
var En = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function hs() {
  if (ei)
    return se;
  ei = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function C(E) {
    if (typeof E == "object" && E !== null) {
      var F = E.$$typeof;
      switch (F) {
        case t:
          switch (E = E.type, E) {
            case s:
            case f:
            case n:
            case o:
            case i:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case u:
                case l:
                case g:
                case y:
                case a:
                  return E;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function R(E) {
    return C(E) === f;
  }
  return se.AsyncMode = s, se.ConcurrentMode = f, se.ContextConsumer = u, se.ContextProvider = a, se.Element = t, se.ForwardRef = l, se.Fragment = n, se.Lazy = g, se.Memo = y, se.Portal = r, se.Profiler = o, se.StrictMode = i, se.Suspense = d, se.isAsyncMode = function(E) {
    return R(E) || C(E) === s;
  }, se.isConcurrentMode = R, se.isContextConsumer = function(E) {
    return C(E) === u;
  }, se.isContextProvider = function(E) {
    return C(E) === a;
  }, se.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, se.isForwardRef = function(E) {
    return C(E) === l;
  }, se.isFragment = function(E) {
    return C(E) === n;
  }, se.isLazy = function(E) {
    return C(E) === g;
  }, se.isMemo = function(E) {
    return C(E) === y;
  }, se.isPortal = function(E) {
    return C(E) === r;
  }, se.isProfiler = function(E) {
    return C(E) === o;
  }, se.isStrictMode = function(E) {
    return C(E) === i;
  }, se.isSuspense = function(E) {
    return C(E) === d;
  }, se.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === f || E === o || E === i || E === d || E === v || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === y || E.$$typeof === a || E.$$typeof === u || E.$$typeof === l || E.$$typeof === b || E.$$typeof === m || E.$$typeof === O || E.$$typeof === _);
  }, se.typeOf = C, se;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function gs() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, _ = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, m = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || D === n || D === f || D === o || D === i || D === d || D === v || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === y || D.$$typeof === a || D.$$typeof === u || D.$$typeof === l || D.$$typeof === b || D.$$typeof === m || D.$$typeof === O || D.$$typeof === _);
    }
    function R(D) {
      if (typeof D == "object" && D !== null) {
        var G = D.$$typeof;
        switch (G) {
          case t:
            var Oe = D.type;
            switch (Oe) {
              case s:
              case f:
              case n:
              case o:
              case i:
              case d:
                return Oe;
              default:
                var we = Oe && Oe.$$typeof;
                switch (we) {
                  case u:
                  case l:
                  case g:
                  case y:
                  case a:
                    return we;
                  default:
                    return G;
                }
            }
          case r:
            return G;
        }
      }
    }
    var E = s, F = f, w = u, P = a, T = t, h = l, p = n, S = g, x = y, $ = r, N = o, k = i, z = d, I = !1;
    function H(D) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Y(D) || R(D) === s;
    }
    function Y(D) {
      return R(D) === f;
    }
    function te(D) {
      return R(D) === u;
    }
    function X(D) {
      return R(D) === a;
    }
    function U(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function ce(D) {
      return R(D) === l;
    }
    function B(D) {
      return R(D) === n;
    }
    function re(D) {
      return R(D) === g;
    }
    function oe(D) {
      return R(D) === y;
    }
    function ve(D) {
      return R(D) === r;
    }
    function he(D) {
      return R(D) === o;
    }
    function Ce(D) {
      return R(D) === i;
    }
    function Fe(D) {
      return R(D) === d;
    }
    ue.AsyncMode = E, ue.ConcurrentMode = F, ue.ContextConsumer = w, ue.ContextProvider = P, ue.Element = T, ue.ForwardRef = h, ue.Fragment = p, ue.Lazy = S, ue.Memo = x, ue.Portal = $, ue.Profiler = N, ue.StrictMode = k, ue.Suspense = z, ue.isAsyncMode = H, ue.isConcurrentMode = Y, ue.isContextConsumer = te, ue.isContextProvider = X, ue.isElement = U, ue.isForwardRef = ce, ue.isFragment = B, ue.isLazy = re, ue.isMemo = oe, ue.isPortal = ve, ue.isProfiler = he, ue.isStrictMode = Ce, ue.isSuspense = Fe, ue.isValidElementType = C, ue.typeOf = R;
  }()), ue;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = hs() : e.exports = gs();
})(En);
function Vt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Pe.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Vt(n)) : En.exports.isFragment(n) && n.props ? r = r.concat(Vt(n.props.children, t)) : r.push(n));
  }), r;
}
var Yr = {};
function Gr(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function ms() {
  Yr = {};
}
function ys(e, t, r) {
  !t && !Yr[r] && (e(!1, r), Yr[r] = !0);
}
function Ae(e, t) {
  ys(Gr, e, t);
}
function ri(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ri(Object(r), !0).forEach(function(n) {
      de(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ri(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ta(e, t) {
  typeof e == "function" ? e(t) : Re(e) === "object" && e && "current" in e && (e.current = t);
}
function br() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(i) {
    return i;
  });
  return n.length <= 1 ? n[0] : function(i) {
    t.forEach(function(o) {
      Ta(o, i);
    });
  };
}
function Pn(e) {
  var t, r, n = En.exports.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !(!((t = n.prototype) === null || t === void 0) && t.render) || typeof e == "function" && !(!((r = e.prototype) === null || r === void 0) && r.render));
}
function fr(e) {
  return e instanceof HTMLElement ? e : Nt.findDOMNode(e);
}
var Sa = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, o) {
      return i[0] === r ? (n = o, !0) : !1;
    }), n;
  }
  return function() {
    function t() {
      this.__entries__ = [];
    }
    return Object.defineProperty(t.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.get = function(r) {
      var n = e(this.__entries__, r), i = this.__entries__[n];
      return i && i[1];
    }, t.prototype.set = function(r, n) {
      var i = e(this.__entries__, r);
      ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
    }, t.prototype.delete = function(r) {
      var n = this.__entries__, i = e(n, r);
      ~i && n.splice(i, 1);
    }, t.prototype.has = function(r) {
      return !!~e(this.__entries__, r);
    }, t.prototype.clear = function() {
      this.__entries__.splice(0);
    }, t.prototype.forEach = function(r, n) {
      n === void 0 && (n = null);
      for (var i = 0, o = this.__entries__; i < o.length; i++) {
        var a = o[i];
        r.call(n, a[1], a[0]);
      }
    }, t;
  }();
}(), Xr = typeof window < "u" && typeof document < "u" && window.document === document, lr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), bs = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(lr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ws = 2;
function _s(e, t) {
  var r = !1, n = !1, i = 0;
  function o() {
    r && (r = !1, e()), n && u();
  }
  function a() {
    bs(o);
  }
  function u() {
    var s = Date.now();
    if (r) {
      if (s - i < ws)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(a, t);
    i = s;
  }
  return u;
}
var Es = 20, Ps = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Cs = typeof MutationObserver < "u", Os = function() {
  function e() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = _s(this.refresh.bind(this), Es);
  }
  return e.prototype.addObserver = function(t) {
    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
  }, e.prototype.removeObserver = function(t) {
    var r = this.observers_, n = r.indexOf(t);
    ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
  }, e.prototype.refresh = function() {
    var t = this.updateObservers_();
    t && this.refresh();
  }, e.prototype.updateObservers_ = function() {
    var t = this.observers_.filter(function(r) {
      return r.gatherActive(), r.hasActive();
    });
    return t.forEach(function(r) {
      return r.broadcastActive();
    }), t.length > 0;
  }, e.prototype.connect_ = function() {
    !Xr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Cs ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, e.prototype.disconnect_ = function() {
    !Xr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, e.prototype.onTransitionEnd_ = function(t) {
    var r = t.propertyName, n = r === void 0 ? "" : r, i = Ps.some(function(o) {
      return !!~n.indexOf(o);
    });
    i && this.refresh();
  }, e.getInstance = function() {
    return this.instance_ || (this.instance_ = new e()), this.instance_;
  }, e.instance_ = null, e;
}(), Ra = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, ct = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || lr;
}, xa = wr(0, 0, 0, 0);
function cr(e) {
  return parseFloat(e) || 0;
}
function ni(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var o = e["border-" + i + "-width"];
    return n + cr(o);
  }, 0);
}
function Ts(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var o = i[n], a = e["padding-" + o];
    r[o] = cr(a);
  }
  return r;
}
function Ss(e) {
  var t = e.getBBox();
  return wr(0, 0, t.width, t.height);
}
function Rs(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return xa;
  var n = ct(e).getComputedStyle(e), i = Ts(n), o = i.left + i.right, a = i.top + i.bottom, u = cr(n.width), s = cr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(u + o) !== t && (u -= ni(n, "left", "right") + o), Math.round(s + a) !== r && (s -= ni(n, "top", "bottom") + a)), !Fs(e)) {
    var f = Math.round(u + o) - t, l = Math.round(s + a) - r;
    Math.abs(f) !== 1 && (u -= f), Math.abs(l) !== 1 && (s -= l);
  }
  return wr(i.left, i.top, u, s);
}
var xs = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof ct(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof ct(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Fs(e) {
  return e === ct(e).document.documentElement;
}
function As(e) {
  return Xr ? xs(e) ? Ss(e) : Rs(e) : xa;
}
function $s(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(o.prototype);
  return Ra(a, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), a;
}
function wr(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var Ms = function() {
  function e(t) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = wr(0, 0, 0, 0), this.target = t;
  }
  return e.prototype.isActive = function() {
    var t = As(this.target);
    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }, e.prototype.broadcastRect = function() {
    var t = this.contentRect_;
    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
  }, e;
}(), Ns = function() {
  function e(t, r) {
    var n = $s(r);
    Ra(this, { target: t, contentRect: n });
  }
  return e;
}(), Vs = function() {
  function e(t, r, n) {
    if (this.activeObservations_ = [], this.observations_ = new Sa(), typeof t != "function")
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
  }
  return e.prototype.observe = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof ct(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var r = this.observations_;
      r.has(t) || (r.set(t, new Ms(t)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e.prototype.unobserve = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof ct(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var r = this.observations_;
      !r.has(t) || (r.delete(t), r.size || this.controller_.removeObserver(this));
    }
  }, e.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, e.prototype.gatherActive = function() {
    var t = this;
    this.clearActive(), this.observations_.forEach(function(r) {
      r.isActive() && t.activeObservations_.push(r);
    });
  }, e.prototype.broadcastActive = function() {
    if (!!this.hasActive()) {
      var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
        return new Ns(n.target, n.broadcastRect());
      });
      this.callback_.call(t, r, t), this.clearActive();
    }
  }, e.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e;
}(), Fa = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Sa(), Aa = function() {
  function e(t) {
    if (!(this instanceof e))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var r = Os.getInstance(), n = new Vs(t, r, this);
    Fa.set(this, n);
  }
  return e;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Aa.prototype[e] = function() {
    var t;
    return (t = Fa.get(this))[e].apply(t, arguments);
  };
});
var $a = function() {
  return typeof lr.ResizeObserver < "u" ? lr.ResizeObserver : Aa;
}(), Be = /* @__PURE__ */ new Map();
function Ma(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Be.get(n)) === null || r === void 0 || r.forEach(function(i) {
      return i(n);
    });
  });
}
var Na = new $a(Ma);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Ds(e, t) {
  Be.has(e) || (Be.set(e, /* @__PURE__ */ new Set()), Na.observe(e)), Be.get(e).add(t);
}
function ks(e, t) {
  Be.has(e) && (Be.get(e).delete(t), Be.get(e).size || (Na.unobserve(e), Be.delete(e)));
}
var js = /* @__PURE__ */ function(e) {
  mr(r, e);
  var t = yr(r);
  function r() {
    return vt(this, r), t.apply(this, arguments);
  }
  return pt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(A.Component), Kr = /* @__PURE__ */ A.createContext(null);
function Ls(e) {
  var t = e.children, r = e.onBatchResize, n = A.useRef(0), i = A.useRef([]), o = A.useContext(Kr), a = A.useCallback(function(u, s, f) {
    n.current += 1;
    var l = n.current;
    i.current.push({
      size: u,
      element: s,
      data: f
    }), Promise.resolve().then(function() {
      l === n.current && (r == null || r(i.current), i.current = []);
    }), o == null || o(u, s, f);
  }, [r, o]);
  return /* @__PURE__ */ L(Kr.Provider, {
    value: a,
    children: t
  });
}
function Is(e) {
  var t = e.children, r = e.disabled, n = A.useRef(null), i = A.useRef(null), o = A.useContext(Kr), a = typeof t == "function", u = a ? t(n) : t, s = A.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), f = !a && /* @__PURE__ */ A.isValidElement(u) && Pn(u), l = f ? u.ref : null, d = A.useMemo(function() {
    return br(l, n);
  }, [l, n]), v = A.useRef(e);
  v.current = e;
  var y = A.useCallback(function(g) {
    var _ = v.current, b = _.onResize, m = _.data, O = g.getBoundingClientRect(), C = O.width, R = O.height, E = g.offsetWidth, F = g.offsetHeight, w = Math.floor(C), P = Math.floor(R);
    if (s.current.width !== w || s.current.height !== P || s.current.offsetWidth !== E || s.current.offsetHeight !== F) {
      var T = {
        width: w,
        height: P,
        offsetWidth: E,
        offsetHeight: F
      };
      s.current = T;
      var h = E === Math.round(C) ? C : E, p = F === Math.round(R) ? R : F, S = j(j({}, T), {}, {
        offsetWidth: h,
        offsetHeight: p
      });
      o == null || o(S, g, m), b && Promise.resolve().then(function() {
        b(S, g);
      });
    }
  }, []);
  return A.useEffect(function() {
    var g = fr(n.current) || fr(i.current);
    return g && !r && Ds(g, y), function() {
      return ks(g, y);
    };
  }, [n.current, r]), /* @__PURE__ */ L(js, {
    ref: i,
    children: f ? /* @__PURE__ */ A.cloneElement(u, {
      ref: d
    }) : u
  });
}
var Hs = "rc-observer-key";
function Va(e) {
  var t = e.children, r = typeof t == "function" ? [t] : Vt(t);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Gr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Gr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(n, i) {
    var o = (n == null ? void 0 : n.key) || "".concat(Hs, "-").concat(i);
    return /* @__PURE__ */ ss(Is, {
      ...e,
      key: o
    }, n);
  });
}
Va.Collection = Ls;
function Ws(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, o;
  for (o = 0; o < n.length; o++)
    i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Lt(e, t) {
  if (e == null)
    return {};
  var r = Ws(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Jr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function zs(e) {
  if (Array.isArray(e))
    return Jr(e);
}
function Da(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Cn(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Jr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Jr(e, t);
  }
}
function qs() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(e) {
  return zs(e) || Da(e) || Cn(e) || qs();
}
var et = "RC_FORM_INTERNAL_HOOKS", fe = function() {
  Ae(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, dt = /* @__PURE__ */ A.createContext({
  getFieldValue: fe,
  getFieldsValue: fe,
  getFieldError: fe,
  getFieldWarning: fe,
  getFieldsError: fe,
  isFieldsTouched: fe,
  isFieldTouched: fe,
  isFieldValidating: fe,
  isFieldsValidating: fe,
  resetFields: fe,
  setFields: fe,
  setFieldValue: fe,
  setFieldsValue: fe,
  validateFields: fe,
  submit: fe,
  getInternalHooks: function() {
    return fe(), {
      dispatch: fe,
      initEntityValue: fe,
      registerField: fe,
      useSubscribe: fe,
      setInitialValues: fe,
      destroyForm: fe,
      setCallbacks: fe,
      registerWatch: fe,
      getFields: fe,
      setValidateMessages: fe,
      setPreserve: fe,
      getInitialValue: fe
    };
  }
});
function Qr(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Ie() {
  Ie = function() {
    return e;
  };
  var e = {}, t = Object.prototype, r = t.hasOwnProperty, n = typeof Symbol == "function" ? Symbol : {}, i = n.iterator || "@@iterator", o = n.asyncIterator || "@@asyncIterator", a = n.toStringTag || "@@toStringTag";
  function u(h, p, S) {
    return Object.defineProperty(h, p, {
      value: S,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), h[p];
  }
  try {
    u({}, "");
  } catch {
    u = function(S, x, $) {
      return S[x] = $;
    };
  }
  function s(h, p, S, x) {
    var $ = p && p.prototype instanceof d ? p : d, N = Object.create($.prototype), k = new w(x || []);
    return N._invoke = function(z, I, H) {
      var Y = "suspendedStart";
      return function(te, X) {
        if (Y === "executing")
          throw new Error("Generator is already running");
        if (Y === "completed") {
          if (te === "throw")
            throw X;
          return T();
        }
        for (H.method = te, H.arg = X; ; ) {
          var U = H.delegate;
          if (U) {
            var ce = R(U, H);
            if (ce) {
              if (ce === l)
                continue;
              return ce;
            }
          }
          if (H.method === "next")
            H.sent = H._sent = H.arg;
          else if (H.method === "throw") {
            if (Y === "suspendedStart")
              throw Y = "completed", H.arg;
            H.dispatchException(H.arg);
          } else
            H.method === "return" && H.abrupt("return", H.arg);
          Y = "executing";
          var B = f(z, I, H);
          if (B.type === "normal") {
            if (Y = H.done ? "completed" : "suspendedYield", B.arg === l)
              continue;
            return {
              value: B.arg,
              done: H.done
            };
          }
          B.type === "throw" && (Y = "completed", H.method = "throw", H.arg = B.arg);
        }
      };
    }(h, S, k), N;
  }
  function f(h, p, S) {
    try {
      return {
        type: "normal",
        arg: h.call(p, S)
      };
    } catch (x) {
      return {
        type: "throw",
        arg: x
      };
    }
  }
  e.wrap = s;
  var l = {};
  function d() {
  }
  function v() {
  }
  function y() {
  }
  var g = {};
  u(g, i, function() {
    return this;
  });
  var _ = Object.getPrototypeOf, b = _ && _(_(P([])));
  b && b !== t && r.call(b, i) && (g = b);
  var m = y.prototype = d.prototype = Object.create(g);
  function O(h) {
    ["next", "throw", "return"].forEach(function(p) {
      u(h, p, function(S) {
        return this._invoke(p, S);
      });
    });
  }
  function C(h, p) {
    function S($, N, k, z) {
      var I = f(h[$], h, N);
      if (I.type !== "throw") {
        var H = I.arg, Y = H.value;
        return Y && Re(Y) == "object" && r.call(Y, "__await") ? p.resolve(Y.__await).then(function(te) {
          S("next", te, k, z);
        }, function(te) {
          S("throw", te, k, z);
        }) : p.resolve(Y).then(function(te) {
          H.value = te, k(H);
        }, function(te) {
          return S("throw", te, k, z);
        });
      }
      z(I.arg);
    }
    var x;
    this._invoke = function($, N) {
      function k() {
        return new p(function(z, I) {
          S($, N, z, I);
        });
      }
      return x = x ? x.then(k, k) : k();
    };
  }
  function R(h, p) {
    var S = h.iterator[p.method];
    if (S === void 0) {
      if (p.delegate = null, p.method === "throw") {
        if (h.iterator.return && (p.method = "return", p.arg = void 0, R(h, p), p.method === "throw"))
          return l;
        p.method = "throw", p.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return l;
    }
    var x = f(S, h.iterator, p.arg);
    if (x.type === "throw")
      return p.method = "throw", p.arg = x.arg, p.delegate = null, l;
    var $ = x.arg;
    return $ ? $.done ? (p[h.resultName] = $.value, p.next = h.nextLoc, p.method !== "return" && (p.method = "next", p.arg = void 0), p.delegate = null, l) : $ : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, l);
  }
  function E(h) {
    var p = {
      tryLoc: h[0]
    };
    1 in h && (p.catchLoc = h[1]), 2 in h && (p.finallyLoc = h[2], p.afterLoc = h[3]), this.tryEntries.push(p);
  }
  function F(h) {
    var p = h.completion || {};
    p.type = "normal", delete p.arg, h.completion = p;
  }
  function w(h) {
    this.tryEntries = [{
      tryLoc: "root"
    }], h.forEach(E, this), this.reset(!0);
  }
  function P(h) {
    if (h) {
      var p = h[i];
      if (p)
        return p.call(h);
      if (typeof h.next == "function")
        return h;
      if (!isNaN(h.length)) {
        var S = -1, x = function $() {
          for (; ++S < h.length; )
            if (r.call(h, S))
              return $.value = h[S], $.done = !1, $;
          return $.value = void 0, $.done = !0, $;
        };
        return x.next = x;
      }
    }
    return {
      next: T
    };
  }
  function T() {
    return {
      value: void 0,
      done: !0
    };
  }
  return v.prototype = y, u(m, "constructor", y), u(y, "constructor", v), v.displayName = u(y, a, "GeneratorFunction"), e.isGeneratorFunction = function(h) {
    var p = typeof h == "function" && h.constructor;
    return !!p && (p === v || (p.displayName || p.name) === "GeneratorFunction");
  }, e.mark = function(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, y) : (h.__proto__ = y, u(h, a, "GeneratorFunction")), h.prototype = Object.create(m), h;
  }, e.awrap = function(h) {
    return {
      __await: h
    };
  }, O(C.prototype), u(C.prototype, o, function() {
    return this;
  }), e.AsyncIterator = C, e.async = function(h, p, S, x, $) {
    $ === void 0 && ($ = Promise);
    var N = new C(s(h, p, S, x), $);
    return e.isGeneratorFunction(p) ? N : N.next().then(function(k) {
      return k.done ? k.value : N.next();
    });
  }, O(m), u(m, a, "Generator"), u(m, i, function() {
    return this;
  }), u(m, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(h) {
    var p = [];
    for (var S in h)
      p.push(S);
    return p.reverse(), function x() {
      for (; p.length; ) {
        var $ = p.pop();
        if ($ in h)
          return x.value = $, x.done = !1, x;
      }
      return x.done = !0, x;
    };
  }, e.values = P, w.prototype = {
    constructor: w,
    reset: function(p) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(F), !p)
        for (var S in this)
          S.charAt(0) === "t" && r.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = void 0);
    },
    stop: function() {
      this.done = !0;
      var p = this.tryEntries[0].completion;
      if (p.type === "throw")
        throw p.arg;
      return this.rval;
    },
    dispatchException: function(p) {
      if (this.done)
        throw p;
      var S = this;
      function x(H, Y) {
        return k.type = "throw", k.arg = p, S.next = H, Y && (S.method = "next", S.arg = void 0), !!Y;
      }
      for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
        var N = this.tryEntries[$], k = N.completion;
        if (N.tryLoc === "root")
          return x("end");
        if (N.tryLoc <= this.prev) {
          var z = r.call(N, "catchLoc"), I = r.call(N, "finallyLoc");
          if (z && I) {
            if (this.prev < N.catchLoc)
              return x(N.catchLoc, !0);
            if (this.prev < N.finallyLoc)
              return x(N.finallyLoc);
          } else if (z) {
            if (this.prev < N.catchLoc)
              return x(N.catchLoc, !0);
          } else {
            if (!I)
              throw new Error("try statement without catch or finally");
            if (this.prev < N.finallyLoc)
              return x(N.finallyLoc);
          }
        }
      }
    },
    abrupt: function(p, S) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var $ = this.tryEntries[x];
        if ($.tryLoc <= this.prev && r.call($, "finallyLoc") && this.prev < $.finallyLoc) {
          var N = $;
          break;
        }
      }
      N && (p === "break" || p === "continue") && N.tryLoc <= S && S <= N.finallyLoc && (N = null);
      var k = N ? N.completion : {};
      return k.type = p, k.arg = S, N ? (this.method = "next", this.next = N.finallyLoc, l) : this.complete(k);
    },
    complete: function(p, S) {
      if (p.type === "throw")
        throw p.arg;
      return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && S && (this.next = S), l;
    },
    finish: function(p) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var x = this.tryEntries[S];
        if (x.finallyLoc === p)
          return this.complete(x.completion, x.afterLoc), F(x), l;
      }
    },
    catch: function(p) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var x = this.tryEntries[S];
        if (x.tryLoc === p) {
          var $ = x.completion;
          if ($.type === "throw") {
            var N = $.arg;
            F(x);
          }
          return N;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(p, S, x) {
      return this.delegate = {
        iterator: P(p),
        resultName: S,
        nextLoc: x
      }, this.method === "next" && (this.arg = void 0), l;
    }
  }, e;
}
function ii(e, t, r, n, i, o, a) {
  try {
    var u = e[o](a), s = u.value;
  } catch (f) {
    r(f);
    return;
  }
  u.done ? t(s) : Promise.resolve(s).then(n, i);
}
function It(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, i) {
      var o = e.apply(t, r);
      function a(s) {
        ii(o, n, i, a, u, "next", s);
      }
      function u(s) {
        ii(o, n, i, a, u, "throw", s);
      }
      a(void 0);
    });
  };
}
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tt.apply(this, arguments);
}
function Us(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Dt(e, t);
}
function Zr(e) {
  return Zr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zr(e);
}
function Dt(e, t) {
  return Dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Dt(e, t);
}
function Bs() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ir(e, t, r) {
  return Bs() ? ir = Reflect.construct.bind() : ir = function(i, o, a) {
    var u = [null];
    u.push.apply(u, o);
    var s = Function.bind.apply(i, u), f = new s();
    return a && Dt(f, a.prototype), f;
  }, ir.apply(null, arguments);
}
function Ys(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function en(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return en = function(n) {
    if (n === null || !Ys(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, i);
    }
    function i() {
      return ir(n, arguments, Zr(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Dt(i, n);
  }, en(e);
}
var Gs = /%[sdj%]/g, ka = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (ka = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function tn(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Me(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var i = 0, o = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var a = e.replace(Gs, function(u) {
      if (u === "%%")
        return "%";
      if (i >= o)
        return u;
      switch (u) {
        case "%s":
          return String(r[i++]);
        case "%d":
          return Number(r[i++]);
        case "%j":
          try {
            return JSON.stringify(r[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return u;
      }
    });
    return a;
  }
  return e;
}
function Xs(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Te(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Xs(t) && typeof e == "string" && !e);
}
function Ks(e, t, r) {
  var n = [], i = 0, o = e.length;
  function a(u) {
    n.push.apply(n, u || []), i++, i === o && r(n);
  }
  e.forEach(function(u) {
    t(u, a);
  });
}
function ai(e, t, r) {
  var n = 0, i = e.length;
  function o(a) {
    if (a && a.length) {
      r(a);
      return;
    }
    var u = n;
    n = n + 1, u < i ? t(e[u], o) : r([]);
  }
  o([]);
}
function Js(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var oi = /* @__PURE__ */ function(e) {
  Us(t, e);
  function t(r, n) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = n, i;
  }
  return t;
}(/* @__PURE__ */ en(Error));
function Qs(e, t, r, n, i) {
  if (t.first) {
    var o = new Promise(function(v, y) {
      var g = function(m) {
        return n(m), m.length ? y(new oi(m, tn(m))) : v(i);
      }, _ = Js(e);
      ai(_, r, g);
    });
    return o.catch(function(v) {
      return v;
    }), o;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], u = Object.keys(e), s = u.length, f = 0, l = [], d = new Promise(function(v, y) {
    var g = function(b) {
      if (l.push.apply(l, b), f++, f === s)
        return n(l), l.length ? y(new oi(l, tn(l))) : v(i);
    };
    u.length || (n(l), v(i)), u.forEach(function(_) {
      var b = e[_];
      a.indexOf(_) !== -1 ? ai(b, r, g) : Ks(b, r, g);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function Zs(e) {
  return !!(e && e.message !== void 0);
}
function eu(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function si(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = eu(t, e.fullFields) : n = t[r.field || e.fullField], Zs(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function ui(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = tt({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var ja = function(t, r, n, i, o, a) {
  t.required && (!n.hasOwnProperty(t.field) || Te(r, a || t.type)) && i.push(Me(o.messages.required, t.fullField));
}, tu = function(t, r, n, i, o) {
  (/^\s+$/.test(r) || r === "") && i.push(Me(o.messages.whitespace, t.fullField));
}, Bt, ru = function() {
  if (Bt)
    return Bt;
  var e = "[a-fA-F\\d:]", t = function(R) {
    return R && R.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), a = new RegExp("^" + r + "$"), u = new RegExp("^" + i + "$"), s = function(R) {
    return R && R.exact ? o : new RegExp("(?:" + t(R) + r + t(R) + ")|(?:" + t(R) + i + t(R) + ")", "g");
  };
  s.v4 = function(C) {
    return C && C.exact ? a : new RegExp("" + t(C) + r + t(C), "g");
  }, s.v6 = function(C) {
    return C && C.exact ? u : new RegExp("" + t(C) + i + t(C), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", l = "(?:\\S+(?::\\S*)?@)?", d = s.v4().source, v = s.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", _ = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', O = "(?:" + f + "|www\\.)" + l + "(?:localhost|" + d + "|" + v + "|" + y + g + _ + ")" + b + m;
  return Bt = new RegExp("(?:^" + O + "$)", "i"), Bt;
}, fi = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, St = {
  integer: function(t) {
    return St.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return St.number(t) && !St.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !St.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(fi.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(ru());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(fi.hex);
  }
}, nu = function(t, r, n, i, o) {
  if (t.required && r === void 0) {
    ja(t, r, n, i, o);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], u = t.type;
  a.indexOf(u) > -1 ? St[u](r) || i.push(Me(o.messages.types[u], t.fullField, t.type)) : u && typeof r !== t.type && i.push(Me(o.messages.types[u], t.fullField, t.type));
}, iu = function(t, r, n, i, o) {
  var a = typeof t.len == "number", u = typeof t.min == "number", s = typeof t.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = r, d = null, v = typeof r == "number", y = typeof r == "string", g = Array.isArray(r);
  if (v ? d = "number" : y ? d = "string" : g && (d = "array"), !d)
    return !1;
  g && (l = r.length), y && (l = r.replace(f, "_").length), a ? l !== t.len && i.push(Me(o.messages[d].len, t.fullField, t.len)) : u && !s && l < t.min ? i.push(Me(o.messages[d].min, t.fullField, t.min)) : s && !u && l > t.max ? i.push(Me(o.messages[d].max, t.fullField, t.max)) : u && s && (l < t.min || l > t.max) && i.push(Me(o.messages[d].range, t.fullField, t.min, t.max));
}, it = "enum", au = function(t, r, n, i, o) {
  t[it] = Array.isArray(t[it]) ? t[it] : [], t[it].indexOf(r) === -1 && i.push(Me(o.messages[it], t.fullField, t[it].join(", ")));
}, ou = function(t, r, n, i, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(Me(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(r) || i.push(Me(o.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Q = {
  required: ja,
  whitespace: tu,
  type: nu,
  range: iu,
  enum: au,
  pattern: ou
}, su = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r, "string") && !t.required)
      return n();
    Q.required(t, r, i, a, o, "string"), Te(r, "string") || (Q.type(t, r, i, a, o), Q.range(t, r, i, a, o), Q.pattern(t, r, i, a, o), t.whitespace === !0 && Q.whitespace(t, r, i, a, o));
  }
  n(a);
}, uu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && Q.type(t, r, i, a, o);
  }
  n(a);
}, fu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (r === "" && (r = void 0), Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && (Q.type(t, r, i, a, o), Q.range(t, r, i, a, o));
  }
  n(a);
}, lu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && Q.type(t, r, i, a, o);
  }
  n(a);
}, cu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), Te(r) || Q.type(t, r, i, a, o);
  }
  n(a);
}, du = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && (Q.type(t, r, i, a, o), Q.range(t, r, i, a, o));
  }
  n(a);
}, vu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && (Q.type(t, r, i, a, o), Q.range(t, r, i, a, o));
  }
  n(a);
}, pu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (r == null && !t.required)
      return n();
    Q.required(t, r, i, a, o, "array"), r != null && (Q.type(t, r, i, a, o), Q.range(t, r, i, a, o));
  }
  n(a);
}, hu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && Q.type(t, r, i, a, o);
  }
  n(a);
}, gu = "enum", mu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o), r !== void 0 && Q[gu](t, r, i, a, o);
  }
  n(a);
}, yu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r, "string") && !t.required)
      return n();
    Q.required(t, r, i, a, o), Te(r, "string") || Q.pattern(t, r, i, a, o);
  }
  n(a);
}, bu = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r, "date") && !t.required)
      return n();
    if (Q.required(t, r, i, a, o), !Te(r, "date")) {
      var s;
      r instanceof Date ? s = r : s = new Date(r), Q.type(t, s, i, a, o), s && Q.range(t, s.getTime(), i, a, o);
    }
  }
  n(a);
}, wu = function(t, r, n, i, o) {
  var a = [], u = Array.isArray(r) ? "array" : typeof r;
  Q.required(t, r, i, a, o, u), n(a);
}, Nr = function(t, r, n, i, o) {
  var a = t.type, u = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Te(r, a) && !t.required)
      return n();
    Q.required(t, r, i, u, o, a), Te(r, a) || Q.type(t, r, i, u, o);
  }
  n(u);
}, _u = function(t, r, n, i, o) {
  var a = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (Te(r) && !t.required)
      return n();
    Q.required(t, r, i, a, o);
  }
  n(a);
}, At = {
  string: su,
  method: uu,
  number: fu,
  boolean: lu,
  regexp: cu,
  integer: du,
  float: vu,
  array: pu,
  object: hu,
  enum: mu,
  pattern: yu,
  date: bu,
  url: Nr,
  hex: Nr,
  email: Nr,
  required: wu,
  any: _u
};
function rn() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var nn = rn(), Ht = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = nn, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var i = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(o) {
      var a = n[o];
      i.rules[o] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(n) {
    return n && (this._messages = ui(rn(), n)), this._messages;
  }, t.validate = function(n, i, o) {
    var a = this;
    i === void 0 && (i = {}), o === void 0 && (o = function() {
    });
    var u = n, s = i, f = o;
    if (typeof s == "function" && (f = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, u), Promise.resolve(u);
    function l(_) {
      var b = [], m = {};
      function O(R) {
        if (Array.isArray(R)) {
          var E;
          b = (E = b).concat.apply(E, R);
        } else
          b.push(R);
      }
      for (var C = 0; C < _.length; C++)
        O(_[C]);
      b.length ? (m = tn(b), f(b, m)) : f(null, u);
    }
    if (s.messages) {
      var d = this.messages();
      d === nn && (d = rn()), ui(d, s.messages), s.messages = d;
    } else
      s.messages = this.messages();
    var v = {}, y = s.keys || Object.keys(this.rules);
    y.forEach(function(_) {
      var b = a.rules[_], m = u[_];
      b.forEach(function(O) {
        var C = O;
        typeof C.transform == "function" && (u === n && (u = tt({}, u)), m = u[_] = C.transform(m)), typeof C == "function" ? C = {
          validator: C
        } : C = tt({}, C), C.validator = a.getValidationMethod(C), C.validator && (C.field = _, C.fullField = C.fullField || _, C.type = a.getType(C), v[_] = v[_] || [], v[_].push({
          rule: C,
          value: m,
          source: u,
          field: _
        }));
      });
    });
    var g = {};
    return Qs(v, s, function(_, b) {
      var m = _.rule, O = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      O = O && (m.required || !m.required && _.value), m.field = _.field;
      function C(F, w) {
        return tt({}, w, {
          fullField: m.fullField + "." + F,
          fullFields: m.fullFields ? [].concat(m.fullFields, [F]) : [F]
        });
      }
      function R(F) {
        F === void 0 && (F = []);
        var w = Array.isArray(F) ? F : [F];
        !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && m.message !== void 0 && (w = [].concat(m.message));
        var P = w.map(si(m, u));
        if (s.first && P.length)
          return g[m.field] = 1, b(P);
        if (!O)
          b(P);
        else {
          if (m.required && !_.value)
            return m.message !== void 0 ? P = [].concat(m.message).map(si(m, u)) : s.error && (P = [s.error(m, Me(s.messages.required, m.field))]), b(P);
          var T = {};
          m.defaultField && Object.keys(_.value).map(function(S) {
            T[S] = m.defaultField;
          }), T = tt({}, T, _.rule.fields);
          var h = {};
          Object.keys(T).forEach(function(S) {
            var x = T[S], $ = Array.isArray(x) ? x : [x];
            h[S] = $.map(C.bind(null, S));
          });
          var p = new e(h);
          p.messages(s.messages), _.rule.options && (_.rule.options.messages = s.messages, _.rule.options.error = s.error), p.validate(_.value, _.rule.options || s, function(S) {
            var x = [];
            P && P.length && x.push.apply(x, P), S && S.length && x.push.apply(x, S), b(x.length ? x : null);
          });
        }
      }
      var E;
      if (m.asyncValidator)
        E = m.asyncValidator(m, _.value, R, _.source, s);
      else if (m.validator) {
        try {
          E = m.validator(m, _.value, R, _.source, s);
        } catch (F) {
          console.error == null || console.error(F), s.suppressValidatorError || setTimeout(function() {
            throw F;
          }, 0), R(F.message);
        }
        E === !0 ? R() : E === !1 ? R(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : E instanceof Array ? R(E) : E instanceof Error && R(E.message);
      }
      E && E.then && E.then(function() {
        return R();
      }, function(F) {
        return R(F);
      });
    }, function(_) {
      l(_);
    }, u);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !At.hasOwnProperty(n.type))
      throw new Error(Me("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var i = Object.keys(n), o = i.indexOf("message");
    return o !== -1 && i.splice(o, 1), i.length === 1 && i[0] === "required" ? At.required : At[this.getType(n)] || void 0;
  }, e;
}();
Ht.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  At[t] = r;
};
Ht.warning = ka;
Ht.messages = nn;
Ht.validators = At;
var $e = "'${name}' is not a valid ${type}", La = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: $e,
    method: $e,
    array: $e,
    object: $e,
    number: $e,
    date: $e,
    boolean: $e,
    integer: $e,
    float: $e,
    regexp: $e,
    email: $e,
    url: $e,
    hex: $e
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
function Ia(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Ha(e) {
  if (Array.isArray(e))
    return e;
}
function Wa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eu(e) {
  return Ha(e) || Da(e) || Cn(e) || Wa();
}
function za(e, t, r, n) {
  if (!t.length)
    return r;
  var i = Eu(t), o = i[0], a = i.slice(1), u;
  return !e && typeof o == "number" ? u = [] : Array.isArray(e) ? u = ne(e) : u = j({}, e), n && r === void 0 && a.length === 1 ? delete u[o][a[0]] : u[o] = za(u[o], a, r, n), u;
}
function Pu(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Ia(e, t.slice(0, -1)) ? e : za(e, t, r, n);
}
function _r(e) {
  return Array.isArray(e) ? Ou(e) : Re(e) === "object" && e !== null ? Cu(e) : e;
}
function Cu(e) {
  if (Object.getPrototypeOf(e) === Object.prototype) {
    var t = {};
    for (var r in e)
      t[r] = _r(e[r]);
    return t;
  }
  return e;
}
function Ou(e) {
  return e.map(function(t) {
    return _r(t);
  });
}
function be(e) {
  return Qr(e);
}
function Ke(e, t) {
  var r = Ia(e, t);
  return r;
}
function Xe(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = Pu(e, t, r, n);
  return i;
}
function li(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var i = Ke(e, n);
    r = Xe(r, n, i);
  }), r;
}
function $t(e, t) {
  return e && e.some(function(r) {
    return Ua(r, t);
  });
}
function ci(e) {
  return Re(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function qa(e, t) {
  var r = Array.isArray(e) ? ne(e) : j({}, e);
  return t && Object.keys(t).forEach(function(n) {
    var i = r[n], o = t[n], a = ci(i) && ci(o);
    r[n] = a ? qa(i, o || {}) : _r(o);
  }), r;
}
function ar(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce(function(i, o) {
    return qa(i, o);
  }, e);
}
function Ua(e, t) {
  return !e || !t || e.length !== t.length ? !1 : e.every(function(r, n) {
    return t[n] === r;
  });
}
function Tu(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Re(e) !== "object" || Re(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), i = new Set([].concat(r, n));
  return ne(i).every(function(o) {
    var a = e[o], u = t[o];
    return typeof a == "function" && typeof u == "function" ? !0 : a === u;
  });
}
function Su(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Re(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function di(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var i = e[t], o = t - r;
  return o > 0 ? [].concat(ne(e.slice(0, r)), [i], ne(e.slice(r, t)), ne(e.slice(t + 1, n))) : o < 0 ? [].concat(ne(e.slice(0, t)), ne(e.slice(t + 1, r + 1)), [i], ne(e.slice(r + 1, n))) : e;
}
var Ru = Ht;
function xu(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var vi = "CODE_LOGIC_ERROR";
function an(e, t, r, n, i) {
  return on.apply(this, arguments);
}
function on() {
  return on = It(/* @__PURE__ */ Ie().mark(function e(t, r, n, i, o) {
    var a, u, s, f, l, d, v, y, g;
    return Ie().wrap(function(b) {
      for (; ; )
        switch (b.prev = b.next) {
          case 0:
            return a = j({}, n), delete a.ruleIndex, a.validator && (u = a.validator, a.validator = function() {
              try {
                return u.apply(void 0, arguments);
              } catch (m) {
                return console.error(m), Promise.reject(vi);
              }
            }), s = null, a && a.type === "array" && a.defaultField && (s = a.defaultField, delete a.defaultField), f = new Ru(de({}, t, [a])), l = ar({}, La, i.validateMessages), f.messages(l), d = [], b.prev = 9, b.next = 12, Promise.resolve(f.validate(de({}, t, r), j({}, i)));
          case 12:
            b.next = 17;
            break;
          case 14:
            b.prev = 14, b.t0 = b.catch(9), b.t0.errors && (d = b.t0.errors.map(function(m, O) {
              var C = m.message, R = C === vi ? l.default : C;
              return /* @__PURE__ */ A.isValidElement(R) ? /* @__PURE__ */ A.cloneElement(R, {
                key: "error_".concat(O)
              }) : R;
            }));
          case 17:
            if (!(!d.length && s)) {
              b.next = 22;
              break;
            }
            return b.next = 20, Promise.all(r.map(function(m, O) {
              return an("".concat(t, ".").concat(O), m, s, i, o);
            }));
          case 20:
            return v = b.sent, b.abrupt("return", v.reduce(function(m, O) {
              return [].concat(ne(m), ne(O));
            }, []));
          case 22:
            return y = j(j({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, o), g = d.map(function(m) {
              return typeof m == "string" ? xu(m, y) : m;
            }), b.abrupt("return", g);
          case 25:
          case "end":
            return b.stop();
        }
    }, e, null, [[9, 14]]);
  })), on.apply(this, arguments);
}
function Fu(e, t, r, n, i, o) {
  var a = e.join("."), u = r.map(function(l, d) {
    var v = l.validator, y = j(j({}, l), {}, {
      ruleIndex: d
    });
    return v && (y.validator = function(g, _, b) {
      var m = !1, O = function() {
        for (var E = arguments.length, F = new Array(E), w = 0; w < E; w++)
          F[w] = arguments[w];
        Promise.resolve().then(function() {
          Ae(!m, "Your validator function has already return a promise. `callback` will be ignored."), m || b.apply(void 0, F);
        });
      }, C = v(g, _, O);
      m = C && typeof C.then == "function" && typeof C.catch == "function", Ae(m, "`callback` is deprecated. Please return a promise instead."), m && C.then(function() {
        b();
      }).catch(function(R) {
        b(R || " ");
      });
    }), y;
  }).sort(function(l, d) {
    var v = l.warningOnly, y = l.ruleIndex, g = d.warningOnly, _ = d.ruleIndex;
    return !!v == !!g ? y - _ : v ? 1 : -1;
  }), s;
  if (i === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var l = It(/* @__PURE__ */ Ie().mark(function d(v, y) {
        var g, _, b;
        return Ie().wrap(function(O) {
          for (; ; )
            switch (O.prev = O.next) {
              case 0:
                g = 0;
              case 1:
                if (!(g < u.length)) {
                  O.next = 12;
                  break;
                }
                return _ = u[g], O.next = 5, an(a, t, _, n, o);
              case 5:
                if (b = O.sent, !b.length) {
                  O.next = 9;
                  break;
                }
                return y([{
                  errors: b,
                  rule: _
                }]), O.abrupt("return");
              case 9:
                g += 1, O.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return O.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var f = u.map(function(l) {
      return an(a, t, l, n, o).then(function(d) {
        return {
          errors: d,
          rule: l
        };
      });
    });
    s = (i ? $u(f) : Au(f)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return s.catch(function(l) {
    return l;
  }), s;
}
function Au(e) {
  return sn.apply(this, arguments);
}
function sn() {
  return sn = It(/* @__PURE__ */ Ie().mark(function e(t) {
    return Ie().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(i) {
              var o, a = (o = []).concat.apply(o, ne(i));
              return a;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), sn.apply(this, arguments);
}
function $u(e) {
  return un.apply(this, arguments);
}
function un() {
  return un = It(/* @__PURE__ */ Ie().mark(function e(t) {
    var r;
    return Ie().wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return r = 0, i.abrupt("return", new Promise(function(o) {
              t.forEach(function(a) {
                a.then(function(u) {
                  u.errors.length && o([u]), r += 1, r === t.length && o([]);
                });
              });
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e);
  })), un.apply(this, arguments);
}
var Mu = ["name"], Ve = [];
function pi(e, t, r, n, i, o) {
  return typeof e == "function" ? e(t, r, "source" in o ? {
    source: o.source
  } : {}) : n !== i;
}
var On = /* @__PURE__ */ function(e) {
  mr(r, e);
  var t = yr(r);
  function r(n) {
    var i;
    if (vt(this, r), i = t.call(this, n), i.state = {
      resetCount: 0
    }, i.cancelRegisterFunc = null, i.mounted = !1, i.touched = !1, i.dirty = !1, i.validatePromise = null, i.prevValidating = void 0, i.errors = Ve, i.warnings = Ve, i.cancelRegister = function() {
      var s = i.props, f = s.preserve, l = s.isListField, d = s.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(l, f, be(d)), i.cancelRegisterFunc = null;
    }, i.getNamePath = function() {
      var s = i.props, f = s.name, l = s.fieldContext, d = l.prefixName, v = d === void 0 ? [] : d;
      return f !== void 0 ? [].concat(ne(v), ne(f)) : [];
    }, i.getRules = function() {
      var s = i.props, f = s.rules, l = f === void 0 ? [] : f, d = s.fieldContext;
      return l.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }, i.refresh = function() {
      !i.mounted || i.setState(function(s) {
        var f = s.resetCount;
        return {
          resetCount: f + 1
        };
      });
    }, i.triggerMetaEvent = function(s) {
      var f = i.props.onMetaChange;
      f == null || f(j(j({}, i.getMeta()), {}, {
        destroy: s
      }));
    }, i.onStoreChange = function(s, f, l) {
      var d = i.props, v = d.shouldUpdate, y = d.dependencies, g = y === void 0 ? [] : y, _ = d.onReset, b = l.store, m = i.getNamePath(), O = i.getValue(s), C = i.getValue(b), R = f && $t(f, m);
      switch (l.type === "valueUpdate" && l.source === "external" && O !== C && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = Ve, i.warnings = Ve, i.triggerMetaEvent()), l.type) {
        case "reset":
          if (!f || R) {
            i.touched = !1, i.dirty = !1, i.validatePromise = null, i.errors = Ve, i.warnings = Ve, i.triggerMetaEvent(), _ == null || _(), i.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (R) {
            var E = l.data;
            "touched" in E && (i.touched = E.touched), "validating" in E && !("originRCField" in E) && (i.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (i.errors = E.errors || Ve), "warnings" in E && (i.warnings = E.warnings || Ve), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          }
          if (v && !m.length && pi(v, s, b, O, C, l)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var F = g.map(be);
          if (F.some(function(w) {
            return $t(l.relatedFields, w);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (R || (!g.length || m.length || v) && pi(v, s, b, O, C, l)) {
            i.reRender();
            return;
          }
          break;
      }
      v === !0 && i.reRender();
    }, i.validateRules = function(s) {
      var f = i.getNamePath(), l = i.getValue(), d = Promise.resolve().then(function() {
        if (!i.mounted)
          return [];
        var v = i.props, y = v.validateFirst, g = y === void 0 ? !1 : y, _ = v.messageVariables, b = s || {}, m = b.triggerName, O = i.getRules();
        m && (O = O.filter(function(R) {
          var E = R.validateTrigger;
          if (!E)
            return !0;
          var F = Qr(E);
          return F.includes(m);
        }));
        var C = Fu(f, l, O, s, g, _);
        return C.catch(function(R) {
          return R;
        }).then(function() {
          var R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ve;
          if (i.validatePromise === d) {
            var E;
            i.validatePromise = null;
            var F = [], w = [];
            (E = R.forEach) === null || E === void 0 || E.call(R, function(P) {
              var T = P.rule.warningOnly, h = P.errors, p = h === void 0 ? Ve : h;
              T ? w.push.apply(w, ne(p)) : F.push.apply(F, ne(p));
            }), i.errors = F, i.warnings = w, i.triggerMetaEvent(), i.reRender();
          }
        }), C;
      });
      return i.validatePromise = d, i.dirty = !0, i.errors = Ve, i.warnings = Ve, i.triggerMetaEvent(), i.reRender(), d;
    }, i.isFieldValidating = function() {
      return !!i.validatePromise;
    }, i.isFieldTouched = function() {
      return i.touched;
    }, i.isFieldDirty = function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var s = i.props.fieldContext, f = s.getInternalHooks(et), l = f.getInitialValue;
      return l(i.getNamePath()) !== void 0;
    }, i.getErrors = function() {
      return i.errors;
    }, i.getWarnings = function() {
      return i.warnings;
    }, i.isListField = function() {
      return i.props.isListField;
    }, i.isList = function() {
      return i.props.isList;
    }, i.isPreserve = function() {
      return i.props.preserve;
    }, i.getMeta = function() {
      i.prevValidating = i.isFieldValidating();
      var s = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath()
      };
      return s;
    }, i.getOnlyChild = function(s) {
      if (typeof s == "function") {
        var f = i.getMeta();
        return j(j({}, i.getOnlyChild(s(i.getControlled(), f, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Vt(s);
      return l.length !== 1 || !/* @__PURE__ */ A.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }, i.getValue = function(s) {
      var f = i.props.fieldContext.getFieldsValue, l = i.getNamePath();
      return Ke(s || f(!0), l);
    }, i.getControlled = function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, f = i.props, l = f.trigger, d = f.validateTrigger, v = f.getValueFromEvent, y = f.normalize, g = f.valuePropName, _ = f.getValueProps, b = f.fieldContext, m = d !== void 0 ? d : b.validateTrigger, O = i.getNamePath(), C = b.getInternalHooks, R = b.getFieldsValue, E = C(et), F = E.dispatch, w = i.getValue(), P = _ || function(S) {
        return de({}, g, S);
      }, T = s[l], h = j(j({}, s), P(w));
      h[l] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var S, x = arguments.length, $ = new Array(x), N = 0; N < x; N++)
          $[N] = arguments[N];
        v ? S = v.apply(void 0, $) : S = Su.apply(void 0, [g].concat($)), y && (S = y(S, w, R(!0))), F({
          type: "updateValue",
          namePath: O,
          value: S
        }), T && T.apply(void 0, $);
      };
      var p = Qr(m || []);
      return p.forEach(function(S) {
        var x = h[S];
        h[S] = function() {
          x && x.apply(void 0, arguments);
          var $ = i.props.rules;
          $ && $.length && F({
            type: "validateField",
            namePath: O,
            triggerName: S
          });
        };
      }), h;
    }, n.fieldContext) {
      var o = n.fieldContext.getInternalHooks, a = o(et), u = a.initEntityValue;
      u(_n(i));
    }
    return i;
  }
  return pt(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, o = i.shouldUpdate, a = i.fieldContext;
      if (this.mounted = !0, a) {
        var u = a.getInternalHooks, s = u(et), f = s.registerField;
        this.cancelRegisterFunc = f(this);
      }
      o === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      !this.mounted || this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      this.state.resetCount;
      var i = this.props.children, o = this.getOnlyChild(i), a = o.child, u = o.isFunction, s;
      return u ? s = a : /* @__PURE__ */ A.isValidElement(a) ? s = /* @__PURE__ */ A.cloneElement(a, this.getControlled(a.props)) : (Ae(!a, "`children` of Field is not validate ReactElement."), s = a), /* @__PURE__ */ L(Ca, {
        children: s
      });
    }
  }]), r;
}(A.Component);
On.contextType = dt;
On.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function Ba(e) {
  var t = e.name, r = Lt(e, Mu), n = A.useContext(dt), i = t !== void 0 ? be(t) : void 0, o = "keep";
  return r.isListField || (o = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && Ae(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ L(On, {
    name: i,
    ...r,
    fieldContext: n
  }, o);
}
var Nu = /* @__PURE__ */ A.createContext(null), Vu = function(t) {
  var r = t.name, n = t.initialValue, i = t.children, o = t.rules, a = t.validateTrigger, u = A.useContext(dt), s = A.useRef({
    keys: [],
    id: 0
  }), f = s.current, l = A.useMemo(function() {
    var g = be(u.prefixName) || [];
    return [].concat(ne(g), ne(be(r)));
  }, [u.prefixName, r]), d = A.useMemo(function() {
    return j(j({}, u), {}, {
      prefixName: l
    });
  }, [u, l]), v = A.useMemo(function() {
    return {
      getKey: function(_) {
        var b = l.length, m = _[b];
        return [f.keys[m], _.slice(b + 1)];
      }
    };
  }, [l]);
  if (typeof i != "function")
    return Ae(!1, "Form.List only accepts function as children."), null;
  var y = function(_, b, m) {
    var O = m.source;
    return O === "internal" ? !1 : _ !== b;
  };
  return /* @__PURE__ */ L(Nu.Provider, {
    value: v,
    children: /* @__PURE__ */ L(dt.Provider, {
      value: d,
      children: /* @__PURE__ */ L(Ba, {
        name: [],
        shouldUpdate: y,
        rules: o,
        validateTrigger: a,
        initialValue: n,
        isList: !0,
        children: function(g, _) {
          var b = g.value, m = b === void 0 ? [] : b, O = g.onChange, C = u.getFieldValue, R = function() {
            var P = C(l || []);
            return P || [];
          }, E = {
            add: function(P, T) {
              var h = R();
              T >= 0 && T <= h.length ? (f.keys = [].concat(ne(f.keys.slice(0, T)), [f.id], ne(f.keys.slice(T))), O([].concat(ne(h.slice(0, T)), [P], ne(h.slice(T))))) : (process.env.NODE_ENV !== "production" && (T < 0 || T > h.length) && Ae(!1, "The second parameter of the add function should be a valid positive number."), f.keys = [].concat(ne(f.keys), [f.id]), O([].concat(ne(h), [P]))), f.id += 1;
            },
            remove: function(P) {
              var T = R(), h = new Set(Array.isArray(P) ? P : [P]);
              h.size <= 0 || (f.keys = f.keys.filter(function(p, S) {
                return !h.has(S);
              }), O(T.filter(function(p, S) {
                return !h.has(S);
              })));
            },
            move: function(P, T) {
              if (P !== T) {
                var h = R();
                P < 0 || P >= h.length || T < 0 || T >= h.length || (f.keys = di(f.keys, P, T), O(di(h, P, T)));
              }
            }
          }, F = m || [];
          return Array.isArray(F) || (F = [], process.env.NODE_ENV !== "production" && Ae(!1, "Current value of '".concat(l.join(" > "), "' is not an array type."))), i(F.map(function(w, P) {
            var T = f.keys[P];
            return T === void 0 && (f.keys[P] = f.id, T = f.keys[P], f.id += 1), {
              name: P,
              key: T,
              isListField: !0
            };
          }), E, _);
        }
      })
    })
  });
};
function Du(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, o = !1, a, u;
    try {
      for (r = r.call(e); !(i = (a = r.next()).done) && (n.push(a.value), !(t && n.length === t)); i = !0)
        ;
    } catch (s) {
      o = !0, u = s;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (o)
          throw u;
      }
    }
    return n;
  }
}
function ee(e, t) {
  return Ha(e) || Du(e, t) || Cn(e, t) || Wa();
}
function ku(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(i, o) {
    e.forEach(function(a, u) {
      a.catch(function(s) {
        return t = !0, s;
      }).then(function(s) {
        r -= 1, n[u] = s, !(r > 0) && (t && o(n), i(n));
      });
    });
  }) : Promise.resolve([]);
}
var Ya = "__@field_split__";
function Vr(e) {
  return e.map(function(t) {
    return "".concat(Re(t), ":").concat(t);
  }).join(Ya);
}
var at = /* @__PURE__ */ function() {
  function e() {
    vt(this, e), this.kvs = /* @__PURE__ */ new Map();
  }
  return pt(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Vr(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Vr(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var i = this.get(r), o = n(i);
      o ? this.set(r, o) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Vr(r));
    }
  }, {
    key: "map",
    value: function(r) {
      return ne(this.kvs.entries()).map(function(n) {
        var i = ee(n, 2), o = i[0], a = i[1], u = o.split(Ya);
        return r({
          key: u.map(function(s) {
            var f = s.match(/^([^:]*):(.*)$/), l = ee(f, 3), d = l[1], v = l[2];
            return d === "number" ? Number(v) : v;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var i = n.key, o = n.value;
        return r[i.join(".")] = o, null;
      }), r;
    }
  }]), e;
}(), ju = ["name", "errors"], Lu = /* @__PURE__ */ pt(function e(t) {
  var r = this;
  vt(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }, this.getInternalHooks = function(n) {
    return n === et ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (Ae(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(n) {
    r.subscribable = n;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(n, i) {
    if (r.initialValues = n || {}, i) {
      var o, a = ar({}, n, r.store);
      (o = r.prevWithoutPreserves) === null || o === void 0 || o.map(function(u) {
        var s = u.key;
        a = Xe(a, s, Ke(n, s));
      }), r.prevWithoutPreserves = null, r.updateStore(a);
    }
  }, this.destroyForm = function() {
    var n = new at();
    r.getFieldEntities(!0).forEach(function(i) {
      r.isMergedPreserve(i.isPreserve()) || n.set(i.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }, this.getInitialValue = function(n) {
    var i = Ke(r.initialValues, n);
    return n.length ? _r(i) : i;
  }, this.setCallbacks = function(n) {
    r.callbacks = n;
  }, this.setValidateMessages = function(n) {
    r.validateMessages = n;
  }, this.setPreserve = function(n) {
    r.preserve = n;
  }, this.watchList = [], this.registerWatch = function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(i) {
        return i !== n;
      });
    };
  }, this.notifyWatch = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var i = r.getFieldsValue();
      r.watchList.forEach(function(o) {
        o(i, n);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || Ae(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }, this.updateStore = function(n) {
    r.store = n;
  }, this.getFieldEntities = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : r.fieldEntities;
  }, this.getFieldsMap = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new at();
    return r.getFieldEntities(n).forEach(function(o) {
      var a = o.getNamePath();
      i.set(a, o);
    }), i;
  }, this.getFieldEntitiesForNamePathList = function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var i = r.getFieldsMap(!0);
    return n.map(function(o) {
      var a = be(o);
      return i.get(a) || {
        INVALIDATE_NAME_PATH: be(o)
      };
    });
  }, this.getFieldsValue = function(n, i) {
    if (r.warningUnhooked(), n === !0 && !i)
      return r.store;
    var o = r.getFieldEntitiesForNamePathList(Array.isArray(n) ? n : null), a = [];
    return o.forEach(function(u) {
      var s, f = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (!(!n && ((s = u.isListField) === null || s === void 0 ? void 0 : s.call(u))))
        if (!i)
          a.push(f);
        else {
          var l = "getMeta" in u ? u.getMeta() : null;
          i(l) && a.push(f);
        }
    }), li(r.store, a.map(be));
  }, this.getFieldValue = function(n) {
    r.warningUnhooked();
    var i = be(n);
    return Ke(r.store, i);
  }, this.getFieldsError = function(n) {
    r.warningUnhooked();
    var i = r.getFieldEntitiesForNamePathList(n);
    return i.map(function(o, a) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? {
        name: o.getNamePath(),
        errors: o.getErrors(),
        warnings: o.getWarnings()
      } : {
        name: be(n[a]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(n) {
    r.warningUnhooked();
    var i = be(n), o = r.getFieldsError([i])[0];
    return o.errors;
  }, this.getFieldWarning = function(n) {
    r.warningUnhooked();
    var i = be(n), o = r.getFieldsError([i])[0];
    return o.warnings;
  }, this.isFieldsTouched = function() {
    r.warningUnhooked();
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    var a = i[0], u = i[1], s, f = !1;
    i.length === 0 ? s = null : i.length === 1 ? Array.isArray(a) ? (s = a.map(be), f = !1) : (s = null, f = a) : (s = a.map(be), f = u);
    var l = r.getFieldEntities(!0), d = function(b) {
      return b.isFieldTouched();
    };
    if (!s)
      return f ? l.every(d) : l.some(d);
    var v = new at();
    s.forEach(function(_) {
      v.set(_, []);
    }), l.forEach(function(_) {
      var b = _.getNamePath();
      s.forEach(function(m) {
        m.every(function(O, C) {
          return b[C] === O;
        }) && v.update(m, function(O) {
          return [].concat(ne(O), [_]);
        });
      });
    });
    var y = function(b) {
      return b.some(d);
    }, g = v.map(function(_) {
      var b = _.value;
      return b;
    });
    return f ? g.every(y) : g.some(y);
  }, this.isFieldTouched = function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }, this.isFieldsValidating = function(n) {
    r.warningUnhooked();
    var i = r.getFieldEntities();
    if (!n)
      return i.some(function(a) {
        return a.isFieldValidating();
      });
    var o = n.map(be);
    return i.some(function(a) {
      var u = a.getNamePath();
      return $t(o, u) && a.isFieldValidating();
    });
  }, this.isFieldValidating = function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }, this.resetWithFieldInitialValue = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new at(), o = r.getFieldEntities(!0);
    o.forEach(function(s) {
      var f = s.props.initialValue, l = s.getNamePath();
      if (f !== void 0) {
        var d = i.get(l) || /* @__PURE__ */ new Set();
        d.add({
          entity: s,
          value: f
        }), i.set(l, d);
      }
    });
    var a = function(f) {
      f.forEach(function(l) {
        var d = l.props.initialValue;
        if (d !== void 0) {
          var v = l.getNamePath(), y = r.getInitialValue(v);
          if (y !== void 0)
            Ae(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var g = i.get(v);
            if (g && g.size > 1)
              Ae(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var _ = r.getFieldValue(v);
              (!n.skipExist || _ === void 0) && r.updateStore(Xe(r.store, v, ne(g)[0].value));
            }
          }
        }
      });
    }, u;
    n.entities ? u = n.entities : n.namePathList ? (u = [], n.namePathList.forEach(function(s) {
      var f = i.get(s);
      if (f) {
        var l;
        (l = u).push.apply(l, ne(ne(f).map(function(d) {
          return d.entity;
        })));
      }
    })) : u = o, a(u);
  }, this.resetFields = function(n) {
    r.warningUnhooked();
    var i = r.store;
    if (!n) {
      r.updateStore(ar({}, r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(i, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var o = n.map(be);
    o.forEach(function(a) {
      var u = r.getInitialValue(a);
      r.updateStore(Xe(r.store, a, u));
    }), r.resetWithFieldInitialValue({
      namePathList: o
    }), r.notifyObservers(i, o, {
      type: "reset"
    }), r.notifyWatch(o);
  }, this.setFields = function(n) {
    r.warningUnhooked();
    var i = r.store, o = [];
    n.forEach(function(a) {
      var u = a.name;
      a.errors;
      var s = Lt(a, ju), f = be(u);
      o.push(f), "value" in s && r.updateStore(Xe(r.store, f, s.value)), r.notifyObservers(i, [f], {
        type: "setField",
        data: a
      });
    }), r.notifyWatch(o);
  }, this.getFields = function() {
    var n = r.getFieldEntities(!0), i = n.map(function(o) {
      var a = o.getNamePath(), u = o.getMeta(), s = j(j({}, u), {}, {
        name: a,
        value: r.getFieldValue(a)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return i;
  }, this.initEntityValue = function(n) {
    var i = n.props.initialValue;
    if (i !== void 0) {
      var o = n.getNamePath(), a = Ke(r.store, o);
      a === void 0 && r.updateStore(Xe(r.store, o, i));
    }
  }, this.isMergedPreserve = function(n) {
    var i = n !== void 0 ? n : r.preserve;
    return i != null ? i : !0;
  }, this.registerField = function(n) {
    r.fieldEntities.push(n);
    var i = n.getNamePath();
    if (r.notifyWatch([i]), n.props.initialValue !== void 0) {
      var o = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(o, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, u) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(u) && (!a || s.length > 1)) {
        var f = a ? void 0 : r.getInitialValue(i);
        if (i.length && r.getFieldValue(i) !== f && r.fieldEntities.every(function(d) {
          return !Ua(d.getNamePath(), i);
        })) {
          var l = r.store;
          r.updateStore(Xe(l, i, f, !0)), r.notifyObservers(l, [i], {
            type: "remove"
          }), r.triggerDependenciesUpdate(l, i);
        }
      }
      r.notifyWatch([i]);
    };
  }, this.dispatch = function(n) {
    switch (n.type) {
      case "updateValue": {
        var i = n.namePath, o = n.value;
        r.updateValue(i, o);
        break;
      }
      case "validateField": {
        var a = n.namePath, u = n.triggerName;
        r.validateFields([a], {
          triggerName: u
        });
        break;
      }
    }
  }, this.notifyObservers = function(n, i, o) {
    if (r.subscribable) {
      var a = j(j({}, o), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(u) {
        var s = u.onStoreChange;
        s(n, i, a);
      });
    } else
      r.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(n, i) {
    var o = r.getDependencyChildrenFields(i);
    return o.length && r.validateFields(o), r.notifyObservers(n, o, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(ne(o))
    }), o;
  }, this.updateValue = function(n, i) {
    var o = be(n), a = r.store;
    r.updateStore(Xe(r.store, o, i)), r.notifyObservers(a, [o], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([o]);
    var u = r.triggerDependenciesUpdate(a, o), s = r.callbacks.onValuesChange;
    if (s) {
      var f = li(r.store, [o]);
      s(f, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([o].concat(ne(u)));
  }, this.setFieldsValue = function(n) {
    r.warningUnhooked();
    var i = r.store;
    if (n) {
      var o = ar(r.store, n);
      r.updateStore(o);
    }
    r.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }, this.setFieldValue = function(n, i) {
    r.setFields([{
      name: n,
      value: i
    }]);
  }, this.getDependencyChildrenFields = function(n) {
    var i = /* @__PURE__ */ new Set(), o = [], a = new at();
    r.getFieldEntities().forEach(function(s) {
      var f = s.props.dependencies;
      (f || []).forEach(function(l) {
        var d = be(l);
        a.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(s), v;
        });
      });
    });
    var u = function s(f) {
      var l = a.get(f) || /* @__PURE__ */ new Set();
      l.forEach(function(d) {
        if (!i.has(d)) {
          i.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (o.push(v), s(v));
        }
      });
    };
    return u(n), o;
  }, this.triggerOnFieldsChange = function(n, i) {
    var o = r.callbacks.onFieldsChange;
    if (o) {
      var a = r.getFields();
      if (i) {
        var u = new at();
        i.forEach(function(f) {
          var l = f.name, d = f.errors;
          u.set(l, d);
        }), a.forEach(function(f) {
          f.errors = u.get(f.name) || f.errors;
        });
      }
      var s = a.filter(function(f) {
        var l = f.name;
        return $t(n, l);
      });
      o(s, a);
    }
  }, this.validateFields = function(n, i) {
    r.warningUnhooked();
    var o = !!n, a = o ? n.map(be) : [], u = [];
    r.getFieldEntities(!0).forEach(function(l) {
      if (o || a.push(l.getNamePath()), (i == null ? void 0 : i.recursive) && o) {
        var d = l.getNamePath();
        d.every(function(g, _) {
          return n[_] === g || n[_] === void 0;
        }) && a.push(d);
      }
      if (!(!l.props.rules || !l.props.rules.length)) {
        var v = l.getNamePath();
        if (!o || $t(a, v)) {
          var y = l.validateRules(j({
            validateMessages: j(j({}, La), r.validateMessages)
          }, i));
          u.push(y.then(function() {
            return {
              name: v,
              errors: [],
              warnings: []
            };
          }).catch(function(g) {
            var _, b = [], m = [];
            return (_ = g.forEach) === null || _ === void 0 || _.call(g, function(O) {
              var C = O.rule.warningOnly, R = O.errors;
              C ? m.push.apply(m, ne(R)) : b.push.apply(b, ne(R));
            }), b.length ? Promise.reject({
              name: v,
              errors: b,
              warnings: m
            }) : {
              name: v,
              errors: b,
              warnings: m
            };
          }));
        }
      }
    });
    var s = ku(u);
    r.lastValidatePromise = s, s.catch(function(l) {
      return l;
    }).then(function(l) {
      var d = l.map(function(v) {
        var y = v.name;
        return y;
      });
      r.notifyObservers(r.store, d, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(d, l);
    });
    var f = s.then(function() {
      return r.lastValidatePromise === s ? Promise.resolve(r.getFieldsValue(a)) : Promise.reject([]);
    }).catch(function(l) {
      var d = l.filter(function(v) {
        return v && v.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(a),
        errorFields: d,
        outOfDate: r.lastValidatePromise !== s
      });
    });
    return f.catch(function(l) {
      return l;
    }), f;
  }, this.submit = function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var i = r.callbacks.onFinish;
      if (i)
        try {
          i(n);
        } catch (o) {
          console.error(o);
        }
    }).catch(function(n) {
      var i = r.callbacks.onFinishFailed;
      i && i(n);
    });
  }, this.forceRootUpdate = t;
});
function Ga(e) {
  var t = A.useRef(), r = A.useState({}), n = ee(r, 2), i = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var o = function() {
        i({});
      }, a = new Lu(o);
      t.current = a.getForm();
    }
  return [t.current];
}
var fn = /* @__PURE__ */ A.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Iu = function(t) {
  var r = t.validateMessages, n = t.onFormChange, i = t.onFormFinish, o = t.children, a = A.useContext(fn), u = A.useRef({});
  return /* @__PURE__ */ L(fn.Provider, {
    value: j(j({}, a), {}, {
      validateMessages: j(j({}, a.validateMessages), r),
      triggerFormChange: function(f, l) {
        n && n(f, {
          changedFields: l,
          forms: u.current
        }), a.triggerFormChange(f, l);
      },
      triggerFormFinish: function(f, l) {
        i && i(f, {
          values: l,
          forms: u.current
        }), a.triggerFormFinish(f, l);
      },
      registerForm: function(f, l) {
        f && (u.current = j(j({}, u.current), {}, de({}, f, l))), a.registerForm(f, l);
      },
      unregisterForm: function(f) {
        var l = j({}, u.current);
        delete l[f], u.current = l, a.unregisterForm(f);
      }
    }),
    children: o
  });
}, Hu = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], Wu = function(t, r) {
  var n = t.name, i = t.initialValues, o = t.fields, a = t.form, u = t.preserve, s = t.children, f = t.component, l = f === void 0 ? "form" : f, d = t.validateMessages, v = t.validateTrigger, y = v === void 0 ? "onChange" : v, g = t.onValuesChange, _ = t.onFieldsChange, b = t.onFinish, m = t.onFinishFailed, O = Lt(t, Hu), C = A.useContext(fn), R = Ga(a), E = ee(R, 1), F = E[0], w = F.getInternalHooks(et), P = w.useSubscribe, T = w.setInitialValues, h = w.setCallbacks, p = w.setValidateMessages, S = w.setPreserve, x = w.destroyForm;
  A.useImperativeHandle(r, function() {
    return F;
  }), A.useEffect(function() {
    return C.registerForm(n, F), function() {
      C.unregisterForm(n);
    };
  }, [C, F, n]), p(j(j({}, C.validateMessages), d)), h({
    onValuesChange: g,
    onFieldsChange: function(X) {
      if (C.triggerFormChange(n, X), _) {
        for (var U = arguments.length, ce = new Array(U > 1 ? U - 1 : 0), B = 1; B < U; B++)
          ce[B - 1] = arguments[B];
        _.apply(void 0, [X].concat(ce));
      }
    },
    onFinish: function(X) {
      C.triggerFormFinish(n, X), b && b(X);
    },
    onFinishFailed: m
  }), S(u);
  var $ = A.useRef(null);
  T(i, !$.current), $.current || ($.current = !0), A.useEffect(
    function() {
      return x;
    },
    []
  );
  var N, k = typeof s == "function";
  if (k) {
    var z = F.getFieldsValue(!0);
    N = s(z, F);
  } else
    N = s;
  P(!k);
  var I = A.useRef();
  A.useEffect(function() {
    Tu(I.current || [], o || []) || F.setFields(o || []), I.current = o;
  }, [o, F]);
  var H = A.useMemo(function() {
    return j(j({}, F), {}, {
      validateTrigger: y
    });
  }, [F, y]), Y = /* @__PURE__ */ L(dt.Provider, {
    value: H,
    children: N
  });
  return l === !1 ? Y : /* @__PURE__ */ L(l, {
    ...O,
    onSubmit: function(X) {
      X.preventDefault(), X.stopPropagation(), F.submit();
    },
    onReset: function(X) {
      var U;
      X.preventDefault(), F.resetFields(), (U = O.onReset) === null || U === void 0 || U.call(O, X);
    },
    children: Y
  });
};
function hi(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
function zu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], i = n === void 0 ? [] : n, o = t[1], a = Mt(), u = ee(a, 2), s = u[0], f = u[1], l = _a(function() {
    return hi(s);
  }, [s]), d = Se(l);
  d.current = l;
  var v = us(dt), y = o || v, g = y && y._init;
  process.env.NODE_ENV !== "production" && Ae(t.length === 2 ? o ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var _ = be(i), b = Se(_);
  return b.current = _, je(
    function() {
      if (!!g) {
        var m = y.getFieldsValue, O = y.getInternalHooks, C = O(et), R = C.registerWatch, E = R(function(w) {
          var P = Ke(w, b.current), T = hi(P);
          d.current !== T && (d.current = T, f(P));
        }), F = Ke(m(), b.current);
        return f(F), E;
      }
    },
    [g]
  ), s;
}
var qu = /* @__PURE__ */ A.forwardRef(Wu), Wt = qu;
Wt.FormProvider = Iu;
Wt.Field = Ba;
Wt.List = Vu;
Wt.useForm = Ga;
Wt.useWatch = zu;
function Uu() {
}
var Xa = Uu;
process.env.NODE_ENV !== "production" && (Xa = function(t, r, n) {
  Ae(t, "[antd: ".concat(r, "] ").concat(n)), process.env.NODE_ENV === "test" && ms();
});
const Ka = Xa;
function zt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function or(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function gi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Bu(e, t) {
  var r = {
    animationend: gi("Animation", "AnimationEnd"),
    transitionend: gi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Yu = Bu(zt(), typeof window < "u" ? window : {}), Ja = {};
if (zt()) {
  var Gu = document.createElement("div");
  Ja = Gu.style;
}
var Yt = {};
function Qa(e) {
  if (Yt[e])
    return Yt[e];
  var t = Yu[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, i = 0; i < n; i += 1) {
      var o = r[i];
      if (Object.prototype.hasOwnProperty.call(t, o) && o in Ja)
        return Yt[e] = t[o], Yt[e];
    }
  return "";
}
var Za = Qa("animationend"), eo = Qa("transitionend"), Xu = !!(Za && eo), mi = Za || "animationend", yi = eo || "transitionend";
function bi(e, t) {
  if (!e)
    return null;
  if (Re(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
var ot = "none", Gt = "appear", Xt = "enter", Kt = "leave", wi = "none", Ue = "prepare", st = "start", ut = "active", Tn = "end";
function ft(e) {
  var t = A.useRef(!1), r = A.useState(e), n = ee(r, 2), i = n[0], o = n[1];
  A.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(u, s) {
    s && t.current || o(u);
  }
  return [i, a];
}
var to = function(t) {
  return +setTimeout(t, 16);
}, ro = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (to = function(t) {
  return window.requestAnimationFrame(t);
}, ro = function(t) {
  return window.cancelAnimationFrame(t);
});
var _i = 0, Sn = /* @__PURE__ */ new Map();
function no(e) {
  Sn.delete(e);
}
function Ye(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  _i += 1;
  var r = _i;
  function n(i) {
    if (i === 0)
      no(r), e();
    else {
      var o = to(function() {
        n(i - 1);
      });
      Sn.set(r, o);
    }
  }
  return n(t), r;
}
Ye.cancel = function(e) {
  var t = Sn.get(e);
  return no(t), ro(t);
};
const Ku = function() {
  var e = A.useRef(null);
  function t() {
    Ye.cancel(e.current);
  }
  function r(n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var o = Ye(function() {
      i <= 1 ? n({
        isCanceled: function() {
          return o !== e.current;
        }
      }) : r(n, i - 1);
    });
    e.current = o;
  }
  return A.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var io = zt() ? fs : je, Ei = [Ue, st, ut, Tn], ao = !1, Ju = !0;
function oo(e) {
  return e === ut || e === Tn;
}
const Qu = function(e, t) {
  var r = ft(wi), n = ee(r, 2), i = n[0], o = n[1], a = Ku(), u = ee(a, 2), s = u[0], f = u[1];
  function l() {
    o(Ue, !0);
  }
  return io(function() {
    if (i !== wi && i !== Tn) {
      var d = Ei.indexOf(i), v = Ei[d + 1], y = t(i);
      y === ao ? o(v, !0) : s(function(g) {
        function _() {
          g.isCanceled() || o(v, !0);
        }
        y === !0 ? _() : Promise.resolve(y).then(_);
      });
    }
  }, [e, i]), A.useEffect(function() {
    return function() {
      f();
    };
  }, []), [l, i];
}, Zu = function(e) {
  var t = Se(), r = Se(e);
  r.current = e;
  var n = A.useCallback(function(a) {
    r.current(a);
  }, []);
  function i(a) {
    a && (a.removeEventListener(yi, n), a.removeEventListener(mi, n));
  }
  function o(a) {
    t.current && t.current !== a && i(t.current), a && a !== t.current && (a.addEventListener(yi, n), a.addEventListener(mi, n), t.current = a);
  }
  return A.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [o, i];
};
function ef(e, t, r, n) {
  var i = n.motionEnter, o = i === void 0 ? !0 : i, a = n.motionAppear, u = a === void 0 ? !0 : a, s = n.motionLeave, f = s === void 0 ? !0 : s, l = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, y = n.onEnterPrepare, g = n.onLeavePrepare, _ = n.onAppearStart, b = n.onEnterStart, m = n.onLeaveStart, O = n.onAppearActive, C = n.onEnterActive, R = n.onLeaveActive, E = n.onAppearEnd, F = n.onEnterEnd, w = n.onLeaveEnd, P = n.onVisibleChanged, T = ft(), h = ee(T, 2), p = h[0], S = h[1], x = ft(ot), $ = ee(x, 2), N = $[0], k = $[1], z = ft(null), I = ee(z, 2), H = I[0], Y = I[1], te = Se(!1), X = Se(null);
  function U() {
    return r();
  }
  var ce = Se(!1);
  function B(K) {
    var ie = U();
    if (!(K && !K.deadline && K.target !== ie)) {
      var ge = ce.current, He;
      N === Gt && ge ? He = E == null ? void 0 : E(ie, K) : N === Xt && ge ? He = F == null ? void 0 : F(ie, K) : N === Kt && ge && (He = w == null ? void 0 : w(ie, K)), N !== ot && ge && He !== !1 && (k(ot, !0), Y(null, !0));
    }
  }
  var re = Zu(B), oe = ee(re, 1), ve = oe[0], he = A.useMemo(function() {
    var K, ie, ge;
    switch (N) {
      case Gt:
        return K = {}, de(K, Ue, v), de(K, st, _), de(K, ut, O), K;
      case Xt:
        return ie = {}, de(ie, Ue, y), de(ie, st, b), de(ie, ut, C), ie;
      case Kt:
        return ge = {}, de(ge, Ue, g), de(ge, st, m), de(ge, ut, R), ge;
      default:
        return {};
    }
  }, [N]), Ce = Qu(N, function(K) {
    if (K === Ue) {
      var ie = he[Ue];
      return ie ? ie(U()) : ao;
    }
    if (G in he) {
      var ge;
      Y(((ge = he[G]) === null || ge === void 0 ? void 0 : ge.call(he, U(), null)) || null);
    }
    return G === ut && (ve(U()), l > 0 && (clearTimeout(X.current), X.current = setTimeout(function() {
      B({
        deadline: !0
      });
    }, l))), Ju;
  }), Fe = ee(Ce, 2), D = Fe[0], G = Fe[1], Oe = oo(G);
  ce.current = Oe, io(function() {
    S(t);
    var K = te.current;
    if (te.current = !0, !!e) {
      var ie;
      !K && t && u && (ie = Gt), K && t && o && (ie = Xt), (K && !t && f || !K && d && !t && f) && (ie = Kt), ie && (k(ie), D());
    }
  }, [t]), je(function() {
    (N === Gt && !u || N === Xt && !o || N === Kt && !f) && k(ot);
  }, [u, o, f]), je(function() {
    return function() {
      te.current = !1, clearTimeout(X.current);
    };
  }, []);
  var we = A.useRef(!1);
  je(function() {
    p && (we.current = !0), p !== void 0 && N === ot && ((we.current || p) && (P == null || P(p)), we.current = !0);
  }, [p, N]);
  var _e = H;
  return he[Ue] && G === st && (_e = j({
    transition: "none"
  }, _e)), [N, G, _e, p != null ? p : t];
}
var tf = /* @__PURE__ */ function(e) {
  mr(r, e);
  var t = yr(r);
  function r() {
    return vt(this, r), t.apply(this, arguments);
  }
  return pt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(A.Component);
function rf(e) {
  var t = e;
  Re(e) === "object" && (t = e.transitionSupport);
  function r(i) {
    return !!(i.motionName && t);
  }
  var n = /* @__PURE__ */ A.forwardRef(function(i, o) {
    var a = i.visible, u = a === void 0 ? !0 : a, s = i.removeOnLeave, f = s === void 0 ? !0 : s, l = i.forceRender, d = i.children, v = i.motionName, y = i.leavedClassName, g = i.eventProps, _ = r(i), b = Se(), m = Se();
    function O() {
      try {
        return b.current instanceof HTMLElement ? b.current : fr(m.current);
      } catch {
        return null;
      }
    }
    var C = ef(_, u, O, i), R = ee(C, 4), E = R[0], F = R[1], w = R[2], P = R[3], T = A.useRef(P);
    P && (T.current = !0);
    var h = A.useCallback(function(z) {
      b.current = z, Ta(o, z);
    }, [o]), p, S = j(j({}, g), {}, {
      visible: u
    });
    if (!d)
      p = null;
    else if (E === ot || !r(i))
      P ? p = d(j({}, S), h) : !f && T.current ? p = d(j(j({}, S), {}, {
        className: y
      }), h) : l ? p = d(j(j({}, S), {}, {
        style: {
          display: "none"
        }
      }), h) : p = null;
    else {
      var x, $;
      F === Ue ? $ = "prepare" : oo(F) ? $ = "active" : F === st && ($ = "start"), p = d(j(j({}, S), {}, {
        className: Le(bi(v, E), (x = {}, de(x, bi(v, "".concat(E, "-").concat($)), $), de(x, v, typeof v == "string"), x)),
        style: w
      }), h);
    }
    if (/* @__PURE__ */ A.isValidElement(p) && Pn(p)) {
      var N = p, k = N.ref;
      k || (p = /* @__PURE__ */ A.cloneElement(p, {
        ref: h
      }));
    }
    return /* @__PURE__ */ L(tf, {
      ref: m,
      children: p
    });
  });
  return n.displayName = "CSSMotion", n;
}
const Rn = rf(Xu);
var nf = function(t, r) {
  return r || (t ? "ant-".concat(t) : "ant");
}, qt = /* @__PURE__ */ A.createContext({
  getPrefixCls: nf
});
qt.Consumer;
function Rt(e, t, r, n) {
  var i = Nt.unstable_batchedUpdates ? function(a) {
    Nt.unstable_batchedUpdates(r, a);
  } : r;
  return e.addEventListener && e.addEventListener(t, i, n), {
    remove: function() {
      e.removeEventListener && e.removeEventListener(t, i, n);
    }
  };
}
var xn = A.isValidElement;
function af(e) {
  return e && xn(e) && e.type === A.Fragment;
}
function of(e, t, r) {
  return xn(e) ? /* @__PURE__ */ A.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function Fn(e, t) {
  return of(e, e, t);
}
function Pi(e) {
  var t = A.useRef();
  t.current = e;
  var r = A.useCallback(function() {
    for (var n, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(o));
  }, []);
  return r;
}
var kt = process.env.NODE_ENV !== "test" && zt() ? A.useLayoutEffect : A.useEffect, sf = function(t, r) {
  var n = A.useRef(!0);
  kt(function() {
    if (!n.current)
      return t();
  }, r), kt(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, qe;
(function(e) {
  e[e.INNER = 0] = "INNER", e[e.PROP = 1] = "PROP";
})(qe || (qe = {}));
function Dr(e) {
  return e !== void 0;
}
function uf(e, t) {
  var r = t || {}, n = r.defaultValue, i = r.value, o = r.onChange, a = r.postState, u = ft(function() {
    var b = void 0, m;
    return Dr(i) ? (b = i, m = qe.PROP) : Dr(n) ? (b = typeof n == "function" ? n() : n, m = qe.PROP) : (b = typeof e == "function" ? e() : e, m = qe.INNER), [b, m, b];
  }), s = ee(u, 2), f = s[0], l = s[1], d = Dr(i) ? i : f[0], v = a ? a(d) : d;
  sf(function() {
    l(function(b) {
      var m = ee(b, 1), O = m[0];
      return [i, qe.PROP, O];
    });
  }, [i]);
  var y = A.useRef(), g = Pi(function(b, m) {
    l(function(O) {
      var C = ee(O, 3), R = C[0], E = C[1], F = C[2], w = typeof b == "function" ? b(R) : b;
      if (w === R)
        return O;
      var P = E === qe.INNER && y.current !== F ? F : R;
      return [w, qe.INNER, P];
    }, m);
  }), _ = Pi(o);
  return kt(function() {
    var b = ee(f, 3), m = b[0], O = b[1], C = b[2];
    m !== C && O === qe.INNER && (_(m, C), y.current = C);
  }, [f]), [v, g];
}
const ff = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var lf = /* @__PURE__ */ Ea(function(e, t) {
  var r = e.didUpdate, n = e.getContainer, i = e.children, o = Se(), a = Se();
  Pa(t, function() {
    return {};
  });
  var u = Se(!1);
  return !u.current && zt() && (a.current = n(), o.current = a.current.parentNode, u.current = !0), je(function() {
    r == null || r(e);
  }), je(function() {
    return a.current.parentNode === null && o.current !== null && o.current.appendChild(a.current), function() {
      var s, f;
      (s = a.current) === null || s === void 0 || (f = s.parentNode) === null || f === void 0 || f.removeChild(a.current);
    };
  }, []), a.current ? /* @__PURE__ */ Nt.createPortal(i, a.current) : null;
});
function cf(e, t, r) {
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function df(e, t, r) {
  var n = e[t] || {};
  return j(j({}, n), r);
}
function vf(e, t, r, n) {
  for (var i = r.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
    var u = o[a];
    if (cf(e[u].points, i, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function so(e) {
  var t = e.prefixCls, r = e.motion, n = e.animation, i = e.transitionName;
  return r || (n ? {
    motionName: "".concat(t, "-").concat(n)
  } : i ? {
    motionName: i
  } : null);
}
function pf(e) {
  var t = e.prefixCls, r = e.visible, n = e.zIndex, i = e.mask, o = e.maskMotion, a = e.maskAnimation, u = e.maskTransitionName;
  if (!i)
    return null;
  var s = {};
  return (o || u || a) && (s = j({
    motionAppear: !0
  }, so({
    motion: o,
    prefixCls: t,
    transitionName: u,
    animation: a
  }))), /* @__PURE__ */ L(Rn, {
    ...s,
    visible: r,
    removeOnLeave: !0,
    children: function(f) {
      var l = f.className;
      return /* @__PURE__ */ L("div", {
        style: {
          zIndex: n
        },
        className: Le("".concat(t, "-mask"), l)
      });
    }
  });
}
const hf = function(e) {
  if (!e)
    return !1;
  if (e instanceof HTMLElement && e.offsetParent)
    return !0;
  if (e instanceof SVGGraphicsElement && e.getBBox) {
    var t = e.getBBox(), r = t.width, n = t.height;
    if (r || n)
      return !0;
  }
  if (e instanceof HTMLElement && e.getBoundingClientRect) {
    var i = e.getBoundingClientRect(), o = i.width, a = i.height;
    if (o || a)
      return !0;
  }
  return !1;
};
function Ci(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ci(Object(r), !0).forEach(function(n) {
      gf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ci(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sr = function(t) {
    return typeof t;
  } : sr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sr(e);
}
function gf(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Ct, mf = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function dr() {
  if (Ct !== void 0)
    return Ct;
  Ct = "";
  var e = document.createElement("p").style, t = "Transform";
  for (var r in mf)
    r + t in e && (Ct = r);
  return Ct;
}
function uo() {
  return dr() ? "".concat(dr(), "TransitionProperty") : "transitionProperty";
}
function Er() {
  return dr() ? "".concat(dr(), "Transform") : "transform";
}
function Ti(e, t) {
  var r = uo();
  r && (e.style[r] = t, r !== "transitionProperty" && (e.style.transitionProperty = t));
}
function kr(e, t) {
  var r = Er();
  r && (e.style[r] = t, r !== "transform" && (e.style.transform = t));
}
function yf(e) {
  return e.style.transitionProperty || e.style[uo()];
}
function bf(e) {
  var t = window.getComputedStyle(e, null), r = t.getPropertyValue("transform") || t.getPropertyValue(Er());
  if (r && r !== "none") {
    var n = r.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(n[12] || n[4], 0),
      y: parseFloat(n[13] || n[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var wf = /matrix\((.*)\)/, _f = /matrix3d\((.*)\)/;
function Ef(e, t) {
  var r = window.getComputedStyle(e, null), n = r.getPropertyValue("transform") || r.getPropertyValue(Er());
  if (n && n !== "none") {
    var i, o = n.match(wf);
    if (o)
      o = o[1], i = o.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), i[4] = t.x, i[5] = t.y, kr(e, "matrix(".concat(i.join(","), ")"));
    else {
      var a = n.match(_f)[1];
      i = a.split(",").map(function(u) {
        return parseFloat(u, 10);
      }), i[12] = t.x, i[13] = t.y, kr(e, "matrix3d(".concat(i.join(","), ")"));
    }
  } else
    kr(e, "translateX(".concat(t.x, "px) translateY(").concat(t.y, "px) translateZ(0)"));
}
var Pf = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, Ut;
function Si(e) {
  var t = e.style.display;
  e.style.display = "none", e.offsetHeight, e.style.display = t;
}
function lt(e, t, r) {
  var n = r;
  if (sr(t) === "object") {
    for (var i in t)
      t.hasOwnProperty(i) && lt(e, i, t[i]);
    return;
  }
  if (typeof n < "u") {
    typeof n == "number" && (n = "".concat(n, "px")), e.style[t] = n;
    return;
  }
  return Ut(e, t);
}
function Cf(e) {
  var t, r, n, i = e.ownerDocument, o = i.body, a = i && i.documentElement;
  return t = e.getBoundingClientRect(), r = Math.floor(t.left), n = Math.floor(t.top), r -= a.clientLeft || o.clientLeft || 0, n -= a.clientTop || o.clientTop || 0, {
    left: r,
    top: n
  };
}
function fo(e, t) {
  var r = e["page".concat(t ? "Y" : "X", "Offset")], n = "scroll".concat(t ? "Top" : "Left");
  if (typeof r != "number") {
    var i = e.document;
    r = i.documentElement[n], typeof r != "number" && (r = i.body[n]);
  }
  return r;
}
function lo(e) {
  return fo(e);
}
function co(e) {
  return fo(e, !0);
}
function jt(e) {
  var t = Cf(e), r = e.ownerDocument, n = r.defaultView || r.parentWindow;
  return t.left += lo(n), t.top += co(n), t;
}
function An(e) {
  return e != null && e == e.window;
}
function vo(e) {
  return An(e) ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
}
function Of(e, t, r) {
  var n = r, i = "", o = vo(e);
  return n = n || o.defaultView.getComputedStyle(e, null), n && (i = n.getPropertyValue(t) || n[t]), i;
}
var Tf = new RegExp("^(".concat(Pf, ")(?!px)[a-z%]+$"), "i"), Sf = /^(top|right|bottom|left)$/, jr = "currentStyle", Lr = "runtimeStyle", Je = "left", Rf = "px";
function xf(e, t) {
  var r = e[jr] && e[jr][t];
  if (Tf.test(r) && !Sf.test(t)) {
    var n = e.style, i = n[Je], o = e[Lr][Je];
    e[Lr][Je] = e[jr][Je], n[Je] = t === "fontSize" ? "1em" : r || 0, r = n.pixelLeft + Rf, n[Je] = i, e[Lr][Je] = o;
  }
  return r === "" ? "auto" : r;
}
typeof window < "u" && (Ut = window.getComputedStyle ? Of : xf);
function Jt(e, t) {
  return e === "left" ? t.useCssRight ? "right" : e : t.useCssBottom ? "bottom" : e;
}
function Ri(e) {
  if (e === "left")
    return "right";
  if (e === "right")
    return "left";
  if (e === "top")
    return "bottom";
  if (e === "bottom")
    return "top";
}
function xi(e, t, r) {
  lt(e, "position") === "static" && (e.style.position = "relative");
  var n = -999, i = -999, o = Jt("left", r), a = Jt("top", r), u = Ri(o), s = Ri(a);
  o !== "left" && (n = 999), a !== "top" && (i = 999);
  var f = "", l = jt(e);
  ("left" in t || "top" in t) && (f = yf(e) || "", Ti(e, "none")), "left" in t && (e.style[u] = "", e.style[o] = "".concat(n, "px")), "top" in t && (e.style[s] = "", e.style[a] = "".concat(i, "px")), Si(e);
  var d = jt(e), v = {};
  for (var y in t)
    if (t.hasOwnProperty(y)) {
      var g = Jt(y, r), _ = y === "left" ? n : i, b = l[y] - d[y];
      g === y ? v[g] = _ + b : v[g] = _ - b;
    }
  lt(e, v), Si(e), ("left" in t || "top" in t) && Ti(e, f);
  var m = {};
  for (var O in t)
    if (t.hasOwnProperty(O)) {
      var C = Jt(O, r), R = t[O] - l[O];
      O === C ? m[C] = v[C] + R : m[C] = v[C] - R;
    }
  lt(e, m);
}
function Ff(e, t) {
  var r = jt(e), n = bf(e), i = {
    x: n.x,
    y: n.y
  };
  "left" in t && (i.x = n.x + t.left - r.left), "top" in t && (i.y = n.y + t.top - r.top), Ef(e, i);
}
function Af(e, t, r) {
  if (r.ignoreShake) {
    var n = jt(e), i = n.left.toFixed(0), o = n.top.toFixed(0), a = t.left.toFixed(0), u = t.top.toFixed(0);
    if (i === a && o === u)
      return;
  }
  r.useCssRight || r.useCssBottom ? xi(e, t, r) : r.useCssTransform && Er() in document.body.style ? Ff(e, t) : xi(e, t, r);
}
function $n(e, t) {
  for (var r = 0; r < e.length; r++)
    t(e[r]);
}
function po(e) {
  return Ut(e, "boxSizing") === "border-box";
}
var $f = ["margin", "border", "padding"], ln = -1, Mf = 2, cn = 1, Nf = 0;
function Vf(e, t, r) {
  var n = {}, i = e.style, o;
  for (o in t)
    t.hasOwnProperty(o) && (n[o] = i[o], i[o] = t[o]);
  r.call(e);
  for (o in t)
    t.hasOwnProperty(o) && (i[o] = n[o]);
}
function xt(e, t, r) {
  var n = 0, i, o, a;
  for (o = 0; o < t.length; o++)
    if (i = t[o], i)
      for (a = 0; a < r.length; a++) {
        var u = void 0;
        i === "border" ? u = "".concat(i).concat(r[a], "Width") : u = i + r[a], n += parseFloat(Ut(e, u)) || 0;
      }
  return n;
}
var We = {
  getParent: function(t) {
    var r = t;
    do
      r.nodeType === 11 && r.host ? r = r.host : r = r.parentNode;
    while (r && r.nodeType !== 1 && r.nodeType !== 9);
    return r;
  }
};
$n(["Width", "Height"], function(e) {
  We["doc".concat(e)] = function(t) {
    var r = t.document;
    return Math.max(
      r.documentElement["scroll".concat(e)],
      r.body["scroll".concat(e)],
      We["viewport".concat(e)](r)
    );
  }, We["viewport".concat(e)] = function(t) {
    var r = "client".concat(e), n = t.document, i = n.body, o = n.documentElement, a = o[r];
    return n.compatMode === "CSS1Compat" && a || i && i[r] || a;
  };
});
function Fi(e, t, r) {
  var n = r;
  if (An(e))
    return t === "width" ? We.viewportWidth(e) : We.viewportHeight(e);
  if (e.nodeType === 9)
    return t === "width" ? We.docWidth(e) : We.docHeight(e);
  var i = t === "width" ? ["Left", "Right"] : ["Top", "Bottom"], o = Math.floor(t === "width" ? e.getBoundingClientRect().width : e.getBoundingClientRect().height), a = po(e), u = 0;
  (o == null || o <= 0) && (o = void 0, u = Ut(e, t), (u == null || Number(u) < 0) && (u = e.style[t] || 0), u = parseFloat(u) || 0), n === void 0 && (n = a ? cn : ln);
  var s = o !== void 0 || a, f = o || u;
  return n === ln ? s ? f - xt(e, ["border", "padding"], i) : u : s ? n === cn ? f : f + (n === Mf ? -xt(e, ["border"], i) : xt(e, ["margin"], i)) : u + xt(e, $f.slice(n), i);
}
var Df = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function Ai() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, i = t[0];
  return i.offsetWidth !== 0 ? n = Fi.apply(void 0, t) : Vf(i, Df, function() {
    n = Fi.apply(void 0, t);
  }), n;
}
$n(["width", "height"], function(e) {
  var t = e.charAt(0).toUpperCase() + e.slice(1);
  We["outer".concat(t)] = function(n, i) {
    return n && Ai(n, e, i ? Nf : cn);
  };
  var r = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  We[e] = function(n, i) {
    var o = i;
    if (o !== void 0) {
      if (n) {
        var a = po(n);
        return a && (o += xt(n, ["padding", "border"], r)), lt(n, e, o);
      }
      return;
    }
    return n && Ai(n, e, ln);
  };
});
function ho(e, t) {
  for (var r in t)
    t.hasOwnProperty(r) && (e[r] = t[r]);
  return e;
}
var q = {
  getWindow: function(t) {
    if (t && t.document && t.setTimeout)
      return t;
    var r = t.ownerDocument || t;
    return r.defaultView || r.parentWindow;
  },
  getDocument: vo,
  offset: function(t, r, n) {
    if (typeof r < "u")
      Af(t, r, n || {});
    else
      return jt(t);
  },
  isWindow: An,
  each: $n,
  css: lt,
  clone: function(t) {
    var r, n = {};
    for (r in t)
      t.hasOwnProperty(r) && (n[r] = t[r]);
    var i = t.overflow;
    if (i)
      for (r in t)
        t.hasOwnProperty(r) && (n.overflow[r] = t.overflow[r]);
    return n;
  },
  mix: ho,
  getWindowScrollLeft: function(t) {
    return lo(t);
  },
  getWindowScrollTop: function(t) {
    return co(t);
  },
  merge: function() {
    for (var t = {}, r = 0; r < arguments.length; r++)
      q.mix(t, r < 0 || arguments.length <= r ? void 0 : arguments[r]);
    return t;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
ho(q, We);
var Ir = q.getParent;
function dn(e) {
  if (q.isWindow(e) || e.nodeType === 9)
    return null;
  var t = q.getDocument(e), r = t.body, n, i = q.css(e, "position"), o = i === "fixed" || i === "absolute";
  if (!o)
    return e.nodeName.toLowerCase() === "html" ? null : Ir(e);
  for (n = Ir(e); n && n !== r && n.nodeType !== 9; n = Ir(n))
    if (i = q.css(n, "position"), i !== "static")
      return n;
  return null;
}
var $i = q.getParent;
function kf(e) {
  if (q.isWindow(e) || e.nodeType === 9)
    return !1;
  var t = q.getDocument(e), r = t.body, n = null;
  for (n = $i(e); n && n !== r && n !== t; n = $i(n)) {
    var i = q.css(n, "position");
    if (i === "fixed")
      return !0;
  }
  return !1;
}
function Mn(e, t) {
  for (var r = {
    left: 0,
    right: 1 / 0,
    top: 0,
    bottom: 1 / 0
  }, n = dn(e), i = q.getDocument(e), o = i.defaultView || i.parentWindow, a = i.body, u = i.documentElement; n; ) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || n.clientWidth !== 0) && n !== a && n !== u && q.css(n, "overflow") !== "visible") {
      var s = q.offset(n);
      s.left += n.clientLeft, s.top += n.clientTop, r.top = Math.max(r.top, s.top), r.right = Math.min(
        r.right,
        s.left + n.clientWidth
      ), r.bottom = Math.min(r.bottom, s.top + n.clientHeight), r.left = Math.max(r.left, s.left);
    } else if (n === a || n === u)
      break;
    n = dn(n);
  }
  var f = null;
  if (!q.isWindow(e) && e.nodeType !== 9) {
    f = e.style.position;
    var l = q.css(e, "position");
    l === "absolute" && (e.style.position = "fixed");
  }
  var d = q.getWindowScrollLeft(o), v = q.getWindowScrollTop(o), y = q.viewportWidth(o), g = q.viewportHeight(o), _ = u.scrollWidth, b = u.scrollHeight, m = window.getComputedStyle(a);
  if (m.overflowX === "hidden" && (_ = o.innerWidth), m.overflowY === "hidden" && (b = o.innerHeight), e.style && (e.style.position = f), t || kf(e))
    r.left = Math.max(r.left, d), r.top = Math.max(r.top, v), r.right = Math.min(r.right, d + y), r.bottom = Math.min(r.bottom, v + g);
  else {
    var O = Math.max(_, d + y);
    r.right = Math.min(r.right, O);
    var C = Math.max(b, v + g);
    r.bottom = Math.min(r.bottom, C);
  }
  return r.top >= 0 && r.left >= 0 && r.bottom > r.top && r.right > r.left ? r : null;
}
function jf(e, t, r, n) {
  var i = q.clone(e), o = {
    width: t.width,
    height: t.height
  };
  return n.adjustX && i.left < r.left && (i.left = r.left), n.resizeWidth && i.left >= r.left && i.left + o.width > r.right && (o.width -= i.left + o.width - r.right), n.adjustX && i.left + o.width > r.right && (i.left = Math.max(r.right - o.width, r.left)), n.adjustY && i.top < r.top && (i.top = r.top), n.resizeHeight && i.top >= r.top && i.top + o.height > r.bottom && (o.height -= i.top + o.height - r.bottom), n.adjustY && i.top + o.height > r.bottom && (i.top = Math.max(r.bottom - o.height, r.top)), q.mix(i, o);
}
function Nn(e) {
  var t, r, n;
  if (!q.isWindow(e) && e.nodeType !== 9)
    t = q.offset(e), r = q.outerWidth(e), n = q.outerHeight(e);
  else {
    var i = q.getWindow(e);
    t = {
      left: q.getWindowScrollLeft(i),
      top: q.getWindowScrollTop(i)
    }, r = q.viewportWidth(i), n = q.viewportHeight(i);
  }
  return t.width = r, t.height = n, t;
}
function Mi(e, t) {
  var r = t.charAt(0), n = t.charAt(1), i = e.width, o = e.height, a = e.left, u = e.top;
  return r === "c" ? u += o / 2 : r === "b" && (u += o), n === "c" ? a += i / 2 : n === "r" && (a += i), {
    left: a,
    top: u
  };
}
function Qt(e, t, r, n, i) {
  var o = Mi(t, r[1]), a = Mi(e, r[0]), u = [a.left - o.left, a.top - o.top];
  return {
    left: Math.round(e.left - u[0] + n[0] - i[0]),
    top: Math.round(e.top - u[1] + n[1] - i[1])
  };
}
function Ni(e, t, r) {
  return e.left < r.left || e.left + t.width > r.right;
}
function Vi(e, t, r) {
  return e.top < r.top || e.top + t.height > r.bottom;
}
function Lf(e, t, r) {
  return e.left > r.right || e.left + t.width < r.left;
}
function If(e, t, r) {
  return e.top > r.bottom || e.top + t.height < r.top;
}
function Zt(e, t, r) {
  var n = [];
  return q.each(e, function(i) {
    n.push(i.replace(t, function(o) {
      return r[o];
    }));
  }), n;
}
function er(e, t) {
  return e[t] = -e[t], e;
}
function Di(e, t) {
  var r;
  return /%$/.test(e) ? r = parseInt(e.substring(0, e.length - 1), 10) / 100 * t : r = parseInt(e, 10), r || 0;
}
function ki(e, t) {
  e[0] = Di(e[0], t.width), e[1] = Di(e[1], t.height);
}
function go(e, t, r, n) {
  var i = r.points, o = r.offset || [0, 0], a = r.targetOffset || [0, 0], u = r.overflow, s = r.source || e;
  o = [].concat(o), a = [].concat(a), u = u || {};
  var f = {}, l = 0, d = !!(u && u.alwaysByViewport), v = Mn(s, d), y = Nn(s);
  ki(o, y), ki(a, t);
  var g = Qt(y, t, i, o, a), _ = q.merge(y, g);
  if (v && (u.adjustX || u.adjustY) && n) {
    if (u.adjustX && Ni(g, y, v)) {
      var b = Zt(i, /[lr]/gi, {
        l: "r",
        r: "l"
      }), m = er(o, 0), O = er(a, 0), C = Qt(y, t, b, m, O);
      Lf(C, y, v) || (l = 1, i = b, o = m, a = O);
    }
    if (u.adjustY && Vi(g, y, v)) {
      var R = Zt(i, /[tb]/gi, {
        t: "b",
        b: "t"
      }), E = er(o, 1), F = er(a, 1), w = Qt(y, t, R, E, F);
      If(w, y, v) || (l = 1, i = R, o = E, a = F);
    }
    l && (g = Qt(y, t, i, o, a), q.mix(_, g));
    var P = Ni(g, y, v), T = Vi(g, y, v);
    if (P || T) {
      var h = i;
      P && (h = Zt(i, /[lr]/gi, {
        l: "r",
        r: "l"
      })), T && (h = Zt(i, /[tb]/gi, {
        t: "b",
        b: "t"
      })), i = h, o = r.offset || [0, 0], a = r.targetOffset || [0, 0];
    }
    f.adjustX = u.adjustX && P, f.adjustY = u.adjustY && T, (f.adjustX || f.adjustY) && (_ = jf(g, y, v, f));
  }
  return _.width !== y.width && q.css(s, "width", q.width(s) + _.width - y.width), _.height !== y.height && q.css(s, "height", q.height(s) + _.height - y.height), q.offset(s, {
    left: _.left,
    top: _.top
  }, {
    useCssRight: r.useCssRight,
    useCssBottom: r.useCssBottom,
    useCssTransform: r.useCssTransform,
    ignoreShake: r.ignoreShake
  }), {
    points: i,
    offset: o,
    targetOffset: a,
    overflow: f
  };
}
function Hf(e, t) {
  var r = Mn(e, t), n = Nn(e);
  return !r || n.left + n.width <= r.left || n.top + n.height <= r.top || n.left >= r.right || n.top >= r.bottom;
}
function Vn(e, t, r) {
  var n = r.target || t, i = Nn(n), o = !Hf(n, r.overflow && r.overflow.alwaysByViewport);
  return go(e, i, r, o);
}
Vn.__getOffsetParent = dn;
Vn.__getVisibleRectForElement = Mn;
function Wf(e, t, r) {
  var n, i, o = q.getDocument(e), a = o.defaultView || o.parentWindow, u = q.getWindowScrollLeft(a), s = q.getWindowScrollTop(a), f = q.viewportWidth(a), l = q.viewportHeight(a);
  "pageX" in t ? n = t.pageX : n = u + t.clientX, "pageY" in t ? i = t.pageY : i = s + t.clientY;
  var d = {
    left: n,
    top: i,
    width: 0,
    height: 0
  }, v = n >= 0 && n <= u + f && i >= 0 && i <= s + l, y = [r.points[0], "cc"];
  return go(e, d, Oi(Oi({}, r), {}, {
    points: y
  }), v);
}
function zf() {
  this.__data__ = [], this.size = 0;
}
var qf = zf;
function Uf(e, t) {
  return e === t || e !== e && t !== t;
}
var mo = Uf, Bf = mo;
function Yf(e, t) {
  for (var r = e.length; r--; )
    if (Bf(e[r][0], t))
      return r;
  return -1;
}
var Pr = Yf, Gf = Pr, Xf = Array.prototype, Kf = Xf.splice;
function Jf(e) {
  var t = this.__data__, r = Gf(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Kf.call(t, r, 1), --this.size, !0;
}
var Qf = Jf, Zf = Pr;
function el(e) {
  var t = this.__data__, r = Zf(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var tl = el, rl = Pr;
function nl(e) {
  return rl(this.__data__, e) > -1;
}
var il = nl, al = Pr;
function ol(e, t) {
  var r = this.__data__, n = al(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var sl = ol, ul = qf, fl = Qf, ll = tl, cl = il, dl = sl;
function ht(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ht.prototype.clear = ul;
ht.prototype.delete = fl;
ht.prototype.get = ll;
ht.prototype.has = cl;
ht.prototype.set = dl;
var Cr = ht, vl = Cr;
function pl() {
  this.__data__ = new vl(), this.size = 0;
}
var hl = pl;
function gl(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var ml = gl;
function yl(e) {
  return this.__data__.get(e);
}
var bl = yl;
function wl(e) {
  return this.__data__.has(e);
}
var _l = wl, El = typeof Tt == "object" && Tt && Tt.Object === Object && Tt, yo = El, Pl = yo, Cl = typeof self == "object" && self && self.Object === Object && self, Ol = Pl || Cl || Function("return this")(), Ge = Ol, Tl = Ge, Sl = Tl.Symbol, Dn = Sl, ji = Dn, bo = Object.prototype, Rl = bo.hasOwnProperty, xl = bo.toString, Ot = ji ? ji.toStringTag : void 0;
function Fl(e) {
  var t = Rl.call(e, Ot), r = e[Ot];
  try {
    e[Ot] = void 0;
    var n = !0;
  } catch {
  }
  var i = xl.call(e);
  return n && (t ? e[Ot] = r : delete e[Ot]), i;
}
var Al = Fl, $l = Object.prototype, Ml = $l.toString;
function Nl(e) {
  return Ml.call(e);
}
var Vl = Nl, Li = Dn, Dl = Al, kl = Vl, jl = "[object Null]", Ll = "[object Undefined]", Ii = Li ? Li.toStringTag : void 0;
function Il(e) {
  return e == null ? e === void 0 ? Ll : jl : Ii && Ii in Object(e) ? Dl(e) : kl(e);
}
var Or = Il;
function Hl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var wo = Hl, Wl = Or, zl = wo, ql = "[object AsyncFunction]", Ul = "[object Function]", Bl = "[object GeneratorFunction]", Yl = "[object Proxy]";
function Gl(e) {
  if (!zl(e))
    return !1;
  var t = Wl(e);
  return t == Ul || t == Bl || t == ql || t == Yl;
}
var _o = Gl, Xl = Ge, Kl = Xl["__core-js_shared__"], Jl = Kl, Hr = Jl, Hi = function() {
  var e = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ql(e) {
  return !!Hi && Hi in e;
}
var Zl = Ql, ec = Function.prototype, tc = ec.toString;
function rc(e) {
  if (e != null) {
    try {
      return tc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Eo = rc, nc = _o, ic = Zl, ac = wo, oc = Eo, sc = /[\\^$.*+?()[\]{}|]/g, uc = /^\[object .+?Constructor\]$/, fc = Function.prototype, lc = Object.prototype, cc = fc.toString, dc = lc.hasOwnProperty, vc = RegExp(
  "^" + cc.call(dc).replace(sc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pc(e) {
  if (!ac(e) || ic(e))
    return !1;
  var t = nc(e) ? vc : uc;
  return t.test(oc(e));
}
var hc = pc;
function gc(e, t) {
  return e == null ? void 0 : e[t];
}
var mc = gc, yc = hc, bc = mc;
function wc(e, t) {
  var r = bc(e, t);
  return yc(r) ? r : void 0;
}
var gt = wc, _c = gt, Ec = Ge, Pc = _c(Ec, "Map"), kn = Pc, Cc = gt, Oc = Cc(Object, "create"), Tr = Oc, Wi = Tr;
function Tc() {
  this.__data__ = Wi ? Wi(null) : {}, this.size = 0;
}
var Sc = Tc;
function Rc(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var xc = Rc, Fc = Tr, Ac = "__lodash_hash_undefined__", $c = Object.prototype, Mc = $c.hasOwnProperty;
function Nc(e) {
  var t = this.__data__;
  if (Fc) {
    var r = t[e];
    return r === Ac ? void 0 : r;
  }
  return Mc.call(t, e) ? t[e] : void 0;
}
var Vc = Nc, Dc = Tr, kc = Object.prototype, jc = kc.hasOwnProperty;
function Lc(e) {
  var t = this.__data__;
  return Dc ? t[e] !== void 0 : jc.call(t, e);
}
var Ic = Lc, Hc = Tr, Wc = "__lodash_hash_undefined__";
function zc(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Hc && t === void 0 ? Wc : t, this;
}
var qc = zc, Uc = Sc, Bc = xc, Yc = Vc, Gc = Ic, Xc = qc;
function mt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
mt.prototype.clear = Uc;
mt.prototype.delete = Bc;
mt.prototype.get = Yc;
mt.prototype.has = Gc;
mt.prototype.set = Xc;
var Kc = mt, zi = Kc, Jc = Cr, Qc = kn;
function Zc() {
  this.size = 0, this.__data__ = {
    hash: new zi(),
    map: new (Qc || Jc)(),
    string: new zi()
  };
}
var ed = Zc;
function td(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var rd = td, nd = rd;
function id(e, t) {
  var r = e.__data__;
  return nd(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var Sr = id, ad = Sr;
function od(e) {
  var t = ad(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var sd = od, ud = Sr;
function fd(e) {
  return ud(this, e).get(e);
}
var ld = fd, cd = Sr;
function dd(e) {
  return cd(this, e).has(e);
}
var vd = dd, pd = Sr;
function hd(e, t) {
  var r = pd(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var gd = hd, md = ed, yd = sd, bd = ld, wd = vd, _d = gd;
function yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
yt.prototype.clear = md;
yt.prototype.delete = yd;
yt.prototype.get = bd;
yt.prototype.has = wd;
yt.prototype.set = _d;
var Po = yt, Ed = Cr, Pd = kn, Cd = Po, Od = 200;
function Td(e, t) {
  var r = this.__data__;
  if (r instanceof Ed) {
    var n = r.__data__;
    if (!Pd || n.length < Od - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Cd(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Sd = Td, Rd = Cr, xd = hl, Fd = ml, Ad = bl, $d = _l, Md = Sd;
function bt(e) {
  var t = this.__data__ = new Rd(e);
  this.size = t.size;
}
bt.prototype.clear = xd;
bt.prototype.delete = Fd;
bt.prototype.get = Ad;
bt.prototype.has = $d;
bt.prototype.set = Md;
var Nd = bt, Vd = "__lodash_hash_undefined__";
function Dd(e) {
  return this.__data__.set(e, Vd), this;
}
var kd = Dd;
function jd(e) {
  return this.__data__.has(e);
}
var Ld = jd, Id = Po, Hd = kd, Wd = Ld;
function vr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Id(); ++t < r; )
    this.add(e[t]);
}
vr.prototype.add = vr.prototype.push = Hd;
vr.prototype.has = Wd;
var zd = vr;
function qd(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Ud = qd;
function Bd(e, t) {
  return e.has(t);
}
var Yd = Bd, Gd = zd, Xd = Ud, Kd = Yd, Jd = 1, Qd = 2;
function Zd(e, t, r, n, i, o) {
  var a = r & Jd, u = e.length, s = t.length;
  if (u != s && !(a && s > u))
    return !1;
  var f = o.get(e), l = o.get(t);
  if (f && l)
    return f == t && l == e;
  var d = -1, v = !0, y = r & Qd ? new Gd() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < u; ) {
    var g = e[d], _ = t[d];
    if (n)
      var b = a ? n(_, g, d, t, e, o) : n(g, _, d, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!Xd(t, function(m, O) {
        if (!Kd(y, O) && (g === m || i(g, m, r, n, o)))
          return y.push(O);
      })) {
        v = !1;
        break;
      }
    } else if (!(g === _ || i(g, _, r, n, o))) {
      v = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), v;
}
var Co = Zd, ev = Ge, tv = ev.Uint8Array, rv = tv;
function nv(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var iv = nv;
function av(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ov = av, qi = Dn, Ui = rv, sv = mo, uv = Co, fv = iv, lv = ov, cv = 1, dv = 2, vv = "[object Boolean]", pv = "[object Date]", hv = "[object Error]", gv = "[object Map]", mv = "[object Number]", yv = "[object RegExp]", bv = "[object Set]", wv = "[object String]", _v = "[object Symbol]", Ev = "[object ArrayBuffer]", Pv = "[object DataView]", Bi = qi ? qi.prototype : void 0, Wr = Bi ? Bi.valueOf : void 0;
function Cv(e, t, r, n, i, o, a) {
  switch (r) {
    case Pv:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ev:
      return !(e.byteLength != t.byteLength || !o(new Ui(e), new Ui(t)));
    case vv:
    case pv:
    case mv:
      return sv(+e, +t);
    case hv:
      return e.name == t.name && e.message == t.message;
    case yv:
    case wv:
      return e == t + "";
    case gv:
      var u = fv;
    case bv:
      var s = n & cv;
      if (u || (u = lv), e.size != t.size && !s)
        return !1;
      var f = a.get(e);
      if (f)
        return f == t;
      n |= dv, a.set(e, t);
      var l = uv(u(e), u(t), n, i, o, a);
      return a.delete(e), l;
    case _v:
      if (Wr)
        return Wr.call(e) == Wr.call(t);
  }
  return !1;
}
var Ov = Cv;
function Tv(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var Sv = Tv, Rv = Array.isArray, jn = Rv, xv = Sv, Fv = jn;
function Av(e, t, r) {
  var n = t(e);
  return Fv(e) ? n : xv(n, r(e));
}
var $v = Av;
function Mv(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
    var a = e[r];
    t(a, r, e) && (o[i++] = a);
  }
  return o;
}
var Nv = Mv;
function Vv() {
  return [];
}
var Dv = Vv, kv = Nv, jv = Dv, Lv = Object.prototype, Iv = Lv.propertyIsEnumerable, Yi = Object.getOwnPropertySymbols, Hv = Yi ? function(e) {
  return e == null ? [] : (e = Object(e), kv(Yi(e), function(t) {
    return Iv.call(e, t);
  }));
} : jv, Wv = Hv;
function zv(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var qv = zv;
function Uv(e) {
  return e != null && typeof e == "object";
}
var Rr = Uv, Bv = Or, Yv = Rr, Gv = "[object Arguments]";
function Xv(e) {
  return Yv(e) && Bv(e) == Gv;
}
var Kv = Xv, Gi = Kv, Jv = Rr, Oo = Object.prototype, Qv = Oo.hasOwnProperty, Zv = Oo.propertyIsEnumerable, ep = Gi(function() {
  return arguments;
}()) ? Gi : function(e) {
  return Jv(e) && Qv.call(e, "callee") && !Zv.call(e, "callee");
}, tp = ep, pr = { exports: {} };
function rp() {
  return !1;
}
var np = rp;
(function(e, t) {
  var r = Ge, n = np, i = t && !t.nodeType && t, o = i && !0 && e && !e.nodeType && e, a = o && o.exports === i, u = a ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, f = s || n;
  e.exports = f;
})(pr, pr.exports);
var ip = 9007199254740991, ap = /^(?:0|[1-9]\d*)$/;
function op(e, t) {
  var r = typeof e;
  return t = t == null ? ip : t, !!t && (r == "number" || r != "symbol" && ap.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var sp = op, up = 9007199254740991;
function fp(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= up;
}
var To = fp, lp = Or, cp = To, dp = Rr, vp = "[object Arguments]", pp = "[object Array]", hp = "[object Boolean]", gp = "[object Date]", mp = "[object Error]", yp = "[object Function]", bp = "[object Map]", wp = "[object Number]", _p = "[object Object]", Ep = "[object RegExp]", Pp = "[object Set]", Cp = "[object String]", Op = "[object WeakMap]", Tp = "[object ArrayBuffer]", Sp = "[object DataView]", Rp = "[object Float32Array]", xp = "[object Float64Array]", Fp = "[object Int8Array]", Ap = "[object Int16Array]", $p = "[object Int32Array]", Mp = "[object Uint8Array]", Np = "[object Uint8ClampedArray]", Vp = "[object Uint16Array]", Dp = "[object Uint32Array]", pe = {};
pe[Rp] = pe[xp] = pe[Fp] = pe[Ap] = pe[$p] = pe[Mp] = pe[Np] = pe[Vp] = pe[Dp] = !0;
pe[vp] = pe[pp] = pe[Tp] = pe[hp] = pe[Sp] = pe[gp] = pe[mp] = pe[yp] = pe[bp] = pe[wp] = pe[_p] = pe[Ep] = pe[Pp] = pe[Cp] = pe[Op] = !1;
function kp(e) {
  return dp(e) && cp(e.length) && !!pe[lp(e)];
}
var jp = kp;
function Lp(e) {
  return function(t) {
    return e(t);
  };
}
var Ip = Lp, vn = { exports: {} };
(function(e, t) {
  var r = yo, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, o = i && i.exports === n, a = o && r.process, u = function() {
    try {
      var s = i && i.require && i.require("util").types;
      return s || a && a.binding && a.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})(vn, vn.exports);
var Hp = jp, Wp = Ip, Xi = vn.exports, Ki = Xi && Xi.isTypedArray, zp = Ki ? Wp(Ki) : Hp, So = zp, qp = qv, Up = tp, Bp = jn, Yp = pr.exports, Gp = sp, Xp = So, Kp = Object.prototype, Jp = Kp.hasOwnProperty;
function Qp(e, t) {
  var r = Bp(e), n = !r && Up(e), i = !r && !n && Yp(e), o = !r && !n && !i && Xp(e), a = r || n || i || o, u = a ? qp(e.length, String) : [], s = u.length;
  for (var f in e)
    (t || Jp.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || Gp(f, s))) && u.push(f);
  return u;
}
var Zp = Qp, eh = Object.prototype;
function th(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || eh;
  return e === r;
}
var rh = th;
function nh(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ih = nh, ah = ih, oh = ah(Object.keys, Object), sh = oh, uh = rh, fh = sh, lh = Object.prototype, ch = lh.hasOwnProperty;
function dh(e) {
  if (!uh(e))
    return fh(e);
  var t = [];
  for (var r in Object(e))
    ch.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var vh = dh, ph = _o, hh = To;
function gh(e) {
  return e != null && hh(e.length) && !ph(e);
}
var mh = gh, yh = Zp, bh = vh, wh = mh;
function _h(e) {
  return wh(e) ? yh(e) : bh(e);
}
var Eh = _h, Ph = $v, Ch = Wv, Oh = Eh;
function Th(e) {
  return Ph(e, Oh, Ch);
}
var Sh = Th, Ji = Sh, Rh = 1, xh = Object.prototype, Fh = xh.hasOwnProperty;
function Ah(e, t, r, n, i, o) {
  var a = r & Rh, u = Ji(e), s = u.length, f = Ji(t), l = f.length;
  if (s != l && !a)
    return !1;
  for (var d = s; d--; ) {
    var v = u[d];
    if (!(a ? v in t : Fh.call(t, v)))
      return !1;
  }
  var y = o.get(e), g = o.get(t);
  if (y && g)
    return y == t && g == e;
  var _ = !0;
  o.set(e, t), o.set(t, e);
  for (var b = a; ++d < s; ) {
    v = u[d];
    var m = e[v], O = t[v];
    if (n)
      var C = a ? n(O, m, v, t, e, o) : n(m, O, v, e, t, o);
    if (!(C === void 0 ? m === O || i(m, O, r, n, o) : C)) {
      _ = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (_ && !b) {
    var R = e.constructor, E = t.constructor;
    R != E && "constructor" in e && "constructor" in t && !(typeof R == "function" && R instanceof R && typeof E == "function" && E instanceof E) && (_ = !1);
  }
  return o.delete(e), o.delete(t), _;
}
var $h = Ah, Mh = gt, Nh = Ge, Vh = Mh(Nh, "DataView"), Dh = Vh, kh = gt, jh = Ge, Lh = kh(jh, "Promise"), Ih = Lh, Hh = gt, Wh = Ge, zh = Hh(Wh, "Set"), qh = zh, Uh = gt, Bh = Ge, Yh = Uh(Bh, "WeakMap"), Gh = Yh, pn = Dh, hn = kn, gn = Ih, mn = qh, yn = Gh, Ro = Or, wt = Eo, Qi = "[object Map]", Xh = "[object Object]", Zi = "[object Promise]", ea = "[object Set]", ta = "[object WeakMap]", ra = "[object DataView]", Kh = wt(pn), Jh = wt(hn), Qh = wt(gn), Zh = wt(mn), eg = wt(yn), Ze = Ro;
(pn && Ze(new pn(new ArrayBuffer(1))) != ra || hn && Ze(new hn()) != Qi || gn && Ze(gn.resolve()) != Zi || mn && Ze(new mn()) != ea || yn && Ze(new yn()) != ta) && (Ze = function(e) {
  var t = Ro(e), r = t == Xh ? e.constructor : void 0, n = r ? wt(r) : "";
  if (n)
    switch (n) {
      case Kh:
        return ra;
      case Jh:
        return Qi;
      case Qh:
        return Zi;
      case Zh:
        return ea;
      case eg:
        return ta;
    }
  return t;
});
var tg = Ze, zr = Nd, rg = Co, ng = Ov, ig = $h, na = tg, ia = jn, aa = pr.exports, ag = So, og = 1, oa = "[object Arguments]", sa = "[object Array]", tr = "[object Object]", sg = Object.prototype, ua = sg.hasOwnProperty;
function ug(e, t, r, n, i, o) {
  var a = ia(e), u = ia(t), s = a ? sa : na(e), f = u ? sa : na(t);
  s = s == oa ? tr : s, f = f == oa ? tr : f;
  var l = s == tr, d = f == tr, v = s == f;
  if (v && aa(e)) {
    if (!aa(t))
      return !1;
    a = !0, l = !1;
  }
  if (v && !l)
    return o || (o = new zr()), a || ag(e) ? rg(e, t, r, n, i, o) : ng(e, t, s, r, n, i, o);
  if (!(r & og)) {
    var y = l && ua.call(e, "__wrapped__"), g = d && ua.call(t, "__wrapped__");
    if (y || g) {
      var _ = y ? e.value() : e, b = g ? t.value() : t;
      return o || (o = new zr()), i(_, b, r, n, o);
    }
  }
  return v ? (o || (o = new zr()), ig(e, t, r, n, i, o)) : !1;
}
var fg = ug, lg = fg, fa = Rr;
function xo(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !fa(e) && !fa(t) ? e !== e && t !== t : lg(e, t, r, n, xo, i);
}
var cg = xo, dg = cg;
function vg(e, t) {
  return dg(e, t);
}
var pg = vg;
function hg(e, t) {
  return e === t ? !0 : !e || !t ? !1 : "pageX" in t && "pageY" in t ? e.pageX === t.pageX && e.pageY === t.pageY : "clientX" in t && "clientY" in t ? e.clientX === t.clientX && e.clientY === t.clientY : !1;
}
function gg(e, t) {
  e !== document.activeElement && or(t, e) && typeof e.focus == "function" && e.focus();
}
function la(e, t) {
  var r = null, n = null;
  function i(a) {
    var u = ee(a, 1), s = u[0].target;
    if (!!document.documentElement.contains(s)) {
      var f = s.getBoundingClientRect(), l = f.width, d = f.height, v = Math.floor(l), y = Math.floor(d);
      (r !== v || n !== y) && Promise.resolve().then(function() {
        t({
          width: v,
          height: y
        });
      }), r = v, n = y;
    }
  }
  var o = new $a(i);
  return e && o.observe(e), function() {
    o.disconnect();
  };
}
const mg = function(e, t) {
  var r = Pe.useRef(!1), n = Pe.useRef(null);
  function i() {
    window.clearTimeout(n.current);
  }
  function o(a) {
    if (i(), !r.current || a === !0) {
      if (e() === !1)
        return;
      r.current = !0, n.current = window.setTimeout(function() {
        r.current = !1;
      }, t);
    } else
      n.current = window.setTimeout(function() {
        r.current = !1, o();
      }, t);
  }
  return [o, function() {
    r.current = !1, i();
  }];
};
function ca(e) {
  return typeof e != "function" ? null : e();
}
function da(e) {
  return Re(e) !== "object" || !e ? null : e;
}
var yg = function(t, r) {
  var n = t.children, i = t.disabled, o = t.target, a = t.align, u = t.onAlign, s = t.monitorWindowResize, f = t.monitorBufferTime, l = f === void 0 ? 0 : f, d = Pe.useRef({}), v = Pe.useRef(), y = Pe.Children.only(n), g = Pe.useRef({});
  g.current.disabled = i, g.current.target = o, g.current.align = a, g.current.onAlign = u;
  var _ = mg(function() {
    var F = g.current, w = F.disabled, P = F.target, T = F.align, h = F.onAlign;
    if (!w && P) {
      var p = v.current, S, x = ca(P), $ = da(P);
      d.current.element = x, d.current.point = $, d.current.align = T;
      var N = document, k = N.activeElement;
      return x && hf(x) ? S = Vn(p, x, T) : $ && (S = Wf(p, $, T)), gg(k, p), h && S && h(p, S), !0;
    }
    return !1;
  }, l), b = ee(_, 2), m = b[0], O = b[1], C = Pe.useRef({
    cancel: function() {
    }
  }), R = Pe.useRef({
    cancel: function() {
    }
  });
  Pe.useEffect(function() {
    var F = ca(o), w = da(o);
    v.current !== R.current.element && (R.current.cancel(), R.current.element = v.current, R.current.cancel = la(v.current, m)), (d.current.element !== F || !hg(d.current.point, w) || !pg(d.current.align, a)) && (m(), C.current.element !== F && (C.current.cancel(), C.current.element = F, C.current.cancel = la(F, m)));
  }), Pe.useEffect(function() {
    i ? O() : m();
  }, [i]);
  var E = Pe.useRef(null);
  return Pe.useEffect(function() {
    s ? E.current || (E.current = Rt(window, "resize", m)) : E.current && (E.current.remove(), E.current = null);
  }, [s]), Pe.useEffect(function() {
    return function() {
      C.current.cancel(), R.current.cancel(), E.current && E.current.remove(), O();
    };
  }, []), Pe.useImperativeHandle(r, function() {
    return {
      forceAlign: function() {
        return m(!0);
      }
    };
  }), /* @__PURE__ */ Pe.isValidElement(y) && (y = /* @__PURE__ */ Pe.cloneElement(y, {
    ref: br(y.ref, v)
  })), y;
}, Fo = /* @__PURE__ */ Pe.forwardRef(yg);
Fo.displayName = "Align";
var va = ["measure", "alignPre", "align", null, "motion"];
const bg = function(e, t) {
  var r = ft(null), n = ee(r, 2), i = n[0], o = n[1], a = Se();
  function u(l) {
    o(l, !0);
  }
  function s() {
    Ye.cancel(a.current);
  }
  function f(l) {
    s(), a.current = Ye(function() {
      u(function(d) {
        switch (i) {
          case "align":
            return "motion";
          case "motion":
            return "stable";
        }
        return d;
      }), l == null || l();
    });
  }
  return je(function() {
    u("measure");
  }, [e]), je(function() {
    switch (i) {
      case "measure":
        t();
        break;
    }
    i && (a.current = Ye(/* @__PURE__ */ It(/* @__PURE__ */ Ie().mark(function l() {
      var d, v;
      return Ie().wrap(function(g) {
        for (; ; )
          switch (g.prev = g.next) {
            case 0:
              d = va.indexOf(i), v = va[d + 1], v && d !== -1 && u(v);
            case 3:
            case "end":
              return g.stop();
          }
      }, l);
    }))));
  }, [i]), je(function() {
    return function() {
      s();
    };
  }, []), [i, f];
}, wg = function(e) {
  var t = A.useState({
    width: 0,
    height: 0
  }), r = ee(t, 2), n = r[0], i = r[1];
  function o(u) {
    i({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }
  var a = A.useMemo(function() {
    var u = {};
    if (e) {
      var s = n.width, f = n.height;
      e.indexOf("height") !== -1 && f ? u.height = f : e.indexOf("minHeight") !== -1 && f && (u.minHeight = f), e.indexOf("width") !== -1 && s ? u.width = s : e.indexOf("minWidth") !== -1 && s && (u.minWidth = s);
    }
    return u;
  }, [e, n]);
  return [a, o];
};
var Ao = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.visible, n = e.prefixCls, i = e.className, o = e.style, a = e.children, u = e.zIndex, s = e.stretch, f = e.destroyPopupOnHide, l = e.forceRender, d = e.align, v = e.point, y = e.getRootDomNode, g = e.getClassNameFromAlign, _ = e.onAlign, b = e.onMouseEnter, m = e.onMouseLeave, O = e.onMouseDown, C = e.onTouchStart, R = e.onClick, E = Se(), F = Se(), w = Mt(), P = ee(w, 2), T = P[0], h = P[1], p = wg(s), S = ee(p, 2), x = S[0], $ = S[1];
  function N() {
    s && $(y());
  }
  var k = bg(r, N), z = ee(k, 2), I = z[0], H = z[1], Y = Mt(0), te = ee(Y, 2), X = te[0], U = te[1], ce = Se();
  kt(function() {
    I === "alignPre" && U(0);
  }, [I]);
  function B() {
    return v || y;
  }
  function re() {
    var G;
    (G = E.current) === null || G === void 0 || G.forceAlign();
  }
  function oe(G, Oe) {
    var we = g(Oe);
    T !== we && h(we), U(function(_e) {
      return _e + 1;
    }), I === "align" && (_ == null || _(G, Oe));
  }
  kt(function() {
    I === "align" && (X < 2 ? re() : H(function() {
      var G;
      (G = ce.current) === null || G === void 0 || G.call(ce);
    }));
  }, [X]);
  var ve = j({}, so(e));
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function(G) {
    var Oe = ve[G];
    ve[G] = function(we, _e) {
      return H(), Oe == null ? void 0 : Oe(we, _e);
    };
  });
  function he() {
    return new Promise(function(G) {
      ce.current = G;
    });
  }
  A.useEffect(function() {
    !ve.motionName && I === "motion" && H();
  }, [ve.motionName, I]), A.useImperativeHandle(t, function() {
    return {
      forceAlign: re,
      getElement: function() {
        return F.current;
      }
    };
  });
  var Ce = j(j({}, x), {}, {
    zIndex: u,
    opacity: I === "motion" || I === "stable" || !r ? void 0 : 0,
    pointerEvents: !r && I !== "stable" ? "none" : void 0
  }, o), Fe = !0;
  (d == null ? void 0 : d.points) && (I === "align" || I === "stable") && (Fe = !1);
  var D = a;
  return A.Children.count(a) > 1 && (D = /* @__PURE__ */ L("div", {
    className: "".concat(n, "-content"),
    children: a
  })), /* @__PURE__ */ L(Rn, {
    visible: r,
    ref: F,
    leavedClassName: "".concat(n, "-hidden"),
    ...ve,
    onAppearPrepare: he,
    onEnterPrepare: he,
    removeOnLeave: f,
    forceRender: l,
    children: function(G, Oe) {
      var we = G.className, _e = G.style, K = Le(n, i, T, we);
      return /* @__PURE__ */ L(Fo, {
        target: B(),
        ref: E,
        monitorWindowResize: !0,
        disabled: Fe,
        align: d,
        onAlign: oe,
        children: /* @__PURE__ */ L("div", {
          ref: Oe,
          className: K,
          onMouseEnter: b,
          onMouseLeave: m,
          onMouseDownCapture: O,
          onTouchStartCapture: C,
          onClick: R,
          style: j(j({}, _e), Ce),
          children: D
        })
      }, "popup");
    }
  });
});
Ao.displayName = "PopupInner";
var $o = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.visible, i = e.zIndex, o = e.children, a = e.mobile;
  a = a === void 0 ? {} : a;
  var u = a.popupClassName, s = a.popupStyle, f = a.popupMotion, l = f === void 0 ? {} : f, d = a.popupRender, v = e.onClick, y = A.useRef();
  A.useImperativeHandle(t, function() {
    return {
      forceAlign: function() {
      },
      getElement: function() {
        return y.current;
      }
    };
  });
  var g = j({
    zIndex: i
  }, s), _ = o;
  return A.Children.count(o) > 1 && (_ = /* @__PURE__ */ L("div", {
    className: "".concat(r, "-content"),
    children: o
  })), d && (_ = d(_)), /* @__PURE__ */ L(Rn, {
    visible: n,
    ref: y,
    removeOnLeave: !0,
    ...l,
    children: function(b, m) {
      var O = b.className, C = b.style, R = Le(r, u, O);
      return /* @__PURE__ */ L("div", {
        ref: m,
        className: R,
        onClick: v,
        style: j(j({}, C), g),
        children: _
      });
    }
  });
});
$o.displayName = "MobilePopupInner";
var _g = ["visible", "mobile"], Mo = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.visible, n = e.mobile, i = Lt(e, _g), o = Mt(r), a = ee(o, 2), u = a[0], s = a[1], f = Mt(!1), l = ee(f, 2), d = l[0], v = l[1], y = j(j({}, i), {}, {
    visible: u
  });
  je(function() {
    s(r), r && n && v(ff());
  }, [r, n]);
  var g = d ? /* @__PURE__ */ L($o, {
    ...y,
    mobile: n,
    ref: t
  }) : /* @__PURE__ */ L(Ao, {
    ...y,
    ref: t
  });
  return /* @__PURE__ */ gr("div", {
    children: [/* @__PURE__ */ L(pf, {
      ...y
    }), g]
  });
});
Mo.displayName = "Popup";
var pa = /* @__PURE__ */ A.createContext(null);
function qr() {
}
function Eg() {
  return "";
}
function Pg(e) {
  return e ? e.ownerDocument : window.document;
}
var Cg = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
function Og(e) {
  var t = /* @__PURE__ */ function(r) {
    mr(i, r);
    var n = yr(i);
    function i(o) {
      var a;
      vt(this, i), a = n.call(this, o), a.popupRef = /* @__PURE__ */ A.createRef(), a.triggerRef = /* @__PURE__ */ A.createRef(), a.portalContainer = void 0, a.attachId = void 0, a.clickOutsideHandler = void 0, a.touchOutsideHandler = void 0, a.contextMenuOutsideHandler1 = void 0, a.contextMenuOutsideHandler2 = void 0, a.mouseDownTimeout = void 0, a.focusTime = void 0, a.preClickTime = void 0, a.preTouchTime = void 0, a.delayTimer = void 0, a.hasPopupMouseDown = void 0, a.onMouseEnter = function(s) {
        var f = a.props.mouseEnterDelay;
        a.fireEvents("onMouseEnter", s), a.delaySetPopupVisible(!0, f, f ? null : s);
      }, a.onMouseMove = function(s) {
        a.fireEvents("onMouseMove", s), a.setPoint(s);
      }, a.onMouseLeave = function(s) {
        a.fireEvents("onMouseLeave", s), a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
      }, a.onPopupMouseEnter = function() {
        a.clearDelayTimer();
      }, a.onPopupMouseLeave = function(s) {
        var f;
        s.relatedTarget && !s.relatedTarget.setTimeout && or((f = a.popupRef.current) === null || f === void 0 ? void 0 : f.getElement(), s.relatedTarget) || a.delaySetPopupVisible(!1, a.props.mouseLeaveDelay);
      }, a.onFocus = function(s) {
        a.fireEvents("onFocus", s), a.clearDelayTimer(), a.isFocusToShow() && (a.focusTime = Date.now(), a.delaySetPopupVisible(!0, a.props.focusDelay));
      }, a.onMouseDown = function(s) {
        a.fireEvents("onMouseDown", s), a.preClickTime = Date.now();
      }, a.onTouchStart = function(s) {
        a.fireEvents("onTouchStart", s), a.preTouchTime = Date.now();
      }, a.onBlur = function(s) {
        a.fireEvents("onBlur", s), a.clearDelayTimer(), a.isBlurToHide() && a.delaySetPopupVisible(!1, a.props.blurDelay);
      }, a.onContextMenu = function(s) {
        s.preventDefault(), a.fireEvents("onContextMenu", s), a.setPopupVisible(!0, s);
      }, a.onContextMenuClose = function() {
        a.isContextMenuToShow() && a.close();
      }, a.onClick = function(s) {
        if (a.fireEvents("onClick", s), a.focusTime) {
          var f;
          if (a.preClickTime && a.preTouchTime ? f = Math.min(a.preClickTime, a.preTouchTime) : a.preClickTime ? f = a.preClickTime : a.preTouchTime && (f = a.preTouchTime), Math.abs(f - a.focusTime) < 20)
            return;
          a.focusTime = 0;
        }
        a.preClickTime = 0, a.preTouchTime = 0, a.isClickToShow() && (a.isClickToHide() || a.isBlurToHide()) && s && s.preventDefault && s.preventDefault();
        var l = !a.state.popupVisible;
        (a.isClickToHide() && !l || l && a.isClickToShow()) && a.setPopupVisible(!a.state.popupVisible, s);
      }, a.onPopupMouseDown = function() {
        if (a.hasPopupMouseDown = !0, clearTimeout(a.mouseDownTimeout), a.mouseDownTimeout = window.setTimeout(function() {
          a.hasPopupMouseDown = !1;
        }, 0), a.context) {
          var s;
          (s = a.context).onPopupMouseDown.apply(s, arguments);
        }
      }, a.onDocumentClick = function(s) {
        if (!(a.props.mask && !a.props.maskClosable)) {
          var f = s.target, l = a.getRootDomNode(), d = a.getPopupDomNode();
          (!or(l, f) || a.isContextMenuOnly()) && !or(d, f) && !a.hasPopupMouseDown && a.close();
        }
      }, a.getRootDomNode = function() {
        var s = a.props.getTriggerDOMNode;
        if (s)
          return s(a.triggerRef.current);
        try {
          var f = fr(a.triggerRef.current);
          if (f)
            return f;
        } catch {
        }
        return Nt.findDOMNode(_n(a));
      }, a.getPopupClassNameFromAlign = function(s) {
        var f = [], l = a.props, d = l.popupPlacement, v = l.builtinPlacements, y = l.prefixCls, g = l.alignPoint, _ = l.getPopupClassNameFromAlign;
        return d && v && f.push(vf(v, y, s, g)), _ && f.push(_(s)), f.join(" ");
      }, a.getComponent = function() {
        var s = a.props, f = s.prefixCls, l = s.destroyPopupOnHide, d = s.popupClassName, v = s.onPopupAlign, y = s.popupMotion, g = s.popupAnimation, _ = s.popupTransitionName, b = s.popupStyle, m = s.mask, O = s.maskAnimation, C = s.maskTransitionName, R = s.maskMotion, E = s.zIndex, F = s.popup, w = s.stretch, P = s.alignPoint, T = s.mobile, h = s.forceRender, p = s.onPopupClick, S = a.state, x = S.popupVisible, $ = S.point, N = a.getPopupAlign(), k = {};
        return a.isMouseEnterToShow() && (k.onMouseEnter = a.onPopupMouseEnter), a.isMouseLeaveToHide() && (k.onMouseLeave = a.onPopupMouseLeave), k.onMouseDown = a.onPopupMouseDown, k.onTouchStart = a.onPopupMouseDown, /* @__PURE__ */ L(Mo, {
          prefixCls: f,
          destroyPopupOnHide: l,
          visible: x,
          point: P && $,
          className: d,
          align: N,
          onAlign: v,
          animation: g,
          getClassNameFromAlign: a.getPopupClassNameFromAlign,
          ...k,
          stretch: w,
          getRootDomNode: a.getRootDomNode,
          style: b,
          mask: m,
          zIndex: E,
          transitionName: _,
          maskAnimation: O,
          maskTransitionName: C,
          maskMotion: R,
          ref: a.popupRef,
          motion: y,
          mobile: T,
          forceRender: h,
          onClick: p,
          children: typeof F == "function" ? F() : F
        });
      }, a.attachParent = function(s) {
        Ye.cancel(a.attachId);
        var f = a.props, l = f.getPopupContainer, d = f.getDocument, v = a.getRootDomNode(), y;
        l ? (v || l.length === 0) && (y = l(v)) : y = d(a.getRootDomNode()).body, y ? y.appendChild(s) : a.attachId = Ye(function() {
          a.attachParent(s);
        });
      }, a.getContainer = function() {
        if (!a.portalContainer) {
          var s = a.props.getDocument, f = s(a.getRootDomNode()).createElement("div");
          f.style.position = "absolute", f.style.top = "0", f.style.left = "0", f.style.width = "100%", a.portalContainer = f;
        }
        return a.attachParent(a.portalContainer), a.portalContainer;
      }, a.setPoint = function(s) {
        var f = a.props.alignPoint;
        !f || !s || a.setState({
          point: {
            pageX: s.pageX,
            pageY: s.pageY
          }
        });
      }, a.handlePortalUpdate = function() {
        a.state.prevPopupVisible !== a.state.popupVisible && a.props.afterPopupVisibleChange(a.state.popupVisible);
      }, a.triggerContextValue = {
        onPopupMouseDown: a.onPopupMouseDown
      };
      var u;
      return "popupVisible" in o ? u = !!o.popupVisible : u = !!o.defaultPopupVisible, a.state = {
        prevPopupVisible: u,
        popupVisible: u
      }, Cg.forEach(function(s) {
        a["fire".concat(s)] = function(f) {
          a.fireEvents(s, f);
        };
      }), a;
    }
    return pt(i, [{
      key: "componentDidMount",
      value: function() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        var a = this.props, u = this.state;
        if (u.popupVisible) {
          var s;
          !this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow()) && (s = a.getDocument(this.getRootDomNode()), this.clickOutsideHandler = Rt(s, "mousedown", this.onDocumentClick)), this.touchOutsideHandler || (s = s || a.getDocument(this.getRootDomNode()), this.touchOutsideHandler = Rt(s, "touchstart", this.onDocumentClick)), !this.contextMenuOutsideHandler1 && this.isContextMenuToShow() && (s = s || a.getDocument(this.getRootDomNode()), this.contextMenuOutsideHandler1 = Rt(s, "scroll", this.onContextMenuClose)), !this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = Rt(window, "blur", this.onContextMenuClose));
          return;
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.clearDelayTimer(), this.clearOutsideHandler(), clearTimeout(this.mouseDownTimeout), Ye.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function() {
        var a;
        return ((a = this.popupRef.current) === null || a === void 0 ? void 0 : a.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function() {
        var a = this.props, u = a.popupPlacement, s = a.popupAlign, f = a.builtinPlacements;
        return u && f ? df(f, u, s) : s;
      }
    }, {
      key: "setPopupVisible",
      value: function(a, u) {
        var s = this.props.alignPoint, f = this.state.popupVisible;
        this.clearDelayTimer(), f !== a && ("popupVisible" in this.props || this.setState({
          popupVisible: a,
          prevPopupVisible: f
        }), this.props.onPopupVisibleChange(a)), s && u && a && this.setPoint(u);
      }
    }, {
      key: "delaySetPopupVisible",
      value: function(a, u, s) {
        var f = this, l = u * 1e3;
        if (this.clearDelayTimer(), l) {
          var d = s ? {
            pageX: s.pageX,
            pageY: s.pageY
          } : null;
          this.delayTimer = window.setTimeout(function() {
            f.setPopupVisible(a, d), f.clearDelayTimer();
          }, l);
        } else
          this.setPopupVisible(a, s);
      }
    }, {
      key: "clearDelayTimer",
      value: function() {
        this.delayTimer && (clearTimeout(this.delayTimer), this.delayTimer = null);
      }
    }, {
      key: "clearOutsideHandler",
      value: function() {
        this.clickOutsideHandler && (this.clickOutsideHandler.remove(), this.clickOutsideHandler = null), this.contextMenuOutsideHandler1 && (this.contextMenuOutsideHandler1.remove(), this.contextMenuOutsideHandler1 = null), this.contextMenuOutsideHandler2 && (this.contextMenuOutsideHandler2.remove(), this.contextMenuOutsideHandler2 = null), this.touchOutsideHandler && (this.touchOutsideHandler.remove(), this.touchOutsideHandler = null);
      }
    }, {
      key: "createTwoChains",
      value: function(a) {
        var u = this.props.children.props, s = this.props;
        return u[a] && s[a] ? this["fire".concat(a)] : u[a] || s[a];
      }
    }, {
      key: "isClickToShow",
      value: function() {
        var a = this.props, u = a.action, s = a.showAction;
        return u.indexOf("click") !== -1 || s.indexOf("click") !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function() {
        var a = this.props.action;
        return a === "contextMenu" || a.length === 1 && a[0] === "contextMenu";
      }
    }, {
      key: "isContextMenuToShow",
      value: function() {
        var a = this.props, u = a.action, s = a.showAction;
        return u.indexOf("contextMenu") !== -1 || s.indexOf("contextMenu") !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function() {
        var a = this.props, u = a.action, s = a.hideAction;
        return u.indexOf("click") !== -1 || s.indexOf("click") !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function() {
        var a = this.props, u = a.action, s = a.showAction;
        return u.indexOf("hover") !== -1 || s.indexOf("mouseEnter") !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function() {
        var a = this.props, u = a.action, s = a.hideAction;
        return u.indexOf("hover") !== -1 || s.indexOf("mouseLeave") !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function() {
        var a = this.props, u = a.action, s = a.showAction;
        return u.indexOf("focus") !== -1 || s.indexOf("focus") !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function() {
        var a = this.props, u = a.action, s = a.hideAction;
        return u.indexOf("focus") !== -1 || s.indexOf("blur") !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function() {
        if (this.state.popupVisible) {
          var a;
          (a = this.popupRef.current) === null || a === void 0 || a.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function(a, u) {
        var s = this.props.children.props[a];
        s && s(u);
        var f = this.props[a];
        f && f(u);
      }
    }, {
      key: "close",
      value: function() {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function() {
        var a = this.state.popupVisible, u = this.props, s = u.children, f = u.forceRender, l = u.alignPoint, d = u.className, v = u.autoDestroy, y = A.Children.only(s), g = {
          key: "trigger"
        };
        this.isContextMenuToShow() ? g.onContextMenu = this.onContextMenu : g.onContextMenu = this.createTwoChains("onContextMenu"), this.isClickToHide() || this.isClickToShow() ? (g.onClick = this.onClick, g.onMouseDown = this.onMouseDown, g.onTouchStart = this.onTouchStart) : (g.onClick = this.createTwoChains("onClick"), g.onMouseDown = this.createTwoChains("onMouseDown"), g.onTouchStart = this.createTwoChains("onTouchStart")), this.isMouseEnterToShow() ? (g.onMouseEnter = this.onMouseEnter, l && (g.onMouseMove = this.onMouseMove)) : g.onMouseEnter = this.createTwoChains("onMouseEnter"), this.isMouseLeaveToHide() ? g.onMouseLeave = this.onMouseLeave : g.onMouseLeave = this.createTwoChains("onMouseLeave"), this.isFocusToShow() || this.isBlurToHide() ? (g.onFocus = this.onFocus, g.onBlur = this.onBlur) : (g.onFocus = this.createTwoChains("onFocus"), g.onBlur = this.createTwoChains("onBlur"));
        var _ = Le(y && y.props && y.props.className, d);
        _ && (g.className = _);
        var b = j({}, g);
        Pn(y) && (b.ref = br(this.triggerRef, y.ref));
        var m = /* @__PURE__ */ A.cloneElement(y, b), O;
        return (a || this.popupRef.current || f) && (O = /* @__PURE__ */ L(e, {
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate,
          children: this.getComponent()
        }, "portal")), !a && v && (O = null), /* @__PURE__ */ gr(pa.Provider, {
          value: this.triggerContextValue,
          children: [m, O]
        });
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(a, u) {
        var s = a.popupVisible, f = {};
        return s !== void 0 && u.popupVisible !== s && (f.popupVisible = s, f.prevPopupVisible = u.popupVisible), f;
      }
    }]), i;
  }(A.Component);
  return t.contextType = pa, t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Eg,
    getDocument: Pg,
    onPopupVisibleChange: qr,
    afterPopupVisibleChange: qr,
    onPopupAlign: qr,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  }, t;
}
const Tg = Og(lf);
var Ln = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return r;
};
Ln("bottomLeft", "bottomRight", "topLeft", "topRight");
var No = function(t, r, n) {
  return n !== void 0 ? n : "".concat(t, "-").concat(r);
};
function Sg() {
  var e = A.useReducer(function(n) {
    return n + 1;
  }, 0), t = ee(e, 2), r = t[1];
  return r;
}
var Rg = ["xxl", "xl", "lg", "md", "sm", "xs"], rr = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
}, Qe = /* @__PURE__ */ new Map(), Ur = -1, nr = {}, ha = {
  matchHandlers: {},
  dispatch: function(t) {
    return nr = t, Qe.forEach(function(r) {
      return r(nr);
    }), Qe.size >= 1;
  },
  subscribe: function(t) {
    return Qe.size || this.register(), Ur += 1, Qe.set(Ur, t), t(nr), Ur;
  },
  unsubscribe: function(t) {
    Qe.delete(t), Qe.size || this.unregister();
  },
  unregister: function() {
    var t = this;
    Object.keys(rr).forEach(function(r) {
      var n = rr[r], i = t.matchHandlers[n];
      i == null || i.mql.removeListener(i == null ? void 0 : i.listener);
    }), Qe.clear();
  },
  register: function() {
    var t = this;
    Object.keys(rr).forEach(function(r) {
      var n = rr[r], i = function(u) {
        var s = u.matches;
        t.dispatch(me(me({}, nr), de({}, r, s)));
      }, o = window.matchMedia(n);
      o.addListener(i), t.matchHandlers[n] = {
        mql: o,
        listener: i
      }, i(o);
    });
  }
};
function xg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, t = Se({}), r = Sg();
  return je(function() {
    var n = ha.subscribe(function(i) {
      t.current = i, e && r();
    });
    return function() {
      return ha.unsubscribe(n);
    };
  }, []), t.current;
}
var bn = /* @__PURE__ */ A.createContext("default"), ga = function(t) {
  var r = t.children, n = t.size;
  return /* @__PURE__ */ L(bn.Consumer, {
    children: function(i) {
      return /* @__PURE__ */ L(bn.Provider, {
        value: n || i,
        children: r
      });
    }
  });
}, Fg = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, Ag = function(t, r) {
  var n, i, o = A.useContext(bn), a = A.useState(1), u = ee(a, 2), s = u[0], f = u[1], l = A.useState(!1), d = ee(l, 2), v = d[0], y = d[1], g = A.useState(!0), _ = ee(g, 2), b = _[0], m = _[1], O = A.useRef(null), C = A.useRef(null), R = br(r, O), E = A.useContext(qt), F = E.getPrefixCls, w = function() {
    if (!(!C.current || !O.current)) {
      var K = C.current.offsetWidth, ie = O.current.offsetWidth;
      if (K !== 0 && ie !== 0) {
        var ge = t.gap, He = ge === void 0 ? 4 : ge;
        He * 2 < ie && f(ie - He * 2 < K ? (ie - He * 2) / K : 1);
      }
    }
  };
  A.useEffect(function() {
    y(!0);
  }, []), A.useEffect(function() {
    m(!0), f(1);
  }, [t.src]), A.useEffect(function() {
    w();
  }, [t.gap]);
  var P = function() {
    var K = t.onError, ie = K ? K() : void 0;
    ie !== !1 && m(!1);
  }, T = t.prefixCls, h = t.shape, p = h === void 0 ? "circle" : h, S = t.size, x = S === void 0 ? "default" : S, $ = t.src, N = t.srcSet, k = t.icon, z = t.className, I = t.alt, H = t.draggable, Y = t.children, te = t.crossOrigin, X = Fg(t, ["prefixCls", "shape", "size", "src", "srcSet", "icon", "className", "alt", "draggable", "children", "crossOrigin"]), U = x === "default" ? o : x, ce = Object.keys(Re(U) === "object" ? U || {} : {}).some(function(_e) {
    return ["xs", "sm", "md", "lg", "xl", "xxl"].includes(_e);
  }), B = xg(ce), re = A.useMemo(function() {
    if (Re(U) !== "object")
      return {};
    var _e = Rg.find(function(ie) {
      return B[ie];
    }), K = U[_e];
    return K ? {
      width: K,
      height: K,
      lineHeight: "".concat(K, "px"),
      fontSize: k ? K / 2 : 18
    } : {};
  }, [B, U]);
  process.env.NODE_ENV !== "production" && Ka(!(typeof k == "string" && k.length > 2), "Avatar", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(k, "` at https://ant.design/components/icon"));
  var oe = F("avatar", T), ve = Le((n = {}, de(n, "".concat(oe, "-lg"), U === "large"), de(n, "".concat(oe, "-sm"), U === "small"), n)), he = /* @__PURE__ */ A.isValidElement($), Ce = Le(oe, ve, (i = {}, de(i, "".concat(oe, "-").concat(p), !!p), de(i, "".concat(oe, "-image"), he || $ && b), de(i, "".concat(oe, "-icon"), !!k), i), z), Fe = typeof U == "number" ? {
    width: U,
    height: U,
    lineHeight: "".concat(U, "px"),
    fontSize: k ? U / 2 : 18
  } : {}, D;
  if (typeof $ == "string" && b)
    D = /* @__PURE__ */ L("img", {
      src: $,
      draggable: H,
      srcSet: N,
      onError: P,
      alt: I,
      crossOrigin: te
    });
  else if (he)
    D = $;
  else if (k)
    D = k;
  else if (v || s !== 1) {
    var G = "scale(".concat(s, ") translateX(-50%)"), Oe = {
      msTransform: G,
      WebkitTransform: G,
      transform: G
    }, we = typeof U == "number" ? {
      lineHeight: "".concat(U, "px")
    } : {};
    D = /* @__PURE__ */ L(Va, {
      onResize: w,
      children: /* @__PURE__ */ L("span", {
        className: "".concat(oe, "-string"),
        ref: C,
        style: me(me({}, we), Oe),
        children: Y
      })
    });
  } else
    D = /* @__PURE__ */ L("span", {
      className: "".concat(oe, "-string"),
      style: {
        opacity: 0
      },
      ref: C,
      children: Y
    });
  return delete X.onError, delete X.gap, /* @__PURE__ */ L("span", {
    ...X,
    style: me(me(me({}, Fe), re), X.style),
    className: Ce,
    ref: R,
    children: D
  });
}, Vo = /* @__PURE__ */ A.forwardRef(Ag);
process.env.NODE_ENV !== "production" && (Vo.displayName = "Avatar");
const Do = Vo;
var De = {
  adjustX: 1,
  adjustY: 1
}, ke = [0, 0], ko = {
  left: {
    points: ["cr", "cl"],
    overflow: De,
    offset: [-4, 0],
    targetOffset: ke
  },
  right: {
    points: ["cl", "cr"],
    overflow: De,
    offset: [4, 0],
    targetOffset: ke
  },
  top: {
    points: ["bc", "tc"],
    overflow: De,
    offset: [0, -4],
    targetOffset: ke
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: De,
    offset: [0, 4],
    targetOffset: ke
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: De,
    offset: [0, -4],
    targetOffset: ke
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: De,
    offset: [-4, 0],
    targetOffset: ke
  },
  topRight: {
    points: ["br", "tr"],
    overflow: De,
    offset: [0, -4],
    targetOffset: ke
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: De,
    offset: [4, 0],
    targetOffset: ke
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: De,
    offset: [0, 4],
    targetOffset: ke
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: De,
    offset: [4, 0],
    targetOffset: ke
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: De,
    offset: [0, 4],
    targetOffset: ke
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: De,
    offset: [-4, 0],
    targetOffset: ke
  }
};
function $g(e) {
  var t = e.showArrow, r = e.arrowContent, n = e.children, i = e.prefixCls, o = e.id, a = e.overlayInnerStyle, u = e.className, s = e.style;
  return /* @__PURE__ */ gr("div", {
    className: Le("".concat(i, "-content"), u),
    style: s,
    children: [t !== !1 && /* @__PURE__ */ L("div", {
      className: "".concat(i, "-arrow"),
      children: r
    }, "arrow"), /* @__PURE__ */ L("div", {
      className: "".concat(i, "-inner"),
      id: o,
      role: "tooltip",
      style: a,
      children: typeof n == "function" ? n() : n
    })]
  });
}
var Mg = function(t, r) {
  var n = t.overlayClassName, i = t.trigger, o = i === void 0 ? ["hover"] : i, a = t.mouseEnterDelay, u = a === void 0 ? 0 : a, s = t.mouseLeaveDelay, f = s === void 0 ? 0.1 : s, l = t.overlayStyle, d = t.prefixCls, v = d === void 0 ? "rc-tooltip" : d, y = t.children, g = t.onVisibleChange, _ = t.afterVisibleChange, b = t.transitionName, m = t.animation, O = t.motion, C = t.placement, R = C === void 0 ? "right" : C, E = t.align, F = E === void 0 ? {} : E, w = t.destroyTooltipOnHide, P = w === void 0 ? !1 : w, T = t.defaultVisible, h = t.getTooltipContainer, p = t.overlayInnerStyle, S = t.arrowContent, x = t.overlay, $ = t.id, N = t.showArrow, k = Lt(t, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"]), z = Se(null);
  Pa(r, function() {
    return z.current;
  });
  var I = j({}, k);
  "visible" in t && (I.popupVisible = t.visible);
  var H = function() {
    return /* @__PURE__ */ L($g, {
      showArrow: N,
      arrowContent: S,
      prefixCls: v,
      id: $,
      overlayInnerStyle: p,
      children: x
    }, "content");
  }, Y = !1, te = !1;
  if (typeof P == "boolean")
    Y = P;
  else if (P && Re(P) === "object") {
    var X = P.keepParent;
    Y = X === !0, te = X === !1;
  }
  return /* @__PURE__ */ L(Tg, {
    popupClassName: n,
    prefixCls: v,
    popup: H,
    action: o,
    builtinPlacements: ko,
    popupPlacement: R,
    ref: z,
    popupAlign: F,
    getPopupContainer: h,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: _,
    popupTransitionName: b,
    popupAnimation: m,
    popupMotion: O,
    defaultPopupVisible: T,
    destroyPopupOnHide: Y,
    autoDestroy: te,
    mouseLeaveDelay: f,
    popupStyle: l,
    mouseEnterDelay: u,
    ...I,
    children: y
  });
};
const Ng = /* @__PURE__ */ Ea(Mg);
Ln("success", "processing", "error", "default", "warning");
var Vg = Ln("pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"), Dg = {
  adjustX: 1,
  adjustY: 1
}, ma = {
  adjustX: 0,
  adjustY: 0
}, kg = [0, 0];
function ya(e) {
  return typeof e == "boolean" ? e ? Dg : ma : me(me({}, ma), e);
}
function jg(e) {
  var t = e.arrowWidth, r = t === void 0 ? 4 : t, n = e.horizontalArrowShift, i = n === void 0 ? 16 : n, o = e.verticalArrowShift, a = o === void 0 ? 8 : o, u = e.autoAdjustOverflow, s = e.arrowPointAtCenter, f = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(i + r), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(a + r)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [i + r, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(a + r)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [i + r, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, a + r]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(i + r), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, a + r]
    }
  };
  return Object.keys(f).forEach(function(l) {
    f[l] = s ? me(me({}, f[l]), {
      overflow: ya(u),
      targetOffset: kg
    }) : me(me({}, ko[l]), {
      overflow: ya(u)
    }), f[l].ignoreShake = !0;
  }), f;
}
var Lg = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, Ig = function(t, r) {
  var n = {}, i = me({}, t);
  return r.forEach(function(o) {
    t && o in t && (n[o] = t[o], delete i[o]);
  }), {
    picked: n,
    omitted: i
  };
}, ba = new RegExp("^(".concat(Vg.join("|"), ")(-inverse)?$"));
function Hg(e, t) {
  var r = e.type;
  if ((r.__ANT_BUTTON === !0 || e.type === "button") && e.props.disabled || r.__ANT_SWITCH === !0 && (e.props.disabled || e.props.loading) || r.__ANT_RADIO === !0 && e.props.disabled) {
    var n = Ig(e.props.style, ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]), i = n.picked, o = n.omitted, a = me(me({
      display: "inline-block"
    }, i), {
      cursor: "not-allowed",
      width: e.props.block ? "100%" : void 0
    }), u = me(me({}, o), {
      pointerEvents: "none"
    }), s = Fn(e, {
      style: u,
      className: null
    });
    return /* @__PURE__ */ L("span", {
      style: a,
      className: Le(e.props.className, "".concat(t, "-disabled-compatible-wrapper")),
      children: s
    });
  }
  return e;
}
var jo = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r, n = A.useContext(qt), i = n.getPopupContainer, o = n.getPrefixCls, a = n.direction;
  process.env.NODE_ENV !== "production" && [["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"]].forEach(function(ce) {
    var B = ee(ce, 2), re = B[0], oe = B[1];
    process.env.NODE_ENV !== "production" && Ka(!(re in e), "Tooltip", "`".concat(re, "` is deprecated which will be removed in next major version, please use `").concat(oe, "` instead."));
  });
  var u = uf(!1, {
    value: e.open !== void 0 ? e.open : e.visible,
    defaultValue: e.defaultOpen !== void 0 ? e.defaultOpen : e.defaultVisible
  }), s = ee(u, 2), f = s[0], l = s[1], d = function() {
    var B = e.title, re = e.overlay;
    return !B && !re && B !== 0;
  }, v = function(B) {
    var re, oe;
    l(d() ? !1 : B), d() || ((re = e.onOpenChange) === null || re === void 0 || re.call(e, B), (oe = e.onVisibleChange) === null || oe === void 0 || oe.call(e, B));
  }, y = function() {
    var B = e.builtinPlacements, re = e.arrowPointAtCenter, oe = re === void 0 ? !1 : re, ve = e.autoAdjustOverflow, he = ve === void 0 ? !0 : ve;
    return B || jg({
      arrowPointAtCenter: oe,
      autoAdjustOverflow: he
    });
  }, g = function(B, re) {
    var oe = y(), ve = Object.keys(oe).find(function(Fe) {
      var D, G;
      return oe[Fe].points[0] === ((D = re.points) === null || D === void 0 ? void 0 : D[0]) && oe[Fe].points[1] === ((G = re.points) === null || G === void 0 ? void 0 : G[1]);
    });
    if (!!ve) {
      var he = B.getBoundingClientRect(), Ce = {
        top: "50%",
        left: "50%"
      };
      ["top", "Bottom"].includes(ve) ? Ce.top = "".concat(he.height - re.offset[1], "px") : ["Top", "bottom"].includes(ve) && (Ce.top = "".concat(-re.offset[1], "px")), ["left", "Right"].includes(ve) ? Ce.left = "".concat(he.width - re.offset[0], "px") : ["right", "Left"].includes(ve) && (Ce.left = "".concat(-re.offset[0], "px")), B.style.transformOrigin = "".concat(Ce.left, " ").concat(Ce.top);
    }
  }, _ = function() {
    var B = e.title, re = e.overlay;
    return B === 0 ? B : re || B || "";
  }, b = e.getPopupContainer, m = e.placement, O = m === void 0 ? "top" : m, C = e.mouseEnterDelay, R = C === void 0 ? 0.1 : C, E = e.mouseLeaveDelay, F = E === void 0 ? 0.1 : E, w = Lg(e, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay"]), P = e.prefixCls, T = e.openClassName, h = e.getTooltipContainer, p = e.overlayClassName, S = e.color, x = e.overlayInnerStyle, $ = e.children, N = o("tooltip", P), k = o(), z = f;
  !("open" in e) && !("visible" in e) && d() && (z = !1);
  var I = Hg(xn($) && !af($) ? $ : /* @__PURE__ */ L("span", {
    children: $
  }), N), H = I.props, Y = !H.className || typeof H.className == "string" ? Le(H.className, de({}, T || "".concat(N, "-open"), !0)) : H.className, te = Le(p, (r = {}, de(r, "".concat(N, "-rtl"), a === "rtl"), de(r, "".concat(N, "-").concat(S), S && ba.test(S)), r)), X = x, U = {};
  return S && !ba.test(S) && (X = me(me({}, x), {
    background: S
  }), U = {
    "--antd-arrow-background-color": S
  }), /* @__PURE__ */ L(Ng, {
    ...w,
    placement: O,
    mouseEnterDelay: R,
    mouseLeaveDelay: F,
    prefixCls: N,
    overlayClassName: te,
    getTooltipContainer: b || h || i,
    ref: t,
    builtinPlacements: y(),
    overlay: _(),
    visible: z,
    onVisibleChange: v,
    onPopupAlign: g,
    overlayInnerStyle: X,
    arrowContent: /* @__PURE__ */ L("span", {
      className: "".concat(N, "-arrow-content"),
      style: U
    }),
    motion: {
      motionName: No(k, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    children: z ? Fn(I, {
      className: Y
    }) : I
  });
});
process.env.NODE_ENV !== "production" && (jo.displayName = "Tooltip");
const Lo = jo;
var wa = function(t) {
  if (!t)
    return null;
  var r = typeof t == "function";
  return r ? t() : t;
}, Wg = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}, zg = function(t) {
  var r = t.title, n = t.content, i = t.prefixCls;
  return !r && !n ? null : /* @__PURE__ */ gr(Ca, {
    children: [r && /* @__PURE__ */ L("div", {
      className: "".concat(i, "-title"),
      children: wa(r)
    }), /* @__PURE__ */ L("div", {
      className: "".concat(i, "-inner-content"),
      children: wa(n)
    })]
  });
}, Io = /* @__PURE__ */ A.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.title, i = e.content, o = e._overlay, a = e.placement, u = a === void 0 ? "top" : a, s = e.trigger, f = s === void 0 ? "hover" : s, l = e.mouseEnterDelay, d = l === void 0 ? 0.1 : l, v = e.mouseLeaveDelay, y = v === void 0 ? 0.1 : v, g = e.overlayStyle, _ = g === void 0 ? {} : g, b = Wg(e, ["prefixCls", "title", "content", "_overlay", "placement", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle"]), m = A.useContext(qt), O = m.getPrefixCls, C = O("popover", r), R = O();
  return /* @__PURE__ */ L(Lo, {
    placement: u,
    trigger: f,
    mouseEnterDelay: d,
    mouseLeaveDelay: y,
    overlayStyle: _,
    ...b,
    prefixCls: C,
    ref: t,
    overlay: o || /* @__PURE__ */ L(zg, {
      prefixCls: C,
      title: n,
      content: i
    }),
    transitionName: No(R, "zoom-big", b.transitionName)
  });
});
process.env.NODE_ENV !== "production" && (Io.displayName = "Popover");
const qg = Io;
var Ug = function(t) {
  var r = A.useContext(qt), n = r.getPrefixCls, i = r.direction, o = t.prefixCls, a = t.className, u = a === void 0 ? "" : a, s = t.maxCount, f = t.maxStyle, l = t.size, d = n("avatar-group", o), v = Le(d, de({}, "".concat(d, "-rtl"), i === "rtl"), u), y = t.children, g = t.maxPopoverPlacement, _ = g === void 0 ? "top" : g, b = t.maxPopoverTrigger, m = b === void 0 ? "hover" : b, O = Vt(y).map(function(F, w) {
    return Fn(F, {
      key: "avatar-key-".concat(w)
    });
  }), C = O.length;
  if (s && s < C) {
    var R = O.slice(0, s), E = O.slice(s, C);
    return R.push(
      /* @__PURE__ */ L(qg, {
        content: E,
        trigger: m,
        placement: _,
        overlayClassName: "".concat(d, "-popover"),
        children: /* @__PURE__ */ L(Do, {
          style: f,
          children: "+".concat(C - s)
        })
      }, "avatar-popover-key")
    ), /* @__PURE__ */ L(ga, {
      size: l,
      children: /* @__PURE__ */ L("div", {
        className: v,
        style: t.style,
        children: R
      })
    });
  }
  return /* @__PURE__ */ L(ga, {
    size: l,
    children: /* @__PURE__ */ L("div", {
      className: v,
      style: t.style,
      children: O
    })
  });
};
const Bg = Ug;
var Ho = Do;
Ho.Group = Bg;
const Yg = Ho;
var wn = { exports: {} };
(function(e, t) {
  (function(r, n) {
    {
      var i = n();
      e && e.exports && (t = e.exports = i), t.randomColor = i;
    }
  })(Tt, function() {
    var r = null, n = {};
    m();
    var i = [], o = function(w) {
      if (w = w || {}, w.seed !== void 0 && w.seed !== null && w.seed === parseInt(w.seed, 10))
        r = w.seed;
      else if (typeof w.seed == "string")
        r = E(w.seed);
      else {
        if (w.seed !== void 0 && w.seed !== null)
          throw new TypeError("The seed value must be an integer or string");
        r = null;
      }
      var P, T, h;
      if (w.count !== null && w.count !== void 0) {
        for (var p = w.count, S = [], x = 0; x < w.count; x++)
          i.push(!1);
        for (w.count = null; p > S.length; ) {
          var $ = o(w);
          r !== null && (w.seed = r), S.push($);
        }
        return w.count = p, S;
      }
      return P = a(w), T = u(P, w), h = s(P, T, w), f([P, T, h], w);
    };
    function a(w) {
      if (i.length > 0) {
        var P = F(w.hue), T = g(P), h = (P[1] - P[0]) / i.length, p = parseInt((T - P[0]) / h);
        i[p] === !0 ? p = (p + 2) % i.length : i[p] = !0;
        var S = (P[0] + p * h) % 359, x = (P[0] + (p + 1) * h) % 359;
        return P = [S, x], T = g(P), T < 0 && (T = 360 + T), T;
      } else {
        var P = d(w.hue);
        return T = g(P), T < 0 && (T = 360 + T), T;
      }
    }
    function u(w, P) {
      if (P.hue === "monochrome")
        return 0;
      if (P.luminosity === "random")
        return g([0, 100]);
      var T = v(w), h = T[0], p = T[1];
      switch (P.luminosity) {
        case "bright":
          h = 55;
          break;
        case "dark":
          h = p - 10;
          break;
        case "light":
          p = 55;
          break;
      }
      return g([h, p]);
    }
    function s(w, P, T) {
      var h = l(w, P), p = 100;
      switch (T.luminosity) {
        case "dark":
          p = h + 20;
          break;
        case "light":
          h = (p + h) / 2;
          break;
        case "random":
          h = 0, p = 100;
          break;
      }
      return g([h, p]);
    }
    function f(w, P) {
      switch (P.format) {
        case "hsvArray":
          return w;
        case "hslArray":
          return R(w);
        case "hsl":
          var T = R(w);
          return "hsl(" + T[0] + ", " + T[1] + "%, " + T[2] + "%)";
        case "hsla":
          var h = R(w), x = P.alpha || Math.random();
          return "hsla(" + h[0] + ", " + h[1] + "%, " + h[2] + "%, " + x + ")";
        case "rgbArray":
          return O(w);
        case "rgb":
          var p = O(w);
          return "rgb(" + p.join(", ") + ")";
        case "rgba":
          var S = O(w), x = P.alpha || Math.random();
          return "rgba(" + S.join(", ") + ", " + x + ")";
        default:
          return _(w);
      }
    }
    function l(w, P) {
      for (var T = y(w).lowerBounds, h = 0; h < T.length - 1; h++) {
        var p = T[h][0], S = T[h][1], x = T[h + 1][0], $ = T[h + 1][1];
        if (P >= p && P <= x) {
          var N = ($ - S) / (x - p), k = S - N * p;
          return N * P + k;
        }
      }
      return 0;
    }
    function d(w) {
      if (typeof parseInt(w) == "number") {
        var P = parseInt(w);
        if (P < 360 && P > 0)
          return [P, P];
      }
      if (typeof w == "string") {
        if (n[w]) {
          var T = n[w];
          if (T.hueRange)
            return T.hueRange;
        } else if (w.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
          var h = C(w)[0];
          return [h, h];
        }
      }
      return [0, 360];
    }
    function v(w) {
      return y(w).saturationRange;
    }
    function y(w) {
      w >= 334 && w <= 360 && (w -= 360);
      for (var P in n) {
        var T = n[P];
        if (T.hueRange && w >= T.hueRange[0] && w <= T.hueRange[1])
          return n[P];
      }
      return "Color not found";
    }
    function g(w) {
      if (r === null) {
        var P = 0.618033988749895, T = Math.random();
        return T += P, T %= 1, Math.floor(w[0] + T * (w[1] + 1 - w[0]));
      } else {
        var h = w[1] || 1, p = w[0] || 0;
        r = (r * 9301 + 49297) % 233280;
        var S = r / 233280;
        return Math.floor(p + S * (h - p));
      }
    }
    function _(w) {
      var P = O(w);
      function T(p) {
        var S = p.toString(16);
        return S.length == 1 ? "0" + S : S;
      }
      var h = "#" + T(P[0]) + T(P[1]) + T(P[2]);
      return h;
    }
    function b(w, P, T) {
      var h = T[0][0], p = T[T.length - 1][0], S = T[T.length - 1][1], x = T[0][1];
      n[w] = {
        hueRange: P,
        lowerBounds: T,
        saturationRange: [h, p],
        brightnessRange: [S, x]
      };
    }
    function m() {
      b(
        "monochrome",
        null,
        [[0, 0], [100, 0]]
      ), b(
        "red",
        [-26, 18],
        [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
      ), b(
        "orange",
        [18, 46],
        [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
      ), b(
        "yellow",
        [46, 62],
        [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
      ), b(
        "green",
        [62, 178],
        [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
      ), b(
        "blue",
        [178, 257],
        [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
      ), b(
        "purple",
        [257, 282],
        [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
      ), b(
        "pink",
        [282, 334],
        [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
      );
    }
    function O(w) {
      var P = w[0];
      P === 0 && (P = 1), P === 360 && (P = 359), P = P / 360;
      var T = w[1] / 100, h = w[2] / 100, p = Math.floor(P * 6), S = P * 6 - p, x = h * (1 - T), $ = h * (1 - S * T), N = h * (1 - (1 - S) * T), k = 256, z = 256, I = 256;
      switch (p) {
        case 0:
          k = h, z = N, I = x;
          break;
        case 1:
          k = $, z = h, I = x;
          break;
        case 2:
          k = x, z = h, I = N;
          break;
        case 3:
          k = x, z = $, I = h;
          break;
        case 4:
          k = N, z = x, I = h;
          break;
        case 5:
          k = h, z = x, I = $;
          break;
      }
      var H = [Math.floor(k * 255), Math.floor(z * 255), Math.floor(I * 255)];
      return H;
    }
    function C(w) {
      w = w.replace(/^#/, ""), w = w.length === 3 ? w.replace(/(.)/g, "$1$1") : w;
      var P = parseInt(w.substr(0, 2), 16) / 255, T = parseInt(w.substr(2, 2), 16) / 255, h = parseInt(w.substr(4, 2), 16) / 255, p = Math.max(P, T, h), S = p - Math.min(P, T, h), x = p ? S / p : 0;
      switch (p) {
        case P:
          return [60 * ((T - h) / S % 6) || 0, x, p];
        case T:
          return [60 * ((h - P) / S + 2) || 0, x, p];
        case h:
          return [60 * ((P - T) / S + 4) || 0, x, p];
      }
    }
    function R(w) {
      var P = w[0], T = w[1] / 100, h = w[2] / 100, p = (2 - T) * h;
      return [
        P,
        Math.round(T * h / (p < 1 ? p : 2 - p) * 1e4) / 100,
        p / 2 * 100
      ];
    }
    function E(w) {
      for (var P = 0, T = 0; T !== w.length && !(P >= Number.MAX_SAFE_INTEGER); T++)
        P += w.charCodeAt(T);
      return P;
    }
    function F(w) {
      if (isNaN(w)) {
        if (typeof w == "string") {
          if (n[w]) {
            var T = n[w];
            if (T.hueRange)
              return T.hueRange;
          } else if (w.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
            var h = C(w)[0];
            return y(h).hueRange;
          }
        }
      } else {
        var P = parseInt(w);
        if (P < 360 && P > 0)
          return y(w).hueRange;
      }
      return [0, 360];
    }
    return o;
  });
})(wn, wn.exports);
const Gg = wn.exports;
var Jg = function(e) {
  var t, r, n = e.user, i = e.style, o = ls(e, ["user", "style"]), a = ((t = n == null ? void 0 : n.realName) === null || t === void 0 ? void 0 : t.trim()) || ((r = n == null ? void 0 : n.userName) === null || r === void 0 ? void 0 : r.trim()) || "Unknown", u = _a(function() {
    return Gg({
      luminosity: "bright",
      seed: a,
      format: "rgb"
    });
  }, [a]);
  return L(Lo, Ft({
    title: a
  }, {
    children: L(Yg, Ft({
      style: Ft({
        background: u
      }, i)
    }, o, {
      children: a[0].toUpperCase()
    }))
  }));
};
export {
  Jg as UserAvatar
};
