(()=>{"use strict";function t(t,e){if(t)if(null==t.style&&(t.style={}),t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="inline-block",t.style.visibility="visible",e)var n=0,a=setInterval((function(){(n+=50/e)>=1&&(clearInterval(a),n=1),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=1,t.style.filter="alpha(opacity=1)"}function e(t,e){if(t)if(null==t.style&&(t.style={}),e)var n=1,a=setInterval((function(){(n-=50/e)<=0&&(clearInterval(a),n=0,t.style.display="none",t.style.visibility="hidden"),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="none",t.style.visibility="hidden"}function n(e,n){var a=sessionStorage.getItem("myBtn");$("#loading").hide(),null!=a&&$(a).addClass("green"),t($("#popUpSystem")[0],50),$("#popUpSystemTitle").text(e),$("#popUpSystemText").text(n)}function a(t,e){$(t).attr("src","src/static/img/"+e)}$(document).ready((function(){$(".navi-menu-button").on("click",(function(t){i()})),$(".nav-menu").on("click",(function(t){$(t.target).hasClass("nav-menu")&&o()})),$("nav.menu ul.main-menu>li>a").on("click",(function(t){var e=$(this);t.preventDefault(),e.parent().hasClass("active")?($(this).parent().removeClass("active"),e.find("span").removeClass("fa-angle-up").addClass("fa-angle-down")):setTimeout((function(){$("nav.menu ul.main-menu > li").removeClass("active"),$("nav.menu ul li a span").removeClass("fa-angle-up").addClass("fa-angle-down"),e.parent().addClass("active"),e.find("span").removeClass("fa-angle-down").addClass("fa-angle-up")}),50)})),$(".tab-item .fix-width .menu-item").css({width:100/$(".tab-item .fix-width .menu-item").length+"%"}),$(".wizard").length&&(r(),$(window).resize()),$(".animated-text").length&&l()})),$(".wrapper-inline").on("scroll",(function(t){this.scrollTop>150?$("header.no-background").addClass("set-bg"):$("header.no-background").removeClass("set-bg")}));var i=function(){$(".navi-menu-button").addClass("focused"),t($("div.nav-menu")[0],50),setTimeout((function(){$("nav.menu").addClass("opened")}),50)},o=function(){$(".navi-menu-button").removeClass("focused"),$("nav.menu").removeClass("opened"),e($("div.nav-menu")[0],200)},r=function(){$(window).on("resize",(function(t){$(".wizard .wizard-item").height($(window).height()-50)}))},l=function(){$(".vertical-center").css({"margin-top":$(window).height()/2-$(".vertical-center").height()/2}),$(".animated-text").removeClass("zero-opacity"),$("[data-transation]").each((function(t,e){var n=$(this);n.addClass("hide");var a=n.attr("data-transation");""==a&&(a="fadeInDown");var i=parseInt(n.attr("data-start-time"));isNaN(i)&&(i=0),setTimeout((function(){n.addClass("animated "+a)}),i)}))};function s(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}$(document).on("click",".expandable-item .expandable-header",(function(){if($(this).parent().hasClass("accordion"))if($(this).parent().hasClass("active"))$(this).parent().removeClass("active"),$(this).parent().find(".expandable-content").attr("style","");else{var t=$(this).parent().attr("data-group");$('[data-group="'+t+'"]').removeClass("active"),$('[data-group="'+t+'"]').find(".expandable-content").attr("style",""),$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().addClass("active")}else $(this).parent().hasClass("active")?$(this).parent().find(".expandable-content").attr("style",""):$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().toggleClass("active")})),$(document).on("click",".tab-item .menu-item",(function(t){t.preventDefault();var e=$(this).attr("data-content");$(this).parents(".tab-item").find(".menu-item").removeClass("active"),$(this).addClass("active"),$(this).parents(".tab-item").find(".content-item").removeClass("active"),$("#"+e).addClass("active")})),$(document).on("click",".post-item .post-share > i",(function(t){t.preventDefault(),$(this).parent().find(".social-links").fadeToggle("fast")})),$(document).on("click",'[data-dismiss="true"]',(function(){e($(this).parents(".popup-overlay")[0],100)})),$(document).on("click","[data-popup]",(function(){var e=$(this).attr("data-popup");t($("#"+e)[0],50)})),$(document).on("click",".popup-overlay",(function(t){$(t.target).hasClass("popup-overlay")&&e($(this)[0],60)})),$(document).on("click",'[data-search="open"]',(function(){t($(".search-form")[0],50),setTimeout((function(){$(".search-form input").focus()}),50)})),$(document).on("click",'[data-search="close"]',(function(){e($(".search-form")[0],60)}));var u=function t(){c(this,t),this.availableLanguages=["English","Español","Português BR","Português PT"],this.langs=[{labels:["Control panel","User","Login","Register","Dashboard"]},{labels:["Panel de control","Usuario","Iniciar sesión","Registrarse","Dashboard"]},{labels:["Painél de controle","Usuário","Login","Registrar","Dashboard"]}]};function d(t){var e=localStorage.getItem("appLanguage");return null==e&&(e=2,localStorage.setItem("appLanguage",e)),e=parseInt(e),(new u).langs[e].labels[t]}var p=function(){function t(){c(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){var t={pnlControl:d(0),userItem:d(1),loginItem:d(2),registerItem:d(3),dashboardItem:d(4)};return'<div class="nav-menu" align=\'left\'><nav class="menu">                \n\t\t\t\t<div class="nav-container">\n\t\t\t\t\t<ul class="main-menu">\n                        <li class="active">\n                            <a href="javascript:void(0);">'.concat(t.pnlControl,"</a>\n                            <ul>\n\t\t\t\t\t\t\t\t<li><a href=\"/\" style='cursor:pointer'>").concat(t.dashboardItem,'</a></li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n                        </li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="javascript:void(0);">').concat(t.userItem,"</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"/login\" style='cursor:pointer'>").concat(t.loginItem,"</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"/register\" style='cursor:pointer'>").concat(t.registerItem,"</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>")}}],null&&s(e.prototype,null),n&&s(e,n),t}(),m=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.availableLanguages=["English","Español","Português BR"],this.langs=[{labels:["Email","Error","Invalid email!","Language","Please inform a valid registered email to receive your last password","Send","Password Recovery","Success","Email Sent!"]},{labels:["Correo electrónico","Error","Correo electrónico no válido","Idioma","Por favor, informe un correo electrónico registrado válido para recibir su última contraseña","Enviar","Recuperación de contraseña","Éxito","¡Correo electrónico enviado!"]},{labels:["Email","Erro","Email inválido","Idioma","Por favor, informe um email cadastrado válido para receber sua última senha","Enviar","Recuperação de senha","Sucesso","Email enviado!"]}]};function f(t){var e=localStorage.getItem("appLanguage");return null==e&&(e=2,localStorage.setItem("appLanguage",e)),e=parseInt(e),(new m).langs[e].labels[t]}function v(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"getHtml",value:function(t,e){return"<div class=\"form-row no-padding\">\n                <table width='100%'>\n                    <tr>\n                        <td width='20px'>\n                            <img src='src/static/img/email.png' alt='Email' id='fail".concat(t,"' style='padding-top:6px' />\n                        </td>\n                        <td>\n                            <input id=\"").concat(t,'" type="text" class="form-element" placeholder="').concat(e,'">\n                        </td>\n                    </tr>\n                </table>\n            </div>')}},{key:"validate",value:function(t,e,i,o){return function(t,e,n,a){if(null==n&&(n="text"),null==e&&(e=20),null==a&&(a=4),"email"==n&&(e=99),null===t)return!1;if(void 0===t)return!1;if(""===t)return!1;var i=t.trim().length;if(0===i)return!1;if(i>e)return!1;if(i<a)return!1;switch(n){case"number":if(!/^\d*\.?\d*$/.test(String(t).toLowerCase()))return!1;break;case"email":if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))return!1;break;case"name":if(i.length<3)return!1;for(var o=/^\d$/,r=0;r<t.length;r++){var l=t[r];if(o.test(l))return!1}break;case"fullName":if(t.trim().indexOf(" ")<0)return!1;for(var s="'!@#$%¨&*()-_+=,.;/<>:?`´^~{[]}",c=0;c<t.length;++c)for(var u=0;u<s.length;++u)if(t[c]==s[u])return!1}return!0}($("#"+t).val(),99,"email")?(a("#fail"+t,"email.png"),!0):(1==e.focus?$("#"+t).focus():(a("#fail"+t,"email_err.png"),1==e.msg&&n(i,o)),!1)}}],null&&v(e.prototype,null),i&&v(e,i),t}();function h(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(){return'<div class="popup-overlay" id="popUpSystem">\n                <div class="popup-container" style=\'margin-top:50px;max-width:350px\'>\n                    <div class="popup-header">\n                        <h3 style=\'padding-left:32px\' class="popup-title" id=\'popUpSystemTitle\'></h3>\n                        <span id=\'popupClose\' class="popup-close" data-dismiss="true">X</span>\n                    </div>\n                    <div class="popup-content">\n                        <img src=\'src/static/img/error_big.png\' style=\'width:60px;height:60px\' alt=\' \' />\n                        <span style="font-size:64px;color:red;padding-top:32px;" id=\'popupSymbol\' class="fa fa-exclamation-circle"></span><br>\n                        <br><span id=\'popUpSystemText\' style="padding-top:16px;"></span><br><br>\n                    </div>\n                </div>\n            </div>'}}],null&&h(e.prototype,null),n&&h(e,n),t}();function b(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var w=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getHtml",value:function(t){for(var e="",n=0;n<t.length;++n)e+="<option value='"+(n+1).toString()+"'>"+t[n]+"</option>";return"<select class=\"form-element\" id='languageSel'>".concat(e,"</select>")}}],null&&b(e.prototype,null),n&&b(e,n),t}();function C(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var k=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"elements",value:function(){return{formMail:"formMail",btnSubmit:"btnSubmit"}}},{key:"getHtml",value:function(){var t,e,n=this.elements(),a=f(3),i=f(4),o=f(0),r=f(5),l=f(6);return'<div style="width:296px" class="form-row-group-dark"><br>\n            <table><tr><td width=\'120px\'><label for="languageSel">'.concat(a,"</label></td><td width='50%'>").concat(w.getHtml((new m).availableLanguages),"</td></tr></table>\n            <h3 style='padding-top:10px;padding-bottom:4px'>").concat(l,'</h3>\n            <div class="form-row-group" align="left">            \n                <label for=\'').concat(n.formMail,"'><p style='padding-left:20px;'>").concat(i,"</p></label>\n                ").concat(g.getHtml(n.formMail,o),'\n                <br>\n                <br>\n                <div class="form-row">\n                    <div align=\'center\' id="').concat(n.btnSubmit,'" class="button circle block green">\n                        ').concat(function(t,e,n){return"<table align='center'><tr><td id='".concat(n,"' valign='middle'>").concat(t,"</td><td valign='middle'>").concat(e,"</td></tr></table>")}(r,(null==t&&(t="loading"),null==e&&(e="display:none;"),'<span class="loadingio-spinner-spinner-z7v4g50j1x" id=\'loading\' style="display:none;padding-top:3px">\n    <div class="ldio-hqohp5x0gi"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n    </div>\n</span>'),n.btnSubmit),"\n                    </div>\n                </div>\n                <br>\n            </div>\n            <br>\n            <br>\n            </div>\n            <br>\n            <br>\n        </div>").concat(y.getHtml())}},{key:"focus",value:function(){var t=this.elements();$("#"+t.formMail)[0].focus()}},{key:"validate",value:function(t){var e=this.elements();return!!g.validate(e.formMail,t,f(1),f(2))&&(document.activeElement.blur(),!0)}}],null&&C(e.prototype,null),n&&C(e,n),t}();function S(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var x=function(){function t(a){function i(){if("none"==$("#loading")[0].style.display){var t,e,a=k.elements(),i={sEmail:document.getElementById(a.formMail).value.trim(),_language:localStorage.getItem("appLanguage")};k.validate({focus:!1,msg:!0,fields:i})&&(t="#"+a.btnSubmit,$("#loading").show(),null!=t&&($(t).removeClass("green"),$(t).addClass("light"),sessionStorage.setItem("myBtn",t)),sessionStorage.mock&&(e=JSON.stringify({payload:!0,obj:{}}),sessionStorage.setItem("mockServer",e)),function(t,e){var n=sessionStorage.getItem("mockServer");if(n)return new Promise((function(t,e){setTimeout((function(){var a=JSON.parse(n);1==a.payload?t({ok:!0,payload:a.obj}):e({ok:!1,msg:a.obj.message})}),500)}));var a="http://localhost",i="18524",o=JSON.stringify(e);return new Promise((function(t,e){fetch(a+":"+i+"/api/passwordRecovery_v1",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then((function(n){400===n.status?n.json().then((function(t){e({ok:!1,msg:t.message})})):!0===n.ok?n.json().then((function(e){t({ok:!0,payload:e})})):n.json().then((function(e){t({ok:!1,msg:e.message})}))})).catch((function(e){t({ok:!1,msg:e.toString()})}))}))}(0,i).then((function(t){1==t.ok?function(t,e){$("#popupSymbol").removeClass("fa-exclamation-circle"),$("#popupSymbol").addClass("fa-check-circle"),document.getElementById("popupSymbol").style.color="green",n(t,e)}(f(7),f(8)):n(f(5),t.msg)})).catch((function(t){n(f(5),t.msg)})))}}!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.params=a,$(document).ready((function(){$("#languageSel").val(parseInt(localStorage.getItem("appLanguage"))+1),k.focus()})),$(document).on("keydown",(function(t){switch(t.keyCode){case 9:k.validate({focus:!1,msg:!1,fields:null});break;case 13:i()}})),$(document).on("change","#languageSel",(function(){var t;t=$("#languageSel").val(),localStorage.getItem("appLanguage")!=t-1&&(localStorage.setItem("appLanguage",t-1),1)&&setTimeout((function(){location.href="/forgot"}),100)})),document.body.addEventListener("click",(function(t){if(!function(t){return"popupClose"==$(t.target.parentElement)[0].id&&(e($("#popUpSystem")[0],120),!0)}(t)){var n=k.elements();switch($(t.target).attr("id")){case n.btnSubmit:i()}}}))}var a,i;return a=t,(i=[{key:"getHtml",value:function(){return k.getHtml()}}])&&S(a.prototype,i),t}();function I(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var E=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e,sessionStorage.mock=!0}return e=t,(n=[{key:"getHtml",value:function(){var t=this.url,e={id:null},n=t.split("/");return t="/"+n[1],n.length>=2&&(e.id=n[2]),'<div class="wrapper" align="center">'.concat(p.getHtml(),"<div class=\"wrapper-inline img shadow\" >\n                    <header id='appHeader'>\n                        <img src='src/static/img/topLogo.png' alt='Nano Logo' style='margin-top:-7px;margin-left:-30px' />\n                        <div class=\"navi-menu-button\"><em></em><em></em><em></em></div>\n                    </header>\n                    <main><section class=\"container\"><br><div id='mainFormApp'>").concat(new x(e).getHtml(),"</div></section></main>\n                </div></div>")}}])&&I(e.prototype,n),a&&I(e,a),t;var e,n,a}(),L=function(){document.querySelector("#myApp").innerHTML=new E(window.location.pathname).getHtml()};window.addEventListener("popstate",L),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){var e;t.target.matches("[data-link]")&&(t.preventDefault(),e=t.target.href,history.pushState(null,null,e),L())})),L()}))})();
//# sourceMappingURL=Forgot.js.map