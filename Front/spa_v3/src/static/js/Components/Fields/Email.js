
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"

export default class {
    
    static getHtml() {
        return MainCtrl.HtmlCleanup(`
            <div class="form-row no-padding">
                <i class="fa fa-envelope" id='failBtnMail'></i>
                <input id="formMail" type="text" class="form-element" placeholder="${MainCtrl.MultiLanguage(4)}">
            </div>
            `);
    }

    static validate(_params) {
        if (!MainCtrl.isFieldContentValid(_params.fields.email, 99, 'email')) {
            if (_params.focus == true)
                $('#formMail').focus()
            else {
                MainCtrl.errorField('#failBtnMail')
                if (_params.msg == true)
                    MainCtrl.displaySystemPopup(
                        MainCtrl.MultiLanguage(5), 
                        MainCtrl.MultiLanguage(6))
            }
            return false;
        }
        else
            MainCtrl.errorClean('#failBtnMail')
        return true;
    }    
}
