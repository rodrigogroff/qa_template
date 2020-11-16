
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"
import Endpoints from "../../Infra/Endpoints"

//Components
import EmailField from "../Fields/Email"
import PasswordField from "../Fields/Password"
import ImgLoader from "../ImageLoader"
import Label from "../Label"
import Popup  from "../Popup";
import SelectLanguage from "../Language/Select"

export default class extends MainCtrl {

    static getHtml() {
        return this.HtmlCleanup(`
        <div style="width:296px" class="form-row-group-dark"> 
            <br>
            <table><tr><td width='120px'>${this.MultiLanguage(10)}</td><td width='50%'>${SelectLanguage.getHtml()}</td></tr></table>
            <br>
            <br>    
            <div align='center'>
                ${ImgLoader.getHtml('logoId', 'max-height:90px', 'img shadow')}                
            </div>
            <br>
            <br>
            <div class="form-row-group with-icons" align="left">                    
                ${EmailField.getHtml()}
                ${PasswordField.getHtml()}
            </div>
            <br>                
            <div class="form-row txt-center">
                <a href="/forgot">
                    ${Label.getHtml('span','fp', this.MultiLanguage(0))}
                </a>
            </div>
            <br>
            <div class="form-row">
                <a id="btnSubmit" class="button circle block green">
                    ${this.MultiLanguage(1)} <i class="fa fa-spinner fa-spin" id='loading' style="display:none;"></i>
                </a>
            </div>
            <br>
            <div class="form-row txt-center">
                ${this.MultiLanguage(2)} <a href="/signup">${this.MultiLanguage(3)}</a>
            </div>
            <br>
        </div>
        ${Popup.getHtml()}
        `);
    }

    static validate(_params) {
        if (_params.fields == null)
            _params.fields = this.extractFormData();

        var fieldEmail = EmailField.validate(_params)
        var fieldPass = PasswordField.validate(_params)

        // component checking
        if (!(fieldEmail && fieldPass))
            return false;
        
        document.activeElement.blur();  // ok -> loose focus
        return true;
    }

    static extractFormData() {
        return new Endpoints().
            authenticate_Input(
                $('#formMail').val().trim(),
                $('#formPass').val().trim()
            );
    }
}
