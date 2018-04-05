/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

;(function(){function n(n,t){return n.set(t[0],t[1]),n}function t(n,t){return n.add(t),n}function r(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function e(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function i(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function o(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function f(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function a(n,t){var r=null==n?0:n.length;return!!r&&b(n,t,0)>-1}function c(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function l(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function s(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function h(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function p(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function v(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function _(n){return n.split("")}function g(n){return n.match(Dt)||[]}function y(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function d(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function b(n,t,r){return t===t?K(n,t,r):d(n,m,r)}function w(n,t,r,e){for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function m(n){return n!==n}function x(n,t){var r=null==n?0:n.length;return r?I(n,t)/r:Ln}function j(n){return function(t){return null==t?X:t[n]}}function A(n){return function(t){return null==n?X:n[t]}}function k(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function O(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function I(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i)}return r}function R(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function z(n,t){return l(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return l(t,function(t){return n[t]})}function W(n,t){return n.has(t)}function L(n,t){for(var r=-1,e=n.length;++r<e&&b(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length;r--&&b(t,n[r],0)>-1;);return r}function U(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;return e}function B(n){return"\\"+Yr[n]}function T(n,t){return null==n?X:n[t]}function $(n){return Nr.test(n)}function D(n){return Pr.test(n)}function M(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function F(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function N(n,t){return function(r){return n(t(r))}}function P(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==fn||(n[r]=fn,i[u++]=r)}return i}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function Z(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function K(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function V(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function G(n){return $(n)?J(n):ve(n)}function H(n){return $(n)?Y(n):_(n)}function J(n){for(var t=Mr.lastIndex=0;Mr.test(n);)++t;return t}function Y(n){return n.match(Mr)||[]}function Q(n){return n.match(Fr)||[]}var X,nn="4.17.4",tn=200,rn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",en="Expected a function",un="__lodash_hash_undefined__",on=500,fn="__lodash_placeholder__",an=1,cn=2,ln=4,sn=1,hn=2,pn=1,vn=2,_n=4,gn=8,yn=16,dn=32,bn=64,wn=128,mn=256,xn=512,jn=30,An="...",kn=800,On=16,In=1,Rn=2,zn=3,En=1/0,Sn=9007199254740991,Wn=1.7976931348623157e308,Ln=NaN,Cn=4294967295,Un=Cn-1,Bn=Cn>>>1,Tn=[["ary",wn],["bind",pn],["bindKey",vn],["curry",gn],["curryRight",yn],["flip",xn],["partial",dn],["partialRight",bn],["rearg",mn]],$n="[object Arguments]",Dn="[object Array]",Mn="[object AsyncFunction]",Fn="[object Boolean]",Nn="[object Date]",Pn="[object DOMException]",qn="[object Error]",Zn="[object Function]",Kn="[object GeneratorFunction]",Vn="[object Map]",Gn="[object Number]",Hn="[object Null]",Jn="[object Object]",Yn="[object Promise]",Qn="[object Proxy]",Xn="[object RegExp]",nt="[object Set]",tt="[object String]",rt="[object Symbol]",et="[object Undefined]",ut="[object WeakMap]",it="[object WeakSet]",ot="[object ArrayBuffer]",ft="[object DataView]",at="[object Float32Array]",ct="[object Float64Array]",lt="[object Int8Array]",st="[object Int16Array]",ht="[object Int32Array]",pt="[object Uint8Array]",vt="[object Uint8ClampedArray]",_t="[object Uint16Array]",gt="[object Uint32Array]",yt=/\b__p \+= '';/g,dt=/\b(__p \+=) '' \+/g,bt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,mt=/[&<>"']/g,xt=RegExp(wt.source),jt=RegExp(mt.source),At=/<%-([\s\S]+?)%>/g,kt=/<%([\s\S]+?)%>/g,Ot=/<%=([\s\S]+?)%>/g,It=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rt=/^\w*$/,zt=/^\./,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Wt=RegExp(St.source),Lt=/^\s+|\s+$/g,Ct=/^\s+/,Ut=/\s+$/,Bt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Tt=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,Dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mt=/\\(\\)?/g,Ft=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Nt=/\w*$/,Pt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Zt=/^\[object .+?Constructor\]$/,Kt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Yt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",tr=Qt+Xt+nr,rr="\\u2700-\\u27bf",er="a-z\\xdf-\\xf6\\xf8-\\xff",ur="\\xac\\xb1\\xd7\\xf7",ir="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",or="\\u2000-\\u206f",fr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ar="A-Z\\xc0-\\xd6\\xd8-\\xde",cr="\\ufe0e\\ufe0f",lr=ur+ir+or+fr,sr="['’]",hr="["+Yt+"]",pr="["+lr+"]",vr="["+tr+"]",_r="\\d+",gr="["+rr+"]",yr="["+er+"]",dr="[^"+Yt+lr+_r+rr+er+ar+"]",br="\\ud83c[\\udffb-\\udfff]",wr="(?:"+vr+"|"+br+")",mr="[^"+Yt+"]",xr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ar="["+ar+"]",kr="\\u200d",Or="(?:"+yr+"|"+dr+")",Ir="(?:"+Ar+"|"+dr+")",Rr="(?:"+sr+"(?:d|ll|m|re|s|t|ve))?",zr="(?:"+sr+"(?:D|LL|M|RE|S|T|VE))?",Er=wr+"?",Sr="["+cr+"]?",Wr="(?:"+kr+"(?:"+[mr,xr,jr].join("|")+")"+Sr+Er+")*",Lr="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",Cr="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",Ur=Sr+Er+Wr,Br="(?:"+[gr,xr,jr].join("|")+")"+Ur,Tr="(?:"+[mr+vr+"?",vr,xr,jr,hr].join("|")+")",$r=RegExp(sr,"g"),Dr=RegExp(vr,"g"),Mr=RegExp(br+"(?="+br+")|"+Tr+Ur,"g"),Fr=RegExp([Ar+"?"+yr+"+"+Rr+"(?="+[pr,Ar,"$"].join("|")+")",Ir+"+"+zr+"(?="+[pr,Ar+Or,"$"].join("|")+")",Ar+"?"+Or+"+"+Rr,Ar+"+"+zr,Cr,Lr,_r,Br].join("|"),"g"),Nr=RegExp("["+kr+Yt+tr+cr+"]"),Pr=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zr=-1,Kr={};Kr[at]=Kr[ct]=Kr[lt]=Kr[st]=Kr[ht]=Kr[pt]=Kr[vt]=Kr[_t]=Kr[gt]=!0,Kr[$n]=Kr[Dn]=Kr[ot]=Kr[Fn]=Kr[ft]=Kr[Nn]=Kr[qn]=Kr[Zn]=Kr[Vn]=Kr[Gn]=Kr[Jn]=Kr[Xn]=Kr[nt]=Kr[tt]=Kr[ut]=!1;var Vr={};Vr[$n]=Vr[Dn]=Vr[ot]=Vr[ft]=Vr[Fn]=Vr[Nn]=Vr[at]=Vr[ct]=Vr[lt]=Vr[st]=Vr[ht]=Vr[Vn]=Vr[Gn]=Vr[Jn]=Vr[Xn]=Vr[nt]=Vr[tt]=Vr[rt]=Vr[pt]=Vr[vt]=Vr[_t]=Vr[gt]=!0,Vr[qn]=Vr[Zn]=Vr[ut]=!1;var Gr={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Hr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qr=parseFloat,Xr=parseInt,ne="object"==typeof global&&global&&global.Object===Object&&global,te="object"==typeof self&&self&&self.Object===Object&&self,re=ne||te||Function("return this")(),ee="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ee&&"object"==typeof module&&module&&!module.nodeType&&module,ie=ue&&ue.exports===ee,oe=ie&&ne.process,fe=function(){try{return oe&&oe.binding&&oe.binding("util")}catch(n){}}(),ae=fe&&fe.isArrayBuffer,ce=fe&&fe.isDate,le=fe&&fe.isMap,se=fe&&fe.isRegExp,he=fe&&fe.isSet,pe=fe&&fe.isTypedArray,ve=j("length"),_e=A(Gr),ge=A(Hr),ye=A(Jr),de=function _(A){function K(n){if(la(n)&&!mh(n)&&!(n instanceof Dt)){if(n instanceof Y)return n;if(ml.call(n,"__wrapped__"))return io(n)}return new Y(n)}function J(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=X}function Dt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Cn,this.__views__=[]}function Yt(){var n=new Dt(this.__wrapped__);return n.__actions__=Mu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Mu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Mu(this.__views__),n}function Qt(){if(this.__filtered__){var n=new Dt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Xt(){var n=this.__wrapped__.value(),t=this.__dir__,r=mh(n),e=t<0,u=r?n.length:0,i=zi(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Yl(a,this.__takeCount__);if(!r||!e&&u==a&&p==a)return mu(n,this.__actions__);var v=[];n:for(;a--&&h<p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,b=y.type,w=d(g);if(b==Rn)g=w;else if(!w){if(b==In)continue n;break n}}v[h++]=g}return v}function nr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function tr(){this.__data__=fs?fs(null):{},this.size=0}function rr(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function er(n){var t=this.__data__;if(fs){var r=t[n];return r===un?X:r}return ml.call(t,n)?t[n]:X}function ur(n){var t=this.__data__;return fs?t[n]!==X:ml.call(t,n)}function ir(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=fs&&t===X?un:t,this}function or(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function fr(){this.__data__=[],this.size=0}function ar(n){var t=this.__data__,r=Lr(t,n);if(r<0)return!1;var e=t.length-1;return r==e?t.pop():Ul.call(t,r,1),--this.size,!0}function cr(n){var t=this.__data__,r=Lr(t,n);return r<0?X:t[r][1]}function lr(n){return Lr(this.__data__,n)>-1}function sr(n,t){var r=this.__data__,e=Lr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function hr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function pr(){this.size=0,this.__data__={hash:new nr,map:new(es||or),string:new nr}}function vr(n){var t=ki(this,n).delete(n);return this.size-=t?1:0,t}function _r(n){return ki(this,n).get(n)}function gr(n){return ki(this,n).has(n)}function yr(n,t){var r=ki(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function dr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new hr;++t<r;)this.add(n[t])}function br(n){return this.__data__.set(n,un),this}function wr(n){return this.__data__.has(n)}function mr(n){var t=this.__data__=new or(n);this.size=t.size}function xr(){this.__data__=new or,this.size=0}function jr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function Ar(n){return this.__data__.get(n)}function kr(n){return this.__data__.has(n)}function Or(n,t){var r=this.__data__;if(r instanceof or){var e=r.__data__;if(!es||e.length<tn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new hr(e)}return r.set(n,t),this.size=r.size,this}function Ir(n,t){var r=mh(n),e=!r&&wh(n),u=!r&&!e&&jh(n),i=!r&&!e&&!u&&Rh(n),o=r||e||u||i,f=o?R(n.length,vl):[],a=f.length;for(var c in n)!t&&!ml.call(n,c)||o&&("length"==c||u&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ti(c,a))||f.push(c);return f}function Rr(n){var t=n.length;return t?n[ru(0,t-1)]:X}function zr(n,t){return to(Mu(n),Fr(t,0,n.length))}function Er(n){return to(Mu(n))}function Sr(n,t,r){(r===X||Jf(n[t],r))&&(r!==X||t in n)||Tr(n,t,r)}function Wr(n,t,r){var e=n[t];ml.call(n,t)&&Jf(e,r)&&(r!==X||t in n)||Tr(n,t,r)}function Lr(n,t){for(var r=n.length;r--;)if(Jf(n[r][0],t))return r;return-1}function Cr(n,t,r,e){return bs(n,function(n,u,i){t(e,n,r(n),i)}),e}function Ur(n,t){return n&&Fu(t,Za(t),n)}function Br(n,t){return n&&Fu(t,Ka(t),n)}function Tr(n,t,r){"__proto__"==t&&Dl?Dl(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Mr(n,t){for(var r=-1,e=t.length,u=fl(e),i=null==n;++r<e;)u[r]=i?X:Na(n,t[r]);return u}function Fr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),t!==X&&(n=n>=t?n:t)),n}function Nr(n,t,r,e,i,o){var f,a=t&an,c=t&cn,l=t&ln;if(r&&(f=i?r(n,e,i,o):r(n)),f!==X)return f;if(!ca(n))return n;var s=mh(n);if(s){if(f=Wi(n),!a)return Mu(n,f)}else{var h=Ss(n),p=h==Zn||h==Kn;if(jh(n))return Ru(n,a);if(h==Jn||h==$n||p&&!i){if(f=c||p?{}:Li(n),!a)return c?Pu(n,Br(f,n)):Nu(n,Ur(f,n))}else{if(!Vr[h])return i?n:{};f=Ci(n,h,Nr,a)}}o||(o=new mr);var v=o.get(n);if(v)return v;o.set(n,f);var _=l?c?mi:wi:c?Ka:Za,g=s?X:_(n);return u(g||n,function(e,u){g&&(u=e,e=n[u]),Wr(f,u,Nr(e,t,r,u,n,o))}),f}function Pr(n){var t=Za(n);return function(r){return Gr(r,n,t)}}function Gr(n,t,r){var e=r.length;if(null==n)return!e;for(n=hl(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function Hr(n,t,r){if("function"!=typeof n)throw new _l(en);return Cs(function(){n.apply(X,r)},t)}function Jr(n,t,r,e){var u=-1,i=a,o=!0,f=n.length,s=[],h=t.length;if(!f)return s;r&&(t=l(t,E(r))),e?(i=c,o=!1):t.length>=tn&&(i=W,o=!1,t=new dr(t));n:for(;++u<f;){var p=n[u],v=null==r?p:r(p);if(p=e||0!==p?p:0,o&&v===v){for(var _=h;_--;)if(t[_]===v)continue n;s.push(p)}else i(t,v,e)||s.push(p)}return s}function Yr(n,t){var r=!0;return bs(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ne(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!ma(o):r(o,f)))var f=o,a=i}return a}function te(n,t,r,e){var u=n.length;for(r=Ia(r),r<0&&(r=-r>u?0:u+r),e=e===X||e>u?u:Ia(e),e<0&&(e+=u),e=r>e?0:Ra(e);r<e;)n[r++]=t;return n}function ee(n,t){var r=[];return bs(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ue(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Bi),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ue(f,t-1,r,e,u):s(u,f):e||(u[u.length]=f)}return u}function oe(n,t){return n&&ms(n,t,Za)}function fe(n,t){return n&&xs(n,t,Za)}function ve(n,t){return f(t,function(t){return oa(n[t])})}function de(n,t){t=Ou(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[ro(t[r++])];return r&&r==e?n:X}function we(n,t,r){var e=t(n);return mh(n)?e:s(e,r(n))}function me(n){return null==n?n===X?et:Hn:$l&&$l in hl(n)?Ri(n):Hi(n)}function xe(n,t){return n>t}function je(n,t){return null!=n&&ml.call(n,t)}function Ae(n,t){return null!=n&&t in hl(n)}function ke(n,t,r){return n>=Yl(t,r)&&n<Jl(t,r)}function Oe(n,t,r){for(var e=r?c:a,u=n[0].length,i=n.length,o=i,f=fl(i),s=1/0,h=[];o--;){var p=n[o];o&&t&&(p=l(p,E(t))),s=Yl(p.length,s),f[o]=!r&&(t||u>=120&&p.length>=120)?new dr(o&&p):X}p=n[0];var v=-1,_=f[0];n:for(;++v<u&&h.length<s;){var g=p[v],y=t?t(g):g;if(g=r||0!==g?g:0,!(_?W(_,y):e(h,y,r))){for(o=i;--o;){var d=f[o];if(!(d?W(d,y):e(n[o],y,r)))continue n}_&&_.push(y),h.push(g)}}return h}function Ie(n,t,r,e){return oe(n,function(n,u,i){t(e,r(n),u,i)}),e}function Re(n,t,e){t=Ou(t,n),n=Yi(n,t);var u=null==n?n:n[ro(ko(t))];return null==u?X:r(u,n,e)}function ze(n){return la(n)&&me(n)==$n}function Ee(n){return la(n)&&me(n)==ot}function Se(n){return la(n)&&me(n)==Nn}function We(n,t,r,e,u){return n===t||(null==n||null==t||!la(n)&&!la(t)?n!==n&&t!==t:Le(n,t,r,e,We,u))}function Le(n,t,r,e,u,i){var o=mh(n),f=mh(t),a=o?Dn:Ss(n),c=f?Dn:Ss(t);a=a==$n?Jn:a,c=c==$n?Jn:c;var l=a==Jn,s=c==Jn,h=a==c;if(h&&jh(n)){if(!jh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new mr),o||Rh(n)?gi(n,t,r,e,u,i):yi(n,t,a,r,e,u,i);if(!(r&sn)){var p=l&&ml.call(n,"__wrapped__"),v=s&&ml.call(t,"__wrapped__");if(p||v){var _=p?n.value():n,g=v?t.value():t;return i||(i=new mr),u(_,g,r,e,i)}}return!!h&&(i||(i=new mr),di(n,t,r,e,u,i))}function Ce(n){return la(n)&&Ss(n)==Vn}function Ue(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=hl(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var a=f[0],c=n[a],l=f[1];if(o&&f[2]){if(c===X&&!(a in n))return!1}else{var s=new mr;if(e)var h=e(c,l,a,n,t,s);if(!(h===X?We(l,c,sn|hn,e,s):h))return!1}}return!0}function Be(n){if(!ca(n)||Ni(n))return!1;var t=oa(n)?Il:Zt;return t.test(eo(n))}function Te(n){return la(n)&&me(n)==Xn}function $e(n){return la(n)&&Ss(n)==nt}function De(n){return la(n)&&aa(n.length)&&!!Kr[me(n)]}function Me(n){return"function"==typeof n?n:null==n?Uc:"object"==typeof n?mh(n)?Ke(n[0],n[1]):Ze(n):Pc(n)}function Fe(n){if(!Pi(n))return Hl(n);var t=[];for(var r in hl(n))ml.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Ne(n){if(!ca(n))return Gi(n);var t=Pi(n),r=[];for(var e in n)("constructor"!=e||!t&&ml.call(n,e))&&r.push(e);return r}function Pe(n,t){return n<t}function qe(n,t){var r=-1,e=Yf(n)?fl(n.length):[];return bs(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ze(n){var t=Oi(n);return 1==t.length&&t[0][2]?Zi(t[0][0],t[0][1]):function(r){return r===n||Ue(r,n,t)}}function Ke(n,t){return Di(n)&&qi(t)?Zi(ro(n),t):function(r){var e=Na(r,n);return e===X&&e===t?qa(r,n):We(t,e,sn|hn)}}function Ve(n,t,r,e,u){n!==t&&ms(t,function(i,o){if(ca(i))u||(u=new mr),Ge(n,t,o,r,Ve,e,u);else{var f=e?e(n[o],i,o+"",n,t,u):X;f===X&&(f=i),Sr(n,o,f)}},Ka)}function Ge(n,t,r,e,u,i,o){var f=n[r],a=t[r],c=o.get(a);if(c)return void Sr(n,r,c);var l=i?i(f,a,r+"",n,t,o):X,s=l===X;if(s){var h=mh(a),p=!h&&jh(a),v=!h&&!p&&Rh(a);l=a,h||p||v?mh(f)?l=f:Qf(f)?l=Mu(f):p?(s=!1,l=Ru(a,!0)):v?(s=!1,l=Uu(a,!0)):l=[]:da(a)||wh(a)?(l=f,wh(f)?l=Ea(f):(!ca(f)||e&&oa(f))&&(l=Li(a))):s=!1}s&&(o.set(a,l),u(l,a,e,i,o),o.delete(a)),Sr(n,r,l)}function He(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ti(t,r)?n[t]:X}function Je(n,t,r){var e=-1;t=l(t.length?t:[Uc],E(Ai()));var u=qe(n,function(n,r,u){var i=l(t,function(t){return t(n)});return{criteria:i,index:++e,value:n}});return O(u,function(n,t){return Tu(n,t,r)})}function Ye(n,t){return Qe(n,t,function(t,r){return qa(n,r)})}function Qe(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=de(n,o);r(f,o)&&au(i,Ou(o,n),f)}return i}function Xe(n){return function(t){return de(t,n)}}function nu(n,t,r,e){var u=e?w:b,i=-1,o=t.length,f=n;for(n===t&&(t=Mu(t)),r&&(f=l(n,E(r)));++i<o;)for(var a=0,c=t[i],s=r?r(c):c;(a=u(f,s,a,e))>-1;)f!==n&&Ul.call(f,a,1),Ul.call(n,a,1);return n}function tu(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Ti(u)?Ul.call(n,u,1):du(n,u)}}return n}function ru(n,t){return n+ql(ns()*(t-n+1))}function eu(n,t,r,e){for(var u=-1,i=Jl(Pl((t-n)/(r||1)),0),o=fl(i);i--;)o[e?i:++u]=n,n+=r;return o}function uu(n,t){var r="";if(!n||t<1||t>Sn)return r;do t%2&&(r+=n),t=ql(t/2),t&&(n+=n);while(t);return r}function iu(n,t){return Us(Ji(n,t,Uc),n+"")}function ou(n){return Rr(uc(n))}function fu(n,t){var r=uc(n);return to(r,Fr(t,0,r.length))}function au(n,t,r,e){if(!ca(n))return n;t=Ou(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=ro(t[u]),c=r;if(u!=o){var l=f[a];c=e?e(l,a,f):X,c===X&&(c=ca(l)?l:Ti(t[u+1])?[]:{})}Wr(f,a,c),f=f[a]}return n}function cu(n){return to(uc(n))}function lu(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=fl(u);++e<u;)i[e]=n[e+t];return i}function su(n,t){var r;return bs(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function hu(n,t,r){var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Bn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ma(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return pu(n,t,Uc,r)}function pu(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,a=ma(t),c=t===X;u<i;){var l=ql((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,v=s===s,_=ma(s);if(o)var g=e||v;else g=c?v&&(e||h):f?v&&h&&(e||!p):a?v&&h&&!p&&(e||!_):!p&&!_&&(e?s<=t:s<t);g?u=l+1:i=l}return Yl(i,Un)}function vu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r],f=t?t(o):o;if(!r||!Jf(f,a)){var a=f;i[u++]=0===o?0:o}}return i}function _u(n){return"number"==typeof n?n:ma(n)?Ln:+n}function gu(n){if("string"==typeof n)return n;if(mh(n))return l(n,gu)+"";if(ma(n))return ys?ys.call(n):"";var t=n+"";return"0"==t&&1/n==-En?"-0":t}function yu(n,t,r){var e=-1,u=a,i=n.length,o=!0,f=[],l=f;if(r)o=!1,u=c;else if(i>=tn){var s=t?null:Is(n);if(s)return q(s);o=!1,u=W,l=new dr}else l=t?[]:f;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,o&&p===p){for(var v=l.length;v--;)if(l[v]===p)continue n;t&&l.push(p),f.push(h)}else u(l,p,r)||(l!==f&&l.push(p),f.push(h))}return f}function du(n,t){return t=Ou(t,n),n=Yi(n,t),null==n||delete n[ro(ko(t))]}function bu(n,t,r,e){return au(n,t,r(de(n,t)),e)}function wu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?lu(n,e?0:i,e?i+1:u):lu(n,e?i+1:0,e?u:i)}function mu(n,t){var r=n;return r instanceof Dt&&(r=r.value()),h(t,function(n,t){return t.func.apply(t.thisArg,s([n],t.args))},r)}function xu(n,t,r){var e=n.length;if(e<2)return e?yu(n[0]):[];for(var u=-1,i=fl(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Jr(i[u]||o,n[f],t,r));return yu(ue(i,1),t,r)}function ju(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){var f=e<i?t[e]:X;r(o,n[e],f)}return o}function Au(n){return Qf(n)?n:[]}function ku(n){return"function"==typeof n?n:Uc}function Ou(n,t){return mh(n)?n:Di(n,t)?[n]:Bs(Wa(n))}function Iu(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:lu(n,t,r)}function Ru(n,t){if(t)return n.slice();var r=n.length,e=Sl?Sl(r):new n.constructor(r);return n.copy(e),e}function zu(n){var t=new n.constructor(n.byteLength);return new El(t).set(new El(n)),t}function Eu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.byteLength)}function Su(t,r,e){var u=r?e(F(t),an):F(t);return h(u,n,new t.constructor)}function Wu(n){var t=new n.constructor(n.source,Nt.exec(n));return t.lastIndex=n.lastIndex,t}function Lu(n,r,e){var u=r?e(q(n),an):q(n);return h(u,t,new n.constructor)}function Cu(n){return gs?hl(gs.call(n)):{}}function Uu(n,t){var r=t?zu(n.buffer):n.buffer;return new n.constructor(r,n.byteOffset,n.length)}function Bu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=ma(n),o=t!==X,f=null===t,a=t===t,c=ma(t);if(!f&&!c&&!i&&n>t||i&&o&&a&&!f&&!c||e&&o&&a||!r&&a||!u)return 1;if(!e&&!i&&!c&&n<t||c&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!a)return-1}return 0}function Tu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var a=Bu(u[e],i[e]);if(a){if(e>=f)return a;var c=r[e];return a*("desc"==c?-1:1)}}return n.index-t.index}function $u(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,a=t.length,c=Jl(i-o,0),l=fl(a+c),s=!e;++f<a;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;c--;)l[f++]=n[u++];return l}function Du(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,a=-1,c=t.length,l=Jl(i-f,0),s=fl(l+c),h=!e;++u<l;)s[u]=n[u];for(var p=u;++a<c;)s[p+a]=t[a];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Mu(n,t){var r=-1,e=n.length;for(t||(t=fl(e));++r<e;)t[r]=n[r];return t}function Fu(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],a=e?e(r[f],n[f],f,r,n):X;a===X&&(a=n[f]),u?Tr(r,f,a):Wr(r,f,a)}return r}function Nu(n,t){return Fu(n,zs(n),t)}function Pu(n,t){return Fu(n,Es(n),t)}function qu(n,t){return function(r,u){var i=mh(r)?e:Cr,o=t?t():{};return i(r,n,Ai(u,2),o)}}function Zu(n){return iu(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&$i(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=hl(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Ku(n,t){return function(r,e){if(null==r)return r;if(!Yf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=hl(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function Vu(n){return function(t,r,e){for(var u=-1,i=hl(t),o=e(t),f=o.length;f--;){var a=o[n?f:++u];if(r(i[a],a,i)===!1)break}return t}}function Gu(n,t,r){function e(){var t=this&&this!==re&&this instanceof e?i:n;return t.apply(u?r:this,arguments)}var u=t&pn,i=Yu(n);return e}function Hu(n){return function(t){t=Wa(t);var r=$(t)?H(t):X,e=r?r[0]:t.charAt(0),u=r?Iu(r,1).join(""):t.slice(1);return e[n]()+u}}function Ju(n){return function(t){return h(Ec(lc(t).replace($r,"")),n,"")}}function Yu(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ds(n.prototype),e=n.apply(r,t);return ca(e)?e:r}}function Qu(n,t,e){function u(){for(var o=arguments.length,f=fl(o),a=o,c=ji(u);a--;)f[a]=arguments[a];var l=o<3&&f[0]!==c&&f[o-1]!==c?[]:P(f,c);if(o-=l.length,o<e)return ci(n,t,ti,u.placeholder,X,f,l,X,X,e-o);var s=this&&this!==re&&this instanceof u?i:n;return r(s,this,f)}var i=Yu(n);return u}function Xu(n){return function(t,r,e){var u=hl(t);if(!Yf(t)){var i=Ai(r,3);t=Za(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function ni(n){return bi(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new _l(en);if(u&&!o&&"wrapper"==xi(i))var o=new Y([],!0)}for(e=o?e:r;++e<r;){i=t[e];var f=xi(i),a="wrapper"==f?Rs(i):X;o=a&&Fi(a[0])&&a[1]==(wn|gn|dn|mn)&&!a[4].length&&1==a[9]?o[xi(a[0])].apply(o,a[3]):1==i.length&&Fi(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&mh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function ti(n,t,r,e,u,i,o,f,a,c){function l(){for(var y=arguments.length,d=fl(y),b=y;b--;)d[b]=arguments[b];if(v)var w=ji(l),m=U(d,w);if(e&&(d=$u(d,e,u,v)),i&&(d=Du(d,i,o,v)),y-=m,v&&y<c){var x=P(d,w);return ci(n,t,ti,l.placeholder,r,d,x,f,a,c-y)}var j=h?r:this,A=p?j[n]:n;return y=d.length,f?d=Qi(d,f):_&&y>1&&d.reverse(),s&&a<y&&(d.length=a),this&&this!==re&&this instanceof l&&(A=g||Yu(A)),A.apply(j,d)}var s=t&wn,h=t&pn,p=t&vn,v=t&(gn|yn),_=t&xn,g=p?X:Yu(n);return l}function ri(n,t){return function(r,e){return Ie(r,n,t(e),{})}}function ei(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=gu(r),e=gu(e)):(r=_u(r),e=_u(e)),u=n(r,e)}return u}}function ui(n){return bi(function(t){return t=l(t,E(Ai())),iu(function(e){var u=this;return n(t,function(n){return r(n,u,e)})})})}function ii(n,t){t=t===X?" ":gu(t);var r=t.length;if(r<2)return r?uu(t,n):t;var e=uu(t,Pl(n/G(t)));return $(t)?Iu(H(e),0,n).join(""):e.slice(0,n)}function oi(n,t,e,u){function i(){for(var t=-1,a=arguments.length,c=-1,l=u.length,s=fl(l+a),h=this&&this!==re&&this instanceof i?f:n;++c<l;)s[c]=u[c];for(;a--;)s[c++]=arguments[++t];return r(h,o?e:this,s)}var o=t&pn,f=Yu(n);return i}function fi(n){return function(t,r,e){return e&&"number"!=typeof e&&$i(t,r,e)&&(r=e=X),t=Oa(t),r===X?(r=t,t=0):r=Oa(r),e=e===X?t<r?1:-1:Oa(e),eu(t,r,e,n)}}function ai(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=za(t),r=za(r)),n(t,r)}}function ci(n,t,r,e,u,i,o,f,a,c){var l=t&gn,s=l?o:X,h=l?X:o,p=l?i:X,v=l?X:i;t|=l?dn:bn,t&=~(l?bn:dn),t&_n||(t&=~(pn|vn));var _=[n,t,u,p,s,v,h,f,a,c],g=r.apply(X,_);return Fi(n)&&Ls(g,_),g.placeholder=e,Xi(g,n,t)}function li(n){var t=sl[n];return function(n,r){if(n=za(n),r=null==r?0:Yl(Ia(r),292)){var e=(Wa(n)+"e").split("e"),u=t(e[0]+"e"+(+e[1]+r));return e=(Wa(u)+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function si(n){return function(t){var r=Ss(t);return r==Vn?F(t):r==nt?Z(t):z(t,n(t))}}function hi(n,t,r,e,u,i,o,f){var a=t&vn;if(!a&&"function"!=typeof n)throw new _l(en);var c=e?e.length:0;if(c||(t&=~(dn|bn),e=u=X),o=o===X?o:Jl(Ia(o),0),f=f===X?f:Ia(f),c-=u?u.length:0,t&bn){var l=e,s=u;e=u=X}var h=a?X:Rs(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&Vi(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===X?a?0:n.length:Jl(p[9]-c,0),!f&&t&(gn|yn)&&(t&=~(gn|yn)),t&&t!=pn)v=t==gn||t==yn?Qu(n,t,f):t!=dn&&t!=(pn|dn)||u.length?ti.apply(X,p):oi(n,t,r,e);else var v=Gu(n,t,r);var _=h?js:Ls;return Xi(_(v,p),n,t)}function pi(n,t,r,e){return n===X||Jf(n,dl[r])&&!ml.call(e,r)?t:n}function vi(n,t,r,e,u,i){return ca(n)&&ca(t)&&(i.set(t,n),Ve(n,t,X,vi,i),i.delete(t)),n}function _i(n){return da(n)?X:n}function gi(n,t,r,e,u,i){var o=r&sn,f=n.length,a=t.length;if(f!=a&&!(o&&a>f))return!1;var c=i.get(n);if(c&&i.get(t))return c==t;var l=-1,s=!0,h=r&hn?new dr:X;for(i.set(n,t),i.set(t,n);++l<f;){var p=n[l],_=t[l];if(e)var g=o?e(_,p,l,t,n,i):e(p,_,l,n,t,i);if(g!==X){if(g)continue;s=!1;break}if(h){if(!v(t,function(n,t){if(!W(h,t)&&(p===n||u(p,n,r,e,i)))return h.push(t)})){s=!1;break}}else if(p!==_&&!u(p,_,r,e,i)){s=!1;break}}return i.delete(n),i.delete(t),s}function yi(n,t,r,e,u,i,o){switch(r){case ft:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case ot:return!(n.byteLength!=t.byteLength||!i(new El(n),new El(t)));case Fn:case Nn:case Gn:return Jf(+n,+t);case qn:return n.name==t.name&&n.message==t.message;case Xn:case tt:return n==t+"";case Vn:var f=F;case nt:var a=e&sn;if(f||(f=q),n.size!=t.size&&!a)return!1;var c=o.get(n);if(c)return c==t;e|=hn,o.set(n,t);var l=gi(f(n),f(t),e,u,i,o);return o.delete(n),l;case rt:if(gs)return gs.call(n)==gs.call(t)}return!1}function di(n,t,r,e,u,i){var o=r&sn,f=wi(n),a=f.length,c=wi(t),l=c.length;if(a!=l&&!o)return!1;for(var s=a;s--;){var h=f[s];if(!(o?h in t:ml.call(t,h)))return!1}var p=i.get(n);if(p&&i.get(t))return p==t;var v=!0;i.set(n,t),i.set(t,n);for(var _=o;++s<a;){h=f[s];var g=n[h],y=t[h];if(e)var d=o?e(y,g,h,t,n,i):e(g,y,h,n,t,i);if(!(d===X?g===y||u(g,y,r,e,i):d)){v=!1;break}_||(_="constructor"==h)}if(v&&!_){var b=n.constructor,w=t.constructor;b!=w&&"constructor"in n&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(v=!1);
}return i.delete(n),i.delete(t),v}function bi(n){return Us(Ji(n,X,go),n+"")}function wi(n){return we(n,Za,zs)}function mi(n){return we(n,Ka,Es)}function xi(n){for(var t=n.name+"",r=cs[t],e=ml.call(cs,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function ji(n){var t=ml.call(K,"placeholder")?K:n;return t.placeholder}function Ai(){var n=K.iteratee||Bc;return n=n===Bc?Me:n,arguments.length?n(arguments[0],arguments[1]):n}function ki(n,t){var r=n.__data__;return Mi(t)?r["string"==typeof t?"string":"hash"]:r.map}function Oi(n){for(var t=Za(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,qi(u)]}return t}function Ii(n,t){var r=T(n,t);return Be(r)?r:X}function Ri(n){var t=ml.call(n,$l),r=n[$l];try{n[$l]=X;var e=!0}catch(n){}var u=Al.call(n);return e&&(t?n[$l]=r:delete n[$l]),u}function zi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Yl(t,n+o);break;case"takeRight":n=Jl(n,t-o)}}return{start:n,end:t}}function Ei(n){var t=n.match(Tt);return t?t[1].split($t):[]}function Si(n,t,r){t=Ou(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=ro(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&aa(u)&&Ti(o,u)&&(mh(n)||wh(n)))}function Wi(n){var t=n.length,r=n.constructor(t);return t&&"string"==typeof n[0]&&ml.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Li(n){return"function"!=typeof n.constructor||Pi(n)?{}:ds(Wl(n))}function Ci(n,t,r,e){var u=n.constructor;switch(t){case ot:return zu(n);case Fn:case Nn:return new u(+n);case ft:return Eu(n,e);case at:case ct:case lt:case st:case ht:case pt:case vt:case _t:case gt:return Uu(n,e);case Vn:return Su(n,e,r);case Gn:case tt:return new u(n);case Xn:return Wu(n);case nt:return Lu(n,e,r);case rt:return Cu(n)}}function Ui(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Bt,"{\n/* [wrapped with "+t+"] */\n")}function Bi(n){return mh(n)||wh(n)||!!(Bl&&n&&n[Bl])}function Ti(n,t){return t=null==t?Sn:t,!!t&&("number"==typeof n||Vt.test(n))&&n>-1&&n%1==0&&n<t}function $i(n,t,r){if(!ca(r))return!1;var e=typeof t;return!!("number"==e?Yf(r)&&Ti(t,r.length):"string"==e&&t in r)&&Jf(r[t],n)}function Di(n,t){if(mh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ma(n))||(Rt.test(n)||!It.test(n)||null!=t&&n in hl(t))}function Mi(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function Fi(n){var t=xi(n),r=K[t];if("function"!=typeof r||!(t in Dt.prototype))return!1;if(n===r)return!0;var e=Rs(r);return!!e&&n===e[0]}function Ni(n){return!!jl&&jl in n}function Pi(n){var t=n&&n.constructor,r="function"==typeof t&&t.prototype||dl;return n===r}function qi(n){return n===n&&!ca(n)}function Zi(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in hl(r)))}}function Ki(n){var t=Bf(n,function(n){return r.size===on&&r.clear(),n}),r=t.cache;return t}function Vi(n,t){var r=n[1],e=t[1],u=r|e,i=u<(pn|vn|wn),o=e==wn&&r==gn||e==wn&&r==mn&&n[7].length<=t[8]||e==(wn|mn)&&t[7].length<=t[8]&&r==gn;if(!i&&!o)return n;e&pn&&(n[2]=t[2],u|=r&pn?0:_n);var f=t[3];if(f){var a=n[3];n[3]=a?$u(a,f,t[4]):f,n[4]=a?P(n[3],fn):t[4]}return f=t[5],f&&(a=n[5],n[5]=a?Du(a,f,t[6]):f,n[6]=a?P(n[5],fn):t[6]),f=t[7],f&&(n[7]=f),e&wn&&(n[8]=null==n[8]?t[8]:Yl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Gi(n){var t=[];if(null!=n)for(var r in hl(n))t.push(r);return t}function Hi(n){return Al.call(n)}function Ji(n,t,e){return t=Jl(t===X?n.length-1:t,0),function(){for(var u=arguments,i=-1,o=Jl(u.length-t,0),f=fl(o);++i<o;)f[i]=u[t+i];i=-1;for(var a=fl(t+1);++i<t;)a[i]=u[i];return a[t]=e(f),r(n,this,a)}}function Yi(n,t){return t.length<2?n:de(n,lu(t,0,-1))}function Qi(n,t){for(var r=n.length,e=Yl(t.length,r),u=Mu(n);e--;){var i=t[e];n[e]=Ti(i,r)?u[i]:X}return n}function Xi(n,t,r){var e=t+"";return Us(n,Ui(e,uo(Ei(e),r)))}function no(n){var t=0,r=0;return function(){var e=Ql(),u=On-(e-r);if(r=e,u>0){if(++t>=kn)return arguments[0]}else t=0;return n.apply(X,arguments)}}function to(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=ru(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function ro(n){if("string"==typeof n||ma(n))return n;var t=n+"";return"0"==t&&1/n==-En?"-0":t}function eo(n){if(null!=n){try{return wl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function uo(n,t){return u(Tn,function(r){var e="_."+r[0];t&r[1]&&!a(n,e)&&n.push(e)}),n.sort()}function io(n){if(n instanceof Dt)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);return t.__actions__=Mu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function oo(n,t,r){t=(r?$i(n,t,r):t===X)?1:Jl(Ia(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=fl(Pl(e/t));u<e;)o[i++]=lu(n,u,u+=t);return o}function fo(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function ao(){var n=arguments.length;if(!n)return[];for(var t=fl(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return s(mh(r)?Mu(r):[r],ue(t,1))}function co(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),lu(n,t<0?0:t,e)):[]}function lo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,0,t<0?0:t)):[]}function so(n,t){return n&&n.length?wu(n,Ai(t,3),!0,!0):[]}function ho(n,t){return n&&n.length?wu(n,Ai(t,3),!0):[]}function po(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&$i(n,t,r)&&(r=0,e=u),te(n,t,r,e)):[]}function vo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),d(n,Ai(t,3),u)}function _o(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=Ia(r),u=r<0?Jl(e+u,0):Yl(u,e-1)),d(n,Ai(t,3),u,!0)}function go(n){var t=null==n?0:n.length;return t?ue(n,1):[]}function yo(n){var t=null==n?0:n.length;return t?ue(n,En):[]}function bo(n,t){var r=null==n?0:n.length;return r?(t=t===X?1:Ia(t),ue(n,t)):[]}function wo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function mo(n){return n&&n.length?n[0]:X}function xo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:Ia(r);return u<0&&(u=Jl(e+u,0)),b(n,t,u)}function jo(n){var t=null==n?0:n.length;return t?lu(n,0,-1):[]}function Ao(n,t){return null==n?"":Gl.call(n,t)}function ko(n){var t=null==n?0:n.length;return t?n[t-1]:X}function Oo(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=Ia(r),u=u<0?Jl(e+u,0):Yl(u,e-1)),t===t?V(n,t,u):d(n,m,u,!0)}function Io(n,t){return n&&n.length?He(n,Ia(t)):X}function Ro(n,t){return n&&n.length&&t&&t.length?nu(n,t):n}function zo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,Ai(r,2)):n}function Eo(n,t,r){return n&&n.length&&t&&t.length?nu(n,t,X,r):n}function So(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=Ai(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return tu(n,u),r}function Wo(n){return null==n?n:ts.call(n)}function Lo(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&$i(n,t,r)?(t=0,r=e):(t=null==t?0:Ia(t),r=r===X?e:Ia(r)),lu(n,t,r)):[]}function Co(n,t){return hu(n,t)}function Uo(n,t,r){return pu(n,t,Ai(r,2))}function Bo(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t);if(e<r&&Jf(n[e],t))return e}return-1}function To(n,t){return hu(n,t,!0)}function $o(n,t,r){return pu(n,t,Ai(r,2),!0)}function Do(n,t){var r=null==n?0:n.length;if(r){var e=hu(n,t,!0)-1;if(Jf(n[e],t))return e}return-1}function Mo(n){return n&&n.length?vu(n):[]}function Fo(n,t){return n&&n.length?vu(n,Ai(t,2)):[]}function No(n){var t=null==n?0:n.length;return t?lu(n,1,t):[]}function Po(n,t,r){return n&&n.length?(t=r||t===X?1:Ia(t),lu(n,0,t<0?0:t)):[]}function qo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:Ia(t),t=e-t,lu(n,t<0?0:t,e)):[]}function Zo(n,t){return n&&n.length?wu(n,Ai(t,3),!1,!0):[]}function Ko(n,t){return n&&n.length?wu(n,Ai(t,3)):[]}function Vo(n){return n&&n.length?yu(n):[]}function Go(n,t){return n&&n.length?yu(n,Ai(t,2)):[]}function Ho(n,t){return t="function"==typeof t?t:X,n&&n.length?yu(n,X,t):[]}function Jo(n){if(!n||!n.length)return[];var t=0;return n=f(n,function(n){if(Qf(n))return t=Jl(n.length,t),!0}),R(t,function(t){return l(n,j(t))})}function Yo(n,t){if(!n||!n.length)return[];var e=Jo(n);return null==t?e:l(e,function(n){return r(t,X,n)})}function Qo(n,t){return ju(n||[],t||[],Wr)}function Xo(n,t){return ju(n||[],t||[],au)}function nf(n){var t=K(n);return t.__chain__=!0,t}function tf(n,t){return t(n),n}function rf(n,t){return t(n)}function ef(){return nf(this)}function uf(){return new Y(this.value(),this.__chain__)}function of(){this.__values__===X&&(this.__values__=ka(this.value()));var n=this.__index__>=this.__values__.length,t=n?X:this.__values__[this.__index__++];return{done:n,value:t}}function ff(){return this}function af(n){for(var t,r=this;r instanceof J;){var e=io(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function cf(){var n=this.__wrapped__;if(n instanceof Dt){var t=n;return this.__actions__.length&&(t=new Dt(this)),t=t.reverse(),t.__actions__.push({func:rf,args:[Wo],thisArg:X}),new Y(t,this.__chain__)}return this.thru(Wo)}function lf(){return mu(this.__wrapped__,this.__actions__)}function sf(n,t,r){var e=mh(n)?o:Yr;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function hf(n,t){var r=mh(n)?f:ee;return r(n,Ai(t,3))}function pf(n,t){return ue(bf(n,t),1)}function vf(n,t){return ue(bf(n,t),En)}function _f(n,t,r){return r=r===X?1:Ia(r),ue(bf(n,t),r)}function gf(n,t){var r=mh(n)?u:bs;return r(n,Ai(t,3))}function yf(n,t){var r=mh(n)?i:ws;return r(n,Ai(t,3))}function df(n,t,r,e){n=Yf(n)?n:uc(n),r=r&&!e?Ia(r):0;var u=n.length;return r<0&&(r=Jl(u+r,0)),wa(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&b(n,t,r)>-1}function bf(n,t){var r=mh(n)?l:qe;return r(n,Ai(t,3))}function wf(n,t,r,e){return null==n?[]:(mh(t)||(t=null==t?[]:[t]),r=e?X:r,mh(r)||(r=null==r?[]:[r]),Je(n,t,r))}function mf(n,t,r){var e=mh(n)?h:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,bs)}function xf(n,t,r){var e=mh(n)?p:k,u=arguments.length<3;return e(n,Ai(t,4),r,u,ws)}function jf(n,t){var r=mh(n)?f:ee;return r(n,Tf(Ai(t,3)))}function Af(n){var t=mh(n)?Rr:ou;return t(n)}function kf(n,t,r){t=(r?$i(n,t,r):t===X)?1:Ia(t);var e=mh(n)?zr:fu;return e(n,t)}function Of(n){var t=mh(n)?Er:cu;return t(n)}function If(n){if(null==n)return 0;if(Yf(n))return wa(n)?G(n):n.length;var t=Ss(n);return t==Vn||t==nt?n.size:Fe(n).length}function Rf(n,t,r){var e=mh(n)?v:su;return r&&$i(n,t,r)&&(t=X),e(n,Ai(t,3))}function zf(n,t){if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){if(--n<1)return t.apply(this,arguments)}}function Ef(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,hi(n,wn,X,X,X,X,t)}function Sf(n,t){var r;if("function"!=typeof t)throw new _l(en);return n=Ia(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Wf(n,t,r){t=r?X:t;var e=hi(n,gn,X,X,X,X,X,t);return e.placeholder=Wf.placeholder,e}function Lf(n,t,r){t=r?X:t;var e=hi(n,yn,X,X,X,X,X,t);return e.placeholder=Lf.placeholder,e}function Cf(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,_=n.apply(e,r)}function u(n){return d=n,g=Cs(f,t),b?e(n):_}function i(n){var r=n-y,e=n-d,u=t-r;return w?Yl(u,v-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=v}function f(){var n=ch();return o(n)?a(n):void(g=Cs(f,i(n)))}function a(n){return g=X,m&&h?e(n):(h=p=X,_)}function c(){g!==X&&Os(g),d=0,h=y=p=g=X}function l(){return g===X?_:a(ch())}function s(){var n=ch(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return g=Cs(f,t),e(y)}return g===X&&(g=Cs(f,t)),_}var h,p,v,_,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new _l(en);return t=za(t)||0,ca(r)&&(b=!!r.leading,w="maxWait"in r,v=w?Jl(za(r.maxWait)||0,t):v,m="trailing"in r?!!r.trailing:m),s.cancel=c,s.flush=l,s}function Uf(n){return hi(n,xn)}function Bf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new _l(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Bf.Cache||hr),r}function Tf(n){if("function"!=typeof n)throw new _l(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function $f(n){return Sf(2,n)}function Df(n,t){if("function"!=typeof n)throw new _l(en);return t=t===X?t:Ia(t),iu(n,t)}function Mf(n,t){if("function"!=typeof n)throw new _l(en);return t=null==t?0:Jl(Ia(t),0),iu(function(e){var u=e[t],i=Iu(e,0,t);return u&&s(i,u),r(n,this,i)})}function Ff(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new _l(en);return ca(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),Cf(n,t,{leading:e,maxWait:t,trailing:u})}function Nf(n){return Ef(n,1)}function Pf(n,t){return _h(ku(t),n)}function qf(){if(!arguments.length)return[];var n=arguments[0];return mh(n)?n:[n]}function Zf(n){return Nr(n,ln)}function Kf(n,t){return t="function"==typeof t?t:X,Nr(n,ln,t)}function Vf(n){return Nr(n,an|ln)}function Gf(n,t){return t="function"==typeof t?t:X,Nr(n,an|ln,t)}function Hf(n,t){return null==t||Gr(n,t,Za(t))}function Jf(n,t){return n===t||n!==n&&t!==t}function Yf(n){return null!=n&&aa(n.length)&&!oa(n)}function Qf(n){return la(n)&&Yf(n)}function Xf(n){return n===!0||n===!1||la(n)&&me(n)==Fn}function na(n){return la(n)&&1===n.nodeType&&!da(n)}function ta(n){if(null==n)return!0;if(Yf(n)&&(mh(n)||"string"==typeof n||"function"==typeof n.splice||jh(n)||Rh(n)||wh(n)))return!n.length;var t=Ss(n);if(t==Vn||t==nt)return!n.size;if(Pi(n))return!Fe(n).length;for(var r in n)if(ml.call(n,r))return!1;return!0}function ra(n,t){return We(n,t)}function ea(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?We(n,t,X,r):!!e}function ua(n){if(!la(n))return!1;var t=me(n);return t==qn||t==Pn||"string"==typeof n.message&&"string"==typeof n.name&&!da(n)}function ia(n){return"number"==typeof n&&Vl(n)}function oa(n){if(!ca(n))return!1;var t=me(n);return t==Zn||t==Kn||t==Mn||t==Qn}function fa(n){return"number"==typeof n&&n==Ia(n)}function aa(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Sn}function ca(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function la(n){return null!=n&&"object"==typeof n}function sa(n,t){return n===t||Ue(n,t,Oi(t))}function ha(n,t,r){return r="function"==typeof r?r:X,Ue(n,t,Oi(t),r)}function pa(n){return ya(n)&&n!=+n}function va(n){if(Ws(n))throw new cl(rn);return Be(n)}function _a(n){return null===n}function ga(n){return null==n}function ya(n){return"number"==typeof n||la(n)&&me(n)==Gn}function da(n){if(!la(n)||me(n)!=Jn)return!1;var t=Wl(n);if(null===t)return!0;var r=ml.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&wl.call(r)==kl}function ba(n){return fa(n)&&n>=-Sn&&n<=Sn}function wa(n){return"string"==typeof n||!mh(n)&&la(n)&&me(n)==tt}function ma(n){return"symbol"==typeof n||la(n)&&me(n)==rt}function xa(n){return n===X}function ja(n){return la(n)&&Ss(n)==ut}function Aa(n){return la(n)&&me(n)==it}function ka(n){if(!n)return[];if(Yf(n))return wa(n)?H(n):Mu(n);if(Tl&&n[Tl])return M(n[Tl]());var t=Ss(n),r=t==Vn?F:t==nt?q:uc;return r(n)}function Oa(n){if(!n)return 0===n?n:0;if(n=za(n),n===En||n===-En){var t=n<0?-1:1;return t*Wn}return n===n?n:0}function Ia(n){var t=Oa(n),r=t%1;return t===t?r?t-r:t:0}function Ra(n){return n?Fr(Ia(n),0,Cn):0}function za(n){if("number"==typeof n)return n;if(ma(n))return Ln;if(ca(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=ca(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(Lt,"");var r=qt.test(n);return r||Kt.test(n)?Xr(n.slice(2),r?2:8):Pt.test(n)?Ln:+n}function Ea(n){return Fu(n,Ka(n))}function Sa(n){return n?Fr(Ia(n),-Sn,Sn):0===n?n:0}function Wa(n){return null==n?"":gu(n)}function La(n,t){var r=ds(n);return null==t?r:Ur(r,t)}function Ca(n,t){return y(n,Ai(t,3),oe)}function Ua(n,t){return y(n,Ai(t,3),fe)}function Ba(n,t){return null==n?n:ms(n,Ai(t,3),Ka)}function Ta(n,t){return null==n?n:xs(n,Ai(t,3),Ka)}function $a(n,t){return n&&oe(n,Ai(t,3))}function Da(n,t){return n&&fe(n,Ai(t,3))}function Ma(n){return null==n?[]:ve(n,Za(n))}function Fa(n){return null==n?[]:ve(n,Ka(n))}function Na(n,t,r){var e=null==n?X:de(n,t);return e===X?r:e}function Pa(n,t){return null!=n&&Si(n,t,je)}function qa(n,t){return null!=n&&Si(n,t,Ae)}function Za(n){return Yf(n)?Ir(n):Fe(n)}function Ka(n){return Yf(n)?Ir(n,!0):Ne(n)}function Va(n,t){var r={};return t=Ai(t,3),oe(n,function(n,e,u){Tr(r,t(n,e,u),n)}),r}function Ga(n,t){var r={};return t=Ai(t,3),oe(n,function(n,e,u){Tr(r,e,t(n,e,u))}),r}function Ha(n,t){return Ja(n,Tf(Ai(t)))}function Ja(n,t){if(null==n)return{};var r=l(mi(n),function(n){return[n]});return t=Ai(t),Qe(n,r,function(n,r){return t(n,r[0])})}function Ya(n,t,r){t=Ou(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[ro(t[e])];i===X&&(e=u,i=r),n=oa(i)?i.call(n):i}return n}function Qa(n,t,r){return null==n?n:au(n,t,r)}function Xa(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:au(n,t,r,e)}function nc(n,t,r){var e=mh(n),i=e||jh(n)||Rh(n);if(t=Ai(t,4),null==r){var o=n&&n.constructor;r=i?e?new o:[]:ca(n)&&oa(o)?ds(Wl(n)):{}}return(i?u:oe)(n,function(n,e,u){return t(r,n,e,u)}),r}function tc(n,t){return null==n||du(n,t)}function rc(n,t,r){return null==n?n:bu(n,t,ku(r))}function ec(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:bu(n,t,ku(r),e)}function uc(n){return null==n?[]:S(n,Za(n))}function ic(n){return null==n?[]:S(n,Ka(n))}function oc(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=za(r),r=r===r?r:0),t!==X&&(t=za(t),t=t===t?t:0),Fr(za(n),t,r)}function fc(n,t,r){return t=Oa(t),r===X?(r=t,t=0):r=Oa(r),n=za(n),ke(n,t,r)}function ac(n,t,r){if(r&&"boolean"!=typeof r&&$i(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=Oa(n),t===X?(t=n,n=0):t=Oa(t)),n>t){var e=n;n=t,t=e}if(r||n%1||t%1){var u=ns();return Yl(n+u*(t-n+Qr("1e-"+((u+"").length-1))),t)}return ru(n,t)}function cc(n){return np(Wa(n).toLowerCase())}function lc(n){return n=Wa(n),n&&n.replace(Gt,_e).replace(Dr,"")}function sc(n,t,r){n=Wa(n),t=gu(t);var e=n.length;r=r===X?e:Fr(Ia(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function hc(n){return n=Wa(n),n&&jt.test(n)?n.replace(mt,ge):n}function pc(n){return n=Wa(n),n&&Wt.test(n)?n.replace(St,"\\$&"):n}function vc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ii(ql(u),r)+n+ii(Pl(u),r)}function _c(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?n+ii(t-e,r):n}function gc(n,t,r){n=Wa(n),t=Ia(t);var e=t?G(n):0;return t&&e<t?ii(t-e,r)+n:n}function yc(n,t,r){return r||null==t?t=0:t&&(t=+t),Xl(Wa(n).replace(Ct,""),t||0)}function dc(n,t,r){return t=(r?$i(n,t,r):t===X)?1:Ia(t),uu(Wa(n),t)}function bc(){var n=arguments,t=Wa(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function wc(n,t,r){return r&&"number"!=typeof r&&$i(n,t,r)&&(t=r=X),(r=r===X?Cn:r>>>0)?(n=Wa(n),n&&("string"==typeof t||null!=t&&!Oh(t))&&(t=gu(t),!t&&$(n))?Iu(H(n),0,r):n.split(t,r)):[]}function mc(n,t,r){return n=Wa(n),r=null==r?0:Fr(Ia(r),0,n.length),t=gu(t),n.slice(r,r+t.length)==t}function xc(n,t,r){var e=K.templateSettings;r&&$i(n,t,r)&&(t=X),n=Wa(n),t=Lh({},t,e,pi);var u,i,o=Lh({},t.imports,e.imports,pi),f=Za(o),a=S(o,f),c=0,l=t.interpolate||Ht,s="__p += '",h=pl((t.escape||Ht).source+"|"+l.source+"|"+(l===Ot?Ft:Ht).source+"|"+(t.evaluate||Ht).source+"|$","g"),p="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Zr+"]")+"\n";n.replace(h,function(t,r,e,o,f,a){return e||(e=o),s+=n.slice(c,a).replace(Jt,B),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),c=a+t.length,t}),s+="';\n";var v=t.variable;v||(s="with (obj) {\n"+s+"\n}\n"),s=(i?s.replace(yt,""):s).replace(dt,"$1").replace(bt,"$1;"),s="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";var _=tp(function(){return ll(f,p+"return "+s).apply(X,a)});if(_.source=s,ua(_))throw _;return _}function jc(n){return Wa(n).toLowerCase()}function Ac(n){return Wa(n).toUpperCase()}function kc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Lt,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=H(t),i=L(e,u),o=C(e,u)+1;return Iu(e,i,o).join("")}function Oc(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ut,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=C(e,H(t))+1;return Iu(e,0,u).join("")}function Ic(n,t,r){if(n=Wa(n),n&&(r||t===X))return n.replace(Ct,"");if(!n||!(t=gu(t)))return n;var e=H(n),u=L(e,H(t));return Iu(e,u).join("")}function Rc(n,t){var r=jn,e=An;if(ca(t)){var u="separator"in t?t.separator:u;r="length"in t?Ia(t.length):r,e="omission"in t?gu(t.omission):e}n=Wa(n);var i=n.length;if($(n)){var o=H(n);i=o.length}if(r>=i)return n;var f=r-G(e);if(f<1)return e;var a=o?Iu(o,0,f).join(""):n.slice(0,f);if(u===X)return a+e;if(o&&(f+=a.length-f),Oh(u)){if(n.slice(f).search(u)){var c,l=a;for(u.global||(u=pl(u.source,Wa(Nt.exec(u))+"g")),u.lastIndex=0;c=u.exec(l);)var s=c.index;a=a.slice(0,s===X?f:s)}}else if(n.indexOf(gu(u),f)!=f){var h=a.lastIndexOf(u);h>-1&&(a=a.slice(0,h))}return a+e}function zc(n){return n=Wa(n),n&&xt.test(n)?n.replace(wt,ye):n}function Ec(n,t,r){return n=Wa(n),t=r?X:t,t===X?D(n)?Q(n):g(n):n.match(t)||[]}function Sc(n){var t=null==n?0:n.length,e=Ai();return n=t?l(n,function(n){if("function"!=typeof n[1])throw new _l(en);return[e(n[0]),n[1]]}):[],iu(function(e){for(var u=-1;++u<t;){var i=n[u];if(r(i[0],this,e))return r(i[1],this,e)}})}function Wc(n){return Pr(Nr(n,an))}function Lc(n){return function(){return n}}function Cc(n,t){return null==n||n!==n?t:n}function Uc(n){return n}function Bc(n){return Me("function"==typeof n?n:Nr(n,an))}function Tc(n){return Ze(Nr(n,an))}function $c(n,t){return Ke(n,Nr(t,an))}function Dc(n,t,r){var e=Za(t),i=ve(t,e);null!=r||ca(t)&&(i.length||!e.length)||(r=t,t=n,n=this,i=ve(t,Za(t)));var o=!(ca(r)&&"chain"in r&&!r.chain),f=oa(n);return u(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__),u=r.__actions__=Mu(this.__actions__);return u.push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,s([this.value()],arguments))})}),n}function Mc(){return re._===this&&(re._=Ol),this}function Fc(){}function Nc(n){return n=Ia(n),iu(function(t){return He(t,n)})}function Pc(n){return Di(n)?j(ro(n)):Xe(n)}function qc(n){return function(t){return null==n?X:de(n,t)}}function Zc(){return[]}function Kc(){return!1}function Vc(){return{}}function Gc(){return""}function Hc(){return!0}function Jc(n,t){if(n=Ia(n),n<1||n>Sn)return[];var r=Cn,e=Yl(n,Cn);t=Ai(t),n-=Cn;for(var u=R(e,t);++r<n;)t(r);return u}function Yc(n){return mh(n)?l(n,ro):ma(n)?[n]:Mu(Bs(Wa(n)))}function Qc(n){var t=++xl;return Wa(n)+t}function Xc(n){return n&&n.length?ne(n,Uc,xe):X}function nl(n,t){return n&&n.length?ne(n,Ai(t,2),xe):X}function tl(n){return x(n,Uc)}function rl(n,t){return x(n,Ai(t,2))}function el(n){return n&&n.length?ne(n,Uc,Pe):X}function ul(n,t){return n&&n.length?ne(n,Ai(t,2),Pe):X}function il(n){return n&&n.length?I(n,Uc):0}function ol(n,t){return n&&n.length?I(n,Ai(t,2)):0}A=null==A?re:be.defaults(re.Object(),A,be.pick(re,qr));var fl=A.Array,al=A.Date,cl=A.Error,ll=A.Function,sl=A.Math,hl=A.Object,pl=A.RegExp,vl=A.String,_l=A.TypeError,gl=fl.prototype,yl=ll.prototype,dl=hl.prototype,bl=A["__core-js_shared__"],wl=yl.toString,ml=dl.hasOwnProperty,xl=0,jl=function(){var n=/[^.]+$/.exec(bl&&bl.keys&&bl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Al=dl.toString,kl=wl.call(hl),Ol=re._,Il=pl("^"+wl.call(ml).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Rl=ie?A.Buffer:X,zl=A.Symbol,El=A.Uint8Array,Sl=Rl?Rl.allocUnsafe:X,Wl=N(hl.getPrototypeOf,hl),Ll=hl.create,Cl=dl.propertyIsEnumerable,Ul=gl.splice,Bl=zl?zl.isConcatSpreadable:X,Tl=zl?zl.iterator:X,$l=zl?zl.toStringTag:X,Dl=function(){try{var n=Ii(hl,"defineProperty");return n({},"",{}),n}catch(n){}}(),Ml=A.clearTimeout!==re.clearTimeout&&A.clearTimeout,Fl=al&&al.now!==re.Date.now&&al.now,Nl=A.setTimeout!==re.setTimeout&&A.setTimeout,Pl=sl.ceil,ql=sl.floor,Zl=hl.getOwnPropertySymbols,Kl=Rl?Rl.isBuffer:X,Vl=A.isFinite,Gl=gl.join,Hl=N(hl.keys,hl),Jl=sl.max,Yl=sl.min,Ql=al.now,Xl=A.parseInt,ns=sl.random,ts=gl.reverse,rs=Ii(A,"DataView"),es=Ii(A,"Map"),us=Ii(A,"Promise"),is=Ii(A,"Set"),os=Ii(A,"WeakMap"),fs=Ii(hl,"create"),as=os&&new os,cs={},ls=eo(rs),ss=eo(es),hs=eo(us),ps=eo(is),vs=eo(os),_s=zl?zl.prototype:X,gs=_s?_s.valueOf:X,ys=_s?_s.toString:X,ds=function(){function n(){}return function(t){if(!ca(t))return{};if(Ll)return Ll(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();K.templateSettings={escape:At,evaluate:kt,interpolate:Ot,variable:"",imports:{_:K}},K.prototype=J.prototype,K.prototype.constructor=K,Y.prototype=ds(J.prototype),Y.prototype.constructor=Y,Dt.prototype=ds(J.prototype),Dt.prototype.constructor=Dt,nr.prototype.clear=tr,nr.prototype.delete=rr,nr.prototype.get=er,nr.prototype.has=ur,nr.prototype.set=ir,or.prototype.clear=fr,or.prototype.delete=ar,or.prototype.get=cr,or.prototype.has=lr,or.prototype.set=sr,hr.prototype.clear=pr,hr.prototype.delete=vr,hr.prototype.get=_r,hr.prototype.has=gr,hr.prototype.set=yr,dr.prototype.add=dr.prototype.push=br,dr.prototype.has=wr,mr.prototype.clear=xr,mr.prototype.delete=jr,mr.prototype.get=Ar,mr.prototype.has=kr,mr.prototype.set=Or;var bs=Ku(oe),ws=Ku(fe,!0),ms=Vu(),xs=Vu(!0),js=as?function(n,t){return as.set(n,t),n}:Uc,As=Dl?function(n,t){return Dl(n,"toString",{configurable:!0,enumerable:!1,value:Lc(t),writable:!0})}:Uc,ks=iu,Os=Ml||function(n){return re.clearTimeout(n)},Is=is&&1/q(new is([,-0]))[1]==En?function(n){return new is(n)}:Fc,Rs=as?function(n){return as.get(n)}:Fc,zs=Zl?function(n){return null==n?[]:(n=hl(n),f(Zl(n),function(t){return Cl.call(n,t)}))}:Zc,Es=Zl?function(n){for(var t=[];n;)s(t,zs(n)),n=Wl(n);return t}:Zc,Ss=me;(rs&&Ss(new rs(new ArrayBuffer(1)))!=ft||es&&Ss(new es)!=Vn||us&&Ss(us.resolve())!=Yn||is&&Ss(new is)!=nt||os&&Ss(new os)!=ut)&&(Ss=function(n){var t=me(n),r=t==Jn?n.constructor:X,e=r?eo(r):"";if(e)switch(e){case ls:return ft;case ss:return Vn;case hs:return Yn;case ps:return nt;case vs:return ut}return t});var Ws=bl?oa:Kc,Ls=no(js),Cs=Nl||function(n,t){return re.setTimeout(n,t)},Us=no(As),Bs=Ki(function(n){var t=[];return zt.test(n)&&t.push(""),n.replace(Et,function(n,r,e,u){t.push(e?u.replace(Mt,"$1"):r||n)}),t}),Ts=iu(function(n,t){return Qf(n)?Jr(n,ue(t,1,Qf,!0)):[]}),$s=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Jr(n,ue(t,1,Qf,!0),Ai(r,2)):[]}),Ds=iu(function(n,t){var r=ko(t);return Qf(r)&&(r=X),Qf(n)?Jr(n,ue(t,1,Qf,!0),X,r):[]}),Ms=iu(function(n){var t=l(n,Au);return t.length&&t[0]===n[0]?Oe(t):[]}),Fs=iu(function(n){var t=ko(n),r=l(n,Au);return t===ko(r)?t=X:r.pop(),r.length&&r[0]===n[0]?Oe(r,Ai(t,2)):[]}),Ns=iu(function(n){var t=ko(n),r=l(n,Au);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?Oe(r,X,t):[]}),Ps=iu(Ro),qs=bi(function(n,t){var r=null==n?0:n.length,e=Mr(n,t);return tu(n,l(t,function(n){return Ti(n,r)?+n:n}).sort(Bu)),e}),Zs=iu(function(n){return yu(ue(n,1,Qf,!0))}),Ks=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),yu(ue(n,1,Qf,!0),Ai(t,2))}),Vs=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,yu(ue(n,1,Qf,!0),X,t)}),Gs=iu(function(n,t){return Qf(n)?Jr(n,t):[]}),Hs=iu(function(n){return xu(f(n,Qf))}),Js=iu(function(n){var t=ko(n);return Qf(t)&&(t=X),xu(f(n,Qf),Ai(t,2))}),Ys=iu(function(n){var t=ko(n);return t="function"==typeof t?t:X,xu(f(n,Qf),X,t)}),Qs=iu(Jo),Xs=iu(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),r):X,Yo(n,r)}),nh=bi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Mr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Dt&&Ti(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:rf,args:[u],thisArg:X}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),th=qu(function(n,t,r){ml.call(n,r)?++n[r]:Tr(n,r,1)}),rh=Xu(vo),eh=Xu(_o),uh=qu(function(n,t,r){ml.call(n,r)?n[r].push(t):Tr(n,r,[t])}),ih=iu(function(n,t,e){var u=-1,i="function"==typeof t,o=Yf(n)?fl(n.length):[];return bs(n,function(n){o[++u]=i?r(t,n,e):Re(n,t,e)}),o}),oh=qu(function(n,t,r){Tr(n,r,t)}),fh=qu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),ah=iu(function(n,t){if(null==n)return[];var r=t.length;return r>1&&$i(n,t[0],t[1])?t=[]:r>2&&$i(t[0],t[1],t[2])&&(t=[t[0]]),Je(n,ue(t,1),[])}),ch=Fl||function(){return re.Date.now()},lh=iu(function(n,t,r){var e=pn;if(r.length){var u=P(r,ji(lh));e|=dn}return hi(n,e,t,r,u)}),sh=iu(function(n,t,r){var e=pn|vn;if(r.length){var u=P(r,ji(sh));e|=dn}return hi(t,e,n,r,u)}),hh=iu(function(n,t){return Hr(n,1,t)}),ph=iu(function(n,t,r){return Hr(n,za(t)||0,r)});Bf.Cache=hr;var vh=ks(function(n,t){t=1==t.length&&mh(t[0])?l(t[0],E(Ai())):l(ue(t,1),E(Ai()));var e=t.length;return iu(function(u){for(var i=-1,o=Yl(u.length,e);++i<o;)u[i]=t[i].call(this,u[i]);return r(n,this,u)})}),_h=iu(function(n,t){var r=P(t,ji(_h));return hi(n,dn,X,t,r)}),gh=iu(function(n,t){var r=P(t,ji(gh));return hi(n,bn,X,t,r)}),yh=bi(function(n,t){return hi(n,mn,X,X,X,t)}),dh=ai(xe),bh=ai(function(n,t){return n>=t}),wh=ze(function(){return arguments}())?ze:function(n){return la(n)&&ml.call(n,"callee")&&!Cl.call(n,"callee")},mh=fl.isArray,xh=ae?E(ae):Ee,jh=Kl||Kc,Ah=ce?E(ce):Se,kh=le?E(le):Ce,Oh=se?E(se):Te,Ih=he?E(he):$e,Rh=pe?E(pe):De,zh=ai(Pe),Eh=ai(function(n,t){return n<=t}),Sh=Zu(function(n,t){if(Pi(t)||Yf(t))return void Fu(t,Za(t),n);for(var r in t)ml.call(t,r)&&Wr(n,r,t[r])}),Wh=Zu(function(n,t){Fu(t,Ka(t),n)}),Lh=Zu(function(n,t,r,e){Fu(t,Ka(t),n,e)}),Ch=Zu(function(n,t,r,e){Fu(t,Za(t),n,e)}),Uh=bi(Mr),Bh=iu(function(n){return n.push(X,pi),r(Lh,X,n)}),Th=iu(function(n){return n.push(X,vi),r(Nh,X,n)}),$h=ri(function(n,t,r){n[t]=r},Lc(Uc)),Dh=ri(function(n,t,r){ml.call(n,t)?n[t].push(r):n[t]=[r]},Ai),Mh=iu(Re),Fh=Zu(function(n,t,r){Ve(n,t,r)}),Nh=Zu(function(n,t,r,e){Ve(n,t,r,e)}),Ph=bi(function(n,t){var r={};if(null==n)return r;var e=!1;t=l(t,function(t){return t=Ou(t,n),e||(e=t.length>1),t}),Fu(n,mi(n),r),e&&(r=Nr(r,an|cn|ln,_i));for(var u=t.length;u--;)du(r,t[u]);return r}),qh=bi(function(n,t){return null==n?{}:Ye(n,t)}),Zh=si(Za),Kh=si(Ka),Vh=Ju(function(n,t,r){return t=t.toLowerCase(),n+(r?cc(t):t)}),Gh=Ju(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Hh=Ju(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Jh=Hu("toLowerCase"),Yh=Ju(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Qh=Ju(function(n,t,r){return n+(r?" ":"")+np(t)}),Xh=Ju(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),np=Hu("toUpperCase"),tp=iu(function(n,t){try{return r(n,X,t)}catch(n){return ua(n)?n:new cl(n)}}),rp=bi(function(n,t){return u(t,function(t){t=ro(t),Tr(n,t,lh(n[t],n))}),n}),ep=ni(),up=ni(!0),ip=iu(function(n,t){return function(r){return Re(r,n,t)}}),op=iu(function(n,t){return function(r){return Re(n,r,t)}}),fp=ui(l),ap=ui(o),cp=ui(v),lp=fi(),sp=fi(!0),hp=ei(function(n,t){return n+t},0),pp=li("ceil"),vp=ei(function(n,t){return n/t},1),_p=li("floor"),gp=ei(function(n,t){return n*t},1),yp=li("round"),dp=ei(function(n,t){return n-t},0);return K.after=zf,K.ary=Ef,K.assign=Sh,K.assignIn=Wh,K.assignInWith=Lh,K.assignWith=Ch,K.at=Uh,K.before=Sf,K.bind=lh,K.bindAll=rp,K.bindKey=sh,K.castArray=qf,K.chain=nf,K.chunk=oo,K.compact=fo,K.concat=ao,K.cond=Sc,K.conforms=Wc,K.constant=Lc,K.countBy=th,K.create=La,K.curry=Wf,K.curryRight=Lf,K.debounce=Cf,K.defaults=Bh,K.defaultsDeep=Th,K.defer=hh,K.delay=ph,K.difference=Ts,K.differenceBy=$s,K.differenceWith=Ds,K.drop=co,
K.dropRight=lo,K.dropRightWhile=so,K.dropWhile=ho,K.fill=po,K.filter=hf,K.flatMap=pf,K.flatMapDeep=vf,K.flatMapDepth=_f,K.flatten=go,K.flattenDeep=yo,K.flattenDepth=bo,K.flip=Uf,K.flow=ep,K.flowRight=up,K.fromPairs=wo,K.functions=Ma,K.functionsIn=Fa,K.groupBy=uh,K.initial=jo,K.intersection=Ms,K.intersectionBy=Fs,K.intersectionWith=Ns,K.invert=$h,K.invertBy=Dh,K.invokeMap=ih,K.iteratee=Bc,K.keyBy=oh,K.keys=Za,K.keysIn=Ka,K.map=bf,K.mapKeys=Va,K.mapValues=Ga,K.matches=Tc,K.matchesProperty=$c,K.memoize=Bf,K.merge=Fh,K.mergeWith=Nh,K.method=ip,K.methodOf=op,K.mixin=Dc,K.negate=Tf,K.nthArg=Nc,K.omit=Ph,K.omitBy=Ha,K.once=$f,K.orderBy=wf,K.over=fp,K.overArgs=vh,K.overEvery=ap,K.overSome=cp,K.partial=_h,K.partialRight=gh,K.partition=fh,K.pick=qh,K.pickBy=Ja,K.property=Pc,K.propertyOf=qc,K.pull=Ps,K.pullAll=Ro,K.pullAllBy=zo,K.pullAllWith=Eo,K.pullAt=qs,K.range=lp,K.rangeRight=sp,K.rearg=yh,K.reject=jf,K.remove=So,K.rest=Df,K.reverse=Wo,K.sampleSize=kf,K.set=Qa,K.setWith=Xa,K.shuffle=Of,K.slice=Lo,K.sortBy=ah,K.sortedUniq=Mo,K.sortedUniqBy=Fo,K.split=wc,K.spread=Mf,K.tail=No,K.take=Po,K.takeRight=qo,K.takeRightWhile=Zo,K.takeWhile=Ko,K.tap=tf,K.throttle=Ff,K.thru=rf,K.toArray=ka,K.toPairs=Zh,K.toPairsIn=Kh,K.toPath=Yc,K.toPlainObject=Ea,K.transform=nc,K.unary=Nf,K.union=Zs,K.unionBy=Ks,K.unionWith=Vs,K.uniq=Vo,K.uniqBy=Go,K.uniqWith=Ho,K.unset=tc,K.unzip=Jo,K.unzipWith=Yo,K.update=rc,K.updateWith=ec,K.values=uc,K.valuesIn=ic,K.without=Gs,K.words=Ec,K.wrap=Pf,K.xor=Hs,K.xorBy=Js,K.xorWith=Ys,K.zip=Qs,K.zipObject=Qo,K.zipObjectDeep=Xo,K.zipWith=Xs,K.entries=Zh,K.entriesIn=Kh,K.extend=Wh,K.extendWith=Lh,Dc(K,K),K.add=hp,K.attempt=tp,K.camelCase=Vh,K.capitalize=cc,K.ceil=pp,K.clamp=oc,K.clone=Zf,K.cloneDeep=Vf,K.cloneDeepWith=Gf,K.cloneWith=Kf,K.conformsTo=Hf,K.deburr=lc,K.defaultTo=Cc,K.divide=vp,K.endsWith=sc,K.eq=Jf,K.escape=hc,K.escapeRegExp=pc,K.every=sf,K.find=rh,K.findIndex=vo,K.findKey=Ca,K.findLast=eh,K.findLastIndex=_o,K.findLastKey=Ua,K.floor=_p,K.forEach=gf,K.forEachRight=yf,K.forIn=Ba,K.forInRight=Ta,K.forOwn=$a,K.forOwnRight=Da,K.get=Na,K.gt=dh,K.gte=bh,K.has=Pa,K.hasIn=qa,K.head=mo,K.identity=Uc,K.includes=df,K.indexOf=xo,K.inRange=fc,K.invoke=Mh,K.isArguments=wh,K.isArray=mh,K.isArrayBuffer=xh,K.isArrayLike=Yf,K.isArrayLikeObject=Qf,K.isBoolean=Xf,K.isBuffer=jh,K.isDate=Ah,K.isElement=na,K.isEmpty=ta,K.isEqual=ra,K.isEqualWith=ea,K.isError=ua,K.isFinite=ia,K.isFunction=oa,K.isInteger=fa,K.isLength=aa,K.isMap=kh,K.isMatch=sa,K.isMatchWith=ha,K.isNaN=pa,K.isNative=va,K.isNil=ga,K.isNull=_a,K.isNumber=ya,K.isObject=ca,K.isObjectLike=la,K.isPlainObject=da,K.isRegExp=Oh,K.isSafeInteger=ba,K.isSet=Ih,K.isString=wa,K.isSymbol=ma,K.isTypedArray=Rh,K.isUndefined=xa,K.isWeakMap=ja,K.isWeakSet=Aa,K.join=Ao,K.kebabCase=Gh,K.last=ko,K.lastIndexOf=Oo,K.lowerCase=Hh,K.lowerFirst=Jh,K.lt=zh,K.lte=Eh,K.max=Xc,K.maxBy=nl,K.mean=tl,K.meanBy=rl,K.min=el,K.minBy=ul,K.stubArray=Zc,K.stubFalse=Kc,K.stubObject=Vc,K.stubString=Gc,K.stubTrue=Hc,K.multiply=gp,K.nth=Io,K.noConflict=Mc,K.noop=Fc,K.now=ch,K.pad=vc,K.padEnd=_c,K.padStart=gc,K.parseInt=yc,K.random=ac,K.reduce=mf,K.reduceRight=xf,K.repeat=dc,K.replace=bc,K.result=Ya,K.round=yp,K.runInContext=_,K.sample=Af,K.size=If,K.snakeCase=Yh,K.some=Rf,K.sortedIndex=Co,K.sortedIndexBy=Uo,K.sortedIndexOf=Bo,K.sortedLastIndex=To,K.sortedLastIndexBy=$o,K.sortedLastIndexOf=Do,K.startCase=Qh,K.startsWith=mc,K.subtract=dp,K.sum=il,K.sumBy=ol,K.template=xc,K.times=Jc,K.toFinite=Oa,K.toInteger=Ia,K.toLength=Ra,K.toLower=jc,K.toNumber=za,K.toSafeInteger=Sa,K.toString=Wa,K.toUpper=Ac,K.trim=kc,K.trimEnd=Oc,K.trimStart=Ic,K.truncate=Rc,K.unescape=zc,K.uniqueId=Qc,K.upperCase=Xh,K.upperFirst=np,K.each=gf,K.eachRight=yf,K.first=mo,Dc(K,function(){var n={};return oe(K,function(t,r){ml.call(K.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),K.VERSION=nn,u(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){K[n].placeholder=K}),u(["drop","take"],function(n,t){Dt.prototype[n]=function(r){r=r===X?1:Jl(Ia(r),0);var e=this.__filtered__&&!t?new Dt(this):this.clone();return e.__filtered__?e.__takeCount__=Yl(r,e.__takeCount__):e.__views__.push({size:Yl(r,Cn),type:n+(e.__dir__<0?"Right":"")}),e},Dt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),u(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==In||r==zn;Dt.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:Ai(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),u(["head","last"],function(n,t){var r="take"+(t?"Right":"");Dt.prototype[n]=function(){return this[r](1).value()[0]}}),u(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Dt.prototype[n]=function(){return this.__filtered__?new Dt(this):this[r](1)}}),Dt.prototype.compact=function(){return this.filter(Uc)},Dt.prototype.find=function(n){return this.filter(n).head()},Dt.prototype.findLast=function(n){return this.reverse().find(n)},Dt.prototype.invokeMap=iu(function(n,t){return"function"==typeof n?new Dt(this):this.map(function(r){return Re(r,n,t)})}),Dt.prototype.reject=function(n){return this.filter(Tf(Ai(n)))},Dt.prototype.slice=function(n,t){n=Ia(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Dt(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=Ia(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Dt.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Dt.prototype.toArray=function(){return this.take(Cn)},oe(Dt.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=K[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(K.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Dt,a=o[0],c=f||mh(t),l=function(n){var t=u.apply(K,s([n],o));return e&&h?t[0]:t};c&&r&&"function"==typeof a&&1!=a.length&&(f=c=!1);var h=this.__chain__,p=!!this.__actions__.length,v=i&&!h,_=f&&!p;if(!i&&c){t=_?t:new Dt(this);var g=n.apply(t,o);return g.__actions__.push({func:rf,args:[l],thisArg:X}),new Y(g,h)}return v&&_?n.apply(this,o):(g=this.thru(l),v?e?g.value()[0]:g.value():g)})}),u(["pop","push","shift","sort","splice","unshift"],function(n){var t=gl[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);K.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(mh(u)?u:[],n)}return this[r](function(r){return t.apply(mh(r)?r:[],n)})}}),oe(Dt.prototype,function(n,t){var r=K[t];if(r){var e=r.name+"",u=cs[e]||(cs[e]=[]);u.push({name:t,func:r})}}),cs[ti(X,vn).name]=[{name:"wrapper",func:X}],Dt.prototype.clone=Yt,Dt.prototype.reverse=Qt,Dt.prototype.value=Xt,K.prototype.at=nh,K.prototype.chain=ef,K.prototype.commit=uf,K.prototype.next=of,K.prototype.plant=af,K.prototype.reverse=cf,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=lf,K.prototype.first=K.prototype.head,Tl&&(K.prototype[Tl]=ff),K},be=de();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(re._=be,define(function(){return be})):ue?((ue.exports=be)._=be,ee._=be):re._=be}).call(this);
/**
 * Social Likes
 * http://sapegin.github.com/social-likes
 *
 * Sharing buttons for Russian and worldwide social networks.
 *
 * @requires jQuery
 * @author Artem Sapegin
 * @copyright 2014 Artem Sapegin (sapegin.me)
 * @license MIT
 */

/*global define:false, socialLikesButtons:false */

(function(factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	}
	else {
		factory(jQuery);
	}
}(function($, undefined) {

	'use strict';

	var prefix = 'social-likes';
	var classPrefix = prefix + '__';
	var openClass = prefix + '_opened';
	var protocol = location.protocol === 'https:' ? 'https:' : 'http:';


	/**
	 * Buttons
	 */
	var services = {
		facebook: {
			counterUrl: 'https://graph.facebook.com/?id={nsurl}&callback=?',
			convertNumber: function(data) {
				return data.share.share_count;
			},
			popupUrl: 'https://www.facebook.com/sharer/sharer.php?u={nsurl}',
			popupWidth: 600,
			popupHeight: 500
		},
		twitter: {
			popupUrl: 'https://twitter.com/intent/tweet?url={url}&text={title}',
			popupWidth: 600,
			popupHeight: 450,
			click: function() {
				// Add colon to improve readability
				if (!/[\.:\-–—]\s*$/.test(this.options.title)) this.options.title += ':';
				return true;
			}
		},
		mailru: {
			counterUrl: protocol + '//connect.mail.ru/share_count?url_list={url}&callback=1&func=?',
			convertNumber: function(data) {
				for (var url in data) {
					if (data.hasOwnProperty(url)) {
						return data[url].shares;
					}
				}
			},
			popupUrl: protocol + '//connect.mail.ru/share?share_url={url}&title={title}',
			popupWidth: 550,
			popupHeight: 360
		},
		vkontakte: {
			counterUrl: protocol + '//vk.com/share.php?act=count&url={nsurl}&index={index}',
			counter: function(jsonUrl, deferred) {
				var options = services.vkontakte;
				if (!options._) {
					options._ = [];
					if (!window.VK) window.VK = {};
					window.VK.Share.count = function(idx, number) {
                                            options._[idx].resolve(number);
                                        }
				}

				var index = options._.length;
				options._.push(deferred);
				$.getScript(makeUrl(jsonUrl, {index: index}))
					.fail(deferred.reject);
			},
			popupUrl: protocol + '//vk.com/share.php?url={nsurl}&title={title}',
			popupWidth: 550,
			popupHeight: 330
		},
		odnoklassniki: {
			counterUrl: protocol + '//connect.ok.ru/dk/?st.cmd=extLike&ref={url}&uid={index}',
			counter: function(jsonUrl, deferred) {
				var options = services.odnoklassniki;
				if (!options._) {
					options._ = [];
					if (!window.ODKL) window.ODKL = {};
					window.ODKL.updateCount = function(idx, number) {
						options._[idx].resolve(number);
					};
				}

				var index = options._.length;
				options._.push(deferred);
				$.getScript(makeUrl(jsonUrl, {index: index}))
					.fail(deferred.reject);
			},
			popupUrl: 'https://connect.ok.ru/offer?url={url}',
			popupWidth: 550,
			popupHeight: 360
		},
		plusone: {
			counterUrl: protocol + '//share.yandex.ru/gpp.xml?url={url}&callback=?',
			convertNumber: function(number) {
				return parseInt(number.replace(/\D/g, ''), 10);
			},
			popupUrl: 'https://plus.google.com/share?url={url}',
			popupWidth: 500,
			popupHeight: 550
		},
 		telegram: {
			counterUrl: '',
			convertNumber: function(number) {
				return null;
			},
			popupUrl: 'https://telegram.me/share/url?url={url}',
			popupWidth: 600,
			popupHeight: 480
		},
		pinterest: {
			counterUrl: protocol + '//api.pinterest.com/v1/urls/count.json?url={url}&callback=?',
			convertNumber: function(data) {
				return data.count;
			},
			popupUrl: protocol + '//pinterest.com/pin/create/button/?url={url}&description={title}',
			popupWidth: 630,
			popupHeight: 270
		}
	};


	/**
	 * Counters manager
	 */
	var counters = {
		promises: {},
		fetch: function(service, url, extraOptions) {
			if (!counters.promises[service]) counters.promises[service] = {};
			var servicePromises = counters.promises[service];

			if (!extraOptions.forceUpdate && servicePromises[url]) {
				return servicePromises[url];
			}
			else {
				var options = $.extend({}, services[service], extraOptions);
				var deferred = $.Deferred();
				var jsonUrl = options.counterUrl && makeUrl(options.counterUrl, {
					url: url,
					nsurl: url.replace("https://", "http://"),
				});

				if (jsonUrl && $.isFunction(options.counter)) {
					options.counter(jsonUrl, deferred);
				}
				else if (options.counterUrl) {
					$.getJSON(jsonUrl)
						.done(function(data) {
							try {
								var number = data;
								if ($.isFunction(options.convertNumber)) {
									number = options.convertNumber(data);
								}
								deferred.resolve(number);
							}
							catch (e) {
								deferred.reject();
							}
						})
						.fail(deferred.reject);
				}
				else {
					deferred.reject();
				}

				servicePromises[url] = deferred.promise();
				return servicePromises[url];
			}
		}
	};


	/**
	 * jQuery plugin
	 */
	$.fn.socialLikes = function(options) {
		return this.each(function() {
			var elem = $(this);
			var instance = elem.data(prefix);
			if (instance) {
				if ($.isPlainObject(options)) {
					instance.update(options);
				}
			}
			else {
				instance = new SocialLikes(elem, $.extend({}, $.fn.socialLikes.defaults, options, dataToOptions(elem)));
				elem.data(prefix, instance);
			}
		});
	};

	$.fn.socialLikes.defaults = {
		url: window.location.href.replace(window.location.hash, ''),
		title: document.title,
		counters: true,
		position: 'default',
		zeroes: false,
		wait: 500,
		popupCheckInterval: 500,
		singleTitle: 'Share'
	};

	function SocialLikes(container, options) {
		this.container = container;
		this.options = options;
		this.init();
	}

	SocialLikes.prototype = {
		init: function() {
			// Add class in case of manual initialization
			this.container.addClass(prefix);

			this.single = this.container.hasClass(prefix + '_single');
            this.common = this.container.hasClass(prefix + '_common');

			this.initUserButtons();

			this.countersLeft = 0;
			this.number = 0;

			this.container.on('counter.' + prefix, $.proxy(this.updateCounter, this));

			var buttons = this.container.children();

			this.makeSingleButton();

			this.buttons = [];
			buttons.each($.proxy(function(idx, elem) {
				var button = new Button($(elem), this.options);
				this.buttons.push(button);
				if (button.options.counterUrl) this.countersLeft++;
			}, this));

			if (this.options.counters) {
				this.timer = setTimeout($.proxy(this.appear, this), this.options.wait);
			}
			else {
				this.appear();
			}
		},
		initUserButtons: function() {
			if (!this.userButtonInited && window.socialLikesButtons) {
				$.extend(true, services, socialLikesButtons);
			}
			this.userButtonInited = true;
		},
		makeSingleButton: function() {
			if (!this.single) return;

			var container = this.container;
			container.addClass(prefix + '_vertical');
			container.wrap($('<div>', {'class': prefix + '_single-w'}));
			container.wrapInner($('<div>', {'class': prefix + '__single-container'}));
			var wrapper = container.parent();

			// Widget
			var widget = $('<div>', {
				'class': getElementClassNames('widget', 'single')
			});
			var button = $(template(
				'<div class="{buttonCls}">' +
					'<span class="{iconCls}"></span>' +
					'{title}' +
				'</div>',
				{
					buttonCls: getElementClassNames('button', 'single'),
					iconCls: getElementClassNames('icon', 'single'),
					title: this.options.singleTitle
				}
			));
			widget.append(button);
			wrapper.append(widget);

			widget.click(function() {
				var activeClass = prefix + '__widget_active';
				widget.toggleClass(activeClass);
				if (widget.hasClass(activeClass)) {
					container.css({left: -(container.width()-widget.width())/2,  top: -container.height()});
					showInViewport(container);
					closeOnClick(container, function() {
						widget.removeClass(activeClass);
					});
				}
				else {
					container.removeClass(openClass);
				}
				return false;
			});

			this.widget = widget;
		},
		update: function(options) {
			if (!options.forceUpdate && options.url === this.options.url) return;

			// Reset counters
			this.number = 0;
			this.countersLeft = this.buttons.length;
			if (this.widget) this.widget.find('.' + prefix + '__counter').remove();

			// Update options
			$.extend(this.options, options);
			for (var buttonIdx = 0; buttonIdx < this.buttons.length; buttonIdx++) {
				this.buttons[buttonIdx].update(options);
			}
		},
		updateCounter: function(e, service, number) {
			if (number) {
				this.number += number;

				if (this.single) {
					this.getCounterElem().text(this.number);
				}

 				if (this.common) {
					var format = function(num) {
						return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
					}

					this.getCommonElem().text(format(this.number));
				}
			}

			this.countersLeft--;
			if (this.countersLeft === 0) {
				this.appear();
				this.container.addClass(prefix + '_ready');
				this.container.trigger('ready.' + prefix, this.number);
			}
		},
		appear: function() {
			this.container.addClass(prefix + '_visible');
		},
		getCounterElem: function() {
			var counterElem = this.widget.find('.' + classPrefix + 'counter_single');
			if (!counterElem.length) {
				counterElem = $('<span>', {
					'class': getElementClassNames('counter', 'single')
				});
				this.widget.append(counterElem);
			}
			return counterElem;
		},
 		getCommonElem: function() {
			var commonElem = this.container.find("." + classPrefix + "common");
			if (!commonElem.length) {
				commonElem = $('<span>', {
					'class': classPrefix + "common"
				});
				this.container.prepend(commonElem);
			}
			return commonElem;
		},
	};


	function Button(widget, options) {
		this.widget = widget;
		this.options = $.extend({}, options);
		this.detectService();
		if (this.service) {
			this.init();
		}
	}

	Button.prototype = {
		init: function() {
			this.detectParams();
			this.initHtml();
			setTimeout($.proxy(this.initCounter, this), 0);
		},

		update: function(options) {
			$.extend(this.options, {forceUpdate: false}, options);
			this.widget.find('.' + prefix + '__counter').remove();  // Remove old counter
			this.initCounter();
		},

		detectService: function() {
			var service = this.widget.data('service');
			if (!service) {
				// class="facebook"
				var node = this.widget[0];
				var classes = node.classList || node.className.split(' ');
				for (var classIdx = 0; classIdx < classes.length; classIdx++) {
					var cls = classes[classIdx];
					if (services[cls]) {
						service = cls;
						break;
					}
				}
				if (!service) return;
			}
			this.service = service;
			$.extend(this.options, services[service]);
		},

		detectParams: function() {
			var data = this.widget.data();

			// Custom page counter URL or number
			if (data.counter) {
				var number = parseInt(data.counter, 10);
				if (isNaN(number)) {
					this.options.counterUrl = data.counter;
				}
				else {
					this.options.counterNumber = number;
				}
			}

			// Custom page title
			if (data.title) {
				this.options.title = data.title;
			}

			// Custom page URL
			if (data.url) {
				this.options.url = data.url;
			}

			if(data.position) {
				this.options.position = data.position;
			}
		},

		initHtml: function() {
			var options = this.options;
			var widget = this.widget;

			// Old initialization HTML
			var a = widget.find('a');
			if (a.length) {
				this.cloneDataAttrs(a, widget);
			}

			// Button
			var button = $('<span>', {
				'class': this.getElementClassNames('button'),
				'text': widget.text()
			});
			if (options.clickUrl) {
				var url = makeUrl(options.clickUrl, {
					url: options.url,
					nsurl: options.url.replace("https://", "http://"),
					title: options.title
				});
				var link = $('<a>', {
					href: url
				});
				this.cloneDataAttrs(widget, link);
				widget.replaceWith(link);
				this.widget = widget = link;
			}
			else {
				widget.click($.proxy(this.click, this));
			}

			widget.removeClass(this.service);
			widget.addClass(this.getElementClassNames('widget'));

			// Icon
			button.prepend($('<span>', {'class': this.getElementClassNames('icon')}));

			widget.empty().append(button);

            var wrapper = widget.append($('<span>', {
				'class': this.getElementClassNames('wrapper'),
				'data-title': this.service,
				'data-position': this.options.position
				}));

			this.button = button;
		},

		initCounter: function() {
			if (this.options.counters) {
				if (this.options.counterNumber) {
					this.updateCounter(this.options.counterNumber);
				}
				else {
					var extraOptions = {
						counterUrl: this.options.counterUrl,
						forceUpdate: this.options.forceUpdate
					};
					counters.fetch(this.service, this.options.url, extraOptions)
						.always($.proxy(this.updateCounter, this));
				}
			}
		},

		cloneDataAttrs: function(source, destination) {
			var data = source.data();
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					destination.data(key, data[key]);
				}
			}
		},

		getElementClassNames: function(elem) {
			return getElementClassNames(elem, this.service);
		},

		updateCounter: function(number) {
			number = parseInt(number, 10) || 0;

			var params = {
				'class': this.getElementClassNames('counter'),
				'text': number
			};
			if (!number && !this.options.zeroes) {
				params['class'] += ' ' + prefix + '__counter_empty';
				params.text = '';
			}
			var counterElem = $('<span>', params);
			this.widget.append(counterElem);

			this.widget.trigger('counter.' + prefix, [this.service, number]);
		},

		click: function(e) {
			var options = this.options;
			var process = true;
			if ($.isFunction(options.click)) {
				process = options.click.call(this, e);
			}
			if (process) {
				var url = makeUrl(options.popupUrl, {
					url: options.url,
					nsurl: options.url.replace("https://", "http://"),
					title: options.title
				});
				url = this.addAdditionalParamsToUrl(url);
				this.openPopup(url, {
					width: options.popupWidth,
					height: options.popupHeight
				});
			}
			return false;
		},

		addAdditionalParamsToUrl: function(url) {
			var params = $.param($.extend(this.widget.data(), this.options.data));
			if ($.isEmptyObject(params)) return url;
			var glue = url.indexOf('?') === -1 ? '?' : '&';
			return url + glue + params;
		},

		openPopup: function(url, params) {
			var left = Math.round(screen.width/2 - params.width/2);
			var top = 0;
			if (screen.height > params.height) {
				top = Math.round(screen.height/3 - params.height/2);
			}

			var win = window.open(url, 'sl_' + this.service, 'left=' + left + ',top=' + top + ',' +
			   'width=' + params.width + ',height=' + params.height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
			if (win) {
				win.focus();
				this.widget.trigger('popup_opened.' + prefix, [this.service, win]);
				var timer = setInterval($.proxy(function() {
					if (!win.closed) return;
					clearInterval(timer);
					this.widget.trigger('popup_closed.' + prefix, this.service);
				}, this), this.options.popupCheckInterval);
			}
			else {
				location.href = url;
			}
		}
	};


	/**
	 * Helpers
	 */

	 // Camelize data-attributes
	function dataToOptions(elem) {
		function upper(m, l) {
			return l.toUpper();
		}
		var options = {};
		var data = elem.data();
		for (var key in data) {
			var value = data[key];
			if (value === 'yes') value = true;
			else if (value === 'no') value = false;
			options[key.replace(/-(\w)/g, upper)] = value;
		}
		return options;
	}

	function makeUrl(url, context) {
		return template(url, context, encodeURIComponent);
	}

	function template(tmpl, context, filter) {
		return tmpl.replace(/\{([^\}]+)\}/g, function(m, key) {
			// If key doesn't exists in the context we should keep template tag as is
			return key in context ? (filter ? filter(context[key]) : context[key]) : m;
		});
	}

	function getElementClassNames(elem, mod) {
		var cls = classPrefix + elem;
		return cls + ' ' + cls + '_' + mod;
	}

	function closeOnClick(elem, callback) {
		function handler(e) {
			if ((e.type === 'keydown' && e.which !== 27) || $(e.target).closest(elem).length) return;
			elem.removeClass(openClass);
			doc.off(events, handler);
			if ($.isFunction(callback)) callback();
		}
		var doc = $(document);
		var events = 'click touchstart keydown';
		doc.on(events, handler);
	}

	function showInViewport(elem) {
		var offset = 10;
		if (document.documentElement.getBoundingClientRect) {
			var left = parseInt(elem.css('left'), 10);
			var top = parseInt(elem.css('top'), 10);

			var rect = elem[0].getBoundingClientRect();
			if (rect.left < offset)
				elem.css('left', offset - rect.left + left);
			else if (rect.right > window.innerWidth - offset)
				elem.css('left', window.innerWidth - rect.right - offset + left);

			if (rect.top < offset)
				elem.css('top', offset - rect.top + top);
			else if (rect.bottom > window.innerHeight - offset)
				elem.css('top', window.innerHeight - rect.bottom - offset + top);
		}
		elem.addClass(openClass);
	}


	/**
	 * Auto initialization
	 */
	$(function() {
		$('.' + prefix).socialLikes();
	});

 	$(document).on('post-load', function(){
		$('.' + prefix).socialLikes();
	});

}));

(function() {
  if (!window.VK) window.VK = {};
  if (VK.Share) return;

  var head = document.getElementsByTagName('head')[0],
    tpl = function(a, b) {return a.replace(/\{(\w+?)\}/g, function(c, d) {return b[d] !== void 0 ? b[d] : ''})};

  VK.Share = {
    _popups: [],
    _gens: [],
    _base_domain: '',
    _ge: function(id) {
      return document.getElementById(id);
    },
    button: function(gen, but, index) {
      if (!gen) gen = {};
      if (gen === gen.toString()) gen = {url: gen.toString()};
      if (!gen.url) gen.url = VK.Share._loc;
      gen.url = (gen.url || '').replace(/"/g, '');

      if (!but) but = {type: 'round'};
      if (but === but.toString()) but = {type: 'round', text: but};
      if (!but.text) but.text = '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c';

      var old = true, count_style = 'display: none;';
      if (index === undefined) {
        gen.count = 0;
        gen.shared = (but.type == 'button' || but.type == 'round') ? false : true;
        this._gens.push(gen);
        this._popups.push(false);
        index = this._popups.length - 1;
        old = false;
      } else {
        if ((gen.count = this._gens[index].count) && (but.type == 'button' || but.type == 'round')) {
          count_style = '';
        }
        gen.shared = this._gens[index].shared;
        this._gens[index] = gen;
      }

      if (!this._base_domain) {
        for (var elem = head.firstChild; elem; elem = elem.nextSibling) {
          var m;
          if (elem.tagName && elem.tagName.toLowerCase() == 'script' && (m = elem.src.match(/(https?:\/\/(?:[a-z0-9_\-\.]*\.){0,2}(?:vk\.com|vkontakte\.ru)\/)js\/api\/share\.js(?:\?|$)/))) {
            this._base_domain = m[1];
          }
        }
      }
      this._base_domain = this._base_domain.replace('vkontakte.ru', 'vk.com');
      if (!this._base_domain) {
        this._base_domain = '//vk.com/';
      }
      if (!old && (but.type == 'button' || but.type == 'round')) {
        var elem = document.createElement('script');
        elem.src = this._base_domain + 'share.php?act=count&index=' + index + '&url=' + encodeURIComponent(gen.url);
        head.appendChild(elem);
      }

      var radius = '-webkit-border-radius:{v};-moz-border-radius:{v};border-radius:{v};',
        strs = {
          cssreset: '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;',
          domain: this._base_domain,
          table: '<table cellspacing="0" cellpadding="0" style="position: relative; cursor: pointer; width: auto; line-height: normal; border: 0; direction: ltr;" ',
          is2x: window.devicePixelRatio >= 2 ? '_2x' : '',
          i: index,
          a2: '</a>',
          td2: '</td>',
          font: 'font: 400 12px Arial, Helvetica, sans-serif;letter-spacing: 0.1px;text-shadow: none;',
          radiusl: tpl(radius, {v: '2px 0px 0px 2px'}),
          radiusr: tpl(radius, {v: '0px 2px 2px 0px'}),
          radius: tpl(radius, {v: '2px'}),
          text: but.text,
          acolor: 'color: #33567f;',
          bg: 'background: #6287AE;-webkit-transition: background 200ms linear;transition: background 200ms linear;',
        };
      strs.td1 = tpl('<td style="vertical-align: middle;{font}{cssreset}">', strs);
      strs.a = tpl('<a href="{domain}share.php?url=' + encodeURIComponent(gen.url) + '" onmouseup="this._btn=event.button;this.blur();" onclick="return VK.Share.click({i}, this);"', strs);
      strs.a1 = tpl('{a} style="{acolor}text-decoration: none;{font}line-height: 16px;{cssreset}">', strs);
      strs.a3 = tpl('{a} style="display: inline-block;text-decoration: none;{cssreset}">', strs);
      strs.sprite = tpl("background-size: 19px 59px;background-image: url('{domain}images/icons/like_widget{is2x}.png');", strs);
      strs.logo = tpl('<div style="{sprite}height: 8px;width: 14px;margin: 4px 0 3px;{cssreset}"></div>', strs);

      if (but.type == 'round' || but.type == 'round_nocount' || but.type == 'button' || but.type == 'button_nocount') {
         return tpl('{table}id="vkshare{i}" onmouseover="VK.Share.change(1, {i});" onmouseout="VK.Share.change(0, {i});" onmousedown="VK.Share.change(2, {i});" onmouseup="VK.Share.change(1, {i});"><tr style="line-height: normal;">{td1}{a} style="border: 0;display: block;{bg}{radiusl}padding: 2px 6px 4px;{cssreset}">{logo}{a2}{td2}{td1}{a} style="color: #FFF;text-decoration: none;border: 0;{bg}{radiusr}{font}line-height: 16px;display:block;padding: 2px 6px 4px 0;height: 15px;{cssreset}">{text}{a2}{td2}'+ ((but.type == 'round' || but.type == 'button') ? '{td1}{a} style="text-decoration: none;{font}line-height: 15px;-webkit-font-smoothing: subpixel-antialiased;' + count_style + '{cssreset}"><div style="{sprite};background-position: 0 -49px;margin: 5px 0 0 4px;width: 5px; height: 10px;position: absolute; z-index:100;{cssreset}"></div><div id="vkshare_cnt{i}" style="border: 1px solid #adbdcc;background: #FFF;font-size:11px;padding: 2px 5px;margin-left: 8px;color: #55677d;z-index: 99;{radius}{cssreset}">' + gen.count + '</div>{a2}{td2}' : '') + '</tr></table>', strs);
      } else if (but.type == 'link') {
        return tpl('{table}onmouseover="this.rows[0].cells[1].firstChild.style.textDecoration=\'underline\'" onmouseout="this.rows[0].cells[1].firstChild.style.textDecoration=\'none\'"><tr style="line-height: normal;">{td1}{a1}<img src="{domain}images/icons/share_link{is2x}.png" width="16" height="16" style="vertical-align: top;margin-right: 8px;"/>{a2}{td2}{td1}{a1}{text}{a2}{td2}</tr></table>', strs);
      } else if (but.type == 'link_noicon') {
        return tpl('{a3}<span style="{acolor}position: relative;{font}line-height: normal;{cssreset}" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'">{text}</span>{a2}', strs);
      } else {
        return tpl('{a3}<span style="position: relative;padding: 0;{cssreset}">{text}</span>{a2}', strs);
      }
    },
    change: function(state, index) {
      var el = this._ge('vkshare' + index),
        color = ['#6287AE','#678EB4','#5D7FA4'][state],
        els = [el.rows[0].cells[0].firstChild, el.rows[0].cells[1].firstChild];
      for (var i in els) {
        els[i].style.backgroundColor = color;
        els[i].style.color = '#FFF';
        if (state == 2) {
          els[i].style.paddingTop = '3px';
          els[i].style.paddingBottom = '3px';
        } else {
          els[i].style.paddingTop = '2px';
          els[i].style.paddingBottom = '4px';
        }
      }
    },
    click: function(index, el) {
      var e = window.event;
      if (e) {
        if (!e.which && el._btn) e.which = (el._btn & 1 ? 1 : (el._btn & 2 ? 3 : (el._btn & 4 ? 2 : 0)));
        if (e.which == 2) {
          return true;
        }
      }
      var details = this._gens[index];
      if (!details.shared) {
        VK.Share.count(index, details.count + 1);
        details.shared = true;
      }
      var undefined;
      if (details.noparse === undefined) {
        details.noparse = details.title && details.description && details.image;
      }
      details.noparse = details.noparse ? 1 : 0;

      var params = {},
        fields = ['title', 'description', 'image', 'noparse'];

      for (var i = 0; i < fields.length; ++i) {
        if (details[fields[i]]) {
          params[fields[i]] = details[fields[i]];
        }
      }

      var popupName = '_blank',
        width = 650,
        height = 610,
        left = Math.max(0, (screen.width - width) / 2),
        top = Math.max(0, (screen.height - height) / 2),
        url = this._base_domain + 'share.php?url=' + encodeURIComponent(details.url),
        popupParams = 'width='+width+',height='+height+',left='+left+',top='+top+',menubar=0,toolbar=0,location=0,status=0',
        popup = false;

      try {
        var doc_dom = '', loc_hos = '';
        try {
          doc_dom = document.domain;
          loc_hos = location.host;
        } catch (e) {
        }
        if (doc_dom != loc_hos) {
          var ua = navigator.userAgent.toLowerCase();
          if (!/opera/i.test(ua) && /msie/i.test(ua)) {
            throw 'wont work';
          }
        }
        popup = this._popups[index] = window.open('', popupName, popupParams);
        var text = '<form accept-charset="UTF-8" action="' + url + '" method="POST" id="share_form">';
        for (var i in params) {
          text += '<input type="hidden" name="' + i + '" value="' + params[i].toString().replace(/"/g, '&myquot;').replace(/&quot/ig, '&myquot') + '" />';
        }
        text += '</form>';
        text += '<script type="text/javascript">document.getElementById("share_form").submit()</script>';

        text = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">' +
               '<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">' +
               '<head><meta http-equiv="content-type" content="text/html; charset=windows-1251" /></head>' +
               '<body>' + text + '</body></html>';
        popup.document.write(text);
        popup.focus();
      } catch (e) { // ie with changed domain.
        try {
          if (popup) {
            popup.close();
          }
          url += '?';
          for (var i in params) {
            url += encodeURIComponent(i) + '=' + encodeURIComponent(params[i]) + '&';
          }
          popup = this._popups[index] = window.open(url, popupName, popupParams);
          popup.focus();
        } catch (e) {
        }
      }
      return false;
    },
    count: function(index, count) {
      this._gens[index].count = count;
      var elem = this._ge('vkshare'+index);
      if (elem) {
        var counter = this._ge('vkshare_cnt'+index);
        if (counter) {
          if (count) counter.innerHTML = count;
          elem.rows[0].cells[2].firstChild.style.display = count ? 'block' : 'none';
        }
      }
    }
  }

  try {
    VK.Share._loc = location.toString();
  } catch(e) {
    VK.Share._loc = 'http://vk.com/';
  }

})();

try{if (window.stManager) stManager.done('api/share.js');}catch(e){}
