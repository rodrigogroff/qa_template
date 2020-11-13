
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

//Components
import Menu from "../Components/Menu";

//Pages
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Posts from "../Pages/Posts";
import Post from "../Pages/Post";
import DataTableClickPagination from "../Pages/DataTableClickPagination";

import "../global.script.js"

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

        return MainCtrl.HtmlCleanup(`
            <div class="wrapper" align="center">
                ${Menu.getHtml()}
                <div class="wrapper-inline" >
                    <header>
                        <h1 class="page-title" style='color:white'>TEMPLATE</h1>
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
            </div>
            `);
    }
}

export default class extends MainCtrl {    
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
