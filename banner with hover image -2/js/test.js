(self.webpackChunk_roots_bud_sage_sage = self.webpackChunk_roots_bud_sage_sage || []).push([
    [143],
    {
        "./scripts/app.js": (t, e, i) => {
            "use strict";
            var r = i("../node_modules/@roots/bud-client/lib/dom-ready.js"),
                n = i("../node_modules/vanilla-lazyload/dist/lazyload.min.js"),
                s = i.n(n);
            function o() {
                if (!(this instanceof o)) return new o();
                (this.size = 0), (this.uid = 0), (this.selectors = []), (this.selectorObjects = {}), (this.indexes = Object.create(this.indexes)), (this.activeIndexes = []);
            }
            var a = window.document.documentElement,
                l = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector;
            (o.prototype.matchesSelector = function (t, e) {
                return l.call(t, e);
            }),
                (o.prototype.querySelectorAll = function (t, e) {
                    return e.querySelectorAll(t);
                }),
                (o.prototype.indexes = []);
            var h = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            o.prototype.indexes.push({
                name: "ID",
                selector: function (t) {
                    var e;
                    if ((e = t.match(h))) return e[0].slice(1);
                },
                element: function (t) {
                    if (t.id) return [t.id];
                },
            });
            var c = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            o.prototype.indexes.push({
                name: "CLASS",
                selector: function (t) {
                    var e;
                    if ((e = t.match(c))) return e[0].slice(1);
                },
                element: function (t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/);
                    }
                },
            });
            var u,
                d = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            o.prototype.indexes.push({
                name: "TAG",
                selector: function (t) {
                    var e;
                    if ((e = t.match(d))) return e[0].toUpperCase();
                },
                element: function (t) {
                    return [t.nodeName.toUpperCase()];
                },
            }),
                (o.prototype.indexes.default = {
                    name: "UNIVERSAL",
                    selector: function () {
                        return !0;
                    },
                    element: function () {
                        return [!0];
                    },
                }),
                (u =
                    "function" == typeof window.Map
                        ? window.Map
                        : (function () {
                            function t() {
                                this.map = {};
                            }
                            return (
                                (t.prototype.get = function (t) {
                                    return this.map[t + " "];
                                }),
                                (t.prototype.set = function (t, e) {
                                    this.map[t + " "] = e;
                                }),
                                t
                            );
                        })());
            var p = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
            function f(t, e) {
                var i,
                    r,
                    n,
                    s,
                    o,
                    a,
                    l = (t = t.slice(0).concat(t.default)).length,
                    h = e,
                    c = [];
                do {
                    if ((p.exec(""), (n = p.exec(h)) && ((h = n[3]), n[2] || !h)))
                        for (i = 0; i < l; i++)
                            if ((o = (a = t[i]).selector(n[1]))) {
                                for (r = c.length, s = !1; r--;)
                                    if (c[r].index === a && c[r].key === o) {
                                        s = !0;
                                        break;
                                    }
                                s || c.push({ index: a, key: o });
                                break;
                            }
                } while (n);
                return c;
            }
            function m(t, e) {
                var i, r, n;
                for (i = 0, r = t.length; i < r; i++) if (((n = t[i]), e.isPrototypeOf(n))) return n;
            }
            function g(t, e) {
                return t.id - e.id;
            }
            (o.prototype.logDefaultIndexUsed = function () { }),
                (o.prototype.add = function (t, e) {
                    var i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c = this.activeIndexes,
                        d = this.selectors,
                        p = this.selectorObjects;
                    if ("string" == typeof t) {
                        for (p[(i = { id: this.uid++, selector: t, data: e }).id] = i, l = f(this.indexes, t), r = 0; r < l.length; r++)
                            (s = (h = l[r]).key),
                                (o = m(c, (n = h.index))) || (((o = Object.create(n)).map = new u()), c.push(o)),
                                n === this.indexes.default && this.logDefaultIndexUsed(i),
                                (a = o.map.get(s)) || ((a = []), o.map.set(s, a)),
                                a.push(i);
                        this.size++, d.push(t);
                    }
                }),
                (o.prototype.remove = function (t, e) {
                    if ("string" == typeof t) {
                        var i,
                            r,
                            n,
                            s,
                            o,
                            a,
                            l,
                            h,
                            c = this.activeIndexes,
                            u = (this.selectors = []),
                            d = this.selectorObjects,
                            p = {},
                            m = 1 === arguments.length;
                        for (i = f(this.indexes, t), n = 0; n < i.length; n++)
                            for (r = i[n], s = c.length; s--;)
                                if (((a = c[s]), r.index.isPrototypeOf(a))) {
                                    if ((l = a.map.get(r.key))) for (o = l.length; o--;) (h = l[o]).selector !== t || (!m && h.data !== e) || (l.splice(o, 1), (p[h.id] = !0));
                                    break;
                                }
                        for (n in p) delete d[n], this.size--;
                        for (n in d) u.push(d[n].selector);
                    }
                }),
                (o.prototype.queryAll = function (t) {
                    if (!this.selectors.length) return [];
                    var e,
                        i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h = {},
                        c = [],
                        u = this.querySelectorAll(this.selectors.join(", "), t);
                    for (e = 0, r = u.length; e < r; e++)
                        for (s = u[e], i = 0, n = (o = this.matches(s)).length; i < n; i++)
                            h[(l = o[i]).id] ? (a = h[l.id]) : ((a = { id: l.id, selector: l.selector, data: l.data, elements: [] }), (h[l.id] = a), c.push(a)), a.elements.push(s);
                    return c.sort(g);
                }),
                (o.prototype.matches = function (t) {
                    if (!t) return [];
                    var e,
                        i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d = this.activeIndexes,
                        p = {},
                        f = [];
                    for (e = 0, n = d.length; e < n; e++)
                        if ((l = (a = d[e]).element(t)))
                            for (i = 0, s = l.length; i < s; i++) if ((h = a.map.get(l[i]))) for (r = 0, o = h.length; r < o; r++) !p[(u = (c = h[r]).id)] && this.matchesSelector(t, c.selector) && ((p[u] = !0), f.push(c));
                    return f.sort(g);
                });
            const v = {},
                _ = {},
                y = ["mouseenter", "mouseleave", "pointerenter", "pointerleave", "blur", "focus"];
            function w(t) {
                void 0 === _[t] && (_[t] = new Set());
            }
            function b(t) {
                return "string" == typeof t ? document.querySelectorAll(t) : t;
            }
            function x(t) {
                let e = (function (t, e) {
                    const i = [];
                    let r = e;
                    do {
                        if (1 !== r.nodeType) break;
                        const e = t.matches(r);
                        e.length && i.push({ delegatedTarget: r, stack: e });
                    } while ((r = r.parentElement));
                    return i;
                })(v[t.type], t.target);
                if (e.length)
                    for (let i = 0; i < e.length; i++)
                        for (let r = 0; r < e[i].stack.length; r++) -1 !== y.indexOf(t.type) ? (T(t, e[i].delegatedTarget), t.target === e[i].delegatedTarget && e[i].stack[r].data(t)) : (T(t, e[i].delegatedTarget), e[i].stack[r].data(t));
            }
            function T(t, e) {
                Object.defineProperty(t, "currentTarget", { configurable: !0, enumerable: !0, get: () => e });
            }
            const S = new (class {
                bindAll(t, e) {
                    e || (e = Object.getOwnPropertyNames(Object.getPrototypeOf(t)));
                    for (let i = 0; i < e.length; i++) t[e[i]] = t[e[i]].bind(t);
                }
                on(t, e, i, r) {
                    const n = t.split(" ");
                    for (let t = 0; t < n.length; t++)
                        if ("function" != typeof e || void 0 !== i)
                            if ((e.nodeType && 1 === e.nodeType) || e === window || e === document) e.addEventListener(n[t], i, r);
                            else {
                                e = b(e);
                                for (let s = 0; s < e.length; s++) e[s].addEventListener(n[t], i, r);
                            }
                        else w(n[t]), _[n[t]].add(e);
                }
                delegate(t, e, i) {
                    const r = t.split(" ");
                    for (let t = 0; t < r.length; t++) {
                        let n = v[r[t]];
                        void 0 === n && ((n = new o()), (v[r[t]] = n), -1 !== y.indexOf(r[t]) ? document.addEventListener(r[t], x, !0) : document.addEventListener(r[t], x)), n.add(e, i);
                    }
                }
                off(t, e, i, r) {
                    const n = t.split(" ");
                    for (let t = 0; t < n.length; t++) {
                        if (void 0 === e) {
                            _[n[t]]?.clear();
                            continue;
                        }
                        if ("function" == typeof e) {
                            w(n[t]), _[n[t]].delete(e);
                            continue;
                        }
                        const s = v[n[t]];
                        if (void 0 === s || (s.remove(e, i), 0 !== s.size))
                            if (void 0 === e.removeEventListener) {
                                e = b(e);
                                for (let s = 0; s < e.length; s++) e[s].removeEventListener(n[t], i, r);
                            } else e.removeEventListener(n[t], i, r);
                        else delete v[n[t]], -1 !== y.indexOf(n[t]) ? document.removeEventListener(n[t], x, !0) : document.removeEventListener(n[t], x);
                    }
                }
                emit(t, ...e) {
                    !(function (t, e) {
                        _[t] &&
                            _[t].forEach((t) => {
                                t(...e);
                            });
                    })(t, e);
                }
                debugDelegated() {
                    return JSON.parse(JSON.stringify(v));
                }
                debugBus() {
                    return (function (t) {
                        const e = {};
                        for (const i in t) e[i] = [...t[i]];
                        return e;
                    })(_);
                }
                hasBus(t) {
                    return this.debugBus().hasOwnProperty(t);
                }
            })();
            var E = S;
            const $ = new DOMParser();
            function M(t) {
                const e = new URL(t, window.location.origin);
                let i = null;
                return e.hash.length && (i = t.replace(e.hash, "")), { hasHash: e.hash.length > 0, pathname: e.pathname, host: e.host, raw: t, href: i || e.href };
            }
            function k(t) {
                "HEAD" === t.parentNode.tagName ? document.head.appendChild(C(t)) : document.body.appendChild(C(t));
            }
            function C(t) {
                const e = document.createElement("SCRIPT");
                for (let i = 0; i < t.attributes.length; i++) {
                    const r = t.attributes[i];
                    e.setAttribute(r.nodeName, r.nodeValue);
                }
                return t.innerHTML && (e.innerHTML = t.innerHTML), e;
            }
            class A {
                constructor({ wrapper: t }) {
                    this.wrapper = t;
                }
                leave(t) {
                    return new Promise((e) => {
                        this.onLeave({ ...t, done: e });
                    });
                }
                enter(t) {
                    return new Promise((e) => {
                        this.onEnter({ ...t, done: e });
                    });
                }
                onLeave({ from: t, trigger: e, done: i }) {
                    i();
                }
                onEnter({ to: t, trigger: e, done: i }) {
                    i();
                }
            }
            class L {
                constructor({ content: t, page: e, title: i, wrapper: r }) {
                    (this._contentString = t.outerHTML), (this._DOM = null), (this.page = e), (this.title = i), (this.wrapper = r), (this.content = this.wrapper.lastElementChild);
                }
                onEnter() { }
                onEnterCompleted() { }
                onLeave() { }
                onLeaveCompleted() { }
                initialLoad() {
                    this.onEnter(), this.onEnterCompleted();
                }
                update() {
                    (document.title = this.title), this.wrapper.appendChild(this._DOM.firstElementChild), (this.content = this.wrapper.lastElementChild), (this._DOM = null);
                }
                createDom() {
                    this._DOM || ((this._DOM = document.createElement("div")), (this._DOM.innerHTML = this._contentString));
                }
                remove() {
                    this.wrapper.firstElementChild.remove();
                }
                enter(t, e) {
                    return new Promise((i) => {
                        this.onEnter(),
                            t.enter({ trigger: e, to: this.content }).then(() => {
                                this.onEnterCompleted(), i();
                            });
                    });
                }
                leave(t, e, i) {
                    return new Promise((r) => {
                        this.onLeave(),
                            t.leave({ trigger: e, from: this.content }).then(() => {
                                i && this.remove(), this.onLeaveCompleted(), r();
                            });
                    });
                }
            }
            class P {
                data = new Map();
                regexCache = new Map();
                add(t, e, i) {
                    this.data.has(t) || (this.data.set(t, new Map()), this.regexCache.set(t, new RegExp(`^${t}$`))), this.data.get(t).set(e, i), this.regexCache.set(e, new RegExp(`^${e}$`));
                }
                findMatch(t, e) {
                    for (const [i, r] of this.data)
                        if (t.pathname.match(this.regexCache.get(i))) {
                            for (const [t, i] of r) if (e.pathname.match(this.regexCache.get(t))) return i;
                            break;
                        }
                    return null;
                }
            }
            const O = "A transition is currently in progress";
            class I {
                isTransitioning = !1;
                currentCacheEntry = null;
                cache = new Map();
                activePromises = new Map();
                constructor(t = {}) {
                    const {
                        links: e = "a:not([target]):not([href^=\\#]):not([data-taxi-ignore])",
                        removeOldContent: i = !0,
                        allowInterruption: r = !1,
                        bypassCache: n = !1,
                        enablePrefetch: s = !0,
                        renderers: o = { default: L },
                        transitions: a = { default: A },
                        reloadJsFilter: l = (t) => void 0 !== t.dataset.taxiReload,
                        reloadCssFilter: h = (t) => !0,
                    } = t;
                    (this.renderers = o),
                        (this.transitions = a),
                        (this.defaultRenderer = this.renderers.default || L),
                        (this.defaultTransition = this.transitions.default || A),
                        (this.wrapper = document.querySelector("[data-taxi]")),
                        (this.reloadJsFilter = l),
                        (this.reloadCssFilter = h),
                        (this.removeOldContent = i),
                        (this.allowInterruption = r),
                        (this.bypassCache = n),
                        (this.enablePrefetch = s),
                        (this.cache = new Map()),
                        (this.isPopping = !1),
                        this.attachEvents(e),
                        (this.currentLocation = M(window.location.href)),
                        this.cache.set(this.currentLocation.href, this.createCacheEntry(document.cloneNode(!0), window.location.href)),
                        (this.currentCacheEntry = this.cache.get(this.currentLocation.href)),
                        this.currentCacheEntry.renderer.initialLoad();
                }
                setDefaultRenderer(t) {
                    this.defaultRenderer = this.renderers[t];
                }
                setDefaultTransition(t) {
                    this.defaultTransition = this.transitions[t];
                }
                addRoute(t, e, i) {
                    this.router || (this.router = new P()), this.router.add(t, e, i);
                }
                preload(t, e = !1) {
                    return (
                        (t = M(t).href),
                        this.cache.has(t)
                            ? Promise.resolve()
                            : this.fetch(t, !1).then(async (i) => {
                                this.cache.set(t, this.createCacheEntry(i.html, i.url)), e && this.cache.get(t).renderer.createDom();
                            })
                    );
                }
                updateCache(t) {
                    const e = M(t || window.location.href).href;
                    this.cache.has(e) && this.cache.delete(e), this.cache.set(e, this.createCacheEntry(document.cloneNode(!0), e));
                }
                clearCache(t) {
                    const e = M(t || window.location.href).href;
                    this.cache.has(e) && this.cache.delete(e);
                }
                navigateTo(t, e = !1, i = !1) {
                    return new Promise((r, n) => {
                        if (!this.allowInterruption && this.isTransitioning) return void n(new Error(O));
                        (this.isTransitioning = !0), (this.isPopping = !0), (this.targetLocation = M(t)), (this.popTarget = window.location.href);
                        const s = new (this.chooseTransition(e))({ wrapper: this.wrapper });
                        let o;
                        if (this.bypassCache || !this.cache.has(this.targetLocation.href) || this.cache.get(this.targetLocation.href).skipCache) {
                            const t = this.fetch(this.targetLocation.href).then((t) => {
                                this.cache.set(this.targetLocation.href, this.createCacheEntry(t.html, t.url)), this.cache.get(this.targetLocation.href).renderer.createDom();
                            });
                            o = this.beforeFetch(this.targetLocation, s, i).then(async () => t.then(async () => await this.afterFetch(this.targetLocation, s, this.cache.get(this.targetLocation.href), i)));
                        } else
                            this.cache.get(this.targetLocation.href).renderer.createDom(),
                                (o = this.beforeFetch(this.targetLocation, s, i).then(async () => await this.afterFetch(this.targetLocation, s, this.cache.get(this.targetLocation.href), i)));
                        o.then(() => {
                            r();
                        });
                    });
                }
                on(t, e) {
                    E.on(t, e);
                }
                off(t, e) {
                    E.off(t, e);
                }
                beforeFetch(t, e, i) {
                    return (
                        E.emit("NAVIGATE_OUT", { from: this.currentCacheEntry, trigger: i }),
                        new Promise((r) => {
                            this.currentCacheEntry.renderer.leave(e, i, this.removeOldContent).then(() => {
                                "popstate" !== i && window.history.pushState({}, "", t.raw), r();
                            });
                        })
                    );
                }
                afterFetch(t, e, i, r) {
                    return (
                        (this.currentLocation = t),
                        (this.popTarget = this.currentLocation.href),
                        new Promise((n) => {
                            i.renderer.update(),
                                E.emit("NAVIGATE_IN", { from: this.currentCacheEntry, to: i, trigger: r }),
                                this.reloadJsFilter && this.loadScripts(i.scripts),
                                this.reloadCssFilter && this.loadStyles(i.styles),
                                "popstate" !== r && t.href !== i.finalUrl && window.history.replaceState({}, "", i.finalUrl),
                                i.renderer.enter(e, r).then(() => {
                                    E.emit("NAVIGATE_END", { from: this.currentCacheEntry, to: i, trigger: r }), (this.currentCacheEntry = i), (this.isTransitioning = !1), (this.isPopping = !1), n();
                                });
                        })
                    );
                }
                loadScripts(t) {
                    const e = [...t],
                        i = Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);
                    for (let t = 0; t < i.length; t++)
                        for (let n = 0; n < e.length; n++)
                            if (i[t].outerHTML === e[n].outerHTML) {
                                (r = i[t]).parentNode.replaceChild(C(r), r), e.splice(n, 1);
                                break;
                            }
                    var r;
                    for (const t of e) k(t);
                }
                loadStyles(t) {
                    const e = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter);
                    t.forEach((t) => {
                        t.href && !e.find((e) => e.href === t.href) && document.body.append(t);
                    });
                }
                attachEvents(t) {
                    E.delegate("click", t, this.onClick), E.on("popstate", window, this.onPopstate), this.enablePrefetch && E.delegate("mouseenter focus", t, this.onPrefetch);
                }
                onClick = (t) => {
                    if (!t.metaKey && !t.ctrlKey) {
                        const e = M(t.currentTarget.href);
                        if (((this.currentLocation = M(window.location.href)), this.currentLocation.host !== e.host)) return;
                        if (this.currentLocation.href !== e.href || (this.currentLocation.hasHash && !e.hasHash))
                            return t.preventDefault(), void this.navigateTo(e.raw, t.currentTarget.dataset.transition || !1, t.currentTarget).catch((t) => console.warn(t));
                        this.currentLocation.hasHash || e.hasHash || t.preventDefault();
                    }
                };
                onPopstate = () =>
                    !(window.location.pathname === this.currentLocation.pathname && !this.isPopping) &&
                    (this.allowInterruption || (!this.isTransitioning && !this.isPopping)
                        ? (this.isPopping || (this.popTarget = window.location.href), (this.isPopping = !0), void this.navigateTo(window.location.href, !1, "popstate"))
                        : (window.history.pushState({}, "", this.popTarget), console.warn(O), !1));
                onPrefetch = (t) => {
                    const e = M(t.currentTarget.href);
                    this.currentLocation.host === e.host && this.preload(t.currentTarget.href, !1);
                };
                fetch(t, e = !0) {
                    if (this.activePromises.has(t)) return this.activePromises.get(t);
                    const i = new Promise((i, r) => {
                        let n;
                        fetch(t, { mode: "same-origin", method: "GET", headers: { "X-Requested-With": "Taxi" }, credentials: "same-origin" })
                            .then((i) => (i.ok || (r("Taxi encountered a non 2xx HTTP status code"), e && (window.location.href = t)), (n = i.url), i.text()))
                            .then((t) => {
                                var e;
                                i({ html: ((e = t), "string" == typeof e ? $.parseFromString(e, "text/html") : e), url: n });
                            })
                            .catch((i) => {
                                r(i), e && (window.location.href = t);
                            })
                            .finally(() => {
                                this.activePromises.delete(t);
                            });
                    });
                    return this.activePromises.set(t, i), i;
                }
                chooseTransition(t) {
                    if (t) return this.transitions[t];
                    const e = this.router?.findMatch(this.currentLocation, this.targetLocation);
                    return e ? this.transitions[e] : this.defaultTransition;
                }
                createCacheEntry(t, e) {
                    const i = t.querySelector("[data-taxi-view]"),
                        r = i.dataset.taxiView.length ? this.renderers[i.dataset.taxiView] : this.defaultRenderer;
                    return (
                        r || console.warn(`The Renderer "${i.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`),
                        {
                            page: t,
                            content: i,
                            finalUrl: e,
                            skipCache: i.hasAttribute("data-taxi-nocache"),
                            scripts: this.reloadJsFilter ? Array.from(t.querySelectorAll("script")).filter(this.reloadJsFilter) : [],
                            styles: this.reloadCssFilter ? Array.from(t.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter) : [],
                            title: t.title,
                            renderer: new r({ wrapper: this.wrapper, title: t.title, content: i, page: t }),
                        }
                    );
                }
            }
            function z(t, e, i) {
                var r,
                    n = i || {},
                    s = n.noTrailing,
                    o = void 0 !== s && s,
                    a = n.noLeading,
                    l = void 0 !== a && a,
                    h = n.debounceMode,
                    c = void 0 === h ? void 0 : h,
                    u = !1,
                    d = 0;
                function p() {
                    r && clearTimeout(r);
                }
                function f() {
                    for (var i = arguments.length, n = new Array(i), s = 0; s < i; s++) n[s] = arguments[s];
                    var a = this,
                        h = Date.now() - d;
                    function f() {
                        (d = Date.now()), e.apply(a, n);
                    }
                    function m() {
                        r = void 0;
                    }
                    u || (l || !c || r || f(), p(), void 0 === c && h > t ? (l ? ((d = Date.now()), o || (r = setTimeout(c ? m : f, t))) : f()) : !0 !== o && (r = setTimeout(c ? m : f, void 0 === c ? t - h : t)));
                }
                return (
                    (f.cancel = function (t) {
                        var e = (t || {}).upcomingOnly,
                            i = void 0 !== e && e;
                        p(), (u = !i);
                    }),
                    f
                );
            }
            function R(t, e, i) {
                var r = (i || {}).atBegin;
                return z(t, e, { debounceMode: !1 !== (void 0 !== r && r) });
            }
            const D = {
                currentScroll: 0,
                detect: {
                    uA: navigator.userAgent.toLowerCase(),
                    get iPadIOS13() {
                        return "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
                    },
                    get isMobile() {
                        return (/mobi|android|tablet|ipad|iphone/.test(this.uA) && window.innerWidth <= 1024) || this.iPadIOS13;
                    },
                    get isMobileAndroid() {
                        return /android.*mobile/.test(this.uA);
                    },
                    get isFirefox() {
                        return this.uA.indexOf("firefox") > -1;
                    },
                    get isAndroid() {
                        return this.isMobileAndroid || (!this.isMobileAndroid && /android/i.test(this.uA));
                    },
                    get safari() {
                        return this.uA.match(/version\/[\d.]+.*safari/);
                    },
                    get isSafari() {
                        return this.safari && !this.isAndroid;
                    },
                },
                distance: (t, e, i, r) => Math.hypot(i - t, r - e),
                lerp: (t, e, i) => t * (1 - i) + e * i,
                remToPixel: (t) => t * parseFloat(getComputedStyle(document.documentElement).fontSize),
                cancelAnimation: (t) => {
                    t && (t.pause(), t.invalidate(), t.kill());
                },
            };
            var q = D;
            function F(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function N(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
            }
            var B,
                W,
                Y,
                X,
                H,
                U,
                V,
                j,
                G,
                J,
                K,
                Z,
                Q,
                tt,
                et,
                it = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
                rt = { duration: 0.5, overwrite: !1, delay: 0 },
                nt = 1e8,
                st = 1e-8,
                ot = 2 * Math.PI,
                at = ot / 4,
                lt = 0,
                ht = Math.sqrt,
                ct = Math.cos,
                ut = Math.sin,
                dt = function (t) {
                    return "string" == typeof t;
                },
                pt = function (t) {
                    return "function" == typeof t;
                },
                ft = function (t) {
                    return "number" == typeof t;
                },
                mt = function (t) {
                    return void 0 === t;
                },
                gt = function (t) {
                    return "object" == typeof t;
                },
                vt = function (t) {
                    return !1 !== t;
                },
                _t = function () {
                    return "undefined" != typeof window;
                },
                yt = function (t) {
                    return pt(t) || dt(t);
                },
                wt = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () { },
                bt = Array.isArray,
                xt = /(?:-?\.?\d|\.)+/gi,
                Tt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
                St = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
                Et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
                $t = /[+-]=-?[.\d]+/,
                Mt = /[^,'"\[\]\s]+/gi,
                kt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
                Ct = {},
                At = {},
                Lt = function (t) {
                    return (At = oe(t, Ct)) && ar;
                },
                Pt = function (t, e) {
                    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
                },
                Ot = function (t, e) {
                    return !e && console.warn(t);
                },
                It = function (t, e) {
                    return (t && (Ct[t] = e) && At && (At[t] = e)) || Ct;
                },
                zt = function () {
                    return 0;
                },
                Rt = { suppressEvents: !0, isStart: !0, kill: !1 },
                Dt = { suppressEvents: !0, kill: !1 },
                qt = { suppressEvents: !0 },
                Ft = {},
                Nt = [],
                Bt = {},
                Wt = {},
                Yt = {},
                Xt = 30,
                Ht = [],
                Ut = "",
                Vt = function (t) {
                    var e,
                        i,
                        r = t[0];
                    if ((gt(r) || pt(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
                        for (i = Ht.length; i-- && !Ht[i].targetTest(r););
                        e = Ht[i];
                    }
                    for (i = t.length; i--;) (t[i] && (t[i]._gsap || (t[i]._gsap = new bi(t[i], e)))) || t.splice(i, 1);
                    return t;
                },
                jt = function (t) {
                    return t._gsap || Vt(qe(t))[0]._gsap;
                },
                Gt = function (t, e, i) {
                    return (i = t[e]) && pt(i) ? t[e]() : (mt(i) && t.getAttribute && t.getAttribute(e)) || i;
                },
                Jt = function (t, e) {
                    return (t = t.split(",")).forEach(e) || t;
                },
                Kt = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0;
                },
                Zt = function (t) {
                    return Math.round(1e7 * t) / 1e7 || 0;
                },
                Qt = function (t, e) {
                    var i = e.charAt(0),
                        r = parseFloat(e.substr(2));
                    return (t = parseFloat(t)), "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r;
                },
                te = function (t, e) {
                    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i;);
                    return r < i;
                },
                ee = function () {
                    var t,
                        e,
                        i = Nt.length,
                        r = Nt.slice(0);
                    for (Bt = {}, Nt.length = 0, t = 0; t < i; t++) (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
                },
                ie = function (t, e, i, r) {
                    Nt.length && !W && ee(), t.render(e, i, r || (W && e < 0 && (t._initted || t._startAt))), Nt.length && !W && ee();
                },
                re = function (t) {
                    var e = parseFloat(t);
                    return (e || 0 === e) && (t + "").match(Mt).length < 2 ? e : dt(t) ? t.trim() : t;
                },
                ne = function (t) {
                    return t;
                },
                se = function (t, e) {
                    for (var i in e) i in t || (t[i] = e[i]);
                    return t;
                },
                oe = function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                ae = function t(e, i) {
                    for (var r in i) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = gt(i[r]) ? t(e[r] || (e[r] = {}), i[r]) : i[r]);
                    return e;
                },
                le = function (t, e) {
                    var i,
                        r = {};
                    for (i in t) i in e || (r[i] = t[i]);
                    return r;
                },
                he = function (t) {
                    var e,
                        i = t.parent || X,
                        r = t.keyframes
                            ? ((e = bt(t.keyframes)),
                                function (t, i) {
                                    for (var r in i) r in t || ("duration" === r && e) || "ease" === r || (t[r] = i[r]);
                                })
                            : se;
                    if (vt(t.inherit)) for (; i;) r(t, i.vars.defaults), (i = i.parent || i._dp);
                    return t;
                },
                ce = function (t, e, i, r, n) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var s,
                        o = t[r];
                    if (n) for (s = e[n]; o && o[n] > s;) o = o._prev;
                    return o ? ((e._next = o._next), (o._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[r] = e), (e._prev = o), (e.parent = e._dp = t), e;
                },
                ue = function (t, e, i, r) {
                    void 0 === i && (i = "_first"), void 0 === r && (r = "_last");
                    var n = e._prev,
                        s = e._next;
                    n ? (n._next = s) : t[i] === e && (t[i] = s), s ? (s._prev = n) : t[r] === e && (t[r] = n), (e._next = e._prev = e.parent = null);
                },
                de = function (t, e) {
                    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), (t._act = 0);
                },
                pe = function (t, e) {
                    if (t && (!e || e._end > t._dur || e._start < 0)) for (var i = t; i;) (i._dirty = 1), (i = i.parent);
                    return t;
                },
                fe = function (t, e, i, r) {
                    return t._startAt && (W ? t._startAt.revert(Dt) : (t.vars.immediateRender && !t.vars.autoRevert) || t._startAt.render(e, !0, r));
                },
                me = function t(e) {
                    return !e || (e._ts && t(e.parent));
                },
                ge = function (t) {
                    return t._repeat ? ve(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
                },
                ve = function (t, e) {
                    var i = Math.floor((t /= e));
                    return t && i === t ? i - 1 : i;
                },
                _e = function (t, e) {
                    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
                },
                ye = function (t) {
                    return (t._end = Zt(t._start + (t._tDur / Math.abs(t._ts || t._rts || st) || 0)));
                },
                we = function (t, e) {
                    var i = t._dp;
                    return i && i.smoothChildTiming && t._ts && ((t._start = Zt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), ye(t), i._dirty || pe(i, t)), t;
                },
                be = function (t, e) {
                    var i;
                    if (
                        ((e._time || (!e._dur && e._initted) || (e._start < t._time && (e._dur || !e.add))) && ((i = _e(t.rawTime(), e)), (!e._dur || Oe(0, e.totalDuration(), i) - e._tTime > st) && e.render(i, !0)),
                            pe(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
                    ) {
                        if (t._dur < t.duration()) for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
                        t._zTime = -1e-8;
                    }
                },
                xe = function (t, e, i, r) {
                    return (
                        e.parent && de(e),
                        (e._start = Zt((ft(i) ? i : i || t !== X ? Ae(t, i, e) : t._time) + e._delay)),
                        (e._end = Zt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                        ce(t, e, "_first", "_last", t._sort ? "_start" : 0),
                        $e(e) || (t._recent = e),
                        r || be(t, e),
                        t._ts < 0 && we(t, t._tTime),
                        t
                    );
                },
                Te = function (t, e) {
                    return (Ct.ScrollTrigger || Pt("scrollTrigger", e)) && Ct.ScrollTrigger.create(e, t);
                },
                Se = function (t, e, i, r, n) {
                    return Ci(t, e, n), t._initted ? (!i && t._pt && !W && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && G !== li.frame ? (Nt.push(t), (t._lazy = [n, r]), 1) : void 0) : 1;
                },
                Ee = function t(e) {
                    var i = e.parent;
                    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
                },
                $e = function (t) {
                    var e = t.data;
                    return "isFromStart" === e || "isStart" === e;
                },
                Me = function (t, e, i, r) {
                    var n = t._repeat,
                        s = Zt(e) || 0,
                        o = t._tTime / t._tDur;
                    return o && !r && (t._time *= s / t._dur), (t._dur = s), (t._tDur = n ? (n < 0 ? 1e10 : Zt(s * (n + 1) + t._rDelay * n)) : s), o > 0 && !r && we(t, (t._tTime = t._tDur * o)), t.parent && ye(t), i || pe(t.parent, t), t;
                },
                ke = function (t) {
                    return t instanceof Ti ? pe(t) : Me(t, t._dur);
                },
                Ce = { _start: 0, endTime: zt, totalDuration: zt },
                Ae = function t(e, i, r) {
                    var n,
                        s,
                        o,
                        a = e.labels,
                        l = e._recent || Ce,
                        h = e.duration() >= nt ? l.endTime(!1) : e._dur;
                    return dt(i) && (isNaN(i) || i in a)
                        ? ((s = i.charAt(0)),
                            (o = "%" === i.substr(-1)),
                            (n = i.indexOf("=")),
                            "<" === s || ">" === s
                                ? (n >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (n < 0 ? l : r).totalDuration() / 100 : 1))
                                : n < 0
                                    ? (i in a || (a[i] = h), a[i])
                                    : ((s = parseFloat(i.charAt(n - 1) + i.substr(n + 1))), o && r && (s = (s / 100) * (bt(r) ? r[0] : r).totalDuration()), n > 1 ? t(e, i.substr(0, n - 1), r) + s : h + s))
                        : null == i
                            ? h
                            : +i;
                },
                Le = function (t, e, i) {
                    var r,
                        n,
                        s = ft(e[1]),
                        o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                        a = e[o];
                    if ((s && (a.duration = e[1]), (a.parent = i), t)) {
                        for (r = a, n = i; n && !("immediateRender" in r);) (r = n.vars.defaults || {}), (n = vt(n.vars.inherit) && n.parent);
                        (a.immediateRender = vt(r.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]);
                    }
                    return new Ii(e[0], a, e[o + 1]);
                },
                Pe = function (t, e) {
                    return t || 0 === t ? e(t) : e;
                },
                Oe = function (t, e, i) {
                    return i < t ? t : i > e ? e : i;
                },
                Ie = function (t, e) {
                    return dt(t) && (e = kt.exec(t)) ? e[1] : "";
                },
                ze = [].slice,
                Re = function (t, e) {
                    return t && gt(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && gt(t[0]))) && !t.nodeType && t !== H;
                },
                De = function (t, e, i) {
                    return (
                        void 0 === i && (i = []),
                        t.forEach(function (t) {
                            var r;
                            return (dt(t) && !e) || Re(t, 1) ? (r = i).push.apply(r, qe(t)) : i.push(t);
                        }) || i
                    );
                },
                qe = function (t, e, i) {
                    return Y && !e && Y.selector ? Y.selector(t) : !dt(t) || i || (!U && hi()) ? (bt(t) ? De(t, i) : Re(t) ? ze.call(t, 0) : t ? [t] : []) : ze.call((e || V).querySelectorAll(t), 0);
                },
                Fe = function (t) {
                    return (
                        (t = qe(t)[0] || Ot("Invalid scope") || {}),
                        function (e) {
                            var i = t.current || t.nativeElement || t;
                            return qe(e, i.querySelectorAll ? i : i === t ? Ot("Invalid scope") || V.createElement("div") : t);
                        }
                    );
                },
                Ne = function (t) {
                    return t.sort(function () {
                        return 0.5 - Math.random();
                    });
                },
                Be = function (t) {
                    if (pt(t)) return t;
                    var e = gt(t) ? t : { each: t },
                        i = gi(e.ease),
                        r = e.from || 0,
                        n = parseFloat(e.base) || 0,
                        s = {},
                        o = r > 0 && r < 1,
                        a = isNaN(r) || o,
                        l = e.axis,
                        h = r,
                        c = r;
                    return (
                        dt(r) ? (h = c = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !o && a && ((h = r[0]), (c = r[1])),
                        function (t, o, u) {
                            var d,
                                p,
                                f,
                                m,
                                g,
                                v,
                                _,
                                y,
                                w,
                                b = (u || e).length,
                                x = s[b];
                            if (!x) {
                                if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, nt])[1])) {
                                    for (_ = -nt; _ < (_ = u[w++].getBoundingClientRect().left) && w < b;);
                                    w--;
                                }
                                for (x = s[b] = [], d = a ? Math.min(w, b) * h - 0.5 : r % w, p = w === nt ? 0 : a ? (b * c) / w - 0.5 : (r / w) | 0, _ = 0, y = nt, v = 0; v < b; v++)
                                    (f = (v % w) - d), (m = p - ((v / w) | 0)), (x[v] = g = l ? Math.abs("y" === l ? m : f) : ht(f * f + m * m)), g > _ && (_ = g), g < y && (y = g);
                                "random" === r && Ne(x),
                                    (x.max = _ - y),
                                    (x.min = y),
                                    (x.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (w > b ? b - 1 : l ? ("y" === l ? b / w : w) : Math.max(w, b / w)) || 0) * ("edges" === r ? -1 : 1)),
                                    (x.b = b < 0 ? n - b : n),
                                    (x.u = Ie(e.amount || e.each) || 0),
                                    (i = i && b < 0 ? fi(i) : i);
                            }
                            return (b = (x[t] - x.min) / x.max || 0), Zt(x.b + (i ? i(b) : b) * x.v) + x.u;
                        }
                    );
                },
                We = function (t) {
                    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
                    return function (i) {
                        var r = Zt(Math.round(parseFloat(i) / t) * t * e);
                        return (r - (r % 1)) / e + (ft(i) ? 0 : Ie(i));
                    };
                },
                Ye = function (t, e) {
                    var i,
                        r,
                        n = bt(t);
                    return (
                        !n && gt(t) && ((i = n = t.radius || nt), t.values ? ((t = qe(t.values)), (r = !ft(t[0])) && (i *= i)) : (t = We(t.increment))),
                        Pe(
                            e,
                            n
                                ? pt(t)
                                    ? function (e) {
                                        return (r = t(e)), Math.abs(r - e) <= i ? r : e;
                                    }
                                    : function (e) {
                                        for (var n, s, o = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), l = nt, h = 0, c = t.length; c--;)
                                            (n = r ? (n = t[c].x - o) * n + (s = t[c].y - a) * s : Math.abs(t[c] - o)) < l && ((l = n), (h = c));
                                        return (h = !i || l <= i ? t[h] : e), r || h === e || ft(e) ? h : h + Ie(e);
                                    }
                                : We(t)
                        )
                    );
                },
                Xe = function (t, e, i, r) {
                    return Pe(bt(t) ? !e : !0 === i ? !!(i = 0) : !r, function () {
                        return bt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) * i * r) / r;
                    });
                },
                He = function (t, e, i) {
                    return Pe(i, function (i) {
                        return t[~~e(i)];
                    });
                },
                Ue = function (t) {
                    for (var e, i, r, n, s = 0, o = ""; ~(e = t.indexOf("random(", s));)
                        (r = t.indexOf(")", e)), (n = "[" === t.charAt(e + 7)), (i = t.substr(e + 7, r - e - 7).match(n ? Mt : xt)), (o += t.substr(s, e - s) + Xe(n ? i : +i[0], n ? 0 : +i[1], +i[2] || 1e-5)), (s = r + 1);
                    return o + t.substr(s, t.length - s);
                },
                Ve = function (t, e, i, r, n) {
                    var s = e - t,
                        o = r - i;
                    return Pe(n, function (e) {
                        return i + (((e - t) / s) * o || 0);
                    });
                },
                je = function (t, e, i) {
                    var r,
                        n,
                        s,
                        o = t.labels,
                        a = nt;
                    for (r in o) (n = o[r] - e) < 0 == !!i && n && a > (n = Math.abs(n)) && ((s = r), (a = n));
                    return s;
                },
                Ge = function (t, e, i) {
                    var r,
                        n,
                        s,
                        o = t.vars,
                        a = o[e],
                        l = Y,
                        h = t._ctx;
                    if (a) return (r = o[e + "Params"]), (n = o.callbackScope || t), i && Nt.length && ee(), h && (Y = h), (s = r ? a.apply(n, r) : a.call(n)), (Y = l), s;
                },
                Je = function (t) {
                    return de(t), t.scrollTrigger && t.scrollTrigger.kill(!!W), t.progress() < 1 && Ge(t, "onInterrupt"), t;
                },
                Ke = [],
                Ze = function (t) {
                    if (_t() && t) {
                        var e = (t = (!t.name && t.default) || t).name,
                            i = pt(t),
                            r =
                                e && !i && t.init
                                    ? function () {
                                        this._props = [];
                                    }
                                    : t,
                            n = { init: zt, render: Yi, add: Mi, kill: Hi, modifier: Xi, rawVars: 0 },
                            s = { targetTest: 0, get: 0, getSetter: Fi, aliases: {}, register: 0 };
                        if ((hi(), t !== r)) {
                            if (Wt[e]) return;
                            se(r, se(le(t, n), s)), oe(r.prototype, oe(n, le(t, s))), (Wt[(r.prop = e)] = r), t.targetTest && (Ht.push(r), (Ft[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                        }
                        It(e, r), t.register && t.register(ar, r, ji);
                    } else t && Ke.push(t);
                },
                Qe = 255,
                ti = {
                    aqua: [0, Qe, Qe],
                    lime: [0, Qe, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, Qe],
                    navy: [0, 0, 128],
                    white: [Qe, Qe, Qe],
                    olive: [128, 128, 0],
                    yellow: [Qe, Qe, 0],
                    orange: [Qe, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [Qe, 0, 0],
                    pink: [Qe, 192, 203],
                    cyan: [0, Qe, Qe],
                    transparent: [Qe, Qe, Qe, 0],
                },
                ei = function (t, e, i) {
                    return ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Qe + 0.5) | 0;
                },
                ii = function (t, e, i) {
                    var r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p = t ? (ft(t) ? [t >> 16, (t >> 8) & Qe, t & Qe] : 0) : ti.black;
                    if (!p) {
                        if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ti[t])) p = ti[t];
                        else if ("#" === t.charAt(0)) {
                            if ((t.length < 6 && ((r = t.charAt(1)), (n = t.charAt(2)), (s = t.charAt(3)), (t = "#" + r + r + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))), 9 === t.length))
                                return [(p = parseInt(t.substr(1, 6), 16)) >> 16, (p >> 8) & Qe, p & Qe, parseInt(t.substr(7), 16) / 255];
                            p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & Qe, t & Qe];
                        } else if ("hsl" === t.substr(0, 3))
                            if (((p = d = t.match(xt)), e)) {
                                if (~t.indexOf("=")) return (p = t.match(Tt)), i && p.length < 4 && (p[3] = 1), p;
                            } else
                                (o = (+p[0] % 360) / 360),
                                    (a = +p[1] / 100),
                                    (r = 2 * (l = +p[2] / 100) - (n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                                    p.length > 3 && (p[3] *= 1),
                                    (p[0] = ei(o + 1 / 3, r, n)),
                                    (p[1] = ei(o, r, n)),
                                    (p[2] = ei(o - 1 / 3, r, n));
                        else p = t.match(xt) || ti.transparent;
                        p = p.map(Number);
                    }
                    return (
                        e &&
                        !d &&
                        ((r = p[0] / Qe),
                            (n = p[1] / Qe),
                            (s = p[2] / Qe),
                            (l = ((h = Math.max(r, n, s)) + (c = Math.min(r, n, s))) / 2),
                            h === c ? (o = a = 0) : ((u = h - c), (a = l > 0.5 ? u / (2 - h - c) : u / (h + c)), (o = h === r ? (n - s) / u + (n < s ? 6 : 0) : h === n ? (s - r) / u + 2 : (r - n) / u + 4), (o *= 60)),
                            (p[0] = ~~(o + 0.5)),
                            (p[1] = ~~(100 * a + 0.5)),
                            (p[2] = ~~(100 * l + 0.5))),
                        i && p.length < 4 && (p[3] = 1),
                        p
                    );
                },
                ri = function (t) {
                    var e = [],
                        i = [],
                        r = -1;
                    return (
                        t.split(si).forEach(function (t) {
                            var n = t.match(St) || [];
                            e.push.apply(e, n), i.push((r += n.length + 1));
                        }),
                        (e.c = i),
                        e
                    );
                },
                ni = function (t, e, i) {
                    var r,
                        n,
                        s,
                        o,
                        a = "",
                        l = (t + a).match(si),
                        h = e ? "hsla(" : "rgba(",
                        c = 0;
                    if (!l) return t;
                    if (
                        ((l = l.map(function (t) {
                            return (t = ii(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                        })),
                            i && ((s = ri(t)), (r = i.c).join(a) !== s.c.join(a)))
                    )
                        for (o = (n = t.replace(si, "1").split(St)).length - 1; c < o; c++) a += n[c] + (~r.indexOf(c) ? l.shift() || h + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
                    if (!n) for (o = (n = t.split(si)).length - 1; c < o; c++) a += n[c] + l[c];
                    return a + n[o];
                },
                si = (function () {
                    var t,
                        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
                    for (t in ti) e += "|" + t + "\\b";
                    return new RegExp(e + ")", "gi");
                })(),
                oi = /hsl[a]?\(/,
                ai = function (t) {
                    var e,
                        i = t.join(" ");
                    if (((si.lastIndex = 0), si.test(i))) return (e = oi.test(i)), (t[1] = ni(t[1], e)), (t[0] = ni(t[0], e, ri(t[1]))), !0;
                },
                li = (function () {
                    var t,
                        e,
                        i,
                        r,
                        n,
                        s,
                        o = Date.now,
                        a = 500,
                        l = 33,
                        h = o(),
                        c = h,
                        u = 1e3 / 240,
                        d = u,
                        p = [],
                        f = function i(f) {
                            var m,
                                g,
                                v,
                                _,
                                y = o() - c,
                                w = !0 === f;
                            if ((y > a && (h += y - l), ((m = (v = (c += y) - h) - d) > 0 || w) && ((_ = ++r.frame), (n = v - 1e3 * r.time), (r.time = v /= 1e3), (d += m + (m >= u ? 4 : u - m)), (g = 1)), w || (t = e(i)), g))
                                for (s = 0; s < p.length; s++) p[s](v, n, _, f);
                        };
                    return (
                        (r = {
                            time: 0,
                            frame: 0,
                            tick: function () {
                                f(!0);
                            },
                            deltaRatio: function (t) {
                                return n / (1e3 / (t || 60));
                            },
                            wake: function () {
                                j &&
                                    (!U &&
                                        _t() &&
                                        ((H = U = window),
                                            (V = H.document || {}),
                                            (Ct.gsap = ar),
                                            (H.gsapVersions || (H.gsapVersions = [])).push(ar.version),
                                            Lt(At || H.GreenSockGlobals || (!H.gsap && H) || {}),
                                            (i = H.requestAnimationFrame),
                                            Ke.forEach(Ze)),
                                        t && r.sleep(),
                                        (e =
                                            i ||
                                            function (t) {
                                                return setTimeout(t, (d - 1e3 * r.time + 1) | 0);
                                            }),
                                        (K = 1),
                                        f(2));
                            },
                            sleep: function () {
                                (i ? H.cancelAnimationFrame : clearTimeout)(t), (K = 0), (e = zt);
                            },
                            lagSmoothing: function (t, e) {
                                (a = t || 1 / 0), (l = Math.min(e || 33, a));
                            },
                            fps: function (t) {
                                (u = 1e3 / (t || 240)), (d = 1e3 * r.time + u);
                            },
                            add: function (t, e, i) {
                                var n = e
                                    ? function (e, i, s, o) {
                                        t(e, i, s, o), r.remove(n);
                                    }
                                    : t;
                                return r.remove(t), p[i ? "unshift" : "push"](n), hi(), n;
                            },
                            remove: function (t, e) {
                                ~(e = p.indexOf(t)) && p.splice(e, 1) && s >= e && s--;
                            },
                            _listeners: p,
                        }),
                        r
                    );
                })(),
                hi = function () {
                    return !K && li.wake();
                },
                ci = {},
                ui = /^[\d.\-M][\d.\-,\s]/,
                di = /["']/g,
                pi = function (t) {
                    for (var e, i, r, n = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++)
                        (i = s[a]), (e = a !== l - 1 ? i.lastIndexOf(",") : i.length), (r = i.substr(0, e)), (n[o] = isNaN(r) ? r.replace(di, "").trim() : +r), (o = i.substr(e + 1).trim());
                    return n;
                },
                fi = function (t) {
                    return function (e) {
                        return 1 - t(1 - e);
                    };
                },
                mi = function t(e, i) {
                    for (var r, n = e._first; n;)
                        n instanceof Ti ? t(n, i) : !n.vars.yoyoEase || (n._yoyo && n._repeat) || n._yoyo === i || (n.timeline ? t(n.timeline, i) : ((r = n._ease), (n._ease = n._yEase), (n._yEase = r), (n._yoyo = i))), (n = n._next);
                },
                gi = function (t, e) {
                    return (
                        (t &&
                            (pt(t)
                                ? t
                                : ci[t] ||
                                (function (t) {
                                    var e,
                                        i,
                                        r,
                                        n,
                                        s = (t + "").split("("),
                                        o = ci[s[0]];
                                    return o && s.length > 1 && o.config
                                        ? o.config.apply(
                                            null,
                                            ~t.indexOf("{") ? [pi(s[1])] : ((e = t), (i = e.indexOf("(") + 1), (r = e.indexOf(")")), (n = e.indexOf("(", i)), e.substring(i, ~n && n < r ? e.indexOf(")", r + 1) : r)).split(",").map(re)
                                        )
                                        : ci._CE && ui.test(t)
                                            ? ci._CE("", t)
                                            : o;
                                })(t))) ||
                        e
                    );
                },
                vi = function (t, e, i, r) {
                    void 0 === i &&
                        (i = function (t) {
                            return 1 - e(1 - t);
                        }),
                        void 0 === r &&
                        (r = function (t) {
                            return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                        });
                    var n,
                        s = { easeIn: e, easeOut: i, easeInOut: r };
                    return (
                        Jt(t, function (t) {
                            for (var e in ((ci[t] = Ct[t] = s), (ci[(n = t.toLowerCase())] = i), s)) ci[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ci[t + "." + e] = s[e];
                        }),
                        s
                    );
                },
                _i = function (t) {
                    return function (e) {
                        return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
                    };
                },
                yi = function t(e, i, r) {
                    var n = i >= 1 ? i : 1,
                        s = (r || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
                        o = (s / ot) * (Math.asin(1 / n) || 0),
                        a = function (t) {
                            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * ut((t - o) * s) + 1;
                        },
                        l =
                            "out" === e
                                ? a
                                : "in" === e
                                    ? function (t) {
                                        return 1 - a(1 - t);
                                    }
                                    : _i(a);
                    return (
                        (s = ot / s),
                        (l.config = function (i, r) {
                            return t(e, i, r);
                        }),
                        l
                    );
                },
                wi = function t(e, i) {
                    void 0 === i && (i = 1.70158);
                    var r = function (t) {
                        return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
                    },
                        n =
                            "out" === e
                                ? r
                                : "in" === e
                                    ? function (t) {
                                        return 1 - r(1 - t);
                                    }
                                    : _i(r);
                    return (
                        (n.config = function (i) {
                            return t(e, i);
                        }),
                        n
                    );
                };
            Jt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
                var i = e < 5 ? e + 1 : e;
                vi(
                    t + ",Power" + (i - 1),
                    e
                        ? function (t) {
                            return Math.pow(t, i);
                        }
                        : function (t) {
                            return t;
                        },
                    function (t) {
                        return 1 - Math.pow(1 - t, i);
                    },
                    function (t) {
                        return t < 0.5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
                    }
                );
            }),
                (ci.Linear.easeNone = ci.none = ci.Linear.easeIn),
                vi("Elastic", yi("in"), yi("out"), yi()),
                (Z = 7.5625),
                (tt = 1 / (Q = 2.75)),
                vi(
                    "Bounce",
                    function (t) {
                        return 1 - et(1 - t);
                    },
                    (et = function (t) {
                        return t < tt ? Z * t * t : t < 0.7272727272727273 ? Z * Math.pow(t - 1.5 / Q, 2) + 0.75 : t < 0.9090909090909092 ? Z * (t -= 2.25 / Q) * t + 0.9375 : Z * Math.pow(t - 2.625 / Q, 2) + 0.984375;
                    })
                ),
                vi("Expo", function (t) {
                    return t ? Math.pow(2, 10 * (t - 1)) : 0;
                }),
                vi("Circ", function (t) {
                    return -(ht(1 - t * t) - 1);
                }),
                vi("Sine", function (t) {
                    return 1 === t ? 1 : 1 - ct(t * at);
                }),
                vi("Back", wi("in"), wi("out"), wi()),
                (ci.SteppedEase = ci.steps = Ct.SteppedEase = {
                    config: function (t, e) {
                        void 0 === t && (t = 1);
                        var i = 1 / t,
                            r = t + (e ? 0 : 1),
                            n = e ? 1 : 0;
                        return function (t) {
                            return (((r * Oe(0, 0.99999999, t)) | 0) + n) * i;
                        };
                    },
                }),
                (rt.ease = ci["quad.out"]),
                Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                    return (Ut += t + "," + t + "Params,");
                });
            var bi = function (t, e) {
                (this.id = lt++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : Gt), (this.set = e ? e.getSetter : Fi);
            },
                xi = (function () {
                    function t(t) {
                        (this.vars = t),
                            (this._delay = +t.delay || 0),
                            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                            (this._ts = 1),
                            Me(this, +t.duration, 1, 1),
                            (this.data = t.data),
                            Y && ((this._ctx = Y), Y.data.push(this)),
                            K || li.wake();
                    }
                    var e = t.prototype;
                    return (
                        (e.delay = function (t) {
                            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                        }),
                        (e.duration = function (t) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                        }),
                        (e.totalDuration = function (t) {
                            return arguments.length ? ((this._dirty = 0), Me(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                        }),
                        (e.totalTime = function (t, e) {
                            if ((hi(), !arguments.length)) return this._tTime;
                            var i = this._dp;
                            if (i && i.smoothChildTiming && this._ts) {
                                for (we(this, t), !i._dp || i.parent || be(i, this); i && i.parent;)
                                    i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), (i = i.parent);
                                !this.parent && this._dp.autoRemoveChildren && ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) && xe(this._dp, this, this._start - this._delay);
                            }
                            return (
                                (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === st) || (!t && !this._initted && (this.add || this._ptLookup))) && (this._ts || (this._pTime = t), ie(this, t, e)), this
                            );
                        }),
                        (e.time = function (t, e) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ge(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
                        }),
                        (e.totalProgress = function (t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        }),
                        (e.progress = function (t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ge(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        }),
                        (e.iteration = function (t, e) {
                            var i = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? ve(this._tTime, i) + 1 : 1;
                        }),
                        (e.timeScale = function (t) {
                            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                            if (this._rts === t) return this;
                            var e = this.parent && this._ts ? _e(this.parent._time, this) : this._tTime;
                            return (
                                (this._rts = +t || 0),
                                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                                this.totalTime(Oe(-Math.abs(this._delay), this._tDur, e), !0),
                                ye(this),
                                (function (t) {
                                    for (var e = t.parent; e && e.parent;) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                                    return t;
                                })(this)
                            );
                        }),
                        (e.paused = function (t) {
                            return arguments.length
                                ? (this._ps !== t &&
                                    ((this._ps = t),
                                        t
                                            ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                            : (hi(),
                                                (this._ts = this._rts),
                                                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== st && (this._tTime -= st)))),
                                    this)
                                : this._ps;
                        }),
                        (e.startTime = function (t) {
                            if (arguments.length) {
                                this._start = t;
                                var e = this.parent || this._dp;
                                return e && (e._sort || !this.parent) && xe(e, this, t - this._delay), this;
                            }
                            return this._start;
                        }),
                        (e.endTime = function (t) {
                            return this._start + (vt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
                        }),
                        (e.rawTime = function (t) {
                            var e = this.parent || this._dp;
                            return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _e(e.rawTime(t), this) : this._tTime) : this._tTime;
                        }),
                        (e.revert = function (t) {
                            void 0 === t && (t = qt);
                            var e = W;
                            return (W = t), (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), (W = e), this;
                        }),
                        (e.globalTime = function (t) {
                            for (var e = this, i = arguments.length ? t : e.rawTime(); e;) (i = e._start + i / (e._ts || 1)), (e = e._dp);
                            return !this.parent && this._sat ? (this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t)) : i;
                        }),
                        (e.repeat = function (t) {
                            return arguments.length ? ((this._repeat = t === 1 / 0 ? -2 : t), ke(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
                        }),
                        (e.repeatDelay = function (t) {
                            if (arguments.length) {
                                var e = this._time;
                                return (this._rDelay = t), ke(this), e ? this.time(e) : this;
                            }
                            return this._rDelay;
                        }),
                        (e.yoyo = function (t) {
                            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                        }),
                        (e.seek = function (t, e) {
                            return this.totalTime(Ae(this, t), vt(e));
                        }),
                        (e.restart = function (t, e) {
                            return this.play().totalTime(t ? -this._delay : 0, vt(e));
                        }),
                        (e.play = function (t, e) {
                            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                        }),
                        (e.reverse = function (t, e) {
                            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                        }),
                        (e.pause = function (t, e) {
                            return null != t && this.seek(t, e), this.paused(!0);
                        }),
                        (e.resume = function () {
                            return this.paused(!1);
                        }),
                        (e.reversed = function (t) {
                            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0;
                        }),
                        (e.invalidate = function () {
                            return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
                        }),
                        (e.isActive = function () {
                            var t,
                                e = this.parent || this._dp,
                                i = this._start;
                            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - st));
                        }),
                        (e.eventCallback = function (t, e, i) {
                            var r = this.vars;
                            return arguments.length > 1 ? (e ? ((r[t] = e), i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t];
                        }),
                        (e.then = function (t) {
                            var e = this;
                            return new Promise(function (i) {
                                var r = pt(t) ? t : ne,
                                    n = function () {
                                        var t = e.then;
                                        (e.then = null), pt(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), (e.then = t);
                                    };
                                (e._initted && 1 === e.totalProgress() && e._ts >= 0) || (!e._tTime && e._ts < 0) ? n() : (e._prom = n);
                            });
                        }),
                        (e.kill = function () {
                            Je(this);
                        }),
                        t
                    );
                })();
            se(xi.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -1e-8, _prom: 0, _ps: !1, _rts: 1 });
            var Ti = (function (t) {
                function e(e, i) {
                    var r;
                    return (
                        void 0 === e && (e = {}),
                        ((r = t.call(this, e) || this).labels = {}),
                        (r.smoothChildTiming = !!e.smoothChildTiming),
                        (r.autoRemoveChildren = !!e.autoRemoveChildren),
                        (r._sort = vt(e.sortChildren)),
                        X && xe(e.parent || X, F(r), i),
                        e.reversed && r.reverse(),
                        e.paused && r.paused(!0),
                        e.scrollTrigger && Te(F(r), e.scrollTrigger),
                        r
                    );
                }
                N(e, t);
                var i = e.prototype;
                return (
                    (i.to = function (t, e, i) {
                        return Le(0, arguments, this), this;
                    }),
                    (i.from = function (t, e, i) {
                        return Le(1, arguments, this), this;
                    }),
                    (i.fromTo = function (t, e, i, r) {
                        return Le(2, arguments, this), this;
                    }),
                    (i.set = function (t, e, i) {
                        return (e.duration = 0), (e.parent = this), he(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ii(t, e, Ae(this, i), 1), this;
                    }),
                    (i.call = function (t, e, i) {
                        return xe(this, Ii.delayedCall(0, t, e), i);
                    }),
                    (i.staggerTo = function (t, e, i, r, n, s, o) {
                        return (i.duration = e), (i.stagger = i.stagger || r), (i.onComplete = s), (i.onCompleteParams = o), (i.parent = this), new Ii(t, i, Ae(this, n)), this;
                    }),
                    (i.staggerFrom = function (t, e, i, r, n, s, o) {
                        return (i.runBackwards = 1), (he(i).immediateRender = vt(i.immediateRender)), this.staggerTo(t, e, i, r, n, s, o);
                    }),
                    (i.staggerFromTo = function (t, e, i, r, n, s, o, a) {
                        return (r.startAt = i), (he(r).immediateRender = vt(r.immediateRender)), this.staggerTo(t, e, r, n, s, o, a);
                    }),
                    (i.render = function (t, e, i) {
                        var r,
                            n,
                            s,
                            o,
                            a,
                            l,
                            h,
                            c,
                            u,
                            d,
                            p,
                            f,
                            m = this._time,
                            g = this._dirty ? this.totalDuration() : this._tDur,
                            v = this._dur,
                            _ = t <= 0 ? 0 : Zt(t),
                            y = this._zTime < 0 != t < 0 && (this._initted || !v);
                        if ((this !== X && _ > g && t >= 0 && (_ = g), _ !== this._tTime || i || y)) {
                            if ((m !== this._time && v && ((_ += this._time - m), (t += this._time - m)), (r = _), (u = this._start), (l = !(c = this._ts)), y && (v || (m = this._zTime), (t || !e) && (this._zTime = t)), this._repeat)) {
                                if (((p = this._yoyo), (a = v + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, i);
                                if (
                                    ((r = Zt(_ % a)),
                                        _ === g ? ((o = this._repeat), (r = v)) : ((o = ~~(_ / a)) && o === _ / a && ((r = v), o--), r > v && (r = v)),
                                        (d = ve(this._tTime, a)),
                                        !m && this._tTime && d !== o && this._tTime - d * a - this._dur <= 0 && (d = o),
                                        p && 1 & o && ((r = v - r), (f = 1)),
                                        o !== d && !this._lock)
                                ) {
                                    var w = p && 1 & d,
                                        b = w === (p && 1 & o);
                                    if (
                                        (o < d && (w = !w),
                                            (m = w ? 0 : _ % v ? v : _),
                                            (this._lock = 1),
                                            (this.render(m || (f ? 0 : Zt(o * a)), e, !v)._lock = 0),
                                            (this._tTime = _),
                                            !e && this.parent && Ge(this, "onRepeat"),
                                            this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                                            (m && m !== this._time) || l !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
                                    )
                                        return this;
                                    if (((v = this._dur), (g = this._tDur), b && ((this._lock = 2), (m = w ? v : -1e-4), this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), (this._lock = 0), !this._ts && !l))
                                        return this;
                                    mi(this, f);
                                }
                            }
                            if (
                                (this._hasPause &&
                                    !this._forcing &&
                                    this._lock < 2 &&
                                    ((h = (function (t, e, i) {
                                        var r;
                                        if (i > e)
                                            for (r = t._first; r && r._start <= i;) {
                                                if ("isPause" === r.data && r._start > e) return r;
                                                r = r._next;
                                            }
                                        else
                                            for (r = t._last; r && r._start >= i;) {
                                                if ("isPause" === r.data && r._start < e) return r;
                                                r = r._prev;
                                            }
                                    })(this, Zt(m), Zt(r))),
                                        h && (_ -= r - (r = h._start))),
                                    (this._tTime = _),
                                    (this._time = r),
                                    (this._act = !c),
                                    this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (m = 0)),
                                    !m && r && !e && !o && (Ge(this, "onStart"), this._tTime !== _))
                            )
                                return this;
                            if (r >= m && t >= 0)
                                for (n = this._first; n;) {
                                    if (((s = n._next), (n._act || r >= n._start) && n._ts && h !== n)) {
                                        if (n.parent !== this) return this.render(t, e, i);
                                        if ((n.render(n._ts > 0 ? (r - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (r - n._start) * n._ts, e, i), r !== this._time || (!this._ts && !l))) {
                                            (h = 0), s && (_ += this._zTime = -1e-8);
                                            break;
                                        }
                                    }
                                    n = s;
                                }
                            else {
                                n = this._last;
                                for (var x = t < 0 ? t : r; n;) {
                                    if (((s = n._prev), (n._act || x <= n._end) && n._ts && h !== n)) {
                                        if (n.parent !== this) return this.render(t, e, i);
                                        if (
                                            (n.render(n._ts > 0 ? (x - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (x - n._start) * n._ts, e, i || (W && (n._initted || n._startAt))), r !== this._time || (!this._ts && !l))
                                        ) {
                                            (h = 0), s && (_ += this._zTime = x ? -1e-8 : st);
                                            break;
                                        }
                                    }
                                    n = s;
                                }
                            }
                            if (h && !e && (this.pause(), (h.render(r >= m ? 0 : -1e-8)._zTime = r >= m ? 1 : -1), this._ts)) return (this._start = u), ye(this), this.render(t, e, i);
                            this._onUpdate && !e && Ge(this, "onUpdate", !0),
                                ((_ === g && this._tTime >= this.totalDuration()) || (!_ && m)) &&
                                ((u !== this._start && Math.abs(c) === Math.abs(this._ts)) ||
                                    this._lock ||
                                    ((t || !v) && ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) && de(this, 1),
                                        e || (t < 0 && !m) || (!_ && !m && g) || (Ge(this, _ === g && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < g && this.timeScale() > 0) && this._prom())));
                        }
                        return this;
                    }),
                    (i.add = function (t, e) {
                        var i = this;
                        if ((ft(e) || (e = Ae(this, e, t)), !(t instanceof xi))) {
                            if (bt(t))
                                return (
                                    t.forEach(function (t) {
                                        return i.add(t, e);
                                    }),
                                    this
                                );
                            if (dt(t)) return this.addLabel(t, e);
                            if (!pt(t)) return this;
                            t = Ii.delayedCall(0, t);
                        }
                        return this !== t ? xe(this, t, e) : this;
                    }),
                    (i.getChildren = function (t, e, i, r) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === r && (r = -nt);
                        for (var n = [], s = this._first; s;) s._start >= r && (s instanceof Ii ? e && n.push(s) : (i && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, i)))), (s = s._next);
                        return n;
                    }),
                    (i.getById = function (t) {
                        for (var e = this.getChildren(1, 1, 1), i = e.length; i--;) if (e[i].vars.id === t) return e[i];
                    }),
                    (i.remove = function (t) {
                        return dt(t) ? this.removeLabel(t) : pt(t) ? this.killTweensOf(t) : (ue(this, t), t === this._recent && (this._recent = this._last), pe(this));
                    }),
                    (i.totalTime = function (e, i) {
                        return arguments.length
                            ? ((this._forcing = 1),
                                !this._dp && this._ts && (this._start = Zt(li.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                                t.prototype.totalTime.call(this, e, i),
                                (this._forcing = 0),
                                this)
                            : this._tTime;
                    }),
                    (i.addLabel = function (t, e) {
                        return (this.labels[t] = Ae(this, e)), this;
                    }),
                    (i.removeLabel = function (t) {
                        return delete this.labels[t], this;
                    }),
                    (i.addPause = function (t, e, i) {
                        var r = Ii.delayedCall(0, e || zt, i);
                        return (r.data = "isPause"), (this._hasPause = 1), xe(this, r, Ae(this, t));
                    }),
                    (i.removePause = function (t) {
                        var e = this._first;
                        for (t = Ae(this, t); e;) e._start === t && "isPause" === e.data && de(e), (e = e._next);
                    }),
                    (i.killTweensOf = function (t, e, i) {
                        for (var r = this.getTweensOf(t, i), n = r.length; n--;) Si !== r[n] && r[n].kill(t, e);
                        return this;
                    }),
                    (i.getTweensOf = function (t, e) {
                        for (var i, r = [], n = qe(t), s = this._first, o = ft(e); s;)
                            s instanceof Ii
                                ? te(s._targets, n) && (o ? (!Si || (s._initted && s._ts)) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s)
                                : (i = s.getTweensOf(n, e)).length && r.push.apply(r, i),
                                (s = s._next);
                        return r;
                    }),
                    (i.tweenTo = function (t, e) {
                        e = e || {};
                        var i,
                            r = this,
                            n = Ae(r, t),
                            s = e,
                            o = s.startAt,
                            a = s.onStart,
                            l = s.onStartParams,
                            h = s.immediateRender,
                            c = Ii.to(
                                r,
                                se(
                                    {
                                        ease: e.ease || "none",
                                        lazy: !1,
                                        immediateRender: !1,
                                        time: n,
                                        overwrite: "auto",
                                        duration: e.duration || Math.abs((n - (o && "time" in o ? o.time : r._time)) / r.timeScale()) || st,
                                        onStart: function () {
                                            if ((r.pause(), !i)) {
                                                var t = e.duration || Math.abs((n - (o && "time" in o ? o.time : r._time)) / r.timeScale());
                                                c._dur !== t && Me(c, t, 0, 1).render(c._time, !0, !0), (i = 1);
                                            }
                                            a && a.apply(c, l || []);
                                        },
                                    },
                                    e
                                )
                            );
                        return h ? c.render(0) : c;
                    }),
                    (i.tweenFromTo = function (t, e, i) {
                        return this.tweenTo(e, se({ startAt: { time: Ae(this, t) } }, i));
                    }),
                    (i.recent = function () {
                        return this._recent;
                    }),
                    (i.nextLabel = function (t) {
                        return void 0 === t && (t = this._time), je(this, Ae(this, t));
                    }),
                    (i.previousLabel = function (t) {
                        return void 0 === t && (t = this._time), je(this, Ae(this, t), 1);
                    }),
                    (i.currentLabel = function (t) {
                        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + st);
                    }),
                    (i.shiftChildren = function (t, e, i) {
                        void 0 === i && (i = 0);
                        for (var r, n = this._first, s = this.labels; n;) n._start >= i && ((n._start += t), (n._end += t)), (n = n._next);
                        if (e) for (r in s) s[r] >= i && (s[r] += t);
                        return pe(this);
                    }),
                    (i.invalidate = function (e) {
                        var i = this._first;
                        for (this._lock = 0; i;) i.invalidate(e), (i = i._next);
                        return t.prototype.invalidate.call(this, e);
                    }),
                    (i.clear = function (t) {
                        void 0 === t && (t = !0);
                        for (var e, i = this._first; i;) (e = i._next), this.remove(i), (i = e);
                        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), pe(this);
                    }),
                    (i.totalDuration = function (t) {
                        var e,
                            i,
                            r,
                            n = 0,
                            s = this,
                            o = s._last,
                            a = nt;
                        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                        if (s._dirty) {
                            for (r = s.parent; o;)
                                (e = o._prev),
                                    o._dirty && o.totalDuration(),
                                    (i = o._start) > a && s._sort && o._ts && !s._lock ? ((s._lock = 1), (xe(s, o, i - o._delay, 1)._lock = 0)) : (a = i),
                                    i < 0 && o._ts && ((n -= i), ((!r && !s._dp) || (r && r.smoothChildTiming)) && ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)), s.shiftChildren(-i, !1, -Infinity), (a = 0)),
                                    o._end > n && o._ts && (n = o._end),
                                    (o = e);
                            Me(s, s === X && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
                        }
                        return s._tDur;
                    }),
                    (e.updateRoot = function (t) {
                        if ((X._ts && (ie(X, _e(t, X)), (G = li.frame)), li.frame >= Xt)) {
                            Xt += it.autoSleep || 120;
                            var e = X._first;
                            if ((!e || !e._ts) && it.autoSleep && li._listeners.length < 2) {
                                for (; e && !e._ts;) e = e._next;
                                e || li.sleep();
                            }
                        }
                    }),
                    e
                );
            })(xi);
            se(Ti.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
            var Si,
                Ei,
                $i = function (t, e, i, r, n, s, o) {
                    var a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m = new ji(this._pt, t, e, 0, 1, Wi, null, n),
                        g = 0,
                        v = 0;
                    for (m.b = i, m.e = r, i += "", (p = ~(r += "").indexOf("random(")) && (r = Ue(r)), s && (s((f = [i, r]), t, e), (i = f[0]), (r = f[1])), l = i.match(Et) || []; (a = Et.exec(r));)
                        (c = a[0]),
                            (u = r.substring(g, a.index)),
                            h ? (h = (h + 1) % 5) : "rgba(" === u.substr(-5) && (h = 1),
                            c !== l[v++] &&
                            ((d = parseFloat(l[v - 1]) || 0), (m._pt = { _next: m._pt, p: u || 1 === v ? u : ",", s: d, c: "=" === c.charAt(1) ? Qt(d, c) - d : parseFloat(c) - d, m: h && h < 4 ? Math.round : 0 }), (g = Et.lastIndex));
                    return (m.c = g < r.length ? r.substring(g, r.length) : ""), (m.fp = o), ($t.test(r) || p) && (m.e = 0), (this._pt = m), m;
                },
                Mi = function (t, e, i, r, n, s, o, a, l, h) {
                    pt(r) && (r = r(n || 0, t, s));
                    var c,
                        u = t[e],
                        d = "get" !== i ? i : pt(u) ? (l ? t[e.indexOf("set") || !pt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : u,
                        p = pt(u) ? (l ? Di : Ri) : zi;
                    if ((dt(r) && (~r.indexOf("random(") && (r = Ue(r)), "=" === r.charAt(1) && ((c = Qt(d, r) + (Ie(d) || 0)) || 0 === c) && (r = c)), !h || d !== r || Ei))
                        return isNaN(d * r) || "" === r
                            ? (!u && !(e in t) && Pt(e, r), $i.call(this, t, e, d, r, p, a || it.stringFilter, l))
                            : ((c = new ji(this._pt, t, e, +d || 0, r - (d || 0), "boolean" == typeof u ? Bi : Ni, 0, p)), l && (c.fp = l), o && c.modifier(o, this, t), (this._pt = c));
                },
                ki = function (t, e, i, r, n, s) {
                    var o, a, l, h;
                    if (
                        Wt[t] &&
                        !1 !==
                        (o = new Wt[t]()).init(
                            n,
                            o.rawVars
                                ? e[t]
                                : (function (t, e, i, r, n) {
                                    if ((pt(t) && (t = Li(t, n, e, i, r)), !gt(t) || (t.style && t.nodeType) || bt(t) || wt(t))) return dt(t) ? Li(t, n, e, i, r) : t;
                                    var s,
                                        o = {};
                                    for (s in t) o[s] = Li(t[s], n, e, i, r);
                                    return o;
                                })(e[t], r, n, s, i),
                            i,
                            r,
                            s
                        ) &&
                        ((i._pt = a = new ji(i._pt, n, t, 0, 1, o.render, o, 0, o.priority)), i !== J)
                    )
                        for (l = i._ptLookup[i._targets.indexOf(n)], h = o._props.length; h--;) l[o._props[h]] = a;
                    return o;
                },
                Ci = function t(e, i, r) {
                    var n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        g,
                        v = e.vars,
                        _ = v.ease,
                        y = v.startAt,
                        w = v.immediateRender,
                        b = v.lazy,
                        x = v.onUpdate,
                        T = v.onUpdateParams,
                        S = v.callbackScope,
                        E = v.runBackwards,
                        $ = v.yoyoEase,
                        M = v.keyframes,
                        k = v.autoRevert,
                        C = e._dur,
                        A = e._startAt,
                        L = e._targets,
                        P = e.parent,
                        O = P && "nested" === P.data ? P.vars.targets : L,
                        I = "auto" === e._overwrite && !B,
                        z = e.timeline;
                    if (
                        (z && (!M || !_) && (_ = "none"),
                            (e._ease = gi(_, rt.ease)),
                            (e._yEase = $ ? fi(gi(!0 === $ ? _ : $, rt.ease)) : 0),
                            $ && e._yoyo && !e._repeat && (($ = e._yEase), (e._yEase = e._ease), (e._ease = $)),
                            (e._from = !z && !!v.runBackwards),
                            !z || (M && !v.stagger))
                    ) {
                        if (((m = (u = L[0] ? jt(L[0]).harness : 0) && v[u.prop]), (n = le(v, Ft)), A && (A._zTime < 0 && A.progress(1), i < 0 && E && w && !k ? A.render(-1, !0) : A.revert(E && C ? Dt : Rt), (A._lazy = 0)), y)) {
                            if (
                                (de(
                                    (e._startAt = Ii.set(
                                        L,
                                        se({ data: "isStart", overwrite: !1, parent: P, immediateRender: !0, lazy: !A && vt(b), startAt: null, delay: 0, onUpdate: x, onUpdateParams: T, callbackScope: S, stagger: 0 }, y)
                                    ))
                                ),
                                    (e._startAt._dp = 0),
                                    (e._startAt._sat = e),
                                    i < 0 && (W || (!w && !k)) && e._startAt.revert(Dt),
                                    w && C && i <= 0 && r <= 0)
                            )
                                return void (i && (e._zTime = i));
                        } else if (E && C && !A)
                            if (
                                (i && (w = !1),
                                    (o = se({ overwrite: !1, data: "isFromStart", lazy: w && !A && vt(b), immediateRender: w, stagger: 0, parent: P }, n)),
                                    m && (o[u.prop] = m),
                                    de((e._startAt = Ii.set(L, o))),
                                    (e._startAt._dp = 0),
                                    (e._startAt._sat = e),
                                    i < 0 && (W ? e._startAt.revert(Dt) : e._startAt.render(-1, !0)),
                                    (e._zTime = i),
                                    w)
                            ) {
                                if (!i) return;
                            } else t(e._startAt, st, st);
                        for (e._pt = e._ptCache = 0, b = (C && vt(b)) || (b && !C), s = 0; s < L.length; s++) {
                            if (
                                ((c = (l = L[s])._gsap || Vt(L)[s]._gsap),
                                    (e._ptLookup[s] = p = {}),
                                    Bt[c.id] && Nt.length && ee(),
                                    (f = O === L ? s : O.indexOf(l)),
                                    u &&
                                    !1 !== (d = new u()).init(l, m || n, e, f, O) &&
                                    ((e._pt = a = new ji(e._pt, l, d.name, 0, 1, d.render, d, 0, d.priority)),
                                        d._props.forEach(function (t) {
                                            p[t] = a;
                                        }),
                                        d.priority && (h = 1)),
                                    !u || m)
                            )
                                for (o in n) Wt[o] && (d = ki(o, n, e, f, l, O)) ? d.priority && (h = 1) : (p[o] = a = Mi.call(e, l, o, "get", n[o], f, O, 0, v.stringFilter));
                            e._op && e._op[s] && e.kill(l, e._op[s]), I && e._pt && ((Si = e), X.killTweensOf(l, p, e.globalTime(i)), (g = !e.parent), (Si = 0)), e._pt && b && (Bt[c.id] = 1);
                        }
                        h && Vi(e), e._onInit && e._onInit(e);
                    }
                    (e._onUpdate = x), (e._initted = (!e._op || e._pt) && !g), M && i <= 0 && z.render(nt, !0, !0);
                },
                Ai = function (t, e, i, r) {
                    var n,
                        s,
                        o = e.ease || r || "power1.inOut";
                    if (bt(e))
                        (s = i[t] || (i[t] = [])),
                            e.forEach(function (t, i) {
                                return s.push({ t: (i / (e.length - 1)) * 100, v: t, e: o });
                            });
                    else for (n in e) (s = i[n] || (i[n] = [])), "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: o });
                },
                Li = function (t, e, i, r, n) {
                    return pt(t) ? t.call(e, i, r, n) : dt(t) && ~t.indexOf("random(") ? Ue(t) : t;
                },
                Pi = Ut + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
                Oi = {};
            Jt(Pi + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
                return (Oi[t] = 1);
            });
            var Ii = (function (t) {
                function e(e, i, r, n) {
                    var s;
                    "number" == typeof i && ((r.duration = i), (i = r), (r = null));
                    var o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f = (s = t.call(this, n ? i : he(i)) || this).vars,
                        m = f.duration,
                        g = f.delay,
                        v = f.immediateRender,
                        _ = f.stagger,
                        y = f.overwrite,
                        w = f.keyframes,
                        b = f.defaults,
                        x = f.scrollTrigger,
                        T = f.yoyoEase,
                        S = i.parent || X,
                        E = (bt(e) || wt(e) ? ft(e[0]) : "length" in i) ? [e] : qe(e);
                    if (((s._targets = E.length ? Vt(E) : Ot("GSAP target " + e + " not found. https://greensock.com", !it.nullTargetWarn) || []), (s._ptLookup = []), (s._overwrite = y), w || _ || yt(m) || yt(g))) {
                        if (((i = s.vars), (o = s.timeline = new Ti({ data: "nested", defaults: b || {}, targets: S && "nested" === S.data ? S.vars.targets : E })).kill(), (o.parent = o._dp = F(s)), (o._start = 0), _ || yt(m) || yt(g))) {
                            if (((h = E.length), (d = _ && Be(_)), gt(_))) for (c in _) ~Pi.indexOf(c) && (p || (p = {}), (p[c] = _[c]));
                            for (a = 0; a < h; a++)
                                ((l = le(i, Oi)).stagger = 0),
                                    T && (l.yoyoEase = T),
                                    p && oe(l, p),
                                    (u = E[a]),
                                    (l.duration = +Li(m, F(s), a, u, E)),
                                    (l.delay = (+Li(g, F(s), a, u, E) || 0) - s._delay),
                                    !_ && 1 === h && l.delay && ((s._delay = g = l.delay), (s._start += g), (l.delay = 0)),
                                    o.to(u, l, d ? d(a, u, E) : 0),
                                    (o._ease = ci.none);
                            o.duration() ? (m = g = 0) : (s.timeline = 0);
                        } else if (w) {
                            he(se(o.vars.defaults, { ease: "none" })), (o._ease = gi(w.ease || i.ease || "none"));
                            var $,
                                M,
                                k,
                                C = 0;
                            if (bt(w))
                                w.forEach(function (t) {
                                    return o.to(E, t, ">");
                                }),
                                    o.duration();
                            else {
                                for (c in ((l = {}), w)) "ease" === c || "easeEach" === c || Ai(c, w[c], l, w.easeEach);
                                for (c in l)
                                    for (
                                        $ = l[c].sort(function (t, e) {
                                            return t.t - e.t;
                                        }),
                                        C = 0,
                                        a = 0;
                                        a < $.length;
                                        a++
                                    )
                                        ((k = { ease: (M = $[a]).e, duration: ((M.t - (a ? $[a - 1].t : 0)) / 100) * m })[c] = M.v), o.to(E, k, C), (C += k.duration);
                                o.duration() < m && o.to({}, { duration: m - o.duration() });
                            }
                        }
                        m || s.duration((m = o.duration()));
                    } else s.timeline = 0;
                    return (
                        !0 !== y || B || ((Si = F(s)), X.killTweensOf(E), (Si = 0)),
                        xe(S, F(s), r),
                        i.reversed && s.reverse(),
                        i.paused && s.paused(!0),
                        (v || (!m && !w && s._start === Zt(S._time) && vt(v) && me(F(s)) && "nested" !== S.data)) && ((s._tTime = -1e-8), s.render(Math.max(0, -g) || 0)),
                        x && Te(F(s), x),
                        s
                    );
                }
                N(e, t);
                var i = e.prototype;
                return (
                    (i.render = function (t, e, i) {
                        var r,
                            n,
                            s,
                            o,
                            a,
                            l,
                            h,
                            c,
                            u,
                            d = this._time,
                            p = this._tDur,
                            f = this._dur,
                            m = t < 0,
                            g = t > p - st && !m ? p : t < st ? 0 : t;
                        if (f) {
                            if (g !== this._tTime || !t || i || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 !== m)) {
                                if (((r = g), (c = this.timeline), this._repeat)) {
                                    if (((o = f + this._rDelay), this._repeat < -1 && m)) return this.totalTime(100 * o + t, e, i);
                                    if (
                                        ((r = Zt(g % o)),
                                            g === p ? ((s = this._repeat), (r = f)) : ((s = ~~(g / o)) && s === g / o && ((r = f), s--), r > f && (r = f)),
                                            (l = this._yoyo && 1 & s) && ((u = this._yEase), (r = f - r)),
                                            (a = ve(this._tTime, o)),
                                            r === d && !i && this._initted)
                                    )
                                        return (this._tTime = g), this;
                                    s !== a && (c && this._yEase && mi(c, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = i = 1), (this.render(Zt(o * s), !0).invalidate()._lock = 0)));
                                }
                                if (!this._initted) {
                                    if (Se(this, m ? t : r, i, e, g)) return (this._tTime = 0), this;
                                    if (d !== this._time) return this;
                                    if (f !== this._dur) return this.render(t, e, i);
                                }
                                if (
                                    ((this._tTime = g),
                                        (this._time = r),
                                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                        (this.ratio = h = (u || this._ease)(r / f)),
                                        this._from && (this.ratio = h = 1 - h),
                                        r && !d && !e && !s && (Ge(this, "onStart"), this._tTime !== g))
                                )
                                    return this;
                                for (n = this._pt; n;) n.r(h, n.d), (n = n._next);
                                (c && c.render(t < 0 ? t : !r && l ? -1e-8 : c._dur * c._ease(r / this._dur), e, i)) || (this._startAt && (this._zTime = t)),
                                    this._onUpdate && !e && (m && fe(this, t, 0, i), Ge(this, "onUpdate")),
                                    this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && Ge(this, "onRepeat"),
                                    (g !== this._tDur && g) ||
                                    this._tTime !== g ||
                                    (m && !this._onUpdate && fe(this, t, 0, !0),
                                        (t || !f) && ((g === this._tDur && this._ts > 0) || (!g && this._ts < 0)) && de(this, 1),
                                        e || (m && !d) || !(g || d || l) || (Ge(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()));
                            }
                        } else
                            !(function (t, e, i, r) {
                                var n,
                                    s,
                                    o,
                                    a = t.ratio,
                                    l = e < 0 || (!e && ((!t._start && Ee(t) && (t._initted || !$e(t))) || ((t._ts < 0 || t._dp._ts < 0) && !$e(t)))) ? 0 : 1,
                                    h = t._rDelay,
                                    c = 0;
                                if (
                                    (h && t._repeat && ((c = Oe(0, t._tDur, e)), (s = ve(c, h)), t._yoyo && 1 & s && (l = 1 - l), s !== ve(t._tTime, h) && ((a = 1 - l), t.vars.repeatRefresh && t._initted && t.invalidate())),
                                        l !== a || W || r || t._zTime === st || (!e && t._zTime))
                                ) {
                                    if (!t._initted && Se(t, e, r, i, c)) return;
                                    for (o = t._zTime, t._zTime = e || (i ? st : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = c, n = t._pt; n;) n.r(l, n.d), (n = n._next);
                                    e < 0 && fe(t, e, 0, !0),
                                        t._onUpdate && !i && Ge(t, "onUpdate"),
                                        c && t._repeat && !i && t.parent && Ge(t, "onRepeat"),
                                        (e >= t._tDur || e < 0) && t.ratio === l && (l && de(t, 1), i || W || (Ge(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                                } else t._zTime || (t._zTime = e);
                            })(this, t, e, i);
                        return this;
                    }),
                    (i.targets = function () {
                        return this._targets;
                    }),
                    (i.invalidate = function (e) {
                        return (
                            (!e || !this.vars.runBackwards) && (this._startAt = 0),
                            (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
                            (this._ptLookup = []),
                            this.timeline && this.timeline.invalidate(e),
                            t.prototype.invalidate.call(this, e)
                        );
                    }),
                    (i.resetTo = function (t, e, i, r) {
                        K || li.wake(), this._ts || this.play();
                        var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                        return (
                            this._initted || Ci(this, n),
                            (function (t, e, i, r, n, s, o) {
                                var a,
                                    l,
                                    h,
                                    c,
                                    u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
                                if (!u)
                                    for (u = t._ptCache[e] = [], h = t._ptLookup, c = t._targets.length; c--;) {
                                        if ((a = h[c][e]) && a.d && a.d._pt) for (a = a.d._pt; a && a.p !== e && a.fp !== e;) a = a._next;
                                        if (!a) return (Ei = 1), (t.vars[e] = "+=0"), Ci(t, o), (Ei = 0), 1;
                                        u.push(a);
                                    }
                                for (c = u.length; c--;) ((a = (l = u[c])._pt || l).s = (!r && 0 !== r) || n ? a.s + (r || 0) + s * a.c : r), (a.c = i - a.s), l.e && (l.e = Kt(i) + Ie(l.e)), l.b && (l.b = a.s + Ie(l.b));
                            })(this, t, e, i, r, this._ease(n / this._dur), n)
                                ? this.resetTo(t, e, i, r)
                                : (we(this, 0), this.parent || ce(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
                        );
                    }),
                    (i.kill = function (t, e) {
                        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)))) return (this._lazy = this._pt = 0), this.parent ? Je(this) : this;
                        if (this.timeline) {
                            var i = this.timeline.totalDuration();
                            return this.timeline.killTweensOf(t, e, Si && !0 !== Si.vars.overwrite)._first || Je(this), this.parent && i !== this.timeline.totalDuration() && Me(this, (this._dur * this.timeline._tDur) / i, 0, 1), this;
                        }
                        var r,
                            n,
                            s,
                            o,
                            a,
                            l,
                            h,
                            c = this._targets,
                            u = t ? qe(t) : c,
                            d = this._ptLookup,
                            p = this._pt;
                        if (
                            (!e || "all" === e) &&
                            (function (t, e) {
                                for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i];);
                                return i < 0;
                            })(c, u)
                        )
                            return "all" === e && (this._pt = 0), Je(this);
                        for (
                            r = this._op = this._op || [],
                            "all" !== e &&
                            (dt(e) &&
                                ((a = {}),
                                    Jt(e, function (t) {
                                        return (a[t] = 1);
                                    }),
                                    (e = a)),
                                (e = (function (t, e) {
                                    var i,
                                        r,
                                        n,
                                        s,
                                        o = t[0] ? jt(t[0]).harness : 0,
                                        a = o && o.aliases;
                                    if (!a) return e;
                                    for (r in ((i = oe({}, e)), a)) if ((r in i)) for (n = (s = a[r].split(",")).length; n--;) i[s[n]] = i[r];
                                    return i;
                                })(c, e))),
                            h = c.length;
                            h--;

                        )
                            if (~u.indexOf(c[h]))
                                for (a in ((n = d[h]), "all" === e ? ((r[h] = e), (o = n), (s = {})) : ((s = r[h] = r[h] || {}), (o = e)), o))
                                    (l = n && n[a]) && (("kill" in l.d && !0 !== l.d.kill(a)) || ue(this, l, "_pt"), delete n[a]), "all" !== s && (s[a] = 1);
                        return this._initted && !this._pt && p && Je(this), this;
                    }),
                    (e.to = function (t, i) {
                        return new e(t, i, arguments[2]);
                    }),
                    (e.from = function (t, e) {
                        return Le(1, arguments);
                    }),
                    (e.delayedCall = function (t, i, r, n) {
                        return new e(i, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: i, onReverseComplete: i, onCompleteParams: r, onReverseCompleteParams: r, callbackScope: n });
                    }),
                    (e.fromTo = function (t, e, i) {
                        return Le(2, arguments);
                    }),
                    (e.set = function (t, i) {
                        return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
                    }),
                    (e.killTweensOf = function (t, e, i) {
                        return X.killTweensOf(t, e, i);
                    }),
                    e
                );
            })(xi);
            se(Ii.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
                Jt("staggerTo,staggerFrom,staggerFromTo", function (t) {
                    Ii[t] = function () {
                        var e = new Ti(),
                            i = ze.call(arguments, 0);
                        return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
                    };
                });
            var zi = function (t, e, i) {
                return (t[e] = i);
            },
                Ri = function (t, e, i) {
                    return t[e](i);
                },
                Di = function (t, e, i, r) {
                    return t[e](r.fp, i);
                },
                qi = function (t, e, i) {
                    return t.setAttribute(e, i);
                },
                Fi = function (t, e) {
                    return pt(t[e]) ? Ri : mt(t[e]) && t.setAttribute ? qi : zi;
                },
                Ni = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
                },
                Bi = function (t, e) {
                    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
                },
                Wi = function (t, e) {
                    var i = e._pt,
                        r = "";
                    if (!t && e.b) r = e.b;
                    else if (1 === t && e.e) r = e.e;
                    else {
                        for (; i;) (r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r), (i = i._next);
                        r += e.c;
                    }
                    e.set(e.t, e.p, r, e);
                },
                Yi = function (t, e) {
                    for (var i = e._pt; i;) i.r(t, i.d), (i = i._next);
                },
                Xi = function (t, e, i, r) {
                    for (var n, s = this._pt; s;) (n = s._next), s.p === r && s.modifier(t, e, i), (s = n);
                },
                Hi = function (t) {
                    for (var e, i, r = this._pt; r;) (i = r._next), (r.p === t && !r.op) || r.op === t ? ue(this, r, "_pt") : r.dep || (e = 1), (r = i);
                    return !e;
                },
                Ui = function (t, e, i, r) {
                    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
                },
                Vi = function (t) {
                    for (var e, i, r, n, s = t._pt; s;) {
                        for (e = s._next, i = r; i && i.pr > s.pr;) i = i._next;
                        (s._prev = i ? i._prev : n) ? (s._prev._next = s) : (r = s), (s._next = i) ? (i._prev = s) : (n = s), (s = e);
                    }
                    t._pt = r;
                },
                ji = (function () {
                    function t(t, e, i, r, n, s, o, a, l) {
                        (this.t = e), (this.s = r), (this.c = n), (this.p = i), (this.r = s || Ni), (this.d = o || this), (this.set = a || zi), (this.pr = l || 0), (this._next = t), t && (t._prev = this);
                    }
                    return (
                        (t.prototype.modifier = function (t, e, i) {
                            (this.mSet = this.mSet || this.set), (this.set = Ui), (this.m = t), (this.mt = i), (this.tween = e);
                        }),
                        t
                    );
                })();
            Jt(
                Ut +
                "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
                function (t) {
                    return (Ft[t] = 1);
                }
            ),
                (Ct.TweenMax = Ct.TweenLite = Ii),
                (Ct.TimelineLite = Ct.TimelineMax = Ti),
                (X = new Ti({ sortChildren: !1, defaults: rt, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
                (it.stringFilter = ai);
            var Gi = [],
                Ji = {},
                Ki = [],
                Zi = 0,
                Qi = 0,
                tr = function (t) {
                    return (Ji[t] || Ki).map(function (t) {
                        return t();
                    });
                },
                er = function () {
                    var t = Date.now(),
                        e = [];
                    t - Zi > 2 &&
                        (tr("matchMediaInit"),
                            Gi.forEach(function (t) {
                                var i,
                                    r,
                                    n,
                                    s,
                                    o = t.queries,
                                    a = t.conditions;
                                for (r in o) (i = H.matchMedia(o[r]).matches) && (n = 1), i !== a[r] && ((a[r] = i), (s = 1));
                                s && (t.revert(), n && e.push(t));
                            }),
                            tr("matchMediaRevert"),
                            e.forEach(function (t) {
                                return t.onMatch(t);
                            }),
                            (Zi = t),
                            tr("matchMedia"));
                },
                ir = (function () {
                    function t(t, e) {
                        (this.selector = e && Fe(e)), (this.data = []), (this._r = []), (this.isReverted = !1), (this.id = Qi++), t && this.add(t);
                    }
                    var e = t.prototype;
                    return (
                        (e.add = function (t, e, i) {
                            pt(t) && ((i = e), (e = t), (t = pt));
                            var r = this,
                                n = function () {
                                    var t,
                                        n = Y,
                                        s = r.selector;
                                    return n && n !== r && n.data.push(r), i && (r.selector = Fe(i)), (Y = r), (t = e.apply(r, arguments)), pt(t) && r._r.push(t), (Y = n), (r.selector = s), (r.isReverted = !1), t;
                                };
                            return (r.last = n), t === pt ? n(r) : t ? (r[t] = n) : n;
                        }),
                        (e.ignore = function (t) {
                            var e = Y;
                            (Y = null), t(this), (Y = e);
                        }),
                        (e.getTweens = function () {
                            var e = [];
                            return (
                                this.data.forEach(function (i) {
                                    return i instanceof t ? e.push.apply(e, i.getTweens()) : i instanceof Ii && !(i.parent && "nested" === i.parent.data) && e.push(i);
                                }),
                                e
                            );
                        }),
                        (e.clear = function () {
                            this._r.length = this.data.length = 0;
                        }),
                        (e.kill = function (t, e) {
                            var i = this;
                            if (t) {
                                var r = this.getTweens();
                                this.data.forEach(function (t) {
                                    "isFlip" === t.data &&
                                        (t.revert(),
                                            t.getChildren(!0, !0, !1).forEach(function (t) {
                                                return r.splice(r.indexOf(t), 1);
                                            }));
                                }),
                                    r
                                        .map(function (t) {
                                            return { g: t.globalTime(0), t };
                                        })
                                        .sort(function (t, e) {
                                            return e.g - t.g || -1 / 0;
                                        })
                                        .forEach(function (e) {
                                            return e.t.revert(t);
                                        }),
                                    this.data.forEach(function (e) {
                                        return !(e instanceof Ii) && e.revert && e.revert(t);
                                    }),
                                    this._r.forEach(function (e) {
                                        return e(t, i);
                                    }),
                                    (this.isReverted = !0);
                            } else
                                this.data.forEach(function (t) {
                                    return t.kill && t.kill();
                                });
                            if ((this.clear(), e)) for (var n = Gi.length; n--;) Gi[n].id === this.id && Gi.splice(n, 1);
                        }),
                        (e.revert = function (t) {
                            this.kill(t || {});
                        }),
                        t
                    );
                })(),
                rr = (function () {
                    function t(t) {
                        (this.contexts = []), (this.scope = t);
                    }
                    var e = t.prototype;
                    return (
                        (e.add = function (t, e, i) {
                            gt(t) || (t = { matches: t });
                            var r,
                                n,
                                s,
                                o = new ir(0, i || this.scope),
                                a = (o.conditions = {});
                            for (n in (Y && !o.selector && (o.selector = Y.selector), this.contexts.push(o), (e = o.add("onMatch", e)), (o.queries = t), t))
                                "all" === n ? (s = 1) : (r = H.matchMedia(t[n])) && (Gi.indexOf(o) < 0 && Gi.push(o), (a[n] = r.matches) && (s = 1), r.addListener ? r.addListener(er) : r.addEventListener("change", er));
                            return s && e(o), this;
                        }),
                        (e.revert = function (t) {
                            this.kill(t || {});
                        }),
                        (e.kill = function (t) {
                            this.contexts.forEach(function (e) {
                                return e.kill(t, !0);
                            });
                        }),
                        t
                    );
                })(),
                nr = {
                    registerPlugin: function () {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                        e.forEach(function (t) {
                            return Ze(t);
                        });
                    },
                    timeline: function (t) {
                        return new Ti(t);
                    },
                    getTweensOf: function (t, e) {
                        return X.getTweensOf(t, e);
                    },
                    getProperty: function (t, e, i, r) {
                        dt(t) && (t = qe(t)[0]);
                        var n = jt(t || {}).get,
                            s = i ? ne : re;
                        return (
                            "native" === i && (i = ""),
                            t
                                ? e
                                    ? s(((Wt[e] && Wt[e].get) || n)(t, e, i, r))
                                    : function (e, i, r) {
                                        return s(((Wt[e] && Wt[e].get) || n)(t, e, i, r));
                                    }
                                : t
                        );
                    },
                    quickSetter: function (t, e, i) {
                        if ((t = qe(t)).length > 1) {
                            var r = t.map(function (t) {
                                return ar.quickSetter(t, e, i);
                            }),
                                n = r.length;
                            return function (t) {
                                for (var e = n; e--;) r[e](t);
                            };
                        }
                        t = t[0] || {};
                        var s = Wt[e],
                            o = jt(t),
                            a = (o.harness && (o.harness.aliases || {})[e]) || e,
                            l = s
                                ? function (e) {
                                    var r = new s();
                                    (J._pt = 0), r.init(t, i ? e + i : e, J, 0, [t]), r.render(1, r), J._pt && Yi(1, J);
                                }
                                : o.set(t, a);
                        return s
                            ? l
                            : function (e) {
                                return l(t, a, i ? e + i : e, o, 1);
                            };
                    },
                    quickTo: function (t, e, i) {
                        var r,
                            n = ar.to(t, oe((((r = {})[e] = "+=0.1"), (r.paused = !0), r), i || {})),
                            s = function (t, i, r) {
                                return n.resetTo(e, t, i, r);
                            };
                        return (s.tween = n), s;
                    },
                    isTweening: function (t) {
                        return X.getTweensOf(t, !0).length > 0;
                    },
                    defaults: function (t) {
                        return t && t.ease && (t.ease = gi(t.ease, rt.ease)), ae(rt, t || {});
                    },
                    config: function (t) {
                        return ae(it, t || {});
                    },
                    registerEffect: function (t) {
                        var e = t.name,
                            i = t.effect,
                            r = t.plugins,
                            n = t.defaults,
                            s = t.extendTimeline;
                        (r || "").split(",").forEach(function (t) {
                            return t && !Wt[t] && !Ct[t] && Ot(e + " effect requires " + t + " plugin.");
                        }),
                            (Yt[e] = function (t, e, r) {
                                return i(qe(t), se(e || {}, n), r);
                            }),
                            s &&
                            (Ti.prototype[e] = function (t, i, r) {
                                return this.add(Yt[e](t, gt(i) ? i : (r = i) && {}, this), r);
                            });
                    },
                    registerEase: function (t, e) {
                        ci[t] = gi(e);
                    },
                    parseEase: function (t, e) {
                        return arguments.length ? gi(t, e) : ci;
                    },
                    getById: function (t) {
                        return X.getById(t);
                    },
                    exportRoot: function (t, e) {
                        void 0 === t && (t = {});
                        var i,
                            r,
                            n = new Ti(t);
                        for (n.smoothChildTiming = vt(t.smoothChildTiming), X.remove(n), n._dp = 0, n._time = n._tTime = X._time, i = X._first; i;)
                            (r = i._next), (!e && !i._dur && i instanceof Ii && i.vars.onComplete === i._targets[0]) || xe(n, i, i._start - i._delay), (i = r);
                        return xe(X, n, 0), n;
                    },
                    context: function (t, e) {
                        return t ? new ir(t, e) : Y;
                    },
                    matchMedia: function (t) {
                        return new rr(t);
                    },
                    matchMediaRefresh: function () {
                        return (
                            Gi.forEach(function (t) {
                                var e,
                                    i,
                                    r = t.conditions;
                                for (i in r) r[i] && ((r[i] = !1), (e = 1));
                                e && t.revert();
                            }) || er()
                        );
                    },
                    addEventListener: function (t, e) {
                        var i = Ji[t] || (Ji[t] = []);
                        ~i.indexOf(e) || i.push(e);
                    },
                    removeEventListener: function (t, e) {
                        var i = Ji[t],
                            r = i && i.indexOf(e);
                        r >= 0 && i.splice(r, 1);
                    },
                    utils: {
                        wrap: function t(e, i, r) {
                            var n = i - e;
                            return bt(e)
                                ? He(e, t(0, e.length), i)
                                : Pe(r, function (t) {
                                    return ((n + ((t - e) % n)) % n) + e;
                                });
                        },
                        wrapYoyo: function t(e, i, r) {
                            var n = i - e,
                                s = 2 * n;
                            return bt(e)
                                ? He(e, t(0, e.length - 1), i)
                                : Pe(r, function (t) {
                                    return e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t);
                                });
                        },
                        distribute: Be,
                        random: Xe,
                        snap: Ye,
                        normalize: function (t, e, i) {
                            return Ve(t, e, 0, 1, i);
                        },
                        getUnit: Ie,
                        clamp: function (t, e, i) {
                            return Pe(i, function (i) {
                                return Oe(t, e, i);
                            });
                        },
                        splitColor: ii,
                        toArray: qe,
                        selector: Fe,
                        mapRange: Ve,
                        pipe: function () {
                            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                            return function (t) {
                                return e.reduce(function (t, e) {
                                    return e(t);
                                }, t);
                            };
                        },
                        unitize: function (t, e) {
                            return function (i) {
                                return t(parseFloat(i)) + (e || Ie(i));
                            };
                        },
                        interpolate: function t(e, i, r, n) {
                            var s = isNaN(e + i)
                                ? 0
                                : function (t) {
                                    return (1 - t) * e + t * i;
                                };
                            if (!s) {
                                var o,
                                    a,
                                    l,
                                    h,
                                    c,
                                    u = dt(e),
                                    d = {};
                                if ((!0 === r && (n = 1) && (r = null), u)) (e = { p: e }), (i = { p: i });
                                else if (bt(e) && !bt(i)) {
                                    for (l = [], h = e.length, c = h - 2, a = 1; a < h; a++) l.push(t(e[a - 1], e[a]));
                                    h--,
                                        (s = function (t) {
                                            t *= h;
                                            var e = Math.min(c, ~~t);
                                            return l[e](t - e);
                                        }),
                                        (r = i);
                                } else n || (e = oe(bt(e) ? [] : {}, e));
                                if (!l) {
                                    for (o in i) Mi.call(d, e, o, "get", i[o]);
                                    s = function (t) {
                                        return Yi(t, d) || (u ? e.p : e);
                                    };
                                }
                            }
                            return Pe(r, s);
                        },
                        shuffle: Ne,
                    },
                    install: Lt,
                    effects: Yt,
                    ticker: li,
                    updateRoot: Ti.updateRoot,
                    plugins: Wt,
                    globalTimeline: X,
                    core: {
                        PropTween: ji,
                        globals: It,
                        Tween: Ii,
                        Timeline: Ti,
                        Animation: xi,
                        getCache: jt,
                        _removeLinkedListItem: ue,
                        reverting: function () {
                            return W;
                        },
                        context: function (t) {
                            return t && Y && (Y.data.push(t), (t._ctx = Y)), Y;
                        },
                        suppressOverwrites: function (t) {
                            return (B = t);
                        },
                    },
                };
            Jt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
                return (nr[t] = Ii[t]);
            }),
                li.add(Ti.updateRoot),
                (J = nr.to({}, { duration: 0 }));
            var sr = function (t, e) {
                for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
                return i;
            },
                or = function (t, e) {
                    return {
                        name: t,
                        rawVars: 1,
                        init: function (t, i, r) {
                            r._onInit = function (t) {
                                var r, n;
                                if (
                                    (dt(i) &&
                                        ((r = {}),
                                            Jt(i, function (t) {
                                                return (r[t] = 1);
                                            }),
                                            (i = r)),
                                        e)
                                ) {
                                    for (n in ((r = {}), i)) r[n] = e(i[n]);
                                    i = r;
                                }
                                !(function (t, e) {
                                    var i,
                                        r,
                                        n,
                                        s = t._targets;
                                    for (i in e) for (r = s.length; r--;) (n = t._ptLookup[r][i]) && (n = n.d) && (n._pt && (n = sr(n, i)), n && n.modifier && n.modifier(e[i], t, s[r], i));
                                })(t, i);
                            };
                        },
                    };
                },
                ar =
                    nr.registerPlugin(
                        {
                            name: "attr",
                            init: function (t, e, i, r, n) {
                                var s, o, a;
                                for (s in ((this.tween = i), e)) (a = t.getAttribute(s) || ""), ((o = this.add(t, "setAttribute", (a || 0) + "", e[s], r, n, 0, 0, s)).op = s), (o.b = a), this._props.push(s);
                            },
                            render: function (t, e) {
                                for (var i = e._pt; i;) W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
                            },
                        },
                        {
                            name: "endArray",
                            init: function (t, e) {
                                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
                            },
                        },
                        or("roundProps", We),
                        or("modifiers"),
                        or("snap", Ye)
                    ) || nr;
            (Ii.version = Ti.version = ar.version = "3.12.2"), (j = 1), _t() && hi();
            ci.Power0, ci.Power1, ci.Power2, ci.Power3, ci.Power4, ci.Linear, ci.Quad, ci.Cubic, ci.Quart, ci.Quint, ci.Strong, ci.Elastic, ci.Back, ci.SteppedEase, ci.Bounce, ci.Sine, ci.Expo, ci.Circ;
            var lr,
                hr,
                cr,
                ur,
                dr,
                pr,
                fr,
                mr,
                gr = {},
                vr = 180 / Math.PI,
                _r = Math.PI / 180,
                yr = Math.atan2,
                wr = /([A-Z])/g,
                br = /(left|right|width|margin|padding|x)/i,
                xr = /[\s,\(]\S/,
                Tr = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
                Sr = function (t, e) {
                    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                Er = function (t, e) {
                    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
                },
                $r = function (t, e) {
                    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
                },
                Mr = function (t, e) {
                    var i = e.s + e.c * t;
                    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
                },
                kr = function (t, e) {
                    return e.set(e.t, e.p, t ? e.e : e.b, e);
                },
                Cr = function (t, e) {
                    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
                },
                Ar = function (t, e, i) {
                    return (t.style[e] = i);
                },
                Lr = function (t, e, i) {
                    return t.style.setProperty(e, i);
                },
                Pr = function (t, e, i) {
                    return (t._gsap[e] = i);
                },
                Or = function (t, e, i) {
                    return (t._gsap.scaleX = t._gsap.scaleY = i);
                },
                Ir = function (t, e, i, r, n) {
                    var s = t._gsap;
                    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
                },
                zr = function (t, e, i, r, n) {
                    var s = t._gsap;
                    (s[e] = i), s.renderTransform(n, s);
                },
                Rr = "transform",
                Dr = Rr + "Origin",
                qr = function t(e, i) {
                    var r = this,
                        n = this.target,
                        s = n.style;
                    if (e in gr && s) {
                        if (((this.tfm = this.tfm || {}), "transform" === e))
                            return Tr.transform.split(",").forEach(function (e) {
                                return t.call(r, e, i);
                            });
                        if (
                            (~(e = Tr[e] || e).indexOf(",")
                                ? e.split(",").forEach(function (t) {
                                    return (r.tfm[t] = rn(n, t));
                                })
                                : (this.tfm[e] = n._gsap.x ? n._gsap[e] : rn(n, e)),
                                this.props.indexOf(Rr) >= 0)
                        )
                            return;
                        n._gsap.svg && ((this.svgo = n.getAttribute("data-svg-origin")), this.props.push(Dr, i, "")), (e = Rr);
                    }
                    (s || i) && this.props.push(e, i, s[e]);
                },
                Fr = function (t) {
                    t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
                },
                Nr = function () {
                    var t,
                        e,
                        i = this.props,
                        r = this.target,
                        n = r.style,
                        s = r._gsap;
                    for (t = 0; t < i.length; t += 3) i[t + 1] ? (r[i[t]] = i[t + 2]) : i[t + 2] ? (n[i[t]] = i[t + 2]) : n.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(wr, "-$1").toLowerCase());
                    if (this.tfm) {
                        for (e in this.tfm) s[e] = this.tfm[e];
                        s.svg && (s.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), ((t = fr()) && t.isStart) || n[Rr] || (Fr(n), (s.uncache = 1));
                    }
                },
                Br = function (t, e) {
                    var i = { target: t, props: [], revert: Nr, save: qr };
                    return (
                        t._gsap || ar.core.getCache(t),
                        e &&
                        e.split(",").forEach(function (t) {
                            return i.save(t);
                        }),
                        i
                    );
                },
                Wr = function (t, e) {
                    var i = hr.createElementNS ? hr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : hr.createElement(t);
                    return i.style ? i : hr.createElement(t);
                },
                Yr = function t(e, i, r) {
                    var n = getComputedStyle(e);
                    return n[i] || n.getPropertyValue(i.replace(wr, "-$1").toLowerCase()) || n.getPropertyValue(i) || (!r && t(e, Hr(i) || i, 1)) || "";
                },
                Xr = "O,Moz,ms,Ms,Webkit".split(","),
                Hr = function (t, e, i) {
                    var r = (e || dr).style,
                        n = 5;
                    if (t in r && !i) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Xr[n] + t in r););
                    return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Xr[n] : "") + t;
                },
                Ur = function () {
                    "undefined" != typeof window &&
                        window.document &&
                        ((lr = window),
                            (hr = lr.document),
                            (cr = hr.documentElement),
                            (dr = Wr("div") || { style: {} }),
                            Wr("div"),
                            (Rr = Hr(Rr)),
                            (Dr = Rr + "Origin"),
                            (dr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                            (mr = !!Hr("perspective")),
                            (fr = ar.core.reverting),
                            (ur = 1));
                },
                Vr = function t(e) {
                    var i,
                        r = Wr("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                        n = this.parentNode,
                        s = this.nextSibling,
                        o = this.style.cssText;
                    if ((cr.appendChild(r), r.appendChild(this), (this.style.display = "block"), e))
                        try {
                            (i = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = t);
                        } catch (t) { }
                    else this._gsapBBox && (i = this._gsapBBox());
                    return n && (s ? n.insertBefore(this, s) : n.appendChild(this)), cr.removeChild(r), (this.style.cssText = o), i;
                },
                jr = function (t, e) {
                    for (var i = e.length; i--;) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
                },
                Gr = function (t) {
                    var e;
                    try {
                        e = t.getBBox();
                    } catch (i) {
                        e = Vr.call(t, !0);
                    }
                    return (e && (e.width || e.height)) || t.getBBox === Vr || (e = Vr.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +jr(t, ["x", "cx", "x1"]) || 0, y: +jr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
                },
                Jr = function (t) {
                    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Gr(t));
                },
                Kr = function (t, e) {
                    if (e) {
                        var i = t.style;
                        e in gr && e !== Dr && (e = Rr), i.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), i.removeProperty(e.replace(wr, "-$1").toLowerCase())) : i.removeAttribute(e);
                    }
                },
                Zr = function (t, e, i, r, n, s) {
                    var o = new ji(t._pt, e, i, 0, 1, s ? Cr : kr);
                    return (t._pt = o), (o.b = r), (o.e = n), t._props.push(i), o;
                },
                Qr = { deg: 1, rad: 1, turn: 1 },
                tn = { grid: 1, flex: 1 },
                en = function t(e, i, r, n) {
                    var s,
                        o,
                        a,
                        l,
                        h = parseFloat(r) || 0,
                        c = (r + "").trim().substr((h + "").length) || "px",
                        u = dr.style,
                        d = br.test(i),
                        p = "svg" === e.tagName.toLowerCase(),
                        f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                        m = 100,
                        g = "px" === n,
                        v = "%" === n;
                    return n === c || !h || Qr[n] || Qr[c]
                        ? h
                        : ("px" !== c && !g && (h = t(e, i, r, "px")),
                            (l = e.getCTM && Jr(e)),
                            (!v && "%" !== c) || (!gr[i] && !~i.indexOf("adius"))
                                ? ((u[d ? "width" : "height"] = m + (g ? c : n)),
                                    (o = ~i.indexOf("adius") || ("em" === n && e.appendChild && !p) ? e : e.parentNode),
                                    l && (o = (e.ownerSVGElement || {}).parentNode),
                                    (o && o !== hr && o.appendChild) || (o = hr.body),
                                    (a = o._gsap) && v && a.width && d && a.time === li.time && !a.uncache
                                        ? Kt((h / a.width) * m)
                                        : ((v || "%" === c) && !tn[Yr(o, "display")] && (u.position = Yr(e, "position")),
                                            o === e && (u.position = "static"),
                                            o.appendChild(dr),
                                            (s = dr[f]),
                                            o.removeChild(dr),
                                            (u.position = "absolute"),
                                            d && v && (((a = jt(o)).time = li.time), (a.width = o[f])),
                                            Kt(g ? (s * h) / m : s && h ? (m / s) * h : 0)))
                                : ((s = l ? e.getBBox()[d ? "width" : "height"] : e[f]), Kt(v ? (h / s) * m : (h / 100) * s)));
                },
                rn = function (t, e, i, r) {
                    var n;
                    return (
                        ur || Ur(),
                        e in Tr && "transform" !== e && ~(e = Tr[e]).indexOf(",") && (e = e.split(",")[0]),
                        gr[e] && "transform" !== e
                            ? ((n = fn(t, r)), (n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : mn(Yr(t, Dr)) + " " + n.zOrigin + "px"))
                            : (!(n = t.style[e]) || "auto" === n || r || ~(n + "").indexOf("calc(")) && (n = (an[e] && an[e](t, e, i)) || Yr(t, e) || Gt(t, e) || ("opacity" === e ? 1 : 0)),
                        i && !~(n + "").trim().indexOf(" ") ? en(t, e, n, i) + i : n
                    );
                },
                nn = function (t, e, i, r) {
                    if (!i || "none" === i) {
                        var n = Hr(e, t, 1),
                            s = n && Yr(t, n, 1);
                        s && s !== i ? ((e = n), (i = s)) : "borderColor" === e && (i = Yr(t, "borderTopColor"));
                    }
                    var o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        g,
                        v = new ji(this._pt, t.style, e, 0, 1, Wi),
                        _ = 0,
                        y = 0;
                    if (((v.b = i), (v.e = r), (i += ""), "auto" === (r += "") && ((t.style[e] = r), (r = Yr(t, e) || r), (t.style[e] = i)), ai((o = [i, r])), (r = o[1]), (l = (i = o[0]).match(St) || []), (r.match(St) || []).length)) {
                        for (; (a = St.exec(r));)
                            (d = a[0]),
                                (f = r.substring(_, a.index)),
                                c ? (c = (c + 1) % 5) : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) || (c = 1),
                                d !== (u = l[y++] || "") &&
                                ((h = parseFloat(u) || 0),
                                    (g = u.substr((h + "").length)),
                                    "=" === d.charAt(1) && (d = Qt(h, d) + g),
                                    (p = parseFloat(d)),
                                    (m = d.substr((p + "").length)),
                                    (_ = St.lastIndex - m.length),
                                    m || ((m = m || it.units[e] || g), _ === r.length && ((r += m), (v.e += m))),
                                    g !== m && (h = en(t, e, u, m) || 0),
                                    (v._pt = { _next: v._pt, p: f || 1 === y ? f : ",", s: h, c: p - h, m: (c && c < 4) || "zIndex" === e ? Math.round : 0 }));
                        v.c = _ < r.length ? r.substring(_, r.length) : "";
                    } else v.r = "display" === e && "none" === r ? Cr : kr;
                    return $t.test(r) && (v.e = 0), (this._pt = v), v;
                },
                sn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
                on = function (t, e) {
                    if (e.tween && e.tween._time === e.tween._dur) {
                        var i,
                            r,
                            n,
                            s = e.t,
                            o = s.style,
                            a = e.u,
                            l = s._gsap;
                        if ("all" === a || !0 === a) (o.cssText = ""), (r = 1);
                        else for (n = (a = a.split(",")).length; --n > -1;) (i = a[n]), gr[i] && ((r = 1), (i = "transformOrigin" === i ? Dr : Rr)), Kr(s, i);
                        r && (Kr(s, Rr), l && (l.svg && s.removeAttribute("transform"), fn(s, 1), (l.uncache = 1), Fr(o)));
                    }
                },
                an = {
                    clearProps: function (t, e, i, r, n) {
                        if ("isFromStart" !== n.data) {
                            var s = (t._pt = new ji(t._pt, e, i, 0, 0, on));
                            return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
                        }
                    },
                },
                ln = [1, 0, 0, 1, 0, 0],
                hn = {},
                cn = function (t) {
                    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
                },
                un = function (t) {
                    var e = Yr(t, Rr);
                    return cn(e) ? ln : e.substr(7).match(Tt).map(Kt);
                },
                dn = function (t, e) {
                    var i,
                        r,
                        n,
                        s,
                        o = t._gsap || jt(t),
                        a = t.style,
                        l = un(t);
                    return o.svg && t.getAttribute("transform")
                        ? "1,0,0,1,0,0" === (l = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",")
                            ? ln
                            : l
                        : (l !== ln ||
                            t.offsetParent ||
                            t === cr ||
                            o.svg ||
                            ((n = a.display),
                                (a.display = "block"),
                                ((i = t.parentNode) && t.offsetParent) || ((s = 1), (r = t.nextElementSibling), cr.appendChild(t)),
                                (l = un(t)),
                                n ? (a.display = n) : Kr(t, "display"),
                                s && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : cr.removeChild(t))),
                            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
                },
                pn = function (t, e, i, r, n, s) {
                    var o,
                        a,
                        l,
                        h = t._gsap,
                        c = n || dn(t, !0),
                        u = h.xOrigin || 0,
                        d = h.yOrigin || 0,
                        p = h.xOffset || 0,
                        f = h.yOffset || 0,
                        m = c[0],
                        g = c[1],
                        v = c[2],
                        _ = c[3],
                        y = c[4],
                        w = c[5],
                        b = e.split(" "),
                        x = parseFloat(b[0]) || 0,
                        T = parseFloat(b[1]) || 0;
                    i
                        ? c !== ln && (a = m * _ - g * v) && ((l = x * (-g / a) + T * (m / a) - (m * w - g * y) / a), (x = x * (_ / a) + T * (-v / a) + (v * w - _ * y) / a), (T = l))
                        : ((x = (o = Gr(t)).x + (~b[0].indexOf("%") ? (x / 100) * o.width : x)), (T = o.y + (~(b[1] || b[0]).indexOf("%") ? (T / 100) * o.height : T))),
                        r || (!1 !== r && h.smooth) ? ((y = x - u), (w = T - d), (h.xOffset = p + (y * m + w * v) - y), (h.yOffset = f + (y * g + w * _) - w)) : (h.xOffset = h.yOffset = 0),
                        (h.xOrigin = x),
                        (h.yOrigin = T),
                        (h.smooth = !!r),
                        (h.origin = e),
                        (h.originIsAbsolute = !!i),
                        (t.style[Dr] = "0px 0px"),
                        s && (Zr(s, h, "xOrigin", u, x), Zr(s, h, "yOrigin", d, T), Zr(s, h, "xOffset", p, h.xOffset), Zr(s, h, "yOffset", f, h.yOffset)),
                        t.setAttribute("data-svg-origin", x + " " + T);
                },
                fn = function (t, e) {
                    var i = t._gsap || new bi(t);
                    if ("x" in i && !e && !i.uncache) return i;
                    var r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c,
                        u,
                        d,
                        p,
                        f,
                        m,
                        g,
                        v,
                        _,
                        y,
                        w,
                        b,
                        x,
                        T,
                        S,
                        E,
                        $,
                        M,
                        k,
                        C,
                        A,
                        L,
                        P,
                        O,
                        I,
                        z = t.style,
                        R = i.scaleX < 0,
                        D = "px",
                        q = "deg",
                        F = getComputedStyle(t),
                        N = Yr(t, Dr) || "0";
                    return (
                        (r = n = s = l = h = c = u = d = p = 0),
                        (o = a = 1),
                        (i.svg = !(!t.getCTM || !Jr(t))),
                        F.translate &&
                        (("none" === F.translate && "none" === F.scale && "none" === F.rotate) ||
                            (z[Rr] =
                                ("none" !== F.translate ? "translate3d(" + (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") +
                                ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
                                ("none" !== F.scale ? "scale(" + F.scale.split(" ").join(",") + ") " : "") +
                                ("none" !== F[Rr] ? F[Rr] : "")),
                            (z.scale = z.rotate = z.translate = "none")),
                        (g = dn(t, i.svg)),
                        i.svg &&
                        (i.uncache ? ((M = t.getBBox()), (N = i.xOrigin - M.x + "px " + (i.yOrigin - M.y) + "px"), ($ = "")) : ($ = !e && t.getAttribute("data-svg-origin")), pn(t, $ || N, !!$ || i.originIsAbsolute, !1 !== i.smooth, g)),
                        (f = i.xOrigin || 0),
                        (m = i.yOrigin || 0),
                        g !== ln &&
                        ((w = g[0]),
                            (b = g[1]),
                            (x = g[2]),
                            (T = g[3]),
                            (r = S = g[4]),
                            (n = E = g[5]),
                            6 === g.length
                                ? ((o = Math.sqrt(w * w + b * b)),
                                    (a = Math.sqrt(T * T + x * x)),
                                    (l = w || b ? yr(b, w) * vr : 0),
                                    (u = x || T ? yr(x, T) * vr + l : 0) && (a *= Math.abs(Math.cos(u * _r))),
                                    i.svg && ((r -= f - (f * w + m * x)), (n -= m - (f * b + m * T))))
                                : ((I = g[6]),
                                    (P = g[7]),
                                    (C = g[8]),
                                    (A = g[9]),
                                    (L = g[10]),
                                    (O = g[11]),
                                    (r = g[12]),
                                    (n = g[13]),
                                    (s = g[14]),
                                    (h = (v = yr(I, L)) * vr),
                                    v &&
                                    (($ = S * (_ = Math.cos(-v)) + C * (y = Math.sin(-v))),
                                        (M = E * _ + A * y),
                                        (k = I * _ + L * y),
                                        (C = S * -y + C * _),
                                        (A = E * -y + A * _),
                                        (L = I * -y + L * _),
                                        (O = P * -y + O * _),
                                        (S = $),
                                        (E = M),
                                        (I = k)),
                                    (c = (v = yr(-x, L)) * vr),
                                    v && ((_ = Math.cos(-v)), (O = T * (y = Math.sin(-v)) + O * _), (w = $ = w * _ - C * y), (b = M = b * _ - A * y), (x = k = x * _ - L * y)),
                                    (l = (v = yr(b, w)) * vr),
                                    v && (($ = w * (_ = Math.cos(v)) + b * (y = Math.sin(v))), (M = S * _ + E * y), (b = b * _ - w * y), (E = E * _ - S * y), (w = $), (S = M)),
                                    h && Math.abs(h) + Math.abs(l) > 359.9 && ((h = l = 0), (c = 180 - c)),
                                    (o = Kt(Math.sqrt(w * w + b * b + x * x))),
                                    (a = Kt(Math.sqrt(E * E + I * I))),
                                    (v = yr(S, E)),
                                    (u = Math.abs(v) > 2e-4 ? v * vr : 0),
                                    (p = O ? 1 / (O < 0 ? -O : O) : 0)),
                            i.svg && (($ = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !cn(Yr(t, Rr))), $ && t.setAttribute("transform", $))),
                        Math.abs(u) > 90 && Math.abs(u) < 270 && (R ? ((o *= -1), (u += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((a *= -1), (u += u <= 0 ? 180 : -180))),
                        (e = e || i.uncache),
                        (i.x = r - ((i.xPercent = r && ((!e && i.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? (t.offsetWidth * i.xPercent) / 100 : 0) + D),
                        (i.y = n - ((i.yPercent = n && ((!e && i.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? (t.offsetHeight * i.yPercent) / 100 : 0) + D),
                        (i.z = s + D),
                        (i.scaleX = Kt(o)),
                        (i.scaleY = Kt(a)),
                        (i.rotation = Kt(l) + q),
                        (i.rotationX = Kt(h) + q),
                        (i.rotationY = Kt(c) + q),
                        (i.skewX = u + q),
                        (i.skewY = d + q),
                        (i.transformPerspective = p + D),
                        (i.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (z[Dr] = mn(N)),
                        (i.xOffset = i.yOffset = 0),
                        (i.force3D = it.force3D),
                        (i.renderTransform = i.svg ? xn : mr ? bn : vn),
                        (i.uncache = 0),
                        i
                    );
                },
                mn = function (t) {
                    return (t = t.split(" "))[0] + " " + t[1];
                },
                gn = function (t, e, i) {
                    var r = Ie(e);
                    return Kt(parseFloat(e) + parseFloat(en(t, "x", i + "px", r))) + r;
                },
                vn = function (t, e) {
                    (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), bn(t, e);
                },
                _n = "0deg",
                yn = "0px",
                wn = ") ",
                bn = function (t, e) {
                    var i = e || this,
                        r = i.xPercent,
                        n = i.yPercent,
                        s = i.x,
                        o = i.y,
                        a = i.z,
                        l = i.rotation,
                        h = i.rotationY,
                        c = i.rotationX,
                        u = i.skewX,
                        d = i.skewY,
                        p = i.scaleX,
                        f = i.scaleY,
                        m = i.transformPerspective,
                        g = i.force3D,
                        v = i.target,
                        _ = i.zOrigin,
                        y = "",
                        w = ("auto" === g && t && 1 !== t) || !0 === g;
                    if (_ && (c !== _n || h !== _n)) {
                        var b,
                            x = parseFloat(h) * _r,
                            T = Math.sin(x),
                            S = Math.cos(x);
                        (x = parseFloat(c) * _r), (b = Math.cos(x)), (s = gn(v, s, T * b * -_)), (o = gn(v, o, -Math.sin(x) * -_)), (a = gn(v, a, S * b * -_ + _));
                    }
                    m !== yn && (y += "perspective(" + m + wn),
                        (r || n) && (y += "translate(" + r + "%, " + n + "%) "),
                        (w || s !== yn || o !== yn || a !== yn) && (y += a !== yn || w ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + wn),
                        l !== _n && (y += "rotate(" + l + wn),
                        h !== _n && (y += "rotateY(" + h + wn),
                        c !== _n && (y += "rotateX(" + c + wn),
                        (u === _n && d === _n) || (y += "skew(" + u + ", " + d + wn),
                        (1 === p && 1 === f) || (y += "scale(" + p + ", " + f + wn),
                        (v.style[Rr] = y || "translate(0, 0)");
                },
                xn = function (t, e) {
                    var i,
                        r,
                        n,
                        s,
                        o,
                        a = e || this,
                        l = a.xPercent,
                        h = a.yPercent,
                        c = a.x,
                        u = a.y,
                        d = a.rotation,
                        p = a.skewX,
                        f = a.skewY,
                        m = a.scaleX,
                        g = a.scaleY,
                        v = a.target,
                        _ = a.xOrigin,
                        y = a.yOrigin,
                        w = a.xOffset,
                        b = a.yOffset,
                        x = a.forceCSS,
                        T = parseFloat(c),
                        S = parseFloat(u);
                    (d = parseFloat(d)),
                        (p = parseFloat(p)),
                        (f = parseFloat(f)) && ((p += f = parseFloat(f)), (d += f)),
                        d || p
                            ? ((d *= _r),
                                (p *= _r),
                                (i = Math.cos(d) * m),
                                (r = Math.sin(d) * m),
                                (n = Math.sin(d - p) * -g),
                                (s = Math.cos(d - p) * g),
                                p && ((f *= _r), (o = Math.tan(p - f)), (n *= o = Math.sqrt(1 + o * o)), (s *= o), f && ((o = Math.tan(f)), (i *= o = Math.sqrt(1 + o * o)), (r *= o))),
                                (i = Kt(i)),
                                (r = Kt(r)),
                                (n = Kt(n)),
                                (s = Kt(s)))
                            : ((i = m), (s = g), (r = n = 0)),
                        ((T && !~(c + "").indexOf("px")) || (S && !~(u + "").indexOf("px"))) && ((T = en(v, "x", c, "px")), (S = en(v, "y", u, "px"))),
                        (_ || y || w || b) && ((T = Kt(T + _ - (_ * i + y * n) + w)), (S = Kt(S + y - (_ * r + y * s) + b))),
                        (l || h) && ((o = v.getBBox()), (T = Kt(T + (l / 100) * o.width)), (S = Kt(S + (h / 100) * o.height))),
                        (o = "matrix(" + i + "," + r + "," + n + "," + s + "," + T + "," + S + ")"),
                        v.setAttribute("transform", o),
                        x && (v.style[Rr] = o);
                },
                Tn = function (t, e, i, r, n) {
                    var s,
                        o,
                        a = 360,
                        l = dt(n),
                        h = parseFloat(n) * (l && ~n.indexOf("rad") ? vr : 1) - r,
                        c = r + h + "deg";
                    return (
                        l &&
                        ("short" === (s = n.split("_")[1]) && (h %= a) !== h % 180 && (h += h < 0 ? a : -360),
                            "cw" === s && h < 0 ? (h = ((h + 36e9) % a) - ~~(h / a) * a) : "ccw" === s && h > 0 && (h = ((h - 36e9) % a) - ~~(h / a) * a)),
                        (t._pt = o = new ji(t._pt, e, i, r, h, Er)),
                        (o.e = c),
                        (o.u = "deg"),
                        t._props.push(i),
                        o
                    );
                },
                Sn = function (t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                En = function (t, e, i) {
                    var r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h,
                        c = Sn({}, i._gsap),
                        u = i.style;
                    for (n in (c.svg
                        ? ((s = i.getAttribute("transform")), i.setAttribute("transform", ""), (u[Rr] = e), (r = fn(i, 1)), Kr(i, Rr), i.setAttribute("transform", s))
                        : ((s = getComputedStyle(i)[Rr]), (u[Rr] = e), (r = fn(i, 1)), (u[Rr] = s)),
                        gr))
                        (s = c[n]) !== (o = r[n]) &&
                            "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
                            ((a = Ie(s) !== (h = Ie(o)) ? en(i, n, s, h) : parseFloat(s)), (l = parseFloat(o)), (t._pt = new ji(t._pt, r, n, a, l - a, Sr)), (t._pt.u = h || 0), t._props.push(n));
                    Sn(r, c);
                };
            Jt("padding,margin,Width,Radius", function (t, e) {
                var i = "Top",
                    r = "Right",
                    n = "Bottom",
                    s = "Left",
                    o = (e < 3 ? [i, r, n, s] : [i + s, i + r, n + r, n + s]).map(function (i) {
                        return e < 2 ? t + i : "border" + i + t;
                    });
                an[e > 1 ? "border" + t : t] = function (t, e, i, r, n) {
                    var s, a;
                    if (arguments.length < 4)
                        return (
                            (s = o.map(function (e) {
                                return rn(t, e, i);
                            })),
                            5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                        );
                    (s = (r + "").split(" ")),
                        (a = {}),
                        o.forEach(function (t, e) {
                            return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                        }),
                        t.init(e, a, n);
                };
            });
            var $n,
                Mn,
                kn,
                Cn = {
                    name: "css",
                    register: Ur,
                    targetTest: function (t) {
                        return t.style && t.nodeType;
                    },
                    init: function (t, e, i, r, n) {
                        var s,
                            o,
                            a,
                            l,
                            h,
                            c,
                            u,
                            d,
                            p,
                            f,
                            m,
                            g,
                            v,
                            _,
                            y,
                            w,
                            b,
                            x,
                            T,
                            S,
                            E = this._props,
                            $ = t.style,
                            M = i.vars.startAt;
                        for (u in (ur || Ur(), (this.styles = this.styles || Br(t)), (w = this.styles.props), (this.tween = i), e))
                            if ("autoRound" !== u && ((o = e[u]), !Wt[u] || !ki(u, e, i, r, t, n)))
                                if (((h = typeof o), (c = an[u]), "function" === h && (h = typeof (o = o.call(i, r, t, n))), "string" === h && ~o.indexOf("random(") && (o = Ue(o)), c)) c(this, t, u, o, i) && (y = 1);
                                else if ("--" === u.substr(0, 2))
                                    (s = (getComputedStyle(t).getPropertyValue(u) + "").trim()),
                                        (o += ""),
                                        (si.lastIndex = 0),
                                        si.test(s) || ((d = Ie(s)), (p = Ie(o))),
                                        p ? d !== p && (s = en(t, u, s, p) + p) : d && (o += d),
                                        this.add($, "setProperty", s, o, r, n, 0, 0, u),
                                        E.push(u),
                                        w.push(u, 0, $[u]);
                                else if ("undefined" !== h) {
                                    if (
                                        (M && u in M
                                            ? ((s = "function" == typeof M[u] ? M[u].call(i, r, t, n) : M[u]),
                                                dt(s) && ~s.indexOf("random(") && (s = Ue(s)),
                                                Ie(s + "") || (s += it.units[u] || Ie(rn(t, u)) || ""),
                                                "=" === (s + "").charAt(1) && (s = rn(t, u)))
                                            : (s = rn(t, u)),
                                            (l = parseFloat(s)),
                                            (f = "string" === h && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                                            (a = parseFloat(o)),
                                            u in Tr &&
                                            ("autoAlpha" === u &&
                                                (1 === l && "hidden" === rn(t, "visibility") && a && (l = 0), w.push("visibility", 0, $.visibility), Zr(this, $, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                                                "scale" !== u && "transform" !== u && ~(u = Tr[u]).indexOf(",") && (u = u.split(",")[0])),
                                            (m = u in gr))
                                    )
                                        if (
                                            (this.styles.save(u),
                                                g ||
                                                (((v = t._gsap).renderTransform && !e.parseTransform) || fn(t, e.parseTransform),
                                                    (_ = !1 !== e.smoothOrigin && v.smooth),
                                                    ((g = this._pt = new ji(this._pt, $, Rr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1)),
                                                "scale" === u)
                                        )
                                            (this._pt = new ji(this._pt, v, "scaleY", v.scaleY, (f ? Qt(v.scaleY, f + a) : a) - v.scaleY || 0, Sr)), (this._pt.u = 0), E.push("scaleY", u), (u += "X");
                                        else {
                                            if ("transformOrigin" === u) {
                                                w.push(Dr, 0, $[Dr]),
                                                    (x = void 0),
                                                    (T = void 0),
                                                    (S = void 0),
                                                    (x = (b = o).split(" ")),
                                                    (T = x[0]),
                                                    (S = x[1] || "50%"),
                                                    ("top" !== T && "bottom" !== T && "left" !== S && "right" !== S) || ((b = T), (T = S), (S = b)),
                                                    (x[0] = sn[T] || T),
                                                    (x[1] = sn[S] || S),
                                                    (o = x.join(" ")),
                                                    v.svg ? pn(t, o, 0, _, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Zr(this, v, "zOrigin", v.zOrigin, p), Zr(this, $, u, mn(s), mn(o)));
                                                continue;
                                            }
                                            if ("svgOrigin" === u) {
                                                pn(t, o, 1, _, 0, this);
                                                continue;
                                            }
                                            if (u in hn) {
                                                Tn(this, v, u, l, f ? Qt(l, f + o) : o);
                                                continue;
                                            }
                                            if ("smoothOrigin" === u) {
                                                Zr(this, v, "smooth", v.smooth, o);
                                                continue;
                                            }
                                            if ("force3D" === u) {
                                                v[u] = o;
                                                continue;
                                            }
                                            if ("transform" === u) {
                                                En(this, o, t);
                                                continue;
                                            }
                                        }
                                    else u in $ || (u = Hr(u) || u);
                                    if (m || ((a || 0 === a) && (l || 0 === l) && !xr.test(o) && u in $))
                                        a || (a = 0),
                                            (d = (s + "").substr((l + "").length)) !== (p = Ie(o) || (u in it.units ? it.units[u] : d)) && (l = en(t, u, s, p)),
                                            (this._pt = new ji(this._pt, m ? v : $, u, l, (f ? Qt(l, f + a) : a) - l, m || ("px" !== p && "zIndex" !== u) || !1 === e.autoRound ? Sr : Mr)),
                                            (this._pt.u = p || 0),
                                            d !== p && "%" !== p && ((this._pt.b = s), (this._pt.r = $r));
                                    else if (u in $) nn.call(this, t, u, s, f ? f + o : o);
                                    else if (u in t) this.add(t, u, s || t[u], f ? f + o : o, r, n);
                                    else if ("parseTransform" !== u) {
                                        Pt(u, o);
                                        continue;
                                    }
                                    m || (u in $ ? w.push(u, 0, $[u]) : w.push(u, 1, s || t[u])), E.push(u);
                                }
                        y && Vi(this);
                    },
                    render: function (t, e) {
                        if (e.tween._time || !fr()) for (var i = e._pt; i;) i.r(t, i.d), (i = i._next);
                        else e.styles.revert();
                    },
                    get: rn,
                    aliases: Tr,
                    getSetter: function (t, e, i) {
                        var r = Tr[e];
                        return (
                            r && r.indexOf(",") < 0 && (e = r),
                            e in gr && e !== Dr && (t._gsap.x || rn(t, "x")) ? (i && pr === i ? ("scale" === e ? Or : Pr) : (pr = i || {}) && ("scale" === e ? Ir : zr)) : t.style && !mt(t.style[e]) ? Ar : ~e.indexOf("-") ? Lr : Fi(t, e)
                        );
                    },
                    core: { _removeProperty: Kr, _getMatrix: dn },
                };
            (ar.utils.checkPrefix = Hr),
                (ar.core.getStyleSaver = Br),
                (kn = Jt(($n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Mn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                    gr[t] = 1;
                })),
                Jt(Mn, function (t) {
                    (it.units[t] = "deg"), (hn[t] = 1);
                }),
                (Tr[kn[13]] = $n + "," + Mn),
                Jt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                    var e = t.split(":");
                    Tr[e[1]] = kn[e[0]];
                }),
                Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                    it.units[t] = "px";
                }),
                ar.registerPlugin(Cn);
            var An = ar.registerPlugin(Cn) || ar,
                Ln = (An.core.Tween, /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
                Pn = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                On = Math.PI / 180,
                In = (Math.PI, Math.sin),
                zn = Math.cos,
                Rn = Math.abs,
                Dn = Math.sqrt,
                qn =
                    (Math.atan2,
                        function (t) {
                            return "number" == typeof t;
                        }),
                Fn = 1e5,
                Nn = function (t) {
                    return Math.round(t * Fn) / Fn || 0;
                };
            function Bn(t, e, i, r, n, s, o, a, l) {
                if (t !== a || e !== l) {
                    (i = Rn(i)), (r = Rn(r));
                    var h = (n % 360) * On,
                        c = zn(h),
                        u = In(h),
                        d = Math.PI,
                        p = 2 * d,
                        f = (t - a) / 2,
                        m = (e - l) / 2,
                        g = c * f + u * m,
                        v = -u * f + c * m,
                        _ = g * g,
                        y = v * v,
                        w = _ / (i * i) + y / (r * r);
                    w > 1 && ((i = Dn(w) * i), (r = Dn(w) * r));
                    var b = i * i,
                        x = r * r,
                        T = (b * x - b * y - x * _) / (b * y + x * _);
                    T < 0 && (T = 0);
                    var S = (s === o ? -1 : 1) * Dn(T),
                        E = S * ((i * v) / r),
                        $ = S * ((-r * g) / i),
                        M = (t + a) / 2 + (c * E - u * $),
                        k = (e + l) / 2 + (u * E + c * $),
                        C = (g - E) / i,
                        A = (v - $) / r,
                        L = (-g - E) / i,
                        P = (-v - $) / r,
                        O = C * C + A * A,
                        I = (A < 0 ? -1 : 1) * Math.acos(C / Dn(O)),
                        z = (C * P - A * L < 0 ? -1 : 1) * Math.acos((C * L + A * P) / Dn(O * (L * L + P * P)));
                    isNaN(z) && (z = d), !o && z > 0 ? (z -= p) : o && z < 0 && (z += p), (I %= p), (z %= p);
                    var R,
                        D = Math.ceil(Rn(z) / (p / 4)),
                        q = [],
                        F = z / D,
                        N = ((4 / 3) * In(F / 2)) / (1 + zn(F / 2)),
                        B = c * i,
                        W = u * i,
                        Y = u * -r,
                        X = c * r;
                    for (R = 0; R < D; R++) (g = zn((n = I + R * F))), (v = In(n)), (C = zn((n += F))), (A = In(n)), q.push(g - N * v, v + N * g, C + N * A, A - N * C, C, A);
                    for (R = 0; R < q.length; R += 2) (g = q[R]), (v = q[R + 1]), (q[R] = g * B + v * Y + M), (q[R + 1] = g * W + v * X + k);
                    return (q[R - 2] = a), (q[R - 1] = l), q;
                }
            }
            function Wn(t) {
                var e,
                    i,
                    r,
                    n,
                    s,
                    o,
                    a,
                    l,
                    h,
                    c,
                    u,
                    d,
                    p,
                    f,
                    m,
                    g =
                        (t + "")
                            .replace(Pn, function (t) {
                                var e = +t;
                                return e < 1e-4 && e > -1e-4 ? 0 : e;
                            })
                            .match(Ln) || [],
                    v = [],
                    _ = 0,
                    y = 0,
                    w = 2 / 3,
                    b = g.length,
                    x = 0,
                    T = "ERROR: malformed path: " + t,
                    S = function (t, e, i, r) {
                        (c = (i - t) / 3), (u = (r - e) / 3), a.push(t + c, e + u, i - c, r - u, i, r);
                    };
                if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(T), v;
                for (e = 0; e < b; e++)
                    if (((p = s), isNaN(g[e]) ? (o = (s = g[e].toUpperCase()) !== g[e]) : e--, (r = +g[e + 1]), (n = +g[e + 2]), o && ((r += _), (n += y)), e || ((l = r), (h = n)), "M" === s))
                        a && (a.length < 8 ? (v.length -= 1) : (x += a.length)), (_ = l = r), (y = h = n), (a = [r, n]), v.push(a), (e += 2), (s = "L");
                    else if ("C" === s) a || (a = [0, 0]), o || (_ = y = 0), a.push(r, n, _ + 1 * g[e + 3], y + 1 * g[e + 4], (_ += 1 * g[e + 5]), (y += 1 * g[e + 6])), (e += 6);
                    else if ("S" === s) (c = _), (u = y), ("C" !== p && "S" !== p) || ((c += _ - a[a.length - 4]), (u += y - a[a.length - 3])), o || (_ = y = 0), a.push(c, u, r, n, (_ += 1 * g[e + 3]), (y += 1 * g[e + 4])), (e += 4);
                    else if ("Q" === s) (c = _ + (r - _) * w), (u = y + (n - y) * w), o || (_ = y = 0), (_ += 1 * g[e + 3]), (y += 1 * g[e + 4]), a.push(c, u, _ + (r - _) * w, y + (n - y) * w, _, y), (e += 4);
                    else if ("T" === s) (c = _ - a[a.length - 4]), (u = y - a[a.length - 3]), a.push(_ + c, y + u, r + (_ + 1.5 * c - r) * w, n + (y + 1.5 * u - n) * w, (_ = r), (y = n)), (e += 2);
                    else if ("H" === s) S(_, y, (_ = r), y), (e += 1);
                    else if ("V" === s) S(_, y, _, (y = r + (o ? y - _ : 0))), (e += 1);
                    else if ("L" === s || "Z" === s) "Z" === s && ((r = l), (n = h), (a.closed = !0)), ("L" === s || Rn(_ - r) > 0.5 || Rn(y - n) > 0.5) && (S(_, y, r, n), "L" === s && (e += 2)), (_ = r), (y = n);
                    else if ("A" === s) {
                        if (
                            ((f = g[e + 4]),
                                (m = g[e + 5]),
                                (c = g[e + 6]),
                                (u = g[e + 7]),
                                (i = 7),
                                f.length > 1 && (f.length < 3 ? ((u = c), (c = m), i--) : ((u = m), (c = f.substr(2)), (i -= 2)), (m = f.charAt(1)), (f = f.charAt(0))),
                                (d = Bn(_, y, +g[e + 1], +g[e + 2], +g[e + 3], +f, +m, (o ? _ : 0) + 1 * c, (o ? y : 0) + 1 * u)),
                                (e += i),
                                d)
                        )
                            for (i = 0; i < d.length; i++) a.push(d[i]);
                        (_ = a[a.length - 2]), (y = a[a.length - 1]);
                    } else console.log(T);
                return (e = a.length) < 6 ? (v.pop(), (e = 0)) : a[0] === a[e - 2] && a[1] === a[e - 1] && (a.closed = !0), (v.totalPoints = x + e), v;
            }
            function Yn(t) {
                qn(t[0]) && (t = [t]);
                var e,
                    i,
                    r,
                    n,
                    s = "",
                    o = t.length;
                for (i = 0; i < o; i++) {
                    for (n = t[i], s += "M" + Nn(n[0]) + "," + Nn(n[1]) + " C", e = n.length, r = 2; r < e; r++) s += Nn(n[r++]) + "," + Nn(n[r++]) + " " + Nn(n[r++]) + "," + Nn(n[r++]) + " " + Nn(n[r++]) + "," + Nn(n[r]) + " ";
                    n.closed && (s += "z");
                }
                return s;
            }
            var Xn,
                Hn,
                Un = function () {
                    return Xn || ("undefined" != typeof window && (Xn = window.gsap) && Xn.registerPlugin && Xn);
                },
                Vn = function () {
                    (Xn = Un()) ? (Xn.registerEase("_CE", Zn.create), (Hn = 1)) : console.warn("Please gsap.registerPlugin(CustomEase)");
                },
                jn = function (t) {
                    return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
                },
                Gn = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                Jn = /[cLlsSaAhHvVtTqQ]/g,
                Kn = function t(e, i, r, n, s, o, a, l, h, c, u) {
                    var d,
                        p = (e + r) / 2,
                        f = (i + n) / 2,
                        m = (r + s) / 2,
                        g = (n + o) / 2,
                        v = (s + a) / 2,
                        _ = (o + l) / 2,
                        y = (p + m) / 2,
                        w = (f + g) / 2,
                        b = (m + v) / 2,
                        x = (g + _) / 2,
                        T = (y + b) / 2,
                        S = (w + x) / 2,
                        E = a - e,
                        $ = l - i,
                        M = Math.abs((r - a) * $ - (n - l) * E),
                        k = Math.abs((s - a) * $ - (o - l) * E);
                    return (
                        c ||
                        ((c = [
                            { x: e, y: i },
                            { x: a, y: l },
                        ]),
                            (u = 1)),
                        c.splice(u || c.length - 1, 0, { x: T, y: S }),
                        (M + k) * (M + k) > h * (E * E + $ * $) && ((d = c.length), t(e, i, p, f, y, w, T, S, h, c, u), t(T, S, b, x, v, _, a, l, h, c, u + 1 + (c.length - d))),
                        c
                    );
                },
                Zn = (function () {
                    function t(t, e, i) {
                        Hn || Vn(), (this.id = t), this.setData(e, i);
                    }
                    var e = t.prototype;
                    return (
                        (e.setData = function (t, e) {
                            e = e || {};
                            var i,
                                r,
                                n,
                                s,
                                o,
                                a,
                                l,
                                h,
                                c,
                                u = (t = t || "0,0,1,1").match(Gn),
                                d = 1,
                                p = [],
                                f = [],
                                m = e.precision || 1,
                                g = m <= 1;
                            if (((this.data = t), (Jn.test(t) || (~t.indexOf("M") && t.indexOf("C") < 0)) && (u = Wn(t)[0]), 4 === (i = u.length))) u.unshift(0, 0), u.push(1, 1), (i = 8);
                            else if ((i - 2) % 6) throw "Invalid CustomEase";
                            for (
                                (0 == +u[0] && 1 == +u[i - 2]) ||
                                (function (t, e, i) {
                                    i || 0 === i || (i = Math.max(+t[t.length - 1], +t[1]));
                                    var r,
                                        n = -1 * +t[0],
                                        s = -i,
                                        o = t.length,
                                        a = 1 / (+t[o - 2] + n),
                                        l =
                                            -e ||
                                            (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                                                ? (function (t) {
                                                    var e,
                                                        i = t.length,
                                                        r = 1e20;
                                                    for (e = 1; e < i; e += 6) +t[e] < r && (r = +t[e]);
                                                    return r;
                                                })(t) + s
                                                : +t[o - 1] + s);
                                    for (l = l ? 1 / l : -a, r = 0; r < o; r += 2) (t[r] = (+t[r] + n) * a), (t[r + 1] = (+t[r + 1] + s) * l);
                                })(u, e.height, e.originY),
                                this.segment = u,
                                s = 2;
                                s < i;
                                s += 6
                            )
                                (r = { x: +u[s - 2], y: +u[s - 1] }), (n = { x: +u[s + 4], y: +u[s + 5] }), p.push(r, n), Kn(r.x, r.y, +u[s], +u[s + 1], +u[s + 2], +u[s + 3], n.x, n.y, 1 / (2e5 * m), p, p.length - 1);
                            for (i = p.length, s = 0; s < i; s++)
                                (l = p[s]),
                                    (h = p[s - 1] || l),
                                    (l.x > h.x || (h.y !== l.y && h.x === l.x) || l === h) && l.x <= 1
                                        ? ((h.cx = l.x - h.x),
                                            (h.cy = l.y - h.y),
                                            (h.n = l),
                                            (h.nx = l.x),
                                            g && s > 1 && Math.abs(h.cy / h.cx - p[s - 2].cy / p[s - 2].cx) > 2 && (g = 0),
                                            h.cx < d && (h.cx ? (d = h.cx) : ((h.cx = 0.001), s === i - 1 && ((h.x -= 0.001), (d = Math.min(d, 0.001)), (g = 0)))))
                                        : (p.splice(s--, 1), i--);
                            if (((o = 1 / (i = (1 / d + 1) | 0)), (a = 0), (l = p[0]), g)) {
                                for (s = 0; s < i; s++) (c = s * o), l.nx < c && (l = p[++a]), (r = l.y + ((c - l.x) / l.cx) * l.cy), (f[s] = { x: c, cx: o, y: r, cy: 0, nx: 9 }), s && (f[s - 1].cy = r - f[s - 1].y);
                                f[i - 1].cy = p[p.length - 1].y - r;
                            } else {
                                for (s = 0; s < i; s++) l.nx < s * o && (l = p[++a]), (f[s] = l);
                                a < p.length - 1 && (f[s - 1] = p[p.length - 2]);
                            }
                            return (
                                (this.ease = function (t) {
                                    var e = f[(t * i) | 0] || f[i - 1];
                                    return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                                }),
                                (this.ease.custom = this),
                                this.id && Xn && Xn.registerEase(this.id, this.ease),
                                this
                            );
                        }),
                        (e.getSVGData = function (e) {
                            return t.getSVGData(this, e);
                        }),
                        (t.create = function (e, i, r) {
                            return new t(e, i, r).ease;
                        }),
                        (t.register = function (t) {
                            (Xn = t), Vn();
                        }),
                        (t.get = function (t) {
                            return Xn.parseEase(t);
                        }),
                        (t.getSVGData = function (e, i) {
                            var r,
                                n,
                                s,
                                o,
                                a,
                                l,
                                h,
                                c,
                                u,
                                d,
                                p = (i = i || {}).width || 100,
                                f = i.height || 100,
                                m = i.x || 0,
                                g = (i.y || 0) + f,
                                v = Xn.utils.toArray(i.path)[0];
                            if ((i.invert && ((f = -f), (g = 0)), "string" == typeof e && (e = Xn.parseEase(e)), e.custom && (e = e.custom), e instanceof t))
                                r = Yn(
                                    (function (t, e, i, r, n, s, o) {
                                        for (var a, l, h, c, u, d = t.length; --d > -1;) for (l = (a = t[d]).length, h = 0; h < l; h += 2) (c = a[h]), (u = a[h + 1]), (a[h] = c * e + u * r + s), (a[h + 1] = c * i + u * n + o);
                                        return (t._dirty = 1), t;
                                    })([e.segment], p, 0, 0, -f, m, g)
                                );
                            else {
                                for (r = [m, g], o = 1 / (h = Math.max(5, 200 * (i.precision || 1))), c = 5 / (h += 2), u = jn(m + o * p), n = ((d = jn(g + e(o) * -f)) - g) / (u - m), s = 2; s < h; s++)
                                    (a = jn(m + s * o * p)), (l = jn(g + e(s * o) * -f)), (Math.abs((l - d) / (a - u) - n) > c || s === h - 1) && (r.push(u, d), (n = (l - d) / (a - u))), (u = a), (d = l);
                                r = "M" + r.join(",");
                            }
                            return v && v.setAttribute("d", r), r;
                        }),
                        t
                    );
                })();
            function Qn(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            Un() && Xn.registerPlugin(Zn), (Zn.version = "3.12.2");
            var ts,
                es,
                is,
                rs,
                ns,
                ss,
                os,
                as,
                ls,
                hs,
                cs,
                us,
                ds,
                ps = function () {
                    return ts || ("undefined" != typeof window && (ts = window.gsap) && ts.registerPlugin && ts);
                },
                fs = 1,
                ms = [],
                gs = [],
                vs = [],
                _s = Date.now,
                ys = function (t, e) {
                    return e;
                },
                ws = function (t, e) {
                    return ~vs.indexOf(t) && vs[vs.indexOf(t) + 1][e];
                },
                bs = function (t) {
                    return !!~hs.indexOf(t);
                },
                xs = function (t, e, i, r, n) {
                    return t.addEventListener(e, i, { passive: !r, capture: !!n });
                },
                Ts = function (t, e, i, r) {
                    return t.removeEventListener(e, i, !!r);
                },
                Ss = "scrollLeft",
                Es = "scrollTop",
                $s = function () {
                    return (cs && cs.isPressed) || gs.cache++;
                },
                Ms = function (t, e) {
                    var i = function i(r) {
                        if (r || 0 === r) {
                            fs && (is.history.scrollRestoration = "manual");
                            var n = cs && cs.isPressed;
                            (r = i.v = Math.round(r) || (cs && cs.iOS ? 1 : 0)), t(r), (i.cacheID = gs.cache), n && ys("ss", r);
                        } else (e || gs.cache !== i.cacheID || ys("ref")) && ((i.cacheID = gs.cache), (i.v = t()));
                        return i.v + i.offset;
                    };
                    return (i.offset = 0), t && i;
                },
                ks = {
                    s: Ss,
                    p: "left",
                    p2: "Left",
                    os: "right",
                    os2: "Right",
                    d: "width",
                    d2: "Width",
                    a: "x",
                    sc: Ms(function (t) {
                        return arguments.length ? is.scrollTo(t, Cs.sc()) : is.pageXOffset || rs[Ss] || ns[Ss] || ss[Ss] || 0;
                    }),
                },
                Cs = {
                    s: Es,
                    p: "top",
                    p2: "Top",
                    os: "bottom",
                    os2: "Bottom",
                    d: "height",
                    d2: "Height",
                    a: "y",
                    op: ks,
                    sc: Ms(function (t) {
                        return arguments.length ? is.scrollTo(ks.sc(), t) : is.pageYOffset || rs[Es] || ns[Es] || ss[Es] || 0;
                    }),
                },
                As = function (t, e) {
                    return ((e && e._ctx && e._ctx.selector) || ts.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== ts.config().nullTargetWarn ? console.warn("Element not found:", t) : null);
                },
                Ls = function (t, e) {
                    var i = e.s,
                        r = e.sc;
                    bs(t) && (t = rs.scrollingElement || ns);
                    var n = gs.indexOf(t),
                        s = r === Cs.sc ? 1 : 2;
                    !~n && (n = gs.push(t) - 1), gs[n + s] || xs(t, "scroll", $s);
                    var o = gs[n + s],
                        a =
                            o ||
                            (gs[n + s] =
                                Ms(ws(t, i), !0) ||
                                (bs(t)
                                    ? r
                                    : Ms(function (e) {
                                        return arguments.length ? (t[i] = e) : t[i];
                                    })));
                    return (a.target = t), o || (a.smooth = "smooth" === ts.getProperty(t, "scrollBehavior")), a;
                },
                Ps = function (t, e, i) {
                    var r = t,
                        n = t,
                        s = _s(),
                        o = s,
                        a = e || 50,
                        l = Math.max(500, 3 * a),
                        h = function (t, e) {
                            var l = _s();
                            e || l - s > a ? ((n = r), (r = t), (o = s), (s = l)) : i ? (r += t) : (r = n + ((t - n) / (l - o)) * (s - o));
                        };
                    return {
                        update: h,
                        reset: function () {
                            (n = r = i ? 0 : r), (o = s = 0);
                        },
                        getVelocity: function (t) {
                            var e = o,
                                a = n,
                                c = _s();
                            return (t || 0 === t) && t !== r && h(t), s === o || c - o > l ? 0 : ((r + (i ? a : -a)) / ((i ? c : s) - e)) * 1e3;
                        },
                    };
                },
                Os = function (t, e) {
                    return e && !t._gsapAllow && t.preventDefault(), t.changedTouches ? t.changedTouches[0] : t;
                },
                Is = function (t) {
                    var e = Math.max.apply(Math, t),
                        i = Math.min.apply(Math, t);
                    return Math.abs(e) >= Math.abs(i) ? e : i;
                },
                zs = function () {
                    var t, e, i, r;
                    (ls = ts.core.globals().ScrollTrigger) &&
                        ls.core &&
                        ((t = ls.core),
                            (e = t.bridge || {}),
                            (i = t._scrollers),
                            (r = t._proxies),
                            i.push.apply(i, gs),
                            r.push.apply(r, vs),
                            (gs = i),
                            (vs = r),
                            (ys = function (t, i) {
                                return e[t](i);
                            }));
                },
                Rs = function (t) {
                    return (
                        (ts = t || ps()) &&
                        "undefined" != typeof document &&
                        document.body &&
                        ((is = window),
                            (rs = document),
                            (ns = rs.documentElement),
                            (ss = rs.body),
                            (hs = [is, rs, ns, ss]),
                            ts.utils.clamp,
                            (ds = ts.core.context || function () { }),
                            (as = "onpointerenter" in ss ? "pointer" : "mouse"),
                            (os = Ds.isTouch = is.matchMedia && is.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in is || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0),
                            (us = Ds.eventTypes = ("ontouchstart" in ns
                                ? "touchstart,touchmove,touchcancel,touchend"
                                : "onpointerdown" in ns
                                    ? "pointerdown,pointermove,pointercancel,pointerup"
                                    : "mousedown,mousemove,mouseup,mouseup"
                            ).split(",")),
                            setTimeout(function () {
                                return (fs = 0);
                            }, 500),
                            zs(),
                            (es = 1)),
                        es
                    );
                };
            (ks.op = Cs), (gs.cache = 0);
            var Ds = (function () {
                function t(t) {
                    this.init(t);
                }
                var e, i, r;
                return (
                    (t.prototype.init = function (t) {
                        es || Rs(ts) || console.warn("Please gsap.registerPlugin(Observer)"), ls || zs();
                        var e = t.tolerance,
                            i = t.dragMinimum,
                            r = t.type,
                            n = t.target,
                            s = t.lineHeight,
                            o = t.debounce,
                            a = t.preventDefault,
                            l = t.onStop,
                            h = t.onStopDelay,
                            c = t.ignore,
                            u = t.wheelSpeed,
                            d = t.event,
                            p = t.onDragStart,
                            f = t.onDragEnd,
                            m = t.onDrag,
                            g = t.onPress,
                            v = t.onRelease,
                            _ = t.onRight,
                            y = t.onLeft,
                            w = t.onUp,
                            b = t.onDown,
                            x = t.onChangeX,
                            T = t.onChangeY,
                            S = t.onChange,
                            E = t.onToggleX,
                            $ = t.onToggleY,
                            M = t.onHover,
                            k = t.onHoverEnd,
                            C = t.onMove,
                            A = t.ignoreCheck,
                            L = t.isNormalizer,
                            P = t.onGestureStart,
                            O = t.onGestureEnd,
                            I = t.onWheel,
                            z = t.onEnable,
                            R = t.onDisable,
                            D = t.onClick,
                            q = t.scrollSpeed,
                            F = t.capture,
                            N = t.allowClicks,
                            B = t.lockAxis,
                            W = t.onLockAxis;
                        (this.target = n = As(n) || ns),
                            (this.vars = t),
                            c && (c = ts.utils.toArray(c)),
                            (e = e || 1e-9),
                            (i = i || 0),
                            (u = u || 1),
                            (q = q || 1),
                            (r = r || "wheel,touch,pointer"),
                            (o = !1 !== o),
                            s || (s = parseFloat(is.getComputedStyle(ss).lineHeight) || 22);
                        var Y,
                            X,
                            H,
                            U,
                            V,
                            j,
                            G,
                            J = this,
                            K = 0,
                            Z = 0,
                            Q = Ls(n, ks),
                            tt = Ls(n, Cs),
                            et = Q(),
                            it = tt(),
                            rt = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === us[0],
                            nt = bs(n),
                            st = n.ownerDocument || rs,
                            ot = [0, 0, 0],
                            at = [0, 0, 0],
                            lt = 0,
                            ht = function () {
                                return (lt = _s());
                            },
                            ct = function (t, e) {
                                return ((J.event = t) && c && ~c.indexOf(t.target)) || (e && rt && "touch" !== t.pointerType) || (A && A(t, e));
                            },
                            ut = function () {
                                var t = (J.deltaX = Is(ot)),
                                    i = (J.deltaY = Is(at)),
                                    r = Math.abs(t) >= e,
                                    n = Math.abs(i) >= e;
                                S && (r || n) && S(J, t, i, ot, at),
                                    r && (_ && J.deltaX > 0 && _(J), y && J.deltaX < 0 && y(J), x && x(J), E && J.deltaX < 0 != K < 0 && E(J), (K = J.deltaX), (ot[0] = ot[1] = ot[2] = 0)),
                                    n && (b && J.deltaY > 0 && b(J), w && J.deltaY < 0 && w(J), T && T(J), $ && J.deltaY < 0 != Z < 0 && $(J), (Z = J.deltaY), (at[0] = at[1] = at[2] = 0)),
                                    (U || H) && (C && C(J), H && (m(J), (H = !1)), (U = !1)),
                                    j && !(j = !1) && W && W(J),
                                    V && (I(J), (V = !1)),
                                    (Y = 0);
                            },
                            dt = function (t, e, i) {
                                (ot[i] += t), (at[i] += e), J._vx.update(t), J._vy.update(e), o ? Y || (Y = requestAnimationFrame(ut)) : ut();
                            },
                            pt = function (t, e) {
                                B && !G && ((J.axis = G = Math.abs(t) > Math.abs(e) ? "x" : "y"), (j = !0)),
                                    "y" !== G && ((ot[2] += t), J._vx.update(t, !0)),
                                    "x" !== G && ((at[2] += e), J._vy.update(e, !0)),
                                    o ? Y || (Y = requestAnimationFrame(ut)) : ut();
                            },
                            ft = function (t) {
                                if (!ct(t, 1)) {
                                    var e = (t = Os(t, a)).clientX,
                                        r = t.clientY,
                                        n = e - J.x,
                                        s = r - J.y,
                                        o = J.isDragging;
                                    (J.x = e), (J.y = r), (o || Math.abs(J.startX - e) >= i || Math.abs(J.startY - r) >= i) && (m && (H = !0), o || (J.isDragging = !0), pt(n, s), o || (p && p(J)));
                                }
                            },
                            mt = (J.onPress = function (t) {
                                ct(t, 1) ||
                                    (t && t.button) ||
                                    ((J.axis = G = null),
                                        X.pause(),
                                        (J.isPressed = !0),
                                        (t = Os(t)),
                                        (K = Z = 0),
                                        (J.startX = J.x = t.clientX),
                                        (J.startY = J.y = t.clientY),
                                        J._vx.reset(),
                                        J._vy.reset(),
                                        xs(L ? n : st, us[1], ft, a, !0),
                                        (J.deltaX = J.deltaY = 0),
                                        g && g(J));
                            }),
                            gt = (J.onRelease = function (t) {
                                if (!ct(t, 1)) {
                                    Ts(L ? n : st, us[1], ft, !0);
                                    var e = !isNaN(J.y - J.startY),
                                        i = J.isDragging && (Math.abs(J.x - J.startX) > 3 || Math.abs(J.y - J.startY) > 3),
                                        r = Os(t);
                                    !i &&
                                        e &&
                                        (J._vx.reset(),
                                            J._vy.reset(),
                                            a &&
                                            N &&
                                            ts.delayedCall(0.08, function () {
                                                if (_s() - lt > 300 && !t.defaultPrevented)
                                                    if (t.target.click) t.target.click();
                                                    else if (st.createEvent) {
                                                        var e = st.createEvent("MouseEvents");
                                                        e.initMouseEvent("click", !0, !0, is, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e);
                                                    }
                                            })),
                                        (J.isDragging = J.isGesturing = J.isPressed = !1),
                                        l && !L && X.restart(!0),
                                        f && i && f(J),
                                        v && v(J, i);
                                }
                            }),
                            vt = function (t) {
                                return t.touches && t.touches.length > 1 && (J.isGesturing = !0) && P(t, J.isDragging);
                            },
                            _t = function () {
                                return (J.isGesturing = !1) || O(J);
                            },
                            yt = function (t) {
                                if (!ct(t)) {
                                    var e = Q(),
                                        i = tt();
                                    dt((e - et) * q, (i - it) * q, 1), (et = e), (it = i), l && X.restart(!0);
                                }
                            },
                            wt = function (t) {
                                if (!ct(t)) {
                                    (t = Os(t, a)), I && (V = !0);
                                    var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? is.innerHeight : 1) * u;
                                    dt(t.deltaX * e, t.deltaY * e, 0), l && !L && X.restart(!0);
                                }
                            },
                            bt = function (t) {
                                if (!ct(t)) {
                                    var e = t.clientX,
                                        i = t.clientY,
                                        r = e - J.x,
                                        n = i - J.y;
                                    (J.x = e), (J.y = i), (U = !0), (r || n) && pt(r, n);
                                }
                            },
                            xt = function (t) {
                                (J.event = t), M(J);
                            },
                            Tt = function (t) {
                                (J.event = t), k(J);
                            },
                            St = function (t) {
                                return ct(t) || (Os(t, a) && D(J));
                            };
                        (X = J._dc = ts
                            .delayedCall(h || 0.25, function () {
                                J._vx.reset(), J._vy.reset(), X.pause(), l && l(J);
                            })
                            .pause()),
                            (J.deltaX = J.deltaY = 0),
                            (J._vx = Ps(0, 50, !0)),
                            (J._vy = Ps(0, 50, !0)),
                            (J.scrollX = Q),
                            (J.scrollY = tt),
                            (J.isDragging = J.isGesturing = J.isPressed = !1),
                            ds(this),
                            (J.enable = function (t) {
                                return (
                                    J.isEnabled ||
                                    (xs(nt ? st : n, "scroll", $s),
                                        r.indexOf("scroll") >= 0 && xs(nt ? st : n, "scroll", yt, a, F),
                                        r.indexOf("wheel") >= 0 && xs(n, "wheel", wt, a, F),
                                        ((r.indexOf("touch") >= 0 && os) || r.indexOf("pointer") >= 0) &&
                                        (xs(n, us[0], mt, a, F),
                                            xs(st, us[2], gt),
                                            xs(st, us[3], gt),
                                            N && xs(n, "click", ht, !1, !0),
                                            D && xs(n, "click", St),
                                            P && xs(st, "gesturestart", vt),
                                            O && xs(st, "gestureend", _t),
                                            M && xs(n, as + "enter", xt),
                                            k && xs(n, as + "leave", Tt),
                                            C && xs(n, as + "move", bt)),
                                        (J.isEnabled = !0),
                                        t && t.type && mt(t),
                                        z && z(J)),
                                    J
                                );
                            }),
                            (J.disable = function () {
                                J.isEnabled &&
                                    (ms.filter(function (t) {
                                        return t !== J && bs(t.target);
                                    }).length || Ts(nt ? st : n, "scroll", $s),
                                        J.isPressed && (J._vx.reset(), J._vy.reset(), Ts(L ? n : st, us[1], ft, !0)),
                                        Ts(nt ? st : n, "scroll", yt, F),
                                        Ts(n, "wheel", wt, F),
                                        Ts(n, us[0], mt, F),
                                        Ts(st, us[2], gt),
                                        Ts(st, us[3], gt),
                                        Ts(n, "click", ht, !0),
                                        Ts(n, "click", St),
                                        Ts(st, "gesturestart", vt),
                                        Ts(st, "gestureend", _t),
                                        Ts(n, as + "enter", xt),
                                        Ts(n, as + "leave", Tt),
                                        Ts(n, as + "move", bt),
                                        (J.isEnabled = J.isPressed = J.isDragging = !1),
                                        R && R(J));
                            }),
                            (J.kill = J.revert = function () {
                                J.disable();
                                var t = ms.indexOf(J);
                                t >= 0 && ms.splice(t, 1), cs === J && (cs = 0);
                            }),
                            ms.push(J),
                            L && bs(n) && (cs = J),
                            J.enable(d);
                    }),
                    (e = t),
                    (i = [
                        {
                            key: "velocityX",
                            get: function () {
                                return this._vx.getVelocity();
                            },
                        },
                        {
                            key: "velocityY",
                            get: function () {
                                return this._vy.getVelocity();
                            },
                        },
                    ]) && Qn(e.prototype, i),
                    r && Qn(e, r),
                    t
                );
            })();
            (Ds.version = "3.12.2"),
                (Ds.create = function (t) {
                    return new Ds(t);
                }),
                (Ds.register = Rs),
                (Ds.getAll = function () {
                    return ms.slice();
                }),
                (Ds.getById = function (t) {
                    return ms.filter(function (e) {
                        return e.vars.id === t;
                    })[0];
                }),
                ps() && ts.registerPlugin(Ds);
            var qs,
                Fs,
                Ns,
                Bs,
                Ws,
                Ys,
                Xs,
                Hs,
                Us,
                Vs,
                js,
                Gs,
                Js,
                Ks,
                Zs,
                Qs,
                to,
                eo,
                io,
                ro,
                no,
                so,
                oo,
                ao,
                lo,
                ho,
                co,
                uo,
                po,
                fo,
                mo,
                go,
                vo,
                _o,
                yo,
                wo,
                bo = 1,
                xo = Date.now,
                To = xo(),
                So = 0,
                Eo = 0,
                $o = function (t, e, i) {
                    var r = No(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
                    return (i["_" + e + "Clamp"] = r), r ? t.substr(6, t.length - 7) : t;
                },
                Mo = function (t, e) {
                    return !e || (No(t) && "clamp(" === t.substr(0, 6)) ? t : "clamp(" + t + ")";
                },
                ko = function t() {
                    return Eo && requestAnimationFrame(t);
                },
                Co = function () {
                    return (Ks = 1);
                },
                Ao = function () {
                    return (Ks = 0);
                },
                Lo = function (t) {
                    return t;
                },
                Po = function (t) {
                    return Math.round(1e5 * t) / 1e5 || 0;
                },
                Oo = function () {
                    return "undefined" != typeof window;
                },
                Io = function () {
                    return qs || (Oo() && (qs = window.gsap) && qs.registerPlugin && qs);
                },
                zo = function (t) {
                    return !!~Xs.indexOf(t);
                },
                Ro = function (t) {
                    return ("Height" === t ? mo : Ns["inner" + t]) || Ws["client" + t] || Ys["client" + t];
                },
                Do = function (t) {
                    return (
                        ws(t, "getBoundingClientRect") ||
                        (zo(t)
                            ? function () {
                                return (Ga.width = Ns.innerWidth), (Ga.height = mo), Ga;
                            }
                            : function () {
                                return ha(t);
                            })
                    );
                },
                qo = function (t, e) {
                    var i = e.s,
                        r = e.d2,
                        n = e.d,
                        s = e.a;
                    return Math.max(0, (i = "scroll" + r) && (s = ws(t, i)) ? s() - Do(t)()[n] : zo(t) ? (Ws[i] || Ys[i]) - Ro(r) : t[i] - t["offset" + r]);
                },
                Fo = function (t, e) {
                    for (var i = 0; i < io.length; i += 3) (!e || ~e.indexOf(io[i + 1])) && t(io[i], io[i + 1], io[i + 2]);
                },
                No = function (t) {
                    return "string" == typeof t;
                },
                Bo = function (t) {
                    return "function" == typeof t;
                },
                Wo = function (t) {
                    return "number" == typeof t;
                },
                Yo = function (t) {
                    return "object" == typeof t;
                },
                Xo = function (t, e, i) {
                    return t && t.progress(e ? 0 : 1) && i && t.pause();
                },
                Ho = function (t, e) {
                    if (t.enabled) {
                        var i = e(t);
                        i && i.totalTime && (t.callbackAnimation = i);
                    }
                },
                Uo = Math.abs,
                Vo = "left",
                jo = "right",
                Go = "bottom",
                Jo = "width",
                Ko = "height",
                Zo = "Right",
                Qo = "Left",
                ta = "Top",
                ea = "Bottom",
                ia = "padding",
                ra = "margin",
                na = "Width",
                sa = "Height",
                oa = "px",
                aa = function (t) {
                    return Ns.getComputedStyle(t);
                },
                la = function (t, e) {
                    for (var i in e) i in t || (t[i] = e[i]);
                    return t;
                },
                ha = function (t, e) {
                    var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== aa(t)[Zs] && qs.to(t, { x: 0, y: 0, xPercent: 0, yPercent: 0, rotation: 0, rotationX: 0, rotationY: 0, scale: 1, skewX: 0, skewY: 0 }).progress(1),
                        r = t.getBoundingClientRect();
                    return i && i.progress(0).kill(), r;
                },
                ca = function (t, e) {
                    var i = e.d2;
                    return t["offset" + i] || t["client" + i] || 0;
                },
                ua = function (t) {
                    var e,
                        i = [],
                        r = t.labels,
                        n = t.duration();
                    for (e in r) i.push(r[e] / n);
                    return i;
                },
                da = function (t) {
                    var e = qs.utils.snap(t),
                        i =
                            Array.isArray(t) &&
                            t.slice(0).sort(function (t, e) {
                                return t - e;
                            });
                    return i
                        ? function (t, r, n) {
                            var s;
                            if ((void 0 === n && (n = 0.001), !r)) return e(t);
                            if (r > 0) {
                                for (t -= n, s = 0; s < i.length; s++) if (i[s] >= t) return i[s];
                                return i[s - 1];
                            }
                            for (s = i.length, t += n; s--;) if (i[s] <= t) return i[s];
                            return i[0];
                        }
                        : function (i, r, n) {
                            void 0 === n && (n = 0.001);
                            var s = e(i);
                            return !r || Math.abs(s - i) < n || s - i < 0 == r < 0 ? s : e(r < 0 ? i - t : i + t);
                        };
                },
                pa = function (t, e, i, r) {
                    return i.split(",").forEach(function (i) {
                        return t(e, i, r);
                    });
                },
                fa = function (t, e, i, r, n) {
                    return t.addEventListener(e, i, { passive: !r, capture: !!n });
                },
                ma = function (t, e, i, r) {
                    return t.removeEventListener(e, i, !!r);
                },
                ga = function (t, e, i) {
                    (i = i && i.wheelHandler) && (t(e, "wheel", i), t(e, "touchmove", i));
                },
                va = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
                _a = { toggleActions: "play", anticipatePin: 0 },
                ya = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
                wa = function (t, e) {
                    if (No(t)) {
                        var i = t.indexOf("="),
                            r = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                        ~i && (t.indexOf("%") > i && (r *= e / 100), (t = t.substr(0, i - 1))), (t = r + (t in ya ? ya[t] * e : ~t.indexOf("%") ? (parseFloat(t) * e) / 100 : parseFloat(t) || 0));
                    }
                    return t;
                },
                ba = function (t, e, i, r, n, s, o, a) {
                    var l = n.startColor,
                        h = n.endColor,
                        c = n.fontSize,
                        u = n.indent,
                        d = n.fontWeight,
                        p = Bs.createElement("div"),
                        f = zo(i) || "fixed" === ws(i, "pinType"),
                        m = -1 !== t.indexOf("scroller"),
                        g = f ? Ys : i,
                        v = -1 !== t.indexOf("start"),
                        _ = v ? l : h,
                        y =
                            "border-color:" +
                            _ +
                            ";font-size:" +
                            c +
                            ";color:" +
                            _ +
                            ";font-weight:" +
                            d +
                            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                    return (
                        (y += "position:" + ((m || a) && f ? "fixed;" : "absolute;")),
                        (m || a || !f) && (y += (r === Cs ? jo : Go) + ":" + (s + parseFloat(u)) + "px;"),
                        o && (y += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
                        (p._isStart = v),
                        p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
                        (p.style.cssText = y),
                        (p.innerText = e || 0 === e ? t + "-" + e : t),
                        g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
                        (p._offset = p["offset" + r.op.d2]),
                        xa(p, 0, r, v),
                        p
                    );
                },
                xa = function (t, e, i, r) {
                    var n = { display: "block" },
                        s = i[r ? "os2" : "p2"],
                        o = i[r ? "p2" : "os2"];
                    (t._isFlipped = r), (n[i.a + "Percent"] = r ? -100 : 0), (n[i.a] = r ? "1px" : 0), (n["border" + s + na] = 1), (n["border" + o + na] = 0), (n[i.p] = e + "px"), qs.set(t, n);
                },
                Ta = [],
                Sa = {},
                Ea = function () {
                    return xo() - So > 34 && (vo || (vo = requestAnimationFrame(Wa)));
                },
                $a = function () {
                    (!oo || !oo.isPressed || oo.startX > Ys.clientWidth) && (gs.cache++, oo ? vo || (vo = requestAnimationFrame(Wa)) : Wa(), So || Pa("scrollStart"), (So = xo()));
                },
                Ma = function () {
                    (ho = Ns.innerWidth), (lo = Ns.innerHeight);
                },
                ka = function () {
                    gs.cache++, !Js && !so && !Bs.fullscreenElement && !Bs.webkitFullscreenElement && (!ao || ho !== Ns.innerWidth || Math.abs(Ns.innerHeight - lo) > 0.25 * Ns.innerHeight) && Hs.restart(!0);
                },
                Ca = {},
                Aa = [],
                La = function t() {
                    return ma(il, "scrollEnd", t) || Fa(!0);
                },
                Pa = function (t) {
                    return (
                        (Ca[t] &&
                            Ca[t].map(function (t) {
                                return t();
                            })) ||
                        Aa
                    );
                },
                Oa = [],
                Ia = function (t) {
                    for (var e = 0; e < Oa.length; e += 5) (!t || (Oa[e + 4] && Oa[e + 4].query === t)) && ((Oa[e].style.cssText = Oa[e + 1]), Oa[e].getBBox && Oa[e].setAttribute("transform", Oa[e + 2] || ""), (Oa[e + 3].uncache = 1));
                },
                za = function (t, e) {
                    var i;
                    for (Qs = 0; Qs < Ta.length; Qs++) !(i = Ta[Qs]) || (e && i._ctx !== e) || (t ? i.kill(1) : i.revert(!0, !0));
                    e && Ia(e), e || Pa("revert");
                },
                Ra = function (t, e) {
                    gs.cache++,
                        (e || !_o) &&
                        gs.forEach(function (t) {
                            return Bo(t) && t.cacheID++ && (t.rec = 0);
                        }),
                        No(t) && (Ns.history.scrollRestoration = po = t);
                },
                Da = 0,
                qa = function () {
                    Ys.appendChild(fo), (mo = fo.offsetHeight || Ns.innerHeight), Ys.removeChild(fo);
                },
                Fa = function (t, e) {
                    if (!So || t) {
                        qa(),
                            (_o = il.isRefreshing = !0),
                            gs.forEach(function (t) {
                                return Bo(t) && ++t.cacheID && (t.rec = t());
                            });
                        var i = Pa("refreshInit");
                        ro && il.sort(),
                            e || za(),
                            gs.forEach(function (t) {
                                Bo(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
                            }),
                            Ta.slice(0).forEach(function (t) {
                                return t.refresh();
                            }),
                            Ta.forEach(function (t, e) {
                                if (t._subPinOffset && t.pin) {
                                    var i = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                                        r = t.pin[i];
                                    t.revert(!0, 1), t.adjustPinSpacing(t.pin[i] - r), t.refresh();
                                }
                            }),
                            Ta.forEach(function (t) {
                                var e = qo(t.scroller, t._dir);
                                ("max" === t.vars.end || (t._endClamp && t.end > e)) && t.setPositions(t.start, Math.max(t.start + 1, e), !0);
                            }),
                            i.forEach(function (t) {
                                return t && t.render && t.render(-1);
                            }),
                            gs.forEach(function (t) {
                                Bo(t) &&
                                    (t.smooth &&
                                        requestAnimationFrame(function () {
                                            return (t.target.style.scrollBehavior = "smooth");
                                        }),
                                        t.rec && t(t.rec));
                            }),
                            Ra(po, 1),
                            Hs.pause(),
                            Da++,
                            (_o = 2),
                            Wa(2),
                            Ta.forEach(function (t) {
                                return Bo(t.vars.onRefresh) && t.vars.onRefresh(t);
                            }),
                            (_o = il.isRefreshing = !1),
                            Pa("refresh");
                    } else fa(il, "scrollEnd", La);
                },
                Na = 0,
                Ba = 1,
                Wa = function (t) {
                    if (!_o || 2 === t) {
                        (il.isUpdating = !0), wo && wo.update(0);
                        var e = Ta.length,
                            i = xo(),
                            r = i - To >= 50,
                            n = e && Ta[0].scroll();
                        if (((Ba = Na > n ? -1 : 1), _o || (Na = n), r && (So && !Ks && i - So > 200 && ((So = 0), Pa("scrollEnd")), (js = To), (To = i)), Ba < 0)) {
                            for (Qs = e; Qs-- > 0;) Ta[Qs] && Ta[Qs].update(0, r);
                            Ba = 1;
                        } else for (Qs = 0; Qs < e; Qs++) Ta[Qs] && Ta[Qs].update(0, r);
                        il.isUpdating = !1;
                    }
                    vo = 0;
                },
                Ya = [
                    Vo,
                    "top",
                    Go,
                    jo,
                    ra + ea,
                    ra + Zo,
                    ra + ta,
                    ra + Qo,
                    "display",
                    "flexShrink",
                    "float",
                    "zIndex",
                    "gridColumnStart",
                    "gridColumnEnd",
                    "gridRowStart",
                    "gridRowEnd",
                    "gridArea",
                    "justifySelf",
                    "alignSelf",
                    "placeSelf",
                    "order",
                ],
                Xa = Ya.concat([Jo, Ko, "boxSizing", "max" + na, "max" + sa, "position", ra, ia, ia + ta, ia + Zo, ia + ea, ia + Qo]),
                Ha = function (t, e, i, r) {
                    if (!t._gsap.swappedIn) {
                        for (var n, s = Ya.length, o = e.style, a = t.style; s--;) o[(n = Ya[s])] = i[n];
                        (o.position = "absolute" === i.position ? "absolute" : "relative"),
                            "inline" === i.display && (o.display = "inline-block"),
                            (a[Go] = a[jo] = "auto"),
                            (o.flexBasis = i.flexBasis || "auto"),
                            (o.overflow = "visible"),
                            (o.boxSizing = "border-box"),
                            (o[Jo] = ca(t, ks) + oa),
                            (o[Ko] = ca(t, Cs) + oa),
                            (o[ia] = a[ra] = a.top = a[Vo] = "0"),
                            Va(r),
                            (a[Jo] = a["max" + na] = i[Jo]),
                            (a[Ko] = a["max" + sa] = i[Ko]),
                            (a[ia] = i[ia]),
                            t.parentNode !== e && (t.parentNode.insertBefore(e, t), e.appendChild(t)),
                            (t._gsap.swappedIn = !0);
                    }
                },
                Ua = /([A-Z])/g,
                Va = function (t) {
                    if (t) {
                        var e,
                            i,
                            r = t.t.style,
                            n = t.length,
                            s = 0;
                        for ((t.t._gsap || qs.core.getCache(t.t)).uncache = 1; s < n; s += 2) (i = t[s + 1]), (e = t[s]), i ? (r[e] = i) : r[e] && r.removeProperty(e.replace(Ua, "-$1").toLowerCase());
                    }
                },
                ja = function (t) {
                    for (var e = Xa.length, i = t.style, r = [], n = 0; n < e; n++) r.push(Xa[n], i[Xa[n]]);
                    return (r.t = t), r;
                },
                Ga = { left: 0, top: 0 },
                Ja = function (t, e, i, r, n, s, o, a, l, h, c, u, d, p) {
                    Bo(t) && (t = t(a)), No(t) && "max" === t.substr(0, 3) && (t = u + ("=" === t.charAt(4) ? wa("0" + t.substr(3), i) : 0));
                    var f,
                        m,
                        g,
                        v = d ? d.time() : 0;
                    if ((d && d.seek(0), isNaN(t) || (t = +t), Wo(t))) d && (t = qs.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, u, t)), o && xa(o, i, r, !0);
                    else {
                        Bo(e) && (e = e(a));
                        var _,
                            y,
                            w,
                            b,
                            x = (t || "0").split(" ");
                        (g = As(e, a) || Ys),
                            ((_ = ha(g) || {}) && (_.left || _.top)) || "none" !== aa(g).display || ((b = g.style.display), (g.style.display = "block"), (_ = ha(g)), b ? (g.style.display = b) : g.style.removeProperty("display")),
                            (y = wa(x[0], _[r.d])),
                            (w = wa(x[1] || "0", i)),
                            (t = _[r.p] - l[r.p] - h + y + n - w),
                            o && xa(o, w, r, i - w < 20 || (o._isStart && w > 20)),
                            (i -= i - w);
                    }
                    if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), s)) {
                        var T = t + i,
                            S = s._isStart;
                        (f = "scroll" + r.d2), xa(s, T, r, (S && T > 20) || (!S && (c ? Math.max(Ys[f], Ws[f]) : s.parentNode[f]) <= T + 1)), c && ((l = ha(o)), c && (s.style[r.op.p] = l[r.op.p] - r.op.m - s._offset + oa));
                    }
                    return d && g && ((f = ha(g)), d.seek(u), (m = ha(g)), (d._caScrollDist = f[r.p] - m[r.p]), (t = (t / d._caScrollDist) * u)), d && d.seek(v), d ? t : Math.round(t);
                },
                Ka = /(webkit|moz|length|cssText|inset)/i,
                Za = function (t, e, i, r) {
                    if (t.parentNode !== e) {
                        var n,
                            s,
                            o = t.style;
                        if (e === Ys) {
                            for (n in ((t._stOrig = o.cssText), (s = aa(t)))) +n || Ka.test(n) || !s[n] || "string" != typeof o[n] || "0" === n || (o[n] = s[n]);
                            (o.top = i), (o.left = r);
                        } else o.cssText = t._stOrig;
                        (qs.core.getCache(t).uncache = 1), e.appendChild(t);
                    }
                },
                Qa = function (t, e, i) {
                    var r = e,
                        n = r;
                    return function (e) {
                        var s = Math.round(t());
                        return s !== r && s !== n && Math.abs(s - r) > 3 && Math.abs(s - n) > 3 && ((e = s), i && i()), (n = r), (r = e), e;
                    };
                },
                tl = function (t, e, i) {
                    var r = {};
                    (r[e.p] = "+=" + i), qs.set(t, r);
                },
                el = function (t, e) {
                    var i = Ls(t, e),
                        r = "_scroll" + e.p2,
                        n = function e(n, s, o, a, l) {
                            var h = e.tween,
                                c = s.onComplete,
                                u = {};
                            o = o || i();
                            var d = Qa(i, o, function () {
                                h.kill(), (e.tween = 0);
                            });
                            return (
                                (l = (a && l) || 0),
                                (a = a || n - o),
                                h && h.kill(),
                                (s[r] = n),
                                (s.modifiers = u),
                                (u[r] = function () {
                                    return d(o + a * h.ratio + l * h.ratio * h.ratio);
                                }),
                                (s.onUpdate = function () {
                                    gs.cache++, Wa();
                                }),
                                (s.onComplete = function () {
                                    (e.tween = 0), c && c.call(h);
                                }),
                                (h = e.tween = qs.to(t, s))
                            );
                        };
                    return (
                        (t[r] = i),
                        (i.wheelHandler = function () {
                            return n.tween && n.tween.kill() && (n.tween = 0);
                        }),
                        fa(t, "wheel", i.wheelHandler),
                        il.isTouch && fa(t, "touchmove", i.wheelHandler),
                        n
                    );
                },
                il = (function () {
                    function t(e, i) {
                        Fs || t.register(qs) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), uo(this), this.init(e, i);
                    }
                    return (
                        (t.prototype.init = function (e, i) {
                            if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), Eo)) {
                                var r,
                                    n,
                                    s,
                                    o,
                                    a,
                                    l,
                                    h,
                                    c,
                                    u,
                                    d,
                                    p,
                                    f,
                                    m,
                                    g,
                                    v,
                                    _,
                                    y,
                                    w,
                                    b,
                                    x,
                                    T,
                                    S,
                                    E,
                                    $,
                                    M,
                                    k,
                                    C,
                                    A,
                                    L,
                                    P,
                                    O,
                                    I,
                                    z,
                                    R,
                                    D,
                                    q,
                                    F,
                                    N,
                                    B,
                                    W,
                                    Y,
                                    X,
                                    H = (e = la(No(e) || Wo(e) || e.nodeType ? { trigger: e } : e, _a)),
                                    U = H.onUpdate,
                                    V = H.toggleClass,
                                    j = H.id,
                                    G = H.onToggle,
                                    J = H.onRefresh,
                                    K = H.scrub,
                                    Z = H.trigger,
                                    Q = H.pin,
                                    tt = H.pinSpacing,
                                    et = H.invalidateOnRefresh,
                                    it = H.anticipatePin,
                                    rt = H.onScrubComplete,
                                    nt = H.onSnapComplete,
                                    st = H.once,
                                    ot = H.snap,
                                    at = H.pinReparent,
                                    lt = H.pinSpacer,
                                    ht = H.containerAnimation,
                                    ct = H.fastScrollEnd,
                                    ut = H.preventOverlaps,
                                    dt = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? ks : Cs,
                                    pt = !K && 0 !== K,
                                    ft = As(e.scroller || Ns),
                                    mt = qs.core.getCache(ft),
                                    gt = zo(ft),
                                    vt = "fixed" === ("pinType" in e ? e.pinType : ws(ft, "pinType") || (gt && "fixed")),
                                    _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                                    yt = pt && e.toggleActions.split(" "),
                                    wt = "markers" in e ? e.markers : _a.markers,
                                    bt = gt ? 0 : parseFloat(aa(ft)["border" + dt.p2 + na]) || 0,
                                    xt = this,
                                    Tt =
                                        e.onRefreshInit &&
                                        function () {
                                            return e.onRefreshInit(xt);
                                        },
                                    St = (function (t, e, i) {
                                        var r = i.d,
                                            n = i.d2,
                                            s = i.a;
                                        return (s = ws(t, "getBoundingClientRect"))
                                            ? function () {
                                                return s()[r];
                                            }
                                            : function () {
                                                return (e ? Ro(n) : t["client" + n]) || 0;
                                            };
                                    })(ft, gt, dt),
                                    Et = (function (t, e) {
                                        return !e || ~vs.indexOf(t)
                                            ? Do(t)
                                            : function () {
                                                return Ga;
                                            };
                                    })(ft, gt),
                                    $t = 0,
                                    Mt = 0,
                                    kt = 0,
                                    Ct = Ls(ft, dt);
                                if (
                                    ((xt._startClamp = xt._endClamp = !1),
                                        (xt._dir = dt),
                                        (it *= 45),
                                        (xt.scroller = ft),
                                        (xt.scroll = ht ? ht.time.bind(ht) : Ct),
                                        (o = Ct()),
                                        (xt.vars = e),
                                        (i = i || e.animation),
                                        "refreshPriority" in e && ((ro = 1), -9999 === e.refreshPriority && (wo = xt)),
                                        (mt.tweenScroll = mt.tweenScroll || { top: el(ft, Cs), left: el(ft, ks) }),
                                        (xt.tweenTo = r = mt.tweenScroll[dt.p]),
                                        (xt.scrubDuration = function (t) {
                                            (z = Wo(t) && t)
                                                ? I
                                                    ? I.duration(t)
                                                    : (I = qs.to(i, {
                                                        ease: "expo",
                                                        totalProgress: "+=0",
                                                        duration: z,
                                                        paused: !0,
                                                        onComplete: function () {
                                                            return rt && rt(xt);
                                                        },
                                                    }))
                                                : (I && I.progress(1).kill(), (I = 0));
                                        }),
                                        i &&
                                        ((i.vars.lazy = !1),
                                            (i._initted && !xt.isReverted) || (!1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.duration() && i.render(0, !0, !0)),
                                            (xt.animation = i.pause()),
                                            (i.scrollTrigger = xt),
                                            xt.scrubDuration(K),
                                            (P = 0),
                                            j || (j = i.vars.id)),
                                        ot &&
                                        ((Yo(ot) && !ot.push) || (ot = { snapTo: ot }),
                                            "scrollBehavior" in Ys.style && qs.set(gt ? [Ys, Ws] : ft, { scrollBehavior: "auto" }),
                                            gs.forEach(function (t) {
                                                return Bo(t) && t.target === (gt ? Bs.scrollingElement || Ws : ft) && (t.smooth = !1);
                                            }),
                                            (s = Bo(ot.snapTo)
                                                ? ot.snapTo
                                                : "labels" === ot.snapTo
                                                    ? (function (t) {
                                                        return function (e) {
                                                            return qs.utils.snap(ua(t), e);
                                                        };
                                                    })(i)
                                                    : "labelsDirectional" === ot.snapTo
                                                        ? ((W = i),
                                                            function (t, e) {
                                                                return da(ua(W))(t, e.direction);
                                                            })
                                                        : !1 !== ot.directional
                                                            ? function (t, e) {
                                                                return da(ot.snapTo)(t, xo() - Mt < 500 ? 0 : e.direction);
                                                            }
                                                            : qs.utils.snap(ot.snapTo)),
                                            (R = ot.duration || { min: 0.1, max: 2 }),
                                            (R = Yo(R) ? Vs(R.min, R.max) : Vs(R, R)),
                                            (D = qs
                                                .delayedCall(ot.delay || z / 2 || 0.1, function () {
                                                    var t = Ct(),
                                                        e = xo() - Mt < 500,
                                                        n = r.tween;
                                                    if (!(e || Math.abs(xt.getVelocity()) < 10) || n || Ks || $t === t) xt.isActive && $t !== t && D.restart(!0);
                                                    else {
                                                        var o = (t - l) / g,
                                                            a = i && !pt ? i.totalProgress() : o,
                                                            c = e ? 0 : ((a - O) / (xo() - js)) * 1e3 || 0,
                                                            u = qs.utils.clamp(-o, 1 - o, (Uo(c / 2) * c) / 0.185),
                                                            d = o + (!1 === ot.inertia ? 0 : u),
                                                            p = Vs(0, 1, s(d, xt)),
                                                            f = Math.round(l + p * g),
                                                            m = ot,
                                                            v = m.onStart,
                                                            _ = m.onInterrupt,
                                                            y = m.onComplete;
                                                        if (t <= h && t >= l && f !== t) {
                                                            if (n && !n._initted && n.data <= Uo(f - t)) return;
                                                            !1 === ot.inertia && (u = p - o),
                                                                r(
                                                                    f,
                                                                    {
                                                                        duration: R(Uo((0.185 * Math.max(Uo(d - a), Uo(p - a))) / c / 0.05 || 0)),
                                                                        ease: ot.ease || "power3",
                                                                        data: Uo(f - t),
                                                                        onInterrupt: function () {
                                                                            return D.restart(!0) && _ && _(xt);
                                                                        },
                                                                        onComplete: function () {
                                                                            xt.update(), ($t = Ct()), (P = O = i && !pt ? i.totalProgress() : xt.progress), nt && nt(xt), y && y(xt);
                                                                        },
                                                                    },
                                                                    t,
                                                                    u * g,
                                                                    f - t - u * g
                                                                ),
                                                                v && v(xt, r.tween);
                                                        }
                                                    }
                                                })
                                                .pause())),
                                        j && (Sa[j] = xt),
                                        (B = (Z = xt.trigger = As(Z || (!0 !== Q && Q))) && Z._gsap && Z._gsap.stRevert) && (B = B(xt)),
                                        (Q = !0 === Q ? Z : As(Q)),
                                        No(V) && (V = { targets: Z, className: V }),
                                        Q &&
                                        (!1 === tt || tt === ra || (tt = !(!tt && Q.parentNode && Q.parentNode.style && "flex" === aa(Q.parentNode).display) && ia),
                                            (xt.pin = Q),
                                            (n = qs.core.getCache(Q)).spacer
                                                ? (v = n.pinState)
                                                : (lt && ((lt = As(lt)) && !lt.nodeType && (lt = lt.current || lt.nativeElement), (n.spacerIsNative = !!lt), lt && (n.spacerState = ja(lt))),
                                                    (n.spacer = w = lt || Bs.createElement("div")),
                                                    w.classList.add("pin-spacer"),
                                                    j && w.classList.add("pin-spacer-" + j),
                                                    (n.pinState = v = ja(Q))),
                                            !1 !== e.force3D && qs.set(Q, { force3D: !0 }),
                                            (xt.spacer = w = n.spacer),
                                            (L = aa(Q)),
                                            ($ = L[tt + dt.os2]),
                                            (x = qs.getProperty(Q)),
                                            (T = qs.quickSetter(Q, dt.a, oa)),
                                            Ha(Q, w, L),
                                            (y = ja(Q))),
                                        wt)
                                ) {
                                    (f = Yo(wt) ? la(wt, va) : va), (d = ba("scroller-start", j, ft, dt, f, 0)), (p = ba("scroller-end", j, ft, dt, f, 0, d)), (b = d["offset" + dt.op.d2]);
                                    var At = As(ws(ft, "content") || ft);
                                    (c = this.markerStart = ba("start", j, At, dt, f, b, 0, ht)),
                                        (u = this.markerEnd = ba("end", j, At, dt, f, b, 0, ht)),
                                        ht && (N = qs.quickSetter([c, u], dt.a, oa)),
                                        vt ||
                                        (vs.length && !0 === ws(ft, "fixedMarkers")) ||
                                        ((X = aa((Y = gt ? Ys : ft)).position),
                                            (Y.style.position = "absolute" === X || "fixed" === X ? X : "relative"),
                                            qs.set([d, p], { force3D: !0 }),
                                            (k = qs.quickSetter(d, dt.a, oa)),
                                            (A = qs.quickSetter(p, dt.a, oa)));
                                }
                                if (ht) {
                                    var Lt = ht.vars.onUpdate,
                                        Pt = ht.vars.onUpdateParams;
                                    ht.eventCallback("onUpdate", function () {
                                        xt.update(0, 0, 1), Lt && Lt.apply(ht, Pt || []);
                                    });
                                }
                                if (
                                    ((xt.previous = function () {
                                        return Ta[Ta.indexOf(xt) - 1];
                                    }),
                                        (xt.next = function () {
                                            return Ta[Ta.indexOf(xt) + 1];
                                        }),
                                        (xt.revert = function (t, e) {
                                            if (!e) return xt.kill(!0);
                                            var r = !1 !== t || !xt.enabled,
                                                n = Js;
                                            r !== xt.isReverted &&
                                                (r && ((q = Math.max(Ct(), xt.scroll.rec || 0)), (kt = xt.progress), (F = i && i.progress())),
                                                    c &&
                                                    [c, u, d, p].forEach(function (t) {
                                                        return (t.style.display = r ? "none" : "block");
                                                    }),
                                                    r && ((Js = xt), xt.update(r)),
                                                    !Q ||
                                                    (at && xt.isActive) ||
                                                    (r
                                                        ? (function (t, e, i) {
                                                            Va(i);
                                                            var r = t._gsap;
                                                            if (r.spacerIsNative) Va(r.spacerState);
                                                            else if (t._gsap.swappedIn) {
                                                                var n = e.parentNode;
                                                                n && (n.insertBefore(t, e), n.removeChild(e));
                                                            }
                                                            t._gsap.swappedIn = !1;
                                                        })(Q, w, v)
                                                        : Ha(Q, w, aa(Q), M)),
                                                    r || xt.update(r),
                                                    (Js = n),
                                                    (xt.isReverted = r));
                                        }),
                                        (xt.refresh = function (n, s, f, b) {
                                            if ((!Js && xt.enabled) || s)
                                                if (Q && n && So) fa(t, "scrollEnd", La);
                                                else {
                                                    !_o && Tt && Tt(xt),
                                                        (Js = xt),
                                                        r.tween && !f && (r.tween.kill(), (r.tween = 0)),
                                                        I && I.pause(),
                                                        et && i && i.revert({ kill: !1 }).invalidate(),
                                                        xt.isReverted || xt.revert(!0, !0),
                                                        (xt._subPinOffset = !1);
                                                    var T,
                                                        $,
                                                        k,
                                                        A,
                                                        L,
                                                        P,
                                                        O,
                                                        z,
                                                        R,
                                                        N,
                                                        B,
                                                        W,
                                                        Y,
                                                        X = St(),
                                                        H = Et(),
                                                        U = ht ? ht.duration() : qo(ft, dt),
                                                        V = g <= 0.01,
                                                        j = 0,
                                                        G = b || 0,
                                                        K = Yo(f) ? f.end : e.end,
                                                        it = e.endTrigger || Z,
                                                        rt = Yo(f) ? f.start : e.start || (0 !== e.start && Z ? (Q ? "0 0" : "0 100%") : 0),
                                                        nt = (xt.pinnedContainer = e.pinnedContainer && As(e.pinnedContainer, xt)),
                                                        st = (Z && Math.max(0, Ta.indexOf(xt))) || 0,
                                                        ot = st;
                                                    for (wt && Yo(f) && ((W = qs.getProperty(d, dt.p)), (Y = qs.getProperty(p, dt.p))); ot--;)
                                                        (P = Ta[ot]).end || P.refresh(0, 1) || (Js = xt),
                                                            !(O = P.pin) || (O !== Z && O !== Q && O !== nt) || P.isReverted || (N || (N = []), N.unshift(P), P.revert(!0, !0)),
                                                            P !== Ta[ot] && (st--, ot--);
                                                    for (
                                                        Bo(rt) && (rt = rt(xt)),
                                                        rt = $o(rt, "start", xt),
                                                        l = Ja(rt, Z, X, dt, Ct(), c, d, xt, H, bt, vt, U, ht, xt._startClamp && "_startClamp") || (Q ? -0.001 : 0),
                                                        Bo(K) && (K = K(xt)),
                                                        No(K) &&
                                                        !K.indexOf("+=") &&
                                                        (~K.indexOf(" ")
                                                            ? (K = (No(rt) ? rt.split(" ")[0] : "") + K)
                                                            : ((j = wa(K.substr(2), X)), (K = No(rt) ? rt : (ht ? qs.utils.mapRange(0, ht.duration(), ht.scrollTrigger.start, ht.scrollTrigger.end, l) : l) + j), (it = Z))),
                                                        K = $o(K, "end", xt),
                                                        h = Math.max(l, Ja(K || (it ? "100% 0" : U), it, X, dt, Ct() + j, u, p, xt, H, bt, vt, U, ht, xt._endClamp && "_endClamp")) || -0.001,
                                                        j = 0,
                                                        ot = st;
                                                        ot--;

                                                    )
                                                        (O = (P = Ta[ot]).pin) &&
                                                            P.start - P._pinPush <= l &&
                                                            !ht &&
                                                            P.end > 0 &&
                                                            ((T = P.end - (xt._startClamp ? Math.max(0, P.start) : P.start)), ((O === Z && P.start - P._pinPush < l) || O === nt) && isNaN(rt) && (j += T * (1 - P.progress)), O === Q && (G += T));
                                                    if (
                                                        ((l += j),
                                                            (h += j),
                                                            xt._startClamp && (xt._startClamp += j),
                                                            xt._endClamp && !_o && ((xt._endClamp = h || -0.001), (h = Math.min(h, qo(ft, dt)))),
                                                            (g = h - l || ((l -= 0.01) && 0.001)),
                                                            V && (kt = qs.utils.clamp(0, 1, qs.utils.normalize(l, h, q))),
                                                            (xt._pinPush = G),
                                                            c && j && (((T = {})[dt.a] = "+=" + j), nt && (T[dt.p] = "-=" + Ct()), qs.set([c, u], T)),
                                                            Q)
                                                    )
                                                        (T = aa(Q)),
                                                            (A = dt === Cs),
                                                            (k = Ct()),
                                                            (S = parseFloat(x(dt.a)) + G),
                                                            !U &&
                                                            h > 1 &&
                                                            ((B = { style: (B = (gt ? Bs.scrollingElement || Ws : ft).style), value: B["overflow" + dt.a.toUpperCase()] }),
                                                                gt && "scroll" !== aa(Ys)["overflow" + dt.a.toUpperCase()] && (B.style["overflow" + dt.a.toUpperCase()] = "scroll")),
                                                            Ha(Q, w, T),
                                                            (y = ja(Q)),
                                                            ($ = ha(Q, !0)),
                                                            (z = vt && Ls(ft, A ? ks : Cs)()),
                                                            tt &&
                                                            (((M = [tt + dt.os2, g + G + oa]).t = w),
                                                                (ot = tt === ia ? ca(Q, dt) + g + G : 0) && M.push(dt.d, ot + oa),
                                                                Va(M),
                                                                nt &&
                                                                Ta.forEach(function (t) {
                                                                    t.pin === nt && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0);
                                                                }),
                                                                vt && Ct(q)),
                                                            vt &&
                                                            (((L = { top: $.top + (A ? k - l : z) + oa, left: $.left + (A ? z : k - l) + oa, boxSizing: "border-box", position: "fixed" })[Jo] = L["max" + na] = Math.ceil($.width) + oa),
                                                                (L[Ko] = L["max" + sa] = Math.ceil($.height) + oa),
                                                                (L[ra] = L[ra + ta] = L[ra + Zo] = L[ra + ea] = L[ra + Qo] = "0"),
                                                                (L[ia] = T[ia]),
                                                                (L[ia + ta] = T[ia + ta]),
                                                                (L[ia + Zo] = T[ia + Zo]),
                                                                (L[ia + ea] = T[ia + ea]),
                                                                (L[ia + Qo] = T[ia + Qo]),
                                                                (_ = (function (t, e, i) {
                                                                    for (var r, n = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) (r = t[o]), n.push(r, r in e ? e[r] : t[o + 1]);
                                                                    return (n.t = t.t), n;
                                                                })(v, L, at)),
                                                                _o && Ct(0)),
                                                            i
                                                                ? ((R = i._initted),
                                                                    no(1),
                                                                    i.render(i.duration(), !0, !0),
                                                                    (E = x(dt.a) - S + g + G),
                                                                    (C = Math.abs(g - E) > 1),
                                                                    vt && C && _.splice(_.length - 2, 2),
                                                                    i.render(0, !0, !0),
                                                                    R || i.invalidate(!0),
                                                                    i.parent || i.totalTime(i.totalTime()),
                                                                    no(0))
                                                                : (E = g),
                                                            B && (B.value ? (B.style["overflow" + dt.a.toUpperCase()] = B.value) : B.style.removeProperty("overflow-" + dt.a));
                                                    else if (Z && Ct() && !ht) for ($ = Z.parentNode; $ && $ !== Ys;) $._pinOffset && ((l -= $._pinOffset), (h -= $._pinOffset)), ($ = $.parentNode);
                                                    N &&
                                                        N.forEach(function (t) {
                                                            return t.revert(!1, !0);
                                                        }),
                                                        (xt.start = l),
                                                        (xt.end = h),
                                                        (o = a = _o ? q : Ct()),
                                                        ht || _o || (o < q && Ct(q), (xt.scroll.rec = 0)),
                                                        xt.revert(!1, !0),
                                                        (Mt = xo()),
                                                        D && (($t = -1), D.restart(!0)),
                                                        (Js = 0),
                                                        i && pt && (i._initted || F) && i.progress() !== F && i.progress(F || 0, !0).render(i.time(), !0, !0),
                                                        (V || kt !== xt.progress || ht) && (i && !pt && i.totalProgress(ht && l < -0.001 && !kt ? qs.utils.normalize(l, h, 0) : kt, !0), (xt.progress = V || (o - l) / g === kt ? 0 : kt)),
                                                        Q && tt && (w._pinOffset = Math.round(xt.progress * E)),
                                                        I && I.invalidate(),
                                                        isNaN(W) || ((W -= qs.getProperty(d, dt.p)), (Y -= qs.getProperty(p, dt.p)), tl(d, dt, W), tl(c, dt, W - (b || 0)), tl(p, dt, Y), tl(u, dt, Y - (b || 0))),
                                                        V && !_o && xt.update(),
                                                        !J || _o || m || ((m = !0), J(xt), (m = !1));
                                                }
                                        }),
                                        (xt.getVelocity = function () {
                                            return ((Ct() - a) / (xo() - js)) * 1e3 || 0;
                                        }),
                                        (xt.endAnimation = function () {
                                            Xo(xt.callbackAnimation), i && (I ? I.progress(1) : i.paused() ? pt || Xo(i, xt.direction < 0, 1) : Xo(i, i.reversed()));
                                        }),
                                        (xt.labelToScroll = function (t) {
                                            return (i && i.labels && (l || xt.refresh() || l) + (i.labels[t] / i.duration()) * g) || 0;
                                        }),
                                        (xt.getTrailing = function (t) {
                                            var e = Ta.indexOf(xt),
                                                i = xt.direction > 0 ? Ta.slice(0, e).reverse() : Ta.slice(e + 1);
                                            return (No(t)
                                                ? i.filter(function (e) {
                                                    return e.vars.preventOverlaps === t;
                                                })
                                                : i
                                            ).filter(function (t) {
                                                return xt.direction > 0 ? t.end <= l : t.start >= h;
                                            });
                                        }),
                                        (xt.update = function (t, e, n) {
                                            if (!ht || n || t) {
                                                var s,
                                                    c,
                                                    u,
                                                    p,
                                                    f,
                                                    m,
                                                    v,
                                                    b = !0 === _o ? q : xt.scroll(),
                                                    x = t ? 0 : (b - l) / g,
                                                    M = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                                                    L = xt.progress;
                                                if (
                                                    (e && ((a = o), (o = ht ? Ct() : b), ot && ((O = P), (P = i && !pt ? i.totalProgress() : M))),
                                                        it && !M && Q && !Js && !bo && So && l < b + ((b - a) / (xo() - js)) * it && (M = 1e-4),
                                                        M !== L && xt.enabled)
                                                ) {
                                                    if (
                                                        ((p = (f = (s = xt.isActive = !!M && M < 1) !== (!!L && L < 1)) || !!M != !!L),
                                                            (xt.direction = M > L ? 1 : -1),
                                                            (xt.progress = M),
                                                            p && !Js && ((c = M && !L ? 0 : 1 === M ? 1 : 1 === L ? 2 : 3), pt && ((u = (!f && "none" !== yt[c + 1] && yt[c + 1]) || yt[c]), (v = i && ("complete" === u || "reset" === u || u in i)))),
                                                            ut &&
                                                            (f || v) &&
                                                            (v || K || !i) &&
                                                            (Bo(ut)
                                                                ? ut(xt)
                                                                : xt.getTrailing(ut).forEach(function (t) {
                                                                    return t.endAnimation();
                                                                })),
                                                            pt ||
                                                            (!I || Js || bo
                                                                ? i && i.totalProgress(M, !(!Js || (!Mt && !t)))
                                                                : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start),
                                                                    I.resetTo ? I.resetTo("totalProgress", M, i._tTime / i._tDur) : ((I.vars.totalProgress = M), I.invalidate().restart()))),
                                                            Q)
                                                    )
                                                        if ((t && tt && (w.style[tt + dt.os2] = $), vt)) {
                                                            if (p) {
                                                                if (((m = !t && M > L && h + 1 > b && b + 1 >= qo(ft, dt)), at))
                                                                    if (t || (!s && !m)) Za(Q, w);
                                                                    else {
                                                                        var z = ha(Q, !0),
                                                                            R = b - l;
                                                                        Za(Q, Ys, z.top + (dt === Cs ? R : 0) + oa, z.left + (dt === Cs ? 0 : R) + oa);
                                                                    }
                                                                Va(s || m ? _ : y), (C && M < 1 && s) || T(S + (1 !== M || m ? 0 : E));
                                                            }
                                                        } else T(Po(S + E * M));
                                                    ot && !r.tween && !Js && !bo && D.restart(!0),
                                                        V &&
                                                        (f || (st && M && (M < 1 || !go))) &&
                                                        Us(V.targets).forEach(function (t) {
                                                            return t.classList[s || st ? "add" : "remove"](V.className);
                                                        }),
                                                        U && !pt && !t && U(xt),
                                                        p && !Js
                                                            ? (pt && (v && ("complete" === u ? i.pause().totalProgress(1) : "reset" === u ? i.restart(!0).pause() : "restart" === u ? i.restart(!0) : i[u]()), U && U(xt)),
                                                                (!f && go) || (G && f && Ho(xt, G), _t[c] && Ho(xt, _t[c]), st && (1 === M ? xt.kill(!1, 1) : (_t[c] = 0)), f || (_t[(c = 1 === M ? 1 : 3)] && Ho(xt, _t[c]))),
                                                                ct && !s && Math.abs(xt.getVelocity()) > (Wo(ct) ? ct : 2500) && (Xo(xt.callbackAnimation), I ? I.progress(1) : Xo(i, "reverse" === u ? 1 : !M, 1)))
                                                            : pt && U && !Js && U(xt);
                                                }
                                                if (A) {
                                                    var F = ht ? (b / ht.duration()) * (ht._caScrollDist || 0) : b;
                                                    k(F + (d._isFlipped ? 1 : 0)), A(F);
                                                }
                                                N && N((-b / ht.duration()) * (ht._caScrollDist || 0));
                                            }
                                        }),
                                        (xt.enable = function (e, i) {
                                            xt.enabled ||
                                                ((xt.enabled = !0), fa(ft, "resize", ka), gt || fa(ft, "scroll", $a), Tt && fa(t, "refreshInit", Tt), !1 !== e && ((xt.progress = kt = 0), (o = a = $t = Ct())), !1 !== i && xt.refresh());
                                        }),
                                        (xt.getTween = function (t) {
                                            return t && r ? r.tween : I;
                                        }),
                                        (xt.setPositions = function (t, e, i, r) {
                                            if (ht) {
                                                var n = ht.scrollTrigger,
                                                    s = ht.duration(),
                                                    o = n.end - n.start;
                                                (t = n.start + (o * t) / s), (e = n.start + (o * e) / s);
                                            }
                                            xt.refresh(!1, !1, { start: Mo(t, i && !!xt._startClamp), end: Mo(e, i && !!xt._endClamp) }, r), xt.update();
                                        }),
                                        (xt.adjustPinSpacing = function (t) {
                                            if (M && t) {
                                                var e = M.indexOf(dt.d) + 1;
                                                (M[e] = parseFloat(M[e]) + t + oa), (M[1] = parseFloat(M[1]) + t + oa), Va(M);
                                            }
                                        }),
                                        (xt.disable = function (e, i) {
                                            if (
                                                xt.enabled &&
                                                (!1 !== e && xt.revert(!0, !0),
                                                    (xt.enabled = xt.isActive = !1),
                                                    i || (I && I.pause()),
                                                    (q = 0),
                                                    n && (n.uncache = 1),
                                                    Tt && ma(t, "refreshInit", Tt),
                                                    D && (D.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
                                                    !gt)
                                            ) {
                                                for (var s = Ta.length; s--;) if (Ta[s].scroller === ft && Ta[s] !== xt) return;
                                                ma(ft, "resize", ka), gt || ma(ft, "scroll", $a);
                                            }
                                        }),
                                        (xt.kill = function (t, r) {
                                            xt.disable(t, r), I && !r && I.kill(), j && delete Sa[j];
                                            var s = Ta.indexOf(xt);
                                            s >= 0 && Ta.splice(s, 1),
                                                s === Qs && Ba > 0 && Qs--,
                                                (s = 0),
                                                Ta.forEach(function (t) {
                                                    return t.scroller === xt.scroller && (s = 1);
                                                }),
                                                s || _o || (xt.scroll.rec = 0),
                                                i && ((i.scrollTrigger = null), t && i.revert({ kill: !1 }), r || i.kill()),
                                                c &&
                                                [c, u, d, p].forEach(function (t) {
                                                    return t.parentNode && t.parentNode.removeChild(t);
                                                }),
                                                wo === xt && (wo = 0),
                                                Q &&
                                                (n && (n.uncache = 1),
                                                    (s = 0),
                                                    Ta.forEach(function (t) {
                                                        return t.pin === Q && s++;
                                                    }),
                                                    s || (n.spacer = 0)),
                                                e.onKill && e.onKill(xt);
                                        }),
                                        Ta.push(xt),
                                        xt.enable(!1, !1),
                                        B && B(xt),
                                        i && i.add && !g)
                                ) {
                                    var Ot = xt.update;
                                    (xt.update = function () {
                                        (xt.update = Ot), l || h || xt.refresh();
                                    }),
                                        qs.delayedCall(0.01, xt.update),
                                        (g = 0.01),
                                        (l = h = 0);
                                } else xt.refresh();
                                Q &&
                                    (function () {
                                        if (yo !== Da) {
                                            var t = (yo = Da);
                                            requestAnimationFrame(function () {
                                                return t === Da && Fa(!0);
                                            });
                                        }
                                    })();
                            } else this.update = this.refresh = this.kill = Lo;
                        }),
                        (t.register = function (e) {
                            return Fs || ((qs = e || Io()), Oo() && window.document && t.enable(), (Fs = Eo)), Fs;
                        }),
                        (t.defaults = function (t) {
                            if (t) for (var e in t) _a[e] = t[e];
                            return _a;
                        }),
                        (t.disable = function (t, e) {
                            (Eo = 0),
                                Ta.forEach(function (i) {
                                    return i[e ? "kill" : "disable"](t);
                                }),
                                ma(Ns, "wheel", $a),
                                ma(Bs, "scroll", $a),
                                clearInterval(Gs),
                                ma(Bs, "touchcancel", Lo),
                                ma(Ys, "touchstart", Lo),
                                pa(ma, Bs, "pointerdown,touchstart,mousedown", Co),
                                pa(ma, Bs, "pointerup,touchend,mouseup", Ao),
                                Hs.kill(),
                                Fo(ma);
                            for (var i = 0; i < gs.length; i += 3) ga(ma, gs[i], gs[i + 1]), ga(ma, gs[i], gs[i + 2]);
                        }),
                        (t.enable = function () {
                            if (
                                ((Ns = window),
                                    (Bs = document),
                                    (Ws = Bs.documentElement),
                                    (Ys = Bs.body),
                                    qs &&
                                    ((Us = qs.utils.toArray),
                                        (Vs = qs.utils.clamp),
                                        (uo = qs.core.context || Lo),
                                        (no = qs.core.suppressOverwrites || Lo),
                                        (po = Ns.history.scrollRestoration || "auto"),
                                        (Na = Ns.pageYOffset),
                                        qs.core.globals("ScrollTrigger", t),
                                        Ys))
                            ) {
                                (Eo = 1),
                                    ((fo = document.createElement("div")).style.height = "100vh"),
                                    (fo.style.position = "absolute"),
                                    qa(),
                                    ko(),
                                    Ds.register(qs),
                                    (t.isTouch = Ds.isTouch),
                                    (co = Ds.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                                    fa(Ns, "wheel", $a),
                                    (Xs = [Ns, Bs, Ws, Ys]),
                                    qs.matchMedia
                                        ? ((t.matchMedia = function (t) {
                                            var e,
                                                i = qs.matchMedia();
                                            for (e in t) i.add(e, t[e]);
                                            return i;
                                        }),
                                            qs.addEventListener("matchMediaInit", function () {
                                                return za();
                                            }),
                                            qs.addEventListener("matchMediaRevert", function () {
                                                return Ia();
                                            }),
                                            qs.addEventListener("matchMedia", function () {
                                                Fa(0, 1), Pa("matchMedia");
                                            }),
                                            qs.matchMedia("(orientation: portrait)", function () {
                                                return Ma(), Ma;
                                            }))
                                        : console.warn("Requires GSAP 3.11.0 or later"),
                                    Ma(),
                                    fa(Bs, "scroll", $a);
                                var e,
                                    i,
                                    r = Ys.style,
                                    n = r.borderTopStyle,
                                    s = qs.core.Animation.prototype;
                                for (
                                    s.revert ||
                                    Object.defineProperty(s, "revert", {
                                        value: function () {
                                            return this.time(-0.01, !0);
                                        },
                                    }),
                                    r.borderTopStyle = "solid",
                                    e = ha(Ys),
                                    Cs.m = Math.round(e.top + Cs.sc()) || 0,
                                    ks.m = Math.round(e.left + ks.sc()) || 0,
                                    n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
                                    Gs = setInterval(Ea, 250),
                                    qs.delayedCall(0.5, function () {
                                        return (bo = 0);
                                    }),
                                    fa(Bs, "touchcancel", Lo),
                                    fa(Ys, "touchstart", Lo),
                                    pa(fa, Bs, "pointerdown,touchstart,mousedown", Co),
                                    pa(fa, Bs, "pointerup,touchend,mouseup", Ao),
                                    Zs = qs.utils.checkPrefix("transform"),
                                    Xa.push(Zs),
                                    Fs = xo(),
                                    Hs = qs.delayedCall(0.2, Fa).pause(),
                                    io = [
                                        Bs,
                                        "visibilitychange",
                                        function () {
                                            var t = Ns.innerWidth,
                                                e = Ns.innerHeight;
                                            Bs.hidden ? ((to = t), (eo = e)) : (to === t && eo === e) || ka();
                                        },
                                        Bs,
                                        "DOMContentLoaded",
                                        Fa,
                                        Ns,
                                        "load",
                                        Fa,
                                        Ns,
                                        "resize",
                                        ka,
                                    ],
                                    Fo(fa),
                                    Ta.forEach(function (t) {
                                        return t.enable(0, 1);
                                    }),
                                    i = 0;
                                    i < gs.length;
                                    i += 3
                                )
                                    ga(ma, gs[i], gs[i + 1]), ga(ma, gs[i], gs[i + 2]);
                            }
                        }),
                        (t.config = function (e) {
                            "limitCallbacks" in e && (go = !!e.limitCallbacks);
                            var i = e.syncInterval;
                            (i && clearInterval(Gs)) || ((Gs = i) && setInterval(Ea, i)),
                                "ignoreMobileResize" in e && (ao = 1 === t.isTouch && e.ignoreMobileResize),
                                "autoRefreshEvents" in e && (Fo(ma) || Fo(fa, e.autoRefreshEvents || "none"), (so = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
                        }),
                        (t.scrollerProxy = function (t, e) {
                            var i = As(t),
                                r = gs.indexOf(i),
                                n = zo(i);
                            ~r && gs.splice(r, n ? 6 : 2), e && (n ? vs.unshift(Ns, e, Ys, e, Ws, e) : vs.unshift(i, e));
                        }),
                        (t.clearMatchMedia = function (t) {
                            Ta.forEach(function (e) {
                                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
                            });
                        }),
                        (t.isInViewport = function (t, e, i) {
                            var r = (No(t) ? As(t) : t).getBoundingClientRect(),
                                n = r[i ? Jo : Ko] * e || 0;
                            return i ? r.right - n > 0 && r.left + n < Ns.innerWidth : r.bottom - n > 0 && r.top + n < Ns.innerHeight;
                        }),
                        (t.positionInViewport = function (t, e, i) {
                            No(t) && (t = As(t));
                            var r = t.getBoundingClientRect(),
                                n = r[i ? Jo : Ko],
                                s = null == e ? n / 2 : e in ya ? ya[e] * n : ~e.indexOf("%") ? (parseFloat(e) * n) / 100 : parseFloat(e) || 0;
                            return i ? (r.left + s) / Ns.innerWidth : (r.top + s) / Ns.innerHeight;
                        }),
                        (t.killAll = function (t) {
                            if (
                                (Ta.slice(0).forEach(function (t) {
                                    return "ScrollSmoother" !== t.vars.id && t.kill();
                                }),
                                    !0 !== t)
                            ) {
                                var e = Ca.killAll || [];
                                (Ca = {}),
                                    e.forEach(function (t) {
                                        return t();
                                    });
                            }
                        }),
                        t
                    );
                })();
            (il.version = "3.12.2"),
                (il.saveStyles = function (t) {
                    return t
                        ? Us(t).forEach(function (t) {
                            if (t && t.style) {
                                var e = Oa.indexOf(t);
                                e >= 0 && Oa.splice(e, 5), Oa.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), qs.core.getCache(t), uo());
                            }
                        })
                        : Oa;
                }),
                (il.revert = function (t, e) {
                    return za(!t, e);
                }),
                (il.create = function (t, e) {
                    return new il(t, e);
                }),
                (il.refresh = function (t) {
                    return t ? ka() : (Fs || il.register()) && Fa(!0);
                }),
                (il.update = function (t) {
                    return ++gs.cache && Wa(!0 === t ? 2 : 0);
                }),
                (il.clearScrollMemory = Ra),
                (il.maxScroll = function (t, e) {
                    return qo(t, e ? ks : Cs);
                }),
                (il.getScrollFunc = function (t, e) {
                    return Ls(As(t), e ? ks : Cs);
                }),
                (il.getById = function (t) {
                    return Sa[t];
                }),
                (il.getAll = function () {
                    return Ta.filter(function (t) {
                        return "ScrollSmoother" !== t.vars.id;
                    });
                }),
                (il.isScrolling = function () {
                    return !!So;
                }),
                (il.snapDirectional = da),
                (il.addEventListener = function (t, e) {
                    var i = Ca[t] || (Ca[t] = []);
                    ~i.indexOf(e) || i.push(e);
                }),
                (il.removeEventListener = function (t, e) {
                    var i = Ca[t],
                        r = i && i.indexOf(e);
                    r >= 0 && i.splice(r, 1);
                }),
                (il.batch = function (t, e) {
                    var i,
                        r = [],
                        n = {},
                        s = e.interval || 0.016,
                        o = e.batchMax || 1e9,
                        a = function (t, e) {
                            var i = [],
                                r = [],
                                n = qs
                                    .delayedCall(s, function () {
                                        e(i, r), (i = []), (r = []);
                                    })
                                    .pause();
                            return function (t) {
                                i.length || n.restart(!0), i.push(t.trigger), r.push(t), o <= i.length && n.progress(1);
                            };
                        };
                    for (i in e) n[i] = "on" === i.substr(0, 2) && Bo(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
                    return (
                        Bo(o) &&
                        ((o = o()),
                            fa(il, "refresh", function () {
                                return (o = e.batchMax());
                            })),
                        Us(t).forEach(function (t) {
                            var e = {};
                            for (i in n) e[i] = n[i];
                            (e.trigger = t), r.push(il.create(e));
                        }),
                        r
                    );
                });
            var rl,
                nl = function (t, e, i, r) {
                    return e > r ? t(r) : e < 0 && t(0), i > r ? (r - e) / (i - e) : i < 0 ? e / (e - i) : 1;
                },
                sl = function t(e, i) {
                    !0 === i ? e.style.removeProperty("touch-action") : (e.style.touchAction = !0 === i ? "auto" : i ? "pan-" + i + (Ds.isTouch ? " pinch-zoom" : "") : "none"), e === Ws && t(Ys, i);
                },
                ol = { auto: 1, scroll: 1 },
                al = function (t) {
                    var e,
                        i = t.event,
                        r = t.target,
                        n = t.axis,
                        s = (i.changedTouches ? i.changedTouches[0] : i).target,
                        o = s._gsap || qs.core.getCache(s),
                        a = xo();
                    if (!o._isScrollT || a - o._isScrollT > 2e3) {
                        for (; s && s !== Ys && ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) || (!ol[(e = aa(s)).overflowY] && !ol[e.overflowX]));) s = s.parentNode;
                        (o._isScroll = s && s !== r && !zo(s) && (ol[(e = aa(s)).overflowY] || ol[e.overflowX])), (o._isScrollT = a);
                    }
                    (o._isScroll || "x" === n) && (i.stopPropagation(), (i._gsapAllow = !0));
                },
                ll = function (t, e, i, r) {
                    return Ds.create({
                        target: t,
                        capture: !0,
                        debounce: !1,
                        lockAxis: !0,
                        type: e,
                        onWheel: (r = r && al),
                        onPress: r,
                        onDrag: r,
                        onScroll: r,
                        onEnable: function () {
                            return i && fa(Bs, Ds.eventTypes[0], cl, !1, !0);
                        },
                        onDisable: function () {
                            return ma(Bs, Ds.eventTypes[0], cl, !0);
                        },
                    });
                },
                hl = /(input|label|select|textarea)/i,
                cl = function (t) {
                    var e = hl.test(t.target.tagName);
                    (e || rl) && ((t._gsapAllow = !0), (rl = e));
                },
                ul = function (t) {
                    Yo(t) || (t = {}), (t.preventDefault = t.isNormalizer = t.allowClicks = !0), t.type || (t.type = "wheel,touch"), (t.debounce = !!t.debounce), (t.id = t.id || "normalizer");
                    var e,
                        i,
                        r,
                        n,
                        s,
                        o,
                        a,
                        l,
                        h = t,
                        c = h.normalizeScrollX,
                        u = h.momentum,
                        d = h.allowNestedScroll,
                        p = h.onRelease,
                        f = As(t.target) || Ws,
                        m = qs.core.globals().ScrollSmoother,
                        g = m && m.get(),
                        v = co && ((t.content && As(t.content)) || (g && !1 !== t.content && !g.smooth() && g.content())),
                        _ = Ls(f, Cs),
                        y = Ls(f, ks),
                        w = 1,
                        b = (Ds.isTouch && Ns.visualViewport ? Ns.visualViewport.scale * Ns.visualViewport.width : Ns.outerWidth) / Ns.innerWidth,
                        x = 0,
                        T = Bo(u)
                            ? function () {
                                return u(e);
                            }
                            : function () {
                                return u || 2.8;
                            },
                        S = ll(f, t.type, !0, d),
                        E = function () {
                            return (n = !1);
                        },
                        $ = Lo,
                        M = Lo,
                        k = function () {
                            (i = qo(f, Cs)), (M = Vs(co ? 1 : 0, i)), c && ($ = Vs(0, qo(f, ks))), (r = Da);
                        },
                        C = function () {
                            (v._gsap.y = Po(parseFloat(v._gsap.y) + _.offset) + "px"), (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)"), (_.offset = _.cacheID = 0);
                        },
                        A = function () {
                            k(), s.isActive() && s.vars.scrollY > i && (_() > i ? s.progress(1) && _(i) : s.resetTo("scrollY", i));
                        };
                    return (
                        v && qs.set(v, { y: "+=0" }),
                        (t.ignoreCheck = function (t) {
                            return (
                                (co &&
                                    "touchmove" === t.type &&
                                    (function () {
                                        if (n) {
                                            requestAnimationFrame(E);
                                            var t = Po(e.deltaY / 2),
                                                i = M(_.v - t);
                                            if (v && i !== _.v + _.offset) {
                                                _.offset = i - _.v;
                                                var r = Po((parseFloat(v && v._gsap.y) || 0) - _.offset);
                                                (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)"), (v._gsap.y = r + "px"), (_.cacheID = gs.cache), Wa();
                                            }
                                            return !0;
                                        }
                                        _.offset && C(), (n = !0);
                                    })()) ||
                                (w > 1.05 && "touchstart" !== t.type) ||
                                e.isGesturing ||
                                (t.touches && t.touches.length > 1)
                            );
                        }),
                        (t.onPress = function () {
                            n = !1;
                            var t = w;
                            (w = Po(((Ns.visualViewport && Ns.visualViewport.scale) || 1) / b)), s.pause(), t !== w && sl(f, w > 1.01 || (!c && "x")), (o = y()), (a = _()), k(), (r = Da);
                        }),
                        (t.onRelease = t.onGestureStart = function (t, e) {
                            if ((_.offset && C(), e)) {
                                gs.cache++;
                                var r,
                                    n,
                                    o = T();
                                c && ((n = (r = y()) + (0.05 * o * -t.velocityX) / 0.227), (o *= nl(y, r, n, qo(f, ks))), (s.vars.scrollX = $(n))),
                                    (n = (r = _()) + (0.05 * o * -t.velocityY) / 0.227),
                                    (o *= nl(_, r, n, qo(f, Cs))),
                                    (s.vars.scrollY = M(n)),
                                    s.invalidate().duration(o).play(0.01),
                                    ((co && s.vars.scrollY >= i) || r >= i - 1) && qs.to({}, { onUpdate: A, duration: o });
                            } else l.restart(!0);
                            p && p(t);
                        }),
                        (t.onWheel = function () {
                            s._ts && s.pause(), xo() - x > 1e3 && ((r = 0), (x = xo()));
                        }),
                        (t.onChange = function (t, e, i, n, s) {
                            if ((Da !== r && k(), e && c && y($(n[2] === e ? o + (t.startX - t.x) : y() + e - n[1])), i)) {
                                _.offset && C();
                                var l = s[2] === i,
                                    h = l ? a + t.startY - t.y : _() + i - s[1],
                                    u = M(h);
                                l && h !== u && (a += u - h), _(u);
                            }
                            (i || e) && Wa();
                        }),
                        (t.onEnable = function () {
                            sl(f, !c && "x"), il.addEventListener("refresh", A), fa(Ns, "resize", A), _.smooth && ((_.target.style.scrollBehavior = "auto"), (_.smooth = y.smooth = !1)), S.enable();
                        }),
                        (t.onDisable = function () {
                            sl(f, !0), ma(Ns, "resize", A), il.removeEventListener("refresh", A), S.kill();
                        }),
                        (t.lockAxis = !1 !== t.lockAxis),
                        ((e = new Ds(t)).iOS = co),
                        co && !_() && _(1),
                        co && qs.ticker.add(Lo),
                        (l = e._dc),
                        (s = qs.to(e, {
                            ease: "power4",
                            paused: !0,
                            scrollX: c ? "+=0.1" : "+=0",
                            scrollY: "+=0.1",
                            modifiers: {
                                scrollY: Qa(_, _(), function () {
                                    return s.pause();
                                }),
                            },
                            onUpdate: Wa,
                            onComplete: l.vars.onComplete,
                        })),
                        e
                    );
                };
            function dl(t, e, i) {
                return Math.max(t, Math.min(e, i));
            }
            (il.sort = function (t) {
                return Ta.sort(
                    t ||
                    function (t, e) {
                        return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0));
                    }
                );
            }),
                (il.observe = function (t) {
                    return new Ds(t);
                }),
                (il.normalizeScroll = function (t) {
                    if (void 0 === t) return oo;
                    if (!0 === t && oo) return oo.enable();
                    if (!1 === t) return oo && oo.kill();
                    var e = t instanceof Ds ? t : ul(t);
                    return oo && oo.target === e.target && oo.kill(), zo(e.target) && (oo = e), e;
                }),
                (il.core = {
                    _getVelocityProp: Ps,
                    _inputObserver: ll,
                    _scrollers: gs,
                    _proxies: vs,
                    bridge: {
                        ss: function () {
                            So || Pa("scrollStart"), (So = xo());
                        },
                        ref: function () {
                            return Js;
                        },
                    },
                }),
                Io() && qs.registerPlugin(il);
            class pl {
                advance(t) {
                    if (!this.isRunning) return;
                    let e = !1;
                    if (this.lerp)
                        (this.value =
                            ((i = this.value),
                                (r = this.to),
                                (n = 60 * this.lerp),
                                (s = t),
                                (function (t, e, i) {
                                    return (1 - i) * t + i * e;
                                })(i, r, 1 - Math.exp(-n * s)))),
                            Math.round(this.value) === this.to && ((this.value = this.to), (e = !0));
                    else {
                        this.currentTime += t;
                        const i = dl(0, this.currentTime / this.duration, 1);
                        e = i >= 1;
                        const r = e ? 1 : this.easing(i);
                        this.value = this.from + (this.to - this.from) * r;
                    }
                    var i, r, n, s;
                    this.onUpdate?.(this.value, e), e && this.stop();
                }
                stop() {
                    this.isRunning = !1;
                }
                fromTo(t, e, { lerp: i = 0.1, duration: r = 1, easing: n = (t) => t, onStart: s, onUpdate: o }) {
                    (this.from = this.value = t), (this.to = e), (this.lerp = i), (this.duration = r), (this.easing = n), (this.currentTime = 0), (this.isRunning = !0), s?.(), (this.onUpdate = o);
                }
            }
            class fl {
                constructor({ wrapper: t, content: e, autoResize: i = !0, debounce: r = 250 } = {}) {
                    (this.wrapper = t),
                        (this.content = e),
                        i &&
                        ((this.debouncedResize = (function (t, e) {
                            let i;
                            return function () {
                                let r = arguments,
                                    n = this;
                                clearTimeout(i),
                                    (i = setTimeout(function () {
                                        t.apply(n, r);
                                    }, e));
                            };
                        })(this.resize, r)),
                            this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)), this.wrapperResizeObserver.observe(this.wrapper)),
                            (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
                            this.contentResizeObserver.observe(this.content)),
                        this.resize();
                }
                destroy() {
                    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
                }
                resize = () => {
                    this.onWrapperResize(), this.onContentResize();
                };
                onWrapperResize = () => {
                    this.wrapper === window ? ((this.width = window.innerWidth), (this.height = window.innerHeight)) : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
                };
                onContentResize = () => {
                    this.wrapper === window
                        ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
                        : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
                };
                get limit() {
                    return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
                }
            }
            class ml {
                constructor() {
                    this.events = {};
                }
                emit(t, ...e) {
                    let i = this.events[t] || [];
                    for (let t = 0, r = i.length; t < r; t++) i[t](...e);
                }
                on(t, e) {
                    return (
                        this.events[t]?.push(e) || (this.events[t] = [e]),
                        () => {
                            this.events[t] = this.events[t]?.filter((t) => e !== t);
                        }
                    );
                }
                off(t, e) {
                    this.events[t] = this.events[t]?.filter((t) => e !== t);
                }
                destroy() {
                    this.events = {};
                }
            }
            const gl = 100 / 6;
            class vl {
                constructor(t, { wheelMultiplier: e = 1, touchMultiplier: i = 1 }) {
                    (this.element = t),
                        (this.wheelMultiplier = e),
                        (this.touchMultiplier = i),
                        (this.touchStart = { x: null, y: null }),
                        (this.emitter = new ml()),
                        window.addEventListener("resize", this.onWindowResize, !1),
                        this.onWindowResize(),
                        this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
                        this.element.addEventListener("touchstart", this.onTouchStart, { passive: !1 }),
                        this.element.addEventListener("touchmove", this.onTouchMove, { passive: !1 }),
                        this.element.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
                }
                on(t, e) {
                    return this.emitter.on(t, e);
                }
                destroy() {
                    this.emitter.destroy(),
                        window.removeEventListener("resize", this.onWindowResize, !1),
                        this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
                        this.element.removeEventListener("touchstart", this.onTouchStart, { passive: !1 }),
                        this.element.removeEventListener("touchmove", this.onTouchMove, { passive: !1 }),
                        this.element.removeEventListener("touchend", this.onTouchEnd, { passive: !1 });
                }
                onTouchStart = (t) => {
                    const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t;
                    (this.touchStart.x = e), (this.touchStart.y = i), (this.lastDelta = { x: 0, y: 0 }), this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
                };
                onTouchMove = (t) => {
                    const { clientX: e, clientY: i } = t.targetTouches ? t.targetTouches[0] : t,
                        r = -(e - this.touchStart.x) * this.touchMultiplier,
                        n = -(i - this.touchStart.y) * this.touchMultiplier;
                    (this.touchStart.x = e), (this.touchStart.y = i), (this.lastDelta = { x: r, y: n }), this.emitter.emit("scroll", { deltaX: r, deltaY: n, event: t });
                };
                onTouchEnd = (t) => {
                    this.emitter.emit("scroll", { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: t });
                };
                onWheel = (t) => {
                    let { deltaX: e, deltaY: i, deltaMode: r } = t;
                    (e *= 1 === r ? gl : 2 === r ? this.windowWidth : 1),
                        (i *= 1 === r ? gl : 2 === r ? this.windowHeight : 1),
                        (e *= this.wheelMultiplier),
                        (i *= this.wheelMultiplier),
                        this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
                };
                onWindowResize = () => {
                    (this.windowWidth = window.innerWidth), (this.windowHeight = window.innerHeight);
                };
            }
            class _l {
                constructor({
                    wrapper: t = window,
                    content: e = document.documentElement,
                    wheelEventsTarget: i = t,
                    eventsTarget: r = i,
                    smoothWheel: n = !0,
                    syncTouch: s = !1,
                    syncTouchLerp: o = 0.075,
                    touchInertiaMultiplier: a = 35,
                    duration: l,
                    easing: h = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    lerp: c = !l && 0.1,
                    infinite: u = !1,
                    orientation: d = "vertical",
                    gestureOrientation: p = "vertical",
                    touchMultiplier: f = 1,
                    wheelMultiplier: m = 1,
                    autoResize: g = !0,
                    __experimental__naiveDimensions: v = !1,
                } = {}) {
                    (this.__isSmooth = !1),
                        (this.__isScrolling = !1),
                        (this.__isStopped = !1),
                        (this.__isLocked = !1),
                        (this.onVirtualScroll = ({ deltaX: t, deltaY: e, event: i }) => {
                            if (i.ctrlKey) return;
                            const r = i.type.includes("touch"),
                                n = i.type.includes("wheel");
                            if (this.options.syncTouch && r && "touchstart" === i.type && !this.isStopped && !this.isLocked) return void this.reset();
                            const s = 0 === t && 0 === e,
                                o = ("vertical" === this.options.gestureOrientation && 0 === e) || ("horizontal" === this.options.gestureOrientation && 0 === t);
                            if (s || o) return;
                            let a = i.composedPath();
                            if (
                                ((a = a.slice(0, a.indexOf(this.rootElement))),
                                    a.find((t) => {
                                        var e, i, s, o, a;
                                        return (
                                            (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) ||
                                            (r && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch"))) ||
                                            (n && (null === (s = t.hasAttribute) || void 0 === s ? void 0 : s.call(t, "data-lenis-prevent-wheel"))) ||
                                            ((null === (o = t.classList) || void 0 === o ? void 0 : o.contains("lenis")) && !(null === (a = t.classList) || void 0 === a ? void 0 : a.contains("lenis-stopped")))
                                        );
                                    }))
                            )
                                return;
                            if (this.isStopped || this.isLocked) return void i.preventDefault();
                            if (((this.isSmooth = (this.options.syncTouch && r) || (this.options.smoothWheel && n)), !this.isSmooth)) return (this.isScrolling = !1), void this.animate.stop();
                            i.preventDefault();
                            let l = e;
                            "both" === this.options.gestureOrientation ? (l = Math.abs(e) > Math.abs(t) ? e : t) : "horizontal" === this.options.gestureOrientation && (l = t);
                            const h = r && this.options.syncTouch,
                                c = r && "touchend" === i.type && Math.abs(l) > 5;
                            c && (l = this.velocity * this.options.touchInertiaMultiplier),
                                this.scrollTo(
                                    this.targetScroll + l,
                                    Object.assign({ programmatic: !1 }, h ? { lerp: c ? this.options.syncTouchLerp : 1 } : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing })
                                );
                        }),
                        (this.onNativeScroll = () => {
                            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                                const t = this.animatedScroll;
                                (this.animatedScroll = this.targetScroll = this.actualScroll), (this.velocity = 0), (this.direction = Math.sign(this.animatedScroll - t)), this.emit();
                            }
                        }),
                        (window.lenisVersion = "1.0.42"),
                        (t !== document.documentElement && t !== document.body) || (t = window),
                        (this.options = {
                            wrapper: t,
                            content: e,
                            wheelEventsTarget: i,
                            eventsTarget: r,
                            smoothWheel: n,
                            syncTouch: s,
                            syncTouchLerp: o,
                            touchInertiaMultiplier: a,
                            duration: l,
                            easing: h,
                            lerp: c,
                            infinite: u,
                            gestureOrientation: p,
                            orientation: d,
                            touchMultiplier: f,
                            wheelMultiplier: m,
                            autoResize: g,
                            __experimental__naiveDimensions: v,
                        }),
                        (this.animate = new pl()),
                        (this.emitter = new ml()),
                        (this.dimensions = new fl({ wrapper: t, content: e, autoResize: g })),
                        this.toggleClassName("lenis", !0),
                        (this.velocity = 0),
                        (this.isLocked = !1),
                        (this.isStopped = !1),
                        (this.isSmooth = s || n),
                        (this.isScrolling = !1),
                        (this.targetScroll = this.animatedScroll = this.actualScroll),
                        this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
                        (this.virtualScroll = new vl(r, { touchMultiplier: f, wheelMultiplier: m })),
                        this.virtualScroll.on("scroll", this.onVirtualScroll);
                }
                destroy() {
                    this.emitter.destroy(),
                        this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1),
                        this.virtualScroll.destroy(),
                        this.dimensions.destroy(),
                        this.toggleClassName("lenis", !1),
                        this.toggleClassName("lenis-smooth", !1),
                        this.toggleClassName("lenis-scrolling", !1),
                        this.toggleClassName("lenis-stopped", !1),
                        this.toggleClassName("lenis-locked", !1);
                }
                on(t, e) {
                    return this.emitter.on(t, e);
                }
                off(t, e) {
                    return this.emitter.off(t, e);
                }
                setScroll(t) {
                    this.isHorizontal ? (this.rootElement.scrollLeft = t) : (this.rootElement.scrollTop = t);
                }
                resize() {
                    this.dimensions.resize();
                }
                emit() {
                    this.emitter.emit("scroll", this);
                }
                reset() {
                    (this.isLocked = !1), (this.isScrolling = !1), (this.animatedScroll = this.targetScroll = this.actualScroll), (this.velocity = 0), this.animate.stop();
                }
                start() {
                    this.isStopped && ((this.isStopped = !1), this.reset());
                }
                stop() {
                    this.isStopped || ((this.isStopped = !0), this.animate.stop(), this.reset());
                }
                raf(t) {
                    const e = t - (this.time || t);
                    (this.time = t), this.animate.advance(0.001 * e);
                }
                scrollTo(
                    t,
                    { offset: e = 0, immediate: i = !1, lock: r = !1, duration: n = this.options.duration, easing: s = this.options.easing, lerp: o = !n && this.options.lerp, onComplete: a, force: l = !1, programmatic: h = !0 } = {}
                ) {
                    if ((!this.isStopped && !this.isLocked) || l) {
                        if (["top", "left", "start"].includes(t)) t = 0;
                        else if (["bottom", "right", "end"].includes(t)) t = this.limit;
                        else {
                            let i;
                            if (("string" == typeof t ? (i = document.querySelector(t)) : (null == t ? void 0 : t.nodeType) && (i = t), i)) {
                                if (this.options.wrapper !== window) {
                                    const t = this.options.wrapper.getBoundingClientRect();
                                    e -= this.isHorizontal ? t.left : t.top;
                                }
                                const r = i.getBoundingClientRect();
                                t = (this.isHorizontal ? r.left : r.top) + this.animatedScroll;
                            }
                        }
                        if ("number" == typeof t) {
                            if (((t += e), (t = Math.round(t)), this.options.infinite ? h && (this.targetScroll = this.animatedScroll = this.scroll) : (t = dl(0, t, this.limit)), i))
                                return (this.animatedScroll = this.targetScroll = t), this.setScroll(this.scroll), this.reset(), void (null == a || a(this));
                            if (!h) {
                                if (t === this.targetScroll) return;
                                this.targetScroll = t;
                            }
                            this.animate.fromTo(this.animatedScroll, t, {
                                duration: n,
                                easing: s,
                                lerp: o,
                                onStart: () => {
                                    r && (this.isLocked = !0), (this.isScrolling = !0);
                                },
                                onUpdate: (t, e) => {
                                    (this.isScrolling = !0),
                                        (this.velocity = t - this.animatedScroll),
                                        (this.direction = Math.sign(this.velocity)),
                                        (this.animatedScroll = t),
                                        this.setScroll(this.scroll),
                                        h && (this.targetScroll = t),
                                        e || this.emit(),
                                        e &&
                                        (this.reset(),
                                            this.emit(),
                                            null == a || a(this),
                                            (this.__preventNextScrollEvent = !0),
                                            requestAnimationFrame(() => {
                                                delete this.__preventNextScrollEvent;
                                            }));
                                },
                            });
                        }
                    }
                }
                get rootElement() {
                    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
                }
                get limit() {
                    return this.options.__experimental__naiveDimensions
                        ? this.isHorizontal
                            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                            : this.rootElement.scrollHeight - this.rootElement.clientHeight
                        : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
                }
                get isHorizontal() {
                    return "horizontal" === this.options.orientation;
                }
                get actualScroll() {
                    return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
                }
                get scroll() {
                    return this.options.infinite ? ((this.animatedScroll % (t = this.limit)) + t) % t : this.animatedScroll;
                    var t;
                }
                get progress() {
                    return 0 === this.limit ? 1 : this.scroll / this.limit;
                }
                get isSmooth() {
                    return this.__isSmooth;
                }
                set isSmooth(t) {
                    this.__isSmooth !== t && ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
                }
                get isScrolling() {
                    return this.__isScrolling;
                }
                set isScrolling(t) {
                    this.__isScrolling !== t && ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
                }
                get isStopped() {
                    return this.__isStopped;
                }
                set isStopped(t) {
                    this.__isStopped !== t && ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
                }
                get isLocked() {
                    return this.__isLocked;
                }
                set isLocked(t) {
                    this.__isLocked !== t && ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
                }
                get className() {
                    let t = "lenis";
                    return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
                }
                toggleClassName(t, e) {
                    this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
                }
            }
            var yl = i("../node_modules/splitting/dist/splitting.js"),
                wl = i.n(yl);
            class bl {
                constructor() {
                    (this.menuOpen = !1), this.bindMethods(), this.getElems(), this.addEvents(), An.set(this.$menu, { xPercent: -120, yPercent: -80, rotateX: 10 });
                }
                bindMethods() {
                    (this.toggle = this.toggle.bind(this)), (this.close = this.close.bind(this)), (this.onKey = this.onKey.bind(this));
                }
                getElems() {
                    (this.$header = document.querySelector(".header")),
                        (this.$menu = this.$header.querySelector(".menu")),
                        (this.$toggler = document.body.querySelector(".header-toggler")),
                        (this.$overlay = document.body.querySelector(".header-overlay"));
                }
                addEvents() {
                    this.$toggler && this.$toggler.addEventListener("click", this.toggle), this.$overlay && this.$overlay.addEventListener("click", this.close), window.addEventListener("keydown", this.onKey);
                }
                toggle() {
                    this.menuOpen ? this.close() : this.open();
                }
                onKey(t) {
                    "Escape" === t.key && this.close();
                }
                open() {
                    return new Promise((t) => {
                        (this.menuOpen = !0),
                            this.$overlay.classList.remove("pointer-events-none"),
                            this.$menu.classList.add("pointer-events-auto"),
                            this.$toggler.classList.add("a"),
                            q.smoothScroll.stop(),
                            q.cancelAnimation(this.closeTL),
                            (this.openTL = An.timeline()),
                            this.openTL
                                .to(this.$overlay, { opacity: 0.5, ease: "alpha", duration: 0.3 }, 0)
                                .fromTo(this.$menu, { rotateX: 20, rotateY: -30 }, { xPercent: 0, yPercent: 0, rotateX: 0, rotateY: 0, ease: "expo.out", duration: 0.8 }, 0),
                            t();
                    });
                }
                close() {
                    return new Promise((t) => {
                        this.menuOpen &&
                            ((this.menuOpen = !1),
                                this.$overlay.classList.add("pointer-events-none"),
                                this.$menu.classList.remove("pointer-events-auto"),
                                this.$toggler.classList.remove("a"),
                                q.smoothScroll.start(),
                                q.cancelAnimation(this.openTL),
                                (this.closeTL = An.timeline()),
                                this.closeTL.to(this.$overlay, { opacity: 0, ease: "alpha", duration: 0.3 }, 0).to(this.$menu, { xPercent: -120, yPercent: -80, rotateX: 10, ease: "expo.out", duration: 0.6 }, 0)),
                            t();
                    });
                }
                resize() { }
                scroll() { }
                onPageChange() {
                    this.menuOpen && this.close();
                }
            }
            class xl {
                constructor() {
                    this.getElems(), this.init(), this.onPageChange({ finalUrl: window.location.href });
                }
                getElems() {
                    (this.$el = document.body.querySelector("header")), (this.$items = this.$el.querySelectorAll(".header-link")), (this.$logo = this.$el.querySelector(".header-logo"));
                }
                init() {
                    q.scrollTrigger.create({
                        trigger: this.$el,
                        start: "top top",
                        end: () => 0.5 * q.w.h + " top",
                        onLeave: () => {
                            this.$logo.classList.add("opacity-0");
                        },
                        onEnterBack: () => {
                            this.$logo.classList.remove("opacity-0");
                        },
                    });
                }
                onPageChange(t) {
                    (this.isLight = "light" === q.currentRenderer.content.dataset.mode),
                        this.$el.classList.toggle("light", this.isLight),
                        this.activeIndex > -1 && this.$items[this.activeIndex].classList.remove("active"),
                        (this.activeIndex = -1);
                    for (let e = 0; e < this.$items.length; e++) this.$items[e].href === t.finalUrl && (this.activeIndex = e);
                    this.activeIndex > -1 && this.$items[this.activeIndex].classList.add("active");
                }
            }
            class Tl {
                constructor() {
                    this.getElems(), q.smoothScroll && q.smoothScroll.scrollTo(0, { immediate: !0, force: !0 }), this.hide();
                }
                getElems() {
                    (this.$el = document.querySelector(".loader")),
                        (this.$restaurant = document.querySelector(".single-restaurant")),
                        (this.$paths = document.querySelectorAll(".pattern-block-green")),
                        (this.$mobilePaths = document.querySelectorAll(".pattern-block-green-m")),
                        (this.paths = q.w.w < 768 ? this.$mobilePaths : this.$paths),
                        An.set(this.paths, { autoAlpha: 0 });
                }
                hide() {
                    const t = An.timeline({ delay: q.w.w < 768 ? 0.4 : 0 });
                    t.to(this.paths, { autoAlpha: 1, ease: "beaucoup.alpha", duration: 0.4, stagger: -0.018 }, 0),
                        this.$restaurant && !q.detect.isMobile
                            ? ((this.$imageInner = this.$restaurant.querySelector(".cover-restaurant-inner")),
                                (this.$imageWrapper = this.$restaurant.querySelector(".cover-restaurant-wrapper")),
                                (this.$logo = document.querySelector(".header-logo")),
                                An.set(this.$imageInner, { autoAlpha: 0 }),
                                An.set(this.$logo, { autoAlpha: 0 }),
                                t
                                    .add(() => this.animateImages(), "<90%")
                                    .to(this.$el, { autoAlpha: 0, ease: "beaucoup.alpha", duration: 0 }, 2)
                                    .to(this.$logo, { autoAlpha: 1, ease: "beaucoup.alpha", duration: 0.4 }, 4))
                            : t.to(this.$el, { autoAlpha: 0, ease: "beaucoup.alpha", duration: 0.4 }, "<90%").call(
                                () => {
                                    window.dispatchEvent(new CustomEvent("loaderComplete")), (q.isFirstLoaded = !0);
                                },
                                [],
                                "<10%"
                            );
                }
                animateImages() {
                    const t = Array.from(document.querySelectorAll(".transition-image")),
                        e = An.timeline({
                            onStart: () => {
                                An.set(t, { autoAlpha: 1, y: 2 * -q.w.h }),
                                    this.$imageInner && this.$imageWrapper && (An.set(this.$imageInner, { clipPath: "polygon(30% 15%, 70% 15%, 70% 85%, 30% 85%)" }), An.set(this.$imageWrapper, { scale: 1.2 }));
                            },
                            onComplete: () => {
                                q.smoothScroll && q.smoothScroll.start(), An.set(t, { autoAlpha: 0 });
                            },
                        }),
                        i = 1.5;
                    return (
                        e
                            .fromTo(t[0], { rotateX: 8, rotateY: -8 }, { y: 1.6 * q.w.h, rotateX: -8, rotateY: 8, ease: "beaucoup.momentum", duration: i }, 0)
                            .to(t[1], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", ease: "beaucoup.momentum", duration: i }, 0)
                            .to(t[2], { y: 1.9 * q.w.h, rotate: "random(-20, 20)", ease: "beaucoup.momentum", duration: i }, 0)
                            .to(t[4], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", delay: 0.1, ease: "beaucoup.momentum", duration: i }, 0)
                            .to(t[3], { y: 2 * q.w.h, rotate: "random(-20, 20)", delay: 0.1, ease: "beaucoup.momentum", duration: i }, 0)
                            .to(t[5], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", delay: 0.05, ease: "beaucoup.momentum", duration: i }, 0),
                        this.$imageInner &&
                        this.$imageWrapper &&
                        e
                            .set(this.$imageInner, { autoAlpha: 1 }, 0.42)
                            .fromTo(this.$imageInner, { yPercent: -90 }, { yPercent: 0, ease: "power3.inOut", duration: 2.1 }, 0.42)
                            .fromTo(this.$imageInner, { rotateY: -14, rotateX: 20 }, { rotateY: 0, rotateX: 0, ease: "power3.inOut", duration: 1.6 }, "<20%")
                            .to(this.$imageInner, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "beaucoup.inOut", duration: 1.6 }, "<40%")
                            .fromTo(this.$imageWrapper, { scale: 1.2 }, { scale: 1.05, ease: "beaucoup.inOut", duration: 1.6 }, "<")
                            .call(
                                () => {
                                    window.dispatchEvent(new CustomEvent("loaderComplete")), (q.isFirstLoaded = !0);
                                },
                                [],
                                "<50%"
                            ),
                        e
                    );
                }
            }
            class Sl {
                constructor(t, e) {
                    (this.$el = t), (this.destroyLast = e), this.bindMethods(), this.getElems(), this.init(), q.detect.isMobile && this.beforeAppear(), this.events();
                }
                onEnterCompleted() { }
                bindMethods() { }
                beforeAppear() { }
                appear() { }
                getElems() { }
                init() { }
                events() { }
                destroy() { }
                resize() { }
                resizeX() { }
                scroll() { }
                scrollEnd() { }
                update() { }
            }
            class El {
                constructor(t) {
                    let { el: e, parent: i } = t;
                    (this.$el = e), (this.$parent = i), this.bindMethods(), this.events();
                    const r = q.w.w / 2 - this.$el.offsetWidth / 2,
                        n = q.w.h / 2 - this.$el.offsetHeight / 2,
                        s = this.$parent && this.$parent.getBoundingClientRect();
                    (this.mouse = {
                        x: r,
                        y: n,
                        rect: this.$el.getBoundingClientRect(),
                        parentRect: s,
                        moving: !1,
                        parentOffset: this.$parent ? s.top + window.scrollY : 0,
                        canMove: !!this.$parent && this.$parent.getBoundingClientRect().top < q.w.h,
                    }),
                        An.set(this.$el, { autoAlpha: 0 });
                }
                bindMethods() {
                    (this.move = this.move.bind(this)),
                        (this.onEnter = this.onEnter.bind(this)),
                        (this.onLeave = this.onLeave.bind(this)),
                        (this.onMoveEnd = this.onMoveEnd.bind(this)),
                        (this.onScrollEnd = this.onScrollEnd.bind(this)),
                        (this.moveDebounced = R(400, this.onMoveEnd)),
                        (this.scrollDebounced = R(400, this.onScrollEnd));
                }
                events() {
                    q.detect.isMobile || (window.addEventListener("mousemove", this.move), window.addEventListener("mousemove", this.moveDebounced), q.smoothScroll.on("scroll", this.scrollDebounced)),
                        this.$parent && (this.$parent.addEventListener("mouseenter", this.onEnter), this.$parent.addEventListener("mouseleave", this.onLeave));
                }
                off() {
                    q.detect.isMobile || (window.removeEventListener("mousemove", this.move), window.removeEventListener("mousemove", this.moveDebounced), q.smoothScroll.off("scroll", this.scrollDebounced));
                }
                show() {
                    q.cancelAnimation(this.hideAnimation), (this.showAnimation = An.to(this.$el, { autoAlpha: 1, ease: "power2.out", duration: 0.3 }));
                }
                hide() {
                    q.cancelAnimation(this.showAnimation), (this.hideAnimation = An.to(this.$el, { autoAlpha: 0, ease: "power2.out", duration: 0.2 }));
                }
                onEnter(t) {
                    (this.mouse.canMove = !0),
                        (this.mouse.x = t.clientX - this.mouse.rect.width / 2 - this.mouse.parentRect.left),
                        (this.mouse.y = t.clientY - this.mouse.rect.height / 2 + window.scrollY - this.mouse.parentOffset),
                        An.set(this.$el, { x: this.mouse.x, y: this.mouse.y }),
                        this.show();
                }
                onLeave() {
                    (this.mouse.canMove = !1), this.hide();
                }
                move(t) {
                    this.mouse.canMove && ((this.mouse.moving = !0), (this.mouse.x = t.clientX - this.mouse.rect.width / 2 - this.mouse.parentRect.left), (this.mouse.y = t.clientY - this.mouse.rect.height / 2));
                }
                onMoveEnd() {
                    this.mouse.canMove && (this.mouse.moving = !1);
                }
                onScrollEnd() {
                    this.mouse.canMove && (this.mouse.moving = !1);
                }
                scroll() {
                    this.mouse.moving = !0;
                }
                resize() {
                    if (((this.mouse.rect = this.$el.getBoundingClientRect()), (this.mouse.parentRect = this.$parent.getBoundingClientRect()), this.$parent)) {
                        const t = this.$parent.getBoundingClientRect();
                        this.mouse.parentOffset = t.top + window.scrollY;
                    }
                }
                update() {
                    const { x: t, y: e, parentOffset: i } = this.mouse;
                    if (this.mouse.canMove && this.mouse.moving) {
                        const r = An.quickTo(this.$el, "x", { duration: 0.2, ease: "power2.out" }),
                            n = An.quickTo(this.$el, "y", { duration: 0.2, ease: "power2.out" });
                        r(t), n(e + window.scrollY - i);
                    }
                }
            }
            class $l {
                constructor(t) {
                    let { el: e, cb: i, mobile: r = !1 } = t;
                    (this.cb = i), (this.mobile = r), (this.mouse = { x: 0, y: 0 }), (this.el = "string" == typeof e ? document.querySelector(e) : void 0 === e ? document : e), (this.run = this.run.bind(this));
                }
                on() {
                    this.listener("add");
                }
                off() {
                    this.listener("remove");
                }
                listener(t) {
                    this.mobile && q.detect.isMobile ? this.el[t + "EventListener"]("touchmove", this.run) : q.detect.isMobile || this.el[t + "EventListener"]("mousemove", this.run);
                }
                getDistance(t, e) {
                    return q.distance(t.x, t.y, e.x, e.y);
                }
                run(t) {
                    const e = t.changedTouches ? t.changedTouches[0].clientX : t.clientX,
                        i = t.changedTouches ? t.changedTouches[0].clientY : t.clientY;
                    (this.mouse.x = e), (this.mouse.y = i), this.cb(e, i, t);
                }
            }
            class Ml {
                constructor(t) {
                    let { dom: e, speed: i = 60 } = t;
                    (this.dom = e), (this.wrapper = this.dom.querySelector(".marquee-w")), (this.speed = i), (this.spans = []), (this.duration = 0), (this.distance = 0), (this.animation = null), this.initTrigger();
                }
                populateSpans() {
                    const t = this.wrapper.innerHTML,
                        e = this.wrapper.offsetWidth,
                        i = this.dom.offsetWidth,
                        r = Math.ceil(i / e);
                    for (let e = 0; e < r + 1; e++) {
                        const e = document.createElement("span");
                        e.innerHTML = t;
                        const i = e.querySelectorAll("h1", "h2", "h3", "h4", "h5", "h6");
                        i.length > 0 &&
                            i.forEach((t) => {
                                const e = `<span class='${t.className}'>${t.innerHTML}</span>`;
                                t.outerHTML = e;
                            }),
                            e.classList.add("clone"),
                            this.spans.push(e),
                            this.wrapper.appendChild(e);
                    }
                    this.wrapper.style.setProperty("--marquee-distance", `-${100 / (r + 2)}%`);
                }
                start() {
                    this.populateSpans(), this.getDistanceToBrowse();
                }
                initTrigger() {
                    this.sT = q.scrollTrigger.create({
                        trigger: this.dom,
                        onEnter: () => {
                            this.wrapper.classList.add("running");
                        },
                        onEnterBack: () => {
                            this.wrapper.classList.add("running");
                        },
                        onLeave: () => {
                            this.wrapper.classList.remove("running");
                        },
                        onLeaveBack: () => {
                            this.wrapper.classList.remove("running");
                        },
                    });
                }
                resize() {
                    this.removeClones(), this.start();
                }
                refreshTrigger() {
                    this.sT.refresh();
                }
                removeClones() {
                    this.spans.forEach((t) => t.classList.contains("clone") && t.remove()), (this.spans = []);
                }
                getDistanceToBrowse() {
                    this.wrapper.style.display = "initial";
                    const t = this.wrapper.offsetWidth;
                    (this.wrapper.style.display = "flex"), (this.duration = t / this.speed), this.wrapper.style.setProperty("--marquee-duration", `${this.duration}s`);
                }
            }
            class kl extends Sl {
                init() {
                    this.delay = this.$el.dataset.delay || 0.3;
                }
                beforeAppear() {
                    0 === this.$chars.length && (this.$chars = new (wl())({ target: this.$el, by: "chars" })[0].chars),
                        An.set(this.$chars, { rotateX: -90, yPercent: 100, opacity: 0 }),
                        (this.isInView = q.scrollTrigger.isInViewport(this.$el)),
                        this.isInView || q.scrollTrigger.create({ trigger: this.$el, animation: this.animate() });
                }
                bindMethods() { }
                getElems() {
                    this.$chars = this.$el.querySelectorAll(".char");
                }
                events() { }
                animate() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    const e = An.timeline({ delay: t });
                    return (
                        this.onAnimate && e.add(this.onAnimate, 0),
                        e
                            .to(this.$chars, { rotateX: 0, rotateY: 0, rotateZ: 0, x: 0, yPercent: 0, xPercent: 0, z: 0, ease: "beaucoup.out2", duration: 1.1, stagger: { each: "0.02" } }, 0)
                            .to(this.$chars, { opacity: 1, ease: "alpha", duration: 0.7, stagger: 0.02 }, 0),
                        e
                    );
                }
                appear() {
                    this.isInView && this.animate(this.delay);
                }
            }
            const Cl = [
                {
                    name: "cover",
                    Class: class extends Sl {
                        init() {
                            if (
                                ((this.mouse = { target: { x: 0, y: 0 }, lerp: { x: 0, y: 0 }, last: { x: 0, y: 0 }, normalized: { x: 0 } }),
                                    (this.disableLoop = !1),
                                    (this.disabled = !1),
                                    (this.zIndex = 0),
                                    (this.activeImages = 0),
                                    (this.currentIndex = 0),
                                    (this.oldIndex = 0),
                                    (this.total = this.$images.length),
                                    (this.threshold = 0.17 * q.w.w),
                                    this.setBounds(),
                                    (this.mm = new $l({ cb: this.move })),
                                    this.mm.on(),
                                    q.detect.isMobile)
                            ) {
                                this.startLoopAnimation(),
                                    q.scrollTrigger.create({
                                        trigger: this.$el,
                                        onEnterBack: () => {
                                            (this.disableLoop = !1), this.startLoopAnimation();
                                        },
                                        onLeave: () => {
                                            this.disableLoop = !0;
                                        },
                                    });
                                for (let t = 0; t < this.total; t++) t > 0 && An.set(this.$images[t], { x: q.w.w - this.rect.left });
                            } else An.set(this.$images, { opacity: 0 });
                        }
                        bindMethods() {
                            (this.move = this.move.bind(this)), (this.onEnter = this.onEnter.bind(this)), (this.onLeave = this.onLeave.bind(this));
                        }
                        getElems() {
                            (this.$title = this.$el.querySelector(".cover-title")), (this.$imagesWrapper = this.$el.querySelector(".cover-trail")), (this.$images = this.$el.querySelectorAll(".cover-trail-img"));
                            const t = new (wl())({ target: this.$title, by: "wrapLinesChars" })[0].lines;
                            for (let e = 0; e < t.length; e++) e % 2 == 1 && An.set(t[e], { zIndex: 2 });
                        }
                        events() {
                            q.detect.isMobile || (this.$el.addEventListener("mouseenter", this.onEnter), this.$el.addEventListener("mouseleave", this.onLeave));
                        }
                        appear() { }
                        destroy() {
                            this.mm.off();
                        }
                        onEnter(t) {
                            (this.disabled = !1), (this.mouse.last = { x: t.clientX, y: t.clientY + window.scrollY });
                        }
                        onLeave() {
                            this.disabled = !0;
                        }
                        setBounds() {
                            this.rect = this.$imagesWrapper.getBoundingClientRect();
                        }
                        startLoopAnimation() {
                            (this.oldIndex = this.currentIndex),
                                (this.currentIndex = this.currentIndex < this.total - 1 ? this.currentIndex + 1 : 0),
                                (this.oldImage = this.$images[this.oldIndex]),
                                (this.currentImage = this.$images[this.currentIndex]);
                            const t = An.timeline({
                                onComplete: () => {
                                    !this.disableLoop && this.startLoopAnimation();
                                },
                            }),
                                e = this.currentIndex % 3;
                            t.fromTo(this.currentImage, { x: q.w.w, y: 50 * [-1, 1, 1][e], rotate: 25, zIndex: this.zIndex++ }, { x: 0, y: 0, rotate: [-5, 0, 5][e], ease: "expo.out", duration: 0.7 }, 0);
                        }
                        move(t, e) {
                            this.disabled || ((this.mouse.target = { x: t, y: e + window.scrollY }), (this.mouse.normalized.x = An.utils.mapRange(0, q.w.w, -1, 1, t)));
                        }
                        showNext() {
                            this.zIndex++,
                                (this.currentIndex = this.currentIndex < this.total - 1 ? this.currentIndex + 1 : 0),
                                (this.currentImage = this.$images[this.currentIndex]),
                                An.killTweensOf(this.currentImage),
                                (this.tl = An.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })),
                                this.tl
                                    .fromTo(
                                        this.currentImage,
                                        {
                                            opacity: 1,
                                            zIndex: this.zIndex,
                                            x: this.mouse.lerp.x - this.rect.width / 2,
                                            y: this.mouse.lerp.y - this.rect.width / 2,
                                            rotate: An.utils.mapRange(-1, 1, -15, 15, this.mouse.normalized.x),
                                            scale: 0,
                                        },
                                        { x: this.mouse.target.x - this.rect.width / 2, y: this.mouse.target.y - this.rect.width / 2, scale: 1, duration: 0.6, ease: "power3.out" }
                                    )
                                    .fromTo(this.currentImage.children[0], { scale: 1.5 }, { scale: 1, duration: 0.6, ease: "power3.out" }, 0)
                                    .to(this.currentImage, { y: 1.3 * q.w.h, ease: "power2.inOut", duration: 0.8 }, 0.7)
                                    .set(this.currentImage, { opacity: 0 });
                        }
                        onImageActivated() {
                            this.activeImages++, (this.isIdle = !1);
                        }
                        onImageDeactivated() {
                            this.activeImages--, 0 === this.activeImages && (this.isIdle = !0);
                        }
                        resize() {
                            (this.threshold = 0.17 * q.w.w), this.setBounds();
                        }
                        update() {
                            if (this.disabled) return;
                            const { lerp: t, last: e, target: i } = this.mouse,
                                r = this.mm.getDistance(i, e);
                            (t.x = q.lerp(t.x, i.x, 0.1)), (t.y = q.lerp(t.y, i.y, 0.1)), r > this.threshold && (this.showNext(), (this.mouse.last = this.mouse.target)), this.isIdle && 1 !== this.zIndex && (this.zIndex = 1);
                        }
                    },
                },
                { name: "title", Class: kl },
                {
                    name: "events",
                    Class: class extends Sl {
                        getElems() {
                            this.$anchors = document.querySelectorAll(".anchor");
                        }
                        events() {
                            for (let t = 0; t < this.$anchors.length; t++) this.$anchors[t].addEventListener("click", this.onAnchorClick.bind(this));
                        }
                        onAnchorClick() {
                            q.smoothScroll.scrollTo(this.$el);
                        }
                    },
                },
                {
                    name: "cards-columns",
                    Class: class extends Sl {
                        beforeAppear() {
                            !q.detect.isMobile && this.initST();
                        }
                        getElems() {
                            this.$columns = this.$el.querySelectorAll(".cards-columns-column");
                        }
                        initST() {
                            const t = this.$columns[1].querySelectorAll(".cards-columns-card"),
                                e = An.timeline();
                            e.to(this.$columns[1], { y: "-20rem", ease: "linear" }, 0).fromTo(
                                t,
                                {
                                    rotate: (t) => {
                                        const e = t % 2 == 0 ? -1 : 1;
                                        return An.utils.random([5, 6]) * e;
                                    },
                                },
                                {
                                    rotate: (t) => {
                                        const e = t % 2 == 0 ? -1 : 1;
                                        return An.utils.random([1, 2, 3]) * e;
                                    },
                                    ease: "linear",
                                },
                                0
                            ),
                                q.scrollTrigger.create({ trigger: this.$columns[1], scrub: !0, animation: e });
                            const i = this.$columns[0].querySelectorAll(".cards-columns-card"),
                                r = this.$columns[2].querySelectorAll(".cards-columns-card");
                            for (let t = 0; t < i.length; t++) {
                                const e = t % 2 == 0 ? 1 : -1;
                                An.set(i[t], { rotate: An.utils.random([1, 2, 3, 3.5]) * e });
                            }
                            for (let t = 0; t < r.length; t++) {
                                const e = t % 2 == 0 ? 1 : -1;
                                An.set(r[t], { rotate: An.utils.random([1, 2, 3, 3.5]) * e });
                            }
                        }
                    },
                },
                {
                    name: "cover-restaurant",
                    Class: class extends Sl {
                        beforeAppear() {
                            (this.$menu = document.querySelector(".single-restaurant-menu")),
                                (this.$header = document.querySelector(".single-restaurant-header")),
                                (this.$menuWrapper = document.querySelector(".single-restaurant-menu-w")),
                                this.setBounds(),
                                this.initST(),
                                q.smoothScroll.resize(),
                                q.detect.isMobile
                                    ? An.set(this.$imageWrapper, { scale: 1.15 })
                                    : (An.set(this.$content, { xPercent: -10, yPercent: 100, rotate: 20 }),
                                        An.set(this.$menu, { xPercent: -115, yPercent: q.detect.isMobile ? 90 : 110, rotate: 50, opacity: 0 }),
                                        An.set(this.$chars, { rotateX: -90, yPercent: 100, opacity: 0 })),
                                this.$header.classList.remove("opacity-0");
                        }
                        getElems() {
                            (this.$pattern = this.$el.querySelector(".cover-restaurant-pattern .pattern")),
                                (this.$title = this.$el.querySelector(".cover-restaurant-title")),
                                (this.$image = this.$el.querySelector(".cover-restaurant-img")),
                                (this.$content = this.$el.querySelector(".content")),
                                (this.$imageInner = this.$el.querySelector(".cover-restaurant-inner")),
                                (this.$imageWrapper = this.$el.querySelector(".cover-restaurant-wrapper .image, .cover-restaurant-wrapper video")),
                                q.detect.isMobile || (this.$chars = new (wl())({ target: this.$title, by: "chars" })[0].chars);
                        }
                        initST() {
                            q.detect.isMobile ||
                                (q.scrollTrigger.create({ trigger: this.$el, start: "top top", end: "bottom bottom", scrub: 1.05, animation: An.fromTo(this.$imageWrapper, { scale: 1.05 }, { scale: 1, ease: "linear" }) }),
                                    q.scrollTrigger.create({ trigger: this.$el, start: "bottom bottom", end: "bottom top", scrub: !0, animation: An.fromTo(this.$image, { yPercent: 0 }, { yPercent: 50, ease: "linear" }) }));
                        }
                        appear() {
                            const t = An.timeline({ defaults: { ease: "expo.inOut", duration: 1.2 } });
                            q.detect.isMobile
                                ? t.to(this.$imageWrapper, { scale: 1, ease: "expo.out", duration: 1.2 }, 0)
                                : t
                                    .to(this.$content, { xPercent: 0, yPercent: 0, rotate: 0, ease: "expo.out", duration: 1.1 }, 0)
                                    .set(this.$menu, { opacity: 1 }, "<23%")
                                    .to(this.$menu, { xPercent: -4, yPercent: 0, rotate: 7, ease: "expo.out", duration: 1.1 }, "<")
                                    .to(this.$chars, { rotateX: 0, yPercent: 0, ease: "beaucoup.out", duration: 1.1, stagger: 0.02 }, 0.12)
                                    .to(this.$chars, { opacity: 1, ease: "alpha", duration: 0.7, stagger: 0.02 }, 0.12);
                        }
                        setBounds() {
                            this.$menuWrapper.style.marginBottom = -this.$menuWrapper.getBoundingClientRect().bottom + "px";
                            const t = this.$content.getBoundingClientRect(),
                                e = this.$el.getBoundingClientRect();
                            (q.w.w < 768 || q.w.w > 1024) && (this.$content.style.marginTop = -(this.$pattern.getBoundingClientRect().bottom - t.top + e.top) + "px");
                        }
                        resizeX() {
                            this.setBounds();
                        }
                    },
                },
                {
                    name: "marquee",
                    Class: class extends Sl {
                        beforeAppear() {
                            q.scrollTrigger.isInViewport(this.$el)
                                ? ((this.marquee = new Ml({ dom: this.$el, speed: this.$el.dataset.speed })), this.marquee.start())
                                : setTimeout(() => {
                                    (this.marquee = new Ml({ dom: this.$el, speed: this.$el.dataset.speed })), this.marquee.start();
                                }, 750);
                        }
                        getElems() {
                            this.$cursor = this.$el.querySelector(".follow-button");
                        }
                        refreshTrigger() {
                            this.marquee.refreshTrigger();
                        }
                        resize() {
                            this.marquee.resize();
                        }
                    },
                },
                {
                    name: "content",
                    Class: class extends Sl {
                        beforeAppear() {
                            this.$tag && this.setTag(),
                                this.$title && "false" !== this.$title.dataset.animate && ((this.title = new kl(this.$title)), (this.title.onAnimate = this.animate), this.title.beforeAppear()),
                                this.$text && An.set(this.$text, { opacity: 0 }),
                                this.$dots.length > 0 && (An.set(this.$dots[0], { x: "6rem", opacity: 0 }), An.set(this.$dots[1], { x: "-6rem", opacity: 0 }));
                        }
                        bindMethods() {
                            this.animate = this.animate.bind(this);
                        }
                        getElems() {
                            (this.$title = this.$el.querySelector(".content-title")),
                                (this.$tag = this.$el.querySelector(".content-tag")),
                                (this.$text = this.$el.querySelector(".content-text")),
                                (this.$dots = this.$el.querySelectorAll(".dot"));
                        }
                        setTag() {
                            this.words = new (wl())({ target: this.$title, by: "wrapLinesChars" })[0].words;
                            this.words[this.words.length - 1].appendChild(this.$tag);
                        }
                        animate() {
                            const t = An.timeline();
                            return this.$text && t.to(this.$text, { opacity: 1, ease: "alpha", duration: 0.8 }, 0.5), this.$dots.length > 0 && t.to(this.$dots, { x: 0, opacity: 1, ease: "beaucoup.out2", duration: 1 }, 0), t;
                        }
                        appear() {
                            this.title && this.title.appear();
                        }
                    },
                },
                {
                    name: "list-restaurants",
                    Class: class extends Sl {
                        init() {
                            (this.zIndex = 0), (this.oldIndex = -1), (this.currentIndex = 0);
                        }
                        beforeAppear() {
                            !q.detect.isMobile && this.initTrigger();
                        }
                        getElems() {
                            (this.$imagesWrapper = this.$el.querySelector(".list-restaurants-images")),
                                (this.$itemsWrapper = this.$el.querySelector(".list-restaurants-items")),
                                (this.$images = this.$el.querySelectorAll(".list-restaurants-image")),
                                (this.$imagesInner = this.$el.querySelectorAll(".list-restaurants-image-inner")),
                                (this.$items = this.$el.querySelectorAll(".list-restaurants-item")),
                                (this.$content = this.$el.querySelector(".list-restaurants-content")),
                                (this.$wrapper = this.$el.querySelector(".list-restaurants-wrapper")),
                                An.set(this.$images, { yPercent: 15, rotate: -12, opacity: 0 });
                        }
                        events() {
                            if (!q.detect.isMobile) {
                                this.$itemsWrapper.addEventListener("mouseleave", this.onLeave.bind(this));
                                for (let t = 0; t < this.$items.length; t++) this.$items[t].addEventListener("mouseenter", this.onEnter.bind(this, t));
                            }
                        }
                        initTrigger() {
                            q.scrollTrigger.create({ trigger: this.$el, scrub: !0, animation: An.fromTo(this.$imagesWrapper, { yPercent: -15 }, { yPercent: 15, ease: "linear" }) }),
                                q.scrollTrigger.create({
                                    trigger: this.$el,
                                    start: "top 65%",
                                    animation: An.fromTo(this.$content, { transformOrigin: "bottom right", rotate: -45, xPercent: -30, yPercent: 150 }, { xPercent: 5, yPercent: 0, rotate: -4, duration: 1.25, ease: "expo.out" }),
                                }),
                                q.scrollTrigger.create({ trigger: this.$el, scrub: !0, animation: An.fromTo(this.$wrapper, { yPercent: 10 }, { yPercent: -10, ease: "linear" }) });
                        }
                        onEnter(t) {
                            (this.oldImage = this.oldIndex > -1 && this.$images[this.oldIndex]), (this.currentImage = this.$images[t]), (this.oldIndex = t), An.killTweensOf(this.oldImage), An.killTweensOf(this.currentImage);
                            const e = An.timeline();
                            this.oldImage && e.to(this.oldImage, { xPercent: 0, yPercent: 15, rotate: -12, ease: "expo.out", duration: 0.6 }, 0),
                                e
                                    .set(this.currentImage, { opacity: 1, zIndex: this.zIndex++ }, 0)
                                    .to(this.currentImage, { xPercent: An.utils.random([112, 117, 122]), yPercent: An.utils.random([-5, 0, 5]), rotate: An.utils.random([2, 4, 6]), ease: "expo.out", duration: 0.8 }, 0.1)
                                    .fromTo(this.$imagesInner[t], { xPercent: 36.5 }, { xPercent: 0, ease: "expo.out", duration: 0.8 }, 0.1);
                        }
                        onLeave() {
                            (this.oldImage = this.$images[this.oldIndex]), (this.oldIndex = -1), An.killTweensOf(this.oldImage);
                            const t = An.timeline();
                            this.oldImage && t.to(this.oldImage, { xPercent: 0, yPercent: 15, rotate: -12, ease: "expo.out", duration: 0.6 }, 0);
                        }
                    },
                },
                {
                    name: "slider-content--slide",
                    Class: class extends Sl {
                        beforeAppear() {
                            q.detect.isMobile || (this.setBounds(), this.initST());
                        }
                        getElems() {
                            (this.$slider = this.$el.querySelector(".slider-content-slider")), (this.$items = this.$el.querySelectorAll(".slider-content-item")), (this.$images = this.$el.querySelectorAll(".slider-content-image"));
                        }
                        resize() {
                            !q.detect.isMobile && this.setBounds();
                        }
                        setBounds() {
                            An.set(this.$slider, { x: 0 });
                            const t = this.$images[this.$images.length - 1].getBoundingClientRect();
                            this.translate = t.left - q.w.w + t.width;
                        }
                        initST() {
                            const t = An.timeline({ defaults: { ease: "linear" } });
                            t
                                .to(this.$slider, { x: -this.translate })
                                .fromTo(this.$items, { rotate: (t) => 2 * (t % 2 == 0 ? -1 : 1) }, { yPercent: (t) => 10 * (t % 2 == 0 ? -1 : 1) }, 0)
                                .fromTo(this.$images, { scale: 1.2, xPercent: -10 }, { xPercent: 10 }, 0),
                                q.scrollTrigger.create({ trigger: this.$slider, end: "bottom top-=" + q.remToPixel(15) + "px", scrub: !0, animation: t });
                        }
                    },
                },
                {
                    name: "slider-content",
                    Class: class extends Sl {
                        init() {
                            q.detect.isMobile &&
                                setTimeout(() => {
                                    this.initSTMobile();
                                }, 100);
                        }
                        getElems() {
                            (this.$slider = this.$el.querySelector(".slider-content-slider")), (this.$itemsW = this.$el.querySelectorAll(".slider-content-item-w"));
                        }
                        initSTMobile() {
                            An.set([this.$itemsW[0], this.$itemsW[1]], { x: q.w.w }),
                                q.scrollTrigger.create({ trigger: this.$slider, start: "top top+=60%", animation: An.to([this.$itemsW[0], this.$itemsW[1]], { x: 0, ease: "expo.out", duration: 0.8, stagger: 0.15 }) });
                        }
                    },
                },
                {
                    name: "booking",
                    Class: class extends Sl {
                        beforeAppear() {
                            q.detect.isMobile ? this.initSTMobile() : this.initST();
                        }
                        getElems() {
                            (this.$image = this.$el.querySelector(".booking-image")), (this.$content = this.$el.querySelector(".content"));
                        }
                        initSTMobile() {
                            An.set(this.$content, { yPercent: 80, rotate: -8 }),
                                q.scrollTrigger.create({ trigger: this.$el, start: "top top+=80%", animation: An.to(this.$content, { yPercent: 0, rotate: -2, ease: "power3.out", duration: 1 }) });
                        }
                        initST() {
                            q.scrollTrigger.create({ trigger: this.$el, scrub: !0, animation: An.fromTo(this.$image, { yPercent: -15 }, { yPercent: 15, ease: "linear" }) }),
                                q.scrollTrigger.create({ trigger: this.$el, scrub: !0, animation: An.fromTo(this.$content, { rotate: -8, transformOrigin: "bottom right" }, { rotate: -2, ease: "linear" }) });
                        }
                    },
                },
                {
                    name: "simple-cover",
                    Class: class extends Sl {
                        init() {
                            (this.mouse = { target: { x: 0, y: 0 }, lerp: { x: 0, y: 0 }, last: { x: 0, y: 0 }, normalized: { x: 0 } }),
                                (this.distances = [0.035, 0.05, 0.08, 0.2, 0.15]),
                                (this.disableLoop = !1),
                                (this.disabled = !1),
                                (this.zIndex = 0),
                                (this.activeImages = 0),
                                (this.currentIndex = 0),
                                (this.oldIndex = 0),
                                (this.total = this.$images.length),
                                (this.threshold = 0.08 * q.w.w),
                                q.detect.isMobile || (this.mm = new $l({ cb: this.move }));
                        }
                        beforeAppear() {
                            !q.detect.isMobile && this.initST();
                            const t = this.$content.getBoundingClientRect().bottom;
                            q.detect.isMobile || An.set(this.$content, { xPercent: -10, y: t + q.remToPixel(50), rotate: 20 }), An.set(this.$image, { scale: 1.2 });
                        }
                        getElems() {
                            (this.$content = this.$el.querySelector(".simple-cover-content")), (this.$image = this.$el.querySelector(".simple-cover-image")), (this.$images = this.$el.querySelectorAll(".simple-cover-sticker"));
                        }
                        initST() {
                            q.scrollTrigger.create({ trigger: this.$el, start: "top top", end: "bottom top", scrub: !0, animation: An.fromTo(this.$image, { yPercent: 0 }, { yPercent: 20, ease: "linear" }) });
                        }
                        appear() {
                            this.mm.on();
                            const t = An.timeline();
                            t.to(this.$image, { scale: 1, ease: "expo.out", duration: 1.3 }, q.detect.isMobile ? 0 : 0.3), q.detect.isMobile || t.to(this.$content, { xPercent: 0, y: 0, rotate: 0, ease: "expo.out", duration: 1.1 }, "<15%");
                        }
                        bindMethods() {
                            this.move = this.move.bind(this);
                        }
                        destroy() {
                            this.mm && this.mm.off();
                        }
                        showNext() {
                            this.zIndex++,
                                (this.currentIndex = this.currentIndex < this.total - 1 ? this.currentIndex + 1 : 0),
                                (this.currentImage = this.$images[this.currentIndex]),
                                An.killTweensOf(this.currentImage),
                                (this.tl = An.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })),
                                this.tl
                                    .fromTo(
                                        this.currentImage,
                                        { autoAlpha: 1, zIndex: this.zIndex, x: this.mouse.target.x - q.remToPixel(5), y: this.mouse.target.y - q.remToPixel(5), rotate: "random(-10, -10)", scale: 1.2 },
                                        { scale: 1, duration: 0.2, ease: "power2.out" }
                                    )
                                    .to(this.currentImage, { autoAlpha: 0, ease: "alpha", duration: 0.3 }, 1);
                        }
                        move(t, e) {
                            this.disabled || ((this.mouse.target = { x: t, y: e + window.scrollY }), (this.mouse.normalized.x = An.utils.mapRange(0, q.w.w, -1, 1, t)));
                        }
                        onImageActivated() {
                            this.activeImages++, (this.isIdle = !1);
                        }
                        onImageDeactivated() {
                            this.activeImages--, 0 === this.activeImages && (this.isIdle = !0);
                        }
                        resize() {
                            this.threshold = 0.17 * q.w.w;
                        }
                        update() {
                            if (this.disabled || q.detect.isMobile) return;
                            const { lerp: t, last: e, target: i } = this.mouse,
                                r = this.mm.getDistance(i, e);
                            (t.x = q.lerp(t.x, i.x, 0.1)),
                                (t.y = q.lerp(t.y, i.y, 0.1)),
                                r > this.threshold && (this.showNext(), (this.threshold = q.w.w * An.utils.random(this.distances)), (this.mouse.last = this.mouse.target)),
                                this.isIdle && 1 !== this.zIndex && (this.zIndex = 1);
                        }
                    },
                },
                {
                    name: "images-titles",
                    Class: class extends Sl {
                        beforeAppear() {
                            !q.detect.isMobile && this.initST();
                        }
                        getElems() {
                            this.$cards = this.$el.querySelectorAll(".images-titles-card");
                        }
                        initST() {
                            const t = An.timeline();
                            t.to(this.$cards[0], { y: "-12rem", rotate: -11, ease: "linear" }, 0).to(this.$cards[1], { y: "-12rem", rotate: 11, ease: "linear" }, 0), q.scrollTrigger.create({ trigger: this.$el, scrub: !0, animation: t });
                        }
                    },
                },
                {
                    name: "footer",
                    Class: class extends Sl {
                        beforeAppear() {
                            setTimeout(() => {
                                this.setSize(), (this.isFirst = !0), q.detect.isMobile || (this.cursor = new El({ el: this.$cursor, parent: this.$cursorWrapper })), q.smoothScroll.resize();
                            }, 500);
                        }
                        getElems() {
                            (this.$cursor = this.$el.querySelector(".footer-cursor")),
                                (this.$cursorWrapper = this.$el.querySelector(".footer-cursor-wrapper")),
                                (this.$stamp = this.$el.querySelector(".footer-stamp")),
                                (this.$stampsWrapper = this.$el.querySelector(".footer-stamps")),
                                (this.$baseStamps = this.$el.querySelectorAll(".footer-stamps img")),
                                (this.$click = this.$el.querySelectorAll(".footer-click"));
                        }
                        events() {
                            this.$cursorWrapper.addEventListener("click", this.onClick.bind(this)),
                                q.detect.isMobile || (this.$cursorWrapper.addEventListener("mousedown", this.onDown.bind(this)), this.$cursorWrapper.addEventListener("mouseup", this.onUp.bind(this)));
                        }
                        onDown() {
                            An.killTweensOf(this.$cursor, "scale"), An.to(this.$cursor, { scale: 0.8, ease: "expo.out", duration: 0.4 });
                        }
                        onUp() {
                            An.killTweensOf(this.$cursor, "scale"), An.to(this.$cursor, { scale: 1, ease: "expo.out", duration: 0.4 });
                        }
                        onClick(t) {
                            const e = this.$stamp.cloneNode(!0),
                                i = Math.round(An.utils.random(1, 7));
                            (e.children[0].src = e.children[0].src.replace("stamp-01", `stamp-0${i}`)),
                                this.$stampsWrapper.appendChild(e),
                                An.set(e, { x: t.clientX - this.parentOffset.left - this.stampRect.width / 2, y: t.clientY + window.scrollY - this.parentOffset.top - this.stampRect.height / 2, rotate: "random(-30, 30)" });
                            const r = An.timeline();
                            this.isFirst && r.to(this.$click, { autoAlpha: 0, ease: "power2.out", duration: 0.3 }),
                                r.fromTo(e, { scale: 1.15 }, { scale: 1, opacity: "random(0.5, 1)", ease: "expo.out", duration: 0.4 }, 0).to(
                                    e,
                                    {
                                        opacity: 0,
                                        ease: "power2.out",
                                        duration: 0.4,
                                        onStart: () => {
                                            this.isFirst &&
                                                ((this.isFirst = !1),
                                                    An.to(this.$baseStamps, {
                                                        opacity: 0,
                                                        ease: "power2.out",
                                                        duration: 0.4,
                                                        stagger: 0.2,
                                                        onComplete: () => {
                                                            for (let t = 0; t < this.$baseStamps.length; t++) this.$baseStamps[t].remove();
                                                        },
                                                    }));
                                        },
                                        onComplete: () => {
                                            e.remove();
                                        },
                                    },
                                    5
                                );
                        }
                        setSize() {
                            document.documentElement.style.setProperty("--footer-height", this.$el.offsetHeight + "px"), (this.$el.style.marginTop = -this.$el.offsetHeight + "px"), (this.stampRect = this.$stamp.getBoundingClientRect());
                            const t = this.$cursorWrapper.getBoundingClientRect();
                            this.parentOffset = { left: t.left, top: t.top + window.scrollY };
                        }
                        resize() {
                            this.setSize(), this.cursor && this.cursor.resize();
                        }
                        update() {
                            this.cursor && this.cursor.update();
                        }
                    },
                },
                {
                    name: "contact",
                    Class: class extends Sl {
                        init() {
                            this.isMobile = q.w.w < 1200;
                        }
                        getElems() {
                            if (
                                ((this.cards = []),
                                    (this.options = []),
                                    (this.$select = this.$el.querySelector("#field_restaurant")),
                                    (this.$options = this.$select && this.$select.querySelectorAll("option")),
                                    (this.$cards = this.$el.querySelectorAll(".contact-card")),
                                    (this.$hiddenMail = this.$el.querySelector(".hidden-mail select")),
                                    (this.$hiddenMailOptions = this.$el.querySelectorAll(".hidden-mail option")),
                                    q.w.w < 1200 ? An.set(this.$cards, { xPercent: 0, yPercent: -120, rotate: -7 }) : An.set(this.$cards, { xPercent: -120, yPercent: 0, rotate: -7 }),
                                    this.$options)
                            )
                                for (let t = 0; t < this.$options.length; t++) this.options.push(this.$options[t].value);
                            for (let t = 0; t < this.$cards.length; t++) this.cards.push({ id: this.$cards[t].dataset.restaurant, el: this.$cards[t] });
                        }
                        events() {
                            this.$select && this.$select.addEventListener("change", this.onChange.bind(this));
                        }
                        onChange() {
                            const t = this.cards.filter((t) => t.id === this.$select.value),
                                e = this.options.findIndex((t) => t === this.$select.value);
                            (this.$hiddenMail.value = this.$hiddenMailOptions[e].value), (this.oldCard = this.currentCard), (this.currentCard = t.length > 0 ? t[0] : null);
                            const i = An.timeline({ defaults: { ease: "expo.out", duration: 0.8 } });
                            this.oldCard && i.to(this.oldCard.el, { xPercent: q.w.w < 1200 ? 0 : -120, yPercent: q.w.w < 1200 ? -120 : 0, rotate: -7 }, 0),
                                this.currentCard && i.to(this.currentCard.el, { xPercent: 0, yPercent: 0, rotate: 7 }, this.oldCard ? 0.1 : 0);
                        }
                        resize() {
                            if (q.w.w < 1200 && !this.isMobile) {
                                this.isMobile = !0;
                                for (let t = 0; t < this.cards.length; t++)
                                    this.cards[t].id === this.$select.value ? An.set(this.cards[t].el, { xPercent: 0, yPercent: 0, rotate: 7 }) : An.set(this.cards[t].el, { xPercent: 0, yPercent: -120, rotate: -7 });
                            } else if (q.w.w >= 1200 && this.isMobile) {
                                this.isMobile = !1;
                                for (let t = 0; t < this.cards.length; t++)
                                    this.cards[t].id === this.$select.value ? An.set(this.cards[t].el, { xPercent: 0, yPercent: 0, rotate: 7 }) : An.set(this.cards[t].el, { xPercent: -120, yPercent: 0, rotate: -7 });
                            }
                        }
                    },
                },
                {
                    name: "p404",
                    Class: class extends Sl {
                        init() {
                            (this.mouse = { target: { x: 0, y: 0 }, lerp: { x: 0, y: 0 }, last: { x: 0, y: 0 }, normalized: { x: 0 } }),
                                (this.distances = [0.035, 0.05, 0.08, 0.2, 0.15]),
                                (this.disableLoop = !1),
                                (this.disabled = !1),
                                (this.zIndex = 0),
                                (this.activeImages = 0),
                                (this.currentIndex = 0),
                                (this.oldIndex = 0),
                                (this.total = this.$images.length),
                                (this.threshold = 0.08 * q.w.w),
                                q.detect.isMobile || ((this.mm = new $l({ cb: this.move })), this.mm.on());
                        }
                        bindMethods() {
                            this.move = this.move.bind(this);
                        }
                        getElems() {
                            this.$images = this.$el.querySelectorAll(".p404-sticker-img");
                        }
                        destroy() {
                            this.mm && this.mm.off();
                        }
                        showNext() {
                            this.zIndex++,
                                (this.currentIndex = this.currentIndex < this.total - 1 ? this.currentIndex + 1 : 0),
                                (this.currentImage = this.$images[this.currentIndex]),
                                An.killTweensOf(this.currentImage),
                                (this.tl = An.timeline({ onStart: () => this.onImageActivated(), onComplete: () => this.onImageDeactivated() })),
                                this.tl
                                    .fromTo(
                                        this.currentImage,
                                        { autoAlpha: 1, zIndex: this.zIndex, x: this.mouse.target.x - q.remToPixel(5), y: this.mouse.target.y - q.remToPixel(5), rotate: "random(-10, -10)", scale: 1.2 },
                                        { scale: 1, duration: 0.2, ease: "power2.out" }
                                    )
                                    .to(this.currentImage, { autoAlpha: 0, ease: "alpha", duration: 0.3 }, 1);
                        }
                        move(t, e) {
                            this.disabled || ((this.mouse.target = { x: t, y: e + window.scrollY }), (this.mouse.normalized.x = An.utils.mapRange(0, q.w.w, -1, 1, t)));
                        }
                        onImageActivated() {
                            this.activeImages++, (this.isIdle = !1);
                        }
                        onImageDeactivated() {
                            this.activeImages--, 0 === this.activeImages && (this.isIdle = !0);
                        }
                        resize() {
                            this.threshold = 0.17 * q.w.w;
                        }
                        update() {
                            if (this.disabled || q.detect.isMobile) return;
                            const { lerp: t, last: e, target: i } = this.mouse,
                                r = this.mm.getDistance(i, e);
                            (t.x = q.lerp(t.x, i.x, 0.1)),
                                (t.y = q.lerp(t.y, i.y, 0.1)),
                                r > this.threshold && (this.showNext(), (this.threshold = q.w.w * An.utils.random(this.distances)), (this.mouse.last = this.mouse.target)),
                                this.isIdle && 1 !== this.zIndex && (this.zIndex = 1);
                        }
                    },
                },
                {
                    name: "single-restaurant",
                    Class: class extends Sl {
                        beforeAppear() {
                            (this.isOpen = !1), this.$cardsWrapper && An.set(this.$cardsWrapper, { xPercent: 120, yPercent: -80, rotateX: 20 });
                        }
                        getElems() {
                            (this.$cardsWrapper = this.$el.querySelector(".menu-cards")),
                                (this.$overlay = this.$el.querySelector(".menu-cards-overlay")),
                                (this.$cardsButton = this.$el.querySelector(".cards-button")),
                                (this.$coverButton = this.$el.querySelector(".cover-cards-button")),
                                (this.$cardsButtonMobile = this.$el.querySelector(".cards-button-mobile"));
                        }
                        events() {
                            this.$cardsWrapper && this.$cardsButton.addEventListener("click", this.onButtonClick.bind(this)),
                                this.$cardsWrapper && this.$cardsButtonMobile.addEventListener("click", this.onButtonClick.bind(this)),
                                this.$cardsWrapper && this.$coverButton.addEventListener("click", this.onButtonClick.bind(this)),
                                this.$overlay && this.$overlay.addEventListener("click", this.close.bind(this)),
                                window.addEventListener("keydown", this.onKey.bind(this));
                        }
                        onButtonClick() {
                            this.isOpen ? this.close() : this.open();
                        }
                        onKey(t) {
                            "Escape" === t.key && this.close();
                        }
                        open() {
                            return new Promise((t) => {
                                (this.isOpen = !0),
                                    this.$overlay.classList.add("pointer-events-auto"),
                                    this.$cardsButton.classList.add("a"),
                                    q.smoothScroll.stop(),
                                    q.cancelAnimation(this.closeTL),
                                    (this.openTL = An.timeline()),
                                    this.openTL
                                        .to(this.$overlay, { opacity: 0.5, ease: "alpha", duration: 0.3 }, 0)
                                        .fromTo(this.$cardsWrapper, { rotateX: 20, rotateY: 30 }, { xPercent: 0, yPercent: 0, rotateX: 0, rotateY: 0, ease: "expo.out", duration: 0.8 }, 0),
                                    t();
                            });
                        }
                        close() {
                            return new Promise((t) => {
                                this.isOpen &&
                                    ((this.isOpen = !1),
                                        this.$overlay.classList.remove("pointer-events-auto"),
                                        this.$cardsButton.classList.remove("a"),
                                        q.smoothScroll.start(),
                                        q.cancelAnimation(this.openTL),
                                        (this.closeTL = An.timeline()),
                                        this.closeTL.to(this.$overlay, { opacity: 0, ease: "alpha", duration: 0.3 }, 0).to(this.$cardsWrapper, { xPercent: 120, yPercent: -80, rotateX: 10, ease: "expo.out", duration: 0.6 }, 0)),
                                    t();
                            });
                        }
                    },
                },
            ];
            var Al = Cl;
            class Ll extends L {
                initialLoad() {
                    this.onEnter(), this.onEnterCompleted(), !q.detect.isMobile && this.beforeAppear();
                }
                onEnter() {
                    (this.blockList = Al), (this.blocks = []), this.blockList && this.blockList.length && this.initBlocks();
                }
                initBlocks() {
                    this.splitting = new (wl())();
                    for (let t = 0; t < this.blockList.length; t++) {
                        const e = this.content.querySelectorAll("." + this.blockList[t].name),
                            i = { name: this.blockList[t].name, instances: [] };
                        for (let r = 0; r < e.length; r++) {
                            const n = { el: e[r], class: new this.blockList[t].Class(e[r]) };
                            i.instances.push(n);
                        }
                        this.blocks.push(i);
                    }
                }
                onEnterCompleted() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.onEnterCompleted();
                    q.isFirstLoaded ? this.appear() : window.addEventListener("loaderComplete", () => this.appear(), { once: !0 });
                }
                beforeAppear() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.beforeAppear();
                }
                appear() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.appear();
                }
                onLeave() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.destroyLast || this.blocks[t].instances[e].class.destroy();
                }
                onLeaveCompleted() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.destroyLast && this.blocks[t].instances[e].class.destroy();
                }
                resizeX() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.resizeX();
                }
                resize() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.resize();
                }
                scroll(t) {
                    for (let e = 0; e < this.blocks.length; e++) for (let i = 0; i < this.blocks[e].instances.length; i++) this.blocks[e].instances[i].class.scroll(t);
                }
                loop() {
                    for (let t = 0; t < this.blocks.length; t++) for (let e = 0; e < this.blocks[t].instances.length; e++) this.blocks[t].instances[e].class.update();
                }
            }
            class Pl extends A {
                onLeave(t) {
                    let { from: e, done: i } = t;
                    (this.from = e), q.smoothScroll && q.smoothScroll.stop(), i();
                }
                onEnter(t) {
                    let { to: e, done: i } = t;
                    (this.$imageInner = e.querySelector(".cover-restaurant-inner")), (this.$imageWrapper = e.querySelector(".cover-restaurant-wrapper")), q.cancelAnimation(this.transitionTL);
                    const r = Array.from(document.querySelectorAll(".transition-image")),
                        n = An.timeline({
                            onStart: () => {
                                An.set(r, { autoAlpha: 1, y: 2 * -q.w.h }),
                                    this.$imageInner && this.$imageWrapper && (An.set(this.$imageInner, { clipPath: "polygon(30% 15%, 70% 15%, 70% 85%, 30% 85%)" }), An.set(this.$imageWrapper, { scale: 1.2 }));
                            },
                            onComplete: () => {
                                q.smoothScroll && q.smoothScroll.start(), An.set(r, { autoAlpha: 0 });
                            },
                        }),
                        s = 1.5;
                    n
                        .fromTo(r[0], { rotateX: 8, rotateY: -8 }, { y: 1.6 * q.w.h, rotateX: -8, rotateY: 8, ease: "beaucoup.momentum", duration: s }, 0)
                        .to(r[1], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", ease: "beaucoup.momentum", duration: s }, 0)
                        .to(r[2], { y: 1.9 * q.w.h, rotate: "random(-20, 20)", ease: "beaucoup.momentum", duration: s }, 0)
                        .to(r[4], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", delay: 0.1, ease: "beaucoup.momentum", duration: s }, 0)
                        .to(r[3], { y: 2 * q.w.h, rotate: "random(-20, 20)", delay: 0.1, ease: "beaucoup.momentum", duration: s }, 0)
                        .to(r[5], { y: 1.6 * q.w.h, rotate: "random(-20, 20)", delay: 0.05, ease: "beaucoup.momentum", duration: s }, 0)
                        .call(
                            () => {
                                q.smoothScroll && q.smoothScroll.scrollTo(0, { immediate: !0, force: !0 }), this.from.remove(), q.currentRenderer.beforeAppear();
                            },
                            [],
                            1.05
                        ),
                        this.$imageInner && this.$imageWrapper
                            ? n
                                .fromTo(this.$imageInner, { yPercent: -90 }, { yPercent: 0, ease: "power3.inOut", duration: 2.1 }, 0.42)
                                .fromTo(this.$imageInner, { rotateY: -14, rotateX: 20 }, { rotateY: 0, rotateX: 0, ease: "power3.inOut", duration: 1.6 }, "<20%")
                                .to(this.$imageInner, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", ease: "beaucoup.inOut", duration: 1.6 }, "<40%")
                                .fromTo(this.$imageWrapper, { scale: 1.2 }, { scale: 1.05, ease: "beaucoup.inOut", duration: 1.6 }, "<")
                                .call(
                                    () => {
                                        i();
                                    },
                                    [],
                                    "<50%"
                                )
                            : n.call(
                                () => {
                                    i();
                                },
                                [],
                                "<70%"
                            ),
                        (this.transitionTL = n);
                }
            }
            class Ol extends A {
                onLeave(t) {
                    let { done: e } = t;
                    q.smoothScroll && q.smoothScroll.stop(),
                        An.fromTo(
                            q.fade,
                            { autoAlpha: 0 },
                            {
                                autoAlpha: 1,
                                duration: 0.3,
                                ease: "alpha",
                                onComplete: () => {
                                    q.smoothScroll && q.smoothScroll.scrollTo(0, { immediate: !0, force: !0 }), e();
                                },
                            }
                        );
                }
                onEnter(t) {
                    let { done: e } = t;
                    q.smoothScroll && q.smoothScroll.start();
                    An.timeline()
                        .to(q.fade, { autoAlpha: 0, duration: 0.4, ease: "alpha" }, 0)
                        .call(
                            () => {
                                e();
                            },
                            [],
                            0.1
                        );
                }
            }
            class Il {
                constructor() {
                    (this.resize = this.resize.bind(this)),
                        (this.scroll = this.scroll.bind(this)),
                        (this.update = this.update.bind(this)),
                        (this.resizeDebounced = R(100, this.resize)),
                        (this.resizeThrottled = z(100, this.resize)),
                        (this.scrollDebounced = R(100, this.scroll)),
                        (this.scrollThrottled = z(30, this.scroll)),
                        An.registerPlugin(Zn),
                        Zn.create("alpha", ".25, .46, .45, .9"),
                        Zn.create("beaucoup.inOut", "M0,0 C0.25,0 0.324,0.099 0.365,0.16 0.426,0.251 0.466,0.292 0.498,0.502 0.532,0.73 0.545,0.817 0.592,0.872 0.644,0.933 0.698,1 1,1"),
                        Zn.create("beaucoup.momentum", "M0,0 C0,0 -0.013,0.325 0.505,0.469 0.985,0.602 1,1 1,1"),
                        Zn.create("beaucoup.out", "0.19, 1, 0.22, 1"),
                        Zn.create("beaucoup.out2", "0.165, 0.84, 0.44, 1"),
                        An.registerPlugin(il),
                        (q.scrollTrigger = il),
                        (q.w = { w: window.innerWidth, h: window.innerHeight }),
                        (this.oldWindowWidth = q.w.w),
                        q.detect.isMobile && document.documentElement.style.setProperty("--wh", q.w.h / 100 + "px"),
                        this.start();
                }
                start() {
                    (history.scrollRestoration = "manual"),
                        (q.fade = document.querySelector(".fade")),
                        An.set(document.querySelectorAll(".transition-image"), { autoAlpha: 0 }),
                        this.addCustomSplitting(),
                        this.initSmoothScroll(),
                        this.initTaxi(),
                        (this.loader = new Tl()),
                        (this.menu = new bl()),
                        (this.lazyLoad = new (s())()),
                        (this.header = new xl()),
                        this.events(),
                        this.updateLinks(),
                        this.addConsoleBrand(),
                        requestAnimationFrame(this.update);
                }
                initSmoothScroll() {
                    q.smoothScroll && q.smoothScroll.destroy(),
                        (q.smoothScroll = new _l({ easing: (t) => 1 - Math.pow(1 - t, 5), wheelEventsTarget: document.body })),
                        (window.lenis = q.smoothScroll),
                        q.smoothScroll.on("scroll", (t) => {
                            this.scroll(t);
                        }),
                        An.ticker.add((t) => {
                            lenis.raf(1e3 * t);
                        }),
                        An.ticker.lagSmoothing(0);
                }
                addCustomSplitting() {
                    wl().add({
                        by: "wrapLinesChars",
                        key: "linesChars",
                        depends: ["lines"],
                        split: (t, e, i) => {
                            const r = [];
                            return (
                                (t.innerHTML = ""),
                                i.lines.forEach((e, i) => {
                                    const n = document.createElement("div");
                                    n.classList.add("w-line"),
                                        e.forEach((t, i) => {
                                            const r = t.innerText.split("");
                                            if (
                                                ((t.innerHTML = ""),
                                                    r.forEach((e) => {
                                                        const i = document.createElement("span");
                                                        i.classList.add("char"), (i.dataset.char = e), (i.innerText = e), t.appendChild(i);
                                                    }),
                                                    n.appendChild(t),
                                                    i < e.length - 1)
                                            ) {
                                                const t = document.createElement("span");
                                                t.classList.add("whitespace"), (t.innerHTML = " "), n.appendChild(t);
                                            }
                                        }),
                                        t.appendChild(n),
                                        (r[i] = n);
                                }),
                                r
                            );
                        },
                    });
                }
                initTaxi() {
                    (this.taxi = new I({
                        links: "a:not([target]):not([href^=\\#]):not([data-taxi-ignore]):not(.ab-item)",
                        reloadJsFilter: (t) => void 0 !== t.dataset.taxiReload,
                        removeOldContent: q.detect.isMobile,
                        transitions: { default: q.detect.isMobile ? Ol : Pl },
                        renderers: { default: Ll },
                    })),
                        (this.currentRenderer = this.taxi.currentCacheEntry.renderer),
                        (q.currentRenderer = this.currentRenderer);
                }
                reloadTartaucitronServices() {
                    if (!window.tarteaucitron) return;
                    const t = document.body.querySelectorAll(".tarteaucitronAllow");
                    for (let e = 0; e < t.length; e++)
                        window.tarteaucitron.addClickEventToElement(t[e], function () {
                            window.tarteaucitron.userInterface.respond(this, !0);
                        });
                }
                resize() {
                    (q.w = { w: window.innerWidth, h: window.innerHeight }),
                        q.w.w !== this.oldWindowWidth && (q.detect.isMobile && document.documentElement.style.setProperty("--wh", q.w.h / 100 + "px"), this.currentRenderer.resizeX()),
                        this.currentRenderer.resize(),
                        (this.oldWindowWidth = q.w.w);
                }
                scroll(t) {
                    (q.currentScroll = window.scrollY), this.currentRenderer.scroll(t);
                }
                update() {
                    this.currentRenderer.loop(), requestAnimationFrame(this.update);
                }
                events() {
                    window.addEventListener("resize", this.resizeDebounced),
                        window.addEventListener("orientationchange", this.resize),
                        window.addEventListener("wheel", this.scrollThrottled),
                        window.addEventListener("wheel", this.scrollDebounced),
                        this.taxi.on("NAVIGATE_IN", (t) => {
                            let { to: e } = t;
                            (this.currentRenderer = e.renderer), (q.currentRenderer = this.currentRenderer);
                        }),
                        this.taxi.on("NAVIGATE_OUT", (t) => {
                            let { location: e } = t;
                            this.menu.onPageChange(e, !0);
                        }),
                        this.taxi.on("NAVIGATE_END", (t) => {
                            let { to: e } = t;
                            this.header.onPageChange(e), this.updateTracking(e), this.reloadTartaucitronServices(), this.updateLinks(), this.lazyLoad.update();
                        });
                }
                updateTracking(t) {
                    void 0 !== window.gtag && window.gtag("event", "page_view", { page_path: window.location.pathname, page_title: t.page.title, page_location: window.location.href });
                }
                updateLinks() {
                    (this.links = document.body.querySelectorAll("a")), this.siteUrl || (this.siteUrl = "http://starter.localhost/");
                    for (let t = 0; t < this.links.length; t++) {
                        const e = this.links[t];
                        e.href.indexOf(this.siteUrl) > -1 && (e.href = `${window.location.origin}/${e.href.split(this.siteUrl)[1]}`);
                    }
                }
                addConsoleBrand() {
                    console.log("\n %c \u2726 Merci Beaucoup \u2726 ", "background: #00F; color: #fffaf5; padding: 5px 0; margin-right: 5px;", "https://beaucoup.studio/ \n\n");
                }
            }
            class zl {
                constructor() {
                    (this.grid = document.querySelector(".debug-grid")), this.grid && this.addEvents();
                }
                addEvents() {
                    document.addEventListener("keydown", (t) => {
                        ("g" !== t.key && "G" !== t.key) || this.grid.classList.toggle("opacity-0");
                    });
                }
            }
            (0, r.Z)(async (t) => {
                t && console.error(t),
                    document.fonts.ready.then(() => {
                        new Il();
                    }),
                    new zl();
            });
        },
        "./styles/app.css": () => { },
        "../node_modules/splitting/dist/splitting.js": function (t) {
            t.exports = (function () {
                "use strict";
                var t = document,
                    e = t.createTextNode.bind(t);
                function i(t, e, i) {
                    t.style.setProperty(e, i);
                }
                function r(t, e) {
                    return t.appendChild(e);
                }
                function n(e, i, n, s) {
                    var o = t.createElement("span");
                    return i && (o.className = i), n && (!s && o.setAttribute("data-" + i, n), (o.textContent = n)), (e && r(e, o)) || o;
                }
                function s(t, e) {
                    return t.getAttribute("data-" + e);
                }
                function o(e, i) {
                    return e && 0 != e.length ? (e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (i || t).querySelectorAll(e))) : [];
                }
                function a(t) {
                    for (var e = []; t--;) e[t] = [];
                    return e;
                }
                function l(t, e) {
                    t && t.some(e);
                }
                function h(t) {
                    return function (e) {
                        return t[e];
                    };
                }
                function c(t, e, r) {
                    var n = "--" + e,
                        s = n + "-index";
                    l(r, function (t, e) {
                        Array.isArray(t)
                            ? l(t, function (t) {
                                i(t, s, e);
                            })
                            : i(t, s, e);
                    }),
                        i(t, n + "-total", r.length);
                }
                var u = {};
                function d(t, e, i) {
                    var r = i.indexOf(t);
                    if (-1 == r)
                        i.unshift(t),
                            l(u[t].depends, function (e) {
                                d(e, t, i);
                            });
                    else {
                        var n = i.indexOf(e);
                        i.splice(r, 1), i.splice(n, 0, t);
                    }
                    return i;
                }
                function p(t, e, i, r) {
                    return { by: t, depends: e, key: i, split: r };
                }
                function f(t) {
                    return d(t, 0, []).map(h(u));
                }
                function m(t) {
                    u[t.by] = t;
                }
                function g(t, i, s, a, h) {
                    t.normalize();
                    var c = [],
                        u = document.createDocumentFragment();
                    a && c.push(t.previousSibling);
                    var d = [];
                    return (
                        o(t.childNodes).some(function (t) {
                            if (!t.tagName || t.hasChildNodes()) {
                                if (t.childNodes && t.childNodes.length) return d.push(t), void c.push.apply(c, g(t, i, s, a, h));
                                var r = t.wholeText || "",
                                    o = r.trim();
                                o.length &&
                                    (" " === r[0] && d.push(e(" ")),
                                        l(o.split(s), function (t, e) {
                                            e && h && d.push(n(u, "whitespace", " ", h));
                                            var r = n(u, i, t);
                                            c.push(r), d.push(r);
                                        }),
                                        " " === r[r.length - 1] && d.push(e(" ")));
                            } else d.push(t);
                        }),
                        l(d, function (t) {
                            r(u, t);
                        }),
                        (t.innerHTML = ""),
                        r(t, u),
                        c
                    );
                }
                var v = 0;
                function _(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                }
                var y = "words",
                    w = p(y, v, "word", function (t) {
                        return g(t, "word", /\s+/, 0, 1);
                    }),
                    b = "chars",
                    x = p(b, [y], "char", function (t, e, i) {
                        var r = [];
                        return (
                            l(i[y], function (t, i) {
                                r.push.apply(r, g(t, "char", "", e.whitespace && i));
                            }),
                            r
                        );
                    });
                function T(t) {
                    var e = (t = t || {}).key;
                    return o(t.target || "[data-splitting]").map(function (i) {
                        var r = i["\u{1f34c}"];
                        if (!t.force && r) return r;
                        r = i["\u{1f34c}"] = { el: i };
                        var n = f(t.by || s(i, "splitting") || b),
                            o = _({}, t);
                        return (
                            l(n, function (t) {
                                if (t.split) {
                                    var n = t.by,
                                        s = (e ? "-" + e : "") + t.key,
                                        a = t.split(i, o, r);
                                    s && c(i, s, a), (r[n] = a), i.classList.add(n);
                                }
                            }),
                            i.classList.add("splitting"),
                            r
                        );
                    });
                }
                function S(t) {
                    var e = ((t = t || {}).target = n());
                    return (e.innerHTML = t.content), T(t), e.outerHTML;
                }
                function E(t, e, i) {
                    var r = o(e.matching || t.children, t),
                        n = {};
                    return (
                        l(r, function (t) {
                            var e = Math.round(t[i]);
                            (n[e] || (n[e] = [])).push(t);
                        }),
                        Object.keys(n).map(Number).sort($).map(h(n))
                    );
                }
                function $(t, e) {
                    return t - e;
                }
                (T.html = S), (T.add = m);
                var M = p("lines", [y], "line", function (t, e, i) {
                    return E(t, { matching: i[y] }, "offsetTop");
                }),
                    k = p("items", v, "item", function (t, e) {
                        return o(e.matching || t.children, t);
                    }),
                    C = p("rows", v, "row", function (t, e) {
                        return E(t, e, "offsetTop");
                    }),
                    A = p("cols", v, "col", function (t, e) {
                        return E(t, e, "offsetLeft");
                    }),
                    L = p("grid", ["rows", "cols"]),
                    P = "layout",
                    O = p(P, v, v, function (t, e) {
                        var a = (e.rows = +(e.rows || s(t, "rows") || 1)),
                            l = (e.columns = +(e.columns || s(t, "columns") || 1));
                        if (((e.image = e.image || s(t, "image") || t.currentSrc || t.src), e.image)) {
                            var h = o("img", t)[0];
                            e.image = h && (h.currentSrc || h.src);
                        }
                        e.image && i(t, "background-image", "url(" + e.image + ")");
                        for (var c = a * l, u = [], d = n(v, "cell-grid"); c--;) {
                            var p = n(d, "cell");
                            n(p, "cell-inner"), u.push(p);
                        }
                        return r(t, d), u;
                    }),
                    I = p("cellRows", [P], "row", function (t, e, i) {
                        var r = e.rows,
                            n = a(r);
                        return (
                            l(i[P], function (t, e, i) {
                                n[Math.floor(e / (i.length / r))].push(t);
                            }),
                            n
                        );
                    }),
                    z = p("cellColumns", [P], "col", function (t, e, i) {
                        var r = e.columns,
                            n = a(r);
                        return (
                            l(i[P], function (t, e) {
                                n[e % r].push(t);
                            }),
                            n
                        );
                    }),
                    R = p("cells", ["cellRows", "cellColumns"], "cell", function (t, e, i) {
                        return i[P];
                    });
                return m(w), m(x), m(M), m(k), m(C), m(A), m(L), m(O), m(I), m(z), m(R), T;
            })();
        },
        "../node_modules/vanilla-lazyload/dist/lazyload.min.js": function (t) {
            t.exports = (function () {
                "use strict";
                function t() {
                    return (
                        (t =
                            Object.assign ||
                            function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var i = arguments[e];
                                    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
                                }
                                return t;
                            }),
                        t.apply(this, arguments)
                    );
                }
                var e = "undefined" != typeof window,
                    i = (e && !("onscroll" in window)) || ("undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
                    r = e && "IntersectionObserver" in window,
                    n = e && "classList" in document.createElement("p"),
                    s = e && window.devicePixelRatio > 1,
                    o = {
                        elements_selector: ".lazy",
                        container: i || e ? document : null,
                        threshold: 300,
                        thresholds: null,
                        data_src: "src",
                        data_srcset: "srcset",
                        data_sizes: "sizes",
                        data_bg: "bg",
                        data_bg_hidpi: "bg-hidpi",
                        data_bg_multi: "bg-multi",
                        data_bg_multi_hidpi: "bg-multi-hidpi",
                        data_bg_set: "bg-set",
                        data_poster: "poster",
                        class_applied: "applied",
                        class_loading: "loading",
                        class_loaded: "loaded",
                        class_error: "error",
                        class_entered: "entered",
                        class_exited: "exited",
                        unobserve_completed: !0,
                        unobserve_entered: !1,
                        cancel_on_exit: !0,
                        callback_enter: null,
                        callback_exit: null,
                        callback_applied: null,
                        callback_loading: null,
                        callback_loaded: null,
                        callback_error: null,
                        callback_finish: null,
                        callback_cancel: null,
                        use_native: !1,
                        restore_on_error: !1,
                    },
                    a = function (e) {
                        return t({}, o, e);
                    },
                    l = function (t, e) {
                        var i,
                            r = "LazyLoad::Initialized",
                            n = new t(e);
                        try {
                            i = new CustomEvent(r, { detail: { instance: n } });
                        } catch (t) {
                            (i = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, { instance: n });
                        }
                        window.dispatchEvent(i);
                    },
                    h = "src",
                    c = "srcset",
                    u = "sizes",
                    d = "poster",
                    p = "llOriginalAttrs",
                    f = "data",
                    m = "loading",
                    g = "loaded",
                    v = "applied",
                    _ = "error",
                    y = "native",
                    w = "data-",
                    b = "ll-status",
                    x = function (t, e) {
                        return t.getAttribute(w + e);
                    },
                    T = function (t) {
                        return x(t, b);
                    },
                    S = function (t, e) {
                        return (function (t, e, i) {
                            var r = "data-ll-status";
                            null !== i ? t.setAttribute(r, i) : t.removeAttribute(r);
                        })(t, 0, e);
                    },
                    E = function (t) {
                        return S(t, null);
                    },
                    $ = function (t) {
                        return null === T(t);
                    },
                    M = function (t) {
                        return T(t) === y;
                    },
                    k = [m, g, v, _],
                    C = function (t, e, i, r) {
                        t && "function" == typeof t && (void 0 === r ? (void 0 === i ? t(e) : t(e, i)) : t(e, i, r));
                    },
                    A = function (t, e) {
                        n ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
                    },
                    L = function (t, e) {
                        n
                            ? t.classList.remove(e)
                            : (t.className = t.className
                                .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                                .replace(/^\s+/, "")
                                .replace(/\s+$/, ""));
                    },
                    P = function (t) {
                        return t.llTempImage;
                    },
                    O = function (t, e) {
                        if (e) {
                            var i = e._observer;
                            i && i.unobserve(t);
                        }
                    },
                    I = function (t, e) {
                        t && (t.loadingCount += e);
                    },
                    z = function (t, e) {
                        t && (t.toLoadCount = e);
                    },
                    R = function (t) {
                        for (var e, i = [], r = 0; (e = t.children[r]); r += 1) "SOURCE" === e.tagName && i.push(e);
                        return i;
                    },
                    D = function (t, e) {
                        var i = t.parentNode;
                        i && "PICTURE" === i.tagName && R(i).forEach(e);
                    },
                    q = function (t, e) {
                        R(t).forEach(e);
                    },
                    F = [h],
                    N = [h, d],
                    B = [h, c, u],
                    W = [f],
                    Y = function (t) {
                        return !!t[p];
                    },
                    X = function (t) {
                        return t[p];
                    },
                    H = function (t) {
                        return delete t[p];
                    },
                    U = function (t, e) {
                        if (!Y(t)) {
                            var i = {};
                            e.forEach(function (e) {
                                i[e] = t.getAttribute(e);
                            }),
                                (t[p] = i);
                        }
                    },
                    V = function (t, e) {
                        if (Y(t)) {
                            var i = X(t);
                            e.forEach(function (e) {
                                !(function (t, e, i) {
                                    i ? t.setAttribute(e, i) : t.removeAttribute(e);
                                })(t, e, i[e]);
                            });
                        }
                    },
                    j = function (t, e, i) {
                        A(t, e.class_applied), S(t, v), i && (e.unobserve_completed && O(t, e), C(e.callback_applied, t, i));
                    },
                    G = function (t, e, i) {
                        A(t, e.class_loading), S(t, m), i && (I(i, 1), C(e.callback_loading, t, i));
                    },
                    J = function (t, e, i) {
                        i && t.setAttribute(e, i);
                    },
                    K = function (t, e) {
                        J(t, u, x(t, e.data_sizes)), J(t, c, x(t, e.data_srcset)), J(t, h, x(t, e.data_src));
                    },
                    Z = {
                        IMG: function (t, e) {
                            D(t, function (t) {
                                U(t, B), K(t, e);
                            }),
                                U(t, B),
                                K(t, e);
                        },
                        IFRAME: function (t, e) {
                            U(t, F), J(t, h, x(t, e.data_src));
                        },
                        VIDEO: function (t, e) {
                            q(t, function (t) {
                                U(t, F), J(t, h, x(t, e.data_src));
                            }),
                                U(t, N),
                                J(t, d, x(t, e.data_poster)),
                                J(t, h, x(t, e.data_src)),
                                t.load();
                        },
                        OBJECT: function (t, e) {
                            U(t, W), J(t, f, x(t, e.data_src));
                        },
                    },
                    Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
                    tt = function (t, e) {
                        !e ||
                            (function (t) {
                                return t.loadingCount > 0;
                            })(e) ||
                            (function (t) {
                                return t.toLoadCount > 0;
                            })(e) ||
                            C(t.callback_finish, e);
                    },
                    et = function (t, e, i) {
                        t.addEventListener(e, i), (t.llEvLisnrs[e] = i);
                    },
                    it = function (t, e, i) {
                        t.removeEventListener(e, i);
                    },
                    rt = function (t) {
                        return !!t.llEvLisnrs;
                    },
                    nt = function (t) {
                        if (rt(t)) {
                            var e = t.llEvLisnrs;
                            for (var i in e) {
                                var r = e[i];
                                it(t, i, r);
                            }
                            delete t.llEvLisnrs;
                        }
                    },
                    st = function (t, e, i) {
                        !(function (t) {
                            delete t.llTempImage;
                        })(t),
                            I(i, -1),
                            (function (t) {
                                t && (t.toLoadCount -= 1);
                            })(i),
                            L(t, e.class_loading),
                            e.unobserve_completed && O(t, i);
                    },
                    ot = function (t, e, i) {
                        var r = P(t) || t;
                        rt(r) ||
                            (function (t, e, i) {
                                rt(t) || (t.llEvLisnrs = {});
                                var r = "VIDEO" === t.tagName ? "loadeddata" : "load";
                                et(t, r, e), et(t, "error", i);
                            })(
                                r,
                                function (n) {
                                    !(function (t, e, i, r) {
                                        var n = M(e);
                                        st(e, i, r), A(e, i.class_loaded), S(e, g), C(i.callback_loaded, e, r), n || tt(i, r);
                                    })(0, t, e, i),
                                        nt(r);
                                },
                                function (n) {
                                    !(function (t, e, i, r) {
                                        var n = M(e);
                                        st(e, i, r), A(e, i.class_error), S(e, _), C(i.callback_error, e, r), i.restore_on_error && V(e, B), n || tt(i, r);
                                    })(0, t, e, i),
                                        nt(r);
                                }
                            );
                    },
                    at = function (t, e, i) {
                        !(function (t) {
                            return Q.indexOf(t.tagName) > -1;
                        })(t)
                            ? (function (t, e, i) {
                                !(function (t) {
                                    t.llTempImage = document.createElement("IMG");
                                })(t),
                                    ot(t, e, i),
                                    (function (t) {
                                        Y(t) || (t[p] = { backgroundImage: t.style.backgroundImage });
                                    })(t),
                                    (function (t, e, i) {
                                        var r = x(t, e.data_bg),
                                            n = x(t, e.data_bg_hidpi),
                                            o = s && n ? n : r;
                                        o && ((t.style.backgroundImage = 'url("'.concat(o, '")')), P(t).setAttribute(h, o), G(t, e, i));
                                    })(t, e, i),
                                    (function (t, e, i) {
                                        var r = x(t, e.data_bg_multi),
                                            n = x(t, e.data_bg_multi_hidpi),
                                            o = s && n ? n : r;
                                        o && ((t.style.backgroundImage = o), j(t, e, i));
                                    })(t, e, i),
                                    (function (t, e, i) {
                                        var r = x(t, e.data_bg_set);
                                        if (r) {
                                            var n = r.split("|"),
                                                s = n.map(function (t) {
                                                    return "image-set(".concat(t, ")");
                                                });
                                            (t.style.backgroundImage = s.join()),
                                                "" === t.style.backgroundImage &&
                                                ((s = n.map(function (t) {
                                                    return "-webkit-image-set(".concat(t, ")");
                                                })),
                                                    (t.style.backgroundImage = s.join())),
                                                j(t, e, i);
                                        }
                                    })(t, e, i);
                            })(t, e, i)
                            : (function (t, e, i) {
                                ot(t, e, i),
                                    (function (t, e, i) {
                                        var r = Z[t.tagName];
                                        r && (r(t, e), G(t, e, i));
                                    })(t, e, i);
                            })(t, e, i);
                    },
                    lt = function (t) {
                        t.removeAttribute(h), t.removeAttribute(c), t.removeAttribute(u);
                    },
                    ht = function (t) {
                        D(t, function (t) {
                            V(t, B);
                        }),
                            V(t, B);
                    },
                    ct = {
                        IMG: ht,
                        IFRAME: function (t) {
                            V(t, F);
                        },
                        VIDEO: function (t) {
                            q(t, function (t) {
                                V(t, F);
                            }),
                                V(t, N),
                                t.load();
                        },
                        OBJECT: function (t) {
                            V(t, W);
                        },
                    },
                    ut = function (t, e) {
                        (function (t) {
                            var e = ct[t.tagName];
                            e
                                ? e(t)
                                : (function (t) {
                                    if (Y(t)) {
                                        var e = X(t);
                                        t.style.backgroundImage = e.backgroundImage;
                                    }
                                })(t);
                        })(t),
                            (function (t, e) {
                                $(t) || M(t) || (L(t, e.class_entered), L(t, e.class_exited), L(t, e.class_applied), L(t, e.class_loading), L(t, e.class_loaded), L(t, e.class_error));
                            })(t, e),
                            E(t),
                            H(t);
                    },
                    dt = ["IMG", "IFRAME", "VIDEO"],
                    pt = function (t) {
                        return t.use_native && "loading" in HTMLImageElement.prototype;
                    },
                    ft = function (t, e, i) {
                        t.forEach(function (t) {
                            return (function (t) {
                                return t.isIntersecting || t.intersectionRatio > 0;
                            })(t)
                                ? (function (t, e, i, r) {
                                    var n = (function (t) {
                                        return k.indexOf(T(t)) >= 0;
                                    })(t);
                                    S(t, "entered"),
                                        A(t, i.class_entered),
                                        L(t, i.class_exited),
                                        (function (t, e, i) {
                                            e.unobserve_entered && O(t, i);
                                        })(t, i, r),
                                        C(i.callback_enter, t, e, r),
                                        n || at(t, i, r);
                                })(t.target, t, e, i)
                                : (function (t, e, i, r) {
                                    $(t) ||
                                        (A(t, i.class_exited),
                                            (function (t, e, i, r) {
                                                i.cancel_on_exit &&
                                                    (function (t) {
                                                        return T(t) === m;
                                                    })(t) &&
                                                    "IMG" === t.tagName &&
                                                    (nt(t),
                                                        (function (t) {
                                                            D(t, function (t) {
                                                                lt(t);
                                                            }),
                                                                lt(t);
                                                        })(t),
                                                        ht(t),
                                                        L(t, i.class_loading),
                                                        I(r, -1),
                                                        E(t),
                                                        C(i.callback_cancel, t, e, r));
                                            })(t, e, i, r),
                                            C(i.callback_exit, t, e, r));
                                })(t.target, t, e, i);
                        });
                    },
                    mt = function (t) {
                        return Array.prototype.slice.call(t);
                    },
                    gt = function (t) {
                        return t.container.querySelectorAll(t.elements_selector);
                    },
                    vt = function (t) {
                        return (function (t) {
                            return T(t) === _;
                        })(t);
                    },
                    _t = function (t, e) {
                        return (function (t) {
                            return mt(t).filter($);
                        })(t || gt(e));
                    },
                    yt = function (t, i) {
                        var n = a(t);
                        (this._settings = n),
                            (this.loadingCount = 0),
                            (function (t, e) {
                                r &&
                                    !pt(t) &&
                                    (e._observer = new IntersectionObserver(
                                        function (i) {
                                            ft(i, t, e);
                                        },
                                        (function (t) {
                                            return { root: t.container === document ? null : t.container, rootMargin: t.thresholds || t.threshold + "px" };
                                        })(t)
                                    ));
                            })(n, this),
                            (function (t, i) {
                                e &&
                                    ((i._onlineHandler = function () {
                                        !(function (t, e) {
                                            var i;
                                            ((i = gt(t)), mt(i).filter(vt)).forEach(function (e) {
                                                L(e, t.class_error), E(e);
                                            }),
                                                e.update();
                                        })(t, i);
                                    }),
                                        window.addEventListener("online", i._onlineHandler));
                            })(n, this),
                            this.update(i);
                    };
                return (
                    (yt.prototype = {
                        update: function (t) {
                            var e,
                                n,
                                s = this._settings,
                                o = _t(t, s);
                            z(this, o.length),
                                !i && r
                                    ? pt(s)
                                        ? (function (t, e, i) {
                                            t.forEach(function (t) {
                                                -1 !== dt.indexOf(t.tagName) &&
                                                    (function (t, e, i) {
                                                        t.setAttribute("loading", "lazy"),
                                                            ot(t, e, i),
                                                            (function (t, e) {
                                                                var i = Z[t.tagName];
                                                                i && i(t, e);
                                                            })(t, e),
                                                            S(t, y);
                                                    })(t, e, i);
                                            }),
                                                z(i, 0);
                                        })(o, s, this)
                                        : ((n = o),
                                            (function (t) {
                                                t.disconnect();
                                            })((e = this._observer)),
                                            (function (t, e) {
                                                e.forEach(function (e) {
                                                    t.observe(e);
                                                });
                                            })(e, n))
                                    : this.loadAll(o);
                        },
                        destroy: function () {
                            this._observer && this._observer.disconnect(),
                                e && window.removeEventListener("online", this._onlineHandler),
                                gt(this._settings).forEach(function (t) {
                                    H(t);
                                }),
                                delete this._observer,
                                delete this._settings,
                                delete this._onlineHandler,
                                delete this.loadingCount,
                                delete this.toLoadCount;
                        },
                        loadAll: function (t) {
                            var e = this,
                                i = this._settings;
                            _t(t, i).forEach(function (t) {
                                O(t, e), at(t, i, e);
                            });
                        },
                        restoreAll: function () {
                            var t = this._settings;
                            gt(t).forEach(function (e) {
                                ut(e, t);
                            });
                        },
                    }),
                    (yt.load = function (t, e) {
                        var i = a(e);
                        at(t, i);
                    }),
                    (yt.resetStatus = function (t) {
                        E(t);
                    }),
                    e &&
                    (function (t, e) {
                        if (e)
                            if (e.length) for (var i, r = 0; (i = e[r]); r += 1) l(t, i);
                            else l(t, e);
                    })(yt, window.lazyLoadOptions),
                    yt
                );
            })();
        },
        "../node_modules/@roots/bud-client/lib/dom-ready.js": (t, e) => {
            "use strict";
            e.Z = (t) => {
                window.requestAnimationFrame(async function e() {
                    document.body ? await t() : window.requestAnimationFrame(e);
                });
            };
        },
    },
    (t) => {
        var e = (e) => t((t.s = e));
        e("./scripts/app.js"), e("./styles/app.css");
    },
]);
