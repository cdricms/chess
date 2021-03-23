// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/p5/lib/p5.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/*! p5.js v1.3.0 March 09, 2021 */
!function (e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).p5 = e();
  }
}(function () {
  return function a(o, s, l) {
    function u(t, e) {
      if (!s[t]) {
        if (!o[t]) {
          var r = "function" == typeof require && require;
          if (!e && r) return r(t, !0);
          if (h) return h(t, !0);
          var i = new Error("Cannot find module '" + t + "'");
          throw i.code = "MODULE_NOT_FOUND", i;
        }

        var n = s[t] = {
          exports: {}
        };
        o[t][0].call(n.exports, function (e) {
          return u(o[t][1][e] || e);
        }, n, n.exports, a, o, s, l);
      }

      return s[t].exports;
    }

    for (var h = "function" == typeof require && require, e = 0; e < l.length; e++) u(l[e]);

    return u;
  }({
    1: [function (e, t, r) {
      "use strict";

      r.byteLength = function (e) {
        var t = c(e),
            r = t[0],
            i = t[1];
        return 3 * (r + i) / 4 - i;
      }, r.toByteArray = function (e) {
        var t,
            r,
            i = c(e),
            n = i[0],
            a = i[1],
            o = new h(function (e, t) {
          return 3 * (e + t) / 4 - t;
        }(n, a)),
            s = 0,
            l = 0 < a ? n - 4 : n;

        for (r = 0; r < l; r += 4) t = u[e.charCodeAt(r)] << 18 | u[e.charCodeAt(r + 1)] << 12 | u[e.charCodeAt(r + 2)] << 6 | u[e.charCodeAt(r + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = 255 & t;

        2 === a && (t = u[e.charCodeAt(r)] << 2 | u[e.charCodeAt(r + 1)] >> 4, o[s++] = 255 & t);
        1 === a && (t = u[e.charCodeAt(r)] << 10 | u[e.charCodeAt(r + 1)] << 4 | u[e.charCodeAt(r + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = 255 & t);
        return o;
      }, r.fromByteArray = function (e) {
        for (var t, r = e.length, i = r % 3, n = [], a = 0, o = r - i; a < o; a += 16383) n.push(l(e, a, o < a + 16383 ? o : a + 16383));

        1 == i ? (t = e[r - 1], n.push(s[t >> 2] + s[t << 4 & 63] + "==")) : 2 == i && (t = (e[r - 2] << 8) + e[r - 1], n.push(s[t >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "="));
        return n.join("");
      };

      for (var s = [], u = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, a = i.length; n < a; ++n) s[n] = i[n], u[i.charCodeAt(n)] = n;

      function c(e) {
        var t = e.length;
        if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = e.indexOf("=");
        return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4];
      }

      function l(e, t, r) {
        for (var i, n, a = [], o = t; o < r; o += 3) i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), a.push(s[(n = i) >> 18 & 63] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n]);

        return a.join("");
      }

      u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63;
    }, {}],
    2: [function (e, t, r) {}, {}],
    3: [function (e, t, r) {
      arguments[4][2][0].apply(r, arguments);
    }, {
      dup: 2
    }],
    4: [function (N, e, F) {
      (function (c) {
        "use strict";

        var i = N("base64-js"),
            a = N("ieee754"),
            e = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
        F.Buffer = c, F.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return c.alloc(+e);
        }, F.INSPECT_MAX_BYTES = 50;
        var r = 2147483647;

        function o(e) {
          if (r < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          var t = new Uint8Array(e);
          return Object.setPrototypeOf(t, c.prototype), t;
        }

        function c(e, t, r) {
          if ("number" != typeof e) return n(e, t, r);
          if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
          return l(e);
        }

        function n(e, t, r) {
          if ("string" == typeof e) return function (e, t) {
            "string" == typeof t && "" !== t || (t = "utf8");
            if (!c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
            var r = 0 | f(e, t),
                i = o(r),
                n = i.write(e, t);
            n !== r && (i = i.slice(0, n));
            return i;
          }(e, t);
          if (ArrayBuffer.isView(e)) return u(e);
          if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
          if (A(e, ArrayBuffer) || e && A(e.buffer, ArrayBuffer)) return function (e, t, r) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            var i;
            i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
            return Object.setPrototypeOf(i, c.prototype), i;
          }(e, t, r);
          if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
          var i = e.valueOf && e.valueOf();
          if (null != i && i !== e) return c.from(i, t, r);

          var n = function (e) {
            if (c.isBuffer(e)) {
              var t = 0 | h(e.length),
                  r = o(t);
              return 0 === r.length || e.copy(r, 0, 0, t), r;
            }

            if (void 0 !== e.length) return "number" != typeof e.length || I(e.length) ? o(0) : u(e);
            if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data);
          }(e);

          if (n) return n;
          if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, r);
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        }

        function s(e) {
          if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
          if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        }

        function l(e) {
          return s(e), o(e < 0 ? 0 : 0 | h(e));
        }

        function u(e) {
          for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), i = 0; i < t; i += 1) r[i] = 255 & e[i];

          return r;
        }

        function h(e) {
          if (r <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
          return 0 | e;
        }

        function f(e, t) {
          if (c.isBuffer(e)) return e.length;
          if (ArrayBuffer.isView(e) || A(e, ArrayBuffer)) return e.byteLength;
          if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
          var r = e.length,
              i = 2 < arguments.length && !0 === arguments[2];
          if (!i && 0 === r) return 0;

          for (var n = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;

            case "utf8":
            case "utf-8":
              return R(e).length;

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;

            case "hex":
              return r >>> 1;

            case "base64":
              return D(e).length;

            default:
              if (n) return i ? -1 : R(e).length;
              t = ("" + t).toLowerCase(), n = !0;
          }
        }

        function d(e, t, r) {
          var i = e[t];
          e[t] = e[r], e[r] = i;
        }

        function p(e, t, r, i, n) {
          if (0 === e.length) return -1;

          if ("string" == typeof r ? (i = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), I(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
            if (n) return -1;
            r = e.length - 1;
          } else if (r < 0) {
            if (!n) return -1;
            r = 0;
          }

          if ("string" == typeof t && (t = c.from(t, i)), c.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, i, n);
          if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, i, n);
          throw new TypeError("val must be string, number or Buffer");
        }

        function m(e, t, r, i, n) {
          var a,
              o = 1,
              s = e.length,
              l = t.length;

          if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
            if (e.length < 2 || t.length < 2) return -1;
            s /= o = 2, l /= 2, r /= 2;
          }

          function u(e, t) {
            return 1 === o ? e[t] : e.readUInt16BE(t * o);
          }

          if (n) {
            var h = -1;

            for (a = r; a < s; a++) if (u(e, a) === u(t, -1 === h ? 0 : a - h)) {
              if (-1 === h && (h = a), a - h + 1 === l) return h * o;
            } else -1 !== h && (a -= a - h), h = -1;
          } else for (s < r + l && (r = s - l), a = r; 0 <= a; a--) {
            for (var c = !0, f = 0; f < l; f++) if (u(e, a + f) !== u(t, f)) {
              c = !1;
              break;
            }

            if (c) return a;
          }

          return -1;
        }

        function y(e, t, r, i) {
          r = Number(r) || 0;
          var n = e.length - r;
          i ? n < (i = Number(i)) && (i = n) : i = n;
          var a = t.length;
          a / 2 < i && (i = a / 2);

          for (var o = 0; o < i; ++o) {
            var s = parseInt(t.substr(2 * o, 2), 16);
            if (I(s)) return o;
            e[r + o] = s;
          }

          return o;
        }

        function v(e, t, r, i) {
          return k(function (e) {
            for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));

            return t;
          }(t), e, r, i);
        }

        function g(e, t, r, i) {
          return k(function (e, t) {
            for (var r, i, n, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), i = r >> 8, n = r % 256, a.push(n), a.push(i);

            return a;
          }(t, e.length - r), e, r, i);
        }

        function b(e, t, r) {
          return 0 === t && r === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, r));
        }

        function _(e, t, r) {
          r = Math.min(e.length, r);

          for (var i = [], n = t; n < r;) {
            var a,
                o,
                s,
                l,
                u = e[n],
                h = null,
                c = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
            if (n + c <= r) switch (c) {
              case 1:
                u < 128 && (h = u);
                break;

              case 2:
                128 == (192 & (a = e[n + 1])) && 127 < (l = (31 & u) << 6 | 63 & a) && (h = l);
                break;

              case 3:
                a = e[n + 1], o = e[n + 2], 128 == (192 & a) && 128 == (192 & o) && 2047 < (l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) && (l < 55296 || 57343 < l) && (h = l);
                break;

              case 4:
                a = e[n + 1], o = e[n + 2], s = e[n + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && l < 1114112 && (h = l);
            }
            null === h ? (h = 65533, c = 1) : 65535 < h && (h -= 65536, i.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), i.push(h), n += c;
          }

          return function (e) {
            var t = e.length;
            if (t <= x) return String.fromCharCode.apply(String, e);
            var r = "",
                i = 0;

            for (; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += x));

            return r;
          }(i);
        }

        F.kMaxLength = r, (c.TYPED_ARRAY_SUPPORT = function () {
          try {
            var e = new Uint8Array(1),
                t = {
              foo: function () {
                return 42;
              }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
          } catch (e) {
            return !1;
          }
        }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(c.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (c.isBuffer(this)) return this.buffer;
          }
        }), Object.defineProperty(c.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (c.isBuffer(this)) return this.byteOffset;
          }
        }), "undefined" != typeof Symbol && null != Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), c.poolSize = 8192, c.from = function (e, t, r) {
          return n(e, t, r);
        }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function (e, t, r) {
          return n = t, a = r, s(i = e), i <= 0 ? o(i) : void 0 !== n ? "string" == typeof a ? o(i).fill(n, a) : o(i).fill(n) : o(i);
          var i, n, a;
        }, c.allocUnsafe = function (e) {
          return l(e);
        }, c.allocUnsafeSlow = function (e) {
          return l(e);
        }, c.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== c.prototype;
        }, c.compare = function (e, t) {
          if (A(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), A(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (e === t) return 0;

          for (var r = e.length, i = t.length, n = 0, a = Math.min(r, i); n < a; ++n) if (e[n] !== t[n]) {
            r = e[n], i = t[n];
            break;
          }

          return r < i ? -1 : i < r ? 1 : 0;
        }, c.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;

            default:
              return !1;
          }
        }, c.concat = function (e, t) {
          if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var r;
          if (void 0 === t) for (r = t = 0; r < e.length; ++r) t += e[r].length;
          var i = c.allocUnsafe(t),
              n = 0;

          for (r = 0; r < e.length; ++r) {
            var a = e[r];
            if (A(a, Uint8Array) && (a = c.from(a)), !c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
            a.copy(i, n), n += a.length;
          }

          return i;
        }, c.byteLength = f, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

          for (var t = 0; t < e; t += 2) d(this, t, t + 1);

          return this;
        }, c.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

          for (var t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2);

          return this;
        }, c.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

          for (var t = 0; t < e; t += 8) d(this, t, t + 7), d(this, t + 1, t + 6), d(this, t + 2, t + 5), d(this, t + 3, t + 4);

          return this;
        }, c.prototype.toLocaleString = c.prototype.toString = function () {
          var e = this.length;
          return 0 === e ? "" : 0 === arguments.length ? _(this, 0, e) : function (e, t, r) {
            var i = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";

            for (e = e || "utf8";;) switch (e) {
              case "hex":
                return M(this, t, r);

              case "utf8":
              case "utf-8":
                return _(this, t, r);

              case "ascii":
                return w(this, t, r);

              case "latin1":
              case "binary":
                return S(this, t, r);

              case "base64":
                return b(this, t, r);

              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return T(this, t, r);

              default:
                if (i) throw new TypeError("Unknown encoding: " + e);
                e = (e + "").toLowerCase(), i = !0;
            }
          }.apply(this, arguments);
        }, c.prototype.equals = function (e) {
          if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === c.compare(this, e);
        }, c.prototype.inspect = function () {
          var e = "",
              t = F.INSPECT_MAX_BYTES;
          return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
        }, e && (c.prototype[e] = c.prototype.inspect), c.prototype.compare = function (e, t, r, i, n) {
          if (A(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
          if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
          if (n <= i && r <= t) return 0;
          if (n <= i) return -1;
          if (r <= t) return 1;
          if (this === e) return 0;

          for (var a = (n >>>= 0) - (i >>>= 0), o = (r >>>= 0) - (t >>>= 0), s = Math.min(a, o), l = this.slice(i, n), u = e.slice(t, r), h = 0; h < s; ++h) if (l[h] !== u[h]) {
            a = l[h], o = u[h];
            break;
          }

          return a < o ? -1 : o < a ? 1 : 0;
        }, c.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }, c.prototype.indexOf = function (e, t, r) {
          return p(this, e, t, r, !0);
        }, c.prototype.lastIndexOf = function (e, t, r) {
          return p(this, e, t, r, !1);
        }, c.prototype.write = function (e, t, r, i) {
          if (void 0 === t) i = "utf8", r = this.length, t = 0;else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;else {
            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
          }
          var n = this.length - t;
          if ((void 0 === r || n < r) && (r = n), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
          i = i || "utf8";

          for (var a, o, s, l, u, h, c = !1;;) switch (i) {
            case "hex":
              return y(this, e, t, r);

            case "utf8":
            case "utf-8":
              return u = t, h = r, k(R(e, (l = this).length - u), l, u, h);

            case "ascii":
              return v(this, e, t, r);

            case "latin1":
            case "binary":
              return v(this, e, t, r);

            case "base64":
              return a = this, o = t, s = r, k(D(e), a, o, s);

            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return g(this, e, t, r);

            default:
              if (c) throw new TypeError("Unknown encoding: " + i);
              i = ("" + i).toLowerCase(), c = !0;
          }
        }, c.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        var x = 4096;

        function w(e, t, r) {
          var i = "";
          r = Math.min(e.length, r);

          for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);

          return i;
        }

        function S(e, t, r) {
          var i = "";
          r = Math.min(e.length, r);

          for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);

          return i;
        }

        function M(e, t, r) {
          var i = e.length;
          (!t || t < 0) && (t = 0), (!r || r < 0 || i < r) && (r = i);

          for (var n = "", a = t; a < r; ++a) n += U[e[a]];

          return n;
        }

        function T(e, t, r) {
          for (var i = e.slice(t, r), n = "", a = 0; a < i.length; a += 2) n += String.fromCharCode(i[a] + 256 * i[a + 1]);

          return n;
        }

        function E(e, t, r) {
          if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
          if (r < e + t) throw new RangeError("Trying to access beyond buffer length");
        }

        function C(e, t, r, i, n, a) {
          if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
          if (n < t || t < a) throw new RangeError('"value" argument is out of bounds');
          if (r + i > e.length) throw new RangeError("Index out of range");
        }

        function L(e, t, r, i) {
          if (r + i > e.length) throw new RangeError("Index out of range");
          if (r < 0) throw new RangeError("Index out of range");
        }

        function O(e, t, r, i, n) {
          return t = +t, r >>>= 0, n || L(e, 0, r, 4), a.write(e, t, r, i, 23, 4), r + 4;
        }

        function P(e, t, r, i, n) {
          return t = +t, r >>>= 0, n || L(e, 0, r, 8), a.write(e, t, r, i, 52, 8), r + 8;
        }

        c.prototype.slice = function (e, t) {
          var r = this.length;
          (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), t < e && (t = e);
          var i = this.subarray(e, t);
          return Object.setPrototypeOf(i, c.prototype), i;
        }, c.prototype.readUIntLE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || E(e, t, this.length);

          for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256);) i += this[e + a] * n;

          return i;
        }, c.prototype.readUIntBE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || E(e, t, this.length);

          for (var i = this[e + --t], n = 1; 0 < t && (n *= 256);) i += this[e + --t] * n;

          return i;
        }, c.prototype.readUInt8 = function (e, t) {
          return e >>>= 0, t || E(e, 1, this.length), this[e];
        }, c.prototype.readUInt16LE = function (e, t) {
          return e >>>= 0, t || E(e, 2, this.length), this[e] | this[e + 1] << 8;
        }, c.prototype.readUInt16BE = function (e, t) {
          return e >>>= 0, t || E(e, 2, this.length), this[e] << 8 | this[e + 1];
        }, c.prototype.readUInt32LE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
        }, c.prototype.readUInt32BE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
        }, c.prototype.readIntLE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || E(e, t, this.length);

          for (var i = this[e], n = 1, a = 0; ++a < t && (n *= 256);) i += this[e + a] * n;

          return (n *= 128) <= i && (i -= Math.pow(2, 8 * t)), i;
        }, c.prototype.readIntBE = function (e, t, r) {
          e >>>= 0, t >>>= 0, r || E(e, t, this.length);

          for (var i = t, n = 1, a = this[e + --i]; 0 < i && (n *= 256);) a += this[e + --i] * n;

          return (n *= 128) <= a && (a -= Math.pow(2, 8 * t)), a;
        }, c.prototype.readInt8 = function (e, t) {
          return e >>>= 0, t || E(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
        }, c.prototype.readInt16LE = function (e, t) {
          e >>>= 0, t || E(e, 2, this.length);
          var r = this[e] | this[e + 1] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, c.prototype.readInt16BE = function (e, t) {
          e >>>= 0, t || E(e, 2, this.length);
          var r = this[e + 1] | this[e] << 8;
          return 32768 & r ? 4294901760 | r : r;
        }, c.prototype.readInt32LE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
        }, c.prototype.readInt32BE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
        }, c.prototype.readFloatLE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), a.read(this, e, !0, 23, 4);
        }, c.prototype.readFloatBE = function (e, t) {
          return e >>>= 0, t || E(e, 4, this.length), a.read(this, e, !1, 23, 4);
        }, c.prototype.readDoubleLE = function (e, t) {
          return e >>>= 0, t || E(e, 8, this.length), a.read(this, e, !0, 52, 8);
        }, c.prototype.readDoubleBE = function (e, t) {
          return e >>>= 0, t || E(e, 8, this.length), a.read(this, e, !1, 52, 8);
        }, c.prototype.writeUIntLE = function (e, t, r, i) {
          e = +e, t >>>= 0, r >>>= 0, i || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var n = 1,
              a = 0;

          for (this[t] = 255 & e; ++a < r && (n *= 256);) this[t + a] = e / n & 255;

          return t + r;
        }, c.prototype.writeUIntBE = function (e, t, r, i) {
          e = +e, t >>>= 0, r >>>= 0, i || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var n = r - 1,
              a = 1;

          for (this[t + n] = 255 & e; 0 <= --n && (a *= 256);) this[t + n] = e / a & 255;

          return t + r;
        }, c.prototype.writeUInt8 = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
        }, c.prototype.writeUInt16LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, c.prototype.writeUInt16BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, c.prototype.writeUInt32LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
        }, c.prototype.writeUInt32BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, c.prototype.writeIntLE = function (e, t, r, i) {
          if (e = +e, t >>>= 0, !i) {
            var n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }

          var a = 0,
              o = 1,
              s = 0;

          for (this[t] = 255 & e; ++a < r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;

          return t + r;
        }, c.prototype.writeIntBE = function (e, t, r, i) {
          if (e = +e, t >>>= 0, !i) {
            var n = Math.pow(2, 8 * r - 1);
            C(this, e, t, r, n - 1, -n);
          }

          var a = r - 1,
              o = 1,
              s = 0;

          for (this[t + a] = 255 & e; 0 <= --a && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;

          return t + r;
        }, c.prototype.writeInt8 = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
        }, c.prototype.writeInt16LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
        }, c.prototype.writeInt16BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
        }, c.prototype.writeInt32LE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
        }, c.prototype.writeInt32BE = function (e, t, r) {
          return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
        }, c.prototype.writeFloatLE = function (e, t, r) {
          return O(this, e, t, !0, r);
        }, c.prototype.writeFloatBE = function (e, t, r) {
          return O(this, e, t, !1, r);
        }, c.prototype.writeDoubleLE = function (e, t, r) {
          return P(this, e, t, !0, r);
        }, c.prototype.writeDoubleBE = function (e, t, r) {
          return P(this, e, t, !1, r);
        }, c.prototype.copy = function (e, t, r, i) {
          if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
          if (r = r || 0, i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < i && i < r && (i = r), i === r) return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
          var n = i - r;
          if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, i);else if (this === e && r < t && t < i) for (var a = n - 1; 0 <= a; --a) e[a + t] = this[a + r];else Uint8Array.prototype.set.call(e, this.subarray(r, i), t);
          return n;
        }, c.prototype.fill = function (e, t, r, i) {
          if ("string" == typeof e) {
            if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !c.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);

            if (1 === e.length) {
              var n = e.charCodeAt(0);
              ("utf8" === i && n < 128 || "latin1" === i) && (e = n);
            }
          } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));

          if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
          if (r <= t) return this;
          var a;
          if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof (e = e || 0)) for (a = t; a < r; ++a) this[a] = e;else {
            var o = c.isBuffer(e) ? e : c.from(e, i),
                s = o.length;
            if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');

            for (a = 0; a < r - t; ++a) this[a + t] = o[a % s];
          }
          return this;
        };
        var t = /[^+/0-9A-Za-z-_]/g;

        function R(e, t) {
          var r;
          t = t || 1 / 0;

          for (var i = e.length, n = null, a = [], o = 0; o < i; ++o) {
            if (55295 < (r = e.charCodeAt(o)) && r < 57344) {
              if (!n) {
                if (56319 < r) {
                  -1 < (t -= 3) && a.push(239, 191, 189);
                  continue;
                }

                if (o + 1 === i) {
                  -1 < (t -= 3) && a.push(239, 191, 189);
                  continue;
                }

                n = r;
                continue;
              }

              if (r < 56320) {
                -1 < (t -= 3) && a.push(239, 191, 189), n = r;
                continue;
              }

              r = 65536 + (n - 55296 << 10 | r - 56320);
            } else n && -1 < (t -= 3) && a.push(239, 191, 189);

            if (n = null, r < 128) {
              if (--t < 0) break;
              a.push(r);
            } else if (r < 2048) {
              if ((t -= 2) < 0) break;
              a.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
              if ((t -= 3) < 0) break;
              a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
              if (!(r < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
          }

          return a;
        }

        function D(e) {
          return i.toByteArray(function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(t, "")).length < 2) return "";

            for (; e.length % 4 != 0;) e += "=";

            return e;
          }(e));
        }

        function k(e, t, r, i) {
          for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];

          return n;
        }

        function A(e, t) {
          return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name;
        }

        function I(e) {
          return e != e;
        }

        var U = function () {
          for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r) for (var i = 16 * r, n = 0; n < 16; ++n) t[i + n] = e[r] + e[n];

          return t;
        }();
      }).call(this, N("buffer").Buffer);
    }, {
      "base64-js": 1,
      buffer: 4,
      ieee754: 9
    }],
    5: [function (e, t, r) {
      "use strict";

      t.exports = e("./").polyfill();
    }, {
      "./": 6
    }],
    6: [function (z, r, i) {
      (function (j, V) {
        var e, t;
        e = this, t = function () {
          "use strict";

          function l(e) {
            return "function" == typeof e;
          }

          var r = Array.isArray ? Array.isArray : function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          },
              i = 0,
              t = void 0,
              n = void 0,
              o = function (e, t) {
            f[i] = e, f[i + 1] = t, 2 === (i += 2) && (n ? n(d) : g());
          };

          var e = "undefined" != typeof window ? window : void 0,
              a = e || {},
              s = a.MutationObserver || a.WebKitMutationObserver,
              u = "undefined" == typeof self && void 0 !== j && "[object process]" === {}.toString.call(j),
              h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

          function c() {
            var e = setTimeout;
            return function () {
              return e(d, 1);
            };
          }

          var f = new Array(1e3);

          function d() {
            for (var e = 0; e < i; e += 2) {
              (0, f[e])(f[e + 1]), f[e] = void 0, f[e + 1] = void 0;
            }

            i = 0;
          }

          var p,
              m,
              y,
              v,
              g = void 0;

          function b(e, t) {
            var r = this,
                i = new this.constructor(w);
            void 0 === i[x] && U(i);
            var n = r._state;

            if (n) {
              var a = arguments[n - 1];
              o(function () {
                return A(n, i, a, r._result);
              });
            } else D(r, i, e, t);

            return i;
          }

          function _(e) {
            if (e && "object" == typeof e && e.constructor === this) return e;
            var t = new this(w);
            return L(t, e), t;
          }

          g = u ? function () {
            return j.nextTick(d);
          } : s ? (m = 0, y = new s(d), v = document.createTextNode(""), y.observe(v, {
            characterData: !0
          }), function () {
            v.data = m = ++m % 2;
          }) : h ? ((p = new MessageChannel()).port1.onmessage = d, function () {
            return p.port2.postMessage(0);
          }) : void 0 === e && "function" == typeof z ? function () {
            try {
              var e = Function("return this")().require("vertx");

              return void 0 !== (t = e.runOnLoop || e.runOnContext) ? function () {
                t(d);
              } : c();
            } catch (e) {
              return c();
            }
          }() : c();
          var x = Math.random().toString(36).substring(2);

          function w() {}

          var S = void 0,
              M = 1,
              T = 2;

          function E(e, i, n) {
            o(function (t) {
              var r = !1,
                  e = function (e, t, r, i) {
                try {
                  e.call(t, r, i);
                } catch (e) {
                  return e;
                }
              }(n, i, function (e) {
                r || (r = !0, i !== e ? L(t, e) : P(t, e));
              }, function (e) {
                r || (r = !0, R(t, e));
              }, t._label);

              !r && e && (r = !0, R(t, e));
            }, e);
          }

          function C(e, t, r) {
            var i, n;
            t.constructor === e.constructor && r === b && t.constructor.resolve === _ ? (i = e, (n = t)._state === M ? P(i, n._result) : n._state === T ? R(i, n._result) : D(n, void 0, function (e) {
              return L(i, e);
            }, function (e) {
              return R(i, e);
            })) : void 0 === r ? P(e, t) : l(r) ? E(e, t, r) : P(e, t);
          }

          function L(t, e) {
            if (t === e) R(t, new TypeError("You cannot resolve a promise with itself"));else if (n = typeof (i = e), null === i || "object" != n && "function" != n) P(t, e);else {
              var r = void 0;

              try {
                r = e.then;
              } catch (e) {
                return void R(t, e);
              }

              C(t, e, r);
            }
            var i, n;
          }

          function O(e) {
            e._onerror && e._onerror(e._result), k(e);
          }

          function P(e, t) {
            e._state === S && (e._result = t, e._state = M, 0 !== e._subscribers.length && o(k, e));
          }

          function R(e, t) {
            e._state === S && (e._state = T, e._result = t, o(O, e));
          }

          function D(e, t, r, i) {
            var n = e._subscribers,
                a = n.length;
            e._onerror = null, n[a] = t, n[a + M] = r, n[a + T] = i, 0 === a && e._state && o(k, e);
          }

          function k(e) {
            var t = e._subscribers,
                r = e._state;

            if (0 !== t.length) {
              for (var i = void 0, n = void 0, a = e._result, o = 0; o < t.length; o += 3) i = t[o], n = t[o + r], i ? A(r, i, n, a) : n(a);

              e._subscribers.length = 0;
            }
          }

          function A(e, t, r, i) {
            var n = l(r),
                a = void 0,
                o = void 0,
                s = !0;

            if (n) {
              try {
                a = r(i);
              } catch (e) {
                s = !1, o = e;
              }

              if (t === a) return void R(t, new TypeError("A promises callback cannot return that same promise."));
            } else a = i;

            t._state !== S || (n && s ? L(t, a) : !1 === s ? R(t, o) : e === M ? P(t, a) : e === T && R(t, a));
          }

          var I = 0;

          function U(e) {
            e[x] = I++, e._state = void 0, e._result = void 0, e._subscribers = [];
          }

          var N = (F.prototype._enumerate = function (e) {
            for (var t = 0; this._state === S && t < e.length; t++) this._eachEntry(e[t], t);
          }, F.prototype._eachEntry = function (t, e) {
            var r = this._instanceConstructor,
                i = r.resolve;

            if (i === _) {
              var n = void 0,
                  a = void 0,
                  o = !1;

              try {
                n = t.then;
              } catch (e) {
                o = !0, a = e;
              }

              if (n === b && t._state !== S) this._settledAt(t._state, e, t._result);else if ("function" != typeof n) this._remaining--, this._result[e] = t;else if (r === B) {
                var s = new r(w);
                o ? R(s, a) : C(s, t, n), this._willSettleAt(s, e);
              } else this._willSettleAt(new r(function (e) {
                return e(t);
              }), e);
            } else this._willSettleAt(i(t), e);
          }, F.prototype._settledAt = function (e, t, r) {
            var i = this.promise;
            i._state === S && (this._remaining--, e === T ? R(i, r) : this._result[t] = r), 0 === this._remaining && P(i, this._result);
          }, F.prototype._willSettleAt = function (e, t) {
            var r = this;
            D(e, void 0, function (e) {
              return r._settledAt(M, t, e);
            }, function (e) {
              return r._settledAt(T, t, e);
            });
          }, F);

          function F(e, t) {
            this._instanceConstructor = e, this.promise = new e(w), this.promise[x] || U(this.promise), r(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? P(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && P(this.promise, this._result))) : R(this.promise, new Error("Array Methods must be provided an Array"));
          }

          var B = (G.prototype.catch = function (e) {
            return this.then(null, e);
          }, G.prototype.finally = function (t) {
            var r = this.constructor;
            return l(t) ? this.then(function (e) {
              return r.resolve(t()).then(function () {
                return e;
              });
            }, function (e) {
              return r.resolve(t()).then(function () {
                throw e;
              });
            }) : this.then(t, t);
          }, G);

          function G(e) {
            this[x] = I++, this._result = this._state = void 0, this._subscribers = [], w !== e && ("function" != typeof e && function () {
              throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
            }(), this instanceof G ? function (t, e) {
              try {
                e(function (e) {
                  L(t, e);
                }, function (e) {
                  R(t, e);
                });
              } catch (e) {
                R(t, e);
              }
            }(this, e) : function () {
              throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            }());
          }

          return B.prototype.then = b, B.all = function (e) {
            return new N(this, e).promise;
          }, B.race = function (n) {
            var a = this;
            return r(n) ? new a(function (e, t) {
              for (var r = n.length, i = 0; i < r; i++) a.resolve(n[i]).then(e, t);
            }) : new a(function (e, t) {
              return t(new TypeError("You must pass an array to race."));
            });
          }, B.resolve = _, B.reject = function (e) {
            var t = new this(w);
            return R(t, e), t;
          }, B._setScheduler = function (e) {
            n = e;
          }, B._setAsap = function (e) {
            o = e;
          }, B._asap = o, B.polyfill = function () {
            var e = void 0;
            if (void 0 !== V) e = V;else if ("undefined" != typeof self) e = self;else try {
              e = Function("return this")();
            } catch (e) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var t = e.Promise;

            if (t) {
              var r = null;

              try {
                r = Object.prototype.toString.call(t.resolve());
              } catch (e) {}

              if ("[object Promise]" === r && !t.cast) return;
            }

            e.Promise = B;
          }, B.Promise = B;
        }, "object" == typeof i && void 0 !== r ? r.exports = t() : e.ES6Promise = t();
      }).call(this, z("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
      _process: 14
    }],
    7: [function (e, i, n) {
      !function (e, t) {
        if (0, void 0 !== n && void 0 !== i) t(n, i);else {
          var r = {
            exports: {}
          };
          t(r.exports, r), e.fetchJsonp = r.exports;
        }
      }(this, function (e, t) {
        "use strict";

        var r = 5e3,
            i = "callback";

        function c(t) {
          try {
            delete window[t];
          } catch (e) {
            window[t] = void 0;
          }
        }

        function f(e) {
          var t = document.getElementById(e);
          t && document.getElementsByTagName("head")[0].removeChild(t);
        }

        t.exports = function (a) {
          var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
              s = a,
              l = o.timeout || r,
              u = o.jsonpCallback || i,
              h = void 0;
          return new Promise(function (t, e) {
            var r = o.jsonpCallbackFunction || "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()),
                i = u + "_" + r;
            window[r] = function (e) {
              t({
                ok: !0,
                json: function () {
                  return Promise.resolve(e);
                }
              }), h && clearTimeout(h), f(i), c(r);
            }, s += -1 === s.indexOf("?") ? "?" : "&";
            var n = document.createElement("script");
            n.setAttribute("src", "" + s + u + "=" + r), o.charset && n.setAttribute("charset", o.charset), n.id = i, document.getElementsByTagName("head")[0].appendChild(n), h = setTimeout(function () {
              e(new Error("JSONP request to " + a + " timed out")), c(r), f(i), window[r] = function () {
                c(r);
              };
            }, l), n.onerror = function () {
              e(new Error("JSONP request to " + a + " failed")), c(r), f(i), h && clearTimeout(h);
            };
          });
        };
      });
    }, {}],
    8: [function (e, t, r) {
      var i = i || function (s) {
        "use strict";

        if (!(void 0 === s || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
          var e = s.document,
              l = function () {
            return s.URL || s.webkitURL || s;
          },
              u = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
              h = "download" in u,
              c = /constructor/i.test(s.HTMLElement) || s.safari,
              f = /CriOS\/[\d]+/.test(navigator.userAgent),
              d = function (e) {
            (s.setImmediate || s.setTimeout)(function () {
              throw e;
            }, 0);
          },
              p = function (e) {
            setTimeout(function () {
              "string" == typeof e ? l().revokeObjectURL(e) : e.remove();
            }, 4e4);
          },
              m = function (e) {
            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
              type: e.type
            }) : e;
          },
              i = function (e, r, t) {
            t || (e = m(e));

            function i() {
              !function (e, t, r) {
                for (var i = (t = [].concat(t)).length; i--;) {
                  var n = e["on" + t[i]];
                  if ("function" == typeof n) try {
                    n.call(e, r || e);
                  } catch (e) {
                    d(e);
                  }
                }
              }(a, "writestart progress write writeend".split(" "));
            }

            var n,
                a = this,
                o = "application/octet-stream" === e.type;
            if (a.readyState = a.INIT, h) return n = l().createObjectURL(e), void setTimeout(function () {
              var e, t;
              u.href = n, u.download = r, e = u, t = new MouseEvent("click"), e.dispatchEvent(t), i(), p(n), a.readyState = a.DONE;
            });
            !function () {
              if ((f || o && c) && s.FileReader) {
                var t = new FileReader();
                return t.onloadend = function () {
                  var e = f ? t.result : t.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                  s.open(e, "_blank") || (s.location.href = e), e = void 0, a.readyState = a.DONE, i();
                }, t.readAsDataURL(e), a.readyState = a.INIT;
              }

              (n = n || l().createObjectURL(e), o) ? s.location.href = n : s.open(n, "_blank") || (s.location.href = n);
              a.readyState = a.DONE, i(), p(n);
            }();
          },
              t = i.prototype;

          return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, r) {
            return t = t || e.name || "download", r || (e = m(e)), navigator.msSaveOrOpenBlob(e, t);
          } : (t.abort = function () {}, t.readyState = t.INIT = 0, t.WRITING = 1, t.DONE = 2, t.error = t.onwritestart = t.onprogress = t.onwrite = t.onabort = t.onerror = t.onwriteend = null, function (e, t, r) {
            return new i(e, t || e.name || "download", r);
          });
        }
      }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);

      void 0 !== t && t.exports && (t.exports.saveAs = i);
    }, {}],
    9: [function (e, t, r) {
      r.read = function (e, t, r, i, n) {
        var a,
            o,
            s = 8 * n - i - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            h = -7,
            c = r ? n - 1 : 0,
            f = r ? -1 : 1,
            d = e[t + c];

        for (c += f, a = d & (1 << -h) - 1, d >>= -h, h += s; 0 < h; a = 256 * a + e[t + c], c += f, h -= 8);

        for (o = a & (1 << -h) - 1, a >>= -h, h += i; 0 < h; o = 256 * o + e[t + c], c += f, h -= 8);

        if (0 === a) a = 1 - u;else {
          if (a === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
          o += Math.pow(2, i), a -= u;
        }
        return (d ? -1 : 1) * o * Math.pow(2, a - i);
      }, r.write = function (e, t, r, i, n, a) {
        var o,
            s,
            l,
            u = 8 * a - n - 1,
            h = (1 << u) - 1,
            c = h >> 1,
            f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = i ? 0 : a - 1,
            p = i ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;

        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), 2 <= (t += 1 <= o + c ? f / l : f * Math.pow(2, 1 - c)) * l && (o++, l /= 2), h <= o + c ? (s = 0, o = h) : 1 <= o + c ? (s = (t * l - 1) * Math.pow(2, n), o += c) : (s = t * Math.pow(2, c - 1) * Math.pow(2, n), o = 0)); 8 <= n; e[r + d] = 255 & s, d += p, s /= 256, n -= 8);

        for (o = o << n | s, u += n; 0 < u; e[r + d] = 255 & o, d += p, o /= 256, u -= 8);

        e[r + d - p] |= 128 * m;
      };
    }, {}],
    10: [function (e, t, r) {
      "use strict";

      var i;

      function y(e, t) {
        return e.b === t.b && e.a === t.a;
      }

      function v(e, t) {
        return e.b < t.b || e.b === t.b && e.a <= t.a;
      }

      function g(e, t, r) {
        var i = t.b - e.b,
            n = r.b - t.b;
        return 0 < i + n ? i < n ? t.a - e.a + i / (i + n) * (e.a - r.a) : t.a - r.a + n / (i + n) * (r.a - e.a) : 0;
      }

      function b(e, t, r) {
        var i = t.b - e.b,
            n = r.b - t.b;
        return 0 < i + n ? (t.a - r.a) * i + (t.a - e.a) * n : 0;
      }

      function _(e, t) {
        return e.a < t.a || e.a === t.a && e.b <= t.b;
      }

      function x(e, t, r) {
        var i = t.a - e.a,
            n = r.a - t.a;
        return 0 < i + n ? i < n ? t.b - e.b + i / (i + n) * (e.b - r.b) : t.b - r.b + n / (i + n) * (r.b - e.b) : 0;
      }

      function w(e, t, r) {
        var i = t.a - e.a,
            n = r.a - t.a;
        return 0 < i + n ? (t.b - r.b) * i + (t.b - e.b) * n : 0;
      }

      function S(e, t, r, i) {
        return (e = e < 0 ? 0 : e) <= (r = r < 0 ? 0 : r) ? 0 === r ? (t + i) / 2 : t + e / (e + r) * (i - t) : i + r / (e + r) * (t - i);
      }

      function o(e) {
        var t = a(e.b);
        return n(t, e.c), n(t.b, e.c), s(t, e.a), t;
      }

      function M(e, t) {
        var r = !1,
            i = !1;
        e !== t && (t.a !== e.a && (i = !0, m(t.a, e.a)), t.d !== e.d && (r = !0, l(t.d, e.d)), d(t, e), i || (n(t, e.a), e.a.c = e), r || (s(t, e.d), e.d.a = e));
      }

      function c(e) {
        var t = e.b,
            r = !1;
        e.d !== e.b.d && (r = !0, l(e.d, e.b.d)), e.c === e ? m(e.a, null) : (e.b.d.a = J(e), e.a.c = e.c, d(e, J(e)), r || s(e, e.d)), t.c === t ? (m(t.a, null), l(t.d, null)) : (e.d.a = J(t), t.a.c = t.c, d(t, J(t))), p(e);
      }

      function T(e) {
        var t = a(e),
            r = t.b;
        return d(t, e.e), t.a = e.b.a, n(r, t.a), t.d = r.d = e.d, t = t.b, d(e.b, J(e.b)), d(e.b, t), e.b.a = t.a, t.b.a.c = t.b, t.b.d = e.b.d, t.f = e.f, t.b.f = e.b.f, t;
      }

      function f(e, t) {
        var r = !1,
            i = a(e),
            n = i.b;
        return t.d !== e.d && (r = !0, l(t.d, e.d)), d(i, e.e), d(n, t), i.a = e.b.a, n.a = t.a, i.d = n.d = e.d, e.d.a = n, r || s(i, e.d), i;
      }

      function a(e) {
        var t = new K(),
            r = new K(),
            i = e.b.h;
        return (((r.h = i).b.h = t).h = e).b.h = r, t.b = r, ((t.c = t).e = r).b = t, (r.c = r).e = t;
      }

      function d(e, t) {
        var r = e.c,
            i = t.c;
        r.b.e = t, (i.b.e = e).c = i, t.c = r;
      }

      function n(e, t) {
        var r = t.f,
            i = new ee(t, r);

        for (r.e = i, r = (t.f = i).c = e; r.a = i, (r = r.c) !== e;);
      }

      function s(e, t) {
        var r = t.d,
            i = new Q(t, r);

        for (r.b = i, (t.d = i).a = e, i.c = t.c, r = e; r.d = i, (r = r.e) !== e;);
      }

      function p(e) {
        var t = e.h;
        e = e.b.h, (t.b.h = e).b.h = t;
      }

      function m(e, t) {
        for (var r = e.c, i = r; i.a = t, (i = i.c) !== r;);

        r = e.f, ((i = e.e).f = r).e = i;
      }

      function l(e, t) {
        for (var r = e.a, i = r; i.d = t, (i = i.e) !== r;);

        r = e.d, ((i = e.b).d = r).b = i;
      }

      function E(e) {
        var t = 0;
        return Math.abs(e[1]) > Math.abs(e[0]) && (t = 1), Math.abs(e[2]) > Math.abs(e[t]) && (t = 2), t;
      }

      var C = 4e150;

      function L(e, t) {
        e.f += t.f, e.b.f += t.b.f;
      }

      function u(e, t, r) {
        return e = e.a, t = t.a, r = r.a, t.b.a === e ? r.b.a === e ? v(t.a, r.a) ? b(r.b.a, t.a, r.a) <= 0 : 0 <= b(t.b.a, r.a, t.a) : b(r.b.a, e, r.a) <= 0 : r.b.a === e ? 0 <= b(t.b.a, e, t.a) : (t = g(t.b.a, e, t.a), (e = g(r.b.a, e, r.a)) <= t);
      }

      function O(e) {
        e.a.i = null;
        var t = e.e;
        t.a.c = t.c, t.c.a = t.a, e.e = null;
      }

      function h(e, t) {
        c(e.a), e.c = !1, (e.a = t).i = e;
      }

      function P(e) {
        for (var t = e.a.a; (e = fe(e)).a.a === t;);

        return e.c && (h(e, t = f(ce(e).a.b, e.a.e)), e = fe(e)), e;
      }

      function R(e, t, r) {
        var i = new he();
        return i.a = r, i.e = W(e.f, t.e, i), r.i = i;
      }

      function D(e, t) {
        switch (e.s) {
          case 100130:
            return 0 != (1 & t);

          case 100131:
            return 0 !== t;

          case 100132:
            return 0 < t;

          case 100133:
            return t < 0;

          case 100134:
            return 2 <= t || t <= -2;
        }

        return !1;
      }

      function k(e) {
        var t = e.a,
            r = t.d;
        r.c = e.d, r.a = t, O(e);
      }

      function A(e, t, r) {
        for (t = (e = t).a; e !== r;) {
          e.c = !1;
          var i = ce(e),
              n = i.a;

          if (n.a !== t.a) {
            if (!i.c) {
              k(e);
              break;
            }

            h(i, n = f(t.c.b, n.b));
          }

          t.c !== n && (M(J(n), n), M(t, n)), k(e), t = i.a, e = i;
        }

        return t;
      }

      function I(e, t, r, i, n, a) {
        for (var o = !0; R(e, t, r.b), (r = r.c) !== i;);

        for (null === n && (n = ce(t).a.b.c); (r = (i = ce(t)).a.b).a === n.a;) r.c !== n && (M(J(r), r), M(J(n), r)), i.f = t.f - r.f, i.d = D(e, i.f), t.b = !0, !o && B(e, t) && (L(r, n), O(t), c(n)), o = !1, t = i, n = r;

        t.b = !0, a && j(e, t);
      }

      function U(e, t, r, i, n) {
        var a = [t.g[0], t.g[1], t.g[2]];
        t.d = null, t.d = e.o && e.o(a, r, i, e.c) || null, null === t.d && (n ? e.n || (Z(e, 100156), e.n = !0) : t.d = r[0]);
      }

      function N(e, t, r) {
        var i = [null, null, null, null];
        i[0] = t.a.d, i[1] = r.a.d, U(e, t.a, i, [.5, .5, 0, 0], !1), M(t, r);
      }

      function F(e, t, r, i, n) {
        var a = Math.abs(t.b - e.b) + Math.abs(t.a - e.a),
            o = Math.abs(r.b - e.b) + Math.abs(r.a - e.a),
            s = n + 1;
        i[n] = .5 * o / (a + o), i[s] = .5 * a / (a + o), e.g[0] += i[n] * t.g[0] + i[s] * r.g[0], e.g[1] += i[n] * t.g[1] + i[s] * r.g[1], e.g[2] += i[n] * t.g[2] + i[s] * r.g[2];
      }

      function B(e, t) {
        var r = ce(t),
            i = t.a,
            n = r.a;

        if (v(i.a, n.a)) {
          if (0 < b(n.b.a, i.a, n.a)) return !1;

          if (y(i.a, n.a)) {
            if (i.a !== n.a) {
              r = e.e;
              var a = i.a.h;

              if (0 <= a) {
                var o = (r = r.b).d,
                    s = r.e,
                    l = r.c,
                    u = l[a];
                o[u] = o[r.a], (l[o[u]] = u) <= --r.a && (u <= 1 ? le(r, u) : v(s[o[u >> 1]], s[o[u]]) ? le(r, u) : ue(r, u)), s[a] = null, l[a] = r.b, r.b = a;
              } else for (r.c[-(a + 1)] = null; 0 < r.a && null === r.c[r.d[r.a - 1]];) --r.a;

              N(e, J(n), i);
            }
          } else T(n.b), M(i, J(n)), t.b = r.b = !0;
        } else {
          if (b(i.b.a, n.a, i.a) < 0) return !1;
          fe(t).b = t.b = !0, T(i.b), M(J(n), i);
        }

        return !0;
      }

      function G(e, t) {
        var r = ce(t),
            i = t.a,
            n = r.a,
            a = i.a,
            o = n.a,
            s = i.b.a,
            l = n.b.a,
            u = new ee();
        if (b(s, e.a, a), b(l, e.a, o), a === o || Math.min(a.a, s.a) > Math.max(o.a, l.a)) return !1;

        if (v(a, o)) {
          if (0 < b(l, a, o)) return !1;
        } else if (b(s, o, a) < 0) return !1;

        var h,
            c,
            f = s,
            d = a,
            p = l,
            m = o;
        if (v(f, d) || (h = f, f = d, d = h), v(p, m) || (h = p, p = m, m = h), v(f, p) || (h = f, f = p, p = h, h = d, d = m, m = h), v(p, d) ? v(d, m) ? ((h = g(f, p, d)) + (c = g(p, d, m)) < 0 && (h = -h, c = -c), u.b = S(h, p.b, c, d.b)) : ((h = b(f, p, d)) + (c = -b(f, m, d)) < 0 && (h = -h, c = -c), u.b = S(h, p.b, c, m.b)) : u.b = (p.b + d.b) / 2, _(f, d) || (h = f, f = d, d = h), _(p, m) || (h = p, p = m, m = h), _(f, p) || (h = f, f = p, p = h, h = d, d = m, m = h), _(p, d) ? _(d, m) ? ((h = x(f, p, d)) + (c = x(p, d, m)) < 0 && (h = -h, c = -c), u.a = S(h, p.a, c, d.a)) : ((h = w(f, p, d)) + (c = -w(f, m, d)) < 0 && (h = -h, c = -c), u.a = S(h, p.a, c, m.a)) : u.a = (p.a + d.a) / 2, v(u, e.a) && (u.b = e.a.b, u.a = e.a.a), f = v(a, o) ? a : o, v(f, u) && (u.b = f.b, u.a = f.a), y(u, a) || y(u, o)) return B(e, t), !1;

        if (!y(s, e.a) && 0 <= b(s, e.a, u) || !y(l, e.a) && b(l, e.a, u) <= 0) {
          if (l === e.a) return T(i.b), M(n.b, i), i = ce(t = P(t)).a, A(e, ce(t), r), I(e, t, J(i), i, i, !0), !0;
          if (s !== e.a) return 0 <= b(s, e.a, u) && (fe(t).b = t.b = !0, T(i.b), i.a.b = e.a.b, i.a.a = e.a.a), b(l, e.a, u) <= 0 && (t.b = r.b = !0, T(n.b), n.a.b = e.a.b, n.a.a = e.a.a), !1;

          for (T(n.b), M(i.e, J(n)), o = (a = r = t).a.b.a; (a = fe(a)).a.b.a === o;);

          return a = ce(t = a).a.b.c, r.a = J(n), I(e, t, (n = A(e, r, null)).c, i.b.c, a, !0), !0;
        }

        return T(i.b), T(n.b), M(J(n), i), i.a.b = u.b, i.a.a = u.a, i.a.h = re(e.e, i.a), i = i.a, n = [0, 0, 0, 0], u = [a.d, s.d, o.d, l.d], i.g[0] = i.g[1] = i.g[2] = 0, F(i, a, s, n, 0), F(i, o, l, n, 2), U(e, i, u, n, !0), fe(t).b = t.b = r.b = !0, !1;
      }

      function j(e, t) {
        for (var r = ce(t);;) {
          for (; r.b;) r = ce(t = r);

          if (!t.b && (null === (t = fe(r = t)) || !t.b)) break;
          t.b = !1;
          var i,
              n = t.a,
              a = r.a;
          if (i = n.b.a !== a.b.a) e: {
            var o = ce(i = t),
                s = i.a,
                l = o.a,
                u = void 0;

            if (v(s.b.a, l.b.a)) {
              if (b(s.b.a, l.b.a, s.a) < 0) {
                i = !1;
                break e;
              }

              fe(i).b = i.b = !0, u = T(s), M(l.b, u), u.d.c = i.d;
            } else {
              if (0 < b(l.b.a, s.b.a, l.a)) {
                i = !1;
                break e;
              }

              i.b = o.b = !0, u = T(l), M(s.e, l.b), u.b.d.c = i.d;
            }

            i = !0;
          }
          if (i && (r.c ? (O(r), c(a), a = (r = ce(t)).a) : t.c && (O(t), c(n), n = (t = fe(r)).a)), n.a !== a.a) if (n.b.a === a.b.a || t.c || r.c || n.b.a !== e.a && a.b.a !== e.a) B(e, t);else if (G(e, t)) break;
          n.a === a.a && n.b.a === a.b.a && (L(a, n), O(t), c(n), t = fe(r));
        }
      }

      function V(e, t) {
        for (var r = (e.a = t).c; null === r.i;) if ((r = r.c) === t.c) {
          r = e;
          var i = t;
          (o = new he()).a = i.c.b;

          for (var n = (l = r.f).a; null !== (n = n.a).b && !l.c(l.b, o, n.b););

          var a = ce(l = n.b),
              o = l.a;
          n = a.a;
          if (0 === b(o.b.a, i, o.a)) y((o = l.a).a, i) || y(o.b.a, i) || (T(o.b), l.c && (c(o.c), l.c = !1), M(i.c, o), V(r, i));else {
            var s = v(n.b.a, o.b.a) ? l : a;
            a = void 0;
            l.d || s.c ? (a = s === l ? f(i.c.b, o.e) : f(n.b.c.b, i.c).b, s.c ? h(s, a) : ((l = R(o = r, l, a)).f = fe(l).f + l.a.f, l.d = D(o, l.f)), V(r, i)) : I(r, l, i.c, i.c, null, !0);
          }
          return;
        }

        if (l = (o = ce(r = P(r.i))).a, (o = A(e, o, null)).c === l) {
          o = (l = o).c, n = ce(r), a = r.a, s = n.a;
          var l,
              u = !1;
          a.b.a !== s.b.a && G(e, r), y(a.a, e.a) && (M(J(o), a), o = ce(r = P(r)).a, A(e, ce(r), n), u = !0), y(s.a, e.a) && (M(l, J(s)), l = A(e, n, null), u = !0), u ? I(e, r, l.c, o, o, !0) : (i = v(s.a, a.a) ? J(s) : a, I(e, r, i = f(l.c.b, i), i.c, i.c, !1), i.b.i.c = !0, j(e, r));
        } else I(e, r, o.c, l, l, !0);
      }

      function z(e, t) {
        var r = new he(),
            i = o(e.b);
        i.a.b = C, i.a.a = t, i.b.a.b = -C, i.b.a.a = t, e.a = i.b.a, r.a = i, r.f = 0, r.d = !1, r.c = !1, r.h = !0, r.b = !1, i = W(i = e.f, i.a, r), r.e = i;
      }

      function H(e) {
        this.a = new q(), this.b = e, this.c = u;
      }

      function W(e, t, r) {
        for (; null !== (t = t.c).b && !e.c(e.b, t.b, r););

        return e = new q(r, t.a, t), t.a.c = e, t.a = e;
      }

      function q(e, t, r) {
        this.b = e || null, this.a = t || this, this.c = r || this;
      }

      function X() {
        this.d = 0, this.p = this.b = this.q = null, this.j = [0, 0, 0], this.s = 100130, this.n = !1, this.o = this.a = this.e = this.f = null, this.m = !1, this.c = this.r = this.i = this.k = this.l = this.h = null;
      }

      function Y(e, t) {
        if (e.d !== t) for (; e.d !== t;) if (e.d < t) switch (e.d) {
          case 0:
            Z(e, 100151), e.u(null);
            break;

          case 1:
            Z(e, 100152), e.t();
        } else switch (e.d) {
          case 2:
            Z(e, 100154), e.v();
            break;

          case 1:
            Z(e, 100153), e.w();
        }
      }

      function Z(e, t) {
        e.p && e.p(t, e.c);
      }

      function Q(e, t) {
        this.b = e || this, this.d = t || this, this.a = null, this.c = !1;
      }

      function K() {
        (this.h = this).i = this.d = this.a = this.e = this.c = this.b = null, this.f = 0;
      }

      function J(e) {
        return e.b.e;
      }

      function $() {
        this.c = new ee(), this.a = new Q(), this.b = new K(), this.d = new K(), this.b.b = this.d, this.d.b = this.b;
      }

      function ee(e, t) {
        this.e = e || this, this.f = t || this, this.d = this.c = null, this.g = [0, 0, 0], this.h = this.a = this.b = 0;
      }

      function te() {
        this.c = [], this.d = null, this.a = 0, this.e = !1, this.b = new ne();
      }

      function re(e, t) {
        if (e.e) {
          var r,
              i = e.b,
              n = ++i.a;
          return 2 * n > i.f && (i.f *= 2, i.c = ae(i.c, i.f + 1)), 0 === i.b ? r = n : (r = i.b, i.b = i.c[i.b]), i.e[r] = t, i.c[r] = n, i.d[n] = r, i.h && ue(i, n), r;
        }

        return i = e.a++, e.c[i] = t, -(i + 1);
      }

      function ie(e) {
        if (0 === e.a) return se(e.b);
        var t = e.c[e.d[e.a - 1]];
        if (0 !== e.b.a && v(oe(e.b), t)) return se(e.b);

        for (; --e.a, 0 < e.a && null === e.c[e.d[e.a - 1]];);

        return t;
      }

      function ne() {
        this.d = ae([0], 33), this.e = [null, null], this.c = [0, 0], this.a = 0, this.f = 32, this.b = 0, this.h = !1, this.d[1] = 1;
      }

      function ae(e, t) {
        for (var r = Array(t), i = 0; i < e.length; i++) r[i] = e[i];

        for (; i < t; i++) r[i] = 0;

        return r;
      }

      function oe(e) {
        return e.e[e.d[1]];
      }

      function se(e) {
        var t = e.d,
            r = e.e,
            i = e.c,
            n = t[1],
            a = r[n];
        return 0 < e.a && (t[1] = t[e.a], i[t[1]] = 1, r[n] = null, i[n] = e.b, e.b = n, 0 < --e.a && le(e, 1)), a;
      }

      function le(e, t) {
        for (var r = e.d, i = e.e, n = e.c, a = t, o = r[a];;) {
          var s = a << 1;
          s < e.a && v(i[r[s + 1]], i[r[s]]) && (s += 1);
          var l = r[s];

          if (s > e.a || v(i[o], i[l])) {
            n[r[a] = o] = a;
            break;
          }

          n[r[a] = l] = a, a = s;
        }
      }

      function ue(e, t) {
        for (var r = e.d, i = e.e, n = e.c, a = t, o = r[a];;) {
          var s = a >> 1,
              l = r[s];

          if (0 == s || v(i[l], i[o])) {
            n[r[a] = o] = a;
            break;
          }

          n[r[a] = l] = a, a = s;
        }
      }

      function he() {
        this.e = this.a = null, this.f = 0, this.c = this.b = this.h = this.d = !1;
      }

      function ce(e) {
        return e.e.c.b;
      }

      function fe(e) {
        return e.e.a.b;
      }

      (i = X.prototype).x = function () {
        Y(this, 0);
      }, i.B = function (e, t) {
        switch (e) {
          case 100142:
            return;

          case 100140:
            switch (t) {
              case 100130:
              case 100131:
              case 100132:
              case 100133:
              case 100134:
                return void (this.s = t);
            }

            break;

          case 100141:
            return void (this.m = !!t);

          default:
            return void Z(this, 100900);
        }

        Z(this, 100901);
      }, i.y = function (e) {
        switch (e) {
          case 100142:
            return 0;

          case 100140:
            return this.s;

          case 100141:
            return this.m;

          default:
            Z(this, 100900);
        }

        return !1;
      }, i.A = function (e, t, r) {
        this.j[0] = e, this.j[1] = t, this.j[2] = r;
      }, i.z = function (e, t) {
        var r = t || null;

        switch (e) {
          case 100100:
          case 100106:
            this.h = r;
            break;

          case 100104:
          case 100110:
            this.l = r;
            break;

          case 100101:
          case 100107:
            this.k = r;
            break;

          case 100102:
          case 100108:
            this.i = r;
            break;

          case 100103:
          case 100109:
            this.p = r;
            break;

          case 100105:
          case 100111:
            this.o = r;
            break;

          case 100112:
            this.r = r;
            break;

          default:
            Z(this, 100900);
        }
      }, i.C = function (e, t) {
        var r = !1,
            i = [0, 0, 0];
        Y(this, 2);

        for (var n = 0; n < 3; ++n) {
          var a = e[n];
          a < -1e150 && (a = -1e150, r = !0), 1e150 < a && (a = 1e150, r = !0), i[n] = a;
        }

        r && Z(this, 100155), null === (r = this.q) ? M(r = o(this.b), r.b) : (T(r), r = r.e), r.a.d = t, r.a.g[0] = i[0], r.a.g[1] = i[1], r.a.g[2] = i[2], r.f = 1, r.b.f = -1, this.q = r;
      }, i.u = function (e) {
        Y(this, 0), this.d = 1, this.b = new $(), this.c = e;
      }, i.t = function () {
        Y(this, 1), this.d = 2, this.q = null;
      }, i.v = function () {
        Y(this, 2), this.d = 1;
      }, i.w = function () {
        Y(this, 1), this.d = 0;
        var e,
            t,
            r = !1,
            i = [l = this.j[0], n = this.j[1], o = this.j[2]];

        if (0 === l && 0 === n && 0 === o) {
          for (var n = [-2e150, -2e150, -2e150], a = [2e150, 2e150, 2e150], o = [], s = [], l = (r = this.b.c).e; l !== r; l = l.e) for (var u = 0; u < 3; ++u) {
            var h = l.g[u];
            h < a[u] && (a[u] = h, s[u] = l), h > n[u] && (n[u] = h, o[u] = l);
          }

          if (l = 0, n[1] - a[1] > n[0] - a[0] && (l = 1), n[2] - a[2] > n[l] - a[l] && (l = 2), a[l] >= n[l]) i[0] = 0, i[1] = 0, i[2] = 1;else {
            for (n = 0, a = s[l], o = o[l], s = [0, 0, 0], a = [a.g[0] - o.g[0], a.g[1] - o.g[1], a.g[2] - o.g[2]], u = [0, 0, 0], l = r.e; l !== r; l = l.e) u[0] = l.g[0] - o.g[0], u[1] = l.g[1] - o.g[1], u[2] = l.g[2] - o.g[2], s[0] = a[1] * u[2] - a[2] * u[1], s[1] = a[2] * u[0] - a[0] * u[2], s[2] = a[0] * u[1] - a[1] * u[0], n < (h = s[0] * s[0] + s[1] * s[1] + s[2] * s[2]) && (n = h, i[0] = s[0], i[1] = s[1], i[2] = s[2]);

            n <= 0 && (i[0] = i[1] = i[2] = 0, i[E(a)] = 1);
          }
          r = !0;
        }

        for (s = E(i), l = this.b.c, n = (s + 1) % 3, o = (s + 2) % 3, s = 0 < i[s] ? 1 : -1, i = l.e; i !== l; i = i.e) i.b = i.g[n], i.a = s * i.g[o];

        if (r) {
          for (i = 0, l = (r = this.b.a).b; l !== r; l = l.b) if (!((n = l.a).f <= 0)) for (; i += (n.a.b - n.b.a.b) * (n.a.a + n.b.a.a), (n = n.e) !== l.a;);

          if (i < 0) for (r = (i = this.b.c).e; r !== i; r = r.e) r.a = -r.a;
        }

        for (this.n = !1, l = (i = this.b.b).h; l !== i; l = r) r = l.h, n = l.e, y(l.a, l.b.a) && l.e.e !== l && (N(this, n, l), c(l), n = (l = n).e), n.e === l && (n !== l && (n !== r && n !== r.b || (r = r.h), c(n)), l !== r && l !== r.b || (r = r.h), c(l));

        for (this.e = i = new te(), l = (r = this.b.c).e; l !== r; l = l.e) l.h = re(i, l);

        for (!function (e) {
          e.d = [];

          for (var t = 0; t < e.a; t++) e.d[t] = t;

          e.d.sort(function (r) {
            return function (e, t) {
              return v(r[e], r[t]) ? 1 : -1;
            };
          }(e.c)), e.e = !0, function (e) {
            for (var t = e.a; 1 <= t; --t) le(e, t);

            e.h = !0;
          }(e.b);
        }(i), this.f = new H(this), z(this, -C), z(this, C); null !== (i = ie(this.e));) {
          for (;;) {
            e: if (l = this.e, 0 === l.a) r = oe(l.b);else if (r = l.c[l.d[l.a - 1]], 0 !== l.b.a && (l = oe(l.b), v(l, r))) {
              r = l;
              break e;
            }

            if (null === r || !y(r, i)) break;
            r = ie(this.e), N(this, i.c, r.c);
          }

          V(this, i);
        }

        for (this.a = this.f.a.a.b.a.a, i = 0; null !== (r = this.f.a.a.b);) r.h || ++i, O(r);

        for (this.f = null, (i = this.e).b = null, i.d = null, this.e = i.c = null, l = (i = this.b).a.b; l !== i.a; l = r) r = l.b, (l = l.a).e.e === l && (L(l.c, l), c(l));

        if (!this.n) {
          if (i = this.b, this.m) for (l = i.b.h; l !== i.b; l = r) r = l.h, l.b.d.c !== l.d.c ? l.f = l.d.c ? 1 : -1 : c(l);else for (l = i.a.b; l !== i.a; l = r) if (r = l.b, l.c) {
            for (l = l.a; v(l.b.a, l.a); l = l.c.b);

            for (; v(l.a, l.b.a); l = l.e);

            for (n = l.c.b, o = void 0; l.e !== n;) if (v(l.b.a, n.a)) {
              for (; n.e !== l && (v((t = n.e).b.a, t.a) || b(n.a, n.b.a, n.e.b.a) <= 0);) n = (o = f(n.e, n)).b;

              n = n.c.b;
            } else {
              for (; n.e !== l && (v((e = l.c.b).a, e.b.a) || 0 <= b(l.b.a, l.a, l.c.b.a));) l = (o = f(l, l.c.b)).b;

              l = l.e;
            }

            for (; n.e.e !== l;) n = (o = f(n.e, n)).b;
          }
          if (this.h || this.i || this.k || this.l) if (this.m) {
            for (r = (i = this.b).a.b; r !== i.a; r = r.b) if (r.c) {
              for (this.h && this.h(2, this.c), l = r.a; this.k && this.k(l.a.d, this.c), (l = l.e) !== r.a;);

              this.i && this.i(this.c);
            }
          } else {
            for (i = this.b, r = !!this.l, l = !1, n = -1, o = i.a.d; o !== i.a; o = o.d) if (o.c) for (l || (this.h && this.h(4, this.c), l = !0), s = o.a; r && n !== (a = s.b.d.c ? 0 : 1) && (n = a, this.l && this.l(!!n, this.c)), this.k && this.k(s.a.d, this.c), (s = s.e) !== o.a;);

            l && this.i && this.i(this.c);
          }

          if (this.r) {
            for (l = (i = this.b).a.b; l !== i.a; l = r) if (r = l.b, !l.c) {
              for (o = (n = l.a).e, s = void 0; o = (s = o).e, (s.d = null) === s.b.d && (s.c === s ? m(s.a, null) : (s.a.c = s.c, d(s, J(s))), (a = s.b).c === a ? m(a.a, null) : (a.a.c = a.c, d(a, J(a))), p(s)), s !== n;);

              n = l.d, ((l = l.b).d = n).b = l;
            }

            return this.r(this.b), void (this.c = this.b = null);
          }
        }

        this.b = this.c = null;
      }, this.libtess = {
        GluTesselator: X,
        windingRule: {
          GLU_TESS_WINDING_ODD: 100130,
          GLU_TESS_WINDING_NONZERO: 100131,
          GLU_TESS_WINDING_POSITIVE: 100132,
          GLU_TESS_WINDING_NEGATIVE: 100133,
          GLU_TESS_WINDING_ABS_GEQ_TWO: 100134
        },
        primitiveType: {
          GL_LINE_LOOP: 2,
          GL_TRIANGLES: 4,
          GL_TRIANGLE_STRIP: 5,
          GL_TRIANGLE_FAN: 6
        },
        errorType: {
          GLU_TESS_MISSING_BEGIN_POLYGON: 100151,
          GLU_TESS_MISSING_END_POLYGON: 100153,
          GLU_TESS_MISSING_BEGIN_CONTOUR: 100152,
          GLU_TESS_MISSING_END_CONTOUR: 100154,
          GLU_TESS_COORD_TOO_LARGE: 100155,
          GLU_TESS_NEED_COMBINE_CALLBACK: 100156
        },
        gluEnum: {
          GLU_TESS_MESH: 100112,
          GLU_TESS_TOLERANCE: 100142,
          GLU_TESS_WINDING_RULE: 100140,
          GLU_TESS_BOUNDARY_ONLY: 100141,
          GLU_INVALID_ENUM: 100900,
          GLU_INVALID_VALUE: 100901,
          GLU_TESS_BEGIN: 100100,
          GLU_TESS_VERTEX: 100101,
          GLU_TESS_END: 100102,
          GLU_TESS_ERROR: 100103,
          GLU_TESS_EDGE_FLAG: 100104,
          GLU_TESS_COMBINE: 100105,
          GLU_TESS_BEGIN_DATA: 100106,
          GLU_TESS_VERTEX_DATA: 100107,
          GLU_TESS_END_DATA: 100108,
          GLU_TESS_ERROR_DATA: 100109,
          GLU_TESS_EDGE_FLAG_DATA: 100110,
          GLU_TESS_COMBINE_DATA: 100111
        }
      }, X.prototype.gluDeleteTess = X.prototype.x, X.prototype.gluTessProperty = X.prototype.B, X.prototype.gluGetTessProperty = X.prototype.y, X.prototype.gluTessNormal = X.prototype.A, X.prototype.gluTessCallback = X.prototype.z, X.prototype.gluTessVertex = X.prototype.C, X.prototype.gluTessBeginPolygon = X.prototype.u, X.prototype.gluTessBeginContour = X.prototype.t, X.prototype.gluTessEndContour = X.prototype.v, X.prototype.gluTessEndPolygon = X.prototype.w, void 0 !== t && (t.exports = this.libtess);
    }, {}],
    11: [function (e, t, r) {
      "use strict";

      function L(e, t, r, i) {
        for (var n = e[t++], a = 1 << n, o = 1 + a, s = 1 + o, l = n + 1, u = (1 << l) - 1, h = 0, c = 0, f = 0, d = e[t++], p = new Int32Array(4096), m = null;;) {
          for (; h < 16 && 0 !== d;) c |= e[t++] << h, h += 8, 1 === d ? d = e[t++] : --d;

          if (h < l) break;
          var y = c & u;

          if (c >>= l, h -= l, y != a) {
            if (y == o) break;

            for (var v = y < s ? y : m, g = 0, b = v; a < b;) b = p[b] >> 8, ++g;

            var _ = b;
            if (i < f + g + (v !== y ? 1 : 0)) return void console.log("Warning, gif stream longer than expected.");
            r[f++] = _;
            var x = f += g;

            for (v !== y && (r[f++] = _), b = v; g--;) b = p[b], r[--x] = 255 & b, b >>= 8;

            null !== m && s < 4096 && (p[s++] = m << 8 | _, u + 1 <= s && l < 12 && (++l, u = u << 1 | 1)), m = y;
          } else s = 1 + o, u = (1 << (l = n + 1)) - 1, m = null;
        }

        return f !== i && console.log("Warning, gif stream shorter than expected."), r;
      }

      try {
        r.GifWriter = function (v, e, t, r) {
          var g = 0,
              i = void 0 === (r = void 0 === r ? {} : r).loop ? null : r.loop,
              b = void 0 === r.palette ? null : r.palette;
          if (e <= 0 || t <= 0 || 65535 < e || 65535 < t) throw new Error("Width/Height invalid.");

          function _(e) {
            var t = e.length;
            if (t < 2 || 256 < t || t & t - 1) throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
            return t;
          }

          v[g++] = 71, v[g++] = 73, v[g++] = 70, v[g++] = 56, v[g++] = 57, v[g++] = 97;
          var n = 0,
              a = 0;

          if (null !== b) {
            for (var o = _(b); o >>= 1;) ++n;

            if (o = 1 << n, --n, void 0 !== r.background) {
              if (o <= (a = r.background)) throw new Error("Background index out of range.");
              if (0 === a) throw new Error("Background index explicitly passed as 0.");
            }
          }

          if (v[g++] = 255 & e, v[g++] = e >> 8 & 255, v[g++] = 255 & t, v[g++] = t >> 8 & 255, v[g++] = (null !== b ? 128 : 0) | n, v[g++] = a, v[g++] = 0, null !== b) for (var s = 0, l = b.length; s < l; ++s) {
            var u = b[s];
            v[g++] = u >> 16 & 255, v[g++] = u >> 8 & 255, v[g++] = 255 & u;
          }

          if (null !== i) {
            if (i < 0 || 65535 < i) throw new Error("Loop count invalid.");
            v[g++] = 33, v[g++] = 255, v[g++] = 11, v[g++] = 78, v[g++] = 69, v[g++] = 84, v[g++] = 83, v[g++] = 67, v[g++] = 65, v[g++] = 80, v[g++] = 69, v[g++] = 50, v[g++] = 46, v[g++] = 48, v[g++] = 3, v[g++] = 1, v[g++] = 255 & i, v[g++] = i >> 8 & 255, v[g++] = 0;
          }

          var x = !1;
          this.addFrame = function (e, t, r, i, n, a) {
            if (!0 === x && (--g, x = !1), a = void 0 === a ? {} : a, e < 0 || t < 0 || 65535 < e || 65535 < t) throw new Error("x/y invalid.");
            if (r <= 0 || i <= 0 || 65535 < r || 65535 < i) throw new Error("Width/Height invalid.");
            if (n.length < r * i) throw new Error("Not enough pixels for the frame size.");
            var o = !0,
                s = a.palette;
            if (null == s && (o = !1, s = b), null == s) throw new Error("Must supply either a local or global palette.");

            for (var l = _(s), u = 0; l >>= 1;) ++u;

            l = 1 << u;
            var h = void 0 === a.delay ? 0 : a.delay,
                c = void 0 === a.disposal ? 0 : a.disposal;
            if (c < 0 || 3 < c) throw new Error("Disposal out of range.");
            var f = !1,
                d = 0;
            if (void 0 !== a.transparent && null !== a.transparent && (f = !0, (d = a.transparent) < 0 || l <= d)) throw new Error("Transparent color index.");
            if (0 === c && !f && 0 === h || (v[g++] = 33, v[g++] = 249, v[g++] = 4, v[g++] = c << 2 | (!0 === f ? 1 : 0), v[g++] = 255 & h, v[g++] = h >> 8 & 255, v[g++] = d, v[g++] = 0), v[g++] = 44, v[g++] = 255 & e, v[g++] = e >> 8 & 255, v[g++] = 255 & t, v[g++] = t >> 8 & 255, v[g++] = 255 & r, v[g++] = r >> 8 & 255, v[g++] = 255 & i, v[g++] = i >> 8 & 255, v[g++] = !0 === o ? 128 | u - 1 : 0, !0 === o) for (var p = 0, m = s.length; p < m; ++p) {
              var y = s[p];
              v[g++] = y >> 16 & 255, v[g++] = y >> 8 & 255, v[g++] = 255 & y;
            }
            return g = function (t, r, e, i) {
              t[r++] = e;
              var n = r++,
                  a = 1 << e,
                  o = a - 1,
                  s = 1 + a,
                  l = 1 + s,
                  u = e + 1,
                  h = 0,
                  c = 0;

              function f(e) {
                for (; e <= h;) t[r++] = 255 & c, c >>= 8, h -= 8, r === n + 256 && (t[n] = 255, n = r++);
              }

              function d(e) {
                c |= e << h, h += u, f(8);
              }

              var p = i[0] & o,
                  m = {};
              d(a);

              for (var y = 1, v = i.length; y < v; ++y) {
                var g = i[y] & o,
                    b = p << 8 | g,
                    _ = m[b];

                if (void 0 === _) {
                  for (c |= p << h, h += u; 8 <= h;) t[r++] = 255 & c, c >>= 8, h -= 8, r === n + 256 && (t[n] = 255, n = r++);

                  4096 === l ? (d(a), l = 1 + s, u = e + 1, m = {}) : (1 << u <= l && ++u, m[b] = l++), p = g;
                } else p = _;
              }

              d(p), d(s), f(1), n + 1 === r ? t[n] = 0 : (t[n] = r - n - 1, t[r++] = 0);
              return r;
            }(v, g, u < 2 ? 2 : u, n);
          }, this.end = function () {
            return !1 === x && (v[g++] = 59, x = !0), g;
          }, this.getOutputBuffer = function () {
            return v;
          }, this.setOutputBuffer = function (e) {
            v = e;
          }, this.getOutputBufferPosition = function () {
            return g;
          }, this.setOutputBufferPosition = function (e) {
            g = e;
          };
        }, r.GifReader = function (x) {
          var e = 0;
          if (71 !== x[e++] || 73 !== x[e++] || 70 !== x[e++] || 56 !== x[e++] || 56 != (x[e++] + 1 & 253) || 97 !== x[e++]) throw new Error("Invalid GIF 87a/89a header.");
          var w = x[e++] | x[e++] << 8,
              t = x[e++] | x[e++] << 8,
              r = x[e++],
              i = r >> 7,
              n = 1 << 1 + (7 & r);
          x[e++], x[e++];
          var a = null,
              o = null;
          i && (a = e, e += 3 * (o = n));
          var s = !0,
              l = [],
              u = 0,
              h = null,
              c = 0,
              f = null;

          for (this.width = w, this.height = t; s && e < x.length;) switch (x[e++]) {
            case 33:
              switch (x[e++]) {
                case 255:
                  if (11 !== x[e] || 78 == x[e + 1] && 69 == x[e + 2] && 84 == x[e + 3] && 83 == x[e + 4] && 67 == x[e + 5] && 65 == x[e + 6] && 80 == x[e + 7] && 69 == x[e + 8] && 50 == x[e + 9] && 46 == x[e + 10] && 48 == x[e + 11] && 3 == x[e + 12] && 1 == x[e + 13] && 0 == x[e + 16]) e += 14, f = x[e++] | x[e++] << 8, e++;else for (e += 12;;) {
                    if (!(0 <= (C = x[e++]))) throw Error("Invalid block size");
                    if (0 === C) break;
                    e += C;
                  }
                  break;

                case 249:
                  if (4 !== x[e++] || 0 !== x[e + 4]) throw new Error("Invalid graphics extension block.");
                  var d = x[e++];
                  u = x[e++] | x[e++] << 8, h = x[e++], 0 == (1 & d) && (h = null), c = d >> 2 & 7, e++;
                  break;

                case 254:
                  for (;;) {
                    if (!(0 <= (C = x[e++]))) throw Error("Invalid block size");
                    if (0 === C) break;
                    e += C;
                  }

                  break;

                default:
                  throw new Error("Unknown graphic control label: 0x" + x[e - 1].toString(16));
              }

              break;

            case 44:
              var p = x[e++] | x[e++] << 8,
                  m = x[e++] | x[e++] << 8,
                  y = x[e++] | x[e++] << 8,
                  v = x[e++] | x[e++] << 8,
                  g = x[e++],
                  b = g >> 6 & 1,
                  _ = 1 << 1 + (7 & g),
                  S = a,
                  M = o,
                  T = !1;

              if (g >> 7) {
                T = !0;
                S = e, e += 3 * (M = _);
              }

              var E = e;

              for (e++;;) {
                var C;
                if (!(0 <= (C = x[e++]))) throw Error("Invalid block size");
                if (0 === C) break;
                e += C;
              }

              l.push({
                x: p,
                y: m,
                width: y,
                height: v,
                has_local_palette: T,
                palette_offset: S,
                palette_size: M,
                data_offset: E,
                data_length: e - E,
                transparent_index: h,
                interlaced: !!b,
                delay: u,
                disposal: c
              });
              break;

            case 59:
              s = !1;
              break;

            default:
              throw new Error("Unknown gif block: 0x" + x[e - 1].toString(16));
          }

          this.numFrames = function () {
            return l.length;
          }, this.loopCount = function () {
            return f;
          }, this.frameInfo = function (e) {
            if (e < 0 || e >= l.length) throw new Error("Frame index out of range.");
            return l[e];
          }, this.decodeAndBlitFrameBGRA = function (e, t) {
            var r = this.frameInfo(e),
                i = r.width * r.height,
                n = new Uint8Array(i);
            L(x, r.data_offset, n, i);
            var a = r.palette_offset,
                o = r.transparent_index;
            null === o && (o = 256);
            var s = r.width,
                l = w - s,
                u = s,
                h = 4 * (r.y * w + r.x),
                c = 4 * ((r.y + r.height) * w + r.x),
                f = h,
                d = 4 * l;
            !0 === r.interlaced && (d += 4 * w * 7);

            for (var p = 8, m = 0, y = n.length; m < y; ++m) {
              var v = n[m];
              if (0 === u && (u = s, c <= (f += d) && (d = 4 * l + 4 * w * (p - 1), f = h + (s + l) * (p << 1), p >>= 1)), v === o) f += 4;else {
                var g = x[a + 3 * v],
                    b = x[a + 3 * v + 1],
                    _ = x[a + 3 * v + 2];
                t[f++] = _, t[f++] = b, t[f++] = g, t[f++] = 255;
              }
              --u;
            }
          }, this.decodeAndBlitFrameRGBA = function (e, t) {
            var r = this.frameInfo(e),
                i = r.width * r.height,
                n = new Uint8Array(i);
            L(x, r.data_offset, n, i);
            var a = r.palette_offset,
                o = r.transparent_index;
            null === o && (o = 256);
            var s = r.width,
                l = w - s,
                u = s,
                h = 4 * (r.y * w + r.x),
                c = 4 * ((r.y + r.height) * w + r.x),
                f = h,
                d = 4 * l;
            !0 === r.interlaced && (d += 4 * w * 7);

            for (var p = 8, m = 0, y = n.length; m < y; ++m) {
              var v = n[m];
              if (0 === u && (u = s, c <= (f += d) && (d = 4 * l + 4 * w * (p - 1), f = h + (s + l) * (p << 1), p >>= 1)), v === o) f += 4;else {
                var g = x[a + 3 * v],
                    b = x[a + 3 * v + 1],
                    _ = x[a + 3 * v + 2];
                t[f++] = g, t[f++] = b, t[f++] = _, t[f++] = 255;
              }
              --u;
            }
          };
        };
      } catch (e) {}
    }, {}],
    12: [function (jr, t, r) {
      (function (Gr) {
        var e;
        e = this, function (T) {
          "use strict";

          function e(e) {
            if (null == this) throw TypeError();
            var t = String(this),
                r = t.length,
                i = e ? Number(e) : 0;

            if (i != i && (i = 0), !(i < 0 || r <= i)) {
              var n,
                  a = t.charCodeAt(i);
              return 55296 <= a && a <= 56319 && i + 1 < r && 56320 <= (n = t.charCodeAt(i + 1)) && n <= 57343 ? 1024 * (a - 55296) + n - 56320 + 65536 : a;
            }
          }

          var t;
          String.prototype.codePointAt || ((t = function () {
            try {
              var e = {},
                  t = Object.defineProperty,
                  r = t(e, e, e) && t;
            } catch (e) {}

            return r;
          }()) ? t(String.prototype, "codePointAt", {
            value: e,
            configurable: !0,
            writable: !0
          }) : String.prototype.codePointAt = e);
          var l = 0,
              a = -3;

          function r() {
            this.table = new Uint16Array(16), this.trans = new Uint16Array(288);
          }

          function o(e, t) {
            this.source = e, this.sourceIndex = 0, this.tag = 0, this.bitcount = 0, this.dest = t, this.destLen = 0, this.ltree = new r(), this.dtree = new r();
          }

          var s = new r(),
              u = new r(),
              h = new Uint8Array(30),
              c = new Uint16Array(30),
              f = new Uint8Array(30),
              d = new Uint16Array(30),
              p = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
              m = new r(),
              y = new Uint8Array(320);

          function i(e, t, r, i) {
            var n, a;

            for (n = 0; n < r; ++n) e[n] = 0;

            for (n = 0; n < 30 - r; ++n) e[n + r] = n / r | 0;

            for (a = i, n = 0; n < 30; ++n) t[n] = a, a += 1 << e[n];
          }

          var v = new Uint16Array(16);

          function g(e, t, r, i) {
            var n, a;

            for (n = 0; n < 16; ++n) e.table[n] = 0;

            for (n = 0; n < i; ++n) e.table[t[r + n]]++;

            for (n = a = e.table[0] = 0; n < 16; ++n) v[n] = a, a += e.table[n];

            for (n = 0; n < i; ++n) t[r + n] && (e.trans[v[t[r + n]]++] = n);
          }

          function b(e) {
            e.bitcount-- || (e.tag = e.source[e.sourceIndex++], e.bitcount = 7);
            var t = 1 & e.tag;
            return e.tag >>>= 1, t;
          }

          function _(e, t, r) {
            if (!t) return r;

            for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;

            var i = e.tag & 65535 >>> 16 - t;
            return e.tag >>>= t, e.bitcount -= t, i + r;
          }

          function x(e, t) {
            for (; e.bitcount < 24;) e.tag |= e.source[e.sourceIndex++] << e.bitcount, e.bitcount += 8;

            for (var r = 0, i = 0, n = 0, a = e.tag; i = 2 * i + (1 & a), a >>>= 1, ++n, r += t.table[n], 0 <= (i -= t.table[n]););

            return e.tag = a, e.bitcount -= n, t.trans[r + i];
          }

          function w(e, t, r) {
            var i, n, a, o, s, l;

            for (i = _(e, 5, 257), n = _(e, 5, 1), a = _(e, 4, 4), o = 0; o < 19; ++o) y[o] = 0;

            for (o = 0; o < a; ++o) {
              var u = _(e, 3, 0);

              y[p[o]] = u;
            }

            for (g(m, y, 0, 19), s = 0; s < i + n;) {
              var h = x(e, m);

              switch (h) {
                case 16:
                  var c = y[s - 1];

                  for (l = _(e, 2, 3); l; --l) y[s++] = c;

                  break;

                case 17:
                  for (l = _(e, 3, 3); l; --l) y[s++] = 0;

                  break;

                case 18:
                  for (l = _(e, 7, 11); l; --l) y[s++] = 0;

                  break;

                default:
                  y[s++] = h;
              }
            }

            g(t, y, 0, i), g(r, y, i, n);
          }

          function S(e, t, r) {
            for (;;) {
              var i,
                  n,
                  a,
                  o,
                  s = x(e, t);
              if (256 === s) return l;
              if (s < 256) e.dest[e.destLen++] = s;else for (i = _(e, h[s -= 257], c[s]), n = x(e, r), o = a = e.destLen - _(e, f[n], d[n]); o < a + i; ++o) e.dest[e.destLen++] = e.dest[o];
            }
          }

          function M(e) {
            for (var t, r; 8 < e.bitcount;) e.sourceIndex--, e.bitcount -= 8;

            if ((t = 256 * (t = e.source[e.sourceIndex + 1]) + e.source[e.sourceIndex]) !== (65535 & ~(256 * e.source[e.sourceIndex + 3] + e.source[e.sourceIndex + 2]))) return a;

            for (e.sourceIndex += 4, r = t; r; --r) e.dest[e.destLen++] = e.source[e.sourceIndex++];

            return e.bitcount = 0, l;
          }

          !function (e, t) {
            var r;

            for (r = 0; r < 7; ++r) e.table[r] = 0;

            for (e.table[7] = 24, e.table[8] = 152, e.table[9] = 112, r = 0; r < 24; ++r) e.trans[r] = 256 + r;

            for (r = 0; r < 144; ++r) e.trans[24 + r] = r;

            for (r = 0; r < 8; ++r) e.trans[168 + r] = 280 + r;

            for (r = 0; r < 112; ++r) e.trans[176 + r] = 144 + r;

            for (r = 0; r < 5; ++r) t.table[r] = 0;

            for (t.table[5] = 32, r = 0; r < 32; ++r) t.trans[r] = r;
          }(s, u), i(h, c, 4, 3), i(f, d, 2, 1), h[28] = 0, c[28] = 258;

          var n = function (e, t) {
            var r,
                i,
                n = new o(e, t);

            do {
              switch (r = b(n), _(n, 2, 0)) {
                case 0:
                  i = M(n);
                  break;

                case 1:
                  i = S(n, s, u);
                  break;

                case 2:
                  w(n, n.ltree, n.dtree), i = S(n, n.ltree, n.dtree);
                  break;

                default:
                  i = a;
              }

              if (i !== l) throw new Error("Data error");
            } while (!r);

            return n.destLen < n.dest.length ? "function" == typeof n.dest.slice ? n.dest.slice(0, n.destLen) : n.dest.subarray(0, n.destLen) : n.dest;
          };

          function E(e, t, r, i, n) {
            return Math.pow(1 - n, 3) * e + 3 * Math.pow(1 - n, 2) * n * t + 3 * (1 - n) * Math.pow(n, 2) * r + Math.pow(n, 3) * i;
          }

          function C() {
            this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
          }

          function I() {
            this.commands = [], this.fill = "black", this.stroke = null, this.strokeWidth = 1;
          }

          function L(e) {
            throw new Error(e);
          }

          function O(e, t) {
            e || L(t);
          }

          C.prototype.isEmpty = function () {
            return isNaN(this.x1) || isNaN(this.y1) || isNaN(this.x2) || isNaN(this.y2);
          }, C.prototype.addPoint = function (e, t) {
            "number" == typeof e && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = e, this.x2 = e), e < this.x1 && (this.x1 = e), e > this.x2 && (this.x2 = e)), "number" == typeof t && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = t, this.y2 = t), t < this.y1 && (this.y1 = t), t > this.y2 && (this.y2 = t));
          }, C.prototype.addX = function (e) {
            this.addPoint(e, null);
          }, C.prototype.addY = function (e) {
            this.addPoint(null, e);
          }, C.prototype.addBezier = function (e, t, r, i, n, a, o, s) {
            var l = this,
                u = [e, t],
                h = [r, i],
                c = [n, a],
                f = [o, s];
            this.addPoint(e, t), this.addPoint(o, s);

            for (var d = 0; d <= 1; d++) {
              var p = 6 * u[d] - 12 * h[d] + 6 * c[d],
                  m = -3 * u[d] + 9 * h[d] - 9 * c[d] + 3 * f[d],
                  y = 3 * h[d] - 3 * u[d];

              if (0 != m) {
                var v = Math.pow(p, 2) - 4 * y * m;

                if (!(v < 0)) {
                  var g = (-p + Math.sqrt(v)) / (2 * m);
                  0 < g && g < 1 && (0 === d && l.addX(E(u[d], h[d], c[d], f[d], g)), 1 === d && l.addY(E(u[d], h[d], c[d], f[d], g)));
                  var b = (-p - Math.sqrt(v)) / (2 * m);
                  0 < b && b < 1 && (0 === d && l.addX(E(u[d], h[d], c[d], f[d], b)), 1 === d && l.addY(E(u[d], h[d], c[d], f[d], b)));
                }
              } else {
                if (0 == p) continue;

                var _ = -y / p;

                0 < _ && _ < 1 && (0 === d && l.addX(E(u[d], h[d], c[d], f[d], _)), 1 === d && l.addY(E(u[d], h[d], c[d], f[d], _)));
              }
            }
          }, C.prototype.addQuad = function (e, t, r, i, n, a) {
            var o = e + 2 / 3 * (r - e),
                s = t + 2 / 3 * (i - t),
                l = o + 1 / 3 * (n - e),
                u = s + 1 / 3 * (a - t);
            this.addBezier(e, t, o, s, l, u, n, a);
          }, I.prototype.moveTo = function (e, t) {
            this.commands.push({
              type: "M",
              x: e,
              y: t
            });
          }, I.prototype.lineTo = function (e, t) {
            this.commands.push({
              type: "L",
              x: e,
              y: t
            });
          }, I.prototype.curveTo = I.prototype.bezierCurveTo = function (e, t, r, i, n, a) {
            this.commands.push({
              type: "C",
              x1: e,
              y1: t,
              x2: r,
              y2: i,
              x: n,
              y: a
            });
          }, I.prototype.quadTo = I.prototype.quadraticCurveTo = function (e, t, r, i) {
            this.commands.push({
              type: "Q",
              x1: e,
              y1: t,
              x: r,
              y: i
            });
          }, I.prototype.close = I.prototype.closePath = function () {
            this.commands.push({
              type: "Z"
            });
          }, I.prototype.extend = function (e) {
            if (e.commands) e = e.commands;else if (e instanceof C) {
              var t = e;
              return this.moveTo(t.x1, t.y1), this.lineTo(t.x2, t.y1), this.lineTo(t.x2, t.y2), this.lineTo(t.x1, t.y2), void this.close();
            }
            Array.prototype.push.apply(this.commands, e);
          }, I.prototype.getBoundingBox = function () {
            for (var e = new C(), t = 0, r = 0, i = 0, n = 0, a = 0; a < this.commands.length; a++) {
              var o = this.commands[a];

              switch (o.type) {
                case "M":
                  e.addPoint(o.x, o.y), t = i = o.x, r = n = o.y;
                  break;

                case "L":
                  e.addPoint(o.x, o.y), i = o.x, n = o.y;
                  break;

                case "Q":
                  e.addQuad(i, n, o.x1, o.y1, o.x, o.y), i = o.x, n = o.y;
                  break;

                case "C":
                  e.addBezier(i, n, o.x1, o.y1, o.x2, o.y2, o.x, o.y), i = o.x, n = o.y;
                  break;

                case "Z":
                  i = t, n = r;
                  break;

                default:
                  throw new Error("Unexpected path command " + o.type);
              }
            }

            return e.isEmpty() && e.addPoint(0, 0), e;
          }, I.prototype.draw = function (e) {
            e.beginPath();

            for (var t = 0; t < this.commands.length; t += 1) {
              var r = this.commands[t];
              "M" === r.type ? e.moveTo(r.x, r.y) : "L" === r.type ? e.lineTo(r.x, r.y) : "C" === r.type ? e.bezierCurveTo(r.x1, r.y1, r.x2, r.y2, r.x, r.y) : "Q" === r.type ? e.quadraticCurveTo(r.x1, r.y1, r.x, r.y) : "Z" === r.type && e.closePath();
            }

            this.fill && (e.fillStyle = this.fill, e.fill()), this.stroke && (e.strokeStyle = this.stroke, e.lineWidth = this.strokeWidth, e.stroke());
          }, I.prototype.toPathData = function (a) {
            function e() {
              for (var e, t = arguments, r = "", i = 0; i < arguments.length; i += 1) {
                var n = t[i];
                0 <= n && 0 < i && (r += " "), r += (e = n, Math.round(e) === e ? "" + Math.round(e) : e.toFixed(a));
              }

              return r;
            }

            a = void 0 !== a ? a : 2;

            for (var t = "", r = 0; r < this.commands.length; r += 1) {
              var i = this.commands[r];
              "M" === i.type ? t += "M" + e(i.x, i.y) : "L" === i.type ? t += "L" + e(i.x, i.y) : "C" === i.type ? t += "C" + e(i.x1, i.y1, i.x2, i.y2, i.x, i.y) : "Q" === i.type ? t += "Q" + e(i.x1, i.y1, i.x, i.y) : "Z" === i.type && (t += "Z");
            }

            return t;
          }, I.prototype.toSVG = function (e) {
            var t = '<path d="';
            return t += this.toPathData(e), t += '"', this.fill && "black" !== this.fill && (null === this.fill ? t += ' fill="none"' : t += ' fill="' + this.fill + '"'), this.stroke && (t += ' stroke="' + this.stroke + '" stroke-width="' + this.strokeWidth + '"'), t += "/>";
          }, I.prototype.toDOMElement = function (e) {
            var t = this.toPathData(e),
                r = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return r.setAttribute("d", t), r;
          };
          var P = {
            fail: L,
            argument: O,
            assert: O
          },
              R = 2147483648,
              D = {},
              k = {},
              A = {};

          function U(e) {
            return function () {
              return e;
            };
          }

          k.BYTE = function (e) {
            return P.argument(0 <= e && e <= 255, "Byte value should be between 0 and 255."), [e];
          }, A.BYTE = U(1), k.CHAR = function (e) {
            return [e.charCodeAt(0)];
          }, A.CHAR = U(1), k.CHARARRAY = function (e) {
            for (var t = [], r = 0; r < e.length; r += 1) t[r] = e.charCodeAt(r);

            return t;
          }, A.CHARARRAY = function (e) {
            return e.length;
          }, k.USHORT = function (e) {
            return [e >> 8 & 255, 255 & e];
          }, A.USHORT = U(2), k.SHORT = function (e) {
            return 32768 <= e && (e = -(65536 - e)), [e >> 8 & 255, 255 & e];
          }, A.SHORT = U(2), k.UINT24 = function (e) {
            return [e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.UINT24 = U(3), k.ULONG = function (e) {
            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.ULONG = U(4), k.LONG = function (e) {
            return R <= e && (e = -(2 * R - e)), [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.LONG = U(4), k.FIXED = k.ULONG, A.FIXED = A.ULONG, k.FWORD = k.SHORT, A.FWORD = A.SHORT, k.UFWORD = k.USHORT, A.UFWORD = A.USHORT, k.LONGDATETIME = function (e) {
            return [0, 0, 0, 0, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.LONGDATETIME = U(8), k.TAG = function (e) {
            return P.argument(4 === e.length, "Tag should be exactly 4 ASCII characters."), [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)];
          }, A.TAG = U(4), k.Card8 = k.BYTE, A.Card8 = A.BYTE, k.Card16 = k.USHORT, A.Card16 = A.USHORT, k.OffSize = k.BYTE, A.OffSize = A.BYTE, k.SID = k.USHORT, A.SID = A.USHORT, k.NUMBER = function (e) {
            return -107 <= e && e <= 107 ? [e + 139] : 108 <= e && e <= 1131 ? [247 + ((e -= 108) >> 8), 255 & e] : -1131 <= e && e <= -108 ? [251 + ((e = -e - 108) >> 8), 255 & e] : -32768 <= e && e <= 32767 ? k.NUMBER16(e) : k.NUMBER32(e);
          }, A.NUMBER = function (e) {
            return k.NUMBER(e).length;
          }, k.NUMBER16 = function (e) {
            return [28, e >> 8 & 255, 255 & e];
          }, A.NUMBER16 = U(3), k.NUMBER32 = function (e) {
            return [29, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e];
          }, A.NUMBER32 = U(5), k.REAL = function (e) {
            var t = e.toString(),
                r = /\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);

            if (r) {
              var i = parseFloat("1e" + ((r[2] ? +r[2] : 0) + r[1].length));
              t = (Math.round(e * i) / i).toString();
            }

            for (var n = "", a = 0, o = t.length; a < o; a += 1) {
              var s = t[a];
              n += "e" === s ? "-" === t[++a] ? "c" : "b" : "." === s ? "a" : "-" === s ? "e" : s;
            }

            for (var l = [30], u = 0, h = (n += 1 & n.length ? "f" : "ff").length; u < h; u += 2) l.push(parseInt(n.substr(u, 2), 16));

            return l;
          }, A.REAL = function (e) {
            return k.REAL(e).length;
          }, k.NAME = k.CHARARRAY, A.NAME = A.CHARARRAY, k.STRING = k.CHARARRAY, A.STRING = A.CHARARRAY, D.UTF8 = function (e, t, r) {
            for (var i = [], n = r, a = 0; a < n; a++, t += 1) i[a] = e.getUint8(t);

            return String.fromCharCode.apply(null, i);
          }, D.UTF16 = function (e, t, r) {
            for (var i = [], n = r / 2, a = 0; a < n; a++, t += 2) i[a] = e.getUint16(t);

            return String.fromCharCode.apply(null, i);
          }, k.UTF16 = function (e) {
            for (var t = [], r = 0; r < e.length; r += 1) {
              var i = e.charCodeAt(r);
              t[t.length] = i >> 8 & 255, t[t.length] = 255 & i;
            }

            return t;
          }, A.UTF16 = function (e) {
            return 2 * e.length;
          };
          var N = {
            "x-mac-croatian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ",
            "x-mac-cyrillic": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю",
            "x-mac-gaelic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ",
            "x-mac-greek": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­",
            "x-mac-icelandic": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-inuit": "ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł",
            "x-mac-ce": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",
            macintosh: "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-romanian": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",
            "x-mac-turkish": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"
          };

          D.MACSTRING = function (e, t, r, i) {
            var n = N[i];

            if (void 0 !== n) {
              for (var a = "", o = 0; o < r; o++) {
                var s = e.getUint8(t + o);
                a += s <= 127 ? String.fromCharCode(s) : n[127 & s];
              }

              return a;
            }
          };

          var F,
              B = "function" == typeof WeakMap && new WeakMap();

          function G(e) {
            return -128 <= e && e <= 127;
          }

          function j(e, t, r) {
            for (var i = 0, n = e.length; t < n && i < 64 && 0 === e[t];) ++t, ++i;

            return r.push(128 | i - 1), t;
          }

          function V(e, t, r) {
            for (var i = 0, n = e.length, a = t; a < n && i < 64;) {
              var o = e[a];
              if (!G(o)) break;
              if (0 === o && a + 1 < n && 0 === e[a + 1]) break;
              ++a, ++i;
            }

            r.push(i - 1);

            for (var s = t; s < a; ++s) r.push(e[s] + 256 & 255);

            return a;
          }

          function z(e, t, r) {
            for (var i = 0, n = e.length, a = t; a < n && i < 64;) {
              var o = e[a];
              if (0 === o) break;
              if (G(o) && a + 1 < n && G(e[a + 1])) break;
              ++a, ++i;
            }

            r.push(64 | i - 1);

            for (var s = t; s < a; ++s) {
              var l = e[s];
              r.push(l + 65536 >> 8 & 255, l + 256 & 255);
            }

            return a;
          }

          k.MACSTRING = function (e, t) {
            var r = function (e) {
              if (!F) for (var t in F = {}, N) F[t] = new String(t);
              var r = F[e];

              if (void 0 !== r) {
                if (B) {
                  var i = B.get(r);
                  if (void 0 !== i) return i;
                }

                var n = N[e];

                if (void 0 !== n) {
                  for (var a = {}, o = 0; o < n.length; o++) a[n.charCodeAt(o)] = o + 128;

                  return B && B.set(r, a), a;
                }
              }
            }(t);

            if (void 0 !== r) {
              for (var i = [], n = 0; n < e.length; n++) {
                var a = e.charCodeAt(n);
                if (128 <= a && void 0 === (a = r[a])) return;
                i[n] = a;
              }

              return i;
            }
          }, A.MACSTRING = function (e, t) {
            var r = k.MACSTRING(e, t);
            return void 0 !== r ? r.length : 0;
          }, k.VARDELTAS = function (e) {
            for (var t = 0, r = []; t < e.length;) {
              var i = e[t];
              t = 0 === i ? j(e, t, r) : -128 <= i && i <= 127 ? V(e, t, r) : z(e, t, r);
            }

            return r;
          }, k.INDEX = function (e) {
            for (var t = 1, r = [t], i = [], n = 0; n < e.length; n += 1) {
              var a = k.OBJECT(e[n]);
              Array.prototype.push.apply(i, a), t += a.length, r.push(t);
            }

            if (0 === i.length) return [0, 0];

            for (var o = [], s = 1 + Math.floor(Math.log(t) / Math.log(2)) / 8 | 0, l = [void 0, k.BYTE, k.USHORT, k.UINT24, k.ULONG][s], u = 0; u < r.length; u += 1) {
              var h = l(r[u]);
              Array.prototype.push.apply(o, h);
            }

            return Array.prototype.concat(k.Card16(e.length), k.OffSize(s), o, i);
          }, A.INDEX = function (e) {
            return k.INDEX(e).length;
          }, k.DICT = function (e) {
            for (var t = [], r = Object.keys(e), i = r.length, n = 0; n < i; n += 1) {
              var a = parseInt(r[n], 0),
                  o = e[a];
              t = (t = t.concat(k.OPERAND(o.value, o.type))).concat(k.OPERATOR(a));
            }

            return t;
          }, A.DICT = function (e) {
            return k.DICT(e).length;
          }, k.OPERATOR = function (e) {
            return e < 1200 ? [e] : [12, e - 1200];
          }, k.OPERAND = function (e, t) {
            var r = [];
            if (Array.isArray(t)) for (var i = 0; i < t.length; i += 1) P.argument(e.length === t.length, "Not enough arguments given for type" + t), r = r.concat(k.OPERAND(e[i], t[i]));else if ("SID" === t) r = r.concat(k.NUMBER(e));else if ("offset" === t) r = r.concat(k.NUMBER32(e));else if ("number" === t) r = r.concat(k.NUMBER(e));else {
              if ("real" !== t) throw new Error("Unknown operand type " + t);
              r = r.concat(k.REAL(e));
            }
            return r;
          }, k.OP = k.BYTE, A.OP = A.BYTE;
          var H = "function" == typeof WeakMap && new WeakMap();

          function W(e, t, r) {
            for (var i = 0; i < t.length; i += 1) {
              var n = t[i];
              this[n.name] = n.value;
            }

            if (this.tableName = e, this.fields = t, r) for (var a = Object.keys(r), o = 0; o < a.length; o += 1) {
              var s = a[o],
                  l = r[s];
              void 0 !== this[s] && (this[s] = l);
            }
          }

          function q(e, t, r) {
            void 0 === r && (r = t.length);
            var i = new Array(t.length + 1);
            i[0] = {
              name: e + "Count",
              type: "USHORT",
              value: r
            };

            for (var n = 0; n < t.length; n++) i[n + 1] = {
              name: e + n,
              type: "USHORT",
              value: t[n]
            };

            return i;
          }

          function X(e, t, r) {
            var i = t.length,
                n = new Array(i + 1);
            n[0] = {
              name: e + "Count",
              type: "USHORT",
              value: i
            };

            for (var a = 0; a < i; a++) n[a + 1] = {
              name: e + a,
              type: "TABLE",
              value: r(t[a], a)
            };

            return n;
          }

          function Y(e, t, r) {
            var i = t.length,
                n = [];
            n[0] = {
              name: e + "Count",
              type: "USHORT",
              value: i
            };

            for (var a = 0; a < i; a++) n = n.concat(r(t[a], a));

            return n;
          }

          function Z(e) {
            1 === e.format ? W.call(this, "coverageTable", [{
              name: "coverageFormat",
              type: "USHORT",
              value: 1
            }].concat(q("glyph", e.glyphs))) : P.assert(!1, "Can't create coverage table format 2 yet.");
          }

          function Q(e) {
            W.call(this, "scriptListTable", Y("scriptRecord", e, function (e, t) {
              var r = e.script,
                  i = r.defaultLangSys;
              return P.assert(!!i, "Unable to write GSUB: script " + e.tag + " has no default language system."), [{
                name: "scriptTag" + t,
                type: "TAG",
                value: e.tag
              }, {
                name: "script" + t,
                type: "TABLE",
                value: new W("scriptTable", [{
                  name: "defaultLangSys",
                  type: "TABLE",
                  value: new W("defaultLangSys", [{
                    name: "lookupOrder",
                    type: "USHORT",
                    value: 0
                  }, {
                    name: "reqFeatureIndex",
                    type: "USHORT",
                    value: i.reqFeatureIndex
                  }].concat(q("featureIndex", i.featureIndexes)))
                }].concat(Y("langSys", r.langSysRecords, function (e, t) {
                  var r = e.langSys;
                  return [{
                    name: "langSysTag" + t,
                    type: "TAG",
                    value: e.tag
                  }, {
                    name: "langSys" + t,
                    type: "TABLE",
                    value: new W("langSys", [{
                      name: "lookupOrder",
                      type: "USHORT",
                      value: 0
                    }, {
                      name: "reqFeatureIndex",
                      type: "USHORT",
                      value: r.reqFeatureIndex
                    }].concat(q("featureIndex", r.featureIndexes)))
                  }];
                })))
              }];
            }));
          }

          function K(e) {
            W.call(this, "featureListTable", Y("featureRecord", e, function (e, t) {
              var r = e.feature;
              return [{
                name: "featureTag" + t,
                type: "TAG",
                value: e.tag
              }, {
                name: "feature" + t,
                type: "TABLE",
                value: new W("featureTable", [{
                  name: "featureParams",
                  type: "USHORT",
                  value: r.featureParams
                }].concat(q("lookupListIndex", r.lookupListIndexes)))
              }];
            }));
          }

          function J(e, r) {
            W.call(this, "lookupListTable", X("lookup", e, function (e) {
              var t = r[e.lookupType];
              return P.assert(!!t, "Unable to write GSUB lookup type " + e.lookupType + " tables."), new W("lookupTable", [{
                name: "lookupType",
                type: "USHORT",
                value: e.lookupType
              }, {
                name: "lookupFlag",
                type: "USHORT",
                value: e.lookupFlag
              }].concat(X("subtable", e.subtables, t)));
            }));
          }

          k.CHARSTRING = function (e) {
            if (H) {
              var t = H.get(e);
              if (void 0 !== t) return t;
            }

            for (var r = [], i = e.length, n = 0; n < i; n += 1) {
              var a = e[n];
              r = r.concat(k[a.type](a.value));
            }

            return H && H.set(e, r), r;
          }, A.CHARSTRING = function (e) {
            return k.CHARSTRING(e).length;
          }, k.OBJECT = function (e) {
            var t = k[e.type];
            return P.argument(void 0 !== t, "No encoding function for type " + e.type), t(e.value);
          }, A.OBJECT = function (e) {
            var t = A[e.type];
            return P.argument(void 0 !== t, "No sizeOf function for type " + e.type), t(e.value);
          }, k.TABLE = function (e) {
            for (var t = [], r = e.fields.length, i = [], n = [], a = 0; a < r; a += 1) {
              var o = e.fields[a],
                  s = k[o.type];
              P.argument(void 0 !== s, "No encoding function for field type " + o.type + " (" + o.name + ")");
              var l = e[o.name];
              void 0 === l && (l = o.value);
              var u = s(l);
              "TABLE" === o.type ? (n.push(t.length), t = t.concat([0, 0]), i.push(u)) : t = t.concat(u);
            }

            for (var h = 0; h < i.length; h += 1) {
              var c = n[h],
                  f = t.length;
              P.argument(f < 65536, "Table " + e.tableName + " too big."), t[c] = f >> 8, t[c + 1] = 255 & f, t = t.concat(i[h]);
            }

            return t;
          }, A.TABLE = function (e) {
            for (var t = 0, r = e.fields.length, i = 0; i < r; i += 1) {
              var n = e.fields[i],
                  a = A[n.type];
              P.argument(void 0 !== a, "No sizeOf function for field type " + n.type + " (" + n.name + ")");
              var o = e[n.name];
              void 0 === o && (o = n.value), t += a(o), "TABLE" === n.type && (t += 2);
            }

            return t;
          }, k.RECORD = k.TABLE, A.RECORD = A.TABLE, k.LITERAL = function (e) {
            return e;
          }, A.LITERAL = function (e) {
            return e.length;
          }, W.prototype.encode = function () {
            return k.TABLE(this);
          }, W.prototype.sizeOf = function () {
            return A.TABLE(this);
          };
          var $ = {
            Table: W,
            Record: W,
            Coverage: (Z.prototype = Object.create(W.prototype)).constructor = Z,
            ScriptList: (Q.prototype = Object.create(W.prototype)).constructor = Q,
            FeatureList: (K.prototype = Object.create(W.prototype)).constructor = K,
            LookupList: (J.prototype = Object.create(W.prototype)).constructor = J,
            ushortList: q,
            tableList: X,
            recordList: Y
          };

          function ee(e, t) {
            return e.getUint8(t);
          }

          function te(e, t) {
            return e.getUint16(t, !1);
          }

          function re(e, t) {
            return e.getUint32(t, !1);
          }

          function ie(e, t) {
            return e.getInt16(t, !1) + e.getUint16(t + 2, !1) / 65535;
          }

          var ne = {
            byte: 1,
            uShort: 2,
            short: 2,
            uLong: 4,
            fixed: 4,
            longDateTime: 8,
            tag: 4
          };

          function ae(e, t) {
            this.data = e, this.offset = t, this.relativeOffset = 0;
          }

          ae.prototype.parseByte = function () {
            var e = this.data.getUint8(this.offset + this.relativeOffset);
            return this.relativeOffset += 1, e;
          }, ae.prototype.parseChar = function () {
            var e = this.data.getInt8(this.offset + this.relativeOffset);
            return this.relativeOffset += 1, e;
          }, ae.prototype.parseCard8 = ae.prototype.parseByte, ae.prototype.parseCard16 = ae.prototype.parseUShort = function () {
            var e = this.data.getUint16(this.offset + this.relativeOffset);
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseSID = ae.prototype.parseUShort, ae.prototype.parseOffset16 = ae.prototype.parseUShort, ae.prototype.parseShort = function () {
            var e = this.data.getInt16(this.offset + this.relativeOffset);
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseF2Dot14 = function () {
            var e = this.data.getInt16(this.offset + this.relativeOffset) / 16384;
            return this.relativeOffset += 2, e;
          }, ae.prototype.parseOffset32 = ae.prototype.parseULong = function () {
            var e = re(this.data, this.offset + this.relativeOffset);
            return this.relativeOffset += 4, e;
          }, ae.prototype.parseFixed = function () {
            var e = ie(this.data, this.offset + this.relativeOffset);
            return this.relativeOffset += 4, e;
          }, ae.prototype.parseString = function (e) {
            var t = this.data,
                r = this.offset + this.relativeOffset,
                i = "";
            this.relativeOffset += e;

            for (var n = 0; n < e; n++) i += String.fromCharCode(t.getUint8(r + n));

            return i;
          }, ae.prototype.parseTag = function () {
            return this.parseString(4);
          }, ae.prototype.parseLongDateTime = function () {
            var e = re(this.data, this.offset + this.relativeOffset + 4);
            return e -= 2082844800, this.relativeOffset += 8, e;
          }, ae.prototype.parseVersion = function (e) {
            var t = te(this.data, this.offset + this.relativeOffset),
                r = te(this.data, this.offset + this.relativeOffset + 2);
            return this.relativeOffset += 4, void 0 === e && (e = 4096), t + r / e / 10;
          }, ae.prototype.skip = function (e, t) {
            void 0 === t && (t = 1), this.relativeOffset += ne[e] * t;
          }, ae.prototype.parseULongList = function (e) {
            void 0 === e && (e = this.parseULong());

            for (var t = new Array(e), r = this.data, i = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint32(i), i += 4;

            return this.relativeOffset += 4 * e, t;
          }, ae.prototype.parseOffset16List = ae.prototype.parseUShortList = function (e) {
            void 0 === e && (e = this.parseUShort());

            for (var t = new Array(e), r = this.data, i = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint16(i), i += 2;

            return this.relativeOffset += 2 * e, t;
          }, ae.prototype.parseShortList = function (e) {
            for (var t = new Array(e), r = this.data, i = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getInt16(i), i += 2;

            return this.relativeOffset += 2 * e, t;
          }, ae.prototype.parseByteList = function (e) {
            for (var t = new Array(e), r = this.data, i = this.offset + this.relativeOffset, n = 0; n < e; n++) t[n] = r.getUint8(i++);

            return this.relativeOffset += e, t;
          }, ae.prototype.parseList = function (e, t) {
            t || (t = e, e = this.parseUShort());

            for (var r = new Array(e), i = 0; i < e; i++) r[i] = t.call(this);

            return r;
          }, ae.prototype.parseList32 = function (e, t) {
            t || (t = e, e = this.parseULong());

            for (var r = new Array(e), i = 0; i < e; i++) r[i] = t.call(this);

            return r;
          }, ae.prototype.parseRecordList = function (e, t) {
            t || (t = e, e = this.parseUShort());

            for (var r = new Array(e), i = Object.keys(t), n = 0; n < e; n++) {
              for (var a = {}, o = 0; o < i.length; o++) {
                var s = i[o],
                    l = t[s];
                a[s] = l.call(this);
              }

              r[n] = a;
            }

            return r;
          }, ae.prototype.parseRecordList32 = function (e, t) {
            t || (t = e, e = this.parseULong());

            for (var r = new Array(e), i = Object.keys(t), n = 0; n < e; n++) {
              for (var a = {}, o = 0; o < i.length; o++) {
                var s = i[o],
                    l = t[s];
                a[s] = l.call(this);
              }

              r[n] = a;
            }

            return r;
          }, ae.prototype.parseStruct = function (e) {
            if ("function" == typeof e) return e.call(this);

            for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) {
              var n = t[i],
                  a = e[n];
              r[n] = a.call(this);
            }

            return r;
          }, ae.prototype.parseValueRecord = function (e) {
            if (void 0 === e && (e = this.parseUShort()), 0 !== e) {
              var t = {};
              return 1 & e && (t.xPlacement = this.parseShort()), 2 & e && (t.yPlacement = this.parseShort()), 4 & e && (t.xAdvance = this.parseShort()), 8 & e && (t.yAdvance = this.parseShort()), 16 & e && (t.xPlaDevice = void 0, this.parseShort()), 32 & e && (t.yPlaDevice = void 0, this.parseShort()), 64 & e && (t.xAdvDevice = void 0, this.parseShort()), 128 & e && (t.yAdvDevice = void 0, this.parseShort()), t;
            }
          }, ae.prototype.parseValueRecordList = function () {
            for (var e = this.parseUShort(), t = this.parseUShort(), r = new Array(t), i = 0; i < t; i++) r[i] = this.parseValueRecord(e);

            return r;
          }, ae.prototype.parsePointer = function (e) {
            var t = this.parseOffset16();
            if (0 < t) return new ae(this.data, this.offset + t).parseStruct(e);
          }, ae.prototype.parsePointer32 = function (e) {
            var t = this.parseOffset32();
            if (0 < t) return new ae(this.data, this.offset + t).parseStruct(e);
          }, ae.prototype.parseListOfLists = function (e) {
            for (var t = this, r = this.parseOffset16List(), i = r.length, n = this.relativeOffset, a = new Array(i), o = 0; o < i; o++) {
              var s = r[o];
              if (0 !== s) {
                if (t.relativeOffset = s, e) {
                  for (var l = t.parseOffset16List(), u = new Array(l.length), h = 0; h < l.length; h++) t.relativeOffset = s + l[h], u[h] = e.call(t);

                  a[o] = u;
                } else a[o] = t.parseUShortList();
              } else a[o] = void 0;
            }

            return this.relativeOffset = n, a;
          }, ae.prototype.parseCoverage = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort(),
                r = this.parseUShort();
            if (1 === t) return {
              format: 1,
              glyphs: this.parseUShortList(r)
            };
            if (2 !== t) throw new Error("0x" + e.toString(16) + ": Coverage format must be 1 or 2.");

            for (var i = new Array(r), n = 0; n < r; n++) i[n] = {
              start: this.parseUShort(),
              end: this.parseUShort(),
              index: this.parseUShort()
            };

            return {
              format: 2,
              ranges: i
            };
          }, ae.prototype.parseClassDef = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            if (1 === t) return {
              format: 1,
              startGlyph: this.parseUShort(),
              classes: this.parseUShortList()
            };
            if (2 === t) return {
              format: 2,
              ranges: this.parseRecordList({
                start: ae.uShort,
                end: ae.uShort,
                classId: ae.uShort
              })
            };
            throw new Error("0x" + e.toString(16) + ": ClassDef format must be 1 or 2.");
          }, ae.list = function (e, t) {
            return function () {
              return this.parseList(e, t);
            };
          }, ae.list32 = function (e, t) {
            return function () {
              return this.parseList32(e, t);
            };
          }, ae.recordList = function (e, t) {
            return function () {
              return this.parseRecordList(e, t);
            };
          }, ae.recordList32 = function (e, t) {
            return function () {
              return this.parseRecordList32(e, t);
            };
          }, ae.pointer = function (e) {
            return function () {
              return this.parsePointer(e);
            };
          }, ae.pointer32 = function (e) {
            return function () {
              return this.parsePointer32(e);
            };
          }, ae.tag = ae.prototype.parseTag, ae.byte = ae.prototype.parseByte, ae.uShort = ae.offset16 = ae.prototype.parseUShort, ae.uShortList = ae.prototype.parseUShortList, ae.uLong = ae.offset32 = ae.prototype.parseULong, ae.uLongList = ae.prototype.parseULongList, ae.struct = ae.prototype.parseStruct, ae.coverage = ae.prototype.parseCoverage, ae.classDef = ae.prototype.parseClassDef;
          var oe = {
            reserved: ae.uShort,
            reqFeatureIndex: ae.uShort,
            featureIndexes: ae.uShortList
          };
          ae.prototype.parseScriptList = function () {
            return this.parsePointer(ae.recordList({
              tag: ae.tag,
              script: ae.pointer({
                defaultLangSys: ae.pointer(oe),
                langSysRecords: ae.recordList({
                  tag: ae.tag,
                  langSys: ae.pointer(oe)
                })
              })
            })) || [];
          }, ae.prototype.parseFeatureList = function () {
            return this.parsePointer(ae.recordList({
              tag: ae.tag,
              feature: ae.pointer({
                featureParams: ae.offset16,
                lookupListIndexes: ae.uShortList
              })
            })) || [];
          }, ae.prototype.parseLookupList = function (i) {
            return this.parsePointer(ae.list(ae.pointer(function () {
              var e = this.parseUShort();
              P.argument(1 <= e && e <= 9, "GPOS/GSUB lookup type " + e + " unknown.");
              var t = this.parseUShort(),
                  r = 16 & t;
              return {
                lookupType: e,
                lookupFlag: t,
                subtables: this.parseList(ae.pointer(i[e])),
                markFilteringSet: r ? this.parseUShort() : void 0
              };
            }))) || [];
          }, ae.prototype.parseFeatureVariationsList = function () {
            return this.parsePointer32(function () {
              var e = this.parseUShort(),
                  t = this.parseUShort();
              return P.argument(1 === e && t < 1, "GPOS/GSUB feature variations table unknown."), this.parseRecordList32({
                conditionSetOffset: ae.offset32,
                featureTableSubstitutionOffset: ae.offset32
              });
            }) || [];
          };
          var se = {
            getByte: ee,
            getCard8: ee,
            getUShort: te,
            getCard16: te,
            getShort: function (e, t) {
              return e.getInt16(t, !1);
            },
            getULong: re,
            getFixed: ie,
            getTag: function (e, t) {
              for (var r = "", i = t; i < t + 4; i += 1) r += String.fromCharCode(e.getInt8(i));

              return r;
            },
            getOffset: function (e, t, r) {
              for (var i = 0, n = 0; n < r; n += 1) i <<= 8, i += e.getUint8(t + n);

              return i;
            },
            getBytes: function (e, t, r) {
              for (var i = [], n = t; n < r; n += 1) i.push(e.getUint8(n));

              return i;
            },
            bytesToString: function (e) {
              for (var t = "", r = 0; r < e.length; r += 1) t += String.fromCharCode(e[r]);

              return t;
            },
            Parser: ae
          };
          var le = {
            parse: function (e, t) {
              var r = {};
              r.version = se.getUShort(e, t), P.argument(0 === r.version, "cmap table version should be 0."), r.numTables = se.getUShort(e, t + 2);

              for (var i = -1, n = r.numTables - 1; 0 <= n; --n) {
                var a = se.getUShort(e, t + 4 + 8 * n),
                    o = se.getUShort(e, t + 4 + 8 * n + 2);

                if (3 === a && (0 === o || 1 === o || 10 === o) || 0 === a && (0 === o || 1 === o || 2 === o || 3 === o || 4 === o)) {
                  i = se.getULong(e, t + 4 + 8 * n + 4);
                  break;
                }
              }

              if (-1 === i) throw new Error("No valid cmap sub-tables found.");
              var s = new se.Parser(e, t + i);
              if (r.format = s.parseUShort(), 12 === r.format) !function (e, t) {
                var r;
                t.parseUShort(), e.length = t.parseULong(), e.language = t.parseULong(), e.groupCount = r = t.parseULong(), e.glyphIndexMap = {};

                for (var i = 0; i < r; i += 1) for (var n = t.parseULong(), a = t.parseULong(), o = t.parseULong(), s = n; s <= a; s += 1) e.glyphIndexMap[s] = o, o++;
              }(r, s);else {
                if (4 !== r.format) throw new Error("Only format 4 and 12 cmap tables are supported (found format " + r.format + ").");
                !function (e, t, r, i, n) {
                  var a;
                  e.length = t.parseUShort(), e.language = t.parseUShort(), e.segCount = a = t.parseUShort() >> 1, t.skip("uShort", 3), e.glyphIndexMap = {};

                  for (var o = new se.Parser(r, i + n + 14), s = new se.Parser(r, i + n + 16 + 2 * a), l = new se.Parser(r, i + n + 16 + 4 * a), u = new se.Parser(r, i + n + 16 + 6 * a), h = i + n + 16 + 8 * a, c = 0; c < a - 1; c += 1) for (var f = void 0, d = o.parseUShort(), p = s.parseUShort(), m = l.parseShort(), y = u.parseUShort(), v = p; v <= d; v += 1) 0 !== y ? (h = u.offset + u.relativeOffset - 2, h += y, h += 2 * (v - p), 0 !== (f = se.getUShort(r, h)) && (f = f + m & 65535)) : f = v + m & 65535, e.glyphIndexMap[v] = f;
                }(r, s, e, t, i);
              }
              return r;
            },
            make: function (e) {
              var t,
                  r = !0;

              for (t = e.length - 1; 0 < t; --t) {
                if (65535 < e.get(t).unicode) {
                  console.log("Adding CMAP format 12 (needed!)"), r = !1;
                  break;
                }
              }

              var i = [{
                name: "version",
                type: "USHORT",
                value: 0
              }, {
                name: "numTables",
                type: "USHORT",
                value: r ? 1 : 2
              }, {
                name: "platformID",
                type: "USHORT",
                value: 3
              }, {
                name: "encodingID",
                type: "USHORT",
                value: 1
              }, {
                name: "offset",
                type: "ULONG",
                value: r ? 12 : 20
              }];
              r || (i = i.concat([{
                name: "cmap12PlatformID",
                type: "USHORT",
                value: 3
              }, {
                name: "cmap12EncodingID",
                type: "USHORT",
                value: 10
              }, {
                name: "cmap12Offset",
                type: "ULONG",
                value: 0
              }])), i = i.concat([{
                name: "format",
                type: "USHORT",
                value: 4
              }, {
                name: "cmap4Length",
                type: "USHORT",
                value: 0
              }, {
                name: "language",
                type: "USHORT",
                value: 0
              }, {
                name: "segCountX2",
                type: "USHORT",
                value: 0
              }, {
                name: "searchRange",
                type: "USHORT",
                value: 0
              }, {
                name: "entrySelector",
                type: "USHORT",
                value: 0
              }, {
                name: "rangeShift",
                type: "USHORT",
                value: 0
              }]);
              var n,
                  a,
                  o,
                  s = new $.Table("cmap", i);

              for (s.segments = [], t = 0; t < e.length; t += 1) {
                for (var l = e.get(t), u = 0; u < l.unicodes.length; u += 1) n = s, a = l.unicodes[u], o = t, n.segments.push({
                  end: a,
                  start: a,
                  delta: -(a - o),
                  offset: 0,
                  glyphIndex: o
                });

                s.segments = s.segments.sort(function (e, t) {
                  return e.start - t.start;
                });
              }

              s.segments.push({
                end: 65535,
                start: 65535,
                delta: 1,
                offset: 0
              });
              var h = s.segments.length,
                  c = 0,
                  f = [],
                  d = [],
                  p = [],
                  m = [],
                  y = [],
                  v = [];

              for (t = 0; t < h; t += 1) {
                var g = s.segments[t];
                g.end <= 65535 && g.start <= 65535 ? (f = f.concat({
                  name: "end_" + t,
                  type: "USHORT",
                  value: g.end
                }), d = d.concat({
                  name: "start_" + t,
                  type: "USHORT",
                  value: g.start
                }), p = p.concat({
                  name: "idDelta_" + t,
                  type: "SHORT",
                  value: g.delta
                }), m = m.concat({
                  name: "idRangeOffset_" + t,
                  type: "USHORT",
                  value: g.offset
                }), void 0 !== g.glyphId && (y = y.concat({
                  name: "glyph_" + t,
                  type: "USHORT",
                  value: g.glyphId
                }))) : c += 1, r || void 0 === g.glyphIndex || (v = (v = (v = v.concat({
                  name: "cmap12Start_" + t,
                  type: "ULONG",
                  value: g.start
                })).concat({
                  name: "cmap12End_" + t,
                  type: "ULONG",
                  value: g.end
                })).concat({
                  name: "cmap12Glyph_" + t,
                  type: "ULONG",
                  value: g.glyphIndex
                }));
              }

              if (s.segCountX2 = 2 * (h - c), s.searchRange = 2 * Math.pow(2, Math.floor(Math.log(h - c) / Math.log(2))), s.entrySelector = Math.log(s.searchRange / 2) / Math.log(2), s.rangeShift = s.segCountX2 - s.searchRange, s.fields = s.fields.concat(f), s.fields.push({
                name: "reservedPad",
                type: "USHORT",
                value: 0
              }), s.fields = s.fields.concat(d), s.fields = s.fields.concat(p), s.fields = s.fields.concat(m), s.fields = s.fields.concat(y), s.cmap4Length = 14 + 2 * f.length + 2 + 2 * d.length + 2 * p.length + 2 * m.length + 2 * y.length, !r) {
                var b = 16 + 4 * v.length;
                s.cmap12Offset = 20 + s.cmap4Length, s.fields = s.fields.concat([{
                  name: "cmap12Format",
                  type: "USHORT",
                  value: 12
                }, {
                  name: "cmap12Reserved",
                  type: "USHORT",
                  value: 0
                }, {
                  name: "cmap12Length",
                  type: "ULONG",
                  value: b
                }, {
                  name: "cmap12Language",
                  type: "ULONG",
                  value: 0
                }, {
                  name: "cmap12nGroups",
                  type: "ULONG",
                  value: v.length / 3
                }]), s.fields = s.fields.concat(v);
              }

              return s;
            }
          },
              ue = [".notdef", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "endash", "dagger", "daggerdbl", "periodcentered", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "questiondown", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "emdash", "AE", "ordfeminine", "Lslash", "Oslash", "OE", "ordmasculine", "ae", "dotlessi", "lslash", "oslash", "oe", "germandbls", "onesuperior", "logicalnot", "mu", "trademark", "Eth", "onehalf", "plusminus", "Thorn", "onequarter", "divide", "brokenbar", "degree", "thorn", "threequarters", "twosuperior", "registered", "minus", "eth", "multiply", "threesuperior", "copyright", "Aacute", "Acircumflex", "Adieresis", "Agrave", "Aring", "Atilde", "Ccedilla", "Eacute", "Ecircumflex", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Ntilde", "Oacute", "Ocircumflex", "Odieresis", "Ograve", "Otilde", "Scaron", "Uacute", "Ucircumflex", "Udieresis", "Ugrave", "Yacute", "Ydieresis", "Zcaron", "aacute", "acircumflex", "adieresis", "agrave", "aring", "atilde", "ccedilla", "eacute", "ecircumflex", "edieresis", "egrave", "iacute", "icircumflex", "idieresis", "igrave", "ntilde", "oacute", "ocircumflex", "odieresis", "ograve", "otilde", "scaron", "uacute", "ucircumflex", "udieresis", "ugrave", "yacute", "ydieresis", "zcaron", "exclamsmall", "Hungarumlautsmall", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "266 ff", "onedotenleader", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "isuperior", "lsuperior", "msuperior", "nsuperior", "osuperior", "rsuperior", "ssuperior", "tsuperior", "ff", "ffi", "ffl", "parenleftinferior", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "exclamdownsmall", "centoldstyle", "Lslashsmall", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "Dotaccentsmall", "Macronsmall", "figuredash", "hypheninferior", "Ogoneksmall", "Ringsmall", "Cedillasmall", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "zerosuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall", "001.000", "001.001", "001.002", "001.003", "Black", "Bold", "Book", "Light", "Medium", "Regular", "Roman", "Semibold"],
              he = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quoteright", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "quoteleft", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdown", "cent", "sterling", "fraction", "yen", "florin", "section", "currency", "quotesingle", "quotedblleft", "guillemotleft", "guilsinglleft", "guilsinglright", "fi", "fl", "", "endash", "dagger", "daggerdbl", "periodcentered", "", "paragraph", "bullet", "quotesinglbase", "quotedblbase", "quotedblright", "guillemotright", "ellipsis", "perthousand", "", "questiondown", "", "grave", "acute", "circumflex", "tilde", "macron", "breve", "dotaccent", "dieresis", "", "ring", "cedilla", "", "hungarumlaut", "ogonek", "caron", "emdash", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "AE", "", "ordfeminine", "", "", "", "", "Lslash", "Oslash", "OE", "ordmasculine", "", "", "", "", "", "ae", "", "", "", "dotlessi", "", "", "lslash", "oslash", "oe", "germandbls"],
              ce = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "space", "exclamsmall", "Hungarumlautsmall", "", "dollaroldstyle", "dollarsuperior", "ampersandsmall", "Acutesmall", "parenleftsuperior", "parenrightsuperior", "twodotenleader", "onedotenleader", "comma", "hyphen", "period", "fraction", "zerooldstyle", "oneoldstyle", "twooldstyle", "threeoldstyle", "fouroldstyle", "fiveoldstyle", "sixoldstyle", "sevenoldstyle", "eightoldstyle", "nineoldstyle", "colon", "semicolon", "commasuperior", "threequartersemdash", "periodsuperior", "questionsmall", "", "asuperior", "bsuperior", "centsuperior", "dsuperior", "esuperior", "", "", "isuperior", "", "", "lsuperior", "msuperior", "nsuperior", "osuperior", "", "", "rsuperior", "ssuperior", "tsuperior", "", "ff", "fi", "fl", "ffi", "ffl", "parenleftinferior", "", "parenrightinferior", "Circumflexsmall", "hyphensuperior", "Gravesmall", "Asmall", "Bsmall", "Csmall", "Dsmall", "Esmall", "Fsmall", "Gsmall", "Hsmall", "Ismall", "Jsmall", "Ksmall", "Lsmall", "Msmall", "Nsmall", "Osmall", "Psmall", "Qsmall", "Rsmall", "Ssmall", "Tsmall", "Usmall", "Vsmall", "Wsmall", "Xsmall", "Ysmall", "Zsmall", "colonmonetary", "onefitted", "rupiah", "Tildesmall", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "exclamdownsmall", "centoldstyle", "Lslashsmall", "", "", "Scaronsmall", "Zcaronsmall", "Dieresissmall", "Brevesmall", "Caronsmall", "", "Dotaccentsmall", "", "", "Macronsmall", "", "", "figuredash", "hypheninferior", "", "", "Ogoneksmall", "Ringsmall", "Cedillasmall", "", "", "", "onequarter", "onehalf", "threequarters", "questiondownsmall", "oneeighth", "threeeighths", "fiveeighths", "seveneighths", "onethird", "twothirds", "", "", "zerosuperior", "onesuperior", "twosuperior", "threesuperior", "foursuperior", "fivesuperior", "sixsuperior", "sevensuperior", "eightsuperior", "ninesuperior", "zeroinferior", "oneinferior", "twoinferior", "threeinferior", "fourinferior", "fiveinferior", "sixinferior", "seveninferior", "eightinferior", "nineinferior", "centinferior", "dollarinferior", "periodinferior", "commainferior", "Agravesmall", "Aacutesmall", "Acircumflexsmall", "Atildesmall", "Adieresissmall", "Aringsmall", "AEsmall", "Ccedillasmall", "Egravesmall", "Eacutesmall", "Ecircumflexsmall", "Edieresissmall", "Igravesmall", "Iacutesmall", "Icircumflexsmall", "Idieresissmall", "Ethsmall", "Ntildesmall", "Ogravesmall", "Oacutesmall", "Ocircumflexsmall", "Otildesmall", "Odieresissmall", "OEsmall", "Oslashsmall", "Ugravesmall", "Uacutesmall", "Ucircumflexsmall", "Udieresissmall", "Yacutesmall", "Thornsmall", "Ydieresissmall"],
              fe = [".notdef", ".null", "nonmarkingreturn", "space", "exclam", "quotedbl", "numbersign", "dollar", "percent", "ampersand", "quotesingle", "parenleft", "parenright", "asterisk", "plus", "comma", "hyphen", "period", "slash", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "colon", "semicolon", "less", "equal", "greater", "question", "at", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "bracketleft", "backslash", "bracketright", "asciicircum", "underscore", "grave", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "braceleft", "bar", "braceright", "asciitilde", "Adieresis", "Aring", "Ccedilla", "Eacute", "Ntilde", "Odieresis", "Udieresis", "aacute", "agrave", "acircumflex", "adieresis", "atilde", "aring", "ccedilla", "eacute", "egrave", "ecircumflex", "edieresis", "iacute", "igrave", "icircumflex", "idieresis", "ntilde", "oacute", "ograve", "ocircumflex", "odieresis", "otilde", "uacute", "ugrave", "ucircumflex", "udieresis", "dagger", "degree", "cent", "sterling", "section", "bullet", "paragraph", "germandbls", "registered", "copyright", "trademark", "acute", "dieresis", "notequal", "AE", "Oslash", "infinity", "plusminus", "lessequal", "greaterequal", "yen", "mu", "partialdiff", "summation", "product", "pi", "integral", "ordfeminine", "ordmasculine", "Omega", "ae", "oslash", "questiondown", "exclamdown", "logicalnot", "radical", "florin", "approxequal", "Delta", "guillemotleft", "guillemotright", "ellipsis", "nonbreakingspace", "Agrave", "Atilde", "Otilde", "OE", "oe", "endash", "emdash", "quotedblleft", "quotedblright", "quoteleft", "quoteright", "divide", "lozenge", "ydieresis", "Ydieresis", "fraction", "currency", "guilsinglleft", "guilsinglright", "fi", "fl", "daggerdbl", "periodcentered", "quotesinglbase", "quotedblbase", "perthousand", "Acircumflex", "Ecircumflex", "Aacute", "Edieresis", "Egrave", "Iacute", "Icircumflex", "Idieresis", "Igrave", "Oacute", "Ocircumflex", "apple", "Ograve", "Uacute", "Ucircumflex", "Ugrave", "dotlessi", "circumflex", "tilde", "macron", "breve", "dotaccent", "ring", "cedilla", "hungarumlaut", "ogonek", "caron", "Lslash", "lslash", "Scaron", "scaron", "Zcaron", "zcaron", "brokenbar", "Eth", "eth", "Yacute", "yacute", "Thorn", "thorn", "minus", "multiply", "onesuperior", "twosuperior", "threesuperior", "onehalf", "onequarter", "threequarters", "franc", "Gbreve", "gbreve", "Idotaccent", "Scedilla", "scedilla", "Cacute", "cacute", "Ccaron", "ccaron", "dcroat"];

          function de(e) {
            this.font = e;
          }

          function pe(e) {
            this.cmap = e;
          }

          function me(e, t) {
            this.encoding = e, this.charset = t;
          }

          function ye(e) {
            switch (e.version) {
              case 1:
                this.names = fe.slice();
                break;

              case 2:
                this.names = new Array(e.numberOfGlyphs);

                for (var t = 0; t < e.numberOfGlyphs; t++) e.glyphNameIndex[t] < fe.length ? this.names[t] = fe[e.glyphNameIndex[t]] : this.names[t] = e.names[e.glyphNameIndex[t] - fe.length];

                break;

              case 2.5:
                this.names = new Array(e.numberOfGlyphs);

                for (var r = 0; r < e.numberOfGlyphs; r++) this.names[r] = fe[r + e.glyphNameIndex[r]];

                break;

              case 3:
              default:
                this.names = [];
            }
          }

          de.prototype.charToGlyphIndex = function (e) {
            var t = e.codePointAt(0),
                r = this.font.glyphs;
            if (r) for (var i = 0; i < r.length; i += 1) for (var n = r.get(i), a = 0; a < n.unicodes.length; a += 1) if (n.unicodes[a] === t) return i;
            return null;
          }, pe.prototype.charToGlyphIndex = function (e) {
            return this.cmap.glyphIndexMap[e.codePointAt(0)] || 0;
          }, me.prototype.charToGlyphIndex = function (e) {
            var t = e.codePointAt(0),
                r = this.encoding[t];
            return this.charset.indexOf(r);
          }, ye.prototype.nameToGlyphIndex = function (e) {
            return this.names.indexOf(e);
          }, ye.prototype.glyphIndexToName = function (e) {
            return this.names[e];
          };
          var ve = {
            line: function (e, t, r, i, n) {
              e.beginPath(), e.moveTo(t, r), e.lineTo(i, n), e.stroke();
            }
          };

          function ge(e) {
            this.bindConstructorValues(e);
          }

          function be(t, e, r) {
            Object.defineProperty(t, e, {
              get: function () {
                return t.path, t[r];
              },
              set: function (e) {
                t[r] = e;
              },
              enumerable: !0,
              configurable: !0
            });
          }

          function _e(e, t) {
            if (this.font = e, this.glyphs = {}, Array.isArray(t)) for (var r = 0; r < t.length; r++) this.glyphs[r] = t[r];
            this.length = t && t.length || 0;
          }

          ge.prototype.bindConstructorValues = function (e) {
            var t, r;
            this.index = e.index || 0, this.name = e.name || null, this.unicode = e.unicode || void 0, this.unicodes = e.unicodes || void 0 !== e.unicode ? [e.unicode] : [], e.xMin && (this.xMin = e.xMin), e.yMin && (this.yMin = e.yMin), e.xMax && (this.xMax = e.xMax), e.yMax && (this.yMax = e.yMax), e.advanceWidth && (this.advanceWidth = e.advanceWidth), Object.defineProperty(this, "path", (t = e.path, r = t || new I(), {
              configurable: !0,
              get: function () {
                return "function" == typeof r && (r = r()), r;
              },
              set: function (e) {
                r = e;
              }
            }));
          }, ge.prototype.addUnicode = function (e) {
            0 === this.unicodes.length && (this.unicode = e), this.unicodes.push(e);
          }, ge.prototype.getBoundingBox = function () {
            return this.path.getBoundingBox();
          }, ge.prototype.getPath = function (e, t, r, i, n) {
            var a, o;
            e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 72;
            var s = (i = i || {}).xScale,
                l = i.yScale;
            if (i.hinting && n && n.hinting && (o = this.path && n.hinting.exec(this, r)), o) a = n.hinting.getCommands(o), e = Math.round(e), t = Math.round(t), s = l = 1;else {
              a = this.path.commands;
              var u = 1 / this.path.unitsPerEm * r;
              void 0 === s && (s = u), void 0 === l && (l = u);
            }

            for (var h = new I(), c = 0; c < a.length; c += 1) {
              var f = a[c];
              "M" === f.type ? h.moveTo(e + f.x * s, t + -f.y * l) : "L" === f.type ? h.lineTo(e + f.x * s, t + -f.y * l) : "Q" === f.type ? h.quadraticCurveTo(e + f.x1 * s, t + -f.y1 * l, e + f.x * s, t + -f.y * l) : "C" === f.type ? h.curveTo(e + f.x1 * s, t + -f.y1 * l, e + f.x2 * s, t + -f.y2 * l, e + f.x * s, t + -f.y * l) : "Z" === f.type && h.closePath();
            }

            return h;
          }, ge.prototype.getContours = function () {
            if (void 0 === this.points) return [];

            for (var e = [], t = [], r = 0; r < this.points.length; r += 1) {
              var i = this.points[r];
              t.push(i), i.lastPointOfContour && (e.push(t), t = []);
            }

            return P.argument(0 === t.length, "There are still points left in the current contour."), e;
          }, ge.prototype.getMetrics = function () {
            for (var e = this.path.commands, t = [], r = [], i = 0; i < e.length; i += 1) {
              var n = e[i];
              "Z" !== n.type && (t.push(n.x), r.push(n.y)), "Q" !== n.type && "C" !== n.type || (t.push(n.x1), r.push(n.y1)), "C" === n.type && (t.push(n.x2), r.push(n.y2));
            }

            var a = {
              xMin: Math.min.apply(null, t),
              yMin: Math.min.apply(null, r),
              xMax: Math.max.apply(null, t),
              yMax: Math.max.apply(null, r),
              leftSideBearing: this.leftSideBearing
            };
            return isFinite(a.xMin) || (a.xMin = 0), isFinite(a.xMax) || (a.xMax = this.advanceWidth), isFinite(a.yMin) || (a.yMin = 0), isFinite(a.yMax) || (a.yMax = 0), a.rightSideBearing = this.advanceWidth - a.leftSideBearing - (a.xMax - a.xMin), a;
          }, ge.prototype.draw = function (e, t, r, i, n) {
            this.getPath(t, r, i, n).draw(e);
          }, ge.prototype.drawPoints = function (o, e, t, r) {
            function i(e, t, r, i) {
              var n = 2 * Math.PI;
              o.beginPath();

              for (var a = 0; a < e.length; a += 1) o.moveTo(t + e[a].x * i, r + e[a].y * i), o.arc(t + e[a].x * i, r + e[a].y * i, 2, 0, n, !1);

              o.closePath(), o.fill();
            }

            e = void 0 !== e ? e : 0, t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 24;

            for (var n = 1 / this.path.unitsPerEm * r, a = [], s = [], l = this.path, u = 0; u < l.commands.length; u += 1) {
              var h = l.commands[u];
              void 0 !== h.x && a.push({
                x: h.x,
                y: -h.y
              }), void 0 !== h.x1 && s.push({
                x: h.x1,
                y: -h.y1
              }), void 0 !== h.x2 && s.push({
                x: h.x2,
                y: -h.y2
              });
            }

            o.fillStyle = "blue", i(a, e, t, n), o.fillStyle = "red", i(s, e, t, n);
          }, ge.prototype.drawMetrics = function (e, t, r, i) {
            var n;
            t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 24, n = 1 / this.path.unitsPerEm * i, e.lineWidth = 1, e.strokeStyle = "black", ve.line(e, t, -1e4, t, 1e4), ve.line(e, -1e4, r, 1e4, r);
            var a = this.xMin || 0,
                o = this.yMin || 0,
                s = this.xMax || 0,
                l = this.yMax || 0,
                u = this.advanceWidth || 0;
            e.strokeStyle = "blue", ve.line(e, t + a * n, -1e4, t + a * n, 1e4), ve.line(e, t + s * n, -1e4, t + s * n, 1e4), ve.line(e, -1e4, r + -o * n, 1e4, r + -o * n), ve.line(e, -1e4, r + -l * n, 1e4, r + -l * n), e.strokeStyle = "green", ve.line(e, t + u * n, -1e4, t + u * n, 1e4);
          }, _e.prototype.get = function (e) {
            return "function" == typeof this.glyphs[e] && (this.glyphs[e] = this.glyphs[e]()), this.glyphs[e];
          }, _e.prototype.push = function (e, t) {
            this.glyphs[e] = t, this.length++;
          };
          var xe = {
            GlyphSet: _e,
            glyphLoader: function (e, t) {
              return new ge({
                index: t,
                font: e
              });
            },
            ttfGlyphLoader: function (r, e, i, n, a, o) {
              return function () {
                var t = new ge({
                  index: e,
                  font: r
                });
                return t.path = function () {
                  i(t, n, a);
                  var e = o(r.glyphs, t);
                  return e.unitsPerEm = r.unitsPerEm, e;
                }, be(t, "xMin", "_xMin"), be(t, "xMax", "_xMax"), be(t, "yMin", "_yMin"), be(t, "yMax", "_yMax"), t;
              };
            },
            cffGlyphLoader: function (r, e, i, n) {
              return function () {
                var t = new ge({
                  index: e,
                  font: r
                });
                return t.path = function () {
                  var e = i(r, t, n);
                  return e.unitsPerEm = r.unitsPerEm, e;
                }, t;
              };
            }
          };

          function we(e, t) {
            if (e === t) return !0;

            if (Array.isArray(e) && Array.isArray(t)) {
              if (e.length !== t.length) return !1;

              for (var r = 0; r < e.length; r += 1) if (!we(e[r], t[r])) return !1;

              return !0;
            }

            return !1;
          }

          function Se(e) {
            return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
          }

          function Me(e, t, r) {
            var i,
                n,
                a = [],
                o = [],
                s = se.getCard16(e, t);

            if (0 !== s) {
              var l = se.getByte(e, t + 2);
              i = t + (s + 1) * l + 2;

              for (var u = t + 3, h = 0; h < s + 1; h += 1) a.push(se.getOffset(e, u, l)), u += l;

              n = i + a[s];
            } else n = t + 2;

            for (var c = 0; c < a.length - 1; c += 1) {
              var f = se.getBytes(e, i + a[c], i + a[c + 1]);
              r && (f = r(f)), o.push(f);
            }

            return {
              objects: o,
              startOffset: t,
              endOffset: n
            };
          }

          function Te(e, t) {
            if (28 === t) return e.parseByte() << 8 | e.parseByte();
            if (29 === t) return e.parseByte() << 24 | e.parseByte() << 16 | e.parseByte() << 8 | e.parseByte();
            if (30 === t) return function (e) {
              for (var t = "", r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "E", "E-", null, "-"];;) {
                var i = e.parseByte(),
                    n = i >> 4,
                    a = 15 & i;
                if (15 == n) break;
                if (t += r[n], 15 == a) break;
                t += r[a];
              }

              return parseFloat(t);
            }(e);
            if (32 <= t && t <= 246) return t - 139;
            if (247 <= t && t <= 250) return 256 * (t - 247) + e.parseByte() + 108;
            if (251 <= t && t <= 254) return 256 * -(t - 251) - e.parseByte() - 108;
            throw new Error("Invalid b0 " + t);
          }

          function Ee(e, t, r) {
            t = void 0 !== t ? t : 0;
            var i = new se.Parser(e, t),
                n = [],
                a = [];

            for (r = void 0 !== r ? r : e.length; i.relativeOffset < r;) {
              var o = i.parseByte();
              o <= 21 ? (12 === o && (o = 1200 + i.parseByte()), n.push([o, a]), a = []) : a.push(Te(i, o));
            }

            return function (e) {
              for (var t = {}, r = 0; r < e.length; r += 1) {
                var i = e[r][0],
                    n = e[r][1],
                    a = void 0;
                if (a = 1 === n.length ? n[0] : n, t.hasOwnProperty(i) && !isNaN(t[i])) throw new Error("Object " + t + " already has key " + i);
                t[i] = a;
              }

              return t;
            }(n);
          }

          function Ce(e, t) {
            return t = t <= 390 ? ue[t] : e[t - 391];
          }

          function Le(e, t, r) {
            for (var i, n = {}, a = 0; a < t.length; a += 1) {
              var o = t[a];

              if (Array.isArray(o.type)) {
                var s = [];
                s.length = o.type.length;

                for (var l = 0; l < o.type.length; l++) void 0 === (i = void 0 !== e[o.op] ? e[o.op][l] : void 0) && (i = void 0 !== o.value && void 0 !== o.value[l] ? o.value[l] : null), "SID" === o.type[l] && (i = Ce(r, i)), s[l] = i;

                n[o.name] = s;
              } else void 0 === (i = e[o.op]) && (i = void 0 !== o.value ? o.value : null), "SID" === o.type && (i = Ce(r, i)), n[o.name] = i;
            }

            return n;
          }

          var Oe = [{
            name: "version",
            op: 0,
            type: "SID"
          }, {
            name: "notice",
            op: 1,
            type: "SID"
          }, {
            name: "copyright",
            op: 1200,
            type: "SID"
          }, {
            name: "fullName",
            op: 2,
            type: "SID"
          }, {
            name: "familyName",
            op: 3,
            type: "SID"
          }, {
            name: "weight",
            op: 4,
            type: "SID"
          }, {
            name: "isFixedPitch",
            op: 1201,
            type: "number",
            value: 0
          }, {
            name: "italicAngle",
            op: 1202,
            type: "number",
            value: 0
          }, {
            name: "underlinePosition",
            op: 1203,
            type: "number",
            value: -100
          }, {
            name: "underlineThickness",
            op: 1204,
            type: "number",
            value: 50
          }, {
            name: "paintType",
            op: 1205,
            type: "number",
            value: 0
          }, {
            name: "charstringType",
            op: 1206,
            type: "number",
            value: 2
          }, {
            name: "fontMatrix",
            op: 1207,
            type: ["real", "real", "real", "real", "real", "real"],
            value: [.001, 0, 0, .001, 0, 0]
          }, {
            name: "uniqueId",
            op: 13,
            type: "number"
          }, {
            name: "fontBBox",
            op: 5,
            type: ["number", "number", "number", "number"],
            value: [0, 0, 0, 0]
          }, {
            name: "strokeWidth",
            op: 1208,
            type: "number",
            value: 0
          }, {
            name: "xuid",
            op: 14,
            type: [],
            value: null
          }, {
            name: "charset",
            op: 15,
            type: "offset",
            value: 0
          }, {
            name: "encoding",
            op: 16,
            type: "offset",
            value: 0
          }, {
            name: "charStrings",
            op: 17,
            type: "offset",
            value: 0
          }, {
            name: "private",
            op: 18,
            type: ["number", "offset"],
            value: [0, 0]
          }, {
            name: "ros",
            op: 1230,
            type: ["SID", "SID", "number"]
          }, {
            name: "cidFontVersion",
            op: 1231,
            type: "number",
            value: 0
          }, {
            name: "cidFontRevision",
            op: 1232,
            type: "number",
            value: 0
          }, {
            name: "cidFontType",
            op: 1233,
            type: "number",
            value: 0
          }, {
            name: "cidCount",
            op: 1234,
            type: "number",
            value: 8720
          }, {
            name: "uidBase",
            op: 1235,
            type: "number"
          }, {
            name: "fdArray",
            op: 1236,
            type: "offset"
          }, {
            name: "fdSelect",
            op: 1237,
            type: "offset"
          }, {
            name: "fontName",
            op: 1238,
            type: "SID"
          }],
              Pe = [{
            name: "subrs",
            op: 19,
            type: "offset",
            value: 0
          }, {
            name: "defaultWidthX",
            op: 20,
            type: "number",
            value: 0
          }, {
            name: "nominalWidthX",
            op: 21,
            type: "number",
            value: 0
          }];

          function Re(e, t, r, i) {
            return Le(Ee(e, t, r), Pe, i);
          }

          function De(e, t, r, i) {
            for (var n, a, o = [], s = 0; s < r.length; s += 1) {
              var l = new DataView(new Uint8Array(r[s]).buffer),
                  u = (a = i, Le(Ee(n = l, 0, n.byteLength), Oe, a));
              u._subrs = [], u._subrsBias = 0;
              var h = u.private[0],
                  c = u.private[1];

              if (0 !== h && 0 !== c) {
                var f = Re(e, c + t, h, i);

                if (u._defaultWidthX = f.defaultWidthX, u._nominalWidthX = f.nominalWidthX, 0 !== f.subrs) {
                  var d = Me(e, c + f.subrs + t);
                  u._subrs = d.objects, u._subrsBias = Se(u._subrs);
                }

                u._privateDict = f;
              }

              o.push(u);
            }

            return o;
          }

          function ke(y, v, e) {
            var g,
                b,
                _,
                x,
                w,
                S,
                t,
                M,
                T = new I(),
                E = [],
                C = 0,
                L = !1,
                O = !1,
                P = 0,
                R = 0;

            if (y.isCIDFont) {
              var r = y.tables.cff.topDict._fdSelect[v.index],
                  i = y.tables.cff.topDict._fdArray[r];
              w = i._subrs, S = i._subrsBias, t = i._defaultWidthX, M = i._nominalWidthX;
            } else w = y.tables.cff.topDict._subrs, S = y.tables.cff.topDict._subrsBias, t = y.tables.cff.topDict._defaultWidthX, M = y.tables.cff.topDict._nominalWidthX;

            var D = t;

            function k(e, t) {
              O && T.closePath(), T.moveTo(e, t), O = !0;
            }

            function A() {
              E.length % 2 == 0 || L || (D = E.shift() + M), C += E.length >> 1, E.length = 0, L = !0;
            }

            return function e(t) {
              for (var r, i, n, a, o, s, l, u, h, c, f, d, p = 0; p < t.length;) {
                var m = t[p];

                switch (p += 1, m) {
                  case 1:
                  case 3:
                    A();
                    break;

                  case 4:
                    1 < E.length && !L && (D = E.shift() + M, L = !0), R += E.pop(), k(P, R);
                    break;

                  case 5:
                    for (; 0 < E.length;) P += E.shift(), R += E.shift(), T.lineTo(P, R);

                    break;

                  case 6:
                    for (; 0 < E.length && (P += E.shift(), T.lineTo(P, R), 0 !== E.length);) R += E.shift(), T.lineTo(P, R);

                    break;

                  case 7:
                    for (; 0 < E.length && (R += E.shift(), T.lineTo(P, R), 0 !== E.length);) P += E.shift(), T.lineTo(P, R);

                    break;

                  case 8:
                    for (; 0 < E.length;) g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x + E.shift(), T.curveTo(g, b, _, x, P, R);

                    break;

                  case 10:
                    o = E.pop() + S, (s = w[o]) && e(s);
                    break;

                  case 11:
                    return;

                  case 12:
                    switch (m = t[p], p += 1, m) {
                      case 35:
                        g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), l = _ + E.shift(), u = x + E.shift(), h = l + E.shift(), c = u + E.shift(), f = h + E.shift(), d = c + E.shift(), P = f + E.shift(), R = d + E.shift(), E.shift(), T.curveTo(g, b, _, x, l, u), T.curveTo(h, c, f, d, P, R);
                        break;

                      case 34:
                        g = P + E.shift(), b = R, _ = g + E.shift(), x = b + E.shift(), l = _ + E.shift(), u = x, h = l + E.shift(), c = x, f = h + E.shift(), d = R, P = f + E.shift(), T.curveTo(g, b, _, x, l, u), T.curveTo(h, c, f, d, P, R);
                        break;

                      case 36:
                        g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), l = _ + E.shift(), u = x, h = l + E.shift(), c = x, f = h + E.shift(), d = c + E.shift(), P = f + E.shift(), T.curveTo(g, b, _, x, l, u), T.curveTo(h, c, f, d, P, R);
                        break;

                      case 37:
                        g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), l = _ + E.shift(), u = x + E.shift(), h = l + E.shift(), c = u + E.shift(), f = h + E.shift(), d = c + E.shift(), Math.abs(f - P) > Math.abs(d - R) ? P = f + E.shift() : R = d + E.shift(), T.curveTo(g, b, _, x, l, u), T.curveTo(h, c, f, d, P, R);
                        break;

                      default:
                        console.log("Glyph " + v.index + ": unknown operator 1200" + m), E.length = 0;
                    }

                    break;

                  case 14:
                    0 < E.length && !L && (D = E.shift() + M, L = !0), O && (T.closePath(), O = !1);
                    break;

                  case 18:
                    A();
                    break;

                  case 19:
                  case 20:
                    A(), p += C + 7 >> 3;
                    break;

                  case 21:
                    2 < E.length && !L && (D = E.shift() + M, L = !0), R += E.pop(), k(P += E.pop(), R);
                    break;

                  case 22:
                    1 < E.length && !L && (D = E.shift() + M, L = !0), k(P += E.pop(), R);
                    break;

                  case 23:
                    A();
                    break;

                  case 24:
                    for (; 2 < E.length;) g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x + E.shift(), T.curveTo(g, b, _, x, P, R);

                    P += E.shift(), R += E.shift(), T.lineTo(P, R);
                    break;

                  case 25:
                    for (; 6 < E.length;) P += E.shift(), R += E.shift(), T.lineTo(P, R);

                    g = P + E.shift(), b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x + E.shift(), T.curveTo(g, b, _, x, P, R);
                    break;

                  case 26:
                    for (E.length % 2 && (P += E.shift()); 0 < E.length;) g = P, b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _, R = x + E.shift(), T.curveTo(g, b, _, x, P, R);

                    break;

                  case 27:
                    for (E.length % 2 && (R += E.shift()); 0 < E.length;) g = P + E.shift(), b = R, _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x, T.curveTo(g, b, _, x, P, R);

                    break;

                  case 28:
                    r = t[p], i = t[p + 1], E.push((r << 24 | i << 16) >> 16), p += 2;
                    break;

                  case 29:
                    o = E.pop() + y.gsubrsBias, (s = y.gsubrs[o]) && e(s);
                    break;

                  case 30:
                    for (; 0 < E.length && (g = P, b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x + (1 === E.length ? E.shift() : 0), T.curveTo(g, b, _, x, P, R), 0 !== E.length);) g = P + E.shift(), b = R, _ = g + E.shift(), x = b + E.shift(), R = x + E.shift(), P = _ + (1 === E.length ? E.shift() : 0), T.curveTo(g, b, _, x, P, R);

                    break;

                  case 31:
                    for (; 0 < E.length && (g = P + E.shift(), b = R, _ = g + E.shift(), x = b + E.shift(), R = x + E.shift(), P = _ + (1 === E.length ? E.shift() : 0), T.curveTo(g, b, _, x, P, R), 0 !== E.length);) g = P, b = R + E.shift(), _ = g + E.shift(), x = b + E.shift(), P = _ + E.shift(), R = x + (1 === E.length ? E.shift() : 0), T.curveTo(g, b, _, x, P, R);

                    break;

                  default:
                    m < 32 ? console.log("Glyph " + v.index + ": unknown operator " + m) : m < 247 ? E.push(m - 139) : m < 251 ? (r = t[p], p += 1, E.push(256 * (m - 247) + r + 108)) : m < 255 ? (r = t[p], p += 1, E.push(256 * -(m - 251) - r - 108)) : (r = t[p], i = t[p + 1], n = t[p + 2], a = t[p + 3], p += 4, E.push((r << 24 | i << 16 | n << 8 | a) / 65536));
                }
              }
            }(e), v.advanceWidth = D, T;
          }

          function Ae(e, t) {
            var r,
                i = ue.indexOf(e);
            return 0 <= i && (r = i), 0 <= (i = t.indexOf(e)) ? r = i + ue.length : (r = ue.length + t.length, t.push(e)), r;
          }

          function Ie(e, t, r) {
            for (var i = {}, n = 0; n < e.length; n += 1) {
              var a = e[n],
                  o = t[a.name];
              void 0 === o || we(o, a.value) || ("SID" === a.type && (o = Ae(o, r)), i[a.op] = {
                name: a.name,
                type: a.type,
                value: o
              });
            }

            return i;
          }

          function Ue(e, t) {
            var r = new $.Record("Top DICT", [{
              name: "dict",
              type: "DICT",
              value: {}
            }]);
            return r.dict = Ie(Oe, e, t), r;
          }

          function Ne(e) {
            var t = new $.Record("Top DICT INDEX", [{
              name: "topDicts",
              type: "INDEX",
              value: []
            }]);
            return t.topDicts = [{
              name: "topDict_0",
              type: "TABLE",
              value: e
            }], t;
          }

          function Fe(e) {
            var t = [],
                r = e.path;
            t.push({
              name: "width",
              type: "NUMBER",
              value: e.advanceWidth
            });

            for (var i = 0, n = 0, a = 0; a < r.commands.length; a += 1) {
              var o = void 0,
                  s = void 0,
                  l = r.commands[a];

              if ("Q" === l.type) {
                l = {
                  type: "C",
                  x: l.x,
                  y: l.y,
                  x1: 1 / 3 * i + 2 / 3 * l.x1,
                  y1: 1 / 3 * n + 2 / 3 * l.y1,
                  x2: 1 / 3 * l.x + 2 / 3 * l.x1,
                  y2: 1 / 3 * l.y + 2 / 3 * l.y1
                };
              }

              if ("M" === l.type) o = Math.round(l.x - i), s = Math.round(l.y - n), t.push({
                name: "dx",
                type: "NUMBER",
                value: o
              }), t.push({
                name: "dy",
                type: "NUMBER",
                value: s
              }), t.push({
                name: "rmoveto",
                type: "OP",
                value: 21
              }), i = Math.round(l.x), n = Math.round(l.y);else if ("L" === l.type) o = Math.round(l.x - i), s = Math.round(l.y - n), t.push({
                name: "dx",
                type: "NUMBER",
                value: o
              }), t.push({
                name: "dy",
                type: "NUMBER",
                value: s
              }), t.push({
                name: "rlineto",
                type: "OP",
                value: 5
              }), i = Math.round(l.x), n = Math.round(l.y);else if ("C" === l.type) {
                var u = Math.round(l.x1 - i),
                    h = Math.round(l.y1 - n),
                    c = Math.round(l.x2 - l.x1),
                    f = Math.round(l.y2 - l.y1);
                o = Math.round(l.x - l.x2), s = Math.round(l.y - l.y2), t.push({
                  name: "dx1",
                  type: "NUMBER",
                  value: u
                }), t.push({
                  name: "dy1",
                  type: "NUMBER",
                  value: h
                }), t.push({
                  name: "dx2",
                  type: "NUMBER",
                  value: c
                }), t.push({
                  name: "dy2",
                  type: "NUMBER",
                  value: f
                }), t.push({
                  name: "dx",
                  type: "NUMBER",
                  value: o
                }), t.push({
                  name: "dy",
                  type: "NUMBER",
                  value: s
                }), t.push({
                  name: "rrcurveto",
                  type: "OP",
                  value: 8
                }), i = Math.round(l.x), n = Math.round(l.y);
              }
            }

            return t.push({
              name: "endchar",
              type: "OP",
              value: 14
            }), t;
          }

          var Be = {
            parse: function (e, t, r) {
              r.tables.cff = {};
              var i,
                  n,
                  a,
                  o = Me(e, (i = e, n = t, (a = {}).formatMajor = se.getCard8(i, n), a.formatMinor = se.getCard8(i, n + 1), a.size = se.getCard8(i, n + 2), a.offsetSize = se.getCard8(i, n + 3), a.startOffset = n, a.endOffset = n + 4, a).endOffset, se.bytesToString),
                  s = Me(e, o.endOffset),
                  l = Me(e, s.endOffset, se.bytesToString),
                  u = Me(e, l.endOffset);
              r.gsubrs = u.objects, r.gsubrsBias = Se(r.gsubrs);
              var h = De(e, t, s.objects, l.objects);
              if (1 !== h.length) throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = " + h.length);
              var c = h[0];

              if ((r.tables.cff.topDict = c)._privateDict && (r.defaultWidthX = c._privateDict.defaultWidthX, r.nominalWidthX = c._privateDict.nominalWidthX), void 0 !== c.ros[0] && void 0 !== c.ros[1] && (r.isCIDFont = !0), r.isCIDFont) {
                var f = c.fdArray,
                    d = c.fdSelect;
                if (0 === f || 0 === d) throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");
                var p = De(e, t, Me(e, f += t).objects, l.objects);
                c._fdArray = p, d += t, c._fdSelect = function (e, t, r, i) {
                  var n,
                      a = [],
                      o = new se.Parser(e, t),
                      s = o.parseCard8();
                  if (0 === s) for (var l = 0; l < r; l++) {
                    if (i <= (n = o.parseCard8())) throw new Error("CFF table CID Font FDSelect has bad FD index value " + n + " (FD count " + i + ")");
                    a.push(n);
                  } else {
                    if (3 !== s) throw new Error("CFF Table CID Font FDSelect table has unsupported format " + s);
                    var u,
                        h = o.parseCard16(),
                        c = o.parseCard16();
                    if (0 !== c) throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID " + c);

                    for (var f = 0; f < h; f++) {
                      if (n = o.parseCard8(), u = o.parseCard16(), i <= n) throw new Error("CFF table CID Font FDSelect has bad FD index value " + n + " (FD count " + i + ")");
                      if (r < u) throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID " + u);

                      for (; c < u; c++) a.push(n);

                      c = u;
                    }

                    if (u !== r) throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID " + u);
                  }
                  return a;
                }(e, d, r.numGlyphs, p.length);
              }

              var m = t + c.private[1],
                  y = Re(e, m, c.private[0], l.objects);

              if (r.defaultWidthX = y.defaultWidthX, r.nominalWidthX = y.nominalWidthX, 0 !== y.subrs) {
                var v = Me(e, m + y.subrs);
                r.subrs = v.objects, r.subrsBias = Se(r.subrs);
              } else r.subrs = [], r.subrsBias = 0;

              var g = Me(e, t + c.charStrings);
              r.nGlyphs = g.objects.length;

              var b = function (e, t, r, i) {
                var n,
                    a,
                    o = new se.Parser(e, t);
                --r;
                var s = [".notdef"],
                    l = o.parseCard8();
                if (0 === l) for (var u = 0; u < r; u += 1) n = o.parseSID(), s.push(Ce(i, n));else if (1 === l) for (; s.length <= r;) {
                  n = o.parseSID(), a = o.parseCard8();

                  for (var h = 0; h <= a; h += 1) s.push(Ce(i, n)), n += 1;
                } else {
                  if (2 !== l) throw new Error("Unknown charset format " + l);

                  for (; s.length <= r;) {
                    n = o.parseSID(), a = o.parseCard16();

                    for (var c = 0; c <= a; c += 1) s.push(Ce(i, n)), n += 1;
                  }
                }
                return s;
              }(e, t + c.charset, r.nGlyphs, l.objects);

              0 === c.encoding ? r.cffEncoding = new me(he, b) : 1 === c.encoding ? r.cffEncoding = new me(ce, b) : r.cffEncoding = function (e, t, r) {
                var i,
                    n = {},
                    a = new se.Parser(e, t),
                    o = a.parseCard8();
                if (0 === o) for (var s = a.parseCard8(), l = 0; l < s; l += 1) n[i = a.parseCard8()] = l;else {
                  if (1 !== o) throw new Error("Unknown encoding format " + o);
                  var u = a.parseCard8();
                  i = 1;

                  for (var h = 0; h < u; h += 1) for (var c = a.parseCard8(), f = a.parseCard8(), d = c; d <= c + f; d += 1) n[d] = i, i += 1;
                }
                return new me(n, r);
              }(e, t + c.encoding, b), r.encoding = r.encoding || r.cffEncoding, r.glyphs = new xe.GlyphSet(r);

              for (var _ = 0; _ < r.nGlyphs; _ += 1) {
                var x = g.objects[_];
                r.glyphs.push(_, xe.cffGlyphLoader(r, _, ke, x));
              }
            },
            make: function (e, t) {
              for (var r, i = new $.Table("CFF ", [{
                name: "header",
                type: "RECORD"
              }, {
                name: "nameIndex",
                type: "RECORD"
              }, {
                name: "topDictIndex",
                type: "RECORD"
              }, {
                name: "stringIndex",
                type: "RECORD"
              }, {
                name: "globalSubrIndex",
                type: "RECORD"
              }, {
                name: "charsets",
                type: "RECORD"
              }, {
                name: "charStringsIndex",
                type: "RECORD"
              }, {
                name: "privateDict",
                type: "RECORD"
              }]), n = 1 / t.unitsPerEm, a = {
                version: t.version,
                fullName: t.fullName,
                familyName: t.familyName,
                weight: t.weightName,
                fontBBox: t.fontBBox || [0, 0, 0, 0],
                fontMatrix: [n, 0, 0, n, 0, 0],
                charset: 999,
                encoding: 0,
                charStrings: 999,
                private: [0, 999]
              }, o = [], s = 1; s < e.length; s += 1) r = e.get(s), o.push(r.name);

              var l = [];
              i.header = new $.Record("Header", [{
                name: "major",
                type: "Card8",
                value: 1
              }, {
                name: "minor",
                type: "Card8",
                value: 0
              }, {
                name: "hdrSize",
                type: "Card8",
                value: 4
              }, {
                name: "major",
                type: "Card8",
                value: 1
              }]), i.nameIndex = function (e) {
                var t = new $.Record("Name INDEX", [{
                  name: "names",
                  type: "INDEX",
                  value: []
                }]);
                t.names = [];

                for (var r = 0; r < e.length; r += 1) t.names.push({
                  name: "name_" + r,
                  type: "NAME",
                  value: e[r]
                });

                return t;
              }([t.postScriptName]);
              var u,
                  h,
                  c,
                  f = Ue(a, l);
              i.topDictIndex = Ne(f), i.globalSubrIndex = new $.Record("Global Subr INDEX", [{
                name: "subrs",
                type: "INDEX",
                value: []
              }]), i.charsets = function (e, t) {
                for (var r = new $.Record("Charsets", [{
                  name: "format",
                  type: "Card8",
                  value: 0
                }]), i = 0; i < e.length; i += 1) {
                  var n = Ae(e[i], t);
                  r.fields.push({
                    name: "glyph_" + i,
                    type: "SID",
                    value: n
                  });
                }

                return r;
              }(o, l), i.charStringsIndex = function (e) {
                for (var t = new $.Record("CharStrings INDEX", [{
                  name: "charStrings",
                  type: "INDEX",
                  value: []
                }]), r = 0; r < e.length; r += 1) {
                  var i = e.get(r),
                      n = Fe(i);
                  t.charStrings.push({
                    name: i.name,
                    type: "CHARSTRING",
                    value: n
                  });
                }

                return t;
              }(e), i.privateDict = (u = {}, h = l, (c = new $.Record("Private DICT", [{
                name: "dict",
                type: "DICT",
                value: {}
              }])).dict = Ie(Pe, u, h), c), i.stringIndex = function (e) {
                var t = new $.Record("String INDEX", [{
                  name: "strings",
                  type: "INDEX",
                  value: []
                }]);
                t.strings = [];

                for (var r = 0; r < e.length; r += 1) t.strings.push({
                  name: "string_" + r,
                  type: "STRING",
                  value: e[r]
                });

                return t;
              }(l);
              var d = i.header.sizeOf() + i.nameIndex.sizeOf() + i.topDictIndex.sizeOf() + i.stringIndex.sizeOf() + i.globalSubrIndex.sizeOf();
              return a.charset = d, a.encoding = 0, a.charStrings = a.charset + i.charsets.sizeOf(), a.private[1] = a.charStrings + i.charStringsIndex.sizeOf(), f = Ue(a, l), i.topDictIndex = Ne(f), i;
            }
          };
          var Ge = {
            parse: function (e, t) {
              var r = {},
                  i = new se.Parser(e, t);
              return r.version = i.parseVersion(), r.fontRevision = Math.round(1e3 * i.parseFixed()) / 1e3, r.checkSumAdjustment = i.parseULong(), r.magicNumber = i.parseULong(), P.argument(1594834165 === r.magicNumber, "Font header has wrong magic number."), r.flags = i.parseUShort(), r.unitsPerEm = i.parseUShort(), r.created = i.parseLongDateTime(), r.modified = i.parseLongDateTime(), r.xMin = i.parseShort(), r.yMin = i.parseShort(), r.xMax = i.parseShort(), r.yMax = i.parseShort(), r.macStyle = i.parseUShort(), r.lowestRecPPEM = i.parseUShort(), r.fontDirectionHint = i.parseShort(), r.indexToLocFormat = i.parseShort(), r.glyphDataFormat = i.parseShort(), r;
            },
            make: function (e) {
              var t = Math.round(new Date().getTime() / 1e3) + 2082844800,
                  r = t;
              return e.createdTimestamp && (r = e.createdTimestamp + 2082844800), new $.Table("head", [{
                name: "version",
                type: "FIXED",
                value: 65536
              }, {
                name: "fontRevision",
                type: "FIXED",
                value: 65536
              }, {
                name: "checkSumAdjustment",
                type: "ULONG",
                value: 0
              }, {
                name: "magicNumber",
                type: "ULONG",
                value: 1594834165
              }, {
                name: "flags",
                type: "USHORT",
                value: 0
              }, {
                name: "unitsPerEm",
                type: "USHORT",
                value: 1e3
              }, {
                name: "created",
                type: "LONGDATETIME",
                value: r
              }, {
                name: "modified",
                type: "LONGDATETIME",
                value: t
              }, {
                name: "xMin",
                type: "SHORT",
                value: 0
              }, {
                name: "yMin",
                type: "SHORT",
                value: 0
              }, {
                name: "xMax",
                type: "SHORT",
                value: 0
              }, {
                name: "yMax",
                type: "SHORT",
                value: 0
              }, {
                name: "macStyle",
                type: "USHORT",
                value: 0
              }, {
                name: "lowestRecPPEM",
                type: "USHORT",
                value: 0
              }, {
                name: "fontDirectionHint",
                type: "SHORT",
                value: 2
              }, {
                name: "indexToLocFormat",
                type: "SHORT",
                value: 0
              }, {
                name: "glyphDataFormat",
                type: "SHORT",
                value: 0
              }], e);
            }
          };
          var je = {
            parse: function (e, t) {
              var r = {},
                  i = new se.Parser(e, t);
              return r.version = i.parseVersion(), r.ascender = i.parseShort(), r.descender = i.parseShort(), r.lineGap = i.parseShort(), r.advanceWidthMax = i.parseUShort(), r.minLeftSideBearing = i.parseShort(), r.minRightSideBearing = i.parseShort(), r.xMaxExtent = i.parseShort(), r.caretSlopeRise = i.parseShort(), r.caretSlopeRun = i.parseShort(), r.caretOffset = i.parseShort(), i.relativeOffset += 8, r.metricDataFormat = i.parseShort(), r.numberOfHMetrics = i.parseUShort(), r;
            },
            make: function (e) {
              return new $.Table("hhea", [{
                name: "version",
                type: "FIXED",
                value: 65536
              }, {
                name: "ascender",
                type: "FWORD",
                value: 0
              }, {
                name: "descender",
                type: "FWORD",
                value: 0
              }, {
                name: "lineGap",
                type: "FWORD",
                value: 0
              }, {
                name: "advanceWidthMax",
                type: "UFWORD",
                value: 0
              }, {
                name: "minLeftSideBearing",
                type: "FWORD",
                value: 0
              }, {
                name: "minRightSideBearing",
                type: "FWORD",
                value: 0
              }, {
                name: "xMaxExtent",
                type: "FWORD",
                value: 0
              }, {
                name: "caretSlopeRise",
                type: "SHORT",
                value: 1
              }, {
                name: "caretSlopeRun",
                type: "SHORT",
                value: 0
              }, {
                name: "caretOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved1",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved2",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved3",
                type: "SHORT",
                value: 0
              }, {
                name: "reserved4",
                type: "SHORT",
                value: 0
              }, {
                name: "metricDataFormat",
                type: "SHORT",
                value: 0
              }, {
                name: "numberOfHMetrics",
                type: "USHORT",
                value: 0
              }], e);
            }
          };
          var Ve = {
            parse: function (e, t, r, i, n) {
              for (var a, o, s = new se.Parser(e, t), l = 0; l < i; l += 1) {
                l < r && (a = s.parseUShort(), o = s.parseShort());
                var u = n.get(l);
                u.advanceWidth = a, u.leftSideBearing = o;
              }
            },
            make: function (e) {
              for (var t = new $.Table("hmtx", []), r = 0; r < e.length; r += 1) {
                var i = e.get(r),
                    n = i.advanceWidth || 0,
                    a = i.leftSideBearing || 0;
                t.fields.push({
                  name: "advanceWidth_" + r,
                  type: "USHORT",
                  value: n
                }), t.fields.push({
                  name: "leftSideBearing_" + r,
                  type: "SHORT",
                  value: a
                });
              }

              return t;
            }
          };
          var ze = {
            make: function (e) {
              for (var t = new $.Table("ltag", [{
                name: "version",
                type: "ULONG",
                value: 1
              }, {
                name: "flags",
                type: "ULONG",
                value: 0
              }, {
                name: "numTags",
                type: "ULONG",
                value: e.length
              }]), r = "", i = 12 + 4 * e.length, n = 0; n < e.length; ++n) {
                var a = r.indexOf(e[n]);
                a < 0 && (a = r.length, r += e[n]), t.fields.push({
                  name: "offset " + n,
                  type: "USHORT",
                  value: i + a
                }), t.fields.push({
                  name: "length " + n,
                  type: "USHORT",
                  value: e[n].length
                });
              }

              return t.fields.push({
                name: "stringPool",
                type: "CHARARRAY",
                value: r
              }), t;
            },
            parse: function (e, t) {
              var r = new se.Parser(e, t),
                  i = r.parseULong();
              P.argument(1 === i, "Unsupported ltag table version."), r.skip("uLong", 1);

              for (var n = r.parseULong(), a = [], o = 0; o < n; o++) {
                for (var s = "", l = t + r.parseUShort(), u = r.parseUShort(), h = l; h < l + u; ++h) s += String.fromCharCode(e.getInt8(h));

                a.push(s);
              }

              return a;
            }
          };
          var He = {
            parse: function (e, t) {
              var r = {},
                  i = new se.Parser(e, t);
              return r.version = i.parseVersion(), r.numGlyphs = i.parseUShort(), 1 === r.version && (r.maxPoints = i.parseUShort(), r.maxContours = i.parseUShort(), r.maxCompositePoints = i.parseUShort(), r.maxCompositeContours = i.parseUShort(), r.maxZones = i.parseUShort(), r.maxTwilightPoints = i.parseUShort(), r.maxStorage = i.parseUShort(), r.maxFunctionDefs = i.parseUShort(), r.maxInstructionDefs = i.parseUShort(), r.maxStackElements = i.parseUShort(), r.maxSizeOfInstructions = i.parseUShort(), r.maxComponentElements = i.parseUShort(), r.maxComponentDepth = i.parseUShort()), r;
            },
            make: function (e) {
              return new $.Table("maxp", [{
                name: "version",
                type: "FIXED",
                value: 20480
              }, {
                name: "numGlyphs",
                type: "USHORT",
                value: e
              }]);
            }
          },
              We = ["copyright", "fontFamily", "fontSubfamily", "uniqueID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "manufacturerURL", "designerURL", "license", "licenseURL", "reserved", "preferredFamily", "preferredSubfamily", "compatibleFullName", "sampleText", "postScriptFindFontName", "wwsFamily", "wwsSubfamily"],
              qe = {
            0: "en",
            1: "fr",
            2: "de",
            3: "it",
            4: "nl",
            5: "sv",
            6: "es",
            7: "da",
            8: "pt",
            9: "no",
            10: "he",
            11: "ja",
            12: "ar",
            13: "fi",
            14: "el",
            15: "is",
            16: "mt",
            17: "tr",
            18: "hr",
            19: "zh-Hant",
            20: "ur",
            21: "hi",
            22: "th",
            23: "ko",
            24: "lt",
            25: "pl",
            26: "hu",
            27: "es",
            28: "lv",
            29: "se",
            30: "fo",
            31: "fa",
            32: "ru",
            33: "zh",
            34: "nl-BE",
            35: "ga",
            36: "sq",
            37: "ro",
            38: "cz",
            39: "sk",
            40: "si",
            41: "yi",
            42: "sr",
            43: "mk",
            44: "bg",
            45: "uk",
            46: "be",
            47: "uz",
            48: "kk",
            49: "az-Cyrl",
            50: "az-Arab",
            51: "hy",
            52: "ka",
            53: "mo",
            54: "ky",
            55: "tg",
            56: "tk",
            57: "mn-CN",
            58: "mn",
            59: "ps",
            60: "ks",
            61: "ku",
            62: "sd",
            63: "bo",
            64: "ne",
            65: "sa",
            66: "mr",
            67: "bn",
            68: "as",
            69: "gu",
            70: "pa",
            71: "or",
            72: "ml",
            73: "kn",
            74: "ta",
            75: "te",
            76: "si",
            77: "my",
            78: "km",
            79: "lo",
            80: "vi",
            81: "id",
            82: "tl",
            83: "ms",
            84: "ms-Arab",
            85: "am",
            86: "ti",
            87: "om",
            88: "so",
            89: "sw",
            90: "rw",
            91: "rn",
            92: "ny",
            93: "mg",
            94: "eo",
            128: "cy",
            129: "eu",
            130: "ca",
            131: "la",
            132: "qu",
            133: "gn",
            134: "ay",
            135: "tt",
            136: "ug",
            137: "dz",
            138: "jv",
            139: "su",
            140: "gl",
            141: "af",
            142: "br",
            143: "iu",
            144: "gd",
            145: "gv",
            146: "ga",
            147: "to",
            148: "el-polyton",
            149: "kl",
            150: "az",
            151: "nn"
          },
              Xe = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 5,
            11: 1,
            12: 4,
            13: 0,
            14: 6,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 2,
            20: 4,
            21: 9,
            22: 21,
            23: 3,
            24: 29,
            25: 29,
            26: 29,
            27: 29,
            28: 29,
            29: 0,
            30: 0,
            31: 4,
            32: 7,
            33: 25,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 29,
            39: 29,
            40: 0,
            41: 5,
            42: 7,
            43: 7,
            44: 7,
            45: 7,
            46: 7,
            47: 7,
            48: 7,
            49: 7,
            50: 4,
            51: 24,
            52: 23,
            53: 7,
            54: 7,
            55: 7,
            56: 7,
            57: 27,
            58: 7,
            59: 4,
            60: 4,
            61: 4,
            62: 4,
            63: 26,
            64: 9,
            65: 9,
            66: 9,
            67: 13,
            68: 13,
            69: 11,
            70: 10,
            71: 12,
            72: 17,
            73: 16,
            74: 14,
            75: 15,
            76: 18,
            77: 19,
            78: 20,
            79: 22,
            80: 30,
            81: 0,
            82: 0,
            83: 0,
            84: 4,
            85: 28,
            86: 28,
            87: 28,
            88: 0,
            89: 0,
            90: 0,
            91: 0,
            92: 0,
            93: 0,
            94: 0,
            128: 0,
            129: 0,
            130: 0,
            131: 0,
            132: 0,
            133: 0,
            134: 0,
            135: 7,
            136: 4,
            137: 26,
            138: 0,
            139: 0,
            140: 0,
            141: 0,
            142: 0,
            143: 28,
            144: 0,
            145: 0,
            146: 0,
            147: 0,
            148: 6,
            149: 0,
            150: 0,
            151: 0
          },
              Ye = {
            1078: "af",
            1052: "sq",
            1156: "gsw",
            1118: "am",
            5121: "ar-DZ",
            15361: "ar-BH",
            3073: "ar",
            2049: "ar-IQ",
            11265: "ar-JO",
            13313: "ar-KW",
            12289: "ar-LB",
            4097: "ar-LY",
            6145: "ary",
            8193: "ar-OM",
            16385: "ar-QA",
            1025: "ar-SA",
            10241: "ar-SY",
            7169: "aeb",
            14337: "ar-AE",
            9217: "ar-YE",
            1067: "hy",
            1101: "as",
            2092: "az-Cyrl",
            1068: "az",
            1133: "ba",
            1069: "eu",
            1059: "be",
            2117: "bn",
            1093: "bn-IN",
            8218: "bs-Cyrl",
            5146: "bs",
            1150: "br",
            1026: "bg",
            1027: "ca",
            3076: "zh-HK",
            5124: "zh-MO",
            2052: "zh",
            4100: "zh-SG",
            1028: "zh-TW",
            1155: "co",
            1050: "hr",
            4122: "hr-BA",
            1029: "cs",
            1030: "da",
            1164: "prs",
            1125: "dv",
            2067: "nl-BE",
            1043: "nl",
            3081: "en-AU",
            10249: "en-BZ",
            4105: "en-CA",
            9225: "en-029",
            16393: "en-IN",
            6153: "en-IE",
            8201: "en-JM",
            17417: "en-MY",
            5129: "en-NZ",
            13321: "en-PH",
            18441: "en-SG",
            7177: "en-ZA",
            11273: "en-TT",
            2057: "en-GB",
            1033: "en",
            12297: "en-ZW",
            1061: "et",
            1080: "fo",
            1124: "fil",
            1035: "fi",
            2060: "fr-BE",
            3084: "fr-CA",
            1036: "fr",
            5132: "fr-LU",
            6156: "fr-MC",
            4108: "fr-CH",
            1122: "fy",
            1110: "gl",
            1079: "ka",
            3079: "de-AT",
            1031: "de",
            5127: "de-LI",
            4103: "de-LU",
            2055: "de-CH",
            1032: "el",
            1135: "kl",
            1095: "gu",
            1128: "ha",
            1037: "he",
            1081: "hi",
            1038: "hu",
            1039: "is",
            1136: "ig",
            1057: "id",
            1117: "iu",
            2141: "iu-Latn",
            2108: "ga",
            1076: "xh",
            1077: "zu",
            1040: "it",
            2064: "it-CH",
            1041: "ja",
            1099: "kn",
            1087: "kk",
            1107: "km",
            1158: "quc",
            1159: "rw",
            1089: "sw",
            1111: "kok",
            1042: "ko",
            1088: "ky",
            1108: "lo",
            1062: "lv",
            1063: "lt",
            2094: "dsb",
            1134: "lb",
            1071: "mk",
            2110: "ms-BN",
            1086: "ms",
            1100: "ml",
            1082: "mt",
            1153: "mi",
            1146: "arn",
            1102: "mr",
            1148: "moh",
            1104: "mn",
            2128: "mn-CN",
            1121: "ne",
            1044: "nb",
            2068: "nn",
            1154: "oc",
            1096: "or",
            1123: "ps",
            1045: "pl",
            1046: "pt",
            2070: "pt-PT",
            1094: "pa",
            1131: "qu-BO",
            2155: "qu-EC",
            3179: "qu",
            1048: "ro",
            1047: "rm",
            1049: "ru",
            9275: "smn",
            4155: "smj-NO",
            5179: "smj",
            3131: "se-FI",
            1083: "se",
            2107: "se-SE",
            8251: "sms",
            6203: "sma-NO",
            7227: "sms",
            1103: "sa",
            7194: "sr-Cyrl-BA",
            3098: "sr",
            6170: "sr-Latn-BA",
            2074: "sr-Latn",
            1132: "nso",
            1074: "tn",
            1115: "si",
            1051: "sk",
            1060: "sl",
            11274: "es-AR",
            16394: "es-BO",
            13322: "es-CL",
            9226: "es-CO",
            5130: "es-CR",
            7178: "es-DO",
            12298: "es-EC",
            17418: "es-SV",
            4106: "es-GT",
            18442: "es-HN",
            2058: "es-MX",
            19466: "es-NI",
            6154: "es-PA",
            15370: "es-PY",
            10250: "es-PE",
            20490: "es-PR",
            3082: "es",
            1034: "es",
            21514: "es-US",
            14346: "es-UY",
            8202: "es-VE",
            2077: "sv-FI",
            1053: "sv",
            1114: "syr",
            1064: "tg",
            2143: "tzm",
            1097: "ta",
            1092: "tt",
            1098: "te",
            1054: "th",
            1105: "bo",
            1055: "tr",
            1090: "tk",
            1152: "ug",
            1058: "uk",
            1070: "hsb",
            1056: "ur",
            2115: "uz-Cyrl",
            1091: "uz",
            1066: "vi",
            1106: "cy",
            1160: "wo",
            1157: "sah",
            1144: "ii",
            1130: "yo"
          };

          function Ze(e, t, r) {
            switch (e) {
              case 0:
                if (65535 === t) return "und";
                if (r) return r[t];
                break;

              case 1:
                return qe[t];

              case 3:
                return Ye[t];
            }
          }

          var Qe = "utf-16",
              Ke = {
            0: "macintosh",
            1: "x-mac-japanese",
            2: "x-mac-chinesetrad",
            3: "x-mac-korean",
            6: "x-mac-greek",
            7: "x-mac-cyrillic",
            9: "x-mac-devanagai",
            10: "x-mac-gurmukhi",
            11: "x-mac-gujarati",
            12: "x-mac-oriya",
            13: "x-mac-bengali",
            14: "x-mac-tamil",
            15: "x-mac-telugu",
            16: "x-mac-kannada",
            17: "x-mac-malayalam",
            18: "x-mac-sinhalese",
            19: "x-mac-burmese",
            20: "x-mac-khmer",
            21: "x-mac-thai",
            22: "x-mac-lao",
            23: "x-mac-georgian",
            24: "x-mac-armenian",
            25: "x-mac-chinesesimp",
            26: "x-mac-tibetan",
            27: "x-mac-mongolian",
            28: "x-mac-ethiopic",
            29: "x-mac-ce",
            30: "x-mac-vietnamese",
            31: "x-mac-extarabic"
          },
              Je = {
            15: "x-mac-icelandic",
            17: "x-mac-turkish",
            18: "x-mac-croatian",
            24: "x-mac-ce",
            25: "x-mac-ce",
            26: "x-mac-ce",
            27: "x-mac-ce",
            28: "x-mac-ce",
            30: "x-mac-icelandic",
            37: "x-mac-romanian",
            38: "x-mac-ce",
            39: "x-mac-ce",
            40: "x-mac-ce",
            143: "x-mac-inuit",
            146: "x-mac-gaelic"
          };

          function $e(e, t, r) {
            switch (e) {
              case 0:
                return Qe;

              case 1:
                return Je[r] || Ke[t];

              case 3:
                if (1 === t || 10 === t) return Qe;
            }
          }

          function et(e) {
            var t = {};

            for (var r in e) t[e[r]] = parseInt(r);

            return t;
          }

          function tt(e, t, r, i, n, a) {
            return new $.Record("NameRecord", [{
              name: "platformID",
              type: "USHORT",
              value: e
            }, {
              name: "encodingID",
              type: "USHORT",
              value: t
            }, {
              name: "languageID",
              type: "USHORT",
              value: r
            }, {
              name: "nameID",
              type: "USHORT",
              value: i
            }, {
              name: "length",
              type: "USHORT",
              value: n
            }, {
              name: "offset",
              type: "USHORT",
              value: a
            }]);
          }

          function rt(e, t) {
            var r = function (e, t) {
              var r = e.length,
                  i = t.length - r + 1;

              e: for (var n = 0; n < i; n++) for (; n < i; n++) {
                for (var a = 0; a < r; a++) if (t[n + a] !== e[a]) continue e;

                return n;
              }

              return -1;
            }(e, t);

            if (r < 0) {
              r = t.length;

              for (var i = 0, n = e.length; i < n; ++i) t.push(e[i]);
            }

            return r;
          }

          var it = {
            parse: function (e, t, r) {
              for (var i = {}, n = new se.Parser(e, t), a = n.parseUShort(), o = n.parseUShort(), s = n.offset + n.parseUShort(), l = 0; l < o; l++) {
                var u = n.parseUShort(),
                    h = n.parseUShort(),
                    c = n.parseUShort(),
                    f = n.parseUShort(),
                    d = We[f] || f,
                    p = n.parseUShort(),
                    m = n.parseUShort(),
                    y = Ze(u, c, r),
                    v = $e(u, h, c);

                if (void 0 !== v && void 0 !== y) {
                  var g = void 0;

                  if (g = v === Qe ? D.UTF16(e, s + m, p) : D.MACSTRING(e, s + m, p, v)) {
                    var b = i[d];
                    void 0 === b && (b = i[d] = {}), b[y] = g;
                  }
                }
              }

              return 1 === a && n.parseUShort(), i;
            },
            make: function (e, t) {
              var r,
                  i = [],
                  n = {},
                  a = et(We);

              for (var o in e) {
                var s = a[o];
                if (void 0 === s && (s = o), r = parseInt(s), isNaN(r)) throw new Error('Name table entry "' + o + '" does not exist, see nameTableNames for complete list.');
                n[r] = e[o], i.push(r);
              }

              for (var l = et(qe), u = et(Ye), h = [], c = [], f = 0; f < i.length; f++) {
                var d = n[r = i[f]];

                for (var p in d) {
                  var m = d[p],
                      y = 1,
                      v = l[p],
                      g = Xe[v],
                      b = $e(y, g, v),
                      _ = k.MACSTRING(m, b);

                  void 0 === _ && (y = 0, (v = t.indexOf(p)) < 0 && (v = t.length, t.push(p)), g = 4, _ = k.UTF16(m));
                  var x = rt(_, c);
                  h.push(tt(y, g, v, r, _.length, x));
                  var w = u[p];

                  if (void 0 !== w) {
                    var S = k.UTF16(m),
                        M = rt(S, c);
                    h.push(tt(3, 1, w, r, S.length, M));
                  }
                }
              }

              h.sort(function (e, t) {
                return e.platformID - t.platformID || e.encodingID - t.encodingID || e.languageID - t.languageID || e.nameID - t.nameID;
              });

              for (var T = new $.Table("name", [{
                name: "format",
                type: "USHORT",
                value: 0
              }, {
                name: "count",
                type: "USHORT",
                value: h.length
              }, {
                name: "stringOffset",
                type: "USHORT",
                value: 6 + 12 * h.length
              }]), E = 0; E < h.length; E++) T.fields.push({
                name: "record_" + E,
                type: "RECORD",
                value: h[E]
              });

              return T.fields.push({
                name: "strings",
                type: "LITERAL",
                value: c
              }), T;
            }
          },
              nt = [{
            begin: 0,
            end: 127
          }, {
            begin: 128,
            end: 255
          }, {
            begin: 256,
            end: 383
          }, {
            begin: 384,
            end: 591
          }, {
            begin: 592,
            end: 687
          }, {
            begin: 688,
            end: 767
          }, {
            begin: 768,
            end: 879
          }, {
            begin: 880,
            end: 1023
          }, {
            begin: 11392,
            end: 11519
          }, {
            begin: 1024,
            end: 1279
          }, {
            begin: 1328,
            end: 1423
          }, {
            begin: 1424,
            end: 1535
          }, {
            begin: 42240,
            end: 42559
          }, {
            begin: 1536,
            end: 1791
          }, {
            begin: 1984,
            end: 2047
          }, {
            begin: 2304,
            end: 2431
          }, {
            begin: 2432,
            end: 2559
          }, {
            begin: 2560,
            end: 2687
          }, {
            begin: 2688,
            end: 2815
          }, {
            begin: 2816,
            end: 2943
          }, {
            begin: 2944,
            end: 3071
          }, {
            begin: 3072,
            end: 3199
          }, {
            begin: 3200,
            end: 3327
          }, {
            begin: 3328,
            end: 3455
          }, {
            begin: 3584,
            end: 3711
          }, {
            begin: 3712,
            end: 3839
          }, {
            begin: 4256,
            end: 4351
          }, {
            begin: 6912,
            end: 7039
          }, {
            begin: 4352,
            end: 4607
          }, {
            begin: 7680,
            end: 7935
          }, {
            begin: 7936,
            end: 8191
          }, {
            begin: 8192,
            end: 8303
          }, {
            begin: 8304,
            end: 8351
          }, {
            begin: 8352,
            end: 8399
          }, {
            begin: 8400,
            end: 8447
          }, {
            begin: 8448,
            end: 8527
          }, {
            begin: 8528,
            end: 8591
          }, {
            begin: 8592,
            end: 8703
          }, {
            begin: 8704,
            end: 8959
          }, {
            begin: 8960,
            end: 9215
          }, {
            begin: 9216,
            end: 9279
          }, {
            begin: 9280,
            end: 9311
          }, {
            begin: 9312,
            end: 9471
          }, {
            begin: 9472,
            end: 9599
          }, {
            begin: 9600,
            end: 9631
          }, {
            begin: 9632,
            end: 9727
          }, {
            begin: 9728,
            end: 9983
          }, {
            begin: 9984,
            end: 10175
          }, {
            begin: 12288,
            end: 12351
          }, {
            begin: 12352,
            end: 12447
          }, {
            begin: 12448,
            end: 12543
          }, {
            begin: 12544,
            end: 12591
          }, {
            begin: 12592,
            end: 12687
          }, {
            begin: 43072,
            end: 43135
          }, {
            begin: 12800,
            end: 13055
          }, {
            begin: 13056,
            end: 13311
          }, {
            begin: 44032,
            end: 55215
          }, {
            begin: 55296,
            end: 57343
          }, {
            begin: 67840,
            end: 67871
          }, {
            begin: 19968,
            end: 40959
          }, {
            begin: 57344,
            end: 63743
          }, {
            begin: 12736,
            end: 12783
          }, {
            begin: 64256,
            end: 64335
          }, {
            begin: 64336,
            end: 65023
          }, {
            begin: 65056,
            end: 65071
          }, {
            begin: 65040,
            end: 65055
          }, {
            begin: 65104,
            end: 65135
          }, {
            begin: 65136,
            end: 65279
          }, {
            begin: 65280,
            end: 65519
          }, {
            begin: 65520,
            end: 65535
          }, {
            begin: 3840,
            end: 4095
          }, {
            begin: 1792,
            end: 1871
          }, {
            begin: 1920,
            end: 1983
          }, {
            begin: 3456,
            end: 3583
          }, {
            begin: 4096,
            end: 4255
          }, {
            begin: 4608,
            end: 4991
          }, {
            begin: 5024,
            end: 5119
          }, {
            begin: 5120,
            end: 5759
          }, {
            begin: 5760,
            end: 5791
          }, {
            begin: 5792,
            end: 5887
          }, {
            begin: 6016,
            end: 6143
          }, {
            begin: 6144,
            end: 6319
          }, {
            begin: 10240,
            end: 10495
          }, {
            begin: 40960,
            end: 42127
          }, {
            begin: 5888,
            end: 5919
          }, {
            begin: 66304,
            end: 66351
          }, {
            begin: 66352,
            end: 66383
          }, {
            begin: 66560,
            end: 66639
          }, {
            begin: 118784,
            end: 119039
          }, {
            begin: 119808,
            end: 120831
          }, {
            begin: 1044480,
            end: 1048573
          }, {
            begin: 65024,
            end: 65039
          }, {
            begin: 917504,
            end: 917631
          }, {
            begin: 6400,
            end: 6479
          }, {
            begin: 6480,
            end: 6527
          }, {
            begin: 6528,
            end: 6623
          }, {
            begin: 6656,
            end: 6687
          }, {
            begin: 11264,
            end: 11359
          }, {
            begin: 11568,
            end: 11647
          }, {
            begin: 19904,
            end: 19967
          }, {
            begin: 43008,
            end: 43055
          }, {
            begin: 65536,
            end: 65663
          }, {
            begin: 65856,
            end: 65935
          }, {
            begin: 66432,
            end: 66463
          }, {
            begin: 66464,
            end: 66527
          }, {
            begin: 66640,
            end: 66687
          }, {
            begin: 66688,
            end: 66735
          }, {
            begin: 67584,
            end: 67647
          }, {
            begin: 68096,
            end: 68191
          }, {
            begin: 119552,
            end: 119647
          }, {
            begin: 73728,
            end: 74751
          }, {
            begin: 119648,
            end: 119679
          }, {
            begin: 7040,
            end: 7103
          }, {
            begin: 7168,
            end: 7247
          }, {
            begin: 7248,
            end: 7295
          }, {
            begin: 43136,
            end: 43231
          }, {
            begin: 43264,
            end: 43311
          }, {
            begin: 43312,
            end: 43359
          }, {
            begin: 43520,
            end: 43615
          }, {
            begin: 65936,
            end: 65999
          }, {
            begin: 66e3,
            end: 66047
          }, {
            begin: 66208,
            end: 66271
          }, {
            begin: 127024,
            end: 127135
          }];
          var at = {
            parse: function (e, t) {
              var r = {},
                  i = new se.Parser(e, t);
              r.version = i.parseUShort(), r.xAvgCharWidth = i.parseShort(), r.usWeightClass = i.parseUShort(), r.usWidthClass = i.parseUShort(), r.fsType = i.parseUShort(), r.ySubscriptXSize = i.parseShort(), r.ySubscriptYSize = i.parseShort(), r.ySubscriptXOffset = i.parseShort(), r.ySubscriptYOffset = i.parseShort(), r.ySuperscriptXSize = i.parseShort(), r.ySuperscriptYSize = i.parseShort(), r.ySuperscriptXOffset = i.parseShort(), r.ySuperscriptYOffset = i.parseShort(), r.yStrikeoutSize = i.parseShort(), r.yStrikeoutPosition = i.parseShort(), r.sFamilyClass = i.parseShort(), r.panose = [];

              for (var n = 0; n < 10; n++) r.panose[n] = i.parseByte();

              return r.ulUnicodeRange1 = i.parseULong(), r.ulUnicodeRange2 = i.parseULong(), r.ulUnicodeRange3 = i.parseULong(), r.ulUnicodeRange4 = i.parseULong(), r.achVendID = String.fromCharCode(i.parseByte(), i.parseByte(), i.parseByte(), i.parseByte()), r.fsSelection = i.parseUShort(), r.usFirstCharIndex = i.parseUShort(), r.usLastCharIndex = i.parseUShort(), r.sTypoAscender = i.parseShort(), r.sTypoDescender = i.parseShort(), r.sTypoLineGap = i.parseShort(), r.usWinAscent = i.parseUShort(), r.usWinDescent = i.parseUShort(), 1 <= r.version && (r.ulCodePageRange1 = i.parseULong(), r.ulCodePageRange2 = i.parseULong()), 2 <= r.version && (r.sxHeight = i.parseShort(), r.sCapHeight = i.parseShort(), r.usDefaultChar = i.parseUShort(), r.usBreakChar = i.parseUShort(), r.usMaxContent = i.parseUShort()), r;
            },
            make: function (e) {
              return new $.Table("OS/2", [{
                name: "version",
                type: "USHORT",
                value: 3
              }, {
                name: "xAvgCharWidth",
                type: "SHORT",
                value: 0
              }, {
                name: "usWeightClass",
                type: "USHORT",
                value: 0
              }, {
                name: "usWidthClass",
                type: "USHORT",
                value: 0
              }, {
                name: "fsType",
                type: "USHORT",
                value: 0
              }, {
                name: "ySubscriptXSize",
                type: "SHORT",
                value: 650
              }, {
                name: "ySubscriptYSize",
                type: "SHORT",
                value: 699
              }, {
                name: "ySubscriptXOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "ySubscriptYOffset",
                type: "SHORT",
                value: 140
              }, {
                name: "ySuperscriptXSize",
                type: "SHORT",
                value: 650
              }, {
                name: "ySuperscriptYSize",
                type: "SHORT",
                value: 699
              }, {
                name: "ySuperscriptXOffset",
                type: "SHORT",
                value: 0
              }, {
                name: "ySuperscriptYOffset",
                type: "SHORT",
                value: 479
              }, {
                name: "yStrikeoutSize",
                type: "SHORT",
                value: 49
              }, {
                name: "yStrikeoutPosition",
                type: "SHORT",
                value: 258
              }, {
                name: "sFamilyClass",
                type: "SHORT",
                value: 0
              }, {
                name: "bFamilyType",
                type: "BYTE",
                value: 0
              }, {
                name: "bSerifStyle",
                type: "BYTE",
                value: 0
              }, {
                name: "bWeight",
                type: "BYTE",
                value: 0
              }, {
                name: "bProportion",
                type: "BYTE",
                value: 0
              }, {
                name: "bContrast",
                type: "BYTE",
                value: 0
              }, {
                name: "bStrokeVariation",
                type: "BYTE",
                value: 0
              }, {
                name: "bArmStyle",
                type: "BYTE",
                value: 0
              }, {
                name: "bLetterform",
                type: "BYTE",
                value: 0
              }, {
                name: "bMidline",
                type: "BYTE",
                value: 0
              }, {
                name: "bXHeight",
                type: "BYTE",
                value: 0
              }, {
                name: "ulUnicodeRange1",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange2",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange3",
                type: "ULONG",
                value: 0
              }, {
                name: "ulUnicodeRange4",
                type: "ULONG",
                value: 0
              }, {
                name: "achVendID",
                type: "CHARARRAY",
                value: "XXXX"
              }, {
                name: "fsSelection",
                type: "USHORT",
                value: 0
              }, {
                name: "usFirstCharIndex",
                type: "USHORT",
                value: 0
              }, {
                name: "usLastCharIndex",
                type: "USHORT",
                value: 0
              }, {
                name: "sTypoAscender",
                type: "SHORT",
                value: 0
              }, {
                name: "sTypoDescender",
                type: "SHORT",
                value: 0
              }, {
                name: "sTypoLineGap",
                type: "SHORT",
                value: 0
              }, {
                name: "usWinAscent",
                type: "USHORT",
                value: 0
              }, {
                name: "usWinDescent",
                type: "USHORT",
                value: 0
              }, {
                name: "ulCodePageRange1",
                type: "ULONG",
                value: 0
              }, {
                name: "ulCodePageRange2",
                type: "ULONG",
                value: 0
              }, {
                name: "sxHeight",
                type: "SHORT",
                value: 0
              }, {
                name: "sCapHeight",
                type: "SHORT",
                value: 0
              }, {
                name: "usDefaultChar",
                type: "USHORT",
                value: 0
              }, {
                name: "usBreakChar",
                type: "USHORT",
                value: 0
              }, {
                name: "usMaxContext",
                type: "USHORT",
                value: 0
              }], e);
            },
            unicodeRanges: nt,
            getUnicodeRange: function (e) {
              for (var t = 0; t < nt.length; t += 1) {
                var r = nt[t];
                if (e >= r.begin && e < r.end) return t;
              }

              return -1;
            }
          };
          var ot = {
            parse: function (e, t) {
              var r = {},
                  i = new se.Parser(e, t);

              switch (r.version = i.parseVersion(), r.italicAngle = i.parseFixed(), r.underlinePosition = i.parseShort(), r.underlineThickness = i.parseShort(), r.isFixedPitch = i.parseULong(), r.minMemType42 = i.parseULong(), r.maxMemType42 = i.parseULong(), r.minMemType1 = i.parseULong(), r.maxMemType1 = i.parseULong(), r.version) {
                case 1:
                  r.names = fe.slice();
                  break;

                case 2:
                  r.numberOfGlyphs = i.parseUShort(), r.glyphNameIndex = new Array(r.numberOfGlyphs);

                  for (var n = 0; n < r.numberOfGlyphs; n++) r.glyphNameIndex[n] = i.parseUShort();

                  r.names = [];

                  for (var a = 0; a < r.numberOfGlyphs; a++) if (r.glyphNameIndex[a] >= fe.length) {
                    var o = i.parseChar();
                    r.names.push(i.parseString(o));
                  }

                  break;

                case 2.5:
                  r.numberOfGlyphs = i.parseUShort(), r.offset = new Array(r.numberOfGlyphs);

                  for (var s = 0; s < r.numberOfGlyphs; s++) r.offset[s] = i.parseChar();

              }

              return r;
            },
            make: function () {
              return new $.Table("post", [{
                name: "version",
                type: "FIXED",
                value: 196608
              }, {
                name: "italicAngle",
                type: "FIXED",
                value: 0
              }, {
                name: "underlinePosition",
                type: "FWORD",
                value: 0
              }, {
                name: "underlineThickness",
                type: "FWORD",
                value: 0
              }, {
                name: "isFixedPitch",
                type: "ULONG",
                value: 0
              }, {
                name: "minMemType42",
                type: "ULONG",
                value: 0
              }, {
                name: "maxMemType42",
                type: "ULONG",
                value: 0
              }, {
                name: "minMemType1",
                type: "ULONG",
                value: 0
              }, {
                name: "maxMemType1",
                type: "ULONG",
                value: 0
              }]);
            }
          },
              st = new Array(9);
          st[1] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              substFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              deltaGlyphId: this.parseUShort()
            } : 2 === t ? {
              substFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              substitute: this.parseOffset16List()
            } : void P.assert(!1, "0x" + e.toString(16) + ": lookup type 1 format must be 1 or 2.");
          }, st[2] = function () {
            var e = this.parseUShort();
            return P.argument(1 === e, "GSUB Multiple Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              sequences: this.parseListOfLists()
            };
          }, st[3] = function () {
            var e = this.parseUShort();
            return P.argument(1 === e, "GSUB Alternate Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              alternateSets: this.parseListOfLists()
            };
          }, st[4] = function () {
            var e = this.parseUShort();
            return P.argument(1 === e, "GSUB ligature table identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              ligatureSets: this.parseListOfLists(function () {
                return {
                  ligGlyph: this.parseUShort(),
                  components: this.parseUShortList(this.parseUShort() - 1)
                };
              })
            };
          };
          var lt = {
            sequenceIndex: ae.uShort,
            lookupListIndex: ae.uShort
          };
          st[5] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            if (1 === t) return {
              substFormat: t,
              coverage: this.parsePointer(ae.coverage),
              ruleSets: this.parseListOfLists(function () {
                var e = this.parseUShort(),
                    t = this.parseUShort();
                return {
                  input: this.parseUShortList(e - 1),
                  lookupRecords: this.parseRecordList(t, lt)
                };
              })
            };
            if (2 === t) return {
              substFormat: t,
              coverage: this.parsePointer(ae.coverage),
              classDef: this.parsePointer(ae.classDef),
              classSets: this.parseListOfLists(function () {
                var e = this.parseUShort(),
                    t = this.parseUShort();
                return {
                  classes: this.parseUShortList(e - 1),
                  lookupRecords: this.parseRecordList(t, lt)
                };
              })
            };

            if (3 === t) {
              var r = this.parseUShort(),
                  i = this.parseUShort();
              return {
                substFormat: t,
                coverages: this.parseList(r, ae.pointer(ae.coverage)),
                lookupRecords: this.parseRecordList(i, lt)
              };
            }

            P.assert(!1, "0x" + e.toString(16) + ": lookup type 5 format must be 1, 2 or 3.");
          }, st[6] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              substFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              chainRuleSets: this.parseListOfLists(function () {
                return {
                  backtrack: this.parseUShortList(),
                  input: this.parseUShortList(this.parseShort() - 1),
                  lookahead: this.parseUShortList(),
                  lookupRecords: this.parseRecordList(lt)
                };
              })
            } : 2 === t ? {
              substFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              backtrackClassDef: this.parsePointer(ae.classDef),
              inputClassDef: this.parsePointer(ae.classDef),
              lookaheadClassDef: this.parsePointer(ae.classDef),
              chainClassSet: this.parseListOfLists(function () {
                return {
                  backtrack: this.parseUShortList(),
                  input: this.parseUShortList(this.parseShort() - 1),
                  lookahead: this.parseUShortList(),
                  lookupRecords: this.parseRecordList(lt)
                };
              })
            } : 3 === t ? {
              substFormat: 3,
              backtrackCoverage: this.parseList(ae.pointer(ae.coverage)),
              inputCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookaheadCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookupRecords: this.parseRecordList(lt)
            } : void P.assert(!1, "0x" + e.toString(16) + ": lookup type 6 format must be 1, 2 or 3.");
          }, st[7] = function () {
            var e = this.parseUShort();
            P.argument(1 === e, "GSUB Extension Substitution subtable identifier-format must be 1");
            var t = this.parseUShort(),
                r = new ae(this.data, this.offset + this.parseULong());
            return {
              substFormat: 1,
              lookupType: t,
              extension: st[t].call(r)
            };
          }, st[8] = function () {
            var e = this.parseUShort();
            return P.argument(1 === e, "GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"), {
              substFormat: e,
              coverage: this.parsePointer(ae.coverage),
              backtrackCoverage: this.parseList(ae.pointer(ae.coverage)),
              lookaheadCoverage: this.parseList(ae.pointer(ae.coverage)),
              substitutes: this.parseUShortList()
            };
          };
          var ut = new Array(9);
          ut[1] = function (e) {
            return 1 === e.substFormat ? new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }, {
              name: "deltaGlyphID",
              type: "USHORT",
              value: e.deltaGlyphId
            }]) : new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 2
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.ushortList("substitute", e.substitute)));
          }, ut[3] = function (e) {
            return P.assert(1 === e.substFormat, "Lookup type 3 substFormat must be 1."), new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.tableList("altSet", e.alternateSets, function (e) {
              return new $.Table("alternateSetTable", $.ushortList("alternate", e));
            })));
          }, ut[4] = function (e) {
            return P.assert(1 === e.substFormat, "Lookup type 4 substFormat must be 1."), new $.Table("substitutionTable", [{
              name: "substFormat",
              type: "USHORT",
              value: 1
            }, {
              name: "coverage",
              type: "TABLE",
              value: new $.Coverage(e.coverage)
            }].concat($.tableList("ligSet", e.ligatureSets, function (e) {
              return new $.Table("ligatureSetTable", $.tableList("ligature", e, function (e) {
                return new $.Table("ligatureTable", [{
                  name: "ligGlyph",
                  type: "USHORT",
                  value: e.ligGlyph
                }].concat($.ushortList("component", e.components, e.components.length + 1)));
              }));
            })));
          };
          var ht = {
            parse: function (e, t) {
              var r = new ae(e, t = t || 0),
                  i = r.parseVersion(1);
              return P.argument(1 === i || 1.1 === i, "Unsupported GSUB table version."), 1 === i ? {
                version: i,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(st)
              } : {
                version: i,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(st),
                variations: r.parseFeatureVariationsList()
              };
            },
            make: function (e) {
              return new $.Table("GSUB", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "scripts",
                type: "TABLE",
                value: new $.ScriptList(e.scripts)
              }, {
                name: "features",
                type: "TABLE",
                value: new $.FeatureList(e.features)
              }, {
                name: "lookups",
                type: "TABLE",
                value: new $.LookupList(e.lookups, ut)
              }]);
            }
          };
          var ct = {
            parse: function (e, t) {
              var r = new se.Parser(e, t),
                  i = r.parseULong();
              P.argument(1 === i, "Unsupported META table version."), r.parseULong(), r.parseULong();

              for (var n = r.parseULong(), a = {}, o = 0; o < n; o++) {
                var s = r.parseTag(),
                    l = r.parseULong(),
                    u = r.parseULong(),
                    h = D.UTF8(e, t + l, u);
                a[s] = h;
              }

              return a;
            },
            make: function (e) {
              var t = Object.keys(e).length,
                  r = "",
                  i = 16 + 12 * t,
                  n = new $.Table("meta", [{
                name: "version",
                type: "ULONG",
                value: 1
              }, {
                name: "flags",
                type: "ULONG",
                value: 0
              }, {
                name: "offset",
                type: "ULONG",
                value: i
              }, {
                name: "numTags",
                type: "ULONG",
                value: t
              }]);

              for (var a in e) {
                var o = r.length;
                r += e[a], n.fields.push({
                  name: "tag " + a,
                  type: "TAG",
                  value: a
                }), n.fields.push({
                  name: "offset " + a,
                  type: "ULONG",
                  value: i + o
                }), n.fields.push({
                  name: "length " + a,
                  type: "ULONG",
                  value: e[a].length
                });
              }

              return n.fields.push({
                name: "stringPool",
                type: "CHARARRAY",
                value: r
              }), n;
            }
          };

          function ft(e) {
            return Math.log(e) / Math.log(2) | 0;
          }

          function dt(e) {
            for (; e.length % 4 != 0;) e.push(0);

            for (var t = 0, r = 0; r < e.length; r += 4) t += (e[r] << 24) + (e[r + 1] << 16) + (e[r + 2] << 8) + e[r + 3];

            return t %= Math.pow(2, 32);
          }

          function pt(e, t, r, i) {
            return new $.Record("Table Record", [{
              name: "tag",
              type: "TAG",
              value: void 0 !== e ? e : ""
            }, {
              name: "checkSum",
              type: "ULONG",
              value: void 0 !== t ? t : 0
            }, {
              name: "offset",
              type: "ULONG",
              value: void 0 !== r ? r : 0
            }, {
              name: "length",
              type: "ULONG",
              value: void 0 !== i ? i : 0
            }]);
          }

          function mt(e) {
            var t = new $.Table("sfnt", [{
              name: "version",
              type: "TAG",
              value: "OTTO"
            }, {
              name: "numTables",
              type: "USHORT",
              value: 0
            }, {
              name: "searchRange",
              type: "USHORT",
              value: 0
            }, {
              name: "entrySelector",
              type: "USHORT",
              value: 0
            }, {
              name: "rangeShift",
              type: "USHORT",
              value: 0
            }]);
            t.tables = e, t.numTables = e.length;
            var r = Math.pow(2, ft(t.numTables));
            t.searchRange = 16 * r, t.entrySelector = ft(r), t.rangeShift = 16 * t.numTables - t.searchRange;

            for (var i = [], n = [], a = t.sizeOf() + pt().sizeOf() * t.numTables; a % 4 != 0;) a += 1, n.push({
              name: "padding",
              type: "BYTE",
              value: 0
            });

            for (var o = 0; o < e.length; o += 1) {
              var s = e[o];
              P.argument(4 === s.tableName.length, "Table name" + s.tableName + " is invalid.");
              var l = s.sizeOf(),
                  u = pt(s.tableName, dt(s.encode()), a, l);

              for (i.push({
                name: u.tag + " Table Record",
                type: "RECORD",
                value: u
              }), n.push({
                name: s.tableName + " table",
                type: "RECORD",
                value: s
              }), a += l, P.argument(!isNaN(a), "Something went wrong calculating the offset."); a % 4 != 0;) a += 1, n.push({
                name: "padding",
                type: "BYTE",
                value: 0
              });
            }

            return i.sort(function (e, t) {
              return e.value.tag > t.value.tag ? 1 : -1;
            }), t.fields = t.fields.concat(i), t.fields = t.fields.concat(n), t;
          }

          function yt(e, t, r) {
            for (var i = 0; i < t.length; i += 1) {
              var n = e.charToGlyphIndex(t[i]);
              if (0 < n) return e.glyphs.get(n).getMetrics();
            }

            return r;
          }

          var vt = {
            make: mt,
            fontToTable: function (e) {
              for (var t, r = [], i = [], n = [], a = [], o = [], s = [], l = [], u = 0, h = 0, c = 0, f = 0, d = 0, p = 0; p < e.glyphs.length; p += 1) {
                var m = e.glyphs.get(p),
                    y = 0 | m.unicode;
                if (isNaN(m.advanceWidth)) throw new Error("Glyph " + m.name + " (" + p + "): advanceWidth is not a number.");
                (y < t || void 0 === t) && 0 < y && (t = y), u < y && (u = y);
                var v = at.getUnicodeRange(y);
                if (v < 32) h |= 1 << v;else if (v < 64) c |= 1 << v - 32;else if (v < 96) f |= 1 << v - 64;else {
                  if (!(v < 123)) throw new Error("Unicode ranges bits > 123 are reserved for internal usage");
                  d |= 1 << v - 96;
                }

                if (".notdef" !== m.name) {
                  var g = m.getMetrics();
                  r.push(g.xMin), i.push(g.yMin), n.push(g.xMax), a.push(g.yMax), s.push(g.leftSideBearing), l.push(g.rightSideBearing), o.push(m.advanceWidth);
                }
              }

              var b = {
                xMin: Math.min.apply(null, r),
                yMin: Math.min.apply(null, i),
                xMax: Math.max.apply(null, n),
                yMax: Math.max.apply(null, a),
                advanceWidthMax: Math.max.apply(null, o),
                advanceWidthAvg: function (e) {
                  for (var t = 0, r = 0; r < e.length; r += 1) t += e[r];

                  return t / e.length;
                }(o),
                minLeftSideBearing: Math.min.apply(null, s),
                maxLeftSideBearing: Math.max.apply(null, s),
                minRightSideBearing: Math.min.apply(null, l)
              };
              b.ascender = e.ascender, b.descender = e.descender;

              var _ = Ge.make({
                flags: 3,
                unitsPerEm: e.unitsPerEm,
                xMin: b.xMin,
                yMin: b.yMin,
                xMax: b.xMax,
                yMax: b.yMax,
                lowestRecPPEM: 3,
                createdTimestamp: e.createdTimestamp
              }),
                  x = je.make({
                ascender: b.ascender,
                descender: b.descender,
                advanceWidthMax: b.advanceWidthMax,
                minLeftSideBearing: b.minLeftSideBearing,
                minRightSideBearing: b.minRightSideBearing,
                xMaxExtent: b.maxLeftSideBearing + (b.xMax - b.xMin),
                numberOfHMetrics: e.glyphs.length
              }),
                  w = He.make(e.glyphs.length),
                  S = at.make({
                xAvgCharWidth: Math.round(b.advanceWidthAvg),
                usWeightClass: e.tables.os2.usWeightClass,
                usWidthClass: e.tables.os2.usWidthClass,
                usFirstCharIndex: t,
                usLastCharIndex: u,
                ulUnicodeRange1: h,
                ulUnicodeRange2: c,
                ulUnicodeRange3: f,
                ulUnicodeRange4: d,
                fsSelection: e.tables.os2.fsSelection,
                sTypoAscender: b.ascender,
                sTypoDescender: b.descender,
                sTypoLineGap: 0,
                usWinAscent: b.yMax,
                usWinDescent: Math.abs(b.yMin),
                ulCodePageRange1: 1,
                sxHeight: yt(e, "xyvw", {
                  yMax: Math.round(b.ascender / 2)
                }).yMax,
                sCapHeight: yt(e, "HIKLEFJMNTZBDPRAGOQSUVWXY", b).yMax,
                usDefaultChar: e.hasChar(" ") ? 32 : 0,
                usBreakChar: e.hasChar(" ") ? 32 : 0
              }),
                  M = Ve.make(e.glyphs),
                  T = le.make(e.glyphs),
                  E = e.getEnglishName("fontFamily"),
                  C = e.getEnglishName("fontSubfamily"),
                  L = E + " " + C,
                  O = e.getEnglishName("postScriptName");

              O = O || E.replace(/\s/g, "") + "-" + C;
              var P = {};

              for (var R in e.names) P[R] = e.names[R];

              P.uniqueID || (P.uniqueID = {
                en: e.getEnglishName("manufacturer") + ":" + L
              }), P.postScriptName || (P.postScriptName = {
                en: O
              }), P.preferredFamily || (P.preferredFamily = e.names.fontFamily), P.preferredSubfamily || (P.preferredSubfamily = e.names.fontSubfamily);
              var D = [],
                  k = it.make(P, D),
                  A = 0 < D.length ? ze.make(D) : void 0,
                  I = ot.make(),
                  U = Be.make(e.glyphs, {
                version: e.getEnglishName("version"),
                fullName: L,
                familyName: E,
                weightName: C,
                postScriptName: O,
                unitsPerEm: e.unitsPerEm,
                fontBBox: [0, b.yMin, b.ascender, b.advanceWidthMax]
              }),
                  N = e.metas && 0 < Object.keys(e.metas).length ? ct.make(e.metas) : void 0,
                  F = [_, x, w, S, k, T, I, U, M];
              A && F.push(A), e.tables.gsub && F.push(ht.make(e.tables.gsub)), N && F.push(N);

              for (var B = mt(F), G = dt(B.encode()), j = B.fields, V = !1, z = 0; z < j.length; z += 1) if ("head table" === j[z].name) {
                j[z].value.checkSumAdjustment = 2981146554 - G, V = !0;
                break;
              }

              if (!V) throw new Error("Could not find head table with checkSum to adjust.");
              return B;
            },
            computeCheckSum: dt
          };

          function gt(e, t) {
            for (var r = 0, i = e.length - 1; r <= i;) {
              var n = r + i >>> 1,
                  a = e[n].tag;
              if (a === t) return n;
              a < t ? r = 1 + n : i = n - 1;
            }

            return -r - 1;
          }

          function bt(e, t) {
            for (var r = 0, i = e.length - 1; r <= i;) {
              var n = r + i >>> 1,
                  a = e[n];
              if (a === t) return n;
              a < t ? r = 1 + n : i = n - 1;
            }

            return -r - 1;
          }

          function _t(e, t) {
            for (var r, i = 0, n = e.length - 1; i <= n;) {
              var a = i + n >>> 1,
                  o = (r = e[a]).start;
              if (o === t) return r;
              o < t ? i = 1 + a : n = a - 1;
            }

            if (0 < i) return t > (r = e[i - 1]).end ? 0 : r;
          }

          function xt(e, t) {
            this.font = e, this.tableName = t;
          }

          function wt(e) {
            xt.call(this, e, "gpos");
          }

          function St(e) {
            xt.call(this, e, "gsub");
          }

          function Mt(e, t) {
            var r = e.length;
            if (r !== t.length) return !1;

            for (var i = 0; i < r; i++) if (e[i] !== t[i]) return !1;

            return !0;
          }

          function Tt(e, t, r) {
            for (var i = e.subtables, n = 0; n < i.length; n++) {
              var a = i[n];
              if (a.substFormat === t) return a;
            }

            if (r) return i.push(r), r;
          }

          function Et(e) {
            for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i < e.length; ++i) r[i] = e[i];

            return t;
          }

          function Ct(e, t) {
            if (!e) throw t;
          }

          function Lt(e, t, r, i, n) {
            var a;
            return a = 0 < (t & i) ? (a = e.parseByte(), 0 == (t & n) && (a = -a), r + a) : 0 < (t & n) ? r : r + e.parseShort();
          }

          function Ot(e, t, r) {
            var i,
                n,
                a = new se.Parser(t, r);

            if (e.numberOfContours = a.parseShort(), e._xMin = a.parseShort(), e._yMin = a.parseShort(), e._xMax = a.parseShort(), e._yMax = a.parseShort(), 0 < e.numberOfContours) {
              for (var o = e.endPointIndices = [], s = 0; s < e.numberOfContours; s += 1) o.push(a.parseUShort());

              e.instructionLength = a.parseUShort(), e.instructions = [];

              for (var l = 0; l < e.instructionLength; l += 1) e.instructions.push(a.parseByte());

              var u = o[o.length - 1] + 1;
              i = [];

              for (var h = 0; h < u; h += 1) if (n = a.parseByte(), i.push(n), 0 < (8 & n)) for (var c = a.parseByte(), f = 0; f < c; f += 1) i.push(n), h += 1;

              if (P.argument(i.length === u, "Bad flags."), 0 < o.length) {
                var d,
                    p = [];

                if (0 < u) {
                  for (var m = 0; m < u; m += 1) n = i[m], (d = {}).onCurve = !!(1 & n), d.lastPointOfContour = 0 <= o.indexOf(m), p.push(d);

                  for (var y = 0, v = 0; v < u; v += 1) n = i[v], (d = p[v]).x = Lt(a, n, y, 2, 16), y = d.x;

                  for (var g = 0, b = 0; b < u; b += 1) n = i[b], (d = p[b]).y = Lt(a, n, g, 4, 32), g = d.y;
                }

                e.points = p;
              } else e.points = [];
            } else if (0 === e.numberOfContours) e.points = [];else {
              e.isComposite = !0, e.points = [], e.components = [];

              for (var _ = !0; _;) {
                i = a.parseUShort();
                var x = {
                  glyphIndex: a.parseUShort(),
                  xScale: 1,
                  scale01: 0,
                  scale10: 0,
                  yScale: 1,
                  dx: 0,
                  dy: 0
                };
                0 < (1 & i) ? 0 < (2 & i) ? (x.dx = a.parseShort(), x.dy = a.parseShort()) : x.matchedPoints = [a.parseUShort(), a.parseUShort()] : 0 < (2 & i) ? (x.dx = a.parseChar(), x.dy = a.parseChar()) : x.matchedPoints = [a.parseByte(), a.parseByte()], 0 < (8 & i) ? x.xScale = x.yScale = a.parseF2Dot14() : 0 < (64 & i) ? (x.xScale = a.parseF2Dot14(), x.yScale = a.parseF2Dot14()) : 0 < (128 & i) && (x.xScale = a.parseF2Dot14(), x.scale01 = a.parseF2Dot14(), x.scale10 = a.parseF2Dot14(), x.yScale = a.parseF2Dot14()), e.components.push(x), _ = !!(32 & i);
              }

              if (256 & i) {
                e.instructionLength = a.parseUShort(), e.instructions = [];

                for (var w = 0; w < e.instructionLength; w += 1) e.instructions.push(a.parseByte());
              }
            }
          }

          function Pt(e, t) {
            for (var r = [], i = 0; i < e.length; i += 1) {
              var n = e[i],
                  a = {
                x: t.xScale * n.x + t.scale01 * n.y + t.dx,
                y: t.scale10 * n.x + t.yScale * n.y + t.dy,
                onCurve: n.onCurve,
                lastPointOfContour: n.lastPointOfContour
              };
              r.push(a);
            }

            return r;
          }

          function Rt(e) {
            var t = new I();
            if (!e) return t;

            for (var r = function (e) {
              for (var t = [], r = [], i = 0; i < e.length; i += 1) {
                var n = e[i];
                r.push(n), n.lastPointOfContour && (t.push(r), r = []);
              }

              return P.argument(0 === r.length, "There are still points left in the current contour."), t;
            }(e), i = 0; i < r.length; ++i) {
              var n = r[i],
                  a = null,
                  o = n[n.length - 1],
                  s = n[0];
              if (o.onCurve) t.moveTo(o.x, o.y);else if (s.onCurve) t.moveTo(s.x, s.y);else {
                var l = {
                  x: .5 * (o.x + s.x),
                  y: .5 * (o.y + s.y)
                };
                t.moveTo(l.x, l.y);
              }

              for (var u = 0; u < n.length; ++u) if (a = o, o = s, s = n[(u + 1) % n.length], o.onCurve) t.lineTo(o.x, o.y);else {
                var h = s;
                a.onCurve || {
                  x: .5 * (o.x + a.x),
                  y: .5 * (o.y + a.y)
                }, s.onCurve || (h = {
                  x: .5 * (o.x + s.x),
                  y: .5 * (o.y + s.y)
                }), t.quadraticCurveTo(o.x, o.y, h.x, h.y);
              }

              t.closePath();
            }

            return t;
          }

          function Dt(e, t) {
            if (t.isComposite) for (var r = 0; r < t.components.length; r += 1) {
              var i = t.components[r],
                  n = e.get(i.glyphIndex);

              if (n.getPath(), n.points) {
                var a = void 0;
                if (void 0 === i.matchedPoints) a = Pt(n.points, i);else {
                  if (i.matchedPoints[0] > t.points.length - 1 || i.matchedPoints[1] > n.points.length - 1) throw Error("Matched points out of range in " + t.name);
                  var o = t.points[i.matchedPoints[0]],
                      s = n.points[i.matchedPoints[1]],
                      l = {
                    xScale: i.xScale,
                    scale01: i.scale01,
                    scale10: i.scale10,
                    yScale: i.yScale,
                    dx: 0,
                    dy: 0
                  };
                  s = Pt([s], l)[0], l.dx = o.x - s.x, l.dy = o.y - s.y, a = Pt(n.points, l);
                }
                t.points = t.points.concat(a);
              }
            }
            return Rt(t.points);
          }

          (wt.prototype = xt.prototype = {
            searchTag: gt,
            binSearch: bt,
            getTable: function (e) {
              var t = this.font.tables[this.tableName];
              return !t && e && (t = this.font.tables[this.tableName] = this.createDefaultTable()), t;
            },
            getScriptNames: function () {
              var e = this.getTable();
              return e ? e.scripts.map(function (e) {
                return e.tag;
              }) : [];
            },
            getDefaultScriptName: function () {
              var e = this.getTable();

              if (e) {
                for (var t = !1, r = 0; r < e.scripts.length; r++) {
                  var i = e.scripts[r].tag;
                  if ("DFLT" === i) return i;
                  "latn" === i && (t = !0);
                }

                return t ? "latn" : void 0;
              }
            },
            getScriptTable: function (e, t) {
              var r = this.getTable(t);

              if (r) {
                e = e || "DFLT";
                var i = r.scripts,
                    n = gt(r.scripts, e);
                if (0 <= n) return i[n].script;

                if (t) {
                  var a = {
                    tag: e,
                    script: {
                      defaultLangSys: {
                        reserved: 0,
                        reqFeatureIndex: 65535,
                        featureIndexes: []
                      },
                      langSysRecords: []
                    }
                  };
                  return i.splice(-1 - n, 0, a), a.script;
                }
              }
            },
            getLangSysTable: function (e, t, r) {
              var i = this.getScriptTable(e, r);

              if (i) {
                if (!t || "dflt" === t || "DFLT" === t) return i.defaultLangSys;
                var n = gt(i.langSysRecords, t);
                if (0 <= n) return i.langSysRecords[n].langSys;

                if (r) {
                  var a = {
                    tag: t,
                    langSys: {
                      reserved: 0,
                      reqFeatureIndex: 65535,
                      featureIndexes: []
                    }
                  };
                  return i.langSysRecords.splice(-1 - n, 0, a), a.langSys;
                }
              }
            },
            getFeatureTable: function (e, t, r, i) {
              var n = this.getLangSysTable(e, t, i);

              if (n) {
                for (var a, o = n.featureIndexes, s = this.font.tables[this.tableName].features, l = 0; l < o.length; l++) if ((a = s[o[l]]).tag === r) return a.feature;

                if (i) {
                  var u = s.length;
                  return P.assert(0 === u || r >= s[u - 1].tag, "Features must be added in alphabetical order."), a = {
                    tag: r,
                    feature: {
                      params: 0,
                      lookupListIndexes: []
                    }
                  }, s.push(a), o.push(u), a.feature;
                }
              }
            },
            getLookupTables: function (e, t, r, i, n) {
              var a = this.getFeatureTable(e, t, r, n),
                  o = [];

              if (a) {
                for (var s, l = a.lookupListIndexes, u = this.font.tables[this.tableName].lookups, h = 0; h < l.length; h++) (s = u[l[h]]).lookupType === i && o.push(s);

                if (0 === o.length && n) {
                  s = {
                    lookupType: i,
                    lookupFlag: 0,
                    subtables: [],
                    markFilteringSet: void 0
                  };
                  var c = u.length;
                  return u.push(s), l.push(c), [s];
                }
              }

              return o;
            },
            getGlyphClass: function (e, t) {
              switch (e.format) {
                case 1:
                  return e.startGlyph <= t && t < e.startGlyph + e.classes.length ? e.classes[t - e.startGlyph] : 0;

                case 2:
                  var r = _t(e.ranges, t);

                  return r ? r.classId : 0;
              }
            },
            getCoverageIndex: function (e, t) {
              switch (e.format) {
                case 1:
                  var r = bt(e.glyphs, t);
                  return 0 <= r ? r : -1;

                case 2:
                  var i = _t(e.ranges, t);

                  return i ? i.index + t - i.start : -1;
              }
            },
            expandCoverage: function (e) {
              if (1 === e.format) return e.glyphs;

              for (var t = [], r = e.ranges, i = 0; i < r.length; i++) for (var n = r[i], a = n.start, o = n.end, s = a; s <= o; s++) t.push(s);

              return t;
            }
          }).init = function () {
            var e = this.getDefaultScriptName();
            this.defaultKerningTables = this.getKerningTables(e);
          }, wt.prototype.getKerningValue = function (e, t, r) {
            for (var i = 0; i < e.length; i++) for (var n = e[i].subtables, a = 0; a < n.length; a++) {
              var o = n[a],
                  s = this.getCoverageIndex(o.coverage, t);
              if (!(s < 0)) switch (o.posFormat) {
                case 1:
                  for (var l = o.pairSets[s], u = 0; u < l.length; u++) {
                    var h = l[u];
                    if (h.secondGlyph === r) return h.value1 && h.value1.xAdvance || 0;
                  }

                  break;

                case 2:
                  var c = this.getGlyphClass(o.classDef1, t),
                      f = this.getGlyphClass(o.classDef2, r),
                      d = o.classRecords[c][f];
                  return d.value1 && d.value1.xAdvance || 0;
              }
            }

            return 0;
          }, wt.prototype.getKerningTables = function (e, t) {
            if (this.font.tables.gpos) return this.getLookupTables(e, t, "kern", 2);
          }, (St.prototype = xt.prototype).createDefaultTable = function () {
            return {
              version: 1,
              scripts: [{
                tag: "DFLT",
                script: {
                  defaultLangSys: {
                    reserved: 0,
                    reqFeatureIndex: 65535,
                    featureIndexes: []
                  },
                  langSysRecords: []
                }
              }],
              features: [],
              lookups: []
            };
          }, St.prototype.getSingle = function (e, t, r) {
            for (var i = [], n = this.getLookupTables(t, r, e, 1), a = 0; a < n.length; a++) for (var o = n[a].subtables, s = 0; s < o.length; s++) {
              var l = o[s],
                  u = this.expandCoverage(l.coverage),
                  h = void 0;

              if (1 === l.substFormat) {
                var c = l.deltaGlyphId;

                for (h = 0; h < u.length; h++) {
                  var f = u[h];
                  i.push({
                    sub: f,
                    by: f + c
                  });
                }
              } else {
                var d = l.substitute;

                for (h = 0; h < u.length; h++) i.push({
                  sub: u[h],
                  by: d[h]
                });
              }
            }

            return i;
          }, St.prototype.getAlternates = function (e, t, r) {
            for (var i = [], n = this.getLookupTables(t, r, e, 3), a = 0; a < n.length; a++) for (var o = n[a].subtables, s = 0; s < o.length; s++) for (var l = o[s], u = this.expandCoverage(l.coverage), h = l.alternateSets, c = 0; c < u.length; c++) i.push({
              sub: u[c],
              by: h[c]
            });

            return i;
          }, St.prototype.getLigatures = function (e, t, r) {
            for (var i = [], n = this.getLookupTables(t, r, e, 4), a = 0; a < n.length; a++) for (var o = n[a].subtables, s = 0; s < o.length; s++) for (var l = o[s], u = this.expandCoverage(l.coverage), h = l.ligatureSets, c = 0; c < u.length; c++) for (var f = u[c], d = h[c], p = 0; p < d.length; p++) {
              var m = d[p];
              i.push({
                sub: [f].concat(m.components),
                by: m.ligGlyph
              });
            }

            return i;
          }, St.prototype.addSingle = function (e, t, r, i) {
            var n = Tt(this.getLookupTables(r, i, e, 1, !0)[0], 2, {
              substFormat: 2,
              coverage: {
                format: 1,
                glyphs: []
              },
              substitute: []
            });
            P.assert(1 === n.coverage.format, "Ligature: unable to modify coverage table format " + n.coverage.format);
            var a = t.sub,
                o = this.binSearch(n.coverage.glyphs, a);
            o < 0 && (o = -1 - o, n.coverage.glyphs.splice(o, 0, a), n.substitute.splice(o, 0, 0)), n.substitute[o] = t.by;
          }, St.prototype.addAlternate = function (e, t, r, i) {
            var n = Tt(this.getLookupTables(r, i, e, 3, !0)[0], 1, {
              substFormat: 1,
              coverage: {
                format: 1,
                glyphs: []
              },
              alternateSets: []
            });
            P.assert(1 === n.coverage.format, "Ligature: unable to modify coverage table format " + n.coverage.format);
            var a = t.sub,
                o = this.binSearch(n.coverage.glyphs, a);
            o < 0 && (o = -1 - o, n.coverage.glyphs.splice(o, 0, a), n.alternateSets.splice(o, 0, 0)), n.alternateSets[o] = t.by;
          }, St.prototype.addLigature = function (e, t, r, i) {
            var n = this.getLookupTables(r, i, e, 4, !0)[0],
                a = n.subtables[0];
            a || (a = {
              substFormat: 1,
              coverage: {
                format: 1,
                glyphs: []
              },
              ligatureSets: []
            }, n.subtables[0] = a), P.assert(1 === a.coverage.format, "Ligature: unable to modify coverage table format " + a.coverage.format);
            var o = t.sub[0],
                s = t.sub.slice(1),
                l = {
              ligGlyph: t.by,
              components: s
            },
                u = this.binSearch(a.coverage.glyphs, o);

            if (0 <= u) {
              for (var h = a.ligatureSets[u], c = 0; c < h.length; c++) if (Mt(h[c].components, s)) return;

              h.push(l);
            } else u = -1 - u, a.coverage.glyphs.splice(u, 0, o), a.ligatureSets.splice(u, 0, [l]);
          }, St.prototype.getFeature = function (e, t, r) {
            if (/ss\d\d/.test(e)) return this.getSingle(e, t, r);

            switch (e) {
              case "aalt":
              case "salt":
                return this.getSingle(e, t, r).concat(this.getAlternates(e, t, r));

              case "dlig":
              case "liga":
              case "rlig":
                return this.getLigatures(e, t, r);
            }
          }, St.prototype.add = function (e, t, r, i) {
            if (/ss\d\d/.test(e)) return this.addSingle(e, t, r, i);

            switch (e) {
              case "aalt":
              case "salt":
                return "number" == typeof t.by ? this.addSingle(e, t, r, i) : this.addAlternate(e, t, r, i);

              case "dlig":
              case "liga":
              case "rlig":
                return this.addLigature(e, t, r, i);
            }
          };
          var kt,
              At,
              It,
              Ut,
              Nt = {
            getPath: Rt,
            parse: function (e, t, r, i) {
              for (var n = new xe.GlyphSet(i), a = 0; a < r.length - 1; a += 1) {
                var o = r[a];
                o !== r[a + 1] ? n.push(a, xe.ttfGlyphLoader(i, a, Ot, e, t + o, Dt)) : n.push(a, xe.glyphLoader(i, a));
              }

              return n;
            }
          };

          function Ft(e) {
            this.font = e, this.getCommands = function (e) {
              return Nt.getPath(e).commands;
            }, this._fpgmState = this._prepState = void 0, this._errorState = 0;
          }

          function Bt(e) {
            return e;
          }

          function Gt(e) {
            return Math.sign(e) * Math.round(Math.abs(e));
          }

          function jt(e) {
            return Math.sign(e) * Math.round(Math.abs(2 * e)) / 2;
          }

          function Vt(e) {
            return Math.sign(e) * (Math.round(Math.abs(e) + .5) - .5);
          }

          function zt(e) {
            return Math.sign(e) * Math.ceil(Math.abs(e));
          }

          function Ht(e) {
            return Math.sign(e) * Math.floor(Math.abs(e));
          }

          function Wt(e) {
            var t = this.srPeriod,
                r = this.srPhase,
                i = 1;
            return e < 0 && (e = -e, i = -1), e += this.srThreshold - r, e = Math.trunc(e / t) * t, (e += r) < 0 ? r * i : e * i;
          }

          var qt = {
            x: 1,
            y: 0,
            axis: "x",
            distance: function (e, t, r, i) {
              return (r ? e.xo : e.x) - (i ? t.xo : t.x);
            },
            interpolate: function (e, t, r, i) {
              var n, a, o, s, l, u, h;
              if (!i || i === this) return n = e.xo - t.xo, a = e.xo - r.xo, l = t.x - t.xo, u = r.x - r.xo, 0 === (h = (o = Math.abs(n)) + (s = Math.abs(a))) ? void (e.x = e.xo + (l + u) / 2) : void (e.x = e.xo + (l * s + u * o) / h);
              n = i.distance(e, t, !0, !0), a = i.distance(e, r, !0, !0), l = i.distance(t, t, !1, !0), u = i.distance(r, r, !1, !0), 0 !== (h = (o = Math.abs(n)) + (s = Math.abs(a))) ? qt.setRelative(e, e, (l * s + u * o) / h, i, !0) : qt.setRelative(e, e, (l + u) / 2, i, !0);
            },
            normalSlope: Number.NEGATIVE_INFINITY,
            setRelative: function (e, t, r, i, n) {
              if (i && i !== this) {
                var a = n ? t.xo : t.x,
                    o = n ? t.yo : t.y,
                    s = a + r * i.x,
                    l = o + r * i.y;
                e.x = s + (e.y - l) / i.normalSlope;
              } else e.x = (n ? t.xo : t.x) + r;
            },
            slope: 0,
            touch: function (e) {
              e.xTouched = !0;
            },
            touched: function (e) {
              return e.xTouched;
            },
            untouch: function (e) {
              e.xTouched = !1;
            }
          },
              Xt = {
            x: 0,
            y: 1,
            axis: "y",
            distance: function (e, t, r, i) {
              return (r ? e.yo : e.y) - (i ? t.yo : t.y);
            },
            interpolate: function (e, t, r, i) {
              var n, a, o, s, l, u, h;
              if (!i || i === this) return n = e.yo - t.yo, a = e.yo - r.yo, l = t.y - t.yo, u = r.y - r.yo, 0 === (h = (o = Math.abs(n)) + (s = Math.abs(a))) ? void (e.y = e.yo + (l + u) / 2) : void (e.y = e.yo + (l * s + u * o) / h);
              n = i.distance(e, t, !0, !0), a = i.distance(e, r, !0, !0), l = i.distance(t, t, !1, !0), u = i.distance(r, r, !1, !0), 0 !== (h = (o = Math.abs(n)) + (s = Math.abs(a))) ? Xt.setRelative(e, e, (l * s + u * o) / h, i, !0) : Xt.setRelative(e, e, (l + u) / 2, i, !0);
            },
            normalSlope: 0,
            setRelative: function (e, t, r, i, n) {
              if (i && i !== this) {
                var a = n ? t.xo : t.x,
                    o = n ? t.yo : t.y,
                    s = a + r * i.x,
                    l = o + r * i.y;
                e.y = l + i.normalSlope * (e.x - s);
              } else e.y = (n ? t.yo : t.y) + r;
            },
            slope: Number.POSITIVE_INFINITY,
            touch: function (e) {
              e.yTouched = !0;
            },
            touched: function (e) {
              return e.yTouched;
            },
            untouch: function (e) {
              e.yTouched = !1;
            }
          };

          function Yt(e, t) {
            this.x = e, this.y = t, this.axis = void 0, this.slope = t / e, this.normalSlope = -e / t, Object.freeze(this);
          }

          function Zt(e, t) {
            var r = Math.sqrt(e * e + t * t);
            return t /= r, 1 === (e /= r) && 0 === t ? qt : 0 === e && 1 === t ? Xt : new Yt(e, t);
          }

          function Qt(e, t, r, i) {
            this.x = this.xo = Math.round(64 * e) / 64, this.y = this.yo = Math.round(64 * t) / 64, this.lastPointOfContour = r, this.onCurve = i, this.prevPointOnContour = void 0, this.nextPointOnContour = void 0, this.xTouched = !1, this.yTouched = !1, Object.preventExtensions(this);
          }

          Object.freeze(qt), Object.freeze(Xt), Yt.prototype.distance = function (e, t, r, i) {
            return this.x * qt.distance(e, t, r, i) + this.y * Xt.distance(e, t, r, i);
          }, Yt.prototype.interpolate = function (e, t, r, i) {
            var n, a, o, s, l, u, h;
            o = i.distance(e, t, !0, !0), s = i.distance(e, r, !0, !0), n = i.distance(t, t, !1, !0), a = i.distance(r, r, !1, !0), 0 !== (h = (l = Math.abs(o)) + (u = Math.abs(s))) ? this.setRelative(e, e, (n * u + a * l) / h, i, !0) : this.setRelative(e, e, (n + a) / 2, i, !0);
          }, Yt.prototype.setRelative = function (e, t, r, i, n) {
            i = i || this;
            var a = n ? t.xo : t.x,
                o = n ? t.yo : t.y,
                s = a + r * i.x,
                l = o + r * i.y,
                u = i.normalSlope,
                h = this.slope,
                c = e.x,
                f = e.y;
            e.x = (h * c - u * s + l - f) / (h - u), e.y = h * (e.x - c) + f;
          }, Yt.prototype.touch = function (e) {
            e.xTouched = !0, e.yTouched = !0;
          }, Qt.prototype.nextTouched = function (e) {
            for (var t = this.nextPointOnContour; !e.touched(t) && t !== this;) t = t.nextPointOnContour;

            return t;
          }, Qt.prototype.prevTouched = function (e) {
            for (var t = this.prevPointOnContour; !e.touched(t) && t !== this;) t = t.prevPointOnContour;

            return t;
          };
          var Kt = Object.freeze(new Qt(0, 0)),
              Jt = {
            cvCutIn: 17 / 16,
            deltaBase: 9,
            deltaShift: .125,
            loop: 1,
            minDis: 1,
            autoFlip: !0
          };

          function $t(e, t) {
            switch (this.env = e, this.stack = [], this.prog = t, e) {
              case "glyf":
                this.zp0 = this.zp1 = this.zp2 = 1, this.rp0 = this.rp1 = this.rp2 = 0;

              case "prep":
                this.fv = this.pv = this.dpv = qt, this.round = Gt;
            }
          }

          function er(e) {
            for (var t = e.tZone = new Array(e.gZone.length), r = 0; r < t.length; r++) t[r] = new Qt(0, 0);
          }

          function tr(e, t) {
            var r,
                i = e.prog,
                n = e.ip,
                a = 1;

            do {
              if (88 === (r = i[++n])) a++;else if (89 === r) a--;else if (64 === r) n += i[n + 1] + 1;else if (65 === r) n += 2 * i[n + 1] + 1;else if (176 <= r && r <= 183) n += r - 176 + 1;else if (184 <= r && r <= 191) n += 2 * (r - 184 + 1);else if (t && 1 === a && 27 === r) break;
            } while (0 < a);

            e.ip = n;
          }

          function rr(e, t) {
            T.DEBUG && console.log(t.step, "SVTCA[" + e.axis + "]"), t.fv = t.pv = t.dpv = e;
          }

          function ir(e, t) {
            T.DEBUG && console.log(t.step, "SPVTCA[" + e.axis + "]"), t.pv = t.dpv = e;
          }

          function nr(e, t) {
            T.DEBUG && console.log(t.step, "SFVTCA[" + e.axis + "]"), t.fv = e;
          }

          function ar(e, t) {
            var r,
                i,
                n = t.stack,
                a = n.pop(),
                o = n.pop(),
                s = t.z2[a],
                l = t.z1[o];
            T.DEBUG && console.log("SPVTL[" + e + "]", a, o), i = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.pv = t.dpv = Zt(r, i);
          }

          function or(e, t) {
            var r,
                i,
                n = t.stack,
                a = n.pop(),
                o = n.pop(),
                s = t.z2[a],
                l = t.z1[o];
            T.DEBUG && console.log("SFVTL[" + e + "]", a, o), i = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.fv = Zt(r, i);
          }

          function sr(e) {
            T.DEBUG && console.log(e.step, "POP[]"), e.stack.pop();
          }

          function lr(e, t) {
            var r = t.stack.pop(),
                i = t.z0[r],
                n = t.fv,
                a = t.pv;
            T.DEBUG && console.log(t.step, "MDAP[" + e + "]", r);
            var o = a.distance(i, Kt);
            e && (o = t.round(o)), n.setRelative(i, Kt, o, a), n.touch(i), t.rp0 = t.rp1 = r;
          }

          function ur(e, t) {
            var r,
                i,
                n,
                a = t.z2,
                o = a.length - 2;
            T.DEBUG && console.log(t.step, "IUP[" + e.axis + "]");

            for (var s = 0; s < o; s++) r = a[s], e.touched(r) || (i = r.prevTouched(e)) !== r && (i === (n = r.nextTouched(e)) && e.setRelative(r, r, e.distance(i, i, !1, !0), e, !0), e.interpolate(r, i, n, e));
          }

          function hr(e, t) {
            for (var r = t.stack, i = e ? t.rp1 : t.rp2, n = (e ? t.z0 : t.z1)[i], a = t.fv, o = t.pv, s = t.loop, l = t.z2; s--;) {
              var u = r.pop(),
                  h = l[u],
                  c = o.distance(n, n, !1, !0);
              a.setRelative(h, h, c, o), a.touch(h), T.DEBUG && console.log(t.step, (1 < t.loop ? "loop " + (t.loop - s) + ": " : "") + "SHP[" + (e ? "rp1" : "rp2") + "]", u);
            }

            t.loop = 1;
          }

          function cr(e, t) {
            var r = t.stack,
                i = e ? t.rp1 : t.rp2,
                n = (e ? t.z0 : t.z1)[i],
                a = t.fv,
                o = t.pv,
                s = r.pop(),
                l = t.z2[t.contours[s]],
                u = l;
            T.DEBUG && console.log(t.step, "SHC[" + e + "]", s);

            for (var h = o.distance(n, n, !1, !0); u !== n && a.setRelative(u, u, h, o), (u = u.nextPointOnContour) !== l;);
          }

          function fr(e, t) {
            var r,
                i,
                n = t.stack,
                a = e ? t.rp1 : t.rp2,
                o = (e ? t.z0 : t.z1)[a],
                s = t.fv,
                l = t.pv,
                u = n.pop();

            switch (T.DEBUG && console.log(t.step, "SHZ[" + e + "]", u), u) {
              case 0:
                r = t.tZone;
                break;

              case 1:
                r = t.gZone;
                break;

              default:
                throw new Error("Invalid zone");
            }

            for (var h = l.distance(o, o, !1, !0), c = r.length - 2, f = 0; f < c; f++) i = r[f], s.setRelative(i, i, h, l);
          }

          function dr(e, t) {
            var r = t.stack,
                i = r.pop() / 64,
                n = r.pop(),
                a = t.z1[n],
                o = t.z0[t.rp0],
                s = t.fv,
                l = t.pv;
            s.setRelative(a, o, i, l), s.touch(a), T.DEBUG && console.log(t.step, "MSIRP[" + e + "]", i, n), t.rp1 = t.rp0, t.rp2 = n, e && (t.rp0 = n);
          }

          function pr(e, t) {
            var r = t.stack,
                i = r.pop(),
                n = r.pop(),
                a = t.z0[n],
                o = t.fv,
                s = t.pv,
                l = t.cvt[i];
            T.DEBUG && console.log(t.step, "MIAP[" + e + "]", i, "(", l, ")", n);
            var u = s.distance(a, Kt);
            e && (Math.abs(u - l) < t.cvCutIn && (u = l), u = t.round(u)), o.setRelative(a, Kt, u, s), 0 === t.zp0 && (a.xo = a.x, a.yo = a.y), o.touch(a), t.rp0 = t.rp1 = n;
          }

          function mr(e, t) {
            var r = t.stack,
                i = r.pop(),
                n = t.z2[i];
            T.DEBUG && console.log(t.step, "GC[" + e + "]", i), r.push(64 * t.dpv.distance(n, Kt, e, !1));
          }

          function yr(e, t) {
            var r = t.stack,
                i = r.pop(),
                n = r.pop(),
                a = t.z1[i],
                o = t.z0[n],
                s = t.dpv.distance(o, a, e, e);
            T.DEBUG && console.log(t.step, "MD[" + e + "]", i, n, "->", s), t.stack.push(Math.round(64 * s));
          }

          function vr(e, t) {
            var r = t.stack,
                i = r.pop(),
                n = t.fv,
                a = t.pv,
                o = t.ppem,
                s = t.deltaBase + 16 * (e - 1),
                l = t.deltaShift,
                u = t.z0;
            T.DEBUG && console.log(t.step, "DELTAP[" + e + "]", i, r);

            for (var h = 0; h < i; h++) {
              var c = r.pop(),
                  f = r.pop();

              if (s + ((240 & f) >> 4) === o) {
                var d = (15 & f) - 8;
                0 <= d && d++, T.DEBUG && console.log(t.step, "DELTAPFIX", c, "by", d * l);
                var p = u[c];
                n.setRelative(p, p, d * l, a);
              }
            }
          }

          function gr(e, t) {
            var r = t.stack,
                i = r.pop();
            T.DEBUG && console.log(t.step, "ROUND[]"), r.push(64 * t.round(i / 64));
          }

          function br(e, t) {
            var r = t.stack,
                i = r.pop(),
                n = t.ppem,
                a = t.deltaBase + 16 * (e - 1),
                o = t.deltaShift;
            T.DEBUG && console.log(t.step, "DELTAC[" + e + "]", i, r);

            for (var s = 0; s < i; s++) {
              var l = r.pop(),
                  u = r.pop();

              if (a + ((240 & u) >> 4) === n) {
                var h = (15 & u) - 8;
                0 <= h && h++;
                var c = h * o;
                T.DEBUG && console.log(t.step, "DELTACFIX", l, "by", c), t.cvt[l] += c;
              }
            }
          }

          function _r(e, t) {
            var r,
                i,
                n = t.stack,
                a = n.pop(),
                o = n.pop(),
                s = t.z2[a],
                l = t.z1[o];
            T.DEBUG && console.log(t.step, "SDPVTL[" + e + "]", a, o), i = e ? (r = s.y - l.y, l.x - s.x) : (r = l.x - s.x, l.y - s.y), t.dpv = Zt(r, i);
          }

          function xr(e, t) {
            var r = t.stack,
                i = t.prog,
                n = t.ip;
            T.DEBUG && console.log(t.step, "PUSHB[" + e + "]");

            for (var a = 0; a < e; a++) r.push(i[++n]);

            t.ip = n;
          }

          function wr(e, t) {
            var r = t.ip,
                i = t.prog,
                n = t.stack;
            T.DEBUG && console.log(t.ip, "PUSHW[" + e + "]");

            for (var a = 0; a < e; a++) {
              var o = i[++r] << 8 | i[++r];
              32768 & o && (o = -(1 + (65535 ^ o))), n.push(o);
            }

            t.ip = r;
          }

          function Sr(e, t, r, i, n, a) {
            var o,
                s,
                l,
                u,
                h = a.stack,
                c = e && h.pop(),
                f = h.pop(),
                d = a.rp0,
                p = a.z0[d],
                m = a.z1[f],
                y = a.minDis,
                v = a.fv,
                g = a.dpv;
            l = 0 <= (s = o = g.distance(m, p, !0, !0)) ? 1 : -1, s = Math.abs(s), e && (u = a.cvt[c], i && Math.abs(s - u) < a.cvCutIn && (s = u)), r && s < y && (s = y), i && (s = a.round(s)), v.setRelative(m, p, l * s, g), v.touch(m), T.DEBUG && console.log(a.step, (e ? "MIRP[" : "MDRP[") + (t ? "M" : "m") + (r ? ">" : "_") + (i ? "R" : "_") + (0 === n ? "Gr" : 1 === n ? "Bl" : 2 === n ? "Wh" : "") + "]", e ? c + "(" + a.cvt[c] + "," + u + ")" : "", f, "(d =", o, "->", l * s, ")"), a.rp1 = a.rp0, a.rp2 = f, t && (a.rp0 = f);
          }

          Ft.prototype.exec = function (e, t) {
            if ("number" != typeof t) throw new Error("Point size is not a number!");

            if (!(2 < this._errorState)) {
              var r = this.font,
                  i = this._prepState;

              if (!i || i.ppem !== t) {
                var n = this._fpgmState;

                if (!n) {
                  $t.prototype = Jt, (n = this._fpgmState = new $t("fpgm", r.tables.fpgm)).funcs = [], n.font = r, T.DEBUG && (console.log("---EXEC FPGM---"), n.step = -1);

                  try {
                    At(n);
                  } catch (e) {
                    return console.log("Hinting error in FPGM:" + e), void (this._errorState = 3);
                  }
                }

                $t.prototype = n, (i = this._prepState = new $t("prep", r.tables.prep)).ppem = t;
                var a = r.tables.cvt;
                if (a) for (var o = i.cvt = new Array(a.length), s = t / r.unitsPerEm, l = 0; l < a.length; l++) o[l] = a[l] * s;else i.cvt = [];
                T.DEBUG && (console.log("---EXEC PREP---"), i.step = -1);

                try {
                  At(i);
                } catch (e) {
                  this._errorState < 2 && console.log("Hinting error in PREP:" + e), this._errorState = 2;
                }
              }

              if (!(1 < this._errorState)) try {
                return It(e, i);
              } catch (e) {
                return this._errorState < 1 && (console.log("Hinting error:" + e), console.log("Note: further hinting errors are silenced")), void (this._errorState = 1);
              }
            }
          }, It = function (e, t) {
            var r,
                i,
                n,
                a = t.ppem / t.font.unitsPerEm,
                o = a,
                s = e.components;

            if ($t.prototype = t, s) {
              var l = t.font;
              i = [], r = [];

              for (var u = 0; u < s.length; u++) {
                var h = s[u],
                    c = l.glyphs.get(h.glyphIndex);
                n = new $t("glyf", c.instructions), T.DEBUG && (console.log("---EXEC COMP " + u + "---"), n.step = -1), Ut(c, n, a, o);

                for (var f = Math.round(h.dx * a), d = Math.round(h.dy * o), p = n.gZone, m = n.contours, y = 0; y < p.length; y++) {
                  var v = p[y];
                  v.xTouched = v.yTouched = !1, v.xo = v.x = v.x + f, v.yo = v.y = v.y + d;
                }

                var g = i.length;
                i.push.apply(i, p);

                for (var b = 0; b < m.length; b++) r.push(m[b] + g);
              }

              e.instructions && !n.inhibitGridFit && ((n = new $t("glyf", e.instructions)).gZone = n.z0 = n.z1 = n.z2 = i, n.contours = r, i.push(new Qt(0, 0), new Qt(Math.round(e.advanceWidth * a), 0)), T.DEBUG && (console.log("---EXEC COMPOSITE---"), n.step = -1), At(n), i.length -= 2);
            } else n = new $t("glyf", e.instructions), T.DEBUG && (console.log("---EXEC GLYPH---"), n.step = -1), Ut(e, n, a, o), i = n.gZone;

            return i;
          }, Ut = function (e, t, r, i) {
            for (var n, a, o, s = e.points || [], l = s.length, u = t.gZone = t.z0 = t.z1 = t.z2 = [], h = t.contours = [], c = 0; c < l; c++) n = s[c], u[c] = new Qt(n.x * r, n.y * i, n.lastPointOfContour, n.onCurve);

            for (var f = 0; f < l; f++) n = u[f], a || (a = n, h.push(f)), n.lastPointOfContour ? ((n.nextPointOnContour = a).prevPointOnContour = n, a = void 0) : (o = u[f + 1], (n.nextPointOnContour = o).prevPointOnContour = n);

            if (!t.inhibitGridFit) {
              if (T.DEBUG) {
                console.log("PROCESSING GLYPH", t.stack);

                for (var d = 0; d < l; d++) console.log(d, u[d].x, u[d].y);
              }

              if (u.push(new Qt(0, 0), new Qt(Math.round(e.advanceWidth * r), 0)), At(t), u.length -= 2, T.DEBUG) {
                console.log("FINISHED GLYPH", t.stack);

                for (var p = 0; p < l; p++) console.log(p, u[p].x, u[p].y);
              }
            }
          }, At = function (e) {
            var t = e.prog;

            if (t) {
              var r,
                  i = t.length;

              for (e.ip = 0; e.ip < i; e.ip++) {
                if (T.DEBUG && e.step++, !(r = kt[t[e.ip]])) throw new Error("unknown instruction: 0x" + Number(t[e.ip]).toString(16));
                r(e);
              }
            }
          }, kt = [rr.bind(void 0, Xt), rr.bind(void 0, qt), ir.bind(void 0, Xt), ir.bind(void 0, qt), nr.bind(void 0, Xt), nr.bind(void 0, qt), ar.bind(void 0, 0), ar.bind(void 0, 1), or.bind(void 0, 0), or.bind(void 0, 1), function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "SPVFS[]", r, i), e.pv = e.dpv = Zt(i, r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "SPVFS[]", r, i), e.fv = Zt(i, r);
          }, function (e) {
            var t = e.stack,
                r = e.pv;
            T.DEBUG && console.log(e.step, "GPV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
          }, function (e) {
            var t = e.stack,
                r = e.fv;
            T.DEBUG && console.log(e.step, "GFV[]"), t.push(16384 * r.x), t.push(16384 * r.y);
          }, function (e) {
            e.fv = e.pv, T.DEBUG && console.log(e.step, "SFVTPV[]");
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop(),
                n = t.pop(),
                a = t.pop(),
                o = t.pop(),
                s = e.z0,
                l = e.z1,
                u = s[r],
                h = s[i],
                c = l[n],
                f = l[a],
                d = e.z2[o];
            T.DEBUG && console.log("ISECT[], ", r, i, n, a, o);
            var p = u.x,
                m = u.y,
                y = h.x,
                v = h.y,
                g = c.x,
                b = c.y,
                _ = f.x,
                x = f.y,
                w = (p - y) * (b - x) - (m - v) * (g - _),
                S = p * v - m * y,
                M = g * x - b * _;
            d.x = (S * (g - _) - M * (p - y)) / w, d.y = (S * (b - x) - M * (m - v)) / w;
          }, function (e) {
            e.rp0 = e.stack.pop(), T.DEBUG && console.log(e.step, "SRP0[]", e.rp0);
          }, function (e) {
            e.rp1 = e.stack.pop(), T.DEBUG && console.log(e.step, "SRP1[]", e.rp1);
          }, function (e) {
            e.rp2 = e.stack.pop(), T.DEBUG && console.log(e.step, "SRP2[]", e.rp2);
          }, function (e) {
            var t = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "SZP0[]", t), e.zp0 = t) {
              case 0:
                e.tZone || er(e), e.z0 = e.tZone;
                break;

              case 1:
                e.z0 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "SZP1[]", t), e.zp1 = t) {
              case 0:
                e.tZone || er(e), e.z1 = e.tZone;
                break;

              case 1:
                e.z1 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "SZP2[]", t), e.zp2 = t) {
              case 0:
                e.tZone || er(e), e.z2 = e.tZone;
                break;

              case 1:
                e.z2 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            var t = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "SZPS[]", t), e.zp0 = e.zp1 = e.zp2 = t, t) {
              case 0:
                e.tZone || er(e), e.z0 = e.z1 = e.z2 = e.tZone;
                break;

              case 1:
                e.z0 = e.z1 = e.z2 = e.gZone;
                break;

              default:
                throw new Error("Invalid zone pointer");
            }
          }, function (e) {
            e.loop = e.stack.pop(), T.DEBUG && console.log(e.step, "SLOOP[]", e.loop);
          }, function (e) {
            T.DEBUG && console.log(e.step, "RTG[]"), e.round = Gt;
          }, function (e) {
            T.DEBUG && console.log(e.step, "RTHG[]"), e.round = Vt;
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SMD[]", t), e.minDis = t / 64;
          }, function (e) {
            T.DEBUG && console.log(e.step, "ELSE[]"), tr(e, !1);
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "JMPR[]", t), e.ip += t - 1;
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SCVTCI[]", t), e.cvCutIn = t / 64;
          }, void 0, void 0, function (e) {
            var t = e.stack;
            T.DEBUG && console.log(e.step, "DUP[]"), t.push(t[t.length - 1]);
          }, sr, function (e) {
            T.DEBUG && console.log(e.step, "CLEAR[]"), e.stack.length = 0;
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "SWAP[]"), t.push(r), t.push(i);
          }, function (e) {
            var t = e.stack;
            T.DEBUG && console.log(e.step, "DEPTH[]"), t.push(t.length);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "CINDEX[]", r), t.push(t[t.length - r]);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "MINDEX[]", r), t.push(t.splice(t.length - r, 1)[0]);
          }, void 0, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "LOOPCALL[]", r, i);
            var n = e.ip,
                a = e.prog;
            e.prog = e.funcs[r];

            for (var o = 0; o < i; o++) At(e), T.DEBUG && console.log(++e.step, o + 1 < i ? "next loopcall" : "done loopcall", o);

            e.ip = n, e.prog = a;
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "CALL[]", t);
            var r = e.ip,
                i = e.prog;
            e.prog = e.funcs[t], At(e), e.ip = r, e.prog = i, T.DEBUG && console.log(++e.step, "returning from", t);
          }, function (e) {
            if ("fpgm" !== e.env) throw new Error("FDEF not allowed here");
            var t = e.stack,
                r = e.prog,
                i = e.ip,
                n = t.pop(),
                a = i;

            for (T.DEBUG && console.log(e.step, "FDEF[]", n); 45 !== r[++i];);

            e.ip = i, e.funcs[n] = r.slice(a + 1, i);
          }, void 0, lr.bind(void 0, 0), lr.bind(void 0, 1), ur.bind(void 0, Xt), ur.bind(void 0, qt), hr.bind(void 0, 0), hr.bind(void 0, 1), cr.bind(void 0, 0), cr.bind(void 0, 1), fr.bind(void 0, 0), fr.bind(void 0, 1), function (e) {
            for (var t = e.stack, r = e.loop, i = e.fv, n = t.pop() / 64, a = e.z2; r--;) {
              var o = t.pop(),
                  s = a[o];
              T.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - r) + ": " : "") + "SHPIX[]", o, n), i.setRelative(s, s, n), i.touch(s);
            }

            e.loop = 1;
          }, function (e) {
            for (var t = e.stack, r = e.rp1, i = e.rp2, n = e.loop, a = e.z0[r], o = e.z1[i], s = e.fv, l = e.dpv, u = e.z2; n--;) {
              var h = t.pop(),
                  c = u[h];
              T.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - n) + ": " : "") + "IP[]", h, r, "<->", i), s.interpolate(c, a, o, l), s.touch(c);
            }

            e.loop = 1;
          }, dr.bind(void 0, 0), dr.bind(void 0, 1), function (e) {
            for (var t = e.stack, r = e.rp0, i = e.z0[r], n = e.loop, a = e.fv, o = e.pv, s = e.z1; n--;) {
              var l = t.pop(),
                  u = s[l];
              T.DEBUG && console.log(e.step, (1 < e.loop ? "loop " + (e.loop - n) + ": " : "") + "ALIGNRP[]", l), a.setRelative(u, i, 0, o), a.touch(u);
            }

            e.loop = 1;
          }, function (e) {
            T.DEBUG && console.log(e.step, "RTDG[]"), e.round = jt;
          }, pr.bind(void 0, 0), pr.bind(void 0, 1), function (e) {
            var t = e.prog,
                r = e.ip,
                i = e.stack,
                n = t[++r];
            T.DEBUG && console.log(e.step, "NPUSHB[]", n);

            for (var a = 0; a < n; a++) i.push(t[++r]);

            e.ip = r;
          }, function (e) {
            var t = e.ip,
                r = e.prog,
                i = e.stack,
                n = r[++t];
            T.DEBUG && console.log(e.step, "NPUSHW[]", n);

            for (var a = 0; a < n; a++) {
              var o = r[++t] << 8 | r[++t];
              32768 & o && (o = -(1 + (65535 ^ o))), i.push(o);
            }

            e.ip = t;
          }, function (e) {
            var t = e.stack,
                r = e.store;
            r = r || (e.store = []);
            var i = t.pop(),
                n = t.pop();
            T.DEBUG && console.log(e.step, "WS", i, n), r[n] = i;
          }, function (e) {
            var t = e.stack,
                r = e.store,
                i = t.pop();
            T.DEBUG && console.log(e.step, "RS", i);
            var n = r && r[i] || 0;
            t.push(n);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "WCVTP", r, i), e.cvt[i] = r / 64;
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "RCVT", r), t.push(64 * e.cvt[r]);
          }, mr.bind(void 0, 0), mr.bind(void 0, 1), void 0, yr.bind(void 0, 0), yr.bind(void 0, 1), function (e) {
            T.DEBUG && console.log(e.step, "MPPEM[]"), e.stack.push(e.ppem);
          }, void 0, function (e) {
            T.DEBUG && console.log(e.step, "FLIPON[]"), e.autoFlip = !0;
          }, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "LT[]", r, i), t.push(i < r ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "LTEQ[]", r, i), t.push(i <= r ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "GT[]", r, i), t.push(r < i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "GTEQ[]", r, i), t.push(r <= i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "EQ[]", r, i), t.push(r === i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "NEQ[]", r, i), t.push(r !== i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "ODD[]", r), t.push(Math.trunc(r) % 2 ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "EVEN[]", r), t.push(Math.trunc(r) % 2 ? 0 : 1);
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "IF[]", t), t || (tr(e, !0), T.DEBUG && console.log(e.step, "EIF[]"));
          }, function (e) {
            T.DEBUG && console.log(e.step, "EIF[]");
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "AND[]", r, i), t.push(r && i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "OR[]", r, i), t.push(r || i ? 1 : 0);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "NOT[]", r), t.push(r ? 0 : 1);
          }, vr.bind(void 0, 1), function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SDB[]", t), e.deltaBase = t;
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SDS[]", t), e.deltaShift = Math.pow(.5, t);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "ADD[]", r, i), t.push(i + r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "SUB[]", r, i), t.push(i - r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "DIV[]", r, i), t.push(64 * i / r);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "MUL[]", r, i), t.push(i * r / 64);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "ABS[]", r), t.push(Math.abs(r));
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "NEG[]", r), t.push(-r);
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "FLOOR[]", r), t.push(64 * Math.floor(r / 64));
          }, function (e) {
            var t = e.stack,
                r = t.pop();
            T.DEBUG && console.log(e.step, "CEILING[]", r), t.push(64 * Math.ceil(r / 64));
          }, gr.bind(void 0, 0), gr.bind(void 0, 1), gr.bind(void 0, 2), gr.bind(void 0, 3), void 0, void 0, void 0, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "WCVTF[]", r, i), e.cvt[i] = r * e.ppem / e.font.unitsPerEm;
          }, vr.bind(void 0, 2), vr.bind(void 0, 3), br.bind(void 0, 1), br.bind(void 0, 2), br.bind(void 0, 3), function (e) {
            var t,
                r = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "SROUND[]", r), e.round = Wt, 192 & r) {
              case 0:
                t = .5;
                break;

              case 64:
                t = 1;
                break;

              case 128:
                t = 2;
                break;

              default:
                throw new Error("invalid SROUND value");
            }

            switch (e.srPeriod = t, 48 & r) {
              case 0:
                e.srPhase = 0;
                break;

              case 16:
                e.srPhase = .25 * t;
                break;

              case 32:
                e.srPhase = .5 * t;
                break;

              case 48:
                e.srPhase = .75 * t;
                break;

              default:
                throw new Error("invalid SROUND value");
            }

            r &= 15, e.srThreshold = 0 === r ? 0 : (r / 8 - .5) * t;
          }, function (e) {
            var t,
                r = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "S45ROUND[]", r), e.round = Wt, 192 & r) {
              case 0:
                t = Math.sqrt(2) / 2;
                break;

              case 64:
                t = Math.sqrt(2);
                break;

              case 128:
                t = 2 * Math.sqrt(2);
                break;

              default:
                throw new Error("invalid S45ROUND value");
            }

            switch (e.srPeriod = t, 48 & r) {
              case 0:
                e.srPhase = 0;
                break;

              case 16:
                e.srPhase = .25 * t;
                break;

              case 32:
                e.srPhase = .5 * t;
                break;

              case 48:
                e.srPhase = .75 * t;
                break;

              default:
                throw new Error("invalid S45ROUND value");
            }

            r &= 15, e.srThreshold = 0 === r ? 0 : (r / 8 - .5) * t;
          }, void 0, void 0, function (e) {
            T.DEBUG && console.log(e.step, "ROFF[]"), e.round = Bt;
          }, void 0, function (e) {
            T.DEBUG && console.log(e.step, "RUTG[]"), e.round = zt;
          }, function (e) {
            T.DEBUG && console.log(e.step, "RDTG[]"), e.round = Ht;
          }, sr, sr, void 0, void 0, void 0, void 0, void 0, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SCANCTRL[]", t);
          }, _r.bind(void 0, 0), _r.bind(void 0, 1), function (e) {
            var t = e.stack,
                r = t.pop(),
                i = 0;
            T.DEBUG && console.log(e.step, "GETINFO[]", r), 1 & r && (i = 35), 32 & r && (i |= 4096), t.push(i);
          }, void 0, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop(),
                n = t.pop();
            T.DEBUG && console.log(e.step, "ROLL[]"), t.push(i), t.push(r), t.push(n);
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "MAX[]", r, i), t.push(Math.max(i, r));
          }, function (e) {
            var t = e.stack,
                r = t.pop(),
                i = t.pop();
            T.DEBUG && console.log(e.step, "MIN[]", r, i), t.push(Math.min(i, r));
          }, function (e) {
            var t = e.stack.pop();
            T.DEBUG && console.log(e.step, "SCANTYPE[]", t);
          }, function (e) {
            var t = e.stack.pop(),
                r = e.stack.pop();

            switch (T.DEBUG && console.log(e.step, "INSTCTRL[]", t, r), t) {
              case 1:
                return void (e.inhibitGridFit = !!r);

              case 2:
                return void (e.ignoreCvt = !!r);

              default:
                throw new Error("invalid INSTCTRL[] selector");
            }
          }, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, xr.bind(void 0, 1), xr.bind(void 0, 2), xr.bind(void 0, 3), xr.bind(void 0, 4), xr.bind(void 0, 5), xr.bind(void 0, 6), xr.bind(void 0, 7), xr.bind(void 0, 8), wr.bind(void 0, 1), wr.bind(void 0, 2), wr.bind(void 0, 3), wr.bind(void 0, 4), wr.bind(void 0, 5), wr.bind(void 0, 6), wr.bind(void 0, 7), wr.bind(void 0, 8), Sr.bind(void 0, 0, 0, 0, 0, 0), Sr.bind(void 0, 0, 0, 0, 0, 1), Sr.bind(void 0, 0, 0, 0, 0, 2), Sr.bind(void 0, 0, 0, 0, 0, 3), Sr.bind(void 0, 0, 0, 0, 1, 0), Sr.bind(void 0, 0, 0, 0, 1, 1), Sr.bind(void 0, 0, 0, 0, 1, 2), Sr.bind(void 0, 0, 0, 0, 1, 3), Sr.bind(void 0, 0, 0, 1, 0, 0), Sr.bind(void 0, 0, 0, 1, 0, 1), Sr.bind(void 0, 0, 0, 1, 0, 2), Sr.bind(void 0, 0, 0, 1, 0, 3), Sr.bind(void 0, 0, 0, 1, 1, 0), Sr.bind(void 0, 0, 0, 1, 1, 1), Sr.bind(void 0, 0, 0, 1, 1, 2), Sr.bind(void 0, 0, 0, 1, 1, 3), Sr.bind(void 0, 0, 1, 0, 0, 0), Sr.bind(void 0, 0, 1, 0, 0, 1), Sr.bind(void 0, 0, 1, 0, 0, 2), Sr.bind(void 0, 0, 1, 0, 0, 3), Sr.bind(void 0, 0, 1, 0, 1, 0), Sr.bind(void 0, 0, 1, 0, 1, 1), Sr.bind(void 0, 0, 1, 0, 1, 2), Sr.bind(void 0, 0, 1, 0, 1, 3), Sr.bind(void 0, 0, 1, 1, 0, 0), Sr.bind(void 0, 0, 1, 1, 0, 1), Sr.bind(void 0, 0, 1, 1, 0, 2), Sr.bind(void 0, 0, 1, 1, 0, 3), Sr.bind(void 0, 0, 1, 1, 1, 0), Sr.bind(void 0, 0, 1, 1, 1, 1), Sr.bind(void 0, 0, 1, 1, 1, 2), Sr.bind(void 0, 0, 1, 1, 1, 3), Sr.bind(void 0, 1, 0, 0, 0, 0), Sr.bind(void 0, 1, 0, 0, 0, 1), Sr.bind(void 0, 1, 0, 0, 0, 2), Sr.bind(void 0, 1, 0, 0, 0, 3), Sr.bind(void 0, 1, 0, 0, 1, 0), Sr.bind(void 0, 1, 0, 0, 1, 1), Sr.bind(void 0, 1, 0, 0, 1, 2), Sr.bind(void 0, 1, 0, 0, 1, 3), Sr.bind(void 0, 1, 0, 1, 0, 0), Sr.bind(void 0, 1, 0, 1, 0, 1), Sr.bind(void 0, 1, 0, 1, 0, 2), Sr.bind(void 0, 1, 0, 1, 0, 3), Sr.bind(void 0, 1, 0, 1, 1, 0), Sr.bind(void 0, 1, 0, 1, 1, 1), Sr.bind(void 0, 1, 0, 1, 1, 2), Sr.bind(void 0, 1, 0, 1, 1, 3), Sr.bind(void 0, 1, 1, 0, 0, 0), Sr.bind(void 0, 1, 1, 0, 0, 1), Sr.bind(void 0, 1, 1, 0, 0, 2), Sr.bind(void 0, 1, 1, 0, 0, 3), Sr.bind(void 0, 1, 1, 0, 1, 0), Sr.bind(void 0, 1, 1, 0, 1, 1), Sr.bind(void 0, 1, 1, 0, 1, 2), Sr.bind(void 0, 1, 1, 0, 1, 3), Sr.bind(void 0, 1, 1, 1, 0, 0), Sr.bind(void 0, 1, 1, 1, 0, 1), Sr.bind(void 0, 1, 1, 1, 0, 2), Sr.bind(void 0, 1, 1, 1, 0, 3), Sr.bind(void 0, 1, 1, 1, 1, 0), Sr.bind(void 0, 1, 1, 1, 1, 1), Sr.bind(void 0, 1, 1, 1, 1, 2), Sr.bind(void 0, 1, 1, 1, 1, 3)];

          var Mr = Array.from || function (e) {
            return e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
          };

          function Tr(e) {
            (e = e || {}).empty || (Ct(e.familyName, "When creating a new Font object, familyName is required."), Ct(e.styleName, "When creating a new Font object, styleName is required."), Ct(e.unitsPerEm, "When creating a new Font object, unitsPerEm is required."), Ct(e.ascender, "When creating a new Font object, ascender is required."), Ct(e.descender, "When creating a new Font object, descender is required."), Ct(e.descender < 0, "Descender should be negative (e.g. -512)."), this.names = {
              fontFamily: {
                en: e.familyName || " "
              },
              fontSubfamily: {
                en: e.styleName || " "
              },
              fullName: {
                en: e.fullName || e.familyName + " " + e.styleName
              },
              postScriptName: {
                en: e.postScriptName || (e.familyName + e.styleName).replace(/\s/g, "")
              },
              designer: {
                en: e.designer || " "
              },
              designerURL: {
                en: e.designerURL || " "
              },
              manufacturer: {
                en: e.manufacturer || " "
              },
              manufacturerURL: {
                en: e.manufacturerURL || " "
              },
              license: {
                en: e.license || " "
              },
              licenseURL: {
                en: e.licenseURL || " "
              },
              version: {
                en: e.version || "Version 0.1"
              },
              description: {
                en: e.description || " "
              },
              copyright: {
                en: e.copyright || " "
              },
              trademark: {
                en: e.trademark || " "
              }
            }, this.unitsPerEm = e.unitsPerEm || 1e3, this.ascender = e.ascender, this.descender = e.descender, this.createdTimestamp = e.createdTimestamp, this.tables = {
              os2: {
                usWeightClass: e.weightClass || this.usWeightClasses.MEDIUM,
                usWidthClass: e.widthClass || this.usWidthClasses.MEDIUM,
                fsSelection: e.fsSelection || this.fsSelectionValues.REGULAR
              }
            }), this.supported = !0, this.glyphs = new xe.GlyphSet(this, e.glyphs || []), this.encoding = new de(this), this.position = new wt(this), this.substitution = new St(this), this.tables = this.tables || {}, Object.defineProperty(this, "hinting", {
              get: function () {
                return this._hinting ? this._hinting : "truetype" === this.outlinesFormat ? this._hinting = new Ft(this) : void 0;
              }
            });
          }

          function Er(e, t) {
            var r = JSON.stringify(e),
                i = 256;

            for (var n in t) {
              var a = parseInt(n);

              if (a && !(a < 256)) {
                if (JSON.stringify(t[n]) === r) return a;
                i <= a && (i = a + 1);
              }
            }

            return t[i] = e, i;
          }

          function Cr(e, t, r, i) {
            for (var n = [{
              name: "nameID_" + e,
              type: "USHORT",
              value: Er(t.name, i)
            }, {
              name: "flags_" + e,
              type: "USHORT",
              value: 0
            }], a = 0; a < r.length; ++a) {
              var o = r[a].tag;
              n.push({
                name: "axis_" + e + " " + o,
                type: "FIXED",
                value: t.coordinates[o] << 16
              });
            }

            return n;
          }

          function Lr(e, t, r, i) {
            var n = {},
                a = new se.Parser(e, t);
            n.name = i[a.parseUShort()] || {}, a.skip("uShort", 1), n.coordinates = {};

            for (var o = 0; o < r.length; ++o) n.coordinates[r[o].tag] = a.parseFixed();

            return n;
          }

          Tr.prototype.hasChar = function (e) {
            return null !== this.encoding.charToGlyphIndex(e);
          }, Tr.prototype.charToGlyphIndex = function (e) {
            return this.encoding.charToGlyphIndex(e);
          }, Tr.prototype.charToGlyph = function (e) {
            var t = this.charToGlyphIndex(e),
                r = this.glyphs.get(t);
            return r = r || this.glyphs.get(0);
          }, Tr.prototype.stringToGlyphs = function (e, t) {
            t = t || this.defaultRenderOptions;

            for (var r = Mr(e), i = [], n = 0; n < r.length; n += 1) {
              var a = r[n];
              i.push(this.charToGlyphIndex(a));
            }

            var o = i.length;

            if (t.features) {
              var s = t.script || this.substitution.getDefaultScriptName(),
                  l = [];
              t.features.liga && (l = l.concat(this.substitution.getFeature("liga", s, t.language))), t.features.rlig && (l = l.concat(this.substitution.getFeature("rlig", s, t.language)));

              for (var u = 0; u < o; u += 1) for (var h = 0; h < l.length; h++) {
                for (var c = l[h], f = c.sub, d = f.length, p = 0; p < d && f[p] === i[u + p];) p++;

                p === d && (i.splice(u, d, c.by), o = o - d + 1);
              }
            }

            for (var m = new Array(o), y = this.glyphs.get(0), v = 0; v < o; v += 1) m[v] = this.glyphs.get(i[v]) || y;

            return m;
          }, Tr.prototype.nameToGlyphIndex = function (e) {
            return this.glyphNames.nameToGlyphIndex(e);
          }, Tr.prototype.nameToGlyph = function (e) {
            var t = this.nameToGlyphIndex(e),
                r = this.glyphs.get(t);
            return r = r || this.glyphs.get(0);
          }, Tr.prototype.glyphIndexToName = function (e) {
            return this.glyphNames.glyphIndexToName ? this.glyphNames.glyphIndexToName(e) : "";
          }, Tr.prototype.getKerningValue = function (e, t) {
            e = e.index || e, t = t.index || t;
            var r = this.position.defaultKerningTables;
            return r ? this.position.getKerningValue(r, e, t) : this.kerningPairs[e + "," + t] || 0;
          }, Tr.prototype.defaultRenderOptions = {
            kerning: !0,
            features: {
              liga: !0,
              rlig: !0
            }
          }, Tr.prototype.forEachGlyph = function (e, t, r, i, n, a) {
            t = void 0 !== t ? t : 0, r = void 0 !== r ? r : 0, i = void 0 !== i ? i : 72, n = n || this.defaultRenderOptions;
            var o,
                s = 1 / this.unitsPerEm * i,
                l = this.stringToGlyphs(e, n);

            if (n.kerning) {
              var u = n.script || this.position.getDefaultScriptName();
              o = this.position.getKerningTables(u, n.language);
            }

            for (var h = 0; h < l.length; h += 1) {
              var c = l[h];
              if (a.call(this, c, t, r, i, n), c.advanceWidth && (t += c.advanceWidth * s), n.kerning && h < l.length - 1) t += (o ? this.position.getKerningValue(o, c.index, l[h + 1].index) : this.getKerningValue(c, l[h + 1])) * s;
              n.letterSpacing ? t += n.letterSpacing * i : n.tracking && (t += n.tracking / 1e3 * i);
            }

            return t;
          }, Tr.prototype.getPath = function (e, t, r, i, a) {
            var o = new I();
            return this.forEachGlyph(e, t, r, i, a, function (e, t, r, i) {
              var n = e.getPath(t, r, i, a, this);
              o.extend(n);
            }), o;
          }, Tr.prototype.getPaths = function (e, t, r, i, a) {
            var o = [];
            return this.forEachGlyph(e, t, r, i, a, function (e, t, r, i) {
              var n = e.getPath(t, r, i, a, this);
              o.push(n);
            }), o;
          }, Tr.prototype.getAdvanceWidth = function (e, t, r) {
            return this.forEachGlyph(e, 0, 0, t, r, function () {});
          }, Tr.prototype.draw = function (e, t, r, i, n, a) {
            this.getPath(t, r, i, n, a).draw(e);
          }, Tr.prototype.drawPoints = function (n, e, t, r, i, a) {
            this.forEachGlyph(e, t, r, i, a, function (e, t, r, i) {
              e.drawPoints(n, t, r, i);
            });
          }, Tr.prototype.drawMetrics = function (n, e, t, r, i, a) {
            this.forEachGlyph(e, t, r, i, a, function (e, t, r, i) {
              e.drawMetrics(n, t, r, i);
            });
          }, Tr.prototype.getEnglishName = function (e) {
            var t = this.names[e];
            if (t) return t.en;
          }, Tr.prototype.validate = function () {
            var r = this;

            function e(e) {
              var t = r.getEnglishName(e);
              t && t.trim().length;
            }

            e("fontFamily"), e("weightName"), e("manufacturer"), e("copyright"), e("version"), this.unitsPerEm;
          }, Tr.prototype.toTables = function () {
            return vt.fontToTable(this);
          }, Tr.prototype.toBuffer = function () {
            return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."), this.toArrayBuffer();
          }, Tr.prototype.toArrayBuffer = function () {
            for (var e = this.toTables().encode(), t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i < e.length; i++) r[i] = e[i];

            return t;
          }, Tr.prototype.download = function (t) {
            var e = this.getEnglishName("fontFamily"),
                r = this.getEnglishName("fontSubfamily");
            t = t || e.replace(/\s/g, "") + "-" + r + ".otf";
            var n = this.toArrayBuffer();
            if ("undefined" != typeof window) window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem, window.requestFileSystem(window.TEMPORARY, n.byteLength, function (e) {
              e.root.getFile(t, {
                create: !0
              }, function (i) {
                i.createWriter(function (e) {
                  var t = new DataView(n),
                      r = new Blob([t], {
                    type: "font/opentype"
                  });
                  e.write(r), e.addEventListener("writeend", function () {
                    location.href = i.toURL();
                  }, !1);
                });
              });
            }, function (e) {
              throw new Error(e.name + ": " + e.message);
            });else {
              var i = jr("fs"),
                  a = function (e) {
                for (var t = new Gr(e.byteLength), r = new Uint8Array(e), i = 0; i < t.length; ++i) t[i] = r[i];

                return t;
              }(n);

              i.writeFileSync(t, a);
            }
          }, Tr.prototype.fsSelectionValues = {
            ITALIC: 1,
            UNDERSCORE: 2,
            NEGATIVE: 4,
            OUTLINED: 8,
            STRIKEOUT: 16,
            BOLD: 32,
            REGULAR: 64,
            USER_TYPO_METRICS: 128,
            WWS: 256,
            OBLIQUE: 512
          }, Tr.prototype.usWidthClasses = {
            ULTRA_CONDENSED: 1,
            EXTRA_CONDENSED: 2,
            CONDENSED: 3,
            SEMI_CONDENSED: 4,
            MEDIUM: 5,
            SEMI_EXPANDED: 6,
            EXPANDED: 7,
            EXTRA_EXPANDED: 8,
            ULTRA_EXPANDED: 9
          }, Tr.prototype.usWeightClasses = {
            THIN: 100,
            EXTRA_LIGHT: 200,
            LIGHT: 300,
            NORMAL: 400,
            MEDIUM: 500,
            SEMI_BOLD: 600,
            BOLD: 700,
            EXTRA_BOLD: 800,
            BLACK: 900
          };
          var Or = {
            make: function (e, t) {
              var r,
                  i,
                  n,
                  a,
                  o = new $.Table("fvar", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "offsetToData",
                type: "USHORT",
                value: 0
              }, {
                name: "countSizePairs",
                type: "USHORT",
                value: 2
              }, {
                name: "axisCount",
                type: "USHORT",
                value: e.axes.length
              }, {
                name: "axisSize",
                type: "USHORT",
                value: 20
              }, {
                name: "instanceCount",
                type: "USHORT",
                value: e.instances.length
              }, {
                name: "instanceSize",
                type: "USHORT",
                value: 4 + 4 * e.axes.length
              }]);
              o.offsetToData = o.sizeOf();

              for (var s = 0; s < e.axes.length; s++) o.fields = o.fields.concat((r = s, i = e.axes[s], n = t, a = Er(i.name, n), [{
                name: "tag_" + r,
                type: "TAG",
                value: i.tag
              }, {
                name: "minValue_" + r,
                type: "FIXED",
                value: i.minValue << 16
              }, {
                name: "defaultValue_" + r,
                type: "FIXED",
                value: i.defaultValue << 16
              }, {
                name: "maxValue_" + r,
                type: "FIXED",
                value: i.maxValue << 16
              }, {
                name: "flags_" + r,
                type: "USHORT",
                value: 0
              }, {
                name: "nameID_" + r,
                type: "USHORT",
                value: a
              }]));

              for (var l = 0; l < e.instances.length; l++) o.fields = o.fields.concat(Cr(l, e.instances[l], e.axes, t));

              return o;
            },
            parse: function (e, t, r) {
              var i = new se.Parser(e, t),
                  n = i.parseULong();
              P.argument(65536 === n, "Unsupported fvar table version.");
              var a = i.parseOffset16();
              i.skip("uShort", 1);

              for (var o, s, l, u, h, c = i.parseUShort(), f = i.parseUShort(), d = i.parseUShort(), p = i.parseUShort(), m = [], y = 0; y < c; y++) m.push((o = e, s = t + a + y * f, l = r, h = u = void 0, u = {}, h = new se.Parser(o, s), u.tag = h.parseTag(), u.minValue = h.parseFixed(), u.defaultValue = h.parseFixed(), u.maxValue = h.parseFixed(), h.skip("uShort", 1), u.name = l[h.parseUShort()] || {}, u));

              for (var v = [], g = t + a + c * f, b = 0; b < d; b++) v.push(Lr(e, g + b * p, m, r));

              return {
                axes: m,
                instances: v
              };
            }
          },
              Pr = new Array(10);
          Pr[1] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            return 1 === t ? {
              posFormat: 1,
              coverage: this.parsePointer(ae.coverage),
              value: this.parseValueRecord()
            } : 2 === t ? {
              posFormat: 2,
              coverage: this.parsePointer(ae.coverage),
              values: this.parseValueRecordList()
            } : void P.assert(!1, "0x" + e.toString(16) + ": GPOS lookup type 1 format must be 1 or 2.");
          }, Pr[2] = function () {
            var e = this.offset + this.relativeOffset,
                t = this.parseUShort();
            P.assert(1 === t || 2 === t, "0x" + e.toString(16) + ": GPOS lookup type 2 format must be 1 or 2.");
            var r = this.parsePointer(ae.coverage),
                i = this.parseUShort(),
                n = this.parseUShort();
            if (1 === t) return {
              posFormat: t,
              coverage: r,
              valueFormat1: i,
              valueFormat2: n,
              pairSets: this.parseList(ae.pointer(ae.list(function () {
                return {
                  secondGlyph: this.parseUShort(),
                  value1: this.parseValueRecord(i),
                  value2: this.parseValueRecord(n)
                };
              })))
            };

            if (2 === t) {
              var a = this.parsePointer(ae.classDef),
                  o = this.parsePointer(ae.classDef),
                  s = this.parseUShort(),
                  l = this.parseUShort();
              return {
                posFormat: t,
                coverage: r,
                valueFormat1: i,
                valueFormat2: n,
                classDef1: a,
                classDef2: o,
                class1Count: s,
                class2Count: l,
                classRecords: this.parseList(s, ae.list(l, function () {
                  return {
                    value1: this.parseValueRecord(i),
                    value2: this.parseValueRecord(n)
                  };
                }))
              };
            }
          }, Pr[3] = function () {
            return {
              error: "GPOS Lookup 3 not supported"
            };
          }, Pr[4] = function () {
            return {
              error: "GPOS Lookup 4 not supported"
            };
          }, Pr[5] = function () {
            return {
              error: "GPOS Lookup 5 not supported"
            };
          }, Pr[6] = function () {
            return {
              error: "GPOS Lookup 6 not supported"
            };
          }, Pr[7] = function () {
            return {
              error: "GPOS Lookup 7 not supported"
            };
          }, Pr[8] = function () {
            return {
              error: "GPOS Lookup 8 not supported"
            };
          }, Pr[9] = function () {
            return {
              error: "GPOS Lookup 9 not supported"
            };
          };
          var Rr = new Array(10);
          var Dr = {
            parse: function (e, t) {
              var r = new ae(e, t = t || 0),
                  i = r.parseVersion(1);
              return P.argument(1 === i || 1.1 === i, "Unsupported GPOS table version " + i), 1 === i ? {
                version: i,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(Pr)
              } : {
                version: i,
                scripts: r.parseScriptList(),
                features: r.parseFeatureList(),
                lookups: r.parseLookupList(Pr),
                variations: r.parseFeatureVariationsList()
              };
            },
            make: function (e) {
              return new $.Table("GPOS", [{
                name: "version",
                type: "ULONG",
                value: 65536
              }, {
                name: "scripts",
                type: "TABLE",
                value: new $.ScriptList(e.scripts)
              }, {
                name: "features",
                type: "TABLE",
                value: new $.FeatureList(e.features)
              }, {
                name: "lookups",
                type: "TABLE",
                value: new $.LookupList(e.lookups, Rr)
              }]);
            }
          };
          var kr = {
            parse: function (e, t) {
              var r = new se.Parser(e, t),
                  i = r.parseUShort();
              if (0 === i) return function (e) {
                var t = {};
                e.skip("uShort");
                var r = e.parseUShort();
                P.argument(0 === r, "Unsupported kern sub-table version."), e.skip("uShort", 2);
                var i = e.parseUShort();
                e.skip("uShort", 3);

                for (var n = 0; n < i; n += 1) {
                  var a = e.parseUShort(),
                      o = e.parseUShort(),
                      s = e.parseShort();
                  t[a + "," + o] = s;
                }

                return t;
              }(r);
              if (1 === i) return function (e) {
                var t = {};
                e.skip("uShort"), 1 < e.parseULong() && console.warn("Only the first kern subtable is supported."), e.skip("uLong");
                var r = 255 & e.parseUShort();

                if (e.skip("uShort"), 0 == r) {
                  var i = e.parseUShort();
                  e.skip("uShort", 3);

                  for (var n = 0; n < i; n += 1) {
                    var a = e.parseUShort(),
                        o = e.parseUShort(),
                        s = e.parseShort();
                    t[a + "," + o] = s;
                  }
                }

                return t;
              }(r);
              throw new Error("Unsupported kern table version (" + i + ").");
            }
          };
          var Ar = {
            parse: function (e, t, r, i) {
              for (var n = new se.Parser(e, t), a = i ? n.parseUShort : n.parseULong, o = [], s = 0; s < r + 1; s += 1) {
                var l = a.call(n);
                i && (l *= 2), o.push(l);
              }

              return o;
            }
          };

          function Ir(e, r) {
            jr("fs").readFile(e, function (e, t) {
              if (e) return r(e.message);
              r(null, Et(t));
            });
          }

          function Ur(e, t) {
            var r = new XMLHttpRequest();
            r.open("get", e, !0), r.responseType = "arraybuffer", r.onload = function () {
              return r.response ? t(null, r.response) : t("Font could not be loaded: " + r.statusText);
            }, r.onerror = function () {
              t("Font could not be loaded");
            }, r.send();
          }

          function Nr(e, t) {
            for (var r = [], i = 12, n = 0; n < t; n += 1) {
              var a = se.getTag(e, i),
                  o = se.getULong(e, i + 4),
                  s = se.getULong(e, i + 8),
                  l = se.getULong(e, i + 12);
              r.push({
                tag: a,
                checksum: o,
                offset: s,
                length: l,
                compression: !1
              }), i += 16;
            }

            return r;
          }

          function Fr(e, t) {
            if ("WOFF" !== t.compression) return {
              data: e,
              offset: t.offset
            };
            var r = new Uint8Array(e.buffer, t.offset + 2, t.compressedLength - 2),
                i = new Uint8Array(t.length);
            if (n(r, i), i.byteLength !== t.length) throw new Error("Decompression error: " + t.tag + " decompressed length doesn't match recorded length");
            return {
              data: new DataView(i.buffer, 0),
              offset: 0
            };
          }

          function Br(e) {
            var t,
                r,
                i,
                n,
                a,
                o,
                s,
                l,
                u,
                h,
                c,
                f,
                d,
                p,
                m = new Tr({
              empty: !0
            }),
                y = new DataView(e, 0),
                v = [],
                g = se.getTag(y, 0);
            if (g === String.fromCharCode(0, 1, 0, 0) || "true" === g || "typ1" === g) m.outlinesFormat = "truetype", v = Nr(y, i = se.getUShort(y, 4));else if ("OTTO" === g) m.outlinesFormat = "cff", v = Nr(y, i = se.getUShort(y, 4));else {
              if ("wOFF" !== g) throw new Error("Unsupported OpenType signature " + g);
              var b = se.getTag(y, 4);
              if (b === String.fromCharCode(0, 1, 0, 0)) m.outlinesFormat = "truetype";else {
                if ("OTTO" !== b) throw new Error("Unsupported OpenType flavor " + g);
                m.outlinesFormat = "cff";
              }

              v = function (e, t) {
                for (var r = [], i = 44, n = 0; n < t; n += 1) {
                  var a = se.getTag(e, i),
                      o = se.getULong(e, i + 4),
                      s = se.getULong(e, i + 8),
                      l = se.getULong(e, i + 12),
                      u = void 0;
                  u = s < l && "WOFF", r.push({
                    tag: a,
                    offset: o,
                    compression: u,
                    compressedLength: s,
                    length: l
                  }), i += 20;
                }

                return r;
              }(y, i = se.getUShort(y, 12));
            }

            for (var _ = 0; _ < i; _ += 1) {
              var x = v[_],
                  w = void 0;

              switch (x.tag) {
                case "cmap":
                  w = Fr(y, x), m.tables.cmap = le.parse(w.data, w.offset), m.encoding = new pe(m.tables.cmap);
                  break;

                case "cvt ":
                  w = Fr(y, x), p = new se.Parser(w.data, w.offset), m.tables.cvt = p.parseShortList(x.length / 2);
                  break;

                case "fvar":
                  a = x;
                  break;

                case "fpgm":
                  w = Fr(y, x), p = new se.Parser(w.data, w.offset), m.tables.fpgm = p.parseByteList(x.length);
                  break;

                case "head":
                  w = Fr(y, x), m.tables.head = Ge.parse(w.data, w.offset), m.unitsPerEm = m.tables.head.unitsPerEm, t = m.tables.head.indexToLocFormat;
                  break;

                case "hhea":
                  w = Fr(y, x), m.tables.hhea = je.parse(w.data, w.offset), m.ascender = m.tables.hhea.ascender, m.descender = m.tables.hhea.descender, m.numberOfHMetrics = m.tables.hhea.numberOfHMetrics;
                  break;

                case "hmtx":
                  u = x;
                  break;

                case "ltag":
                  w = Fr(y, x), r = ze.parse(w.data, w.offset);
                  break;

                case "maxp":
                  w = Fr(y, x), m.tables.maxp = He.parse(w.data, w.offset), m.numGlyphs = m.tables.maxp.numGlyphs;
                  break;

                case "name":
                  f = x;
                  break;

                case "OS/2":
                  w = Fr(y, x), m.tables.os2 = at.parse(w.data, w.offset);
                  break;

                case "post":
                  w = Fr(y, x), m.tables.post = ot.parse(w.data, w.offset), m.glyphNames = new ye(m.tables.post);
                  break;

                case "prep":
                  w = Fr(y, x), p = new se.Parser(w.data, w.offset), m.tables.prep = p.parseByteList(x.length);
                  break;

                case "glyf":
                  o = x;
                  break;

                case "loca":
                  c = x;
                  break;

                case "CFF ":
                  n = x;
                  break;

                case "kern":
                  h = x;
                  break;

                case "GPOS":
                  s = x;
                  break;

                case "GSUB":
                  l = x;
                  break;

                case "meta":
                  d = x;
              }
            }

            var S = Fr(y, f);

            if (m.tables.name = it.parse(S.data, S.offset, r), m.names = m.tables.name, o && c) {
              var M = 0 === t,
                  T = Fr(y, c),
                  E = Ar.parse(T.data, T.offset, m.numGlyphs, M),
                  C = Fr(y, o);
              m.glyphs = Nt.parse(C.data, C.offset, E, m);
            } else {
              if (!n) throw new Error("Font doesn't contain TrueType or CFF outlines.");
              var L = Fr(y, n);
              Be.parse(L.data, L.offset, m);
            }

            var O = Fr(y, u);

            if (Ve.parse(O.data, O.offset, m.numberOfHMetrics, m.numGlyphs, m.glyphs), function (e) {
              for (var t, r = e.tables.cmap.glyphIndexMap, i = Object.keys(r), n = 0; n < i.length; n += 1) {
                var a = i[n],
                    o = r[a];
                (t = e.glyphs.get(o)).addUnicode(parseInt(a));
              }

              for (var s = 0; s < e.glyphs.length; s += 1) t = e.glyphs.get(s), e.cffEncoding ? e.isCIDFont ? t.name = "gid" + s : t.name = e.cffEncoding.charset[s] : e.glyphNames.names && (t.name = e.glyphNames.glyphIndexToName(s));
            }(m), h) {
              var P = Fr(y, h);
              m.kerningPairs = kr.parse(P.data, P.offset);
            } else m.kerningPairs = {};

            if (s) {
              var R = Fr(y, s);
              m.tables.gpos = Dr.parse(R.data, R.offset), m.position.init();
            }

            if (l) {
              var D = Fr(y, l);
              m.tables.gsub = ht.parse(D.data, D.offset);
            }

            if (a) {
              var k = Fr(y, a);
              m.tables.fvar = Or.parse(k.data, k.offset, m.names);
            }

            if (d) {
              var A = Fr(y, d);
              m.tables.meta = ct.parse(A.data, A.offset), m.metas = m.tables.meta;
            }

            return m;
          }

          T.Font = Tr, T.Glyph = ge, T.Path = I, T.BoundingBox = C, T._parse = se, T.parse = Br, T.load = function (e, i) {
            ("undefined" == typeof window ? Ir : Ur)(e, function (e, t) {
              if (e) return i(e);
              var r;

              try {
                r = Br(t);
              } catch (e) {
                return i(e, null);
              }

              return i(null, r);
            });
          }, T.loadSync = function (e) {
            return Br(Et(jr("fs").readFileSync(e)));
          }, Object.defineProperty(T, "__esModule", {
            value: !0
          });
        }("object" == typeof r && void 0 !== t ? r : e.opentype = {});
      }).call(this, jr("buffer").Buffer);
    }, {
      buffer: 4,
      fs: 2
    }],
    13: [function (e, t, u) {
      (function (n) {
        function a(e, t) {
          for (var r = 0, i = e.length - 1; 0 <= i; i--) {
            var n = e[i];
            "." === n ? e.splice(i, 1) : ".." === n ? (e.splice(i, 1), r++) : r && (e.splice(i, 1), r--);
          }

          if (t) for (; r--;) e.unshift("..");
          return e;
        }

        function o(e, t) {
          if (e.filter) return e.filter(t);

          for (var r = [], i = 0; i < e.length; i++) t(e[i], i, e) && r.push(e[i]);

          return r;
        }

        u.resolve = function () {
          for (var e = "", t = !1, r = arguments.length - 1; -1 <= r && !t; r--) {
            var i = 0 <= r ? arguments[r] : n.cwd();
            if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
            i && (e = i + "/" + e, t = "/" === i.charAt(0));
          }

          return (t ? "/" : "") + (e = a(o(e.split("/"), function (e) {
            return !!e;
          }), !t).join("/")) || ".";
        }, u.normalize = function (e) {
          var t = u.isAbsolute(e),
              r = "/" === i(e, -1);
          return (e = a(o(e.split("/"), function (e) {
            return !!e;
          }), !t).join("/")) || t || (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
        }, u.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }, u.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return u.normalize(o(e, function (e, t) {
            if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
            return e;
          }).join("/"));
        }, u.relative = function (e, t) {
          function r(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);

            for (var r = e.length - 1; 0 <= r && "" === e[r]; r--);

            return r < t ? [] : e.slice(t, r - t + 1);
          }

          e = u.resolve(e).substr(1), t = u.resolve(t).substr(1);

          for (var i = r(e.split("/")), n = r(t.split("/")), a = Math.min(i.length, n.length), o = a, s = 0; s < a; s++) if (i[s] !== n[s]) {
            o = s;
            break;
          }

          var l = [];

          for (s = o; s < i.length; s++) l.push("..");

          return (l = l.concat(n.slice(o))).join("/");
        }, u.sep = "/", u.delimiter = ":", u.dirname = function (e) {
          if ("string" != typeof e && (e += ""), 0 === e.length) return ".";

          for (var t = e.charCodeAt(0), r = 47 === t, i = -1, n = !0, a = e.length - 1; 1 <= a; --a) if (47 === (t = e.charCodeAt(a))) {
            if (!n) {
              i = a;
              break;
            }
          } else n = !1;

          return -1 === i ? r ? "/" : "." : r && 1 === i ? "/" : e.slice(0, i);
        }, u.basename = function (e, t) {
          var r = function (e) {
            "string" != typeof e && (e += "");
            var t,
                r = 0,
                i = -1,
                n = !0;

            for (t = e.length - 1; 0 <= t; --t) if (47 === e.charCodeAt(t)) {
              if (!n) {
                r = t + 1;
                break;
              }
            } else -1 === i && (n = !1, i = t + 1);

            return -1 === i ? "" : e.slice(r, i);
          }(e);

          return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r;
        }, u.extname = function (e) {
          "string" != typeof e && (e += "");

          for (var t = -1, r = 0, i = -1, n = !0, a = 0, o = e.length - 1; 0 <= o; --o) {
            var s = e.charCodeAt(o);

            if (47 === s) {
              if (n) continue;
              r = o + 1;
              break;
            }

            -1 === i && (n = !1, i = o + 1), 46 === s ? -1 === t ? t = o : 1 !== a && (a = 1) : -1 !== t && (a = -1);
          }

          return -1 === t || -1 === i || 0 === a || 1 === a && t === i - 1 && t === r + 1 ? "" : e.slice(t, i);
        };
        var i = "b" === "ab".substr(-1) ? function (e, t, r) {
          return e.substr(t, r);
        } : function (e, t, r) {
          return t < 0 && (t = e.length + t), e.substr(t, r);
        };
      }).call(this, e("_process"));
    }, {
      _process: 14
    }],
    14: [function (e, t, r) {
      var i,
          n,
          a = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined");
      }

      function s() {
        throw new Error("clearTimeout has not been defined");
      }

      function l(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);

        try {
          return i(t, 0);
        } catch (e) {
          try {
            return i.call(null, t, 0);
          } catch (e) {
            return i.call(this, t, 0);
          }
        }
      }

      !function () {
        try {
          i = "function" == typeof setTimeout ? setTimeout : o;
        } catch (e) {
          i = o;
        }

        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      }();
      var u,
          h = [],
          c = !1,
          f = -1;

      function d() {
        c && u && (c = !1, u.length ? h = u.concat(h) : f = -1, h.length && p());
      }

      function p() {
        if (!c) {
          var e = l(d);
          c = !0;

          for (var t = h.length; t;) {
            for (u = h, h = []; ++f < t;) u && u[f].run();

            f = -1, t = h.length;
          }

          u = null, c = !1, function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);

            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          }(e);
        }
      }

      function m(e, t) {
        this.fun = e, this.array = t;
      }

      function y() {}

      a.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        h.push(new m(e, t)), 1 !== h.length || c || l(p);
      }, m.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = y, a.addListener = y, a.once = y, a.off = y, a.removeListener = y, a.removeAllListeners = y, a.emit = y, a.prependListener = y, a.prependOnceListener = y, a.listeners = function (e) {
        return [];
      }, a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function () {
        return "/";
      }, a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function () {
        return 0;
      };
    }, {}],
    15: [function (e, t, r) {
      !function (e) {
        "use strict";

        if (!e.fetch) {
          var t = "URLSearchParams" in e,
              r = "Symbol" in e && "iterator" in Symbol,
              o = "FileReader" in e && "Blob" in e && function () {
            try {
              return new Blob(), !0;
            } catch (e) {
              return !1;
            }
          }(),
              i = "FormData" in e,
              n = "ArrayBuffer" in e;

          if (n) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
              s = function (e) {
            return e && DataView.prototype.isPrototypeOf(e);
          },
              l = ArrayBuffer.isView || function (e) {
            return e && -1 < a.indexOf(Object.prototype.toString.call(e));
          };
          p.prototype.append = function (e, t) {
            e = c(e), t = f(t);
            var r = this.map[e];
            this.map[e] = r ? r + "," + t : t;
          }, p.prototype.delete = function (e) {
            delete this.map[c(e)];
          }, p.prototype.get = function (e) {
            return e = c(e), this.has(e) ? this.map[e] : null;
          }, p.prototype.has = function (e) {
            return this.map.hasOwnProperty(c(e));
          }, p.prototype.set = function (e, t) {
            this.map[c(e)] = f(t);
          }, p.prototype.forEach = function (e, t) {
            for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
          }, p.prototype.keys = function () {
            var r = [];
            return this.forEach(function (e, t) {
              r.push(t);
            }), d(r);
          }, p.prototype.values = function () {
            var t = [];
            return this.forEach(function (e) {
              t.push(e);
            }), d(t);
          }, p.prototype.entries = function () {
            var r = [];
            return this.forEach(function (e, t) {
              r.push([t, e]);
            }), d(r);
          }, r && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          _.prototype.clone = function () {
            return new _(this, {
              body: this._bodyInit
            });
          }, b.call(_.prototype), b.call(w.prototype), w.prototype.clone = function () {
            return new w(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new p(this.headers),
              url: this.url
            });
          }, w.error = function () {
            var e = new w(null, {
              status: 0,
              statusText: ""
            });
            return e.type = "error", e;
          };
          var h = [301, 302, 303, 307, 308];
          w.redirect = function (e, t) {
            if (-1 === h.indexOf(t)) throw new RangeError("Invalid status code");
            return new w(null, {
              status: t,
              headers: {
                location: e
              }
            });
          }, e.Headers = p, e.Request = _, e.Response = w, e.fetch = function (r, n) {
            return new Promise(function (i, e) {
              var t = new _(r, n),
                  a = new XMLHttpRequest();
              a.onload = function () {
                var e,
                    n,
                    t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: (e = a.getAllResponseHeaders() || "", n = new p(), e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (e) {
                    var t = e.split(":"),
                        r = t.shift().trim();

                    if (r) {
                      var i = t.join(":").trim();
                      n.append(r, i);
                    }
                  }), n)
                };
                t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                var r = "response" in a ? a.response : a.responseText;
                i(new w(r, t));
              }, a.onerror = function () {
                e(new TypeError("Network request failed"));
              }, a.ontimeout = function () {
                e(new TypeError("Network request failed"));
              }, a.open(t.method, t.url, !0), "include" === t.credentials ? a.withCredentials = !0 : "omit" === t.credentials && (a.withCredentials = !1), "responseType" in a && o && (a.responseType = "blob"), t.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e);
              }), a.send(void 0 === t._bodyInit ? null : t._bodyInit);
            });
          }, e.fetch.polyfill = !0;
        }

        function c(e) {
          if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
          return e.toLowerCase();
        }

        function f(e) {
          return "string" != typeof e && (e = String(e)), e;
        }

        function d(t) {
          var e = {
            next: function () {
              var e = t.shift();
              return {
                done: void 0 === e,
                value: e
              };
            }
          };
          return r && (e[Symbol.iterator] = function () {
            return e;
          }), e;
        }

        function p(t) {
          this.map = {}, t instanceof p ? t.forEach(function (e, t) {
            this.append(t, e);
          }, this) : Array.isArray(t) ? t.forEach(function (e) {
            this.append(e[0], e[1]);
          }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
            this.append(e, t[e]);
          }, this);
        }

        function m(e) {
          if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
          e.bodyUsed = !0;
        }

        function y(r) {
          return new Promise(function (e, t) {
            r.onload = function () {
              e(r.result);
            }, r.onerror = function () {
              t(r.error);
            };
          });
        }

        function v(e) {
          var t = new FileReader(),
              r = y(t);
          return t.readAsArrayBuffer(e), r;
        }

        function g(e) {
          if (e.slice) return e.slice(0);
          var t = new Uint8Array(e.byteLength);
          return t.set(new Uint8Array(e)), t.buffer;
        }

        function b() {
          return this.bodyUsed = !1, this._initBody = function (e) {
            if (this._bodyInit = e) {
              if ("string" == typeof e) this._bodyText = e;else if (o && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;else if (i && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;else if (t && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();else if (n && o && s(e)) this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else {
                if (!n || !ArrayBuffer.prototype.isPrototypeOf(e) && !l(e)) throw new Error("unsupported BodyInit type");
                this._bodyArrayBuffer = g(e);
              }
            } else this._bodyText = "";
            this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
          }, o && (this.blob = function () {
            var e = m(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]));
          }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v);
          }), this.text = function () {
            var e,
                t,
                r,
                i = m(this);
            if (i) return i;
            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader(), r = y(t), t.readAsText(e), r;
            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
              for (var t = new Uint8Array(e), r = new Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);

              return r.join("");
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }, i && (this.formData = function () {
            return this.text().then(x);
          }), this.json = function () {
            return this.text().then(JSON.parse);
          }, this;
        }

        function _(e, t) {
          var r,
              i,
              n = (t = t || {}).body;

          if (e instanceof _) {
            if (e.bodyUsed) throw new TypeError("Already read");
            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new p(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0);
          } else this.url = String(e);

          if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new p(t.headers)), this.method = (r = t.method || this.method || "GET", i = r.toUpperCase(), -1 < u.indexOf(i) ? i : r), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");

          this._initBody(n);
        }

        function x(e) {
          var n = new FormData();
          return e.trim().split("&").forEach(function (e) {
            if (e) {
              var t = e.split("="),
                  r = t.shift().replace(/\+/g, " "),
                  i = t.join("=").replace(/\+/g, " ");
              n.append(decodeURIComponent(r), decodeURIComponent(i));
            }
          }), n;
        }

        function w(e, t) {
          t = t || {}, this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = 200 <= this.status && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new p(t.headers), this.url = t.url || "", this._initBody(e);
        }
      }("undefined" != typeof self ? self : this);
    }, {}],
    16: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var l,
          i = a(e("../core/main")),
          n = a(e("../color/color_conversion"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var u = [{
        h: 0,
        s: 0,
        b: .8275,
        name: "gray"
      }, {
        h: 0,
        s: 0,
        b: .8627,
        name: "gray"
      }, {
        h: 0,
        s: 0,
        b: .7529,
        name: "gray"
      }, {
        h: .0167,
        s: .1176,
        b: 1,
        name: "light pink"
      }],
          h = [{
        h: 0,
        s: 0,
        b: 0,
        name: "black"
      }, {
        h: 0,
        s: 0,
        b: .5,
        name: "gray"
      }, {
        h: 0,
        s: 0,
        b: 1,
        name: "white"
      }, {
        h: 0,
        s: .5,
        b: .5,
        name: "dark maroon"
      }, {
        h: 0,
        s: .5,
        b: 1,
        name: "salmon pink"
      }, {
        h: 0,
        s: 1,
        b: 0,
        name: "black"
      }, {
        h: 0,
        s: 1,
        b: .5,
        name: "dark red"
      }, {
        h: 0,
        s: 1,
        b: 1,
        name: "red"
      }, {
        h: 5,
        s: 0,
        b: 1,
        name: "very light peach"
      }, {
        h: 5,
        s: .5,
        b: .5,
        name: "brown"
      }, {
        h: 5,
        s: .5,
        b: 1,
        name: "peach"
      }, {
        h: 5,
        s: 1,
        b: .5,
        name: "brick red"
      }, {
        h: 5,
        s: 1,
        b: 1,
        name: "crimson"
      }, {
        h: 10,
        s: 0,
        b: 1,
        name: "light peach"
      }, {
        h: 10,
        s: .5,
        b: .5,
        name: "brown"
      }, {
        h: 10,
        s: .5,
        b: 1,
        name: "light orange"
      }, {
        h: 10,
        s: 1,
        b: .5,
        name: "brown"
      }, {
        h: 10,
        s: 1,
        b: 1,
        name: "orange"
      }, {
        h: 15,
        s: 0,
        b: 1,
        name: "very light yellow"
      }, {
        h: 15,
        s: .5,
        b: .5,
        name: "olive green"
      }, {
        h: 15,
        s: .5,
        b: 1,
        name: "light yellow"
      }, {
        h: 15,
        s: 1,
        b: 0,
        name: "dark olive green"
      }, {
        h: 15,
        s: 1,
        b: .5,
        name: "olive green"
      }, {
        h: 15,
        s: 1,
        b: 1,
        name: "yellow"
      }, {
        h: 20,
        s: 0,
        b: 1,
        name: "very light yellow"
      }, {
        h: 20,
        s: .5,
        b: .5,
        name: "olive green"
      }, {
        h: 20,
        s: .5,
        b: 1,
        name: "light yellow green"
      }, {
        h: 20,
        s: 1,
        b: 0,
        name: "dark olive green"
      }, {
        h: 20,
        s: 1,
        b: .5,
        name: "dark yellow green"
      }, {
        h: 20,
        s: 1,
        b: 1,
        name: "yellow green"
      }, {
        h: 25,
        s: .5,
        b: .5,
        name: "dark yellow green"
      }, {
        h: 25,
        s: .5,
        b: 1,
        name: "light green"
      }, {
        h: 25,
        s: 1,
        b: .5,
        name: "dark green"
      }, {
        h: 25,
        s: 1,
        b: 1,
        name: "green"
      }, {
        h: 30,
        s: .5,
        b: 1,
        name: "light green"
      }, {
        h: 30,
        s: 1,
        b: .5,
        name: "dark green"
      }, {
        h: 30,
        s: 1,
        b: 1,
        name: "green"
      }, {
        h: 35,
        s: 0,
        b: .5,
        name: "light green"
      }, {
        h: 35,
        s: 0,
        b: 1,
        name: "very light green"
      }, {
        h: 35,
        s: .5,
        b: .5,
        name: "dark green"
      }, {
        h: 35,
        s: .5,
        b: 1,
        name: "light green"
      }, {
        h: 35,
        s: 1,
        b: 0,
        name: "very dark green"
      }, {
        h: 35,
        s: 1,
        b: .5,
        name: "dark green"
      }, {
        h: 35,
        s: 1,
        b: 1,
        name: "green"
      }, {
        h: 40,
        s: 0,
        b: 1,
        name: "very light green"
      }, {
        h: 40,
        s: .5,
        b: .5,
        name: "dark green"
      }, {
        h: 40,
        s: .5,
        b: 1,
        name: "light green"
      }, {
        h: 40,
        s: 1,
        b: .5,
        name: "dark green"
      }, {
        h: 40,
        s: 1,
        b: 1,
        name: "green"
      }, {
        h: 45,
        s: .5,
        b: 1,
        name: "light turquoise"
      }, {
        h: 45,
        s: 1,
        b: .5,
        name: "dark turquoise"
      }, {
        h: 45,
        s: 1,
        b: 1,
        name: "turquoise"
      }, {
        h: 50,
        s: 0,
        b: 1,
        name: "light sky blue"
      }, {
        h: 50,
        s: .5,
        b: .5,
        name: "dark cyan"
      }, {
        h: 50,
        s: .5,
        b: 1,
        name: "light cyan"
      }, {
        h: 50,
        s: 1,
        b: .5,
        name: "dark cyan"
      }, {
        h: 50,
        s: 1,
        b: 1,
        name: "cyan"
      }, {
        h: 55,
        s: 0,
        b: 1,
        name: "light sky blue"
      }, {
        h: 55,
        s: .5,
        b: 1,
        name: "light sky blue"
      }, {
        h: 55,
        s: 1,
        b: .5,
        name: "dark blue"
      }, {
        h: 55,
        s: 1,
        b: 1,
        name: "sky blue"
      }, {
        h: 60,
        s: 0,
        b: .5,
        name: "gray"
      }, {
        h: 60,
        s: 0,
        b: 1,
        name: "very light blue"
      }, {
        h: 60,
        s: .5,
        b: .5,
        name: "blue"
      }, {
        h: 60,
        s: .5,
        b: 1,
        name: "light blue"
      }, {
        h: 60,
        s: 1,
        b: .5,
        name: "navy blue"
      }, {
        h: 60,
        s: 1,
        b: 1,
        name: "blue"
      }, {
        h: 65,
        s: 0,
        b: 1,
        name: "lavender"
      }, {
        h: 65,
        s: .5,
        b: .5,
        name: "navy blue"
      }, {
        h: 65,
        s: .5,
        b: 1,
        name: "light purple"
      }, {
        h: 65,
        s: 1,
        b: .5,
        name: "dark navy blue"
      }, {
        h: 65,
        s: 1,
        b: 1,
        name: "blue"
      }, {
        h: 70,
        s: 0,
        b: 1,
        name: "lavender"
      }, {
        h: 70,
        s: .5,
        b: .5,
        name: "navy blue"
      }, {
        h: 70,
        s: .5,
        b: 1,
        name: "lavender blue"
      }, {
        h: 70,
        s: 1,
        b: .5,
        name: "dark navy blue"
      }, {
        h: 70,
        s: 1,
        b: 1,
        name: "blue"
      }, {
        h: 75,
        s: .5,
        b: 1,
        name: "lavender"
      }, {
        h: 75,
        s: 1,
        b: .5,
        name: "dark purple"
      }, {
        h: 75,
        s: 1,
        b: 1,
        name: "purple"
      }, {
        h: 80,
        s: .5,
        b: 1,
        name: "pinkish purple"
      }, {
        h: 80,
        s: 1,
        b: .5,
        name: "dark purple"
      }, {
        h: 80,
        s: 1,
        b: 1,
        name: "purple"
      }, {
        h: 85,
        s: 0,
        b: 1,
        name: "light pink"
      }, {
        h: 85,
        s: .5,
        b: .5,
        name: "purple"
      }, {
        h: 85,
        s: .5,
        b: 1,
        name: "light fuchsia"
      }, {
        h: 85,
        s: 1,
        b: .5,
        name: "dark fuchsia"
      }, {
        h: 85,
        s: 1,
        b: 1,
        name: "fuchsia"
      }, {
        h: 90,
        s: .5,
        b: .5,
        name: "dark fuchsia"
      }, {
        h: 90,
        s: .5,
        b: 1,
        name: "hot pink"
      }, {
        h: 90,
        s: 1,
        b: .5,
        name: "dark fuchsia"
      }, {
        h: 90,
        s: 1,
        b: 1,
        name: "fuchsia"
      }, {
        h: 95,
        s: 0,
        b: 1,
        name: "pink"
      }, {
        h: 95,
        s: .5,
        b: 1,
        name: "light pink"
      }, {
        h: 95,
        s: 1,
        b: .5,
        name: "dark magenta"
      }, {
        h: 95,
        s: 1,
        b: 1,
        name: "magenta"
      }];

      i.default.prototype._rgbColorName = function (e) {
        var t = n.default._rgbaToHSBA(e);

        return function (e) {
          var t;

          if (0 !== e[0]) {
            e[0] = Math.round(100 * e[0]);
            var r = e[0].toString().split(""),
                i = r.length - 1;
            r[i] = parseInt(r[i]), r[i] < 2.5 ? r[i] = 0 : 2.5 <= r[i] && r[i] < 7.5 && (r[i] = 5), 2 === r.length ? (r[0] = parseInt(r[0]), 7.5 <= r[i] && (r[i] = 0, r[0] = r[0] + 1), e[0] = 10 * r[0] + r[1]) : 7.5 <= r[i] ? e[0] = 10 : e[0] = r[i];
          }

          e[2] = e[2] / 255;

          for (var n = e.length - 1; 1 <= n; n--) e[n] <= .25 ? e[n] = 0 : .25 < e[n] && e[n] < .75 ? e[n] = .5 : e[n] = 1;

          if (0 === e[0] && 0 === e[1] && 1 === e[2]) {
            for (var a = 2; 0 <= a; a--) l[a] = Math.round(1e4 * l[a]) / 1e4;

            for (var o = 0; o < u.length; o++) {
              if (u[o].h === l[0] && u[o].s === l[1] && u[o].b === l[2]) {
                t = u[o].name;
                break;
              }

              t = "white";
            }
          } else for (var s = 0; s < h.length; s++) if (h[s].h === e[0] && h[s].s === e[1] && h[s].b === e[2]) {
            t = h[s].name;
            break;
          }

          return t;
        }([(l = t)[0], t[1], t[2]]);
      };

      var o = i.default;
      r.default = o;
    }, {
      "../color/color_conversion": 22,
      "../core/main": 36
    }],
    17: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          o = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      var l = "_Description",
          u = "_fallbackDesc",
          h = "_fallbackTable",
          c = "_Label",
          f = "_labelDesc",
          d = "_labelTable";

      function s(e) {
        if ("label" === e || "fallback" === e) throw new Error("description should not be LABEL or FALLBACK");
        return e.endsWith(".") || e.endsWith(";") || e.endsWith(",") || e.endsWith("?") || e.endsWith("!") || (e += "."), e;
      }

      o.default.prototype.describe = function (e, t) {
        if (o.default._validateParameters("describe", arguments), "string" == typeof e) {
          var r = this.canvas.id;
          e = s(e), this.dummyDOM || (this.dummyDOM = document.getElementById(r).parentNode), this.descriptions || (this.descriptions = {}), this.descriptions.fallback ? this.descriptions.fallback.innerHTML !== e && (this.descriptions.fallback.innerHTML = e) : this._describeHTML("fallback", e), t === this.LABEL && (this.descriptions.label ? this.descriptions.label.innerHTML !== e && (this.descriptions.label.innerHTML = e) : this._describeHTML("label", e));
        }
      }, o.default.prototype.describeElement = function (e, t, r) {
        if (o.default._validateParameters("describeElement", arguments), "string" == typeof t && "string" == typeof e) {
          var i = this.canvas.id;
          t = s(t);

          var n = function (e) {
            if ("label" === e || "fallback" === e) throw new Error("element name should not be LABEL or FALLBACK");
            e.endsWith(".") || e.endsWith(";") || e.endsWith(",") ? e = e.replace(/.$/, ":") : e.endsWith(":") || (e += ":");
            return e;
          }(e);

          e = e.replace(/[^a-zA-Z0-9 ]/g, "");
          var a = '<th scope="row">'.concat(n, "</th><td>").concat(t, "</td>");
          this.dummyDOM || (this.dummyDOM = document.getElementById(i).parentNode), this.descriptions ? this.descriptions.fallbackElements || (this.descriptions.fallbackElements = {}) : this.descriptions = {
            fallbackElements: {}
          }, this.descriptions.fallbackElements[e] ? this.descriptions.fallbackElements[e].innerHTML !== a && (this.descriptions.fallbackElements[e].innerHTML = a) : this._describeElementHTML("fallback", e, a), r === this.LABEL && (this.descriptions.labelElements || (this.descriptions.labelElements = {}), this.descriptions.labelElements[e] ? this.descriptions.labelElements[e].innerHTML !== a && (this.descriptions.labelElements[e].innerHTML = a) : this._describeElementHTML("label", e, a));
        }
      }, o.default.prototype._describeHTML = function (e, t) {
        var r = this.canvas.id;

        if ("fallback" === e) {
          if (this.dummyDOM.querySelector("#".concat(r + l))) this.dummyDOM.querySelector("#" + r + h).insertAdjacentHTML("beforebegin", '<p id="'.concat(r + u, '"></p>'));else {
            var i = '<div id="'.concat(r).concat(l, '" role="region" aria-label="Canvas Description"><p id="').concat(r).concat(u, '"></p></div>');
            this.dummyDOM.querySelector("#".concat(r, "accessibleOutput")) ? this.dummyDOM.querySelector("#".concat(r, "accessibleOutput")).insertAdjacentHTML("beforebegin", i) : this.dummyDOM.querySelector("#".concat(r)).innerHTML = i;
          }
          return this.descriptions.fallback = this.dummyDOM.querySelector("#".concat(r).concat(u)), void (this.descriptions.fallback.innerHTML = t);
        }

        if ("label" === e) {
          if (this.dummyDOM.querySelector("#".concat(r + c))) this.dummyDOM.querySelector("#".concat(r + d)) && this.dummyDOM.querySelector("#".concat(r + d)).insertAdjacentHTML("beforebegin", '<p id="'.concat(r).concat(f, '"></p>'));else {
            var n = '<div id="'.concat(r).concat(c, '" class="p5Label"><p id="').concat(r).concat(f, '"></p></div>');
            this.dummyDOM.querySelector("#".concat(r, "accessibleOutputLabel")) ? this.dummyDOM.querySelector("#".concat(r, "accessibleOutputLabel")).insertAdjacentHTML("beforebegin", n) : this.dummyDOM.querySelector("#" + r).insertAdjacentHTML("afterend", n);
          }
          return this.descriptions.label = this.dummyDOM.querySelector("#" + r + f), void (this.descriptions.label.innerHTML = t);
        }
      }, o.default.prototype._describeElementHTML = function (e, t, r) {
        var i = this.canvas.id;

        if ("fallback" === e) {
          if (this.dummyDOM.querySelector("#".concat(i + l))) this.dummyDOM.querySelector("#" + i + h) || this.dummyDOM.querySelector("#" + i + u).insertAdjacentHTML("afterend", '<table id="'.concat(i).concat(h, '"><caption>Canvas elements and their descriptions</caption></table>'));else {
            var n = '<div id="'.concat(i).concat(l, '" role="region" aria-label="Canvas Description"><table id="').concat(i).concat(h, '"><caption>Canvas elements and their descriptions</caption></table></div>');
            this.dummyDOM.querySelector("#".concat(i, "accessibleOutput")) ? this.dummyDOM.querySelector("#".concat(i, "accessibleOutput")).insertAdjacentHTML("beforebegin", n) : this.dummyDOM.querySelector("#" + i).innerHTML = n;
          }
          var a = document.createElement("tr");
          return a.id = i + "_fte_" + t, this.dummyDOM.querySelector("#" + i + h).appendChild(a), this.descriptions.fallbackElements[t] = this.dummyDOM.querySelector("#".concat(i).concat("_fte_").concat(t)), void (this.descriptions.fallbackElements[t].innerHTML = r);
        }

        if ("label" === e) {
          if (this.dummyDOM.querySelector("#".concat(i + c))) this.dummyDOM.querySelector("#".concat(i + d)) || this.dummyDOM.querySelector("#" + i + f).insertAdjacentHTML("afterend", '<table id="'.concat(i + d, '"></table>'));else {
            var o = '<div id="'.concat(i).concat(c, '" class="p5Label"><table id="').concat(i).concat(d, '"></table></div>');
            this.dummyDOM.querySelector("#".concat(i, "accessibleOutputLabel")) ? this.dummyDOM.querySelector("#".concat(i, "accessibleOutputLabel")).insertAdjacentHTML("beforebegin", o) : this.dummyDOM.querySelector("#" + i).insertAdjacentHTML("afterend", o);
          }
          var s = document.createElement("tr");
          s.id = i + "_lte_" + t, this.dummyDOM.querySelector("#" + i + d).appendChild(s), this.descriptions.labelElements[t] = this.dummyDOM.querySelector("#".concat(i).concat("_lte_").concat(t)), this.descriptions.labelElements[t].innerHTML = r;
        }
      };
      var n = o.default;
      r.default = n;
    }, {
      "../core/main": 36
    }],
    18: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      n.default.prototype._updateGridOutput = function (e) {
        if (this.dummyDOM.querySelector("#".concat(e, "_summary"))) {
          var t = this._accessibleOutputs[e],
              r = function (e, t) {
            var r = "",
                i = "",
                n = 0;

            for (var a in t) {
              var o = 0;

              for (var s in t[a]) {
                var l = '<li id="'.concat(e, "shape").concat(n, '">').concat(t[a][s].color, " ").concat(a, ",");
                "line" === a ? l += " location = ".concat(t[a][s].pos, ", length = ").concat(t[a][s].length, " pixels") : (l += " location = ".concat(t[a][s].pos), "point" !== a && (l += ", area = ".concat(t[a][s].area, " %")), l += "</li>"), r += l, o++, n++;
              }

              i = 1 < o ? "".concat(i, " ").concat(o, " ").concat(a, "s") : "".concat(i, " ").concat(o, " ").concat(a);
            }

            return {
              numShapes: [n, i],
              details: r
            };
          }(e, this.ingredients.shapes),
              i = function (e, t, r, i) {
            var n = "".concat(t, " canvas, ").concat(r, " by ").concat(i, " pixels, contains ").concat(e[0]);
            n = 1 === e[0] ? "".concat(n, " shape: ").concat(e[1]) : "".concat(n, " shapes: ").concat(e[1]);
            return n;
          }(r.numShapes, this.ingredients.colors.background, this.width, this.height),
              n = function (e, t) {
            var r = 0,
                i = "",
                n = Array.apply(null, Array(10)).map(function () {});

            for (var a in n) n[a] = Array.apply(null, Array(10)).map(function () {});

            for (var o in t) for (var s in t[o]) {
              var l = void 0;
              l = "line" !== o ? '<a href="#'.concat(e, "shape").concat(r, '">').concat(t[o][s].color, " ").concat(o, "</a>") : '<a href="#'.concat(e, "shape").concat(r, '">').concat(t[o][s].color, " ").concat(o, " midpoint</a>"), n[t[o][s].loc.locY][t[o][s].loc.locX] ? n[t[o][s].loc.locY][t[o][s].loc.locX] = n[t[o][s].loc.locY][t[o][s].loc.locX] + "  " + l : n[t[o][s].loc.locY][t[o][s].loc.locX] = l, r++;
            }

            for (var u in n) {
              var h = "<tr>";

              for (var c in n[u]) h += "<td>", void 0 !== n[u][c] && (h += n[u][c]), h += "</td>";

              i = i + h + "</tr>";
            }

            return i;
          }(e, this.ingredients.shapes);

          i !== t.summary.innerHTML && (t.summary.innerHTML = i), n !== t.map.innerHTML && (t.map.innerHTML = n), r.details !== t.shapeDetails.innerHTML && (t.shapeDetails.innerHTML = r.details), this._accessibleOutputs[e] = t;
        }
      };

      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    19: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function l(e, t, r) {
        return e[0] < .4 * t ? e[1] < .4 * r ? "top left" : e[1] > .6 * r ? "bottom left" : "mid left" : e[0] > .6 * t ? e[1] < .4 * r ? "top right" : e[1] > .6 * r ? "bottom right" : "mid right" : e[1] < .4 * r ? "top middle" : e[1] > .6 * r ? "bottom middle" : "middle";
      }

      function u(e, t, r) {
        var i = Math.floor(e[0] / t * 10),
            n = Math.floor(e[1] / r * 10);
        return 10 === i && --i, 10 === n && --n, {
          locX: i,
          locY: n
        };
      }

      n.default.prototype.textOutput = function (e) {
        n.default._validateParameters("textOutput", arguments), this._accessibleOutputs.text || (this._accessibleOutputs.text = !0, this._createOutput("textOutput", "Fallback"), e === this.LABEL && (this._accessibleOutputs.textLabel = !0, this._createOutput("textOutput", "Label")));
      }, n.default.prototype.gridOutput = function (e) {
        n.default._validateParameters("gridOutput", arguments), this._accessibleOutputs.grid || (this._accessibleOutputs.grid = !0, this._createOutput("gridOutput", "Fallback"), e === this.LABEL && (this._accessibleOutputs.gridLabel = !0, this._createOutput("gridOutput", "Label")));
      }, n.default.prototype._addAccsOutput = function () {
        return this._accessibleOutputs || (this._accessibleOutputs = {
          text: !1,
          grid: !1,
          textLabel: !1,
          gridLabel: !1
        }), this._accessibleOutputs.grid || this._accessibleOutputs.text;
      }, n.default.prototype._createOutput = function (e, t) {
        var r,
            i,
            n,
            a = this.canvas.id;
        this.ingredients || (this.ingredients = {
          shapes: {},
          colors: {
            background: "white",
            fill: "white",
            stroke: "black"
          },
          pShapes: ""
        }), this.dummyDOM || (this.dummyDOM = document.getElementById(a).parentNode);
        var o = "";
        "Fallback" === t ? (r = a + e, i = a + "accessibleOutput", this.dummyDOM.querySelector("#".concat(i)) || (this.dummyDOM.querySelector("#".concat(a, "_Description")) ? this.dummyDOM.querySelector("#".concat(a, "_Description")).insertAdjacentHTML("afterend", '<div id="'.concat(i, '" role="region" aria-label="Canvas Outputs"></div>')) : this.dummyDOM.querySelector("#".concat(a)).innerHTML = '<div id="'.concat(i, '" role="region" aria-label="Canvas Outputs"></div>'))) : "Label" === t && (r = a + e + (o = t), i = a + "accessibleOutput" + t, this.dummyDOM.querySelector("#".concat(i)) || (this.dummyDOM.querySelector("#".concat(a, "_Label")) ? this.dummyDOM.querySelector("#".concat(a, "_Label")).insertAdjacentHTML("afterend", '<div id="'.concat(i, '"></div>')) : this.dummyDOM.querySelector("#".concat(a)).insertAdjacentHTML("afterend", '<div id="'.concat(i, '"></div>')))), this._accessibleOutputs[r] = {}, "textOutput" === e ? (o = "#".concat(a, "gridOutput").concat(o), n = '<div id="'.concat(r, '">Text Output<div id="').concat(r, 'Summary" aria-label="text output summary"><p id="').concat(r, '_summary"></p><ul id="').concat(r, '_list"></ul></div><table id="').concat(r, '_shapeDetails" summary="text output shape details"></table></div>'), this.dummyDOM.querySelector(o) ? this.dummyDOM.querySelector(o).insertAdjacentHTML("beforebegin", n) : this.dummyDOM.querySelector("#".concat(i)).innerHTML = n, this._accessibleOutputs[r].list = this.dummyDOM.querySelector("#".concat(r, "_list"))) : "gridOutput" === e && (o = "#".concat(a, "textOutput").concat(o), n = '<div id="'.concat(r, '">Grid Output<p id="').concat(r, '_summary" aria-label="grid output summary"><table id="').concat(r, '_map" summary="grid output content"></table><ul id="').concat(r, '_shapeDetails" aria-label="grid output shape details"></ul></div>'), this.dummyDOM.querySelector(o) ? this.dummyDOM.querySelector(o).insertAdjacentHTML("afterend", n) : this.dummyDOM.querySelector("#".concat(i)).innerHTML = n, this._accessibleOutputs[r].map = this.dummyDOM.querySelector("#".concat(r, "_map"))), this._accessibleOutputs[r].shapeDetails = this.dummyDOM.querySelector("#".concat(r, "_shapeDetails")), this._accessibleOutputs[r].summary = this.dummyDOM.querySelector("#".concat(r, "_summary"));
      }, n.default.prototype._updateAccsOutput = function () {
        var e = this.canvas.id;
        JSON.stringify(this.ingredients.shapes) !== this.ingredients.pShapes && (this.ingredients.pShapes = JSON.stringify(this.ingredients.shapes), this._accessibleOutputs.text && this._updateTextOutput(e + "textOutput"), this._accessibleOutputs.grid && this._updateGridOutput(e + "gridOutput"), this._accessibleOutputs.textLabel && this._updateTextOutput(e + "textOutputLabel"), this._accessibleOutputs.gridLabel && this._updateGridOutput(e + "gridOutputLabel"));
      }, n.default.prototype._accsBackground = function (e) {
        this.ingredients.pShapes = JSON.stringify(this.ingredients.shapes), this.ingredients.shapes = {}, this.ingredients.colors.backgroundRGBA !== e && (this.ingredients.colors.backgroundRGBA = e, this.ingredients.colors.background = this._rgbColorName(e));
      }, n.default.prototype._accsCanvasColors = function (e, t) {
        "fill" === e ? this.ingredients.colors.fillRGBA !== t && (this.ingredients.colors.fillRGBA = t, this.ingredients.colors.fill = this._rgbColorName(t)) : "stroke" === e && this.ingredients.colors.strokeRGBA !== t && (this.ingredients.colors.strokeRGBA = t, this.ingredients.colors.stroke = this._rgbColorName(t));
      }, n.default.prototype._accsOutput = function (e, t) {
        "ellipse" === e && t[2] === t[3] ? e = "circle" : "rectangle" === e && t[2] === t[3] && (e = "square");

        var r = {},
            i = !0,
            n = function (e, t) {
          var r, i;
          i = "rectangle" === e || "ellipse" === e || "arc" === e || "circle" === e || "square" === e ? (r = Math.round(t[0] + t[2] / 2), Math.round(t[1] + t[3] / 2)) : "triangle" === e ? (r = (t[0] + t[2] + t[4]) / 3, (t[1] + t[3] + t[5]) / 3) : "quadrilateral" === e ? (r = (t[0] + t[2] + t[4] + t[6]) / 4, (t[1] + t[3] + t[5] + t[7]) / 4) : "line" === e ? (r = (t[0] + t[2]) / 2, (t[1] + t[3]) / 2) : (r = t[0], t[1]);
          return [r, i];
        }(e, t);

        if ("line" === e) {
          r.color = this.ingredients.colors.stroke, r.length = Math.round(this.dist(t[0], t[1], t[2], t[3]));
          var a = l([t[0], [1]], this.width, this.height),
              o = l([t[2], [3]], this.width, this.height);
          r.loc = u(n, this.width, this.height), r.pos = a === o ? "at ".concat(a) : "from ".concat(a, " to ").concat(o);
        } else "point" === e ? r.color = this.ingredients.colors.stroke : (r.color = this.ingredients.colors.fill, r.area = function (e, t, r, i) {
          var n = 0;

          if ("arc" === e) {
            var a = ((t[5] - t[4]) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);

            if (n = a * t[2] * t[3] / 8, "open" === t[6] || "chord" === t[6]) {
              var o = t[0],
                  s = t[1],
                  l = t[0] + t[2] / 2 * Math.cos(t[4]).toFixed(2),
                  u = t[1] + t[3] / 2 * Math.sin(t[4]).toFixed(2),
                  h = t[0] + t[2] / 2 * Math.cos(t[5]).toFixed(2),
                  c = t[1] + t[3] / 2 * Math.sin(t[5]).toFixed(2),
                  f = Math.abs(o * (u - c) + l * (c - s) + h * (s - u)) / 2;
              a > Math.PI ? n += f : n -= f;
            }
          } else "ellipse" === e || "circle" === e ? n = 3.14 * t[2] / 2 * t[3] / 2 : "line" === e ? n = 0 : "point" === e ? n = 0 : "quadrilateral" === e ? n = Math.abs((t[6] + t[0]) * (t[7] - t[1]) + (t[0] + t[2]) * (t[1] - t[3]) + (t[2] + t[4]) * (t[3] - t[5]) + (t[4] + t[6]) * (t[5] - t[7])) / 2 : "rectangle" === e || "square" === e ? n = t[2] * t[3] : "triangle" === e && (n = Math.abs(t[0] * (t[3] - t[5]) + t[2] * (t[5] - t[1]) + t[4] * (t[1] - t[3])) / 2);

          return Math.round(100 * n / (r * i));
        }(e, t, this.width, this.height)), r.pos = l(n, this.width, this.height), r.loc = u(n, this.width, this.height);

        if (this.ingredients.shapes[e]) {
          if (this.ingredients.shapes[e] !== [r]) {
            for (var s in this.ingredients.shapes[e]) JSON.stringify(this.ingredients.shapes[e][s]) === JSON.stringify(r) && (i = !1);

            !0 === i && this.ingredients.shapes[e].push(r);
          }
        } else this.ingredients.shapes[e] = [r];
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    20: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      n.default.prototype._updateTextOutput = function (e) {
        if (this.dummyDOM.querySelector("#".concat(e, "_summary"))) {
          var t = this._accessibleOutputs[e],
              r = function (e, t) {
            var r = "",
                i = 0;

            for (var n in t) for (var a in t[n]) {
              var o = '<li><a href="#'.concat(e, "shape").concat(i, '">').concat(t[n][a].color, " ").concat(n, "</a>");
              "line" === n ? o += ", ".concat(t[n][a].pos, ", ").concat(t[n][a].length, " pixels long.</li>") : (o += ", at ".concat(t[n][a].pos), "point" !== n && (o += ", covering ".concat(t[n][a].area, "% of the canvas")), o += ".</li>"), r += o, i++;
            }

            return {
              numShapes: i,
              listShapes: r
            };
          }(e, this.ingredients.shapes),
              i = function (e, t, r, i) {
            var n = "Your output is a, ".concat(r, " by ").concat(i, " pixels, ").concat(t, " canvas containing the following");
            n = 1 === e ? "".concat(n, " shape:") : "".concat(n, " ").concat(e, " shapes:");
            return n;
          }(r.numShapes, this.ingredients.colors.background, this.width, this.height),
              n = function (e, t) {
            var r = "",
                i = 0;

            for (var n in t) for (var a in t[n]) {
              var o = '<tr id="'.concat(e, "shape").concat(i, '"><th>').concat(t[n][a].color, " ").concat(n, "</th>");
              "line" === n ? o += "<td>location = ".concat(t[n][a].pos, "</td><td>length = ").concat(t[n][a].length, " pixels</td></tr>") : (o += "<td>location = ".concat(t[n][a].pos, "</td>"), "point" !== n && (o += "<td> area = ".concat(t[n][a].area, "%</td>")), o += "</tr>"), r += o, i++;
            }

            return r;
          }(e, this.ingredients.shapes);

          i !== t.summary.innerHTML && (t.summary.innerHTML = i), r.listShapes !== t.list.innerHTML && (t.list.innerHTML = r.listShapes), n !== t.shapeDetails.innerHTML && (t.shapeDetails.innerHTML = n), this._accessibleOutputs[e] = t;
        }
      };

      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    21: [function (e, t, r) {
      "use strict";

      var i,
          n = (i = e("./core/main")) && i.__esModule ? i : {
        default: i
      };
      e("./core/constants"), e("./core/environment"), e("./core/friendly_errors/stacktrace"), e("./core/friendly_errors/validate_params"), e("./core/friendly_errors/file_errors"), e("./core/friendly_errors/fes_core"), e("./core/helpers"), e("./core/legacy"), e("./core/preload"), e("./core/p5.Element"), e("./core/p5.Graphics"), e("./core/p5.Renderer"), e("./core/p5.Renderer2D"), e("./core/rendering"), e("./core/shim"), e("./core/structure"), e("./core/transform"), e("./core/shape/2d_primitives"), e("./core/shape/attributes"), e("./core/shape/curves"), e("./core/shape/vertex"), e("./accessibility/outputs"), e("./accessibility/textOutput"), e("./accessibility/gridOutput"), e("./accessibility/color_namer"), e("./color/color_conversion"), e("./color/creating_reading"), e("./color/p5.Color"), e("./color/setting"), e("./data/p5.TypedDict"), e("./data/local_storage.js"), e("./dom/dom"), e("./accessibility/describe"), e("./events/acceleration"), e("./events/keyboard"), e("./events/mouse"), e("./events/touch"), e("./image/filters"), e("./image/image"), e("./image/loading_displaying"), e("./image/p5.Image"), e("./image/pixels"), e("./io/files"), e("./io/p5.Table"), e("./io/p5.TableRow"), e("./io/p5.XML"), e("./math/calculation"), e("./math/math"), e("./math/noise"), e("./math/p5.Vector"), e("./math/random"), e("./math/trigonometry"), e("./typography/attributes"), e("./typography/loading_displaying"), e("./typography/p5.Font"), e("./utilities/array_functions"), e("./utilities/conversion"), e("./utilities/string_functions"), e("./utilities/time_date"), e("./webgl/3d_primitives"), e("./webgl/interaction"), e("./webgl/light"), e("./webgl/loading"), e("./webgl/material"), e("./webgl/p5.Camera"), e("./webgl/p5.Geometry"), e("./webgl/p5.Matrix"), e("./webgl/p5.RendererGL.Immediate"), e("./webgl/p5.RendererGL"), e("./webgl/p5.RendererGL.Retained"), e("./webgl/p5.Shader"), e("./webgl/p5.RenderBuffer"), e("./webgl/p5.Texture"), e("./webgl/text"), e("./core/init"), t.exports = n.default;
    }, {
      "./accessibility/color_namer": 16,
      "./accessibility/describe": 17,
      "./accessibility/gridOutput": 18,
      "./accessibility/outputs": 19,
      "./accessibility/textOutput": 20,
      "./color/color_conversion": 22,
      "./color/creating_reading": 23,
      "./color/p5.Color": 24,
      "./color/setting": 25,
      "./core/constants": 26,
      "./core/environment": 27,
      "./core/friendly_errors/fes_core": 28,
      "./core/friendly_errors/file_errors": 29,
      "./core/friendly_errors/stacktrace": 30,
      "./core/friendly_errors/validate_params": 31,
      "./core/helpers": 32,
      "./core/init": 33,
      "./core/legacy": 35,
      "./core/main": 36,
      "./core/p5.Element": 37,
      "./core/p5.Graphics": 38,
      "./core/p5.Renderer": 39,
      "./core/p5.Renderer2D": 40,
      "./core/preload": 41,
      "./core/rendering": 42,
      "./core/shape/2d_primitives": 43,
      "./core/shape/attributes": 44,
      "./core/shape/curves": 45,
      "./core/shape/vertex": 46,
      "./core/shim": 47,
      "./core/structure": 48,
      "./core/transform": 49,
      "./data/local_storage.js": 50,
      "./data/p5.TypedDict": 51,
      "./dom/dom": 52,
      "./events/acceleration": 53,
      "./events/keyboard": 54,
      "./events/mouse": 55,
      "./events/touch": 56,
      "./image/filters": 57,
      "./image/image": 58,
      "./image/loading_displaying": 59,
      "./image/p5.Image": 60,
      "./image/pixels": 61,
      "./io/files": 62,
      "./io/p5.Table": 63,
      "./io/p5.TableRow": 64,
      "./io/p5.XML": 65,
      "./math/calculation": 66,
      "./math/math": 67,
      "./math/noise": 68,
      "./math/p5.Vector": 69,
      "./math/random": 70,
      "./math/trigonometry": 71,
      "./typography/attributes": 72,
      "./typography/loading_displaying": 73,
      "./typography/p5.Font": 74,
      "./utilities/array_functions": 75,
      "./utilities/conversion": 76,
      "./utilities/string_functions": 77,
      "./utilities/time_date": 78,
      "./webgl/3d_primitives": 79,
      "./webgl/interaction": 80,
      "./webgl/light": 81,
      "./webgl/loading": 82,
      "./webgl/material": 83,
      "./webgl/p5.Camera": 84,
      "./webgl/p5.Geometry": 85,
      "./webgl/p5.Matrix": 86,
      "./webgl/p5.RenderBuffer": 87,
      "./webgl/p5.RendererGL": 90,
      "./webgl/p5.RendererGL.Immediate": 88,
      "./webgl/p5.RendererGL.Retained": 89,
      "./webgl/p5.Shader": 91,
      "./webgl/p5.Texture": 92,
      "./webgl/text": 93
    }],
    22: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.ColorConversion = {}, n.default.ColorConversion._hsbaToHSLA = function (e) {
        var t = e[0],
            r = e[1],
            i = e[2],
            n = (2 - r) * i / 2;
        return 0 != n && (1 == n ? r = 0 : n < .5 ? r /= 2 - r : r = r * i / (2 - 2 * n)), [t, r, n, e[3]];
      }, n.default.ColorConversion._hsbaToRGBA = function (e) {
        var t = 6 * e[0],
            r = e[1],
            i = e[2],
            n = [];
        if (0 === r) n = [i, i, i, e[3]];else {
          var a,
              o,
              s,
              l = Math.floor(t),
              u = i * (1 - r),
              h = i * (1 - r * (t - l)),
              c = i * (1 - r * (1 + l - t));
          s = 1 === l ? (a = h, o = i, u) : 2 === l ? (a = u, o = i, c) : 3 === l ? (a = u, o = h, i) : 4 === l ? (a = c, o = u, i) : 5 === l ? (a = i, o = u, h) : (a = i, o = c, u), n = [a, o, s, e[3]];
        }
        return n;
      }, n.default.ColorConversion._hslaToHSBA = function (e) {
        var t,
            r = e[0],
            i = e[1],
            n = e[2];
        return [r, i = 2 * ((t = n < .5 ? (1 + i) * n : n + i - n * i) - n) / t, t, e[3]];
      }, n.default.ColorConversion._hslaToRGBA = function (e) {
        var t = 6 * e[0],
            r = e[1],
            i = e[2],
            n = [];
        if (0 === r) n = [i, i, i, e[3]];else {
          var a,
              o = 2 * i - (a = i < .5 ? (1 + r) * i : i + r - i * r),
              s = function (e, t, r) {
            return e < 0 ? e += 6 : 6 <= e && (e -= 6), e < 1 ? t + (r - t) * e : e < 3 ? r : e < 4 ? t + (r - t) * (4 - e) : t;
          };

          n = [s(2 + t, o, a), s(t, o, a), s(t - 2, o, a), e[3]];
        }
        return n;
      }, n.default.ColorConversion._rgbaToHSBA = function (e) {
        var t,
            r,
            i = e[0],
            n = e[1],
            a = e[2],
            o = Math.max(i, n, a),
            s = o - Math.min(i, n, a);
        return 0 == s ? r = t = 0 : (r = s / o, i === o ? t = (n - a) / s : n === o ? t = 2 + (a - i) / s : a === o && (t = 4 + (i - n) / s), t < 0 ? t += 6 : 6 <= t && (t -= 6)), [t / 6, r, o, e[3]];
      }, n.default.ColorConversion._rgbaToHSLA = function (e) {
        var t,
            r,
            i = e[0],
            n = e[1],
            a = e[2],
            o = Math.max(i, n, a),
            s = Math.min(i, n, a),
            l = o + s,
            u = o - s;
        return 0 == u ? r = t = 0 : (r = l < 1 ? u / l : u / (2 - l), i === o ? t = (n - a) / u : n === o ? t = 2 + (a - i) / u : a === o && (t = 4 + (i - n) / u), t < 0 ? t += 6 : 6 <= t && (t -= 6)), [t / 6, r, l / 2, e[3]];
      };
      var a = n.default.ColorConversion;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    23: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          c = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          f = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      e("./p5.Color"), e("../core/friendly_errors/validate_params"), e("../core/friendly_errors/file_errors"), e("../core/friendly_errors/fes_core"), c.default.prototype.alpha = function (e) {
        return c.default._validateParameters("alpha", arguments), this.color(e)._getAlpha();
      }, c.default.prototype.blue = function (e) {
        return c.default._validateParameters("blue", arguments), this.color(e)._getBlue();
      }, c.default.prototype.brightness = function (e) {
        return c.default._validateParameters("brightness", arguments), this.color(e)._getBrightness();
      }, c.default.prototype.color = function () {
        if (c.default._validateParameters("color", arguments), arguments[0] instanceof c.default.Color) return arguments[0];
        var e = arguments[0] instanceof Array ? arguments[0] : arguments;
        return new c.default.Color(this, e);
      }, c.default.prototype.green = function (e) {
        return c.default._validateParameters("green", arguments), this.color(e)._getGreen();
      }, c.default.prototype.hue = function (e) {
        return c.default._validateParameters("hue", arguments), this.color(e)._getHue();
      }, c.default.prototype.lerpColor = function (e, t, r) {
        c.default._validateParameters("lerpColor", arguments);

        var i,
            n,
            a,
            o,
            s,
            l,
            u = this._colorMode,
            h = this._colorMaxes;
        if (u === f.RGB) s = e.levels.map(function (e) {
          return e / 255;
        }), l = t.levels.map(function (e) {
          return e / 255;
        });else if (u === f.HSB) e._getBrightness(), t._getBrightness(), s = e.hsba, l = t.hsba;else {
          if (u !== f.HSL) throw new Error("".concat(u, "cannot be used for interpolation."));
          e._getLightness(), t._getLightness(), s = e.hsla, l = t.hsla;
        }
        return r = Math.max(Math.min(r, 1), 0), void 0 === this.lerp && (this.lerp = function (e, t, r) {
          return r * (t - e) + e;
        }), i = this.lerp(s[0], l[0], r), n = this.lerp(s[1], l[1], r), a = this.lerp(s[2], l[2], r), o = this.lerp(s[3], l[3], r), i *= h[u][0], n *= h[u][1], a *= h[u][2], o *= h[u][3], this.color(i, n, a, o);
      }, c.default.prototype.lightness = function (e) {
        return c.default._validateParameters("lightness", arguments), this.color(e)._getLightness();
      }, c.default.prototype.red = function (e) {
        return c.default._validateParameters("red", arguments), this.color(e)._getRed();
      }, c.default.prototype.saturation = function (e) {
        return c.default._validateParameters("saturation", arguments), this.color(e)._getSaturation();
      };
      var n = c.default;
      r.default = n;
    }, {
      "../core/constants": 26,
      "../core/friendly_errors/fes_core": 28,
      "../core/friendly_errors/file_errors": 29,
      "../core/friendly_errors/validate_params": 31,
      "../core/main": 36,
      "./p5.Color": 24
    }],
    24: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var c = i(e("../core/main")),
          f = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          d = i(e("./color_conversion"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      c.default.Color = function (e, t) {
        if (this._storeModeAndMaxes(e._colorMode, e._colorMaxes), this.mode !== f.RGB && this.mode !== f.HSL && this.mode !== f.HSB) throw new Error("".concat(this.mode, " is an invalid colorMode."));
        return this._array = c.default.Color._parseInputs.apply(this, t), this._calculateLevels(), this;
      }, c.default.Color.prototype.toString = function (e) {
        var t = this.levels,
            r = this._array,
            i = r[3];

        switch (e) {
          case "#rrggbb":
            return "#".concat(t[0] < 16 ? "0".concat(t[0].toString(16)) : t[0].toString(16), t[1] < 16 ? "0".concat(t[1].toString(16)) : t[1].toString(16), t[2] < 16 ? "0".concat(t[2].toString(16)) : t[2].toString(16));

          case "#rrggbbaa":
            return "#".concat(t[0] < 16 ? "0".concat(t[0].toString(16)) : t[0].toString(16), t[1] < 16 ? "0".concat(t[1].toString(16)) : t[1].toString(16), t[2] < 16 ? "0".concat(t[2].toString(16)) : t[2].toString(16), t[3] < 16 ? "0".concat(t[3].toString(16)) : t[3].toString(16));

          case "#rgb":
            return "#".concat(Math.round(15 * r[0]).toString(16), Math.round(15 * r[1]).toString(16), Math.round(15 * r[2]).toString(16));

          case "#rgba":
            return "#".concat(Math.round(15 * r[0]).toString(16), Math.round(15 * r[1]).toString(16), Math.round(15 * r[2]).toString(16), Math.round(15 * r[3]).toString(16));

          case "rgb":
            return "rgb(".concat(t[0], ", ", t[1], ", ", t[2], ")");

          case "rgb%":
            return "rgb(".concat((100 * r[0]).toPrecision(3), "%, ", (100 * r[1]).toPrecision(3), "%, ", (100 * r[2]).toPrecision(3), "%)");

          case "rgba%":
            return "rgba(".concat((100 * r[0]).toPrecision(3), "%, ", (100 * r[1]).toPrecision(3), "%, ", (100 * r[2]).toPrecision(3), "%, ", (100 * r[3]).toPrecision(3), "%)");

          case "hsb":
          case "hsv":
            return this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), "hsb(".concat(this.hsba[0] * this.maxes[f.HSB][0], ", ", this.hsba[1] * this.maxes[f.HSB][1], ", ", this.hsba[2] * this.maxes[f.HSB][2], ")");

          case "hsb%":
          case "hsv%":
            return this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), "hsb(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%)");

          case "hsba":
          case "hsva":
            return this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), "hsba(".concat(this.hsba[0] * this.maxes[f.HSB][0], ", ", this.hsba[1] * this.maxes[f.HSB][1], ", ", this.hsba[2] * this.maxes[f.HSB][2], ", ", i, ")");

          case "hsba%":
          case "hsva%":
            return this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), "hsba(".concat((100 * this.hsba[0]).toPrecision(3), "%, ", (100 * this.hsba[1]).toPrecision(3), "%, ", (100 * this.hsba[2]).toPrecision(3), "%, ", (100 * i).toPrecision(3), "%)");

          case "hsl":
            return this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), "hsl(".concat(this.hsla[0] * this.maxes[f.HSL][0], ", ", this.hsla[1] * this.maxes[f.HSL][1], ", ", this.hsla[2] * this.maxes[f.HSL][2], ")");

          case "hsl%":
            return this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%)");

          case "hsla":
            return this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), "hsla(".concat(this.hsla[0] * this.maxes[f.HSL][0], ", ", this.hsla[1] * this.maxes[f.HSL][1], ", ", this.hsla[2] * this.maxes[f.HSL][2], ", ", i, ")");

          case "hsla%":
            return this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), "hsl(".concat((100 * this.hsla[0]).toPrecision(3), "%, ", (100 * this.hsla[1]).toPrecision(3), "%, ", (100 * this.hsla[2]).toPrecision(3), "%, ", (100 * i).toPrecision(3), "%)");

          case "rgba":
          default:
            return "rgba(".concat(t[0], ",", t[1], ",", t[2], ",", i, ")");
        }
      }, c.default.Color.prototype.setRed = function (e) {
        this._array[0] = e / this.maxes[f.RGB][0], this._calculateLevels();
      }, c.default.Color.prototype.setGreen = function (e) {
        this._array[1] = e / this.maxes[f.RGB][1], this._calculateLevels();
      }, c.default.Color.prototype.setBlue = function (e) {
        this._array[2] = e / this.maxes[f.RGB][2], this._calculateLevels();
      }, c.default.Color.prototype.setAlpha = function (e) {
        this._array[3] = e / this.maxes[this.mode][3], this._calculateLevels();
      }, c.default.Color.prototype._calculateLevels = function () {
        for (var e = this._array, t = this.levels = new Array(e.length), r = e.length - 1; 0 <= r; --r) t[r] = Math.round(255 * e[r]);
      }, c.default.Color.prototype._getAlpha = function () {
        return this._array[3] * this.maxes[this.mode][3];
      }, c.default.Color.prototype._storeModeAndMaxes = function (e, t) {
        this.mode = e, this.maxes = t;
      }, c.default.Color.prototype._getMode = function () {
        return this.mode;
      }, c.default.Color.prototype._getMaxes = function () {
        return this.maxes;
      }, c.default.Color.prototype._getBlue = function () {
        return this._array[2] * this.maxes[f.RGB][2];
      }, c.default.Color.prototype._getBrightness = function () {
        return this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), this.hsba[2] * this.maxes[f.HSB][2];
      }, c.default.Color.prototype._getGreen = function () {
        return this._array[1] * this.maxes[f.RGB][1];
      }, c.default.Color.prototype._getHue = function () {
        return this.mode === f.HSB ? (this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), this.hsba[0] * this.maxes[f.HSB][0]) : (this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), this.hsla[0] * this.maxes[f.HSL][0]);
      }, c.default.Color.prototype._getLightness = function () {
        return this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), this.hsla[2] * this.maxes[f.HSL][2];
      }, c.default.Color.prototype._getRed = function () {
        return this._array[0] * this.maxes[f.RGB][0];
      }, c.default.Color.prototype._getSaturation = function () {
        return this.mode === f.HSB ? (this.hsba || (this.hsba = d.default._rgbaToHSBA(this._array)), this.hsba[1] * this.maxes[f.HSB][1]) : (this.hsla || (this.hsla = d.default._rgbaToHSLA(this._array)), this.hsla[1] * this.maxes[f.HSL][1]);
      };
      var p = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      },
          n = /\s*/,
          a = /(\d{1,3})/,
          l = /((?:\d+(?:\.\d+)?)|(?:\.\d+))/,
          u = new RegExp("".concat(l.source, "%")),
          m = {
        HEX3: /^#([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        HEX4: /^#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])$/i,
        HEX6: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
        HEX8: /^#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i,
        RGB: new RegExp(["^rgb\\(", a.source, ",", a.source, ",", a.source, "\\)$"].join(n.source), "i"),
        RGB_PERCENT: new RegExp(["^rgb\\(", u.source, ",", u.source, ",", u.source, "\\)$"].join(n.source), "i"),
        RGBA: new RegExp(["^rgba\\(", a.source, ",", a.source, ",", a.source, ",", l.source, "\\)$"].join(n.source), "i"),
        RGBA_PERCENT: new RegExp(["^rgba\\(", u.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(n.source), "i"),
        HSL: new RegExp(["^hsl\\(", a.source, ",", u.source, ",", u.source, "\\)$"].join(n.source), "i"),
        HSLA: new RegExp(["^hsla\\(", a.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(n.source), "i"),
        HSB: new RegExp(["^hsb\\(", a.source, ",", u.source, ",", u.source, "\\)$"].join(n.source), "i"),
        HSBA: new RegExp(["^hsba\\(", a.source, ",", u.source, ",", u.source, ",", l.source, "\\)$"].join(n.source), "i")
      };

      c.default.Color._parseInputs = function (e, t, r, i) {
        var n,
            a = arguments.length,
            o = this.mode,
            s = this.maxes[o],
            l = [];

        if (3 <= a) {
          for (l[0] = e / s[0], l[1] = t / s[1], l[2] = r / s[2], l[3] = "number" == typeof i ? i / s[3] : 1, n = l.length - 1; 0 <= n; --n) {
            var u = l[n];
            u < 0 ? l[n] = 0 : 1 < u && (l[n] = 1);
          }

          return o === f.HSL ? d.default._hslaToRGBA(l) : o === f.HSB ? d.default._hsbaToRGBA(l) : l;
        }

        if (1 === a && "string" == typeof e) {
          var h = e.trim().toLowerCase();
          if (p[h]) return c.default.Color._parseInputs.call(this, p[h]);
          if (m.HEX3.test(h)) return (l = m.HEX3.exec(h).slice(1).map(function (e) {
            return parseInt(e + e, 16) / 255;
          }))[3] = 1, l;
          if (m.HEX6.test(h)) return (l = m.HEX6.exec(h).slice(1).map(function (e) {
            return parseInt(e, 16) / 255;
          }))[3] = 1, l;
          if (m.HEX4.test(h)) return l = m.HEX4.exec(h).slice(1).map(function (e) {
            return parseInt(e + e, 16) / 255;
          });
          if (m.HEX8.test(h)) return l = m.HEX8.exec(h).slice(1).map(function (e) {
            return parseInt(e, 16) / 255;
          });
          if (m.RGB.test(h)) return (l = m.RGB.exec(h).slice(1).map(function (e) {
            return e / 255;
          }))[3] = 1, l;
          if (m.RGB_PERCENT.test(h)) return (l = m.RGB_PERCENT.exec(h).slice(1).map(function (e) {
            return parseFloat(e) / 100;
          }))[3] = 1, l;
          if (m.RGBA.test(h)) return l = m.RGBA.exec(h).slice(1).map(function (e, t) {
            return 3 === t ? parseFloat(e) : e / 255;
          });
          if (m.RGBA_PERCENT.test(h)) return l = m.RGBA_PERCENT.exec(h).slice(1).map(function (e, t) {
            return 3 === t ? parseFloat(e) : parseFloat(e) / 100;
          });
          if (m.HSL.test(h) ? (l = m.HSL.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100;
          }))[3] = 1 : m.HSLA.test(h) && (l = m.HSLA.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100;
          })), (l = l.map(function (e) {
            return Math.max(Math.min(e, 1), 0);
          })).length) return d.default._hslaToRGBA(l);

          if (m.HSB.test(h) ? (l = m.HSB.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : parseInt(e, 10) / 100;
          }))[3] = 1 : m.HSBA.test(h) && (l = m.HSBA.exec(h).slice(1).map(function (e, t) {
            return 0 === t ? parseInt(e, 10) / 360 : 3 === t ? parseFloat(e) : parseInt(e, 10) / 100;
          })), l.length) {
            for (n = l.length - 1; 0 <= n; --n) l[n] = Math.max(Math.min(l[n], 1), 0);

            return d.default._hsbaToRGBA(l);
          }

          l = [1, 1, 1, 1];
        } else {
          if (1 !== a && 2 !== a || "number" != typeof e) throw new Error("".concat(arguments, "is not a valid color representation."));
          l[0] = e / s[2], l[1] = e / s[2], l[2] = e / s[2], l[3] = "number" == typeof t ? t / s[3] : 1, l = l.map(function (e) {
            return Math.max(Math.min(e, 1), 0);
          });
        }

        return l;
      };

      var h = c.default.Color;
      r.default = h;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./color_conversion": 22
    }],
    25: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          s = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function () {
          return e;
        }, e;
      }

      e("./p5.Color"), s.default.prototype.background = function () {
        var e;
        return (e = this._renderer).background.apply(e, arguments), this;
      }, s.default.prototype.clear = function () {
        return this._renderer.clear(), this;
      }, s.default.prototype.colorMode = function (e, t, r, i, n) {
        if (s.default._validateParameters("colorMode", arguments), e === l.RGB || e === l.HSB || e === l.HSL) {
          this._colorMode = e;
          var a = this._colorMaxes[e];
          2 === arguments.length ? (a[0] = t, a[1] = t, a[2] = t, a[3] = t) : 4 === arguments.length ? (a[0] = t, a[1] = r, a[2] = i) : 5 === arguments.length && (a[0] = t, a[1] = r, a[2] = i, a[3] = n);
        }

        return this;
      }, s.default.prototype.fill = function () {
        var e;
        return this._renderer._setProperty("_fillSet", !0), this._renderer._setProperty("_doFill", !0), (e = this._renderer).fill.apply(e, arguments), this;
      }, s.default.prototype.noFill = function () {
        return this._renderer._setProperty("_doFill", !1), this;
      }, s.default.prototype.noStroke = function () {
        return this._renderer._setProperty("_doStroke", !1), this;
      }, s.default.prototype.stroke = function () {
        var e;
        return this._renderer._setProperty("_strokeSet", !0), this._renderer._setProperty("_doStroke", !0), (e = this._renderer).stroke.apply(e, arguments), this;
      }, s.default.prototype.erase = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 255,
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 255;
        return this._renderer.erase(e, t), this;
      }, s.default.prototype.noErase = function () {
        return this._renderer.noErase(), this;
      };
      var n = s.default;
      r.default = n;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./p5.Color": 24
    }],
    26: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.FILL = r.STROKE = r.CURVE = r.BEZIER = r.QUADRATIC = r.LINEAR = r._CTX_MIDDLE = r._DEFAULT_LEADMULT = r._DEFAULT_TEXT_FILL = r.BOLDITALIC = r.BOLD = r.ITALIC = r.NORMAL = r.BLUR = r.ERODE = r.DILATE = r.POSTERIZE = r.INVERT = r.OPAQUE = r.GRAY = r.THRESHOLD = r.BURN = r.DODGE = r.SOFT_LIGHT = r.HARD_LIGHT = r.OVERLAY = r.REPLACE = r.SCREEN = r.MULTIPLY = r.EXCLUSION = r.SUBTRACT = r.DIFFERENCE = r.LIGHTEST = r.DARKEST = r.ADD = r.REMOVE = r.BLEND = r.UP_ARROW = r.TAB = r.SHIFT = r.RIGHT_ARROW = r.RETURN = r.OPTION = r.LEFT_ARROW = r.ESCAPE = r.ENTER = r.DOWN_ARROW = r.DELETE = r.CONTROL = r.BACKSPACE = r.ALT = r.AUTO = r.HSL = r.HSB = r.RGB = r.MITER = r.BEVEL = r.ROUND = r.SQUARE = r.PROJECT = r.PIE = r.CHORD = r.OPEN = r.CLOSE = r.TESS = r.QUAD_STRIP = r.QUADS = r.TRIANGLE_STRIP = r.TRIANGLE_FAN = r.TRIANGLES = r.LINE_LOOP = r.LINE_STRIP = r.LINES = r.POINTS = r.BASELINE = r.BOTTOM = r.TOP = r.CENTER = r.LEFT = r.RIGHT = r.RADIUS = r.CORNERS = r.CORNER = r.RAD_TO_DEG = r.DEG_TO_RAD = r.RADIANS = r.DEGREES = r.TWO_PI = r.TAU = r.QUARTER_PI = r.PI = r.HALF_PI = r.WAIT = r.TEXT = r.MOVE = r.HAND = r.CROSS = r.ARROW = r.WEBGL = r.P2D = void 0, r.FALLBACK = r.LABEL = r.AXES = r.GRID = r._DEFAULT_FILL = r._DEFAULT_STROKE = r.PORTRAIT = r.LANDSCAPE = r.MIRROR = r.CLAMP = r.REPEAT = r.NEAREST = r.IMAGE = r.IMMEDIATE = r.TEXTURE = void 0;
      var i = Math.PI;
      r.P2D = "p2d";
      r.WEBGL = "webgl";
      r.ARROW = "default";
      r.CROSS = "crosshair";
      r.HAND = "pointer";
      r.MOVE = "move";
      r.TEXT = "text";
      r.WAIT = "wait";
      var n = i / 2;
      r.HALF_PI = n;
      var a = i;
      r.PI = a;
      var o = i / 4;
      r.QUARTER_PI = o;
      var s = 2 * i;
      r.TAU = s;
      var l = 2 * i;
      r.TWO_PI = l;
      r.DEGREES = "degrees";
      r.RADIANS = "radians";
      var u = i / 180;
      r.DEG_TO_RAD = u;
      var h = 180 / i;
      r.RAD_TO_DEG = h;
      r.CORNER = "corner";
      r.CORNERS = "corners";
      r.RADIUS = "radius";
      r.RIGHT = "right";
      r.LEFT = "left";
      r.CENTER = "center";
      r.TOP = "top";
      r.BOTTOM = "bottom";
      r.BASELINE = "alphabetic";
      r.POINTS = 0;
      r.LINES = 1;
      r.LINE_STRIP = 3;
      r.LINE_LOOP = 2;
      r.TRIANGLES = 4;
      r.TRIANGLE_FAN = 6;
      r.TRIANGLE_STRIP = 5;
      r.QUADS = "quads";
      r.QUAD_STRIP = "quad_strip";
      r.TESS = "tess";
      r.CLOSE = "close";
      r.OPEN = "open";
      r.CHORD = "chord";
      r.PIE = "pie";
      r.PROJECT = "square";
      r.SQUARE = "butt";
      r.ROUND = "round";
      r.BEVEL = "bevel";
      r.MITER = "miter";
      r.RGB = "rgb";
      r.HSB = "hsb";
      r.HSL = "hsl";
      r.AUTO = "auto";
      r.ALT = 18;
      r.BACKSPACE = 8;
      r.CONTROL = 17;
      r.DELETE = 46;
      r.DOWN_ARROW = 40;
      r.ENTER = 13;
      r.ESCAPE = 27;
      r.LEFT_ARROW = 37;
      r.OPTION = 18;
      r.RETURN = 13;
      r.RIGHT_ARROW = 39;
      r.SHIFT = 16;
      r.TAB = 9;
      r.UP_ARROW = 38;
      r.BLEND = "source-over";
      r.REMOVE = "destination-out";
      r.ADD = "lighter";
      r.DARKEST = "darken";
      r.LIGHTEST = "lighten";
      r.DIFFERENCE = "difference";
      r.SUBTRACT = "subtract";
      r.EXCLUSION = "exclusion";
      r.MULTIPLY = "multiply";
      r.SCREEN = "screen";
      r.REPLACE = "copy";
      r.OVERLAY = "overlay";
      r.HARD_LIGHT = "hard-light";
      r.SOFT_LIGHT = "soft-light";
      r.DODGE = "color-dodge";
      r.BURN = "color-burn";
      r.THRESHOLD = "threshold";
      r.GRAY = "gray";
      r.OPAQUE = "opaque";
      r.INVERT = "invert";
      r.POSTERIZE = "posterize";
      r.DILATE = "dilate";
      r.ERODE = "erode";
      r.BLUR = "blur";
      r.NORMAL = "normal";
      r.ITALIC = "italic";
      r.BOLD = "bold";
      r.BOLDITALIC = "bold italic";
      r._DEFAULT_TEXT_FILL = "#000000";
      r._DEFAULT_LEADMULT = 1.25;
      r._CTX_MIDDLE = "middle";
      r.LINEAR = "linear";
      r.QUADRATIC = "quadratic";
      r.BEZIER = "bezier";
      r.CURVE = "curve";
      r.STROKE = "stroke";
      r.FILL = "fill";
      r.TEXTURE = "texture";
      r.IMMEDIATE = "immediate";
      r.IMAGE = "image";
      r.NEAREST = "nearest";
      r.REPEAT = "repeat";
      r.CLAMP = "clamp";
      r.MIRROR = "mirror";
      r.LANDSCAPE = "landscape";
      r.PORTRAIT = "portrait";
      r._DEFAULT_STROKE = "#000000";
      r._DEFAULT_FILL = "#FFFFFF";
      r.GRID = "grid";
      r.AXES = "axes";
      r.LABEL = "label";
      r.FALLBACK = "fallback";
    }, {}],
    27: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("./main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      var l = [a.ARROW, a.CROSS, a.HAND, a.MOVE, a.TEXT, a.WAIT];
      n.default.prototype._frameRate = 0, n.default.prototype._lastFrameTime = window.performance.now(), n.default.prototype._targetFrameRate = 60;
      var u = window.print;

      function h() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
      }

      function c() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight || 0;
      }

      n.default.prototype.print = function () {
        var e;
        arguments.length ? (e = console).log.apply(e, arguments) : u();
      }, n.default.prototype.frameCount = 0, n.default.prototype.deltaTime = 0, n.default.prototype.focused = document.hasFocus(), n.default.prototype.cursor = function (e, t, r) {
        var i = "auto",
            n = this._curElement.elt;
        if (l.includes(e)) i = e;else if ("string" == typeof e) {
          var a = "";
          t && r && "number" == typeof t && "number" == typeof r && (a = "".concat(t, " ").concat(r)), i = "http://" === e.substring(0, 7) || "https://" === e.substring(0, 8) ? "url(".concat(e, ") ").concat(a, ", auto") : /\.(cur|jpg|jpeg|gif|png|CUR|JPG|JPEG|GIF|PNG)$/.test(e) ? "url(".concat(e, ") ").concat(a, ", auto") : e;
        }
        n.style.cursor = i;
      }, n.default.prototype.frameRate = function (e) {
        return n.default._validateParameters("frameRate", arguments), "number" != typeof e || e < 0 ? this._frameRate : (this._setProperty("_targetFrameRate", e), 0 === e && this._setProperty("_frameRate", e), this);
      }, n.default.prototype.getFrameRate = function () {
        return this.frameRate();
      }, n.default.prototype.setFrameRate = function (e) {
        return this.frameRate(e);
      }, n.default.prototype.noCursor = function () {
        this._curElement.elt.style.cursor = "none";
      }, n.default.prototype.displayWidth = screen.width, n.default.prototype.displayHeight = screen.height, n.default.prototype.windowWidth = h(), n.default.prototype.windowHeight = c(), n.default.prototype._onresize = function (e) {
        this._setProperty("windowWidth", h()), this._setProperty("windowHeight", c());
        var t,
            r = this._isGlobal ? window : this;
        "function" == typeof r.windowResized && (void 0 === (t = r.windowResized(e)) || t || e.preventDefault());
      }, n.default.prototype.width = 0, n.default.prototype.height = 0, n.default.prototype.fullscreen = function (e) {
        if (n.default._validateParameters("fullscreen", arguments), void 0 === e) return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        e ? function (e) {
          if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) throw new Error("Fullscreen not enabled in this browser.");
          e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
        }(document.documentElement) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
      }, n.default.prototype.pixelDensity = function (e) {
        var t;
        return n.default._validateParameters("pixelDensity", arguments), "number" == typeof e ? (e !== this._pixelDensity && (this._pixelDensity = e), (t = this).resizeCanvas(this.width, this.height, !0)) : t = this._pixelDensity, t;
      }, n.default.prototype.displayDensity = function () {
        return window.devicePixelRatio;
      }, n.default.prototype.getURL = function () {
        return location.href;
      }, n.default.prototype.getURLPath = function () {
        return location.pathname.split("/").filter(function (e) {
          return "" !== e;
        });
      }, n.default.prototype.getURLParams = function () {
        for (var e, t = /[?&]([^&=]+)(?:[&=])([^&=]+)/gim, r = {}; null != (e = t.exec(location.search));) e.index === t.lastIndex && t.lastIndex++, r[e[1]] = e[2];

        return r;
      };
      var f = n.default;
      r.default = f;
    }, {
      "./constants": 26,
      "./main": 36
    }],
    28: [function (r, e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i,
          n = (i = r("../main")) && i.__esModule ? i : {
        default: i
      };
      r("../internationalization");
      var a = null,
          o = null;
      n.default._friendlyError = n.default._checkForUserDefinedFunctions = n.default._fesErrorMonitor = function () {}, a = null;
      var s = "https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup";

      o = function () {
        function e(r) {
          return Object.getOwnPropertyNames(r).filter(function (e) {
            return "_" !== e[0] && !(e in t) && (t[e] = !0);
          }).map(function (e) {
            var t;
            return t = "function" == typeof r[e] ? "function" : e === e.toUpperCase() ? "constant" : "variable", {
              name: e,
              type: t
            };
          });
        }

        var t = {};
        (a = [].concat(e(n.default.prototype), e(r("../constants")))).sort(function (e, t) {
          return t.name.length - e.name.length;
        });
      };

      function l(r, i) {
        i = i || console.log.bind(console), a || o(), a.some(function (e) {
          if (r.message && null !== r.message.match("\\W?".concat(e.name, "\\W"))) {
            var t = "function" === e.type ? "".concat(e.name, "()") : e.name;
            return i("Did you just try to use p5.js's ".concat(t, " ").concat(e.type, "? If so, you may want to move it into your sketch's setup() function.\n\nFor more details, see: ").concat(s)), !0;
          }
        });
      }

      n.default.prototype._helpForMisusedAtTopLevelCode = l, "complete" !== document.readyState && (window.addEventListener("error", l, !1), window.addEventListener("load", function () {
        window.removeEventListener("error", l, !1);
      }));
      var u = n.default;
      t.default = u;
    }, {
      "../constants": 26,
      "../internationalization": 34,
      "../main": 36,
      "./browser_errors": void 0
    }],
    29: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../main")) && i.__esModule ? i : {
        default: i
      };
      e("../internationalization");

      n.default._friendlyFileLoadError = function () {};

      var a = n.default;
      r.default = a;
    }, {
      "../internationalization": 34,
      "../main": 36
    }],
    30: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../main")) && i.__esModule ? i : {
        default: i
      };

      function a() {
        var t = /(^|@)\S+:\d+/,
            r = /^\s*at .*(\S+:\d+|\(native\))/m,
            i = /^(eval@)?(\[native code])?$/;
        return {
          parse: function (e) {
            return void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(r) ? this.parseV8OrIE(e) : e.stack ? this.parseFFOrSafari(e) : void 0;
          },
          extractLocation: function (e) {
            if (-1 === e.indexOf(":")) return [e];
            var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
            return [t[1], t[2] || void 0, t[3] || void 0];
          },
          parseV8OrIE: function (e) {
            return e.stack.split("\n").filter(function (e) {
              return !!e.match(r);
            }, this).map(function (e) {
              -1 < e.indexOf("(eval ") && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              var t = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                  r = t.match(/ (\((.+):(\d+):(\d+)\)$)/),
                  i = (t = r ? t.replace(r[0], "") : t).split(/\s+/).slice(1),
                  n = this.extractLocation(r ? r[1] : i.pop());
              return {
                functionName: i.join(" ") || void 0,
                fileName: -1 < ["eval", "<anonymous>"].indexOf(n[0]) ? void 0 : n[0],
                lineNumber: n[1],
                columnNumber: n[2],
                source: e
              };
            }, this);
          },
          parseFFOrSafari: function (e) {
            return e.stack.split("\n").filter(function (e) {
              return !e.match(i);
            }, this).map(function (e) {
              if (-1 < e.indexOf(" > eval") && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return {
                functionName: e
              };
              var t = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  r = e.match(t),
                  i = r && r[1] ? r[1] : void 0,
                  n = this.extractLocation(e.replace(t, ""));
              return {
                functionName: i,
                fileName: n[0],
                lineNumber: n[1],
                columnNumber: n[2],
                source: e
              };
            }, this);
          },
          parseOpera: function (e) {
            return !e.stacktrace || -1 < e.message.indexOf("\n") && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
          },
          parseOpera9: function (e) {
            for (var t = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], n = 2, a = r.length; n < a; n += 2) {
              var o = t.exec(r[n]);
              o && i.push({
                fileName: o[2],
                lineNumber: o[1],
                source: r[n]
              });
            }

            return i;
          },
          parseOpera10: function (e) {
            for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], n = 0, a = r.length; n < a; n += 2) {
              var o = t.exec(r[n]);
              o && i.push({
                functionName: o[3] || void 0,
                fileName: o[2],
                lineNumber: o[1],
                source: r[n]
              });
            }

            return i;
          },
          parseOpera11: function (e) {
            return e.stack.split("\n").filter(function (e) {
              return !!e.match(t) && !e.match(/^Error created at/);
            }, this).map(function (e) {
              var t,
                  r = e.split("@"),
                  i = this.extractLocation(r.pop()),
                  n = r.shift() || "",
                  a = n.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
              return n.match(/\(([^)]*)\)/) && (t = n.replace(/^[^(]+\(([^)]*)\)$/, "$1")), {
                functionName: a,
                args: void 0 === t || "[arguments not available]" === t ? void 0 : t.split(","),
                fileName: i[0],
                lineNumber: i[1],
                columnNumber: i[2],
                source: e
              };
            }, this);
          }
        };
      }

      n.default._getErrorStackParser = function () {
        return new a();
      };

      var o = n.default;
      r.default = o;
    }, {
      "../main": 36
    }],
    31: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../main")) && i.__esModule ? i : {
        default: i
      };
      (function (e) {
        if (e && e.__esModule) return;
        if (null === e || "object" !== s(e) && "function" != typeof e) return;
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
      })(e("../constants")), e("../internationalization");

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function () {
          return e;
        }, e;
      }

      function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      n.default._validateParameters = n.default._clearValidateParamsCache = function () {};

      var a = n.default;
      r.default = a;
    }, {
      "../../../docs/parameterData.json": void 0,
      "../constants": 26,
      "../internationalization": 34,
      "../main": 36
    }],
    32: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      var i = {
        modeAdjust: function (e, t, r, i, n) {
          return n === a.CORNER ? {
            x: e,
            y: t,
            w: r,
            h: i
          } : n === a.CORNERS ? {
            x: e,
            y: t,
            w: r - e,
            h: i - t
          } : n === a.RADIUS ? {
            x: e - r,
            y: t - i,
            w: 2 * r,
            h: 2 * i
          } : n === a.CENTER ? {
            x: e - .5 * r,
            y: t - .5 * i,
            w: r,
            h: i
          } : void 0;
        }
      };
      r.default = i;
    }, {
      "./constants": 26
    }],
    33: [function (e, t, r) {
      "use strict";

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      e("./internationalization");
      var a = Promise.resolve();
      Promise.all([new Promise(function (e, t) {
        "complete" === document.readyState ? e() : window.addEventListener("load", e, !1);
      }), a]).then(function () {
        void 0 === window._setupDone ? window.mocha || (window.setup && "function" == typeof window.setup || window.draw && "function" == typeof window.draw) && !n.default.instance && new n.default() : console.warn("p5.js seems to have been imported multiple times. Please remove the duplicate import");
      });
    }, {
      "../core/main": 36,
      "./internationalization": 34
    }],
    34: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.initialize = r.translator = void 0;
      var a,
          o,
          i = s(e("i18next")),
          n = s(e("i18next-browser-languagedetector"));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function l(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      var u = function () {
        function r(e, t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, r), this.init(e, t);
        }

        var e, t, i;
        return e = r, (t = [{
          key: "fetchWithTimeout",
          value: function (e, t, r) {
            var i = 2 < arguments.length && void 0 !== r ? r : 2e3;
            return Promise.race([fetch(e, t), new Promise(function (e, t) {
              return setTimeout(function () {
                return t(new Error("timeout"));
              }, i);
            })]);
          }
        }, {
          key: "init",
          value: function (e, t) {
            var r = 1 < arguments.length && void 0 !== t ? t : {};
            this.services = e, this.options = r;
          }
        }, {
          key: "read",
          value: function (e, t, r) {
            var i = this.options.loadPath;
            if (e === this.options.fallback) r(null, a[e][t]);else if (o.includes(e)) {
              var n = this.services.interpolator.interpolate(i, {
                lng: e,
                ns: t
              });
              this.loadUrl(n, r);
            } else r("Not found", !1);
          }
        }, {
          key: "loadUrl",
          value: function (t, r) {
            this.fetchWithTimeout(t).then(function (e) {
              if (!e.ok) throw new Error("failed loading ".concat(t));
              return e.json();
            }, function () {
              throw new Error("failed loading ".concat(t));
            }).then(function (e) {
              return r(null, e);
            }).catch(r);
          }
        }]) && l(e.prototype, t), i && l(e, i), r;
      }();

      u.type = "backend";

      var h = function (e, t) {
        console.debug("p5.js translator called before translations were loaded"), i.default.t(e, t);
      };

      r.translator = h;

      r.initialize = function () {
        return i.default.use(n.default).use(u).init({
          fallbackLng: "en",
          nestingPrefix: "$tr(",
          nestingSuffix: ")",
          defaultNS: "translation",
          returnEmptyString: !1,
          interpolation: {
            escapeValue: !1
          },
          detection: {
            checkWhitelist: !1,
            order: ["querystring", "navigator", "htmlTag", "path", "subdomain"],
            caches: []
          },
          backend: {
            fallback: "en",
            loadPath: "https://cdn.jsdelivr.net/npm/p5/translations/{{lng}}/{{ns}}.json"
          },
          partialBundledLanguages: !0,
          resources: a
        }).then(function (e) {
          r.translator = h = e;
        }, function (e) {
          return console.debug("Translations failed to load (".concat(e, ")"));
        });
      };
    }, {
      "../../translations": void 0,
      "../../translations/dev": void 0,
      i18next: 3,
      "i18next-browser-languagedetector": 3
    }],
    35: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("./main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.pushStyle = function () {
        throw new Error("pushStyle() not used, see push()");
      }, n.default.prototype.popStyle = function () {
        throw new Error("popStyle() not used, see pop()");
      }, n.default.prototype.popMatrix = function () {
        throw new Error("popMatrix() not used, see pop()");
      }, n.default.prototype.pushMatrix = function () {
        throw new Error("pushMatrix() not used, see push()");
      };
      var a = n.default;
      r.default = a;
    }, {
      "./main": 36
    }],
    36: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0, e("./shim");

      var i = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
      }

      var a = function () {
        function _(e, t, r) {
          var f = this;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, _), this._setupDone = !1, this._pixelDensity = Math.ceil(window.devicePixelRatio) || 1, this._userNode = t, this._curElement = null, this._elements = [], this._glAttributes = null, this._requestAnimId = 0, this._preloadCount = 0, this._isGlobal = !1, this._loop = !0, this._initializeInstanceVariables(), this._defaultCanvasSize = {
            width: 100,
            height: 100
          }, this._events = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            dragend: null,
            dragover: null,
            click: null,
            dblclick: null,
            mouseover: null,
            mouseout: null,
            keydown: null,
            keyup: null,
            keypress: null,
            touchstart: null,
            touchmove: null,
            touchend: null,
            resize: null,
            blur: null
          }, this._millisStart = -1, this._lcg_random_state = null, this._gaussian_previous = !1, this._events.wheel = null, this._loadingScreenId = "p5_loading", this._registeredMethods = {};
          var i = Object.getOwnPropertyNames(_.prototype._registeredMethods),
              n = !0,
              a = !1,
              o = void 0;

          try {
            for (var s, l = i[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
              var u = s.value;
              this._registeredMethods[u] = _.prototype._registeredMethods[u].slice();
            }
          } catch (e) {
            a = !0, o = e;
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (a) throw o;
            }
          }

          window.DeviceOrientationEvent && (this._events.deviceorientation = null), window.DeviceMotionEvent && !window._isNodeWebkit && (this._events.devicemotion = null), this._start = function () {
            f._userNode && "string" == typeof f._userNode && (f._userNode = document.getElementById(f._userNode));
            var e = f._isGlobal ? window : f;

            if (e.preload) {
              var t = document.getElementById(f._loadingScreenId);
              if (!t) (t = document.createElement("div")).innerHTML = "Loading...", t.style.position = "absolute", t.id = f._loadingScreenId, (f._userNode || document.body).appendChild(t);
              var r = f._preloadMethods;

              for (var i in r) {
                r[i] = r[i] || _;
                var n = r[i];
                n !== _.prototype && n !== _ || (f._isGlobal && (window[i] = f._wrapPreload(f, i)), n = f), f._registeredPreloadMethods[i] = n[i], n[i] = f._wrapPreload(n, i);
              }

              e.preload(), f._runIfPreloadsAreDone();
            } else f._setup(), f._draw();
          }, this._runIfPreloadsAreDone = function () {
            var e = this._isGlobal ? window : this;

            if (0 === e._preloadCount) {
              var t = document.getElementById(e._loadingScreenId);
              t && t.parentNode.removeChild(t), this._setupDone || (this._lastFrameTime = window.performance.now(), e._setup(), e._draw());
            }
          }, this._decrementPreload = function () {
            var e = this._isGlobal ? window : this;
            "function" == typeof e.preload && (e._setProperty("_preloadCount", e._preloadCount - 1), e._runIfPreloadsAreDone());
          }, this._wrapPreload = function (i, n) {
            var a = this;
            return function () {
              a._incrementPreload();

              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

              return a._registeredPreloadMethods[n].apply(i, t);
            };
          }, this._incrementPreload = function () {
            var e = this._isGlobal ? window : this;

            e._setProperty("_preloadCount", e._preloadCount + 1);
          }, this._setup = function () {
            f.createCanvas(f._defaultCanvasSize.width, f._defaultCanvasSize.height, "p2d");
            var e = f._isGlobal ? window : f;
            if ("function" == typeof e.preload) for (var t in f._preloadMethods) e[t] = f._preloadMethods[t][t], e[t] && f && (e[t] = e[t].bind(f));
            f._millisStart = window.performance.now(), "function" == typeof e.setup && e.setup();
            var r = document.getElementsByTagName("canvas"),
                i = !0,
                n = !1,
                a = void 0;

            try {
              for (var o, s = r[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                var l = o.value;
                "true" === l.dataset.hidden && (l.style.visibility = "", delete l.dataset.hidden);
              }
            } catch (e) {
              n = !0, a = e;
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (n) throw a;
              }
            }

            f._lastFrameTime = window.performance.now(), f._setupDone = !0, (f._accessibleOutputs.grid || f._accessibleOutputs.text) && f._updateAccsOutput();
          }, this._draw = function () {
            var e = window.performance.now(),
                t = e - f._lastFrameTime,
                r = 1e3 / f._targetFrameRate;
            (!f._loop || r - 5 <= t) && (f.redraw(), f._frameRate = 1e3 / (e - f._lastFrameTime), f.deltaTime = e - f._lastFrameTime, f._setProperty("deltaTime", f.deltaTime), f._lastFrameTime = e, void 0 !== f._updateMouseCoords && (f._updateMouseCoords(), f._setProperty("movedX", 0), f._setProperty("movedY", 0))), f._loop && (f._requestAnimId = window.requestAnimationFrame(f._draw));
          }, this._setProperty = function (e, t) {
            f[e] = t, f._isGlobal && (window[e] = t);
          }, this.remove = function () {
            var e = document.getElementById(f._loadingScreenId);

            if (e && (e.parentNode.removeChild(e), f._incrementPreload()), f._curElement) {
              for (var t in f._loop = !1, f._requestAnimId && window.cancelAnimationFrame(f._requestAnimId), f._events) window.removeEventListener(t, f._events[t]);

              var r = !0,
                  i = !1,
                  n = void 0;

              try {
                for (var a, o = f._elements[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                  var s = a.value;

                  for (var l in s.elt && s.elt.parentNode && s.elt.parentNode.removeChild(s.elt), s._events) s.elt.removeEventListener(l, s._events[l]);
                }
              } catch (e) {
                i = !0, n = e;
              } finally {
                try {
                  r || null == o.return || o.return();
                } finally {
                  if (i) throw n;
                }
              }

              var u = f;

              f._registeredMethods.remove.forEach(function (e) {
                void 0 !== e && e.call(u);
              });
            }

            if (f._isGlobal) {
              for (var h in _.prototype) try {
                delete window[h];
              } catch (e) {
                window[h] = void 0;
              }

              for (var c in f) if (f.hasOwnProperty(c)) try {
                delete window[c];
              } catch (e) {
                window[c] = void 0;
              }

              _.instance = null;
            }
          }, this._registeredMethods.init.forEach(function (e) {
            void 0 !== e && e.call(this);
          }, this), this._setupPromisePreloads();

          var h = this._createFriendlyGlobalFunctionBinder();

          if (e) e(this), _._checkForUserDefinedFunctions(this);else {
            for (var c in this._isGlobal = !0, _.instance = this, _.prototype) if ("function" == typeof _.prototype[c]) {
              var d = c.substring(2);
              this._events.hasOwnProperty(d) || (Math.hasOwnProperty(c) && Math[c] === _.prototype[c] ? h(c, _.prototype[c]) : h(c, _.prototype[c].bind(this)));
            } else h(c, _.prototype[c]);

            for (var p in this) this.hasOwnProperty(p) && h(p, this[p]);
          }

          for (var m in this._events) {
            var y = this["_on".concat(m)];

            if (y) {
              var v = y.bind(this);
              window.addEventListener(m, v, {
                passive: !1
              }), this._events[m] = v;
            }
          }

          function g() {
            f._setProperty("focused", !0);
          }

          function b() {
            f._setProperty("focused", !1);
          }

          window.addEventListener("focus", g), window.addEventListener("blur", b), this.registerMethod("remove", function () {
            window.removeEventListener("focus", g), window.removeEventListener("blur", b);
          }), "complete" === document.readyState ? this._start() : window.addEventListener("load", this._start.bind(this), !1);
        }

        var e, t, r;
        return e = _, (t = [{
          key: "_initializeInstanceVariables",
          value: function () {
            this._accessibleOutputs = {
              text: !1,
              grid: !1,
              textLabel: !1,
              gridLabel: !1
            }, this._styles = [], this._bezierDetail = 20, this._curveDetail = 20, this._colorMode = i.RGB, this._colorMaxes = {
              rgb: [255, 255, 255, 255],
              hsb: [360, 100, 100, 1],
              hsl: [360, 100, 100, 1]
            }, this._downKeys = {};
          }
        }, {
          key: "registerPreloadMethod",
          value: function (e, t) {
            _.prototype._preloadMethods.hasOwnProperty(e) || (_.prototype._preloadMethods[e] = t);
          }
        }, {
          key: "registerMethod",
          value: function (e, t) {
            var r = this || _.prototype;
            r._registeredMethods.hasOwnProperty(e) || (r._registeredMethods[e] = []), r._registeredMethods[e].push(t);
          }
        }, {
          key: "_createFriendlyGlobalFunctionBinder",
          value: function (e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {},
                r = t.globalObject || window;
            t.log || console.log.bind(console);
            return function (e, t) {
              r[e] = t;
            };
          }
        }]) && n(e.prototype, t), r && n(e, r), _;
      }();

      for (var l in a.instance = null, a.disableFriendlyErrors = !1, i) a.prototype[l] = i[l];

      a.prototype._preloadMethods = {
        loadJSON: a.prototype,
        loadImage: a.prototype,
        loadStrings: a.prototype,
        loadXML: a.prototype,
        loadBytes: a.prototype,
        loadTable: a.prototype,
        loadFont: a.prototype,
        loadModel: a.prototype,
        loadShader: a.prototype
      }, a.prototype._registeredMethods = {
        init: [],
        pre: [],
        post: [],
        remove: []
      }, a.prototype._registeredPreloadMethods = {};
      var u = a;
      r.default = u;
    }, {
      "./constants": 26,
      "./shim": 47
    }],
    37: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("./main")) && i.__esModule ? i : {
        default: i
      };
      n.default.Element = function (e, t) {
        this.elt = e, this._pInst = this._pixelsState = t, this._events = {}, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight;
      }, n.default.Element.prototype.parent = function (e) {
        return void 0 === e ? this.elt.parentNode : ("string" == typeof e ? ("#" === e[0] && (e = e.substring(1)), e = document.getElementById(e)) : e instanceof n.default.Element && (e = e.elt), e.appendChild(this.elt), this);
      }, n.default.Element.prototype.id = function (e) {
        return void 0 === e ? this.elt.id : (this.elt.id = e, this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this);
      }, n.default.Element.prototype.class = function (e) {
        return void 0 === e ? this.elt.className : (this.elt.className = e, this);
      }, n.default.Element.prototype.mousePressed = function (t) {
        return n.default.Element._adjustListener("mousedown", function (e) {
          return this._pInst._setProperty("mouseIsPressed", !0), this._pInst._setMouseButton(e), t.call(this);
        }, this), this;
      }, n.default.Element.prototype.doubleClicked = function (e) {
        return n.default.Element._adjustListener("dblclick", e, this), this;
      }, n.default.Element.prototype.mouseWheel = function (e) {
        return n.default.Element._adjustListener("wheel", e, this), this;
      }, n.default.Element.prototype.mouseReleased = function (e) {
        return n.default.Element._adjustListener("mouseup", e, this), this;
      }, n.default.Element.prototype.mouseClicked = function (e) {
        return n.default.Element._adjustListener("click", e, this), this;
      }, n.default.Element.prototype.mouseMoved = function (e) {
        return n.default.Element._adjustListener("mousemove", e, this), this;
      }, n.default.Element.prototype.mouseOver = function (e) {
        return n.default.Element._adjustListener("mouseover", e, this), this;
      }, n.default.Element.prototype.mouseOut = function (e) {
        return n.default.Element._adjustListener("mouseout", e, this), this;
      }, n.default.Element.prototype.touchStarted = function (e) {
        return n.default.Element._adjustListener("touchstart", e, this), this;
      }, n.default.Element.prototype.touchMoved = function (e) {
        return n.default.Element._adjustListener("touchmove", e, this), this;
      }, n.default.Element.prototype.touchEnded = function (e) {
        return n.default.Element._adjustListener("touchend", e, this), this;
      }, n.default.Element.prototype.dragOver = function (e) {
        return n.default.Element._adjustListener("dragover", e, this), this;
      }, n.default.Element.prototype.dragLeave = function (e) {
        return n.default.Element._adjustListener("dragleave", e, this), this;
      }, n.default.Element._adjustListener = function (e, t, r) {
        return !1 === t ? n.default.Element._detachListener(e, r) : n.default.Element._attachListener(e, t, r), this;
      }, n.default.Element._attachListener = function (e, t, r) {
        r._events[e] && n.default.Element._detachListener(e, r);
        var i = t.bind(r);
        r.elt.addEventListener(e, i, !1), r._events[e] = i;
      }, n.default.Element._detachListener = function (e, t) {
        var r = t._events[e];
        t.elt.removeEventListener(e, r, !1), t._events[e] = null;
      }, n.default.Element.prototype._setProperty = function (e, t) {
        this[e] = t;
      };
      var a = n.default.Element;
      r.default = a;
    }, {
      "./main": 36
    }],
    38: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          s = (i = e("./main")) && i.__esModule ? i : {
        default: i
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function () {
          return e;
        }, e;
      }

      s.default.Graphics = function (e, t, r, i) {
        var n = r || l.P2D;
        this.canvas = document.createElement("canvas");
        var a = i._userNode || document.body;

        for (var o in a.appendChild(this.canvas), s.default.Element.call(this, this.canvas, i), s.default.prototype) this[o] || ("function" == typeof s.default.prototype[o] ? this[o] = s.default.prototype[o].bind(this) : this[o] = s.default.prototype[o]);

        return s.default.prototype._initializeInstanceVariables.apply(this), this.width = e, this.height = t, this._pixelDensity = i._pixelDensity, n === l.WEBGL ? this._renderer = new s.default.RendererGL(this.canvas, this, !1) : this._renderer = new s.default.Renderer2D(this.canvas, this, !1), i._elements.push(this), Object.defineProperty(this, "deltaTime", {
          get: function () {
            return this._pInst.deltaTime;
          }
        }), this._renderer.resize(e, t), this._renderer._applyDefaults(), this;
      }, s.default.Graphics.prototype = Object.create(s.default.Element.prototype), s.default.Graphics.prototype.reset = function () {
        this._renderer.resetMatrix(), this._renderer.isP3D && this._renderer._update();
      }, s.default.Graphics.prototype.remove = function () {
        this.elt.parentNode && this.elt.parentNode.removeChild(this.elt);

        var e = this._pInst._elements.indexOf(this);

        for (var t in -1 !== e && this._pInst._elements.splice(e, 1), this._events) this.elt.removeEventListener(t, this._events[t]);
      };
      var n = s.default.Graphics;
      r.default = n;
    }, {
      "./constants": 26,
      "./main": 36
    }],
    39: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          l = (i = e("./main")) && i.__esModule ? i : {
        default: i
      },
          T = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== s(e) && "function" != typeof e) return {
          default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function () {
          return e;
        }, e;
      }

      function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      function u(e) {
        var t = 0,
            r = 0;
        if (e.offsetParent) for (; t += e.offsetLeft, r += e.offsetTop, e = e.offsetParent;);else t += e.offsetLeft, r += e.offsetTop;
        return [t, r];
      }

      l.default.Renderer = function (e, t, r) {
        l.default.Element.call(this, e, t), this.canvas = e, this._pixelsState = t, r ? (this._isMainCanvas = !0, this._pInst._setProperty("_curElement", this), this._pInst._setProperty("canvas", this.canvas), this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height)) : (this.canvas.style.display = "none", this._styles = []), this._textSize = 12, this._textLeading = 15, this._textFont = "sans-serif", this._textStyle = T.NORMAL, this._textAscent = null, this._textDescent = null, this._textAlign = T.LEFT, this._textBaseline = T.BASELINE, this._rectMode = T.CORNER, this._ellipseMode = T.CENTER, this._curveTightness = 0, this._imageMode = T.CORNER, this._tint = null, this._doStroke = !0, this._doFill = !0, this._strokeSet = !1, this._fillSet = !1;
      }, l.default.Renderer.prototype = Object.create(l.default.Element.prototype), l.default.Renderer.prototype.push = function () {
        return {
          properties: {
            _doStroke: this._doStroke,
            _strokeSet: this._strokeSet,
            _doFill: this._doFill,
            _fillSet: this._fillSet,
            _tint: this._tint,
            _imageMode: this._imageMode,
            _rectMode: this._rectMode,
            _ellipseMode: this._ellipseMode,
            _textFont: this._textFont,
            _textLeading: this._textLeading,
            _textSize: this._textSize,
            _textAlign: this._textAlign,
            _textBaseline: this._textBaseline,
            _textStyle: this._textStyle
          }
        };
      }, l.default.Renderer.prototype.pop = function (e) {
        e.properties && Object.assign(this, e.properties);
      }, l.default.Renderer.prototype.resize = function (e, t) {
        this.width = e, this.height = t, this.elt.width = e * this._pInst._pixelDensity, this.elt.height = t * this._pInst._pixelDensity, this.elt.style.width = "".concat(e, "px"), this.elt.style.height = "".concat(t, "px"), this._isMainCanvas && (this._pInst._setProperty("width", this.width), this._pInst._setProperty("height", this.height));
      }, l.default.Renderer.prototype.get = function (e, t, r, i) {
        var n = this._pixelsState,
            a = n._pixelDensity,
            o = this.canvas;
        if (void 0 === e && void 0 === t) e = t = 0, r = n.width, i = n.height;else if (e *= a, t *= a, void 0 === r && void 0 === i) return e < 0 || t < 0 || e >= o.width || t >= o.height ? [0, 0, 0, 0] : this._getPixel(e, t);
        var s = new l.default.Image(r, i);
        return s.canvas.getContext("2d").drawImage(o, e, t, r * a, i * a, 0, 0, r, i), s;
      }, l.default.Renderer.prototype.textLeading = function (e) {
        return "number" == typeof e ? (this._setProperty("_textLeading", e), this._pInst) : this._textLeading;
      }, l.default.Renderer.prototype.textSize = function (e) {
        return "number" == typeof e ? (this._setProperty("_textSize", e), this._setProperty("_textLeading", e * T._DEFAULT_LEADMULT), this._applyTextProperties()) : this._textSize;
      }, l.default.Renderer.prototype.textStyle = function (e) {
        return e ? (e !== T.NORMAL && e !== T.ITALIC && e !== T.BOLD && e !== T.BOLDITALIC || this._setProperty("_textStyle", e), this._applyTextProperties()) : this._textStyle;
      }, l.default.Renderer.prototype.textAscent = function () {
        return null === this._textAscent && this._updateTextMetrics(), this._textAscent;
      }, l.default.Renderer.prototype.textDescent = function () {
        return null === this._textDescent && this._updateTextMetrics(), this._textDescent;
      }, l.default.Renderer.prototype.textAlign = function (e, t) {
        return void 0 !== e ? (this._setProperty("_textAlign", e), void 0 !== t && this._setProperty("_textBaseline", t), this._applyTextProperties()) : {
          horizontal: this._textAlign,
          vertical: this._textBaseline
        };
      }, l.default.Renderer.prototype.text = function (e, t, r, i, n) {
        var a,
            o,
            s,
            l,
            u,
            h,
            c,
            f,
            d,
            p = this._pInst,
            m = Number.MAX_VALUE;

        if ((this._doFill || this._doStroke) && void 0 !== e) {
          if ("string" != typeof e && (e = e.toString()), a = (e = e.replace(/(\t)/g, "  ")).split("\n"), void 0 !== i) {
            for (s = f = 0; s < a.length; s++) {
              for (u = "", c = a[s].split(" "), o = 0; o < c.length; o++) if (h = "".concat(u + c[o], " "), i < this.textWidth(h)) {
                for (var y = c[o], v = 0; v < y.length; v++) h = "".concat(u + y[v]), i < this.textWidth(h) && 0 < u.length ? (u = "".concat(y[v]), f += p.textLeading()) : u = h;

                u = "".concat(u, " ");
              } else u = h;

              s < a.length - 1 && (f += p.textLeading());
            }

            switch (this._rectMode === T.CENTER && (t -= i / 2, r -= n / 2), this._textAlign) {
              case T.CENTER:
                t += i / 2;
                break;

              case T.RIGHT:
                t += i;
            }

            var g = !1;

            if (void 0 !== n) {
              switch (this._textBaseline) {
                case T.BOTTOM:
                  d = r + (n - f), r = Math.max(d, r);
                  break;

                case T.CENTER:
                  d = r + (n - f) / 2, r = Math.max(d, r);
                  break;

                case T.BASELINE:
                  g = !0, this._textBaseline = T.TOP;
              }

              m = r + n - p.textAscent();
            }

            for (s = 0; s < a.length; s++) {
              for (u = "", c = a[s].split(" "), o = 0; o < c.length; o++) if (h = "".concat(u + c[o], " "), i < this.textWidth(h)) {
                for (var b = c[o], _ = 0; _ < b.length; _++) if (h = "".concat(u + b[_]), i < this.textWidth(h) && 0 < u.length) {
                  var x = u.slice(-1),
                      w = "\n" !== x && " " !== x;
                  u = "".concat(u).concat(w ? "-" : ""), this._renderText(p, u, t, r, m), r += p.textLeading(), u = "".concat(b[_]);
                } else u = h;

                u = "".concat(u, " ");
              } else u = h;

              this._renderText(p, u, t, r, m), r += p.textLeading(), g && (this._textBaseline = T.BASELINE);
            }
          } else {
            var S = 0,
                M = p.textAlign().vertical;

            for (M === T.CENTER ? S = (a.length - 1) * p.textLeading() / 2 : M === T.BOTTOM && (S = (a.length - 1) * p.textLeading()), l = 0; l < a.length; l++) this._renderText(p, a[l], t, r - S, m), r += p.textLeading();
          }

          return p;
        }
      }, l.default.Renderer.prototype._applyDefaults = function () {
        return this;
      }, l.default.Renderer.prototype._isOpenType = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this._textFont;
        return "object" === s(e) && e.font && e.font.supported;
      }, l.default.Renderer.prototype._updateTextMetrics = function () {
        if (this._isOpenType()) return this._setProperty("_textAscent", this._textFont._textAscent()), this._setProperty("_textDescent", this._textFont._textDescent()), this;
        var e = document.createElement("span");
        e.style.fontFamily = this._textFont, e.style.fontSize = "".concat(this._textSize, "px"), e.innerHTML = "ABCjgq|";
        var t = document.createElement("div");
        t.style.display = "inline-block", t.style.width = "1px", t.style.height = "0px";
        var r = document.createElement("div");
        r.appendChild(e), r.appendChild(t), r.style.height = "0px", r.style.overflow = "hidden", document.body.appendChild(r), t.style.verticalAlign = "baseline";
        var i = u(t),
            n = u(e),
            a = i[1] - n[1];
        t.style.verticalAlign = "bottom", i = u(t), n = u(e);
        var o = i[1] - n[1] - a;
        return document.body.removeChild(r), this._setProperty("_textAscent", a), this._setProperty("_textDescent", o), this;
      };
      var n = l.default.Renderer;
      r.default = n;
    }, {
      "../core/constants": 26,
      "./main": 36
    }],
    40: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var c = i(e("./main")),
          p = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants")),
          f = i(e("../image/filters"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      e("./p5.Renderer");
      var y = "rgba(0,0,0,0)";
      c.default.Renderer2D = function (e, t, r) {
        return c.default.Renderer.call(this, e, t, r), this.drawingContext = this.canvas.getContext("2d"), this._pInst._setProperty("drawingContext", this.drawingContext), this;
      }, c.default.Renderer2D.prototype = Object.create(c.default.Renderer.prototype), c.default.Renderer2D.prototype._applyDefaults = function () {
        this._cachedFillStyle = this._cachedStrokeStyle = void 0, this._cachedBlendMode = p.BLEND, this._setFill(p._DEFAULT_FILL), this._setStroke(p._DEFAULT_STROKE), this.drawingContext.lineCap = p.ROUND, this.drawingContext.font = "normal 12px sans-serif";
      }, c.default.Renderer2D.prototype.resize = function (e, t) {
        c.default.Renderer.prototype.resize.call(this, e, t), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity);
      }, c.default.Renderer2D.prototype.background = function () {
        if (this.drawingContext.save(), this.resetMatrix(), (arguments.length <= 0 ? void 0 : arguments[0]) instanceof c.default.Image) this._pInst.image(arguments.length <= 0 ? void 0 : arguments[0], 0, 0, this.width, this.height);else {
          var e,
              t = this._getFill(),
              r = (e = this._pInst).color.apply(e, arguments);

          this._pInst._addAccsOutput() && this._pInst._accsBackground(r.levels);
          var i = r.toString();
          this._setFill(i), this._isErasing && this.blendMode(this._cachedBlendMode), this.drawingContext.fillRect(0, 0, this.width, this.height), this._setFill(t), this._isErasing && this._pInst.erase();
        }
        this.drawingContext.restore();
      }, c.default.Renderer2D.prototype.clear = function () {
        this.drawingContext.save(), this.resetMatrix(), this.drawingContext.clearRect(0, 0, this.width, this.height), this.drawingContext.restore();
      }, c.default.Renderer2D.prototype.fill = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments);

        this._setFill(t.toString()), this._pInst._addAccsOutput() && this._pInst._accsCanvasColors("fill", t.levels);
      }, c.default.Renderer2D.prototype.stroke = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments);

        this._setStroke(t.toString()), this._pInst._addAccsOutput() && this._pInst._accsCanvasColors("stroke", t.levels);
      }, c.default.Renderer2D.prototype.erase = function (e, t) {
        if (!this._isErasing) {
          this._cachedFillStyle = this.drawingContext.fillStyle;

          var r = this._pInst.color(255, e).toString();

          this.drawingContext.fillStyle = r, this._cachedStrokeStyle = this.drawingContext.strokeStyle;

          var i = this._pInst.color(255, t).toString();

          this.drawingContext.strokeStyle = i;
          var n = this._cachedBlendMode;
          this.blendMode(p.REMOVE), this._cachedBlendMode = n, this._isErasing = !0;
        }
      }, c.default.Renderer2D.prototype.noErase = function () {
        this._isErasing && (this.drawingContext.fillStyle = this._cachedFillStyle, this.drawingContext.strokeStyle = this._cachedStrokeStyle, this.blendMode(this._cachedBlendMode), this._isErasing = !1);
      }, c.default.Renderer2D.prototype.image = function (e, t, r, i, n, a, o, s, l) {
        var u;
        e.gifProperties && e._animateGif(this._pInst);

        try {
          this._tint && (c.default.MediaElement && e instanceof c.default.MediaElement && e.loadPixels(), e.canvas && (u = this._getTintedImageCanvas(e))), u = u || e.canvas || e.elt;
          var h = 1;
          e.width && 0 < e.width && (h = u.width / e.width), this._isErasing && this.blendMode(this._cachedBlendMode), this.drawingContext.drawImage(u, h * t, h * r, h * i, h * n, a, o, s, l), this._isErasing && this._pInst.erase();
        } catch (e) {
          if ("NS_ERROR_NOT_AVAILABLE" !== e.name) throw e;
        }
      }, c.default.Renderer2D.prototype._getTintedImageCanvas = function (e) {
        if (!e.canvas) return e;

        var t = f.default._toPixels(e.canvas),
            r = document.createElement("canvas");

        r.width = e.canvas.width, r.height = e.canvas.height;

        for (var i = r.getContext("2d"), n = i.createImageData(e.canvas.width, e.canvas.height), a = n.data, o = 0; o < t.length; o += 4) {
          var s = t[o],
              l = t[o + 1],
              u = t[o + 2],
              h = t[o + 3];
          a[o] = s * this._tint[0] / 255, a[o + 1] = l * this._tint[1] / 255, a[o + 2] = u * this._tint[2] / 255, a[o + 3] = h * this._tint[3] / 255;
        }

        return i.putImageData(n, 0, 0), r;
      }, c.default.Renderer2D.prototype.blendMode = function (e) {
        if (e === p.SUBTRACT) console.warn("blendMode(SUBTRACT) only works in WEBGL mode.");else {
          if (e !== p.BLEND && e !== p.REMOVE && e !== p.DARKEST && e !== p.LIGHTEST && e !== p.DIFFERENCE && e !== p.MULTIPLY && e !== p.EXCLUSION && e !== p.SCREEN && e !== p.REPLACE && e !== p.OVERLAY && e !== p.HARD_LIGHT && e !== p.SOFT_LIGHT && e !== p.DODGE && e !== p.BURN && e !== p.ADD) throw new Error("Mode ".concat(e, " not recognized."));
          this._cachedBlendMode = e, this.drawingContext.globalCompositeOperation = e;
        }
      }, c.default.Renderer2D.prototype.blend = function () {
        for (var e = this.drawingContext.globalCompositeOperation, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        var n = r[r.length - 1],
            a = Array.prototype.slice.call(r, 0, r.length - 1);
        this.drawingContext.globalCompositeOperation = n, c.default.prototype.copy.apply(this, a), this.drawingContext.globalCompositeOperation = e;
      }, c.default.Renderer2D.prototype._getPixel = function (e, t) {
        var r;
        return [(r = this.drawingContext.getImageData(e, t, 1, 1).data)[0], r[1], r[2], r[3]];
      }, c.default.Renderer2D.prototype.loadPixels = function () {
        var e = this._pixelsState,
            t = e._pixelDensity,
            r = this.width * t,
            i = this.height * t,
            n = this.drawingContext.getImageData(0, 0, r, i);
        e._setProperty("imageData", n), e._setProperty("pixels", n.data);
      }, c.default.Renderer2D.prototype.set = function (e, t, r) {
        e = Math.floor(e), t = Math.floor(t);
        var i = this._pixelsState;
        if (r instanceof c.default.Image) this.drawingContext.save(), this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(i._pixelDensity, i._pixelDensity), this.drawingContext.clearRect(e, t, r.width, r.height), this.drawingContext.drawImage(r.canvas, e, t), this.drawingContext.restore();else {
          var n = 0,
              a = 0,
              o = 0,
              s = 0,
              l = 4 * (t * i._pixelDensity * (this.width * i._pixelDensity) + e * i._pixelDensity);
          if (i.imageData || i.loadPixels.call(i), "number" == typeof r) l < i.pixels.length && (o = a = n = r, s = 255);else if (r instanceof Array) {
            if (r.length < 4) throw new Error("pixel array must be of the form [R, G, B, A]");
            l < i.pixels.length && (n = r[0], a = r[1], o = r[2], s = r[3]);
          } else r instanceof c.default.Color && l < i.pixels.length && (n = r.levels[0], a = r.levels[1], o = r.levels[2], s = r.levels[3]);

          for (var u = 0; u < i._pixelDensity; u++) for (var h = 0; h < i._pixelDensity; h++) l = 4 * ((t * i._pixelDensity + h) * this.width * i._pixelDensity + (e * i._pixelDensity + u)), i.pixels[l] = n, i.pixels[l + 1] = a, i.pixels[l + 2] = o, i.pixels[l + 3] = s;
        }
      }, c.default.Renderer2D.prototype.updatePixels = function (e, t, r, i) {
        var n = this._pixelsState,
            a = n._pixelDensity;
        void 0 === e && void 0 === t && void 0 === r && void 0 === i && (t = e = 0, r = this.width, i = this.height), e *= a, t *= a, r *= a, i *= a, this.gifProperties && (this.gifProperties.frames[this.gifProperties.displayIndex].image = n.imageData), this.drawingContext.putImageData(n.imageData, e, t, 0, 0, r, i);
      }, c.default.Renderer2D.prototype._acuteArcToBezier = function (e, t) {
        var r = t / 2,
            i = Math.cos(r),
            n = Math.sin(r),
            a = 1 / Math.tan(r),
            o = e + r,
            s = Math.cos(o),
            l = Math.sin(o),
            u = (4 - i) / 3,
            h = n + (i - u) * a;
        return {
          ax: Math.cos(e).toFixed(7),
          ay: Math.sin(e).toFixed(7),
          bx: (u * s + h * l).toFixed(7),
          by: (u * l - h * s).toFixed(7),
          cx: (u * s - h * l).toFixed(7),
          cy: (u * l + h * s).toFixed(7),
          dx: Math.cos(e + t).toFixed(7),
          dy: Math.sin(e + t).toFixed(7)
        };
      }, c.default.Renderer2D.prototype.arc = function (r, i, e, t, n, a, o) {
        var s = this.drawingContext,
            l = e / 2,
            u = t / 2,
            h = 0,
            c = [];

        for (r += l, i += u; 1e-5 <= a - n;) h = Math.min(a - n, p.HALF_PI), c.push(this._acuteArcToBezier(n, h)), n += h;

        return this._doFill && (s.beginPath(), c.forEach(function (e, t) {
          0 === t && s.moveTo(r + e.ax * l, i + e.ay * u), s.bezierCurveTo(r + e.bx * l, i + e.by * u, r + e.cx * l, i + e.cy * u, r + e.dx * l, i + e.dy * u);
        }), o !== p.PIE && null != o || s.lineTo(r, i), s.closePath(), s.fill()), this._doStroke && (s.beginPath(), c.forEach(function (e, t) {
          0 === t && s.moveTo(r + e.ax * l, i + e.ay * u), s.bezierCurveTo(r + e.bx * l, i + e.by * u, r + e.cx * l, i + e.cy * u, r + e.dx * l, i + e.dy * u);
        }), o === p.PIE ? (s.lineTo(r, i), s.closePath()) : o === p.CHORD && s.closePath(), s.stroke()), this;
      }, c.default.Renderer2D.prototype.ellipse = function (e) {
        var t = this.drawingContext,
            r = this._doFill,
            i = this._doStroke,
            n = parseFloat(e[0]),
            a = parseFloat(e[1]),
            o = parseFloat(e[2]),
            s = parseFloat(e[3]);

        if (r && !i) {
          if (this._getFill() === y) return this;
        } else if (!r && i && this._getStroke() === y) return this;

        var l = o / 2 * .5522847498,
            u = s / 2 * .5522847498,
            h = n + o,
            c = a + s,
            f = n + o / 2,
            d = a + s / 2;
        t.beginPath(), t.moveTo(n, d), t.bezierCurveTo(n, d - u, f - l, a, f, a), t.bezierCurveTo(f + l, a, h, d - u, h, d), t.bezierCurveTo(h, d + u, f + l, c, f, c), t.bezierCurveTo(f - l, c, n, d + u, n, d), r && t.fill(), i && t.stroke();
      }, c.default.Renderer2D.prototype.line = function (e, t, r, i) {
        var n = this.drawingContext;
        return this._doStroke && (this._getStroke() === y || (n.beginPath(), n.moveTo(e, t), n.lineTo(r, i), n.stroke())), this;
      }, c.default.Renderer2D.prototype.point = function (e, t) {
        var r = this.drawingContext;
        if (!this._doStroke) return this;
        if (this._getStroke() === y) return this;

        var i = this._getStroke(),
            n = this._getFill();

        e = Math.round(e), t = Math.round(t), this._setFill(i), 1 < r.lineWidth ? (r.beginPath(), r.arc(e, t, r.lineWidth / 2, 0, p.TWO_PI, !1), r.fill()) : r.fillRect(e, t, 1, 1), this._setFill(n);
      }, c.default.Renderer2D.prototype.quad = function (e, t, r, i, n, a, o, s) {
        var l = this.drawingContext,
            u = this._doFill,
            h = this._doStroke;

        if (u && !h) {
          if (this._getFill() === y) return this;
        } else if (!u && h && this._getStroke() === y) return this;

        return l.beginPath(), l.moveTo(e, t), l.lineTo(r, i), l.lineTo(n, a), l.lineTo(o, s), l.closePath(), u && l.fill(), h && l.stroke(), this;
      }, c.default.Renderer2D.prototype.rect = function (e) {
        var t = e[0],
            r = e[1],
            i = e[2],
            n = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            l = e[7],
            u = this.drawingContext,
            h = this._doFill,
            c = this._doStroke;

        if (h && !c) {
          if (this._getFill() === y) return this;
        } else if (!h && c && this._getStroke() === y) return this;

        if (u.beginPath(), void 0 === a) u.rect(t, r, i, n);else {
          void 0 === o && (o = a), void 0 === s && (s = o), void 0 === l && (l = s);
          var f = Math.abs(i),
              d = Math.abs(n),
              p = f / 2,
              m = d / 2;
          f < 2 * a && (a = p), d < 2 * a && (a = m), f < 2 * o && (o = p), d < 2 * o && (o = m), f < 2 * s && (s = p), d < 2 * s && (s = m), f < 2 * l && (l = p), d < 2 * l && (l = m), u.beginPath(), u.moveTo(t + a, r), u.arcTo(t + i, r, t + i, r + n, o), u.arcTo(t + i, r + n, t, r + n, s), u.arcTo(t, r + n, t, r, l), u.arcTo(t, r, t + i, r, a), u.closePath();
        }
        return this._doFill && u.fill(), this._doStroke && u.stroke(), this;
      }, c.default.Renderer2D.prototype.triangle = function (e) {
        var t = this.drawingContext,
            r = this._doFill,
            i = this._doStroke,
            n = e[0],
            a = e[1],
            o = e[2],
            s = e[3],
            l = e[4],
            u = e[5];

        if (r && !i) {
          if (this._getFill() === y) return this;
        } else if (!r && i && this._getStroke() === y) return this;

        t.beginPath(), t.moveTo(n, a), t.lineTo(o, s), t.lineTo(l, u), t.closePath(), r && t.fill(), i && t.stroke();
      }, c.default.Renderer2D.prototype.endShape = function (e, t, r, i, n, a, o) {
        if (0 === t.length) return this;
        if (!this._doStroke && !this._doFill) return this;
        var s,
            l,
            u,
            h = e === p.CLOSE;
        h && !a && t.push(t[0]);
        var c = t.length;
        if (!r || o !== p.POLYGON && null !== o) {
          if (!i || o !== p.POLYGON && null !== o) {
            if (!n || o !== p.POLYGON && null !== o) {
              if (o === p.POINTS) for (l = 0; l < c; l++) s = t[l], this._doStroke && this._pInst.stroke(s[6]), this._pInst.point(s[0], s[1]);else if (o === p.LINES) for (l = 0; l + 1 < c; l += 2) s = t[l], this._doStroke && this._pInst.stroke(t[l + 1][6]), this._pInst.line(s[0], s[1], t[l + 1][0], t[l + 1][1]);else if (o === p.TRIANGLES) for (l = 0; l + 2 < c; l += 3) s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(t[l + 2][0], t[l + 2][1]), this.drawingContext.closePath(), this._doFill && (this._pInst.fill(t[l + 2][5]), this.drawingContext.fill()), this._doStroke && (this._pInst.stroke(t[l + 2][6]), this.drawingContext.stroke());else if (o === p.TRIANGLE_STRIP) for (l = 0; l + 1 < c; l++) s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(s[0], s[1]), this._doStroke && this._pInst.stroke(t[l + 1][6]), this._doFill && this._pInst.fill(t[l + 1][5]), l + 2 < c && (this.drawingContext.lineTo(t[l + 2][0], t[l + 2][1]), this._doStroke && this._pInst.stroke(t[l + 2][6]), this._doFill && this._pInst.fill(t[l + 2][5])), this._doFillStrokeClose(h);else if (o === p.TRIANGLE_FAN) {
                if (2 < c) {
                  for (this.drawingContext.beginPath(), l = 2; l < c; l++) s = t[l], this.drawingContext.moveTo(t[0][0], t[0][1]), this.drawingContext.lineTo(t[l - 1][0], t[l - 1][1]), this.drawingContext.lineTo(s[0], s[1]), this.drawingContext.lineTo(t[0][0], t[0][1]), l < c - 1 && (this._doFill && s[5] !== t[l + 1][5] || this._doStroke && s[6] !== t[l + 1][6]) && (this._doFill && (this._pInst.fill(s[5]), this.drawingContext.fill(), this._pInst.fill(t[l + 1][5])), this._doStroke && (this._pInst.stroke(s[6]), this.drawingContext.stroke(), this._pInst.stroke(t[l + 1][6])), this.drawingContext.closePath(), this.drawingContext.beginPath());

                  this._doFillStrokeClose(h);
                }
              } else if (o === p.QUADS) for (l = 0; l + 3 < c; l += 4) {
                for (s = t[l], this.drawingContext.beginPath(), this.drawingContext.moveTo(s[0], s[1]), u = 1; u < 4; u++) this.drawingContext.lineTo(t[l + u][0], t[l + u][1]);

                this.drawingContext.lineTo(s[0], s[1]), this._doFill && this._pInst.fill(t[l + 3][5]), this._doStroke && this._pInst.stroke(t[l + 3][6]), this._doFillStrokeClose(h);
              } else if (o === p.QUAD_STRIP) {
                if (3 < c) for (l = 0; l + 1 < c; l += 2) s = t[l], this.drawingContext.beginPath(), l + 3 < c ? (this.drawingContext.moveTo(t[l + 2][0], t[l + 2][1]), this.drawingContext.lineTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this.drawingContext.lineTo(t[l + 3][0], t[l + 3][1]), this._doFill && this._pInst.fill(t[l + 3][5]), this._doStroke && this._pInst.stroke(t[l + 3][6])) : (this.drawingContext.moveTo(s[0], s[1]), this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1])), this._doFillStrokeClose(h);
              } else {
                for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[0][0], t[0][1]), l = 1; l < c; l++) (s = t[l]).isVert && (s.moveTo ? this.drawingContext.moveTo(s[0], s[1]) : this.drawingContext.lineTo(s[0], s[1]));

                this._doFillStrokeClose(h);
              }
            } else {
              for (this.drawingContext.beginPath(), l = 0; l < c; l++) t[l].isVert ? t[l].moveTo ? this.drawingContext.moveTo(t[l][0], t[l][1]) : this.drawingContext.lineTo(t[l][0], t[l][1]) : this.drawingContext.quadraticCurveTo(t[l][0], t[l][1], t[l][2], t[l][3]);

              this._doFillStrokeClose(h);
            }
          } else {
            for (this.drawingContext.beginPath(), l = 0; l < c; l++) t[l].isVert ? t[l].moveTo ? this.drawingContext.moveTo(t[l][0], t[l][1]) : this.drawingContext.lineTo(t[l][0], t[l][1]) : this.drawingContext.bezierCurveTo(t[l][0], t[l][1], t[l][2], t[l][3], t[l][4], t[l][5]);

            this._doFillStrokeClose(h);
          }
        } else if (3 < c) {
          var f = [],
              d = 1 - this._curveTightness;

          for (this.drawingContext.beginPath(), this.drawingContext.moveTo(t[1][0], t[1][1]), l = 1; l + 2 < c; l++) s = t[l], f[0] = [s[0], s[1]], f[1] = [s[0] + (d * t[l + 1][0] - d * t[l - 1][0]) / 6, s[1] + (d * t[l + 1][1] - d * t[l - 1][1]) / 6], f[2] = [t[l + 1][0] + (d * t[l][0] - d * t[l + 2][0]) / 6, t[l + 1][1] + (d * t[l][1] - d * t[l + 2][1]) / 6], f[3] = [t[l + 1][0], t[l + 1][1]], this.drawingContext.bezierCurveTo(f[1][0], f[1][1], f[2][0], f[2][1], f[3][0], f[3][1]);

          h && this.drawingContext.lineTo(t[l + 1][0], t[l + 1][1]), this._doFillStrokeClose(h);
        }
        return a = n = i = r = !1, h && t.pop(), this;
      }, c.default.Renderer2D.prototype.strokeCap = function (e) {
        return e !== p.ROUND && e !== p.SQUARE && e !== p.PROJECT || (this.drawingContext.lineCap = e), this;
      }, c.default.Renderer2D.prototype.strokeJoin = function (e) {
        return e !== p.ROUND && e !== p.BEVEL && e !== p.MITER || (this.drawingContext.lineJoin = e), this;
      }, c.default.Renderer2D.prototype.strokeWeight = function (e) {
        return this.drawingContext.lineWidth = void 0 === e || 0 === e ? 1e-4 : e, this;
      }, c.default.Renderer2D.prototype._getFill = function () {
        return this._cachedFillStyle || (this._cachedFillStyle = this.drawingContext.fillStyle), this._cachedFillStyle;
      }, c.default.Renderer2D.prototype._setFill = function (e) {
        e !== this._cachedFillStyle && (this.drawingContext.fillStyle = e, this._cachedFillStyle = e);
      }, c.default.Renderer2D.prototype._getStroke = function () {
        return this._cachedStrokeStyle || (this._cachedStrokeStyle = this.drawingContext.strokeStyle), this._cachedStrokeStyle;
      }, c.default.Renderer2D.prototype._setStroke = function (e) {
        e !== this._cachedStrokeStyle && (this.drawingContext.strokeStyle = e, this._cachedStrokeStyle = e);
      }, c.default.Renderer2D.prototype.bezier = function (e, t, r, i, n, a, o, s) {
        return this._pInst.beginShape(), this._pInst.vertex(e, t), this._pInst.bezierVertex(r, i, n, a, o, s), this._pInst.endShape(), this;
      }, c.default.Renderer2D.prototype.curve = function (e, t, r, i, n, a, o, s) {
        return this._pInst.beginShape(), this._pInst.curveVertex(e, t), this._pInst.curveVertex(r, i), this._pInst.curveVertex(n, a), this._pInst.curveVertex(o, s), this._pInst.endShape(), this;
      }, c.default.Renderer2D.prototype._doFillStrokeClose = function (e) {
        e && this.drawingContext.closePath(), this._doFill && this.drawingContext.fill(), this._doStroke && this.drawingContext.stroke();
      }, c.default.Renderer2D.prototype.applyMatrix = function (e, t, r, i, n, a) {
        this.drawingContext.transform(e, t, r, i, n, a);
      }, c.default.Renderer2D.prototype.resetMatrix = function () {
        return this.drawingContext.setTransform(1, 0, 0, 1, 0, 0), this.drawingContext.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), this;
      }, c.default.Renderer2D.prototype.rotate = function (e) {
        this.drawingContext.rotate(e);
      }, c.default.Renderer2D.prototype.scale = function (e, t) {
        return this.drawingContext.scale(e, t), this;
      }, c.default.Renderer2D.prototype.translate = function (e, t) {
        return e instanceof c.default.Vector && (t = e.y, e = e.x), this.drawingContext.translate(e, t), this;
      }, c.default.Renderer2D.prototype.text = function (e, t, r, i, n) {
        var a;
        void 0 !== i && this.drawingContext.textBaseline === p.BASELINE && (a = !0, this.drawingContext.textBaseline = p.TOP);
        var o = c.default.Renderer.prototype.text.apply(this, arguments);
        return a && (this.drawingContext.textBaseline = p.BASELINE), o;
      }, c.default.Renderer2D.prototype._renderText = function (e, t, r, i, n) {
        if (!(n <= i)) return e.push(), this._isOpenType() ? this._textFont._renderPath(t, r, i, {
          renderer: this
        }) : (this._doStroke && this._strokeSet && this.drawingContext.strokeText(t, r, i), this._doFill && (this._fillSet || this._setFill(p._DEFAULT_TEXT_FILL), this.drawingContext.fillText(t, r, i))), e.pop(), e;
      }, c.default.Renderer2D.prototype.textWidth = function (e) {
        return this._isOpenType() ? this._textFont._textWidth(e, this._textSize) : this.drawingContext.measureText(e).width;
      }, c.default.Renderer2D.prototype._applyTextProperties = function () {
        var e,
            t = this._pInst;
        return this._setProperty("_textAscent", null), this._setProperty("_textDescent", null), e = this._textFont, this._isOpenType() && (e = this._textFont.font.familyName, this._setProperty("_textStyle", this._textFont.font.styleName)), this.drawingContext.font = "".concat(this._textStyle || "normal", " ").concat(this._textSize || 12, "px ").concat(e || "sans-serif"), this.drawingContext.textAlign = this._textAlign, this._textBaseline === p.CENTER ? this.drawingContext.textBaseline = p._CTX_MIDDLE : this.drawingContext.textBaseline = this._textBaseline, t;
      }, c.default.Renderer2D.prototype.push = function () {
        return this.drawingContext.save(), c.default.Renderer.prototype.push.apply(this);
      }, c.default.Renderer2D.prototype.pop = function (e) {
        this.drawingContext.restore(), this._cachedFillStyle = this.drawingContext.fillStyle, this._cachedStrokeStyle = this.drawingContext.strokeStyle, c.default.Renderer.prototype.pop.call(this, e);
      };
      var n = c.default.Renderer2D;
      r.default = n;
    }, {
      "../image/filters": 57,
      "./constants": 26,
      "./main": 36,
      "./p5.Renderer": 39
    }],
    41: [function (e, t, r) {
      "use strict";

      var i,
          f = (i = e("./main")) && i.__esModule ? i : {
        default: i
      };
      f.default.prototype._promisePreloads = [];
      var d = !(f.default.prototype.registerPromisePreload = function (e) {
        f.default.prototype._promisePreloads.push(e);
      });
      f.default.prototype._setupPromisePreloads = function () {
        var e = !0,
            t = !1,
            r = void 0;

        try {
          for (var i, n = this._promisePreloads[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
            var a = i.value,
                o = this,
                s = a.method,
                l = a.addCallbacks,
                u = a.legacyPreloadSetup,
                h = a.target || this,
                c = h[s].bind(h);

            if (h === f.default.prototype) {
              if (d) continue;
              o = null, c = h[s];
            }

            if (h[s] = this._wrapPromisePreload(o, c, l), u) h[u.method] = this._legacyPreloadGenerator(o, u, h[s]);
          }
        } catch (e) {
          t = !0, r = e;
        } finally {
          try {
            e || null == n.return || n.return();
          } finally {
            if (t) throw r;
          }
        }

        d = !0;
      }, f.default.prototype._wrapPromisePreload = function (e, l, u) {
        var t = function () {
          var e = this;

          this._incrementPreload();

          for (var t = null, r = null, i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];

          if (u) for (var o = n.length - 1; 0 <= o && !r && "function" == typeof n[o]; o--) r = t, t = n.pop();
          var s = Promise.resolve(l.apply(this, n));
          return t && s.then(t), r && s.catch(r), s.then(function () {
            return e._decrementPreload();
          }), s;
        };

        return e && (t = t.bind(e)), t;
      };

      function a() {
        return {};
      }

      f.default.prototype._legacyPreloadGenerator = function (e, t, i) {
        var n = t.createBaseObject || a,
            r = function () {
          var t = this;

          this._incrementPreload();

          var r = n.apply(this, arguments);
          return i.apply(this, arguments).then(function (e) {
            Object.assign(r, e), t._decrementPreload();
          }), r;
        };

        return e && (r = r.bind(e)), r;
      };
    }, {
      "./main": 36
    }],
    42: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          l = (i = e("./main")) && i.__esModule ? i : {
        default: i
      },
          u = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== s(e) && "function" != typeof e) return {
          default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("./constants"));

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function () {
          return e;
        }, e;
      }

      function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      e("./p5.Graphics"), e("./p5.Renderer2D"), e("../webgl/p5.RendererGL");
      var h = "defaultCanvas0";
      l.default.prototype.createCanvas = function (e, t, r) {
        l.default._validateParameters("createCanvas", arguments);

        var i,
            n = r || u.P2D;

        if (n === u.WEBGL) {
          if (i = document.getElementById(h)) {
            i.parentNode.removeChild(i);
            var a = this._renderer;
            this._elements = this._elements.filter(function (e) {
              return e !== a;
            });
          }

          (i = document.createElement("canvas")).id = h, i.classList.add("p5Canvas");
        } else if (this._defaultGraphicsCreated) i = this.canvas;else {
          i = document.createElement("canvas");

          for (var o = 0; document.getElementById("defaultCanvas".concat(o));) o++;

          h = "defaultCanvas".concat(o), i.id = h, i.classList.add("p5Canvas");
        }

        if (this._setupDone || (i.dataset.hidden = !0, i.style.visibility = "hidden"), this._userNode) this._userNode.appendChild(i);else {
          if (0 === document.getElementsByTagName("main").length) {
            var s = document.createElement("main");
            document.body.appendChild(s);
          }

          document.getElementsByTagName("main")[0].appendChild(i);
        }
        return n === u.WEBGL ? (this._setProperty("_renderer", new l.default.RendererGL(i, this, !0)), this._elements.push(this._renderer)) : this._defaultGraphicsCreated || (this._setProperty("_renderer", new l.default.Renderer2D(i, this, !0)), this._defaultGraphicsCreated = !0, this._elements.push(this._renderer)), this._renderer.resize(e, t), this._renderer._applyDefaults(), this._renderer;
      }, l.default.prototype.resizeCanvas = function (e, t, r) {
        if (l.default._validateParameters("resizeCanvas", arguments), this._renderer) {
          var i = {};

          for (var n in this.drawingContext) {
            var a = this.drawingContext[n];
            "object" !== s(a) && "function" != typeof a && (i[n] = a);
          }

          for (var o in this._renderer.resize(e, t), this.width = e, this.height = t, i) try {
            this.drawingContext[o] = i[o];
          } catch (e) {}

          r || this.redraw();
        }

        this._addAccsOutput() && this._updateAccsOutput();
      }, l.default.prototype.noCanvas = function () {
        this.canvas && this.canvas.parentNode.removeChild(this.canvas);
      }, l.default.prototype.createGraphics = function (e, t, r) {
        return l.default._validateParameters("createGraphics", arguments), new l.default.Graphics(e, t, r, this);
      }, l.default.prototype.blendMode = function (e) {
        l.default._validateParameters("blendMode", arguments), e === u.NORMAL && (console.warn("NORMAL has been deprecated for use in blendMode. defaulting to BLEND instead."), e = u.BLEND), this._renderer.blendMode(e);
      };
      var n = l.default;
      r.default = n;
    }, {
      "../webgl/p5.RendererGL": 90,
      "./constants": 26,
      "./main": 36,
      "./p5.Graphics": 38,
      "./p5.Renderer2D": 40
    }],
    43: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var h = i(e("../main")),
          s = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = l();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants")),
          c = i(e("../helpers"));

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return l = function () {
          return e;
        }, e;
      }

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      e("../friendly_errors/fes_core"), e("../friendly_errors/file_errors"), e("../friendly_errors/validate_params"), h.default.prototype._normalizeArcAngles = function (e, t, r, i, n) {
        var a;
        return e -= s.TWO_PI * Math.floor(e / s.TWO_PI), t -= s.TWO_PI * Math.floor(t / s.TWO_PI), a = Math.min(Math.abs(e - t), s.TWO_PI - Math.abs(e - t)), n && (e = e <= s.HALF_PI ? Math.atan(r / i * Math.tan(e)) : e > s.HALF_PI && e <= 3 * s.HALF_PI ? Math.atan(r / i * Math.tan(e)) + s.PI : Math.atan(r / i * Math.tan(e)) + s.TWO_PI, t = t <= s.HALF_PI ? Math.atan(r / i * Math.tan(t)) : t > s.HALF_PI && t <= 3 * s.HALF_PI ? Math.atan(r / i * Math.tan(t)) + s.PI : Math.atan(r / i * Math.tan(t)) + s.TWO_PI), t < e && (t += s.TWO_PI), {
          start: e,
          stop: t,
          correspondToSamePoint: a < 1e-5
        };
      }, h.default.prototype.arc = function (e, t, r, i, n, a, o, s) {
        if (h.default._validateParameters("arc", arguments), !this._renderer._doStroke && !this._renderer._doFill) return this;
        if (n === a) return this;
        n = this._toRadians(n), a = this._toRadians(a), r = Math.abs(r), i = Math.abs(i);

        var l = c.default.modeAdjust(e, t, r, i, this._renderer._ellipseMode),
            u = this._normalizeArcAngles(n, a, l.w, l.h, !0);

        return u.correspondToSamePoint ? this._renderer.ellipse([l.x, l.y, l.w, l.h, s]) : (this._renderer.arc(l.x, l.y, l.w, l.h, u.start, u.stop, o, s), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("arc", [l.x, l.y, l.w, l.h, u.start, u.stop, o])), this;
      }, h.default.prototype.ellipse = function (e, t, r, i, n) {
        return h.default._validateParameters("ellipse", arguments), this._renderEllipse.apply(this, arguments);
      }, h.default.prototype.circle = function () {
        h.default._validateParameters("circle", arguments);

        var e = Array.prototype.slice.call(arguments, 0, 2);
        return e.push(arguments[2]), e.push(arguments[2]), this._renderEllipse.apply(this, e);
      }, h.default.prototype._renderEllipse = function (e, t, r, i, n) {
        if (!this._renderer._doStroke && !this._renderer._doFill) return this;
        r < 0 && (r = Math.abs(r)), void 0 === i ? i = r : i < 0 && (i = Math.abs(i));
        var a = c.default.modeAdjust(e, t, r, i, this._renderer._ellipseMode);
        return this._renderer.ellipse([a.x, a.y, a.w, a.h, n]), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("ellipse", [a.x, a.y, a.w, a.h]), this;
      }, h.default.prototype.line = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        h.default._validateParameters("line", t), this._renderer._doStroke && (i = this._renderer).line.apply(i, t);
        return (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("line", t), this;
      }, h.default.prototype.point = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        h.default._validateParameters("point", t), this._renderer._doStroke && (1 === t.length && t[0] instanceof h.default.Vector ? this._renderer.point.call(this._renderer, t[0].x, t[0].y, t[0].z) : ((i = this._renderer).point.apply(i, t), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("point", t)));
        return this;
      }, h.default.prototype.quad = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        h.default._validateParameters("quad", t), (this._renderer._doStroke || this._renderer._doFill) && (this._renderer.isP3D && t.length <= 12 ? this._renderer.quad.call(this._renderer, t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 0, t[6], t[7], 0, t[8], t[9]) : ((i = this._renderer).quad.apply(i, t), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("quadrilateral", t)));
        return this;
      }, h.default.prototype.rect = function () {
        return h.default._validateParameters("rect", arguments), this._renderRect.apply(this, arguments);
      }, h.default.prototype.square = function (e, t, r, i, n, a, o) {
        return h.default._validateParameters("square", arguments), this._renderRect.call(this, e, t, r, r, i, n, a, o);
      }, h.default.prototype._renderRect = function () {
        if (this._renderer._doStroke || this._renderer._doFill) {
          3 === arguments.length && (arguments[3] = arguments[2]);

          for (var e = c.default.modeAdjust(arguments[0], arguments[1], arguments[2], arguments[3], this._renderer._rectMode), t = [e.x, e.y, e.w, e.h], r = 4; r < arguments.length; r++) t[r] = arguments[r];

          this._renderer.rect(t), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("rectangle", [e.x, e.y, e.w, e.h]);
        }

        return this;
      }, h.default.prototype.triangle = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return h.default._validateParameters("triangle", t), (this._renderer._doStroke || this._renderer._doFill) && this._renderer.triangle(t), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._accsOutput("triangle", t), this;
      };
      var n = h.default;
      r.default = n;
    }, {
      "../constants": 26,
      "../friendly_errors/fes_core": 28,
      "../friendly_errors/file_errors": 29,
      "../friendly_errors/validate_params": 31,
      "../helpers": 32,
      "../main": 36
    }],
    44: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      n.default.prototype.ellipseMode = function (e) {
        return n.default._validateParameters("ellipseMode", arguments), e !== a.CORNER && e !== a.CORNERS && e !== a.RADIUS && e !== a.CENTER || (this._renderer._ellipseMode = e), this;
      }, n.default.prototype.noSmooth = function () {
        return this.setAttributes("antialias", !1), this._renderer.isP3D || "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !1), this;
      }, n.default.prototype.rectMode = function (e) {
        return n.default._validateParameters("rectMode", arguments), e !== a.CORNER && e !== a.CORNERS && e !== a.RADIUS && e !== a.CENTER || (this._renderer._rectMode = e), this;
      }, n.default.prototype.smooth = function () {
        return this.setAttributes("antialias", !0), this._renderer.isP3D || "imageSmoothingEnabled" in this.drawingContext && (this.drawingContext.imageSmoothingEnabled = !0), this;
      }, n.default.prototype.strokeCap = function (e) {
        return n.default._validateParameters("strokeCap", arguments), e !== a.ROUND && e !== a.SQUARE && e !== a.PROJECT || this._renderer.strokeCap(e), this;
      }, n.default.prototype.strokeJoin = function (e) {
        return n.default._validateParameters("strokeJoin", arguments), e !== a.ROUND && e !== a.BEVEL && e !== a.MITER || this._renderer.strokeJoin(e), this;
      }, n.default.prototype.strokeWeight = function (e) {
        return n.default._validateParameters("strokeWeight", arguments), this._renderer.strokeWeight(e), this;
      };
      var l = n.default;
      r.default = l;
    }, {
      "../constants": 26,
      "../main": 36
    }],
    45: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          s = (i = e("../main")) && i.__esModule ? i : {
        default: i
      };
      e("../friendly_errors/fes_core"), e("../friendly_errors/file_errors"), e("../friendly_errors/validate_params"), s.default.prototype.bezier = function () {
        for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return s.default._validateParameters("bezier", r), (this._renderer._doStroke || this._renderer._doFill) && (e = this._renderer).bezier.apply(e, r), this;
      }, s.default.prototype.bezierDetail = function (e) {
        return s.default._validateParameters("bezierDetail", arguments), this._bezierDetail = e, this;
      }, s.default.prototype.bezierPoint = function (e, t, r, i, n) {
        s.default._validateParameters("bezierPoint", arguments);

        var a = 1 - n;
        return Math.pow(a, 3) * e + 3 * Math.pow(a, 2) * n * t + 3 * a * Math.pow(n, 2) * r + Math.pow(n, 3) * i;
      }, s.default.prototype.bezierTangent = function (e, t, r, i, n) {
        s.default._validateParameters("bezierTangent", arguments);

        var a = 1 - n;
        return 3 * i * Math.pow(n, 2) - 3 * r * Math.pow(n, 2) + 6 * r * a * n - 6 * t * a * n + 3 * t * Math.pow(a, 2) - 3 * e * Math.pow(a, 2);
      }, s.default.prototype.curve = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        s.default._validateParameters("curve", t), this._renderer._doStroke && (i = this._renderer).curve.apply(i, t);
        return this;
      }, s.default.prototype.curveDetail = function (e) {
        return s.default._validateParameters("curveDetail", arguments), this._curveDetail = e < 3 ? 3 : e, this;
      }, s.default.prototype.curveTightness = function (e) {
        return s.default._validateParameters("curveTightness", arguments), this._renderer._curveTightness = e, this;
      }, s.default.prototype.curvePoint = function (e, t, r, i, n) {
        s.default._validateParameters("curvePoint", arguments);

        var a = n * n * n,
            o = n * n;
        return e * (-.5 * a + o - .5 * n) + t * (1.5 * a - 2.5 * o + 1) + r * (-1.5 * a + 2 * o + .5 * n) + i * (.5 * a - .5 * o);
      }, s.default.prototype.curveTangent = function (e, t, r, i, n) {
        s.default._validateParameters("curveTangent", arguments);

        var a = n * n;
        return e * (-3 * a / 2 + 2 * n - .5) + t * (9 * a / 2 - 5 * n) + r * (-9 * a / 2 + 4 * n + .5) + i * (3 * a / 2 - n);
      };
      var n = s.default;
      r.default = n;
    }, {
      "../friendly_errors/fes_core": 28,
      "../friendly_errors/file_errors": 29,
      "../friendly_errors/validate_params": 31,
      "../main": 36
    }],
    46: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          s = (i = e("../main")) && i.__esModule ? i : {
        default: i
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function () {
          return e;
        }, e;
      }

      var n = null,
          h = [],
          c = [],
          f = !1,
          a = !1,
          d = !1,
          p = !1,
          m = !0;
      s.default.prototype.beginContour = function () {
        return c = [], p = !0, this;
      }, s.default.prototype.beginShape = function (e) {
        var t;
        (s.default._validateParameters("beginShape", arguments), this._renderer.isP3D) ? (t = this._renderer).beginShape.apply(t, arguments) : (n = e === l.POINTS || e === l.LINES || e === l.TRIANGLES || e === l.TRIANGLE_FAN || e === l.TRIANGLE_STRIP || e === l.QUADS || e === l.QUAD_STRIP ? e : null, h = [], c = []);
        return this;
      }, s.default.prototype.bezierVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        if (s.default._validateParameters("bezierVertex", t), this._renderer.isP3D) (i = this._renderer).bezierVertex.apply(i, t);else if (0 === h.length) s.default._friendlyError("vertex() must be used once before calling bezierVertex()", "bezierVertex");else {
          f = !0;

          for (var n = [], a = 0; a < t.length; a++) n[a] = t[a];

          n.isVert = !1, p ? c.push(n) : h.push(n);
        }
        return this;
      }, s.default.prototype.curveVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        (s.default._validateParameters("curveVertex", t), this._renderer.isP3D) ? (i = this._renderer).curveVertex.apply(i, t) : (a = !0, this.vertex(t[0], t[1]));
        return this;
      }, s.default.prototype.endContour = function () {
        var e = c[0].slice();
        e.isVert = c[0].isVert, e.moveTo = !1, c.push(e), m && (h.push(h[0]), m = !1);

        for (var t = 0; t < c.length; t++) h.push(c[t]);

        return this;
      }, s.default.prototype.endShape = function (e) {
        if (s.default._validateParameters("endShape", arguments), this._renderer.isP3D) this._renderer.endShape(e, a, f, d, p, n);else {
          if (0 === h.length) return this;
          if (!this._renderer._doStroke && !this._renderer._doFill) return this;
          var t = e === l.CLOSE;
          t && !p && h.push(h[0]), this._renderer.endShape(e, h, a, f, d, p, n), m = !(p = d = f = a = !1), t && h.pop();
        }
        return this;
      }, s.default.prototype.quadraticVertex = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        if (s.default._validateParameters("quadraticVertex", t), this._renderer.isP3D) {
          var i;

          (i = this._renderer).quadraticVertex.apply(i, t);
        } else {
          if (this._contourInited) {
            var n = {};
            return n.x = t[0], n.y = t[1], n.x3 = t[2], n.y3 = t[3], n.type = l.QUADRATIC, this._contourVertices.push(n), this;
          }

          if (0 < h.length) {
            d = !0;

            for (var a = [], o = 0; o < t.length; o++) a[o] = t[o];

            a.isVert = !1, p ? c.push(a) : h.push(a);
          } else s.default._friendlyError("vertex() must be used once before calling quadraticVertex()", "quadraticVertex");
        }

        return this;
      }, s.default.prototype.vertex = function (e, t, r, i, n) {
        if (this._renderer.isP3D) {
          var a;

          (a = this._renderer).vertex.apply(a, arguments);
        } else {
          var o = [];
          o.isVert = !0, o[0] = e, o[1] = t, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = this._renderer._getFill(), o[6] = this._renderer._getStroke(), r && (o.moveTo = r), p ? (0 === c.length && (o.moveTo = !0), c.push(o)) : h.push(o);
        }

        return this;
      };
      var y = s.default;
      r.default = y;
    }, {
      "../constants": 26,
      "../main": 36
    }],
    47: [function (e, t, r) {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
        window.setTimeout(e, 1e3 / 60);
      }, "undefined" == typeof Uint8ClampedArray || Uint8ClampedArray.prototype.slice || Object.defineProperty(Uint8ClampedArray.prototype, "slice", {
        value: Array.prototype.slice,
        writable: !0,
        configurable: !0,
        enumerable: !1
      }), function () {
        if (!Object.assign) {
          var s = Object.keys,
              e = Object.defineProperty,
              l = "function" == typeof Symbol && "symbol" === i(Symbol()),
              r = Object.prototype.propertyIsEnumerable,
              u = function (t) {
            return function (e) {
              return r.call(t, e);
            };
          };

          e(Object, "assign", {
            value: function (e, t) {
              if (null == e) throw new TypeError("target must be an object");
              var r,
                  i,
                  n,
                  a,
                  o = Object(e);

              for (r = 1; r < arguments.length; ++r) for (i = Object(arguments[r]), a = s(i), l && Object.getOwnPropertySymbols && a.push.apply(a, Object.getOwnPropertySymbols(i).filter(u(i))), n = 0; n < a.length; ++n) o[a[n]] = i[a[n]];

              return o;
            },
            configurable: !0,
            enumerable: !1,
            writable: !0
          });
        }
      }();
    }, {}],
    48: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("./main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.noLoop = function () {
        this._loop = !1;
      }, n.default.prototype.loop = function () {
        this._loop || (this._loop = !0, this._setupDone && this._draw());
      }, n.default.prototype.isLooping = function () {
        return this._loop;
      }, n.default.prototype.push = function () {
        this._styles.push({
          props: {
            _colorMode: this._colorMode
          },
          renderer: this._renderer.push()
        });
      }, n.default.prototype.pop = function () {
        var e = this._styles.pop();

        e ? (this._renderer.pop(e.renderer), Object.assign(this, e.props)) : console.warn("pop() was called without matching push()");
      }, n.default.prototype.redraw = function (e) {
        if (!this._inUserDraw && this._setupDone) {
          var t = parseInt(e);
          (isNaN(t) || t < 1) && (t = 1);
          var r = this._isGlobal ? window : this;

          if ("function" == typeof r.draw) {
            void 0 === r.setup && r.scale(r._pixelDensity, r._pixelDensity);

            for (var i = function (e) {
              e.call(r);
            }, n = 0; n < t; n++) {
              r.resetMatrix(), (this._accessibleOutputs.grid || this._accessibleOutputs.text) && this._updateAccsOutput(), r._renderer.isP3D && r._renderer._update(), r._setProperty("frameCount", r.frameCount + 1), r._registeredMethods.pre.forEach(i), this._inUserDraw = !0;

              try {
                r.draw();
              } finally {
                this._inUserDraw = !1;
              }

              r._registeredMethods.post.forEach(i);
            }
          }
        }
      };
      var a = n.default;
      r.default = a;
    }, {
      "./main": 36
    }],
    49: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          a = (i = e("./main")) && i.__esModule ? i : {
        default: i
      };

      function n(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      a.default.prototype.applyMatrix = function () {
        var e, t;
        Array.isArray(arguments[0]) ? (e = this._renderer).applyMatrix.apply(e, n(arguments[0])) : (t = this._renderer).applyMatrix.apply(t, arguments);
        return this;
      }, a.default.prototype.resetMatrix = function () {
        return this._renderer.resetMatrix(), this;
      }, a.default.prototype.rotate = function (e, t) {
        return a.default._validateParameters("rotate", arguments), this._renderer.rotate(this._toRadians(e), t), this;
      }, a.default.prototype.rotateX = function (e) {
        return this._assert3d("rotateX"), a.default._validateParameters("rotateX", arguments), this._renderer.rotateX(this._toRadians(e)), this;
      }, a.default.prototype.rotateY = function (e) {
        return this._assert3d("rotateY"), a.default._validateParameters("rotateY", arguments), this._renderer.rotateY(this._toRadians(e)), this;
      }, a.default.prototype.rotateZ = function (e) {
        return this._assert3d("rotateZ"), a.default._validateParameters("rotateZ", arguments), this._renderer.rotateZ(this._toRadians(e)), this;
      }, a.default.prototype.scale = function (e, t, r) {
        if (a.default._validateParameters("scale", arguments), e instanceof a.default.Vector) {
          var i = e;
          e = i.x, t = i.y, r = i.z;
        } else if (e instanceof Array) {
          var n = e;
          e = n[0], t = n[1], r = n[2] || 1;
        }

        return isNaN(t) ? t = r = e : isNaN(r) && (r = 1), this._renderer.scale.call(this._renderer, e, t, r), this;
      }, a.default.prototype.shearX = function (e) {
        a.default._validateParameters("shearX", arguments);

        var t = this._toRadians(e);

        return this._renderer.applyMatrix(1, 0, Math.tan(t), 1, 0, 0), this;
      }, a.default.prototype.shearY = function (e) {
        a.default._validateParameters("shearY", arguments);

        var t = this._toRadians(e);

        return this._renderer.applyMatrix(1, Math.tan(t), 0, 1, 0, 0), this;
      }, a.default.prototype.translate = function (e, t, r) {
        return a.default._validateParameters("translate", arguments), this._renderer.isP3D ? this._renderer.translate(e, t, r) : this._renderer.translate(e, t), this;
      };
      var o = a.default;
      r.default = o;
    }, {
      "./main": 36
    }],
    50: [function (e, t, r) {
      "use strict";

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function a(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      n.default.prototype.storeItem = function (e, t) {
        "string" != typeof e && console.log("The argument that you passed to storeItem() - ".concat(e, " is not a string.")), e.endsWith("p5TypeID") && console.log("The argument that you passed to storeItem() - ".concat(e, " must not end with 'p5TypeID'.")), void 0 === t && console.log("You cannot store undefined variables using storeItem().");
        var r = o(t);

        switch (r) {
          case "number":
          case "boolean":
            t = t.toString();
            break;

          case "object":
            if (t instanceof n.default.Color) r = "p5.Color";else if (t instanceof n.default.Vector) {
              r = "p5.Vector", t = [t.x, t.y, t.z];
            }
            t = JSON.stringify(t);
        }

        localStorage.setItem(e, t);
        var i = "".concat(e, "p5TypeID");
        localStorage.setItem(i, r);
      }, n.default.prototype.getItem = function (e) {
        var t = localStorage.getItem(e),
            r = localStorage.getItem("".concat(e, "p5TypeID"));
        if (void 0 === r) console.log("Unable to determine type of item stored under ".concat(e, "in local storage. Did you save the item with something other than setItem()?"));else if (null !== t) switch (r) {
          case "number":
            t = parseFloat(t);
            break;

          case "boolean":
            t = "true" === t;
            break;

          case "object":
            t = JSON.parse(t);
            break;

          case "p5.Color":
            t = JSON.parse(t), t = this.color.apply(this, a(t.levels));
            break;

          case "p5.Vector":
            t = JSON.parse(t), t = this.createVector.apply(this, a(t));
        }
        return t;
      }, n.default.prototype.clearStorage = function () {
        localStorage.clear();
      }, n.default.prototype.removeItem = function (e) {
        "string" != typeof e && console.log("The argument that you passed to removeItem() - ".concat(e, " is not a string.")), localStorage.removeItem(e), localStorage.removeItem("".concat(e, "p5TypeID"));
      };
    }, {
      "../core/main": 36
    }],
    51: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.createStringDict = function (e, t) {
        return n.default._validateParameters("createStringDict", arguments), new n.default.StringDict(e, t);
      }, n.default.prototype.createNumberDict = function (e, t) {
        return n.default._validateParameters("createNumberDict", arguments), new n.default.NumberDict(e, t);
      }, n.default.TypedDict = function (e, t) {
        return e instanceof Object ? this.data = e : (this.data = {}, this.data[e] = t), this;
      }, n.default.TypedDict.prototype.size = function () {
        return Object.keys(this.data).length;
      }, n.default.TypedDict.prototype.hasKey = function (e) {
        return this.data.hasOwnProperty(e);
      }, n.default.TypedDict.prototype.get = function (e) {
        if (this.data.hasOwnProperty(e)) return this.data[e];
        console.log("".concat(e, " does not exist in this Dictionary"));
      }, n.default.TypedDict.prototype.set = function (e, t) {
        this._validate(t) ? this.data[e] = t : console.log("Those values dont work for this dictionary type.");
      }, n.default.TypedDict.prototype._addObj = function (e) {
        for (var t in e) this.set(t, e[t]);
      }, n.default.TypedDict.prototype.create = function (e, t) {
        e instanceof Object && void 0 === t ? this._addObj(e) : void 0 !== e ? this.set(e, t) : console.log("In order to create a new Dictionary entry you must pass an object or a key, value pair");
      }, n.default.TypedDict.prototype.clear = function () {
        this.data = {};
      }, n.default.TypedDict.prototype.remove = function (e) {
        if (!this.data.hasOwnProperty(e)) throw new Error("".concat(e, " does not exist in this Dictionary"));
        delete this.data[e];
      }, n.default.TypedDict.prototype.print = function () {
        for (var e in this.data) console.log("key:".concat(e, " value:").concat(this.data[e]));
      }, n.default.TypedDict.prototype.saveTable = function (e) {
        var t = "";

        for (var r in this.data) t += "".concat(r, ",").concat(this.data[r], "\n");

        var i = new Blob([t], {
          type: "text/csv"
        });
        n.default.prototype.downloadFile(i, e || "mycsv", "csv");
      }, n.default.TypedDict.prototype.saveJSON = function (e, t) {
        n.default.prototype.saveJSON(this.data, e, t);
      }, n.default.TypedDict.prototype._validate = function (e) {
        return !0;
      }, n.default.StringDict = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        n.default.TypedDict.apply(this, t);
      }, n.default.StringDict.prototype = Object.create(n.default.TypedDict.prototype), n.default.StringDict.prototype._validate = function (e) {
        return "string" == typeof e;
      }, n.default.NumberDict = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        n.default.TypedDict.apply(this, t);
      }, n.default.NumberDict.prototype = Object.create(n.default.TypedDict.prototype), n.default.NumberDict.prototype._validate = function (e) {
        return "number" == typeof e;
      }, n.default.NumberDict.prototype.add = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] += t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, n.default.NumberDict.prototype.sub = function (e, t) {
        this.add(e, -t);
      }, n.default.NumberDict.prototype.mult = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] *= t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, n.default.NumberDict.prototype.div = function (e, t) {
        this.data.hasOwnProperty(e) ? this.data[e] /= t : console.log("The key - ".concat(e, " does not exist in this dictionary."));
      }, n.default.NumberDict.prototype._valueTest = function (e) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to search for a minimum or maximum value on an empty NumberDict");
        if (1 === Object.keys(this.data).length) return this.data[Object.keys(this.data)[0]];
        var t = this.data[Object.keys(this.data)[0]];

        for (var r in this.data) this.data[r] * e < t * e && (t = this.data[r]);

        return t;
      }, n.default.NumberDict.prototype.minValue = function () {
        return this._valueTest(1);
      }, n.default.NumberDict.prototype.maxValue = function () {
        return this._valueTest(-1);
      }, n.default.NumberDict.prototype._keyTest = function (e) {
        if (0 === Object.keys(this.data).length) throw new Error("Unable to use minValue on an empty NumberDict");
        if (1 === Object.keys(this.data).length) return Object.keys(this.data)[0];

        for (var t = Object.keys(this.data)[0], r = 1; r < Object.keys(this.data).length; r++) Object.keys(this.data)[r] * e < t * e && (t = Object.keys(this.data)[r]);

        return t;
      }, n.default.NumberDict.prototype.minKey = function () {
        return this._keyTest(1);
      }, n.default.NumberDict.prototype.maxKey = function () {
        return this._keyTest(-1);
      };
      var a = n.default.TypedDict;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    52: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          f = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      function m(e, t, r) {
        (t._userNode ? t._userNode : document.body).appendChild(e);
        var i = r ? new f.default.MediaElement(e, t) : new f.default.Element(e, t);
        return t._elements.push(i), i;
      }

      function n(e, t, r, i) {
        var n = document.createElement(t);
        "string" == typeof (r = r || "") && (r = [r]);
        var a = !0,
            o = !1,
            s = void 0;

        try {
          for (var l, u = r[Symbol.iterator](); !(a = (l = u.next()).done); a = !0) {
            var h = l.value,
                c = document.createElement("source");
            c.setAttribute("src", h), n.appendChild(c);
          }
        } catch (e) {
          o = !0, s = e;
        } finally {
          try {
            a || null == u.return || u.return();
          } finally {
            if (o) throw s;
          }
        }

        if ("function" == typeof i) {
          n.addEventListener("canplaythrough", function e() {
            i(), n.removeEventListener("canplaythrough", e);
          });
        }

        var f = m(n, e, !0);
        return f.loadedmetadata = !1, n.addEventListener("loadedmetadata", function () {
          f.width = n.videoWidth, f.height = n.videoHeight, 0 === f.elt.width && (f.elt.width = n.videoWidth), 0 === f.elt.height && (f.elt.height = n.videoHeight), f.presetPlaybackRate && (f.elt.playbackRate = f.presetPlaybackRate, delete f.presetPlaybackRate), f.loadedmetadata = !0;
        }), f;
      }

      f.default.prototype.select = function (e, t) {
        f.default._validateParameters("select", arguments);

        var r = this._getContainer(t).querySelector(e);

        return r ? this._wrapElement(r) : null;
      }, f.default.prototype.selectAll = function (e, t) {
        f.default._validateParameters("selectAll", arguments);

        var r = [],
            i = this._getContainer(t).querySelectorAll(e);

        if (i) for (var n = 0; n < i.length; n++) {
          var a = this._wrapElement(i[n]);

          r.push(a);
        }
        return r;
      }, f.default.prototype._getContainer = function (e) {
        var t = document;
        return "string" == typeof e ? t = document.querySelector(e) || document : e instanceof f.default.Element ? t = e.elt : e instanceof HTMLElement && (t = e), t;
      }, f.default.prototype._wrapElement = function (e) {
        var t = Array.prototype.slice.call(e.children);
        if ("INPUT" !== e.tagName || "checkbox" !== e.type) return "VIDEO" === e.tagName || "AUDIO" === e.tagName ? new f.default.MediaElement(e, this) : "SELECT" === e.tagName ? this.createSelect(new f.default.Element(e, this)) : 0 < t.length && t.every(function (e) {
          return "INPUT" === e.tagName || "LABEL" === e.tagName;
        }) ? this.createRadio(new f.default.Element(e, this)) : new f.default.Element(e, this);
        var r = new f.default.Element(e, this);
        return r.checked = function () {
          return 0 === arguments.length ? this.elt.checked : (this.elt.checked = !!arguments[0], this);
        }, r;
      }, f.default.prototype.removeElements = function (e) {
        f.default._validateParameters("removeElements", arguments);

        this._elements.filter(function (e) {
          return !(e.elt instanceof HTMLCanvasElement);
        }).map(function (e) {
          return e.remove();
        });
      }, f.default.Element.prototype.changed = function (e) {
        return f.default.Element._adjustListener("change", e, this), this;
      }, f.default.Element.prototype.input = function (e) {
        return f.default.Element._adjustListener("input", e, this), this;
      }, f.default.prototype.createDiv = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = document.createElement("div");
        return t.innerHTML = e, m(t, this);
      }, f.default.prototype.createP = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = document.createElement("p");
        return t.innerHTML = e, m(t, this);
      }, f.default.prototype.createSpan = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = document.createElement("span");
        return t.innerHTML = e, m(t, this);
      }, f.default.prototype.createImg = function () {
        f.default._validateParameters("createImg", arguments);

        var t,
            r = document.createElement("img"),
            i = arguments;
        return 1 < i.length && "string" == typeof i[1] && (r.alt = i[1]), 2 < i.length && "string" == typeof i[2] && (r.crossOrigin = i[2]), r.src = i[0], t = m(r, this), r.addEventListener("load", function () {
          t.width = r.offsetWidth || r.width, t.height = r.offsetHeight || r.height;
          var e = i[i.length - 1];
          "function" == typeof e && e(t);
        }), t;
      }, f.default.prototype.createA = function (e, t, r) {
        f.default._validateParameters("createA", arguments);

        var i = document.createElement("a");
        return i.href = e, i.innerHTML = t, r && (i.target = r), m(i, this);
      }, f.default.prototype.createSlider = function (e, t, r, i) {
        f.default._validateParameters("createSlider", arguments);

        var n = document.createElement("input");
        return n.type = "range", n.min = e, n.max = t, 0 === i ? n.step = 1e-18 : i && (n.step = i), "number" == typeof r && (n.value = r), m(n, this);
      }, f.default.prototype.createButton = function (e, t) {
        f.default._validateParameters("createButton", arguments);

        var r = document.createElement("button");
        return r.innerHTML = e, t && (r.value = t), m(r, this);
      }, f.default.prototype.createCheckbox = function () {
        f.default._validateParameters("createCheckbox", arguments);

        var e = document.createElement("div"),
            t = document.createElement("input");
        t.type = "checkbox", e.appendChild(t);
        var r = m(e, this);

        if (r.checked = function () {
          var e = r.elt.getElementsByTagName("input")[0];

          if (e) {
            if (0 === arguments.length) return e.checked;
            e.checked = !!arguments[0];
          }

          return r;
        }, this.value = function (e) {
          return r.value = e, this;
        }, arguments[0]) {
          var i = Math.random().toString(36).slice(2),
              n = document.createElement("label");
          t.setAttribute("id", i), n.htmlFor = i, r.value(arguments[0]), n.appendChild(document.createTextNode(arguments[0])), e.appendChild(n);
        }

        return arguments[1] && (t.checked = !0), r;
      }, f.default.prototype.createSelect = function () {
        var e;

        f.default._validateParameters("createSelect", arguments);

        var t = arguments[0];
        if (t instanceof f.default.Element && t.elt instanceof HTMLSelectElement) e = t, this.elt = t.elt;else if (t instanceof HTMLSelectElement) e = m(t, this), this.elt = t;else {
          var r = document.createElement("select");
          t && "boolean" == typeof t && r.setAttribute("multiple", "true"), e = m(r, this), this.elt = r;
        }
        return e.option = function (e, t) {
          var r;

          if (void 0 !== e) {
            for (var i = 0; i < this.elt.length; i += 1) if (this.elt[i].innerHTML === e) {
              r = i;
              break;
            }

            if (void 0 !== r) !1 === t ? this.elt.remove(r) : this.elt[r].value = t;else {
              var n = document.createElement("option");
              n.innerHTML = e, n.value = void 0 === t ? e : t, this.elt.appendChild(n), this._pInst._elements.push(n);
            }
          }
        }, e.selected = function (e) {
          if (void 0 !== e) {
            for (var t = 0; t < this.elt.length; t += 1) this.elt[t].value.toString() === e.toString() && (this.elt.selectedIndex = t);

            return this;
          }

          if (this.elt.getAttribute("multiple")) {
            var r = [],
                i = !0,
                n = !1,
                a = void 0;

            try {
              for (var o, s = this.elt.selectedOptions[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                var l = o.value;
                r.push(l.value);
              }
            } catch (e) {
              n = !0, a = e;
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (n) throw a;
              }
            }

            return r;
          }

          return this.elt.value;
        }, e.disable = function (e) {
          if ("string" == typeof e) for (var t = 0; t < this.elt.length; t++) this.elt[t].value.toString() === e && (this.elt[t].disabled = !0, this.elt[t].selected = !1);else this.elt.disabled = !0;
          return this;
        }, e;
      }, f.default.prototype.createRadio = function () {
        var e,
            t,
            r = arguments[0];
        r instanceof HTMLDivElement || r instanceof HTMLSpanElement ? (e = r, "string" == typeof arguments[1] && (t = arguments[1])) : ("string" == typeof r && (t = r), e = document.createElement("div"));
        var p = m(this.elt = e, this);
        p._name = t || "radioOption";

        function i(e) {
          return e instanceof HTMLInputElement && "radio" === e.type;
        }

        function h(e) {
          return e.nextElementSibling instanceof HTMLLabelElement;
        }

        return p._getOptionsArray = function () {
          return Array.from(this.elt.children).filter(i);
        }, p.option = function (e, t) {
          var r,
              i,
              n = !0,
              a = !1,
              o = void 0;

          try {
            for (var s, l = p._getOptionsArray()[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
              var u = s.value;

              if (u.value === e) {
                r = u;
                break;
              }
            }
          } catch (e) {
            a = !0, o = e;
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (a) throw o;
            }
          }

          return void 0 === r && ((r = document.createElement("input")).setAttribute("type", "radio"), r.setAttribute("value", e), this.elt.appendChild(r)), h(r) ? i = r.nextElementSibling : (i = document.createElement("label"), r.insertAdjacentElement("afterend", i)), i.innerHTML = void 0 === t ? e : t, r.setAttribute("name", p._name), r;
        }, p.remove = function (e) {
          var t = !0,
              r = !1,
              i = void 0;

          try {
            for (var n, a = p._getOptionsArray()[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
              var o = n.value;
              if (o.value === e) return h(o) && o.nextElementSibling.remove(), void o.remove();
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              t || null == a.return || a.return();
            } finally {
              if (r) throw i;
            }
          }
        }, p.value = function () {
          var e = "",
              t = !0,
              r = !1,
              i = void 0;

          try {
            for (var n, a = p._getOptionsArray()[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
              var o = n.value;

              if (o.checked) {
                e = o.value;
                break;
              }
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              t || null == a.return || a.return();
            } finally {
              if (r) throw i;
            }
          }

          return e;
        }, p.selected = function (e) {
          var t = null;

          if (void 0 === e) {
            var r = !0,
                i = !1,
                n = void 0;

            try {
              for (var a, o = p._getOptionsArray()[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                var s = a.value;

                if (s.checked) {
                  t = s;
                  break;
                }
              }
            } catch (e) {
              i = !0, n = e;
            } finally {
              try {
                r || null == o.return || o.return();
              } finally {
                if (i) throw n;
              }
            }
          } else {
            var l = !0,
                u = !1,
                h = void 0;

            try {
              for (var c, f = p._getOptionsArray()[Symbol.iterator](); !(l = (c = f.next()).done); l = !0) {
                var d = c.value;
                d.value === e && (d.setAttribute("checked", !0), t = d);
              }
            } catch (e) {
              u = !0, h = e;
            } finally {
              try {
                l || null == f.return || f.return();
              } finally {
                if (u) throw h;
              }
            }
          }

          return t;
        }, p.disable = function () {
          var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
              t = !0,
              r = !1,
              i = void 0;

          try {
            for (var n, a = p._getOptionsArray()[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
              n.value.setAttribute("disabled", e);
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              t || null == a.return || a.return();
            } finally {
              if (r) throw i;
            }
          }
        }, p;
      }, f.default.prototype.createColorPicker = function (e) {
        f.default._validateParameters("createColorPicker", arguments);

        var t,
            r = document.createElement("input");
        return r.type = "color", e ? e instanceof f.default.Color ? r.value = e.toString("#rrggbb") : (f.default.prototype._colorMode = "rgb", f.default.prototype._colorMaxes = {
          rgb: [255, 255, 255, 255],
          hsb: [360, 100, 100, 1],
          hsl: [360, 100, 100, 1]
        }, r.value = f.default.prototype.color(e).toString("#rrggbb")) : r.value = "#000000", (t = m(r, this)).color = function () {
          return e && (e.mode && (f.default.prototype._colorMode = e.mode), e.maxes && (f.default.prototype._colorMaxes = e.maxes)), f.default.prototype.color(this.elt.value);
        }, t;
      }, f.default.prototype.createInput = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "text";

        f.default._validateParameters("createInput", arguments);

        var r = document.createElement("input");
        return r.setAttribute("value", e), r.setAttribute("type", t), m(r, this);
      }, f.default.prototype.createFileInput = function (s) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];

        f.default._validateParameters("createFileInput", arguments);

        if (window.File && window.FileReader && window.FileList && window.Blob) {
          var t = document.createElement("input");
          return t.setAttribute("type", "file"), e && t.setAttribute("multiple", !0), t.addEventListener("change", function (e) {
            var t = !0,
                r = !1,
                i = void 0;

            try {
              for (var n, a = e.target.files[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
                var o = n.value;

                f.default.File._load(o, s);
              }
            } catch (e) {
              r = !0, i = e;
            } finally {
              try {
                t || null == a.return || a.return();
              } finally {
                if (r) throw i;
              }
            }
          }, !1), m(t, this);
        }

        console.log("The File APIs are not fully supported in this browser. Cannot create element.");
      }, f.default.prototype.createVideo = function (e, t) {
        return f.default._validateParameters("createVideo", arguments), n(this, "video", e, t);
      }, f.default.prototype.createAudio = function (e, t) {
        return f.default._validateParameters("createAudio", arguments), n(this, "audio", e, t);
      }, f.default.prototype.VIDEO = "video", f.default.prototype.AUDIO = "audio", void 0 === navigator.mediaDevices && (navigator.mediaDevices = {}), void 0 === navigator.mediaDevices.getUserMedia && (navigator.mediaDevices.getUserMedia = function (r) {
        var i = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        return i ? new Promise(function (e, t) {
          i.call(navigator, r, e, t);
        }) : Promise.reject(new Error("getUserMedia is not implemented in this browser"));
      }), f.default.prototype.createCapture = function () {
        if (f.default._validateParameters("createCapture", arguments), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new DOMException("getUserMedia not supported in this browser");
        var e,
            t,
            r = !0,
            i = !0,
            n = !0,
            a = !1,
            o = void 0;

        try {
          for (var s, l = arguments[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
            var u = s.value;
            u === f.default.prototype.VIDEO ? i = !1 : u === f.default.prototype.AUDIO ? r = !1 : "object" === d(u) ? e = u : "function" == typeof u && (t = u);
          }
        } catch (e) {
          a = !0, o = e;
        } finally {
          try {
            n || null == l.return || l.return();
          } finally {
            if (a) throw o;
          }
        }

        e = e || {
          video: r,
          audio: i
        };
        var h = document.createElement("video");
        h.setAttribute("playsinline", ""), navigator.mediaDevices.getUserMedia(e).then(function (t) {
          try {
            "srcObject" in h ? h.srcObject = t : h.src = window.URL.createObjectURL(t);
          } catch (e) {
            h.src = t;
          }
        }, console.log);
        var c = m(h, this, !0);
        return c.loadedmetadata = !1, h.addEventListener("loadedmetadata", function () {
          h.play(), h.width ? (c.width = h.width, c.height = h.height) : (c.width = c.elt.width = h.videoWidth, c.height = c.elt.height = h.videoHeight), c.loadedmetadata = !0, t && t(h.srcObject);
        }), c;
      }, f.default.prototype.createElement = function (e, t) {
        f.default._validateParameters("createElement", arguments);

        var r = document.createElement(e);
        return void 0 !== t && (r.innerHTML = t), m(r, this);
      }, f.default.Element.prototype.addClass = function (e) {
        return this.elt.className ? this.hasClass(e) || (this.elt.className = this.elt.className + " " + e) : this.elt.className = e, this;
      }, f.default.Element.prototype.removeClass = function (e) {
        return this.elt.classList.remove(e), this;
      }, f.default.Element.prototype.hasClass = function (e) {
        return this.elt.classList.contains(e);
      }, f.default.Element.prototype.toggleClass = function (e) {
        return this.elt.classList.contains(e) ? this.elt.classList.remove(e) : this.elt.classList.add(e), this;
      }, f.default.Element.prototype.child = function (e) {
        return void 0 === e ? this.elt.childNodes : ("string" == typeof e ? ("#" === e[0] && (e = e.substring(1)), e = document.getElementById(e)) : e instanceof f.default.Element && (e = e.elt), e instanceof HTMLElement && this.elt.appendChild(e), this);
      }, f.default.Element.prototype.center = function (e) {
        var t = this.elt.style.display,
            r = "none" === this.elt.style.display,
            i = "none" === this.parent().style.display,
            n = {
          x: this.elt.offsetLeft,
          y: this.elt.offsetTop
        };
        r && this.show(), i && this.parent().show(), this.elt.style.display = "block", this.position(0, 0);
        var a = Math.abs(this.parent().offsetWidth - this.elt.offsetWidth),
            o = Math.abs(this.parent().offsetHeight - this.elt.offsetHeight);
        return "both" === e || void 0 === e ? this.position(a / 2 + this.parent().offsetLeft, o / 2 + this.parent().offsetTop) : "horizontal" === e ? this.position(a / 2 + this.parent().offsetLeft, n.y) : "vertical" === e && this.position(n.x, o / 2 + this.parent().offsetTop), this.style("display", t), r && this.hide(), i && this.parent().hide(), this;
      }, f.default.Element.prototype.html = function () {
        return 0 === arguments.length ? this.elt.innerHTML : (arguments[1] ? this.elt.insertAdjacentHTML("beforeend", arguments[0]) : this.elt.innerHTML = arguments[0], this);
      }, f.default.Element.prototype.position = function () {
        if (0 === arguments.length) return {
          x: this.elt.offsetLeft,
          y: this.elt.offsetTop
        };
        var e = "absolute";
        return "static" !== arguments[2] && "fixed" !== arguments[2] && "relative" !== arguments[2] && "sticky" !== arguments[2] && "initial" !== arguments[2] && "inherit" !== arguments[2] || (e = arguments[2]), this.elt.style.position = e, this.elt.style.left = arguments[0] + "px", this.elt.style.top = arguments[1] + "px", this.x = arguments[0], this.y = arguments[1], this;
      }, f.default.Element.prototype._translate = function () {
        this.elt.style.position = "absolute";
        var e = "";
        return this.elt.style.transform && (e = (e = this.elt.style.transform.replace(/translate3d\(.*\)/g, "")).replace(/translate[X-Z]?\(.*\)/g, "")), 2 === arguments.length ? this.elt.style.transform = "translate(" + arguments[0] + "px, " + arguments[1] + "px)" : 2 < arguments.length && (this.elt.style.transform = "translate3d(" + arguments[0] + "px," + arguments[1] + "px," + arguments[2] + "px)", this.elt.parentElement.style.perspective = 3 === arguments.length ? "1000px" : arguments[3] + "px"), this.elt.style.transform += e, this;
      }, f.default.Element.prototype._rotate = function () {
        var e = "";
        return this.elt.style.transform && (e = (e = this.elt.style.transform.replace(/rotate3d\(.*\)/g, "")).replace(/rotate[X-Z]?\(.*\)/g, "")), 1 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg)" : 2 === arguments.length ? this.elt.style.transform = "rotate(" + arguments[0] + "deg, " + arguments[1] + "deg)" : 3 === arguments.length && (this.elt.style.transform = "rotateX(" + arguments[0] + "deg)", this.elt.style.transform += "rotateY(" + arguments[1] + "deg)", this.elt.style.transform += "rotateZ(" + arguments[2] + "deg)"), this.elt.style.transform += e, this;
      }, f.default.Element.prototype.style = function (e, t) {
        if (t instanceof f.default.Color && (t = "rgba(" + t.levels[0] + "," + t.levels[1] + "," + t.levels[2] + "," + t.levels[3] / 255 + ")"), void 0 === t) {
          if (-1 === e.indexOf(":")) return window.getComputedStyle(this.elt).getPropertyValue(e);

          for (var r = e.split(";"), i = 0; i < r.length; i++) {
            var n = r[i].split(":");
            n[0] && n[1] && (this.elt.style[n[0].trim()] = n[1].trim());
          }
        } else if (this.elt.style[e] = t, "width" === e || "height" === e || "left" === e || "top" === e) {
          var a = window.getComputedStyle(this.elt).getPropertyValue(e).replace(/\D+/g, "");
          this[e] = parseInt(a, 10);
        }

        return this;
      }, f.default.Element.prototype.attribute = function (e, t) {
        if (null == this.elt.firstChild || "checkbox" !== this.elt.firstChild.type && "radio" !== this.elt.firstChild.type) return void 0 === t ? this.elt.getAttribute(e) : (this.elt.setAttribute(e, t), this);
        if (void 0 === t) return this.elt.firstChild.getAttribute(e);

        for (var r = 0; r < this.elt.childNodes.length; r++) this.elt.childNodes[r].setAttribute(e, t);
      }, f.default.Element.prototype.removeAttribute = function (e) {
        if (null != this.elt.firstChild && ("checkbox" === this.elt.firstChild.type || "radio" === this.elt.firstChild.type)) for (var t = 0; t < this.elt.childNodes.length; t++) this.elt.childNodes[t].removeAttribute(e);
        return this.elt.removeAttribute(e), this;
      }, f.default.Element.prototype.value = function () {
        return 0 < arguments.length ? (this.elt.value = arguments[0], this) : "range" === this.elt.type ? parseFloat(this.elt.value) : this.elt.value;
      }, f.default.Element.prototype.show = function () {
        return this.elt.style.display = "block", this;
      }, f.default.Element.prototype.hide = function () {
        return this.elt.style.display = "none", this;
      }, f.default.Element.prototype.size = function (e, t) {
        if (0 === arguments.length) return {
          width: this.elt.offsetWidth,
          height: this.elt.offsetHeight
        };
        var r = e,
            i = t,
            n = f.default.prototype.AUTO;

        if (r !== n || i !== n) {
          if (r === n ? r = t * this.width / this.height : i === n && (i = e * this.height / this.width), this.elt instanceof HTMLCanvasElement) {
            var a,
                o = {},
                s = this.elt.getContext("2d");

            for (a in s) o[a] = s[a];

            for (a in this.elt.setAttribute("width", r * this._pInst._pixelDensity), this.elt.setAttribute("height", i * this._pInst._pixelDensity), this.elt.style.width = r + "px", this.elt.style.height = i + "px", this._pInst.scale(this._pInst._pixelDensity, this._pInst._pixelDensity), o) this.elt.getContext("2d")[a] = o[a];
          } else this.elt.style.width = r + "px", this.elt.style.height = i + "px", this.elt.width = r, this.elt.height = i;

          this.width = this.elt.offsetWidth, this.height = this.elt.offsetHeight, this._pInst && this._pInst._curElement && this._pInst._curElement.elt === this.elt && (this._pInst._setProperty("width", this.elt.offsetWidth), this._pInst._setProperty("height", this.elt.offsetHeight));
        }

        return this;
      }, f.default.Element.prototype.remove = function () {
        if (this instanceof f.default.MediaElement) {
          this.stop();
          var e = this.elt.srcObject;
          if (null !== e) e.getTracks().forEach(function (e) {
            e.stop();
          });
        }

        var t = this._pInst._elements.indexOf(this);

        for (var r in -1 !== t && this._pInst._elements.splice(t, 1), this._events) this.elt.removeEventListener(r, this._events[r]);

        this.elt && this.elt.parentNode && this.elt.parentNode.removeChild(this.elt);
      }, f.default.Element.prototype.drop = function (n, a) {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
          if (!this._dragDisabled) {
            this._dragDisabled = !0;

            var e = function (e) {
              e.preventDefault();
            };

            this.elt.addEventListener("dragover", e), this.elt.addEventListener("dragleave", e);
          }

          f.default.Element._attachListener("drop", function (e) {
            e.preventDefault(), "function" == typeof a && a.call(this, e);

            for (var t = e.dataTransfer.files, r = 0; r < t.length; r++) {
              var i = t[r];

              f.default.File._load(i, n);
            }
          }, this);
        } else console.log("The File APIs are not fully supported in this browser.");

        return this;
      }, f.default.MediaElement = function (i, e) {
        f.default.Element.call(this, i, e);
        var n = this;
        this.elt.crossOrigin = "anonymous", this._prevTime = 0, this._cueIDCounter = 0, this._cues = [], (this._pixelsState = this)._pixelDensity = 1, this._modified = !1, Object.defineProperty(n, "src", {
          get: function () {
            var e = n.elt.children[0].src,
                t = n.elt.src === window.location.href ? "" : n.elt.src;
            return e === window.location.href ? t : e;
          },
          set: function (e) {
            for (var t = 0; t < n.elt.children.length; t++) n.elt.removeChild(n.elt.children[t]);

            var r = document.createElement("source");
            r.src = e, i.appendChild(r), n.elt.src = e, n.modified = !0;
          }
        }), n._onended = function () {}, n.elt.onended = function () {
          n._onended(n);
        };
      }, f.default.MediaElement.prototype = Object.create(f.default.Element.prototype), f.default.MediaElement.prototype.play = function () {
        var e,
            t = this;
        return this.elt.currentTime === this.elt.duration && (this.elt.currentTime = 0), (e = (1 < this.elt.readyState || this.elt.load(), this.elt.play())) && e.catch && e.catch(function (e) {
          "NotAllowedError" === e.name ? f.default._friendlyAutoplayError(t.src) : console.error("Media play method encountered an unexpected error", e);
        }), this;
      }, f.default.MediaElement.prototype.stop = function () {
        return this.elt.pause(), this.elt.currentTime = 0, this;
      }, f.default.MediaElement.prototype.pause = function () {
        return this.elt.pause(), this;
      }, f.default.MediaElement.prototype.loop = function () {
        return this.elt.setAttribute("loop", !0), this.play(), this;
      }, f.default.MediaElement.prototype.noLoop = function () {
        return this.elt.removeAttribute("loop"), this;
      }, f.default.MediaElement.prototype._setupAutoplayFailDetection = function () {
        var e = this,
            t = setTimeout(function () {
          return f.default._friendlyAutoplayError(e.src);
        }, 500);
        this.elt.addEventListener("play", function () {
          return clearTimeout(t);
        }, {
          passive: !0,
          once: !0
        });
      }, f.default.MediaElement.prototype.autoplay = function (e) {
        var t = this,
            r = this.elt.getAttribute("autoplay");

        if (this.elt.setAttribute("autoplay", e), e && !r) {
          var i = function () {
            return t._setupAutoplayFailDetection();
          };

          4 === this.elt.readyState ? i() : this.elt.addEventListener("canplay", i, {
            passive: !0,
            once: !0
          });
        }

        return this;
      }, f.default.MediaElement.prototype.volume = function (e) {
        if (void 0 === e) return this.elt.volume;
        this.elt.volume = e;
      }, f.default.MediaElement.prototype.speed = function (e) {
        if (void 0 === e) return this.presetPlaybackRate || this.elt.playbackRate;
        this.loadedmetadata ? this.elt.playbackRate = e : this.presetPlaybackRate = e;
      }, f.default.MediaElement.prototype.time = function (e) {
        return void 0 === e ? this.elt.currentTime : (this.elt.currentTime = e, this);
      }, f.default.MediaElement.prototype.duration = function () {
        return this.elt.duration;
      }, f.default.MediaElement.prototype.pixels = [], f.default.MediaElement.prototype._ensureCanvas = function () {
        this.canvas || (this.canvas = document.createElement("canvas"), this.drawingContext = this.canvas.getContext("2d"), this.setModified(!0)), this.loadedmetadata && (this.canvas.width !== this.elt.width && (this.canvas.width = this.elt.width, this.canvas.height = this.elt.height, this.width = this.canvas.width, this.height = this.canvas.height), this.drawingContext.drawImage(this.elt, 0, 0, this.canvas.width, this.canvas.height), this.setModified(!0));
      }, f.default.MediaElement.prototype.loadPixels = function () {
        return this._ensureCanvas(), f.default.Renderer2D.prototype.loadPixels.apply(this, arguments);
      }, f.default.MediaElement.prototype.updatePixels = function (e, t, r, i) {
        return this.loadedmetadata && (this._ensureCanvas(), f.default.Renderer2D.prototype.updatePixels.call(this, e, t, r, i)), this.setModified(!0), this;
      }, f.default.MediaElement.prototype.get = function () {
        return this._ensureCanvas(), f.default.Renderer2D.prototype.get.apply(this, arguments);
      }, f.default.MediaElement.prototype._getPixel = function () {
        return this.loadPixels(), f.default.Renderer2D.prototype._getPixel.apply(this, arguments);
      }, f.default.MediaElement.prototype.set = function (e, t, r) {
        this.loadedmetadata && (this._ensureCanvas(), f.default.Renderer2D.prototype.set.call(this, e, t, r), this.setModified(!0));
      }, f.default.MediaElement.prototype.copy = function () {
        this._ensureCanvas(), f.default.prototype.copy.apply(this, arguments);
      }, f.default.MediaElement.prototype.mask = function () {
        this.loadPixels(), this.setModified(!0), f.default.Image.prototype.mask.apply(this, arguments);
      }, f.default.MediaElement.prototype.isModified = function () {
        return this._modified;
      }, f.default.MediaElement.prototype.setModified = function (e) {
        this._modified = e;
      }, f.default.MediaElement.prototype.onended = function (e) {
        return this._onended = e, this;
      }, f.default.MediaElement.prototype.connect = function (e) {
        var t, r;
        if ("function" == typeof f.default.prototype.getAudioContext) t = f.default.prototype.getAudioContext(), r = f.default.soundOut.input;else try {
          r = (t = e.context).destination;
        } catch (e) {
          throw "connect() is meant to be used with Web Audio API or p5.sound.js";
        }
        this.audioSourceNode || (this.audioSourceNode = t.createMediaElementSource(this.elt), this.audioSourceNode.connect(r)), e ? e.input ? this.audioSourceNode.connect(e.input) : this.audioSourceNode.connect(e) : this.audioSourceNode.connect(r);
      }, f.default.MediaElement.prototype.disconnect = function () {
        if (!this.audioSourceNode) throw "nothing to disconnect";
        this.audioSourceNode.disconnect();
      }, f.default.MediaElement.prototype.showControls = function () {
        this.elt.style["text-align"] = "inherit", this.elt.controls = !0;
      }, f.default.MediaElement.prototype.hideControls = function () {
        this.elt.controls = !1;
      };

      function a(e, t, r, i) {
        this.callback = e, this.time = t, this.id = r, this.val = i;
      }

      f.default.MediaElement.prototype.addCue = function (e, t, r) {
        var i = this._cueIDCounter++,
            n = new a(t, e, i, r);
        return this._cues.push(n), this.elt.ontimeupdate || (this.elt.ontimeupdate = this._onTimeUpdate.bind(this)), i;
      }, f.default.MediaElement.prototype.removeCue = function (e) {
        for (var t = 0; t < this._cues.length; t++) this._cues[t].id === e && (console.log(e), this._cues.splice(t, 1));

        0 === this._cues.length && (this.elt.ontimeupdate = null);
      }, f.default.MediaElement.prototype.clearCues = function () {
        this._cues = [], this.elt.ontimeupdate = null;
      }, f.default.MediaElement.prototype._onTimeUpdate = function () {
        for (var e = this.time(), t = 0; t < this._cues.length; t++) {
          var r = this._cues[t].time,
              i = this._cues[t].val;
          this._prevTime < r && r <= e && this._cues[t].callback(i);
        }

        this._prevTime = e;
      }, f.default.File = function (e, t) {
        this.file = e, this._pInst = t;
        var r = e.type.split("/");
        this.type = r[0], this.subtype = r[1], this.name = e.name, this.size = e.size, this.data = void 0;
      }, f.default.File._createLoader = function (i, n) {
        var e = new FileReader();
        return e.onload = function (e) {
          var t = new f.default.File(i);
          if ("application/json" === t.file.type) t.data = JSON.parse(e.target.result);else if ("text/xml" === t.file.type) {
            var r = new DOMParser().parseFromString(e.target.result, "text/xml");
            t.data = new f.default.XML(r.documentElement);
          } else t.data = e.target.result;
          n(t);
        }, e;
      }, f.default.File._load = function (e, t) {
        if (/^text\//.test(e.type) || "application/json" === e.type) f.default.File._createLoader(e, t).readAsText(e);else if (/^(video|audio)\//.test(e.type)) {
          var r = new f.default.File(e);
          r.data = URL.createObjectURL(e), t(r);
        } else f.default.File._createLoader(e, t).readAsDataURL(e);
      };
      var o = f.default;
      r.default = o;
    }, {
      "../core/main": 36
    }],
    53: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      n.default.prototype.deviceOrientation = 1 < window.innerWidth / window.innerHeight ? "landscape" : "portrait", n.default.prototype.accelerationX = 0, n.default.prototype.accelerationY = 0, n.default.prototype.accelerationZ = 0, n.default.prototype.pAccelerationX = 0, n.default.prototype.pAccelerationY = 0, n.default.prototype.pAccelerationZ = 0, n.default.prototype._updatePAccelerations = function () {
        this._setProperty("pAccelerationX", this.accelerationX), this._setProperty("pAccelerationY", this.accelerationY), this._setProperty("pAccelerationZ", this.accelerationZ);
      }, n.default.prototype.rotationX = 0, n.default.prototype.rotationY = 0, n.default.prototype.rotationZ = 0, n.default.prototype.pRotationX = 0, n.default.prototype.pRotationY = 0;
      var u = n.default.prototype.pRotationZ = 0,
          h = 0,
          c = 0,
          f = "clockwise",
          d = "clockwise",
          p = "clockwise";
      n.default.prototype.pRotateDirectionX = void 0, n.default.prototype.pRotateDirectionY = void 0, n.default.prototype.pRotateDirectionZ = void 0, n.default.prototype._updatePRotations = function () {
        this._setProperty("pRotationX", this.rotationX), this._setProperty("pRotationY", this.rotationY), this._setProperty("pRotationZ", this.rotationZ);
      }, n.default.prototype.turnAxis = void 0;
      var m = .5,
          y = 30;
      n.default.prototype.setMoveThreshold = function (e) {
        n.default._validateParameters("setMoveThreshold", arguments), m = e;
      }, n.default.prototype.setShakeThreshold = function (e) {
        n.default._validateParameters("setShakeThreshold", arguments), y = e;
      }, n.default.prototype._ondeviceorientation = function (e) {
        this._updatePRotations(), this._angleMode === a.radians && (e.beta = e.beta * (_PI / 180), e.gamma = e.gamma * (_PI / 180), e.alpha = e.alpha * (_PI / 180)), this._setProperty("rotationX", e.beta), this._setProperty("rotationY", e.gamma), this._setProperty("rotationZ", e.alpha), this._handleMotion();
      }, n.default.prototype._ondevicemotion = function (e) {
        this._updatePAccelerations(), this._setProperty("accelerationX", 2 * e.acceleration.x), this._setProperty("accelerationY", 2 * e.acceleration.y), this._setProperty("accelerationZ", 2 * e.acceleration.z), this._handleMotion();
      }, n.default.prototype._handleMotion = function () {
        90 === window.orientation || -90 === window.orientation ? this._setProperty("deviceOrientation", "landscape") : 0 === window.orientation ? this._setProperty("deviceOrientation", "portrait") : void 0 === window.orientation && this._setProperty("deviceOrientation", "undefined");
        var e,
            t,
            r = this._isGlobal ? window : this;

        if ("function" == typeof r.deviceMoved && (Math.abs(this.accelerationX - this.pAccelerationX) > m || Math.abs(this.accelerationY - this.pAccelerationY) > m || Math.abs(this.accelerationZ - this.pAccelerationZ) > m) && r.deviceMoved(), "function" == typeof r.deviceTurned) {
          var i = this.rotationX + 180,
              n = this.pRotationX + 180,
              a = u + 180;
          0 < i - n && i - n < 270 || i - n < -270 ? f = "clockwise" : (i - n < 0 || 270 < i - n) && (f = "counter-clockwise"), f !== this.pRotateDirectionX && (a = i), 90 < Math.abs(i - a) && Math.abs(i - a) < 270 && (a = i, this._setProperty("turnAxis", "X"), r.deviceTurned()), this.pRotateDirectionX = f, u = a - 180;
          var o = this.rotationY + 180,
              s = this.pRotationY + 180,
              l = h + 180;
          0 < o - s && o - s < 270 || o - s < -270 ? d = "clockwise" : (o - s < 0 || 270 < o - this.pRotationY) && (d = "counter-clockwise"), d !== this.pRotateDirectionY && (l = o), 90 < Math.abs(o - l) && Math.abs(o - l) < 270 && (l = o, this._setProperty("turnAxis", "Y"), r.deviceTurned()), this.pRotateDirectionY = d, h = l - 180, 0 < this.rotationZ - this.pRotationZ && this.rotationZ - this.pRotationZ < 270 || this.rotationZ - this.pRotationZ < -270 ? p = "clockwise" : (this.rotationZ - this.pRotationZ < 0 || 270 < this.rotationZ - this.pRotationZ) && (p = "counter-clockwise"), p !== this.pRotateDirectionZ && (c = this.rotationZ), 90 < Math.abs(this.rotationZ - c) && Math.abs(this.rotationZ - c) < 270 && (c = this.rotationZ, this._setProperty("turnAxis", "Z"), r.deviceTurned()), this.pRotateDirectionZ = p, this._setProperty("turnAxis", void 0);
        }

        "function" == typeof r.deviceShaken && (null !== this.pAccelerationX && (e = Math.abs(this.accelerationX - this.pAccelerationX), t = Math.abs(this.accelerationY - this.pAccelerationY)), y < e + t && r.deviceShaken());
      };
      var l = n.default;
      r.default = l;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    54: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.isKeyPressed = !1, n.default.prototype.keyIsPressed = !1, n.default.prototype.key = "", n.default.prototype.keyCode = 0, n.default.prototype._onkeydown = function (e) {
        if (!this._downKeys[e.which]) {
          this._setProperty("isKeyPressed", !0), this._setProperty("keyIsPressed", !0), this._setProperty("keyCode", e.which), this._downKeys[e.which] = !0, this._setProperty("key", e.key || String.fromCharCode(e.which) || e.which);
          var t = this._isGlobal ? window : this;
          if ("function" == typeof t.keyPressed && !e.charCode) !1 === t.keyPressed(e) && e.preventDefault();
        }
      }, n.default.prototype._onkeyup = function (e) {
        this._downKeys[e.which] = !1, this._areDownKeys() || (this._setProperty("isKeyPressed", !1), this._setProperty("keyIsPressed", !1)), this._setProperty("_lastKeyCodeTyped", null), this._setProperty("key", e.key || String.fromCharCode(e.which) || e.which), this._setProperty("keyCode", e.which);
        var t = this._isGlobal ? window : this;
        "function" == typeof t.keyReleased && !1 === t.keyReleased(e) && e.preventDefault();
      }, n.default.prototype._onkeypress = function (e) {
        if (e.which !== this._lastKeyCodeTyped) {
          this._setProperty("_lastKeyCodeTyped", e.which), this._setProperty("key", e.key || String.fromCharCode(e.which) || e.which);
          var t = this._isGlobal ? window : this;
          if ("function" == typeof t.keyTyped) !1 === t.keyTyped(e) && e.preventDefault();
        }
      }, n.default.prototype._onblur = function (e) {
        this._downKeys = {};
      }, n.default.prototype.keyIsDown = function (e) {
        return n.default._validateParameters("keyIsDown", arguments), this._downKeys[e] || !1;
      }, n.default.prototype._areDownKeys = function () {
        for (var e in this._downKeys) if (this._downKeys.hasOwnProperty(e) && !0 === this._downKeys[e]) return !0;

        return !1;
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    55: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      n.default.prototype.movedX = 0, n.default.prototype.movedY = 0, n.default.prototype._hasMouseInteracted = !1, n.default.prototype.mouseX = 0, n.default.prototype.mouseY = 0, n.default.prototype.pmouseX = 0, n.default.prototype.pmouseY = 0, n.default.prototype.winMouseX = 0, n.default.prototype.winMouseY = 0, n.default.prototype.pwinMouseX = 0, n.default.prototype.pwinMouseY = 0, n.default.prototype.mouseButton = 0, n.default.prototype.mouseIsPressed = !1, n.default.prototype._updateNextMouseCoords = function (e) {
        if (null !== this._curElement && (!e.touches || 0 < e.touches.length)) {
          var t = function (e, t, r, i) {
            i && !i.clientX && (i.touches ? i = i.touches[0] : i.changedTouches && (i = i.changedTouches[0]));
            var n = e.getBoundingClientRect(),
                a = e.scrollWidth / t || 1,
                o = e.scrollHeight / r || 1;
            return {
              x: (i.clientX - n.left) / a,
              y: (i.clientY - n.top) / o,
              winX: i.clientX,
              winY: i.clientY,
              id: i.identifier
            };
          }(this._curElement.elt, this.width, this.height, e);

          this._setProperty("movedX", e.movementX), this._setProperty("movedY", e.movementY), this._setProperty("mouseX", t.x), this._setProperty("mouseY", t.y), this._setProperty("winMouseX", t.winX), this._setProperty("winMouseY", t.winY);
        }

        this._hasMouseInteracted || (this._updateMouseCoords(), this._setProperty("_hasMouseInteracted", !0));
      }, n.default.prototype._updateMouseCoords = function () {
        this._setProperty("pmouseX", this.mouseX), this._setProperty("pmouseY", this.mouseY), this._setProperty("pwinMouseX", this.winMouseX), this._setProperty("pwinMouseY", this.winMouseY), this._setProperty("_pmouseWheelDeltaY", this._mouseWheelDeltaY);
      }, n.default.prototype._setMouseButton = function (e) {
        1 === e.button ? this._setProperty("mouseButton", a.CENTER) : 2 === e.button ? this._setProperty("mouseButton", a.RIGHT) : this._setProperty("mouseButton", a.LEFT);
      }, n.default.prototype._onmousemove = function (e) {
        var t = this._isGlobal ? window : this;
        this._updateNextMouseCoords(e), this.mouseIsPressed ? "function" == typeof t.mouseDragged ? !1 === t.mouseDragged(e) && e.preventDefault() : "function" == typeof t.touchMoved && !1 === t.touchMoved(e) && e.preventDefault() : "function" == typeof t.mouseMoved && !1 === t.mouseMoved(e) && e.preventDefault();
      }, n.default.prototype._onmousedown = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("mouseIsPressed", !0), this._setMouseButton(e), this._updateNextMouseCoords(e), "function" == typeof t.mousePressed ? !1 === t.mousePressed(e) && e.preventDefault() : navigator.userAgent.toLowerCase().includes("safari") && "function" == typeof t.touchStarted && !1 === t.touchStarted(e) && e.preventDefault();
      }, n.default.prototype._onmouseup = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("mouseIsPressed", !1), "function" == typeof t.mouseReleased ? !1 === t.mouseReleased(e) && e.preventDefault() : "function" == typeof t.touchEnded && !1 === t.touchEnded(e) && e.preventDefault();
      }, n.default.prototype._ondragend = n.default.prototype._onmouseup, n.default.prototype._ondragover = n.default.prototype._onmousemove, n.default.prototype._onclick = function (e) {
        var t = this._isGlobal ? window : this;
        "function" == typeof t.mouseClicked && !1 === t.mouseClicked(e) && e.preventDefault();
      }, n.default.prototype._ondblclick = function (e) {
        var t = this._isGlobal ? window : this;
        "function" == typeof t.doubleClicked && !1 === t.doubleClicked(e) && e.preventDefault();
      }, n.default.prototype._mouseWheelDeltaY = 0, n.default.prototype._pmouseWheelDeltaY = 0, n.default.prototype._onwheel = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("_mouseWheelDeltaY", e.deltaY), "function" == typeof t.mouseWheel && (e.delta = e.deltaY, !1 === t.mouseWheel(e) && e.preventDefault());
      }, n.default.prototype.requestPointerLock = function () {
        var e = this._curElement.elt;
        return e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock, e.requestPointerLock ? (e.requestPointerLock(), !0) : (console.log("requestPointerLock is not implemented in this browser"), !1);
      }, n.default.prototype.exitPointerLock = function () {
        document.exitPointerLock();
      };
      var l = n.default;
      r.default = l;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    56: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function a(e, t, r, i, n) {
        var a = 4 < arguments.length && void 0 !== n ? n : 0,
            o = e.getBoundingClientRect(),
            s = e.scrollWidth / t || 1,
            l = e.scrollHeight / r || 1,
            u = i.touches[a] || i.changedTouches[a];
        return {
          x: (u.clientX - o.left) / s,
          y: (u.clientY - o.top) / l,
          winX: u.clientX,
          winY: u.clientY,
          id: u.identifier
        };
      }

      n.default.prototype.touches = [], n.default.prototype._updateTouchCoords = function (e) {
        if (null !== this._curElement) {
          for (var t = [], r = 0; r < e.touches.length; r++) t[r] = a(this._curElement.elt, this.width, this.height, e, r);

          this._setProperty("touches", t);
        }
      }, n.default.prototype._ontouchstart = function (e) {
        var t = this._isGlobal ? window : this;
        this._setProperty("mouseIsPressed", !0), this._updateTouchCoords(e), this._updateNextMouseCoords(e), this._updateMouseCoords(), "function" == typeof t.touchStarted ? !1 === t.touchStarted(e) && e.preventDefault() : navigator.userAgent.toLowerCase().includes("safari") && "function" == typeof t.mousePressed && !1 === t.mousePressed(e) && e.preventDefault();
      }, n.default.prototype._ontouchmove = function (e) {
        var t = this._isGlobal ? window : this;
        this._updateTouchCoords(e), this._updateNextMouseCoords(e), "function" == typeof t.touchMoved ? !1 === t.touchMoved(e) && e.preventDefault() : "function" == typeof t.mouseDragged && !1 === t.mouseDragged(e) && e.preventDefault();
      }, n.default.prototype._ontouchend = function (e) {
        this._setProperty("mouseIsPressed", !1), this._updateTouchCoords(e), this._updateNextMouseCoords(e);
        var t = this._isGlobal ? window : this;
        "function" == typeof t.touchEnded ? !1 === t.touchEnded(e) && e.preventDefault() : "function" == typeof t.mouseReleased && !1 === t.mouseReleased(e) && e.preventDefault();
      };
      var o = n.default;
      r.default = o;
    }, {
      "../core/main": 36
    }],
    57: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var L,
          O,
          P,
          R,
          D = {};

      function i(e, t) {
        for (var r, i, n, a, o, s, l, u, h, c, f = D._toPixels(e), d = e.width, p = e.height, m = d * p, y = new Int32Array(m), v = 0; v < m; v++) y[v] = D._getARGB(f, v);

        var g,
            b,
            _,
            x,
            w = new Int32Array(m),
            S = new Int32Array(m),
            M = new Int32Array(m),
            T = new Int32Array(m),
            E = 0;

        for (!function (e) {
          var t = 3.5 * e | 0;

          if (L !== (t = t < 1 ? 1 : t < 248 ? t : 248)) {
            O = 1 + (L = t) << 1, P = new Int32Array(O), R = new Array(O);

            for (var r = 0; r < O; r++) R[r] = new Int32Array(256);

            for (var i, n, a, o, s = 1, l = t - 1; s < t; s++) {
              P[t + s] = P[l] = n = l * l, a = R[t + s], o = R[l--];

              for (var u = 0; u < 256; u++) a[u] = o[u] = n * u;
            }

            i = P[t] = t * t, a = R[t];

            for (var h = 0; h < 256; h++) a[h] = i * h;
          }
        }(t), b = 0; b < p; b++) {
          for (g = 0; g < d; g++) {
            if (a = n = i = o = r = 0, (s = g - L) < 0) c = -s, s = 0;else {
              if (d <= s) break;
              c = 0;
            }

            for (_ = c; _ < O && !(d <= s); _++) {
              var C = y[s + E];
              o += (x = R[_])[(-16777216 & C) >>> 24], i += x[(16711680 & C) >> 16], n += x[(65280 & C) >> 8], a += x[255 & C], r += P[_], s++;
            }

            w[l = E + g] = o / r, S[l] = i / r, M[l] = n / r, T[l] = a / r;
          }

          E += d;
        }

        for (h = (u = -L) * d, b = E = 0; b < p; b++) {
          for (g = 0; g < d; g++) {
            if (a = n = i = o = r = 0, u < 0) c = l = -u, s = g;else {
              if (p <= u) break;
              c = 0, l = u, s = g + h;
            }

            for (_ = c; _ < O && !(p <= l); _++) o += (x = R[_])[w[s]], i += x[S[s]], n += x[M[s]], a += x[T[s]], r += P[_], l++, s += d;

            y[g + E] = o / r << 24 | i / r << 16 | n / r << 8 | a / r;
          }

          E += d, h += d, u++;
        }

        D._setPixels(f, y);
      }

      D._toPixels = function (e) {
        return e instanceof ImageData ? e.data : e.getContext("2d").getImageData(0, 0, e.width, e.height).data;
      }, D._getARGB = function (e, t) {
        var r = 4 * t;
        return e[3 + r] << 24 & 4278190080 | e[r] << 16 & 16711680 | e[1 + r] << 8 & 65280 | 255 & e[2 + r];
      }, D._setPixels = function (e, t) {
        for (var r = 0, i = 0, n = e.length; i < n; i++) e[(r = 4 * i) + 0] = (16711680 & t[i]) >>> 16, e[r + 1] = (65280 & t[i]) >>> 8, e[r + 2] = 255 & t[i], e[r + 3] = (4278190080 & t[i]) >>> 24;
      }, D._toImageData = function (e) {
        return e instanceof ImageData ? e : e.getContext("2d").getImageData(0, 0, e.width, e.height);
      }, D._createImageData = function (e, t) {
        return D._tmpCanvas = document.createElement("canvas"), D._tmpCtx = D._tmpCanvas.getContext("2d"), this._tmpCtx.createImageData(e, t);
      }, D.apply = function (e, t, r) {
        var i = e.getContext("2d"),
            n = i.getImageData(0, 0, e.width, e.height),
            a = t(n, r);
        a instanceof ImageData ? i.putImageData(a, 0, 0, 0, 0, e.width, e.height) : i.putImageData(n, 0, 0, 0, 0, e.width, e.height);
      }, D.threshold = function (e, t) {
        var r = D._toPixels(e);

        void 0 === t && (t = .5);

        for (var i = Math.floor(255 * t), n = 0; n < r.length; n += 4) {
          var a = void 0;
          a = i <= .2126 * r[n] + .7152 * r[n + 1] + .0722 * r[n + 2] ? 255 : 0, r[n] = r[n + 1] = r[n + 2] = a;
        }
      }, D.gray = function (e) {
        for (var t = D._toPixels(e), r = 0; r < t.length; r += 4) {
          var i = .2126 * t[r] + .7152 * t[r + 1] + .0722 * t[r + 2];
          t[r] = t[r + 1] = t[r + 2] = i;
        }
      }, D.opaque = function (e) {
        for (var t = D._toPixels(e), r = 0; r < t.length; r += 4) t[r + 3] = 255;

        return t;
      }, D.invert = function (e) {
        for (var t = D._toPixels(e), r = 0; r < t.length; r += 4) t[r] = 255 - t[r], t[r + 1] = 255 - t[r + 1], t[r + 2] = 255 - t[r + 2];
      }, D.posterize = function (e, t) {
        var r = D._toPixels(e);

        if (t < 2 || 255 < t) throw new Error("Level must be greater than 2 and less than 255 for posterize");

        for (var i = t - 1, n = 0; n < r.length; n += 4) {
          var a = r[n],
              o = r[n + 1],
              s = r[n + 2];
          r[n] = 255 * (a * t >> 8) / i, r[n + 1] = 255 * (o * t >> 8) / i, r[n + 2] = 255 * (s * t >> 8) / i;
        }
      }, D.dilate = function (e) {
        for (var t, r, i, n, a, o, s, l, u, h, c, f, d, p, m, y, v, g = D._toPixels(e), b = 0, _ = g.length ? g.length / 4 : 0, x = new Int32Array(_); b < _;) for (r = (t = b) + e.width; b < r;) i = n = D._getARGB(g, b), (s = b - 1) < t && (s = b), r <= (o = b + 1) && (o = b), (l = b - e.width) < 0 && (l = 0), _ <= (u = b + e.width) && (u = b), f = D._getARGB(g, l), c = D._getARGB(g, s), d = D._getARGB(g, u), (a = 77 * (i >> 16 & 255) + 151 * (i >> 8 & 255) + 28 * (255 & i)) < (m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c)) && (n = c, a = m), a < (p = 77 * ((h = D._getARGB(g, o)) >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h)) && (n = h, a = p), a < (y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f)) && (n = f, a = y), a < (v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d)) && (n = d, a = v), x[b++] = n;

        D._setPixels(g, x);
      }, D.erode = function (e) {
        for (var t, r, i, n, a, o, s, l, u, h, c, f, d, p, m, y, v, g = D._toPixels(e), b = 0, _ = g.length ? g.length / 4 : 0, x = new Int32Array(_); b < _;) for (r = (t = b) + e.width; b < r;) i = n = D._getARGB(g, b), (s = b - 1) < t && (s = b), r <= (o = b + 1) && (o = b), (l = b - e.width) < 0 && (l = 0), _ <= (u = b + e.width) && (u = b), f = D._getARGB(g, l), c = D._getARGB(g, s), d = D._getARGB(g, u), (m = 77 * (c >> 16 & 255) + 151 * (c >> 8 & 255) + 28 * (255 & c)) < (a = 77 * (i >> 16 & 255) + 151 * (i >> 8 & 255) + 28 * (255 & i)) && (n = c, a = m), (p = 77 * ((h = D._getARGB(g, o)) >> 16 & 255) + 151 * (h >> 8 & 255) + 28 * (255 & h)) < a && (n = h, a = p), (y = 77 * (f >> 16 & 255) + 151 * (f >> 8 & 255) + 28 * (255 & f)) < a && (n = f, a = y), (v = 77 * (d >> 16 & 255) + 151 * (d >> 8 & 255) + 28 * (255 & d)) < a && (n = d, a = v), x[b++] = n;

        D._setPixels(g, x);
      }, D.blur = function (e, t) {
        i(e, t);
      };
      var n = D;
      r.default = n;
    }, {}],
    58: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var D = i(e("../core/main")),
          k = i(e("omggif"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function A(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      D.default.prototype.createImage = function (e, t) {
        return D.default._validateParameters("createImage", arguments), new D.default.Image(e, t);
      }, D.default.prototype.saveCanvas = function () {
        D.default._validateParameters("saveCanvas", arguments);

        var e,
            t,
            r,
            i,
            n = [].slice.call(arguments);

        switch (arguments[0] instanceof HTMLCanvasElement ? (e = arguments[0], n.shift()) : arguments[0] instanceof D.default.Element ? (e = arguments[0].elt, n.shift()) : e = this._curElement && this._curElement.elt, 1 <= n.length && (t = n[0]), 2 <= n.length && (r = n[1]), r = r || D.default.prototype._checkFileExtension(t, r)[1] || "png") {
          default:
            i = "image/png";
            break;

          case "jpeg":
          case "jpg":
            i = "image/jpeg";
        }

        e.toBlob(function (e) {
          D.default.prototype.downloadFile(e, t, r);
        }, i);
      }, D.default.prototype.saveGif = function (p, e) {
        var m = p.gifProperties,
            t = m.loopLimit;
        1 === t ? t = null : null === t && (t = 0);

        for (var r = new Uint8Array(p.width * p.height * m.numFrames), y = [], i = {}, n = 0; n < m.numFrames; n++) {
          for (var a = new Set(), o = m.frames[n].image.data, s = o.length, l = new Uint32Array(p.width * p.height), u = 0, h = 0; u < s; u += 4, h++) {
            var c = o[u + 0] << 16 | o[u + 1] << 8 | o[u + 2] << 0;
            a.add(c), l[h] = c;
          }

          var f = A(a).sort().toString();
          void 0 === i[f] ? i[f] = {
            freq: 1,
            frames: [n]
          } : (i[f].freq += 1, i[f].frames.push(n)), y.push(l);
        }

        var v = [],
            d = Object.keys(i).sort(function (e, t) {
          return i[t].freq - i[e].freq;
        }),
            g = d[0].split(",").map(function (e) {
          return parseInt(e);
        });
        v = v.concat(i[g].frames);

        for (var b = new Set(g), _ = 1; _ < d.length; _++) {
          var x = d[_].split(",").map(function (e) {
            return parseInt(e);
          }).filter(function (e) {
            return !b.has(e);
          });

          if (g.length + x.length <= 256) {
            for (var w = 0; w < x.length; w++) g.push(x[w]), b.add(x[w]);

            v = v.concat(i[d[_]].frames);
          }
        }

        v = new Set(v);

        for (var S = {}, M = 0; M < g.length; M++) S[g[M]] || (S[g[M]] = M);

        for (var T = 1; T < g.length;) T <<= 1;

        g.length = T;

        for (var E = {
          loop: t,
          palette: new Uint32Array(g)
        }, C = new k.default.GifWriter(r, p.width, p.height, E), L = {}, O = function (e) {
          for (var t = !v.has(e), r = t ? [] : g, i = new Uint8Array(p.width * p.height), n = {}, a = new Set(), o = 0; o < y[e].length; o++) {
            var s = y[e][o];
            t ? (void 0 === n[s] && (n[s] = r.length, r.push(s)), i[o] = n[s]) : i[o] = S[s], 0 < e && y[e - 1][o] !== s && a.add(s);
          }

          var l = {},
              u = r.filter(function (e) {
            return !a.has(e);
          });

          if (0 < u.length) {
            var h = u[0],
                c = t ? n[h] : S[h];

            if (0 < e) {
              for (var f = 0; f < y[e].length; f++) y[e - 1][f] === y[e][f] && (i[f] = c);

              l.transparent = c, L.frameOpts.disposal = 1;
            }
          }

          if (l.delay = m.frames[e].delay / 10, t) {
            for (var d = 1; d < r.length;) d <<= 1;

            r.length = d, l.palette = new Uint32Array(r);
          }

          0 < e && C.addFrame(0, 0, p.width, p.height, L.pixelPaletteIndex, L.frameOpts), L = {
            pixelPaletteIndex: i,
            frameOpts: l
          };
        }, P = 0; P < m.numFrames; P++) O(P);

        L.frameOpts.disposal = 1, C.addFrame(0, 0, p.width, p.height, L.pixelPaletteIndex, L.frameOpts);
        var R = new Blob([r.slice(0, C.end())], {
          type: "image/gif"
        });
        D.default.prototype.downloadFile(R, e, "gif");
      }, D.default.prototype.saveFrames = function (e, t, r, i, o) {
        D.default._validateParameters("saveFrames", arguments);

        var n = r || 3;
        n = D.default.prototype.constrain(n, 0, 15), n *= 1e3;
        var a = i || 15;
        a = D.default.prototype.constrain(a, 0, 22);
        var s = 0,
            l = D.default.prototype._makeFrame,
            u = this._curElement.elt,
            h = [],
            c = setInterval(function () {
          h.push(l(e + s, t, u)), s++;
        }, 1e3 / a);
        setTimeout(function () {
          if (clearInterval(c), o) o(h);else {
            var e = !0,
                t = !1,
                r = void 0;

            try {
              for (var i, n = h[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
                var a = i.value;
                D.default.prototype.downloadFile(a.imageData, a.filename, a.ext);
              }
            } catch (e) {
              t = !0, r = e;
            } finally {
              try {
                e || null == n.return || n.return();
              } finally {
                if (t) throw r;
              }
            }
          }
          h = [];
        }, n + .01);
      }, D.default.prototype._makeFrame = function (e, t, r) {
        var i, n;
        if (i = this ? this._curElement.elt : r, t) switch (t.toLowerCase()) {
          case "png":
            n = "image/png";
            break;

          case "jpeg":
          case "jpg":
            n = "image/jpeg";
            break;

          default:
            n = "image/png";
        } else t = "png", n = "image/png";
        var a = i.toDataURL(n);
        a = a.replace(n, "image/octet-stream");
        var o = {};
        return o.imageData = a, o.filename = e, o.ext = t, o;
      };
      var n = D.default;
      r.default = n;
    }, {
      "../core/main": 36,
      omggif: 11
    }],
    59: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var x = n(e("../core/main")),
          c = n(e("./filters")),
          w = n(e("../core/helpers")),
          i = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          m = n(e("omggif"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function S(e, t) {
        return 0 < e && e < t ? e : t;
      }

      e("../core/friendly_errors/validate_params"), e("../core/friendly_errors/file_errors"), e("../core/friendly_errors/fes_core"), x.default.prototype.loadImage = function (i, n, a) {
        x.default._validateParameters("loadImage", arguments);

        var o = new x.default.Image(1, 1, this),
            s = this,
            e = new Request(i, {
          method: "GET",
          mode: "cors"
        });
        return fetch(i, e).then(function (e) {
          var t = e.headers.get("content-type");
          if (null === t && console.warn("The image you loaded does not have a Content-Type header. If you are using the online editor consider reuploading the asset."), t && t.includes("image/gif")) e.arrayBuffer().then(function (e) {
            e && function (e, r, t, i, n) {
              var a = new m.default.GifReader(e);
              r.width = r.canvas.width = a.width, r.height = r.canvas.height = a.height;
              var o = [],
                  s = a.numFrames(),
                  l = new Uint8ClampedArray(r.width * r.height * 4);

              if (1 < s) {
                for (var u = function (e, t) {
                  try {
                    t.decodeAndBlitFrameRGBA(e, l);
                  } catch (e) {
                    x.default._friendlyFileLoadError(8, r.src), "function" == typeof i ? i(e) : console.error(e);
                  }
                }, h = 0; h < s; h++) {
                  var c = a.frameInfo(h);
                  1 === a.frameInfo(h).disposal && 0 < h ? r.drawingContext.putImageData(o[h - 1].image, 0, 0) : (r.drawingContext.clearRect(0, 0, r.width, r.height), l = new Uint8ClampedArray(r.width * r.height * 4)), u(h, a);
                  var f = new ImageData(l, r.width, r.height);
                  r.drawingContext.putImageData(f, 0, 0);
                  var d = c.delay;
                  0 === d && (d = 10), o.push({
                    image: r.drawingContext.getImageData(0, 0, r.width, r.height),
                    delay: 10 * d
                  });
                }

                var p = a.loopCount();
                null === p ? p = 1 : 0 === p && (p = null), r.drawingContext.putImageData(o[0].image, 0, 0), r.gifProperties = {
                  displayIndex: 0,
                  loopLimit: p,
                  loopCount: 0,
                  frames: o,
                  numFrames: s,
                  playing: !0,
                  timeDisplayed: 0,
                  lastChangeTime: 0
                };
              }

              "function" == typeof t && t(r);
              n();
            }(new Uint8Array(e), o, n, a, function (e) {
              s._decrementPreload();
            }.bind(s));
          }, function (e) {
            "function" == typeof a ? a(e) : console.error(e);
          });else {
            var r = new Image();
            r.onload = function () {
              o.width = o.canvas.width = r.width, o.height = o.canvas.height = r.height, o.drawingContext.drawImage(r, 0, 0), o.modified = !0, "function" == typeof n && n(o), s._decrementPreload();
            }, r.onerror = function (e) {
              x.default._friendlyFileLoadError(0, r.src), "function" == typeof a ? a(e) : console.error(e);
            }, 0 !== i.indexOf("data:image/") && (r.crossOrigin = "Anonymous"), r.src = i;
          }
          o.modified = !0;
        }), o;
      }, x.default.prototype.image = function (e, t, r, i, n, a, o, s, l) {
        x.default._validateParameters("image", arguments);

        var u = e.width,
            h = e.height;
        e.elt && e.elt.videoWidth && !e.canvas && (u = e.elt.videoWidth, h = e.elt.videoHeight);
        var c = t,
            f = r,
            d = i || u,
            p = n || h,
            m = a || 0,
            y = o || 0,
            v = s || u,
            g = l || h;
        v = S(v, u), g = S(g, h);
        var b = 1;
        e.elt && !e.canvas && e.elt.style.width && (b = e.elt.videoWidth && !i ? e.elt.videoWidth : e.elt.width, b /= parseInt(e.elt.style.width, 10)), m *= b, y *= b, g *= b, v *= b;

        var _ = w.default.modeAdjust(c, f, d, p, this._renderer._imageMode);

        this._renderer.image(e, m, y, v, g, _.x, _.y, _.w, _.h);
      }, x.default.prototype.tint = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        x.default._validateParameters("tint", t);

        var i = this.color.apply(this, t);
        this._renderer._tint = i.levels;
      }, x.default.prototype.noTint = function () {
        this._renderer._tint = null;
      }, x.default.prototype._getTintedImageCanvas = function (e) {
        if (!e.canvas) return e;

        var t = c.default._toPixels(e.canvas),
            r = document.createElement("canvas");

        r.width = e.canvas.width, r.height = e.canvas.height;

        for (var i = r.getContext("2d"), n = i.createImageData(e.canvas.width, e.canvas.height), a = n.data, o = 0; o < t.length; o += 4) {
          var s = t[o],
              l = t[o + 1],
              u = t[o + 2],
              h = t[o + 3];
          a[o] = s * this._renderer._tint[0] / 255, a[o + 1] = l * this._renderer._tint[1] / 255, a[o + 2] = u * this._renderer._tint[2] / 255, a[o + 3] = h * this._renderer._tint[3] / 255;
        }

        return i.putImageData(n, 0, 0), r;
      }, x.default.prototype.imageMode = function (e) {
        x.default._validateParameters("imageMode", arguments), e !== i.CORNER && e !== i.CORNERS && e !== i.CENTER || (this._renderer._imageMode = e);
      };
      var a = x.default;
      r.default = a;
    }, {
      "../core/constants": 26,
      "../core/friendly_errors/fes_core": 28,
      "../core/friendly_errors/file_errors": 29,
      "../core/friendly_errors/validate_params": 31,
      "../core/helpers": 32,
      "../core/main": 36,
      "./filters": 57,
      omggif: 11
    }],
    60: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var n = a(e("../core/main")),
          i = a(e("./filters"));

      function a(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      n.default.Image = function (e, t) {
        this.width = e, this.height = t, this.canvas = document.createElement("canvas"), this.canvas.width = this.width, this.canvas.height = this.height, this.drawingContext = this.canvas.getContext("2d"), (this._pixelsState = this)._pixelDensity = 1, this.gifProperties = null, this._modified = !1, this.pixels = [];
      }, n.default.Image.prototype._animateGif = function (e) {
        var t = this.gifProperties,
            r = e._lastFrameTime + e.deltaTime;

        if (0 === t.lastChangeTime && (t.lastChangeTime = r), t.playing) {
          t.timeDisplayed = r - t.lastChangeTime;
          var i = t.frames[t.displayIndex].delay;

          if (t.timeDisplayed >= i) {
            var n = Math.floor(t.timeDisplayed / i);
            if (t.timeDisplayed = 0, t.lastChangeTime = r, t.displayIndex += n, t.loopCount = Math.floor(t.displayIndex / t.numFrames), null !== t.loopLimit && t.loopCount >= t.loopLimit) t.playing = !1;else {
              var a = t.displayIndex % t.numFrames;
              this.drawingContext.putImageData(t.frames[a].image, 0, 0), t.displayIndex = a, this.setModified(!0);
            }
          }
        }
      }, n.default.Image.prototype._setProperty = function (e, t) {
        this[e] = t, this.setModified(!0);
      }, n.default.Image.prototype.loadPixels = function () {
        n.default.Renderer2D.prototype.loadPixels.call(this), this.setModified(!0);
      }, n.default.Image.prototype.updatePixels = function (e, t, r, i) {
        n.default.Renderer2D.prototype.updatePixels.call(this, e, t, r, i), this.setModified(!0);
      }, n.default.Image.prototype.get = function (e, t, r, i) {
        return n.default._validateParameters("p5.Image.get", arguments), n.default.Renderer2D.prototype.get.apply(this, arguments);
      }, n.default.Image.prototype._getPixel = n.default.Renderer2D.prototype._getPixel, n.default.Image.prototype.set = function (e, t, r) {
        n.default.Renderer2D.prototype.set.call(this, e, t, r), this.setModified(!0);
      }, n.default.Image.prototype.resize = function (e, t) {
        0 === e && 0 === t ? (e = this.canvas.width, t = this.canvas.height) : 0 === e ? e = this.canvas.width * t / this.canvas.height : 0 === t && (t = this.canvas.height * e / this.canvas.width), e = Math.floor(e), t = Math.floor(t);
        var r = document.createElement("canvas");
        if (r.width = e, r.height = t, this.gifProperties) for (var i = this.gifProperties, n = function (e, t) {
          for (var r = 0, i = 0; i < t.height; i++) for (var n = 0; n < t.width; n++) {
            var a = Math.floor(n * e.width / t.width),
                o = 4 * (Math.floor(i * e.height / t.height) * e.width + a);
            t.data[r++] = e.data[o++], t.data[r++] = e.data[o++], t.data[r++] = e.data[o++], t.data[r++] = e.data[o++];
          }
        }, a = 0; a < i.numFrames; a++) {
          var o = this.drawingContext.createImageData(e, t);
          n(i.frames[a].image, o), i.frames[a].image = o;
        }
        r.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, r.width, r.height), this.canvas.width = this.width = e, this.canvas.height = this.height = t, this.drawingContext.drawImage(r, 0, 0, e, t, 0, 0, e, t), 0 < this.pixels.length && this.loadPixels(), this.setModified(!0);
      }, n.default.Image.prototype.copy = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        n.default.prototype.copy.apply(this, t);
      }, n.default.Image.prototype.mask = function (e) {
        void 0 === e && (e = this);
        var t = this.drawingContext.globalCompositeOperation,
            r = 1;
        e instanceof n.default.Renderer && (r = e._pInst._pixelDensity);
        var i = [e, 0, 0, r * e.width, r * e.height, 0, 0, this.width, this.height];
        this.drawingContext.globalCompositeOperation = "destination-in", n.default.Image.prototype.copy.apply(this, i), this.drawingContext.globalCompositeOperation = t, this.setModified(!0);
      }, n.default.Image.prototype.filter = function (e, t) {
        i.default.apply(this.canvas, i.default[e], t), this.setModified(!0);
      }, n.default.Image.prototype.blend = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        n.default._validateParameters("p5.Image.blend", arguments), n.default.prototype.blend.apply(this, t), this.setModified(!0);
      }, n.default.Image.prototype.setModified = function (e) {
        this._modified = e;
      }, n.default.Image.prototype.isModified = function () {
        return this._modified;
      }, n.default.Image.prototype.save = function (e, t) {
        this.gifProperties ? n.default.prototype.saveGif(this, e) : n.default.prototype.saveCanvas(this.canvas, e, t);
      }, n.default.Image.prototype.reset = function () {
        if (this.gifProperties) {
          var e = this.gifProperties;
          e.playing = !0, e.timeSinceStart = 0, e.timeDisplayed = 0, e.lastChangeTime = 0, e.loopCount = 0, e.displayIndex = 0, this.drawingContext.putImageData(e.frames[0].image, 0, 0);
        }
      }, n.default.Image.prototype.getCurrentFrame = function () {
        if (this.gifProperties) {
          var e = this.gifProperties;
          return e.displayIndex % e.numFrames;
        }
      }, n.default.Image.prototype.setFrame = function (e) {
        if (this.gifProperties) {
          var t = this.gifProperties;
          e < t.numFrames && 0 <= e ? (t.timeDisplayed = 0, t.lastChangeTime = 0, t.displayIndex = e, this.drawingContext.putImageData(t.frames[e].image, 0, 0)) : console.log("Cannot set GIF to a frame number that is higher than total number of frames or below zero.");
        }
      }, n.default.Image.prototype.numFrames = function () {
        if (this.gifProperties) return this.gifProperties.numFrames;
      }, n.default.Image.prototype.play = function () {
        this.gifProperties && (this.gifProperties.playing = !0);
      }, n.default.Image.prototype.pause = function () {
        this.gifProperties && (this.gifProperties.playing = !1);
      }, n.default.Image.prototype.delay = function (e, t) {
        if (this.gifProperties) {
          var r = this.gifProperties;
          if (t < r.numFrames && 0 <= t) r.frames[t].delay = e;else {
            var i = !0,
                n = !1,
                a = void 0;

            try {
              for (var o, s = r.frames[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                o.value.delay = e;
              }
            } catch (e) {
              n = !0, a = e;
            } finally {
              try {
                i || null == s.return || s.return();
              } finally {
                if (n) throw a;
              }
            }
          }
        }
      };
      var o = n.default.Image;
      r.default = o;
    }, {
      "../core/main": 36,
      "./filters": 57
    }],
    61: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var d = n(e("../core/main")),
          i = n(e("./filters"));

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      e("../color/p5.Color"), d.default.prototype.pixels = [], d.default.prototype.blend = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i;
        (d.default._validateParameters("blend", t), this._renderer) ? (i = this._renderer).blend.apply(i, t) : d.default.Renderer2D.prototype.blend.apply(this, t);
      }, d.default.prototype.copy = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        var i, n, a, o, s, l, u, h, c;
        if (d.default._validateParameters("copy", t), 9 === t.length) i = t[0], n = t[1], a = t[2], o = t[3], s = t[4], l = t[5], u = t[6], h = t[7], c = t[8];else {
          if (8 !== t.length) throw new Error("Signature not supported");
          i = this, n = t[0], a = t[1], o = t[2], s = t[3], l = t[4], u = t[5], h = t[6], c = t[7];
        }

        d.default.prototype._copyHelper(this, i, n, a, o, s, l, u, h, c);
      }, d.default.prototype._copyHelper = function (e, t, r, i, n, a, o, s, l, u) {
        t.loadPixels();
        var h = t.canvas.width / t.width,
            c = 0,
            f = 0;
        t._renderer && t._renderer.isP3D && (c = t.width / 2, f = t.height / 2), e._renderer && e._renderer.isP3D ? d.default.RendererGL.prototype.image.call(e._renderer, t, r + c, i + f, n, a, o, s, l, u) : e.drawingContext.drawImage(t.canvas, h * (r + c), h * (i + f), h * n, h * a, o, s, l, u);
      }, d.default.prototype.filter = function (e, t) {
        d.default._validateParameters("filter", arguments), void 0 !== this.canvas ? i.default.apply(this.canvas, i.default[e], t) : i.default.apply(this.elt, i.default[e], t);
      }, d.default.prototype.get = function (e, t, r, i) {
        var n;
        return d.default._validateParameters("get", arguments), (n = this._renderer).get.apply(n, arguments);
      }, d.default.prototype.loadPixels = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        d.default._validateParameters("loadPixels", t), this._renderer.loadPixels();
      }, d.default.prototype.set = function (e, t, r) {
        this._renderer.set(e, t, r);
      }, d.default.prototype.updatePixels = function (e, t, r, i) {
        d.default._validateParameters("updatePixels", arguments), 0 !== this.pixels.length && this._renderer.updatePixels(e, t, r, i);
      };
      var a = d.default;
      r.default = a;
    }, {
      "../color/p5.Color": 24,
      "../core/main": 36,
      "./filters": 57
    }],
    62: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var v = i(e("../core/main"));
      e("whatwg-fetch"), e("es6-promise/auto");
      var y = i(e("fetch-jsonp")),
          s = i(e("file-saver"));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      function b(e, t) {
        var r = {};
        if (void 0 === (t = t || [])) for (var i = 0; i < e.length; i++) t[i.toString()] = i;

        for (var n = 0; n < t.length; n++) {
          var a = t[n],
              o = e[n];
          r[a] = o;
        }

        return r;
      }

      function m(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      }

      function l(e, t) {
        t && !0 !== t && "true" !== t || (t = "");
        var r = "";
        return (e = e || "untitled") && e.includes(".") && (r = e.split(".").pop()), t && r !== t && (r = t, e = "".concat(e, ".").concat(r)), [e, r];
      }

      e("../core/friendly_errors/validate_params"), e("../core/friendly_errors/file_errors"), e("../core/friendly_errors/fes_core"), v.default.prototype.loadJSON = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        v.default._validateParameters("loadJSON", t);

        for (var i, n, a, o = t[0], s = {}, l = "json", u = 1; u < t.length; u++) {
          var h = t[u];
          "string" == typeof h ? "jsonp" !== h && "json" !== h || (l = h) : "function" == typeof h ? i ? n = h : i = h : "object" === g(h) && (h.hasOwnProperty("jsonpCallback") || h.hasOwnProperty("jsonpCallbackFunction")) && (l = "jsonp", a = h);
        }

        var c = this;
        return this.httpDo(o, "GET", a, l, function (e) {
          for (var t in e) s[t] = e[t];

          void 0 !== i && i(e), c._decrementPreload();
        }, function (e) {
          if (v.default._friendlyFileLoadError(5, o), !n) throw e;
          n(e);
        }), s;
      }, v.default.prototype.loadStrings = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        v.default._validateParameters("loadStrings", t);

        for (var n, i, a = [], o = 1; o < t.length; o++) {
          var s = t[o];
          "function" == typeof s && (void 0 === n ? n = s : void 0 === i && (i = s));
        }

        var l = this;
        return v.default.prototype.httpDo.call(this, t[0], "GET", "text", function (e) {
          for (var t = e.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/), r = 0, i = t.length; r < i; r += 32768) Array.prototype.push.apply(a, t.slice(r, Math.min(r + 32768, i)));

          void 0 !== n && n(a), l._decrementPreload();
        }, function (e) {
          if (v.default._friendlyFileLoadError(3, e), !i) throw e;
          i(e);
        }), a;
      }, v.default.prototype.loadTable = function (t) {
        var f,
            r,
            d,
            e = [],
            p = !1,
            i = t.substring(t.lastIndexOf(".") + 1, t.length);
        "csv" === i ? d = "," : "ssv" === i ? d = ";" : "tsv" === i && (d = "\t");

        for (var n = 1; n < arguments.length; n++) "function" == typeof arguments[n] ? void 0 === f ? f = arguments[n] : void 0 === r && (r = arguments[n]) : "string" == typeof arguments[n] && (e.push(arguments[n]), "header" === arguments[n] && (p = !0), "csv" === arguments[n] ? d = "," : "ssv" === arguments[n] ? d = ";" : "tsv" === arguments[n] && (d = "\t"));

        var m = new v.default.Table(),
            y = this;
        return this.httpDo(t, "GET", "table", function (e) {
          for (var t, r, i = {}, n = [], a = 0, o = null, s = function () {
            i.currentState = 0, i.token = "";
          }, l = function () {
            o.push(i.token), s();
          }, u = function () {
            i.currentState = 4, n.push(o), o = null;
          };;) {
            if (null == (t = e[a++])) {
              if (i.escaped) throw new Error("Unclosed quote in file.");

              if (o) {
                l(), u();
                break;
              }
            }

            if (null === o && (i.escaped = !1, o = [], s()), 0 === i.currentState) {
              if ('"' === t) {
                i.escaped = !0, i.currentState = 1;
                continue;
              }

              i.currentState = 1;
            }

            if (1 === i.currentState && i.escaped) {
              if ('"' === t) '"' === e[a] ? (i.token += '"', a++) : (i.escaped = !1, i.currentState = 2);else {
                if ("\r" === t) continue;
                i.token += t;
              }
            } else "\r" === t ? ("\n" === e[a] && a++, l(), u()) : "\n" === t ? (l(), u()) : t === d ? l() : 1 === i.currentState && (i.token += t);
          }

          if (p) m.columns = n.shift();else for (var h = 0; h < n[0].length; h++) m.columns[h] = "null";

          for (var c = 0; c < n.length; c++) (1 !== n[c].length || "undefined" !== n[c][0] && "" !== n[c][0]) && ((r = new v.default.TableRow()).arr = n[c], r.obj = b(n[c], m.columns), m.addRow(r));

          "function" == typeof f && f(m), y._decrementPreload();
        }, function (e) {
          v.default._friendlyFileLoadError(2, t), r ? r(e) : console.error(e);
        }), m;
      }, v.default.prototype.loadXML = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        for (var i, n, a = new v.default.XML(), o = 1; o < t.length; o++) {
          var s = t[o];
          "function" == typeof s && (void 0 === i ? i = s : void 0 === n && (n = s));
        }

        var l = this;
        return this.httpDo(t[0], "GET", "xml", function (e) {
          for (var t in e) a[t] = e[t];

          void 0 !== i && i(a), l._decrementPreload();
        }, function (e) {
          if (v.default._friendlyFileLoadError(1, e), !n) throw e;
          n(e);
        }), a;
      }, v.default.prototype.loadBytes = function (t, r, i) {
        var n = {},
            a = this;
        return this.httpDo(t, "GET", "arrayBuffer", function (e) {
          n.bytes = new Uint8Array(e), "function" == typeof r && r(n), a._decrementPreload();
        }, function (e) {
          if (v.default._friendlyFileLoadError(6, t), !i) throw e;
          i(e);
        }), n;
      }, v.default.prototype.httpGet = function () {
        v.default._validateParameters("httpGet", arguments);

        var e = Array.prototype.slice.call(arguments);
        return e.splice(1, 0, "GET"), v.default.prototype.httpDo.apply(this, e);
      }, v.default.prototype.httpPost = function () {
        v.default._validateParameters("httpPost", arguments);

        var e = Array.prototype.slice.call(arguments);
        return e.splice(1, 0, "POST"), v.default.prototype.httpDo.apply(this, e);
      }, v.default.prototype.httpDo = function () {
        for (var i, e, t, r, n, a = {}, o = 0, s = "text/plain", l = arguments.length - 1; 0 < l && "function" == typeof (l < 0 || arguments.length <= l ? void 0 : arguments[l]); l--) o++;

        var u = arguments.length <= 0 ? void 0 : arguments[0];
        if (2 == arguments.length - o && "string" == typeof u && "object" === g(arguments.length <= 1 ? void 0 : arguments[1])) r = new Request(u, arguments.length <= 1 ? void 0 : arguments[1]), e = arguments.length <= 2 ? void 0 : arguments[2], t = arguments.length <= 3 ? void 0 : arguments[3];else {
          for (var h, c = "GET", f = 1; f < arguments.length; f++) {
            var d = f < 0 || arguments.length <= f ? void 0 : arguments[f];
            if ("string" == typeof d) "GET" === d || "POST" === d || "PUT" === d || "DELETE" === d ? c = d : "json" === d || "jsonp" === d || "binary" === d || "arrayBuffer" === d || "xml" === d || "text" === d || "table" === d ? i = d : h = d;else if ("number" == typeof d) h = d.toString();else if ("object" === g(d)) {
              if (d.hasOwnProperty("jsonpCallback") || d.hasOwnProperty("jsonpCallbackFunction")) for (var p in d) a[p] = d[p];else s = d instanceof v.default.XML ? (h = d.serialize(), "application/xml") : (h = JSON.stringify(d), "application/json");
            } else "function" == typeof d && (e ? t = d : e = d);
          }

          var m = "GET" === c ? new Headers() : new Headers({
            "Content-Type": s
          });
          r = new Request(u, {
            method: c,
            mode: "cors",
            body: h,
            headers: m
          });
        }
        return (n = (n = "jsonp" === (i = i || (u.includes("json") ? "json" : u.includes("xml") ? "xml" : "text")) ? (0, y.default)(u, a) : fetch(r)).then(function (e) {
          if (!e.ok) {
            var t = new Error(e.body);
            throw t.status = e.status, t.ok = !1, t;
          }

          var r = 0;

          switch ("jsonp" !== i && (r = e.headers.get("content-length")), r && 64e6 < r && v.default._friendlyFileLoadError(7, u), i) {
            case "json":
            case "jsonp":
              return e.json();

            case "binary":
              return e.blob();

            case "arrayBuffer":
              return e.arrayBuffer();

            case "xml":
              return e.text().then(function (e) {
                var t = new DOMParser().parseFromString(e, "text/xml");
                return new v.default.XML(t.documentElement);
              });

            default:
              return e.text();
          }
        })).then(e || function () {}), n.catch(t || console.error), n;
      }, window.URL = window.URL || window.webkitURL, v.default.prototype._pWriters = [], v.default.prototype.createWriter = function (e, t) {
        var r;

        for (var i in v.default.prototype._pWriters) if (v.default.prototype._pWriters[i].name === e) return r = new v.default.PrintWriter(e + this.millis(), t), v.default.prototype._pWriters.push(r), r;

        return r = new v.default.PrintWriter(e, t), v.default.prototype._pWriters.push(r), r;
      }, v.default.PrintWriter = function (r, i) {
        var n = this;
        this.name = r, this.content = "", this.write = function (e) {
          this.content += e;
        }, this.print = function (e) {
          this.content += "".concat(e, "\n");
        }, this.clear = function () {
          this.content = "";
        }, this.close = function () {
          var e = [];

          for (var t in e.push(this.content), v.default.prototype.writeFile(e, r, i), v.default.prototype._pWriters) v.default.prototype._pWriters[t].name === this.name && v.default.prototype._pWriters.splice(t, 1);

          n.clear(), n = {};
        };
      }, v.default.prototype.save = function (e, t, r) {
        var i = arguments,
            n = this._curElement ? this._curElement.elt : this.elt;
        if (0 !== i.length) {
          if (i[0] instanceof v.default.Renderer || i[0] instanceof v.default.Graphics) v.default.prototype.saveCanvas(i[0].elt, i[1], i[2]);else if (1 === i.length && "string" == typeof i[0]) v.default.prototype.saveCanvas(n, i[0]);else switch (l(i[1], i[2])[1]) {
            case "json":
              return void v.default.prototype.saveJSON(i[0], i[1], i[2]);

            case "txt":
              return void v.default.prototype.saveStrings(i[0], i[1], i[2]);

            default:
              i[0] instanceof Array ? v.default.prototype.saveStrings(i[0], i[1], i[2]) : i[0] instanceof v.default.Table ? v.default.prototype.saveTable(i[0], i[1], i[2]) : i[0] instanceof v.default.Image ? v.default.prototype.saveCanvas(i[0].canvas, i[1]) : i[0] instanceof v.default.SoundFile && v.default.prototype.saveSound(i[0], i[1], i[2], i[3]);
          }
        } else v.default.prototype.saveCanvas(n);
      }, v.default.prototype.saveJSON = function (e, t, r) {
        var i;
        v.default._validateParameters("saveJSON", arguments), i = r ? JSON.stringify(e) : JSON.stringify(e, void 0, 2), this.saveStrings(i.split("\n"), t, "json");
      }, v.default.prototype.saveJSONObject = v.default.prototype.saveJSON, v.default.prototype.saveJSONArray = v.default.prototype.saveJSON, v.default.prototype.saveStrings = function (e, t, r, i) {
        v.default._validateParameters("saveStrings", arguments);

        for (var n = r || "txt", a = this.createWriter(t, n), o = 0; o < e.length; o++) i ? a.write(e[o] + "\r\n") : a.write(e[o] + "\n");

        a.close(), a.clear();
      }, v.default.prototype.saveTable = function (e, t, r) {
        var i;
        v.default._validateParameters("saveTable", arguments), i = void 0 === r ? t.substring(t.lastIndexOf(".") + 1, t.length) : r;
        var n = this.createWriter(t, i),
            a = e.columns,
            o = ",";

        if ("tsv" === i && (o = "\t"), "html" !== i) {
          if ("0" !== a[0]) {
            for (var s = 0; s < a.length; s++) s < a.length - 1 ? n.write(a[s] + o) : n.write(a[s]);

            n.write("\n");
          }

          for (var l = 0; l < e.rows.length; l++) {
            var u = void 0;

            for (u = 0; u < e.rows[l].arr.length; u++) u < e.rows[l].arr.length - 1 ? "csv" === i && String(e.rows[l].arr[u]).includes(",") ? n.write('"' + e.rows[l].arr[u] + '"' + o) : n.write(e.rows[l].arr[u] + o) : "csv" === i && String(e.rows[l].arr[u]).includes(",") ? n.write('"' + e.rows[l].arr[u] + '"') : n.write(e.rows[l].arr[u]);

            n.write("\n");
          }
        } else {
          n.print("<html>"), n.print("<head>");

          if (n.print('  <meta http-equiv="content-type" content="text/html;charset=utf-8" />'), n.print("</head>"), n.print("<body>"), n.print("  <table>"), "0" !== a[0]) {
            n.print("    <tr>");

            for (var h = 0; h < a.length; h++) {
              var c = m(a[h]);
              n.print("      <td>".concat(c)), n.print("      </td>");
            }

            n.print("    </tr>");
          }

          for (var f = 0; f < e.rows.length; f++) {
            n.print("    <tr>");

            for (var d = 0; d < e.columns.length; d++) {
              var p = m(e.rows[f].getString(d));
              n.print("      <td>".concat(p)), n.print("      </td>");
            }

            n.print("    </tr>");
          }

          n.print("  </table>"), n.print("</body>"), n.print("</html>");
        }

        n.close(), n.clear();
      }, v.default.prototype.writeFile = function (e, t, r) {
        var i = "application/octet-stream";
        v.default.prototype._isSafari() && (i = "text/plain");
        var n = new Blob(e, {
          type: i
        });
        v.default.prototype.downloadFile(n, t, r);
      }, v.default.prototype.downloadFile = function (e, t, r) {
        var i = l(t, r),
            n = i[0];
        if (e instanceof Blob) s.default.saveAs(e, n);else {
          var a = document.createElement("a");

          if (a.href = e, a.download = n, a.onclick = function (e) {
            var t;
            t = e, document.body.removeChild(t.target), e.stopPropagation();
          }, a.style.display = "none", document.body.appendChild(a), v.default.prototype._isSafari()) {
            var o = "Hello, Safari user! To download this file...\n";
            o += "1. Go to File --\x3e Save As.\n", o += '2. Choose "Page Source" as the Format.\n', o += '3. Name it with this extension: ."'.concat(i[1], '"'), alert(o);
          }

          a.click();
        }
      }, v.default.prototype._checkFileExtension = l, v.default.prototype._isSafari = function () {
        return 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
      };
      var n = v.default;
      r.default = n;
    }, {
      "../core/friendly_errors/fes_core": 28,
      "../core/friendly_errors/file_errors": 29,
      "../core/friendly_errors/validate_params": 31,
      "../core/main": 36,
      "es6-promise/auto": 5,
      "fetch-jsonp": 7,
      "file-saver": 8,
      "whatwg-fetch": 15
    }],
    63: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.Table = function (e) {
        this.columns = [], this.rows = [];
      }, n.default.Table.prototype.addRow = function (e) {
        var t = e || new n.default.TableRow();
        if (void 0 === t.arr || void 0 === t.obj) throw new Error("invalid TableRow: ".concat(t));
        return (t.table = this).rows.push(t), t;
      }, n.default.Table.prototype.removeRow = function (e) {
        this.rows[e].table = null;
        var t = this.rows.splice(e + 1, this.rows.length);
        this.rows.pop(), this.rows = this.rows.concat(t);
      }, n.default.Table.prototype.getRow = function (e) {
        return this.rows[e];
      }, n.default.Table.prototype.getRows = function () {
        return this.rows;
      }, n.default.Table.prototype.findRow = function (e, t) {
        if ("string" == typeof t) {
          for (var r = 0; r < this.rows.length; r++) if (this.rows[r].obj[t] === e) return this.rows[r];
        } else for (var i = 0; i < this.rows.length; i++) if (this.rows[i].arr[t] === e) return this.rows[i];

        return null;
      }, n.default.Table.prototype.findRows = function (e, t) {
        var r = [];
        if ("string" == typeof t) for (var i = 0; i < this.rows.length; i++) this.rows[i].obj[t] === e && r.push(this.rows[i]);else for (var n = 0; n < this.rows.length; n++) this.rows[n].arr[t] === e && r.push(this.rows[n]);
        return r;
      }, n.default.Table.prototype.matchRow = function (e, t) {
        if ("number" == typeof t) {
          for (var r = 0; r < this.rows.length; r++) if (this.rows[r].arr[t].match(e)) return this.rows[r];
        } else for (var i = 0; i < this.rows.length; i++) if (this.rows[i].obj[t].match(e)) return this.rows[i];

        return null;
      }, n.default.Table.prototype.matchRows = function (e, t) {
        var r = [];
        if ("number" == typeof t) for (var i = 0; i < this.rows.length; i++) this.rows[i].arr[t].match(e) && r.push(this.rows[i]);else for (var n = 0; n < this.rows.length; n++) this.rows[n].obj[t].match(e) && r.push(this.rows[n]);
        return r;
      }, n.default.Table.prototype.getColumn = function (e) {
        var t = [];
        if ("string" == typeof e) for (var r = 0; r < this.rows.length; r++) t.push(this.rows[r].obj[e]);else for (var i = 0; i < this.rows.length; i++) t.push(this.rows[i].arr[e]);
        return t;
      }, n.default.Table.prototype.clearRows = function () {
        delete this.rows, this.rows = [];
      }, n.default.Table.prototype.addColumn = function (e) {
        var t = e || null;
        this.columns.push(t);
      }, n.default.Table.prototype.getColumnCount = function () {
        return this.columns.length;
      }, n.default.Table.prototype.getRowCount = function () {
        return this.rows.length;
      }, n.default.Table.prototype.removeTokens = function (e, t) {
        for (var r = [], i = 0; i < e.length; i++) r.push(e.charAt(i).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"));

        var n = new RegExp(r.join("|"), "g");
        if (void 0 === t) for (var a = 0; a < this.columns.length; a++) for (var o = 0; o < this.rows.length; o++) {
          var s = this.rows[o].arr[a];
          s = s.replace(n, ""), this.rows[o].arr[a] = s, this.rows[o].obj[this.columns[a]] = s;
        } else if ("string" == typeof t) for (var l = 0; l < this.rows.length; l++) {
          var u = this.rows[l].obj[t];
          u = u.replace(n, ""), this.rows[l].obj[t] = u;
          var h = this.columns.indexOf(t);
          this.rows[l].arr[h] = u;
        } else for (var c = 0; c < this.rows.length; c++) {
          var f = this.rows[c].arr[t];
          f = f.replace(n, ""), this.rows[c].arr[t] = f, this.rows[c].obj[this.columns[t]] = f;
        }
      }, n.default.Table.prototype.trim = function (e) {
        var t = new RegExp(" ", "g");
        if (void 0 === e) for (var r = 0; r < this.columns.length; r++) for (var i = 0; i < this.rows.length; i++) {
          var n = this.rows[i].arr[r];
          n = n.replace(t, ""), this.rows[i].arr[r] = n, this.rows[i].obj[this.columns[r]] = n;
        } else if ("string" == typeof e) for (var a = 0; a < this.rows.length; a++) {
          var o = this.rows[a].obj[e];
          o = o.replace(t, ""), this.rows[a].obj[e] = o;
          var s = this.columns.indexOf(e);
          this.rows[a].arr[s] = o;
        } else for (var l = 0; l < this.rows.length; l++) {
          var u = this.rows[l].arr[e];
          u = u.replace(t, ""), this.rows[l].arr[e] = u, this.rows[l].obj[this.columns[e]] = u;
        }
      }, n.default.Table.prototype.removeColumn = function (e) {
        var t, r;
        "string" == typeof e ? (t = e, r = this.columns.indexOf(e)) : (r = e, t = this.columns[e]);
        var i = this.columns.splice(r + 1, this.columns.length);
        this.columns.pop(), this.columns = this.columns.concat(i);

        for (var n = 0; n < this.rows.length; n++) {
          var a = this.rows[n].arr,
              o = a.splice(r + 1, a.length);
          a.pop(), this.rows[n].arr = a.concat(o), delete this.rows[n].obj[t];
        }
      }, n.default.Table.prototype.set = function (e, t, r) {
        this.rows[e].set(t, r);
      }, n.default.Table.prototype.setNum = function (e, t, r) {
        this.rows[e].setNum(t, r);
      }, n.default.Table.prototype.setString = function (e, t, r) {
        this.rows[e].setString(t, r);
      }, n.default.Table.prototype.get = function (e, t) {
        return this.rows[e].get(t);
      }, n.default.Table.prototype.getNum = function (e, t) {
        return this.rows[e].getNum(t);
      }, n.default.Table.prototype.getString = function (e, t) {
        return this.rows[e].getString(t);
      }, n.default.Table.prototype.getObject = function (e) {
        for (var t, r = {}, i = 0; i < this.rows.length; i++) if (t = this.rows[i].obj, "string" == typeof e) {
          if (!(0 <= this.columns.indexOf(e))) throw new Error('This table has no column named "'.concat(e, '"'));
          r[t[e]] = t;
        } else r[i] = this.rows[i].obj;

        return r;
      }, n.default.Table.prototype.getArray = function () {
        for (var e = [], t = 0; t < this.rows.length; t++) e.push(this.rows[t].arr);

        return e;
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    64: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.TableRow = function (e, t) {
        var r = [],
            i = {};
        e && (t = t || ",", r = e.split(t));

        for (var n = 0; n < r.length; n++) {
          var a = n,
              o = r[n];
          i[a] = o;
        }

        this.arr = r, this.obj = i, this.table = null;
      }, n.default.TableRow.prototype.set = function (e, t) {
        if ("string" == typeof e) {
          var r = this.table.columns.indexOf(e);
          if (!(0 <= r)) throw new Error('This table has no column named "'.concat(e, '"'));
          this.obj[e] = t, this.arr[r] = t;
        } else {
          if (!(e < this.table.columns.length)) throw new Error("Column #".concat(e, " is out of the range of this table"));
          this.arr[e] = t;
          var i = this.table.columns[e];
          this.obj[i] = t;
        }
      }, n.default.TableRow.prototype.setNum = function (e, t) {
        var r = parseFloat(t);
        this.set(e, r);
      }, n.default.TableRow.prototype.setString = function (e, t) {
        var r = t.toString();
        this.set(e, r);
      }, n.default.TableRow.prototype.get = function (e) {
        return "string" == typeof e ? this.obj[e] : this.arr[e];
      }, n.default.TableRow.prototype.getNum = function (e) {
        var t;
        if ("NaN" === (t = "string" == typeof e ? parseFloat(this.obj[e]) : parseFloat(this.arr[e])).toString()) throw "Error: ".concat(this.obj[e], " is NaN (Not a Number)");
        return t;
      }, n.default.TableRow.prototype.getString = function (e) {
        return "string" == typeof e ? this.obj[e].toString() : this.arr[e].toString();
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    65: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          s = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function n(e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(new s.default.XML(e[r]));

        return t;
      }

      s.default.XML = function (e) {
        if (e) this.DOM = e;else {
          var t = document.implementation.createDocument(null, "doc");
          this.DOM = t.createElement("root");
        }
      }, s.default.XML.prototype.getParent = function () {
        return new s.default.XML(this.DOM.parentElement);
      }, s.default.XML.prototype.getName = function () {
        return this.DOM.tagName;
      }, s.default.XML.prototype.setName = function (e) {
        var t = this.DOM.innerHTML,
            r = this.DOM.attributes,
            i = document.implementation.createDocument(null, "default").createElement(e);
        i.innerHTML = t;

        for (var n = 0; n < r.length; n++) i.setAttribute(r[n].nodeName, r.nodeValue);

        this.DOM = i;
      }, s.default.XML.prototype.hasChildren = function () {
        return 0 < this.DOM.children.length;
      }, s.default.XML.prototype.listChildren = function () {
        for (var e = [], t = 0; t < this.DOM.childNodes.length; t++) e.push(this.DOM.childNodes[t].nodeName);

        return e;
      }, s.default.XML.prototype.getChildren = function (e) {
        return n(e ? this.DOM.getElementsByTagName(e) : this.DOM.children);
      }, s.default.XML.prototype.getChild = function (e) {
        if ("string" != typeof e) return new s.default.XML(this.DOM.children[e]);
        var t = !0,
            r = !1,
            i = void 0;

        try {
          for (var n, a = this.DOM.children[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
            var o = n.value;
            if (o.tagName === e) return new s.default.XML(o);
          }
        } catch (e) {
          r = !0, i = e;
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
      }, s.default.XML.prototype.addChild = function (e) {
        e instanceof s.default.XML && this.DOM.appendChild(e.DOM);
      }, s.default.XML.prototype.removeChild = function (e) {
        var t = -1;

        if ("string" == typeof e) {
          for (var r = 0; r < this.DOM.children.length; r++) if (this.DOM.children[r].tagName === e) {
            t = r;
            break;
          }
        } else t = e;

        -1 !== t && this.DOM.removeChild(this.DOM.children[t]);
      }, s.default.XML.prototype.getAttributeCount = function () {
        return this.DOM.attributes.length;
      }, s.default.XML.prototype.listAttributes = function () {
        var e = [],
            t = !0,
            r = !1,
            i = void 0;

        try {
          for (var n, a = this.DOM.attributes[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
            var o = n.value;
            e.push(o.nodeName);
          }
        } catch (e) {
          r = !0, i = e;
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }

        return e;
      }, s.default.XML.prototype.hasAttribute = function (e) {
        var t = {},
            r = !0,
            i = !1,
            n = void 0;

        try {
          for (var a, o = this.DOM.attributes[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            var s = a.value;
            t[s.nodeName] = s.nodeValue;
          }
        } catch (e) {
          i = !0, n = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (i) throw n;
          }
        }

        return !!t[e];
      }, s.default.XML.prototype.getNum = function (e, t) {
        var r = {},
            i = !0,
            n = !1,
            a = void 0;

        try {
          for (var o, s = this.DOM.attributes[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
            var l = o.value;
            r[l.nodeName] = l.nodeValue;
          }
        } catch (e) {
          n = !0, a = e;
        } finally {
          try {
            i || null == s.return || s.return();
          } finally {
            if (n) throw a;
          }
        }

        return Number(r[e]) || t || 0;
      }, s.default.XML.prototype.getString = function (e, t) {
        var r = {},
            i = !0,
            n = !1,
            a = void 0;

        try {
          for (var o, s = this.DOM.attributes[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
            var l = o.value;
            r[l.nodeName] = l.nodeValue;
          }
        } catch (e) {
          n = !0, a = e;
        } finally {
          try {
            i || null == s.return || s.return();
          } finally {
            if (n) throw a;
          }
        }

        return r[e] ? String(r[e]) : t || null;
      }, s.default.XML.prototype.setAttribute = function (e, t) {
        this.DOM.setAttribute(e, t);
      }, s.default.XML.prototype.getContent = function (e) {
        return this.DOM.textContent.replace(/\s\s+/g, ",") || e || null;
      }, s.default.XML.prototype.setContent = function (e) {
        this.DOM.children.length || (this.DOM.textContent = e);
      }, s.default.XML.prototype.serialize = function () {
        return new XMLSerializer().serializeToString(this.DOM);
      };
      var a = s.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    66: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          s = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function n() {
        if ("function" == typeof Math.hypot) return Math.hypot.apply(null, arguments);

        for (var e = arguments.length, t = [], r = 0, i = 0; i < e; i++) {
          var n = arguments[i];
          if ((n = +n) === 1 / 0 || n === -1 / 0) return 1 / 0;
          r < (n = Math.abs(n)) && (r = n), t[i] = n;
        }

        0 === r && (r = 1);

        for (var a = 0, o = 0, s = 0; s < e; s++) {
          var l = t[s] / r,
              u = l * l - o,
              h = a + u;
          o = h - a - u, a = h;
        }

        return Math.sqrt(a) * r;
      }

      s.default.prototype.abs = Math.abs, s.default.prototype.ceil = Math.ceil, s.default.prototype.constrain = function (e, t, r) {
        return s.default._validateParameters("constrain", arguments), Math.max(Math.min(e, r), t);
      }, s.default.prototype.dist = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return s.default._validateParameters("dist", t), 4 === t.length ? n(t[2] - t[0], t[3] - t[1]) : 6 === t.length ? n(t[3] - t[0], t[4] - t[1], t[5] - t[2]) : void 0;
      }, s.default.prototype.exp = Math.exp, s.default.prototype.floor = Math.floor, s.default.prototype.lerp = function (e, t, r) {
        return s.default._validateParameters("lerp", arguments), r * (t - e) + e;
      }, s.default.prototype.log = Math.log, s.default.prototype.mag = function (e, t) {
        return s.default._validateParameters("mag", arguments), n(e, t);
      }, s.default.prototype.map = function (e, t, r, i, n, a) {
        s.default._validateParameters("map", arguments);

        var o = (e - t) / (r - t) * (n - i) + i;
        return a ? i < n ? this.constrain(o, i, n) : this.constrain(o, n, i) : o;
      }, s.default.prototype.max = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return t[0] instanceof Array ? Math.max.apply(null, t[0]) : Math.max.apply(null, t);
      }, s.default.prototype.min = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return t[0] instanceof Array ? Math.min.apply(null, t[0]) : Math.min.apply(null, t);
      }, s.default.prototype.norm = function (e, t, r) {
        return s.default._validateParameters("norm", arguments), this.map(e, t, r, 0, 1);
      }, s.default.prototype.pow = Math.pow, s.default.prototype.round = function (e, t) {
        return t ? Number(Math.round(e + "e" + t) + "e-" + t) : Math.round(e);
      }, s.default.prototype.sq = function (e) {
        return e * e;
      }, s.default.prototype.sqrt = Math.sqrt, s.default.prototype.fract = function (e) {
        s.default._validateParameters("fract", arguments);

        var t = 0,
            r = Number(e);
        if (isNaN(r) || Math.abs(r) === 1 / 0) return r;
        if (r < 0 && (r = -r, t = 1), !String(r).includes(".") || String(r).includes("e")) return r < 1 ? Math.abs(t - r) : 0;
        var i = String(r);
        return i = Number("0" + i.slice(i.indexOf("."))), Math.abs(t - i);
      };
      var a = s.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    67: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      n.default.prototype.createVector = function (e, t, r) {
        return this instanceof n.default ? new n.default.Vector(this, arguments) : new n.default.Vector(e, t, r);
      };

      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    68: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function b(e) {
        return .5 * (1 - Math.cos(e * Math.PI));
      }

      var _,
          x = 4095,
          w = 4,
          S = .5;

      n.default.prototype.noise = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;

        if (null == _) {
          _ = new Array(4096);

          for (var i = 0; i < 4096; i++) _[i] = Math.random();
        }

        e < 0 && (e = -e), t < 0 && (t = -t), r < 0 && (r = -r);

        for (var n, a, o, s, l, u = Math.floor(e), h = Math.floor(t), c = Math.floor(r), f = e - u, d = t - h, p = r - c, m = 0, y = .5, v = 0; v < w; v++) {
          var g = u + (h << 4) + (c << 8);
          n = b(f), a = b(d), o = _[g & x], o += n * (_[g + 1 & x] - o), s = _[g + 16 & x], o += a * ((s += n * (_[g + 16 + 1 & x] - s)) - o), s = _[(g += 256) & x], s += n * (_[g + 1 & x] - s), l = _[g + 16 & x], s += a * ((l += n * (_[g + 16 + 1 & x] - l)) - s), m += (o += b(p) * (s - o)) * y, y *= S, u <<= 1, h <<= 1, c <<= 1, 1 <= (f *= 2) && (u++, f--), 1 <= (d *= 2) && (h++, d--), 1 <= (p *= 2) && (c++, p--);
        }

        return m;
      }, n.default.prototype.noiseDetail = function (e, t) {
        0 < e && (w = e), 0 < t && (S = t);
      }, n.default.prototype.noiseSeed = function (e) {
        var t,
            r,
            i,
            n = (i = 4294967296, {
          setSeed: function (e) {
            r = t = (null == e ? Math.random() * i : e) >>> 0;
          },
          getSeed: function () {
            return t;
          },
          rand: function () {
            return (r = (1664525 * r + 1013904223) % i) / i;
          }
        });
        n.setSeed(e), _ = new Array(4096);

        for (var a = 0; a < 4096; a++) _[a] = n.rand();
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    69: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          l = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      l.default.Vector = function (e, t, r) {
        var i, n, a;
        a = e instanceof l.default ? (this.p5 = e, i = t[0] || 0, n = t[1] || 0, t[2] || 0) : (i = e || 0, n = t || 0, r || 0), this.x = i, this.y = n, this.z = a;
      }, l.default.Vector.prototype.toString = function () {
        return "p5.Vector Object : [".concat(this.x, ", ").concat(this.y, ", ").concat(this.z, "]");
      }, l.default.Vector.prototype.set = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x = e.x || 0, this.y = e.y || 0, this.z = e.z || 0) : e instanceof Array ? (this.x = e[0] || 0, this.y = e[1] || 0, this.z = e[2] || 0) : (this.x = e || 0, this.y = t || 0, this.z = r || 0), this;
      }, l.default.Vector.prototype.copy = function () {
        return this.p5 ? new l.default.Vector(this.p5, [this.x, this.y, this.z]) : new l.default.Vector(this.x, this.y, this.z);
      }, l.default.Vector.prototype.add = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x += e.x || 0, this.y += e.y || 0, this.z += e.z || 0) : e instanceof Array ? (this.x += e[0] || 0, this.y += e[1] || 0, this.z += e[2] || 0) : (this.x += e || 0, this.y += t || 0, this.z += r || 0), this;
      };

      function u(e, t) {
        return 0 !== e && (this.x = this.x % e), 0 !== t && (this.y = this.y % t), this;
      }

      function h(e, t, r) {
        return 0 !== e && (this.x = this.x % e), 0 !== t && (this.y = this.y % t), 0 !== r && (this.z = this.z % r), this;
      }

      l.default.Vector.prototype.rem = function (e, t, r) {
        if (e instanceof l.default.Vector) {
          if (Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z)) {
            var i = parseFloat(e.x),
                n = parseFloat(e.y),
                a = parseFloat(e.z);
            h.call(this, i, n, a);
          }
        } else if (e instanceof Array) e.every(function (e) {
          return Number.isFinite(e);
        }) && (2 === e.length && u.call(this, e[0], e[1]), 3 === e.length && h.call(this, e[0], e[1], e[2]));else if (1 === arguments.length) {
          if (Number.isFinite(e) && 0 !== e) return this.x = this.x % e, this.y = this.y % e, this.z = this.z % e, this;
        } else if (2 === arguments.length) {
          var o = Array.prototype.slice.call(arguments);
          o.every(function (e) {
            return Number.isFinite(e);
          }) && 2 === o.length && u.call(this, o[0], o[1]);
        } else if (3 === arguments.length) {
          var s = Array.prototype.slice.call(arguments);
          s.every(function (e) {
            return Number.isFinite(e);
          }) && 3 === s.length && h.call(this, s[0], s[1], s[2]);
        }
      }, l.default.Vector.prototype.sub = function (e, t, r) {
        return e instanceof l.default.Vector ? (this.x -= e.x || 0, this.y -= e.y || 0, this.z -= e.z || 0) : e instanceof Array ? (this.x -= e[0] || 0, this.y -= e[1] || 0, this.z -= e[2] || 0) : (this.x -= e || 0, this.y -= t || 0, this.z -= r || 0), this;
      }, l.default.Vector.prototype.mult = function (e, t, r) {
        if (e instanceof l.default.Vector) return Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z) && "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.z ? (this.x *= e.x, this.y *= e.y, this.z *= e.z) : console.warn("p5.Vector.prototype.mult:", "x contains components that are either undefined or not finite numbers"), this;
        if (e instanceof Array) return e.every(function (e) {
          return Number.isFinite(e);
        }) && e.every(function (e) {
          return "number" == typeof e;
        }) ? 1 === e.length ? (this.x *= e[0], this.y *= e[0], this.z *= e[0]) : 2 === e.length ? (this.x *= e[0], this.y *= e[1]) : 3 === e.length && (this.x *= e[0], this.y *= e[1], this.z *= e[2]) : console.warn("p5.Vector.prototype.mult:", "x contains elements that are either undefined or not finite numbers"), this;
        var i = Array.prototype.slice.call(arguments);
        return i.every(function (e) {
          return Number.isFinite(e);
        }) && i.every(function (e) {
          return "number" == typeof e;
        }) ? (1 === arguments.length && (this.x *= e, this.y *= e, this.z *= e), 2 === arguments.length && (this.x *= e, this.y *= t), 3 === arguments.length && (this.x *= e, this.y *= t, this.z *= r)) : console.warn("p5.Vector.prototype.mult:", "x, y, or z arguments are either undefined or not a finite number"), this;
      }, l.default.Vector.prototype.div = function (e, t, r) {
        if (e instanceof l.default.Vector) {
          if (Number.isFinite(e.x) && Number.isFinite(e.y) && Number.isFinite(e.z) && "number" == typeof e.x && "number" == typeof e.y && "number" == typeof e.z) {
            if (0 === e.x || 0 === e.y || 0 === e.z) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
            this.x /= e.x, this.y /= e.y, this.z /= e.z;
          } else console.warn("p5.Vector.prototype.div:", "x contains components that are either undefined or not finite numbers");

          return this;
        }

        if (e instanceof Array) {
          if (e.every(function (e) {
            return Number.isFinite(e);
          }) && e.every(function (e) {
            return "number" == typeof e;
          })) {
            if (e.some(function (e) {
              return 0 === e;
            })) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
            1 === e.length ? (this.x /= e[0], this.y /= e[0], this.z /= e[0]) : 2 === e.length ? (this.x /= e[0], this.y /= e[1]) : 3 === e.length && (this.x /= e[0], this.y /= e[1], this.z /= e[2]);
          } else console.warn("p5.Vector.prototype.div:", "x contains components that are either undefined or not finite numbers");

          return this;
        }

        var i = Array.prototype.slice.call(arguments);

        if (i.every(function (e) {
          return Number.isFinite(e);
        }) && i.every(function (e) {
          return "number" == typeof e;
        })) {
          if (i.some(function (e) {
            return 0 === e;
          })) return console.warn("p5.Vector.prototype.div:", "divide by 0"), this;
          1 === arguments.length && (this.x /= e, this.y /= e, this.z /= e), 2 === arguments.length && (this.x /= e, this.y /= t), 3 === arguments.length && (this.x /= e, this.y /= t, this.z /= r);
        } else console.warn("p5.Vector.prototype.div:", "x, y, or z arguments are either undefined or not a finite number");

        return this;
      }, l.default.Vector.prototype.mag = function () {
        return Math.sqrt(this.magSq());
      }, l.default.Vector.prototype.magSq = function () {
        var e = this.x,
            t = this.y,
            r = this.z;
        return e * e + t * t + r * r;
      }, l.default.Vector.prototype.dot = function (e, t, r) {
        return e instanceof l.default.Vector ? this.dot(e.x, e.y, e.z) : this.x * (e || 0) + this.y * (t || 0) + this.z * (r || 0);
      }, l.default.Vector.prototype.cross = function (e) {
        var t = this.y * e.z - this.z * e.y,
            r = this.z * e.x - this.x * e.z,
            i = this.x * e.y - this.y * e.x;
        return this.p5 ? new l.default.Vector(this.p5, [t, r, i]) : new l.default.Vector(t, r, i);
      }, l.default.Vector.prototype.dist = function (e) {
        return e.copy().sub(this).mag();
      }, l.default.Vector.prototype.normalize = function () {
        var e = this.mag();
        return 0 !== e && this.mult(1 / e), this;
      }, l.default.Vector.prototype.limit = function (e) {
        var t = this.magSq();
        return e * e < t && this.div(Math.sqrt(t)).mult(e), this;
      }, l.default.Vector.prototype.setMag = function (e) {
        return this.normalize().mult(e);
      }, l.default.Vector.prototype.heading = function () {
        var e = Math.atan2(this.y, this.x);
        return this.p5 ? this.p5._fromRadians(e) : e;
      }, l.default.Vector.prototype.setHeading = function (e) {
        var t = this.mag();
        return this.x = t * Math.cos(e), this.y = t * Math.sin(e), this;
      }, l.default.Vector.prototype.rotate = function (e) {
        var t = this.heading() + e;
        this.p5 && (t = this.p5._toRadians(t));
        var r = this.mag();
        return this.x = Math.cos(t) * r, this.y = Math.sin(t) * r, this;
      }, l.default.Vector.prototype.angleBetween = function (e) {
        var t,
            r = this.dot(e) / (this.mag() * e.mag());
        return t = Math.acos(Math.min(1, Math.max(-1, r))), t *= Math.sign(this.cross(e).z || 1), this.p5 && (t = this.p5._fromRadians(t)), t;
      }, l.default.Vector.prototype.lerp = function (e, t, r, i) {
        return e instanceof l.default.Vector ? this.lerp(e.x, e.y, e.z, t) : (this.x += (e - this.x) * i || 0, this.y += (t - this.y) * i || 0, this.z += (r - this.z) * i || 0, this);
      }, l.default.Vector.prototype.reflect = function (e) {
        return e.normalize(), this.sub(e.mult(2 * this.dot(e)));
      }, l.default.Vector.prototype.array = function () {
        return [this.x || 0, this.y || 0, this.z || 0];
      }, l.default.Vector.prototype.equals = function (e, t, r) {
        var i, n, a;
        return a = e instanceof l.default.Vector ? (i = e.x || 0, n = e.y || 0, e.z || 0) : e instanceof Array ? (i = e[0] || 0, n = e[1] || 0, e[2] || 0) : (i = e || 0, n = t || 0, r || 0), this.x === i && this.y === n && this.z === a;
      }, l.default.Vector.fromAngle = function (e, t) {
        return void 0 === t && (t = 1), new l.default.Vector(t * Math.cos(e), t * Math.sin(e), 0);
      }, l.default.Vector.fromAngles = function (e, t, r) {
        void 0 === r && (r = 1);
        var i = Math.cos(t),
            n = Math.sin(t),
            a = Math.cos(e),
            o = Math.sin(e);
        return new l.default.Vector(r * o * n, -r * a, r * o * i);
      }, l.default.Vector.random2D = function () {
        return this.fromAngle(Math.random() * a.TWO_PI);
      }, l.default.Vector.random3D = function () {
        var e = Math.random() * a.TWO_PI,
            t = 2 * Math.random() - 1,
            r = Math.sqrt(1 - t * t),
            i = r * Math.cos(e),
            n = r * Math.sin(e);
        return new l.default.Vector(i, n, t);
      }, l.default.Vector.add = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "p5.Vector.add")), r.add(t), r;
      }, l.default.Vector.rem = function (e, t) {
        if (e instanceof l.default.Vector && t instanceof l.default.Vector) {
          var r = e.copy();
          return r.rem(t), r;
        }
      }, l.default.Vector.sub = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "p5.Vector.sub")), r.sub(t), r;
      }, l.default.Vector.mult = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "p5.Vector.mult")), r.mult(t), r;
      }, l.default.Vector.rotate = function (e, t, r) {
        return 2 === arguments.length ? r = e.copy() : (r instanceof l.default.Vector || l.default._friendlyError("The target parameter should be of type p5.Vector", "p5.Vector.rotate"), r.set(e)), r.rotate(t), r;
      }, l.default.Vector.div = function (e, t, r) {
        return r ? r.set(e) : (r = e.copy(), 3 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "p5.Vector.div")), r.div(t), r;
      }, l.default.Vector.dot = function (e, t) {
        return e.dot(t);
      }, l.default.Vector.cross = function (e, t) {
        return e.cross(t);
      }, l.default.Vector.dist = function (e, t) {
        return e.dist(t);
      }, l.default.Vector.lerp = function (e, t, r, i) {
        return i ? i.set(e) : (i = e.copy(), 4 === arguments.length && l.default._friendlyError("The target parameter is undefined, it should be of type p5.Vector", "p5.Vector.lerp")), i.lerp(t, r), i;
      }, l.default.Vector.mag = function (e) {
        var t = e.x,
            r = e.y,
            i = e.z,
            n = t * t + r * r + i * i;
        return Math.sqrt(n);
      }, l.default.Vector.normalize = function (e, t) {
        return arguments.length < 2 ? t = e.copy() : (t instanceof l.default.Vector || l.default._friendlyError("The target parameter should be of type p5.Vector", "p5.Vector.normalize"), t.set(e)), t.normalize();
      };
      var n = l.default.Vector;
      r.default = n;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    70: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      var a = "_lcg_random_state",
          o = 4294967296,
          s = 0;
      n.default.prototype._lcg = function (e) {
        return this[e] = (1664525 * this[e] + 1013904223) % o, this[e] / o;
      }, n.default.prototype._lcgSetSeed = function (e, t) {
        this[e] = (null == t ? Math.random() * o : t) >>> 0;
      }, n.default.prototype.randomSeed = function (e) {
        this._lcgSetSeed(a, e), this._gaussian_previous = !1;
      }, n.default.prototype.random = function (e, t) {
        var r;
        if (n.default._validateParameters("random", arguments), r = null != this[a] ? this._lcg(a) : Math.random(), void 0 === e) return r;
        if (void 0 === t) return e instanceof Array ? e[Math.floor(r * e.length)] : r * e;

        if (t < e) {
          var i = e;
          e = t, t = i;
        }

        return r * (t - e) + e;
      }, n.default.prototype.randomGaussian = function (e) {
        var t,
            r,
            i,
            n,
            a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        if (this._gaussian_previous) t = s, this._gaussian_previous = !1;else {
          for (; 1 <= (n = (r = this.random(2) - 1) * r + (i = this.random(2) - 1) * i););

          t = r * (n = Math.sqrt(-2 * Math.log(n) / n)), s = i * n, this._gaussian_previous = !0;
        }
        return t * a + (e || 0);
      };
      var l = n.default;
      r.default = l;
    }, {
      "../core/main": 36
    }],
    71: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      n.default.prototype._angleMode = a.RADIANS, n.default.prototype.acos = function (e) {
        return this._fromRadians(Math.acos(e));
      }, n.default.prototype.asin = function (e) {
        return this._fromRadians(Math.asin(e));
      }, n.default.prototype.atan = function (e) {
        return this._fromRadians(Math.atan(e));
      }, n.default.prototype.atan2 = function (e, t) {
        return this._fromRadians(Math.atan2(e, t));
      }, n.default.prototype.cos = function (e) {
        return Math.cos(this._toRadians(e));
      }, n.default.prototype.sin = function (e) {
        return Math.sin(this._toRadians(e));
      }, n.default.prototype.tan = function (e) {
        return Math.tan(this._toRadians(e));
      }, n.default.prototype.degrees = function (e) {
        return e * a.RAD_TO_DEG;
      }, n.default.prototype.radians = function (e) {
        return e * a.DEG_TO_RAD;
      }, n.default.prototype.angleMode = function (e) {
        e !== a.DEGREES && e !== a.RADIANS || (this._angleMode = e);
      }, n.default.prototype._toRadians = function (e) {
        return this._angleMode === a.DEGREES ? e * a.DEG_TO_RAD : e;
      }, n.default.prototype._toDegrees = function (e) {
        return this._angleMode === a.RADIANS ? e * a.RAD_TO_DEG : e;
      }, n.default.prototype._fromRadians = function (e) {
        return this._angleMode === a.DEGREES ? e * a.RAD_TO_DEG : e;
      };
      var l = n.default;
      r.default = l;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    72: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.textAlign = function (e, t) {
        var r;
        return n.default._validateParameters("textAlign", arguments), (r = this._renderer).textAlign.apply(r, arguments);
      }, n.default.prototype.textLeading = function (e) {
        var t;
        return n.default._validateParameters("textLeading", arguments), (t = this._renderer).textLeading.apply(t, arguments);
      }, n.default.prototype.textSize = function (e) {
        var t;
        return n.default._validateParameters("textSize", arguments), (t = this._renderer).textSize.apply(t, arguments);
      }, n.default.prototype.textStyle = function (e) {
        var t;
        return n.default._validateParameters("textStyle", arguments), (t = this._renderer).textStyle.apply(t, arguments);
      }, n.default.prototype.textWidth = function () {
        for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return r[0] += "", n.default._validateParameters("textWidth", r), 0 === r[0].length ? 0 : (e = this._renderer).textWidth.apply(e, r);
      }, n.default.prototype.textAscent = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return n.default._validateParameters("textAscent", t), this._renderer.textAscent();
      }, n.default.prototype.textDescent = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return n.default._validateParameters("textDescent", t), this._renderer.textDescent();
      }, n.default.prototype._updateTextMetrics = function () {
        return this._renderer._updateTextMetrics();
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    73: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          f = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          n = l(e("../core/constants")),
          a = l(e("opentype.js"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function l(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        return r.default = e, t && t.set(e, r), r;
      }

      e("../core/friendly_errors/validate_params"), e("../core/friendly_errors/file_errors"), e("../core/friendly_errors/fes_core"), f.default.prototype.loadFont = function (s, l, u) {
        f.default._validateParameters("loadFont", arguments);

        var h = new f.default.Font(this),
            c = this;
        return a.load(s, function (e, t) {
          if (e) return f.default._friendlyFileLoadError(4, s), void 0 !== u ? u(e) : void console.error(e, s);
          h.font = t, void 0 !== l && l(h), c._decrementPreload();
          var r,
              i,
              n = s.split("\\").pop().split("/").pop(),
              a = n.lastIndexOf("."),
              o = a < 1 ? null : n.substr(a + 1);
          ["ttf", "otf", "woff", "woff2"].includes(o) && (r = n.substr(0, a), (i = document.createElement("style")).appendChild(document.createTextNode("\n@font-face {\nfont-family: ".concat(r, ";\nsrc: url(").concat(s, ");\n}\n"))), document.head.appendChild(i));
        }), h;
      }, f.default.prototype.text = function (e, t, r, i, n) {
        var a;
        return f.default._validateParameters("text", arguments), this._renderer._doFill || this._renderer._doStroke ? (a = this._renderer).text.apply(a, arguments) : this;
      }, f.default.prototype.textFont = function (e, t) {
        if (f.default._validateParameters("textFont", arguments), arguments.length) {
          if (!e) throw new Error("null font passed to textFont");
          return this._renderer._setProperty("_textFont", e), t && (this._renderer._setProperty("_textSize", t), this._renderer._setProperty("_textLeading", t * n._DEFAULT_LEADMULT)), this._renderer._applyTextProperties();
        }

        return this._renderer._textFont;
      };
      var u = f.default;
      r.default = u;
    }, {
      "../core/constants": 26,
      "../core/friendly_errors/fes_core": 28,
      "../core/friendly_errors/file_errors": 29,
      "../core/friendly_errors/validate_params": 31,
      "../core/main": 36,
      "opentype.js": 12
    }],
    74: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          x = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== d(e) && "function" != typeof e) return {
          default: e
        };
        var t = o();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function o() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return o = function () {
          return e;
        }, e;
      }

      function d(e) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      function p(e, t) {
        for (var r = function (e, t) {
          if ("object" !== d(e)) e = t;else for (var r in t) void 0 === e[r] && (e[r] = t[r]);
          return e;
        }(t, {
          sampleFactor: .1,
          simplifyThreshold: 0
        }), i = l(e, 0, 1), n = i / (i * r.sampleFactor), a = [], o = 0; o < i; o += n) a.push(l(e, o));

        return r.simplifyThreshold && function (e) {
          for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = 0, i = e.length - 1; 3 < e.length && 0 <= i; --i) f(s(e, i - 1), s(e, i), s(e, i + 1), t) && (e.splice(i % e.length, 1), r++);
        }(a, r.simplifyThreshold), a;
      }

      function m(e) {
        for (var t, r = [], i = 0; i < e.length; i++) "M" === e[i].type && (t && r.push(t), t = []), t.push(a(e[i]));

        return r.push(t), r;
      }

      function a(e) {
        var t = [e.type];
        return "M" === e.type || "L" === e.type ? t.push(e.x, e.y) : "C" === e.type ? t.push(e.x1, e.y1, e.x2, e.y2, e.x, e.y) : "Q" === e.type && t.push(e.x1, e.y1, e.x, e.y), t;
      }

      function s(e, t) {
        var r = e.length;
        return e[t < 0 ? t % r + r : t % r];
      }

      function f(e, t, r, i) {
        if (!i) return 0 == (n = e, o = r, ((a = t)[0] - n[0]) * (o[1] - n[1]) - (o[0] - n[0]) * (a[1] - n[1]));
        var n, a, o;
        void 0 === f.tmpPoint1 && (f.tmpPoint1 = [], f.tmpPoint2 = []);
        var s = f.tmpPoint1,
            l = f.tmpPoint2;
        s.x = t.x - e.x, s.y = t.y - e.y, l.x = r.x - t.x, l.y = r.y - t.y;
        var u = s.x * l.x + s.y * l.y,
            h = Math.sqrt(s.x * s.x + s.y * s.y),
            c = Math.sqrt(l.x * l.x + l.y * l.y);
        return Math.acos(u / (h * c)) < i;
      }

      function c(e, t, r, i, n, a, o, s, l) {
        var u = 1 - l,
            h = Math.pow(u, 3),
            c = Math.pow(u, 2),
            f = l * l,
            d = f * l,
            p = h * e + 3 * c * l * r + 3 * u * l * l * n + d * o,
            m = h * t + 3 * c * l * i + 3 * u * l * l * a + d * s,
            y = e + 2 * l * (r - e) + f * (n - 2 * r + e),
            v = t + 2 * l * (i - t) + f * (a - 2 * i + t),
            g = r + 2 * l * (n - r) + f * (o - 2 * n + r),
            b = i + 2 * l * (a - i) + f * (s - 2 * a + i),
            _ = u * e + l * r,
            x = u * t + l * i,
            w = u * n + l * o,
            S = u * a + l * s,
            M = 90 - 180 * Math.atan2(y - g, v - b) / Math.PI;

        return (g < y || v < b) && (M += 180), {
          x: p,
          y: m,
          m: {
            x: y,
            y: v
          },
          n: {
            x: g,
            y: b
          },
          start: {
            x: _,
            y: x
          },
          end: {
            x: w,
            y: S
          },
          alpha: M
        };
      }

      function y(e, t, r, i, n, a, o, s, l) {
        return null == l ? v(e, t, r, i, n, a, o, s) : c(e, t, r, i, n, a, o, s, function (e, t, r, i, n, a, o, s, l) {
          if (l < 0 || v(e, t, r, i, n, a, o, s) < l) return;
          var u,
              h = .5,
              c = 1 - h;
          u = v(e, t, r, i, n, a, o, s, c);

          for (; .01 < Math.abs(u - l);) u = v(e, t, r, i, n, a, o, s, c += (u < l ? 1 : -1) * (h /= 2));

          return c;
        }(e, t, r, i, n, a, o, s, l));
      }

      function l(e, t, r) {
        for (var i, n, a, o, s, l = 0, u = 0, h = (e = function (e, t) {
          function r(e, t, r) {
            var i, n;
            if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];

            switch ((e[0] in {
              T: 1,
              Q: 1
            }) || (t.qx = t.qy = null), e[0]) {
              case "M":
                t.X = e[1], t.Y = e[2];
                break;

              case "A":
                e = ["C"].concat(function e(t, r, i, n, a, o, s, l, u, h) {
                  var c = Math.PI;
                  var f = 120 * c / 180;
                  var d;
                  var p;
                  var m;
                  var y;
                  var v = c / 180 * (+a || 0);
                  var g = [];
                  var b;

                  var _ = function (e, t, r) {
                    var i = e * Math.cos(r) - t * Math.sin(r),
                        n = e * Math.sin(r) + t * Math.cos(r);
                    return {
                      x: i,
                      y: n
                    };
                  };

                  if (h) d = h[0], p = h[1], m = h[2], y = h[3];else {
                    b = _(t, r, -v), t = b.x, r = b.y, b = _(l, u, -v), l = b.x, u = b.y;
                    var x = (t - l) / 2,
                        w = (r - u) / 2,
                        S = x * x / (i * i) + w * w / (n * n);
                    1 < S && (S = Math.sqrt(S), i *= S, n *= S);
                    var M = i * i,
                        T = n * n,
                        E = (o === s ? -1 : 1) * Math.sqrt(Math.abs((M * T - M * w * w - T * x * x) / (M * w * w + T * x * x)));
                    m = E * i * w / n + (t + l) / 2, y = E * -n * x / i + (r + u) / 2, d = Math.asin(((r - y) / n).toFixed(9)), p = Math.asin(((u - y) / n).toFixed(9)), (d = t < m ? c - d : d) < 0 && (d = 2 * c + d), (p = l < m ? c - p : p) < 0 && (p = 2 * c + p), s && p < d && (d -= 2 * c), !s && d < p && (p -= 2 * c);
                  }
                  var C = p - d;

                  if (Math.abs(C) > f) {
                    var L = p,
                        O = l,
                        P = u;
                    p = d + f * (s && d < p ? 1 : -1), l = m + i * Math.cos(p), u = y + n * Math.sin(p), g = e(l, u, i, n, a, 0, s, O, P, [p, L, m, y]);
                  }

                  C = p - d;
                  var R = Math.cos(d),
                      D = Math.sin(d),
                      k = Math.cos(p),
                      A = Math.sin(p),
                      I = Math.tan(C / 4),
                      U = 4 / 3 * i * I,
                      N = 4 / 3 * n * I,
                      F = [t, r],
                      B = [t + U * D, r - N * R],
                      G = [l + U * A, u - N * k],
                      j = [l, u];
                  B[0] = 2 * F[0] - B[0];
                  B[1] = 2 * F[1] - B[1];
                  {
                    if (h) return [B, G, j].concat(g);
                    g = [B, G, j].concat(g).join().split(",");

                    for (var V = [], z = 0, H = g.length; z < H; z++) V[z] = z % 2 ? _(g[z - 1], g[z], v).y : _(g[z], g[z + 1], v).x;

                    return V;
                  }
                }.apply(0, [t.x, t.y].concat(e.slice(1))));
                break;

              case "S":
                n = "C" === r || "S" === r ? (i = 2 * t.x - t.bx, 2 * t.y - t.by) : (i = t.x, t.y), e = ["C", i, n].concat(e.slice(1));
                break;

              case "T":
                "Q" === r || "T" === r ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"].concat(S(t.x, t.y, t.qx, t.qy, e[1], e[2]));
                break;

              case "Q":
                t.qx = e[1], t.qy = e[2], e = ["C"].concat(S(t.x, t.y, e[1], e[2], e[3], e[4]));
                break;

              case "L":
                e = ["C"].concat(w(t.x, t.y, e[1], e[2]));
                break;

              case "H":
                e = ["C"].concat(w(t.x, t.y, e[1], t.y));
                break;

              case "V":
                e = ["C"].concat(w(t.x, t.y, t.x, e[1]));
                break;

              case "Z":
                e = ["C"].concat(w(t.x, t.y, t.X, t.Y));
            }

            return e;
          }

          function i(e, t) {
            if (7 < e[t].length) {
              e[t].shift();

              for (var r = e[t]; r.length;) h[t] = "A", s && (c[t] = "A"), e.splice(t++, 0, ["C"].concat(r.splice(0, 6)));

              e.splice(t, 1), a = Math.max(o.length, s && s.length || 0);
            }
          }

          function n(e, t, r, i, n) {
            e && t && "M" === e[n][0] && "M" !== t[n][0] && (t.splice(n, 0, ["M", i.x, i.y]), r.bx = 0, r.by = 0, r.x = e[n][1], r.y = e[n][2], a = Math.max(o.length, s && s.length || 0));
          }

          var a,
              o = b(e),
              s = t && b(t),
              l = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          },
              u = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
          },
              h = [],
              c = [],
              f = "",
              d = "";
          a = Math.max(o.length, s && s.length || 0);

          for (var p = 0; p < a; p++) {
            o[p] && (f = o[p][0]), "C" !== f && (h[p] = f, p && (d = h[p - 1])), o[p] = r(o[p], l, d), "A" !== h[p] && "C" === f && (h[p] = "C"), i(o, p), s && (s[p] && (f = s[p][0]), "C" !== f && (c[p] = f, p && (d = c[p - 1])), s[p] = r(s[p], u, d), "A" !== c[p] && "C" === f && (c[p] = "C"), i(s, p)), n(o, s, l, u, p), n(s, o, u, l, p);
            var m = o[p],
                y = s && s[p],
                v = m.length,
                g = s && y.length;
            l.x = m[v - 2], l.y = m[v - 1], l.bx = parseFloat(m[v - 4]) || l.x, l.by = parseFloat(m[v - 3]) || l.y, u.bx = s && (parseFloat(y[g - 4]) || u.x), u.by = s && (parseFloat(y[g - 3]) || u.y), u.x = s && y[g - 2], u.y = s && y[g - 1];
          }

          return s ? [o, s] : o;
        }(e)).length; u < h; u++) {
          if ("M" === (a = e[u])[0]) i = +a[1], n = +a[2];else {
            if (t < l + (o = y(i, n, a[1], a[2], a[3], a[4], a[5], a[6])) && !r) return {
              x: (s = y(i, n, a[1], a[2], a[3], a[4], a[5], a[6], t - l)).x,
              y: s.y,
              alpha: s.alpha
            };
            l += o, i = +a[5], n = +a[6];
          }
          a.shift() + a;
        }

        return (s = r ? l : c(i, n, a[0], a[1], a[2], a[3], a[4], a[5], 1)).alpha && (s = {
          x: s.x,
          y: s.y,
          alpha: s.alpha
        }), s;
      }

      function b(e) {
        var t,
            r = [],
            i = 0,
            n = 0,
            a = 0,
            o = 0,
            s = 0;
        if (!e) return r;
        "M" === e[0][0] && (a = i = +e[0][1], o = n = +e[0][2], s++, r[0] = ["M", i, n]);

        for (var l, u, h = 3 === e.length && "M" === e[0][0] && "R" === e[1][0].toUpperCase() && "Z" === e[2][0].toUpperCase(), c = s, f = e.length; c < f; c++) {
          if (r.push(l = []), (u = e[c])[0] !== String.prototype.toUpperCase.call(u[0])) switch (l[0] = String.prototype.toUpperCase.call(u[0]), l[0]) {
            case "A":
              l[1] = u[1], l[2] = u[2], l[3] = u[3], l[4] = u[4], l[5] = u[5], l[6] = +(u[6] + i), l[7] = +(u[7] + n);
              break;

            case "V":
              l[1] = +u[1] + n;
              break;

            case "H":
              l[1] = +u[1] + i;
              break;

            case "R":
              for (var d = 2, p = (t = [i, n].concat(u.slice(1))).length; d < p; d++) t[d] = +t[d] + i, t[++d] = +t[d] + n;

              r.pop(), r = r.concat(_(t, h));
              break;

            case "M":
              a = +u[1] + i, o = +u[2] + n;
              break;

            default:
              for (var m = 1, y = u.length; m < y; m++) l[m] = +u[m] + (m % 2 ? i : n);

          } else if ("R" === u[0]) t = [i, n].concat(u.slice(1)), r.pop(), r = r.concat(_(t, h)), l = ["R"].concat(u.slice(-2));else for (var v = 0, g = u.length; v < g; v++) l[v] = u[v];

          switch (l[0]) {
            case "Z":
              i = a, n = o;
              break;

            case "H":
              i = l[1];
              break;

            case "V":
              n = l[1];
              break;

            case "M":
              a = l[l.length - 2], o = l[l.length - 1];
              break;

            default:
              i = l[l.length - 2], n = l[l.length - 1];
          }
        }

        return r;
      }

      function _(e, t) {
        for (var r = [], i = 0, n = e.length; i < n - 2 * !t; i += 2) {
          var a = [{
            x: +e[i - 2],
            y: +e[i - 1]
          }, {
            x: +e[i],
            y: +e[i + 1]
          }, {
            x: +e[i + 2],
            y: +e[i + 3]
          }, {
            x: +e[i + 4],
            y: +e[i + 5]
          }];
          t ? i ? n - 4 === i ? a[3] = {
            x: +e[0],
            y: +e[1]
          } : n - 2 === i && (a[2] = {
            x: +e[0],
            y: +e[1]
          }, a[3] = {
            x: +e[2],
            y: +e[3]
          }) : a[0] = {
            x: +e[n - 2],
            y: +e[n - 1]
          } : n - 4 === i ? a[3] = a[2] : i || (a[0] = {
            x: +e[i],
            y: +e[i + 1]
          }), r.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y]);
        }

        return r;
      }

      function w(e, t, r, i) {
        return [e, t, r, i, r, i];
      }

      function S(e, t, r, i, n, a) {
        return [1 / 3 * e + 2 / 3 * r, 1 / 3 * t + 2 / 3 * i, 1 / 3 * n + 2 / 3 * r, 1 / 3 * a + 2 / 3 * i, n, a];
      }

      function v(e, t, r, i, n, a, o, s, l) {
        null == l && (l = 1);

        for (var u = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = 0, f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0; d < 12; d++) {
          var p = u * h[d] + u,
              m = g(p, e, r, n, o),
              y = g(p, t, i, a, s),
              v = m * m + y * y;
          c += f[d] * Math.sqrt(v);
        }

        return u * c;
      }

      function g(e, t, r, i, n) {
        return e * (e * (-3 * t + 9 * r - 9 * i + 3 * n) + 6 * t - 12 * r + 6 * i) - 3 * t + 3 * r;
      }

      n.default.Font = function (e) {
        this.parent = e, this.cache = {}, this.font = void 0;
      }, n.default.Font.prototype.textBounds = function (e) {
        var t,
            r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
            n = 3 < arguments.length ? arguments[3] : void 0,
            a = 4 < arguments.length ? arguments[4] : void 0,
            o = a && a.renderer && a.renderer._pInst || this.parent,
            s = o._renderer.drawingContext;
        s.textAlign || x.LEFT, s.textBaseline || x.BASELINE;

        if (n = n || o._renderer._textSize, !t) {
          var l,
              u,
              h = [],
              c = [],
              f = [];
          f[0] = [];

          var d = [],
              p = this._scale(n),
              m = o._renderer.textLeading(),
              y = 0;

          this.font.forEachGlyph(e, r, i, n, a, function (e, t, r, i) {
            var n = e.getMetrics();
            0 === e.index || 10 === e.index ? f[y += 1] = [] : (f[y].push(t + n.xMin * p), f[y].push(t + n.xMax * p), d.push(r + y * m + -n.yMin * p), d.push(r + y * m + -n.yMax * p));
          }), 0 < f[y].length && (h[y] = Math.min.apply(null, f[y]), c[y] = Math.max.apply(null, f[y]));

          for (var v = 0, g = 0; g <= y; g++) {
            h[g] = Math.min.apply(null, f[g]), c[g] = Math.max.apply(null, f[g]);
            var b = c[g] - h[g];
            v < b && (v = b);
          }

          var _ = Math.min.apply(null, h);

          t = {
            x: _,
            y: l = Math.min.apply(null, d),
            h: Math.max.apply(null, d) - l,
            w: v,
            advance: _ - r
          }, u = this._handleAlignment(o._renderer, e, t.x, t.y, t.w + t.advance), t.x = u.x, t.y = u.y;
        }

        return t;
      }, n.default.Font.prototype.textToPoints = function (e, t, r, i, n) {
        var a,
            o = 0,
            s = [],
            l = this._getGlyphs(e);

        i = i || this.parent._renderer._textSize;

        for (var u = 0; u < l.length; u++) {
          if (!(l[a = u].name && "space" === l[a].name || e.length === l.length && " " === e[a] || l[a].index && 3 === l[a].index)) for (var h = m(l[u].getPath(t, r, i).commands), c = 0; c < h.length; c++) for (var f = p(h[c], n), d = 0; d < f.length; d++) f[d].x += o, s.push(f[d]);
          o += l[u].advanceWidth * this._scale(i);
        }

        return s;
      }, n.default.Font.prototype._getGlyphs = function (e) {
        return this.font.stringToGlyphs(e);
      }, n.default.Font.prototype._getPath = function (e, t, r, i) {
        var n = (i && i.renderer && i.renderer._pInst || this.parent)._renderer,
            a = this._handleAlignment(n, e, t, r);

        return this.font.getPath(e, a.x, a.y, n._textSize, i);
      }, n.default.Font.prototype._getPathData = function (e, t, r, i) {
        var n = 3;
        return "string" == typeof e && 2 < arguments.length ? e = this._getPath(e, t, r, i) : "object" === d(t) && (i = t), i && "number" == typeof i.decimals && (n = i.decimals), e.toPathData(n);
      }, n.default.Font.prototype._getSVG = function (e, t, r, i) {
        var n = 3;
        return "string" == typeof e && 2 < arguments.length ? e = this._getPath(e, t, r, i) : "object" === d(t) && (i = t), i && ("number" == typeof i.decimals && (n = i.decimals), "number" == typeof i.strokeWidth && (e.strokeWidth = i.strokeWidth), void 0 !== i.fill && (e.fill = i.fill), void 0 !== i.stroke && (e.stroke = i.stroke)), e.toSVG(n);
      }, n.default.Font.prototype._renderPath = function (e, t, r, i) {
        var n,
            a = i && i.renderer || this.parent._renderer,
            o = a.drawingContext;
        n = "object" === d(e) && e.commands ? e.commands : this._getPath(e, t, r, i).commands, o.beginPath();
        var s = !0,
            l = !1,
            u = void 0;

        try {
          for (var h, c = n[Symbol.iterator](); !(s = (h = c.next()).done); s = !0) {
            var f = h.value;
            "M" === f.type ? o.moveTo(f.x, f.y) : "L" === f.type ? o.lineTo(f.x, f.y) : "C" === f.type ? o.bezierCurveTo(f.x1, f.y1, f.x2, f.y2, f.x, f.y) : "Q" === f.type ? o.quadraticCurveTo(f.x1, f.y1, f.x, f.y) : "Z" === f.type && o.closePath();
          }
        } catch (e) {
          l = !0, u = e;
        } finally {
          try {
            s || null == c.return || c.return();
          } finally {
            if (l) throw u;
          }
        }

        return a._doStroke && a._strokeSet && o.stroke(), a._doFill && (a._fillSet || a._setFill(x._DEFAULT_TEXT_FILL), o.fill()), this;
      }, n.default.Font.prototype._textWidth = function (e, t) {
        return this.font.getAdvanceWidth(e, t);
      }, n.default.Font.prototype._textAscent = function (e) {
        return this.font.ascender * this._scale(e);
      }, n.default.Font.prototype._textDescent = function (e) {
        return -this.font.descender * this._scale(e);
      }, n.default.Font.prototype._scale = function (e) {
        return 1 / this.font.unitsPerEm * (e || this.parent._renderer._textSize);
      }, n.default.Font.prototype._handleAlignment = function (e, t, r, i, n) {
        var a = e._textSize;

        switch (void 0 === n && (n = this._textWidth(t, a)), e._textAlign) {
          case x.CENTER:
            r -= n / 2;
            break;

          case x.RIGHT:
            r -= n;
        }

        switch (e._textBaseline) {
          case x.TOP:
            i += this._textAscent(a);
            break;

          case x.CENTER:
            i += this._textAscent(a) / 2;
            break;

          case x.BOTTOM:
            i -= this._textDescent(a);
        }

        return {
          x: r,
          y: i
        };
      };
      var u = n.default;
      r.default = u;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    75: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.append = function (e, t) {
        return e.push(t), e;
      }, n.default.prototype.arrayCopy = function (e, t, r, i, n) {
        var a, o;
        e = void 0 !== n ? (o = Math.min(n, e.length), a = i, e.slice(t, o + t)) : (o = void 0 !== r ? (o = r, Math.min(o, e.length)) : e.length, a = 0, r = t, e.slice(0, o)), Array.prototype.splice.apply(r, [a, o].concat(e));
      }, n.default.prototype.concat = function (e, t) {
        return e.concat(t);
      }, n.default.prototype.reverse = function (e) {
        return e.reverse();
      }, n.default.prototype.shorten = function (e) {
        return e.pop(), e;
      }, n.default.prototype.shuffle = function (e, t) {
        for (var r, i, n = ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e), a = (e = t || n ? e : e.slice()).length; 1 < a;) r = this.random(0, 1) * a | 0, i = e[--a], e[a] = e[r], e[r] = i;

        return e;
      }, n.default.prototype.sort = function (e, t) {
        var r = t ? e.slice(0, Math.min(t, e.length)) : e,
            i = t ? e.slice(Math.min(t, e.length)) : [];
        return (r = "string" == typeof r[0] ? r.sort() : r.sort(function (e, t) {
          return e - t;
        })).concat(i);
      }, n.default.prototype.splice = function (e, t, r) {
        return Array.prototype.splice.apply(e, [r, 0].concat(t)), e;
      }, n.default.prototype.subset = function (e, t, r) {
        return void 0 !== r ? e.slice(t, t + r) : e.slice(t, e.length);
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    76: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.float = function (e) {
        return e instanceof Array ? e.map(parseFloat) : parseFloat(e);
      }, n.default.prototype.int = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
        return e === 1 / 0 || "Infinity" === e ? 1 / 0 : e === -1 / 0 || "-Infinity" === e ? -1 / 0 : "string" == typeof e ? parseInt(e, t) : "number" == typeof e ? 0 | e : "boolean" == typeof e ? e ? 1 : 0 : e instanceof Array ? e.map(function (e) {
          return n.default.prototype.int(e, t);
        }) : void 0;
      }, n.default.prototype.str = function (e) {
        return e instanceof Array ? e.map(n.default.prototype.str) : String(e);
      }, n.default.prototype.boolean = function (e) {
        return "number" == typeof e ? 0 !== e : "string" == typeof e ? "true" === e.toLowerCase() : "boolean" == typeof e ? e : e instanceof Array ? e.map(n.default.prototype.boolean) : void 0;
      }, n.default.prototype.byte = function (e) {
        var t = n.default.prototype.int(e, 10);
        return "number" == typeof t ? (t + 128) % 256 - 128 : t instanceof Array ? t.map(n.default.prototype.byte) : void 0;
      }, n.default.prototype.char = function (e) {
        return "number" != typeof e || isNaN(e) ? e instanceof Array ? e.map(n.default.prototype.char) : "string" == typeof e ? n.default.prototype.char(parseInt(e, 10)) : void 0 : String.fromCharCode(e);
      }, n.default.prototype.unchar = function (e) {
        return "string" == typeof e && 1 === e.length ? e.charCodeAt(0) : e instanceof Array ? e.map(n.default.prototype.unchar) : void 0;
      }, n.default.prototype.hex = function (e, t) {
        if (t = null == t ? t = 8 : t, e instanceof Array) return e.map(function (e) {
          return n.default.prototype.hex(e, t);
        });
        if (e === 1 / 0 || e === -1 / 0) return (e === 1 / 0 ? "F" : "0").repeat(t);

        if ("number" == typeof e) {
          e < 0 && (e = 4294967295 + e + 1);

          for (var r = Number(e).toString(16).toUpperCase(); r.length < t;) r = "0".concat(r);

          return r.length >= t && (r = r.substring(r.length - t, r.length)), r;
        }
      }, n.default.prototype.unhex = function (e) {
        return e instanceof Array ? e.map(n.default.prototype.unhex) : parseInt("0x".concat(e), 16);
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    77: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          o = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function n(e, t, r) {
        var i = e < 0,
            n = i ? e.toString().substring(1) : e.toString(),
            a = n.indexOf("."),
            o = -1 !== a ? n.substring(0, a) : n,
            s = -1 !== a ? n.substring(a + 1) : "",
            l = i ? "-" : "";

        if (void 0 !== r) {
          var u = "";
          (-1 !== a || 0 < r - s.length) && (u = "."), s.length > r && (s = s.substring(0, r));

          for (var h = 0; h < t - o.length; h++) l += "0";

          l += o, l += u, l += s;

          for (var c = 0; c < r - s.length; c++) l += "0";

          return l;
        }

        for (var f = 0; f < Math.max(t - o.length, 0); f++) l += "0";

        return l += n;
      }

      function a(e, t) {
        var r = (e = e.toString()).indexOf("."),
            i = -1 !== r ? e.substring(r) : "",
            n = -1 !== r ? e.substring(0, r) : e;
        if (n = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), 0 === t) i = "";else if (void 0 !== t) if (t > i.length) for (var a = t - (i += -1 === r ? "." : "").length + 1, o = 0; o < a; o++) i += "0";else i = i.substring(0, t + 1);
        return n + i;
      }

      function s(e) {
        return 0 < parseFloat(e) ? "+".concat(e.toString()) : e.toString();
      }

      function l(e) {
        return 0 <= parseFloat(e) ? " ".concat(e.toString()) : e.toString();
      }

      e("../core/friendly_errors/validate_params"), e("../core/friendly_errors/file_errors"), e("../core/friendly_errors/fes_core"), o.default.prototype.join = function (e, t) {
        return o.default._validateParameters("join", arguments), e.join(t);
      }, o.default.prototype.match = function (e, t) {
        return o.default._validateParameters("match", arguments), e.match(t);
      }, o.default.prototype.matchAll = function (e, t) {
        o.default._validateParameters("matchAll", arguments);

        for (var r = new RegExp(t, "g"), i = r.exec(e), n = []; null !== i;) n.push(i), i = r.exec(e);

        return n;
      }, o.default.prototype.nf = function (e, t, r) {
        return o.default._validateParameters("nf", arguments), e instanceof Array ? e.map(function (e) {
          return n(e, t, r);
        }) : "[object Arguments]" === Object.prototype.toString.call(e) ? 3 === e.length ? this.nf(e[0], e[1], e[2]) : 2 === e.length ? this.nf(e[0], e[1]) : this.nf(e[0]) : n(e, t, r);
      }, o.default.prototype.nfc = function (e, t) {
        return o.default._validateParameters("nfc", arguments), e instanceof Array ? e.map(function (e) {
          return a(e, t);
        }) : a(e, t);
      }, o.default.prototype.nfp = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        o.default._validateParameters("nfp", t);

        var i = o.default.prototype.nf.apply(this, t);
        return i instanceof Array ? i.map(s) : s(i);
      }, o.default.prototype.nfs = function () {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        o.default._validateParameters("nfs", t);

        var i = o.default.prototype.nf.apply(this, t);
        return i instanceof Array ? i.map(l) : l(i);
      }, o.default.prototype.split = function (e, t) {
        return o.default._validateParameters("split", arguments), e.split(t);
      }, o.default.prototype.splitTokens = function (e, t) {
        var r;

        if (o.default._validateParameters("splitTokens", arguments), void 0 !== t) {
          var i = t,
              n = /\]/g.exec(i),
              a = /\[/g.exec(i);
          r = a && n ? (i = i.slice(0, n.index) + i.slice(n.index + 1), a = /\[/g.exec(i), i = i.slice(0, a.index) + i.slice(a.index + 1), new RegExp("[\\[".concat(i, "\\]]"), "g")) : n ? (i = i.slice(0, n.index) + i.slice(n.index + 1), new RegExp("[".concat(i, "\\]]"), "g")) : a ? (i = i.slice(0, a.index) + i.slice(a.index + 1), new RegExp("[".concat(i, "\\[]"), "g")) : new RegExp("[".concat(i, "]"), "g");
        } else r = /\s/g;

        return e.split(r).filter(function (e) {
          return e;
        });
      }, o.default.prototype.trim = function (e) {
        return o.default._validateParameters("trim", arguments), e instanceof Array ? e.map(this.trim) : e.trim();
      };
      var u = o.default;
      r.default = u;
    }, {
      "../core/friendly_errors/fes_core": 28,
      "../core/friendly_errors/file_errors": 29,
      "../core/friendly_errors/validate_params": 31,
      "../core/main": 36
    }],
    78: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.prototype.day = function () {
        return new Date().getDate();
      }, n.default.prototype.hour = function () {
        return new Date().getHours();
      }, n.default.prototype.minute = function () {
        return new Date().getMinutes();
      }, n.default.prototype.millis = function () {
        return -1 === this._millisStart ? 0 : window.performance.now() - this._millisStart;
      }, n.default.prototype.month = function () {
        return new Date().getMonth() + 1;
      }, n.default.prototype.second = function () {
        return new Date().getSeconds();
      }, n.default.prototype.year = function () {
        return new Date().getFullYear();
      };
      var a = n.default;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    79: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          E = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      e("./p5.Geometry");

      var d = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      E.default.prototype.plane = function (e, t, r, i) {
        this._assert3d("plane"), E.default._validateParameters("plane", arguments), void 0 === e && (e = 50), void 0 === t && (t = e), void 0 === r && (r = 1), void 0 === i && (i = 1);
        var n = "plane|".concat(r, "|").concat(i);

        if (!this._renderer.geometryInHash(n)) {
          var a = new E.default.Geometry(r, i, function () {
            for (var e, t, r, i = 0; i <= this.detailY; i++) {
              t = i / this.detailY;

              for (var n = 0; n <= this.detailX; n++) e = n / this.detailX, r = new E.default.Vector(e - .5, t - .5, 0), this.vertices.push(r), this.uvs.push(e, t);
            }
          });
          a.computeFaces().computeNormals(), r <= 1 && i <= 1 ? a._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw stroke on plane objects with more than 1 detailX or 1 detailY"), this._renderer.createBuffers(n, a);
        }

        return this._renderer.drawBuffersScaled(n, e, t, 1), this;
      }, E.default.prototype.box = function (e, t, r, i, n) {
        this._assert3d("box"), E.default._validateParameters("box", arguments), void 0 === e && (e = 50), void 0 === t && (t = e), void 0 === r && (r = t);
        var a = this._renderer.attributes && this._renderer.attributes.perPixelLighting;
        void 0 === i && (i = a ? 1 : 4), void 0 === n && (n = a ? 1 : 4);
        var o = "box|".concat(i, "|").concat(n);

        if (!this._renderer.geometryInHash(o)) {
          var s = new E.default.Geometry(i, n, function () {
            var e = [[0, 4, 2, 6], [1, 3, 5, 7], [0, 1, 4, 5], [2, 6, 3, 7], [0, 2, 1, 3], [4, 5, 6, 7]];
            this.strokeIndices = [[0, 1], [1, 3], [3, 2], [6, 7], [8, 9], [9, 11], [14, 15], [16, 17], [17, 19], [18, 19], [20, 21], [22, 23]];

            for (var t = 0; t < e.length; t++) {
              for (var r = e[t], i = 4 * t, n = 0; n < 4; n++) {
                var a = r[n],
                    o = new E.default.Vector((2 * (1 & a) - 1) / 2, ((2 & a) - 1) / 2, ((4 & a) / 2 - 1) / 2);
                this.vertices.push(o), this.uvs.push(1 & n, (2 & n) / 2);
              }

              this.faces.push([i, 1 + i, 2 + i]), this.faces.push([2 + i, 1 + i, 3 + i]);
            }
          });
          s.computeNormals(), i <= 4 && n <= 4 ? s._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw stroke on box objects with more than 4 detailX or 4 detailY"), this._renderer.createBuffers(o, s);
        }

        return this._renderer.drawBuffersScaled(o, e, t, r), this;
      }, E.default.prototype.sphere = function (e, t, r) {
        return this._assert3d("sphere"), E.default._validateParameters("sphere", arguments), void 0 === e && (e = 50), void 0 === t && (t = 24), void 0 === r && (r = 16), this.ellipsoid(e, e, e, t, r), this;
      };

      function l(e, t, r, i, n, a, o) {
        e = e <= 0 ? 1 : e, t = t < 0 ? 0 : t, r = r <= 0 ? e : r, i = i < 3 ? 3 : i;
        var s,
            l,
            u,
            h = (a = void 0 === a || a) ? -2 : 0,
            c = (n = n < 1 ? 1 : n) + ((o = void 0 === o ? 0 !== t : o) ? 2 : 0),
            f = Math.atan2(e - t, r),
            d = Math.sin(f),
            p = Math.cos(f);

        for (s = h; s <= c; ++s) {
          var m = s / n,
              y = r * m,
              v = void 0;

          for (v = s < 0 ? (m = y = 0, e) : n < s ? (y = r, m = 1, t) : e + (t - e) * m, -2 !== s && s !== n + 2 || (v = 0), y -= r / 2, l = 0; l < i; ++l) {
            var g = l / (i - 1),
                b = 2 * Math.PI * g,
                _ = Math.sin(b),
                x = Math.cos(b);

            this.vertices.push(new E.default.Vector(_ * v, y, x * v));
            var w = void 0;
            w = s < 0 ? new E.default.Vector(0, -1, 0) : n < s && t ? new E.default.Vector(0, 1, 0) : new E.default.Vector(_ * p, d, x * p), this.vertexNormals.push(w), this.uvs.push(g, m);
          }
        }

        var S = 0;

        if (a) {
          for (u = 0; u < i; ++u) {
            var M = (u + 1) % i;
            this.faces.push([S + u, S + i + M, S + i + u]);
          }

          S += 2 * i;
        }

        for (s = 0; s < n; ++s) {
          for (l = 0; l < i; ++l) {
            var T = (l + 1) % i;
            this.faces.push([S + l, S + T, S + i + T]), this.faces.push([S + l, S + i + T, S + i + l]);
          }

          S += i;
        }

        if (o) for (S += i, l = 0; l < i; ++l) this.faces.push([S + l, S + (l + 1) % i, S + i]);
      }

      E.default.prototype.cylinder = function (e, t, r, i, n, a) {
        this._assert3d("cylinder"), E.default._validateParameters("cylinder", arguments), void 0 === e && (e = 50), void 0 === t && (t = e), void 0 === r && (r = 24), void 0 === i && (i = 1), void 0 === a && (a = !0), void 0 === n && (n = !0);
        var o = "cylinder|".concat(r, "|").concat(i, "|").concat(n, "|").concat(a);

        if (!this._renderer.geometryInHash(o)) {
          var s = new E.default.Geometry(r, i);
          l.call(s, 1, 1, 1, r, i, n, a), r <= 24 && i <= 16 ? s._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw stroke on cylinder objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(o, s);
        }

        return this._renderer.drawBuffersScaled(o, e, t, e), this;
      }, E.default.prototype.cone = function (e, t, r, i, n) {
        this._assert3d("cone"), E.default._validateParameters("cone", arguments), void 0 === e && (e = 50), void 0 === t && (t = e), void 0 === r && (r = 24), void 0 === i && (i = 1), void 0 === n && (n = !0);
        var a = "cone|".concat(r, "|").concat(i, "|").concat(n);

        if (!this._renderer.geometryInHash(a)) {
          var o = new E.default.Geometry(r, i);
          l.call(o, 1, 0, 1, r, i, n, !1), r <= 24 && i <= 16 ? o._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw stroke on cone objects with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(a, o);
        }

        return this._renderer.drawBuffersScaled(a, e, t, e), this;
      }, E.default.prototype.ellipsoid = function (e, t, r, i, n) {
        this._assert3d("ellipsoid"), E.default._validateParameters("ellipsoid", arguments), void 0 === e && (e = 50), void 0 === t && (t = e), void 0 === r && (r = e), void 0 === i && (i = 24), void 0 === n && (n = 16);
        var a = "ellipsoid|".concat(i, "|").concat(n);

        if (!this._renderer.geometryInHash(a)) {
          var o = new E.default.Geometry(i, n, function () {
            for (var e = 0; e <= this.detailY; e++) for (var t = e / this.detailY, r = Math.PI * t - Math.PI / 2, i = Math.cos(r), n = Math.sin(r), a = 0; a <= this.detailX; a++) {
              var o = a / this.detailX,
                  s = 2 * Math.PI * o,
                  l = Math.cos(s),
                  u = Math.sin(s),
                  h = new E.default.Vector(i * u, n, i * l);
              this.vertices.push(h), this.vertexNormals.push(h), this.uvs.push(o, t);
            }
          });
          o.computeFaces(), i <= 24 && n <= 24 ? o._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw stroke on ellipsoids with more than 24 detailX or 24 detailY"), this._renderer.createBuffers(a, o);
        }

        return this._renderer.drawBuffersScaled(a, e, t, r), this;
      }, E.default.prototype.torus = function (e, t, r, i) {
        if (this._assert3d("torus"), E.default._validateParameters("torus", arguments), void 0 === e) e = 50;else if (!e) return;
        if (void 0 === t) t = 10;else if (!t) return;
        void 0 === r && (r = 24), void 0 === i && (i = 16);
        var d = (t / e).toPrecision(4),
            n = "torus|".concat(d, "|").concat(r, "|").concat(i);

        if (!this._renderer.geometryInHash(n)) {
          var a = new E.default.Geometry(r, i, function () {
            for (var e = 0; e <= this.detailY; e++) for (var t = e / this.detailY, r = 2 * Math.PI * t, i = Math.cos(r), n = Math.sin(r), a = 1 + d * i, o = 0; o <= this.detailX; o++) {
              var s = o / this.detailX,
                  l = 2 * Math.PI * s,
                  u = Math.cos(l),
                  h = Math.sin(l),
                  c = new E.default.Vector(a * u, a * h, d * n),
                  f = new E.default.Vector(i * u, i * h, n);
              this.vertices.push(c), this.vertexNormals.push(f), this.uvs.push(s, t);
            }
          });
          a.computeFaces(), r <= 24 && i <= 16 ? a._makeTriangleEdges()._edgesToVertices() : this._renderer._doStroke && console.log("Cannot draw strokes on torus object with more than 24 detailX or 16 detailY"), this._renderer.createBuffers(n, a);
        }

        return this._renderer.drawBuffersScaled(n, e, e, e), this;
      }, E.default.RendererGL.prototype.point = function (e, t, r) {
        void 0 === r && (r = 0);
        var i = [];
        return i.push(new E.default.Vector(e, t, r)), this._drawPoints(i, this.immediateMode.buffers.point), this;
      }, E.default.RendererGL.prototype.triangle = function (e) {
        var t = e[0],
            r = e[1],
            i = e[2],
            n = e[3],
            a = e[4],
            o = e[5];

        if (!this.geometryInHash("tri")) {
          var s = new E.default.Geometry(1, 1, function () {
            var e = [];
            e.push(new E.default.Vector(0, 0, 0)), e.push(new E.default.Vector(0, 1, 0)), e.push(new E.default.Vector(1, 0, 0)), this.strokeIndices = [[0, 1], [1, 2], [2, 0]], this.vertices = e, this.faces = [[0, 1, 2]], this.uvs = [0, 0, 0, 1, 1, 1];
          });
          s._makeTriangleEdges()._edgesToVertices(), s.computeNormals(), this.createBuffers("tri", s);
        }

        var l = this.uMVMatrix.copy();

        try {
          var u = new E.default.Matrix([i - t, n - r, 0, 0, a - t, o - r, 0, 0, 0, 0, 1, 0, t, r, 0, 1]).mult(this.uMVMatrix);
          this.uMVMatrix = u, this.drawBuffers("tri");
        } finally {
          this.uMVMatrix = l;
        }

        return this;
      }, E.default.RendererGL.prototype.ellipse = function (e) {
        this.arc(e[0], e[1], e[2], e[3], 0, d.TWO_PI, d.OPEN, e[4]);
      }, E.default.RendererGL.prototype.arc = function (e) {
        var t,
            r = e,
            i = arguments[1],
            n = arguments[2],
            a = arguments[3],
            o = arguments[4],
            s = arguments[5],
            l = arguments[6],
            u = arguments[7] || 25;

        if (t = Math.abs(s - o) >= d.TWO_PI ? "".concat("ellipse", "|").concat(u, "|") : "".concat("arc", "|").concat(o, "|").concat(s, "|").concat(l, "|").concat(u, "|"), !this.geometryInHash(t)) {
          var h = new E.default.Geometry(u, 1, function () {
            if (this.strokeIndices = [], o.toFixed(10) !== s.toFixed(10)) {
              l !== d.PIE && void 0 !== l || (this.vertices.push(new E.default.Vector(.5, .5, 0)), this.uvs.push([.5, .5]));

              for (var e = 0; e <= u; e++) {
                var t = (s - o) * (e / u) + o,
                    r = .5 + Math.cos(t) / 2,
                    i = .5 + Math.sin(t) / 2;
                this.vertices.push(new E.default.Vector(r, i, 0)), this.uvs.push([r, i]), e < u - 1 && (this.faces.push([0, e + 1, e + 2]), this.strokeIndices.push([e + 1, e + 2]));
              }

              switch (l) {
                case d.PIE:
                  this.faces.push([0, this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([0, 1]), this.strokeIndices.push([this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([0, this.vertices.length - 1]);
                  break;

                case d.CHORD:
                  this.strokeIndices.push([0, 1]), this.strokeIndices.push([0, this.vertices.length - 1]);
                  break;

                case d.OPEN:
                  this.strokeIndices.push([0, 1]);
                  break;

                default:
                  this.faces.push([0, this.vertices.length - 2, this.vertices.length - 1]), this.strokeIndices.push([this.vertices.length - 2, this.vertices.length - 1]);
              }
            }
          });
          h.computeNormals(), u <= 50 ? h._makeTriangleEdges()._edgesToVertices(h) : this._renderer._doStroke && console.log("Cannot stroke ${shape} with more than 50 detail"), this.createBuffers(t, h);
        }

        var c = this.uMVMatrix.copy();

        try {
          this.uMVMatrix.translate([r, i, 0]), this.uMVMatrix.scale(n, a, 1), this.drawBuffers(t);
        } finally {
          this.uMVMatrix = c;
        }

        return this;
      }, E.default.RendererGL.prototype.rect = function (e) {
        var t = this._pInst._glAttributes.perPixelLighting,
            r = e[0],
            i = e[1],
            n = e[2],
            a = e[3],
            o = e[4] || (t ? 1 : 24),
            s = e[5] || (t ? 1 : 16),
            l = "rect|".concat(o, "|").concat(s);

        if (!this.geometryInHash(l)) {
          var u = new E.default.Geometry(o, s, function () {
            for (var e = 0; e <= this.detailY; e++) for (var t = e / this.detailY, r = 0; r <= this.detailX; r++) {
              var i = r / this.detailX,
                  n = new E.default.Vector(i, t, 0);
              this.vertices.push(n), this.uvs.push(i, t);
            }

            0 < o && 0 < s && (this.strokeIndices = [[0, o], [o, (o + 1) * (s + 1) - 1], [(o + 1) * (s + 1) - 1, (o + 1) * s], [(o + 1) * s, 0]]);
          });
          u.computeFaces().computeNormals()._makeTriangleEdges()._edgesToVertices(), this.createBuffers(l, u);
        }

        var h = this.uMVMatrix.copy();

        try {
          this.uMVMatrix.translate([r, i, 0]), this.uMVMatrix.scale(n, a, 1), this.drawBuffers(l);
        } finally {
          this.uMVMatrix = h;
        }

        return this;
      }, E.default.RendererGL.prototype.quad = function (u, h, c, f, d, p, m, y, v, g, b, _, e, t) {
        void 0 === e && (e = 2), void 0 === t && (t = 2);
        var r = "quad|".concat(u, "|").concat(h, "|").concat(c, "|").concat(f, "|").concat(d, "|").concat(p, "|").concat(m, "|").concat(y, "|").concat(v, "|").concat(g, "|").concat(b, "|").concat(_, "|").concat(e, "|").concat(t);

        if (!this.geometryInHash(r)) {
          var i = new E.default.Geometry(e, t, function () {
            for (var e = 1 / (this.detailX - 1), t = 1 / (this.detailY - 1), r = 0; r < this.detailY; r++) for (var i = 0; i < this.detailX; i++) {
              var n = i * e,
                  a = r * t,
                  o = (1 - n) * ((1 - a) * u + a * g) + n * ((1 - a) * f + a * m),
                  s = (1 - n) * ((1 - a) * h + a * b) + n * ((1 - a) * d + a * y),
                  l = (1 - n) * ((1 - a) * c + a * _) + n * ((1 - a) * p + a * v);
              this.vertices.push(new E.default.Vector(o, s, l)), this.uvs.push([n, a]);
            }
          });
          i.faces = [];

          for (var n = 0; n < t - 1; n++) for (var a = 0; a < e - 1; a++) {
            var o = a + n * e,
                s = a + 1 + n * e,
                l = a + 1 + (n + 1) * e,
                x = a + (n + 1) * e;
            i.faces.push([o, s, l]), i.faces.push([o, l, x]);
          }

          i.computeNormals()._makeTriangleEdges()._edgesToVertices(), this.createBuffers(r, i);
        }

        return this.drawBuffers(r), this;
      }, E.default.RendererGL.prototype.bezier = function (e, t, r, i, n, a, o, s, l, u, h, c) {
        8 === arguments.length && (h = s, u = o, s = a, o = n, n = i, i = r, r = a = l = c = 0);
        var f = this._pInst._bezierDetail || 20;
        this.beginShape();

        for (var d = 0; d <= f; d++) {
          var p = Math.pow(1 - d / f, 3),
              m = d / f * 3 * Math.pow(1 - d / f, 2),
              y = 3 * Math.pow(d / f, 2) * (1 - d / f),
              v = Math.pow(d / f, 3);
          this.vertex(e * p + i * m + o * y + u * v, t * p + n * m + s * y + h * v, r * p + a * m + l * y + c * v);
        }

        return this.endShape(), this;
      }, E.default.RendererGL.prototype.curve = function (e, t, r, i, n, a, o, s, l, u, h, c) {
        8 === arguments.length && (u = o, h = s, o = n, s = i, n = i = r, r = a = l = c = 0);
        var f = this._pInst._curveDetail;
        this.beginShape();

        for (var d = 0; d <= f; d++) {
          var p = .5 * Math.pow(d / f, 3),
              m = .5 * Math.pow(d / f, 2),
              y = d / f * .5,
              v = p * (3 * i - e - 3 * o + u) + m * (2 * e - 5 * i + 4 * o - u) + y * (-e + o) + 2 * i * .5,
              g = p * (3 * n - t - 3 * s + h) + m * (2 * t - 5 * n + 4 * s - h) + y * (-t + s) + 2 * n * .5,
              b = p * (3 * a - r - 3 * l + c) + m * (2 * r - 5 * a + 4 * l - c) + y * (-r + l) + 2 * a * .5;
          this.vertex(v, g, b);
        }

        return this.endShape(), this;
      }, E.default.RendererGL.prototype.line = function () {
        return 6 === arguments.length ? (this.beginShape(d.LINES), this.vertex(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 2 ? void 0 : arguments[2]), this.vertex(arguments.length <= 3 ? void 0 : arguments[3], arguments.length <= 4 ? void 0 : arguments[4], arguments.length <= 5 ? void 0 : arguments[5]), this.endShape()) : 4 === arguments.length && (this.beginShape(d.LINES), this.vertex(arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 1 ? void 0 : arguments[1], 0), this.vertex(arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 3 ? void 0 : arguments[3], 0), this.endShape()), this;
      }, E.default.RendererGL.prototype.bezierVertex = function () {
        if (0 === this.immediateMode._bezierVertex.length) throw Error("vertex() must be used once before calling bezierVertex()");
        var e,
            t,
            r,
            i,
            n,
            a = [],
            o = [],
            s = [],
            l = arguments.length;

        if ((e = 0) === this._lookUpTableBezier.length || this._lutBezierDetail !== this._pInst._curveDetail) {
          this._lookUpTableBezier = [], this._lutBezierDetail = this._pInst._curveDetail;

          for (var u = 1 / this._lutBezierDetail, h = 0, c = 1, f = 0; h < 1;) {
            if (e = parseFloat(h.toFixed(6)), this._lookUpTableBezier[f] = this._bezierCoefficients(e), c.toFixed(6) === u.toFixed(6)) {
              e = parseFloat(c.toFixed(6)) + parseFloat(h.toFixed(6)), ++f, this._lookUpTableBezier[f] = this._bezierCoefficients(e);
              break;
            }

            h += u, c -= u, ++f;
          }
        }

        var d = this._lookUpTableBezier.length;

        if (6 === l) {
          for (this.isBezier = !0, a = [this.immediateMode._bezierVertex[0], arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 4 ? void 0 : arguments[4]], o = [this.immediateMode._bezierVertex[1], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 3 ? void 0 : arguments[3], arguments.length <= 5 ? void 0 : arguments[5]], n = 0; n < d; n++) t = a[0] * this._lookUpTableBezier[n][0] + a[1] * this._lookUpTableBezier[n][1] + a[2] * this._lookUpTableBezier[n][2] + a[3] * this._lookUpTableBezier[n][3], r = o[0] * this._lookUpTableBezier[n][0] + o[1] * this._lookUpTableBezier[n][1] + o[2] * this._lookUpTableBezier[n][2] + o[3] * this._lookUpTableBezier[n][3], this.vertex(t, r);

          this.immediateMode._bezierVertex[0] = arguments.length <= 4 ? void 0 : arguments[4], this.immediateMode._bezierVertex[1] = arguments.length <= 5 ? void 0 : arguments[5];
        } else if (9 === l) {
          for (this.isBezier = !0, a = [this.immediateMode._bezierVertex[0], arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 3 ? void 0 : arguments[3], arguments.length <= 6 ? void 0 : arguments[6]], o = [this.immediateMode._bezierVertex[1], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 4 ? void 0 : arguments[4], arguments.length <= 7 ? void 0 : arguments[7]], s = [this.immediateMode._bezierVertex[2], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 5 ? void 0 : arguments[5], arguments.length <= 8 ? void 0 : arguments[8]], n = 0; n < d; n++) t = a[0] * this._lookUpTableBezier[n][0] + a[1] * this._lookUpTableBezier[n][1] + a[2] * this._lookUpTableBezier[n][2] + a[3] * this._lookUpTableBezier[n][3], r = o[0] * this._lookUpTableBezier[n][0] + o[1] * this._lookUpTableBezier[n][1] + o[2] * this._lookUpTableBezier[n][2] + o[3] * this._lookUpTableBezier[n][3], i = s[0] * this._lookUpTableBezier[n][0] + s[1] * this._lookUpTableBezier[n][1] + s[2] * this._lookUpTableBezier[n][2] + s[3] * this._lookUpTableBezier[n][3], this.vertex(t, r, i);

          this.immediateMode._bezierVertex[0] = arguments.length <= 6 ? void 0 : arguments[6], this.immediateMode._bezierVertex[1] = arguments.length <= 7 ? void 0 : arguments[7], this.immediateMode._bezierVertex[2] = arguments.length <= 8 ? void 0 : arguments[8];
        }
      }, E.default.RendererGL.prototype.quadraticVertex = function () {
        if (0 === this.immediateMode._quadraticVertex.length) throw Error("vertex() must be used once before calling quadraticVertex()");
        var e,
            t,
            r,
            i,
            n,
            a = [],
            o = [],
            s = [],
            l = arguments.length;

        if ((e = 0) === this._lookUpTableQuadratic.length || this._lutQuadraticDetail !== this._pInst._curveDetail) {
          this._lookUpTableQuadratic = [], this._lutQuadraticDetail = this._pInst._curveDetail;

          for (var u = 1 / this._lutQuadraticDetail, h = 0, c = 1, f = 0; h < 1;) {
            if (e = parseFloat(h.toFixed(6)), this._lookUpTableQuadratic[f] = this._quadraticCoefficients(e), c.toFixed(6) === u.toFixed(6)) {
              e = parseFloat(c.toFixed(6)) + parseFloat(h.toFixed(6)), ++f, this._lookUpTableQuadratic[f] = this._quadraticCoefficients(e);
              break;
            }

            h += u, c -= u, ++f;
          }
        }

        var d = this._lookUpTableQuadratic.length;

        if (4 === l) {
          for (this.isQuadratic = !0, a = [this.immediateMode._quadraticVertex[0], arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 2 ? void 0 : arguments[2]], o = [this.immediateMode._quadraticVertex[1], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 3 ? void 0 : arguments[3]], n = 0; n < d; n++) t = a[0] * this._lookUpTableQuadratic[n][0] + a[1] * this._lookUpTableQuadratic[n][1] + a[2] * this._lookUpTableQuadratic[n][2], r = o[0] * this._lookUpTableQuadratic[n][0] + o[1] * this._lookUpTableQuadratic[n][1] + o[2] * this._lookUpTableQuadratic[n][2], this.vertex(t, r);

          this.immediateMode._quadraticVertex[0] = arguments.length <= 2 ? void 0 : arguments[2], this.immediateMode._quadraticVertex[1] = arguments.length <= 3 ? void 0 : arguments[3];
        } else if (6 === l) {
          for (this.isQuadratic = !0, a = [this.immediateMode._quadraticVertex[0], arguments.length <= 0 ? void 0 : arguments[0], arguments.length <= 3 ? void 0 : arguments[3]], o = [this.immediateMode._quadraticVertex[1], arguments.length <= 1 ? void 0 : arguments[1], arguments.length <= 4 ? void 0 : arguments[4]], s = [this.immediateMode._quadraticVertex[2], arguments.length <= 2 ? void 0 : arguments[2], arguments.length <= 5 ? void 0 : arguments[5]], n = 0; n < d; n++) t = a[0] * this._lookUpTableQuadratic[n][0] + a[1] * this._lookUpTableQuadratic[n][1] + a[2] * this._lookUpTableQuadratic[n][2], r = o[0] * this._lookUpTableQuadratic[n][0] + o[1] * this._lookUpTableQuadratic[n][1] + o[2] * this._lookUpTableQuadratic[n][2], i = s[0] * this._lookUpTableQuadratic[n][0] + s[1] * this._lookUpTableQuadratic[n][1] + s[2] * this._lookUpTableQuadratic[n][2], this.vertex(t, r, i);

          this.immediateMode._quadraticVertex[0] = arguments.length <= 3 ? void 0 : arguments[3], this.immediateMode._quadraticVertex[1] = arguments.length <= 4 ? void 0 : arguments[4], this.immediateMode._quadraticVertex[2] = arguments.length <= 5 ? void 0 : arguments[5];
        }
      }, E.default.RendererGL.prototype.curveVertex = function () {
        var e,
            t,
            r,
            i,
            n,
            a = [],
            o = [],
            s = [],
            l = arguments.length;

        if ((e = 0) === this._lookUpTableBezier.length || this._lutBezierDetail !== this._pInst._curveDetail) {
          this._lookUpTableBezier = [], this._lutBezierDetail = this._pInst._curveDetail;

          for (var u = 1 / this._lutBezierDetail, h = 0, c = 1, f = 0; h < 1;) {
            if (e = parseFloat(h.toFixed(6)), this._lookUpTableBezier[f] = this._bezierCoefficients(e), c.toFixed(6) === u.toFixed(6)) {
              e = parseFloat(c.toFixed(6)) + parseFloat(h.toFixed(6)), ++f, this._lookUpTableBezier[f] = this._bezierCoefficients(e);
              break;
            }

            h += u, c -= u, ++f;
          }
        }

        var d = this._lookUpTableBezier.length;

        if (2 === l) {
          if (this.immediateMode._curveVertex.push(arguments.length <= 0 ? void 0 : arguments[0]), this.immediateMode._curveVertex.push(arguments.length <= 1 ? void 0 : arguments[1]), 8 === this.immediateMode._curveVertex.length) {
            for (this.isCurve = !0, a = this._bezierToCatmull([this.immediateMode._curveVertex[0], this.immediateMode._curveVertex[2], this.immediateMode._curveVertex[4], this.immediateMode._curveVertex[6]]), o = this._bezierToCatmull([this.immediateMode._curveVertex[1], this.immediateMode._curveVertex[3], this.immediateMode._curveVertex[5], this.immediateMode._curveVertex[7]]), n = 0; n < d; n++) t = a[0] * this._lookUpTableBezier[n][0] + a[1] * this._lookUpTableBezier[n][1] + a[2] * this._lookUpTableBezier[n][2] + a[3] * this._lookUpTableBezier[n][3], r = o[0] * this._lookUpTableBezier[n][0] + o[1] * this._lookUpTableBezier[n][1] + o[2] * this._lookUpTableBezier[n][2] + o[3] * this._lookUpTableBezier[n][3], this.vertex(t, r);

            for (n = 0; n < l; n++) this.immediateMode._curveVertex.shift();
          }
        } else if (3 === l && (this.immediateMode._curveVertex.push(arguments.length <= 0 ? void 0 : arguments[0]), this.immediateMode._curveVertex.push(arguments.length <= 1 ? void 0 : arguments[1]), this.immediateMode._curveVertex.push(arguments.length <= 2 ? void 0 : arguments[2]), 12 === this.immediateMode._curveVertex.length)) {
          for (this.isCurve = !0, a = this._bezierToCatmull([this.immediateMode._curveVertex[0], this.immediateMode._curveVertex[3], this.immediateMode._curveVertex[6], this.immediateMode._curveVertex[9]]), o = this._bezierToCatmull([this.immediateMode._curveVertex[1], this.immediateMode._curveVertex[4], this.immediateMode._curveVertex[7], this.immediateMode._curveVertex[10]]), s = this._bezierToCatmull([this.immediateMode._curveVertex[2], this.immediateMode._curveVertex[5], this.immediateMode._curveVertex[8], this.immediateMode._curveVertex[11]]), n = 0; n < d; n++) t = a[0] * this._lookUpTableBezier[n][0] + a[1] * this._lookUpTableBezier[n][1] + a[2] * this._lookUpTableBezier[n][2] + a[3] * this._lookUpTableBezier[n][3], r = o[0] * this._lookUpTableBezier[n][0] + o[1] * this._lookUpTableBezier[n][1] + o[2] * this._lookUpTableBezier[n][2] + o[3] * this._lookUpTableBezier[n][3], i = s[0] * this._lookUpTableBezier[n][0] + s[1] * this._lookUpTableBezier[n][1] + s[2] * this._lookUpTableBezier[n][2] + s[3] * this._lookUpTableBezier[n][3], this.vertex(t, r, i);

          for (n = 0; n < l; n++) this.immediateMode._curveVertex.shift();
        }
      }, E.default.RendererGL.prototype.image = function (e, t, r, i, n, a, o, s, l) {
        this._isErasing && this.blendMode(this._cachedBlendMode), this._pInst.push(), this._pInst.noLights(), this._pInst.texture(e), this._pInst.textureMode(d.NORMAL);
        var u = 0;
        t <= e.width && (u = t / e.width);
        var h = 1;
        t + i <= e.width && (h = (t + i) / e.width);
        var c = 0;
        r <= e.height && (c = r / e.height);
        var f = 1;
        r + n <= e.height && (f = (r + n) / e.height), this.beginShape(), this.vertex(a, o, 0, u, c), this.vertex(a + s, o, 0, h, c), this.vertex(a + s, o + l, 0, h, f), this.vertex(a, o + l, 0, u, f), this.endShape(d.CLOSE), this._pInst.pop(), this._isErasing && this.blendMode(d.REMOVE);
      };
      var n = E.default;
      r.default = n;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./p5.Geometry": 85
    }],
    80: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          f = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          n = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      f.default.prototype.orbitControl = function (e, t, r) {
        if (this._assert3d("orbitControl"), f.default._validateParameters("orbitControl", arguments), this.mouseX < this.width && 0 < this.mouseX && this.mouseY < this.height && 0 < this.mouseY) {
          var i = this._renderer._curCamera;
          void 0 === e && (e = 1), void 0 === t && (t = e), void 0 === r && (r = .5), !0 !== this.contextMenuDisabled && (this.canvas.oncontextmenu = function () {
            return !1;
          }, this._setProperty("contextMenuDisabled", !0)), !0 !== this.wheelDefaultDisabled && (this.canvas.onwheel = function () {
            return !1;
          }, this._setProperty("wheelDefaultDisabled", !0));
          var n = this.height < this.width ? this.height : this.width;
          if (this._mouseWheelDeltaY !== this._pmouseWheelDeltaY && (0 < this._mouseWheelDeltaY ? this._renderer._curCamera._orbit(0, 0, r * n) : this._renderer._curCamera._orbit(0, 0, -r * n)), this.mouseIsPressed) if (this.mouseButton === this.LEFT) {
            var a = -e * (this.mouseX - this.pmouseX) / n,
                o = t * (this.mouseY - this.pmouseY) / n;

            this._renderer._curCamera._orbit(a, o, 0);
          } else if (this.mouseButton === this.RIGHT) {
            var s = i._getLocalAxes(),
                l = Math.sqrt(s.x[0] * s.x[0] + s.x[2] * s.x[2]);

            0 !== l && (s.x[0] /= l, s.x[2] /= l);
            var u = Math.sqrt(s.y[0] * s.y[0] + s.y[2] * s.y[2]);
            0 !== u && (s.y[0] /= u, s.y[2] /= u);
            var h = -1 * e * (this.mouseX - this.pmouseX),
                c = -1 * t * (this.mouseY - this.pmouseY);
            i.setPosition(i.eyeX + h * s.x[0] + c * s.z[0], i.eyeY, i.eyeZ + h * s.x[2] + c * s.z[2]);
          }
          return this;
        }
      }, f.default.prototype.debugMode = function () {
        this._assert3d("debugMode");

        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        f.default._validateParameters("debugMode", t);

        for (var i = this._registeredMethods.post.length - 1; 0 <= i; i--) this._registeredMethods.post[i].toString() !== this._grid().toString() && this._registeredMethods.post[i].toString() !== this._axesIcon().toString() || this._registeredMethods.post.splice(i, 1);

        t[0] === n.GRID ? this.registerMethod("post", this._grid.call(this, t[1], t[2], t[3], t[4], t[5])) : t[0] === n.AXES ? this.registerMethod("post", this._axesIcon.call(this, t[1], t[2], t[3], t[4])) : (this.registerMethod("post", this._grid.call(this, t[0], t[1], t[2], t[3], t[4])), this.registerMethod("post", this._axesIcon.call(this, t[5], t[6], t[7], t[8])));
      }, f.default.prototype.noDebugMode = function () {
        this._assert3d("noDebugMode");

        for (var e = this._registeredMethods.post.length - 1; 0 <= e; e--) this._registeredMethods.post[e].toString() !== this._grid().toString() && this._registeredMethods.post[e].toString() !== this._axesIcon().toString() || this._registeredMethods.post.splice(e, 1);
      }, f.default.prototype._grid = function (e, r, i, n, a) {
        void 0 === e && (e = this.width / 2), void 0 === r && (r = Math.round(e / 30) < 4 ? 4 : Math.round(e / 30)), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === a && (a = 0);
        var o = e / r,
            s = e / 2;
        return function () {
          this.push(), this.stroke(255 * this._renderer.curStrokeColor[0], 255 * this._renderer.curStrokeColor[1], 255 * this._renderer.curStrokeColor[2]), this._renderer.uMVMatrix.set(this._renderer._curCamera.cameraMatrix.mat4[0], this._renderer._curCamera.cameraMatrix.mat4[1], this._renderer._curCamera.cameraMatrix.mat4[2], this._renderer._curCamera.cameraMatrix.mat4[3], this._renderer._curCamera.cameraMatrix.mat4[4], this._renderer._curCamera.cameraMatrix.mat4[5], this._renderer._curCamera.cameraMatrix.mat4[6], this._renderer._curCamera.cameraMatrix.mat4[7], this._renderer._curCamera.cameraMatrix.mat4[8], this._renderer._curCamera.cameraMatrix.mat4[9], this._renderer._curCamera.cameraMatrix.mat4[10], this._renderer._curCamera.cameraMatrix.mat4[11], this._renderer._curCamera.cameraMatrix.mat4[12], this._renderer._curCamera.cameraMatrix.mat4[13], this._renderer._curCamera.cameraMatrix.mat4[14], this._renderer._curCamera.cameraMatrix.mat4[15]);

          for (var e = 0; e <= r; e++) this.beginShape(this.LINES), this.vertex(-s + i, n, e * o - s + a), this.vertex(+s + i, n, e * o - s + a), this.endShape();

          for (var t = 0; t <= r; t++) this.beginShape(this.LINES), this.vertex(t * o - s + i, n, -s + a), this.vertex(t * o - s + i, n, +s + a), this.endShape();

          this.pop();
        };
      }, f.default.prototype._axesIcon = function (e, t, r, i) {
        return void 0 === e && (e = 40 < this.width / 20 ? this.width / 20 : 40), void 0 === t && (t = -this.width / 4), void 0 === r && (r = t), void 0 === i && (i = t), function () {
          this.push(), this._renderer.uMVMatrix.set(this._renderer._curCamera.cameraMatrix.mat4[0], this._renderer._curCamera.cameraMatrix.mat4[1], this._renderer._curCamera.cameraMatrix.mat4[2], this._renderer._curCamera.cameraMatrix.mat4[3], this._renderer._curCamera.cameraMatrix.mat4[4], this._renderer._curCamera.cameraMatrix.mat4[5], this._renderer._curCamera.cameraMatrix.mat4[6], this._renderer._curCamera.cameraMatrix.mat4[7], this._renderer._curCamera.cameraMatrix.mat4[8], this._renderer._curCamera.cameraMatrix.mat4[9], this._renderer._curCamera.cameraMatrix.mat4[10], this._renderer._curCamera.cameraMatrix.mat4[11], this._renderer._curCamera.cameraMatrix.mat4[12], this._renderer._curCamera.cameraMatrix.mat4[13], this._renderer._curCamera.cameraMatrix.mat4[14], this._renderer._curCamera.cameraMatrix.mat4[15]), this.strokeWeight(2), this.stroke(255, 0, 0), this.beginShape(this.LINES), this.vertex(t, r, i), this.vertex(t + e, r, i), this.endShape(), this.stroke(0, 255, 0), this.beginShape(this.LINES), this.vertex(t, r, i), this.vertex(t, r + e, i), this.endShape(), this.stroke(0, 0, 255), this.beginShape(this.LINES), this.vertex(t, r, i), this.vertex(t, r, i + e), this.endShape(), this.pop();
        };
      };
      var a = f.default;
      r.default = a;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    81: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          m = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          n = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      m.default.prototype.ambientLight = function (e, t, r, i) {
        this._assert3d("ambientLight"), m.default._validateParameters("ambientLight", arguments);
        var n = this.color.apply(this, arguments);
        return this._renderer.ambientLightColors.push(n._array[0], n._array[1], n._array[2]), this._renderer._enableLighting = !0, this;
      }, m.default.prototype.specularColor = function (e, t, r) {
        this._assert3d("specularColor"), m.default._validateParameters("specularColor", arguments);
        var i = this.color.apply(this, arguments);
        return this._renderer.specularColors = [i._array[0], i._array[1], i._array[2]], this;
      }, m.default.prototype.directionalLight = function (e, t, r, i, n, a) {
        var o, s, l, u;
        this._assert3d("directionalLight"), m.default._validateParameters("directionalLight", arguments), o = e instanceof m.default.Color ? e : this.color(e, t, r);
        var h = arguments[arguments.length - 1];
        u = "number" == typeof h ? (s = arguments[arguments.length - 3], l = arguments[arguments.length - 2], arguments[arguments.length - 1]) : (s = h.x, l = h.y, h.z);
        var c = Math.sqrt(s * s + l * l + u * u);
        return this._renderer.directionalLightDirections.push(s / c, l / c, u / c), this._renderer.directionalLightDiffuseColors.push(o._array[0], o._array[1], o._array[2]), Array.prototype.push.apply(this._renderer.directionalLightSpecularColors, this._renderer.specularColors), this._renderer._enableLighting = !0, this;
      }, m.default.prototype.pointLight = function (e, t, r, i, n, a) {
        var o, s, l, u;
        this._assert3d("pointLight"), m.default._validateParameters("pointLight", arguments), o = e instanceof m.default.Color ? e : this.color(e, t, r);
        var h = arguments[arguments.length - 1];
        return u = "number" == typeof h ? (s = arguments[arguments.length - 3], l = arguments[arguments.length - 2], arguments[arguments.length - 1]) : (s = h.x, l = h.y, h.z), this._renderer.pointLightPositions.push(s, l, u), this._renderer.pointLightDiffuseColors.push(o._array[0], o._array[1], o._array[2]), Array.prototype.push.apply(this._renderer.pointLightSpecularColors, this._renderer.specularColors), this._renderer._enableLighting = !0, this;
      }, m.default.prototype.lights = function () {
        if (this._assert3d("lights"), this._colorMode === n.RGB) this.ambientLight(128, 128, 128), this.directionalLight(128, 128, 128, 0, 0, -1);else {
          var e = this._colorMaxes[this._colorMode][2];
          this.ambientLight(0, 0, e), this.directionalLight(0, 0, e, 0, 0, -1);
        }
        return this;
      }, m.default.prototype.lightFalloff = function (e, t, r) {
        return this._assert3d("lightFalloff"), m.default._validateParameters("lightFalloff", arguments), e < 0 && (e = 0, console.warn("Value of constant argument in lightFalloff() should be never be negative. Set to 0.")), t < 0 && (t = 0, console.warn("Value of linear argument in lightFalloff() should be never be negative. Set to 0.")), r < 0 && (r = 0, console.warn("Value of quadratic argument in lightFalloff() should be never be negative. Set to 0.")), 0 === e && 0 === t && 0 === r && (e = 1, console.warn("Either one of the three arguments in lightFalloff() should be greater than zero. Set constant argument to 1.")), this._renderer.constantAttenuation = e, this._renderer.linearAttenuation = t, this._renderer.quadraticAttenuation = r, this;
      }, m.default.prototype.spotLight = function (e, t, r, i, n, a, o, s, l, u, h) {
        var c, f, d;
        this._assert3d("spotLight"), m.default._validateParameters("spotLight", arguments);
        var p = arguments.length;

        switch (p) {
          case 11:
          case 10:
            c = this.color(e, t, r), f = new m.default.Vector(i, n, a), d = new m.default.Vector(o, s, l);
            break;

          case 9:
            e instanceof m.default.Color ? (c = e, f = new m.default.Vector(t, r, i), d = new m.default.Vector(n, a, o), u = s, h = l) : i instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, d = new m.default.Vector(n, a, o), u = s, h = l) : o instanceof m.default.Vector ? (c = this.color(e, t, r), f = new m.default.Vector(i, n, a), d = o, u = s, h = l) : (c = this.color(e, t, r), f = new m.default.Vector(i, n, a), d = new m.default.Vector(o, s, l));
            break;

          case 8:
            u = (d = e instanceof m.default.Color ? (c = e, f = new m.default.Vector(t, r, i), new m.default.Vector(n, a, o)) : i instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, new m.default.Vector(n, a, o)) : (c = this.color(e, t, r), f = new m.default.Vector(i, n, a), o), s);
            break;

          case 7:
            e instanceof m.default.Color && t instanceof m.default.Vector ? (c = e, f = t, d = new m.default.Vector(r, i, n), u = a, h = o) : e instanceof m.default.Color && n instanceof m.default.Vector ? (c = e, f = new m.default.Vector(t, r, i), d = n, u = a, h = o) : i instanceof m.default.Vector && n instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, d = n, u = a, h = o) : d = e instanceof m.default.Color ? (c = e, f = new m.default.Vector(t, r, i), new m.default.Vector(n, a, o)) : i instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, new m.default.Vector(n, a, o)) : (c = this.color(e, t, r), f = new m.default.Vector(i, n, a), o);
            break;

          case 6:
            i instanceof m.default.Vector && n instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, d = n, u = a) : e instanceof m.default.Color && n instanceof m.default.Vector ? (c = e, f = new m.default.Vector(t, r, i), d = n, u = a) : e instanceof m.default.Color && t instanceof m.default.Vector && (c = e, f = t, d = new m.default.Vector(r, i, n), u = a);
            break;

          case 5:
            e instanceof m.default.Color && t instanceof m.default.Vector && r instanceof m.default.Vector ? (c = e, f = t, d = r, u = i, h = n) : i instanceof m.default.Vector && n instanceof m.default.Vector ? (c = this.color(e, t, r), f = i, d = n) : e instanceof m.default.Color && n instanceof m.default.Vector ? (c = e, f = new m.default.Vector(t, r, i), d = n) : e instanceof m.default.Color && t instanceof m.default.Vector && (c = e, f = t, d = new m.default.Vector(r, i, n));
            break;

          case 4:
            c = e, f = t, d = r, u = i;
            break;

          case 3:
            c = e, f = t, d = r;
            break;

          default:
            return console.warn("Sorry, input for spotlight() is not in prescribed format. Too ".concat(p < 3 ? "few" : "many", " arguments were provided")), this;
        }

        return this._renderer.spotLightDiffuseColors.push(c._array[0], c._array[1], c._array[2]), Array.prototype.push.apply(this._renderer.spotLightSpecularColors, this._renderer.specularColors), this._renderer.spotLightPositions.push(f.x, f.y, f.z), d.normalize(), this._renderer.spotLightDirections.push(d.x, d.y, d.z), void 0 === u && (u = Math.PI / 3), void 0 !== h && h < 1 ? (h = 1, console.warn("Value of concentration needs to be greater than 1. Setting it to 1")) : void 0 === h && (h = 100), u = this._renderer._pInst._toRadians(u), this._renderer.spotLightAngle.push(Math.cos(u)), this._renderer.spotLightConc.push(h), this._renderer._enableLighting = !0, this;
      }, m.default.prototype.noLights = function () {
        return this._assert3d("noLights"), m.default._validateParameters("noLights", arguments), this._renderer._enableLighting = !1, this._renderer.ambientLightColors.length = 0, this._renderer.specularColors = [1, 1, 1], this._renderer.directionalLightDirections.length = 0, this._renderer.directionalLightDiffuseColors.length = 0, this._renderer.directionalLightSpecularColors.length = 0, this._renderer.pointLightPositions.length = 0, this._renderer.pointLightDiffuseColors.length = 0, this._renderer.pointLightSpecularColors.length = 0, this._renderer.spotLightPositions.length = 0, this._renderer.spotLightDirections.length = 0, this._renderer.spotLightDiffuseColors.length = 0, this._renderer.spotLightSpecularColors.length = 0, this._renderer.spotLightAngle.length = 0, this._renderer.spotLightConc.length = 0, this._renderer.constantAttenuation = 1, this._renderer.linearAttenuation = 0, this._renderer.quadraticAttenuation = 0, this._renderer._useShininess = 1, this;
      };
      var a = m.default;
      r.default = a;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    82: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          S = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      function s(e, t, r) {
        for (var i = 0, n = e.length; i < n; i++) if (e[i] !== t.getUint8(r + i, !1)) return !1;

        return !0;
      }

      e("./p5.Geometry"), S.default.prototype.loadModel = function (e) {
        var t, r, i;

        S.default._validateParameters("loadModel", arguments);

        var n = e.slice(-4);
        "boolean" == typeof arguments[1] ? (t = arguments[1], r = arguments[2], i = arguments[3], void 0 !== arguments[4] && (n = arguments[4])) : (t = !1, r = arguments[1], i = arguments[2], void 0 !== arguments[3] && (n = arguments[3]));
        var a = new S.default.Geometry();
        a.gid = "".concat(e, "|").concat(t);
        var o = this;
        return n.match(/\.stl$/i) ? this.httpDo(e, "GET", "arrayBuffer", function (e) {
          !function (e, t) {
            if (function (e) {
              for (var t = new DataView(e), r = [115, 111, 108, 105, 100], i = 0; i < 5; i++) if (s(r, t, i)) return !1;

              return !0;
            }(t)) !function (e, t) {
              for (var r, i, n, a, o, s, l, u = new DataView(t), h = u.getUint32(80, !0), c = !1, f = 0; f < 70; f++) 1129270351 === u.getUint32(f, !1) && 82 === u.getUint8(f + 4) && 61 === u.getUint8(f + 5) && (c = !0, a = [], o = u.getUint8(f + 6) / 255, s = u.getUint8(f + 7) / 255, l = u.getUint8(f + 8) / 255);

              for (var d = 0; d < h; d++) {
                var p = 84 + 50 * d,
                    m = u.getFloat32(p, !0),
                    y = u.getFloat32(4 + p, !0),
                    v = u.getFloat32(8 + p, !0);

                if (c) {
                  var g = u.getUint16(48 + p, !0);
                  n = 0 == (32768 & g) ? (r = (31 & g) / 31, i = (g >> 5 & 31) / 31, (g >> 10 & 31) / 31) : (r = o, i = s, l);
                }

                for (var b = new S.default.Vector(m, y, v), _ = 1; _ <= 3; _++) {
                  var x = p + 12 * _,
                      w = new S.default.Vector(u.getFloat32(x, !0), u.getFloat32(4 + x, !0), u.getFloat32(8 + x, !0));
                  e.vertices.push(w), e.vertexNormals.push(b), c && a.push(r, i, n);
                }

                e.faces.push([3 * d, 3 * d + 1, 3 * d + 2]), e.uvs.push([0, 0], [0, 0], [0, 0]);
              }
            }(e, t);else {
              var r = new DataView(t);
              if (!("TextDecoder" in window)) return console.warn("Sorry, ASCII STL loading only works in browsers that support TextDecoder (https://caniuse.com/#feat=textencoder)");
              var i = new TextDecoder("utf-8").decode(r).split("\n");
              !function (e, t) {
                for (var r, i, n = "", a = [], o = 0; o < t.length; ++o) {
                  for (var s = t[o].trim(), l = s.split(" "), u = 0; u < l.length; ++u) "" === l[u] && l.splice(u, 1);

                  if (0 !== l.length) switch (n) {
                    case "":
                      if ("solid" !== l[0]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "solid"'));
                      n = "solid";
                      break;

                    case "solid":
                      if ("facet" !== l[0] || "normal" !== l[1]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "facet normal"'));
                      r = new S.default.Vector(parseFloat(l[2]), parseFloat(l[3]), parseFloat(l[4])), e.vertexNormals.push(r, r, r), n = "facet normal";
                      break;

                    case "facet normal":
                      if ("outer" !== l[0] || "loop" !== l[1]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "outer loop"'));
                      n = "vertex";
                      break;

                    case "vertex":
                      if ("vertex" === l[0]) i = new S.default.Vector(parseFloat(l[1]), parseFloat(l[2]), parseFloat(l[3])), e.vertices.push(i), e.uvs.push([0, 0]), a.push(e.vertices.indexOf(i));else {
                        if ("endloop" !== l[0]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "vertex" or "endloop"'));
                        e.faces.push(a), a = [], n = "endloop";
                      }
                      break;

                    case "endloop":
                      if ("endfacet" !== l[0]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "endfacet"'));
                      n = "endfacet";
                      break;

                    case "endfacet":
                      if ("endsolid" !== l[0]) {
                        if ("facet" !== l[0] || "normal" !== l[1]) return console.error(s), console.error('Invalid state "'.concat(l[0], '", should be "endsolid" or "facet normal"'));
                        r = new S.default.Vector(parseFloat(l[2]), parseFloat(l[3]), parseFloat(l[4])), e.vertexNormals.push(r, r, r), n = "facet normal";
                      }

                      break;

                    default:
                      console.error('Invalid state "'.concat(n, '"'));
                  }
                }
              }(e, i);
            }
          }(a, e), t && a.normalize(), o._decrementPreload(), "function" == typeof r && r(a);
        }, i) : n.match(/\.obj$/i) ? this.loadStrings(e, function (e) {
          !function (e, t) {
            for (var r = {
              v: [],
              vt: [],
              vn: []
            }, i = {}, n = 0; n < t.length; ++n) {
              var a = t[n].trim().split(/\b\s+/);
              if (0 < a.length) if ("v" === a[0] || "vn" === a[0]) {
                var o = new S.default.Vector(parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]));
                r[a[0]].push(o);
              } else if ("vt" === a[0]) {
                var s = [parseFloat(a[1]), 1 - parseFloat(a[2])];
                r[a[0]].push(s);
              } else if ("f" === a[0]) for (var l = 3; l < a.length; ++l) {
                for (var u = [], h = [1, l - 1, l], c = 0; c < h.length; ++c) {
                  var f = a[h[c]],
                      d = 0;
                  if (void 0 !== i[f]) d = i[f];else {
                    for (var p = f.split("/"), m = 0; m < p.length; m++) p[m] = parseInt(p[m]) - 1;

                    d = i[f] = e.vertices.length, e.vertices.push(r.v[p[0]].copy()), r.vt[p[1]] ? e.uvs.push(r.vt[p[1]].slice()) : e.uvs.push([0, 0]), r.vn[p[2]] && e.vertexNormals.push(r.vn[p[2]].copy());
                  }
                  u.push(d);
                }

                u[0] !== u[1] && u[0] !== u[2] && u[1] !== u[2] && e.faces.push(u);
              }
            }

            0 === e.vertexNormals.length && e.computeNormals();
          }(a, e), t && a.normalize(), o._decrementPreload(), "function" == typeof r && r(a);
        }, i) : (S.default._friendlyFileLoadError(3, e), i ? i() : console.error("Sorry, the file type is invalid. Only OBJ and STL files are supported.")), a;
      }, S.default.prototype.model = function (e) {
        this._assert3d("model"), S.default._validateParameters("model", arguments), 0 < e.vertices.length && (this._renderer.geometryInHash(e.gid) || (e._makeTriangleEdges()._edgesToVertices(), this._renderer.createBuffers(e.gid, e)), this._renderer.drawBuffers(e.gid));
      };
      var n = S.default;
      r.default = n;
    }, {
      "../core/main": 36,
      "./p5.Geometry": 85
    }],
    83: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          u = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          n = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      e("./p5.Texture"), u.default.prototype.loadShader = function (e, t, r, i) {
        u.default._validateParameters("loadShader", arguments), i = i || console.error;

        function n() {
          o._decrementPreload(), r && r(a);
        }

        var a = new u.default.Shader(),
            o = this,
            s = !1,
            l = !1;
        return this.loadStrings(e, function (e) {
          a._vertSrc = e.join("\n"), l = !0, s && n();
        }, i), this.loadStrings(t, function (e) {
          a._fragSrc = e.join("\n"), s = !0, l && n();
        }, i), a;
      }, u.default.prototype.createShader = function (e, t) {
        return this._assert3d("createShader"), u.default._validateParameters("createShader", arguments), new u.default.Shader(this._renderer, e, t);
      }, u.default.prototype.shader = function (e) {
        return this._assert3d("shader"), u.default._validateParameters("shader", arguments), void 0 === e._renderer && (e._renderer = this._renderer), e.isStrokeShader() ? this._renderer.userStrokeShader = e : (this._renderer.userFillShader = e, this._renderer._useNormalMaterial = !1), e.init(), this;
      }, u.default.prototype.resetShader = function () {
        return this._renderer.userFillShader = this._renderer.userStrokeShader = null, this;
      }, u.default.prototype.normalMaterial = function () {
        this._assert3d("normalMaterial");

        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];

        return u.default._validateParameters("normalMaterial", t), this._renderer.drawMode = n.FILL, this._renderer._useSpecularMaterial = !1, this._renderer._useEmissiveMaterial = !1, this._renderer._useNormalMaterial = !0, this._renderer.curFillColor = [1, 1, 1, 1], this._renderer._setProperty("_doFill", !0), this.noStroke(), this;
      }, u.default.prototype.texture = function (e) {
        return this._assert3d("texture"), u.default._validateParameters("texture", arguments), e.gifProperties && e._animateGif(this), this._renderer.drawMode = n.TEXTURE, this._renderer._useSpecularMaterial = !1, this._renderer._useEmissiveMaterial = !1, this._renderer._useNormalMaterial = !1, this._renderer._tex = e, this._renderer._setProperty("_doFill", !0), this;
      }, u.default.prototype.textureMode = function (e) {
        e !== n.IMAGE && e !== n.NORMAL ? console.warn("You tried to set ".concat(e, " textureMode only supports IMAGE & NORMAL ")) : this._renderer.textureMode = e;
      }, u.default.prototype.textureWrap = function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e;
        this._renderer.textureWrapX = e, this._renderer.textureWrapY = t;

        for (var r = this._renderer.textures, i = 0; i < r.length; i++) r[i].setWrapMode(e, t);
      }, u.default.prototype.ambientMaterial = function (e, t, r) {
        this._assert3d("ambientMaterial"), u.default._validateParameters("ambientMaterial", arguments);
        var i = u.default.prototype.color.apply(this, arguments);
        return this._renderer.curFillColor = i._array, this._renderer._useSpecularMaterial = !1, this._renderer._useEmissiveMaterial = !1, this._renderer._useNormalMaterial = !1, this._renderer._enableLighting = !0, this._renderer._tex = null, this;
      }, u.default.prototype.emissiveMaterial = function (e, t, r, i) {
        this._assert3d("emissiveMaterial"), u.default._validateParameters("emissiveMaterial", arguments);
        var n = u.default.prototype.color.apply(this, arguments);
        return this._renderer.curFillColor = n._array, this._renderer._useSpecularMaterial = !1, this._renderer._useEmissiveMaterial = !0, this._renderer._useNormalMaterial = !1, this._renderer._enableLighting = !0, this._renderer._tex = null, this;
      }, u.default.prototype.specularMaterial = function (e, t, r, i) {
        this._assert3d("specularMaterial"), u.default._validateParameters("specularMaterial", arguments);
        var n = u.default.prototype.color.apply(this, arguments);
        return this._renderer.curFillColor = n._array, this._renderer._useSpecularMaterial = !0, this._renderer._useEmissiveMaterial = !1, this._renderer._useNormalMaterial = !1, this._renderer._enableLighting = !0, this._renderer._tex = null, this;
      }, u.default.prototype.shininess = function (e) {
        return this._assert3d("shininess"), u.default._validateParameters("shininess", arguments), e < 1 && (e = 1), this._renderer._useShininess = e, this;
      }, u.default.RendererGL.prototype._applyColorBlend = function (e) {
        var t = this.GL,
            r = this.drawMode === n.TEXTURE || e[e.length - 1] < 1 || this._isErasing;
        return r !== this._isBlending && (r || this.curBlendMode !== n.BLEND && this.curBlendMode !== n.ADD ? t.enable(t.BLEND) : t.disable(t.BLEND), t.depthMask(!0), this._isBlending = r), this._applyBlendMode(), e;
      }, u.default.RendererGL.prototype._applyBlendMode = function () {
        if (this._cachedBlendMode !== this.curBlendMode) {
          var e = this.GL;

          switch (this.curBlendMode) {
            case n.BLEND:
            case n.ADD:
              e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
              break;

            case n.REMOVE:
              e.blendEquation(e.FUNC_REVERSE_SUBTRACT), e.blendFunc(e.SRC_ALPHA, e.DST_ALPHA);
              break;

            case n.MULTIPLY:
              e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ONE, e.ONE);
              break;

            case n.SCREEN:
              e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE_MINUS_DST_COLOR, e.ONE, e.ONE, e.ONE);
              break;

            case n.EXCLUSION:
              e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.ONE_MINUS_DST_COLOR, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE);
              break;

            case n.REPLACE:
              e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO);
              break;

            case n.SUBTRACT:
              e.blendEquationSeparate(e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
              break;

            case n.DARKEST:
              this.blendExt ? (e.blendEquationSeparate(this.blendExt.MIN_EXT, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : console.warn("blendMode(DARKEST) does not work in your browser in WEBGL mode.");
              break;

            case n.LIGHTEST:
              this.blendExt ? (e.blendEquationSeparate(this.blendExt.MAX_EXT, e.FUNC_ADD), e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : console.warn("blendMode(LIGHTEST) does not work in your browser in WEBGL mode.");
              break;

            default:
              console.error("Oops! Somehow RendererGL set curBlendMode to an unsupported mode.");
          }

          this._isErasing || (this._cachedBlendMode = this.curBlendMode);
        }
      };
      var a = u.default;
      r.default = a;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./p5.Texture": 92
    }],
    84: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          m = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      m.default.prototype.camera = function () {
        var e;

        this._assert3d("camera");

        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return m.default._validateParameters("camera", r), (e = this._renderer._curCamera).camera.apply(e, r), this;
      }, m.default.prototype.perspective = function () {
        var e;

        this._assert3d("perspective");

        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return m.default._validateParameters("perspective", r), (e = this._renderer._curCamera).perspective.apply(e, r), this;
      }, m.default.prototype.ortho = function () {
        var e;

        this._assert3d("ortho");

        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return m.default._validateParameters("ortho", r), (e = this._renderer._curCamera).ortho.apply(e, r), this;
      }, m.default.prototype.frustum = function () {
        var e;

        this._assert3d("frustum");

        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];

        return m.default._validateParameters("frustum", r), (e = this._renderer._curCamera).frustum.apply(e, r), this;
      }, m.default.prototype.createCamera = function () {
        this._assert3d("createCamera");

        var e = new m.default.Camera(this._renderer);
        return e._computeCameraDefaultSettings(), e._setDefaultCamera(), this._renderer._curCamera = e;
      }, m.default.Camera = function (e) {
        this._renderer = e, this.cameraType = "default", this.cameraMatrix = new m.default.Matrix(), this.projMatrix = new m.default.Matrix();
      }, m.default.Camera.prototype.perspective = function (e, t, r, i) {
        this.cameraType = 0 < arguments.length ? "custom" : "default", void 0 === e ? (e = this.defaultCameraFOV, this.cameraFOV = e) : this.cameraFOV = this._renderer._pInst._toRadians(e), void 0 === t && (t = this.defaultAspectRatio), void 0 === r && (r = this.defaultCameraNear), void 0 === i && (i = this.defaultCameraFar), r <= 1e-4 && (r = .01, console.log("Avoid perspective near plane values close to or below 0. Setting value to 0.01.")), i < r && console.log("Perspective far plane value is less than near plane value. Nothing will be shown."), this.aspectRatio = t, this.cameraNear = r, this.cameraFar = i, this.projMatrix = m.default.Matrix.identity();
        var n = 1 / Math.tan(this.cameraFOV / 2),
            a = 1 / (this.cameraNear - this.cameraFar);
        this.projMatrix.set(n / t, 0, 0, 0, 0, -n, 0, 0, 0, 0, (i + r) * a, -1, 0, 0, 2 * i * r * a, 0), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]);
      }, m.default.Camera.prototype.ortho = function (e, t, r, i, n, a) {
        void 0 === e && (e = -this._renderer.width / 2), void 0 === t && (t = this._renderer.width / 2), void 0 === r && (r = -this._renderer.height / 2), void 0 === i && (i = this._renderer.height / 2), void 0 === n && (n = 0), void 0 === a && (a = Math.max(this._renderer.width, this._renderer.height));
        var o = t - e,
            s = i - r,
            l = a - n,
            u = 2 / o,
            h = 2 / s,
            c = -2 / l,
            f = -(t + e) / o,
            d = -(i + r) / s,
            p = -(a + n) / l;
        this.projMatrix = m.default.Matrix.identity(), this.projMatrix.set(u, 0, 0, 0, 0, -h, 0, 0, 0, 0, c, 0, f, d, p, 1), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, m.default.Camera.prototype.frustum = function (e, t, r, i, n, a) {
        void 0 === e && (e = -this._renderer.width / 2), void 0 === t && (t = this._renderer.width / 2), void 0 === r && (r = -this._renderer.height / 2), void 0 === i && (i = this._renderer.height / 2), void 0 === n && (n = 0), void 0 === a && (a = Math.max(this._renderer.width, this._renderer.height));
        var o = t - e,
            s = i - r,
            l = a - n,
            u = 2 * n / o,
            h = 2 * n / s,
            c = -2 * a * n / l,
            f = (t + e) / o,
            d = (i + r) / s,
            p = -(a + n) / l;
        this.projMatrix = m.default.Matrix.identity(), this.projMatrix.set(u, 0, 0, 0, 0, h, 0, 0, f, d, p, -1, 0, 0, c, 0), this._isActive() && this._renderer.uPMatrix.set(this.projMatrix.mat4[0], this.projMatrix.mat4[1], this.projMatrix.mat4[2], this.projMatrix.mat4[3], this.projMatrix.mat4[4], this.projMatrix.mat4[5], this.projMatrix.mat4[6], this.projMatrix.mat4[7], this.projMatrix.mat4[8], this.projMatrix.mat4[9], this.projMatrix.mat4[10], this.projMatrix.mat4[11], this.projMatrix.mat4[12], this.projMatrix.mat4[13], this.projMatrix.mat4[14], this.projMatrix.mat4[15]), this.cameraType = "custom";
      }, m.default.Camera.prototype._rotateView = function (e, t, r, i) {
        var n = this.centerX,
            a = this.centerY,
            o = this.centerZ;
        n -= this.eyeX, a -= this.eyeY, o -= this.eyeZ;
        var s = m.default.Matrix.identity(this._renderer._pInst);
        s.rotate(this._renderer._pInst._toRadians(e), t, r, i);
        var l = [n * s.mat4[0] + a * s.mat4[4] + o * s.mat4[8], n * s.mat4[1] + a * s.mat4[5] + o * s.mat4[9], n * s.mat4[2] + a * s.mat4[6] + o * s.mat4[10]];
        l[0] += this.eyeX, l[1] += this.eyeY, l[2] += this.eyeZ, this.camera(this.eyeX, this.eyeY, this.eyeZ, l[0], l[1], l[2], this.upX, this.upY, this.upZ);
      }, m.default.Camera.prototype.pan = function (e) {
        var t = this._getLocalAxes();

        this._rotateView(e, t.y[0], t.y[1], t.y[2]);
      }, m.default.Camera.prototype.tilt = function (e) {
        var t = this._getLocalAxes();

        this._rotateView(e, t.x[0], t.x[1], t.x[2]);
      }, m.default.Camera.prototype.lookAt = function (e, t, r) {
        this.camera(this.eyeX, this.eyeY, this.eyeZ, e, t, r, this.upX, this.upY, this.upZ);
      }, m.default.Camera.prototype.camera = function (e, t, r, i, n, a, o, s, l) {
        void 0 === e && (e = this.defaultEyeX, t = this.defaultEyeY, r = this.defaultEyeZ, i = e, n = t, s = 1, l = o = a = 0), this.eyeX = e, this.eyeY = t, this.eyeZ = r, void 0 !== i && (this.centerX = i, this.centerY = n, this.centerZ = a), void 0 !== o && (this.upX = o, this.upY = s, this.upZ = l);

        var u = this._getLocalAxes();

        this.cameraMatrix.set(u.x[0], u.y[0], u.z[0], 0, u.x[1], u.y[1], u.z[1], 0, u.x[2], u.y[2], u.z[2], 0, 0, 0, 0, 1);
        var h = -e,
            c = -t,
            f = -r;
        return this.cameraMatrix.translate([h, c, f]), this._isActive() && this._renderer.uMVMatrix.set(this.cameraMatrix.mat4[0], this.cameraMatrix.mat4[1], this.cameraMatrix.mat4[2], this.cameraMatrix.mat4[3], this.cameraMatrix.mat4[4], this.cameraMatrix.mat4[5], this.cameraMatrix.mat4[6], this.cameraMatrix.mat4[7], this.cameraMatrix.mat4[8], this.cameraMatrix.mat4[9], this.cameraMatrix.mat4[10], this.cameraMatrix.mat4[11], this.cameraMatrix.mat4[12], this.cameraMatrix.mat4[13], this.cameraMatrix.mat4[14], this.cameraMatrix.mat4[15]), this;
      }, m.default.Camera.prototype.move = function (e, t, r) {
        var i = this._getLocalAxes(),
            n = [i.x[0] * e, i.x[1] * e, i.x[2] * e],
            a = [i.y[0] * t, i.y[1] * t, i.y[2] * t],
            o = [i.z[0] * r, i.z[1] * r, i.z[2] * r];

        this.camera(this.eyeX + n[0] + a[0] + o[0], this.eyeY + n[1] + a[1] + o[1], this.eyeZ + n[2] + a[2] + o[2], this.centerX + n[0] + a[0] + o[0], this.centerY + n[1] + a[1] + o[1], this.centerZ + n[2] + a[2] + o[2], 0, 1, 0);
      }, m.default.Camera.prototype.setPosition = function (e, t, r) {
        var i = e - this.eyeX,
            n = t - this.eyeY,
            a = r - this.eyeZ;
        this.camera(e, t, r, this.centerX + i, this.centerY + n, this.centerZ + a, 0, 1, 0);
      }, m.default.Camera.prototype._computeCameraDefaultSettings = function () {
        this.defaultCameraFOV = 60 / 180 * Math.PI, this.defaultAspectRatio = this._renderer.width / this._renderer.height, this.defaultEyeX = 0, this.defaultEyeY = 0, this.defaultEyeZ = this._renderer.height / 2 / Math.tan(this.defaultCameraFOV / 2), this.defaultCenterX = 0, this.defaultCenterY = 0, this.defaultCenterZ = 0, this.defaultCameraNear = .1 * this.defaultEyeZ, this.defaultCameraFar = 10 * this.defaultEyeZ;
      }, m.default.Camera.prototype._setDefaultCamera = function () {
        this.cameraFOV = this.defaultCameraFOV, this.aspectRatio = this.defaultAspectRatio, this.eyeX = this.defaultEyeX, this.eyeY = this.defaultEyeY, this.eyeZ = this.defaultEyeZ, this.centerX = this.defaultCenterX, this.centerY = this.defaultCenterY, this.centerZ = this.defaultCenterZ, this.upX = 0, this.upY = 1, this.upZ = 0, this.cameraNear = this.defaultCameraNear, this.cameraFar = this.defaultCameraFar, this.perspective(), this.camera(), this.cameraType = "default";
      }, m.default.Camera.prototype._resize = function () {
        "default" === this.cameraType ? (this._computeCameraDefaultSettings(), this._setDefaultCamera()) : this.perspective(this.cameraFOV, this._renderer.width / this._renderer.height);
      }, m.default.Camera.prototype.copy = function () {
        var e = new m.default.Camera(this._renderer);
        return e.cameraFOV = this.cameraFOV, e.aspectRatio = this.aspectRatio, e.eyeX = this.eyeX, e.eyeY = this.eyeY, e.eyeZ = this.eyeZ, e.centerX = this.centerX, e.centerY = this.centerY, e.centerZ = this.centerZ, e.cameraNear = this.cameraNear, e.cameraFar = this.cameraFar, e.cameraType = this.cameraType, e.cameraMatrix = this.cameraMatrix.copy(), e.projMatrix = this.projMatrix.copy(), e;
      }, m.default.Camera.prototype._getLocalAxes = function () {
        var e = this.eyeX - this.centerX,
            t = this.eyeY - this.centerY,
            r = this.eyeZ - this.centerZ,
            i = Math.sqrt(e * e + t * t + r * r);
        0 !== i && (e /= i, t /= i, r /= i);
        var n = this.upX,
            a = this.upY,
            o = this.upZ,
            s = a * r - o * t,
            l = -n * r + o * e,
            u = n * t - a * e;
        n = t * u - r * l, a = -e * u + r * s, o = e * l - t * s;
        var h = Math.sqrt(s * s + l * l + u * u);
        0 !== h && (s /= h, l /= h, u /= h);
        var c = Math.sqrt(n * n + a * a + o * o);
        return 0 !== c && (n /= c, a /= c, o /= c), {
          x: [s, l, u],
          y: [n, a, o],
          z: [e, t, r]
        };
      }, m.default.Camera.prototype._orbit = function (e, t, r) {
        var i = this.eyeX - this.centerX,
            n = this.eyeY - this.centerY,
            a = this.eyeZ - this.centerZ,
            o = Math.sqrt(i * i + n * n + a * a),
            s = Math.atan2(i, a),
            l = Math.acos(Math.max(-1, Math.min(1, n / o)));
        s += e, (o += r) < 0 && (o = .1), (l += t) > Math.PI ? l = Math.PI : l <= 0 && (l = .001);
        var u = Math.sin(l) * o * Math.sin(s),
            h = Math.cos(l) * o,
            c = Math.sin(l) * o * Math.cos(s);
        this.camera(u + this.centerX, h + this.centerY, c + this.centerZ, this.centerX, this.centerY, this.centerZ, 0, 1, 0);
      }, m.default.Camera.prototype._isActive = function () {
        return this === this._renderer._curCamera;
      }, m.default.prototype.setCamera = function (e) {
        this._renderer._curCamera = e, this._renderer.uPMatrix.set(e.projMatrix.mat4[0], e.projMatrix.mat4[1], e.projMatrix.mat4[2], e.projMatrix.mat4[3], e.projMatrix.mat4[4], e.projMatrix.mat4[5], e.projMatrix.mat4[6], e.projMatrix.mat4[7], e.projMatrix.mat4[8], e.projMatrix.mat4[9], e.projMatrix.mat4[10], e.projMatrix.mat4[11], e.projMatrix.mat4[12], e.projMatrix.mat4[13], e.projMatrix.mat4[14], e.projMatrix.mat4[15]);
      };
      var n = m.default.Camera;
      r.default = n;
    }, {
      "../core/main": 36
    }],
    85: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          h = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      h.default.Geometry = function (e, t, r) {
        return this.vertices = [], this.lineVertices = [], this.lineNormals = [], this.vertexNormals = [], this.faces = [], this.uvs = [], this.edges = [], this.vertexColors = [], this.detailX = void 0 !== e ? e : 1, this.detailY = void 0 !== t ? t : 1, this.dirtyFlags = {}, r instanceof Function && r.call(this), this;
      }, h.default.Geometry.prototype.reset = function () {
        this.lineVertices.length = 0, this.lineNormals.length = 0, this.vertices.length = 0, this.edges.length = 0, this.vertexColors.length = 0, this.vertexNormals.length = 0, this.uvs.length = 0, this.dirtyFlags = {};
      }, h.default.Geometry.prototype.computeFaces = function () {
        this.faces.length = 0;

        for (var e, t, r, i, n = this.detailX + 1, a = 0; a < this.detailY; a++) for (var o = 0; o < this.detailX; o++) t = (e = a * n + o) + 1, r = (a + 1) * n + o + 1, i = (a + 1) * n + o, this.faces.push([e, t, i]), this.faces.push([i, t, r]);

        return this;
      }, h.default.Geometry.prototype._getFaceNormal = function (e) {
        var t = this.faces[e],
            r = this.vertices[t[0]],
            i = this.vertices[t[1]],
            n = this.vertices[t[2]],
            a = h.default.Vector.sub(i, r),
            o = h.default.Vector.sub(n, r),
            s = h.default.Vector.cross(a, o),
            l = h.default.Vector.mag(s),
            u = l / (h.default.Vector.mag(a) * h.default.Vector.mag(o));
        return 0 === u || isNaN(u) ? (console.warn("p5.Geometry.prototype._getFaceNormal:", "face has colinear sides or a repeated vertex"), s) : (1 < u && (u = 1), s.mult(Math.asin(u) / l));
      }, h.default.Geometry.prototype.computeNormals = function () {
        var e,
            t = this.vertexNormals,
            r = this.vertices,
            i = this.faces;

        for (e = t.length = 0; e < r.length; ++e) t.push(new h.default.Vector());

        for (var n = 0; n < i.length; ++n) for (var a = i[n], o = this._getFaceNormal(n), s = 0; s < 3; ++s) {
          t[a[s]].add(o);
        }

        for (e = 0; e < r.length; ++e) t[e].normalize();

        return this;
      }, h.default.Geometry.prototype.averageNormals = function () {
        for (var e = 0; e <= this.detailY; e++) {
          var t = this.detailX + 1,
              r = h.default.Vector.add(this.vertexNormals[e * t], this.vertexNormals[e * t + this.detailX]);
          r = h.default.Vector.div(r, 2), this.vertexNormals[e * t] = r, this.vertexNormals[e * t + this.detailX] = r;
        }

        return this;
      }, h.default.Geometry.prototype.averagePoleNormals = function () {
        for (var e = new h.default.Vector(0, 0, 0), t = 0; t < this.detailX; t++) e.add(this.vertexNormals[t]);

        e = h.default.Vector.div(e, this.detailX);

        for (var r = 0; r < this.detailX; r++) this.vertexNormals[r] = e;

        e = new h.default.Vector(0, 0, 0);

        for (var i = this.vertices.length - 1; i > this.vertices.length - 1 - this.detailX; i--) e.add(this.vertexNormals[i]);

        e = h.default.Vector.div(e, this.detailX);

        for (var n = this.vertices.length - 1; n > this.vertices.length - 1 - this.detailX; n--) this.vertexNormals[n] = e;

        return this;
      }, h.default.Geometry.prototype._makeTriangleEdges = function () {
        if (this.edges.length = 0, Array.isArray(this.strokeIndices)) for (var e = 0, t = this.strokeIndices.length; e < t; e++) this.edges.push(this.strokeIndices[e]);else for (var r = 0; r < this.faces.length; r++) this.edges.push([this.faces[r][0], this.faces[r][1]]), this.edges.push([this.faces[r][1], this.faces[r][2]]), this.edges.push([this.faces[r][2], this.faces[r][0]]);
        return this;
      }, h.default.Geometry.prototype._edgesToVertices = function () {
        this.lineVertices.length = 0;

        for (var e = this.lineNormals.length = 0; e < this.edges.length; e++) {
          var t = this.vertices[this.edges[e][0]],
              r = this.vertices[this.edges[e][1]],
              i = r.copy().sub(t).normalize(),
              n = t.array(),
              a = t.array(),
              o = r.array(),
              s = r.array(),
              l = i.array(),
              u = i.array();
          l.push(1), u.push(-1), this.lineNormals.push(l, u, l, l, u, u), this.lineVertices.push(n, a, o, o, a, s);
        }

        return this;
      }, h.default.Geometry.prototype.normalize = function () {
        if (0 < this.vertices.length) {
          for (var e = this.vertices[0].copy(), t = this.vertices[0].copy(), r = 0; r < this.vertices.length; r++) e.x = Math.max(e.x, this.vertices[r].x), t.x = Math.min(t.x, this.vertices[r].x), e.y = Math.max(e.y, this.vertices[r].y), t.y = Math.min(t.y, this.vertices[r].y), e.z = Math.max(e.z, this.vertices[r].z), t.z = Math.min(t.z, this.vertices[r].z);

          for (var i = h.default.Vector.lerp(e, t, .5), n = h.default.Vector.sub(e, t), a = 200 / Math.max(Math.max(n.x, n.y), n.z), o = 0; o < this.vertices.length; o++) this.vertices[o].sub(i), this.vertices[o].mult(a);
        }

        return this;
      };
      var n = h.default.Geometry;
      r.default = n;
    }, {
      "../core/main": 36
    }],
    86: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          P = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };

      var n = Array,
          R = function (e) {
        return e instanceof Array;
      };

      "undefined" != typeof Float32Array && (n = Float32Array, R = function (e) {
        return e instanceof Array || e instanceof Float32Array;
      }), P.default.Matrix = function () {
        for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];

        return e.length && e[e.length - 1] instanceof P.default && (this.p5 = e[e.length - 1]), "mat3" === e[0] ? this.mat3 = Array.isArray(e[1]) ? e[1] : new n([1, 0, 0, 0, 1, 0, 0, 0, 1]) : this.mat4 = Array.isArray(e[0]) ? e[0] : new n([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this;
      }, P.default.Matrix.prototype.set = function (e) {
        return e instanceof P.default.Matrix ? this.mat4 = e.mat4 : R(e) ? this.mat4 = e : 16 === arguments.length && (this.mat4[0] = e, this.mat4[1] = arguments[1], this.mat4[2] = arguments[2], this.mat4[3] = arguments[3], this.mat4[4] = arguments[4], this.mat4[5] = arguments[5], this.mat4[6] = arguments[6], this.mat4[7] = arguments[7], this.mat4[8] = arguments[8], this.mat4[9] = arguments[9], this.mat4[10] = arguments[10], this.mat4[11] = arguments[11], this.mat4[12] = arguments[12], this.mat4[13] = arguments[13], this.mat4[14] = arguments[14], this.mat4[15] = arguments[15]), this;
      }, P.default.Matrix.prototype.get = function () {
        return new P.default.Matrix(this.mat4, this.p5);
      }, P.default.Matrix.prototype.copy = function () {
        var e = new P.default.Matrix(this.p5);
        return e.mat4[0] = this.mat4[0], e.mat4[1] = this.mat4[1], e.mat4[2] = this.mat4[2], e.mat4[3] = this.mat4[3], e.mat4[4] = this.mat4[4], e.mat4[5] = this.mat4[5], e.mat4[6] = this.mat4[6], e.mat4[7] = this.mat4[7], e.mat4[8] = this.mat4[8], e.mat4[9] = this.mat4[9], e.mat4[10] = this.mat4[10], e.mat4[11] = this.mat4[11], e.mat4[12] = this.mat4[12], e.mat4[13] = this.mat4[13], e.mat4[14] = this.mat4[14], e.mat4[15] = this.mat4[15], e;
      }, P.default.Matrix.identity = function (e) {
        return new P.default.Matrix(e);
      }, P.default.Matrix.prototype.transpose = function (e) {
        var t, r, i, n, a, o;
        return e instanceof P.default.Matrix ? (t = e.mat4[1], r = e.mat4[2], i = e.mat4[3], n = e.mat4[6], a = e.mat4[7], o = e.mat4[11], this.mat4[0] = e.mat4[0], this.mat4[1] = e.mat4[4], this.mat4[2] = e.mat4[8], this.mat4[3] = e.mat4[12], this.mat4[4] = t, this.mat4[5] = e.mat4[5], this.mat4[6] = e.mat4[9], this.mat4[7] = e.mat4[13], this.mat4[8] = r, this.mat4[9] = n, this.mat4[10] = e.mat4[10], this.mat4[11] = e.mat4[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = o, this.mat4[15] = e.mat4[15]) : R(e) && (t = e[1], r = e[2], i = e[3], n = e[6], a = e[7], o = e[11], this.mat4[0] = e[0], this.mat4[1] = e[4], this.mat4[2] = e[8], this.mat4[3] = e[12], this.mat4[4] = t, this.mat4[5] = e[5], this.mat4[6] = e[9], this.mat4[7] = e[13], this.mat4[8] = r, this.mat4[9] = n, this.mat4[10] = e[10], this.mat4[11] = e[14], this.mat4[12] = i, this.mat4[13] = a, this.mat4[14] = o, this.mat4[15] = e[15]), this;
      }, P.default.Matrix.prototype.invert = function (e) {
        var t, r, i, n, a, o, s, l, u, h, c, f, d, p, m, y;
        e instanceof P.default.Matrix ? (t = e.mat4[0], r = e.mat4[1], i = e.mat4[2], n = e.mat4[3], a = e.mat4[4], o = e.mat4[5], s = e.mat4[6], l = e.mat4[7], u = e.mat4[8], h = e.mat4[9], c = e.mat4[10], f = e.mat4[11], d = e.mat4[12], p = e.mat4[13], m = e.mat4[14], y = e.mat4[15]) : R(e) && (t = e[0], r = e[1], i = e[2], n = e[3], a = e[4], o = e[5], s = e[6], l = e[7], u = e[8], h = e[9], c = e[10], f = e[11], d = e[12], p = e[13], m = e[14], y = e[15]);

        var v = t * o - r * a,
            g = t * s - i * a,
            b = t * l - n * a,
            _ = r * s - i * o,
            x = r * l - n * o,
            w = i * l - n * s,
            S = u * p - h * d,
            M = u * m - c * d,
            T = u * y - f * d,
            E = h * m - c * p,
            C = h * y - f * p,
            L = c * y - f * m,
            O = v * L - g * C + b * E + _ * T - x * M + w * S;

        return O ? (O = 1 / O, this.mat4[0] = (o * L - s * C + l * E) * O, this.mat4[1] = (i * C - r * L - n * E) * O, this.mat4[2] = (p * w - m * x + y * _) * O, this.mat4[3] = (c * x - h * w - f * _) * O, this.mat4[4] = (s * T - a * L - l * M) * O, this.mat4[5] = (t * L - i * T + n * M) * O, this.mat4[6] = (m * b - d * w - y * g) * O, this.mat4[7] = (u * w - c * b + f * g) * O, this.mat4[8] = (a * C - o * T + l * S) * O, this.mat4[9] = (r * T - t * C - n * S) * O, this.mat4[10] = (d * x - p * b + y * v) * O, this.mat4[11] = (h * b - u * x - f * v) * O, this.mat4[12] = (o * M - a * E - s * S) * O, this.mat4[13] = (t * E - r * M + i * S) * O, this.mat4[14] = (p * g - d * _ - m * v) * O, this.mat4[15] = (u * _ - h * g + c * v) * O, this) : null;
      }, P.default.Matrix.prototype.invert3x3 = function () {
        var e = this.mat3[0],
            t = this.mat3[1],
            r = this.mat3[2],
            i = this.mat3[3],
            n = this.mat3[4],
            a = this.mat3[5],
            o = this.mat3[6],
            s = this.mat3[7],
            l = this.mat3[8],
            u = l * n - a * s,
            h = -l * i + a * o,
            c = s * i - n * o,
            f = e * u + t * h + r * c;
        return f ? (f = 1 / f, this.mat3[0] = u * f, this.mat3[1] = (-l * t + r * s) * f, this.mat3[2] = (a * t - r * n) * f, this.mat3[3] = h * f, this.mat3[4] = (l * e - r * o) * f, this.mat3[5] = (-a * e + r * i) * f, this.mat3[6] = c * f, this.mat3[7] = (-s * e + t * o) * f, this.mat3[8] = (n * e - t * i) * f, this) : null;
      }, P.default.Matrix.prototype.transpose3x3 = function (e) {
        var t = e[1],
            r = e[2],
            i = e[5];
        return this.mat3[1] = e[3], this.mat3[2] = e[6], this.mat3[3] = t, this.mat3[5] = e[7], this.mat3[6] = r, this.mat3[7] = i, this;
      }, P.default.Matrix.prototype.inverseTranspose = function (e) {
        void 0 === this.mat3 ? console.error("sorry, this function only works with mat3") : (this.mat3[0] = e.mat4[0], this.mat3[1] = e.mat4[1], this.mat3[2] = e.mat4[2], this.mat3[3] = e.mat4[4], this.mat3[4] = e.mat4[5], this.mat3[5] = e.mat4[6], this.mat3[6] = e.mat4[8], this.mat3[7] = e.mat4[9], this.mat3[8] = e.mat4[10]);
        var t = this.invert3x3();
        if (t) t.transpose3x3(this.mat3);else for (var r = 0; r < 9; r++) this.mat3[r] = 0;
        return this;
      }, P.default.Matrix.prototype.determinant = function () {
        var e = this.mat4[0] * this.mat4[5] - this.mat4[1] * this.mat4[4],
            t = this.mat4[0] * this.mat4[6] - this.mat4[2] * this.mat4[4],
            r = this.mat4[0] * this.mat4[7] - this.mat4[3] * this.mat4[4],
            i = this.mat4[1] * this.mat4[6] - this.mat4[2] * this.mat4[5],
            n = this.mat4[1] * this.mat4[7] - this.mat4[3] * this.mat4[5],
            a = this.mat4[2] * this.mat4[7] - this.mat4[3] * this.mat4[6],
            o = this.mat4[8] * this.mat4[13] - this.mat4[9] * this.mat4[12],
            s = this.mat4[8] * this.mat4[14] - this.mat4[10] * this.mat4[12],
            l = this.mat4[8] * this.mat4[15] - this.mat4[11] * this.mat4[12],
            u = this.mat4[9] * this.mat4[14] - this.mat4[10] * this.mat4[13],
            h = this.mat4[9] * this.mat4[15] - this.mat4[11] * this.mat4[13];
        return e * (this.mat4[10] * this.mat4[15] - this.mat4[11] * this.mat4[14]) - t * h + r * u + i * l - n * s + a * o;
      }, P.default.Matrix.prototype.mult = function (e) {
        var t;
        if (e === this || e === this.mat4) t = this.copy().mat4;else if (e instanceof P.default.Matrix) t = e.mat4;else if (R(e)) t = e;else {
          if (16 !== arguments.length) return;
          t = arguments;
        }
        var r = this.mat4[0],
            i = this.mat4[1],
            n = this.mat4[2],
            a = this.mat4[3];
        return this.mat4[0] = r * t[0] + i * t[4] + n * t[8] + a * t[12], this.mat4[1] = r * t[1] + i * t[5] + n * t[9] + a * t[13], this.mat4[2] = r * t[2] + i * t[6] + n * t[10] + a * t[14], this.mat4[3] = r * t[3] + i * t[7] + n * t[11] + a * t[15], r = this.mat4[4], i = this.mat4[5], n = this.mat4[6], a = this.mat4[7], this.mat4[4] = r * t[0] + i * t[4] + n * t[8] + a * t[12], this.mat4[5] = r * t[1] + i * t[5] + n * t[9] + a * t[13], this.mat4[6] = r * t[2] + i * t[6] + n * t[10] + a * t[14], this.mat4[7] = r * t[3] + i * t[7] + n * t[11] + a * t[15], r = this.mat4[8], i = this.mat4[9], n = this.mat4[10], a = this.mat4[11], this.mat4[8] = r * t[0] + i * t[4] + n * t[8] + a * t[12], this.mat4[9] = r * t[1] + i * t[5] + n * t[9] + a * t[13], this.mat4[10] = r * t[2] + i * t[6] + n * t[10] + a * t[14], this.mat4[11] = r * t[3] + i * t[7] + n * t[11] + a * t[15], r = this.mat4[12], i = this.mat4[13], n = this.mat4[14], a = this.mat4[15], this.mat4[12] = r * t[0] + i * t[4] + n * t[8] + a * t[12], this.mat4[13] = r * t[1] + i * t[5] + n * t[9] + a * t[13], this.mat4[14] = r * t[2] + i * t[6] + n * t[10] + a * t[14], this.mat4[15] = r * t[3] + i * t[7] + n * t[11] + a * t[15], this;
      }, P.default.Matrix.prototype.apply = function (e) {
        var t;
        if (e === this || e === this.mat4) t = this.copy().mat4;else if (e instanceof P.default.Matrix) t = e.mat4;else if (R(e)) t = e;else {
          if (16 !== arguments.length) return;
          t = arguments;
        }
        var r = this.mat4,
            i = r[0],
            n = r[4],
            a = r[8],
            o = r[12];
        r[0] = t[0] * i + t[1] * n + t[2] * a + t[3] * o, r[4] = t[4] * i + t[5] * n + t[6] * a + t[7] * o, r[8] = t[8] * i + t[9] * n + t[10] * a + t[11] * o, r[12] = t[12] * i + t[13] * n + t[14] * a + t[15] * o;
        var s = r[1],
            l = r[5],
            u = r[9],
            h = r[13];
        r[1] = t[0] * s + t[1] * l + t[2] * u + t[3] * h, r[5] = t[4] * s + t[5] * l + t[6] * u + t[7] * h, r[9] = t[8] * s + t[9] * l + t[10] * u + t[11] * h, r[13] = t[12] * s + t[13] * l + t[14] * u + t[15] * h;
        var c = r[2],
            f = r[6],
            d = r[10],
            p = r[14];
        r[2] = t[0] * c + t[1] * f + t[2] * d + t[3] * p, r[6] = t[4] * c + t[5] * f + t[6] * d + t[7] * p, r[10] = t[8] * c + t[9] * f + t[10] * d + t[11] * p, r[14] = t[12] * c + t[13] * f + t[14] * d + t[15] * p;
        var m = r[3],
            y = r[7],
            v = r[11],
            g = r[15];
        return r[3] = t[0] * m + t[1] * y + t[2] * v + t[3] * g, r[7] = t[4] * m + t[5] * y + t[6] * v + t[7] * g, r[11] = t[8] * m + t[9] * y + t[10] * v + t[11] * g, r[15] = t[12] * m + t[13] * y + t[14] * v + t[15] * g, this;
      }, P.default.Matrix.prototype.scale = function (e, t, r) {
        return e instanceof P.default.Vector ? (t = e.y, r = e.z, e = e.x) : e instanceof Array && (t = e[1], r = e[2], e = e[0]), this.mat4[0] *= e, this.mat4[1] *= e, this.mat4[2] *= e, this.mat4[3] *= e, this.mat4[4] *= t, this.mat4[5] *= t, this.mat4[6] *= t, this.mat4[7] *= t, this.mat4[8] *= r, this.mat4[9] *= r, this.mat4[10] *= r, this.mat4[11] *= r, this;
      }, P.default.Matrix.prototype.rotate = function (e, t, r, i) {
        t instanceof P.default.Vector ? (r = t.y, i = t.z, t = t.x) : t instanceof Array && (r = t[1], i = t[2], t = t[0]);
        var n = Math.sqrt(t * t + r * r + i * i);
        t *= 1 / n, r *= 1 / n, i *= 1 / n;

        var a = this.mat4[0],
            o = this.mat4[1],
            s = this.mat4[2],
            l = this.mat4[3],
            u = this.mat4[4],
            h = this.mat4[5],
            c = this.mat4[6],
            f = this.mat4[7],
            d = this.mat4[8],
            p = this.mat4[9],
            m = this.mat4[10],
            y = this.mat4[11],
            v = Math.sin(e),
            g = Math.cos(e),
            b = 1 - g,
            _ = t * t * b + g,
            x = r * t * b + i * v,
            w = i * t * b - r * v,
            S = t * r * b - i * v,
            M = r * r * b + g,
            T = i * r * b + t * v,
            E = t * i * b + r * v,
            C = r * i * b - t * v,
            L = i * i * b + g;

        return this.mat4[0] = a * _ + u * x + d * w, this.mat4[1] = o * _ + h * x + p * w, this.mat4[2] = s * _ + c * x + m * w, this.mat4[3] = l * _ + f * x + y * w, this.mat4[4] = a * S + u * M + d * T, this.mat4[5] = o * S + h * M + p * T, this.mat4[6] = s * S + c * M + m * T, this.mat4[7] = l * S + f * M + y * T, this.mat4[8] = a * E + u * C + d * L, this.mat4[9] = o * E + h * C + p * L, this.mat4[10] = s * E + c * C + m * L, this.mat4[11] = l * E + f * C + y * L, this;
      }, P.default.Matrix.prototype.translate = function (e) {
        var t = e[0],
            r = e[1],
            i = e[2] || 0;
        this.mat4[12] += this.mat4[0] * t + this.mat4[4] * r + this.mat4[8] * i, this.mat4[13] += this.mat4[1] * t + this.mat4[5] * r + this.mat4[9] * i, this.mat4[14] += this.mat4[2] * t + this.mat4[6] * r + this.mat4[10] * i, this.mat4[15] += this.mat4[3] * t + this.mat4[7] * r + this.mat4[11] * i;
      }, P.default.Matrix.prototype.rotateX = function (e) {
        this.rotate(e, 1, 0, 0);
      }, P.default.Matrix.prototype.rotateY = function (e) {
        this.rotate(e, 0, 1, 0);
      }, P.default.Matrix.prototype.rotateZ = function (e) {
        this.rotate(e, 0, 0, 1);
      }, P.default.Matrix.prototype.perspective = function (e, t, r, i) {
        var n = 1 / Math.tan(e / 2),
            a = 1 / (r - i);
        return this.mat4[0] = n / t, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = n, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = (i + r) * a, this.mat4[11] = -1, this.mat4[12] = 0, this.mat4[13] = 0, this.mat4[14] = 2 * i * r * a, this.mat4[15] = 0, this;
      }, P.default.Matrix.prototype.ortho = function (e, t, r, i, n, a) {
        var o = 1 / (e - t),
            s = 1 / (r - i),
            l = 1 / (n - a);
        return this.mat4[0] = -2 * o, this.mat4[1] = 0, this.mat4[2] = 0, this.mat4[3] = 0, this.mat4[4] = 0, this.mat4[5] = -2 * s, this.mat4[6] = 0, this.mat4[7] = 0, this.mat4[8] = 0, this.mat4[9] = 0, this.mat4[10] = 2 * l, this.mat4[11] = 0, this.mat4[12] = (e + t) * o, this.mat4[13] = (i + r) * s, this.mat4[14] = (a + n) * l, this.mat4[15] = 1, this;
      };
      var a = P.default.Matrix;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    87: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.RenderBuffer = function (e, t, r, i, n, a) {
        this.size = e, this.src = t, this.dst = r, this.attr = i, this._renderer = n, this.map = a;
      }, n.default.RenderBuffer.prototype._prepareBuffer = function (e, t) {
        var r,
            i = t.attributes,
            n = this._renderer.GL;
        r = e.model ? e.model : e;
        var a = i[this.attr];

        if (a) {
          var o = e[this.dst],
              s = r[this.src];

          if (0 < s.length) {
            var l = !o;

            if (l && (e[this.dst] = o = n.createBuffer()), n.bindBuffer(n.ARRAY_BUFFER, o), l || !1 !== r.dirtyFlags[this.src]) {
              var u = this.map,
                  h = u ? u(s) : s;
              this._renderer._bindBuffer(o, n.ARRAY_BUFFER, h), r.dirtyFlags[this.src] = !1;
            }

            t.enableAttrib(a, this.size);
          }
        }
      };
      var a = n.default.RenderBuffer;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    88: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          s = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          l = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = u();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return u = function () {
          return e;
        }, e;
      }

      e("./p5.RenderBuffer"), s.default.RendererGL.prototype.beginShape = function (e) {
        return this.immediateMode.shapeMode = void 0 !== e ? e : l.TRIANGLE_FAN, this.immediateMode.geometry.reset(), this;
      }, s.default.RendererGL.prototype.vertex = function (e, t) {
        var r, i, n;
        r = i = n = 0, 3 === arguments.length ? r = arguments[2] : 4 === arguments.length ? (i = arguments[2], n = arguments[3]) : 5 === arguments.length && (r = arguments[2], i = arguments[3], n = arguments[4]);
        var a = new s.default.Vector(e, t, r);
        this.immediateMode.geometry.vertices.push(a);
        var o = this.curFillColor || [.5, .5, .5, 1];
        return this.immediateMode.geometry.vertexColors.push(o[0], o[1], o[2], o[3]), this.textureMode === l.IMAGE && (null !== this._tex ? 0 < this._tex.width && 0 < this._tex.height && (i /= this._tex.width, n /= this._tex.height) : null === this._tex && 4 <= arguments.length && console.warn("You must first call texture() before using vertex() with image based u and v coordinates")), this.immediateMode.geometry.uvs.push(i, n), this.immediateMode._bezierVertex[0] = e, this.immediateMode._bezierVertex[1] = t, this.immediateMode._bezierVertex[2] = r, this.immediateMode._quadraticVertex[0] = e, this.immediateMode._quadraticVertex[1] = t, this.immediateMode._quadraticVertex[2] = r, this;
      }, s.default.RendererGL.prototype.endShape = function (e, t, r, i, n, a) {
        return this.immediateMode.shapeMode === l.POINTS ? this._drawPoints(this.immediateMode.geometry.vertices, this.immediateMode.buffers.point) : (this._processVertices.apply(this, arguments), this._doFill && 1 < this.immediateMode.geometry.vertices.length && this._drawImmediateFill(), this._doStroke && 1 < this.immediateMode.geometry.lineVertices.length && this._drawImmediateStroke(), this.isBezier = !1, this.isQuadratic = !1, this.isCurve = !1, this.immediateMode._bezierVertex.length = 0, this.immediateMode._quadraticVertex.length = 0, this.immediateMode._curveVertex.length = 0), this;
      }, s.default.RendererGL.prototype._processVertices = function (e) {
        if (0 !== this.immediateMode.geometry.vertices.length) {
          var t = this._doStroke && this.drawMode !== l.TEXTURE,
              r = e === l.CLOSE;
          t && (this.immediateMode.geometry.edges = this._calculateEdges(this.immediateMode.shapeMode, this.immediateMode.geometry.vertices, r), this.immediateMode.geometry._edgesToVertices());
          var i = this.immediateMode.shapeMode === l.TESS;
          (this.isBezier || this.isQuadratic || this.isCurve || i) && this.immediateMode.shapeMode !== l.LINES && this._tesselateShape();
        }
      }, s.default.RendererGL.prototype._calculateEdges = function (e, t, r) {
        var i = [],
            n = 0;

        switch (e) {
          case l.TRIANGLE_STRIP:
            for (n = 0; n < t.length - 2; n++) i.push([n, n + 1]), i.push([n, n + 2]);

            i.push([n, n + 1]);
            break;

          case l.TRIANGLES:
            for (n = 0; n < t.length - 2; n += 3) i.push([n, n + 1]), i.push([n + 1, n + 2]), i.push([n + 2, n]);

            break;

          case l.LINES:
            for (n = 0; n < t.length - 1; n += 2) i.push([n, n + 1]);

            break;

          default:
            for (n = 0; n < t.length - 1; n++) i.push([n, n + 1]);

        }

        return r && i.push([t.length - 1, 0]), i;
      }, s.default.RendererGL.prototype._tesselateShape = function () {
        this.immediateMode.shapeMode = l.TRIANGLES;

        var e = [new Float32Array(this._vToNArray(this.immediateMode.geometry.vertices))],
            t = this._triangulate(e);

        this.immediateMode.geometry.vertices = [];

        for (var r = 0, i = t.length; r < i; r += 3) this.vertex(t[r], t[r + 1], t[r + 2]);
      }, s.default.RendererGL.prototype._drawImmediateFill = function () {
        var e = this.GL,
            t = this._getImmediateFillShader();

        this._calculateNormals(this.immediateMode.geometry), this._setFillUniforms(t);
        var r = !0,
            i = !1,
            n = void 0;

        try {
          for (var a, o = this.immediateMode.buffers.fill[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            a.value._prepareBuffer(this.immediateMode.geometry, t);
          }
        } catch (e) {
          i = !0, n = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (i) throw n;
          }
        }

        this.immediateMode.shapeMode !== l.LINE_STRIP && this.immediateMode.shapeMode !== l.LINES || (this.immediateMode.shapeMode = l.TRIANGLE_FAN), this._applyColorBlend(this.curFillColor), e.drawArrays(this.immediateMode.shapeMode, 0, this.immediateMode.geometry.vertices.length), t.unbindShader();
      }, s.default.RendererGL.prototype._drawImmediateStroke = function () {
        var e = this.GL,
            t = this._getImmediateStrokeShader();

        this._setStrokeUniforms(t);

        var r = !0,
            i = !1,
            n = void 0;

        try {
          for (var a, o = this.immediateMode.buffers.stroke[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            a.value._prepareBuffer(this.immediateMode.geometry, t);
          }
        } catch (e) {
          i = !0, n = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (i) throw n;
          }
        }

        this._applyColorBlend(this.curStrokeColor), e.drawArrays(e.TRIANGLES, 0, this.immediateMode.geometry.lineVertices.length), t.unbindShader();
      }, s.default.RendererGL.prototype._calculateNormals = function (e) {
        e.vertices.forEach(function () {
          e.vertexNormals.push(new s.default.Vector(0, 0, 1));
        });
      };
      var n = s.default.RendererGL;
      r.default = n;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./p5.RenderBuffer": 87
    }],
    89: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          o = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      e("./p5.RendererGL"), e("./p5.RenderBuffer");
      var n = 0;
      o.default.RendererGL.prototype._initBufferDefaults = function (e) {
        if (this._freeBuffers(e), 1e3 < ++n) {
          var t = Object.keys(this.retainedMode.geometry)[0];
          delete this.retainedMode.geometry[t], n--;
        }

        return this.retainedMode.geometry[e] = {};
      }, o.default.RendererGL.prototype._freeBuffers = function (e) {
        var s = this.retainedMode.geometry[e];

        if (s) {
          delete this.retainedMode.geometry[e], n--;
          var l = this.GL;
          s.indexBuffer && l.deleteBuffer(s.indexBuffer), t(this.retainedMode.buffers.stroke), t(this.retainedMode.buffers.fill);
        }

        function t(e) {
          var t = !0,
              r = !1,
              i = void 0;

          try {
            for (var n, a = e[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
              var o = n.value;
              s[o.dst] && (l.deleteBuffer(s[o.dst]), s[o.dst] = null);
            }
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              t || null == a.return || a.return();
            } finally {
              if (r) throw i;
            }
          }
        }
      }, o.default.RendererGL.prototype.createBuffers = function (e, t) {
        var r = this.GL,
            i = this._initBufferDefaults(e);

        i.model = t;
        var n = i.indexBuffer;

        if (t.faces.length) {
          n = n || (i.indexBuffer = r.createBuffer());

          var a = o.default.RendererGL.prototype._flatten(t.faces);

          this._bindBuffer(n, r.ELEMENT_ARRAY_BUFFER, a, Uint16Array), i.vertexCount = 3 * t.faces.length;
        } else n && (r.deleteBuffer(n), i.indexBuffer = null), i.vertexCount = t.vertices ? t.vertices.length : 0;

        return i.lineVertexCount = t.lineVertices ? t.lineVertices.length : 0, i;
      }, o.default.RendererGL.prototype.drawBuffers = function (e) {
        var t = this.GL,
            r = this.retainedMode.geometry[e];

        if (this._doStroke && 0 < r.lineVertexCount) {
          var i = this._getRetainedStrokeShader();

          this._setStrokeUniforms(i);

          var n = !0,
              a = !1,
              o = void 0;

          try {
            for (var s, l = this.retainedMode.buffers.stroke[Symbol.iterator](); !(n = (s = l.next()).done); n = !0) {
              s.value._prepareBuffer(r, i);
            }
          } catch (e) {
            a = !0, o = e;
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (a) throw o;
            }
          }

          this._applyColorBlend(this.curStrokeColor), this._drawArrays(t.TRIANGLES, e), i.unbindShader();
        }

        if (this._doFill) {
          var u = this._getRetainedFillShader();

          this._setFillUniforms(u);

          var h = !0,
              c = !1,
              f = void 0;

          try {
            for (var d, p = this.retainedMode.buffers.fill[Symbol.iterator](); !(h = (d = p.next()).done); h = !0) {
              d.value._prepareBuffer(r, u);
            }
          } catch (e) {
            c = !0, f = e;
          } finally {
            try {
              h || null == p.return || p.return();
            } finally {
              if (c) throw f;
            }
          }

          r.indexBuffer && this._bindBuffer(r.indexBuffer, t.ELEMENT_ARRAY_BUFFER), this._applyColorBlend(this.curFillColor), this._drawElements(t.TRIANGLES, e), u.unbindShader();
        }

        return this;
      }, o.default.RendererGL.prototype.drawBuffersScaled = function (e, t, r, i) {
        var n = this.uMVMatrix.copy();

        try {
          this.uMVMatrix.scale(t, r, i), this.drawBuffers(e);
        } finally {
          this.uMVMatrix = n;
        }
      }, o.default.RendererGL.prototype._drawArrays = function (e, t) {
        return this.GL.drawArrays(e, 0, this.retainedMode.geometry[t].lineVertexCount), this;
      }, o.default.RendererGL.prototype._drawElements = function (e, t) {
        var r = this.retainedMode.geometry[t],
            i = this.GL;
        r.indexBuffer ? i.drawElements(i.TRIANGLES, r.vertexCount, i.UNSIGNED_SHORT, 0) : i.drawArrays(e || i.TRIANGLES, 0, r.vertexCount);
      }, o.default.RendererGL.prototype._drawPoints = function (e, t) {
        var r = this.GL,
            i = this._getImmediatePointShader();

        this._setPointUniforms(i), this._bindBuffer(t, r.ARRAY_BUFFER, this._vToNArray(e), Float32Array, r.STATIC_DRAW), i.enableAttrib(i.attributes.aPosition, 3), r.drawArrays(r.Points, 0, e.length), i.unbindShader();
      };
      var a = o.default.RendererGL;
      r.default = a;
    }, {
      "../core/main": 36,
      "./p5.RenderBuffer": 87,
      "./p5.RendererGL": 90
    }],
    90: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var u = n(e("../core/main")),
          a = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants")),
          i = n(e("libtess"));

      e("./p5.Shader"), e("./p5.Camera"), e("../core/p5.Renderer"), e("./p5.Matrix");
      e("path");

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      function n(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function l(e) {
        return function (e) {
          if (Array.isArray(e)) {
            for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];

            return r;
          }
        }(e) || function (e) {
          if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
      }

      var h = "precision highp float;\nprecision highp int;\n\nuniform mat4 uViewMatrix;\n\nuniform bool uUseLighting;\n\nuniform int uAmbientLightCount;\nuniform vec3 uAmbientColor[5];\n\nuniform int uDirectionalLightCount;\nuniform vec3 uLightingDirection[5];\nuniform vec3 uDirectionalDiffuseColors[5];\nuniform vec3 uDirectionalSpecularColors[5];\n\nuniform int uPointLightCount;\nuniform vec3 uPointLightLocation[5];\nuniform vec3 uPointLightDiffuseColors[5];\t\nuniform vec3 uPointLightSpecularColors[5];\n\nuniform int uSpotLightCount;\nuniform float uSpotLightAngle[5];\nuniform float uSpotLightConc[5];\nuniform vec3 uSpotLightDiffuseColors[5];\nuniform vec3 uSpotLightSpecularColors[5];\nuniform vec3 uSpotLightLocation[5];\nuniform vec3 uSpotLightDirection[5];\n\nuniform bool uSpecular;\nuniform float uShininess;\n\nuniform float uConstantAttenuation;\nuniform float uLinearAttenuation;\nuniform float uQuadraticAttenuation;\n\nconst float specularFactor = 2.0;\nconst float diffuseFactor = 0.73;\n\nstruct LightResult {\n  float specular;\n  float diffuse;\n};\n\nfloat _phongSpecular(\n  vec3 lightDirection,\n  vec3 viewDirection,\n  vec3 surfaceNormal,\n  float shininess) {\n\n  vec3 R = reflect(lightDirection, surfaceNormal);\n  return pow(max(0.0, dot(R, viewDirection)), shininess);\n}\n\nfloat _lambertDiffuse(vec3 lightDirection, vec3 surfaceNormal) {\n  return max(0.0, dot(-lightDirection, surfaceNormal));\n}\n\nLightResult _light(vec3 viewDirection, vec3 normal, vec3 lightVector) {\n\n  vec3 lightDir = normalize(lightVector);\n\n  //compute our diffuse & specular terms\n  LightResult lr;\n  if (uSpecular)\n    lr.specular = _phongSpecular(lightDir, viewDirection, normal, uShininess);\n  lr.diffuse = _lambertDiffuse(lightDir, normal);\n  return lr;\n}\n\nvoid totalLight(\n  vec3 modelPosition,\n  vec3 normal,\n  out vec3 totalDiffuse,\n  out vec3 totalSpecular\n) {\n\n  totalSpecular = vec3(0.0);\n\n  if (!uUseLighting) {\n    totalDiffuse = vec3(1.0);\n    return;\n  }\n\n  totalDiffuse = vec3(0.0);\n\n  vec3 viewDirection = normalize(-modelPosition);\n\n  for (int j = 0; j < 5; j++) {\n    if (j < uDirectionalLightCount) {\n      vec3 lightVector = (uViewMatrix * vec4(uLightingDirection[j], 0.0)).xyz;\n      vec3 lightColor = uDirectionalDiffuseColors[j];\n      vec3 specularColor = uDirectionalSpecularColors[j];\n      LightResult result = _light(viewDirection, normal, lightVector);\n      totalDiffuse += result.diffuse * lightColor;\n      totalSpecular += result.specular * lightColor * specularColor;\n    }\n\n    if (j < uPointLightCount) {\n      vec3 lightPosition = (uViewMatrix * vec4(uPointLightLocation[j], 1.0)).xyz;\n      vec3 lightVector = modelPosition - lightPosition;\n    \n      //calculate attenuation\n      float lightDistance = length(lightVector);\n      float lightFalloff = 1.0 / (uConstantAttenuation + lightDistance * uLinearAttenuation + (lightDistance * lightDistance) * uQuadraticAttenuation);\n      vec3 lightColor = lightFalloff * uPointLightDiffuseColors[j];\n      vec3 specularColor = lightFalloff * uPointLightSpecularColors[j];\n\n      LightResult result = _light(viewDirection, normal, lightVector);\n      totalDiffuse += result.diffuse * lightColor;\n      totalSpecular += result.specular * lightColor * specularColor;\n    }\n\n    if(j < uSpotLightCount) {\n      vec3 lightPosition = (uViewMatrix * vec4(uSpotLightLocation[j], 1.0)).xyz;\n      vec3 lightVector = modelPosition - lightPosition;\n    \n      float lightDistance = length(lightVector);\n      float lightFalloff = 1.0 / (uConstantAttenuation + lightDistance * uLinearAttenuation + (lightDistance * lightDistance) * uQuadraticAttenuation);\n\n      vec3 lightDirection = (uViewMatrix * vec4(uSpotLightDirection[j], 0.0)).xyz;\n      float spotDot = dot(normalize(lightVector), normalize(lightDirection));\n      float spotFalloff;\n      if(spotDot < uSpotLightAngle[j]) {\n        spotFalloff = 0.0;\n      }\n      else {\n        spotFalloff = pow(spotDot, uSpotLightConc[j]);\n      }\n      lightFalloff *= spotFalloff;\n\n      vec3 lightColor = uSpotLightDiffuseColors[j];\n      vec3 specularColor = uSpotLightSpecularColors[j];\n     \n      LightResult result = _light(viewDirection, normal, lightVector);\n      \n      totalDiffuse += result.diffuse * lightColor * lightFalloff;\n      totalSpecular += result.specular * lightColor * specularColor * lightFalloff;\n    }\n  }\n\n  totalDiffuse *= diffuseFactor;\n  totalSpecular *= specularFactor;\n}\n",
          c = {
        immediateVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uResolution;\nuniform float uPointSize;\n\nvarying vec4 vColor;\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n  gl_PointSize = uPointSize;\n}\n",
        vertexColorVert: "attribute vec3 aPosition;\nattribute vec4 aVertexColor;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vColor = aVertexColor;\n}\n",
        vertexColorFrag: "precision mediump float;\nvarying vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}",
        normalVert: "attribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying vec3 vVertexNormal;\nvarying highp vec2 vVertTexCoord;\n\nvoid main(void) {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vVertexNormal = normalize(vec3( uNormalMatrix * aNormal ));\n  vVertTexCoord = aTexCoord;\n}\n",
        normalFrag: "precision mediump float;\nvarying vec3 vVertexNormal;\nvoid main(void) {\n  gl_FragColor = vec4(vVertexNormal, 1.0);\n}",
        basicFrag: "precision mediump float;\nuniform vec4 uMaterialColor;\nvoid main(void) {\n  gl_FragColor = uMaterialColor;\n}",
        lightVert: h + "// include lighting.glgl\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nvarying highp vec2 vVertTexCoord;\nvarying vec3 vDiffuseColor;\nvarying vec3 vSpecularColor;\n\nvoid main(void) {\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n  gl_Position = uProjectionMatrix * viewModelPosition;\n\n  vec3 vertexNormal = normalize(uNormalMatrix * aNormal);\n  vVertTexCoord = aTexCoord;\n\n  totalLight(viewModelPosition.xyz, vertexNormal, vDiffuseColor, vSpecularColor);\n\n  for (int i = 0; i < 8; i++) {\n    if (i < uAmbientLightCount) {\n      vDiffuseColor += uAmbientColor[i];\n    }\n  }\n}\n",
        lightTextureFrag: "precision highp float;\n\nuniform vec4 uMaterialColor;\nuniform vec4 uTint;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uEmissive;\n\nvarying highp vec2 vVertTexCoord;\nvarying vec3 vDiffuseColor;\nvarying vec3 vSpecularColor;\n\nvoid main(void) {\n  if(uEmissive && !isTexture) {\n    gl_FragColor = uMaterialColor;\n  }\n  else {\n    gl_FragColor = isTexture ? texture2D(uSampler, vVertTexCoord) * (uTint / vec4(255, 255, 255, 255)) : uMaterialColor;\n    gl_FragColor.rgb = gl_FragColor.rgb * vDiffuseColor + vSpecularColor;\n  }\n}",
        phongVert: "precision highp float;\nprecision highp int;\n\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nattribute vec2 aTexCoord;\n\nuniform vec3 uAmbientColor[5];\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform int uAmbientLightCount;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void) {\n\n  vec4 viewModelPosition = uModelViewMatrix * vec4(aPosition, 1.0);\n\n  // Pass varyings to fragment shader\n  vViewPosition = viewModelPosition.xyz;\n  gl_Position = uProjectionMatrix * viewModelPosition;  \n\n  vNormal = uNormalMatrix * aNormal;\n  vTexCoord = aTexCoord;\n\n  // TODO: this should be a uniform\n  vAmbientColor = vec3(0.0);\n  for (int i = 0; i < 5; i++) {\n    if (i < uAmbientLightCount) {\n      vAmbientColor += uAmbientColor[i];\n    }\n  }\n}\n",
        phongFrag: h + "// include lighting.glsl\nprecision highp float;\nprecision highp int;\n\nuniform vec4 uMaterialColor;\nuniform vec4 uTint;\nuniform sampler2D uSampler;\nuniform bool isTexture;\nuniform bool uEmissive;\n\nvarying vec3 vNormal;\nvarying vec2 vTexCoord;\nvarying vec3 vViewPosition;\nvarying vec3 vAmbientColor;\n\nvoid main(void) {\n\n  vec3 diffuse;\n  vec3 specular;\n  totalLight(vViewPosition, normalize(vNormal), diffuse, specular);\n\n  if(uEmissive && !isTexture) {\n    gl_FragColor = uMaterialColor;\n  }\n  else {\n    gl_FragColor = isTexture ? texture2D(uSampler, vTexCoord) * (uTint / vec4(255, 255, 255, 255)) : uMaterialColor;\n    gl_FragColor.rgb = gl_FragColor.rgb * (diffuse + vAmbientColor) + specular;\n  }\n}",
        fontVert: "precision mediump float;\n\nattribute vec3 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform vec4 uGlyphRect;\nuniform float uGlyphOffset;\n\nvarying vec2 vTexCoord;\nvarying float w;\n\nvoid main() {\n  vec4 positionVec4 = vec4(aPosition, 1.0);\n\n  // scale by the size of the glyph's rectangle\n  positionVec4.xy *= uGlyphRect.zw - uGlyphRect.xy;\n\n  // move to the corner of the glyph\n  positionVec4.xy += uGlyphRect.xy;\n\n  // move to the letter's line offset\n  positionVec4.x += uGlyphOffset;\n  \n  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n  vTexCoord = aTexCoord;\n  w = gl_Position.w;\n}\n",
        fontFrag: "#extension GL_OES_standard_derivatives : enable\nprecision mediump float;\n\n#if 0\n  // simulate integer math using floats\n\t#define int float\n\t#define ivec2 vec2\n\t#define INT(x) float(x)\n\n\tint ifloor(float v) { return floor(v); }\n\tivec2 ifloor(vec2 v) { return floor(v); }\n\n#else\n  // use native integer math\n\tprecision highp int;\n\t#define INT(x) x\n\n\tint ifloor(float v) { return int(v); }\n\tint ifloor(int v) { return v; }\n\tivec2 ifloor(vec2 v) { return ivec2(v); }\n\n#endif\n\nuniform sampler2D uSamplerStrokes;\nuniform sampler2D uSamplerRowStrokes;\nuniform sampler2D uSamplerRows;\nuniform sampler2D uSamplerColStrokes;\nuniform sampler2D uSamplerCols;\n\nuniform ivec2 uStrokeImageSize;\nuniform ivec2 uCellsImageSize;\nuniform ivec2 uGridImageSize;\n\nuniform ivec2 uGridOffset;\nuniform ivec2 uGridSize;\nuniform vec4 uMaterialColor;\n\nvarying vec2 vTexCoord;\n\n// some helper functions\nint round(float v) { return ifloor(v + 0.5); }\nivec2 round(vec2 v) { return ifloor(v + 0.5); }\nfloat saturate(float v) { return clamp(v, 0.0, 1.0); }\nvec2 saturate(vec2 v) { return clamp(v, 0.0, 1.0); }\n\nint mul(float v1, int v2) {\n  return ifloor(v1 * float(v2));\n}\n\nivec2 mul(vec2 v1, ivec2 v2) {\n  return ifloor(v1 * vec2(v2) + 0.5);\n}\n\n// unpack a 16-bit integer from a float vec2\nint getInt16(vec2 v) {\n  ivec2 iv = round(v * 255.0);\n  return iv.x * INT(128) + iv.y;\n}\n\nvec2 pixelScale;\nvec2 coverage = vec2(0.0);\nvec2 weight = vec2(0.5);\nconst float minDistance = 1.0/8192.0;\nconst float hardness = 1.05; // amount of antialias\n\n// the maximum number of curves in a glyph\nconst int N = INT(250);\n\n// retrieves an indexed pixel from a sampler\nvec4 getTexel(sampler2D sampler, int pos, ivec2 size) {\n  int width = size.x;\n  int y = ifloor(pos / width);\n  int x = pos - y * width;  // pos % width\n\n  return texture2D(sampler, (vec2(x, y) + 0.5) / vec2(size));\n}\n\nvoid calulateCrossings(vec2 p0, vec2 p1, vec2 p2, out vec2 C1, out vec2 C2) {\n\n  // get the coefficients of the quadratic in t\n  vec2 a = p0 - p1 * 2.0 + p2;\n  vec2 b = p0 - p1;\n  vec2 c = p0 - vTexCoord;\n\n  // found out which values of 't' it crosses the axes\n  vec2 surd = sqrt(max(vec2(0.0), b * b - a * c));\n  vec2 t1 = ((b - surd) / a).yx;\n  vec2 t2 = ((b + surd) / a).yx;\n\n  // approximate straight lines to avoid rounding errors\n  if (abs(a.y) < 0.001)\n    t1.x = t2.x = c.y / (2.0 * b.y);\n\n  if (abs(a.x) < 0.001)\n    t1.y = t2.y = c.x / (2.0 * b.x);\n\n  // plug into quadratic formula to find the corrdinates of the crossings\n  C1 = ((a * t1 - b * 2.0) * t1 + c) * pixelScale;\n  C2 = ((a * t2 - b * 2.0) * t2 + c) * pixelScale;\n}\n\nvoid coverageX(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  // determine on which side of the x-axis the points lie\n  bool y0 = p0.y > vTexCoord.y;\n  bool y1 = p1.y > vTexCoord.y;\n  bool y2 = p2.y > vTexCoord.y;\n\n  // could web be under the curve (after t1)?\n  if (y1 ? !y2 : y0) {\n    // add the coverage for t1\n    coverage.x += saturate(C1.x + 0.5);\n    // calculate the anti-aliasing for t1\n    weight.x = min(weight.x, abs(C1.x));\n  }\n\n  // are we outside the curve (after t2)?\n  if (y1 ? !y0 : y2) {\n    // subtract the coverage for t2\n    coverage.x -= saturate(C2.x + 0.5);\n    // calculate the anti-aliasing for t2\n    weight.x = min(weight.x, abs(C2.x));\n  }\n}\n\n// this is essentially the same as coverageX, but with the axes swapped\nvoid coverageY(vec2 p0, vec2 p1, vec2 p2) {\n\n  vec2 C1, C2;\n  calulateCrossings(p0, p1, p2, C1, C2);\n\n  bool x0 = p0.x > vTexCoord.x;\n  bool x1 = p1.x > vTexCoord.x;\n  bool x2 = p2.x > vTexCoord.x;\n\n  if (x1 ? !x2 : x0) {\n    coverage.y -= saturate(C1.y + 0.5);\n    weight.y = min(weight.y, abs(C1.y));\n  }\n\n  if (x1 ? !x0 : x2) {\n    coverage.y += saturate(C2.y + 0.5);\n    weight.y = min(weight.y, abs(C2.y));\n  }\n}\n\nvoid main() {\n\n  // calculate the pixel scale based on screen-coordinates\n  pixelScale = hardness / fwidth(vTexCoord);\n\n  // which grid cell is this pixel in?\n  ivec2 gridCoord = ifloor(vTexCoord * vec2(uGridSize));\n\n  // intersect curves in this row\n  {\n    // the index into the row info bitmap\n    int rowIndex = gridCoord.y + uGridOffset.y;\n    // fetch the info texel\n    vec4 rowInfo = getTexel(uSamplerRows, rowIndex, uGridImageSize);\n    // unpack the rowInfo\n    int rowStrokeIndex = getInt16(rowInfo.xy);\n    int rowStrokeCount = getInt16(rowInfo.zw);\n\n    for (int iRowStroke = INT(0); iRowStroke < N; iRowStroke++) {\n      if (iRowStroke >= rowStrokeCount)\n        break;\n\n      // each stroke is made up of 3 points: the start and control point\n      // and the start of the next curve.\n      // fetch the indices of this pair of strokes:\n      vec4 strokeIndices = getTexel(uSamplerRowStrokes, rowStrokeIndex++, uCellsImageSize);\n\n      // unpack the stroke index\n      int strokePos = getInt16(strokeIndices.xy);\n\n      // fetch the two strokes\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n\n      // calculate the coverage\n      coverageX(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  // intersect curves in this column\n  {\n    int colIndex = gridCoord.x + uGridOffset.x;\n    vec4 colInfo = getTexel(uSamplerCols, colIndex, uGridImageSize);\n    int colStrokeIndex = getInt16(colInfo.xy);\n    int colStrokeCount = getInt16(colInfo.zw);\n    \n    for (int iColStroke = INT(0); iColStroke < N; iColStroke++) {\n      if (iColStroke >= colStrokeCount)\n        break;\n\n      vec4 strokeIndices = getTexel(uSamplerColStrokes, colStrokeIndex++, uCellsImageSize);\n\n      int strokePos = getInt16(strokeIndices.xy);\n      vec4 stroke0 = getTexel(uSamplerStrokes, strokePos + INT(0), uStrokeImageSize);\n      vec4 stroke1 = getTexel(uSamplerStrokes, strokePos + INT(1), uStrokeImageSize);\n      coverageY(stroke0.xy, stroke0.zw, stroke1.xy);\n    }\n  }\n\n  weight = saturate(1.0 - weight * 2.0);\n  float distance = max(weight.x + weight.y, minDistance); // manhattan approx.\n  float antialias = abs(dot(coverage, weight) / distance);\n  float cover = min(abs(coverage.x), abs(coverage.y));\n  gl_FragColor = uMaterialColor;\n  gl_FragColor.a *= saturate(max(antialias, cover));\n}",
        lineVert: "/*\n  Part of the Processing project - http://processing.org\n  Copyright (c) 2012-15 The Processing Foundation\n  Copyright (c) 2004-12 Ben Fry and Casey Reas\n  Copyright (c) 2001-04 Massachusetts Institute of Technology\n  This library is free software; you can redistribute it and/or\n  modify it under the terms of the GNU Lesser General Public\n  License as published by the Free Software Foundation, version 2.1.\n  This library is distributed in the hope that it will be useful,\n  but WITHOUT ANY WARRANTY; without even the implied warranty of\n  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n  Lesser General Public License for more details.\n  You should have received a copy of the GNU Lesser General\n  Public License along with this library; if not, write to the\n  Free Software Foundation, Inc., 59 Temple Place, Suite 330,\n  Boston, MA  02111-1307  USA\n*/\n\n#define PROCESSING_LINE_SHADER\n\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform float uStrokeWeight;\n\nuniform vec4 uViewport;\nuniform int uPerspective;\n\nattribute vec4 aPosition;\nattribute vec4 aDirection;\n  \nvoid main() {\n  // using a scale <1 moves the lines towards the camera\n  // in order to prevent popping effects due to half of\n  // the line disappearing behind the geometry faces.\n  vec3 scale = vec3(0.9995);\n\n  vec4 posp = uModelViewMatrix * aPosition;\n  vec4 posq = uModelViewMatrix * (aPosition + vec4(aDirection.xyz, 0));\n\n  // Moving vertices slightly toward the camera\n  // to avoid depth-fighting with the fill triangles.\n  // Discussed here:\n  // http://www.opengl.org/discussion_boards/ubbthreads.php?ubb=showflat&Number=252848  \n  posp.xyz = posp.xyz * scale;\n  posq.xyz = posq.xyz * scale;\n\n  vec4 p = uProjectionMatrix * posp;\n  vec4 q = uProjectionMatrix * posq;\n\n  // formula to convert from clip space (range -1..1) to screen space (range 0..[width or height])\n  // screen_p = (p.xy/p.w + <1,1>) * 0.5 * uViewport.zw\n\n  // prevent division by W by transforming the tangent formula (div by 0 causes\n  // the line to disappear, see https://github.com/processing/processing/issues/5183)\n  // t = screen_q - screen_p\n  //\n  // tangent is normalized and we don't care which aDirection it points to (+-)\n  // t = +- normalize( screen_q - screen_p )\n  // t = +- normalize( (q.xy/q.w+<1,1>)*0.5*uViewport.zw - (p.xy/p.w+<1,1>)*0.5*uViewport.zw )\n  //\n  // extract common factor, <1,1> - <1,1> cancels out\n  // t = +- normalize( (q.xy/q.w - p.xy/p.w) * 0.5 * uViewport.zw )\n  //\n  // convert to common divisor\n  // t = +- normalize( ((q.xy*p.w - p.xy*q.w) / (p.w*q.w)) * 0.5 * uViewport.zw )\n  //\n  // remove the common scalar divisor/factor, not needed due to normalize and +-\n  // (keep uViewport - can't remove because it has different components for x and y\n  //  and corrects for aspect ratio, see https://github.com/processing/processing/issues/5181)\n  // t = +- normalize( (q.xy*p.w - p.xy*q.w) * uViewport.zw )\n\n  vec2 tangent = normalize((q.xy*p.w - p.xy*q.w) * uViewport.zw);\n\n  // flip tangent to normal (it's already normalized)\n  vec2 normal = vec2(-tangent.y, tangent.x);\n\n  float thickness = aDirection.w * uStrokeWeight;\n  vec2 offset = normal * thickness / 2.0;\n\n  vec2 curPerspScale;\n\n  if(uPerspective == 1) {\n    // Perspective ---\n    // convert from world to clip by multiplying with projection scaling factor\n    // to get the right thickness (see https://github.com/processing/processing/issues/5182)\n    // invert Y, projections in Processing invert Y\n    curPerspScale = (uProjectionMatrix * vec4(1, -1, 0, 0)).xy;\n  } else {\n    // No Perspective ---\n    // multiply by W (to cancel out division by W later in the pipeline) and\n    // convert from screen to clip (derived from clip to screen above)\n    curPerspScale = p.w / (0.5 * uViewport.zw);\n  }\n\n  gl_Position.xy = p.xy + offset.xy * curPerspScale;\n  gl_Position.zw = p.zw;\n}\n",
        lineFrag: "precision mediump float;\nprecision mediump int;\n\nuniform vec4 uMaterialColor;\n\nvoid main() {\n  gl_FragColor = uMaterialColor;\n}",
        pointVert: "attribute vec3 aPosition;\nuniform float uPointSize;\nvarying float vStrokeWeight;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nvoid main() {\n\tvec4 positionVec4 =  vec4(aPosition, 1.0);\n\tgl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;\n\tgl_PointSize = uPointSize;\n\tvStrokeWeight = uPointSize;\n}",
        pointFrag: "precision mediump float;\nprecision mediump int;\nuniform vec4 uMaterialColor;\nvarying float vStrokeWeight;\n\nvoid main(){\n\tfloat mask = 0.0;\n\n\t// make a circular mask using the gl_PointCoord (goes from 0 - 1 on a point)\n    // might be able to get a nicer edge on big strokeweights with smoothstep but slightly less performant\n\n\tmask = step(0.98, length(gl_PointCoord * 2.0 - 1.0));\n\n\t// if strokeWeight is 1 or less lets just draw a square\n\t// this prevents weird artifacting from carving circles when our points are really small\n\t// if strokeWeight is larger than 1, we just use it as is\n\n\tmask = mix(0.0, mask, clamp(floor(vStrokeWeight - 0.5),0.0,1.0));\n\n\t// throw away the borders of the mask\n    // otherwise we get weird alpha blending issues\n\n\tif(mask > 0.98){\n      discard;\n  \t}\n\n  \tgl_FragColor = vec4(uMaterialColor.rgb * (1.0 - mask), uMaterialColor.a) ;\n}"
      };
      u.default.RendererGL = function (e, t, r, i) {
        return u.default.Renderer.call(this, e, t, r), this._setAttributeDefaults(t), this._initContext(), this.isP3D = !0, this.GL = this.drawingContext, this._pInst._setProperty("drawingContext", this.drawingContext), this._isErasing = !1, this._enableLighting = !1, this.ambientLightColors = [], this.specularColors = [1, 1, 1], this.directionalLightDirections = [], this.directionalLightDiffuseColors = [], this.directionalLightSpecularColors = [], this.pointLightPositions = [], this.pointLightDiffuseColors = [], this.pointLightSpecularColors = [], this.spotLightPositions = [], this.spotLightDirections = [], this.spotLightDiffuseColors = [], this.spotLightSpecularColors = [], this.spotLightAngle = [], this.spotLightConc = [], this.drawMode = a.FILL, this.curFillColor = this._cachedFillStyle = [1, 1, 1, 1], this.curStrokeColor = this._cachedStrokeStyle = [0, 0, 0, 1], this.curBlendMode = a.BLEND, this._cachedBlendMode = void 0, this.blendExt = this.GL.getExtension("EXT_blend_minmax"), this._isBlending = !1, this._useSpecularMaterial = !1, this._useEmissiveMaterial = !1, this._useNormalMaterial = !1, this._useShininess = 1, this._tint = [255, 255, 255, 255], this.constantAttenuation = 1, this.linearAttenuation = 0, this.quadraticAttenuation = 0, this.uMVMatrix = new u.default.Matrix(), this.uPMatrix = new u.default.Matrix(), this.uNMatrix = new u.default.Matrix("mat3"), this._curCamera = new u.default.Camera(this), this._curCamera._computeCameraDefaultSettings(), this._curCamera._setDefaultCamera(), this._defaultLightShader = void 0, this._defaultImmediateModeShader = void 0, this._defaultNormalShader = void 0, this._defaultColorShader = void 0, this._defaultPointShader = void 0, this.userFillShader = void 0, this.userStrokeShader = void 0, this.userPointShader = void 0, this.retainedMode = {
          geometry: {},
          buffers: {
            stroke: [new u.default.RenderBuffer(3, "lineVertices", "lineVertexBuffer", "aPosition", this, this._flatten), new u.default.RenderBuffer(4, "lineNormals", "lineNormalBuffer", "aDirection", this, this._flatten)],
            fill: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(3, "vertexNormals", "normalBuffer", "aNormal", this, this._vToNArray), new u.default.RenderBuffer(4, "vertexColors", "colorBuffer", "aMaterialColor", this), new u.default.RenderBuffer(3, "vertexAmbients", "ambientBuffer", "aAmbientColor", this), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)],
            text: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)]
          }
        }, this.immediateMode = {
          geometry: new u.default.Geometry(),
          shapeMode: a.TRIANGLE_FAN,
          _bezierVertex: [],
          _quadraticVertex: [],
          _curveVertex: [],
          buffers: {
            fill: [new u.default.RenderBuffer(3, "vertices", "vertexBuffer", "aPosition", this, this._vToNArray), new u.default.RenderBuffer(3, "vertexNormals", "normalBuffer", "aNormal", this, this._vToNArray), new u.default.RenderBuffer(4, "vertexColors", "colorBuffer", "aVertexColor", this), new u.default.RenderBuffer(3, "vertexAmbients", "ambientBuffer", "aAmbientColor", this), new u.default.RenderBuffer(2, "uvs", "uvBuffer", "aTexCoord", this, this._flatten)],
            stroke: [new u.default.RenderBuffer(3, "lineVertices", "lineVertexBuffer", "aPosition", this, this._flatten), new u.default.RenderBuffer(4, "lineNormals", "lineNormalBuffer", "aDirection", this, this._flatten)],
            point: this.GL.createBuffer()
          }
        }, this.pointSize = 5, this.curStrokeWeight = 1, this.textures = [], this.textureMode = a.IMAGE, this.textureWrapX = a.CLAMP, this.textureWrapY = a.CLAMP, this._tex = null, this._curveTightness = 6, this._lookUpTableBezier = [], this._lookUpTableQuadratic = [], this._lutBezierDetail = 0, this._lutQuadraticDetail = 0, this._tessy = this._initTessy(), this.fontInfos = {}, this._curShader = void 0, this;
      }, u.default.RendererGL.prototype = Object.create(u.default.Renderer.prototype), u.default.RendererGL.prototype._setAttributeDefaults = function (e) {
        var t = {
          alpha: !0,
          depth: !0,
          stencil: !0,
          antialias: navigator.userAgent.toLowerCase().includes("safari"),
          premultipliedAlpha: !1,
          preserveDrawingBuffer: !0,
          perPixelLighting: !0
        };
        null === e._glAttributes ? e._glAttributes = t : e._glAttributes = Object.assign(t, e._glAttributes);
      }, u.default.RendererGL.prototype._initContext = function () {
        try {
          if (this.drawingContext = this.canvas.getContext("webgl", this._pInst._glAttributes) || this.canvas.getContext("experimental-webgl", this._pInst._glAttributes), null === this.drawingContext) throw new Error("Error creating webgl context");
          var e = this.drawingContext;
          e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight), this._viewport = this.drawingContext.getParameter(this.drawingContext.VIEWPORT);
        } catch (e) {
          throw e;
        }
      }, u.default.RendererGL.prototype._resetContext = function (e, t) {
        var r = this.width,
            i = this.height,
            n = this.canvas.id,
            a = this._pInst instanceof u.default.Graphics;

        if (a) {
          var o = this._pInst;
          o.canvas.parentNode.removeChild(o.canvas), o.canvas = document.createElement("canvas"), (o._pInst._userNode || document.body).appendChild(o.canvas), u.default.Element.call(o, o.canvas, o._pInst), o.width = r, o.height = i;
        } else {
          var s = this.canvas;
          s && s.parentNode.removeChild(s), (s = document.createElement("canvas")).id = n, this._pInst._userNode ? this._pInst._userNode.appendChild(s) : document.body.appendChild(s), this._pInst.canvas = s;
        }

        var l = new u.default.RendererGL(this._pInst.canvas, this._pInst, !a);
        this._pInst._setProperty("_renderer", l), l.resize(r, i), l._applyDefaults(), a || this._pInst._elements.push(l), "function" == typeof t && setTimeout(function () {
          t.apply(window._renderer, e);
        }, 0);
      }, u.default.prototype.setAttributes = function (e, t) {
        if (void 0 !== this._glAttributes) {
          var r = !0;

          if (void 0 !== t ? (null === this._glAttributes && (this._glAttributes = {}), this._glAttributes[e] !== t && (this._glAttributes[e] = t, r = !1)) : e instanceof Object && this._glAttributes !== e && (this._glAttributes = e, r = !1), this._renderer.isP3D && !r) {
            if (!this._setupDone) for (var i in this._renderer.retainedMode.geometry) if (this._renderer.retainedMode.geometry.hasOwnProperty(i)) return void console.error("Sorry, Could not set the attributes, you need to call setAttributes() before calling the other drawing methods in setup()");
            this.push(), this._renderer._resetContext(), this.pop(), this._renderer._curCamera && (this._renderer._curCamera._renderer = this._renderer);
          }
        } else console.log("You are trying to use setAttributes on a p5.Graphics object that does not use a WEBGL renderer.");
      }, u.default.RendererGL.prototype._update = function () {
        this.uMVMatrix.set(this._curCamera.cameraMatrix.mat4[0], this._curCamera.cameraMatrix.mat4[1], this._curCamera.cameraMatrix.mat4[2], this._curCamera.cameraMatrix.mat4[3], this._curCamera.cameraMatrix.mat4[4], this._curCamera.cameraMatrix.mat4[5], this._curCamera.cameraMatrix.mat4[6], this._curCamera.cameraMatrix.mat4[7], this._curCamera.cameraMatrix.mat4[8], this._curCamera.cameraMatrix.mat4[9], this._curCamera.cameraMatrix.mat4[10], this._curCamera.cameraMatrix.mat4[11], this._curCamera.cameraMatrix.mat4[12], this._curCamera.cameraMatrix.mat4[13], this._curCamera.cameraMatrix.mat4[14], this._curCamera.cameraMatrix.mat4[15]), this.ambientLightColors.length = 0, this.specularColors = [1, 1, 1], this.directionalLightDirections.length = 0, this.directionalLightDiffuseColors.length = 0, this.directionalLightSpecularColors.length = 0, this.pointLightPositions.length = 0, this.pointLightDiffuseColors.length = 0, this.pointLightSpecularColors.length = 0, this.spotLightPositions.length = 0, this.spotLightDirections.length = 0, this.spotLightDiffuseColors.length = 0, this.spotLightSpecularColors.length = 0, this.spotLightAngle.length = 0, this.spotLightConc.length = 0, this._enableLighting = !1, this._tint = [255, 255, 255, 255], this.GL.clear(this.GL.DEPTH_BUFFER_BIT);
      }, u.default.RendererGL.prototype.background = function () {
        var e,
            t = (e = this._pInst).color.apply(e, arguments),
            r = t.levels[0] / 255,
            i = t.levels[1] / 255,
            n = t.levels[2] / 255,
            a = t.levels[3] / 255;

        this.GL.clearColor(r, i, n, a), this.GL.clear(this.GL.COLOR_BUFFER_BIT);
      }, u.default.RendererGL.prototype.fill = function (e, t, r, i) {
        var n = u.default.prototype.color.apply(this._pInst, arguments);
        this.curFillColor = n._array, this.drawMode = a.FILL, this._useNormalMaterial = !1, this._tex = null;
      }, u.default.RendererGL.prototype.stroke = function (e, t, r, i) {
        arguments[3] = 255;
        var n = u.default.prototype.color.apply(this._pInst, arguments);
        this.curStrokeColor = n._array;
      }, u.default.RendererGL.prototype.strokeCap = function (e) {
        console.error("Sorry, strokeCap() is not yet implemented in WEBGL mode");
      }, u.default.RendererGL.prototype.strokeJoin = function (e) {
        console.error("Sorry, strokeJoin() is not yet implemented in WEBGL mode");
      }, u.default.RendererGL.prototype.filter = function (e) {
        console.error("filter() does not work in WEBGL mode");
      }, u.default.RendererGL.prototype.blendMode = function (e) {
        e === a.DARKEST || e === a.LIGHTEST || e === a.ADD || e === a.BLEND || e === a.SUBTRACT || e === a.SCREEN || e === a.EXCLUSION || e === a.REPLACE || e === a.MULTIPLY || e === a.REMOVE ? this.curBlendMode = e : e !== a.BURN && e !== a.OVERLAY && e !== a.HARD_LIGHT && e !== a.SOFT_LIGHT && e !== a.DODGE || console.warn("BURN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, and DODGE only work for blendMode in 2D mode.");
      }, u.default.RendererGL.prototype.erase = function (e, t) {
        this._isErasing || (this._applyBlendMode(a.REMOVE), this._isErasing = !0, this._cachedFillStyle = this.curFillColor.slice(), this.curFillColor = [1, 1, 1, e / 255], this._cachedStrokeStyle = this.curStrokeColor.slice(), this.curStrokeColor = [1, 1, 1, t / 255]);
      }, u.default.RendererGL.prototype.noErase = function () {
        this._isErasing && (this._isErasing = !1, this.curFillColor = this._cachedFillStyle.slice(), this.curStrokeColor = this._cachedStrokeStyle.slice(), this.blendMode(this._cachedBlendMode));
      }, u.default.RendererGL.prototype.strokeWeight = function (e) {
        this.curStrokeWeight !== e && (this.pointSize = e, this.curStrokeWeight = e);
      }, u.default.RendererGL.prototype._getPixel = function (e, t) {
        var r;
        return r = new Uint8Array(4), this.drawingContext.readPixels(e, t, 1, 1, this.drawingContext.RGBA, this.drawingContext.UNSIGNED_BYTE, r), [r[0], r[1], r[2], r[3]];
      }, u.default.RendererGL.prototype.loadPixels = function () {
        var e = this._pixelsState;

        if (!0 === this._pInst._glAttributes.preserveDrawingBuffer) {
          var t = e.pixels,
              r = this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4;
          t instanceof Uint8Array && t.length === r || (t = new Uint8Array(r), this._pixelsState._setProperty("pixels", t));
          var i = this._pInst._pixelDensity;
          this.GL.readPixels(0, 0, this.width * i, this.height * i, this.GL.RGBA, this.GL.UNSIGNED_BYTE, t);
        } else console.log("loadPixels only works in WebGL when preserveDrawingBuffer is true.");
      }, u.default.RendererGL.prototype.geometryInHash = function (e) {
        return void 0 !== this.retainedMode.geometry[e];
      }, u.default.RendererGL.prototype.resize = function (e, t) {
        u.default.Renderer.prototype.resize.call(this, e, t), this.GL.viewport(0, 0, this.GL.drawingBufferWidth, this.GL.drawingBufferHeight), this._viewport = this.GL.getParameter(this.GL.VIEWPORT), this._curCamera._resize();
        var r = this._pixelsState;
        void 0 !== r.pixels && r._setProperty("pixels", new Uint8Array(this.GL.drawingBufferWidth * this.GL.drawingBufferHeight * 4));
      }, u.default.RendererGL.prototype.clear = function () {
        var e = (arguments.length <= 0 ? void 0 : arguments[0]) || 0,
            t = (arguments.length <= 1 ? void 0 : arguments[1]) || 0,
            r = (arguments.length <= 2 ? void 0 : arguments[2]) || 0,
            i = (arguments.length <= 3 ? void 0 : arguments[3]) || 0;
        this.GL.clearColor(e, t, r, i), this.GL.clear(this.GL.COLOR_BUFFER_BIT | this.GL.DEPTH_BUFFER_BIT);
      }, u.default.RendererGL.prototype.applyMatrix = function (e, t, r, i, n, a) {
        16 === arguments.length ? u.default.Matrix.prototype.apply.apply(this.uMVMatrix, arguments) : this.uMVMatrix.apply([e, t, 0, 0, r, i, 0, 0, 0, 0, 1, 0, n, a, 0, 1]);
      }, u.default.RendererGL.prototype.translate = function (e, t, r) {
        return e instanceof u.default.Vector && (r = e.z, t = e.y, e = e.x), this.uMVMatrix.translate([e, t, r]), this;
      }, u.default.RendererGL.prototype.scale = function (e, t, r) {
        return this.uMVMatrix.scale(e, t, r), this;
      }, u.default.RendererGL.prototype.rotate = function (e, t) {
        return void 0 === t ? this.rotateZ(e) : (u.default.Matrix.prototype.rotate.apply(this.uMVMatrix, arguments), this);
      }, u.default.RendererGL.prototype.rotateX = function (e) {
        return this.rotate(e, 1, 0, 0), this;
      }, u.default.RendererGL.prototype.rotateY = function (e) {
        return this.rotate(e, 0, 1, 0), this;
      }, u.default.RendererGL.prototype.rotateZ = function (e) {
        return this.rotate(e, 0, 0, 1), this;
      }, u.default.RendererGL.prototype.push = function () {
        var e = u.default.Renderer.prototype.push.apply(this),
            t = e.properties;
        return t.uMVMatrix = this.uMVMatrix.copy(), t.uPMatrix = this.uPMatrix.copy(), t._curCamera = this._curCamera, this._curCamera = this._curCamera.copy(), t.ambientLightColors = this.ambientLightColors.slice(), t.specularColors = this.specularColors.slice(), t.directionalLightDirections = this.directionalLightDirections.slice(), t.directionalLightDiffuseColors = this.directionalLightDiffuseColors.slice(), t.directionalLightSpecularColors = this.directionalLightSpecularColors.slice(), t.pointLightPositions = this.pointLightPositions.slice(), t.pointLightDiffuseColors = this.pointLightDiffuseColors.slice(), t.pointLightSpecularColors = this.pointLightSpecularColors.slice(), t.spotLightPositions = this.spotLightPositions.slice(), t.spotLightDirections = this.spotLightDirections.slice(), t.spotLightDiffuseColors = this.spotLightDiffuseColors.slice(), t.spotLightSpecularColors = this.spotLightSpecularColors.slice(), t.spotLightAngle = this.spotLightAngle.slice(), t.spotLightConc = this.spotLightConc.slice(), t.userFillShader = this.userFillShader, t.userStrokeShader = this.userStrokeShader, t.userPointShader = this.userPointShader, t.pointSize = this.pointSize, t.curStrokeWeight = this.curStrokeWeight, t.curStrokeColor = this.curStrokeColor, t.curFillColor = this.curFillColor, t._useSpecularMaterial = this._useSpecularMaterial, t._useEmissiveMaterial = this._useEmissiveMaterial, t._useShininess = this._useShininess, t.constantAttenuation = this.constantAttenuation, t.linearAttenuation = this.linearAttenuation, t.quadraticAttenuation = this.quadraticAttenuation, t._enableLighting = this._enableLighting, t._useNormalMaterial = this._useNormalMaterial, t._tex = this._tex, t.drawMode = this.drawMode, e;
      }, u.default.RendererGL.prototype.resetMatrix = function () {
        return this.uMVMatrix = u.default.Matrix.identity(this._pInst), this;
      }, u.default.RendererGL.prototype._getImmediateStrokeShader = function () {
        var e = this.userStrokeShader;
        return e && e.isStrokeShader() ? e : this._getLineShader();
      }, u.default.RendererGL.prototype._getRetainedStrokeShader = u.default.RendererGL.prototype._getImmediateStrokeShader, u.default.RendererGL.prototype._getImmediateFillShader = function () {
        var e = this.userFillShader;
        if (this._useNormalMaterial && (!e || !e.isNormalShader())) return this._getNormalShader();

        if (this._enableLighting) {
          if (!e || !e.isLightShader()) return this._getLightShader();
        } else if (this._tex) {
          if (!e || !e.isTextureShader()) return this._getLightShader();
        } else if (!e) return this._getImmediateModeShader();

        return e;
      }, u.default.RendererGL.prototype._getRetainedFillShader = function () {
        if (this._useNormalMaterial) return this._getNormalShader();
        var e = this.userFillShader;

        if (this._enableLighting) {
          if (!e || !e.isLightShader()) return this._getLightShader();
        } else if (this._tex) {
          if (!e || !e.isTextureShader()) return this._getLightShader();
        } else if (!e) return this._getColorShader();

        return e;
      }, u.default.RendererGL.prototype._getImmediatePointShader = function () {
        var e = this.userPointShader;
        return e && e.isPointShader() ? e : this._getPointShader();
      }, u.default.RendererGL.prototype._getRetainedLineShader = u.default.RendererGL.prototype._getImmediateLineShader, u.default.RendererGL.prototype._getLightShader = function () {
        return this._defaultLightShader || (this._pInst._glAttributes.perPixelLighting ? this._defaultLightShader = new u.default.Shader(this, c.phongVert, c.phongFrag) : this._defaultLightShader = new u.default.Shader(this, c.lightVert, c.lightTextureFrag)), this._defaultLightShader;
      }, u.default.RendererGL.prototype._getImmediateModeShader = function () {
        return this._defaultImmediateModeShader || (this._defaultImmediateModeShader = new u.default.Shader(this, c.immediateVert, c.vertexColorFrag)), this._defaultImmediateModeShader;
      }, u.default.RendererGL.prototype._getNormalShader = function () {
        return this._defaultNormalShader || (this._defaultNormalShader = new u.default.Shader(this, c.normalVert, c.normalFrag)), this._defaultNormalShader;
      }, u.default.RendererGL.prototype._getColorShader = function () {
        return this._defaultColorShader || (this._defaultColorShader = new u.default.Shader(this, c.normalVert, c.basicFrag)), this._defaultColorShader;
      }, u.default.RendererGL.prototype._getPointShader = function () {
        return this._defaultPointShader || (this._defaultPointShader = new u.default.Shader(this, c.pointVert, c.pointFrag)), this._defaultPointShader;
      }, u.default.RendererGL.prototype._getLineShader = function () {
        return this._defaultLineShader || (this._defaultLineShader = new u.default.Shader(this, c.lineVert, c.lineFrag)), this._defaultLineShader;
      }, u.default.RendererGL.prototype._getFontShader = function () {
        return this._defaultFontShader || (this.GL.getExtension("OES_standard_derivatives"), this._defaultFontShader = new u.default.Shader(this, c.fontVert, c.fontFrag)), this._defaultFontShader;
      }, u.default.RendererGL.prototype._getEmptyTexture = function () {
        if (!this._emptyTexture) {
          var e = new u.default.Image(1, 1);
          e.set(0, 0, 255), this._emptyTexture = new u.default.Texture(this, e);
        }

        return this._emptyTexture;
      }, u.default.RendererGL.prototype.getTexture = function (e) {
        var t = this.textures,
            r = !0,
            i = !1,
            n = void 0;

        try {
          for (var a, o = t[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            var s = a.value;
            if (s.src === e) return s;
          }
        } catch (e) {
          i = !0, n = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (i) throw n;
          }
        }

        var l = new u.default.Texture(this, e);
        return t.push(l), l;
      }, u.default.RendererGL.prototype._setStrokeUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curStrokeColor), e.setUniform("uStrokeWeight", this.curStrokeWeight);
      }, u.default.RendererGL.prototype._setFillUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curFillColor), e.setUniform("isTexture", !!this._tex), this._tex && e.setUniform("uSampler", this._tex), e.setUniform("uTint", this._tint), e.setUniform("uSpecular", this._useSpecularMaterial), e.setUniform("uEmissive", this._useEmissiveMaterial), e.setUniform("uShininess", this._useShininess), e.setUniform("uUseLighting", this._enableLighting);
        var t = this.pointLightDiffuseColors.length / 3;
        e.setUniform("uPointLightCount", t), e.setUniform("uPointLightLocation", this.pointLightPositions), e.setUniform("uPointLightDiffuseColors", this.pointLightDiffuseColors), e.setUniform("uPointLightSpecularColors", this.pointLightSpecularColors);
        var r = this.directionalLightDiffuseColors.length / 3;
        e.setUniform("uDirectionalLightCount", r), e.setUniform("uLightingDirection", this.directionalLightDirections), e.setUniform("uDirectionalDiffuseColors", this.directionalLightDiffuseColors), e.setUniform("uDirectionalSpecularColors", this.directionalLightSpecularColors);
        var i = this.ambientLightColors.length / 3;
        e.setUniform("uAmbientLightCount", i), e.setUniform("uAmbientColor", this.ambientLightColors);
        var n = this.spotLightDiffuseColors.length / 3;
        e.setUniform("uSpotLightCount", n), e.setUniform("uSpotLightAngle", this.spotLightAngle), e.setUniform("uSpotLightConc", this.spotLightConc), e.setUniform("uSpotLightDiffuseColors", this.spotLightDiffuseColors), e.setUniform("uSpotLightSpecularColors", this.spotLightSpecularColors), e.setUniform("uSpotLightLocation", this.spotLightPositions), e.setUniform("uSpotLightDirection", this.spotLightDirections), e.setUniform("uConstantAttenuation", this.constantAttenuation), e.setUniform("uLinearAttenuation", this.linearAttenuation), e.setUniform("uQuadraticAttenuation", this.quadraticAttenuation), e.bindTextures();
      }, u.default.RendererGL.prototype._setPointUniforms = function (e) {
        e.bindShader(), e.setUniform("uMaterialColor", this.curStrokeColor), e.setUniform("uPointSize", this.pointSize * this._pInst._pixelDensity);
      }, u.default.RendererGL.prototype._bindBuffer = function (e, t, r, i, n) {
        if (t = t || this.GL.ARRAY_BUFFER, this.GL.bindBuffer(t, e), void 0 !== r) {
          var a = new (i || Float32Array)(r);
          this.GL.bufferData(t, a, n || this.GL.STATIC_DRAW);
        }
      }, u.default.RendererGL.prototype._arraysEqual = function (e, t) {
        var r = e.length;
        if (r !== t.length) return !1;

        for (var i = 0; i < r; i++) if (e[i] !== t[i]) return !1;

        return !0;
      }, u.default.RendererGL.prototype._isTypedArray = function (e) {
        return Float32Array, Float64Array, Int16Array, Uint16Array, e instanceof Uint32Array;
      }, u.default.RendererGL.prototype._flatten = function (e) {
        if (0 === e.length) return [];

        if (2e4 < e.length) {
          var t,
              r = Object.prototype.toString,
              i = [],
              n = e.slice();

          for (t = n.pop(); "[object Array]" === r.call(t) ? n.push.apply(n, l(t)) : i.push(t), n.length && void 0 !== (t = n.pop()););

          return i.reverse(), i;
        }

        var a;
        return (a = []).concat.apply(a, l(e));
      }, u.default.RendererGL.prototype._vToNArray = function (e) {
        var t = [],
            r = !0,
            i = !1,
            n = void 0;

        try {
          for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
            var s = a.value;
            t.push(s.x, s.y, s.z);
          }
        } catch (e) {
          i = !0, n = e;
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (i) throw n;
          }
        }

        return t;
      }, u.default.prototype._assert3d = function (e) {
        if (!this._renderer.isP3D) throw new Error("".concat(e, "() is only supported in WEBGL mode. If you'd like to use 3D graphics and WebGL, see  https://p5js.org/examples/form-3d-primitives.html for more information."));
      }, u.default.RendererGL.prototype._initTessy = function () {
        var e = new i.default.GluTesselator();
        return e.gluTessCallback(i.default.gluEnum.GLU_TESS_VERTEX_DATA, function (e, t) {
          t[t.length] = e[0], t[t.length] = e[1], t[t.length] = e[2];
        }), e.gluTessCallback(i.default.gluEnum.GLU_TESS_BEGIN, function (e) {
          e !== i.default.primitiveType.GL_TRIANGLES && console.log("expected TRIANGLES but got type: ".concat(e));
        }), e.gluTessCallback(i.default.gluEnum.GLU_TESS_ERROR, function (e) {
          console.log("error callback"), console.log("error number: ".concat(e));
        }), e.gluTessCallback(i.default.gluEnum.GLU_TESS_COMBINE, function (e, t, r) {
          return [e[0], e[1], e[2]];
        }), e.gluTessCallback(i.default.gluEnum.GLU_TESS_EDGE_FLAG, function (e) {}), e;
      }, u.default.RendererGL.prototype._triangulate = function (e) {
        this._tessy.gluTessNormal(0, 0, 1);

        var t = [];

        this._tessy.gluTessBeginPolygon(t);

        for (var r = 0; r < e.length; r++) {
          this._tessy.gluTessBeginContour();

          for (var i = e[r], n = 0; n < i.length; n += 3) {
            var a = [i[n], i[n + 1], i[n + 2]];

            this._tessy.gluTessVertex(a, a);
          }

          this._tessy.gluTessEndContour();
        }

        return this._tessy.gluTessEndPolygon(), t;
      }, u.default.RendererGL.prototype._bezierCoefficients = function (e) {
        var t = e * e,
            r = 1 - e,
            i = r * r;
        return [i * r, 3 * i * e, 3 * r * t, t * e];
      }, u.default.RendererGL.prototype._quadraticCoefficients = function (e) {
        var t = 1 - e;
        return [t * t, 2 * t * e, e * e];
      }, u.default.RendererGL.prototype._bezierToCatmull = function (e) {
        return [e[1], e[1] + (e[2] - e[0]) / this._curveTightness, e[2] - (e[3] - e[1]) / this._curveTightness, e[2]];
      };
      var f = u.default.RendererGL;
      r.default = f;
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "../core/p5.Renderer": 39,
      "./p5.Camera": 84,
      "./p5.Matrix": 86,
      "./p5.Shader": 91,
      libtess: 10,
      path: 13
    }],
    91: [function (e, t, r) {
      "use strict";

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;
      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      };
      n.default.Shader = function (e, t, r) {
        this._renderer = e, this._vertSrc = t, this._fragSrc = r, this._vertShader = -1, this._fragShader = -1, this._glProgram = 0, this._loadedAttributes = !1, this.attributes = {}, this._loadedUniforms = !1, this.uniforms = {}, this._bound = !1, this.samplers = [];
      }, n.default.Shader.prototype.init = function () {
        if (0 === this._glProgram) {
          var e = this._renderer.GL;
          if (this._vertShader = e.createShader(e.VERTEX_SHADER), e.shaderSource(this._vertShader, this._vertSrc), e.compileShader(this._vertShader), !e.getShaderParameter(this._vertShader, e.COMPILE_STATUS)) return console.error("Yikes! An error occurred compiling the vertex shader:".concat(e.getShaderInfoLog(this._vertShader))), null;
          if (this._fragShader = e.createShader(e.FRAGMENT_SHADER), e.shaderSource(this._fragShader, this._fragSrc), e.compileShader(this._fragShader), !e.getShaderParameter(this._fragShader, e.COMPILE_STATUS)) return console.error("Darn! An error occurred compiling the fragment shader:".concat(e.getShaderInfoLog(this._fragShader))), null;
          this._glProgram = e.createProgram(), e.attachShader(this._glProgram, this._vertShader), e.attachShader(this._glProgram, this._fragShader), e.linkProgram(this._glProgram), e.getProgramParameter(this._glProgram, e.LINK_STATUS) || console.error("Snap! Error linking shader program: ".concat(e.getProgramInfoLog(this._glProgram))), this._loadAttributes(), this._loadUniforms();
        }

        return this;
      }, n.default.Shader.prototype._loadAttributes = function () {
        if (!this._loadedAttributes) {
          this.attributes = {};

          for (var e = this._renderer.GL, t = e.getProgramParameter(this._glProgram, e.ACTIVE_ATTRIBUTES), r = 0; r < t; ++r) {
            var i = e.getActiveAttrib(this._glProgram, r),
                n = i.name,
                a = e.getAttribLocation(this._glProgram, n),
                o = {};
            o.name = n, o.location = a, o.index = r, o.type = i.type, o.size = i.size, this.attributes[n] = o;
          }

          this._loadedAttributes = !0;
        }
      }, n.default.Shader.prototype._loadUniforms = function () {
        if (!this._loadedUniforms) {
          for (var e = this._renderer.GL, t = e.getProgramParameter(this._glProgram, e.ACTIVE_UNIFORMS), r = 0, i = 0; i < t; ++i) {
            var n = e.getActiveUniform(this._glProgram, i),
                a = {};
            a.location = e.getUniformLocation(this._glProgram, n.name), a.size = n.size;
            var o = n.name;
            1 < n.size && (o = o.substring(0, o.indexOf("[0]"))), a.name = o, a.type = n.type, a._cachedData = void 0, a.type === e.SAMPLER_2D && (a.samplerIndex = r, r++, this.samplers.push(a)), a.isArray = a.type === e.FLOAT_MAT3 || a.type === e.FLOAT_MAT4 || a.type === e.FLOAT_VEC2 || a.type === e.FLOAT_VEC3 || a.type === e.FLOAT_VEC4 || a.type === e.INT_VEC2 || a.type === e.INT_VEC3 || a.type === e.INT_VEC4, this.uniforms[o] = a;
          }

          this._loadedUniforms = !0;
        }
      }, n.default.Shader.prototype.compile = function () {}, n.default.Shader.prototype.bindShader = function () {
        this.init(), this._bound || (this.useProgram(), this._bound = !0, this._setMatrixUniforms(), this.setUniform("uViewport", this._renderer._viewport));
      }, n.default.Shader.prototype.unbindShader = function () {
        return this._bound && (this.unbindTextures(), this._bound = !1), this;
      }, n.default.Shader.prototype.bindTextures = function () {
        var e = this._renderer.GL,
            t = !0,
            r = !1,
            i = void 0;

        try {
          for (var n, a = this.samplers[Symbol.iterator](); !(t = (n = a.next()).done); t = !0) {
            var o = n.value,
                s = o.texture;
            void 0 === s && (s = this._renderer._getEmptyTexture()), e.activeTexture(e.TEXTURE0 + o.samplerIndex), s.bindTexture(), s.update(), e.uniform1i(o.location, o.samplerIndex);
          }
        } catch (e) {
          r = !0, i = e;
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw i;
          }
        }
      }, n.default.Shader.prototype.updateTextures = function () {
        var e = !0,
            t = !1,
            r = void 0;

        try {
          for (var i, n = this.samplers[Symbol.iterator](); !(e = (i = n.next()).done); e = !0) {
            var a = i.value.texture;
            a && a.update();
          }
        } catch (e) {
          t = !0, r = e;
        } finally {
          try {
            e || null == n.return || n.return();
          } finally {
            if (t) throw r;
          }
        }
      }, n.default.Shader.prototype.unbindTextures = function () {}, n.default.Shader.prototype._setMatrixUniforms = function () {
        this.setUniform("uProjectionMatrix", this._renderer.uPMatrix.mat4), this.isStrokeShader() && ("default" === this._renderer._curCamera.cameraType ? this.setUniform("uPerspective", 1) : this.setUniform("uPerspective", 0)), this.setUniform("uModelViewMatrix", this._renderer.uMVMatrix.mat4), this.setUniform("uViewMatrix", this._renderer._curCamera.cameraMatrix.mat4), this.uniforms.uNormalMatrix && (this._renderer.uNMatrix.inverseTranspose(this._renderer.uMVMatrix), this.setUniform("uNormalMatrix", this._renderer.uNMatrix.mat3));
      }, n.default.Shader.prototype.useProgram = function () {
        var e = this._renderer.GL;
        return this._renderer._curShader !== this && (e.useProgram(this._glProgram), this._renderer._curShader = this), this;
      }, n.default.Shader.prototype.setUniform = function (e, t) {
        var r = this.uniforms[e];

        if (r) {
          var i = this._renderer.GL;

          if (r.isArray) {
            if (r._cachedData && this._renderer._arraysEqual(r._cachedData, t)) return;
            r._cachedData = t.slice(0);
          } else {
            if (r._cachedData && r._cachedData === t) return;
            r._cachedData = t;
          }

          var n = r.location;

          switch (this.useProgram(), r.type) {
            case i.BOOL:
              !0 === t ? i.uniform1i(n, 1) : i.uniform1i(n, 0);
              break;

            case i.INT:
              1 < r.size ? t.length && i.uniform1iv(n, t) : i.uniform1i(n, t);
              break;

            case i.FLOAT:
              1 < r.size ? t.length && i.uniform1fv(n, t) : i.uniform1f(n, t);
              break;

            case i.FLOAT_MAT3:
              i.uniformMatrix3fv(n, !1, t);
              break;

            case i.FLOAT_MAT4:
              i.uniformMatrix4fv(n, !1, t);
              break;

            case i.FLOAT_VEC2:
              1 < r.size ? t.length && i.uniform2fv(n, t) : i.uniform2f(n, t[0], t[1]);
              break;

            case i.FLOAT_VEC3:
              1 < r.size ? t.length && i.uniform3fv(n, t) : i.uniform3f(n, t[0], t[1], t[2]);
              break;

            case i.FLOAT_VEC4:
              1 < r.size ? t.length && i.uniform4fv(n, t) : i.uniform4f(n, t[0], t[1], t[2], t[3]);
              break;

            case i.INT_VEC2:
              1 < r.size ? t.length && i.uniform2iv(n, t) : i.uniform2i(n, t[0], t[1]);
              break;

            case i.INT_VEC3:
              1 < r.size ? t.length && i.uniform3iv(n, t) : i.uniform3i(n, t[0], t[1], t[2]);
              break;

            case i.INT_VEC4:
              1 < r.size ? t.length && i.uniform4iv(n, t) : i.uniform4i(n, t[0], t[1], t[2], t[3]);
              break;

            case i.SAMPLER_2D:
              i.activeTexture(i.TEXTURE0 + r.samplerIndex), r.texture = this._renderer.getTexture(t), i.uniform1i(r.location, r.samplerIndex);
          }

          return this;
        }
      }, n.default.Shader.prototype.isLightShader = function () {
        return void 0 !== this.attributes.aNormal || void 0 !== this.uniforms.uUseLighting || void 0 !== this.uniforms.uAmbientLightCount || void 0 !== this.uniforms.uDirectionalLightCount || void 0 !== this.uniforms.uPointLightCount || void 0 !== this.uniforms.uAmbientColor || void 0 !== this.uniforms.uDirectionalDiffuseColors || void 0 !== this.uniforms.uDirectionalSpecularColors || void 0 !== this.uniforms.uPointLightLocation || void 0 !== this.uniforms.uPointLightDiffuseColors || void 0 !== this.uniforms.uPointLightSpecularColors || void 0 !== this.uniforms.uLightingDirection || void 0 !== this.uniforms.uSpecular;
      }, n.default.Shader.prototype.isNormalShader = function () {
        return void 0 !== this.attributes.aNormal;
      }, n.default.Shader.prototype.isTextureShader = function () {
        return 0 < this.samplerIndex;
      }, n.default.Shader.prototype.isColorShader = function () {
        return void 0 !== this.attributes.aVertexColor || void 0 !== this.uniforms.uMaterialColor;
      }, n.default.Shader.prototype.isTexLightShader = function () {
        return this.isLightShader() && this.isTextureShader();
      }, n.default.Shader.prototype.isStrokeShader = function () {
        return void 0 !== this.uniforms.uStrokeWeight;
      }, n.default.Shader.prototype.enableAttrib = function (e, t, r, i, n, a) {
        if (e) {
          0;
          var o = e.location;

          if (-1 !== o) {
            var s = this._renderer.GL;
            e.enabled || (s.enableVertexAttribArray(o), e.enabled = !0), this._renderer.GL.vertexAttribPointer(o, t, r || s.FLOAT, i || !1, n || 0, a || 0);
          }
        }

        return this;
      };
      var a = n.default.Shader;
      r.default = a;
    }, {
      "../core/main": 36
    }],
    92: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      Object.defineProperty(r, "__esModule", {
        value: !0
      }), r.default = void 0;

      var i,
          n = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          s = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = l();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return l = function () {
          return e;
        }, e;
      }

      n.default.Texture = function (e, t) {
        this._renderer = e;
        var r = this._renderer.GL;
        this.src = t, this.glTex = void 0, this.glTarget = r.TEXTURE_2D, this.glFormat = r.RGBA, this.mipmaps = !1, this.glMinFilter = r.LINEAR, this.glMagFilter = r.LINEAR, this.glWrapS = r.CLAMP_TO_EDGE, this.glWrapT = r.CLAMP_TO_EDGE, this.isSrcMediaElement = void 0 !== n.default.MediaElement && t instanceof n.default.MediaElement, this._videoPrevUpdateTime = 0, this.isSrcHTMLElement = void 0 !== n.default.Element && t instanceof n.default.Element && !(t instanceof n.default.Graphics), this.isSrcP5Image = t instanceof n.default.Image, this.isSrcP5Graphics = t instanceof n.default.Graphics, this.isImageData = "undefined" != typeof ImageData && t instanceof ImageData;

        var i = this._getTextureDataFromSource();

        return this.width = i.width, this.height = i.height, this.init(i), this;
      }, n.default.Texture.prototype._getTextureDataFromSource = function () {
        var e;
        return this.isSrcP5Image ? e = this.src.canvas : this.isSrcMediaElement || this.isSrcP5Graphics || this.isSrcHTMLElement ? e = this.src.elt : this.isImageData && (e = this.src), e;
      }, n.default.Texture.prototype.init = function (e) {
        var t = this._renderer.GL;

        if (this.glTex = t.createTexture(), this.glWrapS = this._renderer.textureWrapX, this.glWrapT = this._renderer.textureWrapY, this.setWrapMode(this.glWrapS, this.glWrapT), this.bindTexture(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, this.glMagFilter), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this.glMinFilter), 0 === this.width || 0 === this.height || this.isSrcMediaElement && !this.src.loadedmetadata) {
          var r = new Uint8Array([1, 1, 1, 1]);
          t.texImage2D(this.glTarget, 0, t.RGBA, 1, 1, 0, this.glFormat, t.UNSIGNED_BYTE, r);
        } else t.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, t.UNSIGNED_BYTE, e);
      }, n.default.Texture.prototype.update = function () {
        var e = this.src;
        if (0 === e.width || 0 === e.height) return !1;

        var t = this._getTextureDataFromSource(),
            r = !1,
            i = this._renderer.GL;

        return t.width !== this.width || t.height !== this.height ? (r = !0, this.width = t.width, this.height = t.height, this.isSrcP5Image ? e.setModified(!1) : (this.isSrcMediaElement || this.isSrcHTMLElement) && e.setModified(!0)) : this.isSrcP5Image ? e.isModified() && (r = !0, e.setModified(!1)) : this.isSrcMediaElement ? e.isModified() ? (r = !0, e.setModified(!1)) : e.loadedmetadata && this._videoPrevUpdateTime !== e.time() && (this._videoPrevUpdateTime = e.time(), r = !0) : this.isImageData ? e._dirty && (r = !(e._dirty = !1)) : r = !0, r && (this.bindTexture(), i.texImage2D(this.glTarget, 0, this.glFormat, this.glFormat, i.UNSIGNED_BYTE, t)), r;
      }, n.default.Texture.prototype.bindTexture = function () {
        return this._renderer.GL.bindTexture(this.glTarget, this.glTex), this;
      }, n.default.Texture.prototype.unbindTexture = function () {
        this._renderer.GL.bindTexture(this.glTarget, null);
      }, n.default.Texture.prototype.setInterpolation = function (e, t) {
        var r = this._renderer.GL;
        e === s.NEAREST ? this.glMinFilter = r.NEAREST : this.glMinFilter = r.LINEAR, t === s.NEAREST ? this.glMagFilter = r.NEAREST : this.glMagFilter = r.LINEAR, this.bindTexture(), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, this.glMinFilter), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, this.glMagFilter), this.unbindTexture();
      }, n.default.Texture.prototype.setWrapMode = function (e, t) {
        function r(e) {
          return 0 == (e & e - 1);
        }

        var i = this._renderer.GL,
            n = r(this.width),
            a = r(this.height);
        e === s.REPEAT ? n && a ? this.glWrapS = i.REPEAT : (console.warn("You tried to set the wrap mode to REPEAT but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapS = i.CLAMP_TO_EDGE) : e === s.MIRROR ? n && a ? this.glWrapS = i.MIRRORED_REPEAT : (console.warn("You tried to set the wrap mode to MIRROR but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapS = i.CLAMP_TO_EDGE) : this.glWrapS = i.CLAMP_TO_EDGE, t === s.REPEAT ? n && a ? this.glWrapT = i.REPEAT : (console.warn("You tried to set the wrap mode to REPEAT but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapT = i.CLAMP_TO_EDGE) : t === s.MIRROR ? n && a ? this.glWrapT = i.MIRRORED_REPEAT : (console.warn("You tried to set the wrap mode to MIRROR but the texture size is not a power of two. Setting to CLAMP instead"), this.glWrapT = i.CLAMP_TO_EDGE) : this.glWrapT = i.CLAMP_TO_EDGE, this.bindTexture(), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, this.glWrapS), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, this.glWrapT), this.unbindTexture();
      };
      var a = n.default.Texture;
      r.default = a;
    }, {
      "../core/constants": 26,
      "../core/main": 36
    }],
    93: [function (e, t, r) {
      "use strict";

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
      }

      var i,
          j = (i = e("../core/main")) && i.__esModule ? i : {
        default: i
      },
          k = function (e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" !== o(e) && "function" != typeof e) return {
          default: e
        };
        var t = s();
        if (t && t.has(e)) return t.get(e);
        var r = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, n) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n];
        }

        r.default = e, t && t.set(e, r);
        return r;
      }(e("../core/constants"));

      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return s = function () {
          return e;
        }, e;
      }

      e("./p5.Shader"), e("./p5.RendererGL.Retained"), j.default.RendererGL.prototype._applyTextProperties = function () {}, j.default.RendererGL.prototype.textWidth = function (e) {
        return this._isOpenType() ? this._textFont._textWidth(e, this._textSize) : 0;
      };

      function n(e, t) {
        this.width = e, this.height = t, this.infos = [], this.findImage = function (e) {
          var t,
              r,
              i = this.width * this.height;
          if (i < e) throw new Error("font is too complex to render in 3D");

          for (var n = this.infos.length - 1; 0 <= n; --n) {
            var a = this.infos[n];

            if (a.index + e < i) {
              r = (t = a).imageData;
              break;
            }
          }

          if (!t) {
            try {
              r = new ImageData(this.width, this.height);
            } catch (e) {
              var o = document.getElementsByTagName("canvas")[0],
                  s = !o;
              o || ((o = document.createElement("canvas")).style.display = "none", document.body.appendChild(o));
              var l = o.getContext("2d");
              l && (r = l.createImageData(this.width, this.height)), s && document.body.removeChild(o);
            }

            t = {
              index: 0,
              imageData: r
            }, this.infos.push(t);
          }

          var u = t.index;
          return t.index += e, r._dirty = !0, {
            imageData: r,
            index: u
          };
        };
      }

      function V(e, t, r, i, n) {
        var a = e.imageData.data,
            o = 4 * e.index++;
        a[o++] = t, a[o++] = r, a[o++] = i, a[o++] = n;
      }

      function A(e) {
        this.font = e, this.strokeImageInfos = new n(64, 64), this.colDimImageInfos = new n(64, 64), this.rowDimImageInfos = new n(64, 64), this.colCellImageInfos = new n(64, 64), this.rowCellImageInfos = new n(64, 64), this.glyphInfos = {}, this.getGlyphInfo = function (e) {
          var t = this.glyphInfos[e.index];
          if (t) return t;
          var r,
              i = e.getBoundingBox(),
              n = i.x1,
              a = i.y1,
              o = i.x2 - n,
              s = i.y2 - a,
              l = e.path.commands;
          if (0 == o || 0 == s || !l.length) return this.glyphInfos[e.index] = {};
          var u,
              h,
              c,
              f,
              d = [],
              p = [],
              m = [];

          for (r = 8; 0 <= r; --r) m.push([]);

          for (r = 8; 0 <= r; --r) p.push([]);

          function y(e, t, r) {
            var i = d.length;

            function n(e, t, r) {
              for (var i = e.length; 0 < i--;) {
                var n = e[i];
                n < t && (t = n), r < n && (r = n);
              }

              return {
                min: t,
                max: r
              };
            }

            d.push(r);

            for (var a = n(e, 1, 0), o = Math.max(Math.floor(9 * a.min), 0), s = Math.min(Math.ceil(9 * a.max), 9), l = o; l < s; ++l) m[l].push(i);

            for (var u = n(t, 1, 0), h = Math.max(Math.floor(9 * u.min), 0), c = Math.min(Math.ceil(9 * u.max), 9), f = h; f < c; ++f) p[f].push(i);
          }

          function v(e) {
            return (t = (i = 255) * e) < (r = 0) ? r : i < t ? i : t;
            var t, r, i;
          }

          function w(e, t, r, i) {
            this.p0 = e, this.c0 = t, this.c1 = r, this.p1 = i, this.toQuadratic = function () {
              return {
                x: this.p0.x,
                y: this.p0.y,
                x1: this.p1.x,
                y1: this.p1.y,
                cx: (3 * (this.c0.x + this.c1.x) - (this.p0.x + this.p1.x)) / 4,
                cy: (3 * (this.c0.y + this.c1.y) - (this.p0.y + this.p1.y)) / 4
              };
            }, this.quadError = function () {
              return j.default.Vector.sub(j.default.Vector.sub(this.p1, this.p0), j.default.Vector.mult(j.default.Vector.sub(this.c1, this.c0), 3)).mag() / 2;
            }, this.split = function (e) {
              var t = j.default.Vector.lerp(this.p0, this.c0, e),
                  r = j.default.Vector.lerp(this.c0, this.c1, e),
                  i = j.default.Vector.lerp(t, r, e);
              this.c1 = j.default.Vector.lerp(this.c1, this.p1, e), this.c0 = j.default.Vector.lerp(r, this.c1, e);
              var n = j.default.Vector.lerp(i, this.c0, e),
                  a = new w(this.p0, t, i, n);
              return this.p0 = n, a;
            }, this.splitInflections = function () {
              var e = j.default.Vector.sub(this.c0, this.p0),
                  t = j.default.Vector.sub(j.default.Vector.sub(this.c1, this.c0), e),
                  r = j.default.Vector.sub(j.default.Vector.sub(j.default.Vector.sub(this.p1, this.c1), e), j.default.Vector.mult(t, 2)),
                  i = [],
                  n = t.x * r.y - t.y * r.x;

              if (0 !== n) {
                var a = e.x * r.y - e.y * r.x,
                    o = e.x * t.y - e.y * t.x,
                    s = a * a - 4 * n * o;

                if (0 <= s) {
                  n < 0 && (n = -n, a = -a, o = -o);
                  var l = Math.sqrt(s),
                      u = (-a - l) / (2 * n),
                      h = (-a + l) / (2 * n);
                  0 < u && u < 1 && (i.push(this.split(u)), h = 1 - (1 - h) / (1 - u)), 0 < h && h < 1 && i.push(this.split(h));
                }
              }

              return i.push(this), i;
            };
          }

          function g(e, t, r, i, n, a, o, s) {
            var l = new w(new j.default.Vector(e, t), new j.default.Vector(r, i), new j.default.Vector(n, a), new j.default.Vector(o, s)).splitInflections(),
                u = [],
                h = 30 / z,
                c = !0,
                f = !1,
                d = void 0;

            try {
              for (var p, m = l[Symbol.iterator](); !(c = (p = m.next()).done); c = !0) {
                for (var y = p.value, v = [], g = void 0; !(.125 <= (g = h / y.quadError()));) {
                  var b = Math.pow(g, 1 / 3),
                      _ = y.split(b),
                      x = y.split(1 - b / (1 - b));

                  u.push(_), v.push(y), y = x;
                }

                g < 1 && u.push(y.split(.5)), u.push(y), Array.prototype.push.apply(u, v.reverse());
              }
            } catch (e) {
              f = !0, d = e;
            } finally {
              try {
                c || null == m.return || m.return();
              } finally {
                if (f) throw d;
              }
            }

            return u;
          }

          function b(e, t, r, i) {
            y([e, r], [t, i], {
              x: e,
              y: t,
              cx: (e + r) / 2,
              cy: (t + i) / 2
            });
          }

          function _(e, t, r, i) {
            return Math.abs(r - e) < 1e-5 && Math.abs(i - t) < 1e-5;
          }

          var x = !0,
              S = !1,
              M = void 0;

          try {
            for (var T, E = l[Symbol.iterator](); !(x = (T = E.next()).done); x = !0) {
              var C = T.value,
                  L = (C.x - n) / o,
                  O = (C.y - a) / s;

              if (!_(u, h, L, O)) {
                switch (C.type) {
                  case "M":
                    c = L, f = O;
                    break;

                  case "L":
                    b(u, h, L, O);
                    break;

                  case "Q":
                    var P = (C.x1 - n) / o,
                        R = (C.y1 - a) / s;
                    y([u, L, P], [h, O, R], {
                      x: u,
                      y: h,
                      cx: P,
                      cy: R
                    });
                    break;

                  case "Z":
                    _(u, h, c, f) ? d.push({
                      x: u,
                      y: h
                    }) : (b(u, h, c, f), d.push({
                      x: c,
                      y: f
                    }));
                    break;

                  case "C":
                    for (var D = g(u, h, (C.x1 - n) / o, (C.y1 - a) / s, (C.x2 - n) / o, (C.y2 - a) / s, L, O), k = 0; k < D.length; k++) {
                      var A = D[k].toQuadratic();
                      y([A.x, A.x1, A.cx], [A.y, A.y1, A.cy], A);
                    }

                    break;

                  default:
                    throw new Error("unknown command type: ".concat(C.type));
                }

                u = L, h = O;
              }
            }
          } catch (e) {
            S = !0, M = e;
          } finally {
            try {
              x || null == E.return || E.return();
            } finally {
              if (S) throw M;
            }
          }

          for (var I = d.length, U = this.strokeImageInfos.findImage(I), N = U.index, F = 0; F < I; ++F) {
            var B = d[F];
            V(U, v(B.x), v(B.y), v(B.cx), v(B.cy));
          }

          function G(e, t, r) {
            for (var i = e.length, n = t.findImage(i), a = n.index, o = 0, s = 0; s < i; ++s) o += e[s].length;

            for (var l = r.findImage(o), u = 0; u < i; ++u) {
              var h = e[u],
                  c = h.length,
                  f = l.index;
              V(n, f >> 7, 127 & f, c >> 7, 127 & c);

              for (var d = 0; d < c; ++d) {
                var p = h[d] + N;
                V(l, p >> 7, 127 & p, 0, 0);
              }
            }

            return {
              cellImageInfo: l,
              dimOffset: a,
              dimImageInfo: n
            };
          }

          return (t = this.glyphInfos[e.index] = {
            glyph: e,
            uGlyphRect: [i.x1, -i.y1, i.x2, -i.y2],
            strokeImageInfo: U,
            strokes: d,
            colInfo: G(m, this.colDimImageInfos, this.colCellImageInfos),
            rowInfo: G(p, this.rowDimImageInfos, this.rowCellImageInfos)
          }).uGridOffset = [t.colInfo.dimOffset, t.rowInfo.dimOffset], t;
        };
      }

      var z = Math.sqrt(3);

      j.default.RendererGL.prototype._renderText = function (e, t, r, i, n) {
        if (this._textFont && "string" != typeof this._textFont) {
          if (!(n <= i) && this._doFill) {
            if (!this._isOpenType()) return console.log("WEBGL: only Opentype (.otf) and Truetype (.ttf) fonts are supported"), e;
            e.push();
            var a = this._doStroke,
                o = this.drawMode;
            this._doStroke = !1, this.drawMode = k.TEXTURE;
            var s = this._textFont.font,
                l = this._textFont._fontInfo;
            l = l || (this._textFont._fontInfo = new A(s));

            var u = this._textFont._handleAlignment(this, t, r, i),
                h = this._textSize / s.unitsPerEm;

            this.translate(u.x, u.y, 0), this.scale(h, h, 1);

            var c = this.GL,
                f = !this._defaultFontShader,
                d = this._getFontShader();

            d.init(), d.bindShader(), f && (d.setUniform("uGridImageSize", [64, 64]), d.setUniform("uCellsImageSize", [64, 64]), d.setUniform("uStrokeImageSize", [64, 64]), d.setUniform("uGridSize", [9, 9])), this._applyColorBlend(this.curFillColor);
            var p = this.retainedMode.geometry.glyph;

            if (!p) {
              var m = this._textGeom = new j.default.Geometry(1, 1, function () {
                for (var e = 0; e <= 1; e++) for (var t = 0; t <= 1; t++) this.vertices.push(new j.default.Vector(t, e, 0)), this.uvs.push(t, e);
              });
              m.computeFaces().computeNormals(), p = this.createBuffers("glyph", m);
            }

            var y = !0,
                v = !1,
                g = void 0;

            try {
              for (var b, _ = this.retainedMode.buffers.text[Symbol.iterator](); !(y = (b = _.next()).done); y = !0) {
                b.value._prepareBuffer(p, d);
              }
            } catch (e) {
              v = !0, g = e;
            } finally {
              try {
                y || null == _.return || _.return();
              } finally {
                if (v) throw g;
              }
            }

            this._bindBuffer(p.indexBuffer, c.ELEMENT_ARRAY_BUFFER), d.setUniform("uMaterialColor", this.curFillColor);

            try {
              var x = 0,
                  w = null,
                  S = s.stringToGlyphs(t),
                  M = !0,
                  T = !1,
                  E = void 0;

              try {
                for (var C, L = S[Symbol.iterator](); !(M = (C = L.next()).done); M = !0) {
                  var O = C.value;
                  w && (x += s.getKerningValue(w, O));
                  var P = l.getGlyphInfo(O);

                  if (P.uGlyphRect) {
                    var R = P.rowInfo,
                        D = P.colInfo;
                    d.setUniform("uSamplerStrokes", P.strokeImageInfo.imageData), d.setUniform("uSamplerRowStrokes", R.cellImageInfo.imageData), d.setUniform("uSamplerRows", R.dimImageInfo.imageData), d.setUniform("uSamplerColStrokes", D.cellImageInfo.imageData), d.setUniform("uSamplerCols", D.dimImageInfo.imageData), d.setUniform("uGridOffset", P.uGridOffset), d.setUniform("uGlyphRect", P.uGlyphRect), d.setUniform("uGlyphOffset", x), d.bindTextures(), c.drawElements(c.TRIANGLES, 6, this.GL.UNSIGNED_SHORT, 0);
                  }

                  x += O.advanceWidth, w = O;
                }
              } catch (e) {
                T = !0, E = e;
              } finally {
                try {
                  M || null == L.return || L.return();
                } finally {
                  if (T) throw E;
                }
              }
            } finally {
              d.unbindShader(), this._doStroke = a, this.drawMode = o, e.pop();
            }

            return e;
          }
        } else console.log("WEBGL: you must load and set a font before drawing text. See `loadFont` and `textFont` for more details.");
      };
    }, {
      "../core/constants": 26,
      "../core/main": 36,
      "./p5.RendererGL.Retained": 89,
      "./p5.Shader": 91
    }]
  }, {}, [21])(21);
});
},{}],"classes/Square.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Grid_1 = require("./Grid");

var sketch_1 = require("../sketch");

var Square =
/** @class */
function () {
  function Square(color, coords, size, index) {
    this.color = color;
    this.coords = coords;
    this.size = size;
    this.index = index; // The right coordinates, so the square can be drawn at the right spot

    this.piece = null;
    this.highlight = false;
  }

  Square.prototype.showCheck = function () {
    if (this.piece) {
      if (this.piece.position.file === this.coords.file && this.piece.position.rank === this.coords.rank) {
        sketch_1.p5.push();
        sketch_1.p5.fill(0, 255, 0);
        sketch_1.p5.textSize(25);
        sketch_1.p5.text("V", this.coords.i * this.size + this.size / 2, this.coords.j * this.size + this.size / 2);
        sketch_1.p5.pop();
      } else {
        sketch_1.p5.push();
        sketch_1.p5.fill(255, 0, 0);
        sketch_1.p5.textSize(25);
        sketch_1.p5.text("X", this.coords.i * this.size + this.size / 2, this.coords.j * this.size + this.size / 2);
        sketch_1.p5.pop();
      }
    }
  };

  Square.prototype.show = function () {
    // Draws the Square at the right place
    sketch_1.p5.push();
    if (this.color === "black") sketch_1.p5.fill(0, 0, 0);else sketch_1.p5.fill(255, 255, 255);
    sketch_1.p5.noStroke();
    sketch_1.p5.rect(this.coords.i * this.size, this.coords.j * this.size, this.size, this.size);
    sketch_1.p5.pop();

    if (this.highlight) {
      sketch_1.p5.push();
      sketch_1.p5.fill(255, 69, 0, 120);
      sketch_1.p5.noStroke();
      sketch_1.p5.rect(this.coords.i * this.size, this.coords.j * this.size, this.size, this.size);
      sketch_1.p5.pop();
    } // Shows the coordinates, based on boolean


    if (Grid_1.SHOW_COORDS) {
      sketch_1.p5.push();
      if (this.color === "black") sketch_1.p5.fill(255, 255, 255);else sketch_1.p5.fill(0, 0, 0);
      sketch_1.p5.text("" + this.coords.file + this.coords.rank, this.coords.i * this.size + this.size / 2, this.coords.j * this.size + this.size / 2);
      sketch_1.p5.pop();
    } // Shows some coordinates


    sketch_1.p5.push();
    if (this.color === "black") sketch_1.p5.fill(255, 255, 255);else sketch_1.p5.fill(0, 0, 0);
    sketch_1.p5.textSize(15);

    if (this.coords.file === "A" && this.coords.rank !== 1) {
      sketch_1.p5.textAlign(sketch_1.p5.LEFT, sketch_1.p5.BOTTOM);
      sketch_1.p5.text(this.coords.rank, this.coords.i * this.size, this.coords.j * this.size + this.size);
    } else if (this.coords.rank === 1 && this.coords.file !== "A") {
      sketch_1.p5.textAlign(sketch_1.p5.LEFT, sketch_1.p5.BOTTOM);
      sketch_1.p5.text(this.coords.file, this.coords.i * this.size, this.coords.j * this.size + this.size);
    } else if (this.coords.rank === 1 && this.coords.file === "A") {
      sketch_1.p5.textAlign(sketch_1.p5.LEFT, sketch_1.p5.BOTTOM);
      sketch_1.p5.text("" + this.coords.file + this.coords.rank, this.coords.i * this.size, this.coords.j * this.size + this.size);
    }

    sketch_1.p5.pop();
  };

  return Square;
}();

exports.default = Square;
},{"./Grid":"classes/Grid.ts","../sketch":"sketch.ts"}],"classes/Grid.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHOW_COORDS = exports.SQUARES = exports.LETTERS = void 0;

var Square_1 = __importDefault(require("./Square"));

exports.LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
var GRID_COLOR = [0, 1, 0, 1, 0, 1, 0, 1];
exports.SQUARES = [];
exports.SHOW_COORDS = true;

var Grid =
/** @class */
function () {
  function Grid(size) {
    this.size = size; // The multidimensional array

    this.grid = this.initGrid();
  }

  Grid.prototype.show = function () {
    // Draws the squares
    exports.SQUARES.forEach(function (square) {
      return square.show();
    });
  };

  Grid.prototype.initGrid = function () {
    var grid = new Array(8);

    for (var rank = 0; rank < grid.length; rank++) {
      grid[rank] = new Array(8);
    }

    var index = 0;

    for (var rank = 0; rank < grid.length; rank++) {
      GRID_COLOR.reverse();

      for (var file_1 = 0; file_1 < grid[rank].length; file_1++) {
        var fileLetter = exports.LETTERS[file_1];
        var color = GRID_COLOR[file_1] === 0 ? "black" : "white";
        var j = [7, 6, 5, 4, 3, 2, 1, 0];
        grid[rank][file_1] = new Square_1.default(color, {
          file: fileLetter,
          rank: j[rank] + 1,
          i: file_1,
          j: rank
        }, this.size / 8, index);
        exports.SQUARES.push(grid[rank][file_1]);
        index++;
      }
    }

    return grid;
  };

  return Grid;
}();

exports.default = Grid;
},{"./Square":"classes/Square.ts"}],"classes/pieces/Piece.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LAST_MOVES = exports.pieces = exports.pieceSelected = void 0;

var Grid_1 = require("../Grid");

var sketch_1 = require("../../sketch");

var sketch_2 = require("../../sketch");

exports.pieceSelected = null;
exports.pieces = [];
exports.LAST_MOVES = [];

var Piece =
/** @class */
function () {
  function Piece(type, square, symbol, color, position, size) {
    this.type = type;
    this.square = square;
    this.symbol = symbol;
    this.color = color;
    this.position = position;
    this.size = size;
    this.drawingCoords = this.getDrawingCoords();
    this.image = this.getImage();
    this.availableMoves = [];
    this.position.fileNumber = this.getFileNumber();
    this.history = [__assign({}, this.position)];
  }

  Piece.prototype.getFileNumber = function () {
    var _this = this;

    return Grid_1.LETTERS.findIndex(function (letter) {
      return letter === _this.position.file;
    });
  };

  Piece.prototype.show = function () {
    var _this = this;

    if (exports.pieceSelected === this) {
      sketch_2.p5.push();
      sketch_2.p5.noStroke();
      sketch_2.p5.fill(0, 200, 0, 150);
      sketch_2.p5.rect(this.square.coords.i * this.square.size, this.square.coords.j * this.square.size, this.square.size, this.square.size);
      sketch_2.p5.pop();

      if (this.availableMoves.length > 0) {
        sketch_2.p5.push();
        sketch_2.p5.noStroke();
        this.availableMoves.forEach(function (square) {
          sketch_2.p5.fill(255, 255, 0, 150);

          if (square.piece && square.piece.color !== _this.color) {
            sketch_2.p5.fill(255, 0, 0, 150);
          }

          sketch_2.p5.rect(square.coords.i * square.size, square.coords.j * square.size, square.size, square.size);
        });
        sketch_2.p5.pop();
      }
    }

    sketch_2.p5.push();
    sketch_2.p5.image(this.image, this.drawingCoords.i * this.size + this.size / 6, this.drawingCoords.j * this.size + this.size / 6, this.size / 1.5, this.size / 1.5);
    sketch_2.p5.pop();
  };

  Piece.prototype.getDrawingCoords = function () {
    var _this = this;

    var rankInverted = [7, 6, 5, 4, 3, 2, 1, 0];
    var i = Grid_1.LETTERS.findIndex(function (letter) {
      return letter === _this.position.file;
    });
    var j = rankInverted[this.position.rank - 1];
    return {
      i: i,
      j: j
    };
  };

  Piece.prototype.getPossibleMoves = function (moves) {
    var possibleMoves = [];

    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
      var move = moves_1[_i];
      if (!move.piece) possibleMoves.push(move);else {
        if (move.piece.color !== this.color && move.piece.type !== "king") possibleMoves.push(move);
      }
    }

    return possibleMoves;
  };

  Piece.prototype.getImage = function () {
    var _this = this;

    var color = this.color === "black" ? sketch_1.blackPieces : sketch_1.whitePieces;
    return color.images.find(function (image) {
      return image.piece === _this.type;
    }).image;
  };

  Piece.prototype.hitbox = function (mousex, mousey, square) {
    return mousex > square.coords.i * square.size && mousex < square.coords.i * square.size + square.size && mousey > square.coords.j * square.size && mousey < square.coords.j * square.size + square.size;
  };

  Piece.prototype.combineMoves = function () {
    return [];
  };

  Piece.prototype.clickedOn = function (mousex, mousey) {
    var _this = this;

    var hb = this.hitbox(mousex, mousey, this.square);

    if (hb) {
      if (!(exports.pieceSelected && exports.pieceSelected.availableMoves.find(function (square) {
        return square === _this.square;
      }))) exports.pieceSelected = this;
      console.log(this);
    }
  };

  Piece.prototype.clickOnSquare = function (mousex, mousey, fen) {
    var newSquare = null;

    if (this.availableMoves.length > 0) {
      for (var _i = 0, _a = this.availableMoves; _i < _a.length; _i++) {
        var move = _a[_i];
        var hb = this.hitbox(mousex, mousey, move);
        if (hb) newSquare = move;
      }
    }

    if (newSquare) {
      if (newSquare.piece) {
        exports.pieces = exports.pieces.filter(function (piece) {
          return piece !== newSquare.piece;
        });
      }

      this.changeSquare(newSquare, fen);
    }
  };

  Piece.prototype.changeSquare = function (newSquare, fen) {
    var fenBoard = fen.updateFenBoard(newSquare, this);
    var newFen = fen.addRemains(fenBoard);
    var oldSquare = this.square;
    fen.fen = newFen;
    fen.fenHistory.push(fen.fen);
    this.drawingCoords = {
      i: newSquare.coords.i,
      j: newSquare.coords.j
    };
    this.position.file = newSquare.coords.file;
    this.position.rank = newSquare.coords.rank;
    this.position.fileNumber = this.getFileNumber();
    this.square = newSquare;
    this.square.piece = this;
    oldSquare.piece = null;
    this.history.push(__assign({}, this.position)); // console.log(this.square, oldSquare);

    exports.pieces.forEach(function (piece) {
      piece.combineMoves();
    });
    console.log(this);
    exports.pieceSelected = null;
    document.getElementById("fen").innerHTML = "FEN: " + fen.fen;
    exports.LAST_MOVES = [oldSquare, newSquare];
    console.log(fen);
  };

  return Piece;
}();

exports.default = Piece;
},{"../Grid":"classes/Grid.ts","../../sketch":"sketch.ts"}],"classes/pieces/movements/diagonal.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sketch_1 = require("../../../sketch");

function diagonalMove() {
  var m = [];

  function initDiagonals(piece, signColumn, signRow) {
    var sq = [];

    for (var tL = 1; tL < 9; tL++) {
      var rank = sketch_1.grid.grid[piece.drawingCoords.j + signColumn * tL];
      if (!rank) break;
      var square = rank[piece.drawingCoords.i + signRow * tL];
      if (!square) break;

      if (square.piece) {
        if (square.piece.color === piece.color || square.piece.type === "king") break;else {
          m.push(square);
          sq.push(square);
          break;
        }
      }

      m.push(square);
      sq.push(square);
    }

    return sq;
  }

  var topLeft = initDiagonals(this, -1, -1);
  var topRight = initDiagonals(this, 1, -1);
  var bottomRight = initDiagonals(this, 1, 1);
  var bottomLeft = initDiagonals(this, -1, 1);
  return {
    topLeft: topLeft,
    topRight: topRight,
    bottomRight: bottomRight,
    bottomLeft: bottomLeft
  };
}

exports.default = diagonalMove;
},{"../../../sketch":"sketch.ts"}],"classes/pieces/movements/horizontal.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sketch_1 = require("../../../sketch");

function horizontal(piece, sign) {
  var sq = [];

  for (var i = 1; i < 9; i++) {
    var rank = sketch_1.grid.grid[piece.drawingCoords.j];
    if (rank === undefined) break;
    var square = rank[piece.position.fileNumber + sign * i];
    if (square === undefined) break;

    if (square.piece) {
      if (square.piece.color === piece.color || square.piece.type === "king") break;else {
        sq.push(square);
        break;
      }
    }

    sq.push(square);
  }

  return sq;
}

exports.default = horizontal;
},{"../../../sketch":"sketch.ts"}],"classes/pieces/movements/vertical.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var sketch_1 = require("../../../sketch");

function vertical(piece, sign) {
  var sq = [];

  for (var i = 1; i < 9; i++) {
    var rank = sketch_1.grid.grid[piece.drawingCoords.j + sign * i];
    if (rank === undefined) break;
    var square = rank[piece.position.fileNumber];
    if (square === undefined) break;

    if (square.piece) {
      if (square.piece.color === piece.color || square.piece.type === "king") break;else {
        sq.push(square);
        break;
      }
    }

    sq.push(square);
  }

  return sq;
}

exports.default = vertical;
},{"../../../sketch":"sketch.ts"}],"classes/pieces/movements/moves.ts":[function(require,module,exports) {
"use strict";

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rookMoves = exports.queenMoves = exports.bishopMoves = void 0;

var diagonal_1 = __importDefault(require("./diagonal"));

var horizontal_1 = __importDefault(require("./horizontal"));

var vertical_1 = __importDefault(require("./vertical"));

function verticalAndHorizontal() {
  var m = [];
  var vertical1 = vertical_1.default(this, -1);
  var vertical2 = vertical_1.default(this, 1);
  var horizontal1 = horizontal_1.default(this, -1);
  var horizontal2 = horizontal_1.default(this, 1);
  m.push.apply(m, __spreadArray(__spreadArray(__spreadArray(__spreadArray([], vertical1), vertical2), horizontal1), horizontal2));
  return m;
}

exports.bishopMoves = {
  diagonal: diagonal_1.default
};
exports.queenMoves = {
  diagonal: diagonal_1.default,
  verticalAndHorizontal: verticalAndHorizontal
};
exports.rookMoves = {
  verticalAndHorizontal: verticalAndHorizontal
};
},{"./diagonal":"classes/pieces/movements/diagonal.ts","./horizontal":"classes/pieces/movements/horizontal.ts","./vertical":"classes/pieces/movements/vertical.ts"}],"classes/pieces/Bishop.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var moves_1 = require("./movements/moves");

var Bishop =
/** @class */
function (_super) {
  __extends(Bishop, _super);

  function Bishop(color, position, size, square, symbol) {
    var _this = _super.call(this, "bishop", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    return _this;
  }

  Bishop.prototype.diagonal = function () {
    var topLeft = [];
    var topRight = [];
    var bottomRight = [];
    var bottomLeft = [];
    return {
      topLeft: topLeft,
      topRight: topRight,
      bottomLeft: bottomLeft,
      bottomRight: bottomRight
    };
  };

  Bishop.prototype.combineMoves = function () {
    var _a = this.diagonal(),
        topLeft = _a.topLeft,
        topRight = _a.topRight,
        bottomLeft = _a.bottomLeft,
        bottomRight = _a.bottomRight;

    var moves = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], topLeft), topRight), bottomLeft), bottomRight);

    this.availableMoves = moves;
    return moves;
  };

  return Bishop;
}(Piece_1.default);

exports.default = Bishop;
Object.assign(Bishop.prototype, moves_1.bishopMoves);
},{"./Piece":"classes/pieces/Piece.ts","./movements/moves":"classes/pieces/movements/moves.ts"}],"classes/pieces/King.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var sketch_1 = require("../../sketch");

var King =
/** @class */
function (_super) {
  __extends(King, _super);

  function King(color, position, size, square, symbol) {
    var _this = _super.call(this, "king", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    return _this;
  }

  King.prototype.moves = function () {
    var _a, _b;

    var moves = [];
    var file = this.square.coords.i;
    var rank = this.square.coords.j;
    var g = sketch_1.grid.grid;

    for (var j = -1; j <= 1; j++) {
      for (var i = -1; i <= 1; i++) {
        if (rank + j > -1 && rank + j < g.length && file + i > -1 && file + i < g[file].length) {
          var square = g[rank + j][file + i];

          if (!(i === 0 && j === 0)) {
            if (((_a = square.piece) === null || _a === void 0 ? void 0 : _a.color) !== this.color && ((_b = square.piece) === null || _b === void 0 ? void 0 : _b.type) !== "king") moves.push(square);
          }
        }
      }
    }

    return moves;
  };

  King.prototype.combineMoves = function () {
    var moves = this.moves();
    this.availableMoves = moves;
    return moves;
  };

  return King;
}(Piece_1.default);

exports.default = King;
},{"./Piece":"classes/pieces/Piece.ts","../../sketch":"sketch.ts"}],"classes/pieces/Knight.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var Grid_1 = require("../Grid");

var Knight =
/** @class */
function (_super) {
  __extends(Knight, _super);

  function Knight(color, position, size, square, symbol) {
    var _this = _super.call(this, "knight", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    _this.availableMoves = _this.move();
    return _this;
  }

  Knight.prototype.move = function () {
    var _this = this;

    var m = Grid_1.SQUARES.filter(function (square) {
      if (square.coords.i === _this.drawingCoords.i - 1 && square.coords.j === _this.drawingCoords.j - 2 || square.coords.i === _this.drawingCoords.i - 2 && square.coords.j === _this.drawingCoords.j - 1 || square.coords.i === _this.drawingCoords.i - 2 && square.coords.j === _this.drawingCoords.j + 1 || square.coords.i === _this.drawingCoords.i - 1 && square.coords.j === _this.drawingCoords.j + 2 || square.coords.i === _this.drawingCoords.i + 1 && square.coords.j === _this.drawingCoords.j - 2 || square.coords.i === _this.drawingCoords.i + 2 && square.coords.j === _this.drawingCoords.j - 1 || square.coords.i === _this.drawingCoords.i + 2 && square.coords.j === _this.drawingCoords.j + 1 || square.coords.i === _this.drawingCoords.i + 1 && square.coords.j === _this.drawingCoords.j + 2) {
        return square;
      }
    });
    return this.getPossibleMoves(m);
  };

  Knight.prototype.combineMoves = function () {
    var moves = this.move();
    this.availableMoves = moves;
    return moves;
  };

  return Knight;
}(Piece_1.default);

exports.default = Knight;
},{"./Piece":"classes/pieces/Piece.ts","../Grid":"classes/Grid.ts"}],"classes/pieces/Pawn.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var Grid_1 = require("../Grid");

var sketch_1 = require("../../sketch");

var Pawn =
/** @class */
function (_super) {
  __extends(Pawn, _super);

  function Pawn(color, position, size, square, symbol) {
    var _this = _super.call(this, "pawn", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    _this.canEatOnEnPassant = [];
    return _this;
  }

  Pawn.prototype.frontMove = function () {
    var order = this.color === "white" ? -1 : 1;
    var moves = [];
    var forwardSquare = Grid_1.SQUARES[this.square.index + 8 * order];

    if (forwardSquare && forwardSquare.piece === null) {
      // console.log(this, forwardSquare.piece);
      moves.push(forwardSquare);
    }

    if (this.history.length === 1 && forwardSquare.piece === null) {
      var secondSquare = Grid_1.SQUARES[this.square.index + 16 * order];
      if (secondSquare && secondSquare.piece === null) moves.push(secondSquare);
    }

    var enemies = [];
    var enemyOne = sketch_1.grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i + 1];
    var enemyTwo = sketch_1.grid.grid[this.drawingCoords.j + 1 * order][this.drawingCoords.i - 1];
    if (enemyOne && enemyOne.piece && enemyOne.piece.color !== this.color) enemies.push(enemyOne);
    if (enemyTwo && enemyTwo.piece && enemyTwo.piece.color !== this.color) enemies.push(enemyTwo);
    moves.push.apply(moves, enemies);
    return moves;
  };

  Pawn.prototype.didIMoveTwoSquares = function () {
    var prev = this.history[this.history.length - 2].rank;
    var last = this.history[this.history.length - 1].rank;

    if (prev && last) {
      return Math.abs(prev - last) === 2;
    }

    return false;
  };

  Pawn.prototype.enPassant = function () {
    var _this = this;

    var moves = [];
    var leftSquare = this.position.file === "A" ? null : Grid_1.SQUARES[this.square.index - 1];
    var rightSquare = this.position.file === "H" ? null : Grid_1.SQUARES[this.square.index + 1];
    var squares = [leftSquare, rightSquare];
    squares.forEach(function (square) {
      if (square && square.piece && square.piece.color !== _this.color && square.piece.type === "pawn" && square.piece.didIMoveTwoSquares()) {
        var order = _this.color === "white" ? -1 : 1;
        var eatOnSquare = Grid_1.SQUARES[square.index + 8 * order];

        if (eatOnSquare && !eatOnSquare.piece) {
          _this.canEatOnEnPassant.push({
            eatOnSquare: eatOnSquare,
            pieceToEat: square.piece
          });

          moves.push(eatOnSquare);
        }
      }
    });
    return moves;
  };

  Pawn.prototype.combineMoves = function () {
    var moves = this.frontMove();
    var enPassant = this.enPassant();
    this.availableMoves = __spreadArray(__spreadArray([], moves), enPassant);
    return moves;
  };

  return Pawn;
}(Piece_1.default);

exports.default = Pawn;
},{"./Piece":"classes/pieces/Piece.ts","../Grid":"classes/Grid.ts","../../sketch":"sketch.ts"}],"classes/pieces/Queen.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var moves_1 = require("./movements/moves");

var Queen =
/** @class */
function (_super) {
  __extends(Queen, _super);

  function Queen(color, position, size, square, symbol) {
    var _this = _super.call(this, "queen", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    return _this;
  }

  Queen.prototype.diagonal = function () {
    var topLeft = [];
    var topRight = [];
    var bottomRight = [];
    var bottomLeft = [];
    return {
      topLeft: topLeft,
      topRight: topRight,
      bottomLeft: bottomLeft,
      bottomRight: bottomRight
    };
  };

  Queen.prototype.verticalAndHorizontal = function () {
    var moves = [];
    return moves;
  };

  Queen.prototype.combineMoves = function () {
    var _a = this.diagonal(),
        topLeft = _a.topLeft,
        topRight = _a.topRight,
        bottomLeft = _a.bottomLeft,
        bottomRight = _a.bottomRight;

    var vAndh = this.verticalAndHorizontal();

    var moves = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], topLeft), topRight), bottomLeft), bottomRight), vAndh);

    this.availableMoves = moves;
    return moves;
  };

  return Queen;
}(Piece_1.default);

exports.default = Queen;
Object.assign(Queen.prototype, moves_1.queenMoves);
},{"./Piece":"classes/pieces/Piece.ts","./movements/moves":"classes/pieces/movements/moves.ts"}],"classes/pieces/Rook.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Piece_1 = __importDefault(require("./Piece"));

var moves_1 = require("./movements/moves");

var Rook =
/** @class */
function (_super) {
  __extends(Rook, _super);

  function Rook(color, position, size, square, symbol) {
    var _this = _super.call(this, "rook", square, symbol, color, position, size) || this;

    _this.color = color;
    _this.position = position;
    _this.size = size;
    _this.square = square;
    _this.symbol = symbol;
    return _this;
  }

  Rook.prototype.verticalAndHorizontal = function () {
    var m = [];
    return m;
  };

  Rook.prototype.combineMoves = function () {
    var moves = this.verticalAndHorizontal();
    this.availableMoves = moves;
    return moves;
  };

  return Rook;
}(Piece_1.default);

exports.default = Rook;
Object.assign(Rook.prototype, moves_1.rookMoves);
},{"./Piece":"classes/pieces/Piece.ts","./movements/moves":"classes/pieces/movements/moves.ts"}],"utils/fen.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Grid_1 = require("../classes/Grid");

var Bishop_1 = __importDefault(require("../classes/pieces/Bishop"));

var King_1 = __importDefault(require("../classes/pieces/King"));

var Knight_1 = __importDefault(require("../classes/pieces/Knight"));

var Pawn_1 = __importDefault(require("../classes/pieces/Pawn"));

var Piece_1 = require("../classes/pieces/Piece");

var Queen_1 = __importDefault(require("../classes/pieces/Queen"));

var Rook_1 = __importDefault(require("../classes/pieces/Rook"));

var FEN =
/** @class */
function () {
  function FEN(size) {
    this.size = size;
    this.currentFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"; // "b6b/8/8/8/r2nq3/2k5/8/B6B w KQkq - 0 1";
    // "b6b/8/6q1/8/r2n4/2k5/8/B6B w KQkq - 0 1";

    this.fenBoard = this.getFenBoard();
    this.fenHistory = [this.currentFen];
    this.move = this.fen.split(" ")[1];
    this.permissions = this.fen.split(" ")[2];
    this.enPassant = this.fen.split(" ")[3];
    this.halfMoveClock = this.fen.split(" ")[4];
    this.fullMove = this.fen.split(" ")[5];
    this.pieceTypeFromSymbol = new Map([["k", King_1.default], ["q", Queen_1.default], ["n", Knight_1.default], ["p", Pawn_1.default], ["r", Rook_1.default], ["b", Bishop_1.default]]);
  }

  Object.defineProperty(FEN.prototype, "fen", {
    get: function get() {
      return this.currentFen;
    },
    set: function set(fen) {
      this.currentFen = fen;
      this.fenBoard = this.getFenBoard();
      console.log(this.fenBoard, this.currentFen);
    },
    enumerable: false,
    configurable: true
  });

  FEN.prototype.getFenBoard = function () {
    return this.currentFen.split(" ")[0];
  }; // Inspired and copied from Sebastian Lague: https://youtu.be/U4ogK0MIzqk?t=151
  // Creates the pieces at the right squares based on the FEN


  FEN.prototype.load = function (squares) {
    // The FEN is read from left to right and from top to bottom (like reading a book), meaning from A8 to H1
    // The Board itself has to be created in that same order, left to right from the top
    var file = 0,
        rank = 7;
    var t = 0; // This iterates through the fen board, meaning the part with slashes

    for (var _i = 0, _a = this.fenBoard; _i < _a.length; _i++) {
      var symbol = _a[_i]; // If one of the character is a slash it means that we go to the next row (rank)

      if (symbol === "/") {
        file = 0;
        rank--;
        t++;
      } else {
        // If the character is digit, we sum the file with the digit represented
        // When a digit appears, it means that there are no pieces on n (digit) squares
        if (parseInt(symbol)) {
          file += parseInt(symbol);
        } else {
          // If there is piece
          // We check if the piece is black or white based on the case of the letter
          // (If Upper case: White; if lower case: black)
          var pieceColor = symbol === symbol.toUpperCase() ? "white" : "black"; // We check also what type of piece it is based on letter, see the map above.

          var Piece_2 = this.pieceTypeFromSymbol.get(symbol.toLowerCase()); // We create the piece at the right square
          // The first iterations, if initial position:
          // t (0) * 8 + file (0) = 0
          // t (0) * 8 + file (1) = 1
          // Until the next slash...
          // t (1) * 8 + file (0) = 8
          // t (1) * 8 + file (1) = 9
          // ...

          var square = squares[t * 8 + file];
          var piece = new Piece_2(pieceColor, {
            file: Grid_1.LETTERS[file],
            rank: rank + 1
          }, this.size, square, symbol);
          square.piece = piece;
          Piece_1.pieces.push(piece);
          file++;
        }
      }
    }
  };

  FEN.prototype.transFenBoardToZeros = function (fenBoard) {
    var translatedFen = fenBoard;

    for (var sliceIndex = 0; sliceIndex < translatedFen.length; sliceIndex++) {
      var slice = translatedFen[sliceIndex];
      var newSlice = "";

      for (var char = 0; char < slice.length; char++) {
        if (parseInt(slice[char])) {
          var num = parseInt(slice[char]);
          var stringOf0 = "";

          for (var a = 0; a < num; a++) {
            stringOf0 += "0";
          }

          newSlice += stringOf0;
        } else {
          newSlice += slice[char];
        }
      }

      translatedFen[sliceIndex] = newSlice;
    }

    return translatedFen;
  };

  FEN.prototype.transFenBoard = function (newFen) {
    var result = newFen;

    for (var sliceIndex = 0; sliceIndex < newFen.length; sliceIndex++) {
      var count = 0;
      var slice = newFen[sliceIndex];
      var newSlice = "";

      for (var char = 0; char < slice.length; char++) {
        if (slice[char] === "0") count++;else {
          if (count > 0) newSlice += count;
          newSlice += slice[char];
          count = 0;
        }
      }

      if (count > 0) newSlice += count;
      result[sliceIndex] = newSlice;
    }

    return result;
  };

  FEN.prototype.updateFenBoard = function (newSquare, piece) {
    console.log(newSquare, piece);
    var transFen = this.transFenBoardToZeros(this.fenBoard.split("/"));
    var fenPieceRank = transFen[piece.drawingCoords.j];
    fenPieceRank = fenPieceRank.substring(0, piece.drawingCoords.i) + "0" + fenPieceRank.substring(piece.drawingCoords.i + 1);
    transFen[piece.drawingCoords.j] = fenPieceRank;
    var newSquareRank = transFen[newSquare.coords.j];
    newSquareRank = newSquareRank.substring(0, newSquare.coords.i) + piece.symbol + newSquareRank.substring(newSquare.coords.i + 1);
    transFen[newSquare.coords.j] = newSquareRank;
    transFen = this.transFenBoard(transFen);
    return transFen.join("/");
  };

  FEN.prototype.addRemains = function (fenBoard) {
    return fenBoard + " " + this.move + " " + this.permissions + " " + this.enPassant + " " + this.halfMoveClock + " " + this.fullMove;
  };

  return FEN;
}();

exports.default = FEN;
},{"../classes/Grid":"classes/Grid.ts","../classes/pieces/Bishop":"classes/pieces/Bishop.ts","../classes/pieces/King":"classes/pieces/King.ts","../classes/pieces/Knight":"classes/pieces/Knight.ts","../classes/pieces/Pawn":"classes/pieces/Pawn.ts","../classes/pieces/Piece":"classes/pieces/Piece.ts","../classes/pieces/Queen":"classes/pieces/Queen.ts","../classes/pieces/Rook":"classes/pieces/Rook.ts"}],"sketch.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p5 = exports.fen = exports.grid = exports.whitePieces = exports.blackPieces = void 0;

var p5_1 = __importDefault(require("p5"));

var Grid_1 = require("./classes/Grid");

var Grid_2 = __importDefault(require("./classes/Grid"));

var fen_1 = __importDefault(require("./utils/fen"));

var Piece_1 = require("./classes/pieces/Piece");

var debug = document.getElementById("debug");
var debugBtn = document.getElementById("debugBtn");
debug.style.visibility = "hidden";

debugBtn.onclick = function () {
  debug.style.visibility = debug.style.visibility === "hidden" ? "visible" : "hidden";
};

exports.blackPieces = {
  images: []
};
exports.whitePieces = {
  images: []
};

var sketch = function sketch(p5) {
  var SIZE = 900;

  p5.preload = function () {
    var pieces = ["bishop", "king", "knight", "pawn", "queen", "rook"];

    for (var i = 0; i < 12; i++) {
      if (i <= 5) {
        var path = "./assets/pieces/black/" + pieces[i] + "_black.png";
        exports.blackPieces.images.push({
          image: p5.loadImage(path),
          path: path,
          piece: pieces[i]
        });
      } else {
        var piece = i - 6;
        var path = "./assets/pieces/white/" + pieces[piece] + "_white.png";
        exports.whitePieces.images.push({
          image: p5.loadImage(path),
          path: path,
          piece: pieces[piece]
        });
      }
    }
  };

  p5.setup = function () {
    var canvas = p5.createCanvas(SIZE, SIZE);
    canvas.parent("sketch");
    p5.background(255, 255, 255);
    exports.grid = new Grid_2.default(SIZE);
    console.log(exports.grid);
    exports.fen = new fen_1.default(SIZE / 8);
    exports.fen.load(Grid_1.SQUARES);
    Piece_1.pieces.forEach(function (piece) {
      piece.combineMoves();
    });
    console.log(Grid_1.SQUARES);
  };

  p5.draw = function () {
    exports.grid.show();
    Piece_1.LAST_MOVES.forEach(function (move) {
      return move.highlight = true;
    });
    Grid_1.SQUARES.forEach(function (square) {
      var _a;

      (_a = square.piece) === null || _a === void 0 ? void 0 : _a.show();
      square.showCheck();
      if (!Piece_1.LAST_MOVES.find(function (move) {
        return move === square;
      })) square.highlight = false;
    });
  };

  p5.mousePressed = function () {
    Piece_1.pieces.forEach(function (piece) {
      piece.clickedOn(p5.mouseX, p5.mouseY);
    });
    if (Piece_1.pieceSelected) Piece_1.pieceSelected.clickOnSquare(p5.mouseX, p5.mouseY, exports.fen);
  };
};

exports.p5 = new p5_1.default(sketch);
},{"p5":"../node_modules/p5/lib/p5.min.js","./classes/Grid":"classes/Grid.ts","./utils/fen":"utils/fen.ts","./classes/pieces/Piece":"classes/pieces/Piece.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44671" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sketch.ts"], null)
//# sourceMappingURL=/sketch.3938edfb.js.map