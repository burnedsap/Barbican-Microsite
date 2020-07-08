(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"], {
	"369b": function (t, e, i) {
		var r, n, s;
		/* @license
		Papa Parse
		v5.2.0
		https://github.com/mholt/PapaParse
		License: MIT
		*/!function(i, a) {
			n = [],
				r = a,
				s = "function" === typeof r?r.apply(e, n):r, void 0 ===s || (t.exports = s)
		}
		
		(0, (function t() {
			"use strict";
			var e = "undefined" != typeof self?self:"undefined" != typeof window?window:void 0 !== e?e: {},
			i = !e.document && !!e.postMessage,
				r = i && /blob:/i.test((e.location || {}).protocol),
				n = {},
			s = 0,
				a = {
				parse: function (i, r) {
					var o = (r = r || {}).dynamicTyping || !1;
					if (b(o) && (r.dynamicTypingFunction = o,
						o = {}),
						r.dynamicTyping = o,
						r.transform = !!b(r.transform) && r.transform, r.worker && a.WORKERS_SUPPORTED) {
						var l = function () {
							if (!a.WORKERS_SUPPORTED)return!1;
							var i, r,
								o = (i = e.URL || e.webkitURL || null,
								r = t.toString(), a.BLOB_URL || (a.BLOB_URL = i.createObjectURL(new Blob(["(", r, ")();"], {
								type: "text/javascript"
							})))),
								l = new e.Worker(o);
							return l.onmessage = g,
								l.id = s++, n[l.id] = l
						}
						
						();
						return l.userStep = r.step,
							l.userChunk = r.chunk,
							l.userComplete = r.complete,
							l.userError = r.error,
							r.step = b(r.step),
							r.chunk = b(r.chunk),
							r.complete = b(r.complete),
							r.error = b(r.error), delete r.worker, void l.postMessage({
							input: i,
							config: r,
							workerId: l.id
						})
					}
					
					var f = null;
					return a.NODE_STREAM_INPUT, "string" == typeof i?f = r.download?new c(r):new u(r):!0 === i.readable && b(i.read) && b(i.on)?f = new h(r):(e.File && i instanceof File || i instanceof Object) && (f = new d(r)), f.stream(i)
				},
					unparse: function (t, e) {
					var i = !1,
						r = !0,
						n = ",",
						s = "\r\n",
						o = '"',
						l = o + o,
						c = !1,
						d = null;
					!function() {
						if ("object" == typeof e) {
							if ("string" != typeof e.delimiter || a.BAD_DELIMITERS.filter((function(t) {
							return -1 !== e.delimiter.indexOf(t)
							})).length || (n = e.delimiter), ("boolean" == typeof e.quotes || "function" == typeof e.quotes || Array.isArray(e.quotes)) && (i = e.quotes), "boolean" != typeof e.skipEmptyLines && "string" != typeof e.skipEmptyLines || (c = e.skipEmptyLines), "string" == typeof e.newline && (s = e.newline), "string" == typeof e.quoteChar && (o = e.quoteChar), "boolean" == typeof e.header && (r = e.header), Array.isArray(e.columns)) {
								if (0 === e.columns.length)throw new Error("Option columns is empty");
								d = e.columns
							}
							
							void 0 !== e.escapeChar && (l = e.escapeChar + o)
						}
					}
					
					();
					var u = new RegExp(p(o), "g");
					if ("string" == typeof t && (t = JSON.parse(t)), Array.isArray(t)) {
						if (!t.length || Array.isArray(t[0]))return f(null, t, c);
						if ("object" == typeof t[0])return f(d || h(t[0]), t, c)
					} else if ("object" == typeof t)return"string" == typeof t.data && (t.data = JSON.parse(t.data)), Array.isArray(t.data) && (t.fields || (t.fields = t.meta && t.meta.fields), t.fields || (t.fields = Array.isArray(t.data[0])?t.fields: h(t.data[0])), Array.isArray(t.data[0]) || "object" == typeof t.data[0] || (t.data = [t.data])), f(t.fields || [], t.data || [], c);
					throw new Error("Unable to serialize unrecognized input");
					function h(t) {
						if ("object" != typeof t)return[];
						var e = [];
						for (var i in t)e.push(i);
						return e
					}
					
					function f(t, e, i) {
						var a = "";
						"string" == typeof t && (t = JSON.parse(t)), "string" == typeof e && (e = JSON.parse(e));
						var o = Array.isArray(t) && 0 < t.length,
							l = !Array.isArray(e[0]);
						if (o && r) {
							for (var c = 0;
							c < t.length;
							c++)0 <c && (a += n), a += m(t[c], c);
							0 < e.length && (a += s)
						}
						
						for (var d = 0; d < e.length; d++) {
							var u = o?t.length: e[d].length,
								h = !1,
								f = o?0 === Object.keys(e[d]).length: 0 === e[d].length;
							if (i && !o && (h = "greedy" === i?"" === e[d].join("").trim():1 === e[d].length && 0 === e[d][0].length), "greedy" ===i && o) {
								for (var p = [],
									g = 0; g < u; g++) {
									var v = l?t[g]:g;
									p.push(e[d][v])
								}
								
								h = "" === p.join("").trim()
							}
							
							if (!h) {
								for (var _ = 0; _ < u; _++) {
									0 <_ && !f && (a += n);
									var C = o && l?t[_]:_;
									a += m(e[d][C], _)
								}
								
								d < e.length - 1 && (!i || 0 <u && !f) && (a += s)
							}
						}
						
						return a
					}
					
					function m(t, e) {
						if (null == t)return"";
						if (t.constructor === Date)return JSON.stringify(t).slice(1, 25);
						var r = t.toString().replace(u, l),
							s = "boolean" == typeof i &&i || "function" == typeof i && i(t, e) || Array.isArray(i) && i[e] || function(t, e) {
							for (var i = 0;
							i < e.length;
							i++)if (-1 < t.indexOf(e[i]))return!0;
							return!1
						}
						
						(r, a.BAD_DELIMITERS) || -1 < r.indexOf(n) || " " === r.charAt(0) || " " === r.charAt(r.length - 1);
						return s?o +r + o: r
					}
				}
			};
			
			if (a.RECORD_SEP = String.fromCharCode(30),
				a.UNIT_SEP = String.fromCharCode(31),
				a.BYTE_ORDER_MARK = "\ufeff",
				a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK],
				a.WORKERS_SUPPORTED = !i && !!e.Worker,
				a.NODE_STREAM_INPUT = 1,
				a.LocalChunkSize = 10485760,
				a.RemoteChunkSize = 5242880,
				a.DefaultDelimiter = ",",
				a.Parser = m,
				a.ParserHandle = f,
				a.NetworkStreamer = c,
				a.FileStreamer = d,
				a.StringStreamer = u,
				a.ReadableStreamStreamer = h, e.jQuery) {
				var o = e.jQuery;
				o.fn.parse = function (t) {
					var i = t.config || {},
					r = [];
					return this.each((function(t) {
						if ("INPUT" !== o(this).prop("tagName").toUpperCase() || "file" !== o(this).attr("type").toLowerCase() || !e.FileReader || !this.files || 0 === this.files.length)return!0;
						for (var n = 0;
						n < this.files.length;
						n++)r.push({
							file: this.files[n],
							inputElem: this,
							instanceConfig: o.extend({},
							i)
						})
					})), n(), this;
					function n() {
						if (0 !== r.length) {
							var e, i, n, l,
								c = r[0];
							if (b(t.before)) {
								var d = t.before(c.file, c.inputElem);
								if ("object" == typeof d) {
									if ("abort" === d.action)return e = "AbortError",
										i = c.file,
										n = c.inputElem,
										l = d.reason, void (b(t.error) && t.error({
										name: e
									},
									i, n, l));
									if ("skip" === d.action)return void s();
									"object" == typeof d.config && (c.instanceConfig = o.extend(c.instanceConfig, d.config))
								} else if ("skip" === d)return void s()
							}
							
							var u = c.instanceConfig.complete;
							c.instanceConfig.complete = function (t) {
								b(u) && u(t, c.file, c.inputElem), s()
							}, a.parse(c.file, c.instanceConfig)
						} else b(t.complete) && t.complete()
					}
					
					function s() {
						r.splice(0, 1), n()
					}
				}
			}
			
			function l(t) {
				this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
					data: [],
						errors: [],
						meta: {}
				},
				function(t) {
					var e = C(t);
					e.chunkSize = parseInt(e.chunkSize), t.step || t.chunk || (e.chunkSize = null), this._handle = new f(e), (this._handle.streamer = this)._config = e
				}
				
				.call(this, t),
					this.parseChunk = function (t, i) {
					if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
						var n = this._config.beforeFirstChunk(t);
						void 0 !==n && (t = n)
					}
					
					this.isFirstChunk = !1, this._halted = !1;
					var s = this._partialLine + t;
					this._partialLine = "";
					var o = this._handle.parse(s, this._baseIndex, !this._finished);
					if (!this._handle.paused() && !this._handle.aborted()) {
						var l = o.meta.cursor;
						this._finished || (this._partialLine = s.substring(l - this._baseIndex), this._baseIndex = l), o && o.data && (this._rowCount += o.data.length);
						var c = this._finished || this._config.preview && this._rowCount >= this._config.preview;
						if (r)e.postMessage({
							results: o,
							workerId: a.WORKER_ID,
							finished: c
						});
						else if (b(this._config.chunk) && !i) {
							if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted())return void (this._halted = !0);
							o = void 0, this._completeResults = void 0
						}
						
						return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta), this._completed || !c || !b(this._config.complete) ||o && o.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), c ||o && o.meta.paused || this._nextChunk(), o
					}
					
					this._halted = !0
				},
					this._sendError = function (t) {
					b(this._config.error)?this._config.error(t):r && this._config.error && e.postMessage({
						workerId: a.WORKER_ID,
						error: t,
						finished: !1
					})
				}
			}
			
			function c(t) {
				var e;
				(t = t || {}).chunkSize || (t.chunkSize = a.RemoteChunkSize), l.call(this, t), this._nextChunk = i?function() {
					this._readChunk(), this._chunkLoaded()
				}
				
				:function() {
					this._readChunk()
				},
					this.stream = function (t) {
					this._input = t, this._nextChunk()
				},
					this._readChunk = function () {
					if (this._finished)this._chunkLoaded();
					else {
						if (e = new XMLHttpRequest, this._config.withCredentials && (e.withCredentials = this._config.withCredentials), i || (e.onload = w(this._chunkLoaded, this),
							e.onerror = w(this._chunkError, this)), e.open(this._config.downloadRequestBody?"POST": "GET", this._input, !i), this._config.downloadRequestHeaders) {
							var t = this._config.downloadRequestHeaders;
							for (var r in t)e.setRequestHeader(r, t[r])
						}
						
						if (this._config.chunkSize) {
							var n = this._start + this._config.chunkSize - 1;
							e.setRequestHeader("Range", "bytes=" + this._start + "-" + n)
						}
						
						try {
							e.send(this._config.downloadRequestBody)
						} catch (t) {
							this._chunkError(t.message)
						}
						
						i && 0 === e.status && this._chunkError()
					}
				},
					this._chunkLoaded = function () {
					4 === e.readyState && (e.status < 200 || 400 <= e.status?this._chunkError():(this._start += this._config.chunkSize?this._config.chunkSize: e.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(t) {
						var e = t.getResponseHeader("Content-Range");
						return null === e? -1:parseInt(e.substring(e.lastIndexOf("/") + 1))
					}
					
					(e), this.parseChunk(e.responseText)))
				},
					this._chunkError = function (t) {
					var i = e.statusText || t;
					this._sendError(new Error(i))
				}
			}
			
			function d(t) {
				var e, i;
				(t = t || {}).chunkSize || (t.chunkSize = a.LocalChunkSize), l.call(this, t);
				var r = "undefined" != typeof FileReader;
				this.stream = function (t) {
					this._input = t,
						i = t.slice || t.webkitSlice || t.mozSlice, r?((e = new FileReader).onload = w(this._chunkLoaded, this),
						e.onerror = w(this._chunkError, this)):e = new FileReaderSync, this._nextChunk()
				},
					this._nextChunk = function () {
					this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
				},
					this._readChunk = function () {
					var t = this._input;
					if (this._config.chunkSize) {
						var n = Math.min(this._start + this._config.chunkSize, this._input.size);
						t = i.call(t, this._start, n)
					}
					
					var s = e.readAsText(t, this._config.encoding);
					r || this._chunkLoaded({
						target: {
							result: s
						}
					})
				},
					this._chunkLoaded = function (t) {
					this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(t.target.result)
				},
					this._chunkError = function () {
					this._sendError(e.error)
				}
			}
			
			function u(t) {
				var e;
				l.call(this,
					t = t || {}),
					this.stream = function (t) {
					return e = t, this._nextChunk()
				},
					this._nextChunk = function () {
					if (!this._finished) {
						var t,
							i = this._config.chunkSize;
						return i?(t = e.substring(0, i),
							e = e.substring(i)):(t = e,
							e = ""), this._finished = !e, this.parseChunk(t)
					}
				}
			}
			
			function h(t) {
				l.call(this,
					t = t || {});
				var e = [],
					i = !0,
					r = !1;
				this.pause = function () {
					l.prototype.pause.apply(this, arguments), this._input.pause()
				},
					this.resume = function () {
					l.prototype.resume.apply(this, arguments), this._input.resume()
				},
					this.stream = function (t) {
					this._input = t, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
				},
					this._checkIsFinished = function () {
					r && 1 === e.length && (this._finished = !0)
				},
					this._nextChunk = function () {
					this._checkIsFinished(), e.length?this.parseChunk(e.shift()):i = !0
				}, this._streamData = w((function(t) {
					try {
						e.push("string" == typeof t?t: t.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(e.shift()))
					} catch (t) {
						this._streamError(t)
					}
				}), this), this._streamError = w((function(t) {
					this._streamCleanUp(), this._sendError(t)
				}), this), this._streamEnd = w((function() {
					this._streamCleanUp(),
						r = !0, this._streamData("")
				}), this), this._streamCleanUp = w((function() {
					this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
				}), this)
			}
			
			function f(t) {
				var e, i, r,
					n = Math.pow(2, 53),
					s =  - n,
					o = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,
					l = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
					c = this,
					d = 0,
					u = 0,
					h = !1,
					f = !1,
					g = [],
					v = {
					data: [],
						errors: [],
						meta: {}
				};
				
				if (b(t.step)) {
					var _ = t.step;
					t.step = function (e) {
						if (v = e, k())y();
						else {
							if (y(), 0 === v.data.length)return;
							d += e.data.length, t.preview &&d > t.preview?i.abort():(v.data = v.data[0], _(v, c))
						}
					}
				}
				
				function w(e) {
					return"greedy" === t.skipEmptyLines?"" === e.join("").trim():1 === e.length && 0 === e[0].length
				}
				
				function y() {
					if (v &&r && (E("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + a.DefaultDelimiter + "'"),
						r = !1), t.skipEmptyLines)for (var e = 0;
					e < v.data.length;
					e++)w(v.data[e]) && v.data.splice(e--, 1);
					return k() && function() {
						if (v)if (Array.isArray(v.data[0])) {
							for (var e = 0;
							k() &&e < v.data.length;
							e++)v.data[e].forEach(i);
							v.data.splice(0, 1)
						} else v.data.forEach(i);
						function i(e) {
							b(t.transformHeader) && (e = t.transformHeader(e)), g.push(e)
						}
					}
					
					(), function() {
						if (!v || !t.header && !t.dynamicTyping && !t.transform)return v;
						function e(e, i) {
							var r,
								n = t.header?{}
							
							:[];
							for (r = 0; r < e.length; r++) {
								var s = r,
									a = e[r];
								t.header && (s = r >= g.length?"__parsed_extra": g[r]), t.transform && (a = t.transform(a, s)),
									a = x(s, a), "__parsed_extra" === s?(n[s] = n[s] || [], n[s].push(a)):n[s] = a
							}
							
							return t.header && (r > g.length?E("FieldMismatch", "TooManyFields", "Too many fields: expected " + g.length + " fields but parsed " + r, u + i):r < g.length && E("FieldMismatch", "TooFewFields", "Too few fields: expected " + g.length + " fields but parsed " + r, u + i)), n
						}
						
						var i = 1;
						return!v.data.length || Array.isArray(v.data[0])?(v.data = v.data.map(e),
							i = v.data.length):v.data = e(v.data, 0), t.header && v.meta && (v.meta.fields = g), u += i, v
					}
					
					()
				}
				
				function k() {
					return t.header && 0 === g.length
				}
				
				function x(e, i) {
					return r = e, t.dynamicTypingFunction && void 0 === t.dynamicTyping[r] && (t.dynamicTyping[r] = t.dynamicTypingFunction(r)), !0 === (t.dynamicTyping[r] || t.dynamicTyping)?"true" ===i || "TRUE" ===i || "false" !==i && "FALSE" !==i && (function(t) {
						if (o.test(t)) {
							var e = parseFloat(t);
							if (s <e &&e < n)return!0
						}
						
						return!1
					}
					
					(i)?parseFloat(i):l.test(i)?new Date(i):"" === i?null:i):i;
					var r
				}
				
				function E(t, e, i, r) {
					var n = {
						type: t,
						code: e,
						message: i
					};
					
					void 0 !==r && (n.row = r), v.errors.push(n)
				}
				
				this.parse = function (n, s, o) {
					var l = t.quoteChar || '"';
					if (t.newline || (t.newline = function (t, e) {
						t = t.substring(0, 1048576);
						var i = new RegExp(p(e) + "([^]*?)" + p(e), "gm"),
							r = (t = t.replace(i, "")).split("\r"),
							n = t.split("\n"),
							s = 1 < n.length && n[0].length < r[0].length;
						if (1 === r.length || s)return"\n";
						for (var a = 0,
							o = 0;
						o < r.length;
						o++)"\n" === r[o][0] &&a++;
						return a >= r.length / 2?"\r\n": "\r"
					}
					
					(n, l)),
						r = !1, t.delimiter)b(t.delimiter) && (t.delimiter = t.delimiter(n),
						v.meta.delimiter = t.delimiter);
					else {
						var c = function (e, i, r, n, s) {
							var o, l, c, d;
							s = s || [",", "\t", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
							for (var u = 0; u < s.length; u++) {
								var h = s[u],
									f = 0,
									p = 0,
									g = 0;
								c = void 0;
								for (var v = new m({
									comments: n,
									delimiter: h,
									newline: i,
									preview: 10
								}).parse(e),
									_ = 0;
								_ < v.data.length;
								_++)if (r && w(v.data[_]))g++;
								else {
									var C = v.data[_].length;
									p += C, void 0 !== c?0 <C && (f += Math.abs(C - c),
										c = C):c = C
								}
								
								0 < v.data.length && (p /= v.data.length - g), (void 0 ===l ||f <= l) && (void 0 ===d ||d < p) && 1.99 <p && (l = f,
									o = h,
									d = p)
							}
							
							return {
								successful: !!(t.delimiter = o),
								bestDelimiter: o
							}
						}
						
						(n, t.newline, t.skipEmptyLines, t.comments, t.delimitersToGuess);
						c.successful?t.delimiter = c.bestDelimiter: (r = !0,
							t.delimiter = a.DefaultDelimiter),
							v.meta.delimiter = t.delimiter
					}
					
					var d = C(t);
					return t.preview && t.header && d.preview++,
						e = n,
						i = new m(d),
						v = i.parse(e, s, o), y(), h?{
						meta: {
							paused: !0
						}
					}
					
					:v || {
						meta: {
							paused: !1
						}
					}
				},
					this.paused = function () {
					return h
				},
					this.pause = function () {
					h = !0, i.abort(),
						e = b(t.chunk)?"": e.substring(i.getCharIndex())
				},
					this.resume = function () {
					c.streamer._halted?(h = !1, c.streamer.parseChunk(e, !0)):setTimeout(c.resume, 3)
				},
					this.aborted = function () {
					return f
				},
					this.abort = function () {
					f = !0, i.abort(),
						v.meta.aborted = !0, b(t.complete) && t.complete(v),
						e = ""
				}
			}
			
			function p(t) {
				return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
			}
			
			function m(t) {
				var e,
					i = (t = t || {}).delimiter,
					r = t.newline,
					n = t.comments,
					s = t.step,
					o = t.preview,
					l = t.fastMode,
					c = e = void 0 === t.quoteChar?'"': t.quoteChar;
				if (void 0 !== t.escapeChar && (c = t.escapeChar), ("string" != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) && (i = ","), n === i)throw new Error("Comment character same as delimiter");
				!0 === n?n = "#": ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) && (n = !1), "\n" !==r && "\r" !==r && "\r\n" !==r && (r = "\n");
				var d = 0,
					u = !1;
				this.parse = function (t, a, h) {
					if ("string" != typeof t)throw new Error("Input must be a string");
					var f = t.length,
						m = i.length,
						g = r.length,
						v = n.length,
						_ = b(s),
						C = [],
						w = [],
						y = [],
						k = d = 0;
					if (!t)return j();
					if (l || !1 !==l && -1 === t.indexOf(e)) {
						for (var x = t.split(r),
							E = 0; E < x.length; E++) {
							if (y = x[E], d += y.length, E !== x.length - 1)d += r.length;
							else if (h)return j();
							if (!n || y.substring(0, v) !== n) {
								if (_) {
									if (C = [], L(y.split(i)), F(), u)return j()
								} else L(y.split(i));
								if (o &&o <= E)return C = C.slice(0, o), j(!0)
							}
						}
						
						return j()
					}
					
					for (var R = t.indexOf(i, d),
						S = t.indexOf(r, d),
						I = new RegExp(p(c) + p(e), "g"),
						T = t.indexOf(e, d);
					;
					)if (t[d] !== e)if (n && 0 === y.length && t.substring(d, d + v) === n) {
						if (-1 === S)return j();
						d = S + g,
							S = t.indexOf(r, d),
							R = t.indexOf(i, d)
					} else {
						if (-1 !==R && (R <S || -1 === S)) {
							if (!(R < T)) {
								y.push(t.substring(d, R)),
									d = R + m,
									R = t.indexOf(i, d);
								continue
							}
							
							var O = U(R, T, S);
							if (O && void 0 !== O.nextDelim) {
								R = O.nextDelim,
									T = O.quoteSearch, y.push(t.substring(d, R)),
									d = R + m,
									R = t.indexOf(i, d);
								continue
							}
						}
						
						if (-1 === S)break;
						if (y.push(t.substring(d, S)), z(S + g), _ && (F(), u))return j();
						if (o && C.length >= o)return j(!0)
					} else for (T = d, d++; ; ) {
						if (-1 === (T = t.indexOf(e, T + 1)))return h || w.push({
							type: "Quotes",
							code: "MissingQuotes",
							message: "Quoted field unterminated",
							row: C.length,
							index: d
						}), q();
						if (T ===f - 1)return q(t.substring(d, T).replace(I, e));
						if (e !==c || t[T + 1] !== c) {
							if (e ===c || 0 ===T || t[T - 1] !== c) {
								-1 !==R &&R <T + 1 && (R = t.indexOf(i, T + 1)),  -1 !==S &&S <T + 1 && (S = t.indexOf(r, T + 1));
								var D = A(-1 === S?R: Math.min(R, S));
								if (t[T + 1 + D] === i) {
									y.push(t.substring(d, T).replace(I, e)), t[d = T + 1 +D + m] !==e && (T = t.indexOf(e, d)),
										R = t.indexOf(i, d),
										S = t.indexOf(r, d);
									break
								}
								
								var M = A(S);
								if (t.substring(T + 1 + M, T + 1 +M + g) === r) {
									if (y.push(t.substring(d, T).replace(I, e)), z(T + 1 +M + g),
										R = t.indexOf(i, d),
										T = t.indexOf(e, d), _ && (F(), u))return j();
									if (o && C.length >= o)return j(!0);
									break
								}
								
								w.push({
									type: "Quotes",
									code: "InvalidQuotes",
									message: "Trailing quote on quoted field is malformed",
									row: C.length,
									index: d
								}), T++
							}
						} else T++
					}
					
					return q();
					function L(t) {
						C.push(t),
							k = d
					}
					
					function A(e) {
						var i = 0;
						if (-1 !== e) {
							var r = t.substring(T + 1, e);
							r && "" === r.trim() && (i = r.length)
						}
						
						return i
					}
					
					function q(e) {
						return h || (void 0 ===e && (e = t.substring(d)), y.push(e),
							d = f, L(y), _ && F()), j()
					}
					
					function z(e) {
						d = e, L(y),
							y = [],
							S = t.indexOf(r, d)
					}
					
					function j(t) {
						return {
							data: C,
							errors: w,
							meta: {
								delimiter: i,
								linebreak: r,
								aborted: u,
								truncated: !!t,
								cursor: k + (a || 0)
							}
						}
					}
					
					function F() {
						s(j()),
							C = [],
							w = []
					}
					
					function U(r, n, s) {
						var a = {
							nextDelim: void 0,
							quoteSearch: void 0
						},
						o = t.indexOf(e, n + 1);
						if (n <r &&r <o && (o <s || -1 === s)) {
							var l = t.indexOf(i, o);
							if (-1 === l)return a;
							o <l && (o = t.indexOf(e, o + 1)),
								a = U(l, o, s)
						} else a = {
							nextDelim: r,
							quoteSearch: n
						};
						
						return a
					}
				},
					this.abort = function () {
					u = !0
				},
					this.getCharIndex = function () {
					return d
				}
			}
			
			function g(t) {
				var e = t.data,
					i = n[e.workerId],
					r = !1;
				if (e.error)i.userError(e.error, e.file);
				else if (e.results && e.results.data) {
					var s = {
						abort: function () {
							r = !0, v(e.workerId, {
								data: [],
									errors: [],
									meta: {
									aborted: !0
								}
							})
						},
							pause: _,
						resume: _
					};
					
					if (b(i.userStep)) {
						for (var a = 0;
						a < e.results.data.length && (i.userStep({
							data: e.results.data[a],
							errors: e.results.errors,
							meta: e.results.meta
						},
						s), !r);
						a++);
						delete e.results
					} else b(i.userChunk) && (i.userChunk(e.results, s, e.file), delete e.results)
				}
				
				e.finished && !r && v(e.workerId, e.results)
			}
			
			function v(t, e) {
				var i = n[t];
				b(i.userComplete) && i.userComplete(e), i.terminate(), delete n[t]
			}
			
			function _() {
				throw new Error("Not implemented.")
			}
			
			function C(t) {
				if ("object" != typeof t || null === t)return t;
				var e = Array.isArray(t)?[]:{};
				
				for (var i in t)e[i] = C(t[i]);
				return e
			}
			
			function w(t, e) {
				return function() {
					t.apply(e, arguments)
				}
			}
			
			function b(t) {
				return"function" == typeof t
			}
			
			return r && (e.onmessage = function (t) {
				var i = t.data;
				if (void 0 === a.WORKER_ID &&i && (a.WORKER_ID = i.workerId), "string" == typeof i.input)e.postMessage({
					workerId: a.WORKER_ID,
					results: a.parse(i.input,
					i.config),
					finished: !0
				});
				else if (e.File && i.input instanceof File || i.input instanceof Object) {
					var r = a.parse(i.input, i.config);
					r && e.postMessage({
						workerId: a.WORKER_ID,
						results: r,
						finished: !0
					})
				}
			}), (c.prototype = Object.create(l.prototype)).constructor = c, (d.prototype = Object.create(l.prototype)).constructor = d, (u.prototype = Object.create(u.prototype)).constructor = u, (h.prototype = Object.create(l.prototype)).constructor = h, a
		}))
	},
		"498a": function (t, e, i) {
		"use strict";
		var r = i("23e7"),
			n = i("58a8").trim,
			s = i("c8d2");
		r({
			target: "String",
			proto: !0,
			forced: s("trim")
		},
		{
			trim: function () {
				return n(this)
			}
		})
	}, 5899:function(t, e) {
		t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
	},
		"58a8": function (t, e, i) {
		var r = i("1d80"),
			n = i("5899"),
			s = "[" +n + "]",
			a = RegExp("^" +s +s + "*"),
			o = RegExp(s +s + "*$"),
			l = function (t) {
			return function(e) {
				var i = String(r(e));
				return 1 &t && (i = i.replace(a, "")), 2 &t && (i = i.replace(o, "")), i
			}
		};
		
		t.exports = {
			start: l(1),
			end: l(2),
			trim: l(3)
		}
	},
		c8d2: function (t, e, i) {
		var r = i("d039"),
			n = i("5899"),
			s = "​		᠎";
		t.exports = function (t) {
			return r((function() {
				return!!n[t]() || s[t]() !=s || n[t].name !== t
			}))
		}
	},
		cde0: function (t, e, i) {
		"use strict";
		var r = i("fd0a"),
			n = i.n(r);
		n.a
	},
		f820: function (t, e, i) {
		"use strict";
		i.r(e);
		var r = function () {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				attrs: {
					id: "hum-about"
				}
			},
			[i("HumHeader", {
				staticClass: "about-header",
				scopedSlots: t._u([{
					key: "header-bg",
					fn: function () {
						return[i("div", {
							staticClass: "about-banner"
						})]
					},
						proxy: !0
				},
				{
					key: "header-body",
					fn: function () {
						return[i("div", {
							staticClass: "about-header-body-text semi"
						},
						[i("p", [t._v("Telling the story of "), i("span", {
							staticClass: "underline",
							attrs: {
								id: "part1"
							}
						},
						[t._v("business women")]), t._v(", aiming to "), i("span", {
							staticClass: "underline",
							attrs: {
								id: "part2"
							}
						},
						[t._v("learn to read")]), t._v(", in a world where "), i("span", {
							staticClass: "underline",
							attrs: {
								id: "part3"
							}
						},
						[t._v("never ending floods have displaced her whole town")]), t._v(".")])])]
					},
						proxy: !0
				}])
			}), i("div", {
				staticClass: "about-content"
			},
			[i("div", {
				staticClass: "content-main"
			},
			[t._m(0), i("div", {
				staticClass: "process"
			},
			[i("div", {
				staticClass: "c-process-data"
			},
			[i("div", {
				staticClass: "process-info"
			},
			[i("p", {
				staticClass: "title semi"
			},
			[t._v("Our Process")]), i("p", [t._v("We used design fiction to envision this world. Design fiction enabled us to explore emerging trends and best practices driving the humanitarian sector and apply them onto the lives of fictional stakeholders: communities, families, and citizens, one journey at a time, and see how those take form in future times of crises, mapping their needs, expectations, and systems of resilience.")]), t.desktopMode?t._e():i("p", {
				staticClass: "step-timeline"
			},
			[t._v("1 Investigate — 2 Speculate — 3 Curate — 4 Create")])]), i("div", {
				staticClass: "c-process-steps"
			},
			[i("div", {
				staticClass: "process-step"
			},
			[t._m(1), i("div", {
				staticClass: "step-media"
			},
			[i("div", {
				staticClass: "c-step-drawing"
			},
			[i("div", {
				staticClass: "drawing"
			},
			[i("svg-icon", {
				staticClass: "shape-tri",
				attrs: {
					name: "triangle"
				}
			}), t._m(2), t._m(3), t._m(4)], 1)])]), t._m(5)]), t._m(6), t._m(7), t._m(8)])])])])]), t._m(9), t._m(10), t._m(11)], 1)
		},
			n = [function() {
			var t = this,
				e = t.$createElement,
				i = t._self._c || e;
			return i("div", {
				staticClass: "intro-section"
			},
			[i("p", {
				staticClass: "title"
			},
			[t._v("What is HUM.2035?")]), i("p", [t._v("Told from the perspective of HUM, a fictional humanitarian aid network founded in 2020 India, the project, first displayed at the Life Rewired Hub in London, tells the stories of HUM-affiliated humanitarian workers dealing with the aftermath of storm Lata which has recently hit Goa. In it are explored themes like the purpose of upskilling and questions around employment when facing displacement, the use of mobile-based or digital services, encouraging multidisciplinarity across sectors (from food provision to health care to financial inclusion) and the support of local efforts and knowledge.")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "step-title"
				},
				[i("p", [t._v("1 — Investigate")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "drawing-text top-center"
				},
				[i("p", [t._v("Climate Tensions")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "drawing-text bottom-left"
				},
				[i("p", [t._v("Technology and a Push "), i("br"), t._v("Toward a Digital Present")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "drawing-text bottom-right"
				},
				[i("p", [t._v("Humanitarian Siloes & "), i("br"), t._v("Local Networks of Care")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "step-caption"
				},
				[i("p", [t._v("Scanning the humanitarian ecosystem and its various tenets. We focused on forms of aid, prevalent crises in South Asia, innovation, unmet needs, and gaps.")])])
			}, function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "process-step"
				},
				[r("div", {
					staticClass: "step-title"
				},
				[r("p", [t._v("2 — Speculate")])]), r("div", {
					staticClass: "step-media"
				},
				[r("img", {
					staticClass: "lone-img",
					attrs: {
						src: i("bf5a")
					}
				})]), r("div", {
					staticClass: "step-caption"
				},
				[r("p", [t._v("Narrowing down and building over our findings and imagining worlds and spaces where they are allowed to evolve and disintegrate, in internal and external workshop settings. This is an example of a storytelling template we used in workshops to develop early ideas of personas in the worlds we built.")])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "process-step"
				},
				[r("div", {
					staticClass: "step-title"
				},
				[r("p", [t._v("3 — Curate")])]), r("div", {
					staticClass: "step-media"
				},
				[r("img", {
					staticClass: "lone-img",
					attrs: {
						src: i("0b80")
					}
				})]), r("div", {
					staticClass: "step-caption"
				},
				[r("p", [t._v("Coming to terms with the world we want to build; the story we want to tell. What are the key themes we want to highlight (and hence evolve into the future)? What are the crises we want to base it around?")])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "process-step"
				},
				[r("div", {
					staticClass: "step-title"
				},
				[r("p", [t._v("4 — Create")])]), r("div", {
					staticClass: "step-media multiple"
				},
				[r("div", {
					staticClass: "media-group first"
				},
				[r("img", {
					attrs: {
						src: i("2b14")
					}
				}), r("img", {
					attrs: {
						src: i("9524")
					}
				})]), r("div", {
					staticClass: "media-group second"
				},
				[r("div", {
					staticClass: "c-media-item"
				},
				[r("img", {
					attrs: {
						src: i("8146")
					}
				})]), r("div", {
					staticClass: "c-media-item"
				},
				[r("img", {
					attrs: {
						src: i("4f2c")
					}
				})])])]), r("div", {
					staticClass: "step-caption"
				},
				[r("p", [t._v("Producing the story to be communicated. This included personas, 360 illustrations, virtual spaces, print media, physical artefacts, and videos.")])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					i = t._self._c || e;
				return i("div", {
					staticClass: "about-extra-info"
				},
				[i("div", {
					staticClass: "extra-info-content"
				},
				[i("p", [t._v("However unpredictable the future may seem, many are involved in foreseeing and planning around the greatest challenges it holds. Be it water shortages, a frenzied climate, depleting resources or unstable governments, the world we live in is constantly facing complex humanitarian crises. As many are looking for ways to tackle the causes of these forces, join us in exploring how to mitigate their short-term impact on affected communities and vulnerable regions.")]), i("p", {
					staticClass: "stress semi"
				},
				[t._v("Together, let’s consider, explore and unearth the future needs of humanitarian crises and how aid communities will come together to face these odds.")])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "about-exhibit"
				},
				[r("div", {
					staticClass: "exhibit-content"
				},
				[r("div", {
					staticClass: "exhibit-title"
				},
				[r("p", [r("span", {
					staticClass: "light underline"
				},
				[t._v("Exhibit")]), t._v(" — Life Rewired Hub, Barbican London")])]), r("div", {
					staticClass: "c-exhibit-media"
				},
				[r("div", {
					staticClass: "media-card quarter order-1"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("e08a")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("Well Diggers water testing toolkit helps in streamlining the process of assessing water quality.")])]), r("div", {
					staticClass: "media-card quarter order-3"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("e689")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("The MED.CN app & kit is used to connect affected residents to initial health check-ups and assess if further care is required.")])]), r("div", {
					staticClass: "media-card half order-2"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("eb94")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("Visitors viewing the HUM Timeline: 2016-2035")])]), r("div", {
					staticClass: "media-card quarter order-5"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("53d4")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("A snapshot of the hydrosystem worker’s environment - a Phyto-remediation kit and its guidelines.")])]), r("div", {
					staticClass: "media-card half order-6"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("811b")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("The space for the pop-up exhibit at the Barbican Centre.")])]), r("div", {
					staticClass: "media-card quarter order-4"
				},
				[r("img", {
					staticClass: "card-img",
					attrs: {
						src: i("6679")
					}
				}), r("p", {
					staticClass: "card-caption"
				},
				[t._v("The Matriculated Matka (hindi clay or plastic pot) is one of many government-issued connected devices that can track an individual’s water consumption.")])])]), r("div", {
					staticClass: "exhibit-caption"
				},
				[r("p", [t._v("Our first round of explorations was on display at the Barbican until April 16th 2019 as part of the Life Rewired Hub, a pop-up exhibit space. It highlighted how preparing for crises to come is just as much about strengthening and increasing the reach of existing local efforts as it is introducing new technologies or services. It also explored what some of these humanitarian workers of the future will be up to.")])])])])
			}, function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "about-footer"
				},
				[r("div", {
					staticClass: "footer-content"
				},
				[r("div", {
					staticClass: "footer-text"
				},
				[r("p", [t._v("When new technologies, social data and human error undergo further mutation in the coming decades, the type and scale of humanitarian crises, actors and relief will have to transform. The exhibit puts on a playful garb while presenting a powerful transmedia experience that brings to life some of these future experiences.")]), r("p", [t._v("This exhibit has been conceived as an ongoing conversation on the topic and would benefit from your input! Please feel free to write to us and let us know how you’d like to collaborate to continue having this discussion. "), r("br"), r("br"), r("u", [t._v("hello@quicksand.co.in")])])]), r("div", {
					staticClass: "footer-logos"
				},
				[r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("f390")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("f0ab")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("bb1d")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("7fc9")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("4c38")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("3bd1")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("c62d")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("7ae7")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("bc40")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("fc9d")
					}
				})]), r("div", {
					staticClass: "brand-logo"
				},
				[r("img", {
					staticClass: "logo-img",
					attrs: {
						src: i("ca2e")
					}
				})])])])])
			}],
			s = (i("498a"), i("0273")),
			a = i("369b"),
			o = i.n(a),
			l = "Telling the story of,,aiming to ,in a world where\r\na multi-lingual,drone,repair water desalination plants,water shortages are plaguing India\r\na local,banker,help isolated communities receive aid,nearby cities were hit by a devastating earthquake\r\na solar panel selling,government agent,provide new ID's through 3D scanning to nearby settlements,a cyber attack on the Indian Water Rationing System put millions at risk\r\nan ingenious,individual,provide affordable services to their neighbours,a flash flood wiped out the power grid\r\nan entrepreneurial,child,provide for their own water-poor community,rising water levels are threatening their livelihood\r\nan underground,craftsman,grow seaweed,India faces a national water shortage\r\na popular,chemist,smuggle water,a super bug ravaged a dehydrated Indian population\r\na water ,surgeon,steal e-water accounts,millions were displaced following a water bank demonetization scheme\r\na frugal,artist,invent a chemical alternative for water,water and fuel resources have been largely depleted\r\na diligent,baker,weaponise water,radioactive pollution has infected the majority of drinkable water sources\r\na travelling,farmer,develop water resilient organisms,automation and manufacturing have come to a drastic halt\r\na tech savvy,hacker,harvest water,\r\na water rights,banker,perform water rituals,\r\nan illegal,judge,trade water,\r\na nomadic,priest,repurpose step-wells as water purification plants,\r\n,believer,develop a sustainable water-efficient community,\r\n,cab driver,protect their coastal city,\r\n,drone operator,,\r\n,music band,,\r\n,AI system,,\r\n,medical aid,,\r\n,plumber,,\r\n,activist,,\r\n,sanitation engineer,,\r\n,rescue drone operator,,",
			c = {
			name: "About",
			components: {
				HumHeader: s["a"]
			},
			data: function () {
				return {
					desktopMode: !1,
					csvCol1: [],
						csvCol2: [],
						csvCol3: [],
						csvCol4: [],
						part1: {
						text: "",
						counter: 0,
						index: 0,
						el: "part1",
						composition: ["csvCol1", "csvCol2"],
							interval: null
					},
					part2: {
						text: "",
						counter: 0,
						index: 0,
						el: "part2",
						composition: ["csvCol3"],
							interval: null
					},
					part3: {
						text: "",
						counter: 0,
						index: 0,
						el: "part3",
						composition: ["csvCol4"],
							interval: null
					},
					sec: 0,
					secInterval: null
				}
			},
				beforeRouteLeave: function (t, e, i) {
				var r = this.part1.interval,
					n = this.part2.interval,
					s = this.part3.interval;
				clearInterval(r), clearInterval(n), clearInterval(s), clearInterval(this.secInterval), i()
			},
				methods: {
				typeText: function (t) {
					var e = this,
						i = t.text.substring(0, t.index + 1);
					document.getElementById(t.el).innerHTML = i, t.index++, e.sec % 18 == 1 && (clearInterval(t.interval), setTimeout((function() {
						t.interval = setInterval((function() {
							e.deleteText(t)
						}), 50)
					}), 1e3))
				},
					deleteText: function (t) {
					var e = this,
						i = t.text.substring(0, t.index - 1);
					if (document.getElementById(t.el).innerHTML = i, t.index--, "" == i) {
						var r = t.composition[0],
							n = t.composition[1];
						t.text = e[r][Math.floor(Math.random() * e[r].length)] + (n?" " + e[n][Math.floor(Math.random() * e[n].length)]:""), clearInterval(t.interval), t.counter == t.text.length - 1?t.counter = 0:t.counter++,
							t.index = 0, setTimeout((function() {
							t.interval = setInterval((function() {
								e.typeText(t)
							}), 100)
						}), 200)
					}
				}
			},
			beforeMount: function () {
				var t = this,
					e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
				t.desktopMode = !(e < 1024), window.addEventListener("resize", (function() {
					var e = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
					t.desktopMode = !(e < 1024)
				}))
			},
				mounted: function () {
				for (var t = this,
					e = o.a.parse(l, {}),
					i = e.data || [],
					r = 1;
				r < i.length;
				r++)i[r][0] && "" != i[r][0].trim() && t.csvCol1.push(i[r][0]), i[r][1] && "" != i[r][1].trim() && t.csvCol2.push(i[r][1]), i[r][2] && "" != i[r][2].trim() && t.csvCol3.push(i[r][2]), i[r][3] && "" != i[r][3].trim() && t.csvCol4.push(i[r][3]);
				t.part1.text = t.csvCol1[Math.floor(Math.random() * t.csvCol1.length)] + " " + t.csvCol2[Math.floor(Math.random() * t.csvCol2.length)],
					t.part2.text = t.csvCol3[Math.floor(Math.random() * t.csvCol3.length)],
					t.part3.text = t.csvCol4[Math.floor(Math.random() * t.csvCol4.length)],
					t.sec = (new Date).getSeconds(),
					t.part1.interval = setInterval((function() {
					t.typeText(t.part1)
				}), 100),
					t.part2.interval = setInterval((function() {
					t.typeText(t.part2)
				}), 100),
					t.part3.interval = setInterval((function() {
					t.typeText(t.part3)
				}), 100),
					t.secInterval = setInterval((function() {
					t.sec = (new Date).getSeconds()
				}), 16)
			}
		},
		d = c,
			u = (i("cde0"), i("2877")),
			h = Object(u["a"])(d, r, n, !1, null, "5425e1b0", null);
		e["default"] = h.exports
	},
		fd0a: function (t, e, i) {}
}]);
//# sourceMappingURL=about.b04a3d6b.js.map