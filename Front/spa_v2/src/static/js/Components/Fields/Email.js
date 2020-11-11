
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl.js"

export default class {
    
    static validate(_params) {
        if (!MainCtrl.isFieldContentValid(_params.fields.email, 99, 'email')) {
            if (_params.focus == true)
                $('#formMail').focus()
            else {
                MainCtrl.errorField('#failBtnMail')
                if (_params.msg == true)
                    MainCtrl.displaySystemPopup('Error', 'Invalid Email')
            }
            return false;
        }
        else
            MainCtrl.errorClean('#failBtnMail')
        return true;
    }

    static getHtml() {
        return `
            <div class="form-row no-padding">
                <i class="fa fa-envelope" id='failBtnMail'></i>
                <input id="formMail" type="text" class="form-element" placeholder="Username or Email">
            </div>
            `;
    }
}