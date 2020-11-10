
//Infrastructure
import AbstractView from "../Infra/AbstractView.js"
import FetchCtrl from "../Infra/FetchCtrl.js";

//Components


export default class extends AbstractView {

    constructor(params) {
        super(params)

        $(document).ready(function () {
            $('#formMail').focus();
        });

        $(document).on('keydown', function (e) {
            var code = e.keyCode || e.which;
            if (code === 9) {  // tab
                e.preventDefault();
                ValidateForm(false, false);
            }
            else if (code === 13) { // enter
                btnSubmit_Click()  
            }                          
        });

        $(document).bind('click', function (e) {
            switch ($(e.target).attr('id')) {
                case 'btnSubmit': btnSubmit_Click(); break;
                case 'formMail':
                case 'formPass': break;

                case 'seePass': 
                    if ($('#seePass').css('color') !== 'rgb(102, 127, 151)')
                    {
                        $('#seePass').css('color', $('body').css('color'))
                        $('#formPass').removeAttr('type');
                        $('#formPass').attr('type', 'password');
                    }
                    else
                    {
                        $('#seePass').css('color','green')
                        $('#formPass').removeAttr('type');
                        $('#formPass').attr('type', 'text');
                    }
                    break;

                // close -> error (click no x)
                default: ValidateForm(true); break;
            }
        });

        function getData() {
            return {
                email: $('#formMail').val().trim(),
                password: $('#formPass').val().trim(),
            };
        }

        function ValidateForm(set_focus, show_msg) {

            var api = new FetchCtrl();
            var serviceData = getData();

            var id_failBtnMail = '#failBtnMail'
            var id_failBtnPass = '#failBtnPass'

            if (!api.isFieldContentValid(serviceData.email, 99, 'email')) {
                if (set_focus == true)
                    $('#formMail').focus();            
                else
                {
                    api.errorField(id_failBtnMail)
                    if (show_msg==true)
                        api.displaySystemPopup('Error', 'Invalid Email');
                }
                return false;
            }
            else
                api.errorClean(id_failBtnMail)

            $('#formPass').focus();

            if (!api.isFieldContentValid(serviceData.password, 20, 'password', 4)) {
                if (set_focus==true)
                    $('#formPass').focus();
                else
                {
                    api.errorField(id_failBtnPass)
                    if (show_msg==true)
                        api.displaySystemPopup('Error', 'Invalid Password');
                }
                return false;
            }
            else
                api.errorClean(id_failBtnPass)

            // all ok, loose focus
            document.activeElement.blur();

            return true;
        }

        function btnSubmit_Click() {

            if (!ValidateForm(false, true))
                return;

            var api = new FetchCtrl();
            var serviceData = getData();

            api.loadingOn();

            $('#btnSubmit').removeClass('green');
            $('#btnSubmit').addClass('light');

            setTimeout(() => {

                api.postPublicPortal(JSON.stringify(serviceData), 'authenticate_v1')
                .then(resp => {
                    api.loadingOff();
                    $('#btnSubmit').addClass('green');
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
                    }
                })
                .catch(resp => {
                    api.loadingOff();
                    $('#btnSubmit').addClass('green');
                    api.displaySystemPopup('Error', resp.msg);                    
                });                

            }, 1500);            
        }
    }

    getHtml() {
        return `
            <br>
            <div style="width:280px" class="form-row-group-dark"> 
                <div class="form-divider"></div>
                <div align='center'>
                    <h2>Template Login</h2>
                </div>
                <br>
                <div class="form-row-group with-icons" align="left">                    
                    <div class="form-row no-padding">
                        <i class="fa fa-envelope" id='failBtnMail'></i>
                        <input id="formMail" type="text" class="form-element" placeholder="Username or Email">
                    </div>
                    <div class="form-row no-padding">
                        <i class="fa fa-lock" id='failBtnPass'></i>     
                        <table width='100%'>
                            <tr>
                                <td valign='top' width='90%'>
                                    <input id="formPass" type="password" class="form-element" placeholder="Password">                        
                                </td>
                                <td valign='top'>
                                    <i class="fa fa-eye" id='seePass' title='See password'></i>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br>                
                <div class="form-row txt-center">
                    <a href="forgot-password.html" data-loader="show">Forgot password?</a>
                </div>
                <br>
                <div class="form-divider"></div>
                <div class="form-row">
                    <a id="btnSubmit" class="button circle block green">
                        Login &nbsp;&nbsp;&nbsp;
                        <i class="fa fa-spinner fa-spin" id='loading' style="font-size:24px;display:none;"></i>
                    </a>
                </div>
                <br>
                <div class="form-row txt-center">
                    Not registered? <a href="signup.html" data-loader="show">Sign Up</a>
                </div>
                <br>
                <br>
            </div>
            `;
    }
}