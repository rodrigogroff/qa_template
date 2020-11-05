
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import TitleForm from "../Components/TitleForm.js";
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
        return `
            ${new MenuAdvanced().getHtml()}
            <div align='center'>
                <div style='width:900px'>                                        
                    ${new TitleForm().getHtml("Modal Sample")}
                    <button class='btn btn-shadow btn-xs btn-success mr-3 mb-5' id='open_modal'>Open</button>
                    <div align='left'>
                        ${new Modal('title','sub', 'text', 'Close','Save','myModal').getHtml()}
                    </div>
                </div>
            </div>
        `;
    }
}
