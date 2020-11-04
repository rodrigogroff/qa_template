
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"

//Components
import MenuAdvanced from "../Components/MenuAdvanced.js";
import Alert from "../Components/Alert.js";

export default class extends AbstractView {
    
    constructor(params) {
        super(params);  
        $(document).bind('click', function (e) 
        {
            switch ($(e.target).attr('id')) 
            {
                case "open_modal_danger": $("#myModalDanger").modal({ show: true }); break;
                case "open_modal_success": $("#myModalSuccess").modal({ show: true }); break;
                case "open_modal_warning": $("#myModalWarning").modal({ show: true }); break;
                case "open_modal_info": $("#myModalInfo").modal({ show: true }); break;

                case "myModalDanger_close": break;
                case "myModalSuccess_close": break;
                case "myModalWarning_close": break;
                case "myModalInfo_close": break;
            }
        });
    }

    getHtml() {

        var injectMenu = new MenuAdvanced().getHtml();

        var injectAlertDanger = new Alert('title', 'text','Close','myModalDanger').getHtmlDanger()
        var injectAlertSuccess = new Alert('title', 'text','Close','myModalSuccess').getHtmlSuccess()
        var injectAlertWarning = new Alert('title', 'text','Close','myModalWarning').getHtmlWarning()
        var injectAlertInfo = new Alert('title', 'text','Close','myModalInfo').getHtmlInfo()

        var buttonDanger = "<button class='btn btn-shadow btn-xs btn-danger mr-3 mb-5' id='open_modal_danger'>Danger</button>"
        var buttonSuccess = "<button class='btn btn-shadow btn-xs btn-success mr-3 mb-5' id='open_modal_success'>Success</button>"
        var buttonWarning = "<button class='btn btn-shadow btn-xs btn-warning mr-3 mb-5' id='open_modal_warning'>Warning</button>"
        var buttonInfo = "<button class='btn btn-shadow btn-xs btn-info mr-3 mb-5' id='open_modal_info'>Info</button>"

        return `
            ${injectMenu}
            <div align='center'>
                <div style='width:900px'>
                    <div class="card-heading d-flex a-i-center j-c-between">
                        <h4>Modal Sample</h4>
                    </div>                                        
                    <div align='left'>
                        ${buttonDanger} ${buttonSuccess} ${buttonWarning} ${buttonInfo}
                    </table>
                    ${injectAlertDanger} 
                    ${injectAlertSuccess}
                    ${injectAlertWarning}
                    ${injectAlertInfo}
                </div>
            </div>
        `;
    }
}
