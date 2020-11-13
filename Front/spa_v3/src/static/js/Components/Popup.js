
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"

export default class {

    constructor(params) {
        this.params = params;
    }

    static getHtml() {
        return MainCtrl.HtmlCleanup(`
            <div class="popup-overlay" id="popUpSystem">
                <div class="popup-container" style='margin-top:50px;max-width:350px'>
                    <div class="popup-header">
                        <h3 class="popup-title" id='popUpSystemTitle'></h3>
                        <span id='popupClose' class="popup-close" data-dismiss="true"><i class="fa fa-times"></i></span>
                    </div>
                    <div class="popup-content">          
                        <span style="font-size:64px;color:red;padding-top:32px;" class="fa fa-exclamation-circle"></span><br>
                        <br>
                        <span id='popUpSystemText' style="padding-top:16px;"></span>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
            `);
    }
}
