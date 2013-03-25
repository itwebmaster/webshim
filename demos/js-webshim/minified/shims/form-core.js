(function(e){"use strict";var t="webkitURL"in window,i=window.Modernizr,n=e.webshims,a=n.bugs,r=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),o=function(){if(r[0].querySelector)try{a.findRequired=!r[0].querySelector("select:required")}catch(e){a.findRequired=!1}},s=e("input",r).eq(0),u=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};a.findRequired=!1,a.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var i=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}},!i.formvalidation||a.bustedValidity?o():(n.capturingEvents(["input"]),n.capturingEvents(["invalid"],!0),(window.opera||window.testGoodWithFix)&&(r.appendTo("head"),o(),a.validationMessage=!s.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),r.remove(),e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(i){var a=n.defineNodeNameProperty(i,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var i=a.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,i}}})})})})),t&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,i=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(i=e.target.form)&&setTimeout(function(){i=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&i&&i==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()),e.webshims.register("form-core",function(e,n,a,r,o,s){var u={checkbox:1,radio:1},l=e([]),c=n.bugs,p=function(t){t=e(t);var i,n,a=l;return"radio"==t[0].type&&(n=t.prop("form"),i=t[0].name,a=i?n?e(n[i]):e(r.getElementsByName(i)).filter(function(){return!e.prop(this,"form")}):t,a=a.filter('[type="radio"]')),a},d=n.getContentValidationMessage=function(t,i,n){var a=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return n&&a[n]&&(a=a[n]),"object"==typeof a&&(i=i||e.prop(t,"validity")||{valid:1},i.valid||e.each(i,function(e,t){return t&&"valid"!=e&&a[e]?(a=a[e],!1):o})),"object"==typeof a&&(a=a.defaultMessage),a||""},h={number:1,range:1,date:1},f=function(t){var i=!1;return e(e.prop(t,"elements")).each(function(){return i=e(this).is(":invalid"),i?!1:o}),i};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!f(t):!(!e.prop(t,"willValidate")||!v(t))},"invalid-element":function(t){return e.nodeName(t,"form")?f(t):!(!e.prop(t,"willValidate")||v(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||i.rangeOverflow||i.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var i=e.prop(t,"validity");return!(!i||!i.rangeOverflow&&!i.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(i){}return!1};var m=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(c.bustedValidity||c.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,a=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/gi,o=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,i=function(i){var n=arguments;return n=e.call(n,1,n.length),n.unshift(i.replace(a,o)),t.apply(this,n)};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}(),(!i.prefixed||i.prefixed("matchesSelector",r.documentElement))&&(e.find.matchesSelector=function(e,t){return t=t.replace(a,o),n.call(this,e,t)})}();var g=e.prop,y={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,i,n){var a=g.apply(this,arguments);return t&&"form"in t&&y[i]&&n!==o&&e(t).hasClass(T)&&v(t)&&(e(t).getShadowElement().removeClass(T),"checked"==i&&n&&p(t).not(t).removeClass(T).removeAttr("aria-invalid")),a};var b=function(t,i){var n;return e.each(t,function(t,a){return a?(n="customError"==t?e.prop(i,"validationMessage"):t,!1):o}),n},w=function(e){var t;try{t=r.activeElement.name===e}catch(i){}return t},T="user-error",x="user-success",E={time:1,date:1,month:1,datetime:1,week:1,"datetime-local":1},N=function(i){var n,a;if(i.target&&(n=e(i.target).getNativeElement()[0],"submit"!=n.type&&e.prop(n,"willValidate"))){a=e.data(n,"webshimsswitchvalidityclass");var r=function(){if("focusout"!=i.type||"radio"!=n.type||!w(n.name)){var a,r,o,s,l,d=e.prop(n,"validity"),h=e(n).getShadowElement();t&&"change"==i.type&&!c.bustedValidity&&E[h.prop("type")]&&h.is(":focus")||(e(n).trigger("refreshCustomValidityRules"),d.valid?h.hasClass(x)||(a=x,r=T,s="changedvaliditystate",o="changedvalid",u[n.type]&&n.checked&&p(n).not(n).removeClass(r).addClass(a).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(l=b(d,n),e.data(n,"webshimsinvalidcause")!=l&&(e.data(n,"webshimsinvalidcause",l),s="changedvaliditystate"),h.hasClass(T)||(a=T,r=x,u[n.type]&&!n.checked&&p(n).not(n).removeClass(r).addClass(a),o="changedinvalid")),a&&(h.addClass(a).removeClass(r),setTimeout(function(){e(n).trigger(o)},0)),s&&setTimeout(function(){e(n).trigger(s)},0),e.removeData(n,"webshimsswitchvalidityclass"))}};a&&clearTimeout(a),"refreshvalidityui"==i.type?r():e.data(n,"webshimsswitchvalidityclass",setTimeout(r,9))}};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",N),m.changedvaliditystate=!0,m.refreshCustomValidityRules=!0,m.changedvalid=!0,m.changedinvalid=!0,m.refreshvalidityui=!0,n.triggerInlineForm=function(t,i){e(t).trigger(i)},n.modules["form-core"].getGroupElements=p;var k=function(){n.scrollRoot=t||"BackCompat"==r.compatMode?e(r.body):e(r.documentElement)};k(),n.ready("DOM",k),n.getRelOffset=function(t,i){t=e(t);var n,a=e(i).offset();return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){n=t.offset()}),a.top-=n.top,a.left-=n.left,a},n.wsPopover={_create:function(){this.options=e.extend({},n.cfg.wspopover,this.options),this.id=n.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},isInElement:function(t,i){return t==i||e.contains(t,i)},show:function(t){var i=e.Event("wspopoverbeforeshow");if(this.element.trigger(i),!i.isDefaultPrevented()&&!this.isVisible){this.isVisible=!0,t=e(t||this.options.prepareFor).getNativeElement();var n=this,o=e(t).getShadowElement();this.clear(),this.element.removeClass("ws-po-visible").css("display","none"),this.prepareFor(t,o),this.position(o),n.timers.show=setTimeout(function(){n.element.css("display",""),n.timers.show=setTimeout(function(){n.element.addClass("ws-po-visible").trigger("wspopovershow")},9)},9),e(r).on("focusin"+this.eventns+" mousedown"+this.eventns,function(e){!n.options.hideOnBlur||n.stopBlur||n.isInElement(n.lastElement[0]||r.body,e.target)||n.isInElement(t[0]||r.body,e.target)||n.isInElement(n.element[0],e.target)||n.hide()}),e(a).on("resize"+this.eventns+" pospopover"+this.eventns,function(){clearTimeout(n.timers.repos),n.timers.repos=setTimeout(function(){n.position(o)},900)})}},prepareFor:function(t,i){var n,a=e.extend({},this.options,e(t.prop("form")||[]).data("wspopover")||{},t.data("wspopover")),r=this;this.lastElement=e(t).getShadowFocusElement(),"element"==a.appendTo?this.element.insertAfter(t):this.element.appendTo(a.appendTo),this.element.attr({"data-class":t.prop("className"),"data-id":t.prop("id")}),this.element.css({width:a.constrainWidth?i.outerWidth():""}),a.hideOnBlur&&(n=function(e){r.stopBlur?e.stopImmediatePropagation():r.hide()},r.timers.bindBlur=setTimeout(function(){r.lastElement.off(r.eventns).on("focusout"+r.eventns+" blur"+r.eventns,n),r.lastElement.getNativeElement().off(r.eventns)},10)),this.prepared||e.fn.bgIframe&&this.element.bgIframe(),this.prepared=!0},clear:function(){e(a).off(this.eventns),e(r).off(this.eventns),this.stopBlur=!1,e.each(this.timers,function(e,t){clearTimeout(t)})},hide:function(){var t=e.Event("wspopoverbeforehide");if(this.element.trigger(t),!t.isDefaultPrevented()&&this.isVisible){this.isVisible=!1;var i=this,n=function(){i.element.css("display","none").attr({"data-id":"","data-class":"",hidden:"hidden"}),clearTimeout(i.timers.forcehide)};this.clear(),this.element.removeClass("ws-po-visible").trigger("wspopoverhide"),e(a).on("resize"+this.eventns,n),i.timers.forcehide=setTimeout(n,999)}},position:function(e){var t=n.getRelOffset(this.element.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0}).removeAttr("hidden"),e);t.top+=e.outerHeight(),this.element.css({marginTop:"",marginLeft:"",marginRight:"",marginBottom:""}).css(t)}},n.wsPopover.id=0,n.validityAlert=function(){var t=n.objectCreate(n.wsPopover,{},s.messagePopover),i=t.hide.bind(t);return t.element.addClass("validity-alert").attr({role:"alert"}),e.extend(t,{hideDelay:5e3,showFor:function(t,n,a,r){t=e(t).getNativeElement(),this.clear(),this.hide(),r||(this.getMessage(t,n),this.show(t),this.hideDelay&&(this.timers.delayedHide=setTimeout(i,this.hideDelay))),a||this.setFocus(t)},setFocus:function(t){var i,r=e(t).getShadowFocusElement(),o=n.scrollRoot.scrollTop(),s=r.offset().top-30;o>s&&(n.scrollRoot.animate({scrollTop:s-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(o-s)),80)}),i=!0);try{r[0].focus()}catch(u){}i&&(n.scrollRoot.scrollTop(o),setTimeout(function(){n.scrollRoot.scrollTop(o)},0)),e(a).triggerHandler("pospopover"+this.eventns)},getMessage:function(e,i){i||(i=d(e[0])||e.prop("customValidationMessage")||e.prop("validationMessage")),i?t.contentElement.text(i):this.hide()}}),t}(),function(){var t,i,n=[];e(r).on("invalid",function(a){if(!a.wrongWebkitInvalid){var o=e(a.target),s=o.getShadowElement();if(s.hasClass(T)||(s.addClass(T).removeClass(x),setTimeout(function(){e(a.target).trigger("changedinvalid").trigger("changedvaliditystate")},0)),!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=a.isDefaultPrevented;var u=e.Event("firstinvalidsystem");e(r).triggerHandler(u,{element:a.target,form:a.target.form,isInvalidUIPrevented:a.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&a.preventDefault(),n.push(a.target),a.extraData="fix",clearTimeout(i),i=setTimeout(function(){var i={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(a.target).trigger(i,i)},9),o=null,s=null}})}(),e.fn.getErrorMessage=function(){var t="",i=this[0];return i&&(t=d(i)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")),t},s.replaceValidationUI&&(s.overrideMessages&&(s.customMessages||null==s.customMessages)&&(s.customMessages=!0,s.overrideMessages=!1,n.info("set overrideMessages to false. Use customMessages instead")),n.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})}))})})(jQuery);