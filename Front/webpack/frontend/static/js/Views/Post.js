
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";

export default class extends AbstractView {

    constructor(params) {
        super(params)
        this.postId = params.id;
    }

    getHtml() {
        return  `
                ${new TitleForm().getHtml('Post Demo')}
                <br>
                <p>Post #${this.postId} View</a>
                `;
    }
}
