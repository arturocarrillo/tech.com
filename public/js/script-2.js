! function($, h) {
	"use strict";

	function r(p, f, m, t, e) {
		function i() {
			var n, s, r, a;
			C = 1 < $.devicePixelRatio, m = o(m), 0 <= f.delay && setTimeout(function() {
				l(!0)
			}, f.delay), (f.delay < 0 || f.combined) && (t.e = (n = f.throttle, s = function(t) {
				"resize" === t.type && (w = x = -1), l(t.all)
			}, a = 0, function(t, e) {
				function i() {
					a = +new Date, s.call(p, t)
				}
				var o = +new Date - a;
				r && clearTimeout(r), n < o || !f.enableThrottle || e ? i() : r = setTimeout(i, n - o)
			}), t.a = function(t) {
				t = o(t), m.push.apply(m, t)
			}, t.g = function() {
				return m = L(m).filter(function() {
					return !L(this).data(f.loadedName)
				})
			}, t.f = function(t) {
				for (var e = 0; e < t.length; e++) {
					var i = m.filter(function() {
						return this === t[e]
					});
					i.length && l(!1, i)
				}
			}, l(), L(f.appendScroll).on("scroll." + e + " resize." + e, t.e))
		}

		function o(t) {
			for (var e = f.defaultImage, i = f.placeholder, o = f.imageBase, n = f.srcsetAttribute, s = f.loaderAttribute, r = f._f || {}, a = 0, l = (t = L(t).filter(function() {
					var t = L(this),
						e = g(this);
					return !t.data(f.handledName) && (t.attr(f.attribute) || t.attr(n) || t.attr(s) || r[e] !== h)
				}).data("plugin_" + f.name, p)).length; a < l; a++) {
				var d = L(t[a]),
					c = g(t[a]),
					u = d.attr(f.imageBaseAttribute) || o;
				c === k && u && d.attr(n) && d.attr(n, function(t, e) {
					if (e) {
						var i = t.split(",");
						t = "";
						for (var o = 0, n = i.length; o < n; o++) t += e + i[o].trim() + (o !== n - 1 ? "," : "")
					}
					return t
				}(d.attr(n), u)), r[c] === h || d.attr(s) || d.attr(s, r[c]), c === k && e && !d.attr(T) ? d.attr(T, e) : c === k || !i || d.css(I) && "none" !== d.css(I) || d.css(I, "url('" + i + "')")
			}
			return t
		}

		function l(t, e) {
			if (!m.length) return f.autoDestroy && p.destroy(), 0;
			for (var i, o, n, s, r, a = e || m, l = !1, d = f.imageBase || "", c = f.srcsetAttribute, u = f.handledName, h = 0; h < a.length; h++)(t || e || (o = a[h], n = r = s = n = void 0, n = o.getBoundingClientRect(), s = f.scrollDirection, r = f.threshold, o = (0 <= x ? x : x = L($).height()) + r > n.top && -r < n.bottom, n = (0 <= w ? w : w = L($).width()) + r > n.left && -r < n.right, "vertical" === s ? o : ("horizontal" === s || o) && n)) && (i = L(a[h]), r = g(a[h]), s = i.attr(f.attribute), o = i.attr(f.imageBaseAttribute) || d, n = i.attr(f.loaderAttribute), i.data(u) || f.visibleOnly && !i.is(":visible") || !((s || i.attr(c)) && (r === k && (o + s !== i.attr(T) || i.attr(c) !== i.attr(_)) || r !== k && o + s !== i.css(I)) || n) || (l = !0, i.data(u, !0), function(e, t, i, o) {
				++b;
				var n = function() {
					y("onError", e), v(), n = L.noop
				};
				y("beforeLoad", e);
				var s, r, a = f.attribute,
					l = f.srcsetAttribute,
					d = f.sizesAttribute,
					c = f.retinaAttribute,
					u = f.removeAttribute,
					h = f.loadedName,
					p = e.attr(c);
				o ? (s = function() {
					u && e.removeAttr(f.loaderAttribute), e.data(h, !0), y(S, e), setTimeout(v, 1), s = L.noop
				}, e.off(z).one(z, n).one(E, s), y(o, e, function(t) {
					t ? (e.off(E), s()) : (e.off(z), n())
				}) || e.trigger(z)) : ((r = L(new Image)).one(z, n).one(E, function() {
					e.hide(), t === k ? e.attr(A, r.attr(A)).attr(_, r.attr(_)).attr(T, r.attr(T)) : e.css(I, "url('" + r.attr(T) + "')"), e[f.effect](f.effectTime), u && (e.removeAttr(a + " " + l + " " + c + " " + f.imageBaseAttribute), d !== A && e.removeAttr(d)), e.data(h, !0), y(S, e), r.remove(), v()
				}), p = (C && p ? p : e.attr(a)) || "", r.attr(A, e.attr(d)).attr(_, e.attr(l)).attr(T, p ? i + p : null), r.complete && r.trigger(E))
			}(i, r, o, n)));
			l && (m = L(m).filter(function() {
				return !L(this).data(u)
			}))
		}

		function g(t) {
			return t.tagName.toLowerCase()
		}

		function v() {
			--b, m.length || b || y("onFinishedAll")
		}

		function y(t) {
			return (t = f[t]) && (t.apply(p, [].slice.call(arguments, 1)), 1)
		}
		var b = 0,
			w = -1,
			x = -1,
			C = !1,
			S = "afterLoad",
			E = "load",
			z = "error",
			k = "img",
			T = "src",
			_ = "srcset",
			A = "sizes",
			I = "background-image";
		"event" === f.bind || n ? i() : L($).on(E + "." + e, i)
	}

	function d(t, e) {
		var i = this,
			o = L.extend({}, i.config, e),
			n = {},
			s = o.name + "-" + ++a;
		return i.config = function(t, e) {
			return e === h ? o[t] : (o[t] = e, i)
		}, i.addItems = function(t) {
			return n.a && n.a("string" === L.type(t) ? L(t) : t), i
		}, i.getItems = function() {
			return n.g ? n.g() : {}
		}, i.update = function(t) {
			return n.e && n.e({}, !t), i
		}, i.force = function(t) {
			return n.f && n.f("string" === L.type(t) ? L(t) : t), i
		}, i.loadAll = function() {
			return n.e && n.e({
				all: !0
			}, !0), i
		}, i.destroy = function() {
			return L(o.appendScroll).off("." + s, n.e), L($).off("." + s), n = {}, h
		}, r(i, o, t, n, s), o.chainable ? t : i
	}
	var L = $.jQuery || $.Zepto,
		a = 0,
		n = !1;
	L.fn.Lazy = L.fn.lazy = function(t) {
		return new d(this, t)
	}, L.Lazy = L.lazy = function(t, e, i) {
		if (L.isFunction(e) && (i = e, e = []), L.isFunction(i)) {
			t = L.isArray(t) ? t : [t], e = L.isArray(e) ? e : [e];
			for (var o = d.prototype.config, n = o._f || (o._f = {}), s = 0, r = t.length; s < r; s++) o[t[s]] !== h && !L.isFunction(o[t[s]]) || (o[t[s]] = i);
			for (var a = 0, l = e.length; a < l; a++) n[e[a]] = t[0]
		}
	}, d.prototype.config = {
		name: "lazy",
		chainable: !0,
		autoDestroy: !0,
		bind: "load",
		threshold: 500,
		visibleOnly: !1,
		appendScroll: $,
		scrollDirection: "both",
		imageBase: null,
		defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
		placeholder: null,
		delay: -1,
		combined: !1,
		attribute: "data-src",
		srcsetAttribute: "data-srcset",
		sizesAttribute: "data-sizes",
		retinaAttribute: "data-retina",
		loaderAttribute: "data-loader",
		imageBaseAttribute: "data-imagebase",
		removeAttribute: !0,
		handledName: "handled",
		loadedName: "loaded",
		effect: "show",
		effectTime: 0,
		enableThrottle: !0,
		throttle: 250,
		beforeLoad: h,
		afterLoad: h,
		onError: h,
		onFinishedAll: h
	}, L($).on("load", function() {
		n = !0
	})
}(window),
function(s) {
	function r(t, e, i) {
		var o = t.prop("attributes"),
			n = s("<" + e + ">");
		return s.each(o, function(t, e) {
			"srcset" !== e.name && e.name !== d || (e.value = l(e.value, i)), n.attr(e.name, e.value)
		}), t.replaceWith(n), n
	}

	function a(t, e, i) {
		e = s("<img>").one("load", function() {
			i(!0)
		}).one("error", function() {
			i(!1)
		}).appendTo(t).attr("src", e);
		e.complete && e.load()
	}

	function l(t, e) {
		if (e) {
			var i = t.split(",");
			t = "";
			for (var o = 0, n = i.length; o < n; o++) t += e + i[o].trim() + (o !== n - 1 ? "," : "")
		}
		return t
	}
	var d = "data-src";
	s.lazy(["pic", "picture"], ["picture"], function(t, e) {
		var i, o, n;
		"picture" === t[0].tagName.toLowerCase() ? (i = t.find(d), o = t.find("data-img"), n = this.config("imageBase") || "", i.length ? (i.each(function() {
			r(s(this), "source", n)
		}), 1 === o.length ? ((o = r(o, "img", n)).on("load", function() {
			e(!0)
		}).on("error", function() {
			e(!1)
		}), o.attr("src", o.attr(d)), this.config("removeAttribute") && o.removeAttr(d)) : t.attr(d) ? (a(t, n + t.attr(d), e), this.config("removeAttribute") && t.removeAttr(d)) : e(!1)) : t.attr("data-srcset") ? (s("<source>").attr({
			media: t.attr("data-media"),
			sizes: t.attr("data-sizes"),
			type: t.attr("data-type"),
			srcset: l(t.attr("data-srcset"), n)
		}).appendTo(t), a(t, n + t.attr(d), e), this.config("removeAttribute") && t.removeAttr(d + " data-srcset data-media data-sizes data-type")) : e(!1)) : e(!1)
	})
}(window.jQuery || window.Zepto),
function(T) {
	T.isScrollToFixed = function(t) {
		return !!T(t).data("ScrollToFixed")
	}, T.ScrollToFixed = function(t, e) {
		var s = this;
		s.$el = T(t), s.el = t, s.$el.data("ScrollToFixed", s);
		var r, a, i, o, l = !1,
			d = s.$el,
			c = 0,
			u = 0,
			h = -1,
			p = -1,
			n = null;

		function f() {
			var t = s.options.limit;
			return t ? "function" == typeof t ? t.apply(d) : t : 0
		}

		function m() {
			return "fixed" === r
		}

		function g() {
			return "absolute" === r
		}

		function v() {
			return !(m() || g())
		}

		function y() {
			var t;
			m() || (t = d[0].getBoundingClientRect(), n.css({
				display: d.css("display"),
				width: t.width,
				height: t.height,
				float: d.css("float")
			}), cssOptions = {
				"z-index": s.options.zIndex,
				position: "fixed",
				top: -1 == s.options.bottom ? C() : "",
				bottom: -1 == s.options.bottom ? "" : s.options.bottom,
				"margin-left": "0px"
			}, s.options.dontSetWidth || (cssOptions.width = d.css("width")), d.css(cssOptions), d.addClass(s.options.baseClassName), s.options.className && d.addClass(s.options.className), r = "fixed")
		}

		function b() {
			var t = f(),
				e = u;
			s.options.removeOffsets && (e = "", t -= c), cssOptions = {
				position: "absolute",
				top: t,
				left: e,
				"margin-left": "0px",
				bottom: ""
			}, s.options.dontSetWidth || (cssOptions.width = d.css("width")), d.css(cssOptions), r = "absolute"
		}

		function w() {
			v() || (p = -1, n.css("display", "none"), d.css({
				"z-index": o,
				width: "",
				position: a,
				left: "",
				top: i,
				"margin-left": ""
			}), d.removeClass("scroll-to-fixed-fixed"), s.options.className && d.removeClass(s.options.className), r = null)
		}

		function x(t) {
			t != p && (d.css("left", u - t), p = t)
		}

		function C() {
			var t = s.options.marginTop;
			return t ? "function" == typeof t ? t.apply(d) : t : 0
		}

		function S() {
			var t, e, i, o, n;
			T.isScrollToFixed(d) && !d.is(":hidden") && (e = v(), (t = l) ? v() && (c = d.offset().top, u = d.offset().left) : (d.trigger("preUnfixed.ScrollToFixed"), w(), d.trigger("unfixed.ScrollToFixed"), p = -1, c = d.offset().top, u = d.offset().left, s.options.offsets && (u += d.offset().left - d.position().left), -1 == h && (h = u), r = d.css("position"), l = !0, -1 != s.options.bottom && (d.trigger("preFixed.ScrollToFixed"), y(), d.trigger("fixed.ScrollToFixed"))), i = T(window).scrollLeft(), o = T(window).scrollTop(), n = f(), s.options.minWidth && T(window).width() < s.options.minWidth || s.options.maxWidth && T(window).width() > s.options.maxWidth ? v() && t || (E(), d.trigger("preUnfixed.ScrollToFixed"), w(), d.trigger("unfixed.ScrollToFixed")) : -1 == s.options.bottom ? 0 < n && o >= n - C() ? e || g() && t || (E(), d.trigger("preAbsolute.ScrollToFixed"), b(), d.trigger("unfixed.ScrollToFixed")) : o >= c - C() ? (m() && t || (E(), d.trigger("preFixed.ScrollToFixed"), y(), p = -1, d.trigger("fixed.ScrollToFixed")), x(i)) : v() && t || (E(), d.trigger("preUnfixed.ScrollToFixed"), w(), d.trigger("unfixed.ScrollToFixed")) : 0 < n ? o + T(window).height() - d.outerHeight(!0) >= n - (C() || -(s.options.bottom || 0)) ? m() && (E(), d.trigger("preUnfixed.ScrollToFixed"), ("absolute" === a ? b : w)(), d.trigger("unfixed.ScrollToFixed")) : (m() || (E(), d.trigger("preFixed.ScrollToFixed"), y()), x(i), d.trigger("fixed.ScrollToFixed")) : x(i))
		}

		function E() {
			var t = d.css("position");
			"absolute" == t ? d.trigger("postAbsolute.ScrollToFixed") : "fixed" == t ? d.trigger("postFixed.ScrollToFixed") : d.trigger("postUnfixed.ScrollToFixed")
		}

		function z(t) {
			d.is(":visible") ? (l = !1, S()) : w()
		}

		function k(t) {
			window.requestAnimationFrame ? requestAnimationFrame(S) : S()
		}
		s.init = function() {
			s.options = T.extend({}, T.ScrollToFixed.defaultOptions, e), o = d.css("z-index"), s.$el.css("z-index", s.options.zIndex), n = T("<div />"), r = d.css("position"), a = d.css("position"), d.css("float"), i = d.css("top"), v() && s.$el.after(n), T(window).bind("resize.ScrollToFixed", z), T(window).bind("scroll.ScrollToFixed", k), "ontouchmove" in window && T(window).bind("touchmove.ScrollToFixed", S), s.options.preFixed && d.bind("preFixed.ScrollToFixed", s.options.preFixed), s.options.postFixed && d.bind("postFixed.ScrollToFixed", s.options.postFixed), s.options.preUnfixed && d.bind("preUnfixed.ScrollToFixed", s.options.preUnfixed), s.options.postUnfixed && d.bind("postUnfixed.ScrollToFixed", s.options.postUnfixed), s.options.preAbsolute && d.bind("preAbsolute.ScrollToFixed", s.options.preAbsolute), s.options.postAbsolute && d.bind("postAbsolute.ScrollToFixed", s.options.postAbsolute), s.options.fixed && d.bind("fixed.ScrollToFixed", s.options.fixed), s.options.unfixed && d.bind("unfixed.ScrollToFixed", s.options.unfixed), s.options.spacerClass && n.addClass(s.options.spacerClass), d.bind("resize.ScrollToFixed", function() {
				n.height(d.height())
			}), d.bind("scroll.ScrollToFixed", function() {
				d.trigger("preUnfixed.ScrollToFixed"), w(), d.trigger("unfixed.ScrollToFixed"), S()
			}), d.bind("detach.ScrollToFixed", function(t) {
				(t = (t = t) || window.event).preventDefault && t.preventDefault(), t.returnValue = !1, d.trigger("preUnfixed.ScrollToFixed"), w(), d.trigger("unfixed.ScrollToFixed"), T(window).unbind("resize.ScrollToFixed", z), T(window).unbind("scroll.ScrollToFixed", k), d.unbind(".ScrollToFixed"), n.remove(), s.$el.removeData("ScrollToFixed")
			}), z()
		}, s.init()
	}, T.ScrollToFixed.defaultOptions = {
		marginTop: 0,
		limit: 0,
		bottom: -1,
		zIndex: 1e3,
		baseClassName: "scroll-to-fixed-fixed"
	}, T.fn.scrollToFixed = function(t) {
		return this.each(function() {
			new T.ScrollToFixed(this, t)
		})
	}
}(jQuery),
function(l) {
	l.extend(l.easing, {
		spincrementEasing: function(t, e, i, o, n) {
			return e === n ? i + o : o * (1 - Math.pow(2, -10 * e / n)) + i
		}
	}), l.fn.spincrement = function(t) {
		function r(t, e) {
			if (t = t.toFixed(e), 0 < e && "." !== a.decimalPoint && (t = t.replace(".", a.decimalPoint)), a.thousandSeparator)
				for (; i.test(t);) t = t.replace(i, "$1" + a.thousandSeparator + "$2");
			return t
		}
		var a = l.extend({
				from: 0,
				to: null,
				decimalPlaces: null,
				decimalPoint: ".",
				thousandSeparator: ",",
				duration: 1e3,
				leeway: 50,
				easing: "spincrementEasing",
				fade: !0,
				complete: null
			}, t),
			i = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
		return this.each(function() {
			var e, i = l(this),
				t = a.from;
			i.attr("data-from") && (t = parseFloat(i.attr("data-from"))), e = i.attr("data-to") ? parseFloat(i.attr("data-to")) : null !== a.to ? a.to : (s = -1 < l.inArray(a.thousandSeparator, ["\\", "^", "$", "*", "+", "?", "."]) ? "\\" + a.thousandSeparator : a.thousandSeparator, o = new RegExp(s, "g"), parseFloat(i.text().replace(o, "")));
			var o, n, s = a.duration;
			a.leeway && (s += Math.round(a.duration * (2 * Math.random() - 1) * a.leeway / 100)), n = i.attr("data-dp") ? parseInt(i.attr("data-dp"), 10) : null !== a.decimalPlaces ? a.decimalPlaces : -1 < (o = i.text().indexOf(a.decimalPoint)) ? i.text().length - (o + 1) : 0, i.css("counter", t), a.fade && i.css("opacity", 0), i.animate({
				counter: e,
				opacity: 1
			}, {
				easing: a.easing,
				duration: s,
				step: function(t) {
					i.html(r(t * e, n))
				},
				complete: function() {
					i.css("counter", null), i.html(r(e, n)), a.complete && a.complete(i)
				}
			})
		})
	}
}(jQuery),
function() {
	var m, t, g, v, e, i;
	"undefined" != typeof window && window.addEventListener && (m = Object.create(null), g = function() {
		clearTimeout(t), t = setTimeout(e, 100)
	}, v = function() {}, e = function() {
		function o() {
			var t;
			0 === --n && (v(), window.addEventListener("resize", g, !1), window.addEventListener("orientationchange", g, !1), v = window.MutationObserver ? ((t = new MutationObserver(g)).observe(document.documentElement, {
				childList: !0,
				subtree: !0,
				attributes: !0
			}), function() {
				try {
					t.disconnect(), window.removeEventListener("resize", g, !1), window.removeEventListener("orientationchange", g, !1)
				} catch (t) {}
			}) : (document.documentElement.addEventListener("DOMSubtreeModified", g, !1), function() {
				document.documentElement.removeEventListener("DOMSubtreeModified", g, !1), window.removeEventListener("resize", g, !1), window.removeEventListener("orientationchange", g, !1)
			}))
		}

		function t(t) {
			return function() {
				!0 !== m[t.base] && (t.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + t.hash), t.useEl.hasAttribute("href") && t.useEl.setAttribute("href", "#" + t.hash))
			}
		}

		function e(t) {
			return function() {
				t.onerror = null, t.ontimeout = null, o()
			}
		}
		var i, n = 0;
		v();
		for (var s, r, a, l = document.getElementsByTagName("use"), d = 0; d < l.length; d += 1) {
			try {
				var c = l[d].getBoundingClientRect()
			} catch (t) {
				c = !1
			}
			var u = (h = (i = l[d].getAttribute("href") || l[d].getAttributeNS("http://www.w3.org/1999/xlink", "href") || l[d].getAttribute("xlink:href")) && i.split ? i.split("#") : ["", ""])[0],
				h = h[1],
				p = c && 0 === c.left && 0 === c.right && 0 === c.top && 0 === c.bottom;
			c && 0 === c.width && 0 === c.height && !p ? (l[d].hasAttribute("href") && l[d].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i), u.length && (!0 !== (i = m[u]) && setTimeout(t({
				useEl: l[d],
				base: u,
				hash: h
			}), 0), void 0 === i && (s = u, a = r = void 0, window.XMLHttpRequest && (r = new XMLHttpRequest, a = f(location), s = f(s), r = void 0 === r.withCredentials && "" !== s && s !== a ? XDomainRequest || void 0 : XMLHttpRequest), void 0 !== (h = r) && (i = new h, (m[u] = i).onload = function(i) {
				return function() {
					var t = document.body,
						e = document.createElement("x");
					i.onload = null, e.innerHTML = i.responseText, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t.insertBefore(e, t.firstChild)), o()
				}
			}(i), i.onerror = e(i), i.ontimeout = e(i), i.open("GET", u), i.send(), n += 1)))) : p ? u.length && m[u] && setTimeout(t({
				useEl: l[d],
				base: u,
				hash: h
			}), 0) : void 0 === m[u] ? m[u] = !0 : m[u].onload && (m[u].abort(), delete m[u].onload, m[u] = !0)
		}

		function f(t) {
			var e;
			return void 0 !== t.protocol ? e = t : (e = document.createElement("a")).href = t, e.protocol.replace(/:/g, "") + e.host
		}
		l = "", n += 1, o()
	}, i = function() {
		window.removeEventListener("load", i, !1), t = setTimeout(e, 0)
	}, "complete" !== document.readyState ? window.addEventListener("load", i, !1) : i())
}(),
function(h) {
	var p, f, m = h(window),
		o = {},
		g = [],
		v = [],
		y = null,
		a = "_open",
		b = [],
		w = null,
		l = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
		x = {
			_init: function(t) {
				var e = h(t),
					i = e.data("popupoptions");
				v[t.id] = !1, g[t.id] = 0, e.data("popup-initialized") || (e.attr("data-popup-initialized", "true"), x._initonce(t)), i.autoopen && setTimeout(function() {
					x.show(t, 0)
				}, 0)
			},
			_initonce: function(i) {
				var t, e, o = h(i),
					n = h("body"),
					s = o.data("popupoptions");
				y = parseInt(n.css("margin-right"), 10), w = void 0 !== document.body.style.webkitTransition || void 0 !== document.body.style.MozTransition || void 0 !== document.body.style.msTransition || void 0 !== document.body.style.OTransition || void 0 !== document.body.style.transition, "tooltip" == s.type && (s.background = !1, s.scrolllock = !1), s.backgroundactive && (s.background = !1, s.blur = !1, s.scrolllock = !1), s.scrolllock && void 0 === p && (t = (e = h('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")).children(), p = t.innerWidth() - t.height(99).innerWidth(), e.remove()), o.attr("id") || o.attr("id", "j-popup-" + parseInt(1e8 * Math.random(), 10)), o.addClass("popup_content"), s.background && !h("#" + i.id + "_background").length && (n.append('<div id="' + i.id + '_background" class="popup_background"></div>'), (e = h("#" + i.id + "_background")).css({
					opacity: 0,
					visibility: "hidden",
					backgroundColor: s.color,
					position: "fixed",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), s.setzindex && !s.autozindex && e.css("z-index", "100000"), s.transition && e.css("transition", s.transition)), n.append(i), o.wrap('<div id="' + i.id + '_wrapper" class="popup_wrapper" />'), (n = h("#" + i.id + "_wrapper")).css({
					opacity: 0,
					visibility: "hidden",
					position: "absolute"
				}), l && n.css("cursor", "pointer"), "overlay" == s.type && n.css("overflow", "auto"), o.css({
					opacity: 0,
					visibility: "hidden",
					display: "inline-block"
				}), s.setzindex && !s.autozindex && n.css("z-index", "100001"), s.outline || o.css("outline", "none"), s.transition && (o.css("transition", s.transition), n.css("transition", s.transition)), o.attr("aria-hidden", !0), "overlay" == s.type && (o.css({
					textAlign: "left",
					position: "relative",
					verticalAlign: "middle"
				}), r = {
					position: "fixed",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					textAlign: "center"
				}, s.backgroundactive && (r.position = "absolute", r.height = "0", r.overflow = "visible"), n.css(r), n.append('<div class="popup_align" />'), h(".popup_align").css({
					display: "inline-block",
					verticalAlign: "middle",
					height: "100%"
				})), o.attr("role", "dialog");
				var r = s.openelement || "." + i.id + a;
				h(r).each(function(t, e) {
					h(e).attr("data-popup-ordinal", t), e.id || h(e).attr("id", "open_" + parseInt(1e8 * Math.random(), 10))
				}), o.attr("aria-labelledby") || o.attr("aria-label") || o.attr("aria-labelledby", h(r).attr("id")), "hover" == s.action ? (s.keepfocus = !1, h(r).on("mouseenter", function(t) {
					x.show(i, h(this).data("popup-ordinal"))
				}), h(r).on("mouseleave", function(t) {
					x.hide(i)
				})) : h(document).on("click", r, function(t) {
					t.preventDefault();
					var e = h(this).data("popup-ordinal");
					setTimeout(function() {
						x.show(i, e)
					}, 0)
				}), s.closebutton && x.addclosebutton(i), s.detach ? o.hide().detach() : n.hide()
			},
			show: function(t, e) {
				var i = h(t);
				if (!i.data("popup-visible")) {
					i.data("popup-initialized") || x._init(t), i.attr("data-popup-initialized", "true");
					var o = h("body"),
						n = i.data("popupoptions"),
						s = h("#" + t.id + "_wrapper"),
						r = h("#" + t.id + "_background");
					if (C(t, e, n.beforeopen), v[t.id] = e, setTimeout(function() {
							b.push(t.id)
						}, 0), n.autozindex) {
						for (var a = document.getElementsByTagName("*"), l = a.length, d = 0, c = 0; c < l; c++) {
							var u = h(a[c]).css("z-index");
							"auto" !== u && d < (u = parseInt(u, 10)) && (d = u)
						}
						g[t.id] = d, n.background && 0 < g[t.id] && h("#" + t.id + "_background").css({
							zIndex: g[t.id] + 1
						}), 0 < g[t.id] && s.css({
							zIndex: g[t.id] + 2
						})
					}
					n.detach ? (s.prepend(t), i.show()) : s.show(), f = setTimeout(function() {
						s.css({
							visibility: "visible",
							opacity: 1
						}), h("html").addClass("popup_visible").addClass("popup_visible_" + t.id), s.addClass("popup_wrapper_visible")
					}, 20), n.scrolllock && (o.css("overflow", "hidden"), o.height() > m.height() && o.css("margin-right", y + p)), n.backgroundactive && i.css({
						top: (m.height() - (i.get(0).offsetHeight + parseInt(i.css("margin-top"), 10) + parseInt(i.css("margin-bottom"), 10))) / 2 + "px"
					}), i.css({
						visibility: "visible",
						opacity: 1
					}), n.background && (r.css({
						visibility: "visible",
						opacity: n.opacity
					}), setTimeout(function() {
						r.css({
							opacity: n.opacity
						})
					}, 0)), i.data("popup-visible", !0), x.reposition(t, e), i.data("focusedelementbeforepopup", document.activeElement), n.keepfocus && (i.attr("tabindex", -1), setTimeout(function() {
						("closebutton" === n.focuselement ? h("#" + t.id + " ." + t.id + "_close:first") : n.focuselement ? h(n.focuselement) : i).focus()
					}, n.focusdelay)), h(n.pagecontainer).attr("aria-hidden", !0), i.attr("aria-hidden", !1), C(t, e, n.onopen), w ? s.one("transitionend", function() {
						C(t, e, n.opentransitionend)
					}) : C(t, e, n.opentransitionend), "tooltip" == n.type && h(window).on("resize." + t.id, function() {
						x.reposition(t, e)
					})
				}
			},
			hide: function(e, t) {
				var i, o, n, s, r, a = h.inArray(e.id, b); - 1 !== a && (f && clearTimeout(f), i = h("body"), o = h(e), n = o.data("popupoptions"), s = h("#" + e.id + "_wrapper"), r = h("#" + e.id + "_background"), o.data("popup-visible", !1), 1 === b.length ? h("html").removeClass("popup_visible").removeClass("popup_visible_" + e.id) : h("html").hasClass("popup_visible_" + e.id) && h("html").removeClass("popup_visible_" + e.id), b.splice(a, 1), s.hasClass("popup_wrapper_visible") && s.removeClass("popup_wrapper_visible"), n.keepfocus && !t && setTimeout(function() {
					h(o.data("focusedelementbeforepopup")).is(":visible") && o.data("focusedelementbeforepopup").focus()
				}, 0), s.css({
					visibility: "hidden",
					opacity: 0
				}), o.css({
					visibility: "hidden",
					opacity: 0
				}), n.background && r.css({
					visibility: "hidden",
					opacity: 0
				}), h(n.pagecontainer).attr("aria-hidden", !1), o.attr("aria-hidden", !0), C(e, v[e.id], n.onclose), w && "0s" !== o.css("transition-duration") ? o.one("transitionend", function(t) {
					o.data("popup-visible") || (n.detach ? o.hide().detach() : s.hide()), n.scrolllock && setTimeout(function() {
						i.css({
							overflow: "visible",
							"margin-right": y
						})
					}, 10), C(e, v[e.id], n.closetransitionend)
				}) : (n.detach ? o.hide().detach() : s.hide(), n.scrolllock && setTimeout(function() {
					i.css({
						overflow: "visible",
						"margin-right": y
					})
				}, 10), C(e, v[e.id], n.closetransitionend)), "tooltip" == n.type && h(window).off("resize." + e.id))
			},
			toggle: function(t, e) {
				h(t).data("popup-visible") ? x.hide(t) : setTimeout(function() {
					x.show(t, e)
				}, 0)
			},
			reposition: function(t, e) {
				var i = h(t),
					o = i.data("popupoptions"),
					n = h("#" + t.id + "_wrapper");
				h("#" + t.id + "_background");
				e = e || 0, "tooltip" == o.type ? (n.css({
					position: "absolute"
				}), e = (t = o.tooltipanchor ? h(o.tooltipanchor) : o.openelement ? h(o.openelement).filter('[data-popup-ordinal="' + e + '"]') : h("." + t.id + a + '[data-popup-ordinal="' + e + '"]')).offset(), "right" == o.horizontal ? n.css("left", e.left + t.outerWidth() + o.offsetleft) : "leftedge" == o.horizontal ? n.css("left", e.left + t.outerWidth() - t.outerWidth() + o.offsetleft) : "left" == o.horizontal ? n.css("right", m.width() - e.left - o.offsetleft) : "rightedge" == o.horizontal ? n.css("right", m.width() - e.left - t.outerWidth() - o.offsetleft) : n.css("left", e.left + t.outerWidth() / 2 - i.outerWidth() / 2 - parseFloat(i.css("marginLeft")) + o.offsetleft), "bottom" == o.vertical ? n.css("top", e.top + t.outerHeight() + o.offsettop) : "bottomedge" == o.vertical ? n.css("top", e.top + t.outerHeight() - i.outerHeight() + o.offsettop) : "top" == o.vertical ? n.css("bottom", m.height() - e.top - o.offsettop) : "topedge" == o.vertical ? n.css("bottom", m.height() - e.top - i.outerHeight() - o.offsettop) : n.css("top", e.top + t.outerHeight() / 2 - i.outerHeight() / 2 - parseFloat(i.css("marginTop")) + o.offsettop)) : "overlay" == o.type && (o.horizontal ? n.css("text-align", o.horizontal) : n.css("text-align", "center"), o.vertical ? i.css("vertical-align", o.vertical) : i.css("vertical-align", "middle"))
			},
			addclosebutton: function(t) {
				var e = h(t).data("popupoptions").closebuttonmarkup ? h(o.closebuttonmarkup).addClass(t.id + "_close") : '<button class="popup_close ' + t.id + '_close" title="Close" aria-label="Close"><span aria-hidden="true">×</span></button>';
				h(t).data("popup-initialized") && h(t).append(e)
			}
		},
		C = function(t, e, i) {
			var o = h(t).data("popupoptions");
			void 0 !== o && (o = o.openelement || "." + t.id + a, e = h(o + '[data-popup-ordinal="' + e + '"]'), "function" == typeof i && i.call(h(t), t, e))
		};
	h(document).on("keydown", function(t) {
		var e;
		b.length && (e = b[b.length - 1], e = document.getElementById(e), h(e).data("popupoptions").escape && 27 == t.keyCode && x.hide(e))
	}), h(document).on("click", function(t) {
		var e, i, o;
		b.length && (e = b[b.length - 1], i = document.getElementById(e), o = h(i).data("popupoptions").closeelement ? h(i).data("popupoptions").closeelement : "." + i.id + "_close", h(t.target).closest(o).length && (t.preventDefault(), x.hide(i)), h(i).data("popupoptions") && h(i).data("popupoptions").blur && !h(t.target).closest("#" + e).length && 2 !== t.which && h(t.target).is(":visible") && (h(i).data("popupoptions").background ? (x.hide(i), t.preventDefault()) : x.hide(i, !0)))
	}), h(document).on("keydown", function(t) {
		var e, i, o, n;
		b.length && 9 == t.which && (o = b[b.length - 1], e = document.getElementById(o), i = h(e).find("*").filter("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(":visible"), n = h(":focus"), o = i.length, n = i.index(n), 0 === o ? (h(e).focus(), t.preventDefault()) : t.shiftKey ? 0 === n && (i.get(o - 1).focus(), t.preventDefault()) : n == o - 1 && (i.get(0).focus(), t.preventDefault()))
	}), h.fn.popup = function(i) {
		return this.each(function() {
			var t, e = h(this);
			"object" == typeof i ? (t = h.extend({}, h.fn.popup.defaults, e.data("popupoptions"), i), e.data("popupoptions", t), o = e.data("popupoptions"), x._init(this)) : "string" == typeof i ? (e.data("popupoptions") || (e.data("popupoptions", h.fn.popup.defaults), o = e.data("popupoptions")), x[i].call(this, this)) : (e.data("popupoptions") || (e.data("popupoptions", h.fn.popup.defaults), o = e.data("popupoptions")), x._init(this))
		})
	}, h.fn.popup.defaults = {
		type: "overlay",
		autoopen: !1,
		background: !0,
		backgroundactive: !1,
		color: "black",
		opacity: "0.5",
		horizontal: "center",
		vertical: "middle",
		offsettop: 0,
		offsetleft: 0,
		escape: !0,
		blur: !0,
		setzindex: !0,
		autozindex: !1,
		scrolllock: !1,
		closebutton: !1,
		closebuttonmarkup: null,
		keepfocus: !0,
		focuselement: null,
		focusdelay: 50,
		outline: !1,
		pagecontainer: null,
		detach: !1,
		openelement: null,
		closeelement: null,
		transition: null,
		tooltipanchor: null,
		beforeopen: null,
		onclose: null,
		onopen: null,
		opentransitionend: null,
		closetransitionend: null
	}
}(jQuery),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(c) {
	var i;
	c.extend(c.fn, {
		validate: function(t) {
			if (this.length) {
				var o = c.data(this[0], "validator");
				return o || (this.attr("novalidate", "novalidate"), o = new c.validator(t, this[0]), c.data(this[0], "validator", o), o.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
					o.submitButton = t.currentTarget, c(this).hasClass("cancel") && (o.cancelSubmit = !0), void 0 !== c(this).attr("formnovalidate") && (o.cancelSubmit = !0)
				}), this.on("submit.validate", function(i) {
					function t() {
						var t, e;
						return o.submitButton && (o.settings.submitHandler || o.formSubmitted) && (t = c("<input type='hidden'/>").attr("name", o.submitButton.name).val(c(o.submitButton).val()).appendTo(o.currentForm)), !(o.settings.submitHandler && !o.settings.debug) || (e = o.settings.submitHandler.call(o, o.currentForm, i), t && t.remove(), void 0 !== e && e)
					}
					return o.settings.debug && i.preventDefault(), o.cancelSubmit ? (o.cancelSubmit = !1, t()) : o.form() ? o.pendingRequest ? !(o.formSubmitted = !0) : t() : (o.focusInvalid(), !1)
				})), o)
			}
			t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
		},
		valid: function() {
			var t, e, i;
			return c(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = c(this[0].form).validate(), this.each(function() {
				(t = e.element(this) && t) || (i = i.concat(e.errorList))
			}), e.errorList = i), t
		},
		rules: function(t, e) {
			var i, o, n, s, r, a = this[0],
				l = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
			if (null != a && (!a.form && l && (a.form = this.closest("form")[0], a.name = this.attr("name")), null != a.form)) {
				if (t) switch (i = c.data(a.form, "validator").settings, o = i.rules, n = c.validator.staticRules(a), t) {
					case "add":
						c.extend(n, c.validator.normalizeRule(e)), delete n.messages, o[a.name] = n, e.messages && (i.messages[a.name] = c.extend(i.messages[a.name], e.messages));
						break;
					case "remove":
						return e ? (r = {}, c.each(e.split(/\s/), function(t, e) {
							r[e] = n[e], delete n[e]
						}), r) : (delete o[a.name], n)
				}
				return (t = c.validator.normalizeRules(c.extend({}, c.validator.classRules(a), c.validator.attributeRules(a), c.validator.dataRules(a), c.validator.staticRules(a)), a)).required && (s = t.required, delete t.required, t = c.extend({
					required: s
				}, t)), t.remote && (s = t.remote, delete t.remote, t = c.extend(t, {
					remote: s
				})), t
			}
		}
	}), c.extend(c.expr.pseudos || c.expr[":"], {
		blank: function(t) {
			return !c.trim("" + c(t).val())
		},
		filled: function(t) {
			t = c(t).val();
			return null !== t && !!c.trim("" + t)
		},
		unchecked: function(t) {
			return !c(t).prop("checked")
		}
	}), c.validator = function(t, e) {
		this.settings = c.extend(!0, {}, c.validator.defaults, t), this.currentForm = e, this.init()
	}, c.validator.format = function(i, t) {
		return 1 === arguments.length ? function() {
			var t = c.makeArray(arguments);
			return t.unshift(i), c.validator.format.apply(this, t)
		} : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = c.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), c.each(t, function(t, e) {
			i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
				return e
			})
		})), i)
	}, c.extend(c.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: c([]),
			errorLabelContainer: c([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function(t) {
				this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
			},
			onfocusout: function(t) {
				this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
			},
			onkeyup: function(t, e) {
				9 === e.which && "" === this.elementValue(t) || -1 !== c.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
			},
			onclick: function(t) {
				t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
			},
			highlight: function(t, e, i) {
				("radio" === t.type ? this.findByName(t.name) : c(t)).addClass(e).removeClass(i)
			},
			unhighlight: function(t, e, i) {
				("radio" === t.type ? this.findByName(t.name) : c(t)).removeClass(e).addClass(i)
			}
		},
		setDefaults: function(t) {
			c.extend(c.validator.defaults, t)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: c.validator.format("Please enter no more than {0} characters."),
			minlength: c.validator.format("Please enter at least {0} characters."),
			rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
			range: c.validator.format("Please enter a value between {0} and {1}."),
			max: c.validator.format("Please enter a value less than or equal to {0}."),
			min: c.validator.format("Please enter a value greater than or equal to {0}."),
			step: c.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function() {
				function t(t) {
					var e, i, o = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
					!this.form && o && (this.form = c(this).closest("form")[0], this.name = c(this).attr("name")), n === this.form && (e = c.data(this.form, "validator"), i = "on" + t.type.replace(/^validate/, ""), (o = e.settings)[i] && !c(this).is(o.ignore) && o[i].call(e, this, t))
				}
				this.labelContainer = c(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm), this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var i, n = this.currentForm,
					o = this.groups = {};
				c.each(this.settings.groups, function(i, t) {
					"string" == typeof t && (t = t.split(/\s/)), c.each(t, function(t, e) {
						o[e] = i
					})
				}), i = this.settings.rules, c.each(i, function(t, e) {
					i[t] = c.validator.normalizeRule(e)
				}), c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
			},
			form: function() {
				return this.checkForm(), c.extend(this.submitted, this.errorMap), this.invalid = c.extend({}, this.errorMap), this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function() {
				this.prepareForm();
				for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
				return this.valid()
			},
			element: function(t) {
				var e, i, o = this.clean(t),
					n = this.validationTargetFor(o),
					s = this,
					r = !0;
				return void 0 === n ? delete this.invalid[o.name] : (this.prepareElement(n), this.currentElements = c(n), (i = this.groups[n.name]) && c.each(this.groups, function(t, e) {
					e === i && t !== n.name && ((o = s.validationTargetFor(s.clean(s.findByName(t)))) && o.name in s.invalid && (s.currentElements.push(o), r = s.check(o) && r))
				}), e = !1 !== this.check(n), r = r && e, this.invalid[n.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c(t).attr("aria-invalid", !e)), r
			},
			showErrors: function(e) {
				var i;
				e && (i = this, c.extend(this.errorMap, e), this.errorList = c.map(this.errorMap, function(t, e) {
					return {
						message: t,
						element: i.findByName(e)[0]
					}
				}), this.successList = c.grep(this.successList, function(t) {
					return !(t.name in e)
				})), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function() {
				c.fn.resetForm && c(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(t)
			},
			resetElements: function(t) {
				var e;
				if (this.settings.unhighlight)
					for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
				else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function() {
				return this.objectLength(this.invalid)
			},
			objectLength: function(t) {
				var e, i = 0;
				for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
				return i
			},
			hideErrors: function() {
				this.hideThese(this.toHide)
			},
			hideThese: function(t) {
				t.not(this.containers).text(""), this.addWrapper(t).hide()
			},
			valid: function() {
				return 0 === this.size()
			},
			size: function() {
				return this.errorList.length
			},
			focusInvalid: function() {
				if (this.settings.focusInvalid) try {
					c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (t) {}
			},
			findLastActive: function() {
				var e = this.lastActive;
				return e && 1 === c.grep(this.errorList, function(t) {
					return t.element.name === e.name
				}).length && e
			},
			elements: function() {
				var i = this,
					o = {};
				return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
					var t = this.name || c(this).attr("name"),
						e = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
					return !t && i.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = c(this).closest("form")[0], this.name = t), !(this.form !== i.currentForm || t in o || !i.objectLength(c(this).rules()) || (o[t] = !0, 0))
				})
			},
			clean: function(t) {
				return c(t)[0]
			},
			errors: function() {
				var t = this.settings.errorClass.split(" ").join(".");
				return c(this.settings.errorElement + "." + t, this.errorContext)
			},
			resetInternals: function() {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = c([]), this.toHide = c([])
			},
			reset: function() {
				this.resetInternals(), this.currentElements = c([])
			},
			prepareForm: function() {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function(t) {
				this.reset(), this.toHide = this.errorsFor(t)
			},
			elementValue: function(t) {
				var e = c(t),
					i = t.type,
					o = void 0 !== e.attr("contenteditable") && "false" !== e.attr("contenteditable");
				return "radio" === i || "checkbox" === i ? this.findByName(t.name).filter(":checked").val() : "number" === i && void 0 !== t.validity ? t.validity.badInput ? "NaN" : e.val() : (e = o ? e.text() : e.val(), "file" === i ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
			},
			check: function(e) {
				e = this.validationTargetFor(this.clean(e));
				var t, i, o, n, s = c(e).rules(),
					r = c.map(s, function(t, e) {
						return e
					}).length,
					a = !1,
					l = this.elementValue(e);
				for (i in "function" == typeof s.normalizer ? n = s.normalizer : "function" == typeof this.settings.normalizer && (n = this.settings.normalizer), n && (l = n.call(e, l), delete s.normalizer), s) {
					o = {
						method: i,
						parameters: s[i]
					};
					try {
						if ("dependency-mismatch" === (t = c.validator.methods[i].call(this, l, e, o.parameters)) && 1 === r) {
							a = !0;
							continue
						}
						if (a = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
						if (!t) return this.formatAndAdd(e, o), !1
					} catch (t) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method."), t
					}
				}
				if (!a) return this.objectLength(s) && this.successList.push(e), !0
			},
			customDataMessage: function(t, e) {
				return c(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || c(t).data("msg")
			},
			customMessage: function(t, e) {
				t = this.settings.messages[t];
				return t && (t.constructor === String ? t : t[e])
			},
			findDefined: function() {
				for (var t = 0; t < arguments.length; t++)
					if (void 0 !== arguments[t]) return arguments[t]
			},
			defaultMessage: function(t, e) {
				"string" == typeof e && (e = {
					method: e
				});
				var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
					o = /\$?\{(\d+)\}/g;
				return "function" == typeof i ? i = i.call(this, e.parameters, t) : o.test(i) && (i = c.validator.format(i.replace(o, "{$1}"), e.parameters)), i
			},
			formatAndAdd: function(t, e) {
				var i = this.defaultMessage(t, e);
				this.errorList.push({
					message: i,
					element: t,
					method: e.method
				}), this.errorMap[t.name] = i, this.submitted[t.name] = i
			},
			addWrapper: function(t) {
				return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
			},
			defaultShowErrors: function() {
				for (var t, e, i = 0; this.errorList[i]; i++) e = this.errorList[i], this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
				if (this.settings.unhighlight)
					for (i = 0, t = this.validElements(); t[i]; i++) this.settings.unhighlight.call(this, t[i], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function() {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function() {
				return c(this.errorList).map(function() {
					return this.element
				})
			},
			showLabel: function(t, e) {
				var i, o, n, s = this.errorsFor(t),
					r = this.idOrName(t),
					a = c(t).attr("aria-describedby");
				s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(e)) : (i = s = c("<" + this.settings.errorElement + ">").attr("id", r + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, c(t)) : i.insertAfter(t), s.is("label") ? s.attr("for", r) : 0 === s.parents("label[for='" + this.escapeCssMeta(r) + "']").length && (r = s.attr("id"), a ? a.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (a += " " + r) : a = r, c(t).attr("aria-describedby", a), (o = this.groups[t.name]) && (n = this, c.each(n.groups, function(t, e) {
					e === o && c("[name='" + n.escapeCssMeta(t) + "']", n.currentForm).attr("aria-describedby", s.attr("id"))
				})))), !e && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, t)), this.toShow = this.toShow.add(s)
			},
			errorsFor: function(t) {
				var e = this.escapeCssMeta(this.idOrName(t)),
					t = c(t).attr("aria-describedby"),
					e = "label[for='" + e + "'], label[for='" + e + "'] *";
				return t && (e = e + ", #" + this.escapeCssMeta(t).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function(t) {
				return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function(t) {
				return this.groups[t.name] || !this.checkable(t) && t.id || t.name
			},
			validationTargetFor: function(t) {
				return this.checkable(t) && (t = this.findByName(t.name)), c(t).not(this.settings.ignore)[0]
			},
			checkable: function(t) {
				return /radio|checkbox/i.test(t.type)
			},
			findByName: function(t) {
				return c(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
			},
			getLength: function(t, e) {
				switch (e.nodeName.toLowerCase()) {
					case "select":
						return c("option:selected", e).length;
					case "input":
						if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
				}
				return t.length
			},
			depend: function(t, e) {
				return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
			},
			dependTypes: {
				boolean: function(t) {
					return t
				},
				string: function(t, e) {
					return !!c(t, e.form).length
				},
				function: function(t, e) {
					return t(e)
				}
			},
			optional: function(t) {
				var e = this.elementValue(t);
				return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
			},
			startRequest: function(t) {
				this.pending[t.name] || (this.pendingRequest++, c(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
			},
			stopRequest: function(t, e) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], c(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(), this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function(t, e) {
				return e = "string" == typeof e && e || "remote", c.data(t, "previousValue") || c.data(t, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(t, {
						method: e
					})
				})
			},
			destroy: function() {
				this.resetForm(), c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function(t, e) {
			t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
		},
		classRules: function(t) {
			var e = {},
				t = c(t).attr("class");
			return t && c.each(t.split(" "), function() {
				this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
			}), e
		},
		normalizeAttributeRule: function(t, e, i, o) {
			/min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (o = Number(o), isNaN(o) && (o = void 0)), o || 0 === o ? t[i] = o : e === i && "range" !== e && (t[i] = !0)
		},
		attributeRules: function(t) {
			var e, i, o = {},
				n = c(t),
				s = t.getAttribute("type");
			for (e in c.validator.methods) i = "required" === e ? (i = t.getAttribute(e), "" === i && (i = !0), !!i) : n.attr(e), this.normalizeAttributeRule(o, s, e, i);
			return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
		},
		dataRules: function(t) {
			var e, i, o = {},
				n = c(t),
				s = t.getAttribute("type");
			for (e in c.validator.methods) i = n.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), "" === i && (i = !0), this.normalizeAttributeRule(o, s, e, i);
			return o
		},
		staticRules: function(t) {
			var e = {},
				i = c.data(t.form, "validator");
			return i.settings.rules && (e = c.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
		},
		normalizeRules: function(o, n) {
			return c.each(o, function(t, e) {
				if (!1 !== e) {
					if (e.param || e.depends) {
						var i = !0;
						switch (typeof e.depends) {
							case "string":
								i = !!c(e.depends, n.form).length;
								break;
							case "function":
								i = e.depends.call(n, n)
						}
						i ? o[t] = void 0 === e.param || e.param : (c.data(n.form, "validator").resetElements(c(n)), delete o[t])
					}
				} else delete o[t]
			}), c.each(o, function(t, e) {
				o[t] = c.isFunction(e) && "normalizer" !== t ? e(n) : e
			}), c.each(["minlength", "maxlength"], function() {
				o[this] && (o[this] = Number(o[this]))
			}), c.each(["rangelength", "range"], function() {
				var t;
				o[this] && (c.isArray(o[this]) ? o[this] = [Number(o[this][0]), Number(o[this][1])] : "string" == typeof o[this] && (t = o[this].replace(/[\[\]]/g, "").split(/[\s,]+/), o[this] = [Number(t[0]), Number(t[1])]))
			}), c.validator.autoCreateRanges && (null != o.min && null != o.max && (o.range = [o.min, o.max], delete o.min, delete o.max), null != o.minlength && null != o.maxlength && (o.rangelength = [o.minlength, o.maxlength], delete o.minlength, delete o.maxlength)), o
		},
		normalizeRule: function(t) {
			var e;
			return "string" == typeof t && (e = {}, c.each(t.split(/\s/), function() {
				e[this] = !0
			}), t = e), t
		},
		addMethod: function(t, e, i) {
			c.validator.methods[t] = e, c.validator.messages[t] = void 0 !== i ? i : c.validator.messages[t], e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
		},
		methods: {
			required: function(t, e, i) {
				if (!this.depend(i, e)) return "dependency-mismatch";
				if ("select" !== e.nodeName.toLowerCase()) return this.checkable(e) ? 0 < this.getLength(t, e) : null != t && 0 < t.length;
				e = c(e).val();
				return e && 0 < e.length
			},
			email: function(t, e) {
				return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
			},
			url: function(t, e) {
				return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
			},
			date: (i = !1, function(t, e) {
				return i || (i = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
			}),
			dateISO: function(t, e) {
				return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
			},
			number: function(t, e) {
				return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
			},
			digits: function(t, e) {
				return this.optional(e) || /^\d+$/.test(t)
			},
			minlength: function(t, e, i) {
				t = c.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || i <= t
			},
			maxlength: function(t, e, i) {
				t = c.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || t <= i
			},
			rangelength: function(t, e, i) {
				t = c.isArray(t) ? t.length : this.getLength(t, e);
				return this.optional(e) || t >= i[0] && t <= i[1]
			},
			min: function(t, e, i) {
				return this.optional(e) || i <= t
			},
			max: function(t, e, i) {
				return this.optional(e) || t <= i
			},
			range: function(t, e, i) {
				return this.optional(e) || t >= i[0] && t <= i[1]
			},
			step: function(t, e, i) {
				function o(t) {
					return (t = ("" + t).match(/(?:\.(\d+))?$/)) && t[1] ? t[1].length : 0
				}

				function n(t) {
					return Math.round(t * Math.pow(10, s))
				}
				var s, r = c(e).attr("type"),
					a = "Step attribute on input type " + r + " is not supported.",
					l = new RegExp("\\b" + r + "\\b"),
					d = !0;
				if (r && !l.test(["text", "number", "range"].join())) throw new Error(a);
				return s = o(i), (o(t) > s || n(t) % n(i) != 0) && (d = !1), this.optional(e) || d
			},
			equalTo: function(t, e, i) {
				i = c(i);
				return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
					c(e).valid()
				}), t === i.val()
			},
			remote: function(o, n, t, s) {
				if (this.optional(n)) return "dependency-mismatch";
				s = "string" == typeof s && s || "remote";
				var r, e, a = this.previousValue(n, s);
				return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), a.originalMessage = a.originalMessage || this.settings.messages[n.name][s], this.settings.messages[n.name][s] = a.message, t = "string" == typeof t ? {
					url: t
				} : t, e = c.param(c.extend({
					data: o
				}, t.data)), a.old === e ? a.valid : (a.old = e, (r = this).startRequest(n), (e = {})[n.name] = o, c.ajax(c.extend(!0, {
					mode: "abort",
					port: "validate" + n.name,
					dataType: "json",
					data: e,
					context: r.currentForm,
					success: function(t) {
						var e, i = !0 === t || "true" === t;
						r.settings.messages[n.name][s] = a.originalMessage, i ? (e = r.formSubmitted, r.resetInternals(), r.toHide = r.errorsFor(n), r.formSubmitted = e, r.successList.push(n), r.invalid[n.name] = !1, r.showErrors()) : (e = {}, t = t || r.defaultMessage(n, {
							method: s,
							parameters: o
						}), e[n.name] = a.message = t, r.invalid[n.name] = !0, r.showErrors(e)), a.valid = i, r.stopRequest(n, i)
					}
				}, t)), "pending")
			}
		}
	});
	var o, n = {};
	return c.ajaxPrefilter ? c.ajaxPrefilter(function(t, e, i) {
		var o = t.port;
		"abort" === t.mode && (n[o] && n[o].abort(), n[o] = i)
	}) : (o = c.ajax, c.ajax = function(t) {
		var e = ("mode" in t ? t : c.ajaxSettings).mode,
			i = ("port" in t ? t : c.ajaxSettings).port;
		return "abort" === e ? (n[i] && n[i].abort(), n[i] = o.apply(this, arguments), n[i]) : o.apply(this, arguments)
	}), c
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["module", "exports"], e) : "undefined" != typeof exports ? e(module, exports) : (e(e = {
		exports: {}
	}, e.exports), t.autosize = e.exports)
}(this, function(t, e) {
	"use strict";
	var i, o, u = "function" == typeof Map ? new Map : (i = [], o = [], {
			has: function(t) {
				return -1 < i.indexOf(t)
			},
			get: function(t) {
				return o[i.indexOf(t)]
			},
			set: function(t, e) {
				-1 === i.indexOf(t) && (i.push(t), o.push(e))
			},
			delete: function(t) {
				t = i.indexOf(t); - 1 < t && (i.splice(t, 1), o.splice(t, 1))
			}
		}),
		h = function(t) {
			return new Event(t, {
				bubbles: !0
			})
		};
	try {
		new Event("test")
	} catch (t) {
		h = function(t) {
			var e = document.createEvent("Event");
			return e.initEvent(t, !0, !1), e
		}
	}

	function n(t) {
		t = u.get(t);
		t && t.destroy()
	}

	function s(t) {
		t = u.get(t);
		t && t.update()
	}
	var r = null;
	"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((r = function(t) {
		return t
	}).destroy = function(t) {
		return t
	}, r.update = function(t) {
		return t
	}) : ((r = function(t, e) {
		return t && Array.prototype.forEach.call(t.length ? t : [t], function(t) {
			function n(t) {
				var e = r.style.width;
				r.style.width = "0px", r.offsetWidth, r.style.width = e, r.style.overflowY = t
			}

			function s() {
				var t, e;
				0 !== r.scrollHeight && (t = function(t) {
					for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
						node: t.parentNode,
						scrollTop: t.parentNode.scrollTop
					}), t = t.parentNode;
					return e
				}(r), e = document.documentElement && document.documentElement.scrollTop, r.style.height = "", r.style.height = r.scrollHeight + o + "px", a = r.clientWidth, t.forEach(function(t) {
					t.node.scrollTop = t.scrollTop
				}), e && (document.documentElement.scrollTop = e))
			}

			function i() {
				s();
				var t = Math.round(parseFloat(r.style.height)),
					e = window.getComputedStyle(r, null),
					i = "content-box" === e.boxSizing ? Math.round(parseFloat(e.height)) : r.offsetHeight;
				if (i < t ? "hidden" === e.overflowY && (n("scroll"), s(), i = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight) : "hidden" !== e.overflowY && (n("hidden"), s(), i = "content-box" === e.boxSizing ? Math.round(parseFloat(window.getComputedStyle(r, null).height)) : r.offsetHeight), l !== i) {
					l = i;
					var o = h("autosize:resized");
					try {
						r.dispatchEvent(o)
					} catch (t) {}
				}
			}
			var r, o, a, l, d, c;
			(r = t) && r.nodeName && "TEXTAREA" === r.nodeName && !u.has(r) && (l = a = o = null, d = function() {
				r.clientWidth !== a && i()
			}, c = function(e) {
				window.removeEventListener("resize", d, !1), r.removeEventListener("input", i, !1), r.removeEventListener("keyup", i, !1), r.removeEventListener("autosize:destroy", c, !1), r.removeEventListener("autosize:update", i, !1), Object.keys(e).forEach(function(t) {
					r.style[t] = e[t]
				}), u.delete(r)
			}.bind(r, {
				height: r.style.height,
				resize: r.style.resize,
				overflowY: r.style.overflowY,
				overflowX: r.style.overflowX,
				wordWrap: r.style.wordWrap
			}), r.addEventListener("autosize:destroy", c, !1), "onpropertychange" in r && "oninput" in r && r.addEventListener("keyup", i, !1), window.addEventListener("resize", d, !1), r.addEventListener("input", i, !1), r.addEventListener("autosize:update", i, !1), r.style.overflowX = "hidden", r.style.wordWrap = "break-word", u.set(r, {
				destroy: c,
				update: i
			}), "vertical" === (t = window.getComputedStyle(r, null)).resize ? r.style.resize = "none" : "both" === t.resize && (r.style.resize = "horizontal"), o = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(o) && (o = 0), i())
		}), t
	}).destroy = function(t) {
		return t && Array.prototype.forEach.call(t.length ? t : [t], n), t
	}, r.update = function(t) {
		return t && Array.prototype.forEach.call(t.length ? t : [t], s), t
	}), e.default = r, t.exports = e.default
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
	"use strict";
	var i = Array.prototype.slice,
		o = t.console,
		u = void 0 === o ? function() {} : function(t) {
			o.error(t)
		};

	function n(l, d, c) {
		(c = c || e || t.jQuery) && (d.prototype.option || (d.prototype.option = function(t) {
			c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
		}), c.fn[l] = function(t) {
			if ("string" != typeof t) return s = t, this.each(function(t, e) {
				var i = c.data(e, l);
				i ? (i.option(s), i._init()) : (i = new d(e, s), c.data(e, l, i))
			}), this;
			var o, n, s, r = i.call(arguments, 1),
				a = "$()." + l + '("' + (o = t) + '")';
			return (t = this).each(function(t, e) {
				var i = c.data(e, l);
				i ? (e = i[o]) && "_" != o.charAt(0) ? (i = e.apply(i, r), n = void 0 === n ? i : n) : u(a + " is not a valid method") : u(l + " not initialized. Cannot call methods, i.e. " + a)
			}), void 0 !== n ? n : t
		}, s(c))
	}

	function s(t) {
		!t || t && t.bridget || (t.bridget = n)
	}
	return s(e || t.jQuery), n
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				t = i[t] = i[t] || [];
			return -1 == t.indexOf(e) && t.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {};
			return (i[t] = i[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		t = this._events && this._events[t];
		if (t && t.length) {
			e = t.indexOf(e);
			return -1 != e && t.splice(e, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n];
				o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function p(t) {
		var e = parseFloat(t);
		return -1 == t.indexOf("%") && !isNaN(e) && e
	}
	var e = "undefined" == typeof console ? function() {} : function(t) {
			console.error(t)
		},
		f = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		m = f.length;

	function g(t) {
		t = getComputedStyle(t);
		return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
	}
	var v, y = !1;

	function b(t) {
		if (y || (y = !0, (h = document.createElement("div")).style.width = "200px", h.style.padding = "1px 2px 3px 4px", h.style.borderStyle = "solid", h.style.borderWidth = "1px 2px 3px 4px", h.style.boxSizing = "border-box", (u = document.body || document.documentElement).appendChild(h), c = g(h), v = 200 == Math.round(p(c.width)), b.isBoxSizeOuter = v, u.removeChild(h)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
			var e = g(t);
			if ("none" == e.display) return function() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0; e < m; e++) t[f[e]] = 0;
				return t
			}();
			var i = {};
			i.width = t.offsetWidth, i.height = t.offsetHeight;
			for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < m; n++) {
				var s = f[n],
					r = e[s],
					r = parseFloat(r);
				i[s] = isNaN(r) ? 0 : r
			}
			var a = i.paddingLeft + i.paddingRight,
				l = i.paddingTop + i.paddingBottom,
				d = i.marginLeft + i.marginRight,
				c = i.marginTop + i.marginBottom,
				u = i.borderLeftWidth + i.borderRightWidth,
				h = i.borderTopWidth + i.borderBottomWidth,
				t = o && v,
				o = p(e.width);
			!1 !== o && (i.width = o + (t ? 0 : a + u));
			o = p(e.height);
			return !1 !== o && (i.height = o + (t ? 0 : l + h)), i.innerWidth = i.width - (a + u), i.innerHeight = i.height - (l + h), i.outerWidth = i.width + d, i.outerHeight = i.height + c, i
		}
		var h, u, c
	}
	return b
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var i = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i] + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function(t, e) {
		return t[i](e)
	}
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(i, s) {
	var d = {
			extend: function(t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			}
		},
		e = Array.prototype.slice;
	d.makeArray = function(t) {
		return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
	}, d.removeFrom = function(t, e) {
		e = t.indexOf(e); - 1 != e && t.splice(e, 1)
	}, d.getParent = function(t, e) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, s(t, e)) return t
	}, d.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, d.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.filterFindElements = function(t, o) {
		t = d.makeArray(t);
		var n = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement)
				if (o) {
					s(t, o) && n.push(t);
					for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i])
				} else n.push(t)
		}), n
	}, d.debounceMethod = function(t, e, o) {
		o = o || 100;
		var n = t.prototype[e],
			s = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[s];
			clearTimeout(t);
			var e = arguments,
				i = this;
			this[s] = setTimeout(function() {
				n.apply(i, e), delete i[s]
			}, o)
		}
	}, d.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, d.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var c = i.console;
	return d.htmlInit = function(a, l) {
		d.docReady(function() {
			var t = d.toDashed(l),
				n = "data-" + t,
				e = document.querySelectorAll("[" + n + "]"),
				t = document.querySelectorAll(".js-" + t),
				t = d.makeArray(e).concat(d.makeArray(t)),
				s = n + "-options",
				r = i.jQuery;
			t.forEach(function(t) {
				var e, i = t.getAttribute(n) || t.getAttribute(s);
				try {
					e = i && JSON.parse(i)
				} catch (e) {
					return void(c && c.error("Error parsing " + n + " on " + t.className + ": " + e))
				}
				var o = new a(t, e);
				r && r.data(t, l, o)
			})
		})
	}, d
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(t) {
		return e(0, t)
	}) : "object" == typeof module && module.exports ? module.exports = e(0, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(0, t.getSize))
}(window, function(t, e) {
	function i(t, e) {
		this.element = t, this.parent = e, this.create()
	}
	var o = i.prototype;
	return o.create = function() {
		this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
	}, o.destroy = function() {
		this.unselect(), this.element.style.position = "";
		var t = this.parent.originSide;
		this.element.style[t] = ""
	}, o.getSize = function() {
		this.size = e(this.element)
	}, o.setPosition = function(t) {
		this.x = t, this.updateTarget(), this.renderPosition(t)
	}, o.updateTarget = o.setDefaultTarget = function() {
		var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
		this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
	}, o.renderPosition = function(t) {
		var e = this.parent.originSide;
		this.element.style[e] = this.parent.getPositionValue(t)
	}, o.select = function() {
		this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
	}, o.unselect = function() {
		this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
	}, o.wrapShift = function(t) {
		this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
	}, o.remove = function() {
		this.element.parentNode.removeChild(this.element)
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {}, t.Flickity.Slide = e())
}(window, function() {
	"use strict";

	function t(t) {
		this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
	}
	var e = t.prototype;
	return e.addCell = function(t) {
		var e;
		this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length && (this.x = t.x, e = this.isOriginLeft ? "marginLeft" : "marginRight", this.firstMargin = t.size[e])
	}, e.updateTarget = function() {
		var t = this.isOriginLeft ? "marginRight" : "marginLeft",
			e = this.getLastCell(),
			t = e ? e.size[t] : 0,
			t = this.outerWidth - (this.firstMargin + t);
		this.target = this.x + this.firstMargin + t * this.parent.cellAlign
	}, e.getLastCell = function() {
		return this.cells[this.cells.length - 1]
	}, e.select = function() {
		this.cells.forEach(function(t) {
			t.select()
		})
	}, e.unselect = function() {
		this.cells.forEach(function(t) {
			t.unselect()
		})
	}, e.getCellElements = function() {
		return this.cells.map(function(t) {
			return t.element
		})
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(t) {
		return e(0, t)
	}) : "object" == typeof module && module.exports ? module.exports = e(0, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(0, t.fizzyUIUtils))
}(window, function(t, e) {
	return {
		startAnimation: function() {
			this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
		},
		animate: function() {
			this.applyDragForce(), this.applySelectedAttraction();
			var t, e = this.x;
			this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating && (t = this, requestAnimationFrame(function() {
				t.animate()
			}))
		},
		positionSlider: function() {
			var t = this.x;
			this.options.wrapAround && 1 < this.cells.length && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
		},
		setTranslateX: function(t, e) {
			t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
			t = this.getPositionValue(t);
			this.slider.style.transform = e ? "translate3d(" + t + ",0,0)" : "translateX(" + t + ")"
		},
		dispatchScrollEvent: function() {
			var t, e = this.slides[0];
			e && (e = (t = -this.x - e.target) / this.slidesWidth, this.dispatchEvent("scroll", null, [e, t]))
		},
		positionSliderAtSelected: function() {
			this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
		},
		getPositionValue: function(t) {
			return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
		},
		settle: function(t) {
			this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
		},
		shiftWrapCells: function(t) {
			var e = this.cursorPosition + t;
			this._shiftCells(this.beforeShiftCells, e, -1);
			t = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
			this._shiftCells(this.afterShiftCells, t, 1)
		},
		_shiftCells: function(t, e, i) {
			for (var o = 0; o < t.length; o++) {
				var n = t[o],
					s = 0 < e ? i : 0;
				n.wrapShift(s), e -= n.size.outerWidth
			}
		},
		_unshiftCells: function(t) {
			if (t && t.length)
				for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
		},
		integratePhysics: function() {
			this.x += this.velocity, this.velocity *= this.getFrictionFactor()
		},
		applyForce: function(t) {
			this.velocity += t
		},
		getFrictionFactor: function() {
			return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
		},
		getRestingPosition: function() {
			return this.x + this.velocity / (1 - this.getFrictionFactor())
		},
		applyDragForce: function() {
			var t;
			this.isDraggable && this.isPointerDown && (t = this.dragX - this.x - this.velocity, this.applyForce(t))
		},
		applySelectedAttraction: function() {
			var t;
			this.isDraggable && this.isPointerDown || this.isFreeScrolling || !this.slides.length || (t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction, this.applyForce(t))
		}
	}
}),
function(r, a) {
	var t;
	"function" == typeof define && define.amd ? define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(t, e, i, o, n, s) {
		return a(r, t, e, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate")) : (t = r.Flickity, r.Flickity = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, t.Cell, t.Slide, t.animatePrototype))
}(window, function(o, t, e, r, i, a, n) {
	var s = o.jQuery,
		l = o.getComputedStyle,
		d = o.console;

	function c(t, e) {
		for (t = r.makeArray(t); t.length;) e.appendChild(t.shift())
	}
	var u = 0,
		h = {};

	function p(t, e) {
		var i = r.getQueryElement(t);
		if (i) {
			if (this.element = i, this.element.flickityGUID) {
				var o = h[this.element.flickityGUID];
				return o.option(e), o
			}
			s && (this.$element = s(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), this._create()
		} else d && d.error("Bad element for Flickity: " + (i || t))
	}
	p.defaults = {
		accessibility: !0,
		cellAlign: "center",
		freeScrollFriction: .075,
		friction: .28,
		namespaceJQueryEvents: !0,
		percentPosition: !0,
		resize: !0,
		selectedAttraction: .025,
		setGallerySize: !0
	}, p.createMethods = [];
	var f = p.prototype;
	r.extend(f, t.prototype), f._create = function() {
		var t, e = this.guid = ++u;
		for (t in this.element.flickityGUID = e, (h[e] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && o.addEventListener("resize", this), this.options.on) {
			var i = this.options.on[t];
			this.on(t, i)
		}
		p.createMethods.forEach(function(t) {
			this[t]()
		}, this), this.options.watchCSS ? this.watchCSS() : this.activate()
	}, f.option = function(t) {
		r.extend(this.options, t)
	}, f.activate = function() {
		this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
	}, f._createSlider = function() {
		var t = document.createElement("div");
		t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
	}, f._filterFindCellElements = function(t) {
		return r.filterFindElements(t, this.options.cellSelector)
	}, f.reloadCells = function() {
		this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
	}, f._makeCells = function(t) {
		return this._filterFindCellElements(t).map(function(t) {
			return new i(t, this)
		}, this)
	}, f.getLastCell = function() {
		return this.cells[this.cells.length - 1]
	}, f.getLastSlide = function() {
		return this.slides[this.slides.length - 1]
	}, f.positionCells = function() {
		this._sizeCells(this.cells), this._positionCells(0)
	}, f._positionCells = function(t) {
		t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
		var e, i = 0;
		0 < t && (i = (e = this.cells[t - 1]).x + e.size.outerWidth);
		for (var o = this.cells.length, n = t; n < o; n++) {
			var s = this.cells[n];
			s.setPosition(i), i += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
		}
		this.slideableWidth = i, this.updateSlides(), this._containSlides(), this.slidesWidth = o ? this.getLastSlide().target - this.slides[0].target : 0
	}, f._sizeCells = function(t) {
		t.forEach(function(t) {
			t.getSize()
		})
	}, f.updateSlides = function() {
		var o, n, s;
		this.slides = [], this.cells.length && (o = new a(this), this.slides.push(o), n = "left" == this.originSide ? "marginRight" : "marginLeft", s = this._getCanCellFit(), this.cells.forEach(function(t, e) {
			var i;
			o.cells.length && (i = o.outerWidth - o.firstMargin + (t.size.outerWidth - t.size[n]), s.call(this, e, i) || (o.updateTarget(), o = new a(this), this.slides.push(o))), o.addCell(t)
		}, this), o.updateTarget(), this.updateSelectedSlide())
	}, f._getCanCellFit = function() {
		var t = this.options.groupCells;
		if (!t) return function() {
			return !1
		};
		if ("number" == typeof t) {
			var e = parseInt(t, 10);
			return function(t) {
				return t % e != 0
			}
		}
		var t = "string" == typeof t && t.match(/^(\d+)%$/),
			i = t ? parseInt(t[1], 10) / 100 : 1;
		return function(t, e) {
			return e <= (this.size.innerWidth + 1) * i
		}
	}, f._init = f.reposition = function() {
		this.positionCells(), this.positionSliderAtSelected()
	}, f.getSize = function() {
		this.size = e(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
	};
	var m = {
		center: {
			left: .5,
			right: .5
		},
		left: {
			left: 0,
			right: 1
		},
		right: {
			right: 0,
			left: 1
		}
	};
	return f.setCellAlign = function() {
		var t = m[this.options.cellAlign];
		this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
	}, f.setGallerySize = function() {
		var t;
		this.options.setGallerySize && (t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight, this.viewport.style.height = t + "px")
	}, f._getWrapShiftCells = function() {
		var t, e;
		this.options.wrapAround && (this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells), t = this.cursorPosition, e = this.cells.length - 1, this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1))
	}, f._getGapCells = function(t, e, i) {
		for (var o = []; 0 < t;) {
			var n = this.cells[e];
			if (!n) break;
			o.push(n), e += i, t -= n.size.outerWidth
		}
		return o
	}, f._containSlides = function() {
		var t, e, i, o, n, s;
		this.options.contain && !this.options.wrapAround && this.cells.length && (t = (e = this.options.rightToLeft) ? "marginRight" : "marginLeft", e = e ? "marginLeft" : "marginRight", i = this.slideableWidth - this.getLastCell().size[e], o = i < this.size.innerWidth, n = this.cursorPosition + this.cells[0].size[t], s = i - this.size.innerWidth * (1 - this.cellAlign), this.slides.forEach(function(t) {
			t.target = o ? i * this.cellAlign : (t.target = Math.max(t.target, n), Math.min(t.target, s))
		}, this))
	}, f.dispatchEvent = function(t, e, i) {
		var o = e ? [e].concat(i) : i;
		this.emitEvent(t, o), s && this.$element && (o = t += this.options.namespaceJQueryEvents ? ".flickity" : "", e && ((e = s.Event(e)).type = t, o = e), this.$element.trigger(o, i))
	}, f.select = function(t, e, i) {
		this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = r.modulo(t, this.slides.length)), this.slides[t]) && (e = this.selectedIndex, this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != e && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect"))
	}, f._wrapSelect = function(t) {
		var e = this.slides.length;
		if (!(this.options.wrapAround && 1 < e)) return t;
		var i = r.modulo(t, e),
			o = Math.abs(i - this.selectedIndex),
			n = Math.abs(i + e - this.selectedIndex),
			i = Math.abs(i - e - this.selectedIndex);
		!this.isDragSelect && n < o ? t += e : !this.isDragSelect && i < o && (t -= e), t < 0 ? this.x -= this.slideableWidth : e <= t && (this.x += this.slideableWidth)
	}, f.previous = function(t, e) {
		this.select(this.selectedIndex - 1, t, e)
	}, f.next = function(t, e) {
		this.select(this.selectedIndex + 1, t, e)
	}, f.updateSelectedSlide = function() {
		var t = this.slides[this.selectedIndex];
		t && (this.unselectSelectedSlide(), (this.selectedSlide = t).select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
	}, f.unselectSelectedSlide = function() {
		this.selectedSlide && this.selectedSlide.unselect()
	}, f.selectInitialIndex = function() {
		var t, e = this.options.initialIndex;
		this.isInitActivated ? this.select(this.selectedIndex, !1, !0) : e && "string" == typeof e && this.queryCell(e) ? this.selectCell(e, !1, !0) : (t = 0, e && this.slides[e] && (t = e), this.select(t, !1, !0))
	}, f.selectCell = function(t, e, i) {
		t = this.queryCell(t);
		t && (t = this.getCellSlideIndex(t), this.select(t, e, i))
	}, f.getCellSlideIndex = function(t) {
		for (var e = 0; e < this.slides.length; e++)
			if (-1 != this.slides[e].cells.indexOf(t)) return e
	}, f.getCell = function(t) {
		for (var e = 0; e < this.cells.length; e++) {
			var i = this.cells[e];
			if (i.element == t) return i
		}
	}, f.getCells = function(t) {
		t = r.makeArray(t);
		var e = [];
		return t.forEach(function(t) {
			t = this.getCell(t);
			t && e.push(t)
		}, this), e
	}, f.getCellElements = function() {
		return this.cells.map(function(t) {
			return t.element
		})
	}, f.getParentCell = function(t) {
		return this.getCell(t) || (t = r.getParent(t, ".flickity-slider > *"), this.getCell(t))
	}, f.getAdjacentCellElements = function(t, e) {
		if (!t) return this.selectedSlide.getCellElements();
		e = void 0 === e ? this.selectedIndex : e;
		var i = this.slides.length;
		if (i <= 1 + 2 * t) return this.getCellElements();
		for (var o = [], n = e - t; n <= e + t; n++) {
			var s = this.options.wrapAround ? r.modulo(n, i) : n,
				s = this.slides[s];
			s && (o = o.concat(s.getCellElements()))
		}
		return o
	}, f.queryCell = function(t) {
		if ("number" == typeof t) return this.cells[t];
		if ("string" == typeof t) {
			if (t.match(/^[#\.]?[\d\/]/)) return;
			t = this.element.querySelector(t)
		}
		return this.getCell(t)
	}, f.uiChange = function() {
		this.emitEvent("uiChange")
	}, f.childUIPointerDown = function(t) {
		"touchstart" != t.type && t.preventDefault(), this.focus()
	}, f.onresize = function() {
		this.watchCSS(), this.resize()
	}, r.debounceMethod(p, "onresize", 150), f.resize = function() {
		var t;
		this.isActive && (this.getSize(), this.options.wrapAround && (this.x = r.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize"), t = this.selectedElements && this.selectedElements[0], this.selectCell(t, !1, !0))
	}, f.watchCSS = function() {
		this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
	}, f.onkeydown = function(t) {
		var e = document.activeElement && document.activeElement != this.element;
		!this.options.accessibility || e || (t = p.keyboardHandlers[t.keyCode]) && t.call(this)
	}, p.keyboardHandlers = {
		37: function() {
			var t = this.options.rightToLeft ? "next" : "previous";
			this.uiChange(), this[t]()
		},
		39: function() {
			var t = this.options.rightToLeft ? "previous" : "next";
			this.uiChange(), this[t]()
		}
	}, f.focus = function() {
		var t = o.pageYOffset;
		this.element.focus({
			preventScroll: !0
		}), o.pageYOffset != t && o.scrollTo(o.pageXOffset, t)
	}, f.deactivate = function() {
		this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(t) {
			t.destroy()
		}), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
	}, f.destroy = function() {
		this.deactivate(), o.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), s && this.$element && s.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete h[this.guid]
	}, r.extend(f, n), p.data = function(t) {
		t = (t = r.getQueryElement(t)) && t.flickityGUID;
		return t && h[t]
	}, r.htmlInit(p, "flickity"), s && s.bridget && s.bridget("flickity", p), p.setJQuery = function(t) {
		s = t
	}, p.Cell = i, p.Slide = a, p
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.Unipointer = i(e, e.EvEmitter)
}(window, function(o, t) {
	function e() {}
	t = e.prototype = Object.create(t.prototype);
	t.bindStartEvent = function(t) {
		this._bindStartEvent(t, !0)
	}, t.unbindStartEvent = function(t) {
		this._bindStartEvent(t, !1)
	}, t._bindStartEvent = function(t, e) {
		var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener",
			e = "mousedown";
		o.PointerEvent ? e = "pointerdown" : "ontouchstart" in o && (e = "touchstart"), t[i](e, this)
	}, t.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, t.getTouch = function(t) {
		for (var e = 0; e < t.length; e++) {
			var i = t[e];
			if (i.identifier == this.pointerIdentifier) return i
		}
	}, t.onmousedown = function(t) {
		var e = t.button;
		e && 0 !== e && 1 !== e || this._pointerDown(t, t)
	}, t.ontouchstart = function(t) {
		this._pointerDown(t, t.changedTouches[0])
	}, t.onpointerdown = function(t) {
		this._pointerDown(t, t)
	}, t._pointerDown = function(t, e) {
		t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
	}, t.pointerDown = function(t, e) {
		this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
	};
	var i = {
		mousedown: ["mousemove", "mouseup"],
		touchstart: ["touchmove", "touchend", "touchcancel"],
		pointerdown: ["pointermove", "pointerup", "pointercancel"]
	};
	return t._bindPostStartEvents = function(t) {
		t && ((t = i[t.type]).forEach(function(t) {
			o.addEventListener(t, this)
		}, this), this._boundPointerEvents = t)
	}, t._unbindPostStartEvents = function() {
		this._boundPointerEvents && (this._boundPointerEvents.forEach(function(t) {
			o.removeEventListener(t, this)
		}, this), delete this._boundPointerEvents)
	}, t.onmousemove = function(t) {
		this._pointerMove(t, t)
	}, t.onpointermove = function(t) {
		t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
	}, t.ontouchmove = function(t) {
		var e = this.getTouch(t.changedTouches);
		e && this._pointerMove(t, e)
	}, t._pointerMove = function(t, e) {
		this.pointerMove(t, e)
	}, t.pointerMove = function(t, e) {
		this.emitEvent("pointerMove", [t, e])
	}, t.onmouseup = function(t) {
		this._pointerUp(t, t)
	}, t.onpointerup = function(t) {
		t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
	}, t.ontouchend = function(t) {
		var e = this.getTouch(t.changedTouches);
		e && this._pointerUp(t, e)
	}, t._pointerUp = function(t, e) {
		this._pointerDone(), this.pointerUp(t, e)
	}, t.pointerUp = function(t, e) {
		this.emitEvent("pointerUp", [t, e])
	}, t._pointerDone = function() {
		this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
	}, t._pointerReset = function() {
		this.isPointerDown = !1, delete this.pointerIdentifier
	}, t.pointerDone = function() {}, t.onpointercancel = function(t) {
		t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
	}, t.ontouchcancel = function(t) {
		var e = this.getTouch(t.changedTouches);
		e && this._pointerCancel(t, e)
	}, t._pointerCancel = function(t, e) {
		this._pointerDone(), this.pointerCancel(t, e)
	}, t.pointerCancel = function(t, e) {
		this.emitEvent("pointerCancel", [t, e])
	}, e.getPointerPoint = function(t) {
		return {
			x: t.pageX,
			y: t.pageY
		}
	}, e
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("unipointer")) : e.Unidragger = i(e, e.Unipointer)
}(window, function(s, t) {
	function e() {}
	var i = e.prototype = Object.create(t.prototype);
	i.bindHandles = function() {
		this._bindHandles(!0)
	}, i.unbindHandles = function() {
		this._bindHandles(!1)
	}, i._bindHandles = function(t) {
		for (var e = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
			var n = this.handles[o];
			this._bindStartEvent(n, t), n[e]("click", this), s.PointerEvent && (n.style.touchAction = i)
		}
	}, i._touchActionValue = "none", i.pointerDown = function(t, e) {
		this.okayPointerDown(t) && (this.pointerDownPointer = e, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
	};
	var o = {
			TEXTAREA: !0,
			INPUT: !0,
			SELECT: !0,
			OPTION: !0
		},
		n = {
			radio: !0,
			checkbox: !0,
			button: !0,
			submit: !0,
			image: !0,
			file: !0
		};
	return i.okayPointerDown = function(t) {
		var e = o[t.target.nodeName],
			t = n[t.target.type],
			t = !e || t;
		return t || this._pointerReset(), t
	}, i.pointerDownBlur = function() {
		var t = document.activeElement;
		t && t.blur && t != document.body && t.blur()
	}, i.pointerMove = function(t, e) {
		var i = this._dragPointerMove(t, e);
		this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
	}, i._dragPointerMove = function(t, e) {
		var i = {
			x: e.pageX - this.pointerDownPointer.pageX,
			y: e.pageY - this.pointerDownPointer.pageY
		};
		return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
	}, i.hasDragStarted = function(t) {
		return 3 < Math.abs(t.x) || 3 < Math.abs(t.y)
	}, i.pointerUp = function(t, e) {
		this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
	}, i._dragPointerUp = function(t, e) {
		this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
	}, i._dragStart = function(t, e) {
		this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
	}, i.dragStart = function(t, e) {
		this.emitEvent("dragStart", [t, e])
	}, i._dragMove = function(t, e, i) {
		this.isDragging && this.dragMove(t, e, i)
	}, i.dragMove = function(t, e, i) {
		t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
	}, i._dragEnd = function(t, e) {
		this.isDragging = !1, setTimeout(function() {
			delete this.isPreventingClicks
		}.bind(this)), this.dragEnd(t, e)
	}, i.dragEnd = function(t, e) {
		this.emitEvent("dragEnd", [t, e])
	}, i.onclick = function(t) {
		this.isPreventingClicks && t.preventDefault()
	}, i._staticClick = function(t, e) {
		this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
			delete this.isIgnoringMouseUp
		}.bind(this), 400)))
	}, i.staticClick = function(t, e) {
		this.emitEvent("staticClick", [t, e])
	}, e.getPointerPoint = t.getPointerPoint, e
}),
function(o, n) {
	"function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(t, e, i) {
		return n(o, t, e, i)
	}) : "object" == typeof module && module.exports ? module.exports = n(o, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : o.Flickity = n(o, o.Flickity, o.Unidragger, o.fizzyUIUtils)
}(window, function(i, t, e, s) {
	s.extend(t.defaults, {
		draggable: ">1",
		dragThreshold: 3
	}), t.createMethods.push("_createDrag");
	var o = t.prototype;
	s.extend(o, e.prototype), o._touchActionValue = "pan-y";
	var n = "createTouch" in document,
		r = !1;
	o._createDrag = function() {
		this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), n && !r && (i.addEventListener("touchmove", function() {}), r = !0)
	}, o.onActivateDrag = function() {
		this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
	}, o.onDeactivateDrag = function() {
		this.unbindHandles(), this.element.classList.remove("is-draggable")
	}, o.updateDraggable = function() {
		">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
	}, o.bindDrag = function() {
		this.options.draggable = !0, this.updateDraggable()
	}, o.unbindDrag = function() {
		this.options.draggable = !1, this.updateDraggable()
	}, o._uiChangeDrag = function() {
		delete this.isFreeScrolling
	}, o.pointerDown = function(t, e) {
		this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), i.addEventListener("scroll", this), this._pointerDownDefault(t, e)) : this._pointerDownDefault(t, e)
	}, o._pointerDownDefault = function(t, e) {
		this.pointerDownPointer = {
			pageX: e.pageX,
			pageY: e.pageY
		}, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
	};
	var a = {
		INPUT: !0,
		TEXTAREA: !0,
		SELECT: !0
	};

	function l() {
		return {
			x: i.pageXOffset,
			y: i.pageYOffset
		}
	}
	return o.pointerDownFocus = function(t) {
		a[t.target.nodeName] || this.focus()
	}, o._pointerDownPreventDefault = function(t) {
		var e = "touchstart" == t.type,
			i = "touch" == t.pointerType,
			o = a[t.target.nodeName];
		e || i || o || t.preventDefault()
	}, o.hasDragStarted = function(t) {
		return Math.abs(t.x) > this.options.dragThreshold
	}, o.pointerUp = function(t, e) {
		delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
	}, o.pointerDone = function() {
		i.removeEventListener("scroll", this), delete this.pointerDownScroll
	}, o.dragStart = function(t, e) {
		this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [e]))
	}, o.pointerMove = function(t, e) {
		var i = this._dragPointerMove(t, e);
		this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
	}, o.dragMove = function(t, e, i) {
		var o, n;
		this.isDraggable && (t.preventDefault(), this.previousDragX = this.dragX, n = this.options.rightToLeft ? -1 : 1, this.options.wrapAround && (i.x = i.x % this.slideableWidth), o = this.dragStartPosition + i.x * n, !this.options.wrapAround && this.slides.length && (o = (o = (n = Math.max(-this.slides[0].target, this.dragStartPosition)) < o ? .5 * (o + n) : o) < (n = Math.min(-this.getLastSlide().target, this.dragStartPosition)) ? .5 * (o + n) : o), this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i]))
	}, o.dragEnd = function(t, e) {
		var i, o;
		this.isDraggable && (this.options.freeScroll && (this.isFreeScrolling = !0), i = this.dragEndRestingSelect(), this.options.freeScroll && !this.options.wrapAround ? (o = this.getRestingPosition(), this.isFreeScrolling = -o > this.slides[0].target && -o < this.getLastSlide().target) : this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect()), delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e]))
	}, o.dragEndRestingSelect = function() {
		var t = this.getRestingPosition(),
			e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
			i = this._getClosestResting(t, e, 1),
			e = this._getClosestResting(t, e, -1);
		return (i.distance < e.distance ? i : e).index
	}, o._getClosestResting = function(t, e, i) {
		for (var o = this.selectedIndex, n = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
				return t <= e
			} : function(t, e) {
				return t < e
			}; s(e, n) && (o += i, n = e, null !== (e = this.getSlideDistance(-t, o)));) e = Math.abs(e);
		return {
			distance: n,
			index: o - i
		}
	}, o.getSlideDistance = function(t, e) {
		var i = this.slides.length,
			o = this.options.wrapAround && 1 < i,
			n = o ? s.modulo(e, i) : e,
			n = this.slides[n];
		if (!n) return null;
		i = o ? this.slideableWidth * Math.floor(e / i) : 0;
		return t - (n.target + i)
	}, o.dragEndBoostSelect = function() {
		if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
		var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
			e = this.previousDragX - this.dragX;
		return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0
	}, o.staticClick = function(t, e) {
		var i = this.getParentCell(t.target),
			o = i && i.element,
			i = i && this.cells.indexOf(i);
		this.dispatchEvent("staticClick", t, [e, o, i])
	}, o.onscroll = function() {
		var t = l(),
			e = this.pointerDownScroll.x - t.x,
			t = this.pointerDownScroll.y - t.y;
		(3 < Math.abs(e) || 3 < Math.abs(t)) && this._pointerDone()
	}, t
}),
function(t, o) {
	"function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
		return o(0, t, e, i)
	}) : "object" == typeof module && module.exports ? module.exports = o(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : o(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, o) {
	"use strict";
	var n = "http://www.w3.org/2000/svg";

	function s(t, e) {
		this.direction = t, this.parent = e, this._create()
	}(s.prototype = Object.create(i.prototype))._create = function() {
		this.isEnabled = !0, this.isPrevious = -1 == this.direction;
		var t = this.parent.options.rightToLeft ? 1 : -1;
		this.isLeft = this.direction == t;
		var e = this.element = document.createElement("button");
		e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
		t = this.createSVG();
		e.appendChild(t), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
	}, s.prototype.activate = function() {
		this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
	}, s.prototype.deactivate = function() {
		this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
	}, s.prototype.createSVG = function() {
		var t = document.createElementNS(n, "svg");
		t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
		var e = document.createElementNS(n, "path"),
			i = "string" != typeof(i = this.parent.options.arrowShape) ? "M " + i.x0 + ",50 L " + i.x1 + "," + (i.y1 + 50) + " L " + i.x2 + "," + (i.y2 + 50) + " L " + i.x3 + ",50  L " + i.x2 + "," + (50 - i.y2) + " L " + i.x1 + "," + (50 - i.y1) + " Z" : i;
		return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
	}, s.prototype.handleEvent = o.handleEvent, s.prototype.onclick = function() {
		var t;
		this.isEnabled && (this.parent.uiChange(), t = this.isPrevious ? "previous" : "next", this.parent[t]())
	}, s.prototype.enable = function() {
		this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
	}, s.prototype.disable = function() {
		this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
	}, s.prototype.update = function() {
		var t = this.parent.slides;
		this.parent.options.wrapAround && 1 < t.length ? this.enable() : (t = t.length ? t.length - 1 : 0, t = this.isPrevious ? 0 : t, this[this.parent.selectedIndex == t ? "disable" : "enable"]())
	}, s.prototype.destroy = function() {
		this.deactivate(), this.allOff()
	}, o.extend(e.defaults, {
		prevNextButtons: !0,
		arrowShape: {
			x0: 10,
			x1: 60,
			y1: 50,
			x2: 70,
			y2: 40,
			x3: 30
		}
	}), e.createMethods.push("_createPrevNextButtons");
	o = e.prototype;
	return o._createPrevNextButtons = function() {
		this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
	}, o.activatePrevNextButtons = function() {
		this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
	}, o.deactivatePrevNextButtons = function() {
		this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
	}, e.PrevNextButton = s, e
}),
function(t, o) {
	"function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(t, e, i) {
		return o(0, t, e, i)
	}) : "object" == typeof module && module.exports ? module.exports = o(0, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : o(0, t.Flickity, t.Unipointer, t.fizzyUIUtils)
}(window, function(t, e, i, o) {
	function n(t) {
		this.parent = t, this._create()
	}(n.prototype = Object.create(i.prototype))._create = function() {
		this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
	}, n.prototype.activate = function() {
		this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
	}, n.prototype.deactivate = function() {
		this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
	}, n.prototype.setDots = function() {
		var t = this.parent.slides.length - this.dots.length;
		0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t)
	}, n.prototype.addDots = function(t) {
		for (var e = document.createDocumentFragment(), i = [], o = this.dots.length, n = o + t, s = o; s < n; s++) {
			var r = document.createElement("li");
			r.className = "dot", r.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(r), i.push(r)
		}
		this.holder.appendChild(e), this.dots = this.dots.concat(i)
	}, n.prototype.removeDots = function(t) {
		this.dots.splice(this.dots.length - t, t).forEach(function(t) {
			this.holder.removeChild(t)
		}, this)
	}, n.prototype.updateSelected = function() {
		this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
	}, n.prototype.onTap = n.prototype.onClick = function(t) {
		t = t.target;
		"LI" == t.nodeName && (this.parent.uiChange(), t = this.dots.indexOf(t), this.parent.select(t))
	}, n.prototype.destroy = function() {
		this.deactivate(), this.allOff()
	}, e.PageDots = n, o.extend(e.defaults, {
		pageDots: !0
	}), e.createMethods.push("_createPageDots");
	o = e.prototype;
	return o._createPageDots = function() {
		this.options.pageDots && (this.pageDots = new n(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
	}, o.activatePageDots = function() {
		this.pageDots.activate()
	}, o.updateSelectedPageDots = function() {
		this.pageDots.updateSelected()
	}, o.updatePageDots = function() {
		this.pageDots.setDots()
	}, o.deactivatePageDots = function() {
		this.pageDots.deactivate()
	}, e.PageDots = n, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
	function o(t) {
		this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
	}(o.prototype = Object.create(t.prototype)).play = function() {
		"playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
	}, o.prototype.tick = function() {
		var t, e;
		"playing" == this.state && (t = "number" == typeof(t = this.parent.options.autoPlay) ? t : 3e3, (e = this).clear(), this.timeout = setTimeout(function() {
			e.parent.next(!0), e.tick()
		}, t))
	}, o.prototype.stop = function() {
		this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
	}, o.prototype.clear = function() {
		clearTimeout(this.timeout)
	}, o.prototype.pause = function() {
		"playing" == this.state && (this.state = "paused", this.clear())
	}, o.prototype.unpause = function() {
		"paused" == this.state && this.play()
	}, o.prototype.visibilityChange = function() {
		this[document.hidden ? "pause" : "unpause"]()
	}, o.prototype.visibilityPlay = function() {
		this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
	}, e.extend(i.defaults, {
		pauseAutoPlayOnHover: !0
	}), i.createMethods.push("_createPlayer");
	e = i.prototype;
	return e._createPlayer = function() {
		this.player = new o(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
	}, e.activatePlayer = function() {
		this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
	}, e.playPlayer = function() {
		this.player.play()
	}, e.stopPlayer = function() {
		this.player.stop()
	}, e.pausePlayer = function() {
		this.player.pause()
	}, e.unpausePlayer = function() {
		this.player.unpause()
	}, e.deactivatePlayer = function() {
		this.player.stop(), this.element.removeEventListener("mouseenter", this)
	}, e.onmouseenter = function() {
		this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
	}, e.onmouseleave = function() {
		this.player.unpause(), this.element.removeEventListener("mouseleave", this)
	}, i.Player = o, i
}),
function(t, i) {
	"function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
		return i(0, t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, o) {
	var i = e.prototype;
	return i.insert = function(t, e) {
		var i, o, n, s, r = this._makeCells(t);
		r && r.length && (s = this.cells.length, e = void 0 === e ? s : e, n = r, i = document.createDocumentFragment(), n.forEach(function(t) {
			i.appendChild(t.element)
		}), o = i, (t = e == s) ? this.slider.appendChild(o) : (n = this.cells[e].element, this.slider.insertBefore(o, n)), 0 === e ? this.cells = r.concat(this.cells) : t ? this.cells = this.cells.concat(r) : (s = this.cells.splice(e, s - e), this.cells = this.cells.concat(r).concat(s)), this._sizeCells(r), this.cellChange(e, !0))
	}, i.append = function(t) {
		this.insert(t, this.cells.length)
	}, i.prepend = function(t) {
		this.insert(t, 0)
	}, i.remove = function(t) {
		var i, t = this.getCells(t);
		t && t.length && (i = this.cells.length - 1, t.forEach(function(t) {
			t.remove();
			var e = this.cells.indexOf(t);
			i = Math.min(e, i), o.removeFrom(this.cells, t)
		}, this), this.cellChange(i, !0))
	}, i.cellSizeChange = function(t) {
		t = this.getCell(t);
		t && (t.getSize(), t = this.cells.indexOf(t), this.cellChange(t))
	}, i.cellChange = function(t, e) {
		var i = this.selectedElement;
		this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
		i = this.getCell(i);
		i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
	}, e
}),
function(t, i) {
	"function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(t, e) {
		return i(0, t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(0, require("./flickity"), require("fizzy-ui-utils")) : i(0, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, n) {
	"use strict";
	e.createMethods.push("_createLazyload");
	var i = e.prototype;

	function o(t, e) {
		this.img = t, this.flickity = e, this.load()
	}
	return i._createLazyload = function() {
		this.on("select", this.lazyLoad)
	}, i.lazyLoad = function() {
		var e, t = this.options.lazyLoad;
		t && (t = "number" == typeof t ? t : 0, t = this.getAdjacentCellElements(t), e = [], t.forEach(function(t) {
			t = function(t) {
				if ("IMG" == t.nodeName) {
					var e = t.getAttribute("data-flickity-lazyload"),
						i = t.getAttribute("data-flickity-lazyload-src"),
						o = t.getAttribute("data-flickity-lazyload-srcset");
					if (e || i || o) return [t]
				}
				t = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
				return n.makeArray(t)
			}(t);
			e = e.concat(t)
		}), e.forEach(function(t) {
			new o(t, this)
		}, this))
	}, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this);
		var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
			e = this.img.getAttribute("data-flickity-lazyload-srcset");
		this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
	}, o.prototype.onload = function(t) {
		this.complete(t, "flickity-lazyloaded")
	}, o.prototype.onerror = function(t) {
		this.complete(t, "flickity-lazyerror")
	}, o.prototype.complete = function(t, e) {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
		var i = this.flickity.getParentCell(this.img),
			i = i && i.element;
		this.flickity.cellSizeChange(i), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, i)
	}, e.LazyLoader = o, e
}),
function(t) {
	"function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}((window, function(t) {
	return t
})),
function(t, e) {
	"function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(i, o) {
	i.createMethods.push("_createAsNavFor");
	var t = i.prototype;
	return t._createAsNavFor = function() {
		this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
		var t, e = this.options.asNavFor;
		e && (t = this, setTimeout(function() {
			t.setNavCompanion(e)
		}))
	}, t.setNavCompanion = function(t) {
		t = o.getQueryElement(t);
		var e, t = i.data(t);
		t && t != this && (this.navCompanion = t, (e = this).onNavCompanionSelect = function() {
			e.navCompanionSelect()
		}, t.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0))
	}, t.navCompanionSelect = function(t) {
		var e, i, o;
		this.navCompanion && (i = this.navCompanion.selectedCells[0], o = (e = this.navCompanion.cells.indexOf(i)) + this.navCompanion.selectedCells.length - 1, i = Math.floor((o - e) * this.navCompanion.cellAlign + e), this.selectCell(i, !1, t), this.removeNavSelectedElements(), i >= this.cells.length || (o = this.cells.slice(e, 1 + o), this.navSelectedElements = o.map(function(t) {
			return t.element
		}), this.changeNavSelectedClass("add")))
	}, t.changeNavSelectedClass = function(e) {
		this.navSelectedElements.forEach(function(t) {
			t.classList[e]("is-nav-selected")
		})
	}, t.activateAsNavFor = function() {
		this.navCompanionSelect(!0)
	}, t.removeNavSelectedElements = function() {
		this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
	}, t.onNavStaticClick = function(t, e, i, o) {
		"number" == typeof o && this.navCompanion.selectCell(o)
	}, t.deactivateAsNavFor = function() {
		this.removeNavSelectedElements()
	}, t.destroyAsNavFor = function() {
		this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
	}, i
}),
function(e, i) {
	"use strict";
	"function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
	var s = e.jQuery,
		r = e.console;

	function a(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}
	var l = Array.prototype.slice;

	function d(t, e, i) {
		if (!(this instanceof d)) return new d(t, e, i);
		var o, n = t;
		"string" == typeof t && (n = document.querySelectorAll(t)), n ? (this.elements = (o = n, Array.isArray(o) ? o : "object" == typeof o && "number" == typeof o.length ? l.call(o) : [o]), this.options = a({}, this.options), "function" == typeof e ? i = e : a(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))) : r.error("Bad element for imagesLoaded " + (n || t))
	}(d.prototype = Object.create(t.prototype)).options = {}, d.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, d.prototype.addElementImages = function(t) {
		"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
		var e = t.nodeType;
		if (e && c[e]) {
			for (var i = t.querySelectorAll("img"), o = 0; o < i.length; o++) {
				var n = i[o];
				this.addImage(n)
			}
			if ("string" == typeof this.options.background)
				for (var s = t.querySelectorAll(this.options.background), o = 0; o < s.length; o++) {
					var r = s[o];
					this.addElementBackgroundImages(r)
				}
		}
	};
	var c = {
		1: !0,
		9: !0,
		11: !0
	};

	function i(t) {
		this.img = t
	}

	function o(t, e) {
		this.url = t, this.element = e, this.img = new Image
	}
	return d.prototype.addElementBackgroundImages = function(t) {
		var e = getComputedStyle(t);
		if (e)
			for (var i = /url\((['"])?(.*?)\1\)/gi, o = i.exec(e.backgroundImage); null !== o;) {
				var n = o && o[2];
				n && this.addBackground(n, t), o = i.exec(e.backgroundImage)
			}
	}, d.prototype.addImage = function(t) {
		t = new i(t);
		this.images.push(t)
	}, d.prototype.addBackground = function(t, e) {
		e = new o(t, e);
		this.images.push(e)
	}, d.prototype.check = function() {
		var o = this;

		function e(t, e, i) {
			setTimeout(function() {
				o.progress(t, e, i)
			})
		}
		this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
			t.once("progress", e), t.check()
		}) : this.complete()
	}, d.prototype.progress = function(t, e, i) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
	}, d.prototype.complete = function() {
		var t = this.hasAnyBroken ? "fail" : "done";
		this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[t](this))
	}, (i.prototype = Object.create(t.prototype)).check = function() {
		this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
	}, i.prototype.getIsImageComplete = function() {
		return this.img.complete && this.img.naturalWidth
	}, i.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
	}, i.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, i.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, i.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, (o.prototype = Object.create(i.prototype)).check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, o.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, o.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
	}, (d.makeJQueryPlugin = function(t) {
		(t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
			return new d(this, t, e).jqDeferred.promise(s(this))
		})
	})(), d
}),
function(t, i) {
	"function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
		return i(0, t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(0, require("flickity"), require("imagesloaded")) : t.Flickity = i(0, t.Flickity, t.imagesLoaded)
}(window, function(t, e, o) {
	"use strict";
	e.createMethods.push("_createImagesLoaded");
	var i = e.prototype;
	return i._createImagesLoaded = function() {
		this.on("activate", this.imagesLoaded)
	}, i.imagesLoaded = function() {
		var i;
		this.options.imagesLoaded && o((i = this).slider).on("progress", function(t, e) {
			e = i.getParentCell(e.img);
			i.cellSizeChange(e && e.element), i.options.freeScroll || i.positionSliderAtSelected()
		})
	}, e
}),
function(t, i) {
	"function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(t, e) {
		return i(0, t, e)
	}) : "object" == typeof module && module.exports ? module.exports = i(0, require("flickity"), require("imagesloaded")) : t.Flickity = i(0, t.Flickity, t.imagesLoaded)
}(window, function(t, e, o) {
	"use strict";
	e.createMethods.push("_createImagesLoaded");
	var i = e.prototype;
	return i._createImagesLoaded = function() {
		this.on("activate", this.imagesLoaded)
	}, i.imagesLoaded = function() {
		var i;
		this.options.imagesLoaded && o((i = this).slider).on("progress", function(t, e) {
			e = i.getParentCell(e.img), i.cellSizeChange(e && e.element), i.options.freeScroll || i.positionSliderAtSelected()
		})
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
	"use strict";
	t.createMethods.push("_createBgLazyLoad");
	var i = t.prototype;

	function o(t, e, i) {
		this.element = t, this.url = e, this.img = new Image, this.flickity = i, this.load()
	}
	return i._createBgLazyLoad = function() {
		this.on("select", this.bgLazyLoad)
	}, i.bgLazyLoad = function() {
		var t = this.options.bgLazyLoad;
		if (t)
			for (var t = "number" == typeof t ? t : 0, e = this.getAdjacentCellElements(t), i = 0; i < e.length; i++) {
				var o = e[i];
				this.bgLazyLoadElem(o);
				for (var n = o.querySelectorAll("[data-flickity-bg-lazyload]"), s = 0; s < n.length; s++) this.bgLazyLoadElem(n[s])
			}
	}, i.bgLazyLoadElem = function(t) {
		var e = t.getAttribute("data-flickity-bg-lazyload");
		e && new o(t, e, this)
	}, o.prototype.handleEvent = e.handleEvent, o.prototype.load = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.element.removeAttribute("data-flickity-bg-lazyload")
	}, o.prototype.onload = function(t) {
		this.element.style.backgroundImage = 'url("' + this.url + '")', this.complete(t, "flickity-bg-lazyloaded")
	}, o.prototype.onerror = function(t) {
		this.complete(t, "flickity-bg-lazyerror")
	}, o.prototype.complete = function(t, e) {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this), this.element.classList.add(e), this.flickity.dispatchEvent("bgLazyLoad", t, this.element)
	}, t.BgLazyLoader = o, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : e(t.Flickity, t.fizzyUIUtils)
}(this, function(t, o) {
	var e = t.Slide,
		n = e.prototype.updateTarget;
	e.prototype.updateTarget = function() {
		var i, o;
		n.apply(this, arguments), this.parent.options.fade && (i = this.target - this.x, o = this.cells[0].x, this.cells.forEach(function(t) {
			var e = t.x - o - i;
			t.renderPosition(e)
		}))
	}, e.prototype.setOpacity = function(e) {
		this.cells.forEach(function(t) {
			t.element.style.opacity = e
		})
	};
	e = t.prototype;
	t.createMethods.push("_createFade"), e._createFade = function() {
		this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
	};
	var i = e.updateSlides;
	e.updateSlides = function() {
		i.apply(this, arguments), this.options.fade && this.slides.forEach(function(t, e) {
			e = e == this.selectedIndex ? 1 : 0;
			t.setOpacity(e)
		}, this)
	}, e.onSelectFade = function() {
		this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
	}, e.onSettleFade = function() {
		delete this.didDragEnd, this.options.fade && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
	}, e.onDragEndFade = function() {
		this.didDragEnd = !0
	}, e.onActivateFade = function() {
		this.options.fade && this.element.classList.add("is-fade")
	}, e.onDeactivateFade = function() {
		this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(t) {
			t.setOpacity("")
		}))
	};
	var s = e.positionSlider;
	e.positionSlider = function() {
		this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : s.apply(this, arguments)
	};
	var r = e.positionSliderAtSelected;
	e.positionSliderAtSelected = function() {
		this.options.fade && this.setTranslateX(0), r.apply(this, arguments)
	}, e.fadeSlides = function() {
		var t, e, i, o, n;
		this.slides.length < 2 || (t = this.getFadeIndexes(), e = this.slides[t.a], n = this.slides[t.b], i = this.wrapDifference(e.target, n.target), o = this.wrapDifference(e.target, -this.x), o /= i, e.setOpacity(1 - o), n.setOpacity(o), n = t.a, this.isDragging && (n = .5 < o ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != n && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = n)
	}, e.getFadeIndexes = function() {
		return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
			a: this.fadeIndex,
			b: this.selectedIndex
		}
	}, e.getFadeDragWrapIndexes = function() {
		var t = this.slides.map(function(t, e) {
				return this.getSlideDistance(-this.x, e)
			}, this),
			e = t.map(function(t) {
				return Math.abs(t)
			}),
			i = Math.min.apply(Math, e),
			e = e.indexOf(i),
			i = t[e],
			t = this.slides.length,
			i = 0 <= i ? 1 : -1;
		return {
			a: e,
			b: o.modulo(e + i, t)
		}
	}, e.getFadeDragLimitIndexes = function() {
		for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
			var i = this.slides[e];
			if (-this.x < i.target) break;
			t = e
		}
		return {
			a: t,
			b: t + 1
		}
	}, e.wrapDifference = function(t, e) {
		var i = e - t;
		if (!this.options.wrapAround) return i;
		e = i + this.slideableWidth, t = i - this.slideableWidth;
		return Math.abs(e) < Math.abs(i) && (i = e), Math.abs(t) < Math.abs(i) && (i = t), i
	};
	var a = e._getWrapShiftCells;
	e._getWrapShiftCells = function() {
		this.options.fade || a.apply(this, arguments)
	};
	var l = e.shiftWrapCells;
	return e.shiftWrapCells = function() {
		this.options.fade || l.apply(this, arguments)
	}, t
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(l, d, c) {
		(c = c || e || t.jQuery) && (d.prototype.option || (d.prototype.option = function(t) {
			c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
		}), c.fn[l] = function(t) {
			if ("string" != typeof t) return a = t, this.each(function(t, e) {
				var i = c.data(e, l);
				i ? (i.option(a), i._init()) : (i = new d(e, a), c.data(e, l, i))
			}), this;
			var o, n, s, r, a, e = u.call(arguments, 1);
			return n = e, r = "$()." + l + '("' + (o = t) + '")', (t = this).each(function(t, e) {
				var i = c.data(e, l);
				i ? (e = i[o]) && "_" != o.charAt(0) ? (i = e.apply(i, n), s = void 0 === s ? i : s) : h(r + " is not a valid method") : h(l + " not initialized. Cannot call methods, i.e. " + r)
			}), void 0 !== s ? s : t
		}, o(c))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var u = Array.prototype.slice,
		n = t.console,
		h = void 0 === n ? function() {} : function(t) {
			n.error(t)
		};
	return o(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var i = this._events = this._events || {},
				t = i[t] = i[t] || [];
			return -1 == t.indexOf(e) && t.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var i = this._onceEvents = this._onceEvents || {};
			return (i[t] = i[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		t = this._events && this._events[t];
		if (t && t.length) {
			e = t.indexOf(e);
			return -1 != e && t.splice(e, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var i = this._events && this._events[t];
		if (i && i.length) {
			i = i.slice(0), e = e || [];
			for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
				var s = i[n];
				o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function p(t) {
		var e = parseFloat(t);
		return -1 == t.indexOf("%") && !isNaN(e) && e
	}

	function f(t) {
		t = getComputedStyle(t);
		return t || e("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
	}

	function m(t) {
		if (b || (b = !0, (h = document.createElement("div")).style.width = "200px", h.style.padding = "1px 2px 3px 4px", h.style.borderStyle = "solid", h.style.borderWidth = "1px 2px 3px 4px", h.style.boxSizing = "border-box", (u = document.body || document.documentElement).appendChild(h), c = f(h), g = 200 == Math.round(p(c.width)), m.isBoxSizeOuter = g, u.removeChild(h)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
			var e = f(t);
			if ("none" == e.display) return function() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0; e < y; e++) t[v[e]] = 0;
				return t
			}();
			var i = {};
			i.width = t.offsetWidth, i.height = t.offsetHeight;
			for (var o = i.isBorderBox = "border-box" == e.boxSizing, n = 0; n < y; n++) {
				var s = v[n],
					r = e[s],
					r = parseFloat(r);
				i[s] = isNaN(r) ? 0 : r
			}
			var a = i.paddingLeft + i.paddingRight,
				l = i.paddingTop + i.paddingBottom,
				d = i.marginLeft + i.marginRight,
				c = i.marginTop + i.marginBottom,
				u = i.borderLeftWidth + i.borderRightWidth,
				h = i.borderTopWidth + i.borderBottomWidth,
				t = o && g,
				o = p(e.width);
			!1 !== o && (i.width = o + (t ? 0 : a + u));
			o = p(e.height);
			return !1 !== o && (i.height = o + (t ? 0 : l + h)), i.innerWidth = i.width - (a + u), i.innerHeight = i.height - (l + h), i.outerWidth = i.width + d, i.outerHeight = i.height + c, i
		}
		var h, u, c
	}
	var g, e = "undefined" == typeof console ? function() {} : function(t) {
			console.error(t)
		},
		v = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		y = v.length,
		b = !1;
	return m
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var i = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var o = e[i] + "MatchesSelector";
			if (t[o]) return o
		}
	}();
	return function(t, e) {
		return t[i](e)
	}
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(i, s) {
	var d = {
			extend: function(t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			}
		},
		e = Array.prototype.slice;
	d.makeArray = function(t) {
		return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
	}, d.removeFrom = function(t, e) {
		e = t.indexOf(e); - 1 != e && t.splice(e, 1)
	}, d.getParent = function(t, e) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, s(t, e)) return t
	}, d.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, d.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, d.filterFindElements = function(t, o) {
		t = d.makeArray(t);
		var n = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement)
				if (o) {
					s(t, o) && n.push(t);
					for (var e = t.querySelectorAll(o), i = 0; i < e.length; i++) n.push(e[i])
				} else n.push(t)
		}), n
	}, d.debounceMethod = function(t, e, o) {
		o = o || 100;
		var n = t.prototype[e],
			s = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[s];
			clearTimeout(t);
			var e = arguments,
				i = this;
			this[s] = setTimeout(function() {
				n.apply(i, e), delete i[s]
			}, o)
		}
	}, d.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, d.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	};
	var c = i.console;
	return d.htmlInit = function(a, l) {
		d.docReady(function() {
			var t = d.toDashed(l),
				n = "data-" + t,
				e = document.querySelectorAll("[" + n + "]"),
				t = document.querySelectorAll(".js-" + t),
				t = d.makeArray(e).concat(d.makeArray(t)),
				s = n + "-options",
				r = i.jQuery;
			t.forEach(function(e) {
				var t, i = e.getAttribute(n) || e.getAttribute(s);
				try {
					t = i && JSON.parse(i)
				} catch (t) {
					return void(c && c.error("Error parsing " + n + " on " + e.className + ": " + t))
				}
				var o = new a(e, t);
				r && r.data(e, l, o)
			})
		})
	}, d
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var o = document.documentElement.style,
		n = "string" == typeof o.transition ? "transition" : "WebkitTransition",
		s = "string" == typeof o.transform ? "transform" : "WebkitTransform",
		r = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		}[n],
		a = {
			transform: s,
			transition: n,
			transitionDuration: n + "Duration",
			transitionProperty: n + "Property",
			transitionDelay: n + "Delay"
		},
		t = i.prototype = Object.create(t.prototype);
	t.constructor = i, t._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, t.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, t.getSize = function() {
		this.size = e(this.element)
	}, t.css = function(t) {
		var e, i = this.element.style;
		for (e in t) i[a[e] || e] = t[e]
	}, t.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = t[e ? "left" : "right"],
			n = t[i ? "top" : "bottom"],
			s = parseFloat(o),
			r = parseFloat(n),
			t = this.layout.size; - 1 != o.indexOf("%") && (s = s / 100 * t.width), -1 != n.indexOf("%") && (r = r / 100 * t.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? t.paddingLeft : t.paddingRight, r -= i ? t.paddingTop : t.paddingBottom, this.position.x = s, this.position.y = r
	}, t.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			o = this.layout._getOption("originTop"),
			n = i ? "paddingLeft" : "paddingRight",
			s = i ? "left" : "right",
			i = i ? "right" : "left",
			n = this.position.x + t[n];
		e[s] = this.getXValue(n), e[i] = "";
		n = o ? "paddingTop" : "paddingBottom", i = o ? "top" : "bottom", o = o ? "bottom" : "top", n = this.position.y + t[n];
		e[i] = this.getYValue(n), e[o] = "", this.css(e), this.emitEvent("layout", [this])
	}, t.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, t.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, t._transitionTo = function(t, e) {
		this.getPosition();
		var i = this.position.x,
			o = this.position.y,
			n = t == this.position.x && e == this.position.y;
		this.setPosition(t, e), !n || this.isTransitioning ? (i = t - i, e -= o, (o = {}).transform = this.getTranslate(i, e), this.transition({
			to: o,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})) : this.layoutPosition()
	}, t.getTranslate = function(t, e) {
		return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
	}, t.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, t.moveTo = t._transitionTo, t.setPosition = function(t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, t._nonTransition = function(t) {
		for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, t.transition = function(t) {
		if (parseFloat(this.layout.options.transitionDuration)) {
			var e, i = this._transn;
			for (e in t.onTransitionEnd) i.onEnd[e] = t.onTransitionEnd[e];
			for (e in t.to) i.ingProperties[e] = !0, t.isCleaning && (i.clean[e] = !0);
			t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		} else this._nonTransition(t)
	};
	var l = "opacity," + s.replace(/([A-Z])/g, function(t) {
		return "-" + t.toLowerCase()
	});
	t.enableTransition = function() {
		var t;
		this.isTransitioning || (t = "number" == typeof(t = this.layout.options.transitionDuration) ? t + "ms" : t, this.css({
			transitionProperty: l,
			transitionDuration: t,
			transitionDelay: this.staggerDelay || 0
		}), this.element.addEventListener(r, this, !1))
	}, t.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, t.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var d = {
		"-webkit-transform": "transform"
	};
	t.ontransitionend = function(t) {
		var e, i;
		t.target === this.element && (e = this._transn, i = d[t.propertyName] || t.propertyName, delete e.ingProperties[i], function(t) {
			for (var e in t) return;
			return 1
		}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
	}, t.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1
	}, t._removeStyles = function(t) {
		var e, i = {};
		for (e in t) i[e] = "";
		this.css(i)
	};
	var c = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return t.removeTransitionStyles = function() {
		this.css(c)
	}, t.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, t.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, t.remove = function() {
		return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, t.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, t.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, t.getHideRevealTransitionEndProperty = function(t) {
		var e, t = this.layout.options[t];
		if (t.opacity) return "opacity";
		for (e in t) return e
	}, t.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, t.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, t.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, i
}),
function(n, s) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, o) {
		return s(n, t, e, i, o)
	}) : "object" == typeof module && module.exports ? module.exports = s(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = s(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function(t, e, n, o, s) {
	"use strict";

	function r(t, e) {
		var i = o.getQueryElement(t);
		i ? (this.element = i, d && (this.$element = d(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e), e = ++c, this.element.outlayerGUID = e, (u[e] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
	}

	function a(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}

	function i() {}
	var l = t.console,
		d = t.jQuery,
		c = 0,
		u = {};
	r.namespace = "outlayer", r.Item = s, r.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var h = r.prototype;
	o.extend(h, e.prototype), h.option = function(t) {
		o.extend(this.options, t)
	}, h._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, r.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, h._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
	}, h.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, h._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
			var s = new i(e[n], this);
			o.push(s)
		}
		return o
	}, h._filterFindItemElements = function(t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, h.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, h.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			t = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, t), this._isLayoutInited = !0
	}, h._init = h.layout, h._resetLayout = function() {
		this.getSize()
	}, h.getSize = function() {
		this.size = n(this.element)
	}, h._getMeasurement = function(t, e) {
		var i, o = this.options[t];
		o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
	}, h.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, h._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, h._layoutItems = function(t, i) {
		var o;
		this._emitCompleteOnItems("layout", t), t && t.length && (o = [], t.forEach(function(t) {
			var e = this._getItemLayoutPosition(t);
			e.item = t, e.isInstant = i || t.isLayoutInstant, o.push(e)
		}, this), this._processLayoutQueue(o))
	}, h._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, h._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, h.updateStagger = function() {
		var t = this.options.stagger;
		return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
			if ("number" == typeof t) return t;
			var t = (e = t.match(/(^\d*\.?\d*)(\w*)/)) && e[1],
				e = e && e[2];
			return t.length ? (t = parseFloat(t)) * (p[e] || 1) : 0
		}(t), this.stagger)
	}, h._positionItem = function(t, e, i, o, n) {
		o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
	}, h._postLayout = function() {
		this.resizeContainer()
	}, h.resizeContainer = function() {
		var t;
		!this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, h._getContainerSize = i, h._setContainerMeasure = function(t, e) {
		var i;
		void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
	}, h._emitCompleteOnItems = function(e, t) {
		function i() {
			s.dispatchEvent(e + "Complete", null, [t])
		}

		function o() {
			++n == r && i()
		}
		var n, s = this,
			r = t.length;
		t && r ? (n = 0, t.forEach(function(t) {
			t.once(e, o)
		})) : i()
	}, h.dispatchEvent = function(t, e, i) {
		var o = e ? [e].concat(i) : i;
		this.emitEvent(t, o), d && (this.$element = this.$element || d(this.element), e ? ((e = d.Event(e)).type = t, this.$element.trigger(e, i)) : this.$element.trigger(t, i))
	}, h.ignore = function(t) {
		t = this.getItem(t);
		t && (t.isIgnored = !0)
	}, h.unignore = function(t) {
		t = this.getItem(t);
		t && delete t.isIgnored
	}, h.stamp = function(t) {
		(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, h.unstamp = function(t) {
		(t = this._find(t)) && t.forEach(function(t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, h._find = function(t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), o.makeArray(t)
	}, h._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, h._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, h._manageStamp = i, h._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			i = this._boundingRect,
			t = n(t);
		return {
			left: e.left - i.left - t.marginLeft,
			top: e.top - i.top - t.marginTop,
			right: i.right - e.right - t.marginRight,
			bottom: i.bottom - e.bottom - t.marginBottom
		}
	}, h.handleEvent = o.handleEvent, h.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, h.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, h.onresize = function() {
		this.resize()
	}, o.debounceMethod(r, "onresize", 100), h.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, h.needsResizeLayout = function() {
		var t = n(this.element);
		return this.size && t && t.innerWidth !== this.size.innerWidth
	}, h.addItems = function(t) {
		t = this._itemize(t);
		return t.length && (this.items = this.items.concat(t)), t
	}, h.appended = function(t) {
		t = this.addItems(t);
		t.length && (this.layoutItems(t, !0), this.reveal(t))
	}, h.prepended = function(t) {
		var e = this._itemize(t);
		e.length && (t = this.items.slice(0), this.items = e.concat(t), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(t))
	}, h.reveal = function(t) {
		var i;
		this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.reveal()
		}))
	}, h.hide = function(t) {
		var i;
		this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.hide()
		}))
	}, h.revealItemElements = function(t) {
		t = this.getItems(t);
		this.reveal(t)
	}, h.hideItemElements = function(t) {
		t = this.getItems(t);
		this.hide(t)
	}, h.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, h.getItems = function(t) {
		t = o.makeArray(t);
		var e = [];
		return t.forEach(function(t) {
			t = this.getItem(t);
			t && e.push(t)
		}, this), e
	}, h.remove = function(t) {
		t = this.getItems(t);
		this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, h.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		t = this.element.outlayerGUID;
		delete u[t], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace)
	}, r.data = function(t) {
		t = (t = o.getQueryElement(t)) && t.outlayerGUID;
		return t && u[t]
	}, r.create = function(t, e) {
		var i = a(r);
		return i.defaults = o.extend({}, r.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = a(s), o.htmlInit(i, t), d && d.bridget && d.bridget(t, i), i
	};
	var p = {
		ms: 1,
		s: 1e3
	};
	return r.Item = s, r
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var i = e.prototype = Object.create(t.Item.prototype),
		o = i._create;
	i._create = function() {
		this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
	}, i.updateSortData = function() {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t, e = this.layout.options.getSortData,
				i = this.layout._sorters;
			for (t in e) {
				var o = i[t];
				this.sortData[t] = o(this.element, this)
			}
		}
	};
	var n = i.destroy;
	return i.destroy = function() {
		n.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(e, i) {
	"use strict";

	function o(t) {
		(this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var n = o.prototype;
	return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
		n[t] = function() {
			return i.prototype[t].apply(this.isotope, arguments)
		}
	}), n.needsVerticalResizeLayout = function() {
		var t = e(this.isotope.element);
		return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
	}, n._getMeasurement = function() {
		this.isotope._getMeasurement.apply(this, arguments)
	}, n.getColumnWidth = function() {
		this.getSegmentSize("column", "Width")
	}, n.getRowHeight = function() {
		this.getSegmentSize("row", "Height")
	}, n.getSegmentSize = function(t, e) {
		var i = t + e,
			o = "outer" + e;
		this._getMeasurement(i, o), this[i] || (t = this.getFirstItemSize(), this[i] = t && t[o] || this.isotope.size["inner" + e])
	}, n.getFirstItemSize = function() {
		var t = this.isotope.filteredItems[0];
		return t && t.element && e(t.element)
	}, n.layout = function() {
		this.isotope.layout.apply(this.isotope, arguments)
	}, n.getSize = function() {
		this.isotope.getSize(), this.size = this.isotope.size
	}, o.modes = {}, o.create = function(t, e) {
		function i() {
			o.apply(this, arguments)
		}
		return (i.prototype = Object.create(n)).constructor = i, e && (i.options = e), o.modes[i.prototype.namespace = t] = i
	}, o
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, a) {
	var e = t.create("masonry");
	e.compatOptions.fitWidth = "isFitWidth";
	t = e.prototype;
	return t._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, t.measureColumns = function() {
		this.getContainerWidth(), this.columnWidth || (i = (e = this.items[0]) && e.element, this.columnWidth = i && a(i).outerWidth || this.containerWidth);
		var t = this.columnWidth += this.gutter,
			e = this.containerWidth + this.gutter,
			i = e / t,
			t = t - e % t,
			i = Math[t && t < 1 ? "round" : "floor"](i);
		this.cols = Math.max(i, 1)
	}, t.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			t = a(t);
		this.containerWidth = t && t.innerWidth
	}, t._getItemLayoutPosition = function(t) {
		t.getSize();
		for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), o = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), e = {
				x: this.columnWidth * o.col,
				y: o.y
			}, n = o.y + t.size.outerHeight, s = i + o.col, r = o.col; r < s; r++) this.colYs[r] = n;
		return e
	}, t._getTopColPosition = function(t) {
		var e = this._getTopColGroup(t),
			t = Math.min.apply(Math, e);
		return {
			col: e.indexOf(t),
			y: t
		}
	}, t._getTopColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
		return e
	}, t._getColGroupY = function(t, e) {
		if (e < 2) return this.colYs[t];
		e = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, e)
	}, t._getHorizontalColPosition = function(t, e) {
		var i = this.horizontalColIndex % this.cols,
			i = 1 < t && i + t > this.cols ? 0 : i,
			e = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = e ? i + t : this.horizontalColIndex, {
			col: i,
			y: this._getColGroupY(i, t)
		}
	}, t._manageStamp = function(t) {
		var e = a(t),
			i = this._getElementOffset(t),
			o = this._getOption("originLeft") ? i.left : i.right,
			t = o + e.outerWidth,
			o = Math.floor(o / this.columnWidth),
			o = Math.max(0, o),
			n = Math.floor(t / this.columnWidth);
		n -= t % this.columnWidth ? 0 : 1, n = Math.min(this.cols - 1, n);
		for (var s = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, r = o; r <= n; r++) this.colYs[r] = Math.max(s, this.colYs[r])
	}, t._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, t._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, t.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
	"use strict";
	var i, t = t.create("masonry"),
		o = t.prototype,
		n = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (i in e.prototype) n[i] || (o[i] = e.prototype[i]);
	var s = o.measureColumns;
	o.measureColumns = function() {
		this.items = this.isotope.filteredItems, s.call(this)
	};
	var r = o._getOption;
	return o._getOption = function(t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("fitRows"),
		t = e.prototype;
	return t._resetLayout = function() {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, t._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			i = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
		i = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
	}, t._getContainerSize = function() {
		return {
			height: this.maxY
		}
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		t = e.prototype;
	return t._resetLayout = function() {
		this.y = 0
	}, t._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			i = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: i
		}
	}, t._getContainerSize = function() {
		return {
			height: this.y
		}
	}, e
}),
function(r, a) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(t, e, i, o, n, s) {
		return a(r, t, 0, i, o, n, s)
	}) : "object" == typeof module && module.exports ? module.exports = a(r, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : r.Isotope = a(r, r.Outlayer, r.getSize, r.matchesSelector, r.fizzyUIUtils, r.Isotope.Item, r.Isotope.LayoutMode)
}(window, function(t, i, e, o, s, n, r) {
	var a = t.jQuery,
		l = String.prototype.trim ? function(t) {
			return t.trim()
		} : function(t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		d = i.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	d.Item = n, d.LayoutMode = r;
	n = d.prototype;
	n._create = function() {
		for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), i.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], r.modes) this._initLayoutMode(t)
	}, n.reloadItems = function() {
		this.itemGUID = 0, i.prototype.reloadItems.call(this)
	}, n._itemize = function() {
		for (var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) t[e].id = this.itemGUID++;
		return this._updateItemsSortData(t), t
	}, n._initLayoutMode = function(t) {
		var e = r.modes[t],
			i = this.options[t] || {};
		this.options[t] = e.options ? s.extend(e.options, i) : i, this.modes[t] = new e(this)
	}, n.layout = function() {
		return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
	}, n._layout = function() {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, n.arrange = function(t) {
		this.option(t), this._getIsInstant();
		t = this._filter(this.items);
		this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
	}, n._init = n.arrange, n._hideReveal = function(t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, n._getIsInstant = function() {
		var t = this._getOption("layoutInstant"),
			t = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = t
	}, n._bindArrangeComplete = function() {
		function t() {
			e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
		}
		var e, i, o, n = this;
		this.once("layoutComplete", function() {
			e = !0, t()
		}), this.once("hideComplete", function() {
			i = !0, t()
		}), this.once("revealComplete", function() {
			o = !0, t()
		})
	}, n._filter = function(t) {
		for (var e = (e = this.options.filter) || "*", i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
			var a, l = t[r];
			l.isIgnored || ((a = s(l)) && i.push(l), a && l.isHidden ? o.push(l) : a || l.isHidden || n.push(l))
		}
		return {
			matches: i,
			needReveal: o,
			needHide: n
		}
	}, n._getFilterTest = function(e) {
		return a && this.options.isJQueryFiltering ? function(t) {
			return a(t.element).is(e)
		} : "function" == typeof e ? function(t) {
			return e(t.element)
		} : function(t) {
			return o(t.element, e)
		}
	}, n.updateSortData = function(t) {
		t = t ? (t = s.makeArray(t), this.getItems(t)) : this.items;
		this._getSorters(), this._updateItemsSortData(t)
	}, n._getSorters = function() {
		var t, e = this.options.getSortData;
		for (t in e) {
			var i = e[t];
			this._sorters[t] = c(i)
		}
	}, n._updateItemsSortData = function(t) {
		for (var e = t && t.length, i = 0; e && i < e; i++) t[i].updateSortData()
	};
	var c = function(t) {
		if ("string" != typeof t) return t;
		var e, i, o = l(t).split(" "),
			n = o[0],
			t = (t = n.match(/^\[(.+)\]$/)) && t[1],
			s = (i = n, (e = t) ? function(t) {
				return t.getAttribute(e)
			} : function(t) {
				t = t.querySelector(i);
				return t && t.textContent
			}),
			r = d.sortDataParsers[o[1]];
		return r ? function(t) {
			return t && r(s(t))
		} : function(t) {
			return t && s(t)
		}
	};
	d.sortDataParsers = {
		parseInt: function(t) {
			return parseInt(t, 10)
		},
		parseFloat: function(t) {
			return parseFloat(t)
		}
	}, n._sort = function() {
		var t, r, a;
		this.options.sortBy && (t = s.makeArray(this.options.sortBy), this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)), r = this.sortHistory, a = this.options.sortAscending, t = function(t, e) {
			for (var i = 0; i < r.length; i++) {
				var o = r[i],
					n = t.sortData[o],
					s = e.sortData[o];
				if (s < n || n < s) return (s < n ? 1 : -1) * ((void 0 !== a[o] ? a[o] : a) ? 1 : -1)
			}
			return 0
		}, this.filteredItems.sort(t))
	}, n._getIsSameSortBy = function(t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, n._mode = function() {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, n._resetLayout = function() {
		i.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, n._getItemLayoutPosition = function(t) {
		return this._mode()._getItemLayoutPosition(t)
	}, n._manageStamp = function(t) {
		this._mode()._manageStamp(t)
	}, n._getContainerSize = function() {
		return this._mode()._getContainerSize()
	}, n.needsResizeLayout = function() {
		return this._mode().needsResizeLayout()
	}, n.appended = function(t) {
		t = this.addItems(t);
		t.length && (t = this._filterRevealAdded(t), this.filteredItems = this.filteredItems.concat(t))
	}, n.prepended = function(t) {
		var e = this._itemize(t);
		e.length && (this._resetLayout(), this._manageStamps(), t = this._filterRevealAdded(e), this.layoutItems(this.filteredItems), this.filteredItems = t.concat(this.filteredItems), this.items = e.concat(this.items))
	}, n._filterRevealAdded = function(t) {
		t = this._filter(t);
		return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
	}, n.insert = function(t) {
		var e = this.addItems(t);
		if (e.length) {
			for (var i, o = e.length, n = 0; n < o; n++) i = e[n], this.element.appendChild(i.element);
			t = this._filter(e).matches;
			for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;
			for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;
			this.reveal(t)
		}
	};
	var u = n.remove;
	return n.remove = function(t) {
		t = s.makeArray(t);
		var e = this.getItems(t);
		u.call(this, t);
		for (var i = e && e.length, o = 0; i && o < i; o++) {
			var n = e[o];
			s.removeFrom(this.filteredItems, n)
		}
	}, n.shuffle = function() {
		for (var t = 0; t < this.items.length; t++) this.items[t].sortData.random = Math.random();
		this.options.sortBy = "random", this._sort(), this._layout()
	}, n._noTransition = function(t, e) {
		var i = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		e = t.apply(this, e);
		return this.options.transitionDuration = i, e
	}, n.getFilteredItemElements = function() {
		return this.filteredItems.map(function(t) {
			return t.element
		})
	}, d
}),
function(a) {
	a.fn.ihavecookies = function(t, e) {
		var o, i, n = a(this),
			s = a.extend({
				cookieTypes: [{
					type: "Site Preferences",
					value: "preferences",
					description: "These are cookies that are related to your site preferences, e.g. remembering your username, site colours, etc."
				}, {
					type: "Analytics",
					value: "analytics",
					description: "Cookies related to site visits, browser types, etc."
				}, {
					type: "Marketing",
					value: "marketing",
					description: "Cookies related to marketing, e.g. newsletters, social media, etc"
				}],
				title: "Cookies & Privacy",
				message: "Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches, and give us insights into user behavior so we can improve our communications and products.",
				link: "/privacy-policy",
				delay: 2e3,
				expires: 30,
				moreInfoLabel: "More information",
				acceptBtnLabel: "Accept Cookies",
				advancedBtnLabel: "Customise Cookies",
				cookieTypesTitle: "Select cookies to accept",
				fixedCookieTypeLabel: "Necessary",
				fixedCookieTypeDesc: "These are cookies that are essential for the website to work correctly.",
				onAccept: function() {},
				uncheckBoxes: !1
			}, t),
			r = c("cookieControl"),
			t = c("cookieControlPrefs");
		r && t && "reinit" != e ? l("false" == r ? !1 : !0, s.expires) : (a("#gdpr-cookie-message").remove(), o = '<li><input type="checkbox" name="gdpr[]" value="necessary" checked="checked" disabled="disabled"> <label title="' + s.fixedCookieTypeDesc + '">' + s.fixedCookieTypeLabel + "</label></li>", preferences = JSON.parse(t), a.each(s.cookieTypes, function(t, e) {
			var i;
			"" !== e.type && "" !== e.value && (i = "", !1 !== e.description && (i = ' title="' + e.description + '"'), o += '<li><input type="checkbox" id="gdpr-cookietype-' + e.value + '" name="gdpr[]" value="' + e.value + '" data-auto="on"> <label for="gdpr-cookietype-' + e.value + '"' + i + ">" + e.type + "</label></li>")
		}), i = '<div id="gdpr-cookie-message"><h4>' + s.title + "</h4><p>" + s.message + ' <a href="' + s.link + '">' + s.moreInfoLabel + '</a><div id="gdpr-cookie-types" style="display:none;"><h5>' + s.cookieTypesTitle + "</h5><ul>" + o + '</ul></div><p><button id="gdpr-cookie-accept" type="button">' + s.acceptBtnLabel + '</button><button id="gdpr-cookie-advanced" type="button">' + s.advancedBtnLabel + "</button></p></div>", setTimeout(function() {
			a(n).append(i), a("#gdpr-cookie-message").hide().fadeIn("slow", function() {
				"reinit" == e && (a("#gdpr-cookie-advanced").trigger("click"), a.each(preferences, function(t, e) {
					a("input#gdpr-cookietype-" + e).prop("checked", !0)
				}))
			})
		}, s.delay), a("body").on("click", "#gdpr-cookie-accept", function() {
			l(!0, s.expires), a('input[name="gdpr[]"][data-auto="on"]').prop("checked", !0);
			var i = [];
			a.each(a('input[name="gdpr[]"]').serializeArray(), function(t, e) {
				i.push(e.value)
			}), d("cookieControlPrefs", JSON.stringify(i), 365), s.onAccept.call(this)
		}), a("body").on("click", "#gdpr-cookie-advanced", function() {
			a('input[name="gdpr[]"]:not(:disabled)').attr("data-auto", "off").prop("checked", !1), a("#gdpr-cookie-types").slideDown("fast", function() {
				a("#gdpr-cookie-advanced").prop("disabled", !0)
			})
		})), !0 === s.uncheckBoxes && a('input[type="checkbox"].ihavecookies').prop("checked", !1)
	}, a.fn.ihavecookies.cookie = function() {
		var t = c("cookieControlPrefs");
		return JSON.parse(t)
	}, a.fn.ihavecookies.preference = function(t) {
		var e = c("cookieControl"),
			i = c("cookieControlPrefs"),
			i = JSON.parse(i);
		return !1 !== e && !1 !== i && -1 !== i.indexOf(t)
	};
	var l = function(t, e) {
			d("cookieControl", t, e), a("#gdpr-cookie-message").fadeOut("fast", function() {
				a(this).remove()
			})
		},
		d = function(t, e, i) {
			var o = new Date;
			o.setTime(o.getTime() + 24 * i * 60 * 60 * 1e3);
			o = "expires=" + o.toUTCString();
			return document.cookie = t + "=" + e + ";" + o + ";path=/", c(t)
		},
		c = function(t) {
			for (var e = t + "=", i = decodeURIComponent(document.cookie).split(";"), o = 0; o < i.length; o++) {
				for (var n = i[o];
					" " == n.charAt(0);) n = n.substring(1);
				if (0 === n.indexOf(e)) return n.substring(e.length, n.length)
			}
			return !1
		}
}(jQuery),
function() {
	var t, i, e, o, n, s, r, a, l = window.device,
		d = {};
	window.device = d, i = window.document.documentElement, a = window.navigator.userAgent.toLowerCase(), d.ios = function() {
		return d.iphone() || d.ipod() || d.ipad()
	}, d.iphone = function() {
		return !d.windows() && e("iphone")
	}, d.ipod = function() {
		return e("ipod")
	}, d.ipad = function() {
		return e("ipad")
	}, d.android = function() {
		return !d.windows() && e("android")
	}, d.androidPhone = function() {
		return d.android() && e("mobile")
	}, d.androidTablet = function() {
		return d.android() && !e("mobile")
	}, d.blackberry = function() {
		return e("blackberry") || e("bb10") || e("rim")
	}, d.blackberryPhone = function() {
		return d.blackberry() && !e("tablet")
	}, d.blackberryTablet = function() {
		return d.blackberry() && e("tablet")
	}, d.windows = function() {
		return e("windows")
	}, d.windowsPhone = function() {
		return d.windows() && e("phone")
	}, d.windowsTablet = function() {
		return d.windows() && e("touch") && !d.windowsPhone()
	}, d.fxos = function() {
		return (e("(mobile;") || e("(tablet;")) && e("; rv:")
	}, d.fxosPhone = function() {
		return d.fxos() && e("mobile")
	}, d.fxosTablet = function() {
		return d.fxos() && e("tablet")
	}, d.meego = function() {
		return e("meego")
	}, d.cordova = function() {
		return window.cordova && "file:" === location.protocol
	}, d.nodeWebkit = function() {
		return "object" == typeof window.process
	}, d.mobile = function() {
		return d.androidPhone() || d.iphone() || d.ipod() || d.windowsPhone() || d.blackberryPhone() || d.fxosPhone() || d.meego()
	}, d.tablet = function() {
		return d.ipad() || d.androidTablet() || d.blackberryTablet() || d.windowsTablet() || d.fxosTablet()
	}, d.desktop = function() {
		return !d.tablet() && !d.mobile()
	}, d.television = function() {
		var t;
		for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], t = 0; t < television.length;) {
			if (e(television[t])) return !0;
			t++
		}
		return !1
	}, d.portrait = function() {
		return 1 < window.innerHeight / window.innerWidth
	}, d.landscape = function() {
		return window.innerHeight / window.innerWidth < 1
	}, d.noConflict = function() {
		return window.device = l, this
	}, e = function(t) {
		return -1 !== a.indexOf(t)
	}, n = function(t) {
		t = new RegExp(t, "i");
		return i.className.match(t)
	}, t = function(t) {
		var e;
		n(t) || (e = i.className.replace(/^\s+|\s+$/g, ""), i.className = e + " " + t)
	}, r = function(t) {
		n(t) && (i.className = i.className.replace(" " + t, ""))
	}, d.ios() ? d.ipad() ? t("ios ipad tablet") : d.iphone() ? t("ios iphone mobile") : d.ipod() && t("ios ipod mobile") : d.android() ? d.androidTablet() ? t("android tablet") : t("android mobile") : d.blackberry() ? d.blackberryTablet() ? t("blackberry tablet") : t("blackberry mobile") : d.windows() ? d.windowsTablet() ? t("windows tablet") : d.windowsPhone() ? t("windows mobile") : t("desktop") : d.fxos() ? d.fxosTablet() ? t("fxos tablet") : t("fxos mobile") : d.meego() ? t("meego mobile") : d.nodeWebkit() ? t("node-webkit") : d.television() ? t("television") : d.desktop() && t("desktop"), d.cordova() && t("cordova"), o = function() {
		d.landscape() ? (r("portrait"), t("landscape")) : (r("landscape"), t("portrait"))
	}, s = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(s, o, !1) : window.attachEvent ? window.attachEvent(s, o) : window[s] = o, o(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
		return d
	}) : "undefined" != typeof module && module.exports ? module.exports = d : window.device = d
}.call(this), window.matchMedia || (window.matchMedia = function() {
		"use strict";
		var e, t, i, o = window.styleMedia || window.media;
		return o || (e = document.createElement("style"), t = document.getElementsByTagName("script")[0], i = null, e.type = "text/css", e.id = "matchmediajs-test", t.parentNode.insertBefore(e, t), i = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, o = {
				matchMedium: function(t) {
					t = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
					return e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t, "1px" === i.width
				}
			}),
			function(t) {
				return {
					matches: o.matchMedium(t || "all"),
					media: t || "all"
				}
			}
	}()),
	function(a, l, t) {
		"use strict";

		function e(t) {
			"object" == typeof module && "object" == typeof module.exports ? module.exports = t : "function" == typeof define && define.amd && define("picturefill", function() {
				return t
			}), "object" == typeof a && (a.picturefill = t)
		}

		function n(t) {
			for (var e, i, o, n, s = t || {}, r = s.elements || d.getAllElements(), a = 0, l = r.length; a < l; a++)
				if (i = (e = r[a]).parentNode, n = o = void 0, "IMG" === e.nodeName.toUpperCase() && (e[d.ns] || (e[d.ns] = {}), s.reevaluate || !e[d.ns].evaluated)) {
					if (i && "PICTURE" === i.nodeName.toUpperCase()) {
						if (d.removeVideoShim(i), !1 === (o = d.getMatch(e, i))) continue
					} else o = void 0;
					(i && "PICTURE" === i.nodeName.toUpperCase() || !d.sizesSupported && e.srcset && c.test(e.srcset)) && d.dodgeSrcset(e), o ? (n = d.processSourceSet(o), d.applyBestCandidate(n, e)) : (n = d.processSourceSet(e), void 0 !== e.srcset && !e[d.ns].srcset || d.applyBestCandidate(n, e)), e[d.ns].evaluated = !0
				}
		}
		if (a.HTMLPictureElement) return e(function() {});
		l.createElement("picture");
		var o, i, d = a.picturefill || {},
			c = /\s+\+?\d+(e\d+)?w/;

		function s(t, e, i) {
			e && t.setAttribute("width", parseInt(e / i, 10))
		}
		d.ns = "picturefill", d.srcsetSupported = "srcset" in t, d.sizesSupported = "sizes" in t, d.curSrcSupported = "currentSrc" in t, d.trim = function(t) {
				return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
			}, d.makeUrl = (i = l.createElement("a"), function(t) {
				return i.href = t, i.href
			}), d.restrictsMixedContent = function() {
				return "https:" === a.location.protocol
			}, d.matchesMedia = function(t) {
				return a.matchMedia && a.matchMedia(t).matches
			}, d.getDpr = function() {
				return a.devicePixelRatio || 1
			}, d.getWidthFromLength = function(t) {
				var e;
				if (!t || -1 < t.indexOf("%") != 0 || !(0 < parseFloat(t) || -1 < t.indexOf("calc("))) return !1;
				t = t.replace("vw", "%"), d.lengthEl || (d.lengthEl = l.createElement("div"), d.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden", d.lengthEl.className = "helper-from-picturefill-js"), d.lengthEl.style.width = "0px";
				try {
					d.lengthEl.style.width = t
				} catch (t) {}
				return l.body.appendChild(d.lengthEl), (e = d.lengthEl.offsetWidth) <= 0 && (e = !1), l.body.removeChild(d.lengthEl), e
			}, d.detectTypeSupport = function(t, e) {
				var i = new a.Image;
				return i.onerror = function() {
					d.types[t] = !1, n()
				}, i.onload = function() {
					d.types[t] = 1 === i.width, n()
				}, i.src = e, "pending"
			}, d.types = d.types || {}, d.initTypeDetects = function() {
				d.types["image/jpeg"] = !0, d.types["image/gif"] = !0, d.types["image/png"] = !0, d.types["image/svg+xml"] = l.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), d.types["image/webp"] = d.detectTypeSupport("image/webp", "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")
			}, d.verifyTypeSupport = function(t) {
				var e = t.getAttribute("type");
				if (null === e || "" === e) return !0;
				t = d.types[e];
				return "string" == typeof t && "pending" !== t ? (d.types[e] = d.detectTypeSupport(e, t), "pending") : "function" == typeof t ? (t(), "pending") : t
			}, d.parseSize = function(t) {
				t = /(\([^)]+\))?\s*(.+)/g.exec(t);
				return {
					media: t && t[1],
					length: t && t[2]
				}
			}, d.findWidthFromSourceSize = function(t) {
				for (var e, i = d.trim(t).split(/\s*,\s*/), o = 0, n = i.length; o < n; o++) {
					var s = i[o],
						r = d.parseSize(s),
						s = r.length,
						r = r.media;
					if (s && (!r || d.matchesMedia(r)) && (e = d.getWidthFromLength(s))) break
				}
				return e || Math.max(a.innerWidth || 0, l.documentElement.clientWidth)
			}, d.parseSrcset = function(t) {
				for (var e = [];
					"" !== t;) {
					var i, o = (t = t.replace(/^\s+/g, "")).search(/\s/g),
						n = null; - 1 !== o ? ("," !== (i = t.slice(0, o)).slice(-1) && "" !== i || (i = i.replace(/,+$/, ""), n = ""), t = t.slice(o + 1), null === n && (t = -1 !== (o = t.indexOf(",")) ? (n = t.slice(0, o), t.slice(o + 1)) : (n = t, ""))) : (i = t, t = ""), (i || n) && e.push({
						url: i,
						descriptor: n
					})
				}
				return e
			}, d.parseDescriptor = function(t, e) {
				var e = e || "100vw",
					t = t && t.replace(/(^\s+|\s+$)/g, ""),
					i = d.findWidthFromSourceSize(e);
				if (t)
					for (var o = t.split(" "), n = o.length - 1; 0 <= n; n--) {
						var s, r = o[n],
							a = r && r.slice(r.length - 1);
						"h" !== a && "w" !== a || d.sizesSupported ? "x" === a && (s = (a = r && parseFloat(r, 10)) && !isNaN(a) ? a : 1) : s = parseFloat(parseInt(r, 10) / i)
					}
				return s || 1
			}, d.getCandidatesFromSourceSet = function(t, e) {
				for (var i = d.parseSrcset(t), o = [], n = 0, s = i.length; n < s; n++) {
					var r = i[n];
					o.push({
						url: r.url,
						resolution: d.parseDescriptor(r.descriptor, e)
					})
				}
				return o
			}, d.dodgeSrcset = function(t) {
				t.srcset && (t[d.ns].srcset = t.srcset, t.srcset = "", t.setAttribute("data-pfsrcset", t[d.ns].srcset))
			}, d.processSourceSet = function(t) {
				var e = t.getAttribute("srcset"),
					i = t.getAttribute("sizes"),
					o = [];
				return "IMG" === t.nodeName.toUpperCase() && t[d.ns] && t[d.ns].srcset && (e = t[d.ns].srcset), e && (o = d.getCandidatesFromSourceSet(e, i)), o
			}, d.backfaceVisibilityFix = function(t) {
				var e = t.style || {},
					i = "webkitBackfaceVisibility" in e,
					o = e.zoom;
				i && (e.zoom = ".999", t.offsetWidth, e.zoom = o)
			}, d.setIntrinsicSize = (o = {}, function(t, e) {
				var i;
				t[d.ns] && !a.pfStopIntrinsicSize && (void 0 === t[d.ns].dims && (t[d.ns].dims = t.getAttribute("width") || t.getAttribute("height")), t[d.ns].dims || (e.url in o ? s(t, o[e.url], e.resolution) : ((i = l.createElement("img")).onload = function() {
					if (o[e.url] = i.width, !o[e.url]) try {
						l.body.appendChild(i), o[e.url] = i.width || i.offsetWidth, l.body.removeChild(i)
					} catch (t) {}
					t.src === e.url && s(t, o[e.url], e.resolution), t = null, i.onload = null, i = null
				}, i.src = e.url)))
			}), d.applyBestCandidate = function(t, e) {
				var i, o, n;
				t.sort(d.ascendingSort), n = t[(o = t.length) - 1];
				for (var s = 0; s < o; s++)
					if ((i = t[s]).resolution >= d.getDpr()) {
						n = i;
						break
					}
				n && (n.url = d.makeUrl(n.url), e.src !== n.url && (d.restrictsMixedContent() && "http:" === n.url.substr(0, "http:".length).toLowerCase() ? void 0 !== window.console && console.warn("Blocked mixed content image " + n.url) : (e.src = n.url, d.curSrcSupported || (e.currentSrc = e.src), d.backfaceVisibilityFix(e))), d.setIntrinsicSize(e, n))
			}, d.ascendingSort = function(t, e) {
				return t.resolution - e.resolution
			}, d.removeVideoShim = function(t) {
				var e = t.getElementsByTagName("video");
				if (e.length) {
					for (var i = e[0], o = i.getElementsByTagName("source"); o.length;) t.insertBefore(o[0], i);
					i.parentNode.removeChild(i)
				}
			}, d.getAllElements = function() {
				for (var t = [], e = l.getElementsByTagName("img"), i = 0, o = e.length; i < o; i++) {
					var n = e[i];
					("PICTURE" === n.parentNode.nodeName.toUpperCase() || null !== n.getAttribute("srcset") || n[d.ns] && null !== n[d.ns].srcset) && t.push(n)
				}
				return t
			}, d.getMatch = function(t, e) {
				for (var i, o = e.childNodes, n = 0, s = o.length; n < s; n++) {
					var r = o[n];
					if (1 === r.nodeType) {
						if (r === t) return i;
						if ("SOURCE" === r.nodeName.toUpperCase()) {
							null !== r.getAttribute("src") && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
							var a = r.getAttribute("media");
							if (r.getAttribute("srcset") && (!a || d.matchesMedia(a))) {
								a = d.verifyTypeSupport(r);
								if (!0 === a) {
									i = r;
									break
								}
								if ("pending" === a) return !1
							}
						}
					}
				}
				return i
			},
			function() {
				function t() {
					clearTimeout(i), i = setTimeout(e, 60)
				}

				function e() {
					n({
						reevaluate: !0
					})
				}
				d.initTypeDetects(), n();
				var i, o = setInterval(function() {
					return n(), /^loaded|^i|^c/.test(l.readyState) ? void clearInterval(o) : void 0
				}, 250);
				a.addEventListener ? a.addEventListener("resize", t, !1) : a.attachEvent && a.attachEvent("onresize", t)
			}(), n._ = d, e(n)
	}(window, window.document, new window.Image),
	function(t, e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
	}(this, function(p) {
		! function() {
			"use strict";

			function e(t, e) {
				if (this.el = t, this.$el = p(t), this.s = p.extend({}, i, e), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
				return this.modules = {}, this.lGalleryOn = !1, this.lgBusy = !1, this.hideBartimeout = !1, this.isTouch = "ontouchstart" in document.documentElement, this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = p(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(p(this.s.selector)) : this.$items = this.$el.children(), this.$slide = "", this.$outer = "", this.init(), this
			}
			var i = {
				mode: "lg-slide",
				cssEasing: "ease",
				easing: "linear",
				speed: 600,
				height: "100%",
				width: "100%",
				addClass: "",
				startClass: "lg-start-zoom",
				backdropDuration: 150,
				hideBarsDelay: 6e3,
				useLeft: !1,
				closable: !0,
				loop: !0,
				escKey: !0,
				keyPress: !0,
				controls: !0,
				slideEndAnimatoin: !0,
				hideControlOnEnd: !1,
				mousewheel: !0,
				getCaptionFromTitleOrAlt: !0,
				appendSubHtmlTo: ".lg-sub-html",
				subHtmlSelectorRelative: !1,
				preload: 1,
				showAfterLoad: !0,
				selector: "",
				selectWithin: "",
				nextHtml: "",
				prevHtml: "",
				index: !1,
				iframeMaxWidth: "100%",
				download: !0,
				counter: !0,
				appendCounterTo: ".lg-toolbar",
				swipeThreshold: 50,
				enableSwipe: !0,
				enableDrag: !0,
				dynamic: !1,
				dynamicEl: [],
				galleryId: 1
			};
			e.prototype.init = function() {
				var t = this;
				t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
				var e = window.location.hash;
				0 < e.indexOf("lg=" + this.s.galleryId) && (t.index = parseInt(e.split("&slide=")[1], 10), p("body").addClass("lg-from-hash"), p("body").hasClass("lg-on") || (setTimeout(function() {
					t.build(t.index)
				}), p("body").addClass("lg-on"))), t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || 0, p("body").hasClass("lg-on") || setTimeout(function() {
					t.build(t.index), p("body").addClass("lg-on")
				})) : t.$items.on("click.lgcustom", function(e) {
					try {
						e.preventDefault(), e.preventDefault()
					} catch (t) {
						e.returnValue = !1
					}
					t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || t.$items.index(this), p("body").hasClass("lg-on") || (t.build(t.index), p("body").addClass("lg-on"))
				})
			}, e.prototype.build = function(t) {
				var e = this;
				e.structure(), p.each(p.fn.lightGallery.modules, function(t) {
					e.modules[t] = new p.fn.lightGallery.modules[t](e.el)
				}), e.slide(t, !1, !1, !1), e.s.keyPress && e.keyPress(), 1 < e.$items.length ? (e.arrow(), setTimeout(function() {
					e.enableDrag(), e.enableSwipe()
				}, 50), e.s.mousewheel && e.mousewheel()) : e.$slide.on("click.lg", function() {
					e.$el.trigger("onSlideClick.lg")
				}), e.counter(), e.closeGallery(), e.$el.trigger("onAfterOpen.lg"), e.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
					e.$outer.removeClass("lg-hide-items"), clearTimeout(e.hideBartimeout), e.hideBartimeout = setTimeout(function() {
						e.$outer.addClass("lg-hide-items")
					}, e.s.hideBarsDelay)
				}), e.$outer.trigger("mousemove.lg")
			}, e.prototype.structure = function() {
				var t = "",
					e = "",
					i = 0,
					o = "",
					n = this;
				for (p("body").append('<div class="lg-backdrop"></div>'), p(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), i = 0; i < this.$items.length; i++) t += '<div class="lg-item"></div>';
				this.s.controls && 1 < this.$items.length && (e = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (o = '<div class="lg-sub-html"></div>'), o = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + e + o + "</div></div>", p("body").append(o), this.$outer = p(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), n.setTop(), p(window).on("resize.lg orientationchange.lg", function() {
					setTimeout(function() {
						n.setTop()
					}, 100)
				}), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && 1 < this.$items.length && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss() && ((o = this.$outer.find(".lg-inner")).css("transition-timing-function", this.s.cssEasing), o.css("transition-duration", this.s.speed + "ms")), setTimeout(function() {
					p(".lg-backdrop").addClass("in")
				}), setTimeout(function() {
					n.$outer.addClass("lg-visible")
				}, this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = p(window).scrollTop()
			}, e.prototype.setTop = function() {
				var t, e, i;
				"100%" !== this.s.height && (e = ((t = p(window).height()) - parseInt(this.s.height, 10)) / 2, i = this.$outer.find(".lg"), t >= parseInt(this.s.height, 10) ? i.css("top", e + "px") : i.css("top", "0px"))
			}, e.prototype.doCss = function() {
				return !! function() {
					for (var t = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"], e = document.documentElement, i = 0, i = 0; i < t.length; i++)
						if (t[i] in e.style) return 1
				}()
			}, e.prototype.isVideo = function(t, e) {
				var i = this.s.dynamic ? this.s.dynamicEl[e].html : this.$items.eq(e).attr("data-html");
				if (!t) return i ? {
					html5: !0
				} : (console.error("lightGallery :- data-src is not pvovided on slide item " + (e + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
				var o = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
					i = t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
					e = t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
					t = t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
				return o ? {
					youtube: o
				} : i ? {
					vimeo: i
				} : e ? {
					dailymotion: e
				} : t ? {
					vk: t
				} : void 0
			}, e.prototype.counter = function() {
				this.s.counter && p(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
			}, e.prototype.addHtml = function(t) {
				var e, i, o, n = null;
				this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? e = this.s.dynamicEl[t].subHtmlUrl : n = this.s.dynamicEl[t].subHtml : (i = this.$items.eq(t)).attr("data-sub-html-url") ? e = i.attr("data-sub-html-url") : (n = i.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !n && (n = i.attr("title") || i.find("img").first().attr("alt"))), e || (null != n ? "." !== (o = n.substring(0, 1)) && "#" !== o || (n = (this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(n) : p(n)).html()) : n = ""), ".lg-sub-html" === this.s.appendSubHtmlTo ? e ? this.$outer.find(this.s.appendSubHtmlTo).load(e) : this.$outer.find(this.s.appendSubHtmlTo).html(n) : e ? this.$slide.eq(t).load(e) : this.$slide.eq(t).append(n), null != n && ("" === n ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
			}, e.prototype.preload = function(t) {
				for (var e = 1, i = 1, e = 1; e <= this.s.preload && !(e >= this.$items.length - t); e++) this.loadContent(t + e, !1, 0);
				for (i = 1; i <= this.s.preload && !(t - i < 0); i++) this.loadContent(t - i, !1, 0)
			}, e.prototype.loadContent = function(e, t, i) {
				var o, a, n, s, r, l = this,
					d = !1,
					c = function(t) {
						for (var e = [], i = [], o = 0; o < t.length; o++) {
							var n = t[o].split(" ");
							"" === n[0] && n.splice(0, 1), i.push(n[0]), e.push(n[1])
						}
						for (var s = p(window).width(), r = 0; r < e.length; r++)
							if (parseInt(e[r], 10) > s) {
								a = i[r];
								break
							}
					},
					u = l.s.dynamic ? (l.s.dynamicEl[e].poster && (d = !0, n = l.s.dynamicEl[e].poster), r = l.s.dynamicEl[e].html, a = l.s.dynamicEl[e].src, l.s.dynamicEl[e].responsive && c(l.s.dynamicEl[e].responsive.split(",")), s = l.s.dynamicEl[e].srcset, l.s.dynamicEl[e].sizes) : (l.$items.eq(e).attr("data-poster") && (d = !0, n = l.$items.eq(e).attr("data-poster")), r = l.$items.eq(e).attr("data-html"), a = l.$items.eq(e).attr("href") || l.$items.eq(e).attr("data-src"), l.$items.eq(e).attr("data-responsive") && c(l.$items.eq(e).attr("data-responsive").split(",")), s = l.$items.eq(e).attr("data-srcset"), l.$items.eq(e).attr("data-sizes")),
					h = !1;
				l.s.dynamic ? l.s.dynamicEl[e].iframe && (h = !0) : "true" === l.$items.eq(e).attr("data-iframe") && (h = !0);
				c = l.isVideo(a, e);
				if (!l.$slide.eq(e).hasClass("lg-loaded")) {
					if (h ? l.$slide.eq(e).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + a + '"  allowfullscreen="true"></iframe></div></div>') : d ? (h = "", h = c && c.youtube ? "lg-has-youtube" : c && c.vimeo ? "lg-has-vimeo" : "lg-has-html5", l.$slide.eq(e).prepend('<div class="lg-video-cont ' + h + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + n + '" /></div></div>')) : c ? (l.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), l.$el.trigger("hasVideo.lg", [e, a, r])) : l.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + a + '" /></div>'), l.$el.trigger("onAferAppendSlide.lg", [e]), o = l.$slide.eq(e).find(".lg-object"), u && o.attr("sizes", u), s) {
						o.attr("srcset", s);
						try {
							picturefill({
								elements: [o[0]]
							})
						} catch (t) {
							console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
						}
					}
					".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(e), l.$slide.eq(e).addClass("lg-loaded")
				}
				l.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function() {
					var t = 0;
					i && !p("body").hasClass("lg-from-hash") && (t = i), setTimeout(function() {
						l.$slide.eq(e).addClass("lg-complete"), l.$el.trigger("onSlideItemLoad.lg", [e, i || 0])
					}, t)
				}), c && c.html5 && !d && l.$slide.eq(e).addClass("lg-complete"), !0 === t && (l.$slide.eq(e).hasClass("lg-complete") ? l.preload(e) : l.$slide.eq(e).find(".lg-object").on("load.lg error.lg", function() {
					l.preload(e)
				}))
			}, e.prototype.slide = function(t, e, i, o) {
				var n, s, r, a, l, d = this.$outer.find(".lg-current").index(),
					c = this;
				c.lGalleryOn && d === t || (n = this.$slide.length, s = c.lGalleryOn ? this.s.speed : 0, c.lgBusy || (this.s.download && ((r = c.s.dynamic ? !1 !== c.s.dynamicEl[t].downloadUrl && (c.s.dynamicEl[t].downloadUrl || c.s.dynamicEl[t].src) : "false" !== c.$items.eq(t).attr("data-download-url") && (c.$items.eq(t).attr("data-download-url") || c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src"))) ? (p("#lg-download").attr("href", r), c.$outer.removeClass("lg-hide-download")) : c.$outer.addClass("lg-hide-download")), this.$el.trigger("onBeforeSlide.lg", [d, t, e, i]), c.lgBusy = !0, clearTimeout(c.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
					c.addHtml(t)
				}, s), this.arrowDisable(t), o || (t < d ? o = "prev" : d < t && (o = "next")), e ? (this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), 2 < n ? (a = t - 1, l = t + 1, (0 === t && d === n - 1 || t === n - 1 && 0 === d) && (l = 0, a = n - 1)) : (a = 0, l = 1), "prev" === o ? c.$slide.eq(l).addClass("lg-next-slide") : c.$slide.eq(a).addClass("lg-prev-slide"), c.$slide.eq(t).addClass("lg-current")) : (c.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === o ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(d).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(d).addClass("lg-prev-slide")), setTimeout(function() {
					c.$slide.removeClass("lg-current"), c.$slide.eq(t).addClass("lg-current"), c.$outer.removeClass("lg-no-trans")
				}, 50)), c.lGalleryOn ? (setTimeout(function() {
					c.loadContent(t, !0, 0)
				}, this.s.speed + 50), setTimeout(function() {
					c.lgBusy = !1, c.$el.trigger("onAfterSlide.lg", [d, t, e, i])
				}, this.s.speed)) : (c.loadContent(t, !0, c.s.backdropDuration), c.lgBusy = !1, c.$el.trigger("onAfterSlide.lg", [d, t, e, i])), c.lGalleryOn = !0, this.s.counter && p("#lg-counter-current").text(t + 1)), c.index = t)
			}, e.prototype.goToNextSlide = function(t) {
				var e = this,
					i = e.s.loop;
				t && e.$slide.length < 3 && (i = !1), e.lgBusy || (e.index + 1 < e.$slide.length ? (e.index++, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : i ? (e.index = 0, e.$el.trigger("onBeforeNextSlide.lg", [e.index]), e.slide(e.index, t, !1, "next")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-right-end"), setTimeout(function() {
					e.$outer.removeClass("lg-right-end")
				}, 400)))
			}, e.prototype.goToPrevSlide = function(t) {
				var e = this,
					i = e.s.loop;
				t && e.$slide.length < 3 && (i = !1), e.lgBusy || (0 < e.index ? (e.index--, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : i ? (e.index = e.$items.length - 1, e.$el.trigger("onBeforePrevSlide.lg", [e.index, t]), e.slide(e.index, t, !1, "prev")) : e.s.slideEndAnimatoin && !t && (e.$outer.addClass("lg-left-end"), setTimeout(function() {
					e.$outer.removeClass("lg-left-end")
				}, 400)))
			}, e.prototype.keyPress = function() {
				var e = this;
				1 < this.$items.length && p(window).on("keyup.lg", function(t) {
					1 < e.$items.length && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
				}), p(window).on("keydown.lg", function(t) {
					!0 === e.s.escKey && 27 === t.keyCode && (t.preventDefault(), e.$outer.hasClass("lg-thumb-open") ? e.$outer.removeClass("lg-thumb-open") : e.destroy())
				})
			}, e.prototype.arrow = function() {
				var t = this;
				this.$outer.find(".lg-prev").on("click.lg", function() {
					t.goToPrevSlide()
				}), this.$outer.find(".lg-next").on("click.lg", function() {
					t.goToNextSlide()
				})
			}, e.prototype.arrowDisable = function(t) {
				!this.s.loop && this.s.hideControlOnEnd && (t + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), 0 < t ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
			}, e.prototype.setTranslate = function(t, e, i) {
				this.s.useLeft ? t.css("left", e) : t.css({
					transform: "translate3d(" + e + "px, " + i + "px, 0px)"
				})
			}, e.prototype.touchMove = function(t, e) {
				t = e - t;
				15 < Math.abs(t) && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), t, 0), this.setTranslate(p(".lg-prev-slide"), -this.$slide.eq(this.index).width() + t, 0), this.setTranslate(p(".lg-next-slide"), this.$slide.eq(this.index).width() + t, 0))
			}, e.prototype.touchEnd = function(t) {
				var e = this;
				"lg-slide" !== e.s.mode && e.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout(function() {
					e.$outer.removeClass("lg-dragging"), t < 0 && Math.abs(t) > e.s.swipeThreshold ? e.goToNextSlide(!0) : 0 < t && Math.abs(t) > e.s.swipeThreshold ? e.goToPrevSlide(!0) : Math.abs(t) < 5 && e.$el.trigger("onSlideClick.lg"), e.$slide.removeAttr("style")
				}), setTimeout(function() {
					e.$outer.hasClass("lg-dragging") || "lg-slide" === e.s.mode || e.$outer.removeClass("lg-slide")
				}, e.s.speed + 100)
			}, e.prototype.enableSwipe = function() {
				var e = this,
					i = 0,
					o = 0,
					n = !1;
				e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", function(t) {
					e.$outer.hasClass("lg-zoomed") || e.lgBusy || (t.preventDefault(), e.manageSwipeClass(), i = t.originalEvent.targetTouches[0].pageX)
				}), e.$slide.on("touchmove.lg", function(t) {
					e.$outer.hasClass("lg-zoomed") || (t.preventDefault(), o = t.originalEvent.targetTouches[0].pageX, e.touchMove(i, o), n = !0)
				}), e.$slide.on("touchend.lg", function() {
					e.$outer.hasClass("lg-zoomed") || (n ? (n = !1, e.touchEnd(o - i)) : e.$el.trigger("onSlideClick.lg"))
				}))
			}, e.prototype.enableDrag = function() {
				var e = this,
					i = 0,
					o = 0,
					n = !1,
					s = !1;
				e.s.enableDrag && e.doCss() && (e.$slide.on("mousedown.lg", function(t) {
					e.$outer.hasClass("lg-zoomed") || e.lgBusy || p(t.target).text().trim() || (t.preventDefault(), e.manageSwipeClass(), i = t.pageX, n = !0, e.$outer.scrollLeft += 1, --e.$outer.scrollLeft, e.$outer.removeClass("lg-grab").addClass("lg-grabbing"), e.$el.trigger("onDragstart.lg"))
				}), p(window).on("mousemove.lg", function(t) {
					n && (s = !0, o = t.pageX, e.touchMove(i, o), e.$el.trigger("onDragmove.lg"))
				}), p(window).on("mouseup.lg", function(t) {
					s ? (s = !1, e.touchEnd(o - i), e.$el.trigger("onDragend.lg")) : (p(t.target).hasClass("lg-object") || p(t.target).hasClass("lg-video-play")) && e.$el.trigger("onSlideClick.lg"), n && (n = !1, e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
				}))
			}, e.prototype.manageSwipeClass = function() {
				var t = this.index + 1,
					e = this.index - 1;
				this.s.loop && 2 < this.$slide.length && (0 === this.index ? e = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (t = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), -1 < e && this.$slide.eq(e).addClass("lg-prev-slide"), this.$slide.eq(t).addClass("lg-next-slide")
			}, e.prototype.mousewheel = function() {
				var e = this;
				e.$outer.on("mousewheel.lg", function(t) {
					t.deltaY && (0 < t.deltaY ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
				})
			}, e.prototype.closeGallery = function() {
				var e = this,
					i = !1;
				this.$outer.find(".lg-close").on("click.lg", function() {
					e.destroy()
				}), e.s.closable && (e.$outer.on("mousedown.lg", function(t) {
					i = !!(p(t.target).is(".lg-outer") || p(t.target).is(".lg-item ") || p(t.target).is(".lg-img-wrap"))
				}), e.$outer.on("mousemove.lg", function() {
					i = !1
				}), e.$outer.on("mouseup.lg", function(t) {
					(p(t.target).is(".lg-outer") || p(t.target).is(".lg-item ") || p(t.target).is(".lg-img-wrap") && i) && (e.$outer.hasClass("lg-dragging") || e.destroy())
				}))
			}, e.prototype.destroy = function(t) {
				var e = this;
				t || (e.$el.trigger("onBeforeClose.lg"), p(window).scrollTop(e.prevScrollTop)), t && (e.s.dynamic || this.$items.off("click.lg click.lgcustom"), p.removeData(e.el, "lightGallery")), this.$el.off(".lg.tm"), p.each(p.fn.lightGallery.modules, function(t) {
					e.modules[t] && e.modules[t].destroy()
				}), this.lGalleryOn = !1, clearTimeout(e.hideBartimeout), this.hideBartimeout = !1, p(window).off(".lg"), p("body").removeClass("lg-on lg-from-hash"), e.$outer && e.$outer.removeClass("lg-visible"), p(".lg-backdrop").removeClass("in"), setTimeout(function() {
					e.$outer && e.$outer.remove(), p(".lg-backdrop").remove(), t || e.$el.trigger("onCloseAfter.lg")
				}, e.s.backdropDuration + 50)
			}, p.fn.lightGallery = function(t) {
				return this.each(function() {
					if (p.data(this, "lightGallery")) try {
						p(this).data("lightGallery").init()
					} catch (t) {
						console.error("lightGallery has not initiated properly")
					} else p.data(this, "lightGallery", new e(this, t))
				})
			}, p.fn.lightGallery.modules = {}
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(i) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = i(t).data("lightGallery"), this.$el = i(t), !(this.core.$items.length < 2) && (this.core.s = i.extend({}, e, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
			}
			var e = {
				autoplay: !1,
				pause: 5e3,
				progressBar: !0,
				fourceAutoplay: !1,
				autoplayControls: !0,
				appendAutoplayControlsTo: ".lg-toolbar"
			};
			t.prototype.init = function() {
				var t = this;
				t.core.s.autoplayControls && t.controls(), t.core.s.progressBar && t.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), t.progress(), t.core.s.autoplay && t.$el.one("onSlideItemLoad.lg.tm", function() {
					t.startlAuto()
				}), t.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
					t.interval && (t.cancelAuto(), t.canceledOnTouch = !0)
				}), t.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
					!t.interval && t.canceledOnTouch && (t.startlAuto(), t.canceledOnTouch = !1)
				})
			}, t.prototype.progress = function() {
				var t, e, i = this;
				i.$el.on("onBeforeSlide.lg.tm", function() {
					i.core.s.progressBar && i.fromAuto && (t = i.core.$outer.find(".lg-progress-bar"), e = i.core.$outer.find(".lg-progress"), i.interval && (e.removeAttr("style"), t.removeClass("lg-start"), setTimeout(function() {
						e.css("transition", "width " + (i.core.s.speed + i.core.s.pause) + "ms ease 0s"), t.addClass("lg-start")
					}, 20))), i.fromAuto || i.core.s.fourceAutoplay || i.cancelAuto(), i.fromAuto = !1
				})
			}, t.prototype.controls = function() {
				var t = this;
				i(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), t.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
					i(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
				})
			}, t.prototype.startlAuto = function() {
				var t = this;
				t.core.$outer.find(".lg-progress").css("transition", "width " + (t.core.s.speed + t.core.s.pause) + "ms ease 0s"), t.core.$outer.addClass("lg-show-autoplay"), t.core.$outer.find(".lg-progress-bar").addClass("lg-start"), t.interval = setInterval(function() {
					t.core.index + 1 < t.core.$items.length ? t.core.index++ : t.core.index = 0, t.fromAuto = !0, t.core.slide(t.core.index, !1, !1, "next")
				}, t.core.s.speed + t.core.s.pause)
			}, t.prototype.cancelAuto = function() {
				clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
			}, t.prototype.destroy = function() {
				this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
			}, i.fn.lightGallery.modules.autoplay = t
		}()
	}),
	function(t, e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
	}(this, function(o) {
		! function() {
			"use strict";

			function e() {
				return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
			}

			function t(t) {
				return this.core = o(t).data("lightGallery"), this.$el = o(t), this.core.s = o.extend({}, i, this.core.s), this.init(), this
			}
			var i = {
				fullScreen: !0
			};
			t.prototype.init = function() {
				this.core.s.fullScreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && (this.core.$outer.find(".lg-toolbar").append('<span class="lg-fullscreen lg-icon"></span>'), this.fullScreen())
			}, t.prototype.requestFullscreen = function() {
				var t = document.documentElement;
				t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
			}, t.prototype.exitFullscreen = function() {
				document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
			}, t.prototype.fullScreen = function() {
				var t = this;
				o(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
					t.core.$outer.toggleClass("lg-fullscreen-on")
				}), this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
					e() ? t.exitFullscreen() : t.requestFullscreen()
				})
			}, t.prototype.destroy = function() {
				e() && this.exitFullscreen(), o(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
			}, o.fn.lightGallery.modules.fullscreen = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(r) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = r(t).data("lightGallery"), this.$el = r(t), this.core.s = r.extend({}, e, this.core.s), this.core.s.pager && 1 < this.core.$items.length && this.init(), this
			}
			var e = {
				pager: !1
			};
			t.prototype.init = function() {
				var o, t, e, i = this,
					n = "";
				if (i.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), i.core.s.dynamic)
					for (var s = 0; s < i.core.s.dynamicEl.length; s++) n += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + i.core.s.dynamicEl[s].thumb + '" /></div></span>';
				else i.core.$items.each(function() {
					i.core.s.exThumbImage ? n += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + r(this).attr(i.core.s.exThumbImage) + '" /></div></span>' : n += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + r(this).find("img").attr("src") + '" /></div></span>'
				});
				(t = i.core.$outer.find(".lg-pager-outer")).html(n), (o = i.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", function() {
					var t = r(this);
					i.core.index = t.index(), i.core.slide(i.core.index, !1, !0, !1)
				}), t.on("mouseover.lg", function() {
					clearTimeout(e), t.addClass("lg-pager-hover")
				}), t.on("mouseout.lg", function() {
					e = setTimeout(function() {
						t.removeClass("lg-pager-hover")
					})
				}), i.core.$el.on("onBeforeSlide.lg.tm", function(t, e, i) {
					o.removeClass("lg-pager-active"), o.eq(i).addClass("lg-pager-active")
				})
			}, t.prototype.destroy = function() {}, r.fn.lightGallery.modules.pager = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(a) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = a(t).data("lightGallery"), this.core.s = a.extend({}, e, this.core.s), this.$el = a(t), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
			}
			var e = {
				thumbnail: !0,
				animateThumb: !0,
				currentPagerPosition: "middle",
				thumbWidth: 100,
				thumbHeight: "80px",
				thumbContHeight: 100,
				thumbMargin: 5,
				exThumbImage: !1,
				showThumbByDefault: !0,
				toogleThumb: !0,
				pullCaptionUp: !0,
				enableThumbDrag: !0,
				enableThumbSwipe: !0,
				swipeThreshold: 50,
				loadYoutubeThumbnail: !0,
				youtubeThumbSize: 1,
				loadVimeoThumbnail: !0,
				vimeoThumbSize: "thumbnail_small",
				loadDailymotionThumbnail: !0
			};
			t.prototype.init = function() {
				var t = this;
				this.core.s.thumbnail && 1 < this.core.$items.length && (this.core.s.showThumbByDefault && setTimeout(function() {
					t.core.$outer.addClass("lg-thumb-open")
				}, 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
			}, t.prototype.build = function() {
				function e(t, e, i) {
					var o, t = n.core.isVideo(t, i) || {},
						i = "";
					t.youtube || t.vimeo || t.dailymotion ? t.youtube ? o = n.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + t.youtube[1] + "/" + n.core.s.youtubeThumbSize + ".jpg" : e : t.vimeo ? n.core.s.loadVimeoThumbnail ? (o = "//i.vimeocdn.com/video/error_" + r + ".jpg", i = t.vimeo[1]) : o = e : t.dailymotion && (o = n.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + t.dailymotion[1] : e) : o = e, s += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + n.core.s.thumbWidth + "px; height: " + n.core.s.thumbHeight + "; margin-right: " + n.core.s.thumbMargin + 'px"><img src="' + o + '" /></div>', i = ""
				}
				var t, n = this,
					s = "",
					r = "";
				switch (this.core.s.vimeoThumbSize) {
					case "thumbnail_large":
						r = "640";
						break;
					case "thumbnail_medium":
						r = "200x150";
						break;
					case "thumbnail_small":
						r = "100x75"
				}
				if (n.core.$outer.addClass("lg-has-thumb"), n.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'), n.$thumbOuter = n.core.$outer.find(".lg-thumb-outer"), n.thumbOuterWidth = n.$thumbOuter.width(), n.core.s.animateThumb && n.core.$outer.find(".lg-thumb").css({
						width: n.thumbTotalWidth + "px",
						position: "relative"
					}), this.core.s.animateThumb && n.$thumbOuter.css("height", n.core.s.thumbContHeight + "px"), n.core.s.dynamic)
					for (var i = 0; i < n.core.s.dynamicEl.length; i++) e(n.core.s.dynamicEl[i].src, n.core.s.dynamicEl[i].thumb, i);
				else n.core.$items.each(function(t) {
					n.core.s.exThumbImage ? e(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(n.core.s.exThumbImage), t) : e(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), t)
				});
				n.core.$outer.find(".lg-thumb").html(s), (t = n.core.$outer.find(".lg-thumb-item")).each(function() {
					var e = a(this),
						t = e.attr("data-vimeo-id");
					t && a.getJSON("//www.vimeo.com/api/v2/video/" + t + ".json?callback=?", {
						format: "json"
					}, function(t) {
						e.find("img").attr("src", t[0][n.core.s.vimeoThumbSize])
					})
				}), t.eq(n.core.index).addClass("active"), n.core.$el.on("onBeforeSlide.lg.tm", function() {
					t.removeClass("active"), t.eq(n.core.index).addClass("active")
				}), t.on("click.lg touchend.lg", function() {
					var t = a(this);
					setTimeout(function() {
						(!n.thumbClickable || n.core.lgBusy) && n.core.doCss() || (n.core.index = t.index(), n.core.slide(n.core.index, !1, !0, !1))
					}, 50)
				}), n.core.$el.on("onBeforeSlide.lg.tm", function() {
					n.animateThumb(n.core.index)
				}), a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
					setTimeout(function() {
						n.animateThumb(n.core.index), n.thumbOuterWidth = n.$thumbOuter.width()
					}, 200)
				})
			}, t.prototype.setTranslate = function(t) {
				this.core.$outer.find(".lg-thumb").css({
					transform: "translate3d(-" + t + "px, 0px, 0px)"
				})
			}, t.prototype.animateThumb = function(t) {
				var e, i = this.core.$outer.find(".lg-thumb");
				if (this.core.s.animateThumb) {
					switch (this.core.s.currentPagerPosition) {
						case "left":
							e = 0;
							break;
						case "middle":
							e = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
							break;
						case "right":
							e = this.thumbOuterWidth - this.core.s.thumbWidth
					}
					this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * t - 1 - e, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (i.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || i.animate({
						left: -this.left + "px"
					}, this.core.s.speed)) : this.core.doCss() || i.css("left", -this.left + "px"), this.setTranslate(this.left)
				}
			}, t.prototype.enableThumbDrag = function() {
				var e = this,
					i = 0,
					o = 0,
					n = !1,
					s = !1,
					r = 0;
				e.$thumbOuter.addClass("lg-grab"), e.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(t) {
					e.thumbTotalWidth > e.thumbOuterWidth && (t.preventDefault(), i = t.pageX, n = !0, e.core.$outer.scrollLeft += 1, --e.core.$outer.scrollLeft, e.thumbClickable = !1, e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
				}), a(window).on("mousemove.lg.thumb", function(t) {
					n && (r = e.left, s = !0, o = t.pageX, e.$thumbOuter.addClass("lg-dragging"), (r -= o - i) > e.thumbTotalWidth - e.thumbOuterWidth && (r = e.thumbTotalWidth - e.thumbOuterWidth), r < 0 && (r = 0), e.setTranslate(r))
				}), a(window).on("mouseup.lg.thumb", function() {
					s ? (s = !1, e.$thumbOuter.removeClass("lg-dragging"), e.left = r, Math.abs(o - i) < e.core.s.swipeThreshold && (e.thumbClickable = !0)) : e.thumbClickable = !0, n && (n = !1, e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
				})
			}, t.prototype.enableThumbSwipe = function() {
				var e = this,
					i = 0,
					o = 0,
					n = !1,
					s = 0;
				e.core.$outer.find(".lg-thumb").on("touchstart.lg", function(t) {
					e.thumbTotalWidth > e.thumbOuterWidth && (t.preventDefault(), i = t.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
				}), e.core.$outer.find(".lg-thumb").on("touchmove.lg", function(t) {
					e.thumbTotalWidth > e.thumbOuterWidth && (t.preventDefault(), o = t.originalEvent.targetTouches[0].pageX, n = !0, e.$thumbOuter.addClass("lg-dragging"), s = e.left, (s -= o - i) > e.thumbTotalWidth - e.thumbOuterWidth && (s = e.thumbTotalWidth - e.thumbOuterWidth), s < 0 && (s = 0), e.setTranslate(s))
				}), e.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
					e.thumbTotalWidth > e.thumbOuterWidth && n ? (n = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(o - i) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = s) : e.thumbClickable = !0
				})
			}, t.prototype.toogle = function() {
				var t = this;
				t.core.s.toogleThumb && (t.core.$outer.addClass("lg-can-toggle"), t.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), t.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
					t.core.$outer.toggleClass("lg-thumb-open")
				}))
			}, t.prototype.thumbkeyPress = function() {
				var e = this;
				a(window).on("keydown.lg.thumb", function(t) {
					38 === t.keyCode ? (t.preventDefault(), e.core.$outer.addClass("lg-thumb-open")) : 40 === t.keyCode && (t.preventDefault(), e.core.$outer.removeClass("lg-thumb-open"))
				})
			}, t.prototype.destroy = function() {
				this.core.s.thumbnail && 1 < this.core.$items.length && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
			}, a.fn.lightGallery.modules.Thumbnail = t
		}()
	}),
	function(t, e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(t.jQuery)
	}(this, function(d) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = d(t).data("lightGallery"), this.$el = d(t), this.core.s = d.extend({}, e, this.core.s), this.videoLoaded = !1, this.init(), this
			}
			var e = {
				videoMaxWidth: "855px",
				autoplayFirstVideo: !0,
				youtubePlayerParams: !1,
				vimeoPlayerParams: !1,
				dailymotionPlayerParams: !1,
				vkPlayerParams: !1,
				videojs: !1,
				videojsOptions: {}
			};
			t.prototype.init = function() {
				var o = this;
				o.core.$el.on("hasVideo.lg.tm", function(t, e, i, o) {
					var n = this;
					if (n.core.$slide.eq(e).find(".lg-video").append(n.loadVideo(i, "lg-object", !0, e, o)), o)
						if (n.core.s.videojs) try {
							videojs(n.core.$slide.eq(e).find(".lg-html5").get(0), n.core.s.videojsOptions, function() {
								!n.videoLoaded && n.core.s.autoplayFirstVideo && this.play()
							})
						} catch (t) {
							console.error("Make sure you have included videojs")
						} else !n.videoLoaded && n.core.s.autoplayFirstVideo && n.core.$slide.eq(e).find(".lg-html5").get(0).play()
				}.bind(this)), o.core.$el.on("onAferAppendSlide.lg.tm", function(t, e) {
					(e = this.core.$slide.eq(e).find(".lg-video-cont")).hasClass("lg-has-iframe") || (e.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
				}.bind(this)), o.core.doCss() && 1 < o.core.$items.length && (o.core.s.enableSwipe || o.core.s.enableDrag) ? o.core.$el.on("onSlideClick.lg.tm", function() {
					var t = o.core.$slide.eq(o.core.index);
					o.loadVideoOnclick(t)
				}) : o.core.$slide.on("click.lg", function() {
					o.loadVideoOnclick(d(this))
				}), o.core.$el.on("onBeforeSlide.lg.tm", function(t, e, i) {
					var o = this,
						n = o.core.$slide.eq(e),
						s = n.find(".lg-youtube").get(0),
						r = n.find(".lg-vimeo").get(0),
						a = n.find(".lg-dailymotion").get(0),
						e = n.find(".lg-vk").get(0),
						l = n.find(".lg-html5").get(0);
					if (s) s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
					else if (r) try {
							$f(r).api("pause")
						} catch (t) {
							console.error("Make sure you have included froogaloop2 js")
						} else if (a) a.contentWindow.postMessage("pause", "*");
						else if (l)
						if (o.core.s.videojs) try {
							videojs(l).pause()
						} catch (t) {
							console.error("Make sure you have included videojs")
						} else l.pause();
					e && d(e).attr("src", d(e).attr("src").replace("&autoplay", "&noplay")), e = o.core.s.dynamic ? o.core.s.dynamicEl[i].src : o.core.$items.eq(i).attr("href") || o.core.$items.eq(i).attr("data-src"), ((i = o.core.isVideo(e, i) || {}).youtube || i.vimeo || i.dailymotion || i.vk) && o.core.$outer.addClass("lg-hide-download")
				}.bind(this)), o.core.$el.on("onAfterSlide.lg.tm", function(t, e) {
					o.core.$slide.eq(e).removeClass("lg-video-playing")
				}), o.core.s.autoplayFirstVideo && o.core.$el.on("onAferAppendSlide.lg.tm", function(t, e) {
					var i;
					o.core.lGalleryOn || (i = o.core.$slide.eq(e), setTimeout(function() {
						o.loadVideoOnclick(i)
					}, 100))
				})
			}, t.prototype.loadVideo = function(t, e, i, o, n) {
				var s = "",
					r = 1,
					a = "",
					o = this.core.isVideo(t, o) || {};
				return i && (r = !this.videoLoaded && this.core.s.autoplayFirstVideo ? 1 : 0), o.youtube ? (a = "?wmode=opaque&autoplay=" + r + "&enablejsapi=1", this.core.s.youtubePlayerParams && (a = a + "&" + d.param(this.core.s.youtubePlayerParams)), s = '<iframe class="lg-video-object lg-youtube ' + e + '" width="560" height="315" src="//www.youtube.com/embed/' + o.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>') : o.vimeo ? (a = "?autoplay=" + r + "&api=1", this.core.s.vimeoPlayerParams && (a = a + "&" + d.param(this.core.s.vimeoPlayerParams)), s = '<iframe class="lg-video-object lg-vimeo ' + e + '" width="560" height="315"  src="//player.vimeo.com/video/' + o.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : o.dailymotion ? (a = "?wmode=opaque&autoplay=" + r + "&api=postMessage", this.core.s.dailymotionPlayerParams && (a = a + "&" + d.param(this.core.s.dailymotionPlayerParams)), s = '<iframe class="lg-video-object lg-dailymotion ' + e + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + o.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>') : o.html5 ? ("." !== (i = n.substring(0, 1)) && "#" !== i || (n = d(n).html()), s = n) : o.vk && (a = "&autoplay=" + r, this.core.s.vkPlayerParams && (a = a + "&" + d.param(this.core.s.vkPlayerParams)), s = '<iframe class="lg-video-object lg-vk ' + e + '" width="560" height="315" src="//vk.com/video_ext.php?' + o.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>'), s
			}, t.prototype.loadVideoOnclick = function(i) {
				var o = this;
				if (i.find(".lg-object").hasClass("lg-has-poster") && i.find(".lg-object").is(":visible"))
					if (i.hasClass("lg-has-video")) {
						var t = i.find(".lg-youtube").get(0),
							e = i.find(".lg-vimeo").get(0),
							n = i.find(".lg-dailymotion").get(0),
							s = i.find(".lg-html5").get(0);
						if (t) t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
						else if (e) try {
								$f(e).api("play")
							} catch (i) {
								console.error("Make sure you have included froogaloop2 js")
							} else if (n) n.contentWindow.postMessage("play", "*");
							else if (s)
							if (o.core.s.videojs) try {
								videojs(s).play()
							} catch (i) {
								console.error("Make sure you have included videojs")
							} else s.play();
						i.addClass("lg-video-playing")
					} else {
						i.addClass("lg-video-playing lg-has-video");
						var r, t = function(t, e) {
								if (i.find(".lg-video").append(o.loadVideo(t, "", !1, o.core.index, e)), e)
									if (o.core.s.videojs) try {
										videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), o.core.s.videojsOptions, function() {
											this.play()
										})
									} catch (t) {
										console.error("Make sure you have included videojs")
									} else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
							},
							n = o.core.s.dynamic ? (r = o.core.s.dynamicEl[o.core.index].src, o.core.s.dynamicEl[o.core.index].html) : (r = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"), o.core.$items.eq(o.core.index).attr("data-html"));
						t(r, n);
						n = i.find(".lg-object");
						i.find(".lg-video").append(n), i.find(".lg-video-object").hasClass("lg-html5") || (i.removeClass("lg-complete"), i.find(".lg-video-object").on("load.lg error.lg", function() {
							i.addClass("lg-complete")
						}))
					}
			}, t.prototype.destroy = function() {
				this.videoLoaded = !1
			}, d.fn.lightGallery.modules.video = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(c) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = c(t).data("lightGallery"), this.core.s = c.extend({}, o, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = c(window).width() / 2, this.pageY = c(window).height() / 2 + c(window).scrollTop()), this
			}
			var e, i, o = {
				scale: 1,
				zoom: !0,
				actualSize: !0,
				enableZoomAfter: 300,
				useLeftForZoom: (e = !1, (i = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) && parseInt(i[2], 10) < 54 && (e = !0), e)
			};
			t.prototype.init = function() {
				var s = this,
					t = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
				s.core.s.actualSize && (t += '<span id="lg-actual-size" class="lg-icon"></span>'), s.core.s.useLeftForZoom ? s.core.$outer.addClass("lg-use-left-for-zoom") : s.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(t), s.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(t, e, i) {
					var o = s.core.s.enableZoomAfter + i;
					c("body").hasClass("lg-from-hash") && i ? o = 0 : c("body").removeClass("lg-from-hash"), s.zoomabletimeout = setTimeout(function() {
						s.core.$slide.eq(e).addClass("lg-zoomable")
					}, o + 30)
				});

				function e(t) {
					var e = s.core.$outer.find(".lg-current .lg-image"),
						i = (c(window).width() - e.prop("offsetWidth")) / 2,
						o = (c(window).height() - e.prop("offsetHeight")) / 2 + c(window).scrollTop(),
						i = (t - 1) * (s.pageX - i),
						o = (t - 1) * (s.pageY - o);
					e.css("transform", "scale3d(" + t + ", " + t + ", 1)").attr("data-scale", t), (s.core.s.useLeftForZoom ? e.parent().css({
						left: -i + "px",
						top: -o + "px"
					}) : e.parent().css("transform", "translate3d(-" + i + "px, -" + o + "px, 0)")).attr("data-x", i).attr("data-y", o)
				}

				function r() {
					1 < a ? s.core.$outer.addClass("lg-zoomed") : s.resetZoom(), a < 1 && (a = 1), e(a)
				}

				function o(t, e, i, o) {
					var n = e.prop("offsetWidth"),
						e = s.core.s.dynamic ? s.core.s.dynamicEl[i].width || e[0].naturalWidth || n : s.core.$items.eq(i).attr("data-width") || e[0].naturalWidth || n;
					s.core.$outer.hasClass("lg-zoomed") ? a = 1 : n < e && (a = e / n || 2), o ? (s.pageX = c(window).width() / 2, s.pageY = c(window).height() / 2 + c(window).scrollTop()) : (s.pageX = t.pageX || t.originalEvent.targetTouches[0].pageX, s.pageY = t.pageY || t.originalEvent.targetTouches[0].pageY), r(), setTimeout(function() {
						s.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
					}, 10)
				}
				var a = 1,
					n = !1;
				s.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(t, e) {
					var i = s.core.$slide.eq(e).find(".lg-image");
					i.on("dblclick", function(t) {
						o(t, i, e)
					}), i.on("touchstart", function(t) {
						n ? (clearTimeout(n), n = null, o(t, i, e)) : n = setTimeout(function() {
							n = null
						}, 300), t.preventDefault()
					})
				}), c(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
					s.pageX = c(window).width() / 2, s.pageY = c(window).height() / 2 + c(window).scrollTop(), e(a)
				}), c("#lg-zoom-out").on("click.lg", function() {
					s.core.$outer.find(".lg-current .lg-image").length && (a -= s.core.s.scale, r())
				}), c("#lg-zoom-in").on("click.lg", function() {
					s.core.$outer.find(".lg-current .lg-image").length && (a += s.core.s.scale, r())
				}), c("#lg-actual-size").on("click.lg", function(t) {
					o(t, s.core.$slide.eq(s.core.index).find(".lg-image"), s.core.index, !0)
				}), s.core.$el.on("onBeforeSlide.lg.tm", function() {
					a = 1, s.resetZoom()
				}), s.zoomDrag(), s.zoomSwipe()
			}, t.prototype.resetZoom = function() {
				this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = c(window).width() / 2, this.pageY = c(window).height() / 2 + c(window).scrollTop()
			}, t.prototype.zoomSwipe = function() {
				var o = this,
					n = {},
					s = {},
					r = !1,
					a = !1,
					l = !1;
				o.core.$slide.on("touchstart.lg", function(t) {
					var e;
					o.core.$outer.hasClass("lg-zoomed") && (e = o.core.$slide.eq(o.core.index).find(".lg-object"), l = e.prop("offsetHeight") * e.attr("data-scale") > o.core.$outer.find(".lg").height(), ((a = e.prop("offsetWidth") * e.attr("data-scale") > o.core.$outer.find(".lg").width()) || l) && (t.preventDefault(), n = {
						x: t.originalEvent.targetTouches[0].pageX,
						y: t.originalEvent.targetTouches[0].pageY
					}))
				}), o.core.$slide.on("touchmove.lg", function(t) {
					var e, i;
					o.core.$outer.hasClass("lg-zoomed") && (i = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"), t.preventDefault(), r = !0, s = {
						x: t.originalEvent.targetTouches[0].pageX,
						y: t.originalEvent.targetTouches[0].pageY
					}, o.core.$outer.addClass("lg-zoom-dragging"), e = l ? -Math.abs(i.attr("data-y")) + (s.y - n.y) : -Math.abs(i.attr("data-y")), t = a ? -Math.abs(i.attr("data-x")) + (s.x - n.x) : -Math.abs(i.attr("data-x")), (15 < Math.abs(s.x - n.x) || 15 < Math.abs(s.y - n.y)) && (o.core.s.useLeftForZoom ? i.css({
						left: t + "px",
						top: e + "px"
					}) : i.css("transform", "translate3d(" + t + "px, " + e + "px, 0)")))
				}), o.core.$slide.on("touchend.lg", function() {
					o.core.$outer.hasClass("lg-zoomed") && r && (r = !1, o.core.$outer.removeClass("lg-zoom-dragging"), o.touchendZoom(n, s, a, l))
				})
			}, t.prototype.zoomDrag = function() {
				var o = this,
					n = {},
					s = {},
					r = !1,
					a = !1,
					l = !1,
					d = !1;
				o.core.$slide.on("mousedown.lg.zoom", function(t) {
					var e = o.core.$slide.eq(o.core.index).find(".lg-object");
					d = e.prop("offsetHeight") * e.attr("data-scale") > o.core.$outer.find(".lg").height(), l = e.prop("offsetWidth") * e.attr("data-scale") > o.core.$outer.find(".lg").width(), o.core.$outer.hasClass("lg-zoomed") && c(t.target).hasClass("lg-object") && (l || d) && (t.preventDefault(), n = {
						x: t.pageX,
						y: t.pageY
					}, r = !0, o.core.$outer.scrollLeft += 1, --o.core.$outer.scrollLeft, o.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
				}), c(window).on("mousemove.lg.zoom", function(t) {
					var e, i;
					r && (i = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"), a = !0, s = {
						x: t.pageX,
						y: t.pageY
					}, o.core.$outer.addClass("lg-zoom-dragging"), e = d ? -Math.abs(i.attr("data-y")) + (s.y - n.y) : -Math.abs(i.attr("data-y")), t = l ? -Math.abs(i.attr("data-x")) + (s.x - n.x) : -Math.abs(i.attr("data-x")), o.core.s.useLeftForZoom ? i.css({
						left: t + "px",
						top: e + "px"
					}) : i.css("transform", "translate3d(" + t + "px, " + e + "px, 0)"))
				}), c(window).on("mouseup.lg.zoom", function(t) {
					r && (r = !1, o.core.$outer.removeClass("lg-zoom-dragging"), !a || n.x === s.x && n.y === s.y || (s = {
						x: t.pageX,
						y: t.pageY
					}, o.touchendZoom(n, s, l, d)), a = !1), o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
				})
			}, t.prototype.touchendZoom = function(t, e, i, o) {
				var n = this,
					s = n.core.$slide.eq(n.core.index).find(".lg-img-wrap"),
					r = n.core.$slide.eq(n.core.index).find(".lg-object"),
					a = -Math.abs(s.attr("data-x")) + (e.x - t.x),
					l = -Math.abs(s.attr("data-y")) + (e.y - t.y),
					d = (n.core.$outer.find(".lg").height() - r.prop("offsetHeight")) / 2,
					c = Math.abs(r.prop("offsetHeight") * Math.abs(r.attr("data-scale")) - n.core.$outer.find(".lg").height() + d),
					u = (n.core.$outer.find(".lg").width() - r.prop("offsetWidth")) / 2,
					r = Math.abs(r.prop("offsetWidth") * Math.abs(r.attr("data-scale")) - n.core.$outer.find(".lg").width() + u);
				(15 < Math.abs(e.x - t.x) || 15 < Math.abs(e.y - t.y)) && (o && (l <= -c ? l = -c : -d <= l && (l = -d)), i && (a <= -r ? a = -r : -u <= a && (a = -u)), o ? s.attr("data-y", Math.abs(l)) : l = -Math.abs(s.attr("data-y")), i ? s.attr("data-x", Math.abs(a)) : a = -Math.abs(s.attr("data-x")), n.core.s.useLeftForZoom ? s.css({
					left: a + "px",
					top: l + "px"
				}) : s.css("transform", "translate3d(" + a + "px, " + l + "px, 0)"))
			}, t.prototype.destroy = function() {
				var t = this;
				t.core.$el.off(".lg.zoom"), c(window).off(".lg.zoom"), t.core.$slide.off(".lg.zoom"), t.core.$el.off(".lg.tm.zoom"), t.resetZoom(), clearTimeout(t.zoomabletimeout), t.zoomabletimeout = !1
			}, c.fn.lightGallery.modules.zoom = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(i) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = i(t).data("lightGallery"), this.core.s = i.extend({}, e, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
			}
			var e = {
				hash: !0
			};
			t.prototype.init = function() {
				var e, o = this;
				o.core.$el.on("onAfterSlide.lg.tm", function(t, e, i) {
					history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + o.core.s.galleryId + "&slide=" + i) : window.location.hash = "lg=" + o.core.s.galleryId + "&slide=" + i
				}), i(window).on("hashchange.lg.hash", function() {
					e = window.location.hash;
					var t = parseInt(e.split("&slide=")[1], 10); - 1 < e.indexOf("lg=" + o.core.s.galleryId) ? o.core.slide(t, !1, !1) : o.core.lGalleryOn && o.core.destroy()
				})
			}, t.prototype.destroy = function() {
				this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
			}, i.fn.lightGallery.modules.hash = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
	}(function(n) {
		! function() {
			"use strict";

			function t(t) {
				return this.core = n(t).data("lightGallery"), this.core.s = n.extend({}, e, this.core.s), this.core.s.share && this.init(), this
			}
			var e = {
				share: !0,
				facebook: !0,
				facebookDropdownText: "Facebook",
				twitter: !0,
				twitterDropdownText: "Twitter",
				googlePlus: !0,
				googlePlusDropdownText: "GooglePlus",
				pinterest: !0,
				pinterestDropdownText: "Pinterest"
			};
			t.prototype.init = function() {
				var o = this,
					t = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
				t += o.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + "</span></a></li>" : "", t += o.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + "</span></a></li>" : "", t += o.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + "</span></a></li>" : "", t += o.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + "</span></a></li>" : "", t += "</ul></span>", this.core.$outer.find(".lg-toolbar").append(t), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), n("#lg-share").on("click.lg", function() {
					o.core.$outer.toggleClass("lg-dropdown-active")
				}), n("#lg-dropdown-overlay").on("click.lg", function() {
					o.core.$outer.removeClass("lg-dropdown-active")
				}), o.core.$el.on("onAfterSlide.lg.tm", function(t, e, i) {
					setTimeout(function() {
						n("#lg-share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(o.getSahreProps(i, "facebookShareUrl") || window.location.href)), n("#lg-share-twitter").attr("href", "https://twitter.com/intent/tweet?text=" + o.getSahreProps(i, "tweetText") + "&url=" + encodeURIComponent(o.getSahreProps(i, "twitterShareUrl") || window.location.href)), n("#lg-share-googleplus").attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(o.getSahreProps(i, "googleplusShareUrl") || window.location.href)), n("#lg-share-pinterest").attr("href", "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(o.getSahreProps(i, "pinterestShareUrl") || window.location.href) + "&media=" + encodeURIComponent(o.getSahreProps(i, "src")) + "&description=" + o.getSahreProps(i, "pinterestText"))
					}, 100)
				})
			}, t.prototype.getSahreProps = function(t, e) {
				var i;
				return this.core.s.dynamic ? this.core.s.dynamicEl[t][e] : (i = this.core.$items.eq(t).attr("href"), t = this.core.$items.eq(t).data(e), "src" === e && i || t)
			}, t.prototype.destroy = function() {}, n.fn.lightGallery.modules.share = t
		}()
	}),
	function(t) {
		"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
	}(function(c) {
		function e(t) {
			var e, i = t || window.event,
				o = m.call(arguments, 1),
				n = 0,
				s = 0,
				r = 0,
				a = 0,
				l = 0,
				d = 0;
			if ((t = c.event.fix(i)).type = "mousewheel", "detail" in i && (r = -1 * i.detail), "wheelDelta" in i && (r = i.wheelDelta), "wheelDeltaY" in i && (r = i.wheelDeltaY), "wheelDeltaX" in i && (s = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = -1 * r, r = 0), n = 0 === r ? s : r, "deltaY" in i && (n = r = -1 * i.deltaY), "deltaX" in i && (s = i.deltaX, 0 === r && (n = -1 * s)), 0 !== r || 0 !== s) {
				1 === i.deltaMode ? (n *= e = c.data(this, "mousewheel-line-height"), r *= e, s *= e) : 2 === i.deltaMode && (n *= e = c.data(this, "mousewheel-page-height"), r *= e, s *= e);
				var a = Math.max(Math.abs(r), Math.abs(s));
				return f && !(a < f) || h(i, f = a) && (f /= 40), h(i, a) && (n /= 40, s /= 40, r /= 40), n = Math[1 <= n ? "floor" : "ceil"](n / f), s = Math[1 <= s ? "floor" : "ceil"](s / f), r = Math[1 <= r ? "floor" : "ceil"](r / f), g.settings.normalizeOffset && this.getBoundingClientRect && (a = this.getBoundingClientRect(), l = t.clientX - a.left, d = t.clientY - a.top), t.deltaX = s, t.deltaY = r, t.deltaFactor = f, t.offsetX = l, t.offsetY = d, t.deltaMode = 0, o.unshift(t, n, s, r), p && clearTimeout(p), p = setTimeout(u, 200), (c.event.dispatch || c.event.handle).apply(this, o)
			}
		}

		function u() {
			f = null
		}

		function h(t, e) {
			return g.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
		}
		var p, f, t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
			i = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
			m = Array.prototype.slice;
		if (c.event.fixHooks)
			for (var o = t.length; o;) c.event.fixHooks[t[--o]] = c.event.mouseHooks;
		var g = c.event.special.mousewheel = {
			version: "3.1.12",
			setup: function() {
				if (this.addEventListener)
					for (var t = i.length; t;) this.addEventListener(i[--t], e, !1);
				else this.onmousewheel = e;
				c.data(this, "mousewheel-line-height", g.getLineHeight(this)), c.data(this, "mousewheel-page-height", g.getPageHeight(this))
			},
			teardown: function() {
				if (this.removeEventListener)
					for (var t = i.length; t;) this.removeEventListener(i[--t], e, !1);
				else this.onmousewheel = null;
				c.removeData(this, "mousewheel-line-height"), c.removeData(this, "mousewheel-page-height")
			},
			getLineHeight: function(t) {
				var e = c(t),
					t = e["offsetParent" in c.fn ? "offsetParent" : "parent"]();
				return t.length || (t = c("body")), parseInt(t.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
			},
			getPageHeight: function(t) {
				return c(t).height()
			},
			settings: {
				adjustOldDeltas: !0,
				normalizeOffset: !0
			}
		};
		c.fn.extend({
			mousewheel: function(t) {
				return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
			},
			unmousewheel: function(t) {
				return this.unbind("mousewheel", t)
			}
		})
	});