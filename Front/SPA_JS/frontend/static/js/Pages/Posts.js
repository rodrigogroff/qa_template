
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import Menu from "../Components/MenuAdvanced.js"

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    getHtml() {

        var injectMenu = new Menu().getHtml();

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <h1>Posts</h1>
                    <p>You are viewing the posts!</p>
                    <br>
                    <a href='/posts/2' style='color:blue'>Check post number two</a><br>
                    <br>
                </div>
            </div>
            `;
    }
}