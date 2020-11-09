
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchCtrl from "../Infra/FetchCtrl.js";

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

        function btnSubmit_Click() {
            event.preventDefault();

            var serviceData = {
                email: $('#form-mail')[0].value,
                password: $('#form-pass')[0].value
            };

            var api = new FetchCtrl();

            if (api.isFieldContentValid(serviceData.email) === false) {
                //swal("Ops!", "Email required", "error");
                return;
            }

            if (api.isFieldContentValid(serviceData.password) === false) {
                //swal("Ops!", "Password required", "error");
                return;
            }
            
            //$("#loading").show();
            $("#btnSubmit").prop('disabled', true);

            api.postPublicPortal(JSON.stringify(serviceData), 'authenticate_v1')
                .then(resp => {
              //      $("#loading").hide();
                    if (resp.ok === true) {
                        api.loginOk(
                            resp.payload.token,
                            resp.payload.user.email,
                            resp.payload.user.login,
                        );
                        location.href = '/';
                    } else {
                        api.cleanLogin();
                     //   swal("Ops!", resp.msg, "error");
                        $("#btnSubmit").prop('disabled', false);
                    }
                })
                .catch(err => {
                   // $("#loading").hide();
                    swal("Ops!", err.msg, "error");
                    $("#btnSubmit").prop('disabled', false);
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
                        <i class="fa fa-envelope"></i>
                        <input type="form-mail" name="aaa" class="form-element" placeholder="Username or Email">
                    </div>
                    <div class="form-row no-padding">
                        <i class="fa fa-lock"></i>
                        <input type="form-password" name="aaa" class="form-element" placeholder="Password">
                    </div>
                </div>
                <div class="form-row txt-center">
                    <a href="forgot-password.html" data-loader="show">Forgot password?</a>
                </div>
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
