(function(t) {
	function e(e) {
		for (var i, n,
			r = e[0],
			c = e[1],
			l = e[2],
			d = 0,
			u = [];
		d < r.length;
		d++)n = r[d], Object.prototype.hasOwnProperty.call(s, n) && s[n] && u.push(s[n][0]), s[n] = 0;
		for (i in c)Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
		p && p(e);
		while (u.length)u.shift()();
		return o.push.apply(o, l || []), a()
	}
	
	function a() {
		for (var t,
			e = 0; e < o.length; e++) {
			for (var a = o[e],
				i = !0,
				n = 1; n < a.length; n++) {
				var r = a[n];
				0 !== s[r] && (i = !1)
			}
			
			i && (o.splice(e--, 1),
				t = c(c.s = a[0]))
		}
		
		return t
	}
	
	var i = {},
	n = {
		app: 0
	},
	s = {
		app: 0
	},
	o = [];
	function r(t) {
		return c.p + "js/" + ({
			about: "about"
		}
		
		[t] || t) + "." + {
			about: "b04a3d6b",
			"chunk-60df03d9": "1e063e0e"
		}
		
		[t] + ".js"
	}
	
	function c(e) {
		if (i[e])return i[e].exports;
		var a = i[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		
		return t[e].call(a.exports, a, a.exports, c),
			a.l = !0, a.exports
	}
	
	c.e = function (t) {
		var e = [],
			a = {
			about: 1,
			"chunk-60df03d9": 1
		};
		
		n[t]?e.push(n[t]):0 !== n[t] && a[t] && e.push(n[t] = new Promise((function(e, a) {
			for (var i = "css/" + ({
			about: "about"
			}
			
			[t] || t) + "." + {
			about: "83888751",
				"chunk-60df03d9": "c10212b1"
			}
			
			[t] + ".css",
				s = c.p + i,
				o = document.getElementsByTagName("link"),
				r = 0; r < o.length; r++) {
				var l = o[r],
					d = l.getAttribute("data-href") || l.getAttribute("href");
				if ("stylesheet" === l.rel && (d ===i ||d === s))return e()
			}
			
			var u = document.getElementsByTagName("style");
			for (r = 0; r < u.length; r++) {
				l = u[r],
					d = l.getAttribute("data-href");
				if (d ===i ||d === s)return e()
			}
			
			var p = document.createElement("link");
			p.rel = "stylesheet",
				p.type = "text/css",
				p.onload = e,
				p.onerror = function (e) {
				var i = e && e.target && e.target.src || s,
					o = new Error("Loading CSS chunk " +t + " failed.\n(" +i + ")");
				o.code = "CSS_CHUNK_LOAD_FAILED",
					o.request = i, delete n[t], p.parentNode.removeChild(p), a(o)
			},
				p.href = s;
			var m = document.getElementsByTagName("head")[0];
			m.appendChild(p)
		})).then((function() {
			n[t] = 0
		})));
		var i = s[t];
		if (0 !== i)if (i)e.push(i[2]);
		else {
			var o = new Promise((function(e, a) {
				i = s[t] = [e, a]
			}));
			e.push(i[2] = o);
			var l,
				d = document.createElement("script");
			d.charset = "utf-8",
				d.timeout = 120, c.nc && d.setAttribute("nonce", c.nc),
				d.src = r(t);
			var u = new Error;
			l = function (e) {
				d.onerror = d.onload = null, clearTimeout(p);
				var a = s[t];
				if (0 !== a) {
					if (a) {
						var i = e && ("load" === e.type?"missing": e.type),
							n = e && e.target && e.target.src;
						u.message = "Loading chunk " +t + " failed.\n(" +i + ": " +n + ")",
							u.name = "ChunkLoadError",
							u.type = i,
							u.request = n, a[1](u)
					}
					
					s[t] = void 0
				}
			};
			
			var p = setTimeout((function() {
				l({
					type: "timeout",
					target: d
				})
			}), 12e4);
			d.onerror = d.onload = l, document.head.appendChild(d)
		}
		
		return Promise.all(e)
	},
		c.m = t,
		c.c = i,
		c.d = function (t, e, a) {
		c.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: a
		})
	},
		c.r = function (t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	},
		c.t = function (t, e) {
		if (1 &e && (t = c(t)), 8 & e)return t;
		if (4 &e && "object" === typeof t &&t && t.__esModule)return t;
		var a = Object.create(null);
		if (c.r(a), Object.defineProperty(a, "default", {
			enumerable: !0,
			value: t
		}), 2 &e && "string" != typeof t)for (var i in t)c.d(a, i, function(e) {
			return t[e]
		}
		
		.bind(null, i));
		return a
	},
		c.n = function (t) {
		var e = t && t.__esModule?function() {
			return t["default"]
		}
		
		:function() {
			return t
		};
		
		return c.d(e, "a", e), e
	},
		c.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	},
		c.p = "/",
		c.oe = function (t) {
		throw console.error(t), t
	};
	
	var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
		d = l.push.bind(l);
	l.push = e,
		l = l.slice();
	for (var u = 0;
	u < l.length;
	u++)e(l[u]);
	var p = d;
	o.push([0, "chunk-vendors"]), a()
})({
	0:function(t, e, a) {
		t.exports = a("56d7")
	},
		"0032": function (t, e, a) {
		"use strict";
		var i = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("svg", {
				staticClass: "svg-icon",
				attrs: {
					viewBox: "0 0 24 24"
				}
			},
			[a("path", {
				attrs: {
					d: t.path
				}
			})])
		},
			n = [],
			s = (a("b0c0"), a("94ed")),
			o = {
			arrowLeft: s["e"],
				arrowRight: s["f"],
				arrowDown: s["c"],
				dotCircle: s["h"],
				closeCircle: s["i"],
				arrowExpand: s["d"],
				arrowCollapse: s["b"],
				triangle: s["j"],
				checkCircle: s["g"],
				alertCircle: s["a"]
		},
		r = {
			name: "svg-icon",
			props: {
				name: String
			},
			computed: {
				path: function () {
					return o[this.name]
				}
			}
		},
		c = r,
			l = a("2877"),
			d = Object(l["a"])(c, i, n, !1, null, null, null);
		e["a"] = d.exports
	},
		"0273": function (t, e, a) {
		"use strict";
		var i = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "c-hum-header",
				class:{
					"clip-it": t.clip
				}
			},
			[a("div", {
				staticClass: "header-content"
			},
			[a("div", {
				staticClass: "c-header-bg overflow-hidden"
			},
			[t._t("header-bg", [a("div", {
				ref: "banner",
				staticClass: "home-banner"
			})])], 2), a("div", {
				staticClass: "header-body overflow-hidden"
			},
			[a("div", {
				staticClass: "header-body-content",
				class:t.getClass
			},
			[a("div", {
				staticClass: "content-main"
			},
			[t._t("header-body", [t._m(0)])], 2)]), a("svg-icon", {
				staticClass: "go-down",
				attrs: {
					name: "arrowDown"
				}
			})], 1)])])
		},
			n = [function() {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "home-header-body-text"
			},
			[a("p", [t._v(" Hi, my name is Luna."), a("br"), a("br"), t._v("I have been investigating the HUM Organisation for the last couple of months. ")]), a("p", [t._v(" Below, you will find my research notes on my progress so far. It is incredibly important that this information be made public inspite of forces that don’t wish for this to happen. ")]), a("p", [t._v("Look. Share.")])])
			}],
			s = a("0032"),
			o = {
			name: "HumHeader",
			components: {
				svgIcon: s["a"]
			},
			props: {
				options: {
					type: Object,
					default: function () {
						return {
							overlay: !1
						}
					}
				},
				clip: {
					type: Boolean,
					default:!1
				}
			},
			computed: {
				getClass: function () {
					var t = "";
					if (this.options.overlay) {
						var e = this.options.overlayType || "";
						t += "overlay " + e
					}
					
					return t
				}
			},
			mounted: function () {
				var t = this,
					e = this.$refs.banner;
				if (e) {
					var a = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					a < 1024?t.$emit("header-mounted", e):t.$emit("header-mounted", e, !0)
				}
				
				window.addEventListener("resize", (function() {
					var a = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					a < 1024?t.$emit("header-mounted", e):t.$emit("header-mounted", e, !0)
				}))
			}
		},
		r = o,
			c = (a("f6c2"), a("2877")),
			l = Object(c["a"])(r, i, n, !1, null, "066ce0fc", null);
		e["a"] = l.exports
	},
		"0344": function (t, e, a) {},
		"05be": function (t, e, a) {
		t.exports = a.p + "img/matka.7a523714.png"
	},
		"09c5": function (t, e, a) {
		t.exports = a.p + "img/ReliefWorker.fee66e7c.jpg"
	},
		"0a96": function (t, e, a) {},
		"0b48": function (t, e, a) {
		"use strict";
		var i = a("7ffe"),
			n = a.n(i);
		n.a
	},
		"0b80": function (t, e, a) {
		t.exports = a.p + "img/about-step3.0ab388ef.png"
	}, 1605:function(t, e, a) {
		"use strict";
		var i = a("9275"),
			n = a.n(i);
		n.a
	}, 1771:function(t, e, a) {
		var i = {
			"./about/about-exhibit1.png": "e08a",
			"./about/about-exhibit2.png": "e689",
			"./about/about-exhibit3.png": "eb94",
			"./about/about-exhibit4.png": "53d4",
			"./about/about-exhibit5.png": "811b",
			"./about/about-exhibit6.png": "6679",
			"./about/about-step2.png": "bf5a",
			"./about/about-step3.png": "0b80",
			"./about/about-step4-1.png": "2b14",
			"./about/about-step4-2.png": "9524",
			"./about/about-step4-3.png": "8146",
			"./about/about-step4-4.png": "4f2c",
			"./about/logos/barbican.svg": "c62d",
			"./about/logos/british_council.svg": "4c38",
			"./about/logos/future_fiction.svg": "bb1d",
			"./about/logos/hetco.png": "bc40",
			"./about/logos/hla.png": "3bd1",
			"./about/logos/msf.png": "ca2e",
			"./about/logos/nid.svg": "7ae7",
			"./about/logos/quicksand.svg": "f390",
			"./about/logos/sixervr.png": "fc9d",
			"./about/logos/stby.png": "7fc9",
			"./about/logos/tandem_research.svg": "f0ab",
			"./carousel/HydroponicFarmer.jpg": "bb16",
			"./carousel/MedWorker.jpg": "9a35",
			"./carousel/ReliefWorker.jpg": "09c5",
			"./carousel/WellDigger.jpg": "aa2d",
			"./fedlogo.png": "6379",
			"./hum_epidemiologist.jpg": "f649",
			"./hum_homes.jpg": "3778",
			"./hum_vr_fed.jpg": "67de",
			"./hum_vr_hydro.jpg": "4b73",
			"./hum_vr_pod.jpg": "87a1",
			"./hum_vr_whel.jpg": "bfac",
			"./hydrologo.png": "8023",
			"./matka.png": "05be",
			"./medlogo.png": "5d89",
			"./tankerpod.png": "7fef",
			"./toolkit/toolkit-content1.jpg": "3fa9",
			"./toolkit/toolkit-content2.jpg": "38c8",
			"./toolkit/toolkit-header-bg.png": "e196",
			"./wars-map.png": "6015",
			"./warslogo.png": "da89",
			"./whellogo.png": "5fd0"
		};
		
		function n(t) {
			var e = s(t);
			return a(e)
		}
		
		function s(t) {
			if (!a.o(i, t)) {
				var e = new Error("Cannot find module '" +t + "'");
				throw e.code = "MODULE_NOT_FOUND", e
			}
			
			return i[t]
		}
		
		n.keys = function () {
			return Object.keys(i)
		},
			n.resolve = s,
			t.exports = n,
			n.id = "1771"
	},
		"1b65": function (t, e, a) {},
		"2b14": function (t, e, a) {
		t.exports = a.p + "img/about-step4-1.9534c45c.png"
	},
		"2ddf": function (t, e, a) {}, 3778:function(t, e, a) {
		t.exports = a.p + "img/hum_homes.b92cad39.jpg"
	},
		"38c8": function (t, e, a) {
		t.exports = a.p + "img/toolkit-content2.31f8f459.jpg"
	},
		"3bd1": function (t, e, a) {
		t.exports = a.p + "img/hla.26827ad7.png"
	},
		"3d83": function (t, e, a) {},
		"3fa9": function (t, e, a) {
		t.exports = a.p + "img/toolkit-content1.754f9906.jpg"
	},
		"4b73": function (t, e, a) {
		t.exports = a.p + "img/hum_vr_hydro.abaecbca.jpg"
	},
		"4c38": function (t, e, a) {
		t.exports = a.p + "img/british_council.c629cb17.svg"
	},
		"4f2c": function (t, e, a) {
		t.exports = a.p + "img/about-step4-4.367ca4e4.png"
	},
		"53d4": function (t, e, a) {
		t.exports = a.p + "img/about-exhibit4.dfc7976b.png"
	},
		"56d7": function (t, e, a) {
		"use strict";
		a.r(e);
		a("e260"), a("e6cf"), a("cca6"), a("a79d");
		var i = a("2b0e"),
			n = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				attrs: {
					id: "app"
				}
			},
			[a("HumNav"), a("router-view")], 1)
		},
			s = [],
			o = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "header-nav",
				class:{
					"dark-text": t.darkText
				}
			},
			[a("div", {
				staticClass: "nav-logo-text"
			},
			[t._v("hum")]), a("div", {
				staticClass: "spacer"
			}), a("div", {
				class:["c-nav-items",
				t.showNav?"show": "hide"]
			},
			[a("ul", {
				staticClass: "items-list"
			},
			["Home" != t.nextRoute?a("li", {
				staticClass: "nav-item",
				staticStyle: {
					"--n": "0"
				}
			},
			[a("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/"
				},
				nativeOn: {
					click: function (e) {
						return t.toggleNav(e)
					}
				}
			},
			[a("span", [t._v("HUM.2035")])])], 1):t._e(), "About" != t.nextRoute?a("li", {
				staticClass: "nav-item",
				staticStyle: {
					"--n": "1"
				}
			},
			[a("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/about"
				},
				nativeOn: {
					click: function (e) {
						return t.toggleNav(e)
					}
				}
			},
			[a("span", [t._v("About")])])], 1):t._e(), "Toolkit" != t.nextRoute?a("li", {
				staticClass: "nav-item",
				staticStyle: {
					"--n": "2"
				}
			},
			[a("router-link", {
				staticClass: "nav-link",
				attrs: {
					to: "/toolkit"
				},
				nativeOn: {
					click: function (e) {
						return t.toggleNav(e)
					}
				}
			},
			[a("span", [t._v("Toolkit")])])], 1):t._e()])]), a("div", {
				staticClass: "toggle-icon",
				on: {
					click: t.toggleNav
				}
			},
			[a("svg-icon", {
				attrs: {
					name: t.iconName
				}
			})], 1)])
		},
			r = [],
			c = (a("b0c0"), a("0032")),
			l = (a("d3b7"), a("8c4f")),
			d = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				attrs: {
					id: "hum-home"
				}
			},
			[a("div", {
				staticClass: "home-vr-viewer",
				class:{
					show: t.showVrPopup
				}
			},
			[a("div", {
				staticClass: "vr-content"
			},
			[a("div", {
				ref: "content-pano",
				staticClass: "content-pano-img"
			}), t.contentPanoLoading?a("div", {
				staticClass: "content-loading"
			},
			[t._m(0), t._m(1)]):t._e(), a("div", {
				staticClass: "c-vr-close",
				on: {
					click: t.closeVr
				}
			},
			[a("svg-icon", {
				attrs: {
					name: "closeCircle"
				}
			})], 1), t._m(2)])]), a("HumHeader", {
				attrs: {
					options: t.headerOptions,
					clip: ""
				},
				on: {
					"header-mounted": t.processHeaderPano
				}
			}), a("HomeAbout"), a("HumEvidence"), a("HumOrg", {
				on: {
					"open-vr": t.processContentPano
				}
			}), a("HumExtras"), a("HumDetails"), a("HumFooter")], 1)
		},
			u = [function() {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "spinner"
			},
			[a("div", {
				staticClass: "dot1"
			}), a("div", {
				staticClass: "dot2"
			})])
			}, function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "loading-text"
				},
				[a("p", [t._v("Loading Scene...")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "vr-textual-info"
				},
				[a("p", [t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et lacus augue. Sed leo magna, iaculis vitae purus vel, aliquam molestie ex. Proin pulvinar urna nisl, ac fringilla felis consequat at. Aenean convallis eu mauris in varius. Integer mattis metus ut fermentum pulvinar. Curabitur aliquet, tellus ut euismod maximus, tellus.")])])
			}],
			p = a("0273"),
			m = function () {
			var t = this,
				e = t.$createElement;
			t._self._c;
			return t._m(0)
		},
			f = [function() {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				staticClass: "c-home-about overflow-hidden"
			},
			[i("div", {
				staticClass: "about-section c-boards"
			},
			[i("div", {
				staticClass: "board jotted overflow-hidden"
			},
			[i("div", {
				staticClass: "board-content"
			},
			[i("div", {
				staticClass: "content-main"
			},
			[i("img", {
				staticClass: "board-bg",
				attrs: {
					src: a("3778")
				}
			}), i("div", {
				staticClass: "sticky-note side-note"
			},
			[i("p", [t._v(" NANO Pill for poor people where they can get tracked for their health metrics. Epidemiologist in a van/modded bike with an antenna. ")])]), i("div", {
				staticClass: "sticky-note below-note"
			},
			[i("p", [t._v(" Telling the story of a digital epidemiologist trying to "), i("strong", [t._v(" investigate transmission amongst the homeless and "), i("span", {
				staticClass: "xyz"
			},
			[t._v("prisoners")]), t._v(" with trackers and tags ")]), t._v(" in a world "), i("strong", [t._v("where the underprivileged are neglected.")])])]), i("div", {
				staticClass: "rough-jot"
			},
			[i("p", [t._v(" + ambulance + police ?? "), i("br"), t._v("+ citizen activists food distribution ")])])])])]), i("div", {
				staticClass: "board sorted overflow-hidden"
			},
			[i("div", {
				staticClass: "board-content",
				attrs: {
					id: "card-notes-container"
				}
			},
			[i("div", {
				staticClass: "content-main"
			},
			[i("div", {
				staticClass: "c-info-pic overlay light"
			},
			[i("img", {
				staticClass: "pic-elem",
				attrs: {
					src: a("f649")
				}
			})]), i("div", {
				staticClass: "c-info-data"
			},
			[i("span", {
				staticClass: "data-header"
			},
			[t._v("Epidemiologist")]), i("span", {
				staticClass: "data-undertext"
			},
			[t._v("-- ext. shot for better control")]), i("div", {
				staticClass: "data-content"
			},
			[i("div", {
				staticClass: "sticky-note data-note"
			},
			[i("p", [t._v(" Telling the story of a digital epidemiologist trying to develop "), i("strong", [t._v("tools to monitor the public travelling on public transport ")]), t._v("in a world where"), i("strong", [t._v(" citizens are adapting to living with thw pandemic.")])])])])])])])])]), i("div", {
				staticClass: "about-section desc"
			},
			[i("div", {
				staticClass: "desc-content"
			},
			[i("p", {
				staticClass: "title"
			},
			[t._v("HUM.2035")]), i("p", {
				staticClass: "content"
			},
			[t._v(" HUM, a humanitarian aid network founded in 2020 India, the project tells the stories of HUM-affiliated humanitarian workers dealing with the aftermath of storm Lata which has recently hit Goa. In it are explored themes like the purpose of upskilling and questions around employment when facing displacement, the use of mobile-based or digital services, encouraging multidisciplinarity across sectors (from food provision to health care to financial inclusion) and the support of local efforts and knowledge. ")])])])])
			}],
			v = {
			name: "HomeAbout"
		},
		g = v,
			h = (a("1605"), a("2877")),
			b = Object(h["a"])(g, m, f, !1, null, "9e46f558", null),
			w = b.exports,
			C = function () {
			var t = this,
				e = t.$createElement;
			t._self._c;
			return t._m(0)
		},
			_ = [function() {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "c-hum-evidence"
			},
			[a("div", {
				staticClass: "evidence-article"
			},
			[a("div", {
				staticClass: "article-header"
			},
			[a("p", {
				staticClass: "highlight-para"
			},
			[a("span", [t._v(" This is latest video I scraped from their confidential broadcast to their partners ")])])]), a("div", {
				staticClass: "article-info"
			},
			[a("p", [t._v(" …and we’re pleased to announce that we have met our targets for the last quarter and we are on track to meet or possibly exceed targets for the next quarter as well. We thank you for your patience and your support for the same. ")])]), a("div", {
				staticClass: "article-media"
			},
			[a("div", {
				staticClass: "c-media-content",
				staticStyle: {
					"--aspect-ratio": "9 / 16"
				}
			},
			[a("iframe", {
				staticClass: "media-content",
				staticStyle: {
					position: "absolute",
					top:"0",
					left: "0",
					width: "100%",
					height: "100%"
				},
				attrs: {
					src: "https://player.vimeo.com/video/329957538?title=0&byline=0&portrait=0",
					frameborder: "0",
					allow: "autoplay; fullscreen",
					allowfullscreen: ""
				}
			})]), a("div", {
				staticClass: "media-text only-desktop"
			},
			[a("div", {
				staticClass: "from-to"
			},
			[a("p", [a("strong", [t._v("FROM: ")]), t._v("#########@HUM.ORG")]), a("p", [a("strong", [t._v("TO: ")]), t._v("########@HUM.ORG")])]), a("div", {
				staticClass: "caption-text"
			},
			[a("p", [t._v("..…and we’re pleased to announce that we have met our targets for the last quarter and we are on track to meet or possibly exceed targets for the next quarter as well. We thank you for your patience and your support for the same. We have put together a small video to give you a better understanding of the work we do. We hope you find this of value……")])])])]), a("div", {
				staticClass: "article-caption"
			},
			[a("p", [t._v(" We have put together a small video to give you a better understanding of the work we do. We hope you find this of… ")])])])])
			}],
			y = {
			name: "HumEvidence"
		},
		x = y,
			k = (a("e5ef"), Object(h["a"])(x, C, _, !1, null, "96b4a454", null)),
			E = k.exports,
			H = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "c-hum-org"
			},
			[t._m(0), a("div", {
				staticClass: "hum-org-section hum-structure"
			},
			[t._m(1), a("div", {
				staticClass: "section-figure"
			},
			[a("div", {
				staticClass: "c-figure-items"
			},
			[t._m(2), t._l(t.structureTags, (function(e, i) {
				return a("div", {
					key: i,
					class:["figure-item-wrapper",
					e.isBig?"big": ""],
					style: {
						"--n": i + 1
					}
				},
				[a("div", {
					staticClass: "figure-item structure-tag"
				},
				[a("div", {
					staticClass: "c-tag-img"
				},
				[a("img", {
					staticClass: "tag-img",
					attrs: {
						src: e.src
					},
					on: {
						click: function (a) {
							return t.openVrImg(e)
						}
					}
				})]), a("div", {
					staticClass: "tag-content"
				},
				[a("div", {
					staticClass: "tag-title"
				},
				[a("span", [t._v(t._s(e.title))])]), a("div", {
					staticClass: "tag-desc"
				},
				[a("p", [t._v(t._s(e.desc))])])])])])
			}))], 2)])])])
		},
			T = [function() {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "hum-org-section hum-objective"
			},
			[a("div", {
				staticClass: "section-data"
			},
			[a("div", {
				staticClass: "section-title"
			},
			[a("span", [t._v("Aims and Objectives")])]), a("div", {
				staticClass: "section-info"
			},
			[a("p", [t._v(" The HUM organisation has a set way of working. Digging through some of their shareholder meeting documents, I found this organisation matrix, which explains their modus operandi. ")])])]), a("div", {
				staticClass: "section-figure"
			},
			[a("div", {
				staticClass: "c-figure-items"
			},
			[a("div", {
				staticClass: "figure-item objective"
			},
			[a("p", [t._v(" Revitalising damaged systems of water purification and food production ")])]), a("span", {
				staticClass: "figure-item spacer"
			}), a("div", {
				staticClass: "figure-item objective"
			},
			[a("p", [t._v(" Empowering communities to better interact with water ( from harvesting to purification) ")])]), a("span", {
				staticClass: "spacer full"
			}), a("div", {
				staticClass: "figure-item objective"
			},
			[a("p", [t._v(" Mobilising financial and natural resources from other states ")])]), a("span", {
				staticClass: "figure-item spacer"
			}), a("div", {
				staticClass: "figure-item objective"
			},
			[a("p", [t._v(" Creating knowledge systems for resilience and awareness around floods ")])]), a("div", {
				staticClass: "figure-item objective"
			},
			[a("p", [t._v(" Encouraging integration of local actors and plants with the WARS platform ")])])])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "section-data"
				},
				[a("div", {
					staticClass: "section-title"
				},
				[a("span", [t._v("Organisation Structure")])]), a("div", {
					staticClass: "section-info"
				},
				[a("p", [t._v(" It appears that well known organisations such as WARS, WHEL, and MED.CN are all under control of HUM! These well-liked public facing organisations are under their direct control. ")])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("div", {
					staticClass: "figure-item-wrapper only-desktop title-tag-wrapper",
					staticStyle: {
						"--n": "0"
					}
				},
				[a("div", {
					staticClass: "figure-item structure-tag dark"
				},
				[a("div", {
					staticClass: "c-tag-logo-text"
				},
				[t._v("hum")]), a("div", {
					staticClass: "tag-content"
				},
				[a("div", {
					staticClass: "tag-desc"
				},
				[a("p", [t._v("A Humanitarian Conglomerate")])])])])])
			}],
			j = (a("2ef0"),  {
			name: "HumOrg",
			data: function () {
				return {
					structureTags: [{
						title: "WARS",
						desc: "Water Allocation and Rationing System",
						src: a("da89"),
						vrPath: a("bfac"),
						isBig: !0
						},
						{
							title: "FED",
							desc: "Farming Exponential Deployment",
							src: a("6379"),
							vrPath: a("67de")
						},
						{
							title: "WHEL",
							desc: "Water Health and Environment Labour",
							src: a("5fd0"),
							vrPath: a("bfac")
						},
						{
							title: "MED.CN",
							desc: "Mass Environmental Disease Control",
							src: a("5d89"),
							vrPath: a("bfac")
						},
						{
							title: "Hydrosystem Cooperatives",
							desc: "An assembly line of water relief kits for households",
							src: a("8023"),
							vrPath: a("4b73")
						}]
				}
			},
				methods: {
				openVrImg: function (t) {
					var e = this;
					e.$emit("open-vr", t.vrPath)
				}
			},
			mounted: function () {}
		}),
			P = j,
			M = (a("d54d"), Object(h["a"])(P, H, T, !1, null, "b85bb6a6", null)),
			O = M.exports,
			S = function () {
			var t = this,
				e = t.$createElement;
			t._self._c;
			return t._m(0)
		},
			D = [function() {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "c-hum-extras"
			},
			[a("div", {
				staticClass: "extra-content"
			},
			[a("div", {
				staticClass: "c-extra-img"
			},
			[a("div", {
				staticClass: "c-pano-img"
			})]), a("div", {
				staticClass: "c-extra-info"
			},
			[a("div", {
				staticClass: "info-title"
			},
			[a("span", [t._v("A Discreet Meeting")])]), a("div", {
				staticClass: "info-desc"
			},
			[a("p", [t._v("Through sheer luck I met an ex-HUM operative at a farm-market, through whom I obtained additional confidential material, the most interesting of which is the HUM Ecosystem Map. This diagram meticulously lays out the structure of HUM, and how their public facing organisations worked together post Storm Lata.")])])])])])
			}],
			N = a("3f1d"),
			F = {
			name: "HumExtras",
			data: function () {
				return {
					panoviewer: null
				}
			},
				mounted: function () {
				var t = this,
					e = document.querySelector(".c-pano-img");
				t.panoviewer = new N["a"](e, {
					image: a("bfac"),
					gyroMode: "yawPitch",
					useZoom: !1
				}), window.addEventListener("resize", (function() {
					Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					t.panoviewer.updateViewportDimensions()
				}))
			}
		},
		A = F,
			L = (a("a2f5"), Object(h["a"])(A, S, D, !1, null, "c3156502", null)),
			I = L.exports,
			R = function () {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				staticClass: "c-hum-details"
			},
			[i("div", {
				staticClass: "hum-section"
			},
			[i("humcard", {
				attrs: {
					title: "The Hum Ecosystem Map",
					loneImgName: "wars-map.png"
				},
				scopedSlots: t._u([{
					key: "desc",
					fn: function () {
						return[i("p", [t._v("HUM is a diverse ecosystem of actors upholding high standards in the world of humanitarian aid in India, here is an overview of our activity as of 2035.")])]
					},
						proxy: !0
				},
				{
					key: "actions",
					fn: function () {
						return[i("div", {
							staticClass: "action-item",
							on: {
								click: t.fullEcosystem
							}
						},
						[i("span", [t._v("See Full Map")]), i("svg-icon", {
							attrs: {
								name: "arrowDown"
							}
						})], 1)]
					},
						proxy: !0
				}]),
				model: {
					value: t.ecoFullscreen,
					callback: function (e) {
						t.ecoFullscreen = e
					},
						expression: "ecoFullscreen"
				}
			})], 1), i("div", {
				staticClass: "hum-section"
			},
			[i("humcard", {
				attrs: {
					title: "The Hum Timeline",
					"info-bg": "humgreen"
				},
				scopedSlots: t._u([{
					key: "desc",
					fn: function () {
						return[i("p", [t._v("HUM is a diverse ecosystem of actors upholding high standards in the world of humanitarian aid in India, here is an overview of our activity as of 2035.")])]
					},
						proxy: !0
				},
				{
					key: "content",
					fn: function () {
						return[i("div", {
							staticClass: "timeline"
						},
						[i("div", {
							staticClass: "c-timeline-content"
						},
						[i("iframe", {
							staticClass: "timeline-frame",
							class:{
								fullscreen: t.timelineFs
							},
							attrs: {
								src: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=14cAw46BRZIh0mcYXWxAspYWnwOrc2uevbHL4dAY8U_M&font=Georgia-Helvetica&lang=en&initial_zoom=2",
								webkitallowfullscreen: "",
								mozallowfullscreen: "",
								allowfullscreen: "",
								frameborder: "0"
							}
						}), t.timelineFs?i("div", {
							staticClass: "timeline-close",
							on: {
								click: t.closeTimelineFs
							}
						},
						[i("svg-icon", {
							staticClass: "close-icon",
							attrs: {
								name: "closeCircle"
							}
						})], 1):t._e()])])]
					},
						proxy: !0
				},
				{
					key: "actions",
					fn: function () {
						return[i("div", {
							staticClass: "action-item",
							on: {
								click: t.openTimelineFs
							}
						},
						[i("span", [t._v("See Full Timeline")]), i("svg-icon", {
							attrs: {
								name: "arrowDown"
							}
						})], 1)]
					},
						proxy: !0
				}])
			})], 1), i("div", {
				staticClass: "hum-section"
			},
			[i("humcard", {
				attrs: {
					title: "The Hum Employees"
				},
				scopedSlots: t._u([{
					key: "desc",
					fn: function () {
						return[i("p", [t._v("HUM is a diverse ecosystem of actors upholding high standards in the world of humanitarian aid in India, here is an overview of our activity as of 2035.")])]
					},
						proxy: !0
				},
				{
					key: "content",
					fn: function () {
						return[i("div", {
							ref: "emp-carousel",
							staticClass: "emp-card-carousel carousel"
						},
						[i("div", {
							staticClass: "emp-card carousel-cell"
						},
						[i("div", {
							ref: "emp1details",
							staticClass: "c-emp-details"
						},
						[i("img", {
							staticClass: "emp-img",
							attrs: {
								src: a("9a35")
							}
						}), i("div", {
							ref: "emp1info",
							staticClass: "emp-info"
						},
						[i("div", {
							staticClass: "info-header"
						},
						[i("span", [t._v("MED.CN Health Workers")])]), i("div", {
							staticClass: "info-content"
						},
						[i("p", [t._v("The role of MED.CN health workers is to provide adapted care to affected communities, namely via telemedicine services on hand-held tablets carried by WHEL staff for initial check-ups.")])]), i("div", {
							staticClass: "info-footer"
						},
						[i("img", {
							staticClass: "logo-img",
							attrs: {
								src: a("5d89")
							}
						})]), i("div", {
							staticClass: "hide-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!1, "emp1details", "emp1info", "emp1show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "collapse",
							attrs: {
								name: "arrowCollapse"
							}
						})], 1)]), i("div", {
							ref: "emp1show",
							staticClass: "show-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!0, "emp1details", "emp1info", "emp1show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "expand",
							attrs: {
								name: "arrowExpand"
							}
						})], 1)])]), i("div", {
							staticClass: "emp-card carousel-cell"
						},
						[i("div", {
							ref: "emp2details",
							staticClass: "c-emp-details"
						},
						[i("img", {
							staticClass: "emp-img",
							attrs: {
								src: a("bb16")
							}
						}), i("div", {
							ref: "emp2info",
							staticClass: "emp-info"
						},
						[i("div", {
							staticClass: "info-header"
						},
						[i("span", [t._v("FED FARMERS")])]), i("div", {
							staticClass: "info-content"
						},
						[i("p", [t._v("Displaced farmers, engineers and botanists in collaboration with the FEDs, are working day and night in pop-up experimental growing labs to tend to the high demand of locally grown food post the floods.")])]), i("div", {
							staticClass: "info-footer"
						},
						[i("img", {
							staticClass: "logo-img",
							attrs: {
								src: a("6379")
							}
						})]), i("div", {
							staticClass: "hide-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!1, "emp2details", "emp2info", "emp2show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "collapse",
							attrs: {
								name: "arrowCollapse"
							}
						})], 1)]), i("div", {
							ref: "emp2show",
							staticClass: "show-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!0, "emp2details", "emp2info", "emp2show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "expand",
							attrs: {
								name: "arrowExpand"
							}
						})], 1)])]), i("div", {
							staticClass: "emp-card carousel-cell"
						},
						[i("div", {
							ref: "emp3details",
							staticClass: "c-emp-details"
						},
						[i("img", {
							staticClass: "emp-img",
							attrs: {
								src: a("09c5")
							}
						}), i("div", {
							ref: "emp3info",
							staticClass: "emp-info"
						},
						[i("div", {
							staticClass: "info-header"
						},
						[i("span", [t._v("HYDROSYSTEMS TECHNICIANS")])]), i("div", {
							staticClass: "info-content"
						},
						[i("p", [t._v("Working out of the (under-construction) Hydrosystem warehouses, these volunteers are assembling affordable water purification, testing, and relief kits, and tropical disease prevention kits for neighbouring communities and camps. ")])]), i("div", {
							staticClass: "info-footer"
						},
						[i("img", {
							staticClass: "logo-img",
							attrs: {
								src: a("8023")
							}
						})]), i("div", {
							staticClass: "hide-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!1, "emp3details", "emp3info", "emp3show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "collapse",
							attrs: {
								name: "arrowCollapse"
							}
						})], 1)]), i("div", {
							ref: "emp3show",
							staticClass: "show-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!0, "emp3details", "emp3info", "emp3show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "expand",
							attrs: {
								name: "arrowExpand"
							}
						})], 1)])]), i("div", {
							staticClass: "emp-card carousel-cell"
						},
						[i("div", {
							ref: "emp4details",
							staticClass: "c-emp-details"
						},
						[i("img", {
							staticClass: "emp-img",
							attrs: {
								src: a("aa2d")
							}
						}), i("div", {
							ref: "emp4info",
							staticClass: "emp-info"
						},
						[i("div", {
							staticClass: "info-header"
						},
						[i("span", [t._v("WHEL WATER ACTIVISTS")])]), i("div", {
							staticClass: "info-content"
						},
						[i("p", [t._v("Traditional well-diggers and other water activists have a unique knowledge of homes’ respective water needs and inhabitants; thanks to their practice of supplying homes with means to harvest rainwater, and recharge groundwater. ")])]), i("div", {
							staticClass: "info-footer"
						},
						[i("img", {
							staticClass: "logo-img",
							attrs: {
								src: a("5fd0")
							}
						})]), i("div", {
							staticClass: "hide-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!1, "emp4details", "emp4info", "emp4show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "collapse",
							attrs: {
								name: "arrowCollapse"
							}
						})], 1)]), i("div", {
							ref: "emp4show",
							staticClass: "show-info",
							on: {
								click: function (e) {
									return t.toggleEmpDetails(!0, "emp4details", "emp4info", "emp4show")
								}
							}
						},
						[i("svg-icon", {
							staticClass: "expand",
							attrs: {
								name: "arrowExpand"
							}
						})], 1)])])])]
					},
						proxy: !0
				},
				{
					key: "actions",
					fn: function () {
						return[i("div", {
							staticClass: "action-item",
							on: {
								click: function (t) {}
							}
						},
						[i("svg-icon", {
							attrs: {
								name: "arrowLeft"
							}
						}), i("span", [t._v("Swipe")]), i("svg-icon", {
							attrs: {
								name: "arrowRight"
							}
						})], 1)]
					},
						proxy: !0
				}])
			})], 1), i("div", {
				staticClass: "hum-section"
			},
			[i("humcard", {
				attrs: {
					title: "The Hum Technology"
				},
				scopedSlots: t._u([{
					key: "desc",
					fn: function () {
						return[i("p", [t._v("Partnering with private entities and the government, HUM has been able to invest heavily in optimising digital technology within the humanitarian space. The use of familiar objects like water matkas and E-waste to develop their technology has surely helped HUM penetrate Indian markets.")])]
					},
						proxy: !0
				},
				{
					key: "content",
					fn: function () {
						return[i("div", {
							staticClass: "tech-content"
						},
						[i("div", {
							staticClass: "c-assets"
						},
						[i("div", {
							staticClass: "c-asset-img"
						},
						[i("img", {
							staticClass: "first",
							attrs: {
								src: a("7fef")
							}
						}), i("img", {
							staticClass: "second",
							attrs: {
								src: a("05be")
							}
						})])])])]
					},
						proxy: !0
				}])
			})], 1)])
		},
			$ = [],
			W = function () {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				staticClass: "c-hum-card"
			},
			[i("div", {
				class:["card-info",
				t.infoBg]
			},
			[i("div", {
				staticClass: "card-title"
			},
			[i("span", {
				staticClass: "title"
			},
			[t._v(t._s(t.title))])]), i("div", {
				staticClass: "card-desc"
			},
			[t._t("desc")], 2), i("div", {
				staticClass: "card-actions"
			},
			[i("div", {
				staticClass: "c-action-items"
			},
			[t._t("actions")], 2)])]), i("div", {
				staticClass: "card-content",
				class:{
					fullscreen: t.isFullscreen
				}
			},
			[t.loneImgName?i("div", {
				staticClass: "c-img-content"
			},
			[i("img", {
				attrs: {
					src: a("1771")("./" + t.loneImgName)
				}
			}), t.loneFullscreen?i("div", {
				staticClass: "fs-close",
				on: {
					click: t.closeFs
				}
			},
			[i("svg-icon", {
				staticClass: "close-icon",
				attrs: {
					name: "closeCircle"
				}
			})], 1):t._e()]):t._e(), t.loneImgName?t._e():t._t("content")], 2)])
		},
			B = [],
			U = {
			name: "humcard",
			props: {
				title: String,
				infoBg: String,
				loneImgName: String,
				loneFullscreen: {
					type: Boolean,
					default:!1
				}
			},
			model: {
				prop: "loneFullscreen",
				event: "fschange"
			},
			computed: {
				isFullscreen: {
					get: function () {
						return this.loneFullscreen
					},
						set: function (t) {
						this.$emit("fschange", t)
					}
				}
			},
			methods: {
				closeFs: function () {
					this.isFullscreen = !1;
					var t = document.getElementsByTagName("body")[0];
					t.classList.remove("overflow-hidden")
				}
			}
		},
		q = U,
			V = (a("6668"), Object(h["a"])(q, W, B, !1, null, "2ce05ce0", null)),
			z = V.exports,
			Y = a("217b"),
			G = {
			name: "HumDetails",
			components: {
				humcard: z
			},
			data: function () {
				return {
					ecoFullscreen: !1,
					timelineFs: !1
				}
			},
				methods: {
				openTimelineFs: function () {
					this.timelineFs = !0;
					var t = document.getElementsByTagName("body")[0];
					t.classList.add("overflow-hidden")
				},
					closeTimelineFs: function () {
					this.timelineFs = !1;
					var t = document.getElementsByTagName("body")[0];
					t.classList.remove("overflow-hidden")
				},
					fullEcosystem: function () {
					this.ecoFullscreen = !0;
					var t = document.getElementsByTagName("body")[0];
					t.classList.add("overflow-hidden")
				},
					toggleEmpDetails: function (t, e, a, i) {
					var n = this.$refs[e],
						s = this.$refs[a],
						o = this.$refs[i];
					t?(n.classList.add("opened"), s.classList.add("show-me"), o.classList.add("hide-me")):(n.classList.remove("opened"), s.classList.remove("show-me"), o.classList.remove("hide-me"))
				}
			},
			mounted: function () {
				var t = this.$refs["emp-carousel"];
				new Y(t, {
					dragThreshold: 10,
					accessibility: !1,
					setGallerySize: !1,
					imagesLoaded: !0,
					contain: !0,
					cellAlign: "left",
					prevNextButtons: !0,
					pageDots: !1
				})
			}
		},
		Z = G,
			J = (a("9be9"), Object(h["a"])(Z, R, $, !1, null, "e98bf2fa", null)),
			K = J.exports,
			X = function () {
			var t = this,
				e = t.$createElement,
				a = t._self._c || e;
			return a("div", {
				staticClass: "c-hum-footer"
			},
			[a("p", [t._v("Help me with my research by contributing your insider information on "), a("span", {
				staticClass: "logo-text"
			},
			[t._v(" hum ")]), a("router-link", {
				attrs: {
					to: "/"
				}
			},
			[a("span", {
				staticClass: "underline"
			},
			[t._v("here.")])])], 1), a("p", [t._v("Find out more about this project "), a("router-link", {
				attrs: {
					to: "/about"
				}
			},
			[a("span", {
				staticClass: "underline"
			},
			[t._v("here.")])]), t._v(" (DAE presentation)")], 1), a("p", [t._v("You too can do your own research, using this "), a("router-link", {
				attrs: {
					to: "/toolkit"
				}
			},
			[a("span", {
				staticClass: "underline"
			},
			[t._v("toolkit.")])])], 1)])
		},
			Q = [],
			tt = {
			name: "HumFooter"
		},
		et = tt,
			at = (a("dc64"), Object(h["a"])(et, X, Q, !1, null, "54923881", null)),
			it = at.exports,
			nt = {
			name: "Home",
			components: {
				HumHeader: p["a"],
					HomeAbout: w,
				HumEvidence: E,
				HumOrg: O,
				HumExtras: I,
				HumDetails: K,
				HumFooter: it
			},
			data: function () {
				return {
					headerOptions: {
						overlay: !1,
						overlayType: "dark"
					},
					headerPanoviewer: null,
					contentPanoviewer: null,
					contentPanoLoading: !1,
					headerPanoRafId: null,
					contentPanoRafId: null,
					showVrPopup: !1,
					desktopMode: !1
				}
			},
				methods: {
				disableBodyScroll: function () {
					var t = document.getElementsByTagName("body")[0];
					t.classList.add("overflow-hidden")
				},
					enableBodyScroll: function () {
					var t = document.getElementsByTagName("body")[0];
					t.classList.remove("overflow-hidden")
				},
					closeVr: function () {
					this.enableBodyScroll(), window.cancelAnimationFrame(this.contentPanoRafId), this.contentPanoviewer.setImage(null), this.contentPanoLoading = !1, this.showVrPopup = !1
				},
					processHeaderPano: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						i = this;
					i.desktopMode = e;
					var n = t.clientHeight || 480,
						s = 2 *n + "px";
					t.style.width = s;
					var o = "yawPitch";
					i.desktopMode && (o = "none"), i.headerPanoviewer?i.headerPanoviewer.updateViewportDimensions():(i.headerPanoviewer = new N["a"](t, {
						image: a("87a1"),
						gyroMode: o,
						touchDirection: N["a"].TOUCH_DIRECTION.NONE
					}), i.headerPanoviewer.on("ready", (function(t) {
						i.applyAutoRotate(t.currentTarget, "headerPanoRafId")
					})))
				},
					processContentPano: function (t) {
					var e = this;
					e.disableBodyScroll(),
						e.showVrPopup = !0,
						e.contentPanoLoading = !0,
						e.desktopMode = e.getDesktopMode();
					var a = e.$refs["content-pano"],
						i = "yawPitch";
					e.desktopMode && (i = "none"), e.contentPanoviewer?(e.contentPanoviewer.setImage(t), e.contentPanoviewer.setGyroMode(i)):(e.contentPanoviewer = new N["a"](a, {
						image: t,
						gyroMode: i,
						useZoom: !1
					}), e.contentPanoviewer.on("ready", (function(t) {
						t.currentTarget.updateViewportDimensions(),
							e.contentPanoLoading = !1, e.applyAutoRotate(t.currentTarget, "contentPanoRafId")
					}))), e.$nextTick((function() {
						setTimeout((function() {
							e.contentPanoviewer.updateViewportDimensions()
						}), 0)
					}))
				},
					getDesktopMode: function () {
					var t = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					return!(t < 1024)
				},
					applyAutoRotate: function (t, e) {
					var a = this;
					if (!a.desktopMode)return 0;
					a.autoRotate(t, e)
				},
					autoRotate: function (t, e) {
					var a = this,
						i = (new Date).getTime(),
						n = t.getPitch(),
						s = t.getYaw(),
						o = 0;
					function r() {
						o = (new Date).getTime() - i, t.lookAt({
							yaw: s +o / 100 % 360,
							pitch: n
						},
						0), a[e] = window.requestAnimationFrame(r)
					}
					
					a[e] = window.requestAnimationFrame(r)
				}
			},
			beforeRouteLeave: function (t, e, a) {
				window.cancelAnimationFrame(this.headerPanoRafId), window.cancelAnimationFrame(this.contentPanoRafId), a()
			}
		},
		st = nt,
			ot = (a("0b48"), Object(h["a"])(st, d, u, !1, null, "7df1ef4f", null)),
			rt = ot.exports;
		i["a"].use(l["a"]);
		var ct = [{
			path: "/",
			name: "Home",
			component: rt
			},
			{
				path: "/about",
				name: "About",
				component: function () {
					return a.e("about").then(a.bind(null, "f820"))
				}
			},
			{
				path: "/toolkit",
				name: "Toolkit",
				component: function () {
					return a.e("chunk-60df03d9").then(a.bind(null, "6d07"))
				}
			}],
			lt = new l["a"]({
			routes: ct
		}),
			dt = lt,
			ut = {
			name: "HumNav",
			components: {
				svgIcon: c["a"]
			},
			data: function () {
				return {
					iconName: "dotCircle",
					showNav: !1,
					darkText: !1,
					nextRoute: "Home"
				}
			},
				methods: {
				toggleNav: function () {
					this.showNav = !this.showNav, this.showNav?this.iconName = "closeCircle": this.iconName = "dotCircle"
				}
			},
			created: function () {
				var t = this;
				dt.afterEach((function(e, a) {
					t.nextRoute = e.name, "About" == e.name?t.darkText = !0:t.darkText = !1
				}))
			}
		},
		pt = ut,
			mt = (a("aace"), Object(h["a"])(pt, o, r, !1, null, "51b97a50", null)),
			ft = mt.exports,
			vt = {
			name: "App",
			components: {
				HumNav: ft
			}
		},
		gt = vt,
			ht = (a("5c0b"), Object(h["a"])(gt, n, s, !1, null, null, null)),
			bt = ht.exports;
		a("913a");
		i["a"].config.productionTip = !1, i["a"].component("svg-icon", c["a"]), new i["a"]({
			router: dt,
			render: function (t) {
				return t(bt)
			}
		}).$mount("#app")
	},
		"5c0b": function (t, e, a) {
		"use strict";
		var i = a("9c0c"),
			n = a.n(i);
		n.a
	},
		"5cc6": function (t, e, a) {},
		"5d89": function (t, e, a) {
		t.exports = a.p + "img/medlogo.d7c15c5d.png"
	},
		"5fd0": function (t, e, a) {
		t.exports = a.p + "img/whellogo.1f1d16ff.png"
	}, 6015:function(t, e, a) {
		t.exports = a.p + "img/wars-map.b2a8d764.png"
	}, 6379:function(t, e, a) {
		t.exports = a.p + "img/fedlogo.ec958ef2.png"
	}, 6668:function(t, e, a) {
		"use strict";
		var i = a("cffb"),
			n = a.n(i);
		n.a
	}, 6679:function(t, e, a) {
		t.exports = a.p + "img/about-exhibit6.dfe10fbe.png"
	},
		"67de": function (t, e, a) {
		t.exports = a.p + "img/hum_vr_fed.2030011b.jpg"
	},
		"7ae7": function (t, e, a) {
		t.exports = a.p + "img/nid.335404c3.svg"
	},
		"7fc9": function (t, e, a) {
		t.exports = a.p + "img/stby.01408166.png"
	},
		"7fef": function (t, e, a) {
		t.exports = a.p + "img/tankerpod.848aa601.png"
	},
		"7ffe": function (t, e, a) {}, 8023:function(t, e, a) {
		t.exports = a.p + "img/hydrologo.ed642d11.png"
	},
		"811b": function (t, e, a) {
		t.exports = a.p + "img/about-exhibit5.d7a611a3.png"
	}, 8146:function(t, e, a) {
		t.exports = a.p + "img/about-step4-3.b58154bc.png"
	},
		"87a1": function (t, e, a) {
		t.exports = a.p + "img/hum_vr_pod.dd724b08.jpg"
	},
		"913a": function (t, e, a) {}, 9275:function(t, e, a) {}, 9524:function(t, e, a) {
		t.exports = a.p + "img/about-step4-2.762decb9.png"
	},
		"9a35": function (t, e, a) {
		t.exports = a.p + "img/MedWorker.cf6200f6.jpg"
	},
		"9be9": function (t, e, a) {
		"use strict";
		var i = a("af4d"),
			n = a.n(i);
		n.a
	},
		"9c0c": function (t, e, a) {},
		a2f5: function (t, e, a) {
		"use strict";
		var i = a("0a96"),
			n = a.n(i);
		n.a
	},
		aa2d: function (t, e, a) {
		t.exports = a.p + "img/WellDigger.caf28018.jpg"
	},
		aace: function (t, e, a) {
		"use strict";
		var i = a("5cc6"),
			n = a.n(i);
		n.a
	},
		af4d: function (t, e, a) {},
		bb16: function (t, e, a) {
		t.exports = a.p + "img/HydroponicFarmer.c8ef03a7.jpg"
	},
		bb1d: function (t, e, a) {
		t.exports = a.p + "img/future_fiction.2b23102f.svg"
	},
		bc40: function (t, e, a) {
		t.exports = a.p + "img/hetco.66ca5fb0.png"
	},
		bf5a: function (t, e, a) {
		t.exports = a.p + "img/about-step2.ac0b415e.png"
	},
		bfac: function (t, e, a) {
		t.exports = a.p + "img/hum_vr_whel.f762acf7.jpg"
	},
		c62d: function (t, e, a) {
		t.exports = a.p + "img/barbican.df9c2ba1.svg"
	},
		ca2e: function (t, e, a) {
		t.exports = a.p + "img/msf.adf43425.png"
	},
		cffb: function (t, e, a) {},
		d54d: function (t, e, a) {
		"use strict";
		var i = a("1b65"),
			n = a.n(i);
		n.a
	},
		da89: function (t, e, a) {
		t.exports = a.p + "img/warslogo.d34b67e9.png"
	},
		dc64: function (t, e, a) {
		"use strict";
		var i = a("3d83"),
			n = a.n(i);
		n.a
	},
		e08a: function (t, e, a) {
		t.exports = a.p + "img/about-exhibit1.42933e54.png"
	},
		e196: function (t, e, a) {
		t.exports = a.p + "img/toolkit-header-bg.cec4434c.png"
	},
		e5ef: function (t, e, a) {
		"use strict";
		var i = a("0344"),
			n = a.n(i);
		n.a
	},
		e689: function (t, e, a) {
		t.exports = a.p + "img/about-exhibit2.a9d161b5.png"
	},
		eb94: function (t, e, a) {
		t.exports = a.p + "img/about-exhibit3.e2690ddf.png"
	},
		f0ab: function (t, e, a) {
		t.exports = a.p + "img/tandem_research.ebf26317.svg"
	},
		f390: function (t, e, a) {
		t.exports = a.p + "img/quicksand.f44d7dc0.svg"
	},
		f649: function (t, e, a) {
		t.exports = a.p + "img/hum_epidemiologist.db19eaab.jpg"
	},
		f6c2: function (t, e, a) {
		"use strict";
		var i = a("2ddf"),
			n = a.n(i);
		n.a
	},
		fc9d: function (t, e, a) {
		t.exports = a.p + "img/sixervr.cf4a7c4b.png"
	}
});
//# sourceMappingURL=app.42378726.js.map