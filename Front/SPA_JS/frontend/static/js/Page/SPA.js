
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchControl from "../Infra/FetchCtrl.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";

//Views
import Login from "../Views/Login.js";
import DataTableClickPagination from "../Views/DataTableClickPagination.js";

class Router
{
    getHtml() {

        var currentState = new FetchControl().getFromStorage('currentState');

        if (currentState == undefined)
            currentState = 'dashboard';

        var injectPage = "";

        switch (currentState)
        {
            case '/login': injectPage = new Login().getHtml(); break;
            case '/datatableclickpagination': injectPage = new DataTableClickPagination().getHtml(); break;
        }        

        var injectMenu = new MenuAdvanced().getHtml();

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    ${injectPage}
                </div>
            </div>
        `;
    }
}

export default class extends AbstractView {
    
    constructor(params) {
        super(params);

        $("#app").bind('click', function (e) {
            $("#app").html(new Router().getHtml());
        });
    }

    getHtml() {
        return new Router().getHtml();
    }
}