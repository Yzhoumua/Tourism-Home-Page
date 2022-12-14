(function (b) {
    function a(c, d) {
         this._init(c, d) } 
         a.prototype._init = function (c, d) { 
             ([]).push.apply(this, Array.prototype.slice.apply(c)); 
             this._options = { 
                 auto: true, speed: 20, sideCtrl: true, "defaultView": 0, interval: 3000, activeClass: "active", bottomCtrl: true, };
                  var e = this; b.extend(true, this._options, d); 
                  b(this).each(function (g, j) { var k = b(this), i = k.find(".js-silder-ctrl"), l = k.find(".silder-main");
                   k.addClass("js-silder"); if (l.length == 0) { var h = b('<div class="silder-scroll"><div class="silder-main"></div></div>'); 
                   l = h.children(".silder-main"); k.append(l); j.silderMain = l } 
                   else { 
                       j.silderMain = l; if (b(e).length > 1) { 
                           (function (m, n) { 
                               setTimeout(function () { 
                                   m._calcSilderMainWH(n) 
                                }, 550) 
                            })(e, k) } else { 
                                e._calcSilderMainWH(k) 
                            } 
                        } if (i.length == 0) {
                             i = b('<div class="js-silder-ctrl"></div>');
                              k.append(i) 
                            } 
                            j.silderCtrl = i; 
                            j.index = e._options.defaultView || 0;
                             if (e._options.data && b.isArray(e._options.data))
                              { (k).addClass("js-silder"); e._createSilderImg() 
                            } 
                            j.imgsLen = j.silderMain.children(".silder-main-img").length;
                             var f = k.find(".silder-main-img"); 
                             f.each(function (m, n) { 
                                 if (m != e._options.defaultView) 
                                 { 
                                     b(n).css("left", f.eq(0).width()) 
                                    } 
                                })
                             }); 
                             this._createControllBtns(); 
                             if (this._options.auto) {
                                  this._autoPlay() 
                                } 
                                b(this).each(function (f, g) {
                                     e._setControllBtnClass(g.silderCtrl.find(".silder-ctrl-con").eq(e._options.defaultView))
                                     }); 
                                     b(window).on("resize", function () { 
                                         e._calcSilderMainWH() 
                                        }) 
                                    };
                                     a.prototype._calcSilderMainWH = function (g, e, c) {
                                          if (g && g.length && g.length > 0) {
                                               var f = g[0], h = f.silderMain, d = c || h.children(".silder-main-img").eq(0).find("img").height();
                                                console.log(h.children(".silder-main-img").eq(0).find("img").height()), h.height(d) 
                                            } else {
                                                 b(this).each(function (i, k) { 
                                                     var l = k.silderMain, j = c || l.children(".silder-main-img").eq(0).find("img").height(); l.height(j) 
                                                    }) 
                                                }
                                             };
                                              a.prototype._createSilderImg = function () {
                                                   var c = this, d = this._options.data; b(c).each(function (f, g) {
                                                        var e = b(this), i = this.silderMain, h = ""; b.each(d, function (l, j)
                                                         { 
                                                             var k = j.alt ? j.alt : "";
                                                              silderMainImg = b('<div class="silder-main-img"></div>'), eleA = null, img = b('<img src="' + j.img + '" alt="' + k + '">');
                                                               if (l == 0) { 
                                                                   img.on("load", function (m) { 
                                                                       c._calcSilderMainWH(b(this).width(), b(this).height())
                                                                     }) 
                                                                    } if (j.link) { 
                                                                        eleA = b('<a href="' + j.link + '"></a>'); 
                                                                        silderMainImg.append(eleA.append(img)) 
                                                                    } 
                                                                        else {
                                                                             silderMainImg.append(img)
                                                                             } 
                                                                             i.append(silderMainImg) 
                                                                            }) 
                                                                        })
                                                                     };
                                                                      a.prototype._createControllBtns = function () {
                                                                           var c = this; b(c).each(function (h, e) { 
                                                                               var k = b(this), f = this.silderMain, l = this.silderCtrl, m = f.children(".silder-main-img").length, g = 0, d = ""; 
                                                                               if (c._options.sideCtrl) {
                                                                                    d += '<span class="silder-ctrl-prev"><span><</span></span>' 
                                                                                } if (c._options.bottomCtrl)
                                                                                 { 
                                                                                     for (; g < m; g++) { 
                                                                                         var j = '<span class="silder-ctrl-con"><span>' + (g + 1) + "</span></span>"; d += j 
                                                                                        } 
                                                                                    } if (c._options.sideCtrl) { 
                                                                                        d += '<span class="silder-ctrl-next"><span>></span></span>'
                                                                                     } 
                                                                                     l.append(b(d)) });
                                                                                      this._ctrlBtnBindEvents() 
                                                                                    }; 
                                                                                    a.prototype._ctrlBtnBindEvents = function () { 
                                                                                        var c = this; b(c).each(function (d, e)
                                                                                         { this.silderCtrl.children().on("click", function () {
                                                                                              var f = b(e).width(), h = e.silderMain.children(".silder-main-img"); 
                                                                                              if (b(this).hasClass("silder-ctrl-next")) {
                                                                                                   c._play(b(e)) 
                                                                                                } else {
                                                                                                     if (b(this).hasClass("silder-ctrl-prev")) { 
                                                                                                         a.animate(h[e.index], { "left": f }, null, c._options.speed);
                                                                                                          e.index -= 1; if (e.index < 0) {
                                                                                                               e.index = e.imgsLen - 1 } 
                                                                                                               h[e.index].style.left = -f + "px"; a.animate(h[e.index],
                                                                                                                 { "left": 0 }, null, c._options.speed);
                                                                                                                  c._setControllBtnClass(b(this).parent().find(".silder-ctrl-con").eq(e.index)) 
                                                                                                                } else {
                                                                                                                     var g = b(this).children("span").html() * 1 - 1; if (g > e.index) {
                                                                                                                          a.animate(h[e.index], {
                                                                                                                               "left": -f }, null, c._options.speed); h[g].style.left = f + "px"
                                                                                                                             } else { 
                                                                                                                                 if (g < e.index) { 
                                                                                                                                     a.animate(h[e.index], { "left": f }, null, c._options.speed);
                                                                                                                                      h[g].style.left = -f + "px" 
                                                                                                                                    } 
                                                                                                                                } a.animate(h[g], { "left": 0 });
                                                                                                                                 c._setControllBtnClass(b(this)); e.index = g } } }) }) };
                                                                                                                                  a.prototype._play = function (c) {
                                                                                                                                       var f = this, d = c[0], g = d.imgsLen, e = c.width(), h = d.silderMain.children(".silder-main-img"); a.animate(h.eq(d.index)[0], { "left": -e }, null, this._options.speed); d.index += 1; if (d.index > d.imgsLen - 1) { d.index = 0 } h.eq(d.index)[0].style.left = e + "px"; a.animate(h.eq(d.index)[0], { "left": 0 }, null, this._options.speed); this._setControllBtnClass(d.silderCtrl.find(".silder-ctrl-con").eq(d.index)) }; a.prototype._autoPlay = function () { var e = this, d = b(e), c = isNaN(e.interval * 1) ? 3000 : e.interval; if (e._options.auto) { d.each(function (g, h) { clearInterval(this.timer); var f = b(this); this.timer = setInterval(function () { e._play(f) }, c); f.hover(function () { clearInterval(this.timer) }, function () { clearInterval(this.timer); this.timer = setInterval(function () { e._play(f) }, c) }) }) } }; a.prototype._setControllBtnClass = function (d) { var c = typeof this._options.activeClass != "string" ? "active" : this._options.activeClass; d.addClass(c).siblings(".silder-ctrl-con").removeClass(c) }; a.animate = function (g, e, c, f) { var d = this; clearInterval(g.timer); g.timer = setInterval(function () { var i = true; for (var h in e) { var k = parseInt(b(g).css(h)), j = (parseInt(e[h]) - k) / 10; j = j > 0 ? Math.ceil(j) : Math.floor(j); if (k != e[h]) { i = false } if (h == "zIndex") { g.style.zIndex = e[h] } else { g.style[h] = k + j + "px" } } if (i) { clearInterval(g.timer); if (c) { c.call(window) } } }, f || 20) }; b.silder = function (c, d) { c = b(c); new a(c, d); return c }; b.fn.silder = function (c) {
        console.log(new a(this, c));
        return this
    }
})(jQuery);
