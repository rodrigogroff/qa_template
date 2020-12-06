
import { MultiLanguage, AppLanguage } from '../language'

import EmailField from '@app/Components/Fields/Email'
import PasswordField from '@app/Components/Fields/Password'
import CheckBoxField from '@app/Components/Fields/CheckBox'
import { buildTable2TD, buildTable2TDEqual, BaseLoader } from '@app/Components/Images/BaseLoader'
import Label from '@app/Components/Misc/Label'
import Popup from '@app/Components/Modals/Popup'
import LanguageSelect from '@app/Components/Selects/LanguageSelect'
import { updateHTML, mobileCheck } from '@app/Infra/Util'

window.addEventListener("resize", e => { MyForm.update() } );

export default class MyForm {

    static elements() {
        return {
            formMail: 'formMail',
            formPass: 'formPass',
            keepLogged: 'keepLogged',
            btnSubmit: 'btnSubmit',
        };
    }

    static update() {
        updateHTML('mainFormApp', MyForm.getHtml())
    }

    static getHtml() {
        if (mobileCheck())
            return this.htmlMobile()
        else
            return this.htmlDesktop();
    }

    static htmlMobile() {

        var elements = this.elements();

        var checkMsg = MultiLanguage(11)
        var forgotMsg = MultiLanguage(0)
        var loginMsg = MultiLanguage(1)
        var ncadMsg = MultiLanguage(2)
        var cadHereMsg = MultiLanguage(3)
        var placeholderEmail = MultiLanguage(23)
        var placeholderPass = MultiLanguage(7)
        var placeholderPass_Title = MultiLanguage(8)
        var title = MultiLanguage(1)
        var language = MultiLanguage(10)
        
        return `<div style="width:296px" class="form-row-group-dark"><br>                
                    ${buildTable2TDEqual("<label for='languageSel'>"+ language  + "</label>", LanguageSelect.getHtml(new AppLanguage().availableLanguages))}
                    <div class="form-row txt-center" style='padding-top:8px;padding-bottom:18px'>
                        ${buildTable2TDEqual("<h4>" + title + "</h4>", ncadMsg + " <a href='/register'>" + cadHereMsg + "</a>")}
                    </div>
                    <div class="form-row-group" align="left">
                        <label for='${elements.formMail}' style='padding-left:20px'>${placeholderEmail}</label>
                        ${EmailField.getHtml(elements.formMail, '')}
                        <br>
                        <label for='${elements.formPass}' style='padding-left:20px'>${placeholderPass}</label>
                        ${PasswordField.getHtml(elements.formPass, '', placeholderPass_Title)}
                        <br>
                        ${CheckBoxField.getHtml(elements.keepLogged, checkMsg, 'checked')}
                    </div>
                    <br>
                    <div class="form-row">
                        <div align='center' id="${elements.btnSubmit}" class="button circle block green">
                            ${buildTable2TD(loginMsg, BaseLoader(), elements.btnSubmit)}
                        </div>
                    </div>
                    <br>
                    <div class="form-row txt-center">
                        <a href="/forgot"> ${Label.getHtml('span', 'fp', forgotMsg)} </a>                
                    </div>
                    <br>         
                </div>${Popup.getHtml()}`;
    }

    static htmlDesktop() {

        var elements = this.elements();
        
        var checkMsg = MultiLanguage(11)
        var forgotMsg = MultiLanguage(0)
        var loginMsg = MultiLanguage(1)
        var ncadMsg = MultiLanguage(2)
        var cadHereMsg = MultiLanguage(3)
        var placeholderEmail = MultiLanguage(23)
        var placeholderPass = MultiLanguage(7)
        var placeholderPass_Title = MultiLanguage(8)
        var title = MultiLanguage(1)
        var language = MultiLanguage(10)

        return `<div style="width:296px" class="form-row-group-dark"><br>                
                    ${buildTable2TDEqual("<label for='languageSel'>"+ language  + "</label>", LanguageSelect.getHtml(new AppLanguage().availableLanguages))}
                    <div class="form-row txt-center" style='padding-top:8px;padding-bottom:18px'>
                        ${buildTable2TDEqual("<h4>" + title + "</h4>", ncadMsg + " <a href='/register'>" + cadHereMsg + "</a>")}
                    </div>
                    <div class="form-row-group" align="left">
                        <label for='${elements.formMail}' style='padding-left:20px'>${placeholderEmail}</label>
                        ${EmailField.getHtml(elements.formMail, '')}
                        <br>
                        <label for='${elements.formPass}' style='padding-left:20px'>${placeholderPass}</label>
                        ${PasswordField.getHtml(elements.formPass, '', placeholderPass_Title)}
                        <br>
                        ${CheckBoxField.getHtml(elements.keepLogged, checkMsg, 'checked')}
                    </div>
                    <br>
                    <div class="form-row">
                        <div align='center' id="${elements.btnSubmit}" class="button circle block green">
                            ${buildTable2TD(loginMsg, BaseLoader(), elements.btnSubmit)}
                        </div>
                    </div>
                    <br>
                    <div class="form-row txt-center">
                        <a href="/forgot"> ${Label.getHtml('span', 'fp', forgotMsg)} </a>                
                    </div>
                    <br>
                </div>${Popup.getHtml()}`;
    }

    static validate(_params) {
        var elements = this.elements();
        var valPass = PasswordField.validate(elements.formPass, _params, MultiLanguage(5), MultiLanguage(9))
        var valEmail = EmailField.validate(elements.formMail, _params, MultiLanguage(5), MultiLanguage(6))
        if (!(valEmail && valPass)) return false;
        document.activeElement.blur();
        return true;
    }
}
