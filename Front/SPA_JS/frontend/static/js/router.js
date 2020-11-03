// --------------------
// App Routing 
// --------------------

import Dashboard from "./Pages/Dashboard.js"
import Posts from "./Pages/Posts.js"
import Post from "./Pages/Post.js"
import Login from "./Pages/Login.js"

import DemoDataTable from "./Pages/DataTable.js"
import DemoDataTableClick from "./Pages/DataTableClick.js"
import DemoDataTableClickPagination from "./Pages/DataTableClickPagination.js"
import DemoDataLabel from "./Pages/DataLabel.js"
import DemoTimer from "./Pages/Timer.js"
import DemoTrigger from "./Pages/Trigger.js"
import DemoModal from "./Pages/Modal.js"

const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: Post },
    { path: "/login", view: Login },
    { path: "/datatable", view: DemoDataTable },
    { path: "/datatableclick", view: DemoDataTableClick },
    { path: "/datatableclickpagination", view: DemoDataTableClickPagination },
    { path: "/datalabel", view: DemoDataLabel },
    { path: "/timer", view: DemoTimer },
    { path: "/trigger", view: DemoTrigger },
    { path: "/modal", view: DemoModal },
];

// -------------------------
// App Router infra
// -------------------------

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
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
