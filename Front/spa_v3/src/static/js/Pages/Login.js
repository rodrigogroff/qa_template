
//Infrastructure
import MainCtrl from "../Infra/MainCtrl"
import FetchCtrl from "../Infra/FetchCtrl"
import EndPoints from "../Infra/Endpoints"

//Components
import LoginForm from "../Components/Forms/Login"
import PasswordField from "../Components/Fields/Password"
import ImageLoader from "../Components/ImageLoader"

export default class extends MainCtrl {

    getHtml() {
        // macro component here
        return `
            <br>
            ${LoginForm.getHtml()}
            `;
    }

    constructor(params) {
        super(params)

        // All page events here --------------------------------------------------------

        $(document).ready(function () {
            $('#formMail').focus() // user does not need to click in first field
            ImageLoader.loadAsync('logoId', 'https://lirp-cdn.multiscreensite.com/97c59373/dms3rep/multi/opt/LOGO.CONVEYbranco+total-1920w.png');
        });

        $(document).on('keydown', function (e) {
            switch (e.keyCode) {
                case 9: LoginForm.validate({ focus: false, msg: false, fields: null }); break;      //tab                
                case 13: btnSubmit_Click(); break;                                                      //enter
            }
        });

        $(document).bind('click', function (e) {
            switch ($(e.target).attr('id')) {
                case 'btnSubmit': btnSubmit_Click(); break;                                                     // login                
                case 'seePass': PasswordField.btnSeePassword(); break;                                          // password eye                
                case 'popupClose': LoginForm.validate({ focus: false, msg: false, fields: null }); break;   // close -> error (x)
            }
        });

        function btnSubmit_Click() {
            if (MainCtrl.IsLoading()) return;
            var formData = LoginForm.extractFormData();
            if (!LoginForm.validate({
                focus: false,
                msg: true,
                fields: formData
            })) {
                return;
            }
            MainCtrl.loadingOn('#btnSubmit')            
            backend(formData)
        }

        // backend access here --------------------------------------------------------

        function backend(formData) {
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

        // Flow and routing decision here --------------------------------------------------------

        function serviceOk(payload) {
            // stop icon
            MainCtrl.loadingOff()
            // convert data
            var response = new Endpoints().authenticate_Output(payload);
            // set user logged in
            MainCtrl.loginOk(response.token, response.user.email, response.user.login);
            // redirect to index
            location.href = '/';
        }
    }
}
