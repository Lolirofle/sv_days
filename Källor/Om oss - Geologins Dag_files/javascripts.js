if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length,
                i = tt.type(t);
            return "function" === i || tt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (tt.isFunction(e)) return tt.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return tt.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (lt.test(e)) return tt.filter(e, t, i);
                e = tt.filter(e, t)
            }
            return tt.grep(t, function(t) {
                return V.call(e, t) >= 0 !== i
            })
        }

        function s(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = mt[t] = {};
            return tt.each(t.match(ft) || [], function(t, i) { e[i] = !0 }), e
        }

        function r() { J.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1), tt.ready() }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = tt.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(wt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try { i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? tt.parseJSON(i) : i } catch (s) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function h() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            return tt.nodeName(t, "table") && tt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = zt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function m(t, e) {
            for (var i = 0, n = t.length; n > i; i++) bt.set(t[i], "globalEval", !e || bt.get(e[i], "globalEval"))
        }

        function g(t, e) {
            var i, n, s, o, r, a, l, h;
            if (1 === e.nodeType) {
                if (bt.hasData(t) && (o = bt.access(t), r = bt.set(e, o), h = o.events)) {
                    delete r.handle, r.events = {};
                    for (s in h)
                        for (i = 0, n = h[s].length; n > i; i++) tt.event.add(e, s, h[s][i])
                }
                yt.hasData(t) && (a = yt.access(t), l = tt.extend({}, a), yt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && tt.nodeName(t, e) ? tt.merge([t], i) : i
        }

        function b(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Tt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }

        function y(e, i) {
            var n, s = tt(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : tt.css(s[0], "display");
            return s.detach(), o
        }

        function _(t) {
            var e = J,
                i = Rt[t];
            return i || (i = y(t, e), "none" !== i && i || (Lt = (Lt || tt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Lt[0].contentDocument, e.write(), e.close(), i = y(t, e), Lt.detach()), Rt[t] = i), i
        }

        function w(t, e, i) {
            var n, s, o, r, a = t.style;
            return i = i || qt(t), i && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || tt.contains(t.ownerDocument, t) || (r = tt.style(t, e)), Bt.test(r) && jt.test(e) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r
        }

        function x(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function C(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, s = Gt.length; s--;)
                if (e = Gt[s] + i, e in t) return e;
            return n
        }

        function k(t, e, i) {
            var n = Ut.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function T(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += tt.css(t, i + Ct[o], !0, s)), n ? ("content" === i && (r -= tt.css(t, "padding" + Ct[o], !0, s)), "margin" !== i && (r -= tt.css(t, "border" + Ct[o] + "Width", !0, s))) : (r += tt.css(t, "padding" + Ct[o], !0, s), "padding" !== i && (r += tt.css(t, "border" + Ct[o] + "Width", !0, s)));
            return r
        }

        function D(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = qt(t),
                r = "border-box" === tt.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = w(t, e, o), (0 > s || null == s) && (s = t.style[e]), Bt.test(s)) return s;
                n = r && (Q.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + T(t, e, i || (r ? "border" : "content"), n, o) + "px"
        }

        function I(t, e) {
            for (var i, n, s, o = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (o[r] = bt.get(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && kt(n) && (o[r] = bt.access(n, "olddisplay", _(n.nodeName)))) : (s = kt(n), "none" === i && s || bt.set(n, "olddisplay", s ? i : tt.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
            return t
        }

        function S(t, e, i, n, s) {
            return new S.prototype.init(t, e, i, n, s)
        }

        function E() {
            return setTimeout(function() { Qt = void 0 }), Qt = tt.now()
        }

        function N(t, e) {
            var i, n = 0,
                s = { height: t };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = Ct[n], s["margin" + i] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function P(t, e, i) {
            for (var n, s = (ne[e] || []).concat(ne["*"]), o = 0, r = s.length; r > o; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function A(t, e, i) {
            var n, s, o, r, a, l, h, c, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && kt(t),
                m = bt.get(t, "fxshow");
            i.queue || (a = tt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, u.always(function() { u.always(function() { a.unqueued--, tt.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = tt.css(t, "display"), c = "none" === h ? bt.get(t, "olddisplay") || _(t.nodeName) : h, "inline" === c && "none" === tt.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() { p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2] }));
            for (n in e)
                if (s = e[n], Zt.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    d[n] = m && m[n] || tt.style(t, n)
                } else h = void 0;
            if (tt.isEmptyObject(d)) "inline" === ("none" === h ? _(t.nodeName) : h) && (p.display = h);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = bt.access(t, "fxshow", {}), o && (m.hidden = !f), f ? tt(t).show() : u.done(function() { tt(t).hide() }), u.done(function() {
                    var e;
                    bt.remove(t, "fxshow");
                    for (e in d) tt.style(t, e, d[e])
                });
                for (n in d) r = P(f ? m[n] : 0, n, u), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function M(t, e) {
            var i, n, s, o, r;
            for (i in t)
                if (n = tt.camelCase(i), s = e[n], o = t[i], tt.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), r = tt.cssHooks[n], r && "expand" in r) {
                    o = r.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function H(t, e, i) {
            var n, s, o = 0,
                r = ie.length,
                a = tt.Deferred().always(function() { delete l.elem }),
                l = function() {
                    if (s) return !1;
                    for (var e = Qt || E(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, r = 0, l = h.tweens.length; l > r; r++) h.tweens[r].run(o);
                    return a.notifyWith(t, [h, o, i]), 1 > o && l ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: tt.extend({}, e),
                    opts: tt.extend(!0, { specialEasing: {} }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Qt || E(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = tt.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) h.tweens[i].run(1);
                        return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (M(c, h.opts.specialEasing); r > o; o++)
                if (n = ie[o].call(h, t, c, h.opts)) return n;
            return tt.map(c, P, h), tt.isFunction(h.opts.start) && h.opts.start.call(t, h), tt.fx.timer(tt.extend(l, { elem: t, anim: h, queue: h.opts.queue })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function O(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(ft) || [];
                if (tt.isFunction(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function z(t, e, i, n) {
            function s(a) {
                var l;
                return o[a] = !0, tt.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
                }), l
            }
            var o = {},
                r = t === _e;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function W(t, e) {
            var i, n, s = tt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && tt.extend(!0, t, n), t
        }

        function F(t, e, i) {
            for (var n, s, o, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (s in a)
                    if (a[s] && a[s].test(n)) {
                        l.unshift(s);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (s in i) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    r || (r = s)
                }
                o = o || r
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function L(t, e, i, n) {
            var s, o, r, a, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (r = h[l + " " + o] || h["* " + o], !r)
                    for (s in h)
                        if (a = s.split(" "), a[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                            r === !0 ? r = h[s] : h[s] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try { e = r(e) } catch (u) {
                        return { state: "parsererror", error: r ? u : "No conversion from " + l + " to " + o }
                    }
            }
            return { state: "success", data: e }
        }

        function R(t, e, i, n) {
            var s;
            if (tt.isArray(e)) tt.each(e, function(e, s) { i || Te.test(t) ? n(t, s) : R(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n) });
            else if (i || "object" !== tt.type(e)) n(t, e);
            else
                for (s in e) R(t + "[" + s + "]", e[s], i, n)
        }

        function j(t) {
            return tt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var B = [],
            q = B.slice,
            Y = B.concat,
            U = B.push,
            V = B.indexOf,
            K = {},
            X = K.toString,
            G = K.hasOwnProperty,
            Q = {},
            J = t.document,
            Z = "2.1.3",
            tt = function(t, e) {
                return new tt.fn.init(t, e)
            },
            et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            it = /^-ms-/,
            nt = /-([\da-z])/gi,
            st = function(t, e) {
                return e.toUpperCase()
            };
        tt.fn = tt.prototype = {
            jquery: Z,
            constructor: tt,
            selector: "",
            length: 0,
            toArray: function() {
                return q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
            },
            pushStack: function(t) {
                var e = tt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return tt.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(tt.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: B.sort,
            splice: B.splice
        }, tt.extend = tt.fn.extend = function() {
            var t, e, i, n, s, o, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || tt.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], n = t[e], r !== n && (h && n && (tt.isPlainObject(n) || (s = tt.isArray(n))) ? (s ? (s = !1, o = i && tt.isArray(i) ? i : []) : o = i && tt.isPlainObject(i) ? i : {}, r[e] = tt.extend(h, o, n)) : void 0 !== n && (r[e] = n));
            return r
        }, tt.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === tt.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !tt.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== tt.type(t) || t.nodeType || tt.isWindow(t) ? !1 : t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[X.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = tt.trim(t), t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"), e.text = t, J.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(it, "ms-").replace(nt, st)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; r > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (a)
                    for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(et, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? tt.merge(n, "string" == typeof t ? [t] : t) : U.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : V.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n, s = [], o = 0, r = t.length, a = !i; r > o; o++) n = !e(t[o], o), n !== a && s.push(t[o]);
                return s
            },
            map: function(t, e, n) {
                var s, o = 0,
                    r = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; r > o; o++) s = e(t[o], o, n), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && l.push(s);
                return Y.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, s;
                return "string" == typeof e && (i = t[e], e = t, t = i), tt.isFunction(t) ? (n = q.call(arguments, 2), s = function() {
                    return t.apply(e || this, n.concat(q.call(arguments)))
                }, s.guid = t.guid = t.guid || tt.guid++, s) : void 0
            },
            now: Date.now,
            support: Q
        }), tt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { K["[object " + e + "]"] = e.toLowerCase() });
        var ot = function(t) {
            function e(t, e, i, n) {
                var s, o, r, a, l, h, u, p, f, m;
                if ((e ? e.ownerDocument || e : R) !== A && P(e), e = e || A, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && H) {
                    if (11 !== a && (s = yt.exec(t)))
                        if (r = s[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(r), !o || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && F(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (s[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = s[3]) && w.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i
                        }
                    if (w.qsa && (!O || !O.test(t))) {
                        if (p = u = L, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = T(t), (u = e.getAttribute("id")) ? p = u.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                            f = _t.test(t) && c(e.parentNode) || e, m = h.join(",")
                        }
                        if (m) try {
                            return Z.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally { u || e.removeAttribute("id") }
                    }
                }
                return I(t.replace(ht, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[L] = !0, t
            }

            function s(t) {
                var e = A.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally { e.parentNode && e.parentNode.removeChild(e), e = null }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var s, o = t([], i.length, e), r = o.length; r--;) i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = B++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function(e, i, r) {
                    var a, l, h = [j, o];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[L] || (e[L] = {}), (a = l[n]) && a[0] === j && a[1] === o) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, r)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }

            function g(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), h && e.push(a));
                return r
            }

            function v(t, e, i, s, o, r) {
                return s && !s[L] && (s = v(s)), o && !o[L] && (o = v(o, r)), n(function(n, r, a, l) {
                    var h, c, u, d = [],
                        p = [],
                        f = r.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        b = !t || !n && e ? v : g(v, d, t, a, l),
                        y = i ? o || (n ? t : f || s) ? [] : r : b;
                    if (i && i(b, y, a, l), s)
                        for (h = g(y, p), s(h, [], a, l), c = h.length; c--;)(u = h[c]) && (y[p[c]] = !(b[p[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = y.length; c--;)(u = y[c]) && h.push(b[c] = u);
                                o(null, y = [], h, l)
                            }
                            for (c = y.length; c--;)(u = y[c]) && (h = o ? et(n, u) : d[c]) > -1 && (n[h] = !(r[h] = u))
                        }
                    } else y = g(y === r ? y.splice(f, y.length) : y), o ? o(null, r, y, l) : Z.apply(r, y)
                })
            }

            function b(t) {
                for (var e, i, n, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, r, !0), h = p(function(t) {
                        return et(e, t) > -1
                    }, r, !0), c = [function(t, i, n) {
                        var s = !o && (n || i !== S) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, s
                    }]; s > a; a++)
                    if (i = x.relative[t[a].type]) c = [p(f(c), i)];
                    else {
                        if (i = x.filter[t[a].type].apply(null, t[a].matches), i[L]) {
                            for (n = ++a; s > n && !x.relative[t[n].type]; n++);
                            return v(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(ht, "$1"), i, n > a && b(t.slice(a, n)), s > n && b(t = t.slice(n)), s > n && d(t))
                        }
                        c.push(i)
                    }
                return f(c)
            }

            function y(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    r = function(n, r, a, l, h) {
                        var c, u, d, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            b = S,
                            y = n || o && x.find.TAG("*", h),
                            _ = j += null == b ? 1 : Math.random() || .1,
                            w = y.length;
                        for (h && (S = r !== A && r); f !== w && null != (c = y[f]); f++) {
                            if (o && c) {
                                for (u = 0; d = t[u++];)
                                    if (d(c, r, a)) {
                                        l.push(c);
                                        break
                                    }
                                h && (j = _)
                            }
                            s && ((c = !d && c) && p--, n && m.push(c))
                        }
                        if (p += f, s && f !== p) {
                            for (u = 0; d = i[u++];) d(m, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (j = _, S = b), m
                    };
                return s ? n(r) : r
            }
            var _, w, x, C, k, T, D, I, S, E, N, P, A, M, H, O, z, W, F, L = "sizzle" + 1 * new Date,
                R = t.document,
                j = 0,
                B = 0,
                q = i(),
                Y = i(),
                U = i(),
                V = function(t, e) {
                    return t === e && (N = !0), 0
                },
                K = 1 << 31,
                X = {}.hasOwnProperty,
                G = [],
                Q = G.pop,
                J = G.push,
                Z = G.push,
                tt = G.slice,
                et = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = st.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + st + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                at = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                lt = new RegExp(nt + "+", "g"),
                ht = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                pt = new RegExp(at),
                ft = new RegExp("^" + ot + "$"),
                mt = { ID: new RegExp("^#(" + st + ")"), CLASS: new RegExp("^\\.(" + st + ")"), TAG: new RegExp("^(" + st.replace("w", "w*") + ")"), ATTR: new RegExp("^" + rt), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"), bool: new RegExp("^(?:" + it + ")$", "i"), needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i") },
                gt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                bt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _t = /[+~]/,
                wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                Ct = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                kt = function() { P() };
            try { Z.apply(G = tt.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType } catch (Tt) {
                Z = {
                    apply: G.length ? function(t, e) { J.apply(t, tt.call(e)) } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, P = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : R;
                return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, M = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", kt, !1) : i.attachEvent && i.attachEvent("onunload", kt)), H = !k(n), w.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = bt.test(n.getElementsByClassName), w.getById = s(function(t) {
                    return M.appendChild(t).id = L, !n.getElementsByName || !n.getElementsByName(L).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && H) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(xt, Ct);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(xt, Ct);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return H ? e.getElementsByClassName(t) : void 0
                }, z = [], O = [], (w.qsa = bt.test(n.querySelectorAll)) && (s(function(t) { M.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + nt + "*(?:value|" + it + ")"), t.querySelectorAll("[id~=" + L + "-]").length || O.push("~="), t.querySelectorAll(":checked").length || O.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || O.push(".#.+[+~]") }), s(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
                })), (w.matchesSelector = bt.test(W = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function(t) { w.disconnectedMatch = W.call(t, "div"), W.call(t, "[s!='']:x"), z.push("!=", at) }), O = O.length && new RegExp(O.join("|")), z = z.length && new RegExp(z.join("|")), e = bt.test(M.compareDocumentPosition), F = e || bt.test(M.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, V = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && F(R, t) ? -1 : e === n || e.ownerDocument === R && F(R, e) ? 1 : E ? et(E, t) - et(E, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var i, s = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        h = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : E ? et(E, t) - et(E, e) : 0;
                    if (o === a) return r(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[s] === h[s];) s++;
                    return s ? r(l[s], h[s]) : l[s] === R ? -1 : h[s] === R ? 1 : 0
                }, n) : A
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== A && P(t), i = i.replace(dt, "='$1']"), w.matchesSelector && H && (!z || !z.test(i)) && (!O || !O.test(i))) try {
                    var n = W.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (s) {}
                return e(i, A, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== A && P(t), F(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== A && P(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && X.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !H) : void 0;
                return void 0 !== n ? n : w.attributes || !H ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (N = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(V), N) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return E = null, t
            }, C = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += C(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: mt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return mt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, Ct).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(lt, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, d, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                b = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (u = e; u = u[m];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && b) {
                                    for (c = g[L] || (g[L] = {}), h = c[t] || [], p = h[0] === j && h[1], d = h[0] === j && h[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++d && u === e) {
                                            c[t] = [j, p, d];
                                            break
                                        }
                                } else if (b && (h = (e[L] || (e[L] = {}))[t]) && h[0] === j) d = h[1];
                                else
                                    for (;
                                        (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (b && ((u[L] || (u[L] = {}))[t] = [j, d]), u !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[L] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, s = o(t, i), r = s.length; r--;) n = et(t, s[r]), t[n] = !(e[n] = s[r])
                        }) : function(t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = D(t.replace(ht, "$1"));
                        return s[L] ? n(function(t, e, i, n) {
                            for (var o, r = s(t, null, n, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(xt, Ct),
                            function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Ct).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = H ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === M
                    },
                    focus: function(t) {
                        return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[_] = a(_);
            for (_ in { submit: !0, reset: !0 }) x.pseudos[_] = l(_);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, i) {
                var n, s, o, r, a, l, h, c = Y[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = x.preFilter; a;) {
                    (!n || (s = ct.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), n = !1, (s = ut.exec(a)) && (n = s.shift(), o.push({ value: n, type: s[0].replace(ht, " ") }), a = a.slice(n.length));
                    for (r in x.filter) !(s = mt[r].exec(a)) || h[r] && !(s = h[r](s)) || (n = s.shift(), o.push({ value: n, type: r, matches: s }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : Y(t, l).slice(0)
            }, D = e.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = T(t)), i = e.length; i--;) o = b(e[i]), o[L] ? n.push(o) : s.push(o);
                    o = U(t, y(s, n)), o.selector = t
                }
                return o
            }, I = e.select = function(t, e, i, n) {
                var s, o, r, a, l, h = "function" == typeof t && t,
                    u = !n && T(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && H && x.relative[o[1].type]) {
                        if (e = (x.find.ID(r.matches[0].replace(xt, Ct), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = mt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);)
                        if ((l = x.find[a]) && (n = l(r.matches[0].replace(xt, Ct), _t.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && d(o), !t) return Z.apply(i, n), i;
                            break
                        }
                }
                return (h || D(t, u))(n, e, !H, i, _t.test(t) && c(e.parentNode) || e), i
            }, w.sortStable = L.split("").sort(V).join("") === L, w.detectDuplicates = !!N, P(), w.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(A.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(it, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        tt.find = ot, tt.expr = ot.selectors, tt.expr[":"] = tt.expr.pseudos, tt.unique = ot.uniqueSort, tt.text = ot.getText, tt.isXMLDoc = ot.isXML, tt.contains = ot.contains;
        var rt = tt.expr.match.needsContext,
            at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            lt = /^.[^:#\[\.,]*$/;
        tt.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? tt.find.matchesSelector(n, t) ? [n] : [] : tt.find.matches(t, tt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, tt.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    s = this;
                if ("string" != typeof t) return this.pushStack(tt(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (tt.contains(s[e], this)) return !0
                }));
                for (e = 0; i > e; e++) tt.find(t, s[e], n);
                return n = this.pushStack(i > 1 ? tt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && rt.test(t) ? tt(t) : t || [], !1).length
            }
        });
        var ht, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ut = tt.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || ht).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof tt ? e[0] : e, tt.merge(this, tt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : J, !0)), at.test(i[1]) && tt.isPlainObject(e))
                            for (i in e) tt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = J.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = J, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : tt.isFunction(t) ? "undefined" != typeof ht.ready ? ht.ready(t) : t(tt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), tt.makeArray(t, this))
            };
        ut.prototype = tt.fn, ht = tt(J);
        var dt = /^(?:parents|prev(?:Until|All))/,
            pt = { children: !0, contents: !0, next: !0, prev: !0 };
        tt.extend({
            dir: function(t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && tt(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), tt.fn.extend({
            has: function(t) {
                var e = tt(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (tt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, s = this.length, o = [], r = rt.test(t) || "string" != typeof t ? tt(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && tt.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? tt.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? V.call(tt(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(tt.unique(tt.merge(this.get(), tt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), tt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return tt.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return tt.dir(t, "parentNode", i)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return tt.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return tt.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return tt.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return tt.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return tt.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return tt.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || tt.merge([], t.childNodes)
            }
        }, function(t, e) {
            tt.fn[t] = function(i, n) {
                var s = tt.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = tt.filter(n, s)), this.length > 1 && (pt[t] || tt.unique(s), dt.test(t) && s.reverse()), this.pushStack(s)
            }
        });
        var ft = /\S+/g,
            mt = {};
        tt.Callbacks = function(t) {
            t = "string" == typeof t ? mt[t] || o(t) : tt.extend({}, t);
            var e, i, n, s, r, a, l = [],
                h = !t.once && [],
                c = function(o) {
                    for (e = t.memory && o, i = !0, a = s || 0, s = 0, r = l.length, n = !0; l && r > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                tt.each(e, function(e, i) {
                                    var n = tt.type(i);
                                    "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), n ? r = l.length : e && (s = i, c(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && tt.each(arguments, function(t, e) {
                            for (var i;
                                (i = tt.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? tt.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = h = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return h = void 0, e || u.disable(), this
                    },
                    locked: function() {
                        return !h
                    },
                    fireWith: function(t, e) {
                        return !l || i && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? h.push(e) : c(e)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, tt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", tt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", tt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", tt.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return tt.Deferred(function(i) {
                                tt.each(e, function(e, o) {
                                    var r = tt.isFunction(t[e]) && t[e];
                                    s[o[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && tt.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? tt.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then, tt.each(e, function(t, o) {
                    var r = o[2],
                        a = o[3];
                    n[o[1]] = r.add, a && r.add(function() { i = a }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
                    }, s[o[0] + "With"] = r.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e = 0,
                    i = q.call(arguments),
                    n = i.length,
                    s = 1 !== n || t && tt.isFunction(t.promise) ? n : 0,
                    o = 1 === s ? t : tt.Deferred(),
                    r = function(t, e, i) {
                        return function(n) { e[t] = this, i[t] = arguments.length > 1 ? q.call(arguments) : n, i === a ? o.notifyWith(e, i) : --s || o.resolveWith(e, i) }
                    },
                    a, l, h;
                if (n > 1)
                    for (a = new Array(n), l = new Array(n), h = new Array(n); n > e; e++) i[e] && tt.isFunction(i[e].promise) ? i[e].promise().done(r(e, h, i)).fail(o.reject).progress(r(e, l, a)) : --s;
                return s || o.resolveWith(h, i), o.promise()
            }
        });
        var gt;
        tt.fn.ready = function(t) {
            return tt.ready.promise().done(t), this
        }, tt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) { t ? tt.readyWait++ : tt.ready(!0) },
            ready: function(t) {
                (t === !0 ? --tt.readyWait : tt.isReady) || (tt.isReady = !0, t !== !0 && --tt.readyWait > 0 || (gt.resolveWith(J, [tt]), tt.fn.triggerHandler && (tt(J).triggerHandler("ready"), tt(J).off("ready"))))
            }
        }), tt.ready.promise = function(e) {
            return gt || (gt = tt.Deferred(), "complete" === J.readyState ? setTimeout(tt.ready) : (J.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))), gt.promise(e)
        }, tt.ready.promise();
        var vt = tt.access = function(t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === tt.type(i)) {
                s = !0;
                for (a in i) tt.access(t, e, a, i[a], !0, o, r)
            } else if (void 0 !== n && (s = !0, tt.isFunction(n) || (r = !0), h && (r ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(tt(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        };
        tt.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = tt.acceptData, a.prototype = {
            key: function(t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = a.uid++;
                    try { e[this.expando] = { value: i }, Object.defineProperties(t, e) } catch (n) { e[this.expando] = i, tt.extend(t, e) }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, s = this.key(t),
                    o = this.cache[s];
                if ("string" == typeof e) o[e] = i;
                else if (tt.isEmptyObject(o)) tt.extend(this.cache[s], e);
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, tt.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, s, o = this.key(t),
                    r = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    tt.isArray(e) ? n = e.concat(e.map(tt.camelCase)) : (s = tt.camelCase(e), e in r ? n = [e, s] : (n = s, n = n in r ? [n] : n.match(ft) || [])), i = n.length;
                    for (; i--;) delete r[n[i]]
                }
            },
            hasData: function(t) {
                return !tt.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) { t[this.expando] && delete this.cache[t[this.expando]] }
        };
        var bt = new a,
            yt = new a,
            _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            wt = /([A-Z])/g;
        tt.extend({
            hasData: function(t) {
                return yt.hasData(t) || bt.hasData(t)
            },
            data: function(t, e, i) {
                return yt.access(t, e, i)
            },
            removeData: function(t, e) { yt.remove(t, e) },
            _data: function(t, e, i) {
                return bt.access(t, e, i)
            },
            _removeData: function(t, e) { bt.remove(t, e) }
        }), tt.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    r = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = yt.get(o), 1 === o.nodeType && !bt.get(o, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = tt.camelCase(n.slice(5)), l(o, n, s[n])));
                        bt.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() { yt.set(this, t) }) : vt(this, function(e) {
                    var i, n = tt.camelCase(t);
                    if (o && void 0 === e) {
                        if (i = yt.get(o, t), void 0 !== i) return i;
                        if (i = yt.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
                    } else this.each(function() {
                        var i = yt.get(this, n);
                        yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() { yt.remove(this, t) })
            }
        }), tt.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = bt.get(t, e), i && (!n || tt.isArray(i) ? n = bt.access(t, e, tt.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = tt.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = tt._queueHooks(t, e),
                    r = function() { tt.dequeue(t, e) };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return bt.get(t, i) || bt.access(t, i, { empty: tt.Callbacks("once memory").add(function() { bt.remove(t, [e + "queue", i]) }) })
            }
        }), tt.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? tt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = tt.queue(this, t, e);
                    tt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && tt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() { tt.dequeue(this, t) })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = tt.Deferred(),
                    o = this,
                    r = this.length,
                    a = function() {--n || s.resolveWith(o, [o]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = bt.get(o[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), s.promise(e)
            }
        });
        var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ct = ["Top", "Right", "Bottom", "Left"],
            kt = function(t, e) {
                return t = e || t, "none" === tt.css(t, "display") || !tt.contains(t.ownerDocument, t)
            },
            Tt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = J.createDocumentFragment(),
                e = t.appendChild(J.createElement("div")),
                i = J.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Dt = "undefined";
        Q.focusinBubbles = "onfocusin" in t;
        var It = /^key/,
            St = /^(?:mouse|pointer|contextmenu)|click/,
            Et = /^(?:focusinfocus|focusoutblur)$/,
            Nt = /^([^.]*)(?:\.(.+)|)$/;
        tt.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, m, g = bt.get(t);
                if (g)
                    for (i.handler && (o = i, i = o.handler, s = o.selector), i.guid || (i.guid = tt.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                            return typeof tt !== Dt && tt.event.triggered !== e.type ? tt.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(ft) || [""], h = e.length; h--;) a = Nt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = tt.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = tt.event.special[p] || {}, c = tt.extend({ type: p, origType: m, data: n, handler: i, guid: i.guid, selector: s, needsContext: s && tt.expr.match.needsContext.test(s), namespace: f.join(".") }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), tt.event.global[p] = !0)
            },
            remove: function(t, e, i, n, s) {
                var o, r, a, l, h, c, u, d, p, f, m, g = bt.hasData(t) && bt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(ft) || [""], h = e.length; h--;)
                        if (a = Nt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = tt.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !s && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                            r && !d.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || tt.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) tt.event.remove(t, p + e[h], i, n, !0);
                    tt.isEmptyObject(l) && (delete g.handle, bt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, s) {
                var o, r, a, l, h, c, u, d = [n || J],
                    p = G.call(e, "type") ? e.type : e,
                    f = G.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || J, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(p + tt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[tt.expando] ? e : new tt.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : tt.makeArray(i, [e]), u = tt.event.special[p] || {}, s || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!s && !u.noBubble && !tt.isWindow(n)) {
                        for (l = u.delegateType || p, Et.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                        a === (n.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (r = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || p, c = (bt.get(r, "events") || {})[e.type] && bt.get(r, "handle"), c && c.apply(r, i), c = h && r[h], c && c.apply && tt.acceptData(r) && (e.result = c.apply(r, i), e.result === !1 && e.preventDefault());
                    return e.type = p, s || e.isDefaultPrevented() || u._default && u._default.apply(d.pop(), i) !== !1 || !tt.acceptData(n) || h && tt.isFunction(n[p]) && !tt.isWindow(n) && (a = n[h], a && (n[h] = null), tt.event.triggered = p, n[p](), tt.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = tt.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = q.call(arguments),
                    l = (bt.get(this, "events") || {})[t.type] || [],
                    h = tt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                    for (r = tt.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((tt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; a > i; i++) o = e[i], s = o.selector + " ", void 0 === n[s] && (n[s] = o.needsContext ? tt(s, this).index(l) >= 0 : tt.find(s, this, null, [l]).length), n[s] && n.push(o);
                            n.length && r.push({ elem: l, handlers: n })
                        }
                return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, s, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || J, n = i.documentElement, s = i.body, t.pageX = e.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[tt.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = St.test(s) ? this.mouseHooks : It.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new tt.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = J), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function() {
                        return this !== u() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && tt.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return tt.nodeName(t.target, "a")
                    }
                },
                beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } }
            },
            simulate: function(t, e, i, n) {
                var s = tt.extend(new tt.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
                n ? tt.event.trigger(s, null, e) : tt.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, tt.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) }, tt.Event = function(t, e) {
            return this instanceof tt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && tt.extend(this, e), this.timeStamp = t && t.timeStamp || tt.now(), void(this[tt.expando] = !0)) : new tt.Event(t, e)
        }, tt.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, tt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            tt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !tt.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), Q.focusinBubbles || tt.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var i = function(t) { tt.event.simulate(e, t.target, tt.event.fix(t), !0) };
            tt.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        s = bt.access(n, e);
                    s || n.addEventListener(t, i, !0), bt.access(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        s = bt.access(n, e) - 1;
                    s ? bt.access(n, e, s) : (n.removeEventListener(t, i, !0), bt.remove(n, e))
                }
            }
        }), tt.fn.extend({
            on: function(t, e, i, n, s) {
                var o, r;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (r in t) this.on(r, e, i, t[r], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
                else if (!n) return this;
                return 1 === s && (o = n, n = function(t) {
                    return tt().off(t), o.apply(this, arguments)
                }, n.guid = o.guid || (o.guid = tt.guid++)), this.each(function() { tt.event.add(this, t, n, i, e) })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, tt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = c), this.each(function() { tt.event.remove(this, t, i, e) })
            },
            trigger: function(t, e) {
                return this.each(function() { tt.event.trigger(t, e, this) })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? tt.event.trigger(t, e, i, !0) : void 0
            }
        });
        var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pt = /<([\w:]+)/,
            At = /<|&#?\w+;/,
            Mt = /<(?:script|style|link)/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ot = /^$|\/(?:java|ecma)script/i,
            zt = /^true\/(.*)/,
            Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ft = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, tt.extend({
            clone: function(t, e, i) {
                var n, s, o, r, a = t.cloneNode(!0),
                    l = tt.contains(t.ownerDocument, t);
                if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || tt.isXMLDoc(t)))
                    for (r = v(a), o = v(t), n = 0, s = o.length; s > n; n++) b(o[n], r[n]);
                if (e)
                    if (i)
                        for (o = o || v(t), r = r || v(a), n = 0, s = o.length; s > n; n++) g(o[n], r[n]);
                    else g(t, a);
                return r = v(a, "script"), r.length > 0 && m(r, !l && v(t, "script")), a
            },
            buildFragment: function(t, e, i, n) {
                for (var s, o, r, a, l, h, c = e.createDocumentFragment(), u = [], d = 0, p = t.length; p > d; d++)
                    if (s = t[d], s || 0 === s)
                        if ("object" === tt.type(s)) tt.merge(u, s.nodeType ? [s] : s);
                        else if (At.test(s)) {
                    for (o = o || c.appendChild(e.createElement("div")), r = (Pt.exec(s) || ["", ""])[1].toLowerCase(), a = Ft[r] || Ft._default, o.innerHTML = a[1] + s.replace($t, "<$1></$2>") + a[2], h = a[0]; h--;) o = o.lastChild;
                    tt.merge(u, o.childNodes), o = c.firstChild, o.textContent = ""
                } else u.push(e.createTextNode(s));
                for (c.textContent = "", d = 0; s = u[d++];)
                    if ((!n || -1 === tt.inArray(s, n)) && (l = tt.contains(s.ownerDocument, s), o = v(c.appendChild(s), "script"), l && m(o), i))
                        for (h = 0; s = o[h++];) Ot.test(s.type || "") && i.push(s);
                return c
            },
            cleanData: function(t) {
                for (var e, i, n, s, o = tt.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                    if (tt.acceptData(i) && (s = i[bt.expando], s && (e = bt.cache[s]))) {
                        if (e.events)
                            for (n in e.events) o[n] ? tt.event.remove(i, n) : tt.removeEvent(i, n, e.handle);
                        bt.cache[s] && delete bt.cache[s]
                    }
                    delete yt.cache[i[yt.expando]]
                }
            }
        }), tt.fn.extend({
            text: function(t) {
                return vt(this, function(t) {
                    return void 0 === t ? tt.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = d(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) })
            },
            after: function() {
                return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) })
            },
            remove: function(t, e) {
                for (var i, n = t ? tt.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || tt.cleanData(v(i)), i.parentNode && (e && tt.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (tt.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return tt.clone(this, t, e)
                })
            },
            html: function(t) {
                return vt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Mt.test(t) && !Ft[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace($t, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (tt.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) { t = this.parentNode, tt.cleanData(v(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = Y.apply([], t);
                var i, n, s, o, r, a, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    d = t[0],
                    m = tt.isFunction(d);
                if (m || h > 1 && "string" == typeof d && !Q.checkClone && Ht.test(d)) return this.each(function(i) {
                    var n = c.eq(i);
                    m && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                });
                if (h && (i = tt.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = tt.map(v(i, "script"), p), o = s.length; h > l; l++) r = i, l !== u && (r = tt.clone(r, !0, !0), o && tt.merge(s, v(r, "script"))), e.call(this[l], r, l);
                    if (o)
                        for (a = s[s.length - 1].ownerDocument, tt.map(s, f), l = 0; o > l; l++) r = s[l], Ot.test(r.type || "") && !bt.access(r, "globalEval") && tt.contains(a, r) && (r.src ? tt._evalUrl && tt._evalUrl(r.src) : tt.globalEval(r.textContent.replace(Wt, "")))
                }
                return this
            }
        }), tt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) {
            tt.fn[t] = function(t) {
                for (var i, n = [], s = tt(t), o = s.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), tt(s[r])[e](i), U.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Lt, Rt = {},
            jt = /^margin/,
            Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
            qt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", s.appendChild(o);
                var e = t.getComputedStyle(r, null);
                i = "1%" !== e.top, n = "4px" === e.width, s.removeChild(o)
            }
            var i, n, s = J.documentElement,
                o = J.createElement("div"),
                r = J.createElement("div");
            r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), t.getComputedStyle && tt.extend(Q, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, i = r.appendChild(J.createElement("div"));
                    return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", s.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), s.removeChild(o), r.removeChild(i), e
                }
            }))
        }(), tt.swap = function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = i.apply(t, n || []);
            for (o in e) t.style[o] = r[o];
            return s
        };
        var Yt = /^(none|table(?!-c[ea]).+)/,
            Ut = new RegExp("^(" + xt + ")(.*)$", "i"),
            Vt = new RegExp("^([+-])=(" + xt + ")", "i"),
            Kt = { position: "absolute", visibility: "hidden", display: "block" },
            Xt = { letterSpacing: "0", fontWeight: "400" },
            Gt = ["Webkit", "O", "Moz", "ms"];
        tt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = w(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": "cssFloat" },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, r, a = tt.camelCase(e),
                        l = t.style;
                    return e = tt.cssProps[a] || (tt.cssProps[a] = C(l, a)), r = tt.cssHooks[e] || tt.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : (o = typeof i, "string" === o && (s = Vt.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(tt.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || tt.cssNumber[a] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var s, o, r, a = tt.camelCase(e);
                return e = tt.cssProps[a] || (tt.cssProps[a] = C(t.style, a)), r = tt.cssHooks[e] || tt.cssHooks[a], r && "get" in r && (s = r.get(t, !0, i)), void 0 === s && (s = w(t, e, n)), "normal" === s && e in Xt && (s = Xt[e]), "" === i || i ? (o = parseFloat(s), i === !0 || tt.isNumeric(o) ? o || 0 : s) : s
            }
        }), tt.each(["height", "width"], function(t, e) {
            tt.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Yt.test(tt.css(t, "display")) && 0 === t.offsetWidth ? tt.swap(t, Kt, function() {
                        return D(t, e, n)
                    }) : D(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var s = n && qt(t);
                    return k(t, i, n ? T(t, e, n, "border-box" === tt.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), tt.cssHooks.marginRight = x(Q.reliableMarginRight, function(t, e) {
            return e ? tt.swap(t, { display: "inline-block" }, w, [t, "marginRight"]) : void 0
        }), tt.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
            tt.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Ct[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, jt.test(t) || (tt.cssHooks[t + e].set = k)
        }), tt.fn.extend({
            css: function(t, e) {
                return vt(this, function(t, e, i) {
                    var n, s, o = {},
                        r = 0;
                    if (tt.isArray(e)) {
                        for (n = qt(t), s = e.length; s > r; r++) o[e[r]] = tt.css(t, e[r], !1, n);
                        return o
                    }
                    return void 0 !== i ? tt.style(t, e, i) : tt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return I(this, !0)
            },
            hide: function() {
                return I(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { kt(this) ? tt(this).show() : tt(this).hide() })
            }
        }), tt.Tween = S, S.prototype = {
            constructor: S,
            init: function(t, e, i, n, s, o) { this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (tt.cssNumber[i] ? "" : "px") },
            cur: function() {
                var t = S.propHooks[this.prop];
                return t && t.get ? t.get(this) : S.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = S.propHooks[this.prop];
                return this.options.duration ? this.pos = e = tt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : S.propHooks._default.set(this), this
            }
        }, S.prototype.init.prototype = S.prototype, S.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = tt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) { tt.fx.step[t.prop] ? tt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[tt.cssProps[t.prop]] || tt.cssHooks[t.prop]) ? tt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now }
            }
        }, S.propHooks.scrollTop = S.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, tt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, tt.fx = S.prototype.init, tt.fx.step = {};
        var Qt, Jt, Zt = /^(?:toggle|show|hide)$/,
            te = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
            ee = /queueHooks$/,
            ie = [A],
            ne = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = te.exec(e),
                        o = s && s[3] || (tt.cssNumber[t] ? "" : "px"),
                        r = (tt.cssNumber[t] || "px" !== o && +n) && te.exec(tt.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (r && r[3] !== o) {
                        o = o || r[3], s = s || [], r = +n || 1;
                        do a = a || ".5", r /= a, tt.style(i.elem, t, r + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return s && (r = i.start = +r || +n || 0, i.unit = o, i.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
        tt.Animation = tt.extend(H, {
                tweener: function(t, e) {
                    tt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ne[i] = ne[i] || [], ne[i].unshift(e)
                },
                prefilter: function(t, e) { e ? ie.unshift(t) : ie.push(t) }
            }), tt.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? tt.extend({}, t) : { complete: i || !i && e || tt.isFunction(t) && t, duration: t, easing: i && e || e && !tt.isFunction(e) && e };
                return n.duration = tt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in tt.fx.speeds ? tt.fx.speeds[n.duration] : tt.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() { tt.isFunction(n.old) && n.old.call(this), n.queue && tt.dequeue(this, n.queue) }, n
            }, tt.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(kt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var s = tt.isEmptyObject(t),
                        o = tt.speed(e, i, n),
                        r = function() {
                            var e = H(this, tt.extend({}, t), o);
                            (s || bt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = tt.timers,
                            r = bt.get(this);
                        if (s) r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r) r[s] && r[s].stop && ee.test(s) && n(r[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && tt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = bt.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = tt.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, tt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), tt.each(["toggle", "show", "hide"], function(t, e) {
                var i = tt.fn[e];
                tt.fn[e] = function(t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, s)
                }
            }), tt.each({ slideDown: N("show"), slideUp: N("hide"), slideToggle: N("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) {
                tt.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), tt.timers = [], tt.fx.tick = function() {
                var t, e = 0,
                    i = tt.timers;
                for (Qt = tt.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || tt.fx.stop(), Qt = void 0
            }, tt.fx.timer = function(t) { tt.timers.push(t), t() ? tt.fx.start() : tt.timers.pop() }, tt.fx.interval = 13, tt.fx.start = function() { Jt || (Jt = setInterval(tt.fx.tick, tt.fx.interval)) }, tt.fx.stop = function() { clearInterval(Jt), Jt = null }, tt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, tt.fn.delay = function(t, e) {
                return t = tt.fx ? tt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() { clearTimeout(n) }
                })
            },
            function() {
                var t = J.createElement("input"),
                    e = J.createElement("select"),
                    i = e.appendChild(J.createElement("option"));
                t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, t = J.createElement("input"), t.value = "t", t.type = "radio", Q.radioValue = "t" === t.value
            }();
        var se, oe, re = tt.expr.attrHandle;
        tt.fn.extend({
            attr: function(t, e) {
                return vt(this, tt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() { tt.removeAttr(this, t) })
            }
        }), tt.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Dt ? tt.prop(t, e, i) : (1 === o && tt.isXMLDoc(t) || (e = e.toLowerCase(), n = tt.attrHooks[e] || (tt.expr.match.bool.test(e) ? oe : se)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = tt.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void tt.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, s = 0,
                    o = e && e.match(ft);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = tt.propFix[i] || i, tt.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!Q.radioValue && "radio" === e && tt.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), oe = {
            set: function(t, e, i) {
                return e === !1 ? tt.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, tt.each(tt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = re[e] || tt.find.attr;
            re[e] = function(t, e, n) {
                var s, o;
                return n || (o = re[e], re[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, re[e] = o), s
            }
        });
        var ae = /^(?:input|select|textarea|button)$/i;
        tt.fn.extend({
            prop: function(t, e) {
                return vt(this, tt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() { delete this[tt.propFix[t] || t] })
            }
        }), tt.extend({
            propFix: { "for": "htmlFor", "class": "className" },
            prop: function(t, e, i) {
                var n, s, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !tt.isXMLDoc(t), o && (e = tt.propFix[e] || e, s = tt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || ae.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), Q.optSelected || (tt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), tt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { tt.propFix[this.toLowerCase()] = this });
        var le = /[\t\r\n\f]/g;
        tt.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, r, a = "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (tt.isFunction(t)) return this.each(function(e) { tt(this).addClass(t.call(this, e, this.className)) });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(le, " ") : " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            r = tt.trim(n), i.className !== r && (i.className = r)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, r, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (tt.isFunction(t)) return this.each(function(e) { tt(this).removeClass(t.call(this, e, this.className)) });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(le, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            r = t ? tt.trim(n) : "", i.className !== r && (i.className = r)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : tt.isFunction(t) ? this.each(function(i) { tt(this).toggleClass(t.call(this, i, this.className, e), e) }) : this.each(function() {
                    if ("string" === i)
                        for (var e, n = 0, s = tt(this), o = t.match(ft) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === Dt || "boolean" === i) && (this.className && bt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : bt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(le, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var he = /\r/g;
        tt.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0]; {
                    if (arguments.length) return n = tt.isFunction(t), this.each(function(i) {
                        var s;
                        1 === this.nodeType && (s = n ? t.call(this, i, tt(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : tt.isArray(s) && (s = tt.map(s, function(t) {
                            return null == t ? "" : t + ""
                        })), e = tt.valHooks[this.type] || tt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return e = tt.valHooks[s.type] || tt.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(he, "") : null == i ? "" : i)
                }
            }
        }), tt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = tt.find.attr(t, "value");
                        return null != e ? e : tt.trim(tt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : n.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === s) && (Q.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !tt.nodeName(i.parentNode, "optgroup"))) {
                                if (e = tt(i).val(), o) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = tt.makeArray(e), r = s.length; r--;) n = s[r], (n.selected = tt.inArray(n.value, o) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), tt.each(["radio", "checkbox"], function() {
            tt.valHooks[this] = {
                set: function(t, e) {
                    return tt.isArray(e) ? t.checked = tt.inArray(tt(t).val(), e) >= 0 : void 0
                }
            }, Q.checkOn || (tt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), tt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            tt.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), tt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var ce = tt.now(),
            ue = /\?/;
        tt.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, tt.parseXML = function(t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try { i = new DOMParser, e = i.parseFromString(t, "text/xml") } catch (n) { e = void 0 }
            return (!e || e.getElementsByTagName("parsererror").length) && tt.error("Invalid XML: " + t), e
        };
        var de = /#.*$/,
            pe = /([?&])_=[^&]*/,
            fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            me = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ge = /^(?:GET|HEAD)$/,
            ve = /^\/\//,
            be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            _e = {},
            we = "*/".concat("*"),
            xe = t.location.href,
            Ce = be.exec(xe.toLowerCase()) || [];
        tt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: xe, type: "GET", isLocal: me.test(Ce[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": we, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": tt.parseJSON, "text xml": tt.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) {
                return e ? W(W(t, tt.ajaxSettings), e) : W(tt.ajaxSettings, t)
            },
            ajaxPrefilter: O(ye),
            ajaxTransport: O(_e),
            ajax: function(t, e) {
                function i(t, e, i, r) {
                    var l, c, v, b, _, x = e;
                    2 !== y && (y = 2, a && clearTimeout(a), n = void 0, o = r || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (b = F(u, w, i)), b = L(u, b, w, l), l ? (u.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (tt.lastModified[s] = _), _ = w.getResponseHeader("etag"), _ && (tt.etag[s] = _)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, c = b.data, v = b.error, l = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, h && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : v]), m.fireWith(d, [w, x]), h && (p.trigger("ajaxComplete", [w, u]), --tt.active || tt.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, r, a, l, h, c, u = tt.ajaxSetup({}, e),
                    d = u.context || u,
                    p = u.context && (d.nodeType || d.jquery) ? tt(d) : tt.event,
                    f = tt.Deferred(),
                    m = tt.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    b = {},
                    y = 0,
                    _ = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!r)
                                    for (r = {}; e = fe.exec(o);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return y || (t = b[i] = b[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return y || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || xe) + "").replace(de, "").replace(ve, Ce[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = tt.trim(u.dataType || "*").toLowerCase().match(ft) || [""], null == u.crossDomain && (l = be.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === Ce[1] && l[2] === Ce[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Ce[3] || ("http:" === Ce[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = tt.param(u.data, u.traditional)), z(ye, u, e, w), 2 === y) return w;
                h = tt.event && u.global, h && 0 === tt.active++ && tt.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ge.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (ue.test(s) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pe.test(s) ? s.replace(pe, "$1_=" + ce++) : s + (ue.test(s) ? "&" : "?") + "_=" + ce++)), u.ifModified && (tt.lastModified[s] && w.setRequestHeader("If-Modified-Since", tt.lastModified[s]), tt.etag[s] && w.setRequestHeader("If-None-Match", tt.etag[s])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + we + "; q=0.01" : "") : u.accepts["*"]);
                for (c in u.headers) w.setRequestHeader(c, u.headers[c]);
                if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === y)) return w.abort();
                _ = "abort";
                for (c in { success: 1, error: 1, complete: 1 }) w[c](u[c]);
                if (n = z(_e, u, e, w)) {
                    w.readyState = 1, h && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() { w.abort("timeout") }, u.timeout));
                    try { y = 1, n.send(v, i) } catch (x) {
                        if (!(2 > y)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return tt.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return tt.get(t, void 0, e, "script")
            }
        }), tt.each(["get", "post"], function(t, e) {
            tt[e] = function(t, i, n, s) {
                return tt.isFunction(i) && (s = s || n, n = i, i = void 0), tt.ajax({ url: t, type: e, dataType: s, data: i, success: n })
            }
        }), tt._evalUrl = function(t) {
            return tt.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 })
        }, tt.fn.extend({
            wrapAll: function(t) {
                var e;
                return tt.isFunction(t) ? this.each(function(e) { tt(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = tt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return tt.isFunction(t) ? this.each(function(e) { tt(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = tt(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = tt.isFunction(t);
                return this.each(function(i) { tt(this).wrapAll(e ? t.call(this, i) : t) })
            },
            unwrap: function() {
                return this.parent().each(function() { tt.nodeName(this, "body") || tt(this).replaceWith(this.childNodes) }).end()
            }
        }), tt.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, tt.expr.filters.visible = function(t) {
            return !tt.expr.filters.hidden(t)
        };
        var ke = /%20/g,
            Te = /\[\]$/,
            De = /\r?\n/g,
            Ie = /^(?:submit|button|image|reset|file)$/i,
            Se = /^(?:input|select|textarea|keygen)/i;
        tt.param = function(t, e) {
            var i, n = [],
                s = function(t, e) { e = tt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
            if (void 0 === e && (e = tt.ajaxSettings && tt.ajaxSettings.traditional), tt.isArray(t) || t.jquery && !tt.isPlainObject(t)) tt.each(t, function() { s(this.name, this.value) });
            else
                for (i in t) R(i, t[i], e, s);
            return n.join("&").replace(ke, "+")
        }, tt.fn.extend({
            serialize: function() {
                return tt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = tt.prop(this, "elements");
                    return t ? tt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !tt(this).is(":disabled") && Se.test(this.nodeName) && !Ie.test(t) && (this.checked || !Tt.test(t))
                }).map(function(t, e) {
                    var i = tt(this).val();
                    return null == i ? null : tt.isArray(i) ? tt.map(i, function(t) {
                        return { name: e.name, value: t.replace(De, "\r\n") }
                    }) : { name: e.name, value: i.replace(De, "\r\n") }
                }).get()
            }
        }), tt.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Ee = 0,
            Ne = {},
            $e = { 0: 200, 1223: 204 },
            Pe = tt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ne) Ne[t]()
        }), Q.cors = !!Pe && "withCredentials" in Pe, Q.ajax = Pe = !!Pe, tt.ajaxTransport(function(t) {
            var e;
            return Q.cors || Pe && !t.crossDomain ? {
                send: function(i, n) {
                    var s, o = t.xhr(),
                        r = ++Ee;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) o.setRequestHeader(s, i[s]);
                    e = function(t) {
                        return function() { e && (delete Ne[r], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n($e[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders())) }
                    }, o.onload = e(), o.onerror = e("error"), e = Ne[r] = e("abort");
                    try { o.send(t.hasContent && t.data || null) } catch (a) {
                        if (e) throw a
                    }
                },
                abort: function() { e && e() }
            } : void 0
        }), tt.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function(t) {
                    return tt.globalEval(t), t
                }
            }
        }), tt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), tt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return { send: function(n, s) { e = tt("<script>").prop({ async: !0, charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type) }), J.head.appendChild(e[0]) }, abort: function() { i && i() } }
            }
        });
        var Ae = [],
            Me = /(=)\?(?=&|$)|\?\?/;
        tt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ae.pop() || tt.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), tt.ajaxPrefilter("json jsonp", function(e, i, n) {
            var s, o, r, a = e.jsonp !== !1 && (Me.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Me.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = tt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Me, "$1" + s) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return r || tt.error(s + " was not called"), r[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function() { r = arguments }, n.always(function() { t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ae.push(s)), r && tt.isFunction(o) && o(r[0]), r = o = void 0 }), "script") : void 0
        }), tt.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || J;
            var n = at.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = tt.buildFragment([t], e, s), s && s.length && tt(s).remove(), tt.merge([], n.childNodes))
        };
        var He = tt.fn.load;
        tt.fn.load = function(t, e, i) {
            if ("string" != typeof t && He) return He.apply(this, arguments);
            var n, s, o, r = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = tt.trim(t.slice(a)), t = t.slice(0, a)), tt.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && tt.ajax({ url: t, type: s, dataType: "html", data: e }).done(function(t) { o = arguments, r.html(n ? tt("<div>").append(tt.parseHTML(t)).find(n) : t) }).complete(i && function(t, e) { r.each(i, o || [t.responseText, e, t]) }), this
        }, tt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            tt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), tt.expr.filters.animated = function(t) {
            return tt.grep(tt.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Oe = t.document.documentElement;
        tt.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, r, a, l, h, c = tt.css(t, "position"),
                    u = tt(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), o = tt.css(t, "top"), l = tt.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, h ? (n = u.position(), r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), tt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, tt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) { tt.offset.setOffset(this, t, e) });
                var e, i, n = this[0],
                    s = { top: 0, left: 0 },
                    o = n && n.ownerDocument;
                if (o) return e = o.documentElement, tt.contains(e, n) ? (typeof n.getBoundingClientRect !== Dt && (s = n.getBoundingClientRect()), i = j(o), { top: s.top + i.pageYOffset - e.clientTop, left: s.left + i.pageXOffset - e.clientLeft }) : s
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = { top: 0, left: 0 };
                    return "fixed" === tt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), tt.nodeName(t[0], "html") || (n = t.offset()), n.top += tt.css(t[0], "borderTopWidth", !0), n.left += tt.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - tt.css(i, "marginTop", !0), left: e.left - n.left - tt.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Oe; t && !tt.nodeName(t, "html") && "static" === tt.css(t, "position");) t = t.offsetParent;
                    return t || Oe
                })
            }
        }), tt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, i) {
            var n = "pageYOffset" === i;
            tt.fn[e] = function(s) {
                return vt(this, function(e, s, o) {
                    var r = j(e);
                    return void 0 === o ? r ? r[i] : e[s] : void(r ? r.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[s] = o)
                }, e, s, arguments.length, null)
            }
        }), tt.each(["top", "left"], function(t, e) {
            tt.cssHooks[e] = x(Q.pixelPosition, function(t, i) {
                return i ? (i = w(t, e), Bt.test(i) ? tt(t).position()[e] + "px" : i) : void 0
            })
        }), tt.each({ Height: "height", Width: "width" }, function(t, e) {
            tt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
                tt.fn[n] = function(n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || s === !0 ? "margin" : "border");
                    return vt(this, function(e, i, n) {
                        var s;
                        return tt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? tt.css(e, i, r) : tt.style(e, i, n, r)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), tt.fn.size = function() {
            return this.length
        }, tt.fn.andSelf = tt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return tt
        });
        var ze = t.jQuery,
            We = t.$;
        return tt.noConflict = function(e) {
            return t.$ === tt && (t.$ = We), e && t.jQuery === tt && (t.jQuery = ze), tt
        }, typeof e === Dt && (t.jQuery = t.$ = tt), tt
    }), function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function($) {
        function t(t, i) {
            var n, s, o, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = t.parentNode, s = n.name, t.href && s && "map" === n.nodeName.toLowerCase() ? (o = $("img[usemap='#" + s + "']")[0], !!o && e(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && e(t)
        }

        function e(t) {
            return $.expr.filters.visible(t) && !$(t).parents().addBack().filter(function() {
                return "hidden" === $.css(this, "visibility")
            }).length
        }

        function i(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = s($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

        function s(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(e, "mouseout", function() { $(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover") }).delegate(e, "mouseover", o)
        }

        function o() { $.datepicker._isDisabledDatepicker(C.inline ? C.dpDiv.parent()[0] : C.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover")) }

        function r(t, e) {
            $.extend(t, e);
            for (var i in e) null == e[i] && (t[i] = e[i]);
            return t
        }

        function a(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        $.ui = $.ui || {}, $.extend($.ui, { version: "1.11.2", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), $.fn.extend({
            scrollParent: function(t) {
                var e = this.css("position"),
                    i = "absolute" === e,
                    n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    s = this.parents().filter(function() {
                        var t = $(this);
                        return i && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== e && s.length ? s : $(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() { this.id || (this.id = "ui-id-" + ++t) })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() { /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id") })
            }
        }), $.extend($.expr[":"], {
            data: $.expr.createPseudo ? $.expr.createPseudo(function(t) {
                return function(e) {
                    return !!$.data(e, t)
                }
            }) : function(t, e, i) {
                return !!$.data(t, i[3])
            },
            focusable: function(e) {
                return t(e, !isNaN($.attr(e, "tabindex")))
            },
            tabbable: function(e) {
                var i = $.attr(e, "tabindex"),
                    n = isNaN(i);
                return (n || i >= 0) && t(e, !n)
            }
        }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(t, e) {
            function i(t, e, i, s) {
                return $.each(n, function() { e -= parseFloat($.css(t, "padding" + this)) || 0, i && (e -= parseFloat($.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat($.css(t, "margin" + this)) || 0) }), e
            }
            var n = "Width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
                s = e.toLowerCase(),
                o = { innerWidth: $.fn.innerWidth, innerHeight: $.fn.innerHeight, outerWidth: $.fn.outerWidth, outerHeight: $.fn.outerHeight };
            $.fn["inner" + e] = function(t) {
                return void 0 === t ? o["inner" + e].call(this) : this.each(function() { $(this).css(s, i(this, t) + "px") })
            }, $.fn["outer" + e] = function(t, n) {
                return "number" != typeof t ? o["outer" + e].call(this, t) : this.each(function() { $(this).css(s, i(this, t, !0, n) + "px") })
            }
        }), $.fn.addBack || ($.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = function(t) {
            return function(e) {
                return arguments.length ? t.call(this, $.camelCase(e)) : t.call(this)
            }
        }($.fn.removeData)), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.fn.extend({
            focus: function(t) {
                return function(e, i) {
                    return "number" == typeof e ? this.each(function() {
                        var t = this;
                        setTimeout(function() { $(t).focus(), i && i.call(t) }, e)
                    }) : t.apply(this, arguments)
                }
            }($.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) { t.preventDefault() })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (void 0 !== t) return this.css("zIndex", t);
                if (this.length)
                    for (var e = $(this[0]), i, n; e.length && e[0] !== document;) {
                        if (i = e.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        e = e.parent()
                    }
                return 0
            }
        }), $.ui.plugin = {
            add: function(t, e, i) {
                var n, s = $.ui[t].prototype;
                for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        };
        var l = 0,
            h = Array.prototype.slice;
        $.cleanData = function(t) {
            return function(e) {
                var i, n, s;
                for (s = 0; null != (n = e[s]); s++) try { i = $._data(n, "events"), i && i.remove && $(n).triggerHandler("remove") } catch (o) {}
                t(e)
            }
        }($.cleanData), $.widget = function(t, e, i) {
            var n, s, o, r, a = {},
                l = t.split(".")[0];
            return t = t.split(".")[1], n = l + "-" + t, i || (i = e, e = $.Widget), $.expr[":"][n.toLowerCase()] = function(t) {
                return !!$.data(t, n)
            }, $[l] = $[l] || {}, s = $[l][t], o = $[l][t] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
            }, $.extend(o, s, { version: i.version, _proto: $.extend({}, i), _childConstructors: [] }), r = new e, r.options = $.widget.extend({}, r.options), $.each(i, function(t, i) {
                return $.isFunction(i) ? void(a[t] = function() {
                    var n = function() {
                            return e.prototype[t].apply(this, arguments)
                        },
                        s = function(i) {
                            return e.prototype[t].apply(this, i)
                        };
                    return function() {
                        var t = this._super,
                            e = this._superApply,
                            o;
                        return this._super = n, this._superApply = s, o = i.apply(this, arguments), this._super = t, this._superApply = e, o
                    }
                }()) : void(a[t] = i)
            }), o.prototype = $.widget.extend(r, { widgetEventPrefix: s ? r.widgetEventPrefix || t : t }, a, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), s ? ($.each(s._childConstructors, function(t, e) {
                var i = e.prototype;
                $.widget(i.namespace + "." + i.widgetName, o, e._proto)
            }), delete s._childConstructors) : e._childConstructors.push(o), $.widget.bridge(t, o), o
        }, $.widget.extend = function(t) {
            for (var e = h.call(arguments, 1), i = 0, n = e.length, s, o; n > i; i++)
                for (s in e[i]) o = e[i][s], e[i].hasOwnProperty(s) && void 0 !== o && ($.isPlainObject(o) ? t[s] = $.isPlainObject(t[s]) ? $.widget.extend({}, t[s], o) : $.widget.extend({}, o) : t[s] = o);
            return t
        }, $.widget.bridge = function(t, e) {
            var i = e.prototype.widgetFullName || t;
            $.fn[t] = function(n) {
                var s = "string" == typeof n,
                    o = h.call(arguments, 1),
                    r = this;
                return n = !s && o.length ? $.widget.extend.apply(null, [n].concat(o)) : n, s ? this.each(function() {
                    var e, s = $.data(this, i);
                    return "instance" === n ? (r = s, !1) : s ? $.isFunction(s[n]) && "_" !== n.charAt(0) ? (e = s[n].apply(s, o), e !== s && void 0 !== e ? (r = e && e.jquery ? r.pushStack(e.get()) : e, !1) : void 0) : $.error("no such method '" + n + "' for " + t + " widget instance") : $.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + n + "'")
                }) : this.each(function() {
                    var t = $.data(this, i);
                    t ? (t.option(n || {}), t._init && t._init()) : $.data(this, i, new e(n, this))
                }), r
            }
        }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function(t, e) { e = $(e || this.defaultElement || this)[0], this.element = $(e), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = $(), this.hoverable = $(), this.focusable = $(), e !== this && ($.data(e, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === e && this.destroy() } }), this.document = $(e.style ? e.ownerDocument : e.document || e), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this.options = $.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
            _getCreateOptions: $.noop,
            _getCreateEventData: $.noop,
            _create: $.noop,
            _init: $.noop,
            destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
            _destroy: $.noop,
            widget: function() {
                return this.element
            },
            option: function(t, e) {
                var i = t,
                    n, s, o;
                if (0 === arguments.length) return $.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (i = {}, n = t.split("."), t = n.shift(), n.length) {
                        for (s = i[t] = $.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                        s[t] = e
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        i[t] = e
                    }
                return this._setOptions(i), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({ disabled: !1 })
            },
            disable: function() {
                return this._setOptions({ disabled: !0 })
            },
            _on: function(t, e, i) {
                var n, s = this;
                "boolean" != typeof t && (i = e, e = t, t = !1), i ? (e = n = $(e), this.bindings = this.bindings.add(e)) : (i = e, e = this.element, n = this.widget()), $.each(i, function(i, o) {
                    function r() {
                        return t || s.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                    }
                    "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || $.guid++);
                    var a = i.match(/^([\w:-]*)\s*(.*)$/),
                        l = a[1] + s.eventNamespace,
                        h = a[2];
                    h ? n.delegate(h, l, r) : e.bind(l, r)
                })
            },
            _off: function(t, e) { e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = $(this.bindings.not(t).get()), this.focusable = $(this.focusable.not(t).get()), this.hoverable = $(this.hoverable.not(t).get()) },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { $(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { $(t.currentTarget).removeClass("ui-state-hover") } }) },
            _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { $(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { $(t.currentTarget).removeClass("ui-state-focus") } }) },
            _trigger: function(t, e, i) {
                var n, s, o = this.options[t];
                if (i = i || {}, e = $.Event(e), e.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], s = e.originalEvent)
                    for (n in s) n in e || (e[n] = s[n]);
                return this.element.trigger(e, i), !($.isFunction(o) && o.apply(this.element[0], [e].concat(i)) === !1 || e.isDefaultPrevented())
            }
        }, $.each({ show: "fadeIn", hide: "fadeOut" }, function(t, e) {
            $.Widget.prototype["_" + t] = function(i, n, s) {
                "string" == typeof n && (n = { effect: n });
                var o, r = n ? n === !0 || "number" == typeof n ? e : n.effect || e : t;
                n = n || {}, "number" == typeof n && (n = { duration: n }), o = !$.isEmptyObject(n), n.complete = s, n.delay && i.delay(n.delay), o && $.effects && $.effects.effect[r] ? i[t](n) : r !== t && i[r] ? i[r](n.duration, n.easing, s) : i.queue(function(e) { $(this)[t](), s && s.call(i[0]), e() })
            }
        });
        var c = $.widget,
            u = !1;
        $(document).mouseup(function() { u = !1 });
        var d = $.widget("ui.mouse", {
            version: "1.11.2",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(e) {
                    return !0 === $.data(e.target, t.widgetName + ".preventClickEvent") ? ($.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
            _mouseDown: function(t) {
                if (!u) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var e = this,
                        i = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? $(t.target).closest(this.options.cancel).length : !1;
                    return i && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { e.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === $.data(t.target, this.widgetName + ".preventClickEvent") && $.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return e._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return e._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), u = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && $.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), u = !1, !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        });
        ! function() {
            function t(t, e, i) {
                return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
            }

            function e(t, e) {
                return parseInt($.css(t, e), 10) || 0
            }

            function i(t) {
                var e = t[0];
                return 9 === e.nodeType ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } } : $.isWindow(e) ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } } : e.preventDefault ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } } : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() }
            }
            $.ui = $.ui || {};
            var n, s, o = Math.max,
                r = Math.abs,
                a = Math.round,
                l = /left|center|right/,
                h = /top|center|bottom/,
                c = /[\+\-]\d+(\.[\d]+)?%?/,
                u = /^\w+/,
                d = /%$/,
                p = $.fn.position;
            $.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, e, i = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = i.children()[0];
                        return $("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), e = s.offsetWidth, t === e && (e = i[0].clientWidth), i.remove(), n = t - e
                    },
                    getScrollInfo: function(t) {
                        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth,
                            s = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                        return { width: s ? $.position.scrollbarWidth() : 0, height: n ? $.position.scrollbarWidth() : 0 }
                    },
                    getWithinInfo: function(t) {
                        var e = $(t || window),
                            i = $.isWindow(e[0]),
                            n = !!e[0] && 9 === e[0].nodeType;
                        return { element: e, isWindow: i, isDocument: n, offset: e.offset() || { left: 0, top: 0 }, scrollLeft: e.scrollLeft(), scrollTop: e.scrollTop(), width: i || n ? e.width() : e.outerWidth(), height: i || n ? e.height() : e.outerHeight() }
                    }
                }, $.fn.position = function(n) {
                    if (!n || !n.of) return p.apply(this, arguments);
                    n = $.extend({}, n);
                    var d, f, m, g, v, b, y = $(n.of),
                        _ = $.position.getWithinInfo(n.within),
                        w = $.position.getScrollInfo(_),
                        x = (n.collision || "flip").split(" "),
                        C = {};
                    return b = i(y), y[0].preventDefault && (n.at = "left top"), f = b.width, m = b.height, g = b.offset, v = $.extend({}, g), $.each(["my", "at"], function() {
                        var t = (n[this] || "").split(" "),
                            e, i;
                        1 === t.length && (t = l.test(t[0]) ? t.concat(["center"]) : h.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = l.test(t[0]) ? t[0] : "center", t[1] = h.test(t[1]) ? t[1] : "center", e = c.exec(t[0]), i = c.exec(t[1]), C[this] = [e ? e[0] : 0, i ? i[0] : 0], n[this] = [u.exec(t[0])[0], u.exec(t[1])[0]]
                    }), 1 === x.length && (x[1] = x[0]), "right" === n.at[0] ? v.left += f : "center" === n.at[0] && (v.left += f / 2), "bottom" === n.at[1] ? v.top += m : "center" === n.at[1] && (v.top += m / 2), d = t(C.at, f, m), v.left += d[0], v.top += d[1], this.each(function() {
                        var i, l, h = $(this),
                            c = h.outerWidth(),
                            u = h.outerHeight(),
                            p = e(this, "marginLeft"),
                            b = e(this, "marginTop"),
                            k = c + p + e(this, "marginRight") + w.width,
                            T = u + b + e(this, "marginBottom") + w.height,
                            D = $.extend({}, v),
                            I = t(C.my, h.outerWidth(), h.outerHeight());
                        "right" === n.my[0] ? D.left -= c : "center" === n.my[0] && (D.left -= c / 2), "bottom" === n.my[1] ? D.top -= u : "center" === n.my[1] && (D.top -= u / 2), D.left += I[0], D.top += I[1], s || (D.left = a(D.left), D.top = a(D.top)), i = { marginLeft: p, marginTop: b }, $.each(["left", "top"], function(t, e) { $.ui.position[x[t]] && $.ui.position[x[t]][e](D, { targetWidth: f, targetHeight: m, elemWidth: c, elemHeight: u, collisionPosition: i, collisionWidth: k, collisionHeight: T, offset: [d[0] + I[0], d[1] + I[1]], my: n.my, at: n.at, within: _, elem: h }) }), n.using && (l = function(t) {
                            var e = g.left - D.left,
                                i = e + f - c,
                                s = g.top - D.top,
                                a = s + m - u,
                                l = { target: { element: y, left: g.left, top: g.top, width: f, height: m }, element: { element: h, left: D.left, top: D.top, width: c, height: u }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle" };
                            c > f && r(e + i) < f && (l.horizontal = "center"), u > m && r(s + a) < m && (l.vertical = "middle"), o(r(e), r(i)) > o(r(s), r(a)) ? l.important = "horizontal" : l.important = "vertical", n.using.call(this, t, l)
                        }), h.offset($.extend(D, { using: l }))
                    })
                }, $.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i = e.within,
                                n = i.isWindow ? i.scrollLeft : i.offset.left,
                                s = i.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                a = n - r,
                                l = r + e.collisionWidth - s - n,
                                h;
                            e.collisionWidth > s ? a > 0 && 0 >= l ? (h = t.left + a + e.collisionWidth - s - n, t.left += a - h) : l > 0 && 0 >= a ? t.left = n : a > l ? t.left = n + s - e.collisionWidth : t.left = n : a > 0 ? t.left += a : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i = e.within,
                                n = i.isWindow ? i.scrollTop : i.offset.top,
                                s = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                a = n - r,
                                l = r + e.collisionHeight - s - n,
                                h;
                            e.collisionHeight > s ? a > 0 && 0 >= l ? (h = t.top + a + e.collisionHeight - s - n, t.top += a - h) : l > 0 && 0 >= a ? t.top = n : a > l ? t.top = n + s - e.collisionHeight : t.top = n : a > 0 ? t.top += a : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i = e.within,
                                n = i.offset.left + i.scrollLeft,
                                s = i.width,
                                o = i.isWindow ? i.scrollLeft : i.offset.left,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = a - o,
                                h = a + e.collisionWidth - s - o,
                                c = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                d = -2 * e.offset[0],
                                p, f;
                            0 > l ? (p = t.left + c + u + d + e.collisionWidth - s - n, (0 > p || p < r(l)) && (t.left += c + u + d)) : h > 0 && (f = t.left - e.collisionPosition.marginLeft + c + u + d - o, (f > 0 || r(f) < h) && (t.left += c + u + d))
                        },
                        top: function(t, e) {
                            var i = e.within,
                                n = i.offset.top + i.scrollTop,
                                s = i.height,
                                o = i.isWindow ? i.scrollTop : i.offset.top,
                                a = t.top - e.collisionPosition.marginTop,
                                l = a - o,
                                h = a + e.collisionHeight - s - o,
                                c = "top" === e.my[1],
                                u = c ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                p = -2 * e.offset[1],
                                f, m;
                            0 > l ? (m = t.top + u + d + p + e.collisionHeight - s - n, t.top + u + d + p > l && (0 > m || m < r(l)) && (t.top += u + d + p)) : h > 0 && (f = t.top - e.collisionPosition.marginTop + u + d + p - o, t.top + u + d + p > h && (f > 0 || r(f) < h) && (t.top += u + d + p))
                        }
                    },
                    flipfit: { left: function() { $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments) }, top: function() { $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments) } }
                },
                function() {
                    var t, e, i, n, o, r = document.getElementsByTagName("body")[0],
                        a = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), i = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, r && $.extend(i, { position: "absolute", left: "-1000px", top: "-1000px" });
                    for (o in i) t.style[o] = i[o];
                    t.appendChild(a), e = r || document.documentElement, e.insertBefore(t, e.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", n = $(a).offset().left, s = n > 10 && 11 > n, t.innerHTML = "", e.removeChild(t)
                }()
        }();
        var p = $.ui.position,
            f = $.widget("ui.accordion", {
                version: "1.11.2",
                options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
                hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
                showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
                _create: function() {
                    var t = this.options;
                    this.prevShow = this.prevHide = $(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
                },
                _getCreateEventData: function() {
                    return { header: this.active, panel: this.active.length ? this.active.next() : $() }
                },
                _createIcons: function() {
                    var t = this.options.icons;
                    t && ($("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() },
                _destroy: function() {
                    var t;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
                },
                _keydown: function(t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var e = $.ui.keyCode,
                            i = this.headers.length,
                            n = this.headers.index(t.target),
                            s = !1;
                        switch (t.keyCode) {
                            case e.RIGHT:
                            case e.DOWN:
                                s = this.headers[(n + 1) % i];
                                break;
                            case e.LEFT:
                            case e.UP:
                                s = this.headers[(n - 1 + i) % i];
                                break;
                            case e.SPACE:
                            case e.ENTER:
                                this._eventHandler(t);
                                break;
                            case e.HOME:
                                s = this.headers[0];
                                break;
                            case e.END:
                                s = this.headers[i - 1]
                        }
                        s && ($(t.target).attr("tabIndex", -1), $(s).attr("tabIndex", 0), s.focus(), t.preventDefault())
                    }
                },
                _panelKeyDown: function(t) { t.keyCode === $.ui.keyCode.UP && t.ctrlKey && $(t.currentTarget).prev().focus() },
                refresh: function() {
                    var t = this.options;
                    this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = $()) : t.active === !1 ? this._activate(0) : this.active.length && !$.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = $()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                },
                _processPanels: function() {
                    var t = this.headers,
                        e = this.panels;
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
                },
                _refresh: function() {
                    var t, e = this.options,
                        i = e.heightStyle,
                        n = this.element.parent();
                    this.active = this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                        var t = $(this),
                            e = t.uniqueId().attr("id"),
                            i = t.next(),
                            n = i.uniqueId().attr("id");
                        t.attr("aria-controls", n), i.attr("aria-labelledby", e)
                    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === i ? (t = n.height(), this.element.siblings(":visible").each(function() {
                        var e = $(this),
                            i = e.css("position");
                        "absolute" !== i && "fixed" !== i && (t -= e.outerHeight(!0))
                    }), this.headers.each(function() { t -= $(this).outerHeight(!0) }), this.headers.next().each(function() { $(this).height(Math.max(0, t - $(this).innerHeight() + $(this).height())) }).css("overflow", "auto")) : "auto" === i && (t = 0, this.headers.next().each(function() { t = Math.max(t, $(this).css("height", "").height()) }).height(t))
                },
                _activate: function(t) {
                    var e = this._findActive(t)[0];
                    e !== this.active[0] && (e = e || this.active[0], this._eventHandler({ target: e, currentTarget: e, preventDefault: $.noop }))
                },
                _findActive: function(t) {
                    return "number" == typeof t ? this.headers.eq(t) : $()
                },
                _setupEvents: function(t) {
                    var e = { keydown: "_keydown" };
                    t && $.each(t.split(" "), function(t, i) { e[i] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, e), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
                },
                _eventHandler: function(t) {
                    var e = this.options,
                        i = this.active,
                        n = $(t.currentTarget),
                        s = n[0] === i[0],
                        o = s && e.collapsible,
                        r = o ? $() : n.next(),
                        a = i.next(),
                        l = { oldHeader: i, oldPanel: a, newHeader: o ? $() : n, newPanel: r };
                    t.preventDefault(), s && !e.collapsible || this._trigger("beforeActivate", t, l) === !1 || (e.active = o ? !1 : this.headers.index(n), this.active = s ? $() : n, this._toggle(l), i.removeClass("ui-accordion-header-active ui-state-active"), e.icons && i.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), s || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && n.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(t) {
                    var e = t.newPanel,
                        i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({ "aria-hidden": "true" }), i.prev().attr("aria-selected", "false"), e.length && i.length ? i.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : e.length && this.headers.filter(function() {
                        return 0 === $(this).attr("tabIndex")
                    }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", tabIndex: 0, "aria-expanded": "true" })
                },
                _animate: function(t, e, i) {
                    var n, s, o, r = this,
                        a = 0,
                        l = t.length && (!e.length || t.index() < e.index()),
                        h = this.options.animate || {},
                        c = l && h.down || h,
                        u = function() { r._toggleComplete(i) };
                    return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || h.easing, o = o || c.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: s, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: s, complete: u, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? a += i.now : "content" !== r.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - a), a = 0) } })) : e.animate(this.hideProps, o, s, u) : t.animate(this.showProps, o, s, u)
                },
                _toggleComplete: function(t) {
                    var e = t.oldPanel;
                    e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
                }
            }),
            m = $.widget("ui.menu", {
                version: "1.11.2",
                defaultElement: "<ul>",
                delay: 300,
                options: { icons: { submenu: "ui-icon-carat-1-e" }, items: "> *", menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
                _create: function() {
                    this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                        "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                        "click .ui-menu-item": function(t) {
                            var e = $(t.target);
                            !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(t) {
                            if (!this.previousFilter) {
                                var e = $(t.currentTarget);
                                e.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, e)
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(t, e) {
                            var i = this.active || this.element.find(this.options.items).eq(0);
                            e || this.focus(t, i)
                        },
                        blur: function(t) { this._delay(function() { $.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = $(this);
                        t.data("ui-menu-submenu-carat") && t.remove()
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(t) {
                    var e, i, n, s, o = !0;
                    switch (t.keyCode) {
                        case $.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case $.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case $.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case $.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case $.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case $.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case $.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case $.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case $.ui.keyCode.ENTER:
                        case $.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case $.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            o = !1, i = this.previousFilter || "", n = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), n === i ? s = !0 : n = i + n, e = this._filterMenuItems(n), e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e, e.length || (n = String.fromCharCode(t.keyCode), e = this._filterMenuItems(n)), e.length ? (this.focus(t, e), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
                    }
                    o && t.preventDefault()
                },
                _activate: function(t) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t)) },
                refresh: function() {
                    var t, e, i = this,
                        n = this.options.icons.submenu,
                        s = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                        var t = $(this),
                            e = t.parent(),
                            i = $("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                        e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                    }), t = s.add(this.element), e = t.find(this.options.items), e.not(".ui-menu-item").each(function() {
                        var t = $(this);
                        i._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                    }), e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return { menu: "menuitem", listbox: "option" }[this.options.role]
                },
                _setOption: function(t, e) { "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e) },
                focus: function(t, e) {
                    var i, n;
                    this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
                },
                _scrollIntoView: function(t) {
                    var e, i, n, s, o, r;
                    this._hasScroll() && (e = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - e - i, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(s + n) : n + r > o && this.activeMenu.scrollTop(s + n - o + r))
                },
                blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, { item: this.active })) },
                _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
                _open: function(t) {
                    var e = $.extend({ of: this.active }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
                },
                collapseAll: function(t, e) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var i = e ? this.element : $(t && t.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i
                    }, this.delay)
                },
                _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") },
                _closeOnDocumentClick: function(t) {
                    return !$(t.target).closest(".ui-menu").length
                },
                _isDivider: function(t) {
                    return !/[^\-\u2014\u2013\s]/.test(t.text())
                },
                collapse: function(t) {
                    var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    e && e.length && (this._close(), this.focus(t, e))
                },
                expand: function(t) {
                    var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
                },
                next: function(t) { this._move("next", "first", t) },
                previous: function(t) { this._move("prev", "last", t) },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(t, e, i) {
                    var n;
                    this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
                },
                nextPage: function(t) {
                    var e, i, n;
                    return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return e = $(this), e.offset().top - i - n < 0
                    }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
                },
                previousPage: function(t) {
                    var e, i, n;
                    return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return e = $(this), e.offset().top - i + n > 0
                    }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(t) {
                    this.active = this.active || $(t.target).closest(".ui-menu-item");
                    var e = { item: this.active };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
                },
                _filterMenuItems: function(t) {
                    var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        i = new RegExp("^" + e, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return i.test($.trim($(this).text()))
                    })
                }
            });
        $.widget("ui.autocomplete", {
            version: "1.11.2",
            defaultElement: "<input>",
            options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, e, i, n = this.element[0].nodeName.toLowerCase(),
                    s = "textarea" === n,
                    o = "input" === n;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(n) {
                        if (this.element.prop("readOnly")) return t = !0, i = !0, void(e = !0);
                        t = !1, i = !1, e = !1;
                        var s = $.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                t = !0, this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                t = !0, this._move("nextPage", n);
                                break;
                            case s.UP:
                                t = !0, this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                t = !0, this._keyEvent("next", n);
                                break;
                            case s.ENTER:
                                this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(n);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                                break;
                            default:
                                e = !0, this._searchTimeout(n)
                        }
                    },
                    keypress: function(i) {
                        if (t) return t = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                        if (!e) {
                            var n = $.ui.keyCode;
                            switch (i.keyCode) {
                                case n.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case n.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case n.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case n.DOWN:
                                    this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function(t) {
                        return i ? (i = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() { this.selectedItem = null, this.previous = this._value() },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur });
                        var e = this.menu.element[0];
                        $(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(i) { i.target === t.element[0] || i.target === e || $.contains(e, i.target) || t.close() })
                        })
                    },
                    menufocus: function(t, e) {
                        var i, n;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { $(t.target).trigger(t.originalEvent) })) : (n = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, { item: n }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), i = e.item.attr("aria-label") || n.value, void(i && $.trim(i).length && (this.liveRegion.children().hide(), $("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n,
                            this._delay(function() { this.previous = n, this.selectedItem = i })), !1 !== this._trigger("select", t, { item: i }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = $("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
            },
            _destroy: function() { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
            _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, e, i = this;
                $.isArray(this.options.source) ? (t = this.options.source, this.source = function(e, i) { i($.ui.autocomplete.filter(t, e.term)) }) : "string" == typeof this.options.source ? (e = this.options.source, this.source = function(t, n) { i.xhr && i.xhr.abort(), i.xhr = $.ajax({ url: e, data: t, dataType: "json", success: function(t) { n(t) }, error: function() { n([]) } }) }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function(t) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
            _response: function() {
                var t = ++this.requestIndex;
                return $.proxy(function(e) { t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading") }, this)
            },
            __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
            close: function(t) { this.cancelSearch = !0, this._close(t) },
            _close: function(t) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
            _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : $.map(t, function(t) {
                    return "string" == typeof t ? { label: t, value: t } : $.extend({}, t, { label: t.label || t.value, value: t.value || t.label })
                })
            },
            _suggest: function(t) {
                var e = this.menu.element.empty();
                this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position($.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, e) {
                var i = this;
                $.each(e, function(e, n) { i._renderItemData(t, n) })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(t, e) {
                return $("<li>").text(e.label).appendTo(t)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), $.extend($.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, e) {
                var i = new RegExp($.ui.autocomplete.escapeRegex(e), "i");
                return $.grep(t, function(t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), $.widget("ui.autocomplete", $.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var e;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), $("<div>").text(e).appendTo(this.liveRegion))
            }
        });
        var g = $.ui.autocomplete,
            v, b = "ui-button ui-widget ui-state-default ui-corner-all",
            y = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            _ = function() {
                var t = $(this);
                setTimeout(function() { t.find(":ui-button").button("refresh") }, 1)
            },
            w = function(t) {
                var e = t.name,
                    i = t.form,
                    n = $([]);
                return e && (e = e.replace(/'/g, "\\'"), n = i ? $(i).find("[name='" + e + "'][type=radio]") : $("[name='" + e + "'][type=radio]", t.ownerDocument).filter(function() {
                    return !this.form
                })), n
            };
        $.widget("ui.button", {
            version: "1.11.2",
            defaultElement: "<button>",
            options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, _), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var t = this,
                    e = this.options,
                    i = "checkbox" === this.type || "radio" === this.type,
                    n = i ? "" : "ui-state-active";
                null === e.label && (e.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(b).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() { e.disabled || this === v && $(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function() { e.disabled || $(this).removeClass(n) }).bind("click" + this.eventNamespace, function(t) { e.disabled && (t.preventDefault(), t.stopImmediatePropagation()) }), this._on({ focus: function() { this.buttonElement.addClass("ui-state-focus") }, blur: function() { this.buttonElement.removeClass("ui-state-focus") } }), i && this.element.bind("change" + this.eventNamespace, function() { t.refresh() }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return e.disabled ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (e.disabled) return !1;
                    $(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                    var i = t.element[0];
                    w(i).not(i).map(function() {
                        return $(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return e.disabled ? !1 : ($(this).addClass("ui-state-active"), v = this, void t.document.one("mouseup", function() { v = null }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return e.disabled ? !1 : void $(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(t) {
                    return e.disabled ? !1 : void((t.keyCode === $.ui.keyCode.SPACE || t.keyCode === $.ui.keyCode.ENTER) && $(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() { $(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) { t.keyCode === $.ui.keyCode.SPACE && $(this).click() })), this._setOption("disabled", e.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var t, e, i;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(b + " ui-state-active " + y).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") },
            _setOption: function(t, e) {
                return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? w(this.element[0]).each(function() { $(this).is(":checked") ? $(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var t = this.buttonElement.removeClass(y),
                    e = $("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    i = this.options.icons,
                    n = i.primary && i.secondary,
                    s = [];
                i.primary || i.secondary ? (this.options.text && s.push("ui-button-text-icon" + (n ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (s.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", $.trim(e)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
            }
        }), $.widget("ui.buttonset", {
            version: "1.11.2",
            options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
            _create: function() { this.element.addClass("ui-buttonset") },
            _init: function() { this.refresh() },
            _setOption: function(t, e) { "disabled" === t && this.buttons.button("option", t, e), this._super(t, e) },
            refresh: function() {
                var t = "rtl" === this.element.css("direction"),
                    e = this.element.find(this.options.items),
                    i = e.filter(":ui-button");
                e.not(":ui-button").button(), i.button("refresh"), this.buttons = e.map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        });
        var x = $.ui.button;
        $.extend($.ui, { datepicker: { version: "1.11.2" } });
        var C;
        $.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return r(this._defaults, t || {}), this
            },
            _attachDatepicker: function(t, e) {
                var i, n, s;
                i = t.nodeName.toLowerCase(), n = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst($(t), n), s.settings = $.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, s) : n && this._inlineDatepicker(t, s)
            },
            _newInst: function(t, e) {
                var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return { id: i, input: t, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: e, dpDiv: e ? s($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv }
            },
            _connectDatepicker: function(t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), $.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var i, n, s, o = this._get(e, "appendText"),
                    r = this._get(e, "isRTL");
                e.append && e.append.remove(), o && (e.append = $("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(e, "buttonText"), s = this._get(e, "buttonImage"), e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({ src: s, alt: n, title: n }) : $("<button type='button'></button>").addClass(this._triggerClass).html(s ? $("<img/>").attr({ src: s, alt: n, title: n }) : n)), t[r ? "before" : "after"](e.trigger), e.trigger.click(function() {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput === t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput !== t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        r = this._get(t, "dateFormat");
                    r.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), $.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, i, n, s) {
                var o, a, l, h, c, u = this._dialogInst;
                return u || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, $.data(this._dialogInput[0], "datepicker", u)), r(u.settings, n || {}), e = e && e.constructor === Date ? this._formatDate(u, e) : e, this._dialogInput.val(e), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (a = document.documentElement.clientWidth, l = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + h, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], "datepicker", u), this
            },
            _destroyDatepicker: function(t) {
                var e, i = $(t),
                    n = $.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), $.removeData(t, "datepicker"), "input" === e ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === e || "span" === e) && i.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(t) {
                var e, i, n = $(t),
                    s = $.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !1, s.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === e || "span" === e) && (i = n.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function(t) {
                var e, i, n = $(t),
                    s = $.data(t, "datepicker");
                n.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !0, s.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === e || "span" === e) && (i = n.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return $.data(t, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, i) {
                var n, s, o, a, l = this._getInst(t);
                return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? $.extend({}, $.datepicker._defaults) : l ? "all" === e ? $.extend({}, l.settings) : this._get(l, e) : null : (n = e || {}, "string" == typeof e && (n = {}, n[e] = i), void(l && (this._curInst === l && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), a = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== a && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, a)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments($(t), l), this._autoSize(l), this._setDate(l, s), this._updateAlternate(l), this._updateDatepicker(l))))
            },
            _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var e, i, n, s = $.datepicker._getInst(t.target),
                    o = !0,
                    r = s.dpDiv.is(".ui-datepicker-rtl");
                if (s._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", s.dpDiv), n[0] && $.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, n[0]), e = $.datepicker._get(s, "onSelect"), e ? (i = $.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [i, s])) : $.datepicker._hideDatepicker(), !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(s, "stepBigMonths") : -$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(s, "stepBigMonths") : +$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(s, "stepBigMonths") : -$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(s, "stepBigMonths") : +$.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else 36 === t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e, i, n = $.datepicker._getInst(t.target);
                return $.datepicker._get(n, "constrainInput") ? (e = $.datepicker._possibleChars($.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !e || e.indexOf(i) > -1) : void 0
            },
            _doKeyUp: function(t) {
                var e, i = $.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try { e = $.datepicker.parseDate($.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, $.datepicker._getFormatConfig(i)), e && ($.datepicker._setDateFromField(i), $.datepicker._updateAlternate(i), $.datepicker._updateDatepicker(i)) } catch (n) {}
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput !== t) {
                    var e, n, s, o, a, l, h;
                    e = $.datepicker._getInst(t), $.datepicker._curInst && $.datepicker._curInst !== e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), n = $.datepicker._get(e, "beforeShow"), s = n ? n.apply(t, [t, e]) : {}, s !== !1 && (r(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight), o = !1, $(t).parents().each(function() {
                        return o |= "fixed" === $(this).css("position"), !o
                    }), a = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] }, $.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), $.datepicker._updateDatepicker(e), a = $.datepicker._checkOffset(e, a, o), e.dpDiv.css({ position: $.datepicker._inDialog && $.blockUI ? "static" : o ? "fixed" : "absolute", display: "none", left: a.left + "px", top: a.top + "px" }), e.inline || (l = $.datepicker._get(e, "showAnim"), h = $.datepicker._get(e, "duration"), e.dpDiv.css("z-index", i($(t)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[l] ? e.dpDiv.show(l, $.datepicker._get(e, "showOptions"), h) : e.dpDiv[l || "show"](l ? h : null), $.datepicker._shouldFocusInput(e) && e.input.focus(), $.datepicker._curInst = e))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, C = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var e, i = this._getNumberOfMonths(t),
                    n = i[1],
                    s = 17,
                    r = t.dpDiv.find("." + this._dayOverClass + " a");
                r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", s * n + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (e = t.yearshtml, setTimeout(function() { e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(t, e, i) {
                var n = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? n - o : 0, e.left -= i && e.left === t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + r ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + n > a && a > n ? Math.abs(e.left + n - a) : 0), e.top -= Math.min(e.top, e.top + s > l && l > s ? Math.abs(s + r) : 0), e
            },
            _findPos: function(t) {
                for (var e, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || $.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
                return e = $(t).offset(), [e.left, e.top]
            },
            _hideDatepicker: function(t) {
                var e, i, n, s, o = this._curInst;
                !o || t && o !== $.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), n = function() { $.datepicker._tidyDialog(o) }, $.effects && ($.effects.effect[e] || $.effects[e]) ? o.dpDiv.hide(e, $.datepicker._get(o, "showOptions"), i, n) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, n), e || n(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
            _checkExternalClick: function(t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                    (e[0].id !== $.datepicker._mainDivId && 0 === e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, e + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
            },
            _gotoToday: function(t) {
                var e, i = $(t),
                    n = this._getInst(i[0]);
                this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (e = new Date, n.selectedDay = e.getDate(), n.drawMonth = n.selectedMonth = e.getMonth(), n.drawYear = n.selectedYear = e.getFullYear()), this._notifyChange(n), this._adjustDate(i)
            },
            _selectMonthYear: function(t, e, i) {
                var n = $(t),
                    s = this._getInst(n[0]);
                s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
            },
            _selectDay: function(t, e, i, n) {
                var s, o = $(t);
                $(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = $("a", n).html(), s.selectedMonth = s.currentMonth = e, s.selectedYear = s.currentYear = i, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
            },
            _clearDate: function(t) {
                var e = $(t);
                this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var i, n = $(t),
                    s = this._getInst(n[0]);
                e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s), i = this._get(s, "onSelect"), i ? i.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e, i, n, s = this._get(t, "altField");
                s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(e, i, this._getFormatConfig(t)), $(s).each(function() { $(this).val(n) }))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if (e = "object" == typeof e ? e.toString() : e + "", "" === e) return null;
                var n, s, o, r = 0,
                    a = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    l = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                    h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    u = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    d = (i ? i.monthNames : null) || this._defaults.monthNames,
                    p = -1,
                    f = -1,
                    m = -1,
                    g = -1,
                    v = !1,
                    b, y = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    _ = function(t) {
                        var i = y(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && i ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = e.substring(r).match(o);
                        if (!a) throw "Missing number at position " + r;
                        return r += a[0].length, parseInt(a[0], 10)
                    },
                    w = function(t, i, n) {
                        var s = -1,
                            o = $.map(y(t) ? n : i, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if ($.each(o, function(t, i) {
                                var n = i[1];
                                return e.substr(r, n.length).toLowerCase() === n.toLowerCase() ? (s = i[0], r += n.length, !1) : void 0
                            }), -1 !== s) return s + 1;
                        throw "Unknown name at position " + r
                    },
                    x = function() {
                        if (e.charAt(r) !== t.charAt(n)) throw "Unexpected literal at position " + r;
                        r++
                    };
                for (n = 0; n < t.length; n++)
                    if (v) "'" !== t.charAt(n) || y("'") ? x() : v = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            m = _("d");
                            break;
                        case "D":
                            w("D", h, c);
                            break;
                        case "o":
                            g = _("o");
                            break;
                        case "m":
                            f = _("m");
                            break;
                        case "M":
                            f = w("M", u, d);
                            break;
                        case "y":
                            p = _("y");
                            break;
                        case "@":
                            b = new Date(_("@")), p = b.getFullYear(), f = b.getMonth() + 1, m = b.getDate();
                            break;
                        case "!":
                            b = new Date((_("!") - this._ticksTo1970) / 1e4), p = b.getFullYear(), f = b.getMonth() + 1, m = b.getDate();
                            break;
                        case "'":
                            y("'") ? x() : v = !0;
                            break;
                        default:
                            x()
                    }
                if (r < e.length && (o = e.substr(r), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
                if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= p ? 0 : -100)), g > -1)
                    for (f = 1, m = g;;) {
                        if (s = this._getDaysInMonth(p, f - 1), s >= m) break;
                        f++, m -= s
                    }
                if (b = this._daylightSavingAdjust(new Date(p, f - 1, m)), b.getFullYear() !== p || b.getMonth() + 1 !== f || b.getDate() !== m) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), s, o);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), r, a);
                                break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += t.charAt(n)
                        }
                return u
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        r = this._getFormatConfig(t);
                    try { o = this.parseDate(i, n, r) || s } catch (a) { n = e ? "" : n }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(t, e, i) {
                var n = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    s = function(e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var n = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o));
                                    break;
                                case "y":
                                case "Y":
                                    s += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o))
                            }
                            l = a.exec(e)
                        }
                        return new Date(s, o, r)
                    },
                    o = null == e || "" === e ? i : "string" == typeof e ? s(e) : "number" == typeof e ? isNaN(e) ? i : n(e) : new Date(e.getTime());
                return o = o && "Invalid Date" === o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() { $.datepicker._adjustDate(i, -e, "M") },
                        next: function() { $.datepicker._adjustDate(i, +e, "M") },
                        hide: function() { $.datepicker._hideDatepicker() },
                        today: function() { $.datepicker._gotoToday(i) },
                        selectDay: function() {
                            return $.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return $.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return $.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, r, a, l, h, c, u, d, p, f, m, g, v, b, y, _, w, x, C, k, T, D, I, S, E, N, P, A, M, H, O, z, W, F, L, R = new Date,
                    j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    B = this._get(t, "isRTL"),
                    q = this._get(t, "showButtonPanel"),
                    Y = this._get(t, "hideIfNoPrevNext"),
                    U = this._get(t, "navigationAsDateFormat"),
                    V = this._getNumberOfMonths(t),
                    K = this._get(t, "showCurrentAtPos"),
                    X = this._get(t, "stepMonths"),
                    G = 1 !== V[0] || 1 !== V[1],
                    Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    J = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    tt = t.drawMonth - K,
                    et = t.drawYear;
                if (0 > tt && (tt += 12, et--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - V[0] * V[1] + 1, Z.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(et, tt, 1)) > e;) tt--, 0 > tt && (tt = 11, et--);
                for (t.drawMonth = tt, t.drawYear = et, i = this._get(t, "prevText"), i = U ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, tt - X, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, et, tt) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = U ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, tt + X, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, et, tt) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : j, r = U ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; x < V[0]; x++) {
                    for (C = "", this.maxRows = 4, k = 0; k < V[1]; k++) {
                        if (T = this._daylightSavingAdjust(new Date(et, tt, t.selectedDay)), D = " ui-corner-all", I = "", G) {
                            if (I += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                                case 0:
                                    I += " ui-datepicker-group-first", D = " ui-corner-" + (B ? "right" : "left");
                                    break;
                                case V[1] - 1:
                                    I += " ui-datepicker-group-last", D = " ui-corner-" + (B ? "left" : "right");
                                    break;
                                default:
                                    I += " ui-datepicker-group-middle", D = ""
                            }
                            I += "'>"
                        }
                        for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? B ? o : n : "") + (/all|right/.test(D) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, tt, et, J, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) E = (w + c) % 7, S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[E] + "'>" + p[E] + "</span></th>";
                        for (I += S + "</tr></thead><tbody>", N = this._getDaysInMonth(et, tt), et === t.selectedYear && tt === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, N)), P = (this._getFirstDayOfMonth(et, tt) - c + 7) % 7, A = Math.ceil((P + N) / 7), M = G && this.maxRows > A ? this.maxRows : A, this.maxRows = M, H = this._daylightSavingAdjust(new Date(et, tt, 1 - P)), O = 0; M > O; O++) {
                            for (I += "<tr>", z = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) W = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], F = H.getMonth() !== tt, L = F && !b || !W[0] || J && J > H || Z && H > Z, z += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && tt === t.selectedMonth && t._keyEvent || y.getTime() === H.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + W[1] + (H.getTime() === Q.getTime() ? " " + this._currentClass : "") + (H.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === j.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                            I += z + "</tr>"
                        }
                        tt++, tt > 11 && (tt = 0, et++), I += "</tbody></table>" + (G ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += I
                    }
                    _ += C
                }
                return _ += h, t._keyEvent = !1, _
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, r, a) {
                var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    b = this._get(t, "showMonthAfterYear"),
                    y = "<div class='ui-datepicker-title'>",
                    _ = "";
                if (o || !g) _ += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    _ += "</select>"
                }
                if (b || (y += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                    }
                return y += this._get(t, "yearSuffix"), b && (y += (!o && g && v ? "" : "&#xa0;") + _), y += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.drawYear + ("Y" === i ? e : 0),
                    s = t.drawMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    r = null,
                    a = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += n), i[1].match(/[+\-].*/) && (a += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || e.getFullYear() <= a)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function(t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick), $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() { "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t) }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        }, $.datepicker = new n, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.11.2";
        var k = $.datepicker;
        $.widget("ui.draggable", $.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "drag",
            options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
            _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit() },
            _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var e = this.options;
                return this._blurActiveElement(t), this.helper || e.disabled || $(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(e.iframeFix === !0 ? "iframe" : e.iframeFix), !0) : !1)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = $(this);
                    return $("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
            _blurActiveElement: function(t) {
                var e = this.document[0];
                if (this.handleElement.is(t.target)) try { e.activeElement && "body" !== e.activeElement.nodeName.toLowerCase() && $(e.activeElement).blur() } catch (i) {}
            },
            _mouseStart: function(t) {
                var e = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === $(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager && !e.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
            _mouseDrag: function(t, e) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                    var i = this._uiHash();
                    if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", $.ui.ddmanager && $.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var e = this,
                    i = !1;
                return $.ui.ddmanager && !this.options.dropBehaviour && (i = $.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || $.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { e._trigger("stop", t) !== !1 && e._clear() }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), $.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!$(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle") },
            _removeHandleClassName: function() { this.handleElement.removeClass("ui-draggable-handle") },
            _createHelper: function(t) {
                var e = this.options,
                    i = $.isFunction(e.helper),
                    n = i ? $(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
            _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    e = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== e && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
            },
            _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
            _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
            _setContainment: function() {
                var t, e, i, n = this.options,
                    s = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, $(s).width() - this.helperProportions.width - this.margins.left, ($(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), e = $(n.containment), i = e[0], void(i && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, r = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return a && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), { top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left) }
            },
            _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
            _normalizeRightBottom: function() { "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto")) },
            _trigger: function(t, e, i) {
                return i = i || this._uiHash(), $.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), $.Widget.prototype._trigger.call(this, t, e, i)
            },
            plugins: {},
            _uiHash: function() {
                return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs }
            }
        }), $.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, e, i) {
                var n = $.extend({}, e, { item: i.element });
                i.sortables = [], $(i.options.connectToSortable).each(function() {
                    var e = $(this).sortable("instance");
                    e && !e.options.disabled && (i.sortables.push(e), e.refreshPositions(), e._trigger("activate", t, n))
                })
            },
            stop: function(t, e, i) {
                var n = $.extend({}, e, { item: i.element });
                i.cancelHelperRemoval = !1, $.each(i.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = { position: e.placeholder.css("position"), top: e.placeholder.css("top"), left: e.placeholder.css("left") }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                })
            },
            drag: function(t, e, i) {
                $.each(i.sortables, function() {
                    var n = !1,
                        s = this;
                    s.positionAbs = i.positionAbs, s.helperProportions = i.helperProportions, s.offset.click = i.offset.click, s._intersectsWith(s.containerCache) && (n = !0, $.each(i.sortables, function() {
                        return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== s && this._intersectsWith(this.containerCache) && $.contains(s.element[0], this.element[0]) && (n = !1), n
                    })), n ? (s.isOver || (s.isOver = 1, s.currentItem = e.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function() {
                        return e.helper[0]
                    }, t.target = s.currentItem[0], s._mouseCapture(t, !0), s._mouseStart(t, !0, !0), s.offset.click.top = i.offset.click.top, s.offset.click.left = i.offset.click.left, s.offset.parent.left -= i.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= i.offset.parent.top - s.offset.parent.top, i._trigger("toSortable", t), i.dropped = s.element, $.each(i.sortables, function() { this.refreshPositions() }), i.currentItem = i.element, s.fromOutside = i), s.currentItem && (s._mouseDrag(t), e.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", t, s._uiHash(s)), s._mouseStop(t, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), i._refreshOffsets(t), e.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, $.each(i.sortables, function() { this.refreshPositions() }))
                })
            }
        }), $.ui.plugin.add("draggable", "cursor", {
            start: function(t, e, i) {
                var n = $("body"),
                    s = i.options;
                n.css("cursor") && (s._cursor = n.css("cursor")), n.css("cursor", s.cursor)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._cursor && $("body").css("cursor", n._cursor)
            }
        }), $.ui.plugin.add("draggable", "opacity", {
            start: function(t, e, i) {
                var n = $(e.helper),
                    s = i.options;
                n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._opacity && $(e.helper).css("opacity", n._opacity)
            }
        }), $.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
            drag: function(t, e, i) {
                var n = i.options,
                    s = !1,
                    o = i.scrollParentNotHidden[0],
                    r = i.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = s = o.scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = s = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - $(r).scrollTop() < n.scrollSensitivity ? s = $(r).scrollTop($(r).scrollTop() - n.scrollSpeed) : $(window).height() - (t.pageY - $(r).scrollTop()) < n.scrollSensitivity && (s = $(r).scrollTop($(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - $(r).scrollLeft() < n.scrollSensitivity ? s = $(r).scrollLeft($(r).scrollLeft() - n.scrollSpeed) : $(window).width() - (t.pageX - $(r).scrollLeft()) < n.scrollSensitivity && (s = $(r).scrollLeft($(r).scrollLeft() + n.scrollSpeed)))), s !== !1 && $.ui.ddmanager && !n.dropBehaviour && $.ui.ddmanager.prepareOffsets(i, t)
            }
        }), $.ui.plugin.add("draggable", "snap", {
            start: function(t, e, i) {
                var n = i.options;
                i.snapElements = [], $(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = $(this),
                        e = t.offset();
                    this !== i.element[0] && i.snapElements.push({ item: this, width: t.outerWidth(), height: t.outerHeight(), top: e.top, left: e.left })
                })
            },
            drag: function(t, e, i) {
                var n, s, o, r, a, l, h, c, u, d, p = i.options,
                    f = p.snapTolerance,
                    m = e.offset.left,
                    g = m + i.helperProportions.width,
                    v = e.offset.top,
                    b = v + i.helperProportions.height;
                for (u = i.snapElements.length - 1; u >= 0; u--) a = i.snapElements[u].left - i.margins.left, l = a + i.snapElements[u].width, h = i.snapElements[u].top - i.margins.top, c = h + i.snapElements[u].height, a - f > g || m > l + f || h - f > b || v > c + f || !$.contains(i.snapElements[u].item.ownerDocument, i.snapElements[u].item) ? (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, $.extend(i._uiHash(), { snapItem: i.snapElements[u].item })), i.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (n = Math.abs(h - b) <= f, s = Math.abs(c - v) <= f, o = Math.abs(a - g) <= f, r = Math.abs(l - m) <= f, n && (e.position.top = i._convertPositionTo("relative", { top: h - i.helperProportions.height, left: 0 }).top), s && (e.position.top = i._convertPositionTo("relative", { top: c, left: 0 }).top), o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: a - i.helperProportions.width }).left), r && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l }).left)), d = n || s || o || r, "outer" !== p.snapMode && (n = Math.abs(h - v) <= f, s = Math.abs(c - b) <= f, o = Math.abs(a - m) <= f, r = Math.abs(l - g) <= f, n && (e.position.top = i._convertPositionTo("relative", { top: h, left: 0 }).top), s && (e.position.top = i._convertPositionTo("relative", { top: c - i.helperProportions.height, left: 0 }).top), o && (e.position.left = i._convertPositionTo("relative", { top: 0, left: a }).left), r && (e.position.left = i._convertPositionTo("relative", { top: 0, left: l - i.helperProportions.width }).left)), !i.snapElements[u].snapping && (n || s || o || r || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, $.extend(i._uiHash(), { snapItem: i.snapElements[u].item })), i.snapElements[u].snapping = n || s || o || r || d)
            }
        }), $.ui.plugin.add("draggable", "stack", {
            start: function(t, e, i) {
                var n, s = i.options,
                    o = $.makeArray($(s.stack)).sort(function(t, e) {
                        return (parseInt($(t).css("zIndex"), 10) || 0) - (parseInt($(e).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt($(o[0]).css("zIndex"), 10) || 0, $(o).each(function(t) { $(this).css("zIndex", n + t) }), this.css("zIndex", n + o.length))
            }
        }), $.ui.plugin.add("draggable", "zIndex", {
            start: function(t, e, i) {
                var n = $(e.helper),
                    s = i.options;
                n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
            },
            stop: function(t, e, i) {
                var n = i.options;
                n._zIndex && $(e.helper).css("zIndex", n._zIndex)
            }
        });
        var T = $.ui.draggable;
        $.widget("ui.resizable", $.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "resize",
            options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
            _num: function(t) {
                return parseInt(t, 10) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseInt(t, 10))
            },
            _hasScroll: function(t, e) {
                if ("hidden" === $(t).css("overflow")) return !1;
                var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                    n = !1;
                return t[i] > 0 ? !0 : (t[i] = 1, n = t[i] > 0, t[i] = 0, n)
            },
            _create: function() {
                var t, e, i, n, s, o = this,
                    r = this.options;
                if (this.element.addClass("ui-resizable"), $.extend(this, {
                        _aspectRatio: !!r.aspectRatio,
                        aspectRatio: r.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = r.handles || ($(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, e = 0; e < t.length; e++) i = $.trim(t[e]), s = "ui-resizable-" + i, n = $("<div class='ui-resizable-handle " + s + "'></div>"), n.css({ zIndex: r.zIndex }), "se" === i && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(n);
                this._renderAxis = function(t) {
                    var e, i, n, s;
                    t = t || this.element;
                    for (e in this.handles) this.handles[e].constructor === String && (this.handles[e] = this.element.children(this.handles[e]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (i = $(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), n = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(n, s), this._proportionallyResize()), $(this.handles[e]).length
                }, this._renderAxis(this.element), this._handles = $(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() { o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se") }), r.autoHide && (this._handles.hide(), $(this.element).addClass("ui-resizable-autohide").mouseenter(function() { r.disabled || ($(this).removeClass("ui-resizable-autohide"), o._handles.show()) }).mouseleave(function() { r.disabled || o.resizing || ($(this).addClass("ui-resizable-autohide"), o._handles.hide()) })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, e = function(t) { $(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() };
                return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({ position: t.css("position"), width: t.outerWidth(), height: t.outerHeight(), top: t.css("top"), left: t.css("left") }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var e, i, n = !1;
                for (e in this.handles) i = $(this.handles[e])[0], (i === t.target || $.contains(i, t.target)) && (n = !0);
                return !this.options.disabled && n
            },
            _mouseStart: function(t) {
                var e, i, n, s = this.options,
                    o = this.element;
                return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += $(s.containment).scrollLeft() || 0, i += $(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: e, top: i }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalPosition = { left: e, top: i }, this.originalMousePosition = { left: t.pageX, top: t.pageY }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var e, i, n = this.originalMousePosition,
                    s = this.axis,
                    o = t.pageX - n.left || 0,
                    r = t.pageY - n.top || 0,
                    a = this._change[s];
                return this._updatePrevProperties(), a ? (e = a.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), $.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var e, i, n, s, o, r, a, l = this.options,
                    h = this;
                return this._helper && (e = this._proportionallyResizeElements, i = e.length && /textarea/i.test(e[0].nodeName), n = i && this._hasScroll(e[0], "left") ? 0 : h.sizeDiff.height, s = i ? 0 : h.sizeDiff.width, o = { width: h.helper.width() - s, height: h.helper.height() - n }, r = parseInt(h.element.css("left"), 10) + (h.position.left - h.originalPosition.left) || null, a = parseInt(h.element.css("top"), 10) + (h.position.top - h.originalPosition.top) || null, l.animate || this.element.css($.extend(o, { top: a, left: r })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !l.animate && this._proportionallyResize()), $("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, o, r = this.options;
                o = { minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), n && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
                return { height: i[0] + i[2], width: i[1] + i[3] }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
            },
            _renderProxy: function() {
                var t = this.element,
                    e = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++e.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return { width: this.originalSize.width + e }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return { left: n.left + e, width: i.width - e }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return { top: s.top + i, height: n.height - i }
                },
                s: function(t, e, i) {
                    return { height: this.originalSize.height + i }
                },
                se: function(t, e, i) {
                    return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                sw: function(t, e, i) {
                    return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                },
                ne: function(t, e, i) {
                    return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
                },
                nw: function(t, e, i) {
                    return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
                }
            },
            _propagate: function(t, e) { $.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui()) },
            plugins: {},
            ui: function() {
                return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition }
            }
        }), $.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var e = $(this).resizable("instance"),
                    i = e.options,
                    n = e._proportionallyResizeElements,
                    s = n.length && /textarea/i.test(n[0].nodeName),
                    o = s && e._hasScroll(n[0], "left") ? 0 : e.sizeDiff.height,
                    r = s ? 0 : e.sizeDiff.width,
                    a = { width: e.size.width - r, height: e.size.height - o },
                    l = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
                    h = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
                e.element.animate($.extend(a, h && l ? { top: h, left: l } : {}), {
                    duration: i.animateDuration,
                    easing: i.animateEasing,
                    step: function() {
                        var i = { width: parseInt(e.element.css("width"), 10), height: parseInt(e.element.css("height"), 10), top: parseInt(e.element.css("top"), 10), left: parseInt(e.element.css("left"), 10) };
                        n && n.length && $(n[0]).css({ width: i.width, height: i.height }), e._updateCache(i), e._propagate("resize", t)
                    }
                })
            }
        }), $.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, e, i, n, s, o, r, a = $(this).resizable("instance"),
                    l = a.options,
                    h = a.element,
                    c = l.containment,
                    u = c instanceof $ ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
                u && (a.containerElement = $(u), /document/.test(c) || c === document ? (a.containerOffset = { left: 0, top: 0 }, a.containerPosition = { left: 0, top: 0 }, a.parentData = { element: $(document), left: 0, top: 0, width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight }) : (t = $(u), e = [], $(["Top", "Right", "Left", "Bottom"]).each(function(i, n) { e[i] = a._num(t.css("padding" + n)) }), a.containerOffset = t.offset(), a.containerPosition = t.position(), a.containerSize = { height: t.innerHeight() - e[3], width: t.innerWidth() - e[1] }, i = a.containerOffset, n = a.containerSize.height, s = a.containerSize.width, o = a._hasScroll(u, "left") ? u.scrollWidth : s, r = a._hasScroll(u) ? u.scrollHeight : n, a.parentData = { element: u, left: i.left, top: i.top, width: o, height: r }))
            },
            resize: function(t) {
                var e, i, n, s, o = $(this).resizable("instance"),
                    r = o.options,
                    a = o.containerOffset,
                    l = o.position,
                    h = o._aspectRatio || t.shiftKey,
                    c = { top: 0, left: 0 },
                    u = o.containerElement,
                    d = !0;
                u[0] !== document && /static/.test(u.css("position")) && (c = a), l.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), h && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = r.helper ? a.left : 0), l.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), h && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? a.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), n && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - a.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - a.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, h && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, h && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
            },
            stop: function() {
                var t = $(this).resizable("instance"),
                    e = t.options,
                    i = t.containerOffset,
                    n = t.containerPosition,
                    s = t.containerElement,
                    o = $(t.helper),
                    r = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    l = o.outerHeight() - t.sizeDiff.height;
                t._helper && !e.animate && /relative/.test(s.css("position")) && $(this).css({ left: r.left - n.left - i.left, width: a, height: l }), t._helper && !e.animate && /static/.test(s.css("position")) && $(this).css({ left: r.left - n.left - i.left, width: a, height: l })
            }
        }), $.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = $(this).resizable("instance"),
                    e = t.options,
                    i = function(t) {
                        $(t).each(function() {
                            var t = $(this);
                            t.data("ui-resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) })
                        })
                    };
                "object" != typeof e.alsoResize || e.alsoResize.parentNode ? i(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], i(e.alsoResize)) : $.each(e.alsoResize, function(t) { i(t) })
            },
            resize: function(t, e) {
                var i = $(this).resizable("instance"),
                    n = i.options,
                    s = i.originalSize,
                    o = i.originalPosition,
                    r = { height: i.size.height - s.height || 0, width: i.size.width - s.width || 0, top: i.position.top - o.top || 0, left: i.position.left - o.left || 0 },
                    a = function(t, i) {
                        $(t).each(function() {
                            var t = $(this),
                                n = $(this).data("ui-resizable-alsoresize"),
                                s = {},
                                o = i && i.length ? i : t.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            $.each(o, function(t, e) {
                                var i = (n[e] || 0) + (r[e] || 0);
                                i && i >= 0 && (s[e] = i || null)
                            }), t.css(s)
                        })
                    };
                "object" != typeof n.alsoResize || n.alsoResize.nodeType ? a(n.alsoResize) : $.each(n.alsoResize, function(t, e) { a(t, e) })
            },
            stop: function() { $(this).removeData("resizable-alsoresize") }
        }), $.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = $(this).resizable("instance"),
                    e = t.options,
                    i = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = $(this).resizable("instance");
                t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width })
            },
            stop: function() {
                var t = $(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), $.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, e = $(this).resizable("instance"),
                    i = e.options,
                    n = e.size,
                    s = e.originalSize,
                    o = e.originalPosition,
                    r = e.axis,
                    a = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    l = a[0] || 1,
                    h = a[1] || 1,
                    c = Math.round((n.width - s.width) / l) * l,
                    u = Math.round((n.height - s.height) / h) * h,
                    d = s.width + c,
                    p = s.height + u,
                    f = i.maxWidth && i.maxWidth < d,
                    m = i.maxHeight && i.maxHeight < p,
                    g = i.minWidth && i.minWidth > d,
                    v = i.minHeight && i.minHeight > p;
                i.grid = a, g && (d += l), v && (p += h), f && (d -= l), m && (p -= h), /^(se|s|e)$/.test(r) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(r) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((0 >= p - h || 0 >= d - l) && (t = e._getPaddingPlusBorderDimensions(this)), p - h > 0 ? (e.size.height = p, e.position.top = o.top - u) : (p = h - t.height, e.size.height = p, e.position.top = o.top + s.height - p), d - l > 0 ? (e.size.width = d, e.position.left = o.left - c) : (d = h - t.height, e.size.width = d, e.position.left = o.left + s.width - d))
            }
        });
        var D = $.ui.resizable,
            I = $.widget("ui.dialog", {
                version: "1.11.2",
                options: {
                    appendTo: "body",
                    autoOpen: !0,
                    buttons: [],
                    closeOnEscape: !0,
                    closeText: "Close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: null,
                    maxWidth: null,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(t) {
                            var e = $(this).css(t).offset().top;
                            0 > e && $(this).css("top", t.top - e)
                        }
                    },
                    resizable: !0,
                    show: null,
                    title: null,
                    width: 300,
                    beforeClose: null,
                    close: null,
                    drag: null,
                    dragStart: null,
                    dragStop: null,
                    focus: null,
                    open: null,
                    resize: null,
                    resizeStart: null,
                    resizeStop: null
                },
                sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
                resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
                _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && $.fn.draggable && this._makeDraggable(), this.options.resizable && $.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
                _init: function() { this.options.autoOpen && this.open() },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t.jquery || t.nodeType) ? $(t) : this.document.find(t || "body").eq(0)
                },
                _destroy: function() {
                    var t, e = this.originalPosition;
                    this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                },
                widget: function() {
                    return this.uiDialog
                },
                disable: $.noop,
                enable: $.noop,
                close: function(t) {
                    var e, i = this;
                    if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try { e = this.document[0].activeElement, e && "body" !== e.nodeName.toLowerCase() && $(e).blur() } catch (n) {}
                        this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", t) })
                    }
                },
                isOpen: function() {
                    return this._isOpen
                },
                moveToTop: function() { this._moveToTop() },
                _moveToTop: function(t, e) {
                    var i = !1,
                        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +$(this).css("z-index")
                        }).get(),
                        s = Math.max.apply(null, n);
                    return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !e && this._trigger("focus", t), i
                },
                open: function() {
                    var t = this;
                    return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = $(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { t._focusTabbable(), t._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open"))
                },
                _focusTabbable: function() {
                    var t = this._focusedElement;
                    t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
                },
                _keepFocus: function(t) {
                    function e() {
                        var t = this.document[0].activeElement,
                            e = this.uiDialog[0] === t || $.contains(this.uiDialog[0], t);
                        e || this._focusTabbable()
                    }
                    t.preventDefault(), e.call(this), this._delay(e)
                },
                _createWrapper: function() {
                    this.uiDialog = $("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                        keydown: function(t) {
                            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === $.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                            if (t.keyCode === $.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                                var e = this.uiDialog.find(":tabbable"),
                                    i = e.filter(":first"),
                                    n = e.filter(":last");
                                t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() { n.focus() }), t.preventDefault()) : (this._delay(function() { i.focus() }), t.preventDefault())
                            }
                        },
                        mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
                    }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
                },
                _createTitlebar: function() {
                    var t;
                    this.uiDialogTitlebar = $("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, { mousedown: function(t) { $(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }), this.uiDialogTitlebarClose = $("<button type='button'></button>").button({ label: this.options.closeText, icons: { primary: "ui-icon-closethick" }, text: !1 }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), t = $("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({ "aria-labelledby": t.attr("id") })
                },
                _title: function(t) { this.options.title || t.html("&#160;"), t.text(this.options.title) },
                _createButtonPane: function() { this.uiDialogButtonPane = $("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = $("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons() },
                _createButtons: function() {
                    var t = this,
                        e = this.options.buttons;
                    return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), $.isEmptyObject(e) || $.isArray(e) && !e.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : ($.each(e, function(e, i) {
                        var n, s;
                        i = $.isFunction(i) ? { click: i, text: e } : i, i = $.extend({ type: "button" }, i), n = i.click, i.click = function() { n.apply(t.element[0], arguments) }, s = { icons: i.icons, text: i.showText }, delete i.icons, delete i.showText, $("<button></button>", i).button(s).appendTo(t.uiButtonSet)
                    }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
                },
                _makeDraggable: function() {
                    function t(t) {
                        return { position: t.position, offset: t.offset }
                    }
                    var e = this,
                        i = this.options;
                    this.uiDialog.draggable({
                        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                        handle: ".ui-dialog-titlebar",
                        containment: "document",
                        start: function(i, n) { $(this).addClass("ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, t(n)) },
                        drag: function(i, n) { e._trigger("drag", i, t(n)) },
                        stop: function(n, s) {
                            var o = s.offset.left - e.document.scrollLeft(),
                                r = s.offset.top - e.document.scrollTop();
                            i.position = { my: "left top", at: "left" + (o >= 0 ? "+" : "") + o + " top" + (r >= 0 ? "+" : "") + r, of: e.window }, $(this).removeClass("ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", n, t(s))
                        }
                    })
                },
                _makeResizable: function() {
                    function t(t) {
                        return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size }
                    }
                    var e = this,
                        i = this.options,
                        n = i.resizable,
                        s = this.uiDialog.css("position"),
                        o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({
                        cancel: ".ui-dialog-content",
                        containment: "document",
                        alsoResize: this.element,
                        maxWidth: i.maxWidth,
                        maxHeight: i.maxHeight,
                        minWidth: i.minWidth,
                        minHeight: this._minHeight(),
                        handles: o,
                        start: function(i, n) { $(this).addClass("ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, t(n)) },
                        resize: function(i, n) { e._trigger("resize", i, t(n)) },
                        stop: function(n, s) {
                            var o = e.uiDialog.offset(),
                                r = o.left - e.document.scrollLeft(),
                                a = o.top - e.document.scrollTop();
                            i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: e.window }, $(this).removeClass("ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", n, t(s))
                        }
                    }).css("position", s)
                },
                _trackFocus: function() { this._on(this.widget(), { focusin: function(t) { this._makeFocusTarget(), this._focusedElement = $(t.target) } }) },
                _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
                _untrackInstance: function() {
                    var t = this._trackingInstances(),
                        e = $.inArray(this, t); - 1 !== e && t.splice(e, 1)
                },
                _trackingInstances: function() {
                    var t = this.document.data("ui-dialog-instances");
                    return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                },
                _minHeight: function() {
                    var t = this.options;
                    return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                },
                _position: function() {
                    var t = this.uiDialog.is(":visible");
                    t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                },
                _setOptions: function(t) {
                    var e = this,
                        i = !1,
                        n = {};
                    $.each(t, function(t, s) { e._setOption(t, s), t in e.sizeRelatedOptions && (i = !0), t in e.resizableRelatedOptions && (n[t] = s) }), i && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                },
                _setOption: function(t, e) {
                    var i, n, s = this.uiDialog;
                    "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({ label: "" + e }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                },
                _size: function() {
                    var t, e, i, n = this.options;
                    this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                },
                _blockFrames: function() {
                    this.iframeBlocks = this.document.find("iframe").map(function() {
                        var t = $(this);
                        return $("<div>").css({ position: "absolute", width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0]
                    })
                },
                _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
                _allowInteraction: function(t) {
                    return $(t.target).closest(".ui-dialog").length ? !0 : !!$(t.target).closest(".ui-datepicker").length
                },
                _createOverlay: function() {
                    if (this.options.modal) {
                        var t = !0;
                        this._delay(function() { t = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(e) { t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = $("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                    }
                },
                _destroyOverlay: function() {
                    if (this.options.modal && this.overlay) {
                        var t = this.document.data("ui-dialog-overlays") - 1;
                        t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                    }
                }
            });
        $.widget("ui.droppable", {
            version: "1.11.2",
            widgetEventPrefix: "drop",
            options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
            _create: function() {
                var t, e = this.options,
                    i = e.accept;
                this.isover = !1, this.isout = !0, this.accept = $.isFunction(i) ? i : function(t) {
                    return t.is(i)
                }, this.proportions = function() {
                    return arguments.length ? void(t = arguments[0]) : t ? t : t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }
                }, this._addToManager(e.scope), e.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) { $.ui.ddmanager.droppables[t] = $.ui.ddmanager.droppables[t] || [], $.ui.ddmanager.droppables[t].push(this) },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var t = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, e) {
                if ("accept" === t) this.accept = $.isFunction(e) ? e : function(t) {
                    return t.is(e)
                };
                else if ("scope" === t) {
                    var i = $.ui.ddmanager.droppables[this.options.scope];
                    this._splice(i), this._addToManager(e)
                }
                this._super(t, e)
            },
            _activate: function(t) {
                var e = $.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), e && this._trigger("activate", t, this.ui(e))
            },
            _deactivate: function(t) {
                var e = $.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), e && this._trigger("deactivate", t, this.ui(e))
            },
            _over: function(t) {
                var e = $.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(e)))
            },
            _out: function(t) {
                var e = $.ui.ddmanager.current;
                e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(e)))
            },
            _drop: function(t, e) {
                var i = e || $.ui.ddmanager.current,
                    n = !1;
                return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var e = $(this).droppable("instance");
                    return e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && $.ui.intersect(i, $.extend(e, { offset: e.element.offset() }), e.options.tolerance, t) ? (n = !0, !1) : void 0
                }), n ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1) : !1
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            }
        }), $.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function(e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    a = o + e.helperProportions.width,
                    l = r + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= h && u >= a && r >= c && d >= l;
                    case "intersect":
                        return h < o + e.helperProportions.width / 2 && a - e.helperProportions.width / 2 < u && c < r + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case "touch":
                        return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= h && u >= o || a >= h && u >= a || h > o && a > u);
                    default:
                        return !1
                }
            }
        }(), $.ui.ddmanager = {
            current: null,
            droppables: { "default": [] },
            prepareOffsets: function(t, e) {
                var i, n, s = $.ui.ddmanager.droppables[t.options.scope] || [],
                    o = e ? e.type : null,
                    r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                t: for (i = 0; i < s.length; i++)
                    if (!(s[i].options.disabled || t && !s[i].accept.call(s[i].element[0], t.currentItem || t.element))) {
                        for (n = 0; n < r.length; n++)
                            if (r[n] === s[i].element[0]) {
                                s[i].proportions().height = 0;
                                continue t
                            }
                        s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], e), s[i].offset = s[i].element.offset(), s[i].proportions({ width: s[i].element[0].offsetWidth, height: s[i].element[0].offsetHeight }))
                    }
            },
            drop: function(t, e) {
                var i = !1;
                return $.each(($.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && $.ui.intersect(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e))) }), i
            },
            dragStart: function(t, e) { t.element.parentsUntil("body").bind("scroll.droppable", function() { t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e) }) },
            drag: function(t, e) {
                t.options.refreshPositions && $.ui.ddmanager.prepareOffsets(t, e), $.each($.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var i, n, s, o = $.ui.intersect(t, this, this.options.tolerance, e),
                            r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (n = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function() {
                            return $(this).droppable("instance").options.scope === n
                        }), s.length && (i = $(s[0]).droppable("instance"), i.greedyChild = "isover" === r)), i && "isover" === r && (i.isover = !1, i.isout = !0, i._out.call(i, e)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, e), i && "isout" === r && (i.isout = !1, i.isover = !0, i._over.call(i, e)))
                    }
                })
            },
            dragStop: function(t, e) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e) }
        };
        var S = $.ui.droppable,
            E = "ui-effects-",
            N = $;
        $.effects = { effect: {} },
            function(t, e) {
                function i(t, e, i) {
                    var n = c[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = l(),
                        n = i._rgba = [];
                    return e = e.toLowerCase(), f(a, function(t, s) {
                        var o, r = s.re.exec(e),
                            a = r && s.parse(r),
                            l = s.space || "rgba";
                        return a ? (o = i[l](a), i[h[l].cache] = o[h[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, p.transparent), i) : p[e]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    a = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    l = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    h = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                    c = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                    u = l.support = {},
                    d = t("<p>")[0],
                    p, f = t.each;
                d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, f(h, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, {
                    parse: function(s, o, r, a) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(o), o = e);
                        var c = this,
                            u = t.type(s),
                            d = this._rgba = [];
                        return o !== e && (s = [s, o, r, a], u = "array"), "string" === u ? this.parse(n(s) || p._default) : "array" === u ? (f(h.rgba.props, function(t, e) { d[e.idx] = i(s[e.idx], e) }), this) : "object" === u ? (s instanceof l ? f(h, function(t, e) { s[e.cache] && (c[e.cache] = s[e.cache].slice()) }) : f(h, function(e, n) {
                            var o = n.cache;
                            f(n.props, function(t, e) {
                                if (!c[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    c[o] = n.to(c._rgba)
                                }
                                c[o][e.idx] = i(s[t], e, !0)
                            }), c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                        }), this) : void 0
                    },
                    is: function(t) {
                        var e = l(t),
                            i = !0,
                            n = this;
                        return f(h, function(t, s) {
                            var o, r = e[s.cache];
                            return r && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                                return null != r[e.idx] ? i = r[e.idx] === o[e.idx] : void 0
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return f(h, function(i, n) { e[n.cache] && t.push(i) }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = l(t),
                            s = n._space(),
                            o = h[s],
                            r = 0 === this.alpha() ? l("transparent") : this,
                            a = r[o.cache] || o.to(r._rgba),
                            u = a.slice();
                        return n = n[o.cache], f(o.props, function(t, s) {
                            var o = s.idx,
                                r = a[o],
                                l = n[o],
                                h = c[s.type] || {};
                            null !== l && (null === r ? u[o] = l : (h.mod && (l - r > h.mod / 2 ? r += h.mod : r - l > h.mod / 2 && (r -= h.mod)), u[o] = i((l - r) * e + r, s)))
                        }), this[s](u)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = l(e)._rgba;
                        return l(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 255,
                        i = t[1] / 255,
                        n = t[2] / 255,
                        s = t[3],
                        o = Math.max(e, i, n),
                        r = Math.min(e, i, n),
                        a = o - r,
                        l = o + r,
                        h = .5 * l,
                        c, u;
                    return c = r === o ? 0 : e === o ? 60 * (i - n) / a + 360 : i === o ? 60 * (n - e) / a + 120 : 60 * (e - i) / a + 240, u = 0 === a ? 0 : .5 >= h ? a / l : a / (2 - l), [Math.round(c) % 360, u, h, null == s ? 1 : s]
                }, h.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        r = .5 >= n ? n * (1 + i) : n + i - n * i,
                        a = 2 * n - r;
                    return [Math.round(255 * s(a, r, e + 1 / 3)), Math.round(255 * s(a, r, e)), Math.round(255 * s(a, r, e - 1 / 3)), o]
                }, f(h, function(n, s) {
                    var o = s.props,
                        a = s.cache,
                        h = s.to,
                        c = s.from;
                    l.fn[n] = function(n) {
                        if (h && !this[a] && (this[a] = h(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            u = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return f(o, function(t, e) {
                            var n = u["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), c ? (s = l(c(d)), s[a] = d, s) : l(d)
                    }, f(o, function(e, i) {
                        l.fn[e] || (l.fn[e] = function(s) {
                            var o = t.type(s),
                                a = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                l = this[a](),
                                h = l[i.idx],
                                c;
                            return "undefined" === o ? h : ("function" === o && (s = s.call(this, h), o = t.type(s)), null == s && i.empty ? this : ("string" === o && (c = r.exec(s), c && (s = h + parseFloat(c[2]) * ("+" === c[1] ? 1 : -1))), l[i.idx] = s, this[a](l)))
                        })
                    })
                }), l.hook = function(e) {
                    var i = e.split(" ");
                    f(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, r, a = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = l(o || s), !u.rgba && 1 !== s._rgba[3]) {
                                        for (r = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === a || "transparent" === a) && r && r.style;) try { a = t.css(r, "backgroundColor"), r = r.parentNode } catch (h) {}
                                        s = s.blend(a && "transparent" !== a ? a : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try { e.style[i] = s } catch (h) {}
                            }
                        }, t.fx.step[i] = function(e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                    })
                }, l.hook(o), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(i, n) { e["border" + n + "Color"] = t }), e
                    }
                }, p = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
            }(N),
            function() {
                function t(t) {
                    var e, i, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        s = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (i = n.length; i--;) e = n[i], "string" == typeof n[e] && (s[$.camelCase(e)] = n[e]);
                    else
                        for (e in n) "string" == typeof n[e] && (s[e] = n[e]);
                    return s
                }

                function e(t, e) {
                    var i = {},
                        s, o;
                    for (s in e) o = e[s], t[s] !== o && (n[s] || ($.fx.step[s] || !isNaN(parseFloat(o))) && (i[s] = o));
                    return i
                }
                var i = ["add", "remove", "toggle"],
                    n = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
                $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
                    $.fx.step[e] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (N.style(t.elem, e, t.end), t.setAttr = !0)
                    }
                }), $.fn.addBack || ($.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), $.effects.animateClass = function(n, s, o, r) {
                    var a = $.speed(s, o, r);
                    return this.queue(function() {
                        var s = $(this),
                            o = s.attr("class") || "",
                            r, l = a.children ? s.find("*").addBack() : s;
                        l = l.map(function() {
                            var e = $(this);
                            return { el: e, start: t(this) }
                        }), r = function() { $.each(i, function(t, e) { n[e] && s[e + "Class"](n[e]) }) }, r(), l = l.map(function() {
                            return this.end = t(this.el[0]), this.diff = e(this.start, this.end), this
                        }), s.attr("class", o), l = l.map(function() {
                            var t = this,
                                e = $.Deferred(),
                                i = $.extend({}, a, { queue: !1, complete: function() { e.resolve(t) } });
                            return this.el.animate(this.diff, i), e.promise()
                        }), $.when.apply($, l.get()).done(function() {
                            r(), $.each(arguments, function() {
                                var t = this.el;
                                $.each(this.diff, function(e) { t.css(e, "") })
                            }), a.complete.call(s[0])
                        })
                    })
                }, $.fn.extend({
                    addClass: function(t) {
                        return function(e, i, n, s) {
                            return i ? $.effects.animateClass.call(this, { add: e }, i, n, s) : t.apply(this, arguments)
                        }
                    }($.fn.addClass),
                    removeClass: function(t) {
                        return function(e, i, n, s) {
                            return arguments.length > 1 ? $.effects.animateClass.call(this, { remove: e }, i, n, s) : t.apply(this, arguments)
                        }
                    }($.fn.removeClass),
                    toggleClass: function(t) {
                        return function(e, i, n, s, o) {
                            return "boolean" == typeof i || void 0 === i ? n ? $.effects.animateClass.call(this, i ? { add: e } : { remove: e }, n, s, o) : t.apply(this, arguments) : $.effects.animateClass.call(this, { toggle: e }, i, n, s)
                        }
                    }($.fn.toggleClass),
                    switchClass: function(t, e, i, n, s) {
                        return $.effects.animateClass.call(this, { add: e, remove: t }, i, n, s)
                    }
                })
            }(),
            function() {
                function t(t, e, i, n) {
                    return $.isPlainObject(t) && (e = t, t = t.effect), t = { effect: t }, null == e && (e = {}), $.isFunction(e) && (n = e, i = null, e = {}), ("number" == typeof e || $.fx.speeds[e]) && (n = i, i = e, e = {}), $.isFunction(i) && (n = i, i = null), e && $.extend(t, e), i = i || e.duration, t.duration = $.fx.off ? 0 : "number" == typeof i ? i : i in $.fx.speeds ? $.fx.speeds[i] : $.fx.speeds._default, t.complete = n || e.complete, t
                }

                function e(t) {
                    return !t || "number" == typeof t || $.fx.speeds[t] ? !0 : "string" != typeof t || $.effects.effect[t] ? $.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
                }
                $.extend($.effects, {
                    version: "1.11.2",
                    save: function(t, e) {
                        for (var i = 0; i < e.length; i++) null !== e[i] && t.data(E + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, e) {
                        var i, n;
                        for (n = 0; n < e.length; n++) null !== e[n] && (i = t.data(E + e[n]), void 0 === i && (i = ""), t.css(e[n], i))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return { x: n, y: i }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var e = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") },
                            i = $("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            n = { width: t.width(), height: t.height() },
                            s = document.activeElement;
                        try { s.id } catch (o) { s = document.body }
                        return t.wrap(i), (t[0] === s || $.contains(t[0], s)) && $(s).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({ position: "relative" }), t.css({ position: "relative" })) : ($.extend(e, { position: t.css("position"), zIndex: t.css("z-index") }), $.each(["top", "left", "bottom", "right"], function(i, n) { e[n] = t.css(n), isNaN(parseInt(e[n], 10)) && (e[n] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(n), i.css(e).show()
                    },
                    removeWrapper: function(t) {
                        var e = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || $.contains(t[0], e)) && $(e).focus()), t
                    },
                    setTransition: function(t, e, i, n) {
                        return n = n || {}, $.each(e, function(e, s) {
                            var o = t.cssUnit(s);
                            o[0] > 0 && (n[s] = o[0] * i + o[1])
                        }), n
                    }
                }), $.fn.extend({
                    effect: function() {
                        function e(t) {
                            function e() { $.isFunction(s) && s.call(n[0]), $.isFunction(t) && t() }
                            var n = $(this),
                                s = i.complete,
                                r = i.mode;
                            (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), e()) : o.call(n[0], i, e)
                        }
                        var i = t.apply(this, arguments),
                            n = i.mode,
                            s = i.queue,
                            o = $.effects.effect[i.effect];
                        return $.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() { i.complete && i.complete.call(this) }) : s === !1 ? this.each(e) : this.queue(s || "fx", e)
                    },
                    show: function(i) {
                        return function(n) {
                            if (e(n)) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }($.fn.show),
                    hide: function(i) {
                        return function(n) {
                            if (e(n)) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }($.fn.hide),
                    toggle: function(i) {
                        return function(n) {
                            if (e(n) || "boolean" == typeof n) return i.apply(this, arguments);
                            var s = t.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }($.fn.toggle),
                    cssUnit: function(t) {
                        var e = this.css(t),
                            i = [];
                        return $.each(["em", "px", "%", "pt"], function(t, n) { e.indexOf(n) > 0 && (i = [parseFloat(e), n]) }), i
                    }
                })
            }(),
            function() {
                var t = {};
                $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                    t[i] = function(t) {
                        return Math.pow(t, e + 2)
                    }
                }), $.extend(t, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), $.each(t, function(t, e) {
                    $.easing["easeIn" + t] = e, $.easing["easeOut" + t] = function(t) {
                        return 1 - e(1 - t)
                    }, $.easing["easeInOut" + t] = function(t) {
                        return .5 > t ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
                    }
                })
            }();
        var P = $.effects,
            A = $.effects.effect.blind = function(t, e) {
                var i = $(this),
                    n = /up|down|vertical/,
                    s = /up|left|vertical|horizontal/,
                    o = ["position", "top", "bottom", "left", "right", "height", "width"],
                    r = $.effects.setMode(i, t.mode || "hide"),
                    a = t.direction || "up",
                    l = n.test(a),
                    h = l ? "height" : "width",
                    c = l ? "top" : "left",
                    u = s.test(a),
                    d = {},
                    p = "show" === r,
                    f, m, g;
                i.parent().is(".ui-effects-wrapper") ? $.effects.save(i.parent(), o) : $.effects.save(i, o), i.show(), f = $.effects.createWrapper(i).css({ overflow: "hidden" }), m = f[h](), g = parseFloat(f.css(c)) || 0, d[h] = p ? m : 0, u || (i.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({ position: "absolute" }), d[c] = p ? g : m + g), p && (f.css(h, 0), u || f.css(c, g + m)), f.animate(d, { duration: t.duration, easing: t.easing, queue: !1, complete: function() { "hide" === r && i.hide(), $.effects.restore(i, o), $.effects.removeWrapper(i), e() } })
            },
            M = $.effects.effect.bounce = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = "hide" === s,
                    r = "show" === s,
                    a = t.direction || "up",
                    l = t.distance,
                    h = t.times || 5,
                    c = 2 * h + (r || o ? 1 : 0),
                    u = t.duration / c,
                    d = t.easing,
                    p = "up" === a || "down" === a ? "top" : "left",
                    f = "up" === a || "left" === a,
                    m, g, v, b = i.queue(),
                    y = b.length;
                for ((r || o) && n.push("opacity"), $.effects.save(i, n), i.show(), $.effects.createWrapper(i), l || (l = i["top" === p ? "outerHeight" : "outerWidth"]() / 3), r && (v = { opacity: 1 }, v[p] = 0, i.css("opacity", 0).css(p, f ? 2 * -l : 2 * l).animate(v, u, d)), o && (l /= Math.pow(2, h - 1)), v = {}, v[p] = 0, m = 0; h > m; m++) g = {}, g[p] = (f ? "-=" : "+=") + l, i.animate(g, u, d).animate(v, u, d), l = o ? 2 * l : l / 2;
                o && (g = { opacity: 0 }, g[p] = (f ? "-=" : "+=") + l, i.animate(g, u, d)), i.queue(function() { o && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, c + 1))), i.dequeue()
            },
            H = $.effects.effect.clip = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = t.direction || "vertical",
                    a = "vertical" === r,
                    l = a ? "height" : "width",
                    h = a ? "top" : "left",
                    c = {},
                    u, d, p;
                $.effects.save(i, n), i.show(), u = $.effects.createWrapper(i).css({ overflow: "hidden" }), d = "IMG" === i[0].tagName ? u : i, p = d[l](), o && (d.css(l, 0), d.css(h, p / 2)), c[l] = o ? p : 0, c[h] = o ? 0 : p / 2, d.animate(c, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { o || i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() } })
            },
            O = $.effects.effect.drop = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = t.direction || "left",
                    a = "up" === r || "down" === r ? "top" : "left",
                    l = "up" === r || "left" === r ? "pos" : "neg",
                    h = { opacity: o ? 1 : 0 },
                    c;
                $.effects.save(i, n), i.show(), $.effects.createWrapper(i), c = t.distance || i["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, o && i.css("opacity", 0).css(a, "pos" === l ? -c : c), h[a] = (o ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + c, i.animate(h, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() } })
            },
            z = $.effects.effect.explode = function(t, e) {
                function i() { d.push(this), d.length === s * o && n() }

                function n() { r.css({ visibility: "visible" }), $(d).remove(), l || r.hide(), e() }
                var s = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                    o = s,
                    r = $(this),
                    a = $.effects.setMode(r, t.mode || "hide"),
                    l = "show" === a,
                    h = r.show().css("visibility", "hidden").offset(),
                    c = Math.ceil(r.outerWidth() / o),
                    u = Math.ceil(r.outerHeight() / s),
                    d = [],
                    p, f, m, g, v, b;
                for (p = 0; s > p; p++)
                    for (g = h.top + p * u, b = p - (s - 1) / 2, f = 0; o > f; f++) m = h.left + f * c, v = f - (o - 1) / 2, r.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -f * c, top: -p * u }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: c, height: u, left: m + (l ? v * c : 0), top: g + (l ? b * u : 0), opacity: l ? 0 : 1 }).animate({ left: m + (l ? 0 : v * c), top: g + (l ? 0 : b * u), opacity: l ? 1 : 0 }, t.duration || 500, t.easing, i)
            },
            W = $.effects.effect.fade = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "toggle");
                i.animate({ opacity: n }, { queue: !1, duration: t.duration, easing: t.easing, complete: e })
            },
            F = $.effects.effect.fold = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "hide"),
                    o = "show" === s,
                    r = "hide" === s,
                    a = t.size || 15,
                    l = /([0-9]+)%/.exec(a),
                    h = !!t.horizFirst,
                    c = o !== h,
                    u = c ? ["width", "height"] : ["height", "width"],
                    d = t.duration / 2,
                    p, f, m = {},
                    g = {};
                $.effects.save(i, n), i.show(), p = $.effects.createWrapper(i).css({ overflow: "hidden" }), f = c ? [p.width(), p.height()] : [p.height(), p.width()], l && (a = parseInt(l[1], 10) / 100 * f[r ? 0 : 1]), o && p.css(h ? { height: 0, width: a } : { height: a, width: 0 }), m[u[0]] = o ? f[0] : a, g[u[1]] = o ? f[1] : 0, p.animate(m, d, t.easing).animate(g, d, t.easing, function() { r && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() })
            },
            L = $.effects.effect.highlight = function(t, e) {
                var i = $(this),
                    n = ["backgroundImage", "backgroundColor", "opacity"],
                    s = $.effects.setMode(i, t.mode || "show"),
                    o = { backgroundColor: i.css("backgroundColor") };
                "hide" === s && (o.opacity = 0), $.effects.save(i, n), i.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(o, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === s && i.hide(), $.effects.restore(i, n), e() } })
            },
            R = $.effects.effect.size = function(t, e) {
                var i, n, s, o = $(this),
                    r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    a = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    l = ["width", "height", "overflow"],
                    h = ["fontSize"],
                    c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    d = $.effects.setMode(o, t.mode || "effect"),
                    p = t.restore || "effect" !== d,
                    f = t.scale || "both",
                    m = t.origin || ["middle", "center"],
                    g = o.css("position"),
                    v = p ? r : a,
                    b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                "show" === d && o.show(), i = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }, "toggle" === t.mode && "show" === d ? (o.from = t.to || b, o.to = t.from || i) : (o.from = t.from || ("show" === d ? b : i), o.to = t.to || ("hide" === d ? b : i)), s = { from: { y: o.from.height / i.height, x: o.from.width / i.width }, to: { y: o.to.height / i.height, x: o.to.width / i.width } }, ("box" === f || "both" === f) && (s.from.y !== s.to.y && (v = v.concat(c), o.from = $.effects.setTransition(o, c, s.from.y, o.from), o.to = $.effects.setTransition(o, c, s.to.y, o.to)), s.from.x !== s.to.x && (v = v.concat(u), o.from = $.effects.setTransition(o, u, s.from.x, o.from), o.to = $.effects.setTransition(o, u, s.to.x, o.to))), ("content" === f || "both" === f) && s.from.y !== s.to.y && (v = v.concat(h).concat(l), o.from = $.effects.setTransition(o, h, s.from.y, o.from), o.to = $.effects.setTransition(o, h, s.to.y, o.to)), $.effects.save(o, v), o.show(), $.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = $.effects.getBaseline(m, i), o.from.top = (i.outerHeight - o.outerHeight()) * n.y, o.from.left = (i.outerWidth - o.outerWidth()) * n.x, o.to.top = (i.outerHeight - o.to.outerHeight) * n.y, o.to.left = (i.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === f || "both" === f) && (c = c.concat(["marginTop", "marginBottom"]).concat(h), u = u.concat(["marginLeft", "marginRight"]), l = r.concat(c).concat(u), o.find("*[width]").each(function() {
                    var e = $(this),
                        i = { height: e.height(), width: e.width(), outerHeight: e.outerHeight(), outerWidth: e.outerWidth() };
                    p && $.effects.save(e, l), e.from = { height: i.height * s.from.y, width: i.width * s.from.x, outerHeight: i.outerHeight * s.from.y, outerWidth: i.outerWidth * s.from.x }, e.to = { height: i.height * s.to.y, width: i.width * s.to.x, outerHeight: i.height * s.to.y, outerWidth: i.width * s.to.x }, s.from.y !== s.to.y && (e.from = $.effects.setTransition(e, c, s.from.y, e.from), e.to = $.effects.setTransition(e, c, s.to.y, e.to)), s.from.x !== s.to.x && (e.from = $.effects.setTransition(e, u, s.from.x, e.from), e.to = $.effects.setTransition(e, u, s.to.x, e.to)), e.css(e.from), e.animate(e.to, t.duration, t.easing, function() { p && $.effects.restore(e, l) })
                })), o.animate(o.to, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === d && o.hide(), $.effects.restore(o, v), p || ("static" === g ? o.css({ position: "relative", top: o.to.top, left: o.to.left }) : $.each(["top", "left"], function(t, e) {
                            o.css(e, function(e, i) {
                                var n = parseInt(i, 10),
                                    s = t ? o.to.left : o.to.top;
                                return "auto" === i ? s + "px" : n + s + "px"
                            })
                        })), $.effects.removeWrapper(o), e()
                    }
                })
            },
            j = $.effects.effect.scale = function(t, e) {
                var i = $(this),
                    n = $.extend(!0, {}, t),
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === s ? 0 : 100),
                    r = t.direction || "both",
                    a = t.origin,
                    l = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() },
                    h = { y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1 };
                n.effect = "size", n.queue = !1, n.complete = e, "effect" !== s && (n.origin = a || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === s ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l), n.to = { height: l.height * h.y, width: l.width * h.x, outerHeight: l.outerHeight * h.y, outerWidth: l.outerWidth * h.x }, n.fade && ("show" === s && (n.from.opacity = 0, n.to.opacity = 1), "hide" === s && (n.from.opacity = 1, n.to.opacity = 0)), i.effect(n)
            },
            B = $.effects.effect.puff = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "hide"),
                    s = "hide" === n,
                    o = parseInt(t.percent, 10) || 150,
                    r = o / 100,
                    a = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
                $.extend(t, { effect: "scale", queue: !1, fade: !0, mode: n, complete: e, percent: s ? o : 100, from: s ? a : { height: a.height * r, width: a.width * r, outerHeight: a.outerHeight * r, outerWidth: a.outerWidth * r } }), i.effect(t)
            },
            q = $.effects.effect.pulsate = function(t, e) {
                var i = $(this),
                    n = $.effects.setMode(i, t.mode || "show"),
                    s = "show" === n,
                    o = "hide" === n,
                    r = s || "hide" === n,
                    a = 2 * (t.times || 5) + (r ? 1 : 0),
                    l = t.duration / a,
                    h = 0,
                    c = i.queue(),
                    u = c.length,
                    d;
                for ((s || !i.is(":visible")) && (i.css("opacity", 0).show(), h = 1), d = 1; a > d; d++) i.animate({ opacity: h }, l, t.easing), h = 1 - h;
                i.animate({ opacity: h }, l, t.easing), i.queue(function() { o && i.hide(), e() }), u > 1 && c.splice.apply(c, [1, 0].concat(c.splice(u, a + 1))), i.dequeue()
            },
            Y = $.effects.effect.shake = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "height", "width"],
                    s = $.effects.setMode(i, t.mode || "effect"),
                    o = t.direction || "left",
                    r = t.distance || 20,
                    a = t.times || 3,
                    l = 2 * a + 1,
                    h = Math.round(t.duration / l),
                    c = "up" === o || "down" === o ? "top" : "left",
                    u = "up" === o || "left" === o,
                    d = {},
                    p = {},
                    f = {},
                    m, g = i.queue(),
                    v = g.length;
                for ($.effects.save(i, n), i.show(), $.effects.createWrapper(i), d[c] = (u ? "-=" : "+=") + r, p[c] = (u ? "+=" : "-=") + 2 * r, f[c] = (u ? "-=" : "+=") + 2 * r, i.animate(d, h, t.easing), m = 1; a > m; m++) i.animate(p, h, t.easing).animate(f, h, t.easing);
                i.animate(p, h, t.easing).animate(d, h / 2, t.easing).queue(function() { "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() }), v > 1 && g.splice.apply(g, [1, 0].concat(g.splice(v, l + 1))), i.dequeue()
            },
            U = $.effects.effect.slide = function(t, e) {
                var i = $(this),
                    n = ["position", "top", "bottom", "left", "right", "width", "height"],
                    s = $.effects.setMode(i, t.mode || "show"),
                    o = "show" === s,
                    r = t.direction || "left",
                    a = "up" === r || "down" === r ? "top" : "left",
                    l = "up" === r || "left" === r,
                    h, c = {};
                $.effects.save(i, n), i.show(), h = t.distance || i["top" === a ? "outerHeight" : "outerWidth"](!0), $.effects.createWrapper(i).css({ overflow: "hidden" }), o && i.css(a, l ? isNaN(h) ? "-" + h : -h : h), c[a] = (o ? l ? "+=" : "-=" : l ? "-=" : "+=") + h, i.animate(c, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === s && i.hide(), $.effects.restore(i, n), $.effects.removeWrapper(i), e() } })
            },
            V = $.effects.effect.transfer = function(t, e) {
                var i = $(this),
                    n = $(t.to),
                    s = "fixed" === n.css("position"),
                    o = $("body"),
                    r = s ? o.scrollTop() : 0,
                    a = s ? o.scrollLeft() : 0,
                    l = n.offset(),
                    h = { top: l.top - r, left: l.left - a, height: n.innerHeight(), width: n.innerWidth() },
                    c = i.offset(),
                    u = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({ top: c.top - r, left: c.left - a, height: i.innerHeight(), width: i.innerWidth(), position: s ? "fixed" : "absolute" }).animate(h, t.duration, t.easing, function() { u.remove(), e() })
            },
            K = $.widget("ui.progressbar", {
                version: "1.11.2",
                options: { max: 100, value: 0, change: null, complete: null },
                min: 0,
                _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }), this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue() },
                _destroy: function() { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() },
                value: function(t) {
                    return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
                },
                _constrainedValue: function(t) {
                    return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
                },
                _setOptions: function(t) {
                    var e = t.value;
                    delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
                },
                _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e) },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var t = this.options.value,
                        e = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = $("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": t }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
                }
            }),
            X = $.widget("ui.selectable", $.ui.mouse, {
                version: "1.11.2",
                options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
                _create: function() {
                    var t, e = this;
                    this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                        t = $(e.options.filter, e.element[0]), t.addClass("ui-selectee"), t.each(function() {
                            var t = $(this),
                                e = t.offset();
                            $.data(this, "selectable-item", { element: this, $element: t, left: e.left, top: e.top, right: e.left + t.outerWidth(), bottom: e.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") })
                        })
                    }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = $("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() },
                _mouseStart: function(t) {
                    var e = this,
                        i = this.options;
                    this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = $(i.filter, this.element[0]), this._trigger("start", t), $(i.appendTo).append(this.helper), this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var i = $.data(this, "selectable-item");
                        i.startselected = !0, t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, e._trigger("unselecting", t, { unselecting: i.element }))
                    }), $(t.target).parents().addBack().each(function() {
                        var i, n = $.data(this, "selectable-item");
                        return n ? (i = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), n.unselecting = !i, n.selecting = i, n.selected = i, i ? e._trigger("selecting", t, { selecting: n.element }) : e._trigger("unselecting", t, { unselecting: n.element }), !1) : void 0
                    }))
                },
                _mouseDrag: function(t) {
                    if (this.dragged = !0, !this.options.disabled) {
                        var e, i = this,
                            n = this.options,
                            s = this.opos[0],
                            o = this.opos[1],
                            r = t.pageX,
                            a = t.pageY;
                        return s > r && (e = r, r = s, s = e), o > a && (e = a, a = o, o = e), this.helper.css({ left: s, top: o, width: r - s, height: a - o }), this.selectees.each(function() {
                            var e = $.data(this, "selectable-item"),
                                l = !1;
                            e && e.element !== i.element[0] && ("touch" === n.tolerance ? l = !(e.left > r || e.right < s || e.top > a || e.bottom < o) : "fit" === n.tolerance && (l = e.left > s && e.right < r && e.top > o && e.bottom < a),
                                l ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, i._trigger("selecting", t, { selecting: e.element }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), i._trigger("unselecting", t, { unselecting: e.element }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, i._trigger("unselecting", t, { unselecting: e.element })))))
                        }), !1
                    }
                },
                _mouseStop: function(t) {
                    var e = this;
                    return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
                        var i = $.data(this, "selectable-item");
                        i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, e._trigger("unselected", t, { unselected: i.element })
                    }), $(".ui-selecting", this.element[0]).each(function() {
                        var i = $.data(this, "selectable-item");
                        i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, e._trigger("selected", t, { selected: i.element })
                    }), this._trigger("stop", t), this.helper.remove(), !1
                }
            }),
            G = $.widget("ui.selectmenu", {
                version: "1.11.2",
                defaultElement: "<select>",
                options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null },
                _create: function() {
                    var t = this.element.uniqueId().attr("id");
                    this.ids = { element: t, button: t + "-button", menu: t + "-menu" }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
                },
                _drawButton: function() {
                    var t = this,
                        e = this.element.attr("tabindex");
                    this.label = $("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = $("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: e || this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element), $("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button), this.buttonText = $("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { t.menuItems || t._refreshMenu() }), this._hoverable(this.button), this._focusable(this.button)
                },
                _drawMenu: function() {
                    var t = this;
                    this.menu = $("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = $("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                        role: "listbox",
                        select: function(e, i) { e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e) },
                        focus: function(e, i) {
                            var n = i.item.data("ui-selectmenu-item");
                            null != t.focusIndex && n.index !== t.focusIndex && (t._trigger("focus", e, { item: n }), t.isOpen || t._select(n, e)), t.focusIndex = n.index, t.button.attr("aria-activedescendant", t.menuItems.eq(n.index).attr("id"))
                        }
                    }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                        return !1
                    }, this.menuInstance._isDivider = function() {
                        return !1
                    }
                },
                refresh: function() { this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton() },
                _refreshMenu: function() {
                    this.menu.empty();
                    var t, e = this.element.find("option");
                    e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function(t) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)) },
                _position: function() { this.menuWrap.position($.extend({ of: this.button }, this.options.position)) },
                close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
                widget: function() {
                    return this.button
                },
                menuWidget: function() {
                    return this.menu
                },
                _renderMenu: function(t, e) {
                    var i = this,
                        n = "";
                    $.each(e, function(e, s) { s.optgroup !== n && ($("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: s.optgroup }).appendTo(t), n = s.optgroup), i._renderItemData(t, s) })
                },
                _renderItemData: function(t, e) {
                    return this._renderItem(t, e).data("ui-selectmenu-item", e)
                },
                _renderItem: function(t, e) {
                    var i = $("<li>");
                    return e.disabled && i.addClass("ui-state-disabled"), this._setText(i, e.label), i.appendTo(t)
                },
                _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
                _move: function(t, e) {
                    var i, n, s = ".ui-menu-item";
                    this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
                },
                _getSelectedItem: function() {
                    return this.menuItems.eq(this.element[0].selectedIndex)
                },
                _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
                _setSelection: function() {
                    var t;
                    this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
                },
                _documentClick: { mousedown: function(t) { this.isOpen && ($(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t)) } },
                _buttonEvents: {
                    mousedown: function() {
                        var t;
                        window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                    },
                    click: function(t) { this._setSelection(), this._toggle(t) },
                    keydown: function(t) {
                        var e = !0;
                        switch (t.keyCode) {
                            case $.ui.keyCode.TAB:
                            case $.ui.keyCode.ESCAPE:
                                this.close(t), e = !1;
                                break;
                            case $.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(t);
                                break;
                            case $.ui.keyCode.UP:
                                t.altKey ? this._toggle(t) : this._move("prev", t);
                                break;
                            case $.ui.keyCode.DOWN:
                                t.altKey ? this._toggle(t) : this._move("next", t);
                                break;
                            case $.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                break;
                            case $.ui.keyCode.LEFT:
                                this._move("prev", t);
                                break;
                            case $.ui.keyCode.RIGHT:
                                this._move("next", t);
                                break;
                            case $.ui.keyCode.HOME:
                            case $.ui.keyCode.PAGE_UP:
                                this._move("first", t);
                                break;
                            case $.ui.keyCode.END:
                            case $.ui.keyCode.PAGE_DOWN:
                                this._move("last", t);
                                break;
                            default:
                                this.menu.trigger(t), e = !1
                        }
                        e && t.preventDefault()
                    }
                },
                _selectFocusedItem: function(t) {
                    var e = this.menuItems.eq(this.focusIndex);
                    e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
                },
                _select: function(t, e) {
                    var i = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
                },
                _setAria: function(t) {
                    var e = this.menuItems.eq(t.index).attr("id");
                    this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
                },
                _setOption: function(t, e) { "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton() },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
                },
                _toggleAttr: function() { this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
                _resizeButton: function() {
                    var t = this.options.width;
                    t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
                },
                _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
                _getCreateOptions: function() {
                    return { disabled: this.element.prop("disabled") }
                },
                _parseOptions: function(t) {
                    var e = [];
                    t.each(function(t, i) {
                        var n = $(i),
                            s = n.parent("optgroup");
                        e.push({ element: n, index: t, value: n.attr("value"), label: n.text(), optgroup: s.attr("label") || "", disabled: s.prop("disabled") || n.prop("disabled") })
                    }), this.items = e
                },
                _destroy: function() { this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element) }
            }),
            Q = $.widget("ui.slider", $.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "slide",
                options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
                numPages: 5,
                _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 },
                _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
                _createHandles: function() {
                    var t, e, i = this.options,
                        n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                        o = [];
                    for (e = i.values && i.values.length || 1, n.length > e && (n.slice(e).remove(), n = n.slice(0, e)), t = n.length; e > t; t++) o.push(s);
                    this.handles = n.add($(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { $(this).data("ui-slider-handle-index", t) })
                },
                _createRange: function() {
                    var t = this.options,
                        e = "";
                    t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : $.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = $("<div></div>").appendTo(this.element), e = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(e + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
                _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() },
                _mouseCapture: function(t) {
                    var e, i, n, s, o, r, a, l, h = this,
                        c = this.options;
                    return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), e = { x: t.pageX, y: t.pageY }, i = this._normValueFromMouse(e), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var e = Math.abs(i - h.values(t));
                        (n > e || n === e && (t === h._lastChangedValue || h.values(t) === c.min)) && (n = e, s = $(this), o = t)
                    }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), l = !$(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - a.left - s.width() / 2, top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0, !0))
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(t) {
                    var e = { x: t.pageX, y: t.pageY },
                        i = this._normValueFromMouse(e);
                    return this._slide(t, this._handleIndex, i), !1
                },
                _mouseStop: function(t) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
                _normValueFromMouse: function(t) {
                    var e, i, n, s, o;
                    return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
                },
                _start: function(t, e) {
                    var i = { handle: this.handles[e], value: this.value() };
                    return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
                },
                _slide: function(t, e, i) {
                    var n, s, o;
                    this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, { handle: this.handles[e], value: i, values: s }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, { handle: this.handles[e], value: i }), o !== !1 && this.value(i))
                },
                _stop: function(t, e) {
                    var i = { handle: this.handles[e], value: this.value() };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
                },
                _change: function(t, e) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var i = { handle: this.handles[e], value: this.value() };
                        this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                    }
                },
                value: function(t) {
                    return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
                },
                values: function(t, e) {
                    var i, n, s;
                    if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                    if (!arguments.length) return this._values();
                    if (!$.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                    for (i = this.options.values, n = arguments[0], s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(n[s]), this._change(null, s);
                    this._refreshValue()
                },
                _setOption: function(t, e) {
                    var i, n = 0;
                    switch ("range" === t && this.options.range === !0 && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), $.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e), this._super(t, e), t) {
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = 0; n > i; i += 1) this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0, this._refresh(), this._animateOff = !1
                    }
                },
                _value: function() {
                    var t = this.options.value;
                    return t = this._trimAlignValue(t)
                },
                _values: function(t) {
                    var e, i, n;
                    if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                    if (this.options.values && this.options.values.length) {
                        for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                        return i
                    }
                    return []
                },
                _trimAlignValue: function(t) {
                    if (t <= this._valueMin()) return this._valueMin();
                    if (t >= this._valueMax()) return this._valueMax();
                    var e = this.options.step > 0 ? this.options.step : 1,
                        i = (t - this._valueMin()) % e,
                        n = t - i;
                    return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
                },
                _calculateNewMax: function() {
                    var t = (this.options.max - this._valueMin()) % this.options.step;
                    this.max = this.options.max - t
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshValue: function() {
                    var t, e, i, n, s, o = this.options.range,
                        r = this.options,
                        a = this,
                        l = this._animateOff ? !1 : r.animate,
                        h = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(i) { e = (a.values(i) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, h["horizontal" === a.orientation ? "left" : "bottom"] = e + "%", $(this).stop(1, 1)[l ? "animate" : "css"](h, r.animate), a.options.range === !0 && ("horizontal" === a.orientation ? (0 === i && a.range.stop(1, 1)[l ? "animate" : "css"]({ left: e + "%" }, r.animate), 1 === i && a.range[l ? "animate" : "css"]({ width: e - t + "%" }, { queue: !1, duration: r.animate })) : (0 === i && a.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: e + "%" }, r.animate), 1 === i && a.range[l ? "animate" : "css"]({ height: e - t + "%" }, { queue: !1, duration: r.animate }))), t = e }) : (i = this.value(), n = this._valueMin(), s = this._valueMax(), e = s !== n ? (i - n) / (s - n) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](h, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: e + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - e + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: e + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - e + "%" }, { queue: !1, duration: r.animate }))
                },
                _handleEvents: {
                    keydown: function(t) {
                        var e, i, n, s, o = $(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case $.ui.keyCode.HOME:
                            case $.ui.keyCode.END:
                            case $.ui.keyCode.PAGE_UP:
                            case $.ui.keyCode.PAGE_DOWN:
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.RIGHT:
                            case $.ui.keyCode.DOWN:
                            case $.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, $(t.target).addClass("ui-state-active"), e = this._start(t, o), e === !1)) return
                        }
                        switch (s = this.options.step, i = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                            case $.ui.keyCode.HOME:
                                n = this._valueMin();
                                break;
                            case $.ui.keyCode.END:
                                n = this._valueMax();
                                break;
                            case $.ui.keyCode.PAGE_UP:
                                n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case $.ui.keyCode.PAGE_DOWN:
                                n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.RIGHT:
                                if (i === this._valueMax()) return;
                                n = this._trimAlignValue(i + s);
                                break;
                            case $.ui.keyCode.DOWN:
                            case $.ui.keyCode.LEFT:
                                if (i === this._valueMin()) return;
                                n = this._trimAlignValue(i - s)
                        }
                        this._slide(t, o, n)
                    },
                    keyup: function(t) {
                        var e = $(t.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), $(t.target).removeClass("ui-state-active"))
                    }
                }
            }),
            J = $.widget("ui.sortable", $.ui.mouse, {
                version: "1.11.2",
                widgetEventPrefix: "sort",
                ready: !1,
                options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
                _isOverAxis: function(t, e, i) {
                    return t >= e && e + i > t
                },
                _isFloating: function(t) {
                    return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
                },
                _create: function() {
                    var t = this.options;
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
                },
                _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), $.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                    for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(t, e) {
                    var i = null,
                        n = !1,
                        s = this;
                    return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), $(t.target).parents().each(function() {
                        return $.data(this, s.widgetName + "-item") === s ? (i = $(this), !1) : void 0
                    }), $.data(t.target, s.widgetName + "-item") === s && (i = $(t.target)), i && (!this.options.handle || e || ($(this.options.handle, i).find("*").addBack().each(function() { this === t.target && (n = !0) }), n)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
                },
                _mouseStart: function(t, e, i) {
                    var n, s, o = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, $.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
                    return $.ui.ddmanager && ($.ui.ddmanager.current = this), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                },
                _mouseDrag: function(t) {
                    var e, i, n, s, o = this.options,
                        r = !1;
                    for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - $(document).scrollTop() < o.scrollSensitivity ? r = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed) : $(window).height() - (t.pageY - $(document).scrollTop()) < o.scrollSensitivity && (r = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed)), t.pageX - $(document).scrollLeft() < o.scrollSensitivity ? r = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed) : $(window).width() - (t.pageX - $(document).scrollLeft()) < o.scrollSensitivity && (r = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed))), r !== !1 && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                        if (i = this.items[e], n = i.item[0], s = this._intersectsWithPointer(i), s && i.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== n && !$.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !$.contains(this.element[0], n) : !0)) {
                            if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                            this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t), $.ui.ddmanager && $.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(t, e) {
                    if (t) {
                        if ($.ui.ddmanager && !this.options.dropBehaviour && $.ui.ddmanager.drop(this, t), this.options.revert) {
                            var i = this,
                                n = this.placeholder.offset(),
                                s = this.options.axis,
                                o = {};
                            s && "x" !== s || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, $(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() { i._clear(t) })
                        } else this._clear(t, e);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({ target: null }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), $.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? $(this.domPosition.prev).after(this.currentItem) : $(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(t) {
                    var e = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, $(e).each(function() {
                        var e = ($(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        e && i.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&")
                },
                toArray: function(t) {
                    var e = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, e.each(function() { i.push($(t.item || this).attr(t.attribute || "id") || "") }), i
                },
                _intersectsWith: function(t) {
                    var e = this.positionAbs.left,
                        i = e + this.helperProportions.width,
                        n = this.positionAbs.top,
                        s = n + this.helperProportions.height,
                        o = t.left,
                        r = o + t.width,
                        a = t.top,
                        l = a + t.height,
                        h = this.offset.click.top,
                        c = this.offset.click.left,
                        u = "x" === this.options.axis || n + h > a && l > n + h,
                        d = "y" === this.options.axis || e + c > o && r > e + c,
                        p = u && d;
                    return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(t) {
                    var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                        n = e && i,
                        s = this._getDragVerticalDirection(),
                        o = this._getDragHorizontalDirection();
                    return n ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
                },
                _intersectsWithSides: function(t) {
                    var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        n = this._getDragVerticalDirection(),
                        s = this._getDragHorizontalDirection();
                    return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
                },
                _getDragVerticalDirection: function() {
                    var t = this.positionAbs.top - this.lastPositionAbs.top;
                    return 0 !== t && (t > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var t = this.positionAbs.left - this.lastPositionAbs.left;
                    return 0 !== t && (t > 0 ? "right" : "left")
                },
                refresh: function(t) {
                    return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var t = this.options;
                    return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    function e() { r.push(this) }
                    var i, n, s, o, r = [],
                        a = [],
                        l = this._connectWith();
                    if (l && t)
                        for (i = l.length - 1; i >= 0; i--)
                            for (s = $(l[i]), n = s.length - 1; n >= 0; n--) o = $.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && a.push([$.isFunction(o.options.items) ? o.options.items.call(o.element) : $(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                    for (a.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = a.length - 1; i >= 0; i--) a[i][0].each(e);
                    return $(r)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = $.grep(this.items, function(e) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] === e.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [], this.containers = [this];
                    var e, i, n, s, o, r, a, l, h = this.items,
                        c = [
                            [$.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : $(this.options.items, this.element), this]
                        ],
                        u = this._connectWith();
                    if (u && this.ready)
                        for (e = u.length - 1; e >= 0; e--)
                            for (n = $(u[e]), i = n.length - 1; i >= 0; i--) s = $.data(n[i], this.widgetFullName), s && s !== this && !s.options.disabled && (c.push([$.isFunction(s.options.items) ? s.options.items.call(s.element[0], t, { item: this.currentItem }) : $(s.options.items, s.element), s]), this.containers.push(s));
                    for (e = c.length - 1; e >= 0; e--)
                        for (o = c[e][1], r = c[e][0], i = 0, l = r.length; l > i; i++) a = $(r[i]), a.data(this.widgetName + "-item", o), h.push({ item: a, instance: o, width: 0, height: 0, left: 0, top: 0 })
                },
                refreshPositions: function(t) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    var e, i, n, s;
                    for (e = this.items.length - 1; e >= 0; e--) i = this.items[e], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? $(this.options.toleranceElement, i.item) : i.item,
                        t || (i.width = n.outerWidth(), i.height = n.outerHeight()), s = n.offset(), i.left = s.left, i.top = s.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (e = this.containers.length - 1; e >= 0; e--) s = this.containers[e].element.offset(), this.containers[e].containerCache.left = s.left, this.containers[e].containerCache.top = s.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var e, i = t.options;
                    i.placeholder && i.placeholder.constructor !== String || (e = i.placeholder, i.placeholder = {
                        element: function() {
                            var i = t.currentItem[0].nodeName.toLowerCase(),
                                n = $("<" + i + ">", t.document[0]).addClass(e || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return "tr" === i ? t.currentItem.children().each(function() { $("<td>&#160;</td>", t.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(n) }) : "img" === i && n.attr("src", t.currentItem.attr("src")), e || n.css("visibility", "hidden"), n
                        },
                        update: function(n, s) {
                            (!e || i.forcePlaceholderSize) && (s.height() || s.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                        }
                    }), t.placeholder = $(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
                },
                _contactContainers: function(t) {
                    var e, i, n, s, o, r, a, l, h, c, u = null,
                        d = null;
                    for (e = this.containers.length - 1; e >= 0; e--)
                        if (!$.contains(this.currentItem[0], this.containers[e].element[0]))
                            if (this._intersectsWith(this.containers[e].containerCache)) {
                                if (u && $.contains(this.containers[e].element[0], u.element[0])) continue;
                                u = this.containers[e], d = e
                            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                    if (u)
                        if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                        else {
                            for (n = 1e4, s = null, h = u.floating || this._isFloating(this.currentItem), o = h ? "left" : "top", r = h ? "width" : "height", c = h ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) $.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (a = this.items[i].item.offset()[o], l = !1, t[c] - a > this.items[i][r] / 2 && (l = !0), Math.abs(t[c] - a) < n && (n = Math.abs(t[c] - a), s = this.items[i], this.direction = l ? "up" : "down"));
                            if (!s && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                            s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var e = this.options,
                        i = $.isFunction(e.helper) ? $(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || $("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
                },
                _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return "absolute" === this.cssPosition && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && $.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                },
                _getRelativeOffset: function() {
                    if ("relative" === this.cssPosition) {
                        var t = this.currentItem.position();
                        return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() }
                    }
                    return { top: 0, left: 0 }
                },
                _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
                _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
                _setContainment: function() {
                    var t, e, i, n = this.options;
                    "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, $("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ($("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = $(n.containment)[0], e = $(n.containment).offset(), i = "hidden" !== $(t).css("overflow"), this.containment = [e.left + (parseInt($(t).css("borderLeftWidth"), 10) || 0) + (parseInt($(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt($(t).css("borderTopWidth"), 10) || 0) + (parseInt($(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt($(t).css("borderLeftWidth"), 10) || 0) - (parseInt($(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt($(t).css("borderTopWidth"), 10) || 0) - (parseInt($(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(t, e) {
                    e || (e = this.position);
                    var i = "absolute" === t ? 1 : -1,
                        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        s = /(html|body)/i.test(n[0].tagName);
                    return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft()) * i }
                },
                _generatePosition: function(t) {
                    var e, i, n = this.options,
                        s = t.pageX,
                        o = t.pageY,
                        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        a = /(html|body)/i.test(r[0].tagName);
                    return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - n.grid[1] : e + n.grid[1] : e, i = this.originalPageX + Math.round((s - this.originalPageX) / n.grid[0]) * n.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - n.grid[0] : i + n.grid[0] : i)), { top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : r.scrollTop()), left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : r.scrollLeft()) }
                },
                _rearrange: function(t, e, i, n) {
                    i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var s = this.counter;
                    this._delay(function() { s === this.counter && this.refreshPositions(!n) })
                },
                _clear: function(t, e) {
                    function i(t, e, i) {
                        return function(n) { i._trigger(t, n, e._uiHash(e)) }
                    }
                    this.reverting = !1;
                    var n, s = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) {
                            return function(e) { t._trigger("receive", e, this._uiHash(this)) }
                        }.call(this, this.currentContainer)), s.push(function(t) {
                            return function(e) { t._trigger("update", e, this._uiHash(this)) }
                        }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                        for (n = 0; n < s.length; n++) s[n].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() { $.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
                _uiHash: function(t) {
                    var e = t || this;
                    return { helper: e.helper, placeholder: e.placeholder || $([]), position: e.position, originalPosition: e.originalPosition, offset: e.positionAbs, item: e.currentItem, sender: t ? t.element : null }
                }
            }),
            Z = $.widget("ui.spinner", {
                version: "1.11.2",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
                _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
                _getCreateOptions: function() {
                    var t = {},
                        e = this.element;
                    return $.each(["min", "max", "step"], function(i, n) {
                        var s = e.attr(n);
                        void 0 !== s && s.length && (t[n] = s)
                    }), t
                },
                _events: {
                    keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
                    keyup: "_stop",
                    focus: function() { this.previous = this.element.val() },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                    },
                    mousewheel: function(t, e) {
                        if (e) {
                            if (!this.spinning && !this._start(t)) return !1;
                            this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(t) {
                        function e() {
                            var t = this.element[0] === this.document[0].activeElement;
                            t || (this.element.focus(), this.previous = i, this._delay(function() { this.previous = i }))
                        }
                        var i;
                        i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, e.call(this) }), this._start(t) !== !1 && this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(t) {
                        return $(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : void this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
                },
                _keydown: function(t) {
                    var e = this.options,
                        i = $.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t), !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case i.PAGE_UP:
                            return this._repeat(null, e.page, t), !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -e.page, t), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
                },
                _start: function(t) {
                    return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
                },
                _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
                _spin: function(t, e) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, { value: i }) === !1 || (this._value(i), this.counter++)
                },
                _increment: function(t) {
                    var e = this.options.incremental;
                    return e ? $.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                },
                _precision: function() {
                    var t = this._precisionOf(this.options.step);
                    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
                },
                _precisionOf: function(t) {
                    var e = t.toString(),
                        i = e.indexOf(".");
                    return -1 === i ? 0 : e.length - i - 1
                },
                _adjustValue: function(t) {
                    var e, i, n = this.options;
                    return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
                },
                _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
                _setOption: function(t, e) {
                    if ("culture" === t || "numberFormat" === t) {
                        var i = this._parse(this.element.val());
                        return this.options[t] = e, void this.element.val(this._format(i))
                    }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
                },
                _setOptions: a(function(t) { this._super(t) }),
                _parse: function(t) {
                    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
                },
                _format: function(t) {
                    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
                },
                _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
                isValid: function() {
                    var t = this.value();
                    return null === t ? !1 : t === this._adjustValue(t)
                },
                _value: function(t, e) {
                    var i;
                    "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
                },
                _destroy: function() { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
                stepUp: a(function(t) { this._stepUp(t) }),
                _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
                stepDown: a(function(t) { this._stepDown(t) }),
                _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
                pageUp: a(function(t) { this._stepUp((t || 1) * this.options.page) }),
                pageDown: a(function(t) { this._stepDown((t || 1) * this.options.page) }),
                value: function(t) {
                    return arguments.length ? void a(this._value).call(this, t) : this._parse(this.element.val())
                },
                widget: function() {
                    return this.uiSpinner
                }
            }),
            tt = $.widget("ui.tabs", {
                version: "1.11.2",
                delay: 300,
                options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
                _isLocal: function() {
                    var t = /#.*$/;
                    return function(e) {
                        var i, n;
                        e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                        try { i = decodeURIComponent(i) } catch (s) {}
                        try { n = decodeURIComponent(n) } catch (s) {}
                        return e.hash.length > 1 && i === n
                    }
                }(),
                _create: function() {
                    var t = this,
                        e = this.options;
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible), this._processTabs(), e.active = this._initialActive(), $.isArray(e.disabled) && (e.disabled = $.unique(e.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                        return t.tabs.index(e)
                    }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(e.active) : this.active = $(), this._refresh(), this.active.length && this.load(e.active)
                },
                _initialActive: function() {
                    var t = this.options.active,
                        e = this.options.collapsible,
                        i = location.hash.substring(1);
                    return null === t && (i && this.tabs.each(function(e, n) {
                        return $(n).attr("aria-controls") === i ? (t = e, !1) : void 0
                    }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = e ? !1 : 0)), !e && t === !1 && this.anchors.length && (t = 0), t
                },
                _getCreateEventData: function() {
                    return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : $() }
                },
                _tabKeydown: function(t) {
                    var e = $(this.document[0].activeElement).closest("li"),
                        i = this.tabs.index(e),
                        n = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case $.ui.keyCode.RIGHT:
                            case $.ui.keyCode.DOWN:
                                i++;
                                break;
                            case $.ui.keyCode.UP:
                            case $.ui.keyCode.LEFT:
                                n = !1, i--;
                                break;
                            case $.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case $.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case $.ui.keyCode.SPACE:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                            case $.ui.keyCode.ENTER:
                                return t.preventDefault(), clearTimeout(this.activating), void this._activate(i === this.options.active ? !1 : i);
                            default:
                                return
                        }
                        t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, n), t.ctrlKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", i) }, this.delay))
                    }
                },
                _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === $.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) },
                _handlePageNav: function(t) {
                    return t.altKey && t.keyCode === $.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === $.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(t, e) {
                    function i() {
                        return t > n && (t = 0), 0 > t && (t = n), t
                    }
                    for (var n = this.tabs.length - 1; - 1 !== $.inArray(i(), this.options.disabled);) t = e ? t + 1 : t - 1;
                    return t
                },
                _focusNextTab: function(t, e) {
                    return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
                },
                _setOption: function(t, e) {
                    return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
                },
                _sanitizeSelector: function(t) {
                    return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var t = this.options,
                        e = this.tablist.children(":has(a[href])");
                    t.disabled = $.map(e.filter(".ui-state-disabled"), function(t) {
                        return e.index(t)
                    }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !$.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = $()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = $()), this._refresh()
                },
                _refresh: function() { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
                _processTabs: function() {
                    var t = this,
                        e = this.tabs,
                        i = this.anchors,
                        n = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) { $(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() { $(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function() {
                        return $("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = $(), this.anchors.each(function(e, i) {
                        var n, s, o, r = $(i).uniqueId().attr("id"),
                            a = $(i).closest("li"),
                            l = a.attr("aria-controls");
                        t._isLocal(i) ? (n = i.hash, o = n.substring(1), s = t.element.find(t._sanitizeSelector(n))) : (o = a.attr("aria-controls") || $({}).uniqueId()[0].id, n = "#" + o, s = t.element.find(n), s.length || (s = t._createPanel(o), s.insertAfter(t.panels[e - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), l && a.data("ui-tabs-aria-controls", l), a.attr({ "aria-controls": o, "aria-labelledby": r }), s.attr("aria-labelledby", r)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), e && (this._off(e.not(this.tabs)), this._off(i.not(this.anchors)), this._off(n.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(t) {
                    return $("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(t) {
                    $.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                    for (var e = 0, i; i = this.tabs[e]; e++) t === !0 || -1 !== $.inArray(e, t) ? $(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : $(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = t
                },
                _setupEvents: function(t) {
                    var e = {};
                    t && $.each(t.split(" "), function(t, i) { e[i] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, e), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(t) {
                    var e, i = this.element.parent();
                    "fill" === t ? (e = i.height(), e -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var t = $(this),
                            i = t.css("position");
                        "absolute" !== i && "fixed" !== i && (e -= t.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() { e -= $(this).outerHeight(!0) }), this.panels.each(function() { $(this).height(Math.max(0, e - $(this).innerHeight() + $(this).height())) }).css("overflow", "auto")) : "auto" === t && (e = 0, this.panels.each(function() { e = Math.max(e, $(this).height("").height()) }).height(e))
                },
                _eventHandler: function(t) {
                    var e = this.options,
                        i = this.active,
                        n = $(t.currentTarget),
                        s = n.closest("li"),
                        o = s[0] === i[0],
                        r = o && e.collapsible,
                        a = r ? $() : this._getPanelForTab(s),
                        l = i.length ? this._getPanelForTab(i) : $(),
                        h = { oldTab: i, oldPanel: l, newTab: r ? $() : s, newPanel: a };
                    t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !e.collapsible || this._trigger("beforeActivate", t, h) === !1 || (e.active = r ? !1 : this.tabs.index(s), this.active = o ? $() : s, this.xhr && this.xhr.abort(), l.length || a.length || $.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, h))
                },
                _toggle: function(t, e) {
                    function i() { s.running = !1, s._trigger("activate", t, e) }

                    function n() { e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(), i()) }
                    var s = this,
                        o = e.newPanel,
                        r = e.oldPanel;
                    this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() { e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n() }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), o.length && r.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                        return 0 === $(this).attr("tabIndex")
                    }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
                },
                _activate: function(t) {
                    var e, i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({ target: e, currentTarget: e, preventDefault: $.noop }))
                },
                _findActive: function(t) {
                    return t === !1 ? $() : this.tabs.eq(t)
                },
                _getIndex: function(t) {
                    return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() { $.data(this, "ui-tabs-destroy") ? $(this).remove() : $(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function() {
                        var t = $(this),
                            e = t.data("ui-tabs-aria-controls");
                        e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(t) {
                    var e = this.options.disabled;
                    e !== !1 && (void 0 === t ? e = !1 : (t = this._getIndex(t), e = $.isArray(e) ? $.map(e, function(e) {
                        return e !== t ? e : null
                    }) : $.map(this.tabs, function(e, i) {
                        return i !== t ? i : null
                    })), this._setupDisabled(e))
                },
                disable: function(t) {
                    var e = this.options.disabled;
                    if (e !== !0) {
                        if (void 0 === t) e = !0;
                        else {
                            if (t = this._getIndex(t), -1 !== $.inArray(t, e)) return;
                            e = $.isArray(e) ? $.merge([t], e).sort() : [t]
                        }
                        this._setupDisabled(e)
                    }
                },
                load: function(t, e) {
                    t = this._getIndex(t);
                    var i = this,
                        n = this.tabs.eq(t),
                        s = n.find(".ui-tabs-anchor"),
                        o = this._getPanelForTab(n),
                        r = { tab: n, panel: o };
                    this._isLocal(s[0]) || (this.xhr = $.ajax(this._ajaxSettings(s, e, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function(t) { setTimeout(function() { o.html(t), i._trigger("load", e, r) }, 1) }).complete(function(t, e) { setTimeout(function() { "abort" === e && i.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === i.xhr && delete i.xhr }, 1) })))
                },
                _ajaxSettings: function(t, e, i) {
                    var n = this;
                    return {
                        url: t.attr("href"),
                        beforeSend: function(t, s) {
                            return n._trigger("beforeLoad", e, $.extend({ jqXHR: t, ajaxSettings: s }, i))
                        }
                    }
                },
                _getPanelForTab: function(t) {
                    var e = $(t).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + e))
                }
            }),
            et = $.widget("ui.tooltip", {
                version: "1.11.2",
                options: {
                    content: function() {
                        var t = $(this).attr("title") || "";
                        return $("<a>").text(t).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" },
                    show: !0,
                    tooltipClass: null,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function(t, e) {
                    var i = (t.attr("aria-describedby") || "").split(/\s+/);
                    i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", $.trim(i.join(" ")))
                },
                _removeDescribedBy: function(t) {
                    var e = t.data("ui-tooltip-id"),
                        i = (t.attr("aria-describedby") || "").split(/\s+/),
                        n = $.inArray(e, i); - 1 !== n && i.splice(n, 1), t.removeData("ui-tooltip-id"), i = $.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
                },
                _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = $("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) },
                _setOption: function(t, e) {
                    var i = this;
                    return "disabled" === t ? (this[e ? "_disable" : "_enable"](), void(this.options[t] = e)) : (this._super(t, e), void("content" === t && $.each(this.tooltips, function(t, e) { i._updateContent(e.element) })))
                },
                _disable: function() {
                    var t = this;
                    $.each(this.tooltips, function(e, i) {
                        var n = $.Event("blur");
                        n.target = n.currentTarget = i.element[0], t.close(n, !0)
                    }), this.element.find(this.options.items).addBack().each(function() {
                        var t = $(this);
                        t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var t = $(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                    })
                },
                open: function(t) {
                    var e = this,
                        i = $(t ? t.target : this.element).closest(this.options.items);
                    i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                        var t = $(this),
                            i;
                        t.data("ui-tooltip-open") && (i = $.Event("blur"), i.target = i.currentTarget = this, e.close(i, !0)), t.attr("title") && (t.uniqueId(), e.parents[this.id] = { element: this, title: t.attr("title") }, t.attr("title", ""))
                    }), this._updateContent(i, t))
                },
                _updateContent: function(t, e) {
                    var i, n = this.options.content,
                        s = this,
                        o = e ? e.type : null;
                    return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) { t.data("ui-tooltip-open") && s._delay(function() { e && (e.type = o), this._open(e, t, i) }) }), void(i && this._open(e, t, i)))
                },
                _open: function(t, e, i) {
                    function n(t) { h.of = t, o.is(":hidden") || o.position(h) }
                    var s, o, r, a, l, h = $.extend({}, this.options.position);
                    if (i) {
                        if (s = this._find(e)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                        e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), s = this._tooltip(e), o = s.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), i.clone ? (l = i.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = i, $("<div>").html(l).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, { mousemove: n }), n(t)) : o.position($.extend({ of: e }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { o.is(":visible") && (n(h.of), clearInterval(a)) }, $.fx.interval)), this._trigger("open", t, { tooltip: o }), r = {
                            keyup: function(t) {
                                if (t.keyCode === $.ui.keyCode.ESCAPE) {
                                    var i = $.Event(t);
                                    i.currentTarget = e[0], this.close(i, !0)
                                }
                            }
                        }, e[0] !== this.element[0] && (r.remove = function() { this._removeTooltip(o) }), t && "mouseover" !== t.type || (r.mouseleave = "close"), t && "focusin" !== t.type || (r.focusout = "close"), this._on(!0, e, r)
                    }
                },
                close: function(t) {
                    var e, i = this,
                        n = $(t ? t.currentTarget : this.element),
                        s = this._find(n);
                    s && (e = s.tooltip, s.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), s.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function() { i._removeTooltip($(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && $.each(this.parents, function(t, e) { $(e.element).attr("title", e.title), delete i.parents[t] }), s.closing = !0, this._trigger("close", t, { tooltip: e }), s.hiding || (s.closing = !1)))
                },
                _tooltip: function(t) {
                    var e = $("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        i = e.uniqueId().attr("id");
                    return $("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[i] = { element: t, tooltip: e }
                },
                _find: function(t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
                _destroy: function() {
                    var t = this;
                    $.each(this.tooltips, function(e, i) {
                        var n = $.Event("blur"),
                            s = i.element;
                        n.target = n.currentTarget = s[0], t.close(n, !0), $("#" + e).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            })
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function($) {
    "use strict";
    var t = $.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function($) {
    "use strict";

    function t() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var i in e)
            if (void 0 !== t.style[i]) return { end: e[i] };
        return !1
    }
    $.fn.emulateTransitionEnd = function(t) {
        var e = !1,
            i = this;
        $(this).one("bsTransitionEnd", function() { e = !0 });
        var n = function() { e || $(i).trigger($.support.transition.end) };
        return setTimeout(n, t), this
    }, $(function() {
        $.support.transition = t(), $.support.transition && ($.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(t) {
                return $(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("bs.alert");
            n || e.data("bs.alert", n = new i(this)), "string" == typeof t && n[t].call(e)
        })
    }
    var e = '[data-dismiss="alert"]',
        i = function(t) { $(t).on("click", e, this.close) };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function e() { o.detach().trigger("closed.bs.alert").remove() }
        var n = $(this),
            s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = $(s);
        t && t.preventDefault(), o.length || (o = n.closest(".alert")), o.trigger(t = $.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), $.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", e).emulateTransitionEnd(i.TRANSITION_DURATION) : e())
    };
    var n = $.fn.alert;
    $.fn.alert = t, $.fn.alert.Constructor = i, $.fn.alert.noConflict = function() {
        return $.fn.alert = n, this
    }, $(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.button"),
                s = "object" == typeof t && t;
            n || i.data("bs.button", n = new e(this, s)), "toggle" == t ? n.toggle() : t && n.setState(t)
        })
    }
    var e = function(t, i) { this.$element = $(t), this.options = $.extend({}, e.DEFAULTS, i), this.isLoading = !1 };
    e.VERSION = "3.3.5", e.DEFAULTS = { loadingText: "loading..." }, e.prototype.setState = function(t) {
        var e = "disabled",
            i = this.$element,
            n = i.is("input") ? "val" : "html",
            s = i.data();
        t += "Text", null == s.resetText && i.data("resetText", i[n]()), setTimeout($.proxy(function() { i[n](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e)) }, this), 0)
    }, e.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = $.fn.button;
    $.fn.button = t, $.fn.button.Constructor = e, $.fn.button.noConflict = function() {
        return $.fn.button = i, this
    }, $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var i = $(e.target);
        i.hasClass("btn") || (i = i.closest(".btn")), t.call(i, "toggle"), $(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) { $(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type)) })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.carousel"),
                s = $.extend({}, e.DEFAULTS, i.data(), "object" == typeof t && t),
                o = "string" == typeof t ? t : s.slide;
            n || i.data("bs.carousel", n = new e(this, s)), "number" == typeof t ? n.to(t) : o ? n[o]() : s.interval && n.pause().cycle()
        })
    }
    var e = function(t, e) { this.$element = $(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this)) };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 600, e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, e.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, e.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval)), this
    }, e.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, e.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1,
            o = (i + s) % this.$items.length;
        return this.$items.eq(o)
    }, e.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, e.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && $.support.transition && (this.$element.trigger($.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, e.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, e.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, e.prototype.slide = function(t, i) {
        var n = this.$element.find(".item.active"),
            s = i || this.getItemForDirection(t, n),
            o = this.interval,
            r = "next" == t ? "left" : "right",
            a = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var l = s[0],
            h = $.Event("slide.bs.carousel", { relatedTarget: l, direction: r });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = $(this.$indicators.children()[this.getItemIndex(s)]);
                c && c.addClass("active")
            }
            var u = $.Event("slid.bs.carousel", { relatedTarget: l, direction: r });
            return $.support.transition && this.$element.hasClass("slide") ? (s.addClass(t), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function() { s.removeClass([t, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), a.sliding = !1, setTimeout(function() { a.$element.trigger(u) }, 0) }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(u)), o && this.cycle(), this
        }
    };
    var i = $.fn.carousel;
    $.fn.carousel = t, $.fn.carousel.Constructor = e, $.fn.carousel.noConflict = function() {
        return $.fn.carousel = i, this
    };
    var n = function(e) {
        var i, n = $(this),
            s = $(n.attr("data-target") || (i = n.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = $.extend({}, s.data(), n.data()),
                r = n.attr("data-slide-to");
            r && (o.interval = !1), t.call(s, o), r && s.data("bs.carousel").to(r), e.preventDefault()
        }
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var e = $(this);
            t.call(e, e.data())
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
        return $(i)
    }

    function e(t) {
        return this.each(function() {
            var e = $(this),
                n = e.data("bs.collapse"),
                s = $.extend({}, i.DEFAULTS, e.data(), "object" == typeof t && t);
            !n && s.toggle && /show|hide/.test(t) && (s.toggle = !1), n || e.data("bs.collapse", n = new i(this, s)), "string" == typeof t && n[t]()
        })
    }
    var i = function(t, e) { this.$element = $(t), this.options = $.extend({}, i.DEFAULTS, e), this.$trigger = $('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (t = n.data("bs.collapse"), t && t.transitioning))) {
                var s = $.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (e.call(n, "hide"), t || n.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!$.support.transition) return r.call(this);
                    var a = $.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", $.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[o](this.$element[0][a])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = $.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return $.support.transition ? void this.$element[e](0).one("bsTransitionEnd", $.proxy(n, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(e, i) {
            var n = $(i);
            this.addAriaAndCollapsedClass(t(n), n)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = $.fn.collapse;
    $.fn.collapse = e, $.fn.collapse.Constructor = i, $.fn.collapse.noConflict = function() {
        return $.fn.collapse = n, this
    }, $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var n = $(this);
        n.attr("data-target") || i.preventDefault();
        var s = t(n),
            o = s.data("bs.collapse"),
            r = o ? "toggle" : n.data();
        e.call(s, r)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        var e = t.attr("data-target");
        e || (e = t.attr("href"), e = e && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
        var i = e && $(e);
        return i && i.length ? i : t.parent()
    }

    function e(e) {
        e && 3 === e.which || ($(n).remove(), $(s).each(function() {
            var i = $(this),
                n = t(i),
                s = { relatedTarget: this };
            n.hasClass("open") && (e && "click" == e.type && /input|textarea/i.test(e.target.tagName) && $.contains(n[0], e.target) || (n.trigger(e = $.Event("hide.bs.dropdown", s)), e.isDefaultPrevented() || (i.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var e = $(this),
                i = e.data("bs.dropdown");
            i || e.data("bs.dropdown", i = new o(this)), "string" == typeof t && i[t].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(t) { $(t).on("click.bs.dropdown", this.toggle) };
    o.VERSION = "3.3.5", o.prototype.toggle = function(i) {
        var n = $(this);
        if (!n.is(".disabled, :disabled")) {
            var s = t(n),
                o = s.hasClass("open");
            if (e(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", e);
                var r = { relatedTarget: this };
                if (s.trigger(i = $.Event("show.bs.dropdown", r)), i.isDefaultPrevented()) return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }, o.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var i = $(this);
            if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                var n = t(i),
                    o = n.hasClass("open");
                if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && n.find(s).trigger("focus"), i.trigger("click");
                var r = " li:not(.disabled):visible a",
                    a = n.find(".dropdown-menu" + r);
                if (a.length) {
                    var l = a.index(e.target);
                    38 == e.which && l > 0 && l--, 40 == e.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
                }
            }
        }
    };
    var r = $.fn.dropdown;
    $.fn.dropdown = i, $.fn.dropdown.Constructor = o, $.fn.dropdown.noConflict = function() {
        return $.fn.dropdown = r, this
    }, $(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function($) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var n = $(this),
                s = n.data("bs.modal"),
                o = $.extend({}, e.DEFAULTS, n.data(), "object" == typeof t && t);
            s || n.data("bs.modal", s = new e(this, o)), "string" == typeof t ? s[t](i) : o.show && s.show(i)
        })
    }
    var e = function(t, e) { this.options = e, this.$body = $(document.body), this.$element = $(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, e.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, e.prototype.show = function(t) {
        var i = this,
            n = $.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { i.$element.one("mouseup.dismiss.bs.modal", function(t) { $(t.target).is(i.$element) && (i.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var n = $.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), n && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var s = $.Event("shown.bs.modal", { relatedTarget: t });
            n ? i.$dialog.one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(s) }).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
        }))
    }, e.prototype.hide = function(t) { t && t.preventDefault(), t = $.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), $(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal()) }, e.prototype.enforceFocus = function() { $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, e.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, e.prototype.resize = function() { this.isShown ? $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this)) : $(window).off("resize.bs.modal") }, e.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }, e.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, e.prototype.backdrop = function(t) {
        var i = this,
            n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = $.support.transition && n;
            if (this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", $.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            s ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() { i.removeBackdrop(), t && t() };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : o()
        } else t && t()
    }, e.prototype.handleUpdate = function() { this.adjustDialog() }, e.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }, e.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, e.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, e.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, e.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, e.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = $.fn.modal;
    $.fn.modal = t, $.fn.modal.Constructor = e, $.fn.modal.noConflict = function() {
        return $.fn.modal = i, this
    }, $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var i = $(this),
            n = i.attr("href"),
            s = $(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : $.extend({ remote: !/#/.test(n) && n }, s.data(), i.data());
        i.is("a") && e.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), t.call(s, o, this)
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.tooltip"),
                s = "object" == typeof t && t;
            (n || !/destroy|hide/.test(t)) && (n || i.data("bs.tooltip", n = new e(this, s)), "string" == typeof t && n[t]())
        })
    }
    var e = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, e.prototype.init = function(t, e, i) {
        if (this.enabled = !0, this.type = t, this.$element = $(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var o = n[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            else if ("manual" != o) {
                var r = "hover" == o ? "mouseenter" : "focusin",
                    a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, $.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.getOptions = function(t) {
        return t = $.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t
    }, e.prototype.getDelegateOptions = function() {
        var t = {},
            e = this.getDefaults();
        return this._options && $.each(this._options, function(i, n) { e[i] != n && (t[i] = n) }), t
    }, e.prototype.enter = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() { "in" == e.hoverState && e.show() }, e.options.delay.show)) : e.show())
    }, e.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, e.prototype.leave = function(t) {
        var e = t instanceof this.constructor ? t : $(t.currentTarget).data("bs." + this.type);
        return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e)), t instanceof $.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), e.isInStateTrue() ? void 0 : (clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() { "out" == e.hoverState && e.hide() }, e.options.delay.hide)) : e.hide())
    }, e.prototype.show = function() {
        var t = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var n = this,
                s = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(r);
            l && (r = r.replace(a, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                c = s[0].offsetWidth,
                u = s[0].offsetHeight;
            if (l) {
                var d = r,
                    p = this.getPosition(this.$viewport);
                r = "bottom" == r && h.bottom + u > p.bottom ? "top" : "top" == r && h.top - u < p.top ? "bottom" : "right" == r && h.right + c > p.width ? "left" : "left" == r && h.left - c < p.left ? "right" : r, s.removeClass(d).addClass(r)
            }
            var f = this.getCalculatedOffset(r, h, c, u);
            this.applyPlacement(f, r);
            var m = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            $.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
        }
    }, e.prototype.applyPlacement = function(t, e) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            s = i[0].offsetHeight,
            o = parseInt(i.css("margin-top"), 10),
            r = parseInt(i.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(r) && (r = 0), t.top += o, t.left += r, $.offset.setOffset(i[0], $.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, t), 0), i.addClass("in");
        var a = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == e && l != s && (t.top = t.top + s - l);
        var h = this.getViewportAdjustedDelta(e, t, a, l);
        h.left ? t.left += h.left : t.top += h.top;
        var c = /top|bottom/.test(e),
            u = c ? 2 * h.left - n + a : 2 * h.top - s + l,
            d = c ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(u, i[0][d], c)
    }, e.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, e.prototype.hide = function(t) {
        function i() { "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), t && t() }
        var n = this,
            s = $(this.$tip),
            o = $.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), $.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(e.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, e.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, e.prototype.hasContent = function() {
        return this.getTitle()
    }, e.prototype.getPosition = function(t) {
        t = t || this.$element;
        var e = t[0],
            i = "BODY" == e.tagName,
            n = e.getBoundingClientRect();
        null == n.width && (n = $.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top }));
        var s = i ? { top: 0, left: 0 } : t.offset(),
            o = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
            r = i ? { width: $(window).width(), height: $(window).height() } : null;
        return $.extend({}, n, o, r, s)
    }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - n / 2, left: e.left - i } : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width }
    }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll,
                l = e.top + o - r.scroll + n;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var h = e.left - o,
                c = e.left + o + i;
            h < r.left ? s.left = r.left - h : c > r.right && (s.left = r.left + r.width - c)
        }
        return s
    }, e.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, e.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, e.prototype.tip = function() {
        if (!this.$tip && (this.$tip = $(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, e.prototype.enable = function() { this.enabled = !0 }, e.prototype.disable = function() { this.enabled = !1 }, e.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, e.prototype.toggle = function(t) {
        var e = this;
        t && (e = $(t.currentTarget).data("bs." + this.type), e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), $(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
    }, e.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null })
    };
    var i = $.fn.tooltip;
    $.fn.tooltip = t, $.fn.tooltip.Constructor = e, $.fn.tooltip.noConflict = function() {
        return $.fn.tooltip = i, this
    }
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.popover"),
                s = "object" == typeof t && t;
            (n || !/destroy|hide/.test(t)) && (n || i.data("bs.popover", n = new e(this, s)),
                "string" == typeof t && n[t]())
        })
    }
    var e = function(t, e) { this.init("popover", t, e) };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.3.5", e.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), e.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
        return e.DEFAULTS
    }, e.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, e.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = $.fn.popover;
    $.fn.popover = t, $.fn.popover.Constructor = e, $.fn.popover.noConflict = function() {
        return $.fn.popover = i, this
    }
}(jQuery), + function($) {
    "use strict";

    function t(e, i) { this.$body = $(document.body), this.$scrollElement = $($(e).is(document.body) ? window : e), this.options = $.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this)), this.refresh(), this.process() }

    function e(e) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.scrollspy"),
                s = "object" == typeof e && e;
            n || i.data("bs.scrollspy", n = new t(this, s)), "string" == typeof e && n[e]()
        })
    }
    t.VERSION = "3.3.5", t.DEFAULTS = { offset: 10 }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            e = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), $.isWindow(this.$scrollElement[0]) || (e = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = $(this),
                n = t.data("target") || t.attr("href"),
                s = /^#./.test(n) && $(n);
            return s && s.length && s.is(":visible") && [
                [s[e]().top + i, n]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() { t.offsets.push(this[0]), t.targets.push(this[1]) })
    }, t.prototype.process = function() {
        var t = this.$scrollElement.scrollTop() + this.options.offset,
            e = this.getScrollHeight(),
            i = this.options.offset + e - this.$scrollElement.height(),
            n = this.offsets,
            s = this.targets,
            o = this.activeTarget,
            r;
        if (this.scrollHeight != e && this.refresh(), t >= i) return o != (r = s[s.length - 1]) && this.activate(r);
        if (o && t < n[0]) return this.activeTarget = null, this.clear();
        for (r = n.length; r--;) o != s[r] && t >= n[r] && (void 0 === n[r + 1] || t < n[r + 1]) && this.activate(s[r])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = $(e).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() { $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var i = $.fn.scrollspy;
    $.fn.scrollspy = e, $.fn.scrollspy.Constructor = t, $.fn.scrollspy.noConflict = function() {
        return $.fn.scrollspy = i, this
    }, $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var t = $(this);
            e.call(t, t.data())
        })
    })
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.tab");
            n || i.data("bs.tab", n = new e(this)), "string" == typeof t && n[t]()
        })
    }
    var e = function(t) { this.element = $(t) };
    e.VERSION = "3.3.5", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
        var t = this.element,
            e = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var n = e.find(".active:last a"),
                s = $.Event("hide.bs.tab", { relatedTarget: t[0] }),
                o = $.Event("show.bs.tab", { relatedTarget: n[0] });
            if (n.trigger(s), t.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = $(i);
                this.activate(t.closest("li"), e), this.activate(r, r.parent(), function() { n.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: n[0] }) })
            }
        }
    }, e.prototype.activate = function(t, i, n) {
        function s() { o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n() }
        var o = i.find("> .active"),
            r = n && $.support.transition && (o.length && o.hasClass("fade") || !!i.find("> .fade").length);
        o.length && r ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var i = $.fn.tab;
    $.fn.tab = t, $.fn.tab.Constructor = e, $.fn.tab.noConflict = function() {
        return $.fn.tab = i, this
    };
    var n = function(e) { e.preventDefault(), t.call($(this), "show") };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function($) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = $(this),
                n = i.data("bs.affix"),
                s = "object" == typeof t && t;
            n || i.data("bs.affix", n = new e(this, s)), "string" == typeof t && n[t]()
        })
    }
    var e = function(t, i) { this.options = $.extend({}, e.DEFAULTS, i), this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this)), this.$element = $(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    e.VERSION = "3.3.5", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = { offset: 0, target: window }, e.prototype.getState = function(t, e, i, n) {
        var s = this.$target.scrollTop(),
            o = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > s ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? s + this.unpin <= o.top ? !1 : "bottom" : t - n >= s + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? s : o.top,
            h = a ? r : e;
        return null != i && i >= s ? "top" : null != n && l + h >= t - n ? "bottom" : !1
    }, e.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(e.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - t
    }, e.prototype.checkPositionWithEventLoop = function() { setTimeout($.proxy(this.checkPosition, this), 1) }, e.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                n = i.top,
                s = i.bottom,
                o = Math.max($(document).height(), $(document.body).height());
            "object" != typeof i && (s = n = i), "function" == typeof n && (n = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
            var r = this.getState(o, t, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var a = "affix" + (r ? "-" + r : ""),
                    l = $.Event(a + ".bs.affix");
                if (this.$element.trigger(l), l.isDefaultPrevented()) return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({ top: o - t - s })
        }
    };
    var i = $.fn.affix;
    $.fn.affix = t, $.fn.affix.Constructor = e, $.fn.affix.noConflict = function() {
        return $.fn.affix = i, this
    }, $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var e = $(this),
                i = e.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(e, i)
        })
    })
}(jQuery),
function($) {
    "use strict";

    function t(t) {
        var e = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }];
        return $.each(e, function() { t = t.replace(this.re, this.ch) }), t
    }

    function e(t) {
        var e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            i = "(?:" + Object.keys(e).join("|") + ")",
            n = new RegExp(i),
            s = new RegExp(i, "g"),
            o = null == t ? "" : "" + t;
        return n.test(o) ? o.replace(s, function(t) {
            return e[t]
        }) : o
    }

    function i(t, e) {
        var i = arguments,
            s = t,
            o = e;
        [].shift.apply(i);
        var r, a = this.each(function() {
            var t = $(this);
            if (t.is("select")) {
                var e = t.data("selectpicker"),
                    a = "object" == typeof s && s;
                if (e) {
                    if (a)
                        for (var l in a) a.hasOwnProperty(l) && (e.options[l] = a[l])
                } else {
                    var h = $.extend({}, n.DEFAULTS, $.fn.selectpicker.defaults || {}, t.data(), a);
                    h.template = $.extend({}, n.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, t.data().template, a.template), t.data("selectpicker", e = new n(this, h, o))
                }
                "string" == typeof s && (r = e[s] instanceof Function ? e[s].apply(e, i) : e.options[s])
            }
        });
        return "undefined" != typeof r ? r : a
    }
    String.prototype.includes || ! function() {
        var t = {}.toString,
            e = function() {
                try {
                    var t = {},
                        e = Object.defineProperty,
                        i = e(t, t, t) && e
                } catch (n) {}
                return i
            }(),
            i = "".indexOf,
            n = function(e) {
                if (null == this) throw new TypeError;
                var n = String(this);
                if (e && "[object RegExp]" == t.call(e)) throw new TypeError;
                var s = n.length,
                    o = String(e),
                    r = o.length,
                    a = arguments.length > 1 ? arguments[1] : void 0,
                    l = a ? Number(a) : 0;
                l != l && (l = 0);
                var h = Math.min(Math.max(l, 0), s);
                return r + h > s ? !1 : -1 != i.call(n, o, l)
            };
        e ? e(String.prototype, "includes", { value: n, configurable: !0, writable: !0 }) : String.prototype.includes = n
    }(), String.prototype.startsWith || ! function() {
        var t = function() {
                try {
                    var t = {},
                        e = Object.defineProperty,
                        i = e(t, t, t) && e
                } catch (n) {}
                return i
            }(),
            e = {}.toString,
            i = function(t) {
                if (null == this) throw new TypeError;
                var i = String(this);
                if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
                var n = i.length,
                    s = String(t),
                    o = s.length,
                    r = arguments.length > 1 ? arguments[1] : void 0,
                    a = r ? Number(r) : 0;
                a != a && (a = 0);
                var l = Math.min(Math.max(a, 0), n);
                if (o + l > n) return !1;
                for (var h = -1; ++h < o;)
                    if (i.charCodeAt(l + h) != s.charCodeAt(h)) return !1;
                return !0
            };
        t ? t(String.prototype, "startsWith", { value: i, configurable: !0, writable: !0 }) : String.prototype.startsWith = i
    }(), Object.keys || (Object.keys = function(t, e, i) {
        i = [];
        for (e in t) i.hasOwnProperty.call(t, e) && i.push(e);
        return i
    }), $.fn.triggerNative = function(t) {
        var e = this[0],
            i;
        e.dispatchEvent ? ("function" == typeof Event ? i = new Event(t, { bubbles: !0 }) : (i = document.createEvent("Event"), i.initEvent(t, !0, !1)), e.dispatchEvent(i)) : (e.fireEvent && (i = document.createEventObject(), i.eventType = t, e.fireEvent("on" + t, i)), this.trigger(t))
    }, $.expr[":"].icontains = function(t, e, i) {
        var n = $(t),
            s = (n.data("tokens") || n.text()).toUpperCase();
        return s.includes(i[3].toUpperCase())
    }, $.expr[":"].ibegins = function(t, e, i) {
        var n = $(t),
            s = (n.data("tokens") || n.text()).toUpperCase();
        return s.startsWith(i[3].toUpperCase())
    }, $.expr[":"].aicontains = function(t, e, i) {
        var n = $(t),
            s = (n.data("tokens") || n.data("normalizedText") || n.text()).toUpperCase();
        return s.includes(i[3].toUpperCase())
    }, $.expr[":"].aibegins = function(t, e, i) {
        var n = $(t),
            s = (n.data("tokens") || n.data("normalizedText") || n.text()).toUpperCase();
        return s.startsWith(i[3].toUpperCase())
    };
    var n = function(t, e, i) { i && (i.stopPropagation(), i.preventDefault()), this.$element = $(t), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = e, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = n.prototype.val, this.render = n.prototype.render, this.refresh = n.prototype.refresh, this.setStyle = n.prototype.setStyle, this.selectAll = n.prototype.selectAll, this.deselectAll = n.prototype.deselectAll, this.destroy = n.prototype.destroy, this.remove = n.prototype.remove, this.show = n.prototype.show, this.hide = n.prototype.hide, this.init() };
    n.VERSION = "1.10.0", n.DEFAULTS = {
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results matched {0}",
        countSelectedText: function(t, e) {
            return 1 == t ? "{0} item selected" : "{0} items selected"
        },
        maxOptionsText: function(t, e) {
            return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
        },
        selectAllText: "Select All",
        deselectAllText: "Deselect All",
        doneButton: !1,
        doneButtonText: "Close",
        multipleSeparator: ", ",
        styleBase: "btn",
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: "contains",
        actionsBox: !1,
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        showTick: !1,
        template: { caret: '<span class="caret"></span>' },
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1
    }, n.prototype = {
        constructor: n,
        init: function() {
            var t = this,
                e = this.$element.attr("id");
            this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof e && (this.$button.attr("data-id", e), $('label[for="' + e + '"]').click(function(e) { e.preventDefault(), t.$button.focus() })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function(e) { t.$element.trigger("hide.bs.select", e) }, "hidden.bs.dropdown": function(e) { t.$element.trigger("hidden.bs.select", e) }, "show.bs.dropdown": function(e) { t.$element.trigger("show.bs.select", e) }, "shown.bs.dropdown": function(e) { t.$element.trigger("shown.bs.select", e) } }), t.$element[0].hasAttribute("required") && this.$element.on("invalid", function() { t.$button.addClass("bs-invalid").focus(), t.$element.on({ "focus.bs.select": function() { t.$button.focus(), t.$element.off("focus.bs.select") }, "shown.bs.select": function() { t.$element.val(t.$element.val()).off("shown.bs.select") }, "rendered.bs.select": function() { this.validity.valid && t.$button.removeClass("bs-invalid"), t.$element.off("rendered.bs.select") } }) }), setTimeout(function() { t.$element.trigger("loaded.bs.select") })
        },
        createDropdown: function() {
            var t = this.multiple || this.options.showTick ? " show-tick" : "",
                i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                n = this.autofocus ? " autofocus" : "",
                s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + e(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                r = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                a = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                l = '<div class="btn-group bootstrap-select' + t + i + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + n + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + s + o + r + '<ul class="dropdown-menu inner" role="menu"></ul>' + a + "</div></div>";
            return $(l)
        },
        createView: function() {
            var t = this.createDropdown(),
                e = this.createLi();
            return t.find("ul")[0].innerHTML = e, t
        },
        reloadLi: function() {
            this.destroyLi();
            var t = this.createLi();
            this.$menuInner[0].innerHTML = t
        },
        destroyLi: function() { this.$menu.find("li").remove() },
        createLi: function() {
            var i = this,
                n = [],
                s = 0,
                o = document.createElement("option"),
                r = -1,
                a = function(t, e, i, n) {
                    return "<li" + ("undefined" != typeof i & "" !== i ? ' class="' + i + '"' : "") + ("undefined" != typeof e & null !== e ? ' data-original-index="' + e + '"' : "") + ("undefined" != typeof n & null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
                },
                l = function(n, s, o, r) {
                    return '<a tabindex="0"' + ("undefined" != typeof s ? ' class="' + s + '"' : "") + ("undefined" != typeof o ? ' style="' + o + '"' : "") + (i.options.liveSearchNormalize ? ' data-normalized-text="' + t(e(n)) + '"' : "") + ("undefined" != typeof r || null !== r ? ' data-tokens="' + r + '"' : "") + ">" + n + '<span class="' + i.options.iconBase + " " + i.options.tickIcon + ' check-mark"></span></a>'
                };
            if (this.options.title && !this.multiple && (r--, !this.$element.find(".bs-title-option").length)) {
                var h = this.$element[0];
                o.className = "bs-title-option", o.appendChild(document.createTextNode(this.options.title)), o.value = "", h.insertBefore(o, h.firstChild), void 0 === $(h.options[h.selectedIndex]).attr("selected") && (o.selected = !0)
            }
            return this.$element.find("option").each(function(t) {
                var e = $(this);
                if (r++, !e.hasClass("bs-title-option")) {
                    var o = this.className || "",
                        h = this.style.cssText,
                        c = e.data("content") ? e.data("content") : e.html(),
                        u = e.data("tokens") ? e.data("tokens") : null,
                        d = "undefined" != typeof e.data("subtext") ? '<small class="text-muted">' + e.data("subtext") + "</small>" : "",
                        p = "undefined" != typeof e.data("icon") ? '<span class="' + i.options.iconBase + " " + e.data("icon") + '"></span> ' : "",
                        f = "OPTGROUP" === this.parentNode.tagName,
                        m = this.disabled || f && this.parentNode.disabled;
                    if ("" !== p && m && (p = "<span>" + p + "</span>"), i.options.hideDisabled && m && !f) return void r--;
                    if (e.data("content") || (c = p + '<span class="text">' + c + d + "</span>"), f && e.data("divider") !== !0) {
                        var g = " " + this.parentNode.className || "";
                        if (0 === e.index()) {
                            s += 1;
                            var v = this.parentNode.label,
                                b = "undefined" != typeof e.parent().data("subtext") ? '<small class="text-muted">' + e.parent().data("subtext") + "</small>" : "",
                                y = e.parent().data("icon") ? '<span class="' + i.options.iconBase + " " + e.parent().data("icon") + '"></span> ' : "";
                            v = y + '<span class="text">' + v + b + "</span>", 0 !== t && n.length > 0 && (r++, n.push(a("", null, "divider", s + "div"))), r++, n.push(a(v, null, "dropdown-header" + g, s))
                        }
                        if (i.options.hideDisabled && m) return void r--;
                        n.push(a(l(c, "opt " + o + g, h, u), t, "", s))
                    } else e.data("divider") === !0 ? n.push(a("", t, "divider")) : e.data("hidden") === !0 ? n.push(a(l(c, o, h, u), t, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (r++, n.push(a("", null, "divider", s + "div"))), n.push(a(l(c, o, h, u), t)));
                    i.liObj[t] = r
                }
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), n.join("")
        },
        findLis: function() {
            return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
        },
        render: function(t) {
            var e = this,
                i;
            t !== !1 && this.$element.find("option").each(function(t) {
                var i = e.findLis().eq(e.liObj[t]);
                e.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, i), e.setSelected(t, this.selected, i)
            }), this.tabIndex();
            var n = this.$element.find("option").map(function() {
                    if (this.selected) {
                        if (e.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                        var t = $(this),
                            i = t.data("icon") && e.options.showIcon ? '<i class="' + e.options.iconBase + " " + t.data("icon") + '"></i> ' : "",
                            n;
                        return n = e.options.showSubtext && t.data("subtext") && !e.multiple ? ' <small class="text-muted">' + t.data("subtext") + "</small>" : "", "undefined" != typeof t.attr("title") ? t.attr("title") : t.data("content") && e.options.showContent ? t.data("content") : i + t.html() + n
                    }
                }).toArray(),
                s = this.multiple ? n.join(this.options.multipleSeparator) : n[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var o = this.options.selectedTextFormat.split(">");
                if (o.length > 1 && n.length > o[1] || 1 == o.length && n.length >= 2) {
                    i = this.options.hideDisabled ? ", [disabled]" : "";
                    var r = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + i).length,
                        a = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n.length, r) : this.options.countSelectedText;
                    s = a.replace("{0}", n.length.toString()).replace("{1}", r.toString())
                }
            }
            void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (s = this.options.title), s || (s = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", $.trim(s.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(s), this.$element.trigger("rendered.bs.select")
        },
        setStyle: function(t, e) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
            var i = t ? t : this.options.style;
            "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
        },
        liHeight: function(t) {
            if (t || this.options.size !== !1 && !this.sizeInfo) {
                var e = document.createElement("div"),
                    i = document.createElement("div"),
                    n = document.createElement("ul"),
                    s = document.createElement("li"),
                    o = document.createElement("li"),
                    r = document.createElement("a"),
                    a = document.createElement("span"),
                    l = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                    h = this.options.liveSearch ? document.createElement("div") : null,
                    c = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                    u = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                if (a.className = "text", e.className = this.$menu[0].parentNode.className + " open", i.className = "dropdown-menu open", n.className = "dropdown-menu inner", s.className = "divider", a.appendChild(document.createTextNode("Inner text")), r.appendChild(a), o.appendChild(r), n.appendChild(o), n.appendChild(s), l && i.appendChild(l), h) {
                    var d = document.createElement("span");
                    h.className = "bs-searchbox", d.className = "form-control", h.appendChild(d), i.appendChild(h)
                }
                c && i.appendChild(c), i.appendChild(n), u && i.appendChild(u), e.appendChild(i), document.body.appendChild(e);
                var p = r.offsetHeight,
                    f = l ? l.offsetHeight : 0,
                    m = h ? h.offsetHeight : 0,
                    g = c ? c.offsetHeight : 0,
                    v = u ? u.offsetHeight : 0,
                    b = $(s).outerHeight(!0),
                    y = "function" == typeof getComputedStyle ? getComputedStyle(i) : !1,
                    _ = y ? null : $(i),
                    w = parseInt(y ? y.paddingTop : _.css("paddingTop")) + parseInt(y ? y.paddingBottom : _.css("paddingBottom")) + parseInt(y ? y.borderTopWidth : _.css("borderTopWidth")) + parseInt(y ? y.borderBottomWidth : _.css("borderBottomWidth")),
                    x = w + parseInt(y ? y.marginTop : _.css("marginTop")) + parseInt(y ? y.marginBottom : _.css("marginBottom")) + 2;
                document.body.removeChild(e), this.sizeInfo = { liHeight: p, headerHeight: f, searchHeight: m, actionsHeight: g, doneButtonHeight: v, dividerHeight: b, menuPadding: w, menuExtras: x }
            }
        },
        setSize: function() {
            if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                var t = this,
                    e = this.$menu,
                    i = this.$menuInner,
                    n = $(window),
                    s = this.$newElement[0].offsetHeight,
                    o = this.sizeInfo.liHeight,
                    r = this.sizeInfo.headerHeight,
                    a = this.sizeInfo.searchHeight,
                    l = this.sizeInfo.actionsHeight,
                    h = this.sizeInfo.doneButtonHeight,
                    c = this.sizeInfo.dividerHeight,
                    u = this.sizeInfo.menuPadding,
                    d = this.sizeInfo.menuExtras,
                    p = this.options.hideDisabled ? ".disabled" : "",
                    f, m, g, v, b = function() { g = t.$newElement.offset().top - n.scrollTop(), v = n.height() - g - s };
                if (b(), "auto" === this.options.size) {
                    var y = function() {
                        var n, s = function(t, e) {
                                return function(i) {
                                    return e ? i.classList ? i.classList.contains(t) : $(i).hasClass(t) : !(i.classList ? i.classList.contains(t) : $(i).hasClass(t))
                                }
                            },
                            c = t.$menuInner[0].getElementsByTagName("li"),
                            p = Array.prototype.filter ? Array.prototype.filter.call(c, s("hidden", !1)) : t.$lis.not(".hidden"),
                            y = Array.prototype.filter ? Array.prototype.filter.call(p, s("dropdown-header", !0)) : p.filter(".dropdown-header");
                        b(), f = v - d, t.options.container ? (e.data("height") || e.data("height", e.height()), m = e.data("height")) : m = e.height(), t.options.dropupAuto && t.$newElement.toggleClass("dropup", g > v && m > f - d), t.$newElement.hasClass("dropup") && (f = g - d), n = p.length + y.length > 3 ? 3 * o + d - 2 : 0, e.css({ "max-height": f + "px", overflow: "hidden", "min-height": n + r + a + l + h + "px" }), i.css({ "max-height": f - r - a - l - h - u + "px", "overflow-y": "auto", "min-height": Math.max(n - u, 0) + "px" })
                    };
                    y(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", y), n.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", y)
                } else if (this.options.size && "auto" != this.options.size && this.$lis.not(p).length > this.options.size) {
                    var _ = this.$lis.not(".divider").not(p).children().slice(0, this.options.size).last().parent().index(),
                        w = this.$lis.slice(0, _ + 1).filter(".divider").length;
                    f = o * this.options.size + w * c + u, t.options.container ? (e.data("height") || e.data("height", e.height()), m = e.data("height")) : m = e.height(), t.options.dropupAuto && this.$newElement.toggleClass("dropup", g > v && m > f - d), e.css({ "max-height": f + r + a + l + h + "px", overflow: "hidden", "min-height": "" }), i.css({ "max-height": f - u + "px", "overflow-y": "auto", "min-height": "" })
                }
            }
        },
        setWidth: function() {
            if ("auto" === this.options.width) {
                this.$menu.css("min-width", "0");
                var t = this.$menu.parent().clone().appendTo("body"),
                    e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                    i = t.children(".dropdown-menu").outerWidth(),
                    n = e.css("width", "auto").children("button").outerWidth();
                t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
            } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            this.$bsContainer = $('<div class="bs-container" />');
            var t = this,
                e, i, n = function(n) { t.$bsContainer.addClass(n.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", n.hasClass("dropup")), e = n.offset(), i = n.hasClass("dropup") ? 0 : n[0].offsetHeight, t.$bsContainer.css({ top: e.top + i, left: e.left, width: n[0].offsetWidth }) };
            this.$button.on("click", function() {
                var e = $(this);
                t.isDisabled() || (n(t.$newElement), t.$bsContainer.appendTo(t.options.container).toggleClass("open", !e.hasClass("open")).append(t.$menu))
            }), $(window).on("resize scroll", function() { n(t.$newElement) }), this.$element.on("hide.bs.select", function() { t.$menu.data("height", t.$menu.height()), t.$bsContainer.detach() })
        },
        setSelected: function(t, e, i) { i || (i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e) },
        setDisabled: function(t, e, i) { i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0) },
        isDisabled: function() {
            return this.$element[0].disabled
        },
        checkDisabled: function() {
            var t = this;
            this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                return !t.isDisabled()
            })
        },
        tabIndex: function() { this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98) },
        clickListener: function() {
            var t = this,
                e = $(document);
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(t) { t.stopPropagation() }), e.data("spaceSelect", !1), this.$button.on("keyup", function(t) { /(32)/.test(t.keyCode.toString(10)) && e.data("spaceSelect") && (t.preventDefault(), e.data("spaceSelect", !1)) }), this.$button.on("click", function() { t.setSize() }), this.$element.on("shown.bs.select", function() {
                if (t.options.liveSearch || t.multiple) {
                    if (!t.multiple) {
                        var e = t.liObj[t.$element[0].selectedIndex];
                        if ("number" != typeof e || t.options.size === !1) return;
                        var i = t.$lis.eq(e)[0].offsetTop - t.$menuInner[0].offsetTop;
                        i = i - t.$menuInner[0].offsetHeight / 2 + t.sizeInfo.liHeight / 2, t.$menuInner[0].scrollTop = i
                    }
                } else t.$menuInner.find(".selected a").focus()
            }), this.$menuInner.on("click", "li a", function(e) {
                var i = $(this),
                    n = i.parent().data("originalIndex"),
                    s = t.$element.val(),
                    o = t.$element.prop("selectedIndex");
                if (t.multiple && e.stopPropagation(), e.preventDefault(), !t.isDisabled() && !i.parent().hasClass("disabled")) {
                    var r = t.$element.find("option"),
                        a = r.eq(n),
                        l = a.prop("selected"),
                        h = a.parent("optgroup"),
                        c = t.options.maxOptions,
                        u = h.data("maxOptions") || !1;
                    if (t.multiple) {
                        if (a.prop("selected", !l), t.setSelected(n, !l), i.blur(), c !== !1 || u !== !1) {
                            var d = c < r.filter(":selected").length,
                                p = u < h.find("option:selected").length;
                            if (c && d || u && p)
                                if (c && 1 == c) r.prop("selected", !1), a.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(n, !0);
                                else if (u && 1 == u) {
                                h.find("option:selected").prop("selected", !1), a.prop("selected", !0);
                                var f = i.parent().data("optgroup");
                                t.$menuInner.find('[data-optgroup="' + f + '"]').removeClass("selected"), t.setSelected(n, !0)
                            } else {
                                var m = "function" == typeof t.options.maxOptionsText ? t.options.maxOptionsText(c, u) : t.options.maxOptionsText,
                                    g = m[0].replace("{n}", c),
                                    v = m[1].replace("{n}", u),
                                    b = $('<div class="notify"></div>');
                                m[2] && (g = g.replace("{var}", m[2][c > 1 ? 0 : 1]), v = v.replace("{var}", m[2][u > 1 ? 0 : 1])), a.prop("selected", !1), t.$menu.append(b), c && d && (b.append($("<div>" + g + "</div>")), t.$element.trigger("maxReached.bs.select")), u && p && (b.append($("<div>" + v + "</div>")), t.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() { t.setSelected(n, !1) }, 10), b.delay(750).fadeOut(300, function() { $(this).remove() })
                            }
                        }
                    } else r.prop("selected", !1), a.prop("selected", !0), t.$menuInner.find(".selected").removeClass("selected"), t.setSelected(n, !0);
                    t.multiple ? t.options.liveSearch && t.$searchbox.focus() : t.$button.focus(), (s != t.$element.val() && t.multiple || o != t.$element.prop("selectedIndex") && !t.multiple) && t.$element.trigger("changed.bs.select", [n, a.prop("selected"), l]).triggerNative("change")
                }
            }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(e) { e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), t.options.liveSearch && !$(e.target).hasClass("close") ? t.$searchbox.focus() : t.$button.focus()) }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) { e.preventDefault(), e.stopPropagation(), t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus() }), this.$menu.on("click", ".popover-title .close", function() { t.$button.click() }), this.$searchbox.on("click", function(t) { t.stopPropagation() }), this.$menu.on("click", ".actions-btn", function(e) { t.options.liveSearch ? t.$searchbox.focus() : t.$button.focus(), e.preventDefault(), e.stopPropagation(), $(this).hasClass("bs-select-all") ? t.selectAll() : t.deselectAll() }), this.$element.change(function() { t.render(!1) })
        },
        liveSearchListener: function() {
            var i = this,
                n = $('<li class="no-results"></li>');
            this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                i.$menuInner.find(".active").removeClass("active"), i.$searchbox.val() && (i.$searchbox.val(""), i.$lis.not(".is-hidden").removeClass("hidden"), n.parent().length && n.remove()), i.multiple || i.$menuInner.find(".selected").addClass("active"), setTimeout(function() { i.$searchbox.focus() }, 10)
            }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(t) { t.stopPropagation() }), this.$searchbox.on("input propertychange", function() {
                if (i.$searchbox.val()) {
                    var s = i.$lis.not(".is-hidden").removeClass("hidden").children("a");
                    s = i.options.liveSearchNormalize ? s.not(":a" + i._searchStyle() + '("' + t(i.$searchbox.val()) + '")') : s.not(":" + i._searchStyle() + '("' + i.$searchbox.val() + '")'), s.parent().addClass("hidden"), i.$lis.filter(".dropdown-header").each(function() {
                        var t = $(this),
                            e = t.data("optgroup");
                        0 === i.$lis.filter("[data-optgroup=" + e + "]").not(t).not(".hidden").length && (t.addClass("hidden"), i.$lis.filter("[data-optgroup=" + e + "div]").addClass("hidden"))
                    });
                    var o = i.$lis.not(".hidden");
                    o.each(function(t) {
                        var e = $(this);
                        e.hasClass("divider") && (e.index() === o.first().index() || e.index() === o.last().index() || o.eq(t + 1).hasClass("divider")) && e.addClass("hidden")
                    }), i.$lis.not(".hidden, .no-results").length ? n.parent().length && n.remove() : (n.parent().length && n.remove(), n.html(i.options.noneResultsText.replace("{0}", '"' + e(i.$searchbox.val()) + '"')).show(), i.$menuInner.append(n))
                } else i.$lis.not(".is-hidden").removeClass("hidden"), n.parent().length && n.remove();
                i.$lis.filter(".active").removeClass("active"), i.$searchbox.val() && i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), $(this).focus()
            })
        },
        _searchStyle: function() {
            var t = { begins: "ibegins", startsWith: "ibegins" };
            return t[this.options.liveSearchStyle] || "icontains"
        },
        val: function(t) {
            return "undefined" != typeof t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
        },
        changeAll: function(t) {
            "undefined" == typeof t && (t = !0), this.findLis();
            for (var e = this.$element.find("option"), i = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", t), n = i.length, s = [], o = 0; n > o; o++) {
                var r = i[o].getAttribute("data-original-index");
                s[s.length] = e.eq(r)[0]
            }
            $(s).prop("selected", t), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
        },
        selectAll: function() {
            return this.changeAll(!0)
        },
        deselectAll: function() {
            return this.changeAll(!1)
        },
        toggle: function(t) { t = t || window.event, t && t.stopPropagation(), this.$button.trigger("click") },
        keydown: function(e) {
            var i = $(this),
                n = i.is("input") ? i.parent().parent() : i.parent(),
                s, o = n.data("this"),
                r, a, l, h, c, u, d, p, f = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                m = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" };
            if (o.options.liveSearch && (n = i.parent().parent()), o.options.container && (n = o.$menu), s = $("[role=menu] li", n), p = o.$newElement.hasClass("open"), !p && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), p = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(e.keyCode.toString(10)) && p && 0 === o.$menu.find(".active").length && (e.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), s = $("[role=menu] li" + f, n), i.val() || /(38|40)/.test(e.keyCode.toString(10)) || 0 === s.filter(".active").length && (s = o.$menuInner.find("li"), s = o.options.liveSearchNormalize ? s.filter(":a" + o._searchStyle() + "(" + t(m[e.keyCode]) + ")") : s.filter(":" + o._searchStyle() + "(" + m[e.keyCode] + ")"))), s.length) {
                if (/(38|40)/.test(e.keyCode.toString(10))) r = s.index(s.find("a").filter(":focus").parent()), l = s.filter(f).first().index(), h = s.filter(f).last().index(), a = s.eq(r).nextAll(f).eq(0).index(), c = s.eq(r).prevAll(f).eq(0).index(), u = s.eq(a).prevAll(f).eq(0).index(), o.options.liveSearch && (s.each(function(t) { $(this).hasClass("disabled") || $(this).data("index", t) }), r = s.index(s.filter(".active")), l = s.first().data("index"), h = s.last().data("index"), a = s.eq(r).nextAll().eq(0).data("index"), c = s.eq(r).prevAll().eq(0).data("index"), u = s.eq(a).prevAll().eq(0).data("index")), d = i.data("prevIndex"), 38 == e.keyCode ? (o.options.liveSearch && r--, r != u && r > c && (r = c), l > r && (r = l), r == d && (r = h)) : 40 == e.keyCode && (o.options.liveSearch && r++, -1 == r && (r = 0), r != u && a > r && (r = a), r > h && (r = h), r == d && (r = l)), i.data("prevIndex", r), o.options.liveSearch ? (e.preventDefault(), i.hasClass("dropdown-toggle") || (s.removeClass("active").eq(r).addClass("active").children("a").focus(), i.focus())) : s.eq(r).children("a").focus();
                else if (!i.is("input")) {
                    var g = [],
                        v, b;
                    s.each(function() { $(this).hasClass("disabled") || $.trim($(this).children("a").text().toLowerCase()).substring(0, 1) == m[e.keyCode] && g.push($(this).index()) }), v = $(document).data("keycount"), v++, $(document).data("keycount", v), b = $.trim($(":focus").text().toLowerCase()).substring(0, 1), b != m[e.keyCode] ? (v = 1, $(document).data("keycount", v)) : v >= g.length && ($(document).data("keycount", 0), v > g.length && (v = 1)), s.eq(g[v - 1]).children("a").focus()
                }
                if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && o.options.selectOnTab) && p) {
                    if (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), o.options.liveSearch) /(32)/.test(e.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), i.focus());
                    else {
                        var y = $(":focus");
                        y.click(), y.focus(), e.preventDefault(), $(document).data("spaceSelect", !0)
                    }
                    $(document).data("keycount", 0)
                }(/(^9$|27)/.test(e.keyCode.toString(10)) && p && (o.multiple || o.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !p) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
            }
        },
        mobile: function() { this.$element.addClass("mobile-device") },
        refresh: function() { this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select") },
        hide: function() { this.$newElement.hide() },
        show: function() { this.$newElement.show() },
        remove: function() { this.$newElement.remove(), this.$element.remove() },
        destroy: function() { this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker") }
    };
    var s = $.fn.selectpicker;
    $.fn.selectpicker = i, $.fn.selectpicker.Constructor = n, $.fn.selectpicker.noConflict = function() {
        return $.fn.selectpicker = s, this
    }, $(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', n.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(t) { t.stopPropagation() }), $(window).on("load.bs.select.data-api", function() {
        $(".selectpicker").each(function() {
            var t = $(this);
            i.call(t, t.data())
        })
    })
}(jQuery),
function($) {
    $.extend({
        tablesorter: new function() {
            function benchmark(t, e) { log(t + "," + ((new Date).getTime() - e.getTime()) + "ms") }

            function log(t) { "undefined" != typeof console && "undefined" != typeof console.debug ? console.log(t) : alert(t) }

            function buildParserCache(t, e) {
                if (t.config.debug) var i = "";
                if (0 != t.tBodies.length) {
                    var n = t.tBodies[0].rows;
                    if (n[0])
                        for (var s = [], o = n[0].cells, r = o.length, a = 0; r > a; a++) {
                            var l = !1;
                            $.metadata && $(e[a]).metadata() && $(e[a]).metadata().sorter ? l = getParserById($(e[a]).metadata().sorter) : t.config.headers[a] && t.config.headers[a].sorter && (l = getParserById(t.config.headers[a].sorter)), l || (l = detectParserForColumn(t, n, -1, a)), t.config.debug && (i += "column:" + a + " parser:" + l.id + "\n"), s.push(l)
                        }
                    return t.config.debug && log(i), s
                }
            }

            function detectParserForColumn(t, e, i, n) {
                for (var s = parsers.length, o = !1, r = !1, a = !0;
                    "" == r && a;) i++, e[i] ? (o = getNodeFromRowAndCellIndex(e, i, n), r = trimAndGetNodeText(t.config, o), t.config.debug && log("Checking if value was empty on row:" + i)) : a = !1;
                for (var l = 1; s > l; l++)
                    if (parsers[l].is(r, t, o)) return parsers[l];
                return parsers[0]
            }

            function getNodeFromRowAndCellIndex(t, e, i) {
                return t[e].cells[i]
            }

            function trimAndGetNodeText(t, e) {
                return $.trim(getElementText(t, e))
            }

            function getParserById(t) {
                for (var e = parsers.length, i = 0; e > i; i++)
                    if (parsers[i].id.toLowerCase() == t.toLowerCase()) return parsers[i];
                return !1
            }

            function buildCache(t) {
                if (t.config.debug) var e = new Date;
                for (var i = t.tBodies[0] && t.tBodies[0].rows.length || 0, n = t.tBodies[0].rows[0] && t.tBodies[0].rows[0].cells.length || 0, s = t.config.parsers, o = { row: [], normalized: [] }, r = 0; i > r; ++r) {
                    var a = $(t.tBodies[0].rows[r]),
                        l = [];
                    if (a.hasClass(t.config.cssChildRow)) o.row[o.row.length - 1] = o.row[o.row.length - 1].add(a);
                    else {
                        o.row.push(a);
                        for (var h = 0; n > h; ++h) l.push(s[h].format(getElementText(t.config, a[0].cells[h]), t, a[0].cells[h]));
                        l.push(o.normalized.length), o.normalized.push(l), l = null
                    }
                }
                return t.config.debug && benchmark("Building cache for " + i + " rows:", e), o
            }

            function getElementText(t, e) {
                if (!e) return "";
                var i = $(e),
                    n = i.attr("data-sort-value");
                if (void 0 !== n) return n;
                var s = "";
                return t.supportsTextContent || (t.supportsTextContent = e.textContent || !1), s = "simple" == t.textExtraction ? t.supportsTextContent ? e.textContent : e.childNodes[0] && e.childNodes[0].hasChildNodes() ? e.childNodes[0].innerHTML : e.innerHTML : "function" == typeof t.textExtraction ? t.textExtraction(e) : $(e).text()
            }

            function appendToTable(t, e) {
                if (t.config.debug) var i = new Date;
                for (var n = e, s = n.row, o = n.normalized, r = o.length, a = o[0].length - 1, l = $(t.tBodies[0]), h = [], c = 0; r > c; c++) {
                    var u = o[c][a];
                    if (h.push(s[u]), !t.config.appender)
                        for (var d = s[u].length, p = 0; d > p; p++) l[0].appendChild(s[u][p])
                }
                t.config.appender && t.config.appender(t, h), h = null, t.config.debug && benchmark("Rebuilt table:", i), applyWidget(t), setTimeout(function() { $(t).trigger("sortEnd") }, 0)
            }

            function buildHeaders(t) {
                if (t.config.debug) var e = new Date;
                var i = $.metadata ? !0 : !1,
                    n = computeTableHeaderCellIndexes(t),
                    s = $(t.config.selectorHeaders, t).each(function(e) {
                        if (this.column = n[this.parentNode.rowIndex + "-" + this.cellIndex], this.order = formatSortingOrder(t.config.sortInitialOrder), this.count = this.order, (checkHeaderMetadata(this) || checkHeaderOptions(t, e)) && (this.sortDisabled = !0), checkHeaderOptionsSortingLocked(t, e) && (this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(t, e)), !this.sortDisabled) {
                            var i = $(this).addClass(t.config.cssHeader);
                            t.config.onRenderHeader && t.config.onRenderHeader.apply(i)
                        }
                        t.config.headerList[e] = this
                    });
                return t.config.debug && (benchmark("Built headers:", e), log(s)), s
            }

            function computeTableHeaderCellIndexes(t) {
                for (var e = [], i = {}, n = t.getElementsByTagName("THEAD")[0], s = n.getElementsByTagName("TR"), o = 0; o < s.length; o++)
                    for (var r = s[o].cells, a = 0; a < r.length; a++) {
                        var l = r[a],
                            h = l.parentNode.rowIndex,
                            c = h + "-" + l.cellIndex,
                            u = l.rowSpan || 1,
                            d = l.colSpan || 1,
                            p;
                        "undefined" == typeof e[h] && (e[h] = []);
                        for (var f = 0; f < e[h].length + 1; f++)
                            if ("undefined" == typeof e[h][f]) {
                                p = f;
                                break
                            }
                        i[c] = p;
                        for (var f = h; h + u > f; f++) {
                            "undefined" == typeof e[f] && (e[f] = []);
                            for (var m = e[f], g = p; p + d > g; g++) m[g] = "x"
                        }
                    }
                return i
            }

            function checkCellColSpan(t, e, i) {
                for (var n = [], s = t.tHead.rows, o = s[i].cells, r = 0; r < o.length; r++) {
                    var a = o[r];
                    a.colSpan > 1 ? n = n.concat(checkCellColSpan(t, headerArr, i++)) : (1 == t.tHead.length || a.rowSpan > 1 || !s[i + 1]) && n.push(a)
                }
                return n
            }

            function checkHeaderMetadata(t) {
                return $.metadata && $(t).metadata().sorter === !1 ? !0 : !1
            }

            function checkHeaderOptions(t, e) {
                return t.config.headers[e] && t.config.headers[e].sorter === !1 ? !0 : !1
            }

            function checkHeaderOptionsSortingLocked(t, e) {
                return t.config.headers[e] && t.config.headers[e].lockedOrder ? t.config.headers[e].lockedOrder : !1
            }

            function applyWidget(t) {
                for (var e = t.config.widgets, i = e.length, n = 0; i > n; n++) getWidgetById(e[n]).format(t)
            }

            function getWidgetById(t) {
                for (var e = widgets.length, i = 0; e > i; i++)
                    if (widgets[i].id.toLowerCase() == t.toLowerCase()) return widgets[i]
            }

            function formatSortingOrder(t) {
                return "Number" != typeof t ? "desc" == t.toLowerCase() ? 1 : 0 : 1 == t ? 1 : 0
            }

            function isValueInArray(t, e) {
                for (var i = e.length, n = 0; i > n; n++)
                    if (e[n][0] == t) return !0;
                return !1
            }

            function setHeadersCss(t, e, i, n) {
                e.removeClass(n[0]).removeClass(n[1]);
                var s = [];
                e.each(function(t) { this.sortDisabled || (s[this.column] = $(this)) });
                for (var o = i.length, r = 0; o > r; r++) s[i[r][0]].addClass(n[i[r][1]])
            }

            function fixColumnWidth(t, e) {
                var i = t.config;
                if (i.widthFixed) {
                    var n = $("<colgroup>");
                    $("tr:first td", t.tBodies[0]).each(function() { n.append($("<col>").css("width", $(this).width())) }), $(t).prepend(n)
                }
            }

            function updateHeaderSortCount(t, e) {
                for (var i = t.config, n = e.length, s = 0; n > s; s++) {
                    var o = e[s],
                        r = i.headerList[o[0]];
                    r.count = o[1], r.count++
                }
            }

            function multisort(table, sortList, cache) {
                if (table.config.debug) var sortTime = new Date;
                for (var dynamicExp = "sortWrapper = function(a,b) {", l = sortList.length, i = 0; l > i; i++) {
                    var c = sortList[i][0],
                        order = sortList[i][1],
                        s = "text" == table.config.parsers[c].type ? 0 == order ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c) : 0 == order ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c),
                        e = "e" + i;
                    dynamicExp += "var " + e + " = " + s, dynamicExp += "if(" + e + ") { return " + e + "; } ", dynamicExp += "else { "
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; l > i; i++) dynamicExp += "}; ";
                return dynamicExp += "return 0; ", dynamicExp += "}; ", table.config.debug && benchmark("Evaling expression:" + dynamicExp, new Date), eval(dynamicExp), cache.normalized.sort(sortWrapper), table.config.debug && benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime), cache
            }

            function makeSortFunction(t, e, i) {
                var n = "a[" + i + "]",
                    s = "b[" + i + "]";
                return "text" == t && "asc" == e ? "(" + n + " == " + s + " ? 0 : (" + n + " === null ? Number.POSITIVE_INFINITY : (" + s + " === null ? Number.NEGATIVE_INFINITY : (" + n + " < " + s + ") ? -1 : 1 )));" : "text" == t && "desc" == e ? "(" + n + " == " + s + " ? 0 : (" + n + " === null ? Number.POSITIVE_INFINITY : (" + s + " === null ? Number.NEGATIVE_INFINITY : (" + s + " < " + n + ") ? -1 : 1 )));" : "numeric" == t && "asc" == e ? "(" + n + " === null && " + s + " === null) ? 0 :(" + n + " === null ? Number.POSITIVE_INFINITY : (" + s + " === null ? Number.NEGATIVE_INFINITY : " + n + " - " + s + "));" : "numeric" == t && "desc" == e ? "(" + n + " === null && " + s + " === null) ? 0 :(" + n + " === null ? Number.POSITIVE_INFINITY : (" + s + " === null ? Number.NEGATIVE_INFINITY : " + s + " - " + n + "));" : void 0
            }

            function makeSortText(t) {
                return "((a[" + t + "] < b[" + t + "]) ? -1 : ((a[" + t + "] > b[" + t + "]) ? 1 : 0));"
            }

            function makeSortTextDesc(t) {
                return "((b[" + t + "] < a[" + t + "]) ? -1 : ((b[" + t + "] > a[" + t + "]) ? 1 : 0));"
            }

            function makeSortNumeric(t) {
                return "a[" + t + "]-b[" + t + "];"
            }

            function makeSortNumericDesc(t) {
                return "b[" + t + "]-a[" + t + "];"
            }

            function sortText(t, e) {
                return table.config.sortLocaleCompare ? t.localeCompare(e) : e > t ? -1 : t > e ? 1 : 0
            }

            function sortTextDesc(t, e) {
                return table.config.sortLocaleCompare ? e.localeCompare(t) : t > e ? -1 : e > t ? 1 : 0
            }

            function sortNumeric(t, e) {
                return t - e
            }

            function sortNumericDesc(t, e) {
                return e - t
            }

            function getCachedSortType(t, e) {
                return t[e].type
            }
            var parsers = [],
                widgets = [];
            this.defaults = { cssHeader: "header", cssAsc: "headerSortUp", cssDesc: "headerSortDown", cssChildRow: "expand-child", sortInitialOrder: "asc", sortMultiSortKey: "shiftKey", sortForce: null, sortAppend: null, sortLocaleCompare: !0, textExtraction: "simple", parsers: {}, widgets: [], widgetZebra: { css: ["even", "odd"] }, headers: {}, widthFixed: !1, cancelSelection: !0, sortList: [], headerList: [], dateFormat: "us", decimal: "/.|,/g", onRenderHeader: null, selectorHeaders: "thead th", debug: !1 }, this.benchmark = benchmark;
            var sortWrapper;
            this.construct = function(t) {
                return this.each(function() {
                    if (this.tHead && this.tBodies) {
                        var e, i, n, s, o, r = 0,
                            a;
                        this.config = {}, o = $.extend(this.config, $.tablesorter.defaults, t), e = $(this), $.data(this, "tablesorter", o), n = buildHeaders(this), this.config.parsers = buildParserCache(this, n), s = buildCache(this);
                        var l = [o.cssDesc, o.cssAsc];
                        fixColumnWidth(this), n.click(function(t) {
                            var i = e[0].tBodies[0] && e[0].tBodies[0].rows.length || 0;
                            if (!this.sortDisabled && i > 0) {
                                e.trigger("sortStart");
                                var r = $(this),
                                    a = this.column;
                                if (this.order = this.count++ % 2, this.lockedOrder && (this.order = this.lockedOrder), t[o.sortMultiSortKey])
                                    if (isValueInArray(a, o.sortList))
                                        for (var h = 0; h < o.sortList.length; h++) {
                                            var c = o.sortList[h],
                                                u = o.headerList[c[0]];
                                            c[0] == a && (u.count = c[1], u.count++, c[1] = u.count % 2)
                                        } else o.sortList.push([a, this.order]);
                                    else {
                                        if (o.sortList = [], null != o.sortForce)
                                            for (var d = o.sortForce, h = 0; h < d.length; h++) d[h][0] != a && o.sortList.push(d[h]);
                                        o.sortList.push([a, this.order])
                                    }
                                return setTimeout(function() { setHeadersCss(e[0], n, o.sortList, l), appendToTable(e[0], multisort(e[0], o.sortList, s)) }, 1), !1
                            }
                        }).mousedown(function() {
                            return o.cancelSelection ? (this.onselectstart = function() {
                                return !1
                            }, !1) : void 0
                        }), e.bind("update", function() {
                            var t = this;
                            setTimeout(function() { t.config.parsers = buildParserCache(t, n), s = buildCache(t) }, 1)
                        }).bind("updateCell", function(t, e) {
                            var i = this.config,
                                n = [e.parentNode.rowIndex - 1, e.cellIndex];
                            s.normalized[n[0]][n[1]] = i.parsers[n[1]].format(getElementText(i, e), e)
                        }).bind("sorton", function(t, e) {
                            $(this).trigger("sortStart"), o.sortList = e;
                            var i = o.sortList;
                            updateHeaderSortCount(this, i), setHeadersCss(this, n, i, l), appendToTable(this, multisort(this, i, s))
                        }).bind("appendCache", function() { appendToTable(this, s) }).bind("applyWidgetId", function(t, e) { getWidgetById(e).format(this) }).bind("applyWidgets", function() { applyWidget(this) }), $.metadata && $(this).metadata() && $(this).metadata().sortlist && (o.sortList = $(this).metadata().sortlist), o.sortList.length > 0 && e.trigger("sorton", [o.sortList]), applyWidget(this)
                    }
                })
            }, this.addParser = function(t) {
                for (var e = parsers.length, i = !0, n = 0; e > n; n++) parsers[n].id.toLowerCase() == t.id.toLowerCase() && (i = !1);
                i && parsers.push(t)
            }, this.addWidget = function(t) { widgets.push(t) }, this.formatFloat = function(t) {
                var e = parseFloat(t);
                return isNaN(e) ? 0 : e
            }, this.formatInt = function(t) {
                var e = parseInt(t);
                return isNaN(e) ? 0 : e
            }, this.isDigit = function(t, e) {
                return /^[-+]?\d*$/.test($.trim(t.replace(/[,.']/g, "")))
            }, this.clearTableBody = function(t) {
                if ($.browser.msie)
                    for (; t.tBodies[0].firstChild;) t.tBodies[0].removeChild(t.tBodies[0].firstChild);
                else t.tBodies[0].innerHTML = ""
            }
        }
    }), $.fn.extend({ tablesorter: $.tablesorter.construct });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function(t) {
            return !0
        },
        format: function(t) {
            return $.trim(t.toLocaleLowerCase())
        },
        type: "text"
    }), ts.addParser({
        id: "digit",
        is: function(t, e) {
            var i = e.config;
            return $.tablesorter.isDigit(t, i)
        },
        format: function(t) {
            return $.tablesorter.formatFloat(t)
        },
        type: "numeric"
    }), ts.addParser({
        id: "currency",
        is: function(t) {
            return /^[£$€?.]/.test(t)
        },
        format: function(t) {
            return $.tablesorter.formatFloat(t.replace(new RegExp(/[£$€]/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "ipAddress",
        is: function(t) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(t)
        },
        format: function(t) {
            for (var e = t.split("."), i = "", n = e.length, s = 0; n > s; s++) {
                var o = e[s];
                i += 2 == o.length ? "0" + o : o
            }
            return $.tablesorter.formatFloat(i)
        },
        type: "numeric"
    }), ts.addParser({
        id: "url",
        is: function(t) {
            return /^(https?|ftp|file):\/\/$/.test(t)
        },
        format: function(t) {
            return jQuery.trim(t.replace(new RegExp(/(https?|ftp|file):\/\//), ""))
        },
        type: "text"
    }), ts.addParser({
        id: "isoDate",
        is: function(t) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(t)
        },
        format: function(t) {
            return $.tablesorter.formatFloat("" != t ? new Date(t.replace(new RegExp(/-/g), "/")).getTime() : "0")
        },
        type: "numeric"
    }), ts.addParser({
        id: "percent",
        is: function(t) {
            return /\%$/.test($.trim(t))
        },
        format: function(t) {
            return $.tablesorter.formatFloat(t.replace(new RegExp(/%/g), ""))
        },
        type: "numeric"
    }), ts.addParser({
        id: "usLongDate",
        is: function(t) {
            return t.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/))
        },
        format: function(t) {
            return $.tablesorter.formatFloat(new Date(t).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "shortDate",
        is: function(t) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(t)
        },
        format: function(t, e) {
            var i = e.config;
            return t = t.replace(/\-/g, "/"), "us" == i.dateFormat && (t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2")), "pt" == i.dateFormat ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") : "uk" == i.dateFormat ? t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1") : ("dd/mm/yy" == i.dateFormat || "dd-mm-yy" == i.dateFormat) && (t = t.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3")), $.tablesorter.formatFloat(new Date(t).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "time",
        is: function(t) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(t)
        },
        format: function(t) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + t).getTime())
        },
        type: "numeric"
    }), ts.addParser({
        id: "metadata",
        is: function(t) {
            return !1
        },
        format: function(t, e, i) {
            var n = e.config,
                s = n.parserMetadataName ? n.parserMetadataName : "sortValue";
            return $(i).metadata()[s]
        },
        type: "numeric"
    }), ts.addWidget({
        id: "zebra",
        format: function(t) {
            if (t.config.debug) var e = new Date;
            var i, n = -1,
                s;
            $("tr:visible", t.tBodies[0]).each(function(e) { i = $(this), i.hasClass(t.config.cssChildRow) || n++, s = n % 2 == 0, i.removeClass(t.config.widgetZebra.css[s ? 0 : 1]).addClass(t.config.widgetZebra.css[s ? 1 : 0]) }), t.config.debug && $.tablesorter.benchmark("Applying Zebra widget", e)
        }
    })
}(jQuery), $(function() {
    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    //Toggle searchbox in menu
    $(".searchbox").click(function() {
        $(".main-nav-search-form").toggleClass("showMe");
    });

    // close searchbox when clicking anywhere but on searchbox
    $('.searchbox').on('click', function(e) {
        e.stopPropagation();
    });

    /*------------------------------------------------------*/
    /*------------------------------------------------------*/
    // scroll to contact

    $("#contactanchor").click(function() {
        $("#footer-contact").addClass("highlight");
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        return false;
    });

    /*------------------------------------------------------*/
    //Toggle bidragsgivare footer
    $('#footer-contributors h6,#widget-contributors h5').click(function() {
        var $this = $(this).next('ul');
        var $thisheader = $(this);
        $('ul').not($this).removeClass('showMe');
        $this.toggleClass('showMe');

        $('h6,h5').not($thisheader).removeClass('open');
        $thisheader.toggleClass('open');
    });


    // Toggle tidigare arrangemang
       $('.toggleArrangemang').on('click', function() {
           $(this).next('.expand_arrangemang').slideToggle('fast');
           $(this).toggleClass("open");
       });


    /* Fill map color if event inside */
    $(".collapse-content ul").each(function() {
        if ($(this).has('li').length) {
            var className = $(this).attr('class');
            $(this).addClass('hasContent');
            $('#lan-map').find('#' + className).css('fill', '#e70');
        }
    });

    /*------------------------------------------------------*/
    // slideshow on arrangemang
    jQuery("#bildspel-slider").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        loop: true,

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        navigation: true,
        dots: false,
        navText: ["Föregående", "Nästa"],

    });

    // slideshow on material för arrangörer
    jQuery(".bildspel-material").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        pagination: false,
        loop: true,

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        navigation: true,
        dots: false,
        navText: ["Föregående", "Nästa"],

    });

    jQuery(".bildspel-material2").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        stopOnHover: true,
        pagination: false,
        loop: true,

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        navigation: true,
        dots: false,
        navText: ["Föregående", "Nästa"],

    });

    jQuery('#bildspel-video').owlCarousel({
        items: 1,
        merge: true,
        loop: true,
        repeat: false,
        video: true,
        lazyLoad: false,
        navigation: true,
        dots: false,
        navText: ["Föregående", "Nästa"],
        center: true,
        videoHeight: 500


    });

    /*------------------------------------------------------*/
    // move arrangör select on arrangemang
    jQuery("#select2")
        .insertAfter("#tax-select-0");



    $(document).on('click', function(e) {
        $('.main-nav-search-form').removeClass('showMe');
    });

    $("#lan-map .lan").each(function() {
        $(this).on("click mouseenter mouseleave", function(t) {
            var e = $($(this).data("target")),
                i = $(e).closest("li").find(".toggler");
            switch (t.type) {
                case "mouseenter":
                    i.addClass("hovered");
                    break;
                case "mouseleave":
                    i.removeClass("hovered");
                    break;
                case "click":
                    e.collapse("toggle");
                    break;
                default:
                    return
            }
        })
    }), $("#lan-list").find(".collapse").each(function() {
        var t = $(this),
            e = t.data("map"),
            i = t.closest("li").find(".toggler");
        $(i).hover(function() { $(e).attr("class", "lan active") }, function() { t.hasClass("in") || $(e).attr("class", "lan") }), t.on("show.bs.collapse", function() { $(e).attr("class", "lan active") }), t.on("hide.bs.collapse", function() { $(e).attr("class", "lan") })
    }), $(".table-sortable").tablesorter()
});

