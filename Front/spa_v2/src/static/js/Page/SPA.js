
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Main Menu
import Menu from "../Components/Menu.js";

//Views
import Dashboard from "../Views/Dashboard.js";
import Login from "../Views/Login.js";
import Posts from "../Views/Posts.js";
import Post from "../Views/Post.js";
import DataTableClickPagination from "../Views/DataTableClickPagination.js";

import "./../global.script.js"

class AppRouter
{
    constructor(url) {
        this.url = url;
    }

    getProperView(newState, params)
    {
        switch (newState)
        {
            default: return new Dashboard(params);
            case '/login': return new Login(params);
            case '/posts': return new Posts(params);
            case '/post': return new Post(params); 
            case '/datatableclickpagination': return new DataTableClickPagination(params);
        }        
    }
    
    getHtml() {

        var newState = this.url

        if (newState == null || newState == undefined)
            newState = '/dashboard';
        
        var params = { id: null };
        var route_values = newState.split("/");

        newState = '/' + route_values[1]

        if (route_values.length >= 2)
            params.id = route_values[2]

        return `
            <div class="wrapper" align="center">
                ${new Menu().getHtml()}
                <div class="wrapper-inline" >
                    <header>
                        <h1 class="page-title">TEMPLATE</h1>
                        <div class="navi-menu-button">
                            <em></em>
                            <em></em>
                            <em></em>
                        </div>
                    </header>
                    <main>
                        <section class="container">
                            ${this.getProperView(newState, params).getHtml()}
                        </section>
                    </main>
                </div>
            </div>`;
    }
}

export default class extends AbstractView {    
    constructor(params) {
        super(params);
        $("#myApp").bind('click', function (e) {
            if (e!= undefined)
                if(e.target != undefined)
                    if (e.target.attributes._href != undefined)
                        document.querySelector("#myApp").innerHTML = new AppRouter(e.target.attributes._href.value).getHtml()                    
        });
    }

    getHtml() { return new AppRouter(this.params).getHtml(); }
}
