
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl.js"

export default class {

    static getHtml() {
        return `
            <div class="form-row no-padding">
                <i class="fa fa-lock" style='padding-left:4px' id='failBtnPass'></i>
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
            `;
    }

    static btnSeePassword(id) {
        if (id == undefined) id = '#formPass';
        $(id).removeAttr('type')
        if ($('#seePass').css('color') === $('body').css('color'))
        {
            $('#seePass').css('color', 'red')
            $(id).attr('type', 'text') 
        }
        else
        {
            $('#seePass').css('color', $('body').css('color'))
            $(id).attr('type', 'password') 
        }
    }

    static validate(_params) {
        if (!MainCtrl.isFieldContentValid(_params.fields.password, 20, 'password', 4)) {
            if (_params.focus == true)
                $('#formPass').focus()
            else {
                MainCtrl.errorField('#failBtnPass')
                if (_params.msg == true)
                    MainCtrl.displaySystemPopup('Error', 'Invalid Password')
            }
            return false;
        }
        else
            MainCtrl.errorClean('#failBtnPass')

        return true;
    }
}
