
export default class {

    constructor(params) {
    }

    validate(api,_params) {
        if (!api.isFieldContentValid(_params.fields.email, 99, 'email')) {
            if (_params.focus == true)
                $('#formMail').focus()
            else {
                api.errorField('#failBtnMail')
                if (_params.msg == true)
                    api.displaySystemPopup('Error', 'Invalid Email')
            }
            return false;
        }
        else
            api.errorClean('#failBtnMail')
        return true;
    }

    getHtml() {
        return `
            <div class="form-row no-padding">
                <i class="fa fa-envelope" id='failBtnMail'></i>
                <input id="formMail" type="text" class="form-element" placeholder="Username or Email">
            </div>
            `;
    }
}