jQuery(function($) {
    $('input[name="member-radio"]').on('change', function() {
        if($(this).is(':checked') && $(this).val() == 'yes') {
            $('.main-form').slideDown();
            $('.member-form-wrap').slideUp();
        } else {
            $('.member-form-wrap').slideDown();
            $('.main-form').slideUp();
        }
    });
});

$(window).on('load', function p() {
    setTimeout(p, 1000);
    if ($('#mce-success-response').css('display') == 'block'){
        jQuery('.form-has-check').addClass('member-form-pass');
        $('.main-form').delay(1000).slideDown();
        $('.member-form-wrap').delay(1000).slideUp();
        $('#radio-yes').prop('checked', true);
        $('#radio-no').prop('checked', false);
    }

    if ($('.gf_progressbar_percentage').css('width') == '66%'){
        jQuery('.form-has-check .main-form').css('display', 'block');
        jQuery('.form-has-check .member-wrapper').css('display', 'none');
    }

    if ($('.gf_progressbar_percentage').css('width') == '100%'){
        jQuery('.form-has-check .main-form').css('display', 'block');
        jQuery('.form-has-check .member-wrapper').css('display', 'none');
    }

    if ($('.gform_confirmation_wrapper').length > 0){
        jQuery('.form-has-check .main-form').css('display', 'block');
        jQuery('.form-has-check .member-wrapper').css('display', 'none');
    }

    if ($('.validation_error').length > 0){
        jQuery('.form-has-check .main-form').css('display', 'block');
    }
});


