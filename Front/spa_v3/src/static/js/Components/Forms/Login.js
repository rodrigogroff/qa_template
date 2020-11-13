
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

export default class {

    static getHtml() {
        return MainCtrl.HtmlCleanup(`
        <div style="width:296px" class="form-row-group-dark"> 
            <br>
            <table><tr><td width='120px'>${MainCtrl.MultiLanguage(10)}</td><td width='50%'>${SelectLanguage.getHtml()}</td></tr></table>
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
                    ${Label.getHtml('span','fp', MainCtrl.MultiLanguage(0))}
                </a>
            </div>
            <br>
            <div class="form-row">
                <a id="btnSubmit" class="button circle block green">
                    ${MainCtrl.MultiLanguage(1)} <i class="fa fa-spinner fa-spin" id='loading' style="display:none;"></i>
                </a>
            </div>
            <br>
            <div class="form-row txt-center">
                ${MainCtrl.MultiLanguage(2)} <a href="/signup">${MainCtrl.MultiLanguage(3)}</a>
            </div>
            <br>
        </div>
        ${Popup.getHtml()}
        `);
    }

    static validate(_params) {
        if (_params.fields == null)
            _params.fields = this.extractFormData();

        // component checking
        if (!(EmailField.validate(_params) &&
            PasswordField.validate(_params))) {
            return false;
        }

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
