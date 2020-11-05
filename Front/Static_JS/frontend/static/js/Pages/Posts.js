
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
import Menu from "../Components/MenuAdvanced.js"

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
    }

    getHtml() {
        return `
            ${new Menu().getHtml()}
            <div align='center'>
                <div style='width:900px'>
                    ${new TitleForm().getHtml("Posts Sample")}
                    <p>You are viewing the posts!</p>
                    <br>
                    <a href='/posts/2' style='color:blue'>Check post number two</a><br>
                    <br>
                </div>
            </div>
            `;
    }
}