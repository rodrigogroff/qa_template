
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class extends MainCtrl {

    constructor(params) {
        super(params)
        this.postId = params.id;
    }

    getHtml() {
        return  `                
                <br>
                <h1 style='color:white'> Post Demo </h1>
                <br>
                <p style='color:white'>Post #${this.postId} View</a>
                `;
    }
}
