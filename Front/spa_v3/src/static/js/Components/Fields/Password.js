
//Infrastructure
import MainCtrl from "../../Infra/MainCtrl"

export default class {

    static getHtml() {
        return MainCtrl.HtmlCleanup(`
            <div class="form-row no-padding">
                <i class="fa fa-lock" style='padding-left:4px' id='failBtnPass'></i>
                <table width='100%'>
                    <tr>
                        <td valign='top' width='90%'>
                            <input id="formPass" type="password" class="form-element" placeholder="${MainCtrl.MultiLanguage(7)}">
                        </td>
                        <td valign='top'>
                            <i class="fa fa-eye" id='seePass' title='${MainCtrl.MultiLanguage(8)}'></i>
                        </td>
                    </tr>
                </table>
            </div>
            `);
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
                    MainCtrl.displaySystemPopup(MainCtrl.MultiLanguage(5), MainCtrl.MultiLanguage(9))
            }
            return false;
        }
        else
            MainCtrl.errorClean('#failBtnPass')

        return true;
    }
}
