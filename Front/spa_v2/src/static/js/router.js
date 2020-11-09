
import 'jquery'

import SPA from "./Page/SPA.js"

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = () => {
    const view = new SPA(window.location.pathname);
    document.querySelector("#app").innerHTML = view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

