
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import Menu from "../Components/MenuAdvanced.js"

export default class extends AbstractView {
    
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Posts");
    }

    getHtml() {

        var injectMenu = new Menu().getHtml();

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <h1>Posts</h1>
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
