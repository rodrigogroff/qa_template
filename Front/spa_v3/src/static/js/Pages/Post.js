
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class extends MainCtrl {

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
