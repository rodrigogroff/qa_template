
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import Timer from "../Components/Timer.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();
        var injectTimer = new Timer().getHtml()

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <br>
                    <h1>Timer Demo</h1>                    
                    <br>
                    ${injectTimer}
                </div>
            </div>
        `;
    }
}