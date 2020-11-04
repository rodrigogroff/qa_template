
import FetchControl from "./FetchCtrl.js"

export default class {
    
    constructor(params) {
        
        this.params = params;

        $(document).ready(function () 
        {
            $(document).bind('click', function (e) 
            {
                if (e != undefined)
                    if (e.target != undefined)
                        if (e.target.attributes != undefined)
                            if (e.target.attributes._href != undefined)
                                if (e.target.attributes._href.value != undefined)
                                    processRoute(e.target.attributes._href.value);
            })

            function processRoute(newRoute)
            {
                new FetchControl().setToStorage ('currentState', newRoute);
                $("#app").trigger('click');  
            }
        });        
    }

    setTitle(title) {
        document.title = title;
    }

    getHtml() {
        return "";
    }
}