
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchCtrl from "../Infra/FetchCtrl.js";

export default class extends AbstractView {

    initView() {
    }

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

        $("#formLogin").submit(function (event) {            
            btnSubmit_Click()
        });

        function btnSubmit_Click() {
            event.preventDefault();

            var serviceData = {
                email: $('#form-mail')[0].value,
                password: $('#form-pass')[0].value
            };

            var api = new FetchCtrl();

            if (api.isFieldContentValid(serviceData.email) === false) {
                swal("Ops!", "Email required", "error");
                return;
            }

            if (api.isFieldContentValid(serviceData.password) === false) {
                swal("Ops!", "Password required", "error");
                return;
            }
            
            $("#loading").show();
            $("#btnSubmit").prop('disabled', true);

            api.postPublicPortal(JSON.stringify(serviceData), 'authenticate_v1')
                .then(resp => {
                    $("#loading").hide();
                    if (resp.ok === true) {
                        api.loginOk(
                            resp.payload.token,
                            resp.payload.user.email,
                            resp.payload.user.login,
                        );
                        location.href = '/';
                    } else {
                        api.cleanLogin();
                        swal("Ops!", resp.msg, "error");
                        $("#btnSubmit").prop('disabled', false);
                    }
                })
                .catch(err => {
                    $("#loading").hide();
                    swal("Ops!", err.msg, "error");
                    $("#btnSubmit").prop('disabled', false);
                });
        }
    }

    getHtml() {
        return `
            <div align='center'>
                <div class="auth-boxed">
                    <div class="auth-wrapper">
                        <div class="auth-content" align='left'>
                            <div class="auth-text">
                                <div class="logo logo-type"><a href="">Template Login</a></div>
                                <p class="mb-0"><span>Welcome,</span> sign in to continue.</p>
                            </div>
                            <form action="index.html">
                                <div class="form-group mb-20">
                                    <label for="form-mail"><strong>E-Mail</strong></label>
                                    <div class="input-icon input-icon-right">
                                        <input type="email" class="form-control form-control-pill" id="form-mail" placeholder="Enter your e-mail address">  
                                        <i class="far fa-envelope icon text-fade"></i>
                                    </div>
                                </div>
                                <div class="form-group mb-20">
                                    <label for="form-pass"><strong>Password</strong></label>
                                    <div class="input-icon input-icon-right">
                                        <input type="password" class="form-control form-control-pill" id="form-pass" placeholder="Enter your password"> 
                                        <i class="fas fa-lock icon text-fade"></i>
                                    </div>
                                </div>
                                <div align="center" style="min-height:30px;">
                                    <div class="loader-ring" id="loading" style="display:none;height:20px">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div class="form-group mt-20">
                                    <button id='btnSubmit' class="btn btn-primary btn-round btn-block btn-md">Sign In</button>
                                </div>
                                <div class="auth-footer">
                                    <hr>
                                    <a href="page-register.html">Forgot Password?</a>
                                    <p class="mt-5">
                                        Do not have an account? <a href="page-register.html">Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}