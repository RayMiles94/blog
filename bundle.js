(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
        1: [function (require, module, exports) {
//const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );
//const InlineEditor = require( '@ckeditor/ckeditor5-build-inline' );
            const BaloonEditor = require('@ckeditor/ckeditor5-build-balloon');

            const Editorconfig = require('./src/js/CKEditorConfig.js')


            BaloonEditor
                .create(document.querySelector('#info'), Editorconfig.info)

            BaloonEditor
                .create(document.querySelector('#main_text'), Editorconfig.mainText)

            BaloonEditor
                .create(document.querySelector('#title'), Editorconfig.blogTitle)

            BaloonEditor
                .create(document.querySelector('#cover'), Editorconfig.Cover)

        }, {"./src/js/CKEditorConfig.js": 3, "@ckeditor/ckeditor5-build-balloon": 2}],
        2: [function (require, module, exports) {
            /**
             * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
             * For licensing, see LICENSE.md.
             */
            (function (e, t) {
                'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.BalloonEditor = t() : e.BalloonEditor = t()
            })(this, function () {
                return function (e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = n[o] = {i: o, l: !1, exports: {}};
                        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
                    }

                    var n = {};
                    return t.m = e, t.c = n, t.d = function (e, n, o) {
                        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
                    }, t.n = function (e) {
                        var n = e && e.__esModule ? function () {
                            return e['default']
                        } : function () {
                            return e
                        };
                        return t.d(n, 'a', n), n
                    }, t.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = '', t(t.s = 4)
                }([function (e) {
                    function t(e, t) {
                        var o = e[1] || '', i = e[3];
                        if (!i) return o;
                        if (t && 'function' == typeof btoa) {
                            var r = n(i), a = i.sources.map(function (e) {
                                return '/*# sourceURL=' + i.sourceRoot + e + ' */'
                            });
                            return [o].concat(a).concat([r]).join('\n')
                        }
                        return [o].join('\n')
                    }

                    function n(e) {
                        var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
                        return '/*# ' + ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + t) + ' */'
                    }

                    e.exports = function (e) {
                        var n = [];
                        return n.toString = function () {
                            return this.map(function (n) {
                                var o = t(n, e);
                                return n[2] ? '@media ' + n[2] + '{' + o + '}' : o
                            }).join('')
                        }, n.i = function (e, t) {
                            'string' == typeof e && (e = [[null, e, '']]);
                            for (var o = {}, r = 0, i; r < this.length; r++) i = this[r][0], 'number' == typeof i && (o[i] = !0);
                            for (r = 0; r < e.length; r++) {
                                var a = e[r];
                                'number' == typeof a[0] && o[a[0]] || (t && !a[2] ? a[2] = t : t && (a[2] = '(' + a[2] + ') and (' + t + ')'), n.push(a))
                            }
                        }, n
                    }
                }, function (e, t, n) {
                    function o(e, t) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n], i = g[o.id];
                            if (i) {
                                i.refs++;
                                for (var r = 0; r < i.parts.length; r++) i.parts[r](o.parts[r]);
                                for (; r < o.parts.length; r++) i.parts.push(c(o.parts[r], t))
                            } else {
                                for (var a = [], r = 0; r < o.parts.length; r++) a.push(c(o.parts[r], t));
                                g[o.id] = {id: o.id, refs: 1, parts: a}
                            }
                        }
                    }

                    function i(e, t) {
                        for (var n = [], o = {}, r = 0; r < e.length; r++) {
                            var i = e[r], a = t.base ? i[0] + t.base : i[0], s = i[1], l = i[2], d = i[3],
                                c = {css: s, media: l, sourceMap: d};
                            o[a] ? o[a].parts.push(c) : n.push(o[a] = {id: a, parts: [c]})
                        }
                        return n
                    }

                    function r(e, t) {
                        var n = h(e.insertInto);
                        if (!n) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
                        var o = k[k.length - 1];
                        if ('top' === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), k.push(t); else if ('bottom' === e.insertAt) n.appendChild(t); else throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.')
                    }

                    function a(e) {
                        if (null === e.parentNode) return !1;
                        e.parentNode.removeChild(e);
                        var t = k.indexOf(e);
                        0 <= t && k.splice(t, 1)
                    }

                    function s(e) {
                        var t = document.createElement('style');
                        return e.attrs.type = 'text/css', d(t, e.attrs), r(e, t), t
                    }

                    function l(e) {
                        var t = document.createElement('link');
                        return e.attrs.type = 'text/css', e.attrs.rel = 'stylesheet', d(t, e.attrs), r(e, t), t
                    }

                    function d(e, t) {
                        Object.keys(t).forEach(function (n) {
                            e.setAttribute(n, t[n])
                        })
                    }

                    function c(e, t) {
                        var n, o, i, r;
                        if (t.transform && e.css) if (r = t.transform(e.css), r) e.css = r; else return function () {
                        };
                        if (t.singleton) {
                            var d = _++;
                            n = b || (b = s(t)), o = m.bind(null, n, d, !1), i = m.bind(null, n, d, !0)
                        } else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (n = l(t), o = p.bind(null, n, t), i = function () {
                            a(n), n.href && URL.revokeObjectURL(n.href)
                        }) : (n = s(t), o = u.bind(null, n), i = function () {
                            a(n)
                        });
                        return o(e), function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                o(e = t)
                            } else i()
                        }
                    }

                    function m(e, t, n, o) {
                        var i = n ? '' : o.css;
                        if (e.styleSheet) e.styleSheet.cssText = y(t, i); else {
                            var r = document.createTextNode(i), a = e.childNodes;
                            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
                        }
                    }

                    function u(e, t) {
                        var n = t.css, o = t.media;
                        if (o && e.setAttribute('media', o), e.styleSheet) e.styleSheet.cssText = n; else {
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                            e.appendChild(document.createTextNode(n))
                        }
                    }

                    function p(e, t, n) {
                        var o = n.css, i = n.sourceMap, r = t.convertToAbsoluteUrls === void 0 && i;
                        (t.convertToAbsoluteUrls || r) && (o = w(o)), i && (o += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */');
                        var a = new Blob([o], {type: 'text/css'}), s = e.href;
                        e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                    }

                    var g = {}, f = function (e) {
                        var t;
                        return function () {
                            return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
                        }
                    }(function () {
                        return window && document && document.all && !window.atob
                    }), h = function (e) {
                        var t = {};
                        return function (n) {
                            return 'undefined' == typeof t[n] && (t[n] = e.call(this, n)), t[n]
                        }
                    }(function (e) {
                        return document.querySelector(e)
                    }), b = null, _ = 0, k = [], w = n(11);
                    e.exports = function (e, t) {
                        if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
                        t = t || {}, t.attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = f()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom');
                        var n = i(e, t);
                        return o(n, t), function (e) {
                            for (var r = [], a = 0; a < n.length; a++) {
                                var s = n[a], l = g[s.id];
                                l.refs--, r.push(l)
                            }
                            if (e) {
                                var d = i(e, t);
                                o(d, t)
                            }
                            for (var a = 0, l; a < r.length; a++) if (l = r[a], 0 === l.refs) {
                                for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                                delete g[l.id]
                            }
                        }
                    };
                    var y = function () {
                        var e = [];
                        return function (t, n) {
                            return e[t] = n, e.filter(Boolean).join('\n')
                        }
                    }()
                }, function (e, t, n) {
                    'use strict';
                    (function (e, o) {
                        var i = n(6), r = {function: !0, object: !0},
                            a = r[typeof exports] && exports && !exports.nodeType ? exports : void 0,
                            s = r[typeof e] && e && !e.nodeType ? e : void 0,
                            l = Object(i.a)(a && s && 'object' == typeof o && o), d = Object(i.a)(r[typeof self] && self),
                            c = Object(i.a)(r[typeof window] && window), m = Object(i.a)(r[typeof this] && this),
                            u = l || c !== (m && m.window) && c || d || m || Function('return this')();
                        t.a = u
                    }).call(t, n(3)(e), n(5))
                }, function (e) {
                    e.exports = function (e) {
                        if (!e.webpackPolyfill) {
                            var t = Object.create(e);
                            t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
                                enumerable: !0,
                                get: function () {
                                    return t.l
                                }
                            }), Object.defineProperty(t, 'id', {
                                enumerable: !0, get: function () {
                                    return t.i
                                }
                            }), Object.defineProperty(t, 'exports', {enumerable: !0}), t.webpackPolyfill = 1
                        }
                        return t
                    }
                }, function (e, t, n) {
                    'use strict';

                    function o(e) {
                        const t = e.match(/^([^:]+):/);
                        return t ? e + ` Read more: ${ba}#${t[1]}\n` : e
                    }

                    function i(e, t) {
                        return r(e, t) ? xa[e][t] : t.replace(/ \[context: [^\]]+\]$/, '')
                    }

                    function r(e, t) {
                        return e in xa && t in xa[e]
                    }

                    function a(e,

                ...
                    t
                )
                    {
                        t.forEach((t) = > {Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((n) = > {if(
                        !(n in e.prototype)
                    )
                        {
                            const o = Object.getOwnPropertyDescriptor(t, n);
                            o.enumerable = !1, Object.defineProperty(e.prototype, n, o)
                        }
                    })
                    })
                    }

                    function s() {
                        let e = 'e';
                        for (let t = 0; 8 > t; t++) e += ra(65536 * (1 + Math.random())).toString(16).substring(1);
                        return e
                    }

                    function l(e, t) {
                        return e[Ea] && e[Ea][t] ? e[Ea][t].emitter : null
                    }

                    function d(e, t) {
                        e[Sa] || (e[Sa] = t || s())
                    }

                    function c(e) {
                        return e[Sa]
                    }

                    function m(e) {
                        return e._events || Object.defineProperty(e, '_events', {value: {}}), e._events
                    }

                    function u() {
                        return {callbacks: [], childEvents: []}
                    }

                    function p(e, t) {
                        const n = m(e);
                        if (n[t]) return;
                        let o = t, i = null;
                        const r = [];
                        for (; '' !== o && !n[o];) n[o] = u(), r.push(n[o]), i && n[o].childEvents.push(i), i = o, o = o.substr(0, o.lastIndexOf(':'));
                        if ('' !== o) {
                            for (const e of r) e.callbacks = n[o].callbacks.slice();
                            n[o].childEvents.push(i)
                        }
                    }

                    function g(e, t) {
                        const n = m(e)[t];
                        if (!n) return [];
                        let o = [n.callbacks];
                        for (let r = 0; r < n.childEvents.length; r++) {
                            const t = g(e, n.childEvents[r]);
                            o = o.concat(t)
                        }
                        return o
                    }

                    function f(e, t) {
                        let n;
                        return e._events && (n = e._events[t]) && n.callbacks.length ? n.callbacks : -1 < t.indexOf(':') ? f(e, t.substr(0, t.lastIndexOf(':'))) : null
                    }

                    function h(e, t, n) {
                        for (let [o, i]of e) {
                            i ? 'function' == typeof i && (i = i(t.name)) : i = t.name;
                            const e = new Ta(t.source, i);
                            e.path = [...t.path
                        ],
                            o.fire(e,...n
                        )
                        }
                    }

                    function b(e) {
                        e = null == e ? e : Object(e);
                        var t = [];
                        for (var n in e) t.push(n);
                        return t
                    }

                    function _(e) {
                        zs in e || (Object.defineProperty(e, zs, {value: new Map}), Object.defineProperty(e, qs, {value: new Map}), Object.defineProperty(e, Hs, {value: new Map}))
                    }

                    function k(

                ...
                    e
                )
                    {
                        const t = y(...e
                    ),
                        n = Array.from(this._bindings.keys()), o = n.length;
                        if (!t.callback && 1 < t.to.length) throw new _a('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');
                        if (1 < o && t.callback) throw new _a('observable-bind-to-extra-callback: Cannot bind multiple attributes and use a callback in one binding.');
                        t.to.forEach((e) = > {if(e.attrs.length && e.attrs.length !== o
                    )
                        throw new _a('observable-bind-to-attrs-length: The number of attributes must match.');
                        e.attrs.length || (e.attrs = this._bindAttrs)
                    }),
                        this._to = t.to, t.callback && (this._bindings.get(n[0]).callback = t.callback), C(this._observable, this._to), x(this), this._bindAttrs.forEach((e) = > {
                            A(
                            this._observable, e
                    )
                    })
                    }

                    function w(e) {
                        return e.every((e) = > 'string' == typeof e
                    )
                    }

                    function y(

                ...
                    e
                )
                    {
                        if (!e.length) throw new _a('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');
                        const t = {to: []};
                        let n;
                        return 'function' == typeof e[e.length - 1] && (t.callback = e.pop()), e.forEach((e) = > {
                            if(
                            'string' == typeof e
                    )
                        n.attrs.push(e);
                    else
                        if ('object' == typeof e) n = {
                            observable: e,
                            attrs: []
                        }, t.to.push(n); else throw new _a('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')
                    }),
                        t
                    }

                    function v(e, t, n, o) {
                        const i = e[qs], r = i.get(n), a = r || {};
                        a[o] || (a[o] = new Set), a[o].add(t), r || i.set(n, a)
                    }

                    function x(e) {
                        let t;
                        e._bindings.forEach((n, o) = > {e._to.forEach((i) = > {
                            t = i.attrs[n.callback ? 0 : e._bindAttrs.indexOf(o)],
                            n.to.push([i.observable, t]), v(e._observable, n, i.observable, t)
                    })
                    })
                    }

                    function A(e, t) {
                        const n = e[Hs], o = n.get(t);
                        let i;
                        o.callback ? i = o.callback.apply(e, o.to.map((e) = > e[0][e[1]])
                    ):
                        (i = o.to[0], i = i[0][i[1]]), e.hasOwnProperty(t) ? e[t] = i : e.set(t, i)
                    }

                    function C(e, t) {
                        t.forEach((t) = > {const n = e[qs];
                        let o;
                        n.get(t.observable) || e.listenTo(t.observable, 'change', (i, r) = > {
                            o = n.get(t.observable)[r],
                            o && o.forEach((t) = > {A(e, t.attr
                    )
                    })
                    })
                    })
                    }

                    function T(e) {
                        const t = new Map;
                        for (const n in e) t.set(n, e[n]);
                        return t
                    }

                    function P(e) {
                        return fa(e) ? T(e) : new Map(e)
                    }

                    function E(e) {
                        return !!(e && e[Symbol.iterator])
                    }

                    function S(e) {
                        return 'string' == typeof e ? [new Ks(e)] : (E(e) || (e = [e]), Array.from(e).map((e) = > 'string' == typeof e ? new Ks(e) : e)
                    )
                    }

                    function V(e, t, n, o, i) {
                        return {done: !1, value: {type: e, item: t, previousPosition: n, nextPosition: o, length: i}}
                    }

                    function O(e, t) {
                        const n = oa(e.length, t.length);
                        for (let o = 0; o < n; o++) if (e[o] != t[o]) return o;
                        return e.length == t.length ? 'same' : e.length < t.length ? 'prefix' : 'extension'
                    }

                    function R(e) {
                        var t = -1, n = e ? e.length : 0;
                        for (this.clear(); ++t < n;) {
                            var o = e[t];
                            this.set(o[0], o[1])
                        }
                    }

                    function F(e) {
                        var t = -1, n = e ? e.length : 0;
                        for (this.clear(); ++t < n;) {
                            var o = e[t];
                            this.set(o[0], o[1])
                        }
                    }

                    function N(e) {
                        var t = -1, n = e ? e.length : 0;
                        for (this.clear(); ++t < n;) {
                            var o = e[t];
                            this.set(o[0], o[1])
                        }
                    }

                    function I(e) {
                        this.__data__ = new il(e)
                    }

                    function B(e) {
                        return Dl(Object(e))
                    }

                    function M(e) {
                        return id.call(e)
                    }

                    function D(e, t, n, o, i, r, a) {
                        var s;
                        if (o && (s = r ? o(e, i, r, a) : o(e)), void 0 !== s) return s;
                        if (!La(e)) return e;
                        var l = Es(e);
                        if (!l) {
                            var d = cd(e), c = d == Ld || d == jd;
                            if (Object(Md.a)(e)) return Bl(e, t);
                            if (d == zd || d == Dd || c && !r) {
                                if (la(e)) return r ? e : {};
                                if (s = Bd(c ? {} : e), !t) return jl(e, Il(s, e))
                            } else {
                                if (!qd[d]) return r ? e : {};
                                s = Fd(e, d, D, t)
                            }
                        } else if (s = pd(e), !t) return Ml(e, s);
                        a || (a = new Pl);
                        var m = a.get(e);
                        if (m) return m;
                        if (a.set(e, s), !l) var u = n ? Hl(e) : Nl(e);
                        return El(u || e, function (i, r) {
                            u && (r = i, i = e[r]), Ia(s, r, D(i, t, n, o, r, e, a))
                        }), s
                    }

                    function L(e, t) {
                        if ('function' == typeof t) return t(e);
                        const n = {};
                        return t.name && (n.name = j(t.name, e.name), !n.name) ? null : t.attribute && (n.attribute = z(t.attribute, e), !n.attribute) ? null : t.class && (n.class = q(t.class, e), !n.class) ? !1 : t.style && (n.style = H(t.style, e), !n.style) ? !1 : n
                    }

                    function j(e, t) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    }

                    function z(e, t) {
                        const n = [];
                        for (const o in e) {
                            const i = e[o];
                            if (t.hasAttribute(o)) {
                                const e = t.getAttribute(o);
                                if (i instanceof RegExp) {
                                    if (i.test(e)) n.push(o); else return null;
                                } else if (e === i) n.push(o); else return null
                            } else return null
                        }
                        return n
                    }

                    function q(e, t) {
                        const n = [];
                        for (const o of e) if (o instanceof RegExp) {
                            const e = t.getClassNames();
                            for (const t of e) o.test(t) && n.push(t);
                            if (0 === n.length) return null
                        } else if (t.hasClass(o)) n.push(o); else return null;
                        return n
                    }

                    function H(e, t) {
                        const n = [];
                        for (const o in e) {
                            const i = e[o];
                            if (t.hasStyle(o)) {
                                const e = t.getStyle(o);
                                if (i instanceof RegExp) {
                                    if (i.test(e)) n.push(o); else return null;
                                } else if (e === i) n.push(o); else return null
                            } else return null
                        }
                        return n
                    }

                    function W(e, t) {
                        let n = null, o = 0, r = 0, a = null;
                        if (e.clear(), '' !== t) {
                            ';' != t.charAt(t.length - 1) && (t += ';');
                            for (let s = 0; s < t.length; s++) {
                                const i = t.charAt(s);
                                if (null == n) switch (i) {
                                    case':':
                                        a || (a = t.substr(o, s - o), r = s + 1);
                                        break;
                                    case'"':
                                    case'\'':
                                        n = i;
                                        break;
                                    case';':
                                        const l = t.substr(r, s - r);
                                        a && e.set(a.trim(), l.trim()), a = null, o = s + 1;
                                } else i === n && (n = null)
                            }
                        }
                    }

                    function U(e, t) {
                        const n = t.split(/\s+/);
                        e.clear(), n.forEach((t) = > e.add(t)
                    )
                    }

                    function $(e) {
                        return 'string' == typeof e ? [new $d(e)] : (E(e) || (e = [e]), Array.from(e).map((e) = > 'string' == typeof e ? new $d(e) : e)
                    )
                    }

                    function K() {
                        for (const e of this.getChildren()) if (!e.is('uiElement')) return null;
                        return this.childCount
                    }

                    function Q(e) {
                        return e.item.is('attributeElement') || e.item.is('uiElement')
                    }

                    function J(e) {
                        return 'string' == typeof e ? [new Ks(e)] : (E(e) || (e = [e]), Array.from(e).map((e) = > 'string' == typeof e ? new Ks(e) : e)
                    )
                    }

                    function G(e, t, n) {
                        const o = t.getRange(), i = Array.from(e.getAncestors());
                        i.shift(), i.reverse();
                        const r = i.some((e) = > {if(o.containsItem(e)
                    )
                        {
                            const t = n.toViewElement(e);
                            return !!t.getCustomProperty('addHighlight')
                        }
                    })
                        ;
                        return !r
                    }

                    function Y() {
                        if (X(this)) return null;
                        let e = this.parent;
                        for (; e && e.is('attributeElement');) {
                            if (1 < X(e)) return null;
                            e = e.parent
                        }
                        return !e || 1 < X(e) ? null : this.childCount
                    }

                    function X(e) {
                        return Array.from(e.getChildren()).filter((e) = > !e.is('uiElement')
                    ).
                        length
                    }

                    function Z() {
                        return null
                    }

                    function ee(e) {
                        let t;
                        if ('string' != typeof e) t = e.keyCode + (e.altKey ? uc.alt : 0) + (e.ctrlKey ? uc.ctrl : 0) + (e.shiftKey ? uc.shift : 0); else if (t = uc[e.toLowerCase()], !t) throw new _a('keyboard-unknown-key: Unknown key name.', {key: e});
                        return t
                    }

                    function te(e) {
                        return 'string' == typeof e && (e = oe(e)), e.map((e) = > 'string' == typeof e ? ee(e) : e
                    ).
                        reduce((e, t) = > t + e, 0
                    )
                    }

                    function ne(e) {
                        const t = oe(e);
                        return mc.mac && 'ctrl' == t[0].toLowerCase() ? '\u2318' + (t[1] || '') : e
                    }

                    function oe(e) {
                        return e.split(/\s*\+\s*/)
                    }

                    function ie(e) {
                        e.on('keydown', (t, n) = > ae(t, n, e.domConverter)
                    )
                    }

                    function re() {
                        return null
                    }

                    function ae(e, t, n) {
                        if (t.keyCode == uc.arrowright) {
                            const e = t.domTarget.ownerDocument.defaultView.getSelection(),
                                o = 1 == e.rangeCount && e.getRangeAt(0).collapsed;
                            if (o || t.shiftKey) {
                                const t = e.focusNode, i = e.focusOffset, r = n.domPositionToView(t, i);
                                if (null === r) return;
                                let a = !1;
                                const s = r.getLastMatchingPosition((e) = > (e.item.is('uiElement') && (a = !0), e.item.is('uiElement') || e.item.is('attributeElement'))
                            )
                                ;
                                if (a) {
                                    const t = n.viewPositionToDom(s);
                                    o ? e.collapse(t.parent, t.offset) : e.extend(t.parent, t.offset)
                                }
                            }
                        }
                    }

                    function se(e) {
                        return 'string' == typeof e ? [new $d(e)] : (E(e) || (e = [e]), Array.from(e).map((e) = > 'string' == typeof e ? new $d(e) : e)
                    )
                    }

                    function le(e) {
                        const t = e.offset, n = e.parent;
                        if (n.is('text')) return e;
                        if (n.is('attributeElement') && 0 === n.childCount) {
                            const e = n.parent, t = n.index;
                            return n.remove(), le(new ec(e, t))
                        }
                        const o = n.getChild(t - 1), i = n.getChild(t);
                        if (!o || !i) return e;
                        if (o.is('text') && i.is('text')) return ye(o, i);
                        if (o.is('attributeElement') && i.is('attributeElement') && o.isSimilar(i)) {
                            const e = o.childCount;
                            return o.appendChildren(i.getChildren()), i.remove(), le(new ec(o, e))
                        }
                        return e
                    }

                    function de(e, t) {
                        t = E(t) ? [...t
                    ]:
                        [t], Ce(t);
                        const n = pe(e);
                        if (!n) throw new _a('view-writer-invalid-position-container');
                        const o = fe(e, !0), i = n.insertChildren(o.offset, t), r = o.getShiftedBy(i), a = le(o);
                        if (0 === i) return new tc(a, a); else {
                            a.isEqual(o) || r.offset--;
                            const e = le(r);
                            return new tc(a, e)
                        }
                    }

                    function ce(e) {
                        if (Pe(e), e.isCollapsed) return new gc;
                        const {start: t, end: n} = ge(e, !0), o = t.parent, i = n.offset - t.offset,
                            r = o.removeChildren(t.offset, i), a = le(t);
                        return e.start = a, e.end = ec.createFromPosition(a), new gc(r)
                    }

                    function me(e, t) {
                        let n;
                        if (t.isAfter(e.end)) {
                            t = fe(t, !0);
                            const o = t.parent, i = o.childCount;
                            e = ge(e, !0), n = ce(e), t.offset += o.childCount - i
                        } else n = ce(e);
                        return de(t, n)
                    }

                    function ue(e, t) {
                        if (!(t instanceof sc)) throw new _a('view-writer-wrap-invalid-attribute');
                        if (Pe(e), e.isCollapsed) return e;
                        if (e.end.isEqual(e.start.getShiftedBy(1))) {
                            const n = e.start.nodeAfter;
                            if (n instanceof sc && ve(t, n)) return e
                        }
                        if (Ae(e) && ve(t, e.start.parent)) {
                            const t = e.start.parent.parent, n = e.start.parent.index;
                            return tc.createFromParentsAndOffsets(t, n, t, n + 1)
                        }
                        const {start: n, end: o} = ge(e, !0), i = n.parent, r = he(i, n.offset, o.offset, t),
                            a = be(i, r.start.offset, r.end.offset, t), s = le(a.start);
                        s.isEqual(a.start) || a.end.offset--;
                        const l = le(a.end);
                        return new tc(s, l)
                    }

                    function pe(e) {
                        let t = e.parent;
                        for (; !Te(t);) {
                            if (!t) return;
                            t = t.parent
                        }
                        return t
                    }

                    function ge(e, t=!1) {
                        const n = e.start, o = e.end;
                        if (Pe(e), e.isCollapsed) {
                            const n = fe(e.start, t);
                            return new tc(n, n)
                        }
                        const i = fe(o, t), r = i.parent.childCount, a = fe(n, t);
                        return i.offset += i.parent.childCount - r, new tc(a, i)
                    }

                    function fe(e, t=!1) {
                        const n = e.offset, o = e.parent;
                        if (e.parent.is('emptyElement')) throw new _a('view-writer-cannot-break-empty-element');
                        if (e.parent.is('uiElement')) throw new _a('view-writer-cannot-break-ui-element');
                        if (!t && o.is('text') && Te(o.parent)) return ec.createFromPosition(e);
                        if (Te(o)) return ec.createFromPosition(e);
                        if (o.is('text')) return fe(we(e), t);
                        const i = o.childCount;
                        if (n == i) {
                            const e = new ec(o.parent, o.index + 1);
                            return fe(e, t)
                        }
                        if (0 === n) {
                            const e = new ec(o.parent, o.index);
                            return fe(e, t)
                        } else {
                            const e = o.index + 1, i = o.clone();
                            o.parent.insertChildren(e, i);
                            const r = o.childCount - n, a = o.removeChildren(n, r);
                            i.appendChildren(a);
                            const s = new ec(o.parent, e);
                            return fe(s, t)
                        }
                    }

                    function he(e, t, n, o) {
                        let r = t;
                        const i = [];
                        for (; r < n;) {
                            const t = e.getChild(r);
                            if (t.isSimilar(o)) {
                                const o = t.getChildren(), a = t.childCount;
                                t.remove(), e.insertChildren(r, o), i.push(new ec(e, r), new ec(e, r + a)), r += a, n += a - 1
                            } else t.is('attributeElement') && he(t, 0, t.childCount, o), r++
                        }
                        let a = 0;
                        for (const r of i) {
                            if (r.offset -= a, r.offset == t || r.offset == n) continue;
                            const e = le(r);
                            e.isEqual(r) || (a++, n--)
                        }
                        return tc.createFromParentsAndOffsets(e, t, e, n)
                    }

                    function be(e, t, n, o) {
                        let r = t;
                        const i = [];
                        for (; r < n;) {
                            const t = e.getChild(r), n = t.is('text'), a = t.is('attributeElement'),
                                s = t.is('emptyElement'), l = t.is('uiElement');
                            if (n || s || l || a && _e(o, t)) {
                                const n = o.clone();
                                t.remove(), n.appendChildren(t), e.insertChildren(r, n), i.push(new ec(e, r))
                            } else a && be(t, 0, t.childCount, o);
                            r++
                        }
                        let a = 0;
                        for (const r of i) {
                            if (r.offset -= a, r.offset == t) continue;
                            const e = le(r);
                            e.isEqual(r) || (a++, n--)
                        }
                        return tc.createFromParentsAndOffsets(e, t, e, n)
                    }

                    function _e(e, t) {
                        if (e.priority < t.priority) return !0;
                        return !(e.priority > t.priority) && e.getIdentity() < t.getIdentity()
                    }

                    function ke(e) {
                        const t = e.nodeBefore;
                        if (t && t.is('text')) return new ec(t, t.data.length);
                        const n = e.nodeAfter;
                        return n && n.is('text') ? new ec(n, 0) : e
                    }

                    function we(e) {
                        if (e.offset == e.parent.data.length) return new ec(e.parent.parent, e.parent.index + 1);
                        if (0 === e.offset) return new ec(e.parent.parent, e.parent.index);
                        const t = e.parent.data.slice(e.offset);
                        return e.parent.data = e.parent.data.slice(0, e.offset), e.parent.parent.insertChildren(e.parent.index + 1, new $d(t)), new ec(e.parent.parent, e.parent.index + 1)
                    }

                    function ye(e, t) {
                        const n = e.data.length;
                        return e.data += t.data, t.remove(), new ec(e, n)
                    }

                    function ve(e, t) {
                        if (e.name !== t.name || e.priority !== t.priority) return !1;
                        for (const n of e.getAttributeKeys()) if ('class' !== n && 'style' !== n && t.hasAttribute(n) && t.getAttribute(n) !== e.getAttribute(n)) return !1;
                        for (const n of e.getStyleNames()) if (t.hasStyle(n) && t.getStyle(n) !== e.getStyle(n)) return !1;
                        for (const n of e.getAttributeKeys()) 'class' !== n && 'style' !== n && (t.hasAttribute(n) || t.setAttribute(n, e.getAttribute(n)));
                        for (const n of e.getStyleNames()) t.hasStyle(n) || t.setStyle(n, e.getStyle(n));
                        for (const n of e.getClassNames()) t.hasClass(n) || t.addClass(n);
                        return !0
                    }

                    function xe(e, t) {
                        if (e.name !== t.name || e.priority !== t.priority) return !1;
                        for (const n of e.getAttributeKeys()) if ('class' !== n && 'style' !== n && (!t.hasAttribute(n) || t.getAttribute(n) !== e.getAttribute(n))) return !1;
                        if (!t.hasClass(...e.getClassNames()))
                        return !1;
                        for (const n of e.getStyleNames()) if (!t.hasStyle(n) || t.getStyle(n) !== e.getStyle(n)) return !1;
                        for (const n of e.getAttributeKeys()) 'class' !== n && 'style' !== n && t.removeAttribute(n);
                        return t.removeClass(...e.getClassNames()
                    ),
                        t.removeStyle(...e.getStyleNames()
                    ),
                        !0
                    }

                    function Ae(e) {
                        return e.start.parent == e.end.parent && e.start.parent.is('attributeElement') && 0 === e.start.offset && e.end.offset === e.start.parent.childCount
                    }

                    function Ce(e) {
                        for (const t of e) {
                            if (!hc.some((e) = > t instanceof e))
                            throw new _a('view-writer-insert-invalid-node');
                            t.is('text') || Ce(t.getChildren())
                        }
                    }

                    function Te(e) {
                        return e && (e.is('containerElement') || e.is('documentFragment'))
                    }

                    function Pe(e) {
                        const t = pe(e.start), n = pe(e.end);
                        if (!t || !n || t !== n) throw new _a('view-writer-invalid-range-container')
                    }

                    function Ee(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = e instanceof Qd ? e.clone(!0) : e(n, o, i);
                            if (r && o.consume(n.item, 'insert')) {
                                const e = i.mapper.toViewPosition(n.range.start);
                                i.mapper.bindElements(n.item, r), fc.insert(e, r)
                            }
                        }
                    }

                    function Se() {
                        return (e, t, n, o) =
                    >
                        {
                            if (n.consume(t.item, 'insert')) {
                                const e = o.mapper.toViewPosition(t.range.start), n = new $d(t.item.data);
                                fc.insert(e, n)
                            }
                        }
                    }

                    function Ve(e) {
                        return (t, n, o, i) =
                    >
                        {
                            let r, a;
                            if (e instanceof Qd ? (r = e.clone(!0), a = e.clone(!0)) : (n.isOpening = !0, r = e(n, o, i), n.isOpening = !1, a = e(n, o, i)), r && a) {
                                const e = n.markerRange, s = t.name;
                                if (!e.isCollapsed || o.consume(e, s)) {
                                    for (const t of e) if (!o.consume(t.item, s)) return;
                                    const t = i.mapper;
                                    fc.insert(t.toViewPosition(e.start), r), e.isCollapsed || fc.insert(t.toViewPosition(e.end), a)
                                }
                            }
                        }
                    }

                    function Oe(e) {
                        return e = e || ((e, t) = > ({value: e, key: t})
                    ),
                        (t, n, o, i) =
                    >
                        {
                            if (o.consume(n.item, Le(t.name))) {
                                const {key: t, value: r} = e(n.attributeNewValue, n.attributeKey, n, o, i);
                                i.mapper.toViewElement(n.item).setAttribute(t, r)
                            }
                        }
                    }

                    function Re(e) {
                        return e = e || ((e, t) = > ({key: t})
                    ),
                        (t, n, o, i) =
                    >
                        {
                            if (o.consume(n.item, Le(t.name))) {
                                const {key: t} = e(n.attributeOldValue, n.attributeKey, n, o, i);
                                i.mapper.toViewElement(n.item).removeAttribute(t)
                            }
                        }
                    }

                    function Fe(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = e instanceof Qd ? e.clone(!0) : e(n.attributeNewValue, n, o, i);
                            if (!r) return;
                            if (!o.consume(n.item, Le(t.name))) return;
                            let a = i.mapper.toViewRange(n.range);
                            if (null !== n.attributeOldValue && !(e instanceof Qd)) {
                                const t = e(n.attributeOldValue, n, o, i);
                                a = fc.unwrap(a, t)
                            }
                            fc.wrap(a, r)
                        }
                    }

                    function Ne(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = e instanceof Qd ? e.clone(!0) : e(n.attributeOldValue, n, o, i);
                            if (r && o.consume(n.item, Le(t.name))) {
                                const e = i.mapper.toViewRange(n.range);
                                fc.unwrap(e, r)
                            }
                        }
                    }

                    function Ie() {
                        return (e, t, n, o) =
                    >
                        {
                            if (!n.consume(t.item, 'remove')) return;
                            let i = o.mapper.toViewPosition(t.sourcePosition), r;
                            if (t.item.is('element')) i = i.getLastMatchingPosition((e) = > !e.item.is('containerElement')
                        ),
                            i.parent.is('text') && i.isAtEnd && (i = ec.createAfter(i.parent)), r = tc.createOn(i.nodeAfter);
                        else
                            {
                                const e = je(i, t.item.offsetSize);
                                r = new tc(i, e)
                            }
                            fc.remove(r.getTrimmed()), '$graveyard' == t.item.root.rootName && o.mapper.unbindModelElement(t.item)
                        }
                    }

                    function Be(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = 'function' == typeof e ? e(n, o, i) : e, a = n.item;
                            if (r && !n.markerRange.isCollapsed && a.is('textProxy') && o.consume(a, t.name)) {
                                r.id || (r.id = n.markerName);
                                const e = ze(r), o = i.mapper.toViewRange(n.range);
                                'addMarker' == t.name.split(':')[0] ? fc.wrap(o, e) : fc.unwrap(o, e)
                            }
                        }
                    }

                    function Me(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = 'function' == typeof e ? e(n, o, i) : e, a = n.item;
                            if (r && !n.markerRange.isCollapsed && a.is('element') && o.test(n.item, t.name)) {
                                r.priority || (r.priority = 10), r.id || (r.id = n.markerName);
                                const e = i.mapper.toViewElement(a), s = 'addMarker' == t.name.split(':')[0],
                                    l = s ? 'addHighlight' : 'removeHighlight';
                                if (e && e.getCustomProperty(l)) {
                                    o.consume(n.item, t.name);
                                    for (const e of el.createIn(a)) o.consume(e.item, t.name);
                                    e.getCustomProperty(l)(e, s ? r : r.id)
                                }
                            }
                        }
                    }

                    function De(e) {
                        return (t, n, o, i) =
                    >
                        {
                            let r, a;
                            if (e instanceof Qd ? (r = e.clone(!0), a = e.clone(!0)) : (n.isOpening = !0, r = e(n, o, i), n.isOpening = !1, a = e(n, o, i)), r && a) {
                                const e = n.markerRange, s = t.name;
                                if (!e.isCollapsed || o.consume(e, s)) {
                                    for (const t of e) if (!o.consume(t.item, s)) return;
                                    const t = i.mapper.toViewRange(e);
                                    fc.clear(t.getEnlarged(), a), r.isSimilar(a) || fc.clear(t.getEnlarged(), r)
                                }
                            }
                        }
                    }

                    function Le(e) {
                        const t = e.split(':');
                        return t[0] + ':' + t[1]
                    }

                    function je(e, t) {
                        const n = new Gd({startPosition: e, singleCharacters: !0});
                        let o = 0;
                        for (const i of n) if ('text' == i.type && (o++, o == t)) return n.position
                    }

                    function ze(e) {
                        const t = new bc('span', e.attributes);
                        if (e.class) {
                            const n = Array.isArray(e.class) ? e.class : [e.class];
                            t.addClass(...n
                        )
                        }
                        return e.priority && (t.priority = e.priority), t.setCustomProperty('highlightDescriptorId', e.id), t
                    }

                    function qe(e, t) {
                        t = We(t);
                        const n = t.reduce((e, t) = > e + t.offsetSize, 0
                    ),
                        o = e.parent;
                        $e(e);
                        const i = e.index;
                        return o.insertChildren(i, t), Ue(o, i + t.length), Ue(o, i), new el(e, e.getShiftedBy(n))
                    }

                    function He(e) {
                        if (!e.isFlat) throw new _a('model-writer-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');
                        const t = e.start.parent;
                        $e(e.start), $e(e.end);
                        const n = t.removeChildren(e.start.index, e.end.index - e.start.index);
                        return Ue(t, e.start.index), n
                    }

                    function We(e) {
                        const t = [];
                        e instanceof Array || (e = [e]);
                        for (let n = 0; n < e.length; n++) if ('string' == typeof e[n]) t.push(new Ks(e[n])); else if (e[n] instanceof Qs) t.push(new Ks(e[n].data, e[n].getAttributes())); else if (e[n] instanceof ic || e[n] instanceof Js) for (const o of e[n]) t.push(o); else e[n] instanceof $s && t.push(e[n]);
                        for (let n = 1; n < t.length; n++) {
                            const e = t[n], o = t[n - 1];
                            e instanceof Ks && o instanceof Ks && Ke(e, o) && (t.splice(n - 1, 2, new Ks(o.data + e.data, o.getAttributes())), n--)
                        }
                        return t
                    }

                    function Ue(e, t) {
                        const n = e.getChild(t - 1), o = e.getChild(t);
                        if (n && o && n.is('text') && o.is('text') && Ke(n, o)) {
                            const i = new Ks(n.data + o.data, n.getAttributes());
                            e.removeChildren(t - 1, 2), e.insertChildren(t - 1, i)
                        }
                    }

                    function $e(e) {
                        const t = e.textNode, n = e.parent;
                        if (t) {
                            const o = e.offset - t.startOffset, i = t.index;
                            n.removeChildren(i, 1);
                            const r = new Ks(t.data.substr(0, o), t.getAttributes()),
                                a = new Ks(t.data.substr(o), t.getAttributes());
                            n.insertChildren(i, [r, a])
                        }
                    }

                    function Ke(e, t) {
                        const n = e.getAttributes(), o = t.getAttributes();
                        for (const i of n) {
                            if (i[1] !== t.getAttribute(i[0])) return !1;
                            o.next()
                        }
                        return o.next().done
                    }

                    function Qe(e) {
                        const t = new Set, n = new Map,
                            o = new Ys({startPosition: Zs.createAt(e, 0), ignoreElementEnd: !0});
                        for (const n of o) '$marker' == n.item.name && t.add(n.item);
                        for (const o of t) {
                            const e = o.getAttribute('data-name'), t = Zs.createBefore(o);
                            n.has(e) ? n.get(e).end = Zs.createFromPosition(t) : n.set(e, new el(Zs.createFromPosition(t))), He(el.createOn(o))
                        }
                        return n
                    }

                    function Je() {
                        return (e, t, n, o) =
                    >
                        {
                            if (!t.output && n.consume(t.input, {name: !0})) {
                                const e = o.convertChildren(t.input, n, t);
                                t.output = new ic(We(e))
                            }
                        }
                    }

                    function Ge() {
                        return (e, t, n, o) =
                    >
                        {
                            const i = {name: '$text', inside: t.context};
                            o.schema.check(i) && n.consume(t.input) && (t.output = new Ks(t.input.data))
                        }
                    }

                    function Ye() {
                        const e = new Set(['insert', 'move', 'remove', 'reinsert']);
                        this.listenTo(this.root.document, 'change', (t, n, o) = > {e.has(n) && Xe.call(this, n, o.range, o.sourcePosition)
                    },
                        {
                            priority:'high'
                        }
                    )
                    }

                    function Xe(e, t, n) {
                        const o = t.end.offset - t.start.offset;
                        let i;
                        switch (e) {
                            case'insert':
                                const r = 'sticksToNext' == this.stickiness;
                                i = this._getTransformedByInsertion(t.start, o, r);
                                break;
                            case'move':
                            case'remove':
                            case'reinsert':
                                const a = el.createFromPositionAndShift(n, o),
                                    s = a.containsPosition(this) || a.start.isEqual(this) && 'sticksToNext' == this.stickiness || a.end.isEqual(this) && 'sticksToPrevious' == this.stickiness;
                                if (s) i = this._getCombined(n, t.start); else {
                                    const e = 'sticksToNext' == this.stickiness;
                                    i = this._getTransformedByMove(n, t.start, o, e)
                                }
                        }
                        if (!this.isEqual(i)) {
                            const e = Zs.createFromPosition(this);
                            this.path = i.path, this.root = i.root, this.fire('change', e)
                        }
                    }

                    function Ze(e, t, n, o) {
                        o || (o = e.model.batch()), n.isCollapsed || e.deleteContent(n, o);
                        const i = new xc(e, o, n.anchor);
                        let r;
                        r = t.is('documentFragment') ? t.getChildren() : [t], i.handleNodes(r, {isFirst: !0, isLast: !0});
                        const a = i.getSelectionRange();
                        a ? n.setRanges([a]) : wa.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.')
                    }

                    function et(e) {
                        return e.is('text') ? '$text' : e.name
                    }

                    function tt(e, t, n={}) {
                        if (!e.isCollapsed) {
                            const o = t.document.schema;
                            if (!n.doNotResetEntireContent && lt(o, e)) return void st(t, e);
                            const i = e.getFirstRange(), r = i.start, a = vc.createFromPosition(i.end);
                            i.start.isTouching(i.end) || t.remove(i), n.leaveUnmerged || (nt(t, r, a), o.removeDisallowedAttributes(r.parent.getChildren(), r, t)), e.setCollapsedAt(r), it(o, r) && at(t, r, e), a.detach()
                        }
                    }

                    function nt(e, t, n) {
                        const o = t.parent, i = n.parent;
                        if (o != i && o.parent && i.parent && rt(t, n)) {
                            for (t = Zs.createAfter(o), n = Zs.createBefore(i), n.isEqual(t) || e.move(i, t), e.merge(t); n.parent.isEmpty;) {
                                const t = n.parent;
                                n = Zs.createBefore(t), e.remove(t)
                            }
                            nt(e, t, n)
                        }
                    }

                    function it(e, t) {
                        const n = e.check({name: '$text', inside: t}), o = e.check({name: 'paragraph', inside: t});
                        return !n && o
                    }

                    function rt(e, t) {
                        const n = e.root.document.schema, o = new el(e, t);
                        for (const i of o.getWalker()) if (n.objects.has(i.item.name) || n.limits.has(i.item.name)) return !1;
                        return !0
                    }

                    function at(e, t, n) {
                        const o = new Gs('paragraph');
                        e.insert(t, o), n.setCollapsedAt(o)
                    }

                    function st(e, t) {
                        const n = e.document.schema.getLimitElement(t);
                        e.remove(el.createIn(n)), at(e, Zs.createAt(n), t)
                    }

                    function lt(e, t) {
                        const n = e.getLimitElement(t);
                        if (!t.containsEntireContent(n)) return !1;
                        const o = t.getFirstRange();
                        return o.start.parent != o.end.parent && e.check({name: 'paragraph', inside: n.name})
                    }

                    function dt(e) {
                        return !!e && 1 == e.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)
                    }

                    function ct(e) {
                        return !!e && 1 == e.length && /[\ud800-\udbff]/.test(e)
                    }

                    function mt(e) {
                        return !!e && 1 == e.length && /[\udc00-\udfff]/.test(e)
                    }

                    function ut(e, t) {
                        return ct(e.charAt(t - 1)) && mt(e.charAt(t))
                    }

                    function pt(e, t) {
                        return dt(e.charAt(t))
                    }

                    function gt(e, t, n={}) {
                        const o = e.model.schema, i = 'backward' != n.direction, r = n.unit ? n.unit : 'character',
                            a = t.focus,
                            s = new Ys({boundaries: bt(a, i), singleCharacters: !0, direction: i ? 'forward' : 'backward'}),
                            l = {walker: s, schema: o, isForward: i, unit: r};
                        for (let o; o = s.next();) {
                            if (o.done) return;
                            const e = ft(l, o.value);
                            if (e) return void t.moveFocusTo(e)
                        }
                    }

                    function ft(e, t) {
                        if ('text' == t.type) return ht(e.walker, e.unit);
                        if (t.type == (e.isForward ? 'elementStart' : 'elementEnd')) {
                            if (e.schema.objects.has(t.item.name)) return Zs.createAt(t.item, e.isForward ? 'after' : 'before');
                            if (e.schema.check({name: '$text', inside: t.nextPosition})) return t.nextPosition
                        } else {
                            if (e.schema.limits.has(t.item.name)) return void e.walker.skip(() = > !0
                        )
                            ;
                            if (e.schema.check({name: '$text', inside: t.nextPosition})) return t.nextPosition
                        }
                    }

                    function ht(e, t) {
                        const n = e.position.textNode;
                        if (n) {
                            const o = n.data;
                            for (let i = e.position.offset - n.startOffset; ut(o, i) || 'character' == t && pt(o, i);) e.next(), i = e.position.offset - n.startOffset
                        }
                        return e.position
                    }

                    function bt(e, t) {
                        const n = e.root, o = Zs.createAt(n, t ? 'end' : 0);
                        return t ? new el(e, o) : new el(o, e)
                    }

                    function _t(e) {
                        const t = new ic, n = e.getFirstRange();
                        if (!n || n.isCollapsed) return t;
                        const o = n.start.root, i = n.start.getCommonPath(n.end), r = o.getNodeByPath(i);
                        let a = n.start.parent == n.end.parent ? n : el.createFromParentsAndOffsets(r, n.start.path[i.length], r, n.end.path[i.length] + 1);
                        const s = a.end.offset - a.start.offset;
                        for (const n of a.getItems({shallow: !0})) n.is('textProxy') ? t.appendChildren(new Ks(n.data, n.getAttributes())) : t.appendChildren(n.clone(!0));
                        if (a != n) {
                            const e = n._getTransformedByMove(a.start, Zs.createAt(t, 0), s)[0],
                                o = new el(Zs.createAt(t), e.start), i = new el(e.end, Zs.createAt(t, 'end'));
                            kt(i), kt(o)
                        }
                        return t
                    }

                    function kt(e) {
                        const t = [];
                        Array.from(e.getItems({direction: 'backward'})).map((e) = > el.createOn(e)
                    ).
                        filter((t) = > {const n = (t.start.isAfter(e.start) || t.start.isEqual(e.start)) && (t.end.isBefore(e.end) || t.end.isEqual(e.end));
                        return n
                    }).
                        forEach((e) = > {t.push(e.start.parent), He(e)
                    }),
                        t.forEach((e) = > {for(let t = e;
                        t.parent && t.isEmpty;
                    )
                        {
                            const e = el.createOn(t);
                            t = t.parent, He(e)
                        }
                    })
                    }

                    function wt(e) {
                        var t = -1, n = e ? e.length : 0;
                        for (this.__data__ = new Tl; ++t < n;) this.add(e[t])
                    }

                    function yt(e, t, n, o, i) {
                        return !(e !== t) || (null != e && null != t && (La(e) || da(t)) ? qc(e, t, yt, n, o, i) : e !== e && t !== t)
                    }

                    function vt(e, t) {
                        if (rm.prototype[e]) throw new _a('model-batch-register-taken: This batch method name is already taken.', {name: e});
                        rm.prototype[e] = t
                    }

                    function xt(e, t, n, o) {
                        o instanceof el ? Ct(e, e.document, t, n, o) : At(e, e.document, t, n, o)
                    }

                    function At(e, t, n, o, i) {
                        const r = i.getAttribute(n);
                        let a, s;
                        const l = i.is('rootElement') ? new sm : new am;
                        r != o && (e.addDelta(l), i.is('rootElement') ? s = new Zc(i, n, r, o, t.version) : (a = i.is('element') ? new el(Zs.createBefore(i), Zs.createFromParentAndOffset(i, 0)) : new el(Zs.createBefore(i), Zs.createAfter(i)), s = new Uc(a, n, r, o, t.version)), l.addOperation(s), t.applyOperation(s))
                    }

                    function Ct(e, t, n, o, i) {
                        function r() {
                            0 === a.operations.length && e.addDelta(a);
                            const i = new el(s, l), r = new Uc(i, n, d, o, t.version);
                            a.addOperation(r), t.applyOperation(r)
                        }

                        const a = new am;
                        let s = i.start, l, d, c;
                        for (const a of i) c = a.item.getAttribute(n), l && d != c && (d != o && r(), s = l), l = a.nextPosition, d = c;
                        l instanceof Zs && l != s && d != o && r()
                    }

                    function Tt(e, t, n, o, i) {
                        const r = new $c(n, o, i, e.document.version);
                        t.addOperation(r), e.document.applyOperation(r)
                    }

                    function Pt(e, t, n) {
                        const o = new dm;
                        e.addDelta(o);
                        const i = e.document.graveyard, r = new Zs(i, [0]), a = new Qc(t, n, r, e.document.version);
                        o.addOperation(a), e.document.applyOperation(a)
                    }

                    function Et(e, t, n) {
                        t.addOperation(n), e.document.applyOperation(n)
                    }

                    function St(e) {
                        return [e.clone()]
                    }

                    function Vt(e, t) {
                        for (let n = 0; n < t.length; n++) t[n].baseVersion = e + n + 1;
                        return t
                    }

                    function Ot(e, t) {
                        return null === e.targetPosition._getTransformedByDeletion(t.sourcePosition, t.howMany)
                    }

                    function Rt(e) {
                        return 0 === e.length ? null : 1 == e.length ? e[0] : (e[0].end = e[e.length - 1].end, e[0])
                    }

                    function Ft(e, t, n) {
                        const o = [];
                        for (let r = 0; r < e.length; r++) {
                            const i = Nt(e[r], t, n.isSticky);
                            o.push(i);
                            for (let t = r + 1; t < e.length; t++) e[t] = e[t]._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany)[0];
                            t = t._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany, !0, !1)
                        }
                        return o
                    }

                    function Nt(e, t, n) {
                        let o = '$graveyard' == t.root.rootName ? Qc : '$graveyard' == e.start.root.rootName ? Kc : $c;
                        const i = new o(e.start, e.end.offset - e.start.offset, t, 0);
                        return i.isSticky = n, i
                    }

                    function It(e, t, n, o, i) {
                        var r = -1, a = e.length;
                        for (n || (n = wm), i || (i = []); ++r < a;) {
                            var s = e[r];
                            0 < t && n(s) ? 1 < t ? It(s, t - 1, n, o, i) : zl(i, s) : !o && (i[i.length] = s)
                        }
                        return i
                    }

                    function Bt(e, t) {
                        if ('function' != typeof e || t && 'function' != typeof t) throw new TypeError(Lm);
                        var n = function () {
                            var o = arguments, i = t ? t.apply(this, o) : o[0], r = n.cache;
                            if (r.has(i)) return r.get(i);
                            var a = e.apply(this, o);
                            return n.cache = r.set(i, a), a
                        };
                        return n.cache = new (Bt.Cache || Tl), n
                    }

                    function Mt(e, t) {
                        for (const n of t) for (const t of n.operations) t.baseVersion = ++e;
                        return t
                    }

                    function Dt(e) {
                        return e.reduce((e, t) = > e + t.operations.length, 0
                    )
                    }

                    function Lt(e, t) {
                        const n = e[e.length - 1];
                        let o = n.operations.length + n.baseVersion;
                        const r = new im;
                        for (let n = 0; n < t; n++) r.addOperation(new Yc(o++));
                        e.push(r)
                    }

                    function jt(e, t, n) {
                        Wt(e, t, n), zt(e, t, n), Ht(t, n), qt(t, n)
                    }

                    function zt(e, t, n) {
                        const o = n.originalDelta.get(t);
                        if (n.document.history.isUndoingDelta(o)) {
                            const t = n.document.history.getUndoneDelta(o), i = n.wasAffected.get(e), r = i.get(t);
                            r !== void 0 && (n.insertBefore = r)
                        }
                    }

                    function qt(e, t) {
                        const n = t.originalDelta.get(e), o = t.document.history;
                        t.forceNotSticky = o.isUndoneDelta(n) || o.isUndoingDelta(n)
                    }

                    function Ht(e, t) {
                        const n = t.document.history, o = t.originalDelta.get(e);
                        t.forceWeakRemove = n.isUndoneDelta(o)
                    }

                    function Wt(e, t, n) {
                        n.wasAffected.get(e) || n.wasAffected.set(e, new Map);
                        const o = n.originalDelta.get(t);
                        let i = !!n.wasAffected.get(e).get(o);
                        for (const o of e.operations) {
                            for (const e of t.operations) if (o instanceof $c && e instanceof $c && Ut(o, e)) {
                                i = !0;
                                break
                            }
                            if (i) break
                        }
                        n.wasAffected.get(e).set(o, i)
                    }

                    function Ut(e, t) {
                        const n = e.targetPosition, o = t.sourcePosition, i = O(o.getParentPath(), n.getParentPath());
                        return !(n.root != o.root) && 'same' == i && o.offset < n.offset
                    }

                    function $t(e, t, n) {
                        delete n.insertBefore, delete n.forceNotSticky, delete n.forceWeakRemove;
                        const o = n.wasAffected.get(e);
                        n.wasAffected.delete(e);
                        for (const i of t) n.wasAffected.set(i, new Map(o))
                    }

                    function Kt(e, t) {
                        let n = [], i = null, o;
                        switch (e) {
                            case lm:
                            case dm:
                                for (const e of t) i = e instanceof Yc ? new im : e instanceof Qc ? new dm : new lm, i.addOperation(e), n.push(i);
                                return n;
                            case mm:
                            case gm:
                                return i = new e, i.addOperation(t[0]), i.addOperation(t[1]), n = Kt(lm, t.slice(2)), [i].concat(n);
                            case um:
                            case fm:
                                return n = Kt(lm, t.slice(0, -2)), i = new e, i.addOperation(t[t.length - 2]), i.addOperation(t[t.length - 1]), n.concat(i);
                            case pm:
                                return i = t[0] instanceof Yc ? new im : new pm, i.addOperation(t[0]), [i];
                            case am:
                                for (o = 0; o < t.length && !!(t[o] instanceof Yc); o++) ;
                                o == t.length ? i = new im : (i = new am, 0 != o && t.unshift(t.splice(o, 1)[0]));
                                for (const e of t) i.addOperation(e);
                                return [i];
                            default:
                                i = new e;
                                for (const e of t) i.addOperation(e);
                                return [i];
                        }
                    }

                    function Qt(e, t, n, o) {
                        const i = e.document, r = new mp, a = new Gc(t, n, o, i.markers, i.version);
                        e.addDelta(r), r.addOperation(a), i.applyOperation(a)
                    }

                    function Jt(e, t) {
                        const n = e.clone(), o = n.operations[0];
                        return o.oldRange && (o.oldRange = o.oldRange.getTransformedByDelta(t)[0]), o.newRange && (o.newRange = o.newRange.getTransformedByDelta(t)[0]), [n]
                    }

                    function Gt(e, t) {
                        function n() {
                            const n = new el(e.position.getShiftedBy(s), e.position.getShiftedBy(l)),
                                i = new Uc(n, t.key, a, t.value, 0);
                            o.addOperation(i)
                        }

                        const o = new am, r = e.nodes;
                        let a = r.getNode(0).getAttribute(t.key), s = 0, l = r.getNode(0).offsetSize;
                        for (let o = 1; o < r.length; o++) {
                            const e = r.getNode(o), i = e.getAttribute(t.key);
                            i != a && (a != t.value && n(), a = i, s = l), l += e.offsetSize
                        }
                        return n(), o
                    }

                    function Yt() {
                        const e = new im;
                        return e.addOperation(new Yc(0)), e
                    }

                    function Xt() {
                        const e = new Set(['insert', 'move', 'remove', 'reinsert']);
                        this.listenTo(this.root.document, 'change', (t, n, o, i, r) = > {e.has(n) && Zt.call(this, n, r, i, o.range, o.sourcePosition)
                    },
                        {
                            priority:'high'
                        }
                    )
                    }

                    function Zt(e, t, n, o, i) {
                        const r = o.end.offset - o.start.offset;
                        let a = o.start;
                        ('move' == e || 'remove' == e || 'reinsert' == e) && (a = a._getTransformedByInsertion(i, r));
                        const s = this._getTransformedByDocumentChange(e, t, a, r, i);
                        ('move' == e || 'remove' == e || 'reinsert' == e) && 3 == s.length && (s[2] = o);
                        const l = el.createFromRanges(s), d = !l.isEqual(this), c = this.containsPosition(a),
                            m = i && (this.containsPosition(i) || this.start.isEqual(i));
                        if (d) {
                            const t = el.createFromRange(this);
                            this.start = l.start, this.end = l.end, this.fire('change:range', t, {
                                type: e,
                                batch: n,
                                range: o,
                                sourcePosition: i
                            })
                        } else (c || m) && this.fire('change:content', el.createFromRange(this), {
                            type: e,
                            batch: n,
                            range: o,
                            sourcePosition: i
                        })
                    }

                    function en(e, t) {
                        if (e.size != t.size) return !1;
                        for (const n of e.entries()) {
                            const e = JSON.stringify(n[1]), o = JSON.stringify(t.get(n[0]));
                            if (e !== o) return !1
                        }
                        return !0
                    }

                    function tn(e, t) {
                        return !t.has(e) && (t.add(e), e.document.schema.itemExtends(e.name, '$block') && e.parent)
                    }

                    function nn(e, t) {
                        const n = e.parent.getAncestors({parentFirst: !0, includeSelf: !0}), o = n.find((e) = > tn(e, t)
                    )
                        ;
                        return n.forEach((e) = > t.add(e)
                    ),
                        o
                    }

                    function on(e) {
                        return e instanceof Qs || e instanceof Ks ? e.getAttributes() : null
                    }

                    function rn(e, t, n) {
                        if (!t || 'transparent' == t.type) return;
                        const o = e.range && e.range.start.parent;
                        !o || o.isEmpty || n.enqueueChanges(() = > {const e = Array.from(o.getAttributeKeys()).filter((e) = > e.startsWith(_p)
                    )
                        ;
                        for (const n of e) t.removeAttribute(o, n)
                    })
                    }

                    function an(e, t, n) {
                        for (let o = n.length - 1, i = t.length - 1; 0 <= o && 0 <= i;) {
                            const r = t[i];
                            if (!e.hasItem(r)) return !1;
                            const a = e._extensionChains.get(r);
                            if (a.includes(n[o])) o--, i--; else return !1
                        }
                        return !0
                    }

                    function sn(e) {
                        const t = e.textNode;
                        if (t) {
                            const n = t.data, o = e.offset - t.startOffset;
                            return !ut(n, o) && !pt(n, o)
                        }
                        return !0
                    }

                    function* ln(e, t) {
                        for (let n = !1; !n;) {
                            if (n = !0, e) {
                                const t = e.next();
                                t.done || (n = !1, yield{walker: e, value: t.value})
                            }
                            if (t) {
                                const e = t.next();
                                e.done || (n = !1, yield{walker: t, value: e.value})
                            }
                        }
                    }

                    function dn(e) {
                        return !!(e && pl(e.addEventListener))
                    }

                    function cn(e) {
                        return e['data-ck-expando'] || (e['data-ck-expando'] = s())
                    }

                    function mn(e) {
                        let t = 0;
                        for (const n of e) t++;
                        return t
                    }

                    function un(e) {
                        return e instanceof Text && e.data.substr(0, Bp) === Mp
                    }

                    function pn(e) {
                        return e.data.length == Bp && un(e)
                    }

                    function gn(e) {
                        return un(e) ? e.data.slice(Bp) : e.data
                    }

                    function fn(e, t) {
                        let n = Dp.get(t);
                        return n || (n = t(window.document), Dp.set(t, n)), e.isEqualNode(n)
                    }

                    function hn(e) {
                        e.on('keydown', bn)
                    }

                    function bn(e, t) {
                        if (t.keyCode == uc.arrowleft) {
                            const e = t.domTarget.ownerDocument.defaultView.getSelection();
                            if (1 == e.rangeCount && e.getRangeAt(0).collapsed) {
                                const t = e.getRangeAt(0).startContainer, n = e.getRangeAt(0).startOffset;
                                un(t) && n <= Bp && e.collapse(t, 0)
                            }
                        }
                    }

                    function _n(e, t, o) {
                        function i(n) {
                            const i = (c[n - 1] === void 0 ? -1 : c[n - 1]) + 1, m = c[n + 1] === void 0 ? -1 : c[n + 1],
                                u = i > m ? -1 : 1;
                            d[n + u] && (d[n] = d[n + u].slice(0)), d[n] || (d[n] = []), d[n].push(i > m ? r : a);
                            let p = ia(i, m), g = p - n;
                            for (; g < s && p < l && o(e[g], t[p]);) g++, p++, d[n].push('equal');
                            return p
                        }

                        o = o || function (e, t) {
                            return e === t
                        };
                        let r, a;
                        if (t.length < e.length) {
                            const n = e;
                            e = t, t = n, r = 'delete', a = 'insert'
                        } else r = 'insert', a = 'delete';
                        const s = e.length, l = t.length, n = l - s, d = {}, c = {};
                        let m = 0, u;
                        do {
                            for (u = -m; u < n; u++) c[u] = i(u);
                            for (u = n + m; u > n; u--) c[u] = i(u);
                            c[n] = i(n), m++
                        } while (c[n] !== l);
                        return d[n].slice(1)
                    }

                    function kn(e, t, n) {
                        e.insertBefore(n, e.childNodes[t] || null)
                    }

                    function wn(e) {
                        const t = e.parentNode;
                        t && t.removeChild(e)
                    }

                    function yn(e) {
                        if ('false' == e.getAttribute('contenteditable')) return !1;
                        const t = e.findAncestor((e) = > e.hasAttribute('contenteditable')
                    )
                        ;
                        return !t || 'true' == t.getAttribute('contenteditable')
                    }

                    function vn(e) {
                        let t = 0;
                        for (; e.previousSibling;) e = e.previousSibling, t++;
                        return t
                    }

                    function xn(e) {
                        const t = [];
                        for (; e && e.nodeType != Node.DOCUMENT_NODE;) t.unshift(e), e = e.parentNode;
                        return t
                    }

                    function An(e, t) {
                        const n = xn(e), o = xn(t);
                        let r = 0;
                        for (; n[r] == o[r] && n[r];) r++;
                        return 0 == r ? null : n[r - 1]
                    }

                    function Cn(e, t, n) {
                        let o = xn(e);
                        return n && (o = o.slice(o.indexOf(n) + 1)), o.some((e) = > e.tagName && t.includes(e.tagName.toLowerCase())
                    )
                    }

                    function Tn(e, t) {
                        for (; e && e != jp.document;) t(e), e = e.parentNode
                    }

                    function Pn(e) {
                        return e == uc.arrowright || e == uc.arrowleft || e == uc.arrowup || e == uc.arrowdown
                    }

                    function En(e) {
                        return '[object Range]' == Object.prototype.toString.apply(e)
                    }

                    function Sn(e) {
                        return '[object Window]' == Object.prototype.toString.apply(e)
                    }

                    function Vn(e) {
                        const t = e.ownerDocument.defaultView.getComputedStyle(e);
                        return {
                            top: parseInt(t.borderTopWidth, 10),
                            right: parseInt(t.borderRightWidth, 10),
                            bottom: parseInt(t.borderBottomWidth, 10),
                            left: parseInt(t.borderLeftWidth, 10)
                        }
                    }

                    function On(e, t) {
                        for (const n of ig) e[n] = t[n]
                    }

                    function Rn(e) {
                        return !!ng(e) && e === e.ownerDocument.body
                    }

                    function Fn({target: e, viewportOffset: t = 0}) {
                        const n = jn(e);
                        for (let o = n, i = null; o;) {
                            let r;
                            r = o == n ? zn(e) : zn(i), In(r, () = > qn(e, o)
                        )
                            ;const a = qn(e, o);
                            Nn(o, a, t), o.parent == o ? o = null : (i = o.frameElement, o = o.parent)
                        }
                    }

                    function Nn(e, t, n) {
                        const o = t.clone().moveBy(0, n), i = t.clone().moveBy(0, -n),
                            r = new og(e).excludeScrollbarsAndBorders();
                        if (![i, o].every((e) = > r.contains(e)))
                        {
                            let {scrollX: a, scrollY: s} = e;
                            Mn(i, r) ? s -= r.top - t.top + n : Bn(o, r) && (s += t.bottom - r.bottom + n), Dn(t, r) ? a -= r.left - t.left + n : Ln(t, r) && (a += t.right - r.right + n), e.scrollTo(a, s)
                        }
                    }

                    function In(e, t) {
                        const n = jn(e);
                        for (let o, i; e != n.document.body;) i = t(), o = new og(e).excludeScrollbarsAndBorders(), o.contains(i) || (Mn(i, o) ? e.scrollTop -= o.top - i.top : Bn(i, o) && (e.scrollTop += i.bottom - o.bottom), Dn(i, o) ? e.scrollLeft -= o.left - i.left : Ln(i, o) && (e.scrollLeft += i.right - o.right)), e = e.parentNode
                    }

                    function Bn(e, t) {
                        return e.bottom > t.bottom
                    }

                    function Mn(e, t) {
                        return e.top < t.top
                    }

                    function Dn(e, t) {
                        return e.left < t.left
                    }

                    function Ln(e, t) {
                        return e.right > t.right
                    }

                    function jn(e) {
                        return En(e) ? e.startContainer.ownerDocument.defaultView : e.ownerDocument.defaultView
                    }

                    function zn(e) {
                        if (En(e)) {
                            let t = e.commonAncestorContainer;
                            return t.nodeType == Node.TEXT_NODE && (t = t.parentNode), t
                        }
                        return e.parentNode
                    }

                    function qn(e, t) {
                        const n = jn(e), o = new og(e);
                        if (n === t) return o;
                        for (let i = n; i != t;) {
                            const e = i.frameElement, t = new og(e).excludeScrollbarsAndBorders();
                            o.moveBy(t.left, t.top), i = i.parent
                        }
                        return o
                    }

                    function Hn(e, t) {
                        return (n, o) =
                    >
                        {
                            const i = o.newSelection, r = new bp, a = [];
                            for (const e of i.getRanges()) a.push(t.toModelRange(e));
                            r.setRanges(a, i.isBackward), r.isEqual(e.selection) || e.enqueueChanges(() = > {e.selection.setTo(r)
                        })
                        }
                    }

                    function Wn() {
                        return (e, t, n, o) =
                    >
                        {
                            const i = t.selection;
                            if (!i.isCollapsed && n.consume(i, 'selection')) {
                                o.viewSelection.removeAllRanges();
                                for (const e of i.getRanges()) {
                                    const t = o.mapper.toViewRange(e);
                                    o.viewSelection.addRange(t, i.isBackward)
                                }
                            }
                        }
                    }

                    function Un() {
                        return (e, t, n, o) =
                    >
                        {
                            const i = t.selection;
                            if (i.isCollapsed && n.consume(i, 'selection')) {
                                const e = i.getFirstPosition(), t = o.mapper.toViewPosition(e), n = fc.breakAttributes(t);
                                o.viewSelection.removeAllRanges(), o.viewSelection.addRange(new tc(n, n))
                            }
                        }
                    }

                    function $n(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = e instanceof Qd ? e.clone(!0) : e(n.value, n, n.selection, o, i);
                            if (r) {
                                const e = 'selectionAttribute:' + n.key;
                                Qn(n.selection, i.viewSelection, r, o, e)
                            }
                        }
                    }

                    function Kn(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = 'function' == typeof e ? e(n, o, i) : e;
                            if (r) {
                                r.id || (r.id = n.markerName);
                                const e = ze(r), t = 'selectionMarker:' + n.markerName;
                                Qn(n.selection, i.viewSelection, e, o, t)
                            }
                        }
                    }

                    function Qn(e, t, n, o, i) {
                        if (!e.isCollapsed) return;
                        if (!o.consume(e, i)) return;
                        let r = t.getFirstPosition();
                        Jn(r.parent) && (r = r.getLastMatchingPosition((e) = > e.item.is('uiElement'))
                    ),
                        r = fc.wrapPosition(r, n), t.removeAllRanges(), t.addRange(new tc(r, r))
                    }

                    function Jn(e) {
                        if (!e.is('element')) return !1;
                        for (const t of e.getChildren()) if (!t.is('uiElement')) return !1;
                        return !0
                    }

                    function Gn() {
                        return (e, t, n, o) =
                    >
                        {
                            for (const i of o.viewSelection.getRanges()) i.isCollapsed && i.end.parent.document && fc.mergeAttributes(i.start);
                            o.viewSelection.removeAllRanges()
                        }
                    }

                    function Yn() {
                        return (e, t, n, o) =
                    >
                        o.viewSelection.setFake(!1)
                    }

                    function Xn(e) {
                        return e instanceof HTMLTextAreaElement ? e.value : e.innerHTML
                    }

                    function Zn(e, t) {
                        e instanceof HTMLTextAreaElement && (e.value = t), e.innerHTML = t
                    }

                    function eo(e) {
                        return e.every((e) = > 'string' == typeof e
                    )
                    }

                    function to(e) {
                        return !!e && ((e.value && (e = e.value), Array.isArray(e)) ? e.some(to) : !!(e instanceof fg))
                    }

                    function no(e, t) {
                        return e.map((e) = > e instanceof fg ? e.getValue(t) : e
                    )
                    }

                    function oo(e, t, {node: n}) {
                        let o = no(e, n);
                        o = 1 == e.length && e[0] instanceof bg ? o[0] : o.reduce(fo, ''), _o(o) ? t.remove() : t.set(o)
                    }

                    function io(e) {
                        return {
                            set(t) {
                                e.textContent = t
                            }, remove() {
                                e.textContent = ''
                            }
                        }
                    }

                    function ro(e, t, n) {
                        return {
                            set(o) {
                                e.setAttributeNS(n, t, o)
                            }, remove() {
                                e.removeAttributeNS(n, t)
                            }
                        }
                    }

                    function ao(e, t) {
                        return {
                            set(n) {
                                e.style[t] = n
                            }, remove() {
                                e.style[t] = null
                            }
                        }
                    }

                    function so(e) {
                        const t = pg(e, (e) = > {if(e && (e instanceof fg || wo(e) || ko(e) || yo(e))
                    )
                        return e
                    })
                        ;
                        return t
                    }

                    function lo(e) {
                        if ('string' == typeof e ? e = uo(e) : e.text && po(e), e.on && (e.eventListeners = mo(e.on), delete e.on), !e.text) {
                            e.attributes && co(e.attributes);
                            const t = [];
                            if (e.children) if (yo(e.children)) t.push(e.children); else for (const n of e.children) wo(n) || ko(n) || dn(n) ? t.push(n) : t.push(new gg(n));
                            e.children = t
                        }
                        return e
                    }

                    function co(e) {
                        for (const t in e) e[t].value && (e[t].value = [].concat(e[t].value)), go(e, t)
                    }

                    function mo(e) {
                        for (const t in e) go(e, t);
                        return e
                    }

                    function uo(e) {
                        return {text: [e]}
                    }

                    function po(e) {
                        Array.isArray(e.text) || (e.text = [e.text])
                    }

                    function go(e, t) {
                        Array.isArray(e[t]) || (e[t] = [e[t]])
                    }

                    function fo(e, t) {
                        return _o(t) ? e : _o(e) ? t : `${e} ${t}`
                    }

                    function ho(e, t) {
                        for (const n in t) e[n] ? e[n].push(...t[n]
                    ):
                        e[n] = t[n]
                    }

                    function bo(e, t) {
                        if (t.attributes && (!e.attributes && (e.attributes = {}), ho(e.attributes, t.attributes)), t.eventListeners && (!e.eventListeners && (e.eventListeners = {}), ho(e.eventListeners, t.eventListeners)), t.text && e.text.push(...t.text),
                        t.children && t.children.length
                    )
                        {
                            if (e.children.length != t.children.length) throw new _a('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');
                            let n = 0;
                            for (const o of t.children) bo(e.children[n++], o)
                        }
                    }

                    function _o(e) {
                        return !e && 0 !== e
                    }

                    function ko(e) {
                        return e instanceof _g
                    }

                    function wo(e) {
                        return e instanceof gg
                    }

                    function yo(e) {
                        return e instanceof ug
                    }

                    function vo() {
                        return {children: [], bindings: [], attributes: {}}
                    }

                    function xo(e) {
                        return 'class' == e || 'style' == e
                    }

                    function Ao(e) {
                        for (; e && 'html' != e.tagName.toLowerCase();) {
                            if ('static' != jp.window.getComputedStyle(e).position) return e;
                            e = e.parentElement
                        }
                        return null
                    }

                    function Co({element: e, target: t, positions: n, limiter: o, fitInViewport: i}) {
                        qa(t) && (t = t()), qa(o) && (o = o());
                        const r = Ao(e.parentElement), a = new og(e), s = new og(t);
                        let l, d;
                        if (!o && !i) [d, l] = To(n[0], s, a); else {
                            const e = o && new og(o).getVisible(), t = i && new og(jp.window);
                            [d, l] = Po(n, s, a, e, t) || To(n[0], s, a)
                        }
                        let {left: c, top: m} = Eo(l);
                        if (r) {
                            const e = Eo(new og(r)), t = Vn(r);
                            c -= e.left, m -= e.top, c += r.scrollLeft, m += r.scrollTop, c -= t.left, m -= t.top
                        }
                        return {left: c, top: m, name: d}
                    }

                    function To(e, t, n) {
                        const {left: o, top: i, name: r} = e(t, n);
                        return [r, n.clone().moveTo(o, i)]
                    }

                    function Po(e, t, n, o, i) {
                        let r = 0, a = 0, s, l;
                        const d = n.getArea();
                        return e.some((e) = > {function c()
                        {
                            a = g, r = p, s = u, l = m
                        }
                        const [m, u] = To(e, t, n);
                        let p, g;
                        if (o) if (i) {
                            const e = o.getIntersection(i);
                            p = e ? e.getIntersectionArea(u) : 0
                        } else p = o.getIntersectionArea(u);
                        return i && (g = i.getIntersectionArea(u)), i && !o ? g > a && c() : !i && o ? p > r && c() : g > a && p >= r ? c() : g >= a && p > r && c(), p === d
                    }),
                        s ? [l, s] : null
                    }

                    function Eo({left: e, top: t}) {
                        const {scrollX: n, scrollY: o} = jp.window;
                        return {left: e + n, top: t + o}
                    }

                    function So(e) {
                        return ng(e) ? e : En(e) ? e.commonAncestorContainer : 'function' == typeof e ? So(e()) : null
                    }

                    function Vo(e, t) {
                        return e.top - t.height - yg.arrowVerticalOffset
                    }

                    function Oo(e) {
                        return e.bottom + yg.arrowVerticalOffset
                    }

                    function Ro(e) {
                        const t = e.next();
                        return t.done ? null : t.value
                    }

                    function Fo(e) {
                        return !!(e.focus && 'none' != jp.window.getComputedStyle(e.element).display)
                    }

                    function No(e) {
                        return e.bindTemplate.to((t) = > {t.target === e.element && t.preventDefault()
                    })
                    }

                    function Io(e) {
                        return Array.isArray(e) ? {items: e} : e ? Object.assign({items: []}, e) : {items: []}
                    }

                    function Bo(e) {
                        const t = yg.defaultPositions;
                        return e ? [t.northWestArrowSouth, t.northWestArrowSouthWest, t.northWestArrowSouthEast, t.southWestArrowNorth, t.southWestArrowNorthWest, t.southWestArrowNorthEast] : [t.southEastArrowNorth, t.southEastArrowNorthEast, t.southEastArrowNorthWest, t.northEastArrowSouth, t.northEastArrowSouthEast, t.northEastArrowSouthWest]
                    }

                    function Mo(e) {
                        return (e + '').toLowerCase()
                    }

                    function Do({origin: e, originKeystrokeHandler: t, originFocusTracker: n, toolbar: o, beforeFocus: i, afterBlur: r}) {
                        n.add(o.element), t.set('Alt+F10', (e, t) = > {n.isFocused && !o.focusTracker.isFocused && (i && i(), o.focus(), t())
                    }),
                        o.keystrokes.set('Esc', (t, n) = > {o.focusTracker.isFocused && (e.focus(), r && r(), n())
                    })
                    }

                    function Lo(e) {
                        const t = e.files ? Array.from(e.files) : [], n = e.items ? Array.from(e.items) : [];
                        return t.length ? t : n.filter((e) = > 'file' === e.kind
                    ).
                        map((e) = > e.getAsFile()
                    )
                    }

                    function jo(e, t) {
                        const n = t.target.ownerDocument, o = t.clientX, i = t.clientY;
                        let r;
                        return n.caretRangeFromPoint && n.caretRangeFromPoint(o, i) ? r = n.caretRangeFromPoint(o, i) : t.rangeParent && (r = n.createRange(), r.setStart(t.rangeParent, t.rangeOffset), r.collapse(!0)), r ? e.domConverter.domRangeToView(r) : e.selection.getFirstRange()
                    }

                    function zo(e) {
                        return e = e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n\n/g, '</p><p>').replace(/\n/g, ' ').replace(/^\s/, '&nbsp;').replace(/\s$/, '&nbsp;').replace(/\s\s/g, ' &nbsp;'), -1 < e.indexOf('</p><p>') && (e = `<p>${e}</p>`), e
                    }

                    function qo(e) {
                        return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (e, t) = > 1 == t.length ? ' ' : t
                    )
                    }

                    function Ho(e) {
                        let t = '';
                        if (e.is('text') || e.is('textProxy')) t = e.data; else if (e.is('img') && e.hasAttribute('alt')) t = e.getAttribute('alt'); else {
                            let n = null;
                            for (const o of e.getChildren()) {
                                const e = Ho(o);
                                n && (n.is('containerElement') || o.is('containerElement')) && (Lg.includes(n.name) || Lg.includes(o.name) ? t += '\n' : t += '\n\n'), t += e, n = o
                            }
                        }
                        return t
                    }

                    function Wo(e, t, n, o) {
                        const i = n.isCollapsed, r = n.getFirstRange(), a = r.start.parent, s = r.end.parent;
                        if (o.limits.has(a.name) || o.limits.has(s.name)) return void(i || a != s || e.deleteContent(n, t));
                        if (i) Uo(t, n, r.start); else {
                            const o = !(r.start.isAtStart && r.end.isAtEnd);
                            e.deleteContent(n, t, {leaveUnmerged: o}), o && (a == s ? Uo(t, n, n.focus) : n.setCollapsedAt(s))
                        }
                    }

                    function Uo(e, t, n) {
                        const o = n.parent, i = new o.constructor(o.name, o.getAttributes());
                        n.isAtEnd ? e.insert(Zs.createAfter(n.parent), i) : n.isAtStart ? e.insert(Zs.createBefore(n.parent), i) : e.split(n), t.setCollapsedAt(n.parent.nextSibling)
                    }

                    function $o(e, t) {
                        function n() {
                            a && (i.push(a), a = null)
                        }

                        function o(e) {
                            return a && a.type == e
                        }

                        const i = [];
                        let r = 0, a;
                        return e.forEach((e) = > {'equal' == e ? (n(), r++) : 'insert' == e ? (o('insert') ? a.values.push(t[r]) : (n(), a = {
                            type: 'insert',
                            index: r,
                            values: [t[r]]
                        }), r++) : o('delete') ? a.howMany++ : (n(), a = {type: 'delete', index: r, howMany: 1})
                    }),
                        n(), i
                    }

                    function Ko(e) {
                        return !!e.ctrlKey || Jg.includes(e.keyCode)
                    }

                    function Qo(e, t) {
                        return e instanceof $d && t instanceof $d ? e.data === t.data : e === t
                    }

                    function Jo(e) {
                        if (1 == e.newChildren.length - e.oldChildren.length) {
                            const t = _n(e.oldChildren, e.newChildren, Qo), n = $o(t, e.newChildren);
                            if (!(1 < n.length)) {
                                const e = n[0];
                                return e.values[0] instanceof $d ? e : void 0
                            }
                        }
                    }

                    function Go(e) {
                        const t = e.map((e) = > e.node
                    ).
                        reduce((e, t) = > e.getCommonAncestor(t, {includeSelf: !0})
                    )
                        ;
                        return t ? t.getAncestors({
                            includeSelf: !0,
                            parentFirst: !0
                        }).find((e) = > e.is('containerElement') || e.is('rootElement')
                    ):
                        void 0
                    }

                    function Yo(e) {
                        if (0 == e.length) return !1;
                        for (const t of e) if ('children' === t.type && !Jo(t)) return !0;
                        return !1
                    }

                    function Xo(e) {
                        return e.every((e) = > e.is('text')
                    )
                    }

                    function Zo(e) {
                        let t = null, n = null;
                        for (let o = 0; o < e.length; o++) {
                            const i = e[o];
                            'equal' != i && (t = null == t ? o : t, n = o)
                        }
                        let o = 0, r = 0;
                        for (let a = t; a <= n; a++) 'insert' != e[a] && o++, 'delete' != e[a] && r++;
                        return {insertions: r, deletions: o, firstChangeAt: t}
                    }

                    function ei(e, t) {
                        const n = ti([e], t);
                        n.sort((e, t) = > e.start.isBefore(t.start) ? -1 : 1
                    )
                        ;
                        for (let o = 1; o < n.length; o++) {
                            const e = n[o - 1], t = n[o];
                            e.end.isTouching(t.start) && (e.end = t.end, n.splice(o, 1), o--)
                        }
                        return n
                    }

                    function ti(e, t) {
                        for (const n of t) for (const t of n.operations) for (let n = 0; n < e.length; n++) {
                            let o;
                            switch (t.type) {
                                case'insert':
                                    o = e[n]._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0);
                                    break;
                                case'move':
                                case'remove':
                                case'reinsert':
                                    o = e[n]._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0);
                            }
                            o && (e.splice(n, 1,...o), n = n + o.length - 1
                        )
                        }
                        return e
                    }

                    function ni() {
                        let e = oi(bf);
                        return e && e.length == _f || (e = ri(_f), ii(bf, e)), e
                    }

                    function oi(e) {
                        e = e.toLowerCase();
                        const t = document.cookie.split(';');
                        for (const n of t) {
                            const t = n.split('='), o = decodeURIComponent(t[0].trim().toLowerCase());
                            if (o === e) return decodeURIComponent(t[1])
                        }
                        return null
                    }

                    function ii(e, t) {
                        document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + ';path=/'
                    }

                    function ri(e) {
                        let t = '';
                        const n = new Uint8Array(e);
                        window.crypto.getRandomValues(n);
                        for (let o = 0; o < n.length; o++) {
                            const e = kf.charAt(n[o] % kf.length);
                            t += 0.5 < Math.random() ? e.toUpperCase() : e
                        }
                        return t
                    }

                    function ai(e) {
                        return Array.from(e.getChildren()).reduce((e, t) = > e + t.data, ''
                    )
                    }

                    function si() {
                        return new Cf
                    }

                    function li(e, t, n, o) {
                        if (E(e)) {
                            for (const i of e) li(i, t, n, o);
                            return
                        }
                        const i = Array.from(e.getAttributeKeys());
                        i.push(t.key);
                        const r = {name: e.name || '$text', attributes: i, inside: n.context};
                        o.schema.check(r) && e.setAttribute(t.key, t.value)
                    }

                    function di() {
                        return new Tf
                    }

                    function ci(e) {
                        return 'blockQuote' == e.parent.name ? e.parent : null
                    }

                    function mi(e) {
                        let t = 0, n;
                        const o = [];
                        for (; t < e.length;) {
                            const i = e[t], r = e[t + 1];
                            n || (n = Zs.createBefore(i)), r && i.nextSibling == r || (o.push(new el(n, Zs.createAfter(i))), n = null), t++
                        }
                        return o
                    }

                    function ui(e, t) {
                        const n = e.check({name: 'blockQuote', inside: Zs.createBefore(t)}),
                            o = e.check({name: t.name, attributes: Array.from(t.getAttributeKeys()), inside: 'blockQuote'});
                        return n && o
                    }

                    function pi(e, t=512) {
                        try {
                            const n = e.match(Uf)[1], o = atob(e.replace(Uf, '')), i = [];
                            for (let e = 0; e < o.length; e += t) {
                                const n = o.slice(e, e + t), r = Array(n.length);
                                for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
                                i.push(new Uint8Array(r))
                            }
                            return new Blob(i, {type: n})
                        } catch (e) {
                            throw new Error('Problem with decoding Base64 image data.')
                        }
                    }

                    function gi(e) {
                        if ('string' != typeof e) return !1;
                        const t = e.match(Uf);
                        return !!(t && t.length)
                    }

                    function fi() {
                        return (e, t, n, o) =
                    >
                        {
                            if (n.test(t.input, {name: !0, class: 'image'}) && o.schema.check({
                                    name: 'image',
                                    inside: t.context,
                                    attributes: 'src'
                                })) {
                                const e = Array.from(t.input.getChildren()).find((e) = > e.is('img')
                            )
                                ;
                                if (e && e.hasAttribute('src') && n.test(e, {name: !0})) {
                                    const i = o.convertItem(e, n, t);
                                    t.context.push(i);
                                    const r = o.convertChildren(t.input, n, t);
                                    t.context.pop(), wc.insert(Zs.createAt(i), r), t.output = i
                                }
                            }
                        }
                    }

                    function hi(e, t, n=_i) {
                        for (const o of e) o.on(`addAttribute:${t}:image`, n()), o.on(`changeAttribute:${t}:image`, n()), o.on(`removeAttribute:${t}:image`, n())
                    }

                    function bi() {
                        return (e, t, n, o) =
                    >
                        {
                            const i = e.name.split(':'), r = i[0] + ':' + i[1], a = t.item;
                            if (n.consume(a, r)) {
                                const e = o.mapper.toViewElement(a), n = e.getChild(0), r = i[0];
                                if ('removeAttribute' == r) {
                                    const e = t.attributeOldValue;
                                    e.data && (n.removeAttribute('srcset'), n.removeAttribute('sizes'), e.width && n.removeAttribute('width'))
                                } else {
                                    const e = t.attributeNewValue;
                                    e.data && (n.setAttribute('srcset', e.data), n.setAttribute('sizes', '100vw'), e.width && n.setAttribute('width', e.width))
                                }
                            }
                        }
                    }

                    function _i() {
                        return (e, t, n, o) =
                    >
                        {
                            const i = e.name.split(':'), r = i[0] + ':' + i[1], a = t.item;
                            if (n.consume(a, r)) {
                                const e = o.mapper.toViewElement(a), n = e.getChild(0), r = i[0];
                                'removeAttribute' == r ? n.removeAttribute(t.attributeKey) : n.setAttribute(t.attributeKey, t.attributeNewValue)
                            }
                        }
                    }

                    function ki(e, t, n, o) {
                        const i = t.input;
                        if (n.test(i, {name: !0, attribute: ['src']})) {
                            const e = wi({name: 'image', attributes: ['src']}, t.context, o.schema);
                            if (e) {
                                const r = Object.assign({}, t);
                                r.context = e, t.output = o.convertItem(i, n, r), Xf.add(t.output)
                            }
                        }
                    }

                    function wi(e, t, n) {
                        t = t.slice();
                        for (const o = {name: e.name, attributes: e.attributes, inside: t}; t.length && !n.check(o);) {
                            const e = t.pop(), o = 'string' == typeof e ? e : e.name;
                            if (n.limits.has(o)) return null
                        }
                        return t.length ? t : null
                    }

                    function yi(e, t) {
                        if (t.output && t.output.is('element')) {
                            const e = [];
                            for (let n = t.output.childCount - 1; 0 <= n; n--) {
                                const o = t.output.getChild(n);
                                if (Xf.has(o)) {
                                    const i = t.output.childCount - n - 1;
                                    let r = null;
                                    0 < i && (r = t.output.clone(!1), r.appendChildren(t.output.removeChildren(n + 1, i))), o.remove(), e.shift(), r && e.unshift(r), e.unshift(o), 0 < t.output.childCount && e.unshift(t.output)
                                }
                            }
                            e.length && (t.output = new ic(e))
                        }
                    }

                    function vi(e, t) {
                        return e && t && e.priority == t.priority && Ai(e.class) == Ai(t.class)
                    }

                    function xi(e, t) {
                        if (e.priority > t.priority) return !0;
                        return !(e.priority < t.priority) && Ai(e.class) > Ai(t.class)
                    }

                    function Ai(e) {
                        return Array.isArray(e) ? e.sort().join(',') : e
                    }

                    function Ci(e) {
                        return !!e.getCustomProperty(eh)
                    }

                    function Ti(e, t={}) {
                        function n(e) {
                            return Array.isArray(e) ? e : [e]
                        }

                        return e.setAttribute('contenteditable', 'false'), e.getFillerOffset = Oi, e.addClass(nh), e.setCustomProperty(eh, !0), t.label && Ei(e, t.label), Pi(e, (e, t) = > e.addClass(...n(t.class)
                    ),
                        (e, t) =
                    >
                        e.removeClass(...n(t.class)
                    )),
                        e
                    }

                    function Pi(e, t, n) {
                        const o = new Zf;
                        o.on('change:top', (o, i) = > {i.oldDescriptor && n(e, i.oldDescriptor), i.newDescriptor && t(e, i.newDescriptor)
                    }),
                        e.setCustomProperty('addHighlight', (e, t) = > o.add(t)
                    ),
                        e.setCustomProperty('removeHighlight', (e, t) = > o.remove(t)
                    )
                    }

                    function Ei(e, t) {
                        e.setCustomProperty(th, t)
                    }

                    function Si(e) {
                        const t = e.getCustomProperty(th);
                        return t ? 'function' == typeof t ? t() : t : ''
                    }

                    function Vi(e) {
                        return e.addClass('ck-editable'), e.setAttribute('contenteditable', e.isReadOnly ? 'false' : 'true'), e.on('change:isReadOnly', (t, n, o) = > {e.setAttribute('contenteditable', o ? 'false' : 'true')
                    }),
                        e.on('change:isFocused', (t, n, o) = > {o? e.addClass('ck-editable_focused') : e.removeClass('ck-editable_focused')}
                    ),
                        e
                    }

                    function Oi() {
                        return null
                    }

                    function Ri(e, t) {
                        return e.setCustomProperty(ih, !0), Ti(e, {
                            label: function () {
                                const n = e.getChild(0), o = n.getAttribute('alt');
                                return o ? `${o} ${t}` : t
                            }
                        })
                    }

                    function Fi(e) {
                        return !!e.getCustomProperty(ih) && Ci(e)
                    }

                    function Ni(e) {
                        const t = e.getSelectedElement();
                        return !!(t && Fi(t))
                    }

                    function Ii(e) {
                        return e instanceof Gs && 'image' == e.name
                    }

                    function Bi() {
                        return new Yd('figure', {class: 'image'}, new lc('img'))
                    }

                    function Mi(e) {
                        return e == uc.arrowright || e == uc.arrowleft || e == uc.arrowup || e == uc.arrowdown
                    }

                    function Di(e) {
                        return e == uc.delete || e == uc.backspace
                    }

                    function Li(e) {
                        return ee(e) == dh
                    }

                    function ji(e) {
                        for (; e;) {
                            if (e instanceof Zd && !(e instanceof Hp)) return !0;
                            e = e.parent
                        }
                        return !1
                    }

                    function zi({emitter: e, activator: t, callback: n, contextElements: o}) {
                        e.listenTo(document, 'mousedown', (e, {target: i}) = > {if(t()
                    )
                        {
                            for (const e of o) if (e.contains(i)) return;
                            n()
                        }
                    })
                    }

                    function qi({view: e}) {
                        e.listenTo(e.element, 'submit', (t, n) = > {n.preventDefault(), e.fire('submit')
                    },
                        {
                            useCapture:!0
                        }
                    )
                    }

                    function Hi(e) {
                        const t = e.plugins.get('ContextualBalloon');
                        if (Ni(e.editing.view.selection)) {
                            const n = Wi(e);
                            t.updatePosition(n)
                        }
                    }

                    function Wi(e) {
                        const t = e.editing.view, n = yg.defaultPositions;
                        return {
                            target: t.domConverter.viewToDom(t.selection.getSelectedElement()),
                            positions: [n.northArrowSouth, n.southArrowNorth]
                        }
                    }

                    function Ui(e) {
                        const t = /^image\/(jpeg|png|gif|bmp)$/;
                        return t.test(e.type)
                    }

                    function $i(e) {
                        const t = e.getSelectedElement();
                        if (t) return Zs.createAfter(t);
                        const n = e.getSelectedBlocks().next().value;
                        if (n) {
                            if (n.isEmpty) return Zs.createAt(n);
                            const t = Zs.createAfter(n);
                            return e.focus.isTouching(t) ? t : Zs.createBefore(n)
                        }
                        return e.focus
                    }

                    function Ki(e) {
                        return Array.from(e.types).includes('text/html') && '' !== e.getData('text/html')
                    }

                    function Qi() {
                        const e = new pc('div', {class: 'ck-progress-bar'});
                        return e.setCustomProperty(Dh, !0), e
                    }

                    function Ji(e) {
                        for (const t of e.getChildren()) if (t.getCustomProperty(Dh)) return t
                    }

                    function Gi(e, t) {
                        return t.check({name: 'paragraph', inside: Zs.createBefore(e)})
                    }

                    function Yi(e, t, n, o) {
                        if (n.test(t.input, {name: t.input.name}) && Zi(t.input, t.context, o.schema, !1)) {
                            t.context.push('paragraph');
                            const e = o.convertItem(t.input, n, t);
                            t.context.pop(), t.output = e
                        }
                    }

                    function Xi(e, t, n, o) {
                        if (!t.output) return;
                        const r = qh.paragraphLikeElements.has(t.input.name) && !t.output.is('element'),
                            i = t.input.is('documentFragment') || t.input.is('element') && t.output.is('element') || r;
                        if (!i) return;
                        const a = t.output.is('element');
                        a && t.context.push(t.output);
                        let s = null;
                        for (let a = 0; a < t.output.childCount; a++) {
                            const e = t.output.getChild(a);
                            Zi(e, t.context, o.schema, r) ? (s ? a-- : (s = new Gs('paragraph'), t.output.insertChildren(e.index, s)), e.remove(), s.appendChildren(e)) : s = null
                        }
                        a && t.context.pop()
                    }

                    function Zi(e, t, n, o) {
                        const i = e.name || '$text';
                        return !o && n.check({name: i, inside: t}) ? !1 : !!n.check({
                            name: 'paragraph',
                            inside: t
                        }) && !!n.check({name: i, inside: t.concat('paragraph')})
                    }

                    function er(e, t) {
                        for (const n of e.getRootNames()) {
                            const o = e.getRoot(n);
                            o.isEmpty ? !Hh.has(o) && Hh.set(o, t) : Hh.delete(o)
                        }
                    }

                    function tr() {
                        for (const [e, t]of Hh) {
                            const n = t.document, o = n.schema;
                            o.check({
                                name: 'paragraph',
                                inside: [e]
                            }) && n.enqueueChanges(() = > {Hh.delete(e), t.insert(Zs.createAt(e), new Gs('paragraph'))
                        })
                        }
                    }

                    function nr(e, t, n) {
                        return n.check({name: t, inside: Zs.createBefore(e)})
                    }

                    function or(e, t) {
                        const n = new sf(t);
                        n.bind('label', 'isOn', 'isEnabled', 'withText', 'keystroke', 'tooltip').to(e);
                        const o = new Yh(t);
                        return new Gh(t, n, o)
                    }

                    function ir(e, t) {
                        const n = or(e, t), o = n.listView = new Qh(t);
                        return o.items.bindTo(e.items).using((e) = > {const n = new Jh(t);
                        return n.bind(...Object.keys(e)
                    ).
                        to(e), n
                    }),
                        o.items.delegate('execute').to(n), n.panelView.children.add(o), n.on('change:isOpen', (e, t, o) = > {o? rr(n) : n.stopListening(document)}
                    ),
                        n.on('execute', () = > {n.isOpen = !1
                    }),
                        n.keystrokes.set('arrowdown', (e, t) = > {n.isOpen && (o.focus(), t())
                    }),
                        n.keystrokes.set('arrowup', (e, t) = > {n.isOpen && (o.focusLast(), t())
                    }),
                        n
                    }

                    function rr(e) {
                        e.listenTo(document, 'click', (t, {target: n}) = > {e.element == n || e.element.contains(n) || (e.isOpen = !1)
                    })
                    }

                    function ar(e, t) {
                        return Array.prototype.concat(...e.map((e) = > [e, t]
                    ))
                    }

                    function sr(e, t, n) {
                        const o = e.document;
                        if (!o) throw new _a('view-placeholder-element-is-detached: Provided element is not placed in document.');
                        lr(e), ib.has(o) || (ib.set(o, new Map), ob.listenTo(o, 'render', () = > dr(o), {priority: 'high'})
                    ),
                        e.setAttribute('data-placeholder', t), ib.get(o).set(e, n), cr(e, n)
                    }

                    function lr(e) {
                        const t = e.document;
                        e.removeClass('ck-placeholder'), e.removeAttribute('data-placeholder'), ib.has(t) && ib.get(t).delete(e)
                    }

                    function dr(e) {
                        const t = ib.get(e);
                        for (const [n, o]of t) cr(n, o)
                    }

                    function cr(e, t) {
                        const n = e.document;
                        if (n) {
                            const o = n.selection, i = o.anchor;
                            if (t && !t()) return void e.removeClass('ck-placeholder');
                            const r = !Array.from(e.getChildren()).some((e) = > !e.is('uiElement')
                        )
                            ;
                            return !n.isFocused && r ? void e.addClass('ck-placeholder') : void(r && i && i.parent !== e ? e.addClass('ck-placeholder') : e.removeClass('ck-placeholder'))
                        }
                    }

                    function mr(e, t) {
                        return () =
                    >
                        {
                            const n = new Zd('figcaption');
                            return n.document = e, n.setCustomProperty(rb, !0), sr(n, t), Vi(n)
                        }
                    }

                    function ur(e) {
                        for (const t of e.getChildren()) if (t instanceof Gs && 'caption' == t.name) return t;
                        return null
                    }

                    function pr(e) {
                        const t = e.parent;
                        return 'figcaption' == e.name && t && 'figure' == t.name && t.hasClass('image') ? {name: !0} : null
                    }

                    function gr(e, t, n, o) {
                        if ('insert' === t) {
                            const e = new Ys({boundaries: n.range, ignoreElementEnd: !0});
                            for (const t of e) {
                                const e = t.item;
                                'elementStart' == t.type && Ii(e) && !ur(e) && o.document.enqueueChanges(() = > {ur(e) || o.insert(Zs.createAt(e, 'end'), new Gs('caption'))
                            })
                            }
                        }
                    }

                    function fr(e, t=!0) {
                        return (n, o, i, r) =
                    >
                        {
                            const a = o.item;
                            if ((a.childCount || t) && Ii(a.parent)) {
                                if (!i.consume(o.item, 'insert')) return;
                                const t = r.mapper.toViewElement(o.range.start.parent),
                                    n = e instanceof Qd ? e.clone(!0) : e();
                                a.childCount || n.addClass('ck-hidden'), hr(n, o.item, t, r.mapper)
                            }
                        }
                    }

                    function hr(e, t, n, o) {
                        const i = ec.createAt(n, 'end');
                        fc.insert(i, e), o.bindElements(t, e)
                    }

                    function br(e) {
                        const t = e.getAncestors({includeSelf: !0}), n = t.find((e) = > 'caption' == e.name
                    )
                        ;
                        return n && n.parent && 'image' == n.parent.name ? n : null
                    }

                    function _r(e) {
                        return (t, n, o, i) =
                    >
                        {
                            const r = t.name.split(':')[0], a = r + ':imageStyle';
                            if (o.test(n.item, a)) {
                                const t = yr(n.attributeNewValue, e), s = yr(n.attributeOldValue, e),
                                    l = i.mapper.toViewElement(n.item), d = vr(r, s, l), c = xr(r, t, l);
                                (d || c) && o.consume(n.item, a)
                            }
                        }
                    }

                    function kr(e) {
                        const t = e.filter((e) = > !e.isDefault
                    )
                        ;
                        return (e, n, o, i) =
                    >
                        {
                            for (const r of t) wr(r, n, o, i)
                        }
                    }

                    function wr(e, t, n, o) {
                        const i = t.input, r = t.output;
                        if (n.test(i, {class: e.className}) && Ii(r)) {
                            const a = [...r.getAttributeKeys(), 'imageStyle'
                        ]
                            ;o.schema.check({
                                name: 'image',
                                inside: t.context,
                                attributes: a
                            }) && (n.consume(i, {class: e.className}), r.setAttribute('imageStyle', e.name))
                        }
                    }

                    function yr(e, t) {
                        for (const n of t) if (n.name === e) return n
                    }

                    function vr(e, t, n) {
                        return t && ('changeAttribute' == e || 'removeAttribute' == e) && (n.removeClass(t.className), !0)
                    }

                    function xr(e, t, n) {
                        return t && ('addAttribute' == e || 'changeAttribute' == e) && (n.addClass(t.className), !0)
                    }

                    function Ar(e) {
                        const t = kb.defaultStyles, n = kb.defaultIcons;
                        if ('string' == typeof e) t[e] ? e = Object.assign({}, t[e]) : (wa.warn('image-style-not-found: There is no such image style of given name.', {name: e}), e = {name: e}); else if (t[e.name]) {
                            const n = t[e.name], o = Object.assign({}, e);
                            for (const t in n) e.hasOwnProperty(t) || (o[t] = n[t]);
                            e = o
                        }
                        return 'string' == typeof e.icon && n[e.icon] && (e.icon = n[e.icon]), e
                    }

                    function Cr(e, t) {
                        return new el(Tr(e, t, !0), Tr(e, t, !1))
                    }

                    function Tr(e, t, n) {
                        let o = e.textNode || (n ? e.nodeBefore : e.nodeAfter), i = null;
                        for (; o && o.getAttribute('linkHref') == t;) i = o, o = n ? o.previousSibling : o.nextSibling;
                        return i ? Zs.createAt(i, n ? 'before' : 'after') : e
                    }

                    function Pr(e) {
                        return e.getAncestors().find((e) = > e instanceof xb
                    )
                    }

                    function Er(e, t, n) {
                        const o = t ? e[0] : e[e.length - 1];
                        if (o.is('listItem')) for (let i = o[t ? 'previousSibling' : 'nextSibling'], r = o.getAttribute('indent'); i && i.is('listItem') && i.getAttribute('indent') >= n;) r > i.getAttribute('indent') && (r = i.getAttribute('indent')), i.getAttribute('indent') == r && e[t ? 'unshift' : 'push'](i), i = i[t ? 'previousSibling' : 'nextSibling']
                    }

                    function Sr(e, t) {
                        return t.check({name: 'listItem', attributes: ['type', 'indent'], inside: Zs.createBefore(e)})
                    }

                    function Vr(e, t) {
                        const n = Or(e, !1);
                        if (n) return void t.setAttribute(e, 'type', n.getAttribute('type'));
                        const o = Or(e, !0);
                        o && t.setAttribute(e, 'type', o.getAttribute('type'))
                    }

                    function Or(e, t) {
                        for (let n = e[t ? 'nextSibling' : 'previousSibling']; n && n.is('listItem') && n.getAttribute('indent') >= e.getAttribute('indent');) {
                            if (n.getAttribute('indent') == e.getAttribute('indent')) return n;
                            n = n[t ? 'nextSibling' : 'previousSibling']
                        }
                        return null
                    }

                    function Rr() {
                        const e = !this.isEmpty && ('ul' == this.getChild(0).name || 'ol' == this.getChild(0).name);
                        return this.isEmpty || e ? 0 : null
                    }

                    function Fr(e, t, n, o) {
                        if (n.test(t.item, 'insert') && n.test(t.item, 'addAttribute:type') && n.test(t.item, 'addAttribute:indent')) {
                            n.consume(t.item, 'insert'), n.consume(t.item, 'addAttribute:type'), n.consume(t.item, 'addAttribute:indent');
                            const e = t.item, i = Qr(e, o.mapper), r = o.mapper.toViewPosition(Zs.createBefore(e));
                            Yr(e, i, o.mapper, r)
                        }
                    }

                    function Nr(e, t, n, o) {
                        if (!n.consume(t.item, 'changeAttribute:type')) return;
                        const i = o.mapper.toViewElement(t.item);
                        fc.breakContainer(ec.createBefore(i)), fc.breakContainer(ec.createAfter(i));
                        let r = i.parent;
                        const a = 'numbered' == t.attributeNewValue ? 'ol' : 'ul';
                        r = fc.rename(r, a), Gr(r, r.nextSibling), Gr(r.previousSibling, r)
                    }

                    function Ir(e, t, n, o) {
                        if (!n.consume(t.item, 'remove')) return;
                        let i = o.mapper.toViewPosition(t.sourcePosition);
                        i = i.getLastMatchingPosition((e) = > !e.item.is('li')
                    )
                        ;const r = i.nodeAfter;
                        fc.breakContainer(ec.createBefore(r)), fc.breakContainer(ec.createAfter(r));
                        const a = r.parent, s = a.previousSibling, l = tc.createOn(a);
                        fc.remove(l), s && s.nextSibling && Gr(s, s.nextSibling), Xr(t.item.getAttribute('indent') + 1, t.sourcePosition, l.start, r, o.mapper), '$graveyard' == t.item.root.rootName && o.mapper.unbindModelElement(t.item)
                    }

                    function Br(e, t, n, o) {
                        if (!n.consume(t.item, 'changeAttribute:indent')) return;
                        const i = o.mapper.toViewElement(t.item);
                        fc.breakContainer(ec.createBefore(i)), fc.breakContainer(ec.createAfter(i));
                        const r = i.parent, a = r.previousSibling, s = tc.createOn(r);
                        fc.remove(s);
                        let l;
                        a && a.nextSibling && (l = Gr(a, a.nextSibling)), l || (l = s.start), Xr(t.attributeOldValue + 1, t.range.start, s.start, i, o.mapper), Yr(t.item, i, o.mapper, l)
                    }

                    function Mr(e, t, n, o) {
                        if ('listItem' != t.item.name) {
                            let e = o.mapper.toViewPosition(t.range.start);
                            const n = [];
                            for (; ('ul' == e.parent.name || 'ol' == e.parent.name) && (e = fc.breakContainer(e), 'li' == e.parent.name);) {
                                const t = e, o = ec.createAt(e.parent, 'end');
                                if (!t.isEqual(o)) {
                                    const e = fc.remove(new tc(t, o));
                                    n.push(e)
                                }
                                e = ec.createAfter(e.parent)
                            }
                            if (0 < n.length) {
                                for (let t = 0; t < n.length; t++) {
                                    const o = e.nodeBefore, i = fc.insert(e, n[t]);
                                    if (e = i.end, 0 < t) {
                                        const t = Gr(o, o.nextSibling);
                                        t && t.parent == o && e.offset--
                                    }
                                }
                                Gr(e.nodeBefore, e.nodeAfter)
                            }
                        }
                    }

                    function Dr(e, t, n, o) {
                        if (!t.item.is('listItem')) {
                            const e = o.mapper.toViewPosition(t.sourcePosition), n = e.nodeBefore, i = e.nodeAfter;
                            Gr(n, i)
                        }
                    }

                    function Lr(e, t, n, o) {
                        if (n.consume(t.input, {name: !0})) {
                            const e = new Gs('listItem');
                            t.indent = t.indent ? t.indent : 0, e.setAttribute('indent', t.indent);
                            const i = t.input.parent && 'ol' == t.input.parent.name ? 'numbered' : 'bulleted';
                            e.setAttribute('type', i), t.context.push(e), t.indent++;
                            const r = new ic;
                            r.appendChildren(e);
                            for (const i of t.input.getChildren()) {
                                const a = o.convertItem(i, n, t);
                                'ul' == i.name || 'ol' == i.name ? r.appendChildren(Array.from(a.getChildren())) : wc.insert(Zs.createAt(e, 'end'), a)
                            }
                            t.indent--, t.context.pop(), t.output = r
                        }
                    }

                    function jr(e, t, n) {
                        if (n.test(t.input, {name: !0})) {
                            const e = Array.from(t.input.getChildren());
                            for (const t of e) t.is('li') || t.remove()
                        }
                    }

                    function zr(e, t, n) {
                        if (n.test(t.input, {name: !0})) {
                            if (0 === t.input.childCount) return;
                            const e = [...t.input.getChildren()
                        ]
                            ;let n = !1, o = !0;
                            for (const t of e) !n || t.is('ul') || t.is('ol') || t.remove(), t.is('text') ? (o && (t.data = t.data.replace(/^\s+/, '')), (!t.nextSibling || t.nextSibling.is('ul') || t.nextSibling.is('ol')) && (t.data = t.data.replace(/\s+$/, ''))) : (t.is('ul') || t.is('ol')) && (n = !0), o = !1
                        }
                    }

                    function qr(e, t) {
                        const n = t.modelPosition.nodeBefore;
                        if (n && n.is('listItem')) {
                            const e = t.mapper.toViewElement(n), o = e.getAncestors().find((e) = > e.is('ul') || e.is('ol')
                        ),
                            i = new Gd({startPosition: ec.createAt(e, 0)});
                            for (const e of i) if ('elementStart' == e.type && e.item.is('li')) {
                                t.viewPosition = e.previousPosition;
                                break
                            } else if ('elementEnd' == e.type && e.item == o) {
                                t.viewPosition = e.nextPosition;
                                break
                            }
                        }
                    }

                    function Hr(e, t) {
                        const n = t.viewPosition, o = n.parent, i = t.mapper;
                        if ('ul' == o.name || 'ol' == o.name) {
                            if (!n.isAtEnd) {
                                const e = i.toModelElement(n.nodeAfter);
                                t.modelPosition = Zs.createBefore(e)
                            } else {
                                const e = i.toModelElement(n.nodeBefore), o = i.getModelLength(n.nodeBefore);
                                t.modelPosition = Zs.createBefore(e).getShiftedBy(o)
                            }
                            e.stop()
                        } else if ('li' == o.name && n.nodeBefore && ('ul' == n.nodeBefore.name || 'ol' == n.nodeBefore.name)) {
                            const r = i.toModelElement(o);
                            let a = 1, s = n.nodeBefore;
                            for (; s && (s.is('ul') || s.is('ol'));) a += i.getModelLength(s), s = s.previousSibling;
                            t.modelPosition = Zs.createBefore(r).getShiftedBy(a), e.stop()
                        }
                    }

                    function Wr(e) {
                        return (t, n, o, i) =
                    >
                        {
                            if ('transparent' != i.type) if ('remove' == n) {
                                const t = o.range.end.offset - o.range.start.offset,
                                    n = o.sourcePosition._getTransformedByInsertion(o.range.start, t, !0);
                                Ur(n, e, i), $r(n, !1, e, i)
                            } else if ('move' == n) {
                                const t = o.range.end.offset - o.range.start.offset,
                                    n = o.sourcePosition._getTransformedByInsertion(o.range.start, t, !0);
                                Ur(n, e, i), $r(n, !1, e, i), Ur(o.range.start, e, i), $r(o.range.start, !1, e, i), Ur(o.range.end, e, i), $r(o.range.end, !0, e, i)
                            } else if ('rename' == n && 'listItem' == o.oldName && 'listItem' != o.newName) {
                                const t = o.element;
                                e.enqueueChanges(() = > {i.removeAttribute(t, 'indent').removeAttribute(t, 'type')
                            })
                                ;const n = Zs.createAfter(o.element);
                                Ur(n, e, i)
                            } else 'insert' == n && (Ur(o.range.start, e, i), $r(o.range.start, !1, e, i), Ur(o.range.end, e, i), $r(o.range.end, !0, e, i))
                        }
                    }

                    function Ur(e, t, n) {
                        let o = e.nodeAfter;
                        o && 'listItem' == o.name && t.enqueueChanges(() = > {
                            const e = o.previousSibling,
                            t = e && e.is('listItem') ? e.getAttribute('indent') + 1 : 0;
                        let i = o.getAttribute('indent') - t;
                        const r = [];
                        for (; o && 'listItem' == o.name && o.getAttribute('indent') > t;) {
                            i > o.getAttribute('indent') && (i = o.getAttribute('indent'));
                            const e = o.getAttribute('indent') - i;
                            r.push({item: o, indent: e}), o = o.nextSibling
                        }
                        if (0 < r.length) for (const e of r.reverse()) n.setAttribute(e.item, 'indent', e.indent)
                    })
                    }

                    function $r(e, t, n, o) {
                        let i = e[t ? 'nodeBefore' : 'nodeAfter'];
                        i && i.is('listItem') && 0 !== i.getAttribute('indent') && n.enqueueChanges(() = > {const e = Zr(i, !t);
                        if (e && e != i) for (const n = e.getAttribute('indent'), r = e.getAttribute('type'); i && i.is('listItem') && i.getAttribute('indent') >= n;) i.getAttribute('type') != r && i.getAttribute('indent') == n && o.setAttribute(i, 'type', r), i = i[t ? 'previousSibling' : 'nextSibling']
                    })
                    }

                    function Kr(e, [t, n]) {
                        let o = t.is('documentFragment') ? t.getChild(0) : t;
                        if (o && o.is('listItem')) {
                            const e = n.getFirstPosition();
                            let t = null;
                            if (e.parent.is('listItem') ? t = e.parent : e.nodeBefore && e.nodeBefore.is('listItem') && (t = e.nodeBefore), t) {
                                const e = t.getAttribute('indent');
                                if (0 < e) for (; o && o.is('listItem');) o.setAttribute('indent', o.getAttribute('indent') + e), o = o.nextSibling
                            }
                        }
                    }

                    function Qr(e, t) {
                        const n = 'numbered' == e.getAttribute('type') ? 'ol' : 'ul', o = new Bb, i = new Yd(n, null);
                        return i.appendChildren(o), t.bindElements(e, o), o
                    }

                    function Jr(e, t) {
                        const n = t.getNext ? 'nextSibling' : 'previousSibling', o = t.getNext ? 'nodeAfter' : 'nodeBefore',
                            i = !!t.checkAllSiblings, r = !!t.sameIndent, a = !!t.biggerIndent, s = !!t.smallerIndent,
                            l = !!t.isMapped, d = e instanceof Gs ? e.getAttribute('indent') : t.indent;
                        for (let c = e instanceof Gs ? e[n] : e[o]; c && 'listItem' == c.name;) {
                            const e = c.getAttribute('indent');
                            if (r && d == e || a && d < e || s && d > e) {
                                if (!l || t.mapper.toViewElement(c)) return c;
                                c = c[n];
                                continue
                            }
                            if (!i) return null;
                            c = c[n]
                        }
                        return null
                    }

                    function Gr(e, t) {
                        return e && t && ('ul' == e.name || 'ol' == e.name) && e.name == t.name ? fc.mergeContainers(ec.createAfter(e)) : null
                    }

                    function Yr(e, t, n, o) {
                        const i = t.parent;
                        let r = Jr(e, {sameIndent: !0, smallerIndent: !0, checkAllSiblings: !0}), a;
                        if (r && r.getAttribute('indent') == e.getAttribute('indent')) {
                            const e = n.toViewElement(r);
                            a = fc.breakContainer(ec.createAfter(e))
                        } else r = e.previousSibling, a = r && 'listItem' == r.name ? r.getAttribute('indent') < e.getAttribute('indent') ? n.toViewPosition(Zs.createAt(r, 'end')) : o.parent.is('ul') || o.parent.is('ol') ? fc.breakContainer(o) : o : n.toViewPosition(Zs.createBefore(e));
                        a = ea(a), fc.insert(a, i);
                        const s = Jr(e, {biggerIndent: !0, getNext: !0, isMapped: !0, mapper: n});
                        if (s) {
                            const e = n.toViewElement(s);
                            fc.breakContainer(ec.createBefore(e));
                            const o = ec.createBefore(e.parent), i = Zr(s, !1), r = n.toViewElement(i),
                                a = fc.breakContainer(ec.createAfter(r)), l = new tc(o, a), d = ec.createAt(t, 'end');
                            fc.move(l, d)
                        }
                        Gr(i, i.nextSibling), Gr(i.previousSibling, i)
                    }

                    function Xr(e, t, n, o, i) {
                        const r = Jr(t, {sameIndent: !0, smallerIndent: !0, checkAllSiblings: !0, indent: e}),
                            a = r ? r.getAttribute('indent') : null;
                        let s;
                        if (!r) s = n; else if (a == e) {
                            const e = i.toViewElement(r).parent;
                            s = ec.createAfter(e)
                        } else {
                            const e = Zs.createAt(r, 'end');
                            s = i.toViewPosition(e)
                        }
                        s = ea(s);
                        for (const r of[...o.getChildren()]
                    )
                        (r.is('ul') || r.is('ol')) && (s = fc.move(tc.createOn(r), s).end, Gr(r, r.nextSibling), Gr(r.previousSibling, r))
                    }

                    function Zr(e, t) {
                        const n = e.getAttribute('indent'), o = t ? 'previousSibling' : 'nextSibling';
                        let i = e;
                        for (; e[o] && e[o].is('listItem') && e[o].getAttribute('indent') >= n;) e = e[o], e.getAttribute('indent') == n && (i = e);
                        return i
                    }

                    function ea(e) {
                        return e.getLastMatchingPosition((e) = > e.item.is('uiElement')
                    )
                    }

                    function ta(e) {
                        let t = 1;
                        for (const n of e.getChildren()) if ('ul' == n.name || 'ol' == n.name) for (const e of n.getChildren()) t += ta(e);
                        return t
                    }

                    var na = Number.POSITIVE_INFINITY, oa = Math.min, ia = Math.max, ra = Math.floor;
                    Object.defineProperty(t, '__esModule', {value: !0});
                    var aa = Object.getPrototypeOf, sa = function (e) {
                            return aa(Object(e))
                        }, la = function (e) {
                            var t = !1;
                            if (null != e && 'function' != typeof e.toString) try {
                                t = !!(e + '')
                            } catch (t) {
                            }
                            return t
                        }, da = function (e) {
                            return !!e && 'object' == typeof e
                        }, ca = Object.prototype, ma = Function.prototype.toString, ua = ca.hasOwnProperty,
                        pa = ma.call(Object), ga = ca.toString, fa = function (e) {
                            if (!da(e) || ga.call(e) != '[object Object]' || la(e)) return !1;
                            var t = sa(e);
                            if (null === t) return !0;
                            var n = ua.call(t, 'constructor') && t.constructor;
                            return 'function' == typeof n && n instanceof n && ma.call(n) == pa
                        };

                    class ha {
                        constructor(e, t) {
                            this._config = {}, t && this.define(t), e && this._setObjectToTarget(this._config, e)
                        }

                        set(e, t) {
                            this._setToTarget(this._config, e, t)
                        }

                        define(e, t) {
                            this._setToTarget(this._config, e, t, !0)
                        }

                        get(e) {
                            return this._getFromSource(this._config, e)
                        }

                        _setToTarget(e, t, n, o = !1) {
                            if (fa(t)) return void this._setObjectToTarget(e, t, o);
                            const i = t.split('.');
                            t = i.pop();
                            for (const r of i) fa(e[r]) || (e[r] = {}), e = e[r];
                            return fa(n) ? (fa(e[t]) || (e[t] = {}), e = e[t], void this._setObjectToTarget(e, n, o)) : void(o && 'undefined' != typeof e[t] || (e[t] = n))
                        }

                        _getFromSource(e, t) {
                            const n = t.split('.');
                            t = n.pop();
                            for (const o of n) {
                                if (!fa(e[o])) {
                                    e = null;
                                    break
                                }
                                e = e[o]
                            }
                            return e ? e[t] : void 0
                        }

                        _setObjectToTarget(e, t, n) {
                            Object.keys(t).forEach((o) = > {this._setToTarget(e, o, t[o], n)
                        })
                        }
                    }

                    const ba = 'https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/framework/guides/support/error-codes.html';

                    class _a extends Error {
                        static isCKEditorError(e) {
                            return e instanceof _a
                        }

                        constructor(e, t) {
                            e = o(e), t && (e += ' ' + JSON.stringify(t)), super(e), this.name = 'CKEditorError', this.data = t
                        }
                    }

                    const ka = {
                        error(e, t) {
                            console.error(o(e), t)
                        }, warn(e, t) {
                            console.warn(o(e), t)
                        }
                    };
                    var wa = ka;

                    class ya {
                        constructor(e, t = []) {
                            this._editor = e, this._availablePlugins = new Map, this._plugins = new Map;
                            for (const n of t) this._availablePlugins.set(n, n), n.pluginName && this._availablePlugins.set(n.pluginName, n)
                        }

                        * [Symbol.iterator]() {
                            for (const e of this._plugins) 'function' == typeof e[0] && (yield e)
                        }

                        get(e) {
                            return this._plugins.get(e)
                        }

                        load(e, t = []) {
                            function n(e) {
                                return m.includes(e) || a.get(e) || l.has(e) ? void 0 : o(e).catch((t) = > {
                                    throw wa.error('plugincollection-load: It was not possible to load the plugin.', {plugin: e}),
                                    t
                                }
                            )
                            }

                            function o(e) {
                                return new Promise((o) = > {l.add(e), e.requires && e.requires.forEach((o) = > {const r = i(o);
                                if (t.includes(r)) throw new _a('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.', {
                                    plugin: r,
                                    requiredBy: e
                                });
                                n(r)
                            })
                                ;const r = new e(s);
                                a._add(e, r), d.push(r), o()
                            })
                            }

                            function i(e) {
                                return 'function' == typeof e ? e : a._availablePlugins.get(e)
                            }

                            function r(e) {
                                return e.map((e) = > i(e)
                            ).
                                filter((e) = > !!e
                            )
                            }

                            const a = this, s = this._editor, l = new Set, d = [], c = r(e), m = r(t), u = function (e) {
                                const t = [];
                                for (const n of e) i(n) || t.push(n);
                                return t.length ? t : null
                            }(e);
                            if (u) {
                                const e = 'plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';
                                return wa.error(e, {plugins: u}), Promise.reject(new _a(e, {plugins: u}))
                            }
                            return Promise.all(c.map(n)).then(() = > d
                        )
                        }

                        destroy() {
                            const e = Array.from(this).map(([, e]) = > e
                        ).
                            filter((e) = > 'function' == typeof e.destroy
                        ).
                            map((e) = > e.destroy()
                        )
                            ;
                            return Promise.all(e)
                        }

                        _add(e, t) {
                            this._plugins.set(e, t);
                            const n = e.pluginName;
                            n && (this._plugins.has(n) ? wa.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.', {
                                pluginName: n,
                                plugin1: this._plugins.get(n).constructor,
                                plugin2: e
                            }) : this._plugins.set(n, t))
                        }
                    }

                    class va {
                        tconstn = this.get(e);
                        n
                    ...
                        throw
                    ) {
                    new
                        'commandcollection-command-not-found: Command does not exist.'
                    commandName: e
                    !

                        constructor() {
                        this._commands = new Map
            }

            )

            add(e, t)
            {
                this._commands.set(e, t)
            }

            get(e)
            {
                return this._commands.get(e)
            }

            execute(e,

            if (,
            {
                _a

                (
            }

        )
            ;n.execute(...t
        )
        } *
        names()
            {
                yield * this._commands.keys()
    }
    *
    commands()
{
    yield * this._commands.values()
}
[Symbol.iterator]()
{
    return this._commands[Symbol.iterator]()
}
destroy()
{
    for (const e of this.commands()) e.destroy()
}
}
let xa = {};

class Aa {
    constructor(e) {
        this.lang = e || 'en', this.t = (...e
    )
        =
    >
        this._t(...e
    )
    }

    _t(e, t) {
        let n = i(this.lang, e);
        return t && (n = n.replace(/%(\d+)/g, (e, n) = > n < t.length ? t[n] : e)
    ),
        n
    }
}

var Ca = function () {
    return function e() {
        e.called = !0
    }
};

class Ta {
    constructor(e, t) {
        this.source = e, this.name = t, this.path = [], this.stop = Ca(), this.off = Ca()
    }
}

const Pa = {
    get(e) {
        return 'number' == typeof e ? e : this[e] || this.normal
    }, highest: 1e5, high: 1e3, normal: 0, low: -1e3, lowest: -1e5
};
const Ea = Symbol('listeningTo'), Sa = Symbol('emitterId'), Va = {
    on(e, t, n={}) {
        p(this, e);
        const o = g(this, e), r = Pa.get(n.priority);
        t = {callback: t, priority: r};
        for (const a of o) {
            let e = !1;
            for (let n = 0; n < a.length; n++) if (a[n].priority < r) {
                a.splice(n, 0, t), e = !0;
                break
            }
            e || a.push(t)
        }
    }, once(e, t, n) {
        this.on(e, function (e,...n)
        {
            e.off(), t.call(this, e,...n
        )
        }
    ,
        n
    )
    }, off(e, t) {
        const n = g(this, e);
        for (const o of n) for (let e = 0; e < o.length; e++) o[e].callback == t && (o.splice(e, 1), e--)
    }, listenTo(e, t, n, o) {
        let i, r;
        this[Ea] || (this[Ea] = {});
        const a = this[Ea];
        c(e) || d(e);
        const s = c(e);
        (i = a[s]) || (i = a[s] = {
            emitter: e,
            callbacks: {}
        }), (r = i.callbacks[t]) || (r = i.callbacks[t] = []), r.push(n), e.on(t, n, o)
    }, stopListening(e, t, n) {
        const o = this[Ea];
        let i = e && c(e);
        const r = o && i && o[i], a = r && t && r.callbacks[t];
        if (o && (!e || r) && (!t || a)) if (n) e.off(t, n); else if (a) {
            for (; n = a.pop();) e.off(t, n);
            delete r.callbacks[t]
        } else if (r) {
            for (t in r.callbacks) this.stopListening(e, t);
            delete o[i]
        } else {
            for (i in o) this.stopListening(o[i].emitter);
            delete this[Ea]
        }
    }, fire(e,...t
)
{
    const n = e instanceof Ta ? e : new Ta(this, e), o = n.name;
    let r = f(this, o);
    if (n.path.push(this), r) {
        const e = [n,...t
    ]
        ;r = Array.from(r);
        for (let t = 0; t < r.length && (r[t].callback.apply(this, e), n.off.called && (delete n.off.called, this.off(o, r[t].callback)), !n.stop.called); t++) ;
    }
    if (this._delegations) {
        const e = this._delegations.get(o), i = this._delegations.get('*');
        e && h(e, n, t), i && h(i, n, t)
    }
    return n.return
}
,
delegate(...e
)
{
    return {to: (t, n) = > {this._delegations || (this._delegations = new Map);
    for (const o of e) {
        const e = this._delegations.get(o);
        e ? e.set(t, n) : this._delegations.set(o, new Map([[t, n]]))
    }
}
}
}
,
stopDelegating(e, t)
{
    if (this._delegations) if (!e) this._delegations.clear(); else if (!t) this._delegations.delete(e); else {
        const n = this._delegations.get(e);
        n && n.delete(t)
    }
}
}
;var Oa = Va, Ra = function (e, t) {
        return e === t || e !== e && t !== t
    }, Fa = Object.prototype, Na = Fa.hasOwnProperty, Ia = function (e, t, n) {
        var o = e[t];
        Na.call(e, t) && Ra(o, n) && (n !== void 0 || t in e) || (e[t] = n)
    }, Ba = function (e, t, n, o) {
        n || (n = {});
        for (var i = -1, r = t.length; ++i < r;) {
            var a = t[i], s = o ? o(n[a], e[a], a, n, e) : e[a];
            Ia(n, a, s)
        }
        return n
    }, Ma = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    }, Da = Ma('length'), La = function (e) {
        var t = typeof e;
        return !!e && ('object' == t || 'function' == t)
    }, ja = Object.prototype, za = ja.toString, qa = function (e) {
        var t = La(e) ? za.call(e) : '';
        return t == '[object Function]' || t == '[object GeneratorFunction]'
    }, Ha = function (e) {
        return 'number' == typeof e && -1 < e && 0 == e % 1 && e <= 9007199254740991
    }, Wa = function (e) {
        return null != e && Ha(Da(e)) && !qa(e)
    }, Ua = /^(?:0|[1-9]\d*)$/, $a = function (e, t) {
        return t = null == t ? 9007199254740991 : t, !!t && ('number' == typeof e || Ua.test(e)) && -1 < e && 0 == e % 1 && e < t
    }, Ka = function (e, t, n) {
        if (!La(n)) return !1;
        var o = typeof t;
        return !('number' == o ? !(Wa(n) && $a(t, n.length)) : !('string' == o && t in n)) && Ra(n[t], e)
    }, Qa = function (e, t, n) {
        var o = n.length;
        return 0 === o ? e.call(t) : 1 === o ? e.call(t, n[0]) : 2 === o ? e.call(t, n[0], n[1]) : 3 === o ? e.call(t, n[0], n[1], n[2]) : e.apply(t, n)
    }, Ja = Object.prototype, Ga = Ja.toString, Ya = function (e) {
        return 'symbol' == typeof e || da(e) && Ga.call(e) == '[object Symbol]'
    }, Xa = 0 / 0, Za = /^\s+|\s+$/g, es = /^[-+]0x[0-9a-f]+$/i, ts = /^0b[01]+$/i, ns = /^0o[0-7]+$/i,
    os = parseInt, is = function (e) {
        if ('number' == typeof e) return e;
        if (Ya(e)) return Xa;
        if (La(e)) {
            var t = qa(e.valueOf) ? e.valueOf() : e;
            e = La(t) ? t + '' : t
        }
        if ('string' != typeof e) return 0 === e ? e : +e;
        e = e.replace(Za, '');
        var n = ts.test(e);
        return n || ns.test(e) ? os(e.slice(2), n ? 2 : 8) : es.test(e) ? Xa : +e
    }, rs = 1 / 0, as = function (e) {
        if (!e) return 0 === e ? e : 0;
        if (e = is(e), e === rs || e === -rs) {
            var t = 0 > e ? -1 : 1;
            return t * 1.7976931348623157e308
        }
        return e === e ? e : 0
    }, ss = function (e) {
        var t = as(e), n = t % 1;
        return t === t ? n ? t - n : t : 0
    }, ls = ia, ds = function (e, t) {
        if ('function' != typeof e) throw new TypeError('Expected a function');
        return t = ls(void 0 === t ? e.length - 1 : ss(t), 0), function () {
            for (var n = arguments, o = -1, i = ls(n.length - t, 0), r = Array(i); ++o < i;) r[o] = n[t + o];
            switch (t) {
                case 0:
                    return e.call(this, r);
                case 1:
                    return e.call(this, n[0], r);
                case 2:
                    return e.call(this, n[0], n[1], r);
            }
            var a = Array(t + 1);
            for (o = -1; ++o < t;) a[o] = n[o];
            return a[t] = r, Qa(e, this, a)
        }
    }, cs = Object.prototype, ms = function (e) {
        var t = e && e.constructor, n = 'function' == typeof t && t.prototype || cs;
        return e === n
    }, us = n(2), ps = us.a.Reflect, gs = ps, fs = function (e) {
        for (var t = [], n; !(n = e.next()).done;) t.push(n.value);
        return t
    }, hs = Object.prototype, bs = gs ? gs.enumerate : void 0, _s = hs.propertyIsEnumerable;
bs && !_s.call({valueOf: 1}, 'valueOf') && (b = function (e) {
    return fs(bs(e))
});
var ks = b, ws = function (e, t) {
        for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
        return o
    }, ys = function (e) {
        return da(e) && Wa(e)
    }, vs = Object.prototype, xs = vs.hasOwnProperty, As = vs.toString, Cs = vs.propertyIsEnumerable,
    Ts = function (e) {
        return ys(e) && xs.call(e, 'callee') && (!Cs.call(e, 'callee') || As.call(e) == '[object Arguments]')
    }, Ps = Array.isArray, Es = Ps, Ss = Object.prototype, Vs = Ss.toString, Os = function (e) {
        return 'string' == typeof e || !Es(e) && da(e) && Vs.call(e) == '[object String]'
    }, Rs = function (e) {
        var t = e ? e.length : void 0;
        return Ha(t) && (Es(e) || Os(e) || Ts(e)) ? ws(t, String) : null
    }, Fs = Object.prototype, Ns = Fs.hasOwnProperty, Is = function (e) {
        for (var t = -1, n = ms(e), o = ks(e), i = o.length, r = Rs(e), a = r || [], s = a.length; ++t < i;) {
            var l = o[t];
            !!r && ('length' == l || $a(l, s)) || 'constructor' == l && (n || !Ns.call(e, l)) || a.push(l)
        }
        return a
    }, Bs = Object.prototype, Ms = Bs.propertyIsEnumerable, Ds = !Ms.call({valueOf: 1}, 'valueOf'),
    Ls = function (e) {
        return ds(function (t, n) {
            var o = -1, i = n.length, r = 1 < i ? n[i - 1] : void 0, a = 2 < i ? n[2] : void 0;
            for (r = 3 < e.length && 'function' == typeof r ? (i--, r) : void 0, a && Ka(n[0], n[1], a) && (r = 3 > i ? void 0 : r, i = 1), t = Object(t); ++o < i;) {
                var s = n[o];
                s && e(t, s, o, r)
            }
            return t
        })
    }(function (e, t) {
        if (Ds || ms(t) || Wa(t)) return void Ba(t, Is(t), e);
        for (var n in t) Ia(e, n, t[n])
    }), js = Ls;
const zs = Symbol('attributes'), qs = Symbol('boundObservables'), Hs = Symbol('boundAttributes'), Ws = {
    set(e, t) {
        if (La(e)) return void Object.keys(e).forEach((t) = > {this.set(t, e[t])
    },
        this
    )
        ;_(this);
        const n = this[zs];
        if (e in this && !n.has(e)) throw new _a('observable-set-cannot-override: Cannot override an existing property.');
        Object.defineProperty(this, e, {
            enumerable: !0, configurable: !0, get() {
                return n.get(e)
            }, set(t) {
                const o = n.get(e);
                o === t && n.has(e) || (n.set(e, t), this.fire('change:' + e, e, t, o))
            }
        }), this[e] = t
    }, bind(...e
)
{
    if (!e.length || !w(e)) throw new _a('observable-bind-wrong-attrs: All attributes must be strings.');
    if (new Set(e).size !== e.length) throw new _a('observable-bind-duplicate-attrs: Attributes must be unique.');
    _(this);
    const t = this[Hs];
    e.forEach((e) = > {if(t.has(e)
)
    throw new _a('observable-bind-rebind: Cannot bind the same attribute more that once.')
})
    ;const n = new Map;
    return e.forEach((e) = > {const o = {attr: e, to: []};
    t.set(e, o), n.set(e, o)
}),
    {
        to:k, _observable
    :
        this, _bindAttrs
    :
        e, _to
    :
        [], _bindings
    :
        n
    }
}
,
unbind(...e
)
{
    if (!(zs in this)) return;
    const t = this[Hs], n = this[qs];
    if (e.length) {
        if (!w(e)) throw new _a('observable-unbind-wrong-attrs: Attributes must be strings.');
        e.forEach((e) = > {const o = t.get(e);
        let i, r, a, s;
        o.to.forEach((e) = > {
            i = e[0], r = e[1], a = n.get(i), s = a[r],
            s.delete(o), s.size || delete a[r], Object.keys(a).length || (n.delete(i), this.stopListening(i, 'change'))
    }),
        t.delete(e)
    })
    } else n.forEach((e, t) = > {this.stopListening(t, 'change')
}),
    n.clear(), t.clear()
}
,
decorate(e)
{
    const t = this[e];
    if (!t) throw new _a('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.', {
        object: this,
        methodName: e
    });
    this.on(e, (e, n) = > {e.return = t.apply(this, n)
}),
    this[e] = function (...t
)
    {
        return this.fire(e, t)
    }
}
}
;var Us = Ws;
js(Ws, Oa);

class $s {
    get index() {
        let e;
        if (!this.parent) return null;
        if (null === (e = this.parent.getChildIndex(this))) throw new _a('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
        return e
    }

    get startOffset() {
        let e;
        if (!this.parent) return null;
        if (null === (e = this.parent.getChildStartOffset(this))) throw new _a('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
        return e
    }

    get offsetSize() {
        return 1
    }

    get endOffset() {
        return this.parent ? this.startOffset + this.offsetSize : null
    }

    get nextSibling() {
        const e = this.index;
        return null !== e && this.parent.getChild(e + 1) || null
    }

    get previousSibling() {
        const e = this.index;
        return null !== e && this.parent.getChild(e - 1) || null
    }

    get root() {
        let e = this;
        for (; e.parent;) e = e.parent;
        return e
    }

    get document() {
        return this.root == this ? null : this.root.document || null
    }

    constructor(e) {
        this.parent = null, this._attrs = P(e)
    }

    clone() {
        return new $s(this._attrs)
    }

    getPath() {
        const e = [];
        for (let t = this; t.parent;) e.unshift(t.startOffset), t = t.parent;
        return e
    }

    getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
        const t = [];
        for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
        return t
    }

    getCommonAncestor(e, t = {}) {
        const n = this.getAncestors(t), o = e.getAncestors(t);
        let r = 0;
        for (; n[r] == o[r] && n[r];) r++;
        return 0 == r ? null : n[r - 1]
    }

    remove() {
        this.parent.removeChildren(this.index)
    }

    hasAttribute(e) {
        return this._attrs.has(e)
    }

    getAttribute(e) {
        return this._attrs.get(e)
    }

    getAttributes() {
        return this._attrs.entries()
    }

    getAttributeKeys() {
        return this._attrs.keys()
    }

    setAttribute(e, t) {
        this._attrs.set(e, t)
    }

    setAttributesTo(e) {
        this._attrs = P(e)
    }

    removeAttribute(e) {
        return this._attrs.delete(e)
    }

    clearAttributes() {
        this._attrs.clear()
    }

    toJSON() {
        const e = {};
        return this._attrs.size && (e.attributes = [...this._attrs
    ]),
        e
    }
}

class Ks extends $s {
    get offsetSize() {
        return this.data.length
    }

    static fromJSON(e) {
        return new Ks(e.data, e.attributes)
    }

    constructor(e, t) {
        super(t), this.data = e || ''
    }

    is(e) {
        return 'text' == e
    }

    clone() {
        return new Ks(this.data, this.getAttributes())
    }

    toJSON() {
        const e = super.toJSON();
        return e.data = this.data, e
    }
}

class Qs {
    get startOffset() {
        return null === this.textNode.startOffset ? null : this.textNode.startOffset + this.offsetInText
    }

    get offsetSize() {
        return this.data.length
    }

    get endOffset() {
        return null === this.startOffset ? null : this.startOffset + this.offsetSize
    }

    get isPartial() {
        return this.offsetSize !== this.textNode.offsetSize
    }

    get parent() {
        return this.textNode.parent
    }

    get root() {
        return this.textNode.root
    }

    get document() {
        return this.textNode.document
    }

    constructor(e, t, n) {
        if (this.textNode = e, 0 > t || t > e.offsetSize) throw new _a('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
        if (0 > n || t + n > e.offsetSize) throw new _a('model-textproxy-wrong-length: Given length value is incorrect.');
        this.data = e.data.substring(t, t + n), this.offsetInText = t
    }

    is(e) {
        return 'textProxy' == e
    }

    getPath() {
        const e = this.textNode.getPath();
        return 0 < e.length && (e[e.length - 1] += this.offsetInText), e
    }

    getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
        const t = [];
        for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
        return t
    }

    hasAttribute(e) {
        return this.textNode.hasAttribute(e)
    }

    getAttribute(e) {
        return this.textNode.getAttribute(e)
    }

    getAttributes() {
        return this.textNode.getAttributes()
    }

    getAttributeKeys() {
        return this.textNode.getAttributeKeys()
    }
}

class Js {

    get length() {
        return this._nodes.length
    }

    get maxOffset() {
        return this._nodes.reduce((e, t) = > e + t.offsetSize, 0
    )
    }

    constructor(e) {
        this._nodes = [], e && this.insertNodes(0, e)
    }

    [Symbol.iterator]() {
        return this._nodes[Symbol.iterator]()
    }

    getNode(e) {
        return this._nodes[e] || null
    }

    getNodeIndex(e) {
        const t = this._nodes.indexOf(e);
        return -1 == t ? null : t
    }

    getNodeStartOffset(e) {
        const t = this.getNodeIndex(e);
        return null === t ? null : this._nodes.slice(0, t).reduce((e, t) = > e + t.offsetSize, 0
    )
    }

    indexToOffset(e) {
        if (e == this._nodes.length) return this.maxOffset;
        const t = this._nodes[e];
        if (!t) throw new _a('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');
        return this.getNodeStartOffset(t)
    }

    offsetToIndex(e) {
        let t = 0;
        for (const n of this._nodes) {
            if (e >= t && e < t + n.offsetSize) return this.getNodeIndex(n);
            t += n.offsetSize
        }
        if (t != e) throw new _a('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.');
        return this.length
    }

    insertNodes(e, t) {
        for (const n of t) if (!(n instanceof $s)) throw new _a('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');
        this._nodes.splice(e, 0,...t
    )
    }

    removeNodes(e, t = 1) {
        return this._nodes.splice(e, t)
    }

    toJSON() {
        return this._nodes.map((e) = > e.toJSON()
    )
    }
}

class Gs extends $s {
    get childCount() {
        return this._children.length
    }

    get maxOffset() {
        return this._children.maxOffset
    }

    get isEmpty() {
        return 0 === this.childCount
    }

    static fromJSON(e) {
        let t = null;
        if (e.children) {
            t = [];
            for (const n of e.children) n.name ? t.push(Gs.fromJSON(n)) : t.push(Ks.fromJSON(n))
        }
        return new Gs(e.name, e.attributes, t)
    }

    constructor(e, t, n) {
        super(t), this.name = e, this._children = new Js, n && this.insertChildren(0, n)
    }

    is(e, t = null) {
        return t ? 'element' == e && t == this.name : 'element' == e || e == this.name
    }

    getChild(e) {
        return this._children.getNode(e)
    }

    getChildren() {
        return this._children[Symbol.iterator]()
    }

    getChildIndex(e) {
        return this._children.getNodeIndex(e)
    }

    getChildStartOffset(e) {
        return this._children.getNodeStartOffset(e)
    }

    clone(e = !1) {
        const t = e ? Array.from(this._children).map((e) = > e.clone(!0)
    ):
        null;
        return new Gs(this.name, this.getAttributes(), t)
    }

    offsetToIndex(e) {
        return this._children.offsetToIndex(e)
    }

    appendChildren(e) {
        this.insertChildren(this.childCount, e)
    }

    insertChildren(e, t) {
        t = S(t);
        for (const n of t) null !== n.parent && n.remove(), n.parent = this;
        this._children.insertNodes(e, t)
    }

    removeChildren(e, t = 1) {
        const n = this._children.removeNodes(e, t);
        for (const o of n) o.parent = null;
        return n
    }

    getNodeByPath(e) {
        let t = this;
        for (const n of e) t = t.getChild(t.offsetToIndex(n));
        return t
    }

    toJSON() {
        const e = super.toJSON();
        if (e.name = this.name, 0 < this._children.length) {
            e.children = [];
            for (const t of this._children) e.children.push(t.toJSON())
        }
        return e
    }
}

class Ys {
    constructor(e = {}) {
        if (!e.boundaries && !e.startPosition) throw new _a('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
        const t = e.direction || 'forward';
        if ('forward' != t && 'backward' != t) throw new _a('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {direction: t});
        this.direction = t, this.boundaries = e.boundaries || null, this.position = e.startPosition ? Zs.createFromPosition(e.startPosition) : Zs.createFromPosition(this.boundaries['backward' == this.direction ? 'end' : 'start']), this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
    }

    [Symbol.iterator]() {
        return this
    }

    skip(e) {
        let t, n, o, i;
        do o = this.position, i = this._visitedParent, ({
            done: t,
            value: n
        } = this.next()); while (!t && e(n));
        t || (this.position = o, this._visitedParent = i)
    }

    next() {
        return 'forward' == this.direction ? this._next() : this._previous()
    }

    _next() {
        const e = this.position, t = Zs.createFromPosition(this.position), n = this._visitedParent;
        if (null === n.parent && t.offset === n.maxOffset) return {done: !0};
        if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {done: !0};
        const o = t.textNode ? t.textNode : t.nodeAfter;
        if (o instanceof Gs) return this.shallow ? t.offset++ : (t.path.push(0), this._visitedParent = o), this.position = t, V('elementStart', o, e, t, 1);
        if (o instanceof Ks) {
            let i;
            if (this.singleCharacters) i = 1; else {
                let e = o.endOffset;
                this._boundaryEndParent == n && this.boundaries.end.offset < e && (e = this.boundaries.end.offset), i = e - t.offset
            }
            const r = t.offset - o.startOffset, a = new Qs(o, r, i);
            return t.offset += i, this.position = t, V('text', a, e, t, i)
        }
        return t.path.pop(), t.offset++, this.position = t, this._visitedParent = n.parent, this.ignoreElementEnd ? this._next() : V('elementEnd', n, e, t)
    }

    _previous() {
        const e = this.position, t = Zs.createFromPosition(this.position), n = this._visitedParent;
        if (null === n.parent && 0 === t.offset) return {done: !0};
        if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {done: !0};
        const o = t.textNode ? t.textNode : t.nodeBefore;
        if (o instanceof Gs) return t.offset--, this.shallow ? (this.position = t, V('elementStart', o, e, t, 1)) : (t.path.push(o.maxOffset), this.position = t, this._visitedParent = o, this.ignoreElementEnd ? this._previous() : V('elementEnd', o, e, t));
        if (o instanceof Ks) {
            let i;
            if (this.singleCharacters) i = 1; else {
                let e = o.startOffset;
                this._boundaryStartParent == n && this.boundaries.start.offset > e && (e = this.boundaries.start.offset), i = t.offset - e
            }
            const r = t.offset - o.startOffset, a = new Qs(o, r - i, i);
            return t.offset -= i, this.position = t, V('text', a, e, t, i)
        }
        return t.path.pop(), this.position = t, this._visitedParent = n.parent, V('elementStart', n, e, t, 1)
    }
}

var Xs = function (e) {
    var t = e ? e.length : 0;
    return t ? e[t - 1] : void 0
};

class Zs {
    get offset() {
        return Xs(this.path)
    }

    set offset(e) {
        this.path[this.path.length - 1] = e
    }

    get parent() {
        let e = this.root;
        for (let t = 0; t < this.path.length - 1; t++) e = e.getChild(e.offsetToIndex(this.path[t]));
        return e
    }

    get index() {
        return this.parent.offsetToIndex(this.offset)
    }

    get textNode() {
        const e = this.parent.getChild(this.index);
        return e instanceof Ks && e.startOffset < this.offset ? e : null
    }

    get nodeAfter() {
        return null === this.textNode ? this.parent.getChild(this.index) : null
    }

    get nodeBefore() {
        return null === this.textNode ? this.parent.getChild(this.index - 1) : null
    }

    get isAtStart() {
        return 0 === this.offset
    }

    get isAtEnd() {
        return this.offset == this.parent.maxOffset
    }

    static createAt(e, t) {
        if (e instanceof Zs) return this.createFromPosition(e); else {
            const n = e;
            if ('end' == t) t = n.maxOffset; else {
                if ('before' == t) return this.createBefore(n);
                if ('after' == t) return this.createAfter(n);
                t || (t = 0)
            }
            return this.createFromParentAndOffset(n, t)
        }
    }

    static createAfter(e) {
        if (!e.parent) throw new _a('model-position-after-root: You cannot make a position after root.', {root: e});
        return this.createFromParentAndOffset(e.parent, e.endOffset)
    }

    static createBefore(e) {
        if (!e.parent) throw new _a('model-position-before-root: You cannot make a position before root.', {root: e});
        return this.createFromParentAndOffset(e.parent, e.startOffset)
    }


    static createFromParentAndOffset(e, t) {
        if (!e.is('element') && !e.is('documentFragment')) throw new _a('model-position-parent-incorrect: Position parent have to be a element or document fragment.');
        const n = e.getPath();
        return n.push(t), new this(e.root, n)
    }

    static createFromPosition(e) {
        return new this(e.root, e.path.slice())
    }

    static fromJSON(e, t) {
        if ('$graveyard' === e.root) return new Zs(t.graveyard, e.path);
        if (!t.hasRoot(e.root)) throw new _a('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.', {rootName: e.root});
        return new Zs(t.getRoot(e.root), e.path)
    }

    constructor(e, t) {
        if (!e.is('element') && !e.is('documentFragment')) throw new _a('model-position-root-invalid: Position root invalid.');
        if (!(t instanceof Array) || 0 === t.length) throw new _a('model-position-path-incorrect: Position path must be an array with at least one item.', {path: t});
        t = e.getPath().concat(t), e = e.root, this.root = e, this.path = t
    }

    compareWith(e) {
        if (this.root != e.root) return 'different';
        const t = O(this.path, e.path);
        return 'same' === t ? 'same' : 'prefix' === t ? 'before' : 'extension' === t ? 'after' : this.path[t] < e.path[t] ? 'before' : 'after'
    }

    getLastMatchingPosition(e, t = {}) {
        t.startPosition = this;
        const n = new Ys(t);
        return n.skip(e), n.position
    }

    getParentPath() {
        return this.path.slice(0, -1)
    }


    getAncestors() {
        return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
    }

    getCommonPath(e) {
        if (this.root != e.root) return [];
        const t = O(this.path, e.path),
            n = 'string' == typeof t ? oa(this.path.length, e.path.length) : t;
        return this.path.slice(0, n)
    }

    getCommonAncestor(e) {
        const t = this.getAncestors(), n = e.getAncestors();
        let o = 0;
        for (; t[o] == n[o] && t[o];) o++;
        return 0 == o ? null : t[o - 1]
    }

    getShiftedBy(e) {
        const t = Zs.createFromPosition(this), n = t.offset + e;
        return t.offset = 0 > n ? 0 : n, t
    }

    isAfter(e) {
        return 'after' == this.compareWith(e)
    }

    isBefore(e) {
        return 'before' == this.compareWith(e)
    }

    isEqual(e) {
        return 'same' == this.compareWith(e)
    }

    isTouching(e) {
        let t = null, n = null;
        const o = this.compareWith(e);
        switch (o) {
            case'same':
                return !0;
            case'before':
                t = Zs.createFromPosition(this), n = Zs.createFromPosition(e);
                break;
            case'after':
                t = Zs.createFromPosition(e), n = Zs.createFromPosition(this);
                break;
            default:
                return !1;
        }
        for (let o = t.parent; t.path.length + n.path.length;) {
            if (t.isEqual(n)) return !0;
            if (t.path.length > n.path.length) {
                if (t.offset !== o.maxOffset) return !1;
                t.path = t.path.slice(0, -1), o = o.parent, t.offset++
            } else {
                if (0 !== n.offset) return !1;
                n.path = n.path.slice(0, -1)
            }
        }
    }

    _getTransformedByDeletion(e, t) {
        const n = Zs.createFromPosition(this);
        if (this.root != e.root) return n;
        if ('same' == O(e.getParentPath(), this.getParentPath())) {
            if (e.offset < this.offset) {
                if (e.offset + t > this.offset) return null;
                n.offset -= t
            }
        } else if ('prefix' == O(e.getParentPath(), this.getParentPath())) {
            const o = e.path.length - 1;
            if (e.offset <= this.path[o]) {
                if (e.offset + t > this.path[o]) return null;
                n.path[o] -= t
            }
        }
        return n
    }

    _getTransformedByInsertion(e, t, n) {
        const o = Zs.createFromPosition(this);
        if (this.root != e.root) return o;
        if ('same' == O(e.getParentPath(), this.getParentPath())) (e.offset < this.offset || e.offset == this.offset && n) && (o.offset += t); else if ('prefix' == O(e.getParentPath(), this.getParentPath())) {
            const n = e.path.length - 1;
            e.offset <= this.path[n] && (o.path[n] += t)
        }
        return o
    }

    _getTransformedByMove(e, t, n, o, i) {
        let r = this._getTransformedByDeletion(e, n);
        return t = t._getTransformedByDeletion(e, n), r = null === r || i && r.isEqual(e) ? this._getCombined(e, t) : r._getTransformedByInsertion(t, n, o), r
    }

    _getCombined(e, t) {
        const n = e.path.length - 1, o = Zs.createFromPosition(t);
        return o.offset = o.offset + this.path[n] - e.offset, o.path = o.path.concat(this.path.slice(n + 1)), o
    }
}

class el {

    get isCollapsed() {
        return this.start.isEqual(this.end)
    }

    get isFlat() {
        return this.start.parent === this.end.parent
    }

    get root() {
        return this.start.root
    }

    static createFromPositionAndShift(e, t) {
        const n = e, o = e.getShiftedBy(t);
        return 0 < t ? new this(n, o) : new this(o, n)
    }

    static createFromParentsAndOffsets(e, t, n, o) {
        return new this(Zs.createFromParentAndOffset(e, t), Zs.createFromParentAndOffset(n, o))
    }


    static createFromRange(e) {
        return new this(e.start, e.end)
    }

    static createIn(e) {
        return this.createFromParentsAndOffsets(e, 0, e, e.maxOffset)
    }

    static createOn(e) {
        return this.createFromPositionAndShift(Zs.createBefore(e), e.offsetSize)
    }

    static createCollapsedAt(e, t) {
        const n = Zs.createAt(e, t), o = Zs.createFromPosition(n);
        return new el(n, o)
    }

    static createFromRanges(e) {
        if (0 === e.length) throw new _a('range-create-from-ranges-empty-array: At least one range has to be passed.'); else if (1 == e.length) return this.createFromRange(e[0]);
        const t = e[0];
        e.sort((e, t) = > e.start.isAfter(t.start) ? 1 : -1
    )
        ;const n = e.indexOf(t), o = new this(t.start, t.end);
        for (let t = n - 1; 0 <= t && e[t].end.isEqual(o.start); t++) o.start = Zs.createFromPosition(e[t].start);
        for (let t = n + 1; t < e.length && e[t].start.isEqual(o.end); t++) o.end = Zs.createFromPosition(e[t].end);
        return o
    }

    static fromJSON(e, t) {
        return new this(Zs.fromJSON(e.start, t), Zs.fromJSON(e.end, t))
    }

    constructor(e, t = null) {
        this.start = Zs.createFromPosition(e), this.end = t ? Zs.createFromPosition(t) : Zs.createFromPosition(e)
    }

    * [Symbol.iterator]() {
        yield * new Ys({boundaries: this, ignoreElementEnd: !0})
    }

    containsPosition(e) {
        return e.isAfter(this.start) && e.isBefore(this.end)
    }


    containsRange(e, t = !1) {
        e.isCollapsed && (t = !1);
        const n = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
            o = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
        return n && o
    }

    containsItem(e) {
        const t = Zs.createBefore(e);
        return this.containsPosition(t) || this.start.isEqual(t)
    }

    isEqual(e) {
        return this.start.isEqual(e.start) && this.end.isEqual(e.end)
    }

    isIntersecting(e) {
        return this.start.isBefore(e.end) && this.end.isAfter(e.start)
    }

    getDifference(e) {
        const t = [];
        return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new el(this.start, e.start)), this.containsPosition(e.end) && t.push(new el(e.end, this.end))) : t.push(el.createFromRange(this)), t
    }

    getIntersection(e) {
        if (this.isIntersecting(e)) {
            let t = this.start, n = this.end;
            return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (n = e.end), new el(t, n)
        }
        return null
    }

    getMinimalFlatRanges() {
        const e = [], t = this.start.getCommonPath(this.end).length,
            n = Zs.createFromPosition(this.start);
        for (let o = n.parent; n.path.length > t + 1;) {
            const t = o.maxOffset - n.offset;
            0 != t && e.push(new el(n, n.getShiftedBy(t))), n.path = n.path.slice(0, -1), n.offset++, o = o.parent
        }
        for (; n.path.length <= this.end.path.length;) {
            const t = this.end.path[n.path.length - 1], o = t - n.offset;
            0 != o && e.push(new el(n, n.getShiftedBy(o))), n.offset = t, n.path.push(0)
        }
        return e
    }

    getWalker(e = {}) {
        return e.boundaries = this, new Ys(e)
    }

    * getItems(e = {}) {
        e.boundaries = this, e.ignoreElementEnd = !0;
        const t = new Ys(e);
        for (const n of t) yield n.item
    }

    * getPositions(e = {}) {
        e.boundaries = this;
        const t = new Ys(e);
        yield t.position;
        for (const n of t) yield n.nextPosition
    }

    getTransformedByDelta(e) {
        const t = [el.createFromRange(this)], n = new Set(['insert', 'move', 'remove', 'reinsert']);
        for (const o of e.operations) if (n.has(o.type)) for (let n = 0; n < t.length; n++) {
            const i = t[n]._getTransformedByDocumentChange(o.type, e.type, o.targetPosition || o.position, o.howMany || o.nodes.maxOffset, o.sourcePosition);
            t.splice(n, 1,...i
        ),
            n += i.length - 1
        }
        return t
    }

    getTransformedByDeltas(e) {
        const t = [el.createFromRange(this)];
        for (const n of e) for (let e = 0; e < t.length; e++) {
            const o = t[e].getTransformedByDelta(n);
            t.splice(e, 1,...o
        ),
            e += o.length - 1
        }
        for (let n = 0; n < t.length; n++) {
            const e = t[n];
            for (let o = n + 1; o < t.length; o++) {
                const n = t[o];
                (e.containsRange(n) || n.containsRange(e) || e.isEqual(n)) && t.splice(o, 1)
            }
        }
        return t
    }

    getCommonAncestor() {
        return this.start.getCommonAncestor(this.end)
    }

    _getTransformedByDocumentChange(e, t, n, o, i) {
        if ('insert' == e) return this._getTransformedByInsertion(n, o, !1, !1); else {
            const e = el.createFromPositionAndShift(i, o);
            if ('merge' == t && this.isCollapsed && (this.start.isEqual(e.start) || this.start.isEqual(e.end))) {
                const t = this.start.offset - e.start.offset;
                return [new el(n.getShiftedBy(t))]
            }
            if ('split' == t && this.isCollapsed && this.end.isEqual(e.end)) return [new el(n.getShiftedBy(o))];
            if ((e.containsPosition(this.start) || e.start.isEqual(this.start)) && this.containsPosition(e.end) && this.end.isAfter(n)) {
                const e = this.start._getCombined(i, n._getTransformedByDeletion(i, o)),
                    t = this.end._getTransformedByMove(i, n, o, !1, !1);
                return [new el(e, t)]
            }
            if ((e.containsPosition(this.end) || e.end.isEqual(this.end)) && this.containsPosition(e.start) && this.start.isBefore(n)) {
                const e = this.start._getTransformedByMove(i, n, o, !0, !1),
                    t = this.end._getCombined(i, n._getTransformedByDeletion(i, o));
                return [new el(e, t)]
            }
            return this._getTransformedByMove(i, n, o)
        }
    }

    _getTransformedByInsertion(e, t, n = !1, o = !1) {
        if (n && this.containsPosition(e)) return [new el(this.start, e), new el(e._getTransformedByInsertion(e, t, !0), this.end._getTransformedByInsertion(e, t, this.isCollapsed))]; else {
            const n = el.createFromRange(this), i = !!n.isCollapsed || o;
            return n.start = n.start._getTransformedByInsertion(e, t, !o), n.end = n.end._getTransformedByInsertion(e, t, i), [n]
        }
    }

    _getTransformedByMove(e, t, n) {
        if (this.isCollapsed) {
            const o = this.start._getTransformedByMove(e, t, n, !0, !1);
            return [new el(o)]
        }
        let o;
        const i = new el(e, e.getShiftedBy(n)), r = this.getDifference(i);
        let a = null;
        const s = this.getIntersection(i);
        1 == r.length ? a = new el(r[0].start._getTransformedByDeletion(e, n), r[0].end._getTransformedByDeletion(e, n)) : 2 == r.length && (a = new el(this.start, this.end._getTransformedByDeletion(e, n)));
        const l = t._getTransformedByDeletion(e, n);
        return o = a ? a._getTransformedByInsertion(l, n, null !== s) : [], s && o.push(new el(s.start._getCombined(i.start, l), s.end._getCombined(i.start, l))), o
    }
}

var tl = function (e, t) {
    for (var n = e.length; n--;) if (Ra(e[n][0], t)) return n;
    return -1
}, nl = Array.prototype, ol = nl.splice;
R.prototype.clear = function () {
    this.__data__ = []
}, R.prototype['delete'] = function (e) {
    var t = this.__data__, n = tl(t, e);
    if (0 > n) return !1;
    var o = t.length - 1;
    return n == o ? t.pop() : ol.call(t, n, 1), !0
}, R.prototype.get = function (e) {
    var t = this.__data__, n = tl(t, e);
    return 0 > n ? void 0 : t[n][1]
}, R.prototype.has = function (e) {
    return -1 < tl(this.__data__, e)
}, R.prototype.set = function (e, t) {
    var n = this.__data__, o = tl(n, e);
    return 0 > o ? n.push([e, t]) : n[o][1] = t, this
};
var il = R, rl = Function.prototype.toString, al = function (e) {
        if (null != e) {
            try {
                return rl.call(e)
            } catch (t) {
            }
            try {
                return e + ''
            } catch (t) {
            }
        }
        return ''
    }, sl = /[\\^$.*+?()[\]{}|]/g, ll = /^\[object .+?Constructor\]$/, dl = Object.prototype,
    cl = Function.prototype.toString, ml = dl.hasOwnProperty,
    ul = RegExp('^' + cl.call(ml).replace(sl, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
    pl = function (e) {
        if (!La(e)) return !1;
        var t = qa(e) || la(e) ? ul : ll;
        return t.test(al(e))
    }, gl = function (e, t) {
        var n = e[t];
        return pl(n) ? n : void 0
    }, fl = gl(Object, 'create'), hl = fl, bl = Object.prototype, _l = bl.hasOwnProperty,
    kl = Object.prototype, wl = kl.hasOwnProperty;
F.prototype.clear = function () {
    this.__data__ = hl ? hl(null) : {}
}, F.prototype['delete'] = function (e) {
    return this.has(e) && delete this.__data__[e]
}, F.prototype.get = function (e) {
    var t = this.__data__;
    if (hl) {
        var n = t[e];
        return n === '__lodash_hash_undefined__' ? void 0 : n
    }
    return _l.call(t, e) ? t[e] : void 0
}, F.prototype.has = function (e) {
    var t = this.__data__;
    return hl ? t[e] !== void 0 : wl.call(t, e)
}, F.prototype.set = function (e, t) {
    var n = this.__data__;
    return n[e] = hl && void 0 === t ? '__lodash_hash_undefined__' : t, this
};
var yl = F, vl = gl(us.a, 'Map'), xl = vl, Al = function (e) {
    var t = typeof e;
    return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e
}, Cl = function (e, t) {
    var n = e.__data__;
    return Al(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map
};
N.prototype.clear = function () {
    this.__data__ = {hash: new yl, map: new (xl || il), string: new yl}
}, N.prototype['delete'] = function (e) {
    return Cl(this, e)['delete'](e)
}, N.prototype.get = function (e) {
    return Cl(this, e).get(e)
}, N.prototype.has = function (e) {
    return Cl(this, e).has(e)
}, N.prototype.set = function (e, t) {
    return Cl(this, e).set(e, t), this
};
var Tl = N;
I.prototype.clear = function () {
    this.__data__ = new il
}, I.prototype['delete'] = function (e) {
    return this.__data__['delete'](e)
}, I.prototype.get = function (e) {
    return this.__data__.get(e)
}, I.prototype.has = function (e) {
    return this.__data__.has(e)
}, I.prototype.set = function (e, t) {
    var n = this.__data__;
    return n instanceof il && n.__data__.length == 200 && (n = this.__data__ = new Tl(n.__data__)), n.set(e, t), this
};
var Pl = I, El = function (e, t) {
    for (var n = -1, o = e.length; ++n < o && !(!1 === t(e[n], n, e));) ;
    return e
}, Sl = Object.prototype, Vl = Sl.hasOwnProperty, Ol = function (e, t) {
    return Vl.call(e, t) || 'object' == typeof e && t in e && null === sa(e)
}, Rl = Object.keys, Fl = function (e) {
    return Rl(Object(e))
}, Nl = function (e) {
    var t = ms(e);
    if (!(t || Wa(e))) return Fl(e);
    var n = Rs(e), o = n || [], i = o.length;
    for (var r in e) !Ol(e, r) || !!n && ('length' == r || $a(r, i)) || t && 'constructor' == r || o.push(r);
    return o
}, Il = function (e, t) {
    return e && Ba(t, Nl(t), e)
}, Bl = function (e, t) {
    if (t) return e.slice();
    var n = new e.constructor(e.length);
    return e.copy(n), n
}, Ml = function (e, t) {
    var n = -1, o = e.length;
    for (t || (t = Array(o)); ++n < o;) t[n] = e[n];
    return t
}, Dl = Object.getOwnPropertySymbols;
Dl || (B = function () {
    return []
});
var Ll = B, jl = function (e, t) {
        return Ba(e, Ll(e), t)
    }, zl = function (e, t) {
        for (var n = -1, o = t.length, i = e.length; ++n < o;) e[i + n] = t[n];
        return e
    }, ql = function (e, t, n) {
        var o = t(e);
        return Es(e) ? o : zl(o, n(e))
    }, Hl = function (e) {
        return ql(e, Nl, Ll)
    }, Wl = gl(us.a, 'DataView'), Ul = Wl, $l = gl(us.a, 'Promise'), Kl = $l, Ql = gl(us.a, 'Set'), Jl = Ql,
    Gl = gl(us.a, 'WeakMap'), Yl = Gl, Xl = '[object Map]', Zl = '[object Promise]',
    ed = '[object Set]', td = '[object WeakMap]', nd = '[object DataView]', od = Object.prototype,
    id = od.toString, rd = al(Ul), ad = al(xl), sd = al(Kl), ld = al(Jl), dd = al(Yl);
(Ul && M(new Ul(new ArrayBuffer(1))) != nd || xl && M(new xl) != Xl || Kl && M(Kl.resolve()) != Zl || Jl && M(new Jl) != ed || Yl && M(new Yl) != td) && (M = function (e) {
    var t = id.call(e), n = t == '[object Object]' ? e.constructor : void 0, o = n ? al(n) : void 0;
    if (o) switch (o) {
        case rd:
            return nd;
        case ad:
            return Xl;
        case sd:
            return Zl;
        case ld:
            return ed;
        case dd:
            return td;
    }
    return t
});
var cd = M, md = Object.prototype, ud = md.hasOwnProperty, pd = function (e) {
        var t = e.length, n = e.constructor(t);
        return t && 'string' == typeof e[0] && ud.call(e, 'index') && (n.index = e.index, n.input = e.input), n
    }, gd = us.a.Uint8Array, fd = gd, hd = function (e) {
        var t = new e.constructor(e.byteLength);
        return new fd(t).set(new fd(e)), t
    }, bd = function (e, t) {
        var n = t ? hd(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength)
    }, _d = function (e, t) {
        return e.set(t[0], t[1]), e
    }, kd = function (e, t, n, o) {
        var i = -1, r = e.length;
        for (o && r && (n = e[++i]); ++i < r;) n = t(n, e[i], i, e);
        return n
    }, wd = function (e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function (e, o) {
            n[++t] = [o, e]
        }), n
    }, yd = function (e, t, n) {
        var o = t ? n(wd(e), !0) : wd(e);
        return kd(o, _d, new e.constructor)
    }, vd = /\w*$/, xd = function (e) {
        var t = new e.constructor(e.source, vd.exec(e));
        return t.lastIndex = e.lastIndex, t
    }, Ad = function (e, t) {
        return e.add(t), e
    }, Cd = function (e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function (e) {
            n[++t] = e
        }), n
    }, Td = function (e, t, n) {
        var o = t ? n(Cd(e), !0) : Cd(e);
        return kd(o, Ad, new e.constructor)
    }, Pd = us.a.Symbol, Ed = Pd, Sd = Ed ? Ed.prototype : void 0, Vd = Sd ? Sd.valueOf : void 0,
    Od = function (e) {
        return Vd ? Object(Vd.call(e)) : {}
    }, Rd = function (e, t) {
        var n = t ? hd(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length)
    }, Fd = function (e, t, n, o) {
        var i = e.constructor;
        return t === '[object ArrayBuffer]' ? hd(e) : t === '[object Boolean]' || t === '[object Date]' ? new i(+e) : t === '[object DataView]' ? bd(e, o) : t === '[object Float32Array]' || t === '[object Float64Array]' || t === '[object Int8Array]' || t === '[object Int16Array]' || t === '[object Int32Array]' || t === '[object Uint8Array]' || t === '[object Uint8ClampedArray]' || t === '[object Uint16Array]' || t === '[object Uint32Array]' ? Rd(e, o) : t === '[object Map]' ? yd(e, o, n) : t === '[object Number]' || t === '[object String]' ? new i(e) : t === '[object RegExp]' ? xd(e) : t === '[object Set]' ? Td(e, o, n) : t === '[object Symbol]' ? Od(e) : void 0
    }, Nd = Object.create, Id = function (e) {
        return La(e) ? Nd(e) : {}
    }, Bd = function (e) {
        return 'function' != typeof e.constructor || ms(e) ? {} : Id(sa(e))
    }, Md = n(7), Dd = '[object Arguments]', Ld = '[object Function]', jd = '[object GeneratorFunction]',
    zd = '[object Object]', qd = {};
qd[Dd] = qd['[object Array]'] = qd['[object ArrayBuffer]'] = qd['[object DataView]'] = qd['[object Boolean]'] = qd['[object Date]'] = qd['[object Float32Array]'] = qd['[object Float64Array]'] = qd['[object Int8Array]'] = qd['[object Int16Array]'] = qd['[object Int32Array]'] = qd['[object Map]'] = qd['[object Number]'] = qd[zd] = qd['[object RegExp]'] = qd['[object Set]'] = qd['[object String]'] = qd['[object Symbol]'] = qd['[object Uint8Array]'] = qd['[object Uint8ClampedArray]'] = qd['[object Uint16Array]'] = qd['[object Uint32Array]'] = !0, qd['[object Error]'] = qd[Ld] = qd['[object WeakMap]'] = !1;
var Hd = D, Wd = function (e) {
    return Hd(e, !1, !0)
};

class Ud {
    get index() {
        let e;
        if (!this.parent) return null;
        if (-1 == (e = this.parent.getChildIndex(this))) throw new _a('view-node-not-found-in-parent: The node\'s parent does not contain this node.');
        return e
    }

    get nextSibling() {
        const e = this.index;
        return null !== e && this.parent.getChild(e + 1) || null
    }

    get previousSibling() {
        const e = this.index;
        return null !== e && this.parent.getChild(e - 1) || null
    }

    get root() {
        let e = this;
        for (; e.parent;) e = e.parent;
        return e
    }

    get document() {
        return this.parent instanceof Ud ? this.parent.document : null
    }

    constructor() {
        this.parent = null
    }

    getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
        const t = [];
        for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
        return t
    }

    getCommonAncestor(e, t = {}) {
        const n = this.getAncestors(t), o = e.getAncestors(t);
        let r = 0;
        for (; n[r] == o[r] && n[r];) r++;
        return 0 == r ? null : n[r - 1]
    }

    remove() {
        this.parent.removeChildren(this.index)
    }

    _fireChange(e, t) {
        this.fire('change:' + e, t), this.parent && this.parent._fireChange(e, t)
    }

    toJSON() {
        const e = Wd(this);
        return delete e.parent, e
    }
}

a(Ud, Oa);

class $d extends Ud {
    get data() {
        return this._data
    }


    set data(e) {
        this._fireChange('text', this), this._data = e
    }

    constructor(e) {
        super(), this._data = e
    }

    clone() {
        return new $d(this.data)
    }

    is(e) {
        return 'text' == e
    }

    isSimilar(e) {
        return !!(e instanceof $d) && (this === e || this.data === e.data)
    }
}

class Kd {
    e
...
    this
) {
    _patterns = [].this
,
    e
.

    constructor(

...

    add()
}

add(...e
)
{
    for (let t of e) ('string' == typeof t || t instanceof RegExp) && (t = {name: t}), t.class && ('string' == typeof t.class || t.class instanceof RegExp) && (t.class = [t.class]), this._patterns.push(t)
}
match(...e
)
{
    for (const t of e) for (const e of this._patterns) {
        const n = L(t, e);
        if (n) return {element: t, pattern: e, match: n}
    }
    return null
}
matchAll(...e
)
{
    const t = [];
    for (const n of e) for (const e of this._patterns) {
        const o = L(n, e);
        o && t.push({element: n, pattern: e, match: o})
    }
    return 0 < t.length ? t : null
}
getElementName()
{
    if (1 !== this._patterns.length) return null;
    const e = this._patterns[0], t = e.name;
    return 'function' != typeof e && t && !(t instanceof RegExp) ? t : null
}
}

class Qd extends Ud {
    ethis

    'attributes'
    thiseethis_classesget

    get isEmpty() {
        return 0 === this._children.length
    }

    childCount() {
        return this._children.length
    }

    constructor(e, t, n) {
        if (super(), this.name = e, this._attrs = fa(t) ? T(t) : new Map(t), this._children = [], n && this.insertChildren(0, n), this._classes = new Set, this._attrs.has('class')) {
            const e = this._attrs.get('class');
            U(this._classes, e), this._attrs.delete('class')
        }
        this._styles = new Map, this._attrs.has('style') && (W(this._styles, this._attrs.get('style')), this._attrs.delete('style')), this._customProperties = new Map
    }

    is(e, t = null) {
        return t ? 'element' == e && t == this.name : 'element' == e || e == this.name
    }

    clone(e = !1) {
        const t = [];
        if (e) for (const n of this.getChildren()) t.push(n.clone(e));
        const n = new this.constructor(this.name, this._attrs, t);
        return n._classes = new Set(this._classes), n._styles = new Map(this._styles), n._customProperties = new Map(this._customProperties), n.getFillerOffset = this.getFillerOffset, n
    }

    appendChildren(e) {
        return this.insertChildren(this.childCount, e)
    }

    getChild(e) {
        return this._children[e]
    }

    getChildIndex(e) {
        return this._children.indexOf(e)
    }

    getChildren() {
        return this._children[Symbol.iterator]()
    }

    * getAttributeKeys() {
        0 < this._classes.size && (yield'class'), 0 < this._styles.size && (yield'style');
        for (const e of this._attrs.keys()) yield e
    }

    * getAttributes() {
        yield * this._attrs.entries(), 0 < this._classes.size && (yield['class', this.getAttribute('class')]), 0 < this._styles.size && (yield['style', this.getAttribute('style')])
    }

...

    getAttribute(e) {
        if ('class' == e) return 0 < this._classes.size ? [...this._classes
    ].
        join(' ')
    :
        void 0;
        if ('style' == e) {
            if (0 < this._styles.size) {
                let e = '';
                for (const [t, n]of this._styles) e += `${t}:${n};`;
                return e
            }
            return
        }
        return this._attrs.get(e)
    }

) {
    hasAttribute(e) {
        return 'class' == e ? 0 < this._classes.size : 'style' == e ? 0 < this._styles.size : this._attrs.has(e)
    }

.

    setAttribute(e, t) {
        this._fireChange('attributes', this), 'class' == e ? U(this._classes, t) : 'style' == e ? W(this._styles, t) : this._attrs.set(e, t)
    }

    insertChildren(e, t) {
        this._fireChange('children', this);
        let n = 0;
        t = $(t);
        for (const o of t) null !== o.parent && o.remove(), o.parent = this, this._children.splice(e, 0, o), e++, n++;
        return n
    }

,

    removeAttribute(e) {
        return this._fireChange('attributes', this), 'class' == e ? !!(0 < this._classes.size) && (this._classes.clear(), !0) : 'style' == e ? !!(0 < this._styles.size) && (this._styles.clear(), !0) : this._attrs.delete(e)
    }

),

    removeChildren(e, t = 1) {
        this._fireChange('children', this);
        for (let n = e; n < e + t; n++) this._children[n].parent = null;
        return this._children.splice(e, t)
    }

.

    isSimilar(e) {
        if (!(e instanceof Qd)) return !1;
        if (this === e) return !0;
        if (this.name != e.name) return !1;
        if (this._attrs.size !== e._attrs.size || this._classes.size !== e._classes.size || this._styles.size !== e._styles.size) return !1;
        for (const [t, n]of this._attrs) if (!e._attrs.has(t) || e._attrs.get(t) !== n) return !1;
        for (const t of this._classes) if (!e._classes.has(t)) return !1;
        for (const [t, n]of this._styles) if (!e._styles.has(t) || e._styles.get(t) !== n) return !1;
        return !0
    }

(

    addClass()

=>

    _fireChange(

.

    forEach(

.

    add(e)

)
}

removeClass(...e
)
{
    this._fireChange('attributes', this), e.forEach((e) = > this._classes.delete(e)
)
}
hasClass(...e
)
{
    for (const t of e) if (!this._classes.has(t)) return !1;
    return !0
}
getClassNames()
{
    return this._classes.keys()
}
setStyle(e, t)
{
    if (this._fireChange('attributes', this), fa(e)) {
        const t = Object.keys(e);
        for (const n of t) this._styles.set(n, e[n])
    } else this._styles.set(e, t)
}
getStyle(e)
{
    return this._styles.get(e)
}
getStyleNames()
{
    return this._styles.keys()
}
hasStyle(...e
)
{
    for (const t of e) if (!this._styles.has(t)) return !1;
    return !0
}
removeStyle(...e
)
{
    this._fireChange('attributes', this), e.forEach((e) = > this._styles.delete(e)
)
}
findAncestor(...e
)
{
    const t = new Kd(...e
)
    ;
    for (let n = this.parent; n;) {
        if (t.match(n)) return n;
        n = n.parent
    }
    return null
}
setCustomProperty(e, t)
{
    this._customProperties.set(e, t)
}
getCustomProperty(e)
{
    return this._customProperties.get(e)
}
removeCustomProperty(e)
{
    return this._customProperties.delete(e)
}
*
getCustomProperties()
{
    yield * this._customProperties.entries()
}
getIdentity()
{
    const e = Array.from(this._classes).sort().join(','),
        t = Array.from(this._styles).map((e) = > `${e[0]}:${e[1]}`
).
    sort().join(';'), n = Array.from(this._attrs).map((e) = > `${e[0]}="${e[1]}"`
).
    sort().join(' ');
    return this.name + ('' == e ? '' : ` class="${e}"`) + ('' == t ? '' : ` style="${t}"`) + ('' == n ? '' : ` ${n}`)
}
}

class Jd {
    get isPartial() {
        return this.data.length !== this.textNode.data.length
    }

    get parent() {
        return this.textNode.parent
    }

    get root() {
        return this.textNode.root
    }

    get document() {
        return this.textNode.document
    }

    constructor(e, t, n) {
        if (this.textNode = e, 0 > t || t > e.data.length) throw new _a('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
        if (0 > n || t + n > e.data.length) throw new _a('view-textproxy-wrong-length: Given length value is incorrect.');
        this.data = e.data.substring(t, t + n), this.offsetInText = t
    }

    is(e) {
        return 'textProxy' == e
    }

    getAncestors(e = {includeSelf: !1, parentFirst: !1}) {
        const t = [];
        for (let n = e.includeSelf ? this.textNode : this.parent; null !== n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
        return t
    }
}

class Gd {
    constructor(e = {}) {
        if (!e.boundaries && !e.startPosition) throw new _a('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
        if (e.direction && 'forward' != e.direction && 'backward' != e.direction) throw new _a('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {direction: e.direction});
        this.boundaries = e.boundaries || null, this.position = e.startPosition ? ec.createFromPosition(e.startPosition) : ec.createFromPosition(e.boundaries['backward' == e.direction ? 'end' : 'start']), this.direction = e.direction || 'forward', this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
    }

    [Symbol.iterator]() {
        return this
    }

    skip(e) {
        let t, n, o;
        do o = this.position, ({done: t, value: n} = this.next()); while (!t && e(n));
        t || (this.position = o)
    }

    next() {
        return 'forward' == this.direction ? this._next() : this._previous()
    }

    _next() {
        let e = ec.createFromPosition(this.position);
        const t = this.position, n = e.parent;
        if (null === n.parent && e.offset === n.childCount) return {done: !0};
        if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {done: !0};
        let o;
        if (n instanceof $d) {
            if (e.isAtEnd) return this.position = ec.createAfter(n), this._next();
            o = n.data[e.offset]
        } else o = n.getChild(e.offset);
        if (o instanceof Qd) return this.shallow ? e.offset++ : e = new ec(o, 0), this.position = e, this._formatReturnValue('elementStart', o, t, e, 1);
        if (!(o instanceof $d)) {
            if ('string' == typeof o) {
                let o;
                if (this.singleCharacters) o = 1; else {
                    const t = n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length;
                    o = t - e.offset
                }
                const i = new Jd(n, e.offset, o);
                return e.offset += o, this.position = e, this._formatReturnValue('text', i, t, e, o)
            }
            return e = ec.createAfter(n), this.position = e, this.ignoreElementEnd ? this._next() : this._formatReturnValue('elementEnd', n, t, e)
        }
        if (this.singleCharacters) return e = new ec(o, 0), this.position = e, this._next(); else {
            let n = o.data.length, i = o;
            return o == this._boundaryEndParent ? (n = this.boundaries.end.offset, i = new Jd(o, 0, n), e = ec.createAfter(i)) : e.offset++, this.position = e, this._formatReturnValue('text', i, t, e, n)
        }
    }

    _previous() {
        let e = ec.createFromPosition(this.position);
        const t = this.position, n = e.parent;
        if (null === n.parent && 0 === e.offset) return {done: !0};
        if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {done: !0};
        let o;
        if (n instanceof $d) {
            if (e.isAtStart) return this.position = ec.createBefore(n), this._previous();
            o = n.data[e.offset - 1]
        } else o = n.getChild(e.offset - 1);
        if (o instanceof Qd) return this.shallow ? (e.offset--, this.position = e, this._formatReturnValue('elementStart', o, t, e, 1)) : (e = new ec(o, o.childCount), this.position = e, this.ignoreElementEnd ? this._previous() : this._formatReturnValue('elementEnd', o, t, e));
        if (!(o instanceof $d)) {
            if ('string' == typeof o) {
                let o;
                if (!this.singleCharacters) {
                    const t = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
                    o = e.offset - t
                } else o = 1;
                e.offset -= o;
                const i = new Jd(n, e.offset, o);
                return this.position = e, this._formatReturnValue('text', i, t, e, o)
            }
            return e = ec.createBefore(n), this.position = e, this._formatReturnValue('elementStart', n, t, e, 1)
        }
        if (this.singleCharacters) return e = new ec(o, o.data.length), this.position = e, this._previous(); else {
            let n = o.data.length, i = o;
            if (o == this._boundaryStartParent) {
                const t = this.boundaries.start.offset;
                i = new Jd(o, t, o.data.length - t), n = i.data.length, e = ec.createBefore(i)
            } else e.offset--;
            return this.position = e, this._formatReturnValue('text', i, t, e, n)
        }
    }

    _formatReturnValue(e, t, n, o, i) {
        return t instanceof Jd && (t.offsetInText + t.data.length == t.textNode.data.length && ('forward' != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? n = ec.createAfter(t.textNode) : (o = ec.createAfter(t.textNode), this.position = o)), 0 === t.offsetInText && ('backward' != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? n = ec.createBefore(t.textNode) : (o = ec.createBefore(t.textNode), this.position = o))), {
            done: !1,
            value: {type: e, item: t, previousPosition: n, nextPosition: o, length: i}
        }
    }
}

class Yd extends Qd {
    constructor(e, t, n) {
        super(e, t, n), this.getFillerOffset = K
    }

    is(e, t = null) {
        return t ? 'containerElement' == e && t == this.name || super.is(e, t) : 'containerElement' == e || super.is(e)
    }
}

const Xd = Symbol('document');

class Zd extends Yd {
    get document() {
        return this.getCustomProperty(Xd)
    }

    set document(e) {
        if (this.getCustomProperty(Xd)) throw new _a('view-editableelement-document-already-set: View document is already set.');
        this.setCustomProperty(Xd, e), this.bind('isReadOnly').to(e), this.bind('isFocused').to(e, 'isFocused', (t) = > t && e.selection.editableElement == this
    ),
        this.listenTo(e, 'render', () = > {this.isFocused = e.isFocused && e.selection.editableElement == this
    },
        {
            priority:'high'
        }
    )
    }

    constructor(e, t, n) {
        super(e, t, n), this.set('isReadOnly', !1), this.set('isFocused', !1)
    }
}

a(Zd, Us);

class ec {
    get nodeAfter() {
        return this.parent.is('text') ? null : this.parent.getChild(this.offset) || null
    }

    get nodeBefore() {
        return this.parent.is('text') ? null : this.parent.getChild(this.offset - 1) || null
    }

    get isAtStart() {
        return 0 === this.offset
    }

    get isAtEnd() {
        const e = this.parent.is('text') ? this.parent.data.length : this.parent.childCount;
        return this.offset === e
    }

    get root() {
        return this.parent.root
    }

    get editableElement() {
        let e = this.parent;
        for (; !(e instanceof Zd);) if (e.parent) e = e.parent; else return null;
        return e
    }

    static createAt(e, t) {
        if (e instanceof ec) return this.createFromPosition(e); else {
            const n = e;
            if ('end' == t) t = n.is('text') ? n.data.length : n.childCount; else {
                if ('before' == t) return this.createBefore(n);
                if ('after' == t) return this.createAfter(n);
                t || (t = 0)
            }
            return new ec(n, t)
        }
    }


    static createAfter(e) {
        if (e.is('textProxy')) return new ec(e.textNode, e.offsetInText + e.data.length);
        if (!e.parent) throw new _a('view-position-after-root: You can not make position after root.', {root: e});
        return new ec(e.parent, e.index + 1)
    }

    static createBefore(e) {
        if (e.is('textProxy')) return new ec(e.textNode, e.offsetInText);
        if (!e.parent) throw new _a('view-position-before-root: You can not make position before root.', {root: e});
        return new ec(e.parent, e.index)
    }

    static createFromPosition(e) {
        return new this(e.parent, e.offset)
    }

    constructor(e, t) {
        this.parent = e, this.offset = t
    }


    getShiftedBy(e) {
        const t = ec.createFromPosition(this), n = t.offset + e;
        return t.offset = 0 > n ? 0 : n, t
    }

    getLastMatchingPosition(e, t = {}) {
        t.startPosition = this;
        const n = new Gd(t);
        return n.skip(e), n.position
    }

    getAncestors() {
        return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({includeSelf: !0})
    }

    getCommonAncestor(e) {
        const t = this.getAncestors(), n = e.getAncestors();
        let o = 0;
        for (; t[o] == n[o] && t[o];) o++;
        return 0 == o ? null : t[o - 1]
    }

    isEqual(e) {
        return this.parent == e.parent && this.offset == e.offset
    }

    isBefore(e) {
        return 'before' == this.compareWith(e)
    }

    isAfter(e) {
        return 'after' == this.compareWith(e)
    }

    compareWith(e) {
        if (this.isEqual(e)) return 'same';
        if (this.parent === e.parent) return 0 > this.offset - e.offset ? 'before' : 'after';
        const t = this.getAncestors(), n = e.getAncestors(), o = O(t, n);
        let i;
        switch (o) {
            case 0:
                return 'different';
            case'prefix':
                i = t.length - 1;
                break;
            case'extension':
                i = n.length - 1;
                break;
            default:
                i = o - 1;
        }
        const r = t[i], a = t[i + 1], s = n[i + 1];
        if (r === this.parent) {
            const e = this.offset - s.index;
            return 0 >= e ? 'before' : 'after'
        }
        if (r === e.parent) {
            const t = a.index - e.offset;
            return 0 > t ? 'before' : 'after'
        }
        const l = a.index - s.index;
        return 0 > l ? 'before' : 'after'
    }
}

class tc {

    get isCollapsed() {
        return this.start.isEqual(this.end)
    }

    get isFlat() {
        return this.start.parent === this.end.parent
    }

    get root() {
        return this.start.root
    }

    static createFromParentsAndOffsets(e, t, n, o) {
        return new this(new ec(e, t), new ec(n, o))
    }

    static createFromRange(e) {
        return new this(e.start, e.end)
    }


    static createFromPositionAndShift(e, t) {
        const n = e, o = e.getShiftedBy(t);
        return 0 < t ? new this(n, o) : new this(o, n)
    }

    static createIn(e) {
        return this.createFromParentsAndOffsets(e, 0, e, e.childCount)
    }

    static createOn(e) {
        return this.createFromPositionAndShift(ec.createBefore(e), 1)
    }

    static createCollapsedAt(e, t) {
        const n = ec.createAt(e, t), o = ec.createFromPosition(n);
        return new tc(n, o)
    }

    constructor(e, t = null) {
        this.start = ec.createFromPosition(e), this.end = t ? ec.createFromPosition(t) : ec.createFromPosition(e)
    }

    * [Symbol.iterator]() {
        yield * new Gd({boundaries: this, ignoreElementEnd: !0})
    }


    getEnlarged() {
        let e = this.start.getLastMatchingPosition(Q, {direction: 'backward'}),
            t = this.end.getLastMatchingPosition(Q);
        return e.parent.is('text') && e.isAtStart && (e = ec.createBefore(e.parent)), t.parent.is('text') && t.isAtEnd && (t = ec.createAfter(t.parent)), new tc(e, t)
    }

    getTrimmed() {
        let e = this.start.getLastMatchingPosition(Q);
        if (e.isAfter(this.end) || e.isEqual(this.end)) return new tc(e, e);
        let t = this.end.getLastMatchingPosition(Q, {direction: 'backward'});
        const n = e.nodeAfter, o = t.nodeBefore;
        return n && n.is('text') && (e = new ec(n, 0)), o && o.is('text') && (t = new ec(o, o.data.length)), new tc(e, t)
    }

    isEqual(e) {
        return this == e || this.start.isEqual(e.start) && this.end.isEqual(e.end)
    }

    containsPosition(e) {
        return e.isAfter(this.start) && e.isBefore(this.end)
    }

    containsRange(e, t = !1) {
        e.isCollapsed && (t = !1);
        const n = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
            o = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
        return n && o
    }

    getDifference(e) {
        const t = [];
        return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new tc(this.start, e.start)), this.containsPosition(e.end) && t.push(new tc(e.end, this.end))) : t.push(tc.createFromRange(this)), t
    }

    getIntersection(e) {
        if (this.isIntersecting(e)) {
            let t = this.start, n = this.end;
            return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (n = e.end), new tc(t, n)
        }
        return null
    }

    getWalker(e = {}) {
        return e.boundaries = this, new Gd(e)
    }

    getCommonAncestor() {
        return this.start.getCommonAncestor(this.end)
    }

    * getItems(e = {}) {
        e.boundaries = this, e.ignoreElementEnd = !0;
        const t = new Gd(e);
        for (const n of t) yield n.item
    }

    * getPositions(e = {}) {
        e.boundaries = this;
        const t = new Gd(e);
        yield t.position;
        for (const n of t) yield n.nextPosition
    }

    isIntersecting(e) {
        return this.start.isBefore(e.end) && this.end.isAfter(e.start)
    }
}

class nc {
    constructor() {
        this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this.on('modelToViewPosition', (e, t) = > {if(
        !t.viewPosition
    )
        {
            const e = this._modelToViewMapping.get(t.modelPosition.parent);
            t.viewPosition = this._findPositionIn(e, t.modelPosition.offset)
        }
    },
        {
            priority:'low'
        }
    ),
        this.on('viewToModelPosition', (e, t) = > {if(t.modelPosition
    )
        return;
        let n = t.viewPosition.parent, o = this._viewToModelMapping.get(n);
        for (; !o;) n = n.parent, o = this._viewToModelMapping.get(n);
        const i = this._toModelOffset(t.viewPosition.parent, t.viewPosition.offset, n);
        t.modelPosition = Zs.createFromParentAndOffset(o, i)
    },
        {
            priority:'low'
        }
    )
    }

    bindElements(e, t) {
        this._modelToViewMapping.set(e, t), this._viewToModelMapping.set(t, e)
    }

    unbindViewElement(e) {
        const t = this.toModelElement(e);
        this._unbindElements(t, e)
    }

    unbindModelElement(e) {
        const t = this.toViewElement(e);
        this._unbindElements(e, t)
    }

    clearBindings() {
        this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap
    }

    toModelElement(e) {
        return this._viewToModelMapping.get(e)
    }

    toViewElement(e) {
        return this._modelToViewMapping.get(e)
    }

    toModelRange(e) {
        return new el(this.toModelPosition(e.start), this.toModelPosition(e.end))
    }

    toViewRange(e) {
        return new tc(this.toViewPosition(e.start), this.toViewPosition(e.end))
    }

    toModelPosition(e) {
        const t = {viewPosition: e, mapper: this};
        return this.fire('viewToModelPosition', t), t.modelPosition
    }

    toViewPosition(e) {
        const t = {modelPosition: e, mapper: this};
        return this.fire('modelToViewPosition', t), t.viewPosition
    }

    registerViewToModelLength(e, t) {
        this._viewToModelLengthCallbacks.set(e, t)
    }

    _toModelOffset(e, t, n) {
        if (n != e) {
            const o = this._toModelOffset(e.parent, e.index, n), i = this._toModelOffset(e, t, e);
            return o + i
        }
        if (e.is('text')) return t;
        let o = 0;
        for (let r = 0; r < t; r++) o += this.getModelLength(e.getChild(r));
        return o
    }

    _unbindElements(e, t) {
        this._viewToModelMapping.delete(t), this._modelToViewMapping.delete(e)
    }

    getModelLength(e) {
        if (this._viewToModelLengthCallbacks.get(e.name)) {
            const t = this._viewToModelLengthCallbacks.get(e.name);
            return t(e)
        }
        if (this._viewToModelMapping.has(e)) return 1;
        if (e.is('text')) return e.data.length;
        if (e.is('uiElement')) return 0; else {
            let t = 0;
            for (const n of e.getChildren()) t += this.getModelLength(n);
            return t
        }
    }

    _findPositionIn(e, t) {
        let n = 0, o = 0, i = 0, r;
        if (e.is('text')) return new ec(e, t);
        for (; o < t;) r = e.getChild(i), n = this.getModelLength(r), o += n, i++;
        return o == t ? this._moveViewPositionToTextNode(new ec(e, i)) : this._findPositionIn(r, t - (o - n))
    }

    _moveViewPositionToTextNode(e) {
        const t = e.nodeBefore, n = e.nodeAfter;
        if (t instanceof $d) return new ec(t, t.data.length);
        return n instanceof $d ? new ec(n, 0) : e
    }
}

a(nc, Oa);

class oc {
    constructor() {
        this._consumable = new Map, this._textProxyRegistry = new Map
    }

    add(e, t) {
        e instanceof Qs && (e = this._getSymbolForTextProxy(e)), this._consumable.has(e) || this._consumable.set(e, new Map), this._consumable.get(e).set(t, !0)
    }

    consume(e, t) {
        return e instanceof Qs && (e = this._getSymbolForTextProxy(e)), !!this.test(e, t) && (this._consumable.get(e).set(t, !1), !0)
    }

    test(e, t) {
        e instanceof Qs && (e = this._getSymbolForTextProxy(e));
        const n = this._consumable.get(e);
        if (n === void 0) return null;
        const o = n.get(t);
        return void 0 === o ? null : o
    }

    revert(e, t) {
        e instanceof Qs && (e = this._getSymbolForTextProxy(e));
        const n = this.test(e, t);
        return !1 === n ? (this._consumable.get(e).set(t, !0), !0) : !0 !== n && null
    }

    _getSymbolForTextProxy(e) {
        let t = null;
        const n = this._textProxyRegistry.get(e.startOffset);
        if (n) {
            const o = n.get(e.endOffset);
            o && (t = o.get(e.parent))
        }
        return t || (t = this._addSymbolForTextProxy(e.startOffset, e.endOffset, e.parent)), t
    }

    _addSymbolForTextProxy(e, t, n) {
        const o = Symbol('textProxySymbol');
        let i, r;
        return i = this._textProxyRegistry.get(e), i || (i = new Map, this._textProxyRegistry.set(e, i)), r = i.get(t), r || (r = new Map, i.set(t, r)), r.set(n, o), o
    }
}

class ic {

    get childCount() {
        return this._children.length
    }

    get maxOffset() {
        return this._children.maxOffset
    }

    get isEmpty() {
        return 0 === this.childCount
    }

    get root() {
        return this
    }

    get parent() {
        return null
    }

    static fromJSON(e) {
        const t = [];
        for (const n of e) n.name ? t.push(Gs.fromJSON(n)) : t.push(Ks.fromJSON(n));
        return new ic(t)
    }

    constructor(e) {
        this.markers = new Map, this._children = new Js, e && this.insertChildren(0, e)
    }

    [Symbol.iterator]() {
        return this.getChildren()
    }

    is(e) {
        return 'documentFragment' == e
    }

    getChild(e) {
        return this._children.getNode(e)
    }

    getChildren() {
        return this._children[Symbol.iterator]()
    }

    getChildIndex(e) {
        return this._children.getNodeIndex(e)
    }

    getChildStartOffset(e) {
        return this._children.getNodeStartOffset(e)
    }

    getPath() {
        return []
    }

    getNodeByPath(e) {
        let t = this;
        for (const n of e) t = t.getChild(t.offsetToIndex(n));
        return t
    }

    offsetToIndex(e) {
        return this._children.offsetToIndex(e)
    }

    appendChildren(e) {
        this.insertChildren(this.childCount, e)
    }

    insertChildren(e, t) {
        t = J(t);
        for (const n of t) null !== n.parent && n.remove(), n.parent = this;
        this._children.insertNodes(e, t)
    }

    removeChildren(e, t = 1) {
        const n = this._children.removeNodes(e, t);
        for (const o of n) o.parent = null;
        return n
    }

    toJSON() {
        const e = [];
        for (const t of this._children) e.push(t.toJSON());
        return e
    }
}

class rc {
    constructor(e, t = {}) {
        this._modelDocument = e, this.conversionApi = js({dispatcher: this}, t)
    }

    convertChange(e, t) {
        'remove' !== e && t.range && '$graveyard' == t.range.root.rootName || 'remove' == e && '$graveyard' == t.sourcePosition.root.rootName || 'rename' == e && '$graveyard' == t.element.root.rootName || ('insert' == e || 'reinsert' == e ? this.convertInsertion(t.range) : 'move' == e ? this.convertMove(t.sourcePosition, t.range) : 'remove' == e ? this.convertRemove(t.sourcePosition, t.range) : 'addAttribute' == e || 'removeAttribute' == e || 'changeAttribute' == e ? this.convertAttribute(e, t.range, t.key, t.oldValue, t.newValue) : 'rename' == e && this.convertRename(t.element, t.oldName))
    }

    convertInsertion(e) {
        const t = this._createInsertConsumable(e);
        for (const n of e) {
            const e = n.item, o = el.createFromPositionAndShift(n.previousPosition, n.length),
                i = {item: e, range: o};
            this._testAndFire('insert', i, t);
            for (const n of e.getAttributeKeys()) i.attributeKey = n, i.attributeOldValue = null, i.attributeNewValue = e.getAttribute(n), this._testAndFire(`addAttribute:${n}`, i, t)
        }
        for (const t of this._modelDocument.markers) {
            const n = t.getRange(), o = n.getIntersection(e);
            o && G(e.start, t, this.conversionApi.mapper) && this.convertMarker('addMarker', t.name, o)
        }
    }

    convertMove(e, t) {
        if (t.start.isBefore(e)) {
            this.convertInsertion(t);
            const n = e._getTransformedByInsertion(t.start, t.end.offset - t.start.offset);
            this.convertRemove(n, t)
        } else this.convertRemove(e, t), this.convertInsertion(t)
    }

    convertRemove(e, t) {
        const n = this._createConsumableForRange(t, 'remove');
        for (const o of t.getItems({shallow: !0})) {
            this._testAndFire('remove', {sourcePosition: e, item: o}, n)
        }
    }

    convertAttribute(e, t, n, o, i) {
        if (o != i) {
            const r = this._createConsumableForRange(t, e + ':' + n);
            for (const a of t) {
                const t = a.item, s = el.createFromPositionAndShift(a.previousPosition, a.length);
                this._testAndFire(`${e}:${n}`, {
                    item: t,
                    range: s,
                    attributeKey: n,
                    attributeOldValue: o,
                    attributeNewValue: i
                }, r)
            }
        }
    }

    convertRename(e, t) {
        if (e.name != t) {
            const n = e.clone(!0);
            n.name = t, this.conversionApi.mapper.bindElements(n, this.conversionApi.mapper.toViewElement(e));
            const o = new ic;
            o.appendChildren(n), this.convertRemove(Zs.createBefore(e), el.createOn(n)), this.convertInsertion(el.createOn(e))
        }
    }

    convertSelection(e) {
        const t = Array.from(this._modelDocument.markers.getMarkersAtPosition(e.getFirstPosition())),
            n = this._createSelectionConsumable(e, t);
        this.fire('selection', {selection: e}, n, this.conversionApi);
        for (const o of t) {
            const t = o.getRange();
            if (!G(e.getFirstPosition(), o, this.conversionApi.mapper)) continue;
            const i = {selection: e, markerName: o.name, markerRange: t};
            n.test(e, 'selectionMarker:' + o.name) && this.fire('selectionMarker:' + o.name, i, n, this.conversionApi)
        }
        for (const t of e.getAttributeKeys()) {
            const o = {selection: e, key: t, value: e.getAttribute(t)};
            n.test(e, 'selectionAttribute:' + o.key) && this.fire('selectionAttribute:' + o.key, o, n, this.conversionApi)
        }
    }

    convertMarker(e, t, n) {
        if (n.root.document && '$graveyard' != n.root.rootName) {
            const o = e + ':' + t;
            if (n.isCollapsed) {
                const e = new oc;
                return e.add(n, o), void this.fire(o, {
                    markerName: t,
                    markerRange: n
                }, e, this.conversionApi)
            }
            const i = this._createConsumableForRange(n, o);
            for (const e of n) {
                const r = e.item;
                if (!i.test(r, o)) continue;
                const a = {
                    item: r,
                    range: el.createFromPositionAndShift(e.previousPosition, e.length),
                    markerName: t,
                    markerRange: n
                };
                this.fire(o, a, i, this.conversionApi)
            }
        }
    }

    _createInsertConsumable(e) {
        const t = new oc;
        for (const n of e) {
            const e = n.item;
            t.add(e, 'insert');
            for (const n of e.getAttributeKeys()) t.add(e, 'addAttribute:' + n)
        }
        return t
    }

    _createConsumableForRange(e, t) {
        const n = new oc;
        for (const o of e.getItems()) n.add(o, t);
        return n
    }

    _createSelectionConsumable(e, t) {
        const n = new oc;
        n.add(e, 'selection');
        for (const o of t) n.add(e, 'selectionMarker:' + o.name);
        for (const o of e.getAttributeKeys()) n.add(e, 'selectionAttribute:' + o);
        return n
    }

    _testAndFire(e, t, n) {
        if (n.test(t.item, e)) {
            const o = t.item.name || '$text';
            this.fire(e + ':' + o, t, n, this.conversionApi)
        }
    }
}

a(rc, Oa);
const ac = 10;

class sc extends Qd {
    constructor(e, t, n) {
        super(e, t, n), this.priority = ac, this.getFillerOffset = Y
    }

    is(e, t = null) {
        return t ? 'attributeElement' == e && t == this.name || super.is(e, t) : 'attributeElement' == e || super.is(e)
    }

    clone(e) {
        const t = super.clone(e);
        return t.priority = this.priority, t
    }

    isSimilar(e) {
        return super.isSimilar(e) && this.priority == e.priority
    }
}

sc.DEFAULT_PRIORITY = ac;

class lc extends Qd {
    constructor(e, t, n) {
        super(e, t, n), this.getFillerOffset = Z
    }

    is(e, t = null) {
        return t ? 'emptyElement' == e && t == this.name || super.is(e, t) : 'emptyElement' == e || super.is(e)
    }

    insertChildren(e, t) {
        if (t && (t instanceof Ud || 0 < Array.from(t).length)) throw new _a('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')
    }
}

const dc = navigator.userAgent.toLowerCase(), cc = {
    mac: function (e) {
        return -1 < e.indexOf('macintosh')
    }(dc)
};
var mc = cc;
const uc = function () {
    const e = {
        arrowleft: 37,
        arrowup: 38,
        arrowright: 39,
        arrowdown: 40,
        backspace: 8,
        delete: 46,
        enter: 13,
        space: 32,
        esc: 27,
        tab: 9,
        ctrl: 1114112,
        cmd: 1114112,
        shift: 2228224,
        alt: 4456448
    };
    for (let t = 65; 90 >= t; t++) {
        const n = String.fromCharCode(t);
        e[n.toLowerCase()] = t
    }
    for (let t = 48; 57 >= t; t++) e[t - 48] = t;
    for (let t = 112; 123 >= t; t++) e['f' + (t - 111)] = t;
    return e
}();

class pc extends Qd {
    constructor(e, t, n) {
        super(e, t, n), this.getFillerOffset = re
    }

    is(e, t = null) {
        return t ? 'uiElement' == e && t == this.name || super.is(e, t) : 'uiElement' == e || super.is(e)
    }

    insertChildren(e, t) {
        if (t && (t instanceof Ud || 0 < Array.from(t).length)) throw new _a('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')
    }

    render(e) {
        const t = e.createElement(this.name);
        for (const n of this.getAttributeKeys()) t.setAttribute(n, this.getAttribute(n));
        return t
    }
}

class gc {

    get childCount() {
        return this._children.length
    }

    get isEmpty() {
        return 0 === this.childCount
    }

    get root() {
        return this
    }

    get parent() {
        return null
    }

    constructor(e) {
        this._children = [], e && this.insertChildren(0, e)
    }

    [Symbol.iterator]() {
        return this._children[Symbol.iterator]()
    }

    is(e) {
        return 'documentFragment' == e
    }

    appendChildren(e) {
        return this.insertChildren(this.childCount, e)
    }

    getChild(e) {
        return this._children[e]
    }

    getChildIndex(e) {
        return this._children.indexOf(e)
    }

    getChildren() {
        return this._children[Symbol.iterator]()
    }

    insertChildren(e, t) {
        this._fireChange('children', this);
        let n = 0;
        t = se(t);
        for (const o of t) null !== o.parent && o.remove(), o.parent = this, this._children.splice(e, 0, o), e++, n++;
        return n
    }

    removeChildren(e, t = 1) {
        this._fireChange('children', this);
        for (let n = e; n < e + t; n++) this._children[n].parent = null;
        return this._children.splice(e, t)
    }

    _fireChange(e, t) {
        this.fire('change:' + e, t)
    }
}

a(gc, Oa);
var fc = {
    breakAttributes: function (e) {
        return e instanceof ec ? fe(e) : ge(e)
    }, breakContainer: function (e) {
        const t = e.parent;
        if (!t.is('containerElement')) throw new _a('view-writer-break-non-container-element: Trying to break an element which is not a container element.');
        if (!t.parent) throw new _a('view-writer-break-root: Trying to break root element.');
        if (e.isAtStart) return ec.createBefore(t);
        if (!e.isAtEnd) {
            const n = t.clone(!1);
            de(ec.createAfter(t), n);
            const o = new tc(e, ec.createAt(t, 'end')), i = new ec(n, 0);
            me(o, i)
        }
        return ec.createAfter(t)
    }, mergeAttributes: le, mergeContainers: function (e) {
        const t = e.nodeBefore, n = e.nodeAfter;
        if (!t || !n || !t.is('containerElement') || !n.is('containerElement')) throw new _a('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');
        const o = t.getChild(t.childCount - 1),
            i = o instanceof $d ? ec.createAt(o, 'end') : ec.createAt(t, 'end');
        return me(tc.createIn(n), ec.createAt(t, 'end')), ce(tc.createOn(n)), i
    }, insert: de, remove: ce, clear: function (e, t) {
        Pe(e);
        const n = e.getWalker({direction: 'backward', ignoreElementEnd: !0});
        for (const o of n) {
            const n = o.item;
            let i;
            if (n.is('element') && t.isSimilar(n)) i = tc.createOn(n); else if (!o.nextPosition.isAfter(e.start) && (n.is('text') || n.is('textProxy'))) {
                const e = n.getAncestors().find((e) = > e.is('element') && t.isSimilar(e)
            )
                ;e && (i = tc.createIn(e))
            }
            i && (i.end.isAfter(e.end) && (i.end = e.end), i.start.isBefore(e.start) && (i.start = e.start), ce(i))
        }
    }, move: me, wrap: ue, wrapPosition: function (e, t) {
        if (!(t instanceof sc)) throw new _a('view-writer-wrap-invalid-attribute');
        if (t.isSimilar(e.parent)) return ke(ec.createFromPosition(e));
        e.parent.is('text') && (e = we(e));
        const n = new sc;
        n.priority = na, n.isSimilar = () =
    >
        !1, e.parent.insertChildren(e.offset, n);
        const o = new tc(e, e.getShiftedBy(1));
        ue(o, t);
        const i = new ec(n.parent, n.index);
        n.remove();
        const r = i.nodeBefore, a = i.nodeAfter;
        return r instanceof $d && a instanceof $d ? ye(r, a) : ke(i)
    }, unwrap: function (e, t) {
        if (!(t instanceof sc)) throw new _a('view-writer-unwrap-invalid-attribute');
        if (Pe(e), e.isCollapsed) return e;
        if (e.end.isEqual(e.start.getShiftedBy(1))) {
            const n = e.start.nodeAfter;
            if (!t.isSimilar(n) && n instanceof sc && xe(t, n)) return e
        }
        const {start: n, end: o} = ge(e, !0), i = n.parent, r = he(i, n.offset, o.offset, t),
            a = le(r.start);
        a.isEqual(r.start) || r.end.offset--;
        const s = le(r.end);
        return new tc(a, s)
    }, rename: function (e, t) {
        const n = new Yd(t, e.getAttributes());
        return de(ec.createAfter(e), n), me(tc.createIn(e), ec.createAt(n)), ce(tc.createOn(e)), n
    }
};
const hc = [$d, sc, Yd, lc, pc];

class bc extends sc {
    isSimilar(e) {
        return !!e.is('attributeElement') && this.getCustomProperty('highlightDescriptorId') === e.getCustomProperty('highlightDescriptorId')
    }
}

class _c {

    static consumablesFromElement(e) {
        const t = {name: !0, attribute: [], class: [], style: []}, n = e.getAttributeKeys();
        for (const o of n) 'style' != o && 'class' != o && t.attribute.push(o);
        const o = e.getClassNames();
        for (const n of o) t.class.push(n);
        const i = e.getStyleNames();
        for (const n of i) t.style.push(n);
        return t
    }

    static createFrom(e, t) {
        if (t || (t = new _c), e.is('text')) return t.add(e), t;
        e.is('element') && t.add(e, _c.consumablesFromElement(e)), e.is('documentFragment') && t.add(e);
        for (const n of e.getChildren()) t = _c.createFrom(n, t);
        return t
    }

    constructor() {
        this._consumables = new Map
    }


    add(e, t) {
        let n;
        return e.is('text') || e.is('documentFragment') ? void this._consumables.set(e, !0) : void(this._consumables.has(e) ? n = this._consumables.get(e) : (n = new kc, this._consumables.set(e, n)), n.add(t))
    }

    test(e, t) {
        const n = this._consumables.get(e);
        return void 0 === n ? null : e.is('text') || e.is('documentFragment') ? n : n.test(t)
    }

    consume(e, t) {
        return !!this.test(e, t) && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !1) : this._consumables.get(e).consume(t), !0)
    }

    revert(e, t) {
        const n = this._consumables.get(e);
        n !== void 0 && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !0) : n.revert(t))
    }
}

class kc {
    constructor() {
        this._canConsumeName = null, this._consumables = {
            attribute: new Map,
            style: new Map,
            class: new Map
        }
    }

    add(e) {
        for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._add(t, e[t])
    }

    test(e) {
        if (e.name && !this._canConsumeName) return this._canConsumeName;
        for (const t in this._consumables) if (t in e) {
            const n = this._test(t, e[t]);
            if (!0 !== n) return n
        }
        return !0
    }

    consume(e) {
        for (const t in e.name && (this._canConsumeName = !1), this._consumables) t in e && this._consume(t, e[t])
    }

    revert(e) {
        for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._revert(t, e[t])
    }

    _add(e, t) {
        const n = Es(t) ? t : [t], o = this._consumables[e];
        for (const i of n) {
            if ('attribute' === e && ('class' === i || 'style' === i)) throw new _a('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');
            o.set(i, !0)
        }
    }

    _test(e, t) {
        const n = Es(t) ? t : [t], o = this._consumables[e];
        for (const i of n) if ('attribute' === e && ('class' === i || 'style' === i)) {
            const e = this._test(i, [...this._consumables[i].keys()
        ])
            ;
            if (!0 !== e) return e
        } else {
            const e = o.get(i);
            if (e === void 0) return null;
            if (!e) return !1
        }
        return !0
    }

    _consume(e, t) {
        const n = Es(t) ? t : [t], o = this._consumables[e];
        for (const i of n) 'attribute' === e && ('class' === i || 'style' === i) ? this._consume(i, [...this._consumables[i].keys()
    ]):
        o.set(i, !1)
    }

    _revert(e, t) {
        const n = Es(t) ? t : [t], o = this._consumables[e];
        for (const i of n) if ('attribute' === e && ('class' === i || 'style' === i)) this._revert(i, [...this._consumables[i].keys()
    ])
        ;
    else
        {
            const e = o.get(i);
            !1 === e && o.set(i, !0)
        }
    }
}

var wc = {
    insert: qe, remove: He, move: function (e, t) {
        if (!e.isFlat) throw new _a('model-writer-move-range-not-flat: Trying to move a range which starts and ends in different element.');
        const n = this.remove(e);
        return t = t._getTransformedByDeletion(e.start, e.end.offset - e.start.offset), this.insert(t, n)
    }, setAttribute: function (e, t, n) {
        $e(e.start), $e(e.end);
        for (const o of e.getItems()) {
            const e = o.is('textProxy') ? o.textNode : o;
            null === n ? e.removeAttribute(t) : e.setAttribute(t, n), Ue(e.parent, e.index)
        }
        Ue(e.end.parent, e.end.index)
    }, removeAttribute: function (e, t) {
        this.setAttribute(e, t, null)
    }, normalizeNodes: We
};

class yc {
    constructor(e = {}) {
        this.conversionApi = js({}, e), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this)
    }

    convert(e, t = {}) {
        this.fire('viewCleanup', e);
        const n = _c.createFrom(e);
        let o = this._convertItem(e, n, t);
        return o ? (o.is('documentFragment') || (o = new ic([o])), o.markers = Qe(o), o) : new ic
    }

    _convertItem(e, t, n = {}) {
        const o = js({}, n, {input: e, output: null});
        return e.is('element') ? this.fire('element:' + e.name, o, t, this.conversionApi) : e.is('text') ? this.fire('text', o, t, this.conversionApi) : this.fire('documentFragment', o, t, this.conversionApi), o.output && !(o.output instanceof $s || o.output instanceof ic) ? (wa.warn('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.', [e, o.output]), null) : o.output
    }

    _convertChildren(e, t, n = {}) {
        const o = Array.from(e.getChildren()), i = o.map((e) = > this._convertItem(e, t, n)
    ).
        filter((e) = > e instanceof $s || e instanceof ic
    ).
        reduce((e, t) = > e.concat(t.is('documentFragment') ? Array.from(t.getChildren()) : t), []
    )
        ;
        return new ic(i)
    }
}

a(yc, Oa);

class vc extends Zs {
    constructor(e, t, n) {
        if (super(e, t), !this.root.is('rootElement')) throw new _a('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');
        this.stickiness = n || 'sticksToNext', Ye.call(this)
    }

    detach() {
        this.stopListening()
    }
}

a(vc, Oa);

class xc {
    constructor(e, t, n) {
        this.dataController = e, this.batch = t, this.position = n, this.canMergeWith = new Set([this.position.parent]), this.schema = e.model.schema
    }

    handleNodes(e, t) {
        e = Array.from(e);
        for (let n = 0; n < e.length; n++) {
            const o = e[n];
            this._handleNode(o, {isFirst: 0 === n && t.isFirst, isLast: n === e.length - 1 && t.isLast})
        }
    }

    getSelectionRange() {
        return this.nodeToSelect ? el.createOn(this.nodeToSelect) : this.dataController.model.getNearestSelectionRange(this.position)
    }

    _handleNode(e, t) {
        if (this._checkIsObject(e)) return void this._handleObject(e, t);
        const n = this._checkAndSplitToAllowedPosition(e, t);
        return n ? void(this._insert(e), this._mergeSiblingsOf(e, t)) : void this._handleDisallowedNode(e, t)
    }

    _handleObject(e, t) {
        this._checkAndSplitToAllowedPosition(e) ? this._insert(e) : this._tryAutoparagraphing(e, t)
    }

    _handleDisallowedNode(e, t) {
        e.is('element') ? this.handleNodes(e.getChildren(), t) : this.schema.check({
            name: '$text',
            inside: this.position
        }) ? (this.schema.removeDisallowedAttributes([e], this.position), this._handleNode(e, t)) : this._tryAutoparagraphing(e, t)
    }

    _insert(e) {
        if (!this._checkIsAllowed(e, this.position)) return void wa.error('insertcontent-wrong-position: The node cannot be inserted on the given position.', {
            node: e,
            position: this.position
        });
        const t = vc.createFromPosition(this.position);
        this.batch.insert(this.position, e), this.position = Zs.createFromPosition(t), t.detach(), this.nodeToSelect = this._checkIsObject(e) && !this.schema.check({
            name: '$text',
            inside: this.position
        }) ? e : null
    }

    _mergeSiblingsOf(e, t) {
        if (e instanceof Gs) {
            const n = t.isFirst && e.previousSibling instanceof Gs && this.canMergeWith.has(e.previousSibling),
                o = t.isLast && e.nextSibling instanceof Gs && this.canMergeWith.has(e.nextSibling),
                i = vc.createBefore(e), r = vc.createAfter(e);
            if (n) {
                const e = vc.createFromPosition(this.position);
                this.batch.merge(i);
                const t = e.nodeBefore;
                this.schema.removeDisallowedAttributes(t.getChildren(), Zs.createAt(t), this.batch), this.position = Zs.createFromPosition(e), e.detach()
            }
            if (o) {
                this.position.isEqual(r) || wa.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'), this.position = Zs.createAt(r.nodeBefore, 'end');
                const e = new vc(this.position.root, this.position.path, 'sticksToPrevious');
                this.batch.merge(r), this.schema.removeDisallowedAttributes(e.parent.getChildren(), e, this.batch), this.position = Zs.createFromPosition(e), e.detach()
            }
            i.detach(), r.detach(), n || o || this.schema.removeDisallowedAttributes(e.getChildren(), Zs.createAt(e), this.batch)
        }
    }

    _tryAutoparagraphing(e, t) {
        const n = new Gs('paragraph');
        this._getAllowedIn(n, this.position.parent) && (e.is('text') && !this._checkIsAllowed(e, [n]) && this.schema.removeDisallowedAttributes([e], [n]), this._checkIsAllowed(e, [n]) && (n.appendChildren(e), this._handleNode(n, t)))
    }

    _checkAndSplitToAllowedPosition(e) {
        const t = this._getAllowedIn(e, this.position.parent);
        if (!t) return !1;
        for (; t != this.position.parent;) {
            if (this.schema.limits.has(this.position.parent.name)) return !1;
            if (this.position.isAtStart) {
                const e = this.position.parent;
                this.position = Zs.createBefore(e), e.isEmpty && this.batch.remove(e)
            } else if (this.position.isAtEnd) this.position = Zs.createAfter(this.position.parent); else {
                const e = Zs.createAfter(this.position.parent);
                this.batch.split(this.position), this.position = e, this.canMergeWith.add(this.position.nodeAfter)
            }
        }
        return !0
    }

    _getAllowedIn(e, t) {
        return this._checkIsAllowed(e, [t]) ? t : t.parent ? this._getAllowedIn(e, t.parent) : null
    }

    _checkIsAllowed(e, t) {
        return this.schema.check({name: et(e), attributes: Array.from(e.getAttributeKeys()), inside: t})
    }

    _checkIsObject(e) {
        return this.schema.objects.has(et(e))
    }
}

class Ac {
    constructor(e, t) {
        this.model = e, this.processor = t, this.mapper = new nc, this.modelToView = new rc(this.model, {mapper: this.mapper}), this.modelToView.on('insert:$text', Se(), {priority: 'lowest'}), this.viewToModel = new yc({schema: e.schema}), this.viewToModel.on('text', Ge(), {priority: 'lowest'}), this.viewToModel.on('element', Je(), {priority: 'lowest'}), this.viewToModel.on('documentFragment', Je(), {priority: 'lowest'}), ['insertContent', 'deleteContent', 'modifySelection', 'getSelectedContent'].forEach((e) = > this.decorate(e)
    )
    }

    get(e = 'main') {
        return this.stringify(this.model.getRoot(e))
    }

    stringify(e) {
        const t = this.toView(e);
        return this.processor.toData(t)
    }

    toView(e) {
        const t = el.createIn(e), n = new gc;
        return this.mapper.bindElements(e, n), this.modelToView.convertInsertion(t), this.mapper.clearBindings(), n
    }

    set(e, t = 'main') {
        const n = this.model.getRoot(t);
        this.model.enqueueChanges(() = > {this.model.selection.removeAllRanges(), this.model.selection.clearAttributes(), this.model.batch('transparent').remove(el.createIn(n)).insert(Zs.createAt(n, 0), this.parse(e))
    })
    }

    parse(e, t = '$root') {
        const n = this.processor.toView(e);
        return this.toModel(n, t)
    }

    toModel(e, t = '$root') {
        return this.viewToModel.convert(e, {context: [t]})
    }

    destroy() {
    }

    insertContent(e, t, n) {
        Ze(this, e, t, n)
    }

    deleteContent(e, t, n) {
        tt(e, t, n)
    }

    modifySelection(e, t) {
        gt(this, e, t)
    }

    getSelectedContent(e) {
        return _t(e)
    }

    hasContent(e) {
        if (e instanceof Gs && (e = el.createIn(e)), e.isCollapsed) return !1;
        for (const t of e.getItems()) if (t.is('textProxy') || this.model.schema.objects.has(t.name)) return !0;
        return !1
    }
}

a(Ac, Us);

class Cc {

    static get className() {
        return 'engine.model.operation.Operation'
    }

    static fromJSON(e) {
        return new this(e.baseVersion)
    }

    constructor(e) {
        this.baseVersion = e
    }

    toJSON() {
        const e = Wd(this, !0);
        return e.__className = this.constructor.className, delete e.delta, e
    }
}

wt.prototype.add = wt.prototype.push = function (e) {
    return this.__data__.set(e, '__lodash_hash_undefined__'), this
}, wt.prototype.has = function (e) {
    return this.__data__.has(e)
};
var Tc = wt, Pc = function (e, t) {
    for (var n = -1, o = e.length; ++n < o;) if (t(e[n], n, e)) return !0;
    return !1
}, Ec = function (e, t, n, o, i, r) {
    var a = i & 2, s = e.length, l = t.length;
    if (s != l && !(a && l > s)) return !1;
    var d = r.get(e);
    if (d) return d == t;
    var c = -1, m = !0, u = i & 1 ? new Tc : void 0;
    for (r.set(e, t); ++c < s;) {
        var p = e[c], g = t[c];
        if (o) var f = a ? o(g, p, c, t, e, r) : o(p, g, c, e, t, r);
        if (void 0 !== f) {
            if (f) continue;
            m = !1;
            break
        }
        if (u) {
            if (!Pc(t, function (e, t) {
                    if (!u.has(t) && (p === e || n(p, e, o, i, r))) return u.add(t)
                })) {
                m = !1;
                break
            }
        } else if (!(p === g || n(p, g, o, i, r))) {
            m = !1;
            break
        }
    }
    return r['delete'](e), m
}, Sc = Ed ? Ed.prototype : void 0, Vc = Sc ? Sc.valueOf : void 0, Oc = function (e, t, n, o, i, r, a) {
    switch (n) {
        case'[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case'[object ArrayBuffer]':
            return e.byteLength == t.byteLength && o(new fd(e), new fd(t));
        case'[object Boolean]':
        case'[object Date]':
            return +e == +t;
        case'[object Error]':
            return e.name == t.name && e.message == t.message;
        case'[object Number]':
            return e == +e ? e == +t : t != +t;
        case'[object RegExp]':
        case'[object String]':
            return e == t + '';
        case'[object Map]':
            var s = wd;
        case'[object Set]':
            var l = r & 2;
            if (s || (s = Cd), e.size != t.size && !l) return !1;
            var d = a.get(e);
            return d ? d == t : (r |= 1, a.set(e, t), Ec(s(e), s(t), o, i, r, a));
        case'[object Symbol]':
            if (Vc) return Vc.call(e) == Vc.call(t);
    }
    return !1
}, Rc = function (e, t, n, o, i, r) {
    var a = i & 2, s = Nl(e), l = s.length, d = Nl(t), c = d.length;
    if (l != c && !a) return !1;
    for (var m = l, u; m--;) if (u = s[m], a ? !(u in t) : !Ol(t, u)) return !1;
    var p = r.get(e);
    if (p) return p == t;
    var g = !0;
    r.set(e, t);
    for (var f = a; ++m < l;) {
        u = s[m];
        var h = e[u], b = t[u];
        if (o) var _ = a ? o(b, h, u, t, e, r) : o(h, b, u, e, t, r);
        if (void 0 === _ ? !(h === b || n(h, b, o, i, r)) : !_) {
            g = !1;
            break
        }
        f || (f = 'constructor' == u)
    }
    if (g && !f) {
        var k = e.constructor, w = t.constructor;
        k != w && 'constructor' in e && 'constructor' in t && !('function' == typeof k && k instanceof k && 'function' == typeof w && w instanceof w) && (g = !1)
    }
    return r['delete'](e), g
}, Fc = {};
Fc['[object Float32Array]'] = Fc['[object Float64Array]'] = Fc['[object Int8Array]'] = Fc['[object Int16Array]'] = Fc['[object Int32Array]'] = Fc['[object Uint8Array]'] = Fc['[object Uint8ClampedArray]'] = Fc['[object Uint16Array]'] = Fc['[object Uint32Array]'] = !0, Fc['[object Arguments]'] = Fc['[object Array]'] = Fc['[object ArrayBuffer]'] = Fc['[object Boolean]'] = Fc['[object DataView]'] = Fc['[object Date]'] = Fc['[object Error]'] = Fc['[object Function]'] = Fc['[object Map]'] = Fc['[object Number]'] = Fc['[object Object]'] = Fc['[object RegExp]'] = Fc['[object Set]'] = Fc['[object String]'] = Fc['[object WeakMap]'] = !1;
var Nc = Object.prototype, Ic = Nc.toString, Bc = function (e) {
        return da(e) && Ha(e.length) && !!Fc[Ic.call(e)]
    }, Mc = '[object Arguments]', Dc = '[object Array]', Lc = '[object Object]', jc = Object.prototype,
    zc = jc.hasOwnProperty, qc = function (e, t, n, o, i, r) {
        var a = Es(e), s = Es(t), l = Dc, d = Dc;
        a || (l = cd(e), l = l == Mc ? Lc : l), s || (d = cd(t), d = d == Mc ? Lc : d);
        var c = l == Lc && !la(e), m = d == Lc && !la(t), u = l == d;
        if (u && !c) return r || (r = new Pl), a || Bc(e) ? Ec(e, t, n, o, i, r) : Oc(e, t, l, n, o, i, r);
        if (!(i & 2)) {
            var p = c && zc.call(e, '__wrapped__'), g = m && zc.call(t, '__wrapped__');
            if (p || g) {
                var f = p ? e.value() : e, h = g ? t.value() : t;
                return r || (r = new Pl), n(f, h, o, i, r)
            }
        }
        return !!u && (r || (r = new Pl), Rc(e, t, n, o, i, r))
    }, Hc = yt, Wc = function (e, t) {
        return Hc(e, t)
    };

class Uc extends Cc {
    static get className() {
        return 'engine.model.operation.AttributeOperation'
    }

    get type() {
        return null === this.oldValue ? 'addAttribute' : null === this.newValue ? 'removeAttribute' : 'changeAttribute'
    }

    static fromJSON(e, t) {
        return new Uc(el.fromJSON(e.range, t), e.key, e.oldValue, e.newValue, e.baseVersion)
    }


    constructor(e, t, n, o, i) {
        super(i), this.range = el.createFromRange(e), this.key = t, this.oldValue = n === void 0 ? null : n, this.newValue = o === void 0 ? null : o
    }

    clone() {
        return new Uc(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
    }

    getReversed() {
        return new Uc(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
    }

    _execute() {
        for (const e of this.range.getItems()) {
            if (null !== this.oldValue && !Wc(e.getAttribute(this.key), this.oldValue)) throw new _a('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
                item: e,
                key: this.key,
                value: this.oldValue
            });
            if (null === this.oldValue && null !== this.newValue && e.hasAttribute(this.key)) throw new _a('attribute-operation-attribute-exists: The attribute with given key already exists.', {
                node: e,
                key: this.key
            })
        }
        return Wc(this.oldValue, this.newValue) || wc.setAttribute(this.range, this.key, this.newValue), {
            range: this.range,
            key: this.key,
            oldValue: this.oldValue,
            newValue: this.newValue
        }
    }
}

class $c extends Cc {
    static get className() {
        return 'engine.model.operation.MoveOperation'
    }

    get type() {
        return 'move'
    }

    static fromJSON(e, t) {
        const n = Zs.fromJSON(e.sourcePosition, t), o = Zs.fromJSON(e.targetPosition, t),
            i = new this(n, e.howMany, o, e.baseVersion);
        return e.isSticky && (i.isSticky = !0), i
    }

    constructor(e, t, n, o) {
        super(o), this.sourcePosition = Zs.createFromPosition(e), this.howMany = t, this.targetPosition = Zs.createFromPosition(n), this.isSticky = !1
    }


    clone() {
        const e = new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion);
        return e.isSticky = this.isSticky, e
    }

    getMovedRangeStart() {
        return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
    }

    getReversed() {
        const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany),
            t = new this.constructor(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1);
        return t.isSticky = this.isSticky, t
    }

    _execute() {
        const e = this.sourcePosition.parent, t = this.targetPosition.parent,
            n = this.sourcePosition.offset, o = this.targetPosition.offset;
        if (!e || !t) throw new _a('move-operation-position-invalid: Source position or target position is invalid.'); else if (n + this.howMany > e.maxOffset) throw new _a('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.'); else if (e === t && n < o && o < n + this.howMany) throw new _a('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.'); else if (this.sourcePosition.root == this.targetPosition.root && 'prefix' == O(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
            const e = this.sourcePosition.path.length - 1;
            if (this.targetPosition.path[e] >= n && this.targetPosition.path[e] < n + this.howMany) throw new _a('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')
        }
        const i = wc.move(el.createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition);
        return {sourcePosition: this.sourcePosition, range: i}
    }
}

class Kc extends $c {
    static get className() {
        return 'engine.model.operation.ReinsertOperation'
    }

    get position() {
        return this.targetPosition
    }

    set position(e) {
        this.targetPosition = e
    }

    get type() {
        return 'reinsert'
    }

    getReversed() {
        const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
        return new Qc(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
    }
}

class Qc extends $c {
    static get className() {
        return 'engine.model.operation.RemoveOperation'
    }

    get type() {
        return 'remove'
    }

    getReversed() {
        const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
        return new Kc(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
    }
}

class Jc extends Cc {
    static get className() {
        return 'engine.model.operation.InsertOperation'
    }

    get type() {
        return 'insert'
    }

    static fromJSON(e, t) {
        const n = [];
        for (const o of e.nodes) o.name ? n.push(Gs.fromJSON(o)) : n.push(Ks.fromJSON(o));
        return new Jc(Zs.fromJSON(e.position, t), n, e.baseVersion)
    }


    constructor(e, t, n) {
        super(n), this.position = Zs.createFromPosition(e), this.nodes = new Js(We(t))
    }

    clone() {
        const e = new Js([...this.nodes
    ].
        map((e) = > e.clone(!0)
    ))
        ;
        return new Jc(this.position, e, this.baseVersion)
    }

    getReversed() {
        const e = this.position.root.document.graveyard, t = new Zs(e, [0]);
        return new Qc(this.position, this.nodes.maxOffset, t, this.baseVersion + 1)
    }

    _execute() {
        const e = this.nodes;
        this.nodes = new Js([...e
    ].
        map((e) = > e.clone(!0)
    ))
        ;const t = qe(this.position, e);
        return {range: t}
    }
}

class Gc extends Cc {
    static get className() {
        return 'engine.model.operation.MarkerOperation'
    }

    get type() {
        return 'marker'
    }

    static fromJSON(e, t) {
        return new Gc(e.name, e.oldRange ? el.fromJSON(e.oldRange, t) : null, e.newRange ? el.fromJSON(e.newRange, t) : null, t.markers, e.baseVersion)
    }

    constructor(e, t, n, o, i) {
        super(i), this.name = e, this.oldRange = t ? el.createFromRange(t) : null, this.newRange = n ? el.createFromRange(n) : null, this._markers = o
    }


    clone() {
        return new Gc(this.name, this.oldRange, this.newRange, this._markers, this.baseVersion)
    }

    getReversed() {
        return new Gc(this.name, this.newRange, this.oldRange, this._markers, this.baseVersion + 1)
    }

    _execute() {
        const e = this.newRange ? 'set' : 'remove';
        return this._markers[e](this.name, this.newRange), {name: this.name, type: e}
    }

    toJSON() {
        const e = super.toJSON();
        return delete e._markers, e
    }
}

class Yc extends Cc {
    static get className() {
        return 'engine.model.operation.NoOperation'
    }

    get type() {
        return 'noop'
    }

    clone() {
        return new Yc(this.baseVersion)
    }

    getReversed() {
        return new Yc(this.baseVersion + 1)
    }

    _execute() {
        return {}
    }
}

class Xc extends Cc {
    static get className() {
        return 'engine.model.operation.RenameOperation'
    }

    get type() {
        return 'rename'
    }

    static fromJSON(e, t) {
        return new Xc(Zs.fromJSON(e.position, t), e.oldName, e.newName, e.baseVersion)
    }


    constructor(e, t, n, o) {
        super(o), this.position = e, this.oldName = t, this.newName = n
    }

    clone() {
        return new Xc(Zs.createFromPosition(this.position), this.oldName, this.newName, this.baseVersion)
    }

    getReversed() {
        return new Xc(Zs.createFromPosition(this.position), this.newName, this.oldName, this.baseVersion + 1)
    }

    _execute() {
        const e = this.position.nodeAfter;
        if (!(e instanceof Gs)) throw new _a('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.'); else if (e.name !== this.oldName) throw new _a('rename-operation-wrong-name: Element to change has different name than operation\'s old name.');
        return e.name != this.newName && (e.name = this.newName), {element: e, oldName: this.oldName}
    }
}

class Zc extends Cc {
    static get className() {
        return 'engine.model.operation.RootAttributeOperation'
    }

    get type() {
        return null === this.oldValue ? 'addRootAttribute' : null === this.newValue ? 'removeRootAttribute' : 'changeRootAttribute'
    }

    static fromJSON(e, t) {
        if (!t.hasRoot(e.root)) throw new _a('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.', {rootName: e});
        return new Zc(t.getRoot(e.root), e.key, e.oldValue, e.newValue, e.baseVersion)
    }


    constructor(e, t, n, o, i) {
        super(i), this.root = e, this.key = t, this.oldValue = n, this.newValue = o
    }

    clone() {
        return new Zc(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
    }

    getReversed() {
        return new Zc(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
    }

    _execute() {
        if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new _a('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
            root: this.root,
            key: this.key
        });
        if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new _a('rootattribute-operation-attribute-exists: The attribute with given key already exists.', {
            root: this.root,
            key: this.key
        });
        return null === this.newValue ? this.root.removeAttribute(this.key) : this.root.setAttribute(this.key, this.newValue), {
            root: this.root,
            key: this.key,
            oldValue: this.oldValue,
            newValue: this.newValue
        }
    }
}

const em = {};
em[Uc.className] = Uc, em[Jc.className] = Jc, em[Gc.className] = Gc, em[$c.className] = $c, em[Yc.className] = Yc, em[Cc.className] = Cc, em[Kc.className] = Kc, em[Qc.className] = Qc, em[Xc.className] = Xc, em[Zc.className] = Zc;

class tm {
    static fromJSON(e, t) {
        return em[e.__className].fromJSON(e, t)
    }
}

const nm = new Map;

class om {
    static fromJSON(e, t) {
        if (!nm.has(e.__className)) throw new _a('delta-fromjson-no-deserializer: This delta has no defined deserializer', {name: e.__className});
        const n = nm.get(e.__className), o = new n;
        for (const n of e.operations) o.addOperation(tm.fromJSON(n, t));
        for (const n in e) '__className' != n && void 0 === o[n] && (o[n] = e[n]);
        return o
    }

    static register(e) {
        nm.set(e.className, e)
    }
}

class im {
    static get className() {
        return 'engine.model.delta.Delta'
    }

    get baseVersion() {
        return 0 < this.operations.length ? this.operations[0].baseVersion : null
    }

    set baseVersion(e) {
        for (const t of this.operations) t.baseVersion = e++
    }

    get _reverseDeltaClass() {
        return im
    }

    constructor() {
        this.batch = null, this.operations = []
    }

    addOperation(e) {
        return e.delta = this, this.operations.push(e), e
    }

    clone() {
        const e = new this.constructor;
        for (const t of this.operations) e.addOperation(t.clone());
        return e
    }

    getReversed() {
        const e = new this._reverseDeltaClass;
        for (const t of this.operations) e.addOperation(t.getReversed());
        e.operations.reverse();
        for (let t = 0; t < e.operations.length; t++) e.operations[t].baseVersion = this.operations[this.operations.length - 1].baseVersion + t + 1;
        return e
    }

    toJSON() {
        const e = Wd(this);
        return e.__className = this.constructor.className, delete e.batch, e
    }
}

om.register(im);

class rm {
    get baseVersion() {
        return 0 < this.deltas.length ? this.deltas[0].baseVersion : null
    }

    constructor(e, t = 'default') {
        this.document = e, this.deltas = [], this.type = t
    }

    addDelta(e) {
        return e.batch = this, this.deltas.push(e), e
    }

    * getOperations() {
        for (const e of this.deltas) yield * e.operations
    }
}

class am extends im {
    static get className() {
        return 'engine.model.delta.AttributeDelta'
    }

    get type() {
        return 'attribute'
    }

    get key() {
        return this.operations[0] ? this.operations[0].key : null
    }

    get value() {
        return this.operations[0] ? this.operations[0].newValue : null
    }

    get range() {
        if (this._range) return this._range;
        let e = null, t = null;
        for (const n of this.operations) n instanceof Yc || ((null == e || e.isAfter(n.range.start)) && (e = n.range.start), (null == t || t.isBefore(n.range.end)) && (t = n.range.end));
        return e && t ? (this._range = new el(e, t), this._range) : null
    }

    get _reverseDeltaClass() {
        return am
    }

    toJSON() {
        const e = super.toJSON();
        return delete e._range, e
    }
}

class sm extends im {
    static get className() {
        return 'engine.model.delta.RootAttributeDelta'
    }
}

vt('setAttribute', function (e, t, n) {
    return xt(this, t, n, e), this
}), vt('removeAttribute', function (e, t) {
    return xt(this, t, null, e), this
}), om.register(am), om.register(sm);

class lm extends im {
    static get className() {
        return 'engine.model.delta.MoveDelta'
    }

    get type() {
        return 'move'
    }

    get howMany() {
        return this._moveOperation ? this._moveOperation.howMany : null
    }

    get sourcePosition() {
        return this._moveOperation ? this._moveOperation.sourcePosition : null
    }

    get targetPosition() {
        return this._moveOperation ? this._moveOperation.targetPosition : null
    }

    get _moveOperation() {
        return this.operations[0] || null
    }

    get _reverseDeltaClass() {
        return lm
    }
}

vt('move', function (e, t) {
    const n = new lm;
    if (this.addDelta(n), e instanceof el) {
        if (!e.isFlat) throw new _a('batch-move-range-not-flat: Range to move is not flat.');
        Tt(this, n, e.start, e.end.offset - e.start.offset, t)
    } else Tt(this, n, Zs.createBefore(e), 1, t);
    return this
}), om.register(lm);

class dm extends lm {
    static get className() {
        return 'engine.model.delta.RemoveDelta'
    }
}

vt('remove', function (e) {
    if (e instanceof el) {
        const t = e.getMinimalFlatRanges().reverse();
        for (const e of t) Pt(this, e.start, e.end.offset - e.start.offset)
    } else Pt(this, Zs.createBefore(e), 1);
    return this
}), om.register(dm);

class cm extends im {
    static get className() {
        return 'engine.model.delta.InsertDelta'
    }

    get type() {
        return 'insert'
    }

    get position() {
        return this._insertOperation ? this._insertOperation.position : null
    }

    get nodes() {
        return this._insertOperation ? this._insertOperation.nodes : null
    }

    get _insertOperation() {
        return this.operations[0] || null
    }

    get _reverseDeltaClass() {
        return dm
    }
}

vt('insert', function (e, t) {
    const n = We(t);
    if (0 === n.length) return this;
    const o = new cm, i = new Jc(e, n, this.document.version);
    if (this.addDelta(o), o.addOperation(i), this.document.applyOperation(i), t instanceof ic) for (const [n, o]of t.markers) {
        const t = Zs.createAt(o.root), i = new el(o.start._getCombined(t, e), o.end._getCombined(t, e));
        this.setMarker(n, i)
    }
    return this
}), om.register(cm);

class mm extends im {
    static get className() {
        return 'engine.model.delta.SplitDelta'
    }

    get type() {
        return 'split'
    }

    get position() {
        return this._moveOperation ? this._moveOperation.sourcePosition : null
    }

    get _cloneOperation() {
        return this.operations[0] || null
    }

    get _moveOperation() {
        return this.operations[1] && this.operations[1] instanceof $c ? this.operations[1] : null
    }

    get _reverseDeltaClass() {
        return um
    }
}

vt('split', function (e) {
    const t = new mm;
    this.addDelta(t);
    const n = e.parent;
    if (!n.parent) throw new _a('batch-split-root: Root element can not be split.');
    const o = new Gs(n.name, n.getAttributes()),
        i = new Jc(Zs.createAfter(n), o, this.document.version);
    t.addOperation(i), this.document.applyOperation(i);
    const r = new $c(e, n.maxOffset - e.offset, Zs.createFromParentAndOffset(o, 0), this.document.version);
    return r.isSticky = !0, t.addOperation(r), this.document.applyOperation(r), this
}), om.register(mm);

class um extends im {
    static get className() {
        return 'engine.model.delta.MergeDelta'
    }

    get type() {
        return 'merge'
    }

    get position() {
        return this._removeOperation ? this._removeOperation.sourcePosition : null
    }

    get _removeOperation() {
        return this.operations[1] || null
    }

    get _reverseDeltaClass() {
        return mm
    }
}

vt('merge', function (e) {
    const t = new um;
    this.addDelta(t);
    const n = e.nodeBefore, o = e.nodeAfter;
    if (!(n instanceof Gs)) throw new _a('batch-merge-no-element-before: Node before merge position must be an element.');
    if (!(o instanceof Gs)) throw new _a('batch-merge-no-element-after: Node after merge position must be an element.');
    const i = Zs.createFromParentAndOffset(o, 0), r = Zs.createFromParentAndOffset(n, n.maxOffset),
        a = new $c(i, o.maxOffset, r, this.document.version);
    a.isSticky = !0, t.addOperation(a), this.document.applyOperation(a);
    const s = this.document.graveyard, l = new Zs(s, [0]), d = new Qc(e, 1, l, this.document.version);
    return t.addOperation(d), this.document.applyOperation(d), this
}), om.register(um);

class pm extends im {
    static get className() {
        return 'engine.model.delta.RenameDelta'
    }

    get type() {
        return 'rename'
    }

    get _reverseDeltaClass() {
        return pm
    }
}

vt('rename', function (e, t) {
    if (!(e instanceof Gs)) throw new _a('batch-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');
    const n = new pm;
    this.addDelta(n);
    const o = new Xc(Zs.createBefore(e), e.name, t, this.document.version);
    return Et(this, n, o), this
}), om.register(pm);

class gm extends im {
    static get className() {
        return 'engine.model.delta.WrapDelta'
    }

    get type() {
        return 'wrap'
    }

    get range() {
        const e = this._moveOperation;
        return e ? el.createFromPositionAndShift(e.sourcePosition, e.howMany) : null
    }

    get howMany() {
        const e = this.range;
        return e ? e.end.offset - e.start.offset : 0
    }

    get _insertOperation() {
        return this.operations[0] || null
    }

    get _moveOperation() {
        return this.operations[1] || null
    }

    get _reverseDeltaClass() {
        return fm
    }
}

vt('wrap', function (e, t) {
    if (!e.isFlat) throw new _a('batch-wrap-range-not-flat: Range to wrap is not flat.');
    const n = t instanceof Gs ? t : new Gs(t);
    if (0 < n.childCount) throw new _a('batch-wrap-element-not-empty: Element to wrap with is not empty.');
    if (null !== n.parent) throw new _a('batch-wrap-element-attached: Element to wrap with is already attached to tree model.');
    const o = new gm;
    this.addDelta(o);
    const i = new Jc(e.end, n, this.document.version);
    o.addOperation(i), this.document.applyOperation(i);
    const r = Zs.createFromParentAndOffset(n, 0),
        a = new $c(e.start, e.end.offset - e.start.offset, r, this.document.version);
    return o.addOperation(a), this.document.applyOperation(a), this
}), om.register(gm);

class fm extends im {
    static get className() {
        return 'engine.model.delta.UnwrapDelta'
    }

    get type() {
        return 'unwrap'
    }

    get position() {
        return this._moveOperation ? this._moveOperation.targetPosition : null
    }

    get _moveOperation() {
        return this.operations[0] || null
    }

    get _reverseDeltaClass() {
        return gm
    }
}

vt('unwrap', function (e) {
    if (null === e.parent) throw new _a('batch-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');
    const t = new fm;
    this.addDelta(t);
    const n = Zs.createFromParentAndOffset(e, 0),
        o = new $c(n, e.maxOffset, Zs.createBefore(e), this.document.version);
    o.isSticky = !0, t.addOperation(o), this.document.applyOperation(o);
    const i = this.document.graveyard, r = new Zs(i, [0]),
        a = new Qc(Zs.createBefore(e), 1, r, this.document.version);
    return t.addOperation(a), this.document.applyOperation(a), this
}), om.register(fm);

class hm extends cm {
    static get className() {
        return 'engine.model.delta.WeakInsertDelta'
    }
}

vt('weakInsert', function (e, t) {
    const n = new hm;
    this.addDelta(n), t = We(t);
    for (const n of t) n.setAttributesTo(this.document.selection.getAttributes());
    const o = new Jc(e, t, this.document.version);
    return n.addOperation(o), this.document.applyOperation(o), this
}), om.register(hm);
var bm = function (e, t, n={isStrong: !1}) {
    let o, i;
    e instanceof Jc ? o = _m.InsertOperation : e instanceof Uc ? o = _m.AttributeOperation : e instanceof Zc ? o = _m.RootAttributeOperation : e instanceof Xc ? o = _m.RenameOperation : e instanceof Gc ? o = _m.MarkerOperation : e instanceof $c ? o = _m.MoveOperation : i = St, o && (t instanceof Jc ? i = o.InsertOperation : t instanceof Uc ? i = o.AttributeOperation : t instanceof Zc ? i = o.RootAttributeOperation : t instanceof Xc ? i = o.RenameOperation : t instanceof Gc ? i = o.MarkerOperation : t instanceof $c ? i = o.MoveOperation : i = St);
    const r = i(e, t, n);
    return Vt(e.baseVersion, r)
};
const _m = {
    InsertOperation: {
        InsertOperation(e, t, n) {
            const o = e.clone(), i = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore;
            return o.position = o.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, i), [o]
        },
        AttributeOperation: St,
        RootAttributeOperation: St,
        RenameOperation: St,
        MarkerOperation: St,
        MoveOperation(e, t, n) {
            const o = e.clone(), i = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore;
            return o.position = e.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, i, t.isSticky && !n.forceNotSticky), [o]
        }
    },
    AttributeOperation: {
        InsertOperation(e, t) {
            const n = e.range._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0, !1);
            return n.reverse().map((t) = > new Uc(t, e.key, e.oldValue, e.newValue, e.baseVersion)
        )
        }, AttributeOperation(e, t, n) {
            if (e.key === t.key) {
                const o = e.range.getDifference(t.range).map((t) = > new Uc(t, e.key, e.oldValue, e.newValue, e.baseVersion)
            ),
                i = e.range.getIntersection(t.range);
                return i && (n.isStrong ? o.push(new Uc(i, t.key, t.newValue, e.newValue, e.baseVersion)) : 0 === o.length && o.push(new Yc(0))), o
            }
            return [e.clone()]
        }, RootAttributeOperation: St, RenameOperation: St, MarkerOperation: St, MoveOperation(e, t) {
            const n = el.createFromPositionAndShift(t.sourcePosition, t.howMany);
            let o = [];
            const i = Rt(e.range.getDifference(n)), r = e.range.getIntersection(n);
            return null !== i && (i.start = i.start._getTransformedByDeletion(t.sourcePosition, t.howMany), i.end = i.end._getTransformedByDeletion(t.sourcePosition, t.howMany), o = i._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, !0, !1).reverse()), null !== r && (r.start = r.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), r.end = r.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), o.push(r)), o.map((t) = > new Uc(t, e.key, e.oldValue, e.newValue, e.baseVersion)
        )
        }
    },
    RootAttributeOperation: {
        InsertOperation: St,
        AttributeOperation: St,
        RootAttributeOperation(e, t, n) {
            return e.root !== t.root || e.key !== t.key || (e.newValue === t.newValue || n.isStrong) && e.newValue !== t.newValue ? [e.clone()] : [new Yc(e.baseVersion)]
        },
        RenameOperation: St,
        MarkerOperation: St,
        MoveOperation: St
    },
    RenameOperation: {
        InsertOperation(e, t) {
            const n = e.clone();
            return n.position = n.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0), [n]
        }, AttributeOperation: St, RootAttributeOperation: St, RenameOperation(e, t, n) {
            const o = e.clone();
            if (e.position.isEqual(t.position)) if (n.isStrong) o.oldName = t.newName; else return [new Yc(e.baseVersion)];
            return [o]
        }, MarkerOperation: St, MoveOperation(e, t) {
            const n = e.clone(), o = n.position.isEqual(t.sourcePosition);
            return n.position = n.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0, o), [n]
        }
    },
    MarkerOperation: {
        InsertOperation(e, t) {
            const n = e.clone();
            return n.oldRange && (n.oldRange = n.oldRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), n.newRange && (n.newRange = n.newRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), [n]
        },
        AttributeOperation: St,
        RootAttributeOperation: St,
        RenameOperation: St,
        MarkerOperation(e, t, n) {
            const o = e.clone();
            if (e.name == t.name) if (n.isStrong) o.oldRange = t.newRange; else return [new Yc(e.baseVersion)];
            return [o]
        },
        MoveOperation(e, t) {
            const n = e.clone();
            if (n.oldRange) {
                const e = n.oldRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
                n.oldRange = el.createFromRanges(e)
            }
            if (n.newRange) {
                const e = n.newRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
                n.newRange = el.createFromRanges(e)
            }
            return [n]
        }
    },
    MoveOperation: {
        InsertOperation(e, t, n) {
            let o = el.createFromPositionAndShift(e.sourcePosition, e.howMany);
            const i = e.isSticky && !n.forceNotSticky;
            o = o._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, i)[0];
            const r = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore,
                a = new e.constructor(o.start, o.end.offset - o.start.offset, e.targetPosition._getTransformedByInsertion(t.position, t.nodes.maxOffset, r), e.baseVersion);
            return a.isSticky = e.isSticky, [a]
        },
        AttributeOperation: St,
        RootAttributeOperation: St,
        RenameOperation: St,
        MarkerOperation: St,
        MoveOperation(e, t, n) {
            const o = el.createFromPositionAndShift(e.sourcePosition, e.howMany),
                i = el.createFromPositionAndShift(t.sourcePosition, t.howMany);
            let r = n.isStrong;
            const a = e.isSticky && !n.forceNotSticky,
                s = void 0 === n.insertBefore ? !r : n.insertBefore,
                l = e.targetPosition._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, s, t.isSticky && !n.forceNotSticky);
            if (Ot(e, t) && Ot(t, e)) return [t.getReversed()];
            const d = o.containsPosition(t.targetPosition) || o.start.isEqual(t.targetPosition) && a || o.end.isEqual(t.targetPosition) && a;
            if (d && o.containsRange(i, !0)) return o.start = o.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !a), o.end = o.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, a), Ft([o], l, e);
            const c = i.containsPosition(e.targetPosition) || i.start.isEqual(e.targetPosition) && t.isSticky && !n.forceNotSticky || i.end.isEqual(e.targetPosition) && t.isSticky && !n.forceNotSticky;
            if (c && i.containsRange(o, !0)) return o.start = o.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), o.end = o.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), Ft([o], l, e);
            const m = O(e.sourcePosition.getParentPath(), t.sourcePosition.getParentPath());
            if ('prefix' == m || 'extension' == m) return o.start = o.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !a), o.end = o.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, a), Ft([o], l, e);
            n.forceWeakRemove || (e instanceof Qc && !(t instanceof Qc) ? r = !0 : !(e instanceof Qc) && t instanceof Qc && (r = !1));
            const u = [], p = o.getDifference(i);
            for (const o of p) {
                o.start = o.start._getTransformedByDeletion(t.sourcePosition, t.howMany), o.end = o.end._getTransformedByDeletion(t.sourcePosition, t.howMany);
                const e = 'same' == O(o.start.getParentPath(), t.getMovedRangeStart().getParentPath()),
                    n = o._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, e, a);
                u.push(...n
            )
            }
            const g = o.getIntersection(i);
            return null !== g && r && !d && (g.start = g.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), g.end = g.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), 0 === u.length ? u.push(g) : 1 == u.length ? i.start.isBefore(o.start) || i.start.isEqual(o.start) ? u.unshift(g) : u.push(g) : u.splice(1, 0, g)), 0 === u.length ? [new Yc(e.baseVersion)] : Ft(u, l, e)
        }
    }
};
var ot = function (e, t, n) {
    var o = -1, i = e.length;
    0 > t && (t = -t > i ? 0 : i + t), n = n > i ? i : n, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
    for (var r = Array(i); ++o < i;) r[o] = e[o + t];
    return r
}, km = Math.ceil, wm = function (e) {
    return Es(e) || Ts(e)
}, ym = It, vm = function (e, t, n) {
    for (var o = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < o;) {
        var r = e[i];
        if (r !== r) return i
    }
    return -1
}, xm = function (e, t, n) {
    if (t !== t) return vm(e, n);
    for (var o = n - 1, i = e.length; ++o < i;) if (e[o] === t) return o;
    return -1
}, Am = function (e, t) {
    return !!e.length && -1 < xm(e, t, 0)
}, Cm = function (e, t, n) {
    for (var o = -1, i = e.length; ++o < i;) if (n(t, e[o])) return !0;
    return !1
}, Tm = function (e, t) {
    for (var n = -1, o = e.length, i = Array(o); ++n < o;) i[n] = t(e[n], n, e);
    return i
}, Pm = function (e) {
    return function (t) {
        return e(t)
    }
}, Em = function (e, t) {
    return e.has(t)
}, Sm = function (e, t, n, o) {
    var i = -1, r = Am, a = !0, s = e.length, l = [], d = t.length;
    if (!s) return l;
    n && (t = Tm(t, Pm(n))), o ? (r = Cm, a = !1) : t.length >= 200 && (r = Em, a = !1, t = new Tc(t));
    outer:for (; ++i < s;) {
        var c = e[i], m = n ? n(c) : c;
        if (c = o || 0 !== c ? c : 0, a && m === m) {
            for (var u = d; u--;) if (t[u] === m) continue outer;
            l.push(c)
        } else r(t, m, o) || l.push(c)
    }
    return l
}, Vm = ds(function (e, t) {
    return ys(e) ? Sm(e, ym(t, 1, ys, !0)) : []
}), Om = function (e, t, n, o) {
    var i = n.length, r = i, a = !o;
    if (null == e) return !r;
    for (e = Object(e); i--;) {
        var s = n[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
    }
    for (; ++i < r;) {
        s = n[i];
        var l = s[0], d = e[l], c = s[1];
        if (!(a && s[2])) {
            var m = new Pl;
            if (o) var u = o(d, c, l, e, t, m);
            if (void 0 === u ? !Hc(c, d, o, 1 | 2, m) : !u) return !1
        } else if (void 0 === d && !(l in e)) return !1
    }
    return !0
}, Rm = function (e) {
    return e === e && !La(e)
}, Fm = function (e, t) {
    return Tm(t, function (t) {
        return [t, e[t]]
    })
}, Nm = function (e) {
    var t = -1, n = Array(e.size);
    return e.forEach(function (e) {
        n[++t] = [e, e]
    }), n
}, Im = function (e) {
    return function (t) {
        var n = cd(t);
        return n == '[object Map]' ? wd(t) : n == '[object Set]' ? Nm(t) : Fm(t, e(t))
    }
}(Nl), Bm = function (e) {
    for (var t = Im(e), n = t.length; n--;) t[n][2] = Rm(t[n][1]);
    return t
}, Mm = function (e, t) {
    return function (n) {
        return null != n && n[e] === t && (t !== void 0 || e in Object(n))
    }
}, Dm = function (e) {
    var t = Bm(e);
    return 1 == t.length && t[0][2] ? Mm(t[0][0], t[0][1]) : function (n) {
        return n === e || Om(n, e, t)
    }
}, Lm = 'Expected a function';
Bt.Cache = Tl;
var jm = Ed ? Ed.prototype : void 0, zm = jm ? jm.toString : void 0, qm = function (e) {
        if ('string' == typeof e) return e;
        if (Ya(e)) return zm ? zm.call(e) : '';
        var t = e + '';
        return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
    }, Hm = function (e) {
        return null == e ? '' : qm(e)
    }, Wm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, Um = /\\(\\)?/g,
    $m = Bt(function (e) {
        var t = [];
        return Hm(e).replace(Wm, function (e, n, o, i) {
            t.push(o ? i.replace(Um, '$1') : n || e)
        }), t
    }), Km = function (e) {
        return Es(e) ? e : $m(e)
    }, Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jm = /^\w*$/, Gm = function (e, t) {
        if (Es(e)) return !1;
        var n = typeof e;
        return 'number' == n || 'symbol' == n || 'boolean' == n || null == e || Ya(e) || Jm.test(e) || !Qm.test(e) || null != t && e in Object(t)
    }, Ym = function (e) {
        if ('string' == typeof e || Ya(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
    }, Xm = function (e, t) {
        t = Gm(t, e) ? [t] : Km(t);
        for (var n = 0, o = t.length; null != e && n < o;) e = e[Ym(t[n++])];
        return n && n == o ? e : void 0
    }, Zm = function (e, t, n) {
        var o = null == e ? void 0 : Xm(e, t);
        return o === void 0 ? n : o
    }, eu = function (e, t) {
        return t in Object(e)
    }, tu = function (e, t, n) {
        t = Gm(t, e) ? [t] : Km(t);
        for (var o = -1, i = t.length, r; ++o < i;) {
            var a = Ym(t[o]);
            if (!(r = null != e && n(e, a))) break;
            e = e[a]
        }
        if (r) return r;
        var i = e ? e.length : 0;
        return !!i && Ha(i) && $a(a, i) && (Es(e) || Os(e) || Ts(e))
    }, nu = function (e, t) {
        return null != e && tu(e, t, eu)
    }, ou = function (e, t) {
        return Gm(e) && Rm(t) ? Mm(Ym(e), t) : function (n) {
            var o = Zm(n, e);
            return o === void 0 && o === t ? nu(n, e) : Hc(t, o, void 0, 1 | 2)
        }
    }, iu = function (e) {
        return e
    }, ru = function (e) {
        return function (t) {
            return Xm(t, e)
        }
    }, au = function (e) {
        return Gm(e) ? Ma(Ym(e)) : ru(e)
    }, su = function (e) {
        return 'function' == typeof e ? e : null == e ? iu : 'object' == typeof e ? Es(e) ? ou(e[0], e[1]) : Dm(e) : au(e)
    }, lu = ds(function (e, t) {
        var n = Xs(t);
        return ys(n) && (n = void 0), ys(e) ? Sm(e, ym(t, 1, ys, !0), su(n)) : []
    }), du = ds(function (e, t) {
        var n = Xs(t);
        return ys(n) && (n = void 0), ys(e) ? Sm(e, ym(t, 1, ys, !0), void 0, n) : []
    }), cu = function (e, t, n) {
        var o = e ? e.length : 0;
        return o ? (t = n || void 0 === t ? 1 : ss(t), ot(e, 0 > t ? 0 : t, o)) : []
    }, mu = function (e, t, n) {
        var o = e ? e.length : 0;
        return o ? (t = n || void 0 === t ? 1 : ss(t), t = o - t, ot(e, 0, 0 > t ? 0 : t)) : []
    }, uu = function (e, t, n, o) {
        for (var i = e.length, r = o ? i : -1; (o ? r-- : ++r < i) && t(e[r], r, e);) ;
        return n ? ot(e, o ? 0 : r, o ? r + 1 : i) : ot(e, o ? r + 1 : 0, o ? i : r)
    }, pu = function (e, t, n) {
        return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
    }, gu = function (e) {
        return e ? pu(ss(e), 0, 4294967295) : 0
    }, fu = function (e, t, n, o) {
        var i = e.length;
        for (n = ss(n), 0 > n && (n = -n > i ? 0 : i + n), o = void 0 === o || o > i ? i : ss(o), 0 > o && (o += i), o = n > o ? 0 : gu(o); n < o;) e[n++] = t;
        return e
    }, hu = function (e, t, n) {
        for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;) if (t(e[i], i, e)) return i;
        return -1
    }, bu = function (e) {
        return e && e.length ? e[0] : void 0
    }, _u = function (e, t, n) {
        for (var o = n ? Cm : Am, i = e[0].length, r = e.length, a = r, s = Array(r), l = Infinity, d = []; a--;) {
            var c = e[a];
            a && t && (c = Tm(c, Pm(t))), l = oa(c.length, l), s[a] = !n && (t || 120 <= i && 120 <= c.length) ? new Tc(a && c) : void 0
        }
        c = e[0];
        var m = -1, u = s[0];
        outer:for (; ++m < i && d.length < l;) {
            var p = c[m], g = t ? t(p) : p;
            if (p = n || 0 !== p ? p : 0, u ? !Em(u, g) : !o(d, g, n)) {
                for (a = r; --a;) {
                    var f = s[a];
                    if (f ? !Em(f, g) : !o(e[a], g, n)) continue outer
                }
                u && u.push(g), d.push(p)
            }
        }
        return d
    }, ku = function (e) {
        return ys(e) ? e : []
    }, wu = ds(function (e) {
        var t = Tm(e, ku);
        return t.length && t[0] === e[0] ? _u(t) : []
    }), yu = ds(function (e) {
        var t = Xs(e), n = Tm(e, ku);
        return t === Xs(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? _u(n, su(t)) : []
    }), vu = ds(function (e) {
        var t = Xs(e), n = Tm(e, ku);
        return t === Xs(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? _u(n, void 0, t) : []
    }), xu = Array.prototype, Au = xu.join, Cu = function (e, t) {
        var n = e.length;
        if (n) return t += 0 > t ? n : 0, $a(t, n) ? e[t] : void 0
    }, Tu = function (e, t, n, o) {
        for (var i = n - 1, r = e.length; ++i < r;) if (o(e[i], t)) return i;
        return -1
    }, Pu = Array.prototype, Eu = Pu.splice, Su = function (e, t, n, o) {
        var i = o ? Tu : xm, r = -1, a = t.length, s = e;
        for (n && (s = Tm(e, Pm(n))); ++r < a;) for (var l = 0, d = t[r], c = n ? n(d) : d; -1 < (l = i(s, c, l, o));) s !== e && Eu.call(s, l, 1), Eu.call(e, l, 1);
        return e
    }, Vu = function (e, t) {
        return e && e.length && t && t.length ? Su(e, t) : e
    }, Ou = ds(Vu), Ru = function (e, t) {
        for (var n = -1, o = t.length, i = Array(o); ++n < o;) i[n] = null == e ? void 0 : Zm(e, t[n]);
        return i
    }, Fu = function (e, t) {
        return 1 == t.length ? e : Xm(e, ot(t, 0, -1))
    }, Nu = Array.prototype, Iu = Nu.splice, Bu = function (e, t) {
        for (var n = e ? t.length : 0, o = n - 1; n--;) {
            var i = t[n];
            if (n == o || i !== r) {
                var r = i;
                if ($a(i)) Iu.call(e, i, 1); else if (!Gm(i, e)) {
                    var a = Km(i), s = Fu(e, a);
                    null != s && delete s[Ym(Xs(a))]
                } else delete e[Ym(i)]
            }
        }
        return e
    }, Mu = function (e, t) {
        if (e !== t) {
            var n = e !== void 0, o = null === e, i = e === e, r = Ya(e), a = t !== void 0, s = null === t,
                l = t === t, d = Ya(t);
            if (!s && !d && !r && e > t || r && a && l && !s && !d || o && a && l || !n && l || !i) return 1;
            if (!o && !r && !d && e < t || d && n && i && !o && !r || s && n && i || !a && i || !l) return -1
        }
        return 0
    }, Du = ds(function (e, t) {
        t = ym(t, 1);
        var n = e ? e.length : 0, o = Ru(e, t);
        return Bu(e, Tm(t, function (e) {
            return $a(e, n) ? +e : e
        }).sort(Mu)), o
    }), Lu = Array.prototype, ju = Lu.reverse, zu = function (e, t, n, o) {
        t = n(t);
        for (var i = 0, r = e ? e.length : 0, a = t !== t, s = null === t, l = Ya(t), d = void 0 === t; i < r;) {
            var c = ra((i + r) / 2), m = n(e[c]), u = m !== void 0, p = null === m, g = m === m, f = Ya(m);
            if (a) var h = o || g; else h = d ? g && (o || u) : s ? g && u && (o || !p) : l ? g && u && !p && (o || !f) : p || f ? !1 : o ? m <= t : m < t;
            h ? i = c + 1 : r = c
        }
        return oa(r, 4294967295 - 1)
    }, qu = function (e, t, n) {
        var o = 0, i = e ? e.length : o;
        if ('number' == typeof t && t === t && i <= 4294967295 >>> 1) {
            for (; o < i;) {
                var r = o + i >>> 1, a = e[r];
                null !== a && !Ya(a) && (n ? a <= t : a < t) ? o = r + 1 : i = r
            }
            return i
        }
        return zu(e, t, iu, n)
    }, Hu = function (e, t) {
        for (var n = -1, o = e.length, i = 0, r = []; ++n < o;) {
            var a = e[n], s = t ? t(a) : a;
            if (!n || !Ra(s, l)) {
                var l = s;
                r[i++] = 0 === a ? 0 : a
            }
        }
        return r
    }, Wu = Jl && 1 / Cd(new Jl([, -0]))[1] == 1 / 0 ? function (e) {
        return new Jl(e)
    } : function () {
    }, Uu = function (e, t, n) {
        var o = -1, i = Am, r = e.length, a = !0, s = [], l = s;
        if (n) a = !1, i = Cm; else if (r >= 200) {
            var d = t ? null : Wu(e);
            if (d) return Cd(d);
            a = !1, i = Em, l = new Tc
        } else l = t ? [] : s;
        outer:for (; ++o < r;) {
            var c = e[o], m = t ? t(c) : c;
            if (c = n || 0 !== c ? c : 0, a && m === m) {
                for (var u = l.length; u--;) if (l[u] === m) continue outer;
                t && l.push(m), s.push(c)
            } else i(l, m, n) || (l !== s && l.push(m), s.push(c))
        }
        return s
    }, $u = ds(function (e) {
        return Uu(ym(e, 1, ys, !0))
    }), Ku = ds(function (e) {
        var t = Xs(e);
        return ys(t) && (t = void 0), Uu(ym(e, 1, ys, !0), su(t))
    }), Qu = ds(function (e) {
        var t = Xs(e);
        return ys(t) && (t = void 0), Uu(ym(e, 1, ys, !0), void 0, t)
    }), Ju = function (e, t) {
        for (var n = -1, o = e.length, i = 0, r = []; ++n < o;) {
            var a = e[n];
            t(a, n, e) && (r[i++] = a)
        }
        return r
    }, Gu = function (e) {
        if (!(e && e.length)) return [];
        var t = 0;
        return e = Ju(e, function (e) {
            if (ys(e)) return t = ia(e.length, t), !0
        }), ws(t, function (t) {
            return Tm(e, Ma(t))
        })
    }, Yu = function (e, t) {
        if (!(e && e.length)) return [];
        var n = Gu(e);
        return null == t ? n : Tm(n, function (e) {
            return Qa(t, void 0, e)
        })
    }, Xu = ds(function (e, t) {
        return ys(e) ? Sm(e, t) : []
    }), Zu = function (e, t, n) {
        for (var o = -1, i = e.length; ++o < i;) var r = r ? zl(Sm(r, e[o], t, n), Sm(e[o], r, t, n)) : e[o];
        return r && r.length ? Uu(r, t, n) : []
    }, ep = ds(function (e) {
        return Zu(Ju(e, ys))
    }), tp = ds(function (e) {
        var t = Xs(e);
        return ys(t) && (t = void 0), Zu(Ju(e, ys), su(t))
    }), np = ds(function (e) {
        var t = Xs(e);
        return ys(t) && (t = void 0), Zu(Ju(e, ys), void 0, t)
    }), op = ds(Gu), ip = function (e, t, n) {
        for (var o = -1, i = e.length, r = t.length, a = {}; ++o < i;) {
            var s = o < r ? t[o] : void 0;
            n(a, e[o], s)
        }
        return a
    }, rp = function (e, t, n, o) {
        t = Gm(t, e) ? [t] : Km(t);
        for (var i = -1, r = t.length, a = e; null != a && ++i < r;) {
            var s = Ym(t[i]);
            if (La(a)) {
                var l = n;
                if (i != r - 1) {
                    var d = a[s];
                    l = o ? o(d, s, a) : void 0, l === void 0 && (l = null == d ? $a(t[i + 1]) ? [] : {} : d)
                }
                Ia(a, s, l)
            }
            a = a[s]
        }
        return e
    }, ap = ds(function (e) {
        var t = e.length, n = 1 < t ? e[t - 1] : void 0;
        return n = 'function' == typeof n ? (e.pop(), n) : void 0, Yu(e, n)
    }), sp = {
        chunk: function (e, t, n) {
            t = (n ? Ka(e, t, n) : void 0 === t) ? 1 : ia(ss(t), 0);
            var o = e ? e.length : 0;
            if (!o || 1 > t) return [];
            for (var i = 0, r = 0, a = Array(km(o / t)); i < o;) a[r++] = ot(e, i, i += t);
            return a
        },
        compact: function (e) {
            for (var t = -1, n = e ? e.length : 0, o = 0, i = []; ++t < n;) {
                var r = e[t];
                r && (i[o++] = r)
            }
            return i
        },
        concat: function () {
            for (var e = arguments.length, t = Array(e ? e - 1 : 0), n = arguments[0], o = e; o--;) t[o - 1] = arguments[o];
            return e ? zl(Es(n) ? Ml(n) : [n], ym(t, 1)) : []
        },
        difference: Vm,
        differenceBy: lu,
        differenceWith: du,
        drop: cu,
        dropRight: mu,
        dropRightWhile: function (e, t) {
            return e && e.length ? uu(e, su(t, 3), !0, !0) : []
        },
        dropWhile: function (e, t) {
            return e && e.length ? uu(e, su(t, 3), !0) : []
        },
        fill: function (e, t, n, o) {
            var i = e ? e.length : 0;
            return i ? (n && 'number' != typeof n && Ka(e, t, n) && (n = 0, o = i), fu(e, t, n, o)) : []
        },
        findIndex: function (e, t) {
            return e && e.length ? hu(e, su(t, 3)) : -1
        },
        findLastIndex: function (e, t) {
            return e && e.length ? hu(e, su(t, 3), !0) : -1
        },
        first: bu,
        flatten: function (e) {
            var t = e ? e.length : 0;
            return t ? ym(e, 1) : []
        },
        flattenDeep: function (e) {
            var t = e ? e.length : 0;
            return t ? ym(e, 1 / 0) : []
        },
        flattenDepth: function (e, t) {
            var n = e ? e.length : 0;
            return n ? (t = void 0 === t ? 1 : ss(t), ym(e, t)) : []
        },
        fromPairs: function (e) {
            for (var t = -1, n = e ? e.length : 0, o = {}; ++t < n;) {
                var i = e[t];
                o[i[0]] = i[1]
            }
            return o
        },
        head: bu,
        indexOf: function (e, t, n) {
            var o = e ? e.length : 0;
            return o ? (n = ss(n), 0 > n && (n = ia(o + n, 0)), xm(e, t, n)) : -1
        },
        initial: function (e) {
            return mu(e, 1)
        },
        intersection: wu,
        intersectionBy: yu,
        intersectionWith: vu,
        join: function (e, t) {
            return e ? Au.call(e, t) : ''
        },
        last: Xs,
        lastIndexOf: function (e, t, n) {
            var o = e ? e.length : 0;
            if (!o) return -1;
            var i = o;
            if (void 0 !== n && (i = ss(n), i = (0 > i ? ia(o + i, 0) : oa(i, o - 1)) + 1), t !== t) return vm(e, i, !0);
            for (; i--;) if (e[i] === t) return i;
            return -1
        },
        nth: function (e, t) {
            return e && e.length ? Cu(e, ss(t)) : void 0
        },
        pull: Ou,
        pullAll: Vu,
        pullAllBy: function (e, t, n) {
            return e && e.length && t && t.length ? Su(e, t, su(n)) : e
        },
        pullAllWith: function (e, t, n) {
            return e && e.length && t && t.length ? Su(e, t, void 0, n) : e
        },
        pullAt: Du,
        remove: function (e, t) {
            var n = [];
            if (!(e && e.length)) return n;
            var o = -1, i = [], r = e.length;
            for (t = su(t, 3); ++o < r;) {
                var a = e[o];
                t(a, o, e) && (n.push(a), i.push(o))
            }
            return Bu(e, i), n
        },
        reverse: function (e) {
            return e ? ju.call(e) : e
        },
        slice: function (e, t, n) {
            var o = e ? e.length : 0;
            return o ? (n && 'number' != typeof n && Ka(e, t, n) ? (t = 0, n = o) : (t = null == t ? 0 : ss(t), n = void 0 === n ? o : ss(n)), ot(e, t, n)) : []
        },
        sortedIndex: function (e, t) {
            return qu(e, t)
        },
        sortedIndexBy: function (e, t, n) {
            return zu(e, t, su(n))
        },
        sortedIndexOf: function (e, t) {
            var n = e ? e.length : 0;
            if (n) {
                var o = qu(e, t);
                if (o < n && Ra(e[o], t)) return o
            }
            return -1
        },
        sortedLastIndex: function (e, t) {
            return qu(e, t, !0)
        },
        sortedLastIndexBy: function (e, t, n) {
            return zu(e, t, su(n), !0)
        },
        sortedLastIndexOf: function (e, t) {
            var n = e ? e.length : 0;
            if (n) {
                var o = qu(e, t, !0) - 1;
                if (Ra(e[o], t)) return o
            }
            return -1
        },
        sortedUniq: function (e) {
            return e && e.length ? Hu(e) : []
        },
        sortedUniqBy: function (e, t) {
            return e && e.length ? Hu(e, su(t)) : []
        },
        tail: function (e) {
            return cu(e, 1)
        },
        take: function (e, t, n) {
            return e && e.length ? (t = n || void 0 === t ? 1 : ss(t), ot(e, 0, 0 > t ? 0 : t)) : []
        },
        takeRight: function (e, t, n) {
            var o = e ? e.length : 0;
            return o ? (t = n || void 0 === t ? 1 : ss(t), t = o - t, ot(e, 0 > t ? 0 : t, o)) : []
        },
        takeRightWhile: function (e, t) {
            return e && e.length ? uu(e, su(t, 3), !1, !0) : []
        },
        takeWhile: function (e, t) {
            return e && e.length ? uu(e, su(t, 3)) : []
        },
        union: $u,
        unionBy: Ku,
        unionWith: Qu,
        uniq: function (e) {
            return e && e.length ? Uu(e) : []
        },
        uniqBy: function (e, t) {
            return e && e.length ? Uu(e, su(t)) : []
        },
        uniqWith: function (e, t) {
            return e && e.length ? Uu(e, void 0, t) : []
        },
        unzip: Gu,
        unzipWith: Yu,
        without: Xu,
        xor: ep,
        xorBy: tp,
        xorWith: np,
        zip: op,
        zipObject: function (e, t) {
            return ip(e || [], t || [], Ia)
        },
        zipObjectDeep: function (e, t) {
            return ip(e || [], t || [], rp)
        },
        zipWith: ap
    };
const lp = new Map, dp = {
    transform(e, t, n) {
        const o = dp.getTransformationCase(e, t) || dp.defaultTransform,
            i = o(e, t, Object.assign({}, n)), r = sp.last(t.operations).baseVersion;
        return Mt(r, i)
    }, defaultTransform(e, t, n) {
        const o = [];
        let i = t.operations, r = [];
        for (const a of e.operations) {
            const e = [a];
            for (const t of i) for (let o = 0; o < e.length; o++) {
                const i = e[o], a = bm(i, t, n);
                Array.prototype.splice.apply(e, [o, 1].concat(a)), o += a.length - 1;
                const s = Object.assign({}, n);
                s.isStrong = !n.isStrong, s.insertBefore = n.insertBefore === void 0 ? void 0 : !n.insertBefore;
                const l = bm(t, i, s);
                Array.prototype.push.apply(r, l)
            }
            i = r, r = [];
            for (const t of e) o.push(t)
        }
        return Kt(e.constructor, o)
    }, addTransformationCase(e, t, n) {
        let o = lp.get(e);
        o || (o = new Map, lp.set(e, o)), o.set(t, n)
    }, getTransformationCase(e, t) {
        let n = lp.get(e.constructor);
        if (!n || !n.get(t.constructor)) {
            const o = lp.keys();
            for (const i of o) if (e instanceof i && lp.get(i).get(t.constructor)) {
                n = lp.get(i);
                break
            }
        }
        return n ? n.get(t.constructor) : void 0
    }, transformDeltaSets(e, t, n=null) {
        const o = Array.from(e), i = Array.from(t), r = null !== n, a = {isStrong: !0};
        if (r) {
            a.wasAffected = new Map, a.originalDelta = new Map, a.document = n, a.undoMode = !0;
            for (const e of i) a.originalDelta.set(e, e)
        }
        for (let s = 0; s < o.length; s++) {
            const e = [o[s]];
            for (let t = 0; t < i.length; t++) {
                const n = [i[t]];
                for (let t = 0; t < e.length; t++) for (let o = 0; o < n.length; o++) {
                    r && jt(e[t], n[o], a);
                    const i = dp.transform(e[t], n[o], {
                        insertBefore: a.insertBefore,
                        forceNotSticky: a.forceNotSticky,
                        isStrong: a.isStrong,
                        forceWeakRemove: a.forceWeakRemove,
                        undoMode: a.undoMode
                    }), s = dp.transform(n[o], e[t], {
                        insertBefore: !a.insertBefore,
                        forceNotSticky: a.forceNotSticky,
                        isStrong: !a.isStrong,
                        forceWeakRemove: a.forceWeakRemove,
                        undoMode: a.undoMode
                    });
                    if (r) {
                        $t(e[t], i, a);
                        const r = a.originalDelta.get(n[o]);
                        for (const e of s) a.originalDelta.set(e, r)
                    }
                    e.splice(t, 1,...i
                ),
                    t += i.length - 1, n.splice(o, 1,...s
                ),
                    o += s.length - 1
                }
                i.splice(t, 1,...n
            ),
                t += n.length - 1
            }
            o.splice(s, 1,...e
        ),
            s += e.length - 1
        }
        const s = Dt(o) - Dt(e), l = Dt(i) - Dt(t);
        return l < s ? Lt(i, s - l) : s < l && Lt(o, l - s), {deltasA: o, deltasB: i}
    }
};
var cp = dp;

class mp extends im {
    static get className() {
        return 'engine.model.delta.MarkerDelta'
    }

    get type() {
        return 'marker'
    }

    get _reverseDeltaClass() {
        return mp
    }
}

vt('setMarker', function (e, t) {
    const n = 'string' == typeof e ? e : e.name, o = this.document.markers.get(n);
    if (!t && !o) throw new _a('batch-setMarker-no-range: Range parameter is required when adding a new marker.');
    const i = o ? o.getRange() : null;
    return t ? Qt(this, n, i, t) : Qt(this, n, null, i), this
}), vt('removeMarker', function (e) {
    const t = 'string' == typeof e ? e : e.name;
    if (!this.document.markers.has(t)) throw new _a('batch-removeMarker-no-marker: Trying to remove marker which does not exist.');
    const n = this.document.markers.get(t).getRange();
    return Qt(this, t, n, null), this
}), om.register(mp);
const up = cp.addTransformationCase, pp = cp.defaultTransform;
up(am, hm, (e, t, n) = > {const o = pp(e, t, n);
return e.range.containsPosition(t.position) && o.push(Gt(t, e)), o
}),
up(am, mm, (e, t, n) = > {if(
!t.position
)
return pp(e, t, n);
const o = n.undoMode, i = new Zs(t.position.root, t.position.path.slice(0, -1)), r = pp(e, t, n);
if (o || !(t._cloneOperation instanceof Jc)) return r;
for (const o of e.operations) if (o.range.containsPosition(i) || o.range.start.isEqual(i)) {
    const e = new am, n = i.getShiftedBy(1), a = Zs.createFromPosition(n);
    a.path.push(0);
    const s = t._cloneOperation.nodes.getNode(0).getAttribute(o.key);
    e.addOperation(new Uc(new el(n, a), o.key, s === void 0 ? null : s, o.newValue, 0)), r.push(e);
    break
}
return r
}),
up(cm, um, (e, t, n) = > {if(
!t.position
)
return pp(e, t, n);
const o = n.undoMode;
return !o && e.position.isEqual(t.position) ? [t.getReversed(), e.clone()] : pp(e, t, n)
}),
up(mp, mm, Jt), up(mp, um, Jt), up(mp, gm, Jt), up(mp, fm, Jt), up(mp, lm, Jt), up(mp, pm, Jt), up(lm, um, (e, t, n) = > {const o = n.undoMode;
if (o || !t.position) return pp(e, t, n);
const i = e.sourcePosition.root == t.position.root && 'same' === O(e.sourcePosition.getParentPath(), t.position.getParentPath()),
    r = e.sourcePosition.offset <= t.position.offset && e.sourcePosition.offset + e.howMany > t.position.offset;
return i && r ? [t.getReversed(), e.clone()] : pp(e, t, n)
}),
up(um, cm, (e, t, n) = > {if(
!e.position
)
return pp(e, t, n);
const o = n.undoMode;
return !o && e.position.isEqual(t.position) ? [Yt()] : pp(e, t, n)
}),
up(um, lm, (e, t, n) = > {const o = n.undoMode;
if (o || !e.position) return pp(e, t, n);
const i = e.position.root == t.sourcePosition.root && 'same' === O(e.position.getParentPath(), t.sourcePosition.getParentPath()),
    r = t.sourcePosition.offset <= e.position.offset && t.sourcePosition.offset + t.howMany > e.position.offset;
return i && r ? [Yt()] : pp(e, t, n)
}),
up(mm, mm, (e, t, n) = > {const o = n.undoMode;
if (o) return pp(e, t, n);
if (!e.position || !t.position) return pp(e, t, n);
const i = e.position.getParentPath(), r = t.position.getParentPath();
if (e.position.root == t.position.root && 'same' == O(i, r)) if (e = e.clone(), e.position.offset < t.position.offset || e.position.offset == t.position.offset && n.isStrong) {
    e._cloneOperation instanceof Kc && t._cloneOperation instanceof Kc && e._cloneOperation.sourcePosition.offset > t._cloneOperation.sourcePosition.offset && e._cloneOperation.sourcePosition.offset--;
    const n = el.createFromPositionAndShift(e.position, e._moveOperation.howMany),
        o = el.createFromPositionAndShift(t.position, t._moveOperation.howMany), i = n.getDifference(o);
    let r = 0;
    for (const e of i) r += e.end.offset - e.start.offset;
    return 0 == r ? (e.operations.pop(), e.addOperation(new Yc(e.operations[0].baseVersion + 1))) : e.operations[1].howMany = r, [e]
} else {
    const o = Object.assign({}, n);
    return o.isStrong = !0, o.insertBefore = !0, pp(e, t, o)
}
return pp(e, t, n)
}),
up(mm, fm, (e, t, n) = > e.position ? e.position.root == t.position.root && 'same' === O(t.position.path, e.position.getParentPath()) ? [Yt()] : pp(e, t, n) : pp(e, t, n)
),
up(mm, gm, (e, t, n) = > {if(
!e.position
)
return pp(e, t, n);
const o = e.position.root == t.range.start.root,
    i = o && 'same' === O(e.position.getParentPath(), t.range.start.getParentPath()),
    r = t.range.start.offset < e.position.offset && t.range.end.offset >= e.position.offset;
if (i && r) return [Yt()];
if (o && 'same' === O(e.position.getParentPath(), t.range.end.getShiftedBy(-1).path)) {
    const n = e.clone(), o = Zs.createFromPosition(t.range.start);
    o.path.push(t.howMany - 1);
    const i = o.getShiftedBy(1);
    n._cloneOperation.position = i;
    const r = Zs.createFromPosition(o);
    r.path.push(e.position.offset), n._moveOperation.sourcePosition = r;
    const a = Zs.createFromPosition(i);
    return a.path.push(0), n._moveOperation.targetPosition = a, [n]
}
return pp(e, t, n)
}),
up(mm, am, (e, t, n) = > {if(
!e.position
)
return pp(e, t, n);
e = e.clone();
const o = n.undoMode, i = new Zs(e.position.root, e.position.path.slice(0, -1));
if (o || !(e._cloneOperation instanceof Jc)) return [e];
for (const o of t.operations) if (o.range.containsPosition(i) || o.range.start.isEqual(i)) {
    null === o.newValue ? e._cloneOperation.nodes.getNode(0).removeAttribute(o.key) : e._cloneOperation.nodes.getNode(0).setAttribute(o.key, o.newValue);
    break
}
return [e]
}),
up(fm, mm, (e, t, n) = > t.position ? e.position.root == t.position.root && 'same' === O(e.position.path, t.position.getParentPath()) ? [t.getReversed(), e.clone()] : pp(e, t, n) : pp(e, t, n)
),
up(hm, am, (e, t) = > {const n = [e.clone()];
return t.range.containsPosition(e.position) && n.push(Gt(e, t)), n
}),
up(gm, mm, (e, t, n) = > {if(
!t.position
)
return pp(e, t, n);
const o = e.range.start.root == t.position.root,
    i = o && 'same' === O(e.range.start.getParentPath(), t.position.getParentPath()),
    r = e.range.start.offset < t.position.offset && e.range.end.offset >= t.position.offset;
if (i && r) return [t.getReversed(), e.clone()];
if (o && 'same' === O(t.position.getParentPath(), e.range.end.getShiftedBy(-1).path)) {
    const t = e.clone();
    return t._insertOperation.position.offset++, t._moveOperation.howMany++, t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length - 2]++, [t]
}
return pp(e, t, n)
}),
up(pm, mm, (e, t, n) = > {const o = n.undoMode, i = pp(e, t, n);
if (o || !(t._cloneOperation instanceof Jc)) return i;
const r = t._cloneOperation.position.getShiftedBy(-1);
if (r && e.operations[0].position.isEqual(r)) {
    const t = e.clone();
    t.operations[0].position = r.getShiftedBy(1), i.push(t)
}
return i
}),
up(mm, pm, (e, t, n) = > {e = e.clone();
const o = n.undoMode;
if (o || !(e._cloneOperation instanceof Jc)) return [e];
const i = e._cloneOperation.position.getShiftedBy(-1);
if (i && !o && t.operations[0].position.isEqual(i)) {
    const n = t.clone();
    return n.operations[0].position = i.getShiftedBy(1), n.operations[0].oldName = e._cloneOperation.nodes.getNode(0).name, [e, n]
}
return [e]
}),
up(dm, mm, (e, t, n) = > {
    const o = pp(e, t, n),
    i = t._cloneOperation.position || t._cloneOperation.targetPosition;
if (!i) return pp(e, t, n);
const r = n.undoMode;
if (r) return o;
for (const r of o) if (r instanceof dm) {
    const e = r._moveOperation, t = e.sourcePosition.getShiftedBy(e.howMany);
    t.isEqual(i) && (e.howMany += 1)
}
return o
}),
up(mm, dm, (e, t, n) = > {const o = n.undoMode;
if (o) return pp(e, t, n);
const i = e._cloneOperation.position || e._cloneOperation.targetPosition;
if (!i) return pp(e, t, n);
t = t.clone();
const r = t._moveOperation, a = r.sourcePosition.getShiftedBy(r.howMany);
return a.isEqual(i) && (r.howMany += 1), pp(e, t, n)
})
;

class gp extends Gs {
    get document() {
        return this._doc
    }

    constructor(e, t, n = 'main') {
        super(t), this._doc = e, this.rootName = n
    }

    is(e, t) {
        return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
    }

    toJSON() {
        return this.rootName
    }
}

class fp {
    constructor() {
        this._deltas = [], this._historyPoints = new Map, this._undoPairs = new Map, this._undoneDeltas = new Set
    }

    addDelta(e) {
        if (0 < e.operations.length && !this._historyPoints.has(e.baseVersion)) {
            const t = this._deltas.length;
            this._deltas[t] = e, this._historyPoints.set(e.baseVersion, t)
        }
    }

    * getDeltas(e = 0, t = na) {
        if (0 !== this._deltas.length) {
            let n = this._getIndex(e);
            if (-1 != n) for (; n < this._deltas.length;) {
                const e = this._deltas[n++];
                if (e.baseVersion >= t) break;
                yield e
            }
        }
    }

    getDelta(e) {
        const t = this._historyPoints.get(e);
        return t === void 0 ? null : this._deltas[t]
    }

    setDeltaAsUndone(e, t) {
        this._undoPairs.set(t, e), this._undoneDeltas.add(e)
    }

    isUndoingDelta(e) {
        return this._undoPairs.has(e)
    }

    isUndoneDelta(e) {
        return this._undoneDeltas.has(e)
    }

    getUndoneDelta(e) {
        return this._undoPairs.get(e)
    }

    _getIndex(e) {
        const t = this._historyPoints.get(e);
        if (t === void 0) {
            const t = this._deltas[this._deltas.length - 1], n = t.baseVersion + t.operations.length;
            if (0 > e || e >= n) return -1;
            throw new _a('model-history-wrong-version: Given base version points to the middle of a delta.')
        }
        return t
    }
}

class hp extends el {
    constructor(e, t) {
        super(e, t), Xt.call(this)
    }

    detach() {
        this.stopListening()
    }
}

a(hp, Oa);

class bp {
    get anchor() {
        if (0 < this._ranges.length) {
            const e = this._ranges[this._ranges.length - 1];
            return this._lastRangeBackward ? e.end : e.start
        }
        return null
    }

    get focus() {
        if (0 < this._ranges.length) {
            const e = this._ranges[this._ranges.length - 1];
            return this._lastRangeBackward ? e.start : e.end
        }
        return null
    }

    get isCollapsed() {
        const e = this._ranges.length;
        return !(1 !== e) && this._ranges[0].isCollapsed
    }

    get rangeCount() {
        return this._ranges.length
    }

    get isBackward() {
        return !this.isCollapsed && this._lastRangeBackward
    }

    static createFromSelection(e) {
        const t = new this;
        return t.setTo(e), t
    }

    constructor(e, t) {
        this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, e && this.setRanges(e, t)
    }

    isEqual(e) {
        if (this.rangeCount != e.rangeCount) return !1;
        if (0 === this.rangeCount) return !0;
        if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
        for (const t of this._ranges) {
            let n = !1;
            for (const o of e._ranges) if (t.isEqual(o)) {
                n = !0;
                break
            }
            if (!n) return !1
        }
        return !0
    }

    * getRanges() {
        for (const e of this._ranges) yield el.createFromRange(e)
    }

    getFirstRange() {
        let e = null;
        for (const t of this._ranges) (!e || t.start.isBefore(e.start)) && (e = t);
        return e ? el.createFromRange(e) : null
    }

    getLastRange() {
        let e = null;
        for (const t of this._ranges) (!e || t.end.isAfter(e.end)) && (e = t);
        return e ? el.createFromRange(e) : null
    }

    getFirstPosition() {
        const e = this.getFirstRange();
        return e ? Zs.createFromPosition(e.start) : null
    }

    getLastPosition() {
        const e = this.getLastRange();
        return e ? Zs.createFromPosition(e.end) : null
    }

    addRange(e, t = !1) {
        this._pushRange(e), this._lastRangeBackward = !!t, this.fire('change:range', {directChange: !0})
    }

    removeAllRanges() {
        0 < this._ranges.length && (this._removeAllRanges(), this.fire('change:range', {directChange: !0}))
    }

    setRanges(e, t = !1) {
        e = Array.from(e);
        const n = e.some((e) = > {if(
        !(e instanceof el)
    )
        throw new _a('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
        return this._ranges.every((t) = > !t.isEqual(e)
    )
    })
        ;
        if (e.length !== this._ranges.length || n) {
            this._removeAllRanges();
            for (const t of e) this._pushRange(t);
            this._lastRangeBackward = !!t, this.fire('change:range', {directChange: !0})
        }
    }

    setTo(e) {
        e instanceof bp ? this.setRanges(e.getRanges(), e.isBackward) : e instanceof el ? this.setRanges([e]) : E(e) ? this.setRanges(e) : this.setRanges([new el(e)])
    }

    setIn(e) {
        this.setRanges([el.createIn(e)])
    }

    setOn(e) {
        this.setRanges([el.createOn(e)])
    }

    setCollapsedAt(e, t) {
        const n = Zs.createAt(e, t), o = new el(n, n);
        this.setRanges([o])
    }

    collapseToStart() {
        const e = this.getFirstPosition();
        null !== e && this.setRanges([new el(e, e)])
    }

    collapseToEnd() {
        const e = this.getLastPosition();
        null !== e && this.setRanges([new el(e, e)])
    }

    moveFocusTo(e, t) {
        if (null === this.anchor) throw new _a('model-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');
        const n = Zs.createAt(e, t);
        if ('same' != n.compareWith(this.focus)) {
            const e = this.anchor;
            this._ranges.length && this._popRange(), 'before' == n.compareWith(e) ? this.addRange(new el(n, e), !0) : this.addRange(new el(e, n))
        }
    }

    getAttribute(e) {
        return this._attrs.get(e)
    }

    getAttributes() {
        return this._attrs.entries()
    }

    getAttributeKeys() {
        return this._attrs.keys()
    }

    hasAttribute(e) {
        return this._attrs.has(e)
    }

    clearAttributes() {
        if (0 < this._attrs.size) {
            const e = Array.from(this._attrs.keys());
            this._attrs.clear(), this.fire('change:attribute', {attributeKeys: e, directChange: !0})
        }
    }

    removeAttribute(e) {
        this.hasAttribute(e) && (this._attrs.delete(e), this.fire('change:attribute', {
            attributeKeys: [e],
            directChange: !0
        }))
    }

    setAttribute(e, t) {
        this.getAttribute(e) !== t && (this._attrs.set(e, t), this.fire('change:attribute', {
            attributeKeys: [e],
            directChange: !0
        }))
    }

    setAttributesTo(e) {
        if (e = P(e), !en(e, this._attrs)) {
            const t = new Set(Array.from(e.keys()).concat(Array.from(this._attrs.keys())));
            for (const [n, o]of e) this._attrs.get(n) === o && t.delete(n);
            this._attrs = e, this.fire('change:attribute', {
                attributeKeys: Array.from(t),
                directChange: !0
            })
        }
    }

    getSelectedElement() {
        if (1 !== this.rangeCount) return null;
        const e = this.getFirstRange(), t = e.start.nodeAfter, n = e.end.nodeBefore;
        return t instanceof Gs && t == n ? t : null
    }

    * getSelectedBlocks() {
        const e = new WeakSet;
        for (const t of this.getRanges()) {
            const n = nn(t.start, e);
            n && (yield n);
            for (const n of t.getWalker()) 'elementEnd' == n.type && tn(n.item, e) && (yield n.item);
            const o = nn(t.end, e);
            o && !t.end.isTouching(Zs.createAt(o)) && (yield o)
        }
    }

    containsEntireContent(e = this.anchor.root) {
        const t = Zs.createAt(e), n = Zs.createAt(e, 'end');
        return t.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition())
    }

    _pushRange(e) {
        if (!(e instanceof el)) throw new _a('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
        this._checkRange(e), this._ranges.push(el.createFromRange(e))
    }

    _checkRange(e) {
        for (let t = 0; t < this._ranges.length; t++) if (e.isIntersecting(this._ranges[t])) throw new _a('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
            addedRange: e,
            intersectingRange: this._ranges[t]
        })
    }

    _popRange() {
        this._ranges.pop()
    }

    _removeAllRanges() {
        for (; 0 < this._ranges.length;) this._popRange()
    }
}

a(bp, Oa);
const _p = 'selection:',
    kp = new Set(['addAttribute', 'removeAttribute', 'changeAttribute', 'addRootAttribute', 'removeRootAttribute', 'changeRootAttribute']);

class wp extends bp {
    get isCollapsed() {
        const e = this._ranges.length;
        return 0 === e ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
    }

    get anchor() {
        return super.anchor || this._document._getDefaultRange().start
    }

    get focus() {
        return super.focus || this._document._getDefaultRange().end
    }

    get rangeCount() {
        return this._ranges.length ? this._ranges.length : 1
    }

    get hasOwnRange() {
        return 0 < this._ranges.length
    }

    static createFromSelection() {
        throw new _a('documentselection-cannot-create: Cannot create a new DocumentSelection instance.')
    }

    static _getStoreAttributeKey(e) {
        return _p + e
    }


    static _isStoreAttributeKey(e) {
        return e.startsWith(_p)
    }

    constructor(e) {
        super(), this._document = e, this._attributePriority = new Map, this.listenTo(this._document, 'change', (e, t, n, o) = > {kp.has(t) && this._updateAttributes(!1), rn(n, o, this._document)
    })
    }

    destroy() {
        for (let e = 0; e < this._ranges.length; e++) this._ranges[e].detach();
        this.stopListening()
    }

    * getRanges() {
        this._ranges.length ? yield * super.getRanges() : yield this._document._getDefaultRange()
    }


    getFirstRange() {
        return super.getFirstRange() || this._document._getDefaultRange()
    }

    getLastRange() {
        return super.getLastRange() || this._document._getDefaultRange()
    }

    addRange(e, t = !1) {
        super.addRange(e, t), this.refreshAttributes()
    }

    removeAllRanges() {
        super.removeAllRanges(), this.refreshAttributes()
    }


    setRanges(e, t = !1) {
        super.setRanges(e, t), this.refreshAttributes()
    }

    setAttribute(e, t) {
        if (this.isCollapsed && this.anchor.parent.isEmpty && this._storeAttribute(e, t), this._setAttribute(e, t)) {
            this.fire('change:attribute', {attributeKeys: [e], directChange: !0})
        }
    }

    removeAttribute(e) {
        if (this.isCollapsed && this.anchor.parent.isEmpty && this._removeStoredAttribute(e), this._removeAttribute(e)) {
            this.fire('change:attribute', {attributeKeys: [e], directChange: !0})
        }
    }

    setAttributesTo(e) {
        e = P(e), this.isCollapsed && this.anchor.parent.isEmpty && this._setStoredAttributesTo(e);
        const t = this._setAttributesTo(e);
        if (0 < t.size) {
            const e = Array.from(t);
            this.fire('change:attribute', {attributeKeys: e, directChange: !0})
        }
    }

    clearAttributes() {
        this.setAttributesTo([])
    }

    refreshAttributes() {
        this._updateAttributes(!0)
    }


    _popRange() {
        this._ranges.pop().detach()
    }

    _pushRange(e) {
        const t = this._prepareRange(e);
        t && this._ranges.push(t)
    }

    _prepareRange(e) {
        if (!(e instanceof el)) throw new _a('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
        if (e.root == this._document.graveyard) return void wa.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');
        this._checkRange(e);
        const t = hp.createFromRange(e);
        return this.listenTo(t, 'change:range', (e, n, o) = > {t.root == this._document.graveyard && this._fixGraveyardSelection(t, o.sourcePosition), this.fire('change:range', {directChange: !1})
    }),
        t
    }

    _updateAttributes(e) {
        const t = P(this._getSurroundingAttributes()), n = P(this.getAttributes());
        if (e) this._attributePriority = new Map, this._attrs = new Map; else for (const [e, t]of this._attributePriority) 'low' == t && (this._attrs.delete(e), this._attributePriority.delete(e));
        this._setAttributesTo(t, !1);
        const o = [];
        for (const [t, i]of this.getAttributes()) n.has(t) && n.get(t) === i || o.push(t);
        for (const [t]of n) this.hasAttribute(t) || o.push(t);
        0 < o.length && this.fire('change:attribute', {attributeKeys: o, directChange: !1})
    }

    _setAttribute(e, t, n = !0) {
        const o = n ? 'normal' : 'low';
        if ('low' == o && 'normal' == this._attributePriority.get(e)) return !1;
        const i = super.getAttribute(e);
        return i !== t && (this._attrs.set(e, t), this._attributePriority.set(e, o), !0)
    }

    _removeAttribute(e, t = !0) {
        const n = t ? 'normal' : 'low';
        return 'low' == n && 'normal' == this._attributePriority.get(e) ? !1 : !!super.hasAttribute(e) && (this._attrs.delete(e), this._attributePriority.set(e, n), !0)
    }

    _setAttributesTo(e, t = !0) {
        const n = new Set;
        for (const [o, i]of this.getAttributes()) e.get(o) !== i && this._removeAttribute(o, t) && n.add(o);
        for (const [o, i]of e) {
            const e = this._setAttribute(o, i, t);
            e && n.add(o)
        }
        return n
    }

    * _getStoredAttributes() {
        const e = this.getFirstPosition().parent;
        if (this.isCollapsed && e.isEmpty) for (const t of e.getAttributeKeys()) if (t.startsWith(_p)) {
            const n = t.substr(_p.length);
            yield[n, e.getAttribute(t)]
        }
    }

    _removeStoredAttribute(e) {
        const t = wp._getStoreAttributeKey(e);
        this._document.batch().removeAttribute(this.anchor.parent, t)
    }

    _storeAttribute(e, t) {
        const n = wp._getStoreAttributeKey(e);
        this._document.batch().setAttribute(this.anchor.parent, n, t)
    }

    _setStoredAttributesTo(e) {
        const t = this.anchor.parent, n = this._document.batch();
        for (const [o]of this._getStoredAttributes()) {
            const e = wp._getStoreAttributeKey(o);
            n.removeAttribute(t, e)
        }
        for (const [o, i]of e) {
            const e = wp._getStoreAttributeKey(o);
            n.setAttribute(t, e, i)
        }
    }

    _getSurroundingAttributes() {
        const e = this.getFirstPosition(), t = this._document.schema;
        let n = null;
        if (!this.isCollapsed) {
            const e = this.getFirstRange();
            for (const o of e) {
                if (o.item.is('element') && t.objects.has(o.item.name)) break;
                'text' == o.type && null == n && (n = o.item.getAttributes())
            }
        } else {
            const t = e.textNode ? e.textNode : e.nodeBefore, o = e.textNode ? e.textNode : e.nodeAfter;
            if (n = on(t), n || (n = on(o)), !n) for (let e = t; e && !n;) e = e.previousSibling, n = on(e);
            if (!n) for (let e = o; e && !n;) e = e.nextSibling, n = on(e);
            n || (n = this._getStoredAttributes())
        }
        return n
    }

    _fixGraveyardSelection(e, t) {
        const n = Zs.createFromPosition(t), o = this._document.getNearestSelectionRange(n),
            i = this._ranges.indexOf(e);
        if (this._ranges.splice(i, 1), e.detach(), o) {
            const e = this._prepareRange(o);
            this._ranges.splice(i, 0, e)
        }
        this.fire('change:range', {directChange: !1})
    }
}

class yp {
    static _normalizeQueryPath(e) {
        let t = [];
        if (Es(e)) for (const n of e) n instanceof Gs ? t.push(n.name) : Os(n) && t.push(n); else if (e instanceof Zs) {
            for (let n = e.parent; null !== n;) t.push(n.name), n = n.parent;
            t.reverse()
        } else Os(e) && (t = e.split(' '));
        return t
    }

    constructor() {
        this.objects = new Set, this.limits = new Set, this._items = new Map, this._extensionChains = new Map, this.registerItem('$root'), this.registerItem('$block'), this.registerItem('$inline'), this.registerItem('$text', '$inline'), this.allow({
            name: '$block',
            inside: '$root'
        }), this.allow({
            name: '$inline',
            inside: '$block'
        }), this.limits.add('$root'), this.registerItem('$clipboardHolder', '$root'), this.allow({
            name: '$inline',
            inside: '$clipboardHolder'
        })
    }

    allow(e) {
        this._getItem(e.name).allow(yp._normalizeQueryPath(e.inside), e.attributes)
    }

    disallow(e) {
        this._getItem(e.name).disallow(yp._normalizeQueryPath(e.inside), e.attributes)
    }

    requireAttributes(e, t) {
        this._getItem(e).requireAttributes(t)
    }

    check(e) {
        if (!this.hasItem(e.name)) return !1;
        Es(e.attributes) ? 0 === e.attributes.length && e.attributes.push(void 0) : e.attributes = [e.attributes];
        const t = yp._normalizeQueryPath(e.inside),
            n = this._extensionChains.get(e.name).map((e) = > this._getItem(e)
    )
        ;
        if (!this._getItem(e.name)._checkRequiredAttributes(e.attributes)) return !1;
        for (const o of e.attributes) for (const e of n) if (e._hasMatchingPath('disallow', t, o)) return !1;
        for (const o of e.attributes) {
            if (o && wp._isStoreAttributeKey(o)) continue;
            let e = !1;
            for (const i of n) if (i._hasMatchingPath('allow', t, o)) {
                e = !0;
                break
            }
            if (!e) return !1
        }
        return !0
    }

    hasItem(e) {
        return this._items.has(e)
    }

    registerItem(e, t) {
        if (this.hasItem(e)) throw new _a('model-schema-item-exists: Item with specified name already exists in schema.');
        if (!!t && !this.hasItem(t)) throw new _a('model-schema-no-item: Item with specified name does not exist in schema.');
        this._items.set(e, new vp(this));
        const n = this.hasItem(t) ? this._extensionChains.get(t).concat(e) : [e];
        this._extensionChains.set(e, n)
    }

    itemExtends(e, t) {
        if (!this.hasItem(e) || !this.hasItem(t)) throw new _a('model-schema-no-item: Item with specified name does not exist in schema.');
        const n = this._extensionChains.get(e);
        return n.some((e) = > e == t
    )
    }

    checkAttributeInSelection(e, t) {
        if (e.isCollapsed) return this.check({
            name: '$text',
            inside: e.getFirstPosition(),
            attributes: t
        }); else {
            const n = e.getRanges();
            for (const e of n) for (const n of e) {
                const e = n.item.name || '$text', o = Array.from(n.item.getAttributeKeys()).concat(t);
                if (this.check({name: e, inside: n.previousPosition, attributes: o})) return !0
            }
        }
        return !1
    }

    getValidRanges(e, t) {
        const n = [];
        for (const o of e) {
            let e = o.start, i = o.start;
            const r = o.end;
            for (const r of o.getWalker()) {
                const o = r.item.name || '$text', a = Zs.createBefore(r.item);
                this.check({
                    name: o,
                    inside: a,
                    attributes: t
                }) || (!i.isEqual(e) && n.push(new el(i, e)), i = r.nextPosition), e = r.nextPosition
            }
            i && !i.isEqual(r) && n.push(new el(i, r))
        }
        return n
    }

    getLimitElement(e) {
        let t = Array.from(e.getRanges()).reduce((e, t) = > e ? e.getCommonAncestor(t.getCommonAncestor()) : t.getCommonAncestor(), null
    )
        ;
        for (; !this.limits.has(t.name) && t.parent;) t = t.parent;
        return t
    }

    removeDisallowedAttributes(e, t, n) {
        for (const o of e) {
            const e = o.is('text') ? '$text' : o.name, i = Array.from(o.getAttributeKeys()),
                r = yp._normalizeQueryPath(t);
            if (!this.check({
                    name: e,
                    attributes: i,
                    inside: r
                })) for (const t of o.getAttributeKeys()) this.check({
                name: e,
                attributes: t,
                inside: r
            }) || (n ? n.removeAttribute(o, t) : o.removeAttribute(t));
            o.is('element') && this.removeDisallowedAttributes(o.getChildren(), r.concat(o.name), n)
        }
    }

    _getItem(e) {
        if (!this.hasItem(e)) throw new _a('model-schema-no-item: Item with specified name does not exist in schema.');
        return this._items.get(e)
    }
}

class vp {
    constructor(e) {
        this._schema = e, this._allowed = [], this._disallowed = [], this._requiredAttributes = []
    }

    allow(e, t) {
        this._addPath('_allowed', e, t)
    }

    disallow(e, t) {
        this._addPath('_disallowed', e, t)
    }

    requireAttributes(e) {
        this._requiredAttributes.push(e)
    }

    toJSON() {
        const e = Wd(this);
        return e._schema = '[model.Schema]', e
    }

    _addPath(e, t, n) {
        t = t.slice(), Es(n) || (n = [n]);
        for (const o of n) this[e].push({path: t, attribute: o})
    }

    _getPaths(e, t) {
        const n = 'allow' === e ? this._allowed : this._disallowed, o = [];
        for (const i of n) i.attribute === t && o.push(i.path);
        return o
    }

    _checkRequiredAttributes(e) {
        let t = !0;
        for (const n of this._requiredAttributes) {
            t = !0;
            for (const o of n) if (-1 == e.indexOf(o)) {
                t = !1;
                break
            }
            if (t) break
        }
        return t
    }

    _hasMatchingPath(e, t, n) {
        const o = this._getPaths(e, n);
        for (const i of o) if (an(this._schema, t, i)) return !0;
        return !1
    }
}

class xp {
    constructor() {
        this._markers = new Map
    }

    [Symbol.iterator]() {
        return this._markers.values()
    }

    has(e) {
        return this._markers.has(e)
    }

    get(e) {
        return this._markers.get(e) || null
    }

    set(e, t) {
        const n = e instanceof Ap ? e.name : e, o = this._markers.get(n);
        if (o) {
            const e = o.getRange();
            if (e.isEqual(t)) return o;
            this.remove(n)
        }
        const i = hp.createFromRange(t), r = new Ap(n, i);
        return this._markers.set(n, r), this.fire('add:' + n, r), r
    }

    remove(e) {
        const t = e instanceof Ap ? e.name : e, n = this._markers.get(t);
        return !!n && (this._markers.delete(t), this.fire('remove:' + t, n), this._destroyMarker(n), !0)
    }

    * getMarkersAtPosition(e) {
        for (const t of this) t.getRange().containsPosition(e) && (yield t)
    }

    destroy() {
        for (const e of this._markers.values()) this._destroyMarker(e);
        this._markers = null, this.stopListening()
    }

    * getMarkersGroup(e) {
        for (const t of this._markers.values()) t.name.startsWith(e + ':') && (yield t)
    }

    _destroyMarker(e) {
        e.stopListening(), e._liveRange.detach(), e._liveRange = null
    }
}

a(xp, Oa);

class Ap {
    constructor(e, t) {
        this.name = e, this._liveRange = t, this._liveRange.delegate('change:range').to(this), this._liveRange.delegate('change:content').to(this)
    }

    getStart() {
        if (!this._liveRange) throw new _a('marker-destroyed: Cannot use a destroyed marker instance.');
        return Zs.createFromPosition(this._liveRange.start)
    }

    getEnd() {
        if (!this._liveRange) throw new _a('marker-destroyed: Cannot use a destroyed marker instance.');
        return Zs.createFromPosition(this._liveRange.end)
    }

    getRange() {
        if (!this._liveRange) throw new _a('marker-destroyed: Cannot use a destroyed marker instance.');
        return el.createFromRange(this._liveRange)
    }
}

a(Ap, Oa);
const Cp = '$graveyard';

class Tp {
    get graveyard() {
        return this.getRoot(Cp)
    }

    constructor() {
        this.version = 0, this.schema = new yp, this.history = new fp(this), this.markers = new xp, this.selection = new wp(this), this._pendingChanges = [], this.roots = new Map, this.selection.on('change:range', () = > {
            for(
            const e
            of this.selection.getRanges()
    )
        if (!this._validateSelectionRange(e)) throw new _a('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.', {range: e})
    }),
        this.createRoot('$root', Cp)
    }

    applyOperation(e) {
        if (e.baseVersion !== this.version) throw new _a('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.', {operation: e});
        const t = e._execute();
        this.version++, this.history.addDelta(e.delta), this.fire('change', e.type, t, e.delta.batch, e.delta.type)
    }

    batch(e) {
        return new rm(this, e)
    }

    createRoot(e = '$root', t = 'main') {
        if (this.roots.has(t)) throw new _a('model-document-createRoot-name-exists: Root with specified name already exists.', {name: t});
        const n = new gp(this, e, t);
        return this.roots.set(t, n), n
    }

    destroy() {
        this.selection.destroy(), this.stopListening()
    }

    enqueueChanges(e) {
        if (this._pendingChanges.push(e), 1 == this._pendingChanges.length) {
            for (; this._pendingChanges.length;) this._pendingChanges[0](), this._pendingChanges.shift();
            this.fire('changesDone')
        }
    }

    getRoot(e = 'main') {
        if (!this.roots.has(e)) throw new _a('model-document-getRoot-root-not-exist: Root with specified name does not exist.', {name: e});
        return this.roots.get(e)
    }

    hasRoot(e) {
        return this.roots.has(e)
    }

    getRootNames() {
        return Array.from(this.roots.keys()).filter((e) = > e != Cp
    )
    }

    getNearestSelectionRange(e, t = 'both') {
        if (this.schema.check({name: '$text', inside: e})) return new el(e);
        let n, o;
        ('both' == t || 'backward' == t) && (n = new Ys({
            startPosition: e,
            direction: 'backward'
        })), ('both' == t || 'forward' == t) && (o = new Ys({startPosition: e}));
        for (const i of ln(n, o)) {
            const e = i.walker == n ? 'elementEnd' : 'elementStart', t = i.value;
            if (t.type == e && this.schema.objects.has(t.item.name)) return el.createOn(t.item);
            if (this.schema.check({
                    name: '$text',
                    inside: t.nextPosition
                })) return new el(t.nextPosition)
        }
        return null
    }

    transformDeltas(e, t, n = !1) {
        return cp.transformDeltaSets(e, t, n ? this : null)
    }

    toJSON() {
        const e = Wd(this);
        return e.selection = '[engine.model.DocumentSelection]', e
    }

    _getDefaultRoot() {
        for (const e of this.roots.values()) if (e !== this.graveyard) return e;
        return this.graveyard
    }

    _getDefaultRange() {
        const e = this._getDefaultRoot(), t = new Zs(e, [0]), n = this.getNearestSelectionRange(t);
        return n || new el(t)
    }

    _validateSelectionRange(e) {
        return sn(e.start) && sn(e.end)
    }
}

a(Tp, Oa);

class Pp {
    ethiscommandse
...

    constructor(e) {
        const t = this.constructor.build && this.constructor.build.plugins;
        this.config = new ha(e, this.constructor.build && this.constructor.build.config), this.config.define('plugins', t), this.plugins = new ya(this, t), this.commands = new va, this.locale = new Aa(this.config.get('lang')), this.t = this.locale.t, this.document = new Tp, this.data = new Ac(this.document), this.set('isReadOnly', !1)
    }

) {
    initPlugins() {
        function e(e, t) {
            return e.reduce((e, n) = > n[t] ? e.then(n[t].bind(n)) : e, Promise.resolve()
        )
        }

        const t = this, n = this.config;
        return function () {
            const e = n.get('plugins') || [], o = n.get('removePlugins') || [];
            return t.plugins.load(e, o)
        }().then((t) = > e(t, 'init').then(() = > e(t, 'afterInit')
    )).
        then(() = > this.fire('pluginsReady')
    )
    }

.

    destroy() {
        return this.fire('destroy'), this.stopListening(), this.commands.destroy(), this.plugins.destroy().then(() = > {this.document.destroy(), this.data.destroy()
    })
    }

.

    execute(

...

    execute()
}

static
create(e)
{
    return new Promise((t) = > {const n = new this(e);
    t(n.initPlugins().then(() = > {n.fire('dataReady'), n.fire('ready')
}).
    then(() = > n
))
})
}
}
a(Pp, Us);
const Ep = js({}, Oa, {listenTo(...e)
{
    const t = e[0];
    dn(t) && (e[0] = this._getProxyEmitter(t) || new Vp(t)), Oa.listenTo.apply(this, e)
}
,
stopListening(...e
)
{
    const t = e[0];
    if (dn(t)) {
        const n = this._getProxyEmitter(t);
        if (!n) return;
        e[0] = n
    }
    Oa.stopListening.apply(this, e)
}
,
_getProxyEmitter(e)
{
    return l(this, cn(e))
}
})
;var Sp = Ep;

class Vp {
    constructor(e) {
        d(this, cn(e)), this._domNode = e
    }
}

js(Vp.prototype, Oa, {
    on(e, t, n={}) {
        if (Oa.on.call(this, e, t, n), !(this._domListeners && this._domListeners[e])) {
            const t = this._createDomListener(e, !!n.useCapture);
            this._domNode.addEventListener(e, t, !!n.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[e] = t
        }
    }, off(e, t) {
        Oa.off.call(this, e, t);
        let n;
        !this._domListeners[e] || (n = this._events[e]) && n.callbacks.length || this._domListeners[e].removeListener()
    }, _createDomListener(e, t) {
        const n = (t) =
    >
        {
            this.fire(e, t)
        }
        ;
        return n.removeListener = () =
    >
        {
            this._domNode.removeEventListener(e, n, t), delete this._domListeners[e]
        }
    ,
        n
    }
});

class Op {
    constructor() {
        this._listener = Object.create(Sp)
    }

    listenTo(e) {
        this._listener.listenTo(e, 'keydown', (e, t) = > {this._listener.fire('_keydown:' + ee(t), t)
    })
    }

    set(e, t, n = {}) {
        const o = te(e), i = n.priority;
        this._listener.listenTo(this._listener, '_keydown:' + o, (e, n) = > {t(n,() =
    >
        {
            n.preventDefault(), n.stopPropagation(), e.stop()
        }
    ),
        e.return = !0
    },
        {
            priority:i
        }
    )
    }

    press(e) {
        return !!this._listener.fire('_keydown:' + ee(e), e)
    }

    destroy() {
        this._listener.stopListening()
    }
}

class Rp extends Op {
    constructor(e) {
        super(), this.editor = e
    }

    set(e, t, n = {}) {
        if ('string' == typeof t) {
            const e = t;
            t = (t, n) =
        >
            {
                this.editor.execute(e), n()
            }
        }
        super.set(e, t, n)
    }
}

class Fp {

    get isFake() {
        return this._isFake
    }

    get fakeSelectionLabel() {
        return this._fakeSelectionLabel
    }

    get anchor() {
        if (!this._ranges.length) return null;
        const e = this._ranges[this._ranges.length - 1], t = this._lastRangeBackward ? e.end : e.start;
        return ec.createFromPosition(t)
    }

    get focus() {
        if (!this._ranges.length) return null;
        const e = this._ranges[this._ranges.length - 1], t = this._lastRangeBackward ? e.start : e.end;
        return ec.createFromPosition(t)
    }

    get isCollapsed() {
        return 1 === this.rangeCount && this._ranges[0].isCollapsed
    }

    get rangeCount() {
        return this._ranges.length
    }

    get isBackward() {
        return !this.isCollapsed && this._lastRangeBackward
    }

    get editableElement() {
        return this.anchor ? this.anchor.editableElement : null
    }

    static createFromSelection(e) {
        const t = new Fp;
        return t.setTo(e), t
    }

    constructor(e, t) {
        this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = '', e && this.setRanges(e, t)
    }

    setFake(e = !0, t = {}) {
        this._isFake = e, this._fakeSelectionLabel = e ? t.label || '' : '', this.fire('change')
    }

    addRange(e, t) {
        if (!(e instanceof tc)) throw new _a('view-selection-invalid-range: Invalid Range.');
        this._pushRange(e), this._lastRangeBackward = !!t, this.fire('change')
    }

    * getRanges() {
        for (const e of this._ranges) yield tc.createFromRange(e)
    }

    getFirstRange() {
        let e = null;
        for (const t of this._ranges) (!e || t.start.isBefore(e.start)) && (e = t);
        return e ? tc.createFromRange(e) : null
    }

    getLastRange() {
        let e = null;
        for (const t of this._ranges) (!e || t.end.isAfter(e.end)) && (e = t);
        return e ? tc.createFromRange(e) : null
    }

    getFirstPosition() {
        const e = this.getFirstRange();
        return e ? ec.createFromPosition(e.start) : null
    }

    getLastPosition() {
        const e = this.getLastRange();
        return e ? ec.createFromPosition(e.end) : null
    }

    isEqual(e) {
        if (this.isFake != e.isFake) return !1;
        if (this.isFake && this.fakeSelectionLabel != e.fakeSelectionLabel) return !1;
        if (this.rangeCount != e.rangeCount) return !1;
        if (0 === this.rangeCount) return !0;
        if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
        for (const t of this._ranges) {
            let n = !1;
            for (const o of e._ranges) if (t.isEqual(o)) {
                n = !0;
                break
            }
            if (!n) return !1
        }
        return !0
    }

    isSimilar(e) {
        if (this.isBackward != e.isBackward) return !1;
        const t = mn(this.getRanges()), n = mn(e.getRanges());
        if (t != n) return !1;
        if (0 == t) return !0;
        for (let t of this.getRanges()) {
            t = t.getTrimmed();
            let n = !1;
            for (let o of e.getRanges()) if (o = o.getTrimmed(), t.start.isEqual(o.start) && t.end.isEqual(o.end)) {
                n = !0;
                break
            }
            if (!n) return !1
        }
        return !0
    }

    removeAllRanges() {
        this._ranges.length && (this._ranges = [], this.fire('change'))
    }

    setRanges(e, t) {
        this._ranges = [];
        for (const n of e) {
            if (!(n instanceof tc)) throw new _a('view-selection-invalid-range: Invalid Range.');
            this._pushRange(n)
        }
        this._lastRangeBackward = !!t, this.fire('change')
    }

    setTo(e) {
        e instanceof Fp ? (this._isFake = e._isFake, this._fakeSelectionLabel = e._fakeSelectionLabel, this.setRanges(e.getRanges(), e.isBackward)) : e instanceof tc ? this.setRanges([e]) : E(e) ? this.setRanges(e) : this.setRanges([new tc(e)])
    }

    setIn(e) {
        this.setRanges([tc.createIn(e)])
    }

    setOn(e) {
        this.setRanges([tc.createOn(e)])
    }

    setCollapsedAt(e, t) {
        const n = ec.createAt(e, t), o = new tc(n, n);
        this.setRanges([o])
    }

    collapseToStart() {
        const e = this.getFirstPosition();
        null !== e && this.setRanges([new tc(e, e)])
    }

    collapseToEnd() {
        const e = this.getLastPosition();
        null !== e && this.setRanges([new tc(e, e)])
    }

    moveFocusTo(e, t) {
        if (null === this.anchor) throw new _a('view-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');
        const n = ec.createAt(e, t);
        if ('same' != n.compareWith(this.focus)) {
            const e = this.anchor;
            this._ranges.pop(), 'before' == n.compareWith(e) ? this.addRange(new tc(n, e), !0) : this.addRange(new tc(e, n))
        }
    }

    getSelectedElement() {
        if (1 !== this.rangeCount) return null;
        const e = this.getFirstRange(), t = e.start.nodeAfter, n = e.end.nodeBefore;
        return t instanceof Qd && t == n ? t : null
    }

    _pushRange(e) {
        for (const t of this._ranges) if (e.isIntersecting(t)) throw new _a('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
            addedRange: e,
            intersectingRange: t
        });
        this._ranges.push(tc.createFromRange(e))
    }
}

a(Fp, Oa);
const Np = (e) =
>
{
    const t = e.createElement('br');
    return t.dataset.ckeFiller = !0, t
}
,
Ip = (e) =
>
e.createTextNode('\xA0'), Bp = 7;
let Mp = '';
for (let o = 0; o < Bp; o++) Mp += '\u200B';
const Dp = new WeakMap;

class Lp {
    constructor(e, t) {
        this.domDocuments = new Set, this.domConverter = e, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = t, this._inlineFiller = null, this.isFocused = !1, this._fakeSelectionContainer = null
    }

    markToSync(e, t) {
        if ('text' === e) this.domConverter.mapViewToDom(t.parent) && this.markedTexts.add(t); else {
            if (!this.domConverter.mapViewToDom(t)) return;
            if ('attributes' === e) this.markedAttributes.add(t); else if ('children' === e) this.markedChildren.add(t); else throw new _a('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')
        }
    }

    render() {
        let e;
        this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? e = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (e = this.selection.getFirstPosition(), this.markedChildren.add(e.parent));
        for (const t of this.markedTexts) !this.markedChildren.has(t.parent) && this.domConverter.mapViewToDom(t.parent) && this._updateText(t, {inlineFillerPosition: e});
        for (const e of this.markedAttributes) this._updateAttrs(e);
        for (const t of this.markedChildren) this._updateChildren(t, {inlineFillerPosition: e});
        if (e) {
            const t = this.domConverter.viewPositionToDom(e), n = t.parent.ownerDocument;
            this._inlineFiller = un(t.parent) ? t.parent : this._addInlineFiller(n, t.parent, t.offset)
        } else this._inlineFiller = null;
        this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
    }

    _addInlineFiller(e, t, n) {
        const o = t instanceof Array ? t : t.childNodes, i = o[n];
        if (this.domConverter.isText(i)) return i.data = Mp + i.data, i; else {
            const i = e.createTextNode(Mp);
            return Array.isArray(t) ? o.splice(n, 0, i) : kn(t, n, i), i
        }
    }

    _getInlineFillerPosition() {
        const e = this.selection.getFirstPosition();
        return e.parent.is('text') ? ec.createBefore(this.selection.getFirstPosition().parent) : e
    }

    _isSelectionInInlineFiller() {
        if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
        const e = this.selection.getFirstPosition(), t = this.domConverter.viewPositionToDom(e);
        return t && this.domConverter.isText(t.parent) && un(t.parent)
    }

    _removeInlineFiller() {
        const e = this._inlineFiller;
        if (!un(e)) throw new _a('view-renderer-filler-was-lost: The inline filler node was lost.');
        pn(e) ? e.parentNode.removeChild(e) : e.data = e.data.substr(Bp), this._inlineFiller = null
    }

    _needsInlineFillerAtSelection() {
        if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
        const e = this.selection.getFirstPosition(), t = e.parent, n = e.offset;
        if (!this.domConverter.mapViewToDom(t.root)) return !1;
        if (!t.is('element')) return !1;
        if (!yn(t)) return !1;
        if (n === t.getFillerOffset()) return !1;
        const o = e.nodeBefore, i = e.nodeAfter;
        return o instanceof $d || i instanceof $d ? !1 : !0
    }

    _updateText(e, t) {
        const n = this.domConverter.findCorrespondingDomText(e),
            o = this.domConverter.viewToDom(e, n.ownerDocument), i = n.data;
        let r = o.data;
        const a = t.inlineFillerPosition;
        a && a.parent == e.parent && a.offset == e.index && (r = Mp + r), i != r && (n.data = r)
    }

    _updateAttrs(e) {
        const t = this.domConverter.mapViewToDom(e), n = Array.from(t.attributes).map((e) = > e.name
    ),
        o = e.getAttributeKeys();
        for (const n of o) t.setAttribute(n, e.getAttribute(n));
        for (const o of n) e.hasAttribute(o) || t.removeAttribute(o)
    }

    _updateChildren(e, t) {
        function n(e, t) {
            if (e === t) return !0;
            return o.isText(e) && o.isText(t) ? e.data === t.data : fn(e, o.blockFiller) && fn(t, o.blockFiller)
        }

        const o = this.domConverter, r = o.mapViewToDom(e);
        if (r) {
            const a = r.ownerDocument, s = t.inlineFillerPosition, l = r.childNodes,
                d = Array.from(o.viewChildrenToDom(e, a, {bind: !0}));
            s && s.parent == e && this._addInlineFiller(a, d, s.offset);
            const c = _n(l, d, n);
            let m = 0;
            const i = new Set;
            for (const e of c) 'insert' === e ? (kn(r, m, d[m]), m++) : 'delete' === e ? (i.add(l[m]), wn(l[m])) : m++;
            for (const e of i) e.parentNode || this.domConverter.unbindDomElement(e)
        }
    }

    _updateSelection() {
        if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
        const e = this.domConverter.mapViewToDom(this.selection.editableElement);
        this.isFocused && e && (this.selection.isFake ? this._updateFakeSelection(e) : (this._removeFakeSelection(), this._updateDomSelection(e)))
    }

    _updateFakeSelection(e) {
        const t = e.ownerDocument;
        this._fakeSelectionContainer || (this._fakeSelectionContainer = t.createElement('div'), this._fakeSelectionContainer.style.position = 'fixed', this._fakeSelectionContainer.style.top = 0, this._fakeSelectionContainer.style.left = '-9999px', this._fakeSelectionContainer.appendChild(t.createTextNode('\xA0'))), this._fakeSelectionContainer.parentElement || e.appendChild(this._fakeSelectionContainer);
        const n = this.selection.fakeSelectionLabel || '\xA0';
        this._fakeSelectionContainer.firstChild.data = n;
        const o = t.getSelection();
        o.removeAllRanges();
        const i = t.createRange();
        i.selectNodeContents(this._fakeSelectionContainer), o.addRange(i), this.domConverter.bindFakeSelection(this._fakeSelectionContainer, this.selection)
    }

    _updateDomSelection(e) {
        const t = e.ownerDocument.defaultView.getSelection();
        if (this._domSelectionNeedsUpdate(t)) {
            const e = this.domConverter.viewPositionToDom(this.selection.anchor),
                n = this.domConverter.viewPositionToDom(this.selection.focus);
            t.collapse(e.parent, e.offset), t.extend(n.parent, n.offset)
        }
    }

    _domSelectionNeedsUpdate(e) {
        if (!this.domConverter.isDomSelectionCorrect(e)) return !0;
        const t = e && this.domConverter.domSelectionToView(e);
        return t && this.selection.isEqual(t) ? !1 : !this.selection.isCollapsed && this.selection.isSimilar(t) ? !1 : !0
    }

    _removeDomSelection() {
        for (const e of this.domDocuments) {
            const t = e.getSelection();
            if (t.rangeCount) {
                const t = e.activeElement, n = this.domConverter.mapDomToView(t);
                t && n && e.getSelection().removeAllRanges()
            }
        }
    }

    _removeFakeSelection() {
        const e = this._fakeSelectionContainer;
        e && e.remove()
    }

    _updateFocus() {
        if (this.isFocused) {
            const e = this.selection.editableElement;
            e && this.domConverter.focus(e)
        }
    }
}

a(Lp, Us);
var jp = {window, document};

class zp {
    constructor(e = {}) {
        this.blockFiller = e.blockFiller || Np, this.preElements = ['pre'], this.blockElements = ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
    }

    bindFakeSelection(e, t) {
        this._fakeSelectionMapping.set(e, Fp.createFromSelection(t))
    }

    fakeSelectionToView(e) {
        return this._fakeSelectionMapping.get(e)
    }

    bindElements(e, t) {
        this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
    }

    unbindDomElement(e) {
        const t = this._domToViewMapping.get(e);
        if (t) {
            this._domToViewMapping.delete(e), this._viewToDomMapping.delete(t);
            for (const t of Array.from(e.childNodes)) this.unbindDomElement(t)
        }
    }

    bindDocumentFragments(e, t) {
        this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
    }

    viewToDom(e, t, n = {}) {
        if (e.is('text')) {
            const n = this._processDataFromViewText(e);
            return t.createTextNode(n)
        } else {
            if (this.mapViewToDom(e)) return this.mapViewToDom(e);
            let o;
            if (e.is('documentFragment')) o = t.createDocumentFragment(), n.bind && this.bindDocumentFragments(o, e); else {
                if (e.is('uiElement')) return o = e.render(t), n.bind && this.bindElements(o, e), o;
                o = t.createElement(e.name), n.bind && this.bindElements(o, e);
                for (const t of e.getAttributeKeys()) o.setAttribute(t, e.getAttribute(t))
            }
            if (n.withChildren || void 0 === n.withChildren) for (const i of this.viewChildrenToDom(e, t, n)) o.appendChild(i);
            return o
        }
    }

    * viewChildrenToDom(e, t, n = {}) {
        const o = e.getFillerOffset && e.getFillerOffset();
        let i = 0;
        for (const r of e.getChildren()) o === i && (yield this.blockFiller(t)), yield this.viewToDom(r, t, n), i++;
        o === i && (yield this.blockFiller(t))
    }

    viewRangeToDom(e) {
        const t = this.viewPositionToDom(e.start), n = this.viewPositionToDom(e.end),
            o = document.createRange();
        return o.setStart(t.parent, t.offset), o.setEnd(n.parent, n.offset), o
    }

    viewPositionToDom(e) {
        const t = e.parent;
        if (t.is('text')) {
            const n = this.findCorrespondingDomText(t);
            if (!n) return null;
            let o = e.offset;
            return un(n) && (o += Bp), {parent: n, offset: o}
        } else {
            let n, o, i;
            if (0 === e.offset) {
                if (n = this.mapViewToDom(t), !n) return null;
                i = n.childNodes[0]
            } else {
                const t = e.nodeBefore;
                if (o = t.is('text') ? this.findCorrespondingDomText(t) : this.mapViewToDom(e.nodeBefore), !o) return null;
                n = o.parentNode, i = o.nextSibling
            }
            if (this.isText(i) && un(i)) return {parent: i, offset: Bp};
            const r = o ? vn(o) + 1 : 0;
            return {parent: n, offset: r}
        }
    }

    domToView(e, t = {}) {
        if (fn(e, this.blockFiller)) return null;
        const n = this.getParentUIElement(e, this._domToViewMapping);
        if (n) return n;
        if (this.isText(e)) {
            if (pn(e)) return null; else {
                const t = this._processDataFromDomText(e);
                return '' === t ? null : new $d(t)
            }
        } else if (this.isComment(e)) return null; else {
            if (this.mapDomToView(e)) return this.mapDomToView(e);
            let n;
            if (this.isDocumentFragment(e)) n = new gc, t.bind && this.bindDocumentFragments(e, n); else {
                const o = t.keepOriginalCase ? e.tagName : e.tagName.toLowerCase();
                n = new Qd(o), t.bind && this.bindElements(e, n);
                const r = e.attributes;
                for (let e = r.length - 1; 0 <= e; e--) n.setAttribute(r[e].name, r[e].value)
            }
            if (t.withChildren || void 0 === t.withChildren) for (const o of this.domChildrenToView(e, t)) n.appendChildren(o);
            return n
        }
    }

    * domChildrenToView(e, t = {}) {
        for (let n = 0; n < e.childNodes.length; n++) {
            const o = e.childNodes[n], i = this.domToView(o, t);
            null !== i && (yield i)
        }
    }

    domSelectionToView(e) {
        if (1 === e.rangeCount) {
            let t = e.getRangeAt(0).startContainer;
            this.isText(t) && (t = t.parentNode);
            const n = this.fakeSelectionToView(t);
            if (n) return n
        }
        const t = new Fp, n = this.isDomSelectionBackward(e);
        for (let o = 0; o < e.rangeCount; o++) {
            const i = e.getRangeAt(o), r = this.domRangeToView(i);
            r && t.addRange(r, n)
        }
        return t
    }

    domRangeToView(e) {
        const t = this.domPositionToView(e.startContainer, e.startOffset),
            n = this.domPositionToView(e.endContainer, e.endOffset);
        return t && n ? new tc(t, n) : null
    }

    domPositionToView(e, t) {
        if (fn(e, this.blockFiller)) return this.domPositionToView(e.parentNode, vn(e));
        const n = this.mapDomToView(e);
        if (n && n.is('uiElement')) return ec.createBefore(n);
        if (this.isText(e)) {
            if (pn(e)) return this.domPositionToView(e.parentNode, vn(e));
            const n = this.findCorrespondingViewText(e);
            let o = t;
            return n ? (un(e) && (o -= Bp, o = 0 > o ? 0 : o), new ec(n, o)) : null
        }
        if (0 === t) {
            const t = this.mapDomToView(e);
            if (t) return new ec(t, 0)
        } else {
            const n = e.childNodes[t - 1],
                o = this.isText(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n);
            if (o && o.parent) return new ec(o.parent, o.index + 1)
        }
        return null
    }

    mapDomToView(e) {
        return this.getParentUIElement(e) || this._domToViewMapping.get(e)
    }

    findCorrespondingViewText(e) {
        if (pn(e)) return null;
        const t = this.getParentUIElement(e);
        if (t) return t;
        const n = e.previousSibling;
        if (n) {
            if (!this.isElement(n)) return null;
            const e = this.mapDomToView(n);
            if (e) {
                const t = e.nextSibling;
                return t instanceof $d ? e.nextSibling : null
            }
        } else {
            const t = this.mapDomToView(e.parentNode);
            if (t) {
                const e = t.getChild(0);
                return e instanceof $d ? e : null
            }
        }
        return null
    }

    mapViewToDom(e) {
        return this._viewToDomMapping.get(e)
    }

    findCorrespondingDomText(e) {
        const t = e.previousSibling;
        return t && this.mapViewToDom(t) ? this.mapViewToDom(t).nextSibling : !t && e.parent && this.mapViewToDom(e.parent) ? this.mapViewToDom(e.parent).childNodes[0] : null
    }

    focus(e) {
        const t = this.mapViewToDom(e);
        if (t && t.ownerDocument.activeElement !== t) {
            const {scrollX: e, scrollY: n} = jp.window, o = [];
            Tn(t, (e) = > {const{scrollLeft: t, scrollTop: n} = e;
            o.push([t, n])
        }),
            t.focus(), Tn(t, (e) = > {const[t, n] = o.shift();
            e.scrollLeft = t, e.scrollTop = n
        }),
            jp.window.scrollTo(e, n)
        }
    }

    isText(e) {
        return e && e.nodeType == Node.TEXT_NODE
    }

    isElement(e) {
        return e && e.nodeType == Node.ELEMENT_NODE
    }

    isDocumentFragment(e) {
        return e && e.nodeType == Node.DOCUMENT_FRAGMENT_NODE
    }

    isComment(e) {
        return e && e.nodeType == Node.COMMENT_NODE
    }

    isDomSelectionBackward(e) {
        if (e.isCollapsed) return !1;
        const t = document.createRange();
        t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
        const n = t.collapsed;
        return t.detach(), n
    }

    getParentUIElement(e) {
        const t = xn(e);
        for (t.pop(); t.length;) {
            const e = t.pop(), n = this._domToViewMapping.get(e);
            if (n && n.is('uiElement')) return n
        }
        return null
    }

    isDomSelectionCorrect(e) {
        return this._isDomSelectionPositionCorrect(e.anchorNode, e.anchorOffset) && this._isDomSelectionPositionCorrect(e.focusNode, e.focusOffset)
    }

    _isDomSelectionPositionCorrect(e, t) {
        if (this.isText(e) && un(e) && t < Bp) return !1;
        if (this.isElement(e) && un(e.childNodes[t])) return !1;
        const n = this.mapDomToView(e);
        return n && n.is('uiElement') ? !1 : !0
    }

    _processDataFromViewText(e) {
        let t = e.data;
        if (e.getAncestors().some((e) = > this.preElements.includes(e.name)))
        return t;
        if (' ' == t.charAt(0)) {
            const n = this._getTouchingViewTextNode(e, !1), o = n && this._nodeEndsWithSpace(n);
            (o || !n) && (t = '\xA0' + t.substr(1))
        }
        if (' ' == t.charAt(t.length - 1)) {
            const n = this._getTouchingViewTextNode(e, !0);
            n || (t = t.substr(0, t.length - 1) + '\xA0')
        }
        return t.replace(/ {2}/g, ' \xA0')
    }

    _nodeEndsWithSpace(e) {
        if (e.getAncestors().some((e) = > this.preElements.includes(e.name)))
        return !1;
        const t = this._processDataFromViewText(e);
        return ' ' == t.charAt(t.length - 1)
    }

    _processDataFromDomText(e) {
        let t = gn(e);
        if (Cn(e, this.preElements)) return t;
        t = t.replace(/[ \n\t\r]{1,}/g, ' ');
        const n = this._getTouchingDomTextNode(e, !1), o = this._getTouchingDomTextNode(e, !0);
        return (!n || /[^\S\u00A0]/.test(n.data.charAt(n.data.length - 1))) && (t = t.replace(/^ /, '')), o || (t = t.replace(/ $/, '')), t = t.replace(/ \u00A0/g, '  '), (!n || /[^\S\u00A0]/.test(n.data.charAt(n.data.length - 1))) && (t = t.replace(/^\u00A0/, ' ')), o && '\xA0' != o.data.charAt(0) || (t = t.replace(/\u00A0( *)$/, ' $1')), t
    }

    _getTouchingViewTextNode(e, t) {
        const n = new Gd({
            startPosition: t ? ec.createAfter(e) : ec.createBefore(e),
            direction: t ? 'forward' : 'backward'
        });
        for (const o of n) {
            if (o.item.is('containerElement')) return null;
            if (o.item.is('text')) return o.item
        }
        return null
    }

    _getTouchingDomTextNode(e, t) {
        if (!e.parentNode) return null;
        const n = t ? 'nextNode' : 'previousNode', o = e.ownerDocument,
            i = o.createTreeWalker(o.childNodes[0], NodeFilter.SHOW_TEXT);
        i.currentNode = e;
        const r = i[n]();
        if (null !== r) {
            const t = An(e, r);
            if (t && !Cn(e, this.blockElements, t) && !Cn(r, this.blockElements, t)) return r
        }
        return null
    }
}

const qp = Symbol('rootName');

class Hp extends Zd {

    get rootName() {
        return this.getCustomProperty(qp)
    }

    set rootName(e) {
        this.setCustomProperty(qp, e)
    }

    constructor(e) {
        super(e), this.rootName = 'main'
    }

    is(e, t = null) {
        return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
    }
}

class Wp {
    constructor(e) {
        this.document = e, this.isEnabled = !1
    }

    enable() {
        this.isEnabled = !0
    }

    disable() {
        this.isEnabled = !1
    }

    destroy() {
        this.disable(), this.stopListening()
    }
}

a(Wp, Sp);
var Up = function (e, t, n) {
    n = 'function' == typeof n ? n : void 0;
    var o = n ? n(e, t) : void 0;
    return o === void 0 ? Hc(e, t, n) : !!o
};

class $p extends Wp {
    constructor(e) {
        super(e), this._config = {
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0,
            subtree: !0
        }, this.domConverter = e.domConverter, this.renderer = e.renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
    }

    flush() {
        this._onMutations(this._mutationObserver.takeRecords())
    }

    observe(e) {
        this._domElements.push(e), this.isEnabled && this._mutationObserver.observe(e, this._config)
    }

    enable() {
        super.enable();
        for (const e of this._domElements) this._mutationObserver.observe(e, this._config)
    }

    disable() {
        super.disable(), this._mutationObserver.disconnect()
    }

    destroy() {
        super.destroy(), this._mutationObserver.disconnect()
    }

    _onMutations(e) {
        function t(e, t) {
            if (!Array.isArray(e)) return e === t || e.is('text') && t.is('text') && e.data === t.data
        }

        if (0 === e.length) return;
        const n = this.domConverter, o = new Map, i = new Set;
        for (const t of e) if ('childList' === t.type) {
            const e = n.mapDomToView(t.target);
            if (e && e.is('uiElement')) continue;
            e && !this._isBogusBrMutation(t) && i.add(e)
        }
        for (const t of e) {
            const e = n.mapDomToView(t.target);
            if (!(e && e.is('uiElement')) && 'characterData' === t.type) {
                const e = n.findCorrespondingViewText(t.target);
                e && !i.has(e.parent) ? o.set(e, {
                    type: 'text',
                    oldText: e.data,
                    newText: gn(t.target),
                    node: e
                }) : !e && un(t.target) && i.add(n.mapDomToView(t.target.parentNode))
            }
        }
        const r = [];
        for (const t of o.values()) this.renderer.markToSync('text', t.node), r.push(t);
        for (const o of i) {
            const e = n.mapViewToDom(o), i = Array.from(o.getChildren()),
                a = Array.from(n.domChildrenToView(e));
            Up(i, a, t) || (this.renderer.markToSync('children', o), r.push({
                type: 'children',
                oldChildren: i,
                newChildren: a,
                node: o
            }))
        }
        const a = e[0].target.ownerDocument.getSelection();
        let s = null;
        if (a && a.anchorNode) {
            const e = n.domPositionToView(a.anchorNode, a.anchorOffset),
                t = n.domPositionToView(a.focusNode, a.focusOffset);
            e && t && (s = new Fp, s.setCollapsedAt(e), s.moveFocusTo(t))
        }
        this.document.fire('mutations', r, s), this.document.render()
    }

    _isBogusBrMutation(e) {
        let t = null;
        return null === e.nextSibling && 0 === e.removedNodes.length && 1 == e.addedNodes.length && (t = this.domConverter.domToView(e.addedNodes[0], {withChildren: !1})), t && t.is('element', 'br')
    }
}

var Kp = Date.now, Qp = Kp, Jp = function (e, t, n) {
    function o(t) {
        var n = f, o = h;
        return f = h = void 0, m = t, _ = e.apply(o, n), _
    }

    function i(e) {
        return m = e, k = setTimeout(s, t), u ? o(e) : _
    }

    function r(e) {
        var n = e - c, o = e - m, i = t - n;
        return p ? oa(i, b - o) : i
    }

    function a(e) {
        var n = e - c, o = e - m;
        return !c || n >= t || 0 > n || p && o >= b
    }

    function s() {
        var e = Qp();
        return a(e) ? l(e) : void(k = setTimeout(s, r(e)))
    }

    function l(e) {
        return (clearTimeout(k), k = void 0, g && f) ? o(e) : (f = h = void 0, _)
    }

    function d() {
        var e = Qp(), n = a(e);
        if (f = arguments, h = this, c = e, n) {
            if (void 0 === k) return i(c);
            if (p) return clearTimeout(k), k = setTimeout(s, t), o(c)
        }
        return void 0 === k && (k = setTimeout(s, t)), _
    }

    var c = 0, m = 0, u = !1, p = !1, g = !0, f, h, b, _, k;
    if ('function' != typeof e) throw new TypeError('Expected a function');
    return t = is(t) || 0, La(n) && (u = !!n.leading, p = 'maxWait' in n, b = p ? ia(is(n.maxWait) || 0, t) : b, g = 'trailing' in n ? !!n.trailing : g), d.cancel = function () {
        void 0 !== k && clearTimeout(k), c = m = 0, f = h = k = void 0
    }, d.flush = function () {
        return void 0 === k ? _ : l(Qp())
    }, d
};

class Gp extends Wp {
    constructor(e) {
        super(e), this.mutationObserver = e.getObserver($p), this.document = e, this.selection = e.selection, this.domConverter = e.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = Jp((e) = > this.document.fire('selectionChangeDone', e), 200
    ),
        this._clearInfiniteLoopInterval = setInterval(() = > this._clearInfiniteLoop(), 1e3
    ),
        this._loopbackCounter = 0
    }

    observe(e) {
        const t = e.ownerDocument;
        this._documents.has(t) || (this.listenTo(t, 'selectionchange', () = > {this._handleSelectionChange(t)
    }),
        this._documents.add(t)
    )
    }

    destroy() {
        super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
    }

    _handleSelectionChange(e) {
        if (this.isEnabled && (this.document.isFocused || this.document.isReadOnly)) {
            this.mutationObserver.flush();
            const t = e.defaultView.getSelection(), n = this.domConverter.domSelectionToView(t);
            if (!(this.selection.isEqual(n) && this.domConverter.isDomSelectionCorrect(t))) {
                if (60 < ++this._loopbackCounter) return void wa.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');
                if (this.selection.isSimilar(n)) this.document.render(); else {
                    const e = {oldSelection: this.selection, newSelection: n, domSelection: t};
                    this.document.fire('selectionChange', e), this._fireSelectionChangeDoneDebounced(e)
                }
            }
        }
    }

    _clearInfiniteLoop() {
        this._loopbackCounter = 0
    }
}

class Yp {
    get target() {
        return this.document.domConverter.mapDomToView(this.domTarget)
    }

    constructor(e, t, n) {
        this.document = e, this.domEvent = t, this.domTarget = t.target, js(this, n)
    }

    preventDefault() {
        this.domEvent.preventDefault()
    }

    stopPropagation() {
        this.domEvent.stopPropagation()
    }
}

class Xp extends Wp {
    constructor(e) {
        super(e), this.useCapture = !1
    }

    observe(e) {
        const t = 'string' == typeof this.domEventType ? [this.domEventType] : this.domEventType;
        t.forEach((t) = > {this.listenTo(e, t, (e, t) = > {this.isEnabled && this.onDomEvent(t)
    },
        {
            useCapture:this.useCapture
        }
    )
    })
    }

    fire(e, t, n) {
        this.isEnabled && this.document.fire(e, new Yp(this.document, t, n))
    }
}

class Zp extends Xp {
    constructor(e) {
        super(e), this.domEventType = ['focus', 'blur'], this.useCapture = !0, e.on('focus', () = > {e.isFocused = !0, this._renderTimeoutId = setTimeout(() = > e.render(), 0
    )
    }),
        e.on('blur', (t, n) = > {const o = e.selection.editableElement;
        (null === o || o === n.target) && (e.isFocused = !1, e.render())
    })
    }

    onDomEvent(e) {
        this.fire(e.type, e)
    }

    destroy() {
        this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
    }
}

class eg extends Xp {
    constructor(e) {
        super(e), this.domEventType = ['keydown', 'keyup']
    }

    onDomEvent(e) {
        this.fire(e.type, e, {
            keyCode: e.keyCode,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey || e.metaKey,
            shiftKey: e.shiftKey,
            get keystroke() {
                return ee(this)
            }
        })
    }
}

class tg extends Wp {
    constructor(e) {
        super(e), this._fireSelectionChangeDoneDebounced = Jp((e) = > this.document.fire('selectionChangeDone', e), 200
    )
    }

    observe() {
        const e = this.document;
        e.on('keydown', (t, n) = > {const o = e.selection;
        o.isFake && Pn(n.keyCode) && this.isEnabled && (n.preventDefault(), this._handleSelectionMove(n.keyCode))
    },
        {
            priority:'lowest'
        }
    )
    }

    destroy() {
        super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
    }

    _handleSelectionMove(e) {
        const t = this.document.selection, n = Fp.createFromSelection(t);
        n.setFake(!1), (e == uc.arrowleft || e == uc.arrowup) && n.collapseToStart(), (e == uc.arrowright || e == uc.arrowdown) && n.collapseToEnd();
        const o = {oldSelection: t, newSelection: n, domSelection: null};
        this.document.fire('selectionChange', o), this._fireSelectionChangeDoneDebounced(o)
    }
}

var ng = function (e) {
    return !!e && 1 === e.nodeType && da(e) && !fa(e)
};

class og {
    static getDomRangeRects(e) {
        const t = [], n = Array.from(e.getClientRects());
        if (n.length) for (const e of n) t.push(new og(e)); else {
            const n = new og(e.startContainer.getBoundingClientRect());
            n.right = n.left, n.width = 0, t.push(n)
        }
        return t
    }

    constructor(e) {
        const t = En(e);
        if (Object.defineProperty(this, '_source', {
                value: e._source || e,
                writable: !0,
                enumerable: !1
            }), ng(e) || t) {
            const n = t ? e.startContainer : e;
            n.ownerDocument && n.ownerDocument.body.contains(n) || wa.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.', {source: e}), t ? On(this, og.getDomRangeRects(e)[0]) : On(this, e.getBoundingClientRect())
        } else if (Sn(e)) {
            const {innerWidth: t, innerHeight: n} = e;
            On(this, {top: 0, right: t, bottom: n, left: 0, width: t, height: n})
        } else On(this, e)
    }

    clone() {
        return new og(this)
    }

    moveTo(e, t) {
        return this.top = t, this.right = e + this.width, this.bottom = t + this.height, this.left = e, this
    }

    moveBy(e, t) {
        return this.top += t, this.right += e, this.left += e, this.bottom += t, this
    }

    getIntersection(e) {
        const t = {
            top: ia(this.top, e.top),
            right: oa(this.right, e.right),
            bottom: oa(this.bottom, e.bottom),
            left: ia(this.left, e.left)
        };
        return t.width = t.right - t.left, t.height = t.bottom - t.top, 0 > t.width || 0 > t.height ? null : new og(t)
    }

    getIntersectionArea(e) {
        const t = this.getIntersection(e);
        return t ? t.getArea() : 0
    }

    getArea() {
        return this.width * this.height
    }

    getVisible() {
        const e = this._source;
        let t = this.clone();
        if (!Rn(e)) for (let n = e.parentNode || e.commonAncestorContainer; n && !Rn(n);) {
            const e = new og(n), o = t.getIntersection(e);
            if (o) o.getArea() < t.getArea() && (t = o); else return null;
            n = n.parentNode
        }
        return t
    }

    isEqual(e) {
        for (const t of ig) if (this[t] !== e[t]) return !1;
        return !0
    }

    contains(e) {
        const t = this.getIntersection(e);
        return !!(t && t.isEqual(e))
    }

    excludeScrollbarsAndBorders() {
        const e = this._source;
        let t, n;
        if (Sn(e)) t = e.innerWidth - e.document.documentElement.clientWidth, n = e.innerHeight - e.document.documentElement.clientHeight; else {
            const o = Vn(this._source);
            t = e.offsetWidth - e.clientWidth, n = e.offsetHeight - e.clientHeight, this.moveBy(o.left, o.top)
        }
        return this.width -= t, this.right -= t, this.height -= n, this.bottom -= n, this
    }
}

const ig = ['top', 'right', 'bottom', 'left', 'width', 'height'];
Object.assign({}, {
    scrollViewportToShowTarget: Fn, scrollAncestorsToShowTarget: function (e) {
        const t = zn(e);
        In(t, () = > new og(e)
    )
    }
});

class rg {
    constructor() {
        this.domRoots = new Map, this.selection = new Fp, this.domConverter = new zp, this.roots = new Map, this.set('isReadOnly', !1), this.set('isFocused', !1), this.renderer = new Lp(this.domConverter, this.selection), this.renderer.bind('isFocused').to(this), this._observers = new Map, this.addObserver($p), this.addObserver(Gp), this.addObserver(Zp), this.addObserver(eg), this.addObserver(tg), hn(this), ie(this), this.decorate('render')
    }

    addObserver(e) {
        let t = this._observers.get(e);
        if (t) return t;
        t = new e(this), this._observers.set(e, t);
        for (const [n, o]of this.domRoots) t.observe(o, n);
        return t.enable(), t
    }

    getObserver(e) {
        return this._observers.get(e)
    }

    createRoot(e, t = 'main') {
        const n = 'string' == typeof e ? e : e.tagName, o = new Hp(n.toLowerCase(), t);
        return o.document = this, this.roots.set(t, o), o.on('change:children', (e, t) = > this.renderer.markToSync('children', t)
    ),
        o.on('change:attributes', (e, t) = > this.renderer.markToSync('attributes', t)
    ),
        o.on('change:text', (e, t) = > this.renderer.markToSync('text', t)
    ),
        this.domConverter.isElement(e) && this.attachDomRoot(e, t), o
    }

    attachDomRoot(e, t = 'main') {
        const n = this.getRoot(t);
        this.domRoots.set(t, e), this.domConverter.bindElements(e, n), this.renderer.markToSync('children', n), this.renderer.domDocuments.add(e.ownerDocument);
        for (const n of this._observers.values()) n.observe(e, t)
    }

    getRoot(e = 'main') {
        return this.roots.get(e)
    }

    getDomRoot(e = 'main') {
        return this.domRoots.get(e)
    }

    render() {
        this.disableObservers(), this.renderer.render(), this.enableObservers()
    }

    focus() {
        if (!this.isFocused) {
            const e = this.selection.editableElement;
            e ? (this.domConverter.focus(e), this.render()) : wa.warn('view-focus-no-selection: There is no selection in any editable to focus.')
        }
    }

    scrollToTheSelection() {
        const e = this.selection.getFirstRange();
        e && Fn({target: this.domConverter.viewRangeToDom(e), viewportOffset: 20})
    }

    disableObservers() {
        for (const e of this._observers.values()) e.disable()
    }

    enableObservers() {
        for (const e of this._observers.values()) e.enable()
    }

    destroy() {
        for (const e of this._observers.values()) e.destroy()
    }
}

a(rg, Us);

class ag {
    constructor(e) {
        this.model = e, this.view = new rg, this.mapper = new nc, this.modelToView = new rc(this.model, {
            mapper: this.mapper,
            viewSelection: this.view.selection
        }), this.listenTo(this.model, 'change', (e, t, n) = > {this.modelToView.convertChange(t, n)
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(this.model, 'changesDone', () = > {const e = this.model.selection;
        this.modelToView.convertSelection(e), this.view.render()
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(this.model.markers, 'add', (e, t) = > {this.modelToView.convertMarker('addMarker', t.name, t.getRange())
    }),
        this.listenTo(this.model.markers, 'remove', (e, t) = > {this.modelToView.convertMarker('removeMarker', t.name, t.getRange())
    }),
        this.listenTo(this.view, 'selectionChange', Hn(this.model, this.mapper)), this.modelToView.on('insert:$text', Se(), {priority: 'lowest'}), this.modelToView.on('remove', Ie(), {priority: 'low'}), this.modelToView.on('selection', Gn(), {priority: 'low'}), this.modelToView.on('selection', Yn(), {priority: 'low'}), this.modelToView.on('selection', Wn(), {priority: 'low'}), this.modelToView.on('selection', Un(), {priority: 'low'})
    }

    createRoot(e, t = 'main') {
        const n = this.view.createRoot(e, t), o = this.model.getRoot(t);
        return this.mapper.bindElements(o, n), n
    }

    destroy() {
        this.view.destroy(), this.stopListening()
    }
}

a(ag, Us);

class sg extends Pp {
    static create(e, t) {
        return new Promise((n) = > {const o = new this(e, t);
        n(o.initPlugins().then(() = > {o.fire('dataReady'), o.fire('ready')
    }).
        then(() = > o
    ))
    })
    }

    constructor(e, t) {
        super(t), this.element = e, this.editing = new ag(this.document), this.editing.view.bind('isReadOnly').to(this), this.keystrokes = new Rp(this), this.keystrokes.listenTo(this.editing.view), this._attachToForm()
    }

    destroy() {
        return Promise.resolve().then(() = > this.keystrokes.destroy()
    ).
        then(() = > this.editing.destroy()
    ).
        then(super.destroy())
    }

    setData(e) {
        this.data.set(e)
    }

    getData() {
        return this.data.get()
    }

    updateEditorElement() {
        Zn(this.element, this.getData())
    }

    loadDataFromEditorElement() {
        this.setData(Xn(this.element))
    }

    _attachToForm() {
        const e = this.element;
        if (e && 'textarea' === e.tagName.toLowerCase() && e.form) {
            let t;
            const n = e.form, o = () =
        >
            this.updateEditorElement();
            qa(n.submit) && (t = n.submit, n.submit = () = > {o(), t.apply(n)
        }),
            n.addEventListener('submit', o), this.on('destroy', () = > {n.removeEventListener('submit', o), t && (n.submit = t)
        })
        }
    }
}

class lg {
    getHtml(e) {
        const t = document.implementation.createHTMLDocument(''), n = t.createElement('div');
        return n.appendChild(e), n.innerHTML
    }
}

class dg {
    constructor() {
        this._domParser = new DOMParser, this._domConverter = new zp({blockFiller: Ip}), this._htmlWriter = new lg
    }

    toData(e) {
        const t = this._domConverter.viewToDom(e, document);
        return this._htmlWriter.getHtml(t)
    }

    toView(e) {
        const t = this._toDom(e);
        return this._domConverter.domToView(t)
    }

    _toDom(e) {
        const t = this._domParser.parseFromString(e, 'text/html'), n = t.createDocumentFragment(),
            o = t.body.childNodes;
        for (; 0 < o.length;) n.appendChild(o[0]);
        return n
    }
}

class cg {
    constructor(e) {
        this.editor = e
    }

    destroy() {
        this.stopListening()
    }
}

a(cg, Us);

class mg {
    get length() {
        return this._items.length
    }

    get first() {
        return this._items[0] || null
    }

    get last() {
        return this._items[this.length - 1] || null
    }

    constructor(e = {}) {
        this._items = [], this._itemMap = new Map, this._idProperty = e.idProperty || 'id', this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap
    }

    add(e, t) {
        let n;
        const o = this._idProperty;
        if (o in e) {
            if (n = e[o], 'string' != typeof n) throw new _a('collection-add-invalid-id');
            if (this.get(n)) throw new _a('collection-add-item-already-exists')
        } else e[o] = n = s();
        if (void 0 === t) t = this._items.length; else if (t > this._items.length || 0 > t) throw new _a('collection-add-item-invalid-index');
        return this._items.splice(t, 0, e), this._itemMap.set(n, e), this.fire('add', e, t), this
    }

    get(e) {
        let t;
        if ('string' == typeof e) t = this._itemMap.get(e); else if ('number' == typeof e) t = this._items[e]; else throw new _a('collection-get-invalid-arg: Index or id must be given.');
        return t || null
    }

    getIndex(e) {
        let t;
        return t = 'string' == typeof e ? this._itemMap.get(e) : e, this._items.indexOf(t)
    }

    remove(e) {
        let t = !1, n, o, i;
        const r = this._idProperty;
        if ('string' == typeof e ? (o = e, i = this._itemMap.get(o), t = !i, i && (n = this._items.indexOf(i))) : 'number' == typeof e ? (n = e, i = this._items[n], t = !i, i && (o = i[r])) : (i = e, o = i[r], n = this._items.indexOf(i), t = -1 == n || !this._itemMap.get(o)), t) throw new _a('collection-remove-404: Item not found.');
        this._items.splice(n, 1), this._itemMap.delete(o);
        const a = this._bindToInternalToExternalMap.get(i);
        return this._bindToInternalToExternalMap.delete(i), this._bindToExternalToInternalMap.delete(a), this.fire('remove', i), i
    }

    map(e, t) {
        return this._items.map(e, t)
    }

    find(e, t) {
        return this._items.find(e, t)
    }

    filter(e, t) {
        return this._items.filter(e, t)
    }

    clear() {
        for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
    }

    bindTo(e) {
        if (this._bindToCollection) throw new _a('collection-bind-to-rebind: The collection cannot be bound more than once.');
        return this._bindToCollection = e, {as: (e) = > {this._setUpBindToBinding((t) = > new e(t)
    )
    },
        using:(e) =
    >
        {
            'function' == typeof e ? this._setUpBindToBinding((t) = > e(t)
        ):
            this._setUpBindToBinding((t) = > t[e]
        )
        }
    }
    }

    _setUpBindToBinding(e) {
        const t = this._bindToCollection, n = (n, o, i) =
    >
        {
            const r = t._bindToCollection == this, a = t._bindToInternalToExternalMap.get(o);
            if (r && a) this._bindToExternalToInternalMap.set(o, a), this._bindToInternalToExternalMap.set(a, o); else {
                const t = e(o);
                this._bindToExternalToInternalMap.set(o, t), this._bindToInternalToExternalMap.set(t, o), this.add(t, i)
            }
        }
        ;
        for (const o of t) n(null, o);
        this.listenTo(t, 'add', n), this.listenTo(t, 'remove', (e, t) = > {const n = this._bindToExternalToInternalMap.get(t);
        n && this.remove(n)
    })
    }

    [Symbol.iterator]() {
        return this._items[Symbol.iterator]()
    }
}

a(mg, Oa);

class ug extends mg {
    eelengththrow
...
    new
) {
    'ui-viewcollection-delegate-wrong-events: All event names must be strings.'
!
    return
.
    to: (t) =
||!
    const
)
    n
    of
    thisconst
)
    ;
    o {
    of
> {
    en
    this
    'add'
    n
)
    oconst
    i
    of
    e
)
    o
.
    o

.

    constructor(e) {
        super({idProperty: 'viewUid'}), this.on('add', (e, t, n) = > {t.isRendered || t.render(), t.element && this._parentElement && this._parentElement.insertBefore(t.element, this._parentElement.children[n])
    }),
        this.on('remove', (e, t) = > {t.element && this._parentElement && t.element.remove()
    }),
        this.locale = e, this._parentElement = null
    }

    destroy() {
        this.map((e) = > e.destroy()
    )
    }

.

    setParent(e) {
        this._parentElement = e
    }

    delegate(

(

    if(,
        ,
        eo

(
    e
)

=> {

    _a()

    for(

(

    for(delegate)

    to(t);

    on()

    for(

.

    delegate(i)

.

    to(t)
}

),
this.on('remove', (n, o) = > {for(const i of e
)
o.stopDelegating(i, t)
})
}
}
}
}
a(mg, Us);
var pg = function (e, t) {
    return Hd(e, !0, !0, t)
};

class gg {

    static bind(e, t) {
        return {
            to(n, o) {
                return new hg({
                    eventNameOrFunction: n,
                    attribute: n,
                    observable: e,
                    emitter: t,
                    callback: o
                })
            }, if(n, o, i) {
                return new bg({observable: e, emitter: t, attribute: n, valueIfTrue: o, callback: i})
            }
        }
    }

    static extend(e, t) {
        e._isRendered && wa.warn('template-extend-render: Attempting to extend a template which has already been rendered.'), bo(e, lo(so(t)))
    }

    constructor(e) {
        Object.assign(this, lo(so(e))), this._isRendered = !1, this._revertData = null
    }


    render() {
        const e = this._renderNode({intoFragment: !0});
        return this._isRendered = !0, e
    }

    apply(e) {
        return this._revertData = vo(), this._renderNode({
            node: e,
            isApplying: !0,
            revertData: this._revertData
        }), e
    }

    revert(e) {
        if (!this._revertData) throw new _a('ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.');
        this._revertTemplateFromNode(e, this._revertData)
    }

    * getViews() {
        function* e(t) {
            if (t.children) for (const n of t.children) ko(n) ? yield n : wo(n) && (yield * e(n))
        }

        yield * e(this)
    }

    _renderNode(e) {
        let t;
        if (t = e.node ? this.tag && this.text : this.tag ? this.text : !this.text, t) throw new _a('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');
        return this.text ? this._renderText(e) : this._renderElement(e)
    }

    _renderElement(e) {
        let t = e.node;
        return t || (t = e.node = document.createElementNS(this.ns || 'http://www.w3.org/1999/xhtml', this.tag)), this._renderAttributes(e), this._renderElementChildren(e), this._setUpListeners(e), t
    }

    _renderText(e) {
        let t = e.node;
        return t ? e.revertData.text = t.textContent : t = e.node = document.createTextNode(''), to(this.text) ? this._bindToObservable({
            schema: this.text,
            updater: io(t),
            data: e
        }) : t.textContent = this.text.join(''), t
    }

    _renderAttributes(e) {
        let t, n, o, i;
        if (this.attributes) {
            const r = e.node, a = e.revertData;
            for (t in this.attributes) if (o = r.getAttribute(t), n = this.attributes[t], a && (a.attributes[t] = o), i = La(n[0]) && n[0].ns ? n[0].ns : null, to(n)) {
                const s = i ? n[0].value : n;
                a && xo(t) && s.unshift(o), this._bindToObservable({
                    schema: s,
                    updater: ro(r, t, i),
                    data: e
                })
            } else 'style' == t && 'string' != typeof n[0] ? this._renderStyleAttribute(n[0], e) : (a && o && xo(t) && n.unshift(o), n = n.map((e) = > e ? e.value || e : e).reduce((e, t) = > e.concat(t), []
        ).
            reduce(fo, ''), _o(n) || r.setAttributeNS(i, t, n)
        )
        }
    }

    _renderStyleAttribute(e, t) {
        const n = t.node;
        for (const o in e) {
            const i = e[o];
            to(i) ? this._bindToObservable({schema: [i], updater: ao(n, o), data: t}) : n.style[o] = i
        }
    }

    _renderElementChildren(e) {
        const t = e.node, n = e.intoFragment ? document.createDocumentFragment() : t, o = e.isApplying;
        let i = 0;
        for (const r of this.children) if (yo(r)) {
            if (!o) {
                r.setParent(t);
                for (const e of r) n.appendChild(e.element)
            }
        } else if (ko(r)) o || (!r.isRendered && r.render(), n.appendChild(r.element)); else if (dn(r)) n.appendChild(r); else if (o) {
            const t = e.revertData, o = vo();
            t.children.push(o), r._renderNode({node: n.childNodes[i++], isApplying: !0, revertData: o})
        } else n.appendChild(r.render());
        e.intoFragment && t.appendChild(n)
    }

    _setUpListeners(e) {
        if (this.eventListeners) for (const t in this.eventListeners) {
            const n = this.eventListeners[t].map((n) = > {const[o, i] = t.split('@');
            return n.activateDomEventListener(o, i, e)
        })
            ;e.revertData && e.revertData.bindings.push(n)
        }
    }

    _bindToObservable({schema: e, updater: t, data: n}) {
        const o = n.revertData;
        oo(e, t, n);
        const i = e.filter((e) = > !_o(e)
    ).
        filter((e) = > e.observable
    ).
        map((o) = > o.activateAttributeListener(e, t, n)
    )
        ;o && o.bindings.push(i)
    }

    _revertTemplateFromNode(e, t) {
        for (const n of t.bindings) for (const e of n) e();
        if (t.text) return void(e.textContent = t.text);
        for (const n in t.attributes) {
            const o = t.attributes[n];
            null === o ? e.removeAttribute(n) : e.setAttribute(n, o)
        }
        for (let n = 0; n < t.children.length; ++n) this._revertTemplateFromNode(e.childNodes[n], t.children[n])
    }
}

a(gg, Oa);

class fg {
    constructor(e) {
        Object.assign(this, e)
    }

    getValue(e) {
        const t = this.observable[this.attribute];
        return this.callback ? this.callback(t, e) : t
    }

    activateAttributeListener(e, t, n) {
        const o = () =
    >
        oo(e, t, n);
        return this.emitter.listenTo(this.observable, 'change:' + this.attribute, o), () =
    >
        {
            this.emitter.stopListening(this.observable, 'change:' + this.attribute, o)
        }
    }
}

class hg extends fg {
    activateDomEventListener(e, t, n) {
        const o = (e, n) =
    >
        {
            (!t || n.target.matches(t)) && ('function' == typeof this.eventNameOrFunction ? this.eventNameOrFunction(n) : this.observable.fire(this.eventNameOrFunction, n))
        }
        ;
        return this.emitter.listenTo(n.node, e, o), () =
    >
        {
            this.emitter.stopListening(n.node, e, o)
        }
    }
}

class bg extends fg {
    getValue(e) {
        const t = super.getValue(e);
        return !_o(t) && (this.valueIfTrue || !0)
    }
}

class _g {
    get bindTemplate() {
        return this._bindTemplate ? this._bindTemplate : this._bindTemplate = gg.bind(this, this)
    }

    constructor(e) {
        this.element = null, this.isRendered = !1, this.locale = e, this.t = e && e.t, this._viewCollections = new mg, this._unboundChildren = this.createCollection(), this._viewCollections.on('add', (t, n) = > {n.locale = e
    })
    }

    createCollection() {
        const e = new ug;
        return this._viewCollections.add(e), e
    }

    registerChildren(e) {
        E(e) || (e = [e]);
        for (const t of e) this._unboundChildren.add(t)
    }

    deregisterChildren(e) {
        E(e) || (e = [e]);
        for (const t of e) this._unboundChildren.remove(t)
    }

    setTemplate(e) {
        this.template = new gg(e)
    }

    extendTemplate(e) {
        gg.extend(this.template, e)
    }

    render() {
        if (this.isRendered) throw new _a('ui-view-render-already-rendered: This View has already been rendered.');
        this.template && (this.element = this.template.render(), this.registerChildren(this.template.getViews())), this.isRendered = !0
    }

    destroy() {
        this.stopListening(), this._viewCollections.map((e) = > e.destroy()
    )
    }
}

a(_g, Sp), a(_g, Us);
const kg = function (e) {
    return (t) =
>
    t + e
}('px'), wg = jp.document.body;

class yg extends _g {
    constructor(e) {
        super(e);
        const t = this.bindTemplate;
        this.set('top', 0), this.set('left', 0), this.set('position', 'arrow_nw'), this.set('isVisible', !1), this.set('withArrow', !0), this.set('className'), this.content = this.createCollection(), this.setTemplate({
            tag: 'div',
            attributes: {class: ['ck-balloon-panel', t.to('position', (e) = > `ck-balloon-panel_${e}`), t.if('isVisible', 'ck-balloon-panel_visible'), t.if('withArrow', 'ck-balloon-panel_with-arrow'), t.to('className')
    ],
        style:{
            top:t.to('top', kg), left
        :
            t.to('left', kg)
        }
    },
        children:this.content
    })
    }

    show() {
        this.isVisible = !0
    }

    hide() {
        this.isVisible = !1
    }

    attachTo(e) {
        this.show();
        const t = yg.defaultPositions, n = Object.assign({}, {
            element: this.element,
            positions: [t.southArrowNorthWest, t.southArrowNorthEast, t.northArrowSouthWest, t.northArrowSouthEast],
            limiter: wg,
            fitInViewport: !0
        }, e), {top: o, left: i, name: r} = Co(n);
        Object.assign(this, {top: o, left: i, position: r})
    }

    pin(e) {
        this.unpin(), this._pinWhenIsVisibleCallback = () =
    >
        {
            this.isVisible ? this._startPinning(e) : this._stopPinning()
        }
    ,
        this._startPinning(e), this.listenTo(this, 'change:isVisible', this._pinWhenIsVisibleCallback)
    }

    unpin() {
        this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, 'change:isVisible', this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
    }

    _startPinning(e) {
        this.attachTo(e);
        const t = So(e.target), n = e.limiter ? So(e.limiter) : wg;
        this.listenTo(jp.document, 'scroll', (o, i) = > {
            const r = i.target,
            a = t && r.contains(t),
            s = n && r.contains(n);
        (a || s || !t || !n) && this.attachTo(e)
    },
        {
            useCapture:!0
        }
    ),
        this.listenTo(jp.window, 'resize', () = > {this.attachTo(e)
    })
    }

    _stopPinning() {
        this.stopListening(jp.document, 'scroll'), this.stopListening(jp.window, 'resize')
    }
}

yg.arrowHorizontalOffset = 30, yg.arrowVerticalOffset = 15, yg.defaultPositions = {northArrowSouth: (e, t) = > ({
    top: Vo(e, t),
    left: e.left + e.width / 2 - t.width / 2,
    name: 'arrow_s'
}), northArrowSouthEast
:
(e, t) =
>
({
    top: Vo(e, t),
    left: e.left + e.width / 2 - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_se'
}), northArrowSouthWest
:
(e, t) =
>
({
    top: Vo(e, t),
    left: e.left + e.width / 2 - yg.arrowHorizontalOffset,
    name: 'arrow_sw'
}), northWestArrowSouth
:
(e, t) =
>
({top: Vo(e, t), left: e.left - t.width / 2, name: 'arrow_s'}), northWestArrowSouthWest
:
(e, t) =
>
({top: Vo(e, t), left: e.left - yg.arrowHorizontalOffset, name: 'arrow_sw'}), northWestArrowSouthEast
:
(e, t) =
>
({
    top: Vo(e, t),
    left: e.left - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_se'
}), northEastArrowSouth
:
(e, t) =
>
({top: Vo(e, t), left: e.right - t.width / 2, name: 'arrow_s'}), northEastArrowSouthEast
:
(e, t) =
>
({
    top: Vo(e, t),
    left: e.right - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_se'
}), northEastArrowSouthWest
:
(e, t) =
>
({top: Vo(e, t), left: e.right - yg.arrowHorizontalOffset, name: 'arrow_sw'}), southArrowNorth
:
(e, t) =
>
({top: Oo(e, t), left: e.left + e.width / 2 - t.width / 2, name: 'arrow_n'}), southArrowNorthEast
:
(e, t) =
>
({
    top: Oo(e, t),
    left: e.left + e.width / 2 - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_ne'
}), southArrowNorthWest
:
(e, t) =
>
({
    top: Oo(e, t),
    left: e.left + e.width / 2 - yg.arrowHorizontalOffset,
    name: 'arrow_nw'
}), southWestArrowNorth
:
(e, t) =
>
({top: Oo(e, t), left: e.left - t.width / 2, name: 'arrow_n'}), southWestArrowNorthWest
:
(e, t) =
>
({top: Oo(e, t), left: e.left - yg.arrowHorizontalOffset, name: 'arrow_nw'}), southWestArrowNorthEast
:
(e, t) =
>
({
    top: Oo(e, t),
    left: e.left - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_ne'
}), southEastArrowNorth
:
(e, t) =
>
({top: Oo(e, t), left: e.right - t.width / 2, name: 'arrow_n'}), southEastArrowNorthEast
:
(e, t) =
>
({
    top: Oo(e, t),
    left: e.right - t.width + yg.arrowHorizontalOffset,
    name: 'arrow_ne'
}), southEastArrowNorthWest
:
(e, t) =
>
({top: Oo(e, t), left: e.right - yg.arrowHorizontalOffset, name: 'arrow_nw'})
}
;

class vg extends cg {
    static get pluginName() {
        return 'ContextualBalloon'
    }

    get visibleView() {
        const e = this._stack.get(this.view.content.get(0));
        return e ? e.view : null
    }

    init() {
        this.view = new yg, this.positionLimiter = () =
    >
        {
            const e = this.editor.editing.view, t = e.selection.editableElement;
            return t ? e.domConverter.mapViewToDom(t.root) : null
        }
    ,
        this._stack = new Map, this.editor.ui.view.body.add(this.view), this.editor.ui.focusTracker.add(this.view.element)
    }

    hasView(e) {
        return this._stack.has(e)
    }

    add(e) {
        if (this.hasView(e.view)) throw new _a('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');
        this.visibleView && this.view.content.remove(this.visibleView), this._stack.set(e.view, e), this._show(e)
    }

    remove(e) {
        if (!this.hasView(e)) throw new _a('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');
        if (this.visibleView === e) {
            this.view.content.remove(e), this._stack.delete(e);
            const t = Array.from(this._stack.values()).pop();
            t ? this._show(t) : this.view.hide()
        } else this._stack.delete(e)
    }

    updatePosition(e) {
        e && (this._stack.get(this.visibleView).position = e), this.view.pin(this._getBalloonPosition())
    }

    _show({view: e, balloonClassName: t = ''}) {
        this.view.className = t, this.view.content.add(e), this.view.pin(this._getBalloonPosition())
    }

    _getBalloonPosition() {
        let e = Ro(this._stack.values()).position;
        return e && !e.limiter && (e = Object.assign({}, e, {limiter: this.positionLimiter})), e
    }
}

class xg {
    constructor() {
        this.set('isFocused', !1), this.focusedElement = null, this._elements = new Set, this._nextEventLoopTimeout = null
    }

    add(e) {
        if (this._elements.has(e)) throw new _a('focusTracker-add-element-already-exist');
        this.listenTo(e, 'focus', () = > this._focus(e), {useCapture: !0}
    ),
        this.listenTo(e, 'blur', () = > this._blur(), {useCapture: !0}
    ),
        this._elements.add(e)
    }

    remove(e) {
        e === this.focusedElement && this._blur(e), this._elements.has(e) && (this.stopListening(e), this._elements.delete(e))
    }

    _focus(e) {
        clearTimeout(this._nextEventLoopTimeout), this.focusedElement = e, this.isFocused = !0
    }

    _blur() {
        clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() = > {this.focusedElement = null, this.isFocused = !1
    },
        0
    )
    }
}

a(xg, Sp), a(xg, Us);

class Ag {
    get first() {
        return this.focusables.find(Fo) || null
    }

    get last() {
        return this.focusables.filter(Fo).slice(-1)[0] || null
    }

    get next() {
        return this._getFocusableItem(1)
    }

    get previous() {
        return this._getFocusableItem(-1)
    }

    get current() {
        let e = null;
        return null === this.focusTracker.focusedElement ? null : (this.focusables.find((t, n) = > {const o = t.element === this.focusTracker.focusedElement;
        return o && (e = n), o
    }),
        e
    )
    }

    constructor(e) {
        if (Object.assign(this, e), e.actions && e.keystrokeHandler) for (const t in e.actions) {
            let n = e.actions[t];
            'string' == typeof n && (n = [n]);
            for (const o of n) e.keystrokeHandler.set(o, (e, n) = > {this[t](), n()}
        )
        }
    }

    focusFirst() {
        this._focus(this.first)
    }

    focusLast() {
        this._focus(this.last)
    }

    focusNext() {
        this._focus(this.next)
    }

    focusPrevious() {
        this._focus(this.previous)
    }

    _focus(e) {
        e && e.focus()
    }

    _getFocusableItem(e) {
        const t = this.current, n = this.focusables.length;
        if (!n) return null;
        if (null === t) return this[1 === e ? 'first' : 'last'];
        let o = (t + n + e) % n;
        do {
            const t = this.focusables.get(o);
            if (Fo(t)) return t;
            o = (o + n + e) % n
        } while (o !== t);
        return null
    }
}

class Cg extends _g {
    constructor(e) {
        super(e), this.setTemplate({tag: 'span', attributes: {class: ['ck-toolbar__separator']}})
    }
}

class Tg extends _g {
    constructor(e) {
        super(e), this.items = this.createCollection(), this.focusTracker = new xg, this.keystrokes = new Op, this._focusCycler = new Ag({
            focusables: this.items,
            focusTracker: this.focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {focusPrevious: ['arrowleft', 'arrowup'], focusNext: ['arrowright', 'arrowdown']}
        }), this.setTemplate({
            tag: 'div',
            attributes: {class: ['ck-toolbar']},
            children: this.items,
            on: {mousedown: No(this)}
        })
    }

    render() {
        super.render();
        for (const e of this.items) this.focusTracker.add(e.element);
        this.items.on('add', (e, t) = > {this.focusTracker.add(t.element)
    }),
        this.items.on('remove', (e, t) = > {this.focusTracker.remove(t.element)
    }),
        this.keystrokes.listenTo(this.element)
    }

    focus() {
        this._focusCycler.focusFirst()
    }

    fillFromConfig(e, t) {
        e.map((e) = > {'|' == e ? this.items.add(new Cg) : t.has(e) ? this.items.add(t.create(e)) : wa.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.', {name: e})
    })
    }
}

class Pg extends cg {
    static get pluginName() {
        return 'ContextualToolbar'
    }

    static get requires() {
        return [vg]
    }

    init() {
        const e = this.editor;
        this.toolbarView = new Tg(e.locale), this.toolbarView.extendTemplate({attributes: {class: ['ck-editor-toolbar', 'ck-toolbar_floating']}}), this.toolbarView.render(), this._balloon = e.plugins.get(vg), this._fireSelectionChangeDebounced = Jp(() = > this.fire('_selectionChangeDebounced'), 200
    ),
        this._handleSelectionChange(), this._handleFocusChange(), this.decorate('show')
    }

    afterInit() {
        const e = Io(this.editor.config.get('contextualToolbar')), t = this.editor.ui.componentFactory;
        this.toolbarView.fillFromConfig(e.items, t)
    }

    _handleFocusChange() {
        const e = this.editor;
        this.listenTo(e.ui.focusTracker, 'change:isFocused', (e, t, n) = > {this._balloon.visibleView !== this.toolbarView || n || this.hide()
    })
    }

    _handleSelectionChange() {
        const e = this.editor.document.selection, t = this.editor.editing.view;
        this.listenTo(e, 'change:range', (t, n) = > {(n.directChange || e.isCollapsed) && this.hide(), this._fireSelectionChangeDebounced()
    }),
        this.listenTo(this, '_selectionChangeDebounced', () = > {t.isFocused && !t.selection.isCollapsed && this.show()
    })
    }

    show() {
        this._balloon.hasView(this.toolbarView) || Array.from(this.toolbarView.items).every((e) = > void 0 !== e.isEnabled && !e.isEnabled
    )||
        (this.listenTo(this.editor.editing.view, 'render', () = > {this._balloon.updatePosition(this._getBalloonPositionData())
    }),
        this._balloon.add({
            view: this.toolbarView,
            position: this._getBalloonPositionData(),
            balloonClassName: 'ck-toolbar-container ck-editor-toolbar-container'
        })
    )
    }

    hide() {
        this._balloon.hasView(this.toolbarView) && (this.stopListening(this.editor.editing.view, 'render'), this._balloon.remove(this.toolbarView))
    }

    _getBalloonPositionData() {
        const e = this.editor, t = e.editing.view, n = t.selection.isBackward;
        return {target: () = > {
            const e = t.selection.getFirstRange(),
            o = og.getDomRangeRects(t.domConverter.viewRangeToDom(e));
        return n ? o[0] : (1 < o.length && 0 === o[o.length - 1].width && o.pop(), o[o.length - 1])
    },
        positions:Bo(n)
    }
    }

    destroy() {
        this._fireSelectionChangeDebounced.cancel(), this.stopListening(), super.destroy()
    }
}

class Eg {
    constructor(e) {
        this.editor = e, this._components = new Map
    }

    * names() {
        yield * this._components.keys()
    }

    add(e, t) {
        if (this.has(e)) throw new _a('componentfactory-item-exists: The item already exists in the component factory.', {name: e});
        this._components.set(Mo(e), t)
    }

    create(e) {
        if (!this.has(e)) throw new _a('componentfactory-item-missing: The required component is not registered in the factory.', {name: e});
        return this._components.get(Mo(e))(this.editor.locale)
    }

    has(e) {
        return this._components.has(Mo(e))
    }
}

class Sg {
    constructor(e, t) {
        this.editor = e, this.view = t, this.componentFactory = new Eg(e), this.focusTracker = new xg
    }

    init() {
        const e = this.editor, t = this.view, n = e.plugins.get('ContextualToolbar');
        t.render();
        const o = e.editing.createRoot(t.editableElement);
        t.editable.bind('isReadOnly').to(o), t.editable.bind('isFocused').to(this.focusTracker), t.editable.name = o.rootName, this.focusTracker.add(t.editableElement), Do({
            origin: e.editing.view,
            originFocusTracker: this.focusTracker,
            originKeystrokeHandler: e.keystrokes,
            toolbar: n.toolbarView,
            beforeFocus() {
                n.show()
            },
            afterBlur() {
                n.hide()
            }
        })
    }

    destroy() {
        this.view.destroy()
    }
}

class Vg extends _g {
    constructor(e) {
        super(e), this.body = this.createCollection()
    }

    render() {
        super.render(), this._renderBodyCollection()
    }

    destroy() {
        return this._bodyCollectionContainer.remove(), super.destroy()
    }

    _renderBodyCollection() {
        const e = this._bodyCollectionContainer = new gg({
            tag: 'div',
            attributes: {class: ['ck-body', 'ck-rounded-corners', 'ck-reset_all']},
            children: this.body
        }).render();
        document.body.appendChild(e)
    }
}

class Og extends _g {
    constructor(e, t) {
        super(e);
        const n = this.bindTemplate;
        t && (this.element = this.editableElement = t), this.setTemplate({
            tag: 'div',
            attributes: {class: [n.to('isFocused', (e) = > e ? 'ck-focused' : 'ck-blurred'), 'ck-editor__editable', 'ck-rounded-corners'
    ],
        contenteditable:n.to('isReadOnly', (e) = > !e
    )
    }
    }),
        this.set('isReadOnly', !1), this.set('isFocused', !1), this.externalElement = t
    }

    render() {
        super.render(), this.externalElement ? this.template.apply(this.element = this.externalElement) : this.editableElement = this.element
    }

    destroy() {
        this.externalElement && this.template.revert(this.externalElement), super.destroy()
    }
}

class Rg extends Og {
    constructor(e, n) {
        super(e, n);
        const o = this.bindTemplate, i = this.t;
        this.set('name', null);
        this.extendTemplate({
            attributes: {
                role: 'textbox',
                "aria-label": o.to('name', (e) = > i('Rich Text Editor, %0', [e])), class
    :
        'ck-editor__editable_inline'
    }
    })
    }
}

class Fg extends Vg {
    get editableElement() {
        return this.editable.element
    }

    constructor(e, t) {
        super(e), this.editable = new Rg(e, t), this.registerChildren(this.editable)
    }
}

var Ng = n(9), Ig = n.n(Ng);

class Bg extends sg {
    static create(e, t) {
        return new Promise((n) = > {const o = new this(e, t);
        n(o.initPlugins().then(() = > {o.ui.init(), o.fire('uiReady')
    }).
        then(() = > o.loadDataFromEditorElement()
    ).
        then(() = > {o.fire('dataReady'), o.fire('ready')
    }).
        then(() = > o
    ))
    })
    }

    constructor(e, t) {
        super(e, t), this.config.get('plugins').push(Pg), this.config.define('contextualToolbar', this.config.get('toolbar')), this.document.createRoot(), this.data.processor = new dg, this.ui = new Sg(this, new Fg(this.locale, e))
    }

    destroy() {
        const e = this.getData();
        return this.ui.destroy(), super.destroy().then(() = > Zn(this.element, e)
    )
    }
}

class Mg {
    get types() {
        return this._native.types
    }

    constructor(e) {
        this.files = Lo(e), this._native = e
    }

    getData(e) {
        return this._native.getData(e)
    }

    setData(e, t) {
        this._native.setData(e, t)
    }
}

class Dg extends Xp {
    constructor(e) {
        function t(t, n) {
            n.preventDefault();
            const o = n.dropRange ? [n.dropRange] : Array.from(e.selection.getRanges());
            e.fire('clipboardInput', {dataTransfer: n.dataTransfer, targetRanges: o})
        }

        super(e), this.domEventType = ['paste', 'copy', 'cut', 'drop', 'dragover'], this.listenTo(e, 'paste', t, {priority: 'low'}), this.listenTo(e, 'drop', t, {priority: 'low'})
    }

    onDomEvent(e) {
        const t = {dataTransfer: new Mg(e.clipboardData ? e.clipboardData : e.dataTransfer)};
        'drop' == e.type && (t.dropRange = jo(this.document, e)), this.fire(e.type, e, t)
    }
}

const Lg = ['figcaption', 'li'];

class jg extends cg {
    static get pluginName() {
        return 'Clipboard'
    }

    init() {
        function e(e, i) {
            const r = i.dataTransfer, a = t.data.toView(t.data.getSelectedContent(n.selection));
            i.preventDefault(), o.fire('clipboardOutput', {dataTransfer: r, content: a, method: e.name})
        }

        const t = this.editor, n = t.document, o = t.editing.view;
        this._htmlDataProcessor = new dg, o.addObserver(Dg), this.listenTo(o, 'clipboardInput', (e, n) = > {if(t.isReadOnly
    )
        return;
        const i = n.dataTransfer;
        let r = '';
        i.getData('text/html') ? r = qo(i.getData('text/html')) : i.getData('text/plain') && (r = zo(i.getData('text/plain'))), r = this._htmlDataProcessor.toView(r), this.fire('inputTransformation', {content: r}), o.scrollToTheSelection()
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(this, 'inputTransformation', (e, t) = > {if(
        !t.content.isEmpty
    )
        {
            const e = this.editor.data, o = e.toModel(t.content, '$clipboardHolder');
            if (0 == o.childCount) return;
            n.enqueueChanges(() = > {e.insertContent(o, n.selection)
        })
        }
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(o, 'copy', e, {priority: 'low'}), this.listenTo(o, 'cut', (n, o) = > {t.isReadOnly ? o.preventDefault() : e(n, o)
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(o, 'clipboardOutput', (e, o) = > {o.content.isEmpty || (o.dataTransfer.setData('text/html', this._htmlDataProcessor.toData(o.content)), o.dataTransfer.setData('text/plain', Ho(o.content))), 'cut' == o.method && n.enqueueChanges(() = > {t.data.deleteContent(n.selection, n.batch())
    })
    },
        {
            priority:'low'
        }
    )
    }
}

class zg {
    constructor(e) {
        function t() {
            this.isEnabled = !1
        }

        this.editor = e, this.set('value', void 0), this.set('isEnabled', !1), this.decorate('execute'), this.listenTo(this.editor.document, 'changesDone', () = > {this.refresh()
    }),
        this.on('execute', (e) = > {this.isEnabled || e.stop()
    },
        {
            priority:'high'
        }
    ),
        this.listenTo(e, 'change:isReadOnly', (e, n, o) = > {o? (this.on('change:isEnabled', t, {priority: 'lowest'}), this.isEnabled = !1) : (this.off('change:isEnabled', t), this.refresh())}
    )
    }

    refresh() {
        this.isEnabled = !0
    }

    execute() {
    }

    destroy() {
        this.stopListening()
    }
}

a(zg, Us);

class qg extends zg {
    execute() {
        const e = this.editor.document, t = e.batch();
        e.enqueueChanges(() = > {Wo(this.editor.data, t, e.selection, e.schema
    ),
        this.fire('afterExecute', {batch: t})
    })
    }
}

class Hg extends Wp {
    constructor(e) {
        super(e), e.on('keydown', (t, n) = > {this.isEnabled && n.keyCode == uc.enter && e.fire('enter', new Yp(e, n.domEvent))
    })
    }

    observe() {
    }
}

class Wg extends cg {
    static get pluginName() {
        return 'Enter'
    }

    init() {
        const e = this.editor, t = e.editing.view;
        t.addObserver(Hg), e.commands.add('enter', new qg(e)), this.listenTo(t, 'enter', (n, o) = > {e.execute('enter'), o.preventDefault(), t.scrollToTheSelection()
    },
        {
            priority:'low'
        }
    )
    }
}

class Ug {
    get batch() {
        return this._batch || (this._batch = this.document.batch()), this._batch
    }

    constructor(e, t = 20) {
        this.document = e, this.size = 0, this.limit = t, this.isLocked = !1, this._changeCallback = (e, t, n, o) =
    >
        {
            this._onBatch(o)
        }
    ,
        this._selectionChangeCallback = () =
    >
        {
            this._reset()
        }
    ,
        e.on('change', this._changeCallback), e.selection.on('change:range', this._selectionChangeCallback), e.selection.on('change:attribute', this._selectionChangeCallback)
    }

    input(e) {
        this.size += e, this.size >= this.limit && this._reset(!0)
    }

    lock() {
        this.isLocked = !0
    }

    unlock() {
        this.isLocked = !1
    }

    destroy() {
        this.document.off('change', this._changeCallback), this.document.selection.off('change:range', this._selectionChangeCallback), this.document.selection.off('change:attribute', this._selectionChangeCallback)
    }

    _onBatch(e) {
        'transparent' != e.type && e !== this._batch && 1 >= mn(e.getOperations()) && this._reset(!0)
    }

    _reset(e) {
        (!this.isLocked || e) && (this._batch = null, this.size = 0)
    }
}

class $g extends zg {
    get buffer() {
        return this._buffer
    }

    constructor(e, t) {
        super(e), this._buffer = new Ug(e.document, t)
    }

    destroy() {
        super.destroy(), this._buffer.destroy()
    }

    execute(e = {}) {
        const t = this.editor.document, n = e.text || '', o = n.length,
            i = e.range || t.selection.getFirstRange(), r = e.resultRange;
        t.enqueueChanges(() = > {const e = i.isCollapsed;
        this._buffer.lock(), e || this._buffer.batch.remove(i), n && this._buffer.batch.weakInsert(i.start, n), r ? this.editor.data.model.selection.setRanges([r]) : e && this.editor.data.model.selection.setCollapsedAt(i.start.getShiftedBy(o)), this._buffer.unlock(), this._buffer.input(o)
    })
    }
}

class Kg extends cg {
    static get pluginName() {
        return 'Input'
    }

    init() {
        const e = this.editor, t = e.editing.view, n = new $g(e, e.config.get('typing.undoStep') || 20);
        e.commands.add('input', n), this.listenTo(t, 'keydown', (e, t) = > {this._handleKeydown(t, n)
    },
        {
            priority:'lowest'
        }
    ),
        this.listenTo(t, 'mutations', (e, t, n) = > {this._handleMutations(t, n)
    })
    }

    _handleKeydown(e, t) {
        const n = this.editor.document, o = t.buffer;
        !t.isEnabled || Ko(e) || n.selection.isCollapsed || (o.lock(), n.enqueueChanges(() = > {this.editor.data.deleteContent(n.selection, o.batch)
    }),
        o.unlock()
    )
    }

    _handleMutations(e, t) {
        new Qg(this.editor).handle(e, t)
    }
}

class Qg {
    constructor(e) {
        this.editor = e, this.editing = this.editor.editing
    }

    handle(e, t) {
        if (Yo(e)) this._handleContainerChildrenMutations(e, t); else for (const n of e) this._handleTextMutation(n, t), this._handleTextNodeInsertion(n)
    }

    _handleContainerChildrenMutations(e, t) {
        const n = Go(e);
        if (!n) return;
        const o = this.editor.editing.view.domConverter, i = o.mapViewToDom(n);
        if (!i) return;
        const r = new zp, a = this.editor.data.toModel(r.domToView(i)).getChild(0),
            s = this.editor.editing.mapper.toModelElement(n), l = Array.from(a.getChildren()),
            d = Array.from(s.getChildren());
        if (!Xo(l) || !Xo(d)) return;
        const c = l.map((e) = > e.data
    ).
        join('').replace(/\u00A0/g, ' '), m = d.map((e) = > e.data
    ).
        join('');
        if (m === c) return;
        const u = _n(m, c), {firstChangeAt: p, insertions: g, deletions: f} = Zo(u);
        let h = null;
        t && (h = this.editing.mapper.toModelRange(t.getFirstRange()));
        const b = c.substr(p, g), _ = el.createFromParentsAndOffsets(s, p, s, p + f);
        this.editor.execute('input', {text: b, range: _, resultRange: h})
    }

    _handleTextMutation(e, t) {
        if ('text' != e.type) return;
        const n = e.newText.replace(/\u00A0/g, ' '), o = e.oldText.replace(/\u00A0/g, ' '),
            i = _n(o, n), {firstChangeAt: r, insertions: a, deletions: s} = Zo(i);
        let l = null;
        t && (l = this.editing.mapper.toModelRange(t.getFirstRange()));
        const d = new ec(e.node, r), c = this.editing.mapper.toModelPosition(d),
            m = el.createFromPositionAndShift(c, s), u = n.substr(r, a);
        this.editor.execute('input', {text: u, range: m, resultRange: l})
    }

    _handleTextNodeInsertion(e) {
        if ('children' == e.type) {
            const t = Jo(e), n = new ec(e.node, t.index), o = this.editing.mapper.toModelPosition(n),
                i = t.values[0].data;
            this.editor.execute('input', {text: i.replace(/\u00A0/g, ' '), range: new el(o)})
        }
    }
}

const Jg = [ee('arrowUp'), ee('arrowRight'), ee('arrowDown'), ee('arrowLeft'), 9, 16, 17, 18, 20, 27, 33, 34, 35, 36, 229];
for (let o = 112; 135 >= o; o++) Jg.push(o);

class Gg extends zg {
    constructor(e, t) {
        super(e), this.direction = t, this._buffer = new Ug(e.document, e.config.get('typing.undoStep'))
    }

    execute(e = {}) {
        const t = this.editor.document, n = this.editor.data;
        t.enqueueChanges(() = > {this._buffer.lock();
        const o = bp.createFromSelection(t.selection), i = o.isCollapsed;
        if (o.isCollapsed && n.modifySelection(o, {
                direction: this.direction,
                unit: e.unit
            }), this._shouldEntireContentBeReplacedWithParagraph(e.sequence || 1)) return void this._replaceEntireContentWithParagraph();
        if (o.isCollapsed) return;
        let r = 0;
        o.getFirstRange().getMinimalFlatRanges().forEach((e) = > {r += mn(e.getWalker({
            singleCharacters: !0,
            ignoreElementEnd: !0,
            shallow: !0
        }))
    }),
        n.deleteContent(o, this._buffer.batch, {doNotResetEntireContent: i}), this._buffer.input(r), t.selection.setRanges(o.getRanges(), o.isBackward), this._buffer.unlock()
    })
    }

    _shouldEntireContentBeReplacedWithParagraph(e) {
        if (1 < e) return !1;
        const t = this.editor.document, n = t.selection, o = t.schema.getLimitElement(n),
            i = n.isCollapsed && n.containsEntireContent(o);
        if (!i) return !1;
        if (!t.schema.check({name: 'paragraph', inside: o.name})) return !1;
        const r = o.getChild(0);
        return r && 'paragraph' === r.name ? !1 : !0
    }

    _replaceEntireContentWithParagraph() {
        const e = this.editor.document, t = e.selection, n = e.schema.getLimitElement(t),
            o = new Gs('paragraph');
        this._buffer.batch.remove(el.createIn(n)), this._buffer.batch.insert(Zs.createAt(n), o), t.setCollapsedAt(o)
    }
}

class Yg extends Wp {
    constructor(e) {
        super(e);
        let t = 0;
        e.on('keyup', (e, n) = > {(n.keyCode == uc.delete || n.keyCode == uc.backspace) && (t = 0)
    }),
        e.on('keydown', (n, o) = > {const i = {};
        if (o.keyCode == uc.delete) i.direction = 'forward', i.unit = 'character'; else if (o.keyCode == uc.backspace) i.direction = 'backward', i.unit = 'codePoint'; else return;
        i.unit = o.altKey ? 'word' : i.unit, i.sequence = ++t, e.fire('delete', new Yp(e, o.domEvent, i))
    })
    }

    observe() {
    }
}

class Xg extends cg {
    static get pluginName() {
        return 'Delete'
    }

    init() {
        const e = this.editor, t = e.editing.view;
        t.addObserver(Yg), e.commands.add('forwardDelete', new Gg(e, 'forward')), e.commands.add('delete', new Gg(e, 'backward')), this.listenTo(t, 'delete', (n, o) = > {e.execute('forward' == o.direction ? 'forwardDelete' : 'delete', {
            unit: o.unit,
            sequence: o.sequence
        }), o.preventDefault(), t.scrollToTheSelection()
    })
    }
}

class Zg extends cg {
    static get requires() {
        return [Kg, Xg]
    }

    static get pluginName() {
        return 'Typing'
    }
}

class ef extends zg {
    constructor(e) {
        super(e), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
    }

    refresh() {
        this.isEnabled = 0 < this._stack.length
    }

    addBatch(e) {
        const t = this.editor.document.selection,
            n = {ranges: t.hasOwnRange ? Array.from(t.getRanges()) : [], isBackward: t.isBackward};
        this._stack.push({batch: e, selection: n}), this.refresh()
    }

    clearStack() {
        this._stack = [], this.refresh()
    }

    _restoreSelection(e, t, n) {
        const o = this.editor.document, i = [];
        for (const r of e) {
            const e = ei(r, n), t = e.find((e) = > e.start.root != o.graveyard
        )
            ;t && i.push(t)
        }
        i.length && o.selection.setRanges(i, t)
    }

    _undo(e) {
        const t = this.editor.document, n = t.batch();
        this._createdBatches.add(n);
        const o = e.deltas.slice();
        o.reverse();
        for (const i of o) {
            const e = i.baseVersion + i.operations.length, o = Array.from(t.history.getDeltas(e)),
                r = t.transformDeltas([i.getReversed()], o, !0), a = r.deltasA;
            for (const e of a) {
                e.baseVersion = t.version, n.addDelta(e);
                for (const n of e.operations) t.applyOperation(n);
                t.history.setDeltaAsUndone(i, e)
            }
        }
        return n
    }
}

class tf extends ef {
    execute(e = null) {
        const t = e ? this._stack.findIndex((t) = > t.batch == e
    ):
        this._stack.length - 1, n = this._stack.splice(t, 1)[0];
        this.editor.document.enqueueChanges(() = > {
            const e = this._undo(n.batch),
            t = this.editor.document.history.getDeltas(n.batch.baseVersion);
        this._restoreSelection(n.selection.ranges, n.selection.isBackward, t), this.fire('revert', n.batch, e)
    }),
        this.refresh()
    }
}

class nf extends ef {
    execute() {
        const e = this._stack.pop();
        this.editor.document.enqueueChanges(() = > {
            const t = e.batch.deltas[e.batch.deltas.length - 1],
            n = t.baseVersion + t.operations.length,
            o = this.editor.document.history.getDeltas(n);
        this._restoreSelection(e.selection.ranges, e.selection.isBackward, o), this._undo(e.batch)
    }),
        this.refresh()
    }
}

class of extends cg {
    constructor(e) {
        super(e), this._batchRegistry = new WeakSet
    }

    init() {
        this._undoCommand = new tf(this.editor), this._redoCommand = new nf(this.editor), this.editor.commands.add('undo', this._undoCommand), this.editor.commands.add('redo', this._redoCommand), this.listenTo(this.editor.document, 'change', (e, t, n, o) = > {this._batchRegistry.has(o) || 'transparent' == o.type || (this._redoCommand._createdBatches.has(o) ? this._undoCommand.addBatch(o) : !this._undoCommand._createdBatches.has(o) && (this._undoCommand.addBatch(o), this._redoCommand.clearStack()), this._batchRegistry.add(o))
    },
        {
            priority:'highest'
        }
    ),
        this.listenTo(this._undoCommand, 'revert', (e, t, n) = > {this._redoCommand.addBatch(n)
    })
    }
}

class rf extends _g {
    constructor() {
        super();
        const e = this.bindTemplate;
        this.set('content', ''), this.set('viewBox', '0 0 20 20'), this.setTemplate({
            tag: 'svg',
            ns: 'http://www.w3.org/2000/svg',
            attributes: {class: 'ck-icon', viewBox: e.to('viewBox')}
        })
    }

    render() {
        super.render(), this._updateXMLContent(), this.on('change:content', () = > this._updateXMLContent()
    )
    }

    _updateXMLContent() {
        if (this.content) {
            const e = new DOMParser().parseFromString(this.content.trim(), 'image/svg+xml').firstChild;
            for (this.element.innerHTML = ''; 0 < e.childNodes.length;) this.element.appendChild(e.childNodes[0])
        }
    }
}

class af extends _g {
    constructor(e) {
        super(e), this.set('text', ''), this.set('position', 's');
        const t = this.bindTemplate;
        this.setTemplate({
            tag: 'span',
            attributes: {class: ['ck-tooltip', t.to('position', (e) = > 'ck-tooltip_' + e), t.if('text', 'ck-hidden', (e) = > !e.trim()
    )]
    },
        children:[{
            tag: 'span',
            attributes: {class: ['ck-tooltip__text']},
            children: [{text: t.to('text')}]
        }]
    })
    }
}

class sf extends _g {
    constructor(e) {
        super(e);
        const t = this.bindTemplate;
        this.set('label'), this.set('keystroke'), this.set('tooltip'), this.set('tooltipPosition', 's'), this.set('type', 'button'), this.set('isOn', !1), this.set('isEnabled', !0), this.set('isVisible', !0), this.set('withText', !1), this.set('icon'), this.set('tabindex', -1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(), this.bind('_tooltipString').to(this, 'tooltip', this, 'label', this, 'keystroke', this._getTooltipString.bind(this)), this.setTemplate({
            tag: 'button',
            attributes: {class: ['ck-button', t.to('isEnabled', (e) = > e ? 'ck-enabled' : 'ck-disabled'), t.if('isVisible', 'ck-hidden', (e) = > !e
    ),
        t.to('isOn', (e) = > e ? 'ck-on' : 'ck-off'
    ),
        t.if('withText', 'ck-button_with-text')
    ],
        type:t.to('type', (e) = > e ? e : 'button'
    ),
        tabindex:t.to('tabindex')
    },
        children:this.children, on
    :
        {
            mousedown:t.to((e) = > {e.preventDefault()
        }),
            click:t.to((e) = > {this.isEnabled ? this.fire('execute') : e.preventDefault()
        })
        }
    })
    }

    render() {
        if (super.render(), this.icon) {
            const e = this.iconView = new rf;
            e.bind('content').to(this, 'icon'), this.children.add(e)
        }
        this.children.add(this.tooltipView), this.children.add(this.labelView)
    }

    focus() {
        this.element.focus()
    }

    _createTooltipView() {
        const e = new af;
        return e.bind('text').to(this, '_tooltipString'), e.bind('position').to(this, 'tooltipPosition'), e
    }

    _createLabelView() {
        const e = new _g;
        return e.setTemplate({
            tag: 'span',
            attributes: {class: ['ck-button__label']},
            children: [{text: this.bindTemplate.to('label')}]
        }), e
    }

    _getTooltipString(e, t, n) {
        return e ? 'string' == typeof e ? e : (n && (n = ne(n)), e instanceof Function ? e(t, n) : `${t}${n ? ` (${n})` : ''}`) : ''
    }
}

var lf = n(12), df = n.n(lf), cf = n(13), mf = n.n(cf);

class uf extends cg {
    static get requires() {
        return [of]
    }

    static get pluginName() {
        return 'Undo'
    }

    init() {
        const e = this.editor, n = e.t;
        this._addButton('undo', n('Undo'), 'CTRL+Z', df.a), this._addButton('redo', n('Redo'), 'CTRL+Y', mf.a), e.keystrokes.set('CTRL+Z', 'undo'), e.keystrokes.set('CTRL+Y', 'redo'), e.keystrokes.set('CTRL+SHIFT+Z', 'redo')
    }

    _addButton(e, t, n, o) {
        const i = this.editor, r = i.commands.get(e);
        i.ui.componentFactory.add(e, (a) = > {const s = new sf(a);
        return s.set({
            label: t,
            icon: o,
            keystroke: n,
            tooltip: !0
        }), s.bind('isEnabled').to(r, 'isEnabled'), this.listenTo(s, 'execute', () = > i.execute(e)
    ),
        s
    })
    }
}

class pf extends cg {
    static get requires() {
        return [jg, Wg, Zg, uf]
    }
}

class gf {
    get error() {
        return this._reader.error
    }

    constructor() {
        const e = new window.FileReader;
        this._reader = e, this.set('loaded', 0), e.onprogress = (e) =
    >
        {
            this.loaded = e.loaded
        }
    }

    read(e) {
        const t = this._reader;
        return this.total = e.size, new Promise((n, o) = > {t.onload = () =
    >
        {
            n(t.result)
        }
    ,
        t.onerror = () =
    >
        {
            o('error')
        }
    ,
        t.onabort = () =
    >
        {
            o('aborted')
        }
    ,
        this._reader.readAsDataURL(e)
    })
    }

    abort() {
        this._reader.abort()
    }
}

a(gf, Us);

class ff extends cg {
    static get pluginName() {
        return 'FileRepository'
    }

    init() {
        this.loaders = new mg, this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) = > t ? 100 * (e / t) : 0
    )
    }

    getLoader(e) {
        for (const t of this.loaders) if (t.file == e) return t;
        return null
    }

    createLoader(e) {
        if (!this.createAdapter) return wa.error('filerepository-no-adapter: Upload adapter is not defined.'), null;
        const t = new hf(e);
        return t._adapter = this.createAdapter(t), this.loaders.add(t), t.on('change:uploaded', () = > {let e = 0;
        for (const t of this.loaders) e += t.uploaded;
        this.uploaded = e
    }),
        t.on('change:uploadTotal', () = > {let e = 0;
        for (const t of this.loaders) t.uploadTotal && (e += t.uploadTotal);
        this.uploadTotal = e
    }),
        t
    }

    destroyLoader(e) {
        const t = e instanceof hf ? e : this.getLoader(e);
        t._destroy(), this.loaders.remove(t)
    }
}

a(ff, Us);

class hf {
    constructor(e, t) {
        this.id = s(), this.file = e, this._adapter = t, this._reader = new gf, this.set('status', 'idle'), this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) = > t ? 100 * (e / t) : 0
    ),
        this.set('uploadResponse', null)
    }

    read() {
        if ('idle' != this.status) throw new _a('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');
        return this.status = 'reading', this._reader.read(this.file).then((e) = > (this.status = 'idle', e)
    ).
        catch((e) = > {if('aborted' === e
    )
        throw this.status = 'aborted', 'aborted';
        throw this.status = 'error', this._reader.error
    })
    }

    upload() {
        if ('idle' != this.status) throw new _a('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');
        return this.status = 'uploading', this._adapter.upload().then((e) = > (this.uploadResponse = e, this.status = 'idle', e)
    ).
        catch((e) = > {if('aborted' === this.status
    )
        throw'aborted';
        throw this.status = 'error', e
    })
    }

    abort() {
        const e = this.status;
        this.status = 'aborted', 'reading' == e && this._reader.abort(), 'uploading' == e && this._adapter.abort && this._adapter.abort(), this._destroy()
    }

    _destroy() {
        this._reader = void 0, this._adapter = void 0, this.data = void 0, this.uploadResponse = void 0, this.file = void 0
    }
}

a(hf, Us);
const bf = 'ckCsrfToken', _f = 40, kf = 'abcdefghijklmnopqrstuvwxyz0123456789';

class wf extends cg {
    static get requires() {
        return [ff]
    }

    static get pluginName() {
        return 'CKFinderUploadAdapter'
    }

    init() {
        const e = this.editor.config.get('ckfinder.uploadUrl');
        e && (this.editor.plugins.get(ff).createAdapter = (t) = > new yf(t, e, this.editor.t)
    )
    }
}

class yf {
    constructor(e, n, o) {
        this.loader = e, this.url = n, this.t = o
    }

    upload() {
        return new Promise((e, t) = > {this._initRequest(), this._initListeners(e, t), this._sendRequest()
    })
    }

    abort() {
        this.xhr && this.xhr.abort()
    }

    _initRequest() {
        const e = this.xhr = new XMLHttpRequest;
        e.open('POST', this.url, !0), e.responseType = 'json'
    }

    _initListeners(e, n) {
        const o = this.xhr, i = this.loader, r = this.t,
            t = r('Cannot upload file:') + ` ${i.file.name}.`;
        o.addEventListener('error', () = > n(t)
    ),
        o.addEventListener('abort', () = > n()
    ),
        o.addEventListener('load', () = > {const i = o.response;
        return i && i.uploaded ? void e({default: i.url}) : n(i && i.error && i.error.message ? i.error.message : t)
    }),
        o.upload && o.upload.addEventListener('progress', (e) = > {e.lengthComputable && (i.uploadTotal = e.total, i.uploaded = e.loaded)
    })
    }

    _sendRequest() {
        const e = new FormData;
        e.append('upload', this.loader.file), e.append('ckCsrfToken', ni()), this.xhr.send(e)
    }
}

class vf {
    constructor(e, t, n) {
        let o;
        if ('function' == typeof n) o = n; else {
            o = (t) =
        >
            {
                const {batch: o} = t;
                e.execute(n, {batch: o})
            }
        }
        e.document.on('change', (n, i, r, a) = > {if('transparent' == a.type
    )
        return;
        if ('insert' != i) return;
        const s = r.range.getItems().next().value;
        if (!(s instanceof Qs)) return;
        const l = s.textNode, d = l.data;
        if ('paragraph' !== l.parent.name || !d) return;
        const c = t.exec(d);
        c && e.document.enqueueChanges(() = > {
            const t = e.document.batch(),
            n = el.createFromParentsAndOffsets(l.parent, 0, l.parent, c[0].length);
        t.remove(n), o({fixBatch: t, match: c})
    })
    })
    }
}

class xf {
    constructor(e, t, n) {
        let o, i, r, a;
        t instanceof RegExp ? o = t : r = t, 'string' == typeof n ? i = n : a = n, r = r || ((e) = > {let t;
        const n = [], i = [];
        for (; null !== (t = o.exec(e)) && !(t && 4 > t.length);) {
            let {index: e, 1: o, 2: r, 3: a} = t;
            e += t[0].length - (o + r + a).length;
            const s = [e, e + o.length],
                l = [e + o.length + r.length, e + o.length + r.length + a.length];
            n.push(s), n.push(l), i.push([e + o.length, e + o.length + r.length])
        }
        return {remove: n, format: i}
    }),
        a = a || ((e, t) = > {for(const n of t
    )
        e.setAttribute(n, i, !0)
    }),
        e.document.on('change', (t, n, o, s) = > {if('transparent' == s.type
    )
        return;
        if ('insert' !== n) return;
        const l = e.document.selection;
        if (!l.isCollapsed || !l.focus || !l.focus.parent) return;
        const d = l.focus.parent, c = ai(d).slice(0, l.focus.offset), m = r(c), u = [];
        m.format.forEach((e) = > {void 0 === e[0] || void 0 === e[1] || u.push(hp.createFromParentsAndOffsets(d, e[0], d, e[1]))}
    )
        ;const p = [];
        m.remove.slice().reverse().forEach((e) = > {void 0 === e[0] || void 0 === e[1] || p.push(hp.createFromParentsAndOffsets(d, e[0], d, e[1]))}
    )
        ;u.length && p.length && e.document.enqueueChanges(() = > {
            const t = e.document.batch(),
            n = e.document.schema.getValidRanges(u, i);
        a(t, n), u.forEach((e) = > e.detach()
    )
        ;
        for (const e of p) t.remove(e), e.detach()
    })
    })
    }
}

class Af extends cg {
    static get pluginName() {
        return 'Autoformat'
    }

    afterInit() {
        this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
    }

    _addListAutoformats() {
        const e = this.editor.commands;
        e.get('bulletedList') && new vf(this.editor, /^[*-]\s$/, 'bulletedList'), e.get('numberedList') && new vf(this.editor, /^\d+[.|)]?\s$/, 'numberedList')
    }

    _addBasicStylesAutoformats() {
        const e = this.editor.commands;
        e.get('bold') && (new xf(this.editor, /(\*\*)([^*]+)(\*\*)$/g, 'bold'), new xf(this.editor, /(__)([^_]+)(__)$/g, 'bold')), e.get('italic') && (new xf(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, 'italic'), new xf(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, 'italic')), e.get('code') && new xf(this.editor, /(`)([^`]+)(`)$/g, 'code')
    }

    _addHeadingAutoformats() {
        Array.from(this.editor.commands.names()).filter((e) = > e.match(/^heading[1-6]$/)
    ).
        forEach((e) = > {const t = e[7], n = new RegExp(`^(#{${t}})\\s$`);
        new vf(this.editor, n, (t) = > {const{batch: n} = t;
        this.editor.execute(e, {batch: n})
    })
    })
    }

    _addBlockQuoteAutoformats() {
        this.editor.commands.get('blockQuote') && new vf(this.editor, /^>\s$/, 'blockQuote')
    }
}

class Cf {
    ereturn
...
    this
) {
    _dispatchers = e
    this
.

    constructor() {
        this._dispatchers = [], this._from = null
    }

,

    for(
}

fromElement(e)
{
    return this._from = {type: 'element', name: e, priority: null}, this
}
fromAttribute(e)
{
    return this._from = {type: 'attribute', key: e, priority: null}, this
}
fromMarker(e)
{
    return this._from = {type: 'marker', name: e, priority: null}, this
}
withPriority(e)
{
    return this._from.priority = e, this
}
toElement(e)
{
    const t = null === this._from.priority ? 'normal' : this._from.priority;
    for (const n of this._dispatchers) if ('element' == this._from.type) e = 'string' == typeof e ? new Yd(e) : e, n.on('insert:' + this._from.name, Ee(e), {priority: t}); else if ('attribute' == this._from.type) e = 'string' == typeof e ? new sc(e) : e, n.on('addAttribute:' + this._from.key, Fe(e), {priority: t}), n.on('changeAttribute:' + this._from.key, Fe(e), {priority: t}), n.on('removeAttribute:' + this._from.key, Ne(e), {priority: t}), n.on('selectionAttribute:' + this._from.key, $n(e), {priority: t}); else {
        const t = null === this._from.priority ? 'normal' : this._from.priority;
        e = 'string' == typeof e ? new pc(e) : e, n.on('addMarker:' + this._from.name, Ve(e), {priority: t}), n.on('removeMarker:' + this._from.name, De(e), {priority: t})
    }
}
toHighlight(e)
{
    const t = null === this._from.priority ? 'normal' : this._from.priority;
    if ('marker' != this._from.type) throw new _a('build-model-converter-non-marker-to-highlight: Conversion to a highlight is supported only from model markers.');
    for (const n of this._dispatchers) n.on('addMarker:' + this._from.name, Be(e), {priority: t}), n.on('addMarker:' + this._from.name, Me(e), {priority: t}), n.on('removeMarker:' + this._from.name, Be(e), {priority: t}), n.on('removeMarker:' + this._from.name, Me(e), {priority: t}), n.on('selectionMarker:' + this._from.name, Kn(e), {priority: t})
}
toAttribute(e, t)
{
    if ('attribute' != this._from.type) throw new _a('build-model-converter-non-attribute-to-attribute: To-attribute conversion is supported only from model attributes.');
    let n = e ? 'string' == typeof e ? t ? function () {
        return {key: e, value: t}
    } : function (t) {
        return {key: e, value: t}
    } : e : void 0;
    for (const o of this._dispatchers) {
        const e = {priority: this._from.priority || 'normal'};
        o.on('addAttribute:' + this._from.key, Oe(n), e), o.on('changeAttribute:' + this._from.key, Oe(n), e), o.on('removeAttribute:' + this._from.key, Re(n), e)
    }
}
}

class Tf {
    ereturn
...
    this
) {
    _dispatchers = e
    this
.

    constructor() {
        this._dispatchers = [], this._from = []
    }

,

    for(
}

fromElement(e)
{
    return this.from({name: e})
}
fromAttribute(e, t = /.*/)
{
    const n = {};
    'style' === e || 'class' === e ? n[e] = t : (n.attribute = {}, n.attribute[e] = t);
    const o = new Kd(n);
    return this._from.push({matcher: o, consume: !1, priority: null, attributeKey: e}), this
}
from(e)
{
    return e instanceof Kd || (e = new Kd(e)), this._from.push({
        matcher: e,
        consume: !1,
        priority: null
    }), this
}
consuming(e)
{
    const t = this._from[this._from.length - 1];
    return t.consume = e, this
}
withPriority(e)
{
    const t = this._from[this._from.length - 1];
    return t.priority = e, this
}
toElement(e)
{
    this._setCallback(function (t) {
        return (n, o, i, r) =
    >
        {
            const a = t.matcher.matchAll(o.input);
            if (a) for (const n of a) {
                const a = e instanceof Function ? e(o.input) : new Gs(e);
                if (!a) continue;
                const s = Array.from(a.getAttributeKeys());
                if (!r.schema.check({name: a.name, attributes: s, inside: o.context})) continue;
                if (!i.consume(o.input, t.consume || n.match)) continue;
                o.context.push(a);
                const l = r.convertChildren(o.input, i, o), d = Zs.createAt(a, 'end');
                wc.insert(d, l), o.context.pop(), o.output = a;
                break
            }
        }
    }, 'normal')
}
toAttribute(e, t)
{
    this._setCallback(function (n) {
        return (o, i, r, a) =
    >
        {
            const s = n.matcher.matchAll(i.input);
            if (s) for (const o of s) {
                if (!r.consume(i.input, n.consume || o.match)) continue;
                i.output || (i.output = a.convertChildren(i.input, r, i));
                let s;
                if (!(e instanceof Function)) s = {
                    key: e,
                    value: t ? t : i.input.getAttribute(n.attributeKey)
                }; else if (s = e(i.input), !s) return;
                li(i.output, s, i, a);
                break
            }
        }
    }, 'low')
}
toMarker(e)
{
    this._setCallback(function (t) {
        return (n, o, i) =
    >
        {
            const r = t.matcher.matchAll(o.input);
            if (!r) return;
            let a;
            if (a = e instanceof Function ? e(o.input) : new Gs('$marker', {"data-name": o.input.getAttribute('data-name')}), '$marker' != a.name || 'string' != typeof a.getAttribute('data-name')) throw new _a('build-view-converter-invalid-marker: Invalid model element to mark marker range.');
            for (const e of r) if (i.consume(o.input, t.consume || e.match)) {
                o.output = a;
                break
            }
        }
    }, 'normal')
}
_setCallback(e, t)
{
    for (const n of this._from) {
        const o = n.matcher.getElementName(), i = o ? 'element:' + o : 'element', r = e(n),
            a = null === n.priority ? t : n.priority;
        for (const e of this._dispatchers) e.on(i, r, {priority: a})
    }
}
}

class Pf extends zg {
    constructor(e, t) {
        super(e), this.attributeKey = t
    }

    refresh() {
        const e = this.editor.document;
        this.value = e.selection.hasAttribute(this.attributeKey), this.isEnabled = e.schema.checkAttributeInSelection(e.selection, this.attributeKey)
    }

    execute(e = {}) {
        const t = this.editor.document, n = t.selection,
            o = e.forceValue === void 0 ? !this.value : e.forceValue;
        t.enqueueChanges(() = > {if(n.isCollapsed
    )
        o ? n.setAttribute(this.attributeKey, !0) : n.removeAttribute(this.attributeKey);
    else
        {
            const i = t.schema.getValidRanges(n.getRanges(), this.attributeKey),
                r = e.batch || t.batch();
            for (const e of i) o ? r.setAttribute(e, this.attributeKey, o) : r.removeAttribute(e, this.attributeKey)
        }
    })
    }
}

const Ef = 'bold';

class Sf extends cg {
    init() {
        const e = this.editor, t = e.data, n = e.editing;
        e.document.schema.allow({
            name: '$inline',
            attributes: Ef,
            inside: '$block'
        }), e.document.schema.allow({
            name: '$inline',
            attributes: Ef,
            inside: '$clipboardHolder'
        }), si().for(t.modelToView, n.modelToView).fromAttribute(Ef).toElement('strong'), di().for(t.viewToModel).fromElement('strong').fromElement('b').fromAttribute('style', {"font-weight": 'bold'}).toAttribute(Ef, !0), e.commands.add(Ef, new Pf(e, Ef))
    }
}

var Vf = n(14), Of = n.n(Vf);

class Rf extends cg {
    static get requires() {
        return [Sf]
    }

    static get pluginName() {
        return 'Bold'
    }

    init() {
        const e = this.editor, n = e.t, t = e.commands.get('bold'), o = 'CTRL+B';
        e.ui.componentFactory.add('bold', (i) = > {const r = new sf(i);
        return r.set({
            label: n('Bold'),
            icon: Of.a,
            keystroke: o,
            tooltip: !0
        }), r.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(r, 'execute', () = > e.execute('bold')
    ),
        r
    }),
        e.keystrokes.set(o, 'bold')
    }
}

const Ff = 'italic';

class Nf extends cg {
    init() {
        const e = this.editor, t = e.data, n = e.editing;
        e.document.schema.allow({
            name: '$inline',
            attributes: Ff,
            inside: '$block'
        }), e.document.schema.allow({
            name: '$inline',
            attributes: Ff,
            inside: '$clipboardHolder'
        }), si().for(t.modelToView, n.modelToView).fromAttribute(Ff).toElement('i'), di().for(t.viewToModel).fromElement('em').fromElement('i').fromAttribute('style', {"font-style": 'italic'}).toAttribute(Ff, !0), e.commands.add(Ff, new Pf(e, Ff))
    }
}

var If = n(15), Bf = n.n(If);

class Mf extends cg {
    static get requires() {
        return [Nf]
    }

    static get pluginName() {
        return 'Italic'
    }

    init() {
        const e = this.editor, n = e.t, t = e.commands.get('italic'), o = 'CTRL+I';
        e.ui.componentFactory.add('italic', (i) = > {const r = new sf(i);
        return r.set({
            label: n('Italic'),
            icon: Bf.a,
            keystroke: o,
            tooltip: !0
        }), r.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(r, 'execute', () = > e.execute('italic')
    ),
        r
    }),
        e.keystrokes.set(o, 'italic')
    }
}

class Df extends zg {
    refresh() {
        this.value = this._getValue(), this.isEnabled = this._checkEnabled()
    }

    execute(e = {}) {
        const t = this.editor.document, n = t.schema, o = e.batch || t.batch(),
            i = Array.from(t.selection.getSelectedBlocks());
        t.enqueueChanges(() = > {if(this.value
    )
        this._removeQuote(o, i.filter(ci));
    else
        {
            const e = i.filter((e) = > ci(e) || ui(n, e)
        )
            ;this._applyQuote(o, e)
        }
    })
    }

    _getValue() {
        const e = Ro(this.editor.document.selection.getSelectedBlocks());
        return !!(e && ci(e))
    }

    _checkEnabled() {
        if (this.value) return !0;
        const e = this.editor.document.selection, t = this.editor.document.schema,
            n = Ro(e.getSelectedBlocks());
        return !!n && ui(t, n)
    }

    _removeQuote(e, t) {
        mi(t).reverse().forEach((t) = > {if(t.start.isAtStart && t.end.isAtEnd
    )
        return void e.unwrap(t.start.parent);
        if (t.start.isAtStart) {
            const n = Zs.createBefore(t.start.parent);
            return void e.move(t, n)
        }
        t.end.isAtEnd || e.split(t.end);
        const n = Zs.createAfter(t.end.parent);
        e.move(t, n)
    })
    }

    _applyQuote(e, t) {
        const n = [];
        mi(t).reverse().forEach((t) = > {let o = ci(t.start);
        o || (o = new Gs('blockQuote'), e.wrap(t, o)), n.push(o)
    }),
        n.reverse().reduce((t, n) = > t.nextSibling == n ? (e.merge(Zs.createAfter(t)), t) : n
    )
    }
}

class Lf extends cg {
    init() {
        const e = this.editor, t = e.document.schema;
        e.commands.add('blockQuote', new Df(e)), t.registerItem('blockQuote'), t.allow({
            name: 'blockQuote',
            inside: '$root'
        }), t.allow({
            name: '$block',
            inside: 'blockQuote'
        }), di().for(e.data.viewToModel).fromElement('blockquote').toElement('blockQuote'), si().for(e.data.modelToView, e.editing.modelToView).fromElement('blockQuote').toElement('blockquote')
    }

    afterInit() {
        const e = this.editor.document.schema;
        e.hasItem('listItem') && e.allow({
            name: 'listItem',
            inside: 'blockQuote',
            attributes: ['type', 'indent']
        })
    }
}

var jf = n(16), zf = n.n(jf), qf = n(17), Hf = n.n(qf);

class Wf extends cg {
    static get requires() {
        return [Lf]
    }

    static get pluginName() {
        return 'BlockQuote'
    }

    init() {
        const e = this.editor, n = e.t, t = e.commands.get('blockQuote');
        e.ui.componentFactory.add('blockQuote', (o) = > {const i = new sf(o);
        return i.set({
            label: n('Block quote'),
            icon: zf.a,
            tooltip: !0
        }), i.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(i, 'execute', () = > e.execute('blockQuote')
    ),
        i
    })
    }

    afterInit() {
        const e = this.editor, t = e.commands.get('blockQuote');
        this.listenTo(this.editor.editing.view, 'enter', (e, n) = > {
            const o = this.editor.document,
            i = o.selection.getLastPosition().parent;
        o.selection.isCollapsed && i.isEmpty && t.value && (this.editor.execute('blockQuote'), this.editor.editing.view.scrollToTheSelection(), n.preventDefault(), e.stop())
    })
    }
}

const Uf = /^data:(\S*?);base64,/;

class $f {
    constructor(e, t, n) {
        if (!e) throw new Error('File must be provided');
        if (!t) throw new Error('Token must be provided');
        if (!n) throw new Error('Api address must be provided');
        this.file = gi(e) ? pi(e) : e, this._token = t, this._apiAddress = n
    }

    onProgress(e) {
        return this.on('progress', (t, n) = > e(n)
    ),
        this
    }

    onError(e) {
        return this.once('error', (t, n) = > e(n)
    ),
        this
    }

    abort() {
        this.xhr.abort()
    }

    send() {
        return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
    }

    _prepareRequest() {
        const e = new XMLHttpRequest;
        e.open('POST', this._apiAddress), e.setRequestHeader('Authorization', this._token.value), e.responseType = 'json', this.xhr = e
    }

    _attachXHRListeners() {
        function e(e) {
            return () =
        >
            t.fire('error', e)
        }

        const t = this, n = this.xhr;
        n.addEventListener('error', e('Network Error')), n.addEventListener('abort', e('Abort')), n.upload && n.upload.addEventListener('progress', (e) = > {e.lengthComputable && this.fire('progress', {
            total: e.total,
            uploaded: e.loaded
        })
    }),
        n.addEventListener('load', () = > {const e = n.status, t = n.response;
        if (200 > e || 299 < e) return this.fire('error', t.message || t.error)
    })
    }

    _sendRequest() {
        const e = new FormData, t = this.xhr;
        return e.append('file', this.file), new Promise((n, o) = > {t.addEventListener('load', () = > {
            const e = t.status,
            i = t.response;
        return 200 > e || 299 < e ? o(i.message || i.error) : n(i)
    }),
        t.addEventListener('error', () = > o('Network Error')
    ),
        t.addEventListener('abort', () = > o('Abort')
    ),
        t.send(e)
    })
    }
}

a($f, Oa);
const Kf = {refreshInterval: 3.6e6, autoRefresh: !0};

class Qf {
    static create(e, t = Kf) {
        const n = new Qf(e, t);
        return n.init()
    }

    constructor(e, t = Kf) {
        if (!e) throw new Error('`tokenUrl` must be provided');
        this.set('value', t.initValue), this._tokenUrl = e, this._options = Object.assign({}, Kf, t)
    }

    init() {
        return new Promise((e, t) = > (this._options.autoRefresh && this._startRefreshing(), this.value ? void e(this) : void this._refreshToken().then(e).catch(t))
    )
    }

    _refreshToken() {
        return new Promise((e, t) = > {const n = new XMLHttpRequest;
        n.open('GET', this._tokenUrl), n.addEventListener('load', () = > {
            const o = n.status,
            i = n.response;
        return 200 > o || 299 < o ? t('Cannot download new token!') : (this.set('value', i), e(this))
    }),
        n.addEventListener('error', () = > t('Network Error')
    ),
        n.addEventListener('abort', () = > t('Abort')
    ),
        n.send()
    })
    }

    _startRefreshing() {
        this._refreshInterval = setInterval(this._refreshToken.bind(this), this._options.refreshInterval)
    }

    _stopRefreshing() {
        clearInterval(this._refreshInterval)
    }
}

a(Qf, Us);

class Jf extends cg {
    init() {
        const e = this.editor, t = e.config, n = t.get('cloudServices') || {};
        for (const e in n) this[e] = n[e];
        return (this.uploadUrl || (this.uploadUrl = 'https://files.cke-cs.com/upload/'), !this.tokenUrl) ? void(this.token = null) : (this.token = new Jf.Token(this.tokenUrl), this.token.init())
    }
}

Jf.Token = Qf;

class Gf extends cg {
    static get requires() {
        return [ff, Jf]
    }

    init() {
        const e = this.editor, t = e.plugins.get(Jf), n = t.token, o = t.uploadUrl;
        n && (this._uploadGateway = new Gf._UploadGateway(n, o), e.plugins.get(ff).createAdapter = (e) = > new Yf(this._uploadGateway, e)
    )
    }
}

class Yf {
    constructor(e, t) {
        this.uploadGateway = e, this.loader = t
    }

    upload() {
        return this.fileUploader = this.uploadGateway.upload(this.loader.file), this.fileUploader.on('progress', (e, t) = > {this.loader.uploadTotal = t.total, this.loader.uploaded = t.uploaded
    }),
        this.fileUploader.send()
    }

    abort() {
        this.fileUploader.abort()
    }
}

Gf._UploadGateway = class {
    constructor(e, t) {
        if (!e) throw new Error('Token must be provided');
        if (!t) throw new Error('Api address must be provided');
        this._token = e, this._apiAddress = t
    }

    upload(e) {
        return new $f(e, this._token, this._apiAddress)
    }
};
const Xf = new WeakSet;

class Zf {
    constructor() {
        this._stack = []
    }

    add(e) {
        const t = this._stack, n = t[0];
        this._insertDescriptor(e);
        const o = t[0];
        n === o || vi(n, o) || this.fire('change:top', {oldDescriptor: n, newDescriptor: o})
    }

    remove(e) {
        const t = this._stack, n = t[0];
        this._removeDescriptor(e);
        const o = t[0];
        n === o || vi(n, o) || this.fire('change:top', {oldDescriptor: n, newDescriptor: o})
    }

    _insertDescriptor(e) {
        const t = this._stack, n = t.findIndex((t) = > t.id === e.id
    )
        ;
        if (!vi(e, t[n])) {
            -1 < n && t.splice(n, 1);
            let o = 0;
            for (; t[o] && xi(t[o], e);) o++;
            t.splice(o, 0, e)
        }
    }

    _removeDescriptor(e) {
        const t = this._stack, n = t.findIndex((t) = > t.id === e
    )
        ;-1 < n && t.splice(n, 1)
    }
}

a(Zf, Oa);
const eh = Symbol('isWidget'), th = Symbol('label'), nh = 'ck-widget', oh = 'ck-widget_selected',
    ih = Symbol('isImage');

class rh extends cg {
    init() {
        const e = this.editor, n = e.document, o = n.schema, i = e.data, r = e.editing, a = e.t;
        o.registerItem('image'), o.requireAttributes('image', ['src']), o.allow({
            name: 'image',
            attributes: ['alt', 'src', 'srcset'],
            inside: '$root'
        }), o.objects.add('image'), si().for(i.modelToView).fromElement('image').toElement(() = > Bi()
    ),
        si().for(r.modelToView).fromElement('image').toElement(() = > Ri(Bi(), a('image widget'))
    ),
        hi([r.modelToView, i.modelToView], 'src'), hi([r.modelToView, i.modelToView], 'alt'), hi([r.modelToView, i.modelToView], 'srcset', bi), di().for(i.viewToModel).from({
            name: 'img',
            attribute: {src: /./}
        }).toElement((e) = > new Gs('image', {src: e.getAttribute('src')})
    ),
        i.viewToModel.on('element:img', ki, {priority: 'low'}), i.viewToModel.on('element', yi, {priority: 'low'}), di().for(i.viewToModel).from({
            name: 'img',
            attribute: {alt: /./}
        }).consuming({attribute: ['alt']}).toAttribute((e) = > ({
            key: 'alt',
            value: e.getAttribute('alt')
        })
    ),
        di().for(i.viewToModel).from({
            name: 'img',
            attribute: {srcset: /./}
        }).consuming({attribute: ['srcset']}).toAttribute((e) = > {const t = {data: e.getAttribute('srcset')};
        return e.hasAttribute('width') && (t.width = e.getAttribute('width')), {key: 'srcset', value: t}
    }),
        i.viewToModel.on('element:figure', fi())
    }
}

class ah extends Xp {
    constructor(e) {
        super(e), this.domEventType = 'mousedown'
    }

    onDomEvent(e) {
        this.fire(e.type, e)
    }
}

var sh = n(19), lh = n.n(sh);
const dh = te('Ctrl+A');

class ch extends cg {
    static get pluginName() {
        return 'Widget'
    }

    init() {
        const e = this.editor.editing.view;
        this._previouslySelected = new Set, this.editor.editing.modelToView.on('selection', (e, t, n, o) = > {this._clearPreviouslySelectedWidgets();
        const i = o.viewSelection, r = i.getSelectedElement();
        for (const a of i.getRanges()) for (const e of a) {
            const t = e.item;
            t.is('element') && Ci(t) && (t.addClass(oh), this._previouslySelected.add(t), t == r && i.setFake(!0, {label: Si(r)}))
        }
    },
        {
            priority:'low'
        }
    ),
        e.addObserver(ah), this.listenTo(e, 'mousedown', (...e) =
    >
        this._onMousedown(...e
    )),
        this.listenTo(e, 'keydown', (...e) =
    >
        this._onKeydown(...e
    ),
        {
            priority:'high'
        }
    )
    }

    _onMousedown(e, t) {
        const n = this.editor, o = n.editing.view;
        let i = t.target;
        if (ji(i)) return;
        if (!Ci(i) && (i = i.findAncestor(Ci), !i)) return;
        t.preventDefault(), o.isFocused || o.focus();
        const r = n.editing.mapper.toModelElement(i);
        n.document.enqueueChanges(() = > {this._setSelectionOverElement(r)
    })
    }

    _onKeydown(e, t) {
        const n = t.keyCode, o = n == uc.delete || n == uc.arrowdown || n == uc.arrowright;
        let i = !1;
        Di(n) ? i = this._handleDelete(o) : Mi(n) ? i = this._handleArrowKeys(o) : Li(t) && (i = this._selectAllNestedEditableContent() || this._selectAllContent()), i && (t.preventDefault(), e.stop())
    }

    _handleDelete(e) {
        if (this.editor.isReadOnly) return;
        const t = this.editor.document, n = t.selection;
        if (!n.isCollapsed) return;
        const o = this._getObjectElementNextToSelection(e);
        if (o) return t.enqueueChanges(() = > {const e = t.batch();
        for (let t = n.anchor.parent; t.isEmpty;) {
            const n = t;
            t = n.parent, e.remove(n)
        }
        this._setSelectionOverElement(o)
    }),
        !0
    }

    _handleArrowKeys(e) {
        const t = this.editor.document, n = t.schema, o = t.selection, i = o.getSelectedElement();
        if (i && n.objects.has(i.name)) {
            const n = e ? o.getLastPosition() : o.getFirstPosition(),
                i = t.getNearestSelectionRange(n, e ? 'forward' : 'backward');
            return i && t.enqueueChanges(() = > {o.setRanges([i])
        }),
            !0
        }
        if (!o.isCollapsed) return;
        const r = this._getObjectElementNextToSelection(e);
        if (r instanceof Gs && t.schema.objects.has(r.name)) return t.enqueueChanges(() = > {this._setSelectionOverElement(r)
    }),
        !0
    }

    _selectAllNestedEditableContent() {
        const e = this.editor.document, t = e.selection, n = e.schema, o = n.getLimitElement(t);
        return t.getFirstRange().root != o && (e.enqueueChanges(() = > {t.setIn(o)
    }),
        !0
    )
    }

    _selectAllContent() {
        const e = this.editor.document, t = e.selection, n = this.editor.editing, o = n.view,
            i = o.selection, r = i.getSelectedElement();
        if (r && Ci(r)) {
            const o = n.mapper.toModelElement(r.parent);
            return e.enqueueChanges(() = > {t.setRanges([el.createIn(o)])
        }),
            !0
        }
        return !1
    }

    _setSelectionOverElement(e) {
        this.editor.document.selection.setRanges([el.createOn(e)])
    }

    _getObjectElementNextToSelection(e) {
        const t = this.editor.document, n = t.schema, o = t.selection, i = this.editor.data,
            r = bp.createFromSelection(o);
        i.modifySelection(r, {direction: e ? 'forward' : 'backward'});
        const a = e ? r.focus.nodeBefore : r.focus.nodeAfter;
        return a instanceof Gs && n.objects.has(a.name) ? a : null
    }

    _clearPreviouslySelectedWidgets() {
        for (const e of this._previouslySelected) e.removeClass(oh);
        this._previouslySelected.clear()
    }
}

class mh extends zg {
    refresh() {
        const e = this.editor.document.selection.getSelectedElement();
        this.isEnabled = Ii(e), this.value = Ii(e) && e.hasAttribute('alt') && e.getAttribute('alt')
    }

    execute(e) {
        const t = this.editor.document, n = t.selection.getSelectedElement();
        t.enqueueChanges(() = > {const o = e.batch || t.batch();
        o.setAttribute(n, 'alt', e.newValue)
    })
    }
}

class uh extends cg {
    init() {
        this.editor.commands.add('imageTextAlternative', new mh(this.editor))
    }
}

class ph extends _g {
    constructor(e) {
        super(e), this.set('text'), this.set('for');
        const t = this.bindTemplate;
        this.setTemplate({
            tag: 'label',
            attributes: {class: ['ck-label'], for: t.to('for')},
            children: [{text: t.to('text')}]
        })
    }
}

class gh extends _g {
    constructor(e, t) {
        super(e);
        const n = `ck-input-${s()}`;
        this.set('label'), this.set('value'), this.set('isReadOnly', !1), this.labelView = this._createLabelView(n), this.inputView = this._createInputView(t, n);
        const o = this.bindTemplate;
        this.setTemplate({
            tag: 'div',
            attributes: {class: [o.if('isReadOnly', 'ck-disabled')]},
            children: [this.labelView, this.inputView]
        })
    }

    _createLabelView(e) {
        const t = new ph(this.locale);
        return t.for = e, t.bind('text').to(this, 'label'), t
    }

    _createInputView(e, t) {
        const n = new e(this.locale);
        return n.id = t, n.bind('value').to(this), n.bind('isReadOnly').to(this), n
    }

    select() {
        this.inputView.select()
    }

    focus() {
        this.inputView.focus()
    }
}

class fh extends _g {
    constructor(e) {
        super(e), this.set('value'), this.set('id'), this.set('placeholder'), this.set('isReadOnly', !1);
        const t = this.bindTemplate;
        this.setTemplate({
            tag: 'input',
            attributes: {
                type: 'text',
                class: ['ck-input', 'ck-input-text'],
                id: t.to('id'),
                placeholder: t.to('placeholder'),
                readonly: t.to('isReadOnly'),
                value: t.to('value')
            }
        })
    }

    select() {
        this.element.select()
    }

    focus() {
        this.element.focus()
    }
}

class hh extends _g {
    constructor(e) {
        super(e);
        const n = this.locale.t;
        this.focusTracker = new xg, this.keystrokes = new Op, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(n('Save')), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(n('Cancel'), 'cancel'), this._focusables = new ug, this._focusCycler = new Ag({
            focusables: this._focusables,
            focusTracker: this.focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {focusPrevious: 'shift + tab', focusNext: 'tab'}
        }), this.saveButtonView.extendTemplate({attributes: {class: ['ck-button-action']}}), this.setTemplate({
            tag: 'form',
            attributes: {class: ['cke-text-alternative-form'], tabindex: '-1'},
            children: [this.labeledInput, {
                tag: 'div',
                attributes: {class: ['cke-text-alternative-form__actions']},
                children: [this.saveButtonView, this.cancelButtonView]
            }]
        })
    }

    render() {
        super.render(), this.keystrokes.listenTo(this.element), qi({view: this}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach((e) = > {this._focusables.add(e), this.focusTracker.add(e.element)
    })
    }

    _createButton(e, t) {
        const n = new sf(this.locale);
        return n.label = e, n.withText = !0, t && n.delegate('execute').to(this, t), n
    }

    _createLabeledInputView() {
        const e = this.locale.t, t = new gh(this.locale, fh);
        return t.label = e('Text alternative'), t
    }
}

var bh = n(21), _h = n.n(bh), kh = n(22), wh = n.n(kh);

class yh extends cg {
    static get requires() {
        return [uh, vg]
    }

    static get pluginName() {
        return 'ImageTextAlternative'
    }

    get _isVisible() {
        return this._balloon.visibleView == this._form
    }

    init() {
        this._createButton(), this._createForm()
    }

    _createButton() {
        const e = this.editor, n = e.commands.get('imageTextAlternative'), o = e.t;
        e.ui.componentFactory.add('imageTextAlternative', (e) = > {const t = new sf(e);
        return t.set({
            label: o('Change image text alternative'),
            icon: _h.a,
            tooltip: !0
        }), t.bind('isEnabled').to(n, 'isEnabled'), this.listenTo(t, 'execute', () = > this._showForm()
    ),
        t
    })
    }

    _createForm() {
        const e = this.editor, t = e.editing.view;
        this._balloon = this.editor.plugins.get('ContextualBalloon'), this._form = new hh(e.locale), this._form.render(), this.listenTo(this._form, 'submit', () = > {e.execute('imageTextAlternative', {newValue: this._form.labeledInput.inputView.element.value}), this._hideForm(!0)
    }),
        this.listenTo(this._form, 'cancel', () = > {this._hideForm(!0)
    }),
        this._form.keystrokes.set('Esc', (e, t) = > {this._hideForm(!0), t()
    }),
        this.listenTo(t, 'render', () = > {Ni(t.selection
    )
            ? this._isVisible && Hi(e) : this._hideForm(!0)
    },
        {
            priority:'low'
        }
    ),
        zi({emitter: this._form, activator: () = > this._isVisible, contextElements
    :
        [this._form.element], callback
    :
        () =
    >
        this._hideForm()
    })
    }

    _showForm() {
        if (!this._isVisible) {
            const e = this.editor, t = e.commands.get('imageTextAlternative'),
                n = this._form.labeledInput;
            this._balloon.hasView(this._form) || this._balloon.add({
                view: this._form,
                position: Wi(e)
            }), n.value = n.inputView.element.value = t.value || '', this._form.labeledInput.select()
        }
    }

    _hideForm(e) {
        this._isVisible && (this._balloon.remove(this._form), e && this.editor.editing.view.focus())
    }
}

var vh = n(24), xh = n.n(vh);

class Ah extends cg {
    static get requires() {
        return [rh, ch, yh]
    }

    static get pluginName() {
        return 'Image'
    }

    init() {
        const e = this.editor, t = e.plugins.get('ContextualToolbar');
        t && this.listenTo(t, 'show', (t) = > {Ni(e.editing.view.selection
    )&&
        t.stop()
    },
        {
            priority:'high'
        }
    )
    }
}

class Ch extends zg {
    execute(e) {
        const t = this.editor, n = t.document, o = e.batch || n.batch(), i = e.file, r = n.selection,
            a = t.plugins.get(ff);
        n.enqueueChanges(() = > {const s = a.createLoader(i);
        if (!s) return;
        const l = new Gs('image', {uploadId: s.id});
        let d;
        d = e.insertAt ? new bp([new el(e.insertAt)]) : n.selection, t.data.insertContent(l, d, o), l.parent && r.setRanges([el.createOn(l)])
    })
    }
}

class Th extends cg {
    static get pluginName() {
        return 'Notification'
    }

    init() {
        this.on('show:warning', (e, t) = > {window.alert(t.message)
    },
        {
            priority:'lowest'
        }
    )
    }

    showSuccess(e, t = {}) {
        this._showNotification({message: e, type: 'success', namespace: t.namespace, title: t.title})
    }

    showInfo(e, t = {}) {
        this._showNotification({message: e, type: 'info', namespace: t.namespace, title: t.title})
    }

    showWarning(e, t = {}) {
        this._showNotification({message: e, type: 'warning', namespace: t.namespace, title: t.title})
    }

    _showNotification(e) {
        const t = `show:${e.type}` + (e.namespace ? `:${e.namespace}` : '');
        this.fire(t, {message: e.message, type: e.type, title: e.title || ''})
    }
}

class Ph extends cg {
    static get requires() {
        return [ff, Th]
    }

    init() {
        const e = this.editor, t = e.document, n = t.schema, o = e.plugins.get(ff);
        n.allow({name: 'image', attributes: ['uploadId'], inside: '$root'}), n.allow({
            name: 'image',
            attributes: ['uploadStatus'],
            inside: '$root'
        }), n.requireAttributes('image', ['uploadId']), e.commands.add('imageUpload', new Ch(e)), e.editing.view.on('clipboardInput', (n, o) = > {if(Ki(o.dataTransfer)
    )
        return;
        let i = new bp(o.targetRanges.map((t) = > e.editing.mapper.toModelRange(t))
    )
        ;
        for (const r of o.dataTransfer.files) {
            const o = $i(i);
            Ui(r) && (e.execute('imageUpload', {file: r, insertAt: o}), n.stop()), i = t.selection
        }
    }),
        e.editing.view.on('dragover', (e, t) = > {t.preventDefault()
    }),
        t.on('change', (e, t, n) = > {if('insert' === t || 'reinsert' === t || 'remove' === t
    )
        for (const e of n.range) if ('elementStart' === e.type && 'image' === e.item.name) {
            const n = e.item, i = n.getAttribute('uploadId');
            if (i) {
                const e = o.loaders.get(i);
                e && ('insert' === t && 'idle' == e.status && this.load(e, n), 'remove' === t && e.abort())
            }
        }
    })
    }

    load(e, n) {
        function o() {
            t.enqueueChanges(() = > {t.batch('transparent').removeAttribute(n, 'uploadId'), t.batch('transparent').removeAttribute(n, 'uploadStatus')
        }),
            a.destroyLoader(e)
        }

        const i = this.editor, r = i.locale.t, t = i.document, a = i.plugins.get(ff),
            s = i.plugins.get(Th);
        t.enqueueChanges(() = > {t.batch('transparent').setAttribute(n, 'uploadStatus', 'reading')
    }),
        e.read().then((o) = > {
            const r = i.editing.mapper.toViewElement(n),
            a = r.getChild(0),
            s = e.upload();
        return a.setAttribute('src', o), i.editing.view.render(), t.enqueueChanges(() = > {t.batch('transparent').setAttribute(n, 'uploadStatus', 'uploading')
    }),
        s
    }).
        then((e) = > {t.enqueueChanges(() = > {t.batch('transparent').setAttribute(n, 'uploadStatus', 'complete'), t.batch('transparent').setAttribute(n, 'src', e.default);
        let o = 0;
        const i = Object.keys(e).filter((e) = > {const t = parseInt(e, 10);
        if (!isNaN(t)) return o = ia(o, t), !0
    }).
        map((t) = > `${e[t]} ${t}w`
    ).
        join(', ');
        '' != i && t.batch('transparent').setAttribute(n, 'srcset', {data: i, width: o})
    }),
        o()
    }).
        catch((i) = > {'error' == e.status && s.showWarning(i, {
            title: r('Upload failed'),
            namespace: 'upload'
        }), o(), t.enqueueChanges(() = > {t.batch('transparent').remove(n)
    })
    })
    }
}

class Eh extends _g {
    constructor(e) {
        super(e), this.buttonView = new sf(e), this._fileInputView = new Sh(e), this._fileInputView.bind('acceptedType').to(this), this._fileInputView.bind('allowMultipleFiles').to(this), this._fileInputView.delegate('done').to(this), this.setTemplate({
            tag: 'span',
            attributes: {class: 'ck-file-dialog-button'},
            children: [this.buttonView, this._fileInputView]
        }), this.buttonView.on('execute', () = > {this._fileInputView.open()
    })
    }

    focus() {
        this.buttonView.focus()
    }
}

class Sh extends _g {
    constructor(e) {
        super(e), this.set('acceptedType'), this.set('allowMultipleFiles', !1);
        const t = this.bindTemplate;
        this.setTemplate({
            tag: 'input',
            attributes: {
                class: ['ck-hidden'],
                type: 'file',
                tabindex: '-1',
                accept: t.to('acceptedType'),
                multiple: t.to('allowMultipleFiles')
            },
            on: {
                change: t.to(() = > {this.element && this.element.files && this.element.files.length && this.fire('done', this.element.files),
                this.element.value = ''
        })
    }
    })
    }

    open() {
        this.element.click()
    }
}

var Vh = n(26), Oh = n.n(Vh);

class Rh extends cg {
    static get requires() {
        return [Ph]
    }

    init() {
        const e = this.editor, n = e.t;
        e.ui.componentFactory.add('insertImage', (t) = > {
            const o = new Eh(t),
            i = e.commands.get('imageUpload');
        return o.set({
            acceptedType: 'image/*',
            allowMultipleFiles: !0
        }), o.buttonView.set({
            label: n('Insert image'),
            icon: Oh.a,
            tooltip: !0
        }), o.bind('isEnabled').to(i), o.on('done', (t, n) = > {for(const o of Array.from(n)
    )
        {
            const t = $i(e.document.selection);
            Ui(o) && e.execute('imageUpload', {file: o, insertAt: t})
        }
    }),
        o
    })
    }
}

var Fh = n(27), Nh = n.n(Fh), Ih = n(28), Bh = n.n(Ih);

class Mh extends cg {
    static get requires() {
        return [Ph]
    }

    constructor(e) {
        super(e), this.placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(Nh.a)
    }

    init() {
        const e = this.editor;
        e.editing.modelToView.on('addAttribute:uploadStatus:image', (...e) =
    >
        this.uploadStatusChange(...e
    )),
        e.editing.modelToView.on('changeAttribute:uploadStatus:image', (...e) =
    >
        this.uploadStatusChange(...e
    ))
    }

    uploadStatusChange(e, t, n) {
        const o = this.editor, i = t.item, r = i.getAttribute('uploadId');
        if (n.consume(t.item, Le(e.name)) && r) {
            const e = o.plugins.get(ff), n = this.placeholder, a = t.attributeNewValue,
                s = o.editing.mapper.toViewElement(i);
            if ('reading' == a) {
                s.addClass('ck-appear', 'ck-infinite-progress', 'ck-image-upload-placeholder');
                const e = s.getChild(0);
                return void e.setAttribute('src', n)
            }
            if ('uploading' == a) {
                const t = e.loaders.get(r);
                if (t) {
                    const e = Qi();
                    s.removeClass('ck-infinite-progress', 'ck-image-upload-placeholder'), s.appendChildren(e), t.on('change:uploadedPercent', (t, n, i) = > {e.setStyle('width', i + '%'), o.editing.view.render()
                })
                }
                return
            }
            const l = Ji(s);
            l ? l.remove() : s.removeClass('ck-infinite-progress'), s.removeClass('ck-appear', 'ck-image-upload-placeholder')
        }
    }
}

const Dh = Symbol('progress-bar');

class Lh extends cg {
    static get pluginName() {
        return 'ImageUpload'
    }

    static get requires() {
        return [Rh, Mh]
    }
}

class jh extends cg {
    static get requires() {
        return [Gf, Ah, Lh]
    }

    static get pluginName() {
        return 'EasyImage'
    }
}

class zh extends zg {
    refresh() {
        const e = this.editor.document, t = Ro(e.selection.getSelectedBlocks());
        this.value = !!t && t.is('paragraph'), this.isEnabled = !!t && Gi(t, e.schema)
    }

    execute(e = {}) {
        const t = this.editor.document;
        t.enqueueChanges(() = > {
            const n = e.batch || t.batch(),
            o = (e.selection || t.selection).getSelectedBlocks();
        for (const e of o) !e.is('paragraph') && Gi(e, t.schema) && n.rename(e, 'paragraph')
    })
    }
}

class qh extends cg {
    static get pluginName() {
        return 'Paragraph'
    }

    init() {
        const e = this.editor, t = e.document, n = e.data, o = e.editing;
        e.commands.add('paragraph', new zh(e)), t.schema.registerItem('paragraph', '$block'), si().for(n.modelToView, o.modelToView).fromElement('paragraph').toElement('p'), di().for(n.viewToModel).fromElement('p').toElement('paragraph'), n.viewToModel.on('element', Yi, {priority: 'low'}), n.viewToModel.on('text', Yi, {priority: 'lowest'}), n.viewToModel.on('element', Xi, {priority: 'lowest'}), n.viewToModel.on('documentFragment', Xi, {priority: 'lowest'}), t.on('change', (e, n, o, i) = > {'transparent' == i.type || er(t, i)
    }),
        t.on('changesDone', tr, {priority: 'lowest'}), e.on('dataReady', () = > {er(t, t.batch('transparent')
    ),
        tr()
    },
        {
            priority:'lowest'
        }
    )
    }
}

qh.paragraphLikeElements = new Set(['blockquote', 'dd', 'div', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'p', 'td']);
const Hh = new Map;

class Wh extends zg {
    constructor(e, t) {
        super(e), this.modelElement = t
    }

    refresh() {
        const e = Ro(this.editor.document.selection.getSelectedBlocks());
        this.value = !!e && e.is(this.modelElement), this.isEnabled = !!e && nr(e, this.modelElement, this.editor.document.schema)
    }

    execute(e = {}) {
        const t = this.editor, n = t.document;
        n.enqueueChanges(() = > {
            const t = e.batch || n.batch(),
            o = Array.from(n.selection.getSelectedBlocks()).filter((e) = > nr(e, this.modelElement, n.schema)
    )
        ;
        for (const e of o) e.is(this.modelElement) || t.rename(e, this.modelElement)
    })
    }
}

const Uh = 'paragraph';

class $h extends cg {
    static get requires() {
        return [qh]
    }

    constructor(e) {
        super(e), e.config.define('heading', {
            options: [{
                modelElement: 'paragraph',
                title: 'Paragraph',
                class: 'ck-heading_paragraph'
            }, {
                modelElement: 'heading1',
                viewElement: 'h2',
                title: 'Heading 1',
                class: 'ck-heading_heading1'
            }, {
                modelElement: 'heading2',
                viewElement: 'h3',
                title: 'Heading 2',
                class: 'ck-heading_heading2'
            }, {
                modelElement: 'heading3',
                viewElement: 'h4',
                title: 'Heading 3',
                class: 'ck-heading_heading3'
            }]
        })
    }

    init() {
        const e = this.editor, t = e.data, n = e.editing, o = e.config.get('heading.options');
        for (const i of o) i.modelElement !== Uh && (e.document.schema.registerItem(i.modelElement, '$block'), si().for(t.modelToView, n.modelToView).fromElement(i.modelElement).toElement(i.viewElement), di().for(t.viewToModel).fromElement(i.viewElement).toElement(i.modelElement), e.commands.add(i.modelElement, new Wh(e, i.modelElement)))
    }

    afterInit() {
        const e = this.editor, t = e.commands.get('enter'), n = e.config.get('heading.options');
        t && this.listenTo(t, 'afterExecute', (t, o) = > {
            const i = e.document.selection.getFirstPosition().parent,
            r = o.batch,
            a = n.some((e) = > i.is(e.modelElement)
    )
        ;a && !i.is(Uh) && 0 === i.childCount && r.rename(i, Uh)
    })
    }
}

class Kh {
    constructor(e, t) {
        t && js(this, t), e && this.set(e)
    }
}

a(Kh, Us);

class Qh extends _g {
    constructor() {
        super(), this.items = this.createCollection(), this.focusTracker = new xg, this.keystrokes = new Op, this._focusCycler = new Ag({
            focusables: this.items,
            focusTracker: this.focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {focusPrevious: 'arrowup', focusNext: 'arrowdown'}
        }), this.setTemplate({
            tag: 'ul',
            attributes: {class: ['ck-reset', 'ck-list']},
            children: this.items
        })
    }

    render() {
        super.render();
        for (const e of this.items) this.focusTracker.add(e.element);
        this.items.on('add', (e, t) = > {this.focusTracker.add(t.element)
    }),
        this.items.on('remove', (e, t) = > {this.focusTracker.remove(t.element)
    }),
        this.keystrokes.listenTo(this.element)
    }

    focus() {
        this._focusCycler.focusFirst()
    }

    focusLast() {
        this._focusCycler.focusLast()
    }
}

class Jh extends _g {
    constructor() {
        super(), this.set('tabindex', -1), this.keystrokes = new Op;
        const e = this.bindTemplate;
        this.setTemplate({
            tag: 'li',
            attributes: {
                class: ['ck-list__item', e.to('class'), e.if('isActive', 'ck-list__item_active')],
                style: e.to('style'),
                tabindex: e.to('tabindex')
            },
            children: [{text: e.to('label')}],
            on: {click: e.to('execute')}
        })
    }

    render() {
        super.render();
        const e = (e, t) =
    >
        {
            this.fire('execute'), t()
        }
        ;this.keystrokes.listenTo(this.element), this.keystrokes.set('Enter', e), this.keystrokes.set('Space', e)
    }

    focus() {
        this.element.focus()
    }
}

class Gh extends _g {
    constructor(e, t, n) {
        super(e), t.extendTemplate({attributes: {class: ['ck-dropdown__button']}}), this.buttonView = t, this.panelView = n, this.set('isOpen', !1), this.focusTracker = new xg, this.keystrokes = new Op, this.setTemplate({
            tag: 'div',
            attributes: {class: ['ck-dropdown']},
            children: [t, n]
        })
    }

    render() {
        super.render(), this.listenTo(this.buttonView, 'execute', () = > {this.isOpen = !this.isOpen
    }),
        this.panelView.bind('isVisible').to(this, 'isOpen'), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
        const e = (e, t) =
    >
        {
            this.isOpen && (this.buttonView.focus(), this.isOpen = !1, t())
        }
        ;this.keystrokes.set('arrowdown', (e, t) = > {this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, t())
    }),
        this.keystrokes.set('arrowright', (e, t) = > {this.isOpen && t()
    }),
        this.keystrokes.set('arrowleft', e), this.keystrokes.set('esc', e)
    }

    focus() {
        this.buttonView.focus()
    }
}

class Yh extends _g {
    constructor(e) {
        super(e);
        const t = this.bindTemplate;
        this.set('isVisible', !1), this.children = this.createCollection(), this.setTemplate({
            tag: 'div',
            attributes: {class: ['ck-reset', 'ck-dropdown__panel', t.if('isVisible', 'ck-dropdown__panel-visible')]},
            children: this.children,
            on: {selectstart: t.to((e) = > e.preventDefault())
    }
    })
    }
}

var Xh = n(30), Zh = n.n(Xh);

class eb extends cg {
    static get requires() {
        return [qh, $h]
    }

    static get pluginName() {
        return 'Heading'
    }

    init() {
        const e = this.editor, n = new mg, o = this._getLocalizedOptions(), i = [], r = e.t,
            t = r('Choose heading'), a = r('Heading');
        for (const t of o) {
            const o = e.commands.get(t.modelElement),
                r = new Kh({commandName: t.modelElement, label: t.title, class: t.class});
            r.bind('isActive').to(o, 'value'), n.add(r), i.push(o)
        }
        const s = new Kh({withText: !0, items: n, tooltip: a});
        s.bind('isEnabled').to(...ar(i, 'isEnabled'), (...e
    )
        =
    >
        e.some((e) = > e
    )),
        s.bind('label').to(...ar(i, 'value'), (...e
    )
        =
    >
        {
            const n = e.findIndex((e) = > e
        )
            ;
            return o[n] ? o[n].title : t
        }
    ),
        e.ui.componentFactory.add('headings', (t) = > {const n = ir(s, t);
        return n.extendTemplate({attributes: {class: ['ck-heading-dropdown']}}), this.listenTo(n, 'execute', (t) = > {e.execute(t.source.commandName), e.editing.view.focus()
    }),
        n
    })
    }

    _getLocalizedOptions() {
        const e = this.editor, n = e.t, t = {
            Paragraph: n('Paragraph'),
            "Heading 1": n('Heading 1'),
            "Heading 2": n('Heading 2'),
            "Heading 3": n('Heading 3')
        };
        return e.config.get('heading.options').map((e) = > {const n = t[e.title];
        return n && n != e.title && (e = Object.assign({}, e, {title: n})), e
    })
    }
}

var tb = n(32), nb = n.n(tb);
const ob = {};
js(ob, Oa);
const ib = new WeakMap, rb = Symbol('imageCaption');

class ab extends cg {
    init() {
        const e = this.editor, n = e.document, o = e.editing.view, i = n.schema, r = e.data,
            a = e.editing, s = e.t;
        this._createCaption = mr(o, s('Enter image caption')), i.registerItem('caption', '$block'), i.allow({
            name: '$inline',
            inside: 'caption'
        }), i.allow({
            name: 'caption',
            inside: 'image'
        }), i.limits.add('caption'), n.on('change', gr), di().for(r.viewToModel).from(pr).toElement('caption'), r.modelToView.on('insert:caption', fr(new Yd('figcaption'), !1)), a.modelToView.on('insert:caption', fr(this._createCaption)), a.modelToView.on('insert', (e, t) = > this._fixCaptionVisibility(t.item), {priority: 'high'}
    ),
        a.modelToView.on('remove', (e, t) = > this._fixCaptionVisibility(t.sourcePosition.parent), {priority: 'high'}
    ),
        this.listenTo(o, 'render', () = > this._updateCaptionVisibility(), {priority: 'high'}
    )
    }

    _updateCaptionVisibility() {
        const e = this.editor.editing.mapper;
        let t;
        this._lastSelectedCaption && !this._lastSelectedCaption.childCount && this._lastSelectedCaption.addClass('ck-hidden');
        const n = this.editor.document.selection, o = n.getSelectedElement();
        if (o && o.is('image')) {
            const n = ur(o);
            t = e.toViewElement(n)
        }
        const i = n.getFirstPosition(), r = br(i.parent);
        r && (t = e.toViewElement(r)), t && (t.removeClass('ck-hidden'), this._lastSelectedCaption = t)
    }

    _fixCaptionVisibility(e) {
        const t = br(e), n = this.editor.editing.mapper;
        if (t) {
            const e = n.toViewElement(t);
            e && (t.childCount ? e.removeClass('ck-hidden') : e.addClass('ck-hidden'))
        }
    }
}

var sb = n(34), lb = n.n(sb);

class db extends cg {
    static get requires() {
        return [ab]
    }

    static get pluginName() {
        return 'ImageCaption'
    }
}

class cb extends zg {
    constructor(e, t) {
        super(e), this.style = t
    }

    refresh() {
        const e = this.editor.document.selection.getSelectedElement();
        this.isEnabled = Ii(e), this.value = !!e && (this.style.isDefault ? !e.hasAttribute('imageStyle') : e.getAttribute('imageStyle') == this.style.name)
    }

    execute(e = {}) {
        if (this.value) return;
        const t = this.editor.document, n = t.selection.getSelectedElement();
        t.enqueueChanges(() = > {const o = e.batch || t.batch();
        this.style.isDefault ? o.removeAttribute(n, 'imageStyle') : o.setAttribute(n, 'imageStyle', this.style.name)
    })
    }
}

var mb = n(36), ub = n.n(mb), pb = n(37), gb = n.n(pb), fb = n(38), hb = n.n(fb), bb = n(39),
    _b = n.n(bb);

class kb extends cg {
    static get requires() {
        return [rh]
    }

    static get pluginName() {
        return 'ImageStyleEngine'
    }

    get imageStyles() {
        if (this._cachedImageStyles) return this._cachedImageStyles;
        const e = [], t = this.editor, n = this.localizedDefaultStylesTitles,
            o = t.config.get('image.styles');
        for (let t of o) t = Ar(t), n[t.title] && (t.title = n[t.title]), e.push(t);
        return this._cachedImageStyles = e
    }

    get localizedDefaultStylesTitles() {
        const e = this.editor.t;
        return {
            "Full size image": e('Full size image'),
            "Side image": e('Side image'),
            "Left aligned image": e('Left aligned image'),
            "Centered image": e('Centered image'),
            "Right aligned image": e('Right aligned image')
        }
    }

    init() {
        const e = this.editor, t = e.document, n = t.schema, o = e.data, i = e.editing;
        e.config.define('image.styles', ['imageStyleFull', 'imageStyleSide']);
        const r = this.imageStyles;
        n.allow({name: 'image', attributes: 'imageStyle', inside: '$root'});
        const a = _r(r);
        i.modelToView.on('addAttribute:imageStyle:image', a), o.modelToView.on('addAttribute:imageStyle:image', a), i.modelToView.on('changeAttribute:imageStyle:image', a), o.modelToView.on('changeAttribute:imageStyle:image', a), i.modelToView.on('removeAttribute:imageStyle:image', a), o.modelToView.on('removeAttribute:imageStyle:image', a), o.viewToModel.on('element:figure', kr(r), {priority: 'low'});
        for (const t of r) e.commands.add(t.name, new cb(e, t))
    }
}

kb.defaultStyles = {
    imageStyleFull: {
        name: 'imageStyleFull',
        title: 'Full size image',
        icon: ub.a,
        isDefault: !0
    },
    imageStyleSide: {
        name: 'imageStyleSide',
        title: 'Side image',
        icon: _b.a,
        className: 'image-style-side'
    },
    imageStyleAlignLeft: {
        name: 'imageStyleAlignLeft',
        title: 'Left aligned image',
        icon: gb.a,
        className: 'image-style-align-left'
    },
    imageStyleAlignCenter: {
        name: 'imageStyleAlignCenter',
        title: 'Centered image',
        icon: hb.a,
        className: 'image-style-align-center'
    },
    imageStyleAlignRight: {
        name: 'imageStyleAlignRight',
        title: 'Right aligned image',
        icon: _b.a,
        className: 'image-style-align-right'
    }
}, kb.defaultIcons = {full: ub.a, left: gb.a, right: _b.a, center: hb.a};

class wb extends cg {
    static get requires() {
        return [kb]
    }

    static get pluginName() {
        return 'ImageStyle'
    }

    init() {
        const e = this.editor, t = e.plugins.get(kb).imageStyles;
        for (const e of t) this._createButton(e)
    }

    _createButton(e) {
        const t = this.editor, n = t.commands.get(e.name);
        t.ui.componentFactory.add(e.name, (o) = > {const i = new sf(o);
        return i.set({
            label: e.title,
            icon: e.icon,
            tooltip: !0
        }), i.bind('isEnabled').to(n, 'isEnabled'), i.bind('isOn').to(n, 'value'), this.listenTo(i, 'execute', () = > t.execute(e.name)
    ),
        i
    })
    }
}

class yb extends cg {
    static get requires() {
        return [vg]
    }

    static get pluginName() {
        return 'ImageToolbar'
    }

    get _isVisible() {
        return this._balloon.visibleView == this._toolbar
    }

    afterInit() {
        const e = this.editor, t = e.config.get('image.toolbar');
        t && t.length && (this._balloon = this.editor.plugins.get('ContextualBalloon'), this._toolbar = new Tg, this._toolbar.extendTemplate({attributes: {class: 'ck-editor-toolbar'}}), this._toolbar.fillFromConfig(t, e.ui.componentFactory), this.listenTo(e.editing.view, 'render', () = > {this._checkIsVisible()
    },
        {
            priority:'low'
        }
    ),
        this.listenTo(e.ui.focusTracker, 'change:isFocused', () = > {this._checkIsVisible()
    },
        {
            priority:'low'
        }
    ))
    }

    _checkIsVisible() {
        const e = this.editor;
        e.ui.focusTracker.isFocused ? Ni(e.editing.view.selection) ? this._showToolbar() : this._hideToolbar() : this._hideToolbar()
    }

    _showToolbar() {
        const e = this.editor;
        this._isVisible ? Hi(e) : !this._balloon.hasView(this._toolbar) && this._balloon.add({
            view: this._toolbar,
            position: Wi(e),
            balloonClassName: 'ck-toolbar-container ck-editor-toolbar-container'
        })
    }

    _hideToolbar() {
        this._isVisible && this._balloon.remove(this._toolbar)
    }
}

class vb extends Xp {
    constructor(e) {
        super(e), this.domEventType = 'click'
    }

    onDomEvent(e) {
        this.fire(e.type, e)
    }
}

class xb extends sc {
}

class Ab extends zg {
    refresh() {
        const e = this.editor.document;
        this.value = e.selection.getAttribute('linkHref'), this.isEnabled = e.schema.checkAttributeInSelection(e.selection, 'linkHref')
    }

    execute(e) {
        const t = this.editor.document, n = t.selection;
        t.enqueueChanges(() = > {const o = t.batch();
        if (n.isCollapsed) {
            const t = n.getFirstPosition();
            if (n.hasAttribute('linkHref')) {
                const t = Cr(n.getFirstPosition(), n.getAttribute('linkHref'));
                o.setAttribute(t, 'linkHref', e), n.setRanges([t])
            } else {
                const i = new Ks(e, {linkHref: e});
                o.insert(t, i), n.setRanges([el.createOn(i)])
            }
        } else {
            const i = t.schema.getValidRanges(n.getRanges(), 'linkHref');
            for (const t of i) o.setAttribute(t, 'linkHref', e)
        }
    })
    }
}

class Cb extends zg {
    refresh() {
        this.isEnabled = this.editor.document.selection.hasAttribute('linkHref')
    }

    execute() {
        const e = this.editor.document, t = e.selection;
        e.enqueueChanges(() = > {
            const n = t.isCollapsed ? [Cr(t.getFirstPosition(), t.getAttribute('linkHref'))] : t.getRanges(),
            o = e.batch();
        for (const e of n) o.removeAttribute(e, 'linkHref')
    })
    }
}

class Tb extends cg {
    init() {
        const e = this.editor, t = e.data, n = e.editing;
        e.document.schema.allow({
            name: '$inline',
            attributes: 'linkHref',
            inside: '$block'
        }), e.document.schema.allow({
            name: '$inline',
            attributes: 'linkHref',
            inside: '$clipboardHolder'
        }), si().for(t.modelToView, n.modelToView).fromAttribute('linkHref').toElement((e) = > {const t = new xb('a', {href: e});
        return t.priority = 5, t
    }),
        di().for(t.viewToModel).from({
            name: 'a',
            attribute: {href: /.?/}
        }).toAttribute((e) = > ({key: 'linkHref', value: e.getAttribute('href')})
    ),
        e.commands.add('link', new Ab(e)), e.commands.add('unlink', new Cb(e))
    }
}

class Pb extends _g {
    constructor(e) {
        super(e);
        const n = e.t;
        this.focusTracker = new xg, this.keystrokes = new Op, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(n('Save')), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(n('Cancel'), 'cancel'), this.unlinkButtonView = this._createButton(n('Unlink'), 'unlink'), this._focusables = new ug, this._focusCycler = new Ag({
            focusables: this._focusables,
            focusTracker: this.focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {focusPrevious: 'shift + tab', focusNext: 'tab'}
        }), this.saveButtonView.extendTemplate({attributes: {class: ['ck-button-action']}}), this.setTemplate({
            tag: 'form',
            attributes: {class: ['ck-link-form'], tabindex: '-1'},
            children: [this.urlInputView, {
                tag: 'div',
                attributes: {class: ['ck-link-form__actions']},
                children: [this.saveButtonView, this.cancelButtonView, this.unlinkButtonView]
            }]
        })
    }

    render() {
        super.render(), qi({view: this});
        const e = [this.urlInputView, this.saveButtonView, this.cancelButtonView, this.unlinkButtonView];
        e.forEach((e) = > {this._focusables.add(e), this.focusTracker.add(e.element)
    }),
        this.keystrokes.listenTo(this.element)
    }

    focus() {
        this._focusCycler.focusFirst()
    }

    _createUrlInput() {
        const e = this.locale.t, t = new gh(this.locale, fh);
        return t.label = e('Link URL'), t.inputView.placeholder = 'https://example.com', t
    }

    _createButton(e, t) {
        const n = new sf(this.locale);
        return n.label = e, n.withText = !0, t && n.delegate('execute').to(this, t), n
    }
}

var Eb = n(40), Sb = n.n(Eb), Vb = n(41), Ob = n.n(Vb);
const Rb = 'Ctrl+K';

class Fb extends cg {
    static get requires() {
        return [Tb, vg]
    }

    static get pluginName() {
        return 'Link'
    }

    init() {
        const e = this.editor;
        e.editing.view.addObserver(vb), this.formView = this._createForm(), this._balloon = e.plugins.get(vg), this._createToolbarLinkButton(), this._attachActions()
    }

    _createForm() {
        const e = this.editor, t = new Pb(e.locale), n = e.commands.get('link'),
            o = e.commands.get('unlink');
        return t.urlInputView.bind('value').to(n, 'value'), t.urlInputView.bind('isReadOnly').to(n, 'isEnabled', (e) = > !e
    ),
        t.saveButtonView.bind('isEnabled').to(n), t.unlinkButtonView.bind('isEnabled').to(o), this.listenTo(t, 'submit', () = > {e.execute('link', t.urlInputView.inputView.element.value), this._hidePanel(!0)
    }),
        this.listenTo(t, 'unlink', () = > {e.execute('unlink'), this._hidePanel(!0)
    }),
        this.listenTo(t, 'cancel', () = > this._hidePanel(!0)
    ),
        t.keystrokes.set('Esc', (e, t) = > {this._hidePanel(!0), t()
    }),
        t
    }

    _createToolbarLinkButton() {
        const e = this.editor, n = e.commands.get('link'), o = e.t;
        e.keystrokes.set(Rb, (e, t) = > {t(), n.isEnabled && this._showPanel(!0)
    }),
        e.ui.componentFactory.add('link', (e) = > {const t = new sf(e);
        return t.isEnabled = !0, t.label = o('Link'), t.icon = Sb.a, t.keystroke = Rb, t.tooltip = !0, t.bind('isEnabled').to(n, 'isEnabled'), this.listenTo(t, 'execute', () = > this._showPanel(!0)
    ),
        t
    })
    }

    _attachActions() {
        const e = this.editor.editing.view;
        this.listenTo(e, 'click', () = > {const e = this._getSelectedLinkElement();
        e && this._showPanel()
    }),
        this.editor.keystrokes.set('Tab', (e, t) = > {this._balloon.visibleView !== this.formView || this.formView.focusTracker.isFocused || (this.formView.focus(), t())
    },
        {
            priority:'high'
        }
    ),
        this.editor.keystrokes.set('Esc', (e, t) = > {this._balloon.visibleView === this.formView && (this._hidePanel(), t())
    }),
        zi({
            emitter: this.formView,
            activator: () = > this._balloon.hasView(this.formView), contextElements
    :
        [this._balloon.view.element], callback
    :
        () =
    >
        this._hidePanel()
    })
    }

    _showPanel(e) {
        const t = this.editor, n = t.commands.get('link'), o = t.commands.get('unlink'), i = t.editing,
            r = i.view, a = r.selection.isCollapsed, s = this._getSelectedLinkElement();
        this.listenTo(r, 'render', () = > {
            const e = this._getSelectedLinkElement(),
            t = r.selection.isCollapsed;
        a && !t || s !== e ? this._hidePanel(!0) : this._balloon.updatePosition(this._getBalloonPositionData())
    }),
        this._balloon.hasView(this.formView) ? e && this._balloon.visibleView === this.formView && this.formView.urlInputView.select() : (this._balloon.add({
            view: this.formView,
            position: this._getBalloonPositionData()
        }), e && this.formView.urlInputView.select()), this.formView.unlinkButtonView.isVisible = o.isEnabled, this.formView.urlInputView.inputView.element.value = n.value || ''
    }

    _hidePanel(e) {
        this.stopListening(this.editor.editing.view, 'render');
        this._balloon.hasView(this.formView) && (e && this.editor.editing.view.focus(), this.stopListening(this.editor.editing.view, 'render'), this._balloon.remove(this.formView))
    }

    _getBalloonPositionData() {
        const e = this.editor.editing.view, t = this._getSelectedLinkElement(),
            n = t ? e.domConverter.mapViewToDom(t) : e.domConverter.viewRangeToDom(e.selection.getFirstRange());
        return {target: n}
    }

    _getSelectedLinkElement() {
        const e = this.editor.editing.view.selection;
        if (e.isCollapsed) return Pr(e.getFirstPosition()); else {
            const t = e.getFirstRange().getTrimmed(), n = Pr(t.start), o = Pr(t.end);
            return n && n == o ? tc.createIn(n).getTrimmed().isEqual(t) ? n : null : null
        }
    }
}

class Nb extends zg {
    constructor(e, t) {
        super(e), this.type = 'bulleted' == t ? 'bulleted' : 'numbered'
    }

    refresh() {
        this.value = this._getValue(), this.isEnabled = this._checkEnabled()
    }

    execute(e = {}) {
        const t = this.editor.document,
            n = Array.from(t.selection.getSelectedBlocks()).filter((e) = > Sr(e, t.schema)
    ),
        o = !0 === this.value;
        t.enqueueChanges(() = > {const i = e.batch || t.batch();
        if (o) {
            let e = n[n.length - 1].nextSibling, t = na, o = [];
            for (; e && 'listItem' == e.name && 0 !== e.getAttribute('indent');) {
                const n = e.getAttribute('indent');
                n < t && (t = n);
                const i = n - t;
                o.push({element: e, indent: i}), e = e.nextSibling
            }
            o = o.reverse();
            for (const e of o) i.setAttribute(e.element, 'indent', e.indent)
        }
        if (!o) {
            let e = na;
            for (const t of n) t.is('listItem') && t.getAttribute('indent') < e && (e = t.getAttribute('indent'));
            e = 0 === e ? 1 : e, Er(n, !0, e), Er(n, !1, e)
        }
        for (const e of n.reverse()) o && 'listItem' == e.name ? i.rename(e, 'paragraph') : o || 'listItem' == e.name ? o || 'listItem' != e.name || e.getAttribute('type') == this.type || i.setAttribute(e, 'type', this.type) : i.setAttribute(e, 'type', this.type).setAttribute(e, 'indent', 0).rename(e, 'listItem')
    })
    }

    _getValue() {
        const e = Ro(this.editor.document.selection.getSelectedBlocks());
        return !!e && e.is('listItem') && e.getAttribute('type') == this.type
    }

    _checkEnabled() {
        if (this.value) return !0;
        const e = this.editor.document.selection, t = this.editor.document.schema,
            n = Ro(e.getSelectedBlocks());
        return !!n && Sr(n, t)
    }
}

class Ib extends zg {
    constructor(e, t) {
        super(e), this._indentBy = 'forward' == t ? 1 : -1
    }

    refresh() {
        this.isEnabled = this._checkEnabled()
    }

    execute() {
        const e = this.editor.document, t = e.batch();
        let n = Array.from(e.selection.getSelectedBlocks());
        e.enqueueChanges(() = > {const e = n[n.length - 1];
        for (let t = e.nextSibling; t && 'listItem' == t.name && t.getAttribute('indent') > e.getAttribute('indent');) n.push(t), t = t.nextSibling;
        0 > this._indentBy && (n = n.reverse());
        for (const e of n) {
            const n = e.getAttribute('indent') + this._indentBy;
            0 > n ? t.rename(e, 'paragraph') : t.setAttribute(e, 'indent', n)
        }
        0 > this._indentBy && (n = n.reverse());
        for (const e of n) Vr(e, t)
    })
    }

    _checkEnabled() {
        const e = Ro(this.editor.document.selection.getSelectedBlocks());
        if (!e || !e.is('listItem')) return !1;
        if (0 < this._indentBy) {
            const t = e.getAttribute('indent'), n = e.getAttribute('type');
            for (let o = e.previousSibling; o && o.is('listItem') && o.getAttribute('indent') >= t;) {
                if (o.getAttribute('indent') == t) return o.getAttribute('type') == n;
                o = o.previousSibling
            }
            return !1
        }
        return !0
    }
}

class Bb extends Yd {
    constructor(e, t) {
        super('li', e, t), this.getFillerOffset = Rr
    }
}

class Mb extends cg {
    static get requires() {
        return [qh]
    }

    init() {
        const e = this.editor, t = e.document.schema;
        t.registerItem('listItem', '$block'), t.allow({
            name: 'listItem',
            inside: '$root',
            attributes: ['type', 'indent']
        }), t.requireAttributes('listItem', ['type', 'indent']);
        const n = e.data, o = e.editing;
        this.editor.document.on('change', Wr(this.editor.document), {priority: 'high'}), this.editor.document.on('change', (e, t, n) = > {
            if(
            'move' == t
    )
        for (const e of n.range.getItems()) e.is('listItem') && o.mapper.unbindModelElement(e)
    },
        {
            priority:'high'
        }
    ),
        o.mapper.registerViewToModelLength('li', ta), n.mapper.registerViewToModelLength('li', ta), o.mapper.on('modelToViewPosition', qr), o.mapper.on('viewToModelPosition', Hr), n.mapper.on('modelToViewPosition', qr), o.modelToView.on('insert', Mr, {priority: 'high'}), o.modelToView.on('insert:listItem', Fr), n.modelToView.on('insert', Mr, {priority: 'high'}), n.modelToView.on('insert:listItem', Fr), o.modelToView.on('changeAttribute:type:listItem', Nr), n.modelToView.on('changeAttribute:type:listItem', Nr), o.modelToView.on('remove:listItem', Ir), o.modelToView.on('remove', Dr, {priority: 'low'}), n.modelToView.on('remove:listItem', Ir), n.modelToView.on('remove', Dr, {priority: 'low'}), o.modelToView.on('changeAttribute:indent:listItem', Br), n.modelToView.on('changeAttribute:indent:listItem', Br), n.viewToModel.on('element:ul', jr, {priority: 'high'}), n.viewToModel.on('element:ol', jr, {priority: 'high'}), n.viewToModel.on('element:li', zr, {priority: 'high'}), n.viewToModel.on('element:li', Lr), n.on('insertContent', Kr, {priority: 'high'}), e.commands.add('numberedList', new Nb(e, 'numbered')), e.commands.add('bulletedList', new Nb(e, 'bulleted')), e.commands.add('indentList', new Ib(e, 'forward')), e.commands.add('outdentList', new Ib(e, 'backward'))
    }
}

var Db = n(43), Lb = n.n(Db), jb = n(44), zb = n.n(jb);

class qb extends cg {
    static get requires() {
        return [Mb]
    }

    static get pluginName() {
        return 'List'
    }

    init() {
        const e = this.editor.t;
        this._addButton('numberedList', e('Numbered List'), Lb.a), this._addButton('bulletedList', e('Bulleted List'), zb.a), this.listenTo(this.editor.editing.view, 'enter', (e, t) = > {
            const n = this.editor.document,
            o = n.selection.getLastPosition().parent;
        n.selection.isCollapsed && 'listItem' == o.name && o.isEmpty && (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
    }),
        this.listenTo(this.editor.editing.view, 'delete', (e, t) = > {if('backward' === t.direction
    )
        {
            const n = this.editor.document.selection;
            if (n.isCollapsed) {
                const o = n.getFirstPosition();
                if (o.isAtStart) {
                    const n = o.parent;
                    if ('listItem' === n.name) {
                        const o = n.previousSibling && 'listItem' === n.previousSibling.name;
                        o || (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
                    }
                }
            }
        }
    },
        {
            priority:'high'
        }
    )
        ;const t = (e) =
    >
        (t, n) =
    >
        {
            const o = this.editor.commands.get(e);
            o.isEnabled && (this.editor.execute(e), n())
        }
        ;this.editor.keystrokes.set('Tab', t('indentList')), this.editor.keystrokes.set('Shift+Tab', t('outdentList'))
    }

    _addButton(e, t, n) {
        const o = this.editor, i = o.commands.get(e);
        o.ui.componentFactory.add(e, (r) = > {const a = new sf(r);
        return a.set({
            label: t,
            icon: n,
            tooltip: !0
        }), a.bind('isOn', 'isEnabled').to(i, 'value', 'isEnabled'), this.listenTo(a, 'execute', () = > o.execute(e)
    ),
        a
    })
    }
}

class Hb extends Bg {
}

t['default'] = Hb, Hb.build = {
    plugins: [pf, wf, Af, Rf, Mf, Wf, jh, eb, Ah, db, wb, yb, Fb, qb, qh, Lh],
    config: {
        toolbar: {items: ['headings', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo']},
        image: {toolbar: ['imageStyleFull', 'imageStyleSide', '|', 'imageTextAlternative']}
    }
}
},

function (e) {
    var t = function () {
        return this
    }();
    try {
        t = t || Function('return this')() || (1, eval)('this')
    } catch (n) {
        'object' == typeof window && (t = window)
    }
    e.exports = t
}

,

function (e, t) {
    'use strict';
    t.a = function (e) {
        return e && e.Object === Object ? e : null
    }
}

,

function (e, t, n) {
    'use strict';
    (function (e) {
        var o = n(8), i = n(2), r = {function: !0, object: !0},
            a = r[typeof exports] && exports && !exports.nodeType ? exports : void 0,
            s = r[typeof e] && e && !e.nodeType ? e : void 0, l = s && s.exports === a ? a : void 0,
            d = l ? i.a.Buffer : void 0, c = d ? function (e) {
                return e instanceof d
            } : Object(o.a)(!1);
        t.a = c
    }).call(t, n(3)(e))
}

,

function (e, t) {
    'use strict';
    t.a = function (e) {
        return function () {
            return e
        }
    }
}

,

function (e, t, n) {
    var o = n(10);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-hidden{display:none!important}.ck-reset,.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{box-sizing:border-box;width:auto;height:auto;position:static}svg.ck-icon{min-width:20px;min-height:20px;font-size:1em;vertical-align:middle}svg.ck-icon,svg.ck-icon *{color:inherit;cursor:inherit}svg.ck-icon *{fill:currentColor}.ck-tooltip,.ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:999}.ck-tooltip__text{display:inline-block}.ck-tooltip__text:after{content:"";width:0;height:0}.ck-button,a.ck-button{display:inline-block;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.ck-button .ck-tooltip,a.ck-button .ck-tooltip{display:block}.ck-button:hover .ck-tooltip,a.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck-button .ck-button__label,.ck-button:focus:not(:hover) .ck-tooltip,a.ck-button .ck-button__label,a.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck-toolbar__separator{display:inline-block}.ck-toolbar__newline{display:block;clear:left}.ck-dropdown{display:inline-block;position:relative}.ck-dropdown:after{content:"";width:0;height:0;pointer-events:none;z-index:1;position:absolute;top:50%;transform:translateY(-50%)}.ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:999;position:absolute;left:0;transform:translateY(100%)}.ck-dropdown__panel-visible{display:inline-block}.ck-label,.ck-list__item{display:block}.cke-voice-label{display:none}.ck-balloon-panel{display:none;position:absolute;z-index:999}.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:2}.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after{z-index:2}.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{z-index:1}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after{z-index:2}.ck-balloon-panel_visible{display:block}.ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:999;position:fixed;top:0}.ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck-reset,.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck-reset_all,.ck-reset_all *,.ck-reset_all a,.ck-reset_all textarea{border-collapse:collapse;font:normal normal normal 12px/1.67 Helvetica,Arial,Tahoma,Verdana,Sans-Serif;color:#333;text-align:left;white-space:nowrap;cursor:auto;float:none}.ck-reset_all .ck-rtl *{text-align:right}.ck-reset_all iframe{vertical-align:inherit}.ck-reset_all textarea{white-space:pre-wrap}.ck-reset_all input[type=password],.ck-reset_all input[type=text],.ck-reset_all textarea{cursor:text}.ck-reset_all input[type=password][disabled],.ck-reset_all input[type=text][disabled],.ck-reset_all textarea[disabled]{cursor:default}.ck-reset_all fieldset{padding:10px;border:2px groove #e0dfe3}.ck-reset_all button::-moz-focus-inner{padding:0;border:0}svg.ck-icon{width:1.67em;height:1.67em}.ck-tooltip{left:50%}.ck-tooltip__text{font-size:.9em;line-height:1.5;color:#fff;padding:.4em .64em;background:#333;position:relative;left:-50%}.ck-rounded-corners .ck-tooltip__text,.ck-tooltip__text.ck-rounded-corners{border-radius:2px}.ck-tooltip__text:after{border-style:solid;left:50%}.ck-tooltip.ck-tooltip_s{bottom:-5px;transform:translateY(100%)}.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:-5px;transform:translateX(-50%);border-color:transparent transparent #333;border-width:0 5px 5px}.ck-tooltip.ck-tooltip_n{top:-5px;transform:translateY(-100%)}.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:-5px;transform:translateX(-50%);border-color:#333 transparent transparent;border-width:5px 5px 0}.ck-tooltip,.ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}.ck-button,a.ck-button{background:#fff;border:1px solid #bfbfbf;white-space:nowrap;cursor:default;vertical-align:middle;padding:.4em;font-size:inherit}.ck-button:not(.ck-disabled):focus,.ck-button:not(.ck-disabled):hover,a.ck-button:not(.ck-disabled):focus,a.ck-button:not(.ck-disabled):hover{background:#e6e6e6;border-color:#acacac}.ck-button:not(.ck-disabled):active,a.ck-button:not(.ck-disabled):active{background:#d9d9d9;border-color:#a3a3a3;box-shadow:inset 0 2px 2px #bfbfbf}.ck-button.ck-disabled,a.ck-button.ck-disabled{background:#fff;border-color:#c6c6c6}.ck-button.ck-rounded-corners,.ck-rounded-corners .ck-button,.ck-rounded-corners a.ck-button,a.ck-button.ck-rounded-corners{border-radius:2px}.ck-button:focus,a.ck-button:focus{outline:none;border:1px solid #48a3f5;box-shadow:0 0 3px 2px #78bbf8}.ck-button .ck-icon,a.ck-button .ck-icon{float:left}.ck-button.ck-disabled .ck-button__label,.ck-button.ck-disabled .ck-icon,a.ck-button.ck-disabled .ck-button__label,a.ck-button.ck-disabled .ck-icon{opacity:.5}.ck-button.ck-button_with-text,a.ck-button.ck-button_with-text{padding:.4em .8em}.ck-button.ck-button_with-text .ck-icon,a.ck-button.ck-button_with-text .ck-icon{margin-left:-.4em;margin-right:.4em}.ck-button.ck-button_with-text .ck-button__label,a.ck-button.ck-button_with-text .ck-button__label{display:block}.ck-button.ck-on,a.ck-button.ck-on{background:#f7f7f7;border-color:#b9b9b9}.ck-button.ck-on:not(.ck-disabled):focus,.ck-button.ck-on:not(.ck-disabled):hover,a.ck-button.ck-on:not(.ck-disabled):focus,a.ck-button.ck-on:not(.ck-disabled):hover{background:#dedede;border-color:#a7a7a7}.ck-button.ck-on:not(.ck-disabled):active,a.ck-button.ck-on:not(.ck-disabled):active{background:#d2d2d2;border-color:#9d9d9d;box-shadow:inset 0 2px 2px #b9b9b9}.ck-button.ck-on.ck-disabled,a.ck-button.ck-on.ck-disabled{background:#f8f8f8;border-color:silver}.ck-button-action,a.ck-button-action{background:#61b145;border-color:#4e8e37;text-shadow:0 -1px #4e8e37;color:#fff}.ck-button-action:not(.ck-disabled):focus,.ck-button-action:not(.ck-disabled):hover,a.ck-button-action:not(.ck-disabled):focus,a.ck-button-action:not(.ck-disabled):hover{background:#579f3e;border-color:#467f32}.ck-button-action:not(.ck-disabled):active,a.ck-button-action:not(.ck-disabled):active{background:#52963b;border-color:#42782f;box-shadow:inset 0 2px 2px #498534}.ck-button-action.ck-disabled,a.ck-button-action.ck-disabled{background:#6fbc54;border-color:#5aa440}.ck-button-action:active,.ck-button-action:focus,.ck-button-action:hover,a.ck-button-action:active,a.ck-button-action:focus,a.ck-button-action:hover{text-shadow:0 -1px #3a6a29}.ck-button-bold,a.ck-button-bold{font-weight:700}.ck-button .ck-icon use,.ck-button .ck-icon use *,a.ck-button .ck-icon use,a.ck-button .ck-icon use *{color:inherit}.ck-button .ck-button__label,a.ck-button .ck-button__label{font-size:inherit;float:left;height:1.67em;line-height:inherit;font-weight:inherit;color:inherit;cursor:inherit}.ck-toolbar{padding:.4em;border:1px solid #bfbfbf;white-space:normal;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.ck-toolbar_floating{white-space:nowrap}.ck-rounded-corners .ck-toolbar,.ck-toolbar.ck-rounded-corners{border-radius:2px}.ck-toolbar__separator{width:1px;height:2.28em;vertical-align:middle;background:#bfbfbf}.ck-toolbar__newline{height:.4em}.ck-toolbar>*{margin-right:.4em}.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck-toolbar{border:0}.ck-dropdown{font-size:inherit}.ck-dropdown:after{border-style:solid;border-width:.4em .4em 0;border-color:#707070 transparent;right:.8em}.ck-dropdown .ck-button.ck-dropdown__button{padding-right:1.6em}.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:.5}.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck-dropdown__panel{background:#fff;border:1px solid #bfbfbf;bottom:1px;box-shadow:0 1px 2px 0 rgba(0,0,0,.2)}.ck-dropdown__panel.ck-rounded-corners,.ck-rounded-corners .ck-dropdown__panel{border-radius:2px}.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;overflow:hidden;list-style-type:none;background:#fff}.ck-list.ck-rounded-corners,.ck-rounded-corners .ck-list{border-radius:2px}.ck-list__item{padding:.64em;cursor:default;min-width:12em}.ck-list__item:focus,.ck-list__item:hover{background:#f7f7f7}.ck-list__item:focus{box-shadow:0 0 3px 2px #78bbf8;position:relative;z-index:1;outline:none}.ck-list__item_active{background:#1a8bf1;color:#fff}.ck-list__item_active:focus,.ck-list__item_active:hover{background:#0e7ee2}.ck-label{font-weight:700}.ck-input-text{box-shadow:inset 2px 2px 3px rgba(0,0,0,.1);background:#fff;border:1px solid #bfbfbf;padding:.4em .64em;min-width:21em}.ck-input-text.ck-rounded-corners,.ck-rounded-corners .ck-input-text{border-radius:2px}.ck-input-text:focus{outline:none;border:1px solid #48a3f5;box-shadow:0 0 3px 2px #78bbf8,inset 2px 2px 3px rgba(0,0,0,.1)}.ck-input-text[readonly]{border:1px solid #c6c6c6;background:#f2f2f2;color:#5c5c5c}.ck-editor__editable.ck-rounded-corners,.ck-rounded-corners .ck-editor__editable{border-radius:2px}.ck-editor__editable.ck-focused{outline:none;border:1px solid #48a3f5;box-shadow:inset 2px 2px 3px rgba(0,0,0,.1)}.ck-editor__editable_inline{overflow:auto;padding:0 .8em;border:1px solid transparent}.ck-editor-toolbar .ck-button{border-width:0}.ck-editor-toolbar .ck-button.ck-disabled,.ck-editor-toolbar .ck-button:not(:hover):not(:focus):not(.ck-on){background:#f7f7f7}.ck-editor-toolbar .ck-button.ck-on{background:#dedede;border-color:#acacac}.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):focus,.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):hover{background:#c6c6c6;border-color:#999}.ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):active{background:#b9b9b9;border-color:#8f8f8f;box-shadow:inset 0 2px 2px #a1a1a1}.ck-editor-toolbar .ck-button.ck-on.ck-disabled{background:#f7f7f7;border-color:#bfbfbf}.ck-editor-toolbar .ck-button.ck-dropdown__button{border-width:1px}.ck-editor-toolbar .ck-button.ck-dropdown__button:not(:hover):not(:focus):not(.ck-on){background:#fff}.ck-toolbar-container .ck-editor-toolbar{background:#f7f7f7}.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_n:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_ne:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_nw:after{border-bottom-color:#f7f7f7}.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_s:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_se:after,.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_sw:after{border-top-color:#f7f7f7}.ck-balloon-panel{box-shadow:0 1px 2px 0 rgba(0,0,0,.2);min-height:15px;background:#fff;border:1px solid #bfbfbf}.ck-balloon-panel.ck-rounded-corners,.ck-rounded-corners .ck-balloon-panel{border-radius:2px}.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{border-width:0 10px 15px}.ck-balloon-panel.ck-balloon-panel_arrow_n:before,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{border-color:transparent transparent #bfbfbf}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:after{border-color:transparent transparent #fff;margin-top:2px}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{border-width:15px 10px 0}.ck-balloon-panel.ck-balloon-panel_arrow_s:before,.ck-balloon-panel.ck-balloon-panel_arrow_se:before,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{border-color:#bfbfbf transparent transparent}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:after{border-color:#fff transparent transparent;margin-bottom:2px}.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:-10px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:20px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:20px;top:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:-10px;bottom:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:20px;bottom:-15px}.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:20px;bottom:-15px}.ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:0 1px 2px 0 rgba(0,0,0,.2);border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}', ''])
}

,

function (e) {
    e.exports = function (e) {
        var t = 'undefined' != typeof window && window.location;
        if (!t) throw new Error('fixUrls requires window.location');
        if (!e || 'string' != typeof e) return e;
        var n = t.protocol + '//' + t.host, o = n + t.pathname.replace(/\/[^\/]*$/, '/'),
            i = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
                var r;
                return r = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : o + i.replace(/^\.\//, ''), 'url(' + JSON.stringify(r) + ')'
            });
        return i
    }
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10l8 6-1-3.982c3.417 0 8.616.869 10 3.982 0-5.983-6.601-7.96-10-7.96 0-.85 1-3.32 1-4.04l-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 16l1-3.982c-3.417 0-8.616.869-10 3.982 0-5.983 6.601-7.96 10-7.96 0-.85-1-3.32-1-4.04l8 6-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.135 10.409c.361.248.654.56.88.934.225.375.338.816.338 1.324 0 .609-.128 1.123-.385 1.543-.256.42-.624.751-1.103.994a5.908 5.908 0 0 1-1.755.55c-.663.107-1.442.16-2.338.16H4.539v-.66a22.5 22.5 0 0 0 .66-.076c.265-.033.45-.073.558-.118.208-.085.35-.196.427-.334.076-.138.114-.317.114-.537V5.732c0-.203-.031-.372-.093-.507s-.211-.254-.448-.355a3.326 3.326 0 0 0-.61-.182 14.136 14.136 0 0 0-.608-.114v-.66h6.52c1.64 0 2.825.226 3.552.677.727.45 1.09 1.116 1.09 1.995 0 .406-.08.763-.244 1.07a2.388 2.388 0 0 1-.702.8 4.214 4.214 0 0 1-.99.54c-.383.153-.795.28-1.234.381v.16c.44.046.896.143 1.37.292.473.15.885.343 1.234.58zm-2.723-3.611c0-.665-.187-1.184-.562-1.556-.375-.372-.937-.558-1.687-.558-.107 0-.247.004-.419.012l-.444.021v4.449h.44c.913 0 1.587-.213 2.021-.639.434-.425.651-1.002.651-1.73zm.592 5.759c0-.835-.248-1.475-.744-1.92-.496-.445-1.21-.668-2.14-.668a22.977 22.977 0 0 0-.82.034v4.389c.05.208.209.385.474.528.265.144.586.216.964.216.67 0 1.216-.225 1.636-.676.42-.452.63-1.086.63-1.903z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.825 3.914l-.126.558a5.701 5.701 0 0 0-.685.076c-.282.045-.49.088-.626.127-.237.073-.406.186-.508.338a1.586 1.586 0 0 0-.22.5l-2.03 8.769a1.24 1.24 0 0 0-.034.27c.001.13.03.24.086.33.056.09.157.17.304.237.085.04.27.086.558.14.288.053.502.086.643.097l-.127.558H5.656l.127-.558.677-.05c.293-.023.501-.057.625-.102a1.11 1.11 0 0 0 .5-.326c.112-.138.188-.306.228-.503l2.02-8.778a1.428 1.428 0 0 0 .035-.305.59.59 0 0 0-.072-.295c-.048-.085-.148-.161-.3-.229a3.457 3.457 0 0 0-.622-.19 5.001 5.001 0 0 0-.58-.106l.128-.558h5.403z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.061 15.51v-.882c1.395-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.902.185-.547 0-1.033-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.05-.78c.93 0 1.757.39 2.482 1.17.724.778 1.087 1.742 1.087 2.89 0 1.614-.602 3.084-1.805 4.41-.807.875-1.976 1.593-3.507 2.153zm-8.386 0v-.882c1.394-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.903.185-.547 0-1.032-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.051-.78c.93 0 1.757.39 2.481 1.17.725.778 1.087 1.742 1.087 2.89 0 1.614-.601 3.084-1.804 4.41-.807.875-1.976 1.593-3.507 2.153z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e, t, n) {
    var o = n(18);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, 'blockquote{border-left:5px solid #ccc;padding-left:20px;margin-left:0;font-style:italic;overflow:hidden}', ''])
}

,

function (e, t, n) {
    var o = n(20);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-widget{margin:.8em 0;padding:0}.ck-widget.ck-widget_selected,.ck-widget.ck-widget_selected:hover{outline:3px solid #48a3f5}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected{outline:3px solid #ddd}.ck-widget:hover{outline:3px solid #ffd25c}.ck-widget .ck-editable{border:1px solid transparent}.ck-widget .ck-editable.ck-editable_focused,.ck-widget .ck-editable:focus{outline:none;border:1px solid #48a3f5;box-shadow:inset 2px 2px 3px rgba(0,0,0,.1);background-color:#fff}', ''])
}

,

function (e) {
    e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M5.414 6.749L2.903 4.237a.49.49 0 1 1 .694-.694L6.394 6.34a10.662 10.662 0 0 1 2.127-.53c.366-.051.734-.081 1.103-.095a10.628 10.628 0 0 1 1.524.07c1.109.134 2.204.449 3.243.936a9.65 9.65 0 0 1 2.12 1.331c.276.231.542.484.784.766.18.211.349.439.488.692.169.307.301.664.301 1.039 0 .375-.132.732-.301 1.039a4.143 4.143 0 0 1-.488.691 6.668 6.668 0 0 1-.784.767 9.628 9.628 0 0 1-2.092 1.318l2.196 2.197a.49.49 0 1 1-.694.694l-2.485-2.484-.008.003-.931-.931.009-.003-6.215-6.215a9.887 9.887 0 0 0-.945.444l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.483 8.596a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2 1.497 1.497 0 0 0-.108.241.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226 2.613 2.613 0 0 0 .234.379l3.463 3.594a10.565 10.565 0 0 1-2.125-1 9.096 9.096 0 0 1-1.015-.721 6.672 6.672 0 0 1-.798-.764 4.325 4.325 0 0 1-.502-.69c-.184-.319-.329-.693-.329-1.089 0-.375.131-.732.301-1.039.139-.253.307-.481.488-.692.225-.263.471-.5.728-.719a9.538 9.538 0 0 1 2.096-1.341l.019-.009zm6.674.401a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112 6.86 6.86 0 0 0 .727-.613c.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286a1.966 1.966 0 0 0 .148-.292.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891 10.119 10.119 0 0 0-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.449 2.449 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>'
}

,

function (e, t, n) {
    var o = n(23);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.cke-text-alternative-form{padding:1.2em;overflow:hidden}.cke-text-alternative-form:focus{outline:none}.cke-text-alternative-form .ck-label{margin-bottom:.4em}.cke-text-alternative-form__actions{clear:both;padding-top:1.2em}.cke-text-alternative-form__actions .ck-button{float:right}.cke-text-alternative-form__actions .ck-button+.ck-button{margin-right:.64em}.cke-text-alternative-form__actions .ck-button+.ck-button+.ck-button{float:left}', ''])
}

,

function (e, t, n) {
    var o = n(25);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-editor__editable .image{text-align:center;clear:both}.ck-editor__editable .image.image-style-align-center,.ck-editor__editable .image.image-style-align-left,.ck-editor__editable .image.image-style-align-right,.ck-editor__editable .image.image-style-side{max-width:50%}.ck-editor__editable .image.image-style-side{float:right;margin-left:2em}.ck-editor__editable .image.image-style-align-left{float:left;margin-right:2em}.ck-editor__editable .image.image-style-align-center{margin-left:auto;margin-right:auto}.ck-editor__editable .image.image-style-align-right{float:right;margin-left:2em}.ck-editor__editable .image>img{display:block;margin:0 auto;max-width:100%}', ''])
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.994C2 16.102 2.895 17 3.994 17h12.012A2 2 0 0 0 18 14.994V5.006A2.001 2.001 0 0 0 16.006 3H3.994A2 2 0 0 0 2 5.006v9.988zm1-9.992C3 4.45 3.45 4 4.007 4h11.986A1.01 1.01 0 0 1 17 5.002v9.996C17 15.55 16.55 16 15.993 16H4.007A1.01 1.01 0 0 1 3 14.998V5.002zm1.024 10H16v-3.096l-2.89-4.263-3.096 5.257-3.003-2.103L4 13.96l.024 1.043zM6.406 6A1.4 1.4 0 0 0 5 7.393a1.4 1.4 0 0 0 1.406 1.393 1.4 1.4 0 0 0 1.407-1.393A1.4 1.4 0 0 0 6.406 6z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#F7F7F7" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n'
}

,

function (e, t, n) {
    var o = n(29);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, 'figure.image{position:relative;overflow:hidden}figure.image.ck-appear{animation:fadeIn .7s}figure.image.ck-infinite-progress:before{content:"";width:30px;height:2px;position:absolute;top:0;right:0;background:rgba(0,0,0,.1);animation-name:readingProgressAnimation;animation-duration:1.5s;animation-iteration-count:infinite;transition-timing-function:linear}figure.image.ck-image-upload-placeholder>img{width:100%}figure.image .ck-progress-bar{height:2px;width:0;position:absolute;top:0;left:0;background:#6ab5f9;transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes readingProgressAnimation{0%{width:30px;right:0}50%{width:45px}to{right:100%}}', ''])
}

,

function (e, t, n) {
    var o = n(31);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-heading_heading1{font-size:1.5em}.ck-heading_heading2{font-size:1.3em}.ck-heading_heading3{font-size:1.1em}[class*=ck-heading_]{line-height:21.6px;padding:9.6px}[class*=ck-heading_heading]{font-weight:700}.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}', ''])
}

,

function (e, t, n) {
    var o = n(33);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-placeholder:before{content:attr(data-placeholder);cursor:text;color:#c2c2c2;pointer-events:none}', ''])
}

,

function (e, t, n) {
    var o = n(35);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-editor__editable .image>figcaption{color:#333;background-color:#f7f7f7;padding:.8em;font-size:.75em;outline-offset:-1px}', ''])
}

,

function (e) {
    e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h16v1H2v-1zm15-2H3V6h14v8zm-1-7H4v6h12V7zM2 3h16v1H2V3z"/></svg>'
}

,

function (e) {
    e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 15h16v1H2v-1zm11-3h5v1h-5v-1zm-2 1H2V6h9v7zm-1-6H3v5h7V7zm3 2h5v1h-5V9zm0-3h5v1h-5V6zM2 3h16v1H2V3z"/></svg>'
}

,

function (e) {
    e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M2 15h16v1H2v-1zm13-2H5V6h10v7zm-1-6H6v5h8V7zM2 3h16v1H2V3z" fill-rule="nonzero"/></svg>'
}

,

function (e) {
    e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 16H2v-1h16v1zM6.978 13H2v-1h4.978v1zM18 6v7H9V6h9zm-1 6V7h-7v5h7zM6.978 10H2V9h4.978v1zm0-3H2V6h4.978v1zM18 4H2V3h16v1z"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#222" fill-rule="evenodd"><path d="M14.2 10.956l1.227-1.227a3.995 3.995 0 0 0-.002-5.654 4 4 0 0 0-5.654-.002L7.698 6.145a3.995 3.995 0 0 0 .003 5.654c.39.39.84.682 1.32.878l-.305-.307.638-.638a2.99 2.99 0 0 1-.946-.64 2.995 2.995 0 0 1-.003-4.24l2.073-2.072a3 3 0 0 1 4.242 4.242l-1.226 1.227.707.707z"/><path d="M10.166 7.405c.41.192.795.457 1.133.796a3.995 3.995 0 0 1 .003 5.654l-2.073 2.072a4 4 0 0 1-5.654-.002 3.995 3.995 0 0 1-.002-5.654l1.362-1.363.707.707-1.362 1.363a3 3 0 0 0 4.243 4.243l2.072-2.073a2.995 2.995 0 0 0-.003-4.24 2.987 2.987 0 0 0-1.196-.733l.77-.77z"/></g></svg>'
}

,

function (e, t, n) {
    var o = n(42);
    'string' == typeof o && (o = [[e.i, o, '']]);
    var i = {}, r;
    i.transform = r;
    n(1)(o, i);
    o.locals && (e.exports = o.locals), !1
}

,

function (e, t, n) {
    t = e.exports = n(0)(void 0), t.push([e.i, '.ck-link-form{padding:1.2em;overflow:hidden}.ck-link-form:focus{outline:none}.ck-link-form .ck-input-text{width:100%}.ck-link-form .ck-label{margin-bottom:.2em}.ck-link-form__actions{clear:both;padding-top:1.2em}.ck-link-form__actions .ck-button{float:right}.ck-link-form__actions .ck-button+.ck-button{margin-right:.64em}.ck-link-form__actions .ck-button:last-child{float:left;margin-right:2.56em}', ''])
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 17h10v-1H7v1zM6 4v1h13V4H6zm1 6v1h11v-1H7zM2 2.5c0 .277.223.5.5.5H3v3.5a.499.499 0 1 0 1 0v-4c0-.277-.223-.5-.5-.5h-1c-.277 0-.5.223-.5.5zM2.5 8a.499.499 0 1 0 0 1H4v1H2.5c-.277 0-.5.223-.5.5v2c0 .277.223.5.5.5h2a.499.499 0 1 0 0-1H3v-1h1.5a.46.46 0 0 0 .188-.031.45.45 0 0 0 .28-.281A.461.461 0 0 0 5 10.5v-2a.46.46 0 0 0-.031-.187.45.45 0 0 0-.282-.282.463.463 0 0 0-.125-.03H2.5V8zm2.352 10.853a.493.493 0 0 0 .148-.35v-4.005A.493.493 0 0 0 4.505 14h-2.01a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5h2.01a.49.49 0 0 0 .351-.146z" fill="#454545" fill-rule="evenodd"/></svg>'
}

,

function (e) {
    e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 16v1h10v-1H6zM6 4v1h12V4H6zm0 6v1h11v-1H6zM1 4.5C1 3.672 1.666 3 2.5 3 3.328 3 4 3.666 4 4.5 4 5.328 3.334 6 2.5 6 1.672 6 1 5.334 1 4.5zm0 6C1 9.672 1.666 9 2.5 9c.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm0 6c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" fill="#454545" fill-rule="evenodd"/></svg>'
}

])
['default']
})
;

},
{
}
],
3
:
[function (require, module, exports) {
    let mainText = {
        heading: {
            options: [
                {modelElement: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
                {modelElement: 'heading1', viewElement: 'h1', title: 'Taille 1', class: 'ck-heading_heading1'},
                {modelElement: 'heading2', viewElement: 'h2', title: 'Taille 2', class: 'ck-heading_heading2'}
            ]
        },
        image: {
            // You need to configure the image toolbar too, so it uses the new style buttons.
            toolbar: ['imageTextAlternative', '|', 'imageStyleAlignLeft', 'imageStyleFull', 'imageStyleAlignRight'],

            styles: [
                // This option is equal to a situation where no style is applied.
                'imageStyleFull',

                // This represents an image aligned to left.
                'imageStyleAlignLeft',

                // This represents an image aligned to right.
                'imageStyleAlignRight'
            ]
        }
    }

    let coverImage = {
        image: {
            // You need to configure the image toolbar too, so it uses the new style buttons.
            toolbar: [],

            styles: [
                // This option is equal to a situation where no style is applied.
                'imageStyleFull',
            ]
        }
    }

    let blogTitle = {
        removePlugins: ['Bold', 'Italic', 'List', 'Block Quote'],
        heading: {
            options: [
                {modelElement: 'heading2', viewElement: 'h2', title: 'Taille 2', class: 'ck-heading_heading2'}
            ]
        }
    }

    let info = {toolbar: []}


    /*Exporting Configurations*/
    exports.info = info;
    exports.blogTitle = blogTitle;
    exports.Cover = coverImage;
    exports.mainText = mainText;

}, {}]
},
{
}
,
[1]
)
;
