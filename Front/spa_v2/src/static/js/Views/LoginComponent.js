
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchCtrl from "../Infra/FetchCtrl.js"

//Components
import EmailField from "../Components/Fields/Email.js"
import PasswordField from "../Components/Fields/Password.js"

export default class extends AbstractView {

    constructor(params) {
        super(params)

        $(document).ready(function () {
            $('#formMail').focus()
        });

        $(document).on('keydown', function (e) {
            var code = e.keyCode
            if (code === 9) {  // tab
                e.preventDefault()
                validateForm(new FetchCtrl(), { focus: false, msg: false, fields: getData() })
            }
            else if (code === 13) // enter
                btnSubmit_Click(getData())
        });

        $(document).bind('click', function (e) {
            switch ($(e.target).attr('id')) {
                // login
                case 'btnSubmit': btnSubmit_Click(getData()); break;
                // do nothing
                case 'formMail': case 'formPass': break;
                // check password
                case 'seePass': new PasswordField().btnSeePassword(); break;
                // close -> error (x)
                default: validateForm(new FetchCtrl(), { focus: false, msg: false, fields: getData() }); break;
            }
        });

        // --serviceData -------------------------
        function getData() {
            return {
                email: $('#formMail').val().trim(),
                password: $('#formPass').val().trim(),
            };
        }

        // --api -------------------------
        // FetchCtrl
        // --_params -------------------------
        // focus (true,false)
        // msg (true,false)
        // fields (serviceData)
        // -----------------------------------

        function validateForm(api, _params) {

            if (!new EmailField().validate(api, _params))
                return false;

            $('#formPass').focus();

            if (!new PasswordField().validate(api, _params))
                return false;            

            // all ok, loose focus
            document.activeElement.blur();

            return true;
        }

        // --_fields -------------------------
        // serviceData

        function btnSubmit_Click(_fields) {

            var api = new FetchCtrl()

            if (!validateForm(api, { focus: false, msg: true, fields: _fields }))
                return;

            api.loadingOn()

            $('#btnSubmit').removeClass('green')
            $('#btnSubmit').addClass('light')

            setTimeout(() => {
                api.postPublicPortal(JSON.stringify(_fields), 'authenticate_v1')
                    .then(resp => {
                        api.loadingOff()
                        $('#btnSubmit').addClass('green');
                        if (resp.ok === true) {
                            api.loginOk(
                                resp.payload.token,
                                resp.payload.user.email,
                                resp.payload.user.login,
                            );
                            location.href = '/';
                        } else {
                            api.cleanLogin()
                            api.displaySystemPopup('Error', resp.msg)
                        }
                    })
                    .catch(resp => {
                        api.loadingOff()
                        $('#btnSubmit').addClass('green')
                        api.displaySystemPopup('Error', resp.msg)
                    });
            }, 900);
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
                    ${new EmailField().getHtml()}
                    ${new PasswordField().getHtml()}
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
