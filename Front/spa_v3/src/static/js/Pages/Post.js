
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class extends MainCtrl {

    constructor(params) {
        super(params)
        this.postId = params.id;
    }

    getHtml() {
        return MainCtrl.HtmlCleanup(`                
                <br>
                <h1> Post Demo </h1>
                <br>
                <p>Post #${this.postId} View</a>
                `);
    }
}
