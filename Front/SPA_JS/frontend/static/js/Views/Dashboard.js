
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";

export default class extends AbstractView {

    constructor(params) {
        super(params)
    }

    getHtml() {
        return  `
                ${new TitleForm().getHtml('Dashboard')}
                `;
    }
}
