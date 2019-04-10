!function(t,e,i,n){"use strict";var o,s={};s.uuid=(o=0,function(t){return(t=t||"")+ ++o}),s.findFocusElement=function(e){var i=[];return t(e).find("*").each(function(t,e){e.tagName.match(/^A$|AREA|INPUT|TEXTAREA|SELECT|BUTTON/gim)&&-1!==parseInt(e.getAttribute("tabIndex"))&&i.push(e),null!==e.getAttribute("tabIndex")&&parseInt(e.getAttribute("tabIndex"))>=0&&32768!==e.getAttribute("tabIndex",2)&&i.push(e)}),[i[0],i[i.length-1]]},s.checkPrevId=function(t,e){return-1===t.attr("id").indexOf(e)},s.checkFocusibleElement=function(t){var e=t.get(0).tagName.toLowerCase();return"a"===e||"button"===e},function(t,e,i,n){var o="toggle",a={mode:"static",event:"click",speed:300,easing:"swing",anchorEl:'[data-element="toggle__anchor"]',panelEl:'[data-element="toggle__panel"]',onChangeBeforeText:null,onChangeAfterText:null,activeClassName:"is-active",isOpened:!1};function h(e,i){this.element=e,this._name=o,this._defaults=a,this.options=t.extend({},this._defaults,i),this.flag=!1,this.textFlag=!1,this.init()}t.extend(h.prototype,{init:function(){this.buildCache(),this.bindEvents(),this.options.isOpened?this.open():this.close()},destroy:function(){this.flag=!1,this.textFlag=!1,this.unbindEvents().removeCache(),this.$element.removeData("plugin_"+this._name)},buildCache:function(){this.$element=t(this.element),this.$anchor=this.$element.find(this.options.anchorEl),this.$panel=this.$element.find(this.options.panelEl),!s.checkFocusibleElement(this.$anchor)&&this.$anchor.attr({role:"button",tabindex:0});var e=this.$panel.attr("id")?this.$panel.attr("id"):s.uuid(this._name+"-");this.$anchor.attr("aria-controls",e),this.$panel.attr("id",e),null!==this.options.onChangeAfterText&&null!==this.options.onChangeBeforeText&&(this.textFlag=!0)},removeCache:function(){this.$anchor.removeAttr("aria-expended aria-controls tabindex role"),this.$panel.removeAttr("aria-expended style"),!s.checkPrevId(this.$panel,this._name)&&this.$panel.removeAttr("id")},bindEvents:function(){var e,i=this,n="focusin"===(e=i.options.event)?"focusin."+i._name+" mouseenter."+i._name:"click"===e?"click."+i._name+" keydown."+i._name:e+"."+i._name;i.$anchor.off(n).on(n,function(e){e.stopPropagation();var n=e.which||e.keyCode;"click"!==e.type&&"focusin"!==e.type&&13!==n&&32!==n||(i.idx=t(this).data("index"),i.toggle(),e.preventDefault())}),i.$element.off("show."+i._name).on("show."+i._name,function(t){i.show()}),i.$element.off("hide."+i._name).on("hide."+i._name,function(t){i.hide()})},unbindEvents:function(){this.$anchor.off("."+this._name),this.$element.off("."+this._name)},beforeChange:function(t,e){this.$element.trigger("beforeChange",[this,t,e])},afterChange:function(t,e){this.$element.trigger("afterChange",[this,t,e]),e.find(".slick-initialized").length&&e.find(".slick-initialized").slick("setPosition")},toggle:function(){this.flag?this.close():this.open()},open:function(){var t=this;t.flag=!0,t.beforeChange(t.$anchor,t.$panel),t.textFlag&&t.$anchor.text(t.options.onChangeAfterText),t.$anchor.addClass(t.options.activeClassName).attr("aria-expended",!0),"fade"===t.options.mode?t.$panel.stop().fadeIn(t.options.speed,t.options.easing,function(){t.afterChange(t.$anchor,t.$panel)}):"slide"===t.options.mode?t.$panel.stop().slideDown(t.options.speed,t.options.easing,function(){t.afterChange(t.$anchor,t.$panel)}):(t.$panel.stop().show(),t.afterChange(t.$anchor,t.$panel)),t.afterChange(t.$anchor,t.$panel)},close:function(){this.flag=!1,this.beforeChange(this.$anchor,this.$panel),this.textFlag&&this.$anchor.text(this.options.onChangeBeforeText),this.$anchor.removeClass(this.options.activeClassName).attr("aria-expended",!1),"fade"===this.options.mode?this.$panel.stop().fadeOut(this.options.speed,this.options.easing):"slide"===this.options.mode?this.$panel.stop().slideUp(this.options.speed,this.options.easing):this.$panel.stop().hide(),this.afterChange(this.$anchor,this.$panel)},reInit:function(){this.flag=!1,this.textFlag=!1,this.unbindEvents().removeCache().init()}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new h(this,e||t(this).data("options")))})},t(function(){t("[data-element=toggle]").toggle()})}(jQuery,window,document),function(t,e,i,n){var o="tooltip",a={position:"right",mode:"tooltip",indent:10,button:"[data-element=tooltip__button]",panel:"[data-element=tooltip__panel]",tooltipContainerClassName:"pualugin-tooltip-container",activeClassName:"is-active",zindex:100};function h(e,i){this.element=e,this._name=o,this._defaults=a,this.options=t.extend({},this._defaults,i),this.flag=!1,this.init()}t.extend(h.prototype,{init:function(){this.buildCache(),this.bindEvents()},destroy:function(){this.flag=!1,this.$element.removeData("plugin_"+this._name),this.unbindEvents().removeCache()},buildCache:function(){var i="."+this.options.tooltipContainerClassName;this.$element=t(this.element),this.$button=this.$element.find(this.options.button),this.$panel=this.$element.find(this.options.panel),this.$container=t(i).length?t(i):t("body").append("<div class="+this.options.tooltipContainerClassName+"></div>"),this.$win=t(e);var n=this.$panel.attr("id")?this.$panel.attr("id"):s.uuid(this._name),o=s.checkFocusibleElement(this.$button);this.$element.css("display","inline-block"),this.$button.attr({role:"tooltip","aria-describedby":n,"aria-controls":n,"aria-expended":!1,tabindex:o?"":0}),this.$panel.css("z-index",this.options.zindex).attr("id",n).hide().appendTo(t(i))},removeCache:function(){this.$element.removeAttr("style").removeData("plugin_"+this._name),this.$panel.appendTo(this.$element).removeAttr("style"),this.$button.removeAttr("role aria-describedby aria-controls aria-expended"),0===this.$container.find(this.options.panel).length&&this.$container.remove(),!s.checkPrevId(this.$panel,this._name)&&this.$panel.removeAttr("id")},bindEvents:function(){var t=this,e="tooltip"===t.options.mode?["focusin."+t._name+" mouseenter."+t._name,"focusout."+t._name+" mouseleave."+t._name]:["click."+t._name];1==e.length?(t.$button.on(e[0],function(e){e.preventDefault(),t.toggle()}),t.$win.on(e[0],function(e){t.flag&&(t.$element.is(e.target)||0!==t.$element.has(e.target).length||t.close())})):2==e.length&&t.$button.on(e[0],function(e){e.preventDefault(),t.open()}).on(e[1],function(e){e.preventDefault(),t.close()})},unbindEvents:function(){this.$button.off("."+this._name),this.$win.off("."+this._name)},toggle:function(){this.flag?this.close():this.open()},open:function(){this.flag=!0,this.$button.attr("aria-expended",!0),this.$panel.css("position","absolute").addClass(this.options.activeClassName).show(),this.setPosition()},close:function(){this.flag=!1,this.$button.attr("aria-expended",!1),this.$panel.css("position","").removeClass(this.options.activeClassName).hide()},setPosition:function(){var t=this.$button.outerWidth(),e=this.$button.outerHeight(),i=this.$panel.outerWidth(),n=this.$panel.outerHeight(),o=this.$button.offset(),s=o.top,a=o.left;switch(this.options.position){case"left":this.$panel.css({top:s+(e-n)/2,left:a-i-this.options.indent});break;case"top":this.$panel.css({top:s-n-this.options.indent,left:Math.abs(a+t/2)-Math.abs(i/2)});break;case"bottom":this.$panel.css({top:s+e+this.options.indent,left:Math.abs(a+t/2)-Math.abs(i/2)});break;default:this.$panel.css({top:s+(e-n)/2,left:a+t+this.options.indent})}},reInit:function(){this.flag=!1,this.unbindEvents().removeCache().init()}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new h(this,e||t(this).data("options")))})},t(function(){t("[data-element=tooltip]").tooltip()})}(jQuery,window,document),function(t,e,i,n){var o="tab",a={mode:"static",event:"click",speed:300,easing:"swing",listEl:'[data-element="tab__list"]',anchorEl:'[data-element="tab__anchor"]',panelEl:'[data-element="tab__panel"]',activeClassName:"is-active",disabledClassName:"is-disabled",withScroll:!1,isInitActive:!0,initIndex:0,selectedText:"Selected"};function h(e,i){this.element=e,this._name=o,this._defaults=a,this.options=t.extend({},this._defaults,i),this.flag=!1,this.initialized=!1,this.idx=0,this.init()}t.extend(h.prototype,{init:function(){this.buildCache(),this.bindEvents(),this.options.isInitActive&&this.$anchor.eq(this.options.initIndex).trigger(this.options.event),this.initialized=!0},destroy:function(){this.idx=0,this.flag=!1,this.initialized=!1,this.$element.removeData("plugin_"+this._name),this.unbindEvents().removeCache()},buildCache:function(){var e=this,i=[];e.$element=t(e.element),e.$anchor=e.$element.find(e.options.anchorEl),e.$panel=e.$element.find(e.options.panelEl),e.$list=e.$element.find(e.options.listEl),e.$anchor.each(function(n){var o=t(this),a=o.attr("id")?o.attr("id"):s.uuid("pualugin-"+e._name+"-"),h=s.checkFocusibleElement(o);o.data(e._name+"_target",e.$panel.eq(n)).data("index",n).attr({id:a,role:"tab",tabindex:h?"":0}),i.push(a)}),e.$panel.each(function(e){t(this).attr({"aria-labelledby":i[e],role:"tabpanel",tabindex:0})}),e.$list.attr("role","tablist")},removeCache:function(){this.$list.removeAttr("role"),this.$anchor.removeAttr("style role").removeClass(this.options.activeClassName),this.$panel.removeAttr("style role aria-labelledby").removeClass(this.options.activeClassName),!s.checkPrevId(this.$panel,this._name)&&this.$panel.removeAttr("id")},bindEvents:function(){var e,i=this,n="focusin"===(e=i.options.event)?"focusin."+i._name+" mouseenter."+i._name:"click"===e?"click."+i._name+" keydown."+i._name:e+"."+i._name;i.$anchor.off(n).on(n,function(e){e.stopPropagation();var n=t(this);if(n.hasClass(i.options.activeClassName)||n.hasClass(i.options.disabledClassName)||i.flag)return!1;var o=e.which;"click"!==e.type&&"focusin"!==e.type&&13!==o&&32!==o||(i.idx=t(this).data("index"),i.hide(this),i.show(this),e.preventDefault())})},unbindEvents:function(){this.$anchor.off("."+this._name).removeData(this._name+"_target"),this.$element.off("."+this._name)},beforeChange:function(t,e){this.$element.trigger("beforeChange",[this,t,e])},afterChange:function(t,e){this.$element.trigger("afterChange",[this,t,e]),e.find(".slick-initialized").length&&e.find(".slick-initialized").slick("setPosition")},show:function(e){var i=this,n=t(e),o=n.addClass(i.options.activeClassName).attr({"aria-selected":!0,title:i.options.selectedText}).data(i._name+"_target").addClass(i.options.activeClassName);i.flag=!0,i.beforeChange(n,o),"fade"===i.options.mode?o.stop().fadeIn(i.options.speed,i.options.easing,function(){i.flag=!1,i.afterChange(n,o)}):"slide"===i.options.mode?o.stop().slideDown(i.options.speed,i.options.easing,function(){i.flag=!1,i.afterChange(n,o)}):(o.stop().show(),i.flag=!1,i.afterChange(n,o)),i.options.withScroll&&i.initialized&&t("html, body").stop().animate({scrollTop:i.$element.offset().top},i.options.speed)},hide:function(e){var i=this;i.$anchor.not(e).each(function(){var e=t(this).removeClass(i.options.activeClassName).attr({"aria-selected":!1,title:""}).data(i._name+"_target").removeClass(i.options.activeClassName);"fade"===i.options.mode?e.stop().fadeOut(i.options.speed,i.options.easing):"slide"===i.options.mode?e.stop().slideUp(i.options.speed,i.options.easing):e.stop().hide()})},go:function(e,i){this.$anchor.eq(e).trigger(this.options.event),i&&this.initialized&&t("html, body").stop().animate({scrollTop:this.$element.offset().top},this.options.speed)},reInit:function(){this.idx=0,this.flag=!1,this.initialized=!1,this.unbindEvents().removeCache().init()}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new h(this,e||t(this).data("options")))})},t(function(){t("[data-element=tab]").tab()})}(jQuery,window,document),function(t,e,i,n){var o="accordion",a={mode:"slide",speed:200,easing:"linear",itemEl:'[data-element="accordion__item"]',anchorEl:'[data-element="accordion__anchor"]',panelEl:'[data-element="accordion__panel"]',activeClassName:"is-active",initIndex:0,isInitActive:!0,autoFold:!0,autoScroll:!1};function h(e,i){this.element=e,this._name=o,this._defaults=a,this.options=t.extend({},this._defaults,i),this.flag=!1,this.initialized=!1,this.init()}t.extend(h.prototype,{init:function(){this.buildCache(),this.bindEvents(),this.options.isInitActive&&this.open(this.$anchor.eq(this.options.initIndex)),this.initialized=!0},destroy:function(){this.flag=!1,this.initialized=!1,this.$element.removeData("plugin_"+this._name),this.unbindEvents().removeCache()},buildCache:function(){var e=this;e.$wrap=t(e.element).attr("role","presentation"),e.$header=e.$wrap.find(e.options.itemEl),e.$anchor=e.$wrap.find(e.options.anchorEl),e.$panel=e.$wrap.find(e.options.panelEl).hide();var i=[];e.$anchor.each(function(n){var o=t(this),a=o.attr("id")?o.attr("id"):s.uuid("pualugin-"+e._name+"-");o.data(e._name+"_target",e.$panel.eq(n)).data("index",n).data("title",t.trim(o.text())).attr({id:a,"aria-expanded":!1,"aria-controls":a+"-panel"}),i.push(a)}),e.$panel.each(function(e){t(this).attr({"aria-labelledby":i[e],role:"region"}).hide()})},removeCache:function(){this.$anchor.data(this._name+"_target","").data("index","").data("title","").removeAttr("id aria-expanded aria-controls"),this.$panel.removeAttr("aria-labelledby role"),!s.checkPrevId(this.$anchor,this._name)&&this.$anchor.removeAttr("id")},bindEvents:function(){var e=this;e.$wrap.off("click."+e._name).on("click."+e._name,e.options.anchorEl,function(i){if(i.stopPropagation(),i.preventDefault(),e.flag)return!1;e.toggle(t(this))}),e.$anchor.off("open."+e._name).on("open."+e._name,function(){e.open(t(this))}),e.$anchor.off("close."+e._name).on("close."+e._name,function(){e.close(t(this))})},unbindEvents:function(){this.$wrap.off("."+this._name),this.$header.off("."+this._name)},beforeChange:function(t){this.$wrap.trigger("beforeChange",[this,t])},afterChange:function(t){this.$wrap.trigger("afterChange",[this,t])},toggle:function(t){this.flag=!0,t.hasClass(this.options.activeClassName)?this.close(t):this.open(t)},open:function(e){var i=this;i.beforeChange(e);var n=e.data(i._name+"_isOpen",!0).addClass(i.options.activeClassName).data(i._name+"_target").addClass(i.options.activeClassName);i.initialized&&"slide"===i.options.mode?n.stop().slideDown(i.options.speed,i.options.easing,function(){i.flag=!1,i.options.autoScroll&&t("html, body").stop().animate({scrollTop:e.offset().top},100)}):(n.stop().show(),i.flag=!1),e.attr("aria-expanded",!1),i.options.autoFold&&i.$anchor.not(e).each(function(){i.close(t(this))}),i.afterChange(e)},close:function(t){var e=this;e.beforeChange(t);var i=t.data(e._name+"_isOpen",!1).removeClass(e.options.activeClassName).data(e._name+"_target").removeClass(e.options.activeClassName);"slide"===e.options.mode?i.stop().slideUp(e.options.speed,e.options.easing,function(){e.flag=!1}):(i.stop().hide(),e.flag=!1),t.attr("aria-expanded",!1),e.afterChange(t)},go:function(e,i){this.$anchor.eq(e).trigger("click"),i&&t("html, body").stop().animate({scrollTop:this.$wrap.offset().top},this.options.speed)},reInit:function(){this.flag=!1,this.initialized=!1,this.unbindEvents().removeCache().init()}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new h(this,e||t(this).data("options")))})},t(function(){t("[data-element=accordion]").accordion()})}(jQuery,window,document),function(t,e,i,n){var o="sticky",s={position:"top",top:0,sectionEl:"[data-element=sticky__section]",headerEl:"[data-element=sticky__target-parent]",targetEl:"[data-element=sticky__target]",activeClassName:"is-sticky"};function a(e,i){this.element=e,this._name=o,this._defaults=s,this.options=t.extend({},this._defaults,i),this.flag=!1,this.headerHeight=0,this.init()}t.extend(a.prototype,{init:function(){this.buildCache(),this.bindEvents()},destroy:function(){this.flag=!1,this.headerHeight=0,this.$element.removeData("plugin_"+this._name),this.unbindEvents().removeCache().init()},buildCache:function(){this.$element=t(this.element),this.$header=this.$element.find(this.options.headerEl),this.$target=this.$element.find(this.options.targetEl),this.$win=t(e),this.headerHeight=this.$header.outerHeight()},removeCache:function(){this.$element.removeAttr("style"),this.$header.removeAttr("style"),this.$target.removeAttr("style")},bindEvents:function(){var e=this;e.$win.on("scroll."+e._name,function(){var i=t(this).scrollTop();e.toggle(i)}).on("resize."+e._name,function(){t(this).trigger("scroll")})},unbindEvents:function(){plugin.$win.off("."+plugin._name)},toggle:function(t){this.getPosition(),t>this.bottom?(this.unFixed(),this.bottomRelative()):t>=this.top?(this.bottomFixed(),this.setFixed()):t<=this.top&&this.unFixed()},setFixed:function(){this.beforeChange(),this.$header.css("height",this.headerHeight),this.$target.css({position:"fixed",top:this.options.top,left:this.$header.offset().left,width:this.$header.outerWidth()}),this.afterChange()},unFixed:function(){this.$header.css("height",this.headerHeight),this.$target.css({position:"",top:"",left:"",width:""})},bottomFixed:function(){this.$element.css({position:""}),this.$target.css({position:"",bottom:"",width:""})},bottomRelative:function(){this.$element.css("position","relative"),this.$target.css({position:"absolute",bottom:"0",top:"auto",width:"100%"})},getOffsetTop:function(e){var i=this.$element.offset().top,n=this.$header.height(),o=this.options.position,s=this.options.top;return e?t(e).offset().top-s:"bottom"===o?i+n-s:"middle"===o?i+n/2-s:i-s},getPosition:function(){this.top=this.getOffsetTop(this.$element),this.bottom=this.top+(this.$element.outerHeight()-this.headerHeight)},beforeChange:function(){this.$element.trigger("beforeChange",[this,this.$target])},afterChange:function(){this.$element.trigger("afterChange",[this,this.$target])},reInit:function(){this.flag=!1,this.headerHeight=0,this.unbindEvents().removeCache().init()}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new a(this,t.extend({},e,t(this).data("options"))))})},t(function(){t("[data-element=sticky]").sticky()})}(jQuery,window,document),function(t,e,i,n){var o="formCtrl",s={input:"[data-element=form-ctrl__input]",textarea:"[data-element=form-ctrl__textarea]",delete:"[data-element=form-ctrl__delete]",count:"[data-element=form-ctrl__count]",countCurrent:"[data-element=form-ctrl__count-current]",countTotal:"[data-element=form-ctrl__count-total]",activeClassName:"is-active",autoHeight:!1};function a(e,i){this.element=e,this._name=o,this._defaults=s,this.options=t.extend({},this._defaults,i),this.init()}t.extend(a.prototype,{init:function(){this.buildCache(),this.bindEvents()},buildCache:function(){this.$element=t(this.element),this.$input=this.$element.find(this.options.input),this.$textarea=this.$element.find(this.options.textarea),this.$delete=this.$element.find(this.options.delete),this.$count=this.$element.find(this.options.count),this.$countCurrunt=this.$element.find(this.options.countCurrent),this.$countTotal=this.$element.find(this.options.countTotal)},bindEvents:function(){var t=this;t.$input.on("keyup."+t._name,function(e){t.toggle(this)}).keyup(),t.$delete.on("click."+t._name,function(e){e.preventDefault(),t.delete()}),t.$textarea.on("keyup."+t._name+" input."+t._name,function(e){t.count(e),t.options.autoHeight&&t.resize()}).keyup()},toggle:function(e){t(e).val().length>0?this.show():this.hide()},show:function(){-1!=this.$input.attr("class").indexOf("search")&&t(".search__COMMON-button-box").hide(),this.$delete.addClass(this.options.activeClassName)},hide:function(){this.$delete.removeClass(this.options.activeClassName),-1!=this.$input.attr("class").indexOf("search")&&t(".search__COMMON-button-box").show()},delete:function(){this.$input.val("").focus(),this.hide()},count:function(t){var e=this.$countTotal.text()||500,i=this.$textarea.val().length;i<=e?this.$countCurrunt.text(i):this.$countCurrunt.text(this.$countTotal.text())},resize:function(){var t=this.$textarea.css("padding-top").replace("px",""),e=this.$textarea.css("padding-bottom").replace("px","");this.$textarea.css({height:"auto",overflow:"hidden"}).height(this.$textarea[0].scrollHeight-t-e)}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new a(this,e||t(this).data("options")))})},t(function(){t("[data-element=form-ctrl]").formCtrl()})}(jQuery,window,document),function(t,e,i,n){var o="modal",a={closeExisting:!0,stackLevel:10,activeClassName:"is-open",contentsWrapClassName:"pualugin-wrap",modalClassName:"pualugin-modal",modalMaskClassName:"pualugin-modal__mask",container:"[data-element=modal]",modal:"[data-element=modal__element]",modalInner:"[data-element=modal__element-container]",mask:"[data-element=modal__mask]",close:"[data-element=modal__close]",open:"[data-element=modal__open]"};function h(e,i){this.element=e,this._name=o,this._defaults=a,this.options=t.extend({},this._defaults,i),this.flag=!1,this.stackLevel=this.options.stackLevel,this.fullSize=!1,this.currentScrollTop=0,this.init()}t.extend(h.prototype,{init:function(){var e=t("<div></div>").addClass(this.options.modalClassName).attr("data-element","modal").appendTo("body");t(this.options.modal).appendTo(e),this.buildCache(),this.bindEvents()},destroy:function(){this.flag=!1,this.stackLevel=10,this.$element.removeData("plugin_"+this._name),this.unbindEvents().removeCache()},buildCache:function(){this.$element=t(this.element),this.$container=this.$element.find(this.options.container),this.$modal=this.$element.find(this.options.modal),this.$modalInner=this.$element.find(this.options.modalInner),this.$open=this.$element.find(this.options.open),this.$close=this.$element.find(this.options.close),this.$win=t(e),this.$doc=t(i),this.$body=t("body"),this.$html=t("html"),this.$modal.attr({role:"dialog","aria-modal":!0}),this.$open.attr({"aria-expended":!1,"aria-controls":this.$open.data("target")})},remoevCache:function(){this.$modal.removeAttr("role aria-modal z-index tabindex")},bindEvents:function(){var e=this;e.$close.on("click."+e._name,function(i){i.preventDefault(),i.stopPropagation(),e.close(t(this).closest(e.options.modal))}),null!==e.$open&&e.$open.on("click."+e._name,function(i){i.preventDefault(),i.stopPropagation(),e.open(t(this).data("target"),t(this))}),e.$doc.on("click."+e._name,function(t){e.$modalInner.is(t.target)||0!==e.$modalInner.has(t.target).length||e.close(t.target)}),e.$modal.each(function(){var i=s.findFocusElement(this),n=t(i[0]),o=t(i[1]);n.on("keydown."+e._name,function(t){var e=t.keyCode||t.which;t.shiftKey&&9===e&&(t.preventDefault(),o.focus())}),o.on("keydown."+e._name,function(t){9!=(t.keyCode||t.which)||t.shiftKey||(t.preventDefault(),n.focus())})})},unbindEvents:function(){var e=this;null!==e.$open&&e.$open.off("."+e._name),e.$close.off("."+e._name),e.$doc.off("."+e._name),e.$modal.each(function(){var i=s.findFocusElement(this);t(i[0]).off("."+e._name),t(i[1]).off("."+e._name)})},open:function(e,i){var o=this,s=t(e);o.options.closeExisting?o.$modal.not(s).each(function(){o.close(this)}):o.stackLevel+=10,i!==n&&i.attr("aria-expended",!0),o.wrappingContents("open"),s.attr({tabindex:0,"z-index":o.stackLevel}).addClass(o.options.activeClassName).focus(),o.$body.trigger("modalOpen",[o,s])},close:function(e){var i=t(e);!this.options.closeExisting&&(this.stackLevel-=10),this.wrappingContents("close"),i.attr({tabindex:"","z-index":""}).removeClass(this.options.activeClassName),this.$open.each(function(){var e=t(this);e.data("target")==="#"+i.attr("id")&&e.attr("aria-expended",!1).focus()}),this.$body.trigger("modalClose",[this,i])},wrappingContents:function(e){if("open"===e){this.currentScrollTop=this.$win.scrollTop();var i=t("<div></div>").attr("id",this.options.contentsWrapClassName).prependTo("body").css({position:"fixed",width:"100%",height:"100%",overflow:"hidden"});this.$html.find("body > *").not("script, style, #__bs_notify__, ."+this.options.modalClassName).not("#"+this.options.contentsWrapClassName).appendTo(i),i.scrollTop(this.currentScrollTop)}else this.$element.find("#pualugin-wrap > *").prependTo("body"),this.$element.find("#pualugin-wrap").remove(),t("html, body").scrollTop(this.currentScrollTop)},test:function(e){var i,n,o=!0,s=!1;e.on("scroll",function(e){t(this).scrollTop()+t(this).outerHeight()===t(this).outerHeight()?(console.log("topFlag true"),o=!0,s=!1):t(this).scrollTop()+t(this).outerHeight()===t(this).prop("scrollHeight")&&(console.log("bottomFlag true"),o=!1,s=!0)}),this.$doc.on("touchstart",function(t){i=t.originalEvent.touches[0].screenY}),this.$doc.on("touchmove",function(t){n=t.originalEvent.touches[0].screenY,i>n?(o&&(o=!1,e.off("touchmove")),s&&e.on("touchmove",function(t){console.log("Dont move"),t.preventDefault()})):(o&&e.on("touchmove",function(t){console.log("Dont move"),t.preventDefault()}),s&&(s=!1,e.off("touchmove")))})}}),t.fn[o]=function(e){return this.each(function(){t.data(this,"plugin_"+o)||t.data(this,"plugin_"+o,new h(this,e||t(this).data("options")))})},t(function(){t("body").modal()})}(jQuery,window,document,n),function(t,e,i,n){var o={};function s(e,i){this.element=e,this._defaults=o,this.options=t.extend({},this._defaults,i),this.init()}t.extend(s.prototype,{init:function(){this.buildCache(),this.bindEvents()},buildCache:function(){this.$element=t(this.element)},bindEvents:function(){var t="init."+this._name,e=(this._name,"beforeChange."+this._name),i=(this._name,"afterChange."+this._name),n="destroy."+this._name;this.$element.on(t,function(t,e){}),this.$element.on(e,function(t,e){}),this.$element.on(i,function(t,e){}),this.$element.on(n,function(t,e){})}}),t.fn.overrideSlick=function(e){return this.each(function(){t.data(this,"plugin_overrideSlick")||t.data(this,"plugin_overrideSlick",new s(this,e||t(this).data("options")))})},t(function(){t("body").overrideSlick()})}(jQuery,window,document)}(jQuery,window,document,void 0);