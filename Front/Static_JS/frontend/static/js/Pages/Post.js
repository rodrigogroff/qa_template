
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import Menu from "../Components/MenuAdvanced.js"

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.postId = params.id;        
    }

    getHtml() {
        return `
            ${new Menu().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Posts Sample")}
                    <p>You are viewing the posts!<br>                    
                    <b>You are viewing post #${this.postId}</b></p>
                    <br>
                    <p>(Hit Back and Forward in browse to test history)</p>
                    <br>
                </div>
            </div>
            `;
    }
}
