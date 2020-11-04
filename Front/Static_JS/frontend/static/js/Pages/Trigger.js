
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import Trigger from "../Components/Trigger.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);

        $(document).ready(function () 
        {
            $(document).bind('click', function (e) {
                if (e.target.id == 'btnHW')
                    alert("Click!");
            })
        });
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();
        var injectTrigger = new Trigger('btnHW').getHtml()

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <br>
                    <h1>Trigger Demo</h1>                    
                    <br>
                    ${injectTrigger}
                </div>
            </div>
        `;
    }
}