jQuery(function ($) {
    // count total regular events on front page
    var count = $('ul.lan-blekinge li:not(.cancelled), ul.lan-dalarna li:not(.cancelled), ul.lan-gotland li:not(.cancelled), ul.lan-gavleborg li:not(.cancelled), ul.lan-halland li:not(.cancelled), ul.lan-jamtland li:not(.cancelled), ul.lan-jonkoping li:not(.cancelled), ul.lan-kalmar li:not(.cancelled), ul.lan-kronoberg li:not(.cancelled), ul.lan-norrbotten li:not(.cancelled), ul.lan-skane li:not(.cancelled), ul.lan-stockholm li:not(.cancelled), ul.lan-sodermanland li:not(.cancelled), ul.lan-uppsala li:not(.cancelled), ul.lan-varmland li:not(.cancelled), ul.lan-vasterbotten li:not(.cancelled), ul.lan-vasternorrland li:not(.cancelled), ul.lan-vastmanland li:not(.cancelled), ul.lan-vastra-gotaland li:not(.cancelled), ul.lan-orebro li:not(.cancelled), ul.lan-ostergotland li:not(.cancelled)').length;
    $('#resultat').text(count);

    // count total yearly events on front page
    var countYearly = $('ul.lan-blekinge li.yearly:not(.cancelled), ul.lan-dalarna li.yearly:not(.cancelled), ul.lan-gotland li.yearly:not(.cancelled), ul.lan-gavleborg li.yearly:not(.cancelled), ul.lan-halland li.yearly:not(.cancelled), ul.lan-jamtland li.yearly:not(.cancelled), ul.lan-jonkoping li.yearly:not(.cancelled), ul.lan-kalmar li.yearly:not(.cancelled), ul.lan-kronoberg li.yearly:not(.cancelled), ul.lan-norrbotten li.yearly:not(.cancelled), ul.lan-skane li.yearly:not(.cancelled), ul.lan-stockholm li.yearly:not(.cancelled), ul.lan-sodermanland li.yearly:not(.cancelled), ul.lan-uppsala li.yearly:not(.cancelled), ul.lan-varmland li.yearly:not(.cancelled), ul.lan-vasterbotten li.yearly:not(.cancelled), ul.lan-vasternorrland li.yearly:not(.cancelled), ul.lan-vastmanland li.yearly:not(.cancelled), ul.lan-vastra-gotaland li.yearly:not(.cancelled), ul.lan-orebro li.yearly:not(.cancelled), ul.lan-ostergotland li.yearly:not(.cancelled)').length;
    /* If this IS a number and not 0 */
    if(!isNaN(countYearly) && countYearly != 0 || '0' || ''){
        var countYearlyCalc = count - countYearly;
        $('#resultat-yearly').text(countYearlyCalc);
    } else {
        /* Hide if no events */
            $('.totalEvents .yearly').hide();
        }

});


jQuery(document).ready(function(){
  $(".showTextField").hide();
  $(".showText").click(function() {
      if($(this).is(":checked")) {
          $(".showTextField").show();
      } else {
          $(".showTextField").hide();
      }
  });
});