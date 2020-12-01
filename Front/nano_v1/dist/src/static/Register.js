(()=>{"use strict";function t(t){return!("popupClose"!=$(t.target.parentElement)[0].id||(a($("#popUpSystem")[0],120),0))}function e(){return"none"!=$("#loading")[0].style.display}function n(t,e){if(t)if(null==t.style&&(t.style={}),t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="inline-block",t.style.visibility="visible",e)var n=0,a=setInterval((function(){1<=(n+=50/e)&&(clearInterval(a),n=1),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=1,t.style.filter="alpha(opacity=1)"}function a(t,e){if(t)if(null==t.style&&(t.style={}),e)var n=1,a=setInterval((function(){0>=(n-=50/e)&&(clearInterval(a),n=0,t.style.display="none",t.style.visibility="hidden"),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="none",t.style.visibility="hidden"}function i(t){$("#loading").show(),null!=t&&($(t).removeClass("green"),$(t).addClass("light"),sessionStorage.setItem("myBtn",t))}function o(t){$("#loading").hide(),null!=t&&$(t).addClass("green")}function r(t,e){var a=sessionStorage.getItem("myBtn");$("#loading").hide(),null!=a&&$(a).addClass("green"),n($("#popUpSystem")[0],50),$("#popUpSystemTitle").text(t),$("#popUpSystemText").text(e)}function s(t,e){$(t).attr("src","src/static/img/"+e)}function l(t,e){$("#"+t).html(e)}function c(t){sessionStorage.setItem("mockServer",t)}function u(t,e,n,a){if(null==n&&(n="text"),null==e&&(e=20),null==a&&(a=4),"email"==n&&(e=99),null===t)return!1;if(void 0===t)return!1;if(""===t)return!1;var i=t.trim().length;if(0===i)return!1;if(i>e)return!1;if(i<a)return!1;switch(n){case"number":if(!/^\d*\.?\d*$/.test((t+"").toLowerCase()))return!1;break;case"email":if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((t+"").toLowerCase()))return!1;break;case"name":if(3>i.length)return!1;for(var o,r=/^\d$/,s=0;s<t.length;s++)if(o=t[s],r.test(o))return!1;break;case"fullName":if(0>t.trim().indexOf(" "))return!1;for(var l="'!@#$%¨&*()-_+=,.;/<>:?`´^~{[]}",c=0;c<t.length;++c)for(var u=0;u<l.length;++u)if(t[c]==l[u])return!1}return!0}function d(t,e){var n=sessionStorage.getItem("mockServer");if(n)return new Promise((function(t,e){setTimeout((function(){var a=JSON.parse(n);1==a.payload?t({ok:!0,payload:a.obj}):e({ok:!1,msg:a.obj.message})}),500)}));var a="http://localhost",i="18524",o=JSON.stringify(e);return new Promise((function(e,n){fetch(a+":"+i+"/api/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then((function(t){400===t.status?t.json().then((function(t){n({ok:!1,msg:t.message})})):!0===t.ok?t.json().then((function(t){e({ok:!0,payload:t})})):t.json().then((function(t){e({ok:!1,msg:t.message})}))})).catch((function(t){e({ok:!1,msg:t.toString()})}))}))}function f(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t){var e=localStorage.getItem("appLanguage");return null==e&&(e=2,localStorage.setItem("appLanguage",e)),e=parseInt(e),(new F).langs[e].labels[t]}function g(){return localStorage.getItem("appLanguage")}function v(t){var e=localStorage.getItem("appLanguage");return null==e&&(e=2,localStorage.setItem("appLanguage",e)),e=parseInt(e),(new U).langs[e].labels[t]}function b(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function h(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function y(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function w(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function I(t,e,n){return"<table align='center'><tr><td id='".concat(n,"' valign='middle'>").concat(t,"</td><td valign='middle'>").concat(e,"</td></tr></table>")}function k(t,e){return null==t&&(t="loading"),null==e&&(e="display:none;"),'<span class="loadingio-spinner-spinner-z7v4g50j1x" id=\'loading\' style="display:none;padding-top:3px">\n    <div class="ldio-hqohp5x0gi"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>\n    </div>\n</span>'}function x(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function C(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function D(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function P(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function S(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function E(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function N(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function H(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}$(document).ready((function(){$(".navi-menu-button").on("click",(function(){T()})),$(".nav-menu").on("click",(function(t){$(t.target).hasClass("nav-menu")&&L()})),$("nav.menu ul.main-menu>li>a").on("click",(function(t){var e=$(this);t.preventDefault(),e.parent().hasClass("active")?($(this).parent().removeClass("active"),e.find("span").removeClass("fa-angle-up").addClass("fa-angle-down")):setTimeout((function(){$("nav.menu ul.main-menu > li").removeClass("active"),$("nav.menu ul li a span").removeClass("fa-angle-up").addClass("fa-angle-down"),e.parent().addClass("active"),e.find("span").removeClass("fa-angle-down").addClass("fa-angle-up")}),50)})),$(".tab-item .fix-width .menu-item").css({width:100/$(".tab-item .fix-width .menu-item").length+"%"}),$(".wizard").length&&(j(),$(window).resize()),$(".animated-text").length&&O()})),$(".wrapper-inline").on("scroll",(function(){150<this.scrollTop?$("header.no-background").addClass("set-bg"):$("header.no-background").removeClass("set-bg")}));var T=function(){$(".navi-menu-button").addClass("focused"),n($("div.nav-menu")[0],50),setTimeout((function(){$("nav.menu").addClass("opened")}),50)},L=function(){$(".navi-menu-button").removeClass("focused"),$("nav.menu").removeClass("opened"),a($("div.nav-menu")[0],200)},j=function(){$(window).on("resize",(function(){$(".wizard .wizard-item").height($(window).height()-50)}))},O=function(){$(".vertical-center").css({"margin-top":$(window).height()/2-$(".vertical-center").height()/2}),$(".animated-text").removeClass("zero-opacity"),$("[data-transation]").each((function(){var t=$(this);t.addClass("hide");var e=t.attr("data-transation");""==e&&(e="fadeInDown");var n=parseInt(t.attr("data-start-time"));isNaN(n)&&(n=0),setTimeout((function(){t.addClass("animated "+e)}),n)}))};$(document).on("click",".expandable-item .expandable-header",(function(){if($(this).parent().hasClass("accordion"))if($(this).parent().hasClass("active"))$(this).parent().removeClass("active"),$(this).parent().find(".expandable-content").attr("style","");else{var t=$(this).parent().attr("data-group");$('[data-group="'+t+'"]').removeClass("active"),$('[data-group="'+t+'"]').find(".expandable-content").attr("style",""),$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().addClass("active")}else $(this).parent().hasClass("active")?$(this).parent().find(".expandable-content").attr("style",""):$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().toggleClass("active")})),$(document).on("click",".tab-item .menu-item",(function(t){t.preventDefault();var e=$(this).attr("data-content");$(this).parents(".tab-item").find(".menu-item").removeClass("active"),$(this).addClass("active"),$(this).parents(".tab-item").find(".content-item").removeClass("active"),$("#"+e).addClass("active")})),$(document).on("click",".post-item .post-share > i",(function(t){t.preventDefault(),$(this).parent().find(".social-links").fadeToggle("fast")})),$(document).on("click",'[data-dismiss="true"]',(function(){a($(this).parents(".popup-overlay")[0],100)})),$(document).on("click","[data-popup]",(function(){var t=$(this).attr("data-popup");n($("#"+t)[0],50)})),$(document).on("click",".popup-overlay",(function(t){$(t.target).hasClass("popup-overlay")&&a($(this)[0],60)})),$(document).on("click",'[data-search="open"]',(function(){n($(".search-form")[0],50),setTimeout((function(){$(".search-form input").focus()}),50)})),$(document).on("click",'[data-search="close"]',(function(){a($(".search-form")[0],60)}));var F=function t(){m(this,t),this.availableLanguages=["English","Español","Português BR","Português PT"],this.langs=[{labels:["Dashboard","User","Login","Register"]},{labels:["Panel de control","Usuario","Iniciar sesión","Registrarse"]},{labels:["Dashboard","Usuário","Login","Registrar"]},{labels:["Dashboard","Usuário","Login","Registrar"]}]},_=function(){function t(){m(this,t)}return function(t,e,n){n&&f(t,n)}(t,0,[{key:"getHtml",value:function(){var t={dashboardItem:p(0),userItem:p(1),loginItem:p(2),registerItem:p(3)};return'<div class="nav-menu" align=\'left\'><nav class="menu">                \n\t\t\t\t<div class="nav-container">\n\t\t\t\t\t<ul class="main-menu">\n\t\t\t\t\t\t<li class="active"><a href=\'/\' style=\'cursor:pointer\'>'.concat(t.dashboardItem,'</a></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="javascript:void(0);">').concat(t.userItem,"</a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href=\"/login\" style='cursor:pointer'>").concat(t.loginItem,'</a></li>\n\t\t\t\t\t\t\t\t<li><a href="/register" >').concat(t.registerItem,"</a></li>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\t\t\t\t\t\t\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>")}}]),t}(),U=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.availableLanguages=["English","Español","Português BR"],this.langs=[{labels:["Forgot your password?","Login","Not registered?","Sign up!","Email","Error","Invalid email!","Password","See password","Invalid password","Language","Keep me logged in","Dashboard","User","Login","Register","Next","Step","Inform your social ID","Social ID","Inform your full Name","Your full name","Previous","Inform your email","Confirmation","Invalid social ID!","Invalid name!","Numeric Code","Enter your code sent by email","Invalid number!","Please inform a valid registered email to receive your last password","Congratulations!","Your registration is complete, please login with the button below."]},{labels:["¿Olvidaste tu contraseña?","Iniciar sesión","¿No registrado?","Registrarse!","Correo electrónico","Error","Correo electrónico no válido","Contraseña","Ver contraseña","Contraseña no válida","Idioma","Mantenerme conectado","Panel de control","Usuario","Iniciar sesión","Registrarse","Siguiente","Paso","Informe su identificación","Identificación social","Informe su nombre completo","Su nombre completo","Previo","Informe su correo electrónico","Confirmación","¡ID social no válido!","¡Nombre no válido!","Código numérico","Ingrese su código enviado por correo electrónico","Invalid number!","Por favor, informe un correo electrónico registrado válido para recibir su última contraseña","¡Felicitaciones!","Su registro está completo, inicie sesión con el botón de abajo."]},{labels:["Esqueceu sua senha?","Login","Não registrado?","Inscreva-se!","Email","Erro","Email inválido","Senha","Ver senha","Senha inválida","Idioma","Mantenha-me conectado","Dashboard","Usuário","Login","Registrar","Próximo","Passo","Informe seu CPF","CPF","Informe nome completo","Seu nome completo","Anterior","Informe seu email","Confirmação","CPF inválido!","Nome inválido!","Código numérico","Informe seu código enviado por email","Numero inválido!","Por favor, informe um email cadastrado válido para receber sua última senha","Parabéns!","Seu cadastro está completo, faça o login com o botão abaixo."]}]},B=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&b(t,n)}(t,0,[{key:"getHtml",value:function(t,e,n){return"<div class=\"form-row no-padding\">                \n                <table width='100%'>\n                    <tr>\n                        <td valign='top' width='20px'>\n                            <img src='src/static/img/lock.png' alt='Password Field' id='fail".concat(t,"' style='padding-top:9px' />\n                        </td>\n                        <td valign='top' width='90%'>\n                            <input id=\"").concat(t,'" type="password" class="form-element" placeholder="').concat(e,"\">\n                        </td>\n                        <td valign='top' width='20px'>\n                            <img src='src/static/img/eye.png' alt='Password Field' id='seePass").concat(t,"' title='").concat(n,"' style='padding-top:9px' />                            \n                        </td>\n                    </tr>\n                </table>\n            </div>")}},{key:"btnSeePassword",value:function(t){$(t).removeAttr("type"),0<$("#seePass"+t)[0].src.indexOf("_err.png")?(s("#seePass"+t,"eye.png"),$("#"+t).attr("type","password")):(s("#seePass"+t,"eye_err.png"),$("#"+t).attr("type","text")),$("#"+t)[0].focus()}},{key:"validate",value:function(t,e,n,a){return u($("#"+t).val(),20,"password",4)?(s("#fail"+t,"lock.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"lock_err.png"),1==e.msg&&r(n,a)),!1)}}]),t}(),z=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&h(t,n)}(t,0,[{key:"getHtml",value:function(t,e){return"<div class=\"form-row no-padding\">\n                <table width='100%'>\n                    <tr>\n                        <td width='20px'>\n                            <img src='src/static/img/bolt.png' alt='INput Field' id='fail".concat(t,"' style='padding-top:6px' />\n                        </td>\n                        <td>\n                            <input id=\"").concat(t,'" type="text" class="form-element" placeholder="').concat(e,'">\n                        </td>\n                    </tr>\n                </table>\n                </div>')}},{key:"validateName",value:function(t,e,n,a){return u($("#"+t).val(),50,"fullName",4)?(s("#fail"+t,"bolt.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"bolt_err.png"),1==e.msg&&r(n,a)),!1)}},{key:"validate",value:function(t,e,n,a){return u($("#"+t).val(),16,"string",4)?(s("#fail"+t,"bolt.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"bolt_err.png"),1==e.msg&&r(n,a)),!1)}},{key:"validateCPF",value:function(t,e,n,a){var i=$("#"+t).val().replace(/\D/g,"");return this.CheckCPF(i)?(s("#fail"+t,"bolt.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"bolt_err.png"),1==e.msg&&r(n,a)),!1)}},{key:"CheckCPF",value:function(t){var e,n;if(e=0,"00000000000"==t)return!1;for(var a=1;9>=a;a++)e+=parseInt(t.substring(a-1,a))*(11-a);if((10==(n=10*e%11)||11==n)&&(n=0),n!=parseInt(t.substring(9,10)))return!1;e=0;for(var i=1;10>=i;i++)e+=parseInt(t.substring(i-1,i))*(12-i);return(10==(n=10*e%11)||11==n)&&(n=0),n==parseInt(t.substring(10,11))}}]),t}(),R=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&y(t,n)}(t,0,[{key:"getHtml",value:function(){return'<div class="popup-overlay" id="popUpSystem">\n                <div class="popup-container" style=\'margin-top:50px;max-width:350px\'>\n                    <div class="popup-header">\n                        <h3 style=\'padding-left:32px\' class="popup-title" id=\'popUpSystemTitle\'></h3>\n                        <span id=\'popupClose\' class="popup-close" data-dismiss="true">X</span>\n                    </div>\n                    <div class="popup-content">\n                        <img src=\'src/static/img/error_big.png\' style=\'width:60px;height:60px\' alt=\' \' />\n                        <span style="font-size:64px;color:red;padding-top:32px;" id=\'popupSymbol\' class="fa fa-exclamation-circle"></span><br>\n                        <br><span id=\'popUpSystemText\' style="padding-top:16px;"></span><br><br>\n                    </div>\n                </div>\n            </div>'}}]),t}(),V=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&w(t,n)}(t,0,[{key:"getHtml",value:function(t){for(var e="",n=0;n<t.length;++n)e+="<option value='"+(n+1).toString()+"'>"+t[n]+"</option>";return"<select class=\"form-element\" id='languageSel'>".concat(e,"</select>")}}]),t}(),J=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&x(t,n)}(t,0,[{key:"elements",value:function(){return{formID:"formID",socialID:"socialID",nameID:"nameID",btnNext:"btnNext"}}},{key:"getHtml",value:function(){var t=this.elements(),e=v(10),n=v(3),a=v(16),i=v(17),o=v(18),r=v(19),s=v(20),l=v(21);return"<div style=\"width:296px;\" class=\"form-row-group-dark\"><br>\n                    <div style='min-height:355px'>                        \n                        <table><tr><td width='120px'>".concat(e,"</td><td width='50%'>").concat(V.getHtml((new U).availableLanguages),"</td></tr></table>\n                        <table><tr><td><h3><b>").concat(n,"</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>").concat(i," 1/4</h4></td></tr></table>\n                        <br>\n                        <div class=\"form-row-group\" align=\"left\" id='registerIdForm'>                            \n                            <b style='padding-left:20px'>").concat(r,"</b>\n                            <br>\n                            ").concat(z.getHtml(t.socialID,o),"\n                            <br>\n                            <b style='padding-left:20px'>").concat(l,"</b>\n                            <br>\n                            ").concat(z.getHtml(t.nameID,s),"\n                            <br>\n                        </div>\n                        <br>\n                    </div>\n                    <div align='center' id=\"").concat(t.btnNext,'" class="button circle block green">\n                        ').concat(I(a,k(),t.btnNext),"\n                    </div>\n                    <br>\n                    <br>                    \n                </div>").concat(R.getHtml())}},{key:"maskUp",value:function(){var t=this.elements();VMasker($("#"+t.socialID)).maskPattern("999.999.999-99")}},{key:"validate",value:function(t){var e=this.elements(),n=z.validateName(e.nameID,t,v(5),v(26));return!(!z.validateCPF(e.socialID,t,v(5),v(25))||!n)}}]),t}(),M=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&C(t,n)}(t,0,[{key:"getHtml",value:function(t,e){return"<div class=\"form-row no-padding\">\n                <table width='100%'>\n                    <tr>\n                        <td width='20px'>\n                            <img src='src/static/img/email.png' alt='Email' id='fail".concat(t,"' style='padding-top:6px' />\n                        </td>\n                        <td>\n                            <input id=\"").concat(t,'" type="text" class="form-element" placeholder="').concat(e,'">\n                        </td>\n                    </tr>\n                </table>\n            </div>')}},{key:"validate",value:function(t,e,n,a){return u($("#"+t).val(),99,"email")?(s("#fail"+t,"email.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"email_err.png"),1==e.msg&&r(n,a)),!1)}}]),t}(),A=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&D(t,n)}(t,0,[{key:"elements",value:function(){return{formEmail:"formEmail",emailID:"emailID",passwordID:"passwordID",passwordConfID:"passwordConfID",btnNext:"btnNext",btnPrev:"btnPrev"}}},{key:"getHtml",value:function(){var t=this.elements(),e=v(3),n=v(16),a=v(17),i=v(22),o=v(4),r=v(23),s=v(7),l=v(8),c=v(7),u=v(24);return'<div style="width:296px;" class="form-row-group-dark">\n                    <div style=\'min-height:355px\'>                        \n                        <table><tr><td><h3><b>'.concat(e,"</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>").concat(a," 2/4</h4></td></tr></table>\n                        <br>\n                        <div class=\"form-row-group\" align=\"left\" id='registerIdForm'>\n                            <span style='padding-left:20px'><b>").concat(r,"</b></span>\n                            ").concat(M.getHtml(t.emailID,o),"\n                            <br>\n                            <span style='padding-left:20px'><b>").concat(c,"</b></span>\n                            ").concat(B.getHtml(t.passwordID,s,l),"\n                            <span style='padding-left:20px'><b>").concat(u,"</b></span>\n                            ").concat(B.getHtml(t.passwordConfID,s,l),"\n                            <br>\n                        </div>\n                        <br>\n                    </div>\n                    <div>\n                        <table width='100%'>\n                            <tr>\n                                <td><a id=\"").concat(t.btnPrev,'" class="button circle block green">').concat(i,"</a></td>\n                                <td width='20px'></td>\n                                <td><a id=\"").concat(t.btnNext,'" class="button circle block green">\n                                        ').concat(I(n,k(),t.btnNext),"\n                                    </a>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    <br>\n                    <br>\n                </div>").concat(R.getHtml())}},{key:"validate",value:function(t){var e=this.elements(),n=B.validate(e.passwordID,t,v(5),v(9)),a=B.validate(e.passwordConfID,t,v(5),v(9)),i=M.validate(e.emailID,t,v(5),v(6));return n&&!(a=$("#"+e.passwordID).val()==$("#"+e.passwordConfID).val())&&s("#fail"+e.passwordConfID,"lock_err.png"),!!(i&&n&&a)}}]),t}(),q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&P(t,n)}(t,0,[{key:"getHtml",value:function(t,e){return"<div class=\"form-row no-padding\">\n                    <table width='100%'>\n                        <tr>\n                            <td width='20px'>\n                                <img src='src/static/img/bolt.png' alt='Number Field' id='fail".concat(t,"' style='padding-top:6px' />\n                            </td>\n                            <td>\n                                <input id=\"").concat(t,'" type="text" class="form-element" placeholder="').concat(e,'">\n                            </td>\n                        </tr>\n                    </table>\n                </div>')}},{key:"validate",value:function(t,e,n,a){return u($("#"+t).val(),16,"number")?(s("#fail"+t,"bolt_err.png"),!0):(1==e.focus?$("#"+t).focus():(s("#fail"+t,"bolt.png"),1==e.msg&&r(n,a)),!1)}}]),t}(),Y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&S(t,n)}(t,0,[{key:"elements",value:function(){return{tokenID:"tokenID",btnNext:"btnNext",btnPrev:"btnPrev"}}},{key:"getHtml",value:function(){var t=this.elements(),e=v(3),n=v(16),a=v(17),i=v(22),o=v(27),r=v(28);return'<div style="width:296px;" class="form-row-group-dark">\n                    <div style=\'min-height:355px\'>\n                    <table><tr><td><h3><b>'.concat(e,"</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>").concat(a," 3/4</h4></td></tr></table>\n                        <div class=\"form-row-group\" align=\"left\" id='registerIdForm'>\n                            <br>    \n                            <span style='padding-left:20px'><b>").concat("Token","</b></span>\n                            <br>\n                            <p style='padding-left:20px'>").concat(r,"</p>\n                            <br>\n                            ").concat(q.getHtml(t.tokenID,o),"\n                            <br>\n                        </div>\n                        <br>\n                    </div>\n                    <div>\n                        <table width='100%'>\n                            <tr>\n                                <td><a id=\"").concat(t.btnPrev,'" class="button circle block green">').concat(i,"</a></td>\n                                <td width='20px'></td>\n                                <td><a id=\"").concat(t.btnNext,'" class="button circle block green">\n                                        ').concat(I(n,k(),t.btnNext),"\n                                    </a>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                    <br>\n                    <br>\n                </div>").concat(R.getHtml())}},{key:"maskUp",value:function(){var t=this.elements();VMasker($("#"+t.tokenID)).maskPattern("9999")}},{key:"validate",value:function(t){var e=this.elements();return q.validate(e.tokenID,t,v(5),v(29))}}]),t}(),Z=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&E(t,n)}(t,0,[{key:"elements",value:function(){return{btnLogin:"btnLogin"}}},{key:"getHtml",value:function(){var t=this.elements(),e=v(3),n=v(17),a=v(31),i=v(32),o=v(14);return'<div style="width:296px;" class="form-row-group-dark">\n                    <div style=\'min-height:355px\'>\n                        <table><tr><td><h3><b>'.concat(e,"</b></h3></td><td width='20px'></td><td><h4 style='color:#009E96'>").concat(n," 4/4</h4></td></tr></table>\n                        <div class=\"form-row-group\" align=\"left\" id='registerIdForm'>\n                            <br>\n                            <p style='padding-left:20px'><b>").concat(a,"</b></p>\n                            <br>\n                            <img src='src/static/img/email.png' alt=' ' style='width:60;height:60px' />\n                            <br>\n                            <p style='padding-left:20px'>").concat(i,'</p>\n                            <br>\n                        </div>\n                        <br>\n                    </div>\n                    <a id="').concat(t.btnLogin,'" href=\'/login\' class="button circle block green">').concat(o,"</a>\n                    <br>\n                    <br>\n                </div>")}}]),t}(),K=function(){function n(){function a(){return sessionStorage.getItem("currentView")}function s(){return JSON.parse(localStorage.getItem("currentPageData"))}function u(t){localStorage.setItem("currentPageData",JSON.stringify(t))}function f(t){!function(t){sessionStorage.setItem("currentView",t)}(t);var e="form1",n="form2",a="form3",i="form4";t===e?l("currentForm",J.getHtml()):t===n?l("currentForm",A.getHtml()):t===a?l("currentForm",Y.getHtml()):t===i&&l("currentForm",Z.getHtml()),t===e?J.maskUp():t===a&&Y.maskUp()}function m(){if(!e()&&J.validate({focus:!1,msg:!0,fields:null})){var t=J.elements(),n=function(t,e){return{sID:t,_language:e}}($("#"+t.socialID).val(),g());i("#"+t.btnNext),sessionStorage.mock&&c(JSON.stringify({payload:!0,obj:{}})),d("socialID_v1",n).then((function(t){1==t.ok?function(){o();var t=s(),e=J.elements();t.socialID=document.getElementById(e.socialID).value,t.nameID=document.getElementById(e.nameID).value,u(t),f("form2")}():r(v(5),t.msg)})).catch((function(t){r(v(5),t.msg)}))}}function p(){if(!e()&&A.validate({focus:!1,msg:!0,fields:null})){var t=s(),n=A.elements();t.emailID=document.getElementById(n.emailID).value,u(t);var a=function(t,e,n,a,i){return{sID:t,sName:e,sEmail:n,sPass:a,_language:i}}(t.socialID,t.nameID,t.emailID,document.getElementById(n.passwordID).value,g());i("#"+n.btnNext),sessionStorage.mock&&c(JSON.stringify({payload:!0,obj:{}})),d("onboarding_v1",a).then((function(t){1==t.ok?(o(),f("form3")):r(v(5),t.msg)})).catch((function(t){r(v(5),t.msg)}))}}function b(){if(!e()&&Y.validate({focus:!1,msg:!0,fields:null})){var t=s(),n=Y.elements(),a=function(t,e,n){return{sID:t,sToken:e,_language:n}}(t.socialID,document.getElementById(n.tokenID).value,g());i("#"+n.btnNext),sessionStorage.mock&&c("mockServer",JSON.stringify({payload:!0,obj:{}})),d("checkToken_v1",a).then((function(t){1==t.ok?(o(),f("form4")):r(v(5),t.msg)})).catch((function(t){r(v(5),t.msg)}))}}(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),$(document).ready((function(){f("form1"),$("#languageSel").val(parseInt(localStorage.getItem("appLanguage"))+1),u({socialID:"",nameID:"",emailID:"",emailToken:""})})),$(document).on("change","#languageSel",(function(){(function(t){return localStorage.getItem("appLanguage")!=t-1&&(localStorage.setItem("appLanguage",t-1),!0)})($("#languageSel").val())&&setTimeout((function(){location.href="/register"}),100)})),$(document).on("keydown",(function(t){var e="form1",n="form2",i="form3",o={focus:!1,msg:!1,fields:null};switch(t.keyCode){case 9:switch(a()){case e:J.validate(o);break;case n:A.validate(o);break;case i:Y.validate(o)}break;case 13:switch(a()){case e:m();break;case n:p();break;case i:b()}}})),document.body.addEventListener("click",(function(e){if(!t(e)){var n=$(e.target).attr("id"),i={currentView:"currentView",form1:"form1",form2:"form2",form3:"form3",form4:"form4"};switch(a()){case i.form1:n===(o=J.elements()).btnNext&&m();break;case i.form2:n===(o=A.elements()).btnPrev?function(){f("form1");var t=s(),e=J.elements();document.getElementById(e.socialID).value=t.socialID,document.getElementById(e.nameID).value=t.nameID}():n===o.btnNext?p():n==="seePass"+o.passwordID?B.btnSeePassword(o.passwordID):n==="seePass"+o.passwordConfID&&B.btnSeePassword(o.passwordConfID);break;case i.form3:var o;n===(o=Y.elements()).btnPrev?previous_form3_click():n===o.btnNext?b():n==="seePass"+o.passwordID?B.btnSeePassword(o.passwordID):n==="seePass"+o.passwordConfID&&B.btnSeePassword(o.passwordConfID)}}}))}return function(t,e,n){e&&N(t.prototype,e)}(n,[{key:"getHtml",value:function(){return"<div id='currentForm'></div>"}}]),n}(),X=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e,sessionStorage.mock=!0}return function(t,e,n){e&&H(t.prototype,e)}(t,[{key:"getHtml",value:function(){var t=this.url,e={id:null},n=t.split("/");return t="/"+n[1],2<=n.length&&(e.id=n[2]),'<div class="wrapper" align="center">'.concat(_.getHtml(),"<div class=\"wrapper-inline img shadow\" >\n                    <header id='appHeader'>\n                    <img src='src/static/img/topLogo.png' alt='Nano Logo' style='margin-top:-7px;margin-left:-30px' />\n                        <div class=\"navi-menu-button\"><em></em><em></em><em></em></div>\n                    </header>\n                    <main><section class=\"container\"><br>").concat(new K(e).getHtml(),"</section></main>\n                </div></div>")}}]),t}(),G=function(){document.querySelector("#myApp").innerHTML=new X(window.location.pathname).getHtml()};window.addEventListener("popstate",G),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){t.target.matches("[data-link]")&&(t.preventDefault(),function(t){history.pushState(null,null,t),G()}(t.target.href))})),G()}))})();
//# sourceMappingURL=Register.js.map