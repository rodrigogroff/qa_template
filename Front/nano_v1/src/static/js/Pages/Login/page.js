
import {
    getCurrentLanguage,
    MultiLanguage,
    MultiLanguageChange
} from './language'

import {
    Endpoints,
    authenticate_Input,
    authenticate_Output
} from '@app/Infra/Endpoints'

import {
    postPublicPortal,
    SetLanguageHTMLSelect,
    IsLoading,
    loadingOn,
    loadingOff,
    loginOk,
    mockServer,
    CheckPopUpCloseClick,
    setToStorage,
    displaySystemPopup,
} from '@app/Infra/Util'

import MyForm from './Forms/Login'
import PasswordField from '@app/Components/Fields/Password'

export default class LoginPage {

    getHtml() { 
        return MyForm.getHtml(); 
    }

    constructor(params) {
        
        this.params = params;

        // ----------------------------------------------------------------
        // page events here -----------------------------------------------
        // ----------------------------------------------------------------

        $(document).ready(function () {
            SetLanguageHTMLSelect()
            $('#' + MyForm.elements().formMail)[0].focus();
        });

        $(document).on('keydown', function (e) {
            switch (e.keyCode) {
                case 9: MyForm.validate({ focus: false, msg: false, fields: null }); break;
                case 13: btnSubmit_Click(); break;
            }
        });

        $(document).on('change', '#languageSel', function () {
            if (MultiLanguageChange($('#languageSel').val()))
                setTimeout(() => { location.href = '/login'; }, 100);
        });

        document.body.addEventListener("click", e => {
            if (CheckPopUpCloseClick(e)) return;
            var elements = MyForm.elements();
            switch ($(e.target).attr('id')) {
                case elements.btnSubmit: btnSubmit_Click(); break;
                case 'seePass' + elements.formPass: PasswordField.btnSeePassword(elements.formPass); break;
            }
        });

        // ----------------------------------------------------------------
        // page functions here --------------------------------------------
        // ----------------------------------------------------------------

        function btnSubmit_Click() {
            if (IsLoading()) return;
            var elements = MyForm.elements();
            var formData = authenticate_Input(
                document.getElementById(elements.formMail).value.trim(),
                document.getElementById(elements.formPass).value.trim(),
                getCurrentLanguage(),
            );

            if (!MyForm.validate({ focus: false, msg: true, fields: formData }))
                return;

            loadingOn('#' + elements.btnSubmit)

            if (sessionStorage['mock'])
                mockServer(JSON.stringify({
                    payload: true, obj: {
                        token: 'aaaa',
                        user: {
                            email: 'aaa@aa',
                            login: 'aaaa',
                            hsh: '_1',
                        }
                    }
                }));
            
            postPublicPortal(Endpoints().authenticate, formData)
                .then(resp => {
                    if (resp.ok == true)
                        serviceOk(resp.payload)     // output service data 
                    else
                        displaySystemPopup(MultiLanguage(5), resp.msg);
                })
                .catch(resp => {
                    displaySystemPopup(MultiLanguage(5), resp.msg)
                });
        }

        // ----------------------------------------------------------------
        // Flow and routing decision here ---------------------------------
        // ----------------------------------------------------------------

        function serviceOk(payload) {
            loadingOff()
            var response = authenticate_Output(payload);
            loginOk(response);
            if ($('#' + MyForm.elements().keepLogged).is(':checked'))
                setToStorage('hsh', response.user.hsh);
            location.href = '/';
        }
    }
}
