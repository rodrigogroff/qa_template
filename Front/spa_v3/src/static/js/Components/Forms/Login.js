
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"
import Endpoints from "../../Infra/Endpoints"

//Components
import EmailField from "../Fields/Email"
import PasswordField from "../Fields/Password"
import ImgLoader from "../ImageLoader"

export default class {

    static getHtml() {
        return MainCtrl.HtmlCleanup(`
        <div style="width:296px" class="form-row-group-dark"> 
            <div class="form-divider"></div>
            <div align='center'>
                ${ImgLoader.getHtml('logoId', 'max-height:20px')}
            </div>
            <br>
            <div class="form-row-group with-icons" align="left">                    
                ${EmailField.getHtml()}
                ${PasswordField.getHtml()}
            </div>
            <br>                
            <div class="form-row txt-center">
                <a href="/forgot">Forgot password?</a>
            </div>
            <br>
            <div class="form-row">
                <a id="btnSubmit" class="button circle block green">
                    Login <i class="fa fa-spinner fa-spin" id='loading' style="display:none;"></i>
                </a>
            </div>
            <br>
            <div class="form-row txt-center">
                Not registered? <a href="/signup">Sign Up</a>
            </div>
            <br>
        </div>
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
