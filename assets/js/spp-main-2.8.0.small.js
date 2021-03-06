var audio = document.getElementsByClassName('audioloader')[0];



if(audio) {

// add smart track player (variable audio is removed at the end)
var container = document.createElement("div");
container.classList.add("smart-track-player-container");
container.setAttribute('data-uid','9f03c450')
audio.parentNode.appendChild(container);

//<div class="smart-track-player-container stp-color-dd0000-ffce00" data-uid=""></div>

var artist = "Mark von Authentic German Learning";

var AP_Player = {"licensed":"1","version":"2.8.0"};
var SmartPodcastPlayer_uid_9f03c450 = {"errors":[],"options":{"title":lecture_name,"url":audio.getAttribute('data-audioloader-url')}};
// "background_color":"ffce00","background_type":"color","color":"dd0000","download":"false","email_portal":"none","html_assets":"false","marquee":"auto","position":"bottom","social":"false","style":"light","subscribe_in_stp":"false","view":"responsive",

// "hover_timestamp":"true","uid":"9f03c450","speedcontrol":"true","paid":"true","sticky":"true",

! function() {
    function t(t, e, i) {
        t.fn.jScrollPane || (t.fn.jScrollPane = function(s) {
            function n(s, n) {
                function a(e) {
                    var n, r, d, c, u, h, g = !1,
                        v = !1;
                    if (N = e, F === i) u = s.scrollTop(), h = s.scrollLeft(), s.css({
                        overflow: "hidden",
                        padding: 0
                    }), U = s.innerWidth() + wt, z = s.innerHeight(), s.width(U), F = t('<div class="jspPane" />').css("padding", yt).append(s.children()), Z = t('<div class="jspContainer" />').css({
                        width: U + "px",
                        height: z + "px"
                    }).append(F).appendTo(s);
                    else {
                        if (s.css("width", ""), g = N.stickToBottom && T(), v = N.stickToRight && A(), c = s.innerWidth() + wt != U || s.outerHeight() != z, c && (U = s.innerWidth() + wt, z = s.innerHeight(), Z.css({
                                width: U + "px",
                                height: z + "px"
                            })), !c && bt == q && F.outerHeight() == Y) return void s.width(U);
                        bt = q, F.css("width", ""), s.width(U), Z.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    F.css("overflow", "auto"), q = e.contentWidth ? e.contentWidth : F[0].scrollWidth, Y = F[0].scrollHeight, F.css("overflow", ""), X = q / U, W = Y / z, K = W > 1, Q = X > 1, Q || K ? (s.addClass("jspScrollable"), n = N.maintainPosition && (tt || st), n && (r = C(), d = M()), o(), l(), p(), n && (P(v ? q - U : r, !1), x(g ? Y - z : d, !1)), I(), E(), V(), N.enableKeyboardNavigation && j(), N.clickOnTrack && f(), R(), N.hijackInternalLinks && H()) : (s.removeClass("jspScrollable"), F.css({
                        top: 0,
                        left: 0,
                        width: Z.width() - wt
                    }), L(), $(), D(), m()), N.autoReinitialise && !vt ? vt = setInterval(function() {
                        a(N)
                    }, N.autoReinitialiseDelay) : !N.autoReinitialise && vt && clearInterval(vt), u && s.scrollTop(0) && x(u, !1), h && s.scrollLeft(0) && P(h, !1), s.trigger("jsp-initialised", [Q || K])
                }

                function o() {
                    K && (Z.append(t('<div class="jspVerticalBar" />').append(t('<div class="jspCap jspCapTop" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragTop" />'), t('<div class="jspDragBottom" />'))), t('<div class="jspCap jspCapBottom" />'))), nt = Z.find(">.jspVerticalBar"), at = nt.find(">.jspTrack"), G = at.find(">.jspDrag"), N.showArrows && (dt = t('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", u(0, -1)).bind("click.jsp", O), pt = t('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", u(0, 1)).bind("click.jsp", O), N.arrowScrollOnHover && (dt.bind("mouseover.jsp", u(0, -1, dt)), pt.bind("mouseover.jsp", u(0, 1, pt))), c(at, N.verticalArrowPositions, dt, pt)), rt = z, Z.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        rt -= t(this).outerHeight()
                    }), G.hover(function() {
                        G.addClass("jspHover")
                    }, function() {
                        G.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(e) {
                        t("html").bind("dragstart.jsp selectstart.jsp", O), G.addClass("jspActive");
                        var i = e.pageY - G.position().top;
                        return t("html").bind("mousemove.jsp", function(t) {
                            v(t.pageY - i, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", g), !1
                    }), r())
                }

                function r() {
                    at.height(rt + "px"), tt = 0, ot = N.verticalGutter + at.outerWidth(), F.width(U - ot - wt);
                    try {
                        0 === nt.position().left && F.css("margin-left", ot + "px")
                    } catch (t) {}
                }

                function l() {
                    Q && (Z.append(t('<div class="jspHorizontalBar" />').append(t('<div class="jspCap jspCapLeft" />'), t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragLeft" />'), t('<div class="jspDragRight" />'))), t('<div class="jspCap jspCapRight" />'))), ct = Z.find(">.jspHorizontalBar"), ut = ct.find(">.jspTrack"), et = ut.find(">.jspDrag"), N.showArrows && (mt = t('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", u(-1, 0)).bind("click.jsp", O), gt = t('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", u(1, 0)).bind("click.jsp", O), N.arrowScrollOnHover && (mt.bind("mouseover.jsp", u(-1, 0, mt)), gt.bind("mouseover.jsp", u(1, 0, gt))), c(ut, N.horizontalArrowPositions, mt, gt)), et.hover(function() {
                        et.addClass("jspHover")
                    }, function() {
                        et.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(e) {
                        t("html").bind("dragstart.jsp selectstart.jsp", O), et.addClass("jspActive");
                        var i = e.pageX - et.position().left;
                        return t("html").bind("mousemove.jsp", function(t) {
                            w(t.pageX - i, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", g), !1
                    }), ht = Z.innerWidth(), d())
                }

                function d() {
                    Z.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        ht -= t(this).outerWidth()
                    }), ut.width(ht + "px"), st = 0
                }

                function p() {
                    if (Q && K) {
                        var e = ut.outerHeight(),
                            i = at.outerWidth();
                        rt -= e, t(ct).find(">.jspCap:visible,>.jspArrow").each(function() {
                            ht += t(this).outerWidth()
                        }), ht -= i, z -= i, U -= e, ut.parent().append(t('<div class="jspCorner" />').css("width", e + "px")), r(), d()
                    }
                    Q && F.width(Z.outerWidth() - wt + "px"), Y = F.outerHeight(), W = Y / z, Q && (ft = Math.ceil(1 / X * ht), ft > N.horizontalDragMaxWidth ? ft = N.horizontalDragMaxWidth : ft < N.horizontalDragMinWidth && (ft = N.horizontalDragMinWidth), et.width(ft + "px"), it = ht - ft, b(st)), K && (lt = Math.ceil(1 / W * rt), lt > N.verticalDragMaxHeight ? lt = N.verticalDragMaxHeight : lt < N.verticalDragMinHeight && (lt = N.verticalDragMinHeight), G.height(lt + "px"), J = rt - lt, y(tt))
                }

                function c(t, e, i, s) {
                    var n, a = "before",
                        o = "after";
                    "os" == e && (e = /Mac/.test(navigator.platform) ? "after" : "split"), e == a ? o = e : e == o && (a = e, n = i, i = s, s = n), t[a](i)[o](s)
                }

                function u(t, e, i) {
                    return function() {
                        return h(t, e, this, i), this.blur(), !1
                    }
                }

                function h(e, i, s, n) {
                    s = t(s).addClass("jspActive");
                    var a, o, r = !0,
                        l = function() {
                            0 !== e && _t.scrollByX(e * N.arrowButtonSpeed), 0 !== i && _t.scrollByY(i * N.arrowButtonSpeed), o = setTimeout(l, r ? N.initialDelay : N.arrowRepeatFreq), r = !1
                        };
                    l(), a = n ? "mouseout.jsp" : "mouseup.jsp", n = n || t("html"), n.bind(a, function() {
                        s.removeClass("jspActive"), o && clearTimeout(o), o = null, n.unbind(a)
                    })
                }

                function f() {
                    m(), K && at.bind("mousedown.jsp", function(e) {
                        if (e.originalTarget === i || e.originalTarget == e.currentTarget) {
                            var s, n = t(this),
                                a = n.offset(),
                                o = e.pageY - a.top - tt,
                                r = !0,
                                l = function() {
                                    var t = n.offset(),
                                        i = e.pageY - t.top - lt / 2,
                                        a = z * N.scrollPagePercent,
                                        p = J * a / (Y - z);
                                    if (o < 0) tt - p > i ? _t.scrollByY(-a) : v(i);
                                    else {
                                        if (!(o > 0)) return void d();
                                        tt + p < i ? _t.scrollByY(a) : v(i)
                                    }
                                    s = setTimeout(l, r ? N.initialDelay : N.trackClickRepeatFreq), r = !1
                                },
                                d = function() {
                                    s && clearTimeout(s), s = null, t(document).unbind("mouseup.jsp", d)
                                };
                            return l(), t(document).bind("mouseup.jsp", d), !1
                        }
                    }), Q && ut.bind("mousedown.jsp", function(e) {
                        if (e.originalTarget === i || e.originalTarget == e.currentTarget) {
                            var s, n = t(this),
                                a = n.offset(),
                                o = e.pageX - a.left - st,
                                r = !0,
                                l = function() {
                                    var t = n.offset(),
                                        i = e.pageX - t.left - ft / 2,
                                        a = U * N.scrollPagePercent,
                                        p = it * a / (q - U);
                                    if (o < 0) st - p > i ? _t.scrollByX(-a) : w(i);
                                    else {
                                        if (!(o > 0)) return void d();
                                        st + p < i ? _t.scrollByX(a) : w(i)
                                    }
                                    s = setTimeout(l, r ? N.initialDelay : N.trackClickRepeatFreq), r = !1
                                },
                                d = function() {
                                    s && clearTimeout(s), s = null, t(document).unbind("mouseup.jsp", d)
                                };
                            return l(), t(document).bind("mouseup.jsp", d), !1
                        }
                    })
                }

                function m() {
                    ut && ut.unbind("mousedown.jsp"), at && at.unbind("mousedown.jsp")
                }

                function g() {
                    t("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), G && G.removeClass("jspActive"), et && et.removeClass("jspActive")
                }

                function v(t, e) {
                    K && (t < 0 ? t = 0 : t > J && (t = J), e === i && (e = N.animateScroll), e ? _t.animate(G, "top", t, y) : (G.css("top", t), y(t)))
                }

                function y(t) {
                    t === i && (t = G.position().top), Z.scrollTop(0), tt = t;
                    var e = 0 === tt,
                        n = tt == J,
                        a = t / J,
                        o = -a * (Y - z);
                    kt == e && Pt == n || (kt = e, Pt = n, s.trigger("jsp-arrow-change", [kt, Pt, xt, St])), _(e, n), F.css("top", o), s.trigger("jsp-scroll-y", [-o, e, n]).trigger("scroll")
                }

                function w(t, e) {
                    Q && (t < 0 ? t = 0 : t > it && (t = it), e === i && (e = N.animateScroll), e ? _t.animate(et, "left", t, b) : (et.css("left", t), b(t)))
                }

                function b(t) {
                    t === i && (t = et.position().left), Z.scrollTop(0), st = t;
                    var e = 0 === st,
                        n = st == it,
                        a = t / it,
                        o = -a * (q - U);
                    xt == e && St == n || (xt = e, St = n, s.trigger("jsp-arrow-change", [kt, Pt, xt, St])), k(e, n), F.css("left", o), s.trigger("jsp-scroll-x", [-o, e, n]).trigger("scroll")
                }

                function _(t, e) {
                    N.showArrows && (dt[t ? "addClass" : "removeClass"]("jspDisabled"), pt[e ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function k(t, e) {
                    N.showArrows && (mt[t ? "addClass" : "removeClass"]("jspDisabled"), gt[e ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function x(t, e) {
                    v(t / (Y - z) * J, e)
                }

                function P(t, e) {
                    w(t / (q - U) * it, e)
                }

                function S(e, i, s) {
                    var n, a, o, r, l, d, p, c, u, h = 0,
                        f = 0;
                    try {
                        n = t(e)
                    } catch (t) {
                        return
                    }
                    for (a = n.outerHeight(), o = n.outerWidth(), Z.scrollTop(0), Z.scrollLeft(0); !n.is(".jspPane");)
                        if (h += n.position().top, f += n.position().left, n = n.offsetParent(), /^body|html$/i.test(n[0].nodeName)) return;
                    r = M(), d = r + z, h < r || i ? c = h - N.horizontalGutter : h + a > d && (c = h - z + a + N.horizontalGutter), isNaN(c) || x(c, s), l = C(), p = l + U, f < l || i ? u = f - N.horizontalGutter : f + o > p && (u = f - U + o + N.horizontalGutter), isNaN(u) || P(u, s)
                }

                function C() {
                    return -F.position().left
                }

                function M() {
                    return -F.position().top
                }

                function T() {
                    var t = Y - z;
                    return t > 20 && t - M() < 10
                }

                function A() {
                    var t = q - U;
                    return t > 20 && t - C() < 10
                }

                function E() {
                    Z.unbind(Mt).bind(Mt, function(t, e, i, s) {
                        var n = st,
                            a = tt,
                            o = t.deltaFactor || N.mouseWheelSpeed;
                        return _t.scrollBy(i * o, -s * o, !1), n == st && a == tt
                    })
                }

                function L() {
                    Z.unbind(Mt)
                }

                function O() {
                    return !1
                }

                function I() {
                    F.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(t) {
                        S(t.target, !1)
                    })
                }

                function $() {
                    F.find(":input,a").unbind("focus.jsp")
                }

                function j() {
                    function e() {
                        var t = st,
                            e = tt;
                        switch (i) {
                            case 40:
                                _t.scrollByY(N.keyboardSpeed, !1);
                                break;
                            case 38:
                                _t.scrollByY(-N.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                _t.scrollByY(z * N.scrollPagePercent, !1);
                                break;
                            case 33:
                                _t.scrollByY(-z * N.scrollPagePercent, !1);
                                break;
                            case 39:
                                _t.scrollByX(N.keyboardSpeed, !1);
                                break;
                            case 37:
                                _t.scrollByX(-N.keyboardSpeed, !1)
                        }
                        return n = t != st || e != tt
                    }
                    var i, n, a = [];
                    Q && a.push(ct[0]), K && a.push(nt[0]), F.focus(function() {
                        s.focus()
                    }), s.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(s) {
                        if (s.target === this || a.length && t(s.target).closest(a).length) {
                            var o = st,
                                r = tt;
                            switch (s.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    i = s.keyCode, e();
                                    break;
                                case 35:
                                    x(Y - z), i = null;
                                    break;
                                case 36:
                                    x(0), i = null
                            }
                            return !(n = s.keyCode == i && o != st || r != tt)
                        }
                    }).bind("keypress.jsp", function(t) {
                        return t.keyCode == i && e(), !n
                    }), N.hideFocus ? (s.css("outline", "none"), "hideFocus" in Z[0] && s.attr("hideFocus", !0)) : (s.css("outline", ""), "hideFocus" in Z[0] && s.attr("hideFocus", !1))
                }

                function D() {
                    s.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
                }

                function R() {
                    if (location.hash && location.hash.length > 1) {
                        var e, i, s = escape(location.hash.substr(1));
                        try {
                            e = t("#" + s + ', a[name="' + s + '"]')
                        } catch (t) {
                            return
                        }
                        e.length && F.find(s) && (0 === Z.scrollTop() ? i = setInterval(function() {
                            Z.scrollTop() > 0 && (S(e, !0), t(document).scrollTop(Z.position().top), clearInterval(i))
                        }, 50) : (S(e, !0), t(document).scrollTop(Z.position().top)))
                    }
                }

                function H() {
                    t(document.body).data("jspHijack") || (t(document.body).data("jspHijack", !0), t(document.body).delegate("a[href*=#]", "click", function(i) {
                        var s, n, a, o, r, l, d = this.href.substr(0, this.href.indexOf("#")),
                            p = location.href;
                        if (-1 !== location.href.indexOf("#") && (p = location.href.substr(0, location.href.indexOf("#"))), d === p) {
                            s = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                n = t("#" + s + ', a[name="' + s + '"]')
                            } catch (t) {
                                return
                            }
                            n.length && (a = n.closest(".jspScrollable"), o = a.data("jsp"), o.scrollToElement(n, !0), a[0].scrollIntoView && (r = t(e).scrollTop(), ((l = n.offset().top) < r || l > r + t(e).height()) && a[0].scrollIntoView()), i.preventDefault())
                        }
                    }))
                }

                function V() {
                    var t, e, i, s, n, a = !1;
                    Z.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(o) {
                        var r = o.originalEvent.touches[0];
                        t = C(), e = M(), i = r.pageX, s = r.pageY, n = !1, a = !0
                    }).bind("touchmove.jsp", function(o) {
                        if (a) {
                            var r = o.originalEvent.touches[0],
                                l = st,
                                d = tt;
                            return _t.scrollTo(t + i - r.pageX, e + s - r.pageY), n = n || Math.abs(i - r.pageX) > 5 || Math.abs(s - r.pageY) > 5, l == st && d == tt
                        }
                    }).bind("touchend.jsp", function(t) {
                        a = !1
                    }).bind("click.jsp-touchclick", function(t) {
                        if (n) return n = !1, !1
                    })
                }

                function B() {
                    var t = M(),
                        e = C();
                    s.removeClass("jspScrollable").unbind(".jsp"), s.replaceWith(Ct.append(F.children())), Ct.scrollTop(t), Ct.scrollLeft(e), vt && clearInterval(vt)
                }
                var N, F, U, z, Z, q, Y, X, W, K, Q, G, J, tt, et, it, st, nt, at, ot, rt, lt, dt, pt, ct, ut, ht, ft, mt, gt, vt, yt, wt, bt, _t = this,
                    kt = !0,
                    xt = !0,
                    Pt = !1,
                    St = !1,
                    Ct = s.clone(!1, !1).empty(),
                    Mt = t.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                "border-box" === s.css("box-sizing") ? (yt = 0, wt = 0) : (yt = s.css("paddingTop") + " " + s.css("paddingRight") + " " + s.css("paddingBottom") + " " + s.css("paddingLeft"), wt = (parseInt(s.css("paddingLeft"), 10) || 0) + (parseInt(s.css("paddingRight"), 10) || 0)), t.extend(_t, {
                    removeKeyboardNav: function() {
                        D()
                    },
                    initKeyboardNav: function() {
                        j()
                    },
                    reinitialise: function(e) {
                        e = t.extend({}, N, e), a(e)
                    },
                    scrollToElement: function(t, e, i) {
                        S(t, e, i)
                    },
                    scrollTo: function(t, e, i) {
                        P(t, i), x(e, i)
                    },
                    scrollToX: function(t, e) {
                        P(t, e)
                    },
                    scrollToY: function(t, e) {
                        x(t, e)
                    },
                    scrollToPercentX: function(t, e) {
                        P(t * (q - U), e)
                    },
                    scrollToPercentY: function(t, e) {
                        x(t * (Y - z), e)
                    },
                    scrollBy: function(t, e, i) {
                        _t.scrollByX(t, i), _t.scrollByY(e, i)
                    },
                    scrollByX: function(t, e) {
                        w((C() + Math[t < 0 ? "floor" : "ceil"](t)) / (q - U) * it, e)
                    },
                    scrollByY: function(t, e) {
                        v((M() + Math[t < 0 ? "floor" : "ceil"](t)) / (Y - z) * J, e)
                    },
                    positionDragX: function(t, e) {
                        w(t, e)
                    },
                    positionDragY: function(t, e) {
                        v(t, e)
                    },
                    animate: function(t, e, i, s) {
                        var n = {};
                        n[e] = i, t.animate(n, {
                            duration: N.animateDuration,
                            easing: N.animateEase,
                            queue: !1,
                            step: s
                        })
                    },
                    getContentPositionX: function() {
                        return C()
                    },
                    getContentPositionY: function() {
                        return M()
                    },
                    getContentWidth: function() {
                        return q
                    },
                    getContentHeight: function() {
                        return Y
                    },
                    getPercentScrolledX: function() {
                        return C() / (q - U)
                    },
                    getPercentScrolledY: function() {
                        return M() / (Y - z)
                    },
                    getIsScrollableH: function() {
                        return Q
                    },
                    getIsScrollableV: function() {
                        return K
                    },
                    getContentPane: function() {
                        return F
                    },
                    scrollToBottom: function(t) {
                        v(J, t)
                    },
                    hijackInternalLinks: t.noop,
                    destroy: function() {
                        B()
                    }
                }), a(n)
            }
            return s = t.extend({}, t.fn.jScrollPane.defaults, s), t.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                s[this] = s[this] || s.speed
            }), this.each(function() {
                var e = t(this),
                    i = e.data("jsp");
                i ? i.reinitialise(s) : (t("script", e).filter('[type="text/javascript"],:not([type])').remove(), i = new n(e, s), e.data("jsp", i))
            })
        }, t.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: i,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 3,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        })
    }

    function e(t) {
        if (!t.fn.cssExtended) {
            var e = function(t) {
                return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            };
            !!CSSStyleDeclaration.prototype.getPropertyValue || (CSSStyleDeclaration.prototype.getPropertyValue = function(t) {
                return this.getAttribute(t)
            }, CSSStyleDeclaration.prototype.setProperty = function(t, i, s) {
                this.setAttribute(t, i);
                var s = void 0 !== s ? s : "";
                if ("" != s) {
                    var n = new RegExp(e(t) + "\\s*:\\s*" + e(i) + "(\\s*;)?", "gmi");
                    this.cssText = this.cssText.replace(n, t + ": " + i + " !" + s + ";")
                }
            }, CSSStyleDeclaration.prototype.removeProperty = function(t) {
                return this.removeAttribute(t)
            }, CSSStyleDeclaration.prototype.getPropertyPriority = function(t) {
                return new RegExp(e(t) + "\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?", "gmi").test(this.cssText) ? "important" : ""
            }), t.fn.cssExtended = function(t, e, i) {
                if (void 0 === this.get(0)) return this;
                var s = this.get(0).style;
                return void 0 !== t ? void 0 !== e ? (i = void 0 !== i ? i : "", s.setProperty(t, e, i), this) : s.getPropertyValue(t) : s
            }
        }
    }

    function s(t, e) {
        for (var i = t + ""; i.length < e;) i = "0" + i;
        return i
    }

    function o(t) {
        AP_Player.ctct_html && (t(".ctct-inline-form.spp-ctct").length > 0 || (ctctInline = t(t.parseHTML(AP_Player.ctct_html)), ctctInline && ctctInline.addClass("spp-ctct").hide().appendTo("body")))
    }

    function r(t, e, i) {
        var s = e || "16px Roboto",
            n = jQuery("<div></div>").html(t).css({
                position: "absolute",
                float: "left",
                visibility: "hidden",
                font: s,
                width: i
            }).appendTo(jQuery("body")),
            a = n.height();
        return n.remove(), a
    }

    function l(t) {
        return t = t.replace(/^https?:\/\//, ""), t = t.replace(/\?.*$/, "")
    }
    var d, p, c;
    ! function(t) {
        function e(t, e) {
            return b.call(t, e)
        }

        function i(t, e) {
            var i, s, n, a, o, r, l, d, p, c, u, h = e && e.split("/"),
                f = y.map,
                m = f && f["*"] || {};
            if (t && "." === t.charAt(0))
                if (e) {
                    for (t = t.split("/"), o = t.length - 1, y.nodeIdCompat && k.test(t[o]) && (t[o] = t[o].replace(k, "")), t = h.slice(0, h.length - 1).concat(t), p = 0; p < t.length; p += 1)
                        if ("." === (u = t[p])) t.splice(p, 1), p -= 1;
                        else if (".." === u) {
                        if (1 === p && (".." === t[2] || ".." === t[0])) break;
                        p > 0 && (t.splice(p - 1, 2), p -= 2)
                    }
                    t = t.join("/")
                } else 0 === t.indexOf("./") && (t = t.substring(2));
            if ((h || m) && f) {
                for (i = t.split("/"), p = i.length; p > 0; p -= 1) {
                    if (s = i.slice(0, p).join("/"), h)
                        for (c = h.length; c > 0; c -= 1)
                            if ((n = f[h.slice(0, c).join("/")]) && (n = n[s])) {
                                a = n, r = p;
                                break
                            }
                    if (a) break;
                    !l && m && m[s] && (l = m[s], d = p)
                }!a && l && (a = l, r = d), a && (i.splice(0, r, a), t = i.join("/"))
            }
            return t
        }

        function s(e, i) {
            return function() {
                var s = _.call(arguments, 0);
                return "string" != typeof s[0] && 1 === s.length && s.push(null), h.apply(t, s.concat([e, i]))
            }
        }

        function n(t) {
            return function(e) {
                return i(e, t)
            }
        }

        function a(t) {
            return function(e) {
                g[t] = e
            }
        }

        function o(i) {
            if (e(v, i)) {
                var s = v[i];
                delete v[i], w[i] = !0, u.apply(t, s)
            }
            if (!e(g, i) && !e(w, i)) throw new Error("No " + i);
            return g[i]
        }

        function r(t) {
            var e, i = t ? t.indexOf("!") : -1;
            return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
        }

        function l(t) {
            return function() {
                return y && y.config && y.config[t] || {}
            }
        }
        var u, h, f, m, g = {},
            v = {},
            y = {},
            w = {},
            b = Object.prototype.hasOwnProperty,
            _ = [].slice,
            k = /\.js$/;
        f = function(t, e) {
            var s, a = r(t),
                l = a[0];
            return t = a[1], l && (l = i(l, e), s = o(l)), l ? t = s && s.normalize ? s.normalize(t, n(e)) : i(t, e) : (t = i(t, e), a = r(t), l = a[0], t = a[1], l && (s = o(l))), {
                f: l ? l + "!" + t : t,
                n: t,
                pr: l,
                p: s
            }
        }, m = {
            require: function(t) {
                return s(t)
            },
            exports: function(t) {
                var e = g[t];
                return void 0 !== e ? e : g[t] = {}
            },
            module: function(t) {
                return {
                    id: t,
                    uri: "",
                    exports: g[t],
                    config: l(t)
                }
            }
        }, u = function(i, n, r, l) {
            var d, p, c, u, h, y, b = [],
                _ = typeof r;
            if (l = l || i, "undefined" === _ || "function" === _) {
                for (n = !n.length && r.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)
                    if (u = f(n[h], l), "require" === (p = u.f)) b[h] = m.require(i);
                    else if ("exports" === p) b[h] = m.exports(i), y = !0;
                else if ("module" === p) d = b[h] = m.module(i);
                else if (e(g, p) || e(v, p) || e(w, p)) b[h] = o(p);
                else {
                    if (!u.p) throw new Error(i + " missing " + p);
                    u.p.load(u.n, s(l, !0), a(p), {}), b[h] = g[p]
                }
                c = r ? r.apply(g[i], b) : void 0, i && (d && d.exports !== t && d.exports !== g[i] ? g[i] = d.exports : c === t && y || (g[i] = c))
            } else i && (g[i] = r)
        }, d = p = h = function(e, i, s, n, a) {
            if ("string" == typeof e) return m[e] ? m[e](i) : o(f(e, i).f);
            if (!e.splice) {
                if (y = e, y.deps && h(y.deps, y.callback), !i) return;
                i.splice ? (e = i, i = s, s = null) : e = t
            }
            return i = i || function() {}, "function" == typeof s && (s = n, n = a), n ? u(t, e, i, s) : setTimeout(function() {
                u(t, e, i, s)
            }, 4), h
        }, h.config = function(t) {
            return h(t)
        }, d._defined = g, c = function(t, i, s) {
            if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
            i.splice || (s = i, i = []), e(g, t) || e(v, t) || (v[t] = [t, i, s])
        }, c.amd = {
            jQuery: !0
        }
    }(), c("vendor/almond", function() {}),
        function(t, e) {
            "undefined" != typeof exports ? e(t, exports, p("underscore")) : "function" == typeof c && c.amd ? c("backbone", ["underscore", "jquery", "exports"], function(i, s, n) {
                t.Backbone = e(t, n, i, s)
            }) : t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
        }(this, function(t, e, i, s) {
            var n = t.Backbone,
                a = [],
                o = a.slice;
            e.VERSION = "1.1.0", e.$ = s, e.noConflict = function() {
                return t.Backbone = n, this
            }, e.emulateHTTP = !1, e.emulateJSON = !1;
            var r = e.Events = {
                    on: function(t, e, i) {
                        return d(this, "on", t, [e, i]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
                            callback: e,
                            context: i,
                            ctx: i || this
                        }), this) : this
                    },
                    once: function(t, e, s) {
                        if (!d(this, "once", t, [e, s]) || !e) return this;
                        var n = this,
                            a = i.once(function() {
                                n.off(t, a), e.apply(this, arguments)
                            });
                        return a._callback = e, this.on(t, a, s)
                    },
                    off: function(t, e, s) {
                        var n, a, o, r, l, p, c, u;
                        if (!this._events || !d(this, "off", t, [e, s])) return this;
                        if (!t && !e && !s) return this._events = {}, this;
                        for (r = t ? [t] : i.keys(this._events), l = 0, p = r.length; l < p; l++)
                            if (t = r[l], o = this._events[t]) {
                                if (this._events[t] = n = [], e || s)
                                    for (c = 0, u = o.length; c < u; c++) a = o[c], (e && e !== a.callback && e !== a.callback._callback || s && s !== a.context) && n.push(a);
                                n.length || delete this._events[t]
                            }
                        return this
                    },
                    trigger: function(t) {
                        if (!this._events) return this;
                        var e = o.call(arguments, 1);
                        if (!d(this, "trigger", t, e)) return this;
                        var i = this._events[t],
                            s = this._events.all;
                        return i && p(i, e), s && p(s, arguments), this
                    },
                    stopListening: function(t, e, s) {
                        var n = this._listeningTo;
                        if (!n) return this;
                        var a = !e && !s;
                        s || "object" != typeof e || (s = this), t && ((n = {})[t._listenId] = t);
                        for (var o in n) t = n[o], t.off(e, s, this), (a || i.isEmpty(t._events)) && delete this._listeningTo[o];
                        return this
                    }
                },
                l = /\s+/,
                d = function(t, e, i, s) {
                    if (!i) return !0;
                    if ("object" == typeof i) {
                        for (var n in i) t[e].apply(t, [n, i[n]].concat(s));
                        return !1
                    }
                    if (l.test(i)) {
                        for (var a = i.split(l), o = 0, r = a.length; o < r; o++) t[e].apply(t, [a[o]].concat(s));
                        return !1
                    }
                    return !0
                },
                p = function(t, e) {
                    var i, s = -1,
                        n = t.length,
                        a = e[0],
                        o = e[1],
                        r = e[2];
                    switch (e.length) {
                        case 0:
                            for (; ++s < n;)(i = t[s]).callback.call(i.ctx);
                            return;
                        case 1:
                            for (; ++s < n;)(i = t[s]).callback.call(i.ctx, a);
                            return;
                        case 2:
                            for (; ++s < n;)(i = t[s]).callback.call(i.ctx, a, o);
                            return;
                        case 3:
                            for (; ++s < n;)(i = t[s]).callback.call(i.ctx, a, o, r);
                            return;
                        default:
                            for (; ++s < n;)(i = t[s]).callback.apply(i.ctx, e)
                    }
                },
                c = {
                    listenTo: "on",
                    listenToOnce: "once"
                };
            i.each(c, function(t, e) {
                r[e] = function(e, s, n) {
                    return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = i.uniqueId("l"))] = e, n || "object" != typeof s || (n = this), e[t](s, n, this), this
                }
            }), r.bind = r.on, r.unbind = r.off, i.extend(e, r);
            var u = e.Model = function(t, e) {
                var s = t || {};
                e || (e = {}), this.cid = i.uniqueId("c"), this.attributes = {}, e.collection && (this.collection = e.collection), e.parse && (s = this.parse(s, e) || {}), s = i.defaults({}, s, i.result(this, "defaults")), this.set(s, e), this.changed = {}, this.initialize.apply(this, arguments)
            };
            i.extend(u.prototype, r, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(t) {
                    return i.clone(this.attributes)
                },
                sync: function() {
                    return e.sync.apply(this, arguments)
                },
                get: function(t) {
                    return this.attributes[t]
                },
                escape: function(t) {
                    return i.escape(this.get(t))
                },
                has: function(t) {
                    return null != this.get(t)
                },
                set: function(t, e, s) {
                    var n, a, o, r, l, d, p, c;
                    if (null == t) return this;
                    if ("object" == typeof t ? (a = t, s = e) : (a = {})[t] = e, s || (s = {}), !this._validate(a, s)) return !1;
                    o = s.unset, l = s.silent, r = [], d = this._changing, this._changing = !0, d || (this._previousAttributes = i.clone(this.attributes), this.changed = {}), c = this.attributes, p = this._previousAttributes, this.idAttribute in a && (this.id = a[this.idAttribute]);
                    for (n in a) e = a[n], i.isEqual(c[n], e) || r.push(n), i.isEqual(p[n], e) ? delete this.changed[n] : this.changed[n] = e, o ? delete c[n] : c[n] = e;
                    if (!l) {
                        r.length && (this._pending = !0);
                        for (var u = 0, h = r.length; u < h; u++) this.trigger("change:" + r[u], this, c[r[u]], s)
                    }
                    if (d) return this;
                    if (!l)
                        for (; this._pending;) this._pending = !1, this.trigger("change", this, s);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(t, e) {
                    return this.set(t, void 0, i.extend({}, e, {
                        unset: !0
                    }))
                },
                clear: function(t) {
                    var e = {};
                    for (var s in this.attributes) e[s] = void 0;
                    return this.set(e, i.extend({}, t, {
                        unset: !0
                    }))
                },
                hasChanged: function(t) {
                    return null == t ? !i.isEmpty(this.changed) : i.has(this.changed, t)
                },
                changedAttributes: function(t) {
                    if (!t) return !!this.hasChanged() && i.clone(this.changed);
                    var e, s = !1,
                        n = this._changing ? this._previousAttributes : this.attributes;
                    for (var a in t) i.isEqual(n[a], e = t[a]) || ((s || (s = {}))[a] = e);
                    return s
                },
                previous: function(t) {
                    return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                },
                previousAttributes: function() {
                    return i.clone(this._previousAttributes)
                },
                fetch: function(t) {
                    t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                    var e = this,
                        s = t.success;
                    return t.success = function(i) {
                        if (!e.set(e.parse(i, t), t)) return !1;
                        s && s(e, i, t), e.trigger("sync", e, i, t)
                    }, R(this, t), this.sync("read", this, t)
                },
                save: function(t, e, s) {
                    var n, a, o, r = this.attributes;
                    if (null == t || "object" == typeof t ? (n = t, s = e) : (n = {})[t] = e, s = i.extend({
                            validate: !0
                        }, s), n && !s.wait) {
                        if (!this.set(n, s)) return !1
                    } else if (!this._validate(n, s)) return !1;
                    n && s.wait && (this.attributes = i.extend({}, r, n)), void 0 === s.parse && (s.parse = !0);
                    var l = this,
                        d = s.success;
                    return s.success = function(t) {
                        l.attributes = r;
                        var e = l.parse(t, s);
                        if (s.wait && (e = i.extend(n || {}, e)), i.isObject(e) && !l.set(e, s)) return !1;
                        d && d(l, t, s), l.trigger("sync", l, t, s)
                    }, R(this, s), a = this.isNew() ? "create" : s.patch ? "patch" : "update", "patch" === a && (s.attrs = n), o = this.sync(a, this, s), n && s.wait && (this.attributes = r), o
                },
                destroy: function(t) {
                    t = t ? i.clone(t) : {};
                    var e = this,
                        s = t.success,
                        n = function() {
                            e.trigger("destroy", e, e.collection, t)
                        };
                    if (t.success = function(i) {
                            (t.wait || e.isNew()) && n(), s && s(e, i, t), e.isNew() || e.trigger("sync", e, i, t)
                        }, this.isNew()) return t.success(), !1;
                    R(this, t);
                    var a = this.sync("delete", this, t);
                    return t.wait || n(), a
                },
                url: function() {
                    var t = i.result(this, "urlRoot") || i.result(this.collection, "url") || D();
                    return this.isNew() ? t : t + ("/" === t.charAt(t.length - 1) ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(t, e) {
                    return t
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return null == this.id
                },
                isValid: function(t) {
                    return this._validate({}, i.extend(t || {}, {
                        validate: !0
                    }))
                },
                _validate: function(t, e) {
                    if (!e.validate || !this.validate) return !0;
                    t = i.extend({}, this.attributes, t);
                    var s = this.validationError = this.validate(t, e) || null;
                    return !s || (this.trigger("invalid", this, s, i.extend(e, {
                        validationError: s
                    })), !1)
                }
            });
            var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
            i.each(h, function(t) {
                u.prototype[t] = function() {
                    var e = o.call(arguments);
                    return e.unshift(this.attributes), i[t].apply(i, e)
                }
            });
            var f = e.Collection = function(t, e) {
                    e || (e = {}), e.model && (this.model = e.model), void 0 !== e.comparator && (this.comparator = e.comparator), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, i.extend({
                        silent: !0
                    }, e))
                },
                m = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                g = {
                    add: !0,
                    remove: !1
                };
            i.extend(f.prototype, r, {
                model: u,
                initialize: function() {},
                toJSON: function(t) {
                    return this.map(function(e) {
                        return e.toJSON(t)
                    })
                },
                sync: function() {
                    return e.sync.apply(this, arguments)
                },
                add: function(t, e) {
                    return this.set(t, i.extend({
                        merge: !1
                    }, e, g))
                },
                remove: function(t, e) {
                    var s = !i.isArray(t);
                    t = s ? [t] : i.clone(t), e || (e = {});
                    var n, a, o, r;
                    for (n = 0, a = t.length; n < a; n++)(r = t[n] = this.get(t[n])) && (delete this._byId[r.id], delete this._byId[r.cid], o = this.indexOf(r), this.models.splice(o, 1), this.length--, e.silent || (e.index = o, r.trigger("remove", r, this, e)), this._removeReference(r));
                    return s ? t[0] : t
                },
                set: function(t, e) {
                    e = i.defaults({}, e, m), e.parse && (t = this.parse(t, e));
                    var s = !i.isArray(t);
                    t = s ? t ? [t] : [] : i.clone(t);
                    var n, a, o, r, l, d, p, c = e.at,
                        h = this.model,
                        f = this.comparator && null == c && !1 !== e.sort,
                        g = i.isString(this.comparator) ? this.comparator : null,
                        v = [],
                        y = [],
                        w = {},
                        b = e.add,
                        _ = e.merge,
                        k = e.remove,
                        x = !(f || !b || !k) && [];
                    for (n = 0, a = t.length; n < a; n++) {
                        if (l = t[n], o = l instanceof u ? r = l : l[h.prototype.idAttribute], d = this.get(o)) k && (w[d.cid] = !0), _ && (l = l === r ? r.attributes : l, e.parse && (l = d.parse(l, e)), d.set(l, e), f && !p && d.hasChanged(g) && (p = !0)), t[n] = d;
                        else if (b) {
                            if (!(r = t[n] = this._prepareModel(l, e))) continue;
                            v.push(r), r.on("all", this._onModelEvent, this), this._byId[r.cid] = r, null != r.id && (this._byId[r.id] = r)
                        }
                        x && x.push(d || r)
                    }
                    if (k) {
                        for (n = 0, a = this.length; n < a; ++n) w[(r = this.models[n]).cid] || y.push(r);
                        y.length && this.remove(y, e)
                    }
                    if (v.length || x && x.length)
                        if (f && (p = !0), this.length += v.length, null != c)
                            for (n = 0, a = v.length; n < a; n++) this.models.splice(c + n, 0, v[n]);
                        else {
                            x && (this.models.length = 0);
                            var P = x || v;
                            for (n = 0, a = P.length; n < a; n++) this.models.push(P[n])
                        }
                    if (p && this.sort({
                            silent: !0
                        }), !e.silent) {
                        for (n = 0, a = v.length; n < a; n++)(r = v[n]).trigger("add", r, this, e);
                        (p || x && x.length) && this.trigger("sort", this, e)
                    }
                    return s ? t[0] : t
                },
                reset: function(t, e) {
                    e || (e = {});
                    for (var s = 0, n = this.models.length; s < n; s++) this._removeReference(this.models[s]);
                    return e.previousModels = this.models, this._reset(), t = this.add(t, i.extend({
                        silent: !0
                    }, e)), e.silent || this.trigger("reset", this, e), t
                },
                push: function(t, e) {
                    return this.add(t, i.extend({
                        at: this.length
                    }, e))
                },
                pop: function(t) {
                    var e = this.at(this.length - 1);
                    return this.remove(e, t), e
                },
                unshift: function(t, e) {
                    return this.add(t, i.extend({
                        at: 0
                    }, e))
                },
                shift: function(t) {
                    var e = this.at(0);
                    return this.remove(e, t), e
                },
                slice: function() {
                    return o.apply(this.models, arguments)
                },
                get: function(t) {
                    if (null != t) return this._byId[t.id] || this._byId[t.cid] || this._byId[t]
                },
                at: function(t) {
                    return this.models[t]
                },
                where: function(t, e) {
                    return i.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                        for (var i in t)
                            if (t[i] !== e.get(i)) return !1;
                        return !0
                    })
                },
                findWhere: function(t) {
                    return this.where(t, !0)
                },
                sort: function(t) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return t || (t = {}), i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(i.bind(this.comparator, this)), t.silent || this.trigger("sort", this, t), this
                },
                pluck: function(t) {
                    return i.invoke(this.models, "get", t)
                },
                fetch: function(t) {
                    t = t ? i.clone(t) : {}, void 0 === t.parse && (t.parse = !0);
                    var e = t.success,
                        s = this;
                    return t.success = function(i) {
                        var n = t.reset ? "reset" : "set";
                        s[n](i, t), e && e(s, i, t), s.trigger("sync", s, i, t)
                    }, R(this, t), this.sync("read", this, t)
                },
                create: function(t, e) {
                    if (e = e ? i.clone(e) : {}, !(t = this._prepareModel(t, e))) return !1;
                    e.wait || this.add(t, e);
                    var s = this,
                        n = e.success;
                    return e.success = function(t, e, i) {
                        i.wait && s.add(t, i), n && n(t, e, i)
                    }, t.save(null, e), t
                },
                parse: function(t, e) {
                    return t
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(t, e) {
                    if (t instanceof u) return t.collection || (t.collection = this), t;
                    e = e ? i.clone(e) : {}, e.collection = this;
                    var s = new this.model(t, e);
                    return s.validationError ? (this.trigger("invalid", this, s.validationError, e), !1) : s
                },
                _removeReference: function(t) {
                    this === t.collection && delete t.collection, t.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(t, e, i, s) {
                    ("add" !== t && "remove" !== t || i === this) && ("destroy" === t && this.remove(e, s), e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)), this.trigger.apply(this, arguments))
                }
            });
            var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
            i.each(v, function(t) {
                f.prototype[t] = function() {
                    var e = o.call(arguments);
                    return e.unshift(this.models), i[t].apply(i, e)
                }
            });
            var y = ["groupBy", "countBy", "sortBy"];
            i.each(y, function(t) {
                f.prototype[t] = function(e, s) {
                    var n = i.isFunction(e) ? e : function(t) {
                        return t.get(e)
                    };
                    return i[t](this.models, n, s)
                }
            });
            var w = e.View = function(t) {
                    this.cid = i.uniqueId("view"), t || (t = {}), i.extend(this, i.pick(t, _)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                b = /^(\S+)\s*(.*)$/,
                _ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            i.extend(w.prototype, r, {
                tagName: "div",
                $: function(t) {
                    return this.$el.find(t)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(t, i) {
                    return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], !1 !== i && this.delegateEvents(), this
                },
                delegateEvents: function(t) {
                    if (!t && !(t = i.result(this, "events"))) return this;
                    this.undelegateEvents();
                    for (var e in t) {
                        var s = t[e];
                        if (i.isFunction(s) || (s = this[t[e]]), s) {
                            var n = e.match(b),
                                a = n[1],
                                o = n[2];
                            s = i.bind(s, this), a += ".delegateEvents" + this.cid, "" === o ? this.$el.on(a, s) : this.$el.on(a, o, s)
                        }
                    }
                    return this
                },
                undelegateEvents: function() {
                    return this.$el.off(".delegateEvents" + this.cid), this
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(i.result(this, "el"), !1);
                    else {
                        var t = i.extend({}, i.result(this, "attributes"));
                        this.id && (t.id = i.result(this, "id")), this.className && (t.class = i.result(this, "className"));
                        var s = e.$("<" + i.result(this, "tagName") + ">").attr(t);
                        this.setElement(s, !1)
                    }
                }
            }), e.sync = function(t, s, n) {
                var a = x[t];
                i.defaults(n || (n = {}), {
                    emulateHTTP: e.emulateHTTP,
                    emulateJSON: e.emulateJSON
                });
                var o = {
                    type: a,
                    dataType: "json"
                };
                if (n.url || (o.url = i.result(s, "url") || D()), null != n.data || !s || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json", o.data = JSON.stringify(n.attrs || s.toJSON(n))), n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                        model: o.data
                    } : {}), n.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
                    o.type = "POST", n.emulateJSON && (o.data._method = a);
                    var r = n.beforeSend;
                    n.beforeSend = function(t) {
                        if (t.setRequestHeader("X-HTTP-Method-Override", a), r) return r.apply(this, arguments)
                    }
                }
                "GET" === o.type || n.emulateJSON || (o.processData = !1), "PATCH" === o.type && k && (o.xhr = function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                });
                var l = n.xhr = e.ajax(i.extend(o, n));
                return s.trigger("request", s, l, n), l
            };
            var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
                x = {
                    create: "POST",
                    update: "PUT",
                    patch: "PATCH",
                    delete: "DELETE",
                    read: "GET"
                };
            e.ajax = function() {
                return e.$.ajax.apply(e.$, arguments)
            };
            var P = e.Router = function(t) {
                    t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                S = /\((.*?)\)/g,
                C = /(\(\?)?:\w+/g,
                M = /\*\w+/g,
                T = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            i.extend(P.prototype, r, {
                initialize: function() {},
                route: function(t, s, n) {
                    i.isRegExp(t) || (t = this._routeToRegExp(t)), i.isFunction(s) && (n = s, s = ""), n || (n = this[s]);
                    var a = this;
                    return e.history.route(t, function(i) {
                        var o = a._extractParameters(t, i);
                        n && n.apply(a, o), a.trigger.apply(a, ["route:" + s].concat(o)), a.trigger("route", s, o), e.history.trigger("route", a, s, o)
                    }), this
                },
                navigate: function(t, i) {
                    return e.history.navigate(t, i), this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = i.result(this, "routes");
                        for (var t, e = i.keys(this.routes); null != (t = e.pop());) this.route(t, this.routes[t])
                    }
                },
                _routeToRegExp: function(t) {
                    return t = t.replace(T, "\\$&").replace(S, "(?:$1)?").replace(C, function(t, e) {
                        return e ? t : "([^/]+)"
                    }).replace(M, "(.*?)"), new RegExp("^" + t + "$")
                },
                _extractParameters: function(t, e) {
                    var s = t.exec(e).slice(1);
                    return i.map(s, function(t) {
                        return t ? decodeURIComponent(t) : null
                    })
                }
            });
            var A = e.History = function() {
                    this.handlers = [], i.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                E = /^[#\/]|\s+$/g,
                L = /^\/+|\/+$/g,
                O = /msie [\w.]+/,
                I = /\/$/,
                $ = /[?#].*$/;
            A.started = !1, i.extend(A.prototype, r, {
                interval: 50,
                getHash: function(t) {
                    var e = (t || this).location.href.match(/#(.*)$/);
                    return e ? e[1] : ""
                },
                getFragment: function(t, e) {
                    if (null == t)
                        if (this._hasPushState || !this._wantsHashChange || e) {
                            t = this.location.pathname;
                            var i = this.root.replace(I, "");
                            t.indexOf(i) || (t = t.slice(i.length))
                        } else t = this.getHash();
                    return t.replace(E, "")
                },
                start: function(t) {
                    if (A.started) throw new Error("Backbone.history has already been started");
                    A.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var s = this.getFragment(),
                        n = document.documentMode,
                        a = O.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                    this.root = ("/" + this.root + "/").replace(L, "/"), a && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(s)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !a ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = s;
                    var o = this.location,
                        r = o.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !r) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                        this._hasPushState && r && o.hash && (this.fragment = this.getHash().replace(E, ""), this.history.replaceState({}, document.title, this.root + this.fragment + o.search))
                    }
                    if (!this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), A.started = !1
                },
                route: function(t, e) {
                    this.handlers.unshift({
                        route: t,
                        callback: e
                    })
                },
                checkUrl: function(t) {
                    var e = this.getFragment();
                    if (e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment) return !1;
                    this.iframe && this.navigate(e), this.loadUrl()
                },
                loadUrl: function(t) {
                    return t = this.fragment = this.getFragment(t), i.any(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0
                    })
                },
                navigate: function(t, e) {
                    if (!A.started) return !1;
                    e && !0 !== e || (e = {
                        trigger: !!e
                    });
                    var i = this.root + (t = this.getFragment(t || ""));
                    if (t = t.replace($, ""), this.fragment !== t) {
                        if (this.fragment = t, "" === t && "/" !== i && (i = i.slice(0, -1)), this._hasPushState) this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(i);
                            this._updateHash(this.location, t, e.replace), this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace))
                        }
                        return e.trigger ? this.loadUrl(t) : void 0
                    }
                },
                _updateHash: function(t, e, i) {
                    if (i) {
                        var s = t.href.replace(/(javascript:|#).*$/, "");
                        t.replace(s + "#" + e)
                    } else t.hash = "#" + e
                }
            }), e.history = new A;
            var j = function(t, e) {
                var s, n = this;
                s = t && i.has(t, "constructor") ? t.constructor : function() {
                    return n.apply(this, arguments)
                }, i.extend(s, n, e);
                var a = function() {
                    this.constructor = s
                };
                return a.prototype = n.prototype, s.prototype = new a, t && i.extend(s.prototype, t), s.__super__ = n.prototype, s
            };
            u.extend = f.extend = P.extend = w.extend = A.extend = j;
            return e
        }),
        function(t, e) {
            if ("object" == typeof exports) {
                var i = p("underscore"),
                    s = p("backbone");
                module.exports = e(i, s)
            } else "function" == typeof c && c.amd && c("backbone.wreqr", ["underscore", "backbone"], e)
        }(0, function(t, e) {
            "use strict";
            return e.Wreqr = function(t, e, i) {
                var s = {};
                return s.Handlers = function(t, e) {
                    var i = function(t) {
                        this.options = t, this._wreqrHandlers = {}, e.isFunction(this.initialize) && this.initialize(t)
                    };
                    return i.extend = t.Model.extend, e.extend(i.prototype, t.Events, {
                        setHandlers: function(t) {
                            e.each(t, function(t, i) {
                                var s = null;
                                e.isObject(t) && !e.isFunction(t) && (s = t.context, t = t.callback), this.setHandler(i, t, s)
                            }, this)
                        },
                        setHandler: function(t, e, i) {
                            var s = {
                                callback: e,
                                context: i
                            };
                            this._wreqrHandlers[t] = s, this.trigger("handler:add", t, e, i)
                        },
                        hasHandler: function(t) {
                            return !!this._wreqrHandlers[t]
                        },
                        getHandler: function(t) {
                            var e = this._wreqrHandlers[t];
                            if (!e) throw new Error("Handler not found for '" + t + "'");
                            return function() {
                                var t = Array.prototype.slice.apply(arguments);
                                return e.callback.apply(e.context, t)
                            }
                        },
                        removeHandler: function(t) {
                            delete this._wreqrHandlers[t]
                        },
                        removeAllHandlers: function() {
                            this._wreqrHandlers = {}
                        }
                    }), i
                }(t, i), s.CommandStorage = function() {
                    var e = function(t) {
                        this.options = t, this._commands = {}, i.isFunction(this.initialize) && this.initialize(t)
                    };
                    return i.extend(e.prototype, t.Events, {
                        getCommands: function(t) {
                            var e = this._commands[t];
                            return e || (e = {
                                command: t,
                                instances: []
                            }, this._commands[t] = e), e
                        },
                        addCommand: function(t, e) {
                            this.getCommands(t).instances.push(e)
                        },
                        clearCommands: function(t) {
                            this.getCommands(t).instances = []
                        }
                    }), e
                }(), s.Commands = function(t) {
                    return t.Handlers.extend({
                        storageType: t.CommandStorage,
                        constructor: function(e) {
                            this.options = e || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                            var i = Array.prototype.slice.call(arguments);
                            t.Handlers.prototype.constructor.apply(this, i)
                        },
                        execute: function(t, e) {
                            t = arguments[0], e = Array.prototype.slice.call(arguments, 1), this.hasHandler(t) ? this.getHandler(t).apply(this, e) : this.storage.addCommand(t, e)
                        },
                        _executeCommands: function(t, e, s) {
                            var n = this.storage.getCommands(t);
                            i.each(n.instances, function(t) {
                                e.apply(s, t)
                            }), this.storage.clearCommands(t)
                        },
                        _initializeStorage: function(t) {
                            var e, s = t.storageType || this.storageType;
                            e = i.isFunction(s) ? new s : s, this.storage = e
                        }
                    })
                }(s), s.RequestResponse = function(t) {
                    return t.Handlers.extend({
                        request: function() {
                            var t = arguments[0],
                                e = Array.prototype.slice.call(arguments, 1);
                            return this.getHandler(t).apply(this, e)
                        }
                    })
                }(s), s.EventAggregator = function(t, e) {
                    var i = function() {};
                    return i.extend = t.Model.extend, e.extend(i.prototype, t.Events), i
                }(t, i), s
            }(e, e.Marionette, t), e.Wreqr
        }),
        function(t, e) {
            if ("object" == typeof exports) {
                var i = p("underscore"),
                    s = p("backbone");
                module.exports = e(i, s)
            } else "function" == typeof c && c.amd && c("backbone.babysitter", ["underscore", "backbone"], e)
        }(0, function(t, e) {
            "option strict";
            return e.ChildViewContainer = function(t, e) {
                var i = function(t) {
                    this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), e.each(t, this.add, this)
                };
                e.extend(i.prototype, {
                    add: function(t, e) {
                        var i = t.cid;
                        return this._views[i] = t, t.model && (this._indexByModel[t.model.cid] = i), e && (this._indexByCustom[e] = i), this._updateLength(), this
                    },
                    findByModel: function(t) {
                        return this.findByModelCid(t.cid)
                    },
                    findByModelCid: function(t) {
                        var e = this._indexByModel[t];
                        return this.findByCid(e)
                    },
                    findByCustom: function(t) {
                        var e = this._indexByCustom[t];
                        return this.findByCid(e)
                    },
                    findByIndex: function(t) {
                        return e.values(this._views)[t]
                    },
                    findByCid: function(t) {
                        return this._views[t]
                    },
                    remove: function(t) {
                        var i = t.cid;
                        return t.model && delete this._indexByModel[t.model.cid], e.any(this._indexByCustom, function(t, e) {
                            if (t === i) return delete this._indexByCustom[e], !0
                        }, this), delete this._views[i], this._updateLength(), this
                    },
                    call: function(t) {
                        this.apply(t, e.tail(arguments))
                    },
                    apply: function(t, i) {
                        e.each(this._views, function(s) {
                            e.isFunction(s[t]) && s[t].apply(s, i || [])
                        })
                    },
                    _updateLength: function() {
                        this.length = e.size(this._views)
                    }
                });
                var s = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                return e.each(s, function(t) {
                    i.prototype[t] = function() {
                        var i = e.values(this._views),
                            s = [i].concat(e.toArray(arguments));
                        return e[t].apply(e, s)
                    }
                }), i
            }(0, t), e.ChildViewContainer
        }),
        function(t, e) {
            if ("object" == typeof exports) {
                var i = p("underscore"),
                    s = p("backbone");
                p("backbone.wreqr"), p("backbone.babysitter");
                module.exports = e(i, s)
            } else "function" == typeof c && c.amd && c("marionette", ["underscore", "backbone", "backbone.wreqr", "backbone.babysitter"], e)
        }(0, function(t, e) {
            ! function(t, e, i) {
                "use strict";

                function s(t) {
                    return o.call(t)
                }

                function n(t, e) {
                    var i = new Error(t);
                    throw i.name = e || "Error", i
                }
                var a = {};
                e.Marionette = a, a.$ = e.$;
                var o = Array.prototype.slice;
                a.extend = e.Model.extend, a.getOption = function(t, e) {
                        if (t && e) {
                            return t.options && e in t.options && void 0 !== t.options[e] ? t.options[e] : t[e]
                        }
                    }, a.normalizeMethods = function(t) {
                        var e, s = {};
                        return i.each(t, function(t, n) {
                            e = t, i.isFunction(e) || (e = this[e]), e && (s[n] = e)
                        }, this), s
                    }, a.triggerMethod = function() {
                        function t(t, e, i) {
                            return i.toUpperCase()
                        }
                        var e = /(^|:)(\w)/gi;
                        return function(s) {
                            var n = "on" + s.replace(e, t),
                                a = this[n];
                            if (i.isFunction(this.trigger) && this.trigger.apply(this, arguments), i.isFunction(a)) return a.apply(this, i.tail(arguments))
                        }
                    }(), a.MonitorDOMRefresh = function(t) {
                        function e(t) {
                            t._isShown = !0, n(t)
                        }

                        function s(t) {
                            t._isRendered = !0, n(t)
                        }

                        function n(t) {
                            t._isShown && t._isRendered && a(t) && i.isFunction(t.triggerMethod) && t.triggerMethod("dom:refresh")
                        }

                        function a(e) {
                            return t.contains(e.el)
                        }
                        return function(t) {
                            t.listenTo(t, "show", function() {
                                e(t)
                            }), t.listenTo(t, "render", function() {
                                s(t)
                            })
                        }
                    }(document.documentElement),
                    function(t) {
                        function e(t, e, s, a) {
                            var o = a.split(/\s+/);
                            i.each(o, function(i) {
                                var a = t[i];
                                a || n("Method '" + i + "' was configured as an event handler, but does not exist."), t.listenTo(e, s, a, t)
                            })
                        }

                        function s(t, e, i, s) {
                            t.listenTo(e, i, s, t)
                        }

                        function a(t, e, s, n) {
                            var a = n.split(/\s+/);
                            i.each(a, function(i) {
                                var n = t[i];
                                t.stopListening(e, s, n, t)
                            })
                        }

                        function o(t, e, i, s) {
                            t.stopListening(e, i, s, t)
                        }

                        function r(t, e, s, n, a) {
                            e && s && (i.isFunction(s) && (s = s.call(t)), i.each(s, function(s, o) {
                                i.isFunction(s) ? n(t, e, o, s) : a(t, e, o, s)
                            }))
                        }
                        t.bindEntityEvents = function(t, i, n) {
                            r(t, i, n, s, e)
                        }, t.unbindEntityEvents = function(t, e, i) {
                            r(t, e, i, o, a)
                        }
                    }(a), a.Callbacks = function() {
                        this._deferred = a.$.Deferred(), this._callbacks = []
                    }, i.extend(a.Callbacks.prototype, {
                        add: function(t, e) {
                            this._callbacks.push({
                                cb: t,
                                ctx: e
                            }), this._deferred.done(function(i, s) {
                                e && (i = e), t.call(i, s)
                            })
                        },
                        run: function(t, e) {
                            this._deferred.resolve(e, t)
                        },
                        reset: function() {
                            var t = this._callbacks;
                            this._deferred = a.$.Deferred(), this._callbacks = [], i.each(t, function(t) {
                                this.add(t.cb, t.ctx)
                            }, this)
                        }
                    }), a.Controller = function(t) {
                        this.triggerMethod = a.triggerMethod, this.options = t || {}, i.isFunction(this.initialize) && this.initialize(this.options)
                    }, a.Controller.extend = a.extend, i.extend(a.Controller.prototype, e.Events, {
                        close: function() {
                            this.stopListening(), this.triggerMethod("close"), this.unbind()
                        }
                    }), a.Region = function(t) {
                        if (this.options = t || {}, this.el = a.getOption(this, "el"), !this.el) {
                            var e = new Error("An 'el' must be specified for a region.");
                            throw e.name = "NoElError", e
                        }
                        if (this.initialize) {
                            var i = Array.prototype.slice.apply(arguments);
                            this.initialize.apply(this, i)
                        }
                    }, i.extend(a.Region, {
                        buildRegion: function(t, e) {
                            var s = "string" == typeof t,
                                n = "string" == typeof t.selector,
                                a = void 0 === t.regionType,
                                o = "function" == typeof t;
                            if (!o && !s && !n) throw new Error("Region must be specified as a Region type, a selector string or an object with selector property");
                            var r, l;
                            s && (r = t), t.selector && (r = t.selector, delete t.selector), o && (l = t), !o && a && (l = e), t.regionType && (l = t.regionType, delete t.regionType), (s || o) && (t = {}), t.el = r;
                            var d = new l(t);
                            return t.parentEl && (d.getEl = function(e) {
                                var s = t.parentEl;
                                return i.isFunction(s) && (s = s()), s.find(e)
                            }), d
                        }
                    }), i.extend(a.Region.prototype, e.Events, {
                        show: function(t) {
                            this.ensureEl();
                            var e = t.isClosed || i.isUndefined(t.$el),
                                s = t !== this.currentView;
                            s && this.close(), t.render(), (s || e) && this.open(t), this.currentView = t, a.triggerMethod.call(this, "show", t), a.triggerMethod.call(t, "show")
                        },
                        ensureEl: function() {
                            this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
                        },
                        getEl: function(t) {
                            return a.$(t)
                        },
                        open: function(t) {
                            this.$el.empty().append(t.el)
                        },
                        close: function() {
                            var t = this.currentView;
                            t && !t.isClosed && (t.close ? t.close() : t.remove && t.remove(), a.triggerMethod.call(this, "close", t), delete this.currentView)
                        },
                        attachView: function(t) {
                            this.currentView = t
                        },
                        reset: function() {
                            this.close(), delete this.$el
                        }
                    }), a.Region.extend = a.extend, a.RegionManager = function(t) {
                        var e = t.Controller.extend({
                                constructor: function(e) {
                                    this._regions = {}, t.Controller.prototype.constructor.call(this, e)
                                },
                                addRegions: function(t, e) {
                                    var s = {};
                                    return i.each(t, function(t, n) {
                                        "string" == typeof t && (t = {
                                            selector: t
                                        }), t.selector && (t = i.defaults({}, t, e));
                                        var a = this.addRegion(n, t);
                                        s[n] = a
                                    }, this), s
                                },
                                addRegion: function(e, s) {
                                    var n, a = i.isObject(s),
                                        o = i.isString(s),
                                        r = !!s.selector;
                                    return n = o || a && r ? t.Region.buildRegion(s, t.Region) : i.isFunction(s) ? t.Region.buildRegion(s, t.Region) : s, this._store(e, n), this.triggerMethod("region:add", e, n), n
                                },
                                get: function(t) {
                                    return this._regions[t]
                                },
                                removeRegion: function(t) {
                                    var e = this._regions[t];
                                    this._remove(t, e)
                                },
                                removeRegions: function() {
                                    i.each(this._regions, function(t, e) {
                                        this._remove(e, t)
                                    }, this)
                                },
                                closeRegions: function() {
                                    i.each(this._regions, function(t, e) {
                                        t.close()
                                    }, this)
                                },
                                close: function() {
                                    this.removeRegions();
                                    var e = Array.prototype.slice.call(arguments);
                                    t.Controller.prototype.close.apply(this, e)
                                },
                                _store: function(t, e) {
                                    this._regions[t] = e, this._setLength()
                                },
                                _remove: function(t, e) {
                                    e.close(), delete this._regions[t], this._setLength(), this.triggerMethod("region:remove", t, e)
                                },
                                _setLength: function() {
                                    this.length = i.size(this._regions)
                                }
                            }),
                            s = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
                        return i.each(s, function(t) {
                            e.prototype[t] = function() {
                                var e = i.values(this._regions),
                                    s = [e].concat(i.toArray(arguments));
                                return i[t].apply(i, s)
                            }
                        }), e
                    }(a), a.TemplateCache = function(t) {
                        this.templateId = t
                    }, i.extend(a.TemplateCache, {
                        templateCaches: {},
                        get: function(t) {
                            var e = this.templateCaches[t];
                            return e || (e = new a.TemplateCache(t), this.templateCaches[t] = e), e.load()
                        },
                        clear: function() {
                            var t, e = s(arguments),
                                i = e.length;
                            if (i > 0)
                                for (t = 0; t < i; t++) delete this.templateCaches[e[t]];
                            else this.templateCaches = {}
                        }
                    }), i.extend(a.TemplateCache.prototype, {
                        load: function() {
                            if (this.compiledTemplate) return this.compiledTemplate;
                            var t = this.loadTemplate(this.templateId);
                            return this.compiledTemplate = this.compileTemplate(t), this.compiledTemplate
                        },
                        loadTemplate: function(t) {
                            var e = a.$(t).html();
                            return e && 0 !== e.length || n("Could not find template: '" + t + "'", "NoTemplateError"), e
                        },
                        compileTemplate: function(t) {
                            return i.template(t)
                        }
                    }), a.Renderer = {
                        render: function(t, e) {
                            if (!t) {
                                var i = new Error("Cannot render the template since it's false, null or undefined.");
                                throw i.name = "TemplateNotFoundError", i
                            }
                            return ("function" == typeof t ? t : a.TemplateCache.get(t))(e)
                        }
                    }, a.View = e.View.extend({
                        constructor: function(t) {
                            i.bindAll(this, "render");
                            var s = Array.prototype.slice.apply(arguments);
                            this.options = i.extend({}, i.result(this, "options"), i.isFunction(t) ? t.call(this) : t), this.events = this.normalizeUIKeys(i.result(this, "events")), e.View.prototype.constructor.apply(this, s), a.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled, this)
                        },
                        triggerMethod: a.triggerMethod,
                        normalizeMethods: a.normalizeMethods,
                        getTemplate: function() {
                            return a.getOption(this, "template")
                        },
                        mixinTemplateHelpers: function(t) {
                            t = t || {};
                            var e = a.getOption(this, "templateHelpers");
                            return i.isFunction(e) && (e = e.call(this)), i.extend(t, e)
                        },
                        normalizeUIKeys: function(t) {
                            if (void 0 !== t) return i.each(i.keys(t), function(e) {
                                var i = e.split("@ui.");
                                2 === i.length && (t[i[0] + this.ui[i[1]]] = t[e], delete t[e])
                            }, this), t
                        },
                        configureTriggers: function() {
                            if (this.triggers) {
                                var t = {},
                                    e = this.normalizeUIKeys(i.result(this, "triggers"));
                                return i.each(e, function(e, s) {
                                    var n = i.isObject(e),
                                        a = n ? e.event : e;
                                    t[s] = function(t) {
                                        if (t) {
                                            var i = t.preventDefault,
                                                s = t.stopPropagation,
                                                o = n ? e.preventDefault : i,
                                                r = n ? e.stopPropagation : s;
                                            o && i && i.apply(t), r && s && s.apply(t)
                                        }
                                        var l = {
                                            view: this,
                                            model: this.model,
                                            collection: this.collection
                                        };
                                        this.triggerMethod(a, l)
                                    }
                                }, this), t
                            }
                        },
                        delegateEvents: function(t) {
                            this._delegateDOMEvents(t), a.bindEntityEvents(this, this.model, a.getOption(this, "modelEvents")), a.bindEntityEvents(this, this.collection, a.getOption(this, "collectionEvents"))
                        },
                        _delegateDOMEvents: function(t) {
                            t = t || this.events, i.isFunction(t) && (t = t.call(this));
                            var s = {},
                                n = this.configureTriggers();
                            i.extend(s, t, n), e.View.prototype.delegateEvents.call(this, s)
                        },
                        undelegateEvents: function() {
                            var t = Array.prototype.slice.call(arguments);
                            e.View.prototype.undelegateEvents.apply(this, t), a.unbindEntityEvents(this, this.model, a.getOption(this, "modelEvents")), a.unbindEntityEvents(this, this.collection, a.getOption(this, "collectionEvents"))
                        },
                        onShowCalled: function() {},
                        close: function() {
                            if (!this.isClosed) {
                                !1 !== this.triggerMethod("before:close") && (this.isClosed = !0, this.triggerMethod("close"), this.unbindUIElements(), this.remove())
                            }
                        },
                        bindUIElements: function() {
                            if (this.ui) {
                                this._uiBindings || (this._uiBindings = this.ui);
                                var t = i.result(this, "_uiBindings");
                                this.ui = {}, i.each(i.keys(t), function(e) {
                                    var i = t[e];
                                    this.ui[e] = this.$(i)
                                }, this)
                            }
                        },
                        unbindUIElements: function() {
                            this.ui && this._uiBindings && (i.each(this.ui, function(t, e) {
                                delete this.ui[e]
                            }, this), this.ui = this._uiBindings, delete this._uiBindings)
                        }
                    }), a.ItemView = a.View.extend({
                        constructor: function() {
                            a.View.prototype.constructor.apply(this, s(arguments))
                        },
                        serializeData: function() {
                            var t = {};
                            return this.model ? t = this.model.toJSON() : this.collection && (t = {
                                items: this.collection.toJSON()
                            }), t
                        },
                        render: function() {
                            this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
                            var t = this.serializeData();
                            t = this.mixinTemplateHelpers(t);
                            var e = this.getTemplate(),
                                i = a.Renderer.render(e, t);
                            return this.$el.html(i), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
                        },
                        close: function() {
                            this.isClosed || (this.triggerMethod("item:before:close"), a.View.prototype.close.apply(this, s(arguments)), this.triggerMethod("item:closed"))
                        }
                    }), a.CollectionView = a.View.extend({
                        itemViewEventPrefix: "itemview",
                        constructor: function(t) {
                            this._initChildViewStorage(), a.View.prototype.constructor.apply(this, s(arguments)), this._initialEvents(), this.initRenderBuffer()
                        },
                        initRenderBuffer: function() {
                            this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
                        },
                        startBuffering: function() {
                            this.initRenderBuffer(), this.isBuffering = !0
                        },
                        endBuffering: function() {
                            this.isBuffering = !1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
                        },
                        _triggerShowBufferedChildren: function() {
                            this._isShown && (i.each(this._bufferedChildren, function(t) {
                                a.triggerMethod.call(t, "show")
                            }), this._bufferedChildren = [])
                        },
                        _initialEvents: function() {
                            this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this.render, this))
                        },
                        addChildView: function(t, e, i) {
                            this.closeEmptyView();
                            var s = this.getItemView(t),
                                n = this.collection.indexOf(t);
                            this.addItemView(t, s, n)
                        },
                        onShowCalled: function() {
                            this.children.each(function(t) {
                                a.triggerMethod.call(t, "show")
                            })
                        },
                        triggerBeforeRender: function() {
                            this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
                        },
                        triggerRendered: function() {
                            this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
                        },
                        render: function() {
                            return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
                        },
                        _renderChildren: function() {
                            this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : this.showCollection(), this.endBuffering()
                        },
                        showCollection: function() {
                            var t;
                            this.collection.each(function(e, i) {
                                t = this.getItemView(e), this.addItemView(e, t, i)
                            }, this)
                        },
                        showEmptyView: function() {
                            var t = this.getEmptyView();
                            if (t && !this._showingEmptyView) {
                                this._showingEmptyView = !0;
                                var i = new e.Model;
                                this.addItemView(i, t, 0)
                            }
                        },
                        closeEmptyView: function() {
                            this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
                        },
                        getEmptyView: function() {
                            return a.getOption(this, "emptyView")
                        },
                        getItemView: function(t) {
                            var e = a.getOption(this, "itemView");
                            return e || n("An `itemView` must be specified", "NoItemViewError"), e
                        },
                        addItemView: function(t, e, s) {
                            var n = a.getOption(this, "itemViewOptions");
                            i.isFunction(n) && (n = n.call(this, t, s));
                            var o = this.buildItemView(t, e, n);
                            return this.addChildViewEventForwarding(o), this.triggerMethod("before:item:added", o), this.children.add(o), this.renderItemView(o, s), this._isShown && !this.isBuffering && a.triggerMethod.call(o, "show"), this.triggerMethod("after:item:added", o), o
                        },
                        addChildViewEventForwarding: function(t) {
                            var e = a.getOption(this, "itemViewEventPrefix");
                            this.listenTo(t, "all", function() {
                                var n = s(arguments),
                                    o = n[0],
                                    r = this.normalizeMethods(this.getItemEvents());
                                n[0] = e + ":" + o, n.splice(1, 0, t), void 0 !== r && i.isFunction(r[o]) && r[o].apply(this, n), a.triggerMethod.apply(this, n)
                            }, this)
                        },
                        getItemEvents: function() {
                            return i.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
                        },
                        renderItemView: function(t, e) {
                            t.render(), this.appendHtml(this, t, e)
                        },
                        buildItemView: function(t, e, s) {
                            return new e(i.extend({
                                model: t
                            }, s))
                        },
                        removeItemView: function(t) {
                            var e = this.children.findByModel(t);
                            this.removeChildView(e), this.checkEmpty()
                        },
                        removeChildView: function(t) {
                            t && (this.stopListening(t), t.close ? t.close() : t.remove && t.remove(), this.children.remove(t)), this.triggerMethod("item:removed", t)
                        },
                        isEmpty: function(t) {
                            return !this.collection || 0 === this.collection.length
                        },
                        checkEmpty: function() {
                            this.isEmpty(this.collection) && this.showEmptyView()
                        },
                        appendBuffer: function(t, e) {
                            t.$el.append(e)
                        },
                        appendHtml: function(t, e, i) {
                            t.isBuffering ? (t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e)) : t.$el.append(e.el)
                        },
                        _initChildViewStorage: function() {
                            this.children = new e.ChildViewContainer
                        },
                        close: function() {
                            this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), a.View.prototype.close.apply(this, s(arguments)))
                        },
                        closeChildren: function() {
                            this.children.each(function(t) {
                                this.removeChildView(t)
                            }, this), this.checkEmpty()
                        }
                    }), a.CompositeView = a.CollectionView.extend({
                        constructor: function() {
                            a.CollectionView.prototype.constructor.apply(this, s(arguments))
                        },
                        _initialEvents: function() {
                            this.once("render", function() {
                                this.collection && (this.listenTo(this.collection, "add", this.addChildView, this), this.listenTo(this.collection, "remove", this.removeItemView, this), this.listenTo(this.collection, "reset", this._renderChildren, this))
                            })
                        },
                        getItemView: function(t) {
                            var e = a.getOption(this, "itemView") || this.constructor;
                            return e || n("An `itemView` must be specified", "NoItemViewError"), e
                        },
                        serializeData: function() {
                            var t = {};
                            return this.model && (t = this.model.toJSON()), t
                        },
                        render: function() {
                            this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
                            var t = this.renderModel();
                            return this.$el.html(t), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
                        },
                        _renderChildren: function() {
                            this.isRendered && (this.triggerMethod("composite:collection:before:render"), a.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
                        },
                        renderModel: function() {
                            var t = {};
                            t = this.serializeData(), t = this.mixinTemplateHelpers(t);
                            var e = this.getTemplate();
                            return a.Renderer.render(e, t)
                        },
                        appendBuffer: function(t, e) {
                            this.getItemViewContainer(t).append(e)
                        },
                        appendHtml: function(t, e, i) {
                            if (t.isBuffering) t.elBuffer.appendChild(e.el), t._bufferedChildren.push(e);
                            else {
                                this.getItemViewContainer(t).append(e.el)
                            }
                        },
                        getItemViewContainer: function(t) {
                            if ("$itemViewContainer" in t) return t.$itemViewContainer;
                            var e, s = a.getOption(t, "itemViewContainer");
                            if (s) {
                                var o = i.isFunction(s) ? s.call(this) : s;
                                e = t.$(o), e.length <= 0 && n("The specified `itemViewContainer` was not found: " + t.itemViewContainer, "ItemViewContainerMissingError")
                            } else e = t.$el;
                            return t.$itemViewContainer = e, e
                        },
                        resetItemViewContainer: function() {
                            this.$itemViewContainer && delete this.$itemViewContainer
                        }
                    }), a.Layout = a.ItemView.extend({
                        regionType: a.Region,
                        constructor: function(t) {
                            t = t || {}, this._firstRender = !0, this._initializeRegions(t), a.ItemView.prototype.constructor.call(this, t)
                        },
                        render: function() {
                            this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
                            var t = Array.prototype.slice.apply(arguments);
                            return a.ItemView.prototype.render.apply(this, t)
                        },
                        close: function() {
                            if (!this.isClosed) {
                                this.regionManager.close();
                                var t = Array.prototype.slice.apply(arguments);
                                a.ItemView.prototype.close.apply(this, t)
                            }
                        },
                        addRegion: function(t, e) {
                            var i = {};
                            return i[t] = e, this._buildRegions(i)[t]
                        },
                        addRegions: function(t) {
                            return this.regions = i.extend({}, this.regions, t), this._buildRegions(t)
                        },
                        removeRegion: function(t) {
                            return delete this.regions[t], this.regionManager.removeRegion(t)
                        },
                        _buildRegions: function(t) {
                            var e = this,
                                i = {
                                    regionType: a.getOption(this, "regionType"),
                                    parentEl: function() {
                                        return e.$el
                                    }
                                };
                            return this.regionManager.addRegions(t, i)
                        },
                        _initializeRegions: function(t) {
                            var e;
                            this._initRegionManager(), e = i.isFunction(this.regions) ? this.regions(t) : this.regions || {}, this.addRegions(e)
                        },
                        _reInitializeRegions: function() {
                            this.regionManager.closeRegions(), this.regionManager.each(function(t) {
                                t.reset()
                            })
                        },
                        _initRegionManager: function() {
                            this.regionManager = new a.RegionManager, this.listenTo(this.regionManager, "region:add", function(t, e) {
                                this[t] = e, this.trigger("region:add", t, e)
                            }), this.listenTo(this.regionManager, "region:remove", function(t, e) {
                                delete this[t], this.trigger("region:remove", t, e)
                            })
                        }
                    }), a.AppRouter = e.Router.extend({
                        constructor: function(t) {
                            e.Router.prototype.constructor.apply(this, s(arguments)), this.options = t || {};
                            var i = a.getOption(this, "appRoutes"),
                                n = this._getController();
                            this.processAppRoutes(n, i)
                        },
                        appRoute: function(t, e) {
                            var i = this._getController();
                            this._addAppRoute(i, t, e)
                        },
                        processAppRoutes: function(t, e) {
                            if (e) {
                                var s = i.keys(e).reverse();
                                i.each(s, function(i) {
                                    this._addAppRoute(t, i, e[i])
                                }, this)
                            }
                        },
                        _getController: function() {
                            return a.getOption(this, "controller")
                        },
                        _addAppRoute: function(t, e, s) {
                            var n = t[s];
                            if (!n) throw new Error("Method '" + s + "' was not found on the controller");
                            this.route(e, s, i.bind(n, t))
                        }
                    }), a.Application = function(t) {
                        this._initRegionManager(), this._initCallbacks = new a.Callbacks, this.vent = new e.Wreqr.EventAggregator, this.commands = new e.Wreqr.Commands, this.reqres = new e.Wreqr.RequestResponse, this.submodules = {}, i.extend(this, t), this.triggerMethod = a.triggerMethod
                    }, i.extend(a.Application.prototype, e.Events, {
                        execute: function() {
                            var t = Array.prototype.slice.apply(arguments);
                            this.commands.execute.apply(this.commands, t)
                        },
                        request: function() {
                            var t = Array.prototype.slice.apply(arguments);
                            return this.reqres.request.apply(this.reqres, t)
                        },
                        addInitializer: function(t) {
                            this._initCallbacks.add(t)
                        },
                        start: function(t) {
                            this.triggerMethod("initialize:before", t), this._initCallbacks.run(t, this), this.triggerMethod("initialize:after", t), this.triggerMethod("start", t)
                        },
                        addRegions: function(t) {
                            return this._regionManager.addRegions(t)
                        },
                        closeRegions: function() {
                            this._regionManager.closeRegions()
                        },
                        removeRegion: function(t) {
                            this._regionManager.removeRegion(t)
                        },
                        getRegion: function(t) {
                            return this._regionManager.get(t)
                        },
                        module: function(t, e) {
                            var i = a.Module;
                            e && (i = e.moduleClass || i);
                            var n = s(arguments);
                            return n.unshift(this), i.create.apply(i, n)
                        },
                        _initRegionManager: function() {
                            this._regionManager = new a.RegionManager, this.listenTo(this._regionManager, "region:add", function(t, e) {
                                this[t] = e
                            }), this.listenTo(this._regionManager, "region:remove", function(t, e) {
                                delete this[t]
                            })
                        }
                    }), a.Application.extend = a.extend, a.Module = function(t, e, s) {
                        this.moduleName = t, this.options = i.extend({}, this.options, s), this.initialize = s.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = e, this.startWithParent = !0, this.triggerMethod = a.triggerMethod, i.isFunction(this.initialize) && this.initialize(this.options, t, e)
                    }, a.Module.extend = a.extend, i.extend(a.Module.prototype, e.Events, {
                        initialize: function() {},
                        addInitializer: function(t) {
                            this._initializerCallbacks.add(t)
                        },
                        addFinalizer: function(t) {
                            this._finalizerCallbacks.add(t)
                        },
                        start: function(t) {
                            this._isInitialized || (i.each(this.submodules, function(e) {
                                e.startWithParent && e.start(t)
                            }), this.triggerMethod("before:start", t), this._initializerCallbacks.run(t, this), this._isInitialized = !0, this.triggerMethod("start", t))
                        },
                        stop: function() {
                            this._isInitialized && (this._isInitialized = !1, a.triggerMethod.call(this, "before:stop"), i.each(this.submodules, function(t) {
                                t.stop()
                            }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), a.triggerMethod.call(this, "stop"))
                        },
                        addDefinition: function(t, e) {
                            this._runModuleDefinition(t, e)
                        },
                        _runModuleDefinition: function(t, s) {
                            if (t) {
                                var n = i.flatten([this, this.app, e, a, a.$, i, s]);
                                t.apply(this, n)
                            }
                        },
                        _setupInitializersAndFinalizers: function() {
                            this._initializerCallbacks = new a.Callbacks, this._finalizerCallbacks = new a.Callbacks
                        }
                    }), i.extend(a.Module, {
                        create: function(t, e, n) {
                            var a = t,
                                o = s(arguments);
                            o.splice(0, 3), e = e.split(".");
                            var r = e.length,
                                l = [];
                            return l[r - 1] = n, i.each(e, function(e, i) {
                                var s = a;
                                a = this._getModule(s, e, t, n), this._addModuleDefinition(s, a, l[i], o)
                            }, this), a
                        },
                        _getModule: function(t, e, s, n, o) {
                            var r = a.Module,
                                l = i.extend({}, n);
                            n && (r = n.moduleClass || r);
                            var d = t[e];
                            return d || (d = new r(e, s, l), t[e] = d, t.submodules[e] = d), d
                        },
                        _addModuleDefinition: function(t, e, s, n) {
                            var a, o;
                            i.isFunction(s) ? (a = s, o = !0) : i.isObject(s) ? (a = s.define, o = void 0 === s.startWithParent || s.startWithParent) : o = !0, a && e.addDefinition(a, n), e.startWithParent = e.startWithParent && o, e.startWithParent && !e.startWithParentIsConfigured && (e.startWithParentIsConfigured = !0, t.addInitializer(function(t) {
                                e.startWithParent && e.start(t)
                            }))
                        }
                    })
            }(0, e, t);
            return e.Marionette
        }),
        function(t, e) {
            function i(i, s) {
                function n(t) {
                    return pt.preferFlash && nt && !pt.ignoreFlash && pt.flash[t] !== e && pt.flash[t]
                }

                function a(t) {
                    return function(e) {
                        var i = this._s;
                        return i && i._a ? t.call(this, e) : null
                    }
                }
                this.setupOptions = {
                    url: i || null,
                    flashVersion: 8,
                    debugMode: !0,
                    debugFlash: !1,
                    useConsole: !0,
                    consoleOnly: !0,
                    waitForWindowLoad: !1,
                    bgColor: "#ffffff",
                    useHighPerformance: !1,
                    flashPollingInterval: null,
                    html5PollingInterval: null,
                    flashLoadTimeout: 1e3,
                    wmode: null,
                    allowScriptAccess: "always",
                    useFlashBlock: !1,
                    useHTML5Audio: !0,
                    forceUseGlobalHTML5Audio: !1,
                    ignoreMobileRestrictions: !1,
                    html5Test: /^(probably|maybe)$/i,
                    preferFlash: !1,
                    noSWFCache: !1,
                    idPrefix: "sound"
                }, this.defaultOptions = {
                    autoLoad: !1,
                    autoPlay: !1,
                    from: null,
                    loops: 1,
                    onid3: null,
                    onload: null,
                    whileloading: null,
                    onplay: null,
                    onpause: null,
                    onresume: null,
                    whileplaying: null,
                    onposition: null,
                    onstop: null,
                    onfailure: null,
                    onfinish: null,
                    multiShot: !0,
                    multiShotEvents: !1,
                    position: null,
                    pan: 0,
                    stream: !0,
                    to: null,
                    type: null,
                    usePolicyFile: !1,
                    volume: 100
                }, this.flash9Options = {
                    isMovieStar: null,
                    usePeakData: !1,
                    useWaveformData: !1,
                    useEQData: !1,
                    onbufferchange: null,
                    ondataerror: null
                }, this.movieStarOptions = {
                    bufferTime: 3,
                    serverURL: null,
                    onconnect: null,
                    duration: null
                }, this.audioFormats = {
                    mp3: {
                        type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                        required: !0
                    },
                    mp4: {
                        related: ["aac", "m4a", "m4b"],
                        type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                        required: !1
                    },
                    ogg: {
                        type: ["audio/ogg; codecs=vorbis"],
                        required: !1
                    },
                    opus: {
                        type: ["audio/ogg; codecs=opus", "audio/opus"],
                        required: !1
                    },
                    wav: {
                        type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                        required: !1
                    }
                }, this.movieID = "sm2-container", this.id = s || "sm2movie", this.debugID = "soundmanager-debug", this.debugURLParam = /([#?&])debug=1/i, this.versionNumber = "V2.97a.20150601", this.version = null, this.movieURL = null, this.altURL = null, this.swfLoaded = !1, this.enabled = !1, this.oMC = null, this.sounds = {}, this.soundIDs = [], this.muted = !1, this.didFlashBlock = !1, this.filePattern = null, this.filePatterns = {
                    flash8: /\.mp3(\?.*)?$/i,
                    flash9: /\.mp3(\?.*)?$/i
                }, this.features = {
                    buffering: !1,
                    peakData: !1,
                    waveformData: !1,
                    eqData: !1,
                    movieStar: !1
                }, this.sandbox = {}, this.html5 = {
                    usingFlash: null
                }, this.flash = {}, this.html5Only = !1, this.ignoreFlash = !1;
                var o, r, l, d, p, c, u, h, f, m, g, v, y, w, b, _, k, x, P, S, C, M, T, A, E, L, O, I, $, j, D, R, H, V, B, N, F, U, z, Z, q, Y, X, W, K, Q, G, J, tt, et, it, st, nt, at, ot, rt, lt, dt, pt = this,
                    ct = null,
                    ut = null,
                    ht = navigator.userAgent,
                    ft = t.location.href.toString(),
                    mt = document,
                    gt = [],
                    vt = !1,
                    yt = !1,
                    wt = !1,
                    bt = !1,
                    _t = !1,
                    kt = null,
                    xt = null,
                    Pt = !1,
                    St = !1,
                    Ct = 0,
                    Mt = null,
                    Tt = [],
                    At = null,
                    Et = Array.prototype.slice,
                    Lt = !1,
                    Ot = 0,
                    It = ht.match(/(ipad|iphone|ipod)/i),
                    $t = ht.match(/android/i),
                    jt = ht.match(/msie/i),
                    Dt = ht.match(/webkit/i),
                    Rt = ht.match(/safari/i) && !ht.match(/chrome/i),
                    Ht = ht.match(/opera/i),
                    Vt = ht.match(/(mobile|pre\/|xoom)/i) || It || $t,
                    Bt = !ft.match(/usehtml5audio/i) && !ft.match(/sm2\-ignorebadua/i) && Rt && !ht.match(/silk/i) && ht.match(/OS X 10_6_([3-7])/i),
                    Nt = (t.console !== e && console.log, mt.hasFocus !== e ? mt.hasFocus() : null),
                    Ft = Rt && (mt.hasFocus === e || !mt.hasFocus()),
                    Ut = !Ft,
                    zt = /(mp3|mp4|mpa|m4a|m4b)/i,
                    Zt = mt.location ? mt.location.protocol.match(/http/i) : null,
                    qt = Zt ? "" : "http://",
                    Yt = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
                    Xt = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
                    Wt = new RegExp("\\.(" + Xt.join("|") + ")(\\?.*)?$", "i");
                this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i, this.useAltURL = !Zt, B = {
                    swfBox: "sm2-object-box",
                    swfDefault: "movieContainer",
                    swfError: "swf_error",
                    swfTimedout: "swf_timedout",
                    swfLoaded: "swf_loaded",
                    swfUnblocked: "swf_unblocked",
                    sm2Debug: "sm2_debug",
                    highPerf: "high_performance",
                    flashDebug: "flash_debug"
                }, this.hasHTML5 = function() {
                    try {
                        return Audio !== e && (Ht && opera !== e && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== e
                    } catch (t) {
                        return !1
                    }
                }(), this.setup = function(t) {
                    var i = !pt.url;
                    return t !== e && wt && At && pt.ok() && (t.flashVersion !== e || t.url !== e || t.html5Test), f(t), Lt || (Vt ? pt.setupOptions.ignoreMobileRestrictions && !pt.setupOptions.forceUseGlobalHTML5Audio || (Tt.push(P.globalHTML5), Lt = !0) : pt.setupOptions.forceUseGlobalHTML5Audio && (Tt.push(P.globalHTML5), Lt = !0)), !dt && Vt && (pt.setupOptions.ignoreMobileRestrictions ? Tt.push(P.ignoreMobile) : (pt.setupOptions.useHTML5Audio = !0, pt.setupOptions.preferFlash = !1, It ? pt.ignoreFlash = !0 : ($t && !ht.match(/android\s2\.3/i) || !$t) && (Lt = !0))), t && (i && T && t.url !== e && pt.beginDelayedInit(), T || t.url === e || "complete" !== mt.readyState || setTimeout(C, 1)), dt = !0, pt
                }, this.ok = function() {
                    return At ? wt && !bt : pt.useHTML5Audio && pt.hasHTML5
                }, this.supported = this.ok, this.getMovie = function(e) {
                    return r(e) || mt[e] || t[e]
                }, this.createSound = function(t, i) {
                    function s() {
                        return n = N(n), pt.sounds[n.id] = new o(n), pt.soundIDs.push(n.id), pt.sounds[n.id]
                    }
                    var n, a = null;
                    if (!wt || !pt.ok()) return !1;
                    if (i !== e && (t = {
                            id: t,
                            url: i
                        }), n = h(t), n.url = Y(n.url), n.id === e && (n.id = pt.setupOptions.idPrefix + Ot++), U(n.id, !0)) return pt.sounds[n.id];
                    if (K(n)) a = s(), a._setup_html5(n);
                    else {
                        if (pt.html5Only) return s();
                        if (pt.html5.usingFlash && n.url && n.url.match(/data\:/i)) return s();
                        c > 8 && null === n.isMovieStar && (n.isMovieStar = !!(n.serverURL || n.type && n.type.match(Yt) || n.url && n.url.match(Wt))), n = F(n, void 0), a = s(), 8 === c ? ut._createSound(n.id, n.loops || 1, n.usePolicyFile) : (ut._createSound(n.id, n.url, n.usePeakData, n.useWaveformData, n.useEQData, n.isMovieStar, !!n.isMovieStar && n.bufferTime, n.loops || 1, n.serverURL, n.duration || null, n.autoPlay, !0, n.autoLoad, n.usePolicyFile), n.serverURL || (a.connected = !0, n.onconnect && n.onconnect.apply(a))), n.serverURL || !n.autoLoad && !n.autoPlay || a.load(n)
                    }
                    return !n.serverURL && n.autoPlay && a.play(), a
                }, this.destroySound = function(t, e) {
                    if (!U(t)) return !1;
                    var i, s = pt.sounds[t];
                    for (s.stop(), s._iO = {}, s.unload(), i = 0; i < pt.soundIDs.length; i++)
                        if (pt.soundIDs[i] === t) {
                            pt.soundIDs.splice(i, 1);
                            break
                        }
                    return e || s.destruct(!0), s = null, delete pt.sounds[t], !0
                }, this.load = function(t, e) {
                    return !!U(t) && pt.sounds[t].load(e)
                }, this.unload = function(t) {
                    return !!U(t) && pt.sounds[t].unload()
                }, this.onPosition = function(t, e, i, s) {
                    return !!U(t) && pt.sounds[t].onposition(e, i, s)
                }, this.onposition = this.onPosition, this.clearOnPosition = function(t, e, i) {
                    return !!U(t) && pt.sounds[t].clearOnPosition(e, i)
                }, this.play = function(t, e) {
                    var i = null,
                        s = e && !(e instanceof Object);
                    if (!wt || !pt.ok()) return !1;
                    if (U(t, s)) s && (e = {
                        url: e
                    });
                    else {
                        if (!s) return !1;
                        s && (e = {
                            url: e
                        }), e && e.url && (e.id = t, i = pt.createSound(e).play())
                    }
                    return null === i && (i = pt.sounds[t].play(e)), i
                }, this.start = this.play, this.setPosition = function(t, e) {
                    return !!U(t) && pt.sounds[t].setPosition(e)
                }, this.stop = function(t) {
                    return !!U(t) && pt.sounds[t].stop()
                }, this.stopAll = function() {
                    var t;
                    for (t in pt.sounds) pt.sounds.hasOwnProperty(t) && pt.sounds[t].stop()
                }, this.pause = function(t) {
                    return !!U(t) && pt.sounds[t].pause()
                }, this.pauseAll = function() {
                    var t;
                    for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].pause()
                }, this.resume = function(t) {
                    return !!U(t) && pt.sounds[t].resume()
                }, this.resumeAll = function() {
                    var t;
                    for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].resume()
                }, this.togglePause = function(t) {
                    return !!U(t) && pt.sounds[t].togglePause()
                }, this.setPan = function(t, e) {
                    return !!U(t) && pt.sounds[t].setPan(e)
                }, this.setVolume = function(t, i) {
                    var s, n; {
                        if (t === e || isNaN(t) || i !== e) return !!U(t) && pt.sounds[t].setVolume(i);
                        for (s = 0, n = pt.soundIDs.length; s < n; s++) pt.sounds[pt.soundIDs[s]].setVolume(t)
                    }
                }, this.mute = function(t) {
                    var e = 0;
                    if (t instanceof String && (t = null), t) return !!U(t) && pt.sounds[t].mute();
                    for (e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].mute();
                    return pt.muted = !0, !0
                }, this.muteAll = function() {
                    pt.mute()
                }, this.unmute = function(t) {
                    var e;
                    if (t instanceof String && (t = null), t) return !!U(t) && pt.sounds[t].unmute();
                    for (e = pt.soundIDs.length - 1; e >= 0; e--) pt.sounds[pt.soundIDs[e]].unmute();
                    return pt.muted = !1, !0
                }, this.unmuteAll = function() {
                    pt.unmute()
                }, this.toggleMute = function(t) {
                    return !!U(t) && pt.sounds[t].toggleMute()
                }, this.getMemoryUse = function() {
                    var t = 0;
                    return ut && 8 !== c && (t = parseInt(ut._getMemoryUse(), 10)), t
                }, this.disable = function(i) {
                    var s;
                    if (i === e && (i = !1), bt) return !1;
                    for (bt = !0, s = pt.soundIDs.length - 1; s >= 0; s--) $(pt.sounds[pt.soundIDs[s]]);
                    return u(i), it.remove(t, "load", y), !0
                }, this.canPlayMIME = function(t) {
                    var e;
                    return pt.hasHTML5 && (e = Q({
                        type: t
                    })), !e && At && (e = t && pt.ok() ? !!((c > 8 ? t.match(Yt) : null) || t.match(pt.mimePattern)) : null), e
                }, this.canPlayURL = function(t) {
                    var e;
                    return pt.hasHTML5 && (e = Q({
                        url: t
                    })), !e && At && (e = t && pt.ok() ? !!t.match(pt.filePattern) : null), e
                }, this.canPlayLink = function(t) {
                    return !(t.type === e || !t.type || !pt.canPlayMIME(t.type)) || pt.canPlayURL(t.href)
                }, this.getSoundById = function(t, e) {
                    return t ? pt.sounds[t] : null
                }, this.onready = function(e, i) {
                    var s = !1;
                    if ("function" != typeof e) throw R("needFunction", "onready");
                    return i || (i = t), g("onready", e, i), v(), s = !0, s
                }, this.ontimeout = function(e, i) {
                    var s = !1;
                    if ("function" != typeof e) throw R("needFunction", "ontimeout");
                    return i || (i = t), g("ontimeout", e, i), v({
                        type: "ontimeout"
                    }), s = !0, s
                }, this._writeDebug = function(t, e) {
                    return !0
                }, this._wD = this._writeDebug, this._debug = function() {}, this.reboot = function(e, i) {
                    var s, n, a;
                    for (s = pt.soundIDs.length - 1; s >= 0; s--) pt.sounds[pt.soundIDs[s]].destruct();
                    if (ut) try {
                        jt && (xt = ut.innerHTML), kt = ut.parentNode.removeChild(ut)
                    } catch (t) {}
                    if (xt = kt = At = ut = null, pt.enabled = T = wt = Pt = St = vt = yt = bt = Lt = pt.swfLoaded = !1, pt.soundIDs = [], pt.sounds = {}, Ot = 0, dt = !1, e) gt = [];
                    else
                        for (s in gt)
                            if (gt.hasOwnProperty(s))
                                for (n = 0, a = gt[s].length; n < a; n++) gt[s][n].fired = !1; return pt.html5 = {
                        usingFlash: null
                    }, pt.flash = {}, pt.html5Only = !1, pt.ignoreFlash = !1, t.setTimeout(function() {
                        i || pt.beginDelayedInit()
                    }, 20), pt
                }, this.reset = function() {
                    return pt.reboot(!0, !0)
                }, this.getMoviePercent = function() {
                    return ut && "PercentLoaded" in ut ? ut.PercentLoaded() : null
                }, this.beginDelayedInit = function() {
                    _t = !0, C(), setTimeout(function() {
                        return !St && (E(), S(), St = !0, !0)
                    }, 20), w()
                }, this.destruct = function() {
                    pt.disable(!0)
                }, o = function(t) {
                    var i, s, n, a, o, r, l, d, p, u, f = this,
                        m = !1,
                        g = [],
                        v = 0,
                        y = null;
                    p = {
                        duration: null,
                        time: null
                    }, this.id = t.id, this.sID = this.id, this.url = t.url, this.options = h(t), this.instanceOptions = this.options, this._iO = this.instanceOptions, this.pan = this.options.pan, this.volume = this.options.volume, this.isHTML5 = !1, this._a = null, u = !this.url, this.id3 = {}, this._debug = function() {}, this.load = function(t) {
                        var i, s = null;
                        if (t !== e ? f._iO = h(t, f.options) : (t = f.options, f._iO = t, y && y !== f.url && (f._iO.url = f.url, f.url = null)), f._iO.url || (f._iO.url = f.url), f._iO.url = Y(f._iO.url), f.instanceOptions = f._iO, i = f._iO, !i.url && !f.url) return f;
                        if (i.url === f.url && 0 !== f.readyState && 2 !== f.readyState) return 3 === f.readyState && i.onload && lt(f, function() {
                            i.onload.apply(f, [!!f.duration])
                        }), f;
                        if (f.loaded = !1, f.readyState = 1, f.playState = 0, f.id3 = {}, K(i)) s = f._setup_html5(i), s._called_load || (f._html5_canplay = !1, f.url !== i.url && (f._a.src = i.url, f.setPosition(0)), f._a.autobuffer = "auto", f._a.preload = "auto", f._a._called_load = !0);
                        else {
                            if (pt.html5Only) return f;
                            if (f._iO.url && f._iO.url.match(/data\:/i)) return f;
                            try {
                                f.isHTML5 = !1, f._iO = F(N(i)), f._iO.autoPlay && (f._iO.position || f._iO.from) && (f._iO.autoPlay = !1), i = f._iO, 8 === c ? ut._load(f.id, i.url, i.stream, i.autoPlay, i.usePolicyFile) : ut._load(f.id, i.url, !!i.stream, !!i.autoPlay, i.loops || 1, !!i.autoLoad, i.usePolicyFile)
                            } catch (t) {
                                L({
                                    type: "SMSOUND_LOAD_JS_EXCEPTION",
                                    fatal: !0
                                })
                            }
                        }
                        return f.url = i.url, f
                    }, this.unload = function() {
                        return 0 !== f.readyState && (f.isHTML5 ? (a(), f._a && (f._a.pause(), y = J(f._a))) : 8 === c ? ut._unload(f.id, "about:blank") : ut._unload(f.id), i()), f
                    }, this.destruct = function(t) {
                        f.isHTML5 ? (a(), f._a && (f._a.pause(), J(f._a), Lt || n(), f._a._s = null, f._a = null)) : (f._iO.onfailure = null, ut._destroySound(f.id)), t || pt.destroySound(f.id, !0)
                    }, this.play = function(t, i) {
                        var s, n, a, l, p, g = !0,
                            v = null;
                        if (i = i === e || i, t || (t = {}), f.url && (f._iO.url = f.url), f._iO = h(f._iO, f.options), f._iO = h(t, f._iO), f._iO.url = Y(f._iO.url), f.instanceOptions = f._iO, !f.isHTML5 && f._iO.serverURL && !f.connected) return f.getAutoPlay() || f.setAutoPlay(!0), f;
                        if (K(f._iO) && (f._setup_html5(f._iO), o()), 1 !== f.playState || f.paused || f._iO.multiShot || (f.isHTML5 && f.setPosition(f._iO.position), v = f), null !== v) return v;
                        if (t.url && t.url !== f.url && (f.readyState || f.isHTML5 || 8 !== c || !u ? f.load(f._iO) : u = !1), f.loaded || (0 === f.readyState ? (f.isHTML5 || pt.html5Only ? f.isHTML5 ? f.load(f._iO) : v = f : (f._iO.autoPlay = !0, f.load(f._iO)), f.instanceOptions = f._iO) : 2 === f.readyState && (v = f)), null !== v) return v;
                        if (!f.isHTML5 && 9 === c && f.position > 0 && f.position === f.duration && (t.position = 0), f.paused && f.position >= 0 && (!f._iO.serverURL || f.position > 0)) f.resume();
                        else {
                            if (f._iO = h(t, f._iO), (!f.isHTML5 && null !== f._iO.position && f._iO.position > 0 || null !== f._iO.from && f._iO.from > 0 || null !== f._iO.to) && 0 === f.instanceCount && 0 === f.playState && !f._iO.serverURL) {
                                if (n = function() {
                                        f._iO = h(t, f._iO), f.play(f._iO)
                                    }, f.isHTML5 && !f._html5_canplay ? (f.load({
                                        _oncanplay: n
                                    }), v = !1) : f.isHTML5 || f.loaded || f.readyState && 2 === f.readyState || (f.load({
                                        onload: n
                                    }), v = !1), null !== v) return v;
                                f._iO = d()
                            }(!f.instanceCount || f._iO.multiShotEvents || f.isHTML5 && f._iO.multiShot && !Lt || !f.isHTML5 && c > 8 && !f.getAutoPlay()) && f.instanceCount++, f._iO.onposition && 0 === f.playState && r(f), f.playState = 1, f.paused = !1, f.position = f._iO.position === e || isNaN(f._iO.position) ? 0 : f._iO.position, f.isHTML5 || (f._iO = F(N(f._iO))), f._iO.onplay && i && (f._iO.onplay.apply(f), m = !0), f.setVolume(f._iO.volume, !0), f.setPan(f._iO.pan, !0), f.isHTML5 ? f.instanceCount < 2 ? (o(), s = f._setup_html5(), f.setPosition(f._iO.position), s.play()) : (a = new Audio(f._iO.url), l = function() {
                                it.remove(a, "ended", l), f._onfinish(f), J(a), a = null
                            }, p = function() {
                                it.remove(a, "canplay", p);
                                try {
                                    a.currentTime = f._iO.position / 1e3
                                } catch (t) {}
                                a.play()
                            }, it.add(a, "ended", l), f._iO.volume !== e && (a.volume = Math.max(0, Math.min(1, f._iO.volume / 100))), f.muted && (a.muted = !0), f._iO.position ? it.add(a, "canplay", p) : a.play()) : (g = ut._start(f.id, f._iO.loops || 1, 9 === c ? f.position : f.position / 1e3, f._iO.multiShot || !1), 9 !== c || g || f._iO.onplayerror && f._iO.onplayerror.apply(f))
                        }
                        return f
                    }, this.start = this.play, this.stop = function(t) {
                        var e, i = f._iO;
                        return 1 === f.playState && (f._onbufferchange(0), f._resetOnPosition(0), f.paused = !1, f.isHTML5 || (f.playState = 0), l(), i.to && f.clearOnPosition(i.to), f.isHTML5 ? f._a && (e = f.position, f.setPosition(0), f.position = e, f._a.pause(), f.playState = 0, f._onTimer(), a()) : (ut._stop(f.id, t), i.serverURL && f.unload()), f.instanceCount = 0, f._iO = {}, i.onstop && i.onstop.apply(f)), f
                    }, this.setAutoPlay = function(t) {
                        f._iO.autoPlay = t, f.isHTML5 || (ut._setAutoPlay(f.id, t), t && (f.instanceCount || 1 !== f.readyState || f.instanceCount++))
                    }, this.getAutoPlay = function() {
                        return f._iO.autoPlay
                    }, this.setPosition = function(t) {
                        t === e && (t = 0);
                        var i, s, n = f.isHTML5 ? Math.max(t, 0) : Math.min(f.duration || f._iO.duration, Math.max(t, 0));
                        if (f.position = n, s = f.position / 1e3, f._resetOnPosition(f.position), f._iO.position = n, f.isHTML5) {
                            if (f._a) {
                                if (f._html5_canplay) {
                                    if (f._a.currentTime !== s) try {
                                        f._a.currentTime = s, (0 === f.playState || f.paused) && f._a.pause()
                                    } catch (t) {}
                                } else if (s) return f;
                                f.paused && f._onTimer(!0)
                            }
                        } else i = 9 === c ? f.position : s, f.readyState && 2 !== f.readyState && ut._setPosition(f.id, i, f.paused || !f.playState, f._iO.multiShot);
                        return f
                    }, this.pause = function(t) {
                        return f.paused || 0 === f.playState && 1 !== f.readyState ? f : (f.paused = !0, f.isHTML5 ? (f._setup_html5().pause(), a()) : (t || t === e) && ut._pause(f.id, f._iO.multiShot), f._iO.onpause && f._iO.onpause.apply(f), f)
                    }, this.resume = function() {
                        var t = f._iO;
                        return f.paused ? (f.paused = !1, f.playState = 1, f.isHTML5 ? (f._setup_html5().play(), o()) : (t.isMovieStar && !t.serverURL && f.setPosition(f.position), ut._pause(f.id, t.multiShot)), !m && t.onplay ? (t.onplay.apply(f), m = !0) : t.onresume && t.onresume.apply(f), f) : f
                    }, this.togglePause = function() {
                        return 0 === f.playState ? (f.play({
                            position: 9 !== c || f.isHTML5 ? f.position / 1e3 : f.position
                        }), f) : (f.paused ? f.resume() : f.pause(), f)
                    }, this.setPan = function(t, i) {
                        return t === e && (t = 0), i === e && (i = !1), f.isHTML5 || ut._setPan(f.id, t), f._iO.pan = t, i || (f.pan = t, f.options.pan = t), f
                    }, this.setVolume = function(t, i) {
                        return t === e && (t = 100), i === e && (i = !1), f.isHTML5 ? f._a && (pt.muted && !f.muted && (f.muted = !0, f._a.muted = !0), f._a.volume = Math.max(0, Math.min(1, t / 100))) : ut._setVolume(f.id, pt.muted && !f.muted || f.muted ? 0 : t), f._iO.volume = t, i || (f.volume = t, f.options.volume = t), f
                    }, this.mute = function() {
                        return f.muted = !0, f.isHTML5 ? f._a && (f._a.muted = !0) : ut._setVolume(f.id, 0), f
                    }, this.unmute = function() {
                        f.muted = !1;
                        var t = f._iO.volume !== e;
                        return f.isHTML5 ? f._a && (f._a.muted = !1) : ut._setVolume(f.id, t ? f._iO.volume : f.options.volume), f
                    }, this.toggleMute = function() {
                        return f.muted ? f.unmute() : f.mute()
                    }, this.onPosition = function(t, i, s) {
                        return g.push({
                            position: parseInt(t, 10),
                            method: i,
                            scope: s !== e ? s : f,
                            fired: !1
                        }), f
                    }, this.onposition = this.onPosition, this.clearOnPosition = function(t, e) {
                        var i;
                        if (t = parseInt(t, 10), isNaN(t)) return !1;
                        for (i = 0; i < g.length; i++) t === g[i].position && (e && e !== g[i].method || (g[i].fired && v--, g.splice(i, 1)))
                    }, this._processOnPosition = function() {
                        var t, e, i = g.length;
                        if (!i || !f.playState || v >= i) return !1;
                        for (t = i - 1; t >= 0; t--) e = g[t], !e.fired && f.position >= e.position && (e.fired = !0, v++, e.method.apply(e.scope, [e.position]), i = g.length);
                        return !0
                    }, this._resetOnPosition = function(t) {
                        var e, i, s = g.length;
                        if (!s) return !1;
                        for (e = s - 1; e >= 0; e--) i = g[e], i.fired && t <= i.position && (i.fired = !1, v--);
                        return !0
                    }, d = function() {
                        var t, e, i = f._iO,
                            s = i.from,
                            n = i.to;
                        return e = function() {
                            f.clearOnPosition(n, e), f.stop()
                        }, t = function() {
                            null === n || isNaN(n) || f.onPosition(n, e)
                        }, null === s || isNaN(s) || (i.position = s, i.multiShot = !1, t()), i
                    }, r = function() {
                        var t, e = f._iO.onposition;
                        if (e)
                            for (t in e) e.hasOwnProperty(t) && f.onPosition(parseInt(t, 10), e[t])
                    }, l = function() {
                        var t, e = f._iO.onposition;
                        if (e)
                            for (t in e) e.hasOwnProperty(t) && f.clearOnPosition(parseInt(t, 10))
                    }, o = function() {
                        f.isHTML5 && z(f)
                    }, a = function() {
                        f.isHTML5 && Z(f)
                    }, i = function(t) {
                        t || (g = [], v = 0), m = !1, f._hasTimer = null, f._a = null, f._html5_canplay = !1, f.bytesLoaded = null, f.bytesTotal = null, f.duration = f._iO && f._iO.duration ? f._iO.duration : null, f.durationEstimate = null, f.buffered = [], f.eqData = [], f.eqData.left = [], f.eqData.right = [], f.failures = 0, f.isBuffering = !1, f.instanceOptions = {}, f.instanceCount = 0, f.loaded = !1, f.metadata = {}, f.readyState = 0, f.muted = !1, f.paused = !1, f.peakData = {
                            left: 0,
                            right: 0
                        }, f.waveformData = {
                            left: [],
                            right: []
                        }, f.playState = 0, f.position = null, f.id3 = {}
                    }, i(), this._onTimer = function(t) {
                        var e, i, s = !1,
                            n = {};
                        if (f._hasTimer || t) return f._a && (t || (f.playState > 0 || 1 === f.readyState) && !f.paused) && (e = f._get_html5_duration(), e !== p.duration && (p.duration = e, f.duration = e, s = !0), f.durationEstimate = f.duration, i = 1e3 * f._a.currentTime || 0, i !== p.time && (p.time = i, s = !0), (s || t) && f._whileplaying(i, n, n, n, n)), s
                    }, this._get_html5_duration = function() {
                        var t = f._iO,
                            e = f._a && f._a.duration ? 1e3 * f._a.duration : t && t.duration ? t.duration : null;
                        return e && !isNaN(e) && e !== 1 / 0 ? e : null
                    }, this._apply_loop = function(t, e) {
                        t.loop = e > 1 ? "loop" : ""
                    }, this._setup_html5 = function(t) {
                        var e, n = h(f._iO, t),
                            a = Lt ? ct : f._a,
                            o = decodeURI(n.url);
                        if (Lt ? o === decodeURI(st) && (e = !0) : o === decodeURI(y) && (e = !0), a) {
                            if (a._s)
                                if (Lt) a._s && a._s.playState && !e && a._s.stop();
                                else if (!Lt && o === decodeURI(y)) return f._apply_loop(a, n.loops), a;
                            e || (y && i(!1), a.src = n.url, f.url = n.url, y = n.url, st = n.url, a._called_load = !1)
                        } else n.autoLoad || n.autoPlay ? (f._a = new Audio(n.url), f._a.load()) : f._a = Ht && opera.version() < 10 ? new Audio(null) : new Audio, a = f._a, a._called_load = !1, Lt && (ct = a);
                        return f.isHTML5 = !0, f._a = a, a._s = f, s(), f._apply_loop(a, n.loops), n.autoLoad || n.autoPlay ? f.load() : (a.autobuffer = !1, a.preload = "auto"), a
                    }, s = function() {
                        if (f._a._added_events) return !1;
                        var t;
                        f._a._added_events = !0;
                        for (t in rt) rt.hasOwnProperty(t) && function(t, e, i) {
                            f._a && f._a.addEventListener(t, e, i || !1)
                        }(t, rt[t]);
                        return !0
                    }, n = function() {
                        var t;
                        f._a._added_events = !1;
                        for (t in rt) rt.hasOwnProperty(t) && function(t, e, i) {
                            f._a && f._a.removeEventListener(t, e, i || !1)
                        }(t, rt[t])
                    }, this._onload = function(t) {
                        var e = !!t || !f.isHTML5 && 8 === c && f.duration;
                        return f.loaded = e, f.readyState = e ? 3 : 2, f._onbufferchange(0), f._iO.onload && lt(f, function() {
                            f._iO.onload.apply(f, [e])
                        }), !0
                    }, this._onbufferchange = function(t) {
                        return 0 !== f.playState && (!(t && f.isBuffering || !t && !f.isBuffering) && (f.isBuffering = 1 === t, f._iO.onbufferchange && f._iO.onbufferchange.apply(f, [t]), !0))
                    }, this._onsuspend = function() {
                        return f._iO.onsuspend && f._iO.onsuspend.apply(f), !0
                    }, this._onfailure = function(t, e, i) {
                        f.failures++, f._iO.onfailure && 1 === f.failures && f._iO.onfailure(t, e, i)
                    }, this._onwarning = function(t, e, i) {
                        f._iO.onwarning && f._iO.onwarning(t, e, i)
                    }, this._onfinish = function() {
                        var t = f._iO.onfinish;
                        f._onbufferchange(0), f._resetOnPosition(0), f.instanceCount && (f.instanceCount--, f.instanceCount || (l(), f.playState = 0, f.paused = !1, f.instanceCount = 0, f.instanceOptions = {}, f._iO = {}, a(), f.isHTML5 && (f.position = 0)), f.instanceCount && !f._iO.multiShotEvents || t && lt(f, function() {
                            t.apply(f)
                        }))
                    }, this._whileloading = function(t, e, i, s) {
                        var n = f._iO;
                        f.bytesLoaded = t, f.bytesTotal = e, f.duration = Math.floor(i), f.bufferLength = s, f.isHTML5 || n.isMovieStar ? f.durationEstimate = f.duration : n.duration ? f.durationEstimate = f.duration > n.duration ? f.duration : n.duration : f.durationEstimate = parseInt(f.bytesTotal / f.bytesLoaded * f.duration, 10), f.isHTML5 || (f.buffered = [{
                            start: 0,
                            end: f.duration
                        }]), (3 !== f.readyState || f.isHTML5) && n.whileloading && n.whileloading.apply(f)
                    }, this._whileplaying = function(t, i, s, n, a) {
                        var o, r = f._iO;
                        return !isNaN(t) && null !== t && (f.position = Math.max(0, t), f._processOnPosition(), !f.isHTML5 && c > 8 && (r.usePeakData && i !== e && i && (f.peakData = {
                            left: i.leftPeak,
                            right: i.rightPeak
                        }), r.useWaveformData && s !== e && s && (f.waveformData = {
                            left: s.split(","),
                            right: n.split(",")
                        }), r.useEQData && a !== e && a && a.leftEQ && (o = a.leftEQ.split(","), f.eqData = o, f.eqData.left = o, a.rightEQ !== e && a.rightEQ && (f.eqData.right = a.rightEQ.split(",")))), 1 === f.playState && (f.isHTML5 || 8 !== c || f.position || !f.isBuffering || f._onbufferchange(0), r.whileplaying && r.whileplaying.apply(f)), !0)
                    }, this._oncaptiondata = function(t) {
                        f.captiondata = t, f._iO.oncaptiondata && f._iO.oncaptiondata.apply(f, [t])
                    }, this._onmetadata = function(t, e) {
                        var i, s, n = {};
                        for (i = 0, s = t.length; i < s; i++) n[t[i]] = e[i];
                        f.metadata = n, f._iO.onmetadata && f._iO.onmetadata.call(f, f.metadata)
                    }, this._onid3 = function(t, e) {
                        var i, s, n = [];
                        for (i = 0, s = t.length; i < s; i++) n[t[i]] = e[i];
                        f.id3 = h(f.id3, n), f._iO.onid3 && f._iO.onid3.apply(f)
                    }, this._onconnect = function(t) {
                        t = 1 === t, f.connected = t, t && (f.failures = 0, U(f.id) && (f.getAutoPlay() ? f.play(e, f.getAutoPlay()) : f._iO.autoLoad && f.load()), f._iO.onconnect && f._iO.onconnect.apply(f, [t]))
                    }, this._ondataerror = function(t) {
                        f.playState > 0 && f._iO.ondataerror && f._iO.ondataerror.apply(f)
                    }
                }, A = function() {
                    return mt.body || mt.getElementsByTagName("div")[0]
                }, r = function(t) {
                    return mt.getElementById(t)
                }, h = function(t, i) {
                    var s, n, a = t || {};
                    s = i === e ? pt.defaultOptions : i;
                    for (n in s) s.hasOwnProperty(n) && a[n] === e && ("object" != typeof s[n] || null === s[n] ? a[n] = s[n] : a[n] = h(a[n], s[n]));
                    return a
                }, lt = function(e, i) {
                    e.isHTML5 || 8 !== c ? i() : t.setTimeout(i, 0)
                }, m = {
                    onready: 1,
                    ontimeout: 1,
                    defaultOptions: 1,
                    flash9Options: 1,
                    movieStarOptions: 1
                }, f = function(t, i) {
                    var s, n = !0,
                        a = i !== e,
                        o = pt.setupOptions,
                        r = m;
                    for (s in t)
                        if (t.hasOwnProperty(s))
                            if ("object" != typeof t[s] || null === t[s] || t[s] instanceof Array || t[s] instanceof RegExp) a && r[i] !== e ? pt[i][s] = t[s] : o[s] !== e ? (pt.setupOptions[s] = t[s], pt[s] = t[s]) : r[s] === e ? n = !1 : pt[s] instanceof Function ? pt[s].apply(pt, t[s] instanceof Array ? t[s] : [t[s]]) : pt[s] = t[s];
                            else {
                                if (r[s] !== e) return f(t[s], s);
                                n = !1
                            }
                    return n
                }, it = function() {
                    function e(t) {
                        var e = Et.call(t),
                            i = e.length;
                        return a ? (e[1] = "on" + e[1], i > 3 && e.pop()) : 3 === i && e.push(!1), e
                    }

                    function i(t, e) {
                        var i = t.shift(),
                            s = [o[e]];
                        a ? i[s](t[0], t[1]) : i[s].apply(i, t)
                    }

                    function s() {
                        i(e(arguments), "add")
                    }

                    function n() {
                        i(e(arguments), "remove")
                    }
                    var a = t.attachEvent,
                        o = {
                            add: a ? "attachEvent" : "addEventListener",
                            remove: a ? "detachEvent" : "removeEventListener"
                        };
                    return {
                        add: s,
                        remove: n
                    }
                }(), rt = {
                    abort: a(function() {}),
                    canplay: a(function() {
                        var t, i = this._s;
                        if (i._html5_canplay) return !0;
                        if (i._html5_canplay = !0, i._onbufferchange(0), t = i._iO.position === e || isNaN(i._iO.position) ? null : i._iO.position / 1e3, this.currentTime !== t) try {
                            this.currentTime = t
                        } catch (t) {}
                        i._iO._oncanplay && i._iO._oncanplay()
                    }),
                    canplaythrough: a(function() {
                        var t = this._s;
                        t.loaded || (t._onbufferchange(0), t._whileloading(t.bytesLoaded, t.bytesTotal, t._get_html5_duration()), t._onload(!0))
                    }),
                    durationchange: a(function() {
                        var t, e = this._s;
                        t = e._get_html5_duration(), isNaN(t) || t === e.duration || (e.durationEstimate = e.duration = t)
                    }),
                    ended: a(function() {
                        this._s._onfinish()
                    }),
                    error: a(function() {
                        this._s._onload(!1)
                    }),
                    loadeddata: a(function() {
                        var t = this._s;
                        t._loaded || Rt || (t.duration = t._get_html5_duration())
                    }),
                    loadedmetadata: a(function() {}),
                    loadstart: a(function() {
                        this._s._onbufferchange(1)
                    }),
                    play: a(function() {
                        this._s._onbufferchange(0)
                    }),
                    playing: a(function() {
                        this._s._onbufferchange(0)
                    }),
                    progress: a(function(t) {
                        var e, i, s = this._s,
                            n = 0,
                            a = (t.type, t.target.buffered),
                            o = t.loaded || 0,
                            r = t.total || 1;
                        if (s.buffered = [], a && a.length) {
                            for (e = 0, i = a.length; e < i; e++) s.buffered.push({
                                start: 1e3 * a.start(e),
                                end: 1e3 * a.end(e)
                            });
                            n = 1e3 * (a.end(0) - a.start(0)), o = Math.min(1, n / (1e3 * t.target.duration))
                        }
                        isNaN(o) || (s._whileloading(o, r, s._get_html5_duration()), o && r && o === r && rt.canplaythrough.call(this, t))
                    }),
                    ratechange: a(function() {}),
                    suspend: a(function(t) {
                        var e = this._s;
                        rt.progress.call(this, t), e._onsuspend()
                    }),
                    stalled: a(function() {}),
                    timeupdate: a(function() {
                        this._s._onTimer()
                    }),
                    waiting: a(function() {
                        this._s._onbufferchange(1)
                    })
                }, K = function(t) {
                    return !(!t || !(t.type || t.url || t.serverURL)) && (!(t.serverURL || t.type && n(t.type)) && (t.type ? Q({
                        type: t.type
                    }) : Q({
                        url: t.url
                    }) || pt.html5Only || t.url.match(/data\:/i)))
                }, J = function(t) {
                    var i;
                    return t && (i = Rt ? "about:blank" : pt.html5.canPlayType("audio/wav") ? "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==" : "about:blank", t.src = i, t._called_unload !== e && (t._called_load = !1)), Lt && (st = null), i
                }, Q = function(t) {
                    if (!pt.useHTML5Audio || !pt.hasHTML5) return !1;
                    var i, s, a, o, r = t.url || null,
                        l = t.type || null,
                        d = pt.audioFormats;
                    if (l && pt.html5[l] !== e) return pt.html5[l] && !n(l);
                    if (!G) {
                        G = [];
                        for (o in d) d.hasOwnProperty(o) && (G.push(o), d[o].related && (G = G.concat(d[o].related)));
                        G = new RegExp("\\.(" + G.join("|") + ")(\\?.*)?$", "i")
                    }
                    return a = r ? r.toLowerCase().match(G) : null, a && a.length ? a = a[1] : l ? (s = l.indexOf(";"), a = (-1 !== s ? l.substr(0, s) : l).substr(6)) : i = !1, a && pt.html5[a] !== e ? i = pt.html5[a] && !n(a) : (l = "audio/" + a, i = pt.html5.canPlayType({
                        type: l
                    }), pt.html5[a] = i, i = i && pt.html5[l] && !n(l)), i
                }, et = function() {
                    function t(t) {
                        var e, i, s = !1,
                            n = !1;
                        if (!o || "function" != typeof o.canPlayType) return s;
                        if (t instanceof Array) {
                            for (a = 0, i = t.length; a < i; a++)(pt.html5[t[a]] || o.canPlayType(t[a]).match(pt.html5Test)) && (n = !0, pt.html5[t[a]] = !0, pt.flash[t[a]] = !!t[a].match(zt));
                            s = n
                        } else e = !(!o || "function" != typeof o.canPlayType) && o.canPlayType(t), s = !(!e || !e.match(pt.html5Test));
                        return s
                    }
                    if (!pt.useHTML5Audio || !pt.hasHTML5) return pt.html5.usingFlash = !0, At = !0, !1;
                    var i, s, n, a, o = Audio !== e ? Ht && opera.version() < 10 ? new Audio(null) : new Audio : null,
                        r = {};
                    n = pt.audioFormats;
                    for (i in n)
                        if (n.hasOwnProperty(i) && (s = "audio/" + i, r[i] = t(n[i].type), r[s] = r[i], i.match(zt) ? (pt.flash[i] = !0, pt.flash[s] = !0) : (pt.flash[i] = !1, pt.flash[s] = !1), n[i] && n[i].related))
                            for (a = n[i].related.length - 1; a >= 0; a--) r["audio/" + n[i].related[a]] = r[i], pt.html5[n[i].related[a]] = r[i], pt.flash[n[i].related[a]] = r[i];
                    return r.canPlayType = o ? t : null, pt.html5 = h(pt.html5, r), pt.html5.usingFlash = W(), At = pt.html5.usingFlash, !0
                }, P = {}, R = function() {}, N = function(t) {
                    return 8 === c && t.loops > 1 && t.stream && (t.stream = !1), t
                }, F = function(t, e) {
                    return t && !t.usePolicyFile && (t.onid3 || t.usePeakData || t.useWaveformData || t.useEQData) && (t.usePolicyFile = !0), t
                }, l = function() {
                    return !1
                }, $ = function(t) {
                    var e;
                    for (e in t) t.hasOwnProperty(e) && "function" == typeof t[e] && (t[e] = l);
                    e = null
                }, j = function(t) {
                    t === e && (t = !1), (bt || t) && pt.disable(t)
                }, D = function(t) {
                    var e;
                    if (t)
                        if (t.match(/\.swf(\?.*)?$/i)) {
                            if (t.substr(t.toLowerCase().lastIndexOf(".swf?") + 4)) return t
                        } else t.lastIndexOf("/") !== t.length - 1 && (t += "/");
                    return e = (t && -1 !== t.lastIndexOf("/") ? t.substr(0, t.lastIndexOf("/") + 1) : "./") + pt.movieURL, pt.noSWFCache && (e += "?ts=" + (new Date).getTime()), e
                }, k = function() {
                    8 !== (c = parseInt(pt.flashVersion, 10)) && 9 !== c && (pt.flashVersion = c = 8);
                    var t = pt.debugMode || pt.debugFlash ? "_debug.swf" : ".swf";
                    pt.useHTML5Audio && !pt.html5Only && pt.audioFormats.mp4.required && c < 9 && (pt.flashVersion = c = 9), pt.version = pt.versionNumber + (pt.html5Only ? " (HTML5-only mode)" : 9 === c ? " (AS3/Flash 9)" : " (AS2/Flash 8)"), c > 8 ? (pt.defaultOptions = h(pt.defaultOptions, pt.flash9Options), pt.features.buffering = !0, pt.defaultOptions = h(pt.defaultOptions, pt.movieStarOptions), pt.filePatterns.flash9 = new RegExp("\\.(mp3|" + Xt.join("|") + ")(\\?.*)?$", "i"), pt.features.movieStar = !0) : pt.features.movieStar = !1, pt.filePattern = pt.filePatterns[8 !== c ? "flash9" : "flash8"], pt.movieURL = (8 === c ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", t), pt.features.peakData = pt.features.waveformData = pt.features.eqData = c > 8
                }, O = function(t, e) {
                    if (!ut) return !1;
                    ut._setPolling(t, e)
                }, I = function() {}, U = this.getSoundById, V = function() {
                    var t = [];
                    return pt.debugMode && t.push(B.sm2Debug), pt.debugFlash && t.push(B.flashDebug), pt.useHighPerformance && t.push(B.highPerf), t.join(" ")
                }, H = function() {
                    var t = (R("fbHandler"), pt.getMoviePercent()),
                        e = B,
                        i = {
                            type: "FLASHBLOCK"
                        };
                    if (pt.html5Only) return !1;
                    pt.ok() ? pt.oMC && (pt.oMC.className = [V(), e.swfDefault, e.swfLoaded + (pt.didFlashBlock ? " " + e.swfUnblocked : "")].join(" ")) : (At && (pt.oMC.className = V() + " " + e.swfDefault + " " + (null === t ? e.swfTimedout : e.swfError)), pt.didFlashBlock = !0, v({
                        type: "ontimeout",
                        ignoreInit: !0,
                        error: i
                    }), L(i))
                }, g = function(t, i, s) {
                    gt[t] === e && (gt[t] = []), gt[t].push({
                        method: i,
                        scope: s || null,
                        fired: !1
                    })
                }, v = function(t) {
                    if (t || (t = {
                            type: pt.ok() ? "onready" : "ontimeout"
                        }), !wt && t && !t.ignoreInit) return !1;
                    if ("ontimeout" === t.type && (pt.ok() || bt && !t.ignoreInit)) return !1;
                    var e, i, s = {
                            success: t && t.ignoreInit ? pt.ok() : !bt
                        },
                        n = t && t.type ? gt[t.type] || [] : [],
                        a = [],
                        o = [s],
                        r = At && !pt.ok();
                    for (t.error && (o[0].error = t.error), e = 0, i = n.length; e < i; e++) !0 !== n[e].fired && a.push(n[e]);
                    if (a.length)
                        for (e = 0, i = a.length; e < i; e++) a[e].scope ? a[e].method.apply(a[e].scope, o) : a[e].method.apply(this, o), r || (a[e].fired = !0);
                    return !0
                }, y = function() {
                    t.setTimeout(function() {
                        pt.useFlashBlock && H(), v(), "function" == typeof pt.onload && pt.onload.apply(t), pt.waitForWindowLoad && it.add(t, "load", y)
                    }, 1)
                }, at = function() {
                    if (nt !== e) return nt;
                    var i, s, n, a = !1,
                        o = navigator,
                        r = o.plugins,
                        l = t.ActiveXObject;
                    if (r && r.length) s = "application/x-shockwave-flash", (n = o.mimeTypes) && n[s] && n[s].enabledPlugin && n[s].enabledPlugin.description && (a = !0);
                    else if (l !== e && !ht.match(/MSAppHost/i)) {
                        try {
                            i = new l("ShockwaveFlash.ShockwaveFlash")
                        } catch (t) {
                            i = null
                        }
                        a = !!i, i = null
                    }
                    return nt = a, a
                }, W = function() {
                    var t, e, i = pt.audioFormats;
                    if (It && !!ht.match(/os (1|2|3_0|3_1)\s/i) ? (pt.hasHTML5 = !1, pt.html5Only = !0, pt.oMC && (pt.oMC.style.display = "none")) : pt.useHTML5Audio && (pt.html5 && pt.html5.canPlayType || (pt.hasHTML5 = !1)), pt.useHTML5Audio && pt.hasHTML5) {
                        X = !0;
                        for (e in i) i.hasOwnProperty(e) && i[e].required && (pt.html5.canPlayType(i[e].type) ? pt.preferFlash && (pt.flash[e] || pt.flash[i[e].type]) && (t = !0) : (X = !1, t = !0))
                    }
                    return pt.ignoreFlash && (t = !1, X = !0), pt.html5Only = pt.hasHTML5 && pt.useHTML5Audio && !t, !pt.html5Only
                }, Y = function(t) {
                    var e, i, s, n = 0;
                    if (t instanceof Array) {
                        for (e = 0, i = t.length; e < i; e++)
                            if (t[e] instanceof Object) {
                                if (pt.canPlayMIME(t[e].type)) {
                                    n = e;
                                    break
                                }
                            } else if (pt.canPlayURL(t[e])) {
                            n = e;
                            break
                        }
                        t[n].url && (t[n] = t[n].url), s = t[n]
                    } else s = t;
                    return s
                }, z = function(t) {
                    t._hasTimer || (t._hasTimer = !0, !Vt && pt.html5PollingInterval && (null === Mt && 0 === Ct && (Mt = setInterval(q, pt.html5PollingInterval)), Ct++))
                }, Z = function(t) {
                    t._hasTimer && (t._hasTimer = !1, !Vt && pt.html5PollingInterval && Ct--)
                }, q = function() {
                    var t;
                    if (null !== Mt && !Ct) return clearInterval(Mt), Mt = null, !1;
                    for (t = pt.soundIDs.length - 1; t >= 0; t--) pt.sounds[pt.soundIDs[t]].isHTML5 && pt.sounds[pt.soundIDs[t]]._hasTimer && pt.sounds[pt.soundIDs[t]]._onTimer()
                }, L = function(i) {
                    i = i !== e ? i : {}, "function" == typeof pt.onerror && pt.onerror.apply(t, [{
                        type: i.type !== e ? i.type : null
                    }]), i.fatal !== e && i.fatal && pt.disable()
                }, ot = function() {
                    if (!Bt || !at()) return !1;
                    var t, e, i = pt.audioFormats;
                    for (e in i)
                        if (i.hasOwnProperty(e) && ("mp3" === e || "mp4" === e) && (pt.html5[e] = !1, i[e] && i[e].related))
                            for (t = i[e].related.length - 1; t >= 0; t--) pt.html5[i[e].related[t]] = !1
                }, this._setSandboxType = function(t) {}, this._externalInterfaceOK = function(t) {
                    if (pt.swfLoaded) return !1;
                    pt.swfLoaded = !0, Ft = !1, Bt && ot(), setTimeout(p, jt ? 100 : 1)
                }, E = function(t, i) {
                    function s(t, e) {
                        return '<param name="' + t + '" value="' + e + '" />'
                    }
                    if (vt && yt) return !1;
                    if (pt.html5Only) return k(), pt.oMC = r(pt.movieID), p(), vt = !0, yt = !0, !1;
                    var n, a, o, l, d, c, u, h, f = i || pt.url,
                        m = pt.altURL || f,
                        g = A(),
                        v = V(),
                        y = null,
                        w = mt.getElementsByTagName("html")[0];
                    if (y = w && w.dir && w.dir.match(/rtl/i), t = t === e ? pt.id : t, k(), pt.url = D(Zt ? f : m), i = pt.url, pt.wmode = !pt.wmode && pt.useHighPerformance ? "transparent" : pt.wmode,
                        null !== pt.wmode && (ht.match(/msie 8/i) || !jt && !pt.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (Tt.push(P.spcWmode), pt.wmode = null), n = {
                            name: t,
                            id: t,
                            src: i,
                            quality: "high",
                            allowScriptAccess: pt.allowScriptAccess,
                            bgcolor: pt.bgColor,
                            pluginspage: qt + "www.macromedia.com/go/getflashplayer",
                            title: "JS/Flash audio component (SoundManager 2)",
                            type: "application/x-shockwave-flash",
                            wmode: pt.wmode,
                            hasPriority: "true"
                        }, pt.debugFlash && (n.FlashVars = "debug=1"), pt.wmode || delete n.wmode, jt) a = mt.createElement("div"), l = ['<object id="' + t + '" data="' + i + '" type="' + n.type + '" title="' + n.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', s("movie", i), s("AllowScriptAccess", pt.allowScriptAccess), s("quality", n.quality), pt.wmode ? s("wmode", pt.wmode) : "", s("bgcolor", pt.bgColor), s("hasPriority", "true"), pt.debugFlash ? s("FlashVars", n.FlashVars) : "", "</object>"].join("");
                    else {
                        a = mt.createElement("embed");
                        for (o in n) n.hasOwnProperty(o) && a.setAttribute(o, n[o])
                    }
                    if (I(), v = V(), g = A())
                        if (pt.oMC = r(pt.movieID) || mt.createElement("div"), pt.oMC.id) h = pt.oMC.className, pt.oMC.className = (h ? h + " " : B.swfDefault) + (v ? " " + v : ""), pt.oMC.appendChild(a), jt && (d = pt.oMC.appendChild(mt.createElement("div")), d.className = B.swfBox, d.innerHTML = l), yt = !0;
                        else {
                            if (pt.oMC.id = pt.movieID, pt.oMC.className = B.swfDefault + " " + v, c = null, d = null, pt.useFlashBlock || (pt.useHighPerformance ? c = {
                                    position: "fixed",
                                    width: "8px",
                                    height: "8px",
                                    bottom: "0px",
                                    left: "0px",
                                    overflow: "hidden"
                                } : (c = {
                                    position: "absolute",
                                    width: "6px",
                                    height: "6px",
                                    top: "-9999px",
                                    left: "-9999px"
                                }, y && (c.left = Math.abs(parseInt(c.left, 10)) + "px"))), Dt && (pt.oMC.style.zIndex = 1e4), !pt.debugFlash)
                                for (u in c) c.hasOwnProperty(u) && (pt.oMC.style[u] = c[u]);
                            try {
                                jt || pt.oMC.appendChild(a), g.appendChild(pt.oMC), jt && (d = pt.oMC.appendChild(mt.createElement("div")), d.className = B.swfBox, d.innerHTML = l), yt = !0
                            } catch (t) {
                                throw new Error(R("domError") + " \n" + t.toString())
                            }
                        }
                    return vt = !0, !0
                }, S = function() {
                    return pt.html5Only ? (E(), !1) : !ut && (!!pt.url && (ut = pt.getMovie(pt.id), ut || (kt ? (jt ? pt.oMC.innerHTML = xt : pt.oMC.appendChild(kt), kt = null, vt = !0) : E(pt.id, pt.url), ut = pt.getMovie(pt.id)), "function" == typeof pt.oninitmovie && setTimeout(pt.oninitmovie, 1), !0))
                }, w = function() {
                    setTimeout(b, 1e3)
                }, _ = function() {
                    t.setTimeout(function() {
                        pt.setup({
                            preferFlash: !1
                        }).reboot(), pt.didFlashBlock = !0, pt.beginDelayedInit()
                    }, 1)
                }, b = function() {
                    var e, i = !1;
                    return !!pt.url && (!Pt && (Pt = !0, it.remove(t, "load", w), !(nt && Ft && !Nt) && (wt || (e = pt.getMoviePercent()) > 0 && e < 100 && (i = !0), void setTimeout(function() {
                        if (e = pt.getMoviePercent(), i) return Pt = !1, t.setTimeout(w, 1), !1;
                        !wt && Ut && (null === e ? pt.useFlashBlock || 0 === pt.flashLoadTimeout ? pt.useFlashBlock && H() : !pt.useFlashBlock && X ? _() : v({
                            type: "ontimeout",
                            ignoreInit: !0,
                            error: {
                                type: "INIT_FLASHBLOCK"
                            }
                        }) : 0 === pt.flashLoadTimeout || (!pt.useFlashBlock && X ? _() : j(!0)))
                    }, pt.flashLoadTimeout))))
                }, x = function() {
                    function e() {
                        it.remove(t, "focus", x)
                    }
                    return Nt || !Ft ? (e(), !0) : (Ut = !0, Nt = !0, Pt = !1, w(), e(), !0)
                }, u = function(e) {
                    if (wt) return !1;
                    if (pt.html5Only) return wt = !0, y(), !0;
                    var i, s = pt.useFlashBlock && pt.flashLoadTimeout && !pt.getMoviePercent(),
                        n = !0;
                    return s || (wt = !0), i = {
                        type: !nt && At ? "NO_FLASH" : "INIT_TIMEOUT"
                    }, (bt || e) && (pt.useFlashBlock && pt.oMC && (pt.oMC.className = V() + " " + (null === pt.getMoviePercent() ? B.swfTimedout : B.swfError)), v({
                        type: "ontimeout",
                        error: i,
                        ignoreInit: !0
                    }), L(i), n = !1), bt || (pt.waitForWindowLoad && !_t ? it.add(t, "load", y) : y()), n
                }, d = function() {
                    var t, i = pt.setupOptions;
                    for (t in i) i.hasOwnProperty(t) && (pt[t] === e ? pt[t] = i[t] : pt[t] !== i[t] && (pt.setupOptions[t] = pt[t]))
                }, p = function() {
                    function e() {
                        it.remove(t, "load", pt.beginDelayedInit)
                    }
                    if (wt) return !1;
                    if (pt.html5Only) return wt || (e(), pt.enabled = !0, u()), !0;
                    S();
                    try {
                        ut._externalInterfaceTest(!1), O(!0, pt.flashPollingInterval || (pt.useHighPerformance ? 10 : 50)), pt.debugMode || ut._disableDebug(), pt.enabled = !0, pt.html5Only || it.add(t, "unload", l)
                    } catch (t) {
                        return L({
                            type: "JS_TO_FLASH_EXCEPTION",
                            fatal: !0
                        }), j(!0), u(), !1
                    }
                    return u(), e(), !0
                }, C = function() {
                    return !T && (T = !0, d(), I(), !nt && pt.hasHTML5 && pt.setup({
                        useHTML5Audio: !0,
                        preferFlash: !1
                    }), et(), !nt && At && (Tt.push(P.needFlash), pt.setup({
                        flashLoadTimeout: 1
                    })), mt.removeEventListener && mt.removeEventListener("DOMContentLoaded", C, !1), S(), !0)
                }, tt = function() {
                    return "complete" === mt.readyState && (C(), mt.detachEvent("onreadystatechange", tt)), !0
                }, M = function() {
                    _t = !0, C(), it.remove(t, "load", M)
                }, at(), it.add(t, "focus", x), it.add(t, "load", w), it.add(t, "load", M), mt.addEventListener ? mt.addEventListener("DOMContentLoaded", C, !1) : mt.attachEvent ? mt.attachEvent("onreadystatechange", tt) : L({
                    type: "NO_DOM2_EVENTS",
                    fatal: !0
                })
            }
            if (!t || !t.document) throw new Error("SoundManager requires a browser with window and document objects.");
            var s = null;
            t.SM2_DEFER !== e && SM2_DEFER || (s = new i), "object" == typeof module && module && "object" == typeof module.exports ? (module.exports.SoundManager = i, module.exports.soundManager = s) : "function" == typeof c && c.amd && c("soundmanager2", [], function() {
                function e(e) {
                    if (!t.soundManager && e instanceof Function) {
                        var s = e(i);
                        s instanceof i && (t.soundManager = s)
                    }
                    return t.soundManager
                }
                return {
                    constructor: i,
                    getInstance: e
                }
            }), t.SoundManager = i, t.soundManager = s
        }(window), c("entities/track-model", ["spp-app"], function(t) {
            return t.module("Entities", function(t, e, i, s, n, a) {
                t.Track = i.Model.extend({
                    initialize: function() {
                        this.on("change:isPlaying", function() {
                            e.trigger("changeEpisodePlaying", this.Layout, this)
                        }), this.on("change:speed", function() {
                            e.trigger("changeSpeed", this.Layout, this)
                        })
                    },
                    setLayout: function(t) {
                        this.Layout = t
                    }
                })
            }), t.Entities
        }), c("text", ["module"], function(t) {
            "use strict";
            var e, i, s, n, a, o = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
                r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
                l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
                d = "undefined" != typeof location && location.href,
                c = d && location.protocol && location.protocol.replace(/\:/, ""),
                u = d && location.hostname,
                h = d && (location.port || void 0),
                f = {},
                m = t.config && t.config() || {};
            return e = {
                version: "2.0.10",
                strip: function(t) {
                    if (t) {
                        t = t.replace(r, "");
                        var e = t.match(l);
                        e && (t = e[1])
                    } else t = "";
                    return t
                },
                jsEscape: function(t) {
                    return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
                },
                createXhr: m.createXhr || function() {
                    var t, e, i;
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
                    if ("undefined" != typeof ActiveXObject)
                        for (e = 0; e < 3; e += 1) {
                            i = o[e];
                            try {
                                t = new ActiveXObject(i)
                            } catch (t) {}
                            if (t) {
                                o = [i];
                                break
                            }
                        }
                    return t
                },
                parseName: function(t) {
                    var e, i, s, n = !1,
                        a = t.indexOf("."),
                        o = 0 === t.indexOf("./") || 0 === t.indexOf("../");
                    return -1 !== a && (!o || a > 1) ? (e = t.substring(0, a), i = t.substring(a + 1, t.length)) : e = t, s = i || e, a = s.indexOf("!"), -1 !== a && (n = "strip" === s.substring(a + 1), s = s.substring(0, a), i ? i = s : e = s), {
                        moduleName: e,
                        ext: i,
                        strip: n
                    }
                },
                xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
                useXhr: function(t, i, s, n) {
                    var a, o, r, l = e.xdRegExp.exec(t);
                    return !l || (a = l[2], o = l[3], o = o.split(":"), r = o[1], o = o[0], !(a && a !== i || o && o.toLowerCase() !== s.toLowerCase() || (r || o) && r !== n))
                },
                finishLoad: function(t, i, s, n) {
                    s = i ? e.strip(s) : s, m.isBuild && (f[t] = s), n(s)
                },
                load: function(t, i, s, n) {
                    if (n.isBuild && !n.inlineText) return void s();
                    m.isBuild = n.isBuild;
                    var a = e.parseName(t),
                        o = a.moduleName + (a.ext ? "." + a.ext : ""),
                        r = i.toUrl(o),
                        l = m.useXhr || e.useXhr;
                    if (0 === r.indexOf("empty:")) return void s();
                    !d || l(r, c, u, h) ? e.get(r, function(i) {
                        e.finishLoad(t, a.strip, i, s)
                    }, function(t) {
                        s.error && s.error(t)
                    }) : i([o], function(t) {
                        e.finishLoad(a.moduleName + "." + a.ext, a.strip, t, s)
                    })
                },
                write: function(t, i, s, n) {
                    if (f.hasOwnProperty(i)) {
                        var a = e.jsEscape(f[i]);
                        s.asModule(t + "!" + i, "define(function () { return '" + a + "';});\n")
                    }
                },
                writeFile: function(t, i, s, n, a) {
                    var o = e.parseName(i),
                        r = o.ext ? "." + o.ext : "",
                        l = o.moduleName + r,
                        d = s.toUrl(o.moduleName + r) + ".js";
                    e.load(l, s, function(i) {
                        var s = function(t) {
                            return n(d, t)
                        };
                        s.asModule = function(t, e) {
                            return n.asModule(t, d, e)
                        }, e.write(t, l, s, a)
                    }, a)
                }
            }, "node" === m.env || !m.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (i = p.nodeRequire("fs"), e.get = function(t, e, s) {
                try {
                    var n = i.readFileSync(t, "utf8");
                    0 === n.indexOf("\ufeff") && (n = n.substring(1)), e(n)
                } catch (t) {
                    s(t)
                }
            }) : "xhr" === m.env || !m.env && e.createXhr() ? e.get = function(t, i, s, n) {
                var a, o = e.createXhr();
                if (o.open("GET", t, !0), n)
                    for (a in n) n.hasOwnProperty(a) && o.setRequestHeader(a.toLowerCase(), n[a]);
                m.onXhr && m.onXhr(o, t), o.onreadystatechange = function(e) {
                    var n, a;
                    4 === o.readyState && (n = o.status, n > 399 && n < 600 ? (a = new Error(t + " HTTP status: " + n), a.xhr = o, s(a)) : i(o.responseText), m.onXhrComplete && m.onXhrComplete(o, t))
                }, o.send(null)
            } : "rhino" === m.env || !m.env && "undefined" != typeof Packages && "undefined" != typeof java ? e.get = function(t, e) {
                var i, s, n = new java.io.File(t),
                    a = java.lang.System.getProperty("line.separator"),
                    o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(n), "utf-8")),
                    r = "";
                try {
                    for (i = new java.lang.StringBuffer, s = o.readLine(), s && s.length() && 65279 === s.charAt(0) && (s = s.substring(1)), null !== s && i.append(s); null !== (s = o.readLine());) i.append(a), i.append(s);
                    r = String(i.toString())
                } finally {
                    o.close()
                }
                e(r)
            } : ("xpconnect" === m.env || !m.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (s = Components.classes, n = Components.interfaces, Components.utils.import("resource://gre/modules/FileUtils.jsm"), a = "@mozilla.org/windows-registry-key;1" in s, e.get = function(t, e) {
                var i, o, r, l = {};
                a && (t = t.replace(/\//g, "\\")), r = new FileUtils.File(t);
                try {
                    i = s["@mozilla.org/network/file-input-stream;1"].createInstance(n.nsIFileInputStream), i.init(r, 1, 0, !1), o = s["@mozilla.org/intl/converter-input-stream;1"].createInstance(n.nsIConverterInputStream), o.init(i, "utf-8", i.available(), n.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), o.readString(i.available(), l), o.close(), i.close(), e(l.value)
                } catch (t) {
                    throw new Error((r && r.path || "") + ": " + t)
                }
            }), e
        }), c("text!templates/main-template.html", [], function() {
            return '<% if ( data.show_logo != undefined && data.show_logo != null ) { %>\r\n\t<div class="spp-stpd-show-logo">\r\n\t\t<img src="<%= data.show_logo %>" alt="<%= data.show_name %>" />\r\n\t</div>\r\n<% } %>\r\n\r\n<div class="spp-stpm-main-image"></div>\r\n\r\n<div class="spp-top-matter">\r\n\t<div class="spp-stpd-main-image-container">\r\n\t\t<div class="spp-stpd-main-image"></div>\r\n\t</div>\r\n\t<div class="spp-show-logo">\r\n\t\t<% if ( data.show_logo != undefined && data.show_logo != null && data.show_logo != "" ) { %>\r\n\t\t\t<img src="<%= data.show_logo %>" alt="<%= data.show_name %>" />\r\n\t\t<% } %>\r\n\t</div>\r\n\t<div class="spp-artist-and-title">\r\n\t\t<p class="spp-show-title"><%= artist %><span class="spp-show-count"></span></p>\r\n\t\t<p class="spp-track-title"><%= data.title %></p>\r\n\t\t<% if ( true ) { %>\r\n\t\t\t<div class="spp-stpd-artist"><div class="spp-artist-box">\r\n\t\t\t\t<span class="spp-artist-first-container">\r\n\t\t\t\t\t<span><%= artist || data.show_name %></span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class="spp-artist-second-container">\r\n\t\t\t\t\t<span><%= artist || data.show_name %></span>\r\n\t\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div></div>\r\n\t\t<% } %>\r\n\t\t<div class="spp-stpd-track-title"><div class="spp-track-title-box">\r\n\t\t\t<span class="spp-track-title-first-container">\r\n\t\t\t\t<span><%= data.title %></span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t</span>\r\n\t\t\t<span class="spp-track-title-second-container">\r\n\t\t\t\t<span><%= data.title %></span>\r\n\t\t\t\t<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t</span>\r\n\t\t</div></div>\r\n\t\t<% if ( (data.email_button_function == "email" &&  data.shortcode_options.email_portal !== "none")\r\n\t\t\t|| (data.email_button_function == "link" && data.shortcode_options.email_link !== "")\r\n\t\t\t|| (data.email_button_function == "javascript" && data.shortcode_options.email_js_function !== "")) { %>\r\n\t\t\t<button class="spp-news"><%= data.shortcode_options.email_outer_button_text.toLocaleString() %></button>\r\n\t\t<% } %>\r\n\t</div>\r\n\t<div class="spp-stpd-controls-container">\r\n\t\t<div class="spp-stpd-playback-controls">\r\n\t\t\t<div class="spp-play-pause">\r\n\t\t\t\t<div class="spp-control spp-play" aria-label="Play" tabindex="0">\r\n\t\t\t\t\t<div class="spp-play-bar spp-play-bar-left"></div>\r\n\t\t\t\t\t<div class="spp-play-bar spp-play-bar-right"></div>\r\n\t\t\t\t\t<div class="spp-play-mask spp-play-mask-top"></div>\r\n\t\t\t\t\t<div class="spp-play-mask spp-play-mask-bottom"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="spp-playback-controls-2">\r\n\t\t\t\t<% if ( true ) { %>\r\n\t\t\t\t\t<% if ( true ) { %>\r\n\t\t\t\t\t\t<div class="spp-speed">\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-050" tabindex="0" aria-labelledby="spp-svg-title-half-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-half-speed">Speed: 50%</title>\n  <path id="_0.5" data-name="0.5" d="M64,224A32,32,0,1,1,8.42,202.42l4.243,4.243A25.988,25.988,0,1,0,34,198.1V208H28V192h6v0.1A31.974,31.974,0,0,1,64,224Zm-36.237.574a8.6,8.6,0,0,0-1.21-4.971,4.248,4.248,0,0,0-3.673-1.61,4.208,4.208,0,0,0-3.694,1.669,8.91,8.91,0,0,0-1.178,5.1v2.643a8.648,8.648,0,0,0,1.231,4.939A4.208,4.208,0,0,0,22.9,234a4.178,4.178,0,0,0,3.683-1.691,9.111,9.111,0,0,0,1.178-5.168v-2.568Zm-1.964,3.1a7.152,7.152,0,0,1-.738,3.574,2.369,2.369,0,0,1-2.16,1.134,2.4,2.4,0,0,1-2.2-1.2,7.416,7.416,0,0,1-.727-3.729v-3.167a7.132,7.132,0,0,1,.711-3.521,2.374,2.374,0,0,1,2.2-1.144,2.406,2.406,0,0,1,2.219,1.15,7.3,7.3,0,0,1,.7,3.665v3.242Zm4.1,5.9a1.168,1.168,0,0,0,.907.332,1.2,1.2,0,0,0,.918-0.332,1.155,1.155,0,0,0,.313-0.824,1.22,1.22,0,0,0-.313-0.856,1.183,1.183,0,0,0-.918-0.343,1.149,1.149,0,0,0-.907.343,1.244,1.244,0,0,0-.3.856A1.177,1.177,0,0,0,29.9,233.573Zm6.52-7.191,0.52-.428a3.219,3.219,0,0,1,2.017-.567,2.86,2.86,0,0,1,2.245.947,3.631,3.631,0,0,1,.844,2.509,3.955,3.955,0,0,1-.78,2.6,2.64,2.64,0,0,1-2.149.942,2.922,2.922,0,0,1-2.017-.679,3.155,3.155,0,0,1-.945-2.017H34.3a4.583,4.583,0,0,0,1.476,3.167A4.862,4.862,0,0,0,39.117,234a4.68,4.68,0,0,0,3.6-1.386,5.349,5.349,0,0,0,1.29-3.793,5.543,5.543,0,0,0-1.242-3.8,4.248,4.248,0,0,0-3.354-1.407,4.951,4.951,0,0,0-2.579.674l0.467-4.248h6.252v-1.83H35.635l-0.785,7.769Z" transform="translate(0 -192)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-075" tabindex="0" aria-labelledby="spp-svg-title-three-quarter-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-three-quarter-speed">Speed: 75%</title>\n  <path id="_.75" data-name=".75" d="M64,304A32,32,0,1,1,8.42,282.42l4.243,4.243A25.988,25.988,0,1,0,34,278.1V288H28V272h6v0.1A31.974,31.974,0,0,1,64,304Zm-44.689,9.567a1.172,1.172,0,0,0,.914.336,1.208,1.208,0,0,0,.925-0.336,1.175,1.175,0,0,0,.315-0.835,1.241,1.241,0,0,0-.315-0.868,1.184,1.184,0,0,0-.925-0.347,1.15,1.15,0,0,0-.914.347,1.267,1.267,0,0,0-.3.868A1.2,1.2,0,0,0,19.312,313.567Zm13.577-15.578H22.371v1.649h8.423L24.37,313.784h2.074l6.445-14.667v-1.128Zm3.457,8.288,0.524-.434a3.227,3.227,0,0,1,2.031-.575,2.87,2.87,0,0,1,2.261.96,3.7,3.7,0,0,1,.85,2.544,4.031,4.031,0,0,1-.786,2.636,2.65,2.65,0,0,1-2.164.955,2.932,2.932,0,0,1-2.031-.689,3.206,3.206,0,0,1-.951-2.045h-1.87a4.66,4.66,0,0,0,1.486,3.211A4.873,4.873,0,0,0,39.06,314a4.7,4.7,0,0,0,3.629-1.4,5.444,5.444,0,0,0,1.3-3.846,5.643,5.643,0,0,0-1.251-3.856,4.264,4.264,0,0,0-3.378-1.427,4.962,4.962,0,0,0-2.6.684l0.47-4.307h6.3v-1.855H35.554l-0.791,7.876Z" transform="translate(0 -272)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-100" tabindex="0" aria-labelledby="spp-svg-title-normal-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-normal-speed">Speed: Normal</title>\n  <path id="_1X" data-name="1X" d="M144,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,114,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,144,224Zm-37.93-5.992h-0.314l-5.751,2.176v1.837l4.047-1.5v13.482h2.018v-16Zm5.772,0.076H109.4l5,7.9-5.121,8.026h2.463l3.906-6.211,3.884,6.211h2.474l-5.11-8.026,4.991-7.9h-2.452l-3.787,6.1Z" transform="translate(-80 -192)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-125" tabindex="0" aria-labelledby="spp-svg-title-125-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-125-speed">Speed: 125%</title>\n  <path id="_1.25" data-name="1.25" d="M144,304a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,114,278.1V288h-6V272h6v0.1A31.974,31.974,0,0,1,144,304Zm-44.913-5.868H98.772l-5.766,2.13v1.8l4.058-1.466v13.194h2.024V298.132Zm4.427,15.441a1.216,1.216,0,0,0,.931.332,1.252,1.252,0,0,0,.941-0.332,1.138,1.138,0,0,0,.321-0.824,1.2,1.2,0,0,0-.321-0.856,1.23,1.23,0,0,0-.941-0.343,1.2,1.2,0,0,0-.931.343,1.229,1.229,0,0,0-.31.856A1.164,1.164,0,0,0,103.514,313.573Zm14.971-1.4h-7.953l4.243-4.526q2.98-3.178,2.981-5.479a3.855,3.855,0,0,0-1.284-3.033,5.071,5.071,0,0,0-3.492-1.14,5.273,5.273,0,0,0-3.77,1.327A4.555,4.555,0,0,0,107.8,302.8h2.013a3.176,3.176,0,0,1,.832-2.338,3.139,3.139,0,0,1,2.334-.84,2.648,2.648,0,0,1,2,.781,2.768,2.768,0,0,1,.75,2,3.642,3.642,0,0,1-.462,1.76,12.855,12.855,0,0,1-1.681,2.209l-5.484,5.993v1.423h10.38v-1.616Zm3.729-5.789,0.533-.428a3.362,3.362,0,0,1,2.068-.567,2.968,2.968,0,0,1,2.3.947,3.579,3.579,0,0,1,.865,2.509,3.891,3.891,0,0,1-.8,2.6,2.735,2.735,0,0,1-2.2.942,3.041,3.041,0,0,1-2.067-.679,3.126,3.126,0,0,1-.969-2.017h-1.9a4.543,4.543,0,0,0,1.513,3.167A5.061,5.061,0,0,0,124.978,314a4.863,4.863,0,0,0,3.694-1.386,5.27,5.27,0,0,0,1.322-3.793,5.46,5.46,0,0,0-1.273-3.8,4.407,4.407,0,0,0-3.438-1.407,5.172,5.172,0,0,0-2.644.674l0.478-4.248h6.409v-1.83h-8.117l-0.805,7.769Z" transform="translate(-80 -272)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-150" tabindex="0" aria-labelledby="spp-svg-title-150-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-150-speed">Speed: 150%</title>\n  <path id="_1.5" data-name="1.5" d="M224,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,194,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,224,224Zm-38.906-5.992h-0.316l-5.773,2.146v1.812l4.063-1.478v13.3h2.026V218.008Zm4.432,15.561a1.21,1.21,0,0,0,.931.335,1.246,1.246,0,0,0,.942-0.335,1.15,1.15,0,0,0,.322-0.83,1.151,1.151,0,0,0-1.264-1.208,1.189,1.189,0,0,0-.931.345,1.245,1.245,0,0,0-.311.863A1.171,1.171,0,0,0,189.526,233.569Zm6.69-7.247,0.534-.431a3.344,3.344,0,0,1,2.069-.572,2.962,2.962,0,0,1,2.3.955,3.62,3.62,0,0,1,.866,2.529,3.937,3.937,0,0,1-.8,2.62,2.731,2.731,0,0,1-2.206.949,3.036,3.036,0,0,1-2.069-.684,3.154,3.154,0,0,1-.969-2.033h-1.907a4.588,4.588,0,0,0,1.514,3.192A5.047,5.047,0,0,0,198.982,234a4.85,4.85,0,0,0,3.7-1.4A5.333,5.333,0,0,0,204,228.781a5.524,5.524,0,0,0-1.275-3.834,4.4,4.4,0,0,0-3.442-1.418,5.156,5.156,0,0,0-2.646.68l0.479-4.282h6.415v-1.844H195.41l-0.806,7.83Z" transform="translate(-160 -192)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-175" tabindex="0" aria-labelledby="spp-svg-title-175-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-175-speed">Speed: 175%</title>\n  <path id="_1.75" data-name="1.75" d="M224,304a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,194,278.1V288h-6V272h6v0.1A31.974,31.974,0,0,1,224,304Zm-44.022-5.992h-0.31l-5.663,2.146v1.812l3.985-1.478v13.3h1.988V298.008Zm4.348,15.561a1.173,1.173,0,0,0,.913.335,1.213,1.213,0,0,0,.925-0.335,1.161,1.161,0,0,0,.315-0.83,1.234,1.234,0,0,0-.315-0.863,1.192,1.192,0,0,0-.925-0.345,1.154,1.154,0,0,0-.913.345,1.259,1.259,0,0,0-.305.863A1.184,1.184,0,0,0,184.326,313.569ZM197.9,298.083H187.384v1.639h8.42l-6.422,14.063h2.073l6.443-14.58v-1.122Zm3.456,8.239,0.523-.431a3.238,3.238,0,0,1,2.03-.572,2.878,2.878,0,0,1,2.26.955,3.663,3.663,0,0,1,.85,2.529,3.988,3.988,0,0,1-.786,2.62,2.655,2.655,0,0,1-2.164.949,2.943,2.943,0,0,1-2.03-.684,3.18,3.18,0,0,1-.951-2.033h-1.869a4.621,4.621,0,0,0,1.485,3.192A4.89,4.89,0,0,0,204.067,314a4.709,4.709,0,0,0,3.628-1.4,5.4,5.4,0,0,0,1.3-3.823,5.59,5.59,0,0,0-1.25-3.834,4.274,4.274,0,0,0-3.376-1.418,4.985,4.985,0,0,0-2.6.68l0.47-4.282h6.294v-1.844h-7.971l-0.791,7.83Z" transform="translate(-160 -272)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-200" tabindex="0" aria-labelledby="spp-svg-title-double-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-double-speed">Speed: Double</title>\n  <path id="_2X" data-name="2X" d="M304,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,274,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,304,224Zm-32.867,8.008H263.28l4.19-4.544q2.943-3.191,2.943-5.5a3.9,3.9,0,0,0-1.267-3.046,4.96,4.96,0,0,0-3.449-1.144,5.158,5.158,0,0,0-3.722,1.332,4.615,4.615,0,0,0-1.391,3.492h1.987a3.223,3.223,0,0,1,.822-2.348,3.07,3.07,0,0,1,2.3-.843,2.594,2.594,0,0,1,1.977.784,2.808,2.808,0,0,1,.741,2.009,3.7,3.7,0,0,1-.456,1.767,12.9,12.9,0,0,1-1.66,2.218l-5.414,6.016v1.429h10.248v-1.622Zm3.887-14.019H272.6l4.952,7.756-5.07,7.885h2.438l3.868-6.1,3.845,6.1h2.449l-5.059-7.885,4.941-7.756H282.54l-3.749,5.994Z" transform="translate(-240 -192)"/>\n</svg>\n\r\n\t\t\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-300" tabindex="0" aria-labelledby="spp-svg-title-triple-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-triple-speed">Speed: Triple</title>\n  <path id="_3X" data-name="3X" d="M384,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,354,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,384,224Zm-39.87,2.65H345.6a3.56,3.56,0,0,1,2.378.749,2.633,2.633,0,0,1,.825,2.086,2.622,2.622,0,0,1-2.918,2.9,2.991,2.991,0,0,1-2.124-.738,2.561,2.561,0,0,1-.793-1.969H341a3.963,3.963,0,0,0,1.358,3.135A5.161,5.161,0,0,0,345.884,234a5.026,5.026,0,0,0,3.52-1.231,4.274,4.274,0,0,0,1.353-3.328,3.6,3.6,0,0,0-2.653-3.648,3.93,3.93,0,0,0,1.77-1.423,3.447,3.447,0,0,0,.651-1.969,4.245,4.245,0,0,0-1.237-3.243,4.781,4.781,0,0,0-3.414-1.166,4.838,4.838,0,0,0-3.4,1.225,4,4,0,0,0-1.338,3.077h1.956a2.58,2.58,0,0,1,.756-1.942,2.78,2.78,0,0,1,2.024-.733,2.4,2.4,0,0,1,2.695,2.739,2.481,2.481,0,0,1-.793,1.937,3.2,3.2,0,0,1-2.177.738H344.13v1.616Zm9.965-8.443h-2.378l4.873,7.726-4.989,7.854H354l3.805-6.078,3.784,6.078H364l-4.978-7.854,4.862-7.726h-2.389l-3.689,5.971Z" transform="translate(-320 -192)"/>\n</svg>\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<% } %>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<div class="spp-step-back">\r\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-back-15" role="img" viewBox="0 0 76.344 44">\n  <title id="spp-svg-title-back-15">Back 15 seconds</title>\n  <path id="RW_15" d="M36.645,62.008H36.318L31,64.289v1.927l3.566-1.571V78.784h2.074V62.008Zm7.418,8.841,0.548-.539a2.444,2.444,0,0,1,1.643-.528,2.284,2.284,0,0,1,1.963,1.032,4.533,4.533,0,0,1,.728,2.672,4.978,4.978,0,0,1-.676,2.769,2.129,2.129,0,0,1-1.876,1.026,2.208,2.208,0,0,1-1.719-.728,3.854,3.854,0,0,1-.833-2.161H41.907a5.286,5.286,0,0,0,1.375,3.394,4.573,4.573,0,0,0,6.485-.252A6.182,6.182,0,0,0,51,73.463a6.653,6.653,0,0,0-1.13-4.071,3.669,3.669,0,0,0-3.111-1.514,3.908,3.908,0,0,0-2.261.722l0.4-4.552h5.64V62.088H43.153l-0.734,8.325ZM75,73A33,33,0,0,0,9,73h4.67l-6,8-6-8H6a36,36,0,0,1,72,0H75Z" transform="translate(-1.656 -37)"/>\n</svg>\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="spp-step-forward">\r\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-forward-60" role="img" viewBox="0 0 76.344 44">\n  <title id="spp-svg-title-forward-60">Forward 60 seconds</title>\n  <path id="FF-60" d="M185.75,62.229a6.816,6.816,0,0,0-3.714,1.017,6,6,0,0,0-2.261,3.006,15.677,15.677,0,0,0-.768,5.432V72.49a7.977,7.977,0,0,0,1.276,4.739,3.949,3.949,0,0,0,3.365,1.784,4.057,4.057,0,0,0,3.313-1.511,6.32,6.32,0,0,0,1.234-4.114,6.47,6.47,0,0,0-1.116-3.949,3.561,3.561,0,0,0-3.017-1.506,3.631,3.631,0,0,0-2.929,1.386,6.42,6.42,0,0,1,1.358-3.949,4.31,4.31,0,0,1,3.271-1.358H186.1V62.229H185.75Zm-0.271,8.517a5.133,5.133,0,0,1,.661,2.744,5.06,5.06,0,0,1-.661,2.744,2.063,2.063,0,0,1-1.831,1.04,2.121,2.121,0,0,1-1.812-1.267,6.448,6.448,0,0,1-.739-3.278V71.9a3.519,3.519,0,0,1,1.04-1.591,2.347,2.347,0,0,1,1.57-.625A2.01,2.01,0,0,1,185.479,70.746Zm15.53-1.915a9.746,9.746,0,0,0-1.175-5.125,4.313,4.313,0,0,0-6.92.091,10.389,10.389,0,0,0-1.116,5.409v2.841a9.939,9.939,0,0,0,1.18,5.227A4.261,4.261,0,0,0,199.9,77.2a10.684,10.684,0,0,0,1.11-5.472v-2.9Zm-2.09,3.443a9.267,9.267,0,0,1-.626,3.784,1.977,1.977,0,0,1-1.878,1.239,2.027,2.027,0,0,1-1.913-1.312,9.5,9.5,0,0,1-.626-3.926V68.649a8.876,8.876,0,0,1,.626-3.687,1.984,1.984,0,0,1,1.889-1.222,2.008,2.008,0,0,1,1.925,1.244,9.341,9.341,0,0,1,.6,3.869v3.42ZM157,73a33,33,0,0,1,66,0h-4.67l6,8,6-8H226a36,36,0,0,0-72,0h3Z" transform="translate(-154 -37)"/>\n</svg>\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\t<% if ( (data.email_button_function == "email" &&  data.shortcode_options.email_portal !== "none")\r\n\t\t\t|| (data.email_button_function == "link" && data.shortcode_options.email_link !== "")\r\n\t\t\t|| (data.email_button_function == "javascript" && data.shortcode_options.email_js_function !== "")) { %>\r\n\t\t<button class="spp-news spp-sticky-news"><%= data.shortcode_options.email_outer_button_text.toLocaleString() %></button>\r\n\t<% } %>\r\n</div>\r\n\r\n<div class="spp-main-separator"></div>\r\n\r\n<div class="spp-truncated-show-notes">\r\n\t<%= data.truncated_show_notes_140 %>\r\n\t<span class="spp-control spp-more-show-notes" tabindex="0"><u><%="more".toLocaleString()%></u></span>\r\n</div>\r\n\r\n<% if ( data.shortcode_options.show_tags !== "false" ) { %>\r\n\t<ul class="spp-tag-list"></ul>\r\n<% } %>\r\n\r\n<div class="spp-controls">\r\n\t<div class="spp-speed">\r\n\t<% if ( true ) { %>\r\n\t\t<% if ( true ) { %>\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-050" tabindex="0" aria-labelledby="spp-svg-title-half-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-half-speed">Speed: 50%</title>\n  <path id="_0.5" data-name="0.5" d="M64,224A32,32,0,1,1,8.42,202.42l4.243,4.243A25.988,25.988,0,1,0,34,198.1V208H28V192h6v0.1A31.974,31.974,0,0,1,64,224Zm-36.237.574a8.6,8.6,0,0,0-1.21-4.971,4.248,4.248,0,0,0-3.673-1.61,4.208,4.208,0,0,0-3.694,1.669,8.91,8.91,0,0,0-1.178,5.1v2.643a8.648,8.648,0,0,0,1.231,4.939A4.208,4.208,0,0,0,22.9,234a4.178,4.178,0,0,0,3.683-1.691,9.111,9.111,0,0,0,1.178-5.168v-2.568Zm-1.964,3.1a7.152,7.152,0,0,1-.738,3.574,2.369,2.369,0,0,1-2.16,1.134,2.4,2.4,0,0,1-2.2-1.2,7.416,7.416,0,0,1-.727-3.729v-3.167a7.132,7.132,0,0,1,.711-3.521,2.374,2.374,0,0,1,2.2-1.144,2.406,2.406,0,0,1,2.219,1.15,7.3,7.3,0,0,1,.7,3.665v3.242Zm4.1,5.9a1.168,1.168,0,0,0,.907.332,1.2,1.2,0,0,0,.918-0.332,1.155,1.155,0,0,0,.313-0.824,1.22,1.22,0,0,0-.313-0.856,1.183,1.183,0,0,0-.918-0.343,1.149,1.149,0,0,0-.907.343,1.244,1.244,0,0,0-.3.856A1.177,1.177,0,0,0,29.9,233.573Zm6.52-7.191,0.52-.428a3.219,3.219,0,0,1,2.017-.567,2.86,2.86,0,0,1,2.245.947,3.631,3.631,0,0,1,.844,2.509,3.955,3.955,0,0,1-.78,2.6,2.64,2.64,0,0,1-2.149.942,2.922,2.922,0,0,1-2.017-.679,3.155,3.155,0,0,1-.945-2.017H34.3a4.583,4.583,0,0,0,1.476,3.167A4.862,4.862,0,0,0,39.117,234a4.68,4.68,0,0,0,3.6-1.386,5.349,5.349,0,0,0,1.29-3.793,5.543,5.543,0,0,0-1.242-3.8,4.248,4.248,0,0,0-3.354-1.407,4.951,4.951,0,0,0-2.579.674l0.467-4.248h6.252v-1.83H35.635l-0.785,7.769Z" transform="translate(0 -192)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-075" tabindex="0" aria-labelledby="spp-svg-title-three-quarter-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-three-quarter-speed">Speed: 75%</title>\n  <path id="_.75" data-name=".75" d="M64,304A32,32,0,1,1,8.42,282.42l4.243,4.243A25.988,25.988,0,1,0,34,278.1V288H28V272h6v0.1A31.974,31.974,0,0,1,64,304Zm-44.689,9.567a1.172,1.172,0,0,0,.914.336,1.208,1.208,0,0,0,.925-0.336,1.175,1.175,0,0,0,.315-0.835,1.241,1.241,0,0,0-.315-0.868,1.184,1.184,0,0,0-.925-0.347,1.15,1.15,0,0,0-.914.347,1.267,1.267,0,0,0-.3.868A1.2,1.2,0,0,0,19.312,313.567Zm13.577-15.578H22.371v1.649h8.423L24.37,313.784h2.074l6.445-14.667v-1.128Zm3.457,8.288,0.524-.434a3.227,3.227,0,0,1,2.031-.575,2.87,2.87,0,0,1,2.261.96,3.7,3.7,0,0,1,.85,2.544,4.031,4.031,0,0,1-.786,2.636,2.65,2.65,0,0,1-2.164.955,2.932,2.932,0,0,1-2.031-.689,3.206,3.206,0,0,1-.951-2.045h-1.87a4.66,4.66,0,0,0,1.486,3.211A4.873,4.873,0,0,0,39.06,314a4.7,4.7,0,0,0,3.629-1.4,5.444,5.444,0,0,0,1.3-3.846,5.643,5.643,0,0,0-1.251-3.856,4.264,4.264,0,0,0-3.378-1.427,4.962,4.962,0,0,0-2.6.684l0.47-4.307h6.3v-1.855H35.554l-0.791,7.876Z" transform="translate(0 -272)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-100" tabindex="0" aria-labelledby="spp-svg-title-normal-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-normal-speed">Speed: Normal</title>\n  <path id="_1X" data-name="1X" d="M144,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,114,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,144,224Zm-37.93-5.992h-0.314l-5.751,2.176v1.837l4.047-1.5v13.482h2.018v-16Zm5.772,0.076H109.4l5,7.9-5.121,8.026h2.463l3.906-6.211,3.884,6.211h2.474l-5.11-8.026,4.991-7.9h-2.452l-3.787,6.1Z" transform="translate(-80 -192)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-125" tabindex="0" aria-labelledby="spp-svg-title-125-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-125-speed">Speed: 125%</title>\n  <path id="_1.25" data-name="1.25" d="M144,304a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,114,278.1V288h-6V272h6v0.1A31.974,31.974,0,0,1,144,304Zm-44.913-5.868H98.772l-5.766,2.13v1.8l4.058-1.466v13.194h2.024V298.132Zm4.427,15.441a1.216,1.216,0,0,0,.931.332,1.252,1.252,0,0,0,.941-0.332,1.138,1.138,0,0,0,.321-0.824,1.2,1.2,0,0,0-.321-0.856,1.23,1.23,0,0,0-.941-0.343,1.2,1.2,0,0,0-.931.343,1.229,1.229,0,0,0-.31.856A1.164,1.164,0,0,0,103.514,313.573Zm14.971-1.4h-7.953l4.243-4.526q2.98-3.178,2.981-5.479a3.855,3.855,0,0,0-1.284-3.033,5.071,5.071,0,0,0-3.492-1.14,5.273,5.273,0,0,0-3.77,1.327A4.555,4.555,0,0,0,107.8,302.8h2.013a3.176,3.176,0,0,1,.832-2.338,3.139,3.139,0,0,1,2.334-.84,2.648,2.648,0,0,1,2,.781,2.768,2.768,0,0,1,.75,2,3.642,3.642,0,0,1-.462,1.76,12.855,12.855,0,0,1-1.681,2.209l-5.484,5.993v1.423h10.38v-1.616Zm3.729-5.789,0.533-.428a3.362,3.362,0,0,1,2.068-.567,2.968,2.968,0,0,1,2.3.947,3.579,3.579,0,0,1,.865,2.509,3.891,3.891,0,0,1-.8,2.6,2.735,2.735,0,0,1-2.2.942,3.041,3.041,0,0,1-2.067-.679,3.126,3.126,0,0,1-.969-2.017h-1.9a4.543,4.543,0,0,0,1.513,3.167A5.061,5.061,0,0,0,124.978,314a4.863,4.863,0,0,0,3.694-1.386,5.27,5.27,0,0,0,1.322-3.793,5.46,5.46,0,0,0-1.273-3.8,4.407,4.407,0,0,0-3.438-1.407,5.172,5.172,0,0,0-2.644.674l0.478-4.248h6.409v-1.83h-8.117l-0.805,7.769Z" transform="translate(-80 -272)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-150" tabindex="0" aria-labelledby="spp-svg-title-150-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-150-speed">Speed: 150%</title>\n  <path id="_1.5" data-name="1.5" d="M224,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,194,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,224,224Zm-38.906-5.992h-0.316l-5.773,2.146v1.812l4.063-1.478v13.3h2.026V218.008Zm4.432,15.561a1.21,1.21,0,0,0,.931.335,1.246,1.246,0,0,0,.942-0.335,1.15,1.15,0,0,0,.322-0.83,1.151,1.151,0,0,0-1.264-1.208,1.189,1.189,0,0,0-.931.345,1.245,1.245,0,0,0-.311.863A1.171,1.171,0,0,0,189.526,233.569Zm6.69-7.247,0.534-.431a3.344,3.344,0,0,1,2.069-.572,2.962,2.962,0,0,1,2.3.955,3.62,3.62,0,0,1,.866,2.529,3.937,3.937,0,0,1-.8,2.62,2.731,2.731,0,0,1-2.206.949,3.036,3.036,0,0,1-2.069-.684,3.154,3.154,0,0,1-.969-2.033h-1.907a4.588,4.588,0,0,0,1.514,3.192A5.047,5.047,0,0,0,198.982,234a4.85,4.85,0,0,0,3.7-1.4A5.333,5.333,0,0,0,204,228.781a5.524,5.524,0,0,0-1.275-3.834,4.4,4.4,0,0,0-3.442-1.418,5.156,5.156,0,0,0-2.646.68l0.479-4.282h6.415v-1.844H195.41l-0.806,7.83Z" transform="translate(-160 -192)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-175" tabindex="0" aria-labelledby="spp-svg-title-175-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-175-speed">Speed: 175%</title>\n  <path id="_1.75" data-name="1.75" d="M224,304a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,194,278.1V288h-6V272h6v0.1A31.974,31.974,0,0,1,224,304Zm-44.022-5.992h-0.31l-5.663,2.146v1.812l3.985-1.478v13.3h1.988V298.008Zm4.348,15.561a1.173,1.173,0,0,0,.913.335,1.213,1.213,0,0,0,.925-0.335,1.161,1.161,0,0,0,.315-0.83,1.234,1.234,0,0,0-.315-0.863,1.192,1.192,0,0,0-.925-0.345,1.154,1.154,0,0,0-.913.345,1.259,1.259,0,0,0-.305.863A1.184,1.184,0,0,0,184.326,313.569ZM197.9,298.083H187.384v1.639h8.42l-6.422,14.063h2.073l6.443-14.58v-1.122Zm3.456,8.239,0.523-.431a3.238,3.238,0,0,1,2.03-.572,2.878,2.878,0,0,1,2.26.955,3.663,3.663,0,0,1,.85,2.529,3.988,3.988,0,0,1-.786,2.62,2.655,2.655,0,0,1-2.164.949,2.943,2.943,0,0,1-2.03-.684,3.18,3.18,0,0,1-.951-2.033h-1.869a4.621,4.621,0,0,0,1.485,3.192A4.89,4.89,0,0,0,204.067,314a4.709,4.709,0,0,0,3.628-1.4,5.4,5.4,0,0,0,1.3-3.823,5.59,5.59,0,0,0-1.25-3.834,4.274,4.274,0,0,0-3.376-1.418,4.985,4.985,0,0,0-2.6.68l0.47-4.282h6.294v-1.844h-7.971l-0.791,7.83Z" transform="translate(-160 -272)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-200" tabindex="0" aria-labelledby="spp-svg-title-double-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-double-speed">Speed: Double</title>\n  <path id="_2X" data-name="2X" d="M304,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,274,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,304,224Zm-32.867,8.008H263.28l4.19-4.544q2.943-3.191,2.943-5.5a3.9,3.9,0,0,0-1.267-3.046,4.96,4.96,0,0,0-3.449-1.144,5.158,5.158,0,0,0-3.722,1.332,4.615,4.615,0,0,0-1.391,3.492h1.987a3.223,3.223,0,0,1,.822-2.348,3.07,3.07,0,0,1,2.3-.843,2.594,2.594,0,0,1,1.977.784,2.808,2.808,0,0,1,.741,2.009,3.7,3.7,0,0,1-.456,1.767,12.9,12.9,0,0,1-1.66,2.218l-5.414,6.016v1.429h10.248v-1.622Zm3.887-14.019H272.6l4.952,7.756-5.07,7.885h2.438l3.868-6.1,3.845,6.1h2.449l-5.059-7.885,4.941-7.756H282.54l-3.749,5.994Z" transform="translate(-240 -192)"/>\n</svg>\n\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-speed-300" tabindex="0" aria-labelledby="spp-svg-title-triple-speed" role="img" viewBox="0 0 64 64">\n  <title id="spp-svg-title-triple-speed">Speed: Triple</title>\n  <path id="_3X" data-name="3X" d="M384,224a32,32,0,1,1-55.58-21.58l4.243,4.243A25.988,25.988,0,1,0,354,198.1V208h-6V192h6v0.1A31.974,31.974,0,0,1,384,224Zm-39.87,2.65H345.6a3.56,3.56,0,0,1,2.378.749,2.633,2.633,0,0,1,.825,2.086,2.622,2.622,0,0,1-2.918,2.9,2.991,2.991,0,0,1-2.124-.738,2.561,2.561,0,0,1-.793-1.969H341a3.963,3.963,0,0,0,1.358,3.135A5.161,5.161,0,0,0,345.884,234a5.026,5.026,0,0,0,3.52-1.231,4.274,4.274,0,0,0,1.353-3.328,3.6,3.6,0,0,0-2.653-3.648,3.93,3.93,0,0,0,1.77-1.423,3.447,3.447,0,0,0,.651-1.969,4.245,4.245,0,0,0-1.237-3.243,4.781,4.781,0,0,0-3.414-1.166,4.838,4.838,0,0,0-3.4,1.225,4,4,0,0,0-1.338,3.077h1.956a2.58,2.58,0,0,1,.756-1.942,2.78,2.78,0,0,1,2.024-.733,2.4,2.4,0,0,1,2.695,2.739,2.481,2.481,0,0,1-.793,1.937,3.2,3.2,0,0,1-2.177.738H344.13v1.616Zm9.965-8.443h-2.378l4.873,7.726-4.989,7.854H354l3.805-6.078,3.784,6.078H364l-4.978-7.854,4.862-7.726h-2.389l-3.689,5.971Z" transform="translate(-320 -192)"/>\n</svg>\n\r\n\t\t<% } %>\r\n\t<% } %>\r\n\t</div>\r\n\t<div class="spp-step-back">\r\n\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-back-15" role="img" viewBox="0 0 76.344 44">\n  <title id="spp-svg-title-back-15">Back 15 seconds</title>\n  <path id="RW_15" d="M36.645,62.008H36.318L31,64.289v1.927l3.566-1.571V78.784h2.074V62.008Zm7.418,8.841,0.548-.539a2.444,2.444,0,0,1,1.643-.528,2.284,2.284,0,0,1,1.963,1.032,4.533,4.533,0,0,1,.728,2.672,4.978,4.978,0,0,1-.676,2.769,2.129,2.129,0,0,1-1.876,1.026,2.208,2.208,0,0,1-1.719-.728,3.854,3.854,0,0,1-.833-2.161H41.907a5.286,5.286,0,0,0,1.375,3.394,4.573,4.573,0,0,0,6.485-.252A6.182,6.182,0,0,0,51,73.463a6.653,6.653,0,0,0-1.13-4.071,3.669,3.669,0,0,0-3.111-1.514,3.908,3.908,0,0,0-2.261.722l0.4-4.552h5.64V62.088H43.153l-0.734,8.325ZM75,73A33,33,0,0,0,9,73h4.67l-6,8-6-8H6a36,36,0,0,1,72,0H75Z" transform="translate(-1.656 -37)"/>\n</svg>\n\r\n\t</div>\r\n\t<div class="spp-play-pause-circle">\r\n\t\t<div class="spp-play-invisisquare">\r\n\t\t\t<div class="spp-control spp-play" aria-label="Play" tabindex="0">\r\n\t\t\t\t<div class="spp-play-bar spp-play-bar-left"></div>\r\n\t\t\t\t<div class="spp-play-bar spp-play-bar-right"></div>\r\n\t\t\t\t<div class="spp-play-mask spp-play-mask-top"></div>\r\n\t\t\t\t<div class="spp-play-mask spp-play-mask-bottom"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="spp-step-forward">\r\n\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-forward-60" role="img" viewBox="0 0 76.344 44">\n  <title id="spp-svg-title-forward-60">Forward 60 seconds</title>\n  <path id="FF-60" d="M185.75,62.229a6.816,6.816,0,0,0-3.714,1.017,6,6,0,0,0-2.261,3.006,15.677,15.677,0,0,0-.768,5.432V72.49a7.977,7.977,0,0,0,1.276,4.739,3.949,3.949,0,0,0,3.365,1.784,4.057,4.057,0,0,0,3.313-1.511,6.32,6.32,0,0,0,1.234-4.114,6.47,6.47,0,0,0-1.116-3.949,3.561,3.561,0,0,0-3.017-1.506,3.631,3.631,0,0,0-2.929,1.386,6.42,6.42,0,0,1,1.358-3.949,4.31,4.31,0,0,1,3.271-1.358H186.1V62.229H185.75Zm-0.271,8.517a5.133,5.133,0,0,1,.661,2.744,5.06,5.06,0,0,1-.661,2.744,2.063,2.063,0,0,1-1.831,1.04,2.121,2.121,0,0,1-1.812-1.267,6.448,6.448,0,0,1-.739-3.278V71.9a3.519,3.519,0,0,1,1.04-1.591,2.347,2.347,0,0,1,1.57-.625A2.01,2.01,0,0,1,185.479,70.746Zm15.53-1.915a9.746,9.746,0,0,0-1.175-5.125,4.313,4.313,0,0,0-6.92.091,10.389,10.389,0,0,0-1.116,5.409v2.841a9.939,9.939,0,0,0,1.18,5.227A4.261,4.261,0,0,0,199.9,77.2a10.684,10.684,0,0,0,1.11-5.472v-2.9Zm-2.09,3.443a9.267,9.267,0,0,1-.626,3.784,1.977,1.977,0,0,1-1.878,1.239,2.027,2.027,0,0,1-1.913-1.312,9.5,9.5,0,0,1-.626-3.926V68.649a8.876,8.876,0,0,1,.626-3.687,1.984,1.984,0,0,1,1.889-1.222,2.008,2.008,0,0,1,1.925,1.244,9.341,9.341,0,0,1,.6,3.869v3.42ZM157,73a33,33,0,0,1,66,0h-4.67l6,8,6-8H226a36,36,0,0,0-72,0h3Z" transform="translate(-154 -37)"/>\n</svg>\n\r\n\t</div>\r\n\t<% if ( !data.isStp\r\n\t\t\t|| data.download == "true"\r\n\t\t\t|| data.social && data.social !== "false" && (\r\n\t\t\t\tdata.social_facebook === "true" || data.social_twitter === "true"\r\n\t\t\t\t|| data.social_gplus === "true" || data.social_linkedin === "true"\r\n\t\t\t\t|| data.social_pinterest === "true" || data.social_email === "true")\r\n\t\t\t|| data.subscribe && data.subscribe !== "false" && data._subscribe_any ) { %>\r\n\t\t<div class="spp-more">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-more" role="img" viewBox="0 0 32 32">\n  <title id="spp-svg-title-more">More</title>\n  <path id="More" d="M216,128a16,16,0,1,1,16-16A16,16,0,0,1,216,128Zm0-29a13,13,0,1,0,13,13A13,13,0,0,0,216,99Zm6,15a2,2,0,1,1,2-2A2,2,0,0,1,222,114Zm-6,0a2,2,0,1,1,2-2A2,2,0,0,1,216,114Zm-6,0a2,2,0,1,1,2-2A2,2,0,0,1,210,114Z" transform="translate(-200 -96)"/>\n</svg>\n\r\n\t\t</div>\r\n\t<% } %>\r\n</div>\r\n<div class="spp-sticky-expanded-header"><%= "Currently Playing".toLocaleString() %></div>\r\n<div class="spp-sticky-expand">\r\n\t<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 15 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-13.000000, -15.000000)" d="M20.3876042,15.0054326 C20.14278,15.0294623 19.909657,15.1291765 19.7222326,15.2937705 L13.4247723,20.8298584 C13.1811206,21.0413062 13.0300115,21.3428692 13.0042519,21.6684527 C12.9773108,21.9952356 13.0792217,22.3184201 13.2865611,22.5671135 C13.4927279,22.8158038 13.7879289,22.9707866 14.1053808,22.9960065 C14.4240023,23.0212357 14.7379457,22.9167144 14.9804279,22.704064 L20.5000019,17.8504528 L26.0195759,22.704064 C26.2620551,22.9167144 26.5760015,23.0224506 26.894623,22.9960065 C27.2120749,22.9707774 27.5072759,22.8157946 27.7134427,22.5671135 C27.9207821,22.3184232 28.022678,21.9952356 27.9957519,21.6696521 C27.9699803,21.3428692 27.8188712,21.0413062 27.5752315,20.8298584 L21.2777712,15.2937705 C21.0306049,15.0787181 20.7096503,14.9741844 20.3874903,15.0054326 L20.3876042,15.0054326 Z" id="Fill-1"></path>\n</svg>\r\n</div>\r\n\r\n<div class="spp-stpd-download-share-controls">\r\n\t\t\r\n\t<% if ( true ) { %>\r\n\t\r\n\t\t<% if ( data.download == "true" ) { %>\r\n\t\t\t<% var valid_title = data.title.indexOf(">") == -1; %>\r\n\t\t\t<% if (valid_title) { %>\r\n\t\t\t\t<a class="spp-button-download spp-control" href="<%= data.download_url %>" target="_blank" download="<%= data.title %>">\r\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-dss-image spp-download-image" aria-labelledby="spp-svg-title-download" role="img" width="24" height="24" viewBox="0 0 24 24">\n  <title id="spp-svg-title-download">Download</title>\n  <path id="Download" d="M23,24H1a1,1,0,0,1-1-1V19a1,1,0,1,1,2,0v3H22V19a1,1,0,0,1,2,0v4A1,1,0,0,1,23,24ZM12.753,17.661c-0.015.018-.019,0.04-0.036,0.057a1.031,1.031,0,0,1-1.435,0c-0.018-.018-0.025-0.043-0.041-0.062L6.282,12.7A1,1,0,0,1,7.7,11.282l3.3,3.3V1a1,1,0,0,1,2,0V14.586l3.3-3.3A1,1,0,0,1,17.718,12.7Z"/>\n</svg>\n\r\n\t\t\t\t</a>\r\n\t\t\t<% } else { %>\r\n\t\t\t\t<a class="spp-button-download spp-control" href="<%= data.download_url %>" target="_blank" download>\r\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-dss-image spp-download-image" aria-labelledby="spp-svg-title-download" role="img" width="24" height="24" viewBox="0 0 24 24">\n  <title id="spp-svg-title-download">Download</title>\n  <path id="Download" d="M23,24H1a1,1,0,0,1-1-1V19a1,1,0,1,1,2,0v3H22V19a1,1,0,0,1,2,0v4A1,1,0,0,1,23,24ZM12.753,17.661c-0.015.018-.019,0.04-0.036,0.057a1.031,1.031,0,0,1-1.435,0c-0.018-.018-0.025-0.043-0.041-0.062L6.282,12.7A1,1,0,0,1,7.7,11.282l3.3,3.3V1a1,1,0,0,1,2,0V14.586l3.3-3.3A1,1,0,0,1,17.718,12.7Z"/>\n</svg>\n\r\n\t\t\t\t</a>\r\n\t\t\t<% } %>\r\n\t\t<% } %>\r\n\t\t\r\n\t\t<% if ( (data.social && data.social !== "false") || data.subscribe && data.subscribe !== "false" && \r\n\t\t\t\t(  data._subscribe_any  ) ) { %>\r\n\t\t\t<div class="spp-more">\r\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control" tabindex="0" aria-labelledby="spp-svg-title-more" role="img" viewBox="0 0 32 32">\n  <title id="spp-svg-title-more">More</title>\n  <path id="More" d="M216,128a16,16,0,1,1,16-16A16,16,0,0,1,216,128Zm0-29a13,13,0,1,0,13,13A13,13,0,0,0,216,99Zm6,15a2,2,0,1,1,2-2A2,2,0,0,1,222,114Zm-6,0a2,2,0,1,1,2-2A2,2,0,0,1,216,114Zm-6,0a2,2,0,1,1,2-2A2,2,0,0,1,210,114Z" transform="translate(-200 -96)"/>\n</svg>\n\r\n\t\t\t</div>\r\n\t\t<% } %>\r\n\t\t<iframe class="spp-downloader" style="display:none"></iframe>\r\n\t<% } %>\r\n</div>\r\n\r\n<div class="spp-progress-bar-region"></div>\r\n'
        }), c("text!templates/download-subscribe-share-template.html", [], function() {
            return '<% if ( data.download == "true" && !data.isCurrentlyStpDesktop) { %>\r\n\t<div class="spp-dss-row">\r\n\t\t<a class="spp-button-download spp-control" href="<%= data.download_url %>" target="_blank" download="<%= data.title %>">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-dss-image spp-download-image" aria-labelledby="spp-svg-title-download" role="img" width="24" height="24" viewBox="0 0 24 24">\n  <title id="spp-svg-title-download">Download</title>\n  <path id="Download" d="M23,24H1a1,1,0,0,1-1-1V19a1,1,0,1,1,2,0v3H22V19a1,1,0,0,1,2,0v4A1,1,0,0,1,23,24ZM12.753,17.661c-0.015.018-.019,0.04-0.036,0.057a1.031,1.031,0,0,1-1.435,0c-0.018-.018-0.025-0.043-0.041-0.062L6.282,12.7A1,1,0,0,1,7.7,11.282l3.3,3.3V1a1,1,0,0,1,2,0V14.586l3.3-3.3A1,1,0,0,1,17.718,12.7Z"/>\n</svg>\n\r\n\t\t</a>\r\n\t\t<div class="spp-dss-download-text">\r\n\t\t\t<div class="spp-dss-download-text-2">\r\n\t\t\t\t<a class="spp-button-download" href="<%= data.download_url %>" target="_blank" download="<%= data.title %>" tabindex="-1">\r\n\t\t\t\t\t<%="Download".toLocaleString()%>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<% } %>\r\n<% if (data._subscribe_any) { %>\r\n\t<div class="spp-dss-row">\r\n\t\t<div class="spp-dss-image-container">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-dss-image spp-subscribe-image" aria-labelledby="spp-svg-title-subscribe" role="img" viewBox="0 0 24 24">\n  <title id="spp-svg-title-subscribe">Subscribe</title>\n  <path id="RSS" d="M54,24A22,22,0,0,0,32,2V0A24,24,0,0,1,56,24H54ZM36,16a4,4,0,1,1-4,4A4,4,0,0,1,36,16Zm0,6a2,2,0,1,0-2-2A2,2,0,0,0,36,22ZM32,8A16,16,0,0,1,48,24H46A14,14,0,0,0,32,10V8Z" transform="translate(-32)"/>\n</svg>\n\r\n\t\t</div>\r\n\t\t<div class="spp-dss-subscribe-text">\r\n\t\t\t<div class="spp-dss-subscribe-text-2">\r\n\t\t\t\t<%="Subscribe".toLocaleString()%>\r\n\t\t\t</div>\r\n\t\t\t<div class="spp-dss-subscribe-icon-list">\r\n\t\t\t\t<% _.forEach(data._subscription_services, function(service) {\r\n\t\t\t\t\t\tvar d = data["subscribe_" + service[0]];\r\n\t\t\t\t\t\tif (d !== "" && d !== "false") { %>\r\n\t\t\t\t\t\t<div class="spp-subscribe-icon-container1">\r\n\t\t\t\t\t\t\t<div class="spp-subscribe-icon-container">\r\n\t\t\t\t\t\t\t\t<a href="<%= d %>" target="_blank">\r\n\t\t\t\t\t\t\t\t\t<img class="spp-subscribe-btn spp-<%= service[0] %>"\r\n\t\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Subscribe via <%= service[1] %>">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> <%\r\n\t\t\t\t\t\t}\r\n\t\t\t\t}); %>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<% } %>\r\n<% if ( data.social === "true" ) { %>\r\n\t<div class="spp-dss-row">\r\n\t\t<div class="spp-dss-image-container">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-dss-image spp-share-image" tabindex="0" aria-labelledby="spp-svg-title-share" role="img" width="24" height="24" viewBox="0 0 24 24">\n  <title id="spp-svg-title-share">Share</title>\n  <path id="Share" d="M84,8a3.975,3.975,0,0,1-2.946-1.314L71.9,11.12a3.767,3.767,0,0,1,0,1.761l9.158,4.434a4.027,4.027,0,1,1-.95,1.805l-9.158-4.434a4,4,0,1,1,0-5.371L80.1,4.88A4,4,0,1,1,84,8Zm0,14a2,2,0,0,0,0-4,1.978,1.978,0,0,0-.98.267,2.029,2.029,0,0,0-.724.7c-0.011.019-.02,0.039-0.031,0.058a1.966,1.966,0,0,0-.162.374c-0.012.038-.026,0.075-0.035,0.114A1.958,1.958,0,0,0,82,20a0.11,0.11,0,0,0,0,.014A2,2,0,0,0,84,22ZM69.9,11.4a1.967,1.967,0,0,0-.162-0.374c-0.011-.019-0.02-0.039-0.031-0.058a2.03,2.03,0,0,0-.724-0.7h0A1.978,1.978,0,0,0,68,10a2,2,0,0,0,0,4,1.975,1.975,0,0,0,.981-0.267,2.029,2.029,0,0,0,.716-0.689c0.016-.027.03-0.055,0.045-0.082a1.967,1.967,0,0,0,.149-0.343c0.015-.045.031-0.088,0.043-0.134a1.8,1.8,0,0,0,0-.975C69.923,11.471,69.909,11.434,69.9,11.4ZM84,2a2,2,0,0,0-2,1.984A0.12,0.12,0,0,0,82,4a1.958,1.958,0,0,0,.068.49c0.01,0.039.023,0.076,0.035,0.114a1.966,1.966,0,0,0,.162.374C82.276,5,82.285,5.016,82.3,5.035a2.03,2.03,0,0,0,.723.7A1.979,1.979,0,0,0,84,6,2,2,0,0,0,84,2Z" transform="translate(-64)"/>\n</svg>\n\r\n\t\t</div>\r\n\t\t<div class="spp-dss-share-text">\r\n\t\t\t<div class="spp-dss-share-text-2">\r\n\t\t\t\t<%="Share".toLocaleString()%>\r\n\t\t\t</div>\r\n\t\t\t<div class="spp-dss-share-icon-list">\r\n\t\t\t\t<% if( data.social_twitter === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-twitter"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share on Twitter">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<% if( data.social_facebook === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-facebook"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share on Facebook">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<% if( data.social_linkedin === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-linked-in"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share on Linked In">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<% if( data.social_gplus === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-google-plus"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share on Google Plus">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<% if( data.social_pinterest === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-pinterest"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share on Pinterest">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t\t<% if( data.social_email === "true" ) { %>\r\n\t\t\t\t\t<div class="spp-share-icon-container1">\r\n\t\t\t\t\t\t<div class="spp-share-icon-container">\r\n\t\t\t\t\t\t\t<a href="mailto:<%= data.email %>" target="_blank">\r\n\t\t\t\t\t\t\t\t<img class="spp-share-btn spp-email"\r\n\t\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/SPP-sprite.png" alt="Share via email">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t<% } %>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<% } %>\r\n\r\n<iframe class="spp-downloader" style="display:none"></iframe>\r\n'
        }), c("text!templates/dss-sticky-template.html", [], function() {
            return '<div class="spp-dsst-top-matter">\r\n\t<div class="spp-show-logo">\r\n\t\t<% if ( data.show_logo != undefined && data.show_logo != null && data.show_logo != "" ) { %>\r\n\t\t\t<img src="<%= data.show_logo %>" alt="<%= data.show_name %>" />\r\n\t\t<% } %>\r\n\t</div>\r\n\t<div class="spp-artist-and-title">\r\n\t\t<p class="spp-show-title"><%= artist %></p>\r\n\t\t<p class="spp-track-title"><%= data.title %></p>\r\n\t</div>\r\n</div>\r\n\r\n<div class="spp-dsst-separator"></div>\r\n\r\n<% if ( data.download == "true" || data.social_facebook === "true"\r\n\t\t|| data.social_twitter === "true" || data.social_gplus === "true"\r\n\t\t|| data.social_linkedin === "true" || data.social_pinterest === "true"\r\n\t\t|| data.social_email === "true") { %>\r\n\t<div class="spp-dsst-row">\r\n\t\t<div class="spp-dsst-row-text">Share</div>\r\n\t\t<div class="spp-dsst-icon-list-outer">\r\n\t\t<div class="spp-dsst-icon-list-inner">\r\n\t\t\t<% if( data.download == "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<% var valid_title = data.title.indexOf(">") == -1; %>\r\n\t\t\t\t\t<% if (valid_title) { %>\r\n\t\t\t\t\t\t<a class="spp-button-download spp-control" href="<%= data.download_url %>" \r\n\t\t\t\t\t\t\t\t\ttarget="_blank" download="<%= data.title %>">\r\n\t\t\t\t\t\t\t<img src="<%= AP_Player.baseUrl %>../images/icon_download.png" alt="Download">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t<% } else { %>\r\n\t\t\t\t\t\t<a class="spp-button-download spp-control" href="<%= data.download_url %>" \r\n\t\t\t\t\t\t\t\t\ttarget="_blank" download>\r\n\t\t\t\t\t\t\t<img src="<%= AP_Player.baseUrl %>../images/icon_download.png" alt="Download">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t<% } %>\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Download</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_facebook === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<img class="spp-control spp-share-btn spp-facebook"\r\n\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_facebook.png" alt="Share on Facebook">\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Facebook</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_twitter === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<img class="spp-control spp-share-btn spp-twitter"\r\n\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_twitter.png" alt="Share on Twitter">\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Twitter</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_gplus === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<img class="spp-control spp-share-btn spp-google-plus"\r\n\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_googleplus.png" alt="Share on Google Plus">\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Google+</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_linkedin === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<img class="spp-control spp-share-btn spp-linked-in"\r\n\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_linkedin.png" alt="Share on LinkedIn">\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">LinkedIn</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_pinterest === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<img class="spp-control spp-share-btn spp-pinterest"\r\n\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_pinterest.png" alt="Share on Pinterest">\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Pinterest</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t\t<% if( data.social_email === "true" ) { %>\r\n\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t<a href="mailto:<%= data.email %>" target="_blank">\r\n\t\t\t\t\t\t<img class="spp-control spp-share-btn spp-email"\r\n\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_email.png" alt="Share via Email">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class="spp-dsst-icon-text">Email</div>\r\n\t\t\t\t</div>\r\n\t\t\t<% } %>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="spp-dsst-scroll spp-dsst-scroll-left">\r\n\t\t\t<div class="spp-dsst-scroll-icon spp-dsst-scroll-icon-left">\r\n\t\t\t\t<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 15 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-13.000000, -15.000000)" d="M20.3876042,15.0054326 C20.14278,15.0294623 19.909657,15.1291765 19.7222326,15.2937705 L13.4247723,20.8298584 C13.1811206,21.0413062 13.0300115,21.3428692 13.0042519,21.6684527 C12.9773108,21.9952356 13.0792217,22.3184201 13.2865611,22.5671135 C13.4927279,22.8158038 13.7879289,22.9707866 14.1053808,22.9960065 C14.4240023,23.0212357 14.7379457,22.9167144 14.9804279,22.704064 L20.5000019,17.8504528 L26.0195759,22.704064 C26.2620551,22.9167144 26.5760015,23.0224506 26.894623,22.9960065 C27.2120749,22.9707774 27.5072759,22.8157946 27.7134427,22.5671135 C27.9207821,22.3184232 28.022678,21.9952356 27.9957519,21.6696521 C27.9699803,21.3428692 27.8188712,21.0413062 27.5752315,20.8298584 L21.2777712,15.2937705 C21.0306049,15.0787181 20.7096503,14.9741844 20.3874903,15.0054326 L20.3876042,15.0054326 Z" id="Fill-1"></path>\n</svg>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="spp-dsst-scroll spp-dsst-scroll-right">\r\n\t\t\t<div class="spp-dsst-scroll-icon spp-dsst-scroll-icon-right">\r\n\t\t\t\t<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 15 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-13.000000, -15.000000)" d="M20.3876042,15.0054326 C20.14278,15.0294623 19.909657,15.1291765 19.7222326,15.2937705 L13.4247723,20.8298584 C13.1811206,21.0413062 13.0300115,21.3428692 13.0042519,21.6684527 C12.9773108,21.9952356 13.0792217,22.3184201 13.2865611,22.5671135 C13.4927279,22.8158038 13.7879289,22.9707866 14.1053808,22.9960065 C14.4240023,23.0212357 14.7379457,22.9167144 14.9804279,22.704064 L20.5000019,17.8504528 L26.0195759,22.704064 C26.2620551,22.9167144 26.5760015,23.0224506 26.894623,22.9960065 C27.2120749,22.9707774 27.5072759,22.8157946 27.7134427,22.5671135 C27.9207821,22.3184232 28.022678,21.9952356 27.9957519,21.6696521 C27.9699803,21.3428692 27.8188712,21.0413062 27.5752315,20.8298584 L21.2777712,15.2937705 C21.0306049,15.0787181 20.7096503,14.9741844 20.3874903,15.0054326 L20.3876042,15.0054326 Z" id="Fill-1"></path>\n</svg>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="spp-dsst-separator"></div>\r\n<% } %>\r\n\r\n<% if (data._subscribe_any) { %>\r\n\t<div class="spp-dsst-row">\r\n\t\t<div class="spp-dsst-row-text">Subscribe</div>\r\n\t\t<div class="spp-dsst-icon-list-outer">\r\n\t\t<div class="spp-dsst-icon-list-inner">\r\n\t\t\t<% _.forEach(data._subscription_services, function(service) {\r\n\t\t\t\t\tvar d = data["subscribe_" + service[0]];\r\n\t\t\t\t\tif (d && d !== "false") { %>\r\n\t\t\t\t\t\t<div class="spp-dsst-icon-container">\r\n\t\t\t\t\t\t\t<a href="<%= d %>" target="_blank">\r\n\t\t\t\t\t\t\t\t<img class="spp-subscribe-btn spp-<%= service[0] %>"\r\n\t\t\t\t\t\t\t\t\tsrc="<%= AP_Player.baseUrl %>../images/icon_<%= service[0] %>.png"\r\n\t\t\t\t\t\t\t\t\talt="Subscribe via <%= service[2] %>">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<div class="spp-dsst-icon-text"><%= service[1] %></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<% }\r\n\t\t\t\t}); %>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="spp-dsst-scroll spp-dsst-scroll-left">\r\n\t\t\t<div class="spp-dsst-scroll-icon spp-dsst-scroll-icon-left">\r\n\t\t\t\t<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 15 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-13.000000, -15.000000)" d="M20.3876042,15.0054326 C20.14278,15.0294623 19.909657,15.1291765 19.7222326,15.2937705 L13.4247723,20.8298584 C13.1811206,21.0413062 13.0300115,21.3428692 13.0042519,21.6684527 C12.9773108,21.9952356 13.0792217,22.3184201 13.2865611,22.5671135 C13.4927279,22.8158038 13.7879289,22.9707866 14.1053808,22.9960065 C14.4240023,23.0212357 14.7379457,22.9167144 14.9804279,22.704064 L20.5000019,17.8504528 L26.0195759,22.704064 C26.2620551,22.9167144 26.5760015,23.0224506 26.894623,22.9960065 C27.2120749,22.9707774 27.5072759,22.8157946 27.7134427,22.5671135 C27.9207821,22.3184232 28.022678,21.9952356 27.9957519,21.6696521 C27.9699803,21.3428692 27.8188712,21.0413062 27.5752315,20.8298584 L21.2777712,15.2937705 C21.0306049,15.0787181 20.7096503,14.9741844 20.3874903,15.0054326 L20.3876042,15.0054326 Z" id="Fill-1"></path>\n</svg>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="spp-dsst-scroll spp-dsst-scroll-right">\r\n\t\t\t<div class="spp-dsst-scroll-icon spp-dsst-scroll-icon-right">\r\n\t\t\t\t<?xml version="1.0" encoding="UTF-8"?>\n<svg viewBox="0 0 15 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <path stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-13.000000, -15.000000)" d="M20.3876042,15.0054326 C20.14278,15.0294623 19.909657,15.1291765 19.7222326,15.2937705 L13.4247723,20.8298584 C13.1811206,21.0413062 13.0300115,21.3428692 13.0042519,21.6684527 C12.9773108,21.9952356 13.0792217,22.3184201 13.2865611,22.5671135 C13.4927279,22.8158038 13.7879289,22.9707866 14.1053808,22.9960065 C14.4240023,23.0212357 14.7379457,22.9167144 14.9804279,22.704064 L20.5000019,17.8504528 L26.0195759,22.704064 C26.2620551,22.9167144 26.5760015,23.0224506 26.894623,22.9960065 C27.2120749,22.9707774 27.5072759,22.8157946 27.7134427,22.5671135 C27.9207821,22.3184232 28.022678,21.9952356 27.9957519,21.6696521 C27.9699803,21.3428692 27.8188712,21.0413062 27.5752315,20.8298584 L21.2777712,15.2937705 C21.0306049,15.0787181 20.7096503,14.9741844 20.3874903,15.0054326 L20.3876042,15.0054326 Z" id="Fill-1"></path>\n</svg>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n<% } %>\r\n\r\n<div class="spp-dsst-separator"></div>\r\n<div class="spp-dsst-cancel">\r\n\t<div class="spp-dsst-cancel-btn">Cancel</div>\r\n</div>\r\n\r\n<iframe class="spp-downloader" style="display:none"></iframe>\r\n'
        }),
        function() {
            "use strict";
            var t, e, i = self.navigator,
                s = String,
                n = Object.prototype.hasOwnProperty,
                a = {},
                o = {},
                r = /^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,
                l = Array.prototype.indexOf || function(t) {
                    for (var e = this.length, i = 0; i < e; i++)
                        if (i in this && this[i] === t) return i;
                    return -1
                },
                d = function(e) {
                    var i = new t,
                        s = {};
                    i.open("GET", e, !1), i.send(null);
                    try {
                        s = JSON.parse(i.responseText)
                    } catch (t) {
                        setTimeout(function() {
                            var t = new Error("Unable to load localization data: " + e);
                            throw t.name = "Localization Error", t
                        }, 0)
                    }
                    return s
                },
                p = s.toLocaleString = function(t) {
                    if (arguments.length > 0 && "number" != typeof t)
                        if ("string" == typeof t) p(d(t));
                        else if (!1 === t) o = {};
                    else {
                        var e, i, r;
                        for (e in t)
                            if (n.call(t, e)) {
                                if (i = t[e], e = e.toLowerCase(), e in o && !1 !== i || (o[e] = {}), !1 === i) continue;
                                if ("string" == typeof i) {
                                    if (0 !== s.locale.toLowerCase().indexOf(e)) {
                                        e in a || (a[e] = []), a[e].push(i);
                                        continue
                                    }
                                    i = d(i)
                                }
                                for (r in i) n.call(i, r) && (o[e][r] = i[r])
                            }
                    }
                    return Function.prototype.toLocaleString.apply(s, arguments)
                },
                c = function(t) {
                    for (var e, i = a[t], s = 0, n = i.length; s < n; s++) e = {}, e[t] = d(i[s]), p(e);
                    delete a[t]
                },
                u = s.prototype.toLocaleString = function() {
                    var t, i = e,
                        n = s[i ? "defaultLocale" : "locale"],
                        r = n.toLowerCase().split("-"),
                        l = r.length,
                        d = this.valueOf();
                    e = !1;
                    do {
                        if (t = r.slice(0, l).join("-"), t in a && c(t), t in o && d in o[t]) return o[t][d]
                    } while (l--);
                    return !i && s.defaultLocale ? (e = !0, u.call(d)) : d
                };
            if ("undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                var h = ActiveXObject;
                t = function() {
                    try {
                        return new h("Msxml2.XMLHTTP.6.0")
                    } catch (t) {}
                    try {
                        return new h("Msxml2.XMLHTTP.3.0")
                    } catch (t) {}
                    try {
                        return new h("Msxml2.XMLHTTP")
                    } catch (t) {}
                    throw new Error("XMLHttpRequest not supported by this browser.")
                }
            } else t = XMLHttpRequest;
            if (s.defaultLocale = s.defaultLocale || "", s.locale = i && (i.language || i.userLanguage) || "", "undefined" != typeof document)
                for (var f, m = document.getElementsByTagName("link"), g = m.length; g--;) {
                    var v = m[g],
                        y = (v.getAttribute("rel") || "").toLowerCase().split(/\s+/);
                    r.test(v.type) && (-1 !== l.call(y, "localizations") ? p(v.getAttribute("href")) : -1 !== l.call(y, "localization") && (f = {}, f[(v.getAttribute("hreflang") || "").toLowerCase()] = v.getAttribute("href"), p(f)))
                }
        }(), c("l10n", function() {}), String.toLocaleString({
            "": {
                Search: "Search",
                Download: "Download",
                Subscribe: "Subscribe",
                Episodes: "Episodes",
                "Now Playing": "Now playing",
                Details: "Details",
                "Episode Details": "Episode Details",
                more: "more",
                Share: "Share",
                of: "of",
                "Sign up to receive email updates": "Sign up to receive email updates",
                "Enter your name and email address below and I'll send you periodic updates about the podcast.": "Enter your name and email address below and I'll send you periodic updates about the podcast.",
                Name: "Name",
                "Email Address": "Email Address",
                "First Name": "First Name",
                "Last Name": "Last Name",
                Close: "Close",
                "Send Me Updates": "Send Me Updates",
                "An error occurred while signing you up.  The message is:": "An error occurred while signing you up.  The message is:",
                "Thanks! You'll be hearing from us soon.": "Thanks! You'll be hearing from us soon.",
                "You're already subscribed to this list.  Thanks!": "You're already subscribed to this list.  Thanks!",
                "You should receive an email confirmation soon.": "You should receive an email confirmation soon."
            },
            de: {
                Search: "Suchen",
                Download: "Herunterladen",
                Subscribe: "Abonnieren",
                Episodes: "Episoden",
                "Now Playing": "Gerade läuft",
                Details: "Details",
                "Episode Details": "Episodendetails",
                more: "mehr",
                Share: "Teilen",
                of: "von",
                "Sign up to receive email updates": "Melde dich an, um E-Mail-Updates zu erhalten",
                "Enter your name and email address below and I'll send you periodic updates about the podcast.": "Geben Sie Ihren Namen und Ihre E-Mail-Adresse unten ein und ich sende Ihnen regelmäßige Updates über den Podcast.",
                Name: "der Name",
                "Email Address": "E-Mail-Addresse",
                "First Name": "Vorname",
                "Last Name": "der Nachname",
                Close: "Schließen",
                "Send Me Updates": "Sende mir Updates",
                "An error occurred while signing you up.  The message is:": "Bei der Anmeldung ist ein Fehler aufgetreten. Die Nachricht lautet:",
                "Thanks! You'll be hearing from us soon.": "Danke, du wirst bald von uns hören.",
                "You're already subscribed to this list.  Thanks!": "Du hast diese Liste schon abonniert. Danke!",
                "You should receive an email confirmation soon.": "Du solltest bald eine E-Mail-Bestätigung erhalten."
            }
        }), c("translations", function() {}), c("apps/smart-podcast-player/dss", ["spp-app", "text!templates/download-subscribe-share-template.html", "text!templates/dss-sticky-template.html", "entities/track-model", "l10n", "translations"], function(t, e, i) {
            return t.module("Dss", function(t, s, n, a, o, r) {
                var l = "<% if (data.isSticky) { %>" + i + "<% } else { %>" + e + "<% } %>";
                t.DssLayout = a.Layout.extend({
                    template: r.template(l, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-dss-layout",
                    events: {
                        "click    .spp-dsst-scroll": "scrollerClick",
                        "keypress .spp-dsst-scroll": "scrollerClick",
                        "click    .spp-dsst-cancel-btn": "unblock",
                        "keypress .spp-dsst-cancel-btn": "unblock",
                        "click    .spp-share-btn": "shareButtonClick",
                        "keypress .spp-share-btn": "shareButtonClick",
                        "click    .spp-button-download": "download",
                        "keypress .spp-button-download": "download",
                        "keypress .spp-download-image": "download",
                        "mouseenter .spp-dss-row": "showIcons",
                        "keypress .spp-dss-row": "toggleIcons",
                        "touchend .spp-dss-row": "showIcons",
                        "keyup *": function(t) {
                            27 == t.which && this.unblock()
                        }
                    },
                    onRender: function() {
                        var t = this.model.get("data");
                        return void("dark" == t.style && this.$el.addClass("spp-dark"));
                    },
                    onShow: function() {
                        var t = this.model.get("data");
                        null !== t.show_logo && void 0 !== t.show_logo || this.$el.closest(".spp-dsst-region").addClass("spp-no-image"), this.$(".spp-dsst-icon-list-outer").jScrollPane(), this.$(".spp-dsst-row").each(function() {
                            var t = 0;
                            window.innerWidth > 768 && (t += 70), o(this).find(".spp-dsst-icon-list-inner > *").each(function() {
                                t += o(this).outerWidth(!0)
                            }), t += 40, o(this).find(".spp-dsst-icon-list-inner").css("width", t + "px");
                            var e = o(this).find(".spp-dsst-icon-list-outer"),
                                i = (o(this).find(".spp-dsst-icon-list-inner"), parseInt(e.css("width"), 10));
                            t <= i && o(this).find(".spp-dsst-scroll").css("visibility", "hidden")
                        });
                    },
                    scrollerClick: function(t) {
                        var e = o(t.currentTarget),
                            i = e.closest(".spp-dsst-row"),
                            s = i.find(".jspPane"),
                            n = parseInt(s.css("left"), 10) || 0;
                        o(t.currentTarget).hasClass("spp-dsst-scroll-left") ? n += 300 : n -= 300;
                        var a = parseInt(s.find(".spp-dsst-icon-list-inner").css("width"), 10) - parseInt(s.css("width"), 10);
                        a = -Math.max(a, 0), n = Math.min(n, 0), n = Math.max(n, a), s.css("left", n + "px"), n >= 0 ? i.find(".spp-dsst-scroll-left").cssExtended("visibility", "hidden", AP_Player.importantStr) : i.find(".spp-dsst-scroll-left").cssExtended("visibility", "visible", AP_Player.importantStr), n <= a ? i.find(".spp-dsst-scroll-right").cssExtended("visibility", "hidden", AP_Player.importantStr) : i.find(".spp-dsst-scroll-right").cssExtended("visibility", "visible", AP_Player.importantStr)
                    },
                    unblock: function() {
                        o.unblockUI();
                    },
                    elementsTabbable: function(t) {
                        t ? (this.$el.find(".spp-button-downloada").removeAttr("tabindex"), this.$el.find(".spp-subscribe-image").attr("tabindex", "0"), this.$el.find(".spp-share-image").attr("tabindex", "0")) : (this.$el.find(".spp-button-downloada").attr("tabindex", "-1"), this.$el.find(".spp-subscribe-image").removeAttr("tabindex"), this.$el.find(".spp-share-image").removeAttr("tabindex"))
                    },
                    removeOutlines: function() {
                        this.$el.find(".spp-control").each(function() {
                            this.classList && this.classList.add("spp-no-outline")
                        })
                    },
                    focusFirstControl: function() {
                        this.$el.find(".spp-subscribe-image").first().focus()
                    }
                })
            }), t.Dss.DssLayout
        }), c("text!templates/newsletter-template.html", [], function() {
            return '<div class="spp-close spp-close-action"><svg xmlns="http://www.w3.org/2000/svg" class="spp-control" width="11" height="11" viewBox="0 0 11 11">\n  <path id="Close" d="M225,16.625L223.625,18,219.5,13.875,215.375,18,214,16.625l4.126-4.125L214,8.375,215.375,7l4.125,4.125L223.625,7,225,8.375,220.875,12.5Z" transform="translate(-214 -7)"/>\n</svg>\n</div>\r\n<div class="spp-news-custom-cta">\r\n\t<% if (options.email_portal === "ck") { %>\r\n\t\t<%= options.email_ck_html %>\r\n\t<% } else if (options.email_portal === "mc") { %>\r\n\t\t<%= options.email_mc_html %>\r\n\t<% } else if (options.email_portal === "enable") { %>\r\n\t\t<% if (options.email_service === "ctct") { %>\r\n\t\t\t<%= options.email_embed_html_ctct %>\r\n\t\t<% } else { %>\r\n\t\t\t<%= options.email_embed_html %>\r\n\t\t<% } %>\r\n\t<% } %>\r\n</div>\r\n'
        }), c("entities/news", ["spp-app", "text!templates/newsletter-template.html", "l10n", "translations"], function(t, e) {
            return t.module("News", function(t, i, s, n, a, o) {
                t.NewsLayout = n.Layout.extend({
                    template: o.template(e, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-news-layout",
                    events: {
                        "click    .spp-close-action": "closeOverlay",
                        "keypress .spp-close-action": "closeOverlay",
                        "keyup div": function(t) {
                            27 == t.which && this.closeOverlay()
                        }
                    },
                    setWidthLeftAndTop: function(t) {
                        var e = t.closest(".spp-news-overlay"),
                            i = t.width(),
                            s = t.height(),
                            n = (a(window).width() - i) / 2;
                        (n += a(window).scrollLeft()) < 0 && (n = 0);
                        var o = (a(window).height() - s) / 2;
                        o < 0 && (o = 0), e.css("width", i), e.css("left", n + "px"), e.css("top", o + "px")
                    },
                    setHeight: function(t, e) {
                        var i = t.closest(".spp-news-overlay"),
                            s = t.height();
                        i.css("height", s + e), s > a(window).height() && (i.css("top", ""), i.css("bottom", "25px"))
                    },
                    onShow: function() {
                        var t = this,
                            e = this.model.get("options");
                        a(".spp-ctct").detach().appendTo(this.$el.find(".spp-news-custom-cta")).show(), a(".spp-shsp-form-9f03c450").detach().appendTo(this.$el.find(".spp-news-custom-cta")).show(), t.setWidthLeftAndTop(t.$el), t.setHeight(t.$el, 0), this.$el.find("img").load(function() {
                            t.setWidthLeftAndTop(t.$el), t.setHeight(t.$el, 0)
                        })
                    },
                    closeOverlay: function() {
                        this.$el.find(".spp-ctct").hide().detach().appendTo(a("body")), this.$el.find(".spp-shsp-form").hide().detach().appendTo(a("body")), a.unblockUI();
                        var t = this.$el.closest(".spp-player-layout");
                        t.children(".blockUI").length > 0 && (t.unblock(), t.find(".spp-news").first().focus());
                        var e = this.model.get("playerView");
                        e && e.$el.closest(".spp-player-layout").find(".spp-main-image").show()
                    },
                    elementsTabbable: function(t) {
                        t ? this.$el.find(".spp-close").attr("tabindex", "0") : this.$el.find(".spp-close").removeAttr("tabindex")
                    },
                    removeOutlines: function() {
                        this.$el.find(".spp-control").each(function() {
                            this.classList && this.classList.add("spp-no-outline")
                        })
                    },
                    focusFirstControl: function() {
                        this.$el.find(".spp-first-name-input").first().focus()
                    }
                })
            }), t.News.NewsLayout
        }), c("text!templates/progress-bar-template.html", [], function() {
            return '<div class="spp-progress-bar">\r\n\t<div class="spp-progress-bar-bar">\r\n\t\t<div class="spp-progress-played"></div>\r\n\t\t<div class="spp-position"></div>\r\n\t\t<div class="spp-seek-time"></div>\r\n\t</div>\r\n\t<div class="spp-time-elapsed"></div>\r\n\t<div class="spp-time-remaining"></div>\r\n</div>\r\n'
        }), c("entities/progress-bar", ["spp-app", "text!templates/progress-bar-template.html"], function(t, e) {
            return t.module("ProgressBar", function(t, i, n, a, o, r) {
                t.ProgressBarLayout = a.Layout.extend({
                    template: r.template(e),
                    className: "spp-progress-bar-layout",
                    events: {
                        "mousemove  .spp-progress-bar": "cursorMove",
                        "mouseout   .spp-progress-bar": "cursorOut",
                        "touchstart .spp-progress-bar-bar": "touchStart",
                        "touchmove  .spp-progress-bar-bar": "touchMove",
                        "touchend   .spp-progress-bar-bar": "touchEnd",
                        "click      .spp-position": "positionClick",
                        "keypress   .spp-position": "positionClick",
                        "click      .spp-time-elapsed": "positionClick",
                        "keypress   .spp-time-elapsed": "positionClick",
                        "click      .spp-time-remaining": "positionClick",
                        "keypress   .spp-time-remaining": "positionClick"
                    },
                    parentView: function() {
                        return this.model.get("data").parentView
                    },
                    shortcode_options: function() {
                        return this.model.get("data").shortcode_options
                    },
                    onRender: function() {
                        this.$bar = this.$el.find(".spp-progress-bar"), this.$barbar = this.$el.find(".spp-progress-bar-bar"), this.$position = this.$el.find(".spp-position"), this.$seek_time = this.$el.find(".spp-seek-time"), this.$progress_played = this.$el.find(".spp-progress-played"), this.$time_elapsed = this.$el.find(".spp-time-elapsed"), this.$time_remaining = this.$el.find(".spp-time-remaining")
                    },
                    cursorMove: function(t) {
                        var e = this.isCursorMoving;
                        if (this.isCursorMoving = !0, e && this.parentView().isSoundLoaded()) {
                            var i = this.$bar.offset(),
                                s = t.pageX - this.$barbar.offset().left,
                                n = t.pageY - this.$bar.offset().top;
                            if (!(n < 0 || n > this.$bar[0].clientHeight || s < 0 || s > this.$barbar[0].clientWidth)) {
                                var i = this.$barbar.offset(),
                                    s = t.pageX - i.left;
                                this.showTimestamp(s, this.model)
                            }
                        }
                    },
                    cursorOut: function(t) {
                        if (this.parentView().isSoundLoaded()) {
                            this.$barbar.offset();
                            this.hideTimestamp()
                        }
                    },
                    touchStart: function(t) {
                        this.isTouchMoving = !1, this.horizontalTouchMove = !1, this.touchStartX = t.originalEvent.touches[0].clientX, this.touchStartY = t.originalEvent.touches[0].clientY
                    },
                    touchMove: function(t) {
                        if (this.isTouchMoving = !0, this.parentView().isSoundLoaded()) {
                            var e = t.originalEvent.touches[0];
                            if (this.horizontalTouchMove || !(Math.abs(this.touchStartX - e.clientX) < Math.abs(this.touchStartY - e.clientY))) {
                                this.horizontalTouchMove = !0;
                                var i = e.pageX - this.$barbar.offset().left;
                                i < 0 && (i = 0), this.showTimestamp(i, this.model)
                            }
                        }
                    },
                    touchEnd: function(t) {
                        if (this.isTouchMoving && this.parentView().isSoundLoaded()) {
                            var e = t.originalEvent.changedTouches[t.originalEvent.changedTouches.length - 1];
                            if (this.horizontalTouchMove || !(Math.abs(this.touchStartX - e.clientX) < Math.abs(this.touchStartY - e.clientY))) {
                                var i = this.$barbar.offset(),
                                    s = e.pageX - i.left;
                                e.pageY, i.top;
                                s < 0 && (s = 0);
                                var n = this.$barbar.outerWidth();
                                this.parentView().seek(s / n), this.hideTimestamp()
                            }
                        }
                    },
                    positionClick: function(t) {
                        if (this.isCursorMoving = !1, this.parentView().isSoundLoaded()) {
                            var e = t.pageX - this.$barbar.offset().left,
                                i = this.$barbar.outerWidth();
                            this.parentView().seek(e / i)
                        }
                    },
                    showTimestamp: function(t, e) {
                        this.hover = !0, this.$bar.addClass("spp-hover"), this.$position.cssExtended("left", t + "px", "important");
                        var i = this.$barbar.outerWidth(),
                            s = this.parentView().getSoundDurationEstimate(),
                            n = this.shortcode_options();
                        if (null !== s && s > 0) {
                            var a = s * t / i / 1e3,
                                o = Math.floor(a % 60),
                                r = Math.floor(a / 60 % 60),
                                l = Math.floor(a / 3600),
                                d = r + ":";
                            d += o > 9 ? o : "0" + o, l > 0 && (d = r > 9 ? l + ":" + d : l + ":0" + d), this.$seek_time.text(d);
                            var p = this.$seek_time.width(),
                                c = t - p / 2;
                            this.$seek_time.cssExtended("left", c + "px", "important"), this.$seek_time.cssExtended("display", "block", "important")
                        }
                    },
                    hideTimestamp: function() {
                        var t = this.parentView().getProgressPercent();
                        this.$position.cssExtended("left", t + "%", "important"), this.$seek_time.cssExtended("display", "none", "important"), this.$bar.removeClass("spp-hover"), this.hover = !1
                    },
                    progressUpdate: function(t, e) {
                        var i = t / e * 100;
                        this.$progress_played.cssExtended("width", i + "%", AP_Player.importantStr), this.$position.cssExtended("display", "block", AP_Player.importantStr);
                        var s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        this.hover && !s || this.$position.cssExtended("left", i + "%", AP_Player.importantStr);
                        var n = this.toTimeString(t),
                            a = this.toTimeString(e - t);
                        this.$time_elapsed.text(n), this.$time_remaining.text(a)
                    },
                    toTimeString: function(t) {
                        var e = Math.floor(t % 60),
                            i = Math.floor(t / 60 % 60),
                            n = Math.floor(t / 3600);
                        return n > 0 ? n + ":" + s(i, 2) + ":" + s(e, 2) : i + ":" + s(e, 2)
                    }
                })
            }), t.ProgressBar.ProgressBarLayout
        }),
        function() {
            function t(t) {
                function e(e, s) {
                    var a, m, g = e == window,
                        v = s && void 0 !== s.message ? s.message : void 0;
                    if (s = t.extend({}, t.blockUI.defaults, s || {}), !s.ignoreIfBlocked || !t(e).data("blockUI.isBlocked")) {
                        if (s.overlayCSS = t.extend({}, t.blockUI.defaults.overlayCSS, s.overlayCSS || {}), a = t.extend({}, t.blockUI.defaults.css, s.css || {}), s.onOverlayClick && (s.overlayCSS.cursor = "pointer"), m = t.extend({}, t.blockUI.defaults.themedCSS, s.themedCSS || {}), v = void 0 === v ? s.message : v, g && h && i(window, {
                                fadeOut: 0
                            }), v && "string" != typeof v && (v.parentNode || v.jquery)) {
                            var y = v.jquery ? v[0] : v,
                                w = {};
                            t(e).data("blockUI.history", w), w.el = y, w.parent = y.parentNode, w.display = y.style.display, w.position = y.style.position, w.parent && w.parent.removeChild(y)
                        }
                        t(e).data("blockUI.onUnblock", s.onUnblock);
                        var b, _, k, x, P = s.baseZ;
                        b = t(p || s.forceIframe ? '<iframe class="blockUI" style="z-index:' + P++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + s.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), _ = t(s.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + P++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + P++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), s.theme && g ? (x = '<div class="blockUI ' + s.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (P + 10) + ';display:none;position:fixed">', s.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (s.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : s.theme ? (x = '<div class="blockUI ' + s.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (P + 10) + ';display:none;position:absolute">', s.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (s.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = g ? '<div class="blockUI ' + s.blockMsgClass + ' blockPage" style="z-index:' + (P + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + s.blockMsgClass + ' blockElement" style="z-index:' + (P + 10) + ';display:none;position:absolute"></div>', k = t(x), v && (s.theme ? (k.css(m), k.addClass("ui-widget-content")) : k.css(a)), s.theme || _.css(s.overlayCSS), _.css("position", g ? "fixed" : "absolute"), (p || s.forceIframe) && b.css("opacity", 0);
                        var S = [b, _, k],
                            C = t(g ? "body" : e);
                        t.each(S, function() {
                            this.appendTo(C)
                        }), s.theme && s.draggable && t.fn.draggable && k.draggable({
                            handle: ".ui-dialog-titlebar",
                            cancel: "li"
                        });
                        var M = u && (!t.support.boxModel || t("object,embed", g ? null : e).length > 0);
                        if (c || M) {
                            if (g && s.allowBodyStretch && t.support.boxModel && t("html,body").css("height", "100%"), (c || !t.support.boxModel) && !g) var T = l(e, "borderTopWidth"),
                                A = l(e, "borderLeftWidth"),
                                E = T ? "(0 - " + T + ")" : 0,
                                L = A ? "(0 - " + A + ")" : 0;
                            t.each(S, function(t, e) {
                                var i = e[0].style;
                                if (i.position = "absolute", t < 2) g ? i.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + s.quirksmodeOffsetHack + ') + "px"') : i.setExpression("height", 'this.parentNode.offsetHeight + "px"'), g ? i.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : i.setExpression("width", 'this.parentNode.offsetWidth + "px"'), L && i.setExpression("left", L), E && i.setExpression("top", E);
                                else if (s.centerY) g && i.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), i.marginTop = 0;
                                else if (!s.centerY && g) {
                                    var n = s.css && s.css.top ? parseInt(s.css.top, 10) : 0,
                                        a = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + n + ') + "px"';
                                    i.setExpression("top", a)
                                }
                            })
                        }
                        if (v && (s.theme ? k.find(".ui-widget-content").append(v) : k.append(v), (v.jquery || v.nodeType) && t(v).show()), (p || s.forceIframe) && s.showOverlay && b.show(), s.fadeIn) {
                            var O = s.onBlock ? s.onBlock : d,
                                I = s.showOverlay && !v ? O : d,
                                $ = v ? O : d;
                            s.showOverlay && _._fadeIn(s.fadeIn, I), v && k._fadeIn(s.fadeIn, $)
                        } else s.showOverlay && _.show(), v && k.show(), s.onBlock && s.onBlock.bind(k)();
                        if (n(1, e, s), g ? (h = k[0], f = t(s.focusableElements, h), s.focusInput && setTimeout(o, 20)) : r(k[0], s.centerX, s.centerY), s.timeout) {
                            var j = setTimeout(function() {
                                g ? t.unblockUI(s) : t(e).unblock(s)
                            }, s.timeout);
                            t(e).data("blockUI.timeout", j)
                        }
                    }
                }

                function i(e, i) {
                    var a, o = e == window,
                        r = t(e),
                        l = r.data("blockUI.history"),
                        d = r.data("blockUI.timeout");
                    d && (clearTimeout(d), r.removeData("blockUI.timeout")), i = t.extend({}, t.blockUI.defaults, i || {}), n(0, e, i), null === i.onUnblock && (i.onUnblock = r.data("blockUI.onUnblock"), r.removeData("blockUI.onUnblock"));
                    var p;
                    p = o ? t("body").children().filter(".blockUI").add("body > .blockUI") : r.find(">.blockUI"), i.cursorReset && (p.length > 1 && (p[1].style.cursor = i.cursorReset), p.length > 2 && (p[2].style.cursor = i.cursorReset)), o && (h = f = null), i.fadeOut ? (a = p.length, p.stop().fadeOut(i.fadeOut, function() {
                        0 == --a && s(p, l, i, e)
                    })) : s(p, l, i, e)
                }

                function s(e, i, s, n) {
                    var a = t(n);
                    if (!a.data("blockUI.isBlocked")) {
                        e.each(function(t, e) {
                            this.parentNode && this.parentNode.removeChild(this)
                        }), i && i.el && (i.el.style.display = i.display, i.el.style.position = i.position, i.el.style.cursor = "default", i.parent && i.parent.appendChild(i.el), a.removeData("blockUI.history")), a.data("blockUI.static") && a.css("position", "static"), "function" == typeof s.onUnblock && s.onUnblock(n, s);
                        var o = t(document.body),
                            r = o.width(),
                            l = o[0].style.width;
                        o.width(r - 1).width(r), o[0].style.width = l
                    }
                }

                function n(e, i, s) {
                    var n = i == window,
                        o = t(i);
                    if ((e || (!n || h) && (n || o.data("blockUI.isBlocked"))) && (o.data("blockUI.isBlocked", e), s.bindEvents && (!e || s.showOverlay))) {
                        var r = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                        e ? t(document).bind(r, s, a) : t(document).unbind(r, a)
                    }
                }

                function a(e) {
                    if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && h && e.data.constrainTabKey) {
                        var i = f,
                            s = !e.shiftKey && e.target === i[i.length - 1],
                            n = e.shiftKey && e.target === i[0];
                        if (s || n) return setTimeout(function() {
                            o(n)
                        }, 10), !1
                    }
                    var a = e.data,
                        r = t(e.target);
                    return r.hasClass("blockOverlay") && a.onOverlayClick && a.onOverlayClick(e), r.parents("div." + a.blockMsgClass).length > 0 || 0 === r.parents().children().filter("div.blockUI").length
                }

                function o(t) {
                    if (f) {
                        var e = f[!0 === t ? f.length - 1 : 0];
                        e && e.focus()
                    }
                }

                function r(t, e, i) {
                    var s = t.parentNode,
                        n = t.style,
                        a = (s.offsetWidth - t.offsetWidth) / 2 - l(s, "borderLeftWidth"),
                        o = (s.offsetHeight - t.offsetHeight) / 2 - l(s, "borderTopWidth");
                    e && (n.left = a > 0 ? a + "px" : "0"), i && (n.top = o > 0 ? o + "px" : "0")
                }

                function l(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }
                t.fn._fadeIn = t.fn.fadeIn;
                var d = t.noop || function() {},
                    p = /MSIE/.test(navigator.userAgent),
                    c = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
                    u = (document.documentMode, t.isFunction(document.createElement("div").style.setExpression));
                t.blockUI = function(t) {
                    e(window, t)
                }, t.unblockUI = function(t) {
                    i(window, t)
                }, t.growlUI = function(e, i, s, n) {
                    var a = t('<div class="growlUI"></div>');
                    e && a.append("<h1>" + e + "</h1>"), i && a.append("<h2>" + i + "</h2>"), void 0 === s && (s = 3e3);
                    var o = function(e) {
                        e = e || {}, t.blockUI({
                            message: a,
                            fadeIn: void 0 !== e.fadeIn ? e.fadeIn : 700,
                            fadeOut: void 0 !== e.fadeOut ? e.fadeOut : 1e3,
                            timeout: void 0 !== e.timeout ? e.timeout : s,
                            centerY: !1,
                            showOverlay: !1,
                            onUnblock: n,
                            css: t.blockUI.defaults.growlCSS
                        })
                    };
                    o();
                    a.css("opacity");
                    a.mouseover(function() {
                        o({
                            fadeIn: 0,
                            timeout: 3e4
                        });
                        var e = t(".blockMsg");
                        e.stop(), e.fadeTo(300, 1)
                    }).mouseout(function() {
                        t(".blockMsg").fadeOut(1e3)
                    })
                }, t.fn.block = function(i) {
                    if (this[0] === window) return t.blockUI(i), this;
                    var s = t.extend({}, t.blockUI.defaults, i || {});
                    return this.each(function() {
                        var e = t(this);
                        s.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({
                            fadeOut: 0
                        })
                    }), this.each(function() {
                        "static" == t.css(this, "position") && (this.style.position = "relative", t(this).data("blockUI.static", !0)), this.style.zoom = 1, e(this, i)
                    })
                }, t.fn.unblock = function(e) {
                    return this[0] === window ? (t.unblockUI(e), this) : this.each(function() {
                        i(this, e)
                    })
                }, t.blockUI.version = 2.7, t.blockUI.defaults = {
                    message: "<h1>Please wait...</h1>",
                    title: null,
                    draggable: !0,
                    theme: !1,
                    css: {
                        padding: 0,
                        margin: 0,
                        width: "30%",
                        top: "40%",
                        left: "35%",
                        textAlign: "center",
                        color: "#000",
                        border: "3px solid #aaa",
                        backgroundColor: "#fff",
                        cursor: "wait"
                    },
                    themedCSS: {
                        width: "30%",
                        top: "40%",
                        left: "35%"
                    },
                    overlayCSS: {
                        backgroundColor: "#000",
                        opacity: .6,
                        cursor: "wait"
                    },
                    cursorReset: "default",
                    growlCSS: {
                        width: "350px",
                        top: "10px",
                        left: "",
                        right: "10px",
                        border: "none",
                        padding: "5px",
                        opacity: .6,
                        cursor: "default",
                        color: "#fff",
                        backgroundColor: "#000",
                        "-webkit-border-radius": "10px",
                        "-moz-border-radius": "10px",
                        "border-radius": "10px"
                    },
                    iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
                    forceIframe: !1,
                    baseZ: 1e3,
                    centerX: !0,
                    centerY: !0,
                    allowBodyStretch: !0,
                    bindEvents: !0,
                    constrainTabKey: !0,
                    fadeIn: 200,
                    fadeOut: 400,
                    timeout: 0,
                    showOverlay: !0,
                    focusInput: !0,
                    focusableElements: ":input:enabled:visible",
                    onBlock: null,
                    onUnblock: null,
                    onOverlayClick: null,
                    quirksmodeOffsetHack: 4,
                    blockMsgClass: "blockMsg",
                    ignoreIfBlocked: !1
                };
                var h = null,
                    f = []
            }
            "function" == typeof c && c.amd && c.amd.jQuery ? c("blockUI", ["jquery"], t) : t(jQuery)
        }(), c("entities/player-view", ["spp-app", "text!templates/main-template.html", "apps/smart-podcast-player/dss", "entities/news", "entities/progress-bar", "blockUI", "l10n", "translations"], function(t, e) {
            return t.module("Player", function(t, i, s, n, a, o) {
                t.PlayerLayout = n.ItemView.extend({
                    template: o.template(e, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-main-view",
                    events: {
                        "click    .spp-news": "clickNews",
                        "keypress .spp-news": "clickNews",
                        "click    .spp-play-pause-circle": "clickPlay",
                        "keypress .spp-play-pause-circle": "clickPlay",
                        "click    .spp-play-pause": "clickPlay",
                        "keypress .spp-play-pause": "clickPlay",
                        "click    .spp-speed": "clickSpeed",
                        "keypress .spp-speed": "clickSpeed",
                        "click    .spp-button-download": "download",
                        "keypress .spp-button-download": "download",
                        "click    .spp-more": "clickMore",
                        "keypress .spp-more": "clickMore",
                        "click    .spp-sticky-expand": "clickStickyExpand",
                        "keypress .spp-sticky-expand": "clickStickyExpand",
                        "click    .spp-more-show-notes": "clickMoreShowNotes",
                        "keypress .spp-more-show-notes": function(t) {
                            13 == t.which && this.clickMoreShowNotes()
                        },
                        "click    .spp-step-forward": "clickStepForward",
                        "keypress .spp-step-forward": "clickStepForward",
                        "click    .spp-step-back": "clickStepBack",
                        "keypress .spp-step-back": "clickStepBack"
                    },
                    initialize: function() {
                        this.hover = !1;
                        var t = this;
                        a(window).on("resize", function() {
                            t.resize(!1)
                        })
                    },
                    whileplaying: function(t) {
                        var e = t.durationEstimate / 1e3,
                            i = t.position / 1e3;
                        this.progressBarRegion.currentView.progressUpdate(i, e)
                    },
                    clickPlay: function(t) {
                        this.isCursorMoving = !1, this.model.get("isPlaying") ? this.model.set("isPlaying", !1) : this.model.set("isPlaying", !0), a(t.currentTarget).find(".spp-control").focus()
                    },
                    clickSpeed: function(e) {
                        this.isCursorMoving = !1;
                        var i = soundManager.getSoundById("track_" + this.model.cid);
                        null != i && i.loaded && (this.options.isStp ? t.StpController.rotateTrackSpeed(this.options.stpLayout) : t.Controller.rotateTrackSpeed(this.options.sppLayout), a(e.currentTarget).find(".spp-control").focus())
                    },
                    openEmailDialog: function(t) {
                        var e = o.template('<div class="spp-news-region"></div>'),
                            n = .95 * a(window).width();
                        n > 600 && (n = 600), /Edge/.test(navigator.userAgent) && this.$el.closest(".spp-player-layout").find(".spp-main-image").hide();
                        var r = this;
                        a.blockUI({
                            message: e(),
                            blockMsgClass: "spp-news-overlay",
                            css: {
                                width: n + "px"
                            },
                            centerX: !1,
                            centerY: !1,
                            baseZ: 2e5,
                            onOverlayClick: function() {
                                a(".spp-ctct").hide().detach().appendTo(a("body")), a(".spp-shsp-form-9f03c450").hide().detach().appendTo(a("body")), a.unblockUI(), r.$el.closest(".spp-player-layout").find(".spp-main-image").show()
                            }
                        });
                        var l = new s.Marionette.Region({
                            el: a("body").find(".spp-news-region").last()
                        });
                        l.show(new i.News.NewsLayout({
                            model: new s.Model({
                                options: this.options.shortcode_options,
                                playerView: this
                            })
                        })), "dark" === this.options.shortcode_options.style && a(".spp-news-overlay").addClass("spp-news-overlay-dark"), l.currentView.elementsTabbable(!0), "click" == t.type && l.currentView.removeOutlines(), l.currentView.focusFirstControl()
                    },
                    executeFunctionByName: function(t, e) {
                        for (var i = Array.prototype.slice.call(arguments, 2), s = t.split("."), n = s.pop(), a = 0; a < s.length; a++) e = e[s[a]];
                        return e[n].apply(e, i)
                    },
                    clickNews: function(t) {
                        var e = this.model.get("data");
                        "link" == e.email_button_function ? window.open(e.email_link, "_blank") : "javascript" == e.email_button_function ? this.executeFunctionByName(e.email_js_function, window) : this.openEmailDialog(t)
                    },
                    clickStickyExpand: function(t) {
                        var e = this.model.get("data"),
                            i = this.$el.closest(".smart-track-player"),
                            s = this.$(".spp-show-logo").children();
                        s = s.add(this.$(".spp-show-logo"));
                        var n = this;
                        if (i.hasClass("spp-sticky-expanded")) l = i.outerHeight() - 80, "top" == e.position ? i.animate({
                            top: -l + "px"
                        }, 400, function() {
                            n.makeStickyCollapsed(n)
                        }) : i.animate({
                            bottom: -l + "px"
                        }, 400, function() {
                            n.makeStickyCollapsed(n)
                        });
                        else {
                            i.addClass("spp-stp-mobile"), i.removeClass("spp-stp-desktop"), i.addClass("spp-sticky-expanded"), i.removeClass("spp-sticky-collapsed");
                            var o = (this.el, this.$el.hasClass("spp-no-image") ? 430 : 730),
                                r = Math.min(.9 * a(window).height(), o) - 55 - 160;
                            r -= this.$(".spp-artist-and-title").outerHeight(), a(window).height() <= 550 && (r += 10), r > 20 ? (this.$(".spp-show-logo").cssExtended("display", "", AP_Player.importantStr), s.each(function() {
                                a(this).cssExtended("height", r + "px", AP_Player.importantStr), a(this).cssExtended("width", r + "px", AP_Player.importantStr)
                            })) : this.$(".spp-show-logo").cssExtended("display", "none", AP_Player.importantStr);
                            var l = i.outerHeight() - 80;
                            "top" == e.position ? (i.css("top", -l + "px"), i.animate({
                                top: 0
                            }, 500)) : (i.css("bottom", -l + "px"), i.animate({
                                bottom: 0
                            }, 500))
                        }
                    },
                    makeStickyCollapsed: function(t) {
                        var e = this.model.get("data"),
                            i = t.$el.closest(".smart-track-player"),
                            s = t.$(".spp-show-logo").children();
                        s = s.add(t.$(".spp-show-logo")), "top" == e.position ? i.css("top", 0) : i.css("bottom", 0), i.removeClass("spp-stp-mobile"), i.addClass("spp-stp-desktop"), i.removeClass("spp-sticky-expanded"), i.addClass("spp-sticky-collapsed"), t.$(".spp-show-logo").cssExtended("display", "", AP_Player.importantStr), s.each(function() {
                            a(this).cssExtended("height", "", AP_Player.importantStr), a(this).cssExtended("width", "", AP_Player.importantStr)
                        })
                    },
                    clickMore: function(t) {
                        for (var e = this.model.get("data"), n = [e.download, e.social], r = !1, l = 0; l < n.length; l++) n[l] && "false" !== n[l] && (r = !0);
                        if (e._subscribe_any && (r = !0), !r) return void i.trigger("toggleEpisodeDetails", this.options.sppLayout, "click" == t.type);
                        var d = this.$el.parents(".spp-player-layout"),
                            p = this.$el;
                        if (e.isSticky) {
                            var c = o.template('<div class="spp-dsst-region"></div>'),
                                u = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                                h = Math.min(70, .12 * u) / 2,
                                f = Math.min(70, .12 * u) + 29,
                                m = o.range(h, 600, f),
                                g = o.findLastIndex(m, function(t) {
                                    return t <= u
                                }),
                                v = m[g],
                                y = (a(window).width() - v) / 2,
                                w = "dark" == e.style ? "#111" : "#aaa",
                                b = "dark" == e.style ? "#111" : "#FFF";
                            a.blockUI({
                                message: c({
                                    data: e
                                }),
                                css: {
                                    border: "1px solid " + w,
                                    backgroundColor: b,
                                    cursor: "default",
                                    "border-radius": "5px",
                                    color: "inherit",
                                    width: v + "px",
                                    left: y + "px",
                                    top: "10%"
                                },
                                overlayCSS: {
                                    opacity: .9
                                },
                                centerX: !1,
                                centerY: !1,
                                onOverlayClick: function() {
                                    a.unblockUI()
                                }
                            });
                            var _ = new s.Marionette.Region({
                                el: a(".spp-dsst-region").last()
                            })
                        } else {
                            var c = o.template('<div class="spp-dss-region"></div>');
                            d.block({
                                message: c({
                                    data: e
                                }),
                                css: {
                                    left: .05 * p.width() + "px",
                                    width: .9 * p.width() + "px",
                                    bottom: e.isCurrentlyStpDesktop ? "0" : "25px",
                                    top: "auto",
                                    border: "1px solid #aaa",
                                    cursor: "default",
                                    "border-radius": "5px",
                                    color: "inherit"
                                },
                                centerX: !1,
                                centerY: !1,
                                baseZ: 500,
                                onOverlayClick: function() {
                                    d.unblock()
                                }
                            });
                            var _ = new s.Marionette.Region({
                                el: d.find(".spp-dss-region").last()
                            })
                        }
                        _.show(new i.Dss.DssLayout({
                            model: this.model
                        })), _.currentView.elementsTabbable(!0), "click" == t.type && _.currentView.removeOutlines(), _.currentView.focusFirstControl()
                    },
                    clickMoreShowNotes: function(t) {
                        i.trigger("toggleEpisodeDetails", this.options.sppLayout, "click" == t.type)
                    },
                    clickStepBack: function() {
                        var t = soundManager.getSoundById("track_" + this.model.cid);
                        t.setPosition(t.position - 15e3)
                    },
                    clickStepForward: function(t) {
                        var e = soundManager.getSoundById("track_" + this.model.cid);
                        e.setPosition(e.position + 6e4)
                    },
                    seek: function(t) {
                        var e = "track_" + this.model.cid;
                        this.model.get("isPlaying") || (soundManager.pauseAll(), this.model.set("isPlaying", !0));
                        var i = soundManager.getSoundById(e);
                        i.setPosition(t * i.durationEstimate)
                    },
                    seekSeconds: function(t) {
                        var e = "track_" + this.model.cid;
                        this.model.get("isPlaying") || (soundManager.pauseAll(), this.model.set("isPlaying", !0)), soundManager.getSoundById(e).setPosition(1e3 * t)
                    },
                    download: function(t) {
                        this.isCursorMoving = !1, t.preventDefault();
                        var e = this.model.get("data"),
                            i = e.download_url,
                            s = e.download_id;
                        if ("https:" === location.protocol && (i = i.replace(/^http:\/\//i, "https://")), "soundcloud" == e.method) var n = i.includes("?") ? "&" : "?",
                            a = i + n + "consumer_key=" + AP_Player.soundcloudConsumerKey;
                        else var a = AP_Player.homeUrl + "/?spp_download=" + s;
                        /iPhone|iPad|iPod/i.test(navigator.userAgent) ? window.open(i, "_blank") : "soundcloud" == e.method ? window.location = a : this.$(".spp-downloader").prop("src", a)
                    },
                    animateStpEllipsis: function() {
                        if (this.$(".spp-loading-ellipsis").length > 0) {
                            var t = this,
                                e = 0;
                            this.loading_timer = setInterval(function() {
                                e++;
                                var i = new Array(5);
                                try {
                                    i.fill("&nbsp;"), i.fill(".", 0, e % 5 + 1), t.$(".spp-loading-ellipsis").html(i.join(""))
                                } catch (t) {}
                            }, 300)
                        }
                    },
                    resize: function(t) {
                        var e = this.model.get("data");
                        e.isSticky && this.makeStickyCollapsed(this), null !== e.show_logo && void 0 !== e.show_logo || this.$el.closest(".smart-track-player").addClass("spp-no-image");
                        var i = ("mobile" === e.view || window.innerWidth <= 768) && !e.isSticky;
                        if (e.isCurrentlyStpDesktop = e.isStp && !i, e.isStp && i && !e.isSticky && (this.$el.closest(".smart-track-player").removeClass("spp-stp-desktop").addClass("spp-stp-mobile"), "dark" === e.style && this.$el.closest(".smart-track-player").addClass("smart-podcast-player-dark"), this.$(".spp-top-matter").cssExtended("width", "", AP_Player.importantStr), this.$(".spp-progress-bar").cssExtended("width", "100%", AP_Player.importantStr), this.$(".spp-progress-bar").cssExtended("left", "", AP_Player.importantStr), this.$(".spp-artist-and-title").cssExtended("width", "", AP_Player.importantStr), null === e.show_logo || void 0 === e.show_logo ? (this.$(".spp-show-logo").cssExtended("display", "none", AP_Player.importantStr), this.$el.closest(".smart-track-player").cssExtended("height", "262px", AP_Player.importantStr)) : this.$el.closest(".smart-track-player").cssExtended("height", "372px", AP_Player.importantStr), e.artist || "none" !== e.email_portal ? this.$el.find(".spp-track-title").cssExtended("max-height", "3.0em", AP_Player.importantStr) : this.$el.find(".spp-track-title").cssExtended("max-height", "4.5em", AP_Player.importantStr)), e.isStp && !i && !e.isSticky) {
                            if (this.$el.closest(".smart-track-player").addClass("spp-stp-desktop").removeClass("spp-stp-mobile"), this.$el.closest(".smart-track-player").cssExtended("height", "", AP_Player.importantStr), null === e.show_logo || void 0 === e.show_logo);
                            else {
                                var s = "calc(100% - 100px)",
                                    n = /MSIE 10.0;/.test(navigator.userAgent);
                                n && (s = this.$el.parent().width() - 100 + "px", this.$(".spp-top-matter").cssExtended("left", "100px", AP_Player.importantStr), this.$(".spp-artist-and-title").cssExtended("height", "50px", AP_Player.importantStr)), this.$(".spp-top-matter").cssExtended("width", s, AP_Player.importantStr), this.$(".spp-progress-bar").cssExtended("width", s, AP_Player.importantStr), this.$(".spp-progress-bar").cssExtended("left", "100px", AP_Player.importantStr)
                            }
                            var a = 110;
                            if ("false" !== e.download && (a += 39), ("false" !== e.social || !1 !== e.subscribe && e._subscribe_any) && (a += 39), "false" === e.download && "false" === e.share || (a += 10), this.$(".spp-artist-and-title").cssExtended("width", "calc(100% - " + a + "px)", AP_Player.importantStr), "none" !== e.email_portal) {
                                var o = this.$(".spp-news").outerWidth();
                                o += 10, this.$(".spp-stpd-artist").cssExtended("width", "calc(100% - " + o + "px)", AP_Player.importantStr), this.$(".spp-stpd-track-title").cssExtended("width", "calc(100% - " + o + "px)", AP_Player.importantStr)
                            }
                            this.$(".spp-top-matter").cssExtended("position", "absolute", AP_Player.importantStr)
                        }
                        if (e.isStp && e.isSticky)
                            if (null !== e.show_logo && void 0 !== e.show_logo || this.$(".spp-artist-and-title").cssExtended("margin-left", "10px", AP_Player.importantStr), window.innerWidth <= 768) {
                                this.$(".spp-top-matter").cssExtended("width", "", AP_Player.importantStr);
                                var r = this.el.clientHeight;
                                r -= 356, this.$(".spp-show-logo").cssExtended("height", r + "px", AP_Player.importantStr), this.$(".spp-show-logo").cssExtended("width", r + "px", AP_Player.importantStr)
                            } else if (this.$(".spp-show-logo").cssExtended("height", "", AP_Player.importantStr), this.$(".spp-show-logo").cssExtended("width", "", AP_Player.importantStr), null === e.show_logo || void 0 === e.show_logo) {
                            var s = "calc(100% - 110px)";
                            this.$(".spp-artist-and-title").cssExtended("width", s, AP_Player.importantStr), this.$(".spp-artist-and-title").cssExtended("width", "", AP_Player.importantStr)
                        } else {
                            var s = "calc(100% - 80px)",
                                n = /MSIE 10.0;/.test(navigator.userAgent);
                            n && (s = this.$el.parent().width() - 80 + "px", this.$(".spp-top-matter").cssExtended("left", "80px", AP_Player.importantStr)), this.$(".spp-top-matter").cssExtended("width", s, AP_Player.importantStr)
                        }
                        if (e.isStp) {
                            var l = /Version\/10\..(\..)? Safari/.test(navigator.userAgent);
                            if (l) {
                                var d = this.$el.find(".spp-marquee");
                                d.css("animation-play-state", "paused")
                            }
                            var p = this.$el.find(".spp-artist-first-container").children()[0],
                                c = this.$el.find(".spp-stpd-artist")[0],
                                u = p && p.offsetWidth > c.clientWidth;
                            "off" !== e.marquee && u ? (this.$el.find(".spp-artist-first-container").addClass("spp-marquee"), this.$el.find(".spp-artist-second-container").addClass("spp-marquee")) : (this.$el.find(".spp-artist-first-container").removeClass("spp-marquee"), this.$el.find(".spp-artist-second-container").removeClass("spp-marquee"));
                            var h = this.$el.find(".spp-track-title-first-container").children()[0],
                                f = this.$el.find(".spp-stpd-track-title")[0],
                                m = h && h.offsetWidth > f.clientWidth;
                            if ("off" !== e.marquee && m ? (this.$el.find(".spp-track-title-first-container").addClass("spp-marquee"), this.$el.find(".spp-track-title-second-container").addClass("spp-marquee")) : (this.$el.find(".spp-track-title-first-container").removeClass("spp-marquee"), this.$el.find(".spp-track-title-second-container").removeClass("spp-marquee")), l) {
                                var g = this;
                                setTimeout(function() {
                                    d.css("animation-play-state", "running")
                                }, 500), this.isFirstResize = !0, setTimeout(function() {
                                    g.isFirstResize && (g.resize(!1), g.isFirstResize = !1)
                                }, 250)
                            }
                        }
                        e.isStp || (this.setCircleSize(), this.setTruncatedShowNotes(), this.setTitleClamp())
                    },
                    setCircleSize: function() {
                        var t = .16 * this.$el.width();
                        if ("number" == typeof t) {
                            t < 20 && (t = 20), t > 70 && (t = 70);
                            var e = this.$el.find(".spp-play-pause-circle");
                            e.cssExtended("width", t + "px", "important"), e.cssExtended("height", t + "px", "important"), e.cssExtended("top", t / 5 + "px", "important")
                        }
                    },
                    setTruncatedShowNotes: function() {
                        var t = this.$el.height() - this.$el.find(".spp-top-matter").height() - this.$el.find(".spp-main-separator").outerHeight(!0) - this.$el.find(".spp-tag-list").outerHeight(!0) - this.$el.find(".spp-controls").outerHeight(!0),
                            e = this.$el.find(".spp-truncated-show-notes").width(),
                            i = this.model.get("data"),
                            s = ' <span class="spp-control spp-more-show-notes" tabindex="0"><u>' + "more".toLocaleString() + "</u></span>";
                        r(i.truncated_show_notes_700 + s, "16px Roboto", e) < t ? this.$el.find(".spp-truncated-show-notes").html(i.truncated_show_notes_700 + s) : r(i.truncated_show_notes_560 + s, "16px Roboto", e) < t ? this.$el.find(".spp-truncated-show-notes").html(i.truncated_show_notes_560 + s) : r(i.truncated_show_notes_420 + s, "16px Roboto", e) < t ? this.$el.find(".spp-truncated-show-notes").html(i.truncated_show_notes_420 + s) : r(i.truncated_show_notes_280 + s, "16px Roboto", e) < t ? this.$el.find(".spp-truncated-show-notes").html(i.truncated_show_notes_280 + s) : this.$el.find(".spp-truncated-show-notes").html(i.truncated_show_notes_140 + s)
                    },
                    setTitleClamp: function() {
                        this.model.get("data").show_name ? this.$el.find(".spp-track-title").cssExtended("max-height", "3.0em", AP_Player.importantStr) : this.$el.find(".spp-track-title").css("max-height", "")
                    },
                    isSoundLoaded: function() {
                        var t = soundManager.getSoundById("track_" + this.model.cid);
                        return !(null === t || void 0 === t || !t.loaded)
                    },
                    getSoundDurationEstimate: function() {
                        var t = soundManager.getSoundById("track_" + this.model.cid);
                        return null != t && void 0 !== t ? null !== t.duration ? t.duration : t.durationEstimate : null
                    },
                    getProgressPercent: function() {
                        var t = soundManager.getSoundById("track_" + this.model.cid);
                        return t ? t.position / t.durationEstimate * 100 : 0
                    },
                    onRender: function() {
                        var t = this;
                        this.progressBarRegion = new s.Marionette.Region({
                            el: this.$el.find(".spp-progress-bar-region").last()
                        }), this.progressBarRegion.show(new i.ProgressBar.ProgressBarLayout({
                            model: new s.Model({
                                data: {
                                    parentView: t,
                                    shortcode_options: this.options.shortcode_options
                                }
                            })
                        })), this.listenTo(this.model, "updateTime", this.timeUpdated);
                        var e = this.model.get("data");
                        if (!e.isStp && "false" !== e.shortcode_options.show_tags) {
                            for (var n = "", o = 0; o < e.tags.length; o++) n += '<li class="spp-tag">' + e.tags[o] + "</li>";
                            this.$(".spp-tag-list").html(n)
                        }
                        var r = this.options.shortcode_options;
                        if (!e.isStp && 0 == r.hide_listens) {
                            var l = i.request("tracks:get", this.options.sppLayout),
                                d = l.totalPlaybackCount();
                            if (d) {
                                var p = d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " Listens";
                                "" != e.show_name && void 0 !== e.show_name && (p = " • " + p), this.$(".spp-show-count").text(p)
                            }
                        }
                        this.model.set("isPlaying", !1), this.model.set("speed", 1);
                        var c = /MSIE (\d+\.\d+);/.test(navigator.userAgent) || 1 == !!document.documentMode;
                        if (c && this.$(".spp-controls").children().each(function() {
                                a(this).hasClass("spp-play-pause-circle") || a(this).cssExtended("height", "70px", AP_Player.importantStr)
                            }), e.isStp && "false" == e.download && "false" == e.social && "false" == e.subscribe && this.$(".spp-more svg").cssExtended("display", "none", AP_Player.importantStr), e.isStp && "blurred_logo" === e.background_type && e.show_logo) {
                            var c = /MSIE (\d+\.\d+);/.test(navigator.userAgent) || 1 == !!document.documentMode,
                                u = /Edge\//.test(navigator.userAgent);
                            c || u || (this.$(".spp-stpd-main-image").append('<img src="' + e.show_logo + '"/>'), this.$(".spp-stpm-main-image").append('<img src="' + e.show_logo + '"/>'), this.$(".spp-main-image").append('<img src="' + e.show_logo + '"/>'))
                        }
                        e.isSticky && this.$(".spp-controls").addClass("spp-sticky"), this.resize(!0)
                    },
                    onShow: function() {
                        this.resize(!1)
                    },
                    updateSpeedControl: function() {
                        this.$el.removeClass("spp-speeding-050"), this.$el.removeClass("spp-speeding-075"), this.$el.removeClass("spp-speeding-125"), this.$el.removeClass("spp-speeding-150"), this.$el.removeClass("spp-speeding-175"), this.$el.removeClass("spp-speeding-200"), this.$el.removeClass("spp-speeding-300");
                        var t = this.model.get("speed");.5 == t ? this.$el.addClass("spp-speeding-050") : .75 == t ? this.$el.addClass("spp-speeding-075") : 1.25 == t ? this.$el.addClass("spp-speeding-125") : 1.5 == t ? this.$el.addClass("spp-speeding-150") : 1.75 == t ? this.$el.addClass("spp-speeding-175") : 2 == t ? this.$el.addClass("spp-speeding-200") : 3 == t && this.$el.addClass("spp-speeding-300")
                    }
                })
            }), t.on("changeEpisodePlaying", function(t, e) {
                var i = t.mainRegion.currentView;
                if (i) {
                    i.model.get("isPlaying") ? (i.$el.addClass("spp-playing"), i.$(".spp-play").attr("aria-label", "Pause")) : (i.$el.removeClass("spp-playing"), i.$(".spp-play").attr("aria-label", "Play"))
                }
            }), t.on("changeSpeed", function(t, e) {
                var i = t.mainRegion.currentView;
                i && i.updateSpeedControl()
            }), t.reqres.setHandler("currentTrack", function(t) {
                var e = t.mainRegion.currentView;
                if (e) return e.model
            }), t.Player.PlayerLayout
        }), c("apps/smart-track-player/stp-controller", ["spp-app", "entities/track-model", "entities/player-view", "soundmanager2"], function(t, e) {
            return t.module("Player", function(t, i, s, a, o, r) {
                t.StpLayout = a.Layout.extend({
                    template: r.template('<div class="spp-main-region"></div>'),
                    className: "spp-player-layout",
                    regions: {
                        mainRegion: ".spp-main-region"
                    },
                    initialize: function() {
                        this.isMouse = !1, this.isStp = !0
                    },
                    events: {
                        "mousedown .spp-control": function() {
                            this.isMouse || (this.isMouse = !0, this.$el.find(".spp-control").each(function() {
                                this.classList && this.classList.add("spp-no-outline")
                            }), this.$el.find(".spp-episode-details-body").addClass("spp-no-outline"))
                        },
                        "keydown .spp-control": function(t) {
                            this.isMouse && 9 == t.which && 0 == t.altKey && (this.isMouse = !1, this.$el.find(".spp-control").each(function() {
                                this.classList && this.classList.remove("spp-no-outline")
                            }), this.$el.find(".spp-episode-details-body").removeClass("spp-no-outline"))
                        }
                    },
                    userTriggers: []
                }), t.StpController = {
                    init: function() {
                        var a = function(t, e) {
                                var i = "";
                                if (t) {
                                    var s = encodeURIComponent(t.replace(/&amp;/g, "&").replace(/&quot;/g, '"'));
                                    i = "?subject=" + s
                                } else i = "?subject=A podcast for you";
                                return i += "&amp;body=Hi,%0D%0A%0D%0AI thought you might enjoy this podcast:%0D%0A%0D%0A", t && (i += s + "%0D%0A"), i += e || window.location.href, i += "%0D%0A%0D%0AEnjoy!"
                            },
                            l = [];
                        if (o(".smart-track-player-container").each(function(i, d) {
                                var p = o(d);
                                void 0 !== window['SmartPodcastPlayer_uid_9f03c450'] && (SmartPodcastPlayer._options['9f03c450'] = window['SmartPodcastPlayer_uid_9f03c450'].options, SmartPodcastPlayer._shortcode_options['9f03c450'] = window['SmartPodcastPlayer_uid_9f03c450'].shortcode_options, window['SmartPodcastPlayer_uid_9f03c450'] = void 0), void 0 === SmartPodcastPlayer._options['9f03c450'] && n("SmartPodcastPlayer_uid_" + c + " not found.");
                                for (var f = 0; f < [].length; f++) n([][f]);
                                void 0 === SmartPodcastPlayer._options['9f03c450']['method'] && (SmartPodcastPlayer._options['9f03c450']['method'] = 'file');
                                var v = SmartPodcastPlayer._options['9f03c450'];
                                v.shortcode_options = v, v.isStp = !0, v.title_shortcode = v.title, "number" == typeof v.title_shortcode && (v.title_shortcode = v.title_shortcode.toString()), v.email = a(v.title_shortcode, v.permalink), v._subscription_services = u, v._subscribe_any = !1, r.forEach(u, function(t) {
                                    val = v["subscribe_" + t[0]], val && "false" !== val && (v._subscribe_any = !0)
                                });
                                var y = void 0 !== v.latest;
                                if (y) v.feed_url = v.feed_url;
                                else {
                                    v.url = v.url, v.download_url = v.url;
                                    var w = document.createElement("a");
                                    w.href = v.url || v.feed_url;
                                    w.hostname.indexOf("soundcloud.com") > -1 && (v.method = "soundcloud")
                                }(y || "soundcloud" == v.method || "file" == v.method && (void 0 == v.title_shortcode || "" == v.title_shortcode)) && (v.title = 'Getting file data<span class="spp-loading-ellipsis">...</span>'), v.playing = !1, v.isStp = !0, v.isSticky = true;
                                var b = new t.StpLayout;
                                o(d).removeClass("smart-track-player-container"), o(d).addClass("smart-track-player"), v.isSticky && (o(d).addClass("spp-sticky"), "top" == v.position && o(d).addClass("spp-sticky-top")), new s.Marionette.Region({
                                    el: o(d)
                                }).show(b);
                                var _ = new e.Track({
                                    data: v
                                });
                                _.setLayout(b);
                                var k = new t.PlayerLayout({
                                    model: _,
                                    stpLayout: b,
                                    shortcode_options: v.shortcode_options,
                                    isStp: !0
                                });
                                k.render(), b.mainRegion.show(k), k.resize(!0), k.animateStpEllipsis(), SmartPodcastPlayer_uid_9f03c450 = b, "elapsed" === v.email_cta_open ? SmartPodcastPlayer.onTimeElapsed(function() {
                                    this.find(".spp-news").click()
                                }, v.email_cta_elapsed_seconds, '9f03c450') : "remaining" === v.email_cta_open && SmartPodcastPlayer.onTimeRemaining(function() {
                                    this.find(".spp-news").click()
                                }, v.email_cta_remaining_seconds, '9f03c450'), y ? (v.ajax_type = "latest", l.push({
                                    data: v
                                })) : "soundcloud" == v.method ? (v.ajax_type = "soundcloud", l.push({
                                    data: v
                                })) : void 0 != v.title_shortcode && "" != v.title_shortcode || (v.ajax_type = "file", l.push({
                                    data: v
                                })), v.isSticky && "top" == v.position && o("body.spp").prepend(o(".spp-sticky-bumper"))
                            }), l.length > 0) {
                            var d = l.map(function(t) {
                                    return t.data.url
                                }),
                                c = l.map(function(t) {
                                    return t.data.ajax_type
                                }),
                                h = {
                                    action: "get_stp_tracks_new",
                                    urls: d,
                                    uids: '9f03c450',
                                    types: c
                                };
                            o.ajax({
                                url: AP_Player.ajaxurl,
                                dataType: "json",
                                async: !0,
                                type: "POST",
                                data: h,
                                success: function(t) {
                                    i(t)
                                }
                            })
                        }
                    },
                    rotateTrackSpeed: function(t) {
                        var e = t.mainRegion.currentView.model,
                            i = e.get("speed");
                        e.get("isPlaying") || e.set("isPlaying", !0), .5 == i ? e.set("speed", .75) : .75 == i ? e.set("speed", 1) : 1 == i ? e.set("speed", 1.25) : 1.25 == i ? e.set("speed", 1.5) : 1.5 == i ? e.set("speed", 1.75) : 1.75 == i ? e.set("speed", 2) : 2 == i ? e.set("speed", 3) : 3 == i ? e.set("speed", .5) : e.set("speed", 1)
                    }
                }, i.on("changeEpisodePlaying", function(t, e) {
                    var i = t.mainRegion.currentView;
                    if (i && t.isStp) {
                        var s = "track_" + i.model.cid,
                            n = soundManager.getSoundById(s);
                        if (e.get("isPlaying"))
                            if (n) n.paused ? soundManager.resume(s) : soundManager.play(s);
                            else {
                                var a = i.model.get("data");
                                if (a.url.toLowerCase().includes("soundcloud.com")) var o = a.url.includes("?") ? "&" : "?",
                                    r = a.url + o + "consumer_key=" + AP_Player.soundcloudConsumerKey;
                                else var r = a.url;
                                n = soundManager.createSound({
                                    id: s,
                                    url: r,
                                    whileplaying: function() {
                                        i.whileplaying(this)
                                    },
                                    onload: function() {
                                        for (var e = 0; e < t.userTriggers.length; e++) {
                                            var i = t.userTriggers[e];
                                            if (void 0 === i.episode || i.episode === a.episode_number)
                                                if ("elapsed" === i.type) {
                                                    var s = 1e3 * i.seconds;
                                                    this.onPosition(s, i.callback, t.$el)
                                                } else if ("remaining" === i.type) {
                                                var s = n.durationEstimate - 1e3 * i.seconds;
                                                this.onPosition(s, i.callback, t.$el)
                                            }
                                        }
                                    },
                                    onfinish: function() {
                                        e.set("isPlaying", !1)
                                    }
                                }), soundManager.play(s)
                            } else n && soundManager.pause(s)
                    }
                }), i.on("changeSpeed", function(t, e) {
                    var i = "track_" + e.cid,
                        s = soundManager.getSoundById(i),
                        n = e.get("speed");
                    s && s.isHTML5 && (s._a.playbackRate = n)
                })
            }), t.Player.StpController
        }), c("text!templates/spp-template.html", [], function() {
            return '<div class="spp-tabs">\r\n\t<div class="spp-tab spp-tab-episodes">\r\n\t\t<div><%="Episodes".toLocaleString()%></div>\r\n\t</div>\r\n\t<div class="spp-tab spp-tab-now-playing spp-tab-active">\r\n\t\t<div><%="Now Playing".toLocaleString()%></div>\r\n\t</div>\r\n\t<div class="spp-tab spp-tab-details">\r\n\t\t<div><%="Details".toLocaleString()%></div>\r\n\t</div>\r\n</div>\r\n<div class="spp-tab-wrap spp-tab-wrap-center">\r\n\t<div class="spp-main-image"></div>\r\n\t<div class="spp-main-region"></div>\r\n\t<div class="spp-playlist-region"></div>\r\n\t<div class="spp-episode-details-region spp-off-to-right"></div>\r\n</div>\r\n '
        }), c("entities/playlist-model", ["spp-app", "entities/track-model"], function(t) {
            t.module("Entities", function(t, e, i, a, o, r) {
                var l = [];
                t.Tracks = i.Collection.extend({
                    model: t.Track,
                    initialize: function() {
                        this._currentPage = 1, this._tracksPerPage = 10, this._moreTracksComing = !1
                    },
                    comparators: {
                        newest: function(t) {
                            return -t.get("id")
                        },
                        oldest: function(t) {
                            return t.get("id")
                        },
                        mostPopular: function(t) {
                            return -t.get("playback_count")
                        },
                        leastPopular: function(t) {
                            return t.get("playback_count")
                        }
                    },
                    getCurrentPage: function() {
                        return this._currentPage
                    },
                    setCurrentPage: function(t) {
                        this._currentPage = t
                    },
                    getPageOfTracks: function() {
                        var e, i = new Array,
                            s = (this._currentPage - 1) * this._tracksPerPage,
                            n = this._currentPage * this._tracksPerPage;
                        return e = this.searchedTracks ? this.searchedTracks.models : this.models, o.each(e, function(t, e) {
                            t >= s && t < n && i.push(e)
                        }), new t.Tracks(i)
                    },
                    setComparator: function(t) {
                        return this.comparator = this.comparators[t], this
                    },
                    totalPlaybackCount: function() {
                        return void 0 === this.cached_playback_count && (this.cached_playback_count = this.models.reduce(function(t, e) {
                            var i = e.get("data");
                            return "number" == typeof i.playback_count ? t + i.playback_count : t
                        }, 0)), this.cached_playback_count
                    },
                    getNextTrack: function(t) {
                        var e;
                        e = this.searchedTracks ? this.searchedTracks.models : this.models;
                        var i = e.indexOf(t);
                        return e.length > i + 1 ? e[i + 1] : null
                    },
                    reverseSortOrder: function() {
                        this.models = this.models.reverse(), this.searchedTracks && (this.searchedTracks.models = this.searchedTracks.models.reverse())
                    },
                    searchTracks: function(e) {
                        if ("" == e) return void(this.searchedTracks = null);
                        var i = this.filter(function(t) {
                            var i = t.get("data");
                            return i.title.toLowerCase().indexOf(e.toLowerCase()) >= 0 || i.tag_list.toLowerCase().indexOf('"' + e.toLowerCase() + '"') >= 0
                        });
                        this.searchedTracks = new t.Tracks(i)
                    },
                    getNumTracks: function() {
                        return this.searchedTracks ? this.searchedTracks.length : this.length
                    },
                    getNumTracksAfterAjax: function() {
                        return this._numTracksAfterAjax
                    },
                    isMoreTracksComing: function() {
                        return this._moreTracksComing
                    }
                });
                var d = function(t, e) {
                        var i = t.model.get("options");
                        o.ajax({
                            url: AP_Player.ajaxurl,
                            dataType: "json",
                            type: "POST",
                            async: !0,
                            data: {
                                action: "get_spplayer_tracks",
                                stream: i.url,
                                episode_limit: i.episode_limit,
                                delay: i.ajax_delay
                            },
                            success: h,
                            invokeData: {
                                Layout: t,
                                playerRegion: e
                            }
                        })
                    },
                    c = function(t) {
                        o(t.el[0]).cssExtended("background-image", "none", AP_Player.importantStr)
                    },
                    h = function(t) {
                        f(t, this.invokeData.Layout, this.invokeData.playerRegion, t.length, !1)
                    },
                    f = function(i, a, d, p, h) {
                        if (0 == i.length || "object" == typeof i && i.error_data) return n("Could not retrieve data from the feed.  Check to ensure the feed is valid."), void c(d);
                        var f, m, g, v = (a.model.get("region"), a.model.get("options")),
                            y = '9f03c450',
                            w = a.model.attributes.options.sort;
                        void 0 === l[y] ? (m = !0, f = new Array) : (m = !1, f = l[y].models), "oldest" == w ? (i.reverse(), g = 1) : g = p;
                        var b = f.length;
                        o.each(i, function(e, i) {
                            if (b > 0) return b--, "oldest" == w ? g++ : g--, !0;
                            var n = /(?:[^\s"]+|"[^"]*")+/g;
                            if (void 0 !== i.tag_list && "" != i.tag_list.trim()) {
                                var o = i.tag_list.match(n);
                                o = o.join(",").replace(/\"|\"|\"|\"/g, ""), i.tag_string = o, o = o.split(","), i.tags = o
                            } else i.tags = new Array;
                            var l = Math.ceil(i.duration / 1e3),
                                d = Math.floor(l / 60),
                                p = Math.floor(d / 60),
                                c = p,
                                h = d % 60,
                                m = l % 60;
                            if (i.duration_time = c + ":" + s(h, 2) + ":" + s(m, 2), i.playing = !1, i.paid = v.paid, "" != v.numbering) {
                                var y = v.numbering,
                                    _ = (y.split("#").length, new RegExp("[#]{1,10}")),
                                    k = y.replace(_, "([0-9]{0,4})"),
                                    x = i.title.match(k);
                                x && (i.episode_number = x[1]);
                                var P = new RegExp(k, "g");
                                i.title_without_episode_number = i.title.replace(P, "")
                            } else i.title_without_episode_number = i.title, i.episode_number = g;
                            i.shortcode_options = v, i.show_episode_numbers = v.show_episode_numbers, i.download = v.download, i.social = v.social, i.social_twitter = v.social_twitter, i.social_facebook = v.social_facebook, i.social_gplus = v.social_gplus, i.social_linkedin = v.social_linkedin, i.social_stumble = v.social_stumble, i.social_pinterest = v.social_pinterest, i.social_email = v.social_email, i._subscribe_any = !1, i._subscription_services = u, r.forEach(u, function(t) {
                                val = v["subscribe_" + t[0]], i["subscribe_" + t[0]] = val, val && "false" !== val && (i._subscribe_any = !0)
                            }), i.poweredby = v.poweredby, i.email_button_function = v.email_button_function, i.email_link = v.email_link, i.email_js_function = v.email_js_function, void 0 === v.show_image || "default" === v.show_image ? i.show_logo = i.artwork_url : i.show_logo = v.show_image, i.show_name = v.show_name, i.hashtag = v.hashtag, i.twitter_username = v.twitter_username, i.tweet_text = v.tweet_text, v.permalink ? i.permalink = v.permalink : i.permalink = i.permalink_url, i.email = "?subject=" + encodeURIComponent(i.title.replace(/&amp;/g, "&")), i.email += "&amp;body=Hi,%0D%0A%0D%0AI thought you might enjoy this ", void 0 !== i.show_name ? i.email += "episode of " + encodeURIComponent(i.show_name.replace(/&amp;/g, "&")) + ":%0D%0A%0D%0A" : i.email += "podcast:%0D%0A%0D%0A", i.email += encodeURIComponent(i.title.replace(/&amp;/g, "&")) + "%0D%0A", i.permalink ? i.email += i.permalink : i.email += window.location.href, i.email += "%0D%0A%0D%0AEnjoy!", i.permalink_url.indexOf("soundcloud.com") > 0 ? i.method = "soundcloud" : i.method = "file";
                            var S = /\n/g;
                            if ("soundcloud" == i.method) {
                                i.show_notes = "<p>" + i.description + "</p>", i.show_notes = i.show_notes.replace(S, "</p><p>");
                                var C = /<p>\s*<\/p>/g;
                                i.show_notes = i.show_notes.replace(C, "")
                            } else i.show_notes = i.description;
                            i.stream_url = i.stream_url.indexOf("&") > -1 ? i.stream_url.slice(0, i.stream_url.indexOf("&")) : i.stream_url;
                            var M = {
                                    data: i
                                },
                                T = new t.Track(M),
                                A = T.get("data");
                            A.cid = T.cid, T.set({
                                data: A
                            }), T.setLayout(a), f.push(T), "oldest" == w ? g++ : g--
                        }), l[y] = new t.Tracks(f), h && (l[y]._moreTracksComing = !0), l[y]._numTracksAfterAjax = p, m ? e.trigger("tracksInitialized", a, l[y], d) : e.trigger("tracksAdded", a)
                    };
                return e.reqres.setHandler("tracks:initialize", function(t, e) {
                    var i = t.model.get("options"),
                        s = !0;
                    if ("object" == typeof SmartPodcastPlayer._cached_tracks['9f03c450']) {
                        var n = SmartPodcastPlayer._cached_tracks['9f03c450'],
                            a = parseInt(i.featured_episode, 10),
                            o = !1;
                        "number" != typeof a && (o = !0), isNaN(a), "oldest" == i.sort ? a <= n.tracks.length && (o = !0) : n.numTracks - a < n.tracks.length && (o = !0), o && (n.numTracks == n.tracks.length && (s = !1), f(n.tracks, t, e, n.numTracks, s))
                    }
                    s && d(t, e)
                }), e.reqres.setHandler("tracks:get", function(t) {
                    return l['9f03c450']
                }), e.reqres.setHandler("track:featured", function(t) {
                    var e, i = t.model.get("options"),
                        s = '9f03c450',
                        n = parseInt(i.featured_episode, 10),
                        a = l[s].length;
                    return "number" == typeof n && n > 0 ? (l[s].isMoreTracksComing() && ("oldest" === i.sort ? n > 20 && (n = 0) : n -= l[s].getNumTracksAfterAjax() - 20), n > a && (n = a), e = "oldest" == i.sort ? n - 1 : a - n) : e = 0, l[s].models[e]
                }), e.Entities
            })
        }), c("apps/smart-podcast-player/core", ["spp-app", "text!templates/spp-template.html", "entities/track-model", "entities/playlist-model", "soundmanager2", "l10n", "translations"], function(t, e) {
            return t.module("Core", function(t, i, s, a, o, r) {
                t.FullLayout = a.Layout.extend({
                    template: r.template(e, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-player-layout",
                    regions: {
                        mainRegion: ".spp-main-region",
                        playlistRegion: ".spp-playlist-region",
                        episodeDetailsRegion: ".spp-episode-details-region"
                    },
                    initialize: function() {
                        this.isMouse = !1, this.isStp = !1
                    },
                    events: {
                        "click    .spp-tab-episodes": "tabEpisodes",
                        "keypress .spp-tab-episodes": "tabEpisodes",
                        "click    .spp-tab-details": "tabDetails",
                        "keypress .spp-tab-details": "tabDetails",
                        "click    .spp-tab-now-playing": "tabNowPlaying",
                        "keypress .spp-tab-now-playing": "tabNowPlaying",
                        "mousedown .spp-control": function() {
                            this.isMouse || (this.isMouse = !0, this.$el.find(".spp-control").each(function() {
                                this.classList && this.classList.add("spp-no-outline")
                            }), this.$el.find(".spp-episode-details-body").addClass("spp-no-outline"))
                        },
                        "keydown .spp-control": function(t) {
                            this.isMouse && 9 == t.which && 0 == t.altKey && (this.isMouse = !1, this.$el.find(".spp-control").each(function() {
                                this.classList && this.classList.remove("spp-no-outline")
                            }), this.$el.find(".spp-episode-details-body").removeClass("spp-no-outline"))
                        }
                    },
                    tabEpisodes: function() {
                        this.$el.find(".spp-tab").removeClass("spp-tab-active"), this.$el.find(".spp-tab-episodes").addClass("spp-tab-active"), this.playlistRegion.currentView.triggerMethod("show"), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-right"), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-center"), this.$el.find(".spp-tab-wrap").addClass("spp-tab-wrap-left")
                    },
                    tabDetails: function() {
                        this.$el.find(".spp-tab").removeClass("spp-tab-active"), this.$el.find(".spp-tab-details").addClass("spp-tab-active"), this.episodeDetailsRegion.currentView.render(), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-center"), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-left"), this.$el.find(".spp-tab-wrap").addClass("spp-tab-wrap-right")
                    },
                    tabNowPlaying: function() {
                        this.$el.find(".spp-tab").removeClass("spp-tab-active"), this.$el.find(".spp-tab-now-playing").addClass("spp-tab-active"), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-left"), this.$el.find(".spp-tab-wrap").removeClass("spp-tab-wrap-right"), this.$el.find(".spp-tab-wrap").addClass("spp-tab-wrap-center")
                    },
                    userTriggers: []
                }), t.Controller = {
                    init: function() {
                        o(".smart-podcast-player-container, .smart-podcast-player").each(function(e, a) {
                            if (!o(this).hasClass("smart-podcast-player-container")) return !0;
                            var r = "SPP_" + e,
                                l = o(a).data("uid"),
                                d = "SmartPodcastPlayer_uid_" + l;
                            if (SmartPodcastPlayer._options[l] = SmartPodcastPlayer._options[l] || window[d].options, SmartPodcastPlayer._shortcode_options[l] = SmartPodcastPlayer._shortcode_options[l] || window[d].shortcode_options, window[d].cached_tracks && (SmartPodcastPlayer._cached_tracks[l] = window[d].cached_tracks), window[d] = void 0, SmartPodcastPlayer._errors[l])
                                "false" === sppOptions.spp_branding && o(a).addClass("spp-no-branding");
                            var h = new t.FullLayout({
                                model: new s.Model({
                                    region: r,
                                    options: sppOptions
                                })
                            });
                            SmartPodcastPlayer._by_uid['9f03c450'] = h,
                            o(a).removeClass("smart-podcast-player-container"), o(a).addClass("smart-podcast-player");
                            var f = new s.Marionette.Region({
                                el: o(a)
                            });
                            i.request("tracks:initialize", h, f)
                        })
                    }
                }, i.on("toggleEpisodeDetails", function(t, e) {
                    t.episodeDetailsRegion.$el.hasClass("spp-off-to-right") ? (t.episodeDetailsRegion.currentView.render(), i.trigger("showEpisodeDetails", t, e)) : i.trigger("hideEpisodeDetails", t)
                }), i.on("tracksInitialized", function(t, e, s) {
                    if ((i.trigger("playlist:init", t), i.trigger("episode-details:init", t), i.trigger("player:init", t), s.show(t), s.$el.cssExtended("background-image", "none", AP_Player.importantStr), "blurred_logo" == t.model.get("options").background) && (!/MSIE (\d+\.\d+);/.test(navigator.userAgent) && 1 != !!document.documentMode)) {
                        var n = e.at(0).get("data").show_logo;
                        null !== n && void 0 !== n && "" !== n && t.$el.find(".spp-main-image").append('<img src="' + n + '"/>')
                    }
                })
            }), t.Core.Controller
        }), c("text!templates/episode-details-template.html", [], function() {
            return '<div class="spp-episode-details-header">\r\n\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-more-show-notes" tabindex="0" aria-labelledby="spp-svg-title-back-arrow" role="img" width="22" height="16" viewBox="0 0 22 16">\n  <title id="spp-svg-title-back-arrow">Back to playlist view</title>\n  <path id="Back_Arrow" d="M122.1,11.079H104.254l5.337-5.586a0.863,0.863,0,0,0,0-1.239,0.914,0.914,0,0,0-1.27,0L101,11.973l7.209,7.773a0.913,0.913,0,0,0,1.268,0,0.86,0.86,0,0,0,0-1.238L104.2,12.83H122.1A0.876,0.876,0,1,0,122.1,11.079Z" transform="translate(-101 -4)"/>\n</svg>\n\r\n\t<%="Episode Details".toLocaleString()%>\r\n</div>\r\n\r\n<div class="spp-episode-details-body">\r\n\t<% /* This extra wrapper is required so special characters do not break the layout */ %>\r\n\t<div class="spp-show-notes">\r\n\t\t<%= data.show_notes %>\r\n\t</div>\r\n</div>\r\n\r\n<div class="spp-dss-region">\r\n</div>\r\n'
        }),
        function(t) {
            function e() {
                this === n.elem && (n.pos = [-260, -260], n.elem = !1, a = 3)
            }
            var i, s, n = {
                    pos: [-260, -260]
                },
                a = 3,
                o = document,
                r = o.documentElement,
                l = o.body;
            t.event.special.mwheelIntent = {
                setup: function() {
                    var i = t(this).bind("mousewheel", t.event.special.mwheelIntent.handler);
                    return this !== o && this !== r && this !== l && i.bind("mouseleave", e), i = null, !0
                },
                teardown: function() {
                    return t(this).unbind("mousewheel", t.event.special.mwheelIntent.handler).unbind("mouseleave", e), !0
                },
                handler: function(e, o) {
                    var r = [e.clientX, e.clientY];
                    if (this === n.elem || Math.abs(n.pos[0] - r[0]) > a || Math.abs(n.pos[1] - r[1]) > a) return n.elem = this, n.pos = r, a = 250, clearTimeout(s), s = setTimeout(function() {
                        a = 10
                    }, 200), clearTimeout(i), i = setTimeout(function() {
                        a = 3
                    }, 1500), e = t.extend({}, e, {
                        type: "mwheelIntent"
                    }), (t.event.dispatch || t.event.handle).apply(this, arguments)
                }
            }, t.fn.extend({
                mwheelIntent: function(t) {
                    return t ? this.bind("mwheelIntent", t) : this.trigger("mwheelIntent")
                },
                unmwheelIntent: function(t) {
                    return this.unbind("mwheelIntent", t)
                }
            }), t(function() {
                l = o.body, t(o).bind("mwheelIntent.mwheelIntentDefault", t.noop)
            })
        }(jQuery), c("mwheel-intent", function() {}),
        function(t) {
            "function" == typeof c && c.amd ? c("vendor/jquery.mousewheel", ["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
        }(function(t) {
            function e(e) {
                var o = e || window.event,
                    r = l.call(arguments, 1),
                    d = 0,
                    p = 0,
                    c = 0,
                    u = 0;
                if (e = t.event.fix(o), e.type = "mousewheel", "detail" in o && (c = -1 * o.detail), "wheelDelta" in o && (c = o.wheelDelta), "wheelDeltaY" in o && (c = o.wheelDeltaY), "wheelDeltaX" in o && (p = -1 * o.wheelDeltaX), "axis" in o && o.axis === o.HORIZONTAL_AXIS && (p = -1 * c, c = 0), d = 0 === c ? p : c, "deltaY" in o && (c = -1 * o.deltaY, d = c), "deltaX" in o && (p = o.deltaX, 0 === c && (d = -1 * p)), 0 !== c || 0 !== p) {
                    if (1 === o.deltaMode) {
                        var h = t.data(this, "mousewheel-line-height");
                        d *= h, c *= h, p *= h
                    } else if (2 === o.deltaMode) {
                        var f = t.data(this, "mousewheel-page-height");
                        d *= f, c *= f, p *= f
                    }
                    return u = Math.max(Math.abs(c), Math.abs(p)), (!a || u < a) && (a = u, s(o, u) && (a /= 40)), s(o, u) && (d /= 40, p /= 40, c /= 40), d = Math[d >= 1 ? "floor" : "ceil"](d / a), p = Math[p >= 1 ? "floor" : "ceil"](p / a), c = Math[c >= 1 ? "floor" : "ceil"](c / a), e.deltaX = p, e.deltaY = c, e.deltaFactor = a, e.deltaMode = 0, r.unshift(e, d, p, c), n && clearTimeout(n), n = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, r)
                }
            }

            function i() {
                a = null
            }

            function s(t, e) {
                return p.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
            }
            var n, a, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                l = Array.prototype.slice;
            if (t.event.fixHooks)
                for (var d = o.length; d;) t.event.fixHooks[o[--d]] = t.event.mouseHooks;
            var p = t.event.special.mousewheel = {
                version: "3.1.9",
                setup: function() {
                    if (this.addEventListener)
                        for (var i = r.length; i;) this.addEventListener(r[--i], e, !1);
                    else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", p.getLineHeight(this)), t.data(this, "mousewheel-page-height", p.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var t = r.length; t;) this.removeEventListener(r[--t], e, !1);
                    else this.onmousewheel = null
                },
                getLineHeight: function(e) {
                    return parseInt(t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
                },
                getPageHeight: function(e) {
                    return t(e).height()
                },
                settings: {
                    adjustOldDeltas: !0
                }
            };
            t.fn.extend({
                mousewheel: function(t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                },
                unmousewheel: function(t) {
                    return this.unbind("mousewheel", t)
                }
            })
        }), t(jQuery, this), c("vendor/jquery.jscrollpane", ["jquery", "vendor/jquery.mousewheel", "mwheel-intent"], function() {}), c("apps/smart-podcast-player/episode-details", ["spp-app", "text!templates/episode-details-template.html", "apps/smart-podcast-player/dss", "entities/track-model", "soundmanager2", "vendor/jquery.jscrollpane", "vendor/jquery.mousewheel", "l10n", "translations"], function(t, e) {
            return t.module("EpisodeDetails", function(t, i, s, n, a, o) {
                t.MainLayout = n.Layout.extend({
                    template: o.template(e, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-episode-details-layout",
                    regions: {
                        dssRegion: ".spp-dss-region"
                    },
                    events: {
                        "click .spp-more-show-notes": function() {
                            i.trigger("toggleEpisodeDetails", this.options.sppLayout, !0)
                        },
                        "keypress .spp-more-show-notes": function() {
                            i.trigger("toggleEpisodeDetails", this.options.sppLayout, !1)
                        }
                    },
                    initialize: function() {
                        var t = this;
                        a(window).on("resize", function() {
                            var e = t.$el.find(".spp-episode-details-body");
                            e.data("jsp") && e.data("jsp").reinitialise()
                        })
                    },
                    onRender: function() {
                        this.dssRegion.show(new i.Dss.DssLayout({
                            model: this.model
                        }));
                        var t, e = this.options.sppLayout.$el.find(".spp-tabs"),
                            s = this.$el.find(".spp-episode-details-header");
                        "none" != e.css("display") ? (t = e.outerHeight(), t += parseInt(e.find(".spp-tab-active").css("border-bottom"), 10), isNaN(t) && (t = 43)) : "none" != s.css("display") && (t = s.outerHeight());
                        var n = this.options.sppLayout.$el.outerHeight() - t - this.$el.find(".spp-dss-layout").outerHeight() - parseInt(this.$el.find(".spp-episode-details-body").css("margin-top"), 10) - parseInt(this.$el.find(".spp-episode-details-body").css("margin-bottom"), 10);
                        isNaN(n) && (n = 199);
                        var a = this.$el.find(".spp-episode-details-body");
                        a.height(n), a.jScrollPane({
                            contentWidth: "0px"
                        }), this.elementsTabbable(!1)
                    },
                    elementsTabbable: function(t) {
                        t ? (this.$el.find(".spp-episode-details-body").attr("tabindex", "0"), this.$el.find(".spp-episode-details-body a").removeAttr("tabindex"), this.$el.find(".spp-more-show-notes").attr("tabindex", "0")) : (this.$el.find(".spp-episode-details-body").removeAttr("tabindex"), this.$el.find(".spp-episode-details-body a").attr("tabindex", "-1"), this.$el.find(".spp-more-show-notes").removeAttr("tabindex")), this.dssRegion.currentView.elementsTabbable(t)
                    }
                }), t.Controller = {
                    init: function(e) {
                        var s = i.request("track:featured", e);
                        e.episodeDetailsRegion.show(new t.MainLayout({
                            model: s,
                            sppLayout: e
                        }))
                    }
                }
            }), t.on("previewTrack", function(t, e) {
                var i = t.episodeDetailsRegion.currentView;
                i.model = e, i.dssRegion.currentView.model = e
            }), t.on("showEpisodeDetails", function(t, e) {
                t.episodeDetailsRegion.$el.removeClass("spp-off-to-right"), t.episodeDetailsRegion.currentView.elementsTabbable(!0), e && t.episodeDetailsRegion.$el.find(".spp-episode-details-body").addClass("spp-no-outline")
            }), t.on("hideEpisodeDetails", function(t) {
                t.episodeDetailsRegion.$el.addClass("spp-off-to-right"), t.episodeDetailsRegion.currentView.elementsTabbable(!1)
            }), t.EpisodeDetails.Controller
        }), c("text!templates/playlist-track-template.html", [], function() {
            return '<div class="spp-track-row">\r\n\t<div class="spp-episode">\r\n\t\t<% if ( data.show_episode_numbers == "true" ) { %>\r\n\t\t\t<div class="spp-number"><%= parseInt( data.episode_number, 10) %></div>\r\n\t\t<% } else { %>\r\n\t\t\t<div class="spp-play-hidden-numbers"></div>\r\n\t\t<% } %>\r\n\t\t<span class="spp-play">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-play spp-play-svg" tabindex="0" aria-labelledby="spp-svg-title-play" role="img" viewBox="0 0 20 26">\n  <title id="spp-svg-title-play">Play</title>\n  <path id="Play" d="M110.99,64.008l-20,13V51Z" transform="translate(-91 -51)"/>\n</svg>\n\r\n\t\t</span>\r\n\t\t<span class="spp-equalizer">\r\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-eq-svg" width="14" height="16" viewBox="0 0 14 16">\n  <path id="EQ" d="M201,4h2V20h-2V4Zm4,4h2v8h-2V8Zm-8-2h2V18h-2V6Zm-4,4h2v4h-2V10Z" transform="translate(-193 -4)"/>\n</svg>\n\r\n\t\t</span>\r\n\t</div>\r\n\t<div class="spp-track-title-container">\r\n\t\t<div class="spp-track-title"><%= data.title_without_episode_number %></div>\r\n\t</div>\r\n</div>'
        }), c("text!templates/playlist-template.html", [], function() {
            return '<div class="spp-playlist-header-region"></div>\r\n<div class="spp-playlist-scroller">\r\n\t<div class="spp-playlist-tracks-region"></div>\r\n</div>\r\n<div class="spp-playlist-footer-region"></div>\r\n'
        }), c("text!templates/playlist-header-template.html", [], function() {
            return '<div class="spp-search-container">\r\n\t<div class="spp-search-icon-container">\r\n\t\t<svg xmlns="http://www.w3.org/2000/svg" width="16.531" height="16.531" viewBox="0 0 16.531 16.531">\n  <defs>\n    <style>\n      .cls-1 {\n        fill-rule: evenodd;\n      }\n    </style>\n  </defs>\n  <path id="Search" class="cls-1" d="M688.536,43.121l-1.415,1.414-4.8-4.8a6.541,6.541,0,1,1,1.415-1.414ZM678.5,30a4.5,4.5,0,1,0,4.5,4.5A4.5,4.5,0,0,0,678.5,30Z" transform="translate(-672 -28)"/>\n</svg>\n\r\n\t</div>\r\n\t<form>\r\n\t\t<input type="Search" class="spp-search" aria-label="Search episodes" value="<%= data.searchTerm %>">\r\n\t</form>\r\n</div>\r\n<div class="spp-sort-container">\r\n\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-sort spp-sort-down" tabindex="0" aria-labelledby="spp-svg-title-sort-down" role="img" width="21" height="17" viewBox="0 0 21 17">\n  <title id="spp-svg-title-sort-down">Sort oldest first</title>\n  <path id="Sort_Down" d="M156,16.994l-4,5-4-5H151V5h2V16.994h3ZM135,11h13v2H135V11Zm0-6h13V7H135V5Zm10,14H135V17h10v2Z" transform="translate(-135 -5)"/>\n</svg>\n\r\n\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-sort spp-sort-up" tabindex="0" aria-labelledby="spp-svg-title-sort-up" role="img" width="21" height="17" viewBox="0 0 21 17">\n  <title id="spp-svg-title-sort-up">Sort newest first</title>\n  <path id="Sort_Up" d="M185,9.006l-4-5-4,5H180V21h2V9.006h3ZM164,15h13V13H164v2Zm0,6h13V19H164v2ZM174,7H164V9h10V7Z" transform="translate(-164 -4)"/>\n</svg>\n\r\n</div>\r\n'
        }), c("text!templates/playlist-footer-template.html", [], function() {
            return '<div class="spp-playlist-pagination">\r\n\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-playlist-prev-page" tabindex="0" aria-labelledby="spp-svg-title-page-back" role="img" width="22" height="16" viewBox="0 0 22 16">\n  <title id="spp-svg-title-page-back">Previous page</title>\n  <path id="Page_Back" d="M122.1,11.079H104.254l5.337-5.586a0.863,0.863,0,0,0,0-1.239,0.914,0.914,0,0,0-1.27,0L101,11.973l7.209,7.773a0.913,0.913,0,0,0,1.268,0,0.86,0.86,0,0,0,0-1.238L104.2,12.83H122.1A0.876,0.876,0,1,0,122.1,11.079Z" transform="translate(-101 -4)"/>\n</svg>\n\r\n\t<span class="spp-current-page">\r\n\t\t<%= current_page %>\r\n\t</span>\r\n\t<%="of".toLocaleString()%>\r\n\t<span class="spp-num-pages">\r\n\t\t<% if( typeof num_pages === "number" ) { %>\r\n\t\t\t<%=num_pages%>\r\n\t\t<% } else { %>\r\n\t\t\t...\r\n\t\t<% } %>\r\n\t</span>\r\n\t<svg xmlns="http://www.w3.org/2000/svg" class="spp-control spp-playlist-next-page" tabindex="0" aria-labelledby="spp-svg-title-page-forward" role="img" width="22" height="16" viewBox="0 0 22 16">\n  <title id="spp-svg-title-page-forward">Next page</title>\n  <path id="Page_Forward" d="M122.1,11.079H104.254l5.337-5.586a0.863,0.863,0,0,0,0-1.239,0.914,0.914,0,0,0-1.27,0L101,11.973l7.209,7.773a0.913,0.913,0,0,0,1.268,0,0.86,0.86,0,0,0,0-1.238L104.2,12.83H122.1A0.876,0.876,0,1,0,122.1,11.079Z" transform="translate(-101 -4)"/>\n</svg>\n\r\n</div>\r\n'
        }), c("apps/smart-podcast-player/playlist", ["spp-app", "text!templates/playlist-track-template.html", "text!templates/playlist-template.html", "text!templates/playlist-header-template.html", "text!templates/playlist-footer-template.html", "entities/track-model", "entities/playlist-model", "vendor/jquery.jscrollpane", "vendor/jquery.mousewheel", "l10n", "translations"], function(t, e, i, s, a) {
            return t.module("Playlist", function(t, n, o, r, l, d) {
                t.HeaderLayout = r.Layout.extend({
                    template: d.template(s, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-playlist-header",
                    elementsTabbable: function(t) {
                        t ? (this.$el.find(".spp-search").removeAttr("tabindex"), this.$el.find(".spp-sort").attr("tabindex", "0")) : (this.$el.find(".spp-search").attr("tabindex", "-1"), this.$el.find(".spp-sort").attr("tabindex", "-1"))
                    },
                    onRender: function() {
                        (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || 1 == !!document.documentMode) && this.$(".spp-search-icon-container").cssExtended("top", "40px", AP_Player.importantStr), this.enableDisableSort()
                    },
                    enableDisableSort: function() {
                        /MSIE (\d+\.\d+);/.test(navigator.userAgent) || 1 == !!document.documentMode || (this.model.get("data").playlistMainLayout.model.isMoreTracksComing() ? this.$(".spp-sort")[0].classList.add("spp-disabled") : this.$(".spp-sort")[0].classList.remove("spp-disabled"))
                    }
                }), t.FooterLayout = r.Layout.extend({
                    template: d.template(a, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-playlist-footer",
                    onRender: function() {
                        if (this.enableDisableArrows(), "unknown" === this.model.get("num_pages")) {
                            var t = 0,
                                e = this;
                            this.loading_timer = setInterval(function() {
                                t++;
                                var i;
                                i = t % 3 == 0 ? ".&nbsp;&nbsp;" : t % 3 == 1 ? "..&nbsp;" : "...", e.$el.find(".spp-num-pages").html(i)
                            }, 400)
                        }
                    },
                    modelEvents: {
                        "change:current_page": "textChanged",
                        "change:num_pages": "textChanged"
                    },
                    textChanged: function() {
                        this.$el.find(".spp-current-page").text(this.model.get("current_page"));
                        var t = this.model.get("num_pages");
                        "unknown" !== t && (this.$el.find(".spp-num-pages").text(t), void 0 !== this.loading_timer && clearInterval(this.loading_timer)), this.enableDisableArrows()
                    },
                    enableDisableArrows: function() {
                        if (void 0 !== this.$(".spp-playlist-prev-page")[0].classList) {
                            var t = this.model.get("current_page"),
                                e = this.model.get("num_pages"),
                                i = "unknown" === e;
                            i || 1 == t ? (this.$(".spp-playlist-prev-page")[0].classList.add("spp-disabled"), this.$(".spp-playlist-prev-page").attr("tabindex", "-1")) : (this.$(".spp-playlist-prev-page")[0].classList.remove("spp-disabled"), this.$(".spp-playlist-prev-page").attr("tabindex", "0")), i || t == e ? (this.$(".spp-playlist-next-page")[0].classList.add("spp-disabled"), this.$(".spp-playlist-next-page").attr("tabindex", "-1")) : (this.$(".spp-playlist-next-page")[0].classList.remove("spp-disabled"), this.$(".spp-playlist-next-page").attr("tabindex", "0"))
                        }
                    },
                    elementsTabbable: function(t) {
                        if (t) {
                            var e = this.model.get("current_page");
                            e > 1 && this.$(".spp-playlist-prev-page").attr("tabindex", "0"), e < this.model.get("num_pages") && this.$(".spp-playlist-next-page").attr("tabindex", "0")
                        } else this.$(".spp-playlist-prev-page").attr("tabindex", "-1"), this.$(".spp-playlist-next-page").attr("tabindex", "-1")
                    }
                }), t.TrackView = r.ItemView.extend({
                    template: d.template(e, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-track",
                    modelEvents: {
                        change: "render"
                    },
                    triggers: {
                        "click .spp-track-row": "track:play",
                        "focus .spp-track-row": "track:focus"
                    },
                    events: {
                        "keydown .spp-track-row": function(t) {
                            13 == t.which ? this.triggerMethod("track:play") : 38 != t.which && 40 != t.which || this.triggerMethod("keydown", t)
                        }
                    },
                    onRender: function() {
                        var t = this.model.get("data"),
                            e = "track_" + this.model.cid;
                        !0 !== t.active && "true" !== t.active || this.$el.addClass("active"), this.$el.find(".spp-track-row").attr("tabindex", "0"), this.$el.attr("data-tid", e)
                    }
                }), t.TrackPageView = r.CollectionView.extend({
                    itemView: t.TrackView,
                    className: "spp-track-list",
                    onItemviewTrackPlay: function(t) {
                        var e = n.request("currentTrack", this.options.sppLayout),
                            i = e.get("speed"),
                            s = t.model;
                        e.set("isPlaying", !1), n.trigger("previewTrack", this.options.sppLayout, s), s.set("isPlaying", !0), s.set("speed", i)
                    },
                    onItemviewTrackFocus: function(t) {
                        this.children.each(function(t) {
                            t.$el.find(".spp-track-row").attr("tabindex", "-1")
                        }), t.$el.find(".spp-track-row").attr("tabindex", "0")
                    },
                    onItemviewKeydown: function(t, e) {
                        var i, s = this.collection.indexOf(t.model);
                        if (38 == e.which && s > 0) i = s - 1, e.preventDefault();
                        else {
                            if (!(40 == e.which && s < this.collection.length - 1)) return;
                            i = s + 1, e.preventDefault()
                        }
                        this.$el.find(".spp-track-row").attr("tabindex", "-1");
                        var n = this.children.findByIndex(i).$el.find(".spp-track-row");
                        n.attr("tabindex", "0"), n.focus()
                    },
                    elementsTabbable: function(t) {
                        t ? this.$el.find(".spp-track-row").attr("tabindex", "0") : this.$el.find(".spp-track-row").attr("tabindex", "-1")
                    }
                }), t.MainLayout = r.Layout.extend({
                    template: d.template(i, void 0, {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g
                    }),
                    className: "spp-playlist",
                    regions: {
                        headerRegion: ".spp-playlist-header-region",
                        tracksRegion: ".spp-playlist-tracks-region",
                        footerRegion: ".spp-playlist-footer-region"
                    },
                    triggers: {
                        "click    .spp-sort": "playlist:sort",
                        "keypress .spp-sort-container": "playlist:sort",
                        "click    .spp-playlist-prev-page": "paging:prev",
                        "keypress .spp-playlist-prev-page": "paging:prev",
                        "click    .spp-playlist-next-page": "paging:next",
                        "keypress .spp-playlist-next-page": "paging:next"
                    },
                    events: {
                        "click .spp-search": function() {
                            var t = this.$el.find(".spp-search");
                            t.val().toLowerCase() == "Search".toLocaleString().toLowerCase() && t.val("")
                        },
                        "input .spp-search": "searchInput",
                        "keypress .spp-search": "searchKeypress"
                    },
                    initialize: function() {
                        var t = this;
                        l(window).on("resize", function() {
                            var e = t.$el.find(".spp-playlist-scroller");
                            e.data("jsp") > 0 && e.data("jsp").reinitialise()
                        })
                    },
                    onRender: function() {
                        var e, i = this.options.sppLayout.model.get("options"),
                            s = this.model.getNumTracks(),
                            n = this.model.getCurrentPage();
                        e = this.model.isMoreTracksComing() ? "unknown" : Math.ceil(s / i.tracks_per_page);
                        var a = this;
                        this.headerRegion.show(new t.HeaderLayout({
                            model: new o.Model({
                                data: {
                                    playlistMainLayout: a,
                                    searchTerm: this.searchTerm ? this.searchTerm : "Search".toLocaleString()
                                }
                            })
                        })), this.footerRegion.show(new t.FooterLayout({
                            model: new o.Model({
                                current_page: n,
                                num_pages: e,
                                sppLayout: this.options.sppLayout
                            })
                        })), this.tracksRegion.show(new t.TrackPageView({
                            collection: this.model.getPageOfTracks(),
                            sppLayout: this.options.sppLayout
                        }))
                    },
                    onShow: function() {
                        var t, e = this.options.sppLayout.$el.find(".spp-tabs");
                        if ("none" != e.css("display")) {
                            t = e.outerHeight();
                            var i = parseInt(e.find(".spp-tab-active").css("border-bottom"), 10);
                            isNaN(i) && (i = 3), t += i
                        } else t = 0;
                        var s = this.options.sppLayout.$el.outerHeight() - t - this.headerRegion.currentView.$el.outerHeight() - this.footerRegion.currentView.$el.outerHeight();
                        this.$el.find(".spp-playlist-scroller").height(s), this.$el.find(".spp-playlist-scroller").jScrollPane({
                            enableKeyboardNavigation: !1,
                            contentWidth: "0px"
                        })
                    },
                    onPlaylistSort: function() {
                        if (!this.model.isMoreTracksComing()) {
                            this.$el.toggleClass("spp-sort-reverse"), this.model.reverseSortOrder();
                            this.model.setCurrentPage(1);
                            this.tracksRegion.currentView.collection = this.model.getPageOfTracks(), this.tracksRegion.currentView.render(), this.footerRegion.currentView.model.set("current_page", this.model.getCurrentPage())
                        }
                    },
                    onPagingPrev: function() {
                        this.model.getCurrentPage() > 1 && (this.model.setCurrentPage(this.model.getCurrentPage() - 1), this.tracksRegion.currentView.collection = this.model.getPageOfTracks(), this.tracksRegion.currentView.render(), this.footerRegion.currentView.model.set("current_page", this.model.getCurrentPage()), this.$el.find(".spp-playlist-scroller").data("jsp").reinitialise())
                    },
                    onPagingNext: function() {
                        var t = this.options.sppLayout.model.get("options"),
                            e = Math.ceil(this.model.getNumTracks() / t.tracks_per_page);
                        this.model.getCurrentPage() < e && (this.model.setCurrentPage(this.model.getCurrentPage() + 1), this.tracksRegion.currentView.collection = this.model.getPageOfTracks(), this.tracksRegion.currentView.render(), this.footerRegion.currentView.model.set("current_page", this.model.getCurrentPage()), this.$el.find(".spp-playlist-scroller").data("jsp").reinitialise())
                    },
                    searchInput: function() {
                        n.options.searchWhileTyping && this.searchTracks()
                    },
                    searchKeypress: function(t) {
                        13 == t.which && (n.options.searchWhileTyping || this.searchTracks(), t.preventDefault())
                    },
                    searchTracks: function() {
                        this.searchTerm = this.$el.find(".spp-search").val(), this.model.searchTracks(this.searchTerm);
                        var t = this.options.sppLayout.model.get("options"),
                            e = this.model.getNumTracks(),
                            i = Math.ceil(e / t.tracks_per_page);
                        this.footerRegion.currentView.model.set("current_page", 1), this.footerRegion.currentView.model.set("num_pages", i), this.model.setCurrentPage(1), this.tracksRegion.currentView.collection = this.model.getPageOfTracks(), this.tracksRegion.currentView.render(), this.$el.find(".spp-search").focus().val("").val(this.searchTerm)
                    },
                    elementsTabbable: function(t) {
                        this.headerRegion.currentView.elementsTabbable(t), this.footerRegion.currentView.elementsTabbable(t), this.tracksRegion.currentView.elementsTabbable(t)
                    }
                }), t.Controller = {
                    init: function(e) {
                        var i = n.request("tracks:get", e),
                            s = new t.MainLayout({
                                model: i,
                                sppLayout: e
                            });
                        e.playlistRegion.show(s)
                    }
                }
            }), t.on("changeEpisodePlaying", function(t, e) {
                if (!t.isStp) {
                    var i = t.mainRegion.currentView;
                    if (i) {
                        var s = i.model.get("isPlaying");
                        t.playlistRegion.currentView.tracksRegion.currentView.children.each(function(t) {
                            t.model == e && s ? t.$el.addClass("spp-playing") : t.$el.removeClass("spp-playing")
                        })
                    }
                }
            }), t.on("showEpisodeDetails", function(t) {
                t.playlistRegion.currentView.elementsTabbable(!1)
            }), t.on("hideEpisodeDetails", function(t) {
                t.playlistRegion.currentView.elementsTabbable(!0)
            }), t.on("tracksAdded", function(e) {
                var i = e.model.get("options"),
                    s = e.playlistRegion.currentView;
                if (s) {
                    var a = t.request("tracks:get", e);
                    s.model = a;
                    var o = s.model.getNumTracks(),
                        r = Math.ceil(o / i.tracks_per_page);
                    s.footerRegion.currentView.model.set("num_pages", r), s.headerRegion.currentView.enableDisableSort()
                } else n("Tracks added before playlist init in uid 9f03c450")
            }), t.Playlist.Controller
        }), c("apps/smart-podcast-player/player-controller", ["spp-app", "entities/player-view", "entities/track-model", "soundmanager2"], function(t) {
            return t.module("Player", function(t, e, i, s, n, a) {
                t.Controller = {
                    init: function(i) {
                        playerView = new t.PlayerLayout({
                            model: e.request("track:featured", i),
                            sppLayout: i,
                            shortcode_options: i.model.get("options"),
                            isStp: !1
                        }), i.mainRegion.show(playerView)
                    },
                    rotateTrackSpeed: function(t) {
                        var e = t.mainRegion.currentView.model,
                            i = e.get("speed");
                        e.get("isPlaying") || e.set("isPlaying", !0), .5 == i ? e.set("speed", .75) : .75 == i ? e.set("speed", 1) : 1 == i ? e.set("speed", 1.25) : 1.25 == i ? e.set("speed", 1.5) : 1.5 == i ? e.set("speed", 1.75) : 1.75 == i ? e.set("speed", 2) : 2 == i ? e.set("speed", 3) : 3 == i ? e.set("speed", .5) : e.set("speed", 1)
                    }
                }, e.on("previewTrack", function(t, e) {
                    var i = t.mainRegion.currentView;
                    i && (i.model = e, i.render())
                }), e.on("changeEpisodePlaying", function(t, i) {
                    var s = t.mainRegion.currentView;
                    if (s && !t.isStp) {
                        var n = "track_" + s.model.cid,
                            a = soundManager.getSoundById(n);
                        if (i.get("isPlaying")) {
                            if (!a) {
                                var o = s.model.get("data");
                                if (o.stream_url.toLowerCase().includes("soundcloud.com")) var r = o.stream_url.includes("?") ? "&" : "?",
                                    l = o.stream_url + r + "consumer_key=" + AP_Player.soundcloudConsumerKey;
                                else var l = o.stream_url;
                                a = soundManager.createSound({
                                    id: n,
                                    url: l,
                                    whileplaying: function() {
                                        s.whileplaying(this)
                                    },
                                    onload: function() {
                                        for (var e = 0; e < t.userTriggers.length; e++) {
                                            var i = t.userTriggers[e];
                                            if (void 0 === i.episode || i.episode === o.episode_number)
                                                if ("elapsed" === i.type) {
                                                    var s = 1e3 * i.seconds;
                                                    this.onPosition(s, i.callback, t.$el)
                                                } else if ("remaining" === i.type) {
                                                var s = a.durationEstimate - 1e3 * i.seconds;
                                                this.onPosition(s, i.callback, t.$el)
                                            }
                                        }
                                    },
                                    onfinish: function() {
                                        var s = i.get("speed");
                                        i.set("isPlaying", !1);
                                        var n = e.request("tracks:get", t),
                                            a = n.getNextTrack(i);
                                        a && (e.trigger("previewTrack", t, a), a.set("isPlaying", !0), a.set("speed", s))
                                    }
                                })
                            }
                            soundManager.play(n)
                        } else a && soundManager.pause(n)
                    }
                }), e.on("changeSpeed", function(t, e) {
                    var i = "track_" + e.cid,
                        s = soundManager.getSoundById(i),
                        n = e.get("speed");
                    s && s.isHTML5 && (s._a.playbackRate = n)
                })
            }), t.Player.Controller
        }), c("spp-app", ["jquery", "marionette", "soundmanager2"], function(t, e) {
            var i = new e.Application;
            return i.options = {}, i.options.current_page = 1, i.options.tracks_per_page = 10, i.options.searchWhileTyping = !0, i.on("initialize:after", function() {
                (jQuery(".smart-podcast-player-container").length > 0 || jQuery(".smart-track-player-container").length > 0) && (soundManager.setup({
                    flashVersion: 9,
                    useHighPerformance: !0,
                    wmode: "transparent",
                    useHTML5Audio: !0,
                    preferFlash: !1,
                    onready: function() {
                        i.trigger("app:core:init"), p(["apps/smart-track-player/stp-controller"], function(t) {
                            t.init()
                        })
                    }
                }), soundManager.beginDelayedInit())
            }), i.on("app:core:init", function() {
                p(["apps/smart-podcast-player/core"], function(t) {
                    t.init()
                })
            }), i.on("episode-details:init", function(t) {
                p(["apps/smart-podcast-player/episode-details"], function(e) {
                    e.init(t)
                })
            }), i.on("playlist:init", function(t) {
                p(["apps/smart-podcast-player/playlist"], function(e) {
                    e.init(t)
                })
            }), i.on("player:init", function(t) {
                p(["apps/smart-podcast-player/player-controller"], function(e) {
                    e.init(t)
                })
            }), i
        }), e(jQuery), c("style", function() {});
    const u = [
        ["acast", "Acast"],
        ["itunes", "Apple Podcasts (iTunes)"],
        ["buzzsprout", "Buzzsprout"],
        ["googlepodcasts", "Google Podcasts"],
        ["iheartradio", "iHeartRadio"],
        ["overcast", "Overcast"],
        ["googleplay", "Play Music"],
        ["playerfm", "Player.FM"],
        ["pocketcasts", "PocketCasts"],
        ["soundcloud", "SoundCloud"],
        ["spotify", "Spotify"],
        ["spreaker", "Spreaker"],
        ["stitcher", "Stitcher"],
        ["tunein", "TuneIn"],
        ["rss", "RSS"]
    ];
    "function" == typeof jQuery && c("jquery", function(t) {
        return jQuery
    }), "function" == typeof _ && c("underscore", function() {
        return _
    }), String.prototype.includes || (String.prototype.includes = function(t, e) {
        "use strict";
        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
    }), window.SmartPodcastPlayer = {}, window.SmartPodcastPlayer.initialize = function() {
        SmartPodcastPlayer.version = "2.8.0",
        void 0 === SmartPodcastPlayer._options && (SmartPodcastPlayer._options = {}),
        void 0 === SmartPodcastPlayer._shortcode_options && (SmartPodcastPlayer._shortcode_options = {}),
        void 0 === SmartPodcastPlayer._by_uid && (SmartPodcastPlayer._by_uid = {}),
        void 0 === SmartPodcastPlayer._cached_tracks && (SmartPodcastPlayer._cached_tracks = {}),
        document.getElementsByTagName("body")[0].className += " spp",
        "undefined" != typeof AP_Player && SmartPodcastPlayer.version !== AP_Player.version && console.log("Warning: Smart Podcast Player version mismatch detected.  Backend is running version '" + AP_Player.version + "' and frontend is running version '" + SmartPodcastPlayer.version + "'.  Try clearing all caches in caching plugins."),
        void 0 !== AP_Player.soundcloudConsumerKey && "" !== AP_Player.soundcloudConsumerKey || (AP_Player.soundcloudConsumerKey = "b38b3f6ee1cdb01e911c4d393c1f2f6e"), p(["jquery"],
        function(t) {
            var e = [];
            t(".smart-podcast-player-container, .smart-track-player-container").each(function() {
                e.push(t(this).data("uid"))
            });
            var s = [];
            for (i = 0; i < e.length; i++) void 0 === window["SmartPodcastPlayer_uid_" + e[i]] && s.push(e[i]);
            if (s.length > 0) {
                var a = {
                    action: "spp_get_jsobj",
                    uids: s
                };
                t.ajax({
                    url: AP_Player.ajaxurl,
                    dataType: "json",
                    async: !1,
                    type: "POST",
                    data: a,
                    success: function(t) {
                        for (i = 0; i < t.length; i++) {
                            var e = t[i];
                            window["SmartPodcastPlayer_uid_9f03c450"] = e
                        }
                    },
                    failure: function() {
                        n("Failed to get player info")
                    }
                })
            }
        }), void 0 === SmartPodcastPlayer.initialize.backbone_loaded && (SmartPodcastPlayer.initialize.backbone_loaded = !1), p(["jquery", "underscore", "backbone", "spp-app", "style"], function(i, s, n, a) {
            if (!SmartPodcastPlayer.initialize.backbone_loaded) {
                n.noConflict();
                SmartPodcastPlayer.initialize.backbone_loaded = !0
            }
            e(i), t(jQuery, this), o(i), a.start()
        }), p(["jquery"], function(t) {
            t(".spp-timestamp").off("click"), t(".spp-timestamp").click(function(e) {
                var i = t(this).data("seconds"),
                    s = t(this).data("player_uid");
                if (void 0 === s) {
                    var n = t(".smart-track-player");
                    if (1 == n.length) s = n.data("uid");
                    else {
                        var a = t(this).closest(".spp-timestamp-set").data("url");
                        n.each(function() {
                            if (l(SmartPodcastPlayer._options[t(this).data("uid")].url) == l(a)) return s = t(this).data("uid"), !1
                        })
                    }
                    void 0 === s && (s = t(".smart-track-player").data("uid"))
                }
                void 0 === i && (i = t(this).attr("time")), SmartPodcastPlayer.seek(i, s), e.preventDefault()
            })
        })
    }, SmartPodcastPlayer.initialize(), window.addEventListener("load", SmartPodcastPlayer.initialize), window.SmartPodcastPlayer.onTimeElapsed = function(t, e, i, s) {
        a({
            type: "elapsed",
            callback: t,
            seconds: e,
            player_uid: i,
            episode: s
        })
    }, window.SmartPodcastPlayer.onTimeRemaining = function(t, e, i, s) {
        a({
            type: "remaining",
            callback: t,
            seconds: e,
            player_uid: i,
            episode: s
        })
    }, window.SmartPodcastPlayer.seek = function(t, e) {
        p(["jquery"], function(i) {
            SmartPodcastPlayer._by_uid[e].mainRegion.currentView.seekSeconds(t)
        })
    }, c("main", function() {})
}();


// remove the old audio html
//audio.parentNode.removeChild(audio);

}