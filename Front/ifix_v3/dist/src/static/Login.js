(()=>{"use strict";function t(t,e){if(t)if(null==t.style&&(t.style={}),t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="inline-block",t.style.visibility="visible",e)var n=0,a=setInterval((function(){1<=(n+=50/e)&&(clearInterval(a),n=1),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=1,t.style.filter="alpha(opacity=1)"}function e(t,e){if(t)if(null==t.style&&(t.style={}),e)var n=1,a=setInterval((function(){0>=(n-=50/e)&&(clearInterval(a),n=0,t.style.display="none",t.style.visibility="hidden"),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="none",t.style.visibility="hidden"}function n(e,n){var a=sessionStorage.getItem("myBtn");$("#loading").hide(),null!=a&&$(a).addClass("green"),t($("#popUpSystem")[0],50),$("#popUpSystemTitle").text(e),$("#popUpSystemText").text(n)}function a(t){$(t).attr("style","color:red")}function i(t){$(t).attr("style","")}function o(t,e,n,a){if(null==n&&(n="text"),null==e&&(e=20),null==a&&(a=4),"email"==n&&(e=99),null===t)return!1;if(void 0===t)return!1;if(""===t)return!1;var i=t.trim().length;if(0===i)return!1;if(i>e)return!1;if(i<a)return!1;switch(n){case"number":if(!/^\d*\.?\d*$/.test((t+"").toLowerCase()))return!1;break;case"email":if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test((t+"").toLowerCase()))return!1;break;case"name":if(3>i.length)return!1;for(var o,s=/^\d$/,r=0;r<t.length;r++)if(o=t[r],s.test(o))return!1;break;case"fullName":if(0>t.trim().indexOf(" "))return!1}return!0}function s(t){var e=localStorage.getItem("appLanguage");null==e&&(e=2,localStorage.setItem("appLanguage",e)),e=parseInt(e);var n=JSON.parse(sessionStorage.getItem("_lang"));return null==n&&(n=new k,sessionStorage.setItem("_lang",JSON.stringify(n))),t>=n.langs[e].labels.length&&(n=new k,sessionStorage.setItem("_lang",JSON.stringify(n))),n.langs[e].labels[t]}function r(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function l(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function c(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function u(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function f(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function d(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function m(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function p(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function g(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function h(t,e){for(var n,a=0;a<e.length;a++)(n=e[a]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}$(document).ready((function(){$(".navi-menu-button").on("click",(function(){v()})),$(".nav-menu").on("click",(function(t){$(t.target).hasClass("nav-menu")&&y()})),$("nav.menu ul.main-menu>li>a").on("click",(function(t){var e=$(this);t.preventDefault(),e.parent().hasClass("active")?($(this).parent().removeClass("active"),e.find("span").removeClass("fa-angle-up").addClass("fa-angle-down")):setTimeout((function(){$("nav.menu ul.main-menu > li").removeClass("active"),$("nav.menu ul li a span").removeClass("fa-angle-up").addClass("fa-angle-down"),e.parent().addClass("active"),e.find("span").removeClass("fa-angle-down").addClass("fa-angle-up")}),50)})),$(".tab-item .fix-width .menu-item").css({width:100/$(".tab-item .fix-width .menu-item").length+"%"}),$(".wizard").length&&(b(),$(window).resize()),$(".animated-text").length&&w()})),$(".wrapper-inline").on("scroll",(function(){150<this.scrollTop?$("header.no-background").addClass("set-bg"):$("header.no-background").removeClass("set-bg")}));var v=function(){$(".navi-menu-button").addClass("focused"),t($("div.nav-menu")[0],50),setTimeout((function(){$("nav.menu").addClass("opened")}),50)},y=function(){$(".navi-menu-button").removeClass("focused"),$("nav.menu").removeClass("opened"),$("div.nav-menu").fadeOut(200)},b=function(){$(window).on("resize",(function(){$(".wizard .wizard-item").height($(window).height()-50)}))},w=function(){$(".vertical-center").css({"margin-top":$(window).height()/2-$(".vertical-center").height()/2}),$(".animated-text").removeClass("zero-opacity"),$("[data-transation]").each((function(){var t=$(this);t.addClass("hide");var e=t.attr("data-transation");""==e&&(e="fadeInDown");var n=parseInt(t.attr("data-start-time"));isNaN(n)&&(n=0),setTimeout((function(){t.addClass("animated "+e)}),n)}))};$(document).on("click",".sweet-check",(function(){$(this).hasClass("checked")?($(this).removeClass("checked"),$(this).find("input").prop("checked",!1)):($(this).addClass("checked"),$(this).find("input").prop("checked",!0))})),$(document).on("click","[data-loader]",(function(){})),$(document).on("click",".expandable-item .expandable-header",(function(){if($(this).parent().hasClass("accordion"))if($(this).parent().hasClass("active"))$(this).parent().removeClass("active"),$(this).parent().find(".expandable-content").attr("style","");else{var t=$(this).parent().attr("data-group");$('[data-group="'+t+'"]').removeClass("active"),$('[data-group="'+t+'"]').find(".expandable-content").attr("style",""),$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().addClass("active")}else $(this).parent().hasClass("active")?$(this).parent().find(".expandable-content").attr("style",""):$(this).parent().find(".expandable-content").css({"max-height":$(this).parent().find(".expandable-content")[0].scrollHeight}),$(this).parent().toggleClass("active")})),$(document).on("click",".tab-item .menu-item",(function(t){t.preventDefault();var e=$(this).attr("data-content");$(this).parents(".tab-item").find(".menu-item").removeClass("active"),$(this).addClass("active"),$(this).parents(".tab-item").find(".content-item").removeClass("active"),$("#"+e).addClass("active")})),$(document).on("click",".post-item .post-share > i",(function(t){t.preventDefault(),$(this).parent().find(".social-links").fadeToggle("fast")})),$(document).on("click",'[data-dismiss="true"]',(function(){e($(this).parents(".popup-overlay"),100)})),$(document).on("click","[data-popup]",(function(){var e=$(this).attr("data-popup");t($("#"+e),50)})),$(document).on("click",".popup-overlay",(function(t){$(t.target).hasClass("popup-overlay")&&e($(this))})),$(document).on("click",'[data-search="open"]',(function(){t($(".search-form")[0],50),setTimeout((function(){$(".search-form input").focus()}),50)})),$(document).on("click",'[data-search="close"]',(function(){e($(".search-form")[0])}));var k=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.availableLanguages=["English","Español","Português BR","Português PT"],this.langs=[{labels:["Forgot your password?","Login","Not Registered?","Sign Up!","Email","Error","Invalid Email","Password","See password","Invalid password","Language","Keep me logged in","Dashboard","User","Login","Register","Next","Step","Inform your Social ID","Social ID","Inform your full Name","Your Full Name","Previous","Inform your email","Confirmation"]},{labels:["¿Olvidaste tu contraseña?","Iniciar sesión","¿No registrado?","Registrarse!","Correo electrónico","Error","Correo electrónico no válido","Contraseña","Ver contraseña","Contraseña no válida","Idioma","Mantenerme conectado","Panel de control","Usuario","Iniciar sesión","Registrarse","Siguiente","Paso","Informe su identificación","Identificación social","Informe su nombre completo","Su nombre completo","Previo","Informe su correo electrónico","Confirmación"]},{labels:["Esqueceu sua senha?","Login","Não registrado?","Inscreva-se!","Email","Erro","Email inválido","Senha","Ver senha","Senha inválida","Idioma","Mantenha-me conectado","Dashboard","Usuário","Login","Registrar","Próximo","Passo","Informe seu CPF","CPF","Informe nome completo","Seu nome completo","Anterior","Informe seu email","Confirmação"]},{labels:["Esqueceu sua senha?","Login","Não registrado?","Inscreva-se!","Email","Erro","Email inválido","Senha","Ver senha","Senha inválida","Idioma","Mantenha-me conectado","Dashboard","Usuário","Login","Registrar","Próximo","Passo","Informe seu CPF","CPF","Informe nome completo","Seu nome completo","Anterior","Informe seu email","Confirmação"]}]},C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&r(t,n)}(t,0,[{key:"getHtml",value:function(){var t=s(12),e=s(13),n=s(14),a=s(15);return'<div class="nav-menu" align=\'left\'><nav class="menu">\n\t\t\t\t<div class="nav-header" style=\'height:150px\'><a href=\'/\' style=\'cursor:pointer\'><img src="src/static/img/menuLogo.png" alt=\'Dashboard\' style="width:300px;height:105px;padding-top:15px"></a></div>\n\t\t\t\t<div class="nav-container">\n\t\t\t\t\t<ul class="main-menu">\n\t\t\t\t\t\t<li class="active"><a href=\'/\' style=\'cursor:pointer\'><i class="fa fa-home"></i> '.concat(t,'</a></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="javascript:void(0);"><i class="fa fa-sign-in"></i> ').concat(e,' <span class="fa fa-angle-down"></span></a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href="/login" style=\'cursor:pointer\'>').concat(n,'</a></li>\n\t\t\t\t\t\t\t\t<li><a href="/register" >').concat(a,'</a></li>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a href="javascript:void(0);"><i class="fa fa-sign-in"></i> Teste <span class="fa fa-angle-down"></span></a>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><a href="/login2" style=\'cursor:pointer\'>One</a></li>\n\t\t\t\t\t\t\t\t<li><a href="/register2" >Two</a></li>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t</div>')}}]),t}(),S=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&l(t,n)}(t,0,[{key:"getHtml",value:function(t,e){return null==e&&(e=s(4)),'<div class="form-row no-padding">\n                <i class="fa fa-envelope" id=\'fail'.concat(t,"'></i>\n                <input id=\"").concat(t,'" type="text" class="form-element" placeholder="').concat(e,'">\n            </div>')}},{key:"validate",value:function(t,e){return o($("#"+t).val(),99,"email")?(i("#fail"+t),!0):(1==e.focus?$("#"+t).focus():(a("#fail"+t),1==e.msg&&n(s(5),s(6))),!1)}}]),t}(),I=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&c(t,n)}(t,0,[{key:"getHtml",value:function(t,e,n){return'<div class="form-row no-padding">\n                <i class="fa fa-lock" style=\'padding-left:4px\' id=\'fail'.concat(t,"'></i>\n                <table width='100%'>\n                    <tr>\n                        <td valign='top' width='90%'>\n                            <input id=\"").concat(t,'" type="password" class="form-element" placeholder="').concat(e,"\">\n                        </td>\n                        <td valign='top'>\n                            <i class=\"fa fa-eye\" id='seePass").concat(t,"' title='").concat(n,"'></i>\n                        </td>\n                    </tr>\n                </table>\n            </div>")}},{key:"btnSeePassword",value:function(t){$(t).removeAttr("type"),$("#seePass"+t).css("color")===$("body").css("color")?($("#seePass"+t).css("color","red"),$("#"+t).attr("type","text")):($("#seePass"+t).css("color",$("body").css("color")),$("#"+t).attr("type","password")),$("#"+t)[0].focus()}},{key:"validate",value:function(t,e){return o($("#"+t).val(),20,"password",4)?(i("#fail"+t),!0):(1==e.focus?$("#"+t).focus():(a("#fail"+t),1==e.msg&&n(s(5),s(9))),!1)}}]),t}(),x=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&u(t,n)}(t,0,[{key:"getHtml",value:function(t,e,n,a){return a=null==a?"":"style="+a,"<div class=\"form-row no-padding\">\n            <input type='checkbox' id='".concat(t,"' ").concat(n," /><span ").concat(a,">").concat(e,"</span>\n        </div>")}}]),t}(),P=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&f(t,n)}(t,0,[{key:"getHtml",value:function(t,e,n){return"<".concat(t," id='").concat(t,"'>").concat(n,"</").concat(t,">")}}]),t}(),E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&d(t,n)}(t,0,[{key:"getHtml",value:function(){return'<div class="popup-overlay" id="popUpSystem">\n                <div class="popup-container" style=\'margin-top:50px;max-width:350px\'>\n                    <div class="popup-header">\n                        <h3 class="popup-title" id=\'popUpSystemTitle\'></h3>\n                        <span id=\'popupClose\' class="popup-close" data-dismiss="true"><i class="fa fa-times"></i></span>\n                    </div>\n                    <div class="popup-content">          \n                        <span style="font-size:64px;color:red;padding-top:32px;" class="fa fa-exclamation-circle"></span><br>\n                        <br><span id=\'popUpSystemText\' style="padding-top:16px;"></span><br><br>\n                    </div>\n                </div>\n            </div>'}}]),t}(),L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&m(t,n)}(t,0,[{key:"getHtml",value:function(){for(var t="",e=(new k).availableLanguages,n=0;n<e.length;++n)t+="<option value='"+(n+1).toString()+"'>"+e[n]+"</option>";return"<select class=\"form-element\" id='languageSel'>".concat(t,"</select>")}}]),t}(),T=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return function(t,e,n){n&&p(t,n)}(t,0,[{key:"elements",value:function(){return{formMail:"formMail",formPass:"formPass",keepLogged:"keepLogged",btnSubmit:"btnSubmit"}}},{key:"getHtml",value:function(){var t=this.elements(),e=s(11),n=s(0),a=s(1),i=s(2),o=s(3),r=s(7),l=s(8);return'<div style="width:296px" class="form-row-group-dark"> \n            <br>'.concat(E.getHtml(),"\n            <table><tr><td width='120px'><b>Login</b></td><td width='50%'>").concat(L.getHtml(),'</td></tr></table>\n            <br>            \n            <div class="form-row-group with-icons" align="left">                    \n                ').concat(S.getHtml(t.formMail),"\n                ").concat(I.getHtml(t.formPass,r,l),"\n                <br>\n                ").concat(x.getHtml(t.keepLogged,e,"checked","color:#c7c7c7;font-size:small"),'\n            </div>\n            <br>                \n            <div class="form-row txt-center">\n                <a href="/forgot">\n                    ').concat(P.getHtml("span","fp",n),'\n                </a>\n            </div>\n            <br>\n            <div class="form-row">\n                <a id="').concat(t.btnSubmit,'" class="button circle block green">\n                       ').concat(a,' <i class="fa fa-spinner fa-spin" id=\'loading\' style="display:none;"></i>\n                </a>\n            </div>\n            <br>\n            <div class="form-row txt-center">\n                ').concat(i,' <a href="/register">').concat(o,"</a>\n            </div>\n            <br>\n        </div>")}},{key:"validate",value:function(t){var e=this.elements(),n=S.validate(e.formMail,t),a=I.validate(e.formPass,t);return!(!n||!a||(document.activeElement.blur(),0))}}]),t}(),H=function(){function t(a){function i(){if("none"==$("#loading")[0].style.display){var t=T.elements(),e=function(t,e,n){return{email:t,password:e,_language:localStorage.getItem("appLanguage")}}($("#"+t.formMail).val().trim(),$("#"+t.formPass).val().trim());T.validate({focus:!1,msg:!0,fields:e})&&(function(t){$("#loading").show(),null!=t&&($(t).removeClass("green"),$(t).addClass("light"),sessionStorage.setItem("myBtn",t))}("#"+t.btnSubmit),function(t){(function(t,e){var n=sessionStorage.getItem("mockServer");if(null!=n)return new Promise((function(t,e){setTimeout((function(){var a=JSON.parse(n);1==a.payload?t({ok:!0,payload:a.obj}):e({ok:!1,msg:a.obj.message})}),500)}));var a="http://localhost",i="18524",o=JSON.stringify(e);return new Promise((function(e,n){fetch(a+":"+i+"/api/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then((function(t){400===t.status?t.json().then((function(t){n({ok:!1,msg:t.message})})):!0===t.ok?t.json().then((function(t){e({ok:!0,payload:t})})):t.json().then((function(t){e({ok:!1,msg:t.message})}))})).catch((function(t){e({ok:!1,msg:t.toString()})}))}))})("authenticate_v1",t).then((function(t){1==t.ok?function(t){!function(t){$("#loading").hide(),null!=t&&$(t).addClass("green")}();var e=function(t){return{token:t.token,user:{email:t.user.email,login:t.user.login,hsh:t.user.hsh}}}(t);(function(t){localStorage.setItem("token",t.token),localStorage.setItem("email",t.email),localStorage.setItem("user_name",t.userName)})(e),$("#"+T.elements().keepLogged).is(":checked")&&function(t,e){localStorage.setItem(t,e)}("hsh",e.user.hsh),location.href="/"}(t.payload):n(s(5),t.msg)})).catch((function(t){n(s(5),t.msg)}))}(e))}}(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.params=a,$(document).ready((function(){$("#languageSel").val(parseInt(localStorage.getItem("appLanguage"))+1)})),$(document).on("keydown",(function(t){switch(t.keyCode){case 9:T.validate({focus:!1,msg:!1,fields:null});break;case 13:i()}})),$(document).on("change","#languageSel",(function(){var t;t=$("#languageSel").val(),localStorage.getItem("appLanguage")!=t-1&&(localStorage.setItem("appLanguage",t-1),1)&&setTimeout((function(){location.href="/login"}),100)})),document.body.addEventListener("click",(function(t){if("popupClose"!=$(t.target.parentElement)[0].id){var n=T.elements();switch($(t.target).attr("id")){case n.btnSubmit:i();break;case"seePass"+n.formPass:I.btnSeePassword(n.formPass)}}else e($("#popUpSystem")[0],120)}))}return a=t,(i=[{key:"getHtml",value:function(){return T.getHtml()}}])&&g(a.prototype,i),t;var a,i}(),O=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.url=e}return function(t,e,n){e&&h(t.prototype,e)}(t,[{key:"getProperView",value:function(t){return new H(t)}},{key:"getHtml",value:function(){var t=this.url,e={id:null},n=t.split("/");return t="/"+n[1],2<=n.length&&(e.id=n[2]),'<div class="wrapper" align="center">'.concat(C.getHtml(),"<div class=\"wrapper-inline img shadow\" >\n                    <header id='appHeader'>\n                        <img src='src/static/img/topLogo.jpg' alt='iFix' style='width:60px;height:32px;'/>\n                        <div class=\"navi-menu-button\"><em></em><em></em><em></em></div>\n                    </header>\n                    <main><section class=\"container\"><br>").concat(this.getProperView(e).getHtml(),"</section></main>\n                </div></div>")}}]),t}(),j=function(){var t=new O(window.location.pathname);document.querySelector("#myApp").innerHTML=t.getHtml()};window.addEventListener("popstate",j),document.addEventListener("DOMContentLoaded",(function(){document.body.addEventListener("click",(function(t){t.target.matches("[data-link]")&&(t.preventDefault(),function(t){history.pushState(null,null,t),j()}(t.target.href))})),j()}))})();
//# sourceMappingURL=Login.js.map