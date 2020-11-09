
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchCtrl from "../Infra/FetchCtrl.js";

//Components
import Modal from "../Components/Modal.js";

export default class extends AbstractView {

    constructor(params) {
        super(params)

        $(document).on('keypress', function (e) {
            if (e.which == 13) {
                btnSubmit_Click()
            }
        });

        $(document).bind('click', function (e) {
            var target = $(e.target);
            switch (target.attr('id')) {
                case 'btnSubmit': btnSubmit_Click(); break;
            }
        });

        function ValidateForm(api, serviceData)
        {
            if (api.isFieldContentValid(serviceData.email) === false) {
                api.errorField ('#failBtnMail')    
                api.displaySystemPopup('Error', 'Email required');
                return false;
            }
            else
                api.errorClean ('#failBtnMail')    

            if (api.isFieldContentValid(serviceData.password) === false) {
                api.errorField ('#failBtnPass')
                api.displaySystemPopup('Error', 'Password required');
                return false;
            }
            else
                api.errorClean ('failBtnPass')    
            
            api.loadingOn();
            api.disableButton('#btnSubmit')

            return true;
        }

        function btnSubmit_Click() {
            
            event.preventDefault();

            var api = new FetchCtrl();

            var serviceData = {
                email: $('#formMail').val(),
                password: $('#formPass').val()
            };

            if (!ValidateForm(api, serviceData))
                return;            
            
            api.postPublicPortal(JSON.stringify(serviceData), 'authenticate_v1')
                .then(resp => {
                    api.loadingOff();
                    if (resp.ok === true) {
                        api.loginOk(
                            resp.payload.token,
                            resp.payload.user.email,
                            resp.payload.user.login,
                        );
                        location.href = '/';
                    } else {
                        api.cleanLogin();
                        api.displaySystemPopup('Error', resp.msg);
                        api.enableButton('#btnSubmit');
                    }
                })
                .catch(err => {
                    api.loadingOff();
                    api.displaySystemPopup('Error', resp.msg);
                    api.enableButton('#btnSubmit');                    
                });
        }
    }

    getHtml() {
        return `
            <div style="width:400px"> 
                <div class="form-divider"></div>
                <br>
                <div align='center'>
                    <h4>Template Login</h4>
                </div>
                <br>
                <div class="form-row-group with-icons" align="left">                    
                    <div class="form-row no-padding">
                        <i class="fa fa-envelope" id='failBtnMail'></i>
                        <input id="formMail" type="text" class="form-element" placeholder="Username or Email">
                    </div>
                    <div class="form-row no-padding">
                        <i class="fa fa-lock" id='failBtnPass'></i>
                        <input id="formPass" type="password" class="form-element" placeholder="Password">
                    </div>
                </div>
                <br>
                <br>
                <div class="form-row txt-center">
                    <a href="forgot-password.html" data-loader="show">Forgot password?</a>
                </div>
                <br>
                <div class="form-divider"></div>
                <div class="form-row">
                    <a id="btnSubmit" class="button circle block green">Login</a>
                </div>
                <div class="form-row txt-center">
                    Don't you have an account yet? <a href="signup.html" data-loader="show">Sign Up</a>
                </div>
            </div>
            `;
    }
}
