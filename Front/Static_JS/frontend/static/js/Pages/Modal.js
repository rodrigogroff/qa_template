
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import Modal from "../Components/Modal.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);  
        $(document).bind('click', function (e) 
        {
            switch ($(e.target).attr('id')) {
                case "open_modal": $("#myModal").modal({ show: true }); break;
                case "myModal_close": console.log('close'); break;
                case "myModal_save": console.log('save'); break;                    
            }
        });
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();
        var injectDataModal = new Modal('title','sub', 'text', 'Close','Save','myModal').getHtml()
        var button = "<button class='btn btn-shadow btn-xs btn-success mr-3 mb-5' id='open_modal'>Open</button>"

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <div class="card-heading d-flex a-i-center j-c-between">
                        <h4>Modal Sample</h4>
                    </div>
                    ${button}
                    <div align='left'>
                        ${injectDataModal}
                    </div>
                </div>
            </div>
        `;
    }
}
