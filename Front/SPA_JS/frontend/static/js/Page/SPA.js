
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";

//Views
import Dashboard from "../Views/Dashboard.js";
import Login from "../Views/Login.js";
import DataTableClickPagination from "../Views/DataTableClickPagination.js";

class Router
{
    getHtml() {

        var viewClass = new Dashboard();

        switch (sessionStorage.getItem('currentState'))
        {
            case undefined: viewClass = new Login(); break; 
            case '/login': viewClass = new Login(); break;
            case '/datatableclickpagination': viewClass = new DataTableClickPagination(); break;
        }        

        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${viewClass.getHtml()}
                </div>
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
                        var currentState = sessionStorage.getItem('currentState');
                        if (currentState != newState)
                        {
                            sessionStorage.setItem('currentState', newState);
                            $("#app").html(new Router().getHtml());
                        }                        
                    }
        });
    }

    getHtml() {
        return new Router().getHtml();
    }
}