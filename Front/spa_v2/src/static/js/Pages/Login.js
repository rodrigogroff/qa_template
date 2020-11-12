
//Infrastructure
import MainCtrl from "../Infra/MainCtrl.js"
import FetchCtrl from "../Infra/FetchCtrl.js"
import EndPoints from "../Infra/Endpoints.js"

//Components
import EmailField from "../Components/Fields/Email.js"
import PasswordField from "../Components/Fields/Password.js"
import Endpoints from "../Infra/Endpoints.js"
import ImgLoader from "../Components/ImageLoader.js"

export default class extends MainCtrl {

    getHtml() {
        return `
            <br>
            <div style="width:296px" class="form-row-group-dark"> 
                <div class="form-divider"></div>
                <div align='center'>
                    <h2>Login</h2>
                        ${ImgLoader.getHtml('logoId','max-height:20px')}
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
            `;
    }

    constructor(params) {
        
        super(params)

        $(document).ready(function () {
            $('#formMail').focus() // user does not need to click in first field
            ImgLoader.loadAsync('logoId', 'https://lirp-cdn.multiscreensite.com/97c59373/dms3rep/multi/opt/LOGO.CONVEYbranco+total-1920w.png');
        });

        $(document).on('keydown', function (e) {
            switch (e.keyCode) {
                case 9: validateForm({ focus: false, msg: false, fields: null }); break;    //tab                
                case 13: btnSubmit_Click(); break;                                          //enter
            }
        });

        $(document).bind('click', function (e) {
            switch ($(e.target).attr('id')) {
                case 'btnSubmit': btnSubmit_Click(); break;                                         // login                
                case 'seePass': PasswordField.btnSeePassword(); break;                              // password eye                
                case 'popupClose': validateForm({ focus: false, msg: false, fields: null }); break; // close -> error (x)
            }
        });

        function validateForm(_params) {
            if (_params.fields == null)
                _params.fields = extractFormData();

            // component checking
            if (!(EmailField.validate(_params) &&           
                  PasswordField.validate(_params))) {
                return false;
            }   

            document.activeElement.blur();  // ok -> loose focus
            return true;
        }

        function extractFormData() {
            return new Endpoints().
                authenticate_Input(
                    $('#formMail').val().trim(),
                    $('#formPass').val().trim()
                );
        }

        function btnSubmit_Click() {
            if (MainCtrl.IsLoading())
                return;
            var formData = extractFormData();
            if (!validateForm({ focus: false,
                                msg: true, 
                                fields: formData }))
                return;
            MainCtrl.loadingOn('#btnSubmit')
            new FetchCtrl().
                postPublicPortal(
                    new EndPoints().authenticate,   // endpoint url
                    formData)                       // input service data
                .then(resp => {
                    if (resp.ok == true)                        
                        serviceOk(resp.payload)     // output service data 
                    else
                        MainCtrl.displaySystemPopup('Error', resp.msg);
                })
                .catch(resp => {
                    MainCtrl.displaySystemPopup('Error', resp.msg)
                });
        }

        function serviceOk(payload) {
            // stop icon
            MainCtrl.loadingOff()
            // convert data
            var response = new Endpoints().authenticate_Output(payload);
            // set user logged in
            MainCtrl.loginOk ( response.token, response.user.email, response.user.login );
            // redirect to index
            location.href = '/';
        }
    }
}
