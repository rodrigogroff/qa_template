
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"

export default class extends MainCtrl {
    
    static getHtml() {
        return this.HtmlCleanup(`
            <div class="form-row no-padding">
                <i class="fa fa-envelope" id='failBtnMail'></i>
                <input id="formMail" type="text" class="form-element" placeholder="${this.MultiLanguage(4)}">
            </div>
            `);
    }

    static validate(_params) {
        if (!this.isFieldContentValid(_params.fields.email, 99, 'email')) {
            if (_params.focus == true)
                $('#formMail').focus()
            else {
                this.errorField('#failBtnMail')
                if (_params.msg == true)
                    this.displaySystemPopup( this.MultiLanguage(5), this.MultiLanguage(6))
            }
            return false;
        }
        else
            this.errorClean('#failBtnMail')
        return true;
    }    
}
