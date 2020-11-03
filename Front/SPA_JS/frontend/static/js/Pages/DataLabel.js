
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import DataLabel from "../Components/DataLabel.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);        
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();
        var injectDataLabel = new DataLabel('lblOne','This is your <b>text</b>').getHtml()

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <br>
                    <h1>DataLabel</h1>                    
                    <br>
                    ${injectDataLabel}
                </div>
            </div>
        `;
    }
}