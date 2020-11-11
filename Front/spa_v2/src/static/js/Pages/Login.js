
//Infrastructure
import MainCtrl from "../Infra/MainCtrl.js"
import FetchCtrl from "../Infra/FetchCtrl.js"
import EndPoints from "../Infra/Endpoints.js"

//Components
import EmailField from "../Components/Fields/Email.js"
import PasswordField from "../Components/Fields/Password.js"
import Endpoints from "../Infra/Endpoints.js"

export default class extends MainCtrl {

    constructor(params) {
        super(params)

        $(document).ready(function () {
            $('#formMail').focus()
        });

        $(document).on('keydown', function (e) {
            var code = e.keyCode
            if (code === 9) {  // tab
                e.preventDefault()
                validateForm({ focus: false, msg: false, fields: extractFormData() })
            }
            else if (code === 13) // enter
                btnSubmit_Click(extractFormData())
        });

        $(document).bind('click', function (e) {
            switch ($(e.target).attr('id')) {
                // login
                case 'btnSubmit': btnSubmit_Click(extractFormData()); break;
                // do nothing
                case 'formMail': case 'formPass': break;
                // check password
                case 'seePass': PasswordField.btnSeePassword(); break;
                // close -> error (x)
                default: validateForm({ focus: false, msg: false, fields: extractFormData() }); break;
            }
        });

        function extractFormData() {
            return new Endpoints().
                authenticate_Input(
                    $('#formMail').val().trim(),
                    $('#formPass').val().trim()
                );
        }

        function validateForm(_params) {

            if (!EmailField.validate(_params)) return false;
            $('#formPass').focus();
            if (!PasswordField.validate(_params)) return false;
            // all ok, loose focus
            document.activeElement.blur();

            return true;
        }

        function btnSubmit_Click(_fields) {

            if (!validateForm({ focus: false, msg: true, fields: _fields }))
                return;

            var api = new FetchCtrl();

            MainCtrl.loadingOn()

            $('#btnSubmit').removeClass('green')
            $('#btnSubmit').addClass('light')

            MainCtrl.disableButton('#btnSubmit')
        
            api.postPublicPortal(JSON.stringify(_fields), new EndPoints().authenticate)
                .then(resp => {
                    MainCtrl.loadingOff()
                    MainCtrl.enableButton('#btnSubmit')
                    $('#btnSubmit').addClass('green');
                    if (resp.ok === true) {                            
                        var obj = new Endpoints().authenticate_Output(resp.payload);
                        MainCtrl.loginOk(obj.token, obj.user.email, obj.user.login);
                        location.href = '/';
                    } else {
                        MainCtrl.cleanLogin()
                        MainCtrl.displaySystemPopup('Error', resp.msg)
                    }
                })
                .catch(resp => {
                    MainCtrl.loadingOff()
                    MainCtrl.enableButton('#btnSubmit')
                                            
                    $('#btnSubmit').addClass('green')
                    MainCtrl.displaySystemPopup('Error', resp.msg)
                });            
        }
    }

    getHtml() {
        return `
            <br>
            <div style="width:296px" class="form-row-group-dark"> 
                <div class="form-divider"></div>
                <div align='center'>
                    <h2>Login 2</h2>
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
                <br>
            </div>
            `;
    }
}
