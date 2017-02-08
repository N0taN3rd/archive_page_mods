(function () {

  geolocation = {};
  geolocation.requestGeo = function (c) {
    geolocation.cdn3Requested = +new Date;
    var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement, a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = c;
    b.insertBefore(a, b.firstChild)
  };

  geolocation.requestGeo("\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/cdn3.optimizely.com/js/geo2.js");

  var optly = {nativity: {}};
  optly.nativity.getNativeGetElementsByClassName = function () {
    var a = document.getElementsByClassName;
    if (!optly.nativity.isNativeFunction(a))var a = (window.optimizely || {}).getElementsByClassName, b = (window.optly || {}).getElementsByClassName, a = optly.nativity.isNativeFunction(a) ? a : optly.nativity.isNativeFunction(b) ? b : null;
    return a
  };
  optly.nativity.isNativeFunction = function (a) {return a && -1 !== String(a).indexOf("[native code]")};
  optly.Cleanse = {};
  optly.Cleanse.each = function (a, b, d) {
    var h = !!Object.prototype.__lookupGetter__, e = !!Object.prototype.__lookupSetter__, c;
    for (c in a)if (a.hasOwnProperty(c)) {
      var f = h ? a.__lookupGetter__(c) : null, g = e ? a.__lookupSetter__(c) : null;
      try {b.call(d, c, !f ? a[c] : null, f, g)} catch (i) {}
    }
  };
  optly.Cleanse.finish = function () {
    if (optly.Cleanse.running) {
      optly.Cleanse.running = !1;
      optly.Cleanse.each(optly.Cleanse.types, function (a, d) {
        Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function (c, b) {
          d.prototype.__defineGetter__(c, b);
          optly.Cleanse.log("restored getter", a, c)
        });
        Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function (c, b) {
          d.prototype.__defineSetter__(c, b);
          optly.Cleanse.log("restored setter", a, c)
        });
        optly.Cleanse.each(optly.Cleanse.properties[a],
          function (b, f) {
            d.prototype[b] = f;
            optly.Cleanse.log("restored property", a, b)
          })
      });
      optly.Cleanse.unfixGetElementsByClassName();
      optly.Cleanse.log("finish");
      var a = window.console;
      if ((-1 !== WB_wombat_self_location.hash.indexOf("optimizely_log=true") || -1 !== WB_wombat_self_location.search.indexOf("optimizely_log=true")) && a && a.log)for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++)a.log(b[d])
    }
  };
  optly.Cleanse.log = function (a, b, d) {b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)};
  optly.Cleanse.start = function () {
    var a = WB_wombat_self_location.hostname;
    if (!(-1 !== a.indexOf("optimizely") && -1 === a.indexOf("edit") && -1 === a.indexOf("preview") && -1 === a.indexOf("test")))if (optly.Cleanse.running) optly.Cleanse.log("already running so didn't start"); else {
      optly.Cleanse.log("start");
      optly.Cleanse.running = !0;
      for (var b in optly.Cleanse.types)optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
      optly.Cleanse.each(optly.Cleanse.types, function (a, b) {
        optly.Cleanse.getters[a] = {};
        optly.Cleanse.properties[a] =
          {};
        optly.Cleanse.setters[a] = {};
        optly.Cleanse.each(b.prototype, function (e, c, f, g) {optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])})
      });
      optly.Cleanse.fixGetElementsByClassName();
      optly.Cleanse.hasRunStart = !0
    }
  };
  optly.Cleanse.fixGetElementsByClassName = function () {
    if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
      var a = optly.nativity.getNativeGetElementsByClassName();
      a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
    }
  };
  optly.Cleanse.unfixGetElementsByClassName = function () {optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)};
  optly.Cleanse.getElementsByClassName = null;
  optly.Cleanse.getters = {};
  optly.Cleanse.logs = [];
  optly.Cleanse.properties = {};
  optly.Cleanse.setters = {};
  optly.Cleanse.types = {Object_: Object};
  window.optly = window.optly || {};
  window.optly.Cleanse = {finish: optly.Cleanse.finish, logs: optly.Cleanse.logs, start: optly.Cleanse.start};
  optly.Cleanse.start();
  /*

   jQuery JavaScript Library v1.11.3
   http://jquery.com/

   Includes Sizzle.js
   http://sizzlejs.com/

   Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
   Released under the MIT license
   http://jquery.org/license

   Date: 2015-11-13T20:27Z
   */
  (function (o, ra) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = o.document ? ra(o, !0) : function (o) {
          if (!o.document)throw Error("jQuery requires a window with a document");
          return ra(o)
        } : ra(o)
  })("undefined" !== typeof window ? window : this, function (o, ra) {
    function bb (a) {
      var b = "length" in a && a.length, d = c.type(a);
      return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function cb (a, b, d) {
      if (c.isFunction(b))return c.grep(a, function (a,
                                                     c) {return !!b.call(a, c, a) !== d});
      if (b.nodeType)return c.grep(a, function (a) {return a === b !== d});
      if ("string" === typeof b) {
        if (Wc.test(b))return c.filter(b, a, d);
        b = c.filter(b, a)
      }
      return c.grep(a, function (a) {return 0 <= c.inArray(a, b) !== d})
    }

    function Hb (a, b) {
      do a = a[b]; while (a && 1 !== a.nodeType);
      return a
    }

    function Ib () {m.addEventListener ? (m.removeEventListener("DOMContentLoaded", P, !1), o.removeEventListener("load", P, !1)) : (m.detachEvent("onreadystatechange", P), o.detachEvent("onload", P))}

    function P () {
      if (m.addEventListener ||
        "load" === event.type || "complete" === m.readyState) Ib(), c.ready()
    }

    function Jb (a, b, d) {
      if (void 0 === d && 1 === a.nodeType)if (d = "data-" + b.replace(Xc, "-$1").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
        try {d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Yc.test(d) ? c.parseJSON(d) : d} catch (e) {}
        c.data(a, b, d)
      } else d = void 0;
      return d
    }

    function db (a) {
      for (var b in a)if (!("data" === b && c.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
      return !0
    }

    function Kb (a, b, d, e) {
      if (c.acceptData(a)) {
        var f = c.expando, g = a.nodeType,
          h = g ? c.cache : a, i = g ? a[f] : a[f] && f;
        if (i && h[i] && (e || h[i].data) || !(void 0 === d && "string" === typeof b)) {
          i || (i = g ? a[f] = Q.pop() || c.guid++ : f);
          h[i] || (h[i] = g ? {} : {toJSON: c.noop});
          if ("object" === typeof b || "function" === typeof b) e ? h[i] = c.extend(h[i], b) : h[i].data = c.extend(h[i].data, b);
          a = h[i];
          e || (a.data || (a.data = {}), a = a.data);
          void 0 !== d && (a[c.camelCase(b)] = d);
          "string" === typeof b ? (d = a[b], null == d && (d = a[c.camelCase(b)])) : d = a;
          return d
        }
      }
    }

    function Lb (a, b, d) {
      if (c.acceptData(a)) {
        var e, f, g = a.nodeType, h = g ? c.cache : a, i = g ? a[c.expando] :
          c.expando;
        if (h[i]) {
          if (b && (e = d ? h[i] : h[i].data)) {
            c.isArray(b) ? b = b.concat(c.map(b, c.camelCase)) : b in e ? b = [b] : (b = c.camelCase(b), b = b in e ? [b] : b.split(" "));
            for (f = b.length; f--;)delete e[b[f]];
            if (d ? !db(e) : !c.isEmptyObject(e))return
          }
          if (!d && (delete h[i].data, !db(h[i])))return;
          g ? c.cleanData([a], !0) : n.deleteExpando || h != h.window ? delete h[i] : h[i] = null
        }
      }
    }

    function Aa () {return !0}

    function ja () {return !1}

    function Mb () {try {return m.activeElement} catch (a) {}}

    function Nb (a) {
      var b = Ob.split("|"), a = a.createDocumentFragment();
      if (a.createElement)for (; b.length;)a.createElement(b.pop());
      return a
    }

    function w (a, b) {
      var d, e, f = 0, g = typeof a.getElementsByTagName !== C ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== C ? a.querySelectorAll(b || "*") : void 0;
      if (!g) {
        g = [];
        for (d = a.childNodes || a; null != (e = d[f]); f++)!b || c.nodeName(e, b) ? g.push(e) : c.merge(g, w(e, b))
      }
      return void 0 === b || b && c.nodeName(a, b) ? c.merge([a], g) : g
    }

    function Zc (a) {eb.test(a.type) && (a.defaultChecked = a.checked)}

    function Pb (a, b) {
      return c.nodeName(a, "table") && c.nodeName(11 !==
      b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Qb (a) {
      a.type = (null !== c.find.attr(a, "type")) + "/" + a.type;
      return a
    }

    function Rb (a) {
      var b = $c.exec(a.type);
      b ? a.type = b[1] : a.removeAttribute("type");
      return a
    }

    function fb (a, b) {for (var d, e = 0; null != (d = a[e]); e++)c._data(d, "globalEval", !b || c._data(b[e], "globalEval"))}

    function Sb (a, b) {
      if (1 === b.nodeType && c.hasData(a)) {
        var d, e, f;
        e = c._data(a);
        var g = c._data(b, e), h = e.events;
        if (h)for (d in delete g.handle,
          g.events = {}, h) {
          e = 0;
          for (f = h[d].length; e < f; e++)c.event.add(b, d, h[d][e])
        }
        g.data && (g.data = c.extend({}, g.data))
      }
    }

    function Tb (a, b) {
      var d, e = c(b.createElement(a)).appendTo(b.body), f = o.getDefaultComputedStyle && (d = o.getDefaultComputedStyle(e[0])) ? d.display : c.css(e[0], "display");
      e.detach();
      return f
    }

    function Ba (a) {
      var b = m, d = Ub[a];
      if (!d) {
        d = Tb(a, b);
        if ("none" === d || !d) sa = (sa || c("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (sa[0].contentWindow || sa[0].contentDocument).document, b.write(),
          b.close(), d = Tb(a, b), sa.detach();
        Ub[a] = d
      }
      return d
    }

    function Vb (a, b) {
      return {
        get: function () {
          var d = a();
          if (null != d)if (d) delete this.get; else return (this.get = b).apply(this, arguments)
        }
      }
    }

    function Wb (a, b) {
      if (b in a)return b;
      for (var d = b.charAt(0).toUpperCase() + b.slice(1), e = b, c = Xb.length; c--;)if (b = Xb[c] + d, b in a)return b;
      return e
    }

    function Yb (a, b) {
      for (var d, e, f, g = [], h = 0, i = a.length; h < i; h++)if (e = a[h], e.style)if (g[h] = c._data(e, "olddisplay"), d = e.style.display, b) !g[h] && "none" === d && (e.style.display = ""), "" === e.style.display &&
      ta(e) && (g[h] = c._data(e, "olddisplay", Ba(e.nodeName))); else if (f = ta(e), d && "none" !== d || !f) c._data(e, "olddisplay", f ? d : c.css(e, "display"));
      for (h = 0; h < i; h++)if (e = a[h], e.style && (!b || "none" === e.style.display || "" === e.style.display)) e.style.display = b ? g[h] || "" : "none";
      return a
    }

    function Zb (a, b, d) {return (a = ad.exec(b)) ? Math.max(0, a[1] - (d || 0)) + (a[2] || "px") : b}

    function $b (a, b, d, e, f) {
      for (var b = d === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > b; b += 2)"margin" === d && (g += c.css(a, d + X[b], !0, f)), e ? ("content" === d && (g -= c.css(a,
          "padding" + X[b], !0, f)), "margin" !== d && (g -= c.css(a, "border" + X[b] + "Width", !0, f))) : (g += c.css(a, "padding" + X[b], !0, f), "padding" !== d && (g += c.css(a, "border" + X[b] + "Width", !0, f)));
      return g
    }

    function ac (a, b, d) {
      var e = !0, f = "width" === b ? a.offsetWidth : a.offsetHeight, g = Y(a), h = n.boxSizing && "border-box" === c.css(a, "boxSizing", !1, g);
      if (0 >= f || null == f) {
        f = Z(a, b, g);
        if (0 > f || null == f) f = a.style[b];
        if (Ca.test(f))return f;
        e = h && (n.boxSizingReliable() || f === a.style[b]);
        f = parseFloat(f) || 0
      }
      return f + $b(a, b, d || (h ? "border" : "content"), e, g) +
        "px"
    }

    function x (a, b, d, e, c) {return new x.prototype.init(a, b, d, e, c)}

    function bc () {
      setTimeout(function () {ka = void 0});
      return ka = c.now()
    }

    function Da (a, b) {
      for (var d, e = {height: a}, c = 0, b = b ? 1 : 0; 4 > c; c += 2 - b)d = X[c], e["margin" + d] = e["padding" + d] = a;
      b && (e.opacity = e.width = a);
      return e
    }

    function cc (a, b, d) {for (var e, c = (ua[b] || []).concat(ua["*"]), g = 0, h = c.length; g < h; g++)if (e = c[g].call(d, b, a))return e}

    function dc (a, b, d) {
      var e, f, g = 0, h = Ea.length, i = c.Deferred().always(function () {delete l.elem}), l = function () {
        if (f)return !1;
        for (var b =
          ka || bc(), b = Math.max(0, j.startTime + j.duration - b), d = 1 - (b / j.duration || 0), e = 0, c = j.tweens.length; e < c; e++)j.tweens[e].run(d);
        i.notifyWith(a, [j, d, b]);
        if (1 > d && c)return b;
        i.resolveWith(a, [j]);
        return !1
      }, j = i.promise({
        elem: a,
        props: c.extend({}, b),
        opts: c.extend(!0, {specialEasing: {}}, d),
        originalProperties: b,
        originalOptions: d,
        startTime: ka || bc(),
        duration: d.duration,
        tweens: [],
        createTween: function (b, d) {
          var e = c.Tween(a, j.opts, b, d, j.opts.specialEasing[b] || j.opts.easing);
          j.tweens.push(e);
          return e
        },
        stop: function (b) {
          var d =
            0, e = b ? j.tweens.length : 0;
          if (f)return this;
          for (f = !0; d < e; d++)j.tweens[d].run(1);
          b ? i.resolveWith(a, [j, b]) : i.rejectWith(a, [j, b]);
          return this
        }
      }), b = j.props, d = j.opts.specialEasing, q, k, p, D;
      for (e in b)if (q = c.camelCase(e), k = d[q], p = b[e], c.isArray(p) && (k = p[1], p = b[e] = p[0]), e !== q && (b[q] = p, delete b[e]), (D = c.cssHooks[q]) && "expand" in D)for (e in p = D.expand(p), delete b[q], p)e in b || (b[e] = p[e], d[e] = k); else d[q] = k;
      for (; g < h; g++)if (e = Ea[g].call(j, a, b, j.opts))return e;
      c.map(b, cc, j);
      c.isFunction(j.opts.start) && j.opts.start.call(a,
        j);
      c.fx.timer(c.extend(l, {elem: a, anim: j, queue: j.opts.queue}));
      return j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function ec (a) {
      return function (b, d) {
        "string" !== typeof b && (d = b, b = "*");
        var e, f = 0, g = b.toLowerCase().match(M) || [];
        if (c.isFunction(d))for (; e = g[f++];)"+" === e.charAt(0) ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(d)) : (a[e] = a[e] || []).push(d)
      }
    }

    function fc (a, b, d, e) {
      function f (i) {
        var l;
        g[i] = !0;
        c.each(a[i] || [], function (a, c) {
          var i = c(b, d, e);
          if ("string" === typeof i && !h && !g[i])return b.dataTypes.unshift(i), f(i), !1;
          if (h)return !(l = i)
        });
        return l
      }

      var g = {}, h = a === gb;
      return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function hb (a, b) {
      var d, e, f = c.ajaxSettings.flatOptions || {};
      for (e in b)void 0 !== b[e] && ((f[e] ? a : d || (d = {}))[e] = b[e]);
      d && c.extend(!0, a, d);
      return a
    }

    function ib (a, b, d, e) {
      var f;
      if (c.isArray(b)) c.each(b, function (b, c) {d || cd.test(a) ? e(a, c) : ib(a + "[" + ("object" === typeof c ? b : "") + "]", c, d, e)}); else if (!d && "object" === c.type(b))for (f in b)ib(a + "[" + f + "]", b[f], d, e); else e(a,
        b)
    }

    function gc () {try {return new o.XMLHttpRequest} catch (a) {}}

    function hc (a) {return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1}

    var Q = [], R = Q.slice, ic = Q.concat, jb = Q.push, jc = Q.indexOf, Fa = {}, dd = Fa.toString, la = Fa.hasOwnProperty, n = {}, c = function (a, b) {return new c.fn.init(a, b)}, ed = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, fd = /^-ms-/, gd = /-([\da-z])/gi, hd = function (a, b) {return b.toUpperCase()};
    c.fn = c.prototype = {
      jquery: "1.11.3",
      constructor: c,
      selector: "",
      length: 0,
      toArray: function () {return R.call(this)},
      get: function (a) {return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)},
      pushStack: function (a) {
        a = c.merge(this.constructor(), a);
        a.prevObject = this;
        a.context = this.context;
        return a
      },
      each: function (a, b) {return c.each(this, a, b)},
      map: function (a) {return this.pushStack(c.map(this, function (b, d) {return a.call(b, d, b)}))},
      slice: function () {return this.pushStack(R.apply(this, arguments))},
      first: function () {return this.eq(0)},
      last: function () {return this.eq(-1)},
      eq: function (a) {
        var b = this.length, a = +a + (0 > a ? b : 0);
        return this.pushStack(0 <=
        a && a < b ? [this[a]] : [])
      },
      end: function () {return this.prevObject || this.constructor(null)},
      push: jb,
      sort: Q.sort,
      splice: Q.splice
    };
    c.extend = c.fn.extend = function () {
      var a, b, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, l = !1;
      "boolean" === typeof g && (l = g, g = arguments[h] || {}, h++);
      "object" !== typeof g && !c.isFunction(g) && (g = {});
      h === i && (g = this, h--);
      for (; h < i; h++)if (null != (f = arguments[h]))for (e in f)a = g[e], d = f[e], g !== d && (l && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, a = a && c.isArray(a) ? a : []): a= a && c.isPlainObject(a) ?
            a : {}, g[e] = c.extend(l, a, d)) : void 0 !== d && (g[e] = d));
      return g
    };
    c.extend({
      expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {throw Error(a);},
      noop: function () {},
      isFunction: function (a) {return "function" === c.type(a)},
      isArray: Array.isArray || function (a) {return "array" === c.type(a)},
      isWindow: function (a) {return null != a && a == a.window},
      isNumeric: function (a) {return !c.isArray(a) && 0 <= a - parseFloat(a) + 1},
      isEmptyObject: function (a) {
        for (var b in a)return !1;
        return !0
      },
      isPlainObject: function (a) {
        var b;
        if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a))return !1;
        try {if (a.constructor && !la.call(a, "constructor") && !la.call(a.constructor.prototype, "isPrototypeOf"))return !1} catch (d) {return !1}
        if (n.ownLast)for (b in a)return la.call(a, b);
        for (b in a);
        return void 0 === b || la.call(a, b)
      },
      type: function (a) {return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Fa[dd.call(a)] || "object" : typeof a},
      globalEval: function (a) {a && c.trim(a) && (o.execScript || function (a) {o.eval.call(o, a)})(a)},
      camelCase: function (a) {
        return a.replace(fd,
          "ms-").replace(gd, hd)
      },
      nodeName: function (a, b) {return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()},
      each: function (a, b, d) {
        var e, c = 0, g = a.length;
        e = bb(a);
        if (d)if (e)for (; c < g && !(e = b.apply(a[c], d), !1 === e); c++); else for (c in a) {if (e = b.apply(a[c], d), !1 === e)break} else if (e)for (; c < g && !(e = b.call(a[c], c, a[c]), !1 === e); c++); else for (c in a)if (e = b.call(a[c], c, a[c]), !1 === e)break;
        return a
      },
      trim: function (a) {return null == a ? "" : (a + "").replace(ed, "")},
      makeArray: function (a, b) {
        var d = b || [];
        null != a && (bb(Object(a)) ?
          c.merge(d, "string" === typeof a ? [a] : a) : jb.call(d, a));
        return d
      },
      inArray: function (a, b, d) {
        var e;
        if (b) {
          if (jc)return jc.call(b, a, d);
          e = b.length;
          for (d = d ? 0 > d ? Math.max(0, e + d) : d : 0; d < e; d++)if (d in b && b[d] === a)return d
        }
        return -1
      },
      merge: function (a, b) {
        for (var d = +b.length, e = 0, c = a.length; e < d;)a[c++] = b[e++];
        if (d !== d)for (; void 0 !== b[e];)a[c++] = b[e++];
        a.length = c;
        return a
      },
      grep: function (a, b, d) {
        for (var e = [], c = 0, g = a.length, h = !d; c < g; c++)d = !b(a[c], c), d !== h && e.push(a[c]);
        return e
      },
      map: function (a, b, d) {
        var c, f = 0, g = a.length, h =
          [];
        if (bb(a))for (; f < g; f++)c = b(a[f], f, d), null != c && h.push(c); else for (f in a)c = b(a[f], f, d), null != c && h.push(c);
        return ic.apply([], h)
      },
      guid: 1,
      proxy: function (a, b) {
        var d, e;
        "string" === typeof b && (e = a[b], b = a, a = e);
        if (c.isFunction(a))return d = R.call(arguments, 2), e = function () {return a.apply(b || this, d.concat(R.call(arguments)))}, e.guid = a.guid = a.guid || c.guid++, e
      },
      now: function () {return +new Date},
      support: n
    });
    c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
      Fa["[object " +
      b + "]"] = b.toLowerCase()
    });
    var kb = o, r = function (a, b, d, c) {
        var f, g, h, i, l;
        (b ? b.ownerDocument || b : G) !== z && $(b);
        b = b || z;
        d = d || [];
        i = b.nodeType;
        if ("string" !== typeof a || !a || 1 !== i && 9 !== i && 11 !== i)return d;
        if (!c && K) {
          if (11 !== i && (f = id.exec(a)))if (h = f[1])if (9 === i)if ((g = b.getElementById(h)) && g.parentNode) {if (g.id === h)return d.push(g), d} else return d; else {if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && va(b, g) && g.id === h)return d.push(g), d} else {
            if (f[2])return S.apply(d, b.getElementsByTagName(a)), d;
            if ((h = f[3]) &&
              t.getElementsByClassName)return S.apply(d, b.getElementsByClassName(h)), d
          }
          if (t.qsa && (!y || !y.test(a))) {
            g = f = u;
            h = b;
            l = 1 !== i && a;
            if (1 === i && "object" !== b.nodeName.toLowerCase()) {
              i = wa(a);
              (f = b.getAttribute("id")) ? g = f.replace(jd, "\\$&") : b.setAttribute("id", g);
              g = "[id='" + g + "'] ";
              for (h = i.length; h--;)i[h] = g + Ga(i[h]);
              h = lb.test(a) && mb(b.parentNode) || b;
              l = i.join(",")
            }
            if (l)try {return S.apply(d, h.querySelectorAll(l)), d} catch (j) {} finally {f || b.removeAttribute("id")}
          }
        }
        return kc(a.replace(Ha, "$1"), b, d, c)
      }, nb = function () {
        function a (d,
                    c) {
          b.push(d + " ") > s.cacheLength && delete a[b.shift()];
          return a[d + " "] = c
        }

        var b = [];
        return a
      }, F = function (a) {
        a[u] = !0;
        return a
      }, L = function (a) {
        var b = z.createElement("div");
        try {return !!a(b)} catch (d) {return !1} finally {b.parentNode && b.parentNode.removeChild(b)}
      }, ob = function (a, b) {for (var d = a.split("|"), c = a.length; c--;)s.attrHandle[d[c]] = b}, mc = function (a, b) {
        var d = b && a, c = d && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || lc) - (~a.sourceIndex || lc);
        if (c)return c;
        if (d)for (; d = d.nextSibling;)if (d === b)return -1;
        return a ?
          1 : -1
      }, kd = function (a) {return function (b) {return "input" === b.nodeName.toLowerCase() && b.type === a}}, ld = function (a) {
        return function (b) {
          var d = b.nodeName.toLowerCase();
          return ("input" === d || "button" === d) && b.type === a
        }
      }, aa = function (a) {
        return F(function (b) {
          b = +b;
          return F(function (d, c) {for (var f, g = a([], d.length, b), h = g.length; h--;)if (d[f = g[h]]) d[f] = !(c[f] = d[f])})
        })
      }, mb = function (a) {return a && "undefined" !== typeof a.getElementsByTagName && a}, nc = function () {}, Ga = function (a) {
        for (var b = 0, d = a.length, c = ""; b < d; b++)c += a[b].value;
        return c
      }, pb = function (a, b, d) {
        var c = b.dir, f = d && "parentNode" === c, g = md++;
        return b.first ? function (b, d, g) {for (; b = b[c];)if (1 === b.nodeType || f)return a(b, d, g)} : function (b, d, l) {
            var j, q, k = [H, g];
            if (l)for (; b = b[c];) {if ((1 === b.nodeType || f) && a(b, d, l))return !0} else for (; b = b[c];)if (1 === b.nodeType || f) {
              q = b[u] || (b[u] = {});
              if ((j = q[c]) && j[0] === H && j[1] === g)return k[2] = j[2];
              q[c] = k;
              if (k[2] = a(b, d, l))return !0
            }
          }
      }, qb = function (a) {
        return 1 < a.length ? function (b, d, c) {
            for (var f = a.length; f--;)if (!a[f](b, d, c))return !1;
            return !0
          } : a[0]
      },
      Ia = function (a, b, d, c, f) {
        for (var g, h = [], i = 0, l = a.length, j = null != b; i < l; i++)if (g = a[i])if (!d || d(g, c, f)) h.push(g), j && b.push(i);
        return h
      }, rb = function (a, b, d, c, f, g) {
        c && !c[u] && (c = rb(c));
        f && !f[u] && (f = rb(f, g));
        return F(function (g, i, l, j) {
          var q, k, p = [], D = [], n = i.length, m;
          if (!(m = g)) {
            m = b || "*";
            for (var o = l.nodeType ? [l] : l, s = [], t = 0, u = o.length; t < u; t++)r(m, o[t], s);
            m = s
          }
          m = a && (g || !b) ? Ia(m, p, a, l, j) : m;
          o = d ? f || (g ? a : n || c) ? [] : i : m;
          d && d(m, o, l, j);
          if (c) {
            q = Ia(o, D);
            c(q, [], l, j);
            for (l = q.length; l--;)if (k = q[l]) o[D[l]] = !(m[D[l]] = k)
          }
          if (g) {
            if (f ||
              a) {
              if (f) {
                q = [];
                for (l = o.length; l--;)if (k = o[l]) q.push(m[l] = k);
                f(null, o = [], q, j)
              }
              for (l = o.length; l--;)if ((k = o[l]) && -1 < (q = f ? ca(g, k) : p[l])) g[q] = !(i[q] = k)
            }
          } else o = Ia(o === i ? o.splice(n, o.length) : o), f ? f(null, i, o, j) : S.apply(i, o)
        })
      }, sb = function (a) {
        var b, d, c, f = a.length, g = s.relative[a[0].type];
        d = g || s.relative[" "];
        for (var h = g ? 1 : 0, i = pb(function (a) {return a === b}, d, !0), l = pb(function (a) {return -1 < ca(b, a)}, d, !0), j = [function (a, d, c) {
          a = !g && (c || d !== Ja) || ((b = d).nodeType ? i(a, d, c) : l(a, d, c));
          b = null;
          return a
        }]; h < f; h++)if (d = s.relative[a[h].type]) j =
          [pb(qb(j), d)]; else {
          d = s.filter[a[h].type].apply(null, a[h].matches);
          if (d[u]) {
            for (c = ++h; c < f && !s.relative[a[c].type]; c++);
            return rb(1 < h && qb(j), 1 < h && Ga(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(Ha, "$1"), d, h < c && sb(a.slice(h, c)), c < f && sb(a = a.slice(c)), c < f && Ga(a))
          }
          j.push(d)
        }
        return qb(j)
      }, ma, t, s, Ka, oc, wa, tb, kc, Ja, T, na, $, z, J, K, y, da, La, va, u = "sizzle" + 1 * new Date, G = kb.document, H = 0, md = 0, pc = nb(), qc = nb(), rc = nb(), ub = function (a, b) {
        a === b && (na = !0);
        return 0
      }, lc = -2147483648, nd = {}.hasOwnProperty, ea =
        [], od = ea.pop, pd = ea.push, S = ea.push, sc = ea.slice, ca = function (a, b) {
        for (var d = 0, c = a.length; d < c; d++)if (a[d] === b)return d;
        return -1
      }, tc = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), uc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tc + "))|)[\\x20\\t\\r\\n\\f]*\\]", vb = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        uc + ")*)|.*)\\)|)", qd = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), Ha = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), rd = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, sd = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, td = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), ud = RegExp(vb), vd = RegExp("^" + tc + "$"), Ma = {
        ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
        TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") +
          ")"),
        ATTR: RegExp("^" + uc),
        PSEUDO: RegExp("^" + vb),
        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
        bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
        needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
          "i")
      }, wd = /^(?:input|select|textarea|button)$/i, xd = /^h\d$/i, xa = /^[^{]+\{\s*\[native \w/, id = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, lb = /[+~]/, jd = /'|\\/g, N = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), O = function (a, b, d) {
        a = "0x" + b - 65536;
        return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
      }, vc = function () {$()};
    try {S.apply(ea = sc.call(G.childNodes), G.childNodes), ea[G.childNodes.length].nodeType} catch (ee) {
      S = {
        apply: ea.length ? function (a,
                                     b) {pd.apply(a, sc.call(b))} : function (a, b) {
            for (var d = a.length, c = 0; a[d++] = b[c++];);
            a.length = d - 1
          }
      }
    }
    t = r.support = {};
    oc = r.isXML = function (a) {return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1};
    $ = r.setDocument = function (a) {
      var b = a ? a.ownerDocument || a : G;
      if (b === z || 9 !== b.nodeType || !b.documentElement)return z;
      z = b;
      J = b.documentElement;
      (a = b.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", vc, !1) : a.attachEvent && a.attachEvent("onunload", vc));
      K = !oc(b);
      t.attributes = L(function (a) {
        a.className =
          "i";
        return !a.getAttribute("className")
      });
      t.getElementsByTagName = L(function (a) {
        a.appendChild(b.createComment(""));
        return !a.getElementsByTagName("*").length
      });
      t.getElementsByClassName = xa.test(b.getElementsByClassName);
      t.getById = L(function (a) {
        J.appendChild(a).id = u;
        return !b.getElementsByName || !b.getElementsByName(u).length
      });
      t.getById ? (s.find.ID = function (a, b) {
          if ("undefined" !== typeof b.getElementById && K) {
            var c = b.getElementById(a);
            return c && c.parentNode ? [c] : []
          }
        }, s.filter.ID = function (a) {
          var b = a.replace(N,
            O);
          return function (a) {return a.getAttribute("id") === b}
        }) : (delete s.find.ID, s.filter.ID = function (a) {
          var b = a.replace(N, O);
          return function (a) {return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b}
        });
      s.find.TAG = t.getElementsByTagName ? function (a, b) {
          if (typeof b.getElementsByTagName !== "undefined")return b.getElementsByTagName(a);
          if (t.qsa)return b.querySelectorAll(a)
        } : function (a, b) {
          var c, g = [], h = 0, i = b.getElementsByTagName(a);
          if (a === "*") {
            for (; c = i[h++];)c.nodeType === 1 && g.push(c);
            return g
          }
          return i
        };
      s.find.CLASS = t.getElementsByClassName && function (a, b) {if (K)return b.getElementsByClassName(a)};
      da = [];
      y = [];
      if (t.qsa = xa.test(b.querySelectorAll)) L(function (a) {
        J.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>";
        a.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
        a.querySelectorAll("[selected]").length || y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
        a.querySelectorAll("[id~=" + u + "-]").length || y.push("~=");
        a.querySelectorAll(":checked").length || y.push(":checked");
        a.querySelectorAll("a#" + u + "+*").length || y.push(".#.+[+~]")
      }), L(function (a) {
        var c = b.createElement("input");
        c.setAttribute("type", "hidden");
        a.appendChild(c).setAttribute("name", "D");
        a.querySelectorAll("[name=d]").length && y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
        a.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled");
        a.querySelectorAll("*,:x");
        y.push(",.*:")
      });
      (t.matchesSelector =
        xa.test(La = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && L(function (a) {
        t.disconnectedMatch = La.call(a, "div");
        La.call(a, "[s!='']:x");
        da.push("!=", vb)
      });
      y = y.length && RegExp(y.join("|"));
      da = da.length && RegExp(da.join("|"));
      va = (a = xa.test(J.compareDocumentPosition)) || xa.test(J.contains) ? function (a, b) {
          var c = a.nodeType === 9 ? a.documentElement : a, g = b && b.parentNode;
          return a === g || !(!g || !(g.nodeType === 1 && (c.contains ? c.contains(g) : a.compareDocumentPosition && a.compareDocumentPosition(g) &
              16)))
        } : function (a, b) {
          if (b)for (; b = b.parentNode;)if (b === a)return true;
          return false
        };
      ub = a ? function (a, c) {
          if (a === c) {
            na = true;
            return 0
          }
          var f = !a.compareDocumentPosition - !c.compareDocumentPosition;
          if (f)return f;
          f = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
          return f & 1 || !t.sortDetached && c.compareDocumentPosition(a) === f ? a === b || a.ownerDocument === G && va(G, a) ? -1 : c === b || c.ownerDocument === G && va(G, c) ? 1 : T ? ca(T, a) - ca(T, c) : 0 : f & 4 ? -1 : 1
        } : function (a, c) {
          if (a === c) {
            na = true;
            return 0
          }
          var f, g = 0;
          f =
            a.parentNode;
          var h = c.parentNode, i = [a], l = [c];
          if (!f || !h)return a === b ? -1 : c === b ? 1 : f ? -1 : h ? 1 : T ? ca(T, a) - ca(T, c) : 0;
          if (f === h)return mc(a, c);
          for (f = a; f = f.parentNode;)i.unshift(f);
          for (f = c; f = f.parentNode;)l.unshift(f);
          for (; i[g] === l[g];)g++;
          return g ? mc(i[g], l[g]) : i[g] === G ? -1 : l[g] === G ? 1 : 0
        };
      return b
    };
    r.matches = function (a, b) {return r(a, null, null, b)};
    r.matchesSelector = function (a, b) {
      (a.ownerDocument || a) !== z && $(a);
      b = b.replace(td, "='$1']");
      if (t.matchesSelector && K && (!da || !da.test(b)) && (!y || !y.test(b)))try {
        var d = La.call(a,
          b);
        if (d || t.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
      } catch (c) {}
      return 0 < r(b, z, null, [a]).length
    };
    r.contains = function (a, b) {
      (a.ownerDocument || a) !== z && $(a);
      return va(a, b)
    };
    r.attr = function (a, b) {
      (a.ownerDocument || a) !== z && $(a);
      var d = s.attrHandle[b.toLowerCase()], d = d && nd.call(s.attrHandle, b.toLowerCase()) ? d(a, b, !K) : void 0;
      return void 0 !== d ? d : t.attributes || !K ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    };
    r.error = function (a) {
      throw Error("Syntax error, unrecognized expression: " +
        a);
    };
    r.uniqueSort = function (a) {
      var b, d = [], c = 0, f = 0;
      na = !t.detectDuplicates;
      T = !t.sortStable && a.slice(0);
      a.sort(ub);
      if (na) {
        for (; b = a[f++];)b === a[f] && (c = d.push(f));
        for (; c--;)a.splice(d[c], 1)
      }
      T = null;
      return a
    };
    Ka = r.getText = function (a) {
      var b, d = "", c = 0;
      if (b = a.nodeType)if (1 === b || 9 === b || 11 === b) {
        if ("string" === typeof a.textContent)return a.textContent;
        for (a = a.firstChild; a; a = a.nextSibling)d += Ka(a)
      } else {if (3 === b || 4 === b)return a.nodeValue} else for (; b = a[c++];)d += Ka(b);
      return d
    };
    s = r.selectors = {
      cacheLength: 50,
      createPseudo: F,
      match: Ma,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (a) {
          a[1] = a[1].replace(N, O);
          a[3] = (a[3] || a[4] || a[5] || "").replace(N, O);
          "~=" === a[2] && (a[3] = " " + a[3] + " ");
          return a.slice(0, 4)
        }, CHILD: function (a) {
          a[1] = a[1].toLowerCase();
          "nth" === a[1].slice(0, 3) ? (a[3] || r.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && r.error(a[0]);
          return a
        }, PSEUDO: function (a) {
          var b, d = !a[6] && a[2];
          if (Ma.CHILD.test(a[0]))return null;
          if (a[3]) a[2] = a[4] || a[5] || ""; else if (d && ud.test(d) && (b = wa(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length)) a[0] = a[0].slice(0, b), a[2] = d.slice(0, b);
          return a.slice(0, 3)
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(N, O).toLowerCase();
          return "*" === a ? function () {return !0} : function (a) {return a.nodeName && a.nodeName.toLowerCase() === b}
        }, CLASS: function (a) {
          var b = pc[a + " "];
          return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) &&
            pc(a, function (a) {return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")})
        }, ATTR: function (a, b, d) {
          return function (c) {
            c = r.attr(c, a);
            if (null == c)return "!=" === b;
            if (!b)return !0;
            c += "";
            return "=" === b ? c === d : "!=" === b ? c !== d : "^=" === b ? d && 0 === c.indexOf(d) : "*=" === b ? d && -1 < c.indexOf(d) : "$=" === b ? d && c.slice(-d.length) === d : "~=" === b ? -1 < (" " + c.replace(qd, " ") + " ").indexOf(d) : "|=" === b ? c === d || c.slice(0, d.length + 1) === d + "-" : !1
          }
        }, CHILD: function (a, b, d, c, f) {
          var g =
            "nth" !== a.slice(0, 3), h = "last" !== a.slice(-4), i = "of-type" === b;
          return 1 === c && 0 === f ? function (a) {return !!a.parentNode} : function (b, d, q) {
              var k, p, D, n, m, d = g !== h ? "nextSibling" : "previousSibling", o = b.parentNode, s = i && b.nodeName.toLowerCase(), q = !q && !i;
              if (o) {
                if (g) {
                  for (; d;) {
                    for (p = b; p = p[d];)if (i ? p.nodeName.toLowerCase() === s : 1 === p.nodeType)return !1;
                    m = d = "only" === a && !m && "nextSibling"
                  }
                  return !0
                }
                m = [h ? o.firstChild : o.lastChild];
                if (h && q) {
                  q = o[u] || (o[u] = {});
                  k = q[a] || [];
                  n = k[0] === H && k[1];
                  D = k[0] === H && k[2];
                  for (p = n && o.childNodes[n]; p =
                    ++n && p && p[d] || (D = n = 0) || m.pop();)if (1 === p.nodeType && ++D && p === b) {
                    q[a] = [H, n, D];
                    break
                  }
                } else if (q && (k = (b[u] || (b[u] = {}))[a]) && k[0] === H) D = k[1]; else for (; p = ++n && p && p[d] || (D = n = 0) || m.pop();)if ((i ? p.nodeName.toLowerCase() === s : 1 === p.nodeType) && ++D)if (q && ((p[u] || (p[u] = {}))[a] = [H, D]), p === b)break;
                D -= f;
                return D === c || 0 === D % c && 0 <= D / c
              }
            }
        }, PSEUDO: function (a, b) {
          var d, c = s.pseudos[a] || s.setFilters[a.toLowerCase()] || r.error("unsupported pseudo: " + a);
          return c[u] ? c(b) : 1 < c.length ? (d = [a, a, "", b], s.setFilters.hasOwnProperty(a.toLowerCase()) ?
                F(function (a, d) {for (var h, i = c(a, b), l = i.length; l--;)h = ca(a, i[l]), a[h] = !(d[h] = i[l])}) : function (a) {return c(a, 0, d)}) : c
        }
      },
      pseudos: {
        not: F(function (a) {
          var b = [], d = [], c = tb(a.replace(Ha, "$1"));
          return c[u] ? F(function (a, b, d, i) {for (var i = c(a, null, i, []), l = a.length; l--;)if (d = i[l]) a[l] = !(b[l] = d)}) : function (a, g, h) {
              b[0] = a;
              c(b, null, h, d);
              b[0] = null;
              return !d.pop()
            }
        }),
        has: F(function (a) {return function (b) {return 0 < r(a, b).length}}),
        contains: F(function (a) {
          a = a.replace(N, O);
          return function (b) {
            return -1 < (b.textContent || b.innerText ||
              Ka(b)).indexOf(a)
          }
        }),
        lang: F(function (a) {
          vd.test(a || "") || r.error("unsupported lang: " + a);
          a = a.replace(N, O).toLowerCase();
          return function (b) {
            var d;
            do if (d = K ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }),
        target: function (a) {
          var b = kb.WB_wombat_self_location && kb.WB_wombat_self_location.hash;
          return b && b.slice(1) === a.id
        },
        root: function (a) {return a === J},
        focus: function (a) {
          return a === z.activeElement && (!z.hasFocus || z.hasFocus()) && !(!a.type && !a.href && !~a.tabIndex)
        },
        enabled: function (a) {return !1 === a.disabled},
        disabled: function (a) {return !0 === a.disabled},
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function (a) {
          a.parentNode && a.parentNode.selectedIndex;
          return !0 === a.selected
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
          return !0
        },
        parent: function (a) {return !s.pseudos.empty(a)},
        header: function (a) {return xd.test(a.nodeName)},
        input: function (a) {return wd.test(a.nodeName)},
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function (a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: aa(function () {return [0]}),
        last: aa(function (a, b) {return [b - 1]}),
        eq: aa(function (a, b, d) {return [0 > d ? d + b : d]}),
        even: aa(function (a, b) {
          for (var d = 0; d < b; d += 2)a.push(d);
          return a
        }),
        odd: aa(function (a, b) {
          for (var d = 1; d <
          b; d += 2)a.push(d);
          return a
        }),
        lt: aa(function (a, b, d) {
          for (b = 0 > d ? d + b : d; 0 <= --b;)a.push(b);
          return a
        }),
        gt: aa(function (a, b, d) {
          for (d = 0 > d ? d + b : d; ++d < b;)a.push(d);
          return a
        })
      }
    };
    s.pseudos.nth = s.pseudos.eq;
    for (ma in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})s.pseudos[ma] = kd(ma);
    for (ma in{submit: !0, reset: !0})s.pseudos[ma] = ld(ma);
    nc.prototype = s.filters = s.pseudos;
    s.setFilters = new nc;
    wa = r.tokenize = function (a, b) {
      var d, c, f, g, h, i, l;
      if (h = qc[a + " "])return b ? 0 : h.slice(0);
      h = a;
      i = [];
      for (l = s.preFilter; h;) {
        if (!d || (c = rd.exec(h))) c &&
        (h = h.slice(c[0].length) || h), i.push(f = []);
        d = !1;
        if (c = sd.exec(h)) d = c.shift(), f.push({value: d, type: c[0].replace(Ha, " ")}), h = h.slice(d.length);
        for (g in s.filter)if ((c = Ma[g].exec(h)) && (!l[g] || (c = l[g](c)))) d = c.shift(), f.push({
          value: d,
          type: g,
          matches: c
        }), h = h.slice(d.length);
        if (!d)break
      }
      return b ? h.length : h ? r.error(a) : qc(a, i).slice(0)
    };
    tb = r.compile = function (a, b) {
      var d, c = [], f = [], g = rc[a + " "];
      if (!g) {
        b || (b = wa(a));
        for (d = b.length; d--;)g = sb(b[d]), g[u] ? c.push(g) : f.push(g);
        var h = 0 < c.length, i = 0 < f.length;
        d = function (a,
                      b, d, g, p) {
          var n, m, o, t = 0, u = "0", w = a && [], ba = [], y = Ja, v = a || i && s.find.TAG("*", p), x = H += null == y ? 1 : Math.random() || 0.1, yd = v.length;
          for (p && (Ja = b !== z && b); u !== yd && null != (n = v[u]); u++) {
            if (i && n) {
              for (m = 0; o = f[m++];)if (o(n, b, d)) {
                g.push(n);
                break
              }
              p && (H = x)
            }
            h && ((n = !o && n) && t--, a && w.push(n))
          }
          t += u;
          if (h && u !== t) {
            for (m = 0; o = c[m++];)o(w, ba, b, d);
            if (a) {
              if (0 < t)for (; u--;)!w[u] && !ba[u] && (ba[u] = od.call(g));
              ba = Ia(ba)
            }
            S.apply(g, ba);
            p && (!a && 0 < ba.length && 1 < t + c.length) && r.uniqueSort(g)
          }
          p && (H = x, Ja = y);
          return w
        };
        d = h ? F(d) : d;
        g = rc(a, d);
        g.selector =
          a
      }
      return g
    };
    kc = r.select = function (a, b, d, c) {
      var f, g, h, i, l = "function" === typeof a && a, j = !c && wa(a = l.selector || a), d = d || [];
      if (1 === j.length) {
        g = j[0] = j[0].slice(0);
        if (2 < g.length && "ID" === (h = g[0]).type && t.getById && 9 === b.nodeType && K && s.relative[g[1].type]) {
          if (b = (s.find.ID(h.matches[0].replace(N, O), b) || [])[0]) l && (b = b.parentNode); else return d;
          a = a.slice(g.shift().value.length)
        }
        for (f = Ma.needsContext.test(a) ? 0 : g.length; f--;) {
          h = g[f];
          if (s.relative[i = h.type])break;
          if (i = s.find[i])if (c = i(h.matches[0].replace(N, O), lb.test(g[0].type) &&
              mb(b.parentNode) || b)) {
            g.splice(f, 1);
            a = c.length && Ga(g);
            if (!a)return S.apply(d, c), d;
            break
          }
        }
      }
      (l || tb(a, j))(c, b, !K, d, lb.test(a) && mb(b.parentNode) || b);
      return d
    };
    t.sortStable = u.split("").sort(ub).join("") === u;
    t.detectDuplicates = !!na;
    $();
    t.sortDetached = L(function (a) {return a.compareDocumentPosition(z.createElement("div")) & 1});
    L(function (a) {
      a.innerHTML = "<a href='#'></a>";
      return "#" === a.firstChild.getAttribute("href")
    }) || ob("type|href|height|width", function (a, b, d) {
      if (!d)return a.getAttribute(b, "type" === b.toLowerCase() ?
        1 : 2)
    });
    (!t.attributes || !L(function (a) {
      a.innerHTML = "<input/>";
      a.firstChild.setAttribute("value", "");
      return "" === a.firstChild.getAttribute("value")
    })) && ob("value", function (a, b, d) {if (!d && "input" === a.nodeName.toLowerCase())return a.defaultValue});
    L(function (a) {return null == a.getAttribute("disabled")}) || ob("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (a, b, d) {
      var c;
      if (!d)return !0 === a[b] ? b.toLowerCase() : (c = a.getAttributeNode(b)) &&
        c.specified ? c.value : null
    });
    c.find = r;
    c.expr = r.selectors;
    c.expr[":"] = c.expr.pseudos;
    c.unique = r.uniqueSort;
    c.text = r.getText;
    c.isXMLDoc = r.isXML;
    c.contains = r.contains;
    var wc = c.expr.match.needsContext, xc = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Wc = /^.[^:#\[\.,]*$/;
    c.filter = function (a, b, d) {
      var e = b[0];
      d && (a = ":not(" + a + ")");
      return 1 === b.length && 1 === e.nodeType ? c.find.matchesSelector(e, a) ? [e] : [] : c.find.matches(a, c.grep(b, function (a) {return 1 === a.nodeType}))
    };
    c.fn.extend({
      find: function (a) {
        var b, d = [], e = this, f = e.length;
        if ("string" !== typeof a)return this.pushStack(c(a).filter(function () {for (b = 0; b < f; b++)if (c.contains(e[b], this))return !0}));
        for (b = 0; b < f; b++)c.find(a, e[b], d);
        d = this.pushStack(1 < f ? c.unique(d) : d);
        d.selector = this.selector ? this.selector + " " + a : a;
        return d
      },
      filter: function (a) {return this.pushStack(cb(this, a || [], !1))},
      not: function (a) {return this.pushStack(cb(this, a || [], !0))},
      is: function (a) {return !!cb(this, "string" === typeof a && wc.test(a) ? c(a) : a || [], !1).length}
    });
    var ya, m = o.document, zd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (c.fn.init = function (a, b) {
      var d, e;
      if (!a)return this;
      if ("string" === typeof a) {
        if ((d = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : zd.exec(a)) && (d[1] || !b)) {
          if (d[1]) {if (b = b instanceof c ? b[0] : b, c.merge(this, c.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), xc.test(d[1]) && c.isPlainObject(b))for (d in b)if (c.isFunction(this[d])) this[d](b[d]); else this.attr(d, b[d])} else {
            if ((e = m.getElementById(d[2])) && e.parentNode) {
              if (e.id !== d[2])return ya.find(a);
              this.length = 1;
              this[0] = e
            }
            this.context =
              m;
            this.selector = a
          }
          return this
        }
        return !b || b.jquery ? (b || ya).find(a) : this.constructor(b).find(a)
      }
      if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
      if (c.isFunction(a))return "undefined" !== typeof ya.ready ? ya.ready(a) : a(c);
      void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
      return c.makeArray(a, this)
    }).prototype = c.fn;
    ya = c(m);
    var Ad = /^(?:parents|prev(?:Until|All))/, Bd = {children: !0, contents: !0, next: !0, prev: !0};
    c.extend({
      dir: function (a, b, d) {
        for (var e = [], a = a[b]; a && 9 !== a.nodeType &&
        (void 0 === d || 1 !== a.nodeType || !c(a).is(d));)1 === a.nodeType && e.push(a), a = a[b];
        return e
      }, sibling: function (a, b) {
        for (var d = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && d.push(a);
        return d
      }
    });
    c.fn.extend({
      has: function (a) {
        var b, d = c(a, this), e = d.length;
        return this.filter(function () {for (b = 0; b < e; b++)if (c.contains(this, d[b]))return !0})
      },
      closest: function (a, b) {
        for (var d, e = 0, f = this.length, g = [], h = wc.test(a) || "string" !== typeof a ? c(a, b || this.context) : 0; e < f; e++)for (d = this[e]; d && d !== b; d = d.parentNode)if (11 > d.nodeType &&
          (h ? -1 < h.index(d) : 1 === d.nodeType && c.find.matchesSelector(d, a))) {
          g.push(d);
          break
        }
        return this.pushStack(1 < g.length ? c.unique(g) : g)
      },
      index: function (a) {return !a ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof a ? c.inArray(this[0], c(a)) : c.inArray(a.jquery ? a[0] : a, this)},
      add: function (a, b) {return this.pushStack(c.unique(c.merge(this.get(), c(a, b))))},
      addBack: function (a) {return this.add(null == a ? this.prevObject : this.prevObject.filter(a))}
    });
    c.each({
      parent: function (a) {
        return (a = a.parentNode) &&
        11 !== a.nodeType ? a : null
      },
      parents: function (a) {return c.dir(a, "parentNode")},
      parentsUntil: function (a, b, d) {return c.dir(a, "parentNode", d)},
      next: function (a) {return Hb(a, "nextSibling")},
      prev: function (a) {return Hb(a, "previousSibling")},
      nextAll: function (a) {return c.dir(a, "nextSibling")},
      prevAll: function (a) {return c.dir(a, "previousSibling")},
      nextUntil: function (a, b, d) {return c.dir(a, "nextSibling", d)},
      prevUntil: function (a, b, d) {return c.dir(a, "previousSibling", d)},
      siblings: function (a) {
        return c.sibling((a.parentNode ||
        {}).firstChild, a)
      },
      children: function (a) {return c.sibling(a.firstChild)},
      contents: function (a) {return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.merge([], a.childNodes)}
    }, function (a, b) {
      c.fn[a] = function (d, e) {
        var f = c.map(this, b, d);
        "Until" !== a.slice(-5) && (e = d);
        e && "string" === typeof e && (f = c.filter(e, f));
        1 < this.length && (Bd[a] || (f = c.unique(f)), Ad.test(a) && (f = f.reverse()));
        return this.pushStack(f)
      }
    });
    var M = /\S+/g, yc = {};
    c.Callbacks = function (a) {
      var b;
      if ("string" === typeof a) {
        if (!(b = yc[a])) {
          b =
            a;
          var d = yc[b] = {};
          c.each(b.match(M) || [], function (a, b) {d[b] = !0});
          b = d
        }
      } else b = c.extend({}, a);
      var a = b, e, f, g, h, i, l, j = [], q = !a.once && [], k = function (b) {
        f = a.memory && b;
        g = !0;
        i = l || 0;
        l = 0;
        h = j.length;
        for (e = !0; j && i < h; i++)if (!1 === j[i].apply(b[0], b[1]) && a.stopOnFalse) {
          f = !1;
          break
        }
        e = !1;
        j && (q ? q.length && k(q.shift()) : f ? j = [] : p.disable())
      }, p = {
        add: function () {
          if (j) {
            var b = j.length;
            (function bd (b) {
              c.each(b, function (b, d) {
                var e = c.type(d);
                "function" === e ? (!a.unique || !p.has(d)) && j.push(d) : d && (d.length && "string" !== e) && bd(d)
              })
            })(arguments);
            e ? h = j.length : f && (l = b, k(f))
          }
          return this
        },
        remove: function () {
          j && c.each(arguments, function (a, b) {for (var d; -1 < (d = c.inArray(b, j, d));)j.splice(d, 1), e && (d <= h && h--, d <= i && i--)});
          return this
        },
        has: function (a) {return a ? -1 < c.inArray(a, j) : !(!j || !j.length)},
        empty: function () {
          j = [];
          h = 0;
          return this
        },
        disable: function () {
          j = q = f = void 0;
          return this
        },
        disabled: function () {return !j},
        lock: function () {
          q = void 0;
          f || p.disable();
          return this
        },
        locked: function () {return !q},
        fireWith: function (a, b) {
          if (j && (!g || q)) b = b || [], b = [a, b.slice ? b.slice() :
            b], e ? q.push(b) : k(b);
          return this
        },
        fire: function () {
          p.fireWith(this, arguments);
          return this
        },
        fired: function () {return !!g}
      };
      return p
    };
    c.extend({
      Deferred: function (a) {
        var b = [["resolve", "done", c.Callbacks("once memory"), "resolved"], ["reject", "fail", c.Callbacks("once memory"), "rejected"], ["notify", "progress", c.Callbacks("memory")]], d = "pending", e = {
          state: function () {return d}, always: function () {
            f.done(arguments).fail(arguments);
            return this
          }, then: function () {
            var a = arguments;
            return c.Deferred(function (d) {
              c.each(b,
                function (b, l) {
                  var j = c.isFunction(a[b]) && a[b];
                  f[l[1]](function () {
                    var a = j && j.apply(this, arguments);
                    if (a && c.isFunction(a.promise)) a.promise().done(d.resolve).fail(d.reject).progress(d.notify); else d[l[0] + "With"](this === e ? d.promise() : this, j ? [a] : arguments)
                  })
                });
              a = null
            }).promise()
          }, promise: function (a) {return null != a ? c.extend(a, e) : e}
        }, f = {};
        e.pipe = e.then;
        c.each(b, function (a, c) {
          var i = c[2], l = c[3];
          e[c[1]] = i.add;
          l && i.add(function () {d = l}, b[a ^ 1][2].disable, b[2][2].lock);
          f[c[0]] = function () {
            f[c[0] + "With"](this ===
            f ? e : this, arguments);
            return this
          };
          f[c[0] + "With"] = i.fireWith
        });
        e.promise(f);
        a && a.call(f, f);
        return f
      }, when: function (a) {
        var b = 0, d = R.call(arguments), e = d.length, f = 1 !== e || a && c.isFunction(a.promise) ? e : 0, g = 1 === f ? a : c.Deferred(), h = function (a, b, d) {
          return function (c) {
            b[a] = this;
            d[a] = 1 < arguments.length ? R.call(arguments) : c;
            d === i ? g.notifyWith(b, d) : --f || g.resolveWith(b, d)
          }
        }, i, l, j;
        if (1 < e) {
          i = Array(e);
          l = Array(e);
          for (j = Array(e); b < e; b++)d[b] && c.isFunction(d[b].promise) ? d[b].promise().done(h(b, j, d)).fail(g.reject).progress(h(b,
              l, i)) : --f
        }
        f || g.resolveWith(j, d);
        return g.promise()
      }
    });
    var Na;
    c.fn.ready = function (a) {
      c.ready.promise().done(a);
      return this
    };
    c.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {a ? c.readyWait++ : c.ready(!0)},
      ready: function (a) {
        if (!(!0 === a ? --c.readyWait : c.isReady)) {
          if (!m.body)return setTimeout(c.ready);
          c.isReady = !0;
          !0 !== a && 0 < --c.readyWait || (Na.resolveWith(m, [c]), c.fn.triggerHandler && (c(m).triggerHandler("ready"), c(m).off("ready")))
        }
      }
    });
    c.ready.promise = function (a) {
      if (!Na)if (Na = c.Deferred(), "complete" ===
        m.readyState) setTimeout(c.ready); else if (m.addEventListener) m.addEventListener("DOMContentLoaded", P, !1), o.addEventListener("load", P, !1); else {
        m.attachEvent("onreadystatechange", P);
        o.attachEvent("onload", P);
        var b = !1;
        try {b = null == o.frameElement && m.documentElement} catch (d) {}
        b && b.doScroll && function f () {
          if (!c.isReady) {
            try {b.doScroll("left")} catch (a) {return setTimeout(f, 50)}
            Ib();
            c.ready()
          }
        }()
      }
      return Na.promise(a)
    };
    var C = "undefined", zc;
    for (zc in c(n))break;
    n.ownLast = "0" !== zc;
    n.inlineBlockNeedsLayout = !1;
    c(function () {
      var a,
        b, d;
      if ((b = m.getElementsByTagName("body")[0]) && b.style) {
        a = m.createElement("div");
        d = m.createElement("div");
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        b.appendChild(d).appendChild(a);
        if (typeof a.style.zoom !== C && (a.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", n.inlineBlockNeedsLayout = a = 3 === a.offsetWidth)) b.style.zoom = 1;
        b.removeChild(d)
      }
    });
    var Cd = m.createElement("div");
    if (null == n.deleteExpando) {
      n.deleteExpando = !0;
      try {delete Cd.test} catch (fe) {
        n.deleteExpando = !1
      }
    }
    c.acceptData = function (a) {
      var b = c.noData[(a.nodeName + " ").toLowerCase()], d = +a.nodeType || 1;
      return 1 !== d && 9 !== d ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var Yc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Xc = /([A-Z])/g;
    c.extend({
      cache: {},
      noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
      hasData: function (a) {
        a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
        return !!a && !db(a)
      },
      data: function (a, b, d) {return Kb(a, b, d)},
      removeData: function (a, b) {return Lb(a, b)},
      _data: function (a,
                       b, d) {return Kb(a, b, d, !0)},
      _removeData: function (a, b) {return Lb(a, b, !0)}
    });
    c.fn.extend({
      data: function (a, b) {
        var d, e, f, g = this[0], h = g && g.attributes;
        if (void 0 === a) {
          if (this.length && (f = c.data(g), 1 === g.nodeType && !c._data(g, "parsedAttrs"))) {
            for (d = h.length; d--;)h[d] && (e = h[d].name, 0 === e.indexOf("data-") && (e = c.camelCase(e.slice(5)), Jb(g, e, f[e])));
            c._data(g, "parsedAttrs", !0)
          }
          return f
        }
        return "object" === typeof a ? this.each(function () {c.data(this, a)}) : 1 < arguments.length ? this.each(function () {c.data(this, a, b)}) : g ? Jb(g,
                a, c.data(g, a)) : void 0
      }, removeData: function (a) {return this.each(function () {c.removeData(this, a)})}
    });
    c.extend({
      queue: function (a, b, d) {
        var e;
        if (a)return b = (b || "fx") + "queue", e = c._data(a, b), d && (!e || c.isArray(d) ? e = c._data(a, b, c.makeArray(d)) : e.push(d)), e || []
      },
      dequeue: function (a, b) {
        var b = b || "fx", d = c.queue(a, b), e = d.length, f = d.shift(), g = c._queueHooks(a, b), h = function () {c.dequeue(a, b)};
        "inprogress" === f && (f = d.shift(), e--);
        f && ("fx" === b && d.unshift("inprogress"), delete g.stop, f.call(a, h, g));
        !e && g && g.empty.fire()
      },
      _queueHooks: function (a, b) {
        var d = b + "queueHooks";
        return c._data(a, d) || c._data(a, d, {
            empty: c.Callbacks("once memory").add(function () {
              c._removeData(a, b + "queue");
              c._removeData(a, d)
            })
          })
      }
    });
    c.fn.extend({
      queue: function (a, b) {
        var d = 2;
        "string" !== typeof a && (b = a, a = "fx", d--);
        return arguments.length < d ? c.queue(this[0], a) : void 0 === b ? this : this.each(function () {
              var d = c.queue(this, a, b);
              c._queueHooks(this, a);
              a === "fx" && d[0] !== "inprogress" && c.dequeue(this, a)
            })
      },
      dequeue: function (a) {
        return this.each(function () {
          c.dequeue(this,
            a)
        })
      },
      clearQueue: function (a) {return this.queue(a || "fx", [])},
      promise: function (a, b) {
        var d, e = 1, f = c.Deferred(), g = this, h = this.length, i = function () {--e || f.resolveWith(g, [g])};
        "string" !== typeof a && (b = a, a = void 0);
        for (a = a || "fx"; h--;)if ((d = c._data(g[h], a + "queueHooks")) && d.empty) e++, d.empty.add(i);
        i();
        return f.promise(b)
      }
    });
    var Oa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, X = ["Top", "Right", "Bottom", "Left"], ta = function (a, b) {
      a = b || a;
      return "none" === c.css(a, "display") || !c.contains(a.ownerDocument, a)
    }, fa = c.access =
      function (a, b, d, e, f, g, h) {
        var i = 0, l = a.length, j = null == d;
        if ("object" === c.type(d))for (i in f = !0, d)c.access(a, b, i, d[i], !0, g, h); else if (void 0 !== e && (f = !0, c.isFunction(e) || (h = !0), j && (h ? (b.call(a, e), b = null) : (j = b, b = function (a, b, d) {return j.call(c(a), d)})), b))for (; i < l; i++)b(a[i], d, h ? e : e.call(a[i], i, b(a[i], d)));
        return f ? a : j ? b.call(a) : l ? b(a[0], d) : g
      }, eb = /^(?:checkbox|radio)$/i, Pa = m.createElement("input"), A = m.createElement("div"), Ac = m.createDocumentFragment();
    A.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    n.leadingWhitespace = 3 === A.firstChild.nodeType;
    n.tbody = !A.getElementsByTagName("tbody").length;
    n.htmlSerialize = !!A.getElementsByTagName("link").length;
    n.html5Clone = "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML;
    Pa.type = "checkbox";
    Pa.checked = !0;
    Ac.appendChild(Pa);
    n.appendChecked = Pa.checked;
    A.innerHTML = "<textarea>x</textarea>";
    n.noCloneChecked = !!A.cloneNode(!0).lastChild.defaultValue;
    Ac.appendChild(A);
    A.innerHTML = "<input type='radio' checked='checked' name='t'/>";
    n.checkClone = A.cloneNode(!0).cloneNode(!0).lastChild.checked;
    n.noCloneEvent = !0;
    A.attachEvent && (A.attachEvent("onclick", function () {n.noCloneEvent = !1}), A.cloneNode(!0).click());
    if (null == n.deleteExpando) {
      n.deleteExpando = !0;
      try {delete A.test} catch (ge) {n.deleteExpando = !1}
    }
    var Qa, Ra, Bc = m.createElement("div");
    for (Qa in{
      submit: !0,
      change: !0,
      focusin: !0
    })if (Ra = "on" + Qa, !(n[Qa + "Bubbles"] = Ra in o)) Bc.setAttribute(Ra, "t"), n[Qa + "Bubbles"] = !1 === Bc.attributes[Ra].expando;
    var wb = /^(?:input|select|textarea)$/i, Dd = /^key/, Ed = /^(?:mouse|pointer|contextmenu)|click/, Cc = /^(?:focusinfocus|focusoutblur)$/,
      Dc = /^([^.]*)(?:\.(.+)|)$/;
    c.event = {
      global: {},
      add: function (a, b, d, e, f) {
        var g, h, i, l, j, n, k, p, m;
        if (i = c._data(a)) {
          if (d.handler) {
            l = d;
            d = l.handler;
            f = l.selector
          }
          if (!d.guid) d.guid = c.guid++;
          if (!(h = i.events)) h = i.events = {};
          if (!(j = i.handle)) {
            j = i.handle = function (a) {return typeof c !== C && (!a || c.event.triggered !== a.type) ? c.event.dispatch.apply(j.elem, arguments) : void 0};
            j.elem = a
          }
          b = (b || "").match(M) || [""];
          for (i = b.length; i--;) {
            g = Dc.exec(b[i]) || [];
            p = n = g[1];
            m = (g[2] || "").split(".").sort();
            if (p) {
              g = c.event.special[p] || {};
              p =
                (f ? g.delegateType : g.bindType) || p;
              g = c.event.special[p] || {};
              n = c.extend({
                type: p,
                origType: n,
                data: e,
                handler: d,
                guid: d.guid,
                selector: f,
                needsContext: f && c.expr.match.needsContext.test(f),
                namespace: m.join(".")
              }, l);
              if (!(k = h[p])) {
                k = h[p] = [];
                k.delegateCount = 0;
                if (!g.setup || g.setup.call(a, e, m, j) === false) a.addEventListener ? a.addEventListener(p, j, false) : a.attachEvent && a.attachEvent("on" + p, j)
              }
              if (g.add) {
                g.add.call(a, n);
                if (!n.handler.guid) n.handler.guid = d.guid
              }
              f ? k.splice(k.delegateCount++, 0, n) : k.push(n);
              c.event.global[p] =
                true
            }
          }
          a = null
        }
      },
      remove: function (a, b, d, e, f) {
        var g, h, i, l, j, n, k, p, m, o, s, t = c.hasData(a) && c._data(a);
        if (t && (n = t.events)) {
          b = (b || "").match(M) || [""];
          for (j = b.length; j--;) {
            i = Dc.exec(b[j]) || [];
            m = s = i[1];
            o = (i[2] || "").split(".").sort();
            if (m) {
              k = c.event.special[m] || {};
              m = (e ? k.delegateType : k.bindType) || m;
              p = n[m] || [];
              i = i[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)");
              for (l = g = p.length; g--;) {
                h = p[g];
                if ((f || s === h.origType) && (!d || d.guid === h.guid) && (!i || i.test(h.namespace)) && (!e || e === h.selector || e === "**" && h.selector)) {
                  p.splice(g,
                    1);
                  h.selector && p.delegateCount--;
                  k.remove && k.remove.call(a, h)
                }
              }
              if (l && !p.length) {
                (!k.teardown || k.teardown.call(a, o, t.handle) === false) && c.removeEvent(a, m, t.handle);
                delete n[m]
              }
            } else for (m in n)c.event.remove(a, m + b[j], d, e, true)
          }
          if (c.isEmptyObject(n)) {
            delete t.handle;
            c._removeData(a, "events")
          }
        }
      },
      trigger: function (a, b, d, e) {
        var f, g, h, i, l, j, n = [d || m], k = la.call(a, "type") ? a.type : a;
        l = la.call(a, "namespace") ? a.namespace.split(".") : [];
        h = f = d = d || m;
        if (!(d.nodeType === 3 || d.nodeType === 8) && !Cc.test(k + c.event.triggered)) {
          if (k.indexOf(".") >=
            0) {
            l = k.split(".");
            k = l.shift();
            l.sort()
          }
          g = k.indexOf(":") < 0 && "on" + k;
          a = a[c.expando] ? a : new c.Event(k, typeof a === "object" && a);
          a.isTrigger = e ? 2 : 3;
          a.namespace = l.join(".");
          a.namespace_re = a.namespace ? RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
          a.result = void 0;
          if (!a.target) a.target = d;
          b = b == null ? [a] : c.makeArray(b, [a]);
          l = c.event.special[k] || {};
          if (e || !(l.trigger && l.trigger.apply(d, b) === false)) {
            if (!e && !l.noBubble && !c.isWindow(d)) {
              i = l.delegateType || k;
              if (!Cc.test(i + k)) h = h.parentNode;
              for (; h; h = h.parentNode) {
                n.push(h);
                f = h
              }
              if (f === (d.ownerDocument || m)) n.push(f.defaultView || f.parentWindow || o)
            }
            for (j = 0; (h = n[j++]) && !a.isPropagationStopped();) {
              a.type = j > 1 ? i : l.bindType || k;
              (f = (c._data(h, "events") || {})[a.type] && c._data(h, "handle")) && f.apply(h, b);
              if ((f = g && h[g]) && f.apply && c.acceptData(h)) {
                a.result = f.apply(h, b);
                a.result === false && a.preventDefault()
              }
            }
            a.type = k;
            if (!e && !a.isDefaultPrevented() && (!l._default || l._default.apply(n.pop(), b) === false) && c.acceptData(d) && g && d[k] && !c.isWindow(d)) {
              (f = d[g]) && (d[g] = null);
              c.event.triggered = k;
              try {d[k]()} catch (p) {}
              c.event.triggered = void 0;
              f && (d[g] = f)
            }
            return a.result
          }
        }
      },
      dispatch: function (a) {
        var a = c.event.fix(a), b, d, e, f, g = [], h = R.call(arguments);
        b = (c._data(this, "events") || {})[a.type] || [];
        var i = c.event.special[a.type] || {};
        h[0] = a;
        a.delegateTarget = this;
        if (!(i.preDispatch && i.preDispatch.call(this, a) === false)) {
          g = c.event.handlers.call(this, a, b);
          for (b = 0; (e = g[b++]) && !a.isPropagationStopped();) {
            a.currentTarget = e.elem;
            for (f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(d.namespace)) {
              a.handleObj =
                d;
              a.data = d.data;
              d = ((c.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h);
              if (d !== void 0 && (a.result = d) === false) {
                a.preventDefault();
                a.stopPropagation()
              }
            }
          }
          i.postDispatch && i.postDispatch.call(this, a);
          return a.result
        }
      },
      handlers: function (a, b) {
        var d, e, f, g, h = [], i = b.delegateCount, l = a.target;
        if (i && l.nodeType && (!a.button || a.type !== "click"))for (; l != this; l = l.parentNode || this)if (l.nodeType === 1 && (l.disabled !== true || a.type !== "click")) {
          f = [];
          for (g = 0; g < i; g++) {
            e = b[g];
            d = e.selector + " ";
            f[d] === void 0 && (f[d] =
              e.needsContext ? c(d, this).index(l) >= 0 : c.find(d, this, null, [l]).length);
            f[d] && f.push(e)
          }
          f.length && h.push({elem: l, handlers: f})
        }
        i < b.length && h.push({elem: this, handlers: b.slice(i)});
        return h
      },
      fix: function (a) {
        if (a[c.expando])return a;
        var b, d, e;
        b = a.type;
        var f = a, g = this.fixHooks[b];
        g || (this.fixHooks[b] = g = Ed.test(b) ? this.mouseHooks : Dd.test(b) ? this.keyHooks : {});
        e = g.props ? this.props.concat(g.props) : this.props;
        a = new c.Event(f);
        for (b = e.length; b--;) {
          d = e[b];
          a[d] = f[d]
        }
        if (!a.target) a.target = f.srcElement || m;
        if (a.target.nodeType ===
          3) a.target = a.target.parentNode;
        a.metaKey = !!a.metaKey;
        return g.filter ? g.filter(a, f) : a
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: ["char", "charCode", "key", "keyCode"],
        filter: function (a, b) {
          if (a.which == null) a.which = b.charCode != null ? b.charCode : b.keyCode;
          return a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (a, b) {
          var d, c, f = b.button, g = b.fromElement;
          if (a.pageX == null && b.clientX != null) {
            d = a.target.ownerDocument || m;
            c = d.documentElement;
            d = d.body;
            a.pageX = b.clientX + (c && c.scrollLeft || d && d.scrollLeft || 0) - (c && c.clientLeft || d && d.clientLeft || 0);
            a.pageY = b.clientY + (c && c.scrollTop || d && d.scrollTop || 0) - (c && c.clientTop || d && d.clientTop || 0)
          }
          if (!a.relatedTarget && g) a.relatedTarget = g === a.target ? b.toElement : g;
          if (!a.which && f !== void 0) a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0;
          return a
        }
      },
      special: {
        load: {noBubble: !0},
        focus: {
          trigger: function () {
            if (this !==
              Mb() && this.focus)try {
              this.focus();
              return false
            } catch (a) {}
          }, delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            if (this === Mb() && this.blur) {
              this.blur();
              return false
            }
          }, delegateType: "focusout"
        },
        click: {
          trigger: function () {
            if (c.nodeName(this, "input") && this.type === "checkbox" && this.click) {
              this.click();
              return false
            }
          }, _default: function (a) {return c.nodeName(a.target, "a")}
        },
        beforeunload: {postDispatch: function (a) {if (a.result !== void 0 && a.originalEvent) a.originalEvent.returnValue = a.result}}
      },
      simulate: function (a, b, d,
                          e) {
        a = c.extend(new c.Event, d, {type: a, isSimulated: true, originalEvent: {}});
        e ? c.event.trigger(a, null, b) : c.event.dispatch.call(b, a);
        a.isDefaultPrevented() && d.preventDefault()
      }
    };
    c.removeEvent = m.removeEventListener ? function (a, b, d) {a.removeEventListener && a.removeEventListener(b, d, false)} : function (a, b, d) {
        b = "on" + b;
        if (a.detachEvent) {
          typeof a[b] === C && (a[b] = null);
          a.detachEvent(b, d)
        }
      };
    c.Event = function (a, b) {
      if (!(this instanceof c.Event))return new c.Event(a, b);
      if (a && a.type) {
        this.originalEvent = a;
        this.type = a.type;
        this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === void 0 && a.returnValue === false ? Aa : ja
      } else this.type = a;
      b && c.extend(this, b);
      this.timeStamp = a && a.timeStamp || c.now();
      this[c.expando] = true
    };
    c.Event.prototype = {
      isDefaultPrevented: ja,
      isPropagationStopped: ja,
      isImmediatePropagationStopped: ja,
      preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = Aa;
        if (a) a.preventDefault ? a.preventDefault() : a.returnValue = false
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped =
          Aa;
        if (a) {
          a.stopPropagation && a.stopPropagation();
          a.cancelBubble = true
        }
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = Aa;
        a && a.stopImmediatePropagation && a.stopImmediatePropagation();
        this.stopPropagation()
      }
    };
    c.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (a, b) {
      c.event.special[a] = {
        delegateType: b, bindType: b, handle: function (a) {
          var e, f = a.relatedTarget, g = a.handleObj;
          if (!f || f !== this && !c.contains(this,
              f)) {
            a.type = g.origType;
            e = g.handler.apply(this, arguments);
            a.type = b
          }
          return e
        }
      }
    });
    n.submitBubbles || (c.event.special.submit = {
      setup: function () {
        if (c.nodeName(this, "form"))return false;
        c.event.add(this, "click._submit keypress._submit", function (a) {
          a = a.target;
          if ((a = c.nodeName(a, "input") || c.nodeName(a, "button") ? a.form : void 0) && !c._data(a, "submitBubbles")) {
            c.event.add(a, "submit._submit", function (a) {a._submit_bubble = true});
            c._data(a, "submitBubbles", true)
          }
        })
      }, postDispatch: function (a) {
        if (a._submit_bubble) {
          delete a._submit_bubble;
          this.parentNode && !a.isTrigger && c.event.simulate("submit", this.parentNode, a, true)
        }
      }, teardown: function () {
        if (c.nodeName(this, "form"))return false;
        c.event.remove(this, "._submit")
      }
    });
    n.changeBubbles || (c.event.special.change = {
      setup: function () {
        if (wb.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            c.event.add(this, "propertychange._change", function (a) {if (a.originalEvent.propertyName === "checked") this._just_changed = true});
            c.event.add(this, "click._change", function (a) {
              if (this._just_changed && !a.isTrigger) this._just_changed = false;
              c.event.simulate("change", this, a, true)
            })
          }
          return false
        }
        c.event.add(this, "beforeactivate._change", function (a) {
          a = a.target;
          if (wb.test(a.nodeName) && !c._data(a, "changeBubbles")) {
            c.event.add(a, "change._change", function (a) {this.parentNode && (!a.isSimulated && !a.isTrigger) && c.event.simulate("change", this.parentNode, a, true)});
            c._data(a, "changeBubbles", true)
          }
        })
      }, handle: function (a) {
        var b = a.target;
        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")return a.handleObj.handler.apply(this,
          arguments)
      }, teardown: function () {
        c.event.remove(this, "._change");
        return !wb.test(this.nodeName)
      }
    });
    n.focusinBubbles || c.each({focus: "focusin", blur: "focusout"}, function (a, b) {
      var d = function (a) {c.event.simulate(b, a.target, c.event.fix(a), true)};
      c.event.special[b] = {
        setup: function () {
          var e = this.ownerDocument || this, f = c._data(e, b);
          f || e.addEventListener(a, d, true);
          c._data(e, b, (f || 0) + 1)
        }, teardown: function () {
          var e = this.ownerDocument || this, f = c._data(e, b) - 1;
          if (f) c._data(e, b, f); else {
            e.removeEventListener(a, d, true);
            c._removeData(e, b)
          }
        }
      }
    });
    c.fn.extend({
      on: function (a, b, d, e, f) {
        var g, h;
        if (typeof a === "object") {
          if (typeof b !== "string") {
            d = d || b;
            b = void 0
          }
          for (g in a)this.on(g, b, d, a[g], f);
          return this
        }
        if (d == null && e == null) {
          e = b;
          d = b = void 0
        } else if (e == null)if (typeof b === "string") {
          e = d;
          d = void 0
        } else {
          e = d;
          d = b;
          b = void 0
        }
        if (e === false) e = ja; else if (!e)return this;
        if (f === 1) {
          h = e;
          e = function (a) {
            c().off(a);
            return h.apply(this, arguments)
          };
          e.guid = h.guid || (h.guid = c.guid++)
        }
        return this.each(function () {c.event.add(this, a, e, d, b)})
      },
      one: function (a,
                     b, d, c) {return this.on(a, b, d, c, 1)},
      off: function (a, b, d) {
        var e;
        if (a && a.preventDefault && a.handleObj) {
          e = a.handleObj;
          c(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
          return this
        }
        if (typeof a === "object") {
          for (e in a)this.off(e, b, a[e]);
          return this
        }
        if (b === false || typeof b === "function") {
          d = b;
          b = void 0
        }
        d === false && (d = ja);
        return this.each(function () {c.event.remove(this, a, d, b)})
      },
      trigger: function (a, b) {return this.each(function () {c.event.trigger(a, b, this)})},
      triggerHandler: function (a,
                                b) {
        var d = this[0];
        if (d)return c.event.trigger(a, b, d, true)
      }
    });
    var Ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Fd = / jQuery\d+="(?:null|\d+)"/g, Ec = RegExp("<(?:" + Ob + ")[\\s/>]", "i"), xb = /^\s+/, Fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Gc = /<([\w:]+)/, Hc = /<tbody/i, Gd = /<|&#?\w+;/, Hd = /<(?:script|style|link)/i, Id = /checked\s*(?:[^=]|=\s*.checked.)/i, Ic = /^$|\/(?:java|ecma)script/i,
      $c = /^true\/(.*)/, Jd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, E = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: n.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      }, yb = Nb(m).appendChild(m.createElement("div"));
    E.optgroup = E.option;
    E.tbody = E.tfoot = E.colgroup = E.caption = E.thead;
    E.th = E.td;
    c.extend({
      clone: function (a, b, d) {
        var e, f, g, h, i, l = c.contains(a.ownerDocument, a);
        if (n.html5Clone || c.isXMLDoc(a) || !Ec.test("<" + a.nodeName + ">")) g = a.cloneNode(true); else {
          yb.innerHTML = a.outerHTML;
          yb.removeChild(g = yb.firstChild)
        }
        if ((!n.noCloneEvent || !n.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !c.isXMLDoc(a)) {
          e = w(g);
          i = w(a);
          for (h = 0; (f = i[h]) != null; ++h)if (e[h]) {
            var j = e[h], m = void 0, k = void 0, p = void 0;
            if (j.nodeType === 1) {
              m = j.nodeName.toLowerCase();
              if (!n.noCloneEvent && j[c.expando]) {
                p = c._data(j);
                for (k in p.events)c.removeEvent(j, k, p.handle);
                j.removeAttribute(c.expando)
              }
              if (m === "script" && j.text !== f.text) {
                Qb(j).text = f.text;
                Rb(j)
              } else if (m === "object") {
                if (j.parentNode) j.outerHTML = f.outerHTML;
                if (n.html5Clone && f.innerHTML && !c.trim(j.innerHTML)) j.innerHTML = f.innerHTML
              } else if (m === "input" && eb.test(f.type)) {
                j.defaultChecked = j.checked = f.checked;
                if (j.value !== f.value) j.value = f.value
              } else if (m === "option") j.defaultSelected = j.selected = f.defaultSelected; else if (m ===
                "input" || m === "textarea") j.defaultValue = f.defaultValue
            }
          }
        }
        if (b)if (d) {
          i = i || w(a);
          e = e || w(g);
          for (h = 0; (f = i[h]) != null; h++)Sb(f, e[h])
        } else Sb(a, g);
        e = w(g, "script");
        e.length > 0 && fb(e, !l && w(a, "script"));
        return g
      }, buildFragment: function (a, b, d, e) {
        for (var f, g, h, i, l, j, m = a.length, k = Nb(b), p = [], o = 0; o < m; o++)if ((g = a[o]) || g === 0)if (c.type(g) === "object") c.merge(p, g.nodeType ? [g] : g); else if (Gd.test(g)) {
          h = h || k.appendChild(b.createElement("div"));
          i = (Gc.exec(g) || ["", ""])[1].toLowerCase();
          j = E[i] || E._default;
          h.innerHTML = j[1] + g.replace(Fc,
              "<$1></$2>") + j[2];
          for (f = j[0]; f--;)h = h.lastChild;
          !n.leadingWhitespace && xb.test(g) && p.push(b.createTextNode(xb.exec(g)[0]));
          if (!n.tbody)for (f = (g = i === "table" && !Hc.test(g) ? h.firstChild : j[1] === "<table>" && !Hc.test(g) ? h : 0) && g.childNodes.length; f--;)c.nodeName(l = g.childNodes[f], "tbody") && !l.childNodes.length && g.removeChild(l);
          c.merge(p, h.childNodes);
          for (h.textContent = ""; h.firstChild;)h.removeChild(h.firstChild);
          h = k.lastChild
        } else p.push(b.createTextNode(g));
        h && k.removeChild(h);
        n.appendChecked || c.grep(w(p,
          "input"), Zc);
        for (o = 0; g = p[o++];)if (!(e && c.inArray(g, e) !== -1)) {
          a = c.contains(g.ownerDocument, g);
          h = w(k.appendChild(g), "script");
          a && fb(h);
          if (d)for (f = 0; g = h[f++];)Ic.test(g.type || "") && d.push(g)
        }
        return k
      }, cleanData: function (a, b) {
        for (var d, e, f, g, h = 0, i = c.expando, l = c.cache, j = n.deleteExpando, m = c.event.special; (d = a[h]) != null; h++)if (b || c.acceptData(d))if (g = (f = d[i]) && l[f]) {
          if (g.events)for (e in g.events)m[e] ? c.event.remove(d, e) : c.removeEvent(d, e, g.handle);
          if (l[f]) {
            delete l[f];
            j ? delete d[i] : typeof d.removeAttribute !==
              C ? d.removeAttribute(i) : d[i] = null;
            Q.push(f)
          }
        }
      }
    });
    c.fn.extend({
      text: function (a) {return fa(this, function (a) {return a === void 0 ? c.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a))}, null, a, arguments.length)},
      append: function () {return this.domManip(arguments, function (a) {(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && Pb(this, a).appendChild(a)})},
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType ===
            9) {
            var b = Pb(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function () {return this.domManip(arguments, function (a) {this.parentNode && this.parentNode.insertBefore(a, this)})},
      after: function () {return this.domManip(arguments, function (a) {this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)})},
      remove: function (a, b) {
        for (var d, e = a ? c.filter(a, this) : this, f = 0; (d = e[f]) != null; f++) {
          !b && d.nodeType === 1 && c.cleanData(w(d));
          if (d.parentNode) {
            b && c.contains(d.ownerDocument, d) && fb(w(d, "script"));
            d.parentNode.removeChild(d)
          }
        }
        return this
      },
      empty: function () {
        for (var a, b = 0; (a = this[b]) != null; b++) {
          for (a.nodeType === 1 && c.cleanData(w(a, false)); a.firstChild;)a.removeChild(a.firstChild);
          if (a.options && c.nodeName(a, "select")) a.options.length = 0
        }
        return this
      },
      clone: function (a, b) {
        a = a == null ? false : a;
        b = b == null ? a : b;
        return this.map(function () {return c.clone(this, a, b)})
      },
      html: function (a) {
        return fa(this, function (a) {
          var d = this[0] || {}, e = 0, f = this.length;
          if (a === void 0)return d.nodeType === 1 ? d.innerHTML.replace(Fd, "") : void 0;
          if (typeof a === "string" && !Hd.test(a) &&
            (n.htmlSerialize || !Ec.test(a)) && (n.leadingWhitespace || !xb.test(a)) && !E[(Gc.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(Fc, "<$1></$2>");
            try {
              for (; e < f; e++) {
                d = this[e] || {};
                if (d.nodeType === 1) {
                  c.cleanData(w(d, false));
                  d.innerHTML = a
                }
              }
              d = 0
            } catch (g) {}
          }
          d && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function () {
        var a = arguments[0];
        this.domManip(arguments, function (b) {
          a = this.parentNode;
          c.cleanData(w(this));
          a && a.replaceChild(b, this)
        });
        return a && (a.length || a.nodeType) ? this : this.remove()
      },
      detach: function (a) {
        return this.remove(a,
          true)
      },
      domManip: function (a, b) {
        var a = ic.apply([], a), d, e, f, g, h = 0, i = this.length, l = this, j = i - 1, m = a[0], k = c.isFunction(m);
        if (k || i > 1 && typeof m === "string" && !n.checkClone && Id.test(m))return this.each(function (d) {
          var c = l.eq(d);
          k && (a[0] = m.call(this, d, c.html()));
          c.domManip(a, b)
        });
        if (i) {
          g = c.buildFragment(a, this[0].ownerDocument, false, this);
          d = g.firstChild;
          g.childNodes.length === 1 && (g = d);
          if (d) {
            f = c.map(w(g, "script"), Qb);
            for (e = f.length; h < i; h++) {
              d = g;
              if (h !== j) {
                d = c.clone(d, true, true);
                e && c.merge(f, w(d, "script"))
              }
              b.call(this[h],
                d, h)
            }
            if (e) {
              g = f[f.length - 1].ownerDocument;
              c.map(f, Rb);
              for (h = 0; h < e; h++) {
                d = f[h];
                if (Ic.test(d.type || "") && !c._data(d, "globalEval") && c.contains(g, d)) d.src ? c._evalUrl && c._evalUrl(d.src) : c.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Jd, ""))
              }
            }
            g = d = null
          }
        }
        return this
      }
    });
    c.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (a, b) {
      c.fn[a] = function (a) {
        for (var e = 0, f = [], g = c(a), h = g.length - 1; e <= h; e++) {
          a = e === h ? this : this.clone(true);
          c(g[e])[b](a);
          jb.apply(f, a.get())
        }
        return this.pushStack(f)
      }
    });
    var sa, Ub = {}, za;
    n.shrinkWrapBlocks = function () {
      if (za != null)return za;
      za = false;
      var a, b, d;
      if ((b = m.getElementsByTagName("body")[0]) && b.style) {
        a = m.createElement("div");
        d = m.createElement("div");
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        b.appendChild(d).appendChild(a);
        if (typeof a.style.zoom !== C) {
          a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
          a.appendChild(m.createElement("div")).style.width = "5px";
          za = a.offsetWidth !== 3
        }
        b.removeChild(d);
        return za
      }
    };
    var Jc = /^margin/, Ca = RegExp("^(" + Oa + ")(?!px)[a-z%]+$", "i"), Y, Z, Kd = /^(top|right|bottom|left)$/;
    o.getComputedStyle ? (Y = function (a) {return a.ownerDocument.defaultView.opener ? a.ownerDocument.defaultView.getComputedStyle(a, null) : o.getComputedStyle(a, null)}, Z = function (a, b, d) {
        var e, f, g = a.style;
        f = (d = d || Y(a)) ? d.getPropertyValue(b) || d[b] : void 0;
        if (d) {
          f === "" && !c.contains(a.ownerDocument, a) && (f = c.style(a, b));
          if (Ca.test(f) && Jc.test(b)) {
            a = g.width;
            b = g.minWidth;
            e = g.maxWidth;
            g.minWidth = g.maxWidth = g.width = f;
            f = d.width;
            g.width = a;
            g.minWidth = b;
            g.maxWidth = e
          }
        }
        return f === void 0 ? f : f + ""
      }): m.documentElement.currentStyle
    &&
    (Y = function (a) {return a.currentStyle}, Z = function (a, b, d) {
      var c, f, g, h = a.style;
      g = (d = d || Y(a)) ? d[b] : void 0;
      g == null && (h && h[b]) && (g = h[b]);
      if (Ca.test(g) && !Kd.test(b)) {
        d = h.left;
        if (f = (c = a.runtimeStyle) && c.left) c.left = a.currentStyle.left;
        h.left = b === "fontSize" ? "1em" : g;
        g = h.pixelLeft + "px";
        h.left = d;
        if (f) c.left = f
      }
      return g === void 0 ? g : g + "" || "auto"
    });
    var Wa = function () {
      var a, b, d, c;
      if ((b = m.getElementsByTagName("body")[0]) && b.style) {
        a = m.createElement("div");
        d = m.createElement("div");
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
        b.appendChild(d).appendChild(a);
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
        Sa = Ta = false;
        Ua = true;
        if (o.getComputedStyle) {
          Sa = (o.getComputedStyle(a,
              null) || {}).top !== "1%";
          Ta = (o.getComputedStyle(a, null) || {width: "4px"}).width === "4px";
          c = a.appendChild(m.createElement("div"));
          c.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
          c.style.marginRight = c.style.width = "0";
          a.style.width = "1px";
          Ua = !parseFloat((o.getComputedStyle(c, null) || {}).marginRight);
          a.removeChild(c)
        }
        a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
        c = a.getElementsByTagName("td");
        c[0].style.cssText = "margin:0;border:0;padding:0;display:none";
        if (Va = c[0].offsetHeight === 0) {
          c[0].style.display = "";
          c[1].style.display = "none";
          Va = c[0].offsetHeight === 0
        }
        b.removeChild(d)
      }
    }, oa, ga, Kc, Sa, Ta, Va, Ua;
    oa = m.createElement("div");
    oa.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    if (ga = (Kc = oa.getElementsByTagName("a")[0]) && Kc.style) ga.cssText = "float:left;opacity:.5", n.opacity = "0.5" === ga.opacity, n.cssFloat = !!ga.cssFloat, oa.style.backgroundClip = "content-box", oa.cloneNode(!0).style.backgroundClip =
      "", n.clearCloneStyle = "content-box" === oa.style.backgroundClip, n.boxSizing = "" === ga.boxSizing || "" === ga.MozBoxSizing || "" === ga.WebkitBoxSizing, c.extend(n, {
      reliableHiddenOffsets: function () {
        Va == null && Wa();
        return Va
      }, boxSizingReliable: function () {
        Ta == null && Wa();
        return Ta
      }, pixelPosition: function () {
        Sa == null && Wa();
        return Sa
      }, reliableMarginRight: function () {
        Ua == null && Wa();
        return Ua
      }
    });
    c.swap = function (a, b, d, c) {
      var f, g = {};
      for (f in b) {
        g[f] = a.style[f];
        a.style[f] = b[f]
      }
      d = d.apply(a, c || []);
      for (f in b)a.style[f] = g[f];
      return d
    };
    var zb = /alpha\([^)]*\)/i, Ld = /opacity\s*=\s*([^)]*)/, Md = /^(none|table(?!-c[ea]).+)/, ad = RegExp("^(" + Oa + ")(.*)$", "i"), Nd = RegExp("^([+-])=(" + Oa + ")", "i"), Od = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    }, Lc = {letterSpacing: "0", fontWeight: "400"}, Xb = ["Webkit", "O", "Moz", "ms"];
    c.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var d = Z(a, "opacity");
              return d === "" ? "1" : d
            }
          }
        }
      }, cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      }, cssProps: {"float": n.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, d, e) {
        if (a && !(a.nodeType === 3 || a.nodeType === 8 || !a.style)) {
          var f, g, h, i = c.camelCase(b), l = a.style, b = c.cssProps[i] || (c.cssProps[i] = Wb(l, i));
          h = c.cssHooks[b] || c.cssHooks[i];
          if (d !== void 0) {
            g = typeof d;
            if (g === "string" && (f = Nd.exec(d))) {
              d = (f[1] + 1) * f[2] + parseFloat(c.css(a, b));
              g = "number"
            }
            if (!(d == null || d !== d)) {
              g === "number" && !c.cssNumber[i] && (d = d + "px");
              !n.clearCloneStyle && (d === "" && b.indexOf("background") === 0) && (l[b] =
                "inherit");
              if (!h || !("set" in h) || (d = h.set(a, d, e)) !== void 0)try {l[b] = d} catch (j) {}
            }
          } else return h && "get" in h && (f = h.get(a, false, e)) !== void 0 ? f : l[b]
        }
      }, css: function (a, b, d, e) {
        var f, g;
        g = c.camelCase(b);
        b = c.cssProps[g] || (c.cssProps[g] = Wb(a.style, g));
        (g = c.cssHooks[b] || c.cssHooks[g]) && "get" in g && (f = g.get(a, true, d));
        f === void 0 && (f = Z(a, b, e));
        f === "normal" && b in Lc && (f = Lc[b]);
        if (d === "" || d) {
          a = parseFloat(f);
          return d === true || c.isNumeric(a) ? a || 0 : f
        }
        return f
      }
    });
    c.each(["height", "width"], function (a, b) {
      c.cssHooks[b] = {
        get: function (a,
                       e, f) {if (e)return Md.test(c.css(a, "display")) && a.offsetWidth === 0 ? c.swap(a, Od, function () {return ac(a, b, f)}) : ac(a, b, f)},
        set: function (a, e, f) {
          var g = f && Y(a);
          return Zb(a, e, f ? $b(a, b, f, n.boxSizing && c.css(a, "boxSizing", false, g) === "border-box", g) : 0)
        }
      }
    });
    n.opacity || (c.cssHooks.opacity = {
      get: function (a, b) {return Ld.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""},
      set: function (a, b) {
        var d = a.style, e = a.currentStyle, f = c.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" :
          "", g = e && e.filter || d.filter || "";
        d.zoom = 1;
        if ((b >= 1 || b === "") && c.trim(g.replace(zb, "")) === "" && d.removeAttribute) {
          d.removeAttribute("filter");
          if (b === "" || e && !e.filter)return
        }
        d.filter = zb.test(g) ? g.replace(zb, f) : g + " " + f
      }
    });
    c.cssHooks.marginRight = Vb(n.reliableMarginRight, function (a, b) {if (b)return c.swap(a, {display: "inline-block"}, Z, [a, "marginRight"])});
    c.each({margin: "", padding: "", border: "Width"}, function (a, b) {
      c.cssHooks[a + b] = {
        expand: function (d) {
          for (var c = 0, f = {}, d = typeof d === "string" ? d.split(" ") : [d]; c < 4; c++)f[a +
          X[c] + b] = d[c] || d[c - 2] || d[0];
          return f
        }
      };
      if (!Jc.test(a)) c.cssHooks[a + b].set = Zb
    });
    c.fn.extend({
      css: function (a, b) {
        return fa(this, function (a, b, f) {
          var g, h = {}, i = 0;
          if (c.isArray(b)) {
            f = Y(a);
            for (g = b.length; i < g; i++)h[b[i]] = c.css(a, b[i], false, f);
            return h
          }
          return f !== void 0 ? c.style(a, b, f) : c.css(a, b)
        }, a, b, arguments.length > 1)
      },
      show: function () {return Yb(this, true)},
      hide: function () {return Yb(this)},
      toggle: function (a) {return typeof a === "boolean" ? a ? this.show() : this.hide() : this.each(function () {ta(this) ? c(this).show() : c(this).hide()})}
    });
    c.Tween = x;
    x.prototype = {
      constructor: x, init: function (a, b, d, e, f, g) {
        this.elem = a;
        this.prop = d;
        this.easing = f || "swing";
        this.options = b;
        this.start = this.now = this.cur();
        this.end = e;
        this.unit = g || (c.cssNumber[d] ? "" : "px")
      }, cur: function () {
        var a = x.propHooks[this.prop];
        return a && a.get ? a.get(this) : x.propHooks._default.get(this)
      }, run: function (a) {
        var b, d = x.propHooks[this.prop];
        this.pos = this.options.duration ? b = c.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
        this.now = (this.end - this.start) *
          b + this.start;
        this.options.step && this.options.step.call(this.elem, this.now, this);
        d && d.set ? d.set(this) : x.propHooks._default.set(this);
        return this
      }
    };
    x.prototype.init.prototype = x.prototype;
    x.propHooks = {
      _default: {
        get: function (a) {
          if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null))return a.elem[a.prop];
          a = c.css(a.elem, a.prop, "");
          return !a || a === "auto" ? 0 : a
        }, set: function (a) {
          if (c.fx.step[a.prop]) c.fx.step[a.prop](a); else a.elem.style && (a.elem.style[c.cssProps[a.prop]] != null || c.cssHooks[a.prop]) ?
            c.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    };
    x.propHooks.scrollTop = x.propHooks.scrollLeft = {set: function (a) {if (a.elem.nodeType && a.elem.parentNode) a.elem[a.prop] = a.now}};
    c.easing = {linear: function (a) {return a}, swing: function (a) {return 0.5 - Math.cos(a * Math.PI) / 2}};
    c.fx = x.prototype.init;
    c.fx.step = {};
    var ka, Xa, Pd = /^(?:toggle|show|hide)$/, Mc = RegExp("^(?:([+-])=|)(" + Oa + ")([a-z%]*)$", "i"), Qd = /queueHooks$/, Ea = [function (a, b, d) {
      var e, f, g, h, i, l, j = this, m = {}, k = a.style, p = a.nodeType && ta(a), o = c._data(a,
        "fxshow");
      if (!d.queue) {
        h = c._queueHooks(a, "fx");
        if (h.unqueued == null) {
          h.unqueued = 0;
          i = h.empty.fire;
          h.empty.fire = function () {h.unqueued || i()}
        }
        h.unqueued++;
        j.always(function () {
          j.always(function () {
            h.unqueued--;
            c.queue(a, "fx").length || h.empty.fire()
          })
        })
      }
      if (a.nodeType === 1 && ("height" in b || "width" in b)) {
        d.overflow = [k.overflow, k.overflowX, k.overflowY];
        l = c.css(a, "display");
        f = l === "none" ? c._data(a, "olddisplay") || Ba(a.nodeName) : l;
        if (f === "inline" && c.css(a, "float") === "none") !n.inlineBlockNeedsLayout || Ba(a.nodeName) ===
        "inline" ? k.display = "inline-block" : k.zoom = 1
      }
      if (d.overflow) {
        k.overflow = "hidden";
        n.shrinkWrapBlocks() || j.always(function () {
          k.overflow = d.overflow[0];
          k.overflowX = d.overflow[1];
          k.overflowY = d.overflow[2]
        })
      }
      for (e in b) {
        f = b[e];
        if (Pd.exec(f)) {
          delete b[e];
          g = g || f === "toggle";
          if (f === (p ? "hide" : "show"))if (f === "show" && o && o[e] !== void 0) p = true; else continue;
          m[e] = o && o[e] || c.style(a, e)
        } else l = void 0
      }
      if (c.isEmptyObject(m)) {if ((l === "none" ? Ba(a.nodeName) : l) === "inline") k.display = l} else {
        if (o) {if ("hidden" in o) p = o.hidden} else o =
          c._data(a, "fxshow", {});
        if (g) o.hidden = !p;
        p ? c(a).show() : j.done(function () {c(a).hide()});
        j.done(function () {
          var b;
          c._removeData(a, "fxshow");
          for (b in m)c.style(a, b, m[b])
        });
        for (e in m) {
          b = cc(p ? o[e] : 0, e, j);
          if (!(e in o)) {
            o[e] = b.start;
            if (p) {
              b.end = b.start;
              b.start = e === "width" || e === "height" ? 1 : 0
            }
          }
        }
      }
    }], ua = {
      "*": [function (a, b) {
        var d = this.createTween(a, b), e = d.cur(), f = Mc.exec(b), g = f && f[3] || (c.cssNumber[a] ? "" : "px"), h = (c.cssNumber[a] || g !== "px" && +e) && Mc.exec(c.css(d.elem, a)), i = 1, l = 20;
        if (h && h[3] !== g) {
          g = g || h[3];
          f = f || [];
          h = +e || 1;
          do {
            i = i || ".5";
            h = h / i;
            c.style(d.elem, a, h + g)
          } while (i !== (i = d.cur() / e) && i !== 1 && --l)
        }
        if (f) {
          h = d.start = +h || +e || 0;
          d.unit = g;
          d.end = f[1] ? h + (f[1] + 1) * f[2] : +f[2]
        }
        return d
      }]
    };
    c.Animation = c.extend(dc, {
      tweener: function (a, b) {
        if (c.isFunction(a)) {
          b = a;
          a = ["*"]
        } else a = a.split(" ");
        for (var d, e = 0, f = a.length; e < f; e++) {
          d = a[e];
          ua[d] = ua[d] || [];
          ua[d].unshift(b)
        }
      }, prefilter: function (a, b) {b ? Ea.unshift(a) : Ea.push(a)}
    });
    c.speed = function (a, b, d) {
      var e = a && typeof a === "object" ? c.extend({}, a) : {
          complete: d || !d && b || c.isFunction(a) && a,
          duration: a, easing: d && b || b && !c.isFunction(b) && b
        };
      e.duration = c.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
      if (e.queue == null || e.queue === true) e.queue = "fx";
      e.old = e.complete;
      e.complete = function () {
        c.isFunction(e.old) && e.old.call(this);
        e.queue && c.dequeue(this, e.queue)
      };
      return e
    };
    c.fn.extend({
      fadeTo: function (a, b, c, e) {return this.filter(ta).css("opacity", 0).show().end().animate({opacity: b}, a, c, e)},
      animate: function (a, b, d, e) {
        var f = c.isEmptyObject(a),
          g = c.speed(b, d, e), b = function () {
            var b = dc(this, c.extend({}, a), g);
            (f || c._data(this, "finish")) && b.stop(true)
          };
        b.finish = b;
        return f || g.queue === false ? this.each(b) : this.queue(g.queue, b)
      },
      stop: function (a, b, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop;
          b(d)
        };
        if (typeof a !== "string") {
          d = b;
          b = a;
          a = void 0
        }
        b && a !== false && this.queue(a || "fx", []);
        return this.each(function () {
          var b = true, g = a != null && a + "queueHooks", h = c.timers, i = c._data(this);
          if (g) i[g] && i[g].stop && e(i[g]); else for (g in i)i[g] && (i[g].stop && Qd.test(g)) && e(i[g]);
          for (g = h.length; g--;)if (h[g].elem === this && (a == null || h[g].queue === a)) {
            h[g].anim.stop(d);
            b = false;
            h.splice(g, 1)
          }
          (b || !d) && c.dequeue(this, a)
        })
      },
      finish: function (a) {
        a !== false && (a = a || "fx");
        return this.each(function () {
          var b, d = c._data(this), e = d[a + "queue"];
          b = d[a + "queueHooks"];
          var f = c.timers, g = e ? e.length : 0;
          d.finish = true;
          c.queue(this, a, []);
          b && b.stop && b.stop.call(this, true);
          for (b = f.length; b--;)if (f[b].elem === this && f[b].queue === a) {
            f[b].anim.stop(true);
            f.splice(b, 1)
          }
          for (b = 0; b < g; b++)e[b] && e[b].finish && e[b].finish.call(this);
          delete d.finish
        })
      }
    });
    c.each(["toggle", "show", "hide"], function (a, b) {
      var d = c.fn[b];
      c.fn[b] = function (a, c, g) {return a == null || typeof a === "boolean" ? d.apply(this, arguments) : this.animate(Da(b, true), a, c, g)}
    });
    c.each({
      slideDown: Da("show"),
      slideUp: Da("hide"),
      slideToggle: Da("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (a, b) {c.fn[a] = function (a, c, f) {return this.animate(b, a, c, f)}});
    c.timers = [];
    c.fx.tick = function () {
      var a, b = c.timers, d = 0;
      for (ka = c.now(); d < b.length; d++) {
        a =
          b[d];
        !a() && b[d] === a && b.splice(d--, 1)
      }
      b.length || c.fx.stop();
      ka = void 0
    };
    c.fx.timer = function (a) {
      c.timers.push(a);
      a() ? c.fx.start() : c.timers.pop()
    };
    c.fx.interval = 13;
    c.fx.start = function () {Xa || (Xa = setInterval(c.fx.tick, c.fx.interval))};
    c.fx.stop = function () {
      clearInterval(Xa);
      Xa = null
    };
    c.fx.speeds = {slow: 600, fast: 200, _default: 400};
    c.fn.delay = function (a, b) {
      a = c.fx ? c.fx.speeds[a] || a : a;
      return this.queue(b || "fx", function (b, c) {
        var f = setTimeout(b, a);
        c.stop = function () {clearTimeout(f)}
      })
    };
    var U, pa, Ab, Ya, Bb;
    pa = m.createElement("div");
    pa.setAttribute("className", "t");
    pa.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ya = pa.getElementsByTagName("a")[0];
    Ab = m.createElement("select");
    Bb = Ab.appendChild(m.createElement("option"));
    U = pa.getElementsByTagName("input")[0];
    Ya.style.cssText = "top:1px";
    n.getSetAttribute = "t" !== pa.className;
    n.style = /top/.test(Ya.getAttribute("style"));
    n.hrefNormalized = "/a" === Ya.getAttribute("href");
    n.checkOn = !!U.value;
    n.optSelected = Bb.selected;
    n.enctype = !!m.createElement("form").enctype;
    Ab.disabled = !0;
    n.optDisabled = !Bb.disabled;
    U = m.createElement("input");
    U.setAttribute("value", "");
    n.input = "" === U.getAttribute("value");
    U.value = "t";
    U.setAttribute("type", "radio");
    n.radioValue = "t" === U.value;
    var Rd = /\r/g;
    c.fn.extend({
      val: function (a) {
        var b, d, e, f = this[0];
        if (arguments.length) {
          e = c.isFunction(a);
          return this.each(function (d) {
            if (this.nodeType === 1) {
              d = e ? a.call(this, d, c(this).val()) : a;
              d == null ? d = "" : typeof d === "number" ? d = d + "" : c.isArray(d) && (d = c.map(d, function (a) {return a == null ? "" : a + ""}));
              b = c.valHooks[this.type] ||
                c.valHooks[this.nodeName.toLowerCase()];
              if (!b || !("set" in b) || b.set(this, d, "value") === void 0) this.value = d
            }
          })
        }
        if (f) {
          if ((b = c.valHooks[f.type] || c.valHooks[f.nodeName.toLowerCase()]) && "get" in b && (d = b.get(f, "value")) !== void 0)return d;
          d = f.value;
          return typeof d === "string" ? d.replace(Rd, "") : d == null ? "" : d
        }
      }
    });
    c.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = c.find.attr(a, "value");
            return b != null ? b : c.trim(c.text(a))
          }
        }, select: {
          get: function (a) {
            for (var b, d = a.options, e = a.selectedIndex, f = (a = a.type === "select-one" ||
              e < 0) ? null : [], g = a ? e + 1 : d.length, h = e < 0 ? g : a ? e : 0; h < g; h++) {
              b = d[h];
              if ((b.selected || h === e) && (n.optDisabled ? !b.disabled : b.getAttribute("disabled") === null) && (!b.parentNode.disabled || !c.nodeName(b.parentNode, "optgroup"))) {
                b = c(b).val();
                if (a)return b;
                f.push(b)
              }
            }
            return f
          }, set: function (a, b) {
            for (var d, e, f = a.options, g = c.makeArray(b), h = f.length; h--;) {
              e = f[h];
              if (c.inArray(c.valHooks.option.get(e), g) >= 0)try {e.selected = d = true} catch (i) {e.scrollHeight} else e.selected = false
            }
            if (!d) a.selectedIndex = -1;
            return f
          }
        }
      }
    });
    c.each(["radio",
      "checkbox"], function () {
      c.valHooks[this] = {set: function (a, b) {if (c.isArray(b))return a.checked = c.inArray(c(a).val(), b) >= 0}};
      if (!n.checkOn) c.valHooks[this].get = function (a) {return a.getAttribute("value") === null ? "on" : a.value}
    });
    var qa, Nc, V = c.expr.attrHandle, Cb = /^(?:checked|selected)$/i, ha = n.getSetAttribute, Za = n.input;
    c.fn.extend({
      attr: function (a, b) {return fa(this, c.attr, a, b, arguments.length > 1)},
      removeAttr: function (a) {return this.each(function () {c.removeAttr(this, a)})}
    });
    c.extend({
      attr: function (a, b, d) {
        var e,
          f, g = a.nodeType;
        if (a && !(g === 3 || g === 8 || g === 2)) {
          if (typeof a.getAttribute === C)return c.prop(a, b, d);
          if (g !== 1 || !c.isXMLDoc(a)) {
            b = b.toLowerCase();
            e = c.attrHooks[b] || (c.expr.match.bool.test(b) ? Nc : qa)
          }
          if (d !== void 0)if (d === null) c.removeAttr(a, b); else {
            if (e && "set" in e && (f = e.set(a, d, b)) !== void 0)return f;
            a.setAttribute(b, d + "");
            return d
          } else {
            if (e && "get" in e && (f = e.get(a, b)) !== null)return f;
            f = c.find.attr(a, b);
            return f == null ? void 0 : f
          }
        }
      },
      removeAttr: function (a, b) {
        var d, e, f = 0, g = b && b.match(M);
        if (g && a.nodeType === 1)for (; d =
                                           g[f++];) {
          e = c.propFix[d] || d;
          c.expr.match.bool.test(d) ? Za && ha || !Cb.test(d) ? a[e] = false : a[c.camelCase("default-" + d)] = a[e] = false : c.attr(a, d, "");
          a.removeAttribute(ha ? d : e)
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!n.radioValue && b === "radio" && c.nodeName(a, "input")) {
              var d = a.value;
              a.setAttribute("type", b);
              if (d) a.value = d;
              return b
            }
          }
        }
      }
    });
    Nc = {
      set: function (a, b, d) {
        b === false ? c.removeAttr(a, d) : Za && ha || !Cb.test(d) ? a.setAttribute(!ha && c.propFix[d] || d, d) : a[c.camelCase("default-" + d)] = a[d] = true;
        return d
      }
    };
    c.each(c.expr.match.bool.source.match(/\w+/g),
      function (a, b) {
        var d = V[b] || c.find.attr;
        V[b] = Za && ha || !Cb.test(b) ? function (a, b, c) {
            var h, i;
            if (!c) {
              i = V[b];
              V[b] = h;
              h = d(a, b, c) != null ? b.toLowerCase() : null;
              V[b] = i
            }
            return h
          } : function (a, b, d) {if (!d)return a[c.camelCase("default-" + b)] ? b.toLowerCase() : null}
      });
    if (!Za || !ha) c.attrHooks.value = {set: function (a, b, d) {if (c.nodeName(a, "input")) a.defaultValue = b; else return qa && qa.set(a, b, d)}};
    ha || (qa = {
      set: function (a, b, c) {
        var e = a.getAttributeNode(c);
        e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c));
        e.value = b = b + "";
        if (c === "value" || b === a.getAttribute(c))return b
      }
    }, V.id = V.name = V.coords = function (a, b, c) {
      var e;
      if (!c)return (e = a.getAttributeNode(b)) && e.value !== "" ? e.value : null
    }, c.valHooks.button = {
      get: function (a, b) {
        var c = a.getAttributeNode(b);
        if (c && c.specified)return c.value
      }, set: qa.set
    }, c.attrHooks.contenteditable = {set: function (a, b, c) {qa.set(a, b === "" ? false : b, c)}}, c.each(["width", "height"], function (a, b) {
      c.attrHooks[b] = {
        set: function (a, c) {
          if (c === "") {
            a.setAttribute(b, "auto");
            return c
          }
        }
      }
    }));
    n.style || (c.attrHooks.style = {
      get: function (a) {
        return a.style.cssText || void 0
      }, set: function (a, b) {return a.style.cssText = b + ""}
    });
    var Sd = /^(?:input|select|textarea|button|object)$/i, Td = /^(?:a|area)$/i;
    c.fn.extend({
      prop: function (a, b) {return fa(this, c.prop, a, b, arguments.length > 1)},
      removeProp: function (a) {
        a = c.propFix[a] || a;
        return this.each(function () {
          try {
            this[a] = void 0;
            delete this[a]
          } catch (b) {}
        })
      }
    });
    c.extend({
      propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, d) {
        var e, f, g;
        g = a.nodeType;
        if (a && !(g === 3 || g === 8 || g === 2)) {
          if (g = g !== 1 || !c.isXMLDoc(a)) {
            b = c.propFix[b] || b;
            f = c.propHooks[b]
          }
          return d !== void 0 ? f && "set" in f && (e = f.set(a, d, b)) !== void 0 ? e : a[b] = d : f && "get" in f && (e = f.get(a, b)) !== null ? e : a[b]
        }
      }, propHooks: {
        tabIndex: {
          get: function (a) {
            var b = c.find.attr(a, "tabindex");
            return b ? parseInt(b, 10) : Sd.test(a.nodeName) || Td.test(a.nodeName) && a.href ? 0 : -1
          }
        }
      }
    });
    n.hrefNormalized || c.each(["href", "src"], function (a, b) {c.propHooks[b] = {get: function (a) {return a.getAttribute(b, 4)}}});
    n.optSelected || (c.propHooks.selected = {
      get: function (a) {
        if (a = a.parentNode) {
          a.selectedIndex;
          a.parentNode &&
          a.parentNode.selectedIndex
        }
        return null
      }
    });
    c.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {c.propFix[this.toLowerCase()] = this});
    n.enctype || (c.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    c.fn.extend({
      addClass: function (a) {
        var b, d, e, f, g, h = 0, i = this.length;
        b = typeof a === "string" && a;
        if (c.isFunction(a))return this.each(function (b) {c(this).addClass(a.call(this, b, this.className))});
        if (b)for (b = (a || "").match(M) || []; h < i; h++) {
          d =
            this[h];
          if (e = d.nodeType === 1 && (d.className ? (" " + d.className + " ").replace(Db, " ") : " ")) {
            for (g = 0; f = b[g++];)e.indexOf(" " + f + " ") < 0 && (e = e + (f + " "));
            e = c.trim(e);
            if (d.className !== e) d.className = e
          }
        }
        return this
      },
      removeClass: function (a) {
        var b, d, e, f, g, h = 0, i = this.length;
        b = arguments.length === 0 || typeof a === "string" && a;
        if (c.isFunction(a))return this.each(function (b) {c(this).removeClass(a.call(this, b, this.className))});
        if (b)for (b = (a || "").match(M) || []; h < i; h++) {
          d = this[h];
          if (e = d.nodeType === 1 && (d.className ? (" " + d.className +
                " ").replace(Db, " ") : "")) {
            for (g = 0; f = b[g++];)for (; e.indexOf(" " + f + " ") >= 0;)e = e.replace(" " + f + " ", " ");
            e = a ? c.trim(e) : "";
            if (d.className !== e) d.className = e
          }
        }
        return this
      },
      toggleClass: function (a, b) {
        var d = typeof a;
        return typeof b === "boolean" && d === "string" ? b ? this.addClass(a) : this.removeClass(a) : c.isFunction(a) ? this.each(function (d) {c(this).toggleClass(a.call(this, d, this.className, b), b)}) : this.each(function () {
              if (d === "string")for (var b, f = 0, g = c(this), h = a.match(M) || []; b = h[f++];)g.hasClass(b) ? g.removeClass(b) :
                g.addClass(b); else if (d === C || d === "boolean") {
                this.className && c._data(this, "__className__", this.className);
                this.className = this.className || a === false ? "" : c._data(this, "__className__") || ""
              }
            })
      },
      hasClass: function (a) {
        for (var a = " " + a + " ", b = 0, c = this.length; b < c; b++)if (this[b].nodeType === 1 && (" " + this[b].className + " ").replace(Db, " ").indexOf(a) >= 0)return true;
        return false
      }
    });
    c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
      function (a, b) {c.fn[b] = function (a, c) {return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)}});
    c.fn.extend({
      hover: function (a, b) {return this.mouseenter(a).mouseleave(b || a)},
      bind: function (a, b, c) {return this.on(a, null, b, c)},
      unbind: function (a, b) {return this.off(a, null, b)},
      delegate: function (a, b, c, e) {return this.on(b, a, c, e)},
      undelegate: function (a, b, c) {return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)}
    });
    var Eb = c.now(), Fb = /\?/, Ud = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    c.parseJSON = function (a) {
      if (o.JSON && o.JSON.parse)return o.JSON.parse(a + "");
      var b, d = null, e = c.trim(a + "");
      return e && !c.trim(e.replace(Ud, function (a, c, e, i) {
        b && c && (d = 0);
        if (d === 0)return a;
        b = e || c;
        d = d + (!i - !e);
        return ""
      })) ? Function("return " + e)() : c.error("Invalid JSON: " + a)
    };
    c.parseXML = function (a) {
      var b, d;
      if (!a || typeof a !== "string")return null;
      try {
        if (o.DOMParser) {
          d = new DOMParser;
          b = d.parseFromString(a, "text/xml")
        } else {
          b = new ActiveXObject("Microsoft.XMLDOM");
          b.async = "false";
          b.loadXML(a)
        }
      } catch (e) {b = void 0}
      (!b || !b.documentElement || b.getElementsByTagName("parsererror").length) && c.error("Invalid XML: " + a);
      return b
    };
    var ia, W, Vd = /#.*$/, Oc = /([?&])_=[^&]*/, Wd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Xd = /^(?:GET|HEAD)$/, Yd = /^\/\//, Pc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qc = {}, gb = {}, Rc = "*/".concat("*");
    try {W = WB_wombat_self_location.href} catch (he) {W = m.createElement("a"), W.href = "", W = W.href}
    ia = Pc.exec(W.toLowerCase()) || [];
    c.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: W,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ia[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rc,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /xml/, html: /html/, json: /json/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {"* text": String, "text html": !0, "text json": c.parseJSON, "text xml": c.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (a, b) {
        return b ? hb(hb(a,
            c.ajaxSettings), b) : hb(c.ajaxSettings, a)
      },
      ajaxPrefilter: ec(Qc),
      ajaxTransport: ec(gb),
      ajax: function (a, b) {
        function d (a, b, d, e) {
          var f, m, q, r;
          r = b;
          if (y !== 2) {
            y = 2;
            i && clearTimeout(i);
            j = void 0;
            h = e || "";
            v.readyState = a > 0 ? 4 : 0;
            e = a >= 200 && a < 300 || a === 304;
            if (d) {
              q = k;
              for (var w = v, x, z, A, B, E = q.contents, C = q.dataTypes; C[0] === "*";) {
                C.shift();
                z === void 0 && (z = q.mimeType || w.getResponseHeader("Content-Type"))
              }
              if (z)for (B in E)if (E[B] && E[B].test(z)) {
                C.unshift(B);
                break
              }
              if (C[0] in d) A = C[0]; else {
                for (B in d) {
                  if (!C[0] || q.converters[B + " " +
                    C[0]]) {
                    A = B;
                    break
                  }
                  x || (x = B)
                }
                A = A || x
              }
              if (A) {
                A !== C[0] && C.unshift(A);
                q = d[A]
              } else q = void 0
            }
            a:{
              d = k;
              x = q;
              z = v;
              A = e;
              var G, I, F, w = {}, E = d.dataTypes.slice();
              if (E[1])for (I in d.converters)w[I.toLowerCase()] = d.converters[I];
              for (B = E.shift(); B;) {
                d.responseFields[B] && (z[d.responseFields[B]] = x);
                !F && (A && d.dataFilter) && (x = d.dataFilter(x, d.dataType));
                F = B;
                if (B = E.shift())if (B === "*") B = F; else if (F !== "*" && F !== B) {
                  I = w[F + " " + B] || w["* " + B];
                  if (!I)for (G in w) {
                    q = G.split(" ");
                    if (q[1] === B)if (I = w[F + " " + q[0]] || w["* " + q[0]]) {
                      if (I === true) I =
                        w[G]; else if (w[G] !== true) {
                        B = q[0];
                        E.unshift(q[1])
                      }
                      break
                    }
                  }
                  if (I !== true)if (I && d["throws"]) x = I(x); else try {x = I(x)} catch (H) {
                    q = {
                      state: "parsererror",
                      error: I ? H : "No conversion from " + F + " to " + B
                    };
                    break a
                  }
                }
              }
              q = {state: "success", data: x}
            }
            if (e) {
              if (k.ifModified) {
                (r = v.getResponseHeader("Last-Modified")) && (c.lastModified[g] = r);
                (r = v.getResponseHeader("etag")) && (c.etag[g] = r)
              }
              if (a === 204 || k.type === "HEAD") r = "nocontent"; else if (a === 304) r = "notmodified"; else {
                r = q.state;
                f = q.data;
                m = q.error;
                e = !m
              }
            } else {
              m = r;
              if (a || !r) {
                r = "error";
                a <
                0 && (a = 0)
              }
            }
            v.status = a;
            v.statusText = (b || r) + "";
            e ? s.resolveWith(n, [f, r, v]) : s.rejectWith(n, [v, r, m]);
            v.statusCode(u);
            u = void 0;
            l && o.trigger(e ? "ajaxSuccess" : "ajaxError", [v, k, e ? f : m]);
            t.fireWith(n, [v, r]);
            if (l) {
              o.trigger("ajaxComplete", [v, k]);
              --c.active || c.event.trigger("ajaxStop")
            }
          }
        }

        if (typeof a === "object") {
          b = a;
          a = void 0
        }
        var b = b || {}, e, f, g, h, i, l, j, m, k = c.ajaxSetup({}, b), n = k.context || k, o = k.context && (n.nodeType || n.jquery) ? c(n) : c.event, s = c.Deferred(), t = c.Callbacks("once memory"), u = k.statusCode || {}, r = {}, w = {}, y = 0, x =
          "canceled", v = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b;
            if (y === 2) {
              if (!m)for (m = {}; b = Wd.exec(h);)m[b[1].toLowerCase()] = b[2];
              b = m[a.toLowerCase()]
            }
            return b == null ? null : b
          },
          getAllResponseHeaders: function () {return y === 2 ? h : null},
          setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            if (!y) {
              a = w[c] = w[c] || a;
              r[a] = b
            }
            return this
          },
          overrideMimeType: function (a) {
            if (!y) k.mimeType = a;
            return this
          },
          statusCode: function (a) {
            var b;
            if (a)if (y < 2)for (b in a)u[b] = [u[b], a[b]]; else v.always(a[v.status]);
            return this
          },
          abort: function (a) {
            a =
              a || x;
            j && j.abort(a);
            d(0, a);
            return this
          }
        };
        s.promise(v).complete = t.add;
        v.success = v.done;
        v.error = v.fail;
        k.url = ((a || k.url || W) + "").replace(Vd, "").replace(Yd, ia[1] + "//");
        k.type = b.method || b.type || k.method || k.type;
        k.dataTypes = c.trim(k.dataType || "*").toLowerCase().match(M) || [""];
        if (k.crossDomain == null) {
          e = Pc.exec(k.url.toLowerCase());
          k.crossDomain = !(!e || !(e[1] !== ia[1] || e[2] !== ia[2] || (e[3] || (e[1] === "http:" ? "80" : "443")) !== (ia[3] || (ia[1] === "http:" ? "80" : "443"))))
        }
        if (k.data && k.processData && typeof k.data !== "string") k.data =
          c.param(k.data, k.traditional);
        fc(Qc, k, b, v);
        if (y === 2)return v;
        (l = c.event && k.global) && c.active++ === 0 && c.event.trigger("ajaxStart");
        k.type = k.type.toUpperCase();
        k.hasContent = !Xd.test(k.type);
        g = k.url;
        if (!k.hasContent) {
          if (k.data) {
            g = k.url = k.url + ((Fb.test(g) ? "&" : "?") + k.data);
            delete k.data
          }
          if (k.cache === false) k.url = Oc.test(g) ? g.replace(Oc, "$1_=" + Eb++) : g + (Fb.test(g) ? "&" : "?") + "_=" + Eb++
        }
        if (k.ifModified) {
          c.lastModified[g] && v.setRequestHeader("If-Modified-Since", c.lastModified[g]);
          c.etag[g] && v.setRequestHeader("If-None-Match",
            c.etag[g])
        }
        (k.data && k.hasContent && k.contentType !== false || b.contentType) && v.setRequestHeader("Content-Type", k.contentType);
        v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + (k.dataTypes[0] !== "*" ? ", " + Rc + "; q=0.01" : "") : k.accepts["*"]);
        for (f in k.headers)v.setRequestHeader(f, k.headers[f]);
        if (k.beforeSend && (k.beforeSend.call(n, v, k) === false || y === 2))return v.abort();
        x = "abort";
        for (f in{success: 1, error: 1, complete: 1})v[f](k[f]);
        if (j = fc(gb, k, b, v)) {
          v.readyState =
            1;
          l && o.trigger("ajaxSend", [v, k]);
          k.async && k.timeout > 0 && (i = setTimeout(function () {v.abort("timeout")}, k.timeout));
          try {
            y = 1;
            j.send(r, d)
          } catch (z) {if (y < 2) d(-1, z); else throw z;}
        } else d(-1, "No Transport");
        return v
      },
      getJSON: function (a, b, d) {return c.get(a, b, d, "json")},
      getScript: function (a, b) {return c.get(a, void 0, b, "script")}
    });
    c.each(["get", "post"], function (a, b) {
      c[b] = function (a, e, f, g) {
        if (c.isFunction(e)) {
          g = g || f;
          f = e;
          e = void 0
        }
        return c.ajax({url: a, type: b, dataType: g, data: e, success: f})
      }
    });
    c._evalUrl = function (a) {
      return c.ajax({
        url: a,
        type: "GET", dataType: "script", async: false, global: false, "throws": true
      })
    };
    c.fn.extend({
      wrapAll: function (a) {
        if (c.isFunction(a))return this.each(function (b) {c(this).wrapAll(a.call(this, b))});
        if (this[0]) {
          var b = c(a, this[0].ownerDocument).eq(0).clone(true);
          this[0].parentNode && b.insertBefore(this[0]);
          b.map(function () {
            for (var a = this; a.firstChild && a.firstChild.nodeType === 1;)a = a.firstChild;
            return a
          }).append(this)
        }
        return this
      },
      wrapInner: function (a) {
        return c.isFunction(a) ? this.each(function (b) {
            c(this).wrapInner(a.call(this,
              b))
          }) : this.each(function () {
            var b = c(this), d = b.contents();
            d.length ? d.wrapAll(a) : b.append(a)
          })
      },
      wrap: function (a) {
        var b = c.isFunction(a);
        return this.each(function (d) {c(this).wrapAll(b ? a.call(this, d) : a)})
      },
      unwrap: function () {return this.parent().each(function () {c.nodeName(this, "body") || c(this).replaceWith(this.childNodes)}).end()}
    });
    c.expr.filters.hidden = function (a) {return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !n.reliableHiddenOffsets() && (a.style && a.style.display || c.css(a, "display")) === "none"};
    c.expr.filters.visible =
      function (a) {return !c.expr.filters.hidden(a)};
    var Zd = /%20/g, cd = /\[\]$/, Sc = /\r?\n/g, $d = /^(?:submit|button|image|reset|file)$/i, ae = /^(?:input|select|textarea|keygen)/i;
    c.param = function (a, b) {
      var d, e = [], f = function (a, b) {
        b = c.isFunction(b) ? b() : b == null ? "" : b;
        e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
      b === void 0 && (b = c.ajaxSettings && c.ajaxSettings.traditional);
      if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) c.each(a, function () {f(this.name, this.value)}); else for (d in a)ib(d, a[d], b, f);
      return e.join("&").replace(Zd,
        "+")
    };
    c.fn.extend({
      serialize: function () {return c.param(this.serializeArray())}, serializeArray: function () {
        return this.map(function () {
          var a = c.prop(this, "elements");
          return a ? c.makeArray(a) : this
        }).filter(function () {
          var a = this.type;
          return this.name && !c(this).is(":disabled") && ae.test(this.nodeName) && !$d.test(a) && (this.checked || !eb.test(a))
        }).map(function (a, b) {
          var d = c(this).val();
          return d == null ? null : c.isArray(d) ? c.map(d, function (a) {
                return {
                  name: b.name,
                  value: a.replace(Sc, "\r\n")
                }
              }) : {
                name: b.name, value: d.replace(Sc,
                  "\r\n")
              }
        }).get()
      }
    });
    c.ajaxSettings.xhr = void 0 !== o.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && gc()))a:{
          try {
            a = new o.ActiveXObject("Microsoft.XMLHTTP");
            break a
          } catch (b) {}
          a = void 0
        }
        return a
      } : gc;
    var be = 0, $a = {}, ab = c.ajaxSettings.xhr();
    o.attachEvent && o.attachEvent("onunload", function () {for (var a in $a)$a[a](void 0, true)});
    n.cors = !!ab && "withCredentials" in ab;
    (ab = n.ajax = !!ab) && c.ajaxTransport(function (a) {
      if (!a.crossDomain || n.cors) {
        var b;
        return {
          send: function (d,
                          e) {
            var f, g = a.xhr(), h = ++be;
            g.open(a.type, a.url, a.async, a.username, a.password);
            if (a.xhrFields)for (f in a.xhrFields)g[f] = a.xhrFields[f];
            a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
            !a.crossDomain && !d["X-Requested-With"] && (d["X-Requested-With"] = "XMLHttpRequest");
            for (f in d)d[f] !== void 0 && g.setRequestHeader(f, d[f] + "");
            g.send(a.hasContent && a.data || null);
            b = function (d, f) {
              var j, m, k;
              if (b && (f || g.readyState === 4)) {
                delete $a[h];
                b = void 0;
                g.onreadystatechange = c.noop;
                if (f) g.readyState !== 4 && g.abort();
                else {
                  k = {};
                  j = g.status;
                  if (typeof g.responseText === "string") k.text = g.responseText;
                  try {m = g.statusText} catch (n) {m = ""}
                  !j && a.isLocal && !a.crossDomain ? j = k.text ? 200 : 404 : j === 1223 && (j = 204)
                }
              }
              k && e(j, m, k, g.getAllResponseHeaders())
            };
            a.async ? g.readyState === 4 ? setTimeout(b) : g.onreadystatechange = $a[h] = b : b()
          }, abort: function () {b && b(void 0, true)}
        }
      }
    });
    c.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /(?:java|ecma)script/},
      converters: {
        "text script": function (a) {
          c.globalEval(a);
          return a
        }
      }
    });
    c.ajaxPrefilter("script", function (a) {
      if (a.cache === void 0) a.cache = false;
      if (a.crossDomain) {
        a.type = "GET";
        a.global = false
      }
    });
    c.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, d = m.head || c("head")[0] || m.documentElement;
        return {
          send: function (c, f) {
            b = m.createElement("script");
            b.async = true;
            if (a.scriptCharset) b.charset = a.scriptCharset;
            b.src = a.url;
            b.onload = b.onreadystatechange = function (a, c) {
              if (c || !b.readyState || /loaded|complete/.test(b.readyState)) {
                b.onload = b.onreadystatechange = null;
                b.parentNode &&
                b.parentNode.removeChild(b);
                b = null;
                c || f(200, "success")
              }
            };
            d.insertBefore(b, d.firstChild)
          }, abort: function () {if (b) b.onload(void 0, true)}
        }
      }
    });
    var Tc = [], Gb = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var a = Tc.pop() || c.expando + "_" + Eb++;
        this[a] = true;
        return a
      }
    });
    c.ajaxPrefilter("json jsonp", function (a, b, d) {
      var e, f, g, h = a.jsonp !== false && (Gb.test(a.url) ? "url" : typeof a.data === "string" && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(a.data) && "data");
      if (h ||
        a.dataTypes[0] === "jsonp") {
        e = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
        if (h) a[h] = a[h].replace(Gb, "$1" + e); else if (a.jsonp !== false) a.url = a.url + ((Fb.test(a.url) ? "&" : "?") + a.jsonp + "=" + e);
        a.converters["script json"] = function () {
          g || c.error(e + " was not called");
          return g[0]
        };
        a.dataTypes[0] = "json";
        f = o[e];
        o[e] = function () {
          g = arguments;
          window.WAYBACK_JSON = arguments;
        };
        d.always(function () {
          o[e] = f;
          if (a[e]) {
            a.jsonpCallback = b.jsonpCallback;
            Tc.push(e)
          }
          g && c.isFunction(f) && f(g[0]);
          g = f = void 0
        });
        return "script"
      }
    });
    c.parseHTML =
      function (a, b, d) {
        if (!a || typeof a !== "string")return null;
        if (typeof b === "boolean") {
          d = b;
          b = false
        }
        var b = b || m, e = xc.exec(a), d = !d && [];
        if (e)return [b.createElement(e[1])];
        e = c.buildFragment([a], b, d);
        d && d.length && c(d).remove();
        return c.merge([], e.childNodes)
      };
    var Uc = c.fn.load;
    c.fn.load = function (a, b, d) {
      if (typeof a !== "string" && Uc)return Uc.apply(this, arguments);
      var e, f, g, h = this, i = a.indexOf(" ");
      if (i >= 0) {
        e = c.trim(a.slice(i, a.length));
        a = a.slice(0, i)
      }
      if (c.isFunction(b)) {
        d = b;
        b = void 0
      } else b && typeof b === "object" && (g =
        "POST");
      h.length > 0 && c.ajax({url: a, type: g, dataType: "html", data: b}).done(function (a) {
        f = arguments;
        h.html(e ? c("<div>").append(c.parseHTML(a)).find(e) : a)
      }).complete(d && function (a, b) {h.each(d, f || [a.responseText, b, a])});
      return this
    };
    c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {c.fn[b] = function (a) {return this.on(b, a)}});
    c.expr.filters.animated = function (a) {return c.grep(c.timers, function (b) {return a === b.elem}).length};
    var Vc = o.document.documentElement;
    c.offset =
      {
        setOffset: function (a, b, d) {
          var e, f, g, h = c.css(a, "position"), i = c(a), l = {};
          if (h === "static") a.style.position = "relative";
          g = i.offset();
          f = c.css(a, "top");
          e = c.css(a, "left");
          if ((h === "absolute" || h === "fixed") && c.inArray("auto", [f, e]) > -1) {
            e = i.position();
            f = e.top;
            e = e.left
          } else {
            f = parseFloat(f) || 0;
            e = parseFloat(e) || 0
          }
          c.isFunction(b) && (b = b.call(a, d, g));
          if (b.top != null) l.top = b.top - g.top + f;
          if (b.left != null) l.left = b.left - g.left + e;
          "using" in b ? b.using.call(a, l) : i.css(l)
        }
      };
    c.fn.extend({
      offset: function (a) {
        if (arguments.length)return a === void 0 ? this : this.each(function (b) {c.offset.setOffset(this, a, b)});
        var b, d, e = {top: 0, left: 0}, f = (d = this[0]) && d.ownerDocument;
        if (f) {
          b = f.documentElement;
          if (!c.contains(b, d))return e;
          typeof d.getBoundingClientRect !== C && (e = d.getBoundingClientRect());
          d = hc(f);
          return {
            top: e.top + (d.pageYOffset || b.scrollTop) - (b.clientTop || 0),
            left: e.left + (d.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
          }
        }
      },
      position: function () {
        if (this[0]) {
          var a, b, d = {top: 0, left: 0}, e = this[0];
          if (c.css(e, "position") === "fixed") b = e.getBoundingClientRect();
          else {
            a = this.offsetParent();
            b = this.offset();
            c.nodeName(a[0], "html") || (d = a.offset());
            d.top = d.top + c.css(a[0], "borderTopWidth", true);
            d.left = d.left + c.css(a[0], "borderLeftWidth", true)
          }
          return {
            top: b.top - d.top - c.css(e, "marginTop", true),
            left: b.left - d.left - c.css(e, "marginLeft", true)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var a = this.offsetParent || Vc; a && !c.nodeName(a, "html") && c.css(a, "position") === "static";)a = a.offsetParent;
          return a || Vc
        })
      }
    });
    c.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"},
      function (a, b) {
        var d = /Y/.test(b);
        c.fn[a] = function (e) {
          return fa(this, function (a, e, h) {
            var i = hc(a);
            if (h === void 0)return i ? b in i ? i[b] : i.document.documentElement[e] : a[e];
            i ? i.scrollTo(!d ? h : c(i).scrollLeft(), d ? h : c(i).scrollTop()) : a[e] = h
          }, a, e, arguments.length, null)
        }
      });
    c.each(["top", "left"], function (a, b) {
      c.cssHooks[b] = Vb(n.pixelPosition, function (a, e) {
        if (e) {
          e = Z(a, b);
          return Ca.test(e) ? c(a).position()[b] + "px" : e
        }
      })
    });
    c.each({Height: "height", Width: "width"}, function (a, b) {
      c.each({
        padding: "inner" + a, content: b, "": "outer" +
        a
      }, function (d, e) {
        c.fn[e] = function (e, g) {
          var h = arguments.length && (d || typeof e !== "boolean"), i = d || (e === true || g === true ? "margin" : "border");
          return fa(this, function (b, d, e) {
            if (c.isWindow(b))return b.document.documentElement["client" + a];
            if (b.nodeType === 9) {
              d = b.documentElement;
              return Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])
            }
            return e === void 0 ? c.css(b, d, i) : c.style(b, d, e, i)
          }, b, h ? e : void 0, h, null)
        }
      })
    });
    c.fn.size = function () {return this.length};
    c.fn.andSelf = c.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {return c});
    var ce = o.jQuery, de = o.$;
    c.noConflict = function (a) {
      if (o.$ === c) o.$ = de;
      if (a && o.jQuery === c) o.jQuery = ce;
      return c
    };
    typeof ra === C && (o.jQuery = o.$ = c);
    return c
  });

  var $ = window.jQuery.noConflict(true);

  var optimizelyCode = function () {
    var DATA = {
      "log_host": "log.optimizely.com",
      "goal_expressions": {
        "4113455104": ["^comment\\_submit$"],
        "4142192655": ["^searchsubmit\\_headerright$"],
        "5237901332": ["^suggest\\_header$"],
        "7506083879": ["^members\\_bodyengagement$"],
        "5872671067": ["^upload\\_photo$"],
        "6201890111": ["^edit\\_info$"],
        "4019740722": ["^suggest\\_addtolibary$"],
        "5908400184": ["^signin\\_pageload$"],
        "5984370751": ["^join\\_step1pageload$"],
        "8018540608": ["^signin$"],
        "4108445767": ["^download\\_icon\\_total$"],
        "6088550477": ["^newsfeedbody\\_click$"],
        "7534651063": ["^google\\_success$"],
        "5853984851": ["^headerprofile\\_click$"],
        "4127160413": ["^signup1$"],
        "4150130786": ["^privacy\\_navigatedown\\_headerright$"],
        "8022231140": ["^join\\_pageview$"],
        "4140963956": ["^likers$"],
        "7359180918": ["^signup\\_completed\\_suggest$"],
        "340719738": ["^ipad\\_linkout$"],
        "4237672574": ["^suggestheader\\_clicks$"],
        "7968303231": ["^(https?://)?(www\\.)?mendeley\\.com\\/newsfeed/?(\\?.*)?(#.*)?$"],
        "7957385356": ["^datasets\\_signin$"],
        "5061480590": ["^search\\_papers$"],
        "5061480591": ["^share\\_button$"],
        "7023280287": ["^step2$"],
        "7613962405": ["^members\\_papersmenu$"],
        "7506342939": ["^overview\\_related\\_groups$"],
        "7629570418": ["^listing\\_title$"],
        "7604752566": ["^listing\\_return\\_to\\_old\\_groups$"],
        "4135239865": ["^youtube\\_social$"],
        "6899570876": ["^return\\_to\\_old\\_groups$"],
        "4140673218": ["^library\\_headerleft$"],
        "4140673223": ["^settings\\_navigatedown\\_headerright$"],
        "584960211": ["^a\\-continue\\-exporting$"],
        "8010850515": ["^continue$"],
        "4126484694": ["^premium\\_download$"],
        "7532230886": ["^papers\\_title$"],
        "5094611175": ["^test$"],
        "7257320827": ["^close\\_modal$"],
        "6134870250": ["^author\\-link$"],
        "7963562225": ["^recommender\\_name$"],
        "6203900147": ["^ap\\_xbutton$"],
        "6205180149": ["^ap\\_savetolibrary$"],
        "7429050621": ["^stats\\_hdr$"],
        "7515093251": ["^members\\_pagination$"],
        "7947393286": ["^onboarding\\_submit$"],
        "4246362386": ["^statsheader\\_clicks$"],
        "5059531028": ["^twitter$"],
        "4150190362": ["^all\\_submenu$"],
        "7085490461": ["^groups\\_papercount$"],
        "7217860895": ["^modal\\_uploadimage$"],
        "4126241072": ["^bottom\\_footer\\_total$"],
        "7630630280": ["^listing\\_create$"],
        "4125520185": ["^linux\\_download\\_icon$"],
        "5062410556": ["^profile\\_image$"],
        "7009243453": ["^select\\_field$"],
        "7625560384": ["^members\\_membersmenu$"],
        "5059680593": ["^search\\_groups$"],
        "7425100115": ["^profile\\_ftu$"],
        "7504333147": ["^members\\_share$"],
        "6429071710": ["^step2\\_continue$"],
        "6193590629": ["^ap\\_pdfbutton$"],
        "7977380205": ["^navdown\\_logout$"],
        "7686910321": ["(www\\.mendeley\\.com\\/groups\\/(?!\\?)(.*[a-z1-9]))"],
        "6912170354": ["^groups\\_engagement$"],
        "7350051196": ["^signup\\_home$"],
        "6501611904": ["^author\\_link$"],
        "4140663173": ["^submenu\\_total$"],
        "5967751561": ["^step1\\_pageload$"],
        "4651272586": ["^signup\\_buttonclick$"],
        "4120764813": ["^headerleft\\_total$"],
        "7100810306": ["^groups\\_title$"],
        "7601322387": ["^members\\_return\\_to\\_old\\_groups$"],
        "7263910297": ["^main\\_addphoto$"],
        "7360530842": ["^signup\\_completed\\_scopus\\-claim$"],
        "2784180636": ["^complete\\_widget\\_\\-\\_photo$"],
        "4116160926": ["^copyright\\_bottom\\_footer$"],
        "7244800418": ["^groups\\_pageview$"],
        "7602897316": ["^overview\\_papersmenu$"],
        "7634260391": ["^listing\\_bodyengagement$"],
        "5209960884": ["^suggest\\_cta$"],
        "2212610488": ["^beta\\_link$"],
        "7529591225": ["^members\\_filter$"],
        "6116850106": ["^getfulltext$"],
        "7635194306": ["^signin\\_join$"],
        "4128219589": ["^privacy\\_footer$"],
        "7617276362": ["^papers\\_membersmenu$"],
        "6999472589": ["^claim\\-article$"],
        "7519101687": ["^sidemenu\\_members$"],
        "4121291234": ["^privacy\\_bottom\\_footer$"],
        "4140552675": ["^mendeleyicon\\_download$"],
        "4124029417": ["^android\\_download$"],
        "300206575": ["^source\\_link\\_\\(all\\)$"],
        "5057880563": ["^search\\_submit$"],
        "5057880564": ["^save\\_reference$"],
        "6041891319": ["^suggest\\_widget$"],
        "5063340546": ["^nostalgic\\_button$"],
        "5063340547": ["^webimporter\\_call$"],
        "5060440588": ["^search\\_people$"],
        "4135117330": ["^twitter\\_social$"],
        "7685741080": ["^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*people\\b).*$"],
        "7505715742": ["^sidemenu\\_papers$"],
        "2775044645": ["^profileupdated$"],
        "6207130158": ["^ap\\_ok\\_webimporter$"],
        "5992540721": ["^welcome\\_signinheader$"],
        "6121710130": ["^share$"],
        "4265220660": ["^suggest\\_stats\\_popups$"],
        "5893202493": ["^emptyprofile\\_click$"],
        "4087102018": ["^signup2$"],
        "5986000701": ["^join\\_step1signin$"],
        "7971904082": ["^researchnetwork\\_signin$"],
        "7961723475": ["^referencemanagement\\_download$"],
        "5104241238": ["^article\\_openlib$"],
        "7954408027": ["^navdown\\_settings$"],
        "4120050286": ["^applestore\\_download$"],
        "2783060591": ["^complete\\_widget\\_\\-\\_institution$"],
        "4120390257": ["^download\\_footer\\_total$"],
        "7528632947": ["^google\\_close$"],
        "5987930741": ["^signin\\_signin$"],
        "7955057274": ["^referencemanagement\\_signin$"],
        "4115102333": ["^googleplay\\_download$"],
        "5064190589": ["^what\\_you\\_think$"],
        "6427523710": ["^search\\_by\\_article$"],
        "7426880137": ["^download$"],
        "5315730058": ["^how\\_see\\_stats$"],
        "4126190227": ["^signin1$"],
        "5064870680": ["^google\\_plus$"],
        "5069931171": ["^followee$"],
        "7260660404": ["^modal\\_takephoto$"],
        "4114942648": ["^middlepage\\_download$"],
        "3984719988": ["^suggest\\_anyclick$"],
        "7693540032": ["(?!.*people|.*papers|.*search)(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-zA-Z0-9]))"],
        "7967322822": ["^profile\\_infoclick$"],
        "4676152015": ["^signup\\_completed\\_download$"],
        "3992838867": ["^suggest\\_add\\_documents$"],
        "4106693344": ["^downloadicon\\_footer\\_total$"],
        "7960965860": ["^datasets\\_link$"],
        "5097910736": ["^title\\_click$"],
        "4106693353": ["^android\\_download\\_footer$"],
        "5962812140": ["^step2\\_complete$"],
        "4135603325": ["^like\\_button$"],
        "5207800567": ["^researchinterests\\_combined$"],
        "7653201631": ["^landing\\_completed$"],
        "4675224342": ["^signin\\_home$"],
        "4137034521": ["^ios\\_download$"],
        "7347120925": ["^signup\\_completed\\_stats$"],
        "6093091617": ["^stats\\_widget$"],
        "6090410786": ["^job\\_widget$"],
        "7574620967": ["^citation\\_authors$"],
        "5058720585": ["^settings\\_submenu$"],
        "5058720586": ["^more\\_suggestions$"],
        "7580730187": ["^article\\_share$"],
        "4103818381": ["^terms\\_footer$"],
        "4121482069": ["^terms\\_bottom\\_footer$"],
        "7731721699": ["^signup\\-signup\\_completed$"],
        "4128369501": ["^download\\_navigatedown\\_headerright$"],
        "7362702180": ["^data\\_hdr$"],
        "7362702181": ["^suggest\\_ftu$"],
        "5207690088": ["^researchinterests\\_updateprofile$"],
        "2676921197": ["^(https?://)?(www\\.)?mendeley\\.com\\/download\\-mendeley\\-desktop\\/welcome/?(\\?.*)?(#.*)?$"],
        "5987920756": ["^join\\_step2complete$"],
        "4240081795": ["^stats\\_header$"],
        "5061450633": ["^support\\_submenu$"],
        "5061450634": ["^footer$"],
        "7686990732": ["(?!.*members|.*papers)(www\\.mendeley\\.com\\/groups\\/(?!\\?)(.*[a-zA-Z0-9]))"],
        "4021181330": ["^suggest\\_thumbnail$"],
        "300252055": ["^viewed\\_pdf\\_preview$"],
        "7937862553": ["^navdown\\_download$"],
        "6192030625": ["^ap\\_exportbutton$"],
        "347141027": ["^mps\\_sign\\_in\\_button$"],
        "3117040550": ["^enter\\_registration\\_process$"],
        "7947697075": ["^careers\\_hdr$"],
        "5975720884": ["^step2\\_pageload$"],
        "5978821565": ["^welcome\\_getstarted$"],
        "7995400828": ["^datasets\\_signup$"],
        "7007712197": ["^select\\_status$"],
        "4119602120": ["^mendeley\\_downloadicon\\_footer$"],
        "7432670166": ["^suggest\\_hdr$"],
        "7531930586": ["^members\\_feed$"],
        "7630613469": ["^join\\_continue$"],
        "300026848": ["^sourcelink$"],
        "4141360100": ["^headerright\\_total$"],
        "7396770793": ["^download\\_more$"],
        "238597112": ["^engagement$"],
        "5056920574": ["^stats\\_call$"],
        "5075600391": ["^linkedin$"],
        "4148370448": ["^floating\\_feedback$"],
        "7620912153": ["^overview\\_overviewmenu$"],
        "4130880540": ["^navigatedown\\_headerright$"],
        "7012971549": ["^groups\\_discipline$"],
        "7613971491": ["^papers\\_papersmenu$"],
        "4109382695": ["^homepage\\_anyclick$"],
        "341984302": ["^importer\\:\\_save\\_article$"],
        "7976860723": ["^search\\_hdr$"],
        "4115514432": ["^mac\\_download\\_icon$"],
        "2195090499": ["^click\\_remember\\_me$"],
        "5064340550": ["^mendeley\\_logo$"],
        "7724780622": ["^download\\-download\\_completed$"],
        "5058880591": ["^privacy\\_submenu$"],
        "278699093": ["^clicking\\!$"],
        "7120640184": ["^sign\\-in$"],
        "4224099430": ["^suggest\\_stats\\_clicks$"],
        "3342390375": ["^addarticle\\_click$"],
        "7504374888": ["^papers\\_subscribe$"],
        "7082040427": ["^groups\\_membercount$"],
        "4138577007": ["^logo\\_headerleft$"],
        "5276460143": ["^headerleft\\_library$"],
        "5259990140": ["^body\\_engagement$"],
        "5321290880": ["^trending\\_carousel$"],
        "7525772419": ["^overview\\_owner\\_discipline$"],
        "7956884616": ["^recommender\\_img$"],
        "7013950604": ["^groups\\_searchbutton$"],
        "5103660206": ["^search$"],
        "4110122170": ["^signin\\_total$"],
        "7579138669": ["^papers\\_return\\_to\\_old\\_groups$"],
        "300016833": ["^source\\_link$"],
        "4124933314": ["^download\\_all$"],
        "581231811": ["^b\\-get\\-mendeley$"],
        "5968422084": ["^step2\\_signin$"],
        "4114851019": ["^signup3$"],
        "6073371854": ["^header\\_click$"],
        "4131474645": ["^loadmore$"],
        "7438030037": ["^stats\\_ftu$"],
        "5274150102": ["^signin\\_completed$"],
        "7361363162": ["^download\\_appstoregoogle$"],
        "7260720349": ["^modal\\_hdrupload$"],
        "4131474656": ["^institutional\\_download$"],
        "7962672354": ["^navdown\\_hdr$"],
        "4118482148": ["^ios\\_download\\_icon$"],
        "7973960940": ["^recommender\\_follow$"],
        "4117300462": ["^windows\\_download\\_icon$"],
        "582790398": ["(https?://)?(www\\.)?mendeley\\.com\\/download\\-mendeley\\-desktop\\/welcome/?\\?\\_registered\\&"],
        "7438030036": ["^library\\_hdr$"],
        "7531001088": ["^overview\\_join$"],
        "6120570119": ["^upload\\_document$"],
        "5063310600": ["^download\\_submenu$"],
        "4104252684": ["^webimporter\\_downloadicon\\_footer$"],
        "7689231632": ["(www\\.mendeley\\.com\\/community\\/(?![!#$@#$%^&*a-zA-Z0-9]))"],
        "4665722129": ["^signup\\_completed\\_dashboard$"],
        "7354350874": ["^download\\-signup\\_completed$"],
        "4146650399": ["^userlink\\_total$"],
        "2580970786": ["^beta\\ profile\\ link\\ click$"],
        "5968020772": ["^join\\_step2pageload$"],
        "5970521381": ["^step1\\_signin\\-inline$"],
        "7988041009": ["^signupcompleted$"],
        "7989660981": ["^signupcompleted\\_signup$"],
        "7989660982": ["^referencemanagement\\_signup$"],
        "7989660983": ["^researchnetwork\\_download$"],
        "7984911241": ["^researchnetwork\\_link$"],
        "7514215743": ["^sidemenu\\_overview$"],
        "3949714315": ["^suggest\\_pageload$"],
        "7508315463": ["^overview\\_feedentry$"],
        "7508315464": ["^papers\\_share$"],
        "6087642456": ["^webimporter\\_widget$"],
        "2765002077": ["^complete\\_widget\\_\\-\\_interests$"],
        "4131587424": ["^suggest\\_headerleft$"],
        "7355950435": ["^signup\\_completed\\_newsfeed$"],
        "7992600807": ["^referencemanagement\\_link$"],
        "7607942514": ["^overview\\_return\\_to\\_old\\_groups$"],
        "300162420": ["^source\\_link\\_in\\_preview$"],
        "300162421": ["^find\\_this\\_paper\\_at$"],
        "6105890168": ["^article\\_title$"],
        "7256210811": ["^photo\\_uploaded$"],
        "7423090045": ["^groups\\_hdr$"],
        "4684144000": ["^download\\_home$"],
        "6120820103": ["^set\\_research\\_interests$"],
        "5197401480": ["^suggest\\_combined$"],
        "7687331211": ["^(?=.*\\bwww\\.mendeley\\.com\\/groups\\b)(?=.*papers\\b).*$"],
        "7432650125": ["^groups\\_ftu$"],
        "5330120078": ["^body\\_anyclick$"],
        "6057700757": ["^join\\_step2signin$"],
        "7961605531": ["^notif\\_hdr$"],
        "7239710111": ["^groups\\_createortitle$"],
        "7639342496": ["^join\\_signin$"],
        "7990361508": ["^downloadcompleted$"],
        "7540600230": ["^papers\\_pagination$"],
        "5078310314": ["^facebook$"],
        "5061510575": ["^logout\\_submenu$"],
        "5061510576": ["^download\\_mendeley$"],
        "7510334897": ["^papers\\_bodyengagement$"],
        "4140010938": ["^text\\_userlink$"],
        "6116860097": ["^navigation\\_header$"],
        "4140080586": ["^cookies$"],
        "7559071185": ["^article\\_scopus$"],
        "5384820181": ["^article\\_getfulltext$"],
        "5982180833": ["^step1\\_signin$"],
        "7540221411": ["^papers\\_sort$"],
        "6206940644": ["^upload\\_photo\\_hover$"],
        "4140703206": ["^icon\\_userlink$"],
        "7953974762": ["^(https?://)?(www\\.)?mendeley\\.com\\/stats/?(\\?.*)?(#.*)?$"],
        "7688500719": ["(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-z1-9]))"],
        "5300211184": ["^why\\_seeing\\_page$"],
        "6905890291": ["^create\\_group$"],
        "7439470071": ["^profile\\_hdr$"],
        "7537790465": ["^overview\\_share$"],
        "4124222988": ["^signup2$"],
        "7354510865": ["^signupordownload$"],
        "6119790104": ["^carousel$"],
        "5054080538": ["^headerleft\\_groups$"],
        "4164240940": ["^dashboard\\_anyclick$"],
        "7508692524": ["^google\\_setasprofile$"],
        "7511154223": ["^google\\_imgs$"],
        "6521540144": ["^open\\_in\\_library$"],
        "4110556725": ["^feed\\_headerleft$"],
        "7472860725": ["^pageview$"],
        "4250060041": ["^statsmessage\\_clicks$"],
        "5058801210": ["^headerleft\\_feed$"],
        "5058690620": ["^search\\_support$"],
        "5058690621": ["^get\\_full\\_text$"],
        "5218200500": ["^researchinterests\\_cta$"],
        "7988871093": ["^datasets\\_download$"],
        "4130856204": ["^(https?://)?(www\\.)?groups\\_submenu/?(\\?.*)?(#.*)?$"],
        "7963223626": ["^onboarding\\_skipstep$"],
        "7529950797": ["^overview\\_groupowner$"],
        "4654902865": ["^signup\\_completed$"],
        "4235982422": ["^suggestmessage\\_clicks$"],
        "7620882008": ["^overview\\_membersmenu$"],
        "7011110491": ["^claim\\-name$"],
        "7976050280": ["^navdown\\_support$"],
        "5062440554": ["^headerleft\\_suggest$"],
        "5062440555": ["^blogpost\\_title$"],
        "3336711792": ["^joingroup\\_click$"],
        "4229672572": ["^combined\\_suggeststats$"],
        "5986010730": ["^stats\\_completed$"],
        "5101010564": ["^article\\_save$"],
        "4144610950": ["^groups\\_headerleft$"],
        "4142513799": ["^copyright\\_footer$"],
        "3332820617": ["^follow\\_click$"],
        "4118849166": ["^stats\\_headerleft$"],
        "5062140525": ["^headerleft\\_stats$"],
        "4123360918": ["^learn\\_more$"],
        "5062140526": ["^articles\\_suggested$"],
        "4136914593": ["^support\\_navigatedown\\_headerright$"],
        "7686960811": ["^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*papers\\b).*$"],
        "4146480813": ["^fb\\_social$"],
        "4130121390": ["^newsfeed\\_share$"],
        "5315071668": ["^based\\_on\\_articles\\_carousel$"],
        "4158121656": ["^comment\\_button$"],
        "4118393460": ["^footer\\_engagement$"],
        "7500054203": ["^overview\\_group\\_disciplines$"],
        "4120870590": ["^signup\\_total$"],
        "459840118": ["^homepage\\_signup$"],
        "5911230150": ["^signup\\_pageload$"],
        "4143392465": ["^social\\_total$"],
        "7617410775": ["^members\\_overviewmenu$"],
        "6162134751": ["^ap\\_failed\\_webimporter$"],
        "7540350701": ["^members\\_join$"],
        "7532051068": ["^google\\_error$"],
        "7993220848": ["^researchnetwork\\_signup$"],
        "7995400829": ["^(https?://)?(www\\.)?mendeley\\.com\\/scopus\\-claim/?(\\?.*)?(#.*)?$"],
        "5066190584": ["^suggest\\_call$"],
        "4119860986": ["^signin2$"],
        "4078492059": ["^ios\\_download\\_footer$"],
        "5974421245": ["^signin\\_createaccount$"],
        "6424491777": ["^search\\_by\\_name$"],
        "4134971139": ["^profile\\_headerright$"],
        "4116260613": ["^carousel\\_engagement$"],
        "2698340108": ["^hiring\\ link$"],
        "7581970717": ["^article\\_authors$"],
        "5976020754": ["^welcome\\_pageload$"],
        "5056831253": ["^pub\\_title$"],
        "2795421296": ["^complete\\_widget\\_\\-\\_publications$"],
        "7972900635": ["^recommender\\_showmore$"],
        "4164020004": ["^hide\\_newsfeed$"],
        "6906560294": ["^hdr\\_groups$"],
        "5901680438": ["^signin\\_header$"],
        "7579680573": ["^citation\\_link$"],
        "7426880138": ["^download\\_footer$"],
        "7944093515": ["^navdown\\_privacy$"],
        "594370382": ["^importer\\-create\\-account$"],
        "5076500308": ["^follow\\_states$"],
        "4021270363": ["^suggest\\_title$"],
        "7516493669": ["^papers\\_join$"],
        "4163321707": ["^search\\_button$"],
        "5061580653": ["^post\\_author$"],
        "5061580654": ["^newsfeed\\_anyclick$"],
        "286105458": ["^importer\\_sign\\_in\\_button\\_click$"],
        "4120960887": ["^android\\_download\\_icon$"],
        "5274290040": ["^signin\\_intention$"],
        "7589844857": ["^papers\\_overviewmenu$"],
        "5975021440": ["^welcome\\_credentials$"],
        "5904320397": ["^signin\\_credentials$"],
        "7035680666": ["^create\\_account$"],
        "7691151265": ["(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))"],
        "5097000602": ["^article\\_saveopenlib$"],
        "5980651430": ["^step1\\_continue$"],
        "4135960490": ["^updates\\_submenu$"],
        "5075441578": ["^share\\_to\\_followers$"],
        "7529832366": ["^overview\\_feed\\_imgs$"],
        "7513356209": ["^overview\\_group\\_tags$"],
        "5313271733": ["^why\\_change\\_made$"],
        "7692470203": ["^(?=.*\\bwww\\.mendeley\\.com\\/groups\\b)(?=.*members\\b).*$"],
        "7986300866": ["^signupcompleted\\_download$"],
        "7986300867": ["^(https?://)?(www\\.)?mendeley\\.com\\/suggest/?(\\?.*)?(#.*)?$"],
        "7529445322": ["^google\\_empty$"],
        "7640881104": ["^join\\_createaccount$"],
        "7527544786": ["^google\\_addmanually$"],
        "8021161942": ["^profile\\_pageview$"],
        "4125700063": ["^logout\\_navigatedown\\_headerright$"],
        "5864390623": ["^profile\\_click$"],
        "7404560356": ["^feed\\_hdr$"],
        "7404560357": ["^newsfeed\\_ftu$"],
        "7220406609": ["^modal\\_hdrtakephoto$"],
        "7527303149": ["^overview\\_bodyengagement$"],
        "7216732153": ["^groups\\_create$"],
        "5906610172": ["^get\\_started$"],
        "7541510141": ["^overview\\_members$"]
      },
      "experiments": {
        "7928255642": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7928255642;\nvar opt_abid    = 'AB1154';\n\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n\n  start: new Date(),\n  \n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           mendeleyID: 'unknown',\n           pageid: null,\n           debug: opt_debug },\n  \n  logger: ABlogger.getInstance(),\n  \n  init:function(varid,pageid){ //init() is called from variation code.\n    //console.log(\"pageid= \", pageid,\", varid= \",varid);\n    this.config.varid = varid;\n    this.config.pageid = pageid;\n    this.variations(varid,pageid);\n    this.metrics(varid,pageid);\n    //this.log('verify');\n  },\n  \n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  \n  variations:function(varid,pageid){\n    if(pageid==\"join\" && varid==\"var1\"){ //don't go through skip-institution step\n    \t$(\"#skip_institution\").val(\"true\");  \n    }\n  },\n  \n  metrics:function(varid,pageid){ \n    \n    var mendeleyID, checkCookie1, checkCookie2;\n\n    var obj = this;\n\n    //this.log(\"pageInfo\",{\"varid\": varid,\"pageid\": pageid});\n            \n    //take note of mendeleyID if user lands on newsfeed (do it only once using cookie)\n    if(pageid==\"newsfeed\"){//||pageid==\"stats\"||pageid==\"suggest\"||pageid==\"scopus-claim\"){\n      \n      checkCookie1 = document.cookie.indexOf(\"md_join1\")>0;\n      this.log(\"newsfeed_pageview\",{\"cookie\": checkCookie1});\n\n     \tthis.setCookie(\"md_reg\"); \n      mendeleyID = pageData.visitor.userId; \n      this.log(\"userInfo\",{\"mendeleyID\": mendeleyID, \"pageid\": pageid, \"cookie\": checkCookie1});\n      \n      window.optimizely.push([\"trackEvent\", \"newsfeed_pageview\"]);  \n      \n      $(\"body\").on(\"mousedown\",function(){\n          obj.log(\"newsfeed_anyclick\");\n          window.optimizely.push([\"trackEvent\", \"newsfeed_anyclick\"]);              \t\n      });      \n      \n    \n    }else if (pageid==\"profile\" && $('.image-cta').length>0){ //own profile page\n    \n      checkCookie1 = document.cookie.indexOf(\"md_join1\")>0;\n      checkCookie2 = document.cookie.indexOf(\"md_reg\")>0;\n      this.log(\"profile_pageview\",{\"cookie1\": checkCookie1, \"cookie2\": checkCookie2});\n      window.optimizely.push([\"trackEvent\", \"profile_pageview\"]);  \n\n      /*every 100ms, check if user has uploaded photo\n      if so -> trigger event photo_uploaded*/\n      //--------------------------------------\n      var upload = setInterval(function(){\n        if($('a.profile-section-link img').attr('src').indexOf(\"awaiting\")<0){\n          obj.log(\"profile_photoUploaded\");\n          window.optimizely.push([\"trackEvent\", \"profile_photoUploaded\"]);        \n          clearInterval(upload);\t\n        } \n      },100);        \n      //trigger event if user clicks on information on profile page\n      $(\"body\").on(\"mousedown\",\".row button.basic-link, .column .basic-link:not(a[href*='howcanishareit'])\",function(){\n        obj.log(\"profile_infoClick\");\n        window.optimizely.push([\"trackEvent\", \"profile_infoClick\"]);              \t\n      });      \n    \n    }else if (pageid==\"join\"){\n            \n      this.log(\"join_pageview\");\n      window.optimizely.push([\"trackEvent\", \"join_pageview\"]);  \n    \n      //event: continue\n      $(\"button:contains('Continue')\").on(\"mousedown\",function(){\n      \t\tobj.setCookie(\"md_join1\");\n        \tobj.log(\"join_continue\");\n          window.optimizely.push([\"trackEvent\", \"continue\"]);              \t      \t\n      });\n      \n      //event: create_account\n      $(\"button:contains('Create account')\").on(\"mousedown\",function(){\n        \tobj.log(\"join_createaccount\");\n          window.optimizely.push([\"trackEvent\", \"create_account\"]);              \t      \t\n      });\n      \n      //event:signin\n      $(\"a.button-secondary\").on(\"mousedown\",function(){\n\t\t\t\tthis.log(\"profile_infoClick\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\", \"signin\"]);              \t      \t\n      });\n    \n    }//else if (pageid==\"onboarding\"){\n    \n //     if(varid==\"control\"){\n //     \t$(\"#skip_button\").on(\"mousedown\",function(){\n //         window.optimizely.push([\"trackEvent\", \"onboarding_skipstep\"]);              \t      \n //      \t\toptimizely.push(['setDimensionValue', 'ME_CUSDIM2', 'onboarding_skipstep']);\n //      \t\tmendeleyID = pageData.visitor.userId; \n //      \t\tthis.log(\"userInfo\",{\"mendeleyID\": mendeleyID, \"pageid\": pageid, \"segment\": \"skipstep\"});\n //        });\n //     \t$(\"button#submit_button\").on(\"mousedown\",function(){\n //         window.optimizely.push([\"trackEvent\", \"onboarding_submit\"]);              \t       \n //     \t\toptimizely.push(['setDimensionValue', 'ME_CUSDIM2', 'onboarding_submit']);\n //     \t\tmendeleyID = pageData.visitor.userId; \n //     \t\tthis.log(\"userInfo\",{\"mendeleyID\": mendeleyID, \"pageid\": pageid, \"segment\": \"submit\"});\n //     \t});\n //     }     \n //   }\n           \n  },\n  \n  setCookie:function(cookieName){\n    //console.log(\"setting md_ab cookie\");\n    document.cookie=cookieName+\"=true; path=/;domain=www.mendeley.com\";\n  },\n  \n  deleteCookie:function(cookieName){\n    //console.log(\"deleting md_ab cookie\");\n    document.cookie=cookieName+\"=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  }//,\n  //checkCookie:function(cookieName){\n  //\tvar nameEQ = cookieName+\"=\";\n  //\tvar ca = document.cookie.split(';');\n  // \tfor (var i = 0; i < ca.length; i++) {\n  //  \tvar c = ca[i];\n  //  \twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n  //  \tif (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n  //\t}\n  //\treturn null;\n  //}\n};",
          "audiences": [7936533843],
          "conditional_code": "WB_wombat_self_location.href.indexOf(\"#last-step\")>1",
          "variation_weights": {"7944640622": 5000, "7959250481": 5000},
          "name": "AB-1154: join - skip institution",
          "enabled": true,
          "variation_ids": ["7944640622", "7959250481"],
          "urls": [{
            "match": "exact",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/join/"
          }, {
            "match": "exact",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/join/#last-step"
          }, {"match": "simple", "value": "www.mendeley.com/newsfeed/"}, {
            "match": "substring",
            "value": "www.mendeley.com/profiles/"
          }],
          "enabled_variation_ids": ["7944640622", "7959250481"]
        },
        "7919110823": {
          "code": "/*config************************************************************/\nvar opt_expid   = 7919110823;\nvar opt_abid    = 'AB1152';\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  \n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           mendeleyID: 'unknown'\n          },\n  \n  init:function(varid,pageid){ //init() is called from variation code.\n    this.config.varid = varid;\n    this.setMendeleyID();\n\t\tthis.variations(varid);\n  },\n\n  variations:function(varid){\n\n     this.expjson = {};\n     this.expjson[this.config.expid] = (this.config.varid).toString();\n     this.expjson = encodeURIComponent(JSON.stringify(this.expjson));\n   \t document.cookie=\"ab_exp=\"+this.expjson+\"; path=/;domain=.mendeley.com\";\n\n  \n  },\n  \n  setMendeleyID:function(){\n    if (window.pageData && window.pageData.visitor && window.pageData.visitor.accountId){\n    \tthis.config.mendeleyID = window.pageData.visitor.accountId;  \n    }\n  }\n  \n};",
          "name": "AB-1152: AA Suggest",
          "variation_ids": ["7926130868", "7919911577"],
          "ignore": 9000,
          "urls": [{
            "match": "simple",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/suggest"
          }],
          "enabled_variation_ids": ["7926130868", "7919911577"]
        },
        "7787880076": {
          "code": "opt_expid = 7787880076;\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] =  {\n \n  init:function(varid,pageid){ //init() is called from variation code.\n    this.variations(varid,pageid);\n    this.metrics(varid,pageid);\n    },\n  \n  variations:function(varid,pageid){\n    if(pageid==\"community_listing\"){\n      //console.log('community_listing');\n      href = $(\"a.basic-link:contains('View old')\").attr(\"href\");\n      href = href + \"/?abtrue\";\n      $(\"a.basic-link:contains('View old')\").attr(\"href\",href);\n    }    \n  },\n  \n  metrics:function(varid,pageid){\n  \tif(pageid===\"community_listing\"){      \n      this.setCookie(\"md_cmt\");\n    }\n  },\n  \n  setCookie:function(str){\n    document.cookie=str+\"=true; path=/;domain=www.mendeley.com;expires=Tue, 22 Feb 2022 00:00:01GMT\";\n\t},  \n\tdeleteCookie:function(str){\n    document.cookie=str+\"=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n\t},  \n\tcheckCookie:function(str){\n    var nameEQ = str+\"=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) == ' ') c = c.substring(1, c.length);\n        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n    }\n    return null;\n\t}\n};",
          "audiences": [7920831751],
          "conditional_code": "$('.link-button.primary.group-action-join').length>0",
          "name": "AB-1108: Feature exp - New Community Page",
          "variation_ids": ["7768022332", "7789482300"],
          "urls": [{
            "match": "regex",
            "value": "(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))"
          }, {"match": "simple", "value": "www.mendeley.com/community"}, {
            "match": "regex",
            "value": "(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-zA-Z0-9]))"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*people\\b).*$"
          }, {"match": "regex", "value": "^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*papers\\b).*$"}],
          "enabled_variation_ids": ["7789482300"]
        },
        "7973931117": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7973931117;\nvar opt_abid    = 'AB1172';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n\n  init:function(varid,pageid){ //init() is called from variation code.\n    //console.log(\"pageid= \", pageid,\", varid= \",varid);\n    this.metrics(varid,pageid);\n    },\n  metrics:function(varid,pageid){ \n        \n      //track usage of header\n    \t//---------------------\n    \n      //event: mendeley_logo\n      $('a.logo').on(\"mousedown\",function(){\n    \t\t//console.log(\"mendeley_logo\");\n      \twindow.optimizely.push(['trackEvent', 'mendeley_logo']);\n      });    \n    \t//event: feed_hdr  \n      $('a.feed-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"feed_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'feed_hdr']);\n      });      \n      //event: library_hdr  \n      $('a.library-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"library_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'library_hdr']);\n      });        \n      //event: suggest_hdr  \n      $('a.suggest-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"suggest_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'suggest_hdr']);\n      });        \n      //event: stats_hdr  \n      $('a.stats-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"stats_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'stats_hdr']);\n      });        \n      //event: groups_hdr  \n      $('a.groups-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"groups_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'groups_hdr']);\n      });        \n      //event: data_hdr  \n      $('a.data-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"data_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'data_hdr']);\n      });       \n      //event: careers_hdr\n      $('a.careers-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'careers_hdr']);\n      });   \n    \t//event: notif_hdr\n      $(\"li.profile button\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'notif_hdr']);\n      });   \n      //event: profile_hdr\n      $('li.profile a').on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'profile_hdr']);\n      });\n      //event: search_hdr    \n    \t$(\"header.masthead li.search\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'search_hdr']);\n      });\n        \n    \t//event: navdown\n    \t$(\"a.with-nav.with-icon-after.icon-navigatedown\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_hdr']);\n      });\n    \t//event: navdown_settings\n\t\t\t$(\"li.account a[title*='Settings']\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_settings']);\n      });\n    \t//event: navdown_privacy\n\t\t\t$(\"li.account a[title*='Privacy']\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_privacy']);\n      });\n    \t//event: navdown_download\n\t\t\t$(\"li.account a[title*='Download']\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_download']);\n      });\n    \t//event: navdown_support\n\t\t\t$(\"li.account a[title*='Support']\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_support']);\n      });    \n    \t//event: navdown_logout\n\t\t\t$(\"li.account a[title*='Logout']\").on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'navdown_logout']);\n      });    \n  }\n};",
          "conditional_code": "( WB_wombat_self_location.href.indexOf(\"mendeley.com/join\")>=0 && WB_wombat_self_location.href.indexOf(\"#last-step\")>=0 ) ||\ndocument.cookie.indexOf(\"md_ab\")>=0",
          "variation_weights": {"7953958938": 5000, "7921563395": 5000},
          "name": "AB-1172: AA Mendeley masthead",
          "enabled": true,
          "variation_ids": ["7953958938", "7921563395"],
          "ignore": 5000,
          "urls": [{"match": "substring", "value": "mendeley.com/newsfeed/"}, {
            "match": "substring",
            "value": "mendeley.com/suggest/"
          }, {
            "match": "substring",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/stats/"
          }, {
            "match": "substring",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/"
          }],
          "enabled_variation_ids": ["7953958938", "7921563395"]
        },
        "7966650295": {
          "code": "/*config************************************************************/\nvar opt_expid   = 7966650295;\nvar opt_abid    = 'AB1110';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  \n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           mendeleyID: 'unknown'\n          },\n  \n  init:function(varid,pageid){ //init() is called from variation code.\n    this.config.varid = varid;\n    this.setMendeleyID();\n\t\tthis.variations(varid);\n    this.metrics(varid);\n  },\n\n  variations:function(varid){\n    \n     this.expjson = {};\n     this.expjson[this.config.expid] = (this.config.varid).toString();\n     this.expjson = encodeURIComponent(JSON.stringify(this.expjson));\n   \t document.cookie=\"ab_exp=\"+this.expjson+\"; path=/;domain=.mendeley.com\";\n\n  \n  },\n  metrics:function(varid){\n    \n    \n    \n    //event: recommender_img\n\t\t$(\"body\").on(\"mousedown\",\".people-recommendation a img\",function(){\n          window.optimizely.push(['trackEvent', 'recommender_img']);\n    });       \n\n    //event: recommender_name\n\t\t$(\"body\").on(\"mousedown\",\".people-recommendation a.basic-link\",function(){\n          window.optimizely.push(['trackEvent', 'recommender_name']);\n    });   \n\n    //event: recommender_showmore\n\t\t$(\"body\").on(\"mousedown\",\".people-recommendation button:contains('Show more suggestions')\",function(){\n          window.optimizely.push(['trackEvent', 'recommender_showmore']);\n    });       \n    \n    //event: recommender_follow\n\t\t$(\"body\").on(\"mousedown\",\".people-recommendation .button-text-follow\",function(){\n          window.optimizely.push(['trackEvent', 'recommender_follow']);\n    });           \n\n        \n  },\n  setMendeleyID:function(){\n    if (window.pageData && window.pageData.visitor && window.pageData.visitor.accountId){\n    \tthis.config.mendeleyID = window.pageData.visitor.accountId;  \n    }\n  }\n  \n};",
          "variation_weights": {"7966650296": 5000, "7958390586": 5000},
          "name": "AB-1110: AA Feed Recommender",
          "enabled": true,
          "variation_ids": ["7958390586", "7966650296"],
          "ignore": 5000,
          "urls": [{
            "match": "simple",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/newsfeed"
          }],
          "enabled_variation_ids": ["7958390586", "7966650296"]
        },
        "7931370769": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7931370769;\nvar opt_abid    = 'AB1150';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           debug: opt_debug,\n          pagetype: null\n          },\n  logger: ABlogger.getInstance(),\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  init:function(varid,pageid){ //init() is called from variation code.\n    this.config.varid = varid;\n    this.config.pageid = pageid;\n    this.variations(varid,pageid);\n    this.metrics(varid,pageid);\n    },\n  variations:function(varid,pageid){\n    \n    // Set Groups link to Community page for variation\n    if(varid == 'var1'){\n      $('a.groups-section-link').attr(\"href\",\"/community/\");\n    }\n    \n  },\n  metrics:function(varid,pageid){\n    \n    var that = this;\n    \n    //log MendeleyID\n    var mendeleyID = pageData.visitor.userId;\n    this.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n    \n    \n    // Variation Metrics - only measure engagement on Community if user is in variation group\n    if(pageid == 'community' && varid == 'var1'){\n      \n      //event: create_group\n      $('a[href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/groups#group-create\"]').on(\"mousedown\",function(){\n        window.optimizely.push([\"trackEvent\", \"create_group\"]);\n      });\n      \n      //event: groups_engagement\n      $('body').on(\"mousedown\",function(){\n        window.optimizely.push([\"trackEvent\", \"groups_engagement\"]);\n      });\n      \n    }\n    \n    //event: return_to_old_groups\n    $('a.basic-link:contains(\"View old group\")').on(\"mousedown\",function(){\n      //console.log(\"setting cookie\");\n      that.setCookie(\"md_cmt\");\n      window.optimizely.push([\"trackEvent\", \"return_to_old_groups\"]);\n    });\n   \n    \n    // All Pages\n    //event: hdr_groups\n    $('a.groups-section-link').on(\"mousedown\",function(){\n      window.optimizely.push([\"trackEvent\", \"hdr_groups\"]);\n    });  \n  },\n  setCookie:function(str){\n    document.cookie=str+\"=true; path=/;domain=www.mendeley.com\";\n\t},   \n};",
          "audiences": [7658971642],
          "name": "AB-1150: Feature exp: New Community Page V2",
          "variation_ids": ["7936642153", "7924691260"],
          "urls": [{
            "match": "exact",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/groups/"
          }, {
            "match": "exact",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/"
          }, {"match": "substring", "value": "mendeley.com"}],
          "enabled_variation_ids": ["7924691260"]
        },
        "7953181364": {
          "code": "/*config************************************************************/\nvar opt_expid   = 7953181364;\nvar opt_abid    = 'AB1128';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  \n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           mendeleyID: 'unknown'\n          },\n  \n  init:function(varid,pageid){ //init() is called from variation code.\n    this.config.varid = varid;\n\t\tthis.metrics(varid,pageid);\n  },\n\n  metrics:function(varid,pageid){\n\t\t\n    if(pageid==\"signin\"){\n    \twindow.optimizely.push([\"trackEvent\", \"md_loginscreen_view\"]);         \n    }else if (pageid==\"join\"){\n    \twindow.optimizely.push([\"trackEvent\", \"md_regscreen_view\"]);               \n    }else if (pageid==\"library\"){\n    \twindow.optimizely.push([\"trackEvent\", \"md_librarypage_view\"]);              \t \n    }\n  \n  }\n  \n};",
          "audiences": [7951393442],
          "name": "AB-1128: SD Mylibrary header link - Mendeley metrics",
          "variation_ids": ["7948311305", "7951601302"],
          "urls": [{
            "match": "regex",
            "value": "^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp=7817600378\\b).*$"
          }, {"match": "regex", "value": "^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp%3D7817600378\\b).*$"}],
          "enabled_variation_ids": ["7948311305", "7951601302"]
        },
        "7728380917": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7728380917;\nvar opt_abid    = 'AB1099';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           mendeleyID: 'unknown',\n           debug: opt_debug },\n  logger: ABlogger.getInstance(),\n  init:function(varid, pageid){ //init() is called from variation code.\n    //console.log(\"pageid = \", pageid);\n    this.config.varid = varid;\n    this.bootstrap(pageid);\n    },\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  bootstrap:function(pageid){\n    \n    var mendeleyID;\n    \n    this.log('pageload', {pageid:pageid});\n    \n    if (pageid === 'homepage'){\n      \n      //signup header\n      $('.create-account').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup main\n      $('.intro .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup body\n      $('.join-others .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signin header\n \t\t\t$('a[href=\"/sign-in/\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signin_home\");\n      \tthis.log(\"signin_home\",{pageid:pageid}); \n      \twindow.optimizely.push([\"trackEvent\",\"signin_home\"]);\n\t\t\t},this));\n            \n      //download body\n      $('img.download').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n        this.log(\"download_home\", {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n      \twindow.optimizely.push([\"trackEvent\", \"download_AppstoreGoogle\"]);\n\t\t\t},this));\n      \n      //download mac\n\t\t\t$('a:contains(\"Mac\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'mac'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n\t\t\n      //download win\n\t\t\t$('img[title=\"Windows\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n  \t\t\tthis.log(\"download_home\", {dltype:'win'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n\t\t\t//download linux\n\t\t\t$('img[title=\"Linux\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'linux'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //download android\n      $('img[title=\"Android\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n        this.log(\"download_home\", {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));          \n      \n      //download footer\n      $('.mendeley-desktop:contains(\"Mendeley\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'footer'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //icons footer\n      $('a:contains(\"iPad\"),a:contains(\"iPhone\"),a:contains(\"Android\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.log(\"download_home\", {dltype:'footer'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n    } else  if (pageid === 'download'){\n      \n      //get MendeleyID\n      mendeleyID = Mendeley.Config.profileId;\n \n      //event: download-download_completed\n      $('span.download-link-command').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_completed\");\n        if (this.checkCookie(\"md_download\")){\n        \tthis.log('download-download_completed');\n        \twindow.optimizely.push(['trackEvent', 'download-download_completed']);\n        }\n      },this));     \n      \n      //check if in mendeley, then check cookies\n\t\t\tif ($(\".navigation-list.js-dropdown li a:contains('What is Mendeley?')\").length===0){      \n        //check signup cookie\n        if (this.checkCookie(\"md_signup\")){\n          //console.log(\"signup-signup_completed\");\n          this.deleteCookie(\"md_signup\");\n          this.log('signup-signup_completed');\n          window.optimizely.push(['trackEvent', 'signup-signup_completed']);\n          this.log(\"signupID\",{\"mendeleyID\": mendeleyID});        \n        } \n        //check download cookie\n        if (this.checkCookie(\"md_download\")){\n          this.deleteCookie(\"md_download\");\n          //console.log(\"download-signup_completed\");\n          this.log('download-signup_completed');\n          window.optimizely.push(['trackEvent', 'download-signup_completed']);\n          this.log(\"downloadID\",{\"mendeleyID\": mendeleyID});        \n        }                      \n      }  \n        \n    } else if (pageid==='newsfeed'||pageid==='ftu'||pageid==='institution-onboarding' ){\n      \n      //get mendeleyID\n      mendeleyID = pageData.visitor.userId;\n      \n      //check signup cookie\n      if (this.checkCookie(\"md_signup\")){\n        //console.log(\"signup-signup_completed\");\n        this.deleteCookie(\"md_signup\");\n        this.log('signup-signup_completed');\n      \twindow.optimizely.push(['trackEvent', 'signup-signup_completed']);\n     \t\tthis.log(\"signupID\",{\"mendeleyID\": mendeleyID});        \n      } \n      //check download cookie\n      if (this.checkCookie(\"md_download\")){\n        this.deleteCookie(\"md_download\");\n        //console.log(\"download-signup_completed\");\n      \tthis.log('download-signup_completed');\n      \twindow.optimizely.push(['trackEvent', 'download-signup_completed']);\n        this.log(\"downloadID\",{\"mendeleyID\": mendeleyID});        \n      }      \n    }       \n  },\n  setCookie:function(str){\n    //console.log(\"setting \" + str + \" cookie\");\n    document.cookie=str+\"=true; path=/;domain=www.mendeley.com\";\n  },\n  deleteCookie:function(str){\n    //console.log(\"deleting \" + str + \" cookie\");\n    document.cookie=str+\"=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  },\n  checkCookie:function(str){\n  \tvar nameEQ = str+\"=\";\n  \tvar ca = document.cookie.split(';');\n  \tfor (var i = 0; i < ca.length; i++) {\n    \tvar c = ca[i];\n    \twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n    \tif (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n  \t}\n  \treturn null;\n  }\n};",
          "audiences": [7351041558],
          "name": "AB-1099: AA | homepage-download-register",
          "variation_ids": ["7730210943", "7728270969"],
          "urls": [{"match": "simple", "value": "mendeley.com"}, {
            "match": "simple",
            "value": "mendeley.com/download-mendeley-desktop"
          }, {"match": "simple", "value": "mendeley.com/newsfeed"}, {
            "match": "simple",
            "value": "mendeley.com/landing"
          }, {
            "match": "simple",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding"
          }],
          "enabled_variation_ids": ["7730210943", "7728270969"]
        },
        "7769747831": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7728380917;\nvar opt_abid    = 'AB1099';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           mendeleyID: 'unknown',\n           debug: opt_debug },\n  logger: ABlogger.getInstance(),\n  init:function(varid, pageid){ //init() is called from variation code.\n    //console.log(\"pageid = \", pageid);\n    this.config.varid = varid;\n    this.bootstrap(pageid);\n    },\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  bootstrap:function(pageid){\n    \n    var mendeleyID;\n    \n    this.log('pageload', {pageid:pageid});\n    \n    if (pageid === 'homepage'){\n      \n      //signup header\n      $('.create-account').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup main\n      $('.intro .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup body\n      $('.join-others .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n      \tthis.setCookie(\"md_signup\");\n        this.log('signup_home', {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signin header\n \t\t\t$('a[href=\"/sign-in/\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signin_home\");\n      \tthis.log(\"signin_home\",{pageid:pageid}); \n      \twindow.optimizely.push([\"trackEvent\",\"signin_home\"]);\n\t\t\t},this));\n            \n      //download body\n      $('img.download').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n        this.log(\"download_home\", {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n      \twindow.optimizely.push([\"trackEvent\", \"download_AppstoreGoogle\"]);\n\t\t\t},this));\n      \n      //download mac\n\t\t\t$('a:contains(\"Mac\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'mac'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n\t\t\n      //download win\n\t\t\t$('img[title=\"Windows\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n  \t\t\tthis.log(\"download_home\", {dltype:'win'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n\t\t\t//download linux\n\t\t\t$('img[title=\"Linux\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'linux'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //download android\n      $('img[title=\"Android\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n        this.log(\"download_home\", {pageid:pageid});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));          \n      \n      //download footer\n      $('.mendeley-desktop:contains(\"Mendeley\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setCookie(\"md_download\");\n      \tthis.log(\"download_home\", {dltype:'footer'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //icons footer\n      $('a:contains(\"iPad\"),a:contains(\"iPhone\"),a:contains(\"Android\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.log(\"download_home\", {dltype:'footer'});\n      \twindow.optimizely.push(['trackEvent', 'signupORdownload']);\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n    } else  if (pageid === 'download'){\n      \n      //get MendeleyID\n      mendeleyID = Mendeley.Config.profileId;\n \n      //event: download-download_completed\n      $('span.download-link-command').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_completed\");\n        if (this.checkCookie(\"md_download\")){\n        \tthis.log('download-download_completed');\n        \twindow.optimizely.push(['trackEvent', 'download-download_completed']);\n        }\n      },this));     \n      \n      //check if in mendeley, then check cookies\n\t\t\tif ($(\".navigation-list.js-dropdown li a:contains('What is Mendeley?')\").length===0){      \n        //check signup cookie\n        if (this.checkCookie(\"md_signup\")){\n          //console.log(\"signup-signup_completed\");\n          this.deleteCookie(\"md_signup\");\n          this.log('signup-signup_completed');\n          window.optimizely.push(['trackEvent', 'signup-signup_completed']);\n          this.log(\"signupID\",{\"mendeleyID\": mendeleyID});        \n        } \n        //check download cookie\n        if (this.checkCookie(\"md_download\")){\n          this.deleteCookie(\"md_download\");\n          //console.log(\"download-signup_completed\");\n          this.log('download-signup_completed');\n          window.optimizely.push(['trackEvent', 'download-signup_completed']);\n          this.log(\"downloadID\",{\"mendeleyID\": mendeleyID});        \n        }                      \n      }  \n        \n    } else if (pageid==='newsfeed'||pageid==='ftu'||pageid==='institution-onboarding' ){\n      \n      //get mendeleyID\n      mendeleyID = pageData.visitor.userId;\n      \n      //check signup cookie\n      if (this.checkCookie(\"md_signup\")){\n        //console.log(\"signup-signup_completed\");\n        this.deleteCookie(\"md_signup\");\n        this.log('signup-signup_completed');\n      \twindow.optimizely.push(['trackEvent', 'signup-signup_completed']);\n     \t\tthis.log(\"signupID\",{\"mendeleyID\": mendeleyID});        \n      } \n      //check download cookie\n      if (this.checkCookie(\"md_download\")){\n        this.deleteCookie(\"md_download\");\n        //console.log(\"download-signup_completed\");\n      \tthis.log('download-signup_completed');\n      \twindow.optimizely.push(['trackEvent', 'download-signup_completed']);\n        this.log(\"downloadID\",{\"mendeleyID\": mendeleyID});        \n      }      \n    }       \n  },\n  setCookie:function(str){\n    //console.log(\"setting \" + str + \" cookie\");\n    document.cookie=str+\"=true; path=/;domain=www.mendeley.com;expires=Tue, 22 Feb 2022 00:00:01 GMT\";\n  },\n  deleteCookie:function(str){\n    //console.log(\"deleting \" + str + \" cookie\");\n    document.cookie=str+\"=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  },\n  checkCookie:function(str){\n  \tvar nameEQ = str+\"=\";\n  \tvar ca = document.cookie.split(';');\n  \tfor (var i = 0; i < ca.length; i++) {\n    \tvar c = ca[i];\n    \twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n    \tif (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n  \t}\n  \treturn null;\n  }\n};",
          "audiences": [7351041558],
          "name": "AB-1099B: AA | homepage-download-register",
          "variation_ids": ["7791180495", "7783664784"],
          "urls": [{"match": "simple", "value": "mendeley.com"}, {
            "match": "simple",
            "value": "mendeley.com/download-mendeley-desktop"
          }, {"match": "simple", "value": "mendeley.com/newsfeed"}, {
            "match": "simple",
            "value": "mendeley.com/landing"
          }, {
            "match": "simple",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding"
          }],
          "enabled_variation_ids": ["7791180495", "7783664784"]
        },
        "7946643032": {
          "code": "var opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid = 7946643032;\nvar opt_abid    = 'AB1150';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] =  {\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           debug: opt_debug,\n          pagetype: null\n          },\n  logger: ABlogger.getInstance(),\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  init:function(varid,pageid){ //init() is called from variation code.\n    this.config.varid = varid;\n    this.config.pageid = pageid;\n    this.metrics(varid,pageid);\n    },  \n  metrics:function(varid,pageid){\n    var that = this;\n    \n    //log MendeleyID\n    var mendeleyID = pageData.visitor.userId;\n    this.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n    \n    \n    // Variation Metrics - only measure engagement on Community if user is in variation group\n    if(pageid == 'community_listing' && varid == 'var1'){\n      \n      //event: create_group\n      $('a[href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/groups#group-create\"]').on(\"mousedown\",function(){\n        window.optimizely.push([\"trackEvent\", \"create_group\"]);\n      });\n      \n      //event: groups_engagement\n      $('body').on(\"mousedown\",function(){\n        window.optimizely.push([\"trackEvent\", \"groups_engagement\"]);\n      });\n      \n      //event: return_to_old_groups\n      $('a.basic-link:contains(\"View old\")').on(\"mousedown\",function(){\n        console.log(\"setting cookie\");\n        that.setCookie(\"md_cmt\");\n        window.optimizely.push([\"trackEvent\", \"return_to_old_groups\"]);\n      });\n    }\n  },\n  \n  setCookie:function(str){\n    document.cookie=str+\"=true; path=/;domain=www.mendeley.com;expires=Tue, 22 Feb 2022 00:00:01GMT\";\n\t},  \n\tdeleteCookie:function(str){\n    document.cookie=str+\"=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n\t},  \n\tcheckCookie:function(str){\n    var nameEQ = str+\"=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n        var c = ca[i];\n        while (c.charAt(0) == ' ') c = c.substring(1, c.length);\n        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n    }\n    return null;\n\t}\n};",
          "audiences": [7658971642],
          "conditional_code": "$('.link-button.primary.group-action-join').length>0",
          "name": "AB-1150: Feature exp - New Community Page",
          "variation_ids": ["7947013151", "7956342585"],
          "urls": [{
            "match": "regex",
            "value": "(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))"
          }, {"match": "simple", "value": "www.mendeley.com/community"}, {
            "match": "regex",
            "value": "(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-zA-Z0-9]))"
          }, {
            "match": "regex",
            "value": "^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*people\\b).*$"
          }, {"match": "regex", "value": "^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*papers\\b).*$"}],
          "enabled_variation_ids": ["7956342585"]
        },
        "7548010490": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7548010490;\nvar opt_abid    = 'AB1057';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           mendeleyID: 'unknown',\n           pageid: null,\n           debug: opt_debug },\n  logger: ABlogger.getInstance(),\n  init:function(varid,pageid){ //init() is called from variation code.\n    //console.log(\"pageid= \", pageid,\", varid= \",varid);\n    this.config.varid = varid;\n    this.config.pageid = pageid;\n    this.metrics(varid,pageid);\n    //this.log('verify');\n    },\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  metrics:function(varid,pageid){ \n        \n    var mendeleyID; \n    \n    //log to ABlogger id of user\n    if(pageid==='newsfeed'||pageid==='FTU'){ //log userId\n      mendeleyID = pageData.visitor.userId;\n      this.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n    }else if (pageid==='download'){ //log profileId\n      mendeleyID = Mendeley.Config.profileId;    \n      this.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n    }\n                 \n    if(pageid==='join'){\n      this.setCookie();   \n    }else{ //any other page  \n\n      this.deleteCookie(); //so that user won't be part of exp anymore \n\n    \t//event: pageview\n    \t//console.log(\"pageview\");\n    \twindow.optimizely.push(['trackEvent', 'pageview']);      \n            \n    \t//event: body_anyclick\n    \t$('body').on(\"mousedown\",function(){\n    \t\t//console.log(\"body_anyclick\");\n      \twindow.optimizely.push(['trackEvent', 'body_anyclick']);\n    \t});   \n      \n      //track usage of header\n      $('a.feed-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"feed_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'feed_hdr']);\n      });      \n      $('a.library-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"library_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'library_hdr']);\n      });        \n      $('a.suggest-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"suggest_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'suggest_hdr']);\n      });        \n      $('a.stats-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"stats_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'stats_hdr']);\n      });        \n      $('a.groups-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"groups_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'groups_hdr']);\n      });        \n      $('a.data-section-link').on(\"mousedown\",function(){\n    \t\t//console.log(\"data_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'data_hdr']);\n      }); \n      \n      //event: profile_hdr\n      $('li.profile a').on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_hdr\");\n      \twindow.optimizely.push(['trackEvent', 'profile_hdr']);\n      });\n\n      //event: mendeley_logo\n      $('a.logo').on(\"mousedown\",function(){\n    \t\t//console.log(\"mendeley_logo\");\n      \twindow.optimizely.push(['trackEvent', 'mendeley_logo']);\n      });    \n\n    }\n    \n    //now trigger specific events  \n    if(pageid==='newsfeed'){\n      //event: download\n      $('a.button-primary,span:contains(\"more versions\"),a.app-store,a.google-play').on(\"mousedown\",function(){\n    \t\t//console.log(\"download\");\n      \twindow.optimizely.push(['trackEvent', 'download']);\n      });\n      //event: download_footer\n      $('a[title=\"Download Mendeley Free\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"download_footer\");\n      \twindow.optimizely.push(['trackEvent', 'download_footer']);\n      });\n    }else if (pageid==='FTU'){\n      //event: download\n$('a.button-primary,a:contains(\"more versions\"),img[alt=\"ios app store\"],img[alt=\"google play\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"download\");\n      \twindow.optimizely.push(['trackEvent', 'download']);\n      });\n      //event: newsfeed_FTU\n      $('.welcome-research-network a[href*=\"newsfeed\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"newsfeed_FTU\");\n      \twindow.optimizely.push(['trackEvent', 'newsfeed_FTU']);\n      });\n      //event: stats_FTU\n      $('.welcome-research-network a[href*=\"stats\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"stats_FTU\");\n      \twindow.optimizely.push(['trackEvent', 'stats_FTU']);\n      });      \n      //event: profile_FTU\n      $('.welcome-research-network a[href*=\"profiles\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"profile_FTU\");\n      \twindow.optimizely.push(['trackEvent', 'profile_FTU']);\n      });    \n      //event: suggest_FTU\n      $('.welcome-research-network a[href*=\"suggest\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"suggest_FTU\");\n      \twindow.optimizely.push(['trackEvent', 'suggest_FTU']);\n      });          \n      //event: groups_FTU\n      $('.welcome-research-network a[href*=\"groups\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"groups_FTU\");\n      \twindow.optimizely.push(['trackEvent', 'groups_FTU']);\n      });\n      //event: download_footer\n      $('a[title=\"Download Mendeley Free\"]').on(\"mousedown\",function(){\n    \t\t//console.log(\"download_footer\");\n      \twindow.optimizely.push(['trackEvent', 'download_footer']);\n      });\n    }else if (pageid==='download'){\n      //event: download\n      $('span.download-link-command,.column-b .download-windows,.column-b .download-mac,.column-b .download-linux,.column-b .download-ios').on(\"mousedown\",function(){\n    \t\t//console.log(\"download\");\n      \twindow.optimizely.push(['trackEvent', 'download']);\n      });\n      //event: download_more\n      $('a:contains(\"More\")').on(\"mousedown\",function(){\n    \t\t//console.log(\"download_more\");\n      \twindow.optimizely.push(['trackEvent', 'download_more']);\n      });\n      //event: download_footer\n      $('a:contains(\"Download Mendeley Free\")').on(\"mousedown\",function(){\n    \t\t//console.log(\"download_footer\");\n      \twindow.optimizely.push(['trackEvent', 'download_footer']);\n      });\n            \n    }\n     \n  },\n  setCookie:function(){\n    //console.log(\"setting md_ab cookie\");\n    document.cookie=\"md_ab=true; path=/;domain=www.mendeley.com\";\n  },\n  deleteCookie:function(){\n    //console.log(\"deleting md_ab cookie\");\n    document.cookie=\"md_ab=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  },\n};",
          "audiences": [4648531789],
          "conditional_code": "( WB_wombat_self_location.href.indexOf(\"mendeley.com/join\")>=0 && WB_wombat_self_location.href.indexOf(\"#last-step\")>=0 ) ||\ndocument.cookie.indexOf(\"md_ab\")>=0",
          "activation_mode": "conditional",
          "name": "AB-1057: FTU V2",
          "variation_ids": ["7557330311", "7558200281", "7551741275"],
          "urls": [{"match": "simple", "value": "mendeley.com/join"}, {
            "match": "simple",
            "value": "mendeley.com/newsfeed"
          }, {"match": "simple", "value": "mendeley.com/landing"}, {
            "match": "simple",
            "value": "mendeley.com/download-mendeley-desktop"
          }],
          "enabled_variation_ids": ["7557330311", "7558200281", "7551741275"]
        },
        "7988871089": {
          "code": "/*config************************************************************/\nvar opt_isProd  = true;\nvar opt_debug   = false;\nvar opt_expid   = 7988871089;\nvar opt_abid    = 'AB1137';\n\n/*logging & metrics*************************************************/ \nwindow['AB'+opt_expid] = {\n  start: new Date(),\n  config: {expid: opt_expid,\n           abid: opt_abid,\n           varid: null,\n           env: opt_isProd ? 'PROD' : 'CERT',\n           mendeleyID: 'unknown',\n           debug: opt_debug },\n  logger: ABlogger.getInstance(),\n  init:function(varid, pageid){ //init() is called from variation code.\n    //console.log(\"pageid = \", pageid,\"varid=\",varid);\n    this.config.varid = varid;\n    this.bootstrap(pageid);\n    },\n  log:function(evt, evtdata){\n    evtdata = evtdata || {};\n    evtdata.referrer = this.referrer;\n    this.logger.log(this.config, evt, evtdata);  \n  },\n  bootstrap:function(pageid){\n    \n    var mendeleyID = pageData.visitor.userId;\n    \n    this.log('pageload', {pageid:pageid});\n    \n    if (pageid === 'a'){ //A page\n      \n      //signup header\n      $('.create-account').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log('signup_home');\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup main\n      $('.intro .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log('signup_home');\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signup body\n      $('.join-others .large-button').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log('signup_home');\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signin header\n \t\t\t$('a[href=\"/sign-in/\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signin_home\");\n      \tthis.log(\"signin_home\"); \n      \twindow.optimizely.push([\"trackEvent\",\"signin_home\"]);\n\t\t\t},this));\n            \n      //download body\n      $('img.download').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n\t\t\t\tthis.deletesignupCookie();\n\t\t\t\tthis.setdownloadCookie();\n        this.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //download mac\n\t\t\t$('a:contains(\"Mac\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n\t\t\n      //download win\n\t\t\t$('img[title=\"Windows\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n  \t\t\tthis.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n\t\t\t//download linux\n\t\t\t$('img[title=\"Linux\"]').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //download footer\n      $('.mendeley-desktop:contains(\"Mendeley\")').on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n\t\t\t\tthis.deletesignupCookie();\n      \tthis.setdownloadCookie();\n      \tthis.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n     \n    } else\n\n    if (pageid==='b'){ //B page\n      \n      //signup header\n      $(\"li.with-divider\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log('signup_home');\n      \twindow.optimizely.push([\"trackEvent\", 'signup_home']);\n\t\t\t},this));         \n      \n      \n      //signup body\n      $('.c4-hero-homepage__message__body:contains(\"Create\")').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log('signup_home');\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n            \n      //signup: getstarted\n      $('a.cta--arrow:eq(0)').on('mousedown',$.proxy(function(){\n        //console.log(\"signup_home\");\n\t\t\t\tthis.deletedownloadCookie();\n      \tthis.setsignupCookie();\n        this.log(\"signup_home\");\n\t\t\t\twindow.optimizely.push(['trackEvent', 'signup_home']);\n\t\t\t},this));\n      \n      //signin header\n \t\t\t$(\"a[href='/sign-in/']\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signin_home\");\n      \tthis.log(\"signin_home\"); \n      \twindow.optimizely.push([\"trackEvent\",\"signin_home\"]);\n\t\t\t},this));\n      \n      //download header\n      $(\".masthead-default-nav li.download\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n\t\t\t\tthis.deletesignupCookie();\n      \tthis.setdownloadCookie();\n        this.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //download body\n      $(\"a.cta__solid[href='/downloads']\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n\t\t\t\tthis.deletesignupCookie();\n      \tthis.setdownloadCookie();\n        this.log(\"download_home\");\n      \twindow.optimizely.push([\"trackEvent\", \"download_home\"]);\n\t\t\t},this));\n      \n      //event: referenceManagement_link\n      $(\"a.section-link[href*='reference-management']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"referenceManagement_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"referenceManagement_link\"]);\n      },this));      \n      //event: researchnetwork_link\n      $(\"a.section-link[href*='research-network']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"researchNetwork_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"researchNetwork_link\"]);\n      },this));\n      //event: datasets_link\n      $(\"a.section-link[href*='datasets']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"datasets_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"datasets_link\"]);\n      },this));\n      //event: careers_link\n      $(\"a.section-link[href*='careers']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"careers_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"careers_link\"]);\n      },this));        \n       \n    } else if (pageid === \"referencemanagement\"||pageid === \"researchnetwork\"||pageid === \"datasets\"||pageid===\"downloads\"){\n      \n      var obj = this;\n            \n      var signin_event = pageid + \"_signin\";\n      var signup_event = pageid + \"_signup\";\n      var download_event = pageid + \"_download\";\n            \n      //signin header\n      $(\"a[href='/sign-in/']\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signin_home\");\n        this.log(signin_event);\n      \twindow.optimizely.push([\"trackEvent\", signin_event]);\n\t\t\t},this));       \n      \n      //signup header\n      $(\"li.with-divider\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signup_home\");\n        if(!obj.checkCookie(\"md_download\")){\n      \t\tthis.setsignupCookie();\n      \t}\n        this.log(signup_event);\n      \twindow.optimizely.push([\"trackEvent\", signup_event]);\n\t\t\t},this));       \n      \n      //signup body\n      $(\"a.cta__solid[href='/join/'],a.cta__inverted[href='/join/']\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"signup_home\");\n        if(!obj.checkCookie(\"md_download\")){\n      \t\tthis.setsignupCookie();\n      \t}\n        this.log(signup_event);\n      \twindow.optimizely.push([\"trackEvent\", signup_event]);\n\t\t\t},this));      \n      \n      //download header\n      $(\".masthead-default-nav li.download\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n      \tthis.setdownloadCookie();\n        this.log(download_event);\n      \twindow.optimizely.push([\"trackEvent\", download_event]);\n\t\t\t},this));       \n            \n      //download body\n      $(\"a.cta__solid[href='/downloads']\").on(\"mousedown\",$.proxy(function(){\n        //console.log(\"download_home\");\n        if(!obj.checkCookie(\"md_signup\")){\n      \t\tthis.setdownloadCookie();\n      \t}\n        this.log(download_event);\n      \twindow.optimizely.push([\"trackEvent\", download_event]);\n\t\t\t},this));       \n        \n      //event: referenceManagement_link\n      $(\"a.section-link[href*='reference-management']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"referenceManagement_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"referenceManagement_link\"]);\n      },this));      \n      //event: researchnetwork_link\n      $(\"a.section-link[href*='research-network']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"researchNetwork_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"researchNetwork_link\"]);\n      },this));\n      //event: datasets_link\n      $(\"a.section-link[href*='datasets']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"datasets_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"datasets_link\"]);\n      },this));\n      //event: careers_link\n      $(\"a.section-link[href*='careers']\").on(\"mousedown\",$.proxy(function(){\n      \tthis.log(\"careers_link\");\n\t\t\t\twindow.optimizely.push([\"trackEvent\",\"careers_link\"]);\n      },this));                    \n    \n      //event: downloadCompleted (on downloads page)\n      $(\"a.cta__inverted:contains('Download Mendeley Desktop')\").on(\"mousedown\",$.proxy(function(){\n        \tthis.log('downloadCompleted');\n        \twindow.optimizely.push(['trackEvent', 'downloadCompleted']);\n      },this));                    \n    \n    \n    } else  if (pageid === 'download-md-desktop'){\n \n      //event: downloadCompleted\n      $('span.download-link-command').on(\"mousedown\",$.proxy(function(){\n        \tthis.log('downloadCompleted');\n        \twindow.optimizely.push(['trackEvent', 'downloadCompleted']);\n      },this));\n      \n      //check if in mendeley, then check cookies\n\t\t\tif ($(\".navigation-list.js-dropdown li a:contains('What is Mendeley?')\").length===0){      \n        //check signup cookie\n        if (this.checkCookie(\"md_signup\")){\n          //console.log(\"signup-signup_completed\");\n          this.deleteCookie(\"md_signup\");\n          this.log('signupCompleted_signup');\n        \t//log MendeleyID\n    \t\t\tthis.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n          window.optimizely.push(['trackEvent', 'signupCompleted']);\n          window.optimizely.push(['trackEvent', 'signupCompleted_signup']);\n        } \n        //check download cookie\n        if (this.checkCookie(\"md_download\")){\n          this.deleteCookie(\"md_download\");\n          //console.log(\"download-signup_completed\");\n        \t//log MendeleyID\n    \t\t\tthis.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n          this.log('signupCompleted_download');\n          window.optimizely.push(['trackEvent', 'signupCompleted']);\n          window.optimizely.push(['trackEvent', 'signupCompleted_download']);\n        }                      \n      }  \n        \n    } else if (pageid==='newsfeed' || pageid==='stats' || pageid==='suggest' || pageid==='scopus-claim'){\n      //newsfeed page is loaded\n      if (this.checksignupCookie()){ //check signup cookie\n        //console.log(\"signupCompleted\");\n        this.deletesignupCookie();\n      \tthis.log(\"signupCompleted_signup\");\n        //log MendeleyID\n    \t\tthis.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n      \twindow.optimizely.push(['trackEvent', 'signupCompleted']);\n        if(!this.checkdownloadCookie()){\n      \t\twindow.optimizely.push(['trackEvent', 'signupCompleted_signup']);\n        }\n      } \n      if (this.checkdownloadCookie()){ //check download cookie\n        //console.log(\"download_completed\");\n        this.deletedownloadCookie();\n        this.log(\"signupCompleted_download\");\n        //log MendeleyID\n        this.log(\"userInfo\",{\"mendeleyID\": mendeleyID});\n        window.optimizely.push(['trackEvent', 'signupCompleted']);\n        if(!this.checksignupCookie()){\n      \t\twindow.optimizely.push(['trackEvent', 'signupCompleted_download']);\n        }\n      }\n    }\n  },\n  setsignupCookie:function(){\n    //console.log(\"setting md_signup cookie\");\n    document.cookie=\"md_signup=true; path=/;domain=www.mendeley.com\";\n  },\n  setdownloadCookie:function(){\n    //console.log(\"setting md_download cookie\");\n    document.cookie=\"md_download=true; path=/;domain=www.mendeley.com\";\n  },\n  deletesignupCookie:function(){\n    //console.log(\"deleting md_signup cookie\");\n    document.cookie=\"md_signup=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  },\n  deletedownloadCookie:function(){\n    //console.log(\"deleting md_download cookie\");\n    document.cookie=\"md_download=; path=/;domain=www.mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n  },\n  checksignupCookie:function(){\n  \tvar nameEQ = \"md_signup=\";\n  \tvar ca = document.cookie.split(';');\n  \tfor (var i = 0; i < ca.length; i++) {\n    \tvar c = ca[i];\n    \twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n    \tif (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n  \t}\n  \treturn null;\n  },\n  checkdownloadCookie:function(){\n  \tvar nameEQ = \"md_download=\";\n  \tvar ca = document.cookie.split(';');\n  \tfor (var i = 0; i < ca.length; i++) {\n    \tvar c = ca[i];\n    \twhile (c.charAt(0) == ' ') c = c.substring(1, c.length);\n    \tif (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n  \t}\n  \treturn null;\n  }\n};",
          "audiences": [7997291149],
          "name": "AB-1137: Homepage Migration",
          "variation_ids": ["7973871263", "7984911238"],
          "urls": [{
            "match": "exact",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com"
          }, {
            "match": "simple",
            "value": "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a"
          }, {"match": "substring", "value": "www.mendeley.com/?home=d"}, {
            "match": "simple",
            "value": "mendeley.com/newsfeed"
          }, {"match": "simple", "value": "mendeley.com/stats"}, {
            "match": "simple",
            "value": "mendeley.com/suggest"
          }, {"match": "simple", "value": "mendeley.com/scopus-claim"}, {
            "match": "simple",
            "value": "mendeley.com/downloads"
          }, {"match": "substring", "value": "mendeley.com/reference-management/"}, {
            "match": "substring",
            "value": "mendeley.com/research-network/"
          }, {"match": "simple", "value": "mendeley.com/datasets"}, {
            "match": "simple",
            "value": "mendeley.com/download-mendeley-desktop"
          }],
          "enabled_variation_ids": ["7973871263", "7984911238"]
        }
      },
      "audiences": {
        "7951393442": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 7929137110,
            "match": "exists"
          }]]], "name": "Mendeley test cookie"
        },
        "7920831751": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 7770052485,
            "match": "exists"
          }], ["or", {"dimension_id": 652800273, "value": "WB_wombat_self_location.href.indexOf(\"community\")>0"}]]],
          "name": "AB-1108: Feature Experiment - New Community Page"
        },
        "3696470986": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 652800273,
            "value": "//by returning false we make sure that this audience always runs and thus making the\n//visit/browser available in the optimizely javascript object.\nfalse"
          }]], ["or", ["or", {
            "dimension_id": 3699120888,
            "value": "NL||AMSTERDAM"
          }]], ["or", ["or", {"dimension_id": 3711030791, "value": "nl"}]]],
          "name": "GLOBAL CONFIG",
          "segment_id": 3690484545
        },
        "7997291149": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 652800273,
            "value": "WB_wombat_self_location.href.indexOf(\"mendeley.com/newsfeed\")<0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/stats\")<0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/suggest\")<0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/scopus-claim\")<0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/download-mendeley-desktop\")<0"
          }], ["or", {"dimension_id": 7351670906, "match": "exists"}, {
            "dimension_id": 7361240826,
            "match": "exists"
          }]]], "name": "AB-1137: Homepage Migration (1)"
        },
        "7936533843": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 652800273,
            "value": "WB_wombat_self_location.href.indexOf(\"newsfeed\") < 0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"profiles\") < 0\n"
          }], ["or", {
            "dimension_id": 8018770764,
            "match": "exists"
          }]], ["or", ["not", ["or", {
            "dimension_id": 7940453888,
            "match": "exists"
          }]], ["or", {"dimension_id": 652800273, "value": "WB_wombat_self_location.href.indexOf(\"profiles\") > 0"}]]],
          "name": "AB-1154: join - skip institution"
        },
        "4648531789": {
          "conditions": ["and", ["or", ["or", {"dimension_id": 4651125219, "value": "desktop"}]]],
          "name": "AB-140 Mendeley Homepage"
        },
        "7351041558": {
          "conditions": ["and", ["or", ["or", {
            "dimension_id": 652800273,
            "value": "WB_wombat_self_location.href.indexOf(\"mendeley.com/newsfeed\")<0  &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/download-mendeley-desktop\")<0 &&\nwindow.WB_wombat_self_location.href.indexOf(\"mendeley.com/landing\")<0 "
          }], ["or", {"dimension_id": 7351670906, "match": "exists"}, {
            "dimension_id": 7361240826,
            "match": "exists"
          }]], ["or", ["or", {"dimension_id": 4651125219, "value": "desktop"}]]], "name": "AB-940: Homepage Migration"
        },
        "7658971642": {
          "conditions": ["and", ["or", ["not", ["or", {"dimension_id": 7770052485, "match": "exists"}]]]],
          "name": "AB-1150: Feature exp - Community"
        }
      },
      "www_host": "app.optimizely.com",
      "public_suffixes": {"mendeley.com": ["staging.mendeley.com", "www.mendeley.com"]},
      "force_variation": true,
      "dimensions": {
        "7940453888": {"condition_type": "cookies", "name": "md_reg"},
        "7361240826": {"condition_type": "cookies", "name": "md_download"},
        "4651125219": {"condition_type": "device"},
        "7770052485": {"condition_type": "cookies", "name": "md_cmt"},
        "3711030791": {"condition_type": "language"},
        "8018770764": {"condition_type": "cookies", "name": "md_join1"},
        "652800273": {"condition_type": "code"},
        "3324970197": {
          "api_name": "ME_CUSDIM2",
          "condition_type": "custom_dimension",
          "name": "ME_CustomDimension2",
          "segment_id": 3345010380
        },
        "3352380214": {
          "api_name": "ME_CUSDIM1",
          "condition_type": "custom_dimension",
          "name": "ME_CustomDimension1",
          "segment_id": 3337400383
        },
        "7929137110": {"condition_type": "cookies", "name": "optly_mendeley_test"},
        "3699120888": {"condition_type": "WB_wombat_self_location"},
        "7351670906": {"condition_type": "cookies", "name": "md_signup"},
        "3337100828": {
          "api_name": "ME_CUSDIM3",
          "condition_type": "custom_dimension",
          "name": "ME_CustomDimension3",
          "segment_id": 3337290424
        }
      },
      "version": "master-2715.397756851646193251",
      "admin_account_id": 175078151,
      "blacklisted_experiments": [7734310016, 7702230020, 7516380933, 7469971712, 7920711816, 7953600854, 7610971019, 7617511949, 7841820303, 7860241219, 6594720018, 7744200083, 7628260372, 7834240169, 7537730839, 3741194692, 7864161689, 7775482266, 7449541279, 7591600367, 7953610639, 7808372733, 7941430054, 7855733287, 7588732584, 7936981673, 7874150136, 7825280174, 7495520559, 7675770033, 7640290226, 7843360180, 7524583992, 7865711328, 6246850748, 7660992062, 7831751498, 7102320835, 5335560646, 7461333704, 7655773002, 7594761548, 7447873740, 7014961105, 7582691154, 7438030035, 7926242901, 6658840534, 7665920728, 7737560281, 7242580699, 7811022195, 6597411037, 7952790240, 7926930530, 7608281187, 7604560101, 6504170983, 7832760808, 7825620459, 7933612397, 7829892718, 6336245359, 7518222960, 7932971121, 7871390098, 6970570099, 7961866109, 7652201333, 7879053560, 7810772345, 7737000186, 7120960251, 7942620073, 6418100221],
      "project_id": 238413261,
      "revision": 3478,
      "summary_revenue_goal_id": 238590105,
      "installation_verified": true,
      "preview_host": "\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/optimizely.s3.amazonaws.com",
      "api_host": "api.optimizely.com",
      "variations": {
        "7730210943": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','homepage');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','download');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','ftu');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1477481855000\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','institution-onboarding');\n/* _optimizely_variation_url_end */",
          "name": "A"
        },
        "7921563395": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com/newsfeed/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control2','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/suggest/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1473351129157\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control2','suggest');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/stats/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480946849689\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control2','stats');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480946870018\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control2','community');\n/* _optimizely_variation_url_end */",
          "name": "B"
        },
        "7984911238": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1453309713904\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/?home=d */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/?home=d\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453314462080\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/?home=d */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/?home=d\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/?home=d\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1453314479527\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n    window['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'var1', 'b');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'var1', 'newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/stats\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'var1', 'stats');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/suggest\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169855897\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'var1', 'suggest');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/scopus-claim\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169986299\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'var1', 'scopus-claim');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/downloads\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480336859222\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089,'var1','downloads');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/reference-management/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480681293032\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089,'var1','referencemanagement');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/research-network/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480681351949\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089,'var1','researchnetwork');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/datasets\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480682174641\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089,'var1','datasets');\n/* _optimizely_variation_url_end */",
          "name": "B"
        },
        "7557330311": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com/join\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'control1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'control1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453314462080\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/newsfeed */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/newsfeed\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473351129157\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/newsfeed */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/newsfeed\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */",
          "name": "A"
        },
        "7948311305": {
          "code": "/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347736188\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'control1','signin');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347811021\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'control1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347848465\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'control1','library');\n/* _optimizely_variation_url_end */",
          "name": "Control1"
        },
        "7783664784": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','homepage');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','download');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','ftu');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1477481855000\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','institution-onboarding');\n/* _optimizely_variation_url_end */",
          "name": "B"
        },
        "7951601302": {
          "code": "/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/sign\\/in\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347736188\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'var1','signin');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/join\\b)(?=.*library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347811021\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'var1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp=7817600378\\b).*$ ^(?=.*\\bmendeley\\.com\\/library\\b)(?=.*exp%3D7817600378\\b).*$\" exclude=\"\" include_match_types=\"regex regex\" exclude_match_types=\"\" id=\"1480347848465\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7953181364,'var1','library');\n/* _optimizely_variation_url_end */",
          "name": "Var1"
        },
        "7919911577": {
          "code": "(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7919110823,'control2','suggest');",
          "name": "Control2"
        },
        "7953958938": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com/newsfeed/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/suggest/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1473351129157\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control1','suggest');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/stats/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480946849689\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control1','stats');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480946870018\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7973931117,'control1','community');\n/* _optimizely_variation_url_end */",
          "name": "A"
        },
        "7947013151": {
          "code": "/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1474898758216\" */\n\n/* _optimizely_variation_url_end */",
          "name": "Control - Groups #1"
        },
        "7959250481": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/join/ https://www.mendeley.com/join/#last-step\" exclude=\"\" include_match_types=\"exact exact\" exclude_match_types=\"\" id=\"1480505098522\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'var1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/newsfeed/\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480505112902\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'var1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/profiles/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480505707681\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'var1','profile');\n/* _optimizely_variation_url_end */",
          "name": "Variation #1"
        },
        "7789482300": {
          "code": "/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1474898758216\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/ */\nif (document.cookie.indexOf(\"md_cmt\")>=0 && WB_wombat_self_location.href.indexOf(\"abtrue\")<0){\n\tvar _optly={redir:document.createElement(\"a\")};\n\t_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\";\n\t_optly.cur=WB_wombat_self_location.search;\n\tif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\n\twindow.WB_wombat_self_location.replace(_optly.redir.href);\n}\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/community\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1475839808308\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076,'var1','community_listing');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-zA-Z0-9]))\" exclude=\"/papers /people\" include_match_types=\"regex\" exclude_match_types=\"substring substring\" id=\"1475840052684\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076, 'var1', 'community_overview');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*people\\b).*$\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1475840162062\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076, 'var1', 'community_members');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*papers\\b).*$\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1475840333369\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076, 'var1', 'community_papers');\n/* _optimizely_variation_url_end */",
          "name": "Variation"
        },
        "7966650296": {
          "code": "(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7966650295,'control2','suggest');",
          "name": "Control2"
        },
        "7956342585": {
          "code": "/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1474898758216\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/ */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/community\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1475839808308\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7946643032,'var1','community_listing');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/community\\/(?!\\?)(.*[a-zA-Z0-9]))\" exclude=\"/papers /people\" include_match_types=\"regex\" exclude_match_types=\"substring substring\" id=\"1475840052684\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7946643032, 'var1', 'community_overview');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*people\\b).*$\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1475840162062\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076, 'var1', 'community_members');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"^(?=.*\\bwww\\.mendeley\\.com\\/community\\b)(?=.*papers\\b).*$\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1475840333369\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7787880076, 'var1', 'community_papers');\n/* _optimizely_variation_url_end */",
          "name": "Variation"
        },
        "7958390586": {
          "code": "(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7966650295,'control1','suggest');",
          "name": "Control1"
        },
        "7768022332": {
          "code": "/* _optimizely_variation_url include=\"(www\\.mendeley\\.com\\/groups\\/(?![!#$@#$%^&*a-zA-Z0-9]))\" exclude=\"\" include_match_types=\"regex\" exclude_match_types=\"\" id=\"1474898758216\" */\n\n/* _optimizely_variation_url_end */",
          "name": "Control - Groups #1"
        },
        "7926130868": {
          "code": "(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n    window['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n  }\n})(7919110823,'control1','suggest');",
          "name": "Control1"
        },
        "7973871263": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1453309713904\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a/ */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a/\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453314462080\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'control1', 'a');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/?home=d\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1453314479527\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a/ */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/home/a/\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'control1', 'newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/stats\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'control1', 'stats');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/suggest\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169855897\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'control1', 'suggest');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/scopus-claim\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169986299\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089, 'control1', 'scopus-claim');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/downloads\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480336859222\" */\n\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/reference-management/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480681293032\" */\n\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/research-network/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480681351949\" */\n\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/datasets\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480682174641\" */\n\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1481214435084\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7988871089,'control1','download-md-desktop');\n/* _optimizely_variation_url_end */",
          "name": "A"
        },
        "7791180495": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','homepage');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','download');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','ftu');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1477481855000\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control1','institution-onboarding');\n/* _optimizely_variation_url_end */",
          "name": "A"
        },
        "7924691260": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/groups/\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1470308985572\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/ */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1470309078722\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n }\n})(7931370769, 'var1', 'community');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"www.mendeley.com/groups/ www.mendeley.com/community/\" include_match_types=\"substring\" exclude_match_types=\"simple simple\" id=\"1470309231565\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n }\n})(7931370769, 'var1', 'all');\n/* _optimizely_variation_url_end */",
          "name": "New Community Page"
        },
        "7558200281": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com/join\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'var1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/landing */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/landing\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453314462080\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'var1','FTU');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473351129157\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/landing */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/landing\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */",
          "name": "B"
        },
        "7551741275": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com/join\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'var2','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/download-mendeley-desktop */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/download-mendeley-desktop\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453314462080\" */\n/* _optimizely_redirect=http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/download-mendeley-desktop */\nvar _optly={redir:document.createElement(\"a\")};\n_optly.redir.href=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/http:\/\/www.mendeley.com/download-mendeley-desktop\";\n_optly.cur=WB_wombat_self_location.search;\nif (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + \"&\" + _optly.redir.search.slice(1) : _optly.cur;}\nwindow.WB_wombat_self_location.replace(_optly.redir.href);\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473351129157\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7548010490,'var2','download');\n/* _optimizely_variation_url_end */",
          "name": "C"
        },
        "7936642153": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/groups/\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1470308985572\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n }\n})(7931370769, 'control', 'groups');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"www.mendeley.com/groups/ www.mendeley.com/community/\" include_match_types=\"substring\" exclude_match_types=\"simple simple\" id=\"1470309231565\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n }\n})(7931370769, 'control', 'all');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community/\" exclude=\"\" include_match_types=\"exact\" exclude_match_types=\"\" id=\"1470309078722\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n }\n})(7931370769, 'control', 'community');\n/* _optimizely_variation_url_end */",
          "name": "Control - Groups"
        },
        "7944640622": {
          "code": "/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/join/ https://www.mendeley.com/join/#last-step\" exclude=\"\" include_match_types=\"exact exact\" exclude_match_types=\"\" id=\"1480505098522\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'control1','join');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/newsfeed/\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1480505112902\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'control1','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"www.mendeley.com/profiles/\" exclude=\"\" include_match_types=\"substring\" exclude_match_types=\"\" id=\"1480505707681\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){ \n    window['exp'+expid+'_'+varid] = true; \n    window['AB'+expid].init(varid, pageid); \n\t}\n})(7928255642,'control1','profile');\n/* _optimizely_variation_url_end */",
          "name": "Original"
        },
        "7728270969": {
          "code": "/* _optimizely_variation_url include=\"mendeley.com\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453309713904\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','homepage');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/download-mendeley-desktop\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453310349196\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','download');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/newsfeed\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1453388290882\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','newsfeed');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"mendeley.com/landing\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1473169685717\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','ftu');\n/* _optimizely_variation_url_end */\n\n/* _optimizely_variation_url include=\"http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/institution-onboarding\" exclude=\"\" include_match_types=\"simple\" exclude_match_types=\"\" id=\"1477481855000\" */\n(function(expid, varid, pageid) {\n\tif (!window['exp'+expid+'_'+varid]){\n  \twindow['exp'+expid+'_'+varid] = true;\n  \twindow['AB'+expid].init(varid, pageid);\n\t}\n})(7728380917,'control2','institution-onboarding');\n/* _optimizely_variation_url_end */",
          "name": "B"
        }
      },
      "project_js": "//adding Heapanalytics\ntry{\n  if ( (WB_wombat_self_location.href).includes('http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/www.mendeley.com/community') === true ){\n    window.heap=window.heap||[];\n    heap.load=function(e,t){\n        window.heap.appid=e;\n        window.heap.config=t=t||{};\n        var r=t.forceSSL||\"https:\"===WB_wombat_self_location.protocol;\n        var a=document.createElement(\"script\");\n        a.type=\"text/javascript\";\n        a.async=!0;\n        a.src=(r?\"https:\":\"http:\")+\"\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/cdn.heapanalytics.com/js/heap-\"+e+\".js\";\n        var n=document.getElementsByTagName(\"script\")[0];\n        n.parentNode.insertBefore(a,n);\n        for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)));};},p=[\"addEventProperties\",\"addUserProperties\",\"clearEventProperties\",\"identify\",\"removeEventProperty\",\"setEventProperties\",\"track\",\"unsetEventProperty\"],c=0; c<p.length; c++) {\n            heap[p[c]]=o(p[c]);\n        }\n    };\n    heap.load(\"911816769\");  \n  }\n}catch(err){}\n\n//DO NOT EDIT!!!\n\nwindow.optimizely=window.optimizely || [];\n\n//init custom dimensions\n//window.optimizely.push(['setDimensionValue', 'SD_CUSDIM1', null]);\n\n//reset live experiment cookie\ndocument.cookie=\"ab_exp=; path=/;domain=mendeley.com;expires=Thu, 01 Jan 1970 00:00:01 GMT;\";\n\n//inform that experiment(s) on suggest-page is active\nwindow.AB_suggest = true;\n\n//ABlogger lib\nwindow.ABlogger = (function(){\n  var instance;\n  var loggerdomain = 'logger.sciencedirect.com';\n  if(location.hostname.match('scopus.com')){\n    loggerdomain = 'logger.scopus.com';\n  } else\n  if(location.hostname.match('mendeley.com')){\n    loggerdomain = 'logger.sciencedirect.com';\n  }\n  var defaults = {\n//    endpoint: (WB_wombat_self_location.protocol === 'https:' ? 'https://' : 'http://') + 'data.2do.to/log',\n    endpoint: (WB_wombat_self_location.protocol === 'https:' ? 'https://' : 'http://') + loggerdomain + '/log',\n    expid: 'unknown',\n    varid: 'unknown',\n    abid: 'unknown',\n    user: 'unknown',\n    event: 'unknown',\n    debug: false\n  };\n  var getOptimizelyId = function(){\n    var nameEQ = \"optimizelyEndUserId=\";\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n      while (c.charAt(0) == ' ') c = c.substring(1, c.length);\n      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n    }\n    return \"unknown\";\n  };\n  var create = function(){\n    var Log = function(settings, evt, evtdata){\n      if (settings && evt){\n        var options =  $.extend( {}, defaults, settings );\n        options.event = evt;\n        options.data = evtdata || {};\n        options.page = WB_wombat_self_location.href;\n        options.user = getOptimizelyId(); \n        if (options.debug === true && window.console && window.console.info){\n          $.post( options.endpoint, options,\n          function() {})\n          .done(function(){ Debug(options, 'success event ['+options.event+']', options); })\n          .fail(function(){ Debug(options, 'fail event ['+options.event+']', options); })\n          .always(function(){});    \n        } else {\n          var endpoint = options.endpoint;\n          //delete options.endpoint;\n          $.post( endpoint, options );      \n        }\n      }\n    };\n    var Debug = function(settings){\n      var options =  $.extend( {}, defaults, settings );\n      if (options.debug === true && window.console && window.console.info){\n        var header = 'AB[' + options.expid+ '] ';\n        if (arguments.length === 0){\n        \twindow.console.info(header + 'wrong formatted log', options);  \n        } else\n        if (arguments.length === 1){\n          window.console.info(header, arguments[0]);\n        } else  \n        if (arguments.length >= 2){\n          var headline = arguments[1], bodymsg = [];\n          for (i = 1; i < arguments.length; i++) {bodymsg.push(arguments[i]);}\n          window.console.info(header + headline, bodymsg);\n        }  \n      }\n    };\n    return { log: Log, debug: Debug };\n  };\n  return {\n    getInstance: function(){\n      instance = instance || create(); \n      return instance; \n    }\n  };\n})();",
      "segments": {
        "3690484545": {
          "audience_id": 3696470986,
          "id": 3690484545,
          "uses_geotargeting": true,
          "name": "GLOBAL CONFIG"
        },
        "3345010380": {
          "api_name": "ME_CUSDIM2",
          "is_api_only": true,
          "dimension_id": 3324970197,
          "id": 3345010380,
          "name": "ME_CustomDimension2"
        },
        "238778291": {
          "segment_value_type": "browser",
          "api_name": "optimizely_browser",
          "id": 238778291,
          "name": "Browser"
        },
        "3337290424": {
          "api_name": "ME_CUSDIM3",
          "is_api_only": true,
          "dimension_id": 3337100828,
          "id": 3337290424,
          "name": "ME_CustomDimension3"
        },
        "238662617": {
          "segment_value_type": "campaign",
          "api_name": "optimizely_campaign",
          "id": 238662617,
          "name": "Campaign"
        },
        "238651706": {
          "segment_value_type": "source_type",
          "api_name": "optimizely_source_type",
          "id": 238651706,
          "name": "Source Type"
        },
        "238817183": {
          "segment_value_type": "mobile",
          "api_name": "optimizely_mobile",
          "id": 238817183,
          "name": "Mobile Visitors"
        },
        "3337400383": {
          "api_name": "ME_CUSDIM1",
          "is_api_only": true,
          "dimension_id": 3352380214,
          "id": 3337400383,
          "name": "ME_CustomDimension1"
        }
      },
      "click_goals": [{
        "event_name": "importer_sign_in_button_click",
        "experiments": {"287338121": true},
        "selector": "#login-link"
      }, {
        "event_name": "source_link",
        "experiments": {"300212208": true},
        "selector": "#website-link a"
      }, {
        "event_name": "sourcelink",
        "experiments": {"300212208": true},
        "selector": ".add-to-library-button"
      }, {
        "event_name": "source_link_in_preview",
        "experiments": {"300212208": true},
        "selector": "#availability a"
      }, {
        "event_name": "find_this_paper_at",
        "experiments": {"300212208": true},
        "selector": "#openurl-menu-button > .button-text,#openurl-menu-button > .button-opener"
      }, {
        "event_name": "source_link_(all)",
        "experiments": {"300212208": true},
        "selector": "#website-link a,#availability a"
      }, {
        "event_name": "viewed_pdf_preview",
        "experiments": {"300212208": true},
        "selector": "#pdf-hover"
      }, {
        "event_name": "ipad_linkout",
        "experiments": {"340677158": true},
        "selector": "#ipad-linkout"
      }, {
        "event_name": "importer:_save_article",
        "experiments": {"341287007": true},
        "selector": "#import-single-doc:not(.imported):not(.duplicate) input[value=\"Save\"]"
      }, {
        "event_name": "mps_sign_in_button",
        "experiments": {"348370707": true},
        "selector": ".step-1.note.success > .padding > a"
      }, {
        "event_name": "b-get-mendeley",
        "experiments": {"582951619": true},
        "selector": "#get-mendeley"
      }, {
        "event_name": "a-continue-exporting",
        "experiments": {"582951619": true},
        "selector": "#continue-exporting"
      }, {
        "event_name": "importer-create-account",
        "experiments": {"593350517": true},
        "selector": "#signup-link, #learn-more"
      }, {
        "event_name": "click_remember_me",
        "experiments": {"2207832564": true},
        "selector": ".remember-me,input[name='remember']"
      }, {
        "event_name": "beta_link",
        "experiments": {"2206690316": true},
        "selector": "#beta-library-link"
      }, {
        "event_name": "beta profile link click",
        "experiments": {"2580130309": true},
        "selector": "#beta-profile-link"
      }, {
        "event_name": "hiring link",
        "experiments": {"2658470628": true},
        "selector": "#sup-menu a:first"
      }, {
        "event_name": "complete_widget_-_interests",
        "experiments": {"2759031636": true},
        "selector": ".widget-completion-list > li:eq(1) > a:eq(0)"
      }, {
        "event_name": "complete_widget_-_institution",
        "experiments": {"2759031636": true},
        "selector": ".widget-completion-list > li:eq(2) > a:eq(0)"
      }, {
        "event_name": "complete_widget_-_photo",
        "experiments": {"2759031636": true},
        "selector": ".widget-completion-completed > input"
      }, {
        "event_name": "complete_widget_-_publications",
        "experiments": {"2759031636": true},
        "selector": ".widget-completion-list > li:eq(3) > a:eq(0)"
      }, {
        "event_name": "enter_registration_process",
        "experiments": {"3136200687": true},
        "selector": ".intro-buttons > .large-button,.join-others-buttons > .large-button"
      }]
    };

    function h (a) {throw a;}

    var i = void 0, j = !0, k = null, o = !1;

    function aa () {return function (a) {return a}}

    function ba (a) {
      var b = typeof a;
      return "object" == b && a != k || "function" == b
    }

    function ca (a, b, c) {return a.call.apply(a.bind, arguments)}

    function da (a, b, c) {
      a || h(Error());
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c)
        }
      }
      return function () {return a.apply(b, arguments)}
    }

    function p (a, b, c) {
      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ca : da;
      return p.apply(k, arguments)
    }

    function t (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
      }
    };
    function u (a) {try {return window.JSON.stringify(a)} catch (b) {h(Error("JSON: Unable to stringify (" + b.message + ")"))}}

    function ea (a) {try {return window.JSON.parse(a)} catch (b) {h(Error("JSON: Unable to parse (" + b.message + ")"))}};
    var fa = /\s*;\s*/, ha = /^([^=]+)=?(.*)$/;

    function v (a) {
      var b = [];
      w(ia(), function (c) {a === c.name && b.push(ja(c.value))});
      if (0 === b.length)return k;
      1 < b.length && x("Cookie", "Values found for %s: %s", a, b.length);
      return b.pop()
    }

    var ka = o;

    function ia () {
      var a, b = [];
      a = a || "";
      w((document.cookie || "").split(fa), function (c) {
        var d = c.match(ha);
        d && 0 === d[1].indexOf(a) && b.push({name: d[1], value: d[2], P: c})
      });
      return b
    }

    function y (a, b, c) {
      if (ka) x("Cookie", "Already initialized."); else {
        x("Cookie", "Initializing.");
        var d = WB_wombat_self_location.hostname;
        if (la()) {
          ma = d;
          for (var d = WB_wombat_self_location.hostname.split("."), e = [], f = d.length - 1; 0 <= f; --f) {
            var g = d.slice(f).join("."), l = "optimizelyDomainTest-" + Math.random().toString(16).replace("0.", ""), m = Math.random().toString(16).replace("0.", "");
            na(l, m, g, 3);
            v(l) === m && e.push(g)
          }
          oa = e;
          0 < oa.length ? (ma = oa[0], x("Cookie", "Highest level domain: %s", ma)) : (x("Cookie", "Disabling event tracking because cookies could not be set"),
              qa = o)
        } else e = d.split("."), f = d, g = e[e.length - 1], 2 < e.length && "appspot" === e[e.length - 2] && "com" === g ? f = e[e.length - 3] + ".appspot.com" : 1 < e.length && ra(g, ta) && (f = e[e.length - 2] + "." + g), ua = f, x("Cookie", "Guessed public suffix: %s", ua), va = wa(d), x("Cookie", "Public suffix (from data): %s", va);
        xa && x("Cookie", "Domain specified by API: %s", xa);
        ka = j;
        x("Cookie", "Done initializing.")
      }
      b = b || "";
      la() ? (w(oa, function (b) {ya(a, b)}), d = za(), na(a, b, d, c), c = v(a) === b ? "Succeeded" : "Failed", x("Cookie", "%s setting %s=%s on %s", c, a, b, d)) :
        (d = za(), e = WB_wombat_self_location.hostname, !va && z("remote_public_suffix") && Aa.push({
          yb: c,
          name: a,
          value: b
        }), d && (d === va && d !== ua) && (ya(a, e), ya(a, ua)), na(a, b, d, c), f = v(a), f === b) ? x("Cookie", "Successfully set %s=%s on %s", a, b, d) : (x("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), x("Cookie", "Setting %s on %s", a, e), na(a, b, e, c), f = v(a), f === b ? (x("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), ua = e) : (x("Cookie", "Could not set cookie %s, disabling event tracking.", a), qa = o))
    }

    function ya (a, b) {
      var c = [a, "=", "; ", Ba(b), "; path=/", "; expires=", (new Date(0)).toUTCString()];
      document.cookie = c.join("")
    }

    function za () {return la() ? xa || ma : xa || va || ua}

    function Ba (a) {
      var b = [];
      b.push("domain=");
      "localhost" !== a && (b.push("."), b.push(a));
      return b.join("")
    }

    function na (a, b, c, d) {
      a = [a, "=", encodeURIComponent(b), "; ", Ba(c), "; path=/"];
      d && a.push("; expires=", (new Date(+new Date + 1E3 * d)).toUTCString());
      document.cookie = a.join("")
    }

    function Ca (a) {za() !== a && (xa = String(a) || "", x("Cookie", "Api public suffix set to: %s", xa))}

    var ua = "", xa = "", ma = "", oa = [], va = "", Aa = [];
    var Da = window.OPTIMIZELY_TEST_MODULE, ta = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "), Ea = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
    var Fa = 0, Ga = o, B = j, Ha = j, Ia = o, Ja = o, Ka = o, La = o, Ma = "", Na = o, Oa = o, Pa = o, Qa = o, Ra = o, Sa = o, qa = j, Ua = 31536E4;

    function Va () {
      var a = v("optimizelyEndUserId");
      a || (a = "oeu" + +new Date + "r" + Math.random(), y("optimizelyEndUserId", a, Ua));
      return a
    }

    function Wa () {return v("optimizelyPPID")};
    function Xa (a, b) {
      var c = j;
      w(a, function (a) {if (!b(a))return c = o});
      return c
    }

    function D (a, b) {
      var c = o;
      w(a, function (a) {if (b(a))return c = j});
      return c
    }

    function E (a, b) {
      for (var c = 0; c < a.length; c++)if (b == a[c])return j;
      return o
    }

    function Ya (a, b) {
      var c = Za(arguments, 1);
      return function () {
        var b = Za(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
      }
    }

    function w (a, b) {
      var c = k;
      if (F(a))for (var d = a.length, e = 0; e < d && !(c = b.call(i, a[e], e), H(c)); ++e); else for (d in a)if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(i, d, a[d]), H(c)))break;
      return c
    }

    function I (a, b) {
      if ("function" === typeof a.map)return a.map(b);
      for (var c = [], d = 0; d < a.length; d++)c.push(b(a[d], d));
      return c
    }

    function J (a, b) {
      w(b, function (b, d) {a[b] = d});
      return a
    }

    function $a (a, b) {
      if (F(b)) {
        for (var c = a, d = 0; d < b.length; d++) {
          var e = b[d];
          if (!ba(c) || !c.hasOwnProperty(e))return;
          c = c[e]
        }
        return c
      }
    }

    function K (a, b) {
      for (var c = [], d = 0, e = a.length; d < e; d++) {
        var f = a[d];
        b(f) && c.push(f)
      }
      return c
    }

    function ra (a, b) {return w(b, function (b) {if (b === a)return j}) || o}

    function F (a) {return !!a && "object" === typeof a && "number" === typeof a.length}

    function H (a) {return "undefined" !== typeof a}

    function ab (a) {return "object" === typeof a && a !== k}

    function bb (a) {return ("number" === typeof a || "string" === typeof a) && Number(a) == a}

    function cb (a) {return "string" === typeof a}

    function L (a) {
      L = Object.zb || function (a) {
          var c = [];
          w(a, function (a) {c.push(a)});
          return c
        };
      return L.call(k, a)
    }

    function db (a, b) {
      function c () {
        var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement, c = document.createElement("script");
        c.src = a;
        c.type = "text/javascript";
        b.appendChild(c)
      }

      if (b)try {
        if ("loading" === document.readyState) {
          var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random());
          -1 !== a.indexOf('"') ? M("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && h(Error("Document.write failed to append script")))
        } else h(Error("Not safe to attempt document.write"))
      } catch (e) {
        try {
          var f =
            new XMLHttpRequest;
          f.open("GET", a, o);
          f.onload = function () {eval(f.responseText)};
          f.onerror = function () {h(Error())};
          f.send()
        } catch (g) {x("Common", "Failed to load %s synchronously", a), c()}
      } else c()
    }

    function x (a, b, c) {
      var d = window.console;
      if (Pa && d && d.log) {
        var e = Za(arguments, 1);
        e[0] = "Optimizely / " + a + " / " + b;
        Function.prototype.apply.call(d.log, d, e)
      }
    }

    function ja (a) {try {return decodeURIComponent(a)} catch (b) {return a}}

    function Za (a, b) {return Array.prototype.slice.call(a, b || 0, a.length)}

    function eb (a) {return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")};
    function fb (a) {
      this.r = a;
      this.c = {
        totalGets: 0,
        totalGetLength: 0,
        totalGetTime: 0,
        totalSets: 0,
        totalSetLength: 0,
        totalSetTime: 0,
        numKeys: 0,
        totalSize: 0
      }
    }

    fb.prototype.get = function (a) {
      try {
        var b = +new Date, c = this.r.getItem([gb, a].join("$$")), d = ea(c);
        this.c.totalGetTime += +new Date - b;
        this.c.totalGets++;
        this.c.totalGetLength += (c || "").length;
        return d
      } catch (e) {return k}
    };
    fb.prototype.set = function (a, b) {
      try {
        var c = +new Date, d = u(b);
        H(b) ? this.r.setItem([gb, a].join("$$"), d) : this.r.removeItem([gb, a].join("$$"));
        this.c.totalSetTime += +new Date - c;
        this.c.totalSets++;
        this.c.totalSetLength += d.length
      } catch (e) {}
    };
    fb.prototype.va = function () {
      var a = 0, b = 0, c;
      for (c in this.r)if (0 === c.indexOf(gb)) {
        b++;
        var d = this.r.getItem(c), a = a + (c.length + (d ? d.length : 0))
      }
      this.c.numKeys = b;
      this.c.totalSize = a;
      return this.c
    };
    var hb = {
      get: function () {},
      set: function () {},
      va: function () {return {}}
    }, gb = "optimizely_data", N = hb, ib = hb;
    try {
      var N = new fb(window.localStorage), ib = new fb(window.sessionStorage), jb = N, kb = jb.r.getItem(gb), lb = {};
      try {lb = ea(kb) || {}} catch (mb) {}
      if (0 !== L(lb).length) {
        var nb = Wa() || v("optimizelyEndUserId"), ob = lb[nb] || {}, pb;
        for (pb in ob)if (ob.hasOwnProperty(pb)) {
          var qb = [nb, pb].join("$$");
          jb.get(qb) === k && jb.set(qb, ob[pb])
        }
        delete lb[nb];
        for (pb in lb)lb.hasOwnProperty(pb) && (jb.get(pb) === k && jb.set(pb, lb[pb]), delete lb[pb]);
        try {kb = u(lb)} catch (rb) {kb = {}}
        jb.r.setItem(gb, kb)
      }
    } catch (sb) {}
    ;
    function tb () {return z("admin_account_id")}

    function ub (a) {return z("audiences", a)}

    function vb (a) {
      a = z("audiences", a, "segment_id");
      return !a ? k : a
    }

    function wb () {
      if (!xb) {
        var a = z("click_goals") || [];
        xb = [];
        for (var b = 0, c = a.length; b < c; b++)for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
          var l = e[f];
          l && (l = {
            event_name: d.event_name,
            selector: l
          }, "experiments" in d ? l.experiments = d.experiments : "url_conditions" in d && (l.url_conditions = d.url_conditions), "revenue" in d && (l.revenue = d.revenue), xb.push(l))
        }
      }
      return xb
    }

    function yb (a, b) {return z("dimensions", a, b)}

    function zb (a) {
      a = yb(a, "condition_type");
      return !a ? k : a
    }

    function Ab (a) {
      a = yb(a, "name");
      return !a ? k : a
    }

    function Cb () {
      Db || (Db = K(Eb(), Fb));
      return Db
    }

    function Gb (a) {
      var b = z("goal_expressions"), c = [], d;
      for (d in b)if (b.hasOwnProperty(d))for (var e = b[d], f = 0; f < e.length; f++)try {
        if (RegExp(e[f], "i").test(a)) {
          c.push(d);
          break
        }
      } catch (g) {}
      return c
    }

    function Hb (a) {
      var b = Ib(), c;
      for (c in b)if (Object.prototype.hasOwnProperty.call(b, c)) {
        var d = b[c];
        if (d && d.api_name === a)return String(c)
      }
      return k
    }

    function Jb () {return z("experiments") || {}}

    function Eb () {return L(z("experiments") || {})}

    function Kb (a) {return "manual" === O(a, "activation_mode")}

    function Lb (a) {return "conditional" === O(a, "activation_mode")}

    function Mb (a) {return O(a, "name") || "Exp " + a}

    function Nb (a) {return 'experiment "' + Mb(a) + '" (' + a + ")"}

    function Ob (a) {return O(a, "section_ids") || []}

    function Pb (a) {return O(a, "variation_ids") || []}

    function Qb () {return z("list_targeted_keys") || {}}

    function Rb () {return z("project_id")}

    function Ib () {return z("segments") || {}}

    function Sb (a, b) {
      for (var c = Ob(a), d = 0; d < c.length; d++) {
        var e = Tb(c[d]);
        if (E(e, b))return c[d]
      }
      return ""
    }

    function wa (a) {
      var b = {}, c = z("public_suffixes") || {};
      w(c, function (a, c) {w(c, function (c) {b[c] = a})});
      wa = function (a) {return b[a] || ""};
      return wa.call(k, a)
    }

    function Tb (a) {return z("sections", a, "variation_ids") || []}

    function Ub (a) {
      var b = [];
      w(a.split("_"), function (a) {(a = z("variations", a, "code")) && b.push(a)});
      return b.join("\n")
    }

    function P (a) {
      if (!Vb) {
        var b = {};
        w(Eb(), function (a) {
          w(Ob(a), function (d) {w(Tb(d), function (d) {b[d] = a})});
          w(Pb(a), function (d) {b[d] = a})
        });
        Vb = b
      }
      return Vb[a.split("_")[0]] || ""
    }

    function Wb (a) {
      var b = P(a), c = Ob(b);
      if (0 === c.length) {
        c = Pb(b);
        for (b = 0; b < c.length; b++)if (c[b] === a)return b
      } else {
        for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)for (var e = Tb(c[d]), f = 0; f < e.length; f++)e[f] === a[d] && b.push(f);
        if (b !== [])return b
      }
      return -1
    }

    function Xb (a) {
      var b;
      return Yb(a).join(b || ", ")
    }

    function Yb (a) {
      var b = [];
      w(a.split("_"), function (a) {b.push(z("variations", a, "name") || "Var " + a)});
      return b
    }

    function Zb () {return z("www_host")}

    function Fb (a) {return !!O(a, "enabled")}

    function la () {return !!z("simple_cookies")}

    function O (a, b) {return z("experiments", a, b)}

    function $b (a) {
      a = O(a, "comscore");
      return H(a) ? a.url : k
    }

    function ac (a) {return O(a, "google_analytics")}

    function bc (a, b) {
      var c = O(a, "universal_analytics");
      return H(c) ? c[b] : k
    }

    function z (a) {
      var b = DATA;
      if (w(arguments, function (a) {
          a = b[a];
          if (H(a)) b = a; else return k
        }) !== k)return b
    }

    function cc (a, b) {return z("segments", a, b)}

    function dc () {
      var a = z("rum_sampling_rate");
      return H(a) ? a : 0.003
    }

    var xb = k, Db = k, Vb = k;

    function ec (a, b) {
      function c (a, b) {
        var c = b & 65535;
        return ((b - c) * a | 0) + (c * a | 0) | 0
      }

      for (var d = a.length, e = b || 0, f = d & -4, g, l = 0; l < f; l += 4)g = a.charCodeAt(l) & 255 | (a.charCodeAt(l + 1) & 255) << 8 | (a.charCodeAt(l + 2) & 255) << 16 | (a.charCodeAt(l + 3) & 255) << 24, g = c(g, 3432918353), g = (g & 131071) << 15 | g >>> 17, g = c(g, 461845907), e ^= g, e = (e & 524287) << 13 | e >>> 19, e = 5 * e + 3864292196 | 0;
      g = 0;
      switch (d % 4) {
        case 3:
          g = (a.charCodeAt(f + 2) & 255) << 16;
        case 2:
          g |= (a.charCodeAt(f + 1) & 255) << 8;
        case 1:
          g |= a.charCodeAt(f) & 255, g = c(g, 3432918353), e ^= c((g & 131071) << 15 | g >>> 17, 461845907)
      }
      e ^=
        d;
      e = c(e ^ e >>> 16, 2246822507);
      e = c(e ^ e >>> 13, 3266489909);
      return e ^ e >>> 16
    };
    var fc = Math.pow(2, 32);

    function gc (a, b) {
      var c = ec(a, b);
      return (c >>> 16).toString(16) + (c & 65535).toString(16)
    };
    function hc () {return ic = ic || jc()}

    function kc () {return hc().ba}

    function lc () {return hc().ca}

    function mc () {return hc().F}

    function nc (a) {
      if (!a)return "";
      try {return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]} catch (b) {return ""}
    }

    function oc () {return hc().platform}

    function pc (a) {return N.get([Wa() || Va(), a].join("$$"))}

    function qc (a) {N.set([Wa() || Va(), "asyncInfo"].join("$$"), a)}

    function rc () {
      var a = "android;blackberry;ipad;iphone;ipod;windows phone".split(";");
      return E(a, mc().id) ? mc().id : E(a, oc().id) ? oc().id : sc() ? "mobile" : "unknown"
    }

    function sc () {return mc().w}

    function tc () {return uc ? "returning" : "new"}

    oc = function () {return hc().platform};
    function vc (a) {
      x("User", "Setting current URL to %s", a);
      wc = a
    }

    var wc = i, ic = i, uc = i;

    function M (a, b, c) {
      xc.push({Ea: new Date, Ca: a, message: b, ta: c || o});
      yc && zc()
    }

    function Ac () {Pa = j}

    function Bc () {Qa = Pa = j}

    function zc () {
      Pa && (w(xc, function (a) {
        if (!a.bb && (!a.ta || a.ta === Qa)) {
          var b = +a.Ea;
          x(a.Ca, a.message + (" [time " + (Cc ? b - Cc : 0) + " +" + (Dc ? b - Dc : 0) + "]"));
          Dc = b;
          Cc || (Cc = b);
          a.bb = j
        }
      }), yc = j)
    }

    var Dc = k, Cc = k, xc = [], yc = o;
    var Q = {};

    function Fc (a, b) {Q[a] = b}

    function Gc (a, b) {
      var c = pc("asyncInfo") || {};
      c[a] = b;
      qc(c)
    }

    function Hc () {
      var a = (Q.odds || k) && (Q.odds || k).ip || (Q.cdn3 || k) && (Q.cdn3 || k).ip;
      return a ? Ic(a) : k
    }

    function Jc () {return !Q.odds ? k : (Q.odds || k).lists || {}}

    function Kc (a) {
      if (!Jc())return M("Async Info", "Invalid response from ODDS"), {value: i, M: o};
      if (!Jc().hasOwnProperty(a))return M("Async Info", "Deduced cachetime value that was checked for presence in list: " + a), {
        value: i,
        M: j
      };
      var b = !Q.odds ? k : (Q.odds || k).lists_metadata || {};
      if (!b || !b[a] || !b[a][0])return M("Async Info", "Can't find cachetime value that was checked for presence in list: " + a), {
        value: i,
        M: o
      };
      M("Async Info", "Found cachetime value that was checked for presence in list: " + a);
      return {
        value: b[a][0].value,
        M: j
      }
    }

    function Lc (a) {
      var b = Qb()[a], c = H(b) && Mc(b);
      if (c) {
        var d = Nc(b);
        if (d === k)return M("Async Info", "Deduced membership status (false) for list: " + a), o;
        M("Async Info", "Found current value to check for presence in list: " + a)
      }
      b = Jc();
      if (!b)return M("Async Info", "No list membership info."), k;
      if (c && (c = Kc(a), c.M && c.value !== d))return M("Async Info", "Ignoring out-of-date membership status for list: " + a), k;
      d = !!b[a];
      M("Async Info", "Found membership status (" + d + ") for list: " + a);
      return d
    }

    function Oc () {
      if (!Q.cdn3)return k;
      var a = (Q.cdn3 || k).WB_wombat_self_location || {};
      return {continent: Ic(a.continent), country: Ic(a.country), region: Ic(a.region), city: Ic(a.city)}
    }

    var Pc = {
      get: function () {return Q.dcps || k}, set: function (a) {
        Gc("dcps", a);
        Q.dcps = a
      }
    };

    function Qc () {
      var a = Pc.get();
      return !a || a.rulesResults === k ? k : a.rulesResults || {}
    }

    function Ic (a) {return "string" !== typeof a || "N/A" === a.toUpperCase() ? k : a.toUpperCase()};
    function Rc (a) {
      a = a || {};
      if (qa) {
        a && a.sVariable && (Sc = a.sVariable);
        var b = Sc || ("undefined" !== typeof window.s ? window.s : k);
        if (b)if (Tc) {
          a = Uc;
          if (a !== k && b)try {x("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)} catch (c) {x("Integrator", "Error setting SiteCatalyst referrer: %s", c)}
          x("Integrator", "Tracking with SiteCatalyst");
          w(Vc(), function (a) {
            var c = P(a), a = R(c, a, 100, 100, 25, j), f = a.key + ": " + a.value, a = [], g = O(c, "site_catalyst_evar") || k, c = O(c, "site_catalyst_prop") || k;
            g !== k && a.push("eVar" + g);
            c !== k && a.push("prop" + c);
            w(a, function (a) {
              x("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
              b[a] = f
            })
          })
        } else Wc = j; else M("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
      }
    }

    function Xc (a) {
      a = bb(a) ? Number(a) : -1;
      if (-1 !== [1, 2, 3].indexOf(a)) Yc = a; else return Yc
    }

    function Zc () {
      if (qa) {
        var a = Uc;
        if (a !== k)try {x("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])} catch (b) {x("Integrator", "Error setting Google Analytics referrer: %s", b)}
        var c = [];
        w(Vc(), function (a) {
          var b = P(a);
          if (O(b, "chartbeat")) {
            var d = $c;
            $c = "";
            var e = R(b, a, 10, 10, 5, o);
            $c = d;
            d = Wb(a);
            ad = e.key + ": " + String(d);
            try {x("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", ad])} catch (n) {M("Integrator", "Error sending Chartbeat data for " + Nb(b))}
          }
          if ($b(b)) {
            var e = $b(b),
              d = R(b, a, 100, 100, 25, j), r = e + (-1 !== e.indexOf("?") ? "&" : "?") + "optimizely_experiment_id=" + b + "&optimizely_experiment_name=" + encodeURIComponent(d.key) + "&optimizely_variation_id=" + a + "&optimizely_variation_name=" + encodeURIComponent(d.value) + "&ns_m_exp=(" + b + ") " + encodeURIComponent(d.key) + "&ns_m_chs=(" + a + ") " + encodeURIComponent(d.value) + "&type=hidden";
            try {
              $(window).load(function () {
                M("Integrator", "Sending comScore log call");
                bd(r, k)
              })
            } catch (q) {M("Integrator", "Error sending comScore data for " + Nb(b))}
          }
          if (O(b, "crazyegg")) {
            e =
              R(b, a, 100, 100, 15, o);
            try {x("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = e.key + ": " + e.value} catch (G) {M("Integrator", "Error sending CrazyEgg data for " + Nb(b))}
          }
          if (ac(b)) {
            e = ac(b);
            d = 0;
            H(e) && (d = e.slot || d);
            var e = d, d = ac(b), A = "";
            H(d) && (A = d.tracker || A);
            d = A;
            A = R(b, a, 28, 24, 5, j);
            try {
              var C = "";
              "" !== d && (C = d + ".");
              x("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", e, Yc);
              _gaq.push([C + "_setCustomVar", e, A.key, A.value, Yc])
            } catch (pa) {
              M("Integrator", "Error sending Google Analytics data for " +
                Nb(b))
            }
          }
          if (O(b, "inspectlet")) {
            e = $c;
            $c = "";
            d = R(b, a, 100, 100, 25, o);
            $c = e;
            try {
              M("Integrator", "Calling __insp.push for sending data to Inspectlet"), window.__insp = window.__insp || [], window.__insp.push(["tagSession", {
                "Optimizely Experiment Name": d.key,
                "Optimizely Variation Name": d.value,
                "Optimizely Experiment ID": b,
                "Optimizely Variation ID": a
              }])
            } catch (Ta) {M("Integrator", "Error sending Inspectlet data for " + Nb(b))}
          }
          if (z("kissmetrics")) {
            e = R(b, a, 100, 100, 15, j);
            d = {};
            d[e.key] = e.value;
            try {
              x("Integrator", "Calling _kmq.set"),
                _kmq.push(["set", d])
            } catch (ze) {M("Integrator", "Error sending KISSmetrics data for " + Nb(b))}
          }
          if (O(b, "mixpanel")) {
            e = R(b, a, 100, 100, 15, o);
            d = {};
            d[e.key] = e.value;
            try {x("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", d])} catch (Gh) {M("Integrator", "Error sending Mixpanel data for " + Nb(b))}
          }
          if (O(b, "moat")) {
            e = R(b, a, 100, 100, 15, o);
            e = e.key + ": " + e.value;
            try {x("Integrator", "Calling optimizelyMoat.push"), optimizelyMoat.push(e)} catch (Hh) {M("Integrator", "Error sending Moat data for " + Nb(b))}
          }
          O(b, "sessioncam") &&
          (c = c.concat(cd(b, a)));
          O(b, "at_internet") && (e = R(b, a, 28, 24, 5, j), a = b + "[" + encodeURIComponent(e.key) + "]-0-" + a + "[" + encodeURIComponent(e.value) + "]", a in dd || (x("Integrator", "Queueing AT Internet log call: %s", a), dd[a] = o))
        });
        if (0 < c.length) {
          a = c;
          try {
            M("Integrator", "Calling sessioncamConfiguration object"), window.sessioncamConfiguration = window.sessioncamConfiguration || {}, window.sessioncamConfiguration.customDataObjects = window.sessioncamConfiguration.customDataObjects || [], window.sessioncamConfiguration.customDataObjects =
              window.sessioncamConfiguration.customDataObjects.concat(a)
          } catch (d) {M("Integrator", "Error sending sessioncam data " + a)}
        }
        0 < L(dd).length && ("function" === typeof window.xt_mvt ? ed() : $(window).bind("load.ATInternet", ed));
        a = v("optimizelyChartbeat") || "";
        try {if (a && ad != a && (x("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), ad != a) x("Integrator", "Set new Chartbeat referral cookie."), y("optimizelyChartbeat", ad)} catch (e) {M("Integrator", "Error sending Chartbeat referral for " + a)}
        Tc = j;
        fd &&
        (gd(), fd = o);
        Wc && (Rc(), Wc = o)
      }
    }

    function hd () {
      if (window.ClickTaleContext) {
        try {
          window.ClickTaleContext.getAggregationContextAsync("1", function (a) {
            a.Location && window.optimizely.push(["overrideUrl", a.Location]);
            for (var b in a.PageEvents) {
              var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
              x("Integrator", "Playback ClickTale Integration - %s", e);
              for (b = 0; b < e.length; b++) {
                x("Integrator", "Playback ClickTale Integration - %s", e[b]);
                for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), l = 0; l < g.length; l++)id(g[l]) ? x("Integrator",
                    "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[l], {force: j}])
              }
            }
          })
        } catch (a) {x("Integrator", "Playback ClickTale Aggregation Integration failed.")}
        try {
          window.ClickTaleContext.getRecordingContextAsync("1.1", function (a) {
            if (a.inSingleRecordingScope) {
              a.WB_wombat_self_location && window.optimizely.push(["overrideUrl", a.WB_wombat_self_location]);
              x("Integrator", "Playback ClickTale getRecordingContextAsync callback");
              for (var b in a.fields)x("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), id(a.fields[b]) ?
                x("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {force: j}])
            }
          })
        } catch (b) {x("Integrator", "Playback ClickTale Recording Integration failed.")}
      } else x("Integrator", "ClickTaleContext not defined.")
    }

    function jd () {
      x("Integrator", "Tracking with ClickTale.");
      "function" == typeof window.ClickTaleField ? w(Vc(), function (a) {
          var b = P(a), c = R(b, a, 100, 100, 15, o), c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
          x("Integrator", "Setting ClickTale - %s", c);
          window.ClickTaleField(b, a);
          window.ClickTaleEvent(c)
        }) : x("Integrator", "ClickTaleField() not defined.")
    }

    function kd (a) {$c = a}

    function ld (a) {Sc = a}

    function md (a, b) {return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)}

    function Vc () {
      var a = nd.concat(S), b = [];
      w(od(), function (c) {
        var e = P(c), f = o;
        if (Fb(e)) {
          var g = Xb(c);
          E(a, e) && (x("Integrator", '"%s" relevant because experiment active', g), f = j);
          f && b.push(c)
        }
      });
      var c = pd;
      c && b.push(c);
      return b
    }

    function id (a) {
      if (a = Ub(a))if (a = qd(a.toString()))return a[1];
      return k
    }

    function gd () {
      if (qa)if (Tc) {
        var a = window[window.GoogleAnalyticsObject || "ga"];
        if (a) {
          var b = Uc;
          if (b !== k)try {x("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)} catch (c) {x("Integrator", "Error setting Universal Analytics referrer: %s", c)}
          x("Integrator", "Tracking with Universal Analytics");
          w(Vc(), function (b) {
            var c = P(b);
            if (bc(c, "slot")) {
              var f = bc(c, "slot"), g = bc(c, "tracker"), l = R(c, b, 100, 100, 25, j), b = l.key + " (" + c + "): " + l.value;
              150 < b.length && (b = l.key.substring(0, 80) + " (" + c + "): " + l.value, b = b.substring(0, 149));
              c = g ? g + "." : "";
              x("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
              a(c + "set", "dimension" + f, b)
            }
          })
        } else M("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
      } else fd = j
    }

    function cd (a, b) {
      M("Integrator", "Preparing to send data to Sessioncam");
      return [R(a, b, 100, 100, 15, o), {key: "Optimizely Exp " + a, value: "Optimizely Var " + b}]
    }

    function ed () {try {$(window).unbind("load.ATInternet"), window.xt_mvt && w(dd, function (a, c) {c || (x("Integrator", "Sending AT Internet log call: %s", a), window.xt_mvt("", "", a), dd[a] = j)})} catch (a) {M("Integrator", "Error sending AT Internet data: " + a.toString())}}

    function R (a, b, c, d, e, f) {
      a = $c + Mb(a);
      b = Yb(b);
      1 < b.length ? (b = $.map(b, function (a) {return a.substr(0, e - 1)}), b = b.join("~")): b= b[0];
      f ? (a = md(a, c), b = md(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
      return {key: a, value: b}
    }

    function rd (a, b, c) {
      try {
        var d = N.get(sd) || {}, e = d[a], f;
        if (c && e) {
          var c = {}, g;
          if (e)for (g in e)e.hasOwnProperty(g) && (c[g] = e[g]);
          if (b)for (g in b)if (b.hasOwnProperty(g)) {
            var e = c, l = g, m;
            if (c[g]) {
              var n = c[g], r = b[g];
              F(n) || (n = [n]);
              F(r) || (r = [r]);
              for (var q = [].concat(n), G = i, G = 0; G < r.length; G++)ra(r[G], q) || q.push(r[G]);
              m = q
            } else m = b[g];
            e[l] = m
          }
          f = c
        } else f = b;
        d[a] = f;
        N.set(sd, d)
      } catch (A) {}
    }

    var fd = o, Wc = o, dd = {}, ad = "", Yc = 2, Tc = o, $c = "Optimizely ", Sc = k, sd = "thirdParty";

    function td (a, b, c, d) {
      if (!B)return o;
      var e = "number" === typeof c || "string" === typeof c ? String(c) : k, f = !!(c === j || c && c.force === j || d && d.force === j), d = ("object" === typeof c ? c : d) || {}, c = d.skip === j, g = d.skipPageview === j, d = d.enabledStatus;
      if (e)try {ud(b, e, j)} catch (l) {M("Activator", "Error while activating experiment " + b + " for variation " + e + " -- proceeding without bucketing user.")}
      var m = [];
      bb(b) ? m.push(b) : w(Eb(), function (a) {Kb(a) && m.push(a)});
      vd(a, m, {Ga: f, cb: j, Fa: d, ib: c, za: g})
    }

    function wd (a, b, c) {
      if (!B)return o;
      if (!("object" === typeof b && "string" === typeof c))if ("object" === typeof b && !H(c)) c = b.hasOwnProperty("lists") ? "odds" : "cdn3"; else if (H(b) || H(c)) {
        M("Activator", "Unrecognized arguments to activateGeoDelayedExperiment: " + arguments);
        return
      }
      if ("object" === typeof b && "string" === typeof c) {
        M("Activator", "Saving async info from '" + c + "'");
        "cdn3" === c && T("geoArrive");
        Gc(c, b);
        var d = (Q[c] = b) && b.lists || {}, e = {}, f, g, l, m, n;
        for (n in d)d.hasOwnProperty(n) && (0 === n.indexOf("_") && d[n]) && (f = n.substring(1).split("__"),
          g = f.shift(), l = f.shift(), f = f.join("__"), g && (l && f) && (m = e, m[g] || (m[g] = {}), m = m[g], m[l] || (m[l] = []), m = m[l], m.push(f)));
        for (g in e)rd(g, e[g], o);
        xd ? (M("Activator", "Post-timeout; too late to act on new async info."), geolocation.cdn3Requested && T("geoFailed")) : (d = yd.slice(), M("Activator", "Trying to activate " + d.length + " delayed segments"), zd(d), d = Ad.slice(), M("Activator", "Trying to activate " + d.length + " experiments"), vd(a, d, {za: Sa}), Bd(), "object" === typeof b && "string" === typeof c && "cdn3" === c && T("geoSuccess"))
      } else M("Activator",
        "Timeout: will not act on future async info."), T("geoTimeout"), xd = j
    }

    function vd (a, b, c) {
      M("Activator", "Triaging " + b.length + " experiments.");
      var d = [], e = [], f = [];
      w(b, function (b) {
        c.Ga ? (M("Activator", "Force-ignoring conditions for experiment " + b), d.push(b)) : Cd(b) ? Dd(b, {
              manualActivation: c.cb,
              objectType: "experiment",
              enabledStatus: c.Fa,
              visitor: a
            }) ? (M("Activator", "Passed conditions for experiment " + b), d.push(b)) : (M("Activator", "Failed conditions for experiment " + b), f.push(b)) : (M("Activator", "Can't test conditions for experiment " + b), e.push(b))
      });
      w(e, Ed);
      Fd(d);
      Fd(f);
      var g = [];
      w(d, function (a) {Gd(a, c.ib) && g.push(a)});
      Hd(g, b);
      Id();
      Zc();
      B && !c.za && Jd(WB_wombat_self_location.href, "pageview", {hb: j})
    }

    function zd (a) {
      M("Activator", "Triaging " + a.length + " segments.");
      var b = [], c = [], d = [], e = [];
      w(a, function (a) {cc(a, "is_api_only") ? (M("Activator", "Ignoring API-only segment " + a), e.push(a)) : Cd(a) ? Dd(a, {objectType: "segment"}) ? (M("Activator", "Passed conditions for segment " + a), b.push(a)) : (M("Activator", "Failed conditions for segment " + a), d.push(a)) : (M("Activator", "Can't test conditions for segment " + a), c.push(a))});
      w(c, Kd);
      Ld(b);
      Ld(d);
      Ld(e);
      w(b, Md)
    }

    function Ed (a) {
      M("Activator", "Deferring test for experiment " + a);
      E(Ad, a) || Ad.push(a)
    }

    function Kd (a) {
      M("Activator", "Deferring test for segment " + a);
      E(yd, a) || yd.push(a)
    }

    function Fd (a) {Ad = K(Ad, function (b) {return !ra(b, a)})}

    function Ld (a) {yd = K(yd, function (b) {return !ra(b, a)})}

    var Ad = [], yd = [], xd = o;
    /*


     UAParser.js v0.7.9
     Lightweight JavaScript-based User-Agent string parser
     https://github.com/faisalman/ua-parser-js

     Copyright ? 2012-2015 Faisal Salman <fyzlman@gmail.com>
     Dual licensed under GPLv2 & MIT
     */
    function Nd () {}

    var Rd = {
      extend: function (a, b) {
        for (var c in b)-1 !== "browser cpu device engine os".indexOf(c) && 0 === b[c].length % 2 && (a[c] = b[c].concat(a[c]));
        return a
      },
      has: function (a, b) {return "string" === typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : o},
      N: function (a) {return a.toLowerCase()},
      ua: function (a) {return "string" === typeof a ? a.split(".")[0] : i}
    };

    function Sd () {
      for (var a, b = 0, c, d, e, f, g, l, m = arguments; b < m.length && !g;) {
        var n = m[b], r = m[b + 1];
        if ("undefined" === typeof a)for (e in a = {}, r)f = r[e], "object" === typeof f ? a[f[0]] = i : a[f] = i;
        for (c = d = 0; c < n.length && !g;)if (g = n[c++].exec(this.ra()))for (e = 0; e < r.length; e++)l = g[++d], f = r[e], "object" === typeof f && 0 < f.length ? 2 == f.length ? a[f[0]] = "function" == typeof f[1] ? f[1].call(this, l) : f[1] : 3 == f.length ? a[f[0]] = "function" === typeof f[1] && (!f[1].exec || !f[1].test) ? l ? f[1].call(this, l, f[2]) : i : l ? l.replace(f[1], f[2]) : i : 4 == f.length &&
              (a[f[0]] = l ? f[3].call(this, l.replace(f[1], f[2])) : i) : a[f] = l ? l : i;
        b += 2
      }
      return a
    }

    function Td (a, b) {
      for (var c in b)if ("object" === typeof b[c] && 0 < b[c].length)for (var d = 0; d < b[c].length; d++) {if (Rd.has(b[c][d], a))return "?" === c ? i : c} else if (Rd.has(b[c], a))return "?" === c ? i : c;
      return a
    }

    var Ud = {
      ME: "4.90",
      "NT 3.11": "NT3.51",
      "NT 4.0": "NT4.0",
      2E3: "NT 5.0",
      XP: ["NT 5.1", "NT 5.2"],
      Vista: "NT 6.0",
      7: "NT 6.1",
      8: "NT 6.2",
      "8.1": "NT 6.3",
      10: ["NT 6.4", "NT 10.0"],
      RT: "ARM"
    }, Vd = {
      browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], ["name", "version"], [/\s(opr)\/([\w\.]+)/i], [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
        /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)\/([\w\.-]+)/i], ["name", "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [["name", "IE"], "version"], [/(edge)\/((\d+)?[\w\.]+)/i], ["name", "version"], [/(yabrowser)\/([\w\.]+)/i], [["name", "Yandex"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
        ["name", "version"], [/(dolfin)\/([\w\.]+)/i], [["name", "Dolphin"], "version"], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"], "version"], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], ["version", ["name", "Android Browser"]], [/FBAV\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
        ["version", "name"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", Td, {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Firefox"]], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]],
      da: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", Rd.N]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i],
        [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", Rd.N]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", Rd.N]]],
      F: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], ["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor",
        "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [["model", Td, {"Fire Phone": ["SD", "KF"]}], ["vendor", "Amazon"], ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i],
        ["model", ["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], ["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
        [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Phone"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[3portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", Td, {
          HTC: "APA",
          Sprint: "Sprint"
        }], ["model",
          Td, {"Evo Shift 4G": "7373KT"}], ["type", "mobile"]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], ["vendor", "model", ["type", "tablet"]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g,
          " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,
          /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [["vendor", "Nokia"], "model", ["type", "mobile"]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
        [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/android.+(\w+)\s+build\/hm\1/i,
          /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/(mobile|tablet);.+rv\:.+gecko\//i], [["type", Rd.N], "vendor", "model"]],
      fa: [[/windows.+\sedge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"],
        [/rv\:([\w\.]+).*(gecko)/i], ["version", "name"]],
      wa: [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", Td, Ud]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", Td, Ud]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
        /linux;.+(sailfish);/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [["name", "Symbian"], "version"], [/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i,
        /(gnu)\s?([\w\.]+)*/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.]+\d)*/i], [["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], ["name", "version"], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [["name", "iOS"], ["version", /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i,
        /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], ["name", "version"]]
    };

    function Wd (a, b) {
      if (!(this instanceof Wd))return (new Wd(a, b)).Ta();
      var c = a || (Nd && Nd.navigator && Nd.navigator.userAgent ? Nd.navigator.userAgent : ""), d = b ? Rd.extend(Vd, b) : Vd;
      this.u = function () {
        var a = Sd.apply(this, d.browser);
        a.ua = Rd.ua(a.version);
        return a
      };
      this.Ka = function () {return Sd.apply(this, d.da)};
      this.K = function () {return Sd.apply(this, d.F)};
      this.Pa = function () {return Sd.apply(this, d.fa)};
      this.oa = function () {return Sd.apply(this, d.wa)};
      this.Ta = function () {
        return {
          Ab: this.ra(), browser: this.u(), fa: this.Pa(),
          wa: this.oa(), F: this.K(), da: this.Ka()
        }
      };
      this.ra = function () {return c};
      this.gb = function (a) {c = a};
      this.gb(c);
      return this
    }

    Wd.VERSION = "0.7.9";
    Wd.kb = {e: "name", qb: "major", VERSION: "version"};
    Wd.mb = {jb: "architecture"};
    Wd.nb = {
      sb: "model",
      VENDOR: "vendor",
      g: "type",
      lb: "console",
      rb: "mobile",
      vb: "smarttv",
      wb: "tablet",
      xb: "wearable",
      ob: "embedded"
    };
    Wd.pb = {e: "name", VERSION: "version"};
    Wd.ub = {e: "name", VERSION: "version"};
    Nd.Ba = Wd;
    function jc () {
      var a = new Nd.Ba(window.navigator.userAgent), b = a.u(), c = a.oa(), a = a.K(), d = a.model in Xd ? Xd[a.model] : "unknown", e = (c.name || "unknown").toLowerCase(), f;
      a:if (E(["mobile", "tablet"], a.type)) f = j; else {
        if (d && "unknown" !== d)for (f in Xd)if (d === Xd[f]) {
          f = j;
          break a
        }
        f = E(["android", "blackberry", "ios", "windows phone"], e) ? j : o
      }
      return {
        ba: Yd(b.name),
        ca: b.version,
        platform: {id: e, version: c.version},
        F: {id: d, type: a.type || (f ? "mobile" : "desktop"), w: f}
      }
    }

    function Yd (a) {
      a = (a || "").toLowerCase();
      if (a in Zd)return a;
      for (var b in Zd)if (D(Zd[b] || [], function (b) {return b.toLowerCase() === a}))return b;
      return "unknown"
    }

    var Zd = {
      gc: ["Chrome", "chromium", "silk", "yandex", "maxthon"],
      ie: ["Internet Explorer", "iemobile"],
      edge: ["Edge"],
      ff: ["Firefox", "iceweasel"],
      opera: ["Opera", "opera mini", "opera tablet"],
      safari: ["Safari", "mobile safari", "webkit"],
      ucbrowser: ["UC Browser"]
    }, Xd = {iPhone: "iphone", iPad: "ipad"};

    function qd (a) {return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)}

    function $d (a) {return -1 !== a.indexOf("_optimizely_redirect_no_cookie")}

    function ae (a) {
      var a = a || "", b = v("optimizelyRedirect");
      return $d(a) || !b || b && "true" === b.split("|")[1] ? j : o
    }

    function be () {
      var a;
      a = H(a) ? a : document.referrer;
      y("optimizelyReferrer", a, 5)
    }

    var Uc = k, pd = "", ce = /^\/\* _optimizely_redirect.+\*\/[ ]*\nwindow\.WB_wombat_self_location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/, de = /^\/\* _optimizely_redirect.+\*\/[ ]*\nvar[ ]*_optly[ ]*=[ ]*\{[ ]*redir:document\.createElement\("a"\)\}[;]?\n_optly\.redir\.href=.*\n_optly\.cur=.+\nif \(_optly.cur\)[ ]?\{.+\}[ ]*\nwindow\.WB_wombat_self_location\.replace\(_optly\.redir\.href.*\)[ ]*[;]?$/, ee = /^\/\* _optimizely_redirect.+\*\/[ ]*[\n]+window\.WB_wombat_self_location\.replace\([ ]*redirectFirst.*\)[ ]*[;]?$/;
    var fe, ge;

    function he () {
      var a = {
        disable: ie,
        optOut: je,
        setCookieDomain: Ca,
        setCookieExpiration: ke,
        verifyPreviewProject: function (a) {Rb() !== a && M("API", "Preview projectId (" + Rb() + ") does not match expected (" + a + "), disabling.")}
      }, b = window.optimizely, c = [];
      F(b) && (w(b, function (b) {
        var e = b;
        F(b) ? e = b[0] : ab(b) && (e = b.type);
        a[e] ? le([a], b, j) : c.push(b)
      }), window.optimizely = c)
    }

    function me (a, b, c) {
      rd(a, b, !!c);
      Bd()
    }

    function ne (a, b) {
      var c = Hb(a) || a, d = Ib()[c];
      d ? d.audience_id ? U.D(d.audience_id) : d.dimension_id ? U.B(d.dimension_id, b || j, o) : oe(c, b) : M("API", "Unable to find segment: " + c)
    }

    function ud (a, b, c) {
      Ra = j;
      B && c !== j && Jd(WB_wombat_self_location.href, "pageview", {hb: j});
      var a = String(a), b = String(b), d = k, e = b.split("_"), f = Ob(a), b = f && 0 !== f.length;
      if ("-1" === e[0]) {
        c = a;
        pe[c] && delete pe[c];
        qe[c] && delete qe[c];
        for (e = 0; e < V.length; e++)V[e].H === c && V.splice(e, 1);
        re()
      } else if (b && e.length == f.length) d = [], w(e, function (a, b) {256 >= Number(a) ? d.push(Tb(f[b])[a]) : d.push(a)}), d = d.join("_"); else if (!b && 1 == e.length && 256 >= Number(e[0])) {
        var c = String, e = e[0], g = Pb(a), l = k;
        try {l = g[e]} catch (m) {}
        d = c(l)
      } else 1 == e.length ?
        d = e[0] : M("API", "Error: could not bucket user. Unknown arguments.");
      d && (b && Sb(a, d) ? (b = d, c = Sb(a, b), se[a] = se[a] || {}, se[a][c] = b, M("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = te(a), 1 === a.length && ue(a[0], "api.bucketUser", j)) : ue(d, "api.bucketUser", j));
      Id()
    }

    function ie (a) {
      a && "tracking" === a || (M("API", "Optimizely disabled"), Ha = B = o);
      qa = o
    }

    function ve () {
      M("API", "Finalizing API.");
      Bd();
      fe = j
    }

    function we () {if (z("slave"))return SLAVE_CLIENT.optimizely.get.apply(k, Array.prototype.slice.call(arguments))}

    var xe = [];

    function ye (a) {
      xe.push(a);
      Bd()
    }

    function le (a, b, c) {
      var d = [], e = b, c = H(c) ? c : o, f = 0;
      F(b) ? (e = b[0], d = Za(b, 1)): ab(b) && (f = H(b.version) ? b.version : 1, e = b.type, d = [b]);
      var a = a[f], g;
      a && (g = a[e]);
      g ? (M("API", 'Called function "' + e + '"'), g.apply(k, d), Ae.S[0 === f ? e : "v" + f + "." + e] = j) : c || M("API", 'Error for unknown function "' + e + '"');
      z("slave") && SLAVE_CLIENT.optimizely.push(b);
      zc()
    }

    function Be (a, b) {fe ? M("API", "Error: can't add custom tags after Optimizely loads") : (ge = ge || {}, 2 == arguments.length ? ge[a] = b : 1 == arguments.length && $.extend(j, ge, a))}

    function Ce (a, b) {
      var c = Hb(a) || a, b = H(b) ? b : j, d = Ib()[c];
      d ? d.audience_id ? U.aa(d.audience_id) : d.dimension_id ? U.B(d.dimension_id, k) : De(c, b) : M("API", "Unable find segment for: " + c)
    }

    function Ee () {
      var a = L(Ib());
      w(a, function (a) {Ce(a, o)});
      Fe()
    }

    function Bd () {
      Ge = {};
      He = {};
      Ie = {};
      w(od(), function (a) {
        var b = P(a);
        Ge[b] = a.split("_");
        He[b] = Wb(a);
        Ie[b] = Xb(a)
      });
      W = {};
      var a = z("audiences");
      X(W, "audiences", a || i, "data.audiences");
      X(W, "customTags", ge, "data.customTags");
      X(W, "thirdParty", N.get(sd) || {}, "data.thirdParty");
      for (var b = {}, c = Eb(), a = 0; a < c.length; a++) {
        var d = c[a], e = {};
        e.code = O(d, "code") || "";
        e.name = Mb(d);
        e.conditional = Lb(d);
        e.manual = Kb(d);
        e.section_ids = Ob(d);
        e.variation_ids = Pb(d);
        b[d] = e
      }
      X(W, "experiments", b, "data.experiments");
      b = {};
      c = L(Ib());
      for (a = 0; a <
      c.length; a++)d = c[a], e = {name: cc(d, "name") || "Seg " + d}, b[d] = e;
      X(W, "segments", b, "data.segments");
      b = {};
      c = L(z("sections") || {});
      for (a = 0; a < c.length; a++)d = c[a], e = {}, e.name = z("sections", d, "name") || "Sec " + d, e.variation_ids = Tb(d), b[d] = e;
      X(W, "sections", b, "data.sections");
      b = {};
      c = L(z("variations") || {});
      for (a = 0; a < c.length; a++)d = c[a], e = {}, e.name = Xb(d), e.code = Ub(d), b[d] = e;
      X(W, "variations", b, "data.variations");
      var a = kc(), a = Zd[a] ? Zd[a][0] : a, b = lc(), c = mc().id, d = mc().type, e = oc(), f = sc(), g = rc(), l = oc().id, m = {};
      w(Qb(), function (a) {
        m[a] =
          Lc(a)
      });
      var b = {
        browser: a,
        browserVersion: b,
        device: c,
        deviceType: d,
        platform: e,
        mobile: f,
        mobileId: g,
        os: l,
        lists: m,
        location: Oc(),
        ip: Hc(),
        matchingRules: Qc(),
        referrer: String(document.referrer),
        segments: Je(),
        dimensions: U.t,
        audiences: U.p
      }, n;
      for (n in b)X(b, n, b[n], "data.visitor." + n);
      n = {};
      c = Ke();
      c.reverse();
      a = 0;
      for (d = c.length; a < d; a++)try {n[ja(c[a][0])] = ja(c[a][1])} catch (r) {M("API", "Failed to decode parameter " + c[a][0] + "=" + c[a][1])}
      X(b, "params", n, "data.visitor.params");
      W.visitor = b;
      n = {};
      X(n, "activeExperiments", nd ||
        [], "data.state.activeExperiments");
      a:{
        if (a = pd)if (b = P(a)) {
          a = {variationId: a, experimentId: b, referrer: Uc};
          break a
        }
        a = i
      }
      X(n, "redirectExperiment", a, "data.state.redirectExperiment");
      X(n, "variationIdsMap", Ge, "data.state.variationIdsMap");
      X(n, "variationMap", He, "data.state.variationMap");
      X(n, "variationNamesMap", Ie, "data.state.variationNamesMap");
      X(n, "enabled", B, "data.state.enabled");
      n.integrations = {};
      X(n.integrations, "activeOAuthClientIds", xe, "data.state.integrations.activeOAuthClientIds");
      W.state = n;
      n = {
        activeExperiments: nd,
        allExperiments: Jb(),
        all_experiments: Jb(),
        variationIdsMap: Ge,
        variationMap: He,
        variationNamesMap: Ie,
        variation_map: He
      };
      window.optimizely.data = W;
      w(n, function (a, b) {X(window.optimizely, a, b)})
    }

    function X (a, b, c, d) {
      try {
        var e = "o.", e = d ? e + d : e + b;
        Object.defineProperty(a, b, {
          configurable: j, enumerable: j, get: function () {
            Ae.S[e] = j;
            return c
          }, set: function (a) {c = a}
        })
      } catch (f) {a[b] = c}
    }

    function Le (a) {
      if (!bb(a))return o;
      Fa = Number(a)
    }

    function Me () {La = j}

    function ke (a) {
      var b = "";
      "number" !== typeof a ? (b = "must be a number.", a = 31536E4): a= Math.floor(86400 * a);
      7776E3 > a && (b = "less then minimum.", a = 7776E3);
      M("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
      Ua = a
    }

    function Ne () {Sa = j}

    function Oe () {v("optimizelyReportableFix") ? M("API", "skipping because cookie is set") : (w(z("audiences"), function (a) {vb(a) && (M("API", "Removing from reportable audience: " + a), U.aa(a))}), y("optimizelyReportableFix", "1", 7776E3))}

    function Pe (a) {
      var b = Wa();
      !a && 0 !== a ? (M("API", "Clearing PPID"), ya("optimizelyPPID", za())) : "string" === typeof a || "number" === typeof a ? (M("API", "Setting PPID to " + a), a = String(a), y("optimizelyPPID", a, Ua)) : M("API", "Ignoring non-string, non-number PPID: " + a);
      Wa() !== b && (M("API", "Clearing plan because of PPID change"), M("Plan", "Resetting visitor buckets"), Qe = {}, pe = {}, qe = {}, V = [], Id())
    }

    var Se = {
      event: function (a) {Re(a.eventName, a.tags)}, user: function (a) {
        a.userId && Pe(a.userId);
        a.attributes && w(a.attributes, function (a, c) {U.B(a, c)})
      }, integration: function (a) {a.OAuthClientId && ye(a.OAuthClientId)}
    }, W = {}, Te = {}, Ge = {}, He = {}, Ie = {}, U = k;

    function Re (a, b) {
      var c;
      a:{
        c = {};
        var d, e = z("custom_revenue_goals");
        e && (a in e && bb(e[a])) && (d = Number(e[a]));
        if (b)if (bb(b)) d = Number(b); else if ("object" === typeof b) {
          if (c = J({}, b), "revenue" in c)if (bb(c.revenue)) d = Number(c.revenue), delete c.revenue; else {
            x("tracker", "Revenue field %s not a number.", c.revenue);
            c = k;
            break a
          }
        } else {
          x("tracker", "Revenue argument %s not a number.", b);
          c = k;
          break a
        }
        H(d) && (c.Q = d)
      }
      if (c === k) x("tracker", "Bad options. Will not track this event."); else {
        d = Cb();
        var f = {};
        w(d, function (a) {
          f[a] =
            j
        });
        $.extend(c, {T: f});
        Jd(a, "custom", c)
      }
    }

    function Jd (a, b, c) {
      c = c || {};
      qa && (Ue.push({
        name: a,
        type: b,
        ea: +new Date / 1E3,
        options: c
      }), Ve ? (We(), M("Tracker", "Tracking event '" + a + "'")) : M("Tracker", "Queued tracking event '" + a + "'"))
    }

    function Xe () {
      Ye();
      $("html").bind("mousedown", Ze);
      $("html").bind("touchstart", $e)
    }

    function Ye () {
      $("html").unbind("touchstart", $e);
      $("html").unbind("mousedown touchend", Ze);
      $("html").unbind("touchmove", Xe)
    }

    function $e () {
      $("html").bind("touchend", Ze);
      $("html").bind("touchmove", Xe)
    }

    function af () {
      var a = WB_wombat_self_location.href, b = z("pageview_revenue_goals");
      b && 0 < L(b) ? w(L(b), function (c) {Jd(a, "pageview", {Q: c, T: b[c]})}) : Jd(a, "pageview")
    }

    function bf () {
      var a = v("optimizelyPendingLogEvents") || "[]", b = [];
      try {b = ea(a)} catch (c) {}
      if (F(b))for (var a = 0, d = b.length; a < d; a++) {
        var e = b[a];
        if ("string" !== typeof e) {
          b = [];
          break
        } else try {
          ea(e);
          b = [];
          break
        } catch (f) {}
      } else b = [];
      return b
    }

    function cf (a) {
      a = I(a.split("&"), function (a) {return a.split("=")});
      a.sort(function (a, c) {return a[0] < c[0] ? -1 : a[0] > c[0] ? 1 : 0});
      return I(a, function (a) {return a.join("=")}).join("&")
    }

    function bd (a, b) {
      if (df && -1 !== a.indexOf(ef))try {
        var c = new XMLHttpRequest;
        if ("withCredentials" in c) {
          c.onload = b;
          c.open("GET", a, j);
          c.withCredentials = j;
          c.send();
          return
        }
        df = o;
        M("Tracker", "Found that XHR with credentials is not supported in this browser.")
      } catch (d) {M("Tracker", "XHR not supported"), df = o}
      var c = a, e = new Image;
      e.onload = b;
      c = c.replace("&" + ef, "");
      e.src = c;
      ff.push(e)
    }

    function je (a, b) {
      a = !H(a) || "true" === String(a);
      H(b) || (b = window.alert);
      var c = a ? "true" : "false";
      a ? (y("optimizelyOptOut", c, Ua), y("optimizelyBuckets", c, Ua), b("You have successfully opted out of Optimizely for this domain.")) : (y("optimizelyOptOut", c, Ua), b("You are NOT opted out of Optimizely for this domain."))
    }

    function hf () {return "true" === v("optimizelyOptOut")}

    function Ze () {
      Ye();
      Jd("engagement", "engagement")
    }

    var Ue = [], Ve = o;

    function We () {
      var a = ["a=" + Rb(), "d=" + tb(), "y=" + !!z("ip_anonymization"), "src=js"];
      Ra && a.push("override=true");
      w(od(), function (b) {
        var c = P(b);
        a.push("x" + c + "=" + b)
      });
      w(Je(), function (b, c) {
        c = encodeURIComponent(ja(c));
        a.push("s" + b + "=" + c)
      });
      a.push("tsent=" + +new Date / 1E3);
      var b = [], c = Va(), d = Wa();
      w(Ue, function (a) {
        var e = [], f = [];
        a.name && (e.push("n=" + encodeURIComponent(a.name)), f = f.concat(Gb(a.name)));
        if (a.type && "pageview" === a.type) {
          var f = f.concat(nd.concat(S)), g = pd;
          g && (g = P(g), f.push(g))
        }
        a.options.anonymous !== j &&
        (e.push("u=" + c), d && e.push("p=" + encodeURIComponent(d)));
        df && e.push(ef);
        a.ea && e.push("time=" + a.ea);
        La && e.push("dtpc=" + La);
        var l = !!a.options && !!a.options.Q && a.options.T || {}, g = L(l), ze = K(Cb(), function (a) {return !l[a]}), f = [{
          U: g,
          sa: f.concat([z("summary_revenue_goal_id") || k]),
          ga: ["v=" + encodeURIComponent(a.options.Q)]
        }, {U: ze, sa: f, ga: []}];
        w(f, function (a) {(a.U.length || Ga) && b.push(e.concat(a.ga).concat(["f=" + a.U.join(","), "g=" + a.sa.join(",")]).join("&"))});
        if ("custom" === a.type)try {
          var m = a.name, n = Va(), q = N.get("customEvents") ||
            {}, r = q[n] || (q[n] = []), r = F(r) ? r : [];
          -1 !== $.inArray(m, r) && r.splice($.inArray(m, r), 1);
          r.push(m);
          100 < r.length && r.shift();
          q[n] = r;
          N.set("customEvents", q);
          ya("optimizelyCustomEvents", za())
        } catch (gf) {}
      });
      var e = b.concat(bf());
      jf(e);
      var f = a.join("&"), e = kf ? b : e;
      kf = j;
      for (var g = 0, l = e.length; g < l; g++) {
        var m = e[g], n = f + "&" + m;
        M("Tracker", "Making a log request.");
        var n = n + ("&cx2=" + gc(cf(n), 65259)), r = Rb(), q = z("log_host");
        r && (q = r.toString() + "." + q);
        bd("https://" + q + "/event?" + n, function () {
          for (var a = m, b = bf(), c = 0, d = b.length; c <
          d; c++)if (b[c] === a) {
            b.splice(c, 1);
            break
          }
          jf(b);
          M("Tracker", "Removed a pending log event from the pending events cookie.")
        })
      }
      Ue = [];
      Ve = j
    }

    function jf (a) {
      for (var b = u(a); 1536 < b.length;)a = a.slice(0, -1), b = u(a);
      y("optimizelyPendingLogEvents", b, 15)
    }

    var ff = [], kf = o, ef = "wxhr=true", df = j;
    var Y = {e: "n", b: "t", g: "y", l: "c", m: "r", o: "s", f: "o"};

    function lf (a, b, c, d, e) {
      this[Y.e] = a;
      this[Y.g] = b;
      "string" === typeof c && 0 < eb(c).length && (this[Y.l] = eb(c));
      d && 0 < L(d).length && (this[Y.f] = d);
      H(e) && (this[Y.m] = e)
    }

    lf.prototype.hash = function () {
      if (this.v)return this.v;
      var a;
      a = [];
      a.push(encodeURIComponent(Y.e) + "=" + encodeURIComponent(this[Y.e]));
      a.push(encodeURIComponent(Y.g) + "=" + encodeURIComponent(this[Y.g]));
      this[Y.l] && a.push(encodeURIComponent(Y.l) + "=" + encodeURIComponent(this[Y.l]));
      this[Y.m] && a.push(encodeURIComponent(Y.m) + "=" + encodeURIComponent(this[Y.m]));
      if (this[Y.f])for (var b = this[Y.f] || {}, c = K(L(b), function (a) {return b.hasOwnProperty(a)}), c = c.sort(), d = 0; d < c.length; d++)a.push(encodeURIComponent(c[d]) + "=" +
        encodeURIComponent(b[c[d]]));
      a = a.join("&");
      var e = String.fromCharCode;
      a = a.replace(/[\S\s]/gi, function (a) {
        var a = a.charCodeAt(0), b = e(a & 255);
        255 < a && (b = e(a >>> 8 & 255) + b);
        65535 < a && (b = e(a >>> 16) + b);
        return b
      });
      return this.v = gc(a, 2716770798)
    };
    function mf (a, b) {
      if (a.hash() !== b.hash() || a[Y.e] !== b[Y.e] || a[Y.g] !== b[Y.g] || a[Y.l] !== b[Y.l] || a[Y.m] !== b[Y.m])return o;
      if (!a[Y.f] && !b[Y.f])return j;
      var c = a[Y.f] || {}, d = b[Y.f] || {}, e = K(L(c), function (a) {return c.hasOwnProperty(a)}), f = K(L(d), function (a) {return d.hasOwnProperty(a)});
      if (e.length !== f.length)return o;
      for (f = 0; f < e.length; f++) {
        var g = e[f];
        if (!d.hasOwnProperty(g) || c[g] !== d[g])return o
      }
      return j
    }

    lf.prototype.k = function (a, b) {
      var c = $a(this, a);
      return H(c) ? c : b
    };
    lf.prototype.R = function (a, b) {if (a === Y.e || a === Y.g || a === Y.l || a === Y.m || a === Y.f) this[a] = b, this.v = k, this.hash()};
    function nf (a, b, c) {
      this.G = a;
      this[Y.b] = b;
      H(c) && (this[Y.o] = c)
    }

    nf.prototype.k = function (a, b) {
      if (0 === a.length)return this;
      var c = {};
      c[Y.b] = this[Y.b];
      c[Y.o] = this[Y.o];
      c = $a(c, a);
      return H(c) ? c : this.G.k(a, b)
    };
    nf.prototype.R = function (a, b) {a === Y.b || a === Y.o ? this[a] = b : this.G.R(a, b)};
    var of = {}, pf = [];

    function qf (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c], e = rf(d);
        b[c] = new nf(e, d[Y.b])
      }
      return b
    }

    function rf (a, b) {
      var c = new lf(a[Y.e], a[Y.g], a[Y.l], a[Y.f], a[Y.m]);
      H(b) && (c.v = b);
      return c
    }

    function sf (a) {
      for (var b = [], c = 0; c < a.length; c++)for (var d = a[c], e = rf(d.eb, d.h), f = d.tb, d = d.ts, g = 0; g < d.length; g++) {
        var l = d[g];
        b[l.i] = new nf(e, f + l.d)
      }
      return b
    };
    function tf () {
      try {
        var a;
        if (z("is_behavior_enabled")) {
          if (0 === pf.length && z("is_behavior_enabled")) {
            var b = pc("events") || [], c = pc("event_queue") || [];
            if (0 === b.length && 0 === c.length) pf = []; else {
              "eb" in (b[0] || c[0]) ? (b = sf(b), c = sf(c)) : (b = qf(b), c = qf(c));
              pf = b.concat(c);
              1E3 < pf.length && (pf = pf.slice(-1E3));
              c = pf;
              for (b = 0; b < c.length; b++) {
                var d = c[b], e;
                b:{
                  var f = c[b].G, g = f.hash(), l = of[g];
                  if ("undefined" === typeof l) of[g] = [f]; else {
                    for (var m = 0; m < l.length; m++)if (mf(f, l[m])) {
                      e = l[m];
                      break b
                    }
                    l.push(f)
                  }
                  e = f
                }
                d.G = e
              }
            }
            var d = pf, n = d.length;
            if (0 !== n) {
              d[0].R(Y.o, d[0].k([Y.b]));
              for (e = 1; e < n; e++) {
                var r = d[e - 1], q = d[e];
                q.R(Y.o, 18E5 > Math.abs(r.k([Y.b], 0) - q.k([Y.b], 0)) ? r.k([Y.o]) : q.k([Y.b]))
              }
            }
          }
          a = pf.slice(-1E3)
        } else a = [];
        return a
      } catch (G) {x("Behavior", "Error " + G.toString() + " getting events")}
      return []
    };
    function uf () {return (new Date).getTime() - (vf || 0)}

    var vf = uf();

    function wf (a, b, c) {
      for (var a = a.slice(), d = a.length - 1; 0 < d; d--) {
        var e = Math.floor(Math.random() * (d + 1)), f = a[d];
        a[d] = a[e];
        a[e] = f
      }
      for (d = a.join(b); d.length > c;)a.pop(), d = a.join(b);
      return d
    }

    function T (a) {
      var b = Ae;
      b.n[a] || (b.n[a] = uf())
    }

    var xf;
    try {xf = !document.getElementsByTagName("body")[0]} catch (yf) {xf = k}
    var zf = k;
    try {window.requestAnimationFrame(function () {zf = uf()})} catch (Af) {}
    var Bf = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi, Ae = new function () {
      this.n = {};
      this.S = {};
      this.Za = Math.random() < dc();
      geolocation.cdn3Requested && (this.n.geoRequest = geolocation.cdn3Requested - vf)
    };

    function Gd (a, b) {
      var b = b === j, c, d = k;
      w(V, function (b) {a == b.H && (d = b.id)});
      if ((c = d) && 0 < c.length)return M("Distributor", "Not distributing experiment " + a + " (already in plan)"), j;
      if (b || a in pe)return M("Distributor", "Not distributing experiment " + a + " (is ignored)"), o;
      c = O(a, "enabled_variation_ids") || [];
      if (0 === c.length)return M("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), Cf(a), o;
      var e = O(a, "ignore") || 0, f = Df();
      if (e > Math.floor(1E4 * ((ec(f + a, 0) >>> 0) / fc)))return M("Distributor",
        "Permanently ignoring experiment " + a + "(" + e / 100 + "% likelihood)"), Cf(a), o;
      e = c;
      se[a] !== i && (M("Distributor", "Taking into account bucketUser variations for experiment " + a), e = te(a));
      var f = e, g = [], l = O(a, "variation_weights") || {};
      w(f, function (a) {g.push(l[a])});
      f = Ef(a, g);
      e = e[f];
      M("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
      ue(e, "distributor");
      return j
    }

    function Ff (a, b) {
      b = b || {};
      M("Distributor", "Configuring conditionally-activated experiment: " + a);
      Te[a] ? M("Distributor", "Not configuring conditionally-activated experiment (already done): " + a) : !Fb(a) && b.force !== j ? M("Distributor", "Not configuring conditionally-activated experiment (not enabled): " + a) : (Gf(a, b), fe && Bd())
    }

    function Gf (a, b) {
      function c () {
        td(U, a, b);
        m.isActive = E(nd.concat(S), a);
        M("Distributor", "Activating conditionally activated experiment " + a)
      }

      var d = O(a, "conditional_code"), e = j, f, g;
      if ("function" === typeof d) e = o, f = d; else try {g = eval("(function() {return " + ("(" + d + ")") + ";})()"), "function" === typeof g && (e = o, f = g)} catch (l) {}
      var m = {isActive: o, experimentId: a};
      if (e) {
        if (e = {objectType: "experiment", enabledStatus: b.enabledStatus}, b.force || !Cd(a) || Dd(a, e)) {
          var n = function () {Cd(a) && (Hf(0, {value: d}) || g) ? c() : setTimeout(n, 50)};
          n();
          M("Distributor", "Set up conditional polling for " + a);
          Te[a] = j
        }
      } else try {f(c, m), M("Distributor", "Set up conditional callback for " + a), Te[a] = j} catch (r) {M("Distributor", "Error running conditional callback function for " + a)}
    }

    function Df () {return Wa() || Va()}

    function Ef (a, b) {
      var c = b.length;
      if (0 === c)return k;
      if (1 === c)return 0;
      for (var d = 0, e = 0; e < c; e++)d += b[e];
      e = Df();
      d *= (ec(e + a, 1) >>> 0) / fc;
      for (e = 0; e < c; e++) {
        if (d < b[e])return e;
        d -= b[e]
      }
      d = Df();
      return Math.floor((ec(d + a, 2) >>> 0) / fc * c)
    }

    function te (a) {
      var b = [];
      w(O(a, "enabled_variation_ids") || [], function (c) {
        var d = j, e;
        for (e in se[a])-1 === c.indexOf(se[a][e]) && (d = o);
        d && b.push(c)
      });
      return b
    }

    var se = {};

    function If () {
      for (var a = z("dcp_keyfield_locators") || [], b = k, c = [], d = 0; d < a.length; d++) {
        var e = a[d], f = e.dcp_datasource_id || k, g = e.is_optimizely || o, l = e.type, e = e.name || "";
        if (f === k) M("DCP", "No DCP datasource id specified"); else {
          var m = k;
          l === Jf ? m = Z.I(e) : l === Kf ? m = Z.la(e) : l === Lf ? m = Z.j(e) : l === Mf && (m = Nf());
          if (bb(m) || "string" === typeof m) f = {datasourceId: f, id: m}, g ? b = f : c.push(f)
        }
      }
      return {q: b, z: c}
    }

    var Nf = Df;

    function Of () {
      var a = If(), b = Pc.get() || {};
      if (Pf(a.z, b.aliases || {}))return o;
      b.rulesResults = k;
      Pc.set(b);
      return j
    }

    function Pf (a, b) {
      b = b || {};
      return Xa(a, function (a) {return b[a.datasourceId] === a.id})
    }

    var Jf = "cookie", Kf = "js_variable", Lf = "query_param", Mf = "uid";

    function Nc (a) {
      if (!Mc(a))return M("Async Request", "Can't determine a value for this list-targeted key: " + a), k;
      var b = a.split("_"), c = b[0], b = b.slice(1).join("_"), d = i;
      if ("c" === c) d = Z.I(b); else if ("j" === c) d = Z.la(b); else if ("q" === c) d = Z.j(b); else return M("Async Request", "Can't determine a value for this list-targeted key: " + a), k;
      if ("string" === typeof d || "number" === typeof d || "boolean" === typeof d) d = d.toString(); else return d === k || "undefined" === typeof d ? M("Async Request", "No value is set for this list-targeted key: " +
          a) : M("Async Request", "Unacceptable value (must be string, number, or boolean) for this list-targeted key: " + a), k;
      if (100 < d.length)return M("Async Request", "Withholding the overlong value for this list-targeted key: " + a), k;
      M("Async Request", "Returning a value for this list-targeted key: " + a);
      return d
    }

    function Mc (a) {return -1 !== a.indexOf("_") ? E(["c", "j", "q"], a.split("_")[0]) : o};
    function Qf (a) {
      if (0 === $("body").length) setTimeout(function () {Qf(a)}, 20); else {
        var b;
        b = '<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>";
        $("#optimizely-loading").remove();
        $("body").append(b)
      }
    }

    var Rf = z("preview_host");

    function Ke () {
      var a = WB_wombat_self_location.search || "";
      0 === a.indexOf("?") && (a = a.substring(1));
      for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
        var d = "", e = "", f = a[c].split("=");
        0 < f.length && (d = f[0]);
        1 < f.length && (e = f[1]);
        b.push([d, e])
      }
      return b
    }

    function Sf () {
      for (var a = WB_wombat_self_location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);)d[b[1]] = b[2];
      return d
    }

    var Tf = /x(\d+)/;

    function Uf (a) {return a && -1 !== String(a).indexOf("[native code]")};
    function Vf (a) {
      var b = a || Wf;
      M("Segmenter", "Loading segments cookie.");
      if (a = v("optimizelySegments")) {
        try {a = ea(a)} catch (c) {a = {}}
        w(a, function (a, c) {
          var d = Ib()[a];
          M("Segmenter", "Segments cookie contains segment id: " + a);
          d && d.audience_id ? b.D(d.audience_id) : d && d.dimension_id ? b.B(d.dimension_id, c, o) : Xf[a] = c
        })
      }
      zd(L(Ib()));
      Yf.push(Zf);
      Fe();
      M("Integrator", "Loading third-party segments.");
      if (window.bk_results) {
        a = window.bk_results;
        M("Integrator", "Loading BlueKai segments.");
        try {
          w(a.campaigns, function (a) {
            a = a.seg_id;
            Ib()[a] ? oe(a, j) : ub(a) && b.D(a)
          })
        } catch (d) {M("Integrator", "Error loading BlueKai segments.")}
      }
    }

    function Zf () {
      var a = {};
      w(Xf, function (b, c) {c && (a[b] = c)});
      y("optimizelySegments", u(a), Ua)
    }

    function oe (a, b) {a && !isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = j), Xf[a] = b, Fe()) : M("Segmenter", "Unable to find segment for ID: " + a)}

    function Fe () {w(Yf, function (a) {a()})}

    function Md (a) {
      M("Segmenter", "Evaluating Segment " + a);
      var b = $f(a);
      b !== k && oe(a, b)
    }

    function $f (a) {
      if (cc(a, "is_api_only"))return k;
      var b = k, c = k;
      switch (cc(a, "segment_value_type") || "") {
        case "browser":
          b = Z.ia();
          c = "unknown";
          break;
        case "campaign":
          b = Z.La();
          c = "none";
          break;
        case "country":
          b = Z.L().country;
          c = "unknown";
          break;
        case "language":
          b = Z.V();
          c = "none";
          break;
        case "mobile":
          b = Z.w();
          break;
        case "os":
          b = Z.pa().id;
          c = "unknown";
          break;
        case "referrer":
          b = Z.Sa();
          c = "none";
          break;
        case "source_type":
          b = Z.Ua();
          c = "direct";
          break;
        default:
          return "true"
      }
      if (b === k) {
        if (Xf.hasOwnProperty(a))return k;
        b = c
      }
      return ag(b)
    }

    function bg () {
      var a = Z.X();
      if (Z.j("utm_source") || Z.j("utm_campaign") || Z.j("gclid") || Z.j("otm_source"))return "campaign";
      for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www\\.)?google\\..*?/$", "http(s)?://www\\.bing\\.\\w{2,3}(\\.\\w{2,3})?/", "r\\.search\\.yahoo\\.\\w{2,3}(\\.\\w{2,3})?/", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/"], c = 0; c < b.length; c++) {
        var d = b[c];
        try {if (a.match(d))return "search"} catch (e) {x("Segmenter", "%s: %s while matching %s", e.name, e.message, d)}
      }
      return a && nc(a) !== nc(Z.J()) ?
        "referral" : k
    }

    function cg () {
      var a = [];
      w(Xf, function (b, c) {c && a.push(b)});
      return a
    }

    function Je () {
      var a = {};
      w(Xf, function (b, c) {c && (a[String(b)] = c)});
      return a
    }

    function dg (a) {return w(Xf, function (b, c) {if ((cc(b, "segment_value_type") || "") == a)return c})}

    function De (a, b) {
      var c = Hb(a) || a;
      Xf[c] ? (Xf[c] = o, ("undefined" === typeof b || b) && Fe()) : M("Segmenter", "Not removing " + a + ", not found")
    }

    function ag (a, b) {
      var c, b = H(b) ? b : j;
      c = c || eg;
      a = ja(a);
      a = String(a);
      b && (a = a.toLowerCase());
      a = a.substring(0, c);
      return encodeURIComponent(a)
    }

    var Yf = [], Xf = {}, eg = 20;

    function fg () {}

    J(fg.prototype, {
      ia: kc,
      Ja: lc,
      Ra: rc,
      w: sc,
      u: function () {return {id: this.ia(), version: this.Ja(), mobileId: this.Ra()}},
      La: function () {return this.j("utm_campaign")},
      I: v,
      K: mc,
      W: Hc,
      la: function (a) {try {return window[a]} catch (b) {return k}},
      Ia: tf,
      V: function () {
        var a = "";
        try {a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()} catch (b) {a = ""}
        return a
      },
      Na: function () {return (pc("visitor_profile") || {}).defaultBehavior || {}},
      L: Oc,
      J: function () {return wc || WB_wombat_self_location.href},
      na: tc,
      Qa: function () {
        return !uc ? j :
          !!ib.get("first_session")
      },
      Ha: Ke,
      pa: oc,
      X: function () {return v("optimizelyReferrer") || document.referrer || ""},
      Va: function (a) {
        var a = a.split("."), b = a[0];
        a:{
          for (var a = a.slice(1), b = (N.get(sd) || {})[b], c = 0, d = a.length; c < d; c++)if (ba(b) && b.hasOwnProperty(a[c])) b = b[a[c]]; else {
            a = i;
            break a
          }
          a = b
        }
        return a
      },
      Xa: function () {return Wa() !== k},
      Sa: function () {return nc(this.X())},
      qa: cg,
      Ua: bg,
      Oa: function () {return document.referrer},
      j: function (a) {
        a:{
          for (var b = this.Ha(), b = b || Ke(), c = 0; c < b.length; c++) {
            var d = b[c];
            if (d[0] === a) {
              a =
                d[1];
              a = a.replace(/\+/g, " ");
              a = ja(a);
              break a
            }
          }
          a = k
        }
        return a
      },
      Ma: function () {return ge},
      ja: function (a) {return (this.Ma() || {})[a]},
      Wa: function () {
        var a = (N.get("customEvents") || {})[Va()] || [];
        return F(a) ? a : []
      },
      Ya: function (a) {
        var b = this.qa();
        return E(b, a)
      },
      Aa: function (a) {return E(this.Wa(), a)},
      getDate: function () {return new Date},
      ma: Lc,
      ka: Qc
    });
    var Z = new fg;

    function gg (a, b, c) {
      if (a.k)return a.k(b, c);
      a = $a(a, b);
      "undefined" === typeof a && (a = c);
      return a
    }

    function hg (a) {return "string" === typeof a ? eb(a).toLowerCase() : a}

    var ig = ["*"], kg = {
      eq: function (a) {
        a = I(a, hg);
        return a[0] == a[1]
      },
      is: function (a) {return a[0] === a[1]},
      gt: function (a) {return a[0] > a[1]},
      lt: function (a) {return a[0] < a[1]},
      gte: function (a) {return a[0] >= a[1]},
      lte: function (a) {return a[0] <= a[1]},
      "in": function (a) {
        var b = I(a[1] || [], hg);
        return E(b, hg(a[0]))
      },
      between: function (a) {return a[1] <= a[0] && a[0] <= a[2]},
      contains: function (a) {
        a = I(a, function (a) {return "string" === typeof a ? a.toLowerCase() : a});
        return -1 !== (a[0] || "").indexOf(a[1])
      },
      regex: function (a) {
        try {
          var b, c;
          "string" === typeof a[1] ? (b = a[1], c = "i") : (b = a[1][0] || "", c = a[1][1] || "");
          return RegExp(b, c).test(a[0])
        } catch (d) {return x("Rules", 'In operator "regex", error: ' + (d.message || "invalid RegExp /" + [b, c].join("/"))), o}
      },
      exists: function (a) {return "undefined" !== typeof a[0]},
      and: function (a) {return Xa(a, aa())},
      or: function (a) {return D(a, aa())},
      not: function (a) {return !a[0]}
    }, lg = {
      "+": function (a) {return (a[0] || 0) + (a[1] || 0)},
      "-": function (a) {return (a[0] || 0) - (a[1] || 0)},
      "/": function (a) {return (a[0] || 0) / (a[1] || 1)},
      "%": function (a) {
        return (a[0] ||
          0) % (a[1] || 1)
      }
    }, mg = {
      sum: function (a, b) {
        for (var c = a[0] || ig, d = 0, e = 0; e < b.length; e++)d += gg(b[e], c, 0);
        return d
      },
      avg: function (a, b) {
        if (0 == b.length)return 0;
        for (var c = a[0] || ig, d = 0, e = 0; e < b.length; e++)d += gg(b[e], c, 0);
        return d / b.length
      },
      max: function (a, b) {
        for (var c = a[0] || ig, d = Number.NEGATIVE_INFINITY, e = 0; e < b.length; e++)d = Math.max(d, gg(b[e], c, Number.NEGATIVE_INFINITY));
        return d
      },
      min: function (a, b) {
        for (var c = a[0] || ig, d = Number.POSITIVE_INFINITY, e = 0; e < b.length; e++)d = Math.min(d, gg(b[e], c, Number.POSITIVE_INFINITY));
        return d
      },
      count: function (a, b) {return b.length}
    }, ng = {now: function () {return +new Date}};

    function og (a, b) {
      if (b.hasOwnProperty("value"))return b.value;
      if (b.hasOwnProperty("field"))return gg(a, b.field);
      if (b.hasOwnProperty("eval")) {
        if (!(b.eval in ng)) {
          x("Rules", "Unknown function: " + b.eval);
          return
        }
        return ng[b.eval]()
      }
      if (b.op) {
        var c = b.op in kg ? kg[b.op] : b.op in lg ? lg[b.op] : k;
        if (c) {
          var d = t(og, a), e = I(b.args || [], function (a) {return d(a)});
          return c(e, a)
        }
        x("Rules", "Unknown operator: " + b.op)
      } else x("Rules", "No operator specified: " + u(b))
    }

    function pg (a) {
      function b (a, e) {
        F(a) && ("and" !== a[0] && ("or" !== a[0] && "not" !== a[0]) && x("Rules", "Unexpected operation " + a[0] + ". Continuing optimistically."), a = {
          op: a[0],
          args: a.slice(1)
        });
        if (a.hasOwnProperty("field") || a.hasOwnProperty("value") || a.hasOwnProperty("eval"))return a;
        if (e && a.op in mg) {
          var f = "_" + a.op + "_" + ((a.args && a.args[0] || {}).field || ig).join(".");
          f in d || (c.push({op: a.op, args: a.args}), d[f] = j);
          return {field: [f]}
        }
        for (var f = [], g = a.args || [], q = 0; q < g.length; q++)f[q] = b(g[q], e);
        return {op: a.op, args: f}
      }

      var c = [], d = {}, e = {};
      a.hasOwnProperty("where") && (e.where = b(a.where, o));
      a.hasOwnProperty("having") && (e.having = b(a.having, j));
      if (a.hasOwnProperty("aggregate") || 0 < c.length) e.aggregate = (a.aggregate || []).concat(c);
      for (var f = ["groupBy", "orderBy", "select", "limit"], g = 0; g < f.length; g++)a.hasOwnProperty(f[g]) && (e[f[g]] = a[f[g]]);
      a.hasOwnProperty("from") && (e.from = pg(a.from));
      return e
    }

    function qg (a, b) {
      var b = b || 0, c = [];
      a.hasOwnProperty("where") ? a.where.op ? a.where.op in kg || c.push("Non-boolean WHERE clause operator") : c.push("Missing WHERE clause operator") : c.push("Missing WHERE clause");
      a.hasOwnProperty("having") && (a.having.op ? a.having.op in kg || c.push("Non-boolean HAVING clause operator") : c.push("Missing HAVING clause operator"));
      a.hasOwnProperty("groupBy") && !a.hasOwnProperty("aggregate") && c.push("No AGGREGATE clause specified with GROUP_BY clause");
      if (a.hasOwnProperty("select")) {
        var d =
          a.select;
        if (F(d))for (var e = 0; e < d.length; e++)d[e].op && d[e].op in mg && c.push('In SELECT clause, aggregate operator "' + d[e].op + '" specified in selector at index ' + e); else c.push("SELECT clause must be an array")
      }
      a.hasOwnProperty("limit") && (d = a.limit, (!bb(d) || 0 >= Number(d) || Number(d) != Math.floor(Number(d))) && c.push("LIMIT must be a positive integer"));
      0 < b && (c = I(c, function (a) {return "Sub-rule " + b + ": " + a}));
      a.hasOwnProperty("from") && (c = c.concat(qg(a.from, b + 1)));
      return c
    }

    function rg (a, b) {
      var c = b;
      a.hasOwnProperty("from") && (c = rg(a.from, c));
      c = K(c, function (b) {return og(b, a.where)});
      if (a.hasOwnProperty("aggregate")) {
        var d = a.groupBy;
        if ("undefined" === typeof d || !F(d) || 0 === d.length) {
          var d = {}, e = {};
          e[ig] = "_";
          d[ig + "=_"] = {ha: e, n: c};
          c = d
        } else {
          for (var d = I(d, function (a) {return a.field}), e = {}, f = 0; f < c.length; f++) {
            for (var g = c[f], l = [], m = {}, n = 0; n < d.length; n++) {
              var r = d[n], q = gg(g, r, "_"), r = r.join(".");
              m[r] = q;
              l.push(encodeURIComponent(r) + "=" + encodeURIComponent(String(q)))
            }
            l = l.join("&");
            e.hasOwnProperty(l) ||
            (e[l] = {ha: m, n: []});
            e[l].n.push(g)
          }
          c = e
        }
        var G = a.aggregate, A = {};
        w(c, function (a, b) {
          A[a] = {};
          for (var c = 0; c < G.length; c++) {
            var d = G[c], e = d.op;
            if (e in mg) {
              var f = (d.args && d.args[0] || {}).field || ig, d = "_" + e + "_" + f.join("."), e = mg[e]([f], b.n);
              A[a][d] = e
            } else x("Rules", "Unknown aggregate operator " + e)
          }
        });
        var C = [];
        w(c, function (a, b) {
          var c = J({}, b.ha);
          J(c, A[a] || {});
          C.push(c)
        });
        c = C
      }
      a.hasOwnProperty("having") && (c = K(c, function (b) {return og(b, a.having)}));
      if (a.hasOwnProperty("orderBy")) {
        var pa = a.orderBy;
        F(pa) ? c = 0 == pa.length ?
            c : c.sort(function (a, b) {
              for (var c = 0; c < pa.length; c++) {
                var d = pa[c], e = "ASC" === (d.direction || "ASC") ? 1 : -1, f = d.field, d = gg(a, f, 0), f = gg(b, f, 0);
                if (d < f)return -e;
                if (d > f)return e
              }
              return 0
            }) : x("Rules", "groupBy rule must be an array")
      }
      a.hasOwnProperty("limit") && (c = c.slice(0, Number(a.limit)));
      if (a.hasOwnProperty("select"))var Ta = a.select, c = I(c, function (a) {return I(Ta, function (b) {return og(a, b)})});
      return c
    }

    function sg (a, b) {
      try {
        var c;
        c = pg(a);
        var d = qg(c);
        0 < d.length && h(Error("Rule " + u(c) + " has violations: " + d.join("\n")));
        return 0 < rg(c, b).length
      } catch (e) {return x("Rules", "Error " + e.toString() + " while evaluating rule " + u(a)), o}
    };
    function tg () {
      this.p = {};
      this.t = {};
      this.A = {};
      this.ya = {}
    }

    tg.prototype.ab = function (a) {
      var b = this.A.hasOwnProperty(a) || this.ya.hasOwnProperty(a);
      if (!this.p.hasOwnProperty(a) || !b)try {
        var c = this.p, d = ub(a);
        d || h(Error("Unable to find audience for id: " + a));
        var e = ug(this, d.conditions);
        M("Visitor", "Checking if in audience " + a + ": " + e);
        c[a] = e
      } catch (f) {M("Visitor", "Error: " + f.message)}
      return this.p[a]
    };
    function vg (a, b, c, d) {
      d = J({O: j, xa: j, C: j}, d);
      if (ub(b)) {
        a.p[b] = c;
        var e = vb(b);
        e ? a.ya[b] = c : d.O ? a.A[b] = c : delete a.A[b];
        e && d.C && a.C(e, c);
        if (!e && d.O && d.xa) {
          var f = [];
          w(a.A, p(function (a) {this.p[a] && f.push(a)}, a));
          f.sort();
          y("optimizelyAudiences", f.join(","), 31536E4)
        }
      } else M("Visitor", "Unable to find audience " + b)
    }

    tg.prototype.D = function (a) {vg(this, a, j)};
    tg.prototype.aa = function (a) {vg(this, a, o)};
    tg.prototype.fb = function () {w(this.p, p(function (a) {vg(this, a, o, {O: !!this.A.hasOwnProperty(a)})}, this))};
    function wg (a, b, c, d) {
      d = !H(d) || d;
      H(c) && c !== k && String(c) ? (d && (c = ag(String(c), o)), a.t[b] = c) : delete a.t[b];
      return a.t[b]
    }

    tg.prototype.B = function (a, b, c) {
      var d;
      a:{
        for (d in z("dimensions") || {}) {
          var e = a, f = yb(d, "api_name");
          if (e === (!f ? k : f))break a
        }
        d = k
      }
      d = d || a;
      z("dimensions", d) ? "custom_dimension" === zb(d) ? (b = wg(this, d, b, c), a = yb(d, "segment_id"), (a = !a ? k : a) && this.C(a, b), M("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : M("Visitor", 'Unknown dimension "' + d + '"') : M("Visitor", "Unable to find dimension " + a)
    };
    tg.prototype.C = function (a, b) {b ? oe(a, b) : De(a)};
    var Wf = new tg;

    function xg (a, b) {
      cb(b) && (b = [b]);
      b = b || ig;
      return ["_" + a + "_" + b.join(".")]
    }

    function yg (a) {
      cb(a) && (a = [a]);
      a = a || ig;
      return [a.join(".")]
    }

    var zg = {"<": "lt", "<=": "lte", ">": "gt", ">=": "gte", "=": "eq", "==": "eq"};

    function Ag (a) {
      a = eb((a || "").toString());
      return zg[a] || a
    }

    function Bg (a, b, c) {
      cb(b) && (b = [b]);
      return {op: Ag(a), args: [{field: b}, {value: c}]}
    }

    function Cg (a) {
      for (var b = [], c = 0; c < a.length; c++)b[c] = {field: a[c]};
      return b
    }

    function Dg (a, b) {
      cb(b) && (b = [b]);
      b = b || ig;
      return {op: a, args: [{field: b}]}
    }

    var Eg = {};
    w(Y, function (a, b) {Eg[b] = j});
    function Fg (a, b) {
      var c = [];
      cb(a) ? (c = [a], "events" === (b || "events") && !(a in Eg) && (c = [Y.f, a])) : c = a;
      return c
    };
    function Gg (a) {
      var b = a.split(":");
      2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
      return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
    };
    function Dd (a, b) {
      var c = !!b.manualActivation, d = b.objectType ? b.objectType : "experiment", e = "experiment" === d, f = b.enabledStatus, g = b.visitor || Wf;
      M("Condition", "Testing " + d + " " + a);
      var f = e && (H(f) ? !!f : Fb(a)), l = e && Kb(a), m;
      a:switch (d) {
        case "experiment":
          m = O(a, "conditions");
          break a;
        case "segment":
          m = cc(a, "add_condition");
          break a;
        default:
          m = []
      }
      if (e && !f)return M("Condition", "Failed for " + d + " " + a + " (paused)"), o;
      if (e && !c && l)return M("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), o;
      if (m) {
        var n = "experiment" ===
          (d || "experiment"), r = j;
        w(m, function (b) {
          var c = b.type;
          if (n && b.only_first_time && Hg(a)) M("Condition", c + " condition passed because it only gets checked when bucketing", j); else {
            var d = !b.not, b = (0, Ig[c])(b), e = b !== d;
            M("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
            if (e)return r = o
          }
        });
        if (!r)return M("Condition", "Failed for " + d + " " + a + " (condition failed)"), o
      } else {
        a:{
          c = [];
          e = [];
          if ("experiment" === d) c = O(a, "audiences") || [], e =
            O(a, "urls") || []; else if ("segment" === d) (f = cc(a, "audience_id")) && (c = [f]); else {
            M("Condition", "Not a valid objectType: " + d);
            d = o;
            break a
          }
          if (0 < c.length && (M("Condition", "Testing audiences for " + d + " " + a + ": " + c), !D(c, p(g.ab, g)))) {
            M("Condition", "Failed to match any audiences for " + d + " " + a);
            d = o;
            break a
          }
          if (0 < e.length) {
            M("Condition", "Testing URLs for " + d + " " + a);
            var g = e, q = Z.J(), G = [], A = [];
            w(g, function (a) {a.negate ? A.push(a) : G.push(a)});
            g = function (a) {return D(a, function (a) {return Jg(q, a)})};
            if (g(A) || !(0 === G.length ||
              g(G))) {
              M("Condition", "Failed to match any URL for " + d + " " + a);
              d = o;
              break a
            }
          }
          d = j
        }
        if (!d)return o
      }
      return j
    }

    function Kg (a, b) {
      if (!b)return 0;
      for (var c = b.toString().split("."), d = a.toString().split("."), e = 0; e < c.length; e++)if (H(d[e]))if (isNaN(Number(d[e]))) {if (d[e] !== c[e])return -1} else {
        if (Number(d[e]) < Number(c[e]))return -1;
        if (Number(d[e]) > Number(c[e]))return 1
      } else return -1;
      return 0
    }

    function Lg (a, b) {
      var c = b.value, d = a.id, e = a.version, f = a.mobileId;
      return f && "unknown" !== f ? (M("Condition", f, j), "mobile" === c || c === f) : 0 === c.indexOf(d) ? 0 === Kg(e, c.substr(d.length)) : o
    }

    function Hf (a, b) {
      var c = b.value;
      if (c === i)return j;
      try {return Boolean(Mg(c))} catch (d) {return o}
    }

    function Ng (a, b) {return Og(b.value, b.match, a)}

    function Pg (a, b) {return Og(b.value, b.match, a)}

    function Qg (a, b) {
      if (a === k)return o;
      var c = b.value;
      switch (b.match) {
        case "exact":
          if (a == c && "" != a)return j;
          break;
        case "prefix":
          if (0 == a.indexOf(c))return j;
          break;
        case "regex":
          try {var d = RegExp(c)} catch (e) {break}
          if (d.test(a))return j;
          break;
        case "cidr":
          try {
            var f;
            a:{
              var g = new Rg(c), l = Sg(a);
              l === k && h(Error("Invalid ip: " + a));
              for (c = 0; 4 > c; c++)if ((l[c] & g.Y[c]) !== g.Z[c]) {
                f = o;
                break a
              }
              f = j
            }
            return f
          } catch (m) {}
      }
      return o
    }

    function Tg (a, b) {
      var c = b.value;
      return "any" === c || 0 === a.indexOf(c)
    }

    function Ug (a, b) {
      if (a === k)return o;
      var c = b.value.split("|"), d = $.trim(c[0]), e = $.trim(c[1]), f = $.trim(c[2]), g = $.trim(c[3]);
      switch (c.length) {
        case 1:
          if (a.country === d)return j;
          break;
        case 2:
          if (a.region === e && a.country === d)return j;
          break;
        case 3:
          if (a.city === f && (a.region === e || "" === e) && a.country === d)return j;
          break;
        case 4:
          if (a.continent === g)return j
      }
      return o
    }

    function Vg (a, b) {return Og(b.value, b.match, a)}

    function Wg (a, b) {
      var c = b.value, d = b.match;
      M("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", j);
      return Xg(a, c, d)
    }

    function Yg (a) {return !!a}

    function Zg (a) {
      var b = Z.J();
      return D(a.values, t(Jg, b))
    }

    function Jg (a, b) {
      var c = b.value, d = b.match;
      M("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", j);
      return Xg(a, c, d)
    }

    function $g (a, b) {
      switch (b.value) {
        case "new":
          if ("returning" === a)return o;
          break;
        case "returning":
          return "returning" === a
      }
      return j
    }

    function ug (a, b) {
      var c = {
        and: function (b) {return Xa(b, t(ug, a))},
        or: function (b) {return D(b, t(ug, a))},
        not: function (b) {
          1 !== b.length && h(Error('"not" argument too long: ' + u(b)));
          return !ug(a, b[0])
        }
      };
      if (F(b)) {
        if (b[0] in c)return c[b[0]](b.slice(1));
        h(Error("Not an operator"))
      }
      var c = b.dimension_id, d = zb(c), e = b.value;
      d || h(Error("No dimension type for dimension: " + c));
      var f = ah[d];
      f || h(Error("Unknown dimension type: " + d));
      d = i;
      if (a.t.hasOwnProperty(c)) d = a.t[c]; else try {
        var g = zb(c) || "", l, m;
        z("dimensions", c) || h(Error("Unable to find dimension for id: " +
          c));
        "custom_dimension" === g && h(Error("calculateDimensionValue called on custom dimension " + c));
        (l = {
          browser: p(Z.u, Z),
          browser_version: p(Z.u, Z),
          behavior: p(Z.Ia, Z),
          campaign: t(dg, "campaign"),
          cookies: p(Z.I, Z),
          custom_tag: p(Z.ja, Z),
          default_behavior: p(Z.Na, Z),
          device: p(Z.K, Z),
          event: p(Z.Aa, Z),
          first_session: p(Z.Qa, Z),
          has_ppid: p(Z.Xa, Z),
          ip: p(Z.W, Z),
          language: p(Z.V, Z),
          list: p(Z.ma, Z),
          location: p(Z.L, Z),
          query: p(Z.j, Z),
          platform: p(Z.pa, Z),
          referrer: p(Z.X, Z),
          segment: p(Z.Ya, Z),
          source_type: t(dg, "source_type"),
          third_party_dimension: p(Z.Va,
            Z),
          time_and_day: p(Z.getDate, Z),
          url: p(Z.J, Z),
          visitor: p(Z.na, Z),
          dynamic_customer_profile: p(Z.ka, Z)
        }[g]) && (m = l(Ab(c)));
        M("Visitor", "Got dimension (" + g + ") value " + c + ": " + u(m));
        d = m
      } catch (n) {M("Visitor", "Error: " + n.message)}
      return f(d, {value: e, match: b.match || "exact"})
    }

    function Cd (a) {
      var b = j;
      !O(a, "conditions") && !cc(a, "add_condition") ? (b = [cc(a, "audience_id")], b[0] || (b = O(a, "audiences") || []), b = Xa(b, function (a) {
          a = ub(a);
          return !a.conditions ? j : bh(a.conditions)
        })) : (O(a, "uses_geotargeting") || cc(a, "uses_geotargeting")) && (b = ch.ip(k) || ch.location(k));
      b || M("Condition", "Not ready to test (geotargeting): " + a);
      return b
    }

    function bh (a) {
      if (F(a))return Xa(a.slice(1), bh);
      var b = zb(a.dimension_id) || "";
      return (b = ch[b]) ? b(a) : j
    }

    var Ig = {
      browser: function (a) {
        var b = Z.u();
        return D(a.values, function (a) {return Lg(b, {value: a})})
      },
      code: function (a) {return Hf(0, a)},
      cookies: function (a) {
        for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)if (c = b[d], Ng(Z.I(c), {value: a[d] || i}))return j;
        return o
      },
      custom_tag: function (a) {return D(a.values, function (a) {return Pg(Z.ja(a.key), {value: a.value})})},
      event: function (a) {return D(a.values, function (a) {return Z.Aa(a)})},
      ip: function (a) {
        var b = Z.W();
        return D(a.values, t(Qg, b))
      },
      language: function (a) {
        var b =
          Z.V();
        return D(a.values, function (a) {return Tg(b, {value: a})})
      },
      location: function (a) {
        var b = Z.L();
        return D(a.values, function (a) {return Ug(b, {value: a})})
      },
      query: function (a) {return 0 === a.values.length ? j : D(a.values, function (a) {return Vg(Z.j(a.key), {value: a.value})})},
      referrer: function (a) {return D(a.values, t(Wg, Z.Oa()))},
      segment: function (a) {
        var b = Z.qa();
        return D(a.values, function (a) {return Yg(ra(a, b))})
      },
      url: Zg,
      visitor: function (a) {
        var b = Z.na();
        return $g(b, a)
      }
    }, ah = {
      browser: Lg,
      browser_version: function (a, b) {
        var c =
          b.value, d = a.id, e = a.version;
        return 0 === c.indexOf(d) ? 0 === Kg(e, c.substr(d.length)) : o
      },
      behavior: function (a, b) {
        try {
          var c = ea(b.value), d;
          if (H(c.version)) {
            !c.action && (!c.filters || 0 === c.filters.length) && h(Error('Audience spec must have an "action" field or at least one "filter" ' + u(c)));
            var e = Bg("gt", Y.b, 0), f = [], g = [];
            c.action && (g.push(Bg("eq", Y.e, c.action.value)), c.action.type && g.push(Bg("eq", Y.g, c.action.type)));
            if (c.time)if ("last_days" === c.time.type) g.push({
              op: Ag("lte"), args: [{
                op: "-", args: [{eval: "now"},
                  {field: [Y.b]}]
              }, {value: 864E5 * c.time.days}]
            }); else if ("range" === c.time.type) {
              var l;
              var m = [c.time.start, c.time.stop];
              F(m) ? l = {
                  op: "between",
                  args: [{field: [Y.b]}, {value: m[0] || +new Date(0)}, {value: m[1] || +new Date}]
                } : (M("Rule builder", "rangeTimeComparison passed invalid range " + u(m)), l = k);
              l && g.push(l)
            } else M("Rule builder", 'Audience spec has bad "time" type', c.time.type);
            e = {op: "and", args: g};
            c.count && f.push({
              where: Bg(c.count.comparator, "0", c.count.value),
              from: {select: [{field: xg("count")}], where: e, aggregate: [Dg("count")]}
            });
            c.filters && w(c.filters, function (a) {
              var b = Fg(a.name, c.source), d, l;
              if (a.modifier === "most_frequent") {
                d = Dg("count");
                l = xg("count")
              } else if (a.modifier === "most_recent") {
                d = Dg("max", Y.b);
                l = xg("max", Y.b)
              }
              if (d) {
                var m = yg(b);
                f.push({
                  where: Bg(a.comparator, "0", a.value),
                  from: {
                    select: [{field: m}],
                    where: e,
                    groupBy: Cg([b]),
                    aggregate: [d],
                    orderBy: [{field: l, direction: "DESC"}],
                    limit: 1
                  }
                })
              } else g.push(Bg(a.comparator, b, a.value))
            });
            if (c.pick) {
              0 < f.length && h(Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers' +
                u(c)));
              var n;
              var r = c.pick, q = c.source;
              l = {where: e};
              r.count && (l.limit = r.count);
              if ("most_frequent" === r.modifier) {
                var G = Fg(r.name, q);
                n = J(l, {
                  select: [{field: yg(G)}],
                  groupBy: Cg([G]),
                  aggregate: [Dg("count")],
                  orderBy: [{field: xg("count"), direction: "DESC"}]
                })
              } else n = J(l, {orderBy: [{field: [Y.b], direction: "DESC"}]});
              d = [n]
            } else d = 0 < f.length ? f : [{where: e}]
          } else d = [c];
          return Xa(d, function (b) {return sg(b, a)})
        } catch (A) {}
        return o
      },
      campaign: function (a, b) {
        var c = b.value;
        "string" === typeof c && ("regex" === b.match ? a = ja(a) : c = ag(c));
        "none" === a && (a = k);
        return Og(c, b.match, a)
      },
      code: Hf,
      cookies: Ng,
      custom_dimension: function (a, b) {
        var c = b.value;
        return !H(c) ? H(a) : c == a
      },
      custom_tag: Pg,
      default_behavior: function (a, b) {
        try {
          var a = a || {}, c = ea(b.value);
          return sg(c, [a])
        } catch (d) {}
        return o
      },
      device: function (a, b) {
        var c = b.value;
        return "unknown" !== a.id ? a.id === c : "tablet" === c ? "tablet" === a.type : "mobile" === c ? a.w && "tablet" !== a.type : "desktop" === c ? !a.w : o
      },
      event: aa(),
      first_session: aa(),
      ip: Qg,
      language: Tg,
      list: function (a, b) {
        if (a === k || !H(a))return o;
        var c = b.value;
        return !H(c) ? "" === a || a !== o : a.toString() === c
      },
      location: Ug,
      query: Vg,
      platform: function (a, b) {
        var c = b.value.split("_"), d = c[0], c = c.slice(1);
        return d === a.id ? 0 === c.length ? j : 1 < c.length ? 0 <= Kg(a.version, c[0]) && 0 >= Kg(a.version, c[1]) : 0 === Kg(a.version, c[0]) : o
      },
      referrer: Wg,
      segment: Yg,
      source_type: function (a, b) {return b.value === a},
      time_and_day: function (a, b) {
        var c, d, e;
        c = b.value;
        e = c.split("_");
        3 !== e.length && h(Error("Invalid time and day string " + c));
        c = e[0];
        d = e[1];
        e = e[2].split(",");
        c = Gg(c);
        d = Gg(d);
        var f = 60 * a.getHours() +
          a.getMinutes(), g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
        return f >= c && f <= d && -1 !== $.inArray(g, e)
      },
      third_party_dimension: function (a, b) {return F(a) ? D(a, t(Og, b.value, b.match)) : Og(b.value, b.match, a)},
      url: Jg,
      visitor: $g,
      dynamic_customer_profile: function (a, b) {return a === k ? o : !!a[b.value]},
      has_ppid: aa()
    }, ch = {
      ip: function () {
        T("checkGeo");
        return Z.W() !== k
      }, location: function () {
        T("checkGeo");
        return Z.L() !== k
      }, list: function (a) {return Z.ma(Ab(a.dimension_id) || "") !== k}, dynamic_customer_profile: function (a) {
        var b =
          Z.ka();
        return ab(b) && a.value in b
      }
    };

    function Og (a, b, c) {
      var d = H(c) && c !== k, e = H(a) && a !== k;
      switch (b || (e ? "exact" : "exists")) {
        case "exists":
          return d;
        case "exact":
          return d && String(c) === a;
        case "substring":
          return d && -1 !== String(c).indexOf(a);
        case "regex":
          try {return e && d ? Boolean(String(c).match(RegExp(a))) : o} catch (f) {return o}
        case "range":
          return a = a.split(":"), b = parseFloat(a[1]), c = parseFloat(c), c >= parseFloat(a[0]) && c <= b;
        default:
          return o
      }
    };
    var dh = [function () {
      var a = jc();
      if ("ie" === a.ba) {
        try {var b = Number(a.ca)} catch (c) {return}
        7 > b && h(Error("IE is only supported on version 8+ (detected " + b + ")"));
        8 > b && ("windows" === a.platform.id && a.platform.version && E(["xp", "vista"], a.platform.version.toLowerCase())) && h(Error("IE7 is not supported"))
      }
    }, function () {return ea(u({a: 123}))}];

    function ue (a, b, c) {
      var d;
      d = o === j;
      var c = c === j, e = o, f = P(a);
      if (f && (c || !Hg(f))) {
        e = j;
        if (c && Hg(f))for (c = 0; c < V.length; c++)V[c].H === f && V.splice(c, 1);
        V.push({H: f, id: a, source: b});
        d && (S = S || [], S.push(f));
        qe[f] = j;
        re();
        M("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, j)
      }
      return e
    }

    function Hg (a) {return a in pe || a in qe}

    function od (a) {
      var b = [], c = !H(a), a = a || [];
      w(V, function (d) {(c || E(a, d.H)) && b.push(d.id)});
      return b
    }

    function Cf (a) {
      var b;
      if (b === j || !Hg(a)) pe[a] = j, re()
    }

    function Id () {
      var a = {};
      w(Qe, function (b, c) {a[b] = c});
      w(V, function (b) {
        var c = P(b.id);
        a[c] = b.id
      });
      w(pe, function (b) {a[b] = "0"});
      w(z("blacklisted_experiments") || {}, function (b) {b in a && delete a[b]});
      y("optimizelyBuckets", u(a), Ua)
    }

    function re () {w(eh, function (a) {a()})}

    function fh (a, b, c, d) {
      if (-1 !== a.indexOf("_optimizely_redirect")) b.push({
        code: a,
        type: "code forced (redirect)",
        variationId: d
      }); else {
        for (var a = a.split("\n"), e = o, f = o, g = [], l = []; 0 < a.length;) {
          var m = eb(a.shift()), n = 0 < l.length;
          if (m)if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i))) f = j; else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i))) f = o; else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i))) e =
            j; else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i))) e = o; else if (!gh.exec(m) && !e)if (f) g.push(m); else {
            if (!n) {
              var r = hh.exec(m), q = [];
              r ? (q.push(r[1].replace(/^['"]|['"]$/g, "")), (r = ih.exec(m)) && 4 < r.length && q.push(r[4]), c.push({
                  code: m,
                  selector: q,
                  type: "safe jquery",
                  waitUntilSelectorReady: j,
                  variationId: d
                })) : n = j
            }
            n && l.push(m)
          }
        }
        0 < g.length && b.push({code: g.join("\n"), type: "forced evaluation", variationId: d});
        0 < l.length && c.push({
          code: l.join("\n"), type: "safe non-jquery", waitUntilDocumentReady: j,
          variationId: d
        })
      }
    }

    function jh (a, b, c) {
      for (var d = {values: []}, e = 0, f = a.length; e < f; e++)d.values.push({
        value: a[e],
        match: b[e] || c
      });
      return d
    }

    var eh = [], Qe = {}, pe = {}, ih = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, gh = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, hh = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, qe = {}, V = [];

    function kh (a) {
      Xf = {};
      Vf(a)
    };
    function lh (a, b) {
      if (a && b)if (mh) M("Evaluator", "Bound event " + b + " to selector " + a), nh(a, b); else {
        var c = {
          eventName: b,
          selector: a,
          type: "event '" + b + "' (click goal)",
          waitUntilSelectorReady: j
        };
        M("Evaluator", "Add step to bind event " + c.eventName + " to selector " + c.selector);
        oh.push(c)
      }
    }

    function Hd (a, b) {
      if (B) {
        F(a) ? ph(a) : (a = [], ph(b));
        a = a.concat(S);
        S = [];
        for (var c = 0; c < a.length; c++)E(nd, a[c]) || nd.push(a[c]);
        c = a;
        c === i ? c = [] : bb(c) && (c = [c]);
        for (var d = od(c), e = [], f = [], g = [], l = [], m = K(wb(), function (a) {return a.experiments ? o : Zg(a.url_conditions || [])}), n = 0, r = m.length; n < r; n++) {
          var q = {
            eventName: m[n].event_name,
            selector: m[n].selector,
            type: "event '" + m[n].event_name + "' (click goal)",
            waitUntilSelectorReady: j
          };
          "revenue" in m[n] && (q.revenue = m[n].revenue);
          e.push(q)
        }
        w(c, function (a) {
          var b = {}, c = O(a, "events") ||
            {};
          w(c, function (a, c) {b[a] = [c]});
          var c = K(wb(), function (b) {return "experiments" in b ? a in b.experiments : o}), d = 0;
          for (; d < c.length; d++) {
            var m = c[d];
            b[m.selector] || (b[m.selector] = []);
            b[m.selector].push({eventName: m.event_name, revenue: m.revenue, experimentIds: m.experiments})
          }
          w(b, function (b, c) {
            w(c, function (c) {
              e.push({
                eventName: c.eventName,
                experimentIds: c.experimentIds,
                revenue: c.revenue,
                selector: b,
                type: "event '" + c.eventName + "' (experiment " + a + ")",
                waitUntilSelectorReady: j
              })
            })
          });
          var n = O(a, "css") || "";
          n && g.push({
            code: function () {
              $("body").append("<style>" +
                n + "</style>")
            }, selector: "body", type: "global css (experiment " + a + ")", waitUntilSelectorReady: j
          });
          if (c = O(a, "steps")) {
            w(c.forced, function (a) {f.push(a)});
            w(c.safe, function (a) {l.push(a)})
          } else(c = O(a, "code") || "") && fh(c, f, l)
        });
        w(d, function (a) {
          var b = z("variations", a, "pages");
          if (b) w(b, function (a) {
            if (a.steps && (!a.includes || Zg({values: a.includes})) && (!a.excludes || !Zg({values: a.excludes}))) {
              f.push.apply(f, a.steps.forced);
              l.push.apply(l, a.steps.safe)
            }
          }); else {
            for (var b = Ub(a), b = b.split("\n"), c = [], d = j, e = 0, g = b.length; e <
            g; e++) {
              var m = $.trim(b[e]);
              if (m === "/* _optimizely_variation_url_end */") d = j; else if (m !== "") {
                var n = Ea.exec(m);
                if (n && n.length === 13) {
                  var q = n[2] ? n[2].split(" ") : [], m = n[4] ? n[4].split(" ") : [], r = n[6] ? n[6] : "substring", gf = n[8] ? n[8].split(" ") : [], n = n[10] ? n[10].split(" ") : [];
                  if (q.length > 0) {
                    d = jh(q, gf, r);
                    d = Zg(d)
                  }
                  if (d && m.length > 0) {
                    d = jh(m, n, r);
                    d = !Zg(d)
                  }
                } else d && c.push(m)
              }
            }
            b = c.join("\n");
            fh(b, f, l, a)
          }
        });
        c = [];
        c.push.apply(c, f);
        c.push.apply(c, g);
        c.push.apply(c, l);
        c.push.apply(c, e);
        oh.push.apply(oh, c);
        qh()
      }
    }

    function qh () {
      var a = o;
      rh = k;
      for (M("Evaluator", sh + " times waited"); !a && 0 < oh.length;) {
        M("Evaluator", oh.length + " steps remaining");
        var b = oh.shift(), c = b, a = o;
        if (c.waitUntilDocumentReady && !mh) M("Evaluator", "Document not ready yet"), a = j; else if (c.waitUntilSelectorReady && !mh && (c = c.selector))for (var c = F(c) ? c : [c], d = 0; d < c.length; d++) {
          var e = c[d];
          if (!(e === k || e === i || !e.length))if (0 === ("document" == e ? $(document) : $(e)).length) M("Evaluator", "'" + e + "' not found"), a = j
        }
        a ? oh.unshift(b) : b.eventName ? (th(), M("Evaluator", "Bound event " +
              b.eventName + " to selector " + b.selector), c = {}, b.revenue && (c = {
              Q: b.revenue,
              T: b.experimentIds
            }), nh(b.selector, b.eventName, c)) : b.code && (M("Evaluator", "Run code: " + b.code.toString()), uh(b.code, b.variationId))
      }
      a ? (rh = setTimeout(qh, 0 === sh ? 10 : 50), sh++) : (M("Evaluator", sh + " total times waited"), th())
    }

    function Mg (a) {return "string" === typeof a ? eval(a) : a()}

    function th () {
      T("flash");
      0 < Ad.length || T("flashGeo")
    }

    function uh (a, b) {
      if (a) {
        var c = o, d;
        "string" === typeof a ? (d = a, c = j): d= a.toString();
        if (qd(d))if (M("Evaluator", "Redirect detected"), ae(d)) {
          M("Evaluator", "OK to redirect");
          var e = $d(d);
          M("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
          y("optimizelyRedirect", (b || "unknown variation") + "|" + (e ? "true" : "false"), 5);
          be()
        } else {
          M("Evaluator", "NOT OK to redirect");
          return
        }
        c && eval("var $j = $;");
        try {
          if (qd(d)) {
            $("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>");
            M("Evaluator",
              "Hiding body before redirect");
            var f = de.test(d) || ce.test(d) || ee.test(d), g = /_keep_body_hidden=(\S+)/.test(d);
            f || g ? M("Evaluator", "Standard redirect detected - Will not unhide body.") : setTimeout(function () {
                if (document.body) {
                  document.body.style.visibility = "visible";
                  document.body.style.display = "block";
                  M("Evaluator", "Unhiding body -- did not redirect");
                  T("bodyUnhidden")
                }
              }, 1700)
          }
          Mg(a)
        } catch (l) {
          c = Pa, Pa = j, M("Evaluator", "Error: " + l.message), M("Evaluator", "Code: " + d), Pa = c, M("Evaluator", "Failed to run code: " +
            l.message)
        }
      }
    }

    function nh (a, b, c) {
      c = c || {};
      if (!vh[a] || !vh[a][b]) {
        var d = function () {Jd(b, "custom", c)}, e = $(a);
        if (0 < e.length) {
          var f = function () {
            e.unbind("touchend", d);
            e.unbind("touchmove", f);
            e.unbind("mousedown", d)
          }, g = function () {
            f();
            e.bind("touchmove", f);
            e.bind("touchend", d)
          };
          e.bind("mousedown", d);
          e.bind("touchstart", g)
        } else e = $("html"), f = function () {
          e.undelegate(a, "touchend", d);
          e.undelegate(a, "touchmove", f);
          e.undelegate(a, "mousedown", d)
        }, e.delegate(a, "touchstart", function () {
          f();
          e.delegate(a, "touchend", d);
          e.delegate(a,
            "touchmove", f)
        }), e.delegate(a, "mousedown", d);
        vh[a] || (vh[a] = {});
        vh[a][b] = "mousedown touchstart"
      }
    }

    function wh (a) {xh = a}

    function ph (a) {
      a || (a = Eb());
      for (var b = 0; b < a.length; b++)Nb(a[b])
    }

    var vh = {}, nd = [], S = S || [], xh = 0, mh = o, oh = [], rh = k, sh = 0;
    $(function () {
      setTimeout(function () {
        T("docReady");
        mh = j;
        rh !== k && (M("Evaluator", "Document is ready"), clearTimeout(rh), 0 < xh ? setTimeout(qh, xh) : qh())
      }, 50)
    });
    function Rg (a) {
      this.Da = $.trim(a);
      a = yh(this.Da);
      a === k && h(Error("Invalid CIDR specification"));
      this.Z = a.Z;
      this.Y = a.Y
    }

    function yh (a) {
      a = a.split("/");
      if (2 != a.length)return k;
      var b = parseInt(a[1], 10);
      if (isNaN(b) || 0 > b || 32 < b)return k;
      a = Sg(a[0]);
      if (a === k)return k;
      if (0 > b || 32 < b) b = k; else {
        for (var c = [], d = 0; 4 > d; d++)c[d] = 0;
        for (var e = Math.floor(b / 8), d = 0; d < e; d++)c[d] = 255;
        4 > e && (c[e] = zh[b % 8]);
        b = c
      }
      for (c = 0; 4 > c; c++)a[c] &= b[c];
      return {Z: a, Y: b}
    }

    function Sg (a) {
      a = a.split(".");
      if (4 != a.length)return k;
      for (var b = [], c = 0; 4 > c; c++) {
        var d;
        d = a[c];
        if (3 < d.length) d = k; else {
          var e = parseInt(d, 10);
          d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? k : e
        }
        if (d === k)return k;
        b[c] = d
      }
      return b
    }

    var zh = [0, 128, 192, 224, 240, 248, 252, 254, 255];

    function Xg (a, b, c) {
      var d = a.split("?");
      if (d[1]) {
        var e = [];
        $.each(d[1].split("&"), function () {0 !== this.indexOf(Ah) && e.push(this)});
        d[1] = e.join("&");
        a = d.join("?")
      }
      switch (c) {
        case "exact":
          return a = Bh(a), a === Bh(b);
        case "regex":
          try {return Boolean(a.match(b))} catch (f) {return o}
        case "simple":
          return a = Bh(Ch(a)), b = Bh(Ch(b)), a === b;
        case "substring":
          return a = Bh(a, j), b = Bh(b, j), -1 !== a.indexOf(b);
        default:
          return o
      }
    }

    function Ch (a) {
      var b = a.indexOf("?");
      -1 !== b && (a = a.substring(0, b));
      b = a.indexOf("#");
      -1 !== b && (a = a.substring(0, b));
      return a
    }

    function Bh (a, b) {
      var a = a.replace("/?", "?"), a = a.toLowerCase().replace(/[/&?]+$/, ""), c = Dh.slice(0);
      b || (c = c.concat(Eh));
      for (var d = c.length, e = 0; e < d; e++)a = a.replace(RegExp("^" + c[e]), "");
      return a
    }

    var Dh = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"], Eh = ["www."], Ah = "optimizely_";

    function Fh (a) {
      return function (b) {
        if ("object" === typeof b && Ih()) {
          var c = k, d;
          for (d in b)b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
          return c
        }
        return a.apply(this, arguments)
      }
    }

    function Ih () {
      for (var a in{})return j;
      return o
    };
    function Jh () {
      if (!Da) {
        var a = $;
        a.fn.attr = Fh(a.fn.attr);
        a.fn.css = Fh(a.fn.css);
        a.fn.extend = Fh(a.fn.extend);
        var b = a.each;
        a.each = function (c, d, e) {
          if (!(c.length === i || a.isFunction(c)) || !Ih()) b.apply(this, arguments); else if (e)for (var f in c) {if (c.hasOwnProperty(f) && d.apply(c[f], e) === o)break} else for (f in c)if (c.hasOwnProperty(f) && !d.call(c[f], f, c[f]) === o)break;
          return c
        };
        var c = a.fn.$a, d = function (a, b, d) {return new c(a, b, d)}, e, f = document.getElementsByClassName;
        if (!Uf(f))var f = (window.optimizely || {}).getElementsByClassName,
          g = (window.optly || {}).getElementsByClassName, f = Uf(f) ? f : Uf(g) ? g : k;
        e = f;
        a.fn.$a = function (b, c, f) {
          var g = d, l = document.getElementsByClassName;
          !Uf(l) && e && (g = function (a, b, c) {
            document.getElementsByClassName = e;
            a = d(a, b, c);
            document.getElementsByClassName = l;
            return a
          });
          if (!("string" === typeof b && c && "object" === a.type(c) && Ih()))return g(b, c, f);
          b = g(b, i, f);
          b.attr(c);
          return b
        }
      }
      M("Main", "Started, revision " + z("revision"));
      try {
        var l = [];
        w(dh, function (a) {try {a()} catch (b) {l.push(b.message)}});
        0 < l.length && h(Error("Feature(s) not supported: " +
          l.join("; ")))
      } catch (m) {
        M("Main", "Disabling: " + m.message);
        return
      }
      var f = Sf(), g = o, n;
      for (n in f)if (Tf.exec(n)) {
        g = j;
        break
      }
      ("true" === f.opt_out || "false" === f.opt_out) && je("true" === f.opt_out);
      Ga = "true" === f.force_tracking;
      "true" === f.disable || "true" === f.opt_out || hf() ? Ha = B = o : "classic" === f.disable ? B = o : "new" === f.disable && (Ha = o);
      Ia = "true" === f.editor;
      Ja = "true" === f.p13n;
      Oa = "true" === f.show_preview;
      Ka = (n = window.optlyDesktop) && H(n.p13nInner);
      (n = v("optimizelyToken")) && y("optimizelyToken", n, 15);
      n = f.token || n;
      /^[0-9a-f]{64}$/.test(n) ?
        Ma = n : /^[0-9a-f]{32}$/.test(n) ? (M("Query", "Using legacy MD5 token"), Ma = n) : (ya("optimizelyToken", za()), M("Query", "Blocked request to load unsafe script: " + n));
      Pa = "true" === f.log;
      Qa = "true" === f.verbose;
      qa = !(Oa || g) || Ga;
      if (Ia || Ja) window.optimizelyDataApi = {getProjectId: Rb};
      if (Ka) M("Main", "Disabling because in desktop app editor."); else if (Ja) M("Main", "Disabling because personalization editor flag is set."), db("https://" + Zb() + "/js/innie.js?_=" + +new Date); else if (he(), hf()) M("Main", "Disabling because opted out"),
        zc(); else if (Ma) {
        if (!window.optimizelyPreview) {
          if (!window.optimizely || !window.optimizely.unshift) window.optimizely = [];
          window.optimizely.unshift(["verifyPreviewProject", Rb()]);
          db([Rf, "/js/preview/", Ma, ".js"].join(""), j);
          Oa && Qf('Loading Preview<br /><img alt="loading" src="//' + Zb() + '/static/img/loading-32.gif" style="padding-top:20px; width: 32px; margin: 0 auto;" />')
        }
      } else if (Oa && !Ma) Qf("This preview link has expired. Please return to Optimizely and preview again to get a new link."); else {
        if (B || Ha)if (f =
            z("project_js")) M("Evaluator", "Running project level javascript."), uh(f);
        he();
        if (B) {
          f = v("optimizelyEndUserId");
          uc = f !== i && f !== k;
          a:{
            f = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider;adsbot-google;mediapartners-google;applebot".split(";");
            g = navigator.userAgent;
            g = g.toLowerCase();
            for (n = 0; n < f.length; n++)if (-1 !== g.indexOf(f[n])) {
              f = j;
              break a
            }
            f = o
          }
          f ? qa = o : uc || ib.set("first_session", j)
        }
        if (f = N.get("asyncInfo")) pc("asyncInfo") ||
        qc(f), N.set("asyncInfo", k);
        (f = pc("asyncInfo")) && w(f, Fc);
        if (z("uses_list_targeting")) {
          var f = "http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/odds.optimizely.com/js/geo2.js", r = {};
          w(Qb(), function (a, b) {
            var c = Nc(b);
            typeof c === "string" && (r[b] = c)
          });
          r.project = Rb().toString();
          var g = [], q;
          for (q in r)r.hasOwnProperty(q) && g.push(encodeURIComponent(q) + "=" + encodeURIComponent(r[q]));
          g.length && (f += "?" + g.join("&"));
          db(f)
        }
        z("uses_dynamic_customer_profile_targeting") && (Of(), q = If(), !q.q || !q.q.datasourceId ? (M("DCP", "No Optimizely datasource found in data."),
            q = k) : (f = q.q.datasourceId, g = q.q.id, f = I([Rb().toString(), f, g], encodeURIComponent), f = ["http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/tapi.optimizely.com/api/targetingEmbed"].concat(f).join("/"), g = (Pc.get() || {}).aliases || {}, Pf(q.z, g) || (q = I(q.z, function (a) {return encodeURIComponent(a.datasourceId) + "=" + encodeURIComponent(a.id)}), f += "?" + q.join("&")), q = f), q !== k && db(q));
        (z("dcp_service_id") || k) !== k && setTimeout(function () {
          var a = z("dcp_service_id") || k;
          if (a !== k) {
            var b = If();
            if (b.q)if (b.z.length === 0) M("DCP", "Must specify at least one non-Optimizely datasource to alias");
            else if (Of()) {
              var a = I([a, b.q.datasourceId, b.q.id], encodeURIComponent).join("/"), c = b.z;
              try {
                var d = new XMLHttpRequest;
                d.open("POST", ["http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/vis.optimizely.com/api/alias", a].join("/"));
                if ("withCredentials" in d) d.withCredentials = j;
                d.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                var e = {};
                w(c, function (a) {e[a.datasourceId] = a.id});
                d.onerror = function () {M("DCP", "Failed to POST alias request")};
                d.onload = function () {
                  if (d.status >= 200 && d.status < 300) {
                    var a = Pc.get() || {}, b = a.aliases || {}, b = b || {};
                    w(c, function (a) {b[a.datasourceId] = a.id});
                    a.aliases = b;
                    Pc.set(a)
                  } else M("DCP", "Alias POST failed with", d.statusText)
                };
                d.send(u({data: e}))
              } catch (f) {M("DCP", "Exception %s trying to POST alias request", f)}
            } else M("DCP", "Duplicate alias request; skipping."); else M("DCP", "Must specify Optimizely datasource in alias")
          }
        }, 0);
        if (q = v("optimizelyBuckets")) {
          try {q = ea(q)} catch (G) {q = {}}
          var A = {};
          w(q, function (a, b) {
            var b = String(b), c = P(b);
            if (Ob(c).length > 1 && b.indexOf("_") === -1) {
              A[c] = A[c] || {};
              A[c][a] = b
            } else b !== "0" ? ue(b,
                "cookie") || (Qe[a] = b) : Cf(a)
          });
          w(A, function (a, b) {
            var c;
            a:{
              c = [];
              for (var d = Ob(a), e = 0; e < d.length; e++) {
                var f = b[d[e]];
                if (f === "0") {
                  c = "";
                  break a
                }
                c.push(f)
              }
              c = c.join("_")
            }
            c.length > 0 ? ue(c, "cookie") : Cf(a)
          })
        }
        Vf();
        pd = (v("optimizelyRedirect") || "|").split("|")[0];
        q = v("optimizelyReferrer");
        q !== k && (Uc = 0 == q.length ? "" : q, y("optimizelyReferrer", ""));
        q = Wf;
        M("Visitor", "Initializing");
        (f = v("optimizelyAudiences")) && 0 < f.length && w(f.split(","), p(function (a) {
          vg(this, a, j, {
            O: j,
            xa: o
          })
        }, q));
        w(cg(), p(function (a) {
          M("Visitor", "Found segment " +
            a);
          var b = Ib()[a];
          if (b && b.audience_id) {
            M("Visitor", "Adding to audience " + b.audience_id);
            vg(this, b.audience_id, j, {C: o})
          } else if (b && b.dimension_id) {
            M("Visitor", "Setting dimension value " + b.dimension_id);
            wg(this, b.dimension_id, Xf[a], o)
          }
        }, q));
        U = Wf;
        fe = o;
        Yf.push(Bd);
        eh.push(Bd);
        q = {
          $: $,
          activeExperiments: nd || [],
          allExperiments: Jb(),
          all_experiments: Jb(),
          allVariations: z("variations") || {},
          getElementsByClassName: document.getElementsByClassName,
          revision: z("revision"),
          variationIdsMap: Ge,
          variation_map: He,
          variationMap: He,
          variationNamesMap: Ie
        };
        for (var C in q)X(q, C, q[C]);
        q.data = W;
        C = {};
        var pa = Ya(le, [C, Se]);
        J(C, {
          activate: t(td, U),
          activateGeoDelayedExperiments: t(wd, U),
          activateSiteCatalyst: Rc,
          activateUniversalAnalytics: gd,
          addOAuthClientId: ye,
          addToAudience: p(U.D, U),
          addToSegment: ne,
          bindTrackElement: lh,
          bucketUser: ud,
          bucketVisitor: ud,
          clickTaleRecord: jd,
          clickTalePlayback: hd,
          customTag: Be,
          delayDomReadyEval: wh,
          delayPageviewTracking: Le,
          disable: ie,
          log: Ac,
          getAccountId: tb,
          getProjectId: Rb,
          googleAnalyticsCustomVariableScope: Xc,
          integrationPrefix: kd,
          optOut: je,
          overrideUrl: vc,
          push: pa,
          removeFromAllAudiences: p(U.fb, U),
          removeFromAllSegments: Ee,
          removeFromAudience: p(U.aa, U),
          removeFromSegment: Ce,
          sc_activate: Rc,
          sc_svar: ld,
          skipPageTracking: Ne,
          optOutThirdPartyCookies: Me,
          setDimensionValue: p(U.B, U),
          setUserId: Pe,
          storeThirdPartyData: me,
          timeout: ie,
          trackEvent: Re,
          verbose: Bc
        });
        z("slave") && J(C, {get: we});
        C.removeFromReportableAudiences = Oe;
        J(q, C);
        C = window.optimizely;
        F(C) && w(C, function (a) {pa(a)});
        window.optimizely = q;
        T("apiInitialize");
        window.optimizely.iapi = {
          evaluateSegments: t(kh,
            i)
        };
        var Ta = !z("force_variation");
        C = Sf();
        w(C, function (a, b) {
          var c = Tf.exec(a);
          if (c)if (Ta) {
            Na = j;
            x("Query", "Ignored parameter %s", a)
          } else {
            c = c[1];
            ud(c, b, j);
            Lb(c) ? Ff(c, {force: j, skipPageviewTracking: j}) : Dd(c, {}) || td(U, c, {
                force: j,
                skipPageviewTracking: j
              })
          }
        });
        Na ? Qf("Force parameters are disabled for this project. See Project Code Settings.") : (Jh.log(), Ia && db("https://" + Zb() + "/js/innie.js?_=" + +new Date), B && (T("distributeExperiments"), w(Eb(), function (a) {
            if (!ra(a, S))if (Lb(a)) Ff(a); else if (Cd(a)) {
              if (Dd(a, {objectType: "experiment"})) {
                M("Distributor",
                  "Going to distribute " + Nb(a));
                if (Gd(a)) {
                  S = S || [];
                  S.push(a)
                }
              }
            } else!Kb(a) && !E(nd, a) && Ed(a)
          }), Id(), Xe(), Sa || (0 < Fa ? setTimeout(function () {af()}, Fa) : af()), We(), Zc()), Pa && (w(pe, function (a) {
            var b = Mb(a);
            M("Plan", "Ignore experiment '" + b + "' (" + a + ")")
          }), w(V, function (a) {
            var b = P(a.id), c = Xb(a.id);
            M("Plan", Nb(b) + ' in variation "' + c + '" (' + a.id + ")")
          })), Ia ? ve() : B && (T("beginEvaluate"), Hd(), ve(), zc(), !z("installation_verified") && qa && (C = "https://" + Zb() + "/account/snippet_installed?project_id=" + Rb() + "&wxhr=true", M("Tracker",
              "Making snippet verification request."), bd(C, k))), setTimeout(function () {wd(U)}, 2E3), setTimeout(function () {
            if (qa) {
              var a = Ae;
              if (a.Za) {
                var b = Va(), c = Wa(), d = Rb(), e = z("revision"), f = xf, g = vf, l = zf, m = dc(), n = nd.concat(S).length, q = tf().length, r;
                r = pc("events") || [];
                var C = pc("event_queue") || [];
                r = u(r).length + u(C).length;
                var A;
                a:{
                  try {
                    A = window.optimizely.get("behavior").getEvents()[0].timestamp;
                    break a
                  } catch (G) {}
                  A = i
                }
                var b = {
                  user: b,
                  ppid: c,
                  project: d,
                  revision: e,
                  sync: f,
                  timebase: g,
                  render: l,
                  sampleRate: m,
                  numExps: n,
                  numBehaviorEvents: q,
                  behaviorEventsSize: r,
                  oldestBehaviorEventAge: !A ? 0 : (new Date).getTime() - A.getTime(),
                  integrationOAuthClientIds: wf(xe, ",", 64),
                  codeVersion: z("version"),
                  hasSlave: !!z("slave"),
                  docVisibilityState: document.Bb || document.webkitVisibilityState,
                  wxhr: j,
                  apis: wf(L(a.S), "!", 1E3)
                }, sa;
                a:{
                  c = k;
                  try {sa = K(window.performance.getEntries(), function (a) {return !!Bf.test(a.name)})[0]} catch (pa) {
                    sa = c;
                    break a
                  }
                  if (sa) {
                    var c = {}, Bb;
                    for (Bb in sa)typeof sa[Bb] === "number" && sa[Bb] !== 0 && (c[Bb] = sa[Bb])
                  }
                  sa = c
                }
                J(b, sa || {});
                J(b, a.n);
                var Ta = ["optimizelyAudiences",
                  "optimizelyBuckets", "optimizelyCustomEvents", "optimizelyPendingLogEvents", "optimizelyReferrer", "optimizelySegments"], Od = {}, Pd = 0, Qd = 0;
                w(ia(), function (a) {
                  if (a.name.indexOf("optimizely") === 0) {
                    if (E(Ta, a.name)) {
                      M("RUM", "Cookie size for " + a.name + ": " + a.P.length);
                      Od[a.name + "Len"] = a.P.length
                    }
                    Pd = Pd + a.P.length
                  }
                  Qd = Qd + a.P.length
                });
                J(Od, {allOptimizelyCookiesLen: Pd, allCookiesLen: Qd});
                J(b, Od || {});
                var jg = {};
                w(N.va() || {}, function (a, b) {jg["ls" + a] = b});
                J(b, jg);
                var a = [], Ec;
                for (Ec in b)Object.prototype.hasOwnProperty.call(b,
                  Ec) && a.push(window.encodeURIComponent(Ec) + "=" + window.encodeURIComponent(b[Ec]));
                bd("http:\/\/wayback.archive-it.org\/8130\/20161215231902\/https:\/\/rum.optimizely.com/rum?" + a.join("&"), k)
              }
            }
          }, 3E3), M("Main", "End of main"), T("mainEnd"))
      }
    }

    Jh.log = function () {
      M("Info", "Is Classic Optimizely enabled: " + B);
      M("Info", "Diagnostic enabled: false");
      M("Info", "Force variation enabled: " + !!z("force_variation"));
      M("Info", "Browser type: " + kc());
      M("Info", "Browser version: " + lc());
      var a = rc();
      "unknown" !== a && M("Info", "Mobile browser type: " + a);
      M("Info", "New vs returning: " + tc());
      M("Info", "Source type: " + bg());
      M("Info", "User ID: " + Va())
    };
    Jh();
  };
  var SLAVE_CLIENT = {optimizely: []};
  optimizelyCode();
  optly.Cleanse.finish();

}());
