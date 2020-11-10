
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"


export default class extends AbstractView {

    constructor(params) {
        super(params)
        this.postId = params.id;
    }

    getHtml() {
        return  `
                'Post Demo'
                <br>
                <p>Post #${this.postId} View</a>
                `;
    }
}
