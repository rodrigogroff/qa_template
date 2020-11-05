
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import MenuAdvanced from "../Components/MenuAdvanced.js";
import DataLabel from "../Components/DataLabel.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);        
    }

    getHtml() {
        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Data Label Sample")}
                    <br>
                    ${new DataLabel('lblOne','This is your <b>text</b>').getHtml()}
                </div>
            </div>
        `;
    }
}