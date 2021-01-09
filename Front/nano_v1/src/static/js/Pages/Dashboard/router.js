
import "@app/Infra/global.script";
import Menu from "@app/Components/Menu";
import Controller from "./CtrlDashboard";

class AppRouter {
  constructor(url) {
    this.url = url;
    //sessionStorage['mock'] = true;
  }

  getHtml() {
    var newState = this.url;
    var params = { id: null };
    var route_values = newState.split("/");
    newState = "/" + route_values[1];
    if (route_values.length >= 2) params.id = route_values[2];
    return `<div id='splash' align='center' style='display:none;width:100%;height:100%;'></div>
                <div class="wrapper" align="center">${Menu.getHtml()}<div class="wrapper-inline img shadow" >
                    <header id='appHeader'>
                      <img src='src/static/img/topLogo.png' alt='Nano Logo' style='margin-top:-7px;margin-left:-30px' />
                      <div class="navi-menu-button"><em></em><em></em><em></em></div>                      
                    </header>
                    <main><section class="container"><br><div id='mainFormApp'>${new Controller(params).getHtml()}</div></section></main>
                </div></div>`;
  }
}

export default class {
  constructor(params) {
    this.params = params;
  }
  getHtml() {
    return new AppRouter(this.params).getHtml();
  }
}

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  document.querySelector("#myApp").innerHTML = new AppRouter(
    window.location.pathname
  ).getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
