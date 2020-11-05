
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
                <a href='./post/1' style='color:blue'>Check post #1 external</a><br>
                <br>
                <a _href='/post/1' style='cursor:pointer;color:blue'>Check post #1 spa</a>
                `;
    }
}
