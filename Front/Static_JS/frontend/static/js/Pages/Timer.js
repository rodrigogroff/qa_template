
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import MenuAdvanced from "../Components/MenuAdvanced.js";
import Timer from "../Components/Timer.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
    }

    getHtml() {
        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Timer Sample")}
                    <br>
                    ${new Timer().getHtml()}
                </div>
            </div>
        `;
    }
}