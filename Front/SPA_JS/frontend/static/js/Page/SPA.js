
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";

//Views
import Dashboard from "../Views/Dashboard.js";
import Login from "../Views/Login.js";
import Posts from "../Views/Posts.js";
import Post from "../Views/Post.js";
import DataTableClickPagination from "../Views/DataTableClickPagination.js";

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

        var newState = sessionStorage.getItem('currentState')

        if (this.url != undefined)
            newState = this.url;
        else 
            if (newState == null || newState == undefined)
                newState = '/dashboard';
        
        var params = { id: null };
        var route_values = newState.split("/");

        newState = '/' + route_values[1]

        if (route_values.length >= 2)
            params.id = route_values[2]

        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center' style='margin-left:20px;margin-top:20px;margin-right:20px'>
                ${this.getProperView(newState, params).getHtml()}
            </div>
        `;
    }
}

export default class extends AbstractView {    
    constructor(params) {
        super(params);
        $("#app").bind('click', function (e) {
            if (e!= undefined)
                if(e.target != undefined)
                    if (e.target.attributes._href != undefined)
                    {
                        var newState = e.target.attributes._href.value;
                        if (sessionStorage.getItem('currentState') != newState)
                        {
                            sessionStorage.setItem('currentState', newState);
                            $("#app").html(new AppRouter().getHtml());
                        }                        
                    }
        });
    }

    getHtml() { return new AppRouter(this.params).getHtml(); }
}
