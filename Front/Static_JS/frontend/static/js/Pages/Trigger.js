
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
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
        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                ${new TitleForm().getHtml("Trigger Sample")}
                    <br>
                    ${new Trigger('btnHW').getHtml()}
                </div>
            </div>
        `;
    }
}