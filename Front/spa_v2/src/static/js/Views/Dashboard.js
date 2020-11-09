
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";

export default class extends AbstractView {

    constructor(params) {
        super(params)

        console.log('dashboard')
    }

    getHtml() {
        return  `
                ${new TitleForm().getHtml('Dashboard x')}
                `;
    }
}
