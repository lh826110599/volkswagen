/* sohutv 2020-01-03 18:14:33 */ ! function(i) {
    var n = {};

    function o(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, o), t.loaded = !0, t.exports
    }
    o.m = i, o.c = n, o.p = "", o(0)
}([
    function(e, t, i) {
        "use strict";
        var n = i(40);
        window.playerFactory = n,
        function a(e, t) {
            var i = document,
                n = i.head || i.getElementsByTagName("head")[0] || i.documentElement,
                o = i.createElement("link");
            o.type = "text/css", o.rel = "stylesheet", o.href = e, t && (o.charset = t)
            // , n.insertBefore(o, n.firstChild)
        }()
        // }("//css.tv.itc.cn/m/player.css")
    },
    function(e, t) {
        "use strict";
        var d = navigator.userAgent,
            i = navigator.platform,
            n = d.toLowerCase(),
            l = {}, o = {}, a = {}, s = d.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            r = d.match(/(Android);?[\s\/]+([\d.]+)?/),
            c = !! d.match(/\(Macintosh\; Intel /),
            h = d.match(/(iPad).*OS\s([\d_]+)/),
            u = d.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !h && d.match(/(iPhone\sOS)\s([\d_]+)/),
            f = d.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            m = /Win\d{2}|Windows/.test(i),
            v = d.match(/Windows Phone ([\d.]+)/),
            g = f && d.match(/TouchPad/),
            y = d.match(/Kindle\/([\d.]+)/),
            w = d.match(/Silk\/([\d._]+)/),
            b = d.match(/(BlackBerry).*Version\/([\d.]+)/),
            x = d.match(/(BB10).*Version\/([\d.]+)/),
            P = d.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            D = d.match(/PlayBook/),
            _ = d.match(/Chrome\/([\d.]+)/) || d.match(/CriOS\/([\d.]+)/),
            T = d.match(/Firefox\/([\d.]+)/),
            S = d.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
            k = d.match(/MSIE\s([\d.]+)/) || d.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
            L = !_ && d.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            C = L || d.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        (o.webkit = !! s) && (o.version = s[1]), r && (l.android = !0, l.version = r[2]), p && !u && (l.ios = l.iphone = !0, l.version = p[2].replace(/_/g, ".")), h && (l.ios = l.ipad = !0, l.version = h[2].replace(/_/g, ".")), u && (l.ios = l.ipod = !0, l.version = u[3] ? u[3].replace(/_/g, ".") : null), v && (l.wp = !0, l.version = v[1]), f && (l.webos = !0, l.version = f[2]), g && (l.touchpad = !0), b && (l.blackberry = !0, l.version = b[2]), x && (l.bb10 = !0, l.version = x[2]), P && (l.rimtabletos = !0, l.version = P[2]), D && (o.playbook = !0), y && (l.kindle = !0, l.version = y[1]), w && (o.silk = !0, o.version = w[1]), !w && l.android && d.match(/Kindle Fire/) && (o.silk = !0), _ && (o.chrome = !0, o.version = _[1]), T && (o.firefox = !0, o.version = T[1]), S && (l.firefoxos = !0, l.version = S[1]), k && (o.ie = !0, o.version = k[1]), C && (c || l.ios || m) && (o.safari = !0, l.ios || (o.version = C[1])), L && (o.webview = !0), c && (l.osx = !0), l.tablet = !! (h || D || r && !d.match(/Mobile/) || T && d.match(/Tablet/) || k && !d.match(/Phone/) && d.match(/Touch/)), l.phone = !(l.tablet || l.ipod || !(r || p || f || b || x || _ && d.match(/Android/) || _ && d.match(/CriOS\/([\d.]+)/) || T && d.match(/Mobile/) || k && d.match(/Touch/)));
        var E, M = d.toLowerCase().match(/\bm?qqbrowser\/([0-9.]+)/),
            A = d.match(/SogouMobileBrowser/i),
            F = n.match(/\bmiuibrowser\/([0-9.]+)/),
            I = d.match(/baidubrowser/i),
            B = d.match(/baiduboxapp/i),
            q = d.match(/SohuVideoMobile/i),
            O = d.match(/sohuhy/i),
            U = n.match(/\bmicromessenger\/([\d.]+)/);
        E = 0 <= n.indexOf("ucbrowser/") ? n.match(/\bucbrowser\/([0-9.]+)/) : 0 <= n.indexOf("ubrowser/") ? n.match(/\bubrowser\/([0-9.]+)/) : /\buc\/[0-9]/.test(n) ? n.match(/\buc\/([0-9.]+)/) : 0 <= n.indexOf("ucweb") ? n.match(/\bucweb([0-9.]+)?/) : n.match(/\b(?:ucbrowser|uc)\b/);
        var R = d.match(/Windows\sPad/i);
        M && (o.qq = !0, o.version = M[1]), A && (o.sogou = !0), F && (o.mi = !0, o.version = F[1]), I && (o.baidu = !0), B && (o.baiduboxapp = !0), q && (o.sohuVideoApp = !0), O && (o.sohuhuyouapp = !0), U && (o.weixin = !0, o.wx = !0, o.version = U[1]), E && (o.uc = !0, o.version = E[1]), R && (l.winpad = !0);
        var V, N, $ = n.match(/\bcoolpad[_ ]?([a-z0-9]+)/);
        F = n.match(/\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/);
        V = -1 !== n.indexOf("samsung") ? n.match(/\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/) : n.match(/\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/), N = /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(n) ? n.match(/\bhtc[ _\-]?([a-z0-9 ]+(?= build))/) : n.match(/\bhtc[ _\-]?([a-z0-9 ]+)/), $ && (a.coolpad = !0, a.version = $[1]), F && (a.mi = !0, a.version = F[1]), V && (a.samsung = !0, a.version = V[1]), N && (a.htc = !0, a.version = N[1]), l.pixelRatio = function() {
            var e = 1;
            try {
                e = window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI ? window.screen.systemXDPI / window.screen.logicalXDPI : (window.devicePixelRatio, undefined, window.devicePixelRatio), e = parseFloat(e) || 1
            } catch (t) {}
            return e
        }(), l.screenSizeCorrect = 1, l.android && (window.screen.width / window.innerWidth).toFixed(2) === l.pixelRatio.toFixed(2) && (l.screenSizeCorrect = 1 / l.pixelRatio), l.androidpad = l.androidPad = function() {
            var e = 1,
                t = !1,
                i = (l.screenSizeCorrect || 1) * l.pixelRatio,
                n = Math.floor(window.screen.width * i),
                o = Math.floor(window.screen.height * i),
                a = 1;
            try {
                e = parseFloat(Math.sqrt(n * n + o * o)), a = parseFloat(e / (160 * l.pixelRatio))
            } catch (r) {}
            if ("ontouchstart" in window && l.android) {
                var s = !! /\bpad\b|XiaoMi\/MiPad|lepad|YOGA|MediaPad|GT-P|SM-T|GT-N5100|sch-i800|HUAWEI\s?[MTS]\d+-\w+|Nexus\s7|Nexus\s8|Nexus\s11|Kindle Fire HD|Tablet|tab/i.test(d);
                /mobile/i.test(d) && !s ? t = !1 : s ? t = !0 : !t && (2500 <= e || 7 < a) && (t = !0)
            }
            return t
        }(), l.type = function() {
            if (l.ios) return "ios";
            if (l.android) return "android";
            if (l.wp) return "Windows phone";
            if (l.osx) return "Mac";
            var e = "X11" == navigator.platform && !l.win && !l.osx,
                t = -1 < String(navigator.platform).indexOf("Linux");
            return e ? "Unix" : t ? "Linux" : l.win ? -1 < d.indexOf("Windows NT 5.0") || -1 < d.indexOf("Windows 2000") ? "Win2000" : -1 < d.indexOf("Windows NT 5.1") || -1 < d.indexOf("Windows XP") ? "WinXP" : -1 < d.indexOf("Windows NT 5.2") || -1 < d.indexOf("Windows 2003") ? "Win2003" : -1 < d.indexOf("Windows NT 6.0") || -1 < d.indexOf("Windows Vista") ? "WinVista" : -1 < d.indexOf("Windows NT 6.1") || -1 < d.indexOf("Windows 7") ? "Win7" : -1 < d.indexOf("Windows NT 6.2") || -1 < d.indexOf("Windows 8") ? "Win8" : "windows" : "other"
        }(), l.platform = l.ipad ? "ipad" : l.iphone ? "iphone" : l.ipod ? "ipod" : l.android ? "android" : l.androidPad ? "androidpad" : l.wp ? "windowsphone" : l.win ? (plat64 = -1 < d.indexOf("WOW64") || -1 < d.indexOf("Win64")) ? "Win64" : "Win32" : navigator.platform, o.protocol = window.location.protocol, e.exports = {
            os: l,
            browser: o,
            device: a
        }
    },
    function(e, t) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, a = function a(e, t, i) {
                if (i && a(e, i), t && "object" == (void 0 === t ? "undefined" : o(t)))
                    for (var n in t) e[n] = t[n];
                return e
            }, n = function n(e, t) {
                if (e)
                    for (var i in t) "undefined" == typeof e[i] && (e[i] = t[i]);
                return e
            }, i = function i(t) {
                return function(e) {
                    return {}.toString.call(e) == "[object " + t + "]"
                }
            }, s = i("Object"),
            r = i("Function"),
            d = Array.isArray || i("Array"),
            l = i("String"),
            c = function c(e, t, i) {
                var n = function n() {};
                n.prototype = t.prototype, e.prototype = new n, (e.prototype.constructor = e).prototype.superClass = t.prototype, e.superClass = t.prototype, i = i || {}, a(e.prototype, i), t.prototype.constructor === Object.prototype.constructor && (t.prototype.constructor = t)
            };
        e.exports = {
            extend: a,
            applyIf: n,
            isObject: s,
            isFunction: r,
            isArray: d,
            isString: l,
            inherit: c
        }
    },
    function(e, t, i) {
        "use strict";
        var n, o = i(5),
            a = i(1).browser,
            s = i(1).os,
            r = i(6),
            d = navigator.userAgent;
        n = {
            API_KEY: "f351515304020cad28c92f70f002261c",
            REQUEST_MAX_COUNT: 3,
            ENABLE_DEBUG: o.getQueryString("debug") || o.getQueryString("DEBUG"),
            IS_EXTERNAL_PLAYER: location.href.match(/player=1/i) || -1 < location.host.indexOf("m.sohu.com"),
            ScreenSizeCorrect: 1,
            PixelRatio: function l() {
                var e = 1;
                try {
                    e = window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI ? window.screen.systemXDPI / window.screen.logicalXDPI : (window.devicePixelRatio, undefined, window.devicePixelRatio), e = parseFloat(e) || 1
                } catch (t) {}
                return e
            }(),
            createUUID: function() {
                var e = Math.floor(window.screen.width),
                    t = Math.floor(window.screen.height),
                    i = Math.floor(Math.sqrt(e * e + t * t)) || 0,
                    n = Math.round(function o() {
                        var e = 1;
                        return s.ipad ? e = 2 : s.iphone ? e = 3 : s.android ? (e = 5, /tv/i.test(d) && (e = 6)) : s.androidPad ? e = 4 : s.winpad ? e = 7 : s.wp && (e = 8), e
                    }()) || 1;
                return 1e3 * +new Date + n + i + Math.round(1e3 * Math.random())
            }
        }, a.android && (window.screen.width / window.innerWidth).toFixed(2) === n.PixelRatio.toFixed(2) && (n.ScreenSizeCorrect = 1 / n.PixelRatio), n.ScreenSize = Math.floor(window.screen.width * n.ScreenSizeCorrect) + "x" + Math.floor(window.screen.height * n.ScreenSizeCorrect), n.uid = function() {
            var e = r("SUV");
            if (!e) {
                e = n.createUUID();
                var t = document.domain; - 1 != t.indexOf("sohu.com") ? t = ".sohu.com" : -1 != t.indexOf("56.com") && (t = ".56.com"), r("SUV", e, {
                    domain: t,
                    path: "/",
                    expires: 300
                })
            }
            return e
        }(), n.muid = function() {
            var e = r("_muid_");
            if (!e) {
                e = n.createUUID();
                var t = document.domain; - 1 != t.indexOf("sohu.com") ? t = ".sohu.com" : -1 != t.indexOf("56.com") && (t = ".56.com"), r("_muid_", e, {
                    domain: t,
                    path: "/",
                    expires: 300
                })
            }
            return e
        }(), n.is56 = -1 != document.domain.indexOf("56.com"), n.issohu = -1 != document.domain.indexOf("sohu.com"), n.issohunews = -1 != document.domain.indexOf("m.sohu.com") || -1 != document.domain.indexOf("3g.k.sohu.com"), n.isExternal = !(-1 != document.domain.indexOf("tv.sohu.com") || n.is56), e.exports = n
    },
    function(e, t) {
        "use strict";
        e.exports = window.console
    },
    function(e, t) {
        "use strict";
        var i = null,
            n = {
                getQueryData: function(e) {
                    for (var t, i = (e = e.replace(/^\?+/, "").replace(/&amp;/, "&")).split("&"), n = 0, o = {}; n < i.length;) {
                        if ((t = i[n].split("="))[0]) {
                            var a = t[1] || "";
                            try {
                                a = decodeURIComponent(a)
                            } catch (s) {
                                a = unescape(a)
                            }
                            a = "null" === a ? null : a, o[decodeURIComponent(t[0])] = a
                        }
                        n++
                    }
                    return o
                },
                getQueryString: function(e) {
                    var t, i = window.location.search.substring(1).replace(/[\?&]sohuaction=(.*)/, "");
                    return e in (t = n.getQueryData(i)) ? t[e] : null
                },
                getParam: function(e, t) {
                    var i, n;
                    i = void 0 === t ? (n = window.location.href, new RegExp("(^|&?)" + e + "=([^&]*)(&|$)", "i")) : (n = e, new RegExp("(^|&?)" + t + "=([^&]*)(&|$)", "i"));
                    var o = n.match(i);
                    return null !== o ? decodeURIComponent(o[2]) : null
                },
                stringify: function(e) {
                    var t, i, n = [];
                    for (t in e) {
                        i = e[t];
                        var o = Object.prototype.toString.call(i);
                        "[object Array]" === o ? n.push(t + "=" + JSON.stringify(i)) : "[object Object]" === o ? n.push(t + "=" + JSON.stringify(i)) : e.unencode ? n.push(t + "=" + (void 0 === i ? "" : i)) : n.push(t + "=" + encodeURIComponent(void 0 === i ? "" : i))
                    }
                    return n.join("&")
                },
                parse: function(e) {
                    return e ? (i || (i = document.createElement("a")), i.href = e, {
                        protocol: i.protocol.replace(":", ""),
                        host: i.host,
                        hostname: i.hostname,
                        port: i.port,
                        pathname: i.pathname,
                        query: i.search,
                        params: n.getQueryData(i.search),
                        hash: i.hash.replace("#", "")
                    }) : {}
                },
                removeParam: function() {
                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "",
                        t = arguments[1],
                        i = (e = e.split("#"))[1],
                        n = (e = e[0].split("?"))[1] || "";
                    e = e[0];
                    var o = n.split("&").filter(function(e) {
                        return e && e.split("=")[0] != t
                    });
                    return o && o.length && (e = e + "?" + o.join("&")), i && (e = e + "#" + i), e
                }
            };
        e.exports = n
    },
    function(e, t) {
        "use strict";

        function i(e, t, i) {
            if (void 0 === t) {
                var n = new RegExp("(?:^|; )" + e + "=([^;]*)").exec(document.cookie);
                return n && n[1] || ""
            }
            i = i || {}, null === t && (t = "", i.expires = -1);
            var o, a = "";
            i.expires && ("number" == typeof i.expires || i.expires.toUTCString) && ("number" == typeof i.expires ? (o = new Date).setTime(o.getTime() + 24 * i.expires * 60 * 60 * 1e3) : o = i.expires, a = "; expires=" + o.toUTCString());
            var s = i.path ? "; path=" + i.path : "",
                r = i.domain ? "; domain=" + i.domain : "",
                d = i.secure ? "; secure" : "";
            document.cookie = [e, "=", t, a, s, r, d].join("")
        }
        i.isEnable = function() {
            var e = !0,
                t = "____test";
            return i(t, 1), 1 != i(t) && (e = !1), i(t, null), e
        }, e.exports = i
    },
    function(a, e) {
        (function(e) {
            "use strict";
            var s = "pending",
                d = "resolved",
                l = "rejected",
                i = function i(t) {
                    return function(e) {
                        return {}.toString.call(e) == "[object " + t + "]"
                    }
                }, t = i("Object"),
                n = i("Function"),
                o = Array.isArray || i("Array");

            function c(e) {
                return t(e) && n(e.then)
            }

            function h(e) {
                this.__status = s, this.__resolveList = [], this.__rejectList = [];
                var n = this;
                e(function o(e) {
                    if (n.__status == s) {
                        n.__status = d, n.__value = e;
                        for (var t, i = n.__resolveList; t = i.shift();) t(e)
                    }
                }, function a(e) {
                    if (n.__status == s) {
                        n.__status = l, n.__value = e;
                        for (var t, i = n.__rejectList; t = i.shift();) t(e)
                    }
                })
            }
            h.prototype.then = function(s, r) {
                var e = this;
                return new h(function(n, o) {
                    var a = function a(e) {
                        try {
                            var t = s ? s(e) : e
                        } catch (i) {
                            return i instanceof Error || (i = new Error(i)), i._code = -1e4, window.console && console.log && console.log(i), void o(i)
                        }
                        c(t) ? t.then(function(e) {
                            n(e)
                        }) : n(t)
                    }, i = function i(e) {
                            if (e instanceof Error && !r) o(e);
                            else {
                                try {
                                    r && r(e)
                                } catch (t) {
                                    return t instanceof Error || (t = new Error(t)), t._code = -1e4, window.console && console.log && console.log(t), void o(t)
                                }
                                n()
                            }
                        };
                    e.__status == d ? a(e.__value) : e.__status == l ? i(e.__value) : (e.__resolveList.push(a), e.__rejectList.push(i))
                })
            }, h.prototype["catch"] = function(o) {
                var a = this;
                return new h(function(i, e) {
                    var n = function n(e) {
                        if (e instanceof Error && -1e4 == e._code) {
                            var t = o ? o(e) : e;
                            i(t)
                        } else i(a.__value)
                    };
                    a.__status == d ? i(a.__value) : a.__status == l ? n(a.__value) : (a.__resolveList.push(i), a.__rejectList.push(n))
                })
            }, h.resolve = function(i) {
                return c(i) ? new h(function(e, t) {
                    i.then(e, t)
                }) : new h(function(e) {
                    e(i)
                })
            }, h.reject = function(i) {
                return c(i) ? new h(function(e, t) {
                    i.then(e, t)
                }) : new h(function(e, t) {
                    t(i)
                })
            }, h.all = function(r) {
                if (!o(r)) throw "arguments must be an array in Promise.all";
                return new h(function(i, e) {
                    for (var n, t = 0, o = r.length, a = 0, s = []; t < o; t++) c(n = r[t]) || (n = h.resolve(n)),
                    function(t) {
                        n.then(function(e) {
                            s[t] = e, (a += 1) == o && i(s)
                        }, e)
                    }(t)
                })
            }, h.race = function(a) {
                if (!o(a)) throw "arguments must be an array in Promise.race";
                return new h(function(e, t) {
                    for (var i, n = 0, o = a.length; n < o; n++) c(i = a[n]) || (i = h.resolve(i)), i.then(e, t)
                })
            }, "undefined" != typeof window && window.Promise ? a.exports = window.Promise : void 0 !== e && e.Promise ? a.exports = e.Promise : a.exports = h
        }).call(e, function() {
            return this
        }())
    },
    function(e, t, i) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, n = i(1).browser,
            a = i(1).os,
            s = i(5),
            r = i(6),
            d = i(3),
            l = i(18),
            c = navigator.userAgent,
            h = {
                pingback: function(e) {
                    if (e)
                        for (var t = e.split("|"), i = 0, n = t.length; i < n; i++)(new Image).src = t[i]
                },
                formatURL: function(e) {
                    return e = (e += "").replace(/^https?:\/\/(my\.|v\.)?tv\./i, "http://m.tv.").replace("http://s.", "http://m.s.").replace("http://m.s.", "http://m.tv.").replace(/^http:\/\/(video\.)?2012/i, "http://m.s")
                },
                makePlayUrl: function(e, t) {
                    var i = "//" + location.host;
                    return e.vid && (e.site = e.site || 1, 1 === e.site ? i += "/v" : i += "/u/vw/", i += e.vid + ".shtml", t && (i += "?channeled=" + t)), i
                },
                getSohuDefaultApplink: function(e) {
                    if (e && "string" == typeof e) return e;
                    var t = "//m.tv.sohu.com/app";
                    return a.android && (t = a.androidPad ? "//upgrade.m.tv.sohu.com/channels/hdv/5.0.0/SohuTVPad_5.0.0_1369_201507271523.apk" : "//upgrade.m.tv.sohu.com/channels/hdv/6.9.5/sohuVideoMobile_6.9.5_680_20180423153445.apk"), a.iphone && (t = "https://itunes.apple.com/cn/app/sou-hu-shi-pin-gao-qing/id458587755?mt=8"), a.ipad && (t = "https://itunes.apple.com/cn/app/sou-hu-shi-pin-hd/id414430589?mt=8"), a.wp && (t = "//www.windowsphone.com/zh-CN/apps/403faf93-d22c-4331-ac32-9560ee9fac94"), a.winpad && (t = "//apps.microsoft.com/windows/zh-CN/app/c5ae3c2a-5573-45c2-ac63-7d67e01de6bb"), a.weixin && !a.iphone && (t = "//a.app.qq.com/o/simple.jsp?pkgname=com.sohu.sohuvideo&g_f=991881"), t
                },
                getConnectionType: function() {
                    var e, t = window.navigator.connection,
                        i = "";
                    return t && ((e = t.type) === t.CELL_2G ? i = "2g" : e === t.CELL_3G ? i = "3g" : e === t.WIFI && (i = "wifi")), i
                },
                getUserPt: function() {
                    var e = 1;
                    if ("undefined" != typeof navigator.platform)
                        for (var t = ["Win32", "Win64", "Windows", "Mac68K", "MacPC", "Macintosh", "MacIntel"], i = 0, n = t.length; i < n; i++)
                            if (navigator.platform === t[i]) {
                                e = 1;
                                break
                            }
                    return a.ipad && (e = 2), a.iphone && (e = 3), a.android && (e = 5, !/mobile/i.test(c) && /tv/i.test(c) && (e = 6)), a.androidPad && (e = 4), a.winpad && (e = 7), a.wp && (e = 8), e
                },
                getChanneled: function() {
                    var e = window.__videoData || {}, t = (s.getQueryString("src") || s.getQueryString("SRC") || "").replace("|", "").replace("%7C", ""),
                        i = s.getQueryString("channeled") || window.pageData && window.pageData.channeled || "";
                    return i || (e.channeled ? i = e.channeled : 1 == e.site ? i = "1211010000" : 2 == e.site && (i = "1211020000"), i = i || "0", t && (i = "1212130001"), n.weixin && "121111" !== i.substr(0, 6) && (i = "1211110001"), "sogou" == s.getQueryString("from") && (i = "1200150001"), 1 != this.checkOutset() && (i = "1212130001"), (window._isVedio || window._player && window._player.config.isVedio) && (i = "1211020005")), r("_channeled", i), i
                },
                getGUID: function() {
                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : window.videoData,
                        t = (new Date).getTime(),
                        i = e.vid || "",
                        n = d.uid || "";
                    return l("" + i + n + t)
                },
                getLQD: function() {
                    return s.getQueryString("lqd") || r("_LQD") || ""
                },
                getLCODE: function() {
                    return s.getQueryString("lcode") || r("_LCODE") || ""
                },
                formatCount: function(e) {
                    if ("number" != typeof(e = parseInt(e))) return e;
                    var t = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
                    return e = 1e8 <= e ? (e = Math.round(10 * parseFloat(e / 1e8)) / 10).toString().replace(t, "$1,") + "亿" : 1e5 <= e ? parseInt(e / 1e4).toString().replace(t, "$1,") + "万" : e.toString().replace(t, "$1,")
                },
                addUrlParam: function(e) {
                    var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : "";
                    if (!e) return "";
                    if ("object" == (void 0 === t ? "undefined" : o(t))) {
                        var i = [];
                        for (var n in t) i.push(n + "=" + t[n]);
                        t = i.join("&")
                    }
                    return 0 < e.indexOf("?") ? e += "&" + t : e += "?" + t, e
                },
                checkOutset: function() {
                    try {
                        var e = window.parent.document.domain
                    } catch (t) {
                        return "3"
                    }
                    return window.parent.location.href !== window.location.href ? "3" : -1 == e.indexOf("m.tv.sohu.com") ? "2" : "1"
                },
                ellipsis: function(e, t, i) {
                    var n;
                    (n = ~~ (e.offsetWidth / t) * i) < e.innerHTML.length && (e.innerHTML = e.innerHTML.substring(0, n - 2) + "...")
                },
                cdTimeout: null,
                countDownSecond: function(e, t) {
                    var i;
                    i = e.innerHTML.slice(0, -1), this.cdTimeout = 1 < i ? setTimeout(function() {
                        e.innerHTML = i - 1 + "秒", this.countDownSecond(e, t)
                    }.bind(this), 1e3) : setTimeout(function() {
                        clearTimeout(this.cdTimeout), this.cdTimeout = null, t()
                    }, 1e3)
                },
                removeProtocol: function() {
                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "";
                    return e && (e = document.location.protocol + e.replace(/^https?:/, "")), e
                },
                getOrientation: function() {
                    var e = 1;
                    return 0 != window.orientation && 180 != window.orientation || (e = 2), e
                },
                formatDateWithZh: function(e) {
                    var t = (e = e || new Date).getMonth() + 1,
                        i = e.getDate();
                    return t.toString().length < 2 && (t = "0" + t), i.toString().length < 2 && (i = "0" + i), e.getFullYear() + "年" + t + "月" + i + "日"
                },
                timeFormat: function(e, t) {
                    e /= 1;
                    var o = {
                        "m+": Math.floor(e / 60),
                        "s+": e % 60
                    };
                    for (var i in t = t.replace(/(m+)/, function(e, t) {
                        var i = t,
                            n = ("" + o["m+"]).length;
                        return t && n > t.length && (i = new Array(n + 1).join("m")), i
                    }), o) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, ("00" + o[i]).slice(1 + ~RegExp.$1.length)));
                    return t
                }
            };
        h.covert2mUrl = h.formatURL, e.exports = h
    },
    function(e, t, i) {
        "use strict";
        var v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, g = i(7),
            c = {}, h = c.toString;

        function u(e, t) {
            var i, n;
            if (function o(e) {
                return "number" == typeof e.length
            }(e)) {
                for (i = 0; i < e.length; i++)
                    if (!1 === t.call(e[i], i, e[i])) return e
            } else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) return e; return e
        }
        u("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            c["[object " + t + "]"] = t.toLowerCase()
        });
        var n = function n(t) {
            return function(e) {
                return {}.toString.call(e) == "[object " + t + "]"
            }
        }, p = n("Object"),
            y = n("Function"),
            f = Array.isArray || n("Array"),
            w = n("String"),
            o = window.location.protocol,
            a = ["http://tv.sohu.com", "http://m.tv.sohu.com", "http://api.tv.sohu.com", "http://gslb.tv.sohu.com", "http://count.vrs.sohu.com", "http://rc.vrs.sohu.com", "http://m.aty.sohu.com", "http://vstat.v.blog.sohu.com"];

        function b(i) {
            return "http:" == o || u(a, function(e, t) {
                if (-1 != i.indexOf(t)) return i = i.replace("http:", o), !1
            }), i
        }
        var x, P, D = 0,
            _ = window.document,
            T = /^(?:text|application)\/javascript/i,
            S = /^(?:text|application)\/xml/i,
            k = "application/json",
            L = "text/html",
            C = /^\s*$/,
            E = _.createElement("a");
        E.href = window.location.href;
        var s = encodeURIComponent;

        function M(e, t) {
            var i = t.context;
            if (!1 === t.beforeSend.call(i, e, t)) return !1
        }

        function A(e, t, i, n) {
            var o = i.context,
                a = "success";
            i.success.call(o, e, a, t), n({
                data: e,
                status: a,
                xhr: t
            }), r(a, t, i)
        }

        function F(e, t, i, n, o) {
            var a = n.context;
            n.error.call(a, i, t, e), o({
                xhr: i,
                type: t,
                error: e
            }), r(t, i, n)
        }

        function r(e, t, i) {
            var n = i.context;
            i.complete.call(n, t, e)
        }

        function I() {}
        var B = {
            type: "GET",
            beforeSend: I,
            success: I,
            error: I,
            complete: I,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: k,
                xml: "application/xml, text/xml",
                html: L,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        };

        function q(e, t) {
            return "" == t ? e : (e + "&" + t).replace(/[&?]{1,2}/, "?")
        }

        function O(e, t) {
            var i = [];
            return i.add = function(e, t) {
                y(t) && (t = t()), null == t && (t = ""), this.push(s(e) + "=" + s(t))
            },
            function l(n, e, o, a) {
                var s, r = f(e),
                    d = (t = e, p(t) && ! function i(e) {
                        return null != e && e == e.window
                    }(t) && Object.getPrototypeOf(t) == Object.prototype);
                var t;
                u(e, function(e, t) {
                    var i;
                    s = null == (i = t) ? String(i) : c[h.call(i)] || "object", a && (e = o ? a : a + "[" + (d || "object" == s || "array" == s ? e : "") + "]"), !a && r ? n.add(t.name, t.value) : "array" == s || !o && "object" == s ? l(n, t, o, e) : n.add(e, t)
                })
            }(i, e, t), i.join("&").replace(/%20/g, "+")
        }

        function U(e) {
            var t, i, s = function p(e, t, i) {
                    if (i && p(e, i), t && "object" == (void 0 === t ? "undefined" : v(t)))
                        for (var n in t) e[n] = t[n];
                    return e
                }({}, e || {});
            for (x in B) s[x] === undefined && (s[x] = B[x]);
            s.crossDomain || ((t = _.createElement("a")).href = s.url, t.href = t.href, s.crossDomain = E.protocol + "//" + E.host != t.protocol + "//" + t.host), s.url || (s.url = window.location.toString()), -1 < (i = s.url.indexOf("#")) && (s.url = s.url.slice(0, i)), s.url = b(s.url),
            function f(e) {
                e.processData && e.data && !w(e.data) && (e.data = O(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = q(e.url, e.data), e.data = undefined)
            }(s);
            var r = s.dataType,
                n = /\?.+=\?/.test(s.url);
            if (n && (r = "jsonp"), !1 !== s.cache && (e && !0 === e.cache || "script" != r && "jsonp" != r) || (s.url = q(s.url, "_=" + Date.now())), "jsonp" == r) return n || (s.url = q(s.url, s.jsonp ? s.jsonp + "=?" : !1 === s.jsonp ? "" : "callback=?")),
            function m(h, e) {
                return "type" in h ? new g(function(e, t) {
                    var i, n, o = h.jsonpCallback,
                        a = (y(o) ? o() : o) || "jsonpx" + (new Date).getTime() + "_" + Math.ceil(100 * Math.random()) + "_" + ++D,
                        s = _.createElement("script"),
                        r = window[a],
                        d = function d(e) {
                            t({
                                errorType: e
                            })
                        }, l = {
                            abort: d
                        };

                    function c() {
                        s.onload = s.onreadystatechange = null, _.head.removeChild(s), s = null, clearTimeout(n), A(i && i.length ? i[0] : null, l, h, e), window[a] = r, i && y(r) && r(i[0]), r = i = undefined
                    }!1 !== M(l, h) ? ("onload" in s ? s.onload = c : s.onreadystatechange = function() {
                        /loaded|complete/.test(s.readyState) && c()
                    }, s.onerror = function() {
                        F(null, "error", l, h, t)
                    }, window[a] = function() {
                        i = arguments
                    }, s.src = h.url.replace(/\?(.+)=\?/, "?$1=" + a), _.head.appendChild(s), 0 < h.timeout && (n = setTimeout(function() {
                        d("timeout")
                    }, h.timeout))) : d("abort")
                }) : U(h)
            }(s);
            var d, o = s.accepts[r],
                l = {}, a = function a(e, t) {
                    l[e.toLowerCase()] = [e, t]
                }, c = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : window.location.protocol,
                h = s.xhr(),
                u = h.setRequestHeader;
            if (s.crossDomain || a("X-Requested-With", "XMLHttpRequest"), a("Accept", o || "*/*"), (o = s.mimeType || o) && (-1 < o.indexOf(",") && (o = o.split(",", 2)[0]), h.overrideMimeType && h.overrideMimeType(o)), (s.contentType || !1 !== s.contentType && s.data && "GET" != s.type.toUpperCase()) && a("Content-Type", s.contentType || "application/x-www-form-urlencoded"), s.headers)
                for (P in s.headers) a(P, s.headers[P]);
            return h.setRequestHeader = a, new g(function(o, a) {
                if (!(h.onreadystatechange = function() {
                    if (4 == h.readyState) {
                        h.onreadystatechange = I, clearTimeout(d);
                        var e, t = !1;
                        if (200 <= h.status && h.status < 300 || 304 == h.status || 0 == h.status && "file:" == c) {
                            r = r || function i(e) {
                                return e && (e = e.split(";", 2)[0]), e && (e == L ? "html" : e == k ? "json" : T.test(e) ? "script" : S.test(e) && "xml") || "text"
                            }(s.mimeType || h.getResponseHeader("content-type")), e = h.responseText;
                            try {
                                "script" == r ? (0, eval)(e) : "xml" == r ? e = h.responseXML : "json" == r && (e = C.test(e) ? null : JSON.parse(e))
                            } catch (n) {
                                t = n
                            }
                            t ? F(t, "parsererror", h, s, a) : A(e, h, s, o)
                        } else F(h.statusText || null, h.status ? "error" : "abort", h, s, a)
                    }
                }) === M(h, s)) return h.abort(), void F(null, "abort", h, s, a);
                if (s.xhrFields)
                    for (P in s.xhrFields) h[P] = s.xhrFields[P];
                var e = !("async" in s) || s.async;
                for (P in h.open(s.type, s.url, e, s.username, s.password), l) u.apply(h, l[P]);
                0 < s.timeout && (d = setTimeout(function() {
                    h.onreadystatechange = I, h.abort(), F(null, "timeout", h, s, a)
                }, s.timeout)), h.send(s.data ? s.data : null)
            })
        }

        function d(e, t, i, n) {
            return y(t) && (n = i, i = t, t = undefined), y(i) || (n = i, i = undefined), {
                url: e,
                data: t,
                success: i,
                dataType: n
            }
        }
        U.get = function() {
            return U(d.apply(null, arguments))
        }, U.post = function() {
            var e = d.apply(null, arguments);
            return e.type = "POST", U(e)
        }, U.getJSON = function() {
            var e = d.apply(null, arguments);
            return e.dataType = "json", U(e)
        }, U.getScript = function(a, s) {
            return a = b(a), new g(function(e, t) {
                var i = _.createElement("script"),
                    n = _.head || _.getElementsByTagName("head")[0] || _.documentElement;

                function o() {
                    i.onload = i.onreadystatechange = null, n.removeChild(i), i = null, e()
                }
                i.type = "text/javascript", i.async = !0, s && (i.charset = s), i.src = a, "onload" in i ? i.onload = o : i.onreadystatechange = function() {
                    /loaded|complete/.test(i.readyState) && o()
                }, n.insertBefore(i, n.firstChild)
            })
        }, U.param = function(e, t) {
            return O(e, t)
        }, e.exports = U
    },
    function(e, t, i) {
        "use strict";
        var m = function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        var v = i(1).browser,
            g = i(1).os,
            y = i(8),
            w = i(3),
            b = (i(4), i(6), i(12)),
            x = i(5),
            n = {
                pingback: function(e, t) {
                    e = e || "";
                    var i = (t = t || {}).debuggerMsg || {}, n = t,
                        o = (n.debuggerMsg, function p(e, t) {
                            var i = {};
                            for (var n in e) 0 <= t.indexOf(n) || Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
                            return i
                        }(n, ["debuggerMsg"]));
                    window.videoData && window.videoData.site && "undefined" == typeof o.site && (o.site = window.videoData.site), window.videoData && window.videoData.channeled && "undefined" == typeof o.from && (o.from = "1555550000" == window.videoData.channeled ? "share" : "");
                    var a = window.__videoData || {}, s = y.getChanneled(),
                        r = a.vid || "",
                        d = a.plid || a.aid || a.sid || "",
                        l = "undefined" != typeof o.uid ? o.uid : w.uid,
                        c = location.href,
                        h = {}, u = x.getParam("columnid");
                    if (u && (o.columnId = u), 0 < Object.keys(i).length) {
                        console.log(i);
                        h = {
                            t: +new Date,
                            op: "click",
                            position: "debuggerMsg",
                            debuggerMsg: JSON.stringify(i)
                        };
                        y.pingback("https://z.m.tv.sohu.com/pvpb.gif?" + x.stringify(h))
                    }
                    if ("debuggerMsg" != e) {
                        try {
                            v.weixin && "121111" !== s.substr(0, 6) && (s = "1211110001"), 1 != y.checkOutset() && (s = "1212130002"), h = {
                                t: +new Date,
                                uid: l,
                                position: e,
                                op: "click",
                                details: JSON.stringify(o),
                                nid: a.nid || "",
                                url: encodeURIComponent(c),
                                refer: x.getParam("landingrefer") || encodeURIComponent(document.referrer),
                                screen: w.ScreenSize,
                                os: g.type,
                                platform: g.platform,
                                passport: b.getPassport(),
                                vid: r || "",
                                pid: d || "",
                                channeled: s,
                                MTV_SRC: encodeURIComponent(m["default"].get())
                            }
                        } catch (f) {
                            console.log("trace click exception ", f)
                        }
                        y.pingback("//z.m.tv.sohu.com/h5_cc.gif?" + x.stringify(h))
                    }
                }
            };
        e.exports = n
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        (function f(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        })(i(30));
        var n, r = i(1).browser,
            d = i(6),
            l = i(5),
            o = i(3),
            a = {
                1106: /^tv\.sohu\.com$|^pad\.tv\.sohu\.com$/i,
                1107: /^my\.tv\.sohu\.com$/i,
                1108: /^sports\.sohu\.com$/i,
                1105: /^(m|wap|s|3g)\.(tv|s)\.sohu\.com$|^(t|t1|t2)\.m\.tv\.sohu\.com$|^sohutv\.hao3608\.com$/i,
                1109: /^(news|auto|media|www|yule|mil)\.sohu\.com$/i,
                1001: /^m\.sohu\.com$|^(3g|zhibo|wap)\.sohu\.com$|^(.*)m\.sohu\.com$|^m\.club\.sohu\.com$|^api\.k\.sohu\.com$/i,
                1110: /^(.*)\.baidu\.com$|^(.*)baidu\.mobi$|^webapp\.cbs\.baidu\.com$/i,
                1112: /^(.*)hao123\.com$/i,
                1113: /^v\.m\.liebao\.cn$|^v\.duba\.com$/i,
                1114: /^(.*)2345\.com$/i,
                1115: /^v\.sogou\.com$|^m\.kan\.sogou\.com$|^tv\.sogou\.com$/i,
                1068: /^sogou\.com$|^(.*)\.sogou\.com$/i,
                1116: /^(.*)sm\.cn$|^(.*)uodoo\.com$/i,
                1006: /^tv\.uc\.cn$/i,
                1007: /^hao\.uc\.cn$/i,
                1117: /^(news|inews)\.uc\.cn$/i,
                1033: /^m\.video\.so\.com$/i,
                1075: /^(.*)(so|haosou)\.com$/i,
                1118: /^(.*)weibo\.com$|^(.*)weibo\.cn$/i,
                1119: /^(.*)qzone\.qq\.com$/i,
                1120: /^(.*)10086\.cn$/i,
                1123: /^(.*)(google|g).(.*)$/i,
                1121: /^(.*)wapreach\.com$|^(.*)\.app111\.com$|^(.*)homeinns\.cc$|^(hao|hao123|m)\.xiaomi\.com$/i,
                1122: /^video\.wapreach\.com$|^video\.browser\.miui\.com$|^v\.html5\.qq\.com$|^kanpian\.easou\.com$|^video\.nearme\.com\.cn$/i,
                1124: /^(.*)soso\.com$|^(.*)easou\.com$|^(.*)bing\.com$/i
            }, s = (n = {
                domain: "sohu.com",
                path: "/"
            }, o.is56 && (n = {
                domain: "56.com",
                path: "/"
            }), n),
            c = function c(e) {
                var t = "";
                if (e)
                    for (var i in a) {
                        var n = a[i];
                        if (n && n.test(e)) {
                            t = i;
                            break
                        }
                    }
                return t
            }, h = {
                11040001: /MicroMessenger/i,
                11180001: /weibo/i,
                11290001: /qq\//i,
                11190001: /qzone/i
            }, u = function u() {
                return !(!window.videoData || "1555550000" != window.videoData.channeled)
            }, p = {
                get: function() {
                    var e;
                    if (r.wx && /^wx\.m\.tv\.sohu\.com$/i.test(document.domain)) e = "11040001";
                    else if (/hefeixin/gim.test(navigator.userAgent)) e = "1004033728";
                    else if (/qqlive|letv|youku/gim.test(navigator.userAgent)) e = "12540001";
                    else if (/iqiyi/gim.test(navigator.userAgent)) e = "13880001";
                    else if (!(e = (l.getQueryString("src") || l.getQueryString("SRC") || d("MTV_SRC") || "").replace("|", "").replace("%7C", ""))) {
                        var t = l.getParam("landingrefer") || document.referrer || location.href || "",
                            i = l.parse(t || "").hostname;
                        i && (e = c(i)) && e.length < 8 && 4 <= e.length && (e = e.substring(0, 4) + "0001")
                    }
                    if (u()) {
                        var n, o = "",
                            a = navigator.userAgent;
                        for (var s in h)
                            if ((n = h[s]) && n.test(a)) {
                                o = s;
                                break
                            }
                            "" !== o && (e = o)
                    }
                    return e || (e = "11050001"), e
                },
                persist: function() {
                    var e = this.get();
                    d("MTV_SRC", e, s)
                },
                topReferMap: ["tv.sohu.com", "m.baidu.com", "m.tv.sohu.com", "wapv.sogou.com", "yz.m.sm.cn", "nativeapp.toutiao.com", "so.m.sm.cn", "sp3.baidu.com", "m.sogou.com", "m.so.com", "wap.sogou.com", "www.baidu.com"]
            };
        p.persist(), t["default"] = p
    },
    function(e, t) {
        "use strict";
        var i = function i() {
            this.logoutTimes = 0, this.loginTimes = 0
        };
        i.prototype = {
            getAppid: function() {
                return this.getInfo().appid || ""
            },
            getPassport: function() {
                return this.getInfo().userid || ""
            },
            getUid: function() {
                return this.getInfo().uid || ""
            },
            getUUID: function() {
                return this.getInfo().uuid || ""
            },
            getQname: function() {
                return this.getInfo().uniqname || ""
            }
        }, i.prototype.b64_423 = function(e) {
            for (var t = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"), i = "", n = 0; n < e.length; n++) {
                for (var o = 0; o < 64; o++)
                    if (e.charAt(n) == t[o]) {
                        var a = o.toString(2);
                        i += ("000000" + a).substr(a.length);
                        break
                    }
                if (64 == o) return 2 == n ? i.substr(0, 8) : i.substr(0, 16)
            }
            return i
        }, i.prototype.b2i = function(e) {
            for (var t = 0, i = 128, n = 0; n < 8; n++, i /= 2) "1" == e.charAt(n) && (t += i);
            return String.fromCharCode(t)
        }, i.prototype.b64_decodex = function(e) {
            var t, i = [],
                n = "";
            for (t = 0; t < e.length; t += 4) n += this.b64_423(e.substr(t, 4));
            for (t = 0; t < n.length; t += 8) i += this.b2i(n.substr(t, 8));
            return i
        }, i.prototype.utf8to16 = function(e) {
            var t, i, n, o, a, s, r, d;
            for (t = [], o = e.length, i = n = 0; i < o;) {
                switch ((a = e.charCodeAt(i++)) >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        t[n++] = e.charAt(i - 1);
                        break;
                    case 12:
                    case 13:
                        s = e.charCodeAt(i++), t[n++] = String.fromCharCode((31 & a) << 6 | 63 & s);
                        break;
                    case 14:
                        s = e.charCodeAt(i++), r = e.charCodeAt(i++), t[n++] = String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | 63 & r);
                        break;
                    case 15:
                        switch (15 & a) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                d = (7 & a) << 18 | (63 & (s = e.charCodeAt(i++))) << 12 | (63 & (r = e.charCodeAt(i++))) << 6 | (63 & e.charCodeAt(i++)) - 65536, t[n] = 0 <= d && d <= 1048575 ? String.fromCharCode(d >>> 10 & 1023 | 55296, 1023 & d | 56320) : "?";
                                break;
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                                i += 4, t[n] = "?";
                                break;
                            case 12:
                            case 13:
                                i += 5, t[n] = "?"
                        }
                }
                n++
            }
            return t.join("")
        }, i.prototype.selectInfo = function() {
            var e, t, i, n = ["ppinf", "ppinfo", "passport"];
            for (e = 0, t = n.length; e < t; e++)
                if ((i = new RegExp("\\b" + n[e] + "\\b=(.*?)(?:$|;)").exec(document.cookie)) && i.length) {
                    i = i[1];
                    break
                }
            return i
        }, i.prototype.decodeInfo = function(e) {
            var t;
            try {
                return "1" != (e = unescape(e).split("|"))[0] && "2" != e[0] || (t = this.utf8to16(this.b64_decodex(e[3]))), t
            } catch (i) {}
        }, i.prototype.analyzeInfo = function(e) {
            e = e || "";
            var t, i, n, o = {};
            try {
                for (e = e.split("|"), t = 0, i = e.length; t < i; t++) 1 < (n = e[t].split(":")).length && (o[n[0]] = n[2])
            } catch (a) {}
            return o
        }, i.prototype.getInfo = function() {
            return this.analyzeInfo(this.decodeInfo(this.selectInfo()))
        }, e.exports = new i
    },
    function(e, t) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i = function i(t) {
                return function(e) {
                    return {}.toString.call(e) == "[object " + t + "]"
                }
            }, s = i("Object"),
            r = i("Function"),
            o = function o(e, t) {
                if (t && "object" == (void 0 === t ? "undefined" : n(t)))
                    for (var i in t) e[i] = t[i]
            };

        function a() {
            this.__events = {}
        }
        o(a.prototype, {
            addEventListener: function(e, t, i) {
                if (e && t) {
                    this.__events[e] = this.__events[e] || [];
                    for (var n, o = this.__events[e], a = o.length - 1; 0 <= a; a--)
                        if (o[a].h == t) {
                            n = !0;
                            break
                        }
                    n || o.push({
                        h: t,
                        one: i
                    })
                }
            },
            removeEventListener: function(e, t) {
                if (e || t)
                    if (t)
                        for (var i = this.__events[e] || [], n = 0; n < i.length;) t === i[n].h ? i.splice(n, 1) : n++;
                    else delete this.__events[e];
                    else this.__events = {}
            },
            emit: function(e, t) {
                if (e)
                    for (var i, n, o = this.__events[e] || [], a = 0; a < o.length;) n = (i = o[a]).h, r(n) ? n.call(null, t, e) : s(n) && r(n.handleEvent) && n.handleEvent.call(n, e, t), i.one ? o.splice(a, 1) : a++
            },
            one: function(e, t) {
                this.addEventListener(e, t, !0)
            }
        }), a.prototype.on = a.prototype.addEventListener, a.prototype.off = a.prototype.removeEventListener, e.exports = {
            EventEmitter: a,
            addEventEmitter: function d(e) {
                return o(e, {
                    __emitter: new a,
                    on: function(e, t, i) {
                        this.__emitter.on(e, t, i)
                    },
                    off: function(e, t) {
                        this.__emitter.off(e, t)
                    },
                    one: function(e, t) {
                        this.__emitter.one(e, t)
                    },
                    emit: function(e, t) {
                        this.__emitter.emit(e, t)
                    }
                }), e
            }
        }
    },
    function(e, t, i) {
        "use strict";
        n(i(11));
        var o = n(i(15));

        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var h = i(1).browser,
            u = i(1).os,
            a = i(5),
            s = i(6),
            p = i(10),
            f = (i(31), i(4)),
            r = i(2),
            d = i(8),
            m = navigator.userAgent,
            v = i(7);

        function l() {
            m = m.toLowerCase();
            var e = {
                iqiyi: /iqiyi/gim,
                qqlive: /qqlive/gim,
                letv: /letv/gim,
                youku: /youku/gim,
                weixin: /MicroMessenger/i,
                baidubox: /baiduboxapp/i,
                weibo: /weibo/i,
                qq: /qq\//i,
                hao123: /haopassion/i,
                Qzone: /qzone/i,
                renren: /renren/i,
                MQQBrowser: /mqqbrowser/i,
                UCBrowser: /ucbrowser/i,
                QQLiveBrowser: /qqlivebrowser/i
            }, t = "";
            for (var i in e) {
                var n = e[i];
                if (n && n.test(m)) {
                    t = i;
                    break
                }
            }
            return t
        }

        function c() {
            var e, t = a.getParam("landingrefer") || document.referrer || "",
                i = a.parse(t || "").hostname;
            return e = (a.getQueryString("src") || a.getQueryString("SRC") || "").replace("|", "").replace("%7C", ""), (e = isNaN(parseInt(e, 10)) ? "" : e) && e.length < 8 && 4 <= e.length && (e = e.substring(0, 4) + "0001"), e || "tv.sohu.com" != i || (e = l() || i), /iqiyi/gim.test(m.toLowerCase()) && (e = "13880001"), e = e || i || l() || "direct"
        }
        var g = {
            URLProtocol: "sohuvideo" + (u.ipad ? "hd" : "") + "://",
            openTime: u.ios ? 800 : 1e3,
            appChanneled: 1000120001,
            maxEffectiveTime: 72e5,
            URLGlobalParams: {},
            outset: d.checkOutset(),
            gotoDownload: function() {
                var i = this,
                    n = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                if (h.sohuVideoApp) return !1;
                o["default"].getDownloadUrl(n.id).then(function(e) {
                    if (e) {
                        var t = n.delayTime ? n.delayTime : i.openTime;
                        setTimeout(function() {
                            window.location.href = e
                        }, t)
                    }
                })
            },
            openIos: function(d, l) {
                var c = this;
                if (d) return new v(function(t, e) {
                    var i, n;
                    f.log("发送行为统计点: app2_ios_action"), p.pingback("app2_ios_action");
                    var o = function o(e) {
                        window.removeEventListener("pagehide", a, !0), window.removeEventListener("pageshow", a, !0), t(e)
                    }, a = function a() {
                            clearTimeout(i), o(!1)
                        };
                    if (window.addEventListener("pagehide", a, !0), window.addEventListener("pageshow", a, !0), u.version && 9 <= parseFloat(u.version) && !c.isUniversalBlackList() && !h.sohuVideoApp && !l)
                        if (t(!1), n = h.weixin ? "//s1.h5.itc.cn/app/wx.html?action=" : "//s1.h5.itc.cn/app/wx.html?download=1&action=", 3 == c.outset) try {
                            window.parent.location.href = n + d
                        } catch (r) {
                            location.href = n + d
                        } else location.href = n + d;
                        else location.href = d;
                    var s = +new Date;
                    i = setTimeout(function() {
                        var e = +new Date;
                        o(!(1300 < e - s))
                    }, 1200)
                })
            },
            openAndroid: function(s, e, r) {
                if (f.log("actionUrl:" + s), s) {
                    -1 === s.indexOf("svawebsocket") && (f.log("发送行为统计点: app1_android_action"), p.pingback("app1_android_action"));
                    var d = a.getQueryData(location.search.substring(1)),
                        l = !1,
                        c = !1;
                    return e && ("click" === e && (l = !0), "try" === e && (c = !0)), r = r || !1, new v(function(t, e) {
                        if (d.startClient && "1" === d.startClient && d.clientType || !c && (d.startClient && "2" !== d.startClient || l) && g.isForceIntent(r) && !/UCBrowser/i.test(m) && -1 === s.indexOf("svawebsocket")) {
                            window.location.href = s;
                            var i = Date.now();
                            clearTimeout(n);
                            var n = setTimeout(function() {
                                var e = Date.now() - i;
                                t(e < 2100)
                            }, 2e3)
                        } else {
                            var o = document.createElement("iframe");
                            o.style.display = "none", o.src = s;
                            var a = document.body;
                            a.appendChild(o), setTimeout(function() {
                                a.removeChild(o), o.onload = null, o = null
                            }, 0);
                            i = Date.now();
                            clearTimeout(n);
                            n = setTimeout(function() {
                                var e = Date.now() - i;
                                t(e < 2100)
                            }, 2e3)
                        }
                    })
                }
            },
            isIntentList: function() {
                var e = !1;
                return u.android && /(SAMSUNG[\s\-_]+)?SM[\s\-_]+(N90|G90|T|P6)+|Nexus/i.test(m) && (e = !0), e
            },
            isUniversalBlackList: function() {
                var e = !1;
                return /MQQBrowser/gim.test(m) && (e = !0), e
            },
            isForceIntent: function(e) {
                e = e || !1;
                var t = !1,
                    i = !! m.match(/version\/[\d+\.]+\s*chrome/i),
                    n = u.android && h.chrome && !i && e;
                return (u.anroid && this.isIntentList() && !/UCBrowser/i.test(m) && !/QQBrowser/i.test(m) || n) && (t = !0), t
            },
            getAppChanneled: function() {
                var e = window.__videoData || {}, t = a.getQueryString("channeled") || e.channeled || g.appChanneled,
                    i = window.location.href || "http://m.tv.sohu.com/";
                try {
                    (-1 < i.indexOf("hots") || -1 < i.indexOf("/x")) && (t = e.channeled || a.getQueryString("channeled") || g.appChanneled)
                } catch (n) {
                    t = g.appChanneled, f.log(n)
                }
                return t
            },
            formatChanneled: function(e) {
                var t = window.videoData || {}, i = 1 == t.site ? "122222" : "122223";
                return i = "1555550000" == t.channeled ? "155555" : i, 4 < (e = e || "").length && -1 < e.toString().indexOf("12222") && (e = i + e.slice(-4)), e
            },
            makeActionParam: function(e) {
                var t = window.__videoData || {}, i = {};
                if (i.action = e.action, -1 !== ["71", "72", "73", "74", "75", "76"].indexOf(e.cid) && (e.cid = "28", e.cateCode = "9009"), "1.1" === i.action && (i.sid = e.sid, i.cid = e.cid, i.cateCode = e.cateCode, i.site = e.site, i.dataType = e.dataType || "", e.vid && "" !== e.vid && (i.vid = e.vid), e.ex1 && "1" !== e.ex1 && "" !== e.ex1 && (i.ex1 = e.ex1), e.ex2 && "" !== e.ex2 && (i.ex2 = e.ex2), e.ex3 && "" !== e.ex3 && (i.ex3 = e.ex3), e.appname && "" !== e.appname && "none" !== e.appname ? i.appname = e.appname : i.backpage = "0", e.more && !u.ios && (i.more = e.more), u.wp && (i.site = e.site)), "1.2" !== i.action && "2.4" !== i.action || (u.ios ? (i.action = "2.4", i.ex1 = e.ex1, -1 < window.location.href.indexOf("/hots") ? (i.cid = e.cid, i.ex2 = e.ex2) : (i.cid = e.cateCode, i.ex2 = e.cid)) : (i.cid = e.cid, i.cateCode = e.cateCode), e.channel_list_type && (i.channel_list_type = e.channel_list_type)), "1.17" === i.action && (i.ex1 = e.ex1, "1" === e.ex1 ? (i.vid = e.vid, i.cid = e.cid) : "3" === e.ex1 && (i.ex2 = e.ex2, i.ex3 = e.ex3)), "2.14" === i.action && (i.urls = e.urls, i.unencode = !0), "1.18" === i.action && (i.urls = e.urls, "" !== e.share && (i.share = e.share), "" !== e.ex1 && (i.ex1 = e.ex1), "" !== e.ex2 && (i.ex2 = e.ex2), "" !== e.ex3 && (i.ex3 = e.ex3), "" !== e.bit0 && (i.bit0 = e.bit0), "" !== e.bit1 && (i.bit1 = e.bit1)), "1.21" === i.action && (i.more = e.more, i.type = e.type), "1.36" === i.action && "" !== e.ex1 && (i.ex1 = e.ex1), "2.6" === e.action) {
                    var n = e.more.sourcedata,
                        o = n.callbackAction || "";
                    if (!n.callbackAction || "" === n.callbackAction) {
                        var a = {
                            action: "1.18"
                        };
                        a.urls = e.urls || window.location.href, a.channeled = e.channeled, a.share = e.share || "0", a.more = {
                            description: "",
                            getad: 0,
                            sourcedata: {
                                params: "uid&passport&token&plat&clientVer&clientType&gid",
                                preid: window.location.href
                            }
                        }, o = this.makeActionUrl(a), n.callbackAction = o
                    }
                    n.loginFrom = n.loginFrom || 17, n.callbackAction = o, n.closeWebView = "undefined" != typeof n.closeWebView ? n.closeWebView : 1
                }
                return i.more = {
                    sourcedata: {
                        channeled: e.channeled,
                        preid: window.location.href
                    }
                }, i.enterid = e.enterid || "4", t.vWidth && t.vHeight && (i.more.videoSize = {
                    vWidth: parseInt(t.vWidth),
                    vHeight: parseInt(t.vHeight)
                }), r.extend(i.more, e.more), i.more = JSON.stringify(i.more), i
            },
            formatArgs: function(e) {
                var t = e.cateCode || "",
                    i = e.channeled ? this.formatChanneled(e.channeled) : this.getAppChanneled();
                t = (t = t.toString().split(",")[0] || "").split(";")[0] || "";
                var n = {
                    action: e.action || "1.1",
                    vid: e.vid || "",
                    sid: e.sid || "",
                    cid: e.cid || "",
                    cateCode: t,
                    dataType: e.dataType || "",
                    share: e.share || "",
                    urls: e.urls || "",
                    ex1: e.ex1 || "1",
                    ex2: e.ex2 || "",
                    ex3: e.ex3 || "",
                    site: e.site || "",
                    enterid: "4_" + i + "_" + c(),
                    bit0: e.bit0 || "",
                    bit1: e.bit1 || "",
                    type: e.type || 6,
                    appname: "none",
                    channeled: i,
                    more: e.more || {}
                };
                return "1.1" === e.action ? 9001 !== e.cid && "2" !== e.site || (n.ex3 = 2, n.site = "2", n.cid = 9001) : "2.4" == e.action && (n.channel_list_type = e.channel_list_type), (window._isVedio || window._player && window._player.config.isVedio) && e.vid == window.videoData.vid && (n.vid = a.getQueryString("ovid"), n.site = a.getQueryString("osite"), n.cid = window.videoData.ocid, n.cateCode = window.videoData.ocateCode, n.sid = window.videoData.oplid), n
            },
            makeActionUrl: function(e) {
                var t = this.formatArgs(e),
                    i = this.makeActionParam(t),
                    n = "",
                    o = this.URLGlobalParams;
                return -1 < (o.clientType && "1" === o.startClient || !s.isEnable() ? "sohuvideo" : "1" !== o.startClient && !this.isForceIntent(e.isAutoAction) || h.sohuVideoApp ? "sohuvideo" : "intent").indexOf("intent") ? (n = "intent://", n += "?" + a.stringify(i).replace(/index\.html%2C/, "index.html"), n += "#Intent;scheme=sohuvideo;package=com.sohu.sohuvideo;end", f.log("android intent 1:", JSON.stringify(i))) : (n = g.URLProtocol, n += "action.cmd", n += "?" + a.stringify(i).replace(/index\.html%2C/, "index.html"), f.log("sohovideo:", JSON.stringify(i))), f.log("makeActionUrl : " + n), n
            },
            getIframe: function() {
                var e = document.querySelector("#j_redirectNativeFrame");
                return e || ((e = document.createElement("iframe")).id = "j_redirectNativeFrame", e.style.display = "none", document.body.appendChild(e)), e
            },
            sendAction: function(e) {
                var t = c();
                "" !== t && "0" !== t && (f.log("发送行为统计点: app_channel_action"), p.pingback("app_channel_action"));
                var i = this.makeActionUrl(e),
                    n = a.getQueryData(location.search.substring(1));
                return "1" === n.startClient && (f.log("发送行为统计点: appdownload_jump1"), p.pingback("appdownload_jump1")), "2" === n.startClient && (f.log("发送行为统计点: appdownload_jump2"), p.pingback("appdownload_jump2")), e.isHike && (f.log("发送行为统计点: appdownload_jump0"), p.pingback("appdownload_jump0")), u.android ? this.openAndroid(i, e.type, e.isAutoAction) : u.ios ? this.openIos(i, e.isAutoAction) : (f.log("发送行为统计点: app3_others_action"), p.pingback("app3_others_action"), void(this.getIframe().src = i))
            },
            sendAction1: function(e, t) {
                var i = c();
                "" !== i && "0" !== i && (f.log("发送行为统计点: app_channel_action"), p.pingback("app_channel_action"));
                var n = "";
                "string" == typeof e ? (n = e, e = {}) : n = this.makeActionUrl(e);
                var o = a.getQueryData(location.search.substring(1));
                return "1" === o.startClient && (f.log("发送行为统计点: appdownload_jump1"), p.pingback("appdownload_jump1")), "2" === o.startClient && (f.log("发送行为统计点: appdownload_jump2"), p.pingback("appdownload_jump2")), e.isHike && (f.log("发送行为统计点: appdownload_jump0"), p.pingback("appdownload_jump0")), u.android ? "undefined" != typeof e.type ? this.openAndroid(n, e.type, t) : this.openAndroid(n, t) : u.ios ? this.openIos(n, t) : (f.log("发送行为统计点: app3_others_action"), p.pingback("app3_others_action"), void(this.getIframe().src = n))
            },
            parserUrls: function() {
                for (var e, t = ["clientType", "clientVer", "actionVer", "startClient", "actionId", "player", "vid", "vids", "site", "srcUrl", "poster", "title"], i = t.length, n = a.getQueryData(location.search.substring(1)), o = {}; i--;) e = t[i], n.hasOwnProperty(e) && n[e] && (o[e] = n[e]);
                g.URLGlobalParams = o
            },
            parserAttributes: function(e, t) {
                for (var i = ["vid", "cid", "sid", "plid", "cateCode", "site", "dataType"], n = i.length, o = g.URLGlobalParams, a = e || window.__videoData || {}, s = {}; n--;) {
                    var r = i[n];
                    a && a[r] && (s[r] = a[r]), o && o.hasOwnProperty(r) && o[r] && (s[r] = o[r])
                }
                "undefined" != typeof s.site && (s.site = s.site + "");
                var d = o.channeled || this.getAppChanneled();
                d = d.toString().replace("|", "").replace("%7C", "");
                s.vid;
                var l = g.URLProtocol,
                    c = s.downUrl || "";
                s.actionId || s.actionVer;
                return a.site && "2" === a.site ? (s.action = "1.1", s.ex3 = "2") : a.liveId ? (s.action = "1.17", s.ex1 = "3", s.ex2 = a.liveId, a.urls && (s.ex3 = a.urls.length ? a.urls[0].url : ""), s.more = {
                    type: 2
                }) : (s.action = "1.1", s.ex1 = "1"), (s = this.formatArgs(s)).scheme = l, s.downUrl = c, f.log("parserAttributes:", JSON.stringify(s)), s
            },
            init: function() {
                this.parserUrls()
            }
        };
        g.init(), window.Action = g, e.exports = g
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var h = function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        i(2);
        var u = i(8),
            p = i(9),
            f = i(7),
            m = i(4),
            o = i(1).os,
            a = i(1).browser,
            v = (function r(e) {
                if (!window.localStorage) return null;
                var t = localStorage.getItem("localChannelInfo"),
                    i = [],
                    n = null;
                Date.now();
                if (t && JSON.parse(t), void 0 !== e) {
                    for (var o, a = 0; i[a++];)
                        if (o.channelSrc == e && Date.now() < o.time + 36e5) {
                            o;
                            break
                        }
                } else i;
                return n
            }, {}),
            n = {
                loadData: function() {
                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {}, t = e.id,
                        n = t === undefined ? h["default"].get() : t,
                        o = e.vid,
                        a = e.videoOrder,
                        s = e.site,
                        r = e.cid,
                        d = e.plid,
                        l = e.videoType,
                        c = e.isSohu,
                        i = (e.channeled, n.length);
                    return n = "" + n, i < 10 && 4 < i && (n = n.substr(0, 4)), new f(function(i) {
                        if (!o && v[n]) i(v[n]);
                        else {
                            n = parseInt(n, 10), isNaN(n) && (n = "0");
                            var e = "//m.tv.sohu.com/h5/coopauth/" + n + ".json?callback=?&platform=" + u.getUserPt(),
                                t = t || window.videoData && window.videoData.channeled;
                            o && d && r && (e += "&vid=" + o + "&pid=" + d + "&play=" + a + "&site=" + s + "&cid=" + r + "&video_type=" + l + "&isSohu=" + c), e += "&channeled=" + t, m.log("渠道-->", e), p.getJSON(e).then(function() {
                                var e = (0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {}).data,
                                    t = e === undefined ? {} : e;
                                t.cooperation && (v["" + n] = t), i(t)
                            }, function() {
                                return i({})
                            })
                        }
                    })
                },
                getDownloadUrl: function() {
                    var e = this,
                        t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : h["default"].get();
                    return new f(function(n) {
                        o.ipad || o.iphone || a.weixin ? setTimeout(function() {
                            return n(u.getSohuDefaultApplink())
                        }, 0) : e.loadData({
                            id: t
                        }).then(function(e) {
                            var t = e.cooperation,
                                i = (t === undefined ? {} : t).link || u.getSohuDefaultApplink();
                            n(i)
                        })
                    })
                }
            };
        t["default"] = n
    },
    function(e, t, i) {
        "use strict";
        var a = i(1).browser,
            s = i(1).os,
            r = i(1).device,
            o = i(5),
            d = i(22),
            n = (navigator.userAgent, {
                m3u8: function() {
                    if (d.isInBlackList("m3u8")) return !1;
                    if (r.samsung && a.chrome || r.htc || s.android && a.firefox) return !1;
                    if (s.ios || "m3u8" === o.getQueryString("srcType")) return !0;
                    var e = document.getElementsByTagName("video")[0] || document.createElement("video");
                    if ("function" != typeof e.canPlayType) return !1;
                    var t = e.canPlayType("application/vnd.apple.mpegURL"),
                        i = e.canPlayType("application/x-mpegURL"),
                        n = /probably|maybe/;
                    return n.test(t) || n.test(i)
                },
                mp4: function() {
                    if (d.isInBlackList("mp4")) return !1;
                    if (s.wp || "mp4" === o.getQueryString("srcType")) return !0;
                    var e = document.getElementsByTagName("video")[0] || document.createElement("video");
                    return "function" != typeof e.canPlayType || "" !== e.canPlayType('video/mp4; codecs="mp4v.20.8"') && "" !== e.canPlayType('video/mp4; codecs="avc1.42E01E"') && "" !== e.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
                },
                autoplay: function() {
                    var e, t, i, n = !0,
                        o = navigator.userAgent;
                    if (a.wx) {
                        for (t = 0, i = (e = [/MI[\s\-_]+/i, /SM\-N90/i, /HUAWEI/i, /Coolpad/i, /E7/i, /GT\-I95/i, /GT\-N71/i, /M032.*JRO03H/i, /Android\/?\s?4\.0/i]).length; t < i; t++)
                            if (e[t].test(o)) {
                                n = !1;
                                break
                            }(s.ipad || s.androidpad) && (n = !1)
                    } else(s.ios && !a.qq && !a.uc || s.wp || s.android && (a.baiduboxapp || a.qq) || r.mi && 2 == r.version) && (n = !1), s.androidpad && (n = !1);
                    return function() {
                        return n
                    }
                }(),
                pjax: !(!window.history || !history.pushState),
                adv: function() {
                    var e = !0;
                    return s.android && 0 == (s.version || "").indexOf("2.3") && (e = !1), e
                },
                lock: function() {
                    for (var e = 0, t = navigator.userAgent, i = !0, n = {
                            android: [/weibo/i]
                        }[s.android ? "android" : "ios"], o = n.length; e < o; e++)
                        if (n[e].test(t)) {
                            i = !1;
                            break
                        }
                    return i
                }
            });
        e.exports = n
    },
    function(e, t, i) {
        "use strict";
        var n = i(3);
        e.exports = {
            SVP_URL: "//m.tv.sohu.com/",
            API_KEY: n.API_KEY,
            API_URL: "/api/",
            API_PARAMS: {
                api_key: n.API_KEY,
                plat: "17",
                sver: "1.0",
                partner: "1"
            }
        }
    },
    function(e, t) {
        "use strict";
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i = {
                MD5: function(e) {
                    function m(e, t, i) {
                        return e & t | ~e & i
                    }

                    function v(e, t, i) {
                        return i & e | ~i & t
                    }

                    function g(e, t, i) {
                        return e ^ t ^ i
                    }

                    function y(e, t, i) {
                        return t ^ (e | ~i)
                    }

                    function w(e, t) {
                        return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
                    }

                    function n(e) {
                        for (var t = [], i = 0; i < e.length; i++)
                            if (e.charCodeAt(i) <= 127) t.push(e.charCodeAt(i));
                            else
                                for (var n = encodeURIComponent(e.charAt(i)).substr(1).split("%"), o = 0; o < n.length; o++) t.push(parseInt(n[o], 16));
                        return t
                    }

                    function t(e) {
                        for (var t = new Array(e.length), i = 0; i < e.length; i++) t[i] = e[i];
                        return t
                    }
                    var b = null,
                        i = null;

                    function x(e, t) {
                        return 4294967295 & e + t
                    }
                    return "string" == typeof e ? b = n(e) : e.constructor == Array ? 0 === e.length ? b = e : "string" == typeof e[0] ? b = function o(e) {
                        for (var t = [], i = 0; i < e.length; i++) t = t.concat(n(e[i]));
                        return t
                    }(e) : "number" == typeof e[0] ? b = e : i = a(e[0]) : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? b = t(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? b = t(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? b = t(new Uint8Array(e.buffer)) : i = void 0 === e ? "undefined" : a(e) : i = void 0 === e ? "undefined" : a(e), i && alert("MD5 type mismatch, cannot process " + i),
                    function P() {
                        function e(e, t, i, n) {
                            var o = h;
                            h = c, l = x(c = l, function a(e, t) {
                                return e << t & 4294967295 | e >>> 32 - t
                            }(x(d, x(e, x(t, i))), n)), d = o
                        }
                        var t = b.length;
                        b.push(128);
                        var i = b.length % 64;
                        if (56 < i) {
                            for (var n = 0; n < 64 - i; n++) b.push(0);
                            i = b.length % 64
                        }
                        for (n = 0; n < 56 - i; n++) b.push(0);
                        b = b.concat(function p(e) {
                            for (var t = [], i = 0; i < 8; i++) t.push(255 & e), e >>>= 8;
                            return t
                        }(8 * t));
                        var o = 1732584193,
                            a = 4023233417,
                            s = 2562383102,
                            r = 271733878,
                            d = 0,
                            l = 0,
                            c = 0,
                            h = 0;
                        for (n = 0; n < b.length / 64; n++) {
                            d = o;
                            var u = 64 * n;
                            e(m(l = a, c = s, h = r), 3614090360, w(b, u), 7), e(m(l, c, h), 3905402710, w(b, 4 + u), 12), e(m(l, c, h), 606105819, w(b, 8 + u), 17), e(m(l, c, h), 3250441966, w(b, 12 + u), 22), e(m(l, c, h), 4118548399, w(b, 16 + u), 7), e(m(l, c, h), 1200080426, w(b, 20 + u), 12), e(m(l, c, h), 2821735955, w(b, 24 + u), 17), e(m(l, c, h), 4249261313, w(b, 28 + u), 22), e(m(l, c, h), 1770035416, w(b, 32 + u), 7), e(m(l, c, h), 2336552879, w(b, 36 + u), 12), e(m(l, c, h), 4294925233, w(b, 40 + u), 17), e(m(l, c, h), 2304563134, w(b, 44 + u), 22), e(m(l, c, h), 1804603682, w(b, 48 + u), 7), e(m(l, c, h), 4254626195, w(b, 52 + u), 12), e(m(l, c, h), 2792965006, w(b, 56 + u), 17), e(m(l, c, h), 1236535329, w(b, 60 + u), 22), e(v(l, c, h), 4129170786, w(b, 4 + u), 5), e(v(l, c, h), 3225465664, w(b, 24 + u), 9), e(v(l, c, h), 643717713, w(b, 44 + u), 14), e(v(l, c, h), 3921069994, w(b, u), 20), e(v(l, c, h), 3593408605, w(b, 20 + u), 5), e(v(l, c, h), 38016083, w(b, 40 + u), 9), e(v(l, c, h), 3634488961, w(b, 60 + u), 14), e(v(l, c, h), 3889429448, w(b, 16 + u), 20), e(v(l, c, h), 568446438, w(b, 36 + u), 5), e(v(l, c, h), 3275163606, w(b, 56 + u), 9), e(v(l, c, h), 4107603335, w(b, 12 + u), 14), e(v(l, c, h), 1163531501, w(b, 32 + u), 20), e(v(l, c, h), 2850285829, w(b, 52 + u), 5), e(v(l, c, h), 4243563512, w(b, 8 + u), 9), e(v(l, c, h), 1735328473, w(b, 28 + u), 14), e(v(l, c, h), 2368359562, w(b, 48 + u), 20), e(g(l, c, h), 4294588738, w(b, 20 + u), 4), e(g(l, c, h), 2272392833, w(b, 32 + u), 11), e(g(l, c, h), 1839030562, w(b, 44 + u), 16), e(g(l, c, h), 4259657740, w(b, 56 + u), 23), e(g(l, c, h), 2763975236, w(b, 4 + u), 4), e(g(l, c, h), 1272893353, w(b, 16 + u), 11), e(g(l, c, h), 4139469664, w(b, 28 + u), 16), e(g(l, c, h), 3200236656, w(b, 40 + u), 23), e(g(l, c, h), 681279174, w(b, 52 + u), 4), e(g(l, c, h), 3936430074, w(b, u), 11), e(g(l, c, h), 3572445317, w(b, 12 + u), 16), e(g(l, c, h), 76029189, w(b, 24 + u), 23), e(g(l, c, h), 3654602809, w(b, 36 + u), 4), e(g(l, c, h), 3873151461, w(b, 48 + u), 11), e(g(l, c, h), 530742520, w(b, 60 + u), 16), e(g(l, c, h), 3299628645, w(b, 8 + u), 23), e(y(l, c, h), 4096336452, w(b, u), 6), e(y(l, c, h), 1126891415, w(b, 28 + u), 10), e(y(l, c, h), 2878612391, w(b, 56 + u), 15), e(y(l, c, h), 4237533241, w(b, 20 + u), 21), e(y(l, c, h), 1700485571, w(b, 48 + u), 6), e(y(l, c, h), 2399980690, w(b, 12 + u), 10), e(y(l, c, h), 4293915773, w(b, 40 + u), 15), e(y(l, c, h), 2240044497, w(b, 4 + u), 21), e(y(l, c, h), 1873313359, w(b, 32 + u), 6), e(y(l, c, h), 4264355552, w(b, 60 + u), 10), e(y(l, c, h), 2734768916, w(b, 24 + u), 15), e(y(l, c, h), 1309151649, w(b, 52 + u), 21), e(y(l, c, h), 4149444226, w(b, 16 + u), 6), e(y(l, c, h), 3174756917, w(b, 44 + u), 10), e(y(l, c, h), 718787259, w(b, 8 + u), 15), e(y(l, c, h), 3951481745, w(b, 36 + u), 21), o = x(o, d), a = x(a, l), s = x(s, c), r = x(r, h)
                        }
                        return function f(e, t, i, n) {
                            for (var o, a = "", s = 0, r = 0, d = 3; 0 <= d; d--) s = 255 & (r = arguments[d]), s <<= 8, s |= 255 & (r >>>= 8), s <<= 8, s |= 255 & (r >>>= 8), s <<= 8, a += (void 0, o = ((s |= r >>>= 8) >>> 0).toString(16), "00000000".substr(0, 8 - o.length) + o);
                            return a
                        }(r, s, a, o).toUpperCase()
                    }()
                }
            };
        e.exports = function(e) {
            return i.MD5(e)
        }
    },
    function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, o = i(2),
            a = i(35),
            s = {
                h: {
                    name: "helper",
                    dir: "helper"
                }
            }, r = /(^\s*)|(\s*$)/g,
            d = "".trim ? function(e) {
                return e.trim()
            } : function(e) {
                return (e || "").replace(r, "")
            };

        function l(e) {
            this.content = e || "", this.helper = new a
        }
        o.extend(l, {
            render: function(e, t) {
                return new l(e).render(t)
            },
            registHelper: function() {
                var e = {}, t = [].slice.call(arguments);
                2 == t.length && "string" == typeof t[0] ? e[t[0]] = t[1] : "1" == t.length && "object" == n(t[0]) && (e = t[0]), e && o.extend(a.prototype, e)
            }
        }), o.extend(l.prototype, {
            version: "1.0",
            setContent: function(e) {
                this.fn = null, this.directive = null, this.content = e
            },
            render: function(e) {
                this.compile();
                var t, i, n = this.directive || {};
                for (var o in s) {
                    if (i = s[o], e[t = "undefined" == typeof n[o] ? i.name : n[o]]) throw new Error("指令{ " + t + " }冲突...");
                    e[t] = this[i.dir]
                }
                var a = this.fn(e);
                for (o in s) i = s[o], delete e[t = "undefined" == typeof n[o] ? i.name : n[o]];
                return a
            },
            compile: function() {
                if (!this.fn) {
                    this.directive = {};
                    var i = this,
                        e = "var p = [];with(obj){p.push('" + this.content.replace(/[\r\t\n]/g, " ").replace(/<%@(.*?)%>/g, function(e, t) {
                            return t && (e = t.split(":")) && e.length && (i.directive[d(e[0])] = d(e[1])), ""
                        }).replace(/<%!--(.*?)--%>/g, "").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');";
                    this.fn = new Function("obj", e)
                }
                return this
            },
            registHelper: function() {
                var e = this[s.h.dir],
                    t = [].slice.call(arguments);
                2 == t.length && "string" == typeof t[0] ? e[t[0]] = t[1] : "1" == t.length && "object" == n(t[0]) && o.extend(e, t[0])
            }
        }), e.exports = l
    },
    function(e, t, i) {
        "use strict";
        var n = i(3),
            o = i(2),
            a = {
                1: "下载中断，请刷新页面重试",
                2: "下载错误，请刷新页面重试",
                3: "解码错误，请使用搜狐视频APP观看此视频",
                4: "系统不支持此格式的视频，请使用搜狐视频APP观看",
                100: "您所在的国家或地区，没有此视频的播放版权，去看看其他视频吧",
                101: "该视频版权已到期，去看看其他视频吧",
                102: "抱歉，该付费剧集仅支持APP专享",
                103: "本集为APP专享视频，请使用搜狐视频APP观看",
                104: "因版权原因，仅支持APP专享",
                105: "本片为付费视频，购买后可以进行观看",
                106: "因版权原因，仅支持APP专享",
                200: "数据处理完成",
                201: "无效视频数据,请刷新重试",
                202: "无效视频数据",
                203: "数据结构错误",
                204: "解析数据出错",
                300: "您的浏览器不支持播放功能，请使用搜狐视频客户端",
                301: "该视频目前只支持5分钟观看，观看完整视频，请使用搜狐视频客户端",
                302: "UC浏览器不支持播放功能，建议使用系统浏览器或请使用搜狐视频客户端",
                303: "直播请使用搜狐视频客户端",
                304: "本片仅供试看，如果需要观看更多内容，请下载搜狐视频App",
                305: "您的浏览器不支持直播功能，请使用搜狐视频客户端",
                306: "播放地址无效，如果需要观看更多内容，请下载搜狐视频App",
                307: "尽享高清极速观看，打开搜狐视频APP",
                400: "网络超时，请确保网络稳定后刷新重试",
                401: "视频正在上传或视频无效，先看看其他视频吧",
                402: "没有视频ID，去看看其他视频吧",
                403: "无法获取视频信息，去看看其他视频吧",
                404: "渠道接口请求错误，请刷新重试",
                405: "渠道接口参数错误，请刷新重试",
                406: "渠道接口超时，请刷新重试",
                407: "版权接口请求错误，去看看其他视频吧",
                408: "56视频信息请求错误，去看看其他视频吧",
                409: "视频正在审核，先去看看其他视频吧",
                410: "该视频无效，先去看看其他视频吧",
                500: "资源加载失败，去看看其他视频吧"
            };
        n.is56 && o.extend(a, {
            3: "解码错误，请使用搜56视频APP观看此视频",
            4: "系统不支持此格式的视频，请使用56视频APP观看"
        }), e.exports = a
    },
    function(e, t, i) {
        "use strict";
        var n = i(2),
            o = (i(22), {
                RESOLUTION_MODE: {
                    nor: "流畅",
                    hig: "高清",
                    sup: "超清",
                    ori: "原画",
                    app: "超清app"
                }
            }),
            a = {
                autoplay: !0,
                playType: "vod",
                resolutionType: "nor",
                resolutionTypeList: ["nor", "hig", "sup", "ori", "app"],
                posterType: "horizon",
                timeLimit: 0,
                adClose: "0",
                appid: "tv",
                channeled: "",
                fullscreenType: 0,
                showCount: !0,
                isVedio: !1,
                playback: !1,
                fancyFullscreen: !1,
                isShowPoster: !0,
                isLowestResolution: !1,
                resolution: !1,
                closeSeek: !1
            };
        o.initConfig = function(e) {
            return n.extend({}, e, a)
        }, e.exports = o
    },
    function(e, t, i) {
        "use strict";
        i(2);
        var n = i(5),
            r = i(1).browser,
            a = i(1).os,
            s = i(1).device,
            d = navigator.userAgent,
            l = {
                FORCE_USE_DOWNLOADURL_LIST: [/M032.*JRO03H/i],
                FORCE_USE_M3U8_LIST: [],
                SERVICE_BLACK_LIST: {
                    ios: [],
                    android: [],
                    winPhone: []
                },
                M3U8_BLACK_LIST: {
                    ios: [],
                    android: [/HM\sNOTE/i, /Build\/HM.*XiaoMi\/MiuiBrowser/i, /vivo/i, /ZTE/i, /TCL/i, /Coolpad/i, /M032.*JRO03H/i, /MQQBrowser(\/4\.|\s4\.)+/i],
                    winPhone: []
                },
                MP4_BLACK_LIST: {
                    ios: [],
                    android: [],
                    winPhone: []
                },
                VIDEO_DOWNLOAD_SRC_LIST: ["1000", "1102"],
                VIDEO_M3U8_SRC_LIST: ["1080", "1128"]
            }, c = function c(e, t) {
                for (var i, n = !1, o = t[e] || [], a = 0, s = o.length; a < s; a++)
                    if ((i = o[a]).test(d)) {
                        n = !r.qq || -1 !== i.toString().indexOf("QQBrowser");
                        break
                    }
                return n
            }, h = function h() {
                var e = n.getQueryString("src") || n.getQueryString("SRC") || "";
                return "" !== e && 4 <= e.length && (e = e.substr(0, 4)), e
            };
        l.isInBlackList = function(e) {
            var t = "",
                i = !1;
            return a.ios ? t = "ios" : a.android ? t = "android" : a.wp && (t = "winPhone"), "m3u8" === e && (c(t, l.SERVICE_BLACK_LIST) || c(t, l.M3U8_BLACK_LIST)) ? i = !0 : "mp4" === e && (c(t, l.SERVICE_BLACK_LIST) || c(t, l.MP4_BLACK_LIST)) && (i = !0), i
        }, l.isForceUseM3u8 = function() {
            var e = !1,
                t = h();
            if (0 <= this.VIDEO_M3U8_SRC_LIST.indexOf(t) && (e = !0), !e)
                for (var i = l.FORCE_USE_M3U8_LIST, n = 0, o = i.length; n < o; n++)
                    if (i[n].test(d)) {
                        e = !0;
                        break
                    }
            return e
        }, l.isForceUseDownloadUrl = function() {
            var e = !1,
                t = h();
            if (0 <= this.VIDEO_DOWNLOAD_SRC_LIST.indexOf(t) && (e = !0), !e) {
                for (var i = l.FORCE_USE_DOWNLOADURL_LIST, n = 0, o = i.length; n < o; n++)
                    if (i[n].test(d)) {
                        e = !0;
                        break
                    }(s.coolpad && r.uc || a.android && 0 == (a.version || "").indexOf("2.3")) && (e = !0)
            }
            return e
        }, e.exports = l
    },
    function(e, t, i) {
        "use strict";
        var o = i(4),
            a = (i(2), i(6), i(7)),
            s = i(9),
            n = {
                userInfo: null,
                isLogin: function() {
                    return !!this.userInfo
                },
                isVip: function(e) {
                    return !!this.userInfo && 2 == this.userInfo.feetype
                },
                isNoAd: function(e) {
                    return !!this.userInfo && (1 == this.userInfo.feetype || 2 == this.userInfo.feetype)
                },
                getUserInfo: function() {
                    var n = this;
                    return new a(function(t, i) {
                        n.userInfo ? t(n.userInfo) : s.getJSON("https://my.tv.sohu.com/user/a/profile/currinfo.do?end=0&callback=?").then(function(e) {
                            o.log("用户信息", e.data.data), "success" == e.status ? 1 == e.data.status ? (n.userInfo = e.data.data, t(e.data.data)) : t(!1) : (o.error(e), i("网络异常"))
                        })
                    })
                },
                getmkey: function(e, n) {
                    return new a(function(t, i) {
                        s.getJSON("//api.store.sohu.com/film/pc/checkpermission?callback=?", {
                            vid: e,
                            aid: n
                        }).then(function(e) {
                            "success" == e.status ? (console.log("*********checkpermission***********"), console.log(e), 200 == e.data.status ? t(e.data.data.mkey) : t(!1)) : (o.error(e), i("网络异常"))
                        })
                    })
                }
            };
        e.exports = n
    },
    function(e, t) {
        "use strict";
        e.exports = {}
    },
    function(e, t, i) {
        "use strict";
        var n = function h(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(15));
        var r = i(38),
            o = i(37),
            d = i(26),
            a = i(32),
            l = i(4),
            c = (i(6), i(7)),
            s = {
                loadData: function(s) {
                    var e = o(s).then(function() {
                        return new c(function(e) {
                            if (s.liveId) r.loadData({
                                liveId: s.liveId,
                                appid: s.appid
                            }).then(e);
                            else if (s.vid) {
                                var t = s.ugctoken || {}, i = t._cn || "",
                                    n = t._ts || "",
                                    o = t.token || "",
                                    a = {
                                        vid: s.vid,
                                        site: s.site,
                                        appid: s.appid
                                    };
                                i && n && o && (a._erp_cn = i, a._erp_ts = n, a.token = o), d.loadData(a).then(e)
                            } else e({
                                code: "402"
                            })
                        })
                    }),
                        t = e.then(function() {
                            var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                            return a.check(e.data)
                        }),
                        i = e.then(function() {
                            var e = (0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {}).data || {};
                            return new c(function(t) {
                                n["default"].loadData({
                                    vid: e.vid,
                                    plid: e.plid,
                                    videoOrder: e.videoOrder,
                                    site: e.site,
                                    videoType: e.video_type,
                                    isSohu: e.isSohu,
                                    cid: e.cid,
                                    channeled: window.videoData && window.videoData.channeled || ""
                                }).then(function() {
                                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                                    t({
                                        code: e.code || "200",
                                        data: e
                                    })
                                })
                            })
                        });
                    return new c(function(o) {
                        c.all([e, t, i]).then(function(e) {
                            var t = e[0],
                                i = e[1],
                                n = e[2];
                            l.log("视频信息-->", t), l.log("版权信息-->", i), l.log("渠道信息-->", n);
                            e = {
                                code: "200",
                                msg: i.msg || "",
                                data: {
                                    mcode: t.mcode || "",
                                    videoData: t.data,
                                    channelInfo: n.data
                                }
                            };
                            return "200" !== i.code ? (e.code = i.code, o(e)) : (0 == n.data.time && (n.code = "103"), "200" !== n.code ? (e.code = n.code, o(e)) : "200" !== t.code ? (e.code = t.code, o(e)) : void o(e))
                        })
                    })
                }
            };
        e.exports = s
    },
    function(e, t, i) {
        "use strict";
        var d = function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        var l = i(8),
            r = i(2),
            a = i(1).os,
            s = i(12),
            n = i(17),
            c = i(3),
            h = i(6),
            u = i(9),
            p = i(5),
            f = i(7),
            m = i(14),
            v = (i(4), i(10)),
            g = i(3).REQUEST_MAX_COUNT;

        function y(e) {
            e = e || {};
            var t = l.getChanneled(),
                i = e.vid || "",
                n = e.plid || e.aid || e.sid || "",
                r = "//z2.m.tv.sohu.com/pv.gif?";
            c.is56 && (r = "//ce.56.com/pv.gif?"), r = r + "url=" + encodeURIComponent(location.href) + "&refer=" + (p.getParam("landingrefer") || encodeURIComponent(document.referrer || "//m.tv.sohu.com/")) + "&uid=" + h("SUV") + "&webtype=" + l.getConnectionType() + "&screen=" + c.ScreenSize + "&catecode=" + (e.cateCode || e.cate_code || "") + "&plid=" + n + "&vid=" + i + "&os=" + a.type + "&platform=" + a.platform + "&passport=" + s.getPassport() + "&channeled=" + t + "&MTV_SRC=" + encodeURIComponent(d["default"].get());
            try {
                h("SOHUSVP") || v.pingback("play_fail_cookie")
            } catch (o) {}
            return new f(function(i, e) {
                var n, o = !1,
                    a = 0;
                ! function s() {
                    if (!o) {
                        if (10 < (a += 1)) return i(), void v.pingback("play_fail_10cookie");
                        var e = r + "&_=" + (new Date).getTime(),
                            t = setTimeout(s, 300);
                        (n = new Image).onload = n.onabort = n.onerror = function(e) {
                                clearTimeout(t), o || n.complete && (o = !0, i())
                        }, n.src = e
                    }
                }()
            })
        }

        function w(e) {
            return r.extend(e, {
                tvid: e.tvid || e.tv_id || "",
                sid: e.sid || e.aid,
                plid: e.plid || e.aid,
                tvname: e.tvname || e.video_name,
                videoName: e.tvname || e.video_name,
                videoCount: e.videoCount || e.total_video_count,
                videoOrder: e.videoOrder || e.video_order,
                totalSet: e.totalSet || e.total_video_count,
                cateCode: e.cateCode || e.cate_code,
                startTime: e.startTime || e.start_time || 0,
                endTime: e.endTime || e.end_time || 0,
                playCount: e.playCount || e.play_count || 0,
                ipLimit: e.ipLimit || e.ip_limit || 0,
                mobileLimit: e.mobileLimit || e.mobile_limit || 0,
                h5Limit: e.h5Limit || e.h5_limit || 0,
                areaId: e.areaId || e.area_id || 6,
                verHighPic: e.verHighPic || e.ver_high_pic || e.video_big_pic || e.ver_big_pic || "",
                horHighPic: e.horHighPic || e.hor_high_pic || e.video_big_pic || e.hor_big_pic || "",
                dataType: e.dataType || e.data_type || 0
            }), e
        }
        e.exports = {
            loadData: function(o) {
                var a = {
                    code: "200",
                    data: null
                }, s = "//m.tv.sohu.com/phone_playinfo?callback=?";
                return (o = r.applyIf(o, n.API_PARAMS)).uid = c.uid, o.muid = c.muid, o._c = h.isEnable() ? 1 : 0, o.pt = l.getUserPt(), o.qd = "undefined" != typeof m.channelNum && "0" !== m.channelNum ? m.channelNum : "680", o.src = d["default"].get(), o.appid = o.appid || "tv", o.ssl = "http:" == location.protocol ? 2 : 1, "undefined" == typeof o.site && (o.site = 1), c.is56 && (o.SOHUSVP = h("SOHUSVP")), new f(function(t, e) {
                    if (!o.vid || !o.uid || !o.muid) return a.code = "402", void t(a);
                    var i = 0;
                    ! function n() {
                        i += 1, u.getJSON(s, o).then(function(e) {
                            (e = e.data || {}).data && 200 === e.status ? (a.data = w(e.data), a.mcode = e.mCode || "", y(a.data).then(function() {
                                t(a)
                            })) : e.data && 100 === e.status ? (a.code = "106", t(a)) : 1 == o.site ? (o.site = 2, u.getJSON(s, o).then(function(e) {
                                (e = e.data || {}).data && 200 === e.status ? (a.data = w(e.data), a.mcode = e.mCode || "", y(a.data).then(function() {
                                    t(a)
                                })) : (e.data && 100 === e.status ? a.code = "106" : (a.code = "401", "10509" == e.errorCode && (a.code = "409"), "10510" == e.errorCode && (a.code = "410")), a.data = w(e.data), t(a))
                            }, function() {
                                a.code = "401", t(a)
                            })) : (a.code = "401", "10509" == e.errorCode && (a.code = "409"), "10510" == e.errorCode && (a.code = "410"), t(a))
                        }, function() {
                            g <= i ? (a.code = "403", t(a)) : n()
                        })
                    }()
                })
            },
            loadVideoSrc: function(n) {
                n = n || {};
                var o = {
                    code: "200",
                    data: null
                };
                return (n = r.applyIf(n)).id = n.id || window.videoData.vid || "59632328", n.isenc = 0, new f(function(t, e) {
                    if (!n.id) return o.code = "402", void t(o);
                    ! function i() {
                        u.getJSON("//api.my.tv.sohu.com/v2/video/play.do?callback=?", n).then(function(e) {
                            (e = e.data || {}).playinfo ? o.data = function u(e) {
                                for (var t, i, n = [], o = 0, a = {}, s = {}, r = {}, d = {
                                        1: "hig",
                                        2: "nor",
                                        21: "sup",
                                        31: "original",
                                        51: "mobile"
                                    }, l = e.playinfo || [], c = 0, h = l.length; c < h; c++) i = d[(t = l[c]).versionCode], n = n.concat(t.downloadUrl), o = t.totalLength, i && (a[i] = [t.m3u8PlayUrl], s[i] = t.mp4PlayUrl, r[i] = t.lengths);
                                return {
                                    duration: o,
                                    durations: r,
                                    urls: {
                                        downloadUrl: n,
                                        m3u8: a,
                                        mp4: s
                                    }
                                }
                            }(e) : o.code = e.errorCode, t(o)
                        })
                    }()
                })
            }
        }
    },
    function(e, t) {
        "use strict";
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, i = !! window.ActiveXObject;

        function s(e, t) {
            i ? e.style.filters = "alpha(opacity=" + 100 * t + ")" : e.style.opacity = t
        }

        function r(e) {
            for (var t = (e = e.toLowerCase().split("-"))[0], i = 1, n = e.length; i < n; i++) t += e[i].replace(/\b(\w)|\s+(\w)/g, function(e) {
                return e.toUpperCase()
            });
            return t
        }

        function d(e, t) {
            var i = r(t = t.toLowerCase()),
                n = null;
            return e.style[i] ? n = e.style[i] : e.currentStyle ? n = e.currentStyle[i] : document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(e, null)) && (n = n.getPropertyValue(t)), n
        }
        var n = {
            hide: function(e) {
                e && (e.style.display = "none")
            },
            show: function(e, t) {
                e && (t = t || "block", e.style.display = t)
            },
            hasClass: function(e, t) {
                var i = e.classList;
                if (i) return i.contains(t);
                var n = e.className;
                return !(!n || !t) && (n == t || -1 != n.search(new RegExp("\\b" + t + "\\b")))
            },
            addClass: function(e, t) {
                this.hasClass(e, t) || (e.classList ? e.classList.add(t) : (e.className && (t = " " + t), e.className = e.className + t))
            },
            removeClass: function(e, t) {
                e.classList ? e.classList.remove(t) : e.className && t && (e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), ""))
            },
            css: function() {
                var e = Array.prototype.slice.call(arguments);
                if (!(e.length <= 1)) return 2 == e.length && "string" == typeof e[1] ? d.apply(null, e) : function o() {
                    if (!(arguments.length <= 1)) {
                        var e = arguments[0],
                            t = arguments[1],
                            i = {};
                        if ("object" === (void 0 === t ? "undefined" : a(t)))
                            for (var n in t) i[n] = d(e, n), "opacity" == n.toLowerCase() ? s(e, t[n]) : e.style[r(n)] = t[n];
                        else i[arguments[1]] = d(e, arguments[1]), "opacity" == arguments[1].toLowerCase() ? s(e, arguments[2]) : e.style[r(arguments[1])] = arguments[2];
                        return i
                    }
                }.apply(null, e)
            },
            width: function() {
                var e = Array.prototype.slice.call(arguments);
                if (!(e.length < 1)) {
                    var t = e[0];
                    if (1 == e.length) {
                        if ("none" != this.css(t, "display")) return t.offsetWidth || parseInt(this.css(t, "width"));
                        var i = this.css(t, {
                            display: "",
                            visibility: "hidden",
                            position: "absolute"
                        }),
                            n = t.clientWidth || parseInt(this.css(t, "width"));
                        return this.css(t, i), n
                    }
                    n = "" + e[1];
                    /^\d+$/.test(n) && (n += "px"), css.css(t, "width", n)
                }
            }
        };
        e.exports = n
    },
    function(e, t, i) {
        "use strict";
        var n = function(e, t, i) {
            return t && o(e.prototype, t), i && o(e, i), e
        };

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = i(1),
            s = a.os,
            r = a.browser,
            d = i(16),
            l = (i(10), n(c, [{
                key: "requestFullscreen",
                value: function() {
                    var e = navigator.userAgent.toLowerCase();
                    if (!s.ios && -1 != e.indexOf("sohunews") || s.android && r.sohuVideoApp || this.player.config.fancyFullscreen) return this.requestFancyFullscreen();
                    var t = this.el,
                        i = this.getElemFullscreen(t);
                    i && i["catch"](function(e) {}), this.isNativeDOMFullscreen() || this.requestVideoNativeFullscreen(), s.ios && 12.2 <= parseFloat(s.version) ? setTimeout(function() {
                        this.isFullScreen()
                    }.bind(this), 300) : this.isFullScreen(), s.ios || this.requestFancyFullscreen()
                }
            }, {
                key: "isFullScreen",
                value: function() {
                    this.isNativeFullscreen() || this.requestFancyFullscreen()
                }
            }, {
                key: "exitFullscreen",
                value: function() {
                    this.exitFancyFullscreen(), this.el;
                    try {
                        document.exitFullscreen ? document.exitFullscreen()["catch"](function(e) {}) : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.cancelFullScreen && document.cancelFullScreen(), this.exitVideoNativeFullscreen()
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "requestVideoNativeFullscreen",
                value: function() {
                    this.player.video.requestFullscreen ? this.player.video.requestFullscreen()["catch"](function(e) {}) : this.player.video.webkitEnterFullscreen()
                }
            }, {
                key: "exitVideoNativeFullscreen",
                value: function() {
                    this.player.video.webkitExitFullscreen()
                }
            }, {
                key: "getElemFullscreen",
                value: function(e) {
                    return e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : void 0
                }
            }, {
                key: "requestFancyFullscreen",
                value: function() {
                    var t = this;
                    try {
                        if (s.android && d.lock()) {
                            var e = this.getElemFullscreen(document.documentElement);
                            e && e["catch"](function(e) {
                                t.addFancyFullscreenStyleClass()
                            }), this.tryLockScreenOrientation()
                        } else this.addFancyFullscreenStyleClass()
                    } catch (i) {
                        this.addFancyFullscreenStyleClass()
                    }
                }
            }, {
                key: "exitFancyFullscreen",
                value: function() {
                    this.removeFancyFullscreenStyleClass(), s.android && window.screen.orientation.unlock()
                }
            }, {
                key: "tryLockScreenOrientation",
                value: function() {
                    var e = this,
                        t = parseInt(this.player.dataModel.vh),
                        i = parseInt(this.player.dataModel.vw);
                    t && i && i < t ? this.addFancyFullscreenStyleClass() : window.screen.orientation.lock("landscape-primary").then(function() {})["catch"](function() {
                        e.addFancyFullscreenStyleClass()
                    })
                }
            }, {
                key: "getFullScreenElement",
                value: function() {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                }
            }, {
                key: "addFancyFullscreenStyleClass",
                value: function() {
                    (document.documentElement || document.body).classList.add("x-fancy-fs"), this.el.classList.add("x-player-fancy-fs"), this.player.emit("enterFancyFullscreen"), this.isInFancyScreen = !0
                }
            }, {
                key: "removeFancyFullscreenStyleClass",
                value: function() {
                    (document.documentElement || document.body).classList.remove("x-fancy-fs"), this.el.classList.remove("x-player-fancy-fs"), this.player.emit("exitFancyFullscreen"), this.isInFancyScreen = !1
                }
            }, {
                key: "isNativeFullscreen",
                value: function() {
                    return this.isNativeDOMFullscreen() || this.isVideoFullscreen()
                }
            }, {
                key: "isNativeDOMFullscreen",
                value: function() {
                    return this.getFullScreenElement() == this.el
                }
            }, {
                key: "isVideoFullscreen",
                value: function() {
                    return this.getFullScreenElement() == this.player.video || !! this.player.video.webkitDisplayingFullscreen
                }
            }]), c);

        function c(e, t) {
            var i = this;
            ! function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, c), this.player = e, this.config = t, this.el = this.player.el.querySelector(".x-player");
            var n, o = ("onfullscreenchange" in document ? n = "fullscreenchange" : "onwebkitfullscreenchange" in document ? n = "webkitfullscreenchange" : "onmozfullscreenchange" in document ? n = "mozfullscreenchange" : "msRequestFullscreen" in document && (n = "MSFullscreenChange"), n);
            !s.ios && o && (this.player.video.addEventListener(o, function(e) {
                i.isVideoFullscreen() || i.getFullScreenElement() || i.exitFancyFullscreen()
            }, !1), document.addEventListener(o, function(e) {
                i.isNativeFullscreen() || i.getFullScreenElement() || i.exitFancyFullscreen()
            }, !1))
        }
        e.exports = l
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = i(1).os,
            n = navigator.userAgent,
            r = i(1).browser,
            o = (n.toLowerCase(), i(9)),
            d = function d() {
                var e = !1;
                return /MQQBrowser/gim.test(n) && (e = !0), e
            }, l = function l(e) {
                return o({
                    url: "//m.tv.sohu.com/h5/coopauth/" + ("recommend" === e ? "1387" : "1373") + ".json?callback=?&platform=5",
                    dataType: "jsonp"
                })
            };
        t["default"] = {
            open: function() {
                var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : window.__videoData || window.videoData,
                    t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : "play",
                    i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : "";
                if (s.ios && 9 <= parseFloat(s.version) && !d()) {
                    var n = this.makeAction(e, t);
                    "play" == t ? location.href = "http://www.56.com/help/download/index.html?download=1&action=" + n : "index" == t && (location.href = "http://www.56.com/help/download/index.html?download=1"), setTimeout(function() {
                        location.reload()
                    }, 1e3)
                } else this.openByAction(e, t, i)
            },
            openByAction: function() {
                var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {}, t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : "play",
                    i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : "",
                    n = this.makeAction(e, t);
                if (s.ios) location.href = n, d && setTimeout(function() {
                    location.href = "http://www.56.com/help/download/index.html?download=1"
                }, 500);
                else {
                    var o = document.createElement("iframe");
                    o.style.display = "none", o.src = n;
                    var a = document.body;
                    a.appendChild(o), setTimeout(function() {
                        a.removeChild(o), o.onload = null, o = null
                    }, 200), r.weixin ? setTimeout(function() {
                        location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.Android56&ckey=CK1356521354532&android_schema=" + encodeURIComponent(n)
                    }, 1e3) : l(i).then(function(e) {
                        var t = e.data.cooperation.link;
                        setTimeout(function() {
                            window.location.href = t
                        }, 500)
                    })
                }
            },
            makeAction: function() {
                var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {}, t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : "play",
                    i = "";
                return "play" == t ? (i = "fivesixapp://action.cmd?action=1.1&enterid=4", e.vid && (i += "&vid=" + e.vid), "undefined" != typeof e.site && (i += "&site=" + e.site)) : "index" == t && (i = "fivesixapp://action.cmd"), i
            }
        }
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = i(6),
            r = i(5),
            d = i(3),
            n = {
                persist: function() {
                    var e, t = r.getQueryString("lqd"),
                        i = r.getQueryString("lcode"),
                        n = r.getQueryString("lmcc"),
                        o = (e = {
                            domain: "tv.sohu.com",
                            path: "/"
                        }, d.is56 && (e = {
                            domain: "m.56.com",
                            path: "/"
                        }), e);
                    1 == n || function a() {
                        for (var e = ["360kan.com", "baidu.com", "baidu.mobi", "baidu.cn", "hao123.com", "360.cn", "3600.com", "c.360webcache.com", "so.com", "duba.net", "duba.com", "rising.cn", "sogou.com", "soso.com", "2345.com", "2345x.com", "2345y.com"], t = !1, i = 0, n = e.length, o = r.getParam("landingrefer") || document.referrer; i < n; i++)
                            if (-1 != o.indexOf(e[i])) {
                                t = !0;
                                break
                            }
                        return t
                    }() ? (s("_LQD", null, o), s("_LCODE", null, o)) : (t && s("_LQD", t, o), i && s("_LCODE", i, o))
                }
            };
        n.persist(), t["default"] = n
    },
    function(e, t, i) {
        "use strict";
        var d = i(1).browser,
            l = i(1).os,
            r = i(2),
            c = i(8),
            h = i(9),
            s = i(6),
            u = i(5),
            p = i(3),
            n = i(7),
            f = i(4);
        var o, a = (o = {
                domain: "sohu.com",
                path: "/"
            }, p.is56 && (o = {
                domain: "56.com",
                path: "/"
            }), o),
            m = {
                openTime: 500,
                updateTime: 36e5,
                maxSaveCounts: 10,
                srcSettings: {
                    1106: /^tv\.sohu\.com$|^pad\.tv\.sohu\.com$/i,
                    1107: /^my\.tv\.sohu\.com$/i,
                    1108: /^sports\.sohu\.com$/i,
                    1105: /^(m|wap|s|3g)\.(tv|s)\.sohu\.com$|^(t|t1|t2)\.m\.tv\.sohu\.com$|^sohutv\.hao3608\.com$/i,
                    1109: /^(news|auto|media|www|yule|mil)\.sohu\.com$/i,
                    1001: /^m\.sohu\.com$|^(3g|zhibo|wap)\.sohu\.com$|^(.*)m\.sohu\.com$|^m\.club\.sohu\.com$|^api\.k\.sohu\.com$/i,
                    1110: /^(.*)\.baidu\.com$|^(.*)baidu\.mobi$|^webapp\.cbs\.baidu\.com$/i,
                    1112: /^(.*)hao123\.com$/i,
                    1113: /^v\.m\.liebao\.cn$|^v\.duba\.com$/i,
                    1114: /^(.*)2345\.com$/i,
                    1115: /^v\.sogou\.com$|^m\.kan\.sogou\.com$|^tv\.sogou\.com$/i,
                    1068: /^sogou\.com$|^(.*)\.sogou\.com$/i,
                    1116: /^(.*)sm\.cn$|^(.*)uodoo\.com$/i,
                    1006: /^tv\.uc\.cn$/i,
                    1007: /^hao\.uc\.cn$/i,
                    1117: /^(news|inews)\.uc\.cn$/i,
                    1033: /^m\.video\.so\.com$/i,
                    1075: /^(.*)(so|haosou)\.com$/i,
                    1118: /^(.*)weibo\.com$|^(.*)weibo\.cn$/i,
                    1119: /^(.*)qzone\.qq\.com$/i,
                    1120: /^(.*)10086\.cn$/i,
                    1123: /^(.*)(google|g).(.*)$/i,
                    1121: /^(.*)wapreach\.com$|^(.*)\.app111\.com$|^(.*)homeinns\.cc$|^(hao|hao123|m)\.xiaomi\.com$/i,
                    1122: /^video\.wapreach\.com$|^video\.browser\.miui\.com$|^v\.html5\.qq\.com$|^kanpian\.easou\.com$|^video\.nearme\.com\.cn$/i,
                    1124: /^(.*)soso\.com$|^(.*)easou\.com$|^(.*)bing\.com$/i
                },
                getLocalData: function(e) {
                    var t = null,
                        i = [];
                    try {
                        t = localStorage.getItem("localChannelInfo")
                    } catch (s) {
                        f.log("不支持localStorage-->", s)
                    }
                    if (t && (i = JSON.parse(t)), void 0 === e) return i;
                    for (var n, o = 0, a = i.length; o < a; o++)
                        if ((n = i[o]).channelSrc == e && Date.now() < n.time + this.updateTime) return n;
                    return null
                },
                setLocalData: function(e) {
                    var t = r.extend({}, e);
                    t.time = Date.now();
                    for (var i = this.getLocalData() || [], n = !1, o = 0, a = i.length; o < a; o++)
                        if (i[o].channelSrc == t.channelSrc) {
                            n = !0, i[o] = t;
                            break
                        }
                    n || i.unshift(t), i.length > this.maxSaveCounts && (saveList.length = this.maxSaveCounts);
                    try {
                        localStorage.setItem("localChannelInfo", JSON.stringify(i))
                    } catch (s) {
                        f.log("不支持localStorage-->", s)
                    }
                },
                loadChannelInfo: function(e) {
                    var a = this,
                        s = (e = e || {}).channelSrc || this.getSrc();
                    4 < (s + "").length && (s = s.substr(0, 4));
                    var r = {
                        appointUrl: c.getSohuDefaultApplink(),
                        startapp: "1",
                        channelSrc: s,
                        cover: 1,
                        isClosed: 0,
                        timeLimit: 0,
                        channelNum: 680,
                        cid: "",
                        quality: "nor,hig,sup"
                    };
                    return new n(function(i, e) {
                        if (s = parseInt(s, 10), null !== a.getLocalData(s)) {
                            var t = a.getLocalData(s);
                            "undefined" == typeof t.cover && (t.cover = 1, t.isClosed = 0, t.timeLimit = 0, t.quality = "nor,hig,sup", t.channelNum = 680), "undefined" == typeof t.cid && (t.cid = ""), i(t)
                        } else {
                            s = parseInt(s, 10), isNaN(s) && (s = "0");
                            var n = "//m.tv.sohu.com/h5/cooperation/" + s + ".json?pos=1&platform=" + c.getUserPt() + "&callback=?";
                            f.log("获取渠道信息ajax:", n);
                            var o = new Date;
                            o.setHours(0), o.setMinutes(0), o.setSeconds(0), h.getJSON(n, {
                                t: o.getTime()
                            }).then(function(e) {
                                if ((e = (e = e || {}).data || {}).records && 0 < e.records.length) {
                                    var t = e.records[0];
                                    l.ipad || l.iphone || d.weixin || (r.appointUrl = t.link), r.startapp = "undefined" != typeof t.startapp ? t.startapp + "" : "1", r.cover = t.cover, r.isClosed = t.isClosed, r.cid = t.cid || "", r.limitIds = t.limit_ids || "", r.cid2 = t.cid2 || "", r.limitIds2 = t.limit_ids2 || "", r.limitPlays = ~~t.limit_plays || 0, r.timeLimit = t.time_limit, r.quality = t.quality, r.channelNum = t.num, r.time = Date.now(), a.setLocalData(r)
                                }
                                i(r)
                            }, function() {
                                i(r)
                            })
                        }
                    })
                },
                getDownloadUrl: function(o, a) {
                    a = a || function() {};
                    var s = this;
                    return new n(function(t, e) {
                        if (o && o.downUrl) a(o.downUrl), t(o.downUrl);
                        else {
                            var i = o && o.channelSrc || s.getSrc(),
                                n = s.getLocalData(i);
                            null !== n ? (a(n.appointUrl), t(n.appointUrl)) : s.loadChannelInfo(o).then(function(e) {
                                a(e.appointUrl), t(e.appointUrl)
                            })
                        }
                    })
                },
                getSrc: function() {
                    var e;
                    if (d.wx && /^wx\.m\.tv\.sohu\.com$/i.test(document.domain)) e = "11040001";
                    else {
                        var t = function n(e) {
                            var t = (e || document.referrer).match(/.*:\/\/([^\/]*).*/i),
                                i = "";
                            return t && (i = t[1]), !/(\d+).(\d+).(\d+).(\d+)/i.test(i) && i || (i = ""), i
                        }(u.getParam("landingrefer") || document.referrer || "") || function o(e) {
                                var t = (e || "").match(/.*:\/\/([^\/]*).*/i),
                                    i = "";
                                return t && (i = t[1]), i
                            }(window.location.href) || "";
                        (e = (u.getQueryString("src") || u.getQueryString("SRC") || s("MTV_SRC") || "").replace("|", "").replace("%7C", "")) || (t && (e = function r(e, t) {
                                var i = "";
                                try {
                                    e = e.replace(/^http:\/\//, "").replace(/^https:\/\//, "");
                                    var n = t;
                                    for (var o in void 0 === n && (n = m.srcSettings), n) {
                                        var a = n[o];
                                        if (a && e && a.test(e)) {
                                            i = o;
                                            break
                                        }
                                    }
                                } catch (s) {
                                    console.log(s)
                                }
                                return i
                            }(t, this.srcSettings)).length < 8 && 4 <= e.length && (e = e.substring(0, 4) + "0001"), e || (e = "11050001"))
                    }
                    return /qqlive|letv|youku/gim.test(navigator.userAgent) ? e = "12540001" : /iqiyi/gim.test(navigator.userAgent) && (e = "13880001"), e
                },
                setSrc: function() {
                    var e = this.getSrc();
                    s("MTV_SRC", e, a)
                },
                setLM: function() {
                    var e, t = u.getQueryString("lqd"),
                        i = u.getQueryString("lcode"),
                        n = u.getQueryString("lmcc"),
                        o = (e = {
                            domain: "tv.sohu.com",
                            path: "/"
                        }, p.is56 && (e = {
                            domain: "m.56.com",
                            path: "/"
                        }), e);
                    1 == n || function a() {
                        for (var e = ["360kan.com", "baidu.com", "baidu.mobi", "baidu.cn", "hao123.com", "360.cn", "3600.com", "c.360webcache.com", "so.com", "duba.net", "duba.com", "rising.cn", "sogou.com", "soso.com", "2345.com", "2345x.com", "2345y.com"], t = !1, i = 0, n = e.length, o = u.getParam("landingrefer") || document.referrer; i < n; i++)
                            if (-1 != o.indexOf(e[i])) {
                                t = !0;
                                break
                            }
                        return t
                    }() ? (s("_LQD", null, o), s("_LCODE", null, o)) : (t && s("_LQD", t, o), i && s("_LCODE", i, o))
                }
            };
        m.setSrc(), m.setLM(), window.channelFetcher = m, e.exports = m
    },
    function(e, t, i) {
        "use strict";
        var r = function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        var d = i(17),
            l = (i(4), i(2)),
            c = i(23),
            n = i(7),
            h = i(10),
            u = i(9),
            p = i(1).os,
            f = i(3).REQUEST_MAX_COUNT,
            m = {
                isFee: function(e) {
                    var t = "undefined" != typeof(e = e || {}).video_is_fee && 0 != e.video_is_fee,
                        i = "undefined" != typeof e.fee && 2 == e.fee;
                    return t || i
                },
                istvPlayType: function(e) {
                    return "undefined" != typeof(e = e || {}).tvPlayType && 1 == e.tvPlayType
                },
                check: function(a) {
                    var s = {
                        code: "200"
                    };
                    return new n(function(t, e) {
                        if (a)
                            if (a.iplimit = 3, 2 == a.mobileLimit || 1 == a.h5Limit) s.code = "100", t(s);
                            else if (m.isFee(a)) 2 == a.site ? u.getJSON("//api.my.tv.sohu.com/mapi/papp/v5/wmpay/pay/isPay.do?callback=?", {
                            vid: a.vid
                        }).then(function(e) {
                            200 == e.data.status && e.data.data && 0 == e.data.data.state ? s.code = "105" : (s.code = "200", h.pingback("play_pgc_success")), s.msg = e.data.data, t(s)
                        }) : c.getUserInfo().then(function() {
                            c.isVip() && "1004033728" == r["default"].get() ? s.msg = "isVip" : 1 == a.cid ? s.code = "200" : s.code = "102", t(s)
                        });
                        else if (m.istvPlayType(a)) s.code = "200", s.msg = "DMR", t(s);
                        else if (2 == a.h5Limit) s.code = "101", t(s);
                        else if (0 != a.ipLimit) {
                            var i = function i() {
                                o += 1, u.getJSON("//api.tv.sohu.com/mobile_user/device/videolimit.json?callback=?", n).then(function(e) {
                                    !1 === (e = (e = (e = e || {}).data || {}).data || {}).islimit ? s.code = "100" : s.code = "200", t(s)
                                }, function() {
                                    o < f ? i() : t(s)
                                })
                            }, n = l.extend({}, d.API_PARAMS, {
                                    from: "h5",
                                    poid: "1",
                                    sysver: p.version || "0",
                                    limitType: a.ipLimit
                                }),
                                o = 0;
                            i()
                        } else t(s);
                        else t(s)
                    })
                }
            };
        e.exports = m
    },
    function(e, t, i) {
        "use strict";
        var r = i(7),
            d = i(9),
            o = (i(4), i(5));
        i(2);
        e.exports = function(e, t) {
            var i = window._isVideo || window._player && window._player.config.isVedio,
                n = i ? o.getQueryString("ovid") : e.vid;
            return 1 == (i ? o.getQueryString("osite") : e.site) ? function s(e, n) {
                var o = "count" + +new Date,
                    a = "//count.vrs.sohu.com/count/query.action?type=2&videoId=" + e + "&jsonp=" + o;
                return new r(function(t, i) {
                    d({
                        url: a,
                        dataType: "jsonp"
                    }).then(function() {
                        try {
                            t(!0 === n ? window[o].videos[0].countFormat : window[o].videos[0].count)
                        } catch (e) {
                            i(e)
                        }
                    }, i)
                })
            }(n, t) : function a(e, o) {
                var t = "//vstat.v.blog.sohu.com/dostat.do?callback=?&method=getVideoPlayCount&v=" + e;
                return new r(function(i, n) {
                    d.getJSON(t).then(function(e) {
                        try {
                            i(!0 === o ? e.data[0].countFormat : e.data[0].count)
                        } catch (t) {
                            n(t)
                        }
                    }, n)
                })
            }(n, t)
        }
    },
    function(e, t, i) {
        "use strict";
        var a = i(7),
            s = i(9),
            r = i(5);
        i(4);
        e.exports = function d(e) {
            var n = "varsimilar" + +new Date,
                o = "//rc.vrs.sohu.com/pgc/relate/video?&isH5=1&source=20&refer=" + (r.getParam("landingrefer") || encodeURIComponent(document.referrer)) + "&ab=" + function i() {
                    var e = 0,
                        t = parseInt(100 * Math.random());
                    return t < 25 ? e = 0 : t < 50 ? e = 1 : t < 75 ? e = 2 : t < 85 ? e = 3 : t < 95 ? e = 4 : t < 100 && (e = 5), e
                }() + "&title=" + escape(escape(e.tvname || e.video_name || e.videoName)) + "&vid=" + e.vid + "&cid=" + e.cid + "&catecode=" + (e.cateCode || e.cate_code) + "&pageSize=3&var=" + n;
            return new a(function(t, i) {
                s({
                    url: o,
                    dataType: "jsonp"
                }).then(function() {
                    window[n];
                    try {
                        t(window[n].videos)
                    } catch (e) {
                        i(e)
                    }
                }, i)
            })
        }
    },
    function(e, t, i) {
        "use strict";
        var n = i(2);

        function o() {}
        var a = /(^\s*)|(\s*$)/g,
            s = "".trim ? function(e) {
                return e.trim()
            } : function(e) {
                return (e || "").replace(a, "")
            };
        n.extend(o.prototype, {
            trim: s,
            dateFormat: function(e, t) {
                "[object Date]" != {}.toString.call(e) && (e = new Date(parseInt(e)));
                var i = {
                    "y+": e.getFullYear(),
                    "M+": e.getMonth() + 1,
                    "d+": e.getDate(),
                    "h+": e.getHours(),
                    "m+": e.getMinutes(),
                    "s+": e.getSeconds()
                };
                for (var n in i) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, ("00" + i[n]).substr(1 + ~RegExp.$1.length)));
                return t
            },
            timeFormat: function(e, t) {
                e /= 1;
                var o = {
                    "m+": Math.floor(e / 60),
                    "s+": e % 60
                };
                for (var i in t = t.replace(/(m+)/, function(e, t) {
                    var i = t,
                        n = ("" + o["m+"]).length;
                    return t && n > t.length && (i = new Array(n + 1).join("m")), i
                }), o) new RegExp("(" + i + ")").test(t) && (t = t.replace(RegExp.$1, ("00" + o[i]).slice(1 + ~RegExp.$1.length)));
                return t
            },
            truncate: function(e, t, i, n) {
                return (e = e || "").length <= t || (e = e.substr(0, t), i && (e += n || "...")), e
            },
            truncateCN: function(e, t, i, n) {
                e = e || "";
                var o = /[^\x00-\xff]/g;
                if (i = i || !1, n = n || "...", 0 < t && e.replace(o, "mm").length > t)
                    for (var a = Math.floor(t / 2); a < e.length; a++)
                        if (e.substr(0, a).replace(o, "mm").length >= t) return e.substr(0, a) + (i ? n : "");
                return e
            },
            numberGroup: function(e, t, i) {
                if (t = t || 3, i = i || ",", !/^(\+|-)?(\d+)(\.\d+)?$/.test(e = "" + (e = e || "1234567345345.000"))) return e;
                for (var n = RegExp.$1, o = RegExp.$2, a = RegExp.$3, s = new RegExp("(\\d+)(\\d{" + t + "})(" + i + "|$)"); s.test(o);) o = o.replace(s, "$1" + i + "$2$3");
                return n + o + a
            },
            escapeXSS: function(e) {
                return (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            },
            removeProtocol: function() {
                var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "";
                return e && (e = document.location.protocol + e.replace(/^https?:/, "")), e
            }
        }), e.exports = o
    },
    function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, i) {
            return t && o(e.prototype, t), i && o(e, i), e
        };

        function o(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var r = function T(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        var s = i(1).os,
            d = (i(1).browser, i(5)),
            l = i(6),
            c = i(16),
            h = i(4),
            a = i(3),
            u = i(9),
            p = i(24),
            f = i(13).EventEmitter,
            m = i(2),
            v = i(7),
            g = i(18),
            y = i(8),
            w = "assem",
            b = "segment",
            x = {
                adClose: "0",
                timeout: 3e3,
                url: "//m.aty.sohu.com/h"
            };

        function P() {
            return s.android || s.androidpad ? "h6" : s.iphone ? "h3" : s.ipad ? "h1" : "unknowm"
        }
        var D = (function S(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(_, f), n(_, [{
            key: "init",
            value: function() {
                this.initEvent()
            }
        }, {
            key: "initEvent",
            value: function() {
                var e = this;
                this.player.on("timeupdate", function() {
                    return e.onTimeupdate()
                }), this.player.on("reset", function() {
                    return e.reset()
                }), this.player.on("adv.segment.ended", function() {
                    return e.onAdvSegmentEnd()
                }), this.player.on("adv.ended", function() {
                    return e.onAdvEnded()
                }), this.player.on("adv.error", function() {
                    h.log("广告播放异常"), e.playMode == w ? (e.playMode = b, e.emit("adv.retry")) : e.emit("adv.skip")
                })
            }
        }, {
            key: "reset",
            value: function() {
                this.isEnd = !1, this.duration = 0, this.currentTime = 0, this.index = 0, this.mediaData = []
            }
        }, {
            key: "getVc",
            value: function() {
                var e = this.player.videoData,
                    t = "" + (e.cateCode || e.cate_code || e.cid || "");
                return t && -1 < t.indexOf(";") && (t = t.replace(/.*?;/, "")), t
            }
        }, {
            key: "getType",
            value: function() {
                var e = this.player.videoData,
                    t = e.site,
                    i = e.dataType,
                    n = e.cid;
                if (t) {
                    if (1 === t) return "vrs";
                    if (2 === t) {
                        if (i && 34 === i) return "pgc";
                        if (i && 82 === i) return "my"
                    }
                } else if (n && "9001" === n) return "my"
            }
        }, {
            key: "getGUID",
            value: function() {
                var e = (new Date).getTime(),
                    t = this.player.videoData.vid || "",
                    i = a.uid || "";
                return g("" + t + i + e)
            }
        }, {
            key: "getAdParam",
            value: function() {
                var e = this.player.videoData,
                    t = this.player.dataModel.duration || 0,
                    i = this.config,
                    n = window.videoData && window.videoData.channeled || window.pageData && window.pageData.channeled || 0,
                    o = {
                        pt: "oad",
                        plat: P(),
                        sysver: s.version,
                        sver: this.player.version,
                        c: "tv",
                        cat: "1",
                        vc: this.getVc(),
                        pn: function a() {
                            var e = P();
                            return "h6" === e ? "androidphone" : "h3" === e ? "iphone" : "h16" === e ? "androidpad" : "h1" === e ? "ipad" : "unknowm"
                        }(),
                        al: e.plid || e.sid || e.aid || "",
                        ag: "",
                        st: "",
                        ar: e.areaId || e.area_id || 6,
                        vu: "",
                        tuv: l("MUV") || l("SUV") || "",
                        appid: this.appid,
                        type: this.getType(),
                        vid: e.vid || "",
                        tvid: e.tvid || e.tv_id || "",
                        pageUrl: window.location.href,
                        du: t,
                        partner: d.getQueryString("src") || d.getQueryString("SRC") || l("MTV_SRC") || "-2",
                        guid: this.getGUID(),
                        channeled: "" + n,
                        age: e.tvAge || ""
                    };
                return "0" != i.adClose && (o.adClose = i.adClose), o.partner = o.partner.substr(0, 4), o
            }
        }, {
            key: "repOrAddParams",
            value: function(e) {
                try {
                    if ("" !== e && 1 <= e.indexOf("mmg.aty.sohu.com")) {
                        var t = e.match(/partner=([a-zA-Z0-9\-_\|]*)/i),
                            i = d.getQueryString("src") || d.getQueryString("SRC") || l("MTV_SRC") || "-2";
                        i = i.substr(0, 4), (null === t || 2 <= t.length && "" === t[1]) && (e = e + "&partner=" + i)
                    }
                } catch (s) {
                    h.log(s)
                }
                var n = e.match(/urldomain=([a-zA-Z0-9\-_\|]*)/i);
                (null === n || 2 <= n.length && "" === n[1]) && (e = e + "&urldomain=" + window.location.host);
                var o = y.getLQD(),
                    a = y.getLCODE();
                return -1 != e.indexOf("?") ? e += "&oth=" + o + "&cd=" + a : e += "?oth=" + o + "&cd=" + a, e += "&src=" + r["default"].get()
            }
        }, {
            key: "pingback",
            value: function(e) {
                if (e)
                    for (var t = e.split("|"), i = this.player.dataModel, n = 0; e = t[n++];) {
                        try {
                            e = y.removeProtocol(this.repOrAddParams(e)), i.ugcode && (e = -1 == e.indexOf("?") ? e + "?ugcode2=" + i.ugcode + "&ugu2=" + i.ugu : e + "&ugcode2=" + i.ugcode + "&ugu2=" + i.ugu)
                        } catch (o) {}(new Image).src = e, h.log("广告统计-->", e)
                    }
            }
        }, {
            key: "_loadData",
            value: function(e) {
                var i = this.config,
                    n = i.url;
                return h.log("贴片广告请求--> " + n + "?" + d.stringify(e)), new v(function(t) {
                    u({
                        url: n,
                        data: e,
                        dataType: "jsonp",
                        timeout: i.timeout
                    }).then(function(e) {
                        return t(e)
                    })["catch"](function() {
                        return t({
                            timeout: !0
                        })
                    })
                })
            }
        }, {
            key: "loadData",
            value: function() {
                var o = this,
                    a = this.config,
                    e = (this.player.channelInfo || {}).cooperation || {};
                if (!c.adv()) return this.isEnd = !0, setTimeout(function() {
                    return o.emit("adv.loaded")
                }, 0);
                if (a.isVedio) return this.isEnd = !0, setTimeout(function() {
                    return o.emit("adv.loaded")
                }, 0);
                "undefined" != typeof e.isClosed && (a.adClose = e.isClosed);
                var t = this.getAdParam();
                p.loadAdDataStartTime = Date.now(), this._loadData(t).then(function() {
                    var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                    if (p.loadAdDataEndTime = Date.now(), e.timeout) return h.log("广告请求超时-->", p.loadAdDataEndTime - p.loadAdDataStartTime), setTimeout(function() {
                        return o.emit("adv.timeout")
                    }, 0);
                    h.log("获取广告完成, 耗时--->" + (p.loadAdDataEndTime - p.loadAdDataStartTime) / 1e3);
                    var t = o.compileData(e.data);
                    if (o.mediaData = t.mediaData, o.duration = t.duration, o.m3u8 = t.m3u8, c.m3u8() && o.m3u8 || (o.playMode = b), 0 != a.adClose || 0 == o.duration) o.isEnd = !0, 0 != a.adClose ? h.log("广告已经获取成功，但是广告被屏蔽-->", e) : 0 == o.duration && h.log("广告已经获取成功，但是广告为空-->", e), (o.mediaData || []).forEach(function(e) {
                        e._spEnd = !0, o.pingback(e.sp), 0 !== e.duration ? h.log("广告上报 start --> " + e.sp) : h.log("空广告上报 start --> " + e.sp), e.mp.forEach(function(e) {
                            0 != e.t || e._done || (e._done = !0, o.pingback(e.v), h.log("打点上报" + e.t + "--> ", e.v))
                        })
                    });
                    else
                        for (var i, n = 0; i = o.mediaData[n++];) {
                            if (i.duration) {
                                o.index = n - 1;
                                break
                            }
                            o.pingback(i.sp), i._spEnd = !0
                        }
                    return setTimeout(function() {
                        return o.emit("adv.loaded")
                    }, 0)
                })
            }
        }, {
            key: "compileData",
            value: function(e) {
                var t = {
                    mediaData: [],
                    duration: 0
                };
                if (e && 1 === e.status) {
                    for (var i, n = e.data.oad || [], o = 0, a = n.length, s = 0, r = []; o < a; o++)(i = n[o]).sp = i.pingback || "", i.ep = i.finishedstatistics || "", i.cp = i.clickstatistics || "", i.mp = i.pingbacks || [], delete i.pingback, delete i.finishedstatistics, delete i.clickstatistics, delete i.pingbacks, r.push(i), s += (i.duration || 0) / 1;
                    t = {
                        mediaData: r,
                        duration: s,
                        m3u8: e.data.m3u8
                    }
                }
                return t
            }
        }, {
            key: "calcIndex",
            value: function() {
                for (var e, t, i, n = this.getCurrentTime(), o = this.mediaData, a = 0, s = o.length, r = 0; a < s; a++)
                    if ((t = o[a]).duration) {
                        if (0 <= (i = n - r) && i <= t.duration) {
                            e = a;
                            break
                        }
                        r += t.duration
                    }
                return e
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                if (this.isEnd || this.isEmpty()) return 0;
                var e = this.player.getVideoCurrentTime() || 0;
                if (this.playMode == b) {
                    for (var t = this.mediaData, i = this.index, n = 0, o = 0; n < i; n++) o += t[n].duration || 0;
                    e = o + e
                }
                return e
            }
        }, {
            key: "isEmpty",
            value: function() {
                return 0 === this.duration
            }
        }, {
            key: "getUrlByIndex",
            value: function() {
                var e, t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : this.index;
                if (this.playMode == w) e = this.m3u8;
                else {
                    var i = this.getDataByIndex(t);
                    e = y.removeProtocol(i.src)
                }
                return e
            }
        }, {
            key: "getDataByIndex",
            value: function() {
                var e = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : this.index;
                return this.mediaData[e]
            }
        }, {
            key: "onTimeupdate",
            value: function() {
                if (!this.player.isPlayingAD) return this.startPingback();
                if (this.startPingback(), this.playMode === w) {
                    var e = this.calcIndex();
                    void 0 !== e && e != this.index && (this.endPingback(), this.index = e, this.startPingback())
                }
                this.mpingback()
            }
        }, {
            key: "onAdvSegmentEnd",
            value: function() {
                if (this.endPingback(), this.playMode == w) this.isEnd = !0;
                else if (this.playMode == b) {
                    for (var e, t = this.index + 1, i = this.mediaData.length; t < i && 0 == (e = this.mediaData[t]).duration; t++) e._spEnd || (e._spEnd = !0, this.pingback(e.sp));
                    this.index = t, this.index >= i && (this.isEnd = !0)
                }
            }
        }, {
            key: "onAdvEnded",
            value: function() {
                this.overPingback()
            }
        }, {
            key: "startPingback",
            value: function() {
                if (!this.isEnd && this.mediaData && this.mediaData.length) {
                    for (var e, t, i = this.index - 1; 0 <= i && !(e = this.getDataByIndex(i)).duration; i--)!e._spEnd && e.sp && (e._spEnd = !0, this.pingback(e.sp));
                    t = (e = this.getDataByIndex()).sp, !e._spEnd && t && (e._spEnd = !0, this.pingback(t))
                }
            }
        }, {
            key: "endPingback",
            value: function() {
                if (!this.isEnd && this.mediaData && this.mediaData.length) {
                    var e = this.getDataByIndex(),
                        t = e.ep;
                    !e._epEnd && t && (e._epEnd = !0, this.pingback(t))
                }
            }
        }, {
            key: "overPingback",
            value: function() {
                if (this.mediaData && this.mediaData.length)
                    for (var e, t = this.mediaData.length - 1; 0 <= t && !(e = this.getDataByIndex(t)).duration; t--)!e._spEnd && e.sp && (e._spEnd = !0, this.pingback(e.sp))
            }
        }, {
            key: "mpingback",
            value: function() {
                var t = this;
                if (!this.isEnd) {
                    var i = Math.ceil(this.player.getVideoCurrentTime() || 0),
                        e = this.index,
                        n = this.getDataByIndex();
                    if (n) {
                        var o = n.mp;
                        if (o && o.length && !window.isNaN(i))
                            if (this.playMode == w) {
                                for (var a = 0, s = 0; s < e; s++) a += this.getDataByIndex(s).duration;
                                a = Math.ceil(a), o.forEach(function(e) {
                                    0 <= i - a - e.t && !e._done && e.v && (e._done = !0, t.pingback(e.v))
                                })
                            } else this.playMode == b && (i = Math.ceil(this.player.getVideoCurrentTime() || 0), o.forEach(function(e) {
                                e.t <= i && !e._done && (e._done = !0, t.pingback(e.v))
                            }))
                    }
                }
            }
        }]), _);

        function _(e, t) {
            ! function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, _);
            var i = function o(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this));
            return i.player = e, i.config = m.extend({}, t || {}, x), m.extend(i, {
                isEnd: !1,
                duration: 0,
                currentTime: 0,
                playMode: w,
                appid: i.config.appid || "",
                index: 0,
                mediaData: []
            }), i.init(), i
        }
        t["default"] = D
    },
    function(e, t, i) {
        "use strict";
        var s = i(9),
            n = i(8),
            r = i(3),
            o = (i(1).os, i(7)),
            d = (i(6), i(12), i(3).REQUEST_MAX_COUNT);
        e.exports = function l(e) {
            var a = {
                vid: e.vid || "",
                uid: e.uid || r.uid,
                pt: e.pt || n.getUserPt(),
                plid: e.plid || e.aid || e.sid
            };
            return new o(function(e, t) {
                if (r.is56) {
                    var i = function i() {
                        o += 1, s.getJSON(n, a).then(function() {
                            e({
                                code: "200"
                            })
                        }, function() {
                            d <= o ? e({
                                code: "408"
                            }) : i()
                        })
                    }, n = "//vxml.56.com/svp?callback=?",
                        o = 0;
                    i()
                } else e()
            })
        }
    },
    function(e, t, i) {
        "use strict";
        i(17);
        var r = i(20),
            d = (i(2), i(8), i(9)),
            n = (i(6), i(14), i(7)),
            l = i(3).REQUEST_MAX_COUNT,
            c = {
                globalCfg: {
                    vid: "",
                    liveId: ""
                },
                formatLiveInfo: function(e) {
                    var t = {
                        code: "200",
                        msg: "",
                        data: null
                    };
                    if (e && e.data) {
                        var i = e.data;
                        if (1 == i.liveRecore && i.vid) return void(location.href = "//m.tv.sohu.com/v" + i.vid + ".shtml?channeled=" + window.videoData.channeled);
                        var n = [],
                            o = i.data.clipsURL[0] || "";
                        if (/m3u8/gi.test(o)) {
                            var a = "//" + o;
                            n.push({
                                url: a,
                                duration: i.totalDuration
                            })
                        } else i.data.hls && n.push({
                            url: i.data.hls,
                            duration: Infinity
                        });
                        var s = {};
                        s.vid = i.lid || "147", s.liveId = i.lid || "147", s.videoName = i.data.tvName || "", s.urls = n, s.duration = Infinity, t.data = s, document.title = s.videoName + "直播_搜狐视频", window.shareData && (window.shareData.title = document.title, window.shareData.img_url = "//i2.itc.cn/20160407/35ec_7a7986e6_7b8a_7c1c_cd0c_57766cd6ce09_1.png")
                    } else t.code = "407", t.msg = r[t.code];
                    return t
                },
                loadHLSUrlByLiveId: function(e, o) {
                    o = "function" == typeof o ? o : function() {};
                    var a = {}, s = "//live.tv.sohu.com/live/player_json.jhtml?callback=?&type=2&lid=" + e.liveId;
                    return new n(function(i, e) {
                        var t = 0;
                        ! function n() {
                            t += 1, d.getJSON(s, a).then(function(e) {
                                var t = c.formatLiveInfo(e);
                                o(t), i(t)
                            }, function() {
                                if (l <= t) {
                                    var e = c.formatLiveInfo();
                                    o(e), i(e)
                                } else n()
                            })
                        }()
                    })
                }
            };
        e.exports = {
            loadData: c.loadHLSUrlByLiveId
        }
    },
    function(e, t, i) {
        "use strict";
        var h = i(1).os,
            u = i(22),
            p = i(16),
            f = (i(4), i(2)),
            m = i(8),
            a = {
                playMode: "one",
                duration: 0,
                index: 0,
                count: -1,
                timeLimit: 0
            };

        function n(e, t, i, n, o) {
            this.player = e, this.videoData = i, this.channelInfo = n, this.mcode = o || "", this.config = t || {}, f.extend(this, t, a), f.extend(this, {
                resolutionList: [],
                mediaData: {}
            }), "live" === t.playType ? this.initLive(i, n) : this.initVOD(i, n)
        }
        f.extend(n.prototype, {
            initVOD: function(e, t) {
                "horizon" === this.posterType ? this.poster = e.hor_w16_pic || e.hor_w8_pic || e.ver_big_pic || "" : this.poster = e.ver_big_pic || e.ver_high_pic || hor_w16_pic || "", this.poster = this.poster.replace("http:", ""), f.extend(this, {
                    tvid: e.tvid,
                    vid: e.vid,
                    duration: parseInt(e.totalDuration || e.total_duration || 0, 10),
                    title: e.tvname || e.videoName || e.video_name || "",
                    playcount: e.playCount || e.play_count || 0,
                    ugcode: e.ugcode || "",
                    ugu: e.ugu || "",
                    vw: e.vWidth || 0,
                    vh: e.vHeight || 0
                }), this.timeLimit = 0 < t.time && t.time < this.duration ? t.time : this.timeLimit, this.timeLimit && this.timeLimit < this.duration && (this.duration = this.timeLimit), 0 == this.timeLimit ? u.isForceUseM3u8() ? (this.mediaType = "m3u8", this.playMode = "one") : u.isForceUseDownloadUrl() ? (this.mediaType = "mp4", this.playMode = "one", e.urls.mp4 = {}, e.urls.mp4.nor = e.urls.downloadUrl) : p.m3u8() ? (this.mediaType = "m3u8", this.playMode = "one") : (this.mediaType = "mp4", this.playMode = "segment") : h.ios ? (this.mediaType = "m3u8", this.playMode = "one") : (this.mediaType = "mp4", this.playMode = "segment"), this.addUrlParam(e.urls);
                var i = !1;
                if (e.urls) {
                    var n = e.urls[this.mediaType],
                        o = e.durations,
                        a = !1;
                    if ("m3u8" == this.mediaType) {
                        for (var s in n)
                            if (n[s].length && "" != n[s][0]) {
                                a = !0;
                                break
                            }
                        a || (n = e.urls.mp4, this.mediaType = "mp4", this.playMode = "segment")
                    }
                    for (var s in a = !1, n) {
                        if (this.mediaData[s] = [], n[s] instanceof Array)
                            for (var r = n[s], d = 0, l = r.length; d < l; d++) {
                                var c = {
                                    url: m.removeProtocol(r[d])
                                };
                                "m3u8" == this.mediaType ? c.duration = e.totalDuration || e.total_duration || -1 : c.duration = parseInt(o[s][d] || -1, 10), this.mediaData[s].push(c)
                            }!i && 0 < this.mediaData[s].length && (i = !0, this.count = this.mediaData[s].length)
                    }
                    if (!i) {
                        c = {
                            url: ""
                        };
                        e.urls.downloadUrl && (c.url = m.removeProtocol(e.urls.downloadUrl[0] || "")), c.duration = parseInt(this.duration || -1, 10), this.mediaType = "mp4", this.playMode = "none", this.resolutionType = "nor", this.mediaData.nor = [c], this.count = this.mediaData.nor.length
                    }
                    0 < this.count && (this.index = 0), this.initResolution()
                }
                this.initEvent()
            },
            initResolution: function() {
                for (var e, t = 0, i = this.resolutionTypeList.length; t < i; t++) e = this.resolutionTypeList[t], this.mediaData[e] && this.mediaData[e].length && (this.resolutionList.push(e), 0 === this.getMediaList().length && (this.resolutionType = e))
            },
            addUrlParam: function(e) {
                var a = this.config,
                    t = function t(i) {
                        if (i && i.length && "" != i[0]) {
                            var n = m.getLQD(),
                                o = m.getLCODE();
                            i.forEach(function(e, t) {
                                -1 != (e = e || "").indexOf("?") ? e += "&oth=" + n + "&cd=" + o : e += "?oth=" + n + "&cd=" + o, a.m3u8Params && (e += "&" + a.m3u8Params), i[t] = e
                            })
                        }
                    };
                for (var i in e)
                    if (f.isObject(e[i]))
                        for (var n in e[i]) t(e[i][n]);
                    else f.isArray(e[i]) && t(e[i])
            },
            initEvent: function() {
                this.player.on("segment.ended", function() {
                    this.index += 1
                }.bind(this)), this.player.on("reset", this.reset.bind(this))
            },
            reset: function() {
                this.index = 0
            },
            getMediaList: function() {
                return this.mediaData[this.resolutionType] || []
            },
            hasNext: function() {
                return !!this.getMediaList()[this.index + 1]
            },
            setIndex: function(e) {
                this.index = e
            },
            getMediaByIndex: function(e) {
                return void 0 === e && (e = this.index), this.getMediaList()[e]
            },
            getMediaByTime: function(e) {
                if (void 0 !== e && !(e < 0 || e > this.duration)) {
                    if ("one" == this.playMode) return {
                        media: getMediaByIndex(0),
                        index: 0,
                        t: e
                    };
                    var t, i = this.index,
                        n = this.getMediaList(),
                        o = 0,
                        a = 0,
                        s = n.length,
                        r = 0,
                        d = 0;
                    if (n.forEach(function(e) {
                        return d += e.duration
                    }), d < e) return {
                        media: t = n[a = s - 1],
                        index: a,
                        offset: t.duration,
                        change: i != a
                    };
                    for (; a < s; a++) {
                        if (t = n[a], o <= e && e <= o + t.duration) {
                            r = e - o;
                            break
                        }
                        o += t.duration
                    }
                    return {
                        media: t,
                        index: a,
                        offset: r,
                        change: i != a
                    }
                }
            },
            getNext: function() {
                return this.getMediaList()[this.index + 1]
            },
            getOffsetDuration: function() {
                for (var e = this.getMediaList(), t = 0, i = this.index, n = 0; t < i; t++) n += e[t].duration;
                return n
            },
            hasResolution: function(e) {
                for (var t = this.resolutionList, i = 0, n = t.length; i < n; i++)
                    if (e == t[i]) {
                        !0;
                        break
                    }
                return !0
            },
            switchResolution: function(e) {
                this.hasResolution(e) && (this.resolutionType = e)
            },
            initLive: function(e) {
                if (f.extend(this, {
                    vid: e.vid,
                    duration: parseInt(e.totalDuration || e.total_duration || 0, 10),
                    title: e.tvname || e.videoName || e.video_name || "",
                    playcount: e.playCount || e.play_count || 0
                }), this.timeLimit && this.timeLimit < this.duration && (this.duration = this.timeLimit), 0 == this.timeLimit ? u.isForceUseM3u8() ? (this.mediaType = "m3u8", this.playMode = "one") : u.isForceUseDownloadUrl() ? (this.mediaType = "mp4", this.playMode = "one", e.urls.mp4 = {}, e.urls.mp4.nor = m.removeProtocol(e.urls.downloadUrl)) : p.m3u8() ? (this.mediaType = "m3u8", this.playMode = "one") : (this.mediaType = "mp4", this.playMode = "segment") : h.ios ? (this.mediaType = "m3u8", this.playMode = "one") : (this.mediaType = "mp4", this.playMode = "segment"), e.urls) {
                    e.urls, e.durations;
                    var t = {
                        url: ""
                    };
                    e.urls.length && (t.url = m.removeProtocol(e.urls[0].url || "")), t.duration = parseInt(this.duration || -1, 10), this.mediaType = "mp4", this.playMode = "none", this.resolutionType = "nor", this.mediaData.nor = [t], this.count = this.mediaData.nor.length, 0 < this.count && (this.index = 0), this.initResolution()
                }
                this.initEvent()
            }
        }), e.exports = n
    },
    function(e, t, i) {
        "use strict";
        Function.prototype.bind || (Function.prototype.bind = function(e) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function n() {}, o = function o() {
                    return i.apply(this instanceof n && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
            return n.prototype = this.prototype, o.prototype = new n, o
        });
        var n = i(42),
            o = {
                createPlayer: function(e, t) {
                    return new n(e, t)
                }
            };
        e.exports = o
    },
    function(e, t, i) {
        "use strict";
        var n = i(2);

        function o(e, t) {
            this.player = e, this.originalConfig = t, this.config = t || {}, this.list = this.config.list || []
        }
        n.extend(o.prototype, {
            hasNext: function() {
                var e = this.indexOf();
                return -1 == e ? !! this.list.length : e != this.list.length - 1
            },
            getNext: function() {
                if (this.hasNext()) {
                    var e = this.indexOf();
                    return this.list[e + 1]
                }
            },
            append: function() {
                var e = [].slice.call(arguments),
                    t = this.list;
                e.forEach(function(e) {
                    n.isArray(e) ? t = t.concat(e) : n.isObject(e) && t.push(e)
                }), this.list = t
            },
            replace: function(e) {
                this.list = e || []
            },
            indexOf: function(e) {
                var t = this.player.videoData,
                    i = this.list,
                    n = 0,
                    o = i.length,
                    a = -1;
                for (e = e || t.vid; n < o; n++)
                    if (i[n].vid == e) {
                        a = n;
                        break
                    }
                return a
            },
            clear: function() {
                this.list = []
            }
        }), e.exports = o
    },
    function(e, t, i) {
        "use strict";
        var o = function L(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(36));
        var a = i(2),
            n = (i(1).os, i(16)),
            s = i(13).EventEmitter,
            r = i(46),
            d = i(44),
            l = i(45),
            c = i(24),
            h = i(3),
            u = i(25),
            p = i(23),
            f = i(39),
            m = i(21),
            v = i(43),
            g = i(41),
            y = i(10),
            w = i(4),
            b = i(33),
            x = i(34),
            P = i(28),
            D = i(8),
            _ = function _() {}, T = {
                canplay: "onCanplay",
                canplaythrough: "onCanplaythrough",
                durationchange: "onDurationchange",
                emptied: "onEmptied",
                loadstart: "onLoadstart",
                ratechange: "onRatechange",
                seeked: "onSeeked",
                seeking: "onSeeking",
                suspend: "onSuspend",
                volumechang: "onVolumechang",
                waiting: "onWaiting",
                playing: "onPlaying",
                loadedmetadata: "onLoadedmetadata",
                timeupdate: "onTimeupdate",
                progress: "onProgress",
                pause: "onPause",
                play: "onPlay",
                ended: "onEnded",
                error: "onError",
                abort: "onAbort"
            }, S = {};

        function k(e, t) {
            this.superClass.constructor.call(this), this.selector = e, this.el = document.querySelector(this.selector), this.originalConfig = t, this.config = m.initConfig(t);
            var i = this.config.list,
                n = this.config.ugctoken;
            this.config.data ? this.videoData = this.config.data || {} : i && i.length && (this.videoData = i[0]), n && (this.videoData.ugctoken = n), this.playList = new g(this, {
                list: i
            }), delete this.config.data, delete this.config.list, this.statis = new v(this, {
                autoplay: this.config.autoplay
            }), this.adv = new o["default"](this, this.config), this.config.nativeui ? this.ui = new l(this, this.config) : this.videoData.liveId ? (this.videoData.vid = this.videoData.liveId, this.ui = new d(this, this.config), this.config.playType = "live") : (this.ui = new r(this, this.config), this.config.playType = "vod", this.config.DMR_FLAG = !1), a.extend(this, {
                isStarted: !1,
                isPlayingAD: !1,
                videoActived: !1,
                lastCurrentTime: 0,
                timelimited: !1,
                segmentEndTimer: null,
                bufferCount: -1,
                isBufferBySeek: !1,
                bufferDelayTime: 3e3,
                bufferDelayTimer: null,
                bufferCountInMinitus: 0,
                bufferCountInMinitusTimer: null,
                resetFlag: !1
            }), this.init()
        }
        Object.keys(T).forEach(function(e) {
            S[T[e]] = _
        }), window.videoData && (window.__videoData = window.videoData), a.inherit(k, s, a.extend({}, {
            init: function() {
                var e = this;
                this.video = this.el.querySelector("video"), this.initEvent(), this.videoData && this.videoData.vid && (this.config.pjax && n.pjax && history.replaceState(this.videoData, null), this.doPlay(this.videoData)), this.fullscreen = new P(this), (this.config.autoplay && n.autoplay() || this.videoActived) && "undefined" != typeof wx && document.addEventListener("WeixinJSBridgeReady", function() {
                    e._play()
                }, !1)
            },
            initEvent: function() {
                var e = this;
                for (var t in T) {
                    var i = T[t];
                    this.video.addEventListener(t, this[i].bind(this), !1)
                }
                this.adv.on("adv.loaded", function() {
                    return e.start()
                }), this.adv.on("adv.timeout", function() {
                    return e.start()
                }), this.adv.on("adv.retry", function() {
                    return e.start()
                }), this.adv.on("adv.skip", function() {
                    return e.emit("adv.ended")
                }), this.on("ended", function() {
                    this.dataModel && this.dataModel.timeLimit ? (this.exitFullscreen(), x(this.videoData).then(function(e) {
                        e.forEach(function(e) {
                            -1 == e.videoUrl.indexOf("?") ? e.videoUrl += "?channeled=1211010004" : e.videoUrl += "&channeled=1211010004"
                        }), this.emit("recommend.loaded", e)
                    }.bind(this), function(e) {
                        w.log("获取后推荐失败-->", e)
                    })) : this.playList.hasNext() ? this.playNext() : (this.emit("list.ended"), window.nextUrl && y.pingback("video_play_nextout"))
                }.bind(this)), this.on("adv.ended", function() {
                    return e.autoSeek()
                }), window.addEventListener("popstate", this.onPopstate.bind(this), !1)
            },
            _play: function() {
                try {
                    this.video.play().then(function() {
                        w.log("播放成功")
                    })["catch"](function(e) {
                        w.log("播放失败"), w.log(e)
                    })
                } catch (e) {}
            },
            autoSeek: function() {
                if (!this.dataModel.timeLimit) {
                    var e = location.hash.replace("#", "").replace(/sohuaction=(.*)/, "");
                    /^\d+$/.test(e) && (e = parseInt(e), !isNaN(e) && 0 < e && this.seek(e))
                }
            },
            playNext: function() {
                var e = this.playList.getNext();
                "undefined" == typeof e.site && (e.site = this.videoData.site), 1 == this.videoData.site ? this.playByData(a.extend(e, {
                    url: e.url + (-1 == e.url.indexOf("?") ? "?channeled=1211010010" : "&channeled=1211010010")
                })) : this.playByData(a.extend(e, {
                    url: e.url + (-1 == e.url.indexOf("?") ? "?channeled=1211020010" : "&channeled=1211020010")
                }))
            },
            playByData: function(e) {
                if (e) {
                    var t = D.removeProtocol(e.url);
                    t ? this.config.pjax && n.pjax && "live" !== this.config.playType ? (history.pushState(e, e.name || "", t), this.reset(), this.doPlay(e), y.pingback("video_play_nextin")) : (y.pingback("video_play_nextout"), setTimeout(function() {
                        location.href = t
                    }, 500)) : (this.reset(), this.doPlay(e), y.pingback("video_play_nextin"))
                }
            },
            start: function() {
                w.log("广告对象-->", this.adv), this.adv.isEnd || this.adv.isEmpty() ? this.emit("adv.ended") : this.isPlayingAD = !0, this.setVideoUrl()
            },
            setVideoUrl: function() {
                var t = this;
                if (this.resetBuffer(), this.isPlayingAD) this.setADVideoUrl();
                else {
                    var e = this.dataModel,
                        i = e.getMediaByIndex();
                    "m3u8" == e.mediaType && "vod" == e.playType && p.isVip() && e.videoData.video_is_fee ? p.getmkey(e.videoData.vid, e.videoData.aid).then(function(e) {
                        t.video.src = i.url + "&mkey=" + encodeURIComponent(e)
                    }) : this.mkey ? this.video.src = i.url + "&mkey=" + encodeURIComponent(this.mkey) : this.video.src = i.url
                }
                this._play(), setTimeout(function() {
                    this._play()
                }.bind(this), 500)
            },
            setADVideoUrl: function() {
                var e = this.adv.getUrlByIndex(),
                    t = this;
                w.log("广告播放地址-->", e), this.video.src = e, setTimeout(function() {
                    t.isPlayingAD && 0 === t.getVideoCurrentTime() && t.emit("adv.error")
                }, 4e3)
            },
            doPlay: function(e) {
                this.videoData = e, this.pdna = e.pdna || "", this.emit("data.loading"), c.playerLoadMediaDataStartTime = Date.now(), u.loadData(this.videoData).then(function(e) {
                    if (c.playerLoadMediaDataEndTime = Date.now(), w.log("视频数据获取完成, 耗时--->" + (c.playerLoadMediaDataEndTime - c.playerLoadMediaDataStartTime) / 1e3), this.emit("data.loaded", e), 200 == e.code) this.videoData = e.data.videoData, this.channelInfo = e.data.channelInfo, this.mcode = e.data.mcode, "DMR" == e.msg && (this.config.DMR_FLAG = !0), this.videoData.plevel ? (window.videoData = this.videoData, this.emit("play.plevel", this.videoData.plevel)) : (e.msg.mkey && (this.mkey = e.msg.mkey, this.emit("data.payed")), this.nextdoPlay());
                    else {
                        var t = e.data && e.data.videoData || {};
                        a.extend(this.videoData, {
                            videoName: t.videoName || this.videoData.videoName,
                            video_desc: t.video_desc || this.videoData.video_desc,
                            video_big_pic: t.horHighPic || t.hor_high_pic || t.verHighPic || t.ver_high_pic || t.video_big_pic || this.videoData.video_big_pic
                        }), 105 == e.code ? this.emit("data.pay", e) : (window.__videoData = this.videoData, this.emit("data.exception", e)), y.pingback("play_fail_data"), y.pingback("play_fail_" + e.code)
                    }
                    this.emit("playvideo", this.videoData)
                }.bind(this))
            },
            nextdoPlay: function(e) {
                if (e && a.extend(this.videoData, e), h.issohu || h.is56) {
                    try {
                        this.videoData.channeled = window.videoData && window.videoData.channeled, this.videoData.order = this.originalConfig.data.order || window.videoData && window.videoData.order
                    } catch (t) {}
                    this.config.isVedio || (window.videoData = this.videoData)
                }
                this.config.isVedio || (window.__videoData = this.videoData), this.dataModel = new f(this, this.config, this.videoData, this.channelInfo, this.mcode), w.log("dataModel-->", this.dataModel), this.emit("data.ok"), (this.config.autoplay && n.autoplay() || this.videoActived) && this.play(), this.dataModel.timeLimit && this.emit("timelimit", this.dataModel.timeLimit), this.config.showCount && b(this.videoData).then(function(e) {
                    this.emit("playcount.loaded", e)
                }.bind(this), function(e) {
                    w.log("获取播放数失败-->", e)
                })
            },
            play: function(e) {
                if (this.timelimited = !1, e) this.enableVideoTag(), this.playByData(e);
                else if (this.isStarted) this._play();
                else {
                    if (!this.dataModel) return;
                    this.isStarted = !0, this.enableVideoTag(), this.adv.loadData(), this.emit("player.start"), y.pingback("ad_request_new")
                }
            },
            pause: function() {
                this.video.pause()
            },
            switchResolution: function(e) {
                var t = this.dataModel,
                    i = {};
                if (this.config.DMR_FLAG) return i.code = "104", this.video.pause(), void this.emit("data.exception", i);
                if (this.config.isLowestResolution) return i.code = "307", this.video.pause(), void this.emit("data.exception", i);
                if (t.hasResolution(e)) {
                    t.switchResolution(e);
                    var n = this.getCurrentTime();
                    this.isStarted ? (this.setVideoUrl(), this.seek(n)) : this.play()
                }
            },
            requestFullscreen: function() {
                this.fullscreen.requestFullscreen(), this.emit("requestFullscreen")
            },
            exitFullscreen: function() {
                this.fullscreen.exitFullscreen(), this.emit("exitFullscreen")
            },
            isNativeFullscreen: function() {
                return this.fullscreen.isNativeFullscreen()
            },
            showCloseSeekToast: function() {
                alert("本视频不支持进度拖动哦~")
            },
            seek: function(e) {
                if (this.isPlayingAD || this.config.closeSeek) return this.seekTo(e);
                if (!(e / 1 > this.getDuration())) {
                    var t, i = e,
                        n = this.dataModel;
                    "segment" == n.playMode && ((t = n.getMediaByTime(i)) && t.change && (t.media, n.setIndex(t.index), this.setVideoUrl()), i = t.offset), this.seekTo(i), this.play()
                }
            },
            seekTo: function(e) {
                this.switchSeekTimer && clearTimeout(this.switchSeekTimer);
                var t = this.getVideoDuration(),
                    i = this.video.seekable;
                if (1 == i.length && e <= i.end(0)) try {
                    t - 1 <= e && (e = t - 1), this.isBufferBySeek = !0, this.video.currentTime = e
                } catch (n) {
                    w.log("seek error", n)
                } else this.switchSeekTimer = setTimeout(function() {
                    this.seekTo(e)
                }.bind(this), 100)
            },
            enableVideoTag: function() {
                this.videoActived || this._play()
            },
            delayBufferCount: function() {
                clearTimeout(this.bufferDelayTimer), this.bufferDelayTimer = setTimeout(function() {
                    this.bufferDelayTimer = null
                }.bind(this), this.bufferDelayTime)
            },
            onPopstate: function(e) {
                var t = e.state;
                t && t.vid && (this.reset(), this.doPlay(t))
            },
            onLoadedmetadata: function() {
                this.emit("loadedmetadata")
            },
            onWaiting: function() {
                !this.video.src || this.isPlayingAD || this.isBufferBySeek || this.bufferDelayTimer || (this.bufferCountInMinitus += 1, this.bufferCountInMinitusTimer || (this.bufferCountInMinitusTimer = setTimeout(function() {
                    this.bufferCountInMinitusTimer = null;
                    var e = !1;
                    1 == this.bufferCountInMinitus && (this.bufferCount += 1, e = !0), this.bufferCountInMinitus = 0, e && this.emit("buffer", this.bufferCount)
                }.bind(this), 1e3))), this.emit("waiting")
            },
            onPlaying: function() {
                this.isPlayingAD || (this.isBufferBySeek = !1, this.delayBufferCount()), this.emit("playing")
            },
            onTimeupdate: function() {
                var e = this;
                if (this.videoActived = !0, this.dataModel) {
                    var t, i, n = this.config.closeSeek;
                    if (this.isPlayingAD || !0 === n) {
                        if (2 < (t = this.getVideoCurrentTime()) - this.lastCurrentTime) return !0 === n && 0 < this.getCurrentTime() && this.showCloseSeekToast(), this.seek(this.lastCurrentTime);
                        0 < t && (this.lastCurrentTime = t)
                    }
                    if (this.emit("timeupdate"), this.isPlayingAD) try {
                        t = Math.floor(this.getVideoCurrentTime()), i = this.getVideoDuration(), !this.segmentEndTimer && Math.abs(i - t) < 1 && (this.segmentEndTimer = setTimeout(function() {
                            return e.onEnded()
                        }, 1500))
                    } catch (o) {}!this.isPlayingAD && this.dataModel.timeLimit && (t = this.getCurrentTime()) >= this.dataModel.timeLimit && (this.reset(), this.timelimited = !0, this.emit("ended"))
                }
            },
            onPlay: function() {
                this.emit("play")
            },
            onPause: function() {
                this.emit("pause")
            },
            onEnded: function() {
                clearTimeout(this.segmentEndTimer), this.segmentEndTimer = null;
                var e = this.dataModel;
                if (this.isPlayingAD) {
                    if (5 < this.getVideoDuration() - this.getVideoCurrentTime()) return;
                    this.emit("adv.segment.ended"), this.adv.isEnd && (this.isPlayingAD = !1, this.emit("adv.ended")), this.setVideoUrl()
                } else {
                    if (this.timelimited) return;
                    "segment" == e.playMode ? (this.emit("segment.ended"), e.getMediaByIndex() ? this.setVideoUrl() : (this.reset(), this.emit("ended"))) : (this.reset(), this.emit("ended"))
                }
            },
            onError: function() {
                this.video.src && (this.isPlayingAD ? 0 == this.getVideoCurrentTime() ? this.emit("adv.error") : this.emit("adv.ended") : (this.emit("error", this.video.error || {}), y.pingback("play_fail_video"), y.pingback("play_fail_" + this.video.error.code)))
            },
            getCurrentTime: function() {
                if (!this.isStarted) return 0;
                if (this.isPlayingAD) return 0;
                var e = this.dataModel;
                return "segment" == e.playMode ? this.getVideoCurrentTime() + e.getOffsetDuration() : this.getVideoCurrentTime()
            },
            getBufferedTime: function() {
                if (!this.isPlayingAD) {
                    var e = this.getVideoBufferedTime(),
                        t = this.dataModel;
                    if (t) return "segment" == t.playMode && (e += t.getOffsetDuration()), e
                }
            },
            getVideoBufferedTime: function() {
                var e = this.video.buffered,
                    t = 0;
                try {
                    t = e.end(0)
                } catch (i) {}
                return t
            },
            getVideoCurrentTime: function() {
                return this.video.currentTime
            },
            getVideoDuration: function() {
                return this.video.duration
            },
            getDuration: function() {
                return this.dataModel ? this.dataModel.duration : 0
            },
            resetBuffer: function() {
                this.bufferCount = -1, this.isBufferBySeek = !1, clearTimeout(this.bufferDelayTimer), this.bufferDelayTimer = null, this.bufferCountInMinitus = 0, clearTimeout(this.bufferCountInMinitusTimer), this.bufferCountInMinitusTimer = null
            },
            reset: function() {
                this.pause(), this.isPlayingAD = !1, this.isStarted = !1, this.lastCurrentTime = 0, this.timelimited = !1, this.segmentEndTimer = null, this.resetFlag = !0, this.resetBuffer(), this.emit("reset")
            },
            appendList: function() {
                this.playList.append.apply(this.playList, arguments)
            },
            replaceList: function(e) {
                this.playList.replace(e)
            },
            clearList: function() {
                this.playList.clear()
            },
            getADData: function(e) {
                return this.adv.getDataByIndex(e)
            }
        }, S)), a.extend(k.prototype, {
            version: "1578046045625"
        }), e.exports = k
    },
    function(e, t, i) {
        "use strict";
        var p = function l(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(11));
        var f = i(1).os,
            n = i(1).browser,
            m = i(3),
            v = i(6),
            g = i(12),
            y = i(8),
            w = i(2),
            o = i(10),
            h = i(18),
            b = i(5),
            x = m.ScreenSize,
            a = 44,
            s = "";
        f.ipad ? (a = 4, s = "1h5") : f.iphone ? (a = 41, s = "3h5") : f.android ? (a = 42, s = "6h5") : f.wp ? (a = 43, s = "11h5") : n.ie && (a = 43);
        var P = function(e) {
            var t = 0;
            try {
                window.top.location.href
            } catch (i) {
                t = 1
            }
            return t
        }(),
            D = function D() {
                var e = location.search.toLowerCase().match(/[\?&]src=(.*?)(?:[&#]|$)/);
                return e && e.length ? e[1] : ""
            }, r = function r() {
                var e, t, i = "",
                    n = "0123456789abcdef";
                for (e = 0; e < 8; e++) i += n.charAt(Math.round(15 * Math.random()));
                for (e = 0; e < 3; e++)
                    for (i += "-", t = 0; t < 4; t++) i += n.charAt(Math.round(15 * Math.random()));
                for (i += "-", i += ("000000000" + (new Date).getTime().toString(16)).substr(-8), e = 0; e < 4; e++) i += n.charAt(Math.round(15 * Math.random()));
                return i
            };

        function d(e, t) {
            this.player = e, this.config = t || {}, this.videoDuration = 0;
            var i = this.getVideoData();
            this.qfDomain = (.5 < Math.random() ? "qf1" : "qf2") + ".hd.sohu.com.cn", this.qcURL = null !== b.getQueryString("r") && i ? "//sptjs1.hd.sohu.com.cn/h5/tttst.html" : "//qc.hd.sohu.com.cn/caton/video/", this.playId = r(), this.vvtime = +new Date, w.extend(this, {
                realVVDone: !1,
                vvDone: !1,
                endedDone: !1,
                heartTimer: null
            }), this.heartTime = 3e4, m.is56 && (this.heartTime = 12e4), this.init()
        }
        w.extend(d.prototype, {
            qcPlat: s,
            platType: a,
            init: function() {
                this.observPlayer()
            },
            observPlayer: function() {
                var e = this,
                    t = 0;
                this.player.on("reset", this.reset.bind(this)), this.player.on("data.ok", function() {
                    clearInterval(e.heartTimer), e.heartTimer = null, t = 0, e.vvtime = +new Date, m.isExternal && !e.config.autoplay || (e.vv(), e.irsVV())
                }), this.player.on("player.start", function() {
                    return e.vv()
                }), this.player.on("timeupdate", function() {
                    !this.player.isPlayingAD && this.player.isStarted && (this.realVV(), this.player.isPlayingAD || this.heartTimer || (this.heartTimer = setInterval(function() {
                        0 < ++t && t % 30 == 0 && this.heart(t)
                    }.bind(this), 1e3)))
                }.bind(this)), this.player.on("pause", function() {
                    clearInterval(this.heartTimer), this.heartTimer = null
                }.bind(this)), this.player.on("ended", function() {
                    var e = this.player.getDuration();
                    this.ended(e, this.player.bufferCount)
                }.bind(this)), this.player.on("error", function(e) {
                    this.qcPingback("code=8&errorcode=" + e.code + "&currentTime=" + this.player.getCurrentTime())
                }.bind(this)), this.player.on("buffer", function(e) {
                    e < 1 || (1 == e ? this.qcPingback("code=6") : this.qcPingback("code=4"))
                }.bind(this))
            },
            getVideoData: function() {
                return this.player.videoData
            },
            getVideoSrc: function() {
                var e = this.getVideoData(),
                    t = this.player.video && this.player.video.src;
                return e.video_src || t || ""
            },
            qcPingback: function(e) {
                var t = "",
                    i = "",
                    n = m.uid,
                    o = this.player.dataModel || {}, a = this.getVideoData(),
                    s = this.getVideoSrc(),
                    r = o.mediaType || "",
                    d = a.plid || a.aid || a.sid || "";
                f.ios ? t = 1 : f.android ? t = 2 : f.wp && (t = 3), f.ipad ? i = "ipad" : f.ipod ? i = "ipod" : f.iphone ? i = "iphone" : f.wp && (i = "windowsphone");
                var l = (new Date).getTime(),
                    c = h("" + a.vid % 127 + n + l % 127);
                e += "&uid=" + n + "&poid=&plat=" + this.qcPlat + "&sver=" + f.version + "&os=" + t + "&sysver=" + f.version + "&net=" + y.getConnectionType() + "&playmode=&tvid=" + (a.tvid || "") + "&vid=" + (a.vid || "") + "&sid=" + d + "&vtype=" + r + "&pn=" + i + "&duFile=" + encodeURIComponent(s) + "&version=" + (a.videoVersion || 0) + "&isp2p=0&ltype=0&site=" + (a.site || 1) + "&time=" + l + (o.ugcode ? "&ugcode2=" + o.ugcode : "") + (o.ugu ? "&ugu2=" + o.ugu : "") + "&ts=" + c, y.pingback(this.qcURL + "?" + e)
            },
            qfPingback: function(e) {
                var t = this.getVideoData(),
                    i = this.player.dataModel || {};
                e += "&seekto=0&pt=" + this.platType + "&sid=" + m.uid + "&tvid=" + (t.tvid || "") + "&vid=" + (t.vid || "") + "&nid=" + (t.nid || "") + "&ref=" + encodeURIComponent(location.href) + "&dom=" + (i.ugcode ? "&ugcode2=" + i.ugcode : "") + (i.ugu ? "&ugu2=" + i.ugu : "") + "&t=" + +new Date, y.pingback("//" + this.qfDomain + "/dov.do?method=stat" + e)
            },
            DMPingback: function(e, t) {
                var i = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : {}, n = this.getVideoData(),
                    o = this.player.dataModel || {}, a = y.getChanneled(),
                    s = this.player.pdna || "",
                    r = location.href,
                    d = n.plid || n.aid || n.sid || "",
                    l = this.player.dataModel && this.player.dataModel.mcode || "";
                e = w.extend({
                    url: encodeURIComponent(r),
                    refer: b.getParam("landingrefer") || encodeURIComponent(document.referrer),
                    uid: m.uid,
                    webtype: y.getConnectionType(),
                    screen: x,
                    muid: m.muid,
                    catecode: n.cateCode,
                    pid: d,
                    tvid: n.tvid || "",
                    vid: n.vid,
                    cateid: n.cid,
                    ltype: n.ltype,
                    company: n.company,
                    version: 0,
                    type: 9001 == n.cid ? "my" : "vrs",
                    td: n.duration || 0,
                    apikey: m.API_KEY,
                    t: +new Date,
                    os: f.type,
                    platform: f.platform,
                    passport: g.getPassport(),
                    channeled: a,
                    site: n.site || 1,
                    playid: this.playId,
                    nid: n.nid || "",
                    mcode: l,
                    MTV_SRC: encodeURIComponent(p["default"].get()),
                    sd: encodeURIComponent(D()),
                    oth: y.getLQD(),
                    cd: y.getLCODE(),
                    isout: P
                }, e);
                o.ugcode && (e.ugcode2 = o.ugcode), o.ugu && (e.ugu2 = o.ugu);
                var c = b.getParam("columnid");
                if (c && (i || (i = {}), i.columnId = c), "" !== s) {
                    var h = "index;" + (n.vid || null) + "#" + (n.site || null) + ";" + s + ";h5";
                    i || (i = {}), i.rec = h
                }
                try {
                    v("_pass_baitu_from") && (i.baitu_from = v("_pass_baitu_from"))
                } catch (u) {}
                i && (e.details = JSON.stringify(i)), n.liveId && (e.cid = "9002"), y.pingback((t || "//z.m.tv.sohu.com/vv.gif") + "?" + b.stringify(e)), window.flashStatistId && (e.channeled = window.flashStatistId, y.pingback((t || "//z.m.tv.sohu.com/vv.gif") + "?" + b.stringify(e)))
            },
            DMPingback56: function(e) {
                var t = this.getVideoData(),
                    i = this.player.dataModel || {}, n = 2 == t.site ? "my" : "vrs",
                    o = t.ltype || 0,
                    a = 2 == t.site ? 1 : 0,
                    s = b.getParam("landingrefer") || encodeURIComponent(document.referrer),
                    r = encodeURIComponent(location.href),
                    d = y.getChanneled();
                e = w.extend({
                    cts: "isow",
                    isHD: 0,
                    time: 0,
                    ua: "h5",
                    isp2p: 0,
                    sid: t.sid,
                    uid: m.uid,
                    pid: t.pid || "",
                    tvid: t.tvid || "",
                    vid: t.vid,
                    nid: t.nid || "",
                    type: n,
                    ltype: o,
                    company: t.company || "",
                    url: r,
                    td: t.duration || 0,
                    cateid: t.cateid || "",
                    catcode: t.cateCode || "",
                    refer: s,
                    systype: a,
                    os: f.type,
                    platform: f.platform,
                    passport: g.getPassport(),
                    channeled: d,
                    screen: x,
                    webtype: y.getConnectionType(),
                    MTV_SRC: encodeURIComponent(p["default"].get()),
                    sd: encodeURIComponent(D()),
                    apikey: m.API_KEY,
                    fver: "",
                    isout: P,
                    t: (new Date).getTime()
                }, e), i.ugcode && (e.ugcode2 = i.ugcode), i.ugu && (e.ugu2 = i.ugu), y.pingback("//pb.hd.sohu.com.cn/hdpb.gif?" + b.stringify(e))
            },
            startVV: function() {
                this.vv(), (f.ios && (n.uc || n.qq) || n.baiduboxapp) && (this.realVV(), this.heartTimer || (this.heartTimer = setInterval(function() {
                    this.heart()
                }.bind(this), this.heartTime)))
            },
            checkVV: function(e) {
                2 == this.player.videoData.site && (e += "_pgc"), o.pingback(e)
            },
            vv: function() {
                if (!this.vvDone) {
                    this.vvDone = !0;
                    var e = this.getVideoData(),
                        t = 10;
                    e && "undefined" != typeof e.duration && (t = e.duration), this.qfPingback("&error=0&code=2&allno=0&vvmark=1&totTime=" + t), m.IS_EXTERNAL_PLAYER || y.pingback(("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/b?c1=1&c2=7395122&c3=&c4=&c5=&c6=&c11=" + m.uid), m.is56 ? this.DMPingback56({
                        msg: "playCount"
                    }) : this.DMPingback({
                        site: e.site || 1,
                        msg: "playCount",
                        time: "0"
                    }), this.checkVV("play_verify1"), this.qcPingback("code=10&duation=0")
                }
            },
            irsVV: function() {
                var e = "//h10-" + this.getVideoData().vid + ".z1.irs01.com/?p=h10&ts=" + (new Date).getTime();
                y.pingback(e)
            },
            realVV: function(e) {
                if (!this.realVVDone) {
                    this.realVVDone = !0;
                    var t = e ? (+new Date - e) / 1e3 : 0;
                    this.getVideoData();
                    m.is56 ? this.DMPingback56({
                        msg: "videoStart"
                    }) : this.DMPingback({
                        msg: "videoStart",
                        time: (+new Date - this.vvtime) / 1e3
                    }), this.checkVV("play_real_vv"), this.qcPingback("code=5&duation=" + t)
                }
            },
            heart: function(e) {
                var t = e || Math.round(this.player.getCurrentTime());
                m.is56 ? this.heart56(t) : this.DMPingback({
                    tc: t
                }, "//z.m.tv.sohu.com/playtime.gif")
            },
            heart56: function(e) {
                var t = this.getVideoData(),
                    i = this.player.dataModel || {}, n = 2 == t.site ? "my" : "vrs",
                    o = t.ltype || 0,
                    a = 2 == t.site ? 1 : 0,
                    s = b.getParam("landingrefer") || encodeURIComponent(document.referrer),
                    r = encodeURIComponent(location.href),
                    d = y.getChanneled(),
                    l = {
                        cts: "isow",
                        isHD: 0,
                        time: e || 0,
                        ua: "h5",
                        heart: 120,
                        isp2p: 0,
                        sid: t.sid,
                        uid: m.uid,
                        pid: t.pid || "",
                        tvid: t.tvid || "",
                        vid: t.vid,
                        nid: t.nid || "",
                        type: n,
                        ltype: o,
                        company: t.company || "",
                        url: r,
                        td: t.duration || 0,
                        cateid: t.cateid || "",
                        catcode: t.cateCode || "",
                        refer: s,
                        systype: a,
                        apikey: m.API_KEY,
                        fver: "",
                        os: f.type,
                        platform: f.platform,
                        passport: g.getPassport(),
                        channeled: d,
                        screen: x,
                        webtype: y.getConnectionType(),
                        MTV_SRC: encodeURIComponent(p["default"].get()),
                        sd: encodeURIComponent(D()),
                        t: (new Date).getTime()
                    };
                i.ugcode && (l.ugcode2 = i.ugcode), i.ugu && (l.ugu2 = i.ugu), y.pingback("//pb.hd.sohu.com.cn/stats.gif?" + b.stringify(l))
            },
            ended: function(e, t) {
                this.endedDone || (this.endedDone = !0, m.is56 ? this.DMPingback56({
                    msg: "videoEnds",
                    time: e
                }) : this.DMPingback({
                    msg: "videoEnds",
                    time: e
                }), this.qcPingback("code=7&duration=" + e + "&ct=" + t), this.playId = r())
            },
            reset: function() {
                this.realVVDone = !1, this.vvDone = !1, this.endedDone = !1, clearInterval(this.heartTimer), this.heartTimer = null
            }
        }), e.exports = d
    },
    function(e, t, i) {
        "use strict";
        var n = function w(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(i(15));
        var o = i(19),
            a = (i(21), i(1).browser),
            s = i(1).os,
            r = i(2),
            d = i(27),
            l = i(4),
            c = i(20),
            h = i(14),
            u = i(10),
            p = i(13).EventEmitter,
            f = i(25);

        function m(e) {
            return (c[e] || "") + "（" + e + "）"
        }
        var v = {
            video: function() {
                return '<div class="x-video x-video-hide"><video webkit-playsinline x-webkit-airplay="isHtml5UseAirPlay" ></video></div>'
            },
            ctrl: function() {
                return '<div class="x-ctrl-container"><div class="x-dashboard"><div class="x-playbtn-wrap"><div class="x-play-btn"></div><div class="x-pause-btn"></div></div><div class="x-fsbtn-wrap"><div class="x-fs-btn"></div><div class="x-exit-fs-btn"></div></div></div></div>'
            },
            ad: function() {
                return '<div class=x-ad-panel><a class="x-ad-link" target="_blank" href="#">广告详情&nbsp;&gt;</a><div class="x-cover-playbtn"></div><div class="x-ad-time-wrap"><div class="x-ad-time"></div><div class="x-ad-fee-btn">免费去广告</div></div></div>'
            },
            resolution: function() {
                return '<div class="x-resolution-panel"></div>'
            },
            loading: function() {
                return '<div class="x-player-loading-panel"><div class="x-player-loading"></div></div>'
            }
        };
        v.player = '<%@ h:helper %><div class="x-player">' + v.video() + '<div class="x-poster"></div><div class="x-info-panel"><span class="x-live-tag"></span><div class="x-live-title"></div></div><div class="x-timelimit-panel"><span class="x-limit-time"></span><mark>免费试看</mark></div>' + v.ctrl() + v.loading() + v.ad() + '<div class="x-cover-playbtn-wrap"><div class="x-cover-playbtn"></div></div><div class="x-recommend-panel"><div class="x-replay-panel"><div class="x-rcmm-txt">试看结束，观看完整版请打开APP</div><div class="x-replay-btn"><button class="x-rcm-replay-btn">重新试看</button><button class="x-rcm-app-btn">打开APP</button></div></div><div class="x-recommend-list-wrap"></div></div><div class="x-message-panel"><div class="x-message-frame"></div><div class="x-message-btn-frame"><div class="x-msg-txt"></div><button class="x-msg-app-btn">去APP观看</button></div></div><div class="x-liveend-panel"><div class="x-liveend-msg"><div class="x-liveend-txt1">直播结束</div><div class="x-liveend-txt2">安装<button class="x-liveend-msg-app-btn">搜狐视频APP</button>观看更多直播</div></div></div><div class="x-bigplaybtn-panel"></div><div class="x-download-panel x-dl-shake"><div class="btn-close"></div><div class="x-download-intro"><img src="//css.tv.itc.cn/m/img/logo_download.png" class="logo"><div class="txt"><p class="txt1">下载搜狐视频APP</p><p class="txt2">3倍流畅不卡顿&nbsp;&nbsp;广告少还不用等缓冲</div></div><div class="x-download-btn">立即安装</div></div></div>';

        function g(e) {
            if (!isNaN(e)) {
                e = parseInt(e || 0);
                var t = "" + Math.floor(e / 60);
                return e = "" + e % 60, t.length < 2 && (t = "0" + t), e.length < 2 && (e = "0" + e), t + ":" + e
            }
        }

        function y(e, t) {
            this.superClass.constructor.call(this), this.player = e, this.originalConfig = t, this.config = t || {}, this.el = this.player.el, this.tmpl = new o(v.player), this.resolutionTmpl = new o('<%@ h:helper %><% var i = 0, len = resolutionList.length, resolution, title;%><% for (; i < len; i++) { %><%resolution = resolutionList[i];title = RESOLUTION_MODE[resolution];%><div class="x-resolution-item<%= resolution == currentResolution ? " on" : "" %>" data-resolution="<%= resolution %>"><%= title %></div><% } %>'), this.recommendTmpl = new o('<%@ h:helper %><% var i = 0, len = videos.length, video; %><ul class="x-recommend-list"><% for(; i < len; i++) {%><% video = videos[i]; %><li class="x-recommend-item"><a href="<%= video.videoUrl %>"><img src="<%= video.v_320_180 %>"><p><%= video.videoName %></p></a></li><% } %></ul>'), this.adv = this.player.adv, this.isDragging = !1, this.idleTimer = null, this.timeupdateCount = 0, this.clickOrPlayFlag = !1, this.init()
        }
        r.inherit(y, p, {
            init: function() {
                this.el.innerHTML = this.tmpl.render({
                    config: this.config
                }), this.loadingPanle = this.el.querySelector(".x-player-loading-panel"), this.ctrlContainer = this.el.querySelector(".x-ctrl-container"), this.elposter = this.el.querySelector(".x-poster"), this.coverPlayBtnWrap = this.el.querySelector(".x-cover-playbtn-wrap"), this.elDashboard = this.el.querySelector(".x-dashboard"), this.xvideoEl = this.el.querySelector(".x-video"), this.adPanel = this.el.querySelector(".x-ad-panel"), this.adLink = this.adPanel.querySelector("a"), this.adTime = this.adPanel.querySelector(".x-ad-time"), this.adFeeBtn = this.adPanel.querySelector(".x-ad-fee-btn"), this.adCoverBtn = this.adPanel.querySelector(".x-cover-playbtn"), this.playBtn = this.el.querySelector(".x-play-btn"), this.pauseBtn = this.el.querySelector(".x-pause-btn"), this.fsBtn = this.el.querySelector(".x-fs-btn"), this.exitFsBtn = this.el.querySelector(".x-exit-fs-btn"), this.infoPanel = this.el.querySelector(".x-info-panel"), this.elTitle = this.infoPanel.querySelector(".x-live-title"), this.messagePanel = this.el.querySelector(".x-message-panel"), this.messageFrame = this.el.querySelector(".x-message-frame"), this.messageBtnFrame = this.el.querySelector(".x-message-btn-frame"), this.appBtn = this.el.querySelector(".x-msg-app-btn"), this.timelimitPanel = this.el.querySelector(".x-timelimit-panel"), this.elTimeLimit = this.timelimitPanel.querySelector(".x-limit-time"), this.replayPanel = this.el.querySelector(".x-replay-panel"), this.recommendPanel = this.el.querySelector(".x-recommend-panel"), this.downloadPanel = this.el.querySelector(".x-download-panel"), this.bigplayPanel = this.el.querySelector(".x-bigplaybtn-panel"), this.livedEndPanel = this.el.querySelector(".x-liveend-panel"), this.liveAppBtn = this.el.querySelector(".x-liveend-msg-app-btn"), this.initEvent()
            },
            enableSeek: function() {},
            initEvent: function() {
                this.observPlayer();
                var e, t = this.player,
                    i = ("onfullscreenchange" in document ? e = "fullscreenchange" : "onwebkitfullscreenchange" in document ? e = "webkitfullscreenchange" : "onmozfullscreenchange" in document ? e = "mozfullscreenchange" : "msRequestFullscreen" in document && (e = "MSFullscreenChange"), e);
                i && document.addEventListener(i, this.onfullscreenchange.bind(this)), this.coverPlayBtnWrap.addEventListener("click", function(e) {
                    this.onClickPlay(), t.play(), e.stopPropagation()
                }.bind(this)), this.adLink.addEventListener("click", function() {
                    var e = this.adLink.getAttribute("data-pingback");
                    this.player.adv.pingback(e), this.player.pause()
                }.bind(this)), this.adCoverBtn.addEventListener("click", function() {
                    d.hide(this.adCoverBtn), this.clickOrPlayFlag = !0, this.player.play()
                }.bind(this)), this.ctrlContainer.addEventListener("click", function() {
                    this.isDashBoardShowed() ? this.hideDashBoard() : this.showDashBoard()
                }.bind(this)), this.playBtn.addEventListener("click", function() {
                    t.play()
                }), this.pauseBtn.addEventListener("click", function() {
                    t.pause()
                }), this.fsBtn.addEventListener("click", function() {
                    t.requestFullscreen(), t.play()
                }), this.exitFsBtn.addEventListener("click", function() {
                    t.exitFullscreen()
                }), this.elDashboard.addEventListener("click", function(e) {
                    this.showDashBoard(), e.stopPropagation()
                }.bind(this)), this.appBtn.addEventListener("click", function(e) {
                    a.wx ? window.apptips && window.apptips.callApp() : window.apptips.callApp("appdownload_videoopen"), e.stopPropagation()
                }), this.liveAppBtn.addEventListener("click", function(e) {
                    a.wx ? window.apptips && window.apptips.callApp() : window.apptips.callApp("appdownload_banner_open"), e.stopPropagation()
                }), this.replayPanel.addEventListener("click", function(e) {
                    a.wx ? window.apptips && window.apptips.callApp() : h.gotoDownload(), e.stopPropagation()
                }.bind(this)), this.adFeeBtn.addEventListener("click", function() {
                    u.pingback("appdownload_adRemove"), t.pause(), this.appActions()
                }.bind(this)), this.downloadPanel.addEventListener("click", function(e) {
                    e.preventDefault(), e.target.classList.contains("btn-close") ? (u.pingback("appdownload_pause_close"), d.hide(e.currentTarget), this.showDashBoard()) : (u.pingback("appdownload_pause"), window.apptips ? window.apptips.callApp() : this.appActions())
                }.bind(this)), this.bigplayPanel.addEventListener("click", function(e) {
                    this.showDashBoard(), t.play()
                }.bind(this))
            },
            appActions: function() {
                n["default"].loadData().then(function(e) {
                    var t = e.cooperation;
                    if (1 == (t === undefined ? {} : t).startapp) {
                        var i = h.parserAttributes();
                        i.type = "click";
                        try {
                            var n = h.sendAction(i)
                        } catch (o) {
                            alert(o)
                        }
                        n && n.then(function(e) {
                            e && !a.sohuVideoApp && h.gotoDownload()
                        })
                    } else a.sohuVideoApp || h.gotoDownload()
                })
            },
            observPlayer: function() {
                this.player.on("waiting", function() {
                    this.clickOrPlayFlag && this.showLoading(), f.loadData(window.videoData).then(function(e) {
                        200 == e.code && (e.data.videoData.urls.length || (this.hideLoading(), this.player.exitFullscreen(), this.liveEnded()))
                    }.bind(this))
                }.bind(this)), this.player.on("playing", this.onPlaying.bind(this)), this.player.on("error", this.onError.bind(this)), this.player.on("data.loading", this.showLoading.bind(this)), this.player.on("data.loaded", this.hideLoading.bind(this)), this.player.on("data.exception", this.onDataException.bind(this)), this.player.on("data.ok", this.updateUI.bind(this)), this.player.on("player.start", this.onStart.bind(this)), this.player.on("timeupdate", this.onTimeupdate.bind(this)), this.player.on("adv.ended", function() {
                    this.hideADUI(), this.showTimeLimitPanel()
                }.bind(this)), this.player.on("pause", this.onPause.bind(this)), this.player.on("play", this.onPlay.bind(this)), this.player.on("reset", this.reset.bind(this)), this.player.on("timelimit", function(e) {
                    this.elTimeLimit.innerHTML = g(e)
                }.bind(this)), this.player.on("recommend.loaded", function(e) {
                    d.show(this.recommendPanel), u.pingback("app_download_timeshow"), this.recommendPanel.querySelector(".x-recommend-list-wrap").innerHTML = this.recommendTmpl.render({
                        videos: e || []
                    })
                }.bind(this)), this.player.on("ended", function() {
                    this.reset(), d.show(this.livedEndPanel)
                }.bind(this))
            },
            onfullscreenchange: function(e) {
                var t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                t == this.el.querySelector(".x-player") ? (d.hide(this.fsBtn), d.show(this.exitFsBtn)) : null == t && (d.hide(this.exitFsBtn), d.show(this.fsBtn))
            },
            showMessagePanel: function() {
                d.show(this.messagePanel), u.pingback("appdownload_videoopen_show")
            },
            showTimeLimitPanel: function() {
                this.player.dataModel.timeLimit && d.show(this.timelimitPanel)
            },
            hideTimeLimitPanel: function() {
                d.hide(this.timelimitPanel)
            },
            showDownloadPanel: function() {
                d.show(this.downloadPanel), u.pingback("appdownload_pause_show")
            },
            showDashBoard: function() {
                d.show(this.elDashboard), d.show(this.infoPanel), this.hideDashboardDelay(), this.hideTimeLimitPanel()
            },
            hideDashBoard: function() {
                d.hide(this.elDashboard), d.hide(this.infoPanel), this.showTimeLimitPanel()
            },
            hideDashboardDelay: function() {
                clearTimeout(this.idleTimer), this.idleTimer = setTimeout(function() {
                    this.hideDashBoard()
                }.bind(this), 4e3)
            },
            isDashBoardShowed: function() {
                return "none" != d.css(this.elDashboard, "display")
            },
            showLoading: function() {
                d.show(this.loadingPanle)
            },
            hideLoading: function() {
                d.hide(this.loadingPanle)
            },
            onTimeupdate: function() {
                if (s.ios && a.qq && (this.hideLoading(), d.show(this.adCoverBtn)), this.clickOrPlayFlag = !0, this.player.isPlayingAD) {
                    if (0 == this.timeupdateCount) return void(this.timeupdateCount += 1);
                    this.updateADUI()
                } else this.hideADUI(), this.updateProgress();
                d.hide(this.messagePanel)
            },
            onPlay: function() {
                d.hide(this.playBtn), d.show(this.pauseBtn), d.hide(this.adCoverBtn), d.hide(this.downloadPanel), d.hide(this.bigplayPanel)
            },
            onPause: function() {
                this.player.isPlayingAD ? d.show(this.adCoverBtn) : (d.show(this.playBtn), d.hide(this.pauseBtn), this.showDownloadPanel(), d.show(this.bigplayPanel), this.showDashBoard(), clearTimeout(this.idleTimer))
            },
            onPlaying: function() {
                this.hideLoading(), d.hide(this.elposter), d.hide(this.coverPlayBtnWrap), d.hide(this.infoPanel), d.removeClass(this.xvideoEl, "x-video-hide"), d.hide(this.playBtn), d.show(this.pauseBtn)
            },
            onError: function(t) {
                this.hideLoading(), this.reset(), l.log("播放失败-->", t), this.player.dataModel.videoData.urls.length ? f.loadData(window.videoData).then(function(e) {
                    if (200 == e.code && !e.data.videoData.urls.length) return this.hideLoading(), this.player.exitFullscreen(), void this.liveEnded();
                    3 == t.code || 4 == t.code ? (this.messageBtnFrame.querySelector(".x-msg-txt").innerHTML = m(t.code), d.hide(this.messageFrame), d.show(this.messageBtnFrame)) : (this.messageFrame.innerHTML = m(t.code || "400"), d.hide(this.messageBtnFrame), d.show(this.messageFrame)), this.showMessagePanel()
                }.bind(this)) : this.liveEnded()
            },
            onDataException: function(e) {
                100 == e.code || 102 == e.code || 104 == e.code ? (this.messageBtnFrame.querySelector(".x-msg-txt").innerHTML = m(e.code), this.showMessagePanel(), d.show(this.messageBtnFrame), d.hide(this.messageFrame)) : (this.messageFrame.innerHTML = m(e.code || "400"), this.showMessagePanel(), d.show(this.messageFrame), d.hide(this.messageBtnFrame))
            },
            onClickPlay: function() {
                this.showLoading(), d.hide(this.coverPlayBtnWrap), d.hide(this.infoPanel), d.hide(this.recommendPanel), d.removeClass(this.xvideoEl, "x-video-hide")
            },
            onStart: function() {
                d.removeClass(this.xvideoEl, "x-video-hide"), d.hide(this.recommendPanel)
            },
            updateProgress: function() {
                this.updateBufferedTrack(), this.updateTime(), this.isDragging || this.updatePlayedTrack()
            },
            updateTime: function() {
                var e = this.player,
                    t = e.getCurrentTime(),
                    i = e.getDuration();
                this.elTimeLimit.innerHTML = g(Math.floor(i - t)), this.isDashBoardShowed() ? this.hideTimeLimitPanel() : this.showTimeLimitPanel()
            },
            updateUI: function() {
                this.player.getDuration();
                var e = this.player.dataModel;
                e.poster && (this.elposter.style.backgroundImage = "url(" + e.poster + ")"), this.elTitle.innerHTML = e.title, e.videoData.urls.length ? (d.show(this.elposter), d.show(this.infoPanel), d.show(this.coverPlayBtnWrap)) : this.liveEnded()
            },
            updateADUI: function() {
                var e = this.player.adv,
                    t = e.getDataByIndex(),
                    i = e.getCurrentTime(),
                    n = e.duration;
                t && (d.show(this.adPanel), this.adTime.innerHTML = "<b>" + Math.ceil(Math.max(n - i, 0)) + "</b>", t.clickurl ? (d.show(this.adLink), this.adLink.href = t.clickurl, this.adLink.setAttribute("data-pingback", t.cp)) : d.hide(this.adLink), d.hide(this.timelimitPanel))
            },
            hideADUI: function() {
                d.hide(this.adPanel)
            },
            reset: function() {
                d.show(this.elposter), d.show(this.infoPanel), d.hide(this.coverPlayBtnWrap), d.hide(this.downloadPanel), d.hide(this.bigplayPanel), setTimeout(function() {
                    d.hide(this.elDashboard)
                }.bind(this), 100), d.hide(this.messagePanel), d.hide(this.adPanel), d.hide(this.timelimitPanel), d.hide(this.recommendPanel), d.addClass(this.xvideoEl, "x-video-hide"), this.timeupdateCount = 0, this.clickOrPlayFlag = !1
            },
            liveEnded: function() {
                this.player.off("timeupdate"), this.player.off("pause"), this.player.off("waiting"), this.reset(), d.show(this.livedEndPanel), this.player.emit("ended")
            }
        }), e.exports = y
    },
    function(e, t, i) {
        "use strict";
        var n = i(2),
            o = i(19),
            a = i(13).EventEmitter;

        function s(e, t) {
            this.superClass.constructor.call(this), this.player = e, this.originalConfig = t, this.config = t || {}, this.el = this.player.el, this.tmpl = new o('<%@ h:helper %><div class="x-player"><div class="x-video"><video controls webkit-playsinline x-webkit-airplay="isHtml5UseAirPlay" <%= config.autoplay ? "autoplay" : "" %> ></video></div></div>'), this.init()
        }
        n.inherit(s, a, {
            init: function() {
                this.el.innerHTML = this.tmpl.render({
                    config: this.config
                })
            },
            reset: function() {}
        }), e.exports = s
    },
    function(e, t, i) {
        "use strict";
        var n = a(i(29)),
            o = a(i(15));

        function a(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var s = i(19),
            r = i(21),
            d = i(1).browser,
            l = i(1).os,
            c = i(2),
            h = i(8),
            v = i(27),
            g = i(4),
            u = i(20),
            p = i(14),
            f = i(10),
            m = i(13).EventEmitter,
            y = i(12),
            w = i(9),
            b = i(5),
            x = (i(28), i(26)),
            P = i(3);

        function D(e) {
            return (u[e] || "") + "（" + e + "）"
        }
        var _ = {
            video: function() {
                return '<div class="x-video x-video-hide"><video webkit-playsinline playsinline x-webkit-airplay="isHtml5UseAirPlay" <% if(os.android && browser.wx){%>x5-playsinline=""<%};%>></video></div>'
            },
            ctrl: function() {
                return '<div class="x-ctrl-container"><div class="x-drag-time-wrap x-s-forward"><b class="x-forward-ico"></b><b class="x-rewind-ico"></b><span class="x-drag-time-txt">00:00</span></div><div class="x-dashboard"><div class="x-dashboard-wrap"><div class="x-playbtn-wrap"><div class="x-play-btn"></div><div class="x-pause-btn"></div></div><span class="x-currenttime-txt">00:00</span><div class="x-progress-panel"><div class="x-progress-track"><div class="x-progress-buffer-track"></div><div class="x-progress-play-track"><div class="x-seek-btn"></div></div></div></div><span class="x-duration-txt">00:00</span><div class="x-resolution-type"></div><div class="x-fsbtn-wrap"><div class="x-fs-btn"></div><div class="x-exit-fs-btn"></div></div></div></div></div>'
            },
            ad: function() {
                return '<div class=x-ad-panel><a class="x-ad-link" target="_blank" href="#">广告详情&nbsp;&gt;</a><div class="x-cover-playbtn"></div><div class="x-ad-time-wrap"><div class="x-ad-time"></div><div class="x-ad-fee-btn">免费去广告</div></div></div>'
            },
            resolution: function() {
                return '<div class="x-resolution-panel"><div class="x-resolution-list"></div></div>'
            },
            loading: function() {
                return '<div class="x-player-loading-panel"><div class="x-player-loading"></div></div>'
            },
            plevel: function() {
                return '<div class="x-plevel-panel"><div class="x-plevel-frame"><div class="x-plevel-tt">该视频已加密</div><div class="x-plevel-form"><input type="password" placeholder="请输入密码查看"><div class="btn">提交</div></div><div class="x-plevel-errortip">密码错误，请重新输入</div></div></div>'
            }
        };
        _.player = '<%@ h:helper %><div class="x-player">' + _.video() + '<div class="x-poster"></div><div class="x-info-panel"><div class="x-title-wrap"><h1 class="x-title"></h1></div></div><div class="x-timelimit-panel"><span class="x-limit-time"></span><mark class="x-limit-action">看完整版</mark></div>' + _.ctrl() + _.resolution() + _.loading() + _.ad() + '<div class="x-cover-playbtn-wrap"><div class="x-cover-playbtn"></div></div><div class="x-recommend-panel"><div class="x-replay-panel"><div class="x-rcmm-txt">试看结束，观看完整版请打开APP</div><div class="x-replay-btn"><button class="x-rcm-replay-btn">重新试看</button><button class="x-rcm-app-btn">打开APP</button></div></div></div><div class="x-message-panel"><div class="x-message-frame"></div><div class="x-message-btn-frame"><div class="x-msg-txt"></div><button class="x-msg-app-btn">去APP观看</button></div></div><div class="x-pay-panel"></div><div class="x-replay-video-panel"></div><div class="x-bigplaybtn-panel"></div><div class="x-download-panel x-dl-shake"><div class="btn-close"></div><div class="x-download-intro"><img src="//css.tv.itc.cn/m/img/logo_download_v3.png" class="logo"><div class="txt"><p class="txt1">下载搜狐视频APP</p><p class="txt2">3倍流畅不卡顿&nbsp;&nbsp;广告少还不用等缓冲</div></div><div class="x-download-btn">立即安装</div></div><div class="x-hot-panel"></div>' + _.plevel() + '<div class="x-error-panel"><div class="x-error-txt-frame"><div class="x-error-txt"></div><div class="x-error-cd"><div class="second">5秒</div><div class="txt">后自动播放精彩内容</div></div></div><div class="x-error-btn-frame"><div class="x-error-txt"></div><div class="x-error-cd"><div class="second">5秒</div><div class="txt">后自动播放精彩内容</div></div><button class="x-error-app-btn">去APP观看</button></div></div></div>';
        var T, S;

        function k(e) {
            if (!isNaN(e)) {
                e = parseInt(e || 0);
                var t = "" + Math.floor(e / 60);
                return e = "" + e % 60, t.length < 2 && (t = "0" + t), e.length < 2 && (e = "0" + e), t + ":" + e
            }
        }

        function L(e, t) {
            this.superClass.constructor.call(this), this.player = e, this.originalConfig = t, this.config = t || {}, this.el = this.player.el, this.tmpl = new s(_.player), this.resolutionTmpl = new s('<%@ h:helper %><% var i = 0, len = resolutionList.length, resolution, title;%><% for (; i < len; i++) { %><%resolution = resolutionList[i];title = RESOLUTION_MODE[resolution];%><div class="x-resolution-item<%= resolution == currentResolution ? " on" : "" %>" data-resolution="<%= resolution %>"><%= title %></div><% } %>'), this.recommendTmpl = new s('<%@ h:helper %><% var i = 0, len = videos.length, video; %><ul class="x-recommend-list"><% for(; i < len; i++) {%><% video = videos[i]; %><li class="x-recommend-item"><a href="<%= video.videoUrl %>"><img src="<%= video.v_320_180 %>"><p><%= video.videoName %></p></a></li><% } %></ul>'), this.payTmpl = new s('<%@ h:helper %><div class="x-pay-frame"><div class="x-pay-msg-txt"></div><%if (data.playlistPayurl && data.playlistPrice) {%><span class="x-pay-msg-btn" data-type="album" data-href="<%= data.playlistPayurl%>">购买栏目￥<%= (data.playlistPrice/100)%></span><% }; %><%if (data.payurl && data.videoPrice) {%><span class="x-pay-msg-btn" data-type="video" data-href="<%= data.payurl%>">购买单视频￥<%= (data.videoPrice/100)%></span><% }; %></div>'), this.adv = this.player.adv, this.isDragging = !1, this.idleTimer = null, this.timeupdateCount = 0, this.clickOrPlayFlag = !1, this.errorCountDown = !1, this.outset = h.checkOutset(), this.registerHot = 0, this.adShowFlag = !1, this.timelimitShowFlag = !1, this.istimelimitFlag = !1, this.isDataException = !1, this.isError = !1, this.init()
        }
        c.inherit(L, m, {
            init: function() {
                this.el.innerHTML = this.tmpl.render({
                    config: this.config,
                    os: l,
                    browser: d
                }), this.loadingPanle = this.el.querySelector(".x-player-loading-panel"), this.ctrlContainer = this.el.querySelector(".x-ctrl-container"), this.elposter = this.el.querySelector(".x-poster"), this.resolutionPanel = this.el.querySelector(".x-resolution-panel"), this.resolutionList = this.el.querySelector(".x-resolution-list"), this.coverPlayBtnWrap = this.el.querySelector(".x-cover-playbtn-wrap"), this.elDashboard = this.el.querySelector(".x-dashboard"), this.xvideoEl = this.el.querySelector(".x-video"), this.adPanel = this.el.querySelector(".x-ad-panel"), this.adLink = this.adPanel.querySelector("a"), this.adTime = this.adPanel.querySelector(".x-ad-time"), this.adFeeBtn = this.adPanel.querySelector(".x-ad-fee-btn"), this.adCoverBtn = this.adPanel.querySelector(".x-cover-playbtn"), this.playBtn = this.el.querySelector(".x-play-btn"), this.pauseBtn = this.el.querySelector(".x-pause-btn"), this.fsBtn = this.el.querySelector(".x-fs-btn"), this.exitFsBtn = this.el.querySelector(".x-exit-fs-btn"), this.seekBtn = this.el.querySelector(".x-seek-btn"), this.elTrack = this.el.querySelector(".x-progress-track"), this.elPlaytrack = this.el.querySelector(".x-progress-play-track"), this.elBuffertrack = this.el.querySelector(".x-progress-buffer-track"), this.elDrapTimeWrap = this.el.querySelector(".x-drag-time-wrap"), this.elDrapTimeTxt = this.el.querySelector(".x-drag-time-txt"), this.elCurrentTime = this.el.querySelector(".x-currenttime-txt"), this.elDurationTime = this.el.querySelector(".x-duration-txt"), this.elResolutionType = this.el.querySelector(".x-resolution-type"), this.infoPanel = this.el.querySelector(".x-info-panel"), this.elTitleWrap = this.el.querySelector(".x-title-wrap"), this.elTitle = this.infoPanel.querySelector(".x-title"), this.messagePanel = this.el.querySelector(".x-message-panel"), this.messageFrame = this.el.querySelector(".x-message-frame"), this.messageBtnFrame = this.el.querySelector(".x-message-btn-frame"), this.appBtn = this.el.querySelector(".x-msg-app-btn"), this.payPanel = this.el.querySelector(".x-pay-panel"), this.timelimitPanel = this.el.querySelector(".x-timelimit-panel"), this.elTimeLimit = this.timelimitPanel.querySelector(".x-limit-time"), this.timeLimitBtn = this.timelimitPanel.querySelector(".x-limit-action"), this.replayPanel = this.el.querySelector(".x-replay-panel"), this.replayVideoPanel = this.el.querySelector(".x-replay-video-panel"), this.recommendPanel = this.el.querySelector(".x-recommend-panel"), this.recommendReplayBtn = this.el.querySelector(".x-rcm-replay-btn"), this.recommendAppBtn = this.el.querySelector(".x-rcm-app-btn"), this.downloadPanel = this.el.querySelector(".x-download-panel"), this.bigplayPanel = this.el.querySelector(".x-bigplaybtn-panel"), this.hotVedioPanel = this.el.querySelector(".x-hot-panel"), this.errorPanel = this.el.querySelector(".x-error-panel"), this.errorTxtFrame = this.errorPanel.querySelector(".x-error-txt-frame"), this.errorBtnFrame = this.errorPanel.querySelector(".x-error-btn-frame"), this.plevelPanel = this.el.querySelector(".x-plevel-panel"), this.plevelPassword = this.plevelPanel.querySelector("input"), this.plevelSubmitBtn = this.plevelPanel.querySelector(".btn"), this.plevelErrorTip = this.plevelPanel.querySelector(".x-plevel-errortip"), this.plevelErrorTip.innerHTML = "", this.initEvent(), this.enableSeek(), this.initHide()
            },
            enableSeek: function() {
                var o, a, s, r = this,
                    d = this.player,
                    t = this.originalConfig,
                    l = {}, e = "ontouchstart" in window,
                    i = e ? "touchstart" : "mousedown",
                    n = e ? "touchmove" : "mousemove",
                    c = e ? "touchend" : "mouseup",
                    h = function h(e) {
                        var t = e.changedTouches;
                        return t && t.length ? t[0] : e
                    }, u = function u(e) {
                        e.preventDefault(), e.stopPropagation(), g.log("进度条开始拖动"), clearTimeout(r.idleTimer);
                        var t = h(e);
                        r.isDragging = !0, l = {
                            x: t.screenX,
                            y: t.screenY
                        }, a = v.width(r.elPlaytrack), s = a
                    }, p = function p(e) {
                        if (r.isDragging) {
                            e.preventDefault(), e.stopPropagation();
                            var t = h(e).screenX - l.x,
                                i = a + t,
                                n = v.width(r.elTrack);
                            i = Math.max(i, 0), i = Math.min(i, n), "number" == typeof(o = d.getDuration() * i / n) && (r.updatePlayedTrack(o), v.show(r.elDrapTimeWrap), r.elDrapTimeTxt.innerHTML = k(o), s <= i ? (v.removeClass(r.elDrapTimeWrap, "x-s-rewind"), v.addClass(r.elDrapTimeWrap, "x-s-forward")) : (v.removeClass(r.elDrapTimeWrap, "x-s-forward"), v.addClass(r.elDrapTimeWrap, "x-s-rewind")), s = i)
                        }
                    }, f = function f(e) {
                        r.isDragging && "number" == typeof o && (t.closeSeek ? d.showCloseSeekToast() : d.seek(o), d.play(), m(), r.hideDashboardDelay(), e.stopPropagation())
                    }, m = function m(e) {
                        r.isDragging = !1, v.hide(r.elDrapTimeWrap), e && e.stopPropagation()
                    };
                this.seekBtn.addEventListener(i, u), document.addEventListener(n, p), document.addEventListener(c, f), document.addEventListener("touchcancel", m)
            },
            initEvent: function() {
                var i = this;
                this.observPlayer();
                var e, s = this.player,
                    t = ("onfullscreenchange" in document ? e = "fullscreenchange" : "onwebkitfullscreenchange" in document ? e = "webkitfullscreenchange" : "onmozfullscreenchange" in document ? e = "mozfullscreenchange" : "msRequestFullscreen" in document && (e = "MSFullscreenChange"), e);
                t && document.addEventListener(t, this.onfullscreenchange.bind(this)), this.resolutionPanel.addEventListener("click", function(e) {
                    e.stopPropagation();
                    var t = e.target;
                    if (v.hasClass(t, "x-resolution-item") && !v.hasClass(t, "on")) {
                        for (var i = t.getAttribute("data-resolution"), n = this.resolutionPanel.querySelectorAll(".x-resolution-item"), o = 0, a = n.length; o < a; o++) v.removeClass(n[o], "on");
                        v.addClass(t, "on"), s.isStarted && this.showDashBoard(), s.switchResolution(i), this.elResolutionType.innerHTML = r.RESOLUTION_MODE[this.player.dataModel.resolutionType]
                    }
                }.bind(this)), this.coverPlayBtnWrap.addEventListener("click", function(e) {
                    e.stopPropagation();
                    i.player.videoData;
                    i.onClickPlay(), s.play()
                }), this.adLink.addEventListener("click", function() {
                    this.player.pause();
                    var e = this.adLink.getAttribute("data-pingback");
                    this.player.adv.pingback(e), f.pingback("ad_detail_click")
                }.bind(this)), this.adCoverBtn.addEventListener("click", function() {
                    v.hide(this.adCoverBtn), this.clickOrPlayFlag = !0, this.player.play()
                }.bind(this)), this.ctrlContainer.addEventListener("click", function() {
                    this.isResolutionPanelShowed() ? v.hide(this.resolutionPanel) : this.isDashBoardShowed() ? this.hideDashBoard() : this.showDashBoard()
                }.bind(this)), this.playBtn.addEventListener("click", function(e) {
                    var t = "play_videoback";
                    s.play(), 2 == i.player.videoData.site && (t += "_pgc"), f.pingback(t)
                }), this.pauseBtn.addEventListener("click", function(e) {
                    var t = "play_videopause";
                    s.pause(), 2 == i.player.videoData.site && (t += "_pgc"), f.pingback(t)
                }), this.fsBtn.addEventListener("click", function() {
                    s.requestFullscreen(), s.play()
                }.bind(this)), this.exitFsBtn.addEventListener("click", function() {
                    s.exitFullscreen()
                }.bind(this)), this.elDashboard.addEventListener("click", function(e) {
                    this.showDashBoard(), e.stopPropagation()
                }.bind(this)), this.elResolutionType.addEventListener("click", function(e) {
                    this.showResolutionPanel(), e.stopPropagation()
                }.bind(this)), this.appBtn.addEventListener("click", function(e) {
                    var t;
                    t = "news" !== this.config.appid ? "app_download_banner" : "app_download_banner_news", f.pingback(t), this.appActions("1222220008"), e.stopPropagation()
                }.bind(this)), this.recommendAppBtn.addEventListener("click", function(e) {
                    f.pingback("app_download_time"), this.appActions("1222220009"), e.stopPropagation()
                }.bind(this)), this.recommendReplayBtn.addEventListener("click", function(e) {
                    v.hide(this.recommendPanel), this.player.play(), f.pingback("video_playback"), e.stopPropagation()
                }.bind(this)), this.adFeeBtn.addEventListener("click", function() {
                    s.pause(), f.pingback("appdownload_adRemove"), this.appActions("1222220005")
                }.bind(this)), this.downloadPanel.addEventListener("click", function(e) {
                    e.preventDefault(), e.target.classList.contains("btn-close") ? (f.pingback("appdownload_pause_close"), v.hide(e.currentTarget), this.showDashBoard()) : (f.pingback("appdownload_pause"), this.appActions("1222220007"))
                }.bind(this)), this.bigplayPanel.addEventListener("click", function(e) {
                    var t = "play_videoback";
                    this.showDashBoard(), s.play(), 2 == this.player.videoData.site && (t += "_pgc"), f.pingback(t)
                }.bind(this)), this.errorBtnFrame.querySelector(".x-error-app-btn").addEventListener("click", function(e) {
                    this.errorCountDown && null !== h.cdTimeout && clearTimeout(h.cdTimeout), f.pingback("appdownload_videoopen"), this.appActions("1222220008"), e.stopPropagation()
                }.bind(this)), this.plevelSubmitBtn.addEventListener("click", function(e) {
                    f.pingback("play_dec_");
                    var t = this.plevelPassword.value;
                    t && x.loadVideoSrc({
                        password: t,
                        id: this.player.originalConfig.data.vid
                    }).then(function(e) {
                        200 == e.code ? (v.hide(this.plevelPanel), this.player.nextdoPlay(e.data)) : this.plevelErrorTip.innerHTML = "密码错误，请重新输入"
                    }.bind(this))
                }.bind(this)), this.timeLimitBtn.addEventListener("click", function(e) {
                    e.preventDefault(), e.stopPropagation(), f.pingback("appdownload_fulledition"), s.pause(), this.appActions("1222220006")
                }.bind(this))
            },
            initHide: function() {
                this.config.hasOwnProperty("infoPanel") && !1 === this.config.infoPanel && (this.infoPanel.innerHTML = "", this.infoPanel.style.height = 0)
            },
            initHot: function() {
                var e = this.player.videoData;
                if (this.config.hotVideo && "1" != this.outset) {
                    var t, i, n = new s('<%@ h:helper %><% var i = 0, len = videos.length > 12 ? 12 : videos.length, video, url; %><div class="x-hot-title">今日热点</div><div class="x-hot-content"><% for(; i < len ; i++){  %><% video = videos[i]; %><a class="x-hot-list" data-vid="<%= video.vid%>" data-videoname="<%= video.videoName%>"><img class="image" src="<%= video.picUrl || video.v_320_180 || video.v_170_110 %>"><div class="title"><span><%= video.videoName %></span></div></a><% } %></div>'),
                        o = "//rc.vrs.sohu.com/",
                        a = "varsimilar" + (new Date).getTime();
                    1 == e.site ? (i = o + "dramaH5?callback=?&p=" + y.getPassport() + "&pid=" + e.plid, this.loadVrsRcData(i).then(function(e) {
                        e.data && e.data.videos && e.data.videos.length && (t = n.render({
                            videos: e.data.videos
                        }), this.hotVedioPanel.innerHTML = t, 0 == this.registerHot && this.initHotEvent(), v.show(this.hotVedioPanel), this.initTxtEllipsis())
                    }.bind(this))) : 2 == e.site && (i = o + "pgc/relate/video?&isH5=1&source=20&refer=" + (b.getParam("landingrefer") || encodeURIComponent(document.referrer)) + "&ab=" + this.ab + "&title=" + escape(escape(e.tvname || e.video_name || e.videoName)) + "&vid=" + e.vid + "&cid=" + e.cid + "&catecode=" + (e.cateCode || e.cate_code) + "&pageSize=30&var=" + a, this.loadPgcRcData(i).then(function() {
                        var e = window[a] || {};
                        e.videos && e.videos.length && (t = n.render({
                            videos: e.videos
                        }), this.hotVedioPanel.innerHTML = t, 0 == this.registerHot && this.initHotEvent(), v.show(this.hotVedioPanel), this.initTxtEllipsis())
                    }.bind(this)))
                }
            },
            appActions: function(a) {
                if (P.is56) n["default"].open();
                else if ("news" !== this.config.appid) {
                    window.apptips ? window.apptips.callApp("", a) : o["default"].loadData().then(function(e) {
                        var t = e.cooperation;
                        if (1 == (t === undefined ? {} : t).startapp) {
                            var i = p.parserAttributes();
                            i.type = "click", i.channeled = a, console.log(i);
                            try {
                                var n = p.sendAction(i)
                            } catch (o) {
                                console.log(o)
                            }
                            n && n.then(function(e) {
                                e && !d.sohuVideoApp && p.gotoDownload()
                            })
                        } else d.sohuVideoApp || p.gotoDownload()
                    })
                } else this.config.callUpNewsApp && this.config.callUpNewsApp.call()
            },
            observPlayer: function() {
                this.player.on("waiting", function() {
                    this.clickOrPlayFlag && this.showLoading()
                }.bind(this)), this.player.on("playing", this.onPlaying.bind(this)), this.player.on("error", this.onError.bind(this)), this.player.on("data.loading", this.showLoading.bind(this)), this.player.on("data.exception", this.onDataException.bind(this)), this.player.on("data.pay", this.onPay.bind(this)), this.player.on("data.payed", this.onPayed.bind(this)), this.player.on("data.replay", this.onReplay.bind(this)), this.player.on("data.ok", this.updateUI.bind(this)), this.player.on("player.start", this.onStart.bind(this)), this.player.on("timeupdate", this.onTimeupdate.bind(this)), this.player.on("adv.ended", function() {
                    this.hideADUI(), this.showTimeLimitPanel(), this.player.adv.isEmpty() || this.player.isPlayingAD || !this.player.videoActived || (this.showLoading(), this.showDefaultElPoster())
                }.bind(this)), this.player.on("list.ended", this.onListEnded.bind(this)), this.player.on("pause", this.onPause.bind(this)), this.player.on("play", this.onPlay.bind(this)), this.player.on("reset", this.reset.bind(this)), this.player.on("enterFancyFullscreen", this.onEnterFancyFullscreen.bind(this)), this.player.on("exitFancyFullscreen", this.onExitFancyFullscreen.bind(this)), this.player.on("timelimit", function(e) {
                    this.elTimeLimit.innerHTML = k(e)
                }.bind(this)), this.player.on("recommend.loaded", function(e) {
                    v.show(this.recommendPanel), this.player.exitFullscreen(), f.pingback("app_download_timeshow")
                }.bind(this)), this.player.on("ended", function() {
                    this.hideLoading(), "1" == this.outset && (this.config.isVedio || this.config.playback) && (this.onReplay(), this.player.exitFullscreen(), this.config.dlBanner || this.config.dlBanner == undefined ? (!d.weixin || d.weixin && 3 != this.outset) && (this.hideDashBoard(), this.showDownloadPanel()) : this.showDashBoard()), "1" != this.outset && (this.config.hotVideo ? (v.hide(this.downloadPanel), v.hide(this.bigplayPanel), v.hide(this.infoPanel), this.player.exitFullscreen(), this.initHot()) : this.config.playback && !this.config.hotVideo ? (this.onReplay(), this.config.dlBanner || this.config.dlBanner == undefined ? (!d.weixin || d.weixin && 3 != this.outset) && (this.hideDashBoard(), this.showDownloadPanel()) : this.showDashBoard()) : this.showDashBoard())
                }.bind(this)), this.player.on("play.plevel", function(e) {
                    2 == e && (this.showDefaultElPoster(), this.hideDashBoard(), this.hideLoading(), v.hide(this.coverPlayBtnWrap), v.hide(this.bigplayPanel), v.show(this.plevelPanel))
                }.bind(this))
            },
            onfullscreenchange: function(e) {
                var t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                t == this.el.querySelector(".x-player") ? (v.hide(this.fsBtn), v.show(this.exitFsBtn)) : null == t && (v.hide(this.exitFsBtn), v.show(this.fsBtn))
            },
            onEnterFancyFullscreen: function() {
                v.hide(this.fsBtn), v.show(this.exitFsBtn)
            },
            onExitFancyFullscreen: function() {
                v.hide(this.exitFsBtn), v.show(this.fsBtn)
            },
            showTimeLimitPanel: function() {
                var e = this.player.dataModel;
                if (e && e.timeLimit && !this.player.isPlayingAD) {
                    if (v.show(this.timelimitPanel), 1 == this.timelimitShowFlag) return !1;
                    this.pvClickStatis(".x-timelimit-panel", "appdownload_fulledition_show"), this.timelimitShowFlag = !0
                }
            },
            hideTimeLimitPanel: function() {
                v.hide(this.timelimitPanel)
            },
            showErrorPanel: function() {
                v.show(this.errorPanel), f.pingback("appdownload_videoopen_show")
            },
            showDownloadPanel: function() {
                var e = this.player.dataModel && this.player.dataModel.timeLimit;
                if (this.istimelimitFlag) return !1;
                (!e || this.player.getVideoCurrentTime() < e) && (v.show(this.downloadPanel), this.pvClickStatis(".x-download-panel", "appdownload_pause_show"))
            },
            showDashBoard: function() {
                v.show(this.elDashboard), v.show(this.infoPanel), this.hideDashboardDelay(), this.hideTimeLimitPanel()
            },
            hideDashBoard: function() {
                v.hide(this.resolutionPanel), v.hide(this.elDashboard), v.hide(this.infoPanel), this.isDataException || this.showTimeLimitPanel()
            },
            showResolutionPanel: function() {
                v.show(this.resolutionPanel), v.hide(this.elDashboard), v.hide(this.infoPanel)
            },
            hideDashboardDelay: function() {
                clearTimeout(this.idleTimer), this.idleTimer = setTimeout(function() {
                    this.hideDashBoard()
                }.bind(this), 4e3)
            },
            isDashBoardShowed: function() {
                return "none" != v.css(this.elDashboard, "display")
            },
            isResolutionPanelShowed: function() {
                return "none" != v.css(this.resolutionPanel, "display")
            },
            showLoading: function() {
                v.show(this.loadingPanle), v.hide(this.coverPlayBtnWrap), v.hide(this.bigplayPanel)
            },
            hideLoading: function() {
                v.hide(this.loadingPanle)
            },
            showCoverPlayBtnWrap: function() {
                v.show(this.coverPlayBtnWrap), this.hideLoading()
            },
            showBigplayPanel: function() {
                v.show(this.bigplayPanel), this.hideLoading()
            },
            showDefaultElPoster: function() {
                this.elposter.style.backgroundImage = "", v.show(this.elposter)
            },
            onTimeupdate: function() {
                if (0 < this.player.getVideoCurrentTime() && (this.hideLoading(), v.hide(this.elposter), this.clickOrPlayFlag = !0), this.player.isPlayingAD) {
                    if (0 == this.timeupdateCount) return void(this.timeupdateCount += 1);
                    this.updateADUI(), this.hideTimeLimitPanel(), this.hideDashBoard()
                } else this.hideADUI(), this.updateProgress();
                this.config.DMR_FLAG || this.config.isLowestResolution || v.hide(this.messagePanel)
            },
            onPlay: function() {
                v.hide(this.playBtn), v.show(this.pauseBtn), v.hide(this.adCoverBtn), v.hide(this.replayVideoPanel), !this.config.dlBanner && this.config.dlBanner != undefined || (v.hide(this.downloadPanel), v.hide(this.bigplayPanel))
            },
            onPause: function() {
                this.player.isPlayingAD ? v.show(this.adCoverBtn) : (v.show(this.playBtn), v.hide(this.pauseBtn), clearTimeout(this.idleTimer), this.config.dlBanner || this.config.dlBanner == undefined ? (!d.weixin || d.weixin && 3 != this.outset) && this.player.isStarted && (this.hideDashBoard(), this.showDownloadPanel(), this.showBigplayPanel()) : this.showDashBoard())
            },
            onPlaying: function() {
                v.hide(this.coverPlayBtnWrap), v.hide(this.resolutionPanel), v.hide(this.infoPanel), v.removeClass(this.xvideoEl, "x-video-hide"), v.hide(this.playBtn), v.show(this.pauseBtn)
            },
            onError: function(e) {
                this.player.exitFullscreen(), this.hideTimeLimitPanel(), this.hideLoading(), this.isError = !0, v.css(this.xvideoEl, "width", "0px"), g.log("播放失败-->", e), this.istimelimitFlag = !0, "1" == this.outset || this.config.hotVideo || this.player.playList.hasNext() || window.nextUrl || (3 == e.code || 4 == e.code ? (this.messageBtnFrame.querySelector(".x-msg-txt").innerHTML = D(e.code), v.show(this.messagePanel), v.show(this.messageBtnFrame), v.hide(this.messageFrame)) : (this.messageFrame.innerHTML = D(data.code || "400"), v.show(this.messagePanel), v.show(this.messageFrame), v.hide(this.messageBtnFrame))), 3 != e.code && 4 != e.code || d.weixin && "3" == this.outset ? (this.errorTxtFrame.querySelector(".x-error-txt").innerHTML = D(e.code || "400"), v.hide(this.errorBtnFrame), v.show(this.errorTxtFrame)) : (this.errorBtnFrame.querySelector(".x-error-txt").innerHTML = D(e.code), v.hide(this.errorTxtFrame), v.show(this.errorBtnFrame)), this.showErrorPanel(), P.isExternal || this.errorTimeCountDown()
            },
            onDataException: function(e) {
                if (this.player.exitFullscreen(), this.hideTimeLimitPanel(), this.hideLoading(), this.isDataException = !0, 101 == e.code || 401 == e.code || 402 == e.code || 403 == e.code || 409 == e.code || 410 == e.code) return v.css(this.xvideoEl, "width", "0px"), d.weixin && "3" == this.outset ? (this.errorTxtFrame.querySelector(".x-error-txt").innerHTML = D(e.code || "400"), v.hide(this.errorBtnFrame), v.show(this.errorTxtFrame)) : (this.errorBtnFrame.querySelector(".x-error-txt").innerHTML = D(e.code), v.hide(this.errorTxtFrame), v.show(this.errorBtnFrame)), this.showErrorPanel(), void(P.isExternal || this.errorTimeCountDown());
                100 == e.code || 102 == e.code || 103 == e.code || 104 == e.code || 106 == e.code || 307 == e.code ? (this.messageBtnFrame.querySelector(".x-msg-txt").innerHTML = D(e.code), v.show(this.messagePanel), v.show(this.messageBtnFrame), v.hide(this.messageFrame), v.hide(this.downloadPanel), v.hide(this.replayVideoPanel), this.hideDashBoard(), 104 != e.code && 106 != e.code && 307 != e.code || v.css(this.messagePanel, {
                    background: "url(//css.tv.itc.cn/m/img/player/v2/placeholder.jpg) no-repeat",
                    "background-size": "cover",
                    display: "block"
                })) : (this.messageFrame.innerHTML = D(e.code || "400"), v.show(this.messagePanel), v.show(this.messageFrame), v.hide(this.messageBtnFrame)), "video" == e.code && (this.messageBtnFrame.querySelector(".x-msg-txt").innerHTML = e.msg, v.show(this.messagePanel), v.show(this.messageBtnFrame), v.hide(this.messageFrame), v.hide(this.downloadPanel), v.hide(this.replayVideoPanel), this.hideDashBoard())
            },
            onReplay: function() {
                var e = this;
                this.replayVideoPanel.innerHTML = '<div class="x-replay-frame"><div class="x-replay-btn"></div></div>', v.show(this.replayVideoPanel), this.replayFrame = this.replayVideoPanel.querySelector(".x-replay-frame"), this.replayFrame.addEventListener("click", function() {
                    v.hide(e.replayVideoPanel), e.player.play(), f.pingback("video_playback")
                })
            },
            onPay: function(e) {
                this.payPanel.innerHTML = this.payTmpl.render({
                    data: e.msg
                }), this.payPanel.querySelectorAll(".x-pay-msg-txt")[0].innerHTML = u[e.code];
                var t = this.payPanel.querySelectorAll(".x-pay-msg-btn");
                2 == t.length && (t[1].style.marginLeft = "20px"), v.show(this.payPanel), this.hideLoading(), this.hideDashBoard(), this.payFrame = this.payPanel.querySelector(".x-pay-frame"), this.payFrame.addEventListener("click", function(e) {
                    var t = e.currentTarget;
                    if (y.getPassport()) {
                        var i = t.dataset.href,
                            n = t.dataset.type;
                        f.pingback("play_" + n + "_pay"), e.stopPropagation(), location.href = i
                    } else {
                        i = location.href;
                        f.pingback("play_pay_login"), e.stopPropagation(), location.href = "//tv.sohu.com/upload/touch/users/login.html?ru=" + encodeURIComponent(i)
                    }
                })
            },
            onPayed: function() {
                v.hide(this.payPanel)
            },
            onClickPlay: function() {
                this.showLoading(), this.showDefaultElPoster(), v.hide(this.coverPlayBtnWrap), v.hide(this.resolutionPanel), v.hide(this.infoPanel), v.hide(this.recommendPanel), v.removeClass(this.xvideoEl, "x-video-hide")
            },
            onStart: function() {
                v.hide(this.recommendPanel)
            },
            onListEnded: function() {
                this.player.exitFullscreen()
            },
            updateProgress: function() {
                this.updateBufferedTrack(), this.updateTime(), this.isDragging || this.updatePlayedTrack()
            },
            updateTime: function() {
                var e = this.player,
                    t = e.getCurrentTime(),
                    i = e.getDuration();
                this.elCurrentTime.innerHTML = k(t), this.elDurationTime.innerHTML = k(i), this.elTimeLimit.innerHTML = k(Math.floor(Math.abs(i - t))), this.isDashBoardShowed() ? this.hideTimeLimitPanel() : e.isPlayingAD || this.isDataException || e.timelimited || this.showTimeLimitPanel()
            },
            updateBufferedTrack: function() {
                var e = this.player,
                    t = e.getDuration(),
                    i = e.getBufferedTime();
                if (t && !window.isNaN(t)) {
                    var n = Math.min(i / t * 100, 100) + "%";
                    e.isPlayingAD || (this.elBuffertrack.style.width = n)
                }
            },
            updatePlayedTrack: function(e) {
                var t = this.player,
                    i = t.getCurrentTime(),
                    n = t.getDuration();
                void 0 !== e && (i = e);
                var o = Math.min(i / n * 100, 100) + "%";
                t.isPlayingAD || (this.elPlaytrack.style.width = o)
            },
            updateUI: function() {
                var e = this.player.getDuration(),
                    t = this.player.dataModel;
                this.elTitle.innerHTML = t.title, this.config.hasOwnProperty("resolution") && !1 === this.config.resolution || (this.resolutionList.innerHTML = this.resolutionTmpl.render({
                    resolutionList: t.resolutionList,
                    currentResolution: t.resolutionType,
                    RESOLUTION_MODE: r.RESOLUTION_MODE
                }), this.elResolutionType.innerHTML = r.RESOLUTION_MODE[t.resolutionType]), this.elDurationTime.innerHTML = k(e), !this.player.videoActived && this.config.isShowPoster && (this.elposter.style.backgroundImage = "url(" + t.poster + ")", v.show(this.elposter), this.showCoverPlayBtnWrap()), v.show(this.infoPanel), v.hide(this.replayVideoPanel), this.hideTimeLimitPanel()
            },
            updateADUI: function() {
                var e = this.player.adv,
                    t = e.getDataByIndex(),
                    i = e.getCurrentTime(),
                    n = e.duration;
                if (t) {
                    if (v.show(this.adPanel), this.adTime.innerHTML = "<b>" + Math.ceil(Math.max(n - i, 0)) + "</b>", t.clickurl ? (v.show(this.adLink), this.adLink.href = t.clickurl, this.adLink.setAttribute("data-pingback", t.cp)) : v.hide(this.adLink), 1 == this.adShowFlag) return !1;
                    this.pvClickStatis(".x-ad-fee-btn", "appdownload_adRemove_show"), this.adShowFlag = !0, v.hide(this.timelimitPanel)
                }
            },
            hideADUI: function() {
                v.hide(this.adPanel)
            },
            reset: function() {
                this.isDataException = !1, this.isError = !1, this.showDefaultElPoster(), this.player.resetFlag && (this.showLoading(), this.showDefaultElPoster()), setTimeout(function() {
                    this.player.playList.hasNext() && v.hide(this.elDashboard)
                }.bind(this), 100), v.hide(this.messagePanel), v.hide(this.adPanel), v.hide(this.timelimitPanel), v.hide(this.recommendPanel), v.hide(this.downloadPanel), v.hide(this.replayVideoPanel), v.hide(this.bigplayPanel), v.hide(this.errorPanel), v.hide(this.plevelPanel), this.resetErrorPanel(), v.addClass(this.xvideoEl, "x-video-hide"), this.timeupdateCount = 0, this.clickOrPlayFlag = !1, v.css(this.xvideoEl, "width", "100%")
            },
            ab: (T = 0, S = parseInt(100 * Math.random()), S < 25 ? T = 0 : S < 50 ? T = 1 : S < 75 ? T = 2 : S < 85 ? T = 3 : S < 95 ? T = 4 : S < 100 && (T = 5), T),
            loadVrsRcData: function(e) {
                return w.getJSON(e)
            },
            loadPgcRcData: function(e) {
                return w.getScript(e)
            },
            initTxtEllipsis: function() {
                for (var e = this.hotVedioPanel.querySelectorAll(".title span"), t = e.length, i = 0; i < t; i++) h.ellipsis(e[i], 14, 2)
            },
            initHotEvent: function() {
                this.registerHot = 1, this.hotVedioPanel.addEventListener("click", function(e) {
                    var t = e.target,
                        i = t.parentNode;
                    if (t.classList.contains("x-hot-title")) return null;
                    f.pingback("hot_panel");
                    var n = t.classList.contains("x-hot-list") ? t : "span" == t.tagName.toLowerCase() ? i.parentNode : i,
                        o = {
                            vid: n.dataset.vid,
                            videoName: n.dataset.videoname
                        };
                    v.hide(this.hotVedioPanel), this.player.play(o)
                }.bind(this))
            },
            errorTimeCountDown: function() {
                this.errorCountDown = !0, this.errorBtnFrame.querySelector(".x-error-cd").style.display = "block";
                var e = "none" == this.errorTxtFrame.style.display ? this.errorBtnFrame.querySelector(".second") : this.errorTxtFrame.querySelector(".second");
                h.countDownSecond(e, function() {
                    this.triggerPlayNext()
                }.bind(this))
            },
            triggerPlayNext: function() {
                this.player.playList.hasNext() ? (this.player.playNext(), this.resetErrorPanel()) : (this.player.emit("list.ended"), window.nextUrl ? f.pingback("video_play_nextout") : "1" != this.outset && this.config.hotVideo && (v.hide(this.downloadPanel), v.hide(this.bigplayPanel), v.hide(this.infoPanel), this.player.exitFullscreen(), this.initHot(), this.resetErrorPanel()))
            },
            resetErrorPanel: function() {
                v.hide(this.errorPanel), this.errorPanel.querySelector(".x-error-txt-frame .second").innerHTML = "5秒", this.errorPanel.querySelector(".x-error-btn-frame .second").innerHTML = "5秒", this.errorCountDown && null !== h.cdTimeout && (clearTimeout(h.cdTimeout), this.errorCountDown = !1)
            },
            pvClickStatis: function(e, s) {
                var t = void 0,
                    r = this.el.querySelector(e),
                    d = function d() {
                        var e = document.documentElement,
                            t = r.getBoundingClientRect(),
                            i = window.innerWidth || e && e.clientWidth || document.body.clientWidth,
                            n = window.innerHeight || e && e.clientHeight || document.body.clientHeight,
                            o = document.getElementsByTagName("header")[0],
                            a = o && o.clientHeight;
                        t.bottom <= a || t.top > n || t.right <= 0 || t.left > i || (f.pingback(s), window.removeEventListener("resize", l), window.removeEventListener("pageshow", c), window.removeEventListener("scroll", h))
                    }, l = function l() {
                        clearTimeout(t), t = setTimeout(d, 300)
                    }, c = function c(e) {
                        e.persisted && (clearTimeout(t), t = setTimeout(d, 300))
                    }, h = function h() {
                        d()
                    };
                window.addEventListener("resize", l, !1), window.addEventListener("pageshow", c, !1), window.addEventListener("scroll", h, !1), d()
            }
        }), e.exports = L
    }
]);