(()=>{"use strict";function e(e,t){if(console.log(e),e)if(null==e.style&&(e.style={}),e.style.opacity=0,e.style.filter="alpha(opacity=0)",e.style.display="inline-block",e.style.visibility="visible",t)var n=0,a=setInterval((function(){1<=(n+=50/t)&&(clearInterval(a),n=1),e.style.opacity=n,e.style.filter="alpha(opacity="+100*n+")"}),50);else e.style.opacity=1,e.style.filter="alpha(opacity=1)"}function t(e,t){if(e)if(null==e.style&&(e.style={}),t)var n=1,a=setInterval((function(){0>=(n-=50/t)&&(clearInterval(a),n=0,e.style.display="none",e.style.visibility="hidden"),e.style.opacity=n,e.style.filter="alpha(opacity="+100*n+")"}),50);else e.style.opacity=0,e.style.filter="alpha(opacity=0)",e.style.display="none",e.style.visibility="hidden"}function n(e,t){var n=sessionStorage.getItem("myBtn");$("#loading").hide(),null!=n&&$(n).addClass("green"),$("#popUpSystem").fadeIn("fast"),$("#popUpSystemTitle").text(e),$("#popUpSystemText").text(t)}function a(e){$(e).attr("style","color:red")}function i(e){$(e).attr("style","")}function o(e,t,n,a){if(null==n&&(n="text"),null==t&&(t=20),null==a&&(a=4),"email"==n&&(t=99),null===e)return!1;if(void 0===e)return!1;if(""===e)return!1;var i=e.trim().length;if(0===i)return!1;if(i>t)return!1;if(i<a)return!1;switch(n){case"number":if(!/^\d*\.?\d*$/.test((e+"").toLowerCase()))return!1;break;case"email":if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((e+"").toLowerCase()))return!1;break;case"name":if(3>i.length)return!1;for(var o,s=/^\d$/,r=0;r<e.length;r++)if(o=e[r],s.test(o))return!1;break;case"fullName":if(0>e.trim().indexOf(" "))return!1}return!0}function s(e){var t=localStorage.getItem("appLanguage");null==t&&(t=2,localStorage.setItem("appLanguage",t)),t=parseInt(t);var n=JSON.parse(sessionStorage.getItem("_lang"));return null==n&&(n=new k,sessionStorage.setItem("_lang",JSON.stringify(n))),e>=n.langs[t].labels.length&&(n=new k,sessionStorage.setItem("_lang",JSON.stringify(n))),n.langs[t].labels[e]}function r(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function l(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function c(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function u(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function f(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function d(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function m(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function p(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function g(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function v(e,t){for(var n,a=0;a<t.length;a++)(n=t[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}$(document).ready((function(){$(".navi-menu-button").on("click",(function(){h()})),$(".nav-menu").on("click",(function(e){$(e.target).hasClass("nav-menu")&&y()})),$("nav.menu ul.main-menu>li>a").on("click",(function(e){var t=$(this);t.parent().find("ul:first").length?(e.preventDefault(),t.parent().hasClass("active")?(t.parent().find("ul:first").slideUp("fast",(function(){$(this).parent().removeClass("active")})),t.find("span").removeClass("fa-angle-up").addClass("fa-angle-down")):($("nav.menu ul.main-menu ul").slideUp("fast",(function(){$("nav.menu ul.main-menu > li").removeClass("active")})),$("nav.menu ul li a span").removeClass("fa-angle-up").addClass("fa-angle-down"),t.parent().find("ul:first").slideDown("fast",(function(){t.parent().addClass("active")})),t.find("span").removeClass("fa-angle-down").addClass("fa-angle-up"))):($("nav.menu ul.main-menu ul").slideUp("fast"),$("nav.menu ul.main-menu > li").removeClass("active"),t.parent().addClass("active"))})),$(".tab-item .fix-width .menu-item").css({width:100/$(".tab-item .fix-width .menu-item").length+"%"}),$(".wizard").length&&(b(),$(window).resize()),$(".animated-text").length&&w()})),$(".wrapper-inline").on("scroll",(function(){150<this.scrollTop?$("header.no-background").addClass("set-bg"):$("header.no-background").removeClass("set-bg")}));var h=function(){$(".navi-menu-button").addClass("focused"),e($("div.nav-menu")[0],50),setTimeout((function(){$("nav.menu").addClass("opened")}),50)},y=function(){$(".navi-menu-button").removeClass("focused"),$("nav.menu").removeClass("opened"),$("div.nav-menu").fadeOut(200)},b=function(){$(window).on("resize",(function(){$(".wizard .wizard-item").height($(window).height()-50)}))},w=function(){$(".vertical-center").css({"margin-top":$(window).height()/2-$(".vertical-center").height()/2}),$(".animated-text").removeClass("zero-opacity"),$("[data-transation]").each((function(){var e=$(this);e.addClass("hide");var t=e.attr("data-transation");""==t&&(t="fadeInDown");var n=parseInt(e.attr("data-start-time"));isNaN(n)&&(n=0),setTimeout((function(){e.addClass("animated "+t)}),n)}))};$(".sweet-check :checkbox:checked").each((function(){$(this).parent().addClass("checked")})),$(document).on("click",".sweet-check",(function(){$(this).hasClass("checked")?($(this).removeClass("checked"),$(this).find("input").prop("checked",!1)):($(this).addClass("checked"),$(this).find("input").prop("checked",!0))})),$(document).on("click","[data-loader]",(function(){})),$(document).on("click",".expandable-item .expandable-header",(function(){if($(this).parent().hasClass("accordion"))if($(this).parent().hasClass("active"))$(this).parent().removeClass("active"),$(this).parent().find(".expandable-content").attr("style","");else{var e=$(this).parent().attr("data-group");$('[data-group="'+e+'"]').removeClass("active"),$('[data-group="'+e+'"]').find(".expandable-content").attr("style",""),$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().addClass("active")}else $(this).parent().hasClass("active")?$(this).parent().find(".expandable-content").attr("style",""):$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().toggleClass("active")})),$(document).on("click",".tab-item .menu-item",(function(e){e.preventDefault();var t=$(this).attr("data-content");$(this).parents(".tab-item").find(".menu-item").removeClass("active"),$(this).addClass("active"),$(this).parents(".tab-item").find(".content-item").removeClass("active"),$("#"+t).addClass("active")})),$(document).on("click",".post-item .post-share > i",(function(e){e.preventDefault(),$(this).parent().find(".social-links").fadeToggle("fast")})),$(document).on("click",'[data-dismiss="true"]',(function(){$(this).parents(".popup-overlay").fadeOut("fast")})),$(document).on("click","[data-popup]",(function(){var t=$(this).attr("data-popup");e($("#"+t),50)})),$(document).on("click",".popup-overlay",(function(e){$(e.target).hasClass("popup-overlay")&&t($(this))})),$(document).on("click",'[data-search="open"]',(function(){e($(".search-form")[0],50),setTimeout((function(){$(".search-form input").focus()}),50)})),$(document).on("click",'[data-search="close"]',(function(){t($(".search-form")[0])}));var k=function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.availableLanguages=["English","Español","Português BR","Português PT"],this.langs=[{labels:["Forgot your password?","Login","Not Registered?","Sign Up!","Email","Error","Invalid Email","Password","See password","Invalid password","Language","Keep me logged in","Dashboard","User","Login","Register","Next","Step","Inform your Social ID","Social ID","Inform your full Name","Your Name","Previous"]},{labels:["¿Olvidaste tu contraseña?","Iniciar sesión","¿No registrado?","Registrarse!","Correo electrónico","Error","Correo electrónico no válido","Contraseña","Ver contraseña","Contraseña no válida","Idioma","Mantenerme conectado","Panel de control","Usuario","Iniciar sesión","Registrarse","Siguiente","Paso","Informe su identificación","Identificación social","Informe su nombre completo","Su nombre","Previo"]},{labels:["Esqueceu sua senha?","Login","Não registrado?","Inscreva-se!","Email","Erro","Email inválido","Senha","Ver senha","Senha inválida","Idioma","Mantenha-me conectado","Dashboard","Usuário","Login","Registrar","Próximo","Passo","Informe seu CPF","CPF","Informe nome completo","Seu nome e sobrenome","Anterior"]},{labels:["Esqueceu sua senha?","Login","Não registrado?","Inscreva-se!","Email","Erro","Email inválido","Senha","Ver senha","Senha inválida","Idioma","Mantenha-me conectado","Dashboard","Usuário","Login","Registrar","Próximo","Passo","Informe seu CPF","CPF","Informe nome completo","Seu nome e sobrenome","Anterior"]}]},C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&r(e,n)}(e,0,[{key:"getHtml",value:function(){var e=s(12),t=s(13),n=s(14),a=s(15);return'<div class="nav-menu" align=\'left\'><nav class="menu">\n\t\t\t\t<div class="nav-header" style=\'height:150px\'><a href=\'/\' style=\'cursor:pointer\'><img src="src/static/img/menuLogo.png" alt=\'Dashboard\' style="width:300px;height:105px;padding-top:15px"></a></div>\n\t\t\t\t<div class="nav-container">\n\t\t\t\t\t<ul class="main-menu">\n\t\t\t\t\t\t<li class="active"><a href=\'/\' style=\'cursor:pointer\'><i class="fa fa-home"></i> '.concat(e,'</a></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="javascript:void(0);"><i class="fa fa-sign-in"></i> ').concat(t,' <span class="fa fa-angle-down"></span></a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href="/login" style=\'cursor:pointer\'>').concat(n,'</a></li>\n\t\t\t\t\t\t\t\t<li><a href="/register" >').concat(a,"</a></li>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>")}}]),e}(),S=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&l(e,n)}(e,0,[{key:"getHtml",value:function(e,t){return null==t&&(t=s(4)),'<div class="form-row no-padding">\n                <i class="fa fa-envelope" id=\'fail'.concat(e,"'></i>\n                <input id=\"").concat(e,'" type="text" class="form-element" placeholder="').concat(t,'">\n            </div>')}},{key:"validate",value:function(e,t){return o($("#"+e).val(),99,"email")?(i("#fail"+e),!0):(1==t.focus?$("#"+e).focus():(a("#fail"+e),1==t.msg&&n(s(5),s(6))),!1)}}]),e}(),x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&c(e,n)}(e,0,[{key:"getHtml",value:function(e){var t=s(7),n=s(8);return'<div class="form-row no-padding">\n                <i class="fa fa-lock" style=\'padding-left:4px\' id=\'fail'.concat(e,"'></i>\n                <table width='100%'>\n                    <tr>\n                        <td valign='top' width='90%'>\n                            <input id=\"").concat(e,'" type="password" class="form-element" placeholder="').concat(t,"\">\n                        </td>\n                        <td valign='top'>\n                            <i class=\"fa fa-eye\" id='seePass' title='").concat(n,"'></i>\n                        </td>\n                    </tr>\n                </table>\n            </div>")}},{key:"btnSeePassword",value:function(e){null==e&&(e="#formPass"),$(e).removeAttr("type"),$("#seePass").css("color")===$("body").css("color")?($("#seePass").css("color","red"),$(e).attr("type","text")):($("#seePass").css("color",$("body").css("color")),$(e).attr("type","password")),$(e).focus()}},{key:"validate",value:function(e,t){return o($("#"+e).val(),20,"password",4)?(i("#fail"+e),!0):(1==t.focus?$("#"+e).focus():(a("#fail"+e),1==t.msg&&n(s(5),s(9))),!1)}}]),e}(),I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&u(e,n)}(e,0,[{key:"getHtml",value:function(e,t,n,a){return a=null==a?"":"style="+a,"<div class=\"form-row no-padding\">\n            <input type='checkbox' id='".concat(e,"' ").concat(n," /><span ").concat(a,">").concat(t,"</span>\n        </div>")}}]),e}(),P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&f(e,n)}(e,0,[{key:"getHtml",value:function(e,t,n){return"<".concat(e," id='").concat(e,"'>").concat(n,"</").concat(e,">")}}]),e}(),E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&d(e,n)}(e,0,[{key:"getHtml",value:function(){return'<div class="popup-overlay" id="popUpSystem">\n                <div class="popup-container" style=\'margin-top:50px;max-width:350px\'>\n                    <div class="popup-header">\n                        <h3 class="popup-title" id=\'popUpSystemTitle\'></h3>\n                        <span id=\'popupClose\' class="popup-close" data-dismiss="true"><i class="fa fa-times"></i></span>\n                    </div>\n                    <div class="popup-content">          \n                        <span style="font-size:64px;color:red;padding-top:32px;" class="fa fa-exclamation-circle"></span><br>\n                        <br><span id=\'popUpSystemText\' style="padding-top:16px;"></span><br><br>\n                    </div>\n                </div>\n            </div>'}}]),e}(),L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&m(e,n)}(e,0,[{key:"getHtml",value:function(){for(var e="",t=(new k).availableLanguages,n=0;n<t.length;++n)e+="<option value='"+(n+1).toString()+"'>"+t[n]+"</option>";return"<select class=\"form-element\" id='languageSel'>".concat(e,"</select>")}}]),e}(),T=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){n&&p(e,n)}(e,0,[{key:"elements",value:function(){return{formMail:"formMail",formPass:"formPass",keepLogged:"keepLogged",btnSubmit:"btnSubmit"}}},{key:"getHtml",value:function(){var e=this.elements(),t=s(11),n=s(0),a=s(1),i=s(2),o=s(3);return'<div style="width:296px" class="form-row-group-dark"> \n            <br>'.concat(E.getHtml(),"\n            <table><tr><td width='120px'><b>Login</b></td><td width='50%'>").concat(L.getHtml(),'</td></tr></table>\n            <br>            \n            <div class="form-row-group with-icons" align="left">                    \n                ').concat(S.getHtml(e.formMail),"\n                ").concat(x.getHtml(e.formPass),"\n                <br>\n                ").concat(I.getHtml(e.keepLogged,t,"checked","color:#c7c7c7;font-size:small"),'\n            </div>\n            <br>                \n            <div class="form-row txt-center">\n                <a href="/forgot">\n                    ').concat(P.getHtml("span","fp",n),'\n                </a>\n            </div>\n            <br>\n            <div class="form-row">\n                <a id="').concat(e.btnSubmit,'" class="button circle block green">\n                       ').concat(a,' <i class="fa fa-spinner fa-spin" id=\'loading\' style="display:none;"></i>\n                </a>\n            </div>\n            <br>\n            <div class="form-row txt-center">\n                ').concat(i,' <a href="/register">').concat(o,"</a>\n            </div>\n            <br>\n        </div>")}},{key:"validate",value:function(e){var t=this.elements(),n=S.validate(t.formMail,e),a=x.validate(t.formPass,e);return!(!n||!a||(document.activeElement.blur(),0))}}]),e}(),H=function(){function e(t){function a(){if(!$("#loading").is(":visible")){var e=T.elements(),t=function(e,t,n){return{email:e,password:t,_language:localStorage.getItem("appLanguage")}}($("#"+e.formMail).val().trim(),$("#"+e.formPass).val().trim());T.validate({focus:!1,msg:!0,fields:t})&&(function(e){$("#loading").show(),null!=e&&($(e).removeClass("green"),$(e).addClass("light"),sessionStorage.setItem("myBtn",e))}("#"+e.btnSubmit),function(e){(function(e,t){var n=sessionStorage.getItem("mockServer");if(null!=n)return new Promise((function(e,t){setTimeout((function(){var a=JSON.parse(n);1==a.payload?e({ok:!0,payload:a.obj}):t({ok:!1,msg:a.obj.message})}),500)}));var a="http://localhost",i="18524",o=JSON.stringify(t);return new Promise((function(e,t){fetch(a+":"+i+"/api/authenticate_v1",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then((function(n){400===n.status?n.json().then((function(e){t({ok:!1,msg:e.message})})):!0===n.ok?n.json().then((function(t){e({ok:!0,payload:t})})):n.json().then((function(t){e({ok:!1,msg:t.message})}))})).catch((function(t){e({ok:!1,msg:t.toString()})}))}))})(0,e).then((function(e){1==e.ok?function(e){!function(e){$("#loading").hide(),null!=e&&$(e).addClass("green")}();var t=function(e){return{token:e.token,user:{email:e.user.email,login:e.user.login,hsh:e.user.hsh}}}(e);(function(e){localStorage.setItem("token",e.token),localStorage.setItem("email",e.email),localStorage.setItem("user_name",e.userName)})(t),$("#"+T.elements().keepLogged).is(":checked")&&function(e,t){localStorage.setItem(e,t)}("hsh",t.user.hsh),location.href="/"}(e.payload):n(s(5),e.msg)})).catch((function(e){n(s(5),e.msg)}))}(t))}}(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.params=t,$(document).ready((function(){$("#languageSel").val(parseInt(localStorage.getItem("appLanguage"))+1)})),$(document).on("keydown",(function(e){switch(e.keyCode){case 9:T.validate({focus:!1,msg:!1,fields:null});break;case 13:a()}})),$(document).on("change","#languageSel",(function(){var e,t;e=$("#languageSel").val(),t=localStorage.getItem("appLanguage"),console.log(e+" e "+t),t!=e-1&&(localStorage.setItem("appLanguage",e-1),1)&&setTimeout((function(){location.href="/login"}),100)})),$(document).bind("click",(function(e){var t=T.elements();switch($(e.target).attr("id")){case t.btnSubmit:a();break;case"seePass":x.btnSeePassword();break;case"popupClose":T.validate({focus:!1,msg:!1,fields:null})}}))}return t=e,(a=[{key:"getHtml",value:function(){return T.getHtml()}}])&&g(t.prototype,a),e;var t,a}(),O=function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.url=t}return function(e,t,n){t&&v(e.prototype,t)}(e,[{key:"getProperView",value:function(e){return new H(e)}},{key:"getHtml",value:function(){var e=this.url,t={id:null},n=e.split("/");return e="/"+n[1],2<=n.length&&(t.id=n[2]),'<div class="wrapper" align="center">'.concat(C.getHtml(),"<div class=\"wrapper-inline img shadow\" >\n                    <header id='appHeader'>\n                        <img src='src/static/img/topLogo.jpg' alt='iFix' style='width:60px;height:32px;'/>\n                        <div class=\"navi-menu-button\"><em></em><em></em><em></em></div>\n                    </header>\n                    <main><section class=\"container\"><br>").concat(this.getProperView(t).getHtml(),"</section></main>\n                </div></div>")}}]),e}(),j=function(){var e=new O(window.location.pathname);document.querySelector("#myApp").innerHTML=e.getHtml()};window.addEventListener("popstate",j),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(e){e.target.matches("[data-link]")&&(e.preventDefault(),function(e){history.pushState(null,null,e),j()}(e.target.href))})),j()}))})();
//# sourceMappingURL=Login.js.map