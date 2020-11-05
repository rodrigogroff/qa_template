
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import MenuAdvanced from "../Components/MenuAdvanced.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);        
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();

        return `
            ${injectMenu}    
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Dashboard")}
                </div>
            </div>
        `;
    }
}