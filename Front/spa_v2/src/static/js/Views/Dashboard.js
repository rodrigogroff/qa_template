
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components

export default class extends AbstractView {

    constructor(params) {
        super(params)
    }

    getHtml() {
        return  `
                Dashboard x
                `;
    }
}
