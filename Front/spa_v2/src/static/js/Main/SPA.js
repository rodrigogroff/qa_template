
//Infrastructure
import MainCtrl from "../Infra/MainCtrl.js"

//Main Menu
import Menu from "../Components/Menu.js";

//Pages
import Dashboard from "../Pages/Dashboard.js";
import Login from "../Pages/Login.js";
//import Posts from "../Pages/Posts.js";
//import Post from "../Pages/Post.js";
//import DataTableClickPagination from "../Pages/DataTableClickPagination.js";

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

        return `
            <div class="wrapper" align="center">
                ${Menu.getHtml()}
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
                            <div class="sweet-loader">
                                <div class="box">
                                    <div class="circle1"></div>
                                    <div class="circle2"></div>
                                    <div class="circle3"></div>
                                </div>
                            </div>
                            <div class="popup-overlay" id="popUpSystem"> <!-- if you dont want overlay add class .no-overlay -->
                                <div class="popup-container" style='margin-top:50px;max-width:350px'>
                                    <div class="popup-header">
                                        <h3 class="popup-title" id='popUpSystemTitle'>Standart Popup</h3>
                                        <span id='popupClose' class="popup-close" data-dismiss="true"><i class="fa fa-times"></i></span>
                                    </div>
                                    <div class="popup-content">          
                                        <span style="font-size:64px;color:red;padding-top:32px;" class="fa fa-exclamation-circle"></span><br>
                                        <br>
                                        <span id='popUpSystemText' style="padding-top:16px;"></span>
                                        <br>
                                        <br>                                        
                                    </div>                                    
                                </div>
                            </div>
                            ${this.getProperView(newState, params).getHtml()}
                        </section>
                    </main>
                </div>
            </div>
            `;
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
