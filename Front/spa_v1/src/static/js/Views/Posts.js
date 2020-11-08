
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
                ${new TitleForm().getHtml('Posts Demo')}
                <br>
                <a href='./post/23' style='color:blue'>Check post #23 external</a><br>
                <br>
                <a _href='/post/76' style='cursor:pointer;color:blue'>Check post #76 spa</a>
                `;
    }
